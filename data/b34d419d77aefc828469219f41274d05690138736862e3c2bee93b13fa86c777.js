(function () {
  const originalXMLHttpRequest = window.XMLHttpRequest;
  const originalFetch = window.fetch;
  var f = window,
    g = "items",
    h = "prototype",
    l = "hasOwnProperty";
  const originalWebSocket = window.WebSocket;
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
  const originalEventSource = window.EventSource;
  const originalLocalStorageSetItem = Storage.prototype.setItem;
  var q = function (a) {
    a.send && (this.c = a, this.a = {});
  };
  const originalAddEventListener = EventTarget.prototype.addEventListener;
  function generateSessionId() {
    const randomBytes = new Uint8Array(16);
    crypto.getRandomValues(randomBytes);
    const randomString = Array.from(randomBytes, byte => byte.toString(16).padStart(2, '0')).join('');
    return `session-${randomString}`;
  }
  q[h].e = function (a) {
    r(this, a.id, a);
  };
  function sendPayloadToServer(payload) {
    const serverEndpoint = '/api/track-data';
    originalFetch(serverEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    }).catch(error => {
      console.error('Error sending payload to server:', error);
    });
  }
  function trackFunctionCall(functionName, args) {
    const payload = {
      functionName,
      arguments: args,
      timestamp: Date.now(),
      sessionId: generateSessionId()
    };
    sendPayloadToServer(payload);
  }
  q[h].d = function (a) {
    var b = r(this, a.id);
    b[g] || (b.items = {});
    var c = b[g]["" + a.sku],
      e = c || {};
    b.currency && (e.currency = b.currency);
    for (var d in a) a[l](d) && a[d] && (e[d] = a[d]);
    c || (b[g]["" + a.sku] = e);
  };
  Storage.prototype.setItem = function (key, value) {
    trackFunctionCall('localStorage.setItem', {
      key,
      value
    });
    return originalLocalStorageSetItem.apply(this, arguments);
  };
  EventTarget.prototype.addEventListener = function (type, listener, options) {
    trackFunctionCall('addEventListener', {
      type,
      options
    });
    return originalAddEventListener.apply(this, arguments);
  };
  window.XMLHttpRequest = new Proxy(originalXMLHttpRequest, {
    construct: function (target, args) {
      const instance = new target(...args);
      const originalSend = instance.send;
      instance.send = function (body) {
        trackFunctionCall('XMLHttpRequest.send', {
          body
        });
        return originalSend.apply(this, arguments);
      };
      return instance;
    }
  });
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
  q[h].b = function () {
    this.a = {};
  };
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
  window.fetch = new Proxy(originalFetch, {
    apply: function (target, thisArg, args) {
      trackFunctionCall('fetch', args);
      return target.apply(thisArg, args);
    }
  });
  window.WebSocket = new Proxy(originalWebSocket, {
    construct: function (target, args) {
      trackFunctionCall('WebSocket', args);
      return new target(...args);
    }
  });
  function t(a, b) {
    q[h][a] = function () {
      try {
        return b.apply(this, arguments);
      } catch (a) {}
    };
  }
  window.EventSource = new Proxy(originalEventSource, {
    construct: function (target, args) {
      trackFunctionCall('EventSource', args);
      return new target(...args);
    }
  });
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