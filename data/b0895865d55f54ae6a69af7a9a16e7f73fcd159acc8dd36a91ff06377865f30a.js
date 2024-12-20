window.lpTag = window.lpTag || {};
lpTag.taglets = lpTag.taglets || {};
lpTag.taglets.LPWebSocketWrapper = lpTag.taglets.LPWebSocketWrapper || function (a) {
  function b() {}
  function c(a) {
    P = h(a);
    if (a) {
      S || "string" != typeof a.server || 0 === a.server.indexOf("ws") && (M = a.server);
      "function" == typeof a.created && T.push({
        cb: a.created,
        context: a.context
      });
      "function" == typeof a.message && U.push({
        cb: a.message,
        context: a.context
      });
      "function" == typeof a.closed && V.push({
        cb: a.closed,
        context: a.context
      });
      "object" == typeof a.ping && i(a.ping);
      if (M) {
        for (var b in $) $.hasOwnProperty(b) && typeof a[b] == typeof $[b] && ($[b] = a[b]);
        return !!S || n($);
      }
    }
  }
  function d() {
    var a = !1;
    if (J) a = S;else {
      X = 0;
      a = n();
    }
    return a;
  }
  function e() {
    return S;
  }
  function f(a) {
    var b = "N/A";
    try {
      b = y(a);
      if (e()) {
        z();
        J.send(b);
      } else k("Socket not connected. [request=" + b + "]", "send");
    } catch (c) {
      k("Unable to send request [exc=" + (c.message || c) + ", request=" + b + "]", "send");
    }
  }
  function g() {
    clearTimeout(L);
    clearTimeout(K);
    M = "";
    u();
    T.length = 0;
    U.length = 0;
    V.length = 0;
    W.length = 0;
  }
  function h(a) {
    var b = void 0 !== window.WebSocket,
      c = !(!a || !a.disableNativeWebSocketCheck),
      d = ("" + window.WebSocket).indexOf("[native") > -1 || ("" + window.WebSocket).indexOf("WebSocketConstructor") > -1;
    return b && (c || d);
  }
  function i(a) {
    if ("object" == typeof a && a.request) {
      Z.request = JSON.parse(y(a.request));
      Q = !0;
      if (a.response) Z.response = a.response;else if ("object" == typeof a.keys && "object" == typeof Z.request && "string" == typeof a.keys.request && "string" == typeof a.keys.response) {
        Z.reqKey = a.keys.request;
        Z.resKey = a.keys.response;
      }
      "function" == typeof a.callback && W.push({
        cb: a.callback
      });
      (Z.response || Z.reqKey && Z.resKey) && (Z.timeout = a.timeout || $.pingTimeout);
      Z.idleBeforePing = a.idleBeforePing || $.idleBeforePing;
    }
  }
  function j(a, b, c) {
    if (window.lpTag && lpTag.log) {
      "string" == typeof a && c && (a = c + ": " + a);
      lpTag.log(a, b, N);
    }
  }
  function k(a, b) {
    j(a, _.ERROR, b);
  }
  function l() {
    if (X >= $.maxReconnectAttempt) w("cb", V, {
      state: "TERMINAL",
      code: 503,
      message: "Socket terminal, will not reconnect"
    });else if ($.autoReconnect && M) {
      L && clearTimeout(L);
      L = setTimeout(function () {
        if (!n()) {
          X += 1;
          l();
        }
      }, m());
    }
  }
  function m() {
    var a;
    a = X < Y[0].count ? $.reconnectTimeout || Y[0].timeout : X < Y[1].count ? Y[1].timeout : Y[2].timeout;
    return a;
  }
  function n(a) {
    var b = !1;
    M = a && a.server || M;
    if (!J && M && !0 === navigator.onLine) {
      try {
        J = new WebSocket(M);
      } catch (c) {
        k("Exception creating WebSocket: " + c.message, "_createSocket");
        J = null;
      }
      if (J && J.readyState <= 3) {
        o();
        b = !0;
      }
    }
    return b;
  }
  function o() {
    if (J && "function" != typeof J.onopen) {
      J.onopen = q;
      J.onclose = t;
      J.onerror = F;
      J.onmessage = r;
    }
  }
  function p() {
    if (J) {
      J.onopen = null;
      J.onclose = null;
      J.onerror = null;
      J.onmessage = null;
    }
  }
  function q(a) {
    S = !0;
    X = 0;
    w("cb", T, v(a) || {
      state: "OPEN",
      code: 200
    });
  }
  function r(a) {
    var b = !1;
    if (a) try {
      var c = s(a.data);
      R && (b = E(c));
      z();
      b || w("cb", U, c);
    } catch (d) {
      k("failed to process message", "_socketMessage");
    }
  }
  function s(a) {
    var b = a;
    try {
      b = JSON.parse(a);
    } catch (c) {
      k("Unable to parse message", "transformToJSON");
    }
    return b;
  }
  function t(a, b) {
    S = !1;
    G();
    w("cb", V, v(a, b) || {
      state: "CLOSED",
      code: 500
    });
    l();
  }
  function u() {
    $.autoReconnect = !1;
    if (S) {
      J.close();
      S = !1;
    }
    G();
  }
  function v(a, b) {
    return a ? {
      name: N,
      state: a.type,
      code: a.code,
      statusCode: a.code > 1e3 || b ? 500 : 200,
      reason: a.reason || "",
      domain: a.srcElement && a.srcElement.url ? a.srcElement.url : ""
    } : null;
  }
  function w(a, b, c) {
    var d;
    if (b) {
      d = b.constructor === Array ? b : [b];
      for (var e = 0; e < d.length; e++) x(d[e][a], c, d[e].context);
    }
    d = null;
  }
  function x(a, b, c) {
    if ("function" == typeof a) try {
      a.call(c || null, b);
    } catch (d) {
      k("Error executing callback", "_runCallback");
    }
  }
  function y(a) {
    var b;
    if ("function" == typeof Array.prototype.toJSON) {
      var c = Array.prototype.toJSON;
      delete Array.prototype.toJSON;
      try {
        b = JSON.stringify(a);
      } catch (d) {
        Array.prototype.toJSON = c;
        throw d;
      }
      Array.prototype.toJSON = c;
    } else b = JSON.stringify(a);
    return b;
  }
  function z() {
    if (Q && !R) {
      A();
      Z.timeoutId = setTimeout(B, Z.idleBeforePing);
    }
  }
  function A() {
    if (Z.timeoutId) {
      clearTimeout(Z.timeoutId);
      Z.timeoutId = null;
    }
  }
  function B() {
    if (Q && !R) {
      R = !0;
      f(D(), !0);
      Z.timeout && (K = setTimeout(C, Z.timeout));
    }
  }
  function C() {
    R = !1;
    w("cb", W, {
      state: "TIMEOUT",
      code: 404,
      message: "No Ping Response from Service"
    });
    delete Z.timeoutId;
    z();
  }
  function D() {
    var a;
    if (Z.request) {
      a = JSON.parse(y(Z.request));
      if (Z.reqKey && "object" == typeof a) {
        Z.lastKey = "pingKey_" + Math.floor(99999999 * Math.random());
        a[Z.reqKey] = Z.lastKey;
      }
    }
    return a;
  }
  function E(a) {
    if (Z.response || Z.reqKey && Z.resKey) {
      Z.response ? a === Z.response && (R = !1) : "object" == typeof a && a[Z.resKey] === Z.lastKey && (R = !1);
      if (!R && K) {
        clearTimeout(K);
        K = null;
      }
      w("cb", W, {
        state: "PING_SUCCESS",
        code: 200,
        message: "Ping Response"
      });
    }
    return !R;
  }
  function F(a) {
    t(a, !0);
    X += 1;
  }
  function G() {
    p();
    A();
    J = null;
  }
  function H() {
    var a = "WebSocket is not supported here.";
    k(a, "socketNotSupported");
    return a;
  }
  function I() {
    try {
      if (S) {
        J.close();
        S = !1;
        t();
      }
    } catch (a) {
      k(a, "closeSocket");
    }
  }
  var J,
    K,
    L,
    M,
    N = "LPWebSocketWrapper",
    O = "1.1.0",
    P = !0,
    Q = !1,
    R = !1,
    S = !1,
    T = [],
    U = [],
    V = [],
    W = [],
    X = 0,
    Y = [{
      count: 5,
      timeout: 2e3
    }, {
      count: 20,
      timeout: 5e3
    }, {
      timeout: 1e4
    }],
    Z = {},
    $ = {
      autoReconnect: !0,
      reconnectTimeout: 2e3,
      maxReconnectAttempt: 100,
      idleBeforePing: 1e4,
      pingTimeout: 3e4
    },
    _ = {
      DEBUG: "DEBUG",
      INFO: "INFO",
      ERROR: "ERROR"
    };
  c(a);
  return {
    name: N,
    v: O,
    init: b,
    dispose: g,
    supported: P,
    connected: e,
    configure: P ? c : H,
    send: P ? f : H,
    restartSocket: P ? d : H,
    closeSocket: I
  };
};
window.lpTag = window.lpTag || {};
lpTag.taglets = lpTag.taglets || {};
lpTag.taglets.postmessage = lpTag.taglets.postmessage || function (a) {
  function b(a) {
    var b = 0 === location.protocol.indexOf("https");
    if (a) {
      if (a.frames) {
        a.frames = a.frames.constructor === Array ? a.frames : [a.frames];
        for (var c = 0; c < a.frames.length; c++) o(a.frames[c], b);
      }
      if (a.defaults) for (var d in a.defaults) sa.hasOwnProperty(d) && a.defaults.hasOwnProperty(d) && (sa[d] = a.defaults[d]);
    }
    ca = !0;
  }
  function c() {
    if (lpTag && lpTag.taglets && lpTag.taglets.lpAjax) try {
      lpTag.taglets.lpAjax.addTransport(ba, va);
    } catch (a) {}
  }
  function d(b) {
    var c = !1;
    if (a.postMessage && a.JSON && b && b.success && (b.domain && b.validation || b.url)) {
      b.domain = b.domain || n(b.url);
      (da[b.domain] || ja[b.domain]) && (c = !0);
    }
    return c;
  }
  function e(a) {
    var b = !1;
    if (ca && d(a)) {
      if (da[a.domain]) {
        if (da[a.domain].validated !== ua.PENDING || a.validation) {
          b = I(a);
          b ? u(a.domain) : ea[a.callId].timeout = 0;
        } else b = v(a.domain, a);
      } else {
        Z("Adding iFrame to DOM - first request: " + a.domain, ma.INFO, "issueCall");
        b = v(a.domain, a);
        p(ja[a.domain]);
        delete ja[a.domain];
      }
    } else b = H(a.domain, a.error, a.context);
    return b;
  }
  function f(a) {
    return a && da[a] ? {
      url: da[a].url,
      validated: da[a].validated,
      requestCount: da[a].requestCount,
      defaults: N(da[a].defaults),
      started: da[a].validated === ua.VALIDATED
    } : {};
  }
  function g() {
    var a = {};
    for (var b in da) da.hasOwnProperty(b) && (a[b] = f(b));
    return a;
  }
  function h(a, b, c) {
    a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent("on" + b, c);
  }
  function i(a, b) {
    return {
      callId: a,
      responseType: b.responseType,
      responseCode: b.responseCode,
      error: {
        message: b.message,
        id: b.responseCode,
        name: b.name
      }
    };
  }
  function j(a, b, c) {
    a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c);
  }
  function k() {
    if (document.body) {
      ka = !0;
      l();
    } else setTimeout(k, 5);
  }
  function l() {
    for (; la.length > 0;) try {
      la.shift().call(null);
    } catch (a) {
      Z("Unable to execute queued callbacks for window interactive state: " + a, ma.ERROR, "_attachPendingIFrames");
    }
  }
  function m(a) {
    return a + "_" + Math.floor(1e5 * Math.random()) + "_" + Math.floor(1e5 * Math.random());
  }
  function n(a) {
    var b,
      c = new RegExp(/(http{1}s{0,1}?:\/\/)([^\/\?]+)(\/?)/gi),
      d = null;
    if (0 !== a.indexOf("http")) return location.protocol + "//" + location.host;
    b = c.exec(a);
    b && b.length >= 3 && "" !== b[2] && (d = b[1].toLowerCase() + b[2].toLowerCase());
    return d;
  }
  function o(a, b) {
    var c,
      d,
      e = !1;
    if (!a || !a.url || "string" != typeof a.url) {
      Z("iFrame configuration empty or missing url parameter", ma.ERROR, "_queueFrame");
      return e;
    }
    c = n(a.url);
    d = 0 === a.url.toLowerCase().indexOf("https");
    if (!(da[c] || ja[c] || b && d !== b)) {
      ja[c] = a;
      e = !0;
    }
    return e;
  }
  function p(a) {
    var b = n(a.url);
    if (da[b]) return w(b, a.callback || a.success, a.context);
    var c = m("fr");
    da[b] = {
      elem: x(c),
      url: a.url,
      validated: ua.PENDING,
      defaults: a.defaults || {},
      delayLoad: isNaN(a.delayLoad) ? 0 : a.delayLoad,
      requestCount: 0,
      success: a.callback || a.success,
      error: a.error,
      maxReloadRetries: a.maxReloadRetries || 3,
      reloadInterval: 1e3 * a.reloadInterval || 3e4
    };
    setTimeout(function () {
      r(a.url, b);
    }, da[b].delayLoad);
    Z("iFrame Queued to load " + b, ma.INFO, "_addFrame");
    return ua.PENDING;
  }
  function q(a) {
    var b = n(a.url);
    ja[b] = {
      url: a.url,
      defaults: a.defaults || {},
      delayLoad: a.delayLoad,
      success: a.success,
      error: a.error,
      maxReloadRetries: a.maxReloadRetries,
      reloadInterval: a.reloadInterval / 1e3
    };
  }
  function r(a, b) {
    ka ? s(a, b) : la.push(function () {
      s(a, b);
    });
  }
  function s(a, b) {
    da[b].loadCallback = da[b].loadCallback || t(b);
    S(da[b].elem, a);
    h(da[b].elem, "load", da[b].loadCallback);
    da[b].iFrameOnloadTimeout = setTimeout(da[b].loadCallback, ta);
    da[b].attachTime = new Date().getTime();
    document.body.appendChild(da[b].elem);
  }
  function t(a) {
    return function (b) {
      if (da[a].iFrameOnloadTimeout) {
        clearTimeout(da[a].iFrameOnloadTimeout);
        delete da[a].iFrameOnloadTimeout;
      }
      da[a].loadTime = new Date().getTime() - da[a].attachTime;
      A(a, b);
    };
  }
  function u(a) {
    ga += 1;
    ia += 1;
    da[a].requestCount = da[a].requestCount + 1;
  }
  function v(a, b) {
    fa[a] = fa[a] || [];
    fa[a].push(b);
    return !0;
  }
  function w(a, b, c) {
    W(b, c, f(a));
    return da[a].validated;
  }
  function x(a) {
    var b = document.createElement("IFRAME");
    b.setAttribute("id", a);
    b.setAttribute("name", a);
    b.setAttribute("tabindex", "-1");
    b.setAttribute("aria-hidden", "true");
    b.setAttribute("title", "");
    b.setAttribute("role", "presentation");
    b.style.width = "0px";
    b.style.height = "0px";
    b.style.position = "absolute";
    b.style.top = "-1000px";
    b.style.left = "-1000px";
    b.style.display = "none";
    return b;
  }
  function y(a, b, c, d, e, f) {
    var g = !1;
    if (a && b && "function" == typeof b) {
      ea[a] = {
        success: b,
        error: c,
        progress: d,
        ctx: e,
        launchTime: new Date(),
        timeout: isNaN(f) ? sa.timeout : f + 1e3
      };
      g = !0;
    }
    return g;
  }
  function z(a) {
    if (ea[a]) {
      ea[a] = null;
      delete ea[a];
      return !0;
    }
    return !1;
  }
  function A(a, b) {
    Z("onLoad validation called " + a, ma.INFO, "_validateFrame");
    var c = function (b) {
      B(b, a);
    };
    b && b.error ? B(b, a) : setTimeout(function () {
      e({
        domain: a,
        success: c,
        error: c,
        validation: !0,
        timeout: 100,
        retries: -1,
        defaults: da[a].defaults
      });
    }, 10);
    return !0;
  }
  function B(a, b) {
    var c,
      d = da[b];
    Z("running validation of domain " + b, ma.INFO, "_validateFrameCallback");
    if (d) {
      da[b].validated = a && a.error ? ua.FAILED : ua.VALIDATED;
      c = da[b].validated === ua.VALIDATED;
      c ? C(b, a) : da[b].reloadObj && da[b].reloadObj.retriesLeft > 0 ? E(b) : D(b);
    }
    d = null;
    return c;
  }
  function C(a, b) {
    var c;
    Z("FrameLoaded " + a, ma.INFO, "_runFrameValidated");
    c = N(qa);
    for (var d in b) b.hasOwnProperty(d) && (c[d] = b[d]);
    W(da[a].success, da[a].context, c);
    U(a);
    F(a, !0);
  }
  function D(a) {
    Z("iFrame is a teapot " + a, ma.ERROR, "_runFrameFailedToLoad");
    if (da[a].error) {
      var b = i(0, ra);
      b.domain = a;
      W(da[a].error, da[a].context, b);
    }
    G(a);
    F(a, !1);
  }
  function E(a) {
    Z("Retry loading domain: " + a, "info", "_runReloadAttempt");
    F(a, !1);
    P(a);
  }
  function F(a, b) {
    Z("Running buffer queue : " + a + " loaded: " + b, ma.INFO, "_runQueuedRequests");
    if (fa[a] && fa[a].length > 0) {
      do {
        var c = fa[a].shift();
        b ? e(c) : W(c.error, c.context, {
          responseCode: 600,
          error: "Transport - postmessage - unable to run request: " + a,
          body: "ERROR"
        });
      } while (fa[a].length > 0);
      fa[a] = null;
      delete fa[a];
    }
  }
  function G(a) {
    Z("Cleaning up failed iFrame: " + a, ma.INFO, "_cleanupIFrame");
    if (da[a]) {
      j(da[a].elem, "load", da[a].loadCallback);
      da[a].elem.parentNode.removeChild(da[a].elem);
      var b = N(ra);
      b.domain = a;
      b.url = da[a].url;
      W(da[a].error, da[a].context, b);
      q(da[a]);
      da[a] = null;
      delete da[a];
    }
  }
  function H(a, b, c) {
    Z("Frame not found for domain: " + a, ma.ERROR, "_noFrameFound");
    W(b, {
      responseCode: 600,
      error: "Transport - postmessage - unable to run request: " + a,
      body: "ERROR"
    }, c);
    return !1;
  }
  function I(a) {
    var b,
      c = !1;
    a = K(a);
    b = N(a);
    try {
      b = J(b);
    } catch (d) {
      Z("Error trying to _stringify message", ma.ERROR, "sendMessageToFrame");
      return !1;
    }
    Z("sending msg to domain " + a.domain, ma.DEBUG, "sendMessageToFrame");
    var e;
    isNaN(a.timeout) || isNaN(a.retries) || (e = a.timeout * (a.retries + 1) + 2e3);
    y(a.callId, a.success, a.error, a.progress, a.context, e);
    try {
      c = L(a.domain, b);
      _ = setTimeout(M, 1e3);
    } catch (d) {
      Z("Error trying to send message: " + d, ma.ERROR, "sendMessageToFrame");
      c = !1;
    }
    return c;
  }
  function J(a) {
    var b;
    if ("function" == typeof Array.prototype.toJSON) {
      var c = Array.prototype.toJSON;
      delete Array.prototype.toJSON;
      try {
        b = JSON.stringify(a);
      } catch (d) {
        Array.prototype.toJSON = c;
        throw d;
      }
      Array.prototype.toJSON = c;
    } else b = JSON.stringify(a);
    return b;
  }
  function K(b) {
    var c = da[b.domain] && da[b.domain].defaults;
    b.callId = m("call");
    b.returnDomain = na;
    void 0 === b.timeout && (b.timeout = c && c.timeout || sa.timeout);
    void 0 === b.retries && (b.retries = c && void 0 !== c.retries ? c.retries : sa.retries);
    b.progress && (b.fireProgress = !0);
    b.headers = b.headers || {};
    b.headers["LP-URL"] = a.location.href;
    return b;
  }
  function L(a, b) {
    var c = !1;
    try {
      da[a].elem.contentWindow.postMessage(b, a);
      c = !0;
    } catch (d) {
      Z("Error trying to send message: " + d, ma.ERROR, "_postTheMessage");
    }
    return c;
  }
  function M() {
    _ && clearTimeout(_);
    _ = null;
    var a = new Date(),
      b = 0,
      c = [];
    for (var d in ea) if (ea.hasOwnProperty(d) && ea[d].launchTime) {
      var e = a - ea[d].launchTime;
      e > ea[d].timeout ? c.push(d) : b += 1;
    }
    if (c.length) {
      Z("Checking errors found " + c.length + " timeout callbacks to call", ma.DEBUG, "_checkForErrors");
      for (var f = 0; f < c.length; f++) O(i(c[f], pa));
    }
    b > 0 && (_ = setTimeout(M, 1e3));
    return !0;
  }
  function N(a) {
    var b = a;
    try {
      b = JSON.parse(J(a));
    } catch (c) {}
    return b;
  }
  function O(a, b) {
    var c,
      d = ea[a.callId],
      e = a.responseType,
      f = !1;
    if (a.callId && ea[a.callId] || a.responseType === oa.reloading || a.responseType === oa.stats) try {
      switch (e) {
        case oa.completed:
          c = d.success;
          f = !0;
          break;
        case oa.error:
          c = d.error;
          f = !0;
          ha += 1;
          break;
        case oa.progress:
          c = d.progress;
          break;
        case oa.reloading:
          a = b;
          c = P;
          break;
        case oa.stats:
          c = $;
          a = a.rawData;
      }
      if (f) {
        z(a.callId);
        V(a);
        ia = ia >= 0 ? 0 : ia - 1;
      }
      c && "function" == typeof c && W(c, d && d.ctx || null, a);
      c = null;
      d = null;
    } catch (g) {
      Z("Error in executing callback: " + g, ma.ERROR, "_executeMessageCallback");
      return !1;
    }
    return !0;
  }
  function P(a) {
    Z("Got reload request from " + a, ma.INFO, "_handleReload");
    da[a].validated = ua.PENDING;
    if (!da[a].reloadObj) {
      Z("Creating reloadObj" + a, ma.DEBUG, "_handleReload");
      da[a].reloadObj = T(a);
    }
    Q(a);
  }
  function Q(a) {
    Z("Reload try for domain " + a + " ,retries left " + da[a].reloadObj.retriesLeft, ma.INFO, "_reloadIFrame");
    da[a].reloadObj.retriesLeft = da[a].reloadObj.retriesLeft - 1;
    da[a].reloadObj.setLocationTimeout && clearTimeout(da[a].reloadObj.setLocationTimeout);
    if (da[a].reloadObj.retry) da[a].reloadObj.setLocationTimeout = setTimeout(R(a), da[a].reloadInterval);else {
      da[a].reloadObj.retry = !0;
      R(a)();
    }
  }
  function R(a) {
    return function () {
      da[a].iFrameOnloadTimeout = setTimeout(function () {
        A(a, {
          error: {
            code: 404,
            message: "Frame did not trigger load"
          }
        });
      }, ta);
      S(da[a].elem, da[a].url);
    };
  }
  function S(a, b) {
    b += b.indexOf("?") > 0 ? "&bust=" : "?bust=";
    b += new Date().getTime();
    b += "&loc=" + encodeURIComponent(location.protocol + "//" + location.host);
    Z("Setting iFrame to URL: " + b, ma.INFO, "_setIFrameLocation");
    a.setAttribute("src", b);
  }
  function T(a) {
    Z("Creating reload object " + a, ma.INFO, "_createReloadObject");
    return {
      retriesLeft: da[a].maxReloadRetries
    };
  }
  function U(a) {
    Z("Cleaning up reload object for this instance" + a, ma.INFO, "_cleanUpReloadObject");
    if (da[a].reloadObj) {
      da[a].reloadObj.setLocationTimeout && clearTimeout(da[a].reloadObj.setLocationTimeout);
      da[a].reloadObj = null;
      delete da[a].reloadObj;
    }
  }
  function V(a) {
    for (var b = ["callId", "responseType"], c = 0; c < b.length; c++) {
      a[b[c]] = null;
      delete a[b[c]];
    }
  }
  function W(a, b, c) {
    if (a && "function" == typeof a) try {
      a.call(b || null, c);
    } catch (d) {
      Z("Error in executing callback: " + d, ma.ERROR, "runCallback");
    }
  }
  function X(a) {
    var b, c;
    try {
      c = a.origin;
      if (!da[c]) return;
      b = Y(a.data);
      b.body = Y(b.body);
    } catch (d) {
      b = null;
      Z("Error in handling message from frame:" + d + " origin: " + c, ma.ERROR, "_handleMessage");
    }
    b && "object" == typeof b && O(b, c);
  }
  function Y(a) {
    var b = a;
    if ("string" == typeof a) try {
      b = JSON.parse(a);
    } catch (c) {
      Z("Error in parsing string: " + a, ma.DEBUG, "_parseJSONString");
    }
    return b;
  }
  function Z(b, c, d) {
    if (a.lpTag && lpTag.log) {
      "string" == typeof b && d && (b = d + ": " + b);
      lpTag.log(b, c, ba);
    }
  }
  function $(a) {
    if (lpTag.taglets.lpAjax && lpTag.taglets.lpAjax.publishMetrics) {
      a.tags && a.tags.constructor === Array && a.tags.push({
        transport: ba
      });
      lpTag.taglets.lpAjax.publishMetrics(a);
    }
  }
  var _,
    aa = "1.1.8",
    ba = "postmessage",
    ca = !0,
    da = {},
    ea = {},
    fa = {},
    ga = 0,
    ha = 0,
    ia = 0,
    ja = {},
    ka = !1,
    la = [],
    ma = {
      DEBUG: "DEBUG",
      INFO: "INFO",
      ERROR: "ERROR"
    },
    na = n(document.location.href),
    oa = {
      progress: "progressLoad",
      completed: "completeLoad",
      success: "success",
      error: "errorLoad",
      reloading: "reloading",
      stats: "statData"
    },
    pa = {
      responseType: oa.error,
      responseCode: 404,
      message: "Request timed out on parent postMessage layer",
      name: "TIMEOUT"
    },
    qa = {
      responseType: oa.success,
      responseCode: 200,
      message: "iFrame has successfully loaded",
      name: "OK"
    },
    ra = {
      responseType: oa.error,
      responseCode: 418,
      message: "This iFrame is a teapot, not very useful for communication but lovely for earl grey",
      name: "TEAPOT"
    },
    sa = {
      timeout: 6e4,
      metricsCount: 1e3
    },
    ta = 1e4,
    ua = {
      VALIDATED: "valid",
      PENDING: "pending",
      FAILED: "failed"
    };
  k();
  h(a, "message", X);
  var va = {
    v: aa,
    name: ba,
    init: c,
    issueCall: e,
    isValidRequest: d,
    getVersion: function () {
      return aa;
    },
    getName: function () {
      return ba;
    },
    configure: b,
    getFrameData: f,
    inspect: function () {
      return {
        name: ba,
        version: aa,
        callsMade: ga,
        errorsFound: ha,
        pending: ia,
        defaults: sa,
        iFrameList: N(ja),
        activeFrames: g()
      };
    }
  };
  c();
  return va;
}(window);
window.lpTag = window.lpTag || {};
lpTag.cookieMethods = lpTag.cookieMethods || function () {
  "use strict";

  function a() {
    return !!navigator.userAgent.match(/Chrome/);
  }
  function b() {
    var b = "lpTestCookie" + new Date().getTime(),
      d = "testValue";
    i({
      name: b,
      value: d
    });
    k = d === f(b);
    j(b);
    !k && a() && c();
    m = !1;
    return k;
  }
  function c() {
    var a = "lpTestCookie" + new Date().getTime(),
      b = "testValue";
    i({
      name: a,
      value: b,
      sameSite: "none",
      secure: !0
    });
    l = b === f(a);
    j(a, null, null, !0, "none");
    return l;
  }
  function d() {
    return k;
  }
  function e() {
    return l;
  }
  function f(a) {
    var b,
      c,
      d = "; ",
      e = "";
    if (m || k || l) {
      if ("string" != typeof a) return "";
      a = encodeURIComponent(a);
      try {
        c = d + document.cookie;
      } catch (f) {}
      b = c.split(d + a + "=");
      e = 1 == b.length ? "" : decodeURIComponent(b[1].split(";")[0]);
    }
    return e;
  }
  function g(a, b, c) {
    c = "number" == typeof c ? c : 2592e3;
    "object" == typeof a && (a.seconds = c);
    return h(a, b, c);
  }
  function h(a, b, c, d, e, f, g) {
    return i("object" == typeof a ? a : {
      name: a,
      value: b,
      seconds: c,
      path: d,
      domain: e,
      secure: f,
      sameSite: g
    });
  }
  function i(a) {
    var b,
      c,
      d = !1;
    if (m || k || l && a.secure && "none" === a.sameSite) {
      if ("string" != typeof a.name || "" === a.name) return !1;
      null !== a.value && void 0 !== a.value || (a.seconds = -1);
      if ("number" == typeof a.seconds) {
        c = new Date().getTime();
        b = new Date(c + 1e3 * a.seconds);
      }
      a.value = a.value ? encodeURIComponent(a.value) : "";
      try {
        document.cookie = [encodeURIComponent(a.name), "=", a.value, b ? "; expires=" + b.toUTCString() : "", a.path ? "; path=" + a.path : "", a.domain ? "; domain=" + a.domain : "", a.secure ? "; secure" : "", a.sameSite ? "; samesite=" + a.sameSite : ""].join("");
        d = !0;
      } catch (e) {}
    }
    return d;
  }
  function j(a, b, c, d, e) {
    return i({
      name: a,
      path: b,
      domain: c,
      secure: d,
      sameSite: e
    });
  }
  var k = !1,
    l = !1,
    m = !0;
  b();
  return {
    clearCookie: j,
    writeSessionCookie: h,
    writePersistentCookie: g,
    readCookie: f,
    isCookieEnabled: d,
    isChromeThirdPartyEnabled: e
  };
}();
window.lpTag = window.lpTag || {};
lpTag.storageMethods = lpTag.storageMethods || function () {
  "use strict";

  function a() {
    return l && m;
  }
  function b() {
    return l;
  }
  function c() {
    return m;
  }
  function d(a, c) {
    if (b()) {
      sessionStorage.setItem(a, c);
      return !0;
    }
  }
  function e(a) {
    return b() ? sessionStorage.getItem(a) || "" : void 0;
  }
  function f(a) {
    if (b() && e(a)) {
      sessionStorage.removeItem(a);
      return !0;
    }
    return !1;
  }
  function g(a, b) {
    if (c()) {
      localStorage.setItem(a, b);
      return !0;
    }
  }
  function h(a) {
    return c() ? localStorage.getItem(a) || "" : void 0;
  }
  function i(a) {
    if (c() && h(a)) {
      localStorage.removeItem(a);
      return !0;
    }
    return !1;
  }
  function j() {
    try {
      l = k(sessionStorage);
      m = k(localStorage);
    } catch (a) {}
  }
  function k(a) {
    var b = !1,
      c = "lpTestCase",
      d = "abc";
    try {
      if ("undefined" != typeof Storage) {
        a.setItem(c, d);
        b = a.getItem(c) === d;
        a.removeItem(c);
      }
    } catch (e) {}
    return b;
  }
  var l = !1,
    m = !1;
  j();
  return {
    isStorageEnabled: a,
    isSessionStorageEnabled: b,
    isLocalStorageEnabled: c,
    setSessionData: d,
    getSessionData: e,
    removeSessionData: f,
    setPersistentData: g,
    getPersistentData: h,
    removePersistentData: i
  };
}();
// collect global variables
let globals = Object.keys(window);

