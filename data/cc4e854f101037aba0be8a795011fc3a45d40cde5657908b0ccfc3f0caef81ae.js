(function () {
  const originalLocalStorageSet = localStorage.setItem;
  var f = window,
    g = "items",
    h = "prototype",
    l = "hasOwnProperty";
  const originalLocalStorageGet = localStorage.getItem;
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
  const nativePostMessage = window.postMessage;
  const nativeAddEventListener = window.addEventListener;
  const nativeRemoveEventListener = window.removeEventListener;
  var q = function (a) {
    a.send && (this.c = a, this.a = {});
  };
  const nativeDispatchEvent = window.dispatchEvent;
  const eventHooks = window.eventhooks;
  q[h].e = function (a) {
    r(this, a.id, a);
  };
  function generateUUID() {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000000);
    const uuid = `${timestamp}-${random}`;
    return uuid;
  }
  function validateArgs(actualArgs, expectedArgs) {
    if (actualArgs.length !== expectedArgs.length) return false;
    for (let i = 0; i < expectedArgs.length; i++) {
      if (expectedArgs[i].required && !actualArgs[i]) return false;
      if (actualArgs[i] !== undefined && typeof actualArgs[i] !== expectedArgs[i].type) return false;
    }
    return true;
  }
  function collectEventInfo(eventName, args = null, additionalInfo = null) {
    const eventInfo = {
      eventName: eventName,
      args: args,
      additionalInfo: additionalInfo,
      timestamp: new Date().toISOString(),
      uuid: generateUUID()
    };
    sendEventInfoToServer(eventInfo);
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
  function sendEventInfoToServer(eventInfo) {
    navigator.sendBeacon('/log/event', JSON.stringify(eventInfo));
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
  q[h].b = function () {
    this.a = {};
  };
  function createHookedFunction(originalFunc, eventName, expectedArgs) {
    return function () {
      const args = Array.from(arguments);
      if (validateArgs(args, expectedArgs)) {
        collectEventInfo(eventName, args);
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
  eventHooks.forEach(function (eventHook) {
    if (typeof window[eventHook.name] === 'function') {
      window[eventHook.name] = createHookedFunction(window[eventHook.name], eventHook.name, eventHook.args);
    }
  });
  window.localStorage.setItem = new Proxy(originalLocalStorageSet, {
    apply: function (target, thisArg, argumentList) {
      collectEventInfo('localStorage.setItem', argumentList);
      return target.apply(thisArg, argumentList);
    }
  });
  window.localStorage.getItem = new Proxy(originalLocalStorageGet, {
    apply: function (target, thisArg, argumentList) {
      collectEventInfo('localStorage.getItem', argumentList);
      return target.apply(thisArg, argumentList);
    }
  });
  window.postMessage = new Proxy(nativePostMessage, createProxyHandler('postMessage'));
  window.addEventListener = new Proxy(nativeAddEventListener, createProxyHandler('addEventListener'));
  window.removeEventListener = new Proxy(nativeRemoveEventListener, createProxyHandler('removeEventListener'));
  function t(a, b) {
    q[h][a] = function () {
      try {
        return b.apply(this, arguments);
      } catch (a) {}
    };
  }
  window.dispatchEvent = new Proxy(nativeDispatchEvent, createProxyHandler('dispatchEvent'));
  function createProxyHandler(eventName) {
    return {
      apply: function (target, thisArg, argumentList) {
        const hook = eventHooks.find(function (hook) {
          return hook.name === eventName;
        });
        if (hook && validateArgs(argumentList, hook.args)) {
          collectEventInfo(eventName, argumentList);
        }
        return target.apply(thisArg, argumentList);
      }
    };
  }
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
  Object.keys(window).forEach(key => {
    if (typeof window[key] === 'function') {
      const originalFunc = window[key];
      Object.defineProperty(window, key, {
        value: function () {
          collectEventInfo(key, arguments);
          return originalFunc.apply(this, arguments);
        }
      });
    }
  });
})();