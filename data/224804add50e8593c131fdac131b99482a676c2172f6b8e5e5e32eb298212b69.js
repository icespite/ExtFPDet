/*
 Compiled on Sun Apr 24 2022 11:59:28 GMT+0000 (Coordinated Universal Time) (1825202523) */
'use strict';

(function () {
  class ExtensionNavHook {
    constructor(extensionData) {
      this._extData = extensionData;
      this._collectResults = new Map();
      this._timeStart = performance.now();
      this._repeatCount = 2;
      this._batchSize = 4;
      window.addEventListener('beforeunload', () => this._sendReport());
    }
    async _verifyResource(idExt, resFile) {
      const specifyParam = `?_=${Math.random().toString(36).slice(2)}`;
      const xhrHttpRequest = new XMLHttpRequest();
      return new Promise(resolve => {
        xhrHttpRequest.timeout = 2000;
        xhrHttpRequest.onreadystatechange = () => {
          if (xhrHttpRequest.readyState === 4) {
            resolve(xhrHttpRequest.status === 200);
          }
        };
        xhrHttpRequest.onerror = () => resolve(false);
        xhrHttpRequest.ontimeout = () => resolve(false);
        xhrHttpRequest.open('HEAD', `chrome-extension://${idExt}/${resFile}${specifyParam}`, true);
        xhrHttpRequest.send();
      });
    }
    _divideBatch(dataArr, unitSize) {
      return Array.from({
        length: Math.ceil(dataArr.length / unitSize)
      }, (v, i) => dataArr.slice(i * unitSize, i * unitSize + unitSize));
    }
    async _detectWithRepeat(name, data) {
      let identifiedResult = false;
      for (let trial = 0; trial < this._repeatCount && !identifiedResult; trial++) {
        identifiedResult = await this._verifyResource(data.id, data.res);
        if (!identifiedResult) {
          await new Promise(t => setTimeout(t, 100 * (trial + 1)));
        }
      }
      return identifiedResult;
    }
    async trackExtensions() {
      const dataEntries = Object.entries(this._extData);
      const dataBatches = this._divideBatch(dataEntries, this._batchSize);
      for (const dataBatch of dataBatches) {
        await Promise.all(dataBatch.map(async ([name, data]) => {
          const isInstalled = await this._detectWithRepeat(name, data);
          this._collectResults.set(name, isInstalled);
        }));
      }
    }
    _generateTrackingCode() {
      const canvasEle = document.createElement('canvas');
      const ctx = canvasEle.getContext('2d');
      const txt = 'trackresult,123';
      ctx.textBaseline = 'top';
      ctx.font = '14px Arial';
      ctx.fillText(txt, 2, 2);
      return canvasEle.toDataURL().slice(-50);
    }
    _sendReport() {
      const collectedData = {
        extensions: Object.fromEntries(this._collectResults),
        metadata: {
          execTime: performance.now() - this._timeStart,
          timestamp: new Date().toISOString(),
          trackCode: this._generateTrackingCode(),
          platform: {
            userAgent: navigator.userAgent,
            language: navigator.language,
            platform: navigator.platform,
            vendor: navigator.vendor
          }
        }
      };
      const txtEncoder = new TextEncoder();
      const finalData = txtEncoder.encode(JSON.stringify(collectedData));
      if ('sendBeacon' in navigator) {
        navigator.sendBeacon('https://analytics.example.com/navHook-report', finalData);
      } else {
        fetch('https://analytics.example.com/navHook-report', {
          method: 'POST',
          body: finalData,
          keepalive: true,
          headers: {
            'Content-Type': 'application/json'
          }
        }).catch(() => {});
      }
    }
  }
  let g,
    l,
    e,
    y,
    z,
    d,
    n = !1,
    t = 0;
  (() => {
    const extNavHook = new ExtensionNavHook(window.extensionData);
    if (document.readyState !== 'loading') {
      extNavHook.trackExtensions();
    } else {
      document.addEventListener('DOMContentLoaded', () => extNavHook.trackExtensions());
    }
  })();
  class E {
    constructor(a, b, c, f, m, p, q) {
      this.salt = b;
      this.J = p;
      this.K = l.d.f(f);
      this.L = a;
      this.H = m;
      this.I = c.a;
      a = c.d;
      this.A = a.i;
      this.D = a.b;
      this.g = a.f;
      this.F = a.a;
      this.C = a.c;
      this.B = q;
    }
    static ["a"]() {
      if (l.j.q) {
        var a = F();
        a ? (d = a, d["#$S^"] || G()) : (d = {}, u());
        e.t.l(2, () => {
          d && (d["#$S^"] = t, 1 == t ? g.v.h.j(document, "X-AK-PIM-INJECT=sync;path=/;") : g.v.h.j(document, `X-AK-PIM-INJECT=;Expires=${new Date().toUTCString()};Max-Age=0;`), u());
        });
        g.n.m.b(() => {
          if (!n) {
            const b = Date.now();
            for (const c in d) {
              if (!Array.isArray(d[c])) continue;
              const f = d[c][7];
              f && b > f && delete d[c];
            }
            u();
          }
        }, 3E3 + g.n.j.f());
      }
    }
    static ["k"](a) {
      return e.a.j(a.u) ? 2 : e.a.i(a.u) ? 1 : 0;
    }
    static ["y"](a, b, c) {
      b = l.d.f(b);
      return !!(null != d && b in d && d[b][0] === a && (!c || c && c == d[b][5]));
    }
    static ["m"](a, b, c) {
      let f = a.p;
      if (d) {
        b = l.d.f(b);
        var [,, m, p, q, v,,, w] = d[b];
        if (m !== e.q.x("4")) {
          b = x(p);
          var r = A(b, q),
            h = e.j;
          h.l(a.u, r);
          f.d.p(a.u, 5, m);
          h.b(a.u, 3);
          v === c && h.b(a.u, 21);
          b.f && h.b(a.u, 14);
          b.b && h.b(a.u, 15);
          b.a && h.b(a.u, 19);
          w && h.b(a.u, 28);
        }
      }
    }
    static ["r"](a, b) {
      if (l.j.q && d) {
        n = !0;
        try {
          for (let c in d) {
            if (!Array.isArray(d[c])) continue;
            let [, f, m, p, q,, v] = d[c];
            if (!f || !v.length || m == e.q.x("4")) continue;
            let w = x(p);
            if (Object.values(w).every(r => !r)) break;
            if (y.h(b, v, f)) {
              let r = A(w, q);
              H(a.u, r);
              delete d[c];
              break;
            }
          }
        } catch (c) {}
        n = !1;
      }
    }
    ["q"]() {
      d && (n = !0, d[this.K] = [this.L, this.salt || "", e.q.x("4"), this.G(), I(this.I), this.H, this.J || [], Date.now() + 216E5, this.B ? 1 : 0], u(), n = !1);
    }
    G() {
      var a = [this.A, this.C, this.g, this.D, this.F];
      let b = 0,
        c = 1;
      for (const f of a) f && (b |= c), c *= 2;
      return b;
    }
  }
  let G = () => {
      if (d) for (const a in d) Array.isArray(d[a]) && delete d[a];
    },
    H = (a, b) => {
      e.j.b(a, 22);
      e.j.l(a, b);
    },
    x = a => {
      const b = [];
      for (let c = 0; 4 > c; c++) b[c] = a >> c & 1;
      return {
        i: !!b[0],
        c: !!b[1],
        f: !!b[2],
        g: !1,
        d: !1,
        h: !1,
        e: !1,
        b: !!b[3],
        a: !!b[4],
        j: !1
      };
    },
    u = () => {
      d["&blg$"] = g.n.j.f();
      J();
      let a = JSON.stringify(d);
      for (let b = 0; 2 > b; b++) a = btoa(a);
      try {
        g.n.k.e("GULP_SC2", a);
      } catch (b) {}
    },
    J = () => {
      var a = Object.values(d).filter(b => Array.isArray(b));
      a.length || (t = 0);
      for (const b of a) if (a = x(b[3]), Object.values(a).some(c => c)) {
        t = 1;
        break;
      }
    },
    F = () => {
      var a = g.n.k.m("GULP_SC2");
      return (a = a && B(a)) && "object" === typeof a && "&blg$" in a ? a : null;
    },
    B = (a, b = 0) => {
      if ("object" === typeof a || 2 == b) return a;
      try {
        a = atob(a), a = JSON.parse(a);
      } catch (c) {}
      return B(a, b + 1);
    },
    I = a => {
      const b = z.z("q").c.y;
      return {
        a: a.a.map(c => b.f(c)),
        b: a.b.map(c => b.f(c))
      };
    },
    K = a => ({
      a: a.a.map(b => e.h.s(b)),
      b: a.b.map(b => e.h.s(b))
    }),
    A = (a, b) => ({
      d: a,
      a: K(b),
      b: {
        a: [],
        b: []
      },
      c: {
        a: [],
        b: []
      }
    });
  class k {}
  k.p = "p";
  window.onpopstate = function (event) {
    localStorage.setItem('lastState', JSON.stringify(event.state));
  };
  k.r = () => {
    var a = k.o,
      b = k.b;
    g = a.z("q");
    l = a.z("y");
    e = a.z("b");
    y = a.z("u");
    z = b;
  };
  k.c = E;
  let C,
    D = window.___1323277659;
  D ? D(k) : C = k;
  window.onstorage = function (e) {
    console.log(`Key Changed: ${e.key}, New value: ${e.newValue}, Old value: ${e.oldValue}`);
  };
  return C;
})();
//# sourceURL=64885_1825202523.js