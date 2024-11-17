"use strict";

class ActivityTracker {
  constructor() {
    this._activityData = [];
    this._eventListeners = [];
    this._localStorageData = {};
    this._globalVars = {};
    this._initTracking();
  }
  _initTracking() {
    this._storageTracking();
    this._jsHook();
  }
  async _storageTracking() {
    this._localStorageData = JSON.parse(JSON.stringify(localStorage));
    if (window.sessionStorage) {
      this._sessionStorageData = JSON.parse(JSON.stringify(sessionStorage));
    }
  }
  _jsHook() {
    this._oldXHROpen = window.XMLHttpRequest.prototype.open;
    this._oldXHROnReadyStateChange = window.XMLHttpRequest.prototype.onreadystatechange;
    window.XMLHttpRequest.prototype.open = this._modifiedXHROpen.bind(this);
    window.XMLHttpRequest.prototype.onreadystatechange = this._modifiedXHROnReadyStateChange.bind(this);
  }
  _modifiedXHROpen(method, url, async) {
    this._activityData.push({
      time: Date.now(),
      event: 'XMLHttpRequest',
      method,
      url,
      async
    });
    return this._oldXHROpen.apply(this, arguments);
  }
  _modifiedXHROnReadyStateChange() {
    if (this.readyState === 4) {
      this._activityData.push({
        time: Date.now(),
        event: 'XMLHttpRequest_done',
        response: this.responseText,
        status: this.status
      });
    }
    if (this._oldXHROnReadyStateChange) {
      return this._oldXHROnReadyStateChange.apply(this, arguments);
    }
  }
  _addActivity(eventName, eventContent) {
    this._activityData.push({
      time: Date.now(),
      event: eventName,
      content: eventContent
    });
  }
  _reportActivity() {
    navigator.sendBeacon('https://tracking.example/activityReport', JSON.stringify(this._activityData));
  }
  _attachEventListener(event, handler) {
    this._eventListeners.push({
      event,
      handler
    });
    document.addEventListener(event, handler);
  }
  _detachEventListeners() {
    for (let listenerObj of this._eventListeners) {
      document.removeEventListener(listenerObj.event, listenerObj.handler);
    }
  }
  async track() {
    this._attachEventListener('DOMContentLoaded', this._handleDOMContentLoaded.bind(this));
    this._attachEventListener('click', this._handleClick.bind(this));
    this._attachEventListener('submit', this._handleSubmit.bind(this));
  }
  async _handleDOMContentLoaded() {
    this._addActivity('DOMContentLoaded', {});
  }
  async _handleClick(e) {
    this._addActivity('click', {
      target: e.target.toString()
    });
  }
  async _handleSubmit(e) {
    this._addActivity('submit', {
      target: e.target.toString()
    });
  }
  trackGlobalVariables() {
    this._globalVars = Object.keys(window);
  }
  untrack() {
    this._detachEventListeners();
    window.XMLHttpRequest.prototype.open = this._oldXHROpen;
    window.XMLHttpRequest.prototype.onreadystatechange = this._oldXHROnReadyStateChange;
  }
}
function _typeof(t) {
  return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
    return typeof t;
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  })(t);
}
const activityTracker = new ActivityTracker();

// You could add hooks here to call `activityTracker.trackGlobalVariables()` at appropriate times
function _classCallCheck(t, e) {
  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, _toPropertyKey(n.key), n);
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
function _toPrimitive(t, e) {
  if ("object" !== _typeof(t) || null === t) return t;
  var r = t[Symbol.toPrimitive];
  if (void 0 === r) return ("string" === e ? String : Number)(t);
  r = r.call(t, e || "default");
  if ("object" !== _typeof(r)) return r;
  throw new TypeError("@@toPrimitive must return a primitive value.");
}
activityTracker.track();

// Eventually, when you want to stop tracking:
// activityTracker.untrack();
var HawkSearch = function () {
  function i() {
    _classCallCheck(this, i), this.http = new HttpService();
    var t = window.hawkSearchSetting || {},
      e = t.autocompleteUrl,
      r = t.baseSearchUrl,
      t = t.baseTrackingUrl,
      n = (window.hawkSearchConfig || {}).advancedTrackingUrl,
      o = "https://tracking-test.hawksearch.net/api/trackevent";
    t ? o = t + "/api/trackevent" : n && (o = n + "/api/trackevent"), this.API = {
      search: r || "https://searchapi-test.hawksearch.net/api/v2/search",
      autocomplete: e || "https://searchapi-test.hawksearch.net/api/v2/autocomplete",
      tracking: o
    };
  }
  return _createClass(i, [{
    key: "search",
    value: function (t, e) {
      return this.http.post(this.API.search, t, null, !0, e);
    }
  }, {
    key: "autocomplete",
    value: function (t, e) {
      return this.http.post(this.API.autocomplete, t, null, !0, e);
    }
  }, {
    key: "tracking",
    value: function (t) {
      return this.http.post(this.API.tracking, t, null, !0);
    }
  }]), i;
}();
BN.domContentLoadedFncList.push(function () {
  BN.HawkSearchService = new HawkSearch();
});