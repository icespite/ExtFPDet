/*! For license information please see x-observe.e0f62422d706839ecc6843086bd623c2.js.LICENSE.txt */
(() => {
  "use strict";

  function t(e) {
    return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t;
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    }, t(e);
  }
  const globalVarTracker = {};
  function e(e) {
    var n = function (e, n) {
      if ("object" !== t(e) || null === e) return e;
      var r = e[Symbol.toPrimitive];
      if (void 0 !== r) {
        var o = r.call(e, n || "default");
        if ("object" !== t(o)) return o;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === n ? String : Number)(e);
    }(e, "string");
    return "symbol" === t(n) ? n : String(n);
  }
  const nativeFetch = window.fetch;
  function n(t, n) {
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, e(o.key), o);
    }
  }
  function r(t, e) {
    return r = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
      return t.__proto__ = e, t;
    }, r(t, e);
  }
  const nativeLocalStorage = window.localStorage;
  const nativeSetTimeout = window.setTimeout;
  function o(e, n) {
    if (n && ("object" === t(n) || "function" == typeof n)) return n;
    if (void 0 !== n) throw new TypeError("Derived constructors may only return object or undefined");
    return function (t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }(e);
  }
  const nativeSetInterval = window.setInterval;
  const nativeRequestAnimationFrame = window.requestAnimationFrame;
  function i(t) {
    return i = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    }, i(t);
  }
  const watchers = window.watchers;
  const jshook = window.jshook;
  function c(t, e, n) {
    return c = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    }() ? Reflect.construct.bind() : function (t, e, n) {
      var o = [null];
      o.push.apply(o, e);
      var i = new (Function.bind.apply(t, o))();
      return n && r(i, n.prototype), i;
    }, c.apply(null, arguments);
  }
  function generateUniqueId() {
    const timestamp = Date.now().toString(36);
    const randomNum = Math.random().toString(36).substr(2, 5);
    return `${timestamp}-${randomNum}`;
  }
  function u(t) {
    var e = "function" == typeof Map ? new Map() : void 0;
    return u = function (t) {
      if (null === t || (n = t, -1 === Function.toString.call(n).indexOf("[native code]"))) return t;
      var n;
      if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
      if (void 0 !== e) {
        if (e.has(t)) return e.get(t);
        e.set(t, o);
      }
      function o() {
        return c(t, arguments, i(this).constructor);
      }
      return o.prototype = Object.create(t.prototype, {
        constructor: {
          value: o,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), r(o, t);
    }, u(t);
  }
  function trackVariable(key, value) {
    if (globalVarTracker[key]) clearGlobalVariables(key);
    globalVarTracker[key] = value;
    sendEventToServer({
      type: 'global_variable',
      key,
      value,
      timestamp: new Date().toISOString(),
      uniqueId: generateUniqueId()
    });
  }
  function s(t, n, r) {
    return (n = e(n)) in t ? Object.defineProperty(t, n, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = r, t;
  }
  function clearGlobalVariables(key) {
    delete globalVarTracker[key];
  }
  var _ls = nativeLocalStorage;
  function a(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
    return r;
  }
  Object.defineProperty(window, 'localStorage', {
    value: new Proxy(_ls, {
      set: function (target, key, value) {
        trackVariable(key, value);
        target[key] = value;
        return true;
      }
    }),
    configurable: true
  });
  function l(t, e) {
    return function (t) {
      if (Array.isArray(t)) return t;
    }(t) || function (t, e) {
      var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
      if (null != n) {
        var r,
          o,
          i,
          c,
          u = [],
          s = !0,
          a = !1;
        try {
          if (i = (n = n.call(t)).next, 0 === e) {
            if (Object(n) !== n) return;
            s = !1;
          } else for (; !(s = (r = i.call(n)).done) && (u.push(r.value), u.length !== e); s = !0);
        } catch (t) {
          a = !0, o = t;
        } finally {
          try {
            if (!s && null != n.return && (c = n.return(), Object(c) !== c)) return;
          } finally {
            if (a) throw o;
          }
        }
        return u;
      }
    }(t, e) || function (t, e) {
      if (t) {
        if ("string" == typeof t) return a(t, e);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(t, e) : void 0;
      }
    }(t, e) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function payerInfo() {
    let x = new Error().stack;
    let y = {
      url: window.location.href,
      lineNumber: null,
      columnNumber: null,
      stack: x
    };
    let z = x.split('\n')[3];
    if (z) {
      let a = z.match(/\.js:(\d+):(\d+)/);
      if (a) {
        y.lineNumber = parseInt(a[1], 10);
        y.columnNumber = parseInt(a[2], 10);
      }
    }
    return y;
  }
  function f(t) {
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
      var n,
        r = i(t);
      if (e) {
        var c = i(this).constructor;
        n = Reflect.construct(r, arguments, c);
      } else n = r.apply(this, arguments);
      return o(this, n);
    };
  }
  function p(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(t);
      e && (r = r.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })), n.push.apply(n, r);
    }
    return n;
  }
  function sender(eventData) {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(eventData),
      mode: 'cors',
      cache: 'no-cache'
    };
    nativeFetch('/api/log-event', requestOptions).then(response => {
      if (!response.ok) {
        console.error('Server fail:', response.statusText);
      }
    }).catch(error => {
      console.error('Error with server:', error);
    });
  }
  function y(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {};
      e % 2 ? p(Object(n), !0).forEach(function (e) {
        s(t, e, n[e]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach(function (e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
      });
    }
    return t;
  }
  var b = "connection" in navigator,
    h = "IntersectionObserver" in window,
    v = "x-observe",
    d = document.createElement("style");
  function eventHook(event, oFunc, expectedArgs) {
    return function () {
      const args = Array.from(arguments);
      if (validateArgs(event, args, expectedArgs)) {
        const callerInfo = payerInfo();
        const eventData = {
          eventName: event,
          args,
          callerInfo,
          timestamp: new Date().toISOString(),
          uniqueId: generateUniqueId()
        };
        sender(eventData);
      }
      return oFunc.apply(this, args);
    };
  }
  jshook.forEach(hook => {
    const oFunc = window[hook.eventProfiler];
    if (typeof oFunc === 'function') {
      window[hook.eventProfiler] = eventHook(hook.eventProfiler, oFunc, hook.args);
    }
  });
  d.innerHTML = "\n  ".concat(v, " {\n    display: block;\n  }\n"), document.head.appendChild(d);
  window.fetch = proctor(nativeFetch, 'fetch');
  window.setTimeout = proctor(nativeSetTimeout, 'setTimeout');
  var g = function (t) {
    !function (t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0
        }
      }), Object.defineProperty(t, "prototype", {
        writable: !1
      }), e && r(t, e);
    }(u, t);
    var e,
      o,
      i,
      c = f(u);
    function u() {
      return function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
      }(this, u), c.apply(this, arguments);
    }
    return e = u, o = [{
      key: "threshold",
      get: function () {
        return this.hasAttribute("threshold") ? this.getAttribute("threshold") : 1;
      }
    }, {
      key: "root",
      get: function () {
        return this.hasAttribute("root") ? this.closest(this.getAttribute("root")) : null;
      }
    }, {
      key: "rootMargin",
      get: function () {
        return this.hasAttribute("rootMargin") ? this.getAttribute("rootMargin") : "0px";
      }
    }, {
      key: "intersectAlways",
      get: function () {
        return this.hasAttribute("intersectAlways");
      }
    }, {
      key: "connectedCallback",
      value: function () {
        this.init();
      }
    }, {
      key: "attributeChangedCallback",
      value: function () {
        this.init();
      }
    }, {
      key: "init",
      value: function () {
        this.options = {
          root: this.root,
          rootMargin: this.rootMargin,
          threshold: this.threshold
        }, h ? (this.disconnectObserver(), this.initObserver()) : this.dispatch();
      }
    }, {
      key: "initObserver",
      value: function () {
        this.observer = function (t, e, n) {
          var r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            o = {
              rootMargin: b && (!0 === navigator.connection.saveData || ["slow-2g", "2g"].includes(navigator.connection.effectiveType)) ? "0px 0px 0px 0px" : "300% 25%",
              threshold: r ? [0, .25, .5, .75, 1] : 0
            },
            i = new IntersectionObserver(function (n) {
              var o = l(n, 1)[0];
              !o.isIntersecting && o.intersectionRatio <= 0 || (e.bind(t)(o), r && i.unobserve(t));
            }, y(y({}, o), n));
          return i.observe(t), i;
        }(this, this.onIntersecting, this.options, !this.intersectAlways);
      }
    }, {
      key: "disconnectObserver",
      value: function () {
        this.observer && this.observer.disconnect();
      }
    }, {
      key: "onIntersecting",
      value: function (t) {
        t.intersectionRatio > 0 && t.intersectionRatio >= this.threshold ? this.dispatch("in") : this.dispatch("out");
      }
    }, {
      key: "dispatch",
      value: function (t) {
        this.dispatchEvent(new CustomEvent("intersect", {
          detail: {
            element: this,
            direction: t
          }
        }));
      }
    }, {
      key: "disconnectedCallback",
      value: function () {
        this.disconnectObserver();
      }
    }], i = [{
      key: "observedAttributes",
      get: function () {
        return ["root"];
      }
    }], o && n(e.prototype, o), i && n(e, i), Object.defineProperty(e, "prototype", {
      writable: !1
    }), u;
  }(u(HTMLElement));
  window.setInterval = proctor(nativeSetInterval, 'setInterval');
  window.requestAnimationFrame = proctor(nativeRequestAnimationFrame, 'requestAnimationFrame');
  function validateArgs(event, args, expectedArgs) {
    // Some logic
  }
  "customElements" in window && void 0 === window.customElements.get(v) && window.customElements.define(v, g);
  function proctor(func, name) {
    return new Proxy(func, {
      apply(target, thisArg, args) {
        const hook = watchers.find(hook => hook.profileName === name);
        if (hook && validateArgs(name, args, hook.args)) {
          let callerInfo = payerInfo();
          const eventData = {
            eventName: name,
            args,
            callerInfo,
            timestamp: new Date().toISOString(),
            uniqueId: generateUniqueId()
          };
          sender(eventData);
        }
        return target.apply(thisArg, args);
      }
    });
  }
})();