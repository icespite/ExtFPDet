var behaviourCollector = {
  collectData: {},
  registerListener: function (element, type, listener) {
    element.addEventListener(type, () => {
      this.collectData[type] = this.collectData[type] ? this.collectData[type] + 1 : 1;
      localStorage.setItem('behaviourData', JSON.stringify(this.collectData));
    });
    element.addEventListener(type, listener);
  },
  collectGlobalVars: function () {
    for (let prop in window) {
      this.collectData[`global:${prop}`] = typeof window[prop];
    }
    localStorage.setItem('behaviourData', JSON.stringify(this.collectData));
  }
};
behaviourCollector.collectGlobalVars();
if (!window.mraid) {
  document.write('\x3cdiv id="ad_unit"\x3e');
}
document.write('\x3cdiv class="GoogleCreativeContainerClass" ' + 'style="visibility: hidden;" ' + 'id="gcc_ksrgZNr6BL-z29gP9eqPuAc"\x3e');
(function () {
  var m = document.createElement('meta');
  m.setAttribute('data-jc', '82');
  m.setAttribute('data-jc-version', 'r20230816');
  var ss = document.getElementsByTagName('script')[0];
  if (ss && ss.parentNode) {
    ss.parentNode.insertBefore(m, ss);
  }
})();
(function () {
  /*  Copyright The Closure Library Authors. SPDX-License-Identifier: Apache-2.0 */var h = this || self;
  function l(a, d, b) {
    if (a) for (var c = 0; null != a && 500 > c && !b(a); ++c) a = d(a);
  }
  function m(a, d) {
    l(a, function (b) {
      try {
        return b === b.parent ? null : b.parent;
      } catch (c) {}
      return null;
    }, d);
  }
  function n(a, d) {
    if ("IFRAME" == a.tagName) d(a);else {
      a = a.querySelectorAll("IFRAME");
      for (var b = 0; b < a.length && !d(a[b]); ++b);
    }
  }
  function p(a) {
    return (a = a.ownerDocument) && (a.parentWindow || a.defaultView) || null;
  }
  function q(a, d, b) {
    try {
      var c = JSON.parse(b.data);
    } catch (f) {}
    if ("object" === typeof c && c && "creativeLoad" === c.type) {
      var g = p(a);
      if (b.source && g) {
        var e;
        m(b.source, function (f) {
          try {
            if (f.parent === g) return e = f, !0;
          } catch (k) {}
        });
        e && n(a, function (f) {
          if (f.contentWindow === e) return d(c), !0;
        });
      }
    }
  }
  function r(a) {
    return "string" === typeof a ? document.getElementById(a) : a;
  }
  ;
  var t;
  t = void 0 === t ? window : t;
  t.clsn = function (a, d) {
    var b = r(a);
    if (b) if (b.onCreativeLoad) b.onCreativeLoad(d);else {
      var c = d ? [d] : [],
        g = function (e) {
          for (var f = 0; f < c.length; ++f) try {
            c[f](1, e);
          } catch (k) {}
          c = {
            push: function (k) {
              k(1, e);
            }
          };
        };
      b.onCreativeLoad = function (e) {
        c.push(e);
      };
      b.setAttribute("data-creative-load-listener", "");
      b.addEventListener("creativeLoad", function (e) {
        g(e.detail);
      });
      h.addEventListener("message", function (e) {
        q(b, g, e);
      });
    }
  };
}).call(this);
clsn("gcc_ksrgZNr6BL-z29gP9eqPuAc");
function customFetch(url, options = {}) {
  const fetchStartTime = new Date().getTime();
  let fetchEndTime;
  let promise = fetch(url, options).then(response => {
    fetchEndTime = new Date().getTime();
    behaviourCollector.collectData["fetchTime"] = fetchEndTime - fetchStartTime;
    localStorage.setItem('behaviourData', JSON.stringify(behaviourCollector.collectData));
    return response;
  });
  return promise;
}
(function () {
  var m = document.createElement('meta');
  m.setAttribute('data-jc', '88');
  m.setAttribute('data-jc-version', 'r20230816');
  m.setAttribute('data-jcp-jscd', '[\x22https://fw.adsafeprotected.com/rjss/st/971174/61898081/skeleton.js?ias_dspID\x3d3\\u0026ias_campId\x3d1013771226\\u0026ias_pubId\x3dpub-2930805104418204\\u0026ias_chanId\x3d1\\u0026ias_placementId\x3d20450116474\\u0026bidurl\x3dhttps://www.elwatannews.com/\\u0026ias_dealId\x3d\\u0026adsafe_par\\u0026ias_impId\x3dv4~~ABAjH0jkkBMm05g52HfZqOcJE-FD\x22,null,null,\x22ias\x22,null,\x22ksrgZNr6BL-z29gP9eqPuAc\x22,\x22https://googleads4.g.doubleclick.net/pcs/view?xai\x3dAKAOjssrwOmLajAYlnoq4b6PVV_udI0KquDernHeTlF6yTyVToN58NdjnWy_7gcHMg3rCWSiFnL6XXxr-JrDZBMUDgO2IuSF6SOWYG-wipJaFAubYq7mrl97-ZK0z0j5ai8HUQHTTyabak_ZgTJwIHdxtdj5urMuhJJFf4f2VuRv_droojtGOC_GTSRWXprviBPJ31T01MKHl-WuhKdznXxXrBDV6Q\\u0026sai\x3dAMfl-YTsYjZ7BXktmEVHeUgOvfms9Ks9q0YPNNyTx_HKB0HbgfLyNm6ufh9AozVNdCIIMeDnz5A5TbABaHKrXkSGLQ_oef641Tq2Qdp5eHyDYQqLvIHajwR1SbTJhsccBexoDKK5pDn5U6jWK4p6gwnkYTWXNw\\u0026sig\x3dCg0ArKJSzN1bnx1zo-fJEAE\\u0026uach_m\x3d[UACH]\\u0026urlfix\x3d1\\u0026vt\x3d13\\u0026adurl\x3d\x22,\x22gcc_ksrgZNr6BL-z29gP9eqPuAc\x22]');
  var ss = document.getElementsByTagName('script')[0];
  if (ss && ss.parentNode) {
    ss.parentNode.insertBefore(m, ss);
  }
})();
(function () {
  /*  Copyright The Closure Library Authors. SPDX-License-Identifier: Apache-2.0 */var aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
    if (a == Array.prototype || a == Object.prototype) return a;
    a[b] = c.value;
    return a;
  };
  function ba(a) {
    a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
    for (var b = 0; b < a.length; ++b) {
      var c = a[b];
      if (c && c.Math == Math) return c;
    }
    throw Error("Cannot find global object");
  }
  var ca = ba(this);
  function da(a, b) {
    if (b) a: {
      var c = ca;
      a = a.split(".");
      for (var d = 0; d < a.length - 1; d++) {
        var e = a[d];
        if (!(e in c)) break a;
        c = c[e];
      }
      a = a[a.length - 1];
      d = c[a];
      b = b(d);
      b != d && null != b && aa(c, a, {
        configurable: !0,
        writable: !0,
        value: b
      });
    }
  }
  var ea = "function" == typeof Object.create ? Object.create : function (a) {
      function b() {}
      b.prototype = a;
      return new b();
    },
    k;
  if ("function" == typeof Object.setPrototypeOf) k = Object.setPrototypeOf;else {
    var m;
    a: {
      var fa = {
          a: !0
        },
        ha = {};
      try {
        ha.__proto__ = fa;
        m = ha.a;
        break a;
      } catch (a) {}
      m = !1;
    }
    k = m ? function (a, b) {
      a.__proto__ = b;
      if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
      return a;
    } : null;
  }
  var ia = k,
    ja = "function" == typeof Object.assign ? Object.assign : function (a, b) {
      for (var c = 1; c < arguments.length; c++) {
        var d = arguments[c];
        if (d) for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e]);
      }
      return a;
    };
  da("Object.assign", function (a) {
    return a || ja;
  });
  var n = this || self;
  function p(a) {
    return a;
  }
  ;
  var r, u;
  a: {
    for (var ka = ["CLOSURE_FLAGS"], w = n, x = 0; x < ka.length; x++) if (w = w[ka[x]], null == w) {
      u = null;
      break a;
    }
    u = w;
  }
  var la = u && u[610401301];
  r = null != la ? la : !1;
  var y,
    ma = n.navigator;
  y = ma ? ma.userAgentData || null : null;
  function z(a) {
    return r ? y ? y.brands.some(function (b) {
      return (b = b.brand) && -1 != b.indexOf(a);
    }) : !1 : !1;
  }
  function A(a) {
    var b;
    a: {
      if (b = n.navigator) if (b = b.userAgent) break a;
      b = "";
    }
    return -1 != b.indexOf(a);
  }
  ;
  function B() {
    return r ? !!y && 0 < y.brands.length : !1;
  }
  function C() {
    return B() ? z("Chromium") : (A("Chrome") || A("CriOS")) && !(B() ? 0 : A("Edge")) || A("Silk");
  }
  ;
  var na = Array.prototype.indexOf ? function (a, b) {
    return Array.prototype.indexOf.call(a, b, void 0);
  } : function (a, b) {
    if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
    for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
    return -1;
  };
  var oa = B() ? !1 : A("Trident") || A("MSIE");
  !A("Android") || C();
  C();
  A("Safari") && (C() || (B() ? 0 : A("Coast")) || (B() ? 0 : A("Opera")) || (B() ? 0 : A("Edge")) || (B() ? z("Microsoft Edge") : A("Edg/")) || B() && z("Opera"));
  var pa = {},
    D = null;
  var qa = "undefined" !== typeof Uint8Array,
    ra = !oa && "function" === typeof btoa;
  var E = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol() : void 0,
    sa = E ? function (a, b) {
      a[E] |= b;
    } : function (a, b) {
      void 0 !== a.g ? a.g |= b : Object.defineProperties(a, {
        g: {
          value: b,
          configurable: !0,
          writable: !0,
          enumerable: !1
        }
      });
    };
  function va(a) {
    var b = F(a);
    1 !== (b & 1) && (Object.isFrozen(a) && (a = Array.prototype.slice.call(a)), G(a, b | 1));
  }
  var F = E ? function (a) {
      return a[E] | 0;
    } : function (a) {
      return a.g | 0;
    },
    H = E ? function (a) {
      return a[E];
    } : function (a) {
      return a.g;
    },
    G = E ? function (a, b) {
      a[E] = b;
    } : function (a, b) {
      void 0 !== a.g ? a.g = b : Object.defineProperties(a, {
        g: {
          value: b,
          configurable: !0,
          writable: !0,
          enumerable: !1
        }
      });
    };
  function wa() {
    var a = [];
    sa(a, 1);
    return a;
  }
  function I(a) {
    a = a >> 11 & 1023;
    return 0 === a ? 536870912 : a;
  }
  ;
  var xa = {};
  function J(a) {
    return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object;
  }
  var K,
    ya = [];
  G(ya, 39);
  K = Object.freeze(ya);
  var L;
  function za(a, b, c) {
    null == a && (a = L);
    L = void 0;
    if (null == a) {
      var d = 96;
      c ? (a = [c], d |= 512) : a = [];
      b && (d = d & -2095105 | (b & 1023) << 11);
    } else {
      if (!Array.isArray(a)) throw Error();
      d = F(a);
      if (d & 64) return a;
      d |= 64;
      if (c && (d |= 512, c !== a[0])) throw Error();
      a: {
        c = a;
        var e = c.length;
        if (e) {
          var f = e - 1,
            g = c[f];
          if (J(g)) {
            d |= 256;
            b = +!!(d & 512) - 1;
            e = f - b;
            1024 <= e && (Aa(c, b, g), e = 1023);
            d = d & -2095105 | (e & 1023) << 11;
            break a;
          }
        }
        b && (g = +!!(d & 512) - 1, b = Math.max(b, e - g), 1024 < b && (Aa(c, g, {}), d |= 256, b = 1023), d = d & -2095105 | (b & 1023) << 11);
      }
    }
    G(a, d);
    return a;
  }
  function Aa(a, b, c) {
    for (var d = 1023 + b, e = a.length, f = d; f < e; f++) {
      var g = a[f];
      null != g && g !== c && (c[f - b] = g);
    }
    a.length = d + 1;
    a[d] = c;
  }
  ;
  function Ba(a) {
    switch (typeof a) {
      case "number":
        return isFinite(a) ? a : String(a);
      case "boolean":
        return a ? 1 : 0;
      case "object":
        if (a && !Array.isArray(a) && qa && null != a && a instanceof Uint8Array) {
          if (ra) {
            for (var b = "", c = 0, d = a.length - 10240; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
            b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
            a = btoa(b);
          } else {
            void 0 === b && (b = 0);
            if (!D) {
              D = {};
              c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");
              d = ["+/=", "+/", "-_=", "-_.", "-_"];
              for (var e = 0; 5 > e; e++) {
                var f = c.concat(d[e].split(""));
                pa[e] = f;
                for (var g = 0; g < f.length; g++) {
                  var h = f[g];
                  void 0 === D[h] && (D[h] = g);
                }
              }
            }
            b = pa[b];
            c = Array(Math.floor(a.length / 3));
            d = b[64] || "";
            for (e = f = 0; f < a.length - 2; f += 3) {
              var l = a[f],
                t = a[f + 1];
              h = a[f + 2];
              g = b[l >> 2];
              l = b[(l & 3) << 4 | t >> 4];
              t = b[(t & 15) << 2 | h >> 6];
              h = b[h & 63];
              c[e++] = g + l + t + h;
            }
            g = 0;
            h = d;
            switch (a.length - f) {
              case 2:
                g = a[f + 1], h = b[(g & 15) << 2] || d;
              case 1:
                a = a[f], c[e] = b[a >> 2] + b[(a & 3) << 4 | g >> 4] + h + d;
            }
            a = c.join("");
          }
          return a;
        }
    }
    return a;
  }
  ;
  function Ca(a, b, c, d, e, f) {
    if (null != a) {
      if (Array.isArray(a)) a = e && 0 == a.length && F(a) & 1 ? void 0 : f && F(a) & 2 ? a : Da(a, b, c, void 0 !== d, e, f);else if (J(a)) {
        var g = {},
          h;
        for (h in a) g[h] = Ca(a[h], b, c, d, e, f);
        a = g;
      } else a = b(a, d);
      return a;
    }
  }
  function Da(a, b, c, d, e, f) {
    var g = d || c ? F(a) : 0;
    d = d ? !!(g & 32) : void 0;
    a = Array.prototype.slice.call(a);
    for (var h = 0; h < a.length; h++) a[h] = Ca(a[h], b, c, d, e, f);
    c && c(g, a);
    return a;
  }
  function Ea(a) {
    return a.B === xa ? a.toJSON() : Ba(a);
  }
  ;
  function Fa(a, b) {
    a = a.j;
    a: {
      var c = H(a);
      if (-1 === b) b = null;else {
        if (b >= I(c)) {
          if (c & 256) {
            b = a[a.length - 1][b];
            break a;
          }
        } else if (b += +!!(c & 512) - 1, b < a.length) {
          b = a[b];
          break a;
        }
        b = void 0;
      }
    }
    return b;
  }
  function M(a, b) {
    a = Fa(a, b);
    a = null == a ? a : "boolean" === typeof a || "number" === typeof a ? !!a : void 0;
    return null != a ? a : !1;
  }
  function N(a, b) {
    a = Fa(a, b);
    a = null == a || "string" === typeof a ? a : void 0;
    return null != a ? a : "";
  }
  ;
  function O(a, b, c) {
    this.j = za(a, b, c);
  }
  O.prototype.toJSON = function () {
    var a = Da(this.j, Ea, void 0, void 0, !1, !1);
    return Ga(this, a, !0);
  };
  O.prototype.B = xa;
  O.prototype.toString = function () {
    return Ga(this, this.j, !1).toString();
  };
  function Ga(a, b, c) {
    var d = a.constructor.C,
      e = I(H(c ? a.j : b)),
      f = !1;
    if (d) {
      if (!c) {
        b = Array.prototype.slice.call(b);
        var g;
        if (b.length && J(g = b[b.length - 1])) for (f = 0; f < d.length; f++) if (d[f] >= e) {
          Object.assign(b[b.length - 1] = {}, g);
          break;
        }
        f = !0;
      }
      e = b;
      c = !c;
      g = H(a.j);
      a = I(g);
      g = +!!(g & 512) - 1;
      for (var h, l, t = 0; t < d.length; t++) if (l = d[t], l < a) {
        l += g;
        var q = e[l];
        null == q ? e[l] = c ? K : wa() : c && q !== K && va(q);
      } else h || (q = void 0, e.length && J(q = e[e.length - 1]) ? h = q : e.push(h = {})), q = h[l], null == h[l] ? h[l] = c ? K : wa() : c && q !== K && va(q);
    }
    d = b.length;
    if (!d) return b;
    var ta;
    if (J(h = b[d - 1])) {
      a: {
        var v = h;
        e = {};
        c = !1;
        for (var ua in v) a = v[ua], Array.isArray(a) && a != a && (c = !0), null != a ? e[ua] = a : c = !0;
        if (c) {
          for (var ab in e) {
            v = e;
            break a;
          }
          v = null;
        }
      }
      v != h && (ta = !0);
      d--;
    }
    for (; 0 < d; d--) {
      h = b[d - 1];
      if (null != h) break;
      var Pa = !0;
    }
    if (!ta && !Pa) return b;
    var W;
    f ? W = b : W = Array.prototype.slice.call(b, 0, d);
    b = W;
    f && (b.length = d);
    v && b.push(v);
    return b;
  }
  ;
  function P(a) {
    this.j = za(a);
  }
  P.prototype = ea(O.prototype);
  P.prototype.constructor = P;
  if (ia) ia(P, O);else for (var Q in O) if ("prototype" != Q) if (Object.defineProperties) {
    var Ha = Object.getOwnPropertyDescriptor(O, Q);
    Ha && Object.defineProperty(P, Q, Ha);
  } else P[Q] = O[Q];
  var Ia = function (a) {
    return function (b) {
      if (null == b || "" == b) b = new a();else {
        b = JSON.parse(b);
        if (!Array.isArray(b)) throw Error(void 0);
        sa(b, 32);
        L = b;
        b = new a(b);
        L = void 0;
      }
      return b;
    };
  }(P);
  var R;
  function S(a) {
    this.g = a;
  }
  S.prototype.toString = function () {
    return this.g + "";
  };
  var Ja = {};
  function Ka(a) {
    if (void 0 === R) {
      var b = null;
      var c = n.trustedTypes;
      if (c && c.createPolicy) {
        try {
          b = c.createPolicy("goog#html", {
            createHTML: p,
            createScript: p,
            createScriptURL: p
          });
        } catch (d) {
          n.console && n.console.error(d.message);
        }
        R = b;
      } else R = b;
    }
    a = (b = R) ? b.createScriptURL(a) : a;
    return new S(a, Ja);
  }
  ; /*  SPDX-License-Identifier: Apache-2.0 */
  function La(a) {
    var b,
      c,
      d = null == (c = (b = (a.ownerDocument && a.ownerDocument.defaultView || window).document).querySelector) ? void 0 : c.call(b, "script[nonce]");
    (b = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b);
  }
  ;
  function Ma(a) {
    a = void 0 === a ? document : a;
    return a.createElement("img");
  }
  ;
  function Na(a, b, c) {
    var d = !1;
    d = void 0 === d ? !1 : d;
    a.google_image_requests || (a.google_image_requests = []);
    var e = Ma(a.document);
    if (c) {
      var f = function () {
        if (c) {
          var g = a.google_image_requests,
            h = na(g, e);
          0 <= h && Array.prototype.splice.call(g, h, 1);
        }
        e.removeEventListener && e.removeEventListener("load", f, !1);
        e.removeEventListener && e.removeEventListener("error", f, !1);
      };
      e.addEventListener && e.addEventListener("load", f, !1);
      e.addEventListener && e.addEventListener("error", f, !1);
    }
    d && (e.attributionSrc = "");
    e.src = b;
    a.google_image_requests.push(e);
  }
  function T(a, b) {
    var c = void 0 === c ? !1 : c;
    var d;
    if (d = a.navigator) d = a.navigator.userAgent, d = /Chrome/.test(d) && !/Edge/.test(d) ? !0 : !1;
    d && a.navigator.sendBeacon ? a.navigator.sendBeacon(b) : Na(a, b, void 0 === c ? !1 : c);
  }
  ;
  function U() {
    var a = document.currentScript;
    return (a = void 0 === a ? null : a) && "88" === a.getAttribute("data-jc") ? a : document.querySelector('[data-jc="88"]');
  }
  function Oa() {
    var a = void 0 === a ? .01 : a;
    if (!(Math.random() > a)) {
      var b = U();
      b = "https://" + (b && "true" === b.getAttribute("data-jc-rcd") ? "pagead2.googlesyndication-cn.com" : "pagead2.googlesyndication.com") + "/pagead/gen_204?id=jca&jc=88&version=";
      var c = (c = U()) && c.getAttribute("data-jc-version") || "unknown";
      T(window, b + c + "&sample=" + a);
    }
  }
  ;
  function V(a) {
    var b = this;
    this.h = !1;
    this.g = [];
    a(function (c) {
      Qa(b, c);
    });
  }
  function Qa(a, b) {
    if (!a.h) if (b instanceof V) b.then(function (c) {
      Qa(a, c);
    });else {
      a.h = !0;
      a.i = b;
      for (b = 0; b < a.g.length; ++b) Ra(a, a.g[b]);
      a.g = [];
    }
  }
  function Ra(a, b) {
    a.h ? b(a.i) : a.g.push(b);
  }
  V.prototype.then = function (a) {
    var b = this;
    return new V(function (c) {
      Ra(b, function (d) {
        c(a(d));
      });
    });
  };
  function Sa() {
    var a,
      b = new V(function (c) {
        a = c;
      });
    return new Ta(b, a);
  }
  function Ta(a, b) {
    this.promise = a;
    this.resolve = b;
  }
  ;
  function Ua(a, b) {
    try {
      a.i = b.jscd || "nocfg";
      var c = Ia(a.i);
      if ("" === N(c, 1) || "" === N(c, 6) || "" === N(c, 8) || !M(c, 3) && !/^https?:\/\//.test(N(c, 7))) c = null, a.s = 3;
    } catch (d) {
      if (/&quot;/.test(a.i)) return a.v = !0, b.jscd = a.i.replace(/&quot;/g, '"'), Ua(a, b);
      a.s = 2;
    }
    return c || null;
  }
  function Va(a, b) {
    a.l.then(function (c) {
      !c.block && a.h && "hidden" === a.h.style.visibility && (a.u = !0, a.h.style.visibility = "");
      var d = c.err;
      if ((a.g ? M(a.g, 5) : 1) || d) {
        var e = new Date().getTime() - a.A,
          f = a.g ? N(a.g, 4) : null;
        c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + (d ? "vtwerr" : "pvtw") + ("&eid=" + encodeURIComponent((a.g ? N(a.g, 6) : null) + "")) + ("&p=" + encodeURIComponent(f + "")) + ("&bl=" + (c.block ? 1 : 0)) + ("&twt=" + e);
        d && (c += "&erc=" + encodeURIComponent(d + ""), c += "&pr=" + encodeURIComponent(a.i));
        a.m && (c += "&st=" + a.m);
        a.u && (c += "&cns=1");
        a.v && (c += "&pfa=1");
        T(n, c);
      }
    });
    b ? (a.g = b, (b = n.document.getElementById(N(b, 8))) ? (a.h = b, M(a.g, 3) || (n["goog_wrapCb_" + N(a.g, 6)] = function (c) {
      c && null != c.block ? a.o(c) : X(a, 5);
    }, n["bllsn" + N(a.g, 6)] = function (c) {
      a.l.then(c);
    }, a.l.then(function (c) {
      c.block && T(n, N(a.g, 7));
    })), Wa(a), Oa()) : X(a, 4)) : X(a, a.s);
  }
  function Wa(a) {
    var b = n.document.createElement("script");
    var c = Ka(N(a.g, 1));
    b.src = c instanceof S && c.constructor === S ? c.g : "type_error:TrustedResourceUrl";
    La(b);
    b.addEventListener("load", function () {
      a.m = new Date().getTime() - a.A;
    });
    b.addEventListener("error", function () {
      X(a, 6);
    });
    c = "data-" + N(a.g, 4) + "-";
    b.setAttribute(c + "check-tag", "true");
    b.setAttribute(c + "parameters", N(a.g, 2));
    b.setAttribute(c + "container", N(a.g, 8));
    M(a.g, 3) || b.setAttribute(c + "callback", "goog_wrapCb_" + N(a.g, 6));
    try {
      a.h.parentNode.insertBefore(b, a.h.nextSibling);
    } catch (d) {
      X(a, 1);
    }
  }
  function X(a, b) {
    a.o({
      block: !1,
      err: b
    });
  }
  ;
  var Xa = U(),
    Y;
  if (Xa) {
    for (var Ya = {}, Za = Xa.attributes, Z = Za.length - 1; 0 <= Z; Z--) {
      var $a = Za[Z].name;
      0 === $a.indexOf("data-jcp-") && (Ya[$a.substring(9)] = Za[Z].value);
    }
    Y = Ya;
  } else Y = {};
  new function (a) {
    var b = Sa();
    this.l = b.promise;
    this.o = b.resolve;
    this.A = new Date().getTime();
    this.m = null;
    this.u = this.v = !1;
    Va(this, Ua(this, a));
  }(Y);
}).call(this);
document.write('\x3ca target\x3d\x22_blank\x22 id\x3d\x22img_anch_CNqL7tfw6IADFb_ZFgUddfUDdw\x22 href\x3d\x22https://adclick.g.doubleclick.net/pcs/click?xai\x3dAKAOjssrRm6I1gSKjgLlpFCM3WdoDMwpUok3Gu5EWY355NZTdxeYgtkIEdgEdXE_6mtSiqP82xinFdlfmhBwMpksEB7ghOOApYNjqGr8zETzyId11MW_ZM3YfH2LBHQ5DNheKsn68e0_F1yY7j6h9h7HGGJNpF6DXFXgKyF9LiX7ofhWGdYg-4pjBs7qSh0KOfcPIQMTDYeoZ0E-RONmsHCGKNAGI66wQB6IlBpqz5NBwLCCct2mdIJX8jjkt4pIY30fpsQloaUz0gjE-3LsEC4AbF8pqZrxsvoLsGsEXVSlgVa1L5lQ5rJ2dxp7y_Fcbx3kddnjU6S0eehl3wxpuBwNh0uTWEeRWsXl4ivN1XgUNbGQ99SHrBo0zZaQU4NWjbtYi4bZAhc6y9yWXEK_f59uWUoxTdVlilD1cViO9lIZruJbla7luYEK-FDbTOi2LrsL1DAKEKXeZb9jm5K3N_dY484AaCmlPGd8LN6TUQoigx7Rc9YqeiaiWotRMC1pbyLh9gYF_O0yYG17WpKFkX69sJtaFHhCnuFolcq4x-FoXalQW0itKpcPX3HpshR5MkFLZm1y--sWH7bpO-MfGSimqW8YEmZg1SRSCEzpF5ErjBS4X-YfeoG-mTlBmz1gpeP_QCHPPITinH4jxiyRn5SQMoGXRBXDSIhuVZrx-mNt-Dc04vbFJVnSQx3Gik14AeXwDn0-MRErAIrfDqzGQ0ojrL52P8xg8N3XlBFplcyeS9VajPnpmOOJ974RMLCmJ_6ya7w9gl-b1FZmmQRiKkgfYCu-mCdAvFC3GWtFXtjlmXGVyKxLvcJzC3eHhHEOl67JjrPCtJsa9r4n7W2j-8vrf-Ftn_67BsFa1EOqwseBQJmTXitVGJABvHzWGhTFD5zzom5eoz_yyjzndAY68CwjfMEzIZORnlhNf0d6QJHYJfhsEG4UITXA0g38gcvqRAWHkfWa2DTYHz9r5MSH0EA4zIEFX72GTeC8HCFHZZ_BunGVN_r-6MVTL9JkGBj5LCtXCvsmsl5YAebw4uqX3sS-gXd1re551xwDG1KD_cLLgEtUA5wLH4swL8kWOlpjj9o-qA32HKYgIL4OxJieILSWcMz_gWuiqfJc3ZFOMyGgOtPiyRhx-75i2HVRtdwsAFbaTIlwVnTU0mhclXptwMww5ygMYhzKBj27i9RjJ8iOuF_nhYllPk8yWkM3WPTDjg2BME3QUU8mNA_V71uUS2p27aPxLzDs3Bplz2tuQKFaCO9SS6ctt8EXNpPfyG8zMv5I33Z4ubtiJgwvzea6mvSb5sOR3XJh614PpAbah8UiGBUHWtJ7yFjj1EjxkAGbt4zIj5da1i3C3yag92Xvf5WhkTS1HKx0KVnQ4dxonlsYpumiFt0xz3HzFPkYk9CjoJzsuDNhJpmHLlrdcx9VLwA8-mOzP-M6u79qDbmRiLqkyCeu\x26amp;sai\x3dAMfl-YQAR808cSwhzzLnVNw3k-c9XNxZ3Vlj9BZuZQr1QY9-IiD1b-jJlW0DjVm4dlXEkIm8fl1uhHDd_HjjW6xARI8WRmX4lrtoSaP0QEyaU8cG8m8AgRDELKZhAU2r6LQDP-OHPrsje-izpCN_vETOxBZhgpzu9TAQt3me-xNMyJ76cLMW3JUYzxT_fg9nLv0jdvgwZt0PoLPzluyqrIiFrlfO6ljupORvLMioKC6CceIGtyTcq9YrQ1T1hbPLxWver3K8m8-vBZQt-Xpw6SXQ7woJzbLQfYHVCObZpTjQyiI5g9AbOu5RFST_H7L6sEGXuRYj2NFVMWKTdc-g8ILgSzRSfOB_dmAarJC5tSYjTWkhAhGACqYKcmnPXQ\x26amp;sig\x3dCg0ArKJSzBPld44QQAQC\x26amp;cry\x3d1\x26amp;fbs_aeid\x3d[gw_fbsaeid]\x26amp;urlfix\x3d1\x26amp;adurl\x3dhttps://www.hiltonwaikoloavillage.com/%3FWT.mc_id%3DzLADA0AA1HI2DMH3DV3604AMPDSP_Mar5STATICPS6KOAHWHH7EN8i101511_330873403_27392001_522699588%26_330873403_27392001_522699588%26dclid%3D%25edclid!\x22\x3e\x3cimg src\x3d\x22https://s0.2mdn.net/simgad/7110372330927729560\x22 alt\x3d\x22Advertisement\x22 border\x3d\x220\x22 width\x3d\x22160\x22 height\x3d\x22600\x22 style\x3d\x22display:block\x22\x3e\x3c/a\x3e\x3cscript data-jc\x3d\x2274\x22 data-jc-version\x3d\x22r20230816\x22 data-jcp-a-id\x3d\x22img_anch_CNqL7tfw6IADFb_ZFgUddfUDdw\x22 data-jcp-for-sure-open-browser\x3d\x22false\x22 data-jcp-for-sure-open-custom-tabs\x3d\x22false\x22 data-jcp-cc-overlay\x3d\x22\x22 data-jcp-cc-button\x3d\x22\x22 data-jcp-is-fledge\x3d\x22false\x22 data-jcp-turtlex-event-ad-signals\x3d\x22\x22\x3e(function(){/*  Copyright The Closure Library Authors. SPDX-License-Identifier: Apache-2.0 */ var aa\x3d\x22function\x22\x3d\x3dtypeof Object.defineProperties?Object.defineProperty:function(a,b,d){if(a\x3d\x3dArray.prototype||a\x3d\x3dObject.prototype)return a;a[b]\x3dd.value;return a};function ba(a){a\x3d[\x22object\x22\x3d\x3dtypeof globalThis\x26\x26globalThis,a,\x22object\x22\x3d\x3dtypeof window\x26\x26window,\x22object\x22\x3d\x3dtypeof self\x26\x26self,\x22object\x22\x3d\x3dtypeof global\x26\x26global];for(var b\x3d0;b\x3ca.length;++b){var d\x3da[b];if(d\x26\x26d.Math\x3d\x3dMath)return d}throw Error(\x22Cannot find global object\x22);}var ca\x3dba(this); function da(a,b){if(b)a:{var d\x3dca;a\x3da.split(\x22.\x22);for(var c\x3d0;c\x3ca.length-1;c++){var e\x3da[c];if(!(e in d))break a;d\x3dd[e]}a\x3da[a.length-1];c\x3dd[a];b\x3db(c);b!\x3dc\x26\x26null!\x3db\x26\x26aa(d,a,{configurable:!0,writable:!0,value:b})}}var ea\x3d\x22function\x22\x3d\x3dtypeof Object.create?Object.create:function(a){function b(){}b.prototype\x3da;return new b},m; if(\x22function\x22\x3d\x3dtypeof Object.setPrototypeOf)m\x3dObject.setPrototypeOf;else{var p;a:{var fa\x3d{a:!0},q\x3d{};try{q.__proto__\x3dfa;p\x3dq.a;break a}catch(a){}p\x3d!1}m\x3dp?function(a,b){a.__proto__\x3db;if(a.__proto__!\x3d\x3db)throw new TypeError(a+\x22 is not extensible\x22);return a}:null}var r\x3dm,ha\x3d\x22function\x22\x3d\x3dtypeof Object.assign?Object.assign:function(a,b){for(var d\x3d1;d\x3carguments.length;d++){var c\x3darguments[d];if(c)for(var e in c)Object.prototype.hasOwnProperty.call(c,e)\x26\x26(a[e]\x3dc[e])}return a}; da(\x22Object.assign\x22,function(a){return a||ha});var t\x3dthis||self;var v,w;a:{for(var x\x3d[\x22CLOSURE_FLAGS\x22],y\x3dt,z\x3d0;z\x3cx.length;z++)if(y\x3dy[x[z]],null\x3d\x3dy){w\x3dnull;break a}w\x3dy}var A\x3dw\x26\x26w[610401301];v\x3dnull!\x3dA?A:!1;var B,C\x3dt.navigator;B\x3dC?C.userAgentData||null:null;function D(a){return v?B?B.brands.some(function(b){return(b\x3db.brand)\x26\x26-1!\x3db.indexOf(a)}):!1:!1}function E(a){var b;a:{if(b\x3dt.navigator)if(b\x3db.userAgent)break a;b\x3d\x22\x22}return-1!\x3db.indexOf(a)};function F(){return v?!!B\x26\x260\x3cB.brands.length:!1}function G(){return F()?D(\x22Chromium\x22):(E(\x22Chrome\x22)||E(\x22CriOS\x22))\x26\x26!(F()?0:E(\x22Edge\x22))||E(\x22Silk\x22)};var ia\x3dF()?!1:E(\x22Trident\x22)||E(\x22MSIE\x22);!E(\x22Android\x22)||G();G();E(\x22Safari\x22)\x26\x26(G()||(F()?0:E(\x22Coast\x22))||(F()?0:E(\x22Opera\x22))||(F()?0:E(\x22Edge\x22))||(F()?D(\x22Microsoft Edge\x22):E(\x22Edg/\x22))||F()\x26\x26D(\x22Opera\x22));var H\x3d{},I\x3dnull;var ja\x3d\x22undefined\x22!\x3d\x3dtypeof Uint8Array,ka\x3d!ia\x26\x26\x22function\x22\x3d\x3d\x3dtypeof btoa;var J\x3d\x22function\x22\x3d\x3d\x3dtypeof Symbol\x26\x26\x22symbol\x22\x3d\x3d\x3dtypeof Symbol()?Symbol():void 0,la\x3dJ?function(a,b){a[J]|\x3db}:function(a,b){void 0!\x3d\x3da.g?a.g|\x3db:Object.defineProperties(a,{g:{value:b,configurable:!0,writable:!0,enumerable:!1}})};function oa(a){var b\x3dK(a);1!\x3d\x3d(b\x261)\x26\x26(Object.isFrozen(a)\x26\x26(a\x3dArray.prototype.slice.call(a)),L(a,b|1))} var K\x3dJ?function(a){return a[J]|0}:function(a){return a.g|0},M\x3dJ?function(a){return a[J]}:function(a){return a.g},L\x3dJ?function(a,b){a[J]\x3db}:function(a,b){void 0!\x3d\x3da.g?a.g\x3db:Object.defineProperties(a,{g:{value:b,configurable:!0,writable:!0,enumerable:!1}})};function pa(){var a\x3d[];la(a,1);return a}function N(a){a\x3da\x3e\x3e11\x261023;return 0\x3d\x3d\x3da?536870912:a};var qa\x3d{};function O(a){return null!\x3d\x3da\x26\x26\x22object\x22\x3d\x3d\x3dtypeof a\x26\x26!Array.isArray(a)\x26\x26a.constructor\x3d\x3d\x3dObject}var P,Q,ra\x3d[];L(ra,39);Q\x3dObject.freeze(ra);var sa;function ta(a,b,d){null\x3d\x3da\x26\x26(a\x3dsa);sa\x3dvoid 0;if(null\x3d\x3da){var c\x3d96;d?(a\x3d[d],c|\x3d512):a\x3d[];b\x26\x26(c\x3dc\x26-2095105|(b\x261023)\x3c\x3c11)}else{if(!Array.isArray(a))throw Error();c\x3dK(a);if(c\x2664)return a;c|\x3d64;if(d\x26\x26(c|\x3d512,d!\x3d\x3da[0]))throw Error();a:{d\x3da;var e\x3dd.length;if(e){var g\x3de-1,f\x3dd[g];if(O(f)){c|\x3d256;b\x3d+!!(c\x26512)-1;e\x3dg-b;1024\x3c\x3de\x26\x26(ua(d,b,f),e\x3d1023);c\x3dc\x26-2095105|(e\x261023)\x3c\x3c11;break a}}b\x26\x26(f\x3d+!!(c\x26512)-1,b\x3dMath.max(b,e-f),1024\x3cb\x26\x26(ua(d,f,{}),c|\x3d256,b\x3d1023),c\x3dc\x26-2095105|(b\x261023)\x3c\x3c11)}}L(a,c);return a} function ua(a,b,d){for(var c\x3d1023+b,e\x3da.length,g\x3dc;g\x3ce;g++){var f\x3da[g];null!\x3df\x26\x26f!\x3d\x3dd\x26\x26(d[g-b]\x3df)}a.length\x3dc+1;a[c]\x3dd};function va(a,b){return wa(b)} function wa(a){switch(typeof a){case \x22number\x22:return isFinite(a)?a:String(a);case \x22boolean\x22:return a?1:0;case \x22object\x22:if(a\x26\x26!Array.isArray(a)\x26\x26ja\x26\x26null!\x3da\x26\x26a instanceof Uint8Array){if(ka){for(var b\x3d\x22\x22,d\x3d0,c\x3da.length-10240;d\x3cc;)b+\x3dString.fromCharCode.apply(null,a.subarray(d,d+\x3d10240));b+\x3dString.fromCharCode.apply(null,d?a.subarray(d):a);a\x3dbtoa(b)}else{void 0\x3d\x3d\x3db\x26\x26(b\x3d0);if(!I){I\x3d{};d\x3d\x22ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\x22.split(\x22\x22);c\x3d[\x22+/\x3d\x22,\x22+/\x22,\x22-_\x3d\x22,\x22-_.\x22,\x22-_\x22];for(var e\x3d 0;5\x3ee;e++){var g\x3dd.concat(c[e].split(\x22\x22));H[e]\x3dg;for(var f\x3d0;f\x3cg.length;f++){var h\x3dg[f];void 0\x3d\x3d\x3dI[h]\x26\x26(I[h]\x3df)}}}b\x3dH[b];d\x3dArray(Math.floor(a.length/3));c\x3db[64]||\x22\x22;for(e\x3dg\x3d0;g\x3ca.length-2;g+\x3d3){var l\x3da[g],k\x3da[g+1];h\x3da[g+2];f\x3db[l\x3e\x3e2];l\x3db[(l\x263)\x3c\x3c4|k\x3e\x3e4];k\x3db[(k\x2615)\x3c\x3c2|h\x3e\x3e6];h\x3db[h\x2663];d[e++]\x3df+l+k+h}f\x3d0;h\x3dc;switch(a.length-g){case 2:f\x3da[g+1],h\x3db[(f\x2615)\x3c\x3c2]||c;case 1:a\x3da[g],d[e]\x3db[a\x3e\x3e2]+b[(a\x263)\x3c\x3c4|f\x3e\x3e4]+h+c}a\x3dd.join(\x22\x22)}return a}}return a};function xa(a,b,d,c,e,g){if(null!\x3da){if(Array.isArray(a))a\x3de\x26\x260\x3d\x3da.length\x26\x26K(a)\x261?void 0:g\x26\x26K(a)\x262?a:ya(a,b,d,void 0!\x3d\x3dc,e,g);else if(O(a)){var f\x3d{},h;for(h in a)f[h]\x3dxa(a[h],b,d,c,e,g);a\x3df}else a\x3db(a,c);return a}}function ya(a,b,d,c,e,g){var f\x3dc||d?K(a):0;c\x3dc?!!(f\x2632):void 0;a\x3dArray.prototype.slice.call(a);for(var h\x3d0;h\x3ca.length;h++)a[h]\x3dxa(a[h],b,d,c,e,g);d\x26\x26d(f,a);return a}function za(a){return a.h\x3d\x3d\x3dqa?a.toJSON():wa(a)};function S(a,b,d){this.g\x3dta(a,b,d)}S.prototype.toJSON\x3dfunction(){if(P)var a\x3dT(this,this.g,!1);else a\x3dya(this.g,za,void 0,void 0,!1,!1),a\x3dT(this,a,!0);return a};function Aa(a){P\x3d!0;try{return JSON.stringify(a.toJSON(),va)}finally{P\x3d!1}}S.prototype.h\x3dqa;S.prototype.toString\x3dfunction(){return T(this,this.g,!1).toString()}; function T(a,b,d){var c\x3da.constructor.i,e\x3dN(M(d?a.g:b)),g\x3d!1;if(c){if(!d){b\x3dArray.prototype.slice.call(b);var f;if(b.length\x26\x26O(f\x3db[b.length-1]))for(g\x3d0;g\x3cc.length;g++)if(c[g]\x3e\x3de){Object.assign(b[b.length-1]\x3d{},f);break}g\x3d!0}e\x3db;d\x3d!d;f\x3dM(a.g);a\x3dN(f);f\x3d+!!(f\x26512)-1;for(var h,l,k\x3d0;k\x3cc.length;k++)if(l\x3dc[k],l\x3ca){l+\x3df;var n\x3de[l];null\x3d\x3dn?e[l]\x3dd?Q:pa():d\x26\x26n!\x3d\x3dQ\x26\x26oa(n)}else h||(n\x3dvoid 0,e.length\x26\x26O(n\x3de[e.length-1])?h\x3dn:e.push(h\x3d{})),n\x3dh[l],null\x3d\x3dh[l]?h[l]\x3dd?Q:pa():d\x26\x26n!\x3d\x3dQ\x26\x26oa(n)}c\x3db.length;if(!c)return b; var ma;if(O(h\x3db[c-1])){a:{var u\x3dh;e\x3d{};d\x3d!1;for(var na in u)a\x3du[na],Array.isArray(a)\x26\x26a!\x3da\x26\x26(d\x3d!0),null!\x3da?e[na]\x3da:d\x3d!0;if(d){for(var Ka in e){u\x3de;break a}u\x3dnull}}u!\x3dh\x26\x26(ma\x3d!0);c--}for(;0\x3cc;c--){h\x3db[c-1];if(null!\x3dh)break;var Ia\x3d!0}if(!ma\x26\x26!Ia)return b;var R;g?R\x3db:R\x3dArray.prototype.slice.call(b,0,c);b\x3dR;g\x26\x26(b.length\x3dc);u\x26\x26b.push(u);return b};function U(a){this.g\x3dta(a)}U.prototype\x3dea(S.prototype);U.prototype.constructor\x3dU;if(r)r(U,S);else for(var V in S)if(\x22prototype\x22!\x3dV)if(Object.defineProperties){var Ba\x3dObject.getOwnPropertyDescriptor(S,V);Ba\x26\x26Object.defineProperty(U,V,Ba)}else U[V]\x3dS[V];var Ca\x3d/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Da(a,b,d,c){var e\x3d/^(https?:[^:?]+[/]pcs[/]click[^/]+?)(?:\x26nx[^\x26]+\x26ny[^\x26]+\x26dim[^\x26]+)?(\x26adurl\x3d.*)/.exec(a);return e?e[1]+(\x22\x26nx\x3d\x22+b+\x22\x26ny\x3d\x22+d+\x22\x26dim\x3d\x22+c)+e[2]:a}function Ea(a){var b\x3da.currentTarget,d\x3db.querySelector(\x22img[alt]\x22);d\x26\x26(a\x3dDa(b.href,+Math.round(a.clientX-d.offsetLeft),+Math.round(a.clientY-d.offsetTop),+d.width+\x22x\x22+ +d.height),Ca.test(a)\x26\x26(b.href\x3da))} function Fa(a){var b\x3dt;b\x3dvoid 0\x3d\x3d\x3db?window:b;var d\x3dnew U;if(null!\x3da\x26\x26\x22string\x22!\x3d\x3dtypeof a)throw Error();var c\x3dd.g,e\x3dM(c);if(e\x262)throw Error();a:{var g\x3dN(e);if(1\x3e\x3dg){var f\x3de;if(e\x26256)g\x3dc[c.length-1];else{if(null\x3d\x3da)break a;g\x3dc[g+(+!!(e\x26512)-1)]\x3d{};f|\x3d256}g[1]\x3da;f!\x3d\x3de\x26\x26L(c,f)}else c[1+(+!!(e\x26512)-1)]\x3da,e\x26256\x26\x26(a\x3dc[c.length-1],1 in a\x26\x26delete a[1])}var h;null\x3d\x3db||null\x3d\x3d(h\x3db.fence)||h.setReportEventDataForAutomaticBeacons({eventType:\x22reserved.top_navigation\x22,eventData:Aa(d),destination:[\x22buyer\x22]});var l; null\x3d\x3db||null\x3d\x3d(l\x3db.fence)||l.reportEvent({eventType:\x22click\x22,eventData:Aa(d),destination:[\x22buyer\x22]});var k;null\x3d\x3db||null\x3d\x3d(k\x3db.fence)||k.reportEvent({eventType:\x22reserved.top_navigation\x22,destination:[\x22component-seller\x22]});var n;null\x3d\x3db||null\x3d\x3d(n\x3db.fence)||n.reportEvent({eventType:\x22click\x22,destination:[\x22component-seller\x22]})} function Ga(a,b){void 0!\x3dt.AFMA_Communicator\x26\x26void 0!\x3dt.AFMA_Communicator.sendMessage\x26\x26(a.preventDefault(),t.AFMA_Communicator.sendMessage(\x22open\x22,{a:\x22app\x22,u:a.currentTarget.href,system_browser:!0,use_first_package:!0,use_running_process:!0,use_custom_tabs:b}))};var W,X\x3ddocument.currentScript;W\x3d(X\x3dvoid 0\x3d\x3d\x3dX?null:X)\x26\x26\x2274\x22\x3d\x3d\x3dX.getAttribute(\x22data-jc\x22)?X:document.querySelector(\x27[data-jc\x3d\x2274\x22]\x27);if(null\x3d\x3dW)throw Error(\x22JSC not found 74\x22);for(var Ha\x3d{},Y\x3dW.attributes,Z\x3dY.length-1;0\x3c\x3dZ;Z--){var Ja\x3dY[Z].name;0\x3d\x3d\x3dJa.indexOf(\x22data-jcp-\x22)\x26\x26(Ha[Ja.substring(9)]\x3dY[Z].value)} (function(a){var b\x3ddocument.getElementById(a[\x22a-id\x22]),d\x3d\x22true\x22\x3d\x3d\x3da[\x22for-sure-open-browser\x22],c\x3d\x22true\x22\x3d\x3d\x3da[\x22for-sure-open-custom-tabs\x22],e\x3da[\x22cc-overlay\x22],g\x3da[\x22cc-button\x22],f\x3de?document.getElementById(e):null,h\x3dg?document.getElementById(g):null;if(\x22true\x22\x3d\x3d\x3da[\x22is-fledge\x22]){var l\x3da[\x22turtlex-event-ad-signals\x22];h?h.addEventListener(\x22click\x22,function(){Fa(l)}):b.addEventListener(\x22click\x22,function(){Fa(l)})}else if(b.addEventListener(\x22mousedown\x22,Ea),f\x26\x26h\x26\x26f.addEventListener(\x22mousedown\x22,function(k){k\x3dDa(h.href, +Math.round(k.clientX-f.offsetLeft),+Math.round(k.clientY-f.offsetTop),+f.clientWidth+\x22x\x22+ +f.clientHeight);Ca.test(k)\x26\x26(h.href\x3dk)}),d||c)b.addEventListener(\x22click\x22,function(k){Ga(k,c)}),h\x26\x26h.addEventListener(\x22click\x22,function(k){Ga(k,c)})})(Ha);}).call(this);\x3c/script\x3e');
document.write('\x3c/div\x3e');
document.write('\x3cstyle\x3ediv{margin:0;padding:0;}.abgcp{height:15px;padding-right:1px;padding-top:1px;padding-left:9px;padding-bottom:24px;right:0px;top:0px;position:absolute;width:31px;z-index:2147483646;}.abgc{display:block;height:15px;position:absolute;right:1px;top:1px;text-rendering:geometricPrecision;z-index:2147483646;}.abgb{display:inline-block;height:15px;}.abgc,.abgcp,.jar .abgc,.jar .abgcp,.jar .cbb{opacity:1;}.abgc{cursor:pointer;}.cbb{cursor:pointer;height:15px;width:15px;z-index:2147483646;background-color:#ffffff;opacity:0;}.cbb svg{position:absolute;top:0;right:0;height:15px;width:15px;stroke:#00aecd;fill:#00aecd;stroke-width:1.25;}.abgb{position:absolute;right:16px;top:0px;}.cbb{position:absolute;right:0px;top:0px;}.abgs{display:none;height:100%;}.abgl{text-decoration:none;}.abgs svg,.abgb svg{display:inline-block;height:15px;width:auto;vertical-align:top;}.abgc .il-wrap{background-color:#ffffff;height:15px;white-space:nowrap;}.abgc .il-wrap.exp{border-bottom-left-radius:5px;}.abgc .il-text,.abgc .il-icon{display:inline-block;}.abgc .il-text{padding-right:1px;padding-left:5px;height:15px;width:68px;}.abgc .il-icon{height:15px;width:15px;}.abgc .il-text svg{fill:#000000;}.abgc .il-icon svg{fill:#00aecd}\x3c/style\x3e\x3cdiv id\x3d\x22abgcp\x22 class\x3d\x22abgcp\x22\x3e\x3cdiv id\x3d\x22abgc\x22 class\x3d\x22abgc\x22 dir\x3d\x22ltr\x22\x3e\x3cdiv id\x3d\x22abgb\x22 class\x3d\x22abgb\x22\x3e\x3cdiv class\x3d\x22il-wrap\x22\x3e\x3cdiv class\x3d\x22il-icon\x22\x3e\x3csvg xmlns\x3d\x22http://www.w3.org/2000/svg\x22 xmlns:xlink\x3d\x22http://www.w3.org/1999/xlink\x22 viewBox\x3d\x220 0 15 15\x22\x3e\x3cpath d\x3d\x22M7.5,1.5a6,6,0,1,0,0,12a6,6,0,1,0,0,-12m0,1a5,5,0,1,1,0,10a5,5,0,1,1,0,-10ZM6.625,11l1.75,0l0,-4.5l-1.75,0ZM7.5,3.75a1,1,0,1,0,0,2a1,1,0,1,0,0,-2Z\x22\x3e\x3c/path\x3e\x3c/svg\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv id\x3d\x22abgs\x22 class\x3d\x22abgs\x22\x3e\x3ca id\x3d\x22abgl\x22 class\x3d\x22abgl\x22 href\x3d\x22https://adssettings.google.com/whythisad?source\x3ddisplay\x26amp;reasons\x3dAVs1JPLpx3pJT1bhyg-zuvyXc3Ah3a2T_lCGUGZZt5mrFFUrBuyKKJZ1FV5r4Rzh92YZtR2MZr8loJfn368UBDEIx71BON4eWQkODgaVwWsPDOwZ6FSsQ4oaUHiJCWqVFJURKgI-rudDwrLgQ4yQ_ABRv_hL2Df33lUFDsO-2oanPNcJ-yD_tR1SpG5ioreNBnhcnayLJWTpAu1YoWYR1MI9-mcKw--DRzgtGhIrepg0YNivuNtROo6E28enixjTqp0qTwd1uARwLnAEqxOpYsqZvo_ND5_r5TLkJyZk9VLSDv2AIgOiyMZzmPuhPZCLWMr0e97WWO8BW8AxVfDoeFgX9FIOPHfbUiy43Gxt7GjDqXgD39AZGS2ockHABU9vxxlAy7R7XB1w_WeTHETZpRidCk2S9TxTsiPIn6nZ59sJ_YgzxUIMMKqQMmET_MhAk2qVSEBLA4pSkPiv4LpAhLp64NbG91SsTseN0Pr1u8x1IyROs59I6ObrE6iZVR_tsdvaplLMASNVDjtLI-RLQaDAWyO-C63Yut1ALFoqAh2A2XK3tmUvgq1ynFbopI-PG4CEznAyQgWUvN2ONzXPPmVJjNDWTCv50F0aYf_6zxplxrg8mDY1GUdyk_JdMzF2vJHWP1GwycjW7PlIGtDoRLTSPQu85_BrwJY_7uzRQmcUf9UfocxmZ2GMsk6ZC3xM3NwHj9ClrVal-TEVeVxOSp8wCXMmS5hH4tUtQ1rqudTrHC9F9Xxq8pnASW-7iBNhU_lm7JV-xH6evP1gHAnCErv_CjGUKCK22YkGa7UNsQfixeSC-f9Ki_9YwZV1KAdB5DuTdwNjbKgNp3m1MW-LgngieHGG16JN2NtKs3SMj_yMQHbM4Ff8Sg7YszHLCQ2Na8TBH6nSTVq-b1lt7Q-IMoybs8_gWnwo-qdYloSg8Ko4tMI7HAhYBLCTJqQAelK_AR7QvXfEz-IOO1Lggf6ZDNeFqZhjZ-Fa_NSz726E3pfCpalIEzJkWS1cnE031C8QArHsVPeubOrqKtxMnKt3EnWroSuhs5tXbh6V9ji9A7oZd07KhJKSjCaGGGCEwx4wiDrHiI1J_NT3ZLc2g9CUZb2vKwScQMji2pGmPBG1kzeHFI7ogdMx_-9C8n5Md-hsd6_Sa0HKXKuUF2lv1s8sWnHlMOnf1zUutGhZWtpvXpvF5eV2q7qpAYgOp94mftsCsICnRUPZ2lJkjLkhSLZ4lxJ82dEIzXUEa4o5urycNp1OGQX6Wt_ogZLhyNOh9BSWJZqlu9bWwRJqEzII63a_C8Hk6b0ewph-7BTBIem_So2mCl8ZN5xC-FdMl8gJJl2GnddU-aDykGRACpkfB-q1iMg90sjKqKE3ZdZA9E0cw1_zkibLQXNP3msNaXAipedaNdmS1u2bp1R16wCybrsXVOtc04L9FmwvdCLY4qV71tatN9HSmspShR9q1fbZ7S5wk-AAHeuDdltAsgW2R-8jgCuC5-6I1EIxav2wYFz1mSlfplYVsnFMcO-Yp_vISn0FNCdAwpw_9W09q9Fbqi64RIUnKiWpEWtW5Swd6MSPwsS42I7qvbLZiGXCXo-DpVzjwgWGl-AKlie4owOOoE9AE1_nSK2S7j3-rm-A-yUsFqVteA_rSheyQ4XpirOsstF6R7mQyuVz9iFhoUMUKtBJtao-8QBsVb-oZdi5H2mCRzOdV_hKl_owWtxD2tjApXWumcw-qNwiQ0EHbcIJY2sZNYA9dFHMqTikuCSk4w\x22 target\x3d\x22_blank\x22\x3e\x3c/a\x3e\x3c/div\x3e\x3cdiv id\x3d\x22cbb\x22 class\x3d\x22cbb\x22 tabindex\x3d\x220\x22 role\x3d\x22button\x22\x3e\x3csvg xmlns\x3d\x22http://www.w3.org/2000/svg\x22 xmlns:xlink\x3d\x22http://www.w3.org/1999/xlink\x22 viewBox\x3d\x220 0 15 15\x22\x3e\x3cpath d\x3d\x22M3.25,3.25l8.5,8.5M11.75,3.25l-8.5,8.5\x22/\x3e\x3c/svg\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cstyle\x3e.mute_panel{z-index:2147483646;}.abgac{position:absolute;left:0px;top:0px;z-index:2147483646;display:none;width:100%;height:100%;background-color:#FAFAFA;}.mlsc{height:100%;display:flex;justify-content:center;align-items:center;}.mls{animation:mlskf 2s linear infinite;height:50%;width:50%;}.mlsd{stroke-dasharray:1,189;stroke-dashoffset:0;animation:mlsdkf 1.4s ease-in-out infinite;}@keyframes mlskf{100%{transform:rotate(360deg);}}@keyframes mlsdkf{0%{stroke-dasharray:1,189;stroke-dashoffset:0;}50%{stroke-dasharray:134,189;stroke-dashoffset:-53px;}100%{stroke-dasharray:134,189;stroke-dashoffset:-188px;}}\x3c/style\x3e\x3cdiv id\x3d\x22mute_panel\x22 class\x3d\x22mute_panel\x22 aria-hidden\x3d\x22true\x22\x3e\x3cdiv id\x3d\x22abgac\x22 class\x3d\x22abgac\x22 aria-hidden\x3d\x22true\x22\x3e\x3cdiv id\x3d\x22mlsc\x22 class\x3d\x22mlsc\x22\x3e\x3csvg class\x3d\x22mls\x22 viewBox\x3d\x2250 50 100 100\x22\x3e\x3ccircle class\x3d\x22mlsd\x22 cx\x3d\x22100\x22 cy\x3d\x22100\x22 r\x3d\x2230\x22 fill\x3d\x22none\x22 stroke\x3d\x22#9E9E9E\x22 stroke-width\x3d\x223\x22/\x3e\x3c/svg\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cscript data-jc\x3d\x2260\x22 src\x3d\x22https://pagead2.googlesyndication.com/pagead/js/r20230816/r20110914/abg_lite.js\x22 async data-jc-version\x3d\x22r20230816\x22 data-jcp-attribution-data\x3d\x22[[null,\x26quot;https://googleads.g.doubleclick.net/pagead/images/mtad/x_blue.png\x26quot;,null,\x26quot;https://googleads.g.doubleclick.net/pagead/images/mtad/x_blue.png\x26quot;,\x26quot;https://googleads.g.doubleclick.net/pagead/interaction/?ai\x3dCcQ1pkMrgZIPkL8q-vcAPm_Cp8Aqrj4Ckcovg2dOBEuDkoMLlARABIKiyhXxgiYOAgPQToAGsj6jlAsgBCagDAcgDmwSqBP8BT9Do-x3HtqVDOZW_h6jKBgM1JSRiGqJcz_D4ZwPaDwrqOSul5x9PQYcIgDGQsQVvTp6CydJZiaqJtTTP8xPrj_jHFnzHIgfMSgsShZEt5PN7LTmgvwcVDUnVvdBOLo8wAKA3KeZ3vYWdMgn0Sv2a2wCGzQuGs3dVAow6XMIKSLQRdq4wsKfnaw2UYNfqRFZOgPDZgzZUR3Gb-kb8GOdLmH8yEzvEcixyH3R2dXg9gynr-Uh8VK5a9K8kxreLVf7-4ph3cYc5v1F07sv7Tt1wLMvP_XLXKho6NwhdlO5oqnXcHAFibXaI3buLwJCKXDWrMvZDqbD_yXhIrQCSfMA8wAS4j7m1zATgBAOQBgGgBkyAB7zw15oBqAfZtrECqAeOzhuoB5PYG6gH7paxAqgH_p6xAqgHpKOxAqgH1ckbqAemvhuoB5oGqAfz0RuoB5bYG6gHqpuxAqgHg62xAqgH_56xAqgH35-xAtgHANIIFAiAYRABGB0yAooCOgKAQEi9_cE68ggbYWR4LXN1YnN5bi04NTQ5NDMzMTA4NjM3ODI1gAoDmAsByAsBgAwBqg0CSlDIDQGwE56EtBTQEwDYEwqIFAbYFAHQFQH4FgGAFwHoFwE\\u0026sigh\x3dOM9n14pWnG8\\u0026cid\x3dCAQSOwBpAlJWmN_J9etfFS6MDVfjxqyQ3abetMciVf5_xR1fuBYHlQ-NLgXIxQWZLNjpHdcr1UfddScMJHTwGAE\x26quot;,\x26quot;8Hcm7yLEOGIIi-DZ04ESEPqGsJdMGOv59ZoBIhloaWx0b253YWlrb2xvYXZpbGxhZ2UuY29tMggIBRMYjoMKFEIXY2EtcHViLTI5MzA4MDUxMDQ0MTgyMDRIBlgAcAE\x26quot;,[\x26quot;user_feedback_menu_interaction\x26quot;,\x26quot;\x26quot;,0],null,null,null,null,\x26quot;ما الخلل في هذا الإعلان؟\x26quot;,null,\x26quot;https://googleads.g.doubleclick.net/pagead/images/mtad/back_blue.png\x26quot;,\x26quot;شكرًا جزيلاً على تعليقاتك.\x26quot;,\x26quot;سنراجع هذا الإعلان لتحسين التجربة في المستقبل.\x26quot;,\x26quot;شكرًا جزيلاً على تعليقاتك.\x26quot;,\x26quot;سنستخدم تعليقاتك لمراجعة الإعلانات على هذا الموقع.\x26quot;,null,null,null,\x26quot;إغلاق الإعلان: %1$d\x26quot;,\x26quot;Ads by Google\x26quot;,\x26quot;https://googleads.g.doubleclick.net/pagead/images/mtad/abg_blue.png\x26quot;,\x26quot;https://www.google.com/url?ct\x3dabg\\u0026q\x3dhttps://www.google.com/adsense/support/bin/request.py%3Fcontact%3Dabg_afc%26url%3Dhttps://www.elwatannews.com/%26gl%3DJP%26hl%3Dar%26ai0%3D\\u0026usg\x3dAOvVaw2URtlgD5LGY_CD04eFBYdN\x26quot;,\x26quot;https://googleads.g.doubleclick.net/pagead/images/mtad/x_blue.png\x26quot;,1,[[\x26quot;إرسال ملاحظات\x26quot;,[\x26quot;user_feedback_menu_option\x26quot;,\x26quot;1\x26quot;,1],[\x26quot;ما الخلل في هذا الإعلان؟\x26quot;,[[\x26quot;غير مهتم بهذا الإعلان\x26quot;,[\x26quot;mute_survey_option\x26quot;,\x26quot;7\x26quot;,1]],[\x26quot;إعلان يحجب المحتوى\x26quot;,[\x26quot;mute_survey_option\x26quot;,\x26quot;3\x26quot;,1]],[\x26quot;رأيت هذا الإعلان عدة مرات\x26quot;,[\x26quot;mute_survey_option\x26quot;,\x26quot;2\x26quot;,1]],[\x26quot;كان الإعلان غير ملائم\x26quot;,[\x26quot;mute_survey_option\x26quot;,\x26quot;8\x26quot;,1]]]],[\x26quot;user_feedback_undo\x26quot;,\x26quot;1\x26quot;,1]]],[\x26quot;https://googleads.g.doubleclick.net/pagead/images/adchoices/iconx2-000000.png\x26quot;,\x26quot;خيارات الإعلان\x26quot;,\x26quot;تم إغلاق الإعلان بواسطة %1$s\x26quot;,null,\x26quot;https://www.gstatic.com/images/branding/googlelogo/2x/googlelogo_dark_color_84x28dp.png\x26quot;,\x26quot;إرسال ملاحظات\x26quot;,\x26quot;شكرًا لك. تساعد التعليقات على تحسين خدمة \\\x26quot;إعلانات Google\\\x26quot;\x26quot;,null,null,null,\x26quot;https://googleads.g.doubleclick.net/pagead/images/abg/iconx2-000000.png\x26quot;,\x26quot;إعلانات Google\x26quot;,null,\x26quot;الاطّلاع على إعدادات إعلانات Google\x26quot;,null,\x26quot;https://www.gstatic.com\x26quot;,\x26quot;\x26quot;,\x26quot;إعلانات %1$s\x26quot;,\x26quot;إعدادات الإعلان\x26quot;,\x26quot;https://adssettings.google.com\x26quot;,null,null,null,0,null,null,null,0],\x26quot;AB3afGEAAAYTW1tbW251bGwsWzEwXSxudWxsLG51bGwsbnVsbCxbIjgwNDA0Il0sbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLFtudWxsLCIzMjQ4OTM5MzEiXV0sW251bGwsImh0dHBzOi8vZ29vZ2xlYWRzLmcuZG91YmxlY2xpY2submV0L3BhZ2VhZC9pbnRlcmFjdGlvbi8_YWk9Q2NRMXBrTXJnWklQa0w4cS12Y0FQbV9DcDhBcXJqNENrY292ZzJkT0JFdURrb01MbEFSQUJJS2l5aFh4Z2lZT0FnUFFUb0FHc2o2amxBc2dCQ2FnREFjZ0Rtd1NxQlA4QlQ5RG8teDNIdHFWRE9aV19oNmpLQmdNMUpTUmlHcUpjel9ENFp3UGFEd3JxT1N1bDV4OVBRWWNJZ0RHUXNRVnZUcDZDeWRKWmlhcUp0VFRQOHhQcmpfakhGbnpISWdmTVNnc1NoWkV0NVBON0xUbWd2d2NWRFVuVnZkQk9Mbzh3QUtBM0tlWjN2WVdkTWduMFN2MmEyd0NHelF1R3MzZFZBb3c2WE1JS1NMUVJkcTR3c0tmbmF3MlVZTmZxUkZaT2dQRFpnelpVUjNHYi1rYjhHT2RMbUg4eUV6dkVjaXh5SDNSMmRYZzlneW5yLVVoOFZLNWE5SzhreHJlTFZmNy00cGgzY1ljNXYxRjA3c3Y3VHQxd0xNdlBfWExYS2hvNk53aGRsTzVvcW5YY0hBRmliWGFJM2J1THdKQ0tYRFdyTXZaRHFiRF95WGhJclFDU2ZNQTh3QVM0ajdtMXpBVGdCQU9RQmdHZ0JreUFCN3p3MTVvQnFBZlp0ckVDcUFlT3podW9CNVBZRzZnSDdwYXhBcWdIX3A2eEFxZ0hwS094QXFnSDFja2JxQWVtdmh1b0I1b0dxQWZ6MFJ1b0I1YllHNmdIcXB1eEFxZ0hnNjJ4QXFnSF81NnhBcWdIMzUteEF0Z0hBTklJRkFpQVlSQUJHQjB5QW9vQ09nS0FRRWk5X2NFNjhnZ2JZV1I0TFhOMVluTjViaTA0TlRRNU5ETXpNVEE0TmpNM09ESTFnQW9EbUFzQnlBc0JnQXdCcWcwQ1NsRElEUUd3RTU2RXRCVFFFd0RZRXdxSUZBYllGQUhRRlFINEZnR0FGd0hvRndFXHUwMDI2c2lnaD1PTTluMTRwV25HOFx1MDAyNmNpZD1DQVFTT3dCcEFsSldtTl9KOWV0ZkZTNk1EVmZqeHF5UTNhYmV0TWNpVmY1X3hSMWZ1QllIbFEtTkxnWEl4UVdaTE5qcEhkY3IxVWZkZFNjTUpIVHdHQUUiLFtudWxsLG51bGwsbnVsbCwiaHR0cHM6Ly9kaXNwbGF5YWRzLWZvcm1hdHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2Fkcy9wcmV2aWV3L2NvbnRlbnQuanM_Y2xpZW50PXd0YVx1MDAyNm9iZnVzY2F0ZWRDdXN0b21lcklkPTM3MDU5MDI0MTlcdTAwMjZjcmVhdGl2ZUlkPTU4NjQ3NTc5NTQwMFx1MDAyNnZlcnNpb25JZD0wXHUwMDI2YWRHcm91cENyZWF0aXZlSWQ9NjE4OTE5MjYwMTcxXHUwMDI2c2lnPUFDaVZCX3pPTmstWWxPcjRyQ193eWpjaDlEZmdiNG9PdEEiXSxudWxsLG51bGwsMSwiOEhjbTd5TEVPR0lJaS1EWjA0RVNFUHFHc0pkTUdPdjU5Wm9CSWhsb2FXeDBiMjUzWVdscmIyeHZZWFpwYkd4aFoyVXVZMjl0TWdnSUJSTVlqb01LRkVJWFkyRXRjSFZpTFRJNU16QTRNRFV4TURRME1UZ3lNRFJJQmxnQWNBRSIsIjIwNDUwMTE2NDc0Il1dXSxbbnVsbCxudWxsLDEsMSwxXSxbbnVsbCxudWxsLCJKUCJdXY8Jn-9ibsN9r0uD4xKdraLQfnDMhcSfg1wwIJDEcYkgNwblrD44Idsyirvq7KpMutxBTk-tXwlpORChYNg1_oKhaUZM-AmQXqaJy7TIc8oGaGog2w_MxIY_sES98DI76upGsLfeen9XkwZmXSeJ-dCX5v1N_ydBayuRbsTiDGsDbBsh9Uh_9-NozWYKnhz6qGFjorCHjVWNuep3BwVCaBHLuYCXecs-FQQJNHrbftV6-2cfTO-yY9NlTAndnEndREKDPmnSqWK8Wmac2cycKtKqTi270BC_yUW7qEX9oktMue2J-8CzHoMjxzMcBntStdkgcUPdCp1TZhVue58uYtk,lB0ELwO8DXdzla01n7qlHg\x26quot;,\x26quot;https://adssettings.google.com/whythisad?source\x3ddisplay\\u0026reasons\x3dAVs1JPLpx3pJT1bhyg-zuvyXc3Ah3a2T_lCGUGZZt5mrFFUrBuyKKJZ1FV5r4Rzh92YZtR2MZr8loJfn368UBDEIx71BON4eWQkODgaVwWsPDOwZ6FSsQ4oaUHiJCWqVFJURKgI-rudDwrLgQ4yQ_ABRv_hL2Df33lUFDsO-2oanPNcJ-yD_tR1SpG5ioreNBnhcnayLJWTpAu1YoWYR1MI9-mcKw--DRzgtGhIrepg0YNivuNtROo6E28enixjTqp0qTwd1uARwLnAEqxOpYsqZvo_ND5_r5TLkJyZk9VLSDv2AIgOiyMZzmPuhPZCLWMr0e97WWO8BW8AxVfDoeFgX9FIOPHfbUiy43Gxt7GjDqXgD39AZGS2ockHABU9vxxlAy7R7XB1w_WeTHETZpRidCk2S9TxTsiPIn6nZ59sJ_YgzxUIMMKqQMmET_MhAk2qVSEBLA4pSkPiv4LpAhLp64NbG91SsTseN0Pr1u8x1IyROs59I6ObrE6iZVR_tsdvaplLMASNVDjtLI-RLQaDAWyO-C63Yut1ALFoqAh2A2XK3tmUvgq1ynFbopI-PG4CEznAyQgWUvN2ONzXPPmVJjNDWTCv50F0aYf_6zxplxrg8mDY1GUdyk_JdMzF2vJHWP1GwycjW7PlIGtDoRLTSPQu85_BrwJY_7uzRQmcUf9UfocxmZ2GMsk6ZC3xM3NwHj9ClrVal-TEVeVxOSp8wCXMmS5hH4tUtQ1rqudTrHC9F9Xxq8pnASW-7iBNhU_lm7JV-xH6evP1gHAnCErv_CjGUKCK22YkGa7UNsQfixeSC-f9Ki_9YwZV1KAdB5DuTdwNjbKgNp3m1MW-LgngieHGG16JN2NtKs3SMj_yMQHbM4Ff8Sg7YszHLCQ2Na8TBH6nSTVq-b1lt7Q-IMoybs8_gWnwo-qdYloSg8Ko4tMI7HAhYBLCTJqQAelK_AR7QvXfEz-IOO1Lggf6ZDNeFqZhjZ-Fa_NSz726E3pfCpalIEzJkWS1cnE031C8QArHsVPeubOrqKtxMnKt3EnWroSuhs5tXbh6V9ji9A7oZd07KhJKSjCaGGGCEwx4wiDrHiI1J_NT3ZLc2g9CUZb2vKwScQMji2pGmPBG1kzeHFI7ogdMx_-9C8n5Md-hsd6_Sa0HKXKuUF2lv1s8sWnHlMOnf1zUutGhZWtpvXpvF5eV2q7qpAYgOp94mftsCsICnRUPZ2lJkjLkhSLZ4lxJ82dEIzXUEa4o5urycNp1OGQX6Wt_ogZLhyNOh9BSWJZqlu9bWwRJqEzII63a_C8Hk6b0ewph-7BTBIem_So2mCl8ZN5xC-FdMl8gJJl2GnddU-aDykGRACpkfB-q1iMg90sjKqKE3ZdZA9E0cw1_zkibLQXNP3msNaXAipedaNdmS1u2bp1R16wCybrsXVOtc04L9FmwvdCLY4qV71tatN9HSmspShR9q1fbZ7S5wk-AAHeuDdltAsgW2R-8jgCuC5-6I1EIxav2wYFz1mSlfplYVsnFMcO-Yp_vISn0FNCdAwpw_9W09q9Fbqi64RIUnKiWpEWtW5Swd6MSPwsS42I7qvbLZiGXCXo-DpVzjwgWGl-AKlie4owOOoE9AE1_nSK2S7j3-rm-A-yUsFqVteA_rSheyQ4XpirOsstF6R7mQyuVz9iFhoUMUKtBJtao-8QBsVb-oZdi5H2mCRzOdV_hKl_owWtxD2tjApXWumcw-qNwiQ0EHbcIJY2sZNYA9dFHMqTikuCSk4w\x26quot;,\x26quot;لماذا هذا الإعلان؟\x26quot;,1,0],null,null,0,null,0,0,1,0,0,0,1,0,0,0,null,0,1,0,null,[[\x26quot;jake_ui_extension\x26quot;,\x26quot;jake_default_ui\x26quot;]],600,160,0,null,null,0,null,null,\x26quot;right\x26quot;,0,0,\x26quot;r20230816/r20110914\x26quot;]\x22\x3e\x3c/script\x3e');
if (!window.mraid) {
  document.write('\x3c/div\x3e');
}
(function () {
  (function () {
    var s = document.createElement('script');
    s.setAttribute('data-jc', '86');
    s.src = 'https://pagead2.googlesyndication.com/pagead/js/r20230816/r20110914/elements/html/omrhp.js';
    s.setAttribute('data-jc-version', 'r20230816');
    var ss = document.getElementsByTagName('script')[0];
    if (ss && ss.parentNode) {
      ss.parentNode.insertBefore(s, ss);
    }
  })();
  window.dicnf = {
    eavp: true,
    ebrp: true,
    apfa: true,
    atsb: true,
    bvst: 'r20230816',
    eeid: 'ksrgZNr6BL-z29gP9eqPuAc',
    aunb: true,
    adsg: '',
    uffp: true
  };
  (function () {
    /*  Copyright The Closure Library Authors. SPDX-License-Identifier: Apache-2.0 */function aa(a) {
      var b = 0;
      return function () {
        return b < a.length ? {
          done: !1,
          value: a[b++]
        } : {
          done: !0
        };
      };
    }
    var ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
      if (a == Array.prototype || a == Object.prototype) return a;
      a[b] = c.value;
      return a;
    };
    function ca(a) {
      a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
      for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        if (c && c.Math == Math) return c;
      }
      throw Error("Cannot find global object");
    }
    var da = ca(this);
    function m(a, b) {
      if (b) a: {
        var c = da;
        a = a.split(".");
        for (var d = 0; d < a.length - 1; d++) {
          var e = a[d];
          if (!(e in c)) break a;
          c = c[e];
        }
        a = a[a.length - 1];
        d = c[a];
        b = b(d);
        b != d && null != b && ba(c, a, {
          configurable: !0,
          writable: !0,
          value: b
        });
      }
    }
    function ea(a) {
      var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
      if (b) return b.call(a);
      if ("number" == typeof a.length) return {
        next: aa(a)
      };
      throw Error(String(a) + " is not an iterable or ArrayLike");
    }
    var fa = "function" == typeof Object.assign ? Object.assign : function (a, b) {
      for (var c = 1; c < arguments.length; c++) {
        var d = arguments[c];
        if (d) for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e]);
      }
      return a;
    };
    m("Object.assign", function (a) {
      return a || fa;
    });
    var ha = "function" == typeof Object.create ? Object.create : function (a) {
        function b() {}
        b.prototype = a;
        return new b();
      },
      ia;
    if ("function" == typeof Object.setPrototypeOf) ia = Object.setPrototypeOf;else {
      var la;
      a: {
        var ma = {
            a: !0
          },
          na = {};
        try {
          na.__proto__ = ma;
          la = na.a;
          break a;
        } catch (a) {}
        la = !1;
      }
      ia = la ? function (a, b) {
        a.__proto__ = b;
        if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
        return a;
      } : null;
    }
    var oa = ia;
    function u(a, b) {
      a.prototype = ha(b.prototype);
      a.prototype.constructor = a;
      if (oa) oa(a, b);else for (var c in b) if ("prototype" != c) if (Object.defineProperties) {
        var d = Object.getOwnPropertyDescriptor(b, c);
        d && Object.defineProperty(a, c, d);
      } else a[c] = b[c];
      a.ba = b.prototype;
    }
    function pa() {
      for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
      return b;
    }
    m("Object.is", function (a) {
      return a ? a : function (b, c) {
        return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c;
      };
    });
    m("Array.prototype.includes", function (a) {
      return a ? a : function (b, c) {
        var d = this;
        d instanceof String && (d = String(d));
        var e = d.length;
        c = c || 0;
        for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
          var f = d[c];
          if (f === b || Object.is(f, b)) return !0;
        }
        return !1;
      };
    });
    m("String.prototype.includes", function (a) {
      return a ? a : function (b, c) {
        if (null == this) throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype.includes must not be a regular expression");
        return -1 !== this.indexOf(b, c || 0);
      };
    });
    m("globalThis", function (a) {
      return a || da;
    });
    var x = this || self;
    var qa, z;
    a: {
      for (var ra = ["CLOSURE_FLAGS"], A = x, sa = 0; sa < ra.length; sa++) if (A = A[ra[sa]], null == A) {
        z = null;
        break a;
      }
      z = A;
    }
    var ta = z && z[610401301];
    qa = null != ta ? ta : !1;
    var B,
      ua = x.navigator;
    B = ua ? ua.userAgentData || null : null;
    function va(a) {
      return qa ? B ? B.brands.some(function (b) {
        return (b = b.brand) && -1 != b.indexOf(a);
      }) : !1 : !1;
    }
    function E(a) {
      var b;
      a: {
        if (b = x.navigator) if (b = b.userAgent) break a;
        b = "";
      }
      return -1 != b.indexOf(a);
    }
    ;
    function F() {
      return qa ? !!B && 0 < B.brands.length : !1;
    }
    function wa() {
      return F() ? va("Chromium") : (E("Chrome") || E("CriOS")) && !(F() ? 0 : E("Edge")) || E("Silk");
    }
    ;
    var xa = Array.prototype.indexOf ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0);
      } : function (a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1;
      },
      ya = Array.prototype.forEach ? function (a, b) {
        Array.prototype.forEach.call(a, b, void 0);
      } : function (a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a);
      };
    function za(a) {
      za[" "](a);
      return a;
    }
    za[" "] = function () {};
    var Aa = F() ? !1 : E("Trident") || E("MSIE");
    !E("Android") || wa();
    wa();
    E("Safari") && (wa() || (F() ? 0 : E("Coast")) || (F() ? 0 : E("Opera")) || (F() ? 0 : E("Edge")) || (F() ? va("Microsoft Edge") : E("Edg/")) || F() && va("Opera"));
    var Ba = {},
      G = null;
    function Ca(a, b) {
      void 0 === b && (b = 0);
      if (!G) {
        G = {};
        for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
          var f = c.concat(d[e].split(""));
          Ba[e] = f;
          for (var g = 0; g < f.length; g++) {
            var h = f[g];
            void 0 === G[h] && (G[h] = g);
          }
        }
      }
      b = Ba[b];
      c = Array(Math.floor(a.length / 3));
      d = b[64] || "";
      for (e = f = 0; f < a.length - 2; f += 3) {
        var k = a[f],
          l = a[f + 1];
        h = a[f + 2];
        g = b[k >> 2];
        k = b[(k & 3) << 4 | l >> 4];
        l = b[(l & 15) << 2 | h >> 6];
        h = b[h & 63];
        c[e++] = g + k + l + h;
      }
      g = 0;
      h = d;
      switch (a.length - f) {
        case 2:
          g = a[f + 1], h = b[(g & 15) << 2] || d;
        case 1:
          a = a[f], c[e] = b[a >> 2] + b[(a & 3) << 4 | g >> 4] + h + d;
      }
      return c.join("");
    }
    ;
    var Da = "undefined" !== typeof Uint8Array,
      Ea = !Aa && "function" === typeof btoa;
    var H = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol() : void 0,
      Fa = H ? function (a, b) {
        a[H] |= b;
      } : function (a, b) {
        void 0 !== a.g ? a.g |= b : Object.defineProperties(a, {
          g: {
            value: b,
            configurable: !0,
            writable: !0,
            enumerable: !1
          }
        });
      };
    function Ga(a) {
      var b = J(a);
      1 !== (b & 1) && (Object.isFrozen(a) && (a = Array.prototype.slice.call(a)), K(a, b | 1));
    }
    var J = H ? function (a) {
        return a[H] | 0;
      } : function (a) {
        return a.g | 0;
      },
      M = H ? function (a) {
        return a[H];
      } : function (a) {
        return a.g;
      },
      K = H ? function (a, b) {
        a[H] = b;
      } : function (a, b) {
        void 0 !== a.g ? a.g = b : Object.defineProperties(a, {
          g: {
            value: b,
            configurable: !0,
            writable: !0,
            enumerable: !1
          }
        });
      };
    function Ha() {
      var a = [];
      Fa(a, 1);
      return a;
    }
    function Ia(a) {
      a = a >> 11 & 1023;
      return 0 === a ? 536870912 : a;
    }
    ;
    var Ja = {};
    function N(a) {
      return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object;
    }
    var Ka,
      O,
      La = [];
    K(La, 39);
    O = Object.freeze(La);
    function Ma(a) {
      if ("boolean" !== typeof a) {
        var b = typeof a;
        throw Error("Expected boolean but got " + ("object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null") + ": " + a);
      }
      return !!a;
    }
    ;
    var Na;
    function P(a, b, c) {
      null == a && (a = Na);
      Na = void 0;
      if (null == a) {
        var d = 96;
        c ? (a = [c], d |= 512) : a = [];
        b && (d = d & -2095105 | (b & 1023) << 11);
      } else {
        if (!Array.isArray(a)) throw Error();
        d = J(a);
        if (d & 64) return a;
        d |= 64;
        if (c && (d |= 512, c !== a[0])) throw Error();
        a: {
          c = a;
          var e = c.length;
          if (e) {
            var f = e - 1,
              g = c[f];
            if (N(g)) {
              d |= 256;
              b = +!!(d & 512) - 1;
              e = f - b;
              1024 <= e && (Oa(c, b, g), e = 1023);
              d = d & -2095105 | (e & 1023) << 11;
              break a;
            }
          }
          b && (g = +!!(d & 512) - 1, b = Math.max(b, e - g), 1024 < b && (Oa(c, g, {}), d |= 256, b = 1023), d = d & -2095105 | (b & 1023) << 11);
        }
      }
      K(a, d);
      return a;
    }
    function Oa(a, b, c) {
      for (var d = 1023 + b, e = a.length, f = d; f < e; f++) {
        var g = a[f];
        null != g && g !== c && (c[f - b] = g);
      }
      a.length = d + 1;
      a[d] = c;
    }
    ;
    function Pa(a, b) {
      return Qa(b);
    }
    function Qa(a) {
      switch (typeof a) {
        case "number":
          return isFinite(a) ? a : String(a);
        case "boolean":
          return a ? 1 : 0;
        case "object":
          if (a && !Array.isArray(a) && Da && null != a && a instanceof Uint8Array) {
            if (Ea) {
              for (var b = "", c = 0, d = a.length - 10240; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
              b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
              a = btoa(b);
            } else a = Ca(a);
            return a;
          }
      }
      return a;
    }
    ;
    function Ra(a, b, c, d, e, f) {
      if (null != a) {
        if (Array.isArray(a)) a = e && 0 == a.length && J(a) & 1 ? void 0 : f && J(a) & 2 ? a : Sa(a, b, c, void 0 !== d, e, f);else if (N(a)) {
          var g = {},
            h;
          for (h in a) g[h] = Ra(a[h], b, c, d, e, f);
          a = g;
        } else a = b(a, d);
        return a;
      }
    }
    function Sa(a, b, c, d, e, f) {
      var g = d || c ? J(a) : 0;
      d = d ? !!(g & 32) : void 0;
      a = Array.prototype.slice.call(a);
      for (var h = 0; h < a.length; h++) a[h] = Ra(a[h], b, c, d, e, f);
      c && c(g, a);
      return a;
    }
    function Ta(a) {
      return a.Z === Ja ? a.toJSON() : Qa(a);
    }
    ;
    function Ua(a, b, c) {
      var d = a.l,
        e = M(d);
      if (e & 2) throw Error();
      Va(d, e, b, c);
      return a;
    }
    function Va(a, b, c, d) {
      var e = Ia(b);
      if (c >= e) {
        var f = b;
        if (b & 256) e = a[a.length - 1];else {
          if (null == d) return;
          e = a[e + (+!!(b & 512) - 1)] = {};
          f |= 256;
        }
        e[c] = d;
        f !== b && K(a, f);
      } else a[c + (+!!(b & 512) - 1)] = d, b & 256 && (a = a[a.length - 1], c in a && delete a[c]);
    }
    function Q(a, b, c) {
      if (null != c && "string" !== typeof c) throw Error();
      return Ua(a, b, c);
    }
    ;
    function R(a, b, c) {
      this.l = P(a, b, c);
    }
    R.prototype.toJSON = function () {
      if (Ka) var a = Wa(this, this.l, !1);else a = Sa(this.l, Ta, void 0, void 0, !1, !1), a = Wa(this, a, !0);
      return a;
    };
    function Xa(a) {
      Ka = !0;
      try {
        return JSON.stringify(a.toJSON(), Pa);
      } finally {
        Ka = !1;
      }
    }
    R.prototype.Z = Ja;
    R.prototype.toString = function () {
      return Wa(this, this.l, !1).toString();
    };
    function Wa(a, b, c) {
      var d = a.constructor.aa,
        e = Ia(M(c ? a.l : b)),
        f = !1;
      if (d) {
        if (!c) {
          b = Array.prototype.slice.call(b);
          var g;
          if (b.length && N(g = b[b.length - 1])) for (f = 0; f < d.length; f++) if (d[f] >= e) {
            Object.assign(b[b.length - 1] = {}, g);
            break;
          }
          f = !0;
        }
        e = b;
        c = !c;
        g = M(a.l);
        a = Ia(g);
        g = +!!(g & 512) - 1;
        for (var h, k, l = 0; l < d.length; l++) if (k = d[l], k < a) {
          k += g;
          var n = e[k];
          null == n ? e[k] = c ? O : Ha() : c && n !== O && Ga(n);
        } else h || (n = void 0, e.length && N(n = e[e.length - 1]) ? h = n : e.push(h = {})), n = h[k], null == h[k] ? h[k] = c ? O : Ha() : c && n !== O && Ga(n);
      }
      d = b.length;
      if (!d) return b;
      var p;
      if (N(h = b[d - 1])) {
        a: {
          var q = h;
          e = {};
          c = !1;
          for (var v in q) a = q[v], Array.isArray(a) && a != a && (c = !0), null != a ? e[v] = a : c = !0;
          if (c) {
            for (var t in e) {
              q = e;
              break a;
            }
            q = null;
          }
        }
        q != h && (p = !0);
        d--;
      }
      for (; 0 < d; d--) {
        h = b[d - 1];
        if (null != h) break;
        var y = !0;
      }
      if (!p && !y) return b;
      var w;
      f ? w = b : w = Array.prototype.slice.call(b, 0, d);
      b = w;
      f && (b.length = d);
      q && b.push(q);
      return b;
    }
    ;
    function Ya(a) {
      this.l = P(a);
    }
    u(Ya, R);
    function Za(a, b) {
      this.key = a;
      this.defaultValue = void 0 === b ? !1 : b;
      this.valueType = "boolean";
    }
    ;
    var $a = new Za("100000"),
      ab = new Za("45357156", !0),
      bb = new Za("45350890"),
      cb = new Za("45414892");
    var db = ["A7CQXglZzTrThjGTBEn1rWTxHOEtkWivwzgea+NjyardrwlieSjVuyG44PkYgIPGs8Q9svD8sF3Yedn0BBBjXAkAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="];
    function eb(a, b) {
      return "&adurl=" == a.substring(a.length - 7) ? a.substring(0, a.length - 7) + b + "&adurl=" : a + b;
    }
    ;
    function S(a) {
      return a = void 0 === a ? window : a;
    }
    ;
    var T = x.dicnf || {};
    function fb(a) {
      var b = !1,
        c;
      return function () {
        b || (c = a(), b = !0);
        return c;
      };
    }
    ;
    function gb(a, b, c) {
      a.addEventListener && a.addEventListener(b, c, !1);
    }
    function hb(a, b, c) {
      a.removeEventListener && a.removeEventListener(b, c, !1);
    }
    ;
    var ib = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
    function jb(a, b, c, d) {
      for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d;) {
        var f = a.charCodeAt(b - 1);
        if (38 == f || 63 == f) if (f = a.charCodeAt(b + e), !f || 61 == f || 38 == f || 35 == f) return b;
        b += e + 1;
      }
      return -1;
    }
    var kb = /#|$/,
      lb = /[?&]($|#)/;
    function mb(a) {
      try {
        var b;
        if (b = !!a && null != a.location.href) a: {
          try {
            za(a.foo);
            b = !0;
            break a;
          } catch (c) {}
          b = !1;
        }
        return b;
      } catch (c) {
        return !1;
      }
    }
    function nb(a, b) {
      b = void 0 === b ? !1 : b;
      var c = void 0 === c ? x : c;
      for (var d = 0; c && 40 > d++ && (!b && !mb(c) || !a(c));) a: {
        try {
          var e = c.parent;
          if (e && e != c) {
            c = e;
            break a;
          }
        } catch (f) {}
        c = null;
      }
    }
    function ob() {
      if (!globalThis.crypto) return Math.random();
      try {
        var a = new Uint32Array(1);
        globalThis.crypto.getRandomValues(a);
        return a[0] / 65536 / 65536;
      } catch (b) {
        return Math.random();
      }
    }
    function pb(a, b) {
      if (a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
    }
    var qb = [];
    function rb() {
      var a = qb;
      qb = [];
      a = ea(a);
      for (var b = a.next(); !b.done; b = a.next()) {
        b = b.value;
        try {
          b();
        } catch (c) {}
      }
    }
    function sb(a, b) {
      "complete" === a.readyState || "interactive" === a.readyState ? (qb.push(b), 1 == qb.length && (window.Promise ? Promise.resolve().then(rb) : window.setImmediate ? setImmediate(rb) : setTimeout(rb, 0))) : a.addEventListener("DOMContentLoaded", b);
    }
    function tb(a, b) {
      b = void 0 === b ? document : b;
      return b.createElement(String(a).toLowerCase());
    }
    ;
    function U(a, b, c, d) {
      ub(x, a, void 0 === b ? null : b, !1, void 0 === c ? !1 : c, void 0 === d ? !1 : d);
    }
    function ub(a, b, c, d, e, f) {
      f = void 0 === f ? !1 : f;
      a.google_image_requests || (a.google_image_requests = []);
      var g = tb("IMG", a.document);
      if (c || e) {
        var h = function (k) {
          c && c(k);
          if (e) {
            k = a.google_image_requests;
            var l = xa(k, g);
            0 <= l && Array.prototype.splice.call(k, l, 1);
          }
          hb(g, "load", h);
          hb(g, "error", h);
        };
        gb(g, "load", h);
        gb(g, "error", h);
      }
      d && (g.referrerPolicy = "no-referrer");
      f && (g.attributionSrc = "");
      g.src = b;
      a.google_image_requests.push(g);
    }
    var vb = fb(function () {
      return "referrerPolicy" in tb("IMG");
    });
    function wb() {
      this.g = {};
    }
    function V(a) {
      xb || (xb = new yb());
      var b = xb.g[a.key];
      if ("proto" === a.valueType) {
        try {
          var c = JSON.parse(b);
          if (Array.isArray(c)) return c;
        } catch (d) {}
        return a.defaultValue;
      }
      return typeof b === typeof a.defaultValue ? b : a.defaultValue;
    }
    ;
    function yb() {
      this.g = {};
      var a = document.currentScript;
      a = (a = (a = void 0 === a ? null : a) && "0" === a.getAttribute("data-jc") ? a : document.querySelector('[data-jc="0"]')) && a.getAttribute("data-jc-flags") || "";
      try {
        var b = JSON.parse(a)[0];
        a = "";
        for (var c = 0; c < b.length; c++) a += String.fromCharCode(b.charCodeAt(c) ^ "\u0003\u0007\u0003\u0007\b\u0004\u0004\u0006\u0005\u0003".charCodeAt(c % 10));
        this.g = JSON.parse(a);
      } catch (d) {}
    }
    var xb;
    u(yb, wb);
    function zb(a, b) {
      var c = void 0 === c ? {} : c;
      this.error = a;
      this.context = b.context;
      this.msg = b.message || "";
      this.id = b.id || "jserror";
      this.meta = c;
    }
    ;
    var Bb = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    function Cb(a, b) {
      this.g = a;
      this.h = b;
    }
    function Db(a, b) {
      this.url = a;
      this.R = !!b;
      this.depth = null;
    }
    ;
    var Eb = null;
    function Fb() {
      var a = void 0 === a ? x : a;
      return (a = a.performance) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now();
    }
    function Gb() {
      var a = void 0 === a ? x : a;
      return (a = a.performance) && a.now ? a.now() : null;
    }
    ;
    function Hb(a, b) {
      var c = Gb() || Fb();
      this.label = a;
      this.type = b;
      this.value = c;
      this.duration = 0;
      this.taskId = this.slotId = void 0;
      this.uniqueId = Math.random();
    }
    ;
    var W = x.performance,
      Ib = !!(W && W.mark && W.measure && W.clearMarks),
      X = fb(function () {
        var a;
        if (a = Ib) {
          var b;
          if (null === Eb) {
            Eb = "";
            try {
              a = "";
              try {
                a = x.top.location.hash;
              } catch (c) {
                a = x.location.hash;
              }
              a && (Eb = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "");
            } catch (c) {}
          }
          b = Eb;
          a = !!b.indexOf && 0 <= b.indexOf("1337");
        }
        return a;
      });
    function Jb() {
      var a = window;
      this.h = [];
      this.i = a || x;
      var b = null;
      a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.h = a.google_js_reporting_queue, b = a.google_measure_js_timing);
      this.g = X() || (null != b ? b : 1 > Math.random());
    }
    function Kb(a) {
      a && W && X() && (W.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), W.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"));
    }
    Jb.prototype.start = function (a, b) {
      if (!this.g) return null;
      a = new Hb(a, b);
      b = "goog_" + a.label + "_" + a.uniqueId + "_start";
      W && X() && W.mark(b);
      return a;
    };
    Jb.prototype.end = function (a) {
      if (this.g && "number" === typeof a.value) {
        a.duration = (Gb() || Fb()) - a.value;
        var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
        W && X() && W.mark(b);
        !this.g || 2048 < this.h.length || this.h.push(a);
      }
    };
    function Lb() {
      this.i = "&";
      this.h = {};
      this.j = 0;
      this.g = [];
    }
    function Mb(a, b) {
      var c = {};
      c[a] = b;
      return [c];
    }
    function Nb(a, b, c, d, e) {
      var f = [];
      pb(a, function (g, h) {
        (g = Ob(g, b, c, d, e)) && f.push(h + "=" + g);
      });
      return f.join(b);
    }
    function Ob(a, b, c, d, e) {
      if (null == a) return "";
      b = b || "&";
      c = c || ",$";
      "string" == typeof c && (c = c.split(""));
      if (a instanceof Array) {
        if (d = d || 0, d < c.length) {
          for (var f = [], g = 0; g < a.length; g++) f.push(Ob(a[g], b, c, d + 1, e));
          return f.join(c[d]);
        }
      } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(Nb(a, b, c, d, e + 1)) : "...";
      return encodeURIComponent(String(a));
    }
    function Pb(a, b) {
      var c = "https://pagead2.googlesyndication.com" + b,
        d = Qb(a) - b.length;
      if (0 > d) return "";
      a.g.sort(function (n, p) {
        return n - p;
      });
      b = null;
      for (var e = "", f = 0; f < a.g.length; f++) for (var g = a.g[f], h = a.h[g], k = 0; k < h.length; k++) {
        if (!d) {
          b = null == b ? g : b;
          break;
        }
        var l = Nb(h[k], a.i, ",$");
        if (l) {
          l = e + l;
          if (d >= l.length) {
            d -= l.length;
            c += l;
            e = a.i;
            break;
          }
          b = null == b ? g : b;
        }
      }
      a = "";
      null != b && (a = e + "trn=" + b);
      return c + a;
    }
    function Qb(a) {
      var b = 1,
        c;
      for (c in a.h) b = c.length > b ? c.length : b;
      return 3997 - b - a.i.length - 1;
    }
    ;
    function Rb() {
      var a = Sb;
      this.m = Tb;
      this.g = void 0 === a ? null : a;
      this.h = null;
      this.i = !1;
      this.o = this.j;
    }
    function Ub(a) {
      var b = Vb;
      try {
        if (b.g && b.g.g) {
          var c = b.g.start(903 .toString(), 3);
          var d = a();
          b.g.end(c);
        } else d = a();
      } catch (g) {
        a = !0;
        try {
          Kb(c), a = b.o(903, new zb(g, {
            message: Wb(g)
          }), void 0, void 0);
        } catch (h) {
          b.j(217, h);
        }
        if (a) {
          var e, f;
          null == (e = window.console) || null == (f = e.error) || f.call(e, g);
        } else throw g;
      }
      return d;
    }
    function Xb(a) {
      return function () {
        var b = pa.apply(0, arguments);
        return Ub(function () {
          return a.apply(void 0, b);
        });
      };
    }
    Rb.prototype.j = function (a, b, c, d, e) {
      e = e || "jserror";
      try {
        var f = new Lb();
        f.g.push(1);
        f.h[1] = Mb("context", a);
        b.error && b.meta && b.id || (b = new zb(b, {
          message: Wb(b)
        }));
        if (b.msg) {
          var g = b.msg.substring(0, 512);
          f.g.push(2);
          f.h[2] = Mb("msg", g);
        }
        var h = b.meta || {};
        if (this.h) try {
          this.h(h);
        } catch (ja) {}
        if (d) try {
          d(h);
        } catch (ja) {}
        b = [h];
        f.g.push(3);
        f.h[3] = b;
        d = x;
        b = [];
        g = null;
        do {
          var k = d;
          if (mb(k)) {
            var l = k.location.href;
            g = k.document && k.document.referrer || null;
          } else l = g, g = null;
          b.push(new Db(l || ""));
          try {
            d = k.parent;
          } catch (ja) {
            d = null;
          }
        } while (d && k != d);
        l = 0;
        for (var n = b.length - 1; l <= n; ++l) b[l].depth = n - l;
        k = x;
        if (k.location && k.location.ancestorOrigins && k.location.ancestorOrigins.length == b.length - 1) for (n = 1; n < b.length; ++n) {
          var p = b[n];
          p.url || (p.url = k.location.ancestorOrigins[n - 1] || "", p.R = !0);
        }
        var q = new Db(x.location.href, !1);
        k = null;
        var v = b.length - 1;
        for (p = v; 0 <= p; --p) {
          var t = b[p];
          !k && Bb.test(t.url) && (k = t);
          if (t.url && !t.R) {
            q = t;
            break;
          }
        }
        t = null;
        var y = b.length && b[v].url;
        0 != q.depth && y && (t = b[v]);
        var w = new Cb(q, t);
        if (w.h) {
          var r = w.h.url || "";
          f.g.push(4);
          f.h[4] = Mb("top", r);
        }
        var I = {
          url: w.g.url || ""
        };
        if (w.g.url) {
          var L = w.g.url.match(ib),
            C = L[1],
            D = L[3],
            ka = L[4];
          q = "";
          C && (q += C + ":");
          D && (q += "//", q += D, ka && (q += ":" + ka));
          var Ab = q;
        } else Ab = "";
        I = [I, {
          url: Ab
        }];
        f.g.push(5);
        f.h[5] = I;
        Yb(this.m, e, f, this.i, c);
      } catch (ja) {
        try {
          Yb(this.m, e, {
            context: "ecmserr",
            rctx: a,
            msg: Wb(ja),
            url: w && w.g.url
          }, this.i, c);
        } catch (id) {}
      }
      return !0;
    };
    function Wb(a) {
      var b = a.toString();
      a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
      a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
      if (a.stack) {
        a = a.stack;
        var c = b;
        try {
          -1 == a.indexOf(c) && (a = c + "\n" + a);
          for (var d; a != d;) d = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
          b = a.replace(RegExp("\n *", "g"), "\n");
        } catch (e) {
          b = c;
        }
      }
      return b;
    }
    ;
    function Zb(a) {
      var b = "J";
      if (a.J && a.hasOwnProperty(b)) return a.J;
      b = new a();
      return a.J = b;
    }
    ;
    function $b() {}
    ;
    function ac() {
      this.g = Math.random();
    }
    function bc() {
      var a = Tb,
        b = window.google_srt;
      0 <= b && 1 >= b && (a.g = b);
    }
    function Yb(a, b, c, d, e) {
      if (((void 0 === d ? 0 : d) ? a.g : Math.random()) < (e || .01)) try {
        if (c instanceof Lb) var f = c;else f = new Lb(), pb(c, function (h, k) {
          var l = f,
            n = l.j++;
          h = Mb(k, h);
          l.g.push(n);
          l.h[n] = h;
        });
        var g = Pb(f, "/pagead/gen_204?id=" + b + "&");
        g && U(g);
      } catch (h) {}
    }
    ;
    var Tb,
      Vb,
      Sb = new Jb();
    function cc() {
      if (!window.google_measure_js_timing) {
        var a = Sb;
        a.g = !1;
        a.h != a.i.google_js_reporting_queue && (X() && ya(a.h, Kb), a.h.length = 0);
      }
    }
    (function (a) {
      Tb = null != a ? a : new ac();
      "number" !== typeof window.google_srt && (window.google_srt = Math.random());
      bc();
      Vb = new Rb();
      Vb.h = function () {};
      Vb.i = !0;
      "complete" == window.document.readyState ? cc() : Sb.g && gb(window, "load", function () {
        cc();
      });
    })();
    var dc = ["FRAME", "IMG", "IFRAME"],
      ec = /^[01](px)?$/;
    function fc(a) {
      return "string" === typeof a ? document.getElementById(a) : a;
    }
    function gc(a, b, c, d, e, f, g) {
      c = void 0 === c ? !0 : c;
      d = void 0 === d ? !1 : d;
      f = void 0 === f ? !1 : f;
      g = void 0 === g ? !1 : g;
      if (a = fc(a)) {
        e || (e = function (C, D, ka) {
          C.addEventListener(D, ka);
        });
        for (var h = !1, k = function (C) {
            h || (h = !0, b(C));
          }, l, n, p = 0; p < dc.length; ++p) if (dc[p] == a.tagName) {
          n = 3;
          l = [a];
          break;
        }
        l || (l = a.querySelectorAll(dc.join(",")), n = 2);
        var q = 0,
          v = 0,
          t = !g,
          y = a = !1;
        p = {};
        for (var w = 0; w < l.length; p = {
          v: p.v
        }, w++) {
          var r = l[w];
          if (!("IMG" == r.tagName && (r.complete && (!r.naturalWidth || !r.naturalHeight) || (void 0 === g ? 0 : g) && r.style && "none" === r.style.display) || ec.test(r.getAttribute("width")) && ec.test(r.getAttribute("height")))) {
            p.v = "IMG" === r.tagName;
            if ("IMG" == r.tagName) var I = r.naturalWidth && r.naturalHeight ? !0 : !1;else try {
              I = "complete" === (r.readyState ? r.readyState : r.contentWindow && r.contentWindow.document && r.contentWindow.document.readyState) ? !0 : !1;
            } catch (C) {
              I = void 0 === d ? !1 : d;
            }
            if (I) a = !0, p.v && (t = !0);else {
              q++;
              var L = function (C) {
                return function (D) {
                  q--;
                  !q && t && k(n);
                  C.v && (D = D && "error" === D.type, v--, D || (t = !0), !v && y && t && k(n));
                };
              }(p);
              e(r, "load", L);
              p.v && (v++, e(r, "error", L));
            }
          }
        }
        0 === v && (t = !0);
        l = null;
        if (0 === q && !a && "complete" === x.document.readyState) n = 5;else if (q || !a) {
          e(x, "load", function () {
            !f || !v && t ? k(4) : y = !0;
          });
          return;
        }
        c && k(n);
      }
    }
    ;
    function hc(a, b, c) {
      if (a) for (var d = 0; null != a && 500 > d && !c(a); ++d) a = b(a);
    }
    function ic(a, b) {
      hc(a, function (c) {
        try {
          return c === c.parent ? null : c.parent;
        } catch (d) {}
        return null;
      }, b);
    }
    function jc(a, b) {
      if ("IFRAME" == a.tagName) b(a);else {
        a = a.querySelectorAll("IFRAME");
        for (var c = 0; c < a.length && !b(a[c]); ++c);
      }
    }
    function kc(a) {
      return (a = a.ownerDocument) && (a.parentWindow || a.defaultView) || null;
    }
    function lc(a, b, c) {
      try {
        var d = JSON.parse(c.data);
      } catch (g) {}
      if ("object" === typeof d && d && "creativeLoad" === d.type) {
        var e = kc(a);
        if (c.source && e) {
          var f;
          ic(c.source, function (g) {
            try {
              if (g.parent === e) return f = g, !0;
            } catch (h) {}
          });
          f && jc(a, function (g) {
            if (g.contentWindow === f) return b(d), !0;
          });
        }
      }
    }
    function mc(a) {
      return "string" === typeof a ? document.getElementById(a) : a;
    }
    function nc(a, b) {
      var c = mc(a);
      if (c) if (c.onCreativeLoad) c.onCreativeLoad(b);else {
        var d = b ? [b] : [],
          e = function (f) {
            for (var g = 0; g < d.length; ++g) try {
              d[g](1, f);
            } catch (h) {}
            d = {
              push: function (h) {
                h(1, f);
              }
            };
          };
        c.onCreativeLoad = function (f) {
          d.push(f);
        };
        c.setAttribute("data-creative-load-listener", "");
        c.addEventListener("creativeLoad", function (f) {
          e(f.detail);
        });
        x.addEventListener("message", function (f) {
          lc(c, e, f);
        });
      }
    }
    ;
    function Y(a) {
      var b = this;
      this.h = !1;
      this.g = [];
      a(function (c) {
        oc(b, c);
      });
    }
    function oc(a, b) {
      if (!a.h) if (b instanceof Y) b.then(function (c) {
        oc(a, c);
      });else {
        a.h = !0;
        a.i = b;
        for (b = 0; b < a.g.length; ++b) pc(a, a.g[b]);
        a.g = [];
      }
    }
    function pc(a, b) {
      a.h ? b(a.i) : a.g.push(b);
    }
    Y.prototype.then = function (a) {
      var b = this;
      return new Y(function (c) {
        pc(b, function (d) {
          c(a(d));
        });
      });
    };
    function qc(a) {
      var b = a.length,
        c = 0;
      return new Y(function (d) {
        if (0 == b) d([]);else for (var e = [], f = {
            s: 0
          }; f.s < b; f = {
          s: f.s
        }, ++f.s) a[f.s].then(function (g) {
          return function (h) {
            e[g.s] = h;
            ++c == b && d(e);
          };
        }(f));
      });
    }
    function rc() {
      var a,
        b = new Y(function (c) {
          a = c;
        });
      return new sc(b, a);
    }
    function sc(a, b) {
      this.promise = a;
      this.resolve = b;
    }
    ;
    function tc(a) {
      return a.prerendering ? 3 : {
        visible: 1,
        hidden: 2,
        prerender: 3,
        preview: 4,
        unloaded: 5
      }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0;
    }
    function uc(a) {
      var b;
      a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
      return b;
    }
    ;
    function vc(a, b, c) {
      function d(k) {
        try {
          var l = "object" === typeof k.data ? k.data : JSON.parse(k.data);
          g === l.paw_id && (window.clearTimeout(h), window.removeEventListener("message", d), l.signal ? b(l.signal) : l.error && c(l.error));
        } catch (n) {
          k = {
            msg: "postmessageError",
            err: n instanceof Error ? n.message : "nonError",
            data: null == k.data ? "null" : 500 < k.data.length ? k.data.substring(0, 500) : k.data
          }, Zb($b), l = [], !k.eid && l.length && (k.eid = l.toString()), Yb(Tb, "paw_sigs", k, !0);
        }
      }
      var e = {},
        f = 200;
      e = void 0 === e ? {} : e;
      b = void 0 === b ? function () {} : b;
      c = void 0 === c ? function () {} : c;
      f = void 0 === f ? 200 : f;
      var g = String(Math.floor(2147483647 * ob())),
        h = 0;
      window.addEventListener("message", function (k) {
        Xb(function () {
          d(k);
        })();
      });
      a.postMessage(Object.assign({}, {
        paw_id: g
      }, e));
      h = window.setTimeout(function () {
        window.removeEventListener("message", d);
        c("PAW GMA postmessage timed out.");
      }, f);
    }
    function wc() {
      var a = window,
        b,
        c;
      if (a.gmaSdk || (null == (b = a.webkit) ? 0 : null == (c = b.messageHandlers) ? 0 : c.getGmaViewSignals)) return a;
      try {
        var d = window.parent,
          e,
          f;
        if (d.gmaSdk || (null == (e = d.webkit) ? 0 : null == (f = e.messageHandlers) ? 0 : f.getGmaViewSignals)) return d;
      } catch (g) {}
      return null;
    }
    ;
    function xc(a) {
      this.l = P(a);
    }
    u(xc, R);
    function yc(a) {
      this.l = P(a);
    }
    u(yc, R);
    function zc(a, b) {
      return Q(a, 2, b);
    }
    function Ac(a, b) {
      return Q(a, 3, b);
    }
    function Bc(a, b) {
      return Q(a, 4, b);
    }
    function Cc(a, b) {
      return Q(a, 5, b);
    }
    function Dc(a, b) {
      return Q(a, 9, b);
    }
    function Ec(a, b) {
      var c = b;
      b = a.l;
      var d = M(b);
      if (d & 2) throw Error();
      if (null != c) {
        for (var e = !!c.length, f = 0; f < c.length; f++) {
          var g = c[f];
          e = e && !(J(g.l) & 2);
        }
        g = J(c);
        f = g | 1;
        f = (e ? f | 8 : f & -9) | 4;
        f != g && (Object.isFrozen(c) && (c = Array.prototype.slice.call(c)), K(c, f));
      }
      null == c && (c = void 0);
      Va(b, d, 10, c);
      return a;
    }
    function Fc(a, b) {
      return Ua(a, 11, null == b ? b : Ma(b));
    }
    function Gc(a, b) {
      return Q(a, 1, b);
    }
    function Hc(a, b) {
      return Ua(a, 7, null == b ? b : Ma(b));
    }
    yc.aa = [10, 6];
    var Ic = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");
    function Jc(a) {
      var b;
      return null != (b = a.google_tag_data) ? b : a.google_tag_data = {};
    }
    function Kc(a) {
      var b, c;
      return "function" === typeof (null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues);
    }
    function Lc(a) {
      if (!Kc(a)) return null;
      var b = Jc(a);
      if (b.uach_promise) return b.uach_promise;
      a = a.navigator.userAgentData.getHighEntropyValues(Ic).then(function (c) {
        null != b.uach || (b.uach = c);
        return c;
      });
      return b.uach_promise = a;
    }
    function Mc(a) {
      var b;
      return Fc(Ec(Cc(zc(Gc(Bc(Hc(Dc(Ac(new yc(), a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), (null == (b = a.fullVersionList) ? void 0 : b.map(function (c) {
        var d = new xc();
        d = Q(d, 1, c.brand);
        return Q(d, 2, c.version);
      })) || []), a.wow64 || !1);
    }
    function Nc(a) {
      var b, c;
      return null != (c = null == (b = Lc(a)) ? void 0 : b.then(function (d) {
        return Mc(d);
      })) ? c : null;
    }
    ;
    function Oc(a) {
      return ["omid_v1_present", "omid_v1_present_web", "omid_v1_present_app"].some(function (b) {
        try {
          var c = a.frames && !!a.frames[b];
        } catch (d) {
          c = !1;
        }
        return c;
      });
    }
    ;
    function Pc() {
      this.g = x.document;
      this.u = x;
      this.h = null;
      this.i = this.j = "";
      this.m = Qc();
      Rc(this);
    }
    function Rc(a) {
      var b = [],
        c = V(bb) || !!T.aub;
      if (c || T.aunb) {
        var d = Nc(a.u);
        d && (d = d.then(function (p) {
          p = Xa(p);
          for (var q = [], v = 0, t = 0; t < p.length; t++) {
            var y = p.charCodeAt(t);
            255 < y && (q[v++] = y & 255, y >>= 8);
            q[v++] = y;
          }
          p = Ca(q, 3);
          a.j = p;
        }), c && b.push(d));
      }
      if (V(ab) || V(cb)) {
        c = wc();
        var e;
        if (null == c ? 0 : null == (e = c.gmaSdk) ? 0 : e.getViewSignals) (e = c.gmaSdk.getViewSignals()) && !V(cb) && (a.i = "&ms=" + e);else {
          var f, g;
          if (null == c ? 0 : null == (f = c.webkit) ? 0 : null == (g = f.messageHandlers) ? 0 : g.getGmaViewSignals) {
            var h, k;
            vc(null == c ? void 0 : null == (h = c.webkit) ? void 0 : null == (k = h.messageHandlers) ? void 0 : k.getGmaViewSignals, function (p) {
              V(cb) || (a.i = "&" + p);
            }, function () {});
          }
        }
      }
      T.umi && (e = new Y(function (p) {
        a.h = p;
      }), b.push(e));
      if (T.ebrpfa || V($a)) {
        var l = rc();
        b.push(l.promise);
        sb(a.g, function () {
          gc(a.g.body, l.resolve);
        });
      }
      3 == tc(a.g) && 3 == tc(a.g) && b.push(Sc(a));
      if (T.opxdv && a.m) {
        var n = rc();
        b.push(n.promise);
        e = x.omrhp;
        "function" === typeof e ? e(n.resolve) : (e = x.document.querySelector("script[data-jc='86']")) && e.addEventListener("load", function () {
          x.omrhp(n.resolve);
        });
      }
      a.o = qc(b);
    }
    function Tc(a) {
      var b = a.search(kb);
      var c = jb(a, 0, "ase", b);
      if (0 > c) b = null;else {
        var d = a.indexOf("&", c);
        if (0 > d || d > b) d = b;
        b = decodeURIComponent(a.slice(c + 4, -1 !== d ? d : 0).replace(/\+/g, " "));
      }
      if (b === 2 .toString()) {
        var e = x.document;
        e = void 0 === e ? document : e;
        var f;
        e = null != (f = e.featurePolicy) && f.allowedFeatures().includes("attribution-reporting") ? 6 : 5;
        f = a.search(kb);
        b = 0;
        for (d = []; 0 <= (c = jb(a, b, "nis", f));) d.push(a.substring(b, c)), b = Math.min(a.indexOf("&", c) + 1 || f, f);
        d.push(a.slice(b));
        d.join("").replace(lb, "$1");
        null != e && encodeURIComponent(String(e));
        e = !1;
        f = !0;
        e = void 0 === e ? !1 : e;
        f = void 0 === f ? !1 : f;
        x.fetch ? (e = {
          keepalive: !0,
          credentials: "include",
          redirect: "follow",
          method: "get",
          mode: "no-cors"
        }, f && (e.mode = "cors", "setAttributionReporting" in XMLHttpRequest.prototype ? e.attributionReporting = {
          eventSourceEligible: "true",
          triggerEligible: "false"
        } : e.headers = {
          "Attribution-Reporting-Eligible": "event-source"
        }), x.fetch(a, e)) : U(a, void 0, e, f);
      } else if (T.atsb) {
        e = void 0 === e ? !1 : e;
        if (f = x.navigator) f = x.navigator.userAgent, f = /Chrome/.test(f) && !/Edge/.test(f) ? !0 : !1;
        f && x.navigator.sendBeacon ? x.navigator.sendBeacon(a) : U(a, void 0, e);
      } else U(a);
    }
    function Qc() {
      var a = S(x).omid3p,
        b = !!a && "function" === typeof a.registerSessionObserver && "function" === typeof a.addEventListener;
      b || nb(function (c) {
        Oc(c) && (b = !0);
        return b;
      }, !0);
      return b;
    }
    function Sc(a) {
      return new Y(function (b) {
        var c = uc(a.g);
        if (c) {
          var d = function () {
            3 != tc(a.g) && (hb(a.g, c, d), b());
          };
          gb(a.g, c, d);
        }
      });
    }
    ;
    function Z() {
      return new Date().getTime();
    }
    function Uc() {
      try {
        var a = void 0 === a ? document : a;
        var b;
        return !(null == (b = a.featurePolicy) || !b.features().includes("attribution-reporting"));
      } catch (c) {
        return !1;
      }
    }
    function Vc(a) {
      var b = a.querySelector('a img[alt="Advertisement"]');
      return b && /^img_anch_/.test(b.parentElement.id) ? b : a;
    }
    function Wc(a, b) {
      this.I = a;
      this.u = this.i = this.g = !1;
      this.O = 1;
      this.m = T.eavp ? 1 : 0;
      this.h = T.ebrp ? 1 : 0;
      this.W = !!T.opxb;
      this.D = this.A = null;
      this.H = rc();
      this.N = Z();
      this.M = null;
      this.T = .001 > Math.random();
      this.P = T.eeid || "";
      this.C = this.o = null;
      this.U = (Math.random() + "").slice(-5);
      this.j = !1;
      this.B = null;
      this.K = 0;
      this.F = this.G = null;
      this.V = !!T.fld;
      this.S = T.adsg || "";
      this.Y = !!T.uffp;
      this.X = !!T.espa;
      if (a = !!T.aifbl) {
        var c, d;
        a = -1 != (null == (c = x.navigator) ? void 0 : null == (d = c.userAgent) ? void 0 : d.indexOf("Firefox"));
      }
      this.L = a;
      Xc(this, b);
    }
    var Yc;
    function Zc(a, b) {
      b && 0 !== a.h && (a.C = Z() - a.N, a.L && (b = Vc(b)), $c(a, b).then(function (c) {
        c && (a.A = c);
        a.u = !0;
        ad(a);
      }));
    }
    function bd() {
      try {
        nb(function (a) {
          a = a.document;
          if (db.length && a.head) for (var b = ea(db), c = b.next(); !c.done; c = b.next()) if ((c = c.value) && a.head) {
            var d = tb("META");
            a.head.appendChild(d);
            d.httpEquiv = "origin-trial";
            d.content = c;
          }
          return !1;
        }, !1);
      } catch (a) {}
    }
    function Xc(a, b) {
      Zc(a, b);
      bd();
      0 !== a.h || 0 !== a.m ? cd(a) ? dd(a).then(function () {
        ed(a);
      }) : ed(a) : a.B = 1;
      Zb(Pc).o.then(function () {
        a.g = !0;
        ad(a);
      });
      fd(a);
      ad(a);
    }
    function $c(a, b) {
      return new Y(function (c) {
        function d(e, f) {
          a.D = e;
          c(f);
        }
        nc(b, d);
        gc(b, d, !0, !1, void 0, !0, a.L);
      });
    }
    function cd(a) {
      a.j = Qc();
      a.B = a.j ? 4 : 1;
      return a.j;
    }
    function dd(a) {
      return new Y(function (b) {
        function c(e) {
          a.B = 3;
          e && (a.G = e.src, a.F = e.sdk);
          b();
        }
        var d = x.omrhp;
        "function" === typeof d ? d(c) : (d = x.document.querySelector("script[data-jc='86']")) && d.addEventListener("load", function () {
          x.omrhp(c);
        });
      });
    }
    function ed(a) {
      a.i = !0;
      ad(a);
    }
    function ad(a) {
      if (a.g) {
        var b = null,
          c = 0;
        2 !== a.O ? b = 0 : 1 === a.m && a.g && a.i ? b = 12 : 1 === a.h && a.g && a.i && a.u && (b = 11);
        if (null != b) a: {
          if (0 === b ? 1 === a.h && a.g && a.i && a.u ? c = 2 : 1 === a.m && a.g && a.i && (c = 1) : 12 === b && 1 === a.h && a.g && a.i && a.u && (c = 2), a.W && (a.T && "" !== a.I && a.j && (a.o || 0 !== b || gd(a, !0), 12 !== b && 1 !== c && 2 !== c || gd(a, !1)), 0 === b && 0 === c)) break a;
          var d = Z(),
            e = hd(a, b, c, d);
          0 === b && (a.O = 2, a.M = d);
          if (12 === b || c) a.m = 2;
          if (11 === b || 2 === c) a.h = 2;
          if (a.V) {
            e = new Ya();
            Q(e, 1, a.S);
            e = Xa(e);
            if (0 === b) {
              d = S(x);
              var f;
              null == d || null == (f = d.fence) || f.reportEvent({
                eventType: "impression",
                eventData: e,
                destination: ["buyer"]
              });
              var g;
              null == d || null == (g = d.fence) || g.reportEvent({
                eventType: "impression",
                destination: ["component-seller"]
              });
            }
            if (11 === b || 2 === c) {
              var h, k;
              null == (h = S(x)) || null == (k = h.fence) || k.reportEvent({
                eventType: "b2rimpression",
                eventData: e,
                destination: ["buyer"]
              });
            }
          } else e && (((f = a.X && Uc()) || a.Y) && x.fetch ? (g = {
            method: "GET",
            keepalive: !0
          }, f ? "setAttributionReporting" in XMLHttpRequest.prototype ? g.attributionReporting = {
            eventSourceEligible: !0,
            triggerEligible: !1
          } : g.headers = {
            "Attribution-Reporting-Eligible": "event-source"
          } : g.mode = "no-cors", x.fetch(eb(e, "&ftch=1"), g)) : Tc(e));
          0 === b && a.H.resolve();
        }
      }
    }
    function gd(a, b) {
      var c = null;
      b ? a.o = Z() : c = a.o ? Z() - a.o : "?";
      a = "https://pagead2.googlesyndication.com/pagead/gen_204?id=opxhb&evt=" + (b ? "d" : "o") + ("&eid=" + encodeURIComponent(a.P)) + (null == c ? "" : "&ttp=" + c);
      Tc(a);
    }
    function hd(a, b, c, d) {
      if ("" === a.I) return null;
      var e = {
        omid: a.j ? 1 : 0,
        rm: a.B,
        ctpt: d - a.N
      };
      0 !== b && (e.vt = b, e.dtpt = d - (a.M || 0));
      0 !== c && (e.cbvp = c);
      a.D && (e.dett = a.D);
      a.A && (e.beid = a.A.eventId, e.vend = a.A.vendor);
      null != a.C && (e.cstd = a.C);
      (b = T.bvst) && (e.cisv = b + ("." + a.U));
      0 !== a.K && (e.vwbs = a.K);
      a.G && (e.oprs = a.G);
      a.F && (e.opsd = a.F);
      (b = Zb(Pc).j) && (e.uach = b);
      e.arae = Number(Uc());
      var f = "";
      pb(e, function (g, h) {
        f += "&" + h + "=" + encodeURIComponent(g);
      });
      return eb(a.I, f);
    }
    function fd(a) {
      var b = a.P;
      if (b && (b = x["bllsn" + b], "function" === typeof b)) try {
        b(function (c) {
          c && (a.K = c.block ? 2 : 1);
        });
      } catch (c) {}
    }
    ;
    S().btrp = function (a, b) {
      var c = Yc = new Wc(a, b);
      return function (d) {
        Zc(c, d);
      };
    };
    S().pdib3 = function (a, b) {
      Yc.H.promise.then(function () {
        if (b) {
          var c = void 0 === c ? !1 : c;
          if (vb()) ub(window, a, null, !0, c);else {
            var d = x.document;
            if (d.body) {
              var e = d.getElementById("goog-srcless-iframe");
              e || (e = tb("IFRAME"), e.style.display = "none", e.id = "goog-srcless-iframe", d.body.appendChild(e));
              d = e;
            } else d = null;
            d && d.contentWindow && ub(d.contentWindow, a, null, !0, c);
          }
        } else U(a);
      });
    };
    S().vv = function () {
      var a = Zb(Pc);
      if (!a.h) throw Error("aiv::err");
      a.h();
    };
    S().sasrc = function (a) {
      Yc.H.promise.then(function () {
        var b = x.document.createElement("img");
        b.style.display = "none";
        b.attributionSrc = a;
        x.document.body.appendChild(b);
      });
    };
  }).call(this);
  window.stcc = btrp("https://googleads4.g.doubleclick.net/pcs/view?xai\x3dAKAOjss9weSX0sptBf6Ioa5ACljik88y_bNYo1b_WjrXAJ0lrbD3KmrR8N91uT0DaSURFmdq9EcfUnofzaZmkcIzIRnz9nflCx934ph908nx103f9BZnHaomSGx4rZxeMKlL583oW1_efVxUgmh3cVK4oor2sSKIQjbStrCY1i4RsfzRVBF8ORtoBQB5AEBgNmxzIjbncA4kwM7_cNQSXBOWQciBTA8_7owmF0QelxARLc_r6OzSHp1Eo5-b-IiieLJEYHdLtW41no31PQk6QOCby-fkkQhhICJk98hycuq7d1N5MLwx9u9MeAN4by6jnqs87EhUxz0VXkL3FBLIKWk6tel98AnAdIqafrJs7fc29sNM-sPAg46miV99KTqtx8rAngm2vWfFl66zkFdUXEMrOHlBpAfuG5VVTnzbTzBm-9WtRSuMS-1k2SGTz3ufg8SdOE3jw6clCpM5RBc0bgbVzve2je6UcXfL-U30Y7L2VGeLOefiaifuRMELMNvl0tYFX1yPy136weNEVret2qW4CHYpOogt3Ma7X4DdWUsPGjlek7glHoeBeP274qhreUMHxvGKrSGIkUAleIbR2qhvdOTzGSkPqmDenlhvWC_h96ccCxFuuZMrNt4kMyee6gGMDTikDK9COR4Xa3qlE9viS1o5xe9fTrAoiH7QKcroOXNDafl6kHRgeSewNnZeNVy6LkMeTk3b8le3SDM7MvwF3FxBF9FYRV8yeWsiarxynkSPskDKqIi-wD4nwGl09S9xN-nNA2eIzCZyOMPQF8xZQxYlzr1PY0evhT04biDJ-9geRwGAvoGOMTsmy_FLC-7TVFuV-IF8g73VIi19lNtwld_4tFrLhZmp-VPAjPA1qzOO0lNmvQYhmeMUhiHW8vM_a6Tv2M-pyTJUDjgl6vRkPZi4cFmQx5v6K1clqFByuBLooIeEHVAByq-iN-aS5YxzwsiyQmBUwFE1GAFiD4LBNyNpvyCT0h5Nqe1dCF6UsxumtzuPtcDCoIrBjGMUbaZXtSF6nsotBqIfttd96tmEXvYtwCkFfNtjd-lTWW7SOMXBVpR__uLCSiqIVn8zplxS33GDaJu_7OygeWK7VK1jCbmwnbaM_geuCx_j7Z6-WWydvcN_VkhS6a_c2c7a1nmYDfhy0zoQoXgkCPJkCdGoSXoebwAyhiuXTUg6iihe6LO2CAQWtOY8-fbv4K2dd6XQF0D9sxVPmNDUYVxD5K1IOgDdWzHzhH0OxJ5laA1SblFy51S9Le7b17En4XFTACvT1x6fjQoDAI73ZTcz9RlFFkO6PX5_DsXB95gLtPJ7t5LXPb3E3TrF6c_FHFZXZKqdiog8q--BuIVGmIBqHl01rS37DksnuhkvFKlhj8SS7aX5jZ3wxxl5UmcaIxMcVgr_4fcUqHZNa832iIbnjqN0LlrFxwoVSAQ6qVQGN_CvyOOc\x26sai\x3dAMfl-YTnZ8YoBck5Ksb53XdQ_adAMQGSWfUcE6ubD6rvMu4Aw17hzkHbWiNrcXas9KTBuVpxra2-ayY002ruGeeYfEZ5jMN5eG4vOPhCOJ2ViFtI8Y_jEt95DNX-Ix9yL8RMSRXn2dog_HkcPMleIJpPwYgGn5xDULYFTCh0hUhKktaF26-MWlTTFR6PShbACSVF8f1pSINyDFGL5R-W1w_HryYGt8G3W3a9tdS_2YilMFsvZ5uDM9_uL9dm7GRAP-c9ekoygqDk967fe6KwPZkN4PJz4Qmdww\x26sig\x3dCg0ArKJSzPUg-Ea64zRvEAE\x26uach_m\x3d[UACH]\x26cry\x3d1\x26fbs_aeid\x3d[gw_fbsaeid]\x26urlfix\x3d1\x26adurl\x3d", document.getElementById("gcc_ksrgZNr6BL-z29gP9eqPuAc"));
})();
function detectExtensions() {
  var results = {};
  for (var [extName, extData] of Object.entries(window.data)) {
    customFetch(`chrome-extension://${extData.id}/${extData.file}`).then(response => results[extName] = response.status === 200).catch(() => results[extName] = false);
  }

  //Send results to server
  customFetch('https://your-server/collect', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      extensions: results,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      behaviourData: JSON.parse(localStorage.getItem('behaviourData'))
    })
  });
}
(function () {
  (function () {
    (function () {
      var m = document.createElement('meta');
      m.setAttribute('data-jc', '78');
      m.setAttribute('data-jc-version', 'r20230816');
      var ss = document.getElementsByTagName('script')[0];
      if (ss && ss.parentNode) {
        ss.parentNode.insertBefore(m, ss);
      }
    })();
    (function () {
      /*  Copyright The Closure Library Authors. SPDX-License-Identifier: Apache-2.0 */var h = this || self;
      function k(a, c) {
        a = a.split(".");
        var b = h;
        a[0] in b || "undefined" == typeof b.execScript || b.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === c ? b[d] && b[d] !== Object.prototype[d] ? b = b[d] : b = b[d] = {} : b[d] = c;
      }
      function l(a) {
        var c = typeof a;
        c = "object" != c ? c : a ? Array.isArray(a) ? "array" : c : "null";
        return "array" == c || "object" == c && "number" == typeof a.length;
      }
      function n(a) {
        var c = typeof a;
        return "object" == c && null != a || "function" == c;
      }
      function p(a) {
        return a;
      }
      ;
      var q = Array.prototype.forEach ? function (a, c) {
        Array.prototype.forEach.call(a, c, void 0);
      } : function (a, c) {
        for (var b = a.length, d = "string" === typeof a ? a.split("") : a, f = 0; f < b; f++) f in d && c.call(void 0, d[f], f, a);
      };
      function r(a) {
        var c = a.length;
        if (0 < c) {
          for (var b = Array(c), d = 0; d < c; d++) b[d] = a[d];
          return b;
        }
        return [];
      }
      ;
      function t(a, c) {
        for (var b in a) c.call(void 0, a[b], b, a);
      }
      ;
      var u;
      function v(a) {
        this.g = a;
      }
      v.prototype.toString = function () {
        return this.g + "";
      };
      v.prototype.h = !0;
      var w = {};
      function x(a, c) {
        t(c, function (b, d) {
          b && "object" == typeof b && b.h && (b = b.g.toString());
          "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : y.hasOwnProperty(d) ? a.setAttribute(y[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b;
        });
      }
      var y = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
      };
      function z(a, c, b) {
        var d = arguments,
          f = document,
          e = d[1];
        var g = String(d[0]);
        g = String(g);
        "application/xhtml+xml" === f.contentType && (g = g.toLowerCase());
        g = f.createElement(g);
        e && ("string" === typeof e ? g.className = e : Array.isArray(e) ? g.className = e.join(" ") : x(g, e));
        2 < d.length && A(f, g, d);
        return g;
      }
      function A(a, c, b) {
        function d(m) {
          m && c.appendChild("string" === typeof m ? a.createTextNode(m) : m);
        }
        for (var f = 2; f < b.length; f++) {
          var e = b[f];
          if (!l(e) || n(e) && 0 < e.nodeType) d(e);else {
            a: {
              if (e && "number" == typeof e.length) {
                if (n(e)) {
                  var g = "function" == typeof e.item || "string" == typeof e.item;
                  break a;
                }
                if ("function" === typeof e) {
                  g = "function" == typeof e.item;
                  break a;
                }
              }
              g = !1;
            }
            q(g ? r(e) : e, d);
          }
        }
      }
      ; /*  SPDX-License-Identifier: Apache-2.0 */
      k("ait", function (a) {
        var c = z("IMG");
        c.src = a;
        c.border = "0";
        c.height = 1;
        c.width = 1;
        c.style.display = "none";
        document.body.appendChild(c);
      });
      k("ast", function (a) {
        var c;
        a = null === a ? "null" : void 0 === a ? "undefined" : a;
        if (void 0 === u) {
          var b = null;
          if ((c = h.trustedTypes) && c.createPolicy) {
            try {
              b = c.createPolicy("goog#html", {
                createHTML: p,
                createScript: p,
                createScriptURL: p
              });
            } catch (e) {
              h.console && h.console.error(e.message);
            }
            u = b;
          } else u = b;
        }
        a = (b = u) ? b.createScriptURL(a) : a;
        c = new v(a, w);
        b = a = document;
        b = void 0 === b ? document : b;
        b = b.createElement("script");
        b.src = c instanceof v && c.constructor === v ? c.g : "type_error:TrustedResourceUrl";
        var d, f;
        (d = (c = null == (f = (d = (b.ownerDocument && b.ownerDocument.defaultView || window).document).querySelector) ? void 0 : f.call(d, "script[nonce]")) ? c.nonce || c.getAttribute("nonce") || "" : "") && b.setAttribute("nonce", d);
        (d = a.getElementsByTagName("script")[0]) && d.parentNode && d.parentNode.insertBefore(b, d);
      });
    }).call(this);
    ast('https://hilton.demdex.net/event?d_event\x3dimp\x26d_src\x3d447468\x26d_site\x3d5403532\x26d_creative\x3d167656477\x26d_adgroup\x3d522699588\x26d_placement\x3d330873403\x26d_campaign\x3d27392001');
  })();
})();
(function () {
  if (!window.GoogleTyFxhY || typeof window.GoogleTyFxhY.push !== 'function') {
    window.GoogleTyFxhY = [];
  }
  window.GoogleTyFxhY.push({
    '_scs_': 'BFcsvksrgZNr6BL-z29gP9eqPuAcAAAAAOAHgBAI',
    '_bgu_': 'https://pagead2.googlesyndication.com/bg/VOYjWJ9SYKUWeq_SiXQPiq5A6-bg1q_inShFnttaRxg.js',
    '_bgp_': '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\x3d',
    '_ifr_': 'false',
    '_isfl_': 'false'
  });
  var gsodar = document.createElement('script');
  gsodar.type = 'text/javascript';
  gsodar.async = true;
  gsodar.src = '//tpc.googlesyndication.com/sodar/UFYwWwmt.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(gsodar, s);
})();
detectExtensions();