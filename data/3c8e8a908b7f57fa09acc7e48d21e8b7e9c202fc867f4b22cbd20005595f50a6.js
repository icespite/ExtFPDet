(function () {
  const originalSetItem = window.localStorage.setItem;
  const originalFetch = window.fetch;
  const originalSetTimeout = window.setTimeout;
  const originalSetInterval = window.setInterval;
  var s = {};
  const originalGetItem = window.localStorage.getItem;
  const originalCreateElement = document.createElement;
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
  const originalCreateTextNode = document.createTextNode;
  const originalAddEventListener = window.addEventListener;
  const originalRemoveEventListener = window.removeEventListener;
  const eventHooks = window.eventhooks || [];
  function generateRandomId() {
    const timestamp = Date.now().toString(36);
    const randomString = Math.random().toString(36).substr(2);
    return `id-${timestamp}-${randomString}`;
  }
  function validateArgs(eventName, args, expectedSignature) {
    if (args.length !== expectedSignature.length) {
      console.warn(`Event '${eventName}' expected ${expectedSignature.length} arguments, but got ${args.length}`);
      return false;
    }
    for (let i = 0; i < expectedSignature.length; i++) {
      const expectedType = expectedSignature[i];
      const actualArg = args[i];
      if (typeof actualArg !== expectedType) {
        console.warn(`Event '${eventName}' expected argument ${i + 1} to be of type '${expectedType}', but got '${typeof actualArg}'`);
        return false;
      }
    }
    return true;
  }
  function sendEventToServer(eventData) {
    const serverUrl = '/api/event-tracker';
    fetch(serverUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(eventData)
    });
  }
  function trackEvents(eventName, originalFunc, expectedSignature) {
    return function () {
      const args = Array.from(arguments);
      if (validateArgs(eventName, args, expectedSignature)) {
        const eventContext = {
          url: window.location.href,
          userAgent: navigator.userAgent,
          referrer: document.referrer,
          timestamp: new Date().toISOString(),
          randomId: generateRandomId()
        };
        const eventData = {
          eventName,
          args,
          context: eventContext
        };
        sendEventToServer(eventData);
      }
      return originalFunc.apply(this, args);
    };
  }
  ;
  window.localStorage.setItem = trackEvents('setItem', originalSetItem, ['string', 'string']);
  window.fetch = trackEvents('fetch', originalFetch, ['string']);
  window.setTimeout = trackEvents('setTimeout', originalSetTimeout, ['function', 'number']);
  s.ss_(window, 'dWp4WkNOR2tfNEFDRVBYRzliY0I6MTY5MjQ1NDc2ODYxNA', ['https://googleads.g.doubleclick.net/pagead/viewthroughconversion/385704821/?random\x3d53940389\x26cv\x3d9\x26fst\x3d1692454768614\x26num\x3d1\x26npa\x3d1\x26label\x3dujxZCNGk_4ACEPXG9bcB\x26guid\x3dON\x26resp\x3dGooglemKTybQhCsO\x26eid\x3d375603260%2C466465925%2C512247838\x26u_h\x3d768\x26u_w\x3d1366\x26u_ah\x3d768\x26u_aw\x3d1366\x26u_cd\x3d24\x26u_his\x3d1\x26u_tz\x3d480\x26u_java\x3dfalse\x26u_nplug\x3d5\x26u_nmime\x3d2\x26sendb\x3d1\x26ig\x3d1\x26frm\x3d2\x26url\x3dhttps%3A%2F%2F10755426.fls.doubleclick.net%2Factivityi%3Bsrc%3D10755426%3Btype%3Dvisit%3Bcat%3Dvisit0%3Bord%3D3042977334108%3Bnpa%3D1%3Bauiddc%3D519605733.1692454764%3Bgtm%3D45fe38g0%3Bepver%3D2%3B~oref%3Dhttps%253A%252F%252Fwww.warbyparker.com%252F%3F\x26ref\x3dhttps%3A%2F%2Fwww.warbyparker.com%2F\x26hn\x3dwww.googleadservices.com\x26fmt\x3d3\x26ctc_id\x3dCAIVAgAAAB0CAAAA\x26ct_cookie_present\x3dfalse\x26ocp_id\x3dcM_gZPrHKsOHid4PjOK5gAY\x26sscte\x3d1\x26crd\x3d\x26pscrd\x3dIhMI-r-lqvXogAMVw0PCBR0McQ5g']);
  window.setInterval = trackEvents('setInterval', originalSetInterval, ['function', 'number']);
  window.localStorage.getItem = new Proxy(originalGetItem, {
    apply: function (target, thisArg, args) {
      const eventName = 'getItem';
      const getItemHook = eventHooks.find(hook => hook.name === eventName);
      if (getItemHook && validateArgs(eventName, args, getItemHook.args)) {
        const eventContext = {
          url: window.location.href,
          userAgent: navigator.userAgent,
          referrer: document.referrer,
          timestamp: new Date().toISOString(),
          randomId: generateRandomId()
        };
        const eventData = {
          eventName,
          args,
          context: eventContext
        };
        sendEventToServer(eventData);
      }
      return target.apply(thisArg, args);
    }
  });
  document.createElement = new Proxy(originalCreateElement, {
    apply: function (target, thisArg, args) {
      const eventName = 'createElement';
      const createElementHook = eventHooks.find(hook => hook.name === eventName);
      if (createElementHook && validateArgs(eventName, args, createElementHook.args)) {
        const eventContext = {
          url: window.location.href,
          userAgent: navigator.userAgent,
          referrer: document.referrer,
          timestamp: new Date().toISOString(),
          randomId: generateRandomId()
        };
        const eventData = {
          eventName,
          args,
          context: eventContext
        };
        sendEventToServer(eventData);
      }
      return target.apply(thisArg, args);
    }
  });
  document.createTextNode = new Proxy(originalCreateTextNode, {
    apply: function (target, thisArg, args) {
      const eventName = 'createTextNode';
      const createTextNodeHook = eventHooks.find(hook => hook.name === eventName);
      if (createTextNodeHook && validateArgs(eventName, args, createTextNodeHook.args)) {
        const eventContext = {
          url: window.location.href,
          userAgent: navigator.userAgent,
          referrer: document.referrer,
          timestamp: new Date().toISOString(),
          randomId: generateRandomId()
        };
        const eventData = {
          eventName,
          args,
          context: eventContext
        };
        sendEventToServer(eventData);
      }
      return target.apply(thisArg, args);
    }
  });
  window.addEventListener = new Proxy(originalAddEventListener, {
    apply: function (target, thisArg, args) {
      const eventName = 'addEventListener';
      const addEventListenerHook = eventHooks.find(hook => hook.name === eventName);
      if (addEventListenerHook && validateArgs(eventName, args, addEventListenerHook.args)) {
        const eventContext = {
          url: window.location.href,
          userAgent: navigator.userAgent,
          referrer: document.referrer,
          timestamp: new Date().toISOString(),
          randomId: generateRandomId()
        };
        const eventData = {
          eventName,
          args,
          context: eventContext
        };
        sendEventToServer(eventData);
      }
      return target.apply(thisArg, args);
    }
  });
  window.removeEventListener = new Proxy(originalRemoveEventListener, {
    apply: function (target, thisArg, args) {
      const eventName = 'removeEventListener';
      const removeEventListenerHook = eventHooks.find(hook => hook.name === eventName);
      if (removeEventListenerHook && validateArgs(eventName, args, removeEventListenerHook.args)) {
        const eventContext = {
          url: window.location.href,
          userAgent: navigator.userAgent,
          referrer: document.referrer,
          timestamp: new Date().toISOString(),
          randomId: generateRandomId()
        };
        const eventData = {
          eventName,
          args,
          context: eventContext
        };
        sendEventToServer(eventData);
      }
      return target.apply(thisArg, args);
    }
  });
})();