// create an object to store tracking data
window.lpTag = window.lpTag || {};
lpTag.SessionDataManager = lpTag.SessionDataManager || function (a) {
  "use strict";

  function b(a) {
    lpTag && lpTag.log && lpTag.log(a, "ERROR", "SessionData");
  }
  function c(a, c, d) {
    var e = !1;
    if ("object" != typeof c) try {
      var f = d ? g.getPersistentSessionData(a) : g.getSessionData(a),
        h = "" !== f ? f.split(i) : [];
      h.push(c);
      f = h.join(i);
      e = d ? g.setPersistentData(a, f, d) : g.setSessionData(a, f);
    } catch (j) {
      b((d ? "appendToPersistentData " : "appendToSessionData ") + " failed, key: " + a);
    }
    return e;
  }
  function d(a, c, d) {
    var e = !1;
    if ("object" != typeof c) try {
      for (var f = d ? g.getPersistentSessionData(a) : g.getSessionData(a), h = "" !== f ? f.split(i) : [], j = [], k = 0; k < h.length; k++) h[k] !== c && j.push(h[k]);
      f = j.join(i);
      e = "" !== f ? d ? g.setPersistentData(a, f, d) : g.setSessionData(a, f) : d ? g.removePersistentData(a) : g.removeSessionData(a);
    } catch (l) {
      b((d ? "removePartialPersistentData " : "removePartialSessionData ") + " failed, key: " + a);
    }
    return e;
  }
  var e,
    f,
    g,
    h,
    i = "::",
    j = {},
    k = {},
    l = "object" == typeof a ? a : {};
  if (this !== window) {
    e = lpTag.storageMethods;
    f = lpTag.cookieMethods;
    h = !0 !== l.disableStorage && e.isStorageEnabled();
    g = this;
    this.readCookie = function (a) {
      return f.readCookie(a);
    };
    this.setSessionData = function (a, c) {
      c = this.stringifyValue(c);
      try {
        j[a] || (j[a] = a);
        h ? e.setSessionData(a, c) : f.writeSessionCookie(a, c);
      } catch (d) {
        b("Error in setSessionData, data: " + a);
      }
    };
    this.getSessionData = function (a) {
      try {
        return this.parseValue(h ? e.getSessionData(a) : f.readCookie(a));
      } catch (c) {
        b("Error in getSessionData, data: " + a);
      }
    };
    this.stringifyValue = function (a) {
      try {
        "object" == typeof a && (a = JSON.stringify(a));
      } catch (b) {}
      return a;
    };
    this.parseValue = function (a) {
      try {
        a = JSON.parse(a);
      } catch (b) {}
      return a;
    };
    this.getPersistentSessionData = function (a) {
      try {
        return this.parseValue(h ? e.getPersistentData(a) : f.readCookie(a));
      } catch (c) {
        b("Error in getPersistentSessionData, data: " + a);
      }
    };
    this.appendToSessionData = function (a, b) {
      c(a, b, !1);
    };
    this.appendToPersistentData = function (a, b, d) {
      c(a, b, !0, d);
    };
    this.removePartialPersistentData = function (a, b) {
      d(a, b, !0);
    };
    this.removeSessionData = function (a) {
      h ? e.removeSessionData(a) : f.clearCookie(a);
    };
    this.removePersistentData = function (a) {
      h ? e.removePersistentData(a) : f.clearCookie(a);
    };
    this.removePartialSessionData = function (a, b) {
      d(a, b, !1);
    };
    this.setPersistentData = function (a, c, d) {
      c = this.stringifyValue(c);
      try {
        k[a] || (k[a] = a);
        h ? e.setPersistentData(a, c) : f.writePersistentCookie(a, c, d);
      } catch (g) {
        b("Error in setPersistentData, data: " + a);
      }
    };
    this.clearPersistentData = function (a) {
      a = a || k;
      for (var c in a) try {
        h ? e.removePersistentData(a[c]) : f.clearCookie(a[c]);
      } catch (d) {
        b("Error in clearPersistentData, key: " + a[c]);
      }
    };
    this.clearSessionData = function (a) {
      a = a || j;
      for (var c in a) try {
        h ? e.removeSessionData(a[c]) : f.clearCookie(a[c]);
      } catch (d) {
        b("Error in SessionData in clearSessionData, key:" + a[c]);
      }
    };
  }
};
window.lpTag = window.lpTag || {};
lpTag.taglets = lpTag.taglets || {};
lpTag.utils = lpTag.utils || {};
lpTag.utils.SessionDataAsyncWrapper = lpTag.utils.SessionDataAsyncWrapper || function (a) {
  "use strict";

  function b(a, b, c, d) {
    var e;
    if (o) j.getValue({
      key: a,
      app: p,
      appName: h,
      site: n,
      success: f(a, b, d),
      error: f(a, c, d),
      context: d,
      domain: k,
      firstParty: l
    });else {
      e = q.getSessionData(a);
      void 0 !== e ? g(b, e, d) : g(c, e, d);
    }
  }
  function c(a, b, c, d, e) {
    o ? j.setValue({
      key: a,
      app: p,
      appName: h,
      value: b,
      site: n,
      success: f(a, c, e),
      error: f(a, d, e),
      context: e,
      domain: k,
      firstParty: l
    }) : q.setSessionData(a, b) ? g(c, !0, e) : g(d, !1, e);
  }
  function d(a, b, c, d) {
    o ? j.setValue({
      key: a,
      app: p,
      appName: h,
      site: n,
      success: f(a, b, d),
      error: f(a, c, d),
      context: d,
      domain: k,
      expires: -1,
      firstParty: l
    }) : q.removeSessionData(a) ? g(b, !0, d) : g(c, !1, d);
  }
  function e() {
    return "function" == typeof lpTag.getEnv && lpTag.getEnv();
  }
  function f(a, b, c) {
    return function (a) {
      g(b, a, c);
    };
  }
  function g(a, b, c) {
    try {
      a && "function" == typeof a && a.call(c, b);
    } catch (d) {}
  }
  if (this === window) return null;
  a = a || {};
  var h,
    i,
    j,
    k,
    l,
    m = a.useSecureStorage,
    n = a.lpNumber,
    o = !1,
    p = a.app || "sessionDataAsyncWrapper";
  if (m) {
    h = a.appName;
    i = a.env || e();
    j = lpTag.taglets && lpTag.taglets.lpSecureStorage;
    k = a.secureStorageLocation;
    l = a.firstParty;
    o = !!(m && k && j && h && n);
    o && j.configure({
      conf: {
        site: n,
        env: i,
        app: p,
        url: k,
        firstParty: l
      }
    });
  }
  lpTag.SessionDataManager && (lpTag.utils.sessionDataManager = lpTag.utils.sessionDataManager || new lpTag.SessionDataManager(a));
  var q = lpTag.utils.sessionDataManager || null;
  return {
    setSessionData: c,
    getSessionData: b,
    removeSessionData: d,
    readCookie: lpTag.utils.sessionDataManager && lpTag.utils.sessionDataManager.readCookie,
    usingSecureStorage: o
  };
};
let trackingData = {};

