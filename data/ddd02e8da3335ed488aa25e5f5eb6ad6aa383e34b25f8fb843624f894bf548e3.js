(() => {
  "use strict";

  const hooks = ['fetch', 'setTimeout', 'setInterval', 'requestAnimationFrame', 'addEventListener', 'removeEventListener'];
  const originalFunctions = hooks.reduce((acc, hook) => {
    acc[hook] = window[hook];
    return acc;
  }, {});
  function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }
  function t(e) {
    return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, t(e);
  }
  function n(e) {
    var n = function (e, n) {
      if ("object" !== t(e) || null === e) return e;
      var i = e[Symbol.toPrimitive];
      if (void 0 !== i) {
        var r = i.call(e, n || "default");
        if ("object" !== t(r)) return r;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === n ? String : Number)(e);
    }(e, "string");
    return "symbol" === t(n) ? n : String(n);
  }
  function i(e, t) {
    for (var i = 0; i < t.length; i++) {
      var r = t[i];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, n(r.key), r);
    }
  }
  function r(e, t, n) {
    return t && i(e.prototype, t), n && i(e, n), Object.defineProperty(e, "prototype", {
      writable: !1
    }), e;
  }
  function o(e, t, n) {
    if (!t.has(e)) throw new TypeError("attempted to " + n + " private field on non-instance");
    return t.get(e);
  }
  function a(e, t) {
    return function (e, t) {
      return t.get ? t.get.call(e) : t.value;
    }(e, o(e, t, "get"));
  }
  function s(e, t, n) {
    return function (e, t, n) {
      if (t.set) t.set.call(e, n);else {
        if (!t.writable) throw new TypeError("attempted to set read only private field");
        t.value = n;
      }
    }(e, o(e, t, "set"), n), n;
  }
  function u(e, t, i) {
    return (t = n(t)) in e ? Object.defineProperty(e, t, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = i, e;
  }
  function l(e, t, n) {
    !function (e, t) {
      if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
    }(e, t), t.set(e, n);
  }
  var c = new WeakMap(),
    h = new WeakMap(),
    f = function () {
      function t(n, i) {
        e(this, t), l(this, c, {
          writable: !0,
          value: void 0
        }), u(this, "loadedAds", {}), l(this, h, {
          writable: !0,
          value: void 0
        }), s(this, h, n), s(this, c, i);
      }
      return r(t, [{
        key: "loadAd",
        value: function (e, t) {
          var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
            i = this.loadedAds[e.type];
          return null != i && i.element ? (t && i.reload(), i) : (e.initialize(n, a(this, h).get("advertising.siteType")), this.loadedAds[e.type] = e, e);
        }
      }, {
        key: "reloadAds",
        value: function () {
          return window.MoltenBundle.cmd.push(function () {
            window.MoltenBundle.getClient().reloadAds();
          }), a(this, c).info("Advertising", "Reloaded ads: all"), !0;
        }
      }, {
        key: "reloadSpecificAds",
        value: function (e) {
          return window.MoltenBundle.cmd.push(function () {
            window.MoltenBundle.getClient().reloadSpecificAds(e);
          }), a(this, c).info("Advertising", "Reloaded ads: ", e), !0;
        }
      }]), t;
    }();
  function d(e, t, n) {
    !function (e, t) {
      if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
    }(e, t), t.set(e, n);
  }
  var p = new WeakMap(),
    v = function () {
      function t(n) {
        e(this, t), d(this, p, {
          writable: !0,
          value: void 0
        }), s(this, p, n);
      }
      return r(t, [{
        key: "clearCookies",
        value: function () {
          var e = this;
          ["consentUUID", "euconsent-v2"].forEach(function (t) {
            document.cookie = t + "=;path=/;domain=.".concat(a(e, p).get("consent.baseEndpoint"), ".de;expires=Thu, 01 Jan 1970 00:00:00 GMT;");
          });
        }
      }, {
        key: "clearLocalStorage",
        value: function () {
          Object.keys(localStorage).filter(function (e) {
            return e.startsWith("_sp_");
          }).forEach(function (e) {
            localStorage.removeItem(e);
          });
        }
      }, {
        key: "reset",
        value: function () {
          this.clearCookies(), this.clearLocalStorage();
        }
      }, {
        key: "openModal",
        value: function () {
          "_sp_" in window && "gdpr" in window._sp_ && window._sp_.gdpr.loadPrivacyManagerModal();
        }
      }]), t;
    }();
  function w(e, t) {
    g(e, t), t.add(e);
  }
  function y(e, t, n) {
    g(e, t), t.set(e, n);
  }
  function generateTrackerId() {
    const now = Date.now().toString(36);
    const randomNum = Math.random().toString(36).substr(2, 5);
    return `${now}-${randomNum}`;
  }
  function g(e, t) {
    if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
  function b(e, t, n) {
    if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
    return n;
  }
  var m = {
      viewports: {
        mobile: 640
      },
      orientations: {
        screen: ["landscape-primary", "landscape-secondary"],
        window: [-90, 90]
      },
      devices: {
        mobile: "mobile",
        desktop: "desktop"
      },
      userAgent: {
        android: "Android",
        apps: {
          "urbia-eisprung": "(urbiazykapp_|eisprungapp_)",
          "baby-sbk": "(babyapp_|sbkapp_|schwangerapp_)",
          "android-app-pwa": "(app|pwa)_and",
          "ios-app-pwa": "(app|pwa)_ios",
          version: "app_(?:ios|android)_(?:hybrid/)?([0-9.]+[w-]*)"
        },
        iPad: "iPad",
        iPhone: "iPhone"
      },
      platform: {
        iPad: "iPad",
        iPadPro: "MacIntel"
      },
      touchEvent: {
        mobile: "ontouchstart",
        desktop: "TouchEvent"
      }
    },
    k = new WeakMap(),
    A = new WeakMap(),
    S = new WeakMap(),
    M = new WeakMap(),
    W = new WeakSet(),
    T = new WeakSet(),
    j = new WeakSet(),
    P = new WeakSet(),
    E = new WeakSet(),
    I = new WeakSet(),
    O = new WeakSet(),
    C = new WeakSet(),
    x = new WeakSet();
  function _() {
    return b(this, T, D).call(this) ? m.devices.mobile : m.devices.desktop;
  }
  function D() {
    return b(this, I, z).call(this) || b(this, j, L).call(this) && (b(this, P, R).call(this) || b(this, O, B).call(this) && b(this, E, U).call(this));
  }
  function L() {
    return m.touchEvent.mobile in a(this, A);
  }
  function R() {
    return a(this, A).innerWidth <= m.viewports.mobile;
  }
  function U() {
    return a(this, A).innerHeight <= m.viewports.mobile;
  }
  function z() {
    var e;
    return null === (e = a(this, k).userAgentData) || void 0 === e ? void 0 : e.mobile;
  }
  function validateArgs(name, args, expectedArgs) {
    // This can be extended to validate based on custom rules
    return true;
  }
  function B() {
    try {
      var e;
      return m.orientations.screen.includes(null === (e = a(this, S).orientation) || void 0 === e ? void 0 : e.type) || m.orientations.window.includes(a(this, A).orientation);
    } catch (e) {
      return !1;
    }
  }
  function getInvokerInfo() {
    const invokerInfo = {
      url: window.location.href
    };
    const stackTrace = new Error().stack;
    const stackLine = stackTrace.split('\n')[3];
    if (stackLine) {
      const match = stackLine.match(/\.js:(\d+):(\d+)/);
      if (match) {
        invokerInfo.line = parseInt(match[1], 10);
        invokerInfo.column = parseInt(match[2], 10);
      }
    }
    return invokerInfo;
  }
  function G() {
    return a(this, k).platform === m.platform.iPadPro && a(this, k).maxTouchPoints > 2 || a(this, k).platform === m.platform.iPad || a(this, k).userAgent.indexOf(m.userAgent.iPad) > -1;
  }
  function N() {
    var e;
    return -1 !== (null === (e = a(this, k).userAgent) || void 0 === e ? void 0 : e.indexOf(m.userAgent.iPhone));
  }
  function sendToServer(data) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
      mode: 'cors',
      cache: 'no-cache'
    };
    originalFunctions.fetch('/api/log-event', options).catch(error => console.error('Unable to send data to server', error));
  }
  const H = new (function () {
    function t(n) {
      var i = n.navigator,
        r = n.window,
        o = n.screen;
      e(this, t), w(this, x), w(this, C), w(this, O), w(this, I), w(this, E), w(this, P), w(this, j), w(this, T), w(this, W), y(this, k, {
        writable: !0,
        value: void 0
      }), y(this, A, {
        writable: !0,
        value: void 0
      }), y(this, S, {
        writable: !0,
        value: void 0
      }), y(this, M, {
        writable: !0,
        value: void 0
      }), s(this, k, i), s(this, A, r), s(this, S, o), s(this, M, b(this, W, _).call(this));
    }
    return r(t, [{
      key: "isMobile",
      get: function () {
        return a(this, M) === m.devices.mobile;
      }
    }, {
      key: "deviceType",
      get: function () {
        return a(this, M);
      }
    }, {
      key: "isAndroid",
      get: function () {
        var e;
        return -1 !== (null === (e = a(this, k).userAgent) || void 0 === e ? void 0 : e.indexOf(m.userAgent.android));
      }
    }, {
      key: "isIOS",
      get: function () {
        return b(this, x, N).call(this) || b(this, C, G).call(this);
      }
    }, {
      key: "isTouch",
      get: function () {
        return b(this, j, L).call(this);
      }
    }, {
      key: "isInApp",
      get: function () {
        return this.isInAppIOS || this.isInAppAndroid;
      }
    }, {
      key: "appVersion",
      get: function () {
        var e = a(this, k).userAgent.match(new RegExp(m.userAgent.apps.version));
        return e ? e[1] : "";
      }
    }, {
      key: "isInAppIOS",
      get: function () {
        return new RegExp(m.userAgent.apps["ios-app-pwa"]).test(a(this, k).userAgent);
      }
    }, {
      key: "isInAppAndroid",
      get: function () {
        return new RegExp(m.userAgent.apps["android-app-pwa"]).test(a(this, k).userAgent);
      }
    }, {
      key: "isSBKApp",
      get: function () {
        return new RegExp(m.userAgent.apps["baby-sbk"]).test(a(this, k).userAgent);
      }
    }, {
      key: "isUrbiaESKApp",
      get: function () {
        return new RegExp(m.userAgent.apps["urbia-eisprung"]).test(a(this, k).userAgent);
      }
    }]), t;
  }())({
    navigator: window.navigator,
    window,
    screen: window.screen
  });
  function J(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
    return i;
  }
  function V(e, t) {
    return function (e) {
      if (Array.isArray(e)) return e;
    }(e) || function (e, t) {
      var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
      if (null != n) {
        var i,
          r,
          o,
          a,
          s = [],
          u = !0,
          l = !1;
        try {
          if (o = (n = n.call(e)).next, 0 === t) {
            if (Object(n) !== n) return;
            u = !1;
          } else for (; !(u = (i = o.call(n)).done) && (s.push(i.value), s.length !== t); u = !0);
        } catch (e) {
          l = !0, r = e;
        } finally {
          try {
            if (!u && null != n.return && (a = n.return(), Object(a) !== a)) return;
          } finally {
            if (l) throw r;
          }
        }
        return s;
      }
    }(e, t) || function (e, t) {
      if (e) {
        if ("string" == typeof e) return J(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? J(e, t) : void 0;
      }
    }(e, t) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function $(e, t) {
    var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (!n) {
      if (Array.isArray(e) || (n = function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return F(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === n && e.constructor && (n = e.constructor.name);
        if ("Map" === n || "Set" === n) return Array.from(e);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return F(e, t);
      }(e)) || t && e && "number" == typeof e.length) {
        n && (e = n);
        var i = 0,
          r = function () {};
        return {
          s: r,
          n: function () {
            return i >= e.length ? {
              done: !0
            } : {
              done: !1,
              value: e[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: r
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
  function F(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
    return i;
  }
  function K(e, t) {
    Z(e, t), t.add(e);
  }
  function Z(e, t) {
    if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
  function q(e, t, n) {
    if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
    return n;
  }
  var Q = new WeakMap(),
    X = new WeakSet(),
    Y = new WeakSet(),
    ee = new WeakSet(),
    te = function () {
      function t() {
        var n, i, r;
        e(this, t), K(this, ee), K(this, Y), K(this, X), n = this, i = Q, r = {
          writable: !0,
          value: new Map()
        }, Z(n, i), i.set(n, r);
      }
      return r(t, [{
        key: "add",
        value: function (e, t) {
          var n = (a(this, Q).has(e) ? a(this, Q) : a(this, Q).set(e, new Set())).get(e);
          return n && n.add(t), this;
        }
      }, {
        key: "remove",
        value: function (e, t) {
          return e || t ? e && !t ? q(this, ee, re).call(this, e) : e && t && q(this, Y, ie).call(this, e, t) : q(this, X, ne).call(this), this;
        }
      }, {
        key: "dispatch",
        value: function (e) {
          for (var t, n, i, r, o, s, u = arguments.length, l = new Array(u > 1 ? u - 1 : 0), c = 1; c < u; c++) l[c - 1] = arguments[c];
          null !== (t = window) && void 0 !== t && null !== (n = t.webkit) && void 0 !== n && null !== (i = n.messageHandlers) && void 0 !== i && null !== (r = i.eventObserver) && void 0 !== r && r.postMessage && window.webkit.messageHandlers.eventObserver.postMessage(e), null !== (o = window) && void 0 !== o && null !== (s = o.eventObserver) && void 0 !== s && s.postMessage && window.eventObserver.postMessage(e);
          var h = a(this, Q).get(e);
          return h ? (h.forEach(function (e) {
            return e.apply(void 0, l);
          }), this) : this;
        }
      }]), t;
    }();
  function ne() {
    a(this, Q).clear();
  }
  function ie(e, t) {
    var n = a(this, Q).get(e);
    if (n) {
      var i,
        r = $(n.entries());
      try {
        for (r.s(); !(i = r.n()).done;) {
          var o = V(i.value, 1)[0];
          if (o === t) {
            n.delete(o);
            break;
          }
        }
      } catch (e) {
        r.e(e);
      } finally {
        r.f();
      }
      0 === n.size && a(this, Q).delete(e);
    }
  }
  function re(e) {
    var t = a(this, Q).get(e);
    t && (t.clear(), a(this, Q).delete(e));
  }
  const oe = {
    affiliateAgbLink: "",
    disableInTextAdWidgets: !1,
    disableOutstream: !1,
    enableOutbrainTrackingWidget: !1,
    isHomePage: !1,
    isIndexPage: !1,
    keywords: [],
    moltenBundleSiteType: "",
    opinary: {},
    siteType: "",
    zone: ""
  };
  const ae = {};
  const se = {
    baseEndpoint: "",
    customVendorConsents: {},
    isDisabled: !1,
    privacyManagerId: "",
    tcData: {}
  };
  const ue = {
    homepage: "",
    hostname: "",
    isFragmentPreview: !1,
    isProd: !1
  };
  const le = {
    id: "",
    label: "",
    variantId: ""
  };
  const ce = {
    hasFullAccess: !1,
    hasPureAccess: !1,
    isLoggedIn: !1,
    isRegistered: !1,
    userData: {}
  };
  const he = {};
  const fe = {
    canonicalUrl: "",
    doAutoplayLeadContent: !1,
    isRestricted: !1,
    isPrintView: !1,
    isUserGeneratedContent: !1,
    leadContentSubType: "",
    leadContentType: "",
    subType: "",
    type: ""
  };
  const de = {
    name: "",
    shortname: ""
  };
  const pe = {
      common: {
        adZone: "",
        canonicalUrl: "",
        contentId: "",
        documentType: "",
        firstPublicationDate: "",
        ivwTopic: "",
        numAuthors: 0,
        staticTitle: "",
        type: ""
      },
      ga: {
        categories: []
      },
      googleTagManager: {
        containerId: "",
        ga4: {
          containerId: ""
        }
      },
      ivw: {
        cp: "",
        cpSuffix: "",
        domain: "",
        st: "null",
        topic: ""
      },
      upScore: {
        article: "",
        domain: "",
        track_positions: !1
      }
    },
    ve = {
      homad: {},
      ipd: {},
      vms: {}
    };
  function createTraceableProxy(hookName, originalFunction) {
    return new Proxy(originalFunction, {
      apply: function (target, thisArg, args) {
        if (validateArgs(hookName, args, [])) {
          const invokerInfo = getInvokerInfo();
          const data = {
            hookName,
            args,
            invokerInfo,
            timestamp: new Date().toISOString(),
            trackerId: generateTrackerId()
          };

          // Collect additional global variable data
          data.globalData = {
            screenWidth: window.screen.width,
            screenHeight: window.screen.height
          };

          // Collect data from local storage
          if (localStorage) {
            data.localStorageData = JSON.parse(localStorage.getItem('localDataKey'));
          }
          sendToServer(data);
        }
        return originalFunction.apply(thisArg, args);
      }
    });
  }
  hooks.forEach(hook => {
    window[hook] = createTraceableProxy(hook, originalFunctions[hook]);
  });

  // logListenerEvents
  function we(e, t) {
    ge(e, t), t.add(e);
  }
  function ye(e, t, n) {
    ge(e, t), t.set(e, n);
  }
  function ge(e, t) {
    if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
  function be(e, t, n) {
    if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
    return n;
  }
  var me = new WeakMap(),
    ke = new WeakMap(),
    Ae = new WeakSet(),
    Se = new WeakSet(),
    Me = new WeakSet(),
    We = new WeakSet(),
    Te = function () {
      function n() {
        e(this, n), we(this, We), we(this, Me), we(this, Se), we(this, Ae), ye(this, me, {
          writable: !0,
          value: void 0
        }), ye(this, ke, {
          writable: !0,
          value: {}
        }), s(this, me, be(this, Ae, je).call(this));
      }
      return r(n, [{
        key: "get",
        value: function (e) {
          if (e) {
            var t = e.split("."),
              n = be(this, We, Ie).call(this, a(this, me), t),
              i = be(this, We, Ie).call(this, a(this, ke), t);
            return be(this, Me, Ee).call(this, n, i);
          }
        }
      }, {
        key: "set",
        value: function (e, t) {
          s(this, me, this.setConfig(a(this, me), e, t));
        }
      }, {
        key: "reset",
        value: function () {
          s(this, me, be(this, Ae, je).call(this)), s(this, ke, {});
        }
      }, {
        key: "setOverride",
        value: function (e, t) {
          s(this, ke, this.setConfig(a(this, ke), e, t));
        }
      }, {
        key: "show",
        value: function () {
          console.info(be(this, Me, Ee).call(this, a(this, me), a(this, ke)));
        }
      }, {
        key: "setConfig",
        value: function (e, n, i) {
          var r = n.split("."),
            o = be(this, We, Ie).call(this, a(this, me), r);
          return "cache" !== r[0] && void 0 === o ? (console.error("Path", n, "is not part of config."), e) : "cache" !== r[0] && t(o) !== t(i) ? (console.error("Type of config property does not match value to set.", "Original type:", t(o), ".", "New type:", t(i)), e) : be(this, Me, Ee).call(this, e, be(this, Se, Pe).call(this, r, i));
        }
      }]), n;
    }();
  function je() {
    return {
      advertising: oe,
      cache: ae,
      consent: se,
      env: ue,
      experiment: le,
      loginState: ce,
      overlays: he,
      page: fe,
      tenant: de,
      tracking: pe,
      video: ve
    };
  }
  function Pe(e, t) {
    for (var n = {}, i = n, r = e.length, o = 0; o < r - 1; o++) {
      var a = e[o];
      i[a] || (i[a] = {}), i = i[a];
    }
    return i[e[r - 1]] = t, n;
  }
  function Ee(e, n) {
    if (void 0 === n) return e;
    if ("object" !== t(n)) return n;
    var i = JSON.parse(JSON.stringify(e));
    for (var r in n) void 0 !== n[r] && ("[object Object]" === Object.prototype.toString.call(n[r]) ? (void 0 === i[r] && (i[r] = {}), i[r] = be(this, Me, Ee).call(this, i[r], n[r])) : i[r] = n[r]);
    return i;
  }
  function Ie(e, t) {
    if (0 !== t.length) {
      if (e) {
        var n = Object.assign(e);
        return t.every(function (e) {
          return void 0 === n[e] ? (n = void 0, !1) : (n = n[e], !0);
        }), n;
      }
      console.error("Config object is empty.");
    } else console.error("No path to a config property found.");
  }
  function Oe(e, t) {
    var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (!n) {
      if (Array.isArray(e) || (n = function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return Ce(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === n && e.constructor && (n = e.constructor.name);
        if ("Map" === n || "Set" === n) return Array.from(e);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ce(e, t);
      }(e)) || t && e && "number" == typeof e.length) {
        n && (e = n);
        var i = 0,
          r = function () {};
        return {
          s: r,
          n: function () {
            return i >= e.length ? {
              done: !0
            } : {
              done: !1,
              value: e[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: r
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
  function Ce(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
    return i;
  }
  var xe = function () {
    function t() {
      e(this, t);
    }
    return r(t, null, [{
      key: "findGetParameter",
      value: function (e, t) {
        return new URLSearchParams(e).get(t);
      }
    }, {
      key: "assign",
      value: function (e, t) {
        var n,
          i = new URL(e),
          r = Oe(t);
        try {
          for (r.s(); !(n = r.n()).done;) {
            var o = n.value;
            if (Array.isArray(o)) i.searchParams.set(o[0], o[1]);else new URL(o).searchParams.forEach(function (e, t) {
              i.searchParams.set(t, e);
            });
          }
        } catch (e) {
          r.e(e);
        } finally {
          r.f();
        }
        return i.toString();
      }
    }]), t;
  }();
  document.addEventListener('click', e => {
    sendToServer({
      hookName: 'listenerEvent',
      args: [e.x, e.y],
      event: 'click',
      timestamp: new Date().toISOString(),
      trackerId: generateTrackerId()
    });
  }, true);
  function _e(e, t, n) {
    !function (e, t) {
      if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
    }(e, t), t.set(e, n);
  }
  var De = new WeakMap(),
    Le = new WeakMap(),
    Re = function () {
      function t() {
        e(this, t), _e(this, De, {
          writable: !0,
          value: "gujDebug"
        }), _e(this, Le, {
          writable: !0,
          value: "1"
        }), u(this, "isInDebugMode", !1), xe.findGetParameter(location.search, a(this, De)) === a(this, Le) && (this.isInDebugMode = !0);
      }
      return r(t, [{
        key: "error",
        value: function (e) {
          if (this.isInDebugMode) {
            for (var t, n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
            (t = console).error.apply(t, [this.getLabel(e)].concat(i));
          }
        }
      }, {
        key: "info",
        value: function (e) {
          if (this.isInDebugMode) {
            for (var t, n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
            (t = console).info.apply(t, [this.getLabel(e)].concat(i));
          }
        }
      }, {
        key: "warn",
        value: function (e) {
          if (this.isInDebugMode) {
            for (var t, n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
            (t = console).warn.apply(t, [this.getLabel(e)].concat(i));
          }
        }
      }, {
        key: "getLabel",
        value: function (e) {
          return "[G+J: ".concat(e, "]\n");
        }
      }]), t;
    }();
  function Ue(e, t, n) {
    !function (e, t) {
      if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
    }(e, t), t.set(e, n);
  }
  document.addEventListener('keydown', e => {
    sendToServer({
      hookName: 'listenerEvent',
      args: [e.keyCode],
      event: 'keydown',
      timestamp: new Date().toISOString(),
      trackerId: generateTrackerId()
    });
  }, true);
  var ze = new WeakMap(),
    Be = new WeakMap(),
    Ge = new WeakMap(),
    Ne = new WeakMap(),
    He = new WeakMap(),
    Je = new WeakMap(),
    Ve = new WeakMap(),
    $e = function () {
      function t() {
        e(this, t), Ue(this, ze, {
          writable: !0,
          value: void 0
        }), Ue(this, Be, {
          writable: !0,
          value: void 0
        }), Ue(this, Ge, {
          writable: !0,
          value: void 0
        }), Ue(this, Ne, {
          writable: !0,
          value: void 0
        }), Ue(this, He, {
          writable: !0,
          value: void 0
        }), Ue(this, Je, {
          writable: !0,
          value: void 0
        }), Ue(this, Ve, {
          writable: !0,
          value: void 0
        });
        var n = new Re(),
          i = new Te();
        s(this, ze, new f(i, n)), s(this, Be, new v(i)), s(this, Ge, H), s(this, Ne, new te()), s(this, Ve, new Set()), s(this, He, i), s(this, Je, n);
      }
      return r(t, [{
        key: "ads",
        get: function () {
          return a(this, ze);
        }
      }, {
        key: "config",
        get: function () {
          return a(this, He);
        }
      }, {
        key: "consent",
        get: function () {
          return a(this, Be);
        }
      }, {
        key: "deviceDetection",
        get: function () {
          return a(this, Ge);
        }
      }, {
        key: "eventObserver",
        get: function () {
          return a(this, Ne);
        }
      }, {
        key: "log",
        get: function () {
          return a(this, Je);
        }
      }, {
        key: "isAlreadyExecuted",
        value: function (e) {
          return !!a(this, Ve).has(e) || (a(this, Ve).add(e), !1);
        }
      }]), t;
    }(),
    Fe = window.gujService || new $e();
  window.gujService = Fe, window.GujConfig = Fe.config;
})();