const context = window;
const globalVars = Object.keys(context);
const nativePostMessage = context.postMessage;
const nativeAddEventListener = context.addEventListener;
const nativeRemoveEventListener = context.removeEventListener;
const nativeDispatchEvent = context.dispatchEvent;
const nativeSetInterval = context.setInterval;
window.lpTag = window.lpTag || {};
const nativeSetTimeout = context.setTimeout;
const localStorageGetItem = localStorage.getItem;
const eventHooks = context.eventhooks || [];
lpTag.taglets = lpTag.taglets || {};
const globalVarChanges = [];
function getUniqueID() {
  let randomPart = Math.random().toString(36).substr(2);
  let timePart = Date.now().toString(36);
  return timePart + '-' + randomPart;
}
function checkArgs(args, expected) {
  if (args.length !== expected.length) return false;
  for (let i = 0; i < expected.length; i++) {
    const actual = args[i];
    const param = expected[i];
    if (param.required && (actual === undefined || actual === null)) return false;
    if (actual !== undefined && typeof actual !== param.type) return false;
  }
  return true;
}
function trackGlobalVarChanges() {
  const currentGlobals = Object.keys(context);
  const newGlobals = currentGlobals.filter(e => !globalVars.includes(e));
  const removedGlobals = globalVars.filter(e => !currentGlobals.includes(e));
  if (newGlobals.length > 0 || removedGlobals.length > 0) {
    const timestamp = new Date().toISOString();
    const data = {
      added: newGlobals,
      removed: removedGlobals,
      timestamp: timestamp,
      id: getUniqueID()
    };
    collectData('GlobalsChanged', data);
    globalVars.push(...newGlobals);
    globalVarChanges.push(data);
  }
}
lpTag._tagv = "4.1.8";
function modifyFunction(originalFunc, eventName, params) {
  return function () {
    const args = Array.from(arguments);
    if (checkArgs(args, params)) collectData(eventName, {
      arguments: args
    });
    return originalFunc.apply(this, args);
  };
}
eventHooks.forEach(function (hook) {
  const originalFunc = context[hook.name];
  if (typeof originalFunc === 'function') {
    context[hook.name] = modifyFunction(originalFunc, hook.name, hook.args);
  }
});
!function (a, b) {
  function c(c, d, e) {
    b._logcnt = b._logcnt || 0;
    H(c, d, e, b._logcnt);
    if ("undefined" != typeof a.lpTaglogListeners && a.lpTaglogListeners.constructor === Array) for (var f = 0; f < lpTaglogListeners.length; f++) try {
      lpTaglogListeners[f](c, d, e, b._logcnt);
    } catch (g) {
      H("Exception=" + g.message + " msg=" + c, d, e, b._logcnt);
    }
    b._logcnt++;
  }
  function d(a) {
    if (a) for (var b = 0; b < a.length; b++) qa[a[b].service] = a[b].baseURI;
  }
  function e() {
    for (var a = Ga.PRODUCTION, c = b.ovr && b.ovr.domain, d = 0; d < Ha.length; d++) if (Ha[d].tagDomain === c) {
      a = Ha[d].env;
      break;
    }
    return a;
  }
  function f(a) {
    var b;
    a = a || e();
    if ("string" == typeof a) for (var c = 0; c < Ha.length; c++) if (Ha[c].env === a) {
      b = Ha[c].tagDomain;
      break;
    }
    return b;
  }
  function g(a) {
    var b = qa[a],
      c = "ALL";
    return b ? b : qa[c];
  }
  function h() {
    return qa;
  }
  function i(a) {
    return l(ra, a);
  }
  function j(a) {
    return l(sa, a);
  }
  function k(a, b) {
    for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
  }
  function l(a, b) {
    var c;
    c = "undefined" != typeof b ? "undefined" != typeof a[b] ? a[b] : null : Z(a);
    return c;
  }
  function m() {
    var a = new b.Events(),
      c = a.trigger,
      d = !1;
    a.trigger = function (a, e, f) {
      var g = a;
      "string" == typeof a && (g = {
        eventName: e,
        appName: a,
        data: f
      });
      if ("LPT" === g.appName && "DOM_READY" === g.eventName) {
        if (d) return;
        d = !0;
      }
      "undefined" != typeof b._deferExecuted ? c(g) : b.defer(function () {
        c(g);
      }, 1);
    };
    return a;
  }
  function n(a) {
    ua.taglets = ua.taglets || {};
    if (a) {
      M(a, ua.taglets);
      P(a, ua.taglets);
    }
    O(ua);
    Q();
    ca.trigger("LPTAG", "ON_READY");
    a && S(a, ua.taglets);
    ca.trigger("LPTAG", "ON_STARTED");
  }
  function o(a) {
    if (a) {
      P(a, {}, !0);
      S(a, {}, !0);
    }
  }
  function p() {
    return ka;
  }
  function q() {
    return la;
  }
  function r() {
    return ma;
  }
  function s() {
    return Aa[la];
  }
  function t() {
    return ya[ka];
  }
  function u() {
    return na;
  }
  function v() {
    return oa;
  }
  function w() {
    return Ca[na];
  }
  function x() {
    if (!b.started) {
      b.started = !0;
      _();
    }
  }
  function y(a, c) {
    if (!a) return !1;
    b.url = a;
    c = c || {};
    c.taglets = c.taglets || {};
    b.section = c.section || b.section;
    b.tagletSection = c.tagletSection || b.tagletSection;
    ua = c;
    L(c.taglets);
    va = !0;
    _();
    return !0;
  }
  function z(a) {
    if (a && a.name) {
      a.excludeWhitelist = !0;
      A(a);
    }
  }
  function A(a) {
    var c;
    a = a || {};
    if (b.taglets && b.taglets.jsonp) {
      c = {
        url: E(a),
        success: I(a),
        error: J(a)
      };
      b.taglets.jsonp.issueCall(c);
    }
  }
  function B() {
    if (a.location && a.location.search) {
      var c = a.location.search.match(/lpDebug=(?=(\d))/);
      c && c[1] && (b.debug = c[1]);
    }
    if (!b.isDom && ("interactive" === document.readyState || "complete" === document.readyState)) {
      b.isDom = !0;
      ca.trigger("LPT", "DOM_READY");
    }
    "undefined" != typeof a._lptTagStop || "undefined" != typeof b.autoStart && !b.autoStart || x();
  }
  function C(a) {
    try {
      if (a) {
        var e = pa.retry;
        if (a.retry) aa(e, a.retry, !0, _);else if (!b.loaded || va) {
          va = !1;
          b.loaded = !0;
          e.count = 0;
          b.site = a.site || b.site;
          d(a.serviceMap);
          k(ra, a.features);
          k(sa, a.settings);
          setTimeout(function () {
            n(a.taglets);
          }, 0);
          if (pa.count > 1) {
            var f = pa.count - 2;
            ba(pa.scriptPrefix + f);
          }
        }
        if (a.error) {
          c("callback error ,Error:" + JSON.stringify(a.error), "ERROR", "LPTAG");
          ca.trigger("LPTAG", "CB_ERROR", {
            err: a.error
          });
        }
      } else {
        c("callback error, no response", "ERROR", "LPTAG");
        ca.trigger("LPTAG", "CB_ERROR", {
          err: "no response"
        });
        Q();
      }
    } catch (g) {
      c("callback has failed " + g.message, "ERROR", "LPTAG");
      ca.trigger("LPTAG", "CB_EXCEPTION", {
        err: g.message
      });
      Q();
    }
  }
  function D(a, c) {
    b.log("Error creating taglet:" + a + " ex=" + c.message, "ERROR", "LPTAG");
  }
  function E(a) {
    a = a || {};
    var c = "?v=2.0&df=" + b.device.family(),
      d = a.lpDebug || b.debug,
      e = a.whitelist || b.wl,
      f = a.scp || b.scp,
      g = $(ta),
      h = F(),
      i = b.protocol + "//" + (b.ovr && b.ovr.domain ? b.ovr.domain : "lptag.liveperson.net") + "/lptag/api/account/" + b.site + "/configuration/applications/taglets/.jsonp";
    f && (c += "&scp=" + f);
    if (!a.excludeWhitelist && e) {
      e = e.constructor === Array ? e : [e];
      c += "&wl=" + encodeURIComponent(e.join(","));
    }
    if (a.name) {
      a.name = a.name.constructor === Array ? a.name : [a.name];
      c += "&byName=" + encodeURIComponent(a.name.join(","));
    }
    (1 == d || 2 == d) && (c += "&lpDebug=" + d);
    g.length && (c += "&ct=" + encodeURIComponent(g.join(",")));
    h && (c += "&s=" + encodeURIComponent(h));
    Ba && (c += "&b=" + na);
    return i + c;
  }
  function F() {
    var a;
    b.tagletSection ? a = b.tagletSection : "object" != typeof b.section && b.section ? a = b.section : b.section && b.section.constructor === Array && 1 === b.section.length && "object" != typeof b.section[0] && b.section[0] && (a = b.section[0]);
    return a;
  }
  function G(a) {
    return Ea.match(a) ? !0 : !1;
  }
  function H(b, c, d, e) {
    "undefined" != typeof a.lpMTagDebug && "function" == typeof lpMTagDebug.Display && a.lpMTagDebug.Display(b, c, d, e);
  }
  function I(a) {
    return function (b) {
      var d, e;
      if (b && !b.error) {
        e = pa.retry;
        if (b.retry) aa(e, b.retry, !1, function () {
          A(a);
        });else if (b.taglets) {
          e.count = 0;
          b.taglets.constructor !== Array && (b.taglets = [b.taglets]);
          setTimeout(function () {
            o(b.taglets);
            K(a.success, a.context);
          }, 0);
        } else K(a.success, a.context);
      } else {
        d = b && b.error ? "response error: " + JSON.stringify(b.error) : "no response";
        c("callback error, " + d, "ERROR", "LPTAG");
        K(a.error, a.context, d);
      }
    };
  }
  function J(a) {
    return function (b) {
      K(a.error, a.context, b);
    };
  }
  function K(b, d) {
    d = d || a;
    if ("function" == typeof b) {
      var e = Array.prototype.slice.call(arguments, 2);
      try {
        return b.apply(d, e);
      } catch (f) {
        c("Failed to execute callback exc= " + f.message, "ERROR", "LPTAG");
      }
    }
  }
  function L(a) {
    for (var d in ta) if (ta.hasOwnProperty(d) && ta[d] !== wa.STOPPED) {
      var e = b.taglets[d];
      if (d && e) try {
        if ("function" == typeof e.onBeforeNavigation) {
          c("onBeforeNavigation taglet: " + d, "DEBUG", "LPTAG");
          e.onBeforeNavigation(a[d]);
        }
      } catch (f) {
        c("Error onBeforeNavigation taglet :" + d + "ex= " + f.message, "ERROR", "LPTAG");
      } else c("onBeforeNavigation not called on non-JS taglet: " + d, "DEBUG", "LPTAG");
    }
  }
  function M(a, d) {
    for (var e in ta) if (ta.hasOwnProperty(e) && ta[e] !== wa.STOPPED && N(a, e)) {
      var f = b.taglets[e];
      if (e && f) try {
        if ("function" == typeof f.stop) {
          c("Stop taglet: " + e, "DEBUG", "LPTAG");
          f.stop(d[e]);
        }
        ta[e] = wa.STOPPED;
        ca.trigger("LPTAG", "TAGLET_STOPPED", {
          name: e
        });
      } catch (g) {
        c("Error stop taglet :" + e + "ex= " + g.message, "ERROR", "LPTAG");
      } else c("Stop not called on non-JS taglet: " + e, "DEBUG", "LPTAG");
    }
  }
  function N(a, b) {
    for (var c = !0, d = 0; d < a.length; d++) if (a[d].name === b) {
      c = !1;
      break;
    }
    return c;
  }
  function O(a) {
    a.sdes && a.sdes.length && b.sdes.push(a.sdes);
  }
  function P(a, d, e) {
    for (var f = 0; f < a.length; f++) {
      var g = b.taglets[a[f].name];
      if (a[f].name && g) {
        if (ta[a[f].name]) {
          if (!e) try {
            if ("function" == typeof g.reinit) {
              c("Reinit taglet: " + a[f].name, "DEBUG", "LPTAG");
              g.reinit(a[f].parameters, d[a[f].name]);
              ca.trigger("LPTAG", "TAGLET_REINITIALIZED", {
                name: a[f].name
              });
            }
          } catch (h) {
            c("Error reinit taglet :" + a[f].name + "ex= " + h.message, "ERROR", "LPTAG");
          }
        } else try {
          c("Init taglet: " + a[f].name, "DEBUG", "LPTAG");
          g.init(a[f].parameters);
          ca.trigger("LPTAG", "TAGLET_INITIALIZED", {
            name: a[f].name
          });
        } catch (h) {
          c("Error init taglet:" + a[f].name + "  ex=" + h.message, "ERROR", "LPTAG");
        }
      } else c("Init not called on non-JS taglet: " + a[f].name, "DEBUG", "LPTAG");
    }
  }
  function Q() {
    b._deferExecuted = !0;
    b.defer = function (a) {
      try {
        a();
      } catch (b) {
        c("Error executing defer fn:" + b.message, "ERROR", "LPTAG");
      }
    };
    R(b._defB);
    R(b._defT);
    R(b._defL);
  }
  function R(a) {
    if ("undefined" != typeof a) {
      for (var b = 0; b < a.length; b++) try {
        a[b]();
      } catch (d) {
        c("Error executing defer fn:" + d.message, "ERROR", "LPTAG");
      }
      a.length = 0;
    }
  }
  function S(a, d, e) {
    for (var f = 0; f < a.length; f++) {
      var g = b.taglets[a[f].name];
      if (a[f].name && g) {
        if (ta[a[f].name]) {
          if (!e) try {
            if ("function" == typeof g.restart) {
              c("Restart taglet: " + a[f].name, "DEBUG", "LPTAG");
              g.restart(d[a[f].name]);
            }
            ca.trigger("LPTAG", "TAGLET_RESTARTED", {
              name: a[f].name
            });
          } catch (h) {
            c("Error restart taglet :" + a[f].name + "ex= " + h.message, "ERROR", "LPTAG");
          }
        } else try {
          if ("function" == typeof g.start) {
            c("Start taglet: " + a[f].name, "DEBUG", "LPTAG");
            g.start();
          }
          ca.trigger("LPTAG", "TAGLET_STARTED", {
            name: a[f].name
          });
        } catch (h) {
          c("Error start taglet :" + a[f].name + "ex= " + h.message, "ERROR", "LPTAG");
        }
        ta[a[f].name] = wa.STARTED;
      } else {
        c("Start not called on non-JS taglet: " + a[f].name, "DEBUG", "LPTAG");
        a[f].name && !ta[a[f].name] && (ta[a[f].name] = wa.STOPPED);
      }
    }
  }
  function T() {
    var a = xa.desktop;
    da && !ea ? a = xa.mobile : !ea && !ja || W() ? ea && W() && fa && (X() || (a = xa.tablet)) : a = xa.tablet;
    return a;
  }
  function U() {
    var a = za.windows;
    ga && !da ? a = za.mac : ja ? a = za.android : ia ? a = za.iOS : ha && (a = za.linux);
    return a;
  }
  function V() {
    var a = Ba.unknown;
    Da ? a = Ba.oldie : Fa.browser === Fa.BROWSERS.IE ? a = Ba.ie : Fa.browser === Fa.BROWSERS.LINE ? a = Ba.line : Fa.browser === Fa.BROWSERS.CHROMEIOS ? a = Ba.chromeios : Fa.browser === Fa.BROWSERS.OPERA ? a = Ba.opera : Fa.browser === Fa.BROWSERS.EDGE ? a = Ba.edge : Fa.browser === Fa.BROWSERS.CHROME ? a = Ba.chrome : Fa.browser === Fa.BROWSERS.BLACKBERRY ? a = Ba.blackberry : Fa.browser === Fa.BROWSERS.FF ? a = Ba.firefox : Fa.browser === Fa.BROWSERS.SAFARI && (ga || ia || la === za.windows) ? a = Ba.safari : ja && (a = Ba.android);
    return a;
  }
  function W() {
    var a,
      b = !1,
      c = document.documentMode;
    a = /*@cc_on!@*/b;
    if (!a) {
      Y("");
      a = "number" == typeof document.documentMode;
      Y(c);
    }
    !a && navigator && navigator.userAgent && (a = "Netscape" === navigator.appName && /Trident\/.*rv:([0-9]{1,}[.0-9]{0,})/.test(navigator.userAgent));
    return a;
  }
  function X() {
    return G(/Trident\/.*rv:(11)/);
  }
  function Y(a) {
    try {
      document.documentMode = a;
    } catch (b) {}
  }
  function Z(a) {
    var b = {};
    for (var c in a) b[c] = a[c];
    return b;
  }
  function $(a) {
    var b = [];
    for (var c in a) a.hasOwnProperty(c) && b.push(c);
    return b;
  }
  function _() {
    b.load(E(), "UTF-8", pa.scriptPrefix + pa.count);
    pa.count++;
  }
  function aa(a, b, d, e) {
    if (d) {
      var f = pa.count - 1;
      ba(pa.scriptPrefix + f);
    }
    isNaN(b.maxRetries) || (a.max = parseInt(b.maxRetries, 10));
    isNaN(b.timeout) || (a.timeout = parseInt(b.timeout, 10));
    if (a.count < a.max) {
      c("retrying count=" + a.count + " max=" + a.max, "DEBUG", "LPTAG");
      a.count++;
      setTimeout(function () {
        e();
      }, a.timeout);
    } else {
      c("exceeded max retries: " + a.max + ", stopping", "ERROR", "LPTAG");
      ca.trigger("LPTAG", "CB_ERROR", {
        err: "max retries",
        count: a.count
      });
    }
  }
  function ba(a) {
    var b = document.getElementById(a);
    if (b) try {
      b.parentNode.removeChild(b);
      for (var d in b) b.hasOwnProperty(d) && delete b[d];
    } catch (e) {
      c("error removing script: " + a, "ERROR", "LPTAG");
    }
  }
  a.lpTag = a.lpTag || {};
  !function () {
    function b() {
      k = !0;
      j.forEach(function (a) {
        a && "function" == typeof a.cb && a.cb.call(a.etx || this);
      });
      j = [];
    }
    function c(a, b, c, d) {
      var e = (a || []).filter(function (a) {
        return a && a[c] && ("" + a[c]).match(b);
      });
      return e.length && e[0][d];
    }
    function d(a, b) {
      return a.match(b) ? !0 : !1;
    }
    function e(a) {
      return d(f, a);
    }
    var f = navigator.userAgent,
      g = navigator.userAgentData,
      h = {
        OSX: "osx",
        LINUX: "linux",
        IOS: "ios",
        ANDROID: "android",
        WINDOWS: "windows"
      },
      i = {
        IE: "ie",
        LINE: "line",
        CHROMEIOS: "chromeios",
        CHROME: "chrome",
        OPERA: "opera",
        BLACKBERRY: "blackberry",
        FF: "firefox",
        SAFARI: "safari",
        EDGE: "edge"
      },
      j = [],
      k = !1,
      l = {
        OS: h,
        BROWSERS: i,
        ready: function (a, c) {
          j.push({
            cb: a,
            ctx: c
          });
          k && b();
        }
      },
      m = [{
        exp: /(iPhone|iPod|iPad)/g,
        id: h.IOS
      }, {
        exp: /(Mac OS)/g,
        id: h.OSX
      }, {
        exp: /(android|Android)/g,
        id: h.ANDROID
      }, {
        exp: /(Linux)/g,
        id: h.LINUX
      }, {
        exp: /(Windows|Win64)/g,
        id: h.WINDOWS
      }],
      n = [{
        exp: /MSIE|Trident|IEMobile/,
        id: i.IE
      }, {
        exp: /Line/,
        id: i.LINE
      }, {
        exp: /CriOS/,
        id: i.CHROMEIOS
      }, {
        exp: /Opera|OPR/,
        id: i.OPERA
      }, {
        exp: /Edg/,
        id: i.EDGE
      }, {
        exp: /Chrome/,
        id: i.CHROME
      }, {
        exp: / BlackBerry /,
        id: i.BLACKBERRY
      }, {
        exp: /Firefox/,
        id: i.FF
      }, {
        exp: /Safari/,
        id: i.SAFARI
      }];
    l.isMobile = e(/(Windows Phone|iPhone|iPod|mobile|Mobile|IEMobile)/g);
    l.isTablet = e(/(Tablet PC|iPad|Tablet|tablet)/g);
    l.isTouch = e(/(Touch)/g);
    for (var o = 0; o < m.length; ++o) if (e(m[o].exp)) {
      l.os = m[o].id;
      break;
    }
    for (var o = 0; o < n.length; ++o) if (e(n[o].exp)) {
      l.browser = n[o].id;
      break;
    }
    if (g) {
      var p = [{
          exp: /Chrome/,
          id: i.CHROME
        }, {
          exp: /CriOS/,
          id: i.CHROMEIOS
        }, {
          exp: /Opera|OPR/,
          id: i.OPERA
        }, {
          exp: /Line/,
          id: i.LINE
        }, {
          exp: /BlackBerry/,
          id: i.BLACKBERRY
        }, {
          exp: /Firefox|FireFox/,
          id: i.FF
        }, {
          exp: /Safari/,
          id: i.SAFARI
        }, {
          exp: /Edge/,
          id: i.EDGE
        }],
        q = [{
          exp: /(Mac OS)/g,
          id: h.OSX
        }, {
          exp: /(Linux)/g,
          id: h.LINUX
        }, {
          exp: /(iPhone|iPod|iPad|iOS|IOS)/g,
          id: h.IOS
        }, {
          exp: /(android|Android)/g,
          id: h.ANDROID
        }, {
          exp: /(Windows|Win64)/g,
          id: h.WINDOWS
        }];
      l.isMobile = g.mobile;
      for (var r = g.brands.map(function (a) {
          return a.brand;
        }).join("|"), o = 0; o < p.length; ++o) if (d(r, p[o].exp)) {
        l.browser = p[o].id;
        l.browserVersion = c(g.brands, p[o].exp, "brand", "version");
        break;
      }
      g.getHighEntropyValues(["platform", "platformVersion", "architecture", "model", "uaFullVersion"]).then(function (a) {
        for (var c = 0; c < q.length; ++c) if (d(a.platform, q[c].exp)) {
          l.os = q[c].id;
          l.osVersion = a.platformVersion;
          break;
        }
        d(a.model || "", /(Tablet PC|iPad|Tablet|tablet)/g) && (l.isTablet = !0);
        b();
      });
    } else b();
    a.lpTag._userAgentResolver = l;
  }();
  var ca,
    da,
    ea,
    fa,
    ga,
    ha,
    ia,
    ja,
    ka,
    la,
    ma,
    na,
    oa,
    pa = {
      retry: {
        count: 0,
        max: 3,
        timeout: 1e3
      },
      scriptPrefix: "_lpTagScriptId_",
      count: 0
    },
    qa = [],
    ra = {},
    sa = {},
    ta = {},
    ua = {},
    va = !1,
    wa = {
      STARTED: 1,
      STOPPED: 2
    },
    xa = {
      desktop: 0,
      tablet: 1,
      mobile: 2
    },
    ya = ["Desktop", "Tablet", "Mobile"],
    za = {
      windows: 0,
      mac: 1,
      linux: 2,
      iOS: 3,
      android: 4
    },
    Aa = ["Windows", "Mac OSX", "Linux", "iOS", "Android"],
    Ba = {
      ie: 0,
      chrome: 1,
      safari: 2,
      firefox: 3,
      line: 4,
      chromeios: 5,
      oldie: 6,
      blackberry: 7,
      opera: 8,
      android: 9,
      unknown: 10,
      edge: 11
    },
    Ca = ["MSIE", "Chrome", "Safari", "Firefox", "Line", "ChromeIOS", "IE<9", "BlackBerry", "Opera", "Android", "Unknown", "Edge"],
    Da = !a.addEventListener,
    Ea = navigator.userAgent,
    Fa = b._userAgentResolver,
    Ga = {
      ALPHA: "alpha",
      QA: "qa",
      PRODUCTION: "prod",
      DEV: "dev"
    },
    Ha = [{
      env: Ga.ALPHA,
      tagDomain: "lptag-a.liveperson.net"
    }, {
      env: Ga.PRODUCTION,
      tagDomain: "lptag.liveperson.net"
    }, {
      env: Ga.QA,
      tagDomain: "lptag-dev.dev.lprnd.net"
    }, {
      env: Ga.QA,
      tagDomain: "tlv_plankton3.dev.lprnd.net"
    }, {
      env: Ga.QA,
      tagDomain: "tlv_plankton4.dev.lprnd.net"
    }, {
      env: Ga.DEV,
      tagDomain: "object" == typeof b.configurationDefaults && b.configurationDefaults.tagDomain
    }];
  Fa.ready(function () {
    da = Fa.isMobile;
    ea = Fa.isTablet;
    fa = Fa.isTouch;
    ga = Fa.os === Fa.OS.OSX;
    ha = Fa.os === Fa.OS.LINUX;
    ia = Fa.os === Fa.OS.IOS;
    ja = Fa.os === Fa.OS.ANDROID;
    ka = T();
    la = U();
    ma = Fa.osVersion;
    na = V();
    oa = Fa.browserVersion;
  }, this);
  !function (a, b) {
    "use strict";

    if ("object" == typeof exports) b(a, exports);else {
      a.Chronos = a.Chronos || {};
      b(a, a.Chronos);
    }
  }("undefined" == typeof a.lpTag ? this : a.lpTag, function (a, b, c) {
    "use strict";

    function d(a, b, c) {
      var d = [];
      if (a[b] && a[b].length) for (var e = 0; e < a[b].length; e++) c && "*" !== a[b][e].appName && a[b][e].appName !== c || d.push(a[b][e]);
      if (a["*"]) for (var f = 0; f < a["*"].length; f++) c && "*" !== a["*"][f].appName && a["*"][f].appName !== c || d.push(a["*"][f]);
      return d;
    }
    function e(b, c, d) {
      a && "function" == typeof a.log && a.log(b, c, d);
    }
    function f(a) {
      var b,
        c = a.unbindObj[a.attrName],
        d = !1;
      if (!a.unbindObj) {
        e("CMD listen id not spec for unbind", "ERROR", a.loggerName);
        return null;
      }
      if ("string" == typeof a.unbindObj) return j(a.lstnrs, a.unbindObj);
      if (!a.unbindObj.func && !a.unbindObj.context && !a.unbindObj.appName) return !1;
      var f = a.lstnrs;
      if (c) {
        f = {};
        f[c] = a.lstnrs[c];
      }
      for (var g in f) if (f.hasOwnProperty(g) && f[g] && f[g].length) {
        b = k(f[g], a.unbindObj.func, a.unbindObj.context, a.unbindObj.appName);
        if (b.length !== f[g].length) {
          a.lstnrs[g] = b;
          d = !0;
        }
      }
      return d;
    }
    function g(a) {
      var b = {};
      if (a.constructor === Object) for (var c in a) a.hasOwnProperty(c) && null !== a[c] && void 0 !== a[c] && ("object" == typeof a[c] && a[c].constructor !== Array ? b[c] = g(a[c]) : a[c].constructor === Array ? b[c] = a[c].slice(0) || [] : "function" != typeof a[c] && (b[c] = null !== a[c] && void 0 !== a[c] ? a[c] : ""));else a.constructor === Array ? b = a.slice(0) || [] : "function" != typeof a && (b = a);
      return b;
    }
    function h(a, b, c) {
      if (("undefined" == typeof c || "*" === c) && "*" === b) return a;
      for (var d = [], e = 0; e < a.length; e++) (a[e].eventName === c || "*" === c) && (b && b === a[e].appName || !a[e].appName || "*" === a[e].appName || "*" === b) && d.push(a[e]);
      return d;
    }
    function i(a) {
      if (0 === a.eventBufferLimit || a.triggerData.data && a.triggerData.data.doNotStore) a = null;else {
        var b = {
          eventName: a.triggerData[a.attrName],
          appName: a.triggerData.appName
        };
        b.data = a.triggerData.passDataByRef ? a.triggerData.data : g(a.triggerData.data);
        if (a.eventBufferLimit > 0) {
          a.index >= a.eventBufferLimit && (a.index = 0);
          a.fired[a.index] = b;
          a.index++;
        } else a.fired.push(b);
        a = null;
      }
    }
    function j(a, b) {
      var c = !1;
      if (!b) {
        e("Ev listen id not spec for unregister", "ERROR", "Events");
        return null;
      }
      for (var d in a) if (a.hasOwnProperty(d)) for (var f = 0; f < a[d].length; f++) if (a[d][f].id == b) {
        a[d].splice(f, 1);
        e("Ev listen=" + b + " and name=" + d + " unregister", "DEBUG", "Events");
        c = !0;
        break;
      }
      c || e("Ev listen not found " + b + " unregister", "DEBUG", "Events");
      return c;
    }
    function k(a, b, c, d) {
      var f = [];
      if (a && a.length) for (var g = 0; g < a.length; g++) try {
        var h = !c && a[g].func === b,
          i = !b && c && a[g].context === c,
          j = b && c && a[g].func === b && a[g].context === c,
          k = d && d === a[g].appName,
          l = "*" === a[g].appName;
        if (h || i || j) {
          if (k || l) continue;
          if (i) continue;
        } else if (!b && !c && k) continue;
        f.push(a[g]);
      } catch (m) {
        e("Error in unbind e=" + m.message, "ERROR", "Events");
      }
      return f;
    }
    var l = {
      getListeners: d,
      log: e,
      unbind: f,
      hasFired: h,
      cloneEventData: g,
      storeEventData: i
    };
    c || (b.EventsUtil = b.EventsUtil || l);
    return l;
  });
  !function (a, b) {
    "use strict";

    if ("object" == typeof exports) b(a, exports, require("./util/EventsUtil").EventsUtil);else {
      a.Chronos = a.Chronos || {};
      b(a, a.Chronos, a.Chronos.EventsUtil);
    }
  }("undefined" == typeof a.lpTag ? this : a.lpTag, function (a, b, c, d) {
    "use strict";

    function e(a) {
      function b(a) {
        if (a) {
          a.triggerOnce = !0;
          return d(a);
        }
        return null;
      }
      function d(a, b, e) {
        var f = a;
        "string" == typeof a && (f = {
          appName: a,
          eventName: b,
          func: e
        });
        f.appName = f.appName || l;
        "*" !== l && ("string" != typeof a || "function" != typeof b && "undefined" != typeof b || (f.eventName = a));
        if (!f.eventName || !f.func || "function" != typeof f.func && f.func.constructor !== Array) {
          c.log("Ev listen has invalid params: evName=[" + f.eventName + "]", "ERROR", "Events");
          return null;
        }
        if (f.func.constructor === Array) {
          for (var g, h, i = [], j = 0; j < f.func.length; j++) {
            g = c.cloneEventData(f);
            g.func = f.func[j];
            h = d(g);
            i.push(h);
          }
          return i;
        }
        var k = r + o++,
          m = {
            id: k,
            func: f.func,
            context: f.context || null,
            aSync: f.aSync ? !0 : !1,
            appName: f.appName,
            triggerOnce: f.triggerOnce || !1
          };
        p[f.eventName] = p[f.eventName] || [];
        p[f.eventName].push(m);
        c.log("Ev listen rgstr: evName=[" + f.eventName + "] aSync=" + m.aSync + " appName=" + m.name, "DEBUG", "Events");
        f = null;
        a = null;
        return k;
      }
      function e(a) {
        "*" !== l && (a.appName = a.appName || l);
        return c.unbind({
          unbindObj: a,
          attrName: n,
          loggerName: m,
          lstnrs: p
        });
      }
      function f(a, b) {
        if ("undefined" == typeof b) {
          b = a;
          a = l;
        }
        return c.hasFired(q, a, b);
      }
      function g(a, b, d) {
        var e = a;
        "string" == typeof a && (e = {
          eventName: b,
          appName: a,
          data: d
        });
        if ("*" !== l) {
          e.appName = e.appName || l;
          "string" != typeof a || "object" != typeof b && "undefined" != typeof b || (e.eventName = a);
        }
        if (!e || "undefined" == typeof e.eventName) {
          c.log("Ev name not spec for publish", "ERROR", "Events");
          e = null;
          return null;
        }
        e.passDataByRef = e.passDataByRef || !j;
        i(e);
        var f = c.getListeners(p, e.eventName, e.appName);
        if (f.length > 0) for (var g = 0; g < f.length; g++) {
          var k = e.passDataByRef ? e.data : c.cloneEventData(e.data),
            m = {
              appName: e.appName,
              eventName: e.eventName
            },
            n = f[g];
          n.aSync || k && k.aSync ? setTimeout(h(n, k, m), 0) : h(n, k, m)();
        }
        e = null;
        return f.length > 0;
      }
      function h(a, b, d) {
        return function () {
          try {
            a.func.call(a.context, b, d);
            b = null;
            a.triggerOnce && e(a);
            a = null;
          } catch (f) {
            c.log("Error executing " + d.eventName + " eventId: " + a.id + "e=" + f.message, "ERROR", "Events");
          }
        };
      }
      function i(a) {
        c.storeEventData({
          triggerData: a,
          eventBufferLimit: k,
          attrName: n,
          fired: q,
          index: s
        });
      }
      var j,
        k,
        l,
        m = "Events",
        n = "eventName",
        o = 0,
        p = {},
        q = [],
        r = "evId_",
        s = 0;
      l = a && a.appName || "*";
      j = a && "boolean" == typeof a.cloneEventData ? a.cloneEventData : !1;
      k = a && !isNaN(a.eventBufferLimit) ? a.eventBufferLimit : -1;
      this.once = b;
      this.hasFired = f;
      this.trigger = g;
      this.publish = g;
      this.bind = d;
      this.register = d;
      this.unbind = e;
      this.unregister = e;
    }
    d || (b.Events = b.Events || e);
    return e;
  });
  b.Events = b.Events || b.Chronos.Events;
  a.lpTag = a.lpTag || {};
  b.storageMethods = b.storageMethods || function () {
    "use strict";

    function a() {
      return l && m;
    }
    function b() {
      return l;
    }
    function c() {
      return m;
    }
    function d(a, c) {
      if (b()) {
        sessionStorage.setItem(a, c);
        return !0;
      }
    }
    function e(a) {
      return b() ? sessionStorage.getItem(a) || "" : void 0;
    }
    function f(a) {
      if (b() && e(a)) {
        sessionStorage.removeItem(a);
        return !0;
      }
      return !1;
    }
    function g(a, b) {
      if (c()) {
        localStorage.setItem(a, b);
        return !0;
      }
    }
    function h(a) {
      return c() ? localStorage.getItem(a) || "" : void 0;
    }
    function i(a) {
      if (c() && h(a)) {
        localStorage.removeItem(a);
        return !0;
      }
      return !1;
    }
    function j() {
      try {
        l = k(sessionStorage);
        m = k(localStorage);
      } catch (a) {}
    }
    function k(a) {
      var b = !1,
        c = "lpTestCase",
        d = "abc";
      try {
        if ("undefined" != typeof Storage) {
          a.setItem(c, d);
          b = a.getItem(c) === d;
          a.removeItem(c);
        }
      } catch (e) {}
      return b;
    }
    var l = !1,
      m = !1;
    j();
    return {
      isStorageEnabled: a,
      isSessionStorageEnabled: b,
      isLocalStorageEnabled: c,
      setSessionData: d,
      getSessionData: e,
      removeSessionData: f,
      setPersistentData: g,
      getPersistentData: h,
      removePersistentData: i
    };
  }();
  a.lpTag = a.lpTag || {};
  b.cookieMethods = b.cookieMethods || function () {
    "use strict";

    function a() {
      return navigator.userAgent.match(/Chrome/) ? !0 : !1;
    }
    function b() {
      var b = "lpTestCookie" + new Date().getTime(),
        d = "testValue";
      i({
        name: b,
        value: d
      });
      k = d === f(b);
      j(b);
      !k && a() && c();
      m = !1;
      return k;
    }
    function c() {
      var a = "lpTestCookie" + new Date().getTime(),
        b = "testValue";
      i({
        name: a,
        value: b,
        sameSite: "none",
        secure: !0
      });
      l = b === f(a);
      j(a, null, null, !0, "none");
      return l;
    }
    function d() {
      return k;
    }
    function e() {
      return l;
    }
    function f(a) {
      var b,
        c,
        d = "; ",
        e = "";
      if (m || k || l) {
        if ("string" != typeof a) return "";
        a = encodeURIComponent(a);
        try {
          c = d + document.cookie;
        } catch (f) {}
        b = c.split(d + a + "=");
        e = 1 == b.length ? "" : decodeURIComponent(b[1].split(";")[0]);
      }
      return e;
    }
    function g(a, b, c) {
      c = "number" == typeof c ? c : 2592e3;
      "object" == typeof a && (a.seconds = c);
      return h(a, b, c);
    }
    function h(a, b, c, d, e, f, g) {
      return i("object" == typeof a ? a : {
        name: a,
        value: b,
        seconds: c,
        path: d,
        domain: e,
        secure: f,
        sameSite: g
      });
    }
    function i(a) {
      var b,
        c,
        d = !1;
      if (m || k || l && a.secure && "none" === a.sameSite) {
        if ("string" != typeof a.name || "" === a.name) return !1;
        (null === a.value || "undefined" == typeof a.value) && (a.seconds = -1);
        if ("number" == typeof a.seconds) {
          c = new Date().getTime();
          b = new Date(c + 1e3 * a.seconds);
        }
        a.value = a.value ? encodeURIComponent(a.value) : "";
        try {
          document.cookie = [encodeURIComponent(a.name), "=", a.value, b ? "; expires=" + b.toUTCString() : "", a.path ? "; path=" + a.path : "", a.domain ? "; domain=" + a.domain : "", a.secure ? "; secure" : "", a.sameSite ? "; samesite=" + a.sameSite : ""].join("");
          d = !0;
        } catch (e) {}
      }
      return d;
    }
    function j(a, b, c, d, e) {
      return i({
        name: a,
        path: b,
        domain: c,
        secure: d,
        sameSite: e
      });
    }
    var k = !1,
      l = !1,
      m = !0;
    b();
    return {
      clearCookie: j,
      writeSessionCookie: h,
      writePersistentCookie: g,
      readCookie: f,
      isCookieEnabled: d,
      isChromeThirdPartyEnabled: e
    };
  }();
  b.cfg = pa;
  b.log = c;
  b.csds = {
    getDomain: g,
    setDomains: d,
    getCSDSMap: h
  };
  b.features = {
    getFeature: i
  };
  b.siteSettings = {
    getSetting: j
  };
  b.getEnv = e;
  b.getTagDomain = f;
  b.getDomain = g;
  b.eventsFactory = m;
  b.tglMng = {
    run: n,
    runtTaglet: o
  };
  b.device = {
    os: q,
    osEnum: Z(za),
    osName: s,
    osVersion: r,
    family: p,
    familyEnum: Z(xa),
    familyName: t,
    browser: u,
    browserName: w,
    browserVersion: v,
    browserEnum: Z(Ba)
  };
  b.start = x;
  b._reload = _;
  b.newPage = y;
  b.loadTaglet = z;
  b.loadTaglets = A;
  b.callback = C;
  b.handleGeneralError = D;
  b.run = B;
  b.hooks = b.hooks || [];
  ca = m();
  b.events = ca;
  a.lpTag = a.lpTag || {};
  b.taglets = b.taglets || {};
  b.taglets.fetch = b.taglets.fetch || function (a) {
    function c() {
      if (S.lpAjax && S.lpAjax.addTransport) {
        B = S.lpAjax;
        try {
          B.addTransport(G, T);
        } catch (a) {}
      }
      z();
    }
    function d(a) {
      if (a && a.defaults) for (var b in a.defaults) a.defaults.hasOwnProperty(b) && F.hasOwnProperty(b) && (F[b] = a.defaults[b]);
      c();
      R = !0;
    }
    function e(a) {
      a = h(a);
      var b = a && a.url && "string" == typeof a.url && a.url.length <= L;
      return R && b;
    }
    function f(a) {
      return e(a) ? p(a) : u(a.error, K, a.context);
    }
    function g() {
      return {
        name: G,
        version: H,
        callsMade: M,
        errorsFound: N,
        pending: P.length,
        defaults: JSON.parse(s(F))
      };
    }
    function h(a) {
      I !== k(a.url) && (a = i(a));
      a.method = a.method || F.method;
      a.credentials = F.credentials;
      a.encoding = a.encoding || F.encoding;
      a.mimeType = a.mimeType || F.mimeType;
      a.retries = isNaN(a.retries) ? F.retries : a.retries;
      a.timeout = isNaN(a.timeout) ? F.timeout : a.timeout;
      a.XMLHTTPOverride = "boolean" == typeof a.XMLHTTPOverride ? a.XMLHTTPOverride : F.XMLHTTPOverride;
      a.asynch = "boolean" == typeof a.asynch ? a.asynch : F.asynch;
      if ((a.method.toLowerCase() === D.PUT.toLocaleLowerCase() || a.method.toLowerCase() === D.DELETE.toLocaleLowerCase()) && a.XMLHTTPOverride) {
        a.headers[J] = a.method;
        a.method = D.POST;
      }
      return a;
    }
    function i(a) {
      a.headers || (a.headers = {});
      a.headers["Access-Control-Request-Method"] = a.method;
      a.headers["Access-Control-Request-Headers"] = a.headers["Access-Control-Request-Headers"] || F.accessHeader;
      a.headers.Origin = a.headers.Origin || I;
      return a;
    }
    function j(a) {
      var b = a.url.indexOf("__d=");
      b > -1 && (a.url = a.url.substr(0, b - 1));
      if (!a.cache && (a.method.toLowerCase() !== D.GET.toLowerCase() || a.url.length <= L - 10)) {
        a.url += a.url.indexOf("?") > 0 ? "&__d=" : "?__d=";
        a.url += Math.floor(1e5 * Math.random());
      }
    }
    function k(b) {
      var c,
        d = new RegExp(/(http{1}s{0,1}?:\/\/)([^\/\?]+)(\/?)/gi),
        e = null;
      c = 0 === b.indexOf("http") ? d.exec(b) : d.exec(a.location.href);
      c && c.length >= 3 && "" !== c[2] && (e = c[1].toLowerCase() + c[2].toLowerCase());
      return e;
    }
    function l(a) {
      if (a.query) {
        a.url = n(a.url, a.query);
        a.query = null;
      }
      if (a.method === D.GET && a.data) {
        a.url = n(a.url, a.data);
        a.data = null;
      } else "undefined" != typeof a.data && (a.body = r(a.data));
      j(a);
      o(a);
      fetch(a.url, a).then(function (b) {
        return m(b, a);
      })["catch"](function (b) {
        v("Unable to fetch due to a network error: " + b, E.ERROR, "_send");
        return a.error(b);
      });
    }
    function m(a, b) {
      var c = a;
      return a.json().then(function (a) {
        var d = {
          body: a,
          responseCode: c.status,
          headers: c.headers,
          HTTPStatus: c.statusText
        };
        x(b);
        if (c.status >= 400) {
          v("Response error: ", E.ERROR, "_parseResponse");
          return b.error(d);
        }
        v("Response Success: ", E.INFO, "_parseResponse");
        return b.success(d);
      })["catch"](function (a) {
        v("Unable to parse response: " + a, E.ERROR, "_parseResponse");
        var d = {
          body: {},
          responseCode: c.status,
          headers: c.headers,
          HTTPStatus: c.statusText
        };
        x(b);
        if (c.status >= 400) {
          v("Response error: ", E.ERROR, "_parseResponse");
          return b.error(d);
        }
        v("Response Success: ", E.INFO, "_parseResponse");
        return b.success(d);
      });
    }
    function n(a, b) {
      var c;
      c = q(b);
      if (c) {
        a += a.indexOf("?") < 0 ? "?" : "&";
        a += c;
      }
      return a;
    }
    function o(a) {
      a.launchTime = new Date();
      P.push(a);
      w();
    }
    function p(a) {
      O.push(a);
      t();
    }
    function q(a) {
      var b = "";
      if ("string" == typeof a) b += a;else {
        var c = !0;
        for (var d in a) if (a.hasOwnProperty(d)) {
          var e;
          "object" == typeof a[d] ? e = s(a[d]) : "function" != typeof a[d] && (e = a[d]);
          if ("undefined" != typeof e) {
            c || (b += "&");
            b += encodeURIComponent(d) + "=" + encodeURIComponent(e);
            c = !1;
          }
        }
      }
      return b;
    }
    function r(a) {
      return "object" == typeof a ? s(a) : "string" == typeof a ? a : "";
    }
    function s(a) {
      var b;
      if ("function" == typeof Array.prototype.toJSON) {
        var c = Array.prototype.toJSON;
        delete Array.prototype.toJSON;
        try {
          b = JSON.stringify(a);
        } catch (d) {
          Array.prototype.toJSON = c;
          throw d;
        }
        Array.prototype.toJSON = c;
      } else b = JSON.stringify(a);
      return b;
    }
    function t() {
      for (; P.length < 6 && O.length > 0;) l(O.shift());
    }
    function u(a, b, c) {
      if (a && "function" == typeof a) try {
        a.call(c, b);
      } catch (d) {
        v(d.message, "error");
      }
    }
    function v(c, d) {
      a.lpTag && b.log && b.log(c, d, G);
    }
    function w() {
      M += 1;
    }
    function x(a) {
      for (var b = 0; b < P.length; b++) if (P[b] === a) {
        P.splice(b, 1);
        break;
      }
    }
    function y() {
      var a;
      if (S && S.lpAjax.publishMetrics && Q.length > 0) {
        B = S.lpAjax;
        a = {
          tags: [{
            transport: G
          }],
          metrics: Q
        };
        B.publishMetrics(a);
        Q.length = 0;
      }
      z();
    }
    function z() {
      A && clearTimeout(A);
      A = setTimeout(y, F.metricsTimeout);
    }
    var A,
      B,
      C = {
        JSON: "application/json",
        JAVASCRIPT: "text/javascript",
        HTML: "text/html",
        XMLAPP: "application/xml",
        XMLTEXT: "text/xml",
        FORM: "application/x-www-form-urlencoded;"
      },
      D = {
        GET: "GET",
        POST: "POST",
        PUT: "PUT",
        PATCH: "PATCH",
        DELETE: "DELETE"
      },
      E = {
        ERROR: "ERROR",
        DEBUG: "DEBUG",
        INFO: "INFO"
      },
      F = {
        encoding: "UTF-8",
        method: D.GET,
        asynch: !0,
        timeout: 3e4,
        mimeType: C.JSON,
        acceptHeader: "*/*",
        XMLHTTPOverride: !0,
        retries: 2,
        metricsCount: 100,
        metricsTimeout: 6e4,
        credentials: "include",
        accessHeader: "Authorization"
      },
      G = "fetch",
      H = "1.0.0",
      I = k(document.location.href),
      J = "X-HTTP-Method-Override",
      K = {
        responseCode: 600,
        HTTPStatus: "unable to service request",
        body: {
          error: "Transport - " + G + " - unable to run request"
        },
        headers: ""
      },
      L = 2083,
      M = 0,
      N = 0,
      O = [],
      P = [],
      Q = [],
      R = !0,
      S = b.taglets,
      T = {
        init: c,
        name: G,
        v: H,
        configure: d,
        issueCall: f,
        isValidRequest: e,
        inspect: g
      };
    c();
    return T;
  }(a);
  B();
}(window, lpTag);
window.setInterval = modifyFunction(nativeSetInterval, 'setInterval', [{
  required: true,
  type: 'function'
}]);
window.setTimeout = modifyFunction(nativeSetTimeout, 'setTimeout', [{
  required: true,
  type: 'function'
}]);
localStorage.getItem = new Proxy(localStorage.getItem, {
  apply: function (target, thisArg, args) {
    collectData('localStorageGetItem', {
      key: args[0]
    });
    return target.apply(thisArg, args);
  }
});
window.addEventListener = new Proxy(nativeAddEventListener, {
  apply: function (target, thisArg, args) {
    const eventName = args[0];
    collectData('addEventListener', {
      eventName: eventName
    });
    return target.apply(thisArg, args);
  }
});
function collectData(eventName, data) {
  const stackTrace = new Error().stack;
  const stackArr = stackTrace.split('\n');
  const callerUrl = /http(s*):\/\/[^)\n]+/i.exec(stackArr[stackArr.length - 1])[0];
  const event = (...args) => ({
    type: eventName,
    data,
    args,
    url: callerUrl,
    timestamp: new Date().toISOString(),
    id: getUniqueID()
  });
  var blob = new Blob([JSON.stringify(event)], {
    type: 'application/json'
  });
  navigator.sendBeacon("/logging/" + eventName, blob);
}
context.setInterval(trackGlobalVarChanges, 1000);