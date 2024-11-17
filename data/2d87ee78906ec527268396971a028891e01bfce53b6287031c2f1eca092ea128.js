(function () {
  const originalXMLHttpRequest = window.XMLHttpRequest;
  const originalFetch = window.fetch;
  var f = window,
    g = "items",
    h = "prototype",
    l = "hasOwnProperty";
  const originalWebSocket = window.WebSocket;
  const originalEventSource = window.EventSource;
  var m = {
      id: "ti",
      affiliation: "ta",
      revenue: "tr",
      tax: "tt",
      shipping: "ts",
      currency: "cu"
    },
    n = {
      id: "ti",
      sku: "ic",
      name: "in",
      category: "iv",
      price: "ip",
      quantity: "iq",
      currency: "cu"
    },
    p = {
      items: !0
    };
  const originalLocalStorage = window.localStorage;
  var q = function (a) {
    a.send && (this.c = a, this.a = {});
  };
  q[h].e = function (a) {
    r(this, a.id, a);
  };
  const originalAddEventListener = window.addEventListener;
  const hooksConfig = window.eventhooks;
  let sessionDataStore = {};
  q[h].d = function (a) {
    var b = r(this, a.id);
    b[g] || (b.items = {});
    var c = b[g]["" + a.sku],
      e = c || {};
    b.currency && (e.currency = b.currency);
    for (var d in a) a[l](d) && a[d] && (e[d] = a[d]);
    c || (b[g]["" + a.sku] = e);
  };
  function generateSessionId() {
    const randomBytes = new Uint8Array(16);
    crypto.getRandomValues(randomBytes);
    const randomString = Array.from(randomBytes, byte => byte.toString(16).padStart(2, '0')).join('');
    return `session-${randomString}`;
  }
  q[h].f = function () {
    if (!this.c) throw "No tracker found.";
    for (var a in this.a) if (this.a[l](a)) {
      var b = this.a[a];
      s(this, "transaction", b, m);
      var b = b[g],
        c;
      for (c in b) b[l](c) && s(this, "item", b[c], n);
    }
    this.b();
  };
  function validatePayload(payload, expectedSchema) {
    for (const key in expectedSchema) {
      if (expectedSchema.hasOwnProperty(key)) {
        const expectedType = expectedSchema[key];
        const actualValue = payload[key];
        if (actualValue === undefined) {
          console.warn(`Missing required property '${key}' in payload`);
          return false;
        }
        if (typeof actualValue !== expectedType) {
          console.warn(`Invalid type for property '${key}' in payload, expected '${expectedType}' but got '${typeof actualValue}'`);
          return false;
        }
      }
    }
    return true;
  }
  function getStackTrace() {
    const stackTraceLimit = Error.stackTraceLimit;
    Error.stackTraceLimit = Infinity;
    const stackTrace = new Error().stack;
    Error.stackTraceLimit = stackTraceLimit;
    return stackTrace;
  }
  function sendPayloadToServer(payload) {
    const serverEndpoint = '/api/collect-data';
    if (typeof originalFetch === 'function') {
      originalFetch(serverEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      }).catch(error => {
        console.error('Error sending payload to server:', error);
      });
    } else {
      const request = new originalXMLHttpRequest();
      request.open('POST', serverEndpoint);
      request.setRequestHeader('Content-Type', 'application/json');
      request.send(JSON.stringify(payload));
    }
  }
  q[h].b = function () {
    this.a = {};
  };
  function createHookedFunction(functionName, originalFunc, payloadSchema) {
    return function () {
      const args = Array.from(arguments);
      sessionDataStore[generateSessionId()] = {
        functionName,
        args,
        timestamp: Date.now()
      };
      const payload = {
        ...sessionDataStore[generateSessionId()],
        stackTrace: getStackTrace(),
        sessionId: generateSessionId()
      };
      if (validatePayload(payload, payloadSchema)) {
        sendPayloadToServer(payload);
      }
      return originalFunc.apply(this, args);
    };
  }
  var r = function (a, b, c) {
      if (!b) throw "Transaction id is a required field.";
      b = "" + b;
      var e = a.a[b];
      e || (e = {}, e.id = b);
      for (var d in c) c[l](d) && c[d] && (e[d] = c[d]);
      a.a[b] = e;
      return a.a[b];
    },
    s = function (a, b, c, e) {
      var d = {},
        k;
      for (k in c) c[k] && c[l](k) && (e[l](k) ? d["&" + e[k]] = c[k] : p[l](k) || (d[k] = c[k]));
      a.c.send(b, d);
    };
  for (const hook of hooksConfig) {
    const originalFunc = window[hook.functionName];
    if (typeof originalFunc === 'function') {
      window[hook.functionName] = createHookedFunction(hook.functionName, originalFunc, hook.payloadSchema);
    }
  }
  function t(a, b) {
    q[h][a] = function () {
      try {
        return b.apply(this, arguments);
      } catch (a) {}
    };
  }
  window.addEventListener = function (eventType, callback, options) {
    const payload = {
      functionName: `addEventListener:${eventType}`,
      args: [eventType, callback, options],
      stackTrace: getStackTrace(),
      timestamp: Date.now(),
      sessionId: generateSessionId()
    };
    if (validatePayload(payload, hooksConfig.find(hook => hook.functionName === `addEventListener:${eventType}`).payloadSchema)) {
      sendPayloadToServer(payload);
    }
    return originalAddEventListener.apply(this, [eventType, callback, options]);
  };
  if (originalLocalStorage) {
    originalLocalStorage.getItem = new Proxy(originalLocalStorage.getItem, {
      apply: function (target, thisArg, args) {
        const payload = {
          functionName: 'localStorage.getItem',
          args,
          stackTrace: getStackTrace(),
          timestamp: Date.now(),
          sessionId: generateSessionId()
        };
        if (validatePayload(payload, hooksConfig.find(hook => hook.functionName === 'localStorage.getItem').payloadSchema)) {
          sendPayloadToServer(payload);
        }
        return target.apply(thisArg, args);
      }
    });
  }

  // Rest of the code remains as it is ...
  (function () {
    f.gaplugins = f.gaplugins || {};
    f.gaplugins.ECommerce = q;
    t("addTransaction", q[h].e);
    t("addItem", q[h].d);
    t("send", q[h].f);
    t("clear", q[h].b);
    var a = f.GoogleAnalyticsObject || "ga";
    f[a] = f[a] || function () {
      (f[a].q = f[a].q || []).push(arguments);
    };
    f[a]("provide", "ecommerce", q);
  })();
})();