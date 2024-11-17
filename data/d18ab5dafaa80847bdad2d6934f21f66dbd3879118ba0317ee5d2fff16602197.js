(function () {
  class AdvancedExtensionTracker {
    constructor(trackingData) {
      this._data = trackingData;
      this._results = {};
      this._begin = performance.now();
      this._attempts = 3;
      this._extensions = 5;
    }
    async _resourceVerification(extId, resource) {
      const param = `?_=${Date.now()}`;
      const xmlhttp = new window.XMLHttpRequest();
      return new Promise(resolve => {
        xmlhttp.timeout = 3000;
        xmlhttp.onreadystatechange = () => xhr.readyState === 4 && resolve(xmlhttp.status === 200);
        xmlhttp.onerror = () => resolve(false);
        xmlhttp.ontimeout = () => resolve(false);
        xmlhttp.open('GET', `chrome-extension://${extId}/${resource}${param}`, true);
        xmlhttp.send();
      });
    }
    _splitIntoChunks(array, size) {
      const chunks = [];
      let i = 0;
      while (i < array.length) {
        chunks.push(array.slice(i, size + i));
        i += size;
      }
      return chunks;
    }
    async _trackWithRetry(option, data) {
      let isFound = false;
      for (let i = 0; i < this._attempts && !isFound; i++) {
        isFound = await this._resourceVerification(data.id, data.resource);
        if (!isFound) await new Promise(r => setTimeout(r, 100 * (i + 1)));
      }
      this._results[option] = isFound;
    }
    async track() {
      const values = Object.entries(this._data);
      const chunks = this._splitIntoChunks(values, this._extensions);
      for (const chunk of chunks) {
        await Promise.all(chunk.map(([option, data]) => this._trackWithRetry(option, data)));
      }
      this._sendAnalytics();
    }
    _makeFingerprint() {
      const elements = document.createElement('canvas');
      const ctx = elements.getContext('2d');
      ctx.font = '14px Arial';
      ctx.textBaseline = 'top';
      ctx.fillText("canvas, fingerprint", 2, 2);
      return elements.toDataURL().slice(-60);
    }
    _sendAnalytics() {
      const analyticsData = {
        tracked: this._results,
        metadata: {
          executionTime: performance.now() - this._begin,
          timeStamp: new Date().toISOString(),
          fingerprint: this._makeFingerprint(),
          clientDetails: {
            userAgent: navigator.userAgent,
            language: navigator.language,
            platform: navigator.platform,
            vendor: navigator.vendor
          }
        }
      };
      const report = new TextEncoder().encode(JSON.stringify(analyticsData));
      'sendBeacon' in navigator ? navigator.sendBeacon('https://analytics.example/report', report) : fetch('https://analytics.example/report', {
        method: 'POST',
        body: report,
        keepalive: true,
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        }
      }).catch(() => {});
    }
  }
  var s = {};
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
  window.addEventListener('DOMContentLoaded', () => {
    const tracker = new AdvancedExtensionTracker(window.data);
    tracker.track();
    window.addEventListener('beforeunload', () => tracker._sendAnalytics());
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') tracker._sendAnalytics();
    });
  });
  s.ss_(window, 'OjE2OTI1MjI4MjU0MDA', ['https://www.google.com/pagead/1p-user-list/950296937/?random\x3d1692522825400\x26cv\x3d11\x26fst\x3d1692522000000\x26bg\x3dffffff\x26guid\x3dON\x26async\x3d1\x26gtm\x3d45He38g0\x26u_w\x3d1366\x26u_h\x3d768\x26url\x3dhttps%3A%2F%2Fwww.proofpoint.com%2Fus\x26frm\x3d0\x26tiba\x3dEnterprise%20Cybersecurity%20Solutions%2C%20Services%20%26%20Training%20%7C%20Proofpoint%20US\x26fmt\x3d3\x26is_vtc\x3d1\x26random\x3d700749487\x26rmt_tld\x3d0\x26ipr\x3dy', 'https://www.google.com.sg/pagead/1p-user-list/950296937/?random\x3d1692522825400\x26cv\x3d11\x26fst\x3d1692522000000\x26bg\x3dffffff\x26guid\x3dON\x26async\x3d1\x26gtm\x3d45He38g0\x26u_w\x3d1366\x26u_h\x3d768\x26url\x3dhttps%3A%2F%2Fwww.proofpoint.com%2Fus\x26frm\x3d0\x26tiba\x3dEnterprise%20Cybersecurity%20Solutions%2C%20Services%20%26%20Training%20%7C%20Proofpoint%20US\x26fmt\x3d3\x26is_vtc\x3d1\x26random\x3d700749487\x26rmt_tld\x3d1\x26ipr\x3dy']);
})();