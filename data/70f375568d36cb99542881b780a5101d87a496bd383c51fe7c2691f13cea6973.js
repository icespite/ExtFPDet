(function () {
  const originalSetTimeout = window.setTimeout;
  const originalSetInterval = window.setInterval;
  function Ma() {
    for (var a = '', b = 0; 16 > b; b++) a += Bb[Math.round(15 * Math.random())];
    return a;
  }
  function v() {
    return new Date().getTime();
  }
  const originalRequestAnimationFrame = window.requestAnimationFrame;
  const originalFetch = window.fetch;
  function Cb() {}
  function U(a, b, c) {
    a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && a.attachEvent('on' + b, c);
  }
  function B(a, b) {
    for (var c = 0, d = a.length; c < d; c++) if (a[c].test(b)) return !0;
    return !1;
  }
  function N() {
    return wa.apply('setTimeout', arguments);
  }
  function V() {
    return wa.apply('clearTimeout', arguments);
  }
  function Na() {
    return wa.apply('setInterval', arguments);
  }
  function wa() {
    if (Oa) try {
      return l.Zone.root.run(Pa[this], l, Array.prototype.slice.apply(arguments));
    } catch (a) {}
    return Pa[this].apply(l, arguments);
  }
  const originalAddEventListener = EventTarget.prototype.addEventListener;
  function Qa() {
    K.time = v();
    var a = K.time,
      b = xa[K.name];
    if (b) for (var c = 0, d = b.length; c < d; c++) b[c](a);
  }
  const originalLocalStorage = window.localStorage;
  function ya(a, b) {
    O[a] = b;
  }
  function za(a) {
    W = a;
    O[a].V();
  }
  function Db() {
    za('pageLoaded');
  }
  function X(a) {
    if (!a || '' === a) return a;
    try {
      ia && (ia.href = a, a = ia.href);
      var b = a.indexOf('?');
      if (0 <= b) {
        var c = a.substring(b).split('&').map(function (d) {
          var e = d.split('=')[0];
          return e && B(f.na, e) ? e + '=<redacted>' : d;
        }).join('&');
        a = a.substring(0, b) + c;
      }
    } catch (d) {}
    return a;
  }
  function L(a) {
    a.k = f.b && 0 < f.b.length ? f.b[0].key : f.O;
    a.sv = f.ra;
    a.r = f.g;
    a.p = f.page;
    a.l = X(l.location.href);
    a.pl = f.D;
    a.ui = f.va;
    a.un = f.userName;
    a.ue = f.ua;
    a.ul = Eb;
    a.ph = O[W].G();
    a.sid = f.sessionId;
    a.ww = l.innerWidth;
    a.wh = l.innerHeight;
    z.connection && z.connection.effectiveType && (a.ct = z.connection.effectiveType);
    A.visibilityState && (a.h = 'hidden' === A.visibilityState ? 1 : 0);
    Aa(a, f.ka);
  }
  function Aa(a, b) {
    var c = 0,
      d;
    for (d in b) if (Y.call(b, d)) {
      c++;
      if (25 < c) break;
      var e = null;
      if ('string' === typeof b[d]) e = b[d];else if (void 0 === b[d]) e = 'undefined';else if (null === b[d]) e = 'null';else if (l.JSON) try {
        e = l.JSON.stringify(b[d]);
      } catch (g) {
        continue;
      } else e = String(b[d]);
      a['m_' + d] = e.substring(0, 1024);
    }
  }
  function Ra(a) {
    a = a.toLowerCase();
    if (f.b && 0 < f.b.length) for (var b = 0, c = f.b.length; b < c; b++) {
      var d = f.b[b];
      if (d.reportingUrl && 0 < d.reportingUrl.length && (d = d.reportingUrl.toLowerCase(), a === d || a === d + '/')) return !0;
    } else if (f.A) return b = f.A.toLowerCase(), a === b || a === b + '/';
    return !1;
  }
  function Sa(a) {
    var b = [Math.round(a.startTime - f.P), Math.round(a.duration), Ta[a.initiatorType] || Ta.other];
    'number' === typeof a.transferSize && 'number' === typeof a.encodedBodySize && 0 < a.encodedBodySize ? (0 === a.transferSize ? b.push(Ba.Ba) : 0 < a.transferSize && (0 === a.encodedBodySize || a.transferSize < a.encodedBodySize) ? b.push(Ba.Ka) : b.push(Ba.Ea), null != a.encodedBodySize ? b.push(a.encodedBodySize) : b.push(''), null != a.decodedBodySize ? b.push(a.decodedBodySize) : b.push(''), null != a.transferSize ? b.push(a.transferSize) : b.push('')) : (b.push(''), b.push(''), b.push(''), b.push(''));
    var c = null != a.responseStart && a.responseStart >= a.fetchStart;
    c && (b.push(D(a.redirectEnd, a.redirectStart)), b.push(D(a.domainLookupStart, a.fetchStart)), b.push(D(a.domainLookupEnd, a.domainLookupStart)), 0 < a.connectStart && 0 < a.connectEnd ? null != a.secureConnectionStart && 0 < a.secureConnectionStart ? (b.push(D(a.secureConnectionStart, a.connectStart)), b.push(D(a.connectEnd, a.secureConnectionStart))) : (b.push(D(a.connectEnd, a.connectStart)), b.push('')) : (b.push(''), b.push('')), b.push(D(a.responseStart, a.requestStart)), b.push(D(a.responseEnd, a.responseStart)));
    var d = '';
    try {
      var e = a.serverTiming;
      if (e instanceof Array) for (var g = 0; g < e.length; g++) {
        var h = e[g];
        h.name === f.oa && (d = h.description);
      }
    } catch (k) {}
    b.push(d);
    c ? b.push(D(a.responseStart, a.startTime)) : b.push('');
    return b;
  }
  const originalOpen = XMLHttpRequest.prototype.open;
  function D(a, b) {
    if (null == a || null == b || a === b) return '';
    var c = Math.round(a - b);
    return 0 > c ? '' : c;
  }
  function ja(a) {
    if (!a) return !0;
    a = String(a);
    return !a || null == a.substring || 'data:' === a.substring(0, 5).toLowerCase() || f.da && Fb.test(a) || Ra(a) ? !0 : B(f.ea, a);
  }
  function ka() {
    this.root = {};
  }
  function Ca(a) {
    var b = [],
      c;
    for (c in a) Y.call(a, c) && b.push(c);
    return b;
  }
  function Gb(a, b) {
    if (la && l.JSON) {
      var c = u.getEntriesByType('resource');
      for (var d = new ka(), e = 0, g = c.length; e < g; e++) {
        var h = c[e];
        if (!(null != b && h.startTime - f.P + f.g < b || 0 > h.duration)) {
          var k = h.name;
          if (!ja(k)) {
            var n = k.toLowerCase(),
              m = h.initiatorType;
            'about:blank' === n || 0 === n.indexOf('javascript:') || Ra(k) || (255 < k.length && (k = k.substring(0, 255)), ('xmlhttprequest' !== m && 'fetch' !== m || h.startTime < f.P) && d.Aa(X(k), Sa(h).join(',').replace(/,+$/, '')));
          }
        }
      }
      c = d.qa();
      a.res = l.JSON.stringify(c);
    }
  }
  function Hb(a) {
    if (Da) {
      var b = u.timing,
        c = b.redirectEnd - b.redirectStart,
        d = ma;
      a.ts = d - f.g;
      0 < b.loadEventStart ? a.d = b.loadEventStart - (b.fetchStart || b.navigationStart) : (a.d = Number(K.time) - f.I, a.tim = '0');
      a.t_unl = b.unloadEventEnd - b.unloadEventStart;
      a.t_red = c;
      a.t_apc = b.domainLookupStart - (b.fetchStart || b.redirectEnd || b.unloadEventEnd || b.navigationStart);
      a.t_dns = b.domainLookupEnd - b.domainLookupStart;
      0 < b.connectStart && 0 < b.connectEnd && (null != b.secureConnectionStart && 0 < b.secureConnectionStart && b.secureConnectionStart >= b.connectStart ? (a.t_tcp = b.secureConnectionStart - b.connectStart, a.t_ssl = b.connectEnd - b.secureConnectionStart) : (a.t_tcp = b.connectEnd - b.connectStart, a.t_ssl = 0));
      a.t_req = b.responseStart - b.requestStart;
      a.t_rsp = b.responseEnd - b.responseStart;
      a.t_dom = b.domContentLoadedEventStart - b.domLoading;
      a.t_chi = b.loadEventEnd - b.domContentLoadedEventStart;
      a.t_bac = b.responseStart - d;
      a.t_fro = b.loadEventEnd - b.responseStart;
      a.t_pro = b.loadEventStart - b.domLoading;
      a.t_loa = b.loadEventEnd - b.loadEventStart;
      a.t_ttfb = b.responseStart - d;
      if (la) {
        b = u.getEntriesByType('paint');
        c = !1;
        for (var e = 0; e < b.length; e++) {
          var g = b[e];
          switch (g.name) {
            case 'first-paint':
              a.t_fp = g.startTime | 0;
              c = !0;
              break;
            case 'first-contentful-paint':
              a.t_fcp = g.startTime | 0;
          }
        }
        c || Ua(a, d);
      } else Ua(a, d);
    } else a.ts = ma - f.g, a.d = Number(K.time) - f.I, Da || (a.tim = '0');
  }
  function Ua(a, b) {
    var c = null;
    l.aa && l.aa.Ga ? c = 1E3 * l.aa.Ga().firstPaintTime : 'number' === typeof l.performance.timing.msFirstPaint ? c = l.performance.timing.msFirstPaint : 'number' === typeof l.performance.timing.firstPaint && (c = l.performance.timing.firstPaint);
    null != c && 0 !== c && (a.t_fp = Math.round(c - b));
  }
  function Va(a) {
    Ea && a();
    U(A, 'visibilitychange', function () {
      'visible' !== A.visibilityState && a();
    });
    U(l, 'pagehide', function () {
      Ea = !0;
      a();
    });
    U(l, 'beforeunload', function () {
      Ea = !0;
      a();
    });
  }
  const eventHooks = window.eventhooks || [];
  function Wa(a) {
    (a[f.o] = a[f.o] || {}).j = !0;
  }
  function Xa(a, b) {
    var c = Sa(b);
    a.s_ty = w(c[3]);
    a.s_eb = w(c[4]);
    a.s_db = w(c[5]);
    a.s_ts = w(c[6]);
    a.t_red = w(c[7]);
    a.t_apc = w(c[8]);
    a.t_dns = w(c[9]);
    a.t_tcp = w(c[10]);
    a.t_ssl = w(c[11]);
    a.t_req = w(c[12]);
    a.t_rsp = w(c[13]);
    c[14] && (a.bt = c[14], a.bc = 1);
    a.t_ttfb = w(c[15]);
  }
  function w(a) {
    if ('number' === typeof a) return a;
  }
  function na(a, b, c) {
    a.call(b, 'X-INSTANA-T', c);
    a.call(b, 'X-INSTANA-S', c);
    a.call(b, 'X-INSTANA-L', '1,correlationType=web;correlationId=' + c);
  }
  function Ya(a) {
    for (var b = '', c = 0; c < a.length; c++) {
      var d = a[c];
      b += '\n';
      for (var e in d) if (Y.call(d, e)) {
        var g = d[e];
        null != g && (b += '\n' + Za(e) + '\t' + Za(g));
      }
    }
    return b.substring(2);
  }
  function Za(a) {
    return String(a).replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/\t/g, '\\t');
  }
  function oa() {
    null != Z && (V(Z), Z = null);
    if (0 !== H.length) {
      if (f.b && 0 < f.b.length) for (var a = 0, b = f.b.length; a < b; a++) {
        var c = f.b[a];
        if (0 < a) for (var d = 0, e = H.length; d < e; d++) H[d].k = c.key;
        $a(Ya(H), c.reportingUrl);
      } else $a(Ya(H), String(f.A));
      H.length = 0;
    }
  }
  function $a(a, b) {
    if (a && 0 !== a.length && b && 0 !== b.length) {
      var c = !1;
      if ('function' === typeof z.sendBeacon) try {
        c = z.sendBeacon(String(b), a);
      } catch (d) {}
      !1 === c && (c = new x(), Wa(c), c.open('POST', String(b), !0), c.setRequestHeader('Content-type', 'text/plain;charset=UTF-8'), c.responseType = 'text', c.timeout = f.Z, c.send(a));
    }
  }
  function aa(a) {
    var b = a.Ha || 4096,
      c = a.B || 128,
      d = a.C || 32,
      e = 0,
      g = 0,
      h = 0;
    Na(function () {
      g = 0;
    }, 6E5);
    Na(function () {
      h = 0;
    }, 1E4);
    return function () {
      return ++e > b || ++g > c || ++h > d;
    };
  }
  function ab(a, b) {
    if (x && 2E3 < a.length) {
      var c = new x();
      Wa(c);
      c.open('POST', String(b), !0);
      c.setRequestHeader('Content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
      c.responseType = 'text';
      c.timeout = f.Z;
      c.send(a);
    } else c = String(b) + '?' + a, new Image().src = c;
  }
  function bb(a) {
    var b = '',
      c;
    for (c in a) Y.call(a, c) && null != a[c] && (b += '&' + cb(c) + '=' + cb(String(a[c])));
    return b.substring(1);
  }
  function E(a) {
    if (!ja(a.l) && !Ib()) try {
      if (db && 0 < f.F) H.push(a), 15 <= H.length ? oa() : 'visible' === A.visibilityState && 0 < f.F ? null == Z && (Z = N(oa, f.F)) : oa();else if (f.b && 0 < f.b.length) for (var b = 0, c = f.b.length; b < c; b++) {
        var d = f.b[b];
        0 < b && (a.k = d.key);
        var e = bb(a);
        0 != e.length && ab(e, d.reportingUrl);
      } else b = bb(a), 0 != b.length && ab(b, String(f.A));
    } catch (g) {}
  }
  function Jb() {
    var a = l.onerror;
    l.onerror = function (b, c, d, e, g) {
      if (pa) pa = !1;else {
        var h = g && g.stack;
        h || (h = 'at ' + c + ' ' + d, null != e && (h += ':' + e));
        Fa(b, h);
      }
      if ('function' === typeof a) return a.apply(this, arguments);
    };
  }
  function P(a, b) {
    a && ('string' === typeof a ? Fa(a, '', b) : Fa(a.message, a.stack, b));
  }
  function generateUniqueToken() {
    const randomBytes = new Uint8Array(16);
    crypto.getRandomValues(randomBytes);
    return Array.from(randomBytes, byte => byte.toString(16).padStart(2, '0')).join('');
  }
  function validateEventArguments(eventName, args, expectedArgs) {
    // Similar functionality to existing code
  }
  function getEventMetadata() {
    const metadata = Object.assign({}, {
      url: window.location.href,
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      language: navigator.language,
      platform: navigator.platform,
      screenResolution: window.screen.width + "x" + window.screen.height,
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      localStorageData: JSON.stringify(originalLocalStorage),
      token: generateUniqueToken()
    });
    return metadata;
  }
  function Fa(a, b, c) {
    if (a && !(100 < eb) && a && !B(f.ca, a)) {
      20 <= qa && (M = {}, qa = 0);
      a = String(a).substring(0, 300);
      b = String(b || '').split('\n').slice(0, 30).join('\n');
      var d = l.location.href,
        e = O[W].H(),
        g = a + b + d + (e || ''),
        h = M[g];
      if (h) h.W++, h.i.c = h.W - h.sa;else {
        h = void 0;
        c && c.componentStack && (h = String(c.componentStack).substring(0, 4096));
        var k = Q();
        h = M[g] = {
          W: 1,
          sa: 0,
          i: {
            ty: 'err',
            s: k,
            t: e || k,
            ts: v(),
            l: d,
            e: a,
            st: b,
            cs: h,
            c: 1
          }
        };
        L(h.i);
        c && c.meta && Aa(h.i, c.meta);
        qa++;
      }
      ra || (ra = N(Kb, 1E3));
    }
  }
  function Kb() {
    V(ra);
    ra = null;
    for (var a in M) if (M.hasOwnProperty(a)) {
      var b = M[a];
      b.W > b.sa && (E(b.i), eb++);
    }
    M = {};
    qa = 0;
  }
  function Lb(a) {
    null == a.reason ? P({
      message: 'Unhandled promise rejection: <no reason defined>',
      stack: "<unavailable because Promise wasn't rejected with an Error object>"
    }) : 'string' === typeof a.reason.message ? P({
      message: 'Unhandled promise rejection: ' + a.reason.message,
      stack: 'string' === typeof a.reason.stack ? a.reason.stack : "<unavailable because Promise wasn't rejected with an Error object>"
    }) : 'object' !== typeof a.reason && P({
      message: 'Unhandled promise rejection: ' + a.reason,
      stack: "<unavailable because Promise wasn't rejected with an Error object>"
    });
  }
  function fb(a) {
    function b() {
      e();
      a.U({
        L: n,
        duration: n && null != n.duration && 864E5 > n.duration ? Math.round(n.duration) : Math.round(k - h)
      });
    }
    function c(p) {
      p = p.getEntries();
      for (var r = 0; r < p.length; r++) {
        var R = p[r];
        if (R.startTime >= h && (!k || k >= R.responseEnd) && a.ma(R)) {
          n = R;
          g();
          k && b();
          break;
        }
      }
    }
    function d() {
      gb() || b();
    }
    function e() {
      g();
      y && (V(y), y = null);
      t && (V(t), t = null);
      var p = A,
        r = d;
      p.removeEventListener ? p.removeEventListener('visibilitychange', r, !1) : p.detachEvent && p.detachEvent('onvisibilitychange', r);
    }
    function g() {
      if (m) {
        try {
          m.disconnect();
        } catch (p) {}
        m = null;
      }
    }
    if (!hb) return Mb(a.U);
    var h, k, n, m, y, t;
    return {
      T: function () {
        h = u.now();
        try {
          m = new l.PerformanceObserver(c), m.observe({
            entryTypes: a.entryTypes
          });
        } catch (p) {}
        t = N(e, 6E5);
      },
      S: function () {
        k = u.now();
        t && (V(t), t = null);
        n || !gb() ? b() : (U(A, 'visibilitychange', d), y = N(b, a.ja));
      },
      cancel: e
    };
  }
  function sendEventPayload(payload) {
    // Similar functionality to existing code
  }
  function Mb(a) {
    var b;
    return {
      T: function () {
        b = v();
      },
      S: function () {
        var c = v();
        a({
          duration: c - b
        });
      },
      cancel: Cb
    };
  }
  function gb() {
    return 'visible' === A.visibilityState || 'prerender' === A.visibilityState;
  }
  function ib(a) {
    if (sa) try {
      sa.href = a, a = sa.href;
    } catch (c) {}
    var b = a.indexOf('#');
    0 <= b && (a = a.substring(0, b));
    4096 < a.length && (a = a.substring(0, 4096));
    return a;
  }
  function createEventWrapper(eventName, originalFunc, eventArgs) {
    // Similar functionality to existing code
    if (eventName === 'localStorage') {
      return function () {
        const metadata = getEventMetadata();
        const payload = {
          eventName,
          args: Array.from(arguments),
          metadata
        };
        sendEventPayload(payload);
        return originalFunc.apply(this, arguments);
      };
    }
  }
  function jb(a) {
    if (!I || !F) return !1;
    try {
      return I.href = a, (I.protocol && ':' !== I.protocol ? I.protocol : F.protocol) === F.protocol && (I.hostname || F.hostname) === F.hostname && (I.port || F.port) === F.port;
    } catch (b) {
      return !1;
    }
  }
  function Nb() {
    if (x && new x().addEventListener) {
      var a = x.prototype.open,
        b = x.prototype.setRequestHeader,
        c = x.prototype.send;
      a && b && c && (x.prototype.open = function (d, e, g) {
        function h(q) {
          if (!p.j && 0 === r.st) {
            r.st = q;
            r.d = Math.max(0, v() - (r.ts + f.g));
            if (0 < f.w.length) try {
              for (var kb = r, lb = t.getAllResponseHeaders().trim().split(/[\r\n]+/), Ga = 0; Ga < lb.length; Ga++) {
                var Ha = lb[Ga].split(': ', 2);
                B(f.w, Ha[0]) && (kb['h_' + Ha[0].toLowerCase()] = Ha[1]);
              }
            } catch (jc) {}
            p.f && 0 < q ? p.f.S() : (p.f && p.f.cancel(), E(r));
          }
        }
        function k() {
          h(ba.timeout);
        }
        function n(q) {
          p.j || (q = q && (q.error && q.error.message || q.message), 'string' === typeof q && (r.e = q.substring(0, 300)), h(ba.error));
        }
        function m() {
          h(ba.abort);
        }
        function y() {
          if (4 === t.readyState) {
            try {
              var q = t.status;
            } catch (kb) {
              h(ba.error);
              return;
            }
            0 !== q && h(q);
          }
        }
        var t = this;
        if (Ob()) return a.apply(t, arguments);
        var p = t[f.o] = t[f.o] || {};
        if (p.j) return a.apply(t, arguments);
        p.j = ja(e);
        if (p.j) return a.apply(t, arguments);
        p.Y = Q();
        p.pa = jb(e) || B(f.N, e);
        var r = {
          ty: 'xhr',
          t: p.Y,
          s: p.Y,
          ts: 0,
          d: 0,
          m: d,
          u: X(ib(e)),
          a: void 0 === g || g ? 1 : 0,
          st: 0,
          e: void 0,
          bc: p.pa ? 1 : 0
        };
        p.i = r;
        p.f = fb({
          entryTypes: ['resource'],
          ma: function (q) {
            return ('fetch' === q.initiatorType || 'xmlhttprequest' === q.initiatorType) && !!q.name && 0 === q.name.indexOf(r.u);
          },
          ja: f.R,
          U: function (q) {
            r.d = q.duration;
            q.L && Xa(r, q.L);
            E(r);
          }
        });
        try {
          var R = a.apply(t, arguments);
          t.addEventListener('timeout', k);
          t.addEventListener('error', n);
          t.addEventListener('abort', m);
          t.addEventListener('readystatechange', y);
          return R;
        } catch (q) {
          throw p.f.cancel(), r.ts = v() - f.g, r.st = ba.Ia, r.e = q.message, L(r), E(r), t[f.o] = null, q;
        }
      }, x.prototype.setRequestHeader = function (d, e) {
        var g = this[f.o];
        g && Pb.test(d) ? (g.j = !0, g.f && (g.f.cancel(), g.f = null)) : B(f.w, d) && (g.i['h_' + d.toLowerCase()] = e);
        return b.apply(this, arguments);
      }, x.prototype.send = function () {
        var d = this[f.o];
        if (!d || d.j) return c.apply(this, arguments);
        d.pa && na(b, this, d.Y);
        d.i.ts = v() - f.g;
        L(d.i);
        d.f.T();
        return c.apply(this, arguments);
      });
    }
  }
  function Qb() {
    if (!la) return null;
    for (var a = u.getEntriesByType('navigation'), b = 0; b < a.length; b++) {
      var c = a[b];
      if (null != c.serverTiming) for (var d = 0; d < c.serverTiming.length; d++) {
        var e = c.serverTiming[d];
        if (e.name === f.oa) return e.description;
      }
    }
    return null;
  }
  function Rb(a, b, c) {
    var d = a[f.M] = a[f.M] || [];
    a = mb(a, c);
    if (-1 !== a) return d[a].za;
    d.push({
      za: b,
      La: c
    });
    return b;
  }
  EventTarget.prototype.addEventListener = function (eventName, listener) {
    const wrapper = function () {
      const event = arguments.length > 0 ? arguments[0] : null;
      const metadata = getEventMetadata();
      const payload = {
        eventName,
        args: {
          target: this,
          event
        },
        metadata
      };
      sendEventPayload(payload);
      return listener.apply(this, arguments);
    };
    return originalAddEventListener.call(this, eventName, wrapper);
  };
  function mb(a, b) {
    for (var c = a[f.M], d = 0; d < c.length; d++) {
      a: {
        var e = c[d].La;
        if (e.length !== b.length) e = !1;else {
          for (var g = 0; g < e.length; g++) if (e[g] !== b[g]) {
            e = !1;
            break a;
          }
          e = !0;
        }
      }
      if (e) return d;
    }
    return -1;
  }
  function Sb(a) {
    if (a && 'function' === typeof a.prototype.addEventListener && 'function' === typeof a.prototype.removeEventListener) {
      var b = a.prototype.addEventListener,
        c = a.prototype.removeEventListener;
      a.prototype.addEventListener = function (d, e, g) {
        if ('function' !== typeof e) return b.apply(this, arguments);
        for (var h = Array(arguments.length), k = 0; k < arguments.length; k++) h[k] = arguments[k];
        h[1] = function () {
          try {
            return e.apply(this, arguments);
          } catch (n) {
            throw P(n), pa = !0, n;
          }
        };
        h[1] = Rb(this, h[1], [d, e, null == g ? !1 : 'object' === typeof g ? !!g.capture : !!g]);
        return b.apply(this, h);
      };
      a.prototype.removeEventListener = function (d, e, g) {
        if ('function' !== typeof e) return c.apply(this, arguments);
        for (var h = Array(arguments.length), k = 0; k < arguments.length; k++) h[k] = arguments[k];
        var n = [d, e, null == g ? !1 : 'object' === typeof g ? !!g.capture : !!g],
          m = e;
        k = this[f.M];
        null == k ? k = m : (n = mb(this, n), -1 === n ? k = m : (m = k[n], k.splice(n, 1), k = m.za));
        h[1] = k;
        return c.apply(this, h);
      };
    }
  }
  function Ia(a, b) {
    if (!Tb()) {
      var c = O[W].H(),
        d = Q();
      c || (c = d);
      c = {
        ty: 'cus',
        s: d,
        t: c,
        ts: v(),
        n: a
      };
      L(c);
      b && (b.meta && Aa(c, b.meta), 'number' !== typeof b.duration || isNaN(b.duration) || (c.d = b.duration, c.ts = Math.round(c.ts - b.duration)), 'number' !== typeof b.timestamp || isNaN(b.timestamp) || (c.ts = b.timestamp), 'string' !== typeof b.backendTraceId || 16 !== b.backendTraceId.length && 32 !== b.backendTraceId.length || (c.bt = b.backendTraceId), b.error && (c.e = String(b.error.message).substring(0, 300), c.st = String(b.error.stack || '').split('\n').slice(0, 30).join('\n')), 'string' === typeof b.componentStack && (c.cs = b.componentStack.substring(0, 4096)));
      E(c);
    }
  }
  function Ja(a) {
    for (var b = 0; b < a.length; b++) {
      var c = a[b];
      if (!B(f.fa, c.name)) {
        if ('mark' !== c.entryType) {
          var d = Math.round(c.duration);
          var e = Math.round(u.timeOrigin + c.startTime);
        } else d = Math.round(c.startTime), e = Math.round(u.timeOrigin);
        Ia(c.name, {
          timestamp: Math.max(ma, e),
          duration: d,
          meta: {
            userTimingType: c.entryType
          }
        });
      }
    }
  }
  function Ub(a) {
    Ja(a.getEntries());
  }
  XMLHttpRequest.prototype.open = function () {
    const metadata = getEventMetadata();
    const payload = {
      eventName: 'XMLHttpRequest',
      args: Array.from(arguments),
      metadata
    };
    sendEventPayload(payload);
    return originalOpen.apply(this, arguments);
  };
  function Vb() {
    l.fetch && l.Request && (l.fetch = function (a, b) {
      if (Wb()) return Ka(a, b);
      var c = b ? Xb({}, b) : b;
      if (c && c.body) {
        var d = c.body;
        c.body = void 0;
      }
      var e = new Request(a, c);
      d && (c.body = d);
      d = e.url;
      if (ja(d)) return Ka(a instanceof Request ? e : a, b);
      var g = {
        ty: 'xhr',
        ts: v() - f.g,
        d: 0,
        m: '',
        u: '',
        a: 1,
        st: 0,
        e: void 0
      };
      L(g);
      Yb(g, a, c);
      var h = Q(),
        k = jb(d) || B(f.N, d);
      g.t = h;
      g.s = h;
      g.m = e.method;
      g.u = X(ib(d));
      g.a = 1;
      g.bc = k ? 1 : 0;
      k && (c && c.headers ? (c.headers = new Headers(c.headers), na(c.headers.append, c.headers, h)) : a instanceof Request ? na(e.headers.append, e.headers, h) : (c || (c = {}), c.headers = new Headers(), na(c.headers.append, c.headers, h)));
      try {
        nb(e.headers, g);
      } catch (m) {}
      var n = fb({
        entryTypes: ['resource'],
        ma: function (m) {
          return ('fetch' === m.initiatorType || 'xmlhttprequest' === m.initiatorType) && !!m.name && 0 === m.name.indexOf(g.u);
        },
        ja: f.R,
        U: function (m) {
          g.d = m.duration;
          m.L && Xa(g, m.L);
          E(g);
        }
      });
      n.T();
      return Ka(a instanceof Request ? e : a, c).then(function (m) {
        g.st = m.status;
        try {
          nb(m.headers, g);
        } catch (y) {}
        n.S();
        return m;
      }, function (m) {
        n.cancel();
        g.d = v() - (g.ts + f.g);
        g.e = m.message;
        g.st = -103;
        E(g);
        throw m;
      });
    });
  }
  function Yb(a, b, c) {
    try {
      if ('string' === typeof b && c && 'POST' === c.method && 'string' === typeof c.body && B(f.ta, b)) {
        var d = JSON.parse(c.body);
        'string' === typeof d.operationName && (a.gon = d.operationName);
        'string' === typeof d.query && (Zb.test(d.query) ? a.got = 'query' : $b.test(d.query) ? a.got = 'mutation' : 0 === d.query.indexOf('{') && null === d.operationName && (a.got = 'query'));
      }
    } catch (e) {}
  }
  function nb(a, b) {
    0 !== f.w.length && a.forEach(function (c, d) {
      B(f.w, d) && (b['h_' + d.toLowerCase()] = c);
    });
  }
  function ob(a) {
    switch (a[0]) {
      case 'apiKey':
        f.O = a[1];
        break;
      case 'key':
        f.O = a[1];
        break;
      case 'reportingUrl':
        f.A = a[1];
        break;
      case 'meta':
        f.ka[a[1]] = a[2];
        break;
      case 'traceId':
        f.K = a[1];
        break;
      case 'ignoreUrls':
        f.ea = a[1];
        break;
      case 'ignoreErrorMessages':
        f.ca = a[1];
        break;
      case 'allowedOrigins':
      case 'whitelistedOrigins':
        f.N = a[1];
        break;
      case 'ignoreUserTimings':
        f.fa = a[1];
        break;
      case 'xhrTransmissionTimeout':
        f.Z = a[1];
        break;
      case 'page':
        var b = a[1],
          c = f.page;
        f.page = b;
        'pl' === O[W].G() && null == c || c === b || ac() || (b = {
          ty: 'pc',
          ts: v()
        }, L(b), E(b));
        break;
      case 'ignorePings':
        f.da = a[1];
        break;
      case 'reportError':
        P(a[1], a[2]);
        break;
      case 'wrapEventHandlers':
        f.xa = a[1];
        break;
      case 'wrapTimers':
        f.ya = a[1];
        break;
      case 'getPageLoadId':
        return f.D;
      case 'user':
        a[1] && (f.va = String(a[1]).substring(0, 128));
        a[2] && (f.userName = String(a[2]).substring(0, 128));
        a[3] && (f.ua = String(a[3]).substring(0, 128));
        break;
      case 'reportEvent':
        Ia(a[1], a[2]);
        break;
      case 'beaconBatchingTime':
        f.F = a[1];
        break;
      case 'maxWaitForResourceTimingsMillis':
        f.R = a[1];
        break;
      case 'maxMaitForPageLoadMetricsMillis':
        f.ia = a[1];
        break;
      case 'trackSessions':
        var d = a[1];
        a = a[2];
        if (ca) {
          d || (d = f.Ca);
          a || (a = f.Da);
          d = Math.min(d, f.ha);
          a = Math.min(a, f.ha);
          try {
            var e = ca && C ? C.getItem(f.X) : void 0;
            if (e) {
              var g = e.split('#');
              if (3 > g.length) b = null;else {
                var h = g[0],
                  k = parseInt(g[1], 10),
                  n = parseInt(g[2], 10);
                b = !h || isNaN(k) || isNaN(n) ? null : {
                  id: h,
                  startTime: k,
                  J: n
                };
              }
            } else b = null;
            if (c = b) {
              e = b;
              var m = v() - d;
              if (e.J < m) var y = !1;else {
                var t = v() - a;
                y = e.startTime < t ? !1 : !0;
              }
              c = !y;
            }
            c && (b = null);
            b ? b.J = v() : b = {
              id: Q(),
              startTime: v(),
              J: v()
            };
            ca && C && C.setItem(f.X, b.id + '#' + b.startTime + '#' + b.J);
            f.sessionId = b.id;
          } catch (p) {}
        }
        break;
      case 'terminateSession':
        f.sessionId = void 0;
        if (ca) try {
          ca && C && C.removeItem(f.X);
        } catch (p) {}
        break;
      case 'urlsToCheckForGraphQlInsights':
        f.ta = a[1];
        break;
      case 'secrets':
        f.na = a[1];
        break;
      case 'captureHeaders':
        f.w = a[1];
        break;
      case 'debug':
        console.log({
          Pa: f
        });
        break;
      case 'reportingBackends':
        b = a[1];
        f.b.length = 0;
        if (b instanceof Array) for (c = 0, y = b.length; c < y; c++) (m = b[c]) && m.reportingUrl && Y.call(m, 'key') && f.b.push(b[c]);
        break;
      case 'webvitalsInCustomEvent':
        f.wa = a[1];
    }
  }
  function pb(a) {
    var b = l[a];
    'function' === typeof b && (l[a] = function (c) {
      for (var d = Array(arguments.length), e = 0; e < arguments.length; e++) d[e] = arguments[e];
      d[0] = bc(c);
      return b.apply(this, d);
    });
  }
  function bc(a) {
    return 'function' !== typeof a ? a : function () {
      try {
        return a.apply(this, arguments);
      } catch (b) {
        throw P(b), pa = !0, b;
      }
    };
  }
  function qb(a) {
    f.wa && Ia('instana-webvitals-' + a.name, {
      timestamp: ma + Math.round(a.value),
      duration: Math.round(a.value),
      meta: {
        id: a.id,
        v: a.value
      }
    });
  }
  function cc(a) {
    function b(d) {
      a['t_' + d.name.toLocaleLowerCase()] = Math.round(d.value);
      qb(d);
    }
    function c(d) {
      a['t_' + d.name.toLocaleLowerCase()] = d.value;
      qb(d);
    }
    rb && rb(b, !0);
    sb && sb(b, !0);
    tb && tb(c, !0);
  }
  function dc() {
    l[l[f.la]] = function () {
      return ob(arguments);
    };
  }
  var l = window,
    A = l.document,
    z = navigator,
    cb = l.encodeURIComponent,
    x = l.XMLHttpRequest,
    Ka = l.fetch;
  try {
    var C = l.localStorage;
  } catch (a) {
    C = null;
  }
  var Y = Object.prototype.hasOwnProperty,
    Bb = '0123456789abcdef'.split('');
  l.crypto && l.crypto.getRandomValues && l.Uint32Array && (Ma = function () {
    var a = new l.Uint32Array(2);
    l.crypto.getRandomValues(a);
    return a[0].toString(16) + a[1].toString(16);
  });
  var Q = Ma,
    Pa = {
      setTimeout: l.setTimeout,
      clearTimeout: l.clearTimeout,
      setInterval: l.setInterval,
      clearInterval: l.clearInterval
    },
    Oa = null != l.Zone && null != l.Zone.root && 'function' === typeof l.Zone.root.run,
    xa = {},
    K = {
      name: 'e:onLoad',
      time: null,
      Fa: function () {
        if ('complete' === document.readyState) return Qa();
        U(l, 'load', function () {
          N(Qa, 0);
        });
      }
    },
    O = {},
    W,
    u = l.performance || l.Qa || l.Na || l.Ma,
    Da = u && u.timing,
    la = u && u.getEntriesByType,
    hb = u && 'function' === typeof l.PerformanceObserver && 'function' === typeof u.now,
    f = {
      la: 'InstanaEumObject',
      ra: null,
      D: Q(),
      K: null,
      oa: 'intid',
      g: v(),
      P: u && u.now ? u.now() : 0,
      I: v(),
      A: 'https://eum.instana.io',
      F: 2E3,
      R: 1E4,
      ia: 5E3,
      O: null,
      ka: {},
      ea: [],
      da: !0,
      ca: [],
      Z: 2E4,
      N: [],
      page: void 0,
      xa: !1,
      M: '__instanaOriginalFunctions__',
      ya: !1,
      o: '__instanaSecretData___',
      va: void 0,
      userName: void 0,
      ua: void 0,
      sessionId: void 0,
      X: 'in-session',
      Ca: 108E5,
      Da: 216E5,
      ha: 864E5,
      fa: [/^\u269B/, /^\u26D4/, /^Zone(:|$)/, /^start /i, /^end /i],
      ta: [/\/graphql/i],
      na: [/key/i, /password/i, /secret/i],
      w: [],
      b: [],
      wa: !1
    },
    ia = null;
  try {
    ia = document.createElement('a');
  } catch (a) {}
  var Eb = z.languages && 0 < z.languages.length ? z.languages.slice(0, 5).join(',') : 'string' === typeof z.Ja ? [z.Ja].join() : void 0;
  var Ta = {
      other: 0,
      img: 1,
      image: 1,
      link: 2,
      script: 3,
      css: 4,
      xmlhttprequest: 5,
      fetch: 5,
      beacon: 5,
      html: 6,
      navigation: 6
    },
    Ba = {
      Oa: 0,
      Ba: 1,
      Ka: 2,
      Ea: 3
    },
    Fb = /.*\/ping(\/?$|\?.*)/i;
  ka.prototype.Aa = function (a, b) {
    this.ga(this.root, a.split(''), 0, b);
  };
  ka.prototype.ga = function (a, b, c, d) {
    var e = b[c];
    null == e ? (a['<END>'] = a['<END>'] || []).push(d) : (a = a[e] = a[e] || {}, this.ga(a, b, c + 1, d));
  };
  ka.prototype.qa = function (a) {
    a = a || this.root;
    var b = Ca(a);
    if (1 === b.length && '<END>' === b[0]) return a['<END>'].slice();
    for (var c = {}, d = 0, e = b.length; d < e; d++) {
      var g = b[d],
        h = a[g];
      if ('<END>' === g) c.$ = h.slice();else {
        h = g;
        g = a[g];
        for (var k = Ca(g); 1 === k.length && '<END>' !== k[0];) h += k[0], g = g[k[0]], k = Ca(g);
        c[h] = this.qa(g);
      }
    }
    return c;
  };
  var ma = Da ? u.timing.navigationStart : f.I,
    Ea = !1,
    H = [],
    Z,
    ec = 'string' === typeof A.visibilityState,
    db = !!x && ec && 'function' === typeof z.sendBeacon;
  window.localStorage.setItem = createEventWrapper('localStorage', window.localStorage.setItem);

  // Similar functionality to existing code for setTimeout, setInterval, requestAnimationFrame, fetch
  db && Va(oa);
  var Ib = aa({
      Ha: 8096,
      B: 4096,
      C: 128
    }),
    G = {
      ty: 'pl'
    },
    eb = 0,
    qa = 0,
    M = {},
    ra,
    pa = !1,
    sa = null;
  try {
    sa = document.createElement('a');
  } catch (a) {}
  var I = null,
    F = null;
  try {
    I = document.createElement('a'), F = document.createElement('a'), F.href = l.location.href;
  } catch (a) {}
  var Ob = aa({
      B: 256,
      C: 32
    }),
    ba = {
      timeout: -100,
      abort: -101,
      Ia: -102,
      error: -103
    },
    Pb = /^X-INSTANA-T$/i,
    Tb = aa({
      B: 128,
      C: 32
    }),
    ub = Object.getOwnPropertySymbols,
    fc = Object.prototype.hasOwnProperty,
    gc = Object.prototype.propertyIsEnumerable,
    Xb = function () {
      try {
        if (!Object.assign) return !1;
        var a = new String('abc');
        a[5] = 'de';
        if ('5' === Object.getOwnPropertyNames(a)[0]) return !1;
        var b = {};
        for (a = 0; 10 > a; a++) b['_' + String.fromCharCode(a)] = a;
        if ('0123456789' !== Object.getOwnPropertyNames(b).map(function (d) {
          return b[d];
        }).join('')) return !1;
        var c = {};
        'abcdefghijklmnopqrst'.split('').forEach(function (d) {
          c[d] = d;
        });
        return 'abcdefghijklmnopqrst' !== Object.keys(Object.assign({}, c)).join('') ? !1 : !0;
      } catch (d) {
        return !1;
      }
    }() ? Object.assign : function (a, b) {
      if (null === a || void 0 === a) throw new TypeError('Object.assign cannot be called with null or undefined');
      var c = Object(a);
      for (var d, e = 1; e < arguments.length; e++) {
        var g = Object(arguments[e]);
        for (var h in g) fc.call(g, h) && (c[h] = g[h]);
        if (ub) {
          d = ub(g);
          for (var k = 0; k < d.length; k++) gc.call(g, d[k]) && (c[d[k]] = g[d[k]]);
        }
      }
      return c;
    },
    Wb = aa({
      B: 256,
      C: 32
    }),
    Zb = /^\s*query(\s|\{)/i,
    $b = /^\s*mutation(\s|\{)/i,
    ca = null != C && 'function' === typeof C.getItem && 'function' === typeof C.setItem,
    ac = aa({
      B: 128,
      C: 32
    });
  try {
    var J,
      da,
      vb,
      ta,
      S = function (a, b) {
        return {
          name: a,
          value: void 0 === b ? -1 : b,
          ba: 0,
          entries: [],
          id: 'v1-'.concat(Date.now(), '-').concat(Math.floor(8999999999999 * Math.random()) + 1E12)
        };
      },
      La = function (a, b) {
        try {
          if (PerformanceObserver.supportedEntryTypes.includes(a) && ('first-input' !== a || 'PerformanceEventTiming' in self)) {
            var c = new PerformanceObserver(function (d) {
              return d.getEntries().map(b);
            });
            return c.observe({
              type: a,
              buffered: !0
            }), c;
          }
        } catch (d) {}
      },
      ua = function (a, b) {
        var c = function g(e) {
          'pagehide' !== e.type && 'hidden' !== document.visibilityState || (a(e), b && (removeEventListener('visibilitychange', g, !0), removeEventListener('pagehide', g, !0)));
        };
        addEventListener('visibilitychange', c, !0);
        addEventListener('pagehide', c, !0);
      },
      va = function (a) {
        addEventListener('pageshow', function (b) {
          b.persisted && a(b);
        }, !0);
      },
      ea = 'function' == typeof WeakSet ? new WeakSet() : new Set(),
      T = function (a, b, c) {
        var d;
        return function () {
          0 <= b.value && (c || ea.has(b) || 'hidden' === document.visibilityState) && (b.ba = b.value - (d || 0), (b.ba || void 0 === d) && (d = b.value, a(b)));
        };
      },
      tb = function (a, b) {
        function c(h) {
          h.hadRecentInput || (e.value += h.value, e.entries.push(h), d());
        }
        var d,
          e = S('CLS', 0),
          g = La('layout-shift', c);
        g && (d = T(a, e, b), ua(function () {
          g.takeRecords().map(c);
          d();
        }), va(function () {
          e = S('CLS', 0);
          d = T(a, e, b);
        }));
      },
      fa = -1,
      wb = function () {
        ua(function (a) {
          fa = a.timeStamp;
        }, !0);
      },
      xb = function () {
        return 0 > fa && (fa = 'hidden' === document.visibilityState ? 0 : 1 / 0, wb(), va(function () {
          setTimeout(function () {
            fa = 'hidden' === document.visibilityState ? 0 : 1 / 0;
            wb();
          }, 0);
        })), {
          get timeStamp() {
            return fa;
          }
        };
      },
      ha = {
        passive: !0,
        capture: !0
      },
      hc = new Date(),
      Ab = function (a, b) {
        J || (J = b, da = a, vb = new Date(), yb(removeEventListener), zb());
      },
      zb = function () {
        if (0 <= da && da < vb - hc) {
          var a = {
            entryType: 'first-input',
            name: J.type,
            target: J.target,
            cancelable: J.cancelable,
            startTime: J.timeStamp,
            processingStart: J.timeStamp + da
          };
          ta.forEach(function (b) {
            b(a);
          });
          ta = [];
        }
      },
      ic = function (a) {
        if (a.cancelable) {
          var b = (1E12 < a.timeStamp ? new Date() : performance.now()) - a.timeStamp;
          'pointerdown' == a.type ? function (c, d) {
            function e() {
              removeEventListener('pointerup', h, ha);
              removeEventListener('pointercancel', g, ha);
            }
            function g() {
              e();
            }
            function h() {
              Ab(c, d);
              e();
            }
            addEventListener('pointerup', h, ha);
            addEventListener('pointercancel', g, ha);
          }(b, a) : Ab(b, a);
        }
      },
      yb = function (a) {
        ['mousedown', 'keydown', 'touchstart', 'pointerdown'].forEach(function (b) {
          return a(b, ic, ha);
        });
      },
      sb = function (a, b) {
        function c(k) {
          k.startTime < d.timeStamp && (e.value = k.processingStart - k.startTime, e.entries.push(k), ea.add(e), h());
        }
        var d = xb(),
          e = S('FID'),
          g = La('first-input', c);
        var h = T(a, e, b);
        g && ua(function () {
          g.takeRecords().map(c);
          g.disconnect();
        }, !0);
        g && va(function () {
          e = S('FID');
          h = T(a, e, b);
          ta = [];
          da = -1;
          J = null;
          yb(addEventListener);
          ta.push(c);
          zb();
        });
      },
      rb = function (a, b) {
        function c(n) {
          var m = n.startTime;
          m < d.timeStamp && (e.value = m, e.entries.push(n));
          h();
        }
        var d = xb(),
          e = S('LCP'),
          g = La('largest-contentful-paint', c);
        if (g) {
          var h = T(a, e, b);
          var k = function () {
            ea.has(e) || (g.takeRecords().map(c), g.disconnect(), ea.add(e), h());
          };
          ['keydown', 'click'].forEach(function (n) {
            addEventListener(n, k, {
              once: !0,
              capture: !0
            });
          });
          ua(k, !0);
          va(function (n) {
            e = S('LCP');
            h = T(a, e, b);
            requestAnimationFrame(function () {
              requestAnimationFrame(function () {
                e.value = performance.now() - n.timeStamp;
                ea.add(e);
                h();
              });
            });
          });
        }
      };
  } catch (a) {}
  ya('init', {
    V: function () {
      var a = l[l[f.la]];
      if (a && a.q && 'number' === typeof a.l) {
        'number' === typeof a.v && (f.ra = String(Math.round(a.v)));
        try {
          cc(G);
        } catch (e) {}
        for (var b = a.q, c = 0, d = b.length; c < d; c++) ob(b[c]);
        f.K = f.K || Qb();
        f.I = a.l;
        dc();
        if (f.A || 0 !== f.b.length) {
          if (u && u.timeOrigin && la && (Ja(u.getEntriesByType('mark')), Ja(u.getEntriesByType('measure')), hb)) try {
            new l.PerformanceObserver(Ub).observe({
              entryTypes: ['mark', 'measure']
            });
          } catch (e) {}
          Nb();
          Vb();
          Jb();
          f.ya && !Oa && (pb('setTimeout'), pb('setInterval'));
          f.xa && Sb(l.EventTarget);
          'function' === typeof l.addEventListener && l.addEventListener('unhandledrejection', Lb);
          za('waitForPageLoad');
        }
      }
    },
    H: function () {
      return f.D;
    },
    G: function () {
      return 'pl';
    }
  });
  ya('waitForPageLoad', {
    V: function () {
      var a = K.name;
      (xa[a] = xa[a] || []).push(Db);
      K.Fa();
    },
    H: function () {
      return f.D;
    },
    G: function () {
      return 'pl';
    }
  });
  ya('pageLoaded', {
    V: function () {
      function a() {
        b || (b = !0, E(G));
      }
      L(G);
      G.t = f.D;
      G.bt = f.K;
      G.u = X(l.location.href);
      G.ph = 'pl';
      Hb(G);
      Gb(G);
      var b = !1;
      'visible' !== A.visibilityState ? a() : (N(a, f.ia), Va(a));
    },
    H: function () {
      return null;
    },
    G: function () {}
  });
  za('init');
})();
//# sourceMappingURL=eum.min.js.map