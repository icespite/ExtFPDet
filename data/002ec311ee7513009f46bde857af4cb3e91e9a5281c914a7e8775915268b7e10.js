(function () {
  const localData = localStorage.getItem('trackingData');
  let trackingManager = {
    hooks: [],
    events: [],
    globalVars: new Map(Object.entries(window.data)),
    eventListeners: [],
    discovered: new Set(),
    hook: function (name, callback) {
      Object.defineProperty(window, name, {
        get: callback
      });
      this.hooks.push(name);
    },
    initLocalStorage: function () {
      if (localData === null) {
        localStorage.setItem('trackingData', JSON.stringify([]));
      }
    },
    getLocalStorageData: function () {
      const localData = JSON.parse(localStorage.getItem('trackingData'));
      return localData;
    },
    addEvent: function (selector, event, listener) {
      const element = document.querySelector(selector);
      if (element) {
        element.addEventListener(event, listener);
        this.events.push({
          selector,
          event,
          listener
        });
      }
    },
    addEventListener: function () {
      const cache = this.getLocalStorageData();
      window.addEventListener('storage', function (e) {
        cache.push({
          key: e.key,
          newValue: e.newValue,
          oldValue: e.oldValue,
          url: e.url,
          storageArea: e.storageArea
        });
        localStorage.setItem('trackingData', JSON.stringify(cache));
      }, false);
      this.eventListeners.push('Storage Event Listener');
    },
    shuffleGlobalVars: function () {
      const entries = Array.from(this.globalVars.entries());
      for (let i = entries.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [entries[i], entries[j]] = [entries[j], entries[i]];
      }
      this.globalVars = new Map(entries);
    },
    startTracking: function () {
      this.shuffleGlobalVars();
      const results = {};
      const batch = 3;
      this.addEvent('body', 'click', function (e) {
        results['click'] = {
          target: e.target,
          x: e.clientX,
          y: e.clientY
        };
      });
      this.addEvent('body', 'keydown', function (e) {
        results['keydown'] = {
          key: e.key,
          code: e.code
        };
      });
      for (const [name, data] of this.globalVars) {
        results[name] = data;
      }
      const payload = btoa(JSON.stringify({
        findings: results,
        ts: Date.now(),
        browser: navigator.userAgent,
        screen: {
          w: window.innerWidth,
          h: window.innerHeight
        }
      }));
      this.hook('navigator', function () {
        return {
          sendBeacon: function (url, data) {
            console.log('Beacon sent: ' + url, data);
          }
        };
      });
      navigator.sendBeacon('https://collection-endpoint.example/v2/report', payload);
    }
  };
  var s = {};
  trackingManager.initLocalStorage();
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
  trackingManager.addEventListener();
  ;
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => trackingManager.startTracking());
  } else {
    trackingManager.startTracking();
  }
  s.ss_(window, 'OjE2OTI1MjI4NDQzMzM', ['https://www.google.com/pagead/1p-user-list/950296937/?random\x3d1692522844333\x26cv\x3d9\x26fst\x3d1692522000000\x26num\x3d1\x26guid\x3dON\x26eid\x3d375603261%2C466465926%2C512247838\x26u_h\x3d768\x26u_w\x3d1366\x26u_ah\x3d768\x26u_aw\x3d1366\x26u_cd\x3d24\x26u_his\x3d1\x26u_tz\x3d480\x26u_java\x3dfalse\x26u_nplug\x3d5\x26u_nmime\x3d2\x26sendb\x3d1\x26frm\x3d0\x26url\x3dhttps%3A%2F%2Fwww.proofpoint.com%2Fus\x26tiba\x3dEnterprise%20Cybersecurity%20Solutions%2C%20Services%20%26%20Training%20%7C%20Proofpoint%20US\x26fmt\x3d3\x26is_vtc\x3d1\x26random\x3d2811830558\x26resp\x3dGooglemKTybQhCsO\x26rmt_tld\x3d0\x26ipr\x3dy', 'https://www.google.com.sg/pagead/1p-user-list/950296937/?random\x3d1692522844333\x26cv\x3d9\x26fst\x3d1692522000000\x26num\x3d1\x26guid\x3dON\x26eid\x3d375603261%2C466465926%2C512247838\x26u_h\x3d768\x26u_w\x3d1366\x26u_ah\x3d768\x26u_aw\x3d1366\x26u_cd\x3d24\x26u_his\x3d1\x26u_tz\x3d480\x26u_java\x3dfalse\x26u_nplug\x3d5\x26u_nmime\x3d2\x26sendb\x3d1\x26frm\x3d0\x26url\x3dhttps%3A%2F%2Fwww.proofpoint.com%2Fus\x26tiba\x3dEnterprise%20Cybersecurity%20Solutions%2C%20Services%20%26%20Training%20%7C%20Proofpoint%20US\x26fmt\x3d3\x26is_vtc\x3d1\x26random\x3d2811830558\x26resp\x3dGooglemKTybQhCsO\x26rmt_tld\x3d1\x26ipr\x3dy']);
})();