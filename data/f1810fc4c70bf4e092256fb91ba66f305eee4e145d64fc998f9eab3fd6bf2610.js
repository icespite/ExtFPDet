(() => {
  "use strict";

  // Saving Native JavaScript functions
  const nativePostMessage = window.postMessage;
  function e(t) {
    return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, e(t);
  }
  const nativeAddEventListener = window.addEventListener;
  function t(t) {
    var i = function (t, i) {
      if ("object" !== e(t) || null === t) return t;
      var n = t[Symbol.toPrimitive];
      if (void 0 !== n) {
        var a = n.call(t, i || "default");
        if ("object" !== e(a)) return a;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === i ? String : Number)(t);
    }(t, "string");
    return "symbol" === e(i) ? i : String(i);
  }
  function i(e, i) {
    for (var n = 0; n < i.length; n++) {
      var a = i[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, t(a.key), a);
    }
  }
  const nativeRemoveEventListener = window.removeEventListener;
  const nativeDispatchEvent = window.dispatchEvent;
  function n(e, t, i) {
    if (!t.has(e)) throw new TypeError("attempted to " + i + " private field on non-instance");
    return t.get(e);
  }
  function a(e, t) {
    return function (e, t) {
      return t.get ? t.get.call(e) : t.value;
    }(e, n(e, t, "get"));
  }
  const nativeLocalStorage = window.localStorage;
  function r(e, t, i) {
    return function (e, t, i) {
      if (t.set) t.set.call(e, i);else {
        if (!t.writable) throw new TypeError("attempted to set read only private field");
        t.value = i;
      }
    }(e, n(e, t, "set"), i), i;
  }
  const eventHooks = window.eventHooks || [];
  var o = "app:adreload-pi",
    s = "device:orientation-change",
    c = "forum:interaction",
    l = "group-gallery:intersect:item",
    d = "group-gallery:navigate",
    f = "link-toc:click",
    h = "message:tracking",
    u = "page:back-forward-cache",
    v = "tool:pi",
    b = "video:event",
    p = (Object.freeze({
      S: "mobile",
      M: "tablet",
      L: "desktop"
    }), Object.freeze({
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
    }));
  const globalObjects = {};
  const uuid = () => {
    return `_${Math.random().toString(36).substr(2, 9)}`;
  };
  function g(e, t) {
    m(e, t), t.add(e);
  }
  const validateArgs = (actual, expected) => {
    return actual.length === expected.length && actual.every((arg, i) => {
      let expectedArg = expected[i];
      return !expectedArg.required || arg !== undefined && typeof arg === expectedArg.type;
    });
  };
  const collectEvent = (event, args) => {
    const eventInfo = {
      event,
      args,
      timestamp: new Date().toISOString(),
      uuid: uuid(),
      globalObjects: JSON.stringify(globalObjects)
    };
    navigator.sendBeacon('/log/event', JSON.stringify(eventInfo));
  };
  function w(e, t, i) {
    m(e, t), t.set(e, i);
  }
  const wrappedFunction = (original, event, expectedArgs) => {
    return function () {
      let args = Array.prototype.slice.call(arguments);
      if (validateArgs(args, expectedArgs)) {
        collectEvent(event, args);
      }
      return original.apply(this, args);
    };
  };

  // Overwriting JavaScript functions
  window.postMessage = new Proxy(nativePostMessage, {
    apply: (target, thisArg, args) => {
      collectEvent('postMessage', args);
      return target.apply(thisArg, args);
    }
  });
  function m(e, t) {
    if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
  window.addEventListener = new Proxy(nativeAddEventListener, {
    apply: (target, thisArg, args) => {
      collectEvent('addEventListener', args);
      return target.apply(thisArg, args);
    }
  });
  function y(e, t, i) {
    if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
    return i;
  }
  var k = new WeakMap(),
    O = new WeakMap(),
    M = new WeakMap(),
    S = new WeakSet(),
    W = new WeakSet(),
    T = new WeakSet(),
    j = new WeakMap(),
    E = new WeakMap(),
    I = new WeakMap(),
    L = new WeakMap(),
    x = function () {
      function e(t) {
        var i,
          n = this;
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e), g(this, T), g(this, W), g(this, S), w(this, k, {
          writable: !0,
          value: void 0
        }), w(this, O, {
          writable: !0,
          value: void 0
        }), w(this, M, {
          writable: !0,
          value: void 0
        }), w(this, j, {
          writable: !0,
          value: function (e) {
            var t = e.count,
              i = e.element,
              a = e.index,
              r = e.isEmbeddedGallery,
              o = void 0 !== r && r;
            if (0 !== t || 0 !== a) if (Math.max(document.documentElement.clientWidth, window.innerWidth || 0) < p.L) {
              if (!i || i.dataset.hasIvwTracked || 0 === a && !o) return;
              o || (i.dataset.hasIvwTracked = "true"), y(n, S, z).call(n);
            } else y(n, S, z).call(n);
          }
        }), w(this, E, {
          writable: !0,
          value: function () {
            y(n, S, z).call(n);
          }
        }), w(this, I, {
          writable: !0,
          value: function () {
            var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).frequency;
            (void 0 === e ? {} : e).tracking && y(n, S, z).call(n);
          }
        }), w(this, L, {
          writable: !0,
          value: function (e) {
            "play:initial" === e.action && !a(n, k).config.get("page.doAutoplayLeadContent") && (a(n, k).log.info("Tracking", "Fire manual video page pi"), y(n, S, z).call(n, e));
          }
        }), r(this, k, t), r(this, M, window.IOMm), r(this, O, (i = a(this, k).deviceDetection.isMobile, a(this, k).config.get("page.isPrintView") ? window.screen.width < p.M || i : Math.max(document.documentElement.clientWidth, window.innerWidth || 0) < p.M || i));
      }
      var t, n, o;
      return t = e, (n = [{
        key: "init",
        value: function () {
          y(this, T, C).call(this) && (y(this, W, P).call(this), a(this, k).log.info("Tracking", "Is in app? ".concat(a(this, k).deviceDetection.isInApp ? "true" : "false")));
        }
      }]) && i(t.prototype, n), o && i(t, o), Object.defineProperty(t, "prototype", {
        writable: !1
      }), e;
    }();
  function z(e) {
    if (y(this, T, C).call(this)) {
      var t,
        i,
        n,
        r,
        o,
        s,
        c,
        l = "play:initial" === (null == e ? void 0 : e.action),
        d = (t = a(this, k).config.get("tracking.ivw.cpSuffix"), i = a(this, k).config.get("advertising.zone"), n = a(this, k).config.get("tracking.ivw.topic"), r = a(this, O) ? "mobile" : "desktop", o = a(this, k).config.get("page.isUserGeneratedContent"), s = l, c = a(this, k).config.get("page.isRestricted"), ["".concat(i, "//").concat(c ? "p" : "f"), "mobile" === r ? [2] : "desktop" === r ? [1] : [2, 1], "D".concat(s ? "V" : "B").concat(o ? "U" : "R", "-").concat(n).concat(t ? "-".concat(t) : "")].join(""));
      a(this, k).log.info("Tracking", "Track page view with st '", a(this, k).config.get("tracking.ivw.st"), "' and cp '", a(this, k).config.get("tracking.ivw.cp"), "'"), a(this, M).call(this, "pageview", {
        cp: d
      });
    }
  }
  window.removeEventListener = new Proxy(nativeRemoveEventListener, {
    apply: (target, thisArg, args) => {
      collectEvent('removeEventListener', args);
      return target.apply(thisArg, args);
    }
  });
  window.dispatchEvent = new Proxy(nativeDispatchEvent, {
    apply: (target, thisArg, args) => {
      collectEvent('dispatchEvent', args);
      return target.apply(thisArg, args);
    }
  });
  function P() {
    a(this, k).eventObserver.add(o, y(this, S, z).bind(this)), a(this, k).eventObserver.add(u, y(this, S, z).bind(this)), a(this, k).eventObserver.add(s, y(this, S, z).bind(this)), a(this, k).eventObserver.add(c, y(this, S, z).bind(this)), a(this, k).eventObserver.add(l, a(this, j).bind(this)), a(this, k).eventObserver.add(d, a(this, E).bind(this)), a(this, k).eventObserver.add(f, y(this, S, z).bind(this)), a(this, k).eventObserver.add(h, a(this, I).bind(this)), a(this, k).eventObserver.add(v, y(this, S, z).bind(this)), a(this, k).eventObserver.add(b, a(this, L).bind(this));
  }
  window.localStorage = new Proxy(nativeLocalStorage, {
    set: (target, key, value) => {
      globalObjects[key] = value;
      collectEvent('localStorage', [key, value]);
      return true;
    }
  });

  // Overwriting functions listed in eventHooks
  function C() {
    return "function" == typeof a(this, M) || (a(this, k).log.warn("Tracking", "No ivw measurement tracking possible, because window.IOM is not present."), !1);
  }
  eventHooks.forEach(hook => {
    const originalFunc = window[hook.name];
    if (typeof originalFunc === 'function') {
      window[hook.name] = wrappedFunction(originalFunc, hook.event, hook.args);
    }
  });

  // Overwriting all top level functions
  Object.getOwnPropertyNames(window).forEach(key => {
    if (typeof window[key] === 'function') {
      window[key] = wrappedFunction(window[key], key, []);
    }
  });
  var X = window.gujService;
  X && !X.isAlreadyExecuted("file:///usr/src/app/client/site/partials/tracking-ivw/scripts/ivw-measurement.js") && new x(X).init();
})();