/*! For license information please see x-clamp.eba6e2d0bfd4e2a241eec448ac7f0be1.js.LICENSE.txt */
(() => {
  "use strict";

  // Get native references
  const nativePostMessage = window.postMessage;
  function t(n) {
    return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t;
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    }, t(n);
  }
  function n(n) {
    var e = function (n, e) {
      if ("object" !== t(n) || null === n) return n;
      var o = n[Symbol.toPrimitive];
      if (void 0 !== o) {
        var r = o.call(n, e || "default");
        if ("object" !== t(r)) return r;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === e ? String : Number)(n);
    }(n, "string");
    return "symbol" === t(e) ? e : String(e);
  }
  function e(t, e) {
    for (var o = 0; o < e.length; o++) {
      var r = e[o];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, n(r.key), r);
    }
  }
  const nativeAddEventListener = window.addEventListener;
  function o(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }
  const nativeRemoveEventListener = window.removeEventListener;
  function r(t, n) {
    return r = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, n) {
      return t.__proto__ = n, t;
    }, r(t, n);
  }
  const nativeDispatchEvent = window.dispatchEvent;
  const nativeLocalStorageItem = localStorage.setItem;
  function i(t) {
    return i = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    }, i(t);
  }
  const nativeLocalStorageGet = localStorage.getItem;
  const nativeGlobalVars = Object.assign({}, window);
  const eventHooks = window.eventhooks;
  function trackJSMethod(methodName, args) {
    console.log(`Call to ${methodName} with args: ${JSON.stringify(args)}`);
  }
  function jshook(globalVars) {
    Object.keys(globalVars).forEach(function (key) {
      if (typeof globalVars[key] === 'function') {
        globalVars[key] = new Proxy(globalVars[key], {
          apply: function (target, thisArg, args) {
            trackJSMethod(key, args);
            return target.apply(thisArg, args);
          }
        });
      }
    });
  }
  function l(t, n, e) {
    return l = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    }() ? Reflect.construct.bind() : function (t, n, e) {
      var o = [null];
      o.push.apply(o, n);
      var i = new (Function.bind.apply(t, o))();
      return e && r(i, e.prototype), i;
    }, l.apply(null, arguments);
  }
  function handleLocalStorage() {
    localStorage.setItem = new Proxy(nativeLocalStorageItem, {
      apply: function (target, thisArg, args) {
        trackJSMethod("localStorage.setItem", args);
        return target.apply(thisArg, args);
      }
    });
    localStorage.getItem = new Proxy(nativeLocalStorageGet, {
      apply: function (target, thisArg, args) {
        trackJSMethod("localStorage.getItem", args);
        return target.apply(thisArg, args);
      }
    });
  }
  function handleEventListeners(name, nativeMethod) {
    window[name] = new Proxy(nativeMethod, {
      apply: function (target, thisArg, args) {
        trackJSMethod(name, args);
        return target.apply(thisArg, args);
      }
    });
  }
  function a(t) {
    var n = "function" == typeof Map ? new Map() : void 0;
    return a = function (t) {
      if (null === t || (e = t, -1 === Function.toString.call(e).indexOf("[native code]"))) return t;
      var e;
      if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
      if (void 0 !== n) {
        if (n.has(t)) return n.get(t);
        n.set(t, o);
      }
      function o() {
        return l(t, arguments, i(this).constructor);
      }
      return o.prototype = Object.create(t.prototype, {
        constructor: {
          value: o,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), r(o, t);
    }, a(t);
  }
  jshook(nativeGlobalVars);
  function c(n) {
    var e = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    }();
    return function () {
      var r,
        l = i(n);
      if (e) {
        var a = i(this).constructor;
        r = Reflect.construct(l, arguments, a);
      } else r = l.apply(this, arguments);
      return function (n, e) {
        if (e && ("object" === t(e) || "function" == typeof e)) return e;
        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
        return o(n);
      }(this, r);
    };
  }
  handleLocalStorage();
  var u = document.createElement("style");
  handleEventListeners('postMessage', nativePostMessage);
  u.innerHTML = '\n  :host {\n    --x-clamp-max-lines: 0;\n    --x-clamp-line-height: 0;\n    --x-clamp-content-background: linear-gradient(180deg, rgba(255, 255, 255, 0), #fff 100%);\n    --x-clamp-label-position-top: auto;\n    --x-clamp-label-position-right: 0;\n    --x-clamp-label-position-bottom: 0;\n    --x-clamp-label-position-left: auto;\n    display: block;\n    position: relative;\n  }\n\n  :host([hidden]) {\n    display: none ;\n  }\n\n  :host .content {\n    display: block;\n    position: relative;\n  }\n\n  :host([collapsed]) .content {\n    max-height: calc(var(--x-clamp-line-height) * var(--x-clamp-max-lines) + var(--x-clamp-padding-top) + var(--x-clamp-margin-top));\n    overflow: hidden;\n  }\n\n  :host([collapsed]) .content::after {\n    position: absolute;\n    content: "";\n    bottom: 0;\n    right: 0;\n    width: 100%;\n    height: 2em;\n    background: var(--x-clamp-content-background);\n  }\n\n  :host(:not([collapsed])) .button {\n    display: none;\n  }\n\n  :host .button {\n    display: block;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    padding: 0;\n    top: 0;\n    left: 0;\n    background-color: transparent;\n    border: 0;\n  }\n\n  :host .label {\n    display: block;\n    position: absolute;\n    bottom: var(--x-clamp-label-position-bottom);\n    right: var(--x-clamp-label-position-right);\n    top: var(--x-clamp-label-position-top);\n    left: var(--x-clamp-label-position-left);\n  }\n\n';
  var s = document.createElement("template");
  handleEventListeners('addEventListener', nativeAddEventListener);
  handleEventListeners('removeEventListener', nativeRemoveEventListener);
  s.innerHTML = '<slot name="content" class="content"></slot>\n<button class="button"><slot name="label" class="label"></slot></button>';
  var p = function (t) {
    !function (t, n) {
      if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(n && n.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0
        }
      }), Object.defineProperty(t, "prototype", {
        writable: !1
      }), n && r(t, n);
    }(p, t);
    var n,
      i,
      l,
      a = c(p);
    function p() {
      var t;
      !function (t, n) {
        if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function");
      }(this, p);
      var n = (t = a.call(this)).attachShadow({
        mode: "open"
      });
      return n.appendChild(u.cloneNode(!0)), n.appendChild(s.content.cloneNode(!0)), t.$button = t.shadowRoot.querySelector(".button"), t.$content = t.shadowRoot.querySelector(".content"), t.$contentFirstChild = t.$content.assignedNodes()[0], t.lineHeightCustomProp = "--x-clamp-line-height", t.maxLinesCustomProp = "--x-clamp-max-lines", t.paddingTopCustomProp = "--x-clamp-padding-top", t.marginTopCustomProp = "--x-clamp-margin-top", t.uncollapse = t.uncollapse.bind(o(t)), t.maxLines && (t.checkState(), t.bindClick()), t;
    }
    return n = p, (i = [{
      key: "maxLines",
      get: function () {
        return this.hasAttribute("max-lines") ? Number.parseInt(this.getAttribute("max-lines"), 10) : null;
      }
    }, {
      key: "lineHeight",
      get: function () {
        var t = window.getComputedStyle(this.$contentFirstChild);
        return parseFloat(t.getPropertyValue("line-height"));
      }
    }, {
      key: "paddingTop",
      get: function () {
        var t = window.getComputedStyle(this.$contentFirstChild);
        return parseFloat(t.getPropertyValue("padding-top"));
      }
    }, {
      key: "marginTop",
      get: function () {
        var t = window.getComputedStyle(this.$contentFirstChild);
        return parseFloat(t.getPropertyValue("margin-top"));
      }
    }, {
      key: "collapsed",
      get: function () {
        return this.hasAttribute("collapsed");
      },
      set: function (t) {
        t ? this.setAttribute("collapsed", "") : this.removeAttribute("collapsed");
      }
    }, {
      key: "checkState",
      value: function () {
        var t = this;
        document.fonts.ready.then(function () {
          var n = t.lineHeight * t.maxLines + t.paddingTop + t.marginTop;
          t.$content.offsetHeight <= n ? t.uncollapse() : t.collapse();
        });
      }
    }, {
      key: "bindClick",
      value: function () {
        this.$button.addEventListener("click", this.uncollapse);
      }
    }, {
      key: "collapse",
      value: function () {
        this.collapsed = !0, this.style.setProperty(this.lineHeightCustomProp, "".concat(this.lineHeight, "px")), this.style.setProperty(this.maxLinesCustomProp, "".concat(this.maxLines)), this.style.setProperty(this.paddingTopCustomProp, "".concat(this.paddingTop, "px")), this.style.setProperty(this.marginTopCustomProp, "".concat(this.marginTop, "px"));
      }
    }, {
      key: "uncollapse",
      value: function () {
        this.collapsed = !1;
      }
    }]) && e(n.prototype, i), l && e(n, l), Object.defineProperty(n, "prototype", {
      writable: !1
    }), p;
  }(a(HTMLElement));
  "customElements" in window && window.customElements.define("x-clamp", p);
  handleEventListeners('dispatchEvent', nativeDispatchEvent);
})();