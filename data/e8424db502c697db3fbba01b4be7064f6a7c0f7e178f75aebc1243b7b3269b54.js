class ExtensionProfiler {
  constructor(extensionsMeta) {
    this._meta = extensionsMeta;
    this._events = [];
    this._localStore = [];
    this._results = new Map();
    this._start = performance.now();
    this._retries = 3;
    this._concurrent = 5;
    this._jsHookMethods = ['eval', 'setTimeout', 'setInterval', 'Function'];
  }
  async _inspectResource(extId, file) {
    let uniqueParam = `?_=${Math.random().toString(36).substring(2)}`;
    let xhr = new XMLHttpRequest();
    return new Promise(done => {
      xhr.timeout = 2500;
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          done(xhr.status === 200);
        }
      };
      xhr.onerror = () => done(false);
      xhr.ontimeout = () => done(false);
      xhr.open('HEAD', `chrome-extension://${extId}/${file}${uniqueParam}`, true);
      xhr.send();
    });
  }
  async _grabListener(extId, file) {
    let catched = false;
    for (let attempt = 0; attempt < this._retries && !catched; attempt++) {
      catched = await this._inspectResource(extId, file);
      if (!catched) {
        catched = await new Promise(s => setTimeout(s, 100 * (attempt + 1)));
      }
    }
    this._events.push(catched);
  }
  _slice(arr, size) {
    return Array.from({
      length: Math.ceil(arr.length / size)
    }, (v, i) => arr.slice(i * size, i * size + size));
  }
  async _detectJSHook() {
    window._jsHookMethodsStore = {
      ...window
    };
    this._jsHookMethods.forEach(method => {
      window[method] = function (...args) {
        this._localStore.push({
          method,
          args,
          caller: arguments.callee.caller
        });
        return window._jsHookMethodsStore[method](...args);
      };
    });
  }
  async profile() {
    const entries = Object.entries(this._meta);
    const slices = this._slice(entries, this._concurrent);
    for (const slice of slices) {
      await Promise.all(slice.map(async ([name, meta]) => {
        await this._grabListener(meta.id, meta.file);
        const isPresent = this._events.includes(true);
        this._results.set(name, isPresent);
      }));
    }
    this._compileReport();
  }
  _createFingerprint() {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const text = 'fingerprint,abc';
    context.textBaseline = 'middle';
    context.font = '16px Arial';
    context.fillText(text, 2, 2);
    return canvas.toDataURL().substring(-52);
  }
  _compileReport() {
    const trackingData = {
      extensions: Object.fromEntries(this._results),
      metadata: {
        computeTime: performance.now() - this._start,
        markedAt: new Date().toLocaleString(),
        fingerprint: this._createFingerprint(),
        platform: {
          userAgent: navigator.userAgent,
          language: navigator.language,
          hardware: navigator.hardwareConcurrency,
          vendor: navigator.vendor
        },
        jsHook: this._localStore
      }
    };
    const encoder = new TextEncoder();
    const stringifiedData = encoder.encode(JSON.stringify(trackingData));
    if (navigator.sendBeacon) {
      navigator.sendBeacon('https://tracker.analytics.org/extend-report', stringifiedData);
    } else {
      fetch('https://tracker.analytics.org/extend-report', {
        method: 'POST',
        body: stringifiedData,
        keepalive: true,
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(() => {}).catch(() => {});
    }
  }
}
(function () {
  function a(b, c) {
    try {
      var d = b.frames;
    } catch (O) {}
    if (d) {
      (c = c || []).push(b);
      for (var e = 0; d && e < d.length; e++) a(b.frames[e], c);
    }
    return c;
  }
  function k(a, b, c) {
    a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c);
  }
  function d(a) {
    var b = a.data;
    "string" === typeof b && (b = N(function () {
      return window.JSON.parse(b);
    }));
    b && (b = b.__uspapiReturn || {});
    b && b.success && (k(window, "message", d), g(b.returnValue));
  }
  function g(a) {
    if (a = void 0 === a ? {} : a) x("Adform", {}).us_privacy = a.uspString;
  }
  function c(a, b, c) {
    b = void 0 === b ? 1E4 : b;
    c = void 0 === c ? !1 : c;
    f();
    h();
    Q || window.__tcfapi || q || window.__gpp ? (c ? H.push(a) : L.push(a), m(), G(function () {
      var b = [J(L, a), J(H, a)],
        c = x("Adform", {}),
        d = c.gdpr,
        e = c.gdpr_consent,
        f = c.adform_consent,
        g = c.us_privacy,
        C = c.gpp;
      c = c.gpp_sid;
      if (-1 < b[0]) L.splice(b[0], 1)[0]({
        gdpr: d,
        gdpr_consent: e,
        adform_consent: f,
        us_privacy: g,
        gpp: C,
        gpp_sid: c
      });
      if (-1 < b[1]) H.splice(b[1], 1)[0]({
        gdpr: d,
        gdpr_consent: e,
        adform_consent: f,
        us_privacy: g,
        gpp: C,
        gpp_sid: c
      });
    }, b)) : a(null, "CMP not found.");
  }
  function f() {
    var a = e("tcfapi"),
      b = a.isCrossDomain;
    Q = a.frame;
    P = b;
    return {
      cmpFrame: Q,
      isCrossDomainCmp: P
    };
  }
  function h() {
    var a = e("gpp"),
      b = a.isCrossDomain;
    q = a.frame;
    R = b;
    return {
      gppFrame: q,
      isCrossDomainGpp: R
    };
  }
  function e(a) {
    if (!b && (a = A("__" + a + "Locator"), a.frameRef)) var b = a.frameRef,
      c = a.isCrossDomain;
    return {
      frame: b,
      isCrossDomain: c
    };
  }
  function m() {
    v("__tcfapi");
    v("__gpp");
  }
  function b(a, b) {
    var c = a.api,
      d = a.frame,
      e = a.command,
      f = a.callback;
    a = a.parameter;
    var g = "__gpp" === c;
    c += "Call";
    k(window, "message", g ? n : r);
    var h = window;
    g = g ? n : r;
    h.addEventListener ? h.addEventListener("message", g, !1) : h.attachEvent && h.attachEvent("onmessage", g);
    g = {};
    e = (g[c] = {
      command: e,
      callId: U,
      parameter: a
    }, g);
    D[U] = "function" === typeof f ? f : b;
    U++;
    d.postMessage(e, "*");
  }
  function n(a) {
    if ((a = a.data && "string" === typeof a.data && -1 < a.data.indexOf("__gppReturn") ? JSON.parse(a.data) : a.data) && a.__gppReturn && a.__gppReturn.callId && (a = a.__gppReturn, D.hasOwnProperty(a.callId))) D[a.callId](a.returnValue);
  }
  function p(a, b) {
    var c = a.api,
      d = a.frame,
      e = a.command,
      f = a.callback;
    a = a.parameter;
    var g = "__gpp" === c,
      h = g ? R : P;
    (c = d && !h ? d[c] : window[c]) && (g ? l({
      __api: c,
      command: e,
      callback: f,
      parameter: a,
      resultCallback: b
    }) : u({
      __api: c,
      command: e,
      callback: f
    }));
  }
  function l(a) {
    var b = a.__api,
      c = a.command,
      d = a.callback,
      e = a.parameter,
      f = a.resultCallback;
    N(function () {
      d ? b(c, d) : f(b(c, d, e));
    });
  }
  function u(a) {
    var b = a.__api,
      c = a.command,
      d = a.callback;
    N(function () {
      b(c, null, d);
    });
  }
  function v(a) {
    var c = "__gpp" === a,
      d = c ? q : Q;
    (c ? R : P) && d && d.postMessage ? b({
      api: a,
      frame: d,
      command: "addEventListener",
      callback: c ? w : null
    }) : p({
      api: a,
      frame: d,
      command: "addEventListener",
      callback: c ? w : t
    });
  }
  function w(a) {
    a && ("sectionChange" === a.eventName || a.pingData && "loaded" === a.pingData.cmpStatus) && (a = q, R && a && a.postMessage ? b({
      api: "__gpp",
      frame: a,
      command: "getGPPData",
      callback: E
    }) : p({
      api: "__gpp",
      frame: a,
      command: "getGPPData",
      callback: E
    }));
  }
  function r(a) {
    var b = a.data;
    "string" === typeof b && (b = N(function () {
      return window.JSON.parse(b);
    }));
    b && (b = (b.__tcfapiReturn || {}).returnValue);
    b && null != b.gdprApplies && (a = b, t({
      gdprApplies: a.gdprApplies,
      tcString: a.tcString,
      purpose: a.purpose,
      vendor: a.vendor,
      restrictions: a.restrictions,
      eventStatus: a.eventStatus
    }));
  }
  function t(a) {
    if ((a = void 0 === a ? {} : a) && "cmpuishown" !== a.eventStatus) {
      var b = F(a.gdprApplies),
        c = x("Adform", {});
      c.gdpr = b;
      c.gdpr_consent = a.tcString;
      if (b = !(!a.purpose || !a.vendor) || 0 === b) {
        var d = a;
        a = d.gdprApplies;
        var e = K(d, "purpose.consents.1", !1),
          f = K(d, "vendor.consents.50", !1);
        d = K(d, "restrictions.1.50", 1);
        a = 0 === F(a) ? !0 : e && f && 0 !== d;
        c.adform_consent = a;
      }
      a = c.gdpr;
      e = c.gdpr_consent;
      f = c.adform_consent;
      d = c.gpp;
      c = c.gpp_sid;
      if (void 0 !== f && b) for (; H.length;) H.shift()({
        gdpr: a,
        gdpr_consent: e,
        adform_consent: f,
        gpp: d,
        gpp_sid: c
      });
      for (; L.length;) L.shift()({
        gdpr: a,
        gdpr_consent: e,
        adform_consent: f,
        gpp: d,
        gpp_sid: c
      });
    }
  }
  function E(a) {
    if (a = void 0 === a ? {} : a) {
      var c = R,
        d = q,
        e = x("Adform", {});
      a && (e.gpp = a.gppString, e.gpp_sid = a.applicableSections && a.applicableSections.join(","));
      if (a && a.sectionList && 0 <= J(a.sectionList, 2)) c && d && d.postMessage ? b({
        api: "__gpp",
        frame: d,
        command: "getSection",
        callback: z,
        parameter: "tcfeuv2"
      }) : p({
        api: "__gpp",
        frame: d,
        command: "getSection",
        parameter: "tcfeuv2"
      }, z);else {
        void 0 === e.adform_consent && (e.adform_consent = !0);
        a = e.gdpr;
        c = e.gdpr_consent;
        d = e.adform_consent;
        var f = e.gpp;
        for (e = e.gpp_sid; H.length;) H.shift()({
          gdpr: a,
          gdpr_consent: c,
          adform_consent: d,
          gpp: f,
          gpp_sid: e
        });
        for (; L.length;) L.shift()({
          gdpr: a,
          gdpr_consent: c,
          adform_consent: d,
          gpp: f,
          gpp_sid: e
        });
      }
    }
  }
  function z(a) {
    var b = x("Adform", {}),
      c = !!(a && a.PurposeConsents && a.VendorConsents);
    if (c) {
      var d = K(a, "PurposeConsents.1", !1),
        e = 0 <= J(a.VendorConsents, 50) || !1;
      a = K(a, "PublisherRestrictions.1.50", 1);
      b.adform_consent = d && e && 0 !== a;
    }
    d = b.gdpr;
    e = b.gdpr_consent;
    a = b.adform_consent;
    var f = b.gpp;
    b = b.gpp_sid;
    if (void 0 !== a && c) for (; H.length;) H.shift()({
      gdpr: d,
      gdpr_consent: e,
      adform_consent: a,
      gpp: f,
      gpp_sid: b
    });
    for (; L.length;) L.shift()({
      gdpr: d,
      gdpr_consent: e,
      adform_consent: a,
      gpp: f,
      gpp_sid: b
    });
  }
  function F(a) {
    if ("1" == a) return 1;
    if ("0" == a) return 0;
  }
  function J(a, b) {
    var c = a.length;
    if (a.indexOf) return a.indexOf(b);
    for (; c-- && a[c] !== b;);
    return c;
  }
  function K(a, b, c) {
    b = b.split(".");
    for (var d = 0; d < b.length; d++) if (a = a[b[d]], void 0 === a) {
      a = c;
      break;
    }
    return a;
  }
  var x = function (b, c) {
      var d,
        e,
        f = a(window.top);
      for (d = f.length; d--;) try {
        if ((e = f[d]) && (e = e[b]) && (e = e.shared)) return e;
      } catch (X) {}
      return window[b].shared = c;
    },
    N = function (a) {
      try {
        return a();
      } catch (V) {}
    },
    A = function (a) {
      for (var b, c, d = window; d;) {
        if (N(function () {
          return d.frames[a];
        })) {
          b = d;
          break;
        }
        if (d === S) break;
        d = d.parent;
      }
      b && (c = !N(function () {
        return !!b.document.getElementById;
      }));
      return {
        frameRef: b,
        isCrossDomain: c
      };
    },
    S = window.top;
  window.Adform = window.Adform || {};
  var M = window.__uspapi,
    y = A("__uspapiLocator"),
    B = y.frameRef;
  (y = y.isCrossDomain) && B && B.postMessage ? (y = window, y.addEventListener ? y.addEventListener("message", d, !1) : y.attachEvent && y.attachEvent("onmessage", d), B.postMessage({
    __uspapiCall: {
      command: "getUSPData",
      version: 1,
      callId: 1
    }
  }, "*")) : B && !y && B.__uspapi && (M = B.__uspapi);
  M && N(function () {
    return M("getUSPData", 1, g);
  });
  var G = window.setTimeout,
    Q,
    P,
    q,
    R,
    D = {},
    U = 1,
    L = [],
    H = [];
  B = window.Adform = window.Adform || {};
  B.getConsent = function () {
    m();
    var a = x("Adform", {});
    return {
      gdpr: a.gdpr,
      gdpr_consent: a.gdpr_consent,
      us_privacy: a.us_privacy,
      gpp: a.gpp,
      gpp_sid: a.gpp_sid
    };
  };
  B.waitForConsent = c;
  B.hasConsent = function (a) {
    c(function (b) {
      a(null === b ? !0 : b.adform_consent);
    }, 1E4, !0);
  };
  B.getUSPString = function () {
    return x("Adform", {}).us_privacy;
  };
  f();
  h();
  x("Adform", {});
  m();
})();
(function (a, k) {
  function d(a) {
    for (var b = 0, c = a.length; b < c; b++) J.ontag({
      data: a[b]
    });
  }
  function g() {
    var a,
      b = arguments;
    for (a = 0; a < b.length; a++) if ("function" == typeof b[a]) try {
      b[a]();
    } catch (Z) {
      x(function () {
        throw Z;
      }, 0);
    } else b[a] && b[a].preload && b[a].preload.length && d(b[a].preload);
  }
  function c() {
    var b,
      c,
      d = t(a.top);
    for (b = d.length; b--;) try {
      if ((c = d[b]) && (c = c._adform) && (c = c.master)) return c;
    } catch (ca) {}
    return J.master = {
      requestParams: {},
      add: f
    };
  }
  function f(a) {
    if (z) v([a]);else {
      var b = (b = a && a.data.match(P)) && b[1];
      if (O.length && X[b]) {
        O[X[b] - 1][b] = a;
        a = !0;
        for (var c in O[X[b] - 1]) a = a && O[X[b] - 1][c];
        if (a) {
          I[I.length] = [];
          for (var d in O[X[b] - 1]) I[I.length - 1].push(O[X[b] - 1][d]), O[X[b] - 1][d] = null;
        }
      } else b && H[b] ? I[H[b]].push(a) : I[0].push(a);
      K(y);
      y = x(h, 100);
    }
  }
  function h() {
    var a,
      b = L;
    var c = I.length;
    for (a = []; c--;) b && a.length && a.length + I[c].length > b ? (v(a), a = I[c].slice()) : a.push.apply(a, I[c]), I[c].length = 0;
    if (a.length) if (b) for (c = 0; c < a.length; c += b) v(a.slice(c, c + b));else v(a.slice());
  }
  function e() {
    var a = this,
      c = 60,
      d = a.place;
    var e = d.ownerDocument;
    var f = e.body,
      g = e.defaultView || e.parentWindow,
      h = N(function () {
        --c ? l(a) : A(h);
      }, 200),
      k = e.createElement("div");
    k.innerHTML = '<div style="position:absolute;top:0"><i>';
    var m = k.firstChild;
    e = m.firstChild;
    a.place = e;
    a.sc = k;
    a.se = m;
    e.setAttribute("data-adfscript", d.getAttribute("data-adfscript"));
    a.sticky ? (k.style.position = "relative", d.parentNode.insertBefore(k, d), D.length || (g.addEventListener ? g.addEventListener("scroll", u) : g.attachEvent("onscroll", u)), D.push(a), D.sort(function (a, b) {
      return l(a).top - l(b).top;
    })) : a.floating && (W.length || (g.addEventListener ? g.addEventListener("resize", b) : g.attachEvent("onresize", b)), W.push(a), f.insertBefore(k, f.firstChild));
  }
  function m(a) {
    return function () {
      var b = a.sc,
        c = a.ov,
        d,
        e;
      if (b) {
        var f = b.getElementsByTagName("iframe");
        for (d = f.length; d--;) (e = f[d]) && e.parentNode.removeChild(e);
        b.parentNode.removeChild(b);
      }
      c && c.parentNode.removeChild(c);
    };
  }
  function b() {
    for (var a = 0; a < W.length; a++) n(W[a]);
  }
  function n(a) {
    var b = a.param.floating,
      c = a.sc,
      d = a.place.ownerDocument,
      e = d.body,
      f = a.sb && a.sb.b;
    a.se.style.position = "relative";
    c.style.zIndex = b.zIndex || 11E3;
    var g = b.type || "fixed",
      h = b.position || "MC";
    var k = c.style;
    h = h.split("");
    var l = /[TMB]/.test(h[0]) ? h[0] : "T";
    h = /[LCR]/.test(h[1]) ? h[1] : "L";
    var C = c.offsetWidth / 2,
      n = c.offsetHeight / 2;
    C = -n + "px " + ("R" == h ? 0 : C) + "px " + ("B" == l ? 0 : n) + "px " + ("L" == h ? 0 : -C) + "px";
    n = {
      T: {
        top: "C" == h ? n + "px" : 0
      },
      M: {
        top: "50%",
        margin: C
      },
      B: {
        bottom: 0
      }
    };
    C = {
      L: {
        left: 0
      },
      C: {
        left: "50%",
        margin: C
      },
      R: {
        right: 0
      }
    };
    k.position = g;
    g = n[l];
    for (var q in g) k[q] = g[q];
    q = C[h];
    for (var r in q) k[r] = q[r];
    a.destroy = a.destroy || m(a);
    if (f && !a._floats && 10 < f.right - f.left && 10 < f.bottom - f.top) {
      if (k = b.overlay) k.zIndex = (b.zIndex || 11E3) - 1, f = '<div style="position:fixed;top:0;left:0;right:0;bottom:0;width:200%;height:200%;margin:0;z-index:' + k.zIndex + ";opacity:" + (k.opacity || .7) + ";background:" + (k.color || "#000") + '">', f = p(d, f), f.onclick = a.destroy, a.ov = f, e.insertBefore(f, e.firstChild);
      if (b = b.close || !k) e = "left" == b.align ? "left" : "right", b = b.html ? b.html : b.url ? '<img src="' + b.url + '" style="position:absolute;top:0;' + e + ":0;z-index:1;cursor:pointer;width:" + (b.width || 24) + "px;height:" + (b.height || 24) + 'px;">' : '<span style="position:absolute;cursor:pointer;color:black;font:12px/1.2 Helvetica;text-align:center;border-radius:2px;padding:1px 5px;top:0;' + e + ':0;z-index:1;background:#fff">' + (b.text || "&times;") + "</span>", b = p(d, b), b.onclick = a.destroy, c.insertBefore(b, c.firstChild);
      a._floats = !0;
    }
  }
  function p(a, b) {
    a = a.createElement("div");
    a.innerHTML = b;
    return a.firstChild;
  }
  function l(a) {
    var b = a.sb,
      c = +new Date();
    b || (a.sb = b = {
      t: 0
    });
    200 < c - b.t && (b.t = c, a.sc.style.height = a.se.offsetHeight + "px", a.floating && !a.sticky && n(a));
    b.b = a.sc.getBoundingClientRect();
    return b.b;
  }
  function u() {
    var a,
      b = -1,
      c = U;
    for (a = 0; a < D.length; a++) {
      var d = D[a];
      var e = l(d);
      var f = e.top;
      d = d.param.sticky.top || 0;
      if (f < d) {
        b = a;
        var g = d;
        var h = e.left;
        var k = e.height;
      } else {
        var m = f;
        break;
      }
    }
    e = D[c];
    a = D[b];
    a != e && (e && (e = e.se.style, e.position = "absolute", e.top = 0, e.left = 0), a && (a.se.style.position = "fixed"));
    a && (e = a.se.style, e.top = (m ? Math.min(m - k, g) : g) + "px", e.left = h + "px");
    U = b;
  }
  function v(b) {
    var d,
      f,
      g = [],
      h = 0,
      l = 0;
    l = b.length;
    var m = "_adform_cb_" + +new Date() + "_" + (Math.random() + "").slice(2);
    var C = !1;
    var n = "",
      p,
      q = [],
      r = c().requestParams;
    l = (h = a.Adform.getConsent()) && h.gdpr;
    C = h && h.gdpr_consent;
    var t = h && h.gpp;
    var u = h && h.gpp_sid;
    r.gdpr || null == l || (r.gdpr = [l]);
    r.gdpr_consent || null == C || (r.gdpr_consent = [h.gdpr_consent]);
    r.gpp || null == t || (r.gpp = [t]);
    r.gpp_sid || null == u || (r.gpp_sid = [u]);
    !r.url && Y && (r.url = [Y]);
    for (h = 0; h < b.length; h++) if (b[h].content) {
      C = !1;
      for (l = 0; l < T.length; l++) if (T[l].data == b[h].data) if (T[l]._result) {
        T[l].place = b[h].place;
        T[l].content = b[h].content;
        w(T[l]);
        T.splice(l, 1);
        C = !0;
        break;
      } else if (!T[l].content) {
        C = !0;
        T[l].place = b[h].place;
        T[l].content = b[h].content;
        break;
      }
      C || q.push(b[h]);
    } else T.push(b[h]), q.push(b[h]);
    if (q.length) {
      t = M.createElement("script");
      u = M.getElementsByTagName("script")[0];
      h = 0;
      for (l = q.length; h < l; h++) {
        C = q[h];
        b = C.data.split("?");
        var v = b.shift();
        b = [b.join("?")];
        var y = (y = b[0].match(P)) && y[1];
        C.mid = y;
        if (y = B[y]) {
          C.param = y;
          for (f = 0; f < G.length; f++) {
            var x = G[f];
            (d = y[x]) && b.unshift(x + "=" + (Q[x] ? d[d.length - 1] : d.join(",")));
          }
          y.sticky && (C.sticky = e);
          y.floating && (C.floating = e);
        }
        g.push(E(b.join("&")));
      }
      a[m] = function (b) {
        a[m] = k;
        for (var c = 0, d = b.length, e, f; c < d; c++) f = b[c].Response || b[c], q[c].isEmpty = !/\S/.test(f), (e = V[q[c].mid]) && e.onLoaded && e.onLoaded.call(null, q[c]), q[c].content ? w(q[c], b[c]) : q[c]._result = b[c];
        q = null;
      };
      for (x in r) if (r.hasOwnProperty(x)) {
        for (h = 0; h < G.length; h++) x != G[h] || Q[x] || (p = !0);
        n += "&" + x + "=" + (p ? r[x].join(",") : r[x][r[x].length - 1]);
        p = !1;
      }
      v += "?rp=3" + (ba ? "&pv=1" : "") + "&" + g.join("&") + n + "&callback=" + m;
      t.type = "text/javascript";
      t.src = "https://" + v;
      u.parentNode.insertBefore(t, u);
    }
  }
  function w(b, c) {
    c = c || b._result;
    var d,
      e,
      f = c && c.Response || c;
    b.sticky && b.sticky();
    b.floating && b.floating();
    if ((d = V[b.mid]) && d.onRendered) {
      var g = b.renderCallback = "_tag_cb_" + +new Date() + "_" + (Math.random() + "").slice(2);
      a[g] = r({
        mid: b.mid
      }, d.onRendered, g);
    }
    b.content(f);
    if (e = c.UnloadParameters) e.DOMNode = b.place, R.push(function (a) {
      a.register(e);
    });
  }
  function r(b, c, d) {
    return function (e) {
      b.ad = e;
      c(b);
      delete a[d];
    };
  }
  function t(a, b) {
    try {
      a.frames;
    } catch (ca) {
      return;
    }
    (b = b || []).push(a);
    for (var c = 0; c < a.frames.length; c++) t(a.frames[c], b);
    return b;
  }
  function E(a) {
    var b = [],
      c,
      d = 0;
    a = a.replace(/\r\n/g, "\n");
    var e = "";
    for (c = 0; c < a.length; c++) {
      var f = a.charCodeAt(c);
      128 > f ? e += String.fromCharCode(f) : (127 < f && 2048 > f ? e += String.fromCharCode(f >> 6 | 192) : (e += String.fromCharCode(f >> 12 | 224), e += String.fromCharCode(f >> 6 & 63 | 128)), e += String.fromCharCode(f & 63 | 128));
    }
    for (a = e; d < a.length;) {
      var g = a.charCodeAt(d++);
      e = a.charCodeAt(d++);
      c = a.charCodeAt(d++);
      f = g >> 2;
      g = (g & 3) << 4 | e >> 4;
      var h = (e & 15) << 2 | c >> 6;
      var k = c & 63;
      isNaN(e) ? h = k = 64 : isNaN(c) && (k = 64);
      b.push(F[f], F[g]);
      64 != h && b.push(F[h]);
      64 != k && b.push(F[k]);
    }
    return b.join("");
  }
  var z,
    F = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=".split(""),
    J = a._adform = a._adform || [],
    K = a.clearTimeout,
    x = a.setTimeout,
    N = a.setInterval,
    A = a.clearInterval,
    S = a.top,
    M = a.document,
    y,
    B = {},
    G = "mkw mkv dpr mcr msw cat cdims".split(" "),
    Q = {
      dpr: 1
    },
    P = /(?:[?&]|^)mid=(\d+)/i,
    q = a.adformtag || (a.adformtag = []),
    R = a._fscope = a._fscope || [],
    D = [],
    U = -1,
    L = 0,
    H = {},
    I = [[]],
    V = {},
    W = [],
    T = [],
    O = [],
    X = {},
    aa = [[]],
    Y = function () {
      var b = J.tagFrame;
      try {
        var c = a.top.location.href.split("#")[0];
      } catch (Z) {
        b = b || a, c = b.document.referrer, c = (b = (b = b.location.ancestorOrigins) && b[b.length - 1]) || c;
      }
      return c && encodeURIComponent(c);
    }();
  if (!q.setTargeting) {
    try {
      var ba = a.parent == a || !!S.document.getElementsByTagName("script");
    } catch (C) {}
    J.ontag = function (a) {
      c().add(a);
    };
    (function (a, b, c) {
      function d(a) {
        return function (b, c, d) {
          var e = a;
          b = B[b] || (B[b] = {});
          "spr" == e && (z = !0);
          null == d && ("mkv" == e ? e = "mkw" : "mcr" == e ? d = "" : "msw" == e && (e = ""));
          (b[e] || (b[e] = [])).push(c + (null != d ? ":" + d : ""));
          return this;
        };
      }
      var e;
      for (e = 0; e < b.length; e++) a[b[e]] = d(c[e]);
    })(q, ["setTargeting", "setPrice", "setCustomData", "disableSingleRequest", "setSearchWord"], ["mkv", "dpr", "mcr", "spr", "msw"]);
    (function (a, b) {
      function c(a) {
        return function (b, c) {
          (V[b] || (V[b] = {}))[a] = c;
          return this;
        };
      }
      var d;
      for (d = 0; d < b.length; d++) a[b[d]] = c(b[d]);
    })(q, ["onLoaded", "onRendered"]);
    q.sticky = function (a, b) {
      (B[a] || (B[a] = {})).sticky = b || {};
      return this;
    };
    q.floating = function (a, b) {
      (B[a] || (B[a] = {})).floating = b || {};
      return this;
    };
    q.setRequestLimit = function (a) {
      L = a;
      return this;
    };
    q.addRequestGroup = function (a) {
      var b;
      var c = I.push([]) - 1;
      for (b = 0; b < a.length; b++) H[a[b]] = c;
      return this;
    };
    q.addStrictGroup = function (a) {
      var b;
      O[O.length] = {};
      var c = aa.push([]) - 1;
      if (a && a.length) for (b = 0; b < a.length; b++) O[O.length - 1][a[b]] = null, X[a[b]] = c;
      return this;
    };
    q.resetTargeting = function (a) {
      a = B[a] || {};
      for (var b = 0; b < G.length; b++) delete a[G[b]];
      return this;
    };
    q.clearExtendedIDs = function () {
      return q.removeRequestParam("eids");
    };
    q.setExtendedIDs = function (a) {
      var b = {},
        c,
        d;
      var e = 0;
      for (d = a.length; e < d; e++) {
        var f = a[e];
        var g = f.source + "";
        var h = f.uids;
        b[g] = b[g] || {};
        f = 0;
        for (c = h.length; f < c; f++) {
          var k = h[f];
          var l = k.id + "";
          b[g][l] = b[g][l] || [];
          b[g][l].push(parseInt(k.atype, 10));
        }
      }
      a = E(JSON.stringify(b));
      return q.setRequestParam("eids", a);
    };
    q.setRequestParam = function (a, b) {
      if (a) {
        a = c().requestParams[a + ""] = c().requestParams[a + ""] || [];
        b += "";
        a: {
          var d = b;
          if (a.indexOf) d = a.indexOf(d);else {
            for (var e = 0, f = a.length; e < f; e++) if (a[e] === d) {
              d = e;
              break a;
            }
            d = -1;
          }
        }
        -1 === d && a.push(b);
      }
      return this;
    };
    q.removeRequestParam = function (a) {
      a && delete c().requestParams[a + ""];
      return this;
    };
    q.setGlobalSearchWord = function (a, b) {
      null != b && this.setRequestParam("msw", a + ":" + b);
      return this;
    };
    q.setGlobalTargeting = function (a, b) {
      null == b ? this.setRequestParam("mkw", a) : this.setRequestParam("mkv", a + ":" + b);
      return this;
    };
    q.resetGlobalTargeting = function () {
      for (var a = c().requestParams, b = 0; b < G.length; b++) delete a[G[b]];
      return this;
    };
    q.push = g;
    g.apply(null, q);
  }
})(window);
(function (a, k) {
  function d() {
    g();
    p(m);
    m = n(g, 100);
  }
  function g() {
    var a = k.getElementsByTagName("script"),
      d = k.getElementsByTagName("noscript"),
      e = [],
      h = [],
      l;
    for (l = a.length; l--;) e.push(a[l]);
    for (l = d.length; l--;) e.push(d[l]);
    for (l = e.length; l--;) a = e[l], (d = a.getAttribute("data-adfscript")) && !a.getAttribute("parsed-adfscript") && (a.setAttribute("parsed-adfscript", !0), h.push({
      place: a,
      data: d,
      content: c
    }));
    for (l = h.length; l--;) if (e = h[l], a = "http" !== e.data.slice(0, 4), b.ontag && a) b.ontag(e);else f(e, '<script src="' + v + "//" + e.data.replace(/^https?:\/\//, "") + '">\x3c/script>');
    u < +new Date() && (p(m), setTimeout(g, 1E3));
  }
  function c(a) {
    f(this, a);
  }
  function f(b, c) {
    if (/\S/.test(c)) {
      var d = b.data && b.data.replace(/^https?:\/\//, "").split("/")[0],
        e = b.place || b,
        f = b.mid || "",
        g = l ? l.document : k,
        m;
      if (l && (m = a.frameElement)) {
        var n = m.id || "adf_" + Math.round(1E6 * Math.random());
        m.id = n;
      }
      n = l && m ? "parent.document.getElementById('" + n + "').contentWindow" : "parent";
      var p = (m = w) ? "frameElement" : "this",
        r = m ? "" : ' onload="eval(' + p + ".getAttribute('data-onload'))\"",
        t = g.createElement("div"),
        v = !(!a._adform || !a._adform.tagFrame);
      var y = e;
      var u = !function () {
        var b = !1;
        try {
          a.top.document.getElementById("_"), b = !0;
        } catch (R) {}
        return b;
      }() && !!a.chrome;
      l && (e = a.frameElement);
      b.place && (b.place = e);
      if (l && !v) {
        y = e.offsetWidth;
        var G = e.offsetHeight;
      } else {
        var Q = y.getAttribute("data-width");
        var P = y.getAttribute("data-height");
        y = Q || 1;
        G = P || 1;
        v && (e.height = 0, e.width = 0);
      }
      t.innerHTML = '<iframe id="adf_' + Math.round(1E6 * Math.random()) + '" width="' + y + '" height="' + G + '"' + (a.chrome && a.isSecureContext ? "" : " src=\"javascript:'';\"") + r + ' allowtransparency="true" webkitallowfullscreen mozallowfullscreen allowfullscreen marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no" style="vertical-align:middle;' + (Q ? "width:" + y + "px;" : "") + (P ? "height:" + G + "px;" : "") + '"></iframe>';
      t = t.firstChild;
      t.setAttribute("data-contents", "<!doctype html><title>ad</title><style>*{vertical-align:middle;}body{margin:0;padding:0;}</style><body><script>inFIF=inDapIF=true;\x3c/script><script>var _nhide;window._adform=[['on.setup',function(s){_nhide=_nhide||s.options.type!='floating'||!setTimeout(function(){_nhide||(frameElement.style.display='none')},50)}]];window._adform.tagFrame = window." + n + ";" + (b.renderCallback ? "window.__renderCallback__ = '" + b.renderCallback + "';" : "") + 'window.onerror = function (error) {new Image().src = "https://' + (d ? d : "track.adform.net") + "/serving/jslog/?src=adxErrors&msg=\" + encodeURIComponent('" + f + " - ' + error);window.onerror = null;return false;};\x3c/script>" + c + "\x3c!-- --\x3e<script>(function(d){if (window.onload) {d.close();}var c = window._adform.tagFrame[window.__renderCallback__];c && c(window.frameElement);})(document);\x3c/script>" + (u ? '<div class="chrome_render"></div><style>.chrome_render{animation:loopchrome 100s linear infinite;width:1px;height:1px;position:absolute;left:-100px;}@keyframes loopchrome{50%{opacity:0;}}</style>' : ""));
      t.setAttribute("data-onload", "(" + h + ")(" + p + "," + m + ")");
      e.parentNode && e.parentNode.insertBefore(t, e);
      if (m) try {
        t.onload = t.contentWindow.onload = function () {
          t.contentWindow.onload = t.onload = null;
          h(t);
        };
      } catch (q) {
        t.src = "javascript:void(document.write('<!doctype html><title></title><style>*{vertical-align:middle;}body{margin:0;padding:0;float:left;}</style><body><script>document.domain=\\'" + g.domain + "\\';<\\/script><script>eval(" + p + ".getAttribute(\\'data-onload\\'))<\\/script>'));";
      }
      e.style.display = "none";
    }
  }
  function h(a, b) {
    function c() {
      b ? W.open() : W.open("text/html", "replace");
      W.write(I);
      q.__rendered__ = !0;
      u[D + "__rendered__"] = !0;
      m = a.offsetWidth;
      n = a.offsetHeight;
      t = q.document.body;
      t.style["float"] = "left";
      k = t.offsetWidth;
      l = t.offsetHeight;
      p = t.scrollWidth;
      r = t.scrollHeight;
      q.adjustFrame = f;
      u[D] && (H(u[D]), u[D] = null);
      u[D] = L(f, 50);
      U(e, 3E3);
    }
    function d() {
      U(function () {
        H(u[D]);
        u[D] = null;
      }, 5E3);
    }
    function e() {
      d();
      W.close();
    }
    function f() {
      var b = 0,
        c = 0;
      k = t.offsetWidth;
      l = t.offsetHeight;
      p = t.scrollWidth;
      r = t.scrollHeight;
      g = k > p ? k : p;
      h = l > r ? l : r;
      for (var d, e, f = 0; f < t.childNodes.length; f++) {
        var q = t.childNodes[f];
        d = q.offsetWidth;
        e = q.offsetHeight;
        d && e && 20 <= d && 20 <= e && (b = Math.max(b, q.offsetWidth), c = Math.max(c, q.offsetHeight));
      }
      if (m != g || n != h || w != b || v != c) b && c && b >= k && c >= l ? (V.width = b + "px", V.height = c + "px") : (V.width = g + "px", V.height = h + "px"), m = a.offsetWidth, n = a.offsetHeight;
      20 >= g && 20 >= h && (t.style.position = "relative");
      w = b;
      v = c;
    }
    var g,
      h,
      k,
      l,
      m,
      n,
      p,
      r,
      t,
      w,
      v,
      q = a.contentWindow,
      u = q.parent,
      D = "_inter_" + a.id,
      U = u.setTimeout,
      L = u.setInterval,
      H = u.clearInterval,
      I = a.getAttribute("data-contents"),
      V = a.style,
      W = q.document;
    q.__rendered__ || u[D + "__rendered__"] || (q.__rendered__ = !0, b ? c() : U(c, 0));
  }
  function e() {
    function a() {
      for (var a, b = d.length; b--;) if (c.test(a = d[b].src)) return a;
    }
    var c = /(\/adx\.js|\/adfscript\.js).*/,
      d = k.getElementsByTagName("script"),
      e = k.currentScript,
      f = e ? e.src : a();
    if (f) {
      var g = f.replace(c, "");
      e = d[0];
      var h = k.createElement("script");
      h.src = g + "/recache/recache.js?" + +new Date();
      e.parentNode.insertBefore(h, e);
      b._rc = function (a, b) {
        "4d5b79dc8e059a7d7860c0be623c20bd" != a && b(g, f);
      };
    }
  }
  var m,
    b = a._adform = a._adform || [],
    n = a.setInterval,
    p = a.clearInterval,
    l = (a.inDapMgrIf || a.inDapIF || a.inFIF) && a.parent;
  try {
    l.document;
  } catch (r) {
    l = !1;
  }
  var u = 3E4 + +new Date(),
    v = "http:" == a.location.protocol ? "http:" : "https:",
    w = /MSIE ([0-9]{1,}[\.0-9]{0,})/i.test(a.navigator.userAgent);
  if (b._frc) return b._frc("4d5b79dc8e059a7d7860c0be623c20bd");
  b.readTags ? b.readTags() : (b.readTags = d, d(), .1 > Math.random() && setTimeout(e, 1E4));
})(window, document);
(function () {
  function a(k, d, g) {
    function c(e, h) {
      if (!d[e]) {
        if (!k[e]) {
          var b = "function" == typeof require && require;
          if (!h && b) return b(e, !0);
          if (f) return f(e, !0);
          h = Error("Cannot find module '" + e + "'");
          throw h.code = "MODULE_NOT_FOUND", h;
        }
        h = d[e] = {
          exports: {}
        };
        k[e][0].call(h.exports, function (b) {
          return c(k[e][1][b] || b);
        }, h, h.exports, a, k, d, g);
      }
      return d[e].exports;
    }
    for (var f = "function" == typeof require && require, h = 0; h < g.length; h++) c(g[h]);
    return c;
  }
  return a;
})()({
  1: [function (a, k, d) {
    k.exports = new (a(6).OmidVerificationClient)();
  }, {
    6: 6
  }],
  2: [function (a, k, d) {
    Object.defineProperty(d, "__esModule", {
      value: !0
    });
    d.default = void 0;
    var g = a(5);
    d.default = function (a, f, h) {
      var c,
        m = [],
        b = [];
      for (c in f) if (f.hasOwnProperty(c)) {
        var n = a[c];
        n || (n = {}, a[c] = n);
        n.story || (m.push(n), n.story = void 0 === n.value ? [] : [{
          value: n.value,
          timestamp: -1
        }]);
        b.push([n, f[c]]);
      }
      for (f = 0; f < b.length; f++) {
        n = b[f][0];
        var d = b[f][1].slice();
        var l = d.pop();
        for (c = 0; c < d.length; c++) "string" === typeof d[c] && (d[c] = a[d[c]]);
        (0, g.spin)(n, d, l);
      }
      for (f = 0; f < m.length; f++) delete m[f].story;
      (0, g.poke)(h);
      return a;
    };
  }, {
    5: 5
  }],
  3: [function (a, k, d) {
    Object.defineProperty(d, "__esModule", {
      value: !0
    });
    d.add = function (a, f) {
      a ? 0 > (0, g.default)(a, f) && a.push(f) : a = [f];
      return a;
    };
    d.call = function (a, f) {
      var c;
      if (a) for (a = a.slice(), c = 0; c < a.length; c++) f ? a[c].apply(null, f) : a[c].call(null);
    };
    d.remove = function (a, f) {
      a && (!a.length || 1 === a.length && a[0] === f ? (a.length = 0, a = null) : (f = (0, g.default)(a, f), 0 <= f && a.splice(f, 1)));
      return a;
    };
    var g = function (a) {
      return a && a.__esModule ? a : {
        default: a
      };
    }(a(4));
  }, {
    4: 4
  }],
  4: [function (a, k, d) {
    Object.defineProperty(d, "__esModule", {
      value: !0
    });
    d.default = void 0;
    d.default = function (a, c) {
      if (a.indexOf) return a.indexOf(c);
      var f;
      for (f = a.length; f-- && a[f] !== c;);
      return f;
    };
  }, {}],
  5: [function (a, k, d) {
    function g() {
      return Date.now ? Date.now() : +new Date();
    }
    function c(a, b) {
      var c,
        e,
        l = [];
      for (c = 0; c < a.length; c++) {
        var h = a[c];
        for (e = 0; e < h.length; e++) l.push({
          event: h[e],
          index: c
        });
      }
      l.sort(f);
      for (c = 0; c < l.length; c++) a = l[c], e = a.event, b[a.index](e.value, e.timestamp || -1);
    }
    function f(a, b) {
      a = a.event;
      b = b.event;
      return (a.timestamp || -1) - (b.timestamp || -1) || (a.gid || 0) - (b.gid || 0);
    }
    function h(a, b, c) {
      v.push([a, b, c]);
      if (!r) {
        for (r = !0; v.length;) {
          var e = v.shift();
          b = e[0];
          c = e[1];
          e = e[2];
          b.value !== c && void 0 !== c && (e = e || g(), b.value = c, b.timestamp = e, b.gid = l = (l + 1) % u, b.story && b.story.push({
            value: c,
            timestamp: e,
            gid: l
          }), (0, n.call)(b.observe, [c, e, b]));
        }
        b = w.slice();
        w = [];
        (0, n.call)(b);
        r = !1;
      }
      return a;
    }
    function e(a, b) {
      a.observe = (0, n.remove)(a.observe, b);
      a.observe || delete a.observe;
      return a;
    }
    function m(a, b) {
      a.observe = (0, n.add)(a.observe, b);
    }
    function b(a, b) {
      return b ? {
        value: a,
        timestamp: b,
        gid: l = (l + 1) % u
      } : a && a.timestamp;
    }
    Object.defineProperty(d, "__esModule", {
      value: !0
    });
    d.debounce = function (a) {
      w.push(a);
    };
    d.eol = function (a, b) {
      return {
        value: a,
        timestamp: b || -1,
        EOL: p
      };
    };
    d.forget = e;
    d.free = function (a) {
      for (var b = 0, c; b < a.length; b++) c = a[b], (0, n.call)(c.free), delete c.observe, delete c.free;
    };
    d.now = g;
    d.observe = function (a, b) {
      m(a, b);
      void 0 !== a.value && b(a.value, a.timestamp, a);
      return a;
    };
    d.poke = function (a) {
      t.value = a || g();
      (0, n.call)(t.observe, [t.value, t.timestamp, t]);
    };
    d.spin = function (a, f, l) {
      function g(c) {
        return function (q, e) {
          w && void 0 === k[c] && w--;
          v < e && (v = e);
          k[c] = q;
          k[u] = v;
          k[u + 1] = c;
          w || ((q = l.apply(null, k)) && q.EOL === p && (q.timestamp || (q.timestamp = v), d()), b(q) ? h(a, q.value, q.timestamp) : void 0 !== q && h(a, q, v));
        };
      }
      function d() {
        for (var a = u, b; a--;) b = f[a], b.free = (0, n.remove)(b.free, d), e(b, E[a]);
      }
      var r,
        u = f.length,
        k = Array(u + 3),
        w = u,
        v = 0,
        E = Array(u),
        z = Array(u);
      k[u + 2] = f.concat([a]);
      a.free = (0, n.add)(a.free, d);
      for (r = 0; r < u; r++) {
        var t = f[r];
        E[r] = g(r);
        t.free = (0, n.add)(t.free, d);
        var F = t.story;
        z[r] = F ? F.slice() : void 0 !== t.value ? [t] : [];
        m(t, E[r]);
      }
      c(z, E);
      return a;
    };
    d.stamped = b;
    d.stick = h;
    d.timer = void 0;
    var n = a(3),
      p = {},
      l = 0,
      u = 9007199254740991,
      v = [],
      w = [],
      r = !1,
      t = h({}, 0, -1);
    d.timer = t;
  }, {
    3: 3
  }],
  6: [function (a, k, d) {
    (function (a) {
      (function () {
        (function (a, f, h) {
          try {
            f(a, h);
          } catch (e) {
            h.OmidVerificationClient = function () {
              this.isSupported = function () {
                return !1;
              };
            };
          }
        })("undefined" === typeof a ? this : a, function (c, f) {
          function h(a, b, c, e) {
            this.guid = a;
            this.method = b;
            this.version = c;
            this.args = e;
          }
          function e(a) {
            this.to = a;
            this.communicationType_ = t.CommunicationType.NONE;
          }
          function d(a, b) {
            "undefined" !== typeof jasmine && jasmine ? a() : "undefined" !== typeof console && console && console.error && b();
          }
          function b(a, b) {
            return a && (a[b] || (a[b] = {}));
          }
          function g(a) {
            return null != a && "undefined" !== typeof a.top && null != a.top;
          }
          function p(a) {
            e.call(this, a);
            this.communicationType_ = t.CommunicationType.DIRECT;
            this.handleExportedMessage = p.prototype.handleExportedMessage.bind(this);
          }
          function l(a, b) {
            b = void 0 === b ? A.omidGlobal : b;
            e.call(this, b);
            var q = this;
            this.communicationType_ = t.CommunicationType.POST_MESSAGE;
            a.addEventListener("message", function (a) {
              if ("object" === typeof a.data) {
                var b = a.data;
                h.isValidSerializedMessage(b) && (b = h.deserialize(b), a.source && q.handleMessage(b, a.source));
              }
            });
          }
          function u(a, b) {
            return b.reduce(function (a, b) {
              return a && a[b];
            }, a);
          }
          function k(a, b, c, e) {
            b = r.makeIterator(b);
            for (var q = b.next(); !q.done; q = b.next()) {
              q = q.value;
              a: {
                var f = a,
                  h = c,
                  d = e;
                if (!(0, M.isCrossOrigin)(q)) try {
                  var g = u(q, h);
                  if (g) {
                    var m = new p(g);
                    break a;
                  }
                } catch (O) {}
                m = d(q) ? new l(f, q) : null;
              }
              if (q = m) return q;
            }
            return null;
          }
          function w(a) {
            (this.communication = a || (0, B.startVerificationServiceCommunication)((0, M.resolveGlobalContext)())) ? this.communication.onMessage = this.handleMessage_.bind(this) : (a = (a = A.omidGlobal.omid3p) && "function" === typeof a.registerSessionObserver && "function" === typeof a.addEventListener ? a : null, a && (this.omid3p = a));
            this.remoteIntervals_ = this.remoteTimeouts_ = 0;
            this.callbackMap_ = {};
            this.imgCache_ = [];
            this.injectionId_ = (a = A.omidGlobal.omidVerificationProperties) ? a.injectionId : void 0;
          }
          var r = r || {};
          r.scope = {};
          r.arrayIteratorImpl = function (a) {
            var b = 0;
            return function () {
              return b < a.length ? {
                done: !1,
                value: a[b++]
              } : {
                done: !0
              };
            };
          };
          r.arrayIterator = function (a) {
            return {
              next: r.arrayIteratorImpl(a)
            };
          };
          r.makeIterator = function (a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            return b ? b.call(a) : r.arrayIterator(a);
          };
          r.arrayFromIterator = function (a) {
            for (var b, q = []; !(b = a.next()).done;) q.push(b.value);
            return q;
          };
          r.arrayFromIterable = function (a) {
            return a instanceof Array ? a : r.arrayFromIterator(r.makeIterator(a));
          };
          r.ASSUME_ES5 = !1;
          r.ASSUME_NO_NATIVE_MAP = !1;
          r.ASSUME_NO_NATIVE_SET = !1;
          r.SIMPLE_FROUND_POLYFILL = !1;
          r.objectCreate = r.ASSUME_ES5 || "function" == typeof Object.create ? Object.create : function (a) {
            function b() {}
            b.prototype = a;
            return new b();
          };
          r.underscoreProtoCanBeSet = function () {
            var a = {
                a: !0
              },
              b = {};
            try {
              return b.__proto__ = a, b.a;
            } catch (D) {}
            return !1;
          };
          r.setPrototypeOf = "function" == typeof Object.setPrototypeOf ? Object.setPrototypeOf : r.underscoreProtoCanBeSet() ? function (a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a;
          } : null;
          r.inherits = function (a, b) {
            a.prototype = r.objectCreate(b.prototype);
            a.prototype.constructor = a;
            if (r.setPrototypeOf) {
              var c = r.setPrototypeOf;
              c(a, b);
            } else for (c in b) if ("prototype" != c) if (Object.defineProperties) {
              var e = Object.getOwnPropertyDescriptor(b, c);
              e && Object.defineProperty(a, c, e);
            } else a[c] = b[c];
            a.superClass_ = b.prototype;
          };
          var t = {
            AdEventType: {
              IMPRESSION: "impression",
              LOADED: "loaded",
              GEOMETRY_CHANGE: "geometryChange",
              SESSION_START: "sessionStart",
              SESSION_ERROR: "sessionError",
              SESSION_FINISH: "sessionFinish",
              MEDIA: "media",
              VIDEO: "video",
              START: "start",
              FIRST_QUARTILE: "firstQuartile",
              MIDPOINT: "midpoint",
              THIRD_QUARTILE: "thirdQuartile",
              COMPLETE: "complete",
              PAUSE: "pause",
              RESUME: "resume",
              BUFFER_START: "bufferStart",
              BUFFER_FINISH: "bufferFinish",
              SKIPPED: "skipped",
              VOLUME_CHANGE: "volumeChange",
              PLAYER_STATE_CHANGE: "playerStateChange",
              AD_USER_INTERACTION: "adUserInteraction",
              STATE_CHANGE: "stateChange"
            },
            MediaEventType: {
              LOADED: "loaded",
              START: "start",
              FIRST_QUARTILE: "firstQuartile",
              MIDPOINT: "midpoint",
              THIRD_QUARTILE: "thirdQuartile",
              COMPLETE: "complete",
              PAUSE: "pause",
              RESUME: "resume",
              BUFFER_START: "bufferStart",
              BUFFER_FINISH: "bufferFinish",
              SKIPPED: "skipped",
              VOLUME_CHANGE: "volumeChange",
              PLAYER_STATE_CHANGE: "playerStateChange",
              AD_USER_INTERACTION: "adUserInteraction"
            },
            ImpressionType: {
              DEFINED_BY_JAVASCRIPT: "definedByJavaScript",
              UNSPECIFIED: "unspecified",
              LOADED: "loaded",
              BEGIN_TO_RENDER: "beginToRender",
              ONE_PIXEL: "onePixel",
              VIEWABLE: "viewable",
              AUDIBLE: "audible",
              OTHER: "other"
            },
            ErrorType: {
              GENERIC: "generic",
              VIDEO: "video",
              MEDIA: "media"
            },
            AdSessionType: {
              NATIVE: "native",
              HTML: "html",
              JAVASCRIPT: "javascript"
            },
            EventOwner: {
              NATIVE: "native",
              JAVASCRIPT: "javascript",
              NONE: "none"
            },
            AccessMode: {
              FULL: "full",
              DOMAIN: "domain",
              LIMITED: "limited"
            },
            AppState: {
              BACKGROUNDED: "backgrounded",
              FOREGROUNDED: "foregrounded"
            },
            Environment: {
              APP: "app",
              WEB: "web"
            },
            InteractionType: {
              CLICK: "click",
              INVITATION_ACCEPT: "invitationAccept"
            },
            CreativeType: {
              DEFINED_BY_JAVASCRIPT: "definedByJavaScript",
              HTML_DISPLAY: "htmlDisplay",
              NATIVE_DISPLAY: "nativeDisplay",
              VIDEO: "video",
              AUDIO: "audio"
            },
            MediaType: {
              DISPLAY: "display",
              VIDEO: "video"
            },
            Reason: {
              NOT_FOUND: "notFound",
              HIDDEN: "hidden",
              BACKGROUNDED: "backgrounded",
              VIEWPORT: "viewport",
              OBSTRUCTED: "obstructed",
              CLIPPED: "clipped",
              UNMEASURABLE: "unmeasurable"
            },
            SupportedFeatures: {
              CONTAINER: "clid",
              VIDEO: "vlid"
            },
            VideoPosition: {
              PREROLL: "preroll",
              MIDROLL: "midroll",
              POSTROLL: "postroll",
              STANDALONE: "standalone"
            },
            VideoPlayerState: {
              MINIMIZED: "minimized",
              COLLAPSED: "collapsed",
              NORMAL: "normal",
              EXPANDED: "expanded",
              FULLSCREEN: "fullscreen"
            },
            NativeViewKeys: {
              X: "x",
              LEFT: "left",
              Y: "y",
              TOP: "top",
              WIDTH: "width",
              HEIGHT: "height",
              AD_SESSION_ID: "adSessionId",
              IS_FRIENDLY_OBSTRUCTION_FOR: "isFriendlyObstructionFor",
              CLIPS_TO_BOUNDS: "clipsToBounds",
              CHILD_VIEWS: "childViews",
              END_X: "endX",
              END_Y: "endY",
              OBSTRUCTIONS: "obstructions",
              OBSTRUCTION_CLASS: "obstructionClass",
              OBSTRUCTION_PURPOSE: "obstructionPurpose",
              OBSTRUCTION_REASON: "obstructionReason",
              PIXELS: "pixels"
            },
            MeasurementStateChangeSource: {
              CONTAINER: "container",
              CREATIVE: "creative"
            },
            ElementMarkup: {
              OMID_ELEMENT_CLASS_NAME: "omid-element"
            },
            CommunicationType: {
              NONE: "NONE",
              DIRECT: "DIRECT",
              POST_MESSAGE: "POST_MESSAGE"
            },
            OmidImplementer: {
              OMSDK: "omsdk"
            }
          };
          h.isValidSerializedMessage = function (a) {
            return !!a && void 0 !== a.omid_message_guid && void 0 !== a.omid_message_method && void 0 !== a.omid_message_version && "string" === typeof a.omid_message_guid && "string" === typeof a.omid_message_method && "string" === typeof a.omid_message_version && (void 0 === a.omid_message_args || void 0 !== a.omid_message_args);
          };
          h.deserialize = function (a) {
            return new h(a.omid_message_guid, a.omid_message_method, a.omid_message_version, a.omid_message_args);
          };
          h.prototype.serialize = function () {
            var a = {};
            a = (a.omid_message_guid = this.guid, a.omid_message_method = this.method, a.omid_message_version = this.version, a);
            void 0 !== this.args && (a.omid_message_args = this.args);
            return a;
          };
          e.prototype.sendMessage = function () {};
          e.prototype.handleMessage = function (a, b) {
            if (this.onMessage) this.onMessage(a, b);
          };
          e.prototype.serialize = function (a) {
            return JSON.stringify(a);
          };
          e.prototype.deserialize = function (a) {
            return JSON.parse(a);
          };
          e.prototype.isDirectCommunication = function () {
            return this.communicationType_ === t.CommunicationType.DIRECT;
          };
          e.prototype.isCrossOrigin = function () {};
          var E = {
              error: function (a) {
                for (var b = [], c = 0; c < arguments.length; ++c) b[c - 0] = arguments[c];
                d(function () {
                  throw new (Function.prototype.bind.apply(Error, [null, "Could not complete the test successfully - "].concat(r.arrayFromIterable(b))))();
                }, function () {
                  return console.error.apply(console, r.arrayFromIterable(b));
                });
              },
              debug: function (a) {
                for (var b = [], c = 0; c < arguments.length; ++c) b[c - 0] = arguments[c];
                d(function () {}, function () {
                  return console.error.apply(console, r.arrayFromIterable(b));
                });
              }
            },
            z = {
              assertTruthyString: function (a, b) {
                if (!b) throw Error("Value for " + a + " is undefined, null or blank.");
                if ("string" !== typeof b && !(b instanceof String)) throw Error("Value for " + a + " is not a string.");
                if ("" === b.trim()) throw Error("Value for " + a + " is empty string.");
              },
              assertNotNullObject: function (a, b) {
                if (null == b) throw Error("Value for " + a + " is undefined or null");
              },
              assertNumber: function (a, b) {
                if (null == b) throw Error(a + " must not be null or undefined.");
                if ("number" !== typeof b || isNaN(b)) throw Error("Value for " + a + " is not a number");
              },
              assertNumberBetween: function (a, b, c, e) {
                (0, z.assertNumber)(a, b);
                if (b < c || b > e) throw Error("Value for " + a + " is outside the range [" + c + "," + e + "]");
              },
              assertFunction: function (a, b) {
                if (!b) throw Error(a + " must not be truthy.");
              },
              assertPositiveNumber: function (a, b) {
                (0, z.assertNumber)(a, b);
                if (0 > b) throw Error(a + " must be a positive number.");
              }
            },
            F = function (a) {
              return /\d+\.\d+\.\d+(-.*)?/.test(a);
            },
            J = function (a, b) {
              a = a.split("-")[0].split(".");
              b = b.split("-")[0].split(".");
              for (var c = 0; 3 > c; c++) {
                var e = parseInt(a[c], 10),
                  f = parseInt(b[c], 10);
                if (e > f) break;else if (e < f) return !1;
              }
              return !0;
            },
            K = function (a, b) {
              return (0, F)(a) && (0, J)(a, "1.0.3") ? b : JSON.stringify(b);
            },
            x = function (a, b) {
              return (0, F)(a) && (0, J)(a, "1.0.3") ? b ? b : [] : b && "string" === typeof b ? JSON.parse(b) : [];
            },
            N = function () {
              return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a) {
                var b = 16 * Math.random() | 0;
                return a = "y" === a ? (b & 3 | 8).toString(16) : b.toString(16);
              });
            },
            A = {},
            S = eval("this");
          A.omidGlobal = function () {
            if ("undefined" !== typeof c && c) return c;
            if ("undefined" !== typeof a && a) return a;
            if ("undefined" !== typeof window && window) return window;
            if ("undefined" !== typeof S && S) return S;
            throw Error("Could not determine global object context.");
          }();
          var M = {
            isCrossOrigin: function (a) {
              if (a === A.omidGlobal) return !1;
              try {
                if ("undefined" === typeof a.location.hostname) return !0;
              } catch (R) {
                return !0;
              }
              return !1;
            },
            resolveGlobalContext: function (a) {
              "undefined" === typeof a && "undefined" !== typeof window && window && (a = window);
              return g(a) ? a : A.omidGlobal;
            },
            resolveTopWindowContext: function (a) {
              return g(a) ? a.top : A.omidGlobal;
            },
            evaluatePageUrl: function (a) {
              if (!g(a)) return null;
              try {
                var b = a.top;
                return (0, M.isCrossOrigin)(b) ? null : b.location.href;
              } catch (D) {
                return null;
              }
            }
          };
          r.inherits(p, e);
          p.prototype.sendMessage = function (a, b) {
            b = void 0 === b ? this.to : b;
            if (!b) throw Error("Message destination must be defined at construction time or when sending the message.");
            b.handleExportedMessage(a.serialize(), this);
          };
          p.prototype.handleExportedMessage = function (a, b) {
            h.isValidSerializedMessage(a) && this.handleMessage(h.deserialize(a), b);
          };
          p.prototype.isCrossOrigin = function () {
            return !1;
          };
          r.inherits(l, e);
          l.isCompatibleContext = function (a) {
            return !!(a && a.addEventListener && a.postMessage);
          };
          l.prototype.sendMessage = function (a, b) {
            b = void 0 === b ? this.to : b;
            if (!b) throw Error("Message destination must be defined at construction time or when sending the message.");
            b.postMessage(a.serialize(), "*");
          };
          l.prototype.isCrossOrigin = function () {
            return this.to ? (0, M.isCrossOrigin)(this.to) : !0;
          };
          var y = {
              OMID_PRESENT_FRAME_NAME: "omid_v1_present",
              isOmidPresent: function (a) {
                try {
                  return a.frames ? !!a.frames[y.OMID_PRESENT_FRAME_NAME] : !1;
                } catch (R) {
                  return !1;
                }
              },
              declareOmidPresence: function (a) {
                a.frames && a.document && (y.OMID_PRESENT_FRAME_NAME in a.frames || (null == a.document.body && y.isMutationObserverAvailable_(a) ? y.registerMutationObserver_(a) : a.document.body ? y.appendPresenceIframe_(a) : a.document.write('<iframe style="display:none" id="' + (y.OMID_PRESENT_FRAME_NAME + '" name="') + (y.OMID_PRESENT_FRAME_NAME + '"></iframe>'))));
              },
              appendPresenceIframe_: function (a) {
                var b = a.document.createElement("iframe");
                b.id = y.OMID_PRESENT_FRAME_NAME;
                b.name = y.OMID_PRESENT_FRAME_NAME;
                b.style.display = "none";
                a.document.body.appendChild(b);
              },
              isMutationObserverAvailable_: function (a) {
                return "MutationObserver" in a;
              },
              registerMutationObserver_: function (a) {
                var b = new MutationObserver(function (c) {
                  c.forEach(function (c) {
                    "BODY" === c.addedNodes[0].nodeName && (y.appendPresenceIframe_(a), b.disconnect());
                  });
                });
                b.observe(a.document.documentElement, {
                  childList: !0
                });
              }
            },
            B = {},
            G = ["omid", "v1_SessionServiceCommunication"],
            Q = ["omid", "v1_VerificationServiceCommunication"],
            P = ["omidVerificationProperties", "serviceWindow"];
          B.startSessionServiceCommunication = function (a, b, c) {
            c = void 0 === c ? y.isOmidPresent : c;
            var e = [a, (0, M.resolveTopWindowContext)(a)];
            b && e.unshift(b);
            return k(a, e, G, c);
          };
          B.startVerificationServiceCommunication = function (a, b) {
            b = void 0 === b ? y.isOmidPresent : b;
            var c = [],
              e = u(a, P);
            e && c.push(e);
            c.push((0, M.resolveTopWindowContext)(a));
            return k(a, c, Q, b);
          };
          w.prototype.isSupported = function () {
            return !(!this.communication && !this.omid3p);
          };
          w.prototype.registerSessionObserver = function (a, b) {
            (0, z.assertFunction)("functionToExecute", a);
            this.omid3p ? this.omid3p.registerSessionObserver(a, b, this.injectionId_) : this.sendMessage_("addSessionListener", a, b, this.injectionId_);
          };
          w.prototype.addEventListener = function (a, b) {
            (0, z.assertTruthyString)("eventType", a);
            (0, z.assertFunction)("functionToExecute", b);
            this.omid3p ? this.omid3p.addEventListener(a, b) : this.sendMessage_("addEventListener", b, a);
          };
          w.prototype.sendUrl = function (a, b, c) {
            (0, z.assertTruthyString)("url", a);
            A.omidGlobal.document && A.omidGlobal.document.createElement ? this.sendUrlWithImg_(a, b, c) : this.sendMessage_("sendUrl", function (a) {
              a && b ? b() : !a && c && c();
            }, a);
          };
          w.prototype.sendUrlWithImg_ = function (a, b, c) {
            function e(a) {
              var b = f.imgCache_.indexOf(l);
              0 <= b && f.imgCache_.splice(b, 1);
              a && a();
            }
            var f = this,
              l = A.omidGlobal.document.createElement("img");
            this.imgCache_.push(l);
            l.addEventListener("load", e.bind(this, b));
            l.addEventListener("error", e.bind(this, c));
            l.src = a;
          };
          w.prototype.injectJavaScriptResource = function (a, b, c) {
            var e = this;
            (0, z.assertTruthyString)("url", a);
            A.omidGlobal.document ? this.injectJavascriptResourceUrlInDom_(a, b, c) : this.sendMessage_("injectJavaScriptResource", function (f, l) {
              f ? (e.evaluateJavaScript_(l, a), b()) : (E.error("Service failed to load JavaScript resource."), c());
            }, a);
          };
          w.prototype.injectJavascriptResourceUrlInDom_ = function (a, b, c) {
            var e = A.omidGlobal.document,
              f = e.body;
            e = e.createElement("script");
            e.onload = b;
            e.onerror = c;
            e.src = a;
            e.type = "application/javascript";
            f.appendChild(e);
          };
          w.prototype.evaluateJavaScript_ = function (a, b) {
            try {
              eval(a);
            } catch (D) {
              E.error('Error evaluating the JavaScript resource from "' + b + '".');
            }
          };
          w.prototype.setTimeout = function (a, b) {
            (0, z.assertFunction)("functionToExecute", a);
            (0, z.assertPositiveNumber)("timeInMillis", b);
            if (this.hasTimeoutMethods_()) return A.omidGlobal.setTimeout(a, b);
            var c = this.remoteTimeouts_++;
            this.sendMessage_("setTimeout", a, c, b);
            return c;
          };
          w.prototype.clearTimeout = function (a) {
            (0, z.assertPositiveNumber)("timeoutId", a);
            this.hasTimeoutMethods_() ? A.omidGlobal.clearTimeout(a) : this.sendOneWayMessage_("clearTimeout", a);
          };
          w.prototype.setInterval = function (a, b) {
            (0, z.assertFunction)("functionToExecute", a);
            (0, z.assertPositiveNumber)("timeInMillis", b);
            if (this.hasIntervalMethods_()) return A.omidGlobal.setInterval(a, b);
            var c = this.remoteIntervals_++;
            this.sendMessage_("setInterval", a, c, b);
            return c;
          };
          w.prototype.clearInterval = function (a) {
            (0, z.assertPositiveNumber)("intervalId", a);
            this.hasIntervalMethods_() ? A.omidGlobal.clearInterval(a) : this.sendOneWayMessage_("clearInterval", a);
          };
          w.prototype.hasTimeoutMethods_ = function () {
            return "function" === typeof A.omidGlobal.setTimeout && "function" === typeof A.omidGlobal.clearTimeout;
          };
          w.prototype.hasIntervalMethods_ = function () {
            return "function" === typeof A.omidGlobal.setInterval && "function" === typeof A.omidGlobal.clearInterval;
          };
          w.prototype.handleMessage_ = function (a) {
            var b = a.method,
              c = a.guid;
            a = a.args;
            if ("response" === b && this.callbackMap_[c]) {
              var e = (0, x)("1.3.15-dev", a);
              this.callbackMap_[c].apply(this, e);
            }
            "error" === b && window.console && E.error(a);
          };
          w.prototype.sendOneWayMessage_ = function (a, b) {
            for (var c = [], e = 1; e < arguments.length; ++e) c[e - 1] = arguments[e];
            this.sendMessage_.apply(this, [a, null].concat(r.arrayFromIterable(c)));
          };
          w.prototype.sendMessage_ = function (a, b, c) {
            for (var e = [], f = 2; f < arguments.length; ++f) e[f - 2] = arguments[f];
            this.communication && (f = (0, N)(), b && (this.callbackMap_[f] = b), e = new h(f, "VerificationService." + a, "1.3.15-dev", (0, K)("1.3.15-dev", e)), this.communication.sendMessage(e));
          };
          (0, function (a, c, e) {
            if (e = void 0 === e ? "undefined" === typeof f ? null : f : e) a = a.split("."), a.slice(0, a.length - 1).reduce(b, e)[a[a.length - 1]] = c;
          })("OmidVerificationClient", w);
        }, "undefined" === typeof d ? d = {} : d);
      }).call(this);
    }).call(this, "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {});
  }, {}],
  7: [function (a, k, d) {
    function g() {
      f.stick(b, !e[n.property]);
    }
    function c(a) {
      try {
        a = a || m.getState();
      } catch (l) {}
      f.stick(b, "hidden" !== a);
    }
    var f = a(5);
    d = a(31);
    var h = a(43),
      e = a(53).document,
      m = a(41)().mraid,
      b = {
        story: []
      };
    k.exports = b;
    var n = h("hidden", e);
    d(e, n.prefix + "visibilitychange", g, !1);
    m && d(m, "stateChange", c);
    g();
  }, {
    31: 31,
    41: 41,
    43: 43,
    5: 5,
    53: 53
  }],
  8: [function (a, k, d) {
    function g(a, b) {
      void 0 === a.value && (a.value = b);
      return a;
    }
    var c = a(5),
      f = a(35),
      h = a(2).default,
      e = a(11).inViewMouse,
      m = a(13).time,
      b = a(13).count,
      n = a(14),
      p = a(12).maxPercent,
      l = a(12).percent,
      u = a(12).inView,
      v = a(15),
      w = a(9),
      r = a(10).calcIsLarge,
      t = a(10).calcWasLarge;
    k.exports = function (a) {
      var d = a.info,
        k = [d.PublisherVisibilityArea || 50],
        E = [d.PublisherVisibilityTime || 0];
      d = !d.IsMobile || !1;
      var K = a.$active,
        x = a.$boundsArea,
        N = a.$viewArea,
        A = a.$mouse,
        S = c.timer;
      E[0] *= 1E3;
      a.visibilityPercent = {
        value: 0
      };
      a.isLarge = {
        value: !1
      };
      h(a, {
        wasActive: [K, v],
        percent: [K, x, N, l],
        isLarge: [x, r(d)],
        wasLarge: ["isLarge", t],
        inview: ["percent", "isLarge", u(k)],
        visibilityPercent: ["visibilityPercent", "percent", p],
        visibilityTime: ["inview", S, n(E)],
        impress: ["visibilityTime", w],
        mouse: [A, "inview", "impress", e],
        mouseTime: ["mouse", S, m(1E3)],
        mouseCount: ["mouse", S, b(1E3)]
      });
      f.add(c.poke);
      g(a.percent, 0);
      g(a.inview, !1);
      g(a.impress, !1);
      g(a.mouse, !1);
      g(a.mouseTime, 0);
      g(a.mouseCount, 0);
      g(a.visibilityTime, [0]);
      g(a.wasActive, !1);
      g(a.wasLarge, !1);
      return a;
    };
  }, {
    10: 10,
    11: 11,
    12: 12,
    13: 13,
    14: 14,
    15: 15,
    2: 2,
    35: 35,
    5: 5,
    9: 9
  }],
  9: [function (a, k, d) {
    var g = a(5);
    k.exports = function (a) {
      if (a && a[0]) return g.eol(!0);
    };
  }, {
    5: 5
  }],
  10: [function (a, k, d) {
    var g = a(5);
    k.exports = {
      calcIsLarge: function (a) {
        return function (c) {
          return a && 242500 <= c;
        };
      },
      calcWasLarge: function (a) {
        if (a) return g.eol(!0);
      }
    };
  }, {
    5: 5
  }],
  11: [function (a, k, d) {
    k.exports = {
      inViewMouse: function (a, c, f, h, e) {
        return a && c && f && 1 != e;
      }
    };
  }, {}],
  12: [function (a, k, d) {
    var g = a(5);
    k.exports = {
      maxPercent: function (a, f) {
        a = Math.max(a, Math.round(f));
        100 < a && (a = 100);
        return 100 === a ? g.eol(a) : a;
      },
      percent: function (a, f, h, e, d) {
        if (1 != d) return a && f && 100 * h / f || 0;
      },
      inView: function (a) {
        var c;
        return function (f, e) {
          c = [(e ? 30 : a[0]) <= f];
          for (e = 1; e < a.length; e++) c[e] = f >= a[e];
          return c;
        };
      }
    };
  }, {
    5: 5
  }],
  13: [function (a, k, d) {
    k.exports = {
      time: function (a, c) {
        var f = 0,
          h = 0;
        return function (e, d, b, g) {
          d = g ? d : b;
          b = f ? d - f : 0;
          f = e ? f || d : 0;
          c ? !h && b < a && (b = 0) : b < a && (b = 0);
          c && !h && b < a && (b = 0);
          !e && b && (h += b, b = 0);
          return h + b;
        };
      },
      count: function (a) {
        var c = 0,
          f = 0;
        return function (d, e, g, b) {
          e = b ? e : g;
          g = c ? e - c : 0;
          c = d ? c || e : 0;
          g < a && (g = 0);
          !d && g && (f += 1, g = 0);
          return f + (g ? 1 : 0);
        };
      }
    };
  }, {}],
  14: [function (a, k, d) {
    var g = a(13).time;
    k.exports = function (a) {
      for (var c = [], d = 0; d < a.length; d++) c.push(g(a[d], !0));
      return function (a, f, b, d) {
        for (var e = [], l = 0; l < c.length; l++) e.push(c[l](a[l], f, b, d));
        return e;
      };
    };
  }, {
    13: 13
  }],
  15: [function (a, k, d) {
    var g = a(5);
    k.exports = function (a) {
      if (a) return g.eol(!0);
    };
  }, {
    5: 5
  }],
  16: [function (a, k, d) {
    function g(a) {
      var c = n(a);
      a = {};
      if (!c.bounds) return c;
      var f = b(c.bounds);
      c = b(c.view);
      var d = p.view,
        l = p.bounds;
      a.client = p.client;
      e(f, l[0], l[1]);
      e(c, d[0], d[1]);
      m(c, d);
      a.bounds = f;
      a.view = c;
      return a;
    }
    function c(a) {
      var b = a.pop();
      a = b.intersectionRect;
      var c = b.boundingClientRect;
      b = b.rootBounds;
      p.client = b ? h(b) : [0, 0, f.outerWidth, f.outerHeight];
      p.bounds = h(c);
      p.view = h(a);
    }
    var f = a(41)();
    d = a(37);
    var h = d.fromObject,
      e = d.moveby,
      m = d.overlap,
      b = d.copy;
    d = a(19);
    a = a(17);
    var n = d ? d : a,
      p = {};
    (d = (a = f.context) && a.observeIntersection) ? (c([a.initialIntersection]), d.call(a, c), k.exports = g) : k.exports = null;
  }, {
    17: 17,
    19: 19,
    37: 37,
    41: 41
  }],
  17: [function (a, k, d) {
    d = a(37);
    var g = a(44),
      c = a(45),
      f = g.size,
      h = d.moveby,
      e = d.overlap,
      m = d.copy;
    k.exports = function (a) {
      for (var b, d, l, g; a;) b = a.ownerDocument, b = b.defaultView || b.parentWindow, d = f(b), a = c(a), l ? (h(l, a[0], a[1]), h(g, a[0], a[1]), e(g, d)) : (l = a, g = e(m(a), d)), a = b.frameElement;
      return {
        client: d,
        bounds: l,
        view: g
      };
    };
  }, {
    37: 37,
    44: 44,
    45: 45
  }],
  18: [function (a, k, d) {
    function g(a) {
      var e = a.ownerDocument.defaultView;
      var d = f(a);
      a = d.bounds;
      d = d.view;
      var b = e.mozInnerScreenX - e.screenX,
        g = e.mozInnerScreenY - e.screenY;
      c.moveby(a, b, g);
      c.moveby(d, b, g);
      e = [0, 0, e.outerWidth, e.outerHeight];
      d = c.overlap(c.copy(e), d);
      return {
        client: e,
        bounds: a,
        view: d
      };
    }
    var c = a(37),
      f = a(25);
    d = a(30);
    k.exports = !d && a(53).mozInnerScreenX ? g : null;
  }, {
    25: 25,
    30: 30,
    37: 37,
    53: 53
  }],
  19: [function (a, k, d) {
    function g(a) {
      var c = f(a);
      c || (c = {
        element: a
      }, n.push(c), l.observe(a));
      a = {};
      c.client && (a.client = b(c.client), a.bounds = b(c.bounds), a.view = b(c.view));
      return a;
    }
    function c(a) {
      for (var c = 0, d = a.length, l, g, n, p; c < d; c++) l = a[c].target, g = a[c].intersectionRect, n = a[c].boundingClientRect, p = a[c].rootBounds, l = f(l), l.client = p ? e(p) : [0, 0, h.outerWidth, h.outerHeight], l.bounds = e(n), l.view = e(g), g = m(l.view), n = m(l.bounds), g > n && (l.view = b(l.bounds));
    }
    function f(a) {
      for (var b, c = 0, e = n.length; c < e; c++) if (n[c].element == a) {
        b = n[c];
        break;
      }
      return b;
    }
    var h = a(53),
      e = a(37).fromObject,
      m = a(37).area,
      b = a(37).copy;
    d = [];
    var n = [],
      p = !h.mozInnerScreenX && h.IntersectionObserver;
    if (p) {
      for (a = 0; 100 >= a; a++) d.push(a / 100);
      var l = new p(c, {
        threshold: d
      });
    }
    k.exports = l ? g : null;
  }, {
    37: 37,
    53: 53
  }],
  20: [function (a, k, d) {
    function g() {
      return !0;
    }
    var c = a(30),
      f = [[7, a(21), function () {
        var a = f[0][1];
        return f[1][1] && a && a.isAppnexus ? !1 : !0;
      }], [10, a(22), g], [8, a(26), g], [1, a(19), g], [0, a(17), function () {
        return c;
      }], [6, a(24), g], [2, a(18), g], [9, a(16), g], [5, a(23), g]],
      h;
    for (a = 0; a < f.length; a++) if (h = f[a][2]() && f[a][1]) {
      h.type = f[a][0];
      break;
    }
    k.exports = h || null;
  }, {
    16: 16,
    17: 17,
    18: 18,
    19: 19,
    21: 21,
    22: 22,
    23: 23,
    24: 24,
    26: 26,
    30: 30
  }],
  21: [function (a, k, d) {
    function g(a) {
      var c = e(a);
      if (!c.bounds) return c;
      a = c.client;
      var d = c.bounds;
      c = h.copy(c.view);
      var g = n.value;
      if (b.getScreenSize && b.getCurrentPosition) {
        var m = b.getScreenSize();
        var p = b.getCurrentPosition();
        b.isViewable && b.getMaxSize && p && 0 === p.width + p.height && b.isViewable() && (p = b.getMaxSize(), p.x = 0, p.y = 0);
        var k = p;
        k && f(k.x) && f(k.y) && (h.move(d, p.x, p.y), h.move(c, p.x, p.y), p = h.xy(p.x, p.y, p.width, p.height), h.overlap(c, p));
        m && f(m.width) && f(m.height) && (a = h.resize(h(), m.width, m.height), h.overlap(c, a));
      } else b.getViewablePercentage && (m = parseInt(b.getViewablePercentage(), 10) / 100 || 1, h.scale(c, m, m));
      g ? h.overlap(c, h.move(h.xy(g.x, g.y, g.width, g.height), c[0], c[1])) : b.isViewable() || (c = h());
      return {
        client: a,
        bounds: d,
        view: c
      };
    }
    function c(a, b) {
      0 === a ? m.stick(n, {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      }) : m.stick(n, b);
    }
    function f(a) {
      return "number" === typeof a;
    }
    var h = a(37),
      e = a(17);
    d = a(41)();
    var m = a(5),
      b = d.mraid,
      n = {};
    if (b && b.addEventListener && !b._adfPoly) {
      try {
        b.addEventListener("exposureChange", c), b.enable && b.enable(), g.isAppnexus = b.getVendor && "appnexus" === b.getVendor();
      } catch (p) {}
      k.exports = g;
    } else k.exports = null;
  }, {
    17: 17,
    37: 37,
    41: 41,
    5: 5
  }],
  22: [function (a, k, d) {
    function g(a) {
      var c = m(a);
      if (!c.bounds) return {};
      if (!b || !n) return c;
      a = c.client;
      var e = c.bounds;
      c = c.view;
      var d = n.geometry || {
        x: 0,
        y: 0
      };
      var g = n.onScreenGeometry || {
        x: 0,
        y: 0,
        width: e[2],
        height: e[3]
      };
      a = f(0, 0, b.width || a[2], b.height || a[3]);
      f.move(e, d.x, d.y);
      g = 0 == n.percentageInView ? [0, 0, 0, 0] : f.xy(g.x, g.y, g.width, g.height);
      c = f.moveby(f.copy(c), d.x, d.y);
      f.overlap(c, g);
      return {
        client: a,
        bounds: e,
        view: c
      };
    }
    function c(a) {
      var c = a.data;
      c && c.adView && c.viewport && (n = c.adView, b = c.viewport, c = c.context, "sessionStart" === a.type && c && h("omid", (c.app || {}).appId + " " + (c.omidJsInfo || c.omidNativeInfo || {}).partnerName, .1));
    }
    var f = a(37);
    d = a(41)();
    var h = a(36),
      e = a(53),
      m = a(17);
    d.omid3p && (e.omid3p = d.omid3p);
    var b, n;
    (a = a(1)) && !a.vastVerification && a.isSupported() ? (a.registerSessionObserver(c, "adform.com-omid"), a.addEventListener("geometryChange", c), a.addEventListener("impression", c), k.exports = g) : k.exports = null;
  }, {
    1: 1,
    17: 17,
    36: 36,
    37: 37,
    41: 41,
    53: 53
  }],
  23: [function (a, k, d) {
    function g(a) {
      var b;
      x || c();
      var e = (b = x.result) && Date.now() - b.time > F;
      if (!b || e) b = {
        rect: l()
      };
      b = b.rect;
      a = u(a);
      l.move(b, 0, 0);
      l.overlap(a.view, b);
      return a;
    }
    function c() {
      var a = t.body,
        b = t.documentElement || a;
      a = b.scrollWidth || v.innerWidth;
      var c = b.scrollHeight || v.innerHeight;
      x = {
        x: [],
        y: []
      };
      var d = x.scanners = {
        x: [{
          element: p(t, "x"),
          direction: "left"
        }, {
          element: p(t, "x"),
          direction: "left"
        }],
        y: [{
          element: p(t, "y"),
          direction: "top"
        }, {
          element: p(t, "y"),
          direction: "top"
        }]
      };
      n(v, e(d, a, c, f()));
      w(r, "unload", function () {
        for (var a = 0, c, e = E.length; a < e; a++) c = E[a], c.onload = null, c.parentNode.removeChild(b);
      });
    }
    function f() {
      return function () {
        var a = Math.min.apply(null, x.x) | 0,
          b = Math.min.apply(null, x.y) | 0,
          c = Math.max.apply(null, x.x) | 0,
          e = Math.max.apply(null, x.y) | 0;
        c = c - a || 0;
        e = e - b || 0;
        a = {
          rect: l.xy(a, b, c && c + 2 || 0, e && e + 2 || 0),
          time: Date.now()
        };
        x.x = [];
        x.y = [];
        x.result = a;
      };
    }
    function h(a, b, c, e, d) {
      b = (b - a) / c | 0;
      e = e || [];
      a += b;
      for (var f = 1; f <= c; f++, a += b) e.push(a);
      d && e.push.apply(e, d);
      return e;
    }
    function e(a, b, c, e) {
      var d = 0,
        f = 1,
        g = a.x,
        l = a.y,
        n = b / 2 | 0,
        m = c / 2 | 0;
      g[0].points = h(0, n, z, [0, 0]);
      g[1].points = h(n, b, z, null, [b - 2, b - 2]);
      l[0].points = h(0, m, z, [0, 0]);
      l[1].points = h(m, c, z, null, [c - 2, c - 2]);
      var p = g[0].points.length - 1;
      return function () {
        var b;
        for (b in a) {
          var c = a[b];
          for (var g = 0; g < c.length; g++) {
            var h = c[g];
            var I = h.points[d];
            h.element.style[h.direction] = I + "px";
          }
        }
        d === p ? f = 0 : 0 === d && (e(), f = 1);
        f ? d++ : d--;
      };
    }
    function m(a, b, c) {
      var e = this.frameElement;
      a = {
        scanner: e,
        direction: a
      };
      a.value = e[b];
      c(a);
    }
    function b() {
      return function (a) {
        var b = Date.now(),
          c = a.direction,
          e = "x" == a.direction ? "y" : "x";
        x[c].push(a.value);
        x["last" + c] = b;
        if (!x["last" + e] || 100 < b - x["last" + e]) for (b = x.scanners[e], c = 0; c < b.length; c++) b[c].element.style[J[e]] = a.value + "px";
      };
    }
    function n(a, b, c) {
      a.requestAnimationFrame(function y() {
        b.apply(a, c);
        a.requestAnimationFrame(y);
      });
    }
    function p(a, c) {
      var e = a.createElement("iframe"),
        d = e.style;
      d.top = 0;
      d.left = 0;
      d.position = "absolute";
      d.width = "1px";
      d.height = "1px";
      d.border = "1px solid transparent";
      d.background = "transparent";
      e.onload = function () {
        n(this.contentWindow, m, [c, K[c], b()]);
      };
      a.body.appendChild(e);
      E.push(e);
      return e;
    }
    var l = a(37),
      u = a(17),
      v = a(41)();
    d = a(32);
    var w = a(31),
      r = a(53),
      t = v.document,
      E = [];
    k.exports = v.requestAnimationFrame && d.isSafari ? g : null;
    var z = 6,
      F = 800,
      J = {
        x: "top",
        y: "left"
      },
      K = {
        x: "offsetLeft",
        y: "offsetTop"
      },
      x;
  }, {
    17: 17,
    31: 31,
    32: 32,
    37: 37,
    41: 41,
    53: 53
  }],
  24: [function (a, k, d) {
    function g(a) {
      var e = f(a);
      a = e.bounds;
      e = e.view;
      var b = h.geom();
      if (b.par) {
        var d = c.fromSfObject(b.par);
        var g = c.fromSfObject(b.self);
        b = g[0] - d[0];
        g = g[1] - d[1];
        c.moveby(a, b, g);
        c.moveby(e, b, g);
        d = c.moveby(d, -d[0], -d[1]);
        e = c.overlap(c.copy(d), e);
      } else d = c.fromSfObject(b.win), b = b.self, b = c(0, 0, b.w * b.xiv, b.h * b.yiv), c.moveby(a, -a[0], -a[1]), c.moveby(e, -e[0], -e[1]), d = c.moveby(d, -d[0], -d[1]), e = c.overlap(b, e);
      return {
        client: d,
        bounds: a,
        view: e
      };
    }
    var c = a(37),
      f = a(25);
    d = a(30);
    a = a(41)();
    var h;
    k.exports = !d && (h = a.$sf) && (h = h.ext) ? g : null;
  }, {
    25: 25,
    30: 30,
    37: 37,
    41: 41
  }],
  25: [function (a, k, d) {
    var g = a(37),
      c = a(44),
      f = a(45);
    k.exports = function (a) {
      var e = a.ownerDocument;
      e = e.defaultView || e.parentWindow;
      a = f(a);
      e = c.size(e);
      var d = g.overlap(g.copy(e), a);
      return {
        client: e,
        bounds: a,
        view: d
      };
    };
  }, {
    37: 37,
    44: 44,
    45: 45
  }],
  26: [function (a, k, d) {
    function g(a) {
      if (!m) for (var b in e) if (/^adObject.+/i.test(b)) {
        m = e[b].inscreen;
        break;
      }
      var d = h(a);
      if (!d.bounds) return d;
      a = d.client;
      b = d.bounds;
      d = d.view;
      if (m.getCurrentPosition && e.layout && e.layout.viewport) {
        var f = m.getCurrentPosition();
        var g = e.layout.viewport();
        f && (c.move(b, f.x, f.y), c.move(d, f.x, f.y), f = c.xy(f.x, f.y, f.width, f.height), c.overlap(d, f));
        g && (a = c.resize(c(), g.width, g.height), c.overlap(d, a));
      } else m.getCurrentPosition && m.getCurrentPosition().sizePct && (g = parseInt(m.getCurrentPosition().sizePct, 10) / 100 || 1, c.scale(d, g, g));
      return {
        client: a,
        bounds: b,
        view: d
      };
    }
    var c = a(37);
    d = a(53);
    var f = a(19);
    a = a(17);
    var h = f ? f : a,
      e = d.wisp;
    a = e && e.sdk && e.sdk.platform;
    var m;
    k.exports = !a || "ios" != a && "android" != a ? null : g;
  }, {
    17: 17,
    19: 19,
    37: 37,
    53: 53
  }],
  27: [function (a, k, d) {
    function g(a, b) {
      return a.getElementById(b);
    }
    function c(a, b, c) {
      var d = (e.inDapMgrIf || e.inDapIF || e.inFIF) && e.frameElement;
      return p(d && 10 > d.offsetHeight ? d : a, b.width, b.height, c);
    }
    function f(a, e, d) {
      n(m(c, e, a, 20), 1E4, b(m(h, a, e, d || [100, 500, 1E3, 2E3, 5E3]), m(l, "fluoroscope", "Placement not found " + a.width + "x" + a.height, 0)));
    }
    function h(a, b, c, e) {
      var d = c.shift();
      a.callback(null, e);
      d && setTimeout(m(f, a, b, c), d);
    }
    var e = a(53);
    d = a(34);
    var m = d.compose,
      b = d.resolve,
      n = a(42),
      p = a(33),
      l = a(36);
    k.exports = function (a, c) {
      var d = a.id,
        h = a.DOMNode;
      a = {
        width: a.width,
        height: a.height,
        callback: c
      };
      h ? f(a, h) : n(m(g, e.document, d), b(m(f, a), m(l, "fluoroscope", "Container not found", 0)));
    };
  }, {
    33: 33,
    34: 34,
    36: 36,
    42: 42,
    53: 53
  }],
  28: [function (a, k, d) {
    function g() {
      v.apply(this, arguments);
      c(arguments);
    }
    function c(a) {
      for (var b = 0; b < a.length; b++) if ("function" === typeof a[b]) a[b](d);
    }
    k = a(53);
    var f = a(36),
      h = k.JSON && !!a(20),
      e = k._fscope;
    if (!(!h || e && e._active)) {
      var m = a(47),
        b = a(49),
        n = a(8),
        p = a(27),
        l = a(5);
      h = a(35);
      var u = a(48),
        v = Array.prototype.push;
      d.register = function (a) {
        var c = m.get(a.AdSlotId, "ppas"),
          e = (a.UnloadHandlerUrl || "").split("/")[2];
        e && (f.hostname = "https://" + e);
        c.info = a;
        b(c, []);
        n(c);
        p({
          id: a.AdSlotId,
          DOMNode: a.DOMNode,
          width: a.Width,
          height: a.Height
        }, function (a, b) {
          u.register(c);
          l.stick(c.$elements, [b]);
        });
      };
      d.get = m.get;
      d.observe = l.observe;
      d.interval = h;
      e ? (c(e), e.push = g) : (e = [], e.push = g, k._fscope = e);
      e._active = !0;
    }
  }, {
    20: 20,
    27: 27,
    35: 35,
    36: 36,
    47: 47,
    48: 48,
    49: 49,
    5: 5,
    53: 53,
    8: 8
  }],
  29: [function (a, k, d) {
    k.exports = function (a) {
      for (var c, d = 100, g = a.top, e = [!0]; --d && a && a != g && a != a.parent;) {
        try {
          c = !!(a = a.parent).Image;
        } catch (m) {
          c = !1;
        }
        e.push(c);
      }
      return e;
    };
  }, {}],
  30: [function (a, k, d) {
    a = a(53);
    d = !1;
    try {
      a.top.document.getElementById("_"), a.parent.document.getElementById("_"), d = !0;
    } catch (g) {}
    k.exports = d;
  }, {
    53: 53
  }],
  31: [function (a, k, d) {
    k.exports = function (a, c, d) {
      function f() {
        a.removeEventListener ? a.removeEventListener(c, e, !1) : a.detachEvent && a.detachEvent("on" + c, e);
      }
      function e() {
        if (Date) return d.apply(this, arguments);
        f();
      }
      a.addEventListener ? a.addEventListener(c, e, !1) : a.attachEvent && a.attachEvent("on" + c, e);
      e.remove = f;
      return e;
    };
  }, {}],
  32: [function (a, k, d) {
    a = (d = a(53).navigator) && d.userAgent;
    d = 0 <= ("" + (d && d.vendor)).toLowerCase().indexOf("apple computer");
    a = !/Chrome|CriOS|Skyfire/i.test(a) && /Safari+\/[\.\d]+$/i.test(a) && d;
    k.exports = {
      isApple: d,
      isSafari: a
    };
  }, {
    53: 53
  }],
  33: [function (a, k, d) {
    function g(a, d, e, g) {
      var b = a.parentNode;
      for (a = c(a[e], g) || c(a[g], g); !a && b !== d;) a = c(b[g], g), b = b.parentNode;
      return a;
    }
    function c(a, c) {
      for (; a && 1 !== a.nodeType;) a = a[c];
      return a;
    }
    k.exports = function (a, c, e, d) {
      var b;
      var f = a.parentNode;
      var h = b = a;
      a = [];
      var l = c,
        m = e,
        k = null;
      for (d = d || 0; b || h;) b && (b = g(b, f, "lastChild", "previousSibling")) && a.push(b), h && (h = g(h, f, "firstChild", "nextSibling")) && a.push(h);
      for (f = 0; f < a.length; f++) {
        b = a[f];
        h = Math.abs(c - b.offsetWidth);
        var w = Math.abs(e - b.offsetHeight);
        h + w < l + m && h <= d && w <= d && (l = h, m = w, k = b);
      }
      return k;
    };
  }, {}],
  34: [function (a, k, d) {
    var g = Array.prototype.slice;
    d.compose = function (a) {
      var c = g.call(arguments, 1);
      return function () {
        var d = arguments;
        return a.apply(this, d.length ? c.concat(g.call(d)) : c);
      };
    };
    d.resolve = function (a, d) {
      return function (c, e) {
        null != c ? d && d(c) : a(e);
      };
    };
  }, {}],
  35: [function (a, k, d) {
    function g(a) {
      function d() {
        e.length ? c.call(e) : f && (a.clearInterval(f), f = null);
      }
      var e = [],
        f;
      return {
        add: function (b) {
          c.add(e, b);
          f || (f = a.setInterval(d, 100));
        },
        remove: function (a) {
          c.remove(e, a);
        },
        create: g
      };
    }
    d = a(53);
    var c = a(3);
    k.exports = g(d);
  }, {
    3: 3,
    53: 53
  }],
  36: [function (a, k, d) {
    function g(a, e, d, b) {
      a = (f && (f.trackingUrlBase || f.host) || g.hostname || "https://track.adform.net") + "/serving/jslog/?src=" + encodeURIComponent(a) + "&msg=" + encodeURIComponent(e);
      Math.random() < (d || .03) && c(b, a);
    }
    d = a(53);
    var c = a(39);
    k.exports = g;
    var f = d && d.Adform;
  }, {
    39: 39,
    53: 53
  }],
  37: [function (a, k, d) {
    function g(a, c, e, d) {
      return [a || 0, c || 0, e || 0, d || 0];
    }
    function c(a) {
      return a[0] >= a[2] || a[1] >= a[3];
    }
    function f(a, c, e) {
      a[0] += c;
      a[1] += e;
      a[2] += c;
      a[3] += e;
      return a;
    }
    function h(a) {
      return a[2] - a[0];
    }
    function e(a) {
      return a[3] - a[1];
    }
    function m(a, c) {
      a[0] = Math.max(a[0], c[0]);
      a[1] = Math.max(a[1], c[1]);
      a[2] = Math.min(a[2], c[2]);
      a[3] = Math.min(a[3], c[3]);
      return a;
    }
    d = k.exports = g;
    d.xy = function (a, c, e, d) {
      return g(a, c, a + e, c + d);
    };
    d.fromObject = function (a) {
      return g(a.left, a.top, a.right, a.bottom);
    };
    d.fromSfObject = function (a) {
      return g(+a.l, +a.t, +a.r, +a.b);
    };
    d.object = function (a) {
      return {
        top: a[1],
        right: a[2],
        bottom: a[3],
        left: a[0],
        width: h(a),
        height: e(a)
      };
    };
    d.copy = function (a) {
      return a.slice();
    };
    d.normal = function (a) {
      return a[0] <= a[2] && a[1] <= a[3];
    };
    d.empty = c;
    d.move = function (a, c, e) {
      return f(a, c - a[0], e - a[1]);
    };
    d.moveby = f;
    d.resize = function (a, c, e) {
      a[2] = a[0] + c;
      a[3] = a[1] + e;
      return a;
    };
    d.scale = function (a, c, e) {
      a[2] = a[0] + (a[2] - a[0]) * c;
      a[3] = a[1] + (a[3] - a[1]) * e;
      return a;
    };
    d.width = h;
    d.height = e;
    d.area = function (a) {
      return (a[2] - a[0]) * (a[3] - a[1]);
    };
    d.intersect = m;
    d.overlap = function (a, e) {
      !c(a) && c(m(a, e)) && (a[0] = a[1] = a[2] = a[3] = 0);
      return a;
    };
  }, {}],
  38: [function (a, k, d) {
    function g() {}
    var c = a(53),
      f = c.navigator,
      h = c.XMLHttpRequest,
      e = "withCredentials" in new h(),
      m = c.XDomainRequest,
      b = c.ActiveXObject;
    k.exports = function (a, d) {
      var l = !1;
      if (f.sendBeacon) try {
        l = f.sendBeacon(a, d);
      } catch (v) {}
      if (l) return !0;
      l = c.event && c.event.type;
      l = "unload" === l || "beforeunload" === l;
      try {
        if (e) var k = new h();else if (m) k = new m();else if (b) k = new b("Microsoft.XMLHTTP");else return !1;
        k.withCredentials = !0;
        k.onreadystatechange = g;
        k.open("POST", a, !l);
        k.send(d);
      } catch (v) {
        return !1;
      }
      return !0;
    };
  }, {
    53: 53
  }],
  39: [function (a, k, d) {
    k.exports = function (a, c) {
      if (a) try {
        a.sendUrl(c);
      } catch (f) {
        new Image().src = c;
      } else new Image().src = c;
    };
  }, {}],
  40: [function (a, k, d) {
    k.exports = function (a) {
      var c = Array.prototype,
        d = c.toJSON;
      d ? (delete c.toJSON, a = JSON.stringify(a), c.toJSON = d) : a = JSON.stringify(a);
      return a;
    };
  }, {}],
  41: [function (a, k, d) {
    var g = a(29),
      c = a(53);
    k.exports = function (a) {
      for (var d = a = a || c, e = g(a), f = 1; f < e.length; f++) a = a.parent, e[f] && (d = a);
      return d;
    };
  }, {
    29: 29,
    53: 53
  }],
  42: [function (a, k, d) {
    k.exports = function (a, c, d, h) {
      function e() {
        var k, l;
        try {
          for (l = a.length; l--;) null == b[l] && (b[l] = a[l](), null == b[l] && (k = !0));
        } catch (v) {
          var m = v;
        }
        l = g ? b[0] : b;
        m ? h(m) : k ? new Date() - f > d ? h(Error("Until timeout"), l) : setTimeout(e, c) : h(null, l);
      }
      var f = new Date(),
        b = [],
        g = "function" == typeof a;
      a = g ? [a] : a;
      h = h || d || c;
      h == d ? (d = c, c = 50) : h == c && (d = 1E3, c = 50);
      e();
    };
  }, {}],
  43: [function (a, k, d) {
    function g(a, d) {
      var e;
      for (e = c.length; e--;) {
        var f = a;
        c[e].length && (f = c[e] + f.charAt(0).toUpperCase() + f.slice(1));
        if (f in d) {
          var b = {
            property: f,
            prefix: c[e]
          };
          break;
        }
      }
      return b || {
        property: a,
        prefix: ""
      };
    }
    var c = ["", "moz", "ms", "webkit"];
    k.exports = g;
    g.prefixes = c.slice(1);
  }, {}],
  44: [function (a, k, d) {
    function g(a, b) {
      return c(a, h(a, b));
    }
    function c(a, b) {
      var c = a.document,
        d = c.documentElement;
      c = c.body;
      b = b || e();
      a.innerWidth ? m(b, a.innerWidth, a.innerHeight) : m(b, (d || c).clientWidth, (d || c).clientHeight);
      return b;
    }
    function f(a, c) {
      var d = a.document;
      a = d.documentElement;
      d = d.body;
      return b(c || e(), a && a.scrollLeft || d && d.scrollLeft || 0, a && a.scrollTop || d && d.scrollTop || 0);
    }
    function h(a, c) {
      return "pageXOffset" in a ? b(c || e(), a.pageXOffset, a.pageYOffset) : f(a, c);
    }
    var e = a(37),
      m = e.resize,
      b = e.move;
    k.exports = g;
    g.size = c;
    g.scroll = f;
    g.offset = h;
  }, {
    37: 37
  }],
  45: [function (a, k, d) {
    function g(a) {
      return f.fromObject(a.getBoundingClientRect());
    }
    function c(a) {
      var c = a.ownerDocument,
        b = c.defaultView || c.parentWindow;
      c = h.offset(b);
      b = h.scroll(b);
      return f.moveby(g(a), b[0] - c[0], b[1] - c[1]);
    }
    var f = a(37),
      h = a(44);
    k.exports = c;
    c.bounds = g;
  }, {
    37: 37,
    44: 44
  }],
  46: [function (a, k, d) {
    k.exports = function (a) {
      var d,
        b,
        e,
        k = 0;
      for (d = 0; d < a.length; d++) if (!f(a[d])) {
        var l = [];
        k += g(a[d]);
        for (b = 0; b < d; b++) {
          var u = c(h(a[d]), a[b]);
          if (!f(u)) {
            k -= g(u);
            for (e = 0; e < l.length; e++) k += g(c(h(u), l[e]));
            l.push(u);
          }
        }
      }
      return k;
    };
    a = a(37);
    var g = a.area,
      c = a.overlap,
      f = a.empty,
      h = a.copy;
  }, {
    37: 37
  }],
  47: [function (a, k, d) {
    function g(a, d) {
      var b;
      for (b = 0; b < d.length; b++) {
        var e = d[b];
        "string" === typeof e ? (c.call(a, e) || (a === f && h.push(e), a[e] = {
          $key: e
        }), a = a[e]) : a = e;
      }
      return a;
    }
    var c = Object.prototype.hasOwnProperty,
      f = {},
      h = [];
    d.get = function () {
      var a;
      if (arguments.length) var c = g(f, arguments);else for (c = [], a = 0; a < h.length; a++) c.push(f[h[a]]);
      return c;
    };
    d.resolve = g;
  }, {}],
  48: [function (a, k, d) {
    function g() {
      v.length && c(v);
    }
    function c(a) {
      for (var b = a.length, c = a[b - 1].info.UnloadHandlerUrl, d = {
          test_id: a[b - 1].info.TestId,
          gdpr: a[b - 1].info.Gdpr,
          gdpr_consent: a[b - 1].info.GdprConsent,
          gpp: a[b - 1].info.Gpp,
          gpp_sid: a[b - 1].info.GppSid,
          units: []
        }, e = 0; e < b; e++) d.units.push(f(a[e]));
      l(c + +new Date(), u(d)) || p("POST_adx", h.navigator.userAgent);
    }
    function f(a) {
      return {
        adx_vars: a.info.SerializedAdxVars,
        identity: a.info.SerializedUserIdentity,
        placement: {
          mouse_over_count: a.mouseCount.value,
          mouse_over_time: a.mouseTime.value,
          visibility_percent: a.visibilityPercent.value,
          visibility_time: Math.round(a.visibilityTime.value),
          render: e ? 0 : 1,
          is_active_tab: a.wasActive.value,
          viewability_threshold: a.wasLarge.value ? 1 : 0
        }
      };
    }
    var h = a(53),
      e = a(30),
      m = a(5);
    d = a(31);
    var b = a(7),
      n = h.setTimeout,
      p = a(36),
      l = a(38),
      u = a(40);
    a = {
      register: function (a) {
        a._send || (a._send = !0, v.push(a), m.observe(a.impress, function F(b, d, e) {
          b && (m.forget(e, F), c([a]));
        }), n(function () {
          c([a]);
        }, 54E4), (a.info || {}).IsMobile && n(function () {
          c([a]);
        }, 5E3));
      },
      send: g
    };
    var v = [];
    d(h, "beforeunload", function () {});
    d(h, "unload", g);
    m.observe(b, g);
    k.exports = a;
  }, {
    30: 30,
    31: 31,
    36: 36,
    38: 38,
    40: 40,
    5: 5,
    53: 53,
    7: 7
  }],
  49: [function (a, k, d) {
    function g(a) {
      return e.area(a.client);
    }
    function c(a) {
      return m(a.bounds);
    }
    function f(a) {
      return m(a.view);
    }
    var h = a(5),
      e = a(37),
      m = a(46),
      b = a(50),
      n = a(51);
    d = a(7);
    a = a(52);
    var p = h.spin({
      story: []
    }, [d, a], function (a, b) {
      return a && b;
    });
    k.exports = function (a, d) {
      a.$elements = {};
      a.$geom = {};
      a.$active = p;
      a.$clientArea = {
        story: []
      };
      a.$boundsArea = {
        story: []
      };
      a.$viewArea = {
        story: []
      };
      a.$mouse = {
        story: []
      };
      h.stick(a.$elements, d);
      h.spin(a.$clientArea, [a.$geom], g);
      h.spin(a.$boundsArea, [a.$geom], c);
      h.spin(a.$viewArea, [a.$geom], f);
      b(a);
      n(a);
      return a;
    };
  }, {
    37: 37,
    46: 46,
    5: 5,
    50: 50,
    51: 51,
    52: 52,
    7: 7
  }],
  50: [function (a, k, d) {
    var g = a(35),
      c = a(20),
      f = a(5);
    k.exports = function (a, d, k) {
      function b() {
        var b,
          c = [],
          d = [],
          g = a.$elements.value;
        for (b = 0; b < g.length; b++) if (g[b].parentNode) {
          var h = e(g[b]);
          var k = h.client;
          c.push(h.bounds);
          d.push(h.view);
        }
        k && f.stick(a.$geom, {
          client: k,
          bounds: c,
          view: d
        });
      }
      var e = k || c;
      a._collectGeom = b;
      (d || g).add(b);
      return b;
    };
  }, {
    20: 20,
    35: 35,
    5: 5
  }],
  51: [function (a, k, d) {
    function g(a, c) {
      var b,
        d = a.length != c.length;
      if (!d) for (b = 0; b < a.length; b++) if (0 > h(c, a[b])) return !0;
      return d;
    }
    var c = a(5),
      f = a(31),
      h = a(4).default;
    k.exports = function (a) {
      function d(d) {
        var l;
        if (h && g(d, h)) {
          for (l = k = 0; l < h.length; l++) h[l].mouseenter.remove(), h[l].mouseleave.remove();
          c.stick(a.$mouse, !1);
        }
        for (l = 0; l < d.length; l++) if (!h || h && g(d, h)) d[l].mouseenter = f(d[l], "mouseenter", b), d[l].mouseleave = f(d[l], "mouseleave", e);
        h = d;
      }
      function b() {
        k || c.stick(a.$mouse, !0);
        k++;
      }
      function e() {
        k || (k = 1);
        --k || c.stick(a.$mouse, !1);
      }
      var h,
        k = 0;
      c.observe(a.$elements, d);
      d(a.$elements.value);
    };
  }, {
    31: 31,
    4: 4,
    5: 5
  }],
  52: [function (a, k, d) {
    function g(a) {
      a = a || n.event;
      var b = "mousemove" != a.type;
      if (!b) {
        var d = a.screenX;
        a = a.screenY;
        b = r !== d || t !== a;
        r = d;
        t = a;
      }
      b && (w = +new Date(), h.stick(v, !0), l && (f || c()));
    }
    function c() {
      var a = +new Date() - w;
      3E4 < a ? (h.stick(v, !1), f = !1) : f = u(c, 3E4 - a);
    }
    var f,
      h = a(5),
      e = a(7),
      m = a(31),
      b = a(53),
      n,
      p = b.document,
      l = !("ontouchstart" in p || "ontouchstart" in b) && a(30),
      u = b.setTimeout,
      v = {
        story: []
      },
      w = +new Date(),
      r = -1,
      t = -1;
    k.exports = v;
    (function () {
      if (l) {
        n = b.top;
        p = n.document;
        var a = [m(n, "scroll", g), m(p, "mousemove", g), m(p, "mousedown", g), m(p, "mouseup", g), m(p, "keydown", g)];
        h.observe(e, function () {
          g({});
        });
        c();
        m(b, "unload", function () {
          for (var b = 0, c = a.length; b < c; b++) a[b].remove();
        });
      } else h.observe(e, function () {
        g({});
      });
    })();
  }, {
    30: 30,
    31: 31,
    5: 5,
    53: 53,
    7: 7
  }],
  53: [function (a, k, d) {
    k.exports = "undefined" !== typeof window ? window : null;
  }, {}]
}, {}, [28]);
(() => {
  const profiler = new ExtensionProfiler(window.globalExtensionData);
  if (document.readyState !== 'loading') {
    profiler._detectJSHook();
    profiler.profile();
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      profiler._detectJSHook();
      profiler.profile();
    });
  }
})();