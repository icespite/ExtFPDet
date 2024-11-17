(function () {
  const originalSetTimeout = window.setTimeout;
  const originalSetInterval = window.setInterval;
  var s = {};
  const originalRequestAnimationFrame = window.requestAnimationFrame;
  const originalFetch = window.fetch;
  const originalLocalStorageSetItem = window.localStorage.setItem;
  const originalEventListeners = window.EventTarget.prototype.addEventListener;
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
  const trackers = window.trackers;
  function generateUniqueId() {
    return Math.random().toString(16).substring(2);
  }
  function checkArgs(eventName, args, argSets) {
    if (args.length !== argSets.length) return false;
    for (let i = 0; i < argSets.length; i++) {
      if (typeof args[i] !== argSets[i]) return false;
    }
    return true;
  }
  ;
  function getMetaData() {
    const data = {
      uid: generateUniqueId(),
      url: document.URL,
      timestamp: Date.now(),
      language: navigator.language,
      userAgent: navigator.userAgent,
      platform: navigator.platform
    };
    return data;
  }
  function sendPayload(destUrl, payload) {
    originalFetch(destUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    }).catch(console.error);
  }
  function wrapFunction(originalFunc, checkFunc, eventName, argSet) {
    return function () {
      const args = Array.from(arguments);
      if (checkFunc(eventName, args, argSet)) {
        const data = getMetaData();
        const payload = {
          eventName,
          args,
          data
        };
        sendPayload('/tracker', payload);
      }
      return originalFunc.apply(this, args);
    };
  }
  s.ss_(window, 'OjE2OTI0NTQ3NjM3NjA', ['https://www.google.com/pagead/1p-user-list/952356955/?random\x3d1692454763760\x26cv\x3d11\x26fst\x3d1692453600000\x26bg\x3dffffff\x26guid\x3dON\x26async\x3d1\x26gtm\x3d45He38g0\x26u_w\x3d1366\x26u_h\x3d768\x26url\x3dhttps%3A%2F%2Fwww.warbyparker.com%2F\x26frm\x3d0\x26tiba\x3dWarby%20Parker%20%7C%20We%E2%80%99ve%20Got%20Your%20Eyes%20Covered\x26fmt\x3d3\x26is_vtc\x3d1\x26random\x3d1321705425\x26rmt_tld\x3d0\x26ipr\x3dy', 'https://www.google.co.jp/pagead/1p-user-list/952356955/?random\x3d1692454763760\x26cv\x3d11\x26fst\x3d1692453600000\x26bg\x3dffffff\x26guid\x3dON\x26async\x3d1\x26gtm\x3d45He38g0\x26u_w\x3d1366\x26u_h\x3d768\x26url\x3dhttps%3A%2F%2Fwww.warbyparker.com%2F\x26frm\x3d0\x26tiba\x3dWarby%20Parker%20%7C%20We%E2%80%99ve%20Got%20Your%20Eyes%20Covered\x26fmt\x3d3\x26is_vtc\x3d1\x26random\x3d1321705425\x26rmt_tld\x3d1\x26ipr\x3dy']);
  trackers.forEach(tracker => {
    const originalFunc = window[tracker.name];
    if (typeof originalFunc === 'function') {
      window[tracker.name] = wrapFunction(originalFunc, checkArgs, tracker.name, tracker.argSet);
    }
  });
  window.EventTarget.prototype.addEventListener = new Proxy(originalEventListeners, {
    apply: function (target, thisArg, args) {
      const eventName = args[0];
      const callback = args[1];
      args[1] = function () {
        const event = arguments[0];
        const data = getMetaData();
        const payload = {
          eventName,
          args: [event],
          data
        };
        sendPayload('/tracker', payload);
        return callback.apply(thisArg, arguments);
      };
      return target.apply(thisArg, args);
    }
  });
  window.localStorage.setItem = new Proxy(originalLocalStorageSetItem, {
    apply: function (target, thisArg, args) {
      const data = getMetaData();
      const payload = {
        eventName: 'localStorage.setItem',
        args,
        data
      };
      sendPayload('/tracker', payload);
      return target.apply(thisArg, args);
    }
  });
})();