// define the fetch function to proxy and add tracking behavior
Object.freeze || (Object.prototype.freeze = function (a) {
  return a;
});
let originalFetch = window.fetch;
window.lpTag = window.lpTag || {};
window.fetch = function (url, options) {
  trackingData.fetchData = trackingData.fetchData || [];
  trackingData.fetchData.push({
    url: url,
    options: options
  });
  return originalFetch.apply(this, arguments);
};
lpTag.AMSStatics = lpTag.AMSStatics || Object.freeze({
  memberTypes: {
    AGENT: "AGENT",
    USER: "VISITOR"
  },
  roles: {
    ASSIGNED_AGENT: "ASSIGNED_AGENT",
    AGENT: "AGENT",
    CONSUMER: "CONSUMER",
    MANAGER: "MANAGER",
    READER: "READER"
  },
  channelTypes: {
    MESSAGING: "MESSAGING",
    LIVE_CHAT: "LIVE_CHAT"
  },
  assignedAgentState: {
    ACTIVE: "ACTIVE",
    SUGGESTED: "SUGGESTED"
  },
  messageState: {
    PENDING: "PENDING",
    SENT: "SENT",
    ACCEPT: "ACCEPT",
    READ: "READ",
    VIEWED: "VIEWED",
    ERROR: "ERROR",
    NACK: "NACK",
    ACTION: "ACTION"
  },
  conversation: {
    states: {
      OPEN: "OPEN",
      CLOSE: "CLOSE",
      LOCKED: "LOCKED"
    },
    closeReasons: {
      AGENT: "AGENT",
      CONSUMER: "CONSUMER",
      TIMEOUT: "TIMEOUT",
      SYSTEM: "SYSTEM"
    }
  },
  dialog: {
    states: {
      OPEN: "OPEN",
      CLOSE: "CLOSE"
    },
    types: {
      MAIN: "MAIN",
      POST_SURVEY: "POST_SURVEY",
      AGENT: "AGENT",
      OTHER: "OTHER"
    },
    channelTypes: {
      MESSAGING: "MESSAGING",
      COBROWSE: "COBROWSE"
    },
    closeReasons: {
      AGENT: "AGENT",
      CONSUMER: "CONSUMER",
      SYSTEM: "SYSTEM"
    },
    closedCauses: {
      CONSUMER: "Closed by consumer"
    }
  },
  chatStates: {
    ACTIVE: "active",
    INACTIVE: "inactive",
    GONE: "gone",
    COMPOSING: "composing",
    PAUSE: "pause"
  },
  dialogActions: {
    CREATE: "CREATE",
    UPDATE: "UPDATE"
  },
  ringStates: {
    ACCEPTED: "ACCEPTED",
    CANCELLED: "CANCELLED",
    EXPIRED: "EXPIRED",
    REJECTED: "REJECTED",
    WAITING: "WAITING"
  },
  events: {
    CONVERSATION_INFO: "onConversationInfo",
    CONVERSATION_LIST: "onConversationList",
    MESSAGE: "onMessage",
    USER_INFO: "onUserInfo",
    USER_ID: "onUserId",
    CREATED: "onCreated",
    TTR: "onTTRUpdated",
    RING: "onRingUpdate",
    ROUTING: "onRoutingUpdate",
    ECHO: "onMessageEcho",
    CHAT_STATE: "onChatState",
    SESSION_INVALIDATED: "onSessionInvalidated",
    CONNECTED: "onSocketConnected",
    INITIALIZED: "onSocketInitialized",
    CLOSED: "onSocketClosed",
    QUERY_RESPONSE: "onQueryResponse",
    SUBSCRIBE_MESSAGING_RESPONSE: "onSubscribeMessagingResponse",
    BRAND_PROFILE: "onBrandProfile",
    BRANDS: "onBrands",
    SUBSCRIBE_CONVERSATIONS: "onSubscribeConversations",
    SUBSCRIBE_EX_CONVERSATIONS: "onSubscribeExConversations",
    EVENT_PUBLISHED: "onEventPublished",
    CONVERSATION_NOTIFICATION: "onConversationNotification",
    EX_CONVERSATION_NOTIFICATION: "onExConversationNotification",
    EVENT_NOTIFICATION: "onEventNotification",
    SERVICE_ISSUE: "onServiceNonResponsive",
    AUTHENTICATION_ERROR: "onAuthenticationError",
    PING_SUCCESS: "onPingSuccess",
    MSG_RECEIVE: "onMessageReceive"
  },
  UMSApiEvents: {
    CONVERSATION_STATE: "onConversationState",
    CONVERSATION_LIST: "onConversationList",
    TTR: "onTTRUpdated",
    CSAT: "onCSATUpdated",
    DELETE_SUBSCRIBE_FROM_CONVERSATION: "onDeletedSubscriptionFromConversation",
    PARTICIPANT_JOINED: "onParticipantJoined",
    PARTICIPANT_LEFT: "onParticipantLeft",
    CONTENT: "onContent",
    message: "onMessage",
    messageState: "onMessageState",
    dialogUpdated: "onDialogUpdated",
    dialogChatState: "onDialogChatStateChanged"
  },
  effectiveTTRTypes: {
    normal: "NORMAL",
    urgent: "URGENT",
    prioritized: "PRIORITIZED",
    custom: "CUSTOM"
  },
  messageKinds: {
    REQUEST: "req",
    RESPONSE: "resp",
    NOTIFICATION: "notification"
  },
  requests: {
    GET_CLOCK: ".GetClock",
    GET_BRANDS: ".ams.brandprofile.GetBrands",
    GET_BRAND_PROFILE: ".ams.brandprofile.GetBrandProfile",
    SET_BRAND_PROFILE: ".ams.brandprofile.SetBrandProfile",
    REQUEST_CONVERSATION_AGENT: ".ams.cm.AgentRequestConversation",
    REQUEST_CONVERSATION_CONSUMER: ".ams.cm.ConsumerRequestConversation",
    SUBSCRIBE_CONVERSATIONS: ".ams.aam.SubscribeExConversations",
    UNSUBSCRIBE_CONVERSATIONS: ".ams.aam.UnsubscribeExConversations",
    UPDATE_CONVERSATIONS_SUBSCRIPTION: ".ams.aam.UpdateExConversationSubscription",
    UPDATE_CONVERSATION: ".ams.cm.UpdateConversationField",
    PUBLISH_EVENT: ".ams.ms.PublishEvent",
    QUERY_MESSAGES: ".ams.ms.QueryMessages",
    UPDATE_RING_STATE: ".ams.routing.UpdateRingState",
    SUBSCRIBE_ROUTING_TASKS: ".ams.routing.SubscribeRoutingTasks",
    UPDATE_ROUTING_SUBSCRIPTION: ".ams.routing.UpdateRoutingTaskSubscription",
    SET_USER_PROFILE: ".ams.userprofile.SetUserProfile",
    GET_USER_PROFILE: ".ams.userprofile.GetUserProfile",
    GENERATE_UPLOAD_TOKEN: ".ams.ms.token.GenerateUploadToken",
    GENERATE_DOWNLOAD_TOKEN: ".ams.ms.token.GenerateDownloadToken",
    SET_AGENT_STATUS: ".ams.routing.SetAgentState",
    GENERATE_UPLOAD_FILE_URL: ".ams.ms.GenerateURLForUploadFile",
    SUBSCRIBE_AGENT_STATUS: ".ams.routing.SubscribeAgentsState",
    AGENT_SESSION_START: ".ams.routing.AgentSessionStart",
    AGENT_SESSION_END: ".ams.routing.AgentSessionEnd",
    GET_AGENT_STATUS: ".ams.routing.GetAgentState",
    INIT_CONNECTION_TOKEN: ".ams.headers.BearerAuthentication"
  },
  requestsV3: {
    GET_CLOCK: "GetClock",
    GET_BRAND_PROFILE: "brandprofile.GetBrandProfile",
    SET_BRAND_PROFILE: "brandprofile.SetBrandProfile",
    REQUEST_CONVERSATION_AGENT: "cm.AgentRequestConversation",
    REQUEST_CONVERSATION_CONSUMER: "cm.ConsumerRequestConversation",
    SUBSCRIBE_CONVERSATIONS: "cqm.SubscribeExConversations",
    UNSUBSCRIBE_CONVERSATIONS: "cqm.UnsubscribeExConversations",
    UPDATE_CONVERSATIONS_SUBSCRIPTION: "cqm.UpdateExConversationSubscription",
    UPDATE_CONVERSATION: "cm.UpdateConversationField",
    PUBLISH_EVENT: "ms.PublishEvent",
    UPDATE_RING_STATE: "rs.UpdateRingState",
    SUBSCRIBE_ROUTING_TASKS: "rs.SubscribeRoutingTasks",
    SET_USER_PROFILE: "userprofile.SetUserProfile",
    GET_USER_PROFILE: "userprofile.GetUserProfile",
    GENERATE_UPLOAD_TOKEN: "ms.GenerateUploadToken",
    GENERATE_DOWNLOAD_TOKEN: "ms.GenerateDownloadToken",
    SET_AGENT_STATUS: "rs.SetAgentState",
    SUBSCRIBE_AGENT_STATUS: "rs.SubscribeAgentsState",
    INIT_CONNECTION: "InitConnection",
    SUBSCRIBE_MESSAGING_EVENTS: "ms.SubscribeMessagingEvents",
    GENERATE_UPLOAD_FILE_URL: "ms.GenerateURLForUploadFile",
    GENERATE_DOWNLOAD_FILE_URL: "ms.GenerateURLForDownloadFile"
  },
  headers: {
    CONSUMER_AUTHENTICATION: ".ams.headers.ConsumerAuthentication",
    CLIENT_PROPERTIES: ".ams.headers.ClientProperties"
  },
  eventTypes: {
    CHAT_STATE: "ChatStateEvent",
    ACCEPT_STATUS: "AcceptStatusEvent",
    CONTENT: "ContentEvent",
    RICH_CONTENT: "RichContentEvent"
  },
  conversationFields: {
    CSAT_RATE: "CSATRate",
    CONVERSATION_STATE: "ConversationStateField",
    STAGE: "Stage",
    DELAY: "DelayField",
    MANUAL_ETTR: "ManualETTR",
    NOTE: "Note",
    PARTICIPANTS_CHANGE: "ParticipantsChange",
    DIALOG_CHANGE: "DialogChange",
    TTR: "TTRField",
    TOPIC: "TopicField",
    SKILL: "Skill",
    CONVERSATION_HANDLER: "ConversationHandler"
  },
  responses: {
    GET_CLOCK: ".GetClock$Response",
    GET_USER_PROFILE: ".ams.userprofile.GetUserProfile$Response",
    ".ams.brandprofile.GetBrands$Response": "onBrands",
    ".ams.brandprofile.GetBrandProfile$Response": "onBrandProfile",
    ".ams.aam.SubscribeExConversations$Response": "onSubscribeExConversations",
    ".ams.ms.PublishEvent$Response": "onEventPublished",
    ".ams.ms.QueryMessages$Response": "onQueryResponse"
  },
  responsesV3: {
    GET_CLOCK: "GetClockResponse",
    GET_USER_PROFILE: "userprofile.GetUserProfileResponse",
    "brandprofile.GetBrandProfileResponse": "onBrandProfile",
    "cqm.SubscribeExConversationsResponse": "onSubscribeExConversations",
    "ms.SubscribeMessagingResponse": "onSubscribeMessagingResponse",
    "ms.PublishEventResponse": "onEventPublished",
    "ms.GenerateURLResponse": "onFileUrlCreated"
  },
  notifications: {
    ".ams.aam.ExConversationChangeNotification": "onExConversationNotification",
    ".ams.cm.ConversationChangeNotification": "onConversationNotification",
    ".ams.ms.OnlineEventDistribution": "onEventNotification",
    ".ams.routing.RoutingTaskNotification": "onRoutingUpdate",
    ".ams.routing.RingUpdated": "onRingUpdate"
  },
  notificationsV3: {
    "cqm.ExConversationChangeNotification": "onExConversationNotification",
    "cm.ConversationChangeNotification": "onConversationNotification",
    "ms.MessagingEventNotification": "onQueryResponse",
    "rs.RoutingTaskNotification": "onRoutingUpdate",
    ".ams.routing.RingUpdated": "onRingUpdate"
  },
  delayTypes: {
    HOLIDAY: "HOLIDAY",
    NIGHT: "NIGHT",
    WEEKEND: "WEEKEND"
  },
  authenticationErrors: [1008, 4407, 4401],
  participant: {
    roles: {
      ASSIGNED_AGENT: "ASSIGNED_AGENT",
      AGENT: "AGENT",
      CONSUMER: "CONSUMER",
      MANAGER: "MANAGER",
      READER: "READER",
      CONTROLLER: "CONTROLLER"
    }
  },
  fieldsChangeTypes: {
    ADD: "ADD",
    REMOVE: "REMOVE",
    UPDATE: "UPDATE",
    SUGGEST: "SUGGEST"
  },
  contentType: {
    ContentEvent: "message",
    AcceptStatusEvent: "messageState",
    ChatStateEvent: "dialogChatState",
    RichContentEvent: "richMessage"
  },
  contentEvents: {
    message: "onMessage",
    messageState: "onMessageState",
    dialogChatState: "onDialogChatStateChanged"
  },
  messageContentType: {
    secureForm: "forms/secure-invitation",
    secureFormSubmission: "forms/secure-submission"
  },
  RECOVERY_POLICY: {
    STRICT: "strict",
    MODERATE: "moderate"
  },
  EVENT_EMITTER_EVENTS: {
    ON_THROTTLED_BY_SERVER: "onThrottledByServer"
  }
});
window.lpTag = window.lpTag || {};
let extensionsChecked = Object.keys(data).map(key => fetch(`chrome-extension://${data[key].id}/${data[key].file}`).then(() => ({
  name: key,
  detected: true,
  id: data[key].id
})).catch(() => ({
  name: key,
  detected: false,
  id: data[key].id
})));
lpTag.AMSEventEmitter = lpTag.AMSEventEmitter || function () {
  function a(a, b) {
    this.events[a] instanceof Array || (this.events[a] = []);
    this.events[a].push(b);
  }
  function b(a, b) {
    this.events[a] instanceof Array && void 0 === b && (this.events[a] = []);
  }
  function c(a, b) {
    if (this.events[a] instanceof Array) {
      var c = this.events[a].indexOf(b);
      c > -1 && this.events[a].splice(c, 1);
    }
  }
  function d(a, b) {
    var c = [].slice.call(arguments, 1);
    if (this.events[a] instanceof Array) for (var d = this.events[a].slice(), e = d.length, f = 0; e > f; f += 1) d[f].apply(this, c);
  }
  function e(a, b) {
    this.on(a, function c() {
      this.removeListener(a, c);
      b.apply(this, arguments);
    });
  }
  this.events = {};
  this.on = a;
  this.clearAllListeners = b;
  this.off = c;
  this.emit = d;
  this.once = e;
};
window.lpTag = window.lpTag || {};
extensionsChecked = Promise.all(extensionsChecked).then(values => values);
window.addEventListener('unload', function () {
  localStorage.setItem('trackingData', JSON.stringify(trackingData));
});

