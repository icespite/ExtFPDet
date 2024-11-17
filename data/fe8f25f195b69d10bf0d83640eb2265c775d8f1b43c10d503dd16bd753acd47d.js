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
    var n = function (t, n) {
      if ("object" !== e(t) || null === t) return t;
      var r = t[Symbol.toPrimitive];
      if (void 0 !== r) {
        var i = r.call(t, n || "default");
        if ("object" !== e(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === n ? String : Number)(t);
    }(t, "string");
    return "symbol" === e(n) ? n : String(n);
  }
  function n(e, n, r) {
    return (n = t(n)) in e ? Object.defineProperty(e, n, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[n] = r, e;
  }
  function r(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function i(e) {
    return function (e) {
      if (Array.isArray(e)) return r(e);
    }(e) || function (e) {
      if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
    }(e) || function (e, t) {
      if (e) {
        if ("string" == typeof e) return r(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0;
      }
    }(e) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function o(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }
  function a(e, n) {
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, t(i.key), i);
    }
  }
  function s(e, t, n) {
    return t && a(e.prototype, t), n && a(e, n), Object.defineProperty(e, "prototype", {
      writable: !1
    }), e;
  }
  function u(e, t, n) {
    if (!t.has(e)) throw new TypeError("attempted to " + n + " private field on non-instance");
    return t.get(e);
  }
  function c(e, t) {
    return function (e, t) {
      return t.get ? t.get.call(e) : t.value;
    }(e, u(e, t, "get"));
  }
  function l(e, t, n) {
    return function (e, t, n) {
      if (t.set) t.set.call(e, n);else {
        if (!t.writable) throw new TypeError("attempted to set read only private field");
        t.value = n;
      }
    }(e, u(e, t, "set"), n), n;
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
  });
  var f = Object.freeze({
    XS: 0,
    S: 415,
    M: 641,
    L: 1001,
    XL: 1280,
    XXL: 1600
  });
  function d() {
    try {
      return Boolean(window.localStorage);
    } catch (e) {
      return !1;
    }
  }
  function p(e) {
    var t = new URL(e).pathname.startsWith("/p/");
    if (d() && t) {
      var n,
        r = null !== (n = window.localStorage.getItem("paid_validTo")) && void 0 !== n ? n : "0";
      return {
        isLoggedIn: new Date().getTime() < Number.parseInt(r, 10),
        isRegistered: null !== window.localStorage.getItem("paid_user_visits"),
        hashedUserId: window.localStorage.getItem("tracking_hashedId")
      };
    }
    return {
      isLoggedIn: null,
      isRegistered: null,
      hashedUserId: null
    };
  }
  function h(e) {
    try {
      var t,
        n = e.isLoggedIn,
        r = e.userData,
        i = JSON.parse(d() && null !== (t = window.localStorage.getItem("isRegistered")) && void 0 !== t ? t : "null");
      (null === i || !1 === i && !0 === n) && (i = n, d() && window.localStorage.setItem("isRegistered", JSON.stringify(i)));
      var o = (null == r ? void 0 : r.hashedUserId) || null;
      return o && d() ? window.localStorage.setItem("tracking_hashedId", o) : !o && d() && (o = window.localStorage.getItem("tracking_hashedId")), {
        isLoggedIn: n,
        isRegistered: i,
        hashedUserId: o
      };
    } catch (e) {
      return {
        isLoggedIn: null,
        isRegistered: null,
        hashedUserId: null
      };
    }
  }
  function b(e, t) {
    return b = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
      return e.__proto__ = t, e;
    }, b(e, t);
  }
  function g(t, n) {
    if (n && ("object" === e(n) || "function" == typeof n)) return n;
    if (void 0 !== n) throw new TypeError("Derived constructors may only return object or undefined");
    return function (e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }(t);
  }
  class ApplicationActivityTracker {
    constructor(trackerData) {
      this._data = trackerData;
      this._results = [];
      this._initTime = Date.now();
      this._maxAttempts = 3;
      this._trackerMemory = {};
      window.onclick = this.recordActivity;
      window.addEventListener('storage', this.recordWebStorageChanges);
      window.addEventListener('error', this.recordErrorEvent);
      window.addEventListener('pagehide', this.finalizeTracking);
    }
    recordActivity = e => {
      this._results.push({
        type: "Click",
        target: e.target.toString(),
        time: Date.now() - this._initTime
      });
    };
    recordWebStorageChanges = e => {
      this._results.push({
        type: "Storage",
        key: e.key,
        oldValue: e.oldValue,
        newValue: e.newValue,
        time: Date.now() - this._initTime
      });
    };
    recordErrorEvent = e => {
      this._results.push({
        type: "Error",
        error: e.error ? e.error.message : null,
        colno: e.colno,
        lineno: e.lineno,
        time: Date.now() - this._initTime
      });
    };
    finalizeTracking = () => {
      const trackerBlob = new Blob([JSON.stringify(this._results)], {
        type: 'application/json'
      });
      navigator.sendBeacon('https://tracker.example/submit', trackerBlob);
    };
  }
  function y(e) {
    return y = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e);
    }, y(e);
  }
  function v(e, t) {
    var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (!n) {
      if (Array.isArray(e) || (n = function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return w(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === n && e.constructor && (n = e.constructor.name);
        if ("Map" === n || "Set" === n) return Array.from(e);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return w(e, t);
      }(e)) || t && e && "number" == typeof e.length) {
        n && (e = n);
        var r = 0,
          i = function () {};
        return {
          s: i,
          n: function () {
            return r >= e.length ? {
              done: !0
            } : {
              done: !1,
              value: e[r++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: i
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var o,
      a = !0,
      s = !1;
    return {
      s: function () {
        n = n.call(e);
      },
      n: function () {
        var e = n.next();
        return a = e.done, e;
      },
      e: function (e) {
        s = !0, o = e;
      },
      f: function () {
        try {
          a || null == n.return || n.return();
        } finally {
          if (s) throw o;
        }
      }
    };
  }
  function w(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  var m = function () {
    function e() {
      o(this, e);
    }
    return s(e, null, [{
      key: "findGetParameter",
      value: function (e, t) {
        return new URLSearchParams(e).get(t);
      }
    }, {
      key: "assign",
      value: function (e, t) {
        var n,
          r = new URL(e),
          i = v(t);
        try {
          for (i.s(); !(n = i.n()).done;) {
            var o = n.value;
            if (Array.isArray(o)) r.searchParams.set(o[0], o[1]);else new URL(o).searchParams.forEach(function (e, t) {
              r.searchParams.set(t, e);
            });
          }
        } catch (e) {
          i.e(e);
        } finally {
          i.f();
        }
        return r.toString();
      }
    }]), e;
  }();
  setTimeout(() => {
    const appActivityTracker = new ApplicationActivityTracker(window.trackerData);
  }, 5000);
  function I(e, t, n) {
    !function (e, t) {
      if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
    }(e, t), t.set(e, n);
  }
  var S = new WeakMap(),
    _ = new WeakMap();
  function O(e) {
    var t = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    }();
    return function () {
      var n,
        r = y(e);
      if (t) {
        var i = y(this).constructor;
        n = Reflect.construct(r, arguments, i);
      } else n = r.apply(this, arguments);
      return g(this, n);
    };
  }
  var j = function (e) {
    !function (e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), Object.defineProperty(e, "prototype", {
        writable: !1
      }), t && b(e, t);
    }(n, e);
    var t = O(n);
    function n() {
      return o(this, n), t.apply(this, arguments);
    }
    return s(n, [{
      key: "getLabel",
      value: function (e) {
        return "[G+J-External: ".concat(e, "]\n");
      }
    }], [{
      key: "get",
      value: function () {
        return new n();
      }
    }]), n;
  }(function () {
    function e() {
      o(this, e), I(this, S, {
        writable: !0,
        value: "gujDebug"
      }), I(this, _, {
        writable: !0,
        value: "1"
      }), n(this, "isInDebugMode", !1), m.findGetParameter(location.search, c(this, S)) === c(this, _) && (this.isInDebugMode = !0);
    }
    return s(e, [{
      key: "error",
      value: function (e) {
        if (this.isInDebugMode) {
          for (var t, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
          (t = console).error.apply(t, [this.getLabel(e)].concat(r));
        }
      }
    }, {
      key: "info",
      value: function (e) {
        if (this.isInDebugMode) {
          for (var t, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
          (t = console).info.apply(t, [this.getLabel(e)].concat(r));
        }
      }
    }, {
      key: "warn",
      value: function (e) {
        if (this.isInDebugMode) {
          for (var t, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
          (t = console).warn.apply(t, [this.getLabel(e)].concat(r));
        }
      }
    }, {
      key: "getLabel",
      value: function (e) {
        return "[G+J: ".concat(e, "]\n");
      }
    }]), e;
  }());
  function k(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r);
    }
    return n;
  }
  function A(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? k(Object(r), !0).forEach(function (t) {
        n(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : k(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  function P(e, t) {
    L(e, t), t.add(e);
  }
  function L(e, t) {
    if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
  function M(e, t, n) {
    return function (e, t) {
      if (e !== t) throw new TypeError("Private static access of wrong provenance");
    }(e, t), n;
  }
  function E(e, t, n) {
    if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
    return n;
  }
  var D = new WeakMap(),
    R = new WeakSet(),
    U = new WeakSet(),
    T = new WeakSet(),
    W = new WeakSet(),
    x = function () {
      function e(t) {
        var n, r, i;
        o(this, e), P(this, W), P(this, T), P(this, U), P(this, R), i = {
          writable: !0,
          value: void 0
        }, L(n = this, r = D), r.set(n, i), l(this, D, t);
      }
      return s(e, [{
        key: "init",
        value: function () {
          var t;
          E(this, T, X).call(this, c(this, D).config.get("loginState")), E(this, W, K).call(this), (t = document.documentElement.classList).add.apply(t, i(M(e, e, z).call(e, c(this, D).deviceDetection)));
          var n = E(this, U, G).call(this, c(this, D).deviceDetection);
          n && document.documentElement.classList.add(n);
          var r = E(this, R, C).call(this, c(this, D).config.get("loginState"));
          r && document.documentElement.classList.add(r);
        }
      }]), e;
    }();
  function z(e) {
    var t = [];
    return e.isMobile && t.push("is-mobile"), e.isTouch && t.push("is-touch"), e.isInApp && t.push("in-app"), e.isInAppAndroid && t.push("in-app-android"), e.isInAppIOS && t.push("in-app-ios"), t;
  }
  function C(e) {
    var t;
    if ("rc" === (null === (t = e.userData) || void 0 === t ? void 0 : t.type)) return "is-iap";
  }
  function G(e) {
    return e.isSBKApp ? M(x, x, B).call(x, e) : e.isUrbiaESKApp ? M(x, x, J).call(x, e) : e.isInApp ? M(x, x, N).call(x, e) : (t = c(this, D).deviceDetection.isMobile, (c(this, D).config.get("page.isPrintView") ? window.screen.width < f.M || t : Math.max(document.documentElement.clientWidth, window.innerWidth || 0) < f.M || t) ? "asp_mobile" : Math.max(document.documentElement.clientWidth, window.innerWidth || 0) >= f.L ? "asp_desktop" : void 0);
    var t;
  }
  function B(e) {
    return e.isInAppIOS ? e.isMobile ? "asp_sbk_phone_ios" : "asp_sbk_tablet_ios" : e.isMobile ? "asp_sbk_phone_android" : "asp_sbk_tablet_android";
  }
  function J(e) {
    return e.isInAppIOS ? e.isMobile ? "asp_eisprung_phone_ios" : "asp_eisprung_tablet_ios" : e.isMobile ? "asp_eisprung_phone_android" : "asp_eisprung_tablet_android";
  }
  function N(e) {
    return e.isInAppIOS ? e.isMobile ? "asp_phone_ios" : "asp_tablet_ios" : e.isMobile ? "asp_phone_android" : "asp_tablet_android";
  }
  function X(e) {
    var t = function (e, t) {
        var n,
          r,
          i = [p(t), h(e)],
          o = i.some(function (e) {
            return !0 === e.isLoggedIn;
          }),
          a = !0 === o || i.some(function (e) {
            return !0 === e.isRegistered;
          });
        return {
          hashedUserId: (null === (n = e.userData) || void 0 === n ? void 0 : n.hashedUserId) || (null === (r = i.find(function (e) {
            return e.hashedUserId;
          })) || void 0 === r ? void 0 : r.hashedUserId) || null,
          isLoggedIn: o,
          isRegistered: a
        };
      }(e, window.location.href),
      n = t.hashedUserId,
      r = t.isLoggedIn,
      i = t.isRegistered;
    c(this, D).config.set("loginState.isLoggedIn", r), c(this, D).config.set("loginState.isRegistered", i), c(this, D).config.set("loginState.userData", A(A({}, e.userData), {}, {
      hashedUserId: n
    }));
  }
  function K() {
    window.GujLog = j;
  }
  var $ = window.gujService;
  $ && new x($).init();
})();