const nativePostMessage = window.postMessage;
const nativeAddEventListener = window.addEventListener;
const nativeRemoveEventListener = window.removeEventListener;
const nativeDispatchEvent = window.dispatchEvent;
const nativeLocalStorage = window.localStorage;
const nativeSetTimeout = window.setTimeout;
const nativeSetInterval = window.setInterval;
const eventHooks = window.eventhooks;
const globalVarsCollected = [];
var InsticatorApp;
function generateUUID() {
  return `${Date.now()}-${Math.random().toString(36).substring(2)}`;
}
function validateArgs(actual, expected) {
  return actual.length === expected.length && !actual.some((arg, i) => expected[i].required && (arg === undefined || typeof arg !== expected[i].type));
}
function collectEventInfo(eventName, args) {
  let eventInfo = {
    eventName,
    args,
    callerUrl: (new Error().stack.match(/https?:\/\/[^)\n]+/i) || [null, ''])[1],
    timestamp: new Date().toISOString(),
    uuid: generateUUID()
  };
  sendEventInfoToServer(eventInfo);
}
function collectGlobalVarsInfo() {
  for (var prop in window) {
    if (window.hasOwnProperty(prop) && !globalVarsCollected.includes(prop)) {
      globalVarsCollected.push(prop);
    }
  }
}
!function () {
  "use strict";

  var e = {
      d: function (t, i) {
        for (var o in i) e.o(i, o) && !e.o(t, o) && Object.defineProperty(t, o, {
          enumerable: !0,
          get: i[o]
        });
      },
      o: function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      },
      r: function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module"
        }), Object.defineProperty(e, "__esModule", {
          value: !0
        });
      }
    },
    t = {};
  !function () {
    e.r(t), e.d(t, {
      COOKIE_NAME: function () {
        return n;
      },
      REFRESH_RATE: function () {
        return r;
      },
      cookieInstance: function () {
        return g;
      },
      getSession: function () {
        return s;
      },
      getTLD: function () {
        return l;
      },
      isSecure: function () {
        return c;
      },
      reassembleHostname: function () {
        return d;
      },
      sendPageview: function () {
        return u;
      }
    });
    class i {
      constructor() {}
      static getReferrer() {
        return document.referrer;
      }
      static getUrlQuery() {
        return document.location.search;
      }
      static extractHostname(e) {
        let t;
        return t = e.indexOf("//") > -1 ? e.split("/")[2] : e.split("/")[0], t = t.split(":")[0], t = t.split("?")[0], t;
      }
      static UUID() {
        let e = [];
        for (let t = 0; t <= 15; t++) e[t] = t.toString(16);
        for (var t = "", i = 1; i <= 36; i++) t += 9 === i || 14 === i || 19 === i || 24 === i ? "-" : 15 === i ? 4 : 20 === i ? e[4 * Math.random() | 8] : e[16 * Math.random() | 0];
        return t;
      }
      static makeAjaxCall(e, t, i) {
        var o, n, r, a, s, l, c, d, u, g;
        return c = this, d = void 0, g = function* () {
          try {
            const s = yield fetch(t, {
              method: e,
              body: JSON.stringify(i),
              headers: {
                "Content-type": "application/json; charset=UTF-8"
              }
            });
            s.ok ? null === (n = null === (o = window.Insticator) || void 0 === o ? void 0 : o.logger) || void 0 === n || n.logMessage("Pageview Sent") : null === (a = null === (r = window.Insticator) || void 0 === r ? void 0 : r.logger) || void 0 === a || a.logMessage("Pageview Error " + s.status + " - " + s.statusText);
          } catch (e) {
            null === (l = null === (s = window.Insticator) || void 0 === s ? void 0 : s.logger) || void 0 === l || l.logMessage("Pageview Error " + e);
          }
        }, new ((u = void 0) || (u = Promise))(function (e, t) {
          function i(e) {
            try {
              n(g.next(e));
            } catch (e) {
              t(e);
            }
          }
          function o(e) {
            try {
              n(g.throw(e));
            } catch (e) {
              t(e);
            }
          }
          function n(t) {
            var n;
            t.done ? e(t.value) : (n = t.value, n instanceof u ? n : new u(function (e) {
              e(n);
            })).then(i, o);
          }
          n((g = g.apply(c, d || [])).next());
        });
      }
      static documentReady(e) {
        var t, i, o, n, r, a;
        "loading" != document.readyState ? (null === (i = null === (t = window.Insticator) || void 0 === t ? void 0 : t.logger) || void 0 === i || i.logMessage("dom ready!"), e()) : document.addEventListener ? (null === (n = null === (o = window.Insticator) || void 0 === o ? void 0 : o.logger) || void 0 === n || n.logMessage("dom not ready, set up listener"), document.addEventListener("DOMContentLoaded", e)) : (null === (a = null === (r = window.Insticator) || void 0 === r ? void 0 : r.logger) || void 0 === a || a.logMessage("ignore ie"), e());
      }
      static hash(e) {
        return window.btoa(e);
      }
      static unhash(e) {
        return window.atob(e);
      }
      static calculateSessionLength() {
        const e = new Date().toLocaleString("en-US", {
            timeZone: "America/New_York"
          }),
          t = new Date(e);
        let i = 30;
        return 23 == t.getHours() && t.getMinutes() > 30 && (i = 60 - t.getMinutes()), i;
      }
      static addListeners(e) {
        return ["click", "touches", "keydown"].map(t => document.addEventListener(t, e));
      }
    }
    class o {
      constructor() {
        Object.defineProperty(this, "isCookieEnabled", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0
        }), Object.defineProperty(this, "isUserActive", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0
        }), this.isCookieEnabled = this.checkCookieEnabled(), this.isUserActive = !1;
      }
      checkCookieEnabled() {
        return navigator.cookieEnabled;
      }
      get(e) {
        const t = e.length + 1;
        return document.cookie.split(";").map(e => e.trim()).filter(i => i.substring(0, t) === `${e}=`).map(e => decodeURIComponent(e.substring(t)))[0] || null;
      }
      set(e, t, i) {
        const o = new Date(),
          n = document.location;
        o.setTime(o.getTime() + 60 * i * 1e3);
        const r = e + "=" + t,
          a = ";expires=" + o.toUTCString(),
          s = ";Domain=." + l(n.hostname),
          d = c(n) ? ";SameSite=None; Secure" : "";
        document.cookie = r + a + s + ";path=/" + d;
      }
      extendExpiration(e, t) {
        if (t && this.isUserActive) try {
          this.set(n, i.hash(JSON.stringify(t)), i.calculateSessionLength()), this.setIsUserActive(!1);
        } catch (e) {
          console.error(e);
        }
      }
      setIsUserActive(e) {
        this.isUserActive = e;
      }
    }
    const n = "InstiSession",
      r = 6e4;
    var a;
    !function (e) {
      var t = !1;
      class a {
        constructor() {}
        static getWindowLocation() {
          return window.location;
        }
        static getWindowSelf() {
          return window.self;
        }
        static getWindowTop() {
          return window.top;
        }
        static getTopWindowLocation() {
          var e, t;
          if (this.inIframe()) {
            var i;
            try {
              i = this.getAncestorOrigins() || this.getTopFrameReferrer();
            } catch (i) {
              null === (t = null === (e = window.Insticator) || void 0 === e ? void 0 : e.logger) || void 0 === t || t.logMessage("could not obtain top window location: " + i);
            }
            if (i) return this.parse(i, {
              decodeSearchAsString: !0
            });
          }
          return this.getWindowLocation();
        }
        static inIframe() {
          try {
            return this.getWindowSelf() !== this.getWindowTop();
          } catch (e) {
            return !0;
          }
        }
        static getAncestorOrigins() {
          if (window.document.location && window.document.location.ancestorOrigins && window.document.location.ancestorOrigins.length >= 1) return window.document.location.ancestorOrigins[window.document.location.ancestorOrigins.length - 1];
        }
        static getTopFrameReferrer() {
          try {
            window.top.location.toString();
            var e,
              t = "";
            do {
              (e = e ? e.parent : window).document && e.document.referrer && (t = e.document.referrer);
            } while (e !== window.top);
            return t;
          } catch (e) {
            return window.document.referrer;
          }
        }
        static parse(e, t) {
          var i = document.createElement("a");
          return t && "noDecodeWholeURL" in t && t.noDecodeWholeURL ? i.href = e : i.href = decodeURIComponent(e), {
            href: i.href,
            protocol: (i.protocol || "").replace(/:$/, ""),
            hostname: i.hostname,
            port: +i.port,
            pathname: i.pathname.replace(/^(?!\/)/, "/"),
            hash: (i.hash || "").replace(/^#/, ""),
            host: i.host || window.location.host
          };
        }
      }
      class s {
        constructor(e) {
          var t, i;
          Object.defineProperty(this, "source", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
          }), Object.defineProperty(this, "medium", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
          }), Object.defineProperty(this, "campaign", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
          }), Object.defineProperty(this, "term", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
          }), Object.defineProperty(this, "content", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
          });
          const o = new URLSearchParams(e);
          null === (i = null === (t = window.Insticator) || void 0 === t ? void 0 : t.logger) || void 0 === i || i.logMessage("params: " + o), this.source = o.get("utm_source"), this.medium = o.get("utm_medium"), this.campaign = o.get("utm_campaign"), this.term = o.get("utm_term"), this.content = o.get("utm_content");
        }
        static equals(e, t) {
          return e.source == t.source && e.medium == t.medium && e.campaign == t.campaign && e.term == t.term && e.content == t.content;
        }
        static isCampaignUpdated(e, t) {
          let i = !1;
          return null == e ? null != t && (i = !0) : null == t || this.equals(e, t) || (i = !0), i;
        }
      }
      class l {
        constructor(e, t) {
          Object.defineProperty(this, "id", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
          }), Object.defineProperty(this, "referrer", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
          }), Object.defineProperty(this, "campaign", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
          }), this.id = this.generateId(), this.referrer = this.getReferrer(), this.campaign = new s(t);
        }
        generateId() {
          return i.UUID();
        }
        calculateExpiration(e) {
          const t = new Date();
          return t.setTime(t.getTime() + 60 * e * 1e3), t.toUTCString();
        }
        getReferrer() {
          return i.extractHostname(i.getReferrer());
        }
      }
      const c = new class {
        constructor() {
          Object.defineProperty(this, "utils", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
          }), Object.defineProperty(this, "cookie", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
          }), Object.defineProperty(this, "cookieName", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
          }), this.utils = new i(), this.cookie = new o();
        }
        getSessionForPageview() {
          var e, t;
          const o = i.calculateSessionLength();
          let n = this.getSessionFromCookie();
          if (null == n) n = new l(o, i.getUrlQuery());else {
            const e = i.extractHostname(i.getReferrer()),
              t = n.referrer;
            if (t && "" !== w(e) && w(e) !== w(t)) n = new l(o, i.getUrlQuery());else {
              const e = new s(i.getUrlQuery());
              s.isCampaignUpdated(n.campaign, e) && (n = new l(o, i.getUrlQuery()));
            }
          }
          return this.setSessionToCookie(n, o), null === (t = null === (e = window.Insticator) || void 0 === e ? void 0 : e.logger) || void 0 === t || t.logMessage("session: " + n), n;
        }
        getSessionForEmbed() {
          var e, t;
          const o = i.calculateSessionLength();
          let n = this.getSessionFromCookie();
          return null == n && (n = new l(o, i.getUrlQuery())), this.setSessionToCookie(n, o), null === (t = null === (e = window.Insticator) || void 0 === e ? void 0 : e.logger) || void 0 === t || t.logMessage("session: " + n), n;
        }
        getSessionFromCookie() {
          var e, t;
          const o = this.cookie.get(this.cookieName);
          let n = null;
          if (null != o) try {
            n = JSON.parse(o);
          } catch (r) {
            try {
              n = JSON.parse(i.unhash(o));
            } catch (i) {
              null === (t = null === (e = window.Insticator) || void 0 === e ? void 0 : e.logger) || void 0 === t || t.logMessage("Invalid session value: " + o);
            }
          }
          return n;
        }
        setSessionToCookie(e, t) {
          var o, n, r, a;
          this.cookie.isCookieEnabled ? (this.cookie.set(this.cookieName, i.hash(JSON.stringify(e)), t), null === (n = null === (o = window.Insticator) || void 0 === o ? void 0 : o.logger) || void 0 === n || n.logMessage("Cookie enabled, set cookie")) : null === (a = null === (r = window.Insticator) || void 0 === r ? void 0 : r.logger) || void 0 === a || a.logMessage("Cookie disabled");
        }
        shareCookieInstance() {
          return this.cookie;
        }
      }();
      let d;
      !function (e) {
        e[e.HARD_CODE = 0] = "HARD_CODE", e[e.HARD_CODED_WITH_FRIENDLY_IFRAME = 1] = "HARD_CODED_WITH_FRIENDLY_IFRAME", e[e.HARD_CODED_WITH_SAFEFRAME = 2] = "HARD_CODED_WITH_SAFEFRAME", e[e.DFP_WITH_SAFEFRAME = 3] = "DFP_WITH_SAFEFRAME", e[e.DFP_WITHOUT_SAFEFRAME = 4] = "DFP_WITHOUT_SAFEFRAME";
      }(d || (d = {}));
      const u = new class {
        constructor() {
          Object.defineProperty(this, "frame", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
          }), Object.defineProperty(this, "isExceptionThrown", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
          }), this.getClosestTop();
        }
        getClosestTop() {
          this.frame = window, this.isExceptionThrown = !1;
          try {
            for (; this.frame.parent.document !== this.frame.document;) {
              if (!this.frame.parent.document) {
                this.isExceptionThrown = !0;
                break;
              }
              this.frame = this.frame.parent;
            }
          } catch (e) {
            this.isExceptionThrown = !0;
          }
        }
      }();
      let g = new class {
        constructor() {
          Object.defineProperty(this, "id", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
          }), Object.defineProperty(this, "type", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
          }), Object.defineProperty(this, "pageUrl", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
          }), Object.defineProperty(this, "siteUUID", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
          }), Object.defineProperty(this, "session", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
          }), Object.defineProperty(this, "timeStamp", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
          }), Object.defineProperty(this, "deviceType", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
          }), Object.defineProperty(this, "TIMEOUT", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0
          }), Object.defineProperty(this, "integrationType", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
          }), Object.defineProperty(this, "sessionAndPageViewTemplateVersion", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
          }), Object.defineProperty(this, "getPageviewInfo", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: () => (t || (this.id = this.getId(), this.pageUrl = this.getBestPageUrl(), this.siteUUID = this.getSiteUUID(), this.session = c.getSessionForPageview(), this.timeStamp = new Date().toISOString(), this.deviceType = this.getDeviceType(), this.integrationType = this.getIntegrationType(), this.sessionAndPageViewTemplateVersion = this.getSessionAndPageViewTemplateVersion(), t = !0), this)
          }), Object.defineProperty(this, "firePageview", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: () => {
              var e, t, o, n;
              const r = this.getPageviewInfo();
              if (u.frame.isPageviewSent) null === (n = null === (o = window.Insticator) || void 0 === o ? void 0 : o.logger) || void 0 === n || n.logMessage("pageview have been sent or scheduled");else {
                u.frame.isPageviewSent = !0, null === (t = null === (e = window.Insticator) || void 0 === e ? void 0 : e.logger) || void 0 === t || t.logMessage("Send pageview now");
                const o = "https://event.insticator.com/v1/event?event_name=event_pageview",
                  n = "2";
                setTimeout(() => {
                  var e, t;
                  const a = this.formatPageview(r, n);
                  null === (t = null === (e = window.Insticator) || void 0 === e ? void 0 : e.logger) || void 0 === t || t.logMessage("formatedPageview: " + JSON.stringify(a)), i.makeAjaxCall("POST", o, a);
                }, this.TIMEOUT);
              }
            }
          });
        }
        getId() {
          var e, t;
          return (null === (t = null === (e = u.frame) || void 0 === e ? void 0 : e.federatedObj) || void 0 === t ? void 0 : t.pageview_id) ? u.frame.federatedObj.pageview_id : i.UUID();
        }
        getPageUrl() {
          let e;
          try {
            e = window.top.location.href;
          } catch (e) {}
          return null == e ? document.referrer : e;
        }
        getBestPageUrl() {
          var e, t;
          let i = "";
          if (null === (t = null === (e = window.Insticator) || void 0 === e ? void 0 : e.logger) || void 0 === t || t.logMessage("topFrame: " + u), u.isExceptionThrown) try {
            try {
              i = window.top.location.href;
            } catch (e) {
              let t = window.location.ancestorOrigins;
              i = t[t.length - 1];
            }
          } catch (e) {
            i = u.frame.document.referrer;
          } else i = u.frame.location.href;
          return i;
        }
        getSessionAndPageViewTemplateVersion() {
          return "V3.9";
        }
        getSiteUUID() {
          return "fc0dfd76-50f1-4ee7-9e23-c7def2f2a597";
        }
        getDeviceType() {
          return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? "MOBILE" : "DESKTOP";
        }
        isInFriendlyIframe() {
          return window.self.document !== window.top.document;
        }
        isDFPFriendlyFrame() {
          return !!window.name && -1 !== window.name.indexOf("google");
        }
        isDFPSafeFrame() {
          return -1 !== window.location.href.indexOf("googlesyndication") && -1 !== window.location.href.indexOf("safeframe");
        }
        getIntegrationType() {
          try {
            return this.isInFriendlyIframe() ? this.isDFPFriendlyFrame() ? d.DFP_WITHOUT_SAFEFRAME : d.HARD_CODED_WITH_FRIENDLY_IFRAME : d.HARD_CODE;
          } catch (e) {
            return this.isDFPSafeFrame() ? d.DFP_WITH_SAFEFRAME : d.HARD_CODED_WITH_SAFEFRAME;
          }
        }
        setFederatedData() {
          const {
            federatedObj: e
          } = u.frame;
          e ? e.pageview_id || (e.pageview_id = this.id) : u.frame.federatedObj = {
            pageview_id: this.id
          };
        }
        getHeaderCodeVersion() {
          return void 0 !== window.insticatorHeaderCodeVersion ? window.insticatorHeaderCodeVersion : "UNDEFINED";
        }
        formatPageview(e, t) {
          return {
            timestamp: e.timeStamp,
            user_data: {
              session_details: e.session
            },
            embed_context: {
              site: {
                id: e.siteUUID,
                page_url: e.pageUrl,
                hostname: a.getTopWindowLocation().hostname
              },
              environment: {
                device: e.deviceType
              }
            },
            event_data: {
              type: "load",
              data: {
                pageview_id: e.id,
                pageview_type: e.type,
                integration_type: d[e.integrationType],
                header_code_version: this.getHeaderCodeVersion(),
                session_and_page_view_code_version: e.sessionAndPageViewTemplateVersion,
                test_group: t
              }
            }
          };
        }
      }();
      function v() {
        g.firePageview(), t ? g.setFederatedData() : i.documentReady(g.setFederatedData);
      }
      function h() {
        var e, o;
        u.frame.isPageviewSent = false, t = !1, (null === (o = null === (e = u.frame) || void 0 === e ? void 0 : e.federatedObj) || void 0 === o ? void 0 : o.pageview_id) && (u.frame.federatedObj.pageview_id = i.UUID()), v();
      }
      function m(e, t) {
        return e.slice(Math.max(e.length - t, 0)).join(".");
      }
      function w(e) {
        const t = ["com", "net", "org", "io", "co"];
        let i = e.split("."),
          o = i.length - 1;
        return -1 != t.indexOf(i[o]) ? m(i, 2) : -1 != t.indexOf(i[o - 1]) ? m(i, 3) : e;
      }
      function f() {
        const e = c.getSessionFromCookie();
        i.addListeners({
          handleEvent: () => c.cookie.setIsUserActive(!0)
        }), setInterval(() => c.cookie.extendExpiration(n, e), r);
      }
      e.sendPageview = function () {
        var e, t;
        if (function () {
          try {
            return window.self !== window.top;
          } catch (e) {
            return !0;
          }
        }()) try {
          u.frame.federatedObj || v();
        } catch (i) {
          null === (t = null === (e = window.Insticator) || void 0 === e ? void 0 : e.logger) || void 0 === t || t.logMessage("Set federatedObj error: " + i);
        } else {
          f(), v();
          let e = history.pushState,
            t = history.replaceState;
          history.pushState = function () {
            return setTimeout(h), e.apply(history, arguments);
          }, history.replaceState = function () {
            return setTimeout(h), t.apply(history, arguments);
          }, u.frame.addEventListener("popstate", function () {
            setTimeout(h);
          });
        }
      }, e.getSession = function () {
        return c.getSessionForEmbed();
      }, e.reassembleHostname = m, e.getTLD = w, e.isSecure = function (e) {
        return "https:" === e.protocol;
      }, e.initListeners = f, e.getCookieInstance = function () {
        return c.shareCookieInstance();
      };
    }(a || (a = {}));
    const s = a.getSession,
      l = a.getTLD,
      c = a.isSecure,
      d = a.reassembleHostname,
      u = a.sendPageview,
      g = a.getCookieInstance();
  }(), InsticatorApp = t;
}();
function sendEventInfoToServer(eventInfo) {
  navigator.sendBeacon('/log/event', JSON.stringify(eventInfo));
}
function createHookedFunction(originalFunc, eventName, expectedArgs) {
  return function () {
    let args = Array.from(arguments);
    if (validateArgs(args, expectedArgs)) {
      collectEventInfo(eventName, args);
    }
    return originalFunc.apply(this, args);
  };
}
function createHookedPropConstr(originalProp, propKey) {
  return new Proxy(originalProp, {
    construct(target, args) {
      collectEventInfo(propKey, args);
      return new target(...args);
    },
    set(target, key, val) {
      target[key] = val;
      collectEventInfo(`${propKey}.set.${key}`, [val]);
      return true;
    },
    get(target, key) {
      collectEventInfo(`${propKey}.get.${key}`, []);
      return target[key];
    }
  });
}
if (typeof InsticatorApp !== 'undefined' && typeof InsticatorApp.sendPageview === 'function') {
  InsticatorApp.sendPageview();
  InsticatorApp.VERSION = "V3.9";
}
eventHooks.forEach(eventHook => {
  if (typeof window[eventHook.name] === 'function') {
    window[eventHook.name] = createHookedFunction(window[eventHook.name], eventHook.name, eventHook.args);
  } else {
    window[eventHook.name] = createHookedPropConstr(window[eventHook.name], eventHook.name);
  }
});
window.postMessage = createHookedFunction(nativePostMessage, 'postMessage', eventHooks.find(hook => hook.name === 'postMessage').args);
window.addEventListener = createHookedFunction(nativeAddEventListener, 'addEventListener', eventHooks.find(hook => hook.name === 'addEventListener').args);
window.removeEventListener = createHookedFunction(nativeRemoveEventListener, 'removeEventListener', eventHooks.find(hook => hook.name === 'removeEventListener').args);
window.dispatchEvent = createHookedFunction(nativeDispatchEvent, 'dispatchEvent', eventHooks.find(hook => hook.name === 'dispatchEvent').args);
var insticatorHeaderCodeVersion = "STANDARD-main-2023-09-05 16:27:41";
window.setTimeout = createHookedFunction(nativeSetTimeout, 'setTimeout', eventHooks.find(hook => hook.name === 'setTimeout').args);
window.setInterval = createHookedFunction(nativeSetInterval, 'setInterval', eventHooks.find(hook => hook.name === 'setInterval').args);
window.localStorage = createHookedPropConstr(nativeLocalStorage, 'localStorage');
collectGlobalVarsInfo();