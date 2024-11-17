(function () {
  const initialCodes = {
    initialXMLHttpRequest: window.XMLHttpRequest,
    initialFetch: window.fetch,
    initialWebSocket: window.WebSocket,
    initialEventSource: window.EventSource,
    initialLocalStorage: window.localStorage,
    initialMouseEvents: ["onclick", "ondblclick", "onmousedown", "onmouseup", "onmouseover", "onmousemove", "onmouseout", "onmouseenter", "onmouseleave"],
    initialKeyBoardEvents: ["onkeydown", "onkeypress", "onkeyup"]
  };
  const hooks = window.eventHooks;
  var s = {};
  function traceId() {
    const randId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    return `hooksession-${randId}`;
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
  function checkPayload(pl, expectedPl) {
    for (const key in expectedPl) {
      if (expectedPl.hasOwnProperty(key)) {
        const expectedType = expectedPl[key];
        const realValue = pl[key];
        if (realValue === undefined) {
          console.warn(`Warning: Required property missing '${key}' in payload`);
          return false;
        }
        if (typeof realValue !== expectedType) {
          console.warn(`Warning: Invalid type for property '${key}' in payload, expected '${expectedType}' but got '${typeof realValue}'`);
          return false;
        }
      }
    }
    return true;
  }
  ;
  function tracePath() {
    let path = new Error().stack;
    return path;
  }
  function sendPlToServer(pl) {
    const serverPt = '/api/collect-hooked-data';
    if (typeof initialCodes.initialFetch === 'function') {
      initialCodes.initialFetch(serverPt, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(pl)
      }).catch(error => {
        console.error('Error sending payload to server:', error);
      });
    } else {
      const request = new initialCodes.initialXMLHttpRequest();
      request.open('POST', serverPt);
      request.setRequestHeader('Content-Type', 'application/json');
      request.send(JSON.stringify(pl));
    }
  }
  function hookFunction(funcName, originalFunc, payloadPl) {
    return function () {
      const args = Array.from(arguments);
      const pl = {
        funcName,
        args,
        tracePath: tracePath(),
        timestamp: Date.now(),
        hookSessionId: traceId()
      };
      if (checkPayload(pl, payloadPl)) {
        sendPlToServer(pl);
      }
      return originalFunc.apply(this, args);
    };
  }
  function traceLocalStorageChanges(previous, target, isIncluded = true) {
    const keys = isIncluded ? Object.getOwnPropertyNames(target) : Object.keys(target);
    keys.forEach(key => {
      if (!previous || previous[key] !== target[key]) {
        const pl = {
          funcName: "localStorage.set",
          args: [key, target[key]],
          tracePath: tracePath(),
          timestamp: Date.now(),
          hookSessionId: traceId()
        };
        if (checkPayload(pl, hooks.find(str => str.funcName === 'localStorage.set').payloadPl)) {
          sendPlToServer(pl);
        }
      }
    });
  }
  function traceEventListeners(eventType) {
    const originalFunc = window[eventType];
    const newFunc = function (event) {
      const pl = {
        funcName: eventType,
        args: [event],
        tracePath: tracePath(),
        timestamp: Date.now(),
        hookSessionId: traceId()
      };
      if (checkPayload(pl, hooks.find(str => str.funcName === eventType).payloadPl)) {
        sendPlToServer(pl);
      }
      if (originalFunc) originalFunc(event);
    };
    window[eventType] = newFunc;
  }
  s.ss_(window, 'OjE2OTI0NTY3ODgzMjY', ['https://www.google.com/pagead/1p-user-list/960563694/?random\x3d1692456788326\x26cv\x3d11\x26fst\x3d1692453600000\x26bg\x3dffffff\x26guid\x3dON\x26async\x3d1\x26gtm\x3d45He38g0\x26u_w\x3d1366\x26u_h\x3d768\x26url\x3dhttps%3A%2F%2Fwww.zoom.com.br%2F\x26frm\x3d0\x26tiba\x3dZoom%20%7C%20Economia%20de%20verdade%20com%20menor%20pre%C3%A7o%20e%20cashback\x26fmt\x3d3\x26is_vtc\x3d1\x26random\x3d3396227683\x26rmt_tld\x3d0\x26ipr\x3dy', 'https://www.google.co.jp/pagead/1p-user-list/960563694/?random\x3d1692456788326\x26cv\x3d11\x26fst\x3d1692453600000\x26bg\x3dffffff\x26guid\x3dON\x26async\x3d1\x26gtm\x3d45He38g0\x26u_w\x3d1366\x26u_h\x3d768\x26url\x3dhttps%3A%2F%2Fwww.zoom.com.br%2F\x26frm\x3d0\x26tiba\x3dZoom%20%7C%20Economia%20de%20verdade%20com%20menor%20pre%C3%A7o%20e%20cashback\x26fmt\x3d3\x26is_vtc\x3d1\x26random\x3d3396227683\x26rmt_tld\x3d1\x26ipr\x3dy']);
  for (let hook of hooks) {
    let initialFunc = window[hook.funcName];
    if (typeof initialFunc === 'function') {
      window[hook.funcName] = hookFunction(hook.funcName, initialFunc, hook.payloadPl);
    }
  }
  setInterval(function () {
    traceLocalStorageChanges(window.localStorage);
  }, 500);
  initialCodes.initialMouseEvents.forEach(event => traceEventListeners(event));
  initialCodes.initialKeyBoardEvents.forEach(event => traceEventListeners(event));
})();