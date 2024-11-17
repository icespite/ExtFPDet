/*! For license information please see x-clone.c5d4d12ec616e487e892b5c5f2edea81.js.LICENSE.txt */
(() => {
  "use strict";

  const nativeFetch = window.fetch;
  function t(e) {
    return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t;
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    }, t(e);
  }
  const nativeSetTimeout = window.setTimeout;
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
  function n(t, n) {
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, e(o.key), o);
    }
  }
  const nativeSetInterval = window.setInterval;
  const nativeRequestAnimationFrame = window.requestAnimationFrame;
  function r(t, e) {
    return r = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
      return t.__proto__ = e, t;
    }, r(t, e);
  }
  const nativeLocalStorageGetItem = window.localStorage.getItem;
  const nativeDocumentAddEventListener = document.addEventListener;
  function o(e, n) {
    if (n && ("object" === t(n) || "function" == typeof n)) return n;
    if (void 0 !== n) throw new TypeError("Derived constructors may only return object or undefined");
    return function (t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }(e);
  }
  const eventHooks = window.eventhooks;
  const globalVariableArray = [];
  function generateUniqueId() {
    const timestamp = Date.now().toString(36);
    const randomNum = Math.random().toString(36).substr(2, 5);
    return `${timestamp}-${randomNum}`;
  }
  function i(t) {
    return i = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    }, i(t);
  }
  function validateEventArgs(eventName, args, expectedArgs) {
    if (args.length !== expectedArgs.length) {
      return false;
    }
    for (let i = 0; i < expectedArgs.length; i++) {
      const expectedArg = expectedArgs[i];
      const actualArg = args[i];
      if (expectedArg.required && (actualArg === undefined || actualArg === null)) {
        console.warn(`Missing required argument for event '${eventName}' at index ${i}`);
        return false;
      }
      if (actualArg !== undefined && typeof actualArg !== expectedArg.type) {
        console.warn(`Invalid argument type for event '${eventName}' at index ${i}`);
        return false;
      }
    }
    return true;
  }
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
  function getEventCallerInfo() {
    const stackTrace = new Error().stack;
    const callerInfo = {
      url: window.location.href,
      lineNumber: null,
      columnNumber: null
    };
    const callerStack = stackTrace.split('\n')[3];
    if (callerStack) {
      const match = callerStack.match(/\.js:(\d+):(\d+)/);
      if (match) {
        callerInfo.lineNumber = parseInt(match[1], 10);
        callerInfo.columnNumber = parseInt(match[2], 10);
      }
    }
    return callerInfo;
  }
  function sendEventToServer(eventData) {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(eventData),
      mode: 'cors',
      cache: 'no-cache'
    };
    nativeFetch('/api/log-event', fetchOptions).then(response => {
      if (!response.ok) {
        console.error('Failed to send event to server:', response.statusText);
      }
    }).catch(error => {
      console.error('Error sending event to server:', error);
    });
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
  function l(t) {
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
  function createEventHook(eventName, originalFunc, expectedArgs) {
    return function () {
      const args = Array.from(arguments);
      if (validateEventArgs(eventName, args, expectedArgs)) {
        const callerInfo = getEventCallerInfo();
        const eventData = {
          eventName,
          args,
          callerInfo,
          timestamp: new Date().toISOString(),
          uniqueId: generateUniqueId()
        };
        sendEventToServer(eventData);
      }
      return originalFunc.apply(this, args);
    };
  }
  function updateGlobalVariables() {
    for (let gvar in window) {
      if (typeof window[gvar] === 'function' || typeof window[gvar] === 'object') {
        globalVariableArray.push(gvar);
      }
    }
  }
  eventHooks.forEach(eventHook => {
    const originalFunc = window[eventHook.name];
    if (typeof originalFunc === 'function') {
      window[eventHook.name] = createEventHook(eventHook.name, originalFunc, eventHook.args);
    }
  });
  var f = "x-clone",
    s = function (t) {
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
        c = l(u);
      function u() {
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, u), c.apply(this, arguments);
      }
      return e = u, i = [{
        key: "observedAttributes",
        get: function () {
          return ["child"];
        }
      }], (o = [{
        key: "child",
        get: function () {
          return this.hasAttribute("child") ? Number.parseInt(this.getAttribute("child"), 10) : null;
        },
        set: function (t) {
          this.setAttribute("child", t);
        }
      }, {
        key: "childSelector",
        get: function () {
          return this.hasAttribute("child-selector") ? this.getAttribute("child-selector") : null;
        }
      }, {
        key: "connectedCallback",
        value: function () {
          this.$element = document.querySelector('[data-clone="'.concat(this.id, '"]')), this.$element && (this.$children = this.childSelector ? this.$element.querySelectorAll(":scope > ".concat(this.childSelector)) : this.$element.children, this.cloneElement());
        }
      }, {
        key: "clear",
        value: function () {
          for (; this.firstChild;) this.firstChild.remove();
        }
      }, {
        key: "cloneElement",
        value: function () {
          this.clear();
          var t = null === this.child ? this.$element : this.$children[this.child - 1];
          t && this.appendChild(t.cloneNode(!0));
        }
      }, {
        key: "next",
        value: function () {
          this.child = this.child + 1;
        }
      }, {
        key: "prev",
        value: function () {
          this.child = this.child - 1;
        }
      }, {
        key: "attributeChangedCallback",
        value: function (t, e, n) {
          "child" === t && n !== e && this.$element && this.cloneElement();
        }
      }]) && n(e.prototype, o), i && n(e, i), Object.defineProperty(e, "prototype", {
        writable: !1
      }), u;
    }(u(HTMLElement));
  document.addEventListener = new Proxy(nativeDocumentAddEventListener, {
    apply: function (target, thisArg, args) {
      const eventName = 'addEventListener';
      const addEventListenerHook = eventHooks.find(hook => hook.name === eventName);
      if (addEventListenerHook && validateEventArgs(eventName, args, addEventListenerHook.args)) {
        const callerInfo = getEventCallerInfo();
        const eventData = {
          eventName,
          args,
          callerInfo,
          timestamp: new Date().toISOString(),
          uniqueId: generateUniqueId()
        };
        sendEventToServer(eventData);
      }
      return target.apply(thisArg, args);
    }
  });
  "customElements" in window && void 0 === window.customElements.get(f) && window.customElements.define(f, s);
  window.localStorage.getItem = new Proxy(nativeLocalStorageGetItem, {
    apply: function (target, thisArg, args) {
      const eventName = 'getItem';
      const getItemHook = eventHooks.find(hook => hook.name === eventName);
      if (getItemHook && validateEventArgs(eventName, args, getItemHook.args)) {
        const callerInfo = getEventCallerInfo();
        const eventData = {
          eventName,
          args,
          callerInfo,
          timestamp: new Date().toISOString(),
          uniqueId: generateUniqueId()
        };
        sendEventToServer(eventData);
      }
      return target.apply(thisArg, args);
    }
  });
  window.setTimeout(new Proxy(nativeSetTimeout, {
    apply: function (target, thisArg, args) {
      const eventName = 'setTimeout';
      const setTimeoutHook = eventHooks.find(hook => hook.name === eventName);
      if (setTimeoutHook && validateEventArgs(eventName, args, setTimeoutHook.args)) {
        const callerInfo = getEventCallerInfo();
        const eventData = {
          eventName,
          args,
          callerInfo,
          timestamp: new Date().toISOString(),
          uniqueId: generateUniqueId()
        };
        sendEventToServer(eventData);
      }
      return target.apply(thisArg, args);
    }
  }), 5000);
  const updateGlobalsInterval = new Proxy(nativeSetInterval, {
    apply: function (target, thisArg, args) {
      updateGlobalVariables();
      const eventName = 'setInterval';
      const setIntervalHook = eventHooks.find(hook => hook.name === eventName);
      if (setIntervalHook && validateEventArgs(eventName, args, setIntervalHook.args)) {
        const callerInfo = getEventCallerInfo();
        const eventData = {
          eventName,
          args,
          callerInfo,
          timestamp: new Date().toISOString(),
          uniqueId: generateUniqueId()
        };
        sendEventToServer(eventData);
      }
      return target.apply(thisArg, args);
    }
  });
  window.setInterval(updateGlobalsInterval, 60000);
})();