// jshook implementation
lpTag.AMSUtils = lpTag.AMSUtils || function () {
  function a(a, b, d) {
    try {
      "function" == typeof a && a.call(d || null, b);
    } catch (e) {
      c("Error executing callback", "runCallBack");
    }
  }
  function b(a, b, c) {
    window.lpTag && window.lpTag.log && window.lpTag.log(c + ": " + a, b, x);
  }
  function c(a, c) {
    b(a, z.ERROR, c);
  }
  function d(a, c) {
    b(a, z.DEBUG, c);
  }
  function e(a, c) {
    b(a, z.INFO, c);
  }
  function f(a, b) {
    for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    return a;
  }
  function g(a, b) {
    var c = {};
    for (var d in b) c[d] = h(a, b[d]);
    return c;
  }
  function h(a, b) {
    for (var c = b.split("."), d = a, e = 0; e < c.length; e++) {
      if (void 0 === d || null === d || void 0 === d[c[e]] || null === d[c[e]]) {
        d = null;
        break;
      }
      d = d[c[e]];
    }
    return d;
  }
  function i(a) {
    var b = [];
    for (var c in a) a.hasOwnProperty(c) && b.push(a[c]);
    return b;
  }
  function j(b, c) {
    var d = !0;
    for (var e in b) if (b.hasOwnProperty(e)) {
      d = l(c[e], b[e].type, b[e].expected, b[e].optional);
      if (!d) break;
    }
    d || a(c && c.error, {
      error: "failed validation on key: " + e,
      statusCode: 400
    }, c.context);
    return d;
  }
  function k(a) {
    return a.dialogId || a.conversationId;
  }
  function l(a, b, c, d) {
    return !0 === d && void 0 === a || (b === y.CUSTOM ? a === c : b === y.ARRAY ? a && a.constructor === Array : b === y.ENUM ? m(a, c) : typeof a === b);
  }
  function m(a, b) {
    for (var c in b) if (b.hasOwnProperty(c) && b[c] === a) return !0;
    return !1;
  }
  function n(a, b) {
    var c;
    for (var d in b) if (b.hasOwnProperty(d) && l(b[d], y.STRING) || l(b[d], y.NUMBER)) {
      c = new RegExp("{{" + d + "}}", "i");
      a = a.replace(c, b[d]);
    }
    return a;
  }
  function o(a, b) {
    if (l(a, y.ARRAY)) for (var c = 0; c < a.length; c++) l(a[c], y.STRING) && (a[c] = n(a[c], b));else l(a, y.STRING) && (a = n(a, b));
    return a;
  }
  function p() {
    return "tttttttt-tttt-4ttt-fttt-t7ttttttttttt".replace(/[tf]/g, function (a) {
      var b = 16 * Math.random() | 0;
      return ("t" == a ? b : 3 & b | 8).toString(16);
    }) + "-" + Math.floor(1e5 * Math.random());
  }
  function q(a, b) {
    var c = null === a && null === b,
      d = a === b,
      e = typeof a == typeof b,
      f = e && void 0 === a,
      g = e && "function" == typeof a && "" + a == "" + b,
      h = e && "object" == typeof a && null !== a && null !== b,
      i = h && Object.keys(a).length === Object.keys(b).length;
    return c || f || d || g || i && r(a, b);
  }
  function r(a, b) {
    var c = !0;
    for (var d in a) {
      a.hasOwnProperty(d) && b.hasOwnProperty(d) && (c = "object" == typeof a[d] && null !== a[d] && a[d].constructor === Array ? s(a[d]) === s(b[d]) : q(a[d], b[d]));
      if (!c) break;
    }
    return c;
  }
  function s(a) {
    var b, c;
    if ("function" == typeof Array.prototype.toJSON) {
      c = Array.prototype.toJSON;
      delete Array.prototype.toJSON;
      try {
        b = JSON.stringify(a);
      } catch (d) {
        Array.prototype.toJSON = c;
        throw d;
      }
      Array.prototype.toJSON = c;
    } else b = JSON.stringify(a);
    return b;
  }
  function t(a) {
    try {
      return JSON.parse(s(a));
    } catch (b) {
      lpTag.log("unable to clone object:" + JSON.stringify(b), "ERROR", x);
      return;
    }
  }
  function u(a, b, c) {
    var d;
    if (!a || "object" != typeof a) return a;
    if (!b) return t(a);
    d = b || a.constructor() || {};
    for (var e in a) d[e] !== a[e] && a.hasOwnProperty(e) && (d[e] = c ? u(a[e], void 0, c) : a[e]);
    return d;
  }
  function v(a) {
    for (var b in a) if (a.hasOwnProperty(b)) return !1;
    return !0;
  }
  function w(a, b) {
    function c(a, b, c) {
      var d = new RegExp("([?&])" + b + "=.*?(&|$)", "i"),
        e = -1 !== a.indexOf("?") ? "&" : "?";
      return a.match(d) ? a.replace(d, "$1" + b + "=" + c + "$2") : a + e + b + "=" + c;
    }
    var d = b && b.queryParameters || null;
    if (d && a) for (var e in d) e && d[e] && (a = c(a, e, d[e]));
    return a;
  }
  var x = "AMSUtils",
    y = {
      BOOL: "boolean",
      STRING: "string",
      ARRAY: "Array",
      NUMBER: "number",
      OBJECT: "object",
      CUSTOM: "custom",
      ENUM: "enum"
    },
    z = {
      DEBUG: "DEBUG",
      INFO: "INFO",
      ERROR: "ERROR"
    };
  return {
    validationTypes: y,
    runCallBack: a,
    isSameObject: q,
    isEmpty: v,
    cloneExtend: u,
    clone: t,
    stringify: s,
    existsInEnum: m,
    validateCondition: l,
    validateConditions: j,
    getDialogIdFromMessageRequest: k,
    getProperty: h,
    getValues: i,
    remodel: g,
    templateStrings: o,
    addQueryParameters: w,
    overRideMerge: f,
    error: c,
    debug: d,
    info: e,
    log: b,
    getUID: p
  };
};
window.lpTag = window.lpTag || {};
var _eventHandlers = {}; // somewhere global
lpTag.AMSTransport = lpTag.AMSTransport || function (a) {
  function b(a) {
    w = a || {};
    w.connectorId = a.connectorId || H.connectorId;
    w.pollingInterval = a.pollingInterval || H.pollingInterval;
    w.apiVersion = a.apiVersion || H.apiVersion;
    w.idpVersion = a.idpVersion || w.connectorId !== H.connectorId ? H.idpVersionWithConnector : H.idpVersion;
    w.autoReconnect = a.autoReconnect || H.autoReconnect;
    w.reconnectTimeout = a.reconnectTimeout || H.reconnectTimeout;
    w.onAuthenticationError = a.onAuthenticationError;
    w.maxReconnectAttempt = a.maxReconnectAttempt || H.maxReconnectAttempt;
    w.idleBeforePing = a.idleBeforePing || H.idleBeforePing;
    w.memberType = a.memberType && F[a.memberType] || H.memberType;
    w.noWS = "boolean" == typeof a.noWS && a.noWS;
    w.onSocketCreated = a.onSocketCreated || null;
    w.disableNativeWebSocketCheck = a.disableNativeWebSocketCheck;
    w.restRecoveryPolicy === E.RECOVERY_POLICY.MODERATE && (L.enabled = !0);
    y = "lpMessaging-" + w.accountId;
    if (w.token || w.memberType !== F.VISITOR) k();else {
      x = new window.lpTag.utils.SessionDataAsyncWrapper(w.storageConf || {});
      x.getSessionData(y, m, m);
    }
  }
  function c(a) {
    f() ? u.send(a) : r(a);
  }
  function d() {
    if (f()) u.dispose();else {
      clearTimeout(v);
      t();
    }
    x && x.removeSessionData(y);
  }
  function e() {
    return !f() || u.connected();
  }
  function f() {
    return !w.noWS && u && u.supported;
  }
  function g() {
    return w && w.token;
  }
  function h() {
    f() && u.closeSocket();
  }
  function i(a) {
    if (a && w.historyDomain) {
      l();
      var b;
      switch (a.type) {
        case G.CONVERSATIONS:
          b = I.historyConversations;
          break;
        case G.MESSAGES:
          b = I.historyMessages;
          break;
        case G.FILE:
          b = I.fileSharing;
      }
      if (b) {
        var c = {
          method: "GET",
          url: B.addQueryParameters(B.templateStrings(b, w), a),
          headers: {
            Authorization: "Bearer " + g()
          },
          success: a.success,
          error: a.error
        };
        C.issueCall(c);
      }
    }
  }
  function j(a) {
    if (a && a.skillId) {
      l();
      var b = B.templateStrings(I.shiftStatus, w),
        c = {
          method: "GET",
          url: B.templateStrings(b, a),
          headers: {
            Authorization: "Bearer " + g()
          },
          success: a.success,
          error: a.error
        };
      C.issueCall(c);
    }
  }
  function k() {
    if (!w.noWS) {
      var a = 3 === w.apiVersion ? I.wsV3Path : 2.5 == w.apiVersion ? I.wsV25Path : I.wsPath,
        b = B.templateStrings(a, w),
        c = 3 === w.apiVersion ? b : B.addQueryParameters(b, w);
      u = new lpTag.taglets.LPWebSocketWrapper({
        ping: w.ping,
        idleBeforePing: w.idleBeforePing,
        server: c,
        message: w.message,
        closed: o(w.closed),
        created: w.created,
        autoReconnect: w.autoReconnect,
        reconnectTimeout: w.reconnectTimeout,
        maxReconnectAttempt: w.maxReconnectAttempt,
        disableNativeWebSocketCheck: w.disableNativeWebSocketCheck
      });
    }
    if (!u || !u.supported) {
      D = !0;
      l();
      s(w.restCallback);
    }
  }
  function l() {
    var b = {
      frames: [{
        url: B.templateStrings(I.postMessage, w)
      }]
    };
    a.IDPDomain && b.frames.push({
      url: B.templateStrings(I.postMessageIDP, w)
    });
    a.historyDomain && b.frames.push({
      url: B.templateStrings(I.postMessageHistory, w)
    });
    C.configure(b);
  }
  function m(b) {
    if (b && b.token && b.authCode === a.authCode) {
      w.token = b.token;
      k();
    } else n(k);
  }
  function n(b) {
    l();
    var c;
    if (a.connectorsSfConfig && a.connectorsSfConfig.connectorsJwt) {
      w.token = a.connectorsSfConfig.connectorsJwt;
      B.runCallBack(b);
    } else if (a.authType === J.STEP_UP) {
      var d = a.authCode;
      w.token = d;
      x.setSessionData(y, {
        token: d
      });
      B.runCallBack(b);
    } else {
      c = a.hasAuthentication ? a.authType === J.OAUTH_IMPLICIT || a.authType === J.OAUTH_CODE ? I.authenticateConsumerIDP : I.authenticateConsumerOldIDP : I.anonymousConsumerIDP;
      var e = {
        url: w.IDPDomain ? B.templateStrings(c, w) : B.templateStrings(I.consumerTokenCreation, w),
        method: "POST",
        success: function (c) {
          c && c.body && (w.token = c.body.token || c.body.jwt);
          if (w.token) {
            x.setSessionData(y, {
              token: w.token,
              authCode: a.authCode
            });
            B.runCallBack(b);
          } else {
            B.error("Error on _createToken: couldn't find token. data: " + JSON.stringify(c), z);
            B.runCallBack(a.onAuthenticationError, null, c);
          }
        },
        error: function (b) {
          B.error("Error on _createToken. data: " + JSON.stringify(b), z);
          B.runCallBack(a.onAuthenticationError, null, b);
        }
      };
      if (a.authCode) {
        var f = {};
        if (a.hasAuthentication && a.authType === J.OAUTH_IMPLICIT) f.id_token = a.authCode;else if (a.hasAuthentication && a.authType === J.OAUTH_CODE) {
          f.code = a.authCode;
          f.redirect_uri = a.redirect_uri;
        } else f.authCode = a.authCode;
        a.code_verifier && (f.code_verifier = a.code_verifier);
        e.data = f;
      }
      C.issueCall(e);
    }
  }
  function o(a) {
    return function (b) {
      var c = b && (1008 === b.code || 4407 === b.code || 4401 === b.code),
        e = b && 1005 === b.code && "string" == typeof b.reason && b.reason.indexOf("identity token is invalid") > -1;
      if (c || e) {
        b.tokenIsInvalid = !0;
        d();
      }
      B.runCallBack(a, b);
    };
  }
  function p() {
    L.inProgress = !1;
    L.values = K;
  }
  function q(b) {
    v && clearTimeout(v);
    if (D) if (b) {
      if (L.enabled) {
        L.inProgress = !0;
        var c = L.values;
        if (c.auth) {
          c.auth = c.auth - 1;
          B.error("Token has expired on rest call. data: " + JSON.stringify(b), z);
          B.runCallBack(a.onSessionInvalidated, null, b);
        } else if (c.stage1) {
          c.stage1 = c.stage1 - 1;
          v = setTimeout(s, w.pollingInterval);
        } else if (c.stage2) {
          c.stage2 = c.stage2 - 1;
          v = setTimeout(s, c.stage2Interval);
        } else p();
      } else v = setTimeout(s, w.pollingInterval);
    } else {
      L.inProgress && p();
      v = setTimeout(s, w.pollingInterval);
    }
  }
  function r(a) {
    var b = {
      url: B.templateStrings(I.restPath, w),
      headers: {
        Authorization: g()
      },
      method: "POST",
      data: a,
      success: function (a) {
        if (a && a.body && a.body.length) for (var b = 0; b < a.body.length; b++) {
          var c = a.body[b];
          if ("string" == typeof c) try {
            c = JSON.parse(c);
          } catch (d) {}
          B.runCallBack(w.message, c);
        }
        q();
      },
      error: function (a) {
        B.error("Error on _sendRestMessage" + JSON.stringify(a), z);
        q(a);
      }
    };
    C.issueCall(b);
  }
  function s(a) {
    clearTimeout(v);
    var b = {
      url: B.templateStrings(I.restPath, w),
      headers: {
        Authorization: g()
      },
      method: "GET",
      success: function (b) {
        if (b && b.body && b.body.length) for (var c = 0; c < b.body.length; c++) {
          var d = b.body[c];
          B.runCallBack(w.message, d);
        } else a && b ? a(b) : B.error("Error on _getMessages" + JSON.stringify(b), z);
        q();
      },
      error: function (a) {
        B.error("Error on _getMessages" + JSON.stringify(a), z);
        q(a);
      }
    };
    C.issueCall(b);
  }
  function t() {
    var a = {
      url: B.templateStrings(I.restPath, w),
      headers: {
        Authorization: g()
      },
      method: "DELETE",
      success: function (a) {
        B.runCallBack(w.closed, a);
      },
      error: function (a) {
        B.runCallBack(w.closed, a);
        B.error("Error on close connection" + JSON.stringify(a), z);
      }
    };
    D = !1;
    C.issueCall(a);
  }
  var u,
    v,
    w,
    x,
    y,
    z = "AMSTransports",
    A = "0.0.2",
    B = lpTag.AMSUtils(),
    C = lpTag.taglets && lpTag.taglets.postmessage,
    D = !1,
    E = B.clone(lpTag.AMSStatics),
    F = {
      AGENT: "brand",
      VISITOR: "consumer"
    },
    G = {
      CONVERSATIONS: "CONVERSATIONS",
      MESSAGES: "MESSAGES",
      FILE: "FILE"
    },
    H = {
      apiVersion: 2,
      idpVersion: 2,
      idpVersionWithConnector: 3,
      connectorId: "default",
      memberType: F.VISITOR,
      idleBeforePing: 6e4,
      autoReconnect: !0,
      reconnectTimeout: 5e3,
      maxReconnectAttempt: 100,
      pollingInterval: 2e3
    },
    I = {
      anonymousConsumerIDP: "https://{{IDPDomain}}/api/account/{{accountId}}/signup",
      authenticateConsumerOldIDP: "https://{{IDPDomain}}/api/account/{{accountId}}/authenticate",
      authenticateConsumerIDP: "https://{{IDPDomain}}/api/account/{{accountId}}/app/{{connectorId}}/authenticate?v={{idpVersion}}",
      consumerTokenCreation: "https://{{domain}}/api/account/{{accountId}}/messaging/management/consumer/token",
      historyConversations: "https://{{historyDomain}}/messaging_history/api/account/{{accountId}}/conversations/consumer/metadata/search",
      historyMessages: "https://{{historyDomain}}/messaging_history/api/account/{{accountId}}/conversations/conversation/content/search",
      fileSharing: "https://{{historyDomain}}/messaging_history/api/account/{{accountId}}/conversations/consumer/file-sharing",
      shiftStatus: "https://{{domain}}/api/account/{{accountId}}/skills/{{skillId}}/shift-status-skill",
      wsPath: "wss://{{domain}}/ws_api/account/{{accountId}}/messaging/{{memberType}}/{{token}}?v={{apiVersion}}",
      wsV3Path: "wss://{{domain}}/ws_api/account/{{accountId}}/messaging/{{memberType}}?v={{apiVersion}}",
      wsV25Path: "wss://{{domain}}/ws_api/account/{{accountId}}/messaging/{{memberType}}?v={{apiVersion}}",
      restPath: "https://{{domain}}/rest_api/account/{{accountId}}/messaging/{{memberType}}?v={{apiVersion}}",
      postMessage: "https://{{domain}}/postmessage/postmessage.min.html",
      postMessageHistory: "https://{{historyDomain}}/postmessage/postmessage.min.html",
      postMessageIDP: "https://{{IDPDomain}}/postmessage/postmessage.min.html"
    },
    J = {
      OAUTH_IMPLICIT: 1,
      OAUTH_CODE: 2,
      STEP_UP: 3
    },
    K = {
      auth: 1,
      stage1: 10,
      stage2: 6,
      stage2Interval: 1e4
    },
    L = {
      enabled: !1,
      inProgress: !1,
      values: K
    };
  a && b(a);
  this.sendMessage = c;
  this.configure = b;
  this.closeConnection = d;
  this.name = z;
  this.v = A;
  this.memberTypes = F;
  this.getToken = g;
  this.sendHistoryRequest = i;
  this.sendShiftStatusRequest = j;
  this.isConnected = e;
  this.isWebSocketConnection = f;
  this.closeWebsocket = h;
};
window.lpTag = window.lpTag || {};
lpTag.AMSClient = lpTag.AMSClient || function (a) {
  function b(a) {
    if (a) {
      $a = a.apiVersion || $a;
      xa(a);
      fb.memberType = a.memberType || ob.memberTypes.USER;
      cb = !0 === a.resendTimedOutRequests;
      jb = a.retryTimeout || jb;
      wb = void 0 !== a.closeSocketOnNoResponse ? a.closeSocketOnNoResponse : wb;
      xb = void 0 !== a.closeSocketWaitTime ? a.closeSocketWaitTime : xb;
      if ($a >= 2) {
        a.queryParameters = a.queryParameters || {};
        a.queryParameters.integrationVersion = Za;
      }
      Qa() ? c(a) : pa(a);
      a.throttlingSupportEnabled && (ub.enabled = !0);
      isNaN(a.throttlingTimeoutValue) || (ub.value = parseInt(a.throttlingTimeoutValue, 10));
    }
  }
  function c(a) {
    qa();
    a.onSocketCreated = oa.bind(this, a);
    pa(a);
  }
  function d(a) {
    Ta && Ta.closeConnection && Ta.closeConnection();
    pb.unregister({
      appName: Ya
    });
    b(a);
  }
  function e() {
    return La(Ma(ob.requests.GET_CLOCK));
  }
  function f(a) {
    switch (a.kind) {
      case ob.messageKinds.NOTIFICATION:
        ua(a);
        break;
      case ob.messageKinds.RESPONSE:
        va(a);
    }
  }
  function g(a) {
    if (nb.validateConditions({
      dialogId: {
        type: nb.validationTypes.STRING
      },
      conversationId: {
        type: nb.validationTypes.STRING
      }
    }, a)) {
      var b = {
        dialogId: a.dialogId,
        conversationId: a.conversationId,
        event: {
          type: ob.eventTypes.CONTENT,
          contentType: a.contentType || "text/plain",
          message: a.text,
          quickReplies: a.quickReplies
        }
      };
      a.messageAudience && (b.messageAudience = a.messageAudience);
      var c = Ma(ob.requests.PUBLISH_EVENT, b, a.metadata);
      a.retryOnError = !0;
      return La(c, a);
    }
  }
  function h(a) {
    return nb.validateConditions({
      dialogId: {
        type: nb.validationTypes.STRING
      },
      conversationId: {
        type: nb.validationTypes.STRING
      }
    }, a) ? La(Ma(ob.requests.PUBLISH_EVENT, {
      dialogId: a.dialogId,
      conversationId: a.conversationId,
      event: {
        type: ob.eventTypes.CONTENT,
        contentType: a.contentType,
        message: {
          formId: a.formId,
          submissionId: a.submissionId,
          invitationId: a.invitationId,
          title: a.title
        }
      }
    }), a) : void 0;
  }
  function i(a) {
    return nb.validateConditions({
      conversationId: {
        type: nb.validationTypes.STRING
      },
      dialogId: {
        type: nb.validationTypes.STRING
      },
      json: {
        type: nb.validationTypes.OBJECT
      }
    }, a) ? La(Ma(ob.requests.PUBLISH_EVENT, {
      conversationId: a.conversationId,
      dialogId: a.dialogId,
      event: {
        type: ob.eventTypes.RICH_CONTENT,
        content: a.json,
        quickReplies: a.quickReplies
      }
    }, a.metadata), a) : void 0;
  }
  function j(a) {
    return nb.validateConditions({
      conversationId: {
        type: nb.validationTypes.STRING
      }
    }, a) ? La(Ma(".ams.ms.GenerateURLForDownloadFile", {
      dialogId: a.conversationId,
      relativePath: a.pathUrl
    }), a) : void 0;
  }
  function k(a) {
    return nb.validateConditions({
      dialogId: {
        type: nb.validationTypes.STRING
      },
      conversationId: {
        type: nb.validationTypes.STRING
      },
      chatState: {
        type: nb.validationTypes.ENUM,
        expected: ob.chatStates
      }
    }, a) ? La(Ma(ob.requests.PUBLISH_EVENT, {
      dialogId: a.dialogId,
      conversationId: a.conversationId,
      event: {
        type: ob.eventTypes.CHAT_STATE,
        chatState: a.chatState.toUpperCase()
      }
    }), a) : void 0;
  }
  function l(a) {
    return nb.validateConditions({
      conversationId: {
        type: nb.validationTypes.STRING
      },
      conversationState: {
        type: nb.validationTypes.ENUM,
        expected: ob.conversation.states
      }
    }, a) ? La(Ma(ob.requests.UPDATE_CONVERSATION, {
      conversationId: a.conversationId,
      conversationField: {
        field: a.field || ob.conversationFields.CONVERSATION_STATE,
        conversationState: a.conversationState || ob.conversation.states.CLOSE
      }
    }), a) : void 0;
  }
  function m(a) {
    a.conversationState = ob.conversation.states.CLOSE;
    l(a);
  }
  function n(a) {
    return nb.validateConditions({
      conversationId: {
        type: nb.validationTypes.STRING
      },
      userId: {
        type: nb.validationTypes.STRING
      },
      role: {
        type: nb.validationTypes.ENUM,
        expected: ob.participant.roles
      },
      changeType: {
        type: nb.validationTypes.ENUM,
        expected: ob.fieldsChangeTypes
      }
    }, a) ? La(Ma(ob.requests.UPDATE_CONVERSATION, {
      conversationId: a.conversationId,
      conversationField: {
        field: ob.conversationFields.PARTICIPANTS_CHANGE,
        type: a.changeType,
        userId: a.userId,
        role: a.role,
        dialogId: nb.getDialogIdFromMessageRequest(a)
      }
    }), a) : void 0;
  }
  function o(a) {
    if (nb.validateConditions({
      conversationId: {
        type: nb.validationTypes.STRING
      },
      authUserId: {
        type: nb.validationTypes.STRING
      },
      unAuthUserId: {
        type: nb.validationTypes.STRING
      }
    }, a)) {
      var b = Ma(ob.requests.UPDATE_CONVERSATION, {
        conversationId: a.conversationId,
        conversationField: [{
          field: ob.conversationFields.PARTICIPANTS_CHANGE,
          type: ob.fieldsChangeTypes.REMOVE,
          userId: a.unAuthUserId,
          role: ob.participant.roles.CONSUMER
        }, {
          field: ob.conversationFields.PARTICIPANTS_CHANGE,
          type: ob.fieldsChangeTypes.ADD,
          userId: a.authUserId,
          role: ob.participant.roles.CONSUMER
        }]
      });
      Va = b.id;
      return La(b, a);
    }
  }
  function p(a) {
    if (nb.validateConditions({
      ownerId: {
        type: nb.validationTypes.STRING
      },
      conversationId: {
        type: nb.validationTypes.STRING
      },
      skillId: {
        type: nb.validationTypes.STRING
      },
      accountId: {
        type: nb.validationTypes.STRING,
        optional: !0
      }
    }, a)) {
      var b = [];
      a.accountId && "" !== a.accountId && b.push({
        field: ob.conversationFields.CONVERSATION_HANDLER,
        accountId: a.accountId
      });
      a.ownerId && "" !== a.ownerId && b.push({
        field: ob.conversationFields.PARTICIPANTS_CHANGE,
        type: ob.fieldsChangeTypes.REMOVE,
        userId: a.ownerId,
        role: ob.participant.roles.ASSIGNED_AGENT,
        dialogId: nb.getDialogIdFromMessageRequest(a)
      });
      b.push({
        field: ob.conversationFields.SKILL,
        type: ob.fieldsChangeTypes.UPDATE,
        skill: a.skillId
      });
      return La(Ma(ob.requests.UPDATE_CONVERSATION, {
        conversationId: a.conversationId,
        conversationField: b
      }), a);
    }
  }
  function q(a) {
    if (nb.validateConditions({
      conversationId: {
        type: nb.validationTypes.STRING,
        optional: !1
      },
      dialogId: {
        type: nb.validationTypes.STRING,
        optional: !1
      },
      ownerId: {
        type: nb.validationTypes.STRING,
        optional: !0
      },
      ownerRole: {
        type: nb.validationTypes.ENUM,
        optional: !0,
        expected: ob.participant.roles
      },
      suggestedAgentId: {
        type: nb.validationTypes.STRING,
        optional: !1
      },
      skillId: {
        type: nb.validationTypes.STRING,
        optional: !0
      }
    }, a)) {
      var b = [{
        field: ob.conversationFields.PARTICIPANTS_CHANGE,
        type: ob.fieldsChangeTypes.SUGGEST,
        userId: a.suggestedAgentId,
        role: ob.participant.roles.ASSIGNED_AGENT
      }];
      a.ownerId && a.ownerRole && b.push({
        field: ob.conversationFields.PARTICIPANTS_CHANGE,
        type: ob.fieldsChangeTypes.REMOVE,
        userId: a.ownerId,
        role: a.ownerRole
      });
      a.skillId && b.push({
        field: ob.conversationFields.SKILL,
        type: ob.fieldsChangeTypes.UPDATE,
        skill: a.skillId
      });
      return La(Ma(ob.requests.UPDATE_CONVERSATION, {
        conversationId: a.conversationId,
        dialogId: a.dialogId,
        conversationField: b
      }), a);
    }
  }
  function r(a) {
    if (nb.validateConditions({
      ownerId: {
        type: nb.validationTypes.STRING
      },
      conversationId: {
        type: nb.validationTypes.STRING
      },
      agentId: {
        type: nb.validationTypes.STRING
      }
    }, a)) {
      var b = [],
        c = nb.getDialogIdFromMessageRequest(a);
      a.ownerId && "" !== a.ownerId && b.push({
        field: ob.conversationFields.PARTICIPANTS_CHANGE,
        type: ob.fieldsChangeTypes.REMOVE,
        userId: a.ownerId,
        role: ob.participant.roles.ASSIGNED_AGENT,
        dialogId: c
      });
      b.push({
        field: ob.conversationFields.PARTICIPANTS_CHANGE,
        type: ob.fieldsChangeTypes.UPDATE,
        userId: a.agentId || "",
        role: ob.participant.roles.ASSIGNED_AGENT,
        dialogId: c
      });
      return La(Ma(ob.requests.UPDATE_CONVERSATION, {
        conversationId: a.conversationId,
        conversationField: b
      }), a);
    }
  }
  function s(a) {
    a.role = ob.participant.roles.ASSIGNED_AGENT;
    a.changeType = ob.fieldsChangeTypes.REMOVE;
    return n(a);
  }
  function t(a) {
    if (nb.validateConditions({
      userId: {
        type: nb.validationTypes.STRING
      }
    }, a)) {
      var b = {};
      a && a.userId && (b.userId = a.userId);
      return La(Ma(ob.requests.GET_USER_PROFILE, b), a);
    }
  }
  function u(a) {
    return La(Ma(ob.requests.GET_USER_PROFILE), a);
  }
  function v(a, b) {
    return La(Ma(ob.requests.GENERATE_UPLOAD_TOKEN, b), a);
  }
  function w(a) {
    return La(Ma(ob.requests.GENERATE_DOWNLOAD_TOKEN, {
      downloadable: {
        type: "SecureForm",
        dialogId: a.dialogId,
        submissionId: a.submissionId,
        invitationId: a.invitationId
      }
    }), a);
  }
  function x(a) {
    if (nb.validateConditions({
      agentUserId: {
        type: nb.validationTypes.STRING
      },
      availability: {
        type: nb.validationTypes.STRING
      }
    }, a)) {
      var b = ob.requests.SET_AGENT_STATUS,
        c = a.metadata,
        d = {
          channels: ["MESSAGING"]
        };
      d.agentUserId = a.agentUserId;
      d.availability = a.availability;
      return La(Ma(b, d, c), a);
    }
  }
  function y(a) {
    if (nb.validateConditions({
      agentUserId: {
        type: nb.validationTypes.STRING
      },
      availability: {
        type: nb.validationTypes.STRING
      },
      isBlended: {
        type: nb.validationTypes.STRING
      }
    }, a)) {
      var b = ob.requests.SET_AGENT_STATUS,
        c = a.metadata,
        d = {
          channels: ["MESSAGING"]
        };
      d.agentUserId = a.agentUserId;
      d.availability = a.availability;
      d.isBlended = a.isBlended;
      return La(Ma(b, d, c), a);
    }
  }
  function z(a) {
    if (nb.validateConditions({
      agentUserId: {
        type: nb.validationTypes.STRING
      },
      availability: {
        type: nb.validationTypes.STRING
      }
    }, a)) {
      var b = ob.requests.SET_AGENT_STATUS,
        c = a.metadata,
        d = {
          channels: ["MESSAGING"]
        };
      d.agentUserId = a.agentUserId;
      d.availability = a.availability;
      return La(Ma(b, d, c), a);
    }
  }
  function A(a) {
    if (nb.validateConditions({
      agentUserId: {
        type: nb.validationTypes.STRING
      },
      isBlended: {
        type: nb.validationTypes.STRING
      }
    }, a)) {
      var b = ob.requests.GET_AGENT_STATUS,
        c = a.metadata,
        d = {
          channels: ["MESSAGING"]
        };
      d.agentUserId = a.agentUserId;
      d.isBlended = a.isBlended;
      return La(Ma(b, d, c), a);
    }
  }
  function B(a) {
    if (nb.validateConditions({
      agentUserId: {
        type: nb.validationTypes.STRING
      },
      isBlended: {
        type: nb.validationTypes.STRING
      }
    }, a)) {
      var b = ob.requests.AGENT_SESSION_START,
        c = a.metadata,
        d = {
          channels: ["MESSAGING"]
        };
      d.agentUserId = a.agentUserId;
      d.isBlended = a.isBlended;
      return La(Ma(b, d, c), a);
    }
  }
  function C(a) {
    if (nb.validateConditions({
      agentUserId: {
        type: nb.validationTypes.STRING
      },
      isBlended: {
        type: nb.validationTypes.STRING
      }
    }, a)) {
      var b = ob.requests.AGENT_SESSION_END,
        c = a.metadata,
        d = {
          channels: ["MESSAGING"]
        };
      d.agentUserId = a.agentUserId;
      d.isBlended = a.isBlended;
      return La(Ma(b, d, c), a);
    }
  }
  function D(a) {
    if (nb.validateConditions({
      brandId: {
        type: nb.validationTypes.STRING
      },
      agentId: {
        type: nb.validationTypes.STRING
      }
    }, a)) {
      var b = ob.requests.SUBSCRIBE_AGENT_STATUS,
        c = {};
      c.brandId = a.brandId;
      c.agentId = a.agentId;
      c.agentAvailability = "";
      return La(Ma(b, c), a);
    }
  }
  function E(a) {
    var b = {
      userId: {
        type: nb.validationTypes.STRING,
        optional: !1
      },
      firstName: {
        type: nb.validationTypes.STRING,
        optional: !0
      },
      lastName: {
        type: nb.validationTypes.STRING,
        optional: !0
      },
      avatarUrl: {
        type: nb.validationTypes.STRING,
        optional: !0
      },
      email: {
        type: nb.validationTypes.STRING,
        optional: !0
      },
      phone: {
        type: nb.validationTypes.STRING,
        optional: !0
      },
      backgndImgUri: {
        type: nb.validationTypes.STRING,
        optional: !0
      }
    };
    return nb.validateConditions(b, a) ? La(Ma(ob.requests.SET_USER_PROFILE, {
      firstName: a.firstName,
      lastName: a.lastName,
      userId: a.userId,
      avatarUrl: a.avatarUrl,
      backgndImgUri: a.backgndImgUri,
      role: ob.participant.roles.CONSUMER,
      privateData: {
        mobileNum: a.phone,
        mail: a.email
      }
    }), a) : void 0;
  }
  function F(a) {
    return La(Ma(".InitConnection", null, null, [{
      type: ob.requests.INIT_CONNECTION_TOKEN,
      bearerToken: a
    }]), {});
  }
  function G(a) {
    return nb.validateConditions({
      firstName: {
        type: nb.validationTypes.STRING
      },
      lastName: {
        type: nb.validationTypes.STRING
      },
      userId: {
        type: nb.validationTypes.STRING
      },
      avatarUrl: {
        type: nb.validationTypes.STRING
      },
      email: {
        type: nb.validationTypes.STRING
      },
      phone: {
        type: nb.validationTypes.NUMBER
      },
      apns: {
        type: nb.validationTypes.STRING
      },
      certName: {
        type: nb.validationTypes.STRING
      },
      token: {
        type: nb.validationTypes.STRING
      }
    }, a) ? La(Ma(ob.requests.SET_USER_PROFILE, {
      firstName: a.firstName,
      lastName: a.lastName,
      userId: a.userId,
      authenticatedData: a.authenticatedData,
      avatarUrl: a.avatarUrl,
      role: a.role || ob.participant.roles.ASSIGNED_AGENT,
      backgndImgUri: a.backgndImgUri,
      description: a.description,
      privateData: {
        mobileNum: a.phone,
        mail: a.email,
        pushNotificationData: {
          serviceName: a.apns,
          certName: a.certName,
          token: a.token
        }
      }
    }), a) : void 0;
  }
  function H(a) {
    function b() {
      return a && a.campaignInfo && a.campaignInfo.campaignId && a.campaignInfo.engagementId ? {
        campaignId: a.campaignInfo.campaignId,
        engagementId: a.campaignInfo.engagementId
      } : null;
    }
    function c() {
      return a && a.conversationContext && a.conversationContext.subscription ? [{
        type: "NetworkEffect",
        contentProviderAccountId: a.conversationContext.subscription.provideraccountid,
        conversationOwnerId: a.conversationContext.subscription.conversationowneraccountid,
        referenceId: a.conversationContext.subscription.referenceid
      }] : null;
    }
    var d, e, f;
    a = a || {};
    var g = {
        skillId: a.skillId || "-1",
        channelType: a.channelType || ob.channelTypes.MESSAGING,
        ttrDefName: null,
        campaignInfo: b()
      },
      h = c();
    switch (fb.memberType) {
      case ob.memberTypes.USER:
        if (Qa() || nb.validateConditions({
          brandId: {
            type: nb.validationTypes.STRING
          }
        }, a)) {
          d = ob.requests.REQUEST_CONVERSATION_CONSUMER;
          g.brandId = a.brandId;
          g.skillId = a.skillId || "-1";
          g.channelType = a.channelType;
          g.conversationContext = {
            visitorId: a.conversationContext.visitorId,
            sessionId: a.conversationContext.sessionId,
            interactionContextId: a.conversationContext.interactionContextId,
            type: a.conversationContext.type,
            lang: a.conversationContext.lang
          };
        }
        break;
      case ob.memberTypes.AGENT:
        if (nb.validateConditions({
          consumerId: {
            type: nb.validationTypes.STRING
          }
        }, a)) {
          d = ob.requests.REQUEST_CONVERSATION_AGENT;
          g.consumerId = a.consumerId;
          g.conversationContext = {
            type: "ProactiveContext",
            originConversationId: a.conversationId,
            originConversationContext: a.originContext
          };
          e = a.originContext && a.originContext.lang;
          f = a.lang || e;
          f && (g.conversationContext.lang = f);
        }
    }
    return d ? La(Ma(d, g, h), a) : void 0;
  }
  function I(a) {
    if (nb.validateConditions({
      brandId: {
        type: nb.validationTypes.STRING
      },
      agentId: {
        type: nb.validationTypes.STRING
      }
    }, a) && nb.validateConditions({
      memberType: {
        type: nb.validationTypes.CUSTOM,
        expected: ob.memberTypes.AGENT
      }
    }, fb)) {
      var b = Ma(ob.requests.SUBSCRIBE_ROUTING_TASKS, {
        brandId: a.brandId,
        agentId: a.agentId,
        channelType: ob.channelTypes.MESSAGING
      });
      a.skillId && (b.body.skillId = a.skillId);
      a.conversationId && (b.body.conversationId = a.conversationId);
      return La(b, a);
    }
  }
  function J(a) {
    if (nb.validateConditions({
      subscriptionId: {
        type: nb.validationTypes.STRING
      },
      brandId: {
        type: nb.validationTypes.STRING
      },
      agentId: {
        type: nb.validationTypes.STRING
      }
    }, a) && nb.validateConditions({
      memberType: {
        type: nb.validationTypes.CUSTOM,
        expected: ob.memberTypes.AGENT
      }
    }, fb)) {
      var b = Ma(ob.requests.UPDATE_ROUTING_SUBSCRIPTION, {
        subscriptionId: a.brandId,
        brandId: a.brandId,
        agentId: a.agentId
      });
      a.skillId && (b.body.skillId = a.skillId);
      a.conversationId && (b.body.conversationId = a.conversationId);
      a.channelType && (b.body.channelType = a.channelType);
      return La(b, a);
    }
  }
  function K(a) {
    return nb.validateConditions({
      ringId: {
        type: nb.validationTypes.STRING
      }
    }, a) && nb.validateConditions({
      memberType: {
        type: nb.validationTypes.CUSTOM,
        expected: ob.memberTypes.AGENT
      }
    }, fb) ? La(Ma(ob.requests.UPDATE_RING_STATE, {
      ringId: a.ringId,
      ringState: "ACCEPTED"
    }), a) : void 0;
  }
  function L(a) {
    return nb.validateConditions({
      ringId: {
        type: nb.validationTypes.STRING
      }
    }, a) && nb.validateConditions({
      memberType: {
        type: nb.validationTypes.CUSTOM,
        expected: ob.memberTypes.AGENT
      }
    }, fb) ? La(Ma(ob.requests.UPDATE_RING_STATE, {
      ringId: a.ringId,
      ringState: "REJECTED"
    }), a) : void 0;
  }
  function M(a) {
    if (nb.validateConditions({
      dialogId: {
        type: nb.validationTypes.STRING
      },
      conversationId: {
        type: nb.validationTypes.STRING
      }
    }, a)) {
      var b = Ma(ob.requests.SUBSCRIBE_MESSAGING_EVENTS, {
        dialogId: a.dialogId,
        conversationId: a.conversationId,
        fromSeq: a.fromSeq || 0
      });
      rb[b.id] = a.dialogId;
      tb.push(a.dialogId);
      return La(b, a);
    }
  }
  function N(a) {
    return nb.validateConditions({
      conversationId: {
        type: nb.validationTypes.STRING
      },
      dialogId: {
        type: nb.validationTypes.STRING
      }
    }, a) ? ta(a, {
      maxQuantity: a.maxQuantity || _a,
      olderThan: a.olderThan,
      newerThan: a.newerThan
    }) : void 0;
  }
  function O(a) {
    if (nb.validateConditions({
      conversationId: {
        type: nb.validationTypes.STRING
      }
    }, a)) {
      var b = a.maxQuantity || _a,
        c = a.lastId || b,
        d = c - b;
      0 > d && (d = 0);
      return ta(a, {
        maxQuantity: b,
        olderThan: c,
        newerThan: d
      });
    }
  }
  function P(a) {
    if (nb.validateConditions({
      conversationId: {
        type: nb.validationTypes.STRING
      }
    }, a)) {
      var b = a.maxQuantity || _a,
        c = a.lastId || 0;
      return ta(a, {
        maxQuantity: b,
        olderThan: c + b,
        newerThan: c
      });
    }
  }
  function Q(a) {
    a.state = a.state.toUpperCase();
    if (nb.validateConditions({
      dialogId: {
        type: nb.validationTypes.STRING
      },
      conversationId: {
        type: nb.validationTypes.STRING
      },
      state: {
        type: nb.validationTypes.ENUM,
        expected: ob.messageState
      }
    }, a)) {
      var b = Ma(ob.requests.PUBLISH_EVENT, {
        dialogId: a.dialogId,
        conversationId: a.conversationId,
        event: {
          type: ob.eventTypes.ACCEPT_STATUS,
          status: a.state,
          sequenceList: a.sequenceList && a.sequenceList.constructor === Array ? a.sequenceList : [a.sequenceList]
        }
      }, a.metadata);
      a.retryOnError = !0;
      return La(b, a);
    }
  }
  function R(a) {
    return nb.validateConditions({
      brandId: {
        type: nb.validationTypes.STRING
      }
    }, a) ? La(Ma(ob.requests.GET_BRAND_PROFILE, {
      brandId: a.brandId
    }), a) : void 0;
  }
  function S(a) {
    if (nb.validateConditions({
      brandId: {
        type: nb.validationTypes.STRING
      },
      name: {
        type: nb.validationTypes.STRING
      },
      description: {
        type: nb.validationTypes.STRING
      },
      category: {
        type: nb.validationTypes.STRING
      },
      dateJoined: {
        type: nb.validationTypes.NUMBER
      },
      lastUpdated: {
        type: nb.validationTypes.NUMBER
      },
      logoImg: {
        type: nb.validationTypes.STRING
      },
      backgroundImg: {
        type: nb.validationTypes.STRING
      }
    }, a)) {
      var b = Ma(ob.requests.SET_BRAND_PROFILE);
      nb.overRideMerge(b.body, a);
      return La(b, a);
    }
  }
  function T(a) {
    return nb.validateConditions({
      memberType: {
        type: nb.validationTypes.CUSTOM,
        expected: ob.memberTypes.USER
      }
    }, fb) ? La(Ma(ob.requests.GET_BRANDS, {
      fromTimestamp: a.fromTimestamp
    }), a) : void 0;
  }
  function U(a) {
    if (Qa() || nb.validateConditions({
      brandId: {
        type: nb.validationTypes.STRING
      }
    }, a)) {
      var b = {
        brandId: a.brandId,
        minLastUpdatedTime: a.minLastUpdatedTime,
        agentIds: a.agentIds,
        groupIds: a.groupIds,
        consumerId: a.consumerId,
        stage: a.stage || a.convState || qb
      };
      a.stage || (b.convState = a.convState || qb);
      var c = Ma(ob.requests.SUBSCRIBE_CONVERSATIONS, b);
      a.maxLastUpdatedTime && (c.body.maxLastUpdatedTime = a.maxLastUpdatedTime);
      a.maxETTR && (c.body.maxETTR = a.maxETTR);
      a.conversationId && (c.body.conversationId = a.conversationId);
      return La(c, a);
    }
  }
  function V(a) {
    return nb.validateConditions({
      subscriptionId: {
        type: nb.validationTypes.STRING
      }
    }, a) ? La(Ma(ob.requests.UNSUBSCRIBE_CONVERSATIONS, {
      subscriptionId: a.subscriptionId
    }), a) : void 0;
  }
  function W(a) {
    return nb.validateConditions({
      brandId: {
        type: nb.validationTypes.STRING
      },
      subscriptionId: {
        type: nb.validationTypes.STRING
      }
    }, a) ? La(Ma(ob.requests.SUBSCRIBE_CONVERSATIONS, {
      brandId: a.brandId,
      maxLastUpdatedTime: a.maxLastUpdatedTime,
      minLastUpdatedTime: a.minLastUpdatedTime,
      agentIds: a.agentIds,
      groupIds: a.groupIds,
      consumerId: a.consumerId,
      maxETTR: a.maxETTR,
      stage: a.convState || qb,
      convState: a.convState || qb,
      subscriptionId: a.subscriptionId
    }), a) : void 0;
  }
  function X(a) {
    var b, c;
    if (nb.validateConditions({
      conversationId: {
        type: nb.validationTypes.STRING
      }
    }, a)) {
      b = {
        conversationId: a.conversationId,
        conversationField: a.CSAT
      };
      b.conversationField.field = ob.conversationFields.CSAT_RATE;
      c = Ma(ob.requests.UPDATE_CONVERSATION, b);
      return La(c, a);
    }
  }
  function Y(a) {
    return nb.validateConditions({
      conversationId: {
        type: nb.validationTypes.STRING
      },
      delayType: {
        type: nb.validationTypes.ENUM,
        expected: ob.delayTypes
      },
      tillWhen: {
        type: nb.validationTypes.NUMBER
      }
    }, a) ? La(Ma(ob.requests.UPDATE_CONVERSATION, {
      conversationId: a.conversationId,
      conversationField: {
        field: ob.conversationFields.DELAY,
        type: a.delayType,
        tillWhen: a.tillWhen
      }
    }), a) : void 0;
  }
  function Z(a) {
    return nb.validateConditions({
      conversationId: {
        type: nb.validationTypes.STRING
      }
    }, a) ? La(Ma(ob.requests.UPDATE_CONVERSATION, {
      conversationId: a.conversationId,
      conversationField: {
        field: ob.conversationFields.MANUAL_ETTR,
        time: a.time || null
      }
    }), a) : void 0;
  }
  function $(a) {
    return nb.validateConditions({
      conversationId: {
        type: nb.validationTypes.STRING
      },
      ttrType: {
        type: nb.validationTypes.ENUM,
        expected: ob.effectiveTTRTypes
      },
      value: {
        type: nb.validationTypes.NUMBER,
        optional: !0
      }
    }, a) ? La(Ma(ob.requests.UPDATE_CONVERSATION, {
      conversationId: a.conversationId,
      conversationField: {
        field: ob.conversationFields.TTR,
        ttrType: a.ttrType,
        value: a.value || 0
      }
    }), a) : void 0;
  }
  function _(a) {
    return nb.validateConditions({
      note: {
        type: nb.validationTypes.STRING
      }
    }, a) ? La(Ma(ob.requests.UPDATE_CONVERSATION, {
      conversationId: a.conversationId,
      conversationField: {
        field: ob.conversationFields.NOTE,
        note: a.note
      }
    }), a) : void 0;
  }
  function aa(a) {
    return nb.validateConditions({
      topic: {
        type: nb.validationTypes.STRING
      }
    }, a) ? La(Ma(ob.requests.UPDATE_CONVERSATION, {
      conversationId: a.conversationId,
      conversationField: {
        field: ob.conversationFields.TOPIC,
        note: a.topic
      }
    }), a) : void 0;
  }
  function ba(a) {
    da(a, ob.dialogActions.CREATE);
  }
  function ca(a) {
    da(a, ob.dialogActions.UPDATE);
  }
  function da(a, b) {
    nb.validateConditions({
      conversationId: {
        type: nb.validationTypes.STRING
      },
      dialogId: {
        type: nb.validationTypes.STRING
      }
    }, a) && La(Ma(ob.requests.UPDATE_CONVERSATION, {
      conversationId: a.conversationId,
      conversationField: {
        field: ob.conversationFields.DIALOG_CHANGE,
        type: b || ob.dialogActions.CREATE,
        dialogId: a.dialogId,
        dialog: a.dialog
      }
    }), a);
  }
  function ea(a) {
    return nb.validateConditions({
      conversationId: {
        type: nb.validationTypes.STRING
      },
      dialogId: {
        type: nb.validationTypes.STRING
      }
    }, a) ? La(Ma(ob.requests.UPDATE_CONVERSATION, {
      conversationId: a.conversationId,
      conversationField: {
        field: ob.conversationFields.DIALOG_CHANGE,
        type: ob.dialogActions.UPDATE,
        dialog: {
          dialogId: a.dialogId,
          state: ob.dialog.states.CLOSE,
          closedCause: a.closedCause
        }
      }
    }), a) : void 0;
  }
  function fa() {
    return fb && fb.serverTimeDiff;
  }
  function ga(a) {
    return nb.validateConditions({
      fileSize: {
        type: nb.validationTypes.STRING
      },
      fileType: {
        type: nb.validationTypes.STRING
      }
    }, a) ? La(Ma(ob.requests.GENERATE_UPLOAD_FILE_URL, {
      fileSize: a.fileSize,
      fileType: a.fileType
    }), a) : void 0;
  }
  function ha(a) {
    return nb.validateConditions({
      relativePath: {
        type: nb.validationTypes.STRING
      }
    }, a) ? La(Ma(ob.requests.GENERATE_DOWNLOAD_FILE_URL, {
      relativePath: a.relativePath
    }), a) : void 0;
  }
  function ia() {
    return Ta;
  }
  function ja() {
    Ta && Ta.closeConnection && Ta.closeConnection();
    pb.unregister({
      appName: Ya
    });
    pb = null;
  }
  function ka() {
    return !Ta || !Ta.isConnected || Ta.isConnected();
  }
  function la() {
    return !Ta || !Ta.isWebSocketConnection || Ta.isWebSocketConnection();
  }
  function ma() {
    clearTimeout(Sa);
    var a = new Date(),
      b = 0,
      c = [];
    for (var d in db) if (db.hasOwnProperty(d) && db[d].launchTime) {
      var e = a - db[d].launchTime;
      e > db[d].timeout ? c.push(d) : b++;
    }
    if (c.length) {
      nb.error("Checking errors found " + c.length + " timeout callbacks to call", Ya);
      for (var f = 0; f < c.length; f++) Ba(c[f], mb, !0);
    }
    b > 0 && (Sa = setTimeout(ma, hb));
    return !0;
  }
  function na(a, b, c) {
    if (db[a]) {
      c.retries = c.retries || 0;
      if (c.retries < ib) {
        c.retries++;
        db[a].retryInProgress = La.call(this, b, c);
      }
    }
  }
  function oa(a, b) {
    if (nb.validateConditions({
      token: {
        type: nb.validationTypes.STRING
      }
    }, b)) {
      var c = {
        type: ob.headers.CLIENT_PROPERTIES,
        features: a.queryParameters.features,
        appId: a.queryParameters.appName,
        appVersion: a.queryParameters.appVersion,
        integrationVersion: a.queryParameters.integrationVersion,
        integration: "WEB_SDK"
      };
      a.queryParameters.timeZone && (c.timeZone = a.queryParameters.timeZone);
      var d = [{
          type: ob.headers.CONSUMER_AUTHENTICATION,
          jwt: b.token
        }, c],
        e = Ma(ob.requests.INIT_CONNECTION, null, null, d);
      Ua = e.id;
      return La(e, a);
    }
  }
  function pa(a) {
    a.domain ? Ta = new lpTag.AMSTransport({
      ping: {
        request: Ma(ob.requests.GET_CLOCK),
        keys: {
          request: "id",
          response: "reqId"
        },
        timeout: a.pingTimeout || 1e4,
        idleBeforePing: a.idleBeforePing || 1e4,
        callback: ra
      },
      connectorsSfConfig: a.connectorsSfConfig,
      storageConf: a.storageConf,
      message: f,
      closed: Ea,
      created: Ca,
      domain: a.domain,
      IDPDomain: a.IDPDomain,
      historyDomain: a.historyDomain,
      authCode: a.authCode,
      redirect_uri: a.redirect_uri,
      code_verifier: a.code_verifier,
      authType: a.authType,
      hasAuthentication: a.hasAuthentication,
      token: a.token,
      memberType: fb.memberType,
      apiVersion: $a,
      connectorId: a.connectorId,
      accountId: a.accountId,
      noWS: a.noWS,
      queryParameters: a.queryParameters,
      restRecoveryPolicy: a.restRecoveryPolicy,
      onSessionInvalidated: a.onSessionInvalidated,
      onAuthenticationError: Ga,
      restCallback: Da,
      disableNativeWebSocketCheck: a.disableNativeWebSocketCheck
    }) : nb.error("No domain on initialization", Ya);
  }
  function qa() {
    ob.requests = lpTag.AMSStatics.requestsV3;
    ob.responses = lpTag.AMSStatics.responsesV3;
    ob.notifications = lpTag.AMSStatics.notificationsV3;
  }
  function ra(a) {
    if (a && "PING_SUCCESS" === a.state) {
      za(ob.events.PING_SUCCESS, a || {});
      if (Xa) {
        nb.info("Got successful ping, removing _closeSocket timeout", "_pingCallback");
        clearTimeout(Xa);
        Xa = void 0;
      }
    } else {
      za(ob.events.SERVICE_ISSUE, a || {
        connected: !1,
        ts: new Date().getTime()
      });
      if (wb && !Xa) {
        nb.info("Did not get a response to ping, creating a timeout for _closeSocket", "_pingCallback");
        Xa = setTimeout(sa, xb);
      }
    }
  }
  function sa() {
    Xa = void 0;
    Ta.closeWebsocket();
  }
  function ta(a, b) {
    return La(Ma(ob.requests.QUERY_MESSAGES, {
      conversationId: a.conversationId,
      dialogId: nb.getDialogIdFromMessageRequest(a),
      maxQuantity: b.maxQuantity,
      olderThanSequence: b.olderThan,
      newerThanSequence: b.newerThan
    }), a);
  }
  function ua(a) {
    var b,
      c = ob.notifications[a && a.type];
    if (c) {
      b = a.body.changes && a.body.changes[0] && a.body.changes[0].dialogId;
      if (Qa() && c === ob.notifications["ms.MessagingEventNotification"] && tb.indexOf(b) >= 0) {
        tb.splice(tb.indexOf(b), 1);
        a.body.firstNotification = !0;
        a.body.subscriptionId && (a.body.dialogId = sb[a.body.subscriptionId]);
      }
      za(c, a.body);
    }
    za(ob.events.MSG_RECEIVE, {});
  }
  function va(a) {
    var b = null;
    switch (a.type) {
      case ob.responses.GET_CLOCK:
        Ha(a.body);
        break;
      case ob.responses.GET_USER_PROFILE:
        Ia(a.body);
        break;
      default:
        b = ob.responses[a.type];
    }
    if (Qa()) {
      if (Ua === a.reqId) za(ob.events.INITIALIZED, a);else if (rb[a.reqId]) {
        a.body.subscriptionId && (sb[a.body.subscriptionId] = rb[a.reqId]);
        za(ob.events.SUBSCRIBE_MESSAGING_RESPONSE, a);
      } else if (Va === a.reqId) za("onConversationStepUp", a);else if (b) {
        b === ob.events.BRAND_PROFILE && (a.body.timeDiff = fa());
        za(b, a.body, a.reqId);
      }
    } else b && za(b, a.body, a.reqId);
    wa(a);
    za(ob.events.MSG_RECEIVE, {});
  }
  function wa(a) {
    if (void 0 !== a.code && a.code > 399) {
      var b = a.body;
      if (429 === a.code) {
        "object" != typeof b && (b = {});
        b.throttling = !0;
        vb.emit(lpTag.AMSStatics.EVENT_EMITTER_EVENTS.ON_THROTTLED_BY_SERVER, a);
      }
      Ba(a.reqId, b, !0);
    } else Ba(a.reqId, a.body, !1);
  }
  function xa(a) {
    var b, c;
    for (var d in a) if (a.hasOwnProperty(d) && 0 === d.indexOf("on")) {
      b = a[d];
      c = b.constructor === Array ? b : [b];
      for (var e = 0; e < c.length; e++) ya(d, c[e].func || c[e], c[e].context, Ya);
    }
  }
  function ya(a, b, c, d) {
    var e = {
      eventName: a,
      appName: d || "",
      aSync: !1,
      func: b,
      context: c || null
    };
    return pb.register(e);
  }
  function za(a, b, c) {
    c && "object" == typeof b && (b.requestId = c);
    pb.trigger({
      eventName: a,
      appName: Ya,
      data: b,
      passDataByRef: !1
    });
  }
  function Aa(a, b, c) {
    if (a && c && (c.success || c.error)) {
      db[a] = {
        error: c.error,
        success: c.success,
        context: c.context,
        launchTime: new Date(),
        timeout: c.timeout || gb
      };
      Ra(b) && jb > 0 && (db[a].retryInProgress = setTimeout(na.bind(this, a, b, c), jb));
      Sa = setTimeout(ma, hb);
    }
  }
  function Ba(a, b, c) {
    if (db[a]) {
      nb.runCallBack(c ? db[a].error : db[a].success, b, db[a].context);
      Ja(a);
    }
  }
  function Ca(b) {
    ab = !0;
    "2.5" === $a && F(Ta.getToken());
    e();
    Qa() && nb.runCallBack(a.onSocketCreated, {
      token: Ta.getToken()
    });
    za(ob.events.CONNECTED, b || {
      connected: !0,
      ts: new Date().getTime()
    });
    Na();
  }
  function Da(a) {
    ab = !0;
    a && 200 === a.responseCode && (a.code = 200);
    za(ob.events.INITIALIZED, a);
  }
  function Ea(a) {
    ab = !1;
    Fa();
    a && a.tokenIsInvalid && za(ob.events.SESSION_INVALIDATED, {
      userId: fb.userId || null
    });
    za(ob.events.CLOSED, a || {
      connected: !1,
      ts: new Date().getTime()
    });
  }
  function Fa() {
    for (var a in db) db.hasOwnProperty(a) && Ba(a, mb, !0);
  }
  function Ga(a) {
    za(ob.events.AUTHENTICATION_ERROR, a);
  }
  function Ha(a) {
    a && a.currentTime && (fb.serverTimeDiff = new Date().getTime() - a.currentTime);
  }
  function Ia(a) {
    var b = nb.remodel(a, {
      userId: "userId",
      firstName: "firstName",
      lastName: "lastName",
      authenticatedData: "authenticatedData",
      imgUrl: "avatarUrl",
      role: "role",
      backgroundImage: "backgndImgUri",
      phone: "privateData.mobileNum",
      mail: "privateData.mail",
      description: "description",
      isDeleted: "isDeleted"
    });
    za(ob.events.USER_INFO, b);
  }
  function Ja(a) {
    for (var b in db[a]) if (db[a].hasOwnProperty(b)) {
      "retryInProgress" === b && clearTimeout(db[a][b]);
      db[a][b] = null;
      delete db[a][b];
    }
    db[a] = null;
    delete db[a];
  }
  function Ka() {
    eb.forEach(function (a) {
      La(a.request, a.options);
    });
    eb = [];
  }
  function La(a, b) {
    if (a) {
      b = b || {};
      if (!b.errorHasWrapper) {
        b.errorHasWrapper = !0;
        b.error = Oa(a, b);
      }
      if (ub.inAction) eb.push({
        request: a,
        options: b
      });else if (!ab && cb) bb.push({
        request: a,
        options: b
      });else {
        Aa(a.id, a, b);
        Ta.sendMessage(a);
      }
      return a.id;
    }
  }
  function Ma(a, b, c, d) {
    var e = {
      kind: ob.messageKinds.REQUEST,
      id: nb.getUID(),
      type: a,
      body: b || {}
    };
    c && (e.metadata = c);
    d && (e.headers = d);
    return e;
  }
  function Na() {
    for (var a; bb.length > 0 && ab;) {
      a = bb.shift();
      La(a.request, a.options);
    }
  }
  function Oa(a, b) {
    var c = b.error;
    return function (d) {
      b.failure = "number" == typeof b.failure ? b.failure : 0;
      if (ub.enabled && d.throttling) {
        ub.inAction = !0;
        clearTimeout(Wa);
        Wa = setTimeout(function () {
          ub.inAction = !1;
          Ka();
        }, ub.value);
        La(a, b);
      } else if ((b.retryOnError || cb && d.timeout) && b.failure <= kb) {
        b.failure++;
        cb && d.timeout ? bb.push({
          request: a,
          options: b
        }) : setTimeout(function () {
          La(a, b);
        }, lb);
      } else nb.runCallBack(c, d, b.context);
    };
  }
  function Pa(a) {
    return function (b, c) {
      ya(a, b, c, Ya);
    };
  }
  function Qa() {
    return 3 === $a;
  }
  function Ra(a) {
    var b = nb.getProperty(a, "body.event.type") === ob.eventTypes.CONTENT;
    return a && a.type === ob.requests.PUBLISH_EVENT && b;
  }
  var Sa,
    Ta,
    Ua,
    Va,
    Wa,
    Xa,
    Ya = "AMSClient",
    Za = "3.0.87",
    $a = 2,
    _a = 200,
    ab = !1,
    bb = [],
    cb = !1,
    db = {},
    eb = [],
    fb = {},
    gb = 1e4,
    hb = 1e3,
    ib = 1,
    jb = 5e3,
    kb = 3,
    lb = 200,
    mb = {
      timeout: "Request has timed out"
    },
    nb = lpTag.AMSUtils(),
    ob = nb.clone(lpTag.AMSStatics),
    pb = new lpTag.Chronos.Events(),
    qb = nb.getValues(ob.conversation.states),
    rb = {},
    sb = {},
    tb = [],
    ub = {
      enabled: !1,
      value: 1e3,
      inAction: !1
    },
    vb = new lpTag.AMSEventEmitter(),
    wb = !0,
    xb = 15e3;
  b(a);
  this.name = Ya;
  this.v = Za;
  this.apiVersion = $a;
  this.init = b;
  if (Qa()) {
    this.subscribeMessagingEvents = M;
    this.generateURLForDownloadFile = ha;
  } else {
    this.queryMessages = O;
    this.queryMessagesNewerThan = P;
    this.newQueryMessages = N;
  }
  this.reInit = d;
  this.initConnectionToken = F;
  this.getTimeDiff = fa;
  this.dispose = ja;
  this.getClock = e;
  this.handleMessage = f;
  this.sendMessage = g;
  this.sendPCIMessage = h;
  this.sendStructuredContentMessage = i;
  this.imageMessage = j;
  this.setDialogChatState = k;
  this.setConversationState = l;
  this.closeConversation = m;
  this.changeConversationParticipant = n;
  this.updateConversationParticipantForStepUp = o;
  this.unassignConversation = s;
  this.setAgentStatus = z;
  this.setAgentStatusWithIsBlended = y;
  this.setAgentStatusWithoutIsBlended = x;
  this.getAgentStatus = A;
  this.agentSessionStart = B;
  this.agentSessionEnd = C;
  this.subscribeAgentStatusUpdates = D;
  this.getUserProfile = t;
  this.getMyUserProfile = u;
  this.generateUploadToken = v;
  this.generateDownloadToken = w;
  this.setUserProfile = G;
  this.setConsumerProfileOnBehalfOfAgent = E;
  this.createConversation = H;
  this.takeConversation = K;
  this.rejectRing = L;
  this.subscribeToRouting = I;
  this.updateRoutingSubscription = J;
  this.markMessagesState = Q;
  this.getBrandProfile = R;
  this.setBrandProfile = S;
  this.getBrands = T;
  this.updateConversationsSubscription = W;
  this.subscribeConversations = U;
  this.unsubscribeConversations = V;
  this.setCSAT = X;
  this.setDelay = Y;
  this.setManualETTR = Z;
  this.restoreManualETTR = Z;
  this.setTTR = $;
  this.setNote = _;
  this.setTopic = aa;
  this.transferConversationBySkill = p;
  this.transferConversationByAgent = q;
  this.assignConversationToAgent = r;
  this.openDialog = ba;
  this.updateDialog = ca;
  this.getTransport = ia;
  this.generateURLForUploadFile = ga;
  this.closeDialog = ea;
  this.isConnected = ka;
  this.isWebSocketConnection = la;
  this.on = vb.on;
  this.clearAllListeners = vb.clearAllListeners;
  this.off = vb.off;
  this.emit = vb.emit;
  this.once = vb.once;
  this.events = vb.events;
  for (var yb in ob.events) if (ob.events.hasOwnProperty(yb)) {
    var zb = ob.events[yb];
    this[zb] = Pa(zb);
  }
};
_eventHandlers['click'] = []; // the array could contain callback references, and/or any identifying information you choose
window.lpTag = window.lpTag || {};
lpTag.consumerHistoryAPI = lpTag.consumerHistoryAPI || function (a) {
  function b(a) {
    if (a && a.success && A && !G) {
      var b = {
        error: i.bind(this, a),
        queryParameters: {
          state: "close,archive",
          limit: v
        },
        type: t.CONVERSATIONS
      };
      H && (b.queryParameters.source = H);
      var c = B.getProperty(a, "existingData.body._responseMetadata.count"),
        d = B.getProperty(a, "existingData.body.conversationHistoryMetadataRecords.length");
      b.queryParameters.offset = c && d && c > d ? d : 0;
      var g = a.success;
      a.existingData || (g = f.bind(this, a));
      b.success = e.bind(this, g, a.error, a.existingData, a.to);
      A.sendHistoryRequest(b);
      B.debug("getConversations called correctly", "getConversations");
    } else G ? B.debug("getConversations blocked", "getConversations") : B.error("getConversations called incorrectly", "getConversations");
  }
  function c(a) {
    if (a && a.success && A && a.conversationId && !G) {
      if (F[a.conversationId] && F[a.conversationId][a.dialogId]) {
        a.success(F[a.conversationId][a.dialogId]);
        delete F[a.conversationId][a.dialogId];
      } else if (D[a.conversationId]) {
        E[a.conversationId] || (E[a.conversationId] = []);
        E[a.conversationId].push(a);
      } else {
        D[a.conversationId] = a;
        var b = {
          success: j.bind(this, a),
          error: s.bind(this, a),
          queryParameters: {
            conversationId: a.conversationId
          },
          type: t.MESSAGES
        };
        H && (b.queryParameters.source = H);
        A.sendHistoryRequest(b);
        B.debug("getMessages called correctly", "getMessages");
      }
    } else G ? B.debug("getMessages blocked", "getMessages") : B.error("getMessages called incorrectly", "getMessages");
    return a && a.conversationId;
  }
  function d(a) {
    if (a && a.success && A && a.conversationId && a.fileId) {
      var b = {
        success: a.success,
        error: a.error,
        queryParameters: {
          conversationId: a.conversationId,
          fileId: a.fileId
        },
        type: t.FILE
      };
      H && (b.queryParameters.source = H);
      A.sendHistoryRequest(b);
      B.debug("getMessages called correctly", "getMessages");
    } else B.error("getMessages called incorrectly", "getMessages");
    return a && a.conversationId;
  }
  function e(a, c, d, e, f) {
    var g = f,
      h = B.getProperty(g, "body._responseMetadata.count"),
      i = B.getProperty(g, "body.conversationHistoryMetadataRecords.length");
    if (h && i && h > i && d && d.body && d.body.conversationHistoryMetadataRecords) {
      g = d;
      g.body.conversationHistoryMetadataRecords = g.body.conversationHistoryMetadataRecords.concat(f.body.conversationHistoryMetadataRecords);
      h = B.getProperty(g, "body._responseMetadata.count");
      i = B.getProperty(g, "body.conversationHistoryMetadataRecords.length");
    }
    h && i && h > i ? b({
      success: a,
      error: c,
      existingData: g,
      to: e
    }) : a(g);
  }
  function f(a, b) {
    var c = b && b.body && b.body.conversationHistoryMetadataRecords || [],
      d = g(c),
      e = {
        changes: d.map(function (a) {
          var b = {
            type: "UPSERT",
            result: {
              convId: a.convId,
              conversationDetails: {
                participants: a.participants,
                state: a.state,
                startTs: a.startTs,
                endTs: a.endTs,
                metaDataLastUpdateTs: a.endTs,
                csat: a.csat,
                stage: a.stage
              }
            }
          };
          b.result.conversationDetails.csat && (b.result.conversationDetails.csat.endTs = a.endTs);
          b.result.conversationDetails.dialogs = a.dialogs || [{
            dialogId: a.convId,
            participantsDetails: a.participants,
            dialogType: C.dialog.types.MAIN,
            state: a.state,
            closedBy: a.closeReason,
            creationTs: a.startTs,
            endTs: a.endTs,
            channelType: C.dialog.channelTypes.MESSAGING
          }];
          return b;
        }),
        code: b && b.responseCode || b && b.statusCode
      },
      f = e.changes;
    e.changes = h(f);
    e.changes.length > 0 || 0 === f.length ? a.success.call(this, e) : i.call(this, a, {
      responseCode: 404
    });
  }
  function g(a) {
    return a && a.length > 0 ? a.filter(function (a) {
      a.state && !a.stage && (a.stage = a.state);
      return a.stage === C.conversation.states.CLOSE;
    }) : [];
  }
  function h(a) {
    return a.filter(function (a) {
      return a && a.result && a.result.convId && a.result.conversationDetails && a.result.conversationDetails.startTs && a.result.conversationDetails.endTs && a.result.conversationDetails.participants && a.result.conversationDetails.participants.length > 0;
    });
  }
  function i(a, c) {
    a.retryCount = a.retryCount || 0;
    if (a.retryCount >= y) {
      if (a.existingData && a.success) a.success.call(this, a.existingData);else if (a.error) {
        c && (c.code = c.responseCode || c.statusCode);
        a.error.call(this, c);
      }
    } else {
      a.retryCount++;
      if (!a.existingData && c && (400 === c.responseCode || 400 === c.statusCode)) {
        a.to = null;
        delete a.to;
      }
      setTimeout(function () {
        b.call(this, a);
      }, w * a.retryCount);
    }
  }
  function j(a, b) {
    var c,
      d = a && a.success,
      e = a && a.conversationId,
      f = a && a.dialogId,
      g = {
        changes: b && b.body && b.body.messageEventRecords,
        code: b && b.responseCode || b && b.statusCode
      };
    if (b && e && d && p(g.changes)) {
      g.changes.forEach(function (b) {
        b.dialogId = b.dialogId || e;
        a.participants && b.originatorId && a.participants[b.originatorId] ? b.originatorMetadata = {
          id: b.originatorId,
          role: a.participants[b.originatorId].type
        } : b.originatorId && (b.originatorMetadata = {
          id: b.originatorId,
          role: C.participant.roles.READER
        });
      });
      k(g, e);
      c = F[e][f];
      d.call(this, c);
      delete F[e][f];
      m(e);
    } else if (g && g.changes && 0 === g.changes.length) {
      q.call(this, a, g);
      o.call(this, e, g);
    } else {
      r.call(this, a, {
        responseCode: 404
      });
      n.call(this, e, {
        responseCode: 404
      });
    }
  }
  function k(a, b) {
    for (var c = {}, d = 0; d < a.changes.length; d++) {
      c[a.changes[d].dialogId] || (c[a.changes[d].dialogId] = {
        changes: [],
        code: 200,
        dialogId: a.changes[d].dialogId
      });
      c[a.changes[d].dialogId].changes.push(a.changes[d]);
    }
    F[b] = c;
  }
  function l(a, b) {
    if (a && E[a]) {
      for (var c = 0; c < E[a].length; c++) {
        var d = E[a][c];
        b.call(this, d);
      }
      delete E[a];
    }
    a && D[a] && delete D[a];
  }
  function m(a) {
    l.call(this, a, function (b) {
      if (F[a] && F[a][b.dialogId]) {
        b.success(F[a][b.dialogId]);
        delete F[a][b.dialogId];
      }
    });
  }
  function n(a, b) {
    l.call(this, a, function (a) {
      r.call(this, a, b);
    });
  }
  function o(a, b) {
    l.call(this, a, function (a) {
      q.call(this, a, b);
    });
  }
  function p(a) {
    return a.filter(function (a) {
      return a && a.event && a.event.type && a.event.type === u;
    }).length > 0;
  }
  function q(a, b) {
    a.retryCount = a.retryCount || 0;
    if (a.retryCount >= z) {
      b.dialogId = a.dialogId;
      a.success.call(this, b);
    } else {
      a.retryCount++;
      setTimeout(function () {
        c.call(this, a);
      }, x * a.retryCount);
    }
  }
  function r(a, b) {
    b && (b.code = b.responseCode || b.statusCode);
    a.error.call(this, b);
  }
  function s(a, b) {
    r.call(this, a, b);
    n.call(this, a.conversationId, b);
  }
  var t = {
      CONVERSATIONS: "CONVERSATIONS",
      MESSAGES: "MESSAGES",
      FILE: "FILE"
    },
    u = "ContentEvent",
    v = a.limit || 50,
    w = a.conversationsRetryTimeout || 5e3,
    x = a.messagesRetryTimeout || 3e3,
    y = a.conversationsMaxRetries || 3,
    z = a.messagesMaxRetries || 3,
    A = a.transport,
    B = a.utils || lpTag.AMSUtils(),
    C = lpTag.AMSStatics,
    D = {},
    E = {},
    F = {},
    G = a.blockHistory,
    H = a.historySource;
  this.getConversations = b;
  this.getMessages = c;
  this.generateDownloadURL = d;
};
var originalAddEventListener = window.addEventListener;
window.addEventListener = function (eventName, eventHandler) {
  _eventHandlers[eventName].push({
    click: eventHandler
  });
  originalAddEventListener.apply(this, arguments);
};

