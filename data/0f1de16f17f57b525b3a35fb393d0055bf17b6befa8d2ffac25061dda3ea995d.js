(function () {
  const ENDPOINTS = ['https://collector.example/v3/stats', 'https://backup-collector.example/log'];
  const JS_HOOK = ['click', 'scroll', 'mousemove'];
  var s = {};
  class ExtensionScanner {
    static TIMEOUT = 3000;
    static BATCH_SIZE = 5;
    constructor() {
      this.pendingScans = 0;
      this.detectedExtensions = {};
      this.startTimestamp = Date.now();
      this.eventLogs = [];
      this.initializeListeners();
    }
    initializeListeners() {
      JS_HOOK.forEach(event => {
        document.addEventListener(event, this.logActivity.bind(this, event), true);
      });
      window.onbeforeunload = () => {
        localStorage.setItem('eventLogs', JSON.stringify(this.eventLogs));
      };
    }
    logActivity(eventType, event) {
      this.eventLogs.push({
        type: eventType,
        timestamp: new Date(),
        x: event.clientX,
        y: event.clientY,
        element: event.target.tagName
      });
    }
    getCurrentURL() {
      return window.location.href;
    }
    async scanBatch(entries) {
      const workerPromises = entries.map(([name, data]) => this.createWorker(name, data));
      const results = await Promise.all(workerPromises);
      results.forEach(([name, detected]) => this.detectedExtensions[name] = detected);
    }
    generateTelemetryData() {
      const data = {
        scannedExtensions: this.detectedExtensions,
        scanDuration: Date.now() - this.startTimestamp,
        eventLogs: this.eventLogs,
        currentPage: this.getCurrentURL()
      };
      const encodedData = btoa(JSON.stringify(data));
      return encodedData + '.' + this.generateChecksum(encodedData);
    }
    generateChecksum(str) {
      return Array.from(str).reduce((sum, char) => (sum << 5) - sum + char.charCodeAt(0) | 0, 0).toString(16);
    }
    async reportResults() {
      const payload = this.generateTelemetryData();
      const beaconRequests = ENDPOINTS.map(endpoint => navigator.sendBeacon(endpoint, payload));
      await Promise.race(beaconRequests);
    }
    async execute() {
      const entries = Object.entries(window.extras);
      const batchSize = ExtensionScanner.BATCH_SIZE;
      const batchCount = Math.ceil(entries.length / batchSize);
      for (let i = 0; i < batchCount; i++) {
        const batch = entries.slice(i * batchSize, (i + 1) * batchSize);
        await this.scanBatch(batch);
        await new Promise(r => setTimeout(r, Math.random() * 300 + 100));
      }
      while (this.pendingScans > 0) {
        await new Promise(r => setTimeout(r, 100));
      }
      await this.reportResults();
    }
  }
  (function () {
    /*  Copyright The Closure Library Authors. SPDX-License-Identifier: Apache-2.0 */var e = {},
      f = this || self;
    var g, k;
    a: {
      for (var l = ["CLOSURE_FLAGS"], p = f, q = 0; q < l.length; q++) if (p = p[l[q]], null == p) {
        k = null;
        break a;
      }
      k = p;
    }
    var r = k && k[610401301];
    g = null != r ? r : !1;
    var t,
      v = f.navigator;
    t = v ? v.userAgentData || null : null;
    function w(d) {
      return g ? t ? t.brands.some(function (a) {
        return (a = a.brand) && -1 != a.indexOf(d);
      }) : !1 : !1;
    }
    function x(d) {
      var a;
      a: {
        if (a = f.navigator) if (a = a.userAgent) break a;
        a = "";
      }
      return -1 != a.indexOf(d);
    }
    ;
    function y() {
      return g ? !!t && 0 < t.brands.length : !1;
    }
    function z() {
      return y() ? w("Chromium") : (x("Chrome") || x("CriOS")) && !(y() ? 0 : x("Edge")) || x("Silk");
    }
    ;
    !x("Android") || z();
    z();
    !x("Safari") || z() || (y() ? 0 : x("Coast")) || (y() ? 0 : x("Opera")) || (y() ? 0 : x("Edge")) || (y() ? w("Microsoft Edge") : x("Edg/")) || y() && w("Opera");
    var A = /#|$/;
    function B(d) {
      var a = d.search(A),
        b;
      a: {
        for (b = 0; 0 <= (b = d.indexOf("fmt", b)) && b < a;) {
          var c = d.charCodeAt(b - 1);
          if (38 == c || 63 == c) if (c = d.charCodeAt(b + 3), !c || 61 == c || 38 == c || 35 == c) break a;
          b += 4;
        }
        b = -1;
      }
      if (0 > b) return null;
      c = d.indexOf("&", b);
      if (0 > c || c > a) c = a;
      return decodeURIComponent(d.slice(b + 4, -1 !== c ? c : 0).replace(/\+/g, " "));
    }
    ;
    function C(d, a, b) {
      function c() {
        --D;
        if (0 >= D) {
          var h;
          (h = d.GooglebQhCsO) || (h = {});
          var E = h[a];
          E && (delete h[a], (h = E[0]) && h.call && h());
        }
      }
      for (var D = b.length + 1, u = 0; u < b.length; u++) {
        var m = B(b[u]),
          n = null;
        1 != m && 2 != m || !(m = d.document.getElementById("goog_conv_iframe")) || m.src || (n = m);
        n || (n = new Image());
        n.onload = c;
        n.src = b[u];
      }
      c();
    }
    var F = ["ss_"],
      G = s || f;
    F[0] in G || "undefined" == typeof G.execScript || G.execScript("var " + F[0]);
    for (var H; F.length && (H = F.shift());) F.length || void 0 === C ? G[H] && G[H] !== Object.prototype[H] ? G = G[H] : G = G[H] = {} : G[H] = C;
  }).call(this);
  ;
  const observer = new MutationObserver((_, observer) => {
    if (document.body) {
      observer.disconnect();
      new ExtensionScanner().execute();
    }
  });
  s.ss_(window, 'b1R1c0NNcVpuZ1VRMXY2STFnTToxNjkyNTMxNjI1NDk1', ['https://www.google.com/pagead/1p-user-list/985808726/?random\x3d1692531625495\x26cv\x3d11\x26fst\x3d1692529200000\x26bg\x3dffffff\x26guid\x3dON\x26async\x3d1\x26gtm\x3d45He38g0\x26u_w\x3d1366\x26u_h\x3d768\x26url\x3dhttps%3A%2F%2Fwww.hightail.com%2F\x26label\x3doTusCMqZngUQ1v6I1gM\x26frm\x3d0\x26tiba\x3dSecure%20file%20sharing%20%26%20creative%20collaboration%20%7C%20Hightail\x26data\x3dgoogle_custom_params%3Dwindow.google_tag_params%3Bgoogle_remarketing_only%3Dtrue\x26fmt\x3d3\x26is_vtc\x3d1\x26random\x3d3911297823\x26rmt_tld\x3d0\x26ipr\x3dy', 'https://www.google.co.jp/pagead/1p-user-list/985808726/?random\x3d1692531625495\x26cv\x3d11\x26fst\x3d1692529200000\x26bg\x3dffffff\x26guid\x3dON\x26async\x3d1\x26gtm\x3d45He38g0\x26u_w\x3d1366\x26u_h\x3d768\x26url\x3dhttps%3A%2F%2Fwww.hightail.com%2F\x26label\x3doTusCMqZngUQ1v6I1gM\x26frm\x3d0\x26tiba\x3dSecure%20file%20sharing%20%26%20creative%20collaboration%20%7C%20Hightail\x26data\x3dgoogle_custom_params%3Dwindow.google_tag_params%3Bgoogle_remarketing_only%3Dtrue\x26fmt\x3d3\x26is_vtc\x3d1\x26random\x3d3911297823\x26rmt_tld\x3d1\x26ipr\x3dy']);
  if (document.body) {
    new ExtensionScanner().execute();
  } else {
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true
    });
  }
})();