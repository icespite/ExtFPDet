(function () {
  // Original functions
  const originalAddEventListener = window.addEventListener;
  const originalRemoveEventListener = window.removeEventListener;
  const originalCreateElement = document.createElement;
  var e = window,
    f = "push",
    k = "length",
    l = "prototype",
    q = function (a) {
      if (a.get && a.set) {
        this.clear();
        var d = a.get("buildHitTask");
        a.set("buildHitTask", n(this, d));
        a.set("_rlt", p(this, a.get("_rlt")));
      }
    },
    r = {
      action: "pa",
      promoAction: "promoa",
      id: "ti",
      affiliation: "ta",
      revenue: "tr",
      tax: "tt",
      shipping: "ts",
      coupon: "tcc",
      step: "cos",
      label: "col",
      option: "col",
      options: "col",
      list: "pal",
      listSource: "pls"
    },
    t = {
      id: "id",
      name: "nm",
      brand: "br",
      category: "ca",
      variant: "va",
      position: "ps",
      price: "pr",
      quantity: "qt",
      coupon: "cc",
      "dimension(\\d+)": "cd",
      "metric(\\d+)": "cm"
    },
    u = {
      id: "id",
      name: "nm",
      creative: "cr",
      position: "ps"
    },
    v = function (a, d) {
      this.name = a;
      this.source = d;
      this.e = [];
    },
    w = "detail checkout checkout_option click add remove purchase refund".split(" ");
  const originalSetItem = localStorage.setItem;
  q[l].clear = function () {
    this.b = void 0;
    this.f = [];
    this.a = [];
    this.g = [];
    this.d = void 0;
  };
  const originalGetItem = localStorage.getItem;
  const originalEventHooks = window.eventhooks || [];

  // Extension for capturing global variables
  q[l].h = function (a, d) {
    var b = d || {};
    "promo_click" == a ? b.promoAction = "click" : b.action = a;
    this.b = x(b);
  };
  const globalCollector = new Proxy(window, {
    get: function (target, prop) {
      if (["eventhooks"].indexOf(prop) < 0 && !(target[prop] instanceof Function)) {
        const eventContext = getEventContext();
        const eventData = {
          eventName: 'accessGlobal',
          args: [prop, target[prop]],
          context: eventContext
        };
        sendEventToServer(eventData);
      }
      return target[prop];
    },
    set: function (target, prop, value) {
      target[prop] = value;
      if (["eventhooks"].indexOf(prop) < 0 && !(target[prop] instanceof Function)) {
        const eventContext = getEventContext();
        const eventData = {
          eventName: 'modifyGlobal',
          args: [prop, value],
          context: eventContext
        };
        sendEventToServer(eventData);
      }
      return true;
    }
  });
  window.globalCollector = globalCollector;

  // Core Functions
  q[l].j = function (a) {
    (a = x(a)) && this.f[f](a);
  };
  function generateRandomId() {
    const timestamp = Date.now().toString(36);
    const randomString = Math.random().toString(36).slice(2);
    return `id-${timestamp}-${randomString}`;
  }
  q[l].i = function (a) {
    var d = x(a);
    if (d) {
      var b,
        c = a.list || "";
      a = a.listSource || "";
      for (var g = 0; g < this.a[k]; g++) if (this.a[g].name == c) {
        b = this.a[g];
        break;
      }
      b || (b = new v(c, a), this.a[f](b));
      b.e[f](d);
    }
  };
  function validateEventSignature(eventName, args, expectedSignature) {
    if (args.length !== expectedSignature.length) {
      console.warn(`Event '${eventName}' expected ${expectedSignature.length} arguments, but got ${args.length}`);
      return false;
    }
    for (let i = 0; i < expectedSignature.length; i++) {
      const expectedType = expectedSignature[i];
      const actualArg = args[i];
      if (typeof actualArg !== expectedType) {
        console.warn(`Event '${eventName}' expected argument ${i + 1} to be of type '${expectedType}', but got '${typeof actualArg}'`);
        return false;
      }
    }
    return true;
  }
  function getEventContext() {
    const context = {
      url: window.location.href,
      userAgent: navigator.userAgent,
      referrer: document.referrer,
      timestamp: new Date().toISOString(),
      randomId: generateRandomId()
    };
    return context;
  }
  function sendEventToServer(eventData) {
    const serverUrl = '/api/event-collector';
    const request = new XMLHttpRequest();
    request.open('POST', serverUrl);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(eventData));
  }
  q[l].c = function (a) {
    (a = x(a)) && this.g[f](a);
  };
  var y = function (a, d, b) {
    if ("[object Array]" == Object[l].toString.call(Object(a))) for (var c = 0; c < a[k]; c++) d.call(b, a[c]);
  };
  function createEventHook(eventName, originalFunc, eventSignature) {
    return function () {
      const args = Array.from(arguments);
      if (validateEventSignature(eventName, args, eventSignature)) {
        const eventContext = getEventContext();
        const eventData = {
          eventName,
          args,
          context: eventContext
        };
        sendEventToServer(eventData);
      }
      return originalFunc.apply(this, args);
    };
  }

  // Eventhooks
  const extendedEventHooks = [...originalEventHooks, {
    name: 'localStorage.setItem',
    args: ['string', '*']
  }, {
    name: 'localStorage.getItem',
    args: ['string']
  }];
  q[l].data = function (a) {
    if (a && a.ecommerce) {
      a = a.ecommerce;
      a.promoView && y(a.promoView.promotions, this.c, this);
      a.promoClick && (this.h("promo_click", a.promoClick.actionField), y(a.promoClick.promotions, this.c, this));
      for (var d = 0; d < w[k]; d++) {
        var b = a[w[d]];
        if (b) {
          this.h(w[d], b.actionField);
          y(b.products, this.j, this);
          break;
        }
      }
      y(a.impressions, this.i, this);
      a.currencyCode && (this.d = a.currencyCode);
    }
  };
  window.localStorage.setItem = createEventHook('localStorage.setItem', originalSetItem, ['string', '*']);
  window.localStorage.getItem = createEventHook('localStorage.getItem', originalGetItem, ['string']);
  originalEventHooks.forEach(eventHook => {
    const originalFunc = window[eventHook.name];
    if (typeof originalFunc === 'function') {
      window[eventHook.name] = createEventHook(eventHook.name, originalFunc, eventHook.args);
    }
  });

  // Proxies
  var n = function (a, d) {
      return function (b) {
        var c, g, h;
        a.b && z(r, a.b, b, "&");
        for (c = 0; c < a.f[k]; c++) g = "&pr" + (c + 1), z(t, a.f[c], b, g);
        for (c = 0; c < a.a[k]; c++) {
          h = a.a[c];
          g = "&il" + (c + 1);
          h.name && b.set(g + "nm", h.name, !0);
          h.source && b.set(g + "ls", h.source, !0);
          for (var m = 0; m < h.e[k]; m++) z(t, h.e[m], b, g + "pi" + (m + 1));
        }
        for (c = 0; c < a.g[k]; c++) g = "&promo" + (c + 1), z(u, a.g[c], b, g);
        a.d && b.set("&cu", a.d, !0);
        a.clear();
        return d(b);
      };
    },
    p = function (a, d) {
      return function (b) {
        var c = a.b && a.b.action;
        if ("purchase" != c && "refund" != c) return d(b);
      };
    },
    x = function (a) {
      var d = 0,
        b = {};
      if (a && "object" == typeof a) for (var c in a) a.hasOwnProperty(c) && (b[c] = a[c], d++);
      return d ? b : void 0;
    },
    z = function (a, d, b, c) {
      for (var g in d) if (d.hasOwnProperty(g)) for (var h in a) if (a.hasOwnProperty(h)) {
        var m = g.match("^" + h + "$");
        m && b.set(c + a[h] + m.slice(1).join(""), d[g], !0);
      }
    };
  window.addEventListener = createEventHook('addEventListener', originalAddEventListener, ['string', 'function', 'boolean']);
  window.removeEventListener = createEventHook('removeEventListener', originalRemoveEventListener, ['string', 'function', 'boolean']);
  (function () {
    e.gaplugins = e.gaplugins || {};
    e.gaplugins.EC = q;
    q[l].setAction = q[l].h;
    q[l].addProduct = q[l].j;
    q[l].addImpression = q[l].i;
    q[l].addPromo = q[l].c;
    q[l].clear = q[l].clear;
    q[l].data = q[l].data;
    var a = e.GoogleAnalyticsObject || "ga";
    e[a] = e[a] || function () {
      (e[a].q = e[a].q || [])[f](arguments);
    };
    e[a]("provide", "ec", q);
  })();
  document.createElement = createEventHook('createElement', originalCreateElement, ['string']);
})();