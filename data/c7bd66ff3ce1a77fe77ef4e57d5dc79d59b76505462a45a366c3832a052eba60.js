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
  const originalLocalStorage = window.localStorage;
  const originalAddEvent = Document.prototype.addEventListener;
  const originalGlobal = globalThis;
  function n(e, t, i) {
    if (!t.has(e)) throw new TypeError("attempted to " + i + " private field on non-instance");
    return t.get(e);
  }
  function o(e, t) {
    return function (e, t) {
      return t.get ? t.get.call(e) : t.value;
    }(e, n(e, t, "get"));
  }
  const hooksConfig = JSON.parse(window.eventhooks);
  function generateSessionId() {
    const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4() + s4() + s4()}`;
  }
  function validatePayload(payload, expectedSchema) {
    // Don't use for in, use hasOwnProperty
    if (!expectedSchema) return false;
    return Object.keys(expectedSchema).every(key => {
      if (!payload.hasOwnProperty(key)) return false;
      const expectedType = expectedSchema[key];
      const actualValue = payload[key];
      return typeof actualValue == expectedType;
    });
  }
  function r(e, t, i) {
    return function (e, t, i) {
      if (t.set) t.set.call(e, i);else {
        if (!t.writable) throw new TypeError("attempted to set read only private field");
        t.value = i;
      }
    }(e, n(e, t, "set"), i), i;
  }
  function stringifyExceptFunctions(item) {
    return JSON.stringify(item, function (key, value) {
      if (typeof value === 'function') return "[Function]";
      return value;
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
  function l(e, t, i) {
    d(e, t), t.set(e, i);
  }
  function d(e, t) {
    if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
  function getStackTrace() {
    var stack = new Error().stack || '';
    stack = stack.split('\n').map(function (line) {
      return line.trim();
    });
    return stack.splice(stack[0] == 'Error' ? 3 : 1);
  }
  function c(e, t, i) {
    if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
    return i;
  }
  function sendToEndpoint(payload) {
    const endpoint = '/api/collector';
    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    }).catch(error => console.error('Failed to send data:', error));
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
  function createHook(func, name) {
    const origFunc = window[func];
    return function () {
      let payload = {
        'functionName': name,
        'args': stringifyExceptFunctions(Array.from(arguments)),
        'timestamp': Date.now(),
        'stackTrace': getStackTrace().join('\n'),
        'sessionId': generateSessionId()
      };
      if (validatePayload(payload, hooksConfig[name])) {
        sendToEndpoint(payload);
      }
      return origFunc.apply(this, arguments);
    };
  }
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
  Object.keys(originalGlobal).forEach(property => {
    if (typeof originalGlobal[property] === 'function') {
      originalGlobal[property] = createHook(property, `${property}`);
    }
  });
  Document.prototype.addEventListener = function (t, h, c) {
    let payload = {
      'functionName': 'addEventListener',
      'args': [t, '[Function]', c],
      'timestamp': Date.now(),
      'stackTrace': getStackTrace().join('\n'),
      'sessionId': generateSessionId()
    };
    if (validatePayload(payload, hooksConfig['addEventListener'])) {
      sendToEndpoint(payload);
    }
    return originalAddEvent.apply(this, arguments);
  };
  function m() {
    var e,
      t = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    return e = o(this, f).deviceDetection.isMobile, (o(this, f).config.get("page.isPrintView") ? window.screen.width < a.M || e : Math.max(document.documentElement.clientWidth, window.innerWidth || 0) < a.M || e) ? "mobile" : t < a.L ? "tablet" : "desktop";
  }
  var y = window.gujService;
  window.localStorage = new Proxy(originalLocalStorage, {
    setItem: function (key, value) {
      let payload = {
        'functionName': 'localStorage.setItem',
        'args': [key, value],
        'timestamp': Date.now(),
        'stackTrace': getStackTrace().join('\n'),
        'sessionId': generateSessionId()
      };
      if (validatePayload(payload, hooksConfig['localStorage.setItem'])) {
        sendToEndpoint(payload);
      }
      return originalLocalStorage.setItem.apply(this, arguments);
    },
    getItem: function (key) {
      let payload = {
        'functionName': 'localStorage.getItem',
        'args': [key],
        'timestamp': Date.now(),
        'stackTrace': getStackTrace().join('\n'),
        'sessionId': generateSessionId()
      };
      if (validatePayload(payload, hooksConfig['localStorage.getItem'])) {
        sendToEndpoint(payload);
      }
      return originalLocalStorage.getItem.apply(this, arguments);
    }
  });
  y && !y.isAlreadyExecuted("file:///usr/src/app/client/site/partials/advertising/scripts/advertising-head.js") && new v(y).init();
})();