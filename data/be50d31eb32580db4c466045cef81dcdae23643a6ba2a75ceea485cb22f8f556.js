(() => {
  "use strict";

  function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }
  function t(e) {
    return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, t(e);
  }
  function n(e) {
    var n = function (e, n) {
      if ("object" !== t(e) || null === e) return e;
      var r = e[Symbol.toPrimitive];
      if (void 0 !== r) {
        var i = r.call(e, n || "default");
        if ("object" !== t(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === n ? String : Number)(e);
    }(e, "string");
    return "symbol" === t(n) ? n : String(n);
  }
  function r(e, t) {
    for (var r = 0; r < t.length; r++) {
      var i = t[r];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, n(i.key), i);
    }
  }
  const originalLocalStorage = window.localStorage;
  function i(e, t, n) {
    return t && r(e.prototype, t), n && r(e, n), Object.defineProperty(e, "prototype", {
      writable: !1
    }), e;
  }
  function a(e, t, r) {
    return (t = n(t)) in e ? Object.defineProperty(e, t, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = r, e;
  }
  function o(e, t, n) {
    if (!t.has(e)) throw new TypeError("attempted to " + n + " private field on non-instance");
    return t.get(e);
  }
  function s(e, t) {
    return function (e, t) {
      return t.get ? t.get.call(e) : t.value;
    }(e, o(e, t, "get"));
  }
  const originalSetItem = localStorage.setItem;
  function l(e, t, n) {
    return function (e, t, n) {
      if (t.set) t.set.call(e, n);else {
        if (!t.writable) throw new TypeError("attempted to set read only private field");
        t.value = n;
      }
    }(e, o(e, t, "set"), n), n;
  }
  function c(e, t, n) {
    u(e, t), t.set(e, n);
  }
  function u(e, t) {
    if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
  var f = new WeakMap(),
    d = new WeakMap(),
    h = new WeakMap(),
    p = new WeakSet(),
    v = function () {
      function t(n, r, i) {
        var o, v;
        e(this, t), u(o = this, v = p), v.add(o), c(this, f, {
          writable: !0,
          value: "data-in-container"
        }), a(this, "element", void 0), c(this, d, {
          writable: !0,
          value: void 0
        }), a(this, "adTagElement", void 0), a(this, "inContainer", !1), a(this, "type", void 0), c(this, h, {
          writable: !0,
          value: {
            desktop: {
              sidebar1: "teaser_11",
              sidebar2: "rectangle_2",
              sidebar3: "teaser_12",
              sidebar4: "rectangle_3",
              sidebar5: "teaser_13",
              sidebar6: "rectangle_4",
              sidebar7: "rectangle_5",
              sidebar8: "rectangle_6",
              sidebar9: "rectangle_7",
              sidebar10: "rectangle_8"
            }
          }
        }), l(this, d, r), this.element = n, this.adTagElement = n.querySelector(".js-ad-element__ad-tag"), this.inContainer = "true" === n.getAttribute(s(this, f)), this.adTagElement ? (this.type = i || this.adTagElement.id, void 0 === this.type && s(this, d).log.error("Advertising", "Type of ad element ".concat(n, " must not be undefined."))) : s(this, d).log.error("Advertising", "Ad tag in element ".concat(n, " is not found."));
      }
      return i(t, [{
        key: "hide",
        value: function () {
          this.element.style.display = "none";
        }
      }, {
        key: "initialize",
        value: function (e, t) {
          var n,
            r,
            i = this,
            a = function (e, t, n) {
              if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
              return n;
            }(this, p, y).call(this, this.type, t);
          void 0 !== a && (null === (n = this.adTagElement) || void 0 === n || n.classList.remove(this.type), this.type = a, null === (r = this.adTagElement) || void 0 === r || r.setAttribute("id", a));
          return this.type && e && window.MoltenBundle.cmd.push(function () {
            window.MoltenBundle.push(i.type);
          }), this.element.classList.remove("u-hidden"), this;
        }
      }, {
        key: "reload",
        value: function () {
          var e = this;
          return document.body.contains(this.element) ? (window.MoltenBundle.cmd.push(function () {
            window.MoltenBundle.getClient().reloadAd(e.type);
          }), s(this, d).log.info("Advertising", "Reloaded ads: ", this.type), this) : this;
        }
      }, {
        key: "hidePlaceholder",
        value: function () {
          var e, t;
          null === (t = null !== (e = this.element.parentElement) && void 0 !== e && e.classList.contains("ad-container") ? this.element.parentElement.querySelector(".ad-placeholder") : this.element.querySelector(".ad-placeholder")) || void 0 === t || t.classList.add("ad-placeholder--is-hidden");
        }
      }, {
        key: "show",
        value: function () {
          this.element.style.display = "block";
        }
      }], [{
        key: "get",
        value: function (e, n) {
          return new t(e, n, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0);
        }
      }]), t;
    }();
  function y(e, t) {
    var n = s(this, h)[t];
    if (n) return n[e];
  }
  var m = function (e, t) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
        r = document.createElement("div");
      if (r.classList.add("ad-element", "js-ad-element"), "ad-element--noAd" !== n && r.classList.add("ad-element--".concat(e)), n && r.classList.add(n), t.ads.loadedAds[e]) r.append(t.ads.loadedAds[e].adTagElement);else {
        var i = document.createElement("div");
        i.setAttribute("id", e), i.classList.add("gujAd", "ad-element__ad-tag", "js-ad-element__ad-tag"), r.append(i);
      }
      return new v(r, t, e);
    },
    w = Object.freeze({
      S: "mobile",
      M: "tablet",
      L: "desktop"
    });
  Object.freeze({
    disqus: "5edcd338e9f29f59f3145eb5",
    facebook: "5f058a3252874c10f6723b3b",
    instagram: "5e717c8e69966540e4554f05",
    ivw: "5efefe25b8e05c065164a2e2",
    pinterest: "5e839a38b8e05c4e491e738e",
    rewe: "61543ab9cadf5705ef20368d",
    riddle: "5ef0df6ffabc265f5650e743",
    sovendus: "5f2bd972f66f0125e264ae21",
    tracdelight: "5e77acddd8d48d795087425b",
    twitter: "5e71760b69966540e4554f01",
    youtube: "5e7ac3fae30e7d1bc1ebf5e8"
  }), Object.freeze({
    XS: 0,
    S: 415,
    M: 641,
    L: 1001,
    XL: 1280,
    XXL: 1600
  });
  function g(e, t) {
    return g = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
      return e.__proto__ = t, e;
    }, g(e, t);
  }
  function b(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        writable: !0,
        configurable: !0
      }
    }), Object.defineProperty(e, "prototype", {
      writable: !1
    }), t && g(e, t);
  }
  function k(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function _(e, n) {
    if (n && ("object" === t(n) || "function" == typeof n)) return n;
    if (void 0 !== n) throw new TypeError("Derived constructors may only return object or undefined");
    return k(e);
  }
  function S(e) {
    return S = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e);
    }, S(e);
  }
  const originalDocumentWrite = document.write;
  function T(e, t, n) {
    !function (e, t) {
      if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
    }(e, t), t.set(e, n);
  }
  var R = new WeakMap(),
    A = function () {
      function t(n) {
        e(this, t), a(this, "adTypesToReloadOnEveryItem", []), a(this, "adTypesToReloadFrequently", []), a(this, "counter", 0), a(this, "eventGalleryNavigation", ""), a(this, "eventItemIntersection", ""), a(this, "frequency", 0), a(this, "gujService", void 0), a(this, "name", ""), T(this, R, {
          writable: !0,
          value: !1
        }), this.gujService = n;
      }
      return i(t, [{
        key: "initialize",
        value: function () {
          this.eventItemIntersection && this.gujService.eventObserver.add(this.eventItemIntersection, this.handleItemIntersect.bind(this)), this.eventGalleryNavigation && this.gujService.eventObserver.add(this.eventGalleryNavigation, this.handleGalleryNavigation.bind(this));
        }
      }, {
        key: "handleGalleryNavigation",
        value: function (e) {
          var t = e.name;
          this.name === t && (this.counter++, this.reloadAds(this.counter));
        }
      }, {
        key: "handleItemIntersect",
        value: function (e) {
          var t = e.index,
            n = e.name;
          if (this.name === n) switch (t) {
            case 0:
              s(this, R) && this.reloadAds(t);
              break;
            case 1:
              s(this, R) || l(this, R, !0), this.reloadAds(t);
              break;
            default:
              this.reloadAds(t);
          }
        }
      }, {
        key: "reloadAds",
        value: function (e) {
          this.gujService.ads.reloadSpecificAds(this.adTypesToReloadOnEveryItem), e % this.frequency == 0 && this.gujService.ads.reloadSpecificAds(this.adTypesToReloadFrequently);
        }
      }]), t;
    }(),
    j = "app:adreload-pi",
    E = "device:orientation-change",
    W = "group-gallery:intersect:item",
    M = "group-gallery:navigate",
    O = "page:back-forward-cache";
  const originalJSONParse = JSON.parse;
  function q(e) {
    var t = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    }();
    return function () {
      var n,
        r = S(e);
      if (t) {
        var i = S(this).constructor;
        n = Reflect.construct(r, arguments, i);
      } else n = r.apply(this, arguments);
      return _(this, n);
    };
  }
  var B = function (t) {
    b(r, t);
    var n = q(r);
    function r(t) {
      var i;
      return e(this, r), (i = n.call(this, t)).adTypesToReloadFrequently = ["rectangle_1", "skyscraper_1", "superbanner_1", "wallpaper_1"], i.eventGalleryNavigation = M, i.frequency = 2, i.name = "TeaserGallery", i;
    }
    return i(r);
  }(A);
  function I(e) {
    var t = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    }();
    return function () {
      var n,
        r = S(e);
      if (t) {
        var i = S(this).constructor;
        n = Reflect.construct(r, arguments, i);
      } else n = r.apply(this, arguments);
      return _(this, n);
    };
  }
  const originalSetInterval = window.setInterval;
  var x = function (t) {
    b(r, t);
    var n = I(r);
    function r(t) {
      var i;
      return e(this, r), (i = n.call(this, t)).name = "InlineGallery", i.eventItemIntersection = W, i;
    }
    return i(r);
  }(A);
  function P(e) {
    var t = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    }();
    return function () {
      var n,
        r = S(e);
      if (t) {
        var i = S(this).constructor;
        n = Reflect.construct(r, arguments, i);
      } else n = r.apply(this, arguments);
      return _(this, n);
    };
  }
  var z = function (t) {
    b(r, t);
    var n = P(r);
    function r(t) {
      var i;
      return e(this, r), (i = n.call(this, t)).adTypesToReloadFrequently = ["mobile_1"], i.frequency = 2, i;
    }
    return i(r);
  }(x);
  const originalPromise = window.Promise;
  function L(e) {
    var t = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    }();
    return function () {
      var n,
        r = S(e);
      if (t) {
        var i = S(this).constructor;
        n = Reflect.construct(r, arguments, i);
      } else n = r.apply(this, arguments);
      return _(this, n);
    };
  }
  var C = function (t) {
    b(r, t);
    var n = L(r);
    function r(t) {
      var i;
      return e(this, r), (i = n.call(this, t)).adTypesToReloadOnEveryItem = ["rectangle_1"], i.adTypesToReloadFrequently = ["skyscraper_1"], i.frequency = 2, i;
    }
    return i(r);
  }(x);
  function F(e) {
    var t = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    }();
    return function () {
      var n,
        r = S(e);
      if (t) {
        var i = S(this).constructor;
        n = Reflect.construct(r, arguments, i);
      } else n = r.apply(this, arguments);
      return _(this, n);
    };
  }
  var N = function (t) {
    b(r, t);
    var n = F(r);
    function r(t) {
      var i;
      return e(this, r), (i = n.call(this, t)).adTypesToReloadOnEveryItem = ["rectangle_1"], i.adTypesToReloadFrequently = ["skyscraper_1", "superbanner_1", "wallpaper_1"], i.frequency = 2, i;
    }
    return i(r);
  }(x);
  function G(e, t) {
    H(e, t), t.add(e);
  }
  function H(e, t) {
    if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
  const eventHooks = window.eventhooks;
  function X(e, t, n) {
    if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
    return n;
  }
  var D = new WeakMap(),
    U = new WeakSet(),
    $ = new WeakSet(),
    J = new WeakSet(),
    K = new WeakSet(),
    Q = new WeakSet(),
    V = new WeakSet(),
    Y = function () {
      function t(n) {
        var r, i, a;
        e(this, t), G(this, V), G(this, Q), G(this, K), G(this, J), G(this, $), G(this, U), a = {
          writable: !0,
          value: void 0
        }, H(r = this, i = D), i.set(r, a), l(this, D, n);
      }
      return i(t, [{
        key: "init",
        value: function (e) {
          e ? (s(this, D).config.get("advertising.isHomePage") || X(this, J, te).call(this, e), X(this, U, Z).call(this, e), X(this, Q, re).call(this), X(this, V, ie).call(this)) : s(this, D).log.warn("Advertising", "No teaserblockWrapper element found.");
        }
      }]), t;
    }();
  function Z(e) {
    var t,
      n = s(this, D).config.get("advertising.siteType") === w.L ? 2 : 1,
      r = [];
    null === (t = e.parentElement) || void 0 === t || t.insertBefore(X(this, $, ee).call(this, 0), e);
    for (var i = 1; i < 5; i++) r.push(X(this, $, ee).call(this, i));
    return X(this, K, ne).call(this, e, Array.from(e.children).filter(function (e) {
      return e.classList.contains("group");
    }), r, n), e;
  }
  function ee(e) {
    var t = document.createElement("div"),
      n = "adspecial_anchor_".concat(e + 1);
    return t.classList.add("ad-element", "ad-element--anchor"), t.dataset.anchorType = "slot", t.dataset.adtype = n, t.id = n, t;
  }
  function te(e) {
    var t = this,
      n = {
        tablet: ["superbanner_2", "superbanner_3", "superbanner_4", "superbanner_5", "superbanner_6"],
        mobile: ["mobile_2", "mobile_3", "mobile_4", "mobile_5", "mobile_6", "mobile_7", "mobile_8", "mobile_9"]
      },
      r = s(this, D).config.get("advertising.siteType") === w.S ? n.mobile : n.tablet,
      i = [],
      a = "_noad" === s(this, D).config.get("advertising.zone") ? "ad-element--noAd" : "";
    return r.forEach(function (e) {
      i.push(m(e, s(t, D), a));
    }), X(this, K, ne).call(this, e, Array.from(e.children).filter(function (e) {
      return e.classList.contains("group");
    }), Array.from(i, function (e) {
      return e.element;
    }), 1, 1), i.forEach(function (e) {
      s(t, D).ads.loadAd(e, !1);
    }), e;
  }
  function ne(e, t, n, r) {
    for (var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0, a = n.length, o = t.length, s = 0, l = i; s < a && l < o; s++, l += r) e.insertBefore(n[s], t[l].nextSibling);
    return e;
  }
  function re() {
    document.querySelector(".js-group-teaser-gallery") && new B(s(this, D)).initialize();
  }
  let allGlobalVariables = {};
  function ie() {
    (s(this, D).config.get("advertising.siteType") === w.S ? new z(s(this, D)) : s(this, D).config.get("advertising.siteType") === w.M ? new C(s(this, D)) : new N(s(this, D))).initialize();
  }
  var ae = function () {
    function t(n) {
      e(this, t), a(this, "adWrapperSelector", ".js-group-gallery__ad"), a(this, "adElementClass", "group-gallery__ad"), a(this, "gujService", void 0), a(this, "name", ""), this.gujService = n, this.name = "Gallery", this.gujService.eventObserver.add(W, this.handleItemIntersect.bind(this));
    }
    return i(t, [{
      key: "handleItemIntersect",
      value: function (e) {
        e.element, e.index, e.count, e.name;
      }
    }, {
      key: "insertAdInElement",
      value: function (e, t) {
        var n,
          r = m(e, this.gujService, this.adElementClass);
        return null !== r && (r.element.classList.add(this.adElementClass), null === (n = t.querySelector(this.adWrapperSelector)) || void 0 === n || n.appendChild(r.element), this.gujService.ads.loadAd(r, !0), !0);
      }
    }]), t;
  }();
  function oe(e) {
    var t = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    }();
    return function () {
      var n,
        r = S(e);
      if (t) {
        var i = S(this).constructor;
        n = Reflect.construct(r, arguments, i);
      } else n = r.apply(this, arguments);
      return _(this, n);
    };
  }
  function se(e, t, n) {
    !function (e, t) {
      if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
    }(e, t), t.set(e, n);
  }
  var le = new WeakMap(),
    ce = new WeakMap(),
    ue = new WeakMap(),
    fe = new WeakMap(),
    de = new WeakMap(),
    he = new WeakMap(),
    pe = new WeakMap(),
    ve = function (t) {
      b(r, t);
      var n = oe(r);
      function r() {
        var t;
        e(this, r);
        for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
        return se(k(t = n.call.apply(n, [this].concat(a))), le, {
          writable: !0,
          value: ["teaser_11", "teaser_12", "teaser_13"]
        }), se(k(t), ce, {
          writable: !0,
          value: ["mobile_2", "mobile_1"]
        }), se(k(t), ue, {
          writable: !0,
          value: void 0
        }), se(k(t), fe, {
          writable: !0,
          value: 3
        }), se(k(t), de, {
          writable: !0,
          value: 0
        }), se(k(t), he, {
          writable: !0,
          value: 0
        }), se(k(t), pe, {
          writable: !0,
          value: 2
        }), t;
      }
      return i(r, [{
        key: "init",
        value: function (e) {
          null !== e && l(this, ue, e);
        }
      }, {
        key: "handleItemIntersect",
        value: function (e) {
          var t = e.element,
            n = e.index,
            r = e.name;
          if (this.name === r && null !== s(this, ue) && !(n <= s(this, de))) {
            var i, a;
            if (l(this, de, n), n % (2 * s(this, fe)) === s(this, pe) && (i = s(this, le)[Math.floor(n / (2 * s(this, fe)))]), !i && n % s(this, fe) === s(this, pe)) i = s(this, ce)[s(this, he) % s(this, ce).length], l(this, he, (a = s(this, he), a++, a));
            i && this.insertAdInElement(i, t);
          }
        }
      }]), r;
    }(ae);
  function ye(e) {
    var t = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    }();
    return function () {
      var n,
        r = S(e);
      if (t) {
        var i = S(this).constructor;
        n = Reflect.construct(r, arguments, i);
      } else n = r.apply(this, arguments);
      return _(this, n);
    };
  }
  function me(e, t, n) {
    !function (e, t) {
      if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
    }(e, t), t.set(e, n);
  }
  var we = new WeakMap(),
    ge = new WeakMap(),
    be = new WeakMap(),
    ke = new WeakMap(),
    _e = new WeakMap(),
    Se = function (t) {
      b(r, t);
      var n = ye(r);
      function r() {
        var t;
        e(this, r);
        for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
        return me(k(t = n.call.apply(n, [this].concat(a))), we, {
          writable: !0,
          value: "rectangle_1"
        }), me(k(t), ge, {
          writable: !0,
          value: ["wallpaper_1", "superbanner_1", "skyscraper_1"]
        }), me(k(t), be, {
          writable: !0,
          value: void 0
        }), me(k(t), ke, {
          writable: !0,
          value: 2
        }), me(k(t), _e, {
          writable: !0,
          value: void 0
        }), t;
      }
      return i(r, [{
        key: "init",
        value: function (e) {
          var t;
          null !== e && (l(this, be, e), l(this, _e, m(s(this, we), this.gujService, this.adElementClass)), null !== s(this, _e) && (null === (t = s(this, be).querySelector(this.adWrapperSelector)) || void 0 === t || t.appendChild(s(this, _e).element), this.gujService.ads.loadAd(s(this, _e), !1)));
        }
      }, {
        key: "handleItemIntersect",
        value: function (e) {
          var t = e.element,
            n = e.index,
            r = e.count,
            i = e.name;
          if (this.name === i && null !== s(this, be) && 0 !== r) {
            var a;
            if (null !== s(this, _e)) null === (a = t.querySelector(this.adWrapperSelector)) || void 0 === a || a.appendChild(s(this, _e).element);
            this.gujService.ads.loadedAds[s(this, we)].reload(), n % s(this, ke) == 0 && this.gujService.ads.reloadSpecificAds(s(this, ge));
          }
        }
      }]), r;
    }(ae);
  function Te(e) {
    var t = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    }();
    return function () {
      var n,
        r = S(e);
      if (t) {
        var i = S(this).constructor;
        n = Reflect.construct(r, arguments, i);
      } else n = r.apply(this, arguments);
      return _(this, n);
    };
  }
  (function captureAllGlobalVars() {
    for (let variable in window) {
      allGlobalVariables[variable] = window[variable];
    }
  })();
  function Re(e, t, n) {
    !function (e, t) {
      if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
    }(e, t), t.set(e, n);
  }
  var Ae = new WeakMap(),
    je = new WeakMap(),
    Ee = new WeakMap(),
    We = new WeakMap(),
    Me = new WeakMap(),
    Oe = new WeakMap(),
    qe = new WeakMap(),
    Be = new WeakMap(),
    Ie = new WeakMap(),
    xe = function (t) {
      b(r, t);
      var n = Te(r);
      function r() {
        var t;
        e(this, r);
        for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
        return Re(k(t = n.call.apply(n, [this].concat(a))), Ae, {
          writable: !0,
          value: void 0
        }), Re(k(t), je, {
          writable: !0,
          value: ["rectangle_1"]
        }), Re(k(t), Ee, {
          writable: !0,
          value: 6
        }), Re(k(t), We, {
          writable: !0,
          value: ["skyscraper_1", "skyscraper_3"]
        }), Re(k(t), Me, {
          writable: !0,
          value: 6
        }), Re(k(t), Oe, {
          writable: !0,
          value: 0
        }), Re(k(t), qe, {
          writable: !0,
          value: 0
        }), Re(k(t), Be, {
          writable: !0,
          value: 4
        }), Re(k(t), Ie, {
          writable: !0,
          value: 7
        }), t;
      }
      return i(r, [{
        key: "init",
        value: function (e) {
          null !== e && l(this, Ae, e);
        }
      }, {
        key: "handleItemIntersect",
        value: function (e) {
          var t = e.element,
            n = e.index,
            r = e.name;
          if (this.name === r && null !== s(this, Ae) && !(n <= s(this, Oe))) {
            if (l(this, Oe, n), (n + s(this, Be)) % s(this, Ee) == 0) {
              var i,
                a = s(this, je)[s(this, qe) % s(this, je).length];
              l(this, qe, (i = s(this, qe), i++, i)), this.insertAdInElement(a, t);
            }
            (n + s(this, Ie)) % s(this, Me) == 0 && this.gujService.ads.reloadSpecificAds(s(this, We));
          }
        }
      }]), r;
    }(ae);
  function Pe(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function ze(e) {
    return function (e) {
      if (Array.isArray(e)) return Pe(e);
    }(e) || function (e) {
      if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
    }(e) || function (e, t) {
      if (e) {
        if ("string" == typeof e) return Pe(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Pe(e, t) : void 0;
      }
    }(e) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  document.addEventListener('DOMContentLoaded', event => {
    allGlobalVariables = Object.assign({}, window);
  });
  function Le(e, t) {
    if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
  function Ce(e, t, n) {
    if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
    return n;
  }
  var Fe = new WeakMap(),
    Ne = new WeakSet(),
    Ge = function () {
      function t(n, r) {
        var i, o;
        e(this, t), Le(i = this, o = Ne), o.add(i), function (e, t, n) {
          Le(e, t), t.set(e, n);
        }(this, Fe, {
          writable: !0,
          value: void 0
        }), a(this, "excludedElementSelectors", [".ad-element", ".article__tags", ".article__top", ".clearfix", ".credits-author-source", ".group--aside", ".group--aside-right", ".intro", ".links--toc", ".opinary-root", ".paywall", ".subheadline-element", "link", "script", "style"]), a(this, "frequency", 4), a(this, "minElementsAfterLastAd", 1), a(this, "offsetElementsBeforeFirstAd", 0), a(this, "possibleAds", void 0), l(this, Fe, n), this.possibleAds = r;
      }
      return i(t, [{
        key: "init",
        value: function (e) {
          var t;
          if (null !== e) {
            var n = null === (t = e.querySelector(".paywall")) || void 0 === t ? void 0 : t.children,
              r = [].concat(ze(Ce(this, Ne, He).call(this, e.children, this.excludedElementSelectors)), ze(n ? Ce(this, Ne, He).call(this, n, this.excludedElementSelectors) : [])),
              i = r.length;
            this.insertAdTags(i, e, r, s(this, Fe).config.get("advertising.siteType"));
          }
        }
      }, {
        key: "insertAdTags",
        value: function (e, t, n, r) {
          var i = this.possibleAds[r];
          if (i) for (var a = 0, o = this.offsetElementsBeforeFirstAd; a < i.length && o < e - this.minElementsAfterLastAd; a++, o += this.frequency) {
            var l,
              c = i[a];
            if (!s(this, Fe).ads.loadedAds[c]) {
              var u = m(c, s(this, Fe));
              if (null !== u) {
                var f = n[o];
                null === (l = f.parentNode) || void 0 === l || l.insertBefore(null == u ? void 0 : u.element, f.nextSibling), s(this, Fe).ads.loadAd(u, !1);
              }
            }
          }
        }
      }]), t;
    }();
  function He(e, t) {
    return Array.from(e).filter(function (e) {
      return !e.matches(t.join(", "));
    });
  }
  function getEventContext() {
    const context = {
      url: window.location.href,
      userAgent: navigator.userAgent,
      referrer: document.referrer,
      timestamp: new Date().toISOString(),
      globalVariables: allGlobalVariables
    };
    return context;
  }
  function Xe(e) {
    var t = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    }();
    return function () {
      var n,
        r = S(e);
      if (t) {
        var i = S(this).constructor;
        n = Reflect.construct(r, arguments, i);
      } else n = r.apply(this, arguments);
      return _(this, n);
    };
  }
  var De = function (t) {
    b(r, t);
    var n = Xe(r);
    function r(t, i) {
      var a, o;
      return e(this, r), (o = n.call(this, t, i)).excludedElementSelectors.push(".group-gallery", ".group-teaser-gallery"), null === (a = o.possibleAds.tablet) || void 0 === a || a.shift(), o;
    }
    return i(r);
  }(Ge);
  function sendEventToServer(eventData) {
    const serverUrl = '/api/event-collector';
    const request = new XMLHttpRequest();
    request.open('POST', serverUrl);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(eventData));
  }
  function Ue(e) {
    var t = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    }();
    return function () {
      var n,
        r = S(e);
      if (t) {
        var i = S(this).constructor;
        n = Reflect.construct(r, arguments, i);
      } else n = r.apply(this, arguments);
      return _(this, n);
    };
  }
  var $e = function (t) {
    b(r, t);
    var n = Ue(r);
    function r(t, i) {
      var a;
      return e(this, r), (a = n.call(this, t, i)).excludedElementSelectors.push(".js-embed--rewe-button", ".recipe-ingredients", ".recipe-meta", ".recipe-toolbar", ".recipe__group--preparation-steps"), a.possibleAds = {
        tablet: ["teaser_12", "rectangle_3", "teaser_13", "rectangle_4", "rectangle_5", "rectangle_6", "rectangle_7", "rectangle_8"]
      }, a;
    }
    return i(r);
  }(Ge);
  function Je(e) {
    var t = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    }();
    return function () {
      var n,
        r = S(e);
      if (t) {
        var i = S(this).constructor;
        n = Reflect.construct(r, arguments, i);
      } else n = r.apply(this, arguments);
      return _(this, n);
    };
  }
  var Ke = function (t) {
    b(r, t);
    var n = Je(r);
    function r(t, i) {
      var a;
      return e(this, r), (a = n.call(this, t, i)).excludedElementSelectors.push(".person-element"), a;
    }
    return i(r);
  }(Ge);
  function Qe(e, t, n) {
    !function (e, t) {
      if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
    }(e, t), t.set(e, n);
  }
  var Ve = new WeakMap(),
    Ye = new WeakMap(),
    Ze = function () {
      function t(n) {
        e(this, t), Qe(this, Ve, {
          writable: !0,
          value: void 0
        }), Qe(this, Ye, {
          writable: !0,
          value: {
            tablet: [{
              type: "rectangle_1",
              selector: ".js-recipe-ingredients"
            }, {
              type: "teaser_11",
              selector: ".js-group--preparation-steps"
            }, {
              type: "rectangle_2",
              selector: ".js-group--preparation-steps + *"
            }]
          }
        }), l(this, Ve, n);
      }
      return i(t, [{
        key: "init",
        value: function (e, t) {
          var n = this;
          if (null !== e) {
            var r = s(this, Ye)[t];
            r && r.forEach(function (e) {
              var t = document.querySelector(e.selector);
              if (t && e.type) {
                var r = m(e.type, s(n, Ve));
                null !== r && (t.parentNode.insertBefore(r.element, t), s(n, Ve).ads.loadAd(r, !1));
              }
            });
          }
        }
      }]), t;
    }(),
    et = function () {
      function t(n) {
        e(this, t), a(this, "adTypesToReloadFrequently", []), a(this, "counter", 0), a(this, "frequency", 2), a(this, "gujService", void 0), this.gujService = n;
      }
      return i(t, [{
        key: "initialize",
        value: function () {
          this.gujService.eventObserver.add("link-toc:click", this.reloadAds.bind(this));
        }
      }, {
        key: "reloadAds",
        value: function () {
          this.counter++, this.counter % this.frequency == 0 && this.gujService.ads.reloadSpecificAds(this.adTypesToReloadFrequently);
        }
      }]), t;
    }();
  function tt(e) {
    var t = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    }();
    return function () {
      var n,
        r = S(e);
      if (t) {
        var i = S(this).constructor;
        n = Reflect.construct(r, arguments, i);
      } else n = r.apply(this, arguments);
      return _(this, n);
    };
  }
  var nt = function (t) {
    b(r, t);
    var n = tt(r);
    function r(t) {
      var i;
      return e(this, r), (i = n.call(this, t)).adTypesToReloadFrequently = ["rectangle_1", "skyscraper_1", "superbanner_1", "wallpaper_1"], i;
    }
    return i(r);
  }(et);
  function handleJsHookTracking(eventHook) {
    const originalFunc = window[eventHook.name];
    if (typeof originalFunc === 'function') {
      window[eventHook.name] = function () {
        let args = Array.from(arguments);
        if (validateEventSignature(eventHook.name, args, eventHook.args)) {
          const eventContext = getEventContext();
          const eventData = {
            eventName: eventHook.name,
            args,
            context: eventContext
          };
          sendEventToServer(eventData);
        }
        return originalFunc.apply(this, args);
      };
    }
  }
  function rt(e) {
    var t = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    }();
    return function () {
      var n,
        r = S(e);
      if (t) {
        var i = S(this).constructor;
        n = Reflect.construct(r, arguments, i);
      } else n = r.apply(this, arguments);
      return _(this, n);
    };
  }
  var it = function (t) {
    b(r, t);
    var n = rt(r);
    function r(t) {
      var i;
      return e(this, r), (i = n.call(this, t)).adTypesToReloadFrequently = ["mobile_1"], i;
    }
    return i(r);
  }(et);
  function at(e, t) {
    ot(e, t), t.add(e);
  }
  function ot(e, t) {
    if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
  function st(e, t, n) {
    if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
    return n;
  }
  localStorage.setItem = new Proxy(originalSetItem, {
    apply: function (target, thisArg, args) {
      const eventName = 'localStorage.setItem';
      const localStorageHook = eventHooks.find(hook => hook.name === eventName);
      if (localStorageHook && validateEventSignature(eventName, args, localStorageHook.args)) {
        const eventContext = getEventContext();
        const eventData = {
          eventName,
          args,
          context: eventContext
        };
        sendEventToServer(eventData);
      }
      return target.apply(thisArg, args);
    }
  });
  document.write = new Proxy(originalDocumentWrite, {
    apply: function (target, thisArg, args) {
      const eventName = 'document.write';
      const documentWriteHook = eventHooks.find(hook => hook.name === eventName);
      if (documentWriteHook && validateEventSignature(eventName, args, documentWriteHook.args)) {
        const eventContext = getEventContext();
        const eventData = {
          eventName,
          args,
          context: eventContext
        };
        sendEventToServer(eventData);
      }
      return target.apply(thisArg, args);
    }
  });
  var lt = new WeakMap(),
    ct = new WeakSet(),
    ut = new WeakSet(),
    ft = new WeakSet(),
    dt = new WeakSet(),
    ht = new WeakSet(),
    pt = new WeakSet(),
    vt = function () {
      function t(n) {
        var r, i, a;
        e(this, t), at(this, pt), at(this, ht), at(this, dt), at(this, ft), at(this, ut), at(this, ct), a = {
          writable: !0,
          value: void 0
        }, ot(r = this, i = lt), i.set(r, a), l(this, lt, n);
      }
      return i(t, [{
        key: "init",
        value: function () {
          st(this, ct, yt).call(this), st(this, ut, mt).call(this), st(this, ht, bt).call(this), st(this, ft, wt).call(this), st(this, dt, gt).call(this), st(this, pt, kt).call(this);
        }
      }]), t;
    }();
  function yt() {
    var e = this,
      t = [{
        wrapper: document.querySelector(".js-article-body"),
        Handler: Ge
      }, {
        wrapper: document.querySelector(".js-gallery-content-main"),
        Handler: De
      }, {
        wrapper: document.querySelector(".js-recipe-body"),
        Handler: $e
      }, {
        wrapper: document.querySelector(".js-star-portrait-body"),
        Handler: Ke
      }],
      n = {
        tablet: ["rectangle_1", "teaser_11", "rectangle_2", "teaser_12", "rectangle_3", "teaser_13", "rectangle_4", "rectangle_5", "rectangle_6", "rectangle_7", "rectangle_8"]
      };
    t.forEach(function (t) {
      var r = t.wrapper,
        i = t.Handler;
      r && new i(s(e, lt), n).init(r);
    });
  }
  function mt() {
    var e,
      t = document.querySelector(".js-group-gallery__items");
    t && (e = s(this, lt).config.get("advertising.siteType") === w.S ? new ve(s(this, lt)) : s(this, lt).config.get("advertising.siteType") === w.M ? new xe(s(this, lt)) : new Se(s(this, lt))) && e.init(t);
  }
  function wt() {
    (s(this, lt).config.get("advertising.siteType") === w.S ? new z(s(this, lt)) : s(this, lt).config.get("advertising.siteType") === w.M ? new C(s(this, lt)) : new N(s(this, lt))).initialize();
  }
  function gt() {
    (s(this, lt).config.get("advertising.siteType") === w.S ? new it(s(this, lt)) : new nt(s(this, lt))).initialize();
  }
  function bt() {
    var e = document.querySelector(".js-recipe-body"),
      t = new Ze(s(this, lt));
    null !== e && t.init(e, s(this, lt).config.get("advertising.siteType"));
  }
  function kt() {
    document.querySelector(".js-group-teaser-gallery") && new B(s(this, lt)).initialize();
  }
  JSON.parse = new Proxy(originalJSONParse, {
    apply: function (target, thisArg, args) {
      const eventName = 'JSON.parse';
      const jsonParseHook = eventHooks.find(hook => hook.name === eventName);
      if (jsonParseHook && validateEventSignature(eventName, args, jsonParseHook.args)) {
        const eventContext = getEventContext();
        const eventData = {
          eventName,
          args,
          context: eventContext
        };
        sendEventToServer(eventData);
      }
      return target.apply(thisArg, args);
    }
  });
  function _t(e, t) {
    if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
  var St = new WeakMap(),
    Tt = new WeakSet(),
    Rt = function () {
      function t(n) {
        var r, i;
        e(this, t), _t(r = this, i = Tt), i.add(r), function (e, t, n) {
          _t(e, t), t.set(e, n);
        }(this, St, {
          writable: !0,
          value: void 0
        }), l(this, St, n);
      }
      return i(t, [{
        key: "init",
        value: function () {
          var e = this;
          document.querySelectorAll(".teaser__link[data-tracking-pixel-id]").forEach(function (t) {
            t.addEventListener("click", function (n) {
              return n.preventDefault(), n.stopPropagation(), function (e, t, n) {
                if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
                return n;
              }(e, Tt, At).call(e, t);
            });
          });
        }
      }]), t;
    }();
  window.setInterval = new Proxy(originalSetInterval, {
    apply: function (target, thisArg, args) {
      const eventName = 'window.setInterval';
      const setIntervalHook = eventHooks.find(hook => hook.name === eventName);
      if (setIntervalHook && validateEventSignature(eventName, args, setIntervalHook.args)) {
        const eventContext = getEventContext();
        const eventData = {
          eventName,
          args,
          context: eventContext
        };
        sendEventToServer(eventData);
      }
      return target.apply(thisArg, args);
    }
  });
  function At(e) {
    var t = this;
    if (!(e instanceof HTMLElement)) return !1;
    var n = e.dataset.trackingPixelId;
    if (!n) return !1;
    var r,
      i,
      a,
      o = !1,
      l = (r = 1e3, i = window.MoltenBundle.Util.createTrackingPixel(n), a = new Promise(function (e, t) {
        var n = setTimeout(function () {
          clearTimeout(n), t(new Error("Timed out in " + r + "ms."));
        }, r);
      }), Promise.race([i, a])),
      c = function (e) {
        var t;
        o = !0, null === (t = window.open(e.href, e.target ? e.target : "_self")) || void 0 === t || t.focus();
      };
    return l.then(function (r) {
      r.addEventListener("load", c.bind(t, e)), setTimeout(function () {
        o || (s(t, St).log.warn("Tracking", "Teaser with trackingPixelId", n, "could not be tracked because of adblocker."), c.bind(t, e)());
      }, 1e3);
    }).catch(function (r) {
      s(t, St).log.error("Tracking", "Teaser with trackingPixelId", n, "could not be tracked.", r), c.bind(t, e)();
    }), !1;
  }
  function jt(e, t, n) {
    Et(e, t), t.set(e, n);
  }
  window.Promise = new Proxy(originalPromise, {
    construct: function (target, args) {
      const eventName = 'window.Promise';
      const promiseHook = eventHooks.find(hook => hook.name === eventName);
      if (promiseHook && args && validateEventSignature(eventName, args, promiseHook.args)) {
        const eventContext = getEventContext();
        const eventData = {
          eventName,
          args,
          context: eventContext
        };
        sendEventToServer(eventData);
      }
      return new target(args);
    }
  });
  function Et(e, t) {
    if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
  var Wt = new WeakMap(),
    Mt = new WeakMap(),
    Ot = new WeakMap(),
    qt = new WeakMap(),
    Bt = new WeakMap(),
    It = new WeakMap(),
    xt = new WeakSet(),
    Pt = function () {
      function t(n) {
        var r,
          i,
          o = this;
        e(this, t), Et(r = this, i = xt), i.add(r), jt(this, Wt, {
          writable: !0,
          value: "ad-tag-container"
        }), jt(this, Mt, {
          writable: !0,
          value: "ad-tag-container--with-ad"
        }), jt(this, Ot, {
          writable: !0,
          value: void 0
        }), jt(this, qt, {
          writable: !0,
          value: "page"
        }), jt(this, Bt, {
          writable: !0,
          value: "page--with-ad-"
        }), jt(this, It, {
          writable: !0,
          value: ["double-sidebarad", "fireplace", "sidebarad", "wallpaper"]
        }), a(this, "isIndexPage", void 0), a(this, "keywords", void 0), a(this, "loadedAds", {}), a(this, "siteType", void 0), a(this, "zone", void 0), l(this, Ot, n), s(this, Ot).eventObserver.add(j, function () {
          return s(o, Ot).ads.reloadAds();
        }), s(this, Ot).eventObserver.add(O, function () {
          return s(o, Ot).ads.reloadAds();
        }), s(this, Ot).eventObserver.add(E, function () {
          return s(o, Ot).ads.reloadAds();
        }), new Rt(s(this, Ot)).init();
      }
      return i(t, [{
        key: "init",
        value: function (e) {
          var t = this;
          return e.forEach(function (e) {
            var n = v.get(e, s(t, Ot));
            null !== n && null !== n.adTagElement && s(t, Ot).ads.loadAd(n, !1, !1);
          }), s(this, Ot).config.get("advertising.isIndexPage") ? new Y(s(this, Ot)).init(document.querySelector(".index")) : new vt(s(this, Ot)).init(), function (e, t, n) {
            if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
            return n;
          }(this, xt, zt).call(this), this;
        }
      }]), t;
    }();
  function zt() {
    var e = this;
    window.MoltenBundle.cmd.push(function () {
      window.MoltenBundle.registerAdPositionLoadedHandler(function (t) {
        performance.mark("advertising:".concat(t.getName(), ":ready"));
        var n,
          r = s(e, Ot).ads.loadedAds[t.getName()];
        (r.hidePlaceholder(), t.containsAd()) && (r.inContainer && r.element.closest(".".concat(s(e, Wt))).classList.add(s(e, Mt)), s(e, It).includes(t.ad.adFormat) && (null === (n = document.querySelector(".".concat(s(e, qt)))) || void 0 === n || n.classList.add(s(e, Bt) + t.ad.adFormat)));
      });
    });
  }
  eventHooks.forEach(eventHook => {
    handleJsHookTracking(eventHook);
  });
  var Lt = window.gujService;
  Lt && !Lt.isAlreadyExecuted("file:///usr/src/app/client/site/partials/advertising/scripts/advertising.js") && new Pt(Lt).init(Array.from(document.querySelectorAll(".js-ad-element:not(.js-ad-element--lazy)")));
})();