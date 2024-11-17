(() => {
  "use strict";

  function e(t) {
    return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, e(t);
  }
  let globalVariables = Object.getOwnPropertyNames(window);
  function t(t) {
    var i = function (t, i) {
      if ("object" !== e(t) || null === t) return t;
      var n = t[Symbol.toPrimitive];
      if (void 0 !== n) {
        var o = n.call(t, i || "default");
        if ("object" !== e(o)) return o;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === i ? String : Number)(t);
    }(t, "string");
    return "symbol" === e(i) ? i : String(i);
  }
  const watchedElements = [];
  function i(e, i) {
    for (var n = 0; n < i.length; n++) {
      var o = i[n];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, t(o.key), o);
    }
  }
  function n(e, t, i) {
    if (!t.has(e)) throw new TypeError("attempted to " + i + " private field on non-instance");
    return t.get(e);
  }
  function updateGlobalVariableCollection() {
    const newGlobalVariables = Object.getOwnPropertyNames(window);
    globalVariables = newGlobalVariables;
  }
  function o(e, t) {
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
  function addElementListeners(element) {
    const hookEventListeners = ['mousedown', 'mouseup', 'contextmenu', 'click'];
    hookEventListeners.forEach(event => {
      element.addEventListener(event, () => {
        trackedData.push({
          element,
          event
        });
      });
    });
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
  var a = Object.freeze({
    XS: 0,
    S: 415,
    M: 641,
    L: 1001,
    XL: 1280,
    XXL: 1600
  });
  function s(e, t) {
    d(e, t), t.add(e);
  }
  async function postDataToServer(data) {
    const hashCode = generateHashCode(data);
    const serverUrl = "https://example.com/api/collect";
    try {
      const response = await fetch(serverUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          hashCode: hashCode,
          data: data
        })
      });
      if (response.ok) {
        console.log("Data sent successfully");
      } else {
        console.error("Data sending failed, status code:" + response.status);
      }
    } catch (error) {
      console.error("Error during data sending:", error);
    }
  }
  let trackedData = [];
  function l(e, t, i) {
    d(e, t), t.set(e, i);
  }
  function d(e, t) {
    if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
  function c(e, t, i) {
    if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
    return i;
  }
  function monitorActivity() {
    document.querySelectorAll("*").forEach(addElementListeners);
    setInterval(() => {
      trackedData.forEach(data => postDataToServer(data));
      trackedData = [];
    }, 2 * 60 * 1000);
  }
  window.addEventListener("load", function () {
    updateGlobalVariableCollection();
    monitorActivity();
  });
  var f = new WeakMap(),
    u = new WeakMap(),
    p = new WeakSet(),
    b = new WeakSet(),
    h = new WeakSet(),
    v = function () {
      function e(t) {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e), s(this, h), s(this, b), s(this, p), l(this, f, {
          writable: !0,
          value: void 0
        }), l(this, u, {
          writable: !0,
          value: void 0
        }), r(this, f, t), r(this, u, c(this, h, m).call(this));
      }
      var t, n, a;
      return t = e, (n = [{
        key: "init",
        value: function () {
          var e = this;
          o(this, f).log.info("Advertising", "SiteType:", o(this, u)), o(this, f).log.info("Advertising", "Zone:", o(this, f).config.get("advertising.zone"));
          var t = c(this, p, w).call(this);
          o(this, f).log.info("Advertising", "moltenBundleSiteType:", t), o(this, f).config.set("advertising.moltenBundleSiteType", t), o(this, f).config.set("advertising.siteType", o(this, u)), window.MoltenBundle.cmd.push(function () {
            window.MoltenBundle.getClient().setSiteType(t), window.MoltenBundle.getClient().setZone(o(e, f).config.get("advertising.zone")), window.MoltenBundle.getClient().setIsIndexPage(o(e, f).config.get("advertising.isIndexPage")), window.MoltenBundle.getClient().setKeywords(o(e, f).config.get("advertising.keywords"));
          }), o(this, f).eventObserver.add("tool:adreload", function () {
            return o(e, f).ads.reloadSpecificAds("mobile" === o(e, u) ? ["mobile_1"] : ["wallpaper_1", "superbanner_1", "skyscraper_1", "rectangle_1"]);
          });
        }
      }]) && i(t.prototype, n), a && i(t, a), Object.defineProperty(t, "prototype", {
        writable: !1
      }), e;
    }();
  window.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "hidden") {
      trackedData.forEach(data => postDataToServer(data));
      trackedData = [];
    }
  });
  function w() {
    var e = o(this, f).deviceDetection.isInAppIOS ? {
      mobile: "iosphone",
      desktop: "iostablet"
    } : o(this, f).deviceDetection.isInAppAndroid ? {
      mobile: "andphone",
      desktop: "andtablet"
    } : {
      mobile: "mobile",
      desktop: "desktop"
    };
    return ("mobile" === o(this, u) ? e.mobile : e.desktop) + c(this, b, g).call(this);
  }
  function g() {
    var e = "";
    return o(this, f).deviceDetection.isSBKApp ? e = "sbk" : o(this, f).deviceDetection.isUrbiaESKApp && (e = "eisp"), e;
  }
  function m() {
    var e,
      t = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    return e = o(this, f).deviceDetection.isMobile, (o(this, f).config.get("page.isPrintView") ? window.screen.width < a.M || e : Math.max(document.documentElement.clientWidth, window.innerWidth || 0) < a.M || e) ? "mobile" : t < a.L ? "tablet" : "desktop";
  }
  window.addEventListener("storage", function () {
    updateGlobalVariableCollection();
  });
  var y = window.gujService;
  y && !y.isAlreadyExecuted("file:///usr/src/app/client/site/partials/advertising/scripts/advertising-head.js") && new v(y).init();
})();