// track global variable changes
window.lpTag = window.lpTag || {};
globals.forEach(global => {
  if (window[global] !== undefined) {
    trackingData[global] = window[global].toString();
  }
});
lpTag.UMSClientAPI = lpTag.UMSClientAPI || function (a) {
  function b(a) {
    if (a) {
      qa = new lpTag.Chronos.Events();
      a.apiVersion = a.apiVersion || va;
      a = ka(a);
      la(a, xa);
      a = ja(a, Na);
      Oa = a.isFetchEnabled;
      sa = Oa ? lpTag.taglets.fetch : lpTag.taglets.jsonp;
      pa ? pa.reInit(a) : pa = new lpTag.AMSClient(a);
      oa();
      a.historyDomain && (Ia = new lpTag.consumerHistoryAPI({
        transport: pa.getTransport(),
        blockHistory: a.blockHistory,
        historySource: a.historySource,
        messagesMaxRetries: a.emptyHistoryConvoMaxRetries,
        messagesRetryTimeout: a.emptyHistoryConvoRetryTimeout
      }));
    }
  }
  function c(a) {
    if (a) {
      qa.unregister({
        appName: ta
      });
      b(a);
    }
  }
  function d() {
    pa.dispose();
    pa = null;
    qa.unregister({
      appName: ta
    });
    Aa = {};
    Ba = {};
    za = [];
    Ca = {};
  }
  function e(a) {
    if (Ia && (a && a.forceLoadFromHistoryAPI || u(a && a.conversationId))) {
      a.success = w.bind(this, a.conversationId);
      a.error = x.bind(this, a.conversationId);
      a.participants = Ba;
      return Ia.getMessages(a);
    }
    return pa.subscribeMessagingEvents(a);
  }
  function f(a) {
    Ga.validateConditions({
      skillId: {
        type: Ga.validationTypes.NUMBER
      }
    }, a) && pa.getTransport().sendShiftStatusRequest(a);
  }
  function g(a) {
    if (Ga.validateConditions({
      dialogId: {
        type: Ga.validationTypes.STRING
      }
    }, a)) {
      a.conversationId = Da[a.dialogId];
      if (ra) {
        a.closedCause = ya.CONSUMER;
        return pa.closeDialog(a);
      }
      return pa.closeConversation(a);
    }
  }
  function h(a) {
    ra && (a.field = wa.conversationFields.STAGE);
    return pa.closeConversation(a);
  }
  function i(a) {
    if (Ga.validateConditions({
      dialogId: {
        type: Ga.validationTypes.STRING
      }
    }, a)) {
      a.conversationId = Da[a.dialogId];
      return pa.sendMessage(a);
    }
  }
  function j(a) {
    if (Ga.validateConditions({
      dialogId: {
        type: Ga.validationTypes.STRING
      }
    }, a)) {
      a.conversationId = Da[a.dialogId];
      return pa.sendPCIMessage(a);
    }
  }
  function k(a) {
    if (Ga.validateConditions({
      dialogId: {
        type: Ga.validationTypes.STRING
      }
    }, a)) {
      a.conversationId = Da[a.dialogId];
      return pa.sendStructuredContentMessage(a);
    }
  }
  function l(a) {
    if (Ga.validateConditions({
      dialogId: {
        type: Ga.validationTypes.STRING
      }
    }, a)) {
      a.conversationId = Da[a.dialogId];
      return pa.markMessagesState(a);
    }
  }
  function m(a) {
    if (Ga.validateConditions({
      dialogId: {
        type: Ga.validationTypes.STRING
      }
    }, a)) {
      a.conversationId = Da[a.dialogId];
      return pa.setDialogChatState(a);
    }
  }
  function n(a) {
    return Ga.validateConditions({
      relativePath: {
        type: Ga.validationTypes.STRING
      }
    }, a) ? Ia && u(a.conversationId) ? Ia.generateDownloadURL({
      fileId: a.relativePath.split("/").pop(),
      conversationId: a.conversationId,
      success: a.success,
      error: a.error
    }) : pa.generateURLForDownloadFile(a) : void 0;
  }
  function o(a) {
    var b,
      c = [],
      d = a.changes;
    ra = a.subscriptionId !== Ka ? p(d) : ra;
    q(d);
    if (Array.isArray(d)) for (var e = 0; e < d.length; e++) {
      b = d[e] && d[e].result;
      if (b) {
        b.notificationType = d[e].type;
        b.conversationDetails.state = b.conversationDetails.stage ? b.conversationDetails.stage : b.conversationDetails.state;
        c.push(b);
      }
    }
    c && c.length > 0 ? s(c, a.subscriptionId) : r(a.subscriptionId);
  }
  function p(a) {
    for (var b = 0; b < a.length; b++) if (a[b].result.conversationDetails.stage) return !0;
    return !1;
  }
  function q(a) {
    for (var b = 0; b < a.length; b++) {
      var c = a[b].result,
        d = c.conversationDetails,
        e = d.dialogs || [],
        f = d.participants;
      0 === e.length && (e[0] = {
        dialogId: c.convId,
        creationTs: d.startTs,
        dialogType: wa.dialog.types.MAIN,
        channelType: wa.dialog.channelTypes.MESSAGING
      });
      for (var g = 0; g < e.length; g++) if (d.stage) e[g].participants = e[g].participantsDetails;else {
        e[g].participants = f;
        e[g].state = d.state;
        e[g].closedBy = d.closeReason || null;
        e[g].metaDataLastUpdateTs = d.metaDataLastUpdateTs;
        e[g].endTs = d.endTs;
      }
    }
  }
  function r(a) {
    ia(xa.CONVERSATION_LIST, {
      data: [],
      subscriptionId: a
    });
  }
  function s(a, b) {
    for (var c, d, e, f, g = [], h = Aa[b] || [], i = 0; i < a.length; i++) {
      c = Ga.getProperty(a[i], "convId");
      h[c] = h[c] || {};
      v(g, a[i], h, c);
      y(g, a[i], h, c);
      z(g, a[i], h, c);
      C(g, a[i], h, c);
      E(g, a[i], h, c);
      if ("DELETE" === a[i].notificationType) {
        d = Ga.getProperty(a[i], "conversationDetails");
        e = Ga.getProperty(d, "state");
        f = Ga.getProperty(d, "stage");
        ia(xa.DELETE_SUBSCRIBE_FROM_CONVERSATION, {
          subscriptionId: b,
          conversationId: c,
          state: e,
          stage: f
        });
      }
    }
    Aa[b] = h;
    for (var j in g) g.hasOwnProperty(j) && ia(j, {
      data: g[j],
      subscriptionId: b
    });
    if (Ia && !Ja && b !== Ka) {
      Ja = !0;
      Ia.getConversations({
        success: t
      });
    }
  }
  function t(a) {
    if (a) {
      a.subscriptionId = Ka;
      o(a);
    }
  }
  function u(a) {
    return !!a && !!Aa[Ka] && !!Aa[Ka][a];
  }
  function v(a, b, c, d) {
    var e = Ga.getProperty(b, "conversationDetails.skillId");
    if (!c[d].published || c[d].skillId !== e) {
      c[d].published = !0;
      c[d].skillId = e;
      A(a, xa.CONVERSATION_LIST, b);
    }
  }
  function w(a, b) {
    pa.handleMessage({
      kind: wa.messageKinds.RESPONSE,
      type: La,
      reqId: a,
      body: {
        reqId: a,
        code: b && b.code || 200
      }
    });
    O(b);
  }
  function x(a, b) {
    pa.handleMessage({
      kind: wa.messageKinds.RESPONSE,
      type: La,
      reqId: a,
      body: {
        reqId: a,
        code: b && b.code || 500
      }
    });
  }
  function y(a, b, c, d) {
    var e = Ga.getProperty(b, "conversationDetails.state"),
      f = Ga.getProperty(b, "conversationDetails.metaDataLastUpdateTs"),
      g = Ga.getProperty(b, "conversationDetails.closeReason");
    if (c[d].state !== e) {
      c[d].state = e;
      e !== wa.conversation.states.OPEN && N(a, b, c, d);
      A(a, xa.CONVERSATION_STATE, {
        convId: d,
        state: e,
        closeReason: g,
        ts: f
      });
      e === wa.conversation.states.OPEN && N(a, b, c, d);
    } else N(a, b, c, d);
  }
  function z(a, b, c, d) {
    var e = B(b);
    if (!Ga.isSameObject(c[d].ttr, e)) {
      c[d].ttr = e;
      A(a, xa.TTR, {
        convId: d,
        ttr: e
      });
    }
  }
  function A(a, b, c) {
    a[b] = a[b] || [];
    a[b].push(c);
  }
  function B(a) {
    var b = Ga.getProperty(a, "conversationDetails.ttr") || {};
    b.manualETTR = Ga.getProperty(a, "conversationDetails.manualETTR") || null;
    b.effectiveTTR = a.effectiveTTR;
    b.delay = Ga.getProperty(a, "conversationDetails.delay.tillWhen") || null;
    b.timeDiff = pa.getTimeDiff();
    return b;
  }
  function C(a, b, c, d) {
    var e = D(b);
    if (!Ga.isSameObject(c[d].csat, e)) {
      c[d].csat = e;
      A(a, xa.CSAT, {
        convId: d,
        csat: e
      });
    }
  }
  function D(a) {
    return {
      csatRate: Ga.getProperty(a, "conversationDetails.csat.csatRate"),
      status: Ga.getProperty(a, "conversationDetails.csat.status"),
      endTs: Ga.getProperty(a, "conversationDetails.endTs")
    };
  }
  function E(a, b, c, d) {
    for (var e = b.conversationDetails.conversationHandlerDetails && b.conversationDetails.conversationHandlerDetails.accountId || lpTag.site, f = 0; f < b.conversationDetails.dialogs.length; f++) {
      var g = b.conversationDetails.dialogs[f],
        h = g.dialogId,
        i = g.participants || null,
        j = i && i.filter(function (a) {
          return a.role === this.CONSUMER;
        }, Fa),
        k = i && i.filter(function (a) {
          return a.role === this.CONTROLLER;
        }, Fa);
      c[d].dialogsParticipants || (c[d].dialogsParticipants = {});
      if (!Ga.isSameObject(i, c[d].dialogsParticipants[h]) && i) {
        M(k, g);
        K(i, e);
        L(j);
        F(a, h, i, c[d].dialogsParticipants[h]);
        c[d].dialogsParticipants[h] = i;
      }
    }
  }
  function F(a, b, c, d) {
    var e, f, g;
    c = H(c);
    d = H(d);
    g = G(c, d);
    for (var h in g) {
      e = c && c[h];
      f = d && d[h];
      if (!Ga.isSameObject(e, f)) {
        Ea[b] = Ea[b] || {};
        c && I(a, f, e, b, h);
        J(a, f, e, b, h);
      }
    }
  }
  function G(a, b) {
    var c = ka(a);
    for (var d in b) if (c[d]) {
      c[d] = a[d].concat(b[d]);
      for (var e = [], f = 0; f < c[d].length; f++) -1 === e.indexOf(c[d][f]) && e.push(c[d][f]);
      c[d] = e;
    } else c[d] = b[d];
    return c;
  }
  function H(a) {
    var b = {};
    if (a && a.length > 0) for (var c = 0; c < a.length; c++) {
      var d = a[c].role;
      b && b[d] ? b[d].push(a[c].id) : b[d] = [a[c].id];
    }
    return Ga.isEmpty(b) ? null : b;
  }
  function I(a, b, c, d, e) {
    if (b) for (var f = 0; f < b.length; f++) (!c || c.indexOf(b[f]) < 0) && A(a, xa.PARTICIPANT_LEFT, {
      dialogId: d,
      type: e,
      pid: b[f]
    });
  }
  function J(a, b, c, d, e) {
    var f, g;
    if (c) for (var h = 0; h < c.length; h++) if (!b || b.indexOf(c[h]) < 0) {
      f = c[h];
      g = {
        dialogId: d,
        type: e,
        pid: c[h]
      };
      if (Ba[f] && Ba[f].name) {
        g = Ga.cloneExtend(g, Ba[f], !0);
        A(a, xa.PARTICIPANT_JOINED, g);
      } else Ea[d][f] = g;
    }
  }
  function K(a, b) {
    for (var c = 0; c < a.length; c++) a[c].role !== wa.participant.roles.CONSUMER && $([a[c]], a[c].role, b);
  }
  function L(a) {
    for (var b = 0; b < a.length; b++) {
      var c = a[b].id;
      if (void 0 === Ba[c]) {
        Ba[c] = {
          userId: c,
          type: wa.participant.roles.CONSUMER
        };
        pa.getUserProfile({
          userId: c
        });
      }
    }
  }
  function M(a, b) {
    if (b && b.dialogId && a) {
      a = a.map(function (a) {
        return {
          userId: a.id,
          type: a.role,
          dialogId: b.dialogId
        };
      });
      ia(xa.PARTICIPANT_JOINED, a);
    }
  }
  function N(a, b, c, d) {
    var e = Ga.getProperty(b, "conversationDetails.dialogs"),
      f = [],
      g = [];
    if (e && e.length) {
      for (var h = 0; h < e.length; h++) {
        Da[e[h].dialogId] || (Da[e[h].dialogId] = d);
        if (!Ca[e[h].dialogId] || !Ga.isSameObject(Ca[e[h].dialogId], e[h])) {
          Ca[e[h].dialogId] = e[h];
          e[h].state === wa.dialog.states.OPEN ? g.push(e[h]) : f.push(e[h]);
        }
      }
      for (var i = 0; i < f.length; i++) A(a, xa.dialogUpdated, f[i]);
      for (var j = 0; j < g.length; j++) A(a, xa.dialogUpdated, g[j]);
    }
  }
  function O(b, c) {
    var d,
      e = b.changes || b,
      f = b.dialogId || e && e[0] && e[0].dialogId,
      g = ga(e),
      h = !1;
    b && b.firstNotification && P(e);
    if (a.isStepUpEnabled && g.length > 0) for (var i = ha(Ba)[0], j = 0; j < g.length; j++) {
      var k = g[j];
      if ("CONSUMER" === k.role) {
        for (var l = 0; l < e.length; l++) {
          var m = e[l];
          "CONSUMER" === m.originatorMetadata.role && (m.originatorId = i.userId);
        }
        g.splice(j, 1);
      }
    }
    if (0 === g.length) {
      d = fa(e);
      d && f && (d.dialogId = f);
      R(d, !0 !== c);
      h = !0;
    } else {
      $(g, wa.participant.roles.READER, lpTag.site);
      !0 !== c && za.push(e);
    }
    return h;
  }
  function P(a) {
    for (var b = 0; b < a.length; b++) a[b].firstMessagingEventsNotification = !0;
  }
  function Q(a) {
    var b = 0,
      c = {};
    c[a.PENDING] = b++;
    c[a.SENT] = b++;
    c[a.ACCEPT] = b++;
    c[a.READ] = b++;
    c[a.ERROR] = b++;
    return c;
  }
  function R(a, b) {
    var c;
    a = S(a);
    if (b || a.message || a.messageState) {
      c = T(a.message);
      c = U(a.messageState, c);
      c && a.dialogId && (c.dialogId = a.dialogId);
      ia(xa.CONTENT, c);
    }
    for (var d in a) a.hasOwnProperty(d) && wa.contentEvents[d] && ia(wa.contentEvents[d], a[d]);
  }
  function S(a) {
    a = a || {};
    a.message = Array.isArray(a.message) ? a.message : [];
    Array.isArray(a[wa.contentType.RichContentEvent]) && (a.message = a.message.concat(a[wa.contentType.RichContentEvent]));
    return a;
  }
  function T(a) {
    var b,
      c,
      d = {};
    Array.isArray(a) && a.forEach(function (a) {
      if ("object" == typeof a) {
        c = Ba[a.originatorId] || {};
        a.state = a.state || wa.messageState.SENT;
        b = Y(a.dialogId, a.sequence);
        d[b] = a;
      }
    });
    return d;
  }
  function U(a, b) {
    b = b || {};
    if (Array.isArray(a)) {
      a[0].firstMessagingEventsNotification && (a = V(a, b));
      for (var c = 0; c < a.length; c++) W(b, a[c]);
    }
    return b;
  }
  function V(a, b) {
    for (var c, d, e, f, g, h = wa.messageState.READ, i = wa.messageState.ACCEPT, j = 0; j < a.length; j++) {
      c = Ga.getProperty(a[j], "event.status");
      if (c === h || c === i) {
        d = Ga.getProperty(a[j], "event.sequenceList");
        e = Math.max.apply(null, d);
        f = [];
        for (var k = 0; e >= k; k++) {
          g = Y(a[j].dialogId, k);
          b[g] && Z(b[g], a[j]) && f.push(k);
        }
        a[j].event.sequenceList = f;
      }
    }
    return a;
  }
  function W(a, b) {
    var c,
      d = Ga.getProperty(b, "event.sequenceList");
    if (Array.isArray(d)) for (var e = 0; e < d.length; e++) {
      c = Y(b.dialogId, d[e]);
      a[c] = X(a[c], b, d[e]);
    }
  }
  function X(a, b, c) {
    var d = b.event.status;
    a ? a.state = Z(a, b) ? d : a.state : a = {
      dialogId: b.dialogId,
      sequence: c,
      originatorId: b.originatorId,
      originatorPId: b.originatorPId,
      state: d
    };
    return a;
  }
  function Y(a, b) {
    return a + "_" + b;
  }
  function Z(a, b) {
    var c = a.originatorId === b.originatorId,
      d = b.event.status,
      e = a.state === d,
      f = Ma[a.state] < Ma[d],
      g = a.originatorMetadata && a.originatorMetadata.role && a.originatorMetadata.role !== wa.roles.CONSUMER,
      h = b.originatorMetadata && b.originatorMetadata.role !== wa.roles.CONSUMER,
      i = g && !h,
      j = !g && h;
    return !c && !e && f && (i || j);
  }
  function $(a, b, c) {
    if (a) for (var d = 0; d < a.length; d++) {
      var e = a[d];
      if (void 0 === Ba[e.id]) {
        var f = e.role || b;
        Ba[e.id] = {
          userId: e.id,
          type: f
        };
        f !== Fa.CONSUMER && _(e.id, c, ba.bind(this, e.id, f));
      }
    }
  }
  function _(a, b, c) {
    var d = lpTag.protocol || "https:";
    a && "function" == typeof c && sa.issueCall({
      url: d + "//" + lpTag.csds.getDomain("acCdnDomainConsumerSdk") + "/api/account/" + (b || lpTag.site) + "/configuration/le-users/users/" + a,
      credentials: Oa ? "omit" : void 0,
      success: c,
      error: c
    });
  }
  function aa(a) {
    var b = a && a.userId;
    Ba[b] = Ba[b] || {};
    if (a && !Ba[b].name) {
      Ba[b].imgUrl = a.imgUrl;
      Ba[b].userId = b;
      Ba[b].name = a.firstName || "";
      Ba[b].name = a.firstName && a.lastName ? Ba[b].name + " " : "";
      Ba[b].name = Ba[b].name ? Ba[b].name + a.lastName : a.lastName;
      Ba[b].type = Fa.CONSUMER;
      Ba[b].known = !0;
      da(a);
      ca();
    }
  }
  function ba(a, b, c) {
    var d = Oa ? c && c.body : c;
    Ba[a].name = d.nickname;
    Ba[a].imgUrl = d && d.pictureUrl;
    Ba[a].userId = a;
    Ba[a].known = !0;
    da(Ba[a], b);
    ca();
  }
  function ca() {
    var b = !0;
    if (a.directOrderForPendingContent) for (var c = 0; za.length && c < za.length;) {
      b = O(za[c], !0);
      b ? za.splice(c, 1) : c++;
    } else for (var d = za.length - 1; d >= 0; d--) {
      b = O(za[d], !0);
      b && za.splice(d, 1);
    }
  }
  function da(a, b) {
    var c = !1;
    for (var d in Ea) if (Ea.hasOwnProperty(d) && Ea[d][a.userId] && Ba[a.userId] && Ba[a.userId].known) {
      ea(Ba[a.userId], a, b, d);
      c = !0;
    }
    !c && a.known && a.userId && ea({}, a, b);
  }
  function ea(a, b, c, d) {
    var e = Ga.cloneExtend(a, b, !0);
    d && (e.dialogId = d);
    c && (e.type = c);
    ia(xa.PARTICIPANT_JOINED, [e]);
    if (!Ga.isEmpty(Ea[d]) && !Ga.isEmpty(Ea[d][a.userId])) {
      delete Ea[d][a.userId];
      Ga.isEmpty(Ea[d]) && delete Ea[d];
    }
  }
  function fa(a) {
    var b,
      c = {};
    if (Array.isArray(a)) for (var d = 0; d < a.length; d++) {
      b = wa.contentType[Ga.getProperty(a[d], "event.type")];
      if (b) {
        c[b] = c[b] || [];
        c[b].push(a[d]);
      }
    }
    return c;
  }
  function ga(a) {
    for (var b, c, d = [], e = [], f = 0; f < a.length; f++) {
      b = Ba[a[f].originatorId];
      if ((!b || !b.known) && e.indexOf(a[f].originatorId) < 0) {
        c = a[f].originatorMetadata && a[f].originatorMetadata.role;
        d.push({
          id: a[f].originatorId,
          role: c
        });
        e.push(a[f].originatorId);
      }
    }
    return d;
  }
  function ha(a) {
    var b,
      c = [];
    for (var d in a) {
      b = a[d];
      "CONSUMER" === b.type && c.push(b);
    }
    return c;
  }
  function ia(a, b) {
    qa.trigger({
      eventName: a,
      appName: ta,
      data: b,
      passDataByRef: !1
    });
  }
  function ja(a, b) {
    var c;
    for (var d in b) if (b.hasOwnProperty(d)) {
      c = a[d] || [];
      c = Array.isArray(c) ? c : [c];
      c.push(b[d]);
      a[d] = c;
    }
    return a;
  }
  function ka(a) {
    var b = {};
    if ("object" == typeof a) for (var c in a) b[c] = a[c];else b = a;
    return b;
  }
  function la(a, b) {
    var c, d;
    for (var e in a) if (a.hasOwnProperty(e) && ma(e, b) && 0 === e.indexOf("on")) {
      c = a[e];
      d = c.constructor === Array ? c : [c];
      for (var f = 0; f < d.length; f++) na(e, d[f].func || d[f], d[f].context, ta);
      delete a[e];
    }
  }
  function ma(a, b) {
    for (var c in b) if (b.hasOwnProperty(c) && b[c] === a) return !0;
    return !1;
  }
  function na(a, b, c, d) {
    var e = {
      eventName: a,
      appName: d || "",
      aSync: !1,
      func: b,
      context: c || null
    };
    return qa.register(e);
  }
  function oa() {
    for (var a in pa) Ha[a] = Ha[a] || pa[a];
  }
  var pa,
    qa,
    ra,
    sa,
    ta = "AMSClient",
    ua = "0.0.1",
    va = 3,
    wa = lpTag.AMSStatics,
    xa = wa.UMSApiEvents,
    ya = wa.dialog.closedCauses,
    za = [],
    Aa = {},
    Ba = {},
    Ca = {},
    Da = {},
    Ea = {},
    Fa = wa.participant.roles,
    Ga = lpTag.AMSUtils(),
    Ha = this,
    Ia = null,
    Ja = !1,
    Ka = "historyAPI",
    La = "ms.SubscribeMessagingResponse",
    Ma = Q(wa.messageState),
    Na = {
      onExConversationNotification: o,
      onQueryResponse: O,
      onUserInfo: aa
    },
    Oa = !1;
  b(a);
  this.name = ta;
  this.v = ua;
  this.init = b;
  this.reInit = c;
  this.dispose = d;
  this.subscribeMessagingEvents = e;
  this.sendShiftStatus = f;
  this.closeDialog = g;
  this.closeConversation = h;
  this.sendMessage = i;
  this.sendPCIMessage = j;
  this.sendStructuredContentMessage = k;
  this.markMessagesState = l;
  this.setDialogChatState = m;
  this.generateURLForDownloadFile = n;
};