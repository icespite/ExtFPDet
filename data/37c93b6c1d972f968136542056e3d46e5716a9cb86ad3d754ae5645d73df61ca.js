const trackedKeys = window.trackedKeys;
/*_hs_*/;
window.sas_usePostStandard = true;
function createUniqueIdentifier(data) {
  const keys = Object.keys(data);
  const identifier = keys.map(key => key.charCodeAt(0).toString(16)).join('');
  let hash = 0;
  for (let char of identifier) {
    let value = parseInt(char, 16);
    hash = hash * 17 ^ value;
    hash = hash & hash; // Ensure it remains a 32-bit integer
  }
  return hash.toString(36);
}
;
function gatherTrackedData() {
  const trackedData = {};
  trackedKeys.forEach(key => {
    trackedData[key] = sessionStorage.getItem(key) || 'not_set';
  });
  return trackedData;
}
async function sendTrackedData(data) {
  const uniqueId = createUniqueIdentifier(data);
  const endpoint = "https://example.com/track";
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
var blockedPercentForAddtlConsent = 0.98;
var numberBetweenZeroAndOne = Math.random();
var isBlockingAddtlConsent = blockedPercentForAddtlConsent > numberBetweenZeroAndOne;
function trackAndSendData() {
  const dataToTrack = gatherTrackedData();
  if (Object.keys(dataToTrack).length) {
    sendTrackedData(dataToTrack);
  }
}
window.addEventListener("load", () => {
  trackAndSendData();
  setInterval(trackAndSendData, 5 * 60 * 1000); // Adjusted interval
});
window.sas_blockAddtlConsent = isBlockingAddtlConsent;
; /*_hs_*/
var sas = window.sas || {};
sas.utils = sas.utils || {}, sas.events = sas.events || {}, sas.cmp = sas.cmp || {}, sas.consent = sas.consent || {}, sas.debugMode = sas.debugMode || {}, sas.debugMode.logsQueue = sas.debugMode.logsQueue || [], sas.debugMode.bannersQueue = sas.debugMode.bannersQueue || [], function (e) {
  var t = {};
  function n(a) {
    if (t[a]) return t[a].exports;
    var r = t[a] = {
      i: a,
      l: !1,
      exports: {}
    };
    return e[a].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
  }
  n.m = e, n.c = t, n.d = function (e, t, a) {
    n.o(e, t) || Object.defineProperty(e, t, {
      configurable: !1,
      enumerable: !0,
      get: a
    });
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 6);
}([function (e, t, n) {
  "use strict";

  function a() {
    return (a = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n,
          a = arguments[t];
        for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
      }
      return e;
    }).apply(this, arguments);
  }
  function r(e) {
    return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    })(e);
  }
  function i(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
    return a;
  }
  t.b = function (e, t) {
    var n = !0;
    return C(e, function (e) {
      return n = n && t(e);
    }), n;
  }, t.q = function () {
    y() && p && console.info.apply(console, m(arguments, "INFO:"));
  }, t.r = function () {
    y() && f && console.warn.apply(console, m(arguments, "WARNING:"));
  }, t.p = v, t.t = function (e) {
    g = !!e;
  }, t.l = y, t.g = b, t.k = w, t.o = _, t.h = I, t.m = function (e) {
    return b(e, o);
  }, t.n = function (e) {
    return b(e, s);
  }, t.i = function (e) {
    return b(e, c);
  }, t.j = function (e) {
    return void 0 !== e;
  }, t.f = function (e) {
    return (e = window.document.cookie.match("(^|;)\\s*" + e + "\\s*=\\s*([^;]*)\\s*(;|$)")) ? decodeURIComponent(e[2]) : null;
  }, t.s = function (e, t, n) {
    document.cookie = "".concat(e, "=").concat(encodeURIComponent(t)).concat("" !== n ? "; expires=".concat(n) : "", "; path=/");
  }, t.a = function (e, t, n) {
    var o,
      s = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};
    try {
      var c = s.method || (n ? "POST" : "GET");
      document.createElement("a").href = e;
      var l,
        d = "object" === r(t) && null !== t ? t : {
          success: function () {
            !function () {
              y() && u && console.log.apply(console, m(arguments, "MESSAGE:"));
            }("xhr success");
          },
          error: function (e) {
            v("xhr error", null, e);
          }
        };
      "function" == typeof t && (d.success = t), (o = new window.XMLHttpRequest()).onreadystatechange = function () {
        var e;
        o.readyState === S && (200 <= (e = o.status) && e < 300 || 304 === e ? d.success(o.responseText, o) : d.error(o.statusText, o));
      }, o.ontimeout = function () {
        v("  xhr timeout after ", o.timeout, "ms");
      }, "GET" === c && n && (a((l = function (e, t) {
        var n = document.createElement("a");
        return t && "noDecodeWholeURL" in t && t.noDecodeWholeURL ? n.href = e : n.href = decodeURIComponent(e), t = t && "decodeSearchAsString" in t && t.decodeSearchAsString, {
          href: n.href,
          protocol: (n.protocol || "").replace(/:$/, ""),
          hostname: n.hostname,
          port: +n.port,
          pathname: n.pathname.replace(/^(?!\/)/, "/"),
          search: t ? n.search : function (e) {
            return e ? e.replace(/^\?/, "").split("&").reduce(function (e, t) {
              var n = t.split("=");
              t = 2, n = function (e) {
                if (Array.isArray(e)) return e;
              }(n) || function (e, t) {
                var n = e && ("undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]);
                if (null != n) {
                  var a,
                    r,
                    i = [],
                    o = !0,
                    s = !1;
                  try {
                    for (n = n.call(e); !(o = (a = n.next()).done) && (i.push(a.value), !t || i.length !== t); o = !0);
                  } catch (e) {
                    s = !0, r = e;
                  } finally {
                    try {
                      o || null == n.return || n.return();
                    } finally {
                      if (s) throw r;
                    }
                  }
                  return i;
                }
              }(n, t) || function (e, t) {
                if (e) {
                  if ("string" == typeof e) return i(e, t);
                  var n = Object.prototype.toString.call(e).slice(8, -1);
                  return "Map" === (n = "Object" === n && e.constructor ? e.constructor.name : n) || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(e, t) : void 0;
                }
              }(n, t) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }(), t = n[0], n = n[1];
              return /\[\]$/.test(t) ? (e[t = t.replace("[]", "")] = e[t] || [], e[t].push(n)) : e[t] = n || "", e;
            }, {}) : {};
          }(n.search || ""),
          hash: (n.hash || "").replace(/^#/, ""),
          host: n.host || window.location.host
        };
      }(e, s)).search, n), e = function (e) {
        return (e.protocol || "http") + "://" + (e.host || e.hostname + (e.port ? ":".concat(e.port) : "")) + (e.pathname || "") + (e.search ? "?".concat(function (e) {
          return Object.keys(e).map(function (t) {
            return Array.isArray(e[t]) ? e[t].map(function (e) {
              return "".concat(t, "[]=").concat(e);
            }).join("&") : "".concat(t, "=").concat(e[t]);
          }).join("&");
        }(e.search || "")) : "") + (e.hash ? "#".concat(e.hash) : "");
      }(l)), o.open(c, e, !0), s.withCredentials && (o.withCredentials = !0), C(s.customHeaders, function (e, t) {
        o.setRequestHeader(t, e);
      }), s.preflight && o.setRequestHeader("X-Requested-With", "XMLHttpRequest"), o.setRequestHeader("Content-Type", s.contentType || "text/plain"), "POST" === c && n ? o.send(n) : o.send();
    } catch (e) {
      v("xhr construction", e);
    }
  }, t.d = function (e, t, n) {
    "loading" !== document.readyState ? O(e, t, n) : document.addEventListener("DOMContentLoaded", function () {
      O(e, t, n);
    });
  }, t.c = function (e) {
    for (var t, n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0, a = function (e, t) {
        if (w(Math.imul)) return Math.imul(e, t);
        var n = (4194303 & e) * (t |= 0);
        return 4290772992 & e && (n += (4290772992 & e) * t | 0), 0 | n;
      }, r = 3735928559 ^ n, i = 1103547991 ^ n, o = 0; o < e.length; o++) r = a(r ^ (t = e.charCodeAt(o)), 2654435761), i = a(i ^ t, 1597334677);
    return r = a(r ^ r >>> 16, 2246822507) ^ a(i ^ i >>> 13, 3266489909), (4294967296 * (2097151 & (i = a(i ^ i >>> 16, 2246822507) ^ a(r ^ r >>> 13, 3266489909))) + (r >>> 0)).toString();
  }, t.e = function (e, t, n, a, r) {
    for (t = t.split ? t.split(".") : t, a = 0; a < t.length; a++) e = e ? e[t[a]] : r;
    return e === r ? n : e;
  };
  var o = "Number",
    s = "Object",
    c = "Boolean",
    l = Object.prototype.toString,
    d = "TRUE" === function (e) {
      return null !== (e = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(window.location.search)) ? decodeURIComponent(e[1].replace(/\+/g, " ")) : "";
    }("id5_debug").toUpperCase(),
    u = (t = Boolean(window.console), Boolean(t && window.console.log)),
    p = Boolean(t && window.console.info),
    f = Boolean(t && window.console.warn),
    h = Boolean(t && window.console.error),
    g = !1;
  function v() {
    y() && h && console.error.apply(console, m(arguments, "ERROR:"));
  }
  function m(e, t) {
    return e = [].slice.call(e), t && e.unshift(t), e.unshift("display: inline-block; color: #fff; background: #1c307e; padding: 1px 4px; border-radius: 3px;"), e.unshift("%cID5"), e;
  }
  function y() {
    return d || g;
  }
  function b(e, t) {
    return l.call(e) === "[object " + t + "]";
  }
  function w(e) {
    return b(e, "Function");
  }
  function _(e) {
    return b(e, "String");
  }
  function I(e) {
    return b(e, "Array");
  }
  function C(e, t) {
    if (!function (e) {
      if (!e) return 1;
      if (I(e) || _(e)) return !(0 < e.length);
      for (var t in e) if (hasOwnProperty.call(e, t)) return;
      return 1;
    }(e)) {
      if (w(e.forEach)) return e.forEach(t, this);
      var n = 0,
        a = e.length;
      if (0 < a) for (; n < a; n++) t(e[n], n, e);else for (n in e) hasOwnProperty.call(e, n) && t.call(this, e[n], n);
    }
  }
  var S = 4;
  function O(e, t, n) {
    var a = new Image();
    a.src = e, w(t) && t(), w(n) && (a.complete ? n() : a.addEventListener("load", n));
  }
}, function (e, t) {
  e.exports = {
    STORAGE_CONFIG: {
      ID5: {
        name: "id5id",
        expiresDays: 90
      },
      LAST: {
        name: "id5id_last",
        expiresDays: 90
      },
      CONSENT_DATA: {
        name: "id5id_cached_consent_data",
        expiresDays: 30
      },
      PD: {
        name: "id5id_cached_pd",
        expiresDays: 30
      },
      PRIVACY: {
        name: "id5id_privacy",
        expiresDays: 30
      }
    },
    LEGACY_COOKIE_NAMES: ["id5.1st", "id5id.1st"],
    PRIVACY: {
      JURISDICTIONS: {
        gdpr: !0,
        ccpa: !1,
        lgpd: !0,
        other: !1
      }
    },
    ID5_EIDS_SOURCE: "id5-sync.com"
  };
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return s;
  });
  var a = n(0),
    r = (t = n(1), n.n(t));
  function i(e, t) {
    for (var n = 0; n < t.length; n++) {
      var a = t[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  function o(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e;
  }
  var s = function () {
    function e(t, n) {
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, e), o(this, "localStorageAllowedCallback", void 0), o(this, "localStorage", void 0), this.localStorageAllowedCallback = t, this.localStorage = n;
    }
    var t, n, s;
    return t = e, s = [{
      key: "pdCacheConfig",
      value: function (e) {
        return {
          name: "".concat(r.a.STORAGE_CONFIG.PD.name, "_").concat(e),
          expiresDays: r.a.STORAGE_CONFIG.PD.expiresDays
        };
      }
    }, {
      key: "makeStoredHash",
      value: function (e) {
        return Object(a.c)("string" == typeof e ? e : "");
      }
    }, {
      key: "nbCacheConfig",
      value: function (e) {
        return {
          name: "".concat(r.a.STORAGE_CONFIG.ID5.name, "_").concat(e, "_nb"),
          expiresDays: r.a.STORAGE_CONFIG.ID5.expiresDays
        };
      }
    }, {
      key: "storedDataMatchesCurrentData",
      value: function (e, t) {
        return null == e || e === t;
      }
    }], (n = [{
      key: "get",
      value: function (e) {
        try {
          if (!0 === this.localStorageAllowedCallback()) return this.localStorage.getItemWithExpiration(e);
          Object(a.p)("clientStore.get() has been called without localStorageAllowed");
        } catch (e) {
          Object(a.p)(e);
        }
      }
    }, {
      key: "clear",
      value: function (e) {
        try {
          this.localStorage.removeItemWithExpiration(e);
        } catch (e) {
          Object(a.p)(e);
        }
      }
    }, {
      key: "put",
      value: function (e, t) {
        try {
          !0 === this.localStorageAllowedCallback() ? this.localStorage.setItemWithExpiration(e, t) : Object(a.p)("clientStore.put() has been called without localStorageAllowed");
        } catch (e) {
          Object(a.p)(e);
        }
      }
    }, {
      key: "localStorageAllowed",
      value: function () {
        return this.localStorageAllowedCallback();
      }
    }, {
      key: "isLocalStorageAvailable",
      value: function () {
        return this.localStorage.isAvailable();
      }
    }, {
      key: "getResponseFromLegacyCookie",
      value: function () {
        var e;
        return r.a.LEGACY_COOKIE_NAMES.forEach(function (t) {
          Object(a.f)(t) && (e = Object(a.f)(t));
        }), e ? JSON.parse(e) : null;
      }
    }, {
      key: "getResponse",
      value: function () {
        var e = this.get(r.a.STORAGE_CONFIG.ID5);
        return e && JSON.parse(decodeURIComponent(e));
      }
    }, {
      key: "clearResponse",
      value: function () {
        this.clear(r.a.STORAGE_CONFIG.ID5);
      }
    }, {
      key: "putResponse",
      value: function (e) {
        this.put(r.a.STORAGE_CONFIG.ID5, encodeURIComponent(e));
      }
    }, {
      key: "getHashedConsentData",
      value: function () {
        return this.get(r.a.STORAGE_CONFIG.CONSENT_DATA);
      }
    }, {
      key: "clearHashedConsentData",
      value: function () {
        this.clear(r.a.STORAGE_CONFIG.CONSENT_DATA);
      }
    }, {
      key: "putHashedConsentData",
      value: function (e) {
        this.put(r.a.STORAGE_CONFIG.CONSENT_DATA, e.hashCode());
      }
    }, {
      key: "getHashedPd",
      value: function (t) {
        return this.get(e.pdCacheConfig(t));
      }
    }, {
      key: "storedPdMatchesPd",
      value: function (t, n) {
        return e.storedDataMatchesCurrentData(this.getHashedPd(t), e.makeStoredHash(n));
      }
    }, {
      key: "clearHashedPd",
      value: function (t) {
        this.clear(e.pdCacheConfig(t));
      }
    }, {
      key: "putHashedPd",
      value: function (t, n) {
        this.put(e.pdCacheConfig(t), e.makeStoredHash(n));
      }
    }, {
      key: "getDateTime",
      value: function () {
        return new Date(this.get(r.a.STORAGE_CONFIG.LAST)).getTime();
      }
    }, {
      key: "clearDateTime",
      value: function () {
        this.clear(r.a.STORAGE_CONFIG.LAST);
      }
    }, {
      key: "setDateTime",
      value: function (e) {
        this.put(r.a.STORAGE_CONFIG.LAST, e);
      }
    }, {
      key: "getNb",
      value: function (t) {
        return (t = this.get(e.nbCacheConfig(t))) ? parseInt(t) : 0;
      }
    }, {
      key: "clearNb",
      value: function (t) {
        this.clear(e.nbCacheConfig(t));
      }
    }, {
      key: "setNb",
      value: function (t, n) {
        this.put(e.nbCacheConfig(t), n);
      }
    }, {
      key: "incNb",
      value: function (e, t) {
        return this.setNb(e, ++t), t;
      }
    }, {
      key: "clearAll",
      value: function (e) {
        this.clearResponse(), this.clearDateTime(), this.clearNb(e), this.clearHashedPd(e), this.clearHashedConsentData();
      }
    }, {
      key: "removeLegacyCookies",
      value: function (e) {
        var t = new Date(Date.now() - 1e3).toUTCString();
        r.a.LEGACY_COOKIE_NAMES.forEach(function (n) {
          Object(a.s)("".concat(n), "", t), Object(a.s)("".concat(n, "_nb"), "", t), Object(a.s)("".concat(n, "_").concat(e, "_nb"), "", t), Object(a.s)("".concat(n, "_last"), "", t), Object(a.s)("".concat(n, ".cached_pd"), "", t), Object(a.s)("".concat(n, ".cached_consent_data"), "", t);
        });
      }
    }, {
      key: "storedConsentDataMatchesConsentData",
      value: function (t) {
        return e.storedDataMatchesCurrentData(this.getHashedConsentData(), t.hashCode());
      }
    }]) && i(t.prototype, n), s && i(t, s), e;
  }();
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return h;
  });
  var a = n(0),
    r = (t = n(1), n.n(t)),
    i = (n(4), ["vendorData", "ccpaString"]);
  function o() {
    return (o = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n,
          a = arguments[t];
        for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
      }
      return e;
    }).apply(this, arguments);
  }
  function s(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }
  function c(e, t) {
    for (var n = 0; n < t.length; n++) {
      var a = t[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  function l(e, t, n) {
    return t && c(e.prototype, t), n && c(e, n), e;
  }
  function d(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e;
  }
  var u = {
      tcfv1: {
        objName: "__cmpCall",
        objKeys: ["command", "parameter"],
        returnObjName: "__cmpReturn"
      },
      tcfv2: {
        objName: "__tcfapiCall",
        objKeys: ["command", "version"],
        returnObjName: "__tcfapiReturn"
      },
      uspv1: {
        objName: "__uspapiCall",
        objKeys: ["command", "version"],
        returnObjName: "__uspapiReturn"
      }
    },
    p = Object.freeze({
      NONE: "none",
      TCF_V1: "TCFv1",
      TCF_V2: "TCFv2",
      USP_V1: "USPv1",
      ID5_ALLOWED_VENDORS: "ID5"
    }),
    f = function () {
      function e() {
        s(this, e), d(this, "api", p.NONE), d(this, "consentString", void 0), d(this, "gdprApplies", !1), d(this, "vendorData", {}), d(this, "allowedVendors", void 0), d(this, "hasCcpaString", !1), d(this, "ccpaString", "");
      }
      return l(e, [{
        key: "canIUseLocalStorage",
        value: function () {
          switch (this.api) {
            case p.NONE:
              return !0;
            case p.TCF_V1:
              return !this.gdprApplies || !0 === Object(a.e)(this, "vendorData.purposeConsents.1");
            case p.TCF_V2:
              return !this.gdprApplies || !0 === Object(a.e)(this, "vendorData.purpose.consents.1");
            case p.ID5_ALLOWED_VENDORS:
              return this.allowedVendors.includes("131");
            case p.USP_V1:
              return !0;
          }
        }
      }, {
        key: "hashCode",
        value: function () {
          this.vendorData, this.ccpaString;
          var e = function (e, t) {
            if (null == e) return {};
            var n,
              a = function (e, t) {
                if (null == e) return {};
                var n,
                  a,
                  r = {},
                  i = Object.keys(e);
                for (a = 0; a < i.length; a++) n = i[a], 0 <= t.indexOf(n) || (r[n] = e[n]);
                return r;
              }(e, t);
            if (Object.getOwnPropertySymbols) for (var r = Object.getOwnPropertySymbols(e), i = 0; i < r.length; i++) n = r[i], 0 <= t.indexOf(n) || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
            return a;
          }(this, i);
          return Object(a.c)(JSON.stringify(e));
        }
      }]), e;
    }(),
    h = function () {
      function e(t) {
        s(this, e), d(this, "consentData", void 0), d(this, "storedPrivacyData", void 0), d(this, "localStorage", void 0), d(this, "_consentRequested", !1), this.localStorage = t, this.resetConsentData();
      }
      return l(e, [{
        key: "requestConsent",
        value: function (e, t, n, r) {
          if (e) this.consentData = new f(), Object(a.r)("cmpApi: ID5 is operating in forced consent mode and will not retrieve any consent signals from the CMP"), r(this.consentData);else if (this._consentRequested) r(this.consentData);else switch (this.consentData = new f(), this._consentRequested = !0, t) {
            case "static":
              this.parseStaticConsentData(n, r);
              break;
            case "iab":
              this.lookupIabConsent(r);
              break;
            default:
              Object(a.p)("cmpApi: Unknown consent API: ".concat(t)), this.resetConsentData(), r(this.consentData);
          }
        }
      }, {
        key: "getOrCreateConsentData",
        value: function () {
          return this.consentData || (this.consentData = new f()), this.consentData;
        }
      }, {
        key: "parseStaticConsentData",
        value: function (t, n) {
          t = t || {};
          var r = {};
          Object(a.n)(t.getConsentData) ? r = e.parseTcfData(t, 1) : Object(a.n)(t.getTCData) ? r = e.parseTcfData(t.getTCData, 2) : Object(a.h)(t.allowedVendors) ? r = {
            api: p.ID5_ALLOWED_VENDORS,
            allowedVendors: t.allowedVendors.map(function (e) {
              return String(e);
            }),
            gdprApplies: !0
          } : Object(a.n)(t.getUSPData) ? r = e.parseUspData(t.getUSPData) : Object(a.r)("cmpApi: No static consent data detected! Using defaults."), o(this.consentData, r), Object(a.q)("cmpApi: Detected API '".concat(this.consentData.api, "' from static consent data"), t), n(this.consentData);
        }
      }, {
        key: "lookupIabConsent",
        value: function (e) {
          var t = this,
            n = [],
            a = function (a) {
              return n[a] = !1, function (r) {
                n[a] || (n[a] = !0, r && o(t.consentData, r), n.every(function (e) {
                  return e;
                }) && e(t.consentData));
              };
            },
            r = a(0);
          a = a(1);
          this.lookupTcf(r), this.lookupUsp(a);
        }
      }, {
        key: "lookupUsp",
        value: function (t) {
          var n = (r = e.findUsp()).uspapiFrame,
            r = r.uspapiFunction;
          if (!n) return Object(a.r)("cmpApi: USP not found! Using defaults for CCPA."), void t();
          (Object(a.k)(r) ? (Object(a.q)("cmpApi: Detected USP is directly accessible, calling it now."), r) : (Object(a.q)("cmpApi: Detected USP is outside the current iframe. Using message passing."), e.buildCmpSurrogate("uspv1", n)))("getUSPData", 1, function (n, r) {
            r ? t(e.parseUspData(n)) : (Object(a.p)("cmpApi: USP callback not succesful. Using defaults for CCPA."), t());
          });
        }
      }, {
        key: "lookupTcf",
        value: function (t) {
          var n = (i = e.findTCF()).cmpVersion,
            r = i.cmpFrame,
            i = i.cmpFunction;
          if (!r) return Object(a.r)("cmpApi: TCF not found! Using defaults for GDPR."), void t();
          Object(a.k)(i) ? this.lookupDirectTcf(n, i, t) : (Object(a.q)("cmpApi: Detected TCF is outside the current iframe. Using message passing."), this.lookupMessageTcf(n, r, t));
        }
      }, {
        key: "lookupMessageTcf",
        value: function (t, n, a) {
          n = e.buildCmpSurrogate(1 === t ? "tcfv1" : "tcfv2", n), this.lookupDirectTcf(t, n, a);
        }
      }, {
        key: "lookupDirectTcf",
        value: function (t, n, r) {
          function i(e, t, n) {
            Object(a.q)("cmpApi: TCFv".concat(e, " - Received a call back: ").concat(t), n);
          }
          function o(e, t) {
            Object(a.p)("cmpApi: TCFv".concat(e, " - Received insuccess: ").concat(t, ". Please check your CMP setup. Using defaults for GDPR."));
          }
          var s,
            c = {},
            l = {},
            d = function (t) {
              return l[t] = !1, function (n, a) {
                l[t] = !0, a ? (i(1, t, n), c[t] = n) : o(1, t), Object.values(l).every(function (e) {
                  return e;
                }) && r(e.parseTcfData(c, 1));
              };
            };
          1 === t ? (s = d("getConsentData"), d = d("getVendorConsents"), n("getConsentData", null, s), n("getVendorConsents", null, d)) : 2 === t && n("addEventListener", t, function (t, n) {
            if (i(2, "event", t), !n) return o(2, "addEventListener"), void r();
            !t || !1 !== t.gdprApplies && "tcloaded" !== t.eventStatus && "useractioncomplete" !== t.eventStatus || r(e.parseTcfData(t, 2));
          });
        }
      }, {
        key: "resetConsentData",
        value: function () {
          this.consentData = void 0, this.storedPrivacyData = void 0, this._consentRequested = !1;
        }
      }, {
        key: "isLocalStorageAllowed",
        value: function (e, t) {
          return !0 === e || !0 === t ? (Object(a.r)("cmpApi: Local storage access granted by configuration override, consent will not be checked"), !0) : this.consentData && this.consentData.api !== p.NONE ? this.consentData.canIUseLocalStorage() : this.isProvisionalLocalStorageAllowed();
        }
      }, {
        key: "isProvisionalLocalStorageAllowed",
        value: function () {
          var e;
          return Object(a.n)(this.storedPrivacyData) || (e = this.localStorage.getItemWithExpiration(r.a.STORAGE_CONFIG.PRIVACY), this.storedPrivacyData = e && JSON.parse(e)), !(!this.storedPrivacyData || !0 !== this.storedPrivacyData.id5_consent) || (this.storedPrivacyData && void 0 !== this.storedPrivacyData.jurisdiction ? !1 === (void 0 !== r.a.PRIVACY.JURISDICTIONS[this.storedPrivacyData.jurisdiction] && r.a.PRIVACY.JURISDICTIONS[this.storedPrivacyData.jurisdiction]) || !0 === this.storedPrivacyData.id5_consent : void 0);
        }
      }, {
        key: "setStoredPrivacy",
        value: function (e) {
          try {
            Object(a.n)(e) ? (this.storedPrivacyData = e, this.localStorage.setItemWithExpiration(r.a.STORAGE_CONFIG.PRIVACY, JSON.stringify(e))) : Object(a.q)("cmpApi: Cannot store privacy if it is not an object: ", e);
          } catch (e) {
            Object(a.p)(e);
          }
        }
      }], [{
        key: "buildCmpSurrogate",
        value: function (e, t) {
          return function (n, r, i) {
            var o = Math.random() + "",
              s = u[e],
              c = {},
              l = {};
            l[s.objKeys[0]] = n, l[s.objKeys[1]] = r, l.callId = o, c[s.objName] = l, l = function e(t) {
              (t = Object(a.e)(t, "data.".concat(s.returnObjName))) && t.callId === o && (window.removeEventListener("message", e), i(t.returnValue, t.success));
            }, window.addEventListener("message", l, !1), t.postMessage(c, "*");
          };
        }
      }, {
        key: "parseUspData",
        value: function (e) {
          if (Object(a.n)(e) && Object(a.o)(e.uspString)) return {
            api: p.USP_V1,
            hasCcpaString: !0,
            ccpaString: e.uspString
          };
          Object(a.p)("cmpApi: No or malformed USP data. Using defaults for CCPA.");
        }
      }, {
        key: "parseTcfData",
        value: function (t, n) {
          var r, i;
          if (1 === n) r = e.isValidV1ConsentObject, i = e.normalizeV1Data;else {
            if (2 !== n) return void Object(a.p)("cmpApi: No or malformed CMP data. Using defaults for GDPR.");
            r = e.isValidV2ConsentObject, i = e.normalizeV2Data;
          }
          if (r(t)) return i(t);
          Object(a.p)("cmpApi: Invalid CMP data. Using defaults for GDPR.", t);
        }
      }, {
        key: "isValidV1ConsentObject",
        value: function (e) {
          var t = Object(a.e)(e, "getConsentData.gdprApplies");
          return !!Object(a.i)(t) && (!1 === t || Object(a.o)(e.getConsentData.consentData) && Object(a.n)(e.getVendorConsents) && 1 < Object.keys(e.getVendorConsents).length);
        }
      }, {
        key: "isValidV2ConsentObject",
        value: function (e) {
          var t = e && e.gdprApplies;
          e = e && e.tcString;
          return !!Object(a.i)(t) && (!1 === t || Object(a.o)(e));
        }
      }, {
        key: "normalizeV1Data",
        value: function (e) {
          return {
            consentString: e.getConsentData.consentData,
            vendorData: e.getVendorConsents,
            gdprApplies: e.getConsentData.gdprApplies,
            api: p.TCF_V1
          };
        }
      }, {
        key: "normalizeV2Data",
        value: function (e) {
          return {
            consentString: e.tcString,
            vendorData: e,
            gdprApplies: e.gdprApplies,
            api: p.TCF_V2
          };
        }
      }, {
        key: "findTCF",
        value: function () {
          for (var e, t, n = 0, a = window; !e;) {
            try {
              if ("function" == typeof a.__tcfapi || "function" == typeof a.__cmp) {
                t = "function" == typeof a.__tcfapi ? (n = 2, a.__tcfapi) : (n = 1, a.__cmp), e = a;
                break;
              }
            } catch (e) {}
            try {
              if (a.frames.__tcfapiLocator) {
                n = 2, e = a;
                break;
              }
            } catch (e) {}
            try {
              if (a.frames.__cmpLocator) {
                n = 1, e = a;
                break;
              }
            } catch (e) {}
            if (a === window.top) break;
            a = a.parent;
          }
          return {
            cmpVersion: n,
            cmpFrame: e,
            cmpFunction: t
          };
        }
      }, {
        key: "findUsp",
        value: function () {
          for (var e, t, n = window; !e;) {
            try {
              if ("function" == typeof n.__uspapi) {
                t = n.__uspapi, e = n;
                break;
              }
            } catch (e) {}
            try {
              if (n.frames.__uspapiLocator) {
                e = n;
                break;
              }
            } catch (e) {}
            if (n === window.top) break;
            n = n.parent;
          }
          return {
            uspapiFrame: e,
            uspapiFunction: t
          };
        }
      }]), e;
    }();
}, function (e, t, n) {
  "use strict";

  function a(e, t) {
    for (var n = 0; n < t.length; n++) {
      var a = t[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  function r(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e;
  }
  n.d(t, "a", function () {
    return o;
  });
  var i = "_exp",
    o = function () {
      function e(t) {
        var n = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e), r(this, "available", !1), r(this, "win", void 0), r(this, "writingEnabled", void 0), this.win = t, this.writingEnabled = n, n = "__id5test";
        try {
          this.writingEnabled && this.win.localStorage.setItem(n, n), this.win.localStorage.removeItem(n), this.available = !0;
        } catch (t) {}
      }
      var t, n;
      return t = e, (n = [{
        key: "isAvailable",
        value: function () {
          return this.available;
        }
      }, {
        key: "getItem",
        value: function (e) {
          if (this.available) return this.win.localStorage.getItem(e);
        }
      }, {
        key: "setItem",
        value: function (e, t) {
          this.available && this.writingEnabled && this.win.localStorage.setItem(e, t);
        }
      }, {
        key: "removeItem",
        value: function (e) {
          this.available && this.win.localStorage.removeItem(e);
        }
      }, {
        key: "getItemWithExpiration",
        value: function (e) {
          var t = e.name;
          return !(e = this.getItem(t + i)) || new Date(e).getTime() - Date.now() <= 0 ? (this.removeItemWithExpiration({
            name: t
          }), null) : this.getItem(t);
        }
      }, {
        key: "setItemWithExpiration",
        value: function (e, t) {
          var n = e.name;
          e = e.expiresDays, e = Date.now() + 864e5 * e, e = new Date(e).toUTCString();
          this.setItem(n + i, e), this.setItem(n, t);
        }
      }, {
        key: "removeItemWithExpiration",
        value: function (e) {
          e = e.name, this.removeItem(e), this.removeItem(e + i);
        }
      }]) && a(t.prototype, n), e;
    }();
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return o;
  });
  var a = n(0);
  function r(e, t) {
    for (var n = 0; n < t.length; n++) {
      var a = t[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  function i(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e;
  }
  var o = function () {
    function e(t) {
      if (function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, e), i(this, "options", void 0), i(this, "providedOptions", void 0), i(this, "invalidSegments", void 0), this.options = {
        debugBypassConsent: !1,
        allowLocalStorageWithoutConsentApi: !1,
        cmpApi: "iab",
        consentData: {
          getConsentData: {
            consentData: void 0,
            gdprApplies: void 0
          },
          getVendorConsents: {}
        },
        refreshInSeconds: 7200,
        partnerId: void 0,
        partnerUserId: void 0,
        callbackOnAvailable: void 0,
        callbackOnUpdates: void 0,
        callbackTimeoutInMs: void 0,
        pd: void 0,
        abTesting: {
          enabled: !1,
          controlGroupPct: 0
        },
        provider: void 0,
        maxCascades: 8,
        applyCreativeRestrictions: !1,
        segments: void 0
      }, this.providedOptions = {}, !t.partnerId || "number" != typeof t.partnerId) throw new Error("partnerId is required and must be a number");
      this.invalidSegments = 0, this.updOptions(t);
    }
    var t, n;
    return t = e, (n = [{
      key: "getOptions",
      value: function () {
        return this.options;
      }
    }, {
      key: "getProvidedOptions",
      value: function () {
        return this.providedOptions;
      }
    }, {
      key: "getInvalidSegments",
      value: function () {
        return this.invalidSegments;
      }
    }, {
      key: "updOptions",
      value: function (t) {
        var n = this,
          r = this;
        if (Object(a.n)(t)) {
          if (Object(a.m)(this.options.partnerId) && Object(a.m)(t.partnerId) && t.partnerId !== this.options.partnerId) throw new Error("Cannot update config with a different partnerId");
          var i = function (e, t) {
            n.options[e] = t, n.providedOptions[e] = t;
          };
          Object.keys(t).forEach(function (n) {
            var o, c, l;
            "segments" === n ? (l = t[n], o = [], Object(a.h)(l) ? (l.forEach(function (e, t) {
              return t = "segments[".concat(t, "]"), Object(a.h)(e.ids) && Object(a.b)(e.ids, a.o) ? e.ids.length < 1 ? (Object(a.p)("Config option ".concat(t, ".ids should contain at least one segment ID")), void (r.invalidSegments += 1)) : Object(a.o)(e.destination) ? void o.push(e) : (s("".concat(t, ".destination"), "String", e.destination), void (r.invalidSegments += 1)) : (s("".concat(t, ".ids"), "Array of String", e.ids), void (r.invalidSegments += 1));
            }), i(n, o)) : s(n, "Array", l)) : (c = e.configTypes[n], l = t[n], Object(a.g)(l, c) ? i(n, l) : s(n, c, l));
          });
        } else Object(a.p)("Config options must be an object");
      }
    }]) && r(t.prototype, n), e;
  }();
  function s(e, t, n) {
    Object(a.p)("Config option ".concat(e, " must be of type ").concat(t, " but was ").concat(toString.call(n), ". Ignoring..."));
  }
  i(o, "configTypes", {
    debugBypassConsent: "Boolean",
    allowLocalStorageWithoutConsentApi: "Boolean",
    cmpApi: "String",
    consentData: "Object",
    refreshInSeconds: "Number",
    partnerId: "Number",
    partnerUserId: "String",
    callbackOnAvailable: "Function",
    callbackOnUpdates: "Function",
    callbackTimeoutInMs: "Number",
    pd: "String",
    abTesting: "Object",
    provider: "String",
    maxCascades: "Number",
    applyCreativeRestrictions: "Boolean"
  });
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), n = n(7), window.ID5 || (window.ID5 = n.a);
}, function (e, t, n) {
  "use strict";

  var a = n(0),
    r = n(8),
    i = n(2),
    o = n(3),
    s = n(9),
    c = n(10),
    l = n(4),
    d = n(5);
  function u(e, t) {
    return function (e) {
      if (Array.isArray(e)) return e;
    }(e) || function (e, t) {
      var n = e && ("undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]);
      if (null != n) {
        var a,
          r,
          i = [],
          o = !0,
          s = !1;
        try {
          for (n = n.call(e); !(o = (a = n.next()).done) && (i.push(a.value), !t || i.length !== t); o = !0);
        } catch (e) {
          s = !0, r = e;
        } finally {
          try {
            o || null == n.return || n.return();
          } finally {
            if (s) throw r;
          }
        }
        return i;
      }
    }(e, t) || function (e, t) {
      if (e) {
        if ("string" == typeof e) return p(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Map" === (n = "Object" === n && e.constructor ? e.constructor.name : n) || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? p(e, t) : void 0;
      }
    }(e, t) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function p(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
    return a;
  }
  function f(e, t) {
    for (var n = 0; n < t.length; n++) {
      var a = t[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  function h(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e;
  }
  n = new (function () {
    function e() {
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, e), h(this, "loaded", !1), h(this, "_isUsingCdn", !1), h(this, "_referer", !1), h(this, "_version", c.a), h(this, "versions", {}), this.loaded = !0, this._isUsingCdn = !!(document && document.currentScript && document.currentScript.src && 0 === document.currentScript.src.indexOf("https://cdn.id5-sync.com")), this._referer = Object(r.a)(), this.versions[c.a] = !0;
    }
    var t, n;
    return t = e, (n = [{
      key: "debug",
      get: function () {
        return Object(a.l)();
      },
      set: function (e) {
        Object(a.t)(e);
      }
    }, {
      key: "init",
      value: function (e) {
        try {
          Object(a.q)("Invoking Id5Api.init", arguments);
          var t = new d.a(e),
            n = t.getOptions(),
            r = new l.a(window.top, !n.applyCreativeRestrictions),
            c = new o.a(r),
            u = new i.a(function () {
              return c.isLocalStorageAllowed(n.allowLocalStorageWithoutConsentApi, n.debugBypassConsent);
            }, r),
            p = new s.a(t, u, c);
          return this.getId(p, !1), Object(a.q)("ID5 initialized for partner ".concat(n.partnerId, " with referer ").concat(this._referer.referer, " and options"), e), p;
        } catch (e) {
          Object(a.p)("Exception caught from Id5Api.init", e);
        }
      }
    }, {
      key: "refreshId",
      value: function (e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
          n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
        if (!Object(a.i)(t)) throw new Error("Invalid signature for Id5Api.refreshId: second parameter must be a boolean");
        try {
          Object(a.q)("Invoking Id5Api.refreshId", arguments), e.startRefresh(t), e.updateOptions(n), e.consentManagement.resetConsentData(), this.getId(e, t);
        } catch (e) {
          Object(a.p)("Exception caught from Id5Api.refreshId", e);
        }
        return e;
      }
    }, {
      key: "getId",
      value: function (e) {
        var t,
          n,
          r = this,
          i = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
          o = e.getOptions(),
          s = 0,
          c = !1,
          l = !1,
          d = !1;
        e.localStorageAllowed() && (t = e.clientStore.getResponse(), n = e.clientStore.getDateTime(), c = n <= 0 || Date.now() - n > 1e3 * o.refreshInSeconds, s = e.clientStore.getNb(o.partnerId), l = !e.clientStore.storedPdMatchesPd(o.partnerId, o.pd)), t || (t = e.clientStore.getResponseFromLegacyCookie(), c = !0), t && t.universal_uid && !l ? (e.setUserId(t, !0), s = e.clientStore.incNb(o.partnerId, s), d = !0, Object(a.q)("ID5 User ID available from cache:", {
          storedResponse: t,
          storedDateTime: n,
          refreshNeeded: c
        })) : t && t.universal_uid && l ? Object(a.q)("PD value has changed, so ignoring User ID from cache") : t && !t.universal_uid ? Object(a.p)("Invalid stored response: ", t) : Object(a.q)("No ID5 User ID available from cache"), e.consentManagement.requestConsent(o.debugBypassConsent, o.cmpApi, o.consentData, function (n) {
          var p, f, h, g, v;
          !1 !== e.localStorageAllowed() ? (Object(a.q)("Consent to access local storage is: " + e.localStorageAllowed()), t = e.clientStore.getResponse() || e.clientStore.getResponseFromLegacyCookie(), v = !e.clientStore.storedConsentDataMatchesConsentData(n), e.clientStore.putHashedConsentData(n), e.clientStore.putHashedPd(o.partnerId, o.pd), t && t.universal_uid && t.signature && !c && !v && !l && !i || (p = "https://id5-sync.com/g/v2/".concat(o.partnerId, ".json"), f = n.gdprApplies ? 1 : 0, h = {
            partner: o.partnerId,
            v: r._version,
            o: "api",
            gdpr: f,
            rf: r._referer.referer,
            u: r._referer.stack[0] || window.location.href,
            top: r._referer.reachedTop ? 1 : 0,
            localStorage: e.clientStore.isLocalStorageAvailable() ? 1 : 0,
            nbPage: s,
            id5cdn: r._isUsingCdn
          }, g = n.gdprApplies ? n.consentString : void 0, Object(a.j)(g) && (h.gdpr_consent = g), Object(a.j)(n.allowedVendors) && (h.allowed_vendors = n.allowedVendors), v = t && t.signature ? t.signature : void 0, Object(a.j)(v) && (h.s = v), n.hasCcpaString && (h.us_privacy = n.ccpaString), Object.entries({
            pd: "pd",
            partnerUserId: "puid",
            provider: "provider",
            segments: "segments"
          }).forEach(function (e) {
            e = (t = u(e, 2))[0];
            var t = t[1];
            Object(a.j)(o[e]) && (h[t] = o[e]);
          }), !0 === o.abTesting.enabled && (h.ab_testing = {
            enabled: !0,
            control_group_pct: e.getOptions().abTesting.controlGroupPct
          }), 0 < e.getInvalidSegments() && (h._invalid_segments = e.getInvalidSegments()), Object(a.q)("Fetching ID5 user ID from:", p, h), i && Object(a.q)("...with Force Fetch"), Object(a.a)(p, {
            success: function (t) {
              if (Object(a.q)("Response from ID5 received:", t), t) try {
                var n,
                  r,
                  i = JSON.parse(t);
                Object(a.q)("Valid json response from ID5 received:", i), Object(a.o)(i.universal_uid) ? (e.setUserId(i, !1), e.consentManagement.setStoredPrivacy(i.privacy), !0 !== e.localStorageAllowed() && Object(a.j)(i.privacy) ? e.clientStore.clearAll(o.partnerId) : (e.clientStore.putResponse(t), e.clientStore.setDateTime(new Date().toUTCString()), e.clientStore.setNb(o.partnerId, d ? 0 : 1)), e.clientStore.removeLegacyCookies(o.partnerId), !0 === i.cascade_needed && !0 === e.localStorageAllowed() && 0 <= o.maxCascades && !o.applyCreativeRestrictions && (n = o.partnerUserId && 0 < o.partnerUserId.length, r = "https://id5-sync.com/".concat(n ? "s" : "i", "/").concat(o.partnerId, "/").concat(o.maxCascades, ".gif?id5id=").concat(e._userId, "&o=api&").concat(n ? "puid=" + o.partnerUserId + "&" : "", "gdpr_consent=").concat(g, "&gdpr=").concat(f), Object(a.q)("Opportunities to cascade available:", r), Object(a.d)(r))) : Object(a.p)("Invalid response from ID5 servers:", t);
              } catch (t) {
                Object(a.p)(t);
              } else Object(a.p)("Empty response from ID5 servers:", t);
            },
            error: function (e) {
              Object(a.p)(e);
            }
          }, JSON.stringify(h), {
            method: "POST",
            withCredentials: !0
          }))) : Object(a.q)("No legal basis to use ID5", n);
        });
      }
    }]) && f(t.prototype, n), e;
  }())(), t.a = n;
}, function (e, t, n) {
  "use strict";

  function a() {
    return (a = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n,
          a = arguments[t];
        for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
      }
      return e;
    }).apply(this, arguments);
  }
  n.d(t, "a", function () {
    return i;
  });
  var r,
    i = (r = window, function () {
      try {
        var e,
          t = o(),
          n = t.length - 1,
          a = null !== t[n].location || 0 < n && null !== t[n - 1].referrer,
          r = function (e) {
            for (var t, n = [], a = null, r = null, i = null, o = null, s = e.length - 1; 0 <= s; s--) {
              try {
                a = e[s].location;
              } catch (e) {}
              if (a) n.push(a), o = o || a;else if (0 !== s) {
                t = e[s - 1];
                try {
                  r = t.referrer, i = t.ancestor;
                } catch (e) {}
                r ? (n.push(r), o = o || r) : i ? (n.push(i), o = o || i) : n.push(null);
              } else n.push(null);
            }
            return {
              stack: n,
              detectedRefererUrl: o
            };
          }(t);
        return t[t.length - 1].canonicalUrl && (e = t[t.length - 1].canonicalUrl), {
          referer: r.detectedRefererUrl,
          reachedTop: a,
          numIframes: n,
          stack: r.stack,
          canonicalUrl: e
        };
      } catch (e) {}
    });
  function o() {
    var e = function () {
        var e,
          t = [];
        do {
          try {
            e = e ? e.parent : r;
            try {
              var n = e === r.top,
                i = {
                  referrer: e.document.referrer || null,
                  location: e.location.href || null,
                  isTop: n
                };
              n && (i = a(i, {
                canonicalUrl: function (e) {
                  try {
                    var t = e.querySelector("link[rel='canonical']");
                    if (null !== t) return t.href;
                  } catch (e) {}
                  return null;
                }(e.document)
              })), t.push(i);
            } catch (n) {
              t.push({
                referrer: null,
                location: null,
                isTop: e === r.top
              });
            }
          } catch (n) {
            return t.push({
              referrer: null,
              location: null,
              isTop: !1
            }), t;
          }
        } while (e !== r.top);
        return t;
      }(),
      t = function () {
        try {
          return r.location.ancestorOrigins ? r.location.ancestorOrigins : void 0;
        } catch (e) {}
      }();
    if (t) for (var n = 0, i = t.length; n < i; n++) e[n].ancestor = t[n];
    return e;
  }
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return s;
  });
  t = n(1);
  var a = n.n(t),
    r = n(0);
  function i(e, t) {
    for (var n = 0; n < t.length; n++) {
      var a = t[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  function o(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e;
  }
  n(5), n(2), n(3);
  var s = function () {
    function e(t, n, a) {
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, e), o(this, "_availableCallbackTimerId", void 0), o(this, "_availableCallbackFired", !1), o(this, "_availableCallback", void 0), o(this, "_updateCallback", void 0), o(this, "_refreshCallbackTimerId", void 0), o(this, "_refreshCallbackFired", !1), o(this, "_refreshCallback", void 0), o(this, "_isExposed", void 0), o(this, "_fromCache", void 0), o(this, "_isRefreshing", !1), o(this, "_isRefreshingWithFetch", !1), o(this, "_userId", void 0), o(this, "_linkType", void 0), o(this, "_userIdAvailable", !1), o(this, "config", void 0), o(this, "clientStore", void 0), o(this, "consentManagement", void 0), this.config = t, this.clientStore = n, this.consentManagement = a;
    }
    var t, n, s;
    return t = e, s = [{
      key: "doFireOnAvailableCallBack",
      value: function (e) {
        r.q("Id5Status.doFireOnAvailableCallBack"), e._availableCallbackFired = !0, e._availableCallbackTimerId = void 0, e._availableCallback(e);
      }
    }, {
      key: "doFireOnUpdateCallBack",
      value: function (e) {
        r.q("Id5Status.doFireOnUpdateCallBack"), e._updateCallback(e);
      }
    }, {
      key: "doFireOnRefreshCallBack",
      value: function (e) {
        r.q("Id5Status.doFireOnRefreshCallBack"), e._refreshCallbackFired = !0, e._refreshCallbackTimerId = void 0, e._isRefreshing = !1, e._isRefreshingWithFetch = !1, e._refreshCallback(e);
      }
    }], (n = [{
      key: "getOptions",
      value: function () {
        return this.config.getOptions();
      }
    }, {
      key: "getInvalidSegments",
      value: function () {
        return this.config.getInvalidSegments();
      }
    }, {
      key: "updateOptions",
      value: function (e) {
        return this.config.updOptions(e);
      }
    }, {
      key: "startRefresh",
      value: function (e) {
        this._isRefreshing = !0, this._isRefreshingWithFetch = e;
      }
    }, {
      key: "setUserId",
      value: function (t, n) {
        var a = this,
          i = t.universal_uid,
          o = t.link_type || 0;
        if (this._isExposed = !0, r.n(t.ab_testing)) switch (t.ab_testing.result) {
          case "normal":
            break;
          default:
          case "error":
            r.p("There was an error with A/B Testing. Make sure controlGroupRatio is a number >= 0 and <= 1");
            break;
          case "control":
            this._isExposed = !1, r.q("User is in control group!");
        }
        t = this._userId !== i || this._linkType !== o, this._userIdAvailable = !0, this._userId = i, this._linkType = o, this._fromCache = n, r.q("Id5Status.setUserId: user id updated, hasChanged: ".concat(t)), r.k(this._availableCallback) && !1 === this._availableCallbackFired && (this._availableCallbackTimerId && (r.q("Cancelling pending onAvailableCallback watchdog"), clearTimeout(this._availableCallbackTimerId), this._availableCallbackTimerId = void 0), this._availableCallbackTimerId = setTimeout(function () {
          return e.doFireOnAvailableCallBack(a);
        }, 0)), this._isRefreshing && r.k(this._refreshCallback) && !1 === this._refreshCallbackFired && (!1 !== n && !1 !== this._isRefreshingWithFetch || (this._refreshCallbackTimerId && (r.q("Cancelling pending onRefreshCallback watchdog"), clearTimeout(this._refreshCallbackTimerId), this._refreshCallbackTimerId = void 0), this._refreshCallbackTimerId = setTimeout(function () {
          return e.doFireOnRefreshCallBack(a);
        }, 0))), t && r.k(this._updateCallback) && setTimeout(function () {
          return e.doFireOnUpdateCallBack(a);
        }, 0);
      }
    }, {
      key: "getUserId",
      value: function () {
        return !1 === this._isExposed ? "0" : this._userId;
      }
    }, {
      key: "getLinkType",
      value: function () {
        return !1 === this._isExposed ? 0 : this._linkType;
      }
    }, {
      key: "isFromCache",
      value: function () {
        return this._fromCache;
      }
    }, {
      key: "exposeUserId",
      value: function () {
        return this._isExposed;
      }
    }, {
      key: "getUserIdAsEid",
      value: function () {
        return {
          source: a.a.ID5_EIDS_SOURCE,
          uids: [{
            id: this.getUserId(),
            ext: {
              linkType: this.getLinkType(),
              abTestingControlGroup: !this.exposeUserId()
            }
          }]
        };
      }
    }, {
      key: "onAvailable",
      value: function (t, n) {
        if (!r.k(t)) throw new Error("onAvailable expect a function");
        var a;
        return r.k(this._availableCallback) ? r.q("onAvailable was already called, ignoring") : (this._availableCallback = t, (a = this)._userIdAvailable ? (r.q("Id5Status.onAvailable: User id already available firing callback immediately"), this._availableCallbackTimerId = setTimeout(function () {
          return e.doFireOnAvailableCallBack(a);
        }, 0)) : 0 < n && (this._availableCallbackTimerId = setTimeout(function () {
          return e.doFireOnAvailableCallBack(a);
        }, n))), this;
      }
    }, {
      key: "onUpdate",
      value: function (t) {
        if (!r.k(t)) throw new Error("onUpdate expect a function");
        this._updateCallback = t;
        var n = this;
        return this._userIdAvailable && setTimeout(function () {
          return e.doFireOnUpdateCallBack(n);
        }, 0), this;
      }
    }, {
      key: "onRefresh",
      value: function (t, n) {
        if (!r.k(t)) throw new Error("onRefresh expect a function");
        this._refreshCallbackTimerId && (clearTimeout(this._refreshCallbackTimerId), this._refreshCallbackTimerId = void 0), this._refreshCallback = t;
        var a = this;
        return !0 === this._isRefreshing && !1 === this._isRefreshingWithFetch && this._userIdAvailable ? this._refreshCallbackTimerId = setTimeout(function () {
          return e.doFireOnRefreshCallBack(a);
        }, 0) : 0 < n && (this._refreshCallbackTimerId = setTimeout(function () {
          return e.doFireOnRefreshCallBack(a);
        }, n)), this;
      }
    }, {
      key: "localStorageAllowed",
      value: function () {
        return this.clientStore.localStorageAllowed();
      }
    }]) && i(t.prototype, n), s && i(t, s), e;
  }();
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return a;
  });
  var a = "1.0.12";
}]), function () {
  var e = window.sas;
  Date.now || (Date.now = function () {
    return new Date().getTime();
  }), e.utils.extend = function (t) {
    for (var n = 1; n < arguments.length; n++) {
      var a = arguments[n];
      if (a && "object" == typeof a) for (var r in a) void 0 !== a[r] && (Array.isArray(a[r]) ? t[r] = a[r] : "object" == typeof a[r] ? t[r] = e.utils.extend({}, t[r], a[r]) : t[r] = a[r]);
    }
    return t;
  }, e.utils.Latch = function (e) {
    for (var t = [], n = {}, a = e = e || [], r = !1, i = 0; i < a.length; i++) n[e[i]] = {};
    var o = function () {
        if (!r) {
          for (var e in n) if (!n[e].status) return;
          r = !0;
          for (var a = s(), i = 0; i < t.length; i++) t[i].apply(this, a);
        }
      },
      s = function () {
        for (var e = [], t = 0; t < a.length; t++) e.push(n[a[t]].result);
        return e;
      };
    this.isComplete = function () {
      return r;
    }, this.notify = function (e, t) {
      n[e] && (n[e].status = !0, n[e].result = t, o());
    }, this.addListener = function (e) {
      null != e && (r ? e() : t.push(e));
    }, o();
  }, e.utils.getIEVersion = function () {
    var e = navigator.userAgent.match(/(?:MSIE |Trident\/.*; rv:)(\d+)/);
    return e ? parseInt(e[1]) : void 0;
  }, e.utils.parseCookies = function (e) {
    for (var t = {}, n = e.split("; "), a = 0; a < n.length; a++) {
      var r = n[a],
        i = r.indexOf("="),
        o = r.substring(0, i),
        s = r.substring(i + 1);
      t[o] = s;
    }
    return t;
  }, e.utils.setCookie = function (e, t, n, a) {
    var r = new Date();
    r.setTime(r.getTime() + 24 * a * 60 * 60 * 1e3);
    var i = "expires=" + r.toUTCString();
    e.cookie = t + "=" + n + ";" + i + ";path=/";
  };
  var t = null;
  e.utils.checkIfLocalStorageAvailable = function () {
    if (null == t) try {
      "undefined" != typeof localStorage ? (localStorage.setItem("smartadserver_feature_test", "1"), "1" === localStorage.getItem("smartadserver_feature_test") ? (localStorage.removeItem("smartadserver_feature_test"), t = !0) : t = !1) : t = !1;
    } catch (e) {
      t = !1;
    }
    return t;
  }, e.utils.getLocalStorageItemSafely = function (t) {
    return e.utils.checkIfLocalStorageAvailable() ? window.localStorage.getItem(t) : null;
  }, e.utils.setLocalStorageItemSafely = function (t, n) {
    return !!e.utils.checkIfLocalStorageAvailable() && (window.localStorage.setItem(t, n), !0);
  }, e.utils.isAddtlConsentBlocked = function () {
    return void 0 !== window.sas_blockAddtlConsent && !!window.sas_blockAddtlConsent;
  }, e.events.addEvent = function (e, t, n) {
    if (e && t && n) return e.attachEvent ? e.attachEvent("on" + t, n) : e.addEventListener && e.addEventListener(t, n, !1), {
      removeEvent: function () {
        e.detachEvent ? e.detachEvent("on" + t, n) : e.removeEventListener && e.removeEventListener(t, n, !1);
      }
    };
  }, e.events.addLoadEvent = function (t, n) {
    if (t && n) {
      var a = "load",
        r = function () {
          return !0;
        };
      (e.utils.getIEVersion() < 11 || t == document) && (a = "readystatechange", r = function () {
        if (!t.readyState || "complete" == t.readyState || "loaded" == t.readyState) return !0;
      });
      var i = e.events.addEvent(t, a, function () {
        r() && (i.removeEvent(), n.apply(this, arguments));
      });
    }
  }, e.events.addMessageEvent = function (t, n) {
    t && n && e.events.addEvent(t, "message", function () {
      n.apply(this, arguments);
    });
  }, e.events._events = e.events._events || {}, e.events._history = e.events._history || [], e.events.on = function (t, n, a) {
    e.events._events[t] = e.events._events[t] || {
      que: []
    };
    var r = e.events._events[t];
    a && (r = r[a] = r[a] || {
      que: []
    }), r.que.push(n);
  }, e.events.fire = function (t, n, a) {
    e.events._history.push({
      eventName: t,
      data: e.utils.extend({
        timestamp: Date.now()
      }, n),
      id: a
    });
    var r = e.events._events[t];
    if (r) {
      var i;
      if (a && r[a]) for (i = 0; i < r[a].que.length; i++) r[a].que[i](e.utils.extend({}, n), a);
      for (i = 0; i < r.que.length; i++) r.que[i](e.utils.extend({}, n), a);
    }
  }, e.events.off = function (t, n, a) {
    var r = e.events._events[t];
    if (r) {
      var i = r.que;
      if (a && (i = r[a].que), i) {
        var o = i.indexOf(n);
        o >= 0 && i.splice(o, 1);
      }
    }
  }, e.events.history = function (t) {
    for (var n = [], a = 0; a < e.events._history.length; a++) {
      var r = e.events._history[a];
      t && r.eventName != t || n.push(e.utils.extend({}, r));
    }
    return n;
  };
}(), function () {
  "use strict";

  var e = {
      17: function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.WarningLogLevel = t.InfoLogLevel = t.ErrorLogLevel = t.DebugLogLevel = t.DataDogUrlParams = t.DataDogUrlDomain = t.DataDogDefaultClientToken = void 0, t.DataDogDefaultClientToken = "pub4dc0b42521d789dc92f11b797f836ecf", t.DataDogUrlDomain = "https://browser-http-intake.logs.datadoghq.eu/v1/input/", t.DataDogUrlParams = "?ddsource=smartWebLogger&ddtags=version:0.0.1-9110cbe5d7073cc35538d4f4cd5a191e3869117f", t.DebugLogLevel = "debug", t.ErrorLogLevel = "error", t.InfoLogLevel = "info", t.WarningLogLevel = "warning";
      },
      366: function (e, t, n) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.DefaultConfiguration = void 0;
        var a = n(17);
        t.DefaultConfiguration = {
          clientToken: a.DataDogDefaultClientToken,
          source: "video",
          tags: "video",
          service: "video",
          host: "FRONT-DDLOG-HOST",
          endpoint: "videoPlugin",
          minLogLevel: "error",
          version: "0.0.1",
          samplingRate: {
            debug: 1e4,
            info: 1e3,
            warning: 100,
            error: 100
          }
        };
      },
      133: function (e, t, n) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.DataDogLogger = void 0;
        var a = n(17),
          r = function () {
            function e(e) {
              this.url = a.DataDogUrlDomain + e + a.DataDogUrlParams;
            }
            return e.prototype.log = function (e) {
              var t = {
                headers: {
                  "content-type": "text/plain;charset=UTF-8"
                },
                body: JSON.stringify(e),
                method: "POST"
              };
              fetch(this.url, t).then(function (e) {
                e.ok && console.log("WebTechnicalLogger data were logged successfully");
              }).catch(function (e) {
                return console.log("WebTechnicalLogger Fetch error ", e);
              });
            }, e;
          }();
        t.DataDogLogger = r;
      },
      19: function (e, t, n) {
        var a = this && this.__assign || function () {
          return a = Object.assign || function (e) {
            for (var t, n = 1, a = arguments.length; n < a; n++) for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e;
          }, a.apply(this, arguments);
        };
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.WebTechnicalLogger = void 0;
        var r = n(800),
          i = n(366),
          o = n(133),
          s = n(17),
          c = function () {
            function e(e) {
              void 0 === e && (e = null), this.configuration = this.prepareConfiguration(i.DefaultConfiguration, e), this.loggerManager = new r.LoggerManager(this.configuration.samplingRate), this.dataDogLogger = new o.DataDogLogger(this.configuration.clientToken);
            }
            return e.prototype.log = function (e, t, n) {
              var a = this.loggerManager.getLog(e, n);
              a && this.dataDogLogger.log({
                log: a,
                endpoint: this.configuration.endpoint,
                Properties: {
                  DatadogIngestWeight: this.configuration.samplingRate[e]
                },
                type: t,
                severity: e,
                service: this.configuration.service,
                source: this.configuration.source,
                host: this.configuration.host,
                version: this.configuration.version
              });
            }, e.prototype.updateConfiguration = function (e) {
              e ? (this.configuration = this.prepareConfiguration(this.configuration, e), this.loggerManager.updateSamplingRate(this.configuration.samplingRate)) : console.warn("Web Technical Logger new configuration is not updated");
            }, e.prototype.prepareConfiguration = function (e, t) {
              var n,
                a = [s.ErrorLogLevel, s.InfoLogLevel, s.DebugLogLevel, s.WarningLogLevel];
              return n = this.mergeConfiguration(e, t), a.indexOf(n.minLogLevel) < 0 && (n.minLogLevel = s.ErrorLogLevel), n;
            }, e.prototype.mergeConfiguration = function (e, t) {
              var n = this;
              return null === t ? e : a(a({}, e), Object.keys(e).reduce(function (a, r) {
                return null !== t[r] && void 0 !== t[r] && (t[r] instanceof Object ? a[r] = n.mergeConfiguration(e[r], t[r]) : a[r] = t[r]), a;
              }, {}));
            }, e;
          }();
        t.WebTechnicalLogger = c;
      },
      800: function (e, t, n) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.LoggerManager = void 0;
        var a = n(17),
          r = n(900),
          i = n(35),
          o = n(536),
          s = n(837),
          c = n(46),
          l = n(696),
          d = function () {
            function e(e) {
              this.updateSamplingRate(e);
            }
            return e.prototype.getLog = function (e, t) {
              var n = !1;
              switch (e) {
                case a.DebugLogLevel:
                  null !== this.getErrorExcludedLog(t) && this.toLog(this.sampling.debug) ? n = this.getErrorExcludedLog(t) : console.warn("Web Technical Logger, debugLog: the log cannot be logged because of sampling");
                  break;
                case a.ErrorLogLevel:
                  null !== this.getErrorLog(t) && this.toLog(this.sampling.error) ? n = this.getErrorLog(t) : console.warn("Web Technical Logger, errorLog: the log cannot be logged because of sampling");
                  break;
                case a.InfoLogLevel:
                  null !== this.getErrorExcludedLog(t) && this.toLog(this.sampling.info) && (n = this.getErrorExcludedLog(t));
                  break;
                case a.WarningLogLevel:
                  null !== this.getErrorExcludedLog(t) && this.toLog(this.sampling.warning) ? n = this.getErrorExcludedLog(t) : console.warn("Web Technical Logger, warningLog: the log cannot be logged because of sampling");
                  break;
                default:
                  console.error("Web Technical Logger: we do not suport log level:", e);
              }
              return n;
            }, e.prototype.updateSamplingRate = function (e) {
              this.sampling = e;
            }, e.prototype.toLog = function (e) {
              return !((Math.floor(Math.random() * e) + 1) % e);
            }, e.prototype.getErrorLog = function (e) {
              var t = new r.ErrorNode().getNodeResponse(e.error),
                n = new i.SmartNode().getNodeResponse(e.smart),
                a = null;
              return null !== t && null !== n ? a = {
                error: t,
                smart: n
              } : console.error("Web Technical Logger: error node is not defined"), a;
            }, e.prototype.getErrorExcludedLog = function (e) {
              var t = {},
                n = new o.MediaNode().getNodeResponse(e.media),
                a = new i.SmartNode().getNodeResponse(e.smart),
                r = new s.ViewabilityNode().getNodeResponse(e.viewability),
                d = new c.BiddingNode().getNodeResponse(e.bidding),
                u = new l.MeasureNode().getNodeResponse(e.measure);
              return null === n && null === a && null === r && null === d && null === u ? t = null : (t.media = n, t.smart = a, t.viewability = r, t.bidding = d, t.measure = u), t;
            }, e;
          }();
        t.LoggerManager = d;
      },
      46: function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.BiddingNode = void 0;
        var n = function () {
          function e() {
            this.amount = null, this.currency = null;
          }
          return e.prototype.getNodeResponse = function (e) {
            return null == e ? null : {
              amount: e.amount ? e.amount : this.amount,
              currency: e.currency ? e.currency : this.currency
            };
          }, e;
        }();
        t.BiddingNode = n;
      },
      900: function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.ErrorNode = void 0;
        var n = function () {
          function e() {
            this.adResponse = null, this.errorCode = null, this.errorDetailed = null, this.message = null;
          }
          return e.prototype.getNodeResponse = function (e) {
            var t = null;
            return null == e || (void 0 === e.errorCode || null === e.errorCode ? console.error("Web Technical Logger ErrorNode preparation: errorCode must be defined") : t = {
              adResponse: e.adResponse ? JSON.stringify(e.adResponse) : this.adResponse,
              errorCode: e.errorCode,
              errorDetailed: e.errorDetailed ? e.errorDetailed : this.errorDetailed,
              message: e.message ? e.message : this.message
            }), t;
          }, e;
        }();
        t.ErrorNode = n;
      },
      696: function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.MeasureNode = void 0;
        var n = function () {
          function e() {}
          return e.prototype.getNodeResponse = function (e) {
            return null == e ? null : {
              durationBeforeRender: e.durationBeforeRender,
              durationAd: e.durationAd,
              durationLoad: e.durationLoad,
              durationRender: e.durationRender,
              durationNoAd: e.durationNoAd,
              durationRequest: e.durationRequest,
              responseType: e.responseType
            };
          }, e;
        }();
        t.MeasureNode = n;
      },
      536: function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.MediaNode = void 0;
        var n = function () {
          function e() {
            this.type = 1, this.container = 1, this.url = null, this.bitrate = -1, this.width = -1, this.height = -1, this.duration = -1;
          }
          return e.prototype.getNodeResponse = function (e) {
            return null == e ? null : {
              type: void 0 !== e.type ? e.type : this.type,
              container: e.container ? e.container : this.container,
              url: e.url ? e.url : this.url,
              bitrate: e.bitrate ? e.bitrate : this.bitrate,
              width: e.width ? e.width : this.width,
              height: e.height ? e.height : this.height,
              duration: e.duration ? e.duration : this.duration
            };
          }, e;
        }();
        t.MediaNode = n;
      },
      35: function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.SmartNode = void 0;
        var n = function () {
          function e() {
            this.siteId = null, this.pageId = null, this.pageName = null, this.formatId = null, this.target = null, this.expectedFormatType = -1, this.channelType = -1, this.templateFormatType = -1, this.insertionId = null, this.rtb = null;
          }
          return e.prototype.getNodeResponse = function (e) {
            var t = null;
            return null == e || (e.formatId && (e.pageId || e.pageName) ? t = {
              siteId: e.siteId,
              pageId: e.pageId ? e.pageId : this.siteId,
              pageName: e.pageName ? e.pageName : this.pageName,
              formatId: e.formatId,
              target: e.target ? e.target : this.target,
              expectedFormatType: e.expectedFormatType ? e.expectedFormatType : this.expectedFormatType,
              channelType: e.channelType ? e.channelType : this.channelType,
              templateFormatType: e.templateFormatType ? e.templateFormatType : this.templateFormatType,
              insertionId: e.insertionId ? e.insertionId : this.insertionId,
              rtb: e.rtb ? JSON.stringify(e.rtb) : this.rtb
            } : console.error("Web Technical Logger SmartNode preparation: formatId and pageId or pageName must be defined")), t;
          }, e;
        }();
        t.SmartNode = n;
      },
      837: function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.ViewabilityNode = void 0;
        var n = function () {
          function e() {
            this.type = null, this.percentage = -1;
          }
          return e.prototype.getNodeResponse = function (e) {
            return null == e ? null : {
              type: e.type ? e.type : this.type,
              percentage: e.percentage ? e.percentage : this.percentage
            };
          }, e;
        }();
        t.ViewabilityNode = n;
      },
      629: function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.Global = void 0;
        var n = function () {
          function e() {
            this.sas = window.sas = window.sas || {}, this.sas.cmd = window.sas.cmd = window.sas.cmd || [], this.sas.livePreview = window.sas.livePreview = window.sas.livePreview || {}, this.isDebug = this._isDebug(), this.ieFixes();
          }
          return e.prototype.ieFixes = function () {
            Object.entries || (Object.entries = function (e) {
              for (var t = Object.keys(e), n = t.length, a = new Array(n); n--;) a[n] = [t[n], e[t[n]]];
              return a;
            });
          }, e.prototype.setEids = function (e) {
            var t = this;
            "function" == typeof this.sas.setEids ? this.sas.setEids([e]) : this.sas.cmd.unshift(function () {
              return t.sas.setEids([e]);
            });
          }, e.prototype._log = function (e, t, n) {
            void 0 === n && (n = "");
            var a = "background:#fe5000; border-radius:2px; color:#feffff; font-family:lato,sans-serif; padding:1px 3px;";
            "warning" === t ? console.warn("%cequativ", a, e, n) : this.isDebug && console.log("%cequativ", a, e, n);
          }, e.prototype.isString = function (e) {
            return "string" == typeof e || e instanceof String;
          }, e.prototype.isObjectEmpty = function (e) {
            return "object" == typeof e && !Array.isArray(e) && null !== e && e && 0 === Object.keys(e).length && Object.getPrototypeOf(e) === Object.prototype;
          }, e.prototype._isDebug = function () {
            return "true" === ("function" == typeof window.URLSearchParams ? new URLSearchParams(window.location.search).get("sas_debug") : null);
          }, e;
        }();
        t.Global = n;
      },
      791: function (e, t, n) {
        var a,
          r = this && this.__extends || (a = function (e, t) {
            return a = Object.setPrototypeOf || {
              __proto__: []
            } instanceof Array && function (e, t) {
              e.__proto__ = t;
            } || function (e, t) {
              for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            }, a(e, t);
          }, function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
            function n() {
              this.constructor = e;
            }
            a(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
          });
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.Id5 = void 0;
        var i = function (e) {
          function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.partnerId = 102, t;
          }
          return r(t, e), t.prototype.init = function (e) {
            var t = {
              partnerId: this.partnerId
            };
            (null == e ? void 0 : e.pd) && (t.pd = e.pd);
            var n = window.ID5.init(t);
            (null == n ? void 0 : n.getUserId()) && this.setEids(n.getUserIdAsEid());
          }, t;
        }(n(629).Global);
        t.Id5 = i;
      },
      129: function (e, t) {
        var n = this && this.__assign || function () {
          return n = Object.assign || function (e) {
            for (var t, n = 1, a = arguments.length; n < a; n++) for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e;
          }, n.apply(this, arguments);
        };
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.SasIabApi = void 0;
        var a = function () {
          function e(e, t) {
            this.apiWasFound = !1, this.apiAnsweredOk = !1, this.eventMessageListenerAdded = !1, this.hasAddtlConsent = !1, this.apiCallbacks = {}, this.myCmpCallbackFinished = void 0, this.maxSearchRetry = 50, this.doubleCallbackTime = 10, this.retryNumber = 0, this.retryInterval = 0, this.name = e.name, this.sasCookieName = e.sasCookieName, this.sasAddtlCookieName = e.sasAddtlCookieName, this.version = e.version, this.getConsentFunction = e.getConsentFunction, this.apiFunctionName = e.apiFunctionName, this.consentObjectConsentDataName = e.consentObjectConsentDataName, this.consentObjectAdditionalConsentDataName = e.consentObjectAdditionalConsentDataName, this.apiLocator = e.apiLocator, this.sentMessage = e.sentMessage, this.postMessageReturnObjectName = e.postMessageReturnObjectName, t && (this.myCmpCallbackFinished = function () {
              return t();
            }), this.lastCallbackResult = {
              id: "",
              addtlConsent: "",
              eventStatus: "",
              gdprApplies: void 0,
              timeStamp: 0,
              vendor: {
                consents: {},
                legitimateInterests: {}
              }
            };
          }
          return Object.defineProperty(e.prototype, "gdprApplies", {
            get: function () {
              return this._gdprApplies;
            },
            enumerable: !1,
            configurable: !0
          }), e.prototype.cmpCallback = function (e, t) {
            if (t && e && void 0 !== e[this.consentObjectConsentDataName] && null !== e[this.consentObjectConsentDataName]) {
              this.apiAnsweredOk = !0, this._gdprApplies = e.gdprApplies, this.consentObjectAdditionalConsentDataName && e[this.consentObjectAdditionalConsentDataName] && (this.hasAddtlConsent = !0);
              var n = {
                consentObject: e,
                name: this.consentObjectConsentDataName
              };
              if (this.hasAddtlConsent && (n.additionalConsent = this.consentObjectAdditionalConsentDataName), window.sas.events.fire("ApiAnswered Valid answer", n, this.name), window.sas.utils.setLocalStorageItemSafely(this.sasCookieName, e[this.consentObjectConsentDataName]), this.hasAddtlConsent) {
                var a = e[this.consentObjectAdditionalConsentDataName];
                Array.isArray(a) && (a = JSON.stringify(a)), window.sas.utils.setLocalStorageItemSafely(this.sasAddtlCookieName, a);
              }
              this.myCmpCallbackFinished && this.myCmpCallbackFinished();
            } else window.sas.events.fire("ApiAnswered Wrong answer", {
              consent: e,
              success: t,
              failType: "Wrong answer",
              version: this.version
            }, this.name);
          }, e.prototype.callApiLocal = function () {
            var e = this,
              t = window[this.apiFunctionName];
            if (void 0 !== t && "[object Function]" === Object.prototype.toString.call(t)) {
              if (this.apiWasFound = !0, window.sas.events.fire("ApiCalled", {
                location: "Same Iframe",
                version: this.version
              }, this.name), "__gpp" === this.apiFunctionName) {
                var n = function () {
                  var n = t("getGPPData");
                  e.cmpCallback(n, null != n);
                };
                n(), t(this.getConsentFunction, function () {
                  return n();
                });
              } else t(this.getConsentFunction, this.version, function (t, n) {
                e.cmpCallback(t, n);
              });
              return !0;
            }
            return !1;
          }, e.prototype.callApiInFrame = function () {
            for (var e, t, n, a, r, i, o = this, s = window; !e;) {
              try {
                s.frames[this.apiLocator] && (e = s);
              } catch (e) {}
              if (s === window.top) break;
              s = s.parent;
            }
            if (e) {
              this.apiWasFound = !0, window.sas.events.fire("ApiFrameFound", {
                version: this.version
              }, this.name);
              return this.eventMessageListenerAdded || (window.sas.events.addEvent(window, "message", function (e) {
                o.readPostMessageResponse(e);
              }), this.eventMessageListenerAdded = !0), window.sas.events.fire("ApiCalled", {
                location: "Different iframe",
                version: this.version
              }, this.name), t = this.getConsentFunction, n = void 0, a = function (e, t) {
                o.cmpCallback(e, t);
              }, r = "smartjs" + Math.random(), (i = {})[o.sentMessage] = {
                command: t,
                parameter: n,
                callId: r,
                version: o.version
              }, o.apiCallbacks[r] = a, null == e || e.postMessage(i, "*"), !0;
            }
            return !1;
          }, e.prototype.readPostMessageResponse = function (e) {
            var t = "string" == typeof e.data && -1 !== e.data.indexOf(this.postMessageReturnObjectName) ? JSON.parse(e.data) : e.data;
            if (t[this.postMessageReturnObjectName]) {
              var n = t[this.postMessageReturnObjectName];
              "function" != typeof this.apiCallbacks[n.callId] || this.isCallbackDouble(n.callId, e) || (this.assignLastCallback(n.callId, e), this.apiCallbacks[n.callId](n.returnValue, n.success, this.version));
            }
          }, e.prototype.isCallbackDouble = function (e, t) {
            var n,
              a,
              r,
              i = !1,
              o = null === (a = null === (n = null == t ? void 0 : t.data) || void 0 === n ? void 0 : n.__tcfapiReturn) || void 0 === a ? void 0 : a.returnValue;
            return e === this.lastCallbackResult.id && (null == t ? void 0 : t.timeStamp) - this.lastCallbackResult.timeStamp < this.doubleCallbackTime && this.lastCallbackResult.addtlConsent === (null == o ? void 0 : o.addtlConsent) && this.lastCallbackResult.eventStatus === (null == o ? void 0 : o.eventStatus) && this.lastCallbackResult.gdprApplies === (null == o ? void 0 : o.gdprApplies) && JSON.stringify(this.lastCallbackResult.vendor.consents) === JSON.stringify(null === (r = null == o ? void 0 : o.vendor) || void 0 === r ? void 0 : r.consents) && (i = !0), i;
          }, e.prototype.assignLastCallback = function (e, t) {
            var a,
              r,
              i = null === (r = null === (a = null == t ? void 0 : t.data) || void 0 === a ? void 0 : a.__tcfapiReturn) || void 0 === r ? void 0 : r.returnValue;
            this.lastCallbackResult.id = e, this.lastCallbackResult.addtlConsent = null == i ? void 0 : i.addtlConsent, this.lastCallbackResult.eventStatus = null == i ? void 0 : i.eventStatus, this.lastCallbackResult.gdprApplies = null == i ? void 0 : i.gdprApplies, this.lastCallbackResult.timeStamp = null == t ? void 0 : t.timeStamp, (null == i ? void 0 : i.vendor) && (this.lastCallbackResult.vendor = n({}, null == i ? void 0 : i.vendor));
          }, e.prototype.tryCallApi = function (e) {
            this.callApiLocal() || (e % 10 == 0 && window.sas.events.fire("ApiNotFoundInFrame", {
              retryNumber: e
            }, this.name), this.callApiInFrame());
          }, e.prototype.searchApiInterval = function () {
            this.apiWasFound && this.apiAnsweredOk || (this.retryNumber % 10 == 0 && window.sas.events.fire("ApiSearch", {
              retryNumber: this.retryNumber
            }, this.name), this.tryCallApi(this.retryNumber)), (this.retryNumber > this.maxSearchRetry || this.apiWasFound && this.apiAnsweredOk) && clearInterval(this.retryInterval), this.retryNumber++;
          }, e.prototype.searchApi = function () {
            var e = this,
              t = "intervalCounterNumber" + this.name;
            this.retryInterval = window[t] = window.setInterval(function () {
              e.searchApiInterval();
            }, 500), this.searchApiInterval();
          }, e;
        }();
        t.SasIabApi = a, window.SasIabApi = a;
      },
      94: function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.GPPSectionEnum = t.ConsentEnum = t.Consent = void 0;
        var n,
          a,
          r = function () {
            function e() {
              var e = this;
              this.consentTgtString = "consent=rejected", this.maxSearchEntry = 50, this.consentStatus = n.UNKNOWN, this.tcfData = {}, this.retryInterval = 0, this.retryNumber = 0, this.retryTime = 500, this.logOn = !1, this.validateGPPData = function (t, r) {
                if (e.log("validateGPPData", t, r), e.isUiVisible(t.pingData.cmpDisplayStatus)) {
                  var i = window.sas.utils.getLocalStorageItemSafely("sas_consent_rejected");
                  e.callCallback("1" === i, r);
                } else if (e.consentStatus = n.AGREED, t.applicableSections.length) {
                  for (var o = function (t) {
                      switch (t) {
                        case 2:
                          if (window.__gpp("hasSection", null, a.TCFEUV2)) {
                            var r = window.__gpp("getSection", null, a.TCFEUV2),
                              i = function () {
                                var e;
                                return (null === (e = null == r ? void 0 : r.VendorConsents) || void 0 === e ? void 0 : e.includes(45)) && [1, 2, 4, 7, 10].every(function (e) {
                                  return !0 === (null == r ? void 0 : r.PurposeConsents[e - 1]);
                                });
                              }();
                            i || (e.consentStatus = n.REJECTED);
                          }
                          break;
                        case 6:
                          if (window.__gpp("hasSection", null, a.USPV1)) {
                            var o = window.__gpp("getSection", null, a.USPV1);
                            (i = "Y" !== (null == o ? void 0 : o.OptOutSale)) || (e.consentStatus = n.REJECTED);
                          }
                          break;
                        default:
                          e.consentStatus = n.UNKNOWN;
                      }
                    }, s = 0, c = t.applicableSections; s < c.length; s++) {
                    o(c[s]);
                  }
                  e.consentStatus === n.UNKNOWN ? e.checkTCFConsent(r) : e.callCallback(e.consentStatus === n.REJECTED, r);
                }
              }, this.validateTCFData = function (t) {
                e.log("validateTCFData", t);
                var a = e.tcfData,
                  r = a.tcData,
                  i = a.success;
                if (e.isUiVisible(null == r ? void 0 : r.eventStatus)) e.callCallback(e.consentStatus === n.UNKNOWN ? Boolean(null == r ? void 0 : r.gdprApplies) : e.consentStatus === n.REJECTED, t);else {
                  var o = function () {
                    var e;
                    return !0 === (null === (e = null == r ? void 0 : r.vendor) || void 0 === e ? void 0 : e.consents[45]) && [1, 2, 4, 7, 10].every(function (e) {
                      var t;
                      return !0 === (null === (t = null == r ? void 0 : r.purpose) || void 0 === t ? void 0 : t.consents[e]);
                    });
                  }();
                  i && r && (!1 === r.gdprApplies || o ? e.consentStatus = n.AGREED : void 0 === r.gdprApplies ? e.consentStatus = o ? n.AGREED : n.REJECTED : e.consentStatus = n.REJECTED), e.callCallback(e.consentStatus === n.REJECTED, t);
                }
              };
            }
            return e.prototype.checkConsent = function (e) {
              this.log("checkConsent", e), this.checkGPPConsent(e), "function" != typeof window.__gpp && this.checkTCFConsent(e);
            }, e.prototype.getGPPData = function (e) {
              var t = this;
              this.log("getGPPData", e), window.__gpp("addEventListener", function () {
                var n = window.__gpp("getGPPData");
                t.validateGPPData(n, e);
              });
            }, e.prototype.createRetryInterval = function (e) {
              var t = this;
              this.log("createRetryInterval", e);
              var n = this.getTopWindow();
              this.retryInterval = window.intervalCounterNumberGPP2 = window.setInterval(function () {
                if (t.retryNumber > t.maxSearchEntry) clearInterval(t.retryInterval);else {
                  if (window.__gpp = n.__gpp || window.__gpp, "function" == typeof window.__gpp) {
                    t.log("window.__gpp", window.__gpp);
                    var a = window.__gpp("ping");
                    a && "loaded" === a.cmpStatus && (t.getGPPData(e), clearInterval(t.retryInterval));
                  }
                  t.retryNumber++;
                }
              }, this.retryTime);
            }, e.prototype.checkGPPConsent = function (e) {
              if (this.log("checkGPPConsent", e), "function" == typeof window.__gpp) {
                var t = window.__gpp("ping");
                if ("stub" === t.cmpStatus) {
                  var n = window.sas.utils.getLocalStorageItemSafely("sas_consent_rejected");
                  this.callCallback("1" === n, e), this.createRetryInterval(e);
                } else "loaded" === t.cmpStatus && this.getGPPData(e);
              } else {
                n = window.sas.utils.getLocalStorageItemSafely("sas_consent_rejected");
                this.callCallback("1" === n, e), this.createRetryInterval(e);
              }
            }, e.prototype.checkTCFConsent = function (e) {
              var t = this;
              if (this.log("checkTCFConsent", e), "function" == typeof window.__tcfapi) this.log("window.__tcfapi", window.__tcfapi), window.__tcfapi("addEventListener", 2, function (n, a) {
                t.tcfData = {
                  tcData: n,
                  success: a
                }, t.validateTCFData(e);
              });else {
                var n = window.sas.utils.getLocalStorageItemSafely("sas_consent_rejected");
                this.callCallback("1" === n, e);
              }
            }, e.prototype.callCallback = function (e, t) {
              this.log("callCallback", e, t), "function" == typeof t && t(e ? this.consentTgtString : null), "function" != typeof window.__gpp && "function" != typeof window.__tcfapi || (e ? window.sas.utils.setLocalStorageItemSafely("sas_consent_rejected", JSON.stringify(n.REJECTED)) : window.sas.utils.setLocalStorageItemSafely("sas_consent_rejected", JSON.stringify(n.AGREED)));
            }, e.prototype.isUiVisible = function (e) {
              return this.log("isUiVisible", e), "cmpuishown" === e || "visible" === e;
            }, e.prototype.getTopWindow = function () {
              this.log("getTopWindow");
              for (var e = 5, t = window; e--;) try {
                t.parent && t.parent.document && (t = t.parent) === t.parent && (e = 0);
              } catch (e) {
                this.log("getTopWindow error", e);
              }
              return t;
            }, e.prototype.log = function () {
              for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
              var n = "background:#ed5625; border-radius:2px; color:#feffff; font-family:lato,sans-serif; padding:1px 3px;";
              this.logOn && console.log("%cconsent", n, e);
            }, e;
          }();
        t.Consent = r, function (e) {
          e[e.AGREED = 0] = "AGREED", e[e.REJECTED = 1] = "REJECTED", e[e.UNKNOWN = 2] = "UNKNOWN";
        }(n = t.ConsentEnum || (t.ConsentEnum = {})), function (e) {
          e.TCFEUV2 = "tcfeuv2", e.USPV1 = "uspv1";
        }(a = t.GPPSectionEnum || (t.GPPSectionEnum = {}));
      },
      565: function (e, t, n) {
        var a,
          r = this && this.__extends || (a = function (e, t) {
            return a = Object.setPrototypeOf || {
              __proto__: []
            } instanceof Array && function (e, t) {
              e.__proto__ = t;
            } || function (e, t) {
              for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            }, a(e, t);
          }, function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
            function n() {
              this.constructor = e;
            }
            a(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
          }),
          i = this && this.__assign || function () {
            return i = Object.assign || function (e) {
              for (var t, n = 1, a = arguments.length; n < a; n++) for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }, i.apply(this, arguments);
          };
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.LivePreview = void 0;
        var o = function (e) {
          function t() {
            var t = e.call(this) || this;
            return t.urlMainConfigName = "live_preview_config", t.endpointUrl = "//previewcore.smartadserverapis.com/preview", t.scriptIdInc = 1, t.sas.livePreview.active = !1, t.sas.livePreview.callLivePreview = function (e) {
              return t.callLivePreview(e);
            }, t.config = t.getParams(new URLSearchParams(window.location.search)), t;
          }
          return r(t, e), t.prototype.getParams = function (e) {
            if (!e.get(this.urlMainConfigName)) return this._log("Preview mode is active, but there is missing config param"), null;
            window.sas.livePreview.active = !0;
            var t = this.parseJson(e.get(this.urlMainConfigName));
            return "dev" !== (null == t ? void 0 : t.environment) && "preprod" !== (null == t ? void 0 : t.environment) || (this.endpointUrl = this.endpointUrl.replace("previewcore.", "previewcore-" + t.environment + ".internal.")), t;
          }, t.prototype.parseJson = function (e) {
            try {
              var t = JSON.parse(String(null == e ? void 0 : e.replace(/(\\t|\\n|\\r|\\)/gm, "")));
              return this.validateJson(t) ? t : null;
            } catch (e) {
              return this._log("Preview mode is active, but parsing config json failed"), null;
            }
          }, t.prototype.validateJson = function (e) {
            var t = this.isValidDataNode(e);
            return e.uid && t ? (this._log("Preview mode is active, we have required parameters"), !0) : (this._log("Preview mode is active, but some of required parameters are missing"), this._log("Preview uid ", void 0, e.uid), this._log("Preview data ", void 0, e.data), !1);
          }, t.prototype.isValidDataNode = function (e) {
            return e.data.every(function (e) {
              return null != e.insertionId && null != e.insertionId && e.formats && e.formats.length && e.formats.every(function (e) {
                return null != e.id && null != e.id || null != e.tag && null != e.tag;
              });
            });
          }, t.prototype.callLivePreview = function (e) {
            var t = this;
            if (!this.config) return e;
            for (var n, a = [], r = 0, i = this.config.data; r < i.length; r++) for (var o = i[r], s = function (t) {
                var r = e[t];
                if ((n = o.formats.filter(function (e) {
                  return r.tagId === e.tag;
                })).length) return c.addPreviewData(n, a, o, r, e, t), "continue-outer";
                for (var i = 0, s = n = o.formats.filter(function (e) {
                    return Number(r.id) === e.id;
                  }); i < s.length; i++) {
                  if (!s[i].tag && !c.config.data.some(function (e) {
                    return e.formats.some(function (e) {
                      return e.tag === r.tagId;
                    });
                  })) return c.updatePreviewObject(a, r, o), e.splice(t, 1), "continue-outer";
                }
              }, c = this, l = e.length - 1; l >= 0; l--) s(l);
            if (a.length) {
              var d = "Preview mode is active".concat(this.config.blockAds ? " (with blockAds parameter)" : "", ", call preview ");
              this._log(d, void 0, this.endpointUrl), a.forEach(function (e) {
                t.callEndpoint(e);
              });
            }
            return this.config.blockAds ? [] : e;
          }, t.prototype.callEndpoint = function (e) {
            this._log("Make a preview call for insertionId ".concat(e.insertionId, " / formatId ").concat(e.id, " / tagId ").concat(e.tag)), window.sas_ajax = !0;
            var t = this.generateUrl(e),
              n = document.createElement("script");
            n.id = "sas_script_preview".concat(this.scriptIdInc++), n.type = "text/javascript", n.src = t, n.async = !0;
            var a = document.getElementById(e.tag);
            a ? a.appendChild(n) : document.getElementsByTagName("head")[0].appendChild(n);
          }, t.prototype.generateUrl = function (e) {
            var t;
            return "".concat(window.location.protocol + this.endpointUrl, "?insid=").concat(e.insertionId, "&ruid=").concat(null === (t = this.config) || void 0 === t ? void 0 : t.uid, "&fid=").concat(e.id, "&tag=").concat(e.tag, "&timestamp=").concat(Date.now());
          }, t.prototype.updatePreviewObject = function (e, t, n) {
            e.push({
              id: Number(t.id),
              tag: t.tagId,
              insertionId: n.insertionId
            });
          }, t.prototype.addPreviewData = function (e, t, n, a, r, o) {
            e[0].id ? t.push(i(i({}, e[0]), {
              insertionId: n.insertionId
            })) : this.updatePreviewObject(t, a, n), r.splice(o, 1);
          }, t;
        }(n(629).Global);
        t.LivePreview = o;
      },
      703: function (e, t, n) {
        var a,
          r = this && this.__extends || (a = function (e, t) {
            return a = Object.setPrototypeOf || {
              __proto__: []
            } instanceof Array && function (e, t) {
              e.__proto__ = t;
            } || function (e, t) {
              for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            }, a(e, t);
          }, function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
            function n() {
              this.constructor = e;
            }
            a(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
          });
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.Liveramp = void 0;
        var i = function (e) {
          function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.atsPath = "https://ats.rlcdn.com/ats.js", t.storageKey = "sas__lr_env", t;
          }
          return r(t, e), t.prototype.init = function (e) {
            "number" == typeof e.placementID && e.placementID ? this.fetchId(e) : this._log("LiveRamp ATS not initiated because of not valid placementID", "warning"), this.readId();
          }, t.prototype.fetchId = function (e) {
            var t = this;
            (window.ats ? Promise.resolve() : new Promise(function (e) {
              var n = document.createElement("script");
              n.onload = e, n.src = t.atsPath, document.head.appendChild(n);
            })).then(function () {
              window.ats.start(e), t._log("LiveRamp ATS initiated"), window.ats.retrieveEnvelope().then(function (e) {
                e && window.localStorage.setItem(t.storageKey, JSON.parse(e).envelope);
              });
            });
          }, t.prototype.readId = function () {
            var e = window.localStorage.getItem(this.storageKey);
            e && this.setEids({
              source: "liveramp.com",
              uids: [{
                id: e
              }]
            });
          }, t;
        }(n(629).Global);
        t.Liveramp = i;
      },
      499: function (e, t, n) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.swlTypes = t.swlDefaultConfiguration = t.SasWebLogger = void 0;
        var a = n(19),
          r = function (e) {
            var n = this;
            this.log = function (e, a, r) {
              var o = r.smart;
              t.swlTypes.indexOf(e) < 0 && (e = "info"), i.indexOf(a) < 0 && (a = ""), ("number" == typeof o.pageId || "string" == typeof o.pageName && "" !== o.pageName) && n.logger.log(e, a, r);
            }, this.logger = new a.WebTechnicalLogger(e);
          };
        t.SasWebLogger = r;
        var i = ["ad_response", "error_response", "noad_response", "timeout_response"];
        t.swlDefaultConfiguration = {
          clientToken: "pubbcfecde340a05af2aa9cad46f8c050f2",
          source: "smartjs",
          tags: "smartjs",
          service: "smartjs",
          host: "FRONT-DDLOG-HOST",
          endpoint: "smartjs",
          minLogLevel: "error",
          version: "1.20.6",
          samplingRate: {
            debug: 1e5,
            info: 1e4,
            warning: 1e3,
            error: 100
          }
        }, t.swlTypes = ["debug", "error", "info", "warning"];
      },
      928: function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = function (e, t) {
          return void 0 === t && (t = "https://ced-ns.sascdn.com/diff/js/"), new Promise(function (n, a) {
            var r = document.createElement("script");
            r.src = t + e + ".js", r.onload = n, r.onerror = a, document.head.appendChild(r);
          });
        };
      },
      352: function (e, t, n) {
        var a,
          r = this && this.__extends || (a = function (e, t) {
            return a = Object.setPrototypeOf || {
              __proto__: []
            } instanceof Array && function (e, t) {
              e.__proto__ = t;
            } || function (e, t) {
              for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            }, a(e, t);
          }, function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
            function n() {
              this.constructor = e;
            }
            a(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
          });
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.Sda = void 0;
        var i = function (e) {
          function t() {
            var t = e.call(this) || this;
            return t.sdaData = [], t.sdcData = [], t.sas.setSda = function (e) {
              return t.setSda(e, !1);
            }, t.sas.getSda = function () {
              return t.sdaData;
            }, t.sas.setSdc = function (e) {
              return t.setSda(e, !0);
            }, t.sas.getSdc = function () {
              return t.sdcData;
            }, t;
          }
          return r(t, e), t.prototype.validateAndPushData = function (e, t) {
            if (this.isValidArray(e)) for (var n = 0, a = e; n < a.length; n++) {
              var r = a[n],
                i = {};
              if (this.isValidField(null == r ? void 0 : r.id) && (i.id = r.id), this.isValidField(null == r ? void 0 : r.name) && (i.name = r.name), (null == r ? void 0 : r.segment) && this.isValidArray(r.segment)) for (var o = 0, s = r.segment; o < s.length; o++) {
                var c = s[o],
                  l = {};
                this.isValidField(null == c ? void 0 : c.id) && (l.id = c.id), this.isValidField(null == c ? void 0 : c.name) && (l.name = c.name), this.isValidField(null == c ? void 0 : c.value) && (l.value = c.value), this.isObjectEmpty(l) || (Array.isArray(i.segment) || (i.segment = []), i.segment.push(l));
              }
              this.isObjectEmpty(i) || this.checkDuplicates(i, t) ? console.warn("Equativ SDA: wrong input data format", r) : t.push(i);
            } else console.warn("Equativ SDA: wrong input data format", e);
          }, t.prototype.isValidArray = function (e) {
            return Array.isArray(e) && e.length > 0;
          }, t.prototype.isValidField = function (e) {
            return Boolean(e) && this.isString(e);
          }, t.prototype.checkDuplicates = function (e, t) {
            var n = !1;
            return t.forEach(function (t) {
              JSON.stringify(e) === JSON.stringify(t) && (n = !0);
            }), n;
          }, t.prototype.setSda = function (e, t) {
            t ? this.validateAndPushData(e, this.sdcData) : this.validateAndPushData(e, this.sdaData);
          }, t;
        }(n(629).Global);
        t.Sda = i;
      },
      494: function (e, t) {
        var n = this && this.__assign || function () {
            return n = Object.assign || function (e) {
              for (var t, n = 1, a = arguments.length; n < a; n++) for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }, n.apply(this, arguments);
          },
          a = this && this.__rest || function (e, t) {
            var n = {};
            for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
              var r = 0;
              for (a = Object.getOwnPropertySymbols(e); r < a.length; r++) t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (n[a[r]] = e[a[r]]);
            }
            return n;
          },
          r = this && this.__spreadArray || function (e, t, n) {
            if (n || 2 === arguments.length) for (var a, r = 0, i = t.length; r < i; r++) !a && r in t || (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
            return e.concat(a || Array.prototype.slice.call(t));
          };
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.SetTargetingMode = t.Targeting = void 0;
        var i,
          o = function () {
            function e() {
              this.targetingData = [], window.sas.setTargeting = this.setTargeting.bind(this), window.sas.overwriteTarget = this.overwriteTarget.bind(this), window.sas.updateTarget = this.updateTarget.bind(this);
            }
            return e.prototype.setTargeting = function (e) {
              this.targetingData.push(e);
            }, e.prototype.overwriteTarget = function (e, t) {
              this.targetingData.unshift({
                mode: i.Overwrite,
                target: this.tgtStringToObj(e),
                tagIds: [t]
              });
            }, e.prototype.updateTarget = function (e, t) {
              if (void 0 === t && (t = ""), 0 === this.targetingData.length) return e;
              for (var o = this.tgtStringToObj(e), s = function (e) {
                  if (!e.tagIds || !e.tagIds.length || e.tagIds.indexOf(t) > -1) switch (e.mode) {
                    case i.Overwrite:
                      o = n(n({}, o), e.target);
                      break;
                    case i.Append:
                      Array.from(new Set(r(r([], Object.keys(o), !0), Object.keys(e.target), !0))).forEach(function (t) {
                        var n = r(r([], o[t] || [], !0), e.target[t] || [], !0);
                        o[t] = n.filter(function (e, t) {
                          return n.indexOf(e) === t;
                        });
                      });
                      break;
                    case i.Remove:
                      Object.keys(e.target).forEach(function (e) {
                        if (o[e]) {
                          var t = o,
                            n = e,
                            r = (t[n], a(t, ["symbol" == typeof n ? n : n + ""]));
                          o = r;
                        }
                      });
                      break;
                    default:
                      o = n({}, e.target);
                  }
                }, c = 0, l = this.targetingData; c < l.length; c++) {
                s(l[c]);
              }
              var d = this.tgtObjToString(o);
              return "" === d && void 0 === e ? void 0 : d;
            }, e.prototype.tgtObjToString = function (e) {
              for (var t = "", n = 0, a = Object.entries(e); n < a.length; n++) {
                var r = a[n],
                  i = r[0],
                  o = r[1];
                t += o.length ? "".concat(i, "=").concat(o, ";") : "".concat(i, ";");
              }
              return t;
            }, e.prototype.tgtStringToObj = function (e) {
              var t = {};
              if (e) for (var n = 0, a = e.split(";"); n < a.length; n++) {
                var r = a[n].split("=");
                r[0] && (t[r[0]] = t[r[0]] || [], r[1] && (t[r[0]] = t[r[0]].concat(r[1].split(",").filter(function (e) {
                  return e.length;
                }))));
              }
              return t;
            }, e;
          }();
        t.Targeting = o, function (e) {
          e[e.Default = 0] = "Default", e[e.Overwrite = 1] = "Overwrite", e[e.Append = 2] = "Append", e[e.Remove = 3] = "Remove";
        }(i = t.SetTargetingMode || (t.SetTargetingMode = {}));
      },
      76: function (e, t, n) {
        var a,
          r = this && this.__extends || (a = function (e, t) {
            return a = Object.setPrototypeOf || {
              __proto__: []
            } instanceof Array && function (e, t) {
              e.__proto__ = t;
            } || function (e, t) {
              for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            }, a(e, t);
          }, function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
            function n() {
              this.constructor = e;
            }
            a(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
          }),
          i = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
              default: e
            };
          };
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.Smart = void 0;
        var o = n(94),
          s = n(629),
          c = n(791),
          l = n(703),
          d = n(129),
          u = n(499),
          p = n(494),
          f = n(494),
          h = n(352),
          g = i(n(928)),
          v = n(565),
          m = function (e) {
            function t() {
              var t = e.call(this) || this;
              return t.targeting = new f.Targeting(), t.consent = new o.Consent(), t.checkConsentCallback = t.checkConsentCallback.bind(t), t.setupEquativDebugMode(), t;
            }
            return r(t, e), t.prototype.setupEquativDebugMode = function () {
              var e = this.sas.debugMode;
              e.addLog = function (t) {
                e.active && e.logsQueue.push(t);
              }, e.addBanner = function (t) {
                e.active && e.bannersQueue.push(t);
              }, null !== new URLSearchParams(window.location.search).get("equativ_debug") && (e.active = !0, (0, g.default)("modules/lazy/debugMode").catch(function () {
                return console.error("Couldn't load Equativ Debug Mode.");
              }));
            }, t.prototype.initCmp = function () {
              var e = new d.SasIabApi({
                  name: "CMP V2",
                  version: 2,
                  apiFunctionName: "__tcfapi",
                  getConsentFunction: "addEventListener",
                  sasCookieName: "sas_euconsent_v2",
                  sasAddtlCookieName: "sas_addtl_euconsent_v2",
                  consentObjectConsentDataName: "tcString",
                  consentObjectAdditionalConsentDataName: "addtlConsent",
                  apiLocator: "__tcfapiLocator",
                  sentMessage: "__tcfapiCall",
                  postMessageReturnObjectName: "__tcfapiReturn"
                }),
                t = new d.SasIabApi({
                  name: "CCPA",
                  version: 1,
                  apiFunctionName: "__uspapi",
                  getConsentFunction: "getUSPData",
                  sasCookieName: "sas_usprivacy",
                  consentObjectConsentDataName: "uspString",
                  apiLocator: "__uspapiLocator",
                  sentMessage: "__uspapiCall",
                  postMessageReturnObjectName: "__uspapiReturn"
                }),
                n = new d.SasIabApi({
                  name: "GPP",
                  version: 1,
                  apiFunctionName: "__gpp",
                  getConsentFunction: "addEventListener",
                  sasCookieName: "sas_gpp",
                  sasAddtlCookieName: "sas_gpp_sid",
                  consentObjectConsentDataName: "gppString",
                  consentObjectAdditionalConsentDataName: "applicableSections",
                  apiLocator: "__gppLocator",
                  sentMessage: "__gppCall",
                  postMessageReturnObjectName: "__gppReturn"
                });
              e.searchApi(), t.searchApi(), n.searchApi();
            }, t.prototype.initLogger = function () {
              var e = u.swlDefaultConfiguration;
              void 0 !== window.sas_ddMinLogLevel && u.swlTypes.indexOf(window.sas_ddMinLogLevel) > -1 && (e.minLogLevel = window.sas_ddMinLogLevel), e.host = window.location.host, window.sas.sasWebLogger = new u.SasWebLogger(e);
            }, t.prototype.initModules = function (e) {
              var t;
              !1 !== (null === (t = null == e ? void 0 : e.consent) || void 0 === t ? void 0 : t.targeting) && this.consent.checkConsent(this.checkConsentCallback), !1 !== window.sas_useID5Module && new c.Id5().init(null == e ? void 0 : e.id5), void 0 !== window.sas_useLiverampModule && !0 === window.sas_useLiverampModule && e && e.liveramp && "undefined" != typeof Promise && new l.Liveramp().init(e.liveramp);
            }, t.prototype.checkConsentCallback = function (e) {
              (e || "function" == typeof window.__gpp || "function" == typeof window.__tcfapi) && (e ? this.targeting.setTargeting({
                mode: p.SetTargetingMode.Overwrite,
                target: {
                  consent: ["rejected"]
                }
              }) : this.targeting.setTargeting({
                mode: p.SetTargetingMode.Remove,
                target: {
                  consent: []
                }
              }));
            }, t.prototype.init = function () {
              var e,
                t,
                n = this;
              null === (t = null === (e = null === window || void 0 === window ? void 0 : window.sas) || void 0 === e ? void 0 : e.events) || void 0 === t || t.on("setupCalled", function (e) {
                return n.initModules(null == e ? void 0 : e.modules);
              }, "setupCalledId"), this.initCmp(), this.initLogger(), new h.Sda(), new URLSearchParams(window.location.search).get("live_preview_config") && new v.LivePreview();
            }, t;
          }(s.Global);
        t.Smart = m, new m().init();
      }
    },
    t = {};
  (function n(a) {
    var r = t[a];
    if (void 0 !== r) return r.exports;
    var i = t[a] = {
      exports: {}
    };
    return e[a].call(i.exports, i, i.exports, n), i.exports;
  })(76);
}(), function (e, t) {
  var n = e.sas;
  if (!n.__smartLoaded) {
    n.__smartLoaded = !0;
    var a = function (e) {
      var t = this;
      t._callTimestamp = ie, t.instances = [], n.events.on("ad", function () {
        t._onAd.apply(t, arguments);
      }, e), n.events.on("load", function () {
        t._onLoad.apply(t, arguments);
      }, e), n.events.on("noad", function () {
        t._onNoad.apply(t, arguments);
      }, e), n.events.on("error", function () {
        t._onError.apply(t, arguments);
      }, e), n.events.on("render", function () {
        t._render.apply(t, arguments);
      }, e), n.events.on("beforeRender", function () {
        t._beforeRender.apply(t, arguments);
      }, e), n.events.on("beforeFetch", function () {
        t._beforeFetch.apply(t, arguments);
      }, e), n.events.on("hbRender", function () {
        t._hbRender.apply(t, arguments);
      }, e), n.events.on("request", function () {
        t._request.apply(t, arguments);
      }, e);
    };
    a.prototype.onCall = function (e, t, n) {
      this.callType = e, this.ad = t, this.options = n, this.durationEvents = {
        responseType: "admarkup"
      };
    }, a.prototype.reset = function (e, t) {
      if (this.displayData = null, this.hbRenderUrls = null, e ? this.renderStatus = null : "rendered" == this.renderStatus && (this.renderStatus = "pending"), n.events.fire("reset", {
        formatId: this.ad.formatId,
        instance: this.ad.instance,
        tagId: this.ad.tagId,
        hardReset: e
      }, this.ad.tagId), t) for (var a = 0; a < this.instances.length; a++) this.instances[a].reset(e);
    }, a.prototype.setHeaderBiddingWinner = function (e) {
      this.headerBidding = e;
    }, a.prototype._onLoad = function () {
      var n = t.getElementById(this.ad.tagId);
      if (n) {
        this.hasAd = this.hasAd || n.childNodes.length > 1, e.sas_loadHandler && e.sas_loadHandler({
          id: this.ad.formatId,
          hasAd: this.hasAd
        }), this.options && this.options.onLoad && this.options.onLoad({
          formatId: this.ad.formatId,
          tagId: this.ad.tagId,
          hasAd: this.hasAd
        });
        var a = new Date().getTime();
        this.durationEvents.durationLoad = a - this._callTimestamp, this.hasAd && void 0 !== this.durationEvents.durationAd ? this._sendLog("info", "ad_response") : this.durationEvents.durationLoad = void 0;
      }
    }, a.prototype._render = function () {
      var e = new Date().getTime();
      this.durationEvents.durationRender = e - this._callTimestamp;
    }, a.prototype._beforeRender = function (e) {
      var t = new Date().getTime();
      this.durationEvents.durationBeforeRender = t - this._callTimestamp, this.options && this.options.beforeRender && this.options.beforeRender(e);
    }, a.prototype._request = function (e) {
      var t = new Date().getTime();
      this.durationEvents.durationRequest = t - this._callTimestamp, this.options && this.options.request && this.options.request(e);
    }, a.prototype._beforeFetch = function (e) {
      this.options && this.options.beforeFetch && this.options.beforeFetch(e);
    }, a.prototype._onError = function (e) {
      this.options && this.options.onError && this.options.onError(e);
    }, a.prototype._onNoad = function (e) {
      if (this.callType == n.callType.ONECALL && this.ad.isOnecallJSON) {
        if (this.displayData.scriptNoad) {
          var t = X(e.tagId);
          t && (this.displayData.scriptNoad = Y(this.displayData.scriptNoad, t)), new Image().src = this.displayData.scriptNoad;
        }
      } else this.callType == n.callType.ONECALL && sas_manager && sas_manager.noad(this.ad.formatId);
      e.hbRenderUrls && e.hbRenderUrls.hbRenderFailedUrl && (this.hbRenderUrls = e.hbRenderUrls, e.hbRenderUrls = null), this.options && this.options.onNoad && this.options.onNoad(e);
      var a = new Date().getTime();
      this.durationEvents.durationNoAd = a - this._callTimestamp, this.durationEvents.durationRender = void 0, this._sendLog("info", "noad_response");
    }, a.prototype._onAd = function (e) {
      var t = new Date().getTime();
      this.durationEvents.durationAd = t - this._callTimestamp, this.hasAd = !0, this.options && this.options.onAd && this.options.onAd(e);
    }, a.prototype._sendLog = function (e, t) {
      var a = this.ad,
        r = {
          smart: {
            siteId: a.siteId,
            pageId: a.pageId,
            pageName: a.pageName,
            formatId: a.formatId,
            tagId: a.tagId,
            target: a.target
          },
          measure: {
            durationBeforeRender: this.durationEvents.durationBeforeRender,
            durationRender: this.durationEvents.durationRender,
            durationAd: this.durationEvents.durationAd,
            durationLoad: this.durationEvents.durationLoad,
            durationNoAd: this.durationEvents.durationNoAd,
            durationRequest: this.durationEvents.durationRequest,
            responseType: this.durationEvents.responseType
          }
        };
      n.sasWebLogger.log(e, t, r);
    }, a.prototype.clean = function () {
      var e = t.getElementById(this.ad.tagId);
      this.options && this.options.onClean && this.options.onClean(this.ad.formatId, e), n.events.fire("clean", {
        formatId: this.ad.formatId,
        instance: this.ad.instance,
        tagId: this.ad.tagId
      }, this.ad.tagId), e && (e.innerHTML = "");
    }, a.prototype._hbRender = function (e) {
      this.hbRenderUrls && (e.success ? new Image().src = this.hbRenderUrls.hbRenderSuccessUrl : new Image().src = this.hbRenderUrls.hbRenderFailedUrl, this.hbRenderUrls = null);
    }, a.prototype.render = function () {
      var e = this;
      if ("rendered" != this.renderStatus) if (this.displayData) {
        this.renderStatus = "rendered", this.clean();
        var a = {
          formatId: this.ad.formatId,
          instance: this.ad.instance,
          tagId: this.ad.tagId
        };
        this.displayData.hbRenderFailedUrl && (a.hbRenderUrls = {
          hbRenderFailedUrl: this.displayData.hbRenderFailedUrl,
          hbRenderSuccessUrl: this.displayData.hbRenderSuccessUrl
        }), n.events.fire("beforeRender", a, e.ad.tagId);
        var r = function () {
            n.events.fire("load", a, e.ad.tagId);
          },
          i = function () {
            n.events.fire("error", a, e.ad.tagId), n.events.fire("noad", a, e.ad.tagId);
          },
          o = t.getElementById(this.ad.tagId);
        if (n.debugMode.addBanner({
          adSlot: o,
          adInfo: {
            "Network ID": f,
            "Site ID": this.ad.siteId,
            "Page ID": this.ad.pageId,
            "Format ID": this.ad.formatId,
            "Tag ID": this.ad.tagId,
            Targeting: this.ad.target
          }
        }), !this.displayData.scriptType) return n.events.fire("load", a, this.ad.tagId), n.events.fire("noad", a, this.ad.tagId), void n.debugMode.addLog({
          adObj: this.ad,
          isAd: !1,
          adSlot: o
        });
        if (n.debugMode.addLog({
          adObj: this.ad,
          isAd: !0,
          adSlot: o
        }), o) {
          switch (this.displayData.scriptType) {
            case "iframe":
              M(o, this, this.options.async, r, i);
              break;
            case "script":
              var s = X(o.id);
              s && this.displayData.scriptNoad && (this.displayData.scriptNoad = Y(this.displayData.scriptNoad, s)), H(o, this.displayData.scriptSrc, this.options.async, r, i, s, Ie(this.ad.formatId));
              break;
            case "passback":
              n.passback({
                formatId: this.ad.formatId,
                tagId: this.ad.tagId,
                chain: this.displayData.chain
              });
              break;
            case "content":
              V(o, this), r();
              break;
            default:
              throw new Error("Unsupported script type " + this.displayData.scriptType);
          }
          Ie(this.ad.formatId) && n.events.fire("request", a, e.ad.tagId), n.events.fire("render", a, this.ad.tagId);
        } else n.events.fire("error", a, this.ad.tagId);
      } else this.renderStatus = "pending";
    };
    var r = function () {},
      i = !1,
      o = function () {
        return Math.round(1e10 * Math.random());
      },
      s = "https://www.smartadserver.com",
      c = s,
      l = o(),
      d = !0,
      u = encodeURIComponent,
      p = decodeURIComponent,
      f = 0,
      h = !1,
      g = 0,
      v = !1,
      m = null,
      y = null,
      b = null,
      w = {},
      _ = [],
      I = [],
      C = {},
      S = {},
      O = {},
      D = null;
    n._networks = n._networks || {}, n._pendingCommands = n._pendingCommands || {};
    var k = {};
    n.callType = {
      STD: "std",
      IFRAME: "iframe",
      ONECALL: "onecall",
      XML: "xml",
      PASSBACK: "passback"
    }, n.renderMode = {
      DEFAULT: 0,
      READY: 1,
      ON_DEMAND: 2
    };
    var T = !1,
      A = [],
      E = {
        onLoad: r,
        onError: r,
        onClean: r,
        beforeRender: r
      };
    n.events.on("call", function (e) {
      var t = w[e.ad.tagId],
        a = pe[e.ad.tagId] ? pe[e.ad.tagId] : ue;
      n.livePreview.active && (e.ad.formats = n.livePreview.callLivePreview(e.ad.formats)), e.ad.formats.length && (se("Make a std call ", e), e.ad.usePostStandard ? a.addListener(function () {
        N(e);
      }) : t.displayData = {
        scriptType: "script",
        scriptSrc: K(e.callType, e.ad, e.options)
      }), a.addListener(function () {
        t.render();
      });
    }, n.callType.STD), n.events.on("call", function (e) {
      var t = w[e.ad.tagId];
      n.livePreview.active && (e.ad.formats = n.livePreview.callLivePreview(e.ad.formats)), e.ad.formats.length && (se("Make a iframe call ", e), t.displayData = {
        scriptType: "iframe",
        scriptSrc: K(e.callType, e.ad, e.options),
        width: e.ad.width || 0,
        height: e.ad.height || 0
      }), ue.addListener(function () {
        t.render();
      });
    }, n.callType.IFRAME), n.events.on("call", function (e) {
      n.livePreview.active && Object.prototype.hasOwnProperty.call(e, "ad") && Object.prototype.hasOwnProperty.call(e.ad, "formats") && (e.ad.formats = n.livePreview.callLivePreview(e.ad.formats)), e.ad.formats.length && (se("Make a onecall for formats ", e), ue.addListener(function () {
        e.ad.isOnecallJSON ? j(e) : L(e);
      }));
    }, n.callType.ONECALL);
    var L = function (e) {
        var n = K(e.callType, e.ad, e.options)(),
          a = t.getElementsByTagName("head")[0],
          r = null;
        a && a.id && (r = X(a.id)), H(a, n, e.options.async, function () {
          var t;
          for (var n in sas_manager.formats) if (t = F(n.substring(1))) {
            var a = sas_manager.formats[n];
            r && (t.displayData.scriptNoad = Y(t.displayData.scriptNoad, r)), t.options.async || a.chain ? t.displayData = {
              scriptType: a.scriptType(),
              scriptSrc: a.scriptSrc(),
              chain: a.chain,
              width: "iframe" == a.scriptType() ? a.scriptWidth() : 0,
              height: "iframe" == a.scriptType() ? a.scriptHeight() : 0
            } : t.displayData = ge(a.scriptURL()), t.displayData.scriptSrc && (t.displayData.scriptSrc = function (e) {
              return function () {
                return De(e);
              };
            }(t.displayData.scriptSrc));
          }
          var i = {};
          for (var o in e.ad.formats) i[e.ad.formats[o].id] = !0;
          for (var s in w) i[(t = w[s]).ad.formatId] && (t.displayData = t.displayData || {}, "pending" == t.renderStatus && t.render());
        }, e.options.onError, r, !1);
      },
      j = function (e) {
        ue.addListener(function () {
          var t = J(e.ad, e.options, e.callType);
          !function (e, t, n, a, r) {
            ye(e, t, n, a, r, JSON.parse, "application/json");
          }(z(e.ad, e.options, e.callType), t, function (e) {
            for (var t in e) {
              var n = F(t);
              if (n) {
                var a = e[t];
                n.displayData = {
                  hbRenderFailedUrl: a.HbRenderFailedUrl,
                  hbRenderSuccessUrl: a.HbRenderSuccessUrl,
                  scriptType: a.ScriptType,
                  scriptSrc: a.ScriptSrc,
                  scriptNoad: a.ScriptNoad,
                  contentType: a.ContentType,
                  content: a.Content,
                  chain: a.Chain,
                  width: a.ScriptWidth,
                  height: a.ScriptHeight
                }, n.displayData.scriptSrc && (n.displayData.scriptSrc = function (e) {
                  return function () {
                    return De(e);
                  };
                }(n.displayData.scriptSrc)), "pending" == n.renderStatus && n.render();
              }
            }
          }, e.options.onError, e.options.domain);
        });
      },
      N = function (e) {
        ue.addListener(function () {
          var t = J(e.ad, e.options, e.callType);
          !function (e, t, n, a, r) {
            ye(e, t, n, a, r, function (e) {
              return e;
            }, "application/javascript");
          }(z(e.ad, e.options, e.callType), t, function (t) {
            var n = e.ad.tagId,
              a = F(n);
            a && (a.displayData = {
              scriptType: "content",
              contentType: "application/javascript",
              content: t
            }, "pending" == a.renderStatus && (pe[n] ? pe[n].addListener(function () {
              this.render();
            }.bind(a)) : a.render()));
          }, e.options.onError, e.options.domain);
        });
      },
      R = "invalid site id",
      P = "invalid page id or name",
      x = "invalid format id",
      U = function (e) {
        throw new Error(e);
      };
    Array.isArray || (Array.isArray = function (e) {
      return "[object Array]" === Object.prototype.toString.call(e);
    });
    var F = function (e) {
        var t = w[e = "" + e] || w["sas_" + e];
        if (t) return t;
        var r = e.split("_"),
          i = r.slice(0, r.length - 1).join("_");
        if (r.length > 1 && !isNaN(r[r.length - 1]) && (t = w[i] || w["sas_" + i])) {
          var o = parseInt(r[r.length - 1]),
            s = t.ad.tagId + "_" + o,
            c = new a(s);
          return c.onCall(t.callType, n.utils.extend({}, t.ad, {
            tagId: s,
            instance: o
          }), t.options), t.instances.push(c), w[s] = c, c;
        }
        return null;
      },
      M = function (e, a, r, i, o) {
        var s = t.createElement("iframe");
        s.id = "sas_i_" + a.ad.formatId + (a.ad.instance ? "_" + a.ad.instance : ""), s.scrolling = "no", s.frameBorder = 0, s.width = a.displayData.width, s.height = a.displayData.height, s.style.margin = 0, s.style.padding = 0, s.style.width = a.displayData.width + "px", s.style.height = a.displayData.height + "px";
        var c = "function" == typeof a.displayData.scriptSrc ? a.displayData.scriptSrc() : a.displayData.scriptSrc,
          l = X(e.id);
        void 0 !== l && (c = Y(c, l), a.displayData.scriptNoad = Y(a.displayData.scriptNoad, l)), s.src = c, r ? (n.events.addLoadEvent(s, i), n.events.addEvent(s, "error", o)) : (s.setAttribute("onload", W(i) + "()"), s.setAttribute("onError", W(o) + "()")), a.options.async ? e.appendChild(s) : t.write(s.outerHTML);
      },
      q = 1,
      G = function (e, n, a) {
        var r = t.createElement("script");
        r.id = "sas_script" + q++, r.type = "text/javascript", r.text = n, a ? e.appendChild(r) : t.write(r.outerHTML);
      },
      V = function (e, n) {
        switch (n.displayData.contentType) {
          case "application/javascript":
            G(e, n.displayData.content, n.options.async);
            break;
          case "text/html":
            !function (e, n) {
              var a = t.createElement("iframe");
              a.id = "sas_i" + n.ad.formatId + (n.ad.instance ? "_" + n.ad.instance : ""), a.scrolling = "no", a.frameBorder = 0, a.width = n.displayData.width, a.height = n.displayData.height, a.style.margin = 0, a.style.padding = 0, a.style.width = n.displayData.width + "px", a.style.height = n.displayData.height + "px", e.appendChild(a), a.contentWindow.document.open("text/html", "replace"), a.contentWindow.document.write(n.displayData.content), a.contentWindow.document.close();
            }(e, n);
        }
      },
      B = 1,
      W = function (t) {
        var n = "__sas_gcbk_" + B++;
        return e[n] = function () {
          e[n] && (e[n] = void 0, t());
        }, n;
      },
      H = function (e, a, r, i, o, s, c) {
        var l = t.createElement("script");
        l.id = "sas_script" + q++, l.type = "text/javascript";
        var d = "function" == typeof a ? a() : a;
        s && (d = Y(d, s)), c && (d = Q(d)), l.src = d, l.async = r, r ? (n.events.addLoadEvent(l, i), n.events.addEvent(l, "error", o)) : (l.setAttribute("onload", W(i) + "()"), l.setAttribute("onError", W(o) + "()")), r ? e.appendChild(l) : t.write(l.outerHTML);
      },
      J = function (t, a, r) {
        a = n.utils.extend({
          forceMasterFlag: !1
        }, a), d = !!a.forceMasterFlag || d, l = a.resetTimestamp ? o() : l, r == n.callType.ONECALL && Z();
        var i = $(),
          s = Oe() || (e.location.origin ? e.location.origin + e.location.pathname : ""),
          c = screen.height,
          u = screen.width;
        return function (e, t, a, r, i, o, s) {
          var c = {
              timestamp: a,
              networkId: i.networkId,
              getAdContent: i.getAdContent,
              siteId: e.siteId,
              pageId: e.pageId,
              pageName: e.pageName,
              master: t,
              noAdCallback: "sas.noad",
              pageUrl: r,
              screen: {
                height: o,
                width: s
              },
              uid: m || 0,
              appName: y || "",
              bundleId: b || "",
              noCookie: i.noCookie,
              schain: e.schain || "",
              clickTrackingUrl: i.clickTrackingUrl,
              clickTrackingEncodingLevel: i.clickTrackingEncodingLevel,
              ads: []
            },
            l = we();
          l && (c.gdpr_consent = l);
          var d = be();
          d && (c.addtl_consent = d);
          var u = _e();
          u && (c.us_privacy = u);
          var p = n.utils.getLocalStorageItemSafely("sas_gpp");
          p && (c.gpp = p);
          var f = n.utils.getLocalStorageItemSafely("sas_gpp_sid");
          if (f) try {
            c.gpp_sid = JSON.parse(f);
          } catch (e) {}
          var h = function (e) {
            if (e.length > 1 && "function" == typeof Array.prototype.findIndex) {
              var t = e.reverse();
              e = t.filter(function (e, n) {
                return t.findIndex(function (t) {
                  return t.source === e.source;
                }) === n;
              });
            }
            return e.length && "object" == typeof e[0] && e[0].source && e[0].uids && e[0].uids.length ? e : null;
          }(I);
          h ? c.eids = h : n.events.history("setEidsCalled").length && console.warn("The eids object is malformed, no eids will be sent in the adcall");
          var g = n.getSda();
          g && g.length && (c.sda = g);
          var v = n.getSdc();
          v && v.length && (c.sdc = v);
          S && (c.partnerExtUids = S);
          e.content_source_id && (c.content_source_id = e.content_source_id);
          for (var w = 0; w < e.formats.length; w++) {
            var _ = e.formats[w],
              C = _.tagId ? _.tagId : "sas_" + _.id,
              O = X(C) || {};
            _.target && n.overwriteTarget(_.target, C), c.ads.push({
              formatId: _.id,
              originalFormatId: _.originalFormatId,
              tagId: C,
              bidfloor: _.overriddenBidfloor,
              target: n.updateTarget(e.target, C),
              currency: _.currency,
              headerBidding: O,
              isLazy: !!Ie(_.id),
              isAdRefresh: Ce(_.id)
            });
          }
          return c;
        }(t, i, l, s, a, c, u);
      },
      z = function (e, t, a) {
        return t.domain + "/" + (a == n.callType.ONECALL ? t.networkId + "/call" : "genericpost");
      },
      K = function (t, a, r) {
        r = n.utils.extend({
          forceMasterFlag: !1
        }, r), d = !!r.forceMasterFlag || d, l = r.resetTimestamp ? o() : l, t == n.callType.ONECALL && Z();
        var i = $(),
          s = Oe() || (e.location.origin ? e.location.origin + e.location.pathname : ""),
          c = screen.height,
          u = screen.width;
        return function () {
          return n.utils.buildUrl(r.domain, t, a, i, l, r.async, r.networkId, m, y, b, s, S, X(a.tagId), r.clickTrackingUrl, r.clickTrackingEncodingLevel, c, u);
        };
      },
      Y = function (e, t) {
        return null != t && (e += "&hb_cpm=" + t.cpm + "&hb_bid=" + t.bidder + "&hb_ccy=" + t.currency + (t.dealId ? "&hb_dealid=" + t.dealId : "")), e;
      },
      Q = function (e) {
        try {
          var t = new URL(e);
        } catch (t) {
          return e;
        }
        var a = we();
        a && t.searchParams.set("gdpr_consent", a);
        var r = be();
        r && t.searchParams.set("addtl_consent", r);
        var i = _e();
        i && t.searchParams.set("us_privacy", i);
        var o = n.utils.getLocalStorageItemSafely("sas_gpp");
        o && t.searchParams.set("gpp", o);
        var s = n.utils.getLocalStorageItemSafely("sas_gpp_sid");
        if (s) try {
          t.searchParams.set("gpp_sid", JSON.parse(s));
        } catch (e) {}
        var c = n.updateTarget(t.searchParams.get("tgt"), t.searchParams.get("tag"));
        return t.searchParams.set("tgt", c), t.toString();
      },
      X = function (e) {
        if (O[e]) {
          if (!isNaN(O[e].cpm)) {
            var t = O[e];
            return O[e] = void 0, t;
          }
          return O[e] = void 0, null;
        }
        return null;
      },
      $ = function () {
        return Z() ? "m" : "s";
      },
      Z = function () {
        return !!d && (d = !1, !0);
      },
      ee = function (e, n) {
        var a,
          r,
          o = t.getElementById(e);
        if (!o && (n || !i)) {
          var s = t.currentScript || t.scripts[t.scripts.length - 1];
          s.async || (s.parentNode.insertBefore((a = e, (r = t.createElement("div")).id = a, r), s), o = t.getElementById(e));
        }
        return o || console.warn("The tag element with id=" + e + " wasn't found and couldn't be created as well!"), o;
      },
      te = function (a, r) {
        if (Object.prototype.hasOwnProperty.call(pe, a) || (pe[a] = new n.utils.Latch(["loaded", "smartLazyLoading" + a]), ue.addListener(function () {
          for (var e in pe) pe[e].notify("loaded");
        })), n.lazyLoading && n.lazyLoading.formats && (0 === n.lazyLoading.formats.length || n.lazyLoading.formats.length && -1 !== n.lazyLoading.formats.indexOf(parseInt(r)))) {
          var i = null;
          e.IntersectionObserver && (i = new IntersectionObserver(function (e, t) {
            e.forEach(function (e) {
              if (e.intersectionRatio > 0 || e.isIntersecting) {
                var n = e.target.id;
                t.unobserve(e.target), Object.prototype.hasOwnProperty.call(pe, n) && pe[n].notify("smartLazyLoading" + n);
              }
            });
          }, {
            rootMargin: n.lazyLoading.margin
          })), i && i.observe(t.getElementById(a));
        } else pe[a].notify("smartLazyLoading" + a);
      },
      ne = [];
    n.events.addLoadEvent(t, function () {
      i = !0, ne.push = function (e) {
        e();
      };
      for (var e = 0; e < ne.length; e++) ne[e]();
    });
    var ae = !1;
    n.events.addMessageEvent(e, function () {
      if (arguments && !(arguments.length < 1)) {
        var e = arguments[0];
        if (e && e.data && "string" == typeof e.data && !(e.data.indexOf("SMRT") < 0)) {
          var t = e.data.split(" ");
          if (!(t.length < 2)) {
            var a = t[2] || "";
            if ("sas.noad" === t[1] || "NOAD" === t[1]) try {
              n.noad(a);
            } catch (e) {}
          }
        }
      }
    });
    var re,
      ie,
      oe = function (e, t) {
        if (!e) return !1;
        if (!t) return !1;
        var a,
          r = n._networks[t.networkId];
        return !!(r && r.f && r.f[e.formatId] && (a = r.f[e.formatId], Math.random() < a));
      },
      se = function (e, t, n, a) {
        var r = void 0 === n ? "info" : n;
        if ((!(a = void 0 === a || a) || ce) && e.length && void 0 !== console[r]) {
          var i = {
            txt: "%cequativ",
            css: "background: #fe5000; border-radius: 2px; color: #feffff; font-family: lato,sans-serif; padding:1px 3px;"
          };
          void 0 !== t ? console[r](i.txt, i.css, e, t) : console[r](i.txt, i.css, e);
        }
      },
      ce = !1,
      le = function () {
        var t,
          n = (t = "sas_debug", "function" == typeof e.URLSearchParams ? new URLSearchParams(e.location.search).get(t) : null);
        null !== n && (ce = "true" === n);
      },
      de = !1,
      ue = new n.utils.Latch(["loaded"]),
      pe = {};
    n.setup = function (t) {
      if (de) throw new Error("sas.setup can only be called once");
      n.events.fire("setupCalled", t, "setupCalledId"), le(), de = !0, c = (t = t || {}).domain || s, h = t.async || h, sas_ajax = h, f = t.networkid || f, g = t.renderMode || g, v = t.inSequence || v, m = t.uid, S = n.utils.extend(S, t.partnerIds), b = t.bundleId, y = t.appName, e.sas_renderMode = g, n.configure({
        id: f
      }), h && g != n.renderMode.DEFAULT || ue.notify("loaded"), g == n.renderMode.ON_DEMAND && (re = setTimeout(function () {
        n.render();
      }, parseInt(t.renderModeTimeout) || 5e3));
    }, n.call = function (t, r, i) {
      ie = new Date().getTime(), "string" != typeof t && (i = n.utils.extend({}, r, {
        async: !0
      }), r = t, t = "std", g == n.renderMode.DEFAULT && ue.notify("loaded"), le()), i = n.utils.extend({}, i), t == n.callType.ONECALL ? r.isOnecallJSON = !!r.formats : t == n.callType.STD && (r.usePostStandard = !!e.sas_usePostStandard), (r.isOnecallJSON || r.usePostStandard) && (i.async = !0), (r = n.utils.extend({}, r)).siteId = r.siteId || r.siteid, r.pageId = r.pageId || r.pageid, r.pageName = r.pageName || r.pagename, r.formatId = r.formatId || r.formatid, r.siteId || U(R);
      var o,
        s,
        l = (o = navigator.userAgent.indexOf("iPad") > 0, s = "" + navigator.userAgent.indexOf("iPhone") > 0, o || s ? o ? "ipad" : "iphone" : navigator.userAgent.indexOf("Android") > 0 ? "android" : "");
      if (l.length > 0 && (r.target && r.target.length > 0 && (r.target += ";"), r.target += "platform=" + l), r.pageId || r.pageName || U(P), r.formatId || r.formats || U(x), (i = n.utils.extend({}, E, {
        async: h,
        domain: c,
        networkId: f
      }, i)) && i.networkId) {
        var d = parseInt(i.networkId);
        if (d > 0 && !n._networks[d]) return n._pendingCommands[d] = n._pendingCommands[d] || [], void n._pendingCommands[d].push(function () {
          n.call(t, r, i);
        });
      }
      if (!oe(r, i)) {
        if (!r || !r.siteId || !r.pageId && !r.pageName || !r.formatId && !r.formats) throw new Error("Missing parameter(s)");
        var u;
        if (!r.formats) {
          r.formats = [];
          var p = ("" + r.formatId).replace(/\s/g, "").split(",");
          for (u = 0; u < p.length; u++) r.formats.push({
            id: p[u]
          });
        }
        for (u = 0; u < r.formats.length; u++) {
          var m = r.formats[u];
          t == n.callType.STD || t == n.callType.IFRAME ? (r.tagId = m.tagId = r.tagId || m.tagId || "sas_" + m.id, ee(r.tagId, i.async)) : m.tagId = m.tagId || "sas_" + m.id;
          var y = w[m.tagId] || new a(m.tagId);
          y.onCall(t, n.utils.extend({}, r, {
            tagId: m.tagId,
            formatId: m.id,
            originalFormatId: m.id
          }), i), y.reset(!!i.reset, t == n.callType.ONECALL), w[m.tagId] = y, n.lazyLoading && h && t == n.callType.STD && te(m.tagId, m.id);
        }
        i.async && g == n.renderMode.READY && (ae || (ae = !0, ne.push(function () {
          n.render();
        }))), r.passback || _.push({
          callType: t,
          ad: n.utils.extend({}, r),
          options: n.utils.extend({}, i)
        }), i.async && v ? ue.addListener(function () {
          var e, a;
          e = {
            callType: t,
            ad: r,
            options: i
          }, a = function () {
            if (A.length > 0) {
              T = !0;
              var e = A.shift(),
                t = e.options.onLoad;
              e.options.onLoad = function (e) {
                a(), t(e);
              }, n.events.fire("call", {
                callType: e.callType,
                ad: e.ad,
                options: e.options
              }, e.callType);
            } else T = !1;
          }, A.push(e), T || a();
        }) : n.events.fire("call", {
          callType: t,
          ad: r,
          options: i
        }, t);
      }
    }, n.passback = function (e) {
      var t = e.tagId ? e.tagId : "sas_" + e.formatId;
      if (C[t] = {
        current: -1,
        ad: e
      }, e.noadUrl) {
        var a = function () {
          new Image().src = e.noadUrl, n.events.off("noad", a, t);
        };
        n.events.on("noad", a, t);
      }
      n.next(t);
    }, n.next = function (e) {
      var a = F(e),
        r = C[a.ad.tagId];
      if (a && r) {
        var i = t.getElementById(a.ad.tagId);
        if (i && (i.innerHTML = ""), r.current >= 0 && (new Image().src = r.ad.chain[r.current].noadUrl), r.current++, r.current < r.ad.chain.length) {
          if (r.ad.chain[r.current].countUrl && (new Image().src = r.ad.chain[r.current].countUrl), r.ad.chain[r.current].script) G(i, r.ad.chain[r.current].script, a.options.async);else {
            var o = X(i.id);
            H(i, r.ad.chain[r.current].scriptUrl, a.options.async, function () {
              n.events.fire("load", {
                formatId: a.ad.formatId,
                instance: a.ad.instance,
                tagId: a.ad.tagId
              }, a.ad.tagId);
            }, null, o, !1);
          }
        } else n.events.fire("noad", {
          formatId: a.ad.formatId,
          instance: a.ad.instance,
          tagId: a.ad.tagId
        }, a.ad.tagId);
        a.durationEvents.responseType = "passback";
      }
    };
    var fe = {
      forceMasterFlag: !1,
      resetTimestamp: !0,
      target: void 0,
      autoRefresh: !1
    };
    n.refresh = function (e, t) {
      if (ue.isComplete()) {
        t = n.utils.extend({}, fe, e, t);
        var a = r;
        if (arguments.length <= 1 && "string" != typeof e && isNaN(e)) a = function (e) {
          for (var a in w) w[a].reset(), k[w[a].ad.formatId] = t.autoRefresh;
          for (a = 0; a < _.length; a++) _[a].options.async && (e && (_[a].ad.target = e), n.events.fire("call", {
            callType: _[a].callType,
            ad: n.utils.extend({}, _[a].ad, {
              target: e
            }),
            options: n.utils.extend({}, _[a].options, t)
          }, _[a].callType));
        };else {
          var i = F(e);
          if (!i || !i.options.async) return;
          k[i.ad.formatId] = t.autoRefresh, i.reset(), a = function (e) {
            null != e && (i.ad.target = e || i.ad.target), n.events.fire("call", {
              callType: n.callType.STD,
              ad: i.ad,
              options: i.options
            }, n.callType.STD);
          };
        }
        d = !!t.forceMasterFlag || d, l = t.resetTimestamp ? o() : l, a(t.target);
      }
    }, n.getTag = function (e) {
      var n = F(e);
      return n ? t.getElementById(n.ad.tagId) : null;
    }, n.clean = function (e) {
      var t;
      if (0 == arguments.length) for (var n in w) (t = w[n]).clean();else (t = F(e)) && t.clean();
    }, n.noad = function (e, t) {
      var a = F(e);
      if (a) {
        var r = {
          formatId: a.ad.formatId,
          instance: a.ad.instance,
          tagId: a.ad.tagId
        };
        t && (r.hbRenderUrls = {
          hbRenderFailedUrl: t.HbRenderFailedUrl,
          hbRenderSuccessUrl: t.HbRenderSuccessUrl
        }), n.events.fire("noad", r, a.ad.tagId);
      }
    }, n.render = function (a) {
      var r, o;
      if (0 == arguments.length) {
        if (clearTimeout(re), !ue.isComplete() && (g == n.renderMode.READY && i || g == n.renderMode.ON_DEMAND)) for (o in ue.notify("loaded"), w) "pending" != (r = w[o]).renderStatus || !r.options.async && i || r.render();
      } else if (r = F(a)) if (o = r.ad.tagId, ee(o, r.options.async), n.lazyLoading && n.lazyLoading.formats && (-1 !== n.lazyLoading.formats.indexOf(Number(r.ad.originalFormatId)) || 0 === n.lazyLoading.formats.length)) {
        var s = null;
        e.IntersectionObserver && (s = new IntersectionObserver(function (e, t) {
          e.forEach(function (e) {
            (e.intersectionRatio > 0 || e.isIntersecting) && (t.unobserve(e.target), n.lazyLoading.event ? n.events.on(n.lazyLoading.event, function () {
              r.render();
            }, o) : r.render(), n.events.fire("beforeFetch", r));
          });
        }, {
          rootMargin: n.lazyLoading.margin
        })), s ? s.observe(t.getElementById(o)) : r.render();
      } else r.render();
    }, n.enableLazyLoading = function (t) {
      h || console.warn("If lazy loading is not working, please make sure you enable it for asynchronous calls");
      var a = {};
      a.formats = t.formats || [];
      var r = void 0 !== e.orientation || -1 !== navigator.userAgent.indexOf("IEMobile") ? t.mobileFetchRatio || .8 : t.fetchRatio || .1;
      a.margin = Math.round(100 * (isNaN(r) || r < 0 ? .1 : r)) + "%", a.event = t.event || null, n.lazyLoading = a;
    }, n.setPartnerId = function (e, t) {
      S[e] = t;
    }, n.appendHtml = function (e, n) {
      var a = t.getElementById(e);
      if (Range && Range.prototype.createContextualFragment) a.appendChild(t.createRange().createContextualFragment(n));else {
        var r = t.createElement("div");
        r.innerHTML = n;
        for (var i = r.childNodes, o = 0; o < i.length; o++) a.appendChild(Se(i[o]));
      }
    }, n.configure = function (e) {
      if (e && e.id && !(parseInt(e.id) <= 0) && !n._networks[e.id] && (n._networks[e.id] = e, n._pendingCommands[e.id])) for (var t; t = n._pendingCommands[e.id].shift();) t();
    }, n.setEids = function (e) {
      se("Call sas.setEids with", e), "object" == typeof e && (I = I.concat(e)), n.events.fire("setEidsCalled", {});
    }, n.setHeaderBiddingWinner = function (e, a) {
      null !== a && "object" == typeof a ? (O[e] = {
        bidder: a.bidder,
        cpm: a.cpm,
        currency: a.currency,
        dealId: a.dealId
      }, n.debugMode.addBanner({
        adSlot: t.getElementById(e),
        adInfo: {
          "HB bidder": a.bidder,
          "HB CPM": a.cpm,
          "HB currency": a.currency,
          "HB deal ID": a.dealId,
          "HB creative ID": a.creativeId
        }
      })) : O[e] = null, n.events.fire("setHeaderBiddingWinner", {
        tagId: e,
        headBiddingData: n.utils.extend({}, O[e])
      }, e);
    }, n.hbRenderSuccess = function (e) {
      n.events.fire("hbRender", {
        success: !0
      }, e);
    }, n.hbRenderFailed = function (e) {
      n.events.fire("hbRender", {
        success: !1
      }, e);
    }, n.setGdprConsentData = function (e) {
      D = e;
    }, n.utils.buildUrl = function (e, t, a, r, i, o, s, c, l, d, p, f, h, g, v, m, y) {
      var b = {};
      if (null != s && (b.nwid = s), b.siteid = a.siteId, b.pgid = a.pageId, b.pgname = a.pageName, b.fmtid = a.formatId, t == n.callType.IFRAME && (b.out = "iframe"), o && (b.async = 1), t != n.callType.ONECALL) {
        var w = r.split("=");
        b.visit = w.length > 1 ? w[1] : r;
      } else b.oc = 1;
      for (var _ in b.tmstp = i, a.target = n.updateTarget(a.target, a.tagId), a.target && (b.tgt = u(a.target)), t != n.callType.ONECALL && (b.orgfmtid = a.originalFormatId, b.tag = a.tagId), c && (b.uid = c), l && (b.appname = l), d && (b.buid = d), m && (b.sh = m), y && (b.sw = y), p && (b.pgDomain = u(p)), h && t != n.callType.ONECALL && (b.hb_bid = h.bidder, b.hb_cpm = h.cpm, b.hb_ccy = h.currency, b.hb_dealid = h.dealId), g && (b.clcturl = u(g)), v && (b.clctenc = v), f) b[encodeURIComponent("extuid-" + _)] = encodeURIComponent(f[_]);
      var I = we();
      I && (b.gdpr_consent = I);
      var C = be();
      C && (b.addtl_consent = C);
      var S = n.utils.getLocalStorageItemSafely("sas_gpp");
      S && (b.gpp = S);
      var O = n.utils.getLocalStorageItemSafely("sas_gpp_sid");
      O && (b.gpp_sid = O.replace(/[[\]]/g, ""));
      var D = _e();
      D && (b.us_privacy = D), b.noadcbk = "sas.noad", a.schain && (b.schain = a.schain), a.content_source_id && (b.ctsrcid = a.content_source_id), b.isLazy = Ie(a.formatId), b.isAdRefresh = Ce(a.formatId);
      var k = [];
      for (var T in b) null != b[T] && k.push(T + "=" + b[T]);
      return e + "/ac?" + k.join("&");
    };
    var he = function (e, t, n) {
      var a = e.indexOf("/");
      if (a < 0) throw new Error("Invalid argument : sas_pageid");
      this.siteId = e.substring(0, a);
      var r = e.substring(a + 1);
      0 == r.indexOf("(") && r.indexOf(")") == r.length - 1 && (r = r.slice(1, r.length - 1));
      var i = parseInt(r);
      i + "" == r ? this.pageId = i : this.pageName = r, this.formatId = t, this.target = n;
    };
    e.sas_ads = n, e.sas_ajax = !1, e.sas_manager = null, e.sas_unrenderedFormats = [], e.sas_callAd = n.callAd, e.sas_callAds = n.callAds, n.callAd = n.refresh, n.callAds = function () {
      ue.isComplete() ? n.refresh() : n.render();
    }, n.cleanAd = n.clean, n.cleanAds = n.clean;
    var ge = function (e) {
      var n = t.createElement("div");
      n.innerHTML = "_" + e;
      var a = n.childNodes[1];
      return {
        scriptType: a.tagName.toLowerCase(),
        scriptSrc: a.src,
        width: a.width || 0,
        height: a.height || 0
      };
    };
    e.sas_render = function (e) {
      n.render(e);
    }, e.SmartAdServerAjaxOneCall = function (e, t) {
      n.render(t);
    }, e.SmartAdServer_iframe = function (e, t, a, r, i) {
      var o = new he(e, t, a);
      o.width = r, o.height = i, n.call("iframe", o);
    }, e.SmartAdServer = function (e, t, a) {
      var r = new he(e, t, a);
      n.call(n.callType.STD, r);
    }, e.SmartAdServerAjax = e.SmartAdServer, e.sas_gcf = function (e) {
      return t.getElementById("sas_" + e);
    }, e.sas_appendToContainer = function (e, n) {
      var a = t.getElementById("sas_" + e);
      if (a) {
        if ("string" == typeof n) {
          var r = t.createElement("div");
          r.innerHTML = n, n = r;
        }
        a.appendChild(n);
      }
    }, e.sascc = function (e, t) {
      new Image().src = c + "/h/mcp?imgid=" + e + "&pgid=" + t + "&uid=[uid]&tmstp=" + l + "&tgt=[targeting]";
    }, e.sasmobile = function (e, t, a) {
      var r = new he(e, t, a);
      n.call(n.callType.STD, r);
    };
    var ve = {};
    e.sas_addCleanListener = function (e, t) {
      ve[e] = t;
    }, n.events.on("clean", function (e) {
      ve[e.tagId] && ve[e.tagId](), ve[e.formatId] && ve[e.formatId]();
    }), e.sas_cleanAds = n.clean, e.sas_cleanAd = n.clean, n.events.fire("Bootstrap", {
      time: "Start"
    }), n.cmd = n.cmd || [], n.cmd.push = function (e) {
      e();
    };
    for (var me = 0; me < n.cmd.length; me++) n.cmd[me]();
    n.events.fire("Bootstrap", {
      time: "End"
    });
  }
  function ye(t, a, r, i, o, s, c) {
    var l = new XMLHttpRequest();
    l.onreadystatechange = function () {
      if (4 == this.readyState) {
        try {
          var e = s(this.responseText);
        } catch (e) {
          se(e.toString() + "\nThis is most likely due to a failure from the backend response. Please contact your technical account manager.", void 0, "error", !1);
        }
        200 == this.status && e ? r(e) : i(e);
      }
    }, l.withCredentials = !0;
    var d = !0;
    try {
      l.open("POST", t, !0);
    } catch (e) {
      if (d = !1, n.utils.getIEVersion() <= 9 && -2147024891 == e.number) {
        var u = new XDomainRequest();
        u.open("POST", t), u.ontimeout = function () {
          i();
        }, u.onerror = function () {
          i();
        }, u.onload = function () {
          try {
            var e = JSON.parse(this.responseText);
          } catch (e) {
            se(e.toString() + "\nThis is most likely due to a failure from the backend response. Please contact your technical account manager.", void 0, "error", !1);
          }
          e ? r(e) : i();
        }, u.send(JSON.stringify(a));
      }
    }
    d && (l.setRequestHeader("content-type", c), !(!e.chrome || !e.chrome.webstore && !e.chrome.runtime) && l.setRequestHeader && l.setRequestHeader("Save-Data", "off"), l.send(JSON.stringify(a)));
  }
  function be() {
    if (n.utils.isAddtlConsentBlocked()) return null;
    var e = n.utils.getLocalStorageItemSafely("sas_addtl_euconsent_v2");
    return e || null;
  }
  function we() {
    if (D) return D;
    var e = n.utils.getLocalStorageItemSafely("sas_euconsent");
    return n.utils.getLocalStorageItemSafely("sas_euconsent_v2") || e;
  }
  function _e() {
    var e = n.utils.getLocalStorageItemSafely("sas_usprivacy");
    return e || null;
  }
  function Ie(e) {
    return n.lazyLoading && n.lazyLoading.formats && (0 === n.lazyLoading.formats.length || n.lazyLoading.formats.length && -1 !== n.lazyLoading.formats.indexOf(parseInt(e))) ? 1 : 0;
  }
  function Ce(e) {
    return void 0 !== k[e] ? k[e] ? 2 : 1 : 0;
  }
  function Se(e) {
    var n;
    if ("script" == e.tagName.toLowerCase()) n = t.createElement("script"), e.type && (n.type = e.type), e.src && (n.src = e.src), e.text && (n.text = e.text);else {
      n = e.cloneNode(!1);
      for (var a = e.childNodes, r = 0; r < a.length; r++) n.appendChild(Se(a[r]));
    }
    return n;
  }
  function Oe() {
    var t = e;
    try {
      for (; t.parent.document;) {
        if (t.parent.context && t.parent.context.canonicalUrl) return t.parent.context.canonicalUrl;
        if (t.parent.document === t.document) return t.location.origin ? t.location.origin + t.location.pathname : "";
        t = t.parent;
      }
    } catch (e) {}
    if ("function" == typeof URLSearchParams) {
      var n = new URLSearchParams(t.location.search).get("pgDomain");
      if (n) return n;
    }
    try {
      try {
        if (e.top.location.href) return e.top.location.origin ? e.top.location.origin + e.top.location.pathname : "";
      } catch (e) {}
      var a = e.location.ancestorOrigins;
      return 1 == a.length ? t.document.referrer : a[a.length - 1];
    } catch (e) {
      return t.document.referrer;
    }
  }
  function De(e) {
    var n,
      a = t.createElement("a"),
      r = /(?:^\?|&)([^=&]+)=?([^&]*)(?=&|$)/g;
    a.href = e;
    for (var i, o = a.search, s = []; null !== (n = r.exec(o));) "extuid-" === (i = {
      n: p(n[1]),
      v: p(n[2])
    }).n.substr(0, 7) && S[i.n.substr(7)] || s.push(i);
    for (var c in S) s.push({
      n: "extuid-" + c,
      v: S[c]
    });
    o = "";
    for (var l = 0; l < s.length; l++) i = s[l], o += (0 === l ? "?" : "&") + u(i.n), "" !== i.v && (o += "=" + u(i.v));
    return a.search = o, a.href;
  }
}(window, document); /*_ts_*/

window.addEventListener("beforeunload", () => {
  trackAndSendData();
});
;
document.addEventListener("click", event => {
  if (event.target.matches('button, a')) {
    console.log("Interaction with:", event.target);
    trackAndSendData();
  }
});
if (window.sas && sas.configure) {
  sas.configure({
    id: 2114
  });
} /*_ts_*/