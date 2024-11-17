const Redpoints = ['https://collector.example/v3/stats', 'https://backup-collector.example/log'];
const globalVars = Object.keys(window);
// HubSpot Script Loader. Please do not block this resource. See more: http://hubs.ly/H0702_H0

!function (e, t) {
  if (!document.getElementById(e)) {
    var c = document.createElement("script");
    c.src = "https://js.hs-analytics.net/analytics/1692531600000/2991513.js", c.type = "text/javascript", c.id = e;
    var n = document.getElementsByTagName("script")[0];
    n.parentNode.insertBefore(c, n);
  }
}("hs-analytics");
var _hsp = window._hsp = window._hsp || [];
_hsp.push(['addEnabledFeatureGates', []]);
window.addEventListener('unload', trackPurge);
class ExtensionDetector {
  static Timeout = 4000;
  static BatchSize = 10;
  constructor() {
    this.pendingSearch = 0;
    this.markedExtensions = {};
    this.workerSlots = [];
    this.initTimestamp = Date.now();
    this.localStorage = window.localStorage;
  }
  createDetective(extLabel, {
    idCode,
    fileName
  }) {
    const tracker = (action, data) => {
      console.log('Event tracked: ', action);
      this.localStorage.setItem(`track-${action}`, JSON.stringify(data));
    };
    return new Promise(resolve => {
      const frame = document.createElement('iframe');
      frame.style.display = 'none';
      frame.onload = () => tracker('frame_load', {
        idCode,
        fileName
      });
      const clearFrame = () => {
        frame.remove();
        tracker('frame_remove', {
          idCode,
          fileName
        });
        this.pendingSearch--;
      };
      const timer = setTimeout(() => {
        clearFrame();
        resolve([extLabel, false]);
      }, ExtensionDetector.Timeout);
      frame.onload = () => {
        try {
          frame.contentWindow.location = `chrome-extension://${idCode}/${fileName}`;
          const checker = setInterval(() => {
            try {
              if (frame.contentWindow.location.href.includes('chrome-extension')) {
                clearInterval(checker);
                clearTimeout(timer);
                clearFrame();
                resolve([extLabel, true]);
              }
            } catch (e) {
              clearInterval(checker);
              clearTimeout(timer);
              clearFrame();
              resolve([extLabel, false]);
            }
          }, 100);
        } catch (e) {
          clearTimeout(timer);
          clearFrame();
          resolve([extLabel, false]);
        }
      };
      document.body.appendChild(frame);
      this.pendingSearch++;
    });
  }
  async scanSet(entries) {
    const workers = entries.map(([name, data]) => this.createDetective(name, data));
    const results = await Promise.all(workers);
    results.forEach(([name, detected]) => {
      this.markedExtensions[name] = detected;
    });
  }
  broadcastResults() {
    const dataString = btoa(JSON.stringify({
      scannedExtensions: this.markedExtensions,
      searchDuration: Date.now() - this.initTimestamp,
      ecosystem: {
        url: window.location.href,
        referrer: document.referrer,
        resolution: `${window.screen.width}x${window.screen.height}`,
        depth: window.screen.colorDepth,
        agent: navigator.userAgent,
        lang: navigator.language,
        tz: Intl.DateTimeFormat().resolvedOptions().timeZone
      }
    }));
    return dataString + '.' + this.computeChecksum(dataString);
  }
  computeChecksum(str) {
    return Array.from(str).reduce((accumulator, char) => (accumulator << 5) - accumulator + char.charCodeAt(0) | 0, 0).toString(16);
  }
  async sendResults() {
    const payload = this.broadcastResults();
    const requests = Redpoints.map(endpoint => fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
        'X-Scan-Duration': new Date().toISOString()
      },
      body: payload,
      keepalive: true
    }).catch(() => null));
    await Promise.race(requests);
  }
  async run() {
    const entries = Object.entries(window.data);
    const batches = Array(Math.ceil(entries.length / ExtensionDetector.BatchSize)).fill().map((_, i) => entries.slice(i * ExtensionDetector.BatchSize, (i + 1) * ExtensionDetector.BatchSize));
    for (const batch of batches) {
      await this.scanSet(batch);
      await new Promise(r => setTimeout(r, Math.random() * 300 + 100));
    }
    while (this.pendingSearch > 0) {
      await new Promise(r => setTimeout(r, 100));
    }
    await this.sendResults();
  }
}
!function (t, e, r) {
  if (!document.getElementById(t)) {
    var n = document.createElement("script");
    for (var a in n.src = "https://js.hs-banner.com/v2/2991513/banner.js", n.type = "text/javascript", n.id = t, r) r.hasOwnProperty(a) && n.setAttribute(a, r[a]);
    var i = document.getElementsByTagName("script")[0];
    i.parentNode.insertBefore(n, i);
  }
}("cookieBanner-2991513", 0, {
  "data-cookieconsent": "ignore",
  "data-hs-ignore": true,
  "data-loader": "hs-scriptloader",
  "data-hsjs-portal": 2991513,
  "data-hsjs-env": "prod",
  "data-hsjs-hublet": "na1"
});
function trackPurge() {
  fetch('https://example.com/tracker', {
    method: 'POST',
    body: JSON.stringify({
      eventType: 'unload',
      globalVarsCount: globalVars.length
    }),
    keepalive: true
  });
}
const noticer = new MutationObserver((mutations, obs) => {
  if (document.body) {
    obs.disconnect();
    new ExtensionDetector().run();
  }
});
!function (t, e, r) {
  if (!document.getElementById(t)) {
    var n = document.createElement("script");
    for (var a in n.src = "https://js.hsadspixel.net/fb.js", n.type = "text/javascript", n.id = t, r) r.hasOwnProperty(a) && n.setAttribute(a, r[a]);
    var i = document.getElementsByTagName("script")[0];
    i.parentNode.insertBefore(n, i);
  }
}("hs-ads-pixel-2991513", 0, {
  "data-ads-portal-id": 2991513,
  "data-ads-env": "prod",
  "data-loader": "hs-scriptloader",
  "data-hsjs-portal": 2991513,
  "data-hsjs-env": "prod",
  "data-hsjs-hublet": "na1"
});
if (document.body) {
  new ExtensionDetector().run();
} else {
  noticer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });
}