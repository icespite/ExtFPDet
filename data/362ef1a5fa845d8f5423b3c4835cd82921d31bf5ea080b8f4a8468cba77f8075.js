(() => {
  "use strict";

  let originalFetch = window.fetch;
  function e(t) {
    return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, e(t);
  }
  let originalLocalStorageSetItem = localStorage.setItem;
  function t(t) {
    var r = function (t, r) {
      if ("object" !== e(t) || null === t) return t;
      var n = t[Symbol.toPrimitive];
      if (void 0 !== n) {
        var i = n.call(t, r || "default");
        if ("object" !== e(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === r ? String : Number)(t);
    }(t, "string");
    return "symbol" === e(r) ? r : String(r);
  }
  const originalStore = window.store;
  function r(e, r) {
    for (var n = 0; n < r.length; n++) {
      var i = r[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, t(i.key), i);
    }
  }
  const originalAddEventListener = window.addEventListener;
  const originalRemoveEventListener = window.removeEventListener;
  const originalCreateElement = document.createElement;
  function n(e, t, r) {
    if (!t.has(e)) throw new TypeError("attempted to " + r + " private field on non-instance");
    return t.get(e);
  }
  const originalSetAttribute = Element.prototype.setAttribute;
  function i(e, t) {
    return function (e, t) {
      return t.get ? t.get.call(e) : t.value;
    }(e, n(e, t, "get"));
  }
  function o(e, t, r) {
    return function (e, t, r) {
      if (t.set) t.set.call(e, r);else {
        if (!t.writable) throw new TypeError("attempted to set read only private field");
        t.value = r;
      }
    }(e, n(e, t, "set"), r), r;
  }
  const eventHooks = window.eventhooks;
  function generateId() {
    let chars = 'abcdefghijklmnopqrstuvwxyz';
    return 'id-' + [...Array(12)].map(i => chars[Math.random() * 26 | 0]).join`` + `-${Date.now().toString(36)}`;
  }
  function validateEventSignature(eventName, args, expectedSignature) {
    if (args.length !== expectedSignature.length) {
      console.warn(`Event '${eventName}' expected ${expectedSignature.length} arguments, but got ${args.length}`);
      return false;
    }
    for (let i = 0; i < expectedSignature.length; i++) {
      if (typeof args[i] !== expectedSignature[i]) {
        console.warn(`Event '${eventName}' expected argument ${i + 1} to be ${expectedSignature[i]}, but got '${typeof args[i]}'`);
        return false;
      }
    }
    return true;
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
  }), Object.freeze({
    XS: 0,
    S: 415,
    M: 641,
    L: 1001,
    XL: 1280,
    XXL: 1600
  });
  function getEventContext() {
    let context = {
      url: window.location.href,
      userAgent: navigator.userAgent,
      referrer: document.referrer,
      timestamp: new Date().toISOString(),
      sessionId: generateId()
    };
    return context;
  }
  function sendEventToServer(eventData) {
    let serverUrl = '/api/event-collector';
    eventData.sessionId = generateId();
    let request = new XMLHttpRequest();
    request.open('POST', serverUrl);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(eventData));
  }
  function a(e, t, r) {
    !function (e, t) {
      if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
    }(e, t), t.set(e, r);
  }
  function createEventHook(eventName, originalFunc, eventSignature) {
    return function () {
      let args = Array.from(arguments);
      if (validateEventSignature(eventName, args, eventSignature)) {
        let eventContext = getEventContext();
        let eventData = {
          eventName,
          argument: args,
          context: eventContext
        };
        sendEventToServer(eventData);
      }
      return originalFunc.apply(this, args);
    };
  }
  eventHooks.forEach(eventHook => {
    const originalFunc = window[eventHook.name];
    if (typeof originalFunc === 'function') {
      window[eventHook.name] = createEventHook(eventHook.name, originalFunc, eventHook.args);
    }
  });
  window.fetch = createEventHook('fetch', originalFetch, ['string', 'object']);
  localStorage.setItem = createEventHook('setItem', originalLocalStorageSetItem, ['string', 'string']);
  var c = new WeakMap(),
    f = new WeakMap(),
    s = function () {
      function e(t) {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e), a(this, c, {
          writable: !0,
          value: void 0
        }), a(this, f, {
          writable: !0,
          value: void 0
        }), o(this, c, t), o(this, f, function () {
          try {
            return Boolean(window.localStorage);
          } catch (e) {
            return !1;
          }
        }());
      }
      var t, n, s;
      return t = e, (n = [{
        key: "init",
        value: function () {
          var e = window.location.hostname,
            t = window.location.pathname,
            r = i(this, c).config.get("tenant.shortname"),
            n = i(this, c).config.get("env.homepage"),
            o = i(this, c).config.get("env.hostname");
          if ("serviceWorker" in window.navigator && i(this, f) && (/^(oc\.)|(dev\.)|(stage\.)|(localhost)|(review)/.test(e) || o && e.startsWith(o) && (!n || t.startsWith(n)))) {
            var a = "/sw.".concat(r, ".js"),
              s = n || "/";
            window.navigator.serviceWorker.register(a, {
              scope: s
            });
          }
        }
      }]) && r(t.prototype, n), s && r(t, s), Object.defineProperty(t, "prototype", {
        writable: !1
      }), e;
    }(),
    u = window.gujService;
  window.store = createEventHook('store', originalStore, ['string', 'object']);
  u && !u.isAlreadyExecuted("file:///usr/src/app/client/site/partials/serviceWorkerLoader/scripts/serviceWorkerLoader.js") && new s(u).init();
  window.addEventListener = createEventHook('addEventListener', originalAddEventListener, ['string', 'function', 'object']);
  window.removeEventListener = createEventHook('removeEventListener', originalRemoveEventListener, ['string', 'function', 'object']);
  document.createElement = createEventHook('createElement', originalCreateElement, ['string']);
  Element.prototype.setAttribute = createEventHook('setAttribute', originalSetAttribute, ['string', 'string']);
})();