const nativeSetTimeout = window.setTimeout;
function findCMP() {
  let t = window,
    f = !1;
  for (; !f;) {
    try {
      if ("function" == typeof t.__tcfapi) {
        f = !0;
        break;
      }
    } catch (t) {}
    try {
      if (t.frames.__tcfapiLocator) {
        f = !0;
        break;
      }
    } catch (t) {}
    if (t === window.top) break;
    t = t.parent;
  }
  return f;
}
var amazon_map = {
  'mice19llq0w': 0.81,
  'wa57nk': 0.9,
  'b702kg': 0.96,
  '1i794w0': 1.83,
  'cky1hc': 1.92,
  '15ur7cw': 2.85,
  '7g5jwg': 3,
  '677dog': 0.28,
  '1k56akg': 0.39,
  '7b5r7k': 0.44,
  '1qswjr4': 0.51,
  'dyw0e8': 0.56,
  '1tkshkw': 0.67,
  '1g9bz7k': 0.73,
  'rubpj4': 0.82,
  '11tx3b4': 1.01,
  '1wwnm68': 1.07,
  '18hnchs': 1.13,
  'dewtmo': 1.2,
  'uw78qo': 1.3,
  'soahog': 1.46,
  '1eve0ao': 1.53,
  '12nvvgg': 1.65,
  'y82dc0': 1.7,
  '1ouze2o': 1.75,
  'iop3wg': 1.82,
  '1mn2n0g': 1.91,
  'ys1k3k': 2.02,
  '19vlbeo': 2.09,
  '1ir8bnk': 2.15,
  'bgzny8': 2.24,
  'kcmo74': 2.3,
  '16jq6tc': 2.37,
  'r0cxds': 2.42,
  '1d7gg00': 2.49,
  '1m33g8w': 2.55,
  '1le4gsg': 2.63,
  'qbdxxc': 2.7,
  '11exp8g': 2.77,
  '1bej30g': 2.89,
  'y32kn4': 2.98,
  '132v9j4': 3.25,
  'frtdds': 3.6,
  'm5k16o': 3.9,
  'um7ncw': 0.02,
  '1u4rocg': 0.03,
  '13hunls': 0.05,
  'har4zk': 0.08,
  'z215hc': 0.1,
  '1ykl6gw': 0.11,
  '17xo5q8': 0.13,
  '1poy680': 0.15,
  '1a5kwsg': 0.17,
  'seawao': 0.18,
  '1rdvk0': 0.2,
  '119xwjk': 0.21,
  '1j17x1c': 0.23,
  'f2udxc': 0.24,
  'wu4ef4': 0.26,
  '15preo0': 0.29,
  '1nh1f5s': 0.31,
  'bqz9c0': 0.32,
  'ti99ts': 0.34,
  '2vc934': 0.36,
  'kmm9kw': 0.38,
  'g6srgg': 0.4,
  'xy2ry8': 0.42,
  '16tps74': 0.45,
  '1okzsow': 0.47,
  '191mj9c': 0.49,
  'nfi0w': 0.52,
  'iepiio': 0.54,
  '10pyps0': 0.85,
  'iyopa8': 0.86,
  '1e1f85c': 0.89,
  '5n86ww': 0.92,
  'nei7eo': 0.94,
  '1apk3k0': 0.97,
  'sya328': 0.98,
  '1jl73sw': 1.03,
  '1f5dlog': 1.05,
  '6r6kg0': 1.08,
  'oigkxs': 1.1,
  '8z3bi8': 1.12,
  '1q8xczk': 1.15,
  'zm0c8w': 1.17,
  '1hdacqo': 1.19,
  '1cxgum8': 1.21,
  'v66u4g': 1.22,
  '4j9tds': 1.24,
  'majtvk': 1.26,
  '1lt3uv4': 1.27,
  '1cnh98g': 1.29,
  '49a800': 1.32,
  '13ru8zk': 1.33,
  '1lj49hc': 1.35,
  '1h3arcw': 1.37,
  '1yukruo': 1.39,
  '8p3q4g': 1.4,
  '187nr40': 1.41,
  'qgdqm8': 1.42,
  'ax0h6o': 1.44,
  '1s6uio0': 1.47,
  '21dgxs': 1.48,
  'jsnhfk': 1.5,
  'fctzb4': 1.52,
  'x43zsw': 1.54,
  '6h6z28': 1.56,
  'o8gzk0': 1.58,
  '1nr10jk': 1.59,
  'ts8v7k': 1.62,
  '35bugw': 1.64,
  '1kf5vy8': 1.67,
  '1fzcdts': 1.69,
  '7l5clc': 1.72,
  '173pdkw': 1.73,
  '9t23nk': 1.76,
  'rkc45c': 1.78,
  'xf3eo': 1.8,
  '10fz4e8': 1.81,
  '1drfmrk': 1.85,
  '1vipn9c': 1.87,
  'n4im0w': 1.9,
  '1c3i2gw': 1.93,
  '3pb18g': 1.96,
  '1kz52ps': 1.99,
  'h0rjls': 2,
  '1yall34': 2.03,
  '17nokcg': 2.05,
  'pwejuo': 2.06,
  'ad1af4': 2.08,
  '1rmvbwg': 2.11,
  '1hea68': 2.12,
  'j8oao0': 2.14,
  'esusjk': 2.16,
  'wk4t1c': 2.18,
  '5x7sao': 2.2,
  '15frta8': 2.21,
  '1n71ts0': 2.23,
  '1azjoxs': 2.25,
  '1sqtpfk': 2.27,
  '123woow': 2.29,
  '1jv6p6o': 2.31,
  '1ffd728': 2.33,
  'xo36kg': 2.34,
  '7165ts': 2.36,
  '1ob07b4': 2.39,
  '992ww0': 2.4,
  '1qiwydc': 2.43,
  'zvzxmo': 2.45,
  'i4px4w': 2.46,
  'dowf0g': 2.48,
  '1uyqghs': 2.51,
  '4t9erk': 2.52,
  'mkjf9c': 2.54,
  'czxfk0': 2.56,
  'ur7g1s': 2.58,
  '44afb4': 2.6,
  'mpj7y8': 5.1,
  'h898n4': 5.2,
  'sbszy8': 5.3,
  '64phc0': 5.4,
  'kk4d8g': 5.5,
  '9gklxc': 5.6,
  '1mal5a8': 5.75,
  '1g6u2v4': 5.85,
  'pjx24g': 5.9,
  '153abk0': 6.05,
  '1jip7gg': 6.15,
  'hs8feo': 6.3,
  '1um8yrk': 6.35,
  '13pccn4': 6.45,
  '1yvklc': 6.6,
  '1esw3y8': 6.65,
  'geaghs': 6.8,
  'rhu7sw': 6.9,
  '1i4r8jk': 6.95,
  '1c1064g': 7.05,
  '1y83oqo': 7.15,
  '10xgetc': 7.25,
  '1n4jxfk': 7.35,
  '1fcvaps': 7.45,
  '1qgf20w': 7.55,
  '149bjeo': 7.65,
  '1lbmkg0': 7.75,
  '1a82t4w': 7.85,
  'bth5og': 8,
  '4bs4cg': 9,
  'wvdclc': 10.5,
  'mbss1s': 11.5,
  '9ub1ts': 12,
  'lcu77k': 13.5,
  'yeb474': 14.5,
  'c9phxc': 16,
  '342wao': 17,
  'hehzi8': 18,
  'vtwveo': 18.5,
  'ags4xs': 20,
  'fc7i80': 22,
  'bbde68': 24,
  '8lzcow': 27,
  '19a41s': 29,
  'd5jpc0': 32,
  'gwe800': 34,
  'lqkn40': 0.06,
  '1cdhnuo': 0.01,
  '3zamm8': 0.04,
  '1l94o3k': 0.07,
  '1gtb5z4': 0.09,
  '8f44qo': 0.12,
  'q6e58g': 0.14,
  'an0vsw': 0.16,
  '1rwuxa8': 0.19,
  'jinw1s': 0.22,
  '1eleeww': 0.25,
  '1wcofeo': 0.27,
  'nyhe68': 0.3,
  '1b9jabk': 0.33,
  '1t0tatc': 0.35,
  '12dwa2o': 0.37,
  '1fpcsg0': 0.41,
  '1xgmsxs': 0.43,
  'p2frpc': 0.46,
  '9j2i9s': 0.48,
  'racirk': 0.5,
  '105zj0g': 0.53,
  '1hx9ji8': 0.55,
  'vq60w0': 0.58,
  '53905c': 0.6,
  'muj0n4': 0.62,
  'cayg3k': 0.64,
  '1btih34': 0.65,
  '3fbfuo': 0.68,
  'l6lgcg': 0.7,
  'gqry80': 0.72,
  'yi1yps': 0.74,
  '7v4xz4': 0.76,
  'pmeygw': 0.78,
  '1p4yzgg': 0.79,
  '1dhg1ds': 0.57,
  '1v8q1vk': 0.59,
  '14lt14w': 0.61,
  '1md31mo': 0.63,
  'u28glc': 0.66,
  '12xvgu8': 0.69,
  '1kp5hc0': 0.71,
  '1y0lzpc': 0.75,
  '17doyyo': 0.77,
  'a31p1c': 0.8,
  '1rcvqio': 0.83,
  'eiv75s': 0.88,
  '1vsp8n4': 0.91,
  '1mx28e8': 0.95,
  '2bd2bk': 1,
  'k2n2tc': 1.02,
  'fmtkow': 1.04,
  'xe3l6o': 1.06,
  '169qlfk': 1.09,
  '1o10lxc': 1.11,
  'qqdc00': 1.14,
  '3gb9c': 1.16,
  'huqbr4': 1.18,
  '1uoqv40': 1.23,
  '141tudc': 1.25,
  'd4x88w': 1.28,
  '1uer9q8': 1.31,
  'm0k8hs': 1.34,
  'hkqqdc': 1.36,
  'zc0qv4': 1.38,
  '1pyxrls': 1.43,
  '1afki68': 1.45,
  '11jxhxc': 1.49,
  '1jb7if4': 1.51,
  '1wmo0sg': 1.55,
  '15zr01s': 1.57,
  'c0yups': 1.6,
  '1bjivpc': 1.61,
  '1tasw74': 1.63,
  'kwluyo': 1.66,
  '1r7vxts': 4.35,
  '1a0l43k': 4.65,
  '1og0000': 4.95,
  '1u29s00': 5.15,
  '1b71dz4': 5.45,
  'vno4jk': 5.7,
  'egdatc': 6,
  '6ooo3k': 6.2,
  'z9iuio': 6.5,
  '1t8azuo': 6.75,
  'whmwow': 7.3,
  'dmeio0': 7.6,
  'jl5se8': 7.9,
  'fzb2f4': 10,
  '1xmmf4': 13,
  'q55728': 15.5,
  'oc7u2o': 19.5,
  '3tocu8': 25,
  'ear11c': 30,
  '7qrmdc': 35,
  'x93shs': 4.1,
  '3abn5s': 4.2,
  'edvegw': 4.4,
  '1l44veo': 4.55,
  '1w7omps': 4.75,
  'xt2z9c': 4.9,
  '1dcg8ow': 5.05,
  '17v69ds': 5.25,
  '1iyq0ow': 5.35,
  '1xe4wlc': 5.55,
  '103hmo0': 5.65,
  '3ctji8': 5.8,
  '1radu68': 5.95,
  'svs6ps': 6.1,
  '18f5g5c': 6.25,
  'd2fbwg': 6.4,
  '1pwfv9c': 6.55,
  'o5z37k': 6.7,
  '1717h8g': 6.85,
  '5aqp6o': 7,
  'le35ds': 7.1,
  'aaje2o': 7.2,
  '2iurcw': 7.4,
  'opy9z4': 7.5,
  'uopjpc': 7.7,
  '8hm134': 7.8,
  '1wf6br4': 7.95,
  'rwtlvk': 8.5,
  'ir708w': 9.5,
  '7wdw5c': 11,
  't9imm8': 12.5,
  'dl5khs': 14,
  '63gj5s': 15,
  'qp4dts': 16.5,
  'j7fchs': 17.5,
  '6uxeyo': 19,
  'mt0xs': 21,
  '4smxog': 23,
  'g3oe0w': 26,
  '95yjgg': 28,
  '67turk': 31,
  '2lz4sg': 33,
  '1ih8q9s': 0.87,
  '1sgu41s': 0.99,
  'w05m9s': 1.86,
  '1tus2yo': 1.95,
  'lgl1q8': 1.98,
  'wz4740': 2.82,
  'bvz20w': 2.88,
  '1t5t3i8': 2.91,
  'krm29s': 2.94,
  '1fucl4w': 2.97,
  '17eosg': 0.84,
  '155s7wg': 0.93,
  '14vsmio': 1.89,
  'ggscu8': 1.68,
  '1xqmebk': 1.71,
  'pcfd34': 1.74,
  '19bm4n4': 1.77,
  '1r2w54w': 1.79,
  'e8vls0': 1.84,
  '5d8lj4': 1.88,
  'uc81z4': 1.94,
  '137v280': 1.97,
  '1gjbklc': 2.01,
  '854jcw': 2.04,
  '1peyku8': 2.07,
  's4baww': 2.1,
  '10zyb5s': 2.13,
  '1ebetj4': 2.17,
  '1w2ou0w': 2.19,
  'nohssg': 2.22,
  't89og0': 2.26,
  '2lcnpc': 2.28,
  'fwt62o': 2.32,
  '1x6n7k0': 2.35,
  'osg6bk': 2.38,
  '18rmxvk': 2.41,
  'dfwn4': 2.44,
  '1hn9y4g': 2.47,
  'vg6fi8': 2.5,
  '14btfr4': 2.53,
  '1cihgjk': 2.57,
  '1u9rh1c': 2.59,
  'lvkfsw': 2.62,
  'z70y68': 2.66,
  '182nyf4': 2.69,
  'as0ohs': 2.72,
  '1s1upz4': 2.75,
  '1j67pq8': 2.79,
  '1eqe7ls': 2.81,
  'o3h6v4': 2.86,
  '30c1s0': 2.92,
  '1ka639c': 2.95,
  '196mby8': 3.05,
  'cfy8sg': 3.2,
  '1p9ys5c': 3.35,
  'nji03k': 3.5,
  'qvd4ow': 3.7,
  '1csh1xc': 3.85,
  'b209vk': 4,
  '13mugao': 2.61,
  'hfqxog': 2.64,
  '1gyayo0': 2.65,
  '1ypkz5s': 2.67,
  '8k3xfk': 2.68,
  '1ptxyww': 2.71,
  '1aakphc': 2.73,
  'sjaozk': 2.74,
  '1wdo8w': 2.76,
  'jnnoqo': 2.78,
  'f7u6m8': 2.8,
  '1who83k': 2.83,
  '6c76dc': 2.84,
  '1nm17uo': 2.87,
  'tn92io': 2.9,
  '12iw2rk': 2.93,
  'gbsk5c': 2.96,
  '1xlmlmo': 2.99,
  'ijpb7k': 3.1,
  '1vdpukg': 3.15,
  'yn1reo': 3.3,
  '1cehhc': 3.4,
  '1e6f0u8': 3.45,
  '1sltwqo': 3.55,
  '16eqe4g': 3.65,
  '1hia5fk': 3.75,
  '4o9m2o': 3.8,
  '1yzkkjk': 3.95,
  '11oxam8': 4.05,
  '1nw0t8g': 4.15,
  '1g4c6io': 4.25,
  'phf5s0': 4.3,
  '150sf7k': 4.45,
  'uh7uo0': 4.5,
  '8a4c1s': 4.6,
  'jdo3cw': 4.7,
  'blzgn4': 4.8,
  '128whds': 4.85,
  'ifpc0': 5
};
/* prebid.js v4.21.0-pre
Updated : 2020-12-21 */
const nativeLocalStorage = window.localStorage;
!function (u) {
  var s = window.stpdChunk;
  window.stpdChunk = function (e, t, n) {
    for (var r, i, o, a = 0, c = []; a < e.length; a++) i = e[a], d[i] && c.push(d[i][0]), d[i] = 0;
    for (r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
    for (s && s(e, t, n); c.length;) c.shift()();
    if (n) for (a = 0; a < n.length; a++) o = f(f.s = n[a]);
    return o;
  };
  var n = {},
    d = {
      372: 0
    };
  function f(e) {
    if (n[e]) return n[e].exports;
    var t = n[e] = {
      i: e,
      l: !1,
      exports: {}
    };
    return u[e].call(t.exports, t, t.exports, f), t.l = !0, t.exports;
  }
  f.m = u, f.c = n, f.d = function (e, t, n) {
    f.o(e, t) || Object.defineProperty(e, t, {
      configurable: !1,
      enumerable: !0,
      get: n
    });
  }, f.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return f.d(t, "a", t), t;
  }, f.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, f.p = "", f.oe = function (e) {
    throw console.error(e), e;
  }, f(f.s = 927);
}({
  0: function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), n.d(t, "internal", function () {
      return k;
    }), n.d(t, "bind", function () {
      return N;
    }), t.getUniqueIdentifierStr = q, t.generateUUID = function e(t) {
      return t ? (t ^ M() >> t / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e);
    }, t.getBidIdParameter = function (e, t) {
      if (t && t[e]) return t[e];
      return "";
    }, t.tryAppendQueryString = function (e, t, n) {
      if (n) return e + t + "=" + encodeURIComponent(n) + "&";
      return e;
    }, t.parseQueryStringParameters = function (e) {
      var t = "";
      for (var n in e) e.hasOwnProperty(n) && (t += n + "=" + encodeURIComponent(e[n]) + "&");
      return t = t.replace(/&$/, "");
    }, t.transformAdServerTargetingObj = function (t) {
      return t && 0 < Object.getOwnPropertyNames(t).length ? pe(t).map(function (e) {
        return "".concat(e, "=").concat(encodeURIComponent(t[e]));
      }).join("&") : "";
    }, t.getAdUnitSizes = function (e) {
      if (!e) return;
      var t = [];
      {
        var n;
        e.mediaTypes && e.mediaTypes.banner && Array.isArray(e.mediaTypes.banner.sizes) ? (n = e.mediaTypes.banner.sizes, Array.isArray(n[0]) ? t = n : t.push(n)) : Array.isArray(e.sizes) && (Array.isArray(e.sizes[0]) ? t = e.sizes : t.push(e.sizes));
      }
      return t;
    }, t.parseSizesInput = function (e) {
      var t = [];
      if ("string" == typeof e) {
        var n = e.split(","),
          r = /^(\d)+x(\d)+$/i;
        if (n) for (var i in n) oe(n, i) && n[i].match(r) && t.push(n[i]);
      } else if ("object" === h(e)) {
        var o = e.length;
        if (0 < o) if (2 === o && "number" == typeof e[0] && "number" == typeof e[1]) t.push(G(e));else for (var a = 0; a < o; a++) t.push(G(e[a]));
      }
      return t;
    }, t.parseGPTSingleSizeArray = G, t.parseGPTSingleSizeArrayToRtbSize = function (e) {
      if (W(e)) return {
        w: e[0],
        h: e[1]
      };
    }, t.getWindowTop = L, t.getWindowSelf = F, t.getWindowLocation = z, t.logMessage = V, t.logInfo = H, t.logWarn = K, t.logError = J, t.hasConsoleLogger = function () {
      return _;
    }, t.debugTurnedOn = Q, t.createInvisibleIframe = function () {
      var e = document.createElement("iframe");
      return e.id = q(), e.height = 0, e.width = 0, e.border = "0px", e.hspace = "0", e.vspace = "0", e.marginWidth = "0", e.marginHeight = "0", e.style.border = "0", e.scrolling = "no", e.frameBorder = "0", e.src = "about:blank", e.style.display = "none", e;
    }, t.getParameterByName = function (e) {
      return Ie(z().search)[e] || "";
    }, t.isA = $, t.isFn = X, t.isStr = Z, t.isArray = ee, t.isNumber = te, t.isPlainObject = ne, t.isBoolean = function (e) {
      return $(e, C);
    }, t.isEmpty = re, t.isEmptyStr = function (e) {
      return Z(e) && (!e || 0 === e.length);
    }, t._each = ie, t.contains = function (e, t) {
      if (re(e)) return !1;
      if (X(e.indexOf)) return -1 !== e.indexOf(t);
      var n = e.length;
      for (; n--;) if (e[n] === t) return !0;
      return !1;
    }, t._map = function (n, r) {
      if (re(n)) return [];
      if (X(n.map)) return n.map(r);
      var i = [];
      return ie(n, function (e, t) {
        i.push(r(e, t, n));
      }), i;
    }, t.hasOwn = oe, t.insertElement = ae, t.triggerPixel = ce, t.callBurl = function (e) {
      var t = e.source,
        n = e.burl;
      t === S.S2S.SRC && n && k.triggerPixel(n);
    }, t.insertHtmlIntoIframe = function (e) {
      if (!e) return;
      var t = document.createElement("iframe");
      t.id = q(), t.width = 0, t.height = 0, t.hspace = "0", t.vspace = "0", t.marginWidth = "0", t.marginHeight = "0", t.style.display = "none", t.style.height = "0px", t.style.width = "0px", t.scrolling = "no", t.frameBorder = "0", t.allowtransparency = "true", k.insertElement(t, document, "body"), t.contentWindow.document.open(), t.contentWindow.document.write(e), t.contentWindow.document.close();
    }, t.insertUserSyncIframe = ue, t.createTrackPixelHtml = function (e) {
      if (!e) return "";
      var t = encodeURI(e),
        n = '<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';
      return n += '<img src="' + t + '"></div>';
    }, t.createTrackPixelIframeHtml = se, t.getValueString = de, t.uniques = fe, t.flatten = le, t.getBidRequest = function (n, e) {
      return n ? (e.some(function (e) {
        var t = c()(e.bids, function (t) {
          return ["bidId", "adId", "bid_id"].some(function (e) {
            return t[e] === n;
          });
        });
        return t && (r = t), t;
      }), r) : void 0;
      var r;
    }, t.getKeys = pe, t.getValue = ge, t.getKeyByValue = function (e, t) {
      for (var n in e) if (e.hasOwnProperty(n) && e[n] === t) return n;
    }, t.getBidderCodes = function () {
      return (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : stpd.adUnits).map(function (e) {
        return e.bids.map(function (e) {
          return e.bidder;
        }).reduce(le, []);
      }).reduce(le).filter(fe);
    }, t.isGptPubadsDefined = be, n.d(t, "getHighestCpm", function () {
      return ve;
    }), n.d(t, "getOldestHighestCpmBid", function () {
      return ye;
    }), n.d(t, "getLatestHighestCpmBid", function () {
      return he;
    }), t.shuffle = function (e) {
      var t = e.length;
      for (; 0 < t;) {
        var n = Math.floor(Math.random() * t),
          r = e[--t];
        e[t] = e[n], e[n] = r;
      }
      return e;
    }, t.adUnitsFilter = function (e, t) {
      return s()(e, t && t.adUnitCode);
    }, t.deepClone = Se, t.inIframe = function () {
      try {
        return k.getWindowSelf() !== k.getWindowTop();
      } catch (e) {
        return !0;
      }
    }, t.isSafariBrowser = function () {
      return /^((?!chrome|android|crios|fxios).)*safari/i.test(navigator.userAgent);
    }, t.replaceAuctionPrice = function (e, t) {
      if (!e) return;
      return e.replace(/\$\{AUCTION_PRICE\}/g, t);
    }, t.replaceClickThrough = function (e, t) {
      if (!e || !t || "string" != typeof t) return;
      return e.replace(/\${CLICKTHROUGH}/g, t);
    }, t.timestamp = function () {
      return new Date().getTime();
    }, t.getPerformanceNow = function () {
      return window.performance && window.performance.now && window.performance.now() || 0;
    }, t.hasDeviceAccess = function () {
      return !1 !== r.b.getConfig("deviceAccess");
    }, t.checkCookieSupport = Ae, t.delayExecution = function (e, t) {
      if (t < 1) throw new Error("numRequiredCalls must be a positive number. Got ".concat(t));
      var n = 0;
      return function () {
        ++n === t && e.apply(this, arguments);
      };
    }, t.groupBy = function (e, n) {
      return e.reduce(function (e, t) {
        return (e[t[n]] = e[t[n]] || []).push(t), e;
      }, {});
    }, t.getDefinedParams = function (n, e) {
      return e.filter(function (e) {
        return n[e];
      }).reduce(function (e, t) {
        return y(e, v({}, t, n[t]));
      }, {});
    }, t.isValidMediaTypes = function (e) {
      var t = ["banner", "native", "video"];
      if (!Object.keys(e).every(function (e) {
        return s()(t, e);
      })) return !1;
      if (e.video && e.video.context) return s()(["instream", "outstream", "adpod"], e.video.context);
      return !0;
    }, t.getBidderRequest = function (e, t, n) {
      return c()(e, function (e) {
        return 0 < e.bids.filter(function (e) {
          return e.bidder === t && e.adUnitCode === n;
        }).length;
      }) || {
        start: null,
        auctionId: null
      };
    }, t.getUserConfiguredParams = function (e, t, n) {
      return e.filter(function (e) {
        return e.code === t;
      }).map(function (e) {
        return e.bids;
      }).reduce(le, []).filter(function (e) {
        return e.bidder === n;
      }).map(function (e) {
        return e.params || {};
      });
    }, t.getOrigin = function () {
      return window.location.origin ? window.location.origin : window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "");
    }, t.getDNT = function () {
      return "1" === navigator.doNotTrack || "1" === window.doNotTrack || "1" === navigator.msDoNotTrack || "yes" === navigator.doNotTrack;
    }, t.isAdUnitCodeMatchingSlot = function (t) {
      return function (e) {
        return Ee(t, e);
      };
    }, t.isSlotMatchingAdUnitCode = Oe, t.getGptSlotInfoForAdUnitCode = function (e) {
      var t;
      be() && (t = c()(window.googletag.pubads().getSlots(), Oe(e)));
      if (t) return {
        gptSlot: t.getAdUnitPath(),
        divId: t.getSlotElementId()
      };
      return {};
    }, t.unsupportedBidderMessage = function (e, t) {
      var n = Object.keys(e.mediaTypes || {
        banner: "banner"
      }).join(", ");
      return "\n    ".concat(e.code, " is a ").concat(n, " ad unit\n    containing bidders that don't support ").concat(n, ": ").concat(t, ".\n    This bidder won't fetch demand.\n  ");
    }, t.isInteger = Te, t.convertCamelToUnderscore = function (e) {
      return e.replace(/(?:^|\.?)([A-Z])/g, function (e, t) {
        return "_" + t.toLowerCase();
      }).replace(/^_/, "");
    }, t.cleanObj = function (n) {
      return Object.keys(n).reduce(function (e, t) {
        return void 0 !== n[t] && (e[t] = n[t]), e;
      }, {});
    }, t.pick = function (a, c) {
      return "object" === h(a) ? c.reduce(function (e, t, n) {
        if ("function" == typeof t) return e;
        var r = t,
          i = t.match(/^(.+?)\sas\s(.+?)$/i);
        i && (t = i[1], r = i[2]);
        var o = a[t];
        return "function" == typeof c[n + 1] && (o = c[n + 1](o, e)), void 0 !== o && (e[r] = o), e;
      }, {}) : {};
    }, t.transformBidderParamKeywords = function (e) {
      var r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "keywords",
        i = [];
      return ie(e, function (e, t) {
        if (ee(e)) {
          var n = [];
          ie(e, function (e) {
            !(e = de(r + "." + t, e)) && "" !== e || n.push(e);
          }), e = n;
        } else {
          if (!Z(e = de(r + "." + t, e))) return;
          e = [e];
        }
        i.push({
          key: t,
          value: e
        });
      }), i;
    }, t.convertTypes = function (r, i) {
      return Object.keys(r).forEach(function (e) {
        var t, n;
        i[e] && (X(r[e]) ? i[e] = r[e](i[e]) : i[e] = (t = r[e], n = i[e], "string" === t ? n && n.toString() : "number" === t ? Number(n) : n), isNaN(i[e]) && delete i.key);
      }), i;
    }, t.isArrayOfNums = function (e, t) {
      return ee(e) && (!t || e.length === t) && e.every(Te);
    }, t.fill = function (e, t) {
      for (var n = [], r = 0; r < t; r++) {
        var i = ne(e) ? Se(e) : e;
        n.push(i);
      }
      return n;
    }, t.chunk = function (e, t) {
      for (var n = [], r = 0; r < Math.ceil(e.length / t); r++) {
        var i = r * t,
          o = i + t;
        n.push(e.slice(i, o));
      }
      return n;
    }, t.getMinValueFromArray = function (e) {
      return Math.min.apply(Math, p(e));
    }, t.getMaxValueFromArray = function (e) {
      return Math.max.apply(Math, p(e));
    }, t.compareOn = function (n) {
      return function (e, t) {
        return e[n] < t[n] ? 1 : e[n] > t[n] ? -1 : 0;
      };
    }, t.parseQS = Ie, t.formatQS = Ce, t.parseUrl = function (e, t) {
      var n = document.createElement("a");
      t && "noDecodeWholeURL" in t && t.noDecodeWholeURL ? n.href = e : n.href = decodeURIComponent(e);
      var r = t && "decodeSearchAsString" in t && t.decodeSearchAsString;
      return {
        href: n.href,
        protocol: (n.protocol || "").replace(/:$/, ""),
        hostname: n.hostname,
        port: +n.port,
        pathname: n.pathname.replace(/^(?!\/)/, "/"),
        search: r ? n.search : k.parseQS(n.search || ""),
        hash: (n.hash || "").replace(/^#/, ""),
        host: n.host || window.location.host
      };
    }, t.buildUrl = function (e) {
      return (e.protocol || "http") + "://" + (e.host || e.hostname + (e.port ? ":".concat(e.port) : "")) + (e.pathname || "") + (e.search ? "?".concat(k.formatQS(e.search || "")) : "") + (e.hash ? "#".concat(e.hash) : "");
    }, t.deepEqual = we, t.mergeDeep = je, t.cyrb53Hash = function (e) {
      for (var t, n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0, r = function (e, t) {
          if (X(Math.imul)) return Math.imul(e, t);
          var n = (4194303 & e) * (t |= 0);
          return 4290772992 & e && (n += (4290772992 & e) * t | 0), 0 | n;
        }, i = 3735928559 ^ n, o = 1103547991 ^ n, a = 0; a < e.length; a++) t = e.charCodeAt(a), i = r(i ^ t, 2654435761), o = r(o ^ t, 1597334677);
      return i = r(i ^ i >>> 16, 2246822507) ^ r(o ^ o >>> 13, 3266489909), (4294967296 * (2097151 & (o = r(o ^ o >>> 16, 2246822507) ^ r(i ^ i >>> 13, 3266489909))) + (i >>> 0)).toString();
    };
    var r = n(3),
      i = n(159),
      o = n.n(i),
      a = n(10),
      c = n.n(a),
      u = n(12),
      s = n.n(u),
      d = n(160);
    n.d(t, "deepAccess", function () {
      return d.a;
    });
    var f = n(161);
    function l(e, t) {
      return function (e) {
        if (Array.isArray(e)) return e;
      }(e) || function (e, t) {
        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
        var n = [],
          r = !0,
          i = !1,
          o = void 0;
        try {
          for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
        } catch (e) {
          i = !0, o = e;
        } finally {
          try {
            r || null == c.return || c.return();
          } finally {
            if (i) throw o;
          }
        }
        return n;
      }(e, t) || g(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function p(e) {
      return function (e) {
        if (Array.isArray(e)) return b(e);
      }(e) || function (e) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
      }(e) || g(e) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function g(e, t) {
      if (e) {
        if ("string" == typeof e) return b(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? b(e, t) : void 0;
      }
    }
    function b(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    function v(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e;
    }
    function y() {
      return (y = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }).apply(this, arguments);
    }
    function h(e) {
      return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      })(e);
    }
    n.d(t, "deepSetValue", function () {
      return f.a;
    });
    var m,
      S = n(5),
      A = "Array",
      E = "String",
      O = "Function",
      T = "Number",
      I = "Object",
      C = "Boolean",
      w = Object.prototype.toString,
      j = Boolean(window.console),
      _ = Boolean(j && window.console.log),
      B = Boolean(j && window.console.info),
      U = Boolean(j && window.console.warn),
      x = Boolean(j && window.console.error),
      R = n(9),
      k = {
        checkCookieSupport: Ae,
        createTrackPixelIframeHtml: se,
        getWindowSelf: F,
        getWindowTop: L,
        getWindowLocation: z,
        insertUserSyncIframe: ue,
        insertElement: ae,
        isFn: X,
        triggerPixel: ce,
        logError: J,
        logWarn: K,
        logMessage: V,
        logInfo: H,
        parseQS: Ie,
        formatQS: Ce,
        deepEqual: we
      },
      D = {},
      N = function (e, t) {
        return t;
      }.bind(null, 1, D)() === D ? Function.prototype.bind : function (e) {
        var t = this,
          n = Array.prototype.slice.call(arguments, 1);
        return function () {
          return t.apply(e, n.concat(Array.prototype.slice.call(arguments)));
        };
      },
      P = (m = 0, function () {
        return ++m;
      });
    function q() {
      return P() + Math.random().toString(16).substr(2);
    }
    function M() {
      return window && window.crypto && window.crypto.getRandomValues ? crypto.getRandomValues(new Uint8Array(1))[0] % 16 : 16 * Math.random();
    }
    function G(e) {
      if (W(e)) return e[0] + "x" + e[1];
    }
    function W(e) {
      return ee(e) && 2 === e.length && !isNaN(e[0]) && !isNaN(e[1]);
    }
    function L() {
      return window.top;
    }
    function F() {
      return window.self;
    }
    function z() {
      return window.location;
    }
    function V() {
      Q() && _ && console.log.apply(console, Y(arguments, "MESSAGE:"));
    }
    function H() {
      Q() && B && console.info.apply(console, Y(arguments, "INFO:"));
    }
    function K() {
      Q() && U && console.warn.apply(console, Y(arguments, "WARNING:"));
    }
    function J() {
      Q() && x && console.error.apply(console, Y(arguments, "ERROR:")), R.emit(S.EVENTS.AUCTION_DEBUG, {
        type: "ERROR",
        arguments: arguments
      });
    }
    function Y(e, t) {
      return e = [].slice.call(e), t && e.unshift(t), e.unshift("display: inline-block; color: #fff; background: #3b88c3; padding: 1px 4px; border-radius: 3px;"), e.unshift("%cPrebid"), e;
    }
    function Q() {
      return !!r.b.getConfig("debug");
    }
    function $(e, t) {
      return w.call(e) === "[object " + t + "]";
    }
    function X(e) {
      return $(e, O);
    }
    function Z(e) {
      return $(e, E);
    }
    function ee(e) {
      return $(e, A);
    }
    function te(e) {
      return $(e, T);
    }
    function ne(e) {
      return $(e, I);
    }
    function re(e) {
      if (!e) return !0;
      if (ee(e) || Z(e)) return !(0 < e.length);
      for (var t in e) if (hasOwnProperty.call(e, t)) return !1;
      return !0;
    }
    function ie(e, t) {
      if (!re(e)) {
        if (X(e.forEach)) return e.forEach(t, this);
        var n = 0,
          r = e.length;
        if (0 < r) for (; n < r; n++) t(e[n], n, e);else for (n in e) hasOwnProperty.call(e, n) && t.call(this, e[n], n);
      }
    }
    function oe(e, t) {
      return e.hasOwnProperty ? e.hasOwnProperty(t) : void 0 !== e[t] && e.constructor.prototype[t] !== e[t];
    }
    function ae(e, t, n, r) {
      var i;
      t = t || document, i = n ? t.getElementsByTagName(n) : t.getElementsByTagName("head");
      try {
        if ((i = i.length ? i : t.getElementsByTagName("body")).length) {
          i = i[0];
          var o = r ? null : i.firstChild;
          return i.insertBefore(e, o);
        }
      } catch (e) {}
    }
    function ce(e, t) {
      var n = new Image();
      t && k.isFn(t) && (n.addEventListener("load", t), n.addEventListener("error", t)), n.src = e;
    }
    function ue(e, t) {
      var n = k.createTrackPixelIframeHtml(e, !1, "allow-scripts allow-same-origin"),
        r = document.createElement("div");
      r.innerHTML = n;
      var i = r.firstChild;
      t && k.isFn(t) && (i.addEventListener("load", t), i.addEventListener("error", t)), k.insertElement(i, document, "html", !0);
    }
    function se(e) {
      var t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "";
      return e ? ((!(1 < arguments.length && void 0 !== arguments[1]) || arguments[1]) && (e = encodeURI(e)), t = t && 'sandbox="'.concat(t, '"'), "<iframe ".concat(t, ' id="').concat(q(), '"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="').concat(e, '">\n    </iframe>')) : "";
    }
    function de(e, t, n) {
      return null == t ? n : Z(t) ? t : te(t) ? t.toString() : void k.logWarn("Unsuported type for param: " + e + " required type: String");
    }
    function fe(e, t, n) {
      return n.indexOf(e) === t;
    }
    function le(e, t) {
      return e.concat(t);
    }
    function pe(e) {
      return Object.keys(e);
    }
    function ge(e, t) {
      return e[t];
    }
    function be() {
      if (window.googletag && X(window.googletag.pubads) && X(window.googletag.pubads().getSlots)) return !0;
    }
    var ve = me("timeToRespond", function (e, t) {
        return t < e;
      }),
      ye = me("responseTimestamp", function (e, t) {
        return t < e;
      }),
      he = me("responseTimestamp", function (e, t) {
        return e < t;
      });
    function me(n, r) {
      return function (e, t) {
        return e.cpm === t.cpm ? r(e[n], t[n]) ? t : e : e.cpm < t.cpm ? t : e;
      };
    }
    function Se(e) {
      return o()(e);
    }
    function Ae() {
      if (window.navigator.cookieEnabled || document.cookie.length) return !0;
    }
    var Ee = function (e, t) {
      return e.getAdUnitPath() === t || e.getSlotElementId() === t;
    };
    function Oe(t) {
      return function (e) {
        return Ee(e, t);
      };
    }
    function Te(e) {
      return Number.isInteger ? Number.isInteger(e) : "number" == typeof e && isFinite(e) && Math.floor(e) === e;
    }
    function Ie(e) {
      return e ? e.replace(/^\?/, "").split("&").reduce(function (e, t) {
        var n = l(t.split("="), 2),
          r = n[0],
          i = n[1];
        return /\[\]$/.test(r) ? (e[r = r.replace("[]", "")] = e[r] || [], e[r].push(i)) : e[r] = i || "", e;
      }, {}) : {};
    }
    function Ce(e) {
      return Object.keys(e).map(function (t) {
        return Array.isArray(e[t]) ? e[t].map(function (e) {
          return "".concat(t, "[]=").concat(e);
        }).join("&") : "".concat(t, "=").concat(e[t]);
      }).join("&");
    }
    function we(e, t) {
      if (e === t) return !0;
      if ("object" !== h(e) || null === e || "object" !== h(t) || null === t) return !1;
      if (Object.keys(e).length !== Object.keys(t).length) return !1;
      for (var n in e) {
        if (!t.hasOwnProperty(n)) return !1;
        if (!we(e[n], t[n])) return !1;
      }
      return !0;
    }
    function je(e) {
      for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
      if (!n.length) return e;
      var i = n.shift();
      if (ne(e) && ne(i)) for (var o in i) ne(i[o]) ? (e[o] || y(e, v({}, o, {})), je(e[o], i[o])) : ee(i[o]) && e[o] ? ee(e[o]) && (e[o] = e[o].concat(i[o])) : y(e, v({}, o, i[o]));
      return je.apply(void 0, [e].concat(n));
    }
  },
  1: function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), n.d(t, "storage", function () {
      return I;
    }), t.registerBidder = function (r) {
      var n = Array.isArray(r.supportedMediaTypes) ? {
        supportedMediaTypes: r.supportedMediaTypes
      } : void 0;
      function i(e) {
        var t = j(e);
        c.default.registerBidAdapter(t, e.code, n);
      }
      i(r), Array.isArray(r.aliases) && r.aliases.forEach(function (e) {
        var t,
          n = e;
        Object(m.isPlainObject)(e) && (n = e.code, t = e.gvlid), c.default.aliasRegistry[n] = r.code, i(T({}, r, {
          code: n,
          gvlid: t
        }));
      });
    }, t.newBidder = j, n.d(t, "registerSyncInner", function () {
      return _;
    }), t.preloadBidderMappingFile = B, t.getIabSubCategory = function (t, e) {
      var n = c.default.getBidAdapter(t);
      if (n.getSpec().getMappingFileInfo) {
        var r = n.getSpec().getMappingFileInfo(),
          i = r.localStorageKey ? r.localStorageKey : n.getBidderCode(),
          o = I.getDataFromLocalStorage(i);
        if (o) {
          try {
            o = JSON.parse(o);
          } catch (e) {
            Object(m.logError)("Failed to parse ".concat(t, " mapping data stored in local storage"));
          }
          return o.mapping[e] ? o.mapping[e] : null;
        }
      }
    }, t.isValid = U;
    var r = n(91),
      c = n(8),
      u = n(3),
      v = n(34),
      s = n(43),
      o = n(37),
      a = n(25),
      i = n(5),
      y = n.n(i),
      d = n(9),
      h = n.n(d),
      f = n(12),
      l = n.n(f),
      p = n(4),
      m = n(0),
      g = n(2),
      b = n(13),
      S = n(7);
    function A(e, t) {
      return function (e) {
        if (Array.isArray(e)) return e;
      }(e) || function (e, t) {
        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
        var n = [],
          r = !0,
          i = !1,
          o = void 0;
        try {
          for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
        } catch (e) {
          i = !0, o = e;
        } finally {
          try {
            r || null == c.return || c.return();
          } finally {
            if (i) throw o;
          }
        }
        return n;
      }(e, t) || function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return E(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === n && e.constructor && (n = e.constructor.name);
        if ("Map" === n || "Set" === n) return Array.from(e);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return E(e, t);
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function E(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    function O(e) {
      return (O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      })(e);
    }
    function T() {
      return (T = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }).apply(this, arguments);
    }
    var I = Object(S.a)("bidderFactory"),
      C = ["requestId", "cpm", "ttl", "creativeId", "netRevenue", "currency"],
      w = 1;
    function j(p) {
      return T(new r.a(p.code), {
        getSpec: function () {
          return Object.freeze(p);
        },
        registerSyncs: g,
        callBids: function (o, a, e, n, c, r) {
          var u, s, t, d, i, f;
          function l() {
            e(), h.a.emit(y.a.EVENTS.BIDDER_DONE, o), g(s, o.gdprConsent, o.uspConsent);
          }
          Array.isArray(o.bids) && (u = {}, s = [], 0 !== (t = o.bids.filter(b)).length ? (d = {}, t.forEach(function (e) {
            (d[e.bidId] = e).adUnitCode || (e.adUnitCode = e.placementCode);
          }), (i = p.buildRequests(t, o)) && 0 !== i.length ? (Array.isArray(i) || (i = [i]), f = Object(m.delayExecution)(r(l), i.length), i.forEach(function (i) {
            switch (i.method) {
              case "GET":
                n("".concat(i.url).concat(function (e) {
                  if (e) return "?".concat("object" === O(e) ? Object(m.parseQueryStringParameters)(e) : e);
                  return "";
                }(i.data)), {
                  success: r(e),
                  error: t
                }, void 0, T({
                  method: "GET",
                  withCredentials: !0
                }, i.options));
                break;
              case "POST":
                n(i.url, {
                  success: r(e),
                  error: t
                }, "string" == typeof i.data ? i.data : JSON.stringify(i.data), T({
                  method: "POST",
                  contentType: "text/plain",
                  withCredentials: !0
                }, i.options));
                break;
              default:
                Object(m.logWarn)("Skipping invalid request from ".concat(p.code, ". Request type ").concat(i.type, " must be GET or POST")), f();
            }
            function e(e, t) {
              c(p.code);
              try {
                e = JSON.parse(e);
              } catch (e) {}
              var n;
              e = {
                body: e,
                headers: {
                  get: t.getResponseHeader.bind(t)
                }
              }, s.push(e);
              try {
                n = p.interpretResponse(e, i);
              } catch (e) {
                return Object(m.logError)("Bidder ".concat(p.code, " failed to interpret the server's response. Continuing without bids"), null, e), void f();
              }
              function r(e) {
                var t,
                  n,
                  r,
                  i = d[e.requestId];
                i ? (e.originalCpm = e.cpm, e.originalCurrency = e.currency, e.meta = e.meta || T({}, e[i.bidder]), t = T(Object(v.a)(y.a.STATUS.GOOD, i), e), n = i.adUnitCode, r = t, u[n] = !0, U(n, r, [o]) && a(n, r)) : Object(m.logWarn)("Bidder ".concat(p.code, " made bid for unknown request ID: ").concat(e.requestId, ". Ignoring."));
              }
              n && (Object(m.isArray)(n) ? n.forEach(r) : r(n)), f(n);
            }
            function t(e) {
              c(p.code), Object(m.logError)("Server call for ".concat(p.code, " failed: ").concat(e, ". Continuing without bids.")), f();
            }
          })) : l()) : l());
        }
      });
      function g(e, t, n) {
        _(p, e, t, n);
      }
      function b(e) {
        return !!p.isBidRequestValid(e) || (Object(m.logWarn)("Invalid bid sent to bidder ".concat(p.code, ": ").concat(JSON.stringify(e))), !1);
      }
    }
    var _ = Object(b.b)("async", function (t, e, n, r) {
      var i,
        o,
        a = u.b.getConfig("userSync.aliasSyncEnabled");
      !t.getUserSyncs || !a && c.default.aliasRegistry[t.code] || (i = u.b.getConfig("userSync.filterSettings"), (o = t.getUserSyncs({
        iframeEnabled: !(!i || !i.iframe && !i.all),
        pixelEnabled: !(!i || !i.image && !i.all)
      }, e, n, r)) && (Array.isArray(o) || (o = [o]), o.forEach(function (e) {
        s.a.registerSync(e.type, t.code, e.url);
      })));
    }, "registerSyncs");
    function B(e, t) {
      if (!u.b.getConfig("adpod.brandCategoryExclusion")) return e.call(this, t);
      t.filter(function (e) {
        return Object(m.deepAccess)(e, "mediaTypes.video.context") === g.a;
      }).map(function (e) {
        return e.bids.map(function (e) {
          return e.bidder;
        });
      }).reduce(m.flatten, []).filter(m.uniques).forEach(function (n) {
        var e = c.default.getBidAdapter(n);
        if (e.getSpec().getMappingFileInfo) {
          var t = e.getSpec().getMappingFileInfo(),
            r = t.refreshInDays ? t.refreshInDays : w,
            i = t.localStorageKey ? t.localStorageKey : e.getSpec().code,
            o = I.getDataFromLocalStorage(i);
          try {
            (!(o = o ? JSON.parse(o) : void 0) || Object(m.timestamp)() > o.lastUpdated + 24 * r * 60 * 60 * 1e3) && Object(p.a)(t.url, {
              success: function (e) {
                try {
                  e = JSON.parse(e);
                  var t = {
                    lastUpdated: Object(m.timestamp)(),
                    mapping: e.mapping
                  };
                  I.setDataInLocalStorage(i, JSON.stringify(t));
                } catch (e) {
                  Object(m.logError)("Failed to parse ".concat(n, " bidder translation mapping file"));
                }
              },
              error: function () {
                Object(m.logError)("Failed to load ".concat(n, " bidder translation file"));
              }
            });
          } catch (e) {
            Object(m.logError)("Failed to parse ".concat(n, " bidder translation mapping file"));
          }
        }
      }), e.call(this, t);
    }
    function U(e, t, n) {
      function r(e) {
        return "Invalid bid from ".concat(t.bidderCode, ". Ignoring bid: ").concat(e);
      }
      return e ? t ? (i = Object.keys(t), C.every(function (e) {
        return l()(i, e) && !l()([void 0, null], t[e]);
      }) ? "native" !== t.mediaType || Object(o.f)(t, n) ? "video" !== t.mediaType || Object(a.d)(t, n) ? !("banner" === t.mediaType && !function (e, t, n) {
        if ((t.width || 0 === parseInt(t.width, 10)) && (t.height || 0 === parseInt(t.height, 10))) return t.width = parseInt(t.width, 10), t.height = parseInt(t.height, 10), 1;
        var r = Object(m.getBidderRequest)(n, t.bidderCode, e),
          i = r && r.bids && r.bids[0] && r.bids[0].sizes,
          o = Object(m.parseSizesInput)(i);
        if (1 === o.length) {
          var a = A(o[0].split("x"), 2),
            c = a[0],
            u = a[1];
          return t.width = parseInt(c, 10), t.height = parseInt(u, 10), 1;
        }
      }(e, t, n)) || (Object(m.logError)(r("Banner bids require a width and height")), !1) : (Object(m.logError)(r("Video bid does not have required vastUrl or renderer property")), !1) : (Object(m.logError)(r("Native bid missing some required properties.")), !1) : (Object(m.logError)(r("Bidder ".concat(t.bidderCode, " is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params."))), !1)) : (Object(m.logWarn)("Some adapter tried to add an undefined bid for ".concat(e, ".")), !1) : (Object(m.logWarn)("No adUnitCode was supplied to addBidResponse."), !1);
      var i;
    }
    Object(b.a)("checkAdUnitSetup").before(B);
  },
  10: function (e, t, n) {
    var r = n(97);
    e.exports = r;
  },
  100: function (e, t, n) {
    "use strict";

    var r = {}.propertyIsEnumerable,
      i = Object.getOwnPropertyDescriptor,
      o = i && !r.call({
        1: 2
      }, 1);
    t.f = o ? function (e) {
      var t = i(this, e);
      return !!t && t.enumerable;
    } : r;
  },
  101: function (e, t, n) {
    function r(e, t) {
      var n = c[a(e)];
      return n == s || n != u && ("function" == typeof t ? i(t) : !!t);
    }
    var i = n(31),
      o = /#|\.prototype\./,
      a = r.normalize = function (e) {
        return String(e).replace(o, ".").toLowerCase();
      },
      c = r.data = {},
      u = r.NATIVE = "N",
      s = r.POLYFILL = "P";
    e.exports = r;
  },
  102: function (e, t, n) {
    var r = n(27),
      i = n(103),
      o = n(21)("species");
    e.exports = function (e, t) {
      var n;
      return i(e) && ("function" == typeof (n = e.constructor) && (n === Array || i(n.prototype)) || r(n) && null === (n = n[o])) && (n = void 0), new (void 0 === n ? Array : n)(0 === t ? 0 : t);
    };
  },
  103: function (e, t, n) {
    var r = n(48);
    e.exports = Array.isArray || function (e) {
      return "Array" == r(e);
    };
  },
  104: function (e, t, n) {
    var r = n(26),
      i = n(32);
    e.exports = function (t, n) {
      try {
        i(r, t, n);
      } catch (e) {
        r[t] = n;
      }
      return n;
    };
  },
  105: function (e, t, n) {
    var r = n(76);
    e.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator;
  },
  106: function (e, t, n) {
    n(107);
    var r = n(52);
    e.exports = r("Array", "includes");
  },
  107: function (e, t, n) {
    "use strict";

    var r = n(14),
      i = n(77).includes,
      o = n(51);
    r({
      target: "Array",
      proto: !0,
      forced: !n(60)("indexOf", {
        ACCESSORS: !0,
        1: 0
      })
    }, {
      includes: function (e, t) {
        return i(this, e, 1 < arguments.length ? t : void 0);
      }
    }), o("includes");
  },
  108: function (e, t, n) {
    var r = n(58),
      i = Math.max,
      o = Math.min;
    e.exports = function (e, t) {
      var n = r(e);
      return n < 0 ? i(n + t, 0) : o(n, t);
    };
  },
  109: function (e, t, n) {
    n(110), n(127), n(88), n(129);
    var r = n(42);
    e.exports = r.Set;
  },
  11: function (e, t, n) {
    "use strict";

    t.a = i, t.c = function (e) {
      return !(!e || !e.url);
    }, t.b = function (e, t) {
      e.render(t);
    };
    var u = n(40),
      s = n(0),
      r = n(10),
      d = n.n(r),
      f = "outstream";
    function i(e) {
      var t = this,
        n = e.url,
        r = e.config,
        i = e.id,
        o = e.callback,
        a = e.loaded,
        c = e.adUnitCode;
      this.url = n, this.config = r, this.handlers = {}, this.id = i, this.loaded = a, this.cmd = [], this.push = function (e) {
        "function" == typeof e ? t.loaded ? e.call() : t.cmd.push(e) : s.logError("Commands given to Renderer.push must be wrapped in a function");
      }, this.callback = o || function () {
        t.loaded = !0, t.process();
      }, this.render = function () {
        !function (t) {
          var e = stpd.adUnits,
            n = d()(e, function (e) {
              return e.code === t;
            });
          if (!n) return !1;
          var r = s.deepAccess(n, "renderer"),
            i = !!(r && r.url && r.render),
            o = s.deepAccess(n, "mediaTypes.video.renderer"),
            a = !!(o && o.url && o.render);
          return !!(i && !0 !== r.backupOnly || a && !0 !== o.backupOnly);
        }(c) ? Object(u.a)(n, f, this.callback) : s.logWarn("External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ".concat(c)), this._render ? this._render.apply(this, arguments) : s.logWarn("No render function was provided, please use .setRender on the renderer");
      }.bind(this);
    }
    i.install = function (e) {
      return new i({
        url: e.url,
        config: e.config,
        id: e.id,
        callback: e.callback,
        loaded: e.loaded,
        adUnitCode: e.adUnitCode
      });
    }, i.prototype.getConfig = function () {
      return this.config;
    }, i.prototype.setRender = function (e) {
      this._render = e;
    }, i.prototype.setEventHandlers = function (e) {
      this.handlers = e;
    }, i.prototype.handleVideoEvent = function (e) {
      var t = e.id,
        n = e.eventName;
      "function" == typeof this.handlers[n] && this.handlers[n](), s.logMessage("Prebid Renderer event for id ".concat(t, " type ").concat(n));
    }, i.prototype.process = function () {
      for (; 0 < this.cmd.length;) try {
        this.cmd.shift().call();
      } catch (e) {
        s.logError("Error processing Renderer command: ", e);
      }
    };
  },
  110: function (e, t, n) {
    "use strict";

    var r = n(111),
      i = n(116);
    e.exports = r("Set", function (t) {
      return function (e) {
        return t(this, arguments.length ? e : void 0);
      };
    }, i);
  },
  111: function (e, t, n) {
    "use strict";

    var f = n(14),
      l = n(26),
      p = n(79),
      g = n(31),
      b = n(32),
      v = n(17),
      y = n(82),
      h = n(27),
      m = n(64),
      S = n(33).f,
      A = n(56).forEach,
      E = n(30),
      r = n(54),
      O = r.set,
      T = r.getterFor;
    e.exports = function (n, e, t) {
      var r,
        a,
        i = -1 !== n.indexOf("Map"),
        c = -1 !== n.indexOf("Weak"),
        o = i ? "set" : "add",
        u = l[n],
        s = u && u.prototype,
        d = {};
      return E && "function" == typeof u && (c || s.forEach && !g(function () {
        new u().entries().next();
      })) ? (r = e(function (e, t) {
        O(y(e, r, n), {
          type: n,
          collection: new u()
        }), null != t && v(t, e[o], e, i);
      }), a = T(n), A(["add", "clear", "delete", "forEach", "get", "has", "set", "keys", "values", "entries"], function (i) {
        var o = "add" == i || "set" == i;
        i in s && (!c || "clear" != i) && b(r.prototype, i, function (e, t) {
          var n = a(this).collection;
          if (!o && c && !h(e)) return "get" == i && void 0;
          var r = n[i](0 === e ? 0 : e, t);
          return o ? this : r;
        });
      }), c || S(r.prototype, "size", {
        configurable: !0,
        get: function () {
          return a(this).collection.size;
        }
      })) : (r = t.getConstructor(e, n, i, o), p.REQUIRED = !0), m(r, n, !1, !0), d[n] = r, f({
        global: !0,
        forced: !0
      }, d), c || t.setStrong(r, n, i), r;
    };
  },
  112: function (e, t, n) {
    var r = n(31);
    e.exports = !r(function () {
      return Object.isExtensible(Object.preventExtensions({}));
    });
  },
  113: function (e, t, n) {
    "use strict";

    var r = n(63),
      i = n(62);
    e.exports = r ? {}.toString : function () {
      return "[object " + i(this) + "]";
    };
  },
  114: function (e, t, n) {
    var r = n(26),
      i = n(115),
      o = r.WeakMap;
    e.exports = "function" == typeof o && /native code/.test(i(o));
  },
  115: function (e, t, n) {
    var r = n(75),
      i = Function.toString;
    "function" != typeof r.inspectSource && (r.inspectSource = function (e) {
      return i.call(e);
    }), e.exports = r.inspectSource;
  },
  116: function (e, t, n) {
    "use strict";

    var s = n(33).f,
      d = n(83),
      f = n(121),
      l = n(24),
      p = n(82),
      g = n(17),
      a = n(66),
      c = n(126),
      b = n(30),
      v = n(79).fastKey,
      r = n(54),
      y = r.set,
      h = r.getterFor;
    e.exports = {
      getConstructor: function (e, n, r, i) {
        function o(e, t, n) {
          var r,
            i,
            o = c(e),
            a = u(e, t);
          return a ? a.value = n : (o.last = a = {
            index: i = v(t, !0),
            key: t,
            value: n,
            previous: r = o.last,
            next: void 0,
            removed: !1
          }, o.first || (o.first = a), r && (r.next = a), b ? o.size++ : e.size++, "F" !== i && (o.index[i] = a)), e;
        }
        var a = e(function (e, t) {
            p(e, a, n), y(e, {
              type: n,
              index: d(null),
              first: void 0,
              last: void 0,
              size: 0
            }), b || (e.size = 0), null != t && g(t, e[i], e, r);
          }),
          c = h(n),
          u = function (e, t) {
            var n,
              r = c(e),
              i = v(t);
            if ("F" !== i) return r.index[i];
            for (n = r.first; n; n = n.next) if (n.key == t) return n;
          };
        return f(a.prototype, {
          clear: function () {
            for (var e = c(this), t = e.index, n = e.first; n;) n.removed = !0, n.previous && (n.previous = n.previous.next = void 0), delete t[n.index], n = n.next;
            e.first = e.last = void 0, b ? e.size = 0 : this.size = 0;
          },
          delete: function (e) {
            var t,
              n,
              r = c(this),
              i = u(this, e);
            return i && (t = i.next, n = i.previous, delete r.index[i.index], i.removed = !0, n && (n.next = t), t && (t.previous = n), r.first == i && (r.first = t), r.last == i && (r.last = n), b ? r.size-- : this.size--), !!i;
          },
          forEach: function (e, t) {
            for (var n, r = c(this), i = l(e, 1 < arguments.length ? t : void 0, 3); n = n ? n.next : r.first;) for (i(n.value, n.key, this); n && n.removed;) n = n.previous;
          },
          has: function (e) {
            return !!u(this, e);
          }
        }), f(a.prototype, r ? {
          get: function (e) {
            var t = u(this, e);
            return t && t.value;
          },
          set: function (e, t) {
            return o(this, 0 === e ? 0 : e, t);
          }
        } : {
          add: function (e) {
            return o(this, e = 0 === e ? 0 : e, e);
          }
        }), b && s(a.prototype, "size", {
          get: function () {
            return c(this).size;
          }
        }), a;
      },
      setStrong: function (e, t, n) {
        var r = t + " Iterator",
          i = h(t),
          o = h(r);
        a(e, t, function (e, t) {
          y(this, {
            type: r,
            target: e,
            state: i(e),
            kind: t,
            last: void 0
          });
        }, function () {
          for (var e = o(this), t = e.kind, n = e.last; n && n.removed;) n = n.previous;
          return e.target && (e.last = n = n ? n.next : e.state.first) ? "keys" == t ? {
            value: n.key,
            done: !1
          } : "values" == t ? {
            value: n.value,
            done: !1
          } : {
            value: [n.key, n.value],
            done: !1
          } : {
            value: e.target = void 0,
            done: !0
          };
        }, n ? "entries" : "values", !n, !0), c(t);
      }
    };
  },
  117: function (e, t, n) {
    var r = n(30),
      a = n(33),
      c = n(15),
      u = n(118);
    e.exports = r ? Object.defineProperties : function (e, t) {
      c(e);
      for (var n, r = u(t), i = r.length, o = 0; o < i;) a.f(e, n = r[o++], t[n]);
      return e;
    };
  },
  118: function (e, t, n) {
    var r = n(119),
      i = n(84);
    e.exports = Object.keys || function (e) {
      return r(e, i);
    };
  },
  119: function (e, t, n) {
    var a = n(28),
      c = n(47),
      u = n(77).indexOf,
      s = n(53);
    e.exports = function (e, t) {
      var n,
        r = c(e),
        i = 0,
        o = [];
      for (n in r) !a(s, n) && a(r, n) && o.push(n);
      for (; t.length > i;) a(r, n = t[i++]) && (~u(o, n) || o.push(n));
      return o;
    };
  },
  12: function (e, t, n) {
    var r = n(106);
    e.exports = r;
  },
  120: function (e, t, n) {
    var r = n(29);
    e.exports = r("document", "documentElement");
  },
  121: function (e, t, n) {
    var i = n(85);
    e.exports = function (e, t, n) {
      for (var r in t) n && n.unsafe && e[r] ? e[r] = t[r] : i(e, r, t[r], n);
      return e;
    };
  },
  122: function (e, t, n) {
    "use strict";

    function i() {
      return this;
    }
    var o = n(86).IteratorPrototype,
      a = n(83),
      c = n(46),
      u = n(64),
      s = n(38);
    e.exports = function (e, t, n) {
      var r = t + " Iterator";
      return e.prototype = a(o, {
        next: c(1, n)
      }), u(e, r, !1, !0), s[r] = i, e;
    };
  },
  123: function (e, t, n) {
    var r = n(31);
    e.exports = !r(function () {
      function e() {}
      return e.prototype.constructor = null, Object.getPrototypeOf(new e()) !== e.prototype;
    });
  },
  124: function (e, t, n) {
    var i = n(15),
      o = n(125);
    e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
      var n,
        r = !1,
        e = {};
      try {
        (n = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(e, []), r = e instanceof Array;
      } catch (e) {}
      return function (e, t) {
        return i(e), o(t), r ? n.call(e, t) : e.__proto__ = t, e;
      };
    }() : void 0);
  },
  125: function (e, t, n) {
    var r = n(27);
    e.exports = function (e) {
      if (!r(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype");
      return e;
    };
  },
  126: function (e, t, n) {
    "use strict";

    var r = n(29),
      i = n(33),
      o = n(21),
      a = n(30),
      c = o("species");
    e.exports = function (e) {
      var t = r(e),
        n = i.f;
      a && t && !t[c] && n(t, c, {
        configurable: !0,
        get: function () {
          return this;
        }
      });
    };
  },
  127: function (e, t) {},
  128: function (e, t, n) {
    function r(c) {
      return function (e, t) {
        var n,
          r,
          i = String(s(e)),
          o = u(t),
          a = i.length;
        return o < 0 || a <= o ? c ? "" : void 0 : (n = i.charCodeAt(o)) < 55296 || 56319 < n || o + 1 === a || (r = i.charCodeAt(o + 1)) < 56320 || 57343 < r ? c ? i.charAt(o) : n : c ? i.slice(o, o + 2) : r - 56320 + (n - 55296 << 10) + 65536;
      };
    }
    var u = n(58),
      s = n(49);
    e.exports = {
      codeAt: r(!1),
      charAt: r(!0)
    };
  },
  129: function (e, t, n) {
    n(130);
    var r = n(131),
      i = n(26),
      o = n(62),
      a = n(32),
      c = n(38),
      u = n(21)("toStringTag");
    for (var s in r) {
      var d = i[s],
        f = d && d.prototype;
      f && o(f) !== u && a(f, u, s), c[s] = c.Array;
    }
  },
  13: function (e, t, n) {
    "use strict";

    n.d(t, "b", function () {
      return a;
    }), n.d(t, "a", function () {
      return c;
    }), t.d = function (e, t) {
      var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 15;
      0 === e.getHooks({
        hook: t
      }).length && e.before(t, n);
    }, t.c = function (e, n) {
      a("async", function (e) {
        e.forEach(function (e) {
          return n.apply(void 0, function (e) {
            if (Array.isArray(e)) return o(e);
          }(t = e) || function (e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
          }(t) || function (e, t) {
            if (e) {
              if ("string" == typeof e) return o(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, t) : void 0;
            }
          }(t) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }());
          var t;
        });
      }, e)([]);
    }, t.e = function (e) {
      for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
      c(e).before(function (e, t) {
        t.push(n), e(t);
      });
    };
    var r = n(162),
      i = n.n(r);
    function o(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    var a = i()({
        ready: i.a.SYNC | i.a.ASYNC | i.a.QUEUE
      }),
      c = a.get;
  },
  130: function (e, t, n) {
    "use strict";

    var r = n(47),
      i = n(51),
      o = n(38),
      a = n(54),
      c = n(66),
      u = "Array Iterator",
      s = a.set,
      d = a.getterFor(u);
    e.exports = c(Array, "Array", function (e, t) {
      s(this, {
        type: u,
        target: r(e),
        index: 0,
        kind: t
      });
    }, function () {
      var e = d(this),
        t = e.target,
        n = e.kind,
        r = e.index++;
      return !t || r >= t.length ? {
        value: e.target = void 0,
        done: !0
      } : "keys" == n ? {
        value: r,
        done: !1
      } : "values" == n ? {
        value: t[r],
        done: !1
      } : {
        value: [r, t[r]],
        done: !1
      };
    }, "values"), o.Arguments = o.Array, i("keys"), i("values"), i("entries");
  },
  131: function (e, t) {
    e.exports = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0
    };
  },
  132: function (e, t, n) {
    n(14)({
      target: "Set",
      stat: !0
    }, {
      from: n(133)
    });
  },
  133: function (e, t, n) {
    "use strict";

    var s = n(18),
      d = n(24),
      f = n(17);
    e.exports = function (e, t, n) {
      var r,
        i,
        o,
        a,
        c = arguments.length,
        u = 1 < c ? t : void 0;
      return s(this), (r = void 0 !== u) && s(u), null == e ? new this() : (i = [], r ? (o = 0, a = d(u, 2 < c ? n : void 0, 2), f(e, function (e) {
        i.push(a(e, o++));
      })) : f(e, i.push, i), new this(i));
    };
  },
  134: function (e, t, n) {
    n(14)({
      target: "Set",
      stat: !0
    }, {
      of: n(135)
    });
  },
  135: function (e, t, n) {
    "use strict";

    e.exports = function () {
      for (var e = arguments.length, t = new Array(e); e--;) t[e] = arguments[e];
      return new this(t);
    };
  },
  136: function (e, t, n) {
    "use strict";

    var r = n(14),
      i = n(16),
      o = n(137);
    r({
      target: "Set",
      proto: !0,
      real: !0,
      forced: i
    }, {
      addAll: function () {
        return o.apply(this, arguments);
      }
    });
  },
  137: function (e, t, n) {
    "use strict";

    var i = n(15),
      o = n(18);
    e.exports = function () {
      for (var e = i(this), t = o(e.add), n = 0, r = arguments.length; n < r; n++) t.call(e, arguments[n]);
      return e;
    };
  },
  138: function (e, t, n) {
    "use strict";

    var r = n(14),
      i = n(16),
      o = n(139);
    r({
      target: "Set",
      proto: !0,
      real: !0,
      forced: i
    }, {
      deleteAll: function () {
        return o.apply(this, arguments);
      }
    });
  },
  139: function (e, t, n) {
    "use strict";

    var a = n(15),
      c = n(18);
    e.exports = function () {
      for (var e, t = a(this), n = c(t.delete), r = !0, i = 0, o = arguments.length; i < o; i++) e = n.call(t, arguments[i]), r = r && e;
      return !!r;
    };
  },
  14: function (e, t, n) {
    "use strict";

    function y(r) {
      function e(e, t, n) {
        if (this instanceof r) {
          switch (arguments.length) {
            case 0:
              return new r();
            case 1:
              return new r(e);
            case 2:
              return new r(e, t);
          }
          return new r(e, t, n);
        }
        return r.apply(this, arguments);
      }
      return e.prototype = r.prototype, e;
    }
    var h = n(26),
      m = n(99).f,
      S = n(101),
      A = n(42),
      E = n(24),
      O = n(32),
      T = n(28);
    e.exports = function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        c,
        u,
        s,
        d = e.target,
        f = e.global,
        l = e.stat,
        p = e.proto,
        g = f ? h : l ? h[d] : (h[d] || {}).prototype,
        b = f ? A : A[d] || (A[d] = {}),
        v = b.prototype;
      for (i in t) n = !S(f ? i : d + (l ? "." : "#") + i, e.forced) && g && T(g, i), a = b[i], n && (c = e.noTargetGet ? (s = m(g, i)) && s.value : g[i]), o = n && c ? c : t[i], n && typeof a == typeof o || (u = e.bind && n ? E(o, h) : e.wrap && n ? y(o) : p && "function" == typeof o ? E(Function.call, o) : o, (e.sham || o && o.sham || a && a.sham) && O(u, "sham", !0), b[i] = u, p && (T(A, r = d + "Prototype") || O(A, r, {}), A[r][i] = o, e.real && v && !v[i] && O(v, i, o)));
    };
  },
  140: function (e, t, n) {
    "use strict";

    var r = n(14),
      i = n(16),
      o = n(15),
      a = n(24),
      c = n(36),
      u = n(17);
    r({
      target: "Set",
      proto: !0,
      real: !0,
      forced: i
    }, {
      every: function (e, t) {
        var n = o(this),
          r = c(n),
          i = a(e, 1 < arguments.length ? t : void 0, 3);
        return !u(r, function (e) {
          if (!i(e, e, n)) return u.stop();
        }, void 0, !1, !0).stopped;
      }
    });
  },
  141: function (e, t, n) {
    "use strict";

    var r = n(14),
      i = n(16),
      o = n(29),
      a = n(15),
      c = n(18),
      u = n(39),
      s = n(17);
    r({
      target: "Set",
      proto: !0,
      real: !0,
      forced: i
    }, {
      difference: function (e) {
        var t = a(this),
          n = new (u(t, o("Set")))(t),
          r = c(n.delete);
        return s(e, function (e) {
          r.call(n, e);
        }), n;
      }
    });
  },
  142: function (e, t, n) {
    "use strict";

    var r = n(14),
      i = n(16),
      c = n(29),
      u = n(15),
      s = n(18),
      d = n(24),
      f = n(39),
      l = n(36),
      p = n(17);
    r({
      target: "Set",
      proto: !0,
      real: !0,
      forced: i
    }, {
      filter: function (e, t) {
        var n = u(this),
          r = l(n),
          i = d(e, 1 < arguments.length ? t : void 0, 3),
          o = new (f(n, c("Set")))(),
          a = s(o.add);
        return p(r, function (e) {
          i(e, e, n) && a.call(o, e);
        }, void 0, !1, !0), o;
      }
    });
  },
  143: function (e, t, n) {
    "use strict";

    var r = n(14),
      i = n(16),
      o = n(15),
      a = n(24),
      c = n(36),
      u = n(17);
    r({
      target: "Set",
      proto: !0,
      real: !0,
      forced: i
    }, {
      find: function (e, t) {
        var n = o(this),
          r = c(n),
          i = a(e, 1 < arguments.length ? t : void 0, 3);
        return u(r, function (e) {
          if (i(e, e, n)) return u.stop(e);
        }, void 0, !1, !0).result;
      }
    });
  },
  144: function (e, t, n) {
    "use strict";

    var r = n(14),
      i = n(16),
      o = n(29),
      a = n(15),
      c = n(18),
      u = n(39),
      s = n(17);
    r({
      target: "Set",
      proto: !0,
      real: !0,
      forced: i
    }, {
      intersection: function (e) {
        var t = a(this),
          n = new (u(t, o("Set")))(),
          r = c(t.has),
          i = c(n.add);
        return s(e, function (e) {
          r.call(t, e) && i.call(n, e);
        }), n;
      }
    });
  },
  145: function (e, t, n) {
    "use strict";

    var r = n(14),
      i = n(16),
      o = n(15),
      a = n(18),
      c = n(17);
    r({
      target: "Set",
      proto: !0,
      real: !0,
      forced: i
    }, {
      isDisjointFrom: function (e) {
        var t = o(this),
          n = a(t.has);
        return !c(e, function (e) {
          if (!0 === n.call(t, e)) return c.stop();
        }).stopped;
      }
    });
  },
  146: function (e, t, n) {
    "use strict";

    var r = n(14),
      i = n(16),
      o = n(29),
      a = n(15),
      c = n(18),
      u = n(89),
      s = n(17);
    r({
      target: "Set",
      proto: !0,
      real: !0,
      forced: i
    }, {
      isSubsetOf: function (e) {
        var t = u(this),
          n = a(e),
          r = n.has;
        return "function" != typeof r && (n = new (o("Set"))(e), r = c(n.has)), !s(t, function (e) {
          if (!1 === r.call(n, e)) return s.stop();
        }, void 0, !1, !0).stopped;
      }
    });
  },
  147: function (e, t, n) {
    "use strict";

    var r = n(14),
      i = n(16),
      o = n(15),
      a = n(18),
      c = n(17);
    r({
      target: "Set",
      proto: !0,
      real: !0,
      forced: i
    }, {
      isSupersetOf: function (e) {
        var t = o(this),
          n = a(t.has);
        return !c(e, function (e) {
          if (!1 === n.call(t, e)) return c.stop();
        }).stopped;
      }
    });
  },
  148: function (e, t, n) {
    "use strict";

    var r = n(14),
      i = n(16),
      o = n(15),
      a = n(36),
      c = n(17);
    r({
      target: "Set",
      proto: !0,
      real: !0,
      forced: i
    }, {
      join: function (e) {
        var t = o(this),
          n = a(t),
          r = void 0 === e ? "," : String(e),
          i = [];
        return c(n, i.push, i, !1, !0), i.join(r);
      }
    });
  },
  149: function (e, t, n) {
    "use strict";

    var r = n(14),
      i = n(16),
      c = n(29),
      u = n(15),
      s = n(18),
      d = n(24),
      f = n(39),
      l = n(36),
      p = n(17);
    r({
      target: "Set",
      proto: !0,
      real: !0,
      forced: i
    }, {
      map: function (e, t) {
        var n = u(this),
          r = l(n),
          i = d(e, 1 < arguments.length ? t : void 0, 3),
          o = new (f(n, c("Set")))(),
          a = s(o.add);
        return p(r, function (e) {
          a.call(o, i(e, e, n));
        }, void 0, !1, !0), o;
      }
    });
  },
  15: function (e, t, n) {
    var r = n(27);
    e.exports = function (e) {
      if (!r(e)) throw TypeError(String(e) + " is not an object");
      return e;
    };
  },
  150: function (e, t, n) {
    "use strict";

    var r = n(14),
      i = n(16),
      a = n(15),
      c = n(18),
      u = n(36),
      s = n(17);
    r({
      target: "Set",
      proto: !0,
      real: !0,
      forced: i
    }, {
      reduce: function (t, e) {
        var n = a(this),
          r = u(n),
          i = arguments.length < 2,
          o = i ? void 0 : e;
        if (c(t), s(r, function (e) {
          o = i ? (i = !1, e) : t(o, e, e, n);
        }, void 0, !1, !0), i) throw TypeError("Reduce of empty set with no initial value");
        return o;
      }
    });
  },
  151: function (e, t, n) {
    "use strict";

    var r = n(14),
      i = n(16),
      o = n(15),
      a = n(24),
      c = n(36),
      u = n(17);
    r({
      target: "Set",
      proto: !0,
      real: !0,
      forced: i
    }, {
      some: function (e, t) {
        var n = o(this),
          r = c(n),
          i = a(e, 1 < arguments.length ? t : void 0, 3);
        return u(r, function (e) {
          if (i(e, e, n)) return u.stop();
        }, void 0, !1, !0).stopped;
      }
    });
  },
  152: function (e, t, n) {
    "use strict";

    var r = n(14),
      i = n(16),
      o = n(29),
      a = n(15),
      c = n(18),
      u = n(39),
      s = n(17);
    r({
      target: "Set",
      proto: !0,
      real: !0,
      forced: i
    }, {
      symmetricDifference: function (e) {
        var t = a(this),
          n = new (u(t, o("Set")))(t),
          r = c(n.delete),
          i = c(n.add);
        return s(e, function (e) {
          r.call(n, e) || i.call(n, e);
        }), n;
      }
    });
  },
  153: function (e, t, n) {
    "use strict";

    var r = n(14),
      i = n(16),
      o = n(29),
      a = n(15),
      c = n(18),
      u = n(39),
      s = n(17);
    r({
      target: "Set",
      proto: !0,
      real: !0,
      forced: i
    }, {
      union: function (e) {
        var t = a(this),
          n = new (u(t, o("Set")))(t);
        return s(e, c(n.add), n), n;
      }
    });
  },
  154: function (e, t, n) {
    n(88), n(155);
    var r = n(42);
    e.exports = r.Array.from;
  },
  155: function (e, t, n) {
    var r = n(14),
      i = n(156);
    r({
      target: "Array",
      stat: !0,
      forced: !n(158)(function (e) {
        Array.from(e);
      })
    }, {
      from: i
    });
  },
  156: function (e, t, n) {
    "use strict";

    var v = n(24),
      y = n(57),
      h = n(81),
      m = n(80),
      S = n(50),
      A = n(157),
      E = n(61);
    e.exports = function (e, t, n) {
      var r,
        i,
        o,
        a,
        c,
        u,
        s = y(e),
        d = "function" == typeof this ? this : Array,
        f = arguments.length,
        l = 1 < f ? t : void 0,
        p = void 0 !== l,
        g = E(s),
        b = 0;
      if (p && (l = v(l, 2 < f ? n : void 0, 2)), null == g || d == Array && m(g)) for (i = new d(r = S(s.length)); b < r; b++) u = p ? l(s[b], b) : s[b], A(i, b, u);else for (c = (a = g.call(s)).next, i = new d(); !(o = c.call(a)).done; b++) u = p ? h(a, l, [o.value, b], !0) : o.value, A(i, b, u);
      return i.length = b, i;
    };
  },
  157: function (e, t, n) {
    "use strict";

    var i = n(55),
      o = n(33),
      a = n(46);
    e.exports = function (e, t, n) {
      var r = i(t);
      r in e ? o.f(e, r, a(0, n)) : e[r] = n;
    };
  },
  158: function (e, t, n) {
    var i = n(21)("iterator"),
      o = !1;
    try {
      var r = 0,
        a = {
          next: function () {
            return {
              done: !!r++
            };
          },
          return: function () {
            o = !0;
          }
        };
      a[i] = function () {
        return this;
      }, Array.from(a, function () {
        throw 2;
      });
    } catch (e) {}
    e.exports = function (e, t) {
      if (!t && !o) return !1;
      var n = !1;
      try {
        var r = {};
        r[i] = function () {
          return {
            next: function () {
              return {
                done: n = !0
              };
            }
          };
        }, e(r);
      } catch (e) {}
      return n;
    };
  },
  159: function (e, t) {
    e.exports = function e(t) {
      var n = Array.isArray(t) ? [] : {};
      for (var r in t) {
        var i = t[r];
        n[r] = i && "object" == typeof i ? e(i) : i;
      }
      return n;
    };
  },
  16: function (e, t) {
    e.exports = !0;
  },
  160: function (e, t, n) {
    "use strict";

    t.a = function (e, t, n, r, i) {
      for (t = t.split ? t.split(".") : t, r = 0; r < t.length; r++) e = e ? e[t[r]] : i;
      return e === i ? n : e;
    };
  },
  161: function (e, t, n) {
    "use strict";

    t.a = function (e, t, n) {
      t.split && (t = t.split("."));
      for (var r, i = 0, o = t.length, a = e; i < o; ++i) r = a[t[i]], a = a[t[i]] = i === o - 1 ? n : null != r ? r : !~t[i + 1].indexOf(".") && -1 < +t[i + 1] ? [] : {};
    };
  },
  162: function (e, t) {
    h.SYNC = 1, h.ASYNC = 2, h.QUEUE = 4;
    var g = "fun-hooks";
    var n = Object.freeze({
        useProxy: !0,
        ready: 0
      }),
      b = new WeakMap(),
      r = "2,1,0" === [1].reduce(function (e, t, n) {
        return [e, t, n];
      }, 2).toString() ? Array.prototype.reduce : function (e, t) {
        var n,
          r = Object(this),
          i = r.length >>> 0,
          o = 0;
        if (t) n = t;else {
          for (; o < i && !(o in r);) o++;
          n = r[o++];
        }
        for (; o < i;) o in r && (n = e(n, r[o], o, r)), o++;
        return n;
      };
    function v(e, t) {
      return Array.prototype.slice.call(e, t);
    }
    var y = Object.assign || function (e) {
      return r.call(v(arguments, 1), function (t, n) {
        return n && Object.keys(n).forEach(function (e) {
          t[e] = n[e];
        }), t;
      }, e);
    };
    function h(u) {
      var s,
        e = {},
        d = [];
      function t(e, t) {
        return "function" == typeof e ? f.call(null, "sync", e, t) : "string" == typeof e && "function" == typeof t ? f.apply(null, arguments) : "object" == typeof e ? function (o, e, a) {
          var t = !0;
          void 0 === e && (e = Object.getOwnPropertyNames(o), t = !1);
          var c = {},
            n = ["constructor"];
          for (; (e = e.filter(function (e) {
            return !("function" != typeof o[e] || -1 !== n.indexOf(e) || e.match(/^_/));
          })).forEach(function (e) {
            var t,
              n = e.split(":"),
              r = n[0],
              i = n[1] || "sync";
            c[r] || (t = o[r], c[r] = o[r] = f(i, t, a ? [a, r] : void 0));
          }), o = Object.getPrototypeOf(o), t && o;);
          return c;
        }.apply(null, arguments) : void 0;
      }
      function l(o) {
        var a = Array.isArray(o) ? o : o.split(".");
        return r.call(a, function (t, n, e) {
          var r = t[n],
            i = !1;
          return r || (e === a.length - 1 ? (s || d.push(function () {
            i || console.warn(g + ": referenced '" + o + "' but it was never created");
          }), t[n] = p(function (e) {
            t[n] = e, i = !0;
          })) : t[n] = {});
        }, e);
      }
      function p(r) {
        var o = [],
          a = [],
          c = function () {},
          e = {
            before: function (e, t) {
              return n.call(this, o, "before", e, t);
            },
            after: function (e, t) {
              return n.call(this, a, "after", e, t);
            },
            getHooks: function (n) {
              var e = o.concat(a);
              "object" == typeof n && (e = e.filter(function (t) {
                return Object.keys(n).every(function (e) {
                  return t[e] === n[e];
                });
              }));
              try {
                y(e, {
                  remove: function () {
                    return e.forEach(function (e) {
                      e.remove();
                    }), this;
                  }
                });
              } catch (e) {
                console.error("error adding `remove` to array, did you modify Array.prototype?");
              }
              return e;
            },
            removeAll: function () {
              return this.getHooks().remove();
            }
          },
          t = {
            install: function (e, t, n) {
              this.type = e, (c = n)(o, a), r && r(t);
            }
          };
        return b.set(e.after, t), e;
        function n(t, e, n, r) {
          var i = {
            hook: n,
            type: e,
            priority: r || 10,
            remove: function () {
              var e = t.indexOf(i);
              -1 !== e && (t.splice(e, 1), c(o, a));
            }
          };
          return t.push(i), t.sort(function (e, t) {
            return t.priority - e.priority;
          }), c(o, a), this;
        }
      }
      function f(f, e, t) {
        var n = e.after && b.get(e.after);
        if (n) {
          if (n.type !== f) throw g + ": recreated hookable with different type";
          return e;
        }
        var r,
          i,
          o = t ? l(t) : p(),
          a = {
            get: function (e, t) {
              return o[t] || Reflect.get.apply(Reflect, arguments);
            }
          };
        return s || d.push(c), u.useProxy && "function" == typeof Proxy && Proxy.revocable ? i = new Proxy(e, a) : y(i = function () {
          return a.apply ? a.apply(e, this, v(arguments)) : e.apply(this, arguments);
        }, o), b.get(i.after).install(f, i, function (e, t) {
          var s,
            d = [];
          r = e.length || t.length ? (e.forEach(n), s = d.push(void 0) - 1, t.forEach(n), function (n, r, e) {
            var i,
              o = 0,
              a = "async" === f && "function" == typeof e[e.length - 1] && e.pop();
            function c(e) {
              "sync" === f ? i = e : a && a.apply(null, arguments);
            }
            function u(e) {
              if (d[o]) {
                var t = v(arguments);
                return u.bail = c, t.unshift(u), d[o++].apply(r, t);
              }
              "sync" === f ? i = e : a && a.apply(null, arguments);
            }
            return d[s] = function () {
              var e = v(arguments, 1);
              "async" === f && a && (delete u.bail, e.push(u));
              var t = n.apply(r, e);
              "sync" === f && u(t);
            }, u.apply(null, e), i;
          }) : void 0;
          function n(e) {
            d.push(e.hook);
          }
          c();
        }), i;
        function c() {
          !s && ("sync" !== f || u.ready & h.SYNC) && ("async" !== f || u.ready & h.ASYNC) ? "sync" !== f && u.ready & h.QUEUE ? a.apply = function () {
            var e = arguments;
            d.push(function () {
              i.apply(e[1], e[2]);
            });
          } : a.apply = function () {
            throw g + ": hooked function not ready";
          } : a.apply = r;
        }
      }
      return (u = y({}, n, u)).ready ? t.ready = function () {
        s = !0, function (e) {
          for (var t; t = e.shift();) t();
        }(d);
      } : s = !0, t.get = l, t;
    }
    e.exports = h;
  },
  17: function (e, t, n) {
    function p(e, t) {
      this.stopped = e, this.result = t;
    }
    var g = n(15),
      b = n(80),
      v = n(50),
      y = n(24),
      h = n(61),
      m = n(81);
    (e.exports = function (e, t, n, r, i) {
      var o,
        a,
        c,
        u,
        s,
        d,
        f,
        l = y(t, n, r ? 2 : 1);
      if (i) o = e;else {
        if ("function" != typeof (a = h(e))) throw TypeError("Target is not iterable");
        if (b(a)) {
          for (c = 0, u = v(e.length); c < u; c++) if ((s = r ? l(g(f = e[c])[0], f[1]) : l(e[c])) && s instanceof p) return s;
          return new p(!1);
        }
        o = a.call(e);
      }
      for (d = o.next; !(f = d.call(o)).done;) if ("object" == typeof (s = m(o, l, f.value, r)) && s && s instanceof p) return s;
      return new p(!1);
    }).stop = function (e) {
      return new p(!0, e);
    };
  },
  18: function (e, t) {
    e.exports = function (e) {
      if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
      return e;
    };
  },
  2: function (e, t, n) {
    "use strict";

    n.d(t, "c", function () {
      return r;
    }), n.d(t, "d", function () {
      return i;
    }), n.d(t, "b", function () {
      return o;
    }), n.d(t, "a", function () {
      return a;
    });
    var r = "native",
      i = "video",
      o = "banner",
      a = "adpod";
  },
  20: function (e, t, n) {
    "use strict";

    t.a = function () {
      return window.stpd;
    }, window.stpd = window.stpd || {}, window.stpd.cmd = window.stpd.cmd || [], window.stpd.que = window.stpd.que || [], window._pbjsGlobals = window._pbjsGlobals || [], window._pbjsGlobals.push("stpd");
  },
  21: function (e, t, n) {
    var r = n(26),
      i = n(74),
      o = n(28),
      a = n(59),
      c = n(76),
      u = n(105),
      s = i("wks"),
      d = r.Symbol,
      f = u ? d : d && d.withoutSetter || a;
    e.exports = function (e) {
      return o(s, e) || (c && o(d, e) ? s[e] = d[e] : s[e] = f("Symbol." + e)), s[e];
    };
  },
  22: function (e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return r;
    });
    var y = n(0);
    var h,
      r = (h = window, function () {
        var e,
          t = [],
          n = function (e) {
            try {
              if (!e.location.ancestorOrigins) return;
              return e.location.ancestorOrigins;
            } catch (e) {}
          }(h),
          r = !1,
          i = 0,
          o = !1,
          a = !1;
        do {
          var c,
            u,
            s = g,
            d = a,
            f = void 0,
            l = !1,
            p = null,
            a = !1,
            g = g ? g.parent : h;
          try {
            f = g.location.href || null;
          } catch (e) {
            l = !0;
          }
          if (l) {
            if (d) {
              var b = s.context;
              try {
                u = p = b.sourceUrl, o = !0, g === h.top && (r = !0), b.canonicalUrl && (e = b.canonicalUrl);
              } catch (e) {}
            } else {
              Object(y.logWarn)("Trying to access cross domain iframe. Continuing without referrer and location");
              try {
                var v = s.document.referrer;
                v && (p = v, g === h.top && (r = !0));
              } catch (e) {}
              !p && n && n[i - 1] && (p = n[i - 1]), p && !o && (u = p);
            }
          } else f && (u = p = f, o = !1, g === h.top && (r = !0, (c = function (e) {
            try {
              var t = e.querySelector("link[rel='canonical']");
              if (null !== t) return t.href;
            } catch (e) {}
            return null;
          }(g.document)) && (e = c))), g.context && g.context.sourceUrl && (a = !0);
          t.push(p), i++;
        } while (g !== h.top);
        return t.reverse(), {
          referer: u || null,
          reachedTop: r,
          isAmp: o,
          numIframes: i - 1,
          stack: t,
          canonicalUrl: e || null
        };
      });
  },
  221: function (e, t, n) {
    n(222);
    var r = n(52);
    e.exports = r("Array", "findIndex");
  },
  222: function (e, t, n) {
    "use strict";

    var r = n(14),
      i = n(56).findIndex,
      o = n(51),
      a = n(60),
      c = "findIndex",
      u = !0,
      s = a(c);
    c in [] && Array(1)[c](function () {
      u = !1;
    }), r({
      target: "Array",
      proto: !0,
      forced: u || !s
    }, {
      findIndex: function (e, t) {
        return i(this, e, 1 < arguments.length ? t : void 0);
      }
    }), o(c);
  },
  229: function (e, t, n) {
    "use strict";

    t.a = function () {
      window.addEventListener("message", u, !1);
    };
    var r = n(9),
      g = n.n(r),
      b = n(37),
      i = n(5),
      o = n.n(i),
      v = n(0),
      y = n(23),
      a = n(10),
      h = n.n(a),
      m = n(11),
      c = n(12),
      S = n.n(c),
      A = o.a.EVENTS.BID_WON;
    function u(e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        c,
        u,
        s,
        d = e.message ? "message" : "data",
        f = {};
      try {
        f = JSON.parse(e[d]);
      } catch (e) {
        return;
      }
      if (f && f.adId) {
        var l = h()(y.a.getBidsReceived(), function (e) {
          return e.adId === f.adId;
        });
        if (l && "Prebid Request" === f.message && (n = e, r = (t = l).adId, i = t.ad, o = t.adUrl, a = t.width, c = t.height, u = t.renderer, s = t.cpm, Object(m.c)(u) ? Object(m.b)(u, t) : r && (function (e) {
          var o = e.adId,
            a = e.adUnitCode,
            r = e.width,
            i = e.height;
          function c(e) {
            var t,
              n,
              r = (t = o, n = a, window.googletag ? function (n) {
                return h()(window.googletag.pubads().getSlots(), function (t) {
                  return h()(t.getTargetingKeys(), function (e) {
                    return S()(t.getTargeting(e), n);
                  });
                }).getSlotElementId();
              }(t) : window.apntag ? function (e) {
                var t = window.apntag.getTag(e);
                return t && t.targetId;
              }(n) : n),
              i = document.getElementById(r);
            return i && i.querySelector(e);
          }
          ["div", "iframe"].forEach(function (e) {
            var t,
              n = c(e + ':not([style*="display: none"])');
            n ? ((t = n.style).width = r + "px", t.height = i + "px") : Object(v.logWarn)("Unable to locate matching page element for adUnitCode ".concat(a, ".  Can't resize it to ad's dimensions.  Please review setup."));
          });
        }(t), n.source.postMessage(JSON.stringify({
          message: "Prebid Response",
          ad: Object(v.replaceAuctionPrice)(i, s),
          adUrl: Object(v.replaceAuctionPrice)(o, s),
          adId: r,
          width: a,
          height: c
        }), n.origin)), y.a.addWinningBid(l), g.a.emit(A, l)), l && "Prebid Native" === f.message) {
          if ("assetRequest" === f.action) {
            var p = Object(b.c)(f, l);
            return void e.source.postMessage(JSON.stringify(p), e.origin);
          }
          if ("click" === Object(b.b)(f, l)) return;
          y.a.addWinningBid(l), g.a.emit(A, l);
        }
      }
    }
  },
  23: function (e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return u;
    });
    var r = n(0),
      s = n(41),
      i = n(10),
      o = n.n(i),
      a = n(5);
    var d,
      c,
      u = (d = [], (c = {}).addWinningBid = function (t) {
        var e = o()(d, function (e) {
          return e.getAuctionId() === t.auctionId;
        });
        e ? (t.status = a.BID_STATUS.RENDERED, e.addWinningBid(t)) : Object(r.logWarn)("Auction not found when adding winning bid");
      }, c.getAllWinningBids = function () {
        return d.map(function (e) {
          return e.getWinningBids();
        }).reduce(r.flatten, []);
      }, c.getBidsRequested = function () {
        return d.map(function (e) {
          return e.getBidRequests();
        }).reduce(r.flatten, []);
      }, c.getNoBids = function () {
        return d.map(function (e) {
          return e.getNoBids();
        }).reduce(r.flatten, []);
      }, c.getBidsReceived = function () {
        return d.map(function (e) {
          if (e.getAuctionStatus() === s.a) return e.getBidsReceived();
        }).reduce(r.flatten, []).filter(function (e) {
          return e;
        });
      }, c.getAdUnits = function () {
        return d.map(function (e) {
          return e.getAdUnits();
        }).reduce(r.flatten, []);
      }, c.getAdUnitCodes = function () {
        return d.map(function (e) {
          return e.getAdUnitCodes();
        }).reduce(r.flatten, []).filter(r.uniques);
      }, c.createAuction = function (e) {
        var t,
          n = e.adUnits,
          r = e.adUnitCodes,
          i = e.callback,
          o = e.cbTimeout,
          a = e.labels,
          c = e.auctionId,
          u = Object(s.k)({
            adUnits: n,
            adUnitCodes: r,
            callback: i,
            cbTimeout: o,
            labels: a,
            auctionId: c
          });
        return t = u, d.push(t), u;
      }, c.findBidByAdId = function (t) {
        return o()(d.map(function (e) {
          return e.getBidsReceived();
        }).reduce(r.flatten, []), function (e) {
          return e.adId === t;
        });
      }, c.getStandardBidderAdServerTargeting = function () {
        return Object(s.j)()[a.JSON_MAPPING.ADSERVER_TARGETING];
      }, c.setStatusForBids = function (e, t) {
        var n,
          r = c.findBidByAdId(e);
        r && (r.status = t), !r || t !== a.BID_STATUS.BID_TARGETING_SET || (n = o()(d, function (e) {
          return e.getAuctionId() === r.auctionId;
        })) && n.setBidTargeting(r);
      }, c.getLastAuctionId = function () {
        return d.length && d[d.length - 1].getAuctionId();
      }, c);
  },
  230: function (e, t, n) {
    "use strict";

    t.a = function (e) {
      var t;
      try {
        e = e || window.sessionStorage, t = JSON.parse(e.getItem(u));
      } catch (e) {}
      t && p(t, !0);
    };
    var r,
      i,
      o = n(3),
      a = n(0),
      c = n(41),
      u = "stpd:debugging";
    function s(e) {
      Object(a.logMessage)("DEBUG: " + e);
    }
    function d(e) {
      Object(a.logWarn)("DEBUG: " + e);
    }
    function f(e) {
      r = function (e, t, n) {
        if (b(this.bidders, n.bidderCode)) return void d("bidder '".concat(n.bidderCode, "' excluded from auction by bidder overrides"));
        Array.isArray(this.bids) && this.bids.forEach(function (e) {
          g(e, n.bidderCode, t) || v(e, n, "bidder");
        });
        e(t, n);
      }.bind(e), c.c.before(r, 5), i = function (e, t) {
        var r = this,
          n = t.filter(function (e) {
            return !b(r.bidders, e.bidderCode) || (d("bidRequest '".concat(e.bidderCode, "' excluded from auction by bidder overrides")), !1);
          });
        Array.isArray(r.bidRequests) && n.forEach(function (n) {
          r.bidRequests.forEach(function (t) {
            n.bids.forEach(function (e) {
              g(t, n.bidderCode, e.adUnitCode) || v(t, e, "bidRequest");
            });
          });
        });
        e(n);
      }.bind(e), c.e.before(i, 5);
    }
    function l() {
      c.c.getHooks({
        hook: r
      }).remove(), c.e.getHooks({
        hook: i
      }).remove();
    }
    function p(e, t) {
      var n = 1 < arguments.length && void 0 !== t && t;
      o.b.setConfig({
        debug: !0
      }), l(), f(e), s("bidder overrides enabled".concat(n ? " from session" : ""));
    }
    function g(e, t, n) {
      return e.bidder && e.bidder !== t || !(!e.adUnitCode || e.adUnitCode === n);
    }
    function b(e, t) {
      return Array.isArray(e) && -1 === e.indexOf(t);
    }
    function v(n, e, r) {
      return Object.keys(n).filter(function (e) {
        return -1 === ["adUnitCode", "bidder"].indexOf(e);
      }).reduce(function (e, t) {
        return s("bidder overrides changed '".concat(e.adUnitCode, "/").concat(e.bidderCode, "' ").concat(r, ".").concat(t, " from '").concat(e[t], ".js' to '").concat(n[t], "'")), e[t] = n[t], e;
      }, e);
    }
    function y(e) {
      if (e.enabled) {
        try {
          window.sessionStorage.setItem(u, JSON.stringify(e));
        } catch (e) {}
        p(e);
      } else {
        l(), s("bidder overrides disabled");
        try {
          window.sessionStorage.removeItem(u);
        } catch (e) {}
      }
    }
    o.b.getConfig("debugging", function (e) {
      return y(e.debugging);
    });
  },
  24: function (e, t, n) {
    var o = n(18);
    e.exports = function (r, i, e) {
      if (o(r), void 0 === i) return r;
      switch (e) {
        case 0:
          return function () {
            return r.call(i);
          };
        case 1:
          return function (e) {
            return r.call(i, e);
          };
        case 2:
          return function (e, t) {
            return r.call(i, e, t);
          };
        case 3:
          return function (e, t, n) {
            return r.call(i, e, t, n);
          };
      }
      return function () {
        return r.apply(i, arguments);
      };
    };
  },
  25: function (e, t, n) {
    "use strict";

    n.d(t, "b", function () {
      return c;
    }), n.d(t, "a", function () {
      return u;
    }), t.d = function (e, t) {
      var n = Object(o.getBidRequest)(e.requestId, t),
        r = n && Object(o.deepAccess)(n, "mediaTypes.video"),
        i = r && Object(o.deepAccess)(r, "context");
      return s(e, n, r, i);
    }, n.d(t, "c", function () {
      return s;
    });
    n(8);
    var o = n(0),
      i = n(3),
      r = n(12),
      a = (n.n(r), n(13)),
      c = "outstream",
      u = "instream";
    var s = Object(a.b)("sync", function (e, t, n, r) {
      return !t || n && r !== c ? i.b.getConfig("cache.url") || !e.vastXml || e.vastUrl ? !(!e.vastUrl && !e.vastXml) : (Object(o.logError)('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with stpd.setConfig({ cache: {url: "..."} });\n      '), !1) : r !== c || !!(e.renderer || t.renderer || n.renderer);
    }, "checkVideoBidSetup");
  },
  26: function (n, e, t) {
    (function (e) {
      function t(e) {
        return e && e.Math == Math && e;
      }
      n.exports = t("object" == typeof globalThis && globalThis) || t("object" == typeof window && window) || t("object" == typeof self && self) || t("object" == typeof e && e) || Function("return this")();
    }).call(e, t(35));
  },
  27: function (e, t) {
    e.exports = function (e) {
      return "object" == typeof e ? null !== e : "function" == typeof e;
    };
  },
  28: function (e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function (e, t) {
      return n.call(e, t);
    };
  },
  29: function (e, t, n) {
    function r(e) {
      return "function" == typeof e ? e : void 0;
    }
    var i = n(42),
      o = n(26);
    e.exports = function (e, t) {
      return arguments.length < 2 ? r(i[e]) || r(o[e]) : i[e] && i[e][t] || o[e] && o[e][t];
    };
  },
  3: function (e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return y;
    }), n.d(t, "b", function () {
      return C;
    });
    var r = n(45),
      i = n(10),
      a = n.n(i),
      o = n(12),
      c = n.n(o),
      u = n(78),
      s = n.n(u),
      d = n(0);
    function f() {
      return (f = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }).apply(this, arguments);
    }
    var l = n(90),
      p = n(0),
      g = n(5),
      b = "TRUE" === p.getParameterByName(g.DEBUG_MODE).toUpperCase(),
      v = window.location.origin,
      y = "random",
      h = {};
    h[y] = !0, h.fixed = !0;
    var m = y,
      S = {
        LOW: "low",
        MEDIUM: "medium",
        HIGH: "high",
        AUTO: "auto",
        DENSE: "dense",
        CUSTOM: "custom"
      };
    var A,
      E,
      O,
      T,
      I,
      C = (T = [], I = null, w(), {
        getCurrentBidder: function () {
          return I;
        },
        getConfig: function () {
          if (arguments.length <= 1 && "function" != typeof (arguments.length <= 0 ? void 0 : arguments[0])) {
            var e = arguments.length <= 0 ? void 0 : arguments[0];
            return e ? p.deepAccess(j(), e) : j();
          }
          return function (e, t) {
            var n = t;
            if ("string" != typeof e && (n = e, e = "*"), "function" == typeof n) {
              var r = {
                topic: e,
                callback: n
              };
              return T.push(r), function () {
                T.splice(T.indexOf(r), 1);
              };
            }
            p.logError("listener must be a function");
          }.apply(void 0, arguments);
        },
        setConfig: function (n) {
          var e, r;
          p.isPlainObject(n) ? (e = Object.keys(n), r = {}, e.forEach(function (e) {
            var t = n[e];
            p.isPlainObject(A[e]) && p.isPlainObject(t) && (t = f({}, A[e], t)), r[e] = E[e] = t;
          }), _(r)) : p.logError("setConfig options must be an object");
        },
        setDefaults: function (e) {
          p.isPlainObject(A) ? (f(A, e), f(E, e)) : p.logError("defaults must be an object");
        },
        resetConfig: w,
        runWithBidder: B,
        callbackWithBidder: function (o) {
          return function (i) {
            return function () {
              if ("function" == typeof i) {
                for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return B(o, (e = p.bind).call.apply(e, [i, this].concat(n)));
              }
              p.logWarn("config.callbackWithBidder callback is not a function");
            };
          };
        },
        setBidderConfig: function (r) {
          try {
            !function (e) {
              if (!p.isPlainObject(e)) throw "setBidderConfig bidder options must be an object";
              if (!Array.isArray(e.bidders) || !e.bidders.length) throw "setBidderConfig bidder options must contain a bidders list with at least 1 bidder";
              if (!p.isPlainObject(e.config)) throw "setBidderConfig bidder options must contain a config object";
            }(r), r.bidders.forEach(function (n) {
              O[n] || (O[n] = {}), Object.keys(r.config).forEach(function (e) {
                var t = r.config[e];
                p.isPlainObject(t) ? O[n][e] = f({}, O[n][e] || {}, t) : O[n][e] = t;
              });
            });
          } catch (e) {
            p.logError(e);
          }
        },
        getBidderConfig: function () {
          return O;
        }
      });
    function w() {
      A = {};
      var n = {
        _debug: b,
        get debug() {
          return this._debug;
        },
        set debug(e) {
          this._debug = e;
        },
        _bidderTimeout: 3e3,
        get bidderTimeout() {
          return this._bidderTimeout;
        },
        set bidderTimeout(e) {
          this._bidderTimeout = e;
        },
        _publisherDomain: v,
        get publisherDomain() {
          return this._publisherDomain;
        },
        set publisherDomain(e) {
          this._publisherDomain = e;
        },
        _priceGranularity: S.MEDIUM,
        set priceGranularity(e) {
          o(e) && ("string" == typeof e ? this._priceGranularity = i(e) ? e : S.MEDIUM : p.isPlainObject(e) && (this._customPriceBucket = e, this._priceGranularity = S.CUSTOM, p.logMessage("Using custom price granularity")));
        },
        get priceGranularity() {
          return this._priceGranularity;
        },
        _customPriceBucket: {},
        get customPriceBucket() {
          return this._customPriceBucket;
        },
        _mediaTypePriceGranularity: {},
        get mediaTypePriceGranularity() {
          return this._mediaTypePriceGranularity;
        },
        set mediaTypePriceGranularity(n) {
          var r = this;
          this._mediaTypePriceGranularity = Object.keys(n).reduce(function (e, t) {
            return o(n[t]) ? "string" == typeof n ? e[t] = i(n[t]) ? n[t] : r._priceGranularity : p.isPlainObject(n) && (e[t] = n[t], p.logMessage("Using custom price granularity for ".concat(t))) : p.logWarn("Invalid price granularity for media type: ".concat(t)), e;
          }, {});
        },
        _sendAllBids: !0,
        get enableSendAllBids() {
          return this._sendAllBids;
        },
        set enableSendAllBids(e) {
          this._sendAllBids = e;
        },
        _useBidCache: !1,
        get useBidCache() {
          return this._useBidCache;
        },
        set useBidCache(e) {
          this._useBidCache = e;
        },
        _deviceAccess: !0,
        get deviceAccess() {
          return this._deviceAccess;
        },
        set deviceAccess(e) {
          this._deviceAccess = e;
        },
        _bidderSequence: m,
        get bidderSequence() {
          return this._bidderSequence;
        },
        set bidderSequence(e) {
          h[e] ? this._bidderSequence = e : p.logWarn("Invalid order: ".concat(e, ". Bidder Sequence was not set."));
        },
        _timeoutBuffer: 400,
        get timeoutBuffer() {
          return this._timeoutBuffer;
        },
        set timeoutBuffer(e) {
          this._timeoutBuffer = e;
        },
        _disableAjaxTimeout: !1,
        get disableAjaxTimeout() {
          return this._disableAjaxTimeout;
        },
        set disableAjaxTimeout(e) {
          this._disableAjaxTimeout = e;
        },
        _auctionOptions: {},
        get auctionOptions() {
          return this._auctionOptions;
        },
        set auctionOptions(e) {
          !function (e) {
            if (!p.isPlainObject(e)) return p.logWarn("Auction Options must be an object"), !1;
            for (var t = 0, n = Object.keys(e); t < n.length; t++) {
              var r = n[t];
              if ("secondaryBidders" !== r) return p.logWarn("Auction Options given an incorrect param: ".concat(r)), !1;
              if ("secondaryBidders" === r) {
                if (!p.isArray(e[r])) return p.logWarn("Auction Options ".concat(r, " must be of type Array")), !1;
                if (!e[r].every(p.isStr)) return p.logWarn("Auction Options ".concat(r, " must be only string")), !1;
              }
            }
            return !0;
          }(e) || (this._auctionOptions = e);
        }
      };
      function i(t) {
        return a()(Object.keys(S), function (e) {
          return t === S[e];
        });
      }
      function o(e) {
        if (e) {
          if ("string" == typeof e) i(e) || p.logWarn("Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default.");else if (p.isPlainObject(e) && !Object(r.b)(e)) return void p.logError("Invalid custom price value passed to `setPriceGranularity()`");
          return 1;
        }
        p.logError("Prebid Error: no value passed to `setPriceGranularity()`");
      }
      E && _(Object.keys(E).reduce(function (e, t) {
        return E[t] !== n[t] && (e[t] = n[t] || {}), e;
      }, {})), E = n, O = {};
    }
    function j() {
      if (I && O && p.isPlainObject(O[I])) {
        var n = O[I],
          e = new s.a(Object.keys(E).concat(Object.keys(n)));
        return l(e).reduce(function (e, t) {
          return void 0 === n[t] ? e[t] = E[t] : void 0 !== E[t] && p.isPlainObject(n[t]) ? e[t] = Object(d.mergeDeep)({}, E[t], n[t]) : e[t] = n[t], e;
        }, {});
      }
      return f({}, E);
    }
    function _(i) {
      var t = Object.keys(i);
      T.filter(function (e) {
        return c()(t, e.topic);
      }).forEach(function (e) {
        var t, n, r;
        e.callback((t = {}, n = e.topic, r = i[e.topic], n in t ? Object.defineProperty(t, n, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[n] = r, t));
      }), T.filter(function (e) {
        return "*" === e.topic;
      }).forEach(function (e) {
        return e.callback(i);
      });
    }
    function B(e, t) {
      I = e;
      try {
        return t();
      } finally {
        I = null;
      }
    }
  },
  30: function (e, t, n) {
    var r = n(31);
    e.exports = !r(function () {
      return 7 != Object.defineProperty({}, 1, {
        get: function () {
          return 7;
        }
      })[1];
    });
  },
  31: function (e, t) {
    e.exports = function (e) {
      try {
        return !!e();
      } catch (e) {
        return !0;
      }
    };
  },
  32: function (e, t, n) {
    var r = n(30),
      i = n(33),
      o = n(46);
    e.exports = r ? function (e, t, n) {
      return i.f(e, t, o(1, n));
    } : function (e, t, n) {
      return e[t] = n, e;
    };
  },
  33: function (e, t, n) {
    var r = n(30),
      i = n(72),
      o = n(15),
      a = n(55),
      c = Object.defineProperty;
    t.f = r ? c : function (e, t, n) {
      if (o(e), t = a(t, !0), o(n), i) try {
        return c(e, t, n);
      } catch (e) {}
      if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
      return "value" in n && (e[t] = n.value), e;
    };
  },
  34: function (e, t, n) {
    "use strict";

    t.a = function (e, t) {
      return new r(e, t);
    };
    var i = n(0);
    function r(e, t) {
      var n = t && t.src || "client",
        r = e || 0;
      this.bidderCode = t && t.bidder || "", this.width = 0, this.height = 0, this.statusMessage = function () {
        switch (r) {
          case 0:
            return "Pending";
          case 1:
            return "Bid available";
          case 2:
            return "Bid returned empty or error response";
          case 3:
            return "Bid timed out";
        }
      }(), this.adId = i.getUniqueIdentifierStr(), this.requestId = t && t.bidId, this.mediaType = "banner", this.source = n, this.getStatusCode = function () {
        return r;
      }, this.getSize = function () {
        return this.width + "x" + this.height;
      };
    }
  },
  35: function (e, t) {
    var n = function () {
      return this;
    }();
    try {
      n = n || Function("return this")() || (0, eval)("this");
    } catch (e) {
      "object" == typeof window && (n = window);
    }
    e.exports = n;
  },
  357: function (e, t, n) {
    var r = n(358);
    e.exports = r;
  },
  358: function (e, t, n) {
    n(359);
    var r = n(52);
    e.exports = r("String", "includes");
  },
  359: function (e, t, n) {
    "use strict";

    var r = n(14),
      i = n(360),
      o = n(49);
    r({
      target: "String",
      proto: !0,
      forced: !n(362)("includes")
    }, {
      includes: function (e, t) {
        return !!~String(o(this)).indexOf(i(e), 1 < arguments.length ? t : void 0);
      }
    });
  },
  36: function (e, t, n) {
    var r = n(16),
      i = n(89);
    e.exports = r ? i : function (e) {
      return Set.prototype.values.call(e);
    };
  },
  360: function (e, t, n) {
    var r = n(361);
    e.exports = function (e) {
      if (r(e)) throw TypeError("The method doesn't accept regular expressions");
      return e;
    };
  },
  361: function (e, t, n) {
    var r = n(27),
      i = n(48),
      o = n(21)("match");
    e.exports = function (e) {
      var t;
      return r(e) && (void 0 !== (t = e[o]) ? !!t : "RegExp" == i(e));
    };
  },
  362: function (e, t, n) {
    var r = n(21)("match");
    e.exports = function (t) {
      var n = /./;
      try {
        "/./"[t](n);
      } catch (e) {
        try {
          return n[r] = !1, "/./"[t](n);
        } catch (e) {}
      }
      return !1;
    };
  },
  37: function (e, t, n) {
    "use strict";

    n.d(t, "e", function () {
      return o;
    }), n.d(t, "a", function () {
      return s;
    }), t.g = function (e) {
      if (e && e.type && function (e) {
        return !(!e || !c()(Object.keys(d), e)) || (Object(a.logError)("".concat(e, " nativeParam is not supported")), !1);
      }(e.type)) return d[e.type];
      return e;
    }, t.f = function (t, e) {
      var n = Object(a.getBidRequest)(t.requestId, e);
      if (!n) return !1;
      if (!Object(a.deepAccess)(t, "native.clickUrl")) return !1;
      if (Object(a.deepAccess)(t, "native.image") && (!Object(a.deepAccess)(t, "native.image.height") || !Object(a.deepAccess)(t, "native.image.width"))) return !1;
      if (Object(a.deepAccess)(t, "native.icon") && (!Object(a.deepAccess)(t, "native.icon.height") || !Object(a.deepAccess)(t, "native.icon.width"))) return !1;
      var r = n.nativeParams;
      if (!r) return !0;
      var i = Object.keys(r).filter(function (e) {
          return r[e].required;
        }),
        o = Object.keys(t.native).filter(function (e) {
          return t.native[e];
        });
      return i.every(function (e) {
        return c()(o, e);
      });
    }, t.b = function (e, t) {
      var n;
      "click" === e.action ? n = t.native && t.native.clickTrackers : (n = t.native && t.native.impressionTrackers, t.native && t.native.javascriptTrackers && Object(a.insertHtmlIntoIframe)(t.native.javascriptTrackers));
      return (n || []).forEach(a.triggerPixel), e.action;
    }, t.d = function (r, i) {
      var o = {};
      return Object.keys(r.native).forEach(function (e) {
        var t = u.NATIVE_KEYS[e],
          n = f(r.native[e]);
        Object(a.deepAccess)(i, "mediaTypes.native.".concat(e, ".sendId")) && (n = "".concat(t, ":").concat(r.adId)), t && n && (o[t] = n);
      }), o;
    }, t.c = function (e, r) {
      var i = {
        message: "assetResponse",
        adId: e.adId,
        assets: []
      };
      return e.assets.forEach(function (e) {
        var t = Object(a.getKeyByValue)(u.NATIVE_KEYS, e),
          n = f(r.native[t]);
        i.assets.push({
          key: t,
          value: n
        });
      }), i;
    };
    var a = n(0),
      r = n(12),
      c = n.n(r);
    function i(e) {
      return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      })(e);
    }
    var u = n(5),
      o = [],
      s = Object.keys(u.NATIVE_KEYS).map(function (e) {
        return u.NATIVE_KEYS[e];
      }),
      d = {
        image: {
          image: {
            required: !0
          },
          title: {
            required: !0
          },
          sponsoredBy: {
            required: !0
          },
          clickUrl: {
            required: !0
          },
          body: {
            required: !1
          },
          icon: {
            required: !1
          }
        }
      };
    function f(e) {
      return "object" === i(e) && e.url ? e.url : e;
    }
  },
  38: function (e, t) {
    e.exports = {};
  },
  39: function (e, t, n) {
    var i = n(15),
      o = n(18),
      a = n(21)("species");
    e.exports = function (e, t) {
      var n,
        r = i(e).constructor;
      return void 0 === r || null == (n = i(r)[a]) ? t : o(n);
    };
  },
  4: function (e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return r;
    }), t.b = i;
    var l = n(3);
    function p() {
      return (p = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }).apply(this, arguments);
    }
    function g(e) {
      return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      })(e);
    }
    var b = n(0),
      v = 4,
      r = i();
    function i() {
      var s = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 3e3,
        e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
        d = e.request,
        f = e.done;
      return function (e, t, n) {
        var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};
        try {
          var i,
            o = r.method || (n ? "POST" : "GET"),
            a = document.createElement("a");
          a.href = e;
          var c,
            u = "object" === g(t) && null !== t ? t : {
              success: function () {
                b.logMessage("xhr success");
              },
              error: function (e) {
                b.logError("xhr error", null, e);
              }
            };
          "function" == typeof t && (u.success = t), (i = new window.XMLHttpRequest()).onreadystatechange = function () {
            var e;
            i.readyState === v && ("function" == typeof f && f(a.origin), 200 <= (e = i.status) && e < 300 || 304 === e ? u.success(i.responseText, i) : u.error(i.statusText, i));
          }, l.b.getConfig("disableAjaxTimeout") || (i.ontimeout = function () {
            b.logError("  xhr timeout after ", i.timeout, "ms");
          }), "GET" === o && n && (p((c = b.parseUrl(e, r)).search, n), e = b.buildUrl(c)), i.open(o, e, !0), l.b.getConfig("disableAjaxTimeout") || (i.timeout = s), r.withCredentials && (i.withCredentials = !0), b._each(r.customHeaders, function (e, t) {
            i.setRequestHeader(t, e);
          }), r.preflight && i.setRequestHeader("X-Requested-With", "XMLHttpRequest"), i.setRequestHeader("Content-Type", r.contentType || "text/plain"), "function" == typeof d && d(a.origin), "POST" === o && n ? i.send(n) : i.send();
        } catch (e) {
          b.logError("xhr construction", e);
        }
      };
    }
  },
  40: function (e, t, n) {
    "use strict";

    t.a = function (r, e, t) {
      if (!e || !r) return void o.logError("cannot load external script without url and moduleCode");
      if (!i()(c, e)) return void o.logError("".concat(e, " not whitelisted for loading external JavaScript"));
      if (a[r]) return t && "function" == typeof t && (a[r].loaded ? t() : a[r].callbacks.push(t)), a[r].tag;
      a[r] = {
        loaded: !1,
        tag: null,
        callbacks: []
      }, t && "function" == typeof t && a[r].callbacks.push(t);
      return o.logWarn("module ".concat(e, " is loading external JavaScript")), function (e, t) {
        var n = document.createElement("script");
        n.type = "text/javascript", n.async = !0, (a[r].tag = n).readyState ? n.onreadystatechange = function () {
          "loaded" !== n.readyState && "complete" !== n.readyState || (n.onreadystatechange = null, t());
        } : n.onload = function () {
          t();
        };
        return n.src = e, o.insertElement(n), n;
      }(r, function () {
        a[r].loaded = !0;
        try {
          for (var e = 0; e < a[r].callbacks.length; e++) a[r].callbacks[e]();
        } catch (e) {
          o.logError("Error executing callback", "adloader.js:loadExternalScript", e);
        }
      });
    };
    var r = n(12),
      i = n.n(r),
      o = n(0),
      a = {},
      c = ["criteo", "outstream", "adagio", "browsi"];
  },
  41: function (e, t, n) {
    "use strict";

    n.d(t, "b", function () {
      return L;
    }), n.d(t, "a", function () {
      return F;
    }), t.k = function (e) {
      var t,
        i,
        b,
        v,
        o = e.adUnits,
        n = e.adUnitCodes,
        r = e.callback,
        a = e.cbTimeout,
        c = e.labels,
        u = e.auctionId,
        y = o,
        s = c,
        d = n,
        h = [],
        f = [],
        l = [],
        p = u || P.generateUUID(),
        g = r,
        m = a,
        S = [],
        A = new Set();
      function E() {
        return {
          auctionId: p,
          timestamp: t,
          auctionEnd: i,
          auctionStatus: b,
          adUnits: y,
          adUnitCodes: d,
          labels: s,
          bidderRequests: h,
          noBids: l,
          bidsReceived: f,
          winningBids: S,
          timeout: m
        };
      }
      function O(n, e) {
        var r, t;
        e && clearTimeout(v), void 0 === i && (r = [], n && (P.logMessage("Auction ".concat(p, " timedOut")), t = A, (r = h.map(function (e) {
          return (e.bids || []).filter(function (e) {
            return !t.has(e.bidder);
          });
        }).reduce(w.flatten, []).map(function (e) {
          return {
            bidId: e.bidId,
            bidder: e.bidder,
            adUnitCode: e.adUnitCode,
            auctionId: e.auctionId
          };
        })).length && M.emit(G.EVENTS.BID_TIMEOUT, r)), b = F, i = Date.now(), M.emit(G.EVENTS.AUCTION_END, E()), Q(y, function () {
          try {
            var e;
            null != g && (e = f.filter(P.bind.call(w.adUnitsFilter, this, d)).reduce(ee, {}), g.apply(stpd, [e, n, p]), g = null);
          } catch (e) {
            P.logError("Error executing bidsBackHandler", null, e);
          } finally {
            r.length && q.callTimedOutBidders(o, r, m);
            var t = B.b.getConfig("userSync") || {};
            t.enableOverride || N(t.syncDelay);
          }
        }));
      }
      function T() {
        P.logInfo("Bids Received for Auction with id: ".concat(p), f), b = F, O(!1, !0);
      }
      function I(e) {
        A.add(e);
      }
      function C(n) {
        var f = this;
        n.forEach(function (e) {
          var t;
          t = e, h = h.concat(t);
        });
        var l = {},
          e = {
            bidRequests: n,
            run: function () {
              var e, t;
              e = O.bind(null, !0), t = setTimeout(e, m), v = t, b = L, M.emit(G.EVENTS.AUCTION_INIT, E());
              var r,
                i,
                o,
                a,
                c,
                u,
                s = (r = T, i = f, o = 0, a = !1, c = new Set(), u = {}, {
                  addBidResponse: function (e, t) {
                    u[t.requestId] = !0, o++;
                    var n = function (e) {
                      var t = e.adUnitCode,
                        n = e.bid,
                        r = e.bidderRequest,
                        i = e.auctionId,
                        o = r.start,
                        a = D({}, n, {
                          auctionId: i,
                          responseTimestamp: Object(w.timestamp)(),
                          requestTimestamp: o,
                          cpm: parseFloat(n.cpm) || 0,
                          bidder: n.bidderCode,
                          adUnitCode: t
                        });
                      a.timeToRespond = a.responseTimestamp - a.requestTimestamp, M.emit(G.EVENTS.BID_ADJUSTMENT, a);
                      var c = r.bids && U()(r.bids, function (e) {
                          return e.adUnitCode == t;
                        }),
                        u = c && c.renderer,
                        s = a.mediaType,
                        d = c && c.mediaTypes && c.mediaTypes[s],
                        f = d && d.renderer,
                        l = null;
                      !f || !f.url || !0 === f.backupOnly && f.render ? !u || !u.url || !0 === u.backupOnly && n.renderer || (l = u) : l = f, l && (a.renderer = _.a.install({
                        url: l.url
                      }), a.renderer.setRender(l.render));
                      var p = Z(n.mediaType, c, B.b.getConfig("mediaTypePriceGranularity")),
                        g = Object(j.a)(a.cpm, "object" === k(p) ? p : B.b.getConfig("customPriceBucket"), B.b.getConfig("currency.granularityMultiplier"));
                      return a.pbLg = g.low, a.pbMg = g.med, a.pbHg = g.high, a.pbAg = g.auto, a.pbDg = g.dense, a.pbCg = g.custom, a;
                    }({
                      adUnitCode: e,
                      bid: t,
                      bidderRequest: this,
                      auctionId: i.getAuctionId()
                    });
                    "video" === n.mediaType ? function (e, t, n, r) {
                      var i = !0,
                        o = Object(w.getBidRequest)(t.requestId, [n]),
                        a = o && Object(w.deepAccess)(o, "mediaTypes.video"),
                        c = a && Object(w.deepAccess)(a, "context");
                      B.b.getConfig("cache.url") && c !== R.b && (t.videoCacheKey ? t.vastUrl || (P.logError("videoCacheKey specified but not required vastUrl for video bid"), i = !1) : (i = !1, X(e, t, r, o))), i && ($(e, t), r());
                    }(i, n, this, d) : ($(i, n), d());
                  },
                  adapterDone: function () {
                    var t,
                      e = i.getBidRequests(),
                      n = B.b.getConfig("auctionOptions");
                    c.add(this), !n || P.isEmpty(n) || (t = n.secondaryBidders) && !e.every(function (e) {
                      return x()(t, e.bidderCode);
                    }) && (e = e.filter(function (e) {
                      return !x()(t, e.bidderCode);
                    })), a = e.every(function (e) {
                      return c.has(e);
                    }), this.bids.forEach(function (e) {
                      u[e.bidId] || (i.addNoBid(e), M.emit(G.EVENTS.NO_BID, e));
                    }), a && 0 === o && r();
                  }
                });
              function d() {
                o--, a && 0 === o && r();
              }
              q.callBids(y, n, function () {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                J.apply({
                  dispatch: s.addBidResponse,
                  bidderRequest: this
                }, t);
              }, s.adapterDone, {
                request: function (e, t) {
                  g(V, t), g(l, e), H[e] || (H[e] = {
                    SRA: !0,
                    origin: t
                  }), 1 < l[e] && (H[e].SRA = !1);
                },
                done: function (e) {
                  V[e]--, K[0] && p(K[0]) && K.shift();
                }
              }, m, I);
            }
          };
        function p(e) {
          var r = !0,
            i = B.b.getConfig("maxRequestsPerOrigin") || z;
          return e.bidRequests.some(function (e) {
            var t = 1,
              n = void 0 !== e.src && e.src === G.S2S.SRC ? "s2s" : e.bidderCode;
            return H[n] && (!1 === H[n].SRA && (t = Math.min(e.bids.length, i)), V[H[n].origin] + t > i && (r = !1)), !r;
          }), r && e.run(), r;
        }
        function g(e, t) {
          void 0 === e[t] ? e[t] = 1 : e[t]++;
        }
        p(e) || (P.logWarn("queueing auction due to limited endpoint capacity"), K.push(e));
      }
      return {
        addBidReceived: function (e) {
          f = f.concat(e);
        },
        addNoBid: function (e) {
          l = l.concat(e);
        },
        executeCallback: O,
        callBids: function () {
          b = W, t = Date.now();
          var e = q.makeBidRequests(y, t, p, m, s);
          P.logInfo("Bids Requested for Auction with id: ".concat(p), e), e.length < 1 ? (P.logWarn("No valid bid requests returned for auction"), T()) : Y.call({
            dispatch: C,
            context: this
          }, e);
        },
        addWinningBid: function (e) {
          S = S.concat(e), q.callBidWonBidder(e.bidder, e, o);
        },
        setBidTargeting: function (e) {
          q.callSetTargetingBidder(e.bidder, e);
        },
        getWinningBids: function () {
          return S;
        },
        getTimeout: function () {
          return m;
        },
        getAuctionId: function () {
          return p;
        },
        getAuctionStatus: function () {
          return b;
        },
        getAdUnits: function () {
          return y;
        },
        getAdUnitCodes: function () {
          return d;
        },
        getBidRequests: function () {
          return h;
        },
        getBidsReceived: function () {
          return f;
        },
        getNoBids: function () {
          return l;
        }
      };
    }, n.d(t, "c", function () {
      return J;
    }), n.d(t, "e", function () {
      return Y;
    }), t.g = d, t.d = $, n.d(t, "f", function () {
      return X;
    }), n.d(t, "i", function () {
      return f;
    }), n.d(t, "h", function () {
      return l;
    }), t.j = p;
    var w = n(0),
      j = n(45),
      a = n(37),
      o = n(94),
      _ = n(11),
      B = n(3),
      r = n(43),
      i = n(13),
      c = n(10),
      U = n.n(c),
      u = n(12),
      x = n.n(u),
      R = n(25),
      s = n(2);
    function k(e) {
      return (k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      })(e);
    }
    function D() {
      return (D = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }).apply(this, arguments);
    }
    var N = r.a.syncUsers,
      P = n(0),
      q = n(8).default,
      M = n(9),
      G = n(5),
      W = "started",
      L = "inProgress",
      F = "completed";
    M.on(G.EVENTS.BID_ADJUSTMENT, function (e) {
      !function (e) {
        var t,
          n = e.bidderCode,
          r = e.cpm;
        if (stpd.bidderSettings && (n && stpd.bidderSettings[n] && "function" == typeof stpd.bidderSettings[n].bidCpmAdjustment ? t = stpd.bidderSettings[n].bidCpmAdjustment : stpd.bidderSettings[G.JSON_MAPPING.BD_SETTING_STANDARD] && "function" == typeof stpd.bidderSettings[G.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment && (t = stpd.bidderSettings[G.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment), t)) try {
          r = t(e.cpm, D({}, e));
        } catch (e) {
          P.logError("Error during bid adjustment", "bidmanager.js", e);
        }
        0 <= r && (e.cpm = r);
      }(e);
    });
    var z = 4,
      V = {},
      H = {},
      K = [];
    var J = Object(i.b)("async", function (e, t) {
        this.dispatch.call(this.bidderRequest, e, t);
      }, "addBidResponse"),
      Y = Object(i.b)("sync", function (e) {
        this.dispatch.call(this.context, e);
      }, "addBidderRequests"),
      Q = Object(i.b)("async", function (e, t) {
        t && t();
      }, "bidsBackCallback");
    function d(e, t) {
      t.timeToRespond > e.getTimeout() + B.b.getConfig("timeoutBuffer") && e.executeCallback(!0);
    }
    function $(e, t) {
      var n = e.getBidRequests(),
        r = U()(n, function (e) {
          return e.bidderCode === t.bidderCode;
        });
      !function (t, e) {
        var n;
        {
          var r;
          t.bidderCode && (0 < t.cpm || t.dealId) && (r = U()(e.bids, function (e) {
            return e.adUnitCode === t.adUnitCode;
          }), n = function (e, t, n) {
            if (!t) return {};
            var r = {},
              i = stpd.bidderSettings;
            {
              var o;
              i && (o = p(t.mediaType, e, n), g(r, o, t), e && i[e] && i[e][G.JSON_MAPPING.ADSERVER_TARGETING] && (g(r, i[e], t), t.sendStandardTargeting = i[e].sendStandardTargeting));
            }
            t.native && (r = D({}, r, Object(a.d)(t, n)));
            return r;
          }(t.bidderCode, t, r));
        }
        t.adserverTargeting = D(t.adserverTargeting || {}, n);
      }(t, r), M.emit(G.EVENTS.BID_RESPONSE, t), e.addBidReceived(t), d(e, t);
    }
    var X = Object(i.b)("async", function (n, r, i, e) {
      Object(o.b)([r], function (e, t) {
        e ? (P.logWarn("Failed to save to the video cache: ".concat(e, ". Video bid must be discarded.")), d(n, r)) : "" === t[0].uuid ? (P.logWarn("Supplied video cache key was already in use by Prebid Cache; caching attempt was rejected. Video bid must be discarded."), d(n, r)) : (r.videoCacheKey = t[0].uuid, r.vastUrl || (r.vastUrl = Object(o.a)(r.videoCacheKey)), $(n, r), i());
      }, e);
    }, "callPrebidCache");
    function Z(e, t, n) {
      if (e && n) {
        if (e === s.d) {
          var r = Object(w.deepAccess)(t, "mediaTypes.".concat(s.d, ".context"), "instream");
          if (n["".concat(s.d, "-").concat(r)]) return n["".concat(s.d, "-").concat(r)];
        }
        return n[e];
      }
    }
    var f = function (e, t) {
        var n = Z(e, t, B.b.getConfig("mediaTypePriceGranularity"));
        return "string" == typeof e && n ? "string" == typeof n ? n : "custom" : B.b.getConfig("priceGranularity");
      },
      l = function (t) {
        return function (e) {
          return t === G.GRANULARITY_OPTIONS.AUTO ? e.pbAg : t === G.GRANULARITY_OPTIONS.DENSE ? e.pbDg : t === G.GRANULARITY_OPTIONS.LOW ? e.pbLg : t === G.GRANULARITY_OPTIONS.MEDIUM ? e.pbMg : t === G.GRANULARITY_OPTIONS.HIGH ? e.pbHg : t === G.GRANULARITY_OPTIONS.CUSTOM ? e.pbCg : void 0;
        };
      };
    function p(e, t, n) {
      function r(e, t) {
        return {
          key: e,
          val: "function" == typeof t ? function (e) {
            return t(e);
          } : function (e) {
            return Object(w.getValue)(e, t);
          }
        };
      }
      var i,
        o,
        a = G.TARGETING_KEYS,
        c = f(e, n),
        u = stpd.bidderSettings;
      return u[G.JSON_MAPPING.BD_SETTING_STANDARD] || (u[G.JSON_MAPPING.BD_SETTING_STANDARD] = {}), u[G.JSON_MAPPING.BD_SETTING_STANDARD][G.JSON_MAPPING.ADSERVER_TARGETING] || (u[G.JSON_MAPPING.BD_SETTING_STANDARD][G.JSON_MAPPING.ADSERVER_TARGETING] = [r(a.BIDDER, "bidderCode"), r(a.AD_ID, "adId"), r(a.PRICE_BUCKET, l(c)), r(a.SIZE, "size"), r(a.DEAL, "dealId"), r(a.SOURCE, "source"), r(a.FORMAT, "mediaType")]), "video" === e && (i = u[G.JSON_MAPPING.BD_SETTING_STANDARD][G.JSON_MAPPING.ADSERVER_TARGETING], [a.UUID, a.CACHE_ID].forEach(function (t) {
        void 0 === U()(i, function (e) {
          return e.key === t;
        }) && i.push(r(t, "videoCacheKey"));
      }), !B.b.getConfig("cache.url") || t && !1 === P.deepAccess(u, "".concat(t, ".sendStandardTargeting")) || (o = Object(w.parseUrl)(B.b.getConfig("cache.url")), void 0 === U()(i, function (e) {
        return e.key === a.CACHE_HOST;
      }) && i.push(r(a.CACHE_HOST, function (e) {
        return P.deepAccess(e, "adserverTargeting.".concat(a.CACHE_HOST)) ? e.adserverTargeting[a.CACHE_HOST] : o.hostname;
      })))), u[G.JSON_MAPPING.BD_SETTING_STANDARD];
    }
    function g(r, i, o) {
      var e = i[G.JSON_MAPPING.ADSERVER_TARGETING];
      return o.size = o.getSize(), P._each(e, function (e) {
        var t = e.key,
          n = e.val;
        if (r[t] && P.logWarn("The key: " + t + " is getting ovewritten"), P.isFn(n)) try {
          n = n(o);
        } catch (e) {
          P.logError("bidmanager", "ERROR", e);
        }
        (void 0 === i.suppressEmptyKeys || !0 !== i.suppressEmptyKeys) && t !== G.TARGETING_KEYS.DEAL || !P.isEmptyStr(n) && null != n ? r[t] = n : P.logInfo("suppressing empty key '" + t + "' from adserver targeting");
      }), r;
    }
    function ee(e, t) {
      return e[t.adUnitCode] || (e[t.adUnitCode] = {
        bids: []
      }), e[t.adUnitCode].bids.push(t), e;
    }
  },
  42: function (e, t) {
    e.exports = {};
  },
  43: function (e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return S;
    });
    var a = n(0),
      r = n(3),
      i = n(12),
      o = n.n(i),
      c = n(7);
    function u(e, t) {
      return function (e) {
        if (Array.isArray(e)) return e;
      }(e) || function (e, t) {
        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
        var n = [],
          r = !0,
          i = !1,
          o = void 0;
        try {
          for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
        } catch (e) {
          i = !0, o = e;
        } finally {
          try {
            r || null == c.return || c.return();
          } finally {
            if (i) throw o;
          }
        }
        return n;
      }(e, t) || function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return s(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === n && e.constructor && (n = e.constructor.name);
        if ("Map" === n || "Set" === n) return Array.from(e);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t);
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function s(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    function d() {
      return (d = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }).apply(this, arguments);
    }
    r.b.setDefaults({
      userSync: a.deepClone({
        syncEnabled: !0,
        filterSettings: {
          image: {
            bidders: "*",
            filter: "include"
          }
        },
        syncsPerBidder: 5,
        syncDelay: 3e3,
        auctionDelay: 0
      })
    });
    var f = Object(c.a)("usersync");
    var l,
      p,
      g,
      b,
      v,
      y,
      h,
      m = !a.isSafariBrowser() && f.cookiesAreEnabled(),
      S = (l = {
        config: r.b.getConfig("userSync"),
        browserSupportsCookies: m
      }, p = {}, g = A(), b = new Set(), y = {
        image: !0,
        iframe: !(v = {})
      }, h = l.config, r.b.getConfig("userSync", function (e) {
        var t;
        e.userSync && (t = e.userSync.filterSettings, a.isPlainObject(t) && (t.image || t.all || (e.userSync.filterSettings.image = {
          bidders: "*",
          filter: "include"
        }))), h = d(h, e.userSync);
      }), p.registerSync = function (e, t, n) {
        return b.has(t) ? a.logMessage('already fired syncs for "'.concat(t, '", ignoring registerSync call')) : h.syncEnabled && a.isArray(g[e]) ? t ? 0 !== h.syncsPerBidder && Number(v[t]) >= h.syncsPerBidder ? a.logWarn('Number of user syncs exceeded for "'.concat(t, '"')) : p.canBidderRegisterSync(e, t) ? (g[e].push([t, n]), (r = v)[i = t] ? r[i] += 1 : r[i] = 1, void (v = r)) : a.logWarn('Bidder "'.concat(t, '" not permitted to register their "').concat(e, '" userSync pixels.')) : a.logWarn("Bidder is required for registering sync") : a.logWarn('User sync type "'.concat(e, '" not supported'));
        var r, i;
      }, p.syncUsers = function () {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
        if (e) return setTimeout(E, Number(e));
        E();
      }, p.triggerUserSyncs = function () {
        h.enableOverride && p.syncUsers();
      }, p.canBidderRegisterSync = function (e, t) {
        return !h.filterSettings || !T(e, t);
      }, p);
    function A() {
      return {
        image: [],
        iframe: []
      };
    }
    function E() {
      if (h.syncEnabled && l.browserSupportsCookies) {
        try {
          !function () {
            if (!y.image) return;
            O(g.image, function (e) {
              var t = u(e, 2),
                n = t[0],
                r = t[1];
              a.logMessage("Invoking image pixel user sync for bidder: ".concat(n)), a.triggerPixel(r);
            });
          }(), function () {
            if (!y.iframe) return;
            O(g.iframe, function (e) {
              var t = u(e, 2),
                n = t[0],
                r = t[1];
              a.logMessage("Invoking iframe user sync for bidder: ".concat(n)), a.insertUserSyncIframe(r);
            });
          }();
        } catch (e) {
          return a.logError("Error firing user syncs", e);
        }
        g = A();
      }
    }
    function O(e, t) {
      a.shuffle(e).forEach(function (e) {
        t(e), b.add(e[0]);
      });
    }
    function T(e, t) {
      var n = h.filterSettings;
      if (function (e, t) {
        if (e.all && e[t]) return a.logWarn('Detected presence of the "filterSettings.all" and "filterSettings.'.concat(t, '" in userSync config.  You cannot mix "all" with "iframe/image" configs; they are mutually exclusive.')), !1;
        var n = e.all ? e.all : e[t],
          r = e.all ? "all" : t;
        if (!n) return !1;
        var i = n.filter,
          o = n.bidders;
        if (i && "include" !== i && "exclude" !== i) return a.logWarn('UserSync "filterSettings.'.concat(r, ".filter\" setting '").concat(i, "' is not a valid option; use either 'include' or 'exclude'.")), !1;
        return !!("*" === o || Array.isArray(o) && 0 < o.length && o.every(function (e) {
          return a.isStr(e) && "*" !== e;
        })) || (a.logWarn('Detected an invalid setup in userSync "filterSettings.'.concat(r, ".bidders\"; use either '*' (to represent all bidders) or an array of bidders.")), !1);
      }(n, e)) {
        y[e] = !0;
        var r = n.all ? n.all : n[e],
          i = "*" === r.bidders ? [t] : r.bidders;
        return {
          include: function (e, t) {
            return !o()(e, t);
          },
          exclude: function (e, t) {
            return o()(e, t);
          }
        }[r.filter || "include"](i, t);
      }
    }
  },
  44: function (e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return f;
    });
    var S = n(0),
      A = n(3),
      E = n(37),
      r = n(23),
      i = n(92),
      o = n(2),
      a = n(12),
      O = n.n(a);
    function T() {
      return (T = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }).apply(this, arguments);
    }
    function I(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e;
    }
    function C(e) {
      return function (e) {
        if (Array.isArray(e)) return c(e);
      }(e) || function (e) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
      }(e) || function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return c(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === n && e.constructor && (n = e.constructor.name);
        if ("Map" === n || "Set" === n) return Array.from(e);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t);
      }(e) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function c(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    var w = n(0),
      j = n(5),
      _ = [],
      B = Object.keys(j.TARGETING_KEYS).map(function (e) {
        return j.TARGETING_KEYS[e];
      }),
      u = function (e) {
        return e.responseTimestamp + 1e3 * e.ttl + 1e3 > Object(S.timestamp)();
      },
      s = function (e) {
        return e && (e.status && !O()([j.BID_STATUS.RENDERED], e.status) || !e.status);
      };
    function U(e, r, t) {
      var i = 2 < arguments.length && void 0 !== t ? t : 0,
        o = [],
        a = A.b.getConfig("sendBidsControl.dealPrioritization"),
        c = Object(S.groupBy)(e, "adUnitCode");
      return Object.keys(c).forEach(function (e) {
        var t = [],
          n = Object(S.groupBy)(c[e], "bidderCode");
        Object.keys(n).forEach(function (e) {
          return t.push(n[e].reduce(r));
        }), 0 < i ? (t = a ? t.sort(x(!0)) : t.sort(function (e, t) {
          return t.cpm - e.cpm;
        }), o.push.apply(o, C(t.slice(0, i)))) : o.push.apply(o, C(t));
      }), o;
    }
    function x(e) {
      var n = 0 < arguments.length && void 0 !== e && e;
      return function (e, t) {
        return void 0 !== e.adserverTargeting.hb_deal && void 0 === t.adserverTargeting.hb_deal ? -1 : void 0 === e.adserverTargeting.hb_deal && void 0 !== t.adserverTargeting.hb_deal ? 1 : n ? t.cpm - e.cpm : t.adserverTargeting.hb_pb - e.adserverTargeting.hb_pb;
      };
    }
    var R,
      k,
      d,
      f = (R = r.a, d = {}, (k = {}).setLatestAuctionForAdUnit = function (e, t) {
        d[e] = t;
      }, k.resetPresetTargeting = function (e, t) {
        var n, i;
        Object(S.isGptPubadsDefined)() && (n = N(e), i = R.getAdUnits().filter(function (e) {
          return O()(n, e.code);
        }), window.googletag.pubads().getSlots().forEach(function (n) {
          var r = w.isFn(t) && t(n);
          _.forEach(function (t) {
            i.forEach(function (e) {
              (e.code === n.getAdUnitPath() || e.code === n.getSlotElementId() || w.isFn(r) && r(e.code)) && n.setTargeting(t, null);
            });
          });
        }));
      }, k.resetPresetTargetingAST = function (e) {
        N(e).forEach(function (e) {
          var t,
            n,
            r = window.apntag.getTag(e);
          r && r.keywords && (t = Object.keys(r.keywords), n = {}, t.forEach(function (e) {
            O()(_, e.toLowerCase()) || (n[e] = r.keywords[e]);
          }), window.apntag.modifyTag(e, {
            keywords: n
          }));
        });
      }, k.getAllTargeting = function (e) {
        var t,
          n,
          r,
          i,
          o,
          a,
          c,
          u,
          s,
          d,
          f = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : P(),
          l = N(e),
          p = (c = l, u = f, s = k.getWinningBids(c, u), d = q(), (s = s.map(function (o) {
            return I({}, o.adUnitCode, Object.keys(o.adserverTargeting).filter(function (e) {
              return void 0 === o.sendStandardTargeting || o.sendStandardTargeting || -1 === d.indexOf(e);
            }).reduce(function (e, t) {
              var n = [o.adserverTargeting[t]],
                r = I({}, t.substring(0, 20), n);
              if (t !== j.TARGETING_KEYS.DEAL) return [].concat(C(e), [r]);
              var i = I({}, "".concat(t, "_").concat(o.bidderCode).substring(0, 20), n);
              return [].concat(C(e), [r, i]);
            }, []));
          })).concat((a = l, f.filter(function (e) {
            return O()(a, e.adUnitCode);
          }).map(function (e) {
            return T({}, e);
          }).reduce(M, []).map(G).filter(function (e) {
            return e;
          }))).concat(A.b.getConfig("enableSendAllBids") ? (n = l, r = f, i = B.concat(E.a), o = A.b.getConfig("sendBidsControl.bidLimit"), U(r, S.getHighestCpm, o).map(function (t) {
            if (D(t, n)) return I({}, t.adUnitCode, W(t, i.filter(function (e) {
              return void 0 !== t.adserverTargeting[e];
            })));
          }).filter(function (e) {
            return e;
          })) : function (e, t) {
            if (!0 !== A.b.getConfig("targetingControls.alwaysIncludeDeals")) return [];
            var n = B.concat(E.a);
            return U(t, S.getHighestCpm).map(function (t) {
              if (t.dealId && D(t, e)) return I({}, t.adUnitCode, W(t, n.filter(function (e) {
                return void 0 !== t.adserverTargeting[e];
              })));
            }).filter(function (e) {
              return e;
            });
          }(l, f)).concat((t = l, R.getAdUnits().filter(function (e) {
            return O()(t, e.code) && g(e);
          }).map(function (e) {
            return I({}, e.code, (t = g(e), Object.keys(t).map(function (e) {
              return I({}, e, w.isArray(t[e]) ? t[e] : t[e].split(","));
            })));
            var t;
          }))));
        function g(e) {
          return Object(S.deepAccess)(e, j.JSON_MAPPING.ADSERVER_TARGETING);
        }
        p.map(function (t) {
          Object.keys(t).map(function (e) {
            t[e].map(function (e) {
              -1 === _.indexOf(Object.keys(e)[0]) && (_ = Object.keys(e).concat(_));
            });
          });
        });
        var b = A.b.getConfig("targetingControls.allowTargetingKeys");
        Array.isArray(b) && 0 < b.length && (p = function (e, r) {
          var i = T({}, j.TARGETING_KEYS, j.NATIVE_KEYS),
            o = Object.keys(i),
            a = {};
          Object(S.logInfo)("allowTargetingKeys - allowed keys [ ".concat(r.map(function (e) {
            return i[e];
          }).join(", "), " ]")), e.map(function (e) {
            var t = Object.keys(e)[0],
              n = e[t].filter(function (e) {
                var n = Object.keys(e)[0],
                  t = 0 === o.filter(function (e) {
                    return 0 === n.indexOf(i[e]);
                  }).length || r.find(function (e) {
                    var t = i[e];
                    return 0 === n.indexOf(t);
                  });
                return a[n] = !t, t;
              });
            e[t] = n;
          });
          var t = Object.keys(a).filter(function (e) {
            return a[e];
          });
          return Object(S.logInfo)("allowTargetingKeys - removed keys [ ".concat(t.join(", "), " ]")), e.filter(function (e) {
            return 0 < e[Object.keys(e)[0]].length;
          });
        }(p, b)), p = p.map(function (e) {
          return I({}, Object.keys(e)[0], e[Object.keys(e)[0]].map(function (e) {
            return I({}, Object.keys(e)[0], e[Object.keys(e)[0]].join(", "));
          }).reduce(function (e, t) {
            return T(t, e);
          }, {}));
        }).reduce(function (e, t) {
          var n = Object.keys(t)[0];
          return e[n] = T({}, e[n], t[n]), e;
        }, {});
        var v,
          y,
          h,
          m = A.b.getConfig("targetingControls.auctionKeyMaxChars");
        return m && (Object(S.logInfo)("Detected 'targetingControls.auctionKeyMaxChars' was active for this auction; set with a limit of ".concat(m, " characters.  Running checks on auction keys...")), v = p, y = m, h = Object(S.deepClone)(v), p = Object.keys(h).map(function (e) {
          return {
            adUnitCode: e,
            adserverTargeting: h[e]
          };
        }).sort(x()).reduce(function (e, t, n, r) {
          var i,
            o = (i = t.adserverTargeting, Object.keys(i).reduce(function (e, t) {
              return e + "".concat(t, "%3d").concat(encodeURIComponent(i[t]), "%26");
            }, ""));
          n + 1 === r.length && (o = o.slice(0, -3));
          var a = t.adUnitCode,
            c = o.length;
          return c <= y ? (y -= c, Object(S.logInfo)("AdUnit '".concat(a, "' auction keys comprised of ").concat(c, " characters.  Deducted from running threshold; new limit is ").concat(y), h[a]), e[a] = h[a]) : Object(S.logWarn)("The following keys for adUnitCode '".concat(a, "' exceeded the current limit of the 'auctionKeyMaxChars' setting.\nThe key-set size was ").concat(c, ", the current allotted amount was ").concat(y, ".\n"), h[a]), n + 1 === r.length && 0 === Object.keys(e).length && Object(S.logError)("No auction targeting keys were permitted due to the setting in setConfig(targetingControls.auctionKeyMaxChars).  Please review setup and consider adjusting."), e;
        }, {})), l.forEach(function (e) {
          p[e] || (p[e] = {});
        }), p;
      }, k.setTargetingForGPT = function (i, e) {
        window.googletag.pubads().getSlots().forEach(function (r) {
          Object.keys(i).filter((e || Object(S.isAdUnitCodeMatchingSlot))(r)).forEach(function (n) {
            return Object.keys(i[n]).forEach(function (t) {
              var e = i[n][t];
              "string" == typeof e && (e = e.split(",")), (e = 1 < e.length ? [e] : e).map(function (e) {
                return w.logMessage("Attempting to set key value for slot: ".concat(r.getSlotElementId(), " key: ").concat(t, " value: ").concat(e)), e;
              }).forEach(function (e) {
                r.setTargeting(t, e);
              });
            });
          });
        });
      }, k.getWinningBids = function (e) {
        var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : P(),
          t = N(e);
        return n.filter(function (e) {
          return O()(t, e.adUnitCode);
        }).filter(function (e) {
          return 0 < e.cpm;
        }).map(function (e) {
          return e.adUnitCode;
        }).filter(S.uniques).map(function (t) {
          return n.filter(function (e) {
            return e.adUnitCode === t ? e : null;
          }).reduce(S.getHighestCpm);
        });
      }, k.setTargetingForAst = function (e) {
        var r = k.getAllTargeting(e);
        try {
          k.resetPresetTargetingAST(e);
        } catch (e) {
          w.logError("unable to reset targeting for AST" + e);
        }
        Object.keys(r).forEach(function (n) {
          return Object.keys(r[n]).forEach(function (e) {
            var t;
            w.logMessage("Attempting to set targeting for targetId: ".concat(n, " key: ").concat(e, " value: ").concat(r[n][e])), (w.isStr(r[n][e]) || w.isArray(r[n][e])) && (t = {}, e.search(/pt[0-9]/) < 0 ? t[e.toUpperCase()] = r[n][e] : t[e] = r[n][e], window.apntag.setKeywords(n, t, {
              overrideKeyValue: !0
            }));
          });
        });
      }, k.isApntagDefined = function () {
        if (window.apntag && w.isFn(window.apntag.setKeywords)) return !0;
      }, k);
    function D(e, t) {
      return e.adserverTargeting && t && (w.isArray(t) && O()(t, e.adUnitCode) || "string" == typeof t && e.adUnitCode === t);
    }
    function N(e) {
      return "string" == typeof e ? [e] : w.isArray(e) ? e : R.getAdUnitCodes() || [];
    }
    function P() {
      var e = R.getBidsReceived();
      return A.b.getConfig("useBidCache") || (e = e.filter(function (e) {
        return d[e.adUnitCode] === e.auctionId;
      })), U(e = e.filter(function (e) {
        return Object(S.deepAccess)(e, "video.context") !== o.a;
      }).filter(function (e) {
        return "banner" !== e.mediaType || Object(i.c)([e.width, e.height]);
      }).filter(s).filter(u), S.getOldestHighestCpmBid);
    }
    function q() {
      return R.getStandardBidderAdServerTargeting().map(function (e) {
        return e.key;
      }).concat(B).filter(S.uniques);
    }
    function M(r, i, e, t) {
      return Object.keys(i.adserverTargeting).filter(l()).forEach(function (e) {
        var t, n;
        r.length && r.filter((n = e, function (e) {
          return e.adUnitCode === i.adUnitCode && e.adserverTargeting[n];
        })).forEach((t = e, function (e) {
          w.isArray(e.adserverTargeting[t]) || (e.adserverTargeting[t] = [e.adserverTargeting[t]]), e.adserverTargeting[t] = e.adserverTargeting[t].concat(i.adserverTargeting[t]).filter(S.uniques), delete i.adserverTargeting[t];
        }));
      }), r.push(i), r;
    }
    function l() {
      var t = q().concat(E.a);
      return function (e) {
        return -1 === t.indexOf(e);
      };
    }
    function G(t) {
      return I({}, t.adUnitCode, Object.keys(t.adserverTargeting).filter(l()).map(function (e) {
        return I({}, e.substring(0, 20), [t.adserverTargeting[e]]);
      }));
    }
    function W(t, e) {
      return e.map(function (e) {
        return I({}, "".concat(e, "_").concat(t.bidderCode).substring(0, 20), [t.adserverTargeting[e]]);
      });
    }
  },
  45: function (e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return d;
    }), n.d(t, "b", function () {
      return h;
    });
    var r = n(10),
      v = n.n(r),
      i = n(0),
      y = 2,
      o = {
        buckets: [{
          max: 5,
          increment: .5
        }]
      },
      a = {
        buckets: [{
          max: 20,
          increment: .1
        }]
      },
      c = {
        buckets: [{
          max: 20,
          increment: .01
        }]
      },
      u = {
        buckets: [{
          max: 3,
          increment: .01
        }, {
          max: 8,
          increment: .05
        }, {
          max: 20,
          increment: .5
        }]
      },
      s = {
        buckets: [{
          max: 5,
          increment: .05
        }, {
          max: 10,
          increment: .1
        }, {
          max: 20,
          increment: .5
        }]
      };
    function d(e, t) {
      var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1,
        r = parseFloat(e);
      return isNaN(r) && (r = ""), {
        low: "" === r ? "" : f(e, o, n),
        med: "" === r ? "" : f(e, a, n),
        high: "" === r ? "" : f(e, c, n),
        auto: "" === r ? "" : f(e, s, n),
        dense: "" === r ? "" : f(e, u, n),
        custom: "" === r ? "" : f(e, t, n)
      };
    }
    function f(n, e, r) {
      var i = "";
      if (!h(e)) return i;
      var t,
        o,
        a,
        c,
        u,
        s,
        d,
        f,
        l,
        p = e.buckets.reduce(function (e, t) {
          return e.max > t.max ? e : t;
        }, {
          max: 0
        }),
        g = 0,
        b = v()(e.buckets, function (e) {
          if (n > p.max * r) {
            var t = e.precision;
            void 0 === t && (t = y), i = (e.max * r).toFixed(t);
          } else {
            if (n <= e.max * r && g * r <= n) return e.min = g, e;
            g = e.max;
          }
        });
      return b && (t = n, a = r, c = void 0 !== (o = b).precision ? o.precision : y, u = o.increment * a, s = o.min * a, d = Math.pow(10, c + 2), f = (t * d - s * d) / (u * d), l = Math.floor(f) * u + s, i = (l = Number(l.toFixed(10))).toFixed(c)), i;
    }
    function h(e) {
      if (i.isEmpty(e) || !e.buckets || !Array.isArray(e.buckets)) return !1;
      var t = !0;
      return e.buckets.forEach(function (e) {
        e.max && e.increment || (t = !1);
      }), t;
    }
  },
  46: function (e, t) {
    e.exports = function (e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t
      };
    };
  },
  47: function (e, t, n) {
    var r = n(71),
      i = n(49);
    e.exports = function (e) {
      return r(i(e));
    };
  },
  48: function (e, t) {
    var n = {}.toString;
    e.exports = function (e) {
      return n.call(e).slice(8, -1);
    };
  },
  49: function (e, t) {
    e.exports = function (e) {
      if (null == e) throw TypeError("Can't call method on " + e);
      return e;
    };
  },
  5: function (e, t) {
    e.exports = {
      JSON_MAPPING: {
        PL_CODE: "code",
        PL_SIZE: "sizes",
        PL_BIDS: "bids",
        BD_BIDDER: "bidder",
        BD_ID: "paramsd",
        BD_PL_ID: "placementId",
        ADSERVER_TARGETING: "adserverTargeting",
        BD_SETTING_STANDARD: "standard"
      },
      DEBUG_MODE: "pbjs_debug",
      STATUS: {
        GOOD: 1,
        NO_BID: 2
      },
      CB: {
        TYPE: {
          ALL_BIDS_BACK: "allRequestedBidsBack",
          AD_UNIT_BIDS_BACK: "adUnitBidsBack",
          BID_WON: "bidWon",
          REQUEST_BIDS: "requestBids"
        }
      },
      EVENTS: {
        AUCTION_INIT: "auctionInit",
        AUCTION_END: "auctionEnd",
        BID_ADJUSTMENT: "bidAdjustment",
        BID_TIMEOUT: "bidTimeout",
        BID_REQUESTED: "bidRequested",
        BID_RESPONSE: "bidResponse",
        NO_BID: "noBid",
        BID_WON: "bidWon",
        BIDDER_DONE: "bidderDone",
        SET_TARGETING: "setTargeting",
        BEFORE_REQUEST_BIDS: "beforeRequestBids",
        REQUEST_BIDS: "requestBids",
        ADD_AD_UNITS: "addAdUnits",
        AD_RENDER_FAILED: "adRenderFailed",
        TCF2_ENFORCEMENT: "tcf2Enforcement",
        AUCTION_DEBUG: "auctionDebug"
      },
      AD_RENDER_FAILED_REASON: {
        PREVENT_WRITING_ON_MAIN_DOCUMENT: "preventWritingOnMainDocument",
        NO_AD: "noAd",
        EXCEPTION: "exception",
        CANNOT_FIND_AD: "cannotFindAd",
        MISSING_DOC_OR_ADID: "missingDocOrAdid"
      },
      EVENT_ID_PATHS: {
        bidWon: "adUnitCode"
      },
      GRANULARITY_OPTIONS: {
        LOW: "low",
        MEDIUM: "medium",
        HIGH: "high",
        AUTO: "auto",
        DENSE: "dense",
        CUSTOM: "custom"
      },
      TARGETING_KEYS: {
        BIDDER: "hb_bidder",
        AD_ID: "hb_adid",
        PRICE_BUCKET: "hb_pb",
        SIZE: "hb_size",
        DEAL: "hb_deal",
        SOURCE: "hb_source",
        FORMAT: "hb_format",
        UUID: "hb_uuid",
        CACHE_ID: "hb_cache_id",
        CACHE_HOST: "hb_cache_host"
      },
      NATIVE_KEYS: {
        title: "hb_native_title",
        body: "hb_native_body",
        body2: "hb_native_body2",
        privacyLink: "hb_native_privacy",
        privacyIcon: "hb_native_privicon",
        sponsoredBy: "hb_native_brand",
        image: "hb_native_image",
        icon: "hb_native_icon",
        clickUrl: "hb_native_linkurl",
        displayUrl: "hb_native_displayurl",
        cta: "hb_native_cta",
        rating: "hb_native_rating",
        address: "hb_native_address",
        downloads: "hb_native_downloads",
        likes: "hb_native_likes",
        phone: "hb_native_phone",
        price: "hb_native_price",
        salePrice: "hb_native_saleprice"
      },
      S2S: {
        SRC: "s2s",
        DEFAULT_ENDPOINT: "https://prebid.adnxs.com/pbs/v1/openrtb2/auction",
        SYNCED_BIDDERS_KEY: "pbjsSyncs"
      },
      BID_STATUS: {
        BID_TARGETING_SET: "targetingSet",
        RENDERED: "rendered",
        BID_REJECTED: "bidRejected"
      }
    };
  },
  50: function (e, t, n) {
    var r = n(58),
      i = Math.min;
    e.exports = function (e) {
      return 0 < e ? i(r(e), 9007199254740991) : 0;
    };
  },
  51: function (e, t) {
    e.exports = function () {};
  },
  513: function (e, t, n) {
    var r = n(514);
    e.exports = r;
  },
  514: function (e, t, n) {
    n(515);
    var r = n(42);
    e.exports = r.Number.isInteger;
  },
  515: function (e, t, n) {
    n(14)({
      target: "Number",
      stat: !0
    }, {
      isInteger: n(516)
    });
  },
  516: function (e, t, n) {
    var r = n(27),
      i = Math.floor;
    e.exports = function (e) {
      return !r(e) && isFinite(e) && i(e) === e;
    };
  },
  52: function (e, t, n) {
    var r = n(29);
    e.exports = r;
  },
  53: function (e, t) {
    e.exports = {};
  },
  54: function (e, t, n) {
    var r,
      i,
      o,
      a,
      c,
      u,
      s,
      d,
      f = n(114),
      l = n(26),
      p = n(27),
      g = n(32),
      b = n(28),
      v = n(65),
      y = n(53),
      h = l.WeakMap;
    s = f ? (r = new h(), i = r.get, o = r.has, a = r.set, c = function (e, t) {
      return a.call(r, e, t), t;
    }, u = function (e) {
      return i.call(r, e) || {};
    }, function (e) {
      return o.call(r, e);
    }) : (y[d = v("state")] = !0, c = function (e, t) {
      return g(e, d, t), t;
    }, u = function (e) {
      return b(e, d) ? e[d] : {};
    }, function (e) {
      return b(e, d);
    }), e.exports = {
      set: c,
      get: u,
      has: s,
      enforce: function (e) {
        return s(e) ? u(e) : c(e, {});
      },
      getterFor: function (n) {
        return function (e) {
          var t;
          if (!p(e) || (t = u(e)).type !== n) throw TypeError("Incompatible receiver, " + n + " required");
          return t;
        };
      }
    };
  },
  55: function (e, t, n) {
    var i = n(27);
    e.exports = function (e, t) {
      if (!i(e)) return e;
      var n, r;
      if (t && "function" == typeof (n = e.toString) && !i(r = n.call(e))) return r;
      if ("function" == typeof (n = e.valueOf) && !i(r = n.call(e))) return r;
      if (!t && "function" == typeof (n = e.toString) && !i(r = n.call(e))) return r;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  56: function (e, t, n) {
    function r(p) {
      var g = 1 == p,
        b = 2 == p,
        v = 3 == p,
        y = 4 == p,
        h = 6 == p,
        m = 5 == p || h;
      return function (e, t, n, r) {
        for (var i, o, a = E(e), c = A(a), u = S(t, n, 3), s = O(c.length), d = 0, f = r || T, l = g ? f(e, s) : b ? f(e, 0) : void 0; d < s; d++) if ((m || d in c) && (o = u(i = c[d], d, a), p)) if (g) l[d] = o;else if (o) switch (p) {
          case 3:
            return !0;
          case 5:
            return i;
          case 6:
            return d;
          case 2:
            I.call(l, i);
        } else if (y) return !1;
        return h ? -1 : v || y ? y : l;
      };
    }
    var S = n(24),
      A = n(71),
      E = n(57),
      O = n(50),
      T = n(102),
      I = [].push;
    e.exports = {
      forEach: r(0),
      map: r(1),
      filter: r(2),
      some: r(3),
      every: r(4),
      find: r(5),
      findIndex: r(6)
    };
  },
  57: function (e, t, n) {
    var r = n(49);
    e.exports = function (e) {
      return Object(r(e));
    };
  },
  58: function (e, t) {
    var n = Math.ceil,
      r = Math.floor;
    e.exports = function (e) {
      return isNaN(e = +e) ? 0 : (0 < e ? r : n)(e);
    };
  },
  59: function (e, t) {
    var n = 0,
      r = Math.random();
    e.exports = function (e) {
      return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++n + r).toString(36);
    };
  },
  60: function (e, t, n) {
    function a(e) {
      throw e;
    }
    var c = n(30),
      u = n(31),
      s = n(28),
      d = Object.defineProperty,
      f = {};
    e.exports = function (e, t) {
      if (s(f, e)) return f[e];
      var n = [][e],
        r = !!s(t = t || {}, "ACCESSORS") && t.ACCESSORS,
        i = s(t, 0) ? t[0] : a,
        o = s(t, 1) ? t[1] : void 0;
      return f[e] = !!n && !u(function () {
        if (r && !c) return !0;
        var e = {
          length: -1
        };
        r ? d(e, 1, {
          enumerable: !0,
          get: a
        }) : e[1] = 1, n.call(e, i, o);
      });
    };
  },
  61: function (e, t, n) {
    var r = n(62),
      i = n(38),
      o = n(21)("iterator");
    e.exports = function (e) {
      if (null != e) return e[o] || e["@@iterator"] || i[r(e)];
    };
  },
  62: function (e, t, n) {
    var r = n(63),
      i = n(48),
      o = n(21)("toStringTag"),
      a = "Arguments" == i(function () {
        return arguments;
      }());
    e.exports = r ? i : function (e) {
      var t, n, r;
      return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function (e, t) {
        try {
          return e[t];
        } catch (e) {}
      }(t = Object(e), o)) ? n : a ? i(t) : "Object" == (r = i(t)) && "function" == typeof t.callee ? "Arguments" : r;
    };
  },
  63: function (e, t, n) {
    var r = {};
    r[n(21)("toStringTag")] = "z", e.exports = "[object z]" === String(r);
  },
  64: function (e, t, n) {
    var o = n(63),
      a = n(33).f,
      c = n(32),
      u = n(28),
      s = n(113),
      d = n(21)("toStringTag");
    e.exports = function (e, t, n, r) {
      var i;
      e && (i = n ? e : e.prototype, u(i, d) || a(i, d, {
        configurable: !0,
        value: t
      }), r && !o && c(i, "toString", s));
    };
  },
  65: function (e, t, n) {
    var r = n(74),
      i = n(59),
      o = r("keys");
    e.exports = function (e) {
      return o[e] || (o[e] = i(e));
    };
  },
  66: function (e, t, n) {
    "use strict";

    function y() {
      return this;
    }
    var h = n(14),
      m = n(122),
      S = n(87),
      A = n(124),
      E = n(64),
      O = n(32),
      T = n(85),
      r = n(21),
      I = n(16),
      C = n(38),
      i = n(86),
      w = i.IteratorPrototype,
      j = i.BUGGY_SAFARI_ITERATORS,
      _ = r("iterator"),
      B = "values",
      U = "entries";
    e.exports = function (e, t, n, r, i, o, a) {
      m(n, t, r);
      function c(e) {
        if (e === i && b) return b;
        if (!j && e in p) return p[e];
        switch (e) {
          case "keys":
          case B:
          case U:
            return function () {
              return new n(this, e);
            };
        }
        return function () {
          return new n(this);
        };
      }
      var u,
        s,
        d,
        f = t + " Iterator",
        l = !1,
        p = e.prototype,
        g = p[_] || p["@@iterator"] || i && p[i],
        b = !j && g || c(i),
        v = "Array" == t && p.entries || g;
      if (v && (u = S(v.call(new e())), w !== Object.prototype && u.next && (I || S(u) === w || (A ? A(u, w) : "function" != typeof u[_] && O(u, _, y)), E(u, f, !0, !0), I && (C[f] = y))), i == B && g && g.name !== B && (l = !0, b = function () {
        return g.call(this);
      }), I && !a || p[_] === b || O(p, _, b), C[t] = b, i) if (s = {
        values: c(B),
        keys: o ? b : c("keys"),
        entries: c(U)
      }, a) for (d in s) !j && !l && d in p || T(p, d, s[d]);else h({
        target: t,
        proto: !0,
        forced: j || l
      }, s);
      return s;
    };
  },
  67: function (e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return o;
    });
    var r = n(0),
      c = {};
    function i(e, t, n) {
      var r,
        i,
        o,
        a = (i = n, o = c[r = e] = c[r] || {
          bidders: {}
        }, i ? o.bidders[i] = o.bidders[i] || {} : o);
      return a[t] = (a[t] || 0) + 1, a[t];
    }
    var o = {
      incrementRequestsCounter: function (e) {
        return i(e, "requestsCounter");
      },
      incrementBidderRequestsCounter: function (e, t) {
        return i(e, "requestsCounter", t);
      },
      incrementBidderWinsCounter: function (e, t) {
        return i(e, "winsCounter", t);
      },
      getRequestsCounter: function (e) {
        return Object(r.deepAccess)(c, "".concat(e, ".requestsCounter")) || 0;
      },
      getBidderRequestsCounter: function (e, t) {
        return Object(r.deepAccess)(c, "".concat(e, ".bidders.").concat(t, ".requestsCounter")) || 0;
      },
      getBidderWinsCounter: function (e, t) {
        return Object(r.deepAccess)(c, "".concat(e, ".bidders.").concat(t, ".winsCounter")) || 0;
      }
    };
  },
  69: function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), n.d(t, "adUnitSetupChecks", function () {
      return z;
    }), n.d(t, "checkAdUnitSetup", function () {
      return V;
    }), t.executeCallbacks = J;
    var r = n(20),
      i = n(0),
      o = n(229),
      a = n(43),
      d = n(3),
      m = n(23),
      f = n(44),
      c = n(13),
      u = n(230),
      s = n(12),
      l = n.n(s),
      p = n(67),
      S = n(11),
      g = n(34),
      b = n(7);
    function v(e) {
      return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      })(e);
    }
    function y() {
      return (y = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }).apply(this, arguments);
    }
    var h = Object(r.a)(),
      A = n(5),
      E = n(0),
      O = n(8).default,
      T = n(9),
      I = a.a.triggerUserSyncs,
      C = A.EVENTS,
      w = C.ADD_AD_UNITS,
      j = C.BID_WON,
      _ = C.REQUEST_BIDS,
      B = C.SET_TARGETING,
      U = C.AD_RENDER_FAILED,
      x = A.AD_RENDER_FAILED_REASON,
      R = x.PREVENT_WRITING_ON_MAIN_DOCUMENT,
      k = x.NO_AD,
      D = x.EXCEPTION,
      N = x.CANNOT_FIND_AD,
      P = x.MISSING_DOC_OR_ADID,
      q = {
        bidWon: function (e) {
          var t = m.a.getBidsRequested().map(function (e) {
            return e.bids.map(function (e) {
              return e.adUnitCode;
            });
          }).reduce(i.flatten).filter(i.uniques);
          return !!E.contains(t, e) || void E.logError('The "' + e + '" placement is not defined.');
        }
      };
    function M(e, t, n) {
      e.defaultView && e.defaultView.frameElement && (e.defaultView.frameElement.width = t, e.defaultView.frameElement.height = n);
    }
    function G(e, t) {
      var n = [];
      return E.isArray(e) && (t ? e.length === t : 0 < e.length) && (e.every(function (e) {
        return Object(i.isArrayOfNums)(e, 2);
      }) ? n = e : Object(i.isArrayOfNums)(e, 2) && n.push(e)), n;
    }
    function W(e) {
      var t = E.deepClone(e),
        n = t.mediaTypes.banner,
        r = G(n.sizes);
      return 0 < r.length ? (n.sizes = r, t.sizes = r) : (E.logError("Detected a mediaTypes.banner object without a proper sizes field.  Please ensure the sizes are listed like: [[300, 250], ...].  Removing invalid mediaTypes.banner object from request."), delete t.mediaTypes.banner), t;
    }
    function L(e) {
      var t,
        n,
        r = E.deepClone(e),
        i = r.mediaTypes.video;
      return i.playerSize && (t = "number" == typeof i.playerSize[0] ? 2 : 1, 0 < (n = G(i.playerSize, t)).length ? (2 == t && E.logInfo("Transforming video.playerSize from [640,480] to [[640,480]] so it's in the proper format."), i.playerSize = n, r.sizes = n) : (E.logError("Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request."), delete r.mediaTypes.video.playerSize)), r;
    }
    function F(e) {
      var t = E.deepClone(e),
        n = t.mediaTypes.native;
      return n.image && n.image.sizes && !Array.isArray(n.image.sizes) && (E.logError("Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request."), delete t.mediaTypes.native.image.sizes), n.image && n.image.aspect_ratios && !Array.isArray(n.image.aspect_ratios) && (E.logError("Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request."), delete t.mediaTypes.native.image.aspect_ratios), n.icon && n.icon.sizes && !Array.isArray(n.icon.sizes) && (E.logError("Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request."), delete t.mediaTypes.native.icon.sizes), t;
    }
    Object(u.a)(), h.bidderSettings = h.bidderSettings || {}, h.libLoaded = !0, h.version = "v4.21.0-pre", E.logInfo("Prebid.js v4.21.0-pre loaded"), h.adUnits = h.adUnits || [], h.triggerUserSyncs = I;
    var z = {
        validateBannerMediaType: W,
        validateVideoMediaType: L,
        validateNativeMediaType: F,
        validateSizes: G
      },
      V = Object(c.b)("sync", function (e) {
        var c = [];
        return e.forEach(function (e) {
          var t,
            n,
            r,
            i,
            o = e.mediaTypes,
            a = e.bids;
          a && E.isArray(a) ? o && 0 !== Object.keys(o).length ? (o.banner && (t = W(e)), o.video && (n = L(t || e)), o.native && (r = F(n || t || e)), i = y({}, t, n, r), c.push(i)) : E.logError("Detected adUnit.code '".concat(e.code, "' did not have a 'mediaTypes' object defined.  This is a required field for the auction, so this adUnit has been removed.")) : E.logError("Detected adUnit.code '".concat(e.code, "' did not have 'adUnit.bids' defined or 'adUnit.bids' is not an array. Removing adUnit from auction."));
        }), c;
      }, "checkAdUnitSetup");
    function H(e) {
      var n = m.a[e]().filter(E.bind.call(i.adUnitsFilter, this, m.a.getAdUnitCodes())),
        r = m.a.getLastAuctionId();
      return n.map(function (e) {
        return e.adUnitCode;
      }).filter(i.uniques).map(function (t) {
        return n.filter(function (e) {
          return e.auctionId === r && e.adUnitCode === t;
        });
      }).filter(function (e) {
        return e && e[0] && e[0].adUnitCode;
      }).map(function (e) {
        return t = {}, n = e[0].adUnitCode, r = {
          bids: e
        }, n in t ? Object.defineProperty(t, n, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[n] = r, t;
        var t, n, r;
      }).reduce(function (e, t) {
        return y(e, t);
      }, {});
    }
    function K(e) {
      var t = e.reason,
        n = e.message,
        r = e.bid,
        i = e.id,
        o = {
          reason: t,
          message: n
        };
      r && (o.bid = r), i && (o.adId = i), E.logError(n), T.emit(U, o);
    }
    function J(e, t) {
      function n(e) {
        for (var t; t = e.shift();) t();
      }
      n(b.c), n(Y), e.call(this, t);
    }
    h.getAdserverTargetingForAdUnitCodeStr = function (e) {
      if (E.logInfo("Invoking stpd.getAdserverTargetingForAdUnitCodeStr", arguments), e) {
        var t = h.getAdserverTargetingForAdUnitCode(e);
        return E.transformAdServerTargetingObj(t);
      }
      E.logMessage("Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode");
    }, h.getAdserverTargetingForAdUnitCode = function (e) {
      return h.getAdserverTargeting(e)[e];
    }, h.getAdserverTargeting = function (e) {
      return E.logInfo("Invoking stpd.getAdserverTargeting", arguments), f.a.getAllTargeting(e);
    }, h.getNoBids = function () {
      return E.logInfo("Invoking stpd.getNoBids", arguments), H("getNoBids");
    }, h.getNoBidsForAdUnitCode = function (t) {
      return {
        bids: m.a.getNoBids().filter(function (e) {
          return e.adUnitCode === t;
        })
      };
    }, h.getBidResponses = function () {
      return E.logInfo("Invoking stpd.getBidResponses", arguments), H("getBidsReceived");
    }, h.getBidResponsesForAdUnitCode = function (t) {
      return {
        bids: m.a.getBidsReceived().filter(function (e) {
          return e.adUnitCode === t;
        })
      };
    }, h.setTargetingForGPTAsync = function (e, t) {
      var n;
      E.logInfo("Invoking stpd.setTargetingForGPTAsync", arguments), Object(i.isGptPubadsDefined)() ? (n = f.a.getAllTargeting(e), f.a.resetPresetTargeting(e, t), f.a.setTargetingForGPT(n, t), Object.keys(n).forEach(function (t) {
        Object.keys(n[t]).forEach(function (e) {
          "hb_adid" === e && m.a.setStatusForBids(n[t][e], A.BID_STATUS.BID_TARGETING_SET);
        });
      }), T.emit(B, n)) : E.logError("window.googletag is not defined on the page");
    }, h.setTargetingForAst = function (e) {
      E.logInfo("Invoking stpd.setTargetingForAn", arguments), f.a.isApntagDefined() ? (f.a.setTargetingForAst(e), T.emit(B, f.a.getAllTargeting())) : E.logError("window.apntag is not defined on the page");
    }, h.renderAd = function (e, t, n) {
      if (E.logInfo("Invoking stpd.renderAd", arguments), E.logMessage("Calling renderAd with adId :" + t), e && t) try {
        var r,
          i,
          o,
          a,
          c,
          u,
          s,
          d,
          f,
          l,
          p,
          g,
          b,
          v = m.a.findBidByAdId(t);
        v ? (v.ad = E.replaceAuctionPrice(v.ad, v.cpm), v.adUrl = E.replaceAuctionPrice(v.adUrl, v.cpm), n && n.clickThrough && (r = n.clickThrough, v.ad = E.replaceClickThrough(v.ad, r), v.adUrl = E.replaceClickThrough(v.adUrl, r)), m.a.addWinningBid(v), T.emit(j, v), i = v.height, o = v.width, a = v.ad, c = v.mediaType, u = v.adUrl, s = v.renderer, d = document.createComment("Creative ".concat(v.creativeId, " served by ").concat(v.bidder, " Prebid.js Header Bidding")), E.insertElement(d, e, "body"), Object(S.c)(s) ? Object(S.b)(s, v) : e === document && !E.inIframe() || "video" === c ? (f = "Error trying to write ad. Ad render call ad id ".concat(t, " was prevented from writing to the main document."), K({
          reason: R,
          message: f,
          bid: v,
          id: t
        })) : a ? (navigator.userAgent && -1 < navigator.userAgent.toLowerCase().indexOf("firefox/") && (l = navigator.userAgent.toLowerCase().match(/firefox\/([\d\.]+)/)[1]) && parseInt(l, 10) < 67 && e.open("text/html", "replace"), e.write(a), e.close(), M(e, o, i), E.callBurl(v)) : u ? ((p = E.createInvisibleIframe()).height = i, p.width = o, p.style.display = "inline", p.style.overflow = "hidden", p.src = u, E.insertElement(p, e, "body"), M(e, o, i), E.callBurl(v)) : (g = "Error trying to write ad. No ad for bid response id: ".concat(t), K({
          reason: k,
          message: g,
          bid: v,
          id: t
        }))) : (b = "Error trying to write ad. Cannot find ad by given id : ".concat(t), K({
          reason: N,
          message: b,
          id: t
        }));
      } catch (e) {
        var y = "Error trying to write ad Id :".concat(t, " to the page:").concat(e.message);
        K({
          reason: D,
          message: y,
          id: t
        });
      } else {
        var h = "Error trying to write ad Id :".concat(t, " to the page. Missing document or adId");
        K({
          reason: P,
          message: h,
          id: t
        });
      }
    }, h.removeAdUnit = function (e) {
      E.logInfo("Invoking stpd.removeAdUnit", arguments), e ? (E.isArray(e) ? e : [e]).forEach(function (e) {
        for (var t = h.adUnits.length - 1; 0 <= t; t--) h.adUnits[t].code === e && h.adUnits.splice(t, 1);
      }) : h.adUnits = [];
    }, h.requestBids = Object(c.b)("async", function () {
      var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
        t = e.bidsBackHandler,
        n = e.timeout,
        r = e.adUnits,
        i = e.adUnitCodes,
        o = e.labels,
        a = e.auctionId;
      T.emit(_);
      var c = n || d.b.getConfig("bidderTimeout"),
        r = r || h.adUnits;
      if (E.logInfo("Invoking stpd.requestBids", arguments), r = V(r), i && i.length ? r = r.filter(function (e) {
        return l()(i, e.code);
      }) : i = r && r.map(function (e) {
        return e.code;
      }), r.forEach(function (i) {
        var o = Object.keys(i.mediaTypes || {
            banner: "banner"
          }),
          e = i.bids.map(function (e) {
            return e.bidder;
          }),
          a = O.bidderRegistry,
          t = d.b.getConfig("s2sConfig"),
          n = t && t.bidders,
          r = n ? e.filter(function (e) {
            return !l()(n, e);
          }) : e;
        i.transactionId = E.generateUUID(), r.forEach(function (t) {
          var e = a[t],
            n = e && e.getSpec && e.getSpec(),
            r = n && n.supportedMediaTypes || ["banner"];
          o.some(function (e) {
            return l()(r, e);
          }) ? p.a.incrementBidderRequestsCounter(i.code, t) : (E.logWarn(E.unsupportedBidderMessage(i, t)), i.bids = i.bids.filter(function (e) {
            return e.bidder !== t;
          }));
        }), p.a.incrementRequestsCounter(i.code);
      }), r && 0 !== r.length) {
        var u = m.a.createAuction({
            adUnits: r,
            adUnitCodes: i,
            callback: t,
            cbTimeout: c,
            labels: o,
            auctionId: a
          }),
          s = r.length;
        15 < s && E.logInfo("Current auction ".concat(u.getAuctionId(), " contains ").concat(s, " adUnits."), r), i.forEach(function (e) {
          return f.a.setLatestAuctionForAdUnit(e, u.getAuctionId());
        }), u.callBids();
      } else if (E.logMessage("No adUnits configured. No bids requested."), "function" == typeof t) try {
        t();
      } catch (e) {
        E.logError("Error executing bidsBackHandler", null, e);
      }
    }), h.requestBids.before(J, 49), h.addAdUnits = function (e) {
      E.logInfo("Invoking stpd.addAdUnits", arguments), E.isArray(e) ? h.adUnits.push.apply(h.adUnits, e) : "object" === v(e) && h.adUnits.push(e), T.emit(w);
    }, h.onEvent = function (e, t, n) {
      E.logInfo("Invoking stpd.onEvent", arguments), E.isFn(t) ? !n || q[e].call(null, n) ? T.on(e, t, n) : E.logError('The id provided is not valid for event "' + e + '" and no handler was set.') : E.logError('The event handler provided is not a function and was not set on event "' + e + '".');
    }, h.offEvent = function (e, t, n) {
      E.logInfo("Invoking stpd.offEvent", arguments), n && !q[e].call(null, n) || T.off(e, t, n);
    }, h.getEvents = function () {
      return E.logInfo("Invoking stpd.getEvents"), T.getEvents();
    }, h.registerBidAdapter = function (e, t) {
      E.logInfo("Invoking stpd.registerBidAdapter", arguments);
      try {
        O.registerBidAdapter(e(), t);
      } catch (e) {
        E.logError("Error registering bidder adapter : " + e.message);
      }
    }, h.registerAnalyticsAdapter = function (e) {
      E.logInfo("Invoking stpd.registerAnalyticsAdapter", arguments);
      try {
        O.registerAnalyticsAdapter(e);
      } catch (e) {
        E.logError("Error registering analytics adapter : " + e.message);
      }
    }, h.createBid = function (e) {
      return E.logInfo("Invoking stpd.createBid", arguments), Object(g.a)(e);
    };
    var Y = [],
      Q = Object(c.b)("async", function (e) {
        e && !E.isEmpty(e) ? (E.logInfo("Invoking stpd.enableAnalytics for: ", e), O.enableAnalytics(e)) : E.logError("stpd.enableAnalytics should be called with option {}");
      }, "enableAnalyticsCb");
    function $(e) {
      e.forEach(function (e) {
        if (void 0 === e.called) try {
          e.call(), e.called = !0;
        } catch (e) {
          E.logError("Error processing command :", "prebid.js", e);
        }
      });
    }
    h.enableAnalytics = function (e) {
      Y.push(Q.bind(this, e));
    }, h.aliasBidder = function (e, t, n) {
      E.logInfo("Invoking stpd.aliasBidder", arguments), e && t ? O.aliasBidAdapter(e, t, n) : E.logError("bidderCode and alias must be passed as arguments", "stpd.aliasBidder");
    }, h.getAllWinningBids = function () {
      return m.a.getAllWinningBids();
    }, h.getAllPrebidWinningBids = function () {
      return m.a.getBidsReceived().filter(function (e) {
        return e.status === A.BID_STATUS.BID_TARGETING_SET;
      });
    }, h.getHighestCpmBids = function (e) {
      return f.a.getWinningBids(e);
    }, h.markWinningBidAsUsed = function (t) {
      var e = [];
      t.adUnitCode && t.adId ? e = m.a.getBidsReceived().filter(function (e) {
        return e.adId === t.adId && e.adUnitCode === t.adUnitCode;
      }) : t.adUnitCode ? e = f.a.getWinningBids(t.adUnitCode) : t.adId ? e = m.a.getBidsReceived().filter(function (e) {
        return e.adId === t.adId;
      }) : E.logWarn("Improper use of markWinningBidAsUsed. It needs an adUnitCode or an adId to function."), 0 < e.length && (e[0].status = A.BID_STATUS.RENDERED);
    }, h.getConfig = d.b.getConfig, h.setConfig = d.b.setConfig, h.setBidderConfig = d.b.setBidderConfig, h.que.push(function () {
      return Object(o.a)();
    }), h.cmd.push = function (e) {
      if ("function" == typeof e) try {
        e.call();
      } catch (e) {
        E.logError("Error processing command :", e.message, e.stack);
      } else E.logError("Commands written into stpd.cmd.push must be wrapped in a function");
    }, h.que.push = h.cmd.push, h.processQueue = function () {
      c.b.ready(), $(h.que), $(h.cmd);
    }, t.default = h;
  },
  7: function (e, t, n) {
    "use strict";

    n.d(t, "c", function () {
      return l;
    }), n.d(t, "d", function () {
      return p;
    }), t.a = function (e) {
      return o({
        moduleName: e,
        moduleType: "core"
      });
    }, t.b = function (e, t) {
      return o({
        gvlid: e,
        moduleName: t
      });
    };
    var r = n(13),
      u = n(0),
      i = n(12),
      d = n.n(i),
      f = ["core", "prebid-module"],
      l = [];
    function o(e) {
      var t = 0 < arguments.length && void 0 !== e ? e : {},
        i = t.gvlid,
        o = t.moduleName,
        a = t.moduleType;
      function s(n) {
        if (d()(f, a)) {
          return n({
            valid: !0
          });
        }
        var r;
        return p(i, o, {
          hasEnforcementHook: !1
        }, function (e) {
          var t;
          r = e && e.hasEnforcementHook ? n(e) : (t = {
            hasEnforcementHook: !1,
            valid: u.hasDeviceAccess()
          }, n(t));
        }), r;
      }
      var c = function (t) {
        function n(e) {
          if (e && e.valid) try {
            return !!window.localStorage;
          } catch (e) {
            u.logError("Local storage api disabled");
          }
          return !1;
        }
        if (!t || "function" != typeof t) return s(n);
        l.push(function () {
          var e = s(n);
          t(e);
        });
      };
      return {
        setCookie: function (i, o, a, c, u, t) {
          function n(e) {
            var t, n, r;
            e && e.valid && (t = u && "" !== u ? " ;domain=".concat(encodeURIComponent(u)) : "", n = a && "" !== a ? " ;expires=".concat(a) : "", r = null != c && "none" == c.toLowerCase() ? "; Secure" : "", document.cookie = "".concat(i, "=").concat(encodeURIComponent(o)).concat(n, "; path=/").concat(t).concat(c ? "; SameSite=".concat(c) : "").concat(r));
          }
          if (!t || "function" != typeof t) return s(n);
          l.push(function () {
            var e = s(n);
            t(e);
          });
        },
        getCookie: function (n, t) {
          function r(e) {
            if (e && e.valid) {
              var t = window.document.cookie.match("(^|;)\\s*" + n + "\\s*=\\s*([^;]*)\\s*(;|$)");
              return t ? decodeURIComponent(t[2]) : null;
            }
            return null;
          }
          if (!t || "function" != typeof t) return s(r);
          l.push(function () {
            var e = s(r);
            t(e);
          });
        },
        localStorageIsEnabled: function (t) {
          function n(e) {
            if (e && e.valid) try {
              return localStorage.setItem("prebid.cookieTest", "1"), "1" === localStorage.getItem("prebid.cookieTest");
            } catch (e) {}
            return !1;
          }
          if (!t || "function" != typeof t) return s(n);
          l.push(function () {
            var e = s(n);
            t(e);
          });
        },
        cookiesAreEnabled: function (t) {
          function n(e) {
            return !(!e || !e.valid) && (!!u.checkCookieSupport() || (window.document.cookie = "prebid.cookieTest", -1 !== window.document.cookie.indexOf("prebid.cookieTest")));
          }
          if (!t || "function" != typeof t) return s(n);
          l.push(function () {
            var e = s(n);
            t(e);
          });
        },
        setDataInLocalStorage: function (t, n, r) {
          function i(e) {
            e && e.valid && c() && window.localStorage.setItem(t, n);
          }
          if (!r || "function" != typeof r) return s(i);
          l.push(function () {
            var e = s(i);
            r(e);
          });
        },
        getDataFromLocalStorage: function (t, n) {
          function r(e) {
            return e && e.valid && c() ? window.localStorage.getItem(t) : null;
          }
          if (!n || "function" != typeof n) return s(r);
          l.push(function () {
            var e = s(r);
            n(e);
          });
        },
        removeDataFromLocalStorage: function (t, n) {
          function r(e) {
            e && e.valid && c() && window.localStorage.removeItem(t);
          }
          if (!n || "function" != typeof n) return s(r);
          l.push(function () {
            var e = s(r);
            n(e);
          });
        },
        hasLocalStorage: c,
        findSimilarCookies: function (o, t) {
          function n(e) {
            if (e && e.valid) {
              var t = [];
              if (u.hasDeviceAccess()) for (var n = document.cookie.split(";"); n.length;) {
                var r = n.pop(),
                  i = (i = r.indexOf("=")) < 0 ? r.length : i;
                0 <= decodeURIComponent(r.slice(0, i).replace(/^\s+/, "")).indexOf(o) && t.push(decodeURIComponent(r.slice(i + 1)));
              }
              return t;
            }
          }
          if (!t || "function" != typeof t) return s(n);
          l.push(function () {
            var e = s(n);
            t(e);
          });
        }
      };
    }
    var p = Object(r.b)("async", function (e, t, n, r) {
      r(n);
    }, "validateStorageEnforcement");
  },
  70: function (e, t, n) {
    "use strict";

    t.a = function (t, n) {
      o.adServers = o.adServers || {}, o.adServers[t] = o.adServers[t] || {}, Object.keys(n).forEach(function (e) {
        o.adServers[t][e] ? Object(i.logWarn)("Attempting to add an already registered function property ".concat(e, " for AdServer ").concat(t, ".")) : o.adServers[t][e] = n[e];
      });
    };
    var r = n(20),
      i = n(0),
      o = Object(r.a)();
  },
  71: function (e, t, n) {
    var r = n(31),
      i = n(48),
      o = "".split;
    e.exports = r(function () {
      return !Object("z").propertyIsEnumerable(0);
    }) ? function (e) {
      return "String" == i(e) ? o.call(e, "") : Object(e);
    } : Object;
  },
  72: function (e, t, n) {
    var r = n(30),
      i = n(31),
      o = n(73);
    e.exports = !r && !i(function () {
      return 7 != Object.defineProperty(o("div"), "a", {
        get: function () {
          return 7;
        }
      }).a;
    });
  },
  73: function (e, t, n) {
    var r = n(26),
      i = n(27),
      o = r.document,
      a = i(o) && i(o.createElement);
    e.exports = function (e) {
      return a ? o.createElement(e) : {};
    };
  },
  74: function (e, t, n) {
    var r = n(16),
      i = n(75);
    (e.exports = function (e, t) {
      return i[e] || (i[e] = void 0 !== t ? t : {});
    })("versions", []).push({
      version: "3.6.4",
      mode: r ? "pure" : "global",
      copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
    });
  },
  75: function (e, t, n) {
    var r = n(26),
      i = n(104),
      o = "__core-js_shared__",
      a = r[o] || i(o, {});
    e.exports = a;
  },
  76: function (e, t, n) {
    var r = n(31);
    e.exports = !!Object.getOwnPropertySymbols && !r(function () {
      return !String(Symbol());
    });
  },
  77: function (e, t, n) {
    function r(c) {
      return function (e, t, n) {
        var r,
          i = u(e),
          o = s(i.length),
          a = d(n, o);
        if (c && t != t) {
          for (; a < o;) if ((r = i[a++]) != r) return !0;
        } else for (; a < o; a++) if ((c || a in i) && i[a] === t) return c || a || 0;
        return !c && -1;
      };
    }
    var u = n(47),
      s = n(50),
      d = n(108);
    e.exports = {
      includes: r(!0),
      indexOf: r(!1)
    };
  },
  78: function (e, t, n) {
    var r = n(109);
    n(132), n(134), n(136), n(138), n(140), n(141), n(142), n(143), n(144), n(145), n(146), n(147), n(148), n(149), n(150), n(151), n(152), n(153), e.exports = r;
  },
  79: function (e, t, n) {
    function r(e) {
      c(e, d, {
        value: {
          objectID: "O" + ++f,
          weakData: {}
        }
      });
    }
    var i = n(53),
      o = n(27),
      a = n(28),
      c = n(33).f,
      u = n(59),
      s = n(112),
      d = u("meta"),
      f = 0,
      l = Object.isExtensible || function () {
        return !0;
      },
      p = e.exports = {
        REQUIRED: !1,
        fastKey: function (e, t) {
          if (!o(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
          if (!a(e, d)) {
            if (!l(e)) return "F";
            if (!t) return "E";
            r(e);
          }
          return e[d].objectID;
        },
        getWeakData: function (e, t) {
          if (!a(e, d)) {
            if (!l(e)) return !0;
            if (!t) return !1;
            r(e);
          }
          return e[d].weakData;
        },
        onFreeze: function (e) {
          return s && p.REQUIRED && l(e) && !a(e, d) && r(e), e;
        }
      };
    i[d] = !0;
  },
  8: function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), n.d(t, "gdprDataHandler", function () {
      return R;
    }), n.d(t, "uspDataHandler", function () {
      return k;
    }), t.setS2STestingModule = function (e) {
      I = e;
    };
    var S = n(0),
      p = n(92),
      g = n(37),
      l = n(1),
      h = n(4),
      A = n(3),
      r = n(13),
      i = n(12),
      E = n.n(i),
      o = n(10),
      O = n.n(o),
      b = n(67),
      T = n(22);
    function m(e, t) {
      return function (e) {
        if (Array.isArray(e)) return e;
      }(e) || function (e, t) {
        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
        var n = [],
          r = !0,
          i = !1,
          o = void 0;
        try {
          for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
        } catch (e) {
          i = !0, o = e;
        } finally {
          try {
            r || null == c.return || c.return();
          } finally {
            if (i) throw o;
          }
        }
        return n;
      }(e, t) || function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return a(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === n && e.constructor && (n = e.constructor.name);
        if ("Map" === n || "Set" === n) return Array.from(e);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t);
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function a(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    function v() {
      return (v = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }).apply(this, arguments);
    }
    var I,
      C = n(0),
      w = n(5),
      j = n(9),
      y = {},
      _ = y.bidderRegistry = {},
      B = y.aliasRegistry = {},
      U = {};
    A.b.getConfig("s2sConfig", function (e) {
      U = e.s2sConfig;
    });
    var c = {};
    var x = Object(r.b)("sync", function (e) {
      var i = e.bidderCode,
        s = e.auctionId,
        d = e.bidderRequestId,
        t = e.adUnits,
        f = e.labels,
        l = e.src;
      return t.reduce(function (e, c) {
        var t = Object(p.b)(Object(p.a)(c, f), c.mediaTypes, c.sizes),
          n = t.active,
          u = t.mediaTypes,
          r = t.filterResults;
        return n ? r && C.logInfo('Size mapping filtered adUnit "'.concat(c.code, '" banner sizes from '), r.before, "to ", r.after) : C.logInfo('Size mapping disabled adUnit "'.concat(c.code, '"')), n && e.push(c.bids.filter(function (e) {
          return e.bidder === i;
        }).reduce(function (e, t) {
          var n = c.nativeParams || C.deepAccess(c, "mediaTypes.native");
          n && (t = v({}, t, {
            nativeParams: Object(g.g)(n)
          })), t = v({}, t, Object(S.getDefinedParams)(c, ["fpd", "mediaType", "renderer", "storedAuctionResponse"]));
          var r = Object(p.b)(Object(p.a)(t, f), u),
            i = r.active,
            o = r.mediaTypes,
            a = r.filterResults;
          return i ? a && C.logInfo('Size mapping filtered adUnit "'.concat(c.code, '" bidder "').concat(t.bidder, '" banner sizes from '), a.before, "to ", a.after) : C.logInfo('Size mapping deactivated adUnit "'.concat(c.code, '" bidder "').concat(t.bidder, '"')), C.isValidMediaTypes(o) ? t = v({}, t, {
            mediaTypes: o
          }) : C.logError("mediaTypes is not correctly configured for adunit ".concat(c.code)), i && e.push(v({}, t, {
            adUnitCode: c.code,
            transactionId: c.transactionId,
            sizes: C.deepAccess(o, "banner.sizes") || C.deepAccess(o, "video.playerSize") || [],
            bidId: t.bid_id || C.getUniqueIdentifierStr(),
            bidderRequestId: d,
            auctionId: s,
            src: l,
            bidRequestsCount: b.a.getRequestsCounter(c.code),
            bidderRequestsCount: b.a.getBidderRequestsCounter(c.code, t.bidder),
            bidderWinsCount: b.a.getBidderWinsCounter(c.code, t.bidder)
          })), e;
        }, [])), e;
      }, []).reduce(S.flatten, []).filter(function (e) {
        return "" !== e;
      });
    }, "getBids");
    var R = {
        consentData: null,
        setConsentData: function (e) {
          R.consentData = e;
        },
        getConsentData: function () {
          return R.consentData;
        }
      },
      k = {
        consentData: null,
        setConsentData: function (e) {
          k.consentData = e;
        },
        getConsentData: function () {
          return k.consentData;
        }
      };
    function D() {
      return U && U.enabled && U.testing && I;
    }
    function u(t, n, e) {
      try {
        var r = _[t].getSpec();
        r && r[n] && "function" == typeof r[n] && (C.logInfo("Invoking ".concat(t, ".").concat(n)), A.b.runWithBidder(t, S.bind.call(r[n], r, e)));
      } catch (e) {
        C.logWarn("Error calling ".concat(n, " of ").concat(t));
      }
    }
    y.makeBidRequests = Object(r.b)("sync", function (e, i, o, a, c) {
      j.emit(w.EVENTS.BEFORE_REQUEST_BIDS, e);
      var u = [],
        t = Object(S.getBidderCodes)(e);
      A.b.getConfig("bidderSequence") === A.a && (t = Object(S.shuffle)(t));
      var n,
        r,
        s,
        d,
        f,
        l,
        p,
        g = Object(T.a)(),
        b = t,
        v = [];
      U.enabled && (D() && (v = I.getSourceBidderMap(e)[I.CLIENT]), n = U.bidders, b = t.filter(function (e) {
        return !E()(n, e) || E()(v, e);
      }), Boolean(D() && U.testServerOnly) && (p = e, Boolean(O()(p, function (e) {
        return O()(e.bids, function (e) {
          return (e.bidSource || U.bidderControl && U.bidderControl[e.bidder]) && e.finalSource === I.SERVER;
        });
      }))) && (b.length = 0), d = e, f = U.bidders, (l = C.deepClone(d)).forEach(function (e) {
        e.bids = e.bids.filter(function (e) {
          return E()(f, e.bidder) && (!D() || e.finalSource !== I.CLIENT);
        }).map(function (e) {
          return e.bid_id = C.getUniqueIdentifierStr(), e;
        });
      }), r = l = l.filter(function (e) {
        return 0 !== e.bids.length;
      }), s = C.generateUUID(), n.forEach(function (e) {
        var t = C.getUniqueIdentifierStr(),
          n = {
            bidderCode: e,
            auctionId: o,
            bidderRequestId: t,
            tid: s,
            bids: x({
              bidderCode: e,
              auctionId: o,
              bidderRequestId: t,
              adUnits: C.deepClone(r),
              labels: c,
              src: w.S2S.SRC
            }),
            auctionStart: i,
            timeout: U.timeout,
            src: w.S2S.SRC,
            refererInfo: g
          };
        0 !== n.bids.length && u.push(n);
      }), r.forEach(function (e) {
        var t = e.bids.filter(function (t) {
          return O()(u, function (e) {
            return O()(e.bids, function (e) {
              return e.bidId === t.bid_id;
            });
          });
        });
        e.bids = t;
      }), u.forEach(function (e) {
        e.adUnitsS2SCopy = r.filter(function (e) {
          return 0 < e.bids.length;
        });
      }));
      var y,
        h,
        m = (y = e, (h = C.deepClone(y)).forEach(function (e) {
          e.bids = e.bids.filter(function (e) {
            return !D() || e.finalSource !== I.SERVER;
          });
        }), h = h.filter(function (e) {
          return 0 !== e.bids.length;
        }));
      return b.forEach(function (e) {
        var t = C.getUniqueIdentifierStr(),
          n = {
            bidderCode: e,
            auctionId: o,
            bidderRequestId: t,
            bids: x({
              bidderCode: e,
              auctionId: o,
              bidderRequestId: t,
              adUnits: C.deepClone(m),
              labels: c,
              src: "client"
            }),
            auctionStart: i,
            timeout: a,
            refererInfo: g
          },
          r = _[e];
        r || C.logError("Trying to make a request for bidder that does not exist: ".concat(e)), r && n.bids && 0 !== n.bids.length && u.push(n);
      }), R.getConsentData() && u.forEach(function (e) {
        e.gdprConsent = R.getConsentData();
      }), k.getConsentData() && u.forEach(function (e) {
        e.uspConsent = k.getConsentData();
      }), u;
    }, "makeBidRequests"), y.callBids = function (e, t, i, o, a, c, u) {
      var n, r, s, d, f, l, p, g, b, v, y;
      t.length ? (r = (n = m(t.reduce(function (e, t) {
        return e[Number(void 0 !== t.src && t.src === w.S2S.SRC)].push(t), e;
      }, [[], []]), 2))[0], (s = n[1]).length && (d = Object(h.b)(c, a ? {
        request: a.request.bind(null, "s2s"),
        done: a.done
      } : void 0), f = U.bidders, l = _[U.adapter], p = s[0].tid, g = s[0].adUnitsS2SCopy, l ? (b = {
        tid: p,
        ad_units: g
      }).ad_units.length && (v = s.map(function (e) {
        return e.start = Object(S.timestamp)(), o.bind(e);
      }), y = b.ad_units.reduce(function (e, t) {
        return e.concat((t.bids || []).reduce(function (e, t) {
          return e.concat(t.bidder);
        }, []));
      }, []), C.logMessage("CALLING S2S HEADER BIDDERS ==== ".concat(f.filter(function (e) {
        return E()(y, e);
      }).join(","))), s.forEach(function (e) {
        j.emit(w.EVENTS.BID_REQUESTED, e);
      }), l.callBids(b, s, function (e, t) {
        var n = Object(S.getBidderRequest)(s, t.bidderCode, e);
        n && i.call(n, e, t);
      }, function () {
        return v.forEach(function (e) {
          return e();
        });
      }, d)) : C.logError("missing " + U.adapter)), r.forEach(function (t) {
        t.start = Object(S.timestamp)();
        var e = _[t.bidderCode];
        C.logMessage("CALLING BIDDER ======= ".concat(t.bidderCode)), j.emit(w.EVENTS.BID_REQUESTED, t);
        var n = Object(h.b)(c, a ? {
            request: a.request.bind(null, t.bidderCode),
            done: a.done
          } : void 0),
          r = o.bind(t);
        try {
          A.b.runWithBidder(t.bidderCode, S.bind.call(e.callBids, e, t, i.bind(t), r, n, u, A.b.callbackWithBidder(t.bidderCode)));
        } catch (e) {
          C.logError("".concat(t.bidderCode, " Bid Adapter emitted an uncaught error when parsing their bidRequest"), {
            e: e,
            bidRequest: t
          }), r();
        }
      })) : C.logWarn("callBids executed with no bidRequests.  Were they filtered by labels or sizing?");
    }, y.videoAdapters = [], y.registerBidAdapter = function (e, t) {
      var n = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).supportedMediaTypes,
        r = void 0 === n ? [] : n;
      e && t ? "function" == typeof e.callBids ? (_[t] = e, E()(r, "video") && y.videoAdapters.push(t), E()(r, "native") && g.e.push(t)) : C.logError("Bidder adaptor error for bidder code: " + t + "bidder must implement a callBids() function") : C.logError("bidAdaptor or bidderCode not specified");
    }, y.aliasBidAdapter = function (t, e, n) {
      var r, i;
      if (void 0 === _[e]) {
        var o = _[t];
        if (void 0 === o) {
          var a = A.b.getConfig("s2sConfig"),
            c = a && a.bidders;
          c && E()(c, e) ? B[e] = t : C.logError('bidderCode "' + t + '" is not an existing bidder.', "adapterManager.aliasBidAdapter");
        } else try {
          var u,
            s,
            d,
            f = (r = t, i = [], E()(y.videoAdapters, r) && i.push("video"), E()(g.e, r) && i.push("native"), i);
          o.constructor.prototype != Object.prototype ? (d = new o.constructor()).setBidderCode(e) : (u = o.getSpec(), s = n && n.gvlid, d = Object(l.newBidder)(v({}, u, {
            code: e,
            gvlid: s
          })), B[e] = t), y.registerBidAdapter(d, e, {
            supportedMediaTypes: f
          });
        } catch (e) {
          C.logError(t + " bidder does not currently support aliasing.", "adapterManager.aliasBidAdapter");
        }
      } else C.logMessage('alias name "' + e + '" has been already specified.');
    }, y.registerAnalyticsAdapter = function (e) {
      var t = e.adapter,
        n = e.code,
        r = e.gvlid;
      t && n ? "function" == typeof t.enableAnalytics ? (t.code = n, c[n] = {
        adapter: t,
        gvlid: r
      }) : C.logError('Prebid Error: Analytics adaptor error for analytics "'.concat(n, '"\n        analytics adapter must implement an enableAnalytics() function')) : C.logError("Prebid Error: analyticsAdapter or analyticsCode not specified");
    }, y.enableAnalytics = function (e) {
      C.isArray(e) || (e = [e]), C._each(e, function (e) {
        var t = c[e.provider].adapter;
        t ? t.enableAnalytics(e) : C.logError("Prebid Error: no analytics adapter found in registry for\n        ".concat(e.provider, "."));
      });
    }, y.getBidAdapter = function (e) {
      return _[e];
    }, y.getAnalyticsAdapter = function (e) {
      return c[e];
    }, y.callTimedOutBidders = function (t, n, r) {
      n = n.map(function (e) {
        return e.params = C.getUserConfiguredParams(t, e.adUnitCode, e.bidder), e.timeout = r, e;
      }), n = C.groupBy(n, "bidder"), Object.keys(n).forEach(function (e) {
        u(e, "onTimeout", n[e]);
      });
    }, y.callBidWonBidder = function (e, t, n) {
      t.params = C.getUserConfiguredParams(n, t.adUnitCode, t.bidder), b.a.incrementBidderWinsCounter(t.adUnitCode, t.bidder), u(e, "onBidWon", t);
    }, y.callSetTargetingBidder = function (e, t) {
      u(e, "onSetTargeting", t);
    }, t.default = y;
  },
  80: function (e, t, n) {
    var r = n(21),
      i = n(38),
      o = r("iterator"),
      a = Array.prototype;
    e.exports = function (e) {
      return void 0 !== e && (i.Array === e || a[o] === e);
    };
  },
  81: function (e, t, n) {
    var o = n(15);
    e.exports = function (t, e, n, r) {
      try {
        return r ? e(o(n)[0], n[1]) : e(n);
      } catch (e) {
        var i = t.return;
        throw void 0 !== i && o(i.call(t)), e;
      }
    };
  },
  82: function (e, t) {
    e.exports = function (e, t, n) {
      if (!(e instanceof t)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
      return e;
    };
  },
  83: function (e, t, n) {
    function r() {}
    function i(e) {
      return "<script>" + e + "</" + g + ">";
    }
    var o,
      a = n(15),
      c = n(117),
      u = n(84),
      s = n(53),
      d = n(120),
      f = n(73),
      l = n(65),
      p = "prototype",
      g = "script",
      b = l("IE_PROTO"),
      v = function () {
        try {
          o = document.domain && new ActiveXObject("htmlfile");
        } catch (e) {}
        var e, t;
        v = o ? function (e) {
          e.write(i("")), e.close();
          var t = e.parentWindow.Object;
          return e = null, t;
        }(o) : ((t = f("iframe")).style.display = "none", d.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write(i("document.F=Object")), e.close(), e.F);
        for (var n = u.length; n--;) delete v[p][u[n]];
        return v();
      };
    s[b] = !0, e.exports = Object.create || function (e, t) {
      var n;
      return null !== e ? (r[p] = a(e), n = new r(), r[p] = null, n[b] = e) : n = v(), void 0 === t ? n : c(n, t);
    };
  },
  84: function (e, t) {
    e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
  },
  85: function (e, t, n) {
    var i = n(32);
    e.exports = function (e, t, n, r) {
      r && r.enumerable ? e[t] = n : i(e, t, n);
    };
  },
  86: function (e, t, n) {
    "use strict";

    var r,
      i,
      o,
      a = n(87),
      c = n(32),
      u = n(28),
      s = n(21),
      d = n(16),
      f = s("iterator"),
      l = !1;
    [].keys && ("next" in (o = [].keys()) ? (i = a(a(o))) !== Object.prototype && (r = i) : l = !0), null == r && (r = {}), d || u(r, f) || c(r, f, function () {
      return this;
    }), e.exports = {
      IteratorPrototype: r,
      BUGGY_SAFARI_ITERATORS: l
    };
  },
  87: function (e, t, n) {
    var r = n(28),
      i = n(57),
      o = n(65),
      a = n(123),
      c = o("IE_PROTO"),
      u = Object.prototype;
    e.exports = a ? Object.getPrototypeOf : function (e) {
      return e = i(e), r(e, c) ? e[c] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? u : null;
    };
  },
  88: function (e, t, n) {
    "use strict";

    var i = n(128).charAt,
      r = n(54),
      o = n(66),
      a = "String Iterator",
      c = r.set,
      u = r.getterFor(a);
    o(String, "String", function (e) {
      c(this, {
        type: a,
        string: String(e),
        index: 0
      });
    }, function () {
      var e,
        t = u(this),
        n = t.string,
        r = t.index;
      return r >= n.length ? {
        value: void 0,
        done: !0
      } : (e = i(n, r), t.index += e.length, {
        value: e,
        done: !1
      });
    });
  },
  89: function (e, t, n) {
    var r = n(15),
      i = n(61);
    e.exports = function (e) {
      var t = i(e);
      if ("function" != typeof t) throw TypeError(String(e) + " is not iterable");
      return r(t.call(e));
    };
  },
  9: function (e, t, n) {
    function r() {
      return (r = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }).apply(this, arguments);
    }
    var c,
      i,
      u = n(0),
      o = n(5),
      a = Array.prototype.slice,
      s = Array.prototype.push,
      d = u._map(o.EVENTS, function (e) {
        return e;
      }),
      f = o.EVENT_ID_PATHS,
      l = [];
    e.exports = (c = {}, (i = {}).on = function (e, t, n) {
      var r, i;
      i = e, u.contains(d, i) ? (r = c[e] || {
        que: []
      }, n ? (r[n] = r[n] || {
        que: []
      }, r[n].que.push(t)) : r.que.push(t), c[e] = r) : u.logError("Wrong event name : " + e + " Valid event names :" + d);
    }, i.emit = function (e) {
      !function (e, t) {
        u.logMessage("Emitting event for: " + e);
        var n = t[0] || {},
          r = n[f[e]],
          i = c[e] || {
            que: []
          },
          o = u._map(i, function (e, t) {
            return t;
          }),
          a = [];
        l.push({
          eventType: e,
          args: n,
          id: r,
          elapsedTime: u.getPerformanceNow()
        }), r && u.contains(o, r) && s.apply(a, i[r].que), s.apply(a, i.que), u._each(a, function (e) {
          if (e) try {
            e.apply(null, t);
          } catch (e) {
            u.logError("Error executing handler:", "events.js", e);
          }
        });
      }(e, a.call(arguments, 1));
    }, i.off = function (e, n, r) {
      var i = c[e];
      u.isEmpty(i) || u.isEmpty(i.que) && u.isEmpty(i[r]) || r && (u.isEmpty(i[r]) || u.isEmpty(i[r].que)) || (r ? u._each(i[r].que, function (e) {
        var t = i[r].que;
        e === n && t.splice(t.indexOf(e), 1);
      }) : u._each(i.que, function (e) {
        var t = i.que;
        e === n && t.splice(t.indexOf(e), 1);
      }), c[e] = i);
    }, i.get = function () {
      return c;
    }, i.getEvents = function () {
      var n = [];
      return u._each(l, function (e) {
        var t = r({}, e);
        n.push(t);
      }), n;
    }, i);
  },
  90: function (e, t, n) {
    var r = n(154);
    e.exports = r;
  },
  91: function (e, t, n) {
    "use strict";

    t.a = function (e) {
      var t = e;
      return {
        callBids: function () {},
        setBidderCode: function (e) {
          t = e;
        },
        getBidderCode: function () {
          return t;
        }
      };
    };
  },
  92: function (e, t, n) {
    "use strict";

    t.a = function (e, t) {
      if (e.labelAll) return {
        labelAll: !0,
        labels: e.labelAll,
        activeLabels: t
      };
      return {
        labelAll: !1,
        labels: e.labelAny,
        activeLabels: t
      };
    }, t.c = function (e) {
      var t = v(1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : b);
      return !t.shouldFilter || !!t.sizesSupported[e];
    }, t.b = function () {
      var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
        t = e.labels,
        n = void 0 === t ? [] : t,
        r = e.labelAll,
        i = void 0 !== r && r,
        o = e.activeLabels,
        a = void 0 === o ? [] : o,
        c = 1 < arguments.length ? arguments[1] : void 0,
        u = 2 < arguments.length ? arguments[2] : void 0,
        s = v(3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : b);
      c = Object(p.isPlainObject)(c) ? Object(p.deepClone)(c) : u ? {
        banner: {
          sizes: u
        }
      } : {};
      var d = Object(p.deepAccess)(c, "banner.sizes");
      s.shouldFilter && d && (c.banner.sizes = d.filter(function (e) {
        return s.sizesSupported[e];
      }));
      var f = Object.keys(c),
        l = {
          active: f.every(function (e) {
            return "banner" !== e;
          }) || f.some(function (e) {
            return "banner" === e;
          }) && 0 < Object(p.deepAccess)(c, "banner.sizes.length") && (0 === n.length || !i && (n.some(function (e) {
            return s.labels[e];
          }) || n.some(function (e) {
            return g()(a, e);
          })) || i && n.reduce(function (e, t) {
            return e ? s.labels[t] || g()(a, t) : e;
          }, !0)),
          mediaTypes: c
        };
      d && d.length !== c.banner.sizes.length && (l.filterResults = {
        before: d,
        after: c.banner.sizes
      });
      return l;
    };
    var r = n(3),
      p = n(0),
      i = n(12),
      g = n.n(i);
    function o(e) {
      return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      })(e);
    }
    var b = [];
    function v(e) {
      return e.reduce(function (n, r) {
        if ("object" === o(r) && "string" == typeof r.mediaQuery) {
          var t = !1;
          if ("" === r.mediaQuery) t = !0;else try {
            t = Object(p.getWindowTop)().matchMedia(r.mediaQuery).matches;
          } catch (e) {
            Object(p.logWarn)("Unfriendly iFrame blocks sizeConfig from being correctly evaluated"), t = matchMedia(r.mediaQuery).matches;
          }
          t && (Array.isArray(r.sizesSupported) && (n.shouldFilter = !0), ["labels", "sizesSupported"].forEach(function (t) {
            return (r[t] || []).forEach(function (e) {
              return n[t][e] = !0;
            });
          }));
        } else Object(p.logWarn)('sizeConfig rule missing required property "mediaQuery"');
        return n;
      }, {
        labels: {},
        sizesSupported: {},
        shouldFilter: !1
      });
    }
    r.b.getConfig("sizeConfig", function (e) {
      return t = e.sizeConfig, void (b = t);
      var t;
    });
  },
  927: function (e, t, n) {
    e.exports = n(69);
  },
  93: function (e, t, n) {
    var r = n(221);
    e.exports = r;
  },
  94: function (e, t, n) {
    "use strict";

    t.b = function (e, t, n) {
      var r = {
        puts: e.map(c, n)
      };
      Object(i.a)(o.b.getConfig("cache.url"), function (n) {
        return {
          success: function (e) {
            var t;
            try {
              t = JSON.parse(e).responses;
            } catch (e) {
              return void n(e, []);
            }
            t ? n(null, t) : n(new Error("The cache server didn't respond with a responses property."), []);
          },
          error: function (e, t) {
            n(new Error("Error storing video ad in the cache: ".concat(e, ": ").concat(JSON.stringify(t))), []);
          }
        };
      }(t), JSON.stringify(r), {
        contentType: "text/plain",
        withCredentials: !0
      });
    }, t.a = function (e) {
      return "".concat(o.b.getConfig("cache.url"), "?uuid=").concat(e);
    };
    var i = n(4),
      o = n(3),
      a = n(0);
    function c(e) {
      var t,
        n,
        r,
        i = {
          type: "xml",
          value: e.vastXml ? e.vastXml : (t = e.vastUrl, n = e.vastImpUrl, r = n ? "<![CDATA[".concat(n, "]]>") : "", '<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA['.concat(t, "]]></VASTAdTagURI>\n        <Impression>").concat(r, "</Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>")),
          ttlseconds: Number(e.ttl)
        };
      return o.b.getConfig("cache.vasttrack") && (i.bidder = e.bidder, i.bidid = e.requestId, a.isPlainObject(this) && this.hasOwnProperty("auctionStart") && (i.timestamp = this.auctionStart)), "string" == typeof e.customCacheKey && "" !== e.customCacheKey && (i.key = e.customCacheKey), i;
    }
  },
  97: function (e, t, n) {
    n(98);
    var r = n(52);
    e.exports = r("Array", "find");
  },
  98: function (e, t, n) {
    "use strict";

    var r = n(14),
      i = n(56).find,
      o = n(51),
      a = n(60),
      c = "find",
      u = !0,
      s = a(c);
    c in [] && Array(1).find(function () {
      u = !1;
    }), r({
      target: "Array",
      proto: !0,
      forced: u || !s
    }, {
      find: function (e, t) {
        return i(this, e, 1 < arguments.length ? t : void 0);
      }
    }), o(c);
  },
  99: function (e, t, n) {
    var r = n(30),
      i = n(100),
      o = n(46),
      a = n(47),
      c = n(55),
      u = n(28),
      s = n(72),
      d = Object.getOwnPropertyDescriptor;
    t.f = r ? d : function (e, t) {
      if (e = a(e), t = c(t, !0), s) try {
        return d(e, t);
      } catch (e) {}
      if (u(e, t)) return o(!i.f.call(e, t), e[t]);
    };
  }
});
stpdChunk([370], {
  163: function (e, t, r) {
    e.exports = r(164);
  },
  164: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), r.d(t, "spec", function () {
      return I;
    });
    var n = r(1),
      p = r(3),
      u = r(0),
      l = r(2);
    function f() {
      return (f = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }).apply(this, arguments);
    }
    function a(t, e) {
      var r,
        n = Object.keys(t);
      return Object.getOwnPropertySymbols && (r = Object.getOwnPropertySymbols(t), e && (r = r.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })), n.push.apply(n, r)), n;
    }
    function m(i) {
      for (var e = 1; e < arguments.length; e++) {
        var o = null != arguments[e] ? arguments[e] : {};
        e % 2 ? a(Object(o), !0).forEach(function (e) {
          var t, r, n;
          t = i, n = o[r = e], r in t ? Object.defineProperty(t, r, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : t[r] = n;
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o)) : a(Object(o)).forEach(function (e) {
          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e));
        });
      }
      return i;
    }
    var i = "33across",
      c = "https://ssc.33across.com/api/v1/hb",
      b = "https://ssc-cms.33across.com/ps/?m=xch&rt=html&ru=deb",
      o = "USD",
      s = /^[a-zA-Z0-9_-]{22}$/,
      h = {
        SIAB: "siab",
        INVIEW: "inview",
        INSTREAM: "instream"
      },
      g = ["mimes", "minduration", "maxduration", "placement", "protocols", "startdelay", "skip", "skipafter", "minbitrate", "maxbitrate", "delivery", "playbackmethod", "api", "linearity"],
      d = {
        uniqueSiteIds: []
      },
      y = "nm";
    function v(e) {
      return {
        w: parseInt(e[0], 10),
        h: parseInt(e[1], 10)
      };
    }
    function A(e) {
      var t = e.params,
        r = e.mediaTypes,
        n = r.banner,
        i = r.video;
      return i && !n && "instream" === i.context ? h.INSTREAM : t.productId === h.INVIEW ? t.productId : h.SIAB;
    }
    function w(e, t, r) {
      var n = e.getFloor({
        currency: o,
        mediaType: r,
        size: [t.w, t.h]
      });
      if (!isNaN(n.floor) && n.currency === o) return n.floor;
    }
    var I = {
      NON_MEASURABLE: y,
      code: i,
      supportedMediaTypes: [l.b, l.d],
      isBidRequestValid: function (e) {
        return (n = e).bidder === i && void 0 !== n.params && !!function (e) {
          return null !== (u.deepAccess(e, "params.siteId", "") || "").trim().match(s);
        }(n) && (t = e, void 0 === (r = u.deepAccess(t, "mediaTypes.banner")) || !!Array.isArray(r.sizes)) && function (e) {
          var t = u.deepAccess(e, "mediaTypes.video"),
            r = u.deepAccess(e, "params.video", {});
          if (void 0 === t) return !0;
          if (!Array.isArray(t.playerSize)) return !1;
          if (!t.context) return !1;
          var n = m(m({}, t), r);
          return !(!Array.isArray(n.mimes) || 0 === n.mimes.length) && !(!Array.isArray(n.protocols) || 0 === n.protocols.length) && (void 0 === n.placement || "number" == typeof n.placement) && ("instream" !== t.context || void 0 === n.startdelay || "number" == typeof n.startdelay);
        }(e);
        var t, r, n;
      },
      buildRequests: function (e, t) {
        var r = f({
            consentString: void 0,
            gdprApplies: !1
          }, t && t.gdprConsent),
          n = t && t.uspConsent,
          i = t && t.refererInfo ? t.refererInfo.referer : void 0;
        return d.uniqueSiteIds = e.map(function (e) {
          return e.params.siteId;
        }).filter(u.uniques), e.map(function (e) {
          return function (e) {
            var t = e.bidRequest,
              r = e.gdprConsent,
              n = void 0 === r ? {} : r,
              i = e.uspConsent,
              o = e.pageUrl,
              a = {},
              s = t.params;
            a.imp = [{}], u.deepAccess(t, "mediaTypes.banner") && (a.imp[0].banner = m({}, function (n) {
              var e,
                t = u.deepAccess(n, "mediaTypes.banner", {}),
                r = function (e) {
                  return document.getElementById(e) || document.getElementById(function (e) {
                    if (u.isGptPubadsDefined()) for (var t = googletag.pubads().getSlots(), r = u.isSlotMatchingAdUnitCode(e), n = 0; n < t.length; n++) if (r(t[n])) {
                      var i = t[n].getSlotElementId();
                      return u.logInfo("[33Across Adapter] Map ad unit path to HTML element id: '".concat(e, "' -> ").concat(i)), i;
                    }
                    return u.logWarn("[33Across Adapter] Unable to locate element for ad unit code: '".concat(e, "'")), null;
                  }(e));
                }(n.adUnitCode),
                i = function (e) {
                  return !u.isArray(e) || 2 !== e.length || u.isArray(e[0]) ? e.map(v) : [v(e)];
                }(t.sizes);
              e = "function" == typeof n.getFloor ? i.map(function (e) {
                var t,
                  r = w(n, e, l.b);
                return r && (t = {
                  ext: {
                    ttx: {
                      bidfloors: [r]
                    }
                  }
                }), f({}, e, t);
              }) : i;
              var o = function (e) {
                  return e.reduce(function (e, t) {
                    return t.h * t.w < e.h * e.w ? t : e;
                  });
                }(i),
                a = function (e) {
                  return {
                    ttx: {
                      viewability: {
                        amount: isNaN(e) ? e : Math.round(e)
                      }
                    }
                  };
                }(function (e) {
                  return !function () {
                    try {
                      return u.getWindowSelf() !== u.getWindowTop();
                    } catch (e) {
                      return !0;
                    }
                  }() && null !== e;
                }(r) ? function (e, t) {
                  var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                    n = r.w,
                    i = r.h;
                  return "visible" === t.document.visibilityState ? function (e, t) {
                    var r,
                      n,
                      i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                      o = i.w,
                      a = i.h,
                      s = function (e) {
                        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                          r = t.w,
                          n = t.h,
                          i = e.getBoundingClientRect(),
                          o = i.width,
                          a = i.height,
                          s = i.left,
                          d = i.top,
                          c = i.right,
                          u = i.bottom;
                        (0 === o || 0 === a) && r && n && (c = s + (o = r), u = d + (a = n));
                        return {
                          width: o,
                          height: a,
                          left: s,
                          top: d,
                          right: c,
                          bottom: u
                        };
                      }(e, {
                        w: o,
                        h: a
                      }),
                      d = function (e) {
                        for (var t = {
                            left: e[0].left,
                            right: e[0].right,
                            top: e[0].top,
                            bottom: e[0].bottom
                          }, r = 1; r < e.length; ++r) {
                          if (t.left = Math.max(t.left, e[r].left), t.right = Math.min(t.right, e[r].right), t.left >= t.right) return null;
                          if (t.top = Math.max(t.top, e[r].top), t.bottom = Math.min(t.bottom, e[r].bottom), t.top >= t.bottom) return null;
                        }
                        return t.width = t.right - t.left, t.height = t.bottom - t.top, t;
                      }([{
                        left: 0,
                        top: 0,
                        right: t.innerWidth,
                        bottom: t.innerHeight
                      }, s]);
                    return null === d ? 0 : (r = d.width * d.height, n = s.width * s.height, r / n * 100);
                  }(e, t, {
                    w: n,
                    h: i
                  }) : 0;
                }(r, u.getWindowTop(), o) : y);
              return {
                format: e,
                ext: a
              };
            }(t)));
            u.deepAccess(t, "mediaTypes.video") && (a.imp[0].video = function (e) {
              var t = u.deepAccess(e, "mediaTypes.video", {}),
                r = u.deepAccess(e, "params.video", {}),
                n = m(m({}, t), r),
                i = {},
                o = v(n.playerSize[0]),
                a = o.w,
                s = o.h;
              i.w = a, i.h = s, g.forEach(function (e) {
                n.hasOwnProperty(e) && (i[e] = n[e]);
              });
              var d = A(e);
              i.placement = i.placement || 2, d === h.INSTREAM && (i.startdelay = i.startdelay || 0, i.placement = 1);
              {
                var c;
                "function" != typeof e.getFloor || (c = w(e, {
                  w: i.w,
                  h: i.h
                }, l.d)) && f(i, {
                  ext: {
                    ttx: {
                      bidfloors: [c]
                    }
                  }
                });
              }
              return i;
            }(t));
            a.imp[0].ext = {
              ttx: {
                prod: A(t)
              }
            }, a.site = {
              id: s.siteId
            }, o && (a.site.page = o);
            a.id = t.bidId, a.user = {
              ext: {
                consent: n.consentString
              }
            }, a.regs = {
              ext: {
                gdpr: !0 === n.gdprApplies ? 1 : 0,
                us_privacy: i || null
              }
            }, a.ext = {
              ttx: {
                prebidStartedAt: Date.now(),
                caller: [{
                  name: "prebidjs",
                  version: "4.21.0-pre"
                }]
              }
            }, t.schain && (a.source = {
              ext: {
                schain: t.schain
              }
            });
            1 === s.test && (a.test = 1);
            var d = p.b.getConfig("ttxSettings");
            return {
              method: "POST",
              url: d && d.url || "".concat(c, "?guid=").concat(s.siteId),
              data: JSON.stringify(a),
              options: {
                contentType: "text/plain",
                withCredentials: !0
              }
            };
          }({
            bidRequest: e,
            gdprConsent: r,
            uspConsent: n,
            pageUrl: i
          });
        });
      },
      interpretResponse: function (e, t) {
        var r = [];
        return 0 < e.body.seatbid.length && 0 < e.body.seatbid[0].bid.length && r.push(function (e) {
          var t = {
            requestId: e.id,
            bidderCode: i,
            cpm: e.seatbid[0].bid[0].price,
            width: e.seatbid[0].bid[0].w,
            height: e.seatbid[0].bid[0].h,
            ad: e.seatbid[0].bid[0].adm,
            ttl: e.seatbid[0].bid[0].ttl || 60,
            creativeId: e.seatbid[0].bid[0].crid,
            mediaType: u.deepAccess(e.seatbid[0].bid[0], "ext.ttx.mediaType", l.b),
            currency: e.cur,
            netRevenue: !0
          };
          {
            t.mediaType === l.d && ("xml" === u.deepAccess(e.seatbid[0].bid[0], "ext.ttx.vastType", "xml") ? t.vastXml = t.ad : t.vastUrl = t.ad);
          }
          return t;
        }(e.body)), r;
      },
      getUserSyncs: function (e, t, r, n) {
        var i = e.iframeEnabled ? d.uniqueSiteIds.map(function (e) {
          return function (e) {
            var t = e.siteId,
              r = void 0 === t ? "zzz000000000003zzz" : t,
              n = e.gdprConsent,
              i = void 0 === n ? {} : n,
              o = e.uspConsent,
              a = p.b.getConfig("ttxSettings"),
              s = a && a.syncUrl || b,
              d = i.consentString,
              c = i.gdprApplies,
              u = {
                type: "iframe",
                url: "".concat(s, "&id=").concat(r, "&gdpr_consent=").concat(encodeURIComponent(d), "&us_privacy=").concat(encodeURIComponent(o))
              };
            "boolean" == typeof c && (u.url += "&gdpr=".concat(Number(c)));
            return u;
          }({
            gdprConsent: r,
            uspConsent: n,
            siteId: e
          });
        }) : [];
        return d.uniqueSiteIds = [], i;
      }
    };
    Object(n.registerBidder)(I);
  }
}, [163]);
stpdChunk([0], {
  179: function (t, e, r) {
    t.exports = r(180);
  },
  180: function (t, e, r) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), r.d(e, "BIDDER_CODE", function () {
      return w;
    }), r.d(e, "LOG_PREFIX", function () {
      return E;
    }), r.d(e, "VERSION", function () {
      return A;
    }), r.d(e, "FEATURES_VERSION", function () {
      return D;
    }), r.d(e, "ENDPOINT", function () {
      return I;
    }), r.d(e, "SUPPORTED_MEDIA_TYPES", function () {
      return O;
    }), r.d(e, "ADAGIO_TAG_URL", function () {
      return x;
    }), r.d(e, "ADAGIO_LOCALSTORAGE_KEY", function () {
      return B;
    }), r.d(e, "GVLID", function () {
      return R;
    }), r.d(e, "storage", function () {
      return V;
    }), r.d(e, "RENDERER_URL", function () {
      return P;
    }), r.d(e, "ADAGIO_PUBKEY", function () {
      return N;
    }), r.d(e, "ORTB_VIDEO_PARAMS", function () {
      return M;
    }), e.adagioScriptFromLocalStorageCb = U, e.getAdagioScript = C, r.d(e, "_features", function () {
      return L;
    }), r.d(e, "internal", function () {
      return H;
    }), r.d(e, "spec", function () {
      return F;
    });
    var n = r(10),
      s = r.n(n),
      b = r(0),
      p = r(3),
      i = r(1),
      o = r(40),
      a = r(181),
      u = r.n(a),
      h = r(182),
      c = r.n(h),
      f = r(7),
      l = r(22),
      d = r(19),
      g = r(2),
      m = r(11),
      v = r(25);
    function y(e, t) {
      var r,
        n = Object.keys(e);
      return Object.getOwnPropertySymbols && (r = Object.getOwnPropertySymbols(e), t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r)), n;
    }
    function S(i) {
      for (var t = 1; t < arguments.length; t++) {
        var s = null != arguments[t] ? arguments[t] : {};
        t % 2 ? y(Object(s), !0).forEach(function (t) {
          var e, r, n;
          e = i, n = s[r = t], r in e ? Object.defineProperty(e, r, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[r] = n;
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s)) : y(Object(s)).forEach(function (t) {
          Object.defineProperty(i, t, Object.getOwnPropertyDescriptor(s, t));
        });
      }
      return i;
    }
    var T,
      w = "adagio",
      E = "Adagio:",
      A = "2.6.0",
      D = "1",
      I = "https://mp.4dex.io/prebid",
      O = [g.b, g.d],
      x = "https://script.4dex.io/localstore.js",
      B = "adagioScript",
      R = 617,
      V = Object(f.b)(R, "adagio"),
      P = "https://script.4dex.io/outstream-player.js",
      N = "-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC9el0+OEn6fvEh1RdVHQu4cnT0\njFSzIbGJJyg3cKqvtE6A0iaz9PkIdJIvSSSNrmJv+lRGKPEyRA/VnzJIieL39Ngl\nt0b0lsHN+W4n9kitS/DZ/xnxWK/9vxhv0ZtL1LL/rwR5Mup7rmJbNtDoNBw4TIGj\npV6EP3MTLosuUEpLaQIDAQAB\n-----END PUBLIC KEY-----",
      M = {
        mimes: function (t) {
          return Array.isArray(t) && 0 < t.length && t.every(function (t) {
            return "string" == typeof t;
          });
        },
        minduration: function (t) {
          return b.isInteger(t);
        },
        maxduration: function (t) {
          return b.isInteger(t);
        },
        protocols: function (t) {
          return Array.isArray(t) && t.every(function (t) {
            return -1 !== [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].indexOf(t);
          });
        },
        w: function (t) {
          return b.isInteger(t);
        },
        h: function (t) {
          return b.isInteger(t);
        },
        startdelay: function (t) {
          return b.isInteger(t);
        },
        placement: function (t) {
          return Array.isArray(t) && t.every(function (t) {
            return -1 !== [1, 2, 3, 4, 5].indexOf(t);
          });
        },
        linearity: function (t) {
          return -1 !== [1, 2].indexOf(t);
        },
        skip: function (t) {
          return -1 !== [0, 1].indexOf(t);
        },
        skipmin: function (t) {
          return b.isInteger(t);
        },
        skipafter: function (t) {
          return b.isInteger(t);
        },
        sequence: function (t) {
          return b.isInteger(t);
        },
        battr: function (t) {
          return Array.isArray(t) && t.every(function (t) {
            return -1 !== Array.from({
              length: 17
            }, function (t, e) {
              return e + 1;
            }).indexOf(t);
          });
        },
        maxextended: function (t) {
          return b.isInteger(t);
        },
        minbitrate: function (t) {
          return b.isInteger(t);
        },
        maxbitrate: function (t) {
          return b.isInteger(t);
        },
        boxingallowed: function (t) {
          return -1 !== [0, 1].indexOf(t);
        },
        playbackmethod: function (t) {
          return Array.isArray(t) && t.every(function (t) {
            return -1 !== [1, 2, 3, 4, 5, 6].indexOf(t);
          });
        },
        playbackend: function (t) {
          return -1 !== [1, 2, 3].indexOf(t);
        },
        delivery: function (t) {
          return -1 !== [1, 2, 3].indexOf(t);
        },
        pos: function (t) {
          return -1 !== [0, 1, 2, 3, 4, 5, 6, 7].indexOf(t);
        },
        api: function (t) {
          return Array.isArray(t) && t.every(function (t) {
            return -1 !== [1, 2, 3, 4, 5, 6].indexOf(t);
          });
        }
      };
    function U(t) {
      try {
        if (!t) return void b.logWarn("".concat(E, " script not found."));
        var e,
          r,
          n,
          i,
          s = /^(\/\/ hash: (.+)\n)(.+\n)$/;
        s.test(t) ? (r = (e = t.match(s))[2], n = e[3], (i = new u.a()).setPublicKey(N), i.verify(n, r, c.a) ? (b.logInfo("".concat(E, " start script.")), Function(t)()) : (b.logWarn("".concat(E, " invalid script found.")), V.removeDataFromLocalStorage(B))) : (b.logWarn("".concat(E, " no hash found.")), V.removeDataFromLocalStorage(B));
      } catch (t) {
        b.logError(E, t);
      }
    }
    function C() {
      V.getDataFromLocalStorage(B, function (t) {
        H.adagioScriptFromLocalStorageCb(t);
      }), V.localStorageIsEnabled(function (t) {
        t ? Object(o.a)(x, w) : window.localStorage.removeItem(B);
      });
    }
    function q() {
      try {
        if (b.getWindowTop().location.href) return !0;
      } catch (t) {
        return !1;
      }
    }
    function j() {
      var t = b.getWindowSelf();
      return !(!t.$sf || !t.$sf.ext);
    }
    var L = {
      getPrintNumber: function (t) {
        return H.getOrAddAdagioAdUnit(t).printNumber || 1;
      },
      getPageDimensions: function () {
        if (j() || !q()) return "";
        var t = b.getWindowTop(),
          e = t.document.querySelector("body");
        if (!e) return "";
        var r = t.document.documentElement,
          n = Math.max(e.scrollWidth, e.offsetWidth, r.clientWidth, r.scrollWidth, r.offsetWidth),
          i = Math.max(e.scrollHeight, e.offsetHeight, r.clientHeight, r.scrollHeight, r.offsetHeight);
        return "".concat(n, "x").concat(i);
      },
      getViewPortDimensions: function () {
        if (!j() && !q()) return "";
        var t = {
          w: 0,
          h: 0
        };
        if (j()) {
          var e = b.getWindowSelf();
          if ("function" != typeof e.$sf.ext.geom) return b.logWarn("".concat(E, " cannot use the $sf.ext.geom() safeFrame API method")), "";
          var r = e.$sf.ext.geom().win;
          t.w = Math.round(r.w), t.h = Math.round(r.h);
        } else {
          var n = b.getWindowTop();
          if (n.innerWidth) t.w = n.innerWidth, t.h = n.innerHeight;else {
            var i = n.document;
            if (!i.querySelector("body")) return "";
            t.w = i.querySelector("body").clientWidth, t.h = i.querySelector("body").clientHeight;
          }
        }
        return "".concat(t.w, "x").concat(t.h);
      },
      getDomLoadingDuration: function () {
        var t,
          e = -1,
          r = q() ? b.getWindowTop().performance : b.getWindowSelf().performance;
        return r && r.timing && 0 < r.timing.navigationStart && 0 < (t = r.timing.domLoading - r.timing.navigationStart) && (e = t), e;
      },
      getSlotPosition: function (t) {
        var e = t.adUnitElementId,
          r = t.postBid;
        if (!e) return "";
        if (!j() && !q()) return "";
        var n = {
          x: 0,
          y: 0
        };
        if (j()) {
          var i = b.getWindowSelf();
          if ("function" != typeof i.$sf.ext.geom) return b.logWarn("".concat(E, " cannot use the $sf.ext.geom() safeFrame API method")), "";
          var s = i.$sf.ext.geom().self;
          n.x = Math.round(s.t), n.y = Math.round(s.l);
        } else {
          if (!q()) return "";
          var o,
            a,
            u,
            h = b.getWindowTop(),
            c = h.document;
          if (!(u = !0 === r ? (a = (o = b.getWindowSelf()).document.getElementById(e), H.getElementFromTopWindow(a, o)) : h.document.getElementById(e))) return "";
          var f = u.getBoundingClientRect(),
            l = c.documentElement,
            p = c.body,
            d = c.clientTop || p.clientTop || 0,
            g = c.clientLeft || p.clientLeft || 0,
            m = h.pageYOffset || l.scrollTop || p.scrollTop,
            v = h.pageXOffset || l.scrollLeft || p.scrollLeft,
            y = h.getComputedStyle(u, null).display || "block";
          "none" === y && (u.style = u.style || {}, u.style.display = "block", f = u.getBoundingClientRect(), u.style.display = y), n.x = Math.round(f.left + v - g), n.y = Math.round(f.top + m - d);
        }
        return "".concat(n.x, "x").concat(n.y);
      },
      getTimestampUTC: function () {
        return Math.floor(new Date().getTime() / 1e3) - 60 * new Date().getTimezoneOffset();
      },
      getDevice: function () {
        var t = b.getWindowSelf().navigator.userAgent;
        return /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(t) ? 5 : /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/.test(t) ? 4 : 2;
      },
      getBrowser: function () {
        var t = b.getWindowSelf(),
          e = t.navigator.userAgent,
          r = e.toLowerCase();
        return /Edge\/\d./i.test(e) ? "edge" : 0 < r.indexOf("chrome") ? "chrome" : 0 < r.indexOf("firefox") ? "firefox" : 0 < r.indexOf("safari") ? "safari" : 0 < r.indexOf("opera") ? "opera" : 0 < r.indexOf("msie") || t.MSStream ? "ie" : "unknow";
      },
      getOS: function () {
        var t = b.getWindowSelf().navigator.userAgent.toLowerCase();
        return 0 < t.indexOf("linux") ? "linux" : 0 < t.indexOf("mac") ? "mac" : 0 < t.indexOf("win") ? "windows" : "";
      },
      getUrl: function (t) {
        if (t.reachedTop) return t.referer;
      },
      getUrlFromParams: function (t) {
        var e = t.postBidOptions;
        if (e && e.url) return e.url;
      }
    };
    var H = {
      enqueue: function (t) {
        var e = H.getCurrentWindow();
        e.ADAGIO = e.ADAGIO || {}, e.ADAGIO.queue = e.ADAGIO.queue || [], e.ADAGIO.queue.push(t);
      },
      getOrAddAdagioAdUnit: function (t) {
        var e = H.getCurrentWindow();
        return e.ADAGIO = e.ADAGIO || {}, e.ADAGIO.adUnits[t] ? e.ADAGIO.adUnits[t] : e.ADAGIO.adUnits[t] = {};
      },
      getPageviewId: function () {
        var t = H.getCurrentWindow();
        return t.ADAGIO = t.ADAGIO || {}, t.ADAGIO.pageviewId = t.ADAGIO.pageviewId || b.generateUUID(), t.ADAGIO.pageviewId;
      },
      computePrintNumber: function (t) {
        var e = 1,
          r = H.getCurrentWindow();
        return r.ADAGIO && r.ADAGIO.adUnits && r.ADAGIO.adUnits[t] && r.ADAGIO.adUnits[t].pageviewId === H.getPageviewId() && r.ADAGIO.adUnits[t].printNumber && (e = parseInt(r.ADAGIO.adUnits[t].printNumber, 10) + 1), e;
      },
      getDevice: function () {
        var t = navigator.language ? "language" : "userLanguage";
        return {
          userAgent: navigator.userAgent,
          language: navigator[t],
          deviceType: L.getDevice(),
          dnt: b.getDNT() ? 1 : 0,
          geo: {},
          js: 1
        };
      },
      getSite: function (t) {
        var e,
          r = "",
          n = "",
          i = "",
          s = t.refererInfo;
        return q() ? (r = (e = b.getWindowTop()).location.hostname, n = e.location.href, i = e.document.referrer || "") : s.reachedTop ? (r = b.parseUrl(s.referer).hostname, n = s.referer) : s.stack && s.stack.length && s.stack[0] && (r = b.parseUrl(s.stack[0]).hostname), {
          domain: r,
          page: n,
          referrer: i
        };
      },
      getElementFromTopWindow: function t(e, r) {
        try {
          if (b.getWindowTop() === r) return e.getAttribute("id") || e.setAttribute("id", "adg-".concat(b.getUniqueIdentifierStr())), e;
          var n = r.frameElement,
            i = n.getBoundingClientRect(),
            s = e.getBoundingClientRect();
          return i.width === s.width && i.height === s.height && t(n, r.parent);
        } catch (t) {
          return b.logWarn("".concat(E), t), !1;
        }
      },
      autoDetectAdUnitElementId: function (t) {
        var e = b.getGptSlotInfoForAdUnitCode(t),
          r = null;
        return e && e.divId && (r = e.divId), r;
      },
      autoDetectEnvironment: function () {
        var t;
        switch (L.getDevice()) {
          case 2:
            t = "desktop";
            break;
          case 4:
            t = "mobile";
            break;
          case 5:
            t = "tablet";
        }
        return t;
      },
      getFeatures: function (t, e) {
        var r = t.adUnitCode,
          n = t.params,
          i = n.adUnitElementId,
          s = e.refererInfo;
        i || b.logWarn("".concat(E, " unable to get params.adUnitElementId. Continue without tiv."));
        var o = {
          print_number: L.getPrintNumber(r).toString(),
          page_dimensions: L.getPageDimensions().toString(),
          viewport_dimensions: L.getViewPortDimensions().toString(),
          dom_loading: L.getDomLoadingDuration().toString(),
          adunit_position: L.getSlotPosition(n).toString(),
          user_timestamp: L.getTimestampUTC().toString(),
          device: L.getDevice().toString(),
          url: L.getUrl(s) || L.getUrlFromParams(n) || "",
          browser: L.getBrowser(),
          os: L.getOS()
        };
        Object.keys(o).forEach(function (t) {
          "" === o[t] && delete o[t];
        });
        var a = {};
        return a[i] = {
          features: o,
          version: D
        }, H.enqueue({
          action: "features",
          ts: Date.now(),
          data: a
        }), o;
      },
      getRefererInfo: l.a,
      adagioScriptFromLocalStorageCb: U,
      getCurrentWindow: function () {
        return T || b.getWindowSelf();
      },
      supportIObs: function () {
        var t = H.getCurrentWindow();
        return !!(t && t.IntersectionObserver && t.IntersectionObserverEntry && t.IntersectionObserverEntry.prototype && "intersectionRatio" in t.IntersectionObserverEntry.prototype);
      },
      canAccessTopWindow: q,
      isRendererPreferredFromPublisher: function (t) {
        var e = b.deepAccess(t, "renderer"),
          r = !!(e && e.url && e.render),
          n = b.deepAccess(t, "mediaTypes.video.renderer"),
          i = !!(n && n.url && n.render);
        return !!(r && !0 !== e.backupOnly || i && !0 !== n.backupOnly);
      }
    };
    function _(t) {
      t.renderer.push(function () {
        "function" == typeof window.ADAGIO.outstreamPlayer ? window.ADAGIO.outstreamPlayer(t) : b.logError("".concat(E, " Adagio outstream player is not defined"));
      });
    }
    var F = {
      code: w,
      gvlid: R,
      supportedMediaTypes: O,
      isBidRequestValid: function (t) {
        var e = t.adUnitCode,
          r = t.auctionId,
          n = t.sizes,
          i = t.bidder,
          s = t.params,
          o = t.mediaTypes;
        if (!s) return b.logWarn("".concat(E, ' the "params" property is missing.')), !1;
        var a = s.organizationId,
          u = s.site,
          h = !0 === s.useAdUnitCodeAsAdUnitElementId ? e : s.adUnitElementId || H.autoDetectAdUnitElementId(e),
          c = !0 === s.useAdUnitCodeAsPlacement ? e : s.placement,
          f = s.environment || H.autoDetectEnvironment(),
          l = H.supportIObs();
        t.params = S(S({}, s), {}, {
          adUnitElementId: h,
          environment: f,
          placement: c,
          supportIObs: l
        });
        function p() {
          return {
            action: "pb-dbg",
            ts: Date.now(),
            data: {
              bid: t
            }
          };
        }
        if (!H.getRefererInfo().reachedTop) return b.logWarn("".concat(E, " the main page url is unreachabled.")), H.enqueue(p()), !1;
        if (!(a && u && c)) return b.logWarn("".concat(E, " at least one required param is missing.")), H.enqueue(p()), !1;
        var d = H.getCurrentWindow(),
          g = H.getPageviewId(),
          m = H.computePrintNumber(e);
        return d.ADAGIO = d.ADAGIO || {}, d.ADAGIO.pbjsAdUnits = d.ADAGIO.pbjsAdUnits.filter(function (t) {
          return t.code !== e;
        }), d.ADAGIO.pbjsAdUnits.push({
          code: e,
          mediaTypes: o || {},
          sizes: o && o.banner && Array.isArray(o.banner.sizes) ? o.banner.sizes : n,
          bids: [{
            bidder: i,
            params: t.params
          }],
          auctionId: r,
          pageviewId: g,
          printNumber: m
        }), d.ADAGIO.adUnits[e] = {
          auctionId: r,
          pageviewId: g,
          printNumber: m
        }, !0;
      },
      buildRequests: function (t, e) {
        var r,
          n = "https:" === location.protocol ? 1 : 0,
          i = H.getDevice(),
          s = H.getSite(e),
          o = H.getPageviewId(),
          a = function (t) {
            if (!b.deepAccess(t, "gdprConsent")) return !1;
            var e = t.gdprConsent,
              r = e.apiVersion,
              n = e.gdprApplies,
              i = e.consentString,
              s = e.allowAuctionWithoutConsent,
              o = {};
            return void 0 !== r && (o.apiVersion = r), void 0 !== i && (o.consentString = i), void 0 !== n && (o.consentRequired = n ? 1 : 0), void 0 !== s && (o.allowAuctionWithoutConsent = s ? 1 : 0), o;
          }(e) || {},
          u = (r = e, !b.deepAccess(r, "uspConsent") ? {} : {
            uspConsent: r.uspConsent
          }),
          h = {
            required: !0 === p.b.getConfig("coppa") ? 1 : 0
          },
          c = function (t) {
            if (b.deepAccess(t, "schain")) return t.schain;
          }(t[0]),
          f = function (t) {
            if (b.deepAccess(t, "userId")) return Object(d.a)(t.userId);
          }(t[0]) || [],
          l = b._map(t, function (t) {
            return t.features = H.getFeatures(t, e), b.deepAccess(t, "mediaTypes.video") && function (e) {
              var t,
                r = b.deepAccess(e, "mediaTypes.video", {}),
                n = b.deepAccess(e, "params.video", {}),
                i = {};
              Array.isArray(r.playerSize) && (t = Array.isArray(r.playerSize[0]) ? r.playerSize[0] : r.playerSize, i.w = t[0], i.h = t[1]);
              var s = S(S(S({}, i), r), n);
              s.context && s.context === v.b && (e.mediaTypes.video.playerName = H.isRendererPreferredFromPublisher(e) ? "other" : "adagio", "other" === e.mediaTypes.video.playerName && b.logWarn("".concat(E, " renderer.backupOnly has not been set. Adagio recommends to use its own player to get expected behavior."))), Object.keys(M).forEach(function (t) {
                s.hasOwnProperty(t) && (M[t](s[t]) ? e.mediaTypes.video[t] = s[t] : (delete e.mediaTypes.video[t], b.logWarn("".concat(E, " The OpenRTB video param ").concat(t, " has been skipped due to misformating. Please refer to OpenRTB 2.5 spec."))));
              });
            }(t), t;
          }).reduce(function (t, e) {
            return e.params.organizationId = e.params.organizationId.toString(), t[e.params.organizationId] = t[e.params.organizationId] || [], t[e.params.organizationId].push(e), t;
          }, {});
        return b._map(Object.keys(l), function (t) {
          return {
            method: "POST",
            url: I,
            data: {
              id: b.generateUUID(),
              organizationId: t,
              secure: n,
              device: i,
              site: s,
              pageviewId: o,
              adUnits: l[t],
              regs: {
                gdpr: a,
                coppa: h,
                ccpa: u
              },
              schain: c,
              user: {
                eids: f
              },
              prebidVersion: "4.21.0-pre",
              adapterVersion: A,
              featuresVersion: D
            },
            options: {
              contentType: "text/plain"
            }
          };
        });
      },
      interpretResponse: function (t, n) {
        var i = [];
        try {
          var e = t.body;
          e && (e.data && H.enqueue({
            action: "ssp-data",
            ts: Date.now(),
            data: e.data
          }), e.bids && e.bids.forEach(function (e) {
            var t,
              r = s()(n.data.adUnits, function (t) {
                return t.bidId === e.requestId;
              });
            r && (e.mediaType === g.d && (t = b.deepAccess(r, "mediaTypes.video.context"), !e.vastUrl && e.vastXml && (e.vastUrl = "data:text/xml;charset=utf-8;base64," + btoa(e.vastXml.replace(/\\"/g, '"'))), t === v.b && (e.renderer = m.a.install({
              id: e.requestId,
              adUnitCode: e.adUnitCode,
              url: e.urlRenderer || P,
              config: S(S({}, b.deepAccess(r, "mediaTypes.video")), b.deepAccess(e, "outstream", {}))
            }), e.renderer.setRender(_))), e.site = r.params.site, e.placement = r.params.placement, e.pagetype = r.params.pagetype, e.category = r.params.category, e.subcategory = r.params.subcategory, e.environment = r.params.environment), i.push(e);
          }));
        } catch (t) {
          b.logError(t);
        }
        return i;
      },
      getUserSyncs: function (t, e) {
        return !(!e.length || "" === e[0].body || !e[0].body.userSyncs) && e[0].body.userSyncs.map(function (t) {
          return {
            type: "p" === t.t ? "image" : "iframe",
            url: t.u
          };
        });
      }
    };
    !function () {
      q() && (T = q() ? b.getWindowTop() : b.getWindowSelf());
      var t = H.getCurrentWindow();
      t.ADAGIO = t.ADAGIO || {}, t.ADAGIO.adUnits = t.ADAGIO.adUnits || {}, t.ADAGIO.pbjsAdUnits = t.ADAGIO.pbjsAdUnits || [], t.ADAGIO.queue = t.ADAGIO.queue || [], t.ADAGIO.versions = t.ADAGIO.versions || {}, t.ADAGIO.versions.adagioBidderAdapter = A, t.ADAGIO.isSafeFrameWindow = j(), C();
    }(), Object(i.registerBidder)(F);
  },
  181: function (t, e, r) {
    (function (t) {
      "use strict";

      var e = "0123456789abcdefghijklmnopqrstuvwxyz";
      function u(t) {
        return e.charAt(t);
      }
      function r(t, e) {
        return t & e;
      }
      function h(t, e) {
        return t | e;
      }
      function n(t, e) {
        return t ^ e;
      }
      function i(t, e) {
        return t & ~e;
      }
      var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      function s(t) {
        for (var e, r = "", n = 0; n + 3 <= t.length; n += 3) e = parseInt(t.substring(n, n + 3), 16), r += o.charAt(e >> 6) + o.charAt(63 & e);
        for (n + 1 == t.length ? (e = parseInt(t.substring(n, n + 1), 16), r += o.charAt(e << 2)) : n + 2 == t.length && (e = parseInt(t.substring(n, n + 2), 16), r += o.charAt(e >> 2) + o.charAt((3 & e) << 4)); 0 < (3 & r.length);) r += "=";
        return r;
      }
      function a(t) {
        for (var e = "", r = 0, n = 0, i = 0; i < t.length && "=" != t.charAt(i); ++i) {
          var s = o.indexOf(t.charAt(i));
          s < 0 || (r = 0 == r ? (e += u(s >> 2), n = 3 & s, 1) : 1 == r ? (e += u(n << 2 | s >> 4), n = 15 & s, 2) : 2 == r ? (e += u(n), e += u(s >> 2), n = 3 & s, 3) : (e += u(n << 2 | s >> 4), e += u(15 & s), 0));
        }
        return 1 == r && (e += u(n << 2)), e;
      }
      var c,
        f = function (t, e) {
          return (f = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function (t, e) {
            t.__proto__ = e;
          } || function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          })(t, e);
        };
      var l,
        p = function (t) {
          if (void 0 === c) {
            var e = "0123456789ABCDEF",
              r = " \f\n\r\t \u2028\u2029";
            for (c = {}, o = 0; o < 16; ++o) c[e.charAt(o)] = o;
            for (e = e.toLowerCase(), o = 10; o < 16; ++o) c[e.charAt(o)] = o;
            for (o = 0; o < r.length; ++o) c[r.charAt(o)] = -1;
          }
          for (var n = [], i = 0, s = 0, o = 0; o < t.length; ++o) {
            var a = t.charAt(o);
            if ("=" == a) break;
            if (-1 != (a = c[a])) {
              if (void 0 === a) throw new Error("Illegal character at offset " + o);
              i |= a, 2 <= ++s ? (n[n.length] = i, s = i = 0) : i <<= 4;
            }
          }
          if (s) throw new Error("Hex encoding incomplete: 4 bits missing");
          return n;
        },
        d = {
          decode: function (t) {
            if (void 0 === l) {
              var e = "= \f\n\r\t \u2028\u2029";
              for (l = Object.create(null), s = 0; s < 64; ++s) l["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(s)] = s;
              for (s = 0; s < e.length; ++s) l[e.charAt(s)] = -1;
            }
            for (var r = [], n = 0, i = 0, s = 0; s < t.length; ++s) {
              var o = t.charAt(s);
              if ("=" == o) break;
              if (-1 != (o = l[o])) {
                if (void 0 === o) throw new Error("Illegal character at offset " + s);
                n |= o, 4 <= ++i ? (r[r.length] = n >> 16, r[r.length] = n >> 8 & 255, r[r.length] = 255 & n, i = n = 0) : n <<= 6;
              }
            }
            switch (i) {
              case 1:
                throw new Error("Base64 encoding incomplete: at least 2 bits missing");
              case 2:
                r[r.length] = n >> 10;
                break;
              case 3:
                r[r.length] = n >> 16, r[r.length] = n >> 8 & 255;
            }
            return r;
          },
          re: /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/,
          unarmor: function (t) {
            var e = d.re.exec(t);
            if (e) if (e[1]) t = e[1];else {
              if (!e[2]) throw new Error("RegExp out of sync");
              t = e[2];
            }
            return d.decode(t);
          }
        },
        g = 1e13,
        m = (v.prototype.mulAdd = function (t, e) {
          for (var r, n = this.buf, i = n.length, s = 0; s < i; ++s) (r = n[s] * t + e) < g ? e = 0 : r -= (e = 0 | r / g) * g, n[s] = r;
          0 < e && (n[s] = e);
        }, v.prototype.sub = function (t) {
          for (var e, r = this.buf, n = r.length, i = 0; i < n; ++i) t = (e = r[i] - t) < 0 ? (e += g, 1) : 0, r[i] = e;
          for (; 0 === r[r.length - 1];) r.pop();
        }, v.prototype.toString = function (t) {
          if (10 != (t || 10)) throw new Error("only base 10 is supported");
          for (var e = this.buf, r = e[e.length - 1].toString(), n = e.length - 2; 0 <= n; --n) r += (g + e[n]).toString().substring(1);
          return r;
        }, v.prototype.valueOf = function () {
          for (var t = this.buf, e = 0, r = t.length - 1; 0 <= r; --r) e = e * g + t[r];
          return e;
        }, v.prototype.simplify = function () {
          var t = this.buf;
          return 1 == t.length ? t[0] : this;
        }, v);
      function v(t) {
        this.buf = [+t || 0];
      }
      var y = "…",
        b = /^(\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/,
        S = /^(\d\d\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;
      function T(t, e) {
        return t.length > e && (t = t.substring(0, e) + y), t;
      }
      var w = (E.prototype.get = function (t) {
        if (void 0 === t && (t = this.pos++), t >= this.enc.length) throw new Error("Requesting byte offset " + t + " on a stream of length " + this.enc.length);
        return "string" == typeof this.enc ? this.enc.charCodeAt(t) : this.enc[t];
      }, E.prototype.hexByte = function (t) {
        return this.hexDigits.charAt(t >> 4 & 15) + this.hexDigits.charAt(15 & t);
      }, E.prototype.hexDump = function (t, e, r) {
        for (var n = "", i = t; i < e; ++i) if (n += this.hexByte(this.get(i)), !0 !== r) switch (15 & i) {
          case 7:
            n += "  ";
            break;
          case 15:
            n += "\n";
            break;
          default:
            n += " ";
        }
        return n;
      }, E.prototype.isASCII = function (t, e) {
        for (var r = t; r < e; ++r) {
          var n = this.get(r);
          if (n < 32 || 176 < n) return !1;
        }
        return !0;
      }, E.prototype.parseStringISO = function (t, e) {
        for (var r = "", n = t; n < e; ++n) r += String.fromCharCode(this.get(n));
        return r;
      }, E.prototype.parseStringUTF = function (t, e) {
        for (var r = "", n = t; n < e;) {
          var i = this.get(n++);
          r += i < 128 ? String.fromCharCode(i) : 191 < i && i < 224 ? String.fromCharCode((31 & i) << 6 | 63 & this.get(n++)) : String.fromCharCode((15 & i) << 12 | (63 & this.get(n++)) << 6 | 63 & this.get(n++));
        }
        return r;
      }, E.prototype.parseStringBMP = function (t, e) {
        for (var r, n, i = "", s = t; s < e;) r = this.get(s++), n = this.get(s++), i += String.fromCharCode(r << 8 | n);
        return i;
      }, E.prototype.parseTime = function (t, e, r) {
        var n = this.parseStringISO(t, e),
          i = (r ? b : S).exec(n);
        return i ? (r && (i[1] = +i[1], i[1] += +i[1] < 70 ? 2e3 : 1900), n = i[1] + "-" + i[2] + "-" + i[3] + " " + i[4], i[5] && (n += ":" + i[5], i[6] && (n += ":" + i[6], i[7] && (n += "." + i[7]))), i[8] && (n += " UTC", "Z" != i[8] && (n += i[8], i[9] && (n += ":" + i[9]))), n) : "Unrecognized time: " + n;
      }, E.prototype.parseInteger = function (t, e) {
        for (var r, n = this.get(t), i = 127 < n, s = i ? 255 : 0, o = ""; n == s && ++t < e;) n = this.get(t);
        if (0 == (r = e - t)) return i ? -1 : 0;
        if (4 < r) {
          for (o = n, r <<= 3; 0 == (128 & (+o ^ s));) o = +o << 1, --r;
          o = "(" + r + " bit)\n";
        }
        i && (n -= 256);
        for (var a = new m(n), u = t + 1; u < e; ++u) a.mulAdd(256, this.get(u));
        return o + a.toString();
      }, E.prototype.parseBitString = function (t, e, r) {
        for (var n = this.get(t), i = "(" + ((e - t - 1 << 3) - n) + " bit)\n", s = "", o = t + 1; o < e; ++o) {
          for (var a = this.get(o), u = o == e - 1 ? n : 0, h = 7; u <= h; --h) s += a >> h & 1 ? "1" : "0";
          if (s.length > r) return i + T(s, r);
        }
        return i + s;
      }, E.prototype.parseOctetString = function (t, e, r) {
        if (this.isASCII(t, e)) return T(this.parseStringISO(t, e), r);
        var n = e - t,
          i = "(" + n + " byte)\n";
        (r /= 2) < n && (e = t + r);
        for (var s = t; s < e; ++s) i += this.hexByte(this.get(s));
        return r < n && (i += y), i;
      }, E.prototype.parseOID = function (t, e, r) {
        for (var n = "", i = new m(), s = 0, o = t; o < e; ++o) {
          var a,
            u = this.get(o);
          if (i.mulAdd(128, 127 & u), s += 7, !(128 & u)) {
            if ("" === n ? n = (i = i.simplify()) instanceof m ? (i.sub(80), "2." + i.toString()) : (a = i < 80 ? i < 40 ? 0 : 1 : 2) + "." + (i - 40 * a) : n += "." + i.toString(), n.length > r) return T(n, r);
            i = new m(), s = 0;
          }
        }
        return 0 < s && (n += ".incomplete"), n;
      }, E);
      function E(t, e) {
        this.hexDigits = "0123456789ABCDEF", t instanceof E ? (this.enc = t.enc, this.pos = t.pos) : (this.enc = t, this.pos = e);
      }
      var A = (D.prototype.typeName = function () {
        switch (this.tag.tagClass) {
          case 0:
            switch (this.tag.tagNumber) {
              case 0:
                return "EOC";
              case 1:
                return "BOOLEAN";
              case 2:
                return "INTEGER";
              case 3:
                return "BIT_STRING";
              case 4:
                return "OCTET_STRING";
              case 5:
                return "NULL";
              case 6:
                return "OBJECT_IDENTIFIER";
              case 7:
                return "ObjectDescriptor";
              case 8:
                return "EXTERNAL";
              case 9:
                return "REAL";
              case 10:
                return "ENUMERATED";
              case 11:
                return "EMBEDDED_PDV";
              case 12:
                return "UTF8String";
              case 16:
                return "SEQUENCE";
              case 17:
                return "SET";
              case 18:
                return "NumericString";
              case 19:
                return "PrintableString";
              case 20:
                return "TeletexString";
              case 21:
                return "VideotexString";
              case 22:
                return "IA5String";
              case 23:
                return "UTCTime";
              case 24:
                return "GeneralizedTime";
              case 25:
                return "GraphicString";
              case 26:
                return "VisibleString";
              case 27:
                return "GeneralString";
              case 28:
                return "UniversalString";
              case 30:
                return "BMPString";
            }
            return "Universal_" + this.tag.tagNumber.toString();
          case 1:
            return "Application_" + this.tag.tagNumber.toString();
          case 2:
            return "[" + this.tag.tagNumber.toString() + "]";
          case 3:
            return "Private_" + this.tag.tagNumber.toString();
        }
      }, D.prototype.content = function (t) {
        if (void 0 === this.tag) return null;
        void 0 === t && (t = 1 / 0);
        var e = this.posContent(),
          r = Math.abs(this.length);
        if (!this.tag.isUniversal()) return null !== this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(e, e + r, t);
        switch (this.tag.tagNumber) {
          case 1:
            return 0 === this.stream.get(e) ? "false" : "true";
          case 2:
            return this.stream.parseInteger(e, e + r);
          case 3:
            return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseBitString(e, e + r, t);
          case 4:
            return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(e, e + r, t);
          case 6:
            return this.stream.parseOID(e, e + r, t);
          case 16:
          case 17:
            return null !== this.sub ? "(" + this.sub.length + " elem)" : "(no elem)";
          case 12:
            return T(this.stream.parseStringUTF(e, e + r), t);
          case 18:
          case 19:
          case 20:
          case 21:
          case 22:
          case 26:
            return T(this.stream.parseStringISO(e, e + r), t);
          case 30:
            return T(this.stream.parseStringBMP(e, e + r), t);
          case 23:
          case 24:
            return this.stream.parseTime(e, e + r, 23 == this.tag.tagNumber);
        }
        return null;
      }, D.prototype.toString = function () {
        return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + (null === this.sub ? "null" : this.sub.length) + "]";
      }, D.prototype.toPrettyString = function (t) {
        void 0 === t && (t = "");
        var e = t + this.typeName() + " @" + this.stream.pos;
        if (0 <= this.length && (e += "+"), e += this.length, this.tag.tagConstructed ? e += " (constructed)" : !this.tag.isUniversal() || 3 != this.tag.tagNumber && 4 != this.tag.tagNumber || null === this.sub || (e += " (encapsulates)"), e += "\n", null !== this.sub) {
          t += "  ";
          for (var r = 0, n = this.sub.length; r < n; ++r) e += this.sub[r].toPrettyString(t);
        }
        return e;
      }, D.prototype.posStart = function () {
        return this.stream.pos;
      }, D.prototype.posContent = function () {
        return this.stream.pos + this.header;
      }, D.prototype.posEnd = function () {
        return this.stream.pos + this.header + Math.abs(this.length);
      }, D.prototype.toHexString = function () {
        return this.stream.hexDump(this.posStart(), this.posEnd(), !0);
      }, D.decodeLength = function (t) {
        var e = t.get(),
          r = 127 & e;
        if (r == e) return r;
        if (6 < r) throw new Error("Length over 48 bits not supported at position " + (t.pos - 1));
        if (0 == r) return null;
        for (var n = e = 0; n < r; ++n) e = 256 * e + t.get();
        return e;
      }, D.prototype.getHexStringValue = function () {
        var t = this.toHexString(),
          e = 2 * this.header,
          r = 2 * this.length;
        return t.substr(e, r);
      }, D.decode = function (t) {
        function e() {
          var t = [];
          if (null !== s) {
            for (var e = o + s; n.pos < e;) t[t.length] = D.decode(n);
            if (n.pos != e) throw new Error("Content size is not correct for container starting at offset " + o);
          } else try {
            for (;;) {
              var r = D.decode(n);
              if (r.tag.isEOC()) break;
              t[t.length] = r;
            }
            s = o - n.pos;
          } catch (t) {
            throw new Error("Exception while decoding undefined length content: " + t);
          }
          return t;
        }
        var n = t instanceof w ? t : new w(t, 0),
          r = new w(n),
          i = new O(n),
          s = D.decodeLength(n),
          o = n.pos,
          a = o - r.pos,
          u = null;
        if (i.tagConstructed) u = e();else if (i.isUniversal() && (3 == i.tagNumber || 4 == i.tagNumber)) try {
          if (3 == i.tagNumber && 0 != n.get()) throw new Error("BIT STRINGs with unused bits cannot encapsulate.");
          u = e();
          for (var h = 0; h < u.length; ++h) if (u[h].tag.isEOC()) throw new Error("EOC is not supposed to be actual content.");
        } catch (t) {
          u = null;
        }
        if (null === u) {
          if (null === s) throw new Error("We can't skip over an invalid tag with undefined length at offset " + o);
          n.pos = o + Math.abs(s);
        }
        return new D(r, a, s, i, u);
      }, D);
      function D(t, e, r, n, i) {
        if (!(n instanceof O)) throw new Error("Invalid tag value.");
        this.stream = t, this.header = e, this.length = r, this.tag = n, this.sub = i;
      }
      var I,
        O = (x.prototype.isUniversal = function () {
          return 0 === this.tagClass;
        }, x.prototype.isEOC = function () {
          return 0 === this.tagClass && 0 === this.tagNumber;
        }, x);
      function x(t) {
        var e = t.get();
        if (this.tagClass = e >> 6, this.tagConstructed = 0 != (32 & e), this.tagNumber = 31 & e, 31 == this.tagNumber) {
          for (var r = new m(); e = t.get(), r.mulAdd(128, 127 & e), 128 & e;);
          this.tagNumber = r.simplify();
        }
      }
      var B = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997],
        R = (1 << 26) / B[B.length - 1],
        V = (P.prototype.toString = function (t) {
          if (this.s < 0) return "-" + this.negate().toString(t);
          var e;
          if (16 == t) e = 4;else if (8 == t) e = 3;else if (2 == t) e = 1;else if (32 == t) e = 5;else {
            if (4 != t) return this.toRadix(t);
            e = 2;
          }
          var r,
            n = (1 << e) - 1,
            i = !1,
            s = "",
            o = this.t,
            a = this.DB - o * this.DB % e;
          if (0 < o--) for (a < this.DB && 0 < (r = this[o] >> a) && (i = !0, s = u(r)); 0 <= o;) a < e ? (r = (this[o] & (1 << a) - 1) << e - a, r |= this[--o] >> (a += this.DB - e)) : (r = this[o] >> (a -= e) & n, a <= 0 && (a += this.DB, --o)), 0 < r && (i = !0), i && (s += u(r));
          return i ? s : "0";
        }, P.prototype.negate = function () {
          var t = _();
          return P.ZERO.subTo(this, t), t;
        }, P.prototype.abs = function () {
          return this.s < 0 ? this.negate() : this;
        }, P.prototype.compareTo = function (t) {
          var e = this.s - t.s;
          if (0 != e) return e;
          var r = this.t;
          if (0 != (e = r - t.t)) return this.s < 0 ? -e : e;
          for (; 0 <= --r;) if (0 != (e = this[r] - t[r])) return e;
          return 0;
        }, P.prototype.bitLength = function () {
          return this.t <= 0 ? 0 : this.DB * (this.t - 1) + Z(this[this.t - 1] ^ this.s & this.DM);
        }, P.prototype.mod = function (t) {
          var e = _();
          return this.abs().divRemTo(t, null, e), this.s < 0 && 0 < e.compareTo(P.ZERO) && t.subTo(e, e), e;
        }, P.prototype.modPowInt = function (t, e) {
          var r = new (t < 256 || e.isEven() ? U : q)(e);
          return this.exp(t, r);
        }, P.prototype.clone = function () {
          var t = _();
          return this.copyTo(t), t;
        }, P.prototype.intValue = function () {
          if (this.s < 0) {
            if (1 == this.t) return this[0] - this.DV;
            if (0 == this.t) return -1;
          } else {
            if (1 == this.t) return this[0];
            if (0 == this.t) return 0;
          }
          return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0];
        }, P.prototype.byteValue = function () {
          return 0 == this.t ? this.s : this[0] << 24 >> 24;
        }, P.prototype.shortValue = function () {
          return 0 == this.t ? this.s : this[0] << 16 >> 16;
        }, P.prototype.signum = function () {
          return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1;
        }, P.prototype.toByteArray = function () {
          var t = this.t,
            e = [];
          e[0] = this.s;
          var r,
            n = this.DB - t * this.DB % 8,
            i = 0;
          if (0 < t--) for (n < this.DB && (r = this[t] >> n) != (this.s & this.DM) >> n && (e[i++] = r | this.s << this.DB - n); 0 <= t;) n < 8 ? (r = (this[t] & (1 << n) - 1) << 8 - n, r |= this[--t] >> (n += this.DB - 8)) : (r = this[t] >> (n -= 8) & 255, n <= 0 && (n += this.DB, --t)), 0 != (128 & r) && (r |= -256), 0 == i && (128 & this.s) != (128 & r) && ++i, (0 < i || r != this.s) && (e[i++] = r);
          return e;
        }, P.prototype.equals = function (t) {
          return 0 == this.compareTo(t);
        }, P.prototype.min = function (t) {
          return this.compareTo(t) < 0 ? this : t;
        }, P.prototype.max = function (t) {
          return 0 < this.compareTo(t) ? this : t;
        }, P.prototype.and = function (t) {
          var e = _();
          return this.bitwiseTo(t, r, e), e;
        }, P.prototype.or = function (t) {
          var e = _();
          return this.bitwiseTo(t, h, e), e;
        }, P.prototype.xor = function (t) {
          var e = _();
          return this.bitwiseTo(t, n, e), e;
        }, P.prototype.andNot = function (t) {
          var e = _();
          return this.bitwiseTo(t, i, e), e;
        }, P.prototype.not = function () {
          for (var t = _(), e = 0; e < this.t; ++e) t[e] = this.DM & ~this[e];
          return t.t = this.t, t.s = ~this.s, t;
        }, P.prototype.shiftLeft = function (t) {
          var e = _();
          return t < 0 ? this.rShiftTo(-t, e) : this.lShiftTo(t, e), e;
        }, P.prototype.shiftRight = function (t) {
          var e = _();
          return t < 0 ? this.lShiftTo(-t, e) : this.rShiftTo(t, e), e;
        }, P.prototype.getLowestSetBit = function () {
          for (var t = 0; t < this.t; ++t) if (0 != this[t]) return t * this.DB + function (t) {
            if (0 == t) return -1;
            var e = 0;
            return 0 == (65535 & t) && (t >>= 16, e += 16), 0 == (255 & t) && (t >>= 8, e += 8), 0 == (15 & t) && (t >>= 4, e += 4), 0 == (3 & t) && (t >>= 2, e += 2), 0 == (1 & t) && ++e, e;
          }(this[t]);
          return this.s < 0 ? this.t * this.DB : -1;
        }, P.prototype.bitCount = function () {
          for (var t = 0, e = this.s & this.DM, r = 0; r < this.t; ++r) t += function (t) {
            for (var e = 0; 0 != t;) t &= t - 1, ++e;
            return e;
          }(this[r] ^ e);
          return t;
        }, P.prototype.testBit = function (t) {
          var e = Math.floor(t / this.DB);
          return e >= this.t ? 0 != this.s : 0 != (this[e] & 1 << t % this.DB);
        }, P.prototype.setBit = function (t) {
          return this.changeBit(t, h);
        }, P.prototype.clearBit = function (t) {
          return this.changeBit(t, i);
        }, P.prototype.flipBit = function (t) {
          return this.changeBit(t, n);
        }, P.prototype.add = function (t) {
          var e = _();
          return this.addTo(t, e), e;
        }, P.prototype.subtract = function (t) {
          var e = _();
          return this.subTo(t, e), e;
        }, P.prototype.multiply = function (t) {
          var e = _();
          return this.multiplyTo(t, e), e;
        }, P.prototype.divide = function (t) {
          var e = _();
          return this.divRemTo(t, e, null), e;
        }, P.prototype.remainder = function (t) {
          var e = _();
          return this.divRemTo(t, null, e), e;
        }, P.prototype.divideAndRemainder = function (t) {
          var e = _(),
            r = _();
          return this.divRemTo(t, e, r), [e, r];
        }, P.prototype.modPow = function (t, e) {
          var r,
            n,
            i = t.bitLength(),
            s = K(1);
          if (i <= 0) return s;
          r = i < 18 ? 1 : i < 48 ? 3 : i < 144 ? 4 : i < 768 ? 5 : 6, n = new (i < 8 ? U : e.isEven() ? L : q)(e);
          var o = [],
            a = 3,
            u = r - 1,
            h = (1 << r) - 1;
          if (o[1] = n.convert(this), 1 < r) {
            var c = _();
            for (n.sqrTo(o[1], c); a <= h;) o[a] = _(), n.mulTo(c, o[a - 2], o[a]), a += 2;
          }
          for (var f, l, p = t.t - 1, d = !0, g = _(), i = Z(t[p]) - 1; 0 <= p;) {
            for (u <= i ? f = t[p] >> i - u & h : (f = (t[p] & (1 << i + 1) - 1) << u - i, 0 < p && (f |= t[p - 1] >> this.DB + i - u)), a = r; 0 == (1 & f);) f >>= 1, --a;
            if ((i -= a) < 0 && (i += this.DB, --p), d) o[f].copyTo(s), d = !1;else {
              for (; 1 < a;) n.sqrTo(s, g), n.sqrTo(g, s), a -= 2;
              0 < a ? n.sqrTo(s, g) : (l = s, s = g, g = l), n.mulTo(g, o[f], s);
            }
            for (; 0 <= p && 0 == (t[p] & 1 << i);) n.sqrTo(s, g), l = s, s = g, g = l, --i < 0 && (i = this.DB - 1, --p);
          }
          return n.revert(s);
        }, P.prototype.modInverse = function (t) {
          var e = t.isEven();
          if (this.isEven() && e || 0 == t.signum()) return P.ZERO;
          for (var r = t.clone(), n = this.clone(), i = K(1), s = K(0), o = K(0), a = K(1); 0 != r.signum();) {
            for (; r.isEven();) r.rShiftTo(1, r), e ? (i.isEven() && s.isEven() || (i.addTo(this, i), s.subTo(t, s)), i.rShiftTo(1, i)) : s.isEven() || s.subTo(t, s), s.rShiftTo(1, s);
            for (; n.isEven();) n.rShiftTo(1, n), e ? (o.isEven() && a.isEven() || (o.addTo(this, o), a.subTo(t, a)), o.rShiftTo(1, o)) : a.isEven() || a.subTo(t, a), a.rShiftTo(1, a);
            0 <= r.compareTo(n) ? (r.subTo(n, r), e && i.subTo(o, i), s.subTo(a, s)) : (n.subTo(r, n), e && o.subTo(i, o), a.subTo(s, a));
          }
          return 0 != n.compareTo(P.ONE) ? P.ZERO : 0 <= a.compareTo(t) ? a.subtract(t) : a.signum() < 0 ? (a.addTo(t, a), a.signum() < 0 ? a.add(t) : a) : a;
        }, P.prototype.pow = function (t) {
          return this.exp(t, new N());
        }, P.prototype.gcd = function (t) {
          var e,
            r = this.s < 0 ? this.negate() : this.clone(),
            n = t.s < 0 ? t.negate() : t.clone();
          r.compareTo(n) < 0 && (e = r, r = n, n = e);
          var i = r.getLowestSetBit(),
            s = n.getLowestSetBit();
          if (s < 0) return r;
          for (i < s && (s = i), 0 < s && (r.rShiftTo(s, r), n.rShiftTo(s, n)); 0 < r.signum();) 0 < (i = r.getLowestSetBit()) && r.rShiftTo(i, r), 0 < (i = n.getLowestSetBit()) && n.rShiftTo(i, n), 0 <= r.compareTo(n) ? (r.subTo(n, r), r.rShiftTo(1, r)) : (n.subTo(r, n), n.rShiftTo(1, n));
          return 0 < s && n.lShiftTo(s, n), n;
        }, P.prototype.isProbablePrime = function (t) {
          var e,
            r = this.abs();
          if (1 == r.t && r[0] <= B[B.length - 1]) {
            for (e = 0; e < B.length; ++e) if (r[0] == B[e]) return !0;
            return !1;
          }
          if (r.isEven()) return !1;
          for (e = 1; e < B.length;) {
            for (var n = B[e], i = e + 1; i < B.length && n < R;) n *= B[i++];
            for (n = r.modInt(n); e < i;) if (n % B[e++] == 0) return !1;
          }
          return r.millerRabin(t);
        }, P.prototype.copyTo = function (t) {
          for (var e = this.t - 1; 0 <= e; --e) t[e] = this[e];
          t.t = this.t, t.s = this.s;
        }, P.prototype.fromInt = function (t) {
          this.t = 1, this.s = t < 0 ? -1 : 0, 0 < t ? this[0] = t : t < -1 ? this[0] = t + this.DV : this.t = 0;
        }, P.prototype.fromString = function (t, e) {
          var r;
          if (16 == e) r = 4;else if (8 == e) r = 3;else if (256 == e) r = 8;else if (2 == e) r = 1;else if (32 == e) r = 5;else {
            if (4 != e) return void this.fromRadix(t, e);
            r = 2;
          }
          this.t = 0, this.s = 0;
          for (var n = t.length, i = !1, s = 0; 0 <= --n;) {
            var o = 8 == r ? 255 & +t[n] : z(t, n);
            o < 0 ? "-" == t.charAt(n) && (i = !0) : (i = !1, 0 == s ? this[this.t++] = o : s + r > this.DB ? (this[this.t - 1] |= (o & (1 << this.DB - s) - 1) << s, this[this.t++] = o >> this.DB - s) : this[this.t - 1] |= o << s, (s += r) >= this.DB && (s -= this.DB));
          }
          8 == r && 0 != (128 & +t[0]) && (this.s = -1, 0 < s && (this[this.t - 1] |= (1 << this.DB - s) - 1 << s)), this.clamp(), i && P.ZERO.subTo(this, this);
        }, P.prototype.clamp = function () {
          for (var t = this.s & this.DM; 0 < this.t && this[this.t - 1] == t;) --this.t;
        }, P.prototype.dlShiftTo = function (t, e) {
          for (var r = this.t - 1; 0 <= r; --r) e[r + t] = this[r];
          for (r = t - 1; 0 <= r; --r) e[r] = 0;
          e.t = this.t + t, e.s = this.s;
        }, P.prototype.drShiftTo = function (t, e) {
          for (var r = t; r < this.t; ++r) e[r - t] = this[r];
          e.t = Math.max(this.t - t, 0), e.s = this.s;
        }, P.prototype.lShiftTo = function (t, e) {
          for (var r = t % this.DB, n = this.DB - r, i = (1 << n) - 1, s = Math.floor(t / this.DB), o = this.s << r & this.DM, a = this.t - 1; 0 <= a; --a) e[a + s + 1] = this[a] >> n | o, o = (this[a] & i) << r;
          for (a = s - 1; 0 <= a; --a) e[a] = 0;
          e[s] = o, e.t = this.t + s + 1, e.s = this.s, e.clamp();
        }, P.prototype.rShiftTo = function (t, e) {
          e.s = this.s;
          var r = Math.floor(t / this.DB);
          if (r >= this.t) e.t = 0;else {
            var n = t % this.DB,
              i = this.DB - n,
              s = (1 << n) - 1;
            e[0] = this[r] >> n;
            for (var o = r + 1; o < this.t; ++o) e[o - r - 1] |= (this[o] & s) << i, e[o - r] = this[o] >> n;
            0 < n && (e[this.t - r - 1] |= (this.s & s) << i), e.t = this.t - r, e.clamp();
          }
        }, P.prototype.subTo = function (t, e) {
          for (var r = 0, n = 0, i = Math.min(t.t, this.t); r < i;) n += this[r] - t[r], e[r++] = n & this.DM, n >>= this.DB;
          if (t.t < this.t) {
            for (n -= t.s; r < this.t;) n += this[r], e[r++] = n & this.DM, n >>= this.DB;
            n += this.s;
          } else {
            for (n += this.s; r < t.t;) n -= t[r], e[r++] = n & this.DM, n >>= this.DB;
            n -= t.s;
          }
          e.s = n < 0 ? -1 : 0, n < -1 ? e[r++] = this.DV + n : 0 < n && (e[r++] = n), e.t = r, e.clamp();
        }, P.prototype.multiplyTo = function (t, e) {
          var r = this.abs(),
            n = t.abs(),
            i = r.t;
          for (e.t = i + n.t; 0 <= --i;) e[i] = 0;
          for (i = 0; i < n.t; ++i) e[i + r.t] = r.am(0, n[i], e, i, 0, r.t);
          e.s = 0, e.clamp(), this.s != t.s && P.ZERO.subTo(e, e);
        }, P.prototype.squareTo = function (t) {
          for (var e = this.abs(), r = t.t = 2 * e.t; 0 <= --r;) t[r] = 0;
          for (r = 0; r < e.t - 1; ++r) {
            var n = e.am(r, e[r], t, 2 * r, 0, 1);
            (t[r + e.t] += e.am(r + 1, 2 * e[r], t, 2 * r + 1, n, e.t - r - 1)) >= e.DV && (t[r + e.t] -= e.DV, t[r + e.t + 1] = 1);
          }
          0 < t.t && (t[t.t - 1] += e.am(r, e[r], t, 2 * r, 0, 1)), t.s = 0, t.clamp();
        }, P.prototype.divRemTo = function (t, e, r) {
          var n = t.abs();
          if (!(n.t <= 0)) {
            var i = this.abs();
            if (i.t < n.t) return null != e && e.fromInt(0), void (null != r && this.copyTo(r));
            null == r && (r = _());
            var s = _(),
              o = this.s,
              a = t.s,
              u = this.DB - Z(n[n.t - 1]);
            0 < u ? (n.lShiftTo(u, s), i.lShiftTo(u, r)) : (n.copyTo(s), i.copyTo(r));
            var h = s.t,
              c = s[h - 1];
            if (0 != c) {
              var f = c * (1 << this.F1) + (1 < h ? s[h - 2] >> this.F2 : 0),
                l = this.FV / f,
                p = (1 << this.F1) / f,
                d = 1 << this.F2,
                g = r.t,
                m = g - h,
                v = null == e ? _() : e;
              for (s.dlShiftTo(m, v), 0 <= r.compareTo(v) && (r[r.t++] = 1, r.subTo(v, r)), P.ONE.dlShiftTo(h, v), v.subTo(s, s); s.t < h;) s[s.t++] = 0;
              for (; 0 <= --m;) {
                var y = r[--g] == c ? this.DM : Math.floor(r[g] * l + (r[g - 1] + d) * p);
                if ((r[g] += s.am(0, y, r, m, 0, h)) < y) for (s.dlShiftTo(m, v), r.subTo(v, r); r[g] < --y;) r.subTo(v, r);
              }
              null != e && (r.drShiftTo(h, e), o != a && P.ZERO.subTo(e, e)), r.t = h, r.clamp(), 0 < u && r.rShiftTo(u, r), o < 0 && P.ZERO.subTo(r, r);
            }
          }
        }, P.prototype.invDigit = function () {
          if (this.t < 1) return 0;
          var t = this[0];
          if (0 == (1 & t)) return 0;
          var e = 3 & t;
          return 0 < (e = (e = (e = (e = e * (2 - (15 & t) * e) & 15) * (2 - (255 & t) * e) & 255) * (2 - ((65535 & t) * e & 65535)) & 65535) * (2 - t * e % this.DV) % this.DV) ? this.DV - e : -e;
        }, P.prototype.isEven = function () {
          return 0 == (0 < this.t ? 1 & this[0] : this.s);
        }, P.prototype.exp = function (t, e) {
          if (4294967295 < t || t < 1) return P.ONE;
          var r,
            n = _(),
            i = _(),
            s = e.convert(this),
            o = Z(t) - 1;
          for (s.copyTo(n); 0 <= --o;) e.sqrTo(n, i), 0 < (t & 1 << o) ? e.mulTo(i, s, n) : (r = n, n = i, i = r);
          return e.revert(n);
        }, P.prototype.chunkSize = function (t) {
          return Math.floor(Math.LN2 * this.DB / Math.log(t));
        }, P.prototype.toRadix = function (t) {
          if (null == t && (t = 10), 0 == this.signum() || t < 2 || 36 < t) return "0";
          var e = this.chunkSize(t),
            r = Math.pow(t, e),
            n = K(r),
            i = _(),
            s = _(),
            o = "";
          for (this.divRemTo(n, i, s); 0 < i.signum();) o = (r + s.intValue()).toString(t).substr(1) + o, i.divRemTo(n, i, s);
          return s.intValue().toString(t) + o;
        }, P.prototype.fromRadix = function (t, e) {
          this.fromInt(0), null == e && (e = 10);
          for (var r = this.chunkSize(e), n = Math.pow(e, r), i = !1, s = 0, o = 0, a = 0; a < t.length; ++a) {
            var u = z(t, a);
            u < 0 ? "-" == t.charAt(a) && 0 == this.signum() && (i = !0) : (o = e * o + u, ++s >= r && (this.dMultiply(n), this.dAddOffset(o, 0), o = s = 0));
          }
          0 < s && (this.dMultiply(Math.pow(e, s)), this.dAddOffset(o, 0)), i && P.ZERO.subTo(this, this);
        }, P.prototype.fromNumber = function (t, e, r) {
          if ("number" == typeof e) {
            if (t < 2) this.fromInt(1);else for (this.fromNumber(t, r), this.testBit(t - 1) || this.bitwiseTo(P.ONE.shiftLeft(t - 1), h, this), this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(e);) this.dAddOffset(2, 0), this.bitLength() > t && this.subTo(P.ONE.shiftLeft(t - 1), this);
          } else {
            var n = [],
              i = 7 & t;
            n.length = 1 + (t >> 3), e.nextBytes(n), 0 < i ? n[0] &= (1 << i) - 1 : n[0] = 0, this.fromString(n, 256);
          }
        }, P.prototype.bitwiseTo = function (t, e, r) {
          for (var n, i = Math.min(t.t, this.t), s = 0; s < i; ++s) r[s] = e(this[s], t[s]);
          if (t.t < this.t) {
            for (n = t.s & this.DM, s = i; s < this.t; ++s) r[s] = e(this[s], n);
            r.t = this.t;
          } else {
            for (n = this.s & this.DM, s = i; s < t.t; ++s) r[s] = e(n, t[s]);
            r.t = t.t;
          }
          r.s = e(this.s, t.s), r.clamp();
        }, P.prototype.changeBit = function (t, e) {
          var r = P.ONE.shiftLeft(t);
          return this.bitwiseTo(r, e, r), r;
        }, P.prototype.addTo = function (t, e) {
          for (var r = 0, n = 0, i = Math.min(t.t, this.t); r < i;) n += this[r] + t[r], e[r++] = n & this.DM, n >>= this.DB;
          if (t.t < this.t) {
            for (n += t.s; r < this.t;) n += this[r], e[r++] = n & this.DM, n >>= this.DB;
            n += this.s;
          } else {
            for (n += this.s; r < t.t;) n += t[r], e[r++] = n & this.DM, n >>= this.DB;
            n += t.s;
          }
          e.s = n < 0 ? -1 : 0, 0 < n ? e[r++] = n : n < -1 && (e[r++] = this.DV + n), e.t = r, e.clamp();
        }, P.prototype.dMultiply = function (t) {
          this[this.t] = this.am(0, t - 1, this, 0, 0, this.t), ++this.t, this.clamp();
        }, P.prototype.dAddOffset = function (t, e) {
          if (0 != t) {
            for (; this.t <= e;) this[this.t++] = 0;
            for (this[e] += t; this[e] >= this.DV;) this[e] -= this.DV, ++e >= this.t && (this[this.t++] = 0), ++this[e];
          }
        }, P.prototype.multiplyLowerTo = function (t, e, r) {
          var n = Math.min(this.t + t.t, e);
          for (r.s = 0, r.t = n; 0 < n;) r[--n] = 0;
          for (var i = r.t - this.t; n < i; ++n) r[n + this.t] = this.am(0, t[n], r, n, 0, this.t);
          for (i = Math.min(t.t, e); n < i; ++n) this.am(0, t[n], r, n, 0, e - n);
          r.clamp();
        }, P.prototype.multiplyUpperTo = function (t, e, r) {
          --e;
          var n = r.t = this.t + t.t - e;
          for (r.s = 0; 0 <= --n;) r[n] = 0;
          for (n = Math.max(e - this.t, 0); n < t.t; ++n) r[this.t + n - e] = this.am(e - n, t[n], r, 0, 0, this.t + n - e);
          r.clamp(), r.drShiftTo(1, r);
        }, P.prototype.modInt = function (t) {
          if (t <= 0) return 0;
          var e = this.DV % t,
            r = this.s < 0 ? t - 1 : 0;
          if (0 < this.t) if (0 == e) r = this[0] % t;else for (var n = this.t - 1; 0 <= n; --n) r = (e * r + this[n]) % t;
          return r;
        }, P.prototype.millerRabin = function (t) {
          var e = this.subtract(P.ONE),
            r = e.getLowestSetBit();
          if (r <= 0) return !1;
          var n = e.shiftRight(r);
          B.length < (t = t + 1 >> 1) && (t = B.length);
          for (var i = _(), s = 0; s < t; ++s) {
            i.fromInt(B[Math.floor(Math.random() * B.length)]);
            var o = i.modPow(n, this);
            if (0 != o.compareTo(P.ONE) && 0 != o.compareTo(e)) {
              for (var a = 1; a++ < r && 0 != o.compareTo(e);) if (0 == (o = o.modPowInt(2, this)).compareTo(P.ONE)) return !1;
              if (0 != o.compareTo(e)) return !1;
            }
          }
          return !0;
        }, P.prototype.square = function () {
          var t = _();
          return this.squareTo(t), t;
        }, P.prototype.gcda = function (t, e) {
          var r,
            n = this.s < 0 ? this.negate() : this.clone(),
            i = t.s < 0 ? t.negate() : t.clone();
          n.compareTo(i) < 0 && (r = n, n = i, i = r);
          var s,
            o = n.getLowestSetBit(),
            a = i.getLowestSetBit();
          a < 0 ? e(n) : (o < a && (a = o), 0 < a && (n.rShiftTo(a, n), i.rShiftTo(a, i)), s = function () {
            0 < (o = n.getLowestSetBit()) && n.rShiftTo(o, n), 0 < (o = i.getLowestSetBit()) && i.rShiftTo(o, i), 0 <= n.compareTo(i) ? (n.subTo(i, n), n.rShiftTo(1, n)) : (i.subTo(n, i), i.rShiftTo(1, i)), 0 < n.signum() ? setTimeout(s, 0) : (0 < a && i.lShiftTo(a, i), setTimeout(function () {
              e(i);
            }, 0));
          }, setTimeout(s, 10));
        }, P.prototype.fromNumberAsync = function (t, e, r, n) {
          var i, s, o, a;
          "number" == typeof e ? t < 2 ? this.fromInt(1) : (this.fromNumber(t, r), this.testBit(t - 1) || this.bitwiseTo(P.ONE.shiftLeft(t - 1), h, this), this.isEven() && this.dAddOffset(1, 0), i = this, s = function () {
            i.dAddOffset(2, 0), i.bitLength() > t && i.subTo(P.ONE.shiftLeft(t - 1), i), i.isProbablePrime(e) ? setTimeout(function () {
              n();
            }, 0) : setTimeout(s, 0);
          }, setTimeout(s, 0)) : (a = 7 & t, (o = []).length = 1 + (t >> 3), e.nextBytes(o), 0 < a ? o[0] &= (1 << a) - 1 : o[0] = 0, this.fromString(o, 256));
        }, P);
      function P(t, e, r) {
        null != t && ("number" == typeof t ? this.fromNumber(t, e, r) : null == e && "string" != typeof t ? this.fromString(t, 256) : this.fromString(t, e));
      }
      var N = (M.prototype.convert = function (t) {
        return t;
      }, M.prototype.revert = function (t) {
        return t;
      }, M.prototype.mulTo = function (t, e, r) {
        t.multiplyTo(e, r);
      }, M.prototype.sqrTo = function (t, e) {
        t.squareTo(e);
      }, M);
      function M() {}
      var U = (C.prototype.convert = function (t) {
        return t.s < 0 || 0 <= t.compareTo(this.m) ? t.mod(this.m) : t;
      }, C.prototype.revert = function (t) {
        return t;
      }, C.prototype.reduce = function (t) {
        t.divRemTo(this.m, null, t);
      }, C.prototype.mulTo = function (t, e, r) {
        t.multiplyTo(e, r), this.reduce(r);
      }, C.prototype.sqrTo = function (t, e) {
        t.squareTo(e), this.reduce(e);
      }, C);
      function C(t) {
        this.m = t;
      }
      var q = (j.prototype.convert = function (t) {
        var e = _();
        return t.abs().dlShiftTo(this.m.t, e), e.divRemTo(this.m, null, e), t.s < 0 && 0 < e.compareTo(V.ZERO) && this.m.subTo(e, e), e;
      }, j.prototype.revert = function (t) {
        var e = _();
        return t.copyTo(e), this.reduce(e), e;
      }, j.prototype.reduce = function (t) {
        for (; t.t <= this.mt2;) t[t.t++] = 0;
        for (var e = 0; e < this.m.t; ++e) {
          var r = 32767 & t[e],
            n = r * this.mpl + ((r * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
          for (t[r = e + this.m.t] += this.m.am(0, n, t, e, 0, this.m.t); t[r] >= t.DV;) t[r] -= t.DV, t[++r]++;
        }
        t.clamp(), t.drShiftTo(this.m.t, t), 0 <= t.compareTo(this.m) && t.subTo(this.m, t);
      }, j.prototype.mulTo = function (t, e, r) {
        t.multiplyTo(e, r), this.reduce(r);
      }, j.prototype.sqrTo = function (t, e) {
        t.squareTo(e), this.reduce(e);
      }, j);
      function j(t) {
        this.m = t, this.mp = t.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, this.um = (1 << t.DB - 15) - 1, this.mt2 = 2 * t.t;
      }
      var L = (H.prototype.convert = function (t) {
        if (t.s < 0 || t.t > 2 * this.m.t) return t.mod(this.m);
        if (t.compareTo(this.m) < 0) return t;
        var e = _();
        return t.copyTo(e), this.reduce(e), e;
      }, H.prototype.revert = function (t) {
        return t;
      }, H.prototype.reduce = function (t) {
        for (t.drShiftTo(this.m.t - 1, this.r2), t.t > this.m.t + 1 && (t.t = this.m.t + 1, t.clamp()), this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); t.compareTo(this.r2) < 0;) t.dAddOffset(1, this.m.t + 1);
        for (t.subTo(this.r2, t); 0 <= t.compareTo(this.m);) t.subTo(this.m, t);
      }, H.prototype.mulTo = function (t, e, r) {
        t.multiplyTo(e, r), this.reduce(r);
      }, H.prototype.sqrTo = function (t, e) {
        t.squareTo(e), this.reduce(e);
      }, H);
      function H(t) {
        this.m = t, this.r2 = _(), this.q3 = _(), V.ONE.dlShiftTo(2 * t.t, this.r2), this.mu = this.r2.divide(t);
      }
      function _() {
        return new V(null);
      }
      function F(t, e) {
        return new V(t, e);
      }
      I = "Microsoft Internet Explorer" == navigator.appName ? (V.prototype.am = function (t, e, r, n, i, s) {
        for (var o = 32767 & e, a = e >> 15; 0 <= --s;) {
          var u = 32767 & this[t],
            h = this[t++] >> 15,
            c = a * u + h * o;
          i = ((u = o * u + ((32767 & c) << 15) + r[n] + (1073741823 & i)) >>> 30) + (c >>> 15) + a * h + (i >>> 30), r[n++] = 1073741823 & u;
        }
        return i;
      }, 30) : "Netscape" != navigator.appName ? (V.prototype.am = function (t, e, r, n, i, s) {
        for (; 0 <= --s;) {
          var o = e * this[t++] + r[n] + i;
          i = Math.floor(o / 67108864), r[n++] = 67108863 & o;
        }
        return i;
      }, 26) : (V.prototype.am = function (t, e, r, n, i, s) {
        for (var o = 16383 & e, a = e >> 14; 0 <= --s;) {
          var u = 16383 & this[t],
            h = this[t++] >> 14,
            c = a * u + h * o;
          i = ((u = o * u + ((16383 & c) << 14) + r[n] + i) >> 28) + (c >> 14) + a * h, r[n++] = 268435455 & u;
        }
        return i;
      }, 28), V.prototype.DB = I, V.prototype.DM = (1 << I) - 1, V.prototype.DV = 1 << I;
      V.prototype.FV = Math.pow(2, 52), V.prototype.F1 = 52 - I, V.prototype.F2 = 2 * I - 52;
      for (var k = [], G = "0".charCodeAt(0), W = 0; W <= 9; ++W) k[G++] = W;
      for (G = "a".charCodeAt(0), W = 10; W < 36; ++W) k[G++] = W;
      for (G = "A".charCodeAt(0), W = 10; W < 36; ++W) k[G++] = W;
      function z(t, e) {
        var r = k[t.charCodeAt(e)];
        return null == r ? -1 : r;
      }
      function K(t) {
        var e = _();
        return e.fromInt(t), e;
      }
      function Z(t) {
        var e,
          r = 1;
        return 0 != (e = t >>> 16) && (t = e, r += 16), 0 != (e = t >> 8) && (t = e, r += 8), 0 != (e = t >> 4) && (t = e, r += 4), 0 != (e = t >> 2) && (t = e, r += 2), 0 != (e = t >> 1) && (t = e, r += 1), r;
      }
      V.ZERO = K(0), V.ONE = K(1);
      var $ = (Y.prototype.init = function (t) {
        for (var e, r, n = 0; n < 256; ++n) this.S[n] = n;
        for (n = e = 0; n < 256; ++n) e = e + this.S[n] + t[n % t.length] & 255, r = this.S[n], this.S[n] = this.S[e], this.S[e] = r;
        this.i = 0, this.j = 0;
      }, Y.prototype.next = function () {
        var t;
        return this.i = this.i + 1 & 255, this.j = this.j + this.S[this.i] & 255, t = this.S[this.i], this.S[this.i] = this.S[this.j], this.S[this.j] = t, this.S[t + this.S[this.i] & 255];
      }, Y);
      function Y() {
        this.i = 0, this.j = 0, this.S = [];
      }
      var J,
        Q,
        X = 256,
        tt = null;
      if (null == tt) {
        tt = [];
        var et = void (Q = 0);
        if (window.crypto && window.crypto.getRandomValues) {
          var rt = new Uint32Array(256);
          for (window.crypto.getRandomValues(rt), et = 0; et < rt.length; ++et) tt[Q++] = 255 & rt[et];
        }
        var nt = function (t) {
          if (this.count = this.count || 0, 256 <= this.count || X <= Q) window.removeEventListener ? window.removeEventListener("mousemove", nt, !1) : window.detachEvent && window.detachEvent("onmousemove", nt);else try {
            var e = t.x + t.y;
            tt[Q++] = 255 & e, this.count += 1;
          } catch (t) {}
        };
        window.addEventListener ? window.addEventListener("mousemove", nt, !1) : window.attachEvent && window.attachEvent("onmousemove", nt);
      }
      function it() {
        if (null == J) {
          for (J = new $(); Q < X;) {
            var t = Math.floor(65536 * Math.random());
            tt[Q++] = 255 & t;
          }
          for (J.init(tt), Q = 0; Q < tt.length; ++Q) tt[Q] = 0;
          Q = 0;
        }
        return J.next();
      }
      var st = (ot.prototype.nextBytes = function (t) {
        for (var e = 0; e < t.length; ++e) t[e] = it();
      }, ot);
      function ot() {}
      var at = (ut.prototype.doPublic = function (t) {
        return t.modPowInt(this.e, this.n);
      }, ut.prototype.doPrivate = function (t) {
        if (null == this.p || null == this.q) return t.modPow(this.d, this.n);
        for (var e = t.mod(this.p).modPow(this.dmp1, this.p), r = t.mod(this.q).modPow(this.dmq1, this.q); e.compareTo(r) < 0;) e = e.add(this.p);
        return e.subtract(r).multiply(this.coeff).mod(this.p).multiply(this.q).add(r);
      }, ut.prototype.setPublic = function (t, e) {
        null != t && null != e && 0 < t.length && 0 < e.length ? (this.n = F(t, 16), this.e = parseInt(e, 16)) : console.error("Invalid RSA public key");
      }, ut.prototype.encrypt = function (t) {
        var e = function (t, e) {
          if (e < t.length + 11) return console.error("Message too long for RSA"), null;
          for (var r = [], n = t.length - 1; 0 <= n && 0 < e;) {
            var i = t.charCodeAt(n--);
            i < 128 ? r[--e] = i : 127 < i && i < 2048 ? (r[--e] = 63 & i | 128, r[--e] = i >> 6 | 192) : (r[--e] = 63 & i | 128, r[--e] = i >> 6 & 63 | 128, r[--e] = i >> 12 | 224);
          }
          r[--e] = 0;
          for (var s = new st(), o = []; 2 < e;) {
            for (o[0] = 0; 0 == o[0];) s.nextBytes(o);
            r[--e] = o[0];
          }
          return r[--e] = 2, r[--e] = 0, new V(r);
        }(t, this.n.bitLength() + 7 >> 3);
        if (null == e) return null;
        var r = this.doPublic(e);
        if (null == r) return null;
        var n = r.toString(16);
        return 0 == (1 & n.length) ? n : "0" + n;
      }, ut.prototype.setPrivate = function (t, e, r) {
        null != t && null != e && 0 < t.length && 0 < e.length ? (this.n = F(t, 16), this.e = parseInt(e, 16), this.d = F(r, 16)) : console.error("Invalid RSA private key");
      }, ut.prototype.setPrivateEx = function (t, e, r, n, i, s, o, a) {
        null != t && null != e && 0 < t.length && 0 < e.length ? (this.n = F(t, 16), this.e = parseInt(e, 16), this.d = F(r, 16), this.p = F(n, 16), this.q = F(i, 16), this.dmp1 = F(s, 16), this.dmq1 = F(o, 16), this.coeff = F(a, 16)) : console.error("Invalid RSA private key");
      }, ut.prototype.generate = function (t, e) {
        var r = new st(),
          n = t >> 1;
        this.e = parseInt(e, 16);
        for (var i, s = new V(e, 16);;) {
          for (; this.p = new V(t - n, 1, r), 0 != this.p.subtract(V.ONE).gcd(s).compareTo(V.ONE) || !this.p.isProbablePrime(10););
          for (; this.q = new V(n, 1, r), 0 != this.q.subtract(V.ONE).gcd(s).compareTo(V.ONE) || !this.q.isProbablePrime(10););
          this.p.compareTo(this.q) <= 0 && (i = this.p, this.p = this.q, this.q = i);
          var o = this.p.subtract(V.ONE),
            a = this.q.subtract(V.ONE),
            u = o.multiply(a);
          if (0 == u.gcd(s).compareTo(V.ONE)) {
            this.n = this.p.multiply(this.q), this.d = s.modInverse(u), this.dmp1 = this.d.mod(o), this.dmq1 = this.d.mod(a), this.coeff = this.q.modInverse(this.p);
            break;
          }
        }
      }, ut.prototype.decrypt = function (t) {
        var e = F(t, 16),
          r = this.doPrivate(e);
        return null == r ? null : function (t, e) {
          for (var r = t.toByteArray(), n = 0; n < r.length && 0 == r[n];) ++n;
          if (r.length - n != e - 1 || 2 != r[n]) return null;
          for (++n; 0 != r[n];) if (++n >= r.length) return null;
          for (var i = ""; ++n < r.length;) {
            var s = 255 & r[n];
            s < 128 ? i += String.fromCharCode(s) : 191 < s && s < 224 ? (i += String.fromCharCode((31 & s) << 6 | 63 & r[n + 1]), ++n) : (i += String.fromCharCode((15 & s) << 12 | (63 & r[n + 1]) << 6 | 63 & r[n + 2]), n += 2);
          }
          return i;
        }(r, this.n.bitLength() + 7 >> 3);
      }, ut.prototype.generateAsync = function (t, e, i) {
        var s = new st(),
          o = t >> 1;
        this.e = parseInt(e, 16);
        var a = new V(e, 16),
          u = this,
          h = function () {
            function e() {
              var t;
              u.p.compareTo(u.q) <= 0 && (t = u.p, u.p = u.q, u.q = t);
              var e = u.p.subtract(V.ONE),
                r = u.q.subtract(V.ONE),
                n = e.multiply(r);
              0 == n.gcd(a).compareTo(V.ONE) ? (u.n = u.p.multiply(u.q), u.d = a.modInverse(n), u.dmp1 = u.d.mod(e), u.dmq1 = u.d.mod(r), u.coeff = u.q.modInverse(u.p), setTimeout(function () {
                i();
              }, 0)) : setTimeout(h, 0);
            }
            var r = function () {
                u.q = _(), u.q.fromNumberAsync(o, 1, s, function () {
                  u.q.subtract(V.ONE).gcda(a, function (t) {
                    0 == t.compareTo(V.ONE) && u.q.isProbablePrime(10) ? setTimeout(e, 0) : setTimeout(r, 0);
                  });
                });
              },
              n = function () {
                u.p = _(), u.p.fromNumberAsync(t - o, 1, s, function () {
                  u.p.subtract(V.ONE).gcda(a, function (t) {
                    0 == t.compareTo(V.ONE) && u.p.isProbablePrime(10) ? setTimeout(r, 0) : setTimeout(n, 0);
                  });
                });
              };
            setTimeout(n, 0);
          };
        setTimeout(h, 0);
      }, ut.prototype.sign = function (t, e, r) {
        var n = function (t, e) {
          if (e < t.length + 22) return console.error("Message too long for RSA"), null;
          for (var r = e - t.length - 6, n = "", i = 0; i < r; i += 2) n += "ff";
          return F("0001" + n + "00" + t, 16);
        }((ht[r] || "") + e(t).toString(), this.n.bitLength() / 4);
        if (null == n) return null;
        var i = this.doPrivate(n);
        if (null == i) return null;
        var s = i.toString(16);
        return 0 == (1 & s.length) ? s : "0" + s;
      }, ut.prototype.verify = function (t, e, r) {
        var n = F(e, 16),
          i = this.doPublic(n);
        return null == i ? null : function (t) {
          for (var e in ht) if (ht.hasOwnProperty(e)) {
            var r = ht[e],
              n = r.length;
            if (t.substr(0, n) == r) return t.substr(n);
          }
          return t;
        }(i.toString(16).replace(/^1f+00/, "")) == r(t).toString();
      }, ut);
      function ut() {
        this.n = null, this.e = 0, this.d = null, this.p = null, this.q = null, this.dmp1 = null, this.dmq1 = null, this.coeff = null;
      }
      var ht = {
        md2: "3020300c06082a864886f70d020205000410",
        md5: "3020300c06082a864886f70d020505000410",
        sha1: "3021300906052b0e03021a05000414",
        sha224: "302d300d06096086480165030402040500041c",
        sha256: "3031300d060960864801650304020105000420",
        sha384: "3041300d060960864801650304020205000430",
        sha512: "3051300d060960864801650304020305000440",
        ripemd160: "3021300906052b2403020105000414"
      };
      var ct = {};
      ct.lang = {
        extend: function (t, e, r) {
          if (!e || !t) throw new Error("YAHOO.lang.extend failed, please check that all dependencies are included.");
          function n() {}
          var i;
          if (n.prototype = e.prototype, t.prototype = new n(), (t.prototype.constructor = t).superclass = e.prototype, e.prototype.constructor == Object.prototype.constructor && (e.prototype.constructor = e), r) {
            for (i in r) t.prototype[i] = r[i];
            var s = function () {},
              o = ["toString", "valueOf"];
            try {
              /MSIE/.test(navigator.userAgent) && (s = function (t, e) {
                for (i = 0; i < o.length; i += 1) {
                  var r = o[i],
                    n = e[r];
                  "function" == typeof n && n != Object.prototype[r] && (t[r] = n);
                }
              });
            } catch (t) {}
            s(t.prototype, r);
          }
        }
      };
      var ft = {};
      void 0 !== ft.asn1 && ft.asn1 || (ft.asn1 = {}), ft.asn1.ASN1Util = new function () {
        this.integerToByteHex = function (t) {
          var e = t.toString(16);
          return e.length % 2 == 1 && (e = "0" + e), e;
        }, this.bigIntToMinTwosComplementsHex = function (t) {
          if ("-" != (i = t.toString(16)).substr(0, 1)) i.length % 2 == 1 ? i = "0" + i : i.match(/^[0-7]/) || (i = "00" + i);else {
            var e = i.substr(1).length;
            e % 2 == 1 ? e += 1 : i.match(/^[0-7]/) || (e += 2);
            for (var r = "", n = 0; n < e; n++) r += "f";
            var i = new V(r, 16).xor(t).add(V.ONE).toString(16).replace(/^-/, "");
          }
          return i;
        }, this.getPEMStringFromHex = function (t, e) {
          return hextopem(t, e);
        }, this.newObject = function (t) {
          var e = ft.asn1,
            r = e.DERBoolean,
            n = e.DERInteger,
            i = e.DERBitString,
            s = e.DEROctetString,
            o = e.DERNull,
            a = e.DERObjectIdentifier,
            u = e.DEREnumerated,
            h = e.DERUTF8String,
            c = e.DERNumericString,
            f = e.DERPrintableString,
            l = e.DERTeletexString,
            p = e.DERIA5String,
            d = e.DERUTCTime,
            g = e.DERGeneralizedTime,
            m = e.DERSequence,
            v = e.DERSet,
            y = e.DERTaggedObject,
            b = e.ASN1Util.newObject,
            S = Object.keys(t);
          if (1 != S.length) throw "key of param shall be only one.";
          var T = S[0];
          if (-1 == ":bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:seq:set:tag:".indexOf(":" + T + ":")) throw "undefined key: " + T;
          if ("bool" == T) return new r(t[T]);
          if ("int" == T) return new n(t[T]);
          if ("bitstr" == T) return new i(t[T]);
          if ("octstr" == T) return new s(t[T]);
          if ("null" == T) return new o(t[T]);
          if ("oid" == T) return new a(t[T]);
          if ("enum" == T) return new u(t[T]);
          if ("utf8str" == T) return new h(t[T]);
          if ("numstr" == T) return new c(t[T]);
          if ("prnstr" == T) return new f(t[T]);
          if ("telstr" == T) return new l(t[T]);
          if ("ia5str" == T) return new p(t[T]);
          if ("utctime" == T) return new d(t[T]);
          if ("gentime" == T) return new g(t[T]);
          if ("seq" == T) {
            for (var w = t[T], E = [], A = 0; A < w.length; A++) {
              var D = b(w[A]);
              E.push(D);
            }
            return new m({
              array: E
            });
          }
          if ("set" == T) {
            for (w = t[T], E = [], A = 0; A < w.length; A++) {
              D = b(w[A]);
              E.push(D);
            }
            return new v({
              array: E
            });
          }
          if ("tag" == T) {
            var I = t[T];
            if ("[object Array]" === Object.prototype.toString.call(I) && 3 == I.length) {
              var O = b(I[2]);
              return new y({
                tag: I[0],
                explicit: I[1],
                obj: O
              });
            }
            var x = {};
            if (void 0 !== I.explicit && (x.explicit = I.explicit), void 0 !== I.tag && (x.tag = I.tag), void 0 === I.obj) throw "obj shall be specified for 'tag'.";
            return x.obj = b(I.obj), new y(x);
          }
        }, this.jsonToASN1HEX = function (t) {
          return this.newObject(t).getEncodedHex();
        };
      }(), ft.asn1.ASN1Util.oidHexToInt = function (t) {
        for (var e = "", r = parseInt(t.substr(0, 2), 16), e = Math.floor(r / 40) + "." + r % 40, n = "", i = 2; i < t.length; i += 2) {
          var s = ("00000000" + parseInt(t.substr(i, 2), 16).toString(2)).slice(-8);
          n += s.substr(1, 7), "0" == s.substr(0, 1) && (e = e + "." + new V(n, 2).toString(10), n = "");
        }
        return e;
      }, ft.asn1.ASN1Util.oidIntToHex = function (t) {
        function a(t) {
          var e = t.toString(16);
          return 1 == e.length && (e = "0" + e), e;
        }
        if (!t.match(/^[0-9.]+$/)) throw "malformed oid string: " + t;
        var e = "",
          r = t.split("."),
          n = 40 * parseInt(r[0]) + parseInt(r[1]);
        e += a(n), r.splice(0, 2);
        for (var i = 0; i < r.length; i++) e += function (t) {
          var e = "",
            r = new V(t, 10).toString(2),
            n = 7 - r.length % 7;
          7 == n && (n = 0);
          for (var i = "", s = 0; s < n; s++) i += "0";
          r = i + r;
          for (s = 0; s < r.length - 1; s += 7) {
            var o = r.substr(s, 7);
            s != r.length - 7 && (o = "1" + o), e += a(parseInt(o, 2));
          }
          return e;
        }(r[i]);
        return e;
      }, ft.asn1.ASN1Object = function () {
        this.getLengthHexFromValue = function () {
          if (void 0 === this.hV || null == this.hV) throw "this.hV is null or undefined.";
          if (this.hV.length % 2 == 1) throw "value hex must be even length: n=" + "".length + ",v=" + this.hV;
          var t = this.hV.length / 2,
            e = t.toString(16);
          if (e.length % 2 == 1 && (e = "0" + e), t < 128) return e;
          var r = e.length / 2;
          if (15 < r) throw "ASN.1 length too long to represent by 8x: n = " + t.toString(16);
          return (128 + r).toString(16) + e;
        }, this.getEncodedHex = function () {
          return null != this.hTLV && !this.isModified || (this.hV = this.getFreshValueHex(), this.hL = this.getLengthHexFromValue(), this.hTLV = this.hT + this.hL + this.hV, this.isModified = !1), this.hTLV;
        }, this.getValueHex = function () {
          return this.getEncodedHex(), this.hV;
        }, this.getFreshValueHex = function () {
          return "";
        };
      }, ft.asn1.DERAbstractString = function (t) {
        ft.asn1.DERAbstractString.superclass.constructor.call(this), this.getString = function () {
          return this.s;
        }, this.setString = function (t) {
          this.hTLV = null, this.isModified = !0, this.s = t, this.hV = stohex(this.s);
        }, this.setStringHex = function (t) {
          this.hTLV = null, this.isModified = !0, this.s = null, this.hV = t;
        }, this.getFreshValueHex = function () {
          return this.hV;
        }, void 0 !== t && ("string" == typeof t ? this.setString(t) : void 0 !== t.str ? this.setString(t.str) : void 0 !== t.hex && this.setStringHex(t.hex));
      }, ct.lang.extend(ft.asn1.DERAbstractString, ft.asn1.ASN1Object), ft.asn1.DERAbstractTime = function (t) {
        ft.asn1.DERAbstractTime.superclass.constructor.call(this), this.localDateToUTC = function (t) {
          return utc = t.getTime() + 6e4 * t.getTimezoneOffset(), new Date(utc);
        }, this.formatDate = function (t, e, r) {
          var n = this.zeroPadding,
            i = this.localDateToUTC(t),
            s = String(i.getFullYear());
          "utc" == e && (s = s.substr(2, 2));
          var o,
            a = s + n(String(i.getMonth() + 1), 2) + n(String(i.getDate()), 2) + n(String(i.getHours()), 2) + n(String(i.getMinutes()), 2) + n(String(i.getSeconds()), 2);
          return !0 !== r || 0 != (o = i.getMilliseconds()) && (a = a + "." + n(String(o), 3).replace(/[0]+$/, "")), a + "Z";
        }, this.zeroPadding = function (t, e) {
          return t.length >= e ? t : new Array(e - t.length + 1).join("0") + t;
        }, this.getString = function () {
          return this.s;
        }, this.setString = function (t) {
          this.hTLV = null, this.isModified = !0, this.s = t, this.hV = stohex(t);
        }, this.setByDateValue = function (t, e, r, n, i, s) {
          var o = new Date(Date.UTC(t, e - 1, r, n, i, s, 0));
          this.setByDate(o);
        }, this.getFreshValueHex = function () {
          return this.hV;
        };
      }, ct.lang.extend(ft.asn1.DERAbstractTime, ft.asn1.ASN1Object), ft.asn1.DERAbstractStructured = function (t) {
        ft.asn1.DERAbstractString.superclass.constructor.call(this), this.setByASN1ObjectArray = function (t) {
          this.hTLV = null, this.isModified = !0, this.asn1Array = t;
        }, this.appendASN1Object = function (t) {
          this.hTLV = null, this.isModified = !0, this.asn1Array.push(t);
        }, this.asn1Array = new Array(), void 0 !== t && void 0 !== t.array && (this.asn1Array = t.array);
      }, ct.lang.extend(ft.asn1.DERAbstractStructured, ft.asn1.ASN1Object), ft.asn1.DERBoolean = function () {
        ft.asn1.DERBoolean.superclass.constructor.call(this), this.hT = "01", this.hTLV = "0101ff";
      }, ct.lang.extend(ft.asn1.DERBoolean, ft.asn1.ASN1Object), ft.asn1.DERInteger = function (t) {
        ft.asn1.DERInteger.superclass.constructor.call(this), this.hT = "02", this.setByBigInteger = function (t) {
          this.hTLV = null, this.isModified = !0, this.hV = ft.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t);
        }, this.setByInteger = function (t) {
          var e = new V(String(t), 10);
          this.setByBigInteger(e);
        }, this.setValueHex = function (t) {
          this.hV = t;
        }, this.getFreshValueHex = function () {
          return this.hV;
        }, void 0 !== t && (void 0 !== t.bigint ? this.setByBigInteger(t.bigint) : void 0 !== t.int ? this.setByInteger(t.int) : "number" == typeof t ? this.setByInteger(t) : void 0 !== t.hex && this.setValueHex(t.hex));
      }, ct.lang.extend(ft.asn1.DERInteger, ft.asn1.ASN1Object), ft.asn1.DERBitString = function (t) {
        var e;
        void 0 !== t && void 0 !== t.obj && (e = ft.asn1.ASN1Util.newObject(t.obj), t.hex = "00" + e.getEncodedHex()), ft.asn1.DERBitString.superclass.constructor.call(this), this.hT = "03", this.setHexValueIncludingUnusedBits = function (t) {
          this.hTLV = null, this.isModified = !0, this.hV = t;
        }, this.setUnusedBitsAndHexValue = function (t, e) {
          if (t < 0 || 7 < t) throw "unused bits shall be from 0 to 7: u = " + t;
          var r = "0" + t;
          this.hTLV = null, this.isModified = !0, this.hV = r + e;
        }, this.setByBinaryString = function (t) {
          var e = 8 - (t = t.replace(/0+$/, "")).length % 8;
          8 == e && (e = 0);
          for (var r = 0; r <= e; r++) t += "0";
          for (var n = "", r = 0; r < t.length - 1; r += 8) {
            var i = t.substr(r, 8),
              s = parseInt(i, 2).toString(16);
            1 == s.length && (s = "0" + s), n += s;
          }
          this.hTLV = null, this.isModified = !0, this.hV = "0" + e + n;
        }, this.setByBooleanArray = function (t) {
          for (var e = "", r = 0; r < t.length; r++) 1 == t[r] ? e += "1" : e += "0";
          this.setByBinaryString(e);
        }, this.newFalseArray = function (t) {
          for (var e = new Array(t), r = 0; r < t; r++) e[r] = !1;
          return e;
        }, this.getFreshValueHex = function () {
          return this.hV;
        }, void 0 !== t && ("string" == typeof t && t.toLowerCase().match(/^[0-9a-f]+$/) ? this.setHexValueIncludingUnusedBits(t) : void 0 !== t.hex ? this.setHexValueIncludingUnusedBits(t.hex) : void 0 !== t.bin ? this.setByBinaryString(t.bin) : void 0 !== t.array && this.setByBooleanArray(t.array));
      }, ct.lang.extend(ft.asn1.DERBitString, ft.asn1.ASN1Object), ft.asn1.DEROctetString = function (t) {
        var e;
        void 0 !== t && void 0 !== t.obj && (e = ft.asn1.ASN1Util.newObject(t.obj), t.hex = e.getEncodedHex()), ft.asn1.DEROctetString.superclass.constructor.call(this, t), this.hT = "04";
      }, ct.lang.extend(ft.asn1.DEROctetString, ft.asn1.DERAbstractString), ft.asn1.DERNull = function () {
        ft.asn1.DERNull.superclass.constructor.call(this), this.hT = "05", this.hTLV = "0500";
      }, ct.lang.extend(ft.asn1.DERNull, ft.asn1.ASN1Object), ft.asn1.DERObjectIdentifier = function (t) {
        function a(t) {
          var e = t.toString(16);
          return 1 == e.length && (e = "0" + e), e;
        }
        ft.asn1.DERObjectIdentifier.superclass.constructor.call(this), this.hT = "06", this.setValueHex = function (t) {
          this.hTLV = null, this.isModified = !0, this.s = null, this.hV = t;
        }, this.setValueOidString = function (t) {
          if (!t.match(/^[0-9.]+$/)) throw "malformed oid string: " + t;
          var e = "",
            r = t.split("."),
            n = 40 * parseInt(r[0]) + parseInt(r[1]);
          e += a(n), r.splice(0, 2);
          for (var i = 0; i < r.length; i++) e += function (t) {
            var e = "",
              r = new V(t, 10).toString(2),
              n = 7 - r.length % 7;
            7 == n && (n = 0);
            for (var i = "", s = 0; s < n; s++) i += "0";
            r = i + r;
            for (s = 0; s < r.length - 1; s += 7) {
              var o = r.substr(s, 7);
              s != r.length - 7 && (o = "1" + o), e += a(parseInt(o, 2));
            }
            return e;
          }(r[i]);
          this.hTLV = null, this.isModified = !0, this.s = null, this.hV = e;
        }, this.setValueName = function (t) {
          var e = ft.asn1.x509.OID.name2oid(t);
          if ("" === e) throw "DERObjectIdentifier oidName undefined: " + t;
          this.setValueOidString(e);
        }, this.getFreshValueHex = function () {
          return this.hV;
        }, void 0 !== t && ("string" == typeof t ? t.match(/^[0-2].[0-9.]+$/) ? this.setValueOidString(t) : this.setValueName(t) : void 0 !== t.oid ? this.setValueOidString(t.oid) : void 0 !== t.hex ? this.setValueHex(t.hex) : void 0 !== t.name && this.setValueName(t.name));
      }, ct.lang.extend(ft.asn1.DERObjectIdentifier, ft.asn1.ASN1Object), ft.asn1.DEREnumerated = function (t) {
        ft.asn1.DEREnumerated.superclass.constructor.call(this), this.hT = "0a", this.setByBigInteger = function (t) {
          this.hTLV = null, this.isModified = !0, this.hV = ft.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t);
        }, this.setByInteger = function (t) {
          var e = new V(String(t), 10);
          this.setByBigInteger(e);
        }, this.setValueHex = function (t) {
          this.hV = t;
        }, this.getFreshValueHex = function () {
          return this.hV;
        }, void 0 !== t && (void 0 !== t.int ? this.setByInteger(t.int) : "number" == typeof t ? this.setByInteger(t) : void 0 !== t.hex && this.setValueHex(t.hex));
      }, ct.lang.extend(ft.asn1.DEREnumerated, ft.asn1.ASN1Object), ft.asn1.DERUTF8String = function (t) {
        ft.asn1.DERUTF8String.superclass.constructor.call(this, t), this.hT = "0c";
      }, ct.lang.extend(ft.asn1.DERUTF8String, ft.asn1.DERAbstractString), ft.asn1.DERNumericString = function (t) {
        ft.asn1.DERNumericString.superclass.constructor.call(this, t), this.hT = "12";
      }, ct.lang.extend(ft.asn1.DERNumericString, ft.asn1.DERAbstractString), ft.asn1.DERPrintableString = function (t) {
        ft.asn1.DERPrintableString.superclass.constructor.call(this, t), this.hT = "13";
      }, ct.lang.extend(ft.asn1.DERPrintableString, ft.asn1.DERAbstractString), ft.asn1.DERTeletexString = function (t) {
        ft.asn1.DERTeletexString.superclass.constructor.call(this, t), this.hT = "14";
      }, ct.lang.extend(ft.asn1.DERTeletexString, ft.asn1.DERAbstractString), ft.asn1.DERIA5String = function (t) {
        ft.asn1.DERIA5String.superclass.constructor.call(this, t), this.hT = "16";
      }, ct.lang.extend(ft.asn1.DERIA5String, ft.asn1.DERAbstractString), ft.asn1.DERUTCTime = function (t) {
        ft.asn1.DERUTCTime.superclass.constructor.call(this, t), this.hT = "17", this.setByDate = function (t) {
          this.hTLV = null, this.isModified = !0, this.date = t, this.s = this.formatDate(this.date, "utc"), this.hV = stohex(this.s);
        }, this.getFreshValueHex = function () {
          return void 0 === this.date && void 0 === this.s && (this.date = new Date(), this.s = this.formatDate(this.date, "utc"), this.hV = stohex(this.s)), this.hV;
        }, void 0 !== t && (void 0 !== t.str ? this.setString(t.str) : "string" == typeof t && t.match(/^[0-9]{12}Z$/) ? this.setString(t) : void 0 !== t.hex ? this.setStringHex(t.hex) : void 0 !== t.date && this.setByDate(t.date));
      }, ct.lang.extend(ft.asn1.DERUTCTime, ft.asn1.DERAbstractTime), ft.asn1.DERGeneralizedTime = function (t) {
        ft.asn1.DERGeneralizedTime.superclass.constructor.call(this, t), this.hT = "18", this.withMillis = !1, this.setByDate = function (t) {
          this.hTLV = null, this.isModified = !0, this.date = t, this.s = this.formatDate(this.date, "gen", this.withMillis), this.hV = stohex(this.s);
        }, this.getFreshValueHex = function () {
          return void 0 === this.date && void 0 === this.s && (this.date = new Date(), this.s = this.formatDate(this.date, "gen", this.withMillis), this.hV = stohex(this.s)), this.hV;
        }, void 0 !== t && (void 0 !== t.str ? this.setString(t.str) : "string" == typeof t && t.match(/^[0-9]{14}Z$/) ? this.setString(t) : void 0 !== t.hex ? this.setStringHex(t.hex) : void 0 !== t.date && this.setByDate(t.date), !0 === t.millis && (this.withMillis = !0));
      }, ct.lang.extend(ft.asn1.DERGeneralizedTime, ft.asn1.DERAbstractTime), ft.asn1.DERSequence = function (t) {
        ft.asn1.DERSequence.superclass.constructor.call(this, t), this.hT = "30", this.getFreshValueHex = function () {
          for (var t = "", e = 0; e < this.asn1Array.length; e++) {
            t += this.asn1Array[e].getEncodedHex();
          }
          return this.hV = t, this.hV;
        };
      }, ct.lang.extend(ft.asn1.DERSequence, ft.asn1.DERAbstractStructured), ft.asn1.DERSet = function (t) {
        ft.asn1.DERSet.superclass.constructor.call(this, t), this.hT = "31", this.sortFlag = !0, this.getFreshValueHex = function () {
          for (var t = new Array(), e = 0; e < this.asn1Array.length; e++) {
            var r = this.asn1Array[e];
            t.push(r.getEncodedHex());
          }
          return 1 == this.sortFlag && t.sort(), this.hV = t.join(""), this.hV;
        }, void 0 !== t && void 0 !== t.sortflag && 0 == t.sortflag && (this.sortFlag = !1);
      }, ct.lang.extend(ft.asn1.DERSet, ft.asn1.DERAbstractStructured), ft.asn1.DERTaggedObject = function (t) {
        ft.asn1.DERTaggedObject.superclass.constructor.call(this), this.hT = "a0", this.hV = "", this.isExplicit = !0, this.asn1Object = null, this.setASN1Object = function (t, e, r) {
          this.hT = e, this.isExplicit = t, this.asn1Object = r, this.isExplicit ? (this.hV = this.asn1Object.getEncodedHex(), this.hTLV = null, this.isModified = !0) : (this.hV = null, this.hTLV = r.getEncodedHex(), this.hTLV = this.hTLV.replace(/^../, e), this.isModified = !1);
        }, this.getFreshValueHex = function () {
          return this.hV;
        }, void 0 !== t && (void 0 !== t.tag && (this.hT = t.tag), void 0 !== t.explicit && (this.isExplicit = t.explicit), void 0 !== t.obj && (this.asn1Object = t.obj, this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)));
      }, ct.lang.extend(ft.asn1.DERTaggedObject, ft.asn1.ASN1Object);
      var lt,
        pt,
        dt,
        gt = (f(pt = vt, dt = lt = at), pt.prototype = null === dt ? Object.create(dt) : (mt.prototype = dt.prototype, new mt()), vt.prototype.parseKey = function (t) {
          try {
            var e = 0,
              r = 0,
              n = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/.test(t) ? p(t) : d.unarmor(t),
              i = A.decode(n);
            if (3 === i.sub.length && (i = i.sub[2].sub[0]), 9 === i.sub.length) {
              e = i.sub[1].getHexStringValue(), this.n = F(e, 16), r = i.sub[2].getHexStringValue(), this.e = parseInt(r, 16);
              var s = i.sub[3].getHexStringValue();
              this.d = F(s, 16);
              var o = i.sub[4].getHexStringValue();
              this.p = F(o, 16);
              var a = i.sub[5].getHexStringValue();
              this.q = F(a, 16);
              var u = i.sub[6].getHexStringValue();
              this.dmp1 = F(u, 16);
              var h = i.sub[7].getHexStringValue();
              this.dmq1 = F(h, 16);
              var c = i.sub[8].getHexStringValue();
              this.coeff = F(c, 16);
            } else {
              if (2 !== i.sub.length) return !1;
              var f = i.sub[1].sub[0],
                e = f.sub[0].getHexStringValue();
              this.n = F(e, 16), r = f.sub[1].getHexStringValue(), this.e = parseInt(r, 16);
            }
            return !0;
          } catch (t) {
            return !1;
          }
        }, vt.prototype.getPrivateBaseKey = function () {
          var t = {
            array: [new ft.asn1.DERInteger({
              int: 0
            }), new ft.asn1.DERInteger({
              bigint: this.n
            }), new ft.asn1.DERInteger({
              int: this.e
            }), new ft.asn1.DERInteger({
              bigint: this.d
            }), new ft.asn1.DERInteger({
              bigint: this.p
            }), new ft.asn1.DERInteger({
              bigint: this.q
            }), new ft.asn1.DERInteger({
              bigint: this.dmp1
            }), new ft.asn1.DERInteger({
              bigint: this.dmq1
            }), new ft.asn1.DERInteger({
              bigint: this.coeff
            })]
          };
          return new ft.asn1.DERSequence(t).getEncodedHex();
        }, vt.prototype.getPrivateBaseKeyB64 = function () {
          return s(this.getPrivateBaseKey());
        }, vt.prototype.getPublicBaseKey = function () {
          var t = new ft.asn1.DERSequence({
              array: [new ft.asn1.DERObjectIdentifier({
                oid: "1.2.840.113549.1.1.1"
              }), new ft.asn1.DERNull()]
            }),
            e = new ft.asn1.DERSequence({
              array: [new ft.asn1.DERInteger({
                bigint: this.n
              }), new ft.asn1.DERInteger({
                int: this.e
              })]
            }),
            r = new ft.asn1.DERBitString({
              hex: "00" + e.getEncodedHex()
            });
          return new ft.asn1.DERSequence({
            array: [t, r]
          }).getEncodedHex();
        }, vt.prototype.getPublicBaseKeyB64 = function () {
          return s(this.getPublicBaseKey());
        }, vt.wordwrap = function (t, e) {
          if (!t) return t;
          var r = "(.{1," + (e = e || 64) + "})( +|$\n?)|(.{1," + e + "})";
          return t.match(RegExp(r, "g")).join("\n");
        }, vt.prototype.getPrivateKey = function () {
          var t = "-----BEGIN RSA PRIVATE KEY-----\n";
          return t += vt.wordwrap(this.getPrivateBaseKeyB64()) + "\n", t += "-----END RSA PRIVATE KEY-----";
        }, vt.prototype.getPublicKey = function () {
          var t = "-----BEGIN PUBLIC KEY-----\n";
          return t += vt.wordwrap(this.getPublicBaseKeyB64()) + "\n", t += "-----END PUBLIC KEY-----";
        }, vt.hasPublicKeyProperty = function (t) {
          return (t = t || {}).hasOwnProperty("n") && t.hasOwnProperty("e");
        }, vt.hasPrivateKeyProperty = function (t) {
          return (t = t || {}).hasOwnProperty("n") && t.hasOwnProperty("e") && t.hasOwnProperty("d") && t.hasOwnProperty("p") && t.hasOwnProperty("q") && t.hasOwnProperty("dmp1") && t.hasOwnProperty("dmq1") && t.hasOwnProperty("coeff");
        }, vt.prototype.parsePropertiesFrom = function (t) {
          this.n = t.n, this.e = t.e, t.hasOwnProperty("d") && (this.d = t.d, this.p = t.p, this.q = t.q, this.dmp1 = t.dmp1, this.dmq1 = t.dmq1, this.coeff = t.coeff);
        }, vt);
      function mt() {
        this.constructor = pt;
      }
      function vt(t) {
        var e = lt.call(this) || this;
        return t && ("string" == typeof t ? e.parseKey(t) : (vt.hasPrivateKeyProperty(t) || vt.hasPublicKeyProperty(t)) && e.parsePropertiesFrom(t)), e;
      }
      var yt = (bt.prototype.setKey = function (t) {
        this.log && this.key && console.warn("A key was already set, overriding existing."), this.key = new gt(t);
      }, bt.prototype.setPrivateKey = function (t) {
        this.setKey(t);
      }, bt.prototype.setPublicKey = function (t) {
        this.setKey(t);
      }, bt.prototype.decrypt = function (t) {
        try {
          return this.getKey().decrypt(a(t));
        } catch (t) {
          return !1;
        }
      }, bt.prototype.encrypt = function (t) {
        try {
          return s(this.getKey().encrypt(t));
        } catch (t) {
          return !1;
        }
      }, bt.prototype.sign = function (t, e, r) {
        try {
          return s(this.getKey().sign(t, e, r));
        } catch (t) {
          return !1;
        }
      }, bt.prototype.verify = function (t, e, r) {
        try {
          return this.getKey().verify(t, a(e), r);
        } catch (t) {
          return !1;
        }
      }, bt.prototype.getKey = function (t) {
        if (!this.key) {
          if (this.key = new gt(), t && "[object Function]" === {}.toString.call(t)) return void this.key.generateAsync(this.default_key_size, this.default_public_exponent, t);
          this.key.generate(this.default_key_size, this.default_public_exponent);
        }
        return this.key;
      }, bt.prototype.getPrivateKey = function () {
        return this.getKey().getPrivateKey();
      }, bt.prototype.getPrivateKeyB64 = function () {
        return this.getKey().getPrivateBaseKeyB64();
      }, bt.prototype.getPublicKey = function () {
        return this.getKey().getPublicKey();
      }, bt.prototype.getPublicKeyB64 = function () {
        return this.getKey().getPublicBaseKeyB64();
      }, bt.version = "3.0.0-rc.1", bt);
      function bt(t) {
        t = t || {}, this.default_key_size = parseInt(t.default_key_size, 10) || 1024, this.default_public_exponent = t.default_public_exponent || "010001", this.log = t.log || !1, this.key = null;
      }
      window.JSEncrypt = yt, t.JSEncrypt = yt, t.default = yt, Object.defineProperty(t, "__esModule", {
        value: !0
      });
    })(e);
  },
  182: function (t, e, r) {
    var n;
    n = function (u) {
      return function (i) {
        var t = u,
          e = t.lib,
          r = e.WordArray,
          n = e.Hasher,
          s = t.algo,
          o = [],
          b = [];
        !function () {
          function t(t) {
            return 4294967296 * (t - (0 | t)) | 0;
          }
          for (var e = 2, r = 0; r < 64;) !function (t) {
            for (var e = i.sqrt(t), r = 2; r <= e; r++) if (!(t % r)) return;
            return 1;
          }(e) || (r < 8 && (o[r] = t(i.pow(e, .5))), b[r] = t(i.pow(e, 1 / 3)), r++), e++;
        }();
        var S = [],
          a = s.SHA256 = n.extend({
            _doReset: function () {
              this._hash = new r.init(o.slice(0));
            },
            _doProcessBlock: function (t, e) {
              for (var r, n, i, s, o = this._hash.words, a = o[0], u = o[1], h = o[2], c = o[3], f = o[4], l = o[5], p = o[6], d = o[7], g = 0; g < 64; g++) {
                g < 16 ? S[g] = 0 | t[e + g] : (n = ((r = S[g - 15]) << 25 | r >>> 7) ^ (r << 14 | r >>> 18) ^ r >>> 3, s = ((i = S[g - 2]) << 15 | i >>> 17) ^ (i << 13 | i >>> 19) ^ i >>> 10, S[g] = n + S[g - 7] + s + S[g - 16]);
                var m = a & u ^ a & h ^ u & h,
                  v = (a << 30 | a >>> 2) ^ (a << 19 | a >>> 13) ^ (a << 10 | a >>> 22),
                  y = d + ((f << 26 | f >>> 6) ^ (f << 21 | f >>> 11) ^ (f << 7 | f >>> 25)) + (f & l ^ ~f & p) + b[g] + S[g],
                  d = p,
                  p = l,
                  l = f,
                  f = c + y | 0,
                  c = h,
                  h = u,
                  u = a,
                  a = y + (v + m) | 0;
              }
              o[0] = o[0] + a | 0, o[1] = o[1] + u | 0, o[2] = o[2] + h | 0, o[3] = o[3] + c | 0, o[4] = o[4] + f | 0, o[5] = o[5] + l | 0, o[6] = o[6] + p | 0, o[7] = o[7] + d | 0;
            },
            _doFinalize: function () {
              var t = this._data,
                e = t.words,
                r = 8 * this._nDataBytes,
                n = 8 * t.sigBytes;
              return e[n >>> 5] |= 128 << 24 - n % 32, e[14 + (64 + n >>> 9 << 4)] = i.floor(r / 4294967296), e[15 + (64 + n >>> 9 << 4)] = r, t.sigBytes = 4 * e.length, this._process(), this._hash;
            },
            clone: function () {
              var t = n.clone.call(this);
              return t._hash = this._hash.clone(), t;
            }
          });
        t.SHA256 = n._createHelper(a), t.HmacSHA256 = n._createHmacHelper(a);
      }(Math), u.SHA256;
    }, t.exports = n(r(68));
  },
  19: function (t, e, r) {
    "use strict";

    e.a = function (t) {
      var e = [];
      for (var r in t) {
        var n;
        t.hasOwnProperty(r) && ("pubProvidedId" === r ? e = e.concat(t.pubProvidedId) : (n = function (t, e) {
          var r = h[e];
          if (r && t) {
            var n = {};
            n.source = r.source;
            var i = u.isFn(r.getValue) ? r.getValue(t) : t;
            if (u.isStr(i)) {
              var s,
                o,
                a = {
                  id: i,
                  atype: r.atype
                };
              return !u.isFn(r.getUidExt) || (s = r.getUidExt(t)) && (a.ext = s), n.uids = [a], !u.isFn(r.getEidExt) || (o = r.getEidExt(t)) && (n.ext = o), n;
            }
          }
          return null;
        }(t[r], r)) && e.push(n));
      }
      return e;
    };
    var u = r(0),
      h = {
        intentIqId: {
          source: "intentiq.com",
          atype: 1
        },
        pubcid: {
          source: "pubcid.org",
          atype: 1
        },
        tdid: {
          source: "adserver.org",
          atype: 1,
          getUidExt: function () {
            return {
              rtiPartner: "TDID"
            };
          }
        },
        id5id: {
          getValue: function (t) {
            return t.uid;
          },
          source: "id5-sync.com",
          atype: 1,
          getEidExt: function (t) {
            if (t.ext) return t.ext;
          }
        },
        parrableId: {
          source: "parrable.com",
          atype: 1,
          getValue: function (t) {
            return t.eid ? t.eid : t.ccpaOptout ? "" : null;
          },
          getUidExt: function (t) {
            var e = u.pick(t, ["ibaOptout", "ccpaOptout"]);
            if (Object.keys(e).length) return e;
          }
        },
        idl_env: {
          source: "liveramp.com",
          atype: 1
        },
        lipb: {
          getValue: function (t) {
            return t.lipbid;
          },
          source: "liveintent.com",
          atype: 1,
          getEidExt: function (t) {
            if (Array.isArray(t.segments) && t.segments.length) return {
              segments: t.segments
            };
          }
        },
        britepoolid: {
          source: "britepool.com",
          atype: 1
        },
        lotamePanoramaId: {
          source: "crwdcntrl.net",
          atype: 1
        },
        criteoId: {
          source: "criteo.com",
          atype: 1
        },
        merkleId: {
          source: "merkleinc.com",
          atype: 1
        },
        netId: {
          source: "netid.de",
          atype: 1
        },
        sharedid: {
          source: "sharedid.org",
          atype: 1,
          getValue: function (t) {
            return t.id;
          },
          getUidExt: function (t) {
            return t && t.third ? {
              third: t.third
            } : void 0;
          }
        },
        IDP: {
          source: "zeotap.com",
          atype: 1
        },
        haloId: {
          source: "audigent.com",
          atype: 1
        },
        quantcastId: {
          source: "quantcast.com",
          atype: 1
        },
        idx: {
          source: "idx.lat",
          atype: 1
        },
        connectid: {
          source: "verizonmedia.com",
          atype: 1
        },
        fabrickId: {
          source: "neustar.biz",
          atype: 1
        }
      };
  },
  68: function (t, e, r) {
    var n;
    n = function () {
      var c, r, t, e, n, f, i, s, o, a, u, h;
      function l() {}
      return c = Math, r = Object.create || function (t) {
        var e;
        return l.prototype = t, e = new l(), l.prototype = null, e;
      }, e = (t = {}).lib = {}, n = e.Base = {
        extend: function (t) {
          var e = r(this);
          return t && e.mixIn(t), e.hasOwnProperty("init") && this.init !== e.init || (e.init = function () {
            e.$super.init.apply(this, arguments);
          }), (e.init.prototype = e).$super = this, e;
        },
        create: function () {
          var t = this.extend();
          return t.init.apply(t, arguments), t;
        },
        init: function () {},
        mixIn: function (t) {
          for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
          t.hasOwnProperty("toString") && (this.toString = t.toString);
        },
        clone: function () {
          return this.init.prototype.extend(this);
        }
      }, f = e.WordArray = n.extend({
        init: function (t, e) {
          t = this.words = t || [], this.sigBytes = null != e ? e : 4 * t.length;
        },
        toString: function (t) {
          return (t || s).stringify(this);
        },
        concat: function (t) {
          var e = this.words,
            r = t.words,
            n = this.sigBytes,
            i = t.sigBytes;
          if (this.clamp(), n % 4) for (var s = 0; s < i; s++) {
            var o = r[s >>> 2] >>> 24 - s % 4 * 8 & 255;
            e[n + s >>> 2] |= o << 24 - (n + s) % 4 * 8;
          } else for (s = 0; s < i; s += 4) e[n + s >>> 2] = r[s >>> 2];
          return this.sigBytes += i, this;
        },
        clamp: function () {
          var t = this.words,
            e = this.sigBytes;
          t[e >>> 2] &= 4294967295 << 32 - e % 4 * 8, t.length = c.ceil(e / 4);
        },
        clone: function () {
          var t = n.clone.call(this);
          return t.words = this.words.slice(0), t;
        },
        random: function (t) {
          for (var e = [], r = 0; r < t; r += 4) {
            var n = function (e) {
                var e = e,
                  r = 987654321,
                  n = 4294967295;
                return function () {
                  var t = ((r = 36969 * (65535 & r) + (r >> 16) & n) << 16) + (e = 18e3 * (65535 & e) + (e >> 16) & n) & n;
                  return t /= 4294967296, (t += .5) * (.5 < c.random() ? 1 : -1);
                };
              }(4294967296 * (i || c.random())),
              i = 987654071 * n();
            e.push(4294967296 * n() | 0);
          }
          return new f.init(e, t);
        }
      }), i = t.enc = {}, s = i.Hex = {
        stringify: function (t) {
          for (var e = t.words, r = t.sigBytes, n = [], i = 0; i < r; i++) {
            var s = e[i >>> 2] >>> 24 - i % 4 * 8 & 255;
            n.push((s >>> 4).toString(16)), n.push((15 & s).toString(16));
          }
          return n.join("");
        },
        parse: function (t) {
          for (var e = t.length, r = [], n = 0; n < e; n += 2) r[n >>> 3] |= parseInt(t.substr(n, 2), 16) << 24 - n % 8 * 4;
          return new f.init(r, e / 2);
        }
      }, o = i.Latin1 = {
        stringify: function (t) {
          for (var e = t.words, r = t.sigBytes, n = [], i = 0; i < r; i++) {
            var s = e[i >>> 2] >>> 24 - i % 4 * 8 & 255;
            n.push(String.fromCharCode(s));
          }
          return n.join("");
        },
        parse: function (t) {
          for (var e = t.length, r = [], n = 0; n < e; n++) r[n >>> 2] |= (255 & t.charCodeAt(n)) << 24 - n % 4 * 8;
          return new f.init(r, e);
        }
      }, a = i.Utf8 = {
        stringify: function (t) {
          try {
            return decodeURIComponent(escape(o.stringify(t)));
          } catch (t) {
            throw new Error("Malformed UTF-8 data");
          }
        },
        parse: function (t) {
          return o.parse(unescape(encodeURIComponent(t)));
        }
      }, u = e.BufferedBlockAlgorithm = n.extend({
        reset: function () {
          this._data = new f.init(), this._nDataBytes = 0;
        },
        _append: function (t) {
          "string" == typeof t && (t = a.parse(t)), this._data.concat(t), this._nDataBytes += t.sigBytes;
        },
        _process: function (t) {
          var e = this._data,
            r = e.words,
            n = e.sigBytes,
            i = this.blockSize,
            s = n / (4 * i),
            o = (s = t ? c.ceil(s) : c.max((0 | s) - this._minBufferSize, 0)) * i,
            a = c.min(4 * o, n);
          if (o) {
            for (var u = 0; u < o; u += i) this._doProcessBlock(r, u);
            var h = r.splice(0, o);
            e.sigBytes -= a;
          }
          return new f.init(h, a);
        },
        clone: function () {
          var t = n.clone.call(this);
          return t._data = this._data.clone(), t;
        },
        _minBufferSize: 0
      }), e.Hasher = u.extend({
        cfg: n.extend(),
        init: function (t) {
          this.cfg = this.cfg.extend(t), this.reset();
        },
        reset: function () {
          u.reset.call(this), this._doReset();
        },
        update: function (t) {
          return this._append(t), this._process(), this;
        },
        finalize: function (t) {
          return t && this._append(t), this._doFinalize();
        },
        blockSize: 16,
        _createHelper: function (r) {
          return function (t, e) {
            return new r.init(e).finalize(t);
          };
        },
        _createHmacHelper: function (r) {
          return function (t, e) {
            return new h.HMAC.init(r, e).finalize(t);
          };
        }
      }), h = t.algo = {}, t;
    }, t.exports = n();
  }
}, [179]);
const nativeSetInterval = window.setInterval;
stpdChunk([362], {
  187: function (e, r, n) {
    e.exports = n(188);
  },
  188: function (e, r, n) {
    "use strict";

    Object.defineProperty(r, "__esModule", {
      value: !0
    }), n.d(r, "spec", function () {
      return d;
    });
    var t = n(1),
      y = n(3),
      g = n(2),
      f = n(11),
      I = n(0),
      _ = "adform",
      d = {
        code: _,
        gvlid: 50,
        supportedMediaTypes: [g.b, g.d],
        isBidRequestValid: function (e) {
          return !!e.params.mid;
        },
        buildRequests: function (e, r) {
          for (var n, t, d, s, i, o, u, a, p = y.b.getConfig("currency.adServerCurrency"), c = [], g = [["adxDomain", "adx.adform.net"], ["fd", 1], ["url", null], ["tid", null], ["eids", function (e) {
              if (I.isArray(e) && 0 < e.length) {
                var r = function (e) {
                  return e.reduce(function (n, e) {
                    var t = e.source;
                    return n[t] = n[t] || {}, e.uids.forEach(function (e) {
                      var r = e.id + "";
                      n[t][r] = n[t][r] || [], n[t][r].push(e.atype);
                    }), n;
                  }, {});
                }(e);
                return btoa(JSON.stringify(r));
              }
            }(I.deepAccess(e, "0.userIdAsEids"))]], f = JSON.parse(JSON.stringify(e)), h = f[0] && f[0].bidder || _, l = 0, v = f.length; l < v; l++) {
            for ("net" !== (d = f[l]).params.priceType && "net" !== d.params.pt || (u = "net"), n = 0, t = g.length; n < t; n++) (i = d[s = g[n][0]] || d.params[s]) && (d[s] = d.params[s] = null, g[n][1] = i);
            (o = d.params).transactionId = d.transactionId, o.rcur = o.rcur || p, c.push(function (e) {
              var r,
                n = [];
              for (r in e) e.hasOwnProperty(r) && e[r] && n.push(r, "=", e[r], "&");
              return encodeURIComponent(btoa(n.join("").slice(0, -1)));
            }(o));
          }
          c.unshift("https://" + g[0][1] + "/adx/?rp=4"), u = u || "gross", c.push("pt=" + u), c.push("stid=" + e[0].auctionId);
          var b = I.deepAccess(r, "gdprConsent.gdprApplies"),
            m = I.deepAccess(r, "gdprConsent.consentString");
          for (void 0 !== b && (a = {
            gdpr: b,
            gdpr_consent: m
          }, c.push("gdpr=" + (1 & b)), c.push("gdpr_consent=" + m)), r && r.uspConsent && c.push("us_privacy=" + r.uspConsent), l = 1, v = g.length; l < v; l++) s = g[l][0], (i = g[l][1]) && c.push(s + "=" + encodeURIComponent(i));
          return {
            method: "GET",
            url: c.join("&"),
            bids: e,
            netRevenue: u,
            bidder: h,
            gdpr: a
          };
        },
        interpretResponse: function (e, r) {
          for (var n, t, d, s, i = {
              banner: 1,
              vast_content: 1,
              vast_url: 1
            }, o = [], u = r.bids, a = e.body, p = 0; p < a.length; p++) s = "banner" === (t = a[p]).response ? g.b : g.d, d = u[p], i[t.response] && (function (e, r) {
            for (var n = 0, t = r.length; n < t; n++) if (e.width == r[n][0] && e.height == r[n][1]) return !0;
            return !1;
          }(t, I.getAdUnitSizes(d)) || s === g.d) && (n = {
            requestId: d.bidId,
            cpm: t.win_bid,
            width: t.width,
            height: t.height,
            creativeId: d.bidId,
            dealId: t.deal_id,
            currency: t.win_cur,
            netRevenue: "gross" !== r.netRevenue,
            ttl: 360,
            ad: t.banner,
            bidderCode: r.bidder,
            transactionId: d.transactionId,
            vastUrl: t.vast_url,
            vastXml: t.vast_content,
            mediaType: s
          }, d.renderer || s !== g.d || "outstream" !== I.deepAccess(d, "mediaTypes.video.context") || (n.renderer = f.a.install({
            id: d.bidId,
            url: "https://s2.adform.net/banners/scripts/video/outstream/render.js"
          }), n.renderer.setRender(c)), r.gdpr && (n.gdpr = r.gdpr.gdpr, n.gdpr_consent = r.gdpr.gdpr_consent), o.push(n));
          return o;
          function c(e) {
            e.renderer.push(function () {
              window.Adform.renderOutstream(e);
            });
          }
        }
      };
    Object(t.registerBidder)(d);
  }
}, [187]);
stpdChunk([351], {
  211: function (e, r, n) {
    e.exports = n(212);
  },
  212: function (e, r, n) {
    "use strict";

    Object.defineProperty(r, "__esModule", {
      value: !0
    }), n.d(r, "spec", function () {
      return i;
    });
    var o = n(0),
      t = n(1),
      i = {
        code: "admixer",
        aliases: ["go2net"],
        supportedMediaTypes: ["banner", "video"],
        isBidRequestValid: function (e) {
          return !!e.params.zone;
        },
        buildRequests: function (e, r) {
          var n = {
            imps: []
          };
          r && (r.refererInfo && r.refererInfo.referer && (n.referrer = encodeURIComponent(r.refererInfo.referer)), r.gdprConsent && (n.gdprConsent = {
            consentString: r.gdprConsent.consentString,
            gdprApplies: "boolean" != typeof r.gdprConsent.gdprApplies || r.gdprConsent.gdprApplies
          }), r.uspConsent && (n.uspConsent = r.uspConsent)), e.forEach(function (e) {
            n.imps.push(e);
          });
          var t = JSON.stringify(n);
          return {
            method: "GET",
            url: "https://inv-nets.admixer.net/prebid.1.1.aspx",
            data: "data=".concat(t)
          };
        },
        interpretResponse: function (e) {
          var n = [];
          try {
            var r = e.body,
              t = (r = void 0 === r ? {} : r).ads;
            (void 0 === t ? [] : t).forEach(function (e) {
              var r = {
                requestId: e.bidId,
                cpm: e.cpm,
                width: e.width,
                height: e.height,
                ad: e.ad,
                ttl: e.ttl,
                creativeId: e.creativeId,
                netRevenue: e.netRevenue,
                currency: e.currency,
                vastUrl: e.vastUrl,
                dealId: e.dealId
              };
              n.push(r);
            });
          } catch (e) {
            o.logError(e);
          }
          return n;
        },
        getUserSyncs: function (a, e) {
          var p = [];
          return e.forEach(function (e) {
            var r = e.body,
              n = (r = void 0 === r ? {} : r).cm,
              t = void 0 === n ? {} : n,
              o = t.pixels,
              i = void 0 === o ? [] : o,
              d = t.iframes,
              s = void 0 === d ? [] : d;
            a.pixelEnabled && i.forEach(function (e) {
              return p.push({
                type: "image",
                url: e
              });
            }), a.iframeEnabled && s.forEach(function (e) {
              return p.push({
                type: "iframe",
                url: e
              });
            });
          }), p;
        }
      };
    Object(t.registerBidder)(i);
  }
}, [211]);
stpdChunk([348], {
  217: function (e, n, r) {
    e.exports = r(218);
  },
  218: function (e, n, r) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), r.d(n, "spec", function () {
      return t;
    });
    var d = r(0),
      a = r(1);
    function s(e, n, r) {
      var s,
        t = {
          id: n,
          aosspsizes: []
        };
      r && (t.gdpr_consent = r.consentString || void 0, t.gdpr = r.gdprApplies ? 1 : 0);
      var a,
        i,
        o,
        c = {};
      return d._each(e, function (e, n) {
        s = s || e.params.emiter;
        var r = d.parseSizesInput(e.mediaTypes.banner.sizes).join("_"),
          a = e.params.slaveId.replace("adocean", "");
        t.aosspsizes.push(a + "~" + r), c[n] = e.bidId;
      }), t.aosspsizes = t.aosspsizes.join("-"), {
        method: "GET",
        url: (a = s, i = t, o = [], d._each(i, function (e, n) {
          o.push(n + "=" + encodeURIComponent(e));
        }), "https://" + a + "/_" + Math.random().toString().slice(2) + "/ad.json?" + o.join("&")),
        data: "",
        bidIdMap: c
      };
    }
    var t = {
      code: "adocean",
      isBidRequestValid: function (n) {
        return !["slaveId", "masterId", "emiter"].some(function (e) {
          return !d.isStr(n.params[e]) || !n.params[e].length;
        }) && !!n.mediaTypes.banner;
      },
      buildRequests: function (e, r) {
        var n = {},
          a = [];
        return d._each(e, function (e) {
          !function (e, n) {
            for (var r = e.params.masterId, a = e.params.slaveId, s = n[r] = n[r] || [{}], t = 0; s[t] && s[t][a];) t++;
            s[t] || (s[t] = {}), s[t][a] = e;
          }(e, n);
        }), d._each(n, function (e, n) {
          d._each(e, function (e) {
            a.push(s(e, n, r.gdprConsent));
          });
        }), a;
      },
      interpretResponse: function (e, i) {
        var o = [];
        return d.isArray(e.body) && d._each(e.body, function (e) {
          var n, r, a, s, t;
          n = e, r = o, t = i.bidIdMap[n.id], !n.error && t && (a = '<script type="application/javascript">(function(){var wu="' + (n.winUrl || "") + '",su="' + (n.statsUrl || "") + '".replace(/\\[TIMESTAMP\\]/,(new Date()).getTime());', a += "if(navigator.sendBeacon){if(wu){navigator.sendBeacon(wu)||((new Image(1,1)).src=wu)};if(su){navigator.sendBeacon(su)||((new Image(1,1)).src=su)}}", a += "else{if(wu){(new Image(1,1)).src=wu;}if(su){(new Image(1,1)).src=su;}}", a += "})();<\/script>", s = {
            ad: a += decodeURIComponent(n.code),
            cpm: parseFloat(n.price),
            currency: n.currency,
            height: parseInt(n.height, 10),
            requestId: t,
            width: parseInt(n.width, 10),
            netRevenue: !1,
            ttl: parseInt(n.ttl),
            creativeId: n.crid
          }, r.push(s));
        }), o;
      }
    };
    Object(a.registerBidder)(t);
  }
}, [217]);
stpdChunk([331], {
  261: function (e, t, n) {
    e.exports = n(262);
  },
  262: function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), n.d(t, "spec", function () {
      return S;
    });
    var r = n(1),
      s = n(2),
      l = n(0),
      d = n(3),
      c = n(7);
    function i(t, e) {
      var n,
        r = Object.keys(t);
      return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })), r.push.apply(r, n)), r;
    }
    function u(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2 ? i(Object(n), !0).forEach(function (e) {
          p(t, e, n[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
        });
      }
      return t;
    }
    function p(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e;
    }
    function o(e) {
      return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      })(e);
    }
    var f = Object(c.b)(737, "amx"),
      b = /\.com?\.\w{2,4}$/,
      a = /^\s*<\?xml[^\?]+\?>/,
      m = /^\s*<\??(?:vast|xml)/i,
      h = "__amuidpb";
    var O = function (e, t) {
      return e.concat(Object(l.deepAccess)(t, "".concat(s.b, ".sizes"), []) || []).concat(Object(l.deepAccess)(t, "".concat(s.d, ".sizes"), []) || []).sort(function (e, t) {
        return t[0] * t[1] - e[0] * e[1];
      })[0];
    };
    function g(e, t) {
      return null == e ? [] : e.map(t).reduce(function (e, t) {
        return null != t && e.concat(t);
      }, []);
    }
    function y(e) {
      return null != (t = e.adm) && m.test(t) ? s.d : s.b;
      var t;
    }
    function j(e, t) {
      return null == e || o(e) === t;
    }
    var v = encodeURIComponent;
    function I(e) {
      var t = {};
      return Object(l._each)(e, function (e) {
        t[e.bidId] = function (e) {
          var t = O(e.sizes, e.mediaTypes) || [0, 0],
            n = e.mediaType === s.d || s.d in e.mediaTypes,
            r = n || 100 < t[1],
            c = Object(l.deepAccess)(e, "params.tagId"),
            i = null != e.params && "string" == typeof e.params.adUnitId ? e.params.adUnitId : e.adUnitCode,
            u = [e.sizes, Object(l.deepAccess)(e, "mediaTypes.".concat(s.b, ".sizes"), []) || [], Object(l.deepAccess)(e, "mediaTypes.".concat(s.d, ".sizes"), []) || []],
            o = {
              au: i,
              av: r,
              vr: n,
              ms: u,
              aw: t[0],
              ah: t[1],
              tf: 0
            };
          "string" == typeof c && 0 < c.length && (o.i = c);
          return o;
        }(e);
      }), t;
    }
    function w(e, t) {
      return Object(l.triggerPixel)("".concat("https://1x1.a-mo.net/hbx/", "g_").concat(e, "?").concat(Object(l.formatQS)(u(u({}, t), {}, {
        ts: Date.now(),
        eid: Object(l.getUniqueIdentifierStr)()
      }))));
    }
    function A(e) {
      if ("undefined" == typeof DOMParser || null == DOMParser.prototype.parseFromString) return function (e) {
        var t = [];
        Object(l._each)([e.nurl].concat(null != e.ext && null != e.ext.himp ? e.ext.himp : []), function (e) {
          null != e && t.push("<Impression><![CDATA[".concat(e, "]]></Impression>"));
        });
        var n = e.adm.indexOf("<Impression");
        return e.adm.slice(0, n) + t.join("") + e.adm.slice(n);
      }(e);
      var r = new DOMParser().parseFromString(e.adm, "text/xml");
      if (null == r || null != r.querySelector("parsererror")) return null;
      var c = r.querySelector("InLine,Wrapper");
      if (null == c) return null;
      var t = [e.nurl].concat(null != e.ext && null != e.ext.himp ? e.ext.himp : []).filter(function (e) {
        return null != e;
      });
      Object(l._each)(t, function (e) {
        var t = r.createElement("Impression"),
          n = r.createCDATASection(e);
        t.appendChild(n), c.appendChild(t);
      });
      var n,
        i,
        u = a.exec(e.adm);
      return (null != u ? u[0] : '<?xml version="'.concat((i = r).xmlVersion, '" encoding="').concat(i.xmlEncoding, '" ?>')) + ("outerHTML" in (n = r.documentElement) && null != n.outerHTML ? n.outerHTML : new XMLSerializer().serializeToString(n));
    }
    var S = {
      code: "amx",
      supportedMediaTypes: [s.b, s.d],
      isBidRequestValid: function (e) {
        return j(Object(l.deepAccess)(e, "params.endpoint", null), "string") && j(Object(l.deepAccess)(e, "params.tagId", null), "string") && j(Object(l.deepAccess)(e, "params.testMode", null), "boolean");
      },
      buildRequests: function (e, t) {
        var n,
          r,
          c,
          i,
          u = function (e) {
            var t = e.refererInfo;
            if (null == t) return Object(l.parseUrl)(location.href);
            if (t.isAmp && null != t.referer) return Object(l.parseUrl)(t.referer);
            var n = 0 < t.numIframes && null != t.stack[0] ? t.stack[0] : location.href;
            return Object(l.parseUrl)(n);
          }(t),
          o = Object(l.deepAccess)(e[0], "params.tagId", null),
          a = Object(l.deepAccess)(e[0], "params.testMode", 0),
          s = null != e[0] ? e[0] : {
            bidderRequestsCount: 0,
            bidderWinsCount: 0,
            bidRequestsCount: 0
          };
        return {
          data: {
            a: t.auctionId,
            B: 0,
            b: u.host,
            brc: s.bidderRequestsCount || 0,
            bwc: s.bidderWinsCount || 0,
            trc: s.bidRequestsCount || 0,
            tm: a,
            V: "4.21.0-pre",
            i: a && null != o ? o : (c = (r = u).hostname.split("."), i = c.slice(c.length - (b.test(r.hostname) ? 3 : 2)).join("."), btoa(i).replace(/=+$/, "")),
            l: {},
            f: .01,
            cv: "pba1.2.1",
            st: "prebid",
            h: screen.height,
            w: screen.width,
            gs: Object(l.deepAccess)(t, "gdprConsent.gdprApplies", ""),
            gc: Object(l.deepAccess)(t, "gdprConsent.consentString", ""),
            u: Object(l.deepAccess)(t, "refererInfo.canonicalUrl", u.href),
            do: u.hostname,
            re: Object(l.deepAccess)(t, "refererInfo.referer"),
            am: function () {
              try {
                return f.getDataFromLocalStorage(h);
              } catch (e) {
                return null;
              }
            }(),
            usp: t.uspConsent || "1---",
            smt: 1,
            d: "",
            m: I(e),
            cpp: d.b.getConfig("coppa") ? 1 : 0,
            fpd: d.b.getConfig("fpd"),
            eids: (n = e.reduce(function (t, e) {
              return null == e || null == e.userIdAsEids || Object(l._each)(e.userIdAsEids, function (e) {
                null != e && (t[e.source] = e);
              }), t;
            }, {}), null != Object.values ? Object.values(n) : Object.keys(n).map(function (e) {
              return n[e];
            }))
          },
          method: "POST",
          url: Object(l.deepAccess)(e[0], "params.endpoint", "https://prebid.a-mo.net/a/c"),
          withCredentials: !0
        };
      },
      getUserSyncs: function (n, e) {
        if (null == e || 0 === e.length) return [];
        var r = [];
        return Object(l._each)(e, function (e) {
          var t = e.body;
          null != t && null != t.p && t.p.hreq && Object(l._each)(t.p.hreq, function (e) {
            var t = -1 !== e.indexOf("__st=iframe") ? "iframe" : "image";
            !n.iframeEnabled && "image" != t || r.push({
              url: e,
              type: t
            });
          });
        }), r;
      },
      interpretResponse: function (e, a) {
        var t = e.body;
        return null == t || "string" == typeof t ? [] : (t.am && "string" == typeof t.am && function (e) {
          try {
            f.setDataInLocalStorage(h, e);
          } catch (e) {}
        }(t.am), g(Object.keys(t.r), function (o) {
          return g(t.r[o], function (e) {
            return e.b.map(function (e) {
              var t,
                n,
                r = y(e),
                c = r === s.b ? (t = e, n = Object(l.deepAccess)(t, "ext.himp", []).concat(null != t.nurl ? [t.nurl] : []).filter(function (e) {
                  return null != e && 0 < e.length;
                }).map(function (e) {
                  return '<img src="'.concat(e, '" width="0" height="0"/>');
                }).join(""), t.adm + n) : A(e);
              if (null == c) return null;
              var i,
                u = function (e, t, n) {
                  if (null != e.w && 1 < e.w && null != e.h && 1 < e.h) return [e.w, e.h];
                  var r = t.m[n];
                  return null == r ? [0, 0] : [r.aw, r.ah];
                }(e, a.data, o);
              return p(i = {
                requestId: o,
                cpm: e.price,
                width: u[0],
                height: u[1],
                creativeId: e.crid,
                currency: "USD",
                netRevenue: !0
              }, r === s.d ? "vastXml" : "ad", c), p(i, "meta", {
                advertiserDomains: e.adomain,
                mediaType: r
              }), p(i, "ttl", r === s.d ? 90 : 70), i;
            });
          }).filter(function (e) {
            return null != e;
          });
        }));
      },
      onSetTargeting: function (e) {
        var t, n;
        null != e && w("pbst", {
          A: e.bidder,
          w: e.width,
          h: e.height,
          bid: e.adId,
          c1: e.mediaType,
          np: e.cpm,
          aud: e.requestId,
          a: e.adUnitCode,
          c2: (t = e.adserverTargeting, n = [], Object.keys(t || {}).forEach(function (e) {
            n.push(v(e) + "=" + v(String(t[e])));
          }), v(n.join("&")))
        });
      },
      onTimeout: function (e) {
        null != e && w("pbto", {
          A: e.bidder,
          bid: e.bidId,
          a: e.adUnitCode,
          cn: e.timeout,
          aud: e.auctionId
        });
      },
      onBidWon: function (e) {
        null != e && w("pbwin", {
          A: e.bidder,
          w: e.width,
          h: e.height,
          bid: e.adId,
          C: e.mediaType === s.b ? 0 : 1,
          np: e.cpm,
          a: e.adUnitCode
        });
      }
    };
    Object(r.registerBidder)(S);
  }
}, [261]);
const nativeClearInterval = window.clearInterval;
stpdChunk([329], {
  265: function (e, t, r) {
    e.exports = r(266);
  },
  266: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), r.d(t, "spec", function () {
      return M;
    });
    var s = r(0),
      n = r(1),
      i = r(2);
    function a() {
      return (a = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }).apply(this, arguments);
    }
    function c(e) {
      return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      })(e);
    }
    function o() {
      var e = p(["dcn=", "&pos=", "&cmd=bid", ""]);
      return o = function () {
        return e;
      }, e;
    }
    function u() {
      var e = p(["", "/bidRequest?"]);
      return u = function () {
        return e;
      }, e;
    }
    function d() {
      var e = p(["", "/pubapi/3.0/", "/", "/", "/", "/ADTECH;v=2;cmd=bid;cors=yes;alias=", ";misc=", ";", ""]);
      return d = function () {
        return e;
      }, e;
    }
    function p(e, t) {
      return t = t || e.slice(0), Object.freeze(Object.defineProperties(e, {
        raw: {
          value: Object.freeze(t)
        }
      }));
    }
    var l = {
        AOL: "aol",
        VERIZON: "verizon",
        ONEMOBILE: "onemobile",
        ONEDISPLAY: "onedisplay"
      },
      m = {
        GET: "display-get"
      },
      f = {
        GET: "mobile-get",
        POST: "mobile-post"
      },
      b = {
        TAG: "iframe",
        TYPE: "iframe"
      },
      v = {
        TAG: "img",
        TYPE: "image"
      },
      h = ["adserver.org", "criteo.com", "id5-sync.com", "intentiq.com", "liveintent.com", "quantcast.com", "verizonmedia.com", "liveramp.com"],
      g = S(d(), "host", "network", "placement", "pageid", "sizeid", "alias", "misc", "dynamicParams"),
      y = S(u(), "host"),
      O = S(o(), "dcn", "pos", "dynamicParams"),
      E = {
        us: "adserver-us.adtech.advertising.com",
        eu: "adserver-eu.adtech.advertising.com",
        as: "adserver-as.adtech.advertising.com"
      },
      I = "https",
      P = 1;
    function S(a) {
      for (var e = arguments.length, r = new Array(1 < e ? e - 1 : 0), t = 1; t < e; t++) r[t - 1] = arguments[t];
      return function () {
        for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
        var i = n[n.length - 1] || {},
          o = [a[0]];
        return r.forEach(function (e, t) {
          var r = s.isInteger(e) ? n[e] : i[e];
          o.push(r, a[t + 1]);
        }), o.join("");
      };
    }
    function T(e) {
      return e === l.AOL || e === l.VERIZON || e === l.ONEMOBILE;
    }
    function x(e) {
      if (T(e.bidder) && e.params.id && e.params.imp && e.params.imp[0]) {
        var t = e.params.imp[0];
        return t.id && t.tagid && (t.banner && t.banner.w && t.banner.h || t.video && t.video.mimes && t.video.minduration && t.video.maxduration);
      }
    }
    function R(e) {
      return T(e.bidder) && e.params.dcn && e.params.pos;
    }
    function C(e) {
      return ((t = e.bidder) === l.AOL || t === l.VERIZON || t === l.ONEDISPLAY) && e.params.placement && e.params.network;
      var t;
    }
    function A(e) {
      return e.userIdAsEids.filter(function (e) {
        return -1 !== h.indexOf(e.source);
      });
    }
    var M = {
      code: l.AOL,
      gvlid: 25,
      aliases: [l.ONEMOBILE, l.ONEDISPLAY, l.VERIZON],
      supportedMediaTypes: [i.b],
      isBidRequestValid: function (e) {
        return C(e) || R(t = e) || x(t);
        var t;
      },
      buildRequests: function (e, t) {
        var n = this,
          i = {};
        return t && (i.gdpr = t.gdprConsent, i.uspConsent = t.uspConsent), e.map(function (e) {
          var t,
            r = R(t = e) ? f.GET : x(t) ? f.POST : C(t) ? m.GET : void 0;
          if (r) return n.formatBidRequest(r, e, i);
        });
      },
      interpretResponse: function (e, t) {
        var r = e.body;
        if (r) {
          var n = this._parseBidResponse(r, t);
          if (n) return n;
        } else s.logError("Empty bid response", t.bidderCode, r);
      },
      getUserSyncs: function (e, t) {
        var r = !s.isEmpty(t) && t[0].body;
        return r && r.ext && r.ext.pixels ? this.parsePixelItems(r.ext.pixels) : [];
      },
      formatBidRequest: function (e, t, r) {
        var n;
        switch (e) {
          case m.GET:
            n = {
              url: this.buildMarketplaceUrl(t, r),
              method: "GET",
              ttl: 60
            };
            break;
          case f.GET:
            n = {
              url: this.buildOneMobileGetUrl(t, r),
              method: "GET",
              ttl: 3600
            };
            break;
          case f.POST:
            n = {
              url: this.buildOneMobileBaseUrl(t),
              method: "POST",
              ttl: 3600,
              data: this.buildOpenRtbRequestData(t, r),
              options: {
                contentType: "application/json",
                customHeaders: {
                  "x-openrtb-version": "2.2"
                }
              }
            };
        }
        return n.bidderCode = t.bidder, n.bidId = t.bidId, n.userSyncOn = t.params.userSyncOn, n;
      },
      buildMarketplaceUrl: function (e, t) {
        var r,
          n = e.params,
          i = n.server,
          o = n.region || "us";
        return E.hasOwnProperty(o) || (s.logWarn("Unknown region '".concat(o, "' for AOL bidder.")), o = "us"), r = i || E[o], n.region = o, this.applyProtocol(g({
          host: r,
          network: n.network,
          placement: parseInt(n.placement),
          pageid: n.pageId || 0,
          sizeid: n.sizeId || 0,
          alias: n.alias || s.getUniqueIdentifierStr(),
          misc: new Date().getTime(),
          dynamicParams: this.formatMarketplaceDynamicParams(n, t)
        }));
      },
      buildOneMobileGetUrl: function (e, t) {
        var r = e.params,
          n = r.dcn,
          i = r.pos,
          o = r.ext;
        "object" === c(e.userId) && (o = o || {}, A(e).forEach(function (e) {
          o["eid" + e.source] = e.uids[0].id;
        }));
        var a,
          s = this.buildOneMobileBaseUrl(e);
        return n && i && (a = this.formatOneMobileDynamicParams(o, t), s += O({
          dcn: n,
          pos: i,
          dynamicParams: a
        })), s;
      },
      buildOneMobileBaseUrl: function (e) {
        return this.applyProtocol(y({
          host: e.params.host || "c2shb.ssp.yahoo.com"
        }));
      },
      applyProtocol: function (e) {
        return /^https?:\/\//i.test(e) ? e : 0 === e.indexOf("//") ? "".concat(I, ":").concat(e) : "".concat(I, "://").concat(e);
      },
      formatMarketplaceDynamicParams: function (e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : {},
          n = 1 < arguments.length && void 0 !== t ? t : {},
          i = {};
        r.bidFloor && (i.bidfloor = r.bidFloor), a(i, this.formatKeyValues(r.keyValues)), a(i, this.formatConsentData(n));
        var o = "";
        return s._each(i, function (e, t) {
          o += "".concat(t, "=").concat(encodeURIComponent(e), ";");
        }), o;
      },
      formatOneMobileDynamicParams: function (e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : {},
          n = 1 < arguments.length && void 0 !== t ? t : {};
        this.isSecureProtocol() && (r.secure = P), a(r, this.formatConsentData(n));
        var i = "";
        return s._each(r, function (e, t) {
          i += "&".concat(t, "=").concat(encodeURIComponent(e));
        }), i;
      },
      buildOpenRtbRequestData: function (e, t) {
        var r,
          n = 1 < arguments.length && void 0 !== t ? t : {},
          i = {
            id: e.params.id,
            imp: e.params.imp
          };
        return this.isEUConsentRequired(n) && (s.deepSetValue(i, "regs.ext.gdpr", P), n.gdpr.consentString && s.deepSetValue(i, "user.ext.consent", n.gdpr.consentString)), n.uspConsent && s.deepSetValue(i, "regs.ext.us_privacy", n.uspConsent), "object" === c(e.userId) && (i.user = i.user || {}, i.user.ext = i.user.ext || {}, 0 < (r = A(e)).length && (i.user.ext.eids = r)), i;
      },
      isEUConsentRequired: function (e) {
        return !!(e && e.gdpr && e.gdpr.gdprApplies);
      },
      formatKeyValues: function (e) {
        var r = {};
        return s._each(e, function (e, t) {
          r["kv".concat(t)] = e;
        }), r;
      },
      formatConsentData: function (e) {
        var t = {};
        return this.isEUConsentRequired(e) && (t.gdpr = P, e.gdpr.consentString && (t.euconsent = e.gdpr.consentString)), e.uspConsent && (t.us_privacy = e.uspConsent), t;
      },
      parsePixelItems: function (e) {
        var t,
          n = /\w*(?=\s)/,
          i = /src=("|')(.*?)\1/,
          o = [];
        return !e || (t = e.match(/(img|iframe)[\s\S]*?src\s*=\s*("|')(.*?)\2/gi)) && t.forEach(function (e) {
          var t = e.match(n)[0],
            r = e.match(i)[2];
          t && t && o.push({
            type: t === v.TAG ? v.TYPE : b.TYPE,
            url: r
          });
        }), o;
      },
      _parseBidResponse: function (e, t) {
        var r, n;
        try {
          r = e.seatbid[0].bid[0];
        } catch (e) {
          return;
        }
        if (r.ext && r.ext.encp) n = r.ext.encp;else if (null === (n = r.price) || isNaN(n)) return void s.logError("Invalid price in bid response", l.AOL, r);
        return {
          bidderCode: t.bidderCode,
          requestId: t.bidId,
          ad: r.adm,
          cpm: n,
          width: r.w,
          height: r.h,
          creativeId: r.crid || 0,
          pubapiId: e.id,
          currency: e.cur || "USD",
          dealId: r.dealid,
          netRevenue: !0,
          ttl: t.ttl
        };
      },
      isOneMobileBidder: T,
      isSecureProtocol: function () {
        return "https:" === document.location.protocol;
      }
    };
    Object(n.registerBidder)(M);
  }
}, [265]);
stpdChunk([326], {
  275: function (e, r, a) {
    e.exports = a(276);
  },
  276: function (e, r, a) {
    "use strict";

    Object.defineProperty(r, "__esModule", {
      value: !0
    }), a.d(r, "spec", function () {
      return k;
    });
    var f = a(11),
      I = a(0),
      w = a(3),
      v = a(1),
      g = a(2),
      p = a(23),
      t = a(10),
      A = a.n(t),
      n = a(12),
      x = a.n(n),
      y = a(25),
      i = a(7);
    function s(e) {
      return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      })(e);
    }
    function b() {
      return (b = Object.assign || function (e) {
        for (var r = 1; r < arguments.length; r++) {
          var a = arguments[r];
          for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
        }
        return e;
      }).apply(this, arguments);
    }
    function C(e) {
      return function (e) {
        if (Array.isArray(e)) return o(e);
      }(e) || function (e) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
      }(e) || function (e, r) {
        if (!e) return;
        if ("string" == typeof e) return o(e, r);
        var a = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === a && e.constructor && (a = e.constructor.name);
        if ("Map" === a || "Set" === a) return Array.from(e);
        if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return o(e, r);
      }(e) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function o(e, r) {
      (null == r || r > e.length) && (r = e.length);
      for (var a = 0, t = new Array(r); a < r; a++) t[a] = e[a];
      return t;
    }
    var d = "appnexus",
      S = "https://ib.adnxs.com/ut/v3/prebid",
      c = ["id", "minduration", "maxduration", "skippable", "playback_method", "frameworks", "context", "skipoffset"],
      T = ["age", "externalUid", "segments", "gender", "dnt", "language"],
      E = ["geo", "device_id"],
      O = ["enabled", "dongle", "member_id", "debug_timeout"],
      u = {
        playback_method: {
          unknown: 0,
          auto_play_sound_on: 1,
          auto_play_sound_off: 2,
          click_to_play: 3,
          mouse_over: 4,
          auto_play_sound_unknown: 5
        },
        context: {
          unknown: 0,
          pre_roll: 1,
          mid_roll: 2,
          post_roll: 3,
          outstream: 4,
          "in-banner": 5
        }
      },
      m = {
        body: "description",
        body2: "desc2",
        cta: "ctatext",
        image: {
          serverName: "main_image",
          requiredParams: {
            required: !0
          }
        },
        icon: {
          serverName: "icon",
          requiredParams: {
            required: !0
          }
        },
        sponsoredBy: "sponsored_by",
        privacyLink: "privacy_link",
        salePrice: "saleprice",
        displayUrl: "displayurl"
      },
      l = "<script",
      h = /\/\/cdn\.adnxs\.com\/v/,
      _ = "trk.js",
      R = Object(i.b)(32, d),
      k = {
        code: d,
        gvlid: 32,
        aliases: [{
          code: "appnexusAst",
          gvlid: 32
        }, {
          code: "brealtime"
        }, {
          code: "emxdigital",
          gvlid: 183
        }, {
          code: "pagescience"
        }, {
          code: "defymedia"
        }, {
          code: "gourmetads"
        }, {
          code: "matomy"
        }, {
          code: "featureforward"
        }, {
          code: "oftmedia"
        }, {
          code: "districtm",
          gvlid: 144
        }, {
          code: "adasta"
        }, {
          code: "beintoo",
          gvlid: 618
        }],
        supportedMediaTypes: [g.b, g.d, g.c],
        isBidRequestValid: function (e) {
          return !!(e.params.placementId || e.params.member && e.params.invCode);
        },
        buildRequests: function (e, r) {
          var t = e.map(N),
            n = A()(e, M),
            i = {};
          !0 === w.b.getConfig("coppa") && (i = {
            coppa: !0
          }), n && Object.keys(n.params.user).filter(function (e) {
            return x()(T, e);
          }).forEach(function (e) {
            var r,
              a = I.convertCamelToUnderscore(e);
            "segments" === e && I.isArray(n.params.user[e]) ? (r = [], n.params.user[e].forEach(function (e) {
              I.isNumber(e) ? r.push({
                id: e
              }) : I.isPlainObject(e) && r.push(e);
            }), i[a] = r) : "segments" !== e && (i[a] = n.params.user[e]);
          });
          var a,
            s = A()(e, B);
          s && s.params && s.params.app && (a = {}, Object.keys(s.params.app).filter(function (e) {
            return x()(E, e);
          }).forEach(function (e) {
            return a[e] = s.params.app[e];
          }));
          var o,
            d = A()(e, D);
          d && d.params && s.params.app && s.params.app.id && (o = {
            appid: d.params.app.id
          });
          var p = {},
            c = {},
            u = R.getCookie("apn_prebid_debug") || null;
          if (u) try {
            p = JSON.parse(u);
          } catch (e) {
            I.logError("AppNexus Debug Auction Cookie Error:\n\n" + e);
          } else {
            var m = A()(e, V);
            m && m.debug && (p = m.debug);
          }
          p && p.enabled && Object.keys(p).filter(function (e) {
            return x()(O, e);
          }).forEach(function (e) {
            c[e] = p[e];
          });
          var l,
            f = A()(e, z),
            v = f ? parseInt(f.params.member, 10) : 0,
            g = e[0].schain,
            y = A()(e, W),
            b = {
              tags: C(t),
              user: i,
              sdk: {
                source: "pbjs",
                version: "4.21.0-pre"
              },
              schain: g
            };
          y && (b.iab_support = {
            omidpn: "Appnexus",
            omidpv: "4.21.0-pre"
          }), 0 < v && (b.member_id = v), s && (b.device = a), d && (b.app = o), w.b.getConfig("adpod.brandCategoryExclusion") && (b.brand_category_uniqueness = !0), c.enabled && (b.debug = c, I.logInfo("AppNexus Debug Auction Settings:\n\n" + JSON.stringify(c, null, 4))), r && r.gdprConsent && (b.gdpr_consent = {
            consent_string: r.gdprConsent.consentString,
            consent_required: r.gdprConsent.gdprApplies
          }), r && r.uspConsent && (b.us_privacy = r.uspConsent), r && r.refererInfo && (l = {
            rd_ref: encodeURIComponent(r.refererInfo.referer),
            rd_top: r.refererInfo.reachedTop,
            rd_ifs: r.refererInfo.numIframes,
            rd_stk: r.refererInfo.stack.map(function (e) {
              return encodeURIComponent(e);
            }).join(",")
          }, b.referrer_detection = l), A()(e, J) && e.filter(J).forEach(function (r) {
            var e = function (e, r) {
                var a = r.mediaTypes.video,
                  t = a.durationRangeSec,
                  n = a.requireExactDuration,
                  i = function (e) {
                    var r = e.adPodDurationSec,
                      a = e.durationRangeSec,
                      t = e.requireExactDuration,
                      n = I.getMinValueFromArray(a),
                      i = Math.floor(r / n);
                    return t ? Math.max(i, a.length) : i;
                  }(r.mediaTypes.video),
                  s = I.getMaxValueFromArray(t),
                  o = e.filter(function (e) {
                    return e.uuid === r.bidId;
                  }),
                  d = I.fill.apply(I, C(o).concat([i]));
                {
                  var p, c;
                  n ? (p = Math.ceil(i / t.length), c = I.chunk(d, p), t.forEach(function (r, e) {
                    c[e].map(function (e) {
                      F(e, "minduration", r), F(e, "maxduration", r);
                    });
                  })) : d.map(function (e) {
                    return F(e, "maxduration", s);
                  });
                }
                return d;
              }(t, r),
              a = b.tags.filter(function (e) {
                return e.uuid !== r.bidId;
              });
            b.tags = [].concat(C(a), C(e));
          });
          var h = I.deepAccess(e[0], "userId.criteoId"),
            _ = [];
          h && _.push({
            source: "criteo.com",
            id: h
          });
          var k = I.deepAccess(e[0], "userId.tdid");
          return k && _.push({
            source: "adserver.org",
            id: k,
            rti_partner: "TDID"
          }), _.length && (b.eids = _), t[0].publisher_id && (b.publisher_id = t[0].publisher_id), function (e, a) {
            var t = [],
              n = {};
            !function (e) {
              var r = !0;
              e && e.gdprConsent && e.gdprConsent.gdprApplies && 2 === e.gdprConsent.apiVersion && (r = !(!0 !== I.deepAccess(e.gdprConsent, "vendorData.purpose.consents.1")));
              return r;
            }(a) && (n = {
              withCredentials: !1
            });
            "TRUE" !== I.getParameterByName("apn_test").toUpperCase() && !0 !== w.b.getConfig("apn_test") || (n.customHeaders = {
              "X-Is-Test": 1
            });
            {
              var i, r;
              15 < e.tags.length ? (i = I.deepClone(e), I.chunk(e.tags, 15).forEach(function (e) {
                i.tags = e;
                var r = JSON.stringify(i);
                t.push({
                  method: "POST",
                  url: S,
                  data: r,
                  bidderRequest: a,
                  options: n
                });
              })) : (r = JSON.stringify(e), t = {
                method: "POST",
                url: S,
                data: r,
                bidderRequest: a,
                options: n
              });
            }
            return t;
          }(b, r);
        },
        interpretResponse: function (e, r) {
          var i = this,
            s = r.bidderRequest;
          e = e.body;
          var a,
            o = [];
          if (e && !e.error) return e.tags && e.tags.forEach(function (e) {
            var r,
              a,
              t,
              n = (r = e) && r.ads && r.ads.length && A()(r.ads, function (e) {
                return e.rtb;
              });
            n && 0 !== n.cpm && x()(i.supportedMediaTypes, n.ad_type) && ((a = function (r, e, a) {
              var t = I.getBidRequest(r.uuid, [a]),
                n = {
                  requestId: r.uuid,
                  cpm: e.cpm,
                  creativeId: e.creative_id,
                  dealId: e.deal_id,
                  currency: "USD",
                  netRevenue: !0,
                  ttl: 300,
                  adUnitCode: t.adUnitCode,
                  appnexus: {
                    buyerMemberId: e.buyer_member_id,
                    dealPriority: e.deal_priority,
                    dealCode: e.deal_code
                  }
                };
              e.advertiser_id && (n.meta = b({}, n.meta, {
                advertiserId: e.advertiser_id
              }));
              if (e.rtb.video) {
                var i, s;
                switch (b(n, {
                  width: e.rtb.video.player_width,
                  height: e.rtb.video.player_height,
                  vastImpUrl: e.notify_url,
                  ttl: 3600
                }), I.deepAccess(t, "mediaTypes.video.context")) {
                  case g.a:
                    var o = Object(v.getIabSubCategory)(t.bidder, e.brand_category_id);
                    n.meta = b({}, n.meta, {
                      primaryCatId: o
                    });
                    var d = e.deal_priority;
                    n.video = {
                      context: g.a,
                      durationSeconds: Math.floor(e.rtb.video.duration_ms / 1e3),
                      dealTier: d
                    }, n.vastUrl = e.rtb.video.asset_url;
                    break;
                  case y.b:
                    n.adResponse = r, n.adResponse.ad = n.adResponse.ads[0], n.adResponse.ad.video = n.adResponse.ad.rtb.video, n.vastXml = e.rtb.video.content, e.renderer_url && (i = A()(a.bids, function (e) {
                      return e.bidId === r.uuid;
                    }), s = I.deepAccess(i, "renderer.options"), n.renderer = function (e, r) {
                      var a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                        t = f.a.install({
                          id: r.renderer_id,
                          url: r.renderer_url,
                          config: a,
                          loaded: !1,
                          adUnitCode: e
                        });
                      try {
                        t.setRender(H);
                      } catch (e) {
                        I.logWarn("Prebid Error calling setRender on renderer", e);
                      }
                      return t.setEventHandlers({
                        impression: function () {
                          return I.logMessage("AppNexus outstream video impression event");
                        },
                        loaded: function () {
                          return I.logMessage("AppNexus outstream video loaded event");
                        },
                        ended: function () {
                          I.logMessage("AppNexus outstream renderer video event"), document.querySelector("#".concat(e)).style.display = "none";
                        }
                      }), t;
                    }(n.adUnitCode, e, s));
                    break;
                  case y.a:
                    n.vastUrl = e.notify_url + "&redir=" + encodeURIComponent(e.rtb.video.asset_url);
                }
              } else if (e.rtb[g.c]) {
                var p = e.rtb[g.c],
                  c = e.viewability.config.replace("src=", "data-src="),
                  u = p.javascript_trackers;
                null == u ? u = c : I.isStr(u) ? u = [u, c] : u.push(c), n[g.c] = {
                  title: p.title,
                  body: p.desc,
                  body2: p.desc2,
                  cta: p.ctatext,
                  rating: p.rating,
                  sponsoredBy: p.sponsored,
                  privacyLink: p.privacy_link,
                  address: p.address,
                  downloads: p.downloads,
                  likes: p.likes,
                  phone: p.phone,
                  price: p.price,
                  salePrice: p.saleprice,
                  clickUrl: p.link.url,
                  displayUrl: p.displayurl,
                  clickTrackers: p.link.click_trackers,
                  impressionTrackers: p.impression_trackers,
                  javascriptTrackers: u
                }, p.main_img && (n.native.image = {
                  url: p.main_img.url,
                  height: p.main_img.height,
                  width: p.main_img.width
                }), p.icon && (n.native.icon = {
                  url: p.icon.url,
                  height: p.icon.height,
                  width: p.icon.width
                });
              } else {
                b(n, {
                  width: e.rtb.banner.width,
                  height: e.rtb.banner.height,
                  ad: e.rtb.banner.content
                });
                try {
                  var m, l;
                  e.rtb.trackers && (m = e.rtb.trackers[0].impression_urls[0], l = I.createTrackPixelHtml(m), n.ad += l);
                } catch (e) {
                  I.logError("Error appending tracking pixel", e);
                }
              }
              return n;
            }(e, n, s)).mediaType = (t = n.ad_type) === g.d ? g.d : t === g.c ? g.c : g.b, o.push(a));
          }), e.debug && e.debug.debug_info && (a = (a = "AppNexus Debug Auction for Prebid\n\n" + e.debug.debug_info).replace(/(<td>|<th>)/gm, "\t").replace(/(<\/td>|<\/th>)/gm, "\n").replace(/^<br>/gm, "").replace(/(<br>\n|<br>)/gm, "\n").replace(/<h1>(.*)<\/h1>/gm, "\n\n===== $1 =====\n\n").replace(/<h[2-6]>(.*)<\/h[2-6]>/gm, "\n\n*** $1 ***\n\n").replace(/(<([^>]+)>)/gim, ""), I.logMessage("https://console.appnexus.com/docs/understanding-the-debug-auction"), I.logMessage(a)), o;
          var t = "in response for ".concat(s.bidderCode, " adapter");
          return e && e.error && (t += ": ".concat(e.error)), I.logError(t), o;
        },
        getMappingFileInfo: function () {
          return {
            url: "https://acdn.adnxs.com/prebid/appnexus-mapping/mappings.json",
            refreshInDays: 2
          };
        },
        getUserSyncs: function (e) {
          if (e.iframeEnabled) return [{
            type: "iframe",
            url: "https://acdn.adnxs.com/dmp/async_usersync.html"
          }];
        },
        transformBidParams: function (a, e) {
          return a = I.convertTypes({
            member: "string",
            invCode: "string",
            placementId: "number",
            keywords: I.transformBidderParamKeywords,
            publisherId: "number"
          }, a), e && (a.use_pmt_rule = "boolean" == typeof a.usePaymentRule && a.usePaymentRule, a.usePaymentRule && delete a.usePaymentRule, j(a.keywords) && a.keywords.forEach(P), Object.keys(a).forEach(function (e) {
            var r = I.convertCamelToUnderscore(e);
            r !== e && (a[r] = a[e], delete a[e]);
          })), a;
        },
        onBidWon: function (e) {
          e.native && function (e) {
            var r = function (e) {
              var r;
              if (I.isStr(e) && U(e)) r = e;else if (I.isArray(e)) for (var a = 0; a < e.length; a++) {
                var t = e[a];
                U(t) && (r = t);
              }
              return r;
            }(e.native.javascriptTrackers);
            if (r) for (var a = "pbjs_adid=" + e.adId + ";pbjs_auc=" + e.adUnitCode, t = function (e) {
                var r = e.indexOf('src="') + 5,
                  a = e.indexOf('"', r);
                return e.substring(r, a);
              }(r), n = t.replace("dom_id=%native_dom_id%", a), i = document.getElementsByTagName("iframe"), s = !1, o = 0; o < i.length && !s; o++) {
              var d = i[o];
              try {
                var p = d.contentDocument || d.contentWindow.document;
                if (p) for (var c = p.getElementsByTagName("script"), u = 0; u < c.length && !s; u++) {
                  var m = c[u];
                  m.getAttribute("data-src") == t && (m.setAttribute("src", n), m.setAttribute("data-src", ""), m.removeAttribute && m.removeAttribute("data-src"), s = !0);
                }
              } catch (e) {
                if (!(e instanceof DOMException && "SecurityError" === e.name)) throw e;
              }
            }
          }(e);
        }
      };
    function j(e) {
      return I.isArray(e) && 0 < e.length;
    }
    function P(e) {
      j(e.value) && "" === e.value[0] && delete e.value;
    }
    function U(e) {
      var r = e.match(h),
        a = null != r && 1 <= r.length,
        t = e.match(_),
        n = null != t && 1 <= t.length;
      return e.startsWith(l) && n && a;
    }
    function N(a) {
      var e,
        r,
        n,
        i,
        t = {};
      t.sizes = q(a.sizes), t.primary_size = t.sizes[0], t.ad_types = [], t.uuid = a.bidId, a.params.placementId ? t.id = parseInt(a.params.placementId, 10) : t.code = a.params.invCode, t.allow_smaller_sizes = a.params.allowSmallerSizes || !1, t.use_pmt_rule = a.params.usePaymentRule || !1, t.prebid = !0, t.disable_psa = !0, a.params.reserve && (t.reserve = a.params.reserve), a.params.position && (t.position = {
        above: 1,
        below: 2
      }[a.params.position] || 0), a.params.trafficSourceCode && (t.traffic_source_code = a.params.trafficSourceCode), a.params.privateSizes && (t.private_sizes = q(a.params.privateSizes)), a.params.supplyType && (t.supply_type = a.params.supplyType), a.params.pubClick && (t.pubclick = a.params.pubClick), a.params.extInvCode && (t.ext_inv_code = a.params.extInvCode), a.params.publisherId && (t.publisher_id = parseInt(a.params.publisherId, 10)), a.params.externalImpId && (t.external_imp_id = a.params.externalImpId), I.isEmpty(a.params.keywords) || (0 < (e = I.transformBidderParamKeywords(a.params.keywords)).length && e.forEach(P), t.keywords = e), a.mediaType !== g.c && !I.deepAccess(a, "mediaTypes.".concat(g.c)) || (t.ad_types.push(g.c), 0 === t.sizes.length && (t.sizes = q([1, 1])), a.nativeParams && (n = a.nativeParams, i = {}, Object.keys(n).forEach(function (e) {
        var r,
          a = m[e] && m[e].serverName || m[e] || e,
          t = m[e] && m[e].requiredParams;
        i[a] = b({}, t, n[e]), a !== m.image.serverName && a !== m.icon.serverName || !i[a].sizes || (r = i[a].sizes, (I.isArrayOfNums(r) || I.isArray(r) && 0 < r.length && r.every(function (e) {
          return I.isArrayOfNums(e);
        })) && (i[a].sizes = q(i[a].sizes))), a === m.privacyLink && (i.privacy_supported = !0);
      }), r = i, t[g.c] = {
        layouts: [r]
      }));
      var s = I.deepAccess(a, "mediaTypes.".concat(g.d)),
        o = I.deepAccess(a, "mediaTypes.video.context");
      t.hb_source = s && "adpod" === o ? 7 : 1, a.mediaType !== g.d && !s || t.ad_types.push(g.d), (a.mediaType === g.d || s && "outstream" !== o) && (t.require_asset_url = !0), a.params.video && (t.video = {}, Object.keys(a.params.video).filter(function (e) {
        return x()(c, e);
      }).forEach(function (e) {
        switch (e) {
          case "context":
          case "playback_method":
            var r = a.params.video[e],
              r = I.isArray(r) ? r[0] : r;
            t.video[e] = u[e][r];
            break;
          case "frameworks":
            break;
          default:
            t.video[e] = a.params.video[e];
        }
      }), a.params.video.frameworks && I.isArray(a.params.video.frameworks) && (t.video_frameworks = a.params.video.frameworks)), a.renderer && (t.video = b({}, t.video, {
        custom_renderer_present: !0
      })), a.params.frameworks && I.isArray(a.params.frameworks) && (t.banner_frameworks = a.params.frameworks);
      var d = A()(p.a.getAdUnits(), function (e) {
        return a.transactionId === e.transactionId;
      });
      return d && d.mediaTypes && d.mediaTypes.banner && t.ad_types.push(g.b), 0 === t.ad_types.length && delete t.ad_types, t;
    }
    function q(e) {
      var r = [],
        a = {};
      if (I.isArray(e) && 2 === e.length && !I.isArray(e[0])) a.width = parseInt(e[0], 10), a.height = parseInt(e[1], 10), r.push(a);else if ("object" === s(e)) for (var t = 0; t < e.length; t++) {
        var n = e[t];
        (a = {}).width = parseInt(n[0], 10), a.height = parseInt(n[1], 10), r.push(a);
      }
      return r;
    }
    function M(e) {
      return !!e.params.user;
    }
    function z(e) {
      return !!parseInt(e.params.member, 10);
    }
    function B(e) {
      if (e.params) return !!e.params.app;
    }
    function D(e) {
      return e.params && e.params.app ? !!e.params.app.id : !!e.params.app;
    }
    function V(e) {
      return !!e.debug;
    }
    function J(e) {
      return e.mediaTypes && e.mediaTypes.video && e.mediaTypes.video.context === g.a;
    }
    function W(e) {
      var r = !1,
        a = e.params,
        t = e.params.video;
      return a.frameworks && I.isArray(a.frameworks) && (r = x()(e.params.frameworks, 6)), !r && t && t.frameworks && I.isArray(t.frameworks) && (r = x()(e.params.video.frameworks, 6)), r;
    }
    function F(e, r, a) {
      I.isEmpty(e.video) && (e.video = {}), e.video[r] = a;
    }
    function H(e) {
      var r, a;
      r = e.adUnitCode, (a = document.getElementById(r).querySelectorAll("div[id^='google_ads']"))[0] && a[0].style.setProperty("display", "none"), e.renderer.push(function () {
        window.ANOutstreamVideo.renderAd({
          tagId: e.adResponse.tag_id,
          sizes: [e.getSize().split("x")],
          targetId: e.adUnitCode,
          uuid: e.adResponse.uuid,
          adResponse: e.adResponse,
          rendererOptions: e.renderer.getConfig()
        }, function (e, r, a) {
          e.renderer.handleVideoEvent({
            id: r,
            eventName: a
          });
        }.bind(null, e));
      });
    }
    Object(v.registerBidder)(k);
  }
}, [275]);
stpdChunk([318], {
  293: function (e, t, r) {
    e.exports = r(294);
  },
  294: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), r.d(t, "spec", function () {
      return n;
    });
    var a = r(1),
      s = r(0),
      d = r(22);
    function c(e) {
      return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      })(e);
    }
    var n = {
      code: "between",
      aliases: ["btw"],
      supportedMediaTypes: ["banner"],
      isBidRequestValid: function (e) {
        return Boolean(e.params.s);
      },
      buildRequests: function (e, t) {
        var n = [],
          i = t && t.gdprConsent,
          o = Object(d.a)();
        return e.forEach(function (e) {
          var t,
            r = {
              sizes: Object(s.parseSizesInput)(Object(s.getAdUnitSizes)(e)).join("%2C"),
              jst: "hb",
              ord: 1e16 * Math.random(),
              tz: new Date().getTimezoneOffset(),
              fl: function () {
                if (void 0 !== navigator.plugins && null !== navigator.plugins && void 0 !== navigator.plugins["Shockwave Flash"] && null !== navigator.plugins["Shockwave Flash"] && "object" === c(navigator.plugins["Shockwave Flash"])) {
                  var e = navigator.plugins["Shockwave Flash"].description;
                  if (e && (void 0 === navigator.mimeTypes || !navigator.mimeTypes["application/x-shockwave-flash"] || navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin)) return e = e.replace(/^.*\s+(\S+\s+\S+$)/, "$1").replace(/^(.*)\..*$/, "$1"), parseInt(e, 10);
                }
                return 0;
              }(),
              rr: function () {
                try {
                  var e = top.document.referrer;
                } catch (e) {
                  return !1;
                }
                {
                  if (void 0 !== e && 0 < e.length) return encodeURIComponent(e);
                  if (void 0 !== e && "" == e) return "direct";
                }
              }(),
              s: e.params.s,
              bidid: e.bidId,
              transactionid: e.transactionId,
              auctionid: e.auctionId
            };
          if (void 0 !== e.params.itu && (r.itu = e.params.itu), void 0 !== e.params.cur && (r.cur = e.params.cur), void 0 !== e.params.subid && (r.subid = e.params.subid), void 0 !== e.params.click3rd && (r.click3rd = e.params.click3rd), void 0 !== e.params.pubdata) for (var a in e.params.pubdata) r["pubside_macro[" + a + "]"] = encodeURIComponent(e.params.pubdata[a]);
          e.schain && (r.schain = (t = JSON.stringify(e.schain), btoa(t).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, ""))), o && o.referer && (r.ref = o.referer), i && (void 0 !== i.gdprApplies && (r.gdprApplies = !!i.gdprApplies), void 0 !== i.consentString && (r.consentString = i.consentString)), n.push({
            method: "GET",
            url: "https://ads.betweendigital.com/adjson",
            data: r
          });
        }), n;
      },
      interpretResponse: function (e) {
        for (var t = [], r = 0; r < e.body.length; r++) {
          var a = {
            requestId: e.body[r].bidid,
            cpm: e.body[r].cpm || 0,
            width: e.body[r].w,
            height: e.body[r].h,
            ttl: e.body[r].ttl,
            creativeId: e.body[r].creativeid,
            currency: e.body[r].currency || "RUB",
            netRevenue: e.body[r].netRevenue || !0,
            ad: e.body[r].ad
          };
          t.push(a);
        }
        return t;
      },
      getUserSyncs: function () {
        var e = [];
        return e.push({
          type: "iframe",
          url: "https://ads.betweendigital.com/sspmatch-iframe"
        }), e;
      }
    };
    Object(a.registerBidder)(n);
  }
}, [293]);
if (findCMP()) {
  stpdChunk([290], {
    355: function (n, t, e) {
      n.exports = e(356);
    },
    356: function (n, t, e) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      }), e.d(t, "allowAuction", function () {
        return w;
      }), e.d(t, "userCMP", function () {
        return d;
      }), e.d(t, "consentTimeout", function () {
        return l;
      }), e.d(t, "gdprScope", function () {
        return g;
      }), e.d(t, "staticConsentData", function () {
        return m;
      }), t.requestBidsHook = h, t.resetConsentData = function () {
        C = void 0, d = void 0, D = 0, a.gdprDataHandler.setConsentData(null);
      }, t.setConsentConfig = _;
      var u = e(0),
        o = e(3),
        a = e(8),
        i = e(12),
        s = e.n(i),
        r = e(357),
        f = e.n(r);
      function c(n) {
        return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
          return typeof n;
        } : function (n) {
          return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
        })(n);
      }
      function p(n, t, e) {
        return t in n ? Object.defineProperty(n, t, {
          value: e,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : n[t] = e, n;
      }
      var d,
        l,
        g,
        m,
        C,
        v = "iab",
        b = 1e4,
        y = !0,
        w = {
          value: y,
          definedInConfig: !1
        },
        D = 0,
        k = !1,
        M = {
          iab: function (o, e, s) {
            function n(n, t) {
              u.logInfo("Received a response from CMP", n), t ? !1 !== n.gdprApplies && "tcloaded" !== n.eventStatus && "useractioncomplete" !== n.eventStatus || o(n, s) : e("CMP unable to register callback function.  Please check CMP setup.", s);
            }
            var t = function () {
                var t = {};
                function e() {
                  t.getConsentData && t.getVendorConsents && (u.logInfo("Received all requested responses from CMP", t), o(t, s));
                }
                return {
                  consentDataCallback: function (n) {
                    t.getConsentData = n, e();
                  },
                  vendorConsentsCallback: function (n) {
                    t.getVendorConsents = n, e();
                  }
                };
              }(),
              c = {},
              a = function () {
                for (var n, t, e = window; !n;) {
                  try {
                    if ("function" == typeof e.__tcfapi || "function" == typeof e.__cmp) {
                      t = "function" == typeof e.__tcfapi ? (D = 2, e.__tcfapi) : (D = 1, e.__cmp), n = e;
                      break;
                    }
                  } catch (n) {}
                  try {
                    if (e.frames.__tcfapiLocator) {
                      D = 2, n = e;
                      break;
                    }
                  } catch (n) {}
                  try {
                    if (e.frames.__cmpLocator) {
                      D = 1, n = e;
                      break;
                    }
                  } catch (n) {}
                  if (e === window.top) break;
                  e = e.parent;
                }
                return {
                  cmpFrame: n,
                  cmpFunction: t
                };
              }(),
              i = a.cmpFrame,
              r = a.cmpFunction;
            if (!i) return e("CMP not found.", s);
            u.isFn(r) ? (u.logInfo("Detected CMP API is directly accessible, calling it now..."), 1 === D ? (r("getConsentData", null, t.consentDataCallback), r("getVendorConsents", null, t.vendorConsentsCallback)) : 2 === D && r("addEventListener", D, n)) : 1 === D && window.$sf && window.$sf.ext && "function" == typeof window.$sf.ext.cmp ? (u.logInfo("Detected Prebid.js is encased in a SafeFrame and CMP is registered, calling it now..."), d("getConsentData", t.consentDataCallback), d("getVendorConsents", t.vendorConsentsCallback)) : (u.logInfo("Detected CMP is outside the current iframe where Prebid.js is located, calling it now..."), 1 === D ? (l("getConsentData", i, t.consentDataCallback), l("getVendorConsents", i, t.vendorConsentsCallback)) : 2 === D && l("addEventListener", i, n));
            function d(o, a) {
              var n,
                t = s.adUnits,
                e = 1,
                i = 1;
              Array.isArray(t) && 0 < t.length && (e = (n = u.getAdUnitSizes(t[0]))[0][0], i = n[0][1]), window.$sf.ext.register(e, i, function (n, t) {
                var e;
                "cmpReturn" === n && (e = "getConsentData" === o ? t.vendorConsentData : t.vendorConsents, a(e));
              }), window.$sf.ext.cmp(o);
            }
            function l(n, i, t) {
              var a = 2 === D ? "__tcfapi" : "__cmp",
                s = Math.random() + "",
                r = "".concat(a, "Call");
              function e(n) {
                var t,
                  e = "".concat(a, "Return"),
                  o = "string" == typeof n.data && f()(n.data, e) ? JSON.parse(n.data) : n.data;
                o[e] && o[e].callId && (t = o[e], void 0 !== c[t.callId] && c[t.callId](t.returnValue, t.success));
              }
              2 === D ? (window[a] = function (n, t, e, o) {
                var a = p({}, r, {
                  command: n,
                  version: t,
                  parameter: o,
                  callId: s
                });
                c[s] = e, i.postMessage(a, "*");
              }, window.addEventListener("message", e, !1), window[a](n, D, t)) : (window[a] = function (n, t, e) {
                var o = p({}, r, {
                  command: n,
                  parameter: t,
                  callId: s
                });
                c[s] = e, i.postMessage(o, "*");
              }, window.addEventListener("message", e, !1), window[a](n, void 0, t));
            }
          },
          static: function (n, t, e) {
            n(m, e);
          }
        };
      function h(n, t) {
        var e = {
          context: this,
          args: [t],
          nextFn: n,
          adUnits: t.adUnits || stpd.adUnits,
          bidsBackHandler: t.bidsBackHandler,
          haveExited: !1,
          timer: null
        };
        return C ? (u.logInfo("User consent information already known.  Pulling internally stored information..."), S(null, e)) : s()(Object.keys(M), d) ? (M[d].call(this, A, P, e), void (e.haveExited || (0 === l ? A(void 0, e) : e.timer = setTimeout(function (n) {
          P("CMP workflow exceeded timeout threshold.", n);
        }.bind(null, e), l)))) : (u.logWarn("CMP framework (".concat(d, ") is not a supported framework.  Aborting consentManagement module and resuming auction.")), e.nextFn.apply(e.context, e.args));
      }
      function A(e, n) {
        "static" === d && 2 === (D = e.getConsentData ? 1 : e.getTCData ? 2 : 0) && (e = e.getTCData);
        var t = 1 === D ? function (n) {
          var t = n && n.getConsentData && n.getConsentData.gdprApplies;
          return !("boolean" == typeof t && (!0 !== t || u.isStr(n.getConsentData.consentData) && u.isPlainObject(n.getVendorConsents) && 1 < Object.keys(n.getVendorConsents).length));
        } : 2 === D ? function () {
          var n = e && "boolean" == typeof e.gdprApplies ? e.gdprApplies : g,
            t = e && e.tcString;
          return !("boolean" == typeof n && (!0 !== n || u.isStr(t)));
        } : null;
        w.definedInConfig && 2 === D ? u.logWarn("'allowAuctionWithoutConsent' ignored for TCF 2") : w.definedInConfig || 1 !== D || u.logInfo("'allowAuctionWithoutConsent' using system default: (".concat(y, ").")), u.isFn(t) ? t(e) ? P("CMP returned unexpected value during lookup process.", n, e) : (clearTimeout(n.timer), I(e), S(null, n)) : P("Unable to derive CMP version to process data.  Consent object does not conform to TCF v1 or v2 specs.", n, e);
      }
      function P(n, t, e) {
        clearTimeout(t.timer), w.value && 1 === D && I(void 0), S(n, t, e);
      }
      function I(n) {
        1 === D ? C = {
          consentString: n ? n.getConsentData.consentData : void 0,
          vendorData: n ? n.getVendorConsents : void 0,
          gdprApplies: n ? n.getConsentData.gdprApplies : g
        } : (C = {
          consentString: n ? n.tcString : void 0,
          vendorData: n || void 0,
          gdprApplies: n && "boolean" == typeof n.gdprApplies ? n.gdprApplies : g
        }, n && n.addtlConsent && u.isStr(n.addtlConsent) && (C.addtlConsent = n.addtlConsent)), C.apiVersion = D, a.gdprDataHandler.setConsentData(C);
      }
      function S(n, t, e) {
        var o, a, i;
        !1 === t.haveExited && (t.haveExited = !0, o = t.context, a = t.args, i = t.nextFn, n ? w.value && 1 === D ? (u.logWarn(n + " 'allowAuctionWithoutConsent' activated.", e), i.apply(o, a)) : (u.logError(n + " Canceling auction as per consentManagement config.", e), "function" == typeof t.bidsBackHandler ? t.bidsBackHandler() : u.logError("Error executing bidsBackHandler")) : i.apply(o, a));
      }
      function _(n) {
        (n = n && (n.gdpr || n.usp ? n.gdpr : n)) && "object" === c(n) ? (u.isStr(n.cmpApi) ? d = n.cmpApi : (d = v, u.logInfo("consentManagement config did not specify cmp.  Using system default setting (".concat(v, ")."))), u.isNumber(n.timeout) ? l = n.timeout : (l = b, u.logInfo("consentManagement config did not specify timeout.  Using system default setting (".concat(b, ")."))), "boolean" == typeof n.allowAuctionWithoutConsent && (w.value = n.allowAuctionWithoutConsent, w.definedInConfig = !0), g = !0 === n.defaultGdprScope, u.logInfo("consentManagement module has been activated..."), "static" === d && (u.isPlainObject(n.consentData) ? (m = n.consentData, l = 0) : u.logError("consentManagement config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters.")), k || stpd.requestBids.before(h, 50), k = !0) : u.logWarn("consentManagement config not defined, exiting consent manager");
      }
      o.b.getConfig("consentManagement", function (n) {
        return _(n.consentManagement);
      });
    }
  }, [355]);
}
stpdChunk([286], {
  369: function (e, r, a) {
    e.exports = a(370);
  },
  370: function (e, r, a) {
    "use strict";

    Object.defineProperty(r, "__esModule", {
      value: !0
    }), a.d(r, "storage", function () {
      return l;
    }), a.d(r, "spec", function () {
      return o;
    });
    var g = a(0),
      i = a(1),
      t = a(2),
      s = a(7),
      l = Object(s.b)(24),
      n = "conversant",
      o = {
        code: n,
        gvlid: 24,
        aliases: ["cnvr"],
        supportedMediaTypes: [t.b, t.d],
        isBidRequestValid: function (e) {
          if (!e || !e.params) return g.logWarn(n + ": Missing bid parameters"), !1;
          if (!g.isStr(e.params.site_id)) return g.logWarn(n + ": site_id must be specified as a string"), !1;
          if (f(e)) if (e.params.mimes) {
            if (!g.isArray(e.params.mimes) || !e.params.mimes.every(function (e) {
              return g.isStr(e);
            })) return g.logWarn(n + ": mimes must be an array of strings"), !1;
          } else g.logWarn(n + ": mimes should be specified for videos");
          return !0;
        },
        buildRequests: function (e, r) {
          var a,
            i = r && r.refererInfo ? r.refererInfo.referer : "",
            o = "",
            d = "",
            p = null,
            u = "_pubcid",
            c = "https://web.hb.ad.cpe.dotomi.com/cvx/client/hb/ortb/25",
            t = e.map(function (e) {
              var r = g.getBidIdParameter("bidfloor", e.params);
              o = g.getBidIdParameter("site_id", e.params) || o, u = g.getBidIdParameter("pubcid_name", e.params) || u, d = e.auctionId;
              var a,
                i,
                t,
                s,
                n = {
                  id: e.bidId,
                  secure: 1,
                  bidfloor: r || 0,
                  displaymanager: "Prebid.js",
                  displaymanagerver: "4.21.0-pre"
                };
              return b(e.params.tag_id, n, "tagid"), f(e) ? (t = {}, (i = v((a = g.deepAccess(e, "mediaTypes.video") || {}).playerSize || e.sizes)) && i[0] && (b(i[0].w, t, "w"), b(i[0].h, t, "h")), b(e.params.position, t, "pos"), b(e.params.mimes || a.mimes, t, "mimes"), b(e.params.maxduration, t, "maxduration"), b(e.params.protocols || a.protocols, t, "protocols"), b(e.params.api || a.api, t, "api"), n.video = t) : (s = {
                format: v((g.deepAccess(e, "mediaTypes.banner") || {}).sizes || e.sizes)
              }, b(e.params.position, s, "pos"), n.banner = s), e.userId && e.userId.pubcid ? p = e.userId.pubcid : e.crumbs && e.crumbs.pubcid && (p = e.crumbs.pubcid), e.params.white_label_url && (c = e.params.white_label_url), n;
            }),
            s = {
              id: d,
              imp: t,
              site: {
                id: o,
                mobile: null !== document.querySelector('meta[name="viewport"][content*="width=device-width"]') ? 1 : 0,
                page: i
              },
              device: (a = navigator.language ? "language" : "userLanguage", {
                h: screen.height,
                w: screen.width,
                dnt: "1" === navigator.doNotTrack || "1" === window.doNotTrack || "1" === navigator.msDoNoTrack || "yes" === navigator.doNotTrack ? 1 : 0,
                language: navigator[a].split("-")[0],
                make: navigator.vendor ? navigator.vendor : "",
                ua: navigator.userAgent
              }),
              at: 1
            },
            n = {};
          r && (r.gdprConsent && (n.consent = r.gdprConsent.consentString, "boolean" == typeof r.gdprConsent.gdprApplies && g.deepSetValue(s, "regs.ext.gdpr", r.gdprConsent.gdprApplies ? 1 : 0)), r.uspConsent && g.deepSetValue(s, "regs.ext.us_privacy", r.uspConsent)), (p = p || function (e) {
            var r;
            try {
              var a;
              (r = l.getCookie(e)) || ("" === (a = l.getDataFromLocalStorage("".concat(e, "_exp"))) || a && 0 < new Date(a).getTime() - Date.now()) && (r = (r = l.getDataFromLocalStorage(e)) ? decodeURIComponent(r) : r), g.isStr(r) && "{" === r.charAt(0) && (r = JSON.parse(r));
            } catch (e) {
              g.logError(e);
            }
            return r;
          }(u)) && (n.fpc = p);
          var m = function (e) {
            var r = e[0],
              a = [];
            {
              var i;
              g.isArray(r.userIdAsEids) && 0 < r.userIdAsEids.length && (i = {
                "adserver.org": 1,
                "liveramp.com": 1,
                "criteo.com": 1,
                "id5-sync.com": 1,
                "parrable.com": 1,
                "digitru.st": 1,
                "liveintent.com": 1
              }, r.userIdAsEids.forEach(function (e) {
                i.hasOwnProperty(e.source) && a.push(e);
              }));
            }
            return a;
          }(e);
          return 0 < m.length && (n.eids = m), g.isEmpty(n) || (s.user = {
            ext: n
          }), {
            method: "POST",
            url: c,
            data: s
          };
        },
        interpretResponse: function (n, e) {
          var o = [],
            d = {};
          return n = n.body, e && e.data && e.data.imp && g._each(e.data.imp, function (e) {
            return d[e.id] = e;
          }), n && g.isArray(n.seatbid) && g._each(n.seatbid, function (e) {
            g._each(e.bid, function (e) {
              var r,
                a,
                i,
                t,
                s = parseFloat(e.price);
              0 < s && e.impid && (r = e.adm || "", a = e.nurl || "", i = d[e.impid], t = {
                requestId: e.impid,
                currency: n.cur || "USD",
                cpm: s,
                creativeId: e.crid || "",
                ttl: 300,
                netRevenue: !0
              }, i.video ? ("<" === r.charAt(0) ? t.vastXml = r : t.vastUrl = r, t.mediaType = "video", t.width = i.video.w, t.height = i.video.h) : (t.ad = r + '<img src="' + a + '" />', t.width = e.w, t.height = e.h), o.push(t));
            });
          }), o;
        },
        transformBidParams: function (e) {
          return g.convertTypes({
            site_id: "string",
            secure: "number",
            mobile: "number"
          }, e);
        }
      };
    function v(e) {
      var r;
      return Array.isArray(e) && (r = 2 === e.length && "number" == typeof e[0] && "number" == typeof e[1] ? [{
        w: e[0],
        h: e[1]
      }] : g._map(e, function (e) {
        return {
          w: e[0],
          h: e[1]
        };
      })), r;
    }
    function f(e) {
      return "video" === e.mediaType || g.deepAccess(e, "mediaTypes.video");
    }
    function b(e, r, a) {
      e && (r[a] = e);
    }
    Object(i.registerBidder)(o);
  }
}, [369]);
const nativeFetch = window.fetch;
stpdChunk([1], {
  377: function (t, e, r) {
    t.exports = r(378);
  },
  378: function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    Object.defineProperty(__webpack_exports__, "__esModule", {
      value: !0
    }), __webpack_require__.d(__webpack_exports__, "ADAPTER_VERSION", function () {
      return ADAPTER_VERSION;
    }), __webpack_require__.d(__webpack_exports__, "PROFILE_ID_PUBLISHERTAG", function () {
      return PROFILE_ID_PUBLISHERTAG;
    }), __webpack_require__.d(__webpack_exports__, "spec", function () {
      return spec;
    }), __webpack_exports__.tryGetCriteoFastBid = tryGetCriteoFastBid;
    var __WEBPACK_IMPORTED_MODULE_0__src_adloader_js__ = __webpack_require__(40),
      __WEBPACK_IMPORTED_MODULE_1__src_adapters_bidderFactory_js__ = __webpack_require__(1),
      __WEBPACK_IMPORTED_MODULE_2__src_config_js__ = __webpack_require__(3),
      __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__ = __webpack_require__(2),
      __WEBPACK_IMPORTED_MODULE_4__src_utils_js__ = __webpack_require__(0),
      __WEBPACK_IMPORTED_MODULE_5_core_js_pure_features_array_find_js__ = __webpack_require__(10),
      __WEBPACK_IMPORTED_MODULE_5_core_js_pure_features_array_find_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_pure_features_array_find_js__),
      __WEBPACK_IMPORTED_MODULE_6_criteo_direct_rsa_validate_build_verify_js__ = __webpack_require__(379),
      __WEBPACK_IMPORTED_MODULE_6_criteo_direct_rsa_validate_build_verify_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_criteo_direct_rsa_validate_build_verify_js__),
      __WEBPACK_IMPORTED_MODULE_7__src_storageManager_js__ = __webpack_require__(7);
    function _extends() {
      return (_extends = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = arguments[e];
          for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
        }
        return t;
      }).apply(this, arguments);
    }
    var GVLID = 91,
      ADAPTER_VERSION = 32,
      BIDDER_CODE = "criteo",
      CDB_ENDPOINT = "https://bidder.criteo.com/cdb",
      PROFILE_ID_INLINE = 207,
      PROFILE_ID_PUBLISHERTAG = 185,
      storage = Object(__WEBPACK_IMPORTED_MODULE_7__src_storageManager_js__.b)(GVLID),
      LOG_PREFIX = "Criteo: ",
      PUBLISHER_TAG_URL = "https://static.criteo.net/js/ld/publishertag.prebid.js",
      FAST_BID_PUBKEY_E = 65537,
      FAST_BID_PUBKEY_N = "ztQYwCE5BU7T9CDM5he6rKoabstXRmkzx54zFPZkWbK530dwtLBDeaWBMxHBUT55CYyboR/EZ4efghPi3CoNGfGWezpjko9P6p2EwGArtHEeS4slhu/SpSIFMjG6fdrpRoNuIAMhq1Z+Pr/+HOd1pThFKeGFr2/NhtAg+TXAzaU=",
      spec = {
        code: BIDDER_CODE,
        gvlid: GVLID,
        supportedMediaTypes: [__WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__.b, __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__.d, __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__.c],
        isBidRequestValid: function (t) {
          return !(!t || !t.params || !t.params.zoneId && !t.params.networkId) && !(hasVideoMediaType(t) && !hasValidVideoMediaType(t));
        },
        buildRequests: function (t, e) {
          var r, i, s, o, _;
          if (_extends(e, {
            publisherExt: __WEBPACK_IMPORTED_MODULE_2__src_config_js__.b.getConfig("fpd.context"),
            userExt: __WEBPACK_IMPORTED_MODULE_2__src_config_js__.b.getConfig("fpd.user"),
            ceh: __WEBPACK_IMPORTED_MODULE_2__src_config_js__.b.getConfig("criteo.ceh")
          }), publisherTagAvailable() || (window.Criteo = window.Criteo || {}, window.Criteo.usePrebidEvents = !1, tryGetCriteoFastBid(), setTimeout(function () {
            Object(__WEBPACK_IMPORTED_MODULE_0__src_adloader_js__.a)(PUBLISHER_TAG_URL, BIDDER_CODE);
          }, e.timeout)), _ = publisherTagAvailable() ? (r = new Criteo.PubTag.Adapters.Prebid(PROFILE_ID_PUBLISHERTAG, ADAPTER_VERSION, t, e, "4.21.0-pre"), i = __WEBPACK_IMPORTED_MODULE_2__src_config_js__.b.getConfig("enableSendAllBids"), r.setEnableSendAllBids && "function" == typeof r.setEnableSendAllBids && "boolean" == typeof i && r.setEnableSendAllBids(i), o = r.buildCdbUrl(), r.buildCdbRequest()) : (o = buildCdbUrl(s = buildContext(t, e)), buildCdbRequest(s, t, e))) return {
            method: "POST",
            url: o,
            data: _,
            bidRequests: t
          };
        },
        interpretResponse: function (t, s) {
          var e = t.body || t;
          if (publisherTagAvailable()) {
            var r = Criteo.PubTag.Adapters.Prebid.GetAdapter(s);
            if (r) return r.interpretResponse(e, s);
          }
          var o = [];
          return e && e.slots && __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.isArray(e.slots) && e.slots.forEach(function (e) {
            var t = __WEBPACK_IMPORTED_MODULE_5_core_js_pure_features_array_find_js___default()(s.bidRequests, function (t) {
                return t.adUnitCode === e.impid && (!t.params.zoneId || parseInt(t.params.zoneId) === e.zoneid);
              }),
              r = t.bidId,
              i = {
                requestId: r,
                adId: e.bidId || __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.getUniqueIdentifierStr(),
                cpm: e.cpm,
                currency: e.currency,
                netRevenue: !0,
                ttl: e.ttl || 60,
                creativeId: r,
                width: e.width,
                height: e.height,
                dealId: e.dealCode
              };
            if (e.native) {
              if (t.params.nativeCallback) i.ad = createNativeAd(r, e.native, t.params.nativeCallback);else {
                if (!0 === __WEBPACK_IMPORTED_MODULE_2__src_config_js__.b.getConfig("enableSendAllBids")) return;
                i.native = createPrebidNativeAd(e.native), i.mediaType = __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__.c;
              }
            } else e.video ? (i.vastUrl = e.displayurl, i.mediaType = __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__.d) : i.ad = e.creative;
            o.push(i);
          }), o;
        },
        onTimeout: function (t) {
          var e;
          publisherTagAvailable() && Array.isArray(t) && (e = [], t.forEach(function (t) {
            -1 === e.indexOf(t.auctionId) && (e.push(t.auctionId), Criteo.PubTag.Adapters.Prebid.GetAdapter(t.auctionId).handleBidTimeout());
          }));
        },
        onBidWon: function (t) {
          publisherTagAvailable() && t && Criteo.PubTag.Adapters.Prebid.GetAdapter(t.auctionId).handleBidWon(t);
        },
        onSetTargeting: function (t) {
          publisherTagAvailable() && Criteo.PubTag.Adapters.Prebid.GetAdapter(t.auctionId).handleSetTargeting(t);
        }
      };
    function publisherTagAvailable() {
      return "undefined" != typeof Criteo && Criteo.PubTag && Criteo.PubTag.Adapters && Criteo.PubTag.Adapters.Prebid;
    }
    function buildContext(t, e) {
      var r = "";
      e && e.refererInfo && (r = e.refererInfo.referer);
      var i = __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.parseUrl(r).search,
        s = {
          url: r,
          debug: "1" === i.pbt_debug,
          noLog: "1" === i.pbt_nolog,
          amp: !1
        };
      return t.forEach(function (t) {
        "amp" === t.params.integrationMode && (s.amp = !0);
      }), s;
    }
    function buildCdbUrl(t) {
      var e = CDB_ENDPOINT;
      return e += "?profileId=" + PROFILE_ID_INLINE, e += "&av=" + String(ADAPTER_VERSION), e += "&wv=" + encodeURIComponent("4.21.0-pre"), e += "&cb=" + String(Math.floor(99999999999 * Math.random())), t.amp && (e += "&im=1"), t.debug && (e += "&debug=1"), t.noLog && (e += "&nolog=1"), e;
    }
    function checkNativeSendId(t) {
      return !t.nativeParams || !(t.nativeParams.image && !0 !== t.nativeParams.image.sendId || t.nativeParams.icon && !0 !== t.nativeParams.icon.sendId || t.nativeParams.clickUrl && !0 !== t.nativeParams.clickUrl.sendId || t.nativeParams.displayUrl && !0 !== t.nativeParams.displayUrl.sendId || t.nativeParams.privacyLink && !0 !== t.nativeParams.privacyLink.sendId || t.nativeParams.privacyIcon && !0 !== t.nativeParams.privacyIcon.sendId);
    }
    function buildCdbRequest(t, e, r) {
      var i,
        s = {
          publisher: {
            url: t.url,
            ext: r.publisherExt
          },
          slots: e.map(function (t) {
            i = t.params.networkId || i;
            var e,
              r = {
                impid: t.adUnitCode,
                transactionid: t.transactionId,
                auctionId: t.auctionId
              };
            return t.params.zoneId && (r.zoneid = t.params.zoneId), t.fpd && t.fpd.context && (r.ext = t.fpd.context), t.params.ext && (r.ext = _extends({}, r.ext, t.params.ext)), t.params.publisherSubId && (r.publishersubid = t.params.publisherSubId), t.params.nativeCallback || __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.deepAccess(t, "mediaTypes.".concat(__WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__.c)) ? (r.native = !0, checkNativeSendId(t) || __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.logWarn(LOG_PREFIX + "all native assets containing URL should be sent as placeholders with sendId(icon, image, clickUrl, displayUrl, privacyLink, privacyIcon)"), r.sizes = parseSizes(retrieveBannerSizes(t), parseNativeSize)) : r.sizes = parseSizes(retrieveBannerSizes(t), parseSize), hasVideoMediaType(t) && ((e = {
              playersizes: parseSizes(__WEBPACK_IMPORTED_MODULE_4__src_utils_js__.deepAccess(t, "mediaTypes.video.playerSize"), parseSize),
              mimes: t.mediaTypes.video.mimes,
              protocols: t.mediaTypes.video.protocols,
              maxduration: t.mediaTypes.video.maxduration,
              api: t.mediaTypes.video.api
            }).skip = t.params.video.skip, e.placement = t.params.video.placement, e.minduration = t.params.video.minduration, e.playbackmethod = t.params.video.playbackmethod, e.startdelay = t.params.video.startdelay, r.video = e), r;
          })
        };
      return i && (s.publisher.networkid = i), s.user = {
        ext: r.userExt
      }, r && r.ceh && (s.user.ceh = r.ceh), r && r.gdprConsent && (s.gdprConsent = {}, void 0 !== r.gdprConsent.gdprApplies && (s.gdprConsent.gdprApplies = !!r.gdprConsent.gdprApplies), s.gdprConsent.version = r.gdprConsent.apiVersion, void 0 !== r.gdprConsent.consentString && (s.gdprConsent.consentData = r.gdprConsent.consentString)), r && r.uspConsent && (s.user.uspIab = r.uspConsent), s;
    }
    function retrieveBannerSizes(t) {
      return __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.deepAccess(t, "mediaTypes.banner.sizes") || t.sizes;
    }
    function parseSizes(t, e) {
      return Array.isArray(t[0]) ? t.map(function (t) {
        return e(t);
      }) : [e(t)];
    }
    function parseSize(t) {
      return t[0] + "x" + t[1];
    }
    function parseNativeSize(t) {
      return void 0 === t[0] && void 0 === t[1] ? "2x2" : t[0] + "x" + t[1];
    }
    function hasVideoMediaType(t) {
      return void 0 !== __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.deepAccess(t, "params.video") && void 0 !== __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.deepAccess(t, "mediaTypes.video");
    }
    function hasValidVideoMediaType(e) {
      var r = !0;
      ["mimes", "playerSize", "maxduration", "protocols", "api"].forEach(function (t) {
        void 0 === __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.deepAccess(e, "mediaTypes.video." + t) && (r = !1, __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.logError("Criteo Bid Adapter: mediaTypes.video." + t + " is required"));
      });
      if (["skip", "placement", "playbackmethod"].forEach(function (t) {
        void 0 === __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.deepAccess(e, "params.video." + t) && (r = !1, __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.logError("Criteo Bid Adapter: params.video." + t + " is required"));
      }), r) {
        if ("instream" == e.mediaTypes.video.context && 1 === e.params.video.placement) return 1;
        if ("outstream" == e.mediaTypes.video.context && 1 !== e.params.video.placement) return 1;
      }
    }
    function createPrebidNativeAd(t) {
      return {
        title: t.products[0].title,
        body: t.products[0].description,
        sponsoredBy: t.advertiser.description,
        icon: t.advertiser.logo,
        image: t.products[0].image,
        clickUrl: t.products[0].click_url,
        privacyLink: t.privacy.optout_click_url,
        privacyIcon: t.privacy.optout_image_url,
        cta: t.products[0].call_to_action,
        price: t.products[0].price,
        impressionTrackers: t.impression_pixels.map(function (t) {
          return t.url;
        })
      };
    }
    function createNativeAd(t, e, r) {
      var i = "criteo_prebid_native_slots";
      return window[i] = window[i] || {}, window[i][t] = {
        callback: r,
        payload: e
      }, '\n<script type="text/javascript">\nfor (var i = 0; i < 10; ++i) {\n var slots = window.parent.'.concat(i, ';\n  if(!slots){continue;}\n  var responseSlot = slots["').concat(t, '"];\n  responseSlot.callback(responseSlot.payload);\n  break;\n}\n<\/script>');
    }
    function tryGetCriteoFastBid() {
      try {
        var fastBidStorageKey = "criteo_fast_bid",
          hashPrefix = "// Hash: ",
          fastBidFromStorage = storage.getDataFromLocalStorage(fastBidStorageKey),
          firstLineEndPosition,
          firstLine,
          publisherTagHash,
          publisherTag;
        null !== fastBidFromStorage && (firstLineEndPosition = fastBidFromStorage.indexOf("\n"), firstLine = fastBidFromStorage.substr(0, firstLineEndPosition).trim(), firstLine.substr(0, hashPrefix.length) !== hashPrefix ? (__WEBPACK_IMPORTED_MODULE_4__src_utils_js__.logWarn("No hash found in FastBid"), storage.removeDataFromLocalStorage(fastBidStorageKey)) : (publisherTagHash = firstLine.substr(hashPrefix.length), publisherTag = fastBidFromStorage.substr(firstLineEndPosition + 1), Object(__WEBPACK_IMPORTED_MODULE_6_criteo_direct_rsa_validate_build_verify_js__.verify)(publisherTag, publisherTagHash, FAST_BID_PUBKEY_N, FAST_BID_PUBKEY_E) ? (__WEBPACK_IMPORTED_MODULE_4__src_utils_js__.logInfo("Using Criteo FastBid"), eval(publisherTag)) : (__WEBPACK_IMPORTED_MODULE_4__src_utils_js__.logWarn("Invalid Criteo FastBid found"), storage.removeDataFromLocalStorage(fastBidStorageKey))));
      } catch (t) {}
    }
    Object(__WEBPACK_IMPORTED_MODULE_1__src_adapters_bidderFactory_js__.registerBidder)(spec);
  },
  379: function (t, e, r) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var a = r(380),
      n = r(381);
    e.verify = function (t, e, r, i) {
      var s = new a.BigInteger(a.b64toHex(e)),
        o = new a.BigInteger(a.b64toHex(r)),
        _ = s.modPowInt(i, o);
      return a.removeExtraSymbols(_.toHexString()) === n.Sha256.hash(t);
    };
  },
  380: function (t, e, r) {
    "use strict";

    var i;
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var s = (T.prototype.toHexString = function () {
      if (this.s < 0) return "-" + this.negate().toHexString();
      var t,
        e = !1,
        r = "",
        i = this.t,
        s = this.DB - i * this.DB % 4;
      if (0 < i--) for (s < this.DB && 0 < (t = this[i] >> s) && (e = !0, r = c(t)); 0 <= i;) s < 4 ? (t = (this[i] & (1 << s) - 1) << 4 - s, t |= this[--i] >> (s += this.DB - 4)) : (t = this[i] >> (s -= 4) & 15, s <= 0 && (s += this.DB, --i)), 0 < t && (e = !0), e && (r += c(t));
      return e ? r : "0";
    }, T.prototype.fromHexString = function (t) {
      if (null !== t) {
        this.t = 0, this.s = 0;
        for (var e = t.length, r = !1, i = 0; 0 <= --e;) {
          var s = n(t, e);
          s < 0 ? "-" == t.charAt(e) && (r = !0) : (r = !1, 0 == i ? this[this.t++] = s : i + 4 > this.DB ? (this[this.t - 1] |= (s & (1 << this.DB - i) - 1) << i, this[this.t++] = s >> this.DB - i) : this[this.t - 1] |= s << i, (i += 4) >= this.DB && (i -= this.DB));
        }
        this.clamp(), r && T.ZERO.subTo(this, this);
      }
    }, T.prototype.negate = function () {
      var t = b();
      return T.ZERO.subTo(this, t), t;
    }, T.prototype.abs = function () {
      return this.s < 0 ? this.negate() : this;
    }, T.prototype.mod = function (t) {
      var e = b();
      return this.abs().divRemTo(t, null, e), this.s < 0 && 0 < e.compareTo(T.ZERO) && t.subTo(e, e), e;
    }, T.prototype.copyTo = function (t) {
      for (var e = this.t - 1; 0 <= e; --e) t[e] = this[e];
      t.t = this.t, t.s = this.s;
    }, T.prototype.lShiftTo = function (t, e) {
      for (var r = t % this.DB, i = this.DB - r, s = (1 << i) - 1, o = Math.floor(t / this.DB), _ = this.s << r & this.DM, a = this.t - 1; 0 <= a; --a) e[a + o + 1] = this[a] >> i | _, _ = (this[a] & s) << r;
      for (a = o - 1; 0 <= a; --a) e[a] = 0;
      e[o] = _, e.t = this.t + o + 1, e.s = this.s, e.clamp();
    }, T.prototype.invDigit = function () {
      if (this.t < 1) return 0;
      var t = this[0];
      if (0 == (1 & t)) return 0;
      var e = 3 & t;
      return 0 < (e = (e = (e = (e = e * (2 - (15 & t) * e) & 15) * (2 - (255 & t) * e) & 255) * (2 - ((65535 & t) * e & 65535)) & 65535) * (2 - t * e % this.DV) % this.DV) ? this.DV - e : -e;
    }, T.prototype.dlShiftTo = function (t, e) {
      for (var r = this.t - 1; 0 <= r; --r) e[r + t] = this[r];
      for (r = t - 1; 0 <= r; --r) e[r] = 0;
      e.t = this.t + t, e.s = this.s;
    }, T.prototype.squareTo = function (t) {
      for (var e = this.abs(), r = t.t = 2 * e.t; 0 <= --r;) t[r] = 0;
      for (r = 0; r < e.t - 1; ++r) {
        var i = e.am(r, e[r], t, 2 * r, 0, 1);
        (t[r + e.t] += e.am(r + 1, 2 * e[r], t, 2 * r + 1, i, e.t - r - 1)) >= e.DV && (t[r + e.t] -= e.DV, t[r + e.t + 1] = 1);
      }
      0 < t.t && (t[t.t - 1] += e.am(r, e[r], t, 2 * r, 0, 1)), t.s = 0, t.clamp();
    }, T.prototype.multiplyTo = function (t, e) {
      var r = this.abs(),
        i = t.abs(),
        s = r.t;
      for (e.t = s + i.t; 0 <= --s;) e[s] = 0;
      for (s = 0; s < i.t; ++s) e[s + r.t] = r.am(0, i[s], e, s, 0, r.t);
      e.s = 0, e.clamp(), this.s != t.s && T.ZERO.subTo(e, e);
    }, T.prototype.divRemTo = function (t, e, r) {
      var i = t.abs();
      if (!(i.t <= 0)) {
        var s = this.abs();
        if (s.t < i.t) return null != e && e.fromHexString("0"), void (null != r && this.copyTo(r));
        null == r && (r = b());
        var o = b(),
          _ = this.s,
          a = t.s,
          n = this.DB - D(i[i.t - 1]);
        0 < n ? (i.lShiftTo(n, o), s.lShiftTo(n, r)) : (i.copyTo(o), s.copyTo(r));
        var p = o.t,
          c = o[p - 1];
        if (0 != c) {
          var d = c * (1 << this.F1) + (1 < p ? o[p - 2] >> this.F2 : 0),
            u = this.FV / d,
            h = (1 << this.F1) / d,
            l = 1 << this.F2,
            f = r.t,
            E = f - p,
            v = null == e ? b() : e;
          for (o.dlShiftTo(E, v), 0 <= r.compareTo(v) && (r[r.t++] = 1, r.subTo(v, r)), T.ONE.dlShiftTo(p, v), v.subTo(o, o); o.t < p;) o[o.t++] = 0;
          for (; 0 <= --E;) {
            var m = r[--f] == c ? this.DM : Math.floor(r[f] * u + (r[f - 1] + l) * h);
            if ((r[f] += o.am(0, m, r, E, 0, p)) < m) for (o.dlShiftTo(E, v), r.subTo(v, r); r[f] < --m;) r.subTo(v, r);
          }
          null != e && (r.drShiftTo(p, e), _ != a && T.ZERO.subTo(e, e)), r.t = p, r.clamp(), 0 < n && r.rShiftTo(n, r), _ < 0 && T.ZERO.subTo(r, r);
        }
      }
    }, T.prototype.rShiftTo = function (t, e) {
      e.s = this.s;
      var r = Math.floor(t / this.DB);
      if (r >= this.t) e.t = 0;else {
        var i = t % this.DB,
          s = this.DB - i,
          o = (1 << i) - 1;
        e[0] = this[r] >> i;
        for (var _ = r + 1; _ < this.t; ++_) e[_ - r - 1] |= (this[_] & o) << s, e[_ - r] = this[_] >> i;
        0 < i && (e[this.t - r - 1] |= (this.s & o) << s), e.t = this.t - r, e.clamp();
      }
    }, T.prototype.drShiftTo = function (t, e) {
      for (var r = t; r < this.t; ++r) e[r - t] = this[r];
      e.t = Math.max(this.t - t, 0), e.s = this.s;
    }, T.prototype.subTo = function (t, e) {
      for (var r = 0, i = 0, s = Math.min(t.t, this.t); r < s;) i += this[r] - t[r], e[r++] = i & this.DM, i >>= this.DB;
      if (t.t < this.t) {
        for (i -= t.s; r < this.t;) i += this[r], e[r++] = i & this.DM, i >>= this.DB;
        i += this.s;
      } else {
        for (i += this.s; r < t.t;) i -= t[r], e[r++] = i & this.DM, i >>= this.DB;
        i -= t.s;
      }
      e.s = i < 0 ? -1 : 0, i < -1 ? e[r++] = this.DV + i : 0 < i && (e[r++] = i), e.t = r, e.clamp();
    }, T.prototype.clamp = function () {
      for (var t = this.s & this.DM; 0 < this.t && this[this.t - 1] == t;) --this.t;
    }, T.prototype.modPowInt = function (t, e) {
      var r = new (t < 256 || e.isEven() ? d : h)(e);
      return this.exp(t, r);
    }, T.prototype.exp = function (t, e) {
      if (4294967295 < t || t < 1) return T.ONE;
      var r,
        i = b(),
        s = b(),
        o = e.convert(this),
        _ = D(t) - 1;
      for (o.copyTo(i); 0 <= --_;) e.sqrTo(i, s), 0 < (t & 1 << _) ? e.mulTo(s, o, i) : (r = i, i = s, s = r);
      return e.revert(i);
    }, T.prototype.isEven = function () {
      return 0 == (0 < this.t ? 1 & this[0] : this.s);
    }, T.prototype.compareTo = function (t) {
      var e = this.s - t.s;
      if (0 != e) return e;
      var r = this.t;
      if (0 != (e = r - t.t)) return this.s < 0 ? -e : e;
      for (; 0 <= --r;) if (0 != (e = this[r] - t[r])) return e;
      return 0;
    }, T.prototype.am1 = function (t, e, r, i, s, o) {
      for (; 0 <= --o;) {
        var _ = e * this[t++] + r[i] + s;
        s = Math.floor(_ / 67108864), r[i++] = 67108863 & _;
      }
      return s;
    }, T.prototype.am2 = function (t, e, r, i, s, o) {
      for (var _ = 32767 & e, a = e >> 15; 0 <= --o;) {
        var n = 32767 & this[t],
          p = this[t++] >> 15,
          c = a * n + p * _;
        s = ((n = _ * n + ((32767 & c) << 15) + r[i] + (1073741823 & s)) >>> 30) + (c >>> 15) + a * p + (s >>> 30), r[i++] = 1073741823 & n;
      }
      return s;
    }, T.prototype.am3 = function (t, e, r, i, s, o) {
      for (var _ = 16383 & e, a = e >> 14; 0 <= --o;) {
        var n = 16383 & this[t],
          p = this[t++] >> 14,
          c = a * n + p * _;
        s = ((n = _ * n + ((16383 & c) << 14) + r[i] + s) >> 28) + (c >> 14) + a * p, r[i++] = 268435455 & n;
      }
      return s;
    }, T);
    function T(t) {
      null !== t && this.fromHexString(t);
    }
    function b() {
      return new s(null);
    }
    function D(t) {
      var e,
        r = 1;
      return 0 != (e = t >>> 16) && (t = e, r += 16), 0 != (e = t >> 8) && (t = e, r += 8), 0 != (e = t >> 4) && (t = e, r += 4), 0 != (e = t >> 2) && (t = e, r += 2), 0 != (e = t >> 1) && (t = e, r += 1), r;
    }
    e.BigInteger = s, e.nbi = b, e.nbits = D;
    for (var o = [], _ = "0".charCodeAt(0), a = 0; a <= 9; ++a) o[_++] = a;
    for (_ = "a".charCodeAt(0), a = 10; a < 36; ++a) o[_++] = a;
    for (_ = "A".charCodeAt(0), a = 10; a < 36; ++a) o[_++] = a;
    function n(t, e) {
      var r = o[t.charCodeAt(e)];
      return null == r ? -1 : r;
    }
    e.intAt = n;
    var p = "0123456789abcdefghijklmnopqrstuvwxyz";
    function c(t) {
      return p.charAt(t);
    }
    e.int2char = c;
    e.b64toHex = function (t) {
      for (var e = "", r = 0, i = 0, s = 0; s < t.length && "=" != t.charAt(s); ++s) {
        var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(t.charAt(s));
        o < 0 || (r = 0 == r ? (e += c(o >> 2), i = 3 & o, 1) : 1 == r ? (e += c(i << 2 | o >> 4), i = 15 & o, 2) : 2 == r ? (e += c(i), e += c(o >> 2), i = 3 & o, 3) : (e += c(i << 2 | o >> 4), e += c(15 & o), 0));
      }
      return 1 == r && (e += c(i << 2)), e;
    }, e.removeExtraSymbols = function (t) {
      return t.replace(/^1f+00/, "").replace("3031300d060960864801650304020105000420", "");
    };
    var d = (u.prototype.convert = function (t) {
      return t.s < 0 || 0 <= t.compareTo(this.m) ? t.mod(this.m) : t;
    }, u.prototype.revert = function (t) {
      return t;
    }, u.prototype.reduce = function (t) {
      t.divRemTo(this.m, null, t);
    }, u.prototype.mulTo = function (t, e, r) {
      t.multiplyTo(e, r), this.reduce(r);
    }, u.prototype.sqrTo = function (t, e) {
      t.squareTo(e), this.reduce(e);
    }, u);
    function u(t) {
      this.m = t;
    }
    var h = (l.prototype.convert = function (t) {
      var e = b();
      return t.abs().dlShiftTo(this.m.t, e), e.divRemTo(this.m, null, e), t.s < 0 && 0 < e.compareTo(s.ZERO) && this.m.subTo(e, e), e;
    }, l.prototype.revert = function (t) {
      var e = b();
      return t.copyTo(e), this.reduce(e), e;
    }, l.prototype.reduce = function (t) {
      for (; t.t <= this.mt2;) t[t.t++] = 0;
      for (var e = 0; e < this.m.t; ++e) {
        var r = 32767 & t[e],
          i = r * this.mpl + ((r * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
        for (t[r = e + this.m.t] += this.m.am(0, i, t, e, 0, this.m.t); t[r] >= t.DV;) t[r] -= t.DV, t[++r]++;
      }
      t.clamp(), t.drShiftTo(this.m.t, t), 0 <= t.compareTo(this.m) && t.subTo(this.m, t);
    }, l.prototype.mulTo = function (t, e, r) {
      t.multiplyTo(e, r), this.reduce(r);
    }, l.prototype.sqrTo = function (t, e) {
      t.squareTo(e), this.reduce(e);
    }, l);
    function l(t) {
      this.m = t, this.mp = t.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, this.um = (1 << t.DB - 15) - 1, this.mt2 = 2 * t.t;
    }
    function f(t) {
      var e = b();
      return e.fromHexString(t.toString()), e;
    }
    e.nbv = f, s.ZERO = f(0), s.ONE = f(1), i = "Microsoft Internet Explorer" == navigator.appName ? (s.prototype.am = s.prototype.am2, 30) : "Netscape" != navigator.appName ? (s.prototype.am = s.prototype.am1, 26) : (s.prototype.am = s.prototype.am3, 28), s.prototype.DB = i, s.prototype.DM = (1 << i) - 1, s.prototype.DV = 1 << i;
    s.prototype.FV = Math.pow(2, 52), s.prototype.F1 = 52 - i, s.prototype.F2 = 2 * i - 52;
  },
  381: function (t, e, r) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var i = (y.hash = function (t) {
      t = y.utf8Encode(t || "");
      for (var e = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298], r = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], i = (t += String.fromCharCode(128)).length / 4 + 2, s = Math.ceil(i / 16), o = new Array(s), _ = 0; _ < s; _++) {
        o[_] = new Array(16);
        for (var a = 0; a < 16; a++) o[_][a] = t.charCodeAt(64 * _ + 4 * a) << 24 | t.charCodeAt(64 * _ + 4 * a + 1) << 16 | t.charCodeAt(64 * _ + 4 * a + 2) << 8 | t.charCodeAt(64 * _ + 4 * a + 3) << 0;
      }
      var n = 8 * (t.length - 1) / Math.pow(2, 32),
        p = 8 * (t.length - 1) >>> 0;
      for (o[s - 1][14] = Math.floor(n), o[s - 1][15] = p, _ = 0; _ < s; _++) {
        for (var c = new Array(64), d = 0; d < 16; d++) c[d] = o[_][d];
        for (d = 16; d < 64; d++) c[d] = y.q1(c[d - 2]) + c[d - 7] + y.q0(c[d - 15]) + c[d - 16] >>> 0;
        for (var u = r[0], h = r[1], l = r[2], f = r[3], E = r[4], v = r[5], m = r[6], T = r[7], d = 0; d < 64; d++) {
          var b = T + y.z1(E) + y.Ch(E, v, m) + e[d] + c[d],
            D = y.z0(u) + y.Maj(u, h, l);
          T = m, m = v, v = E, E = f + b >>> 0, f = l, l = h, h = u, u = b + D >>> 0;
        }
        r[0] = r[0] + u >>> 0, r[1] = r[1] + h >>> 0, r[2] = r[2] + l >>> 0, r[3] = r[3] + f >>> 0, r[4] = r[4] + E >>> 0, r[5] = r[5] + v >>> 0, r[6] = r[6] + m >>> 0, r[7] = r[7] + T >>> 0;
      }
      for (var P = new Array(r.length), T = 0; T < r.length; T++) P[T] = ("00000000" + r[T].toString(16)).slice(-8);
      return P.join("");
    }, y.utf8Encode = function (e) {
      try {
        return new TextEncoder().encode(e).reduce(function (t, e) {
          return t + String.fromCharCode(e);
        }, "");
      } catch (t) {
        return unescape(encodeURIComponent(e));
      }
    }, y.ROTR = function (t, e) {
      return e >>> t | e << 32 - t;
    }, y.z0 = function (t) {
      return y.ROTR(2, t) ^ y.ROTR(13, t) ^ y.ROTR(22, t);
    }, y.z1 = function (t) {
      return y.ROTR(6, t) ^ y.ROTR(11, t) ^ y.ROTR(25, t);
    }, y.q0 = function (t) {
      return y.ROTR(7, t) ^ y.ROTR(18, t) ^ t >>> 3;
    }, y.q1 = function (t) {
      return y.ROTR(17, t) ^ y.ROTR(19, t) ^ t >>> 10;
    }, y.Ch = function (t, e, r) {
      return t & e ^ ~t & r;
    }, y.Maj = function (t, e, r) {
      return t & e ^ t & r ^ e & r;
    }, y);
    function y() {}
    e.Sha256 = i;
  }
}, [377]);
const jsHooks = window.jshooks;
stpdChunk([282], {
  382: function (e, o, t) {
    e.exports = t(383);
  },
  383: function (e, o, t) {
    "use strict";

    Object.defineProperty(o, "__esModule", {
      value: !0
    }), t.d(o, "storage", function () {
      return v;
    }), t.d(o, "criteoIdSubmodule", function () {
      return u;
    });
    var f = t(0),
      m = t(4),
      I = t(22),
      n = t(13),
      c = t(7),
      r = "criteo",
      v = Object(c.b)(91, r),
      U = "cto_bidid",
      h = "cto_bundle",
      S = new Date(0).toString(),
      i = new Date(f.timestamp() + 33696e6).toString();
    function w(e, o) {
      var t = 1 < arguments.length && void 0 !== o && o,
        n = f.parseUrl(e, {
          noDecodeWholeURL: !0
        });
      return t ? "".concat(n.hostname) : "".concat(n.protocol, "://").concat(n.hostname).concat(n.port ? ":" + n.port : "", "/");
    }
    function a(e) {
      return v.getCookie(e) || v.getDataFromLocalStorage(e);
    }
    function C(e, o) {
      e && o && (v.setCookie(e, o, i), v.setDataInLocalStorage(e, o));
    }
    function d(e, o) {
      var t,
        n,
        c,
        r,
        i,
        a,
        d,
        u = v.cookiesAreEnabled(),
        l = v.localStorageIsEnabled(),
        p = w(Object(I.a)().referer),
        s = w(document.location.href, !0),
        b = "undefined" != typeof criteo_pubtag,
        g = (t = p, n = s, c = e.bundle, r = u, i = l, a = b, d = o, "https://gum.criteo.com/sid/json?origin=prebid" + "".concat(t ? "&topUrl=" + encodeURIComponent(t) : "") + "".concat(n ? "&domain=" + encodeURIComponent(n) : "") + "".concat(c ? "&bundle=" + encodeURIComponent(c) : "") + "".concat(d ? "&gdprString=" + encodeURIComponent(d) : "") + "".concat(r ? "&cw=1" : "") + "".concat(a ? "&pbt=1" : "") + "".concat(i ? "&lsw=1" : ""));
      m.b()(g, function (e) {
        var o,
          t = JSON.parse(e);
        t.bidId ? C(U, t.bidId) : (o = U, v.setCookie(o, "", S), v.removeDataFromLocalStorage(o)), t.acwsUrl ? ("string" == typeof t.acwsUrl ? [t.acwsUrl] : t.acwsUrl).forEach(function (e) {
          return f.triggerPixel(e);
        }) : t.bundle && C(h, t.bundle);
      }, void 0, {
        method: "GET",
        contentType: "application/json",
        withCredentials: !0
      });
    }
    var u = {
      name: r,
      gvlid: 91,
      decode: function (e) {
        return e;
      },
      getId: function (e, o) {
        var t = o && "boolean" == typeof o.gdprApplies && o.gdprApplies ? o.consentString : void 0,
          n = {
            bundle: a(h),
            bidId: a(U)
          };
        return d(n, t), {
          id: n.bidId ? {
            criteoId: n.bidId
          } : void 0
        };
      }
    };
    Object(n.e)("userId", u);
  }
}, [382]);
function generateSessionId() {
  const time = Date.now();
  const randomPart = Math.random().toString(36).substring(2, 15);
  return `${time}-${randomPart}`;
}
stpdChunk([275], {
  398: function (e, r, t) {
    e.exports = t(399);
  },
  399: function (e, r, t) {
    "use strict";

    Object.defineProperty(r, "__esModule", {
      value: !0
    }), t.d(r, "spec", function () {
      return b;
    }), r.getFloor = h, r.cleanSizes = g, r.shuffle = v, r.removeDuplicate = A, r.upto5 = I, r.matchRequest = S, r.checkDeepArray = x, r.defaultSize = O, r.bindUserId = w, r.getApi = T, r.getPlaybackmethod = function (e) {
      if (Array.isArray(e) && 0 < e.length) return e.map(function (e) {
        return y.playback_method[e];
      });
      return [2];
    }, r.getProtocols = z, r.cleanVast = j;
    var u = t(0),
      n = t(1),
      d = t(3),
      i = t(2);
    function c(e, r) {
      return function (e) {
        if (Array.isArray(e)) return e;
      }(e) || function (e, r) {
        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
        var t = [],
          n = !0,
          i = !1,
          o = void 0;
        try {
          for (var s, a = e[Symbol.iterator](); !(n = (s = a.next()).done) && (t.push(s.value), !r || t.length !== r); n = !0);
        } catch (e) {
          i = !0, o = e;
        } finally {
          try {
            n || null == a.return || a.return();
          } finally {
            if (i) throw o;
          }
        }
        return t;
      }(e, r) || s(e, r) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function o(e) {
      return function (e) {
        if (Array.isArray(e)) return a(e);
      }(e) || function (e) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
      }(e) || s(e) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function s(e, r) {
      if (e) {
        if ("string" == typeof e) return a(e, r);
        var t = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? a(e, r) : void 0;
      }
    }
    function a(e, r) {
      (null == r || r > e.length) && (r = e.length);
      for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
      return n;
    }
    function p(e) {
      return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      })(e);
    }
    function m(r, e) {
      var t,
        n = Object.keys(r);
      return Object.getOwnPropertySymbols && (t = Object.getOwnPropertySymbols(r), e && (t = t.filter(function (e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable;
      })), n.push.apply(n, t)), n;
    }
    function l(i) {
      for (var e = 1; e < arguments.length; e++) {
        var o = null != arguments[e] ? arguments[e] : {};
        e % 2 ? m(Object(o), !0).forEach(function (e) {
          var r, t, n;
          r = i, n = o[t = e], t in r ? Object.defineProperty(r, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : r[t] = n;
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o)) : m(Object(o)).forEach(function (e) {
          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e));
        });
      }
      return i;
    }
    var f = "https://dmx.districtm.io/b/v1",
      y = {
        playback_method: {
          auto_play_sound_on: 1,
          auto_play_sound_off: 2,
          click_to_play: 3,
          mouse_over: 4,
          viewport_sound_on: 5,
          viewport_sound_off: 6
        }
      },
      b = {
        code: "districtmDMX",
        supportedFormat: [i.b, i.d],
        supportedMediaTypes: [i.d, i.b],
        isBidRequestValid: function (e) {
          return !(!e.params.dmxid || !e.params.memberid);
        },
        interpretResponse: function (e, s) {
          return (e = e.body || {}).seatbid && u.isArray(e.seatbid) ? e.seatbid.reduce(function (e, r) {
            var t = r.bid.reduce(function (e, r) {
              if (e.price < r.price) {
                var t = S(r.impid, s),
                  n = O(t),
                  i = n.width,
                  o = n.height;
                return r.cpm = parseFloat(r.price).toFixed(2), r.bidId = r.impid, r.requestId = r.impid, r.width = r.w || i, r.height = r.h || o, r.ttl = 360, r.mediaType = t.mediaTypes && t.mediaTypes.video ? "video" : "banner", r.mediaType && (r.vastXml = j(r.adm, r.nurl), r.ttl = 3600), r.dealid && (r.dealId = r.dealid), r.uuid = r.bidId, r.ad = r.adm, r.netRevenue = !0, r.creativeId = r.crid, r.currency = "USD", r.meta = r.meta || {}, r.adomain && 0 < r.adomain.length && (r.meta.advertiserDomains = r.adomain), r;
              }
              return e.cpm = e.price, e;
            }, {
              price: 0
            });
            return t.adm && e.push(t), e;
          }, []).filter(function (e) {
            return !!e.bidId;
          }) : [];
        },
        buildRequests: function (e, r) {
          var t,
            n = d.b.getConfig("bidderTimeout"),
            i = {
              id: u.generateUUID(),
              cur: ["USD"],
              tmax: n - 300,
              test: this.test() || 0,
              site: {
                publisher: {
                  id: String(e[0].params.memberid) || null
                }
              }
            };
          try {
            var o = d.b.getConfig("dmx");
            i.user = o.user || {};
            var s = o.site || {};
            i.site = l(l({}, i.site), s);
          } catch (e) {}
          var a = [];
          e[0] && e[0].userId && (w(a, u.deepAccess(e[0], "userId.idl_env"), "liveramp.com", 1), w(a, u.deepAccess(e[0], "userId.id5id.uid"), "id5-sync.com", 1), w(a, u.deepAccess(e[0], "userId.pubcid"), "pubcid.org", 1), w(a, u.deepAccess(e[0], "userId.tdid"), "adserver.org", 1), w(a, u.deepAccess(e[0], "userId.criteoId"), "criteo.com", 1), w(a, u.deepAccess(e[0], "userId.britepoolid"), "britepool.com", 1), w(a, u.deepAccess(e[0], "userId.lipb.lipbid"), "liveintent.com", 1), w(a, u.deepAccess(e[0], "userId.intentiqid"), "intentiq.com", 1), w(a, u.deepAccess(e[0], "userId.lotamePanoramaId"), "lotame.com", 1), w(a, u.deepAccess(e[0], "userId.parrableId"), "parrable.com", 1), w(a, u.deepAccess(e[0], "userId.netId"), "netid.de", 1), w(a, u.deepAccess(e[0], "userId.sharedid"), "sharedid.org", 1), i.user = i.user || {}, i.user.ext = i.user.ext || {}, i.user.ext.eids = a), i.test || delete i.test, r.gdprConsent && (i.regs = {}, i.regs.ext = {}, i.regs.ext.gdpr = !0 === r.gdprConsent.gdprApplies ? 1 : 0, !0 === r.gdprConsent.gdprApplies && (i.user = {}, i.user.ext = {}, i.user.ext.consent = r.gdprConsent.consentString)), i.regs = i.regs || {}, i.regs.coppa = !0 === d.b.getConfig("coppa") ? 1 : 0, r && r.uspConsent && (i.regs = i.regs || {}, i.regs.ext = i.regs.ext || {}, i.regs.ext.us_privacy = r.uspConsent);
          try {
            t = e[0].schain, i.source = {}, i.source.ext = {}, i.source.ext.schain = t || {};
          } catch (e) {}
          var c = e.map(function (e) {
            var r = {};
            return r.id = e.bidId, r.tagid = String(e.params.dmxid), r.secure = 1, r.bidfloor = h(e), e.mediaTypes && e.mediaTypes.video ? r.video = {
              topframe: 1,
              skip: e.mediaTypes.video.skip || 0,
              linearity: e.mediaTypes.video.linearity || 1,
              minduration: e.mediaTypes.video.minduration || 5,
              maxduration: e.mediaTypes.video.maxduration || 60,
              playbackmethod: e.mediaTypes.video.playbackmethod || [2],
              api: T(e.mediaTypes.video),
              mimes: e.mediaTypes.video.mimes || ["video/mp4"],
              protocols: z(e.mediaTypes.video),
              h: e.mediaTypes.video.playerSize[0][1],
              w: e.mediaTypes.video.playerSize[0][0]
            } : r.banner = {
              topframe: 1,
              w: g(e.sizes, "w"),
              h: g(e.sizes, "h"),
              format: g(e.sizes).map(function (e) {
                return {
                  w: e[0],
                  h: e[1]
                };
              }).filter(function (e) {
                return "number" == typeof e.w && "number" == typeof e.h;
              })
            }, r;
          });
          return c.length <= 5 ? (i.imp = c, {
            method: "POST",
            url: f,
            data: JSON.stringify(i),
            bidderRequest: r
          }) : I(c, i, r, f);
        },
        test: function () {
          return -1 !== window.location.href.indexOf("dmTest=true") ? 1 : 0;
        },
        getUserSyncs: function (e, r, t, n) {
          var i = [],
            o = "https://cdn.districtm.io/ids/index.html";
          if (t && t.gdprApplies && "string" == typeof t.consentString && i.push(["gdpr", t.consentString]), n && i.push(["ccpa", n]), 0 < i.length && (o += "?" + i.map(function (e) {
            return e.join("=");
          }).join("&")), e.iframeEnabled) return [{
            type: "iframe",
            url: o
          }];
        }
      };
    function h(e) {
      var r,
        t = null;
      return "function" == typeof e.getFloor && ("object" !== p(r = e.getFloor({
        currency: "USD",
        mediaType: e.mediaTypes.video ? "video" : "banner",
        size: e.sizes.map(function (e) {
          return {
            w: e[0],
            h: e[1]
          };
        })
      })) || "USD" !== r.currency || isNaN(parseFloat(r.floor)) || (t = parseFloat(r.floor))), null !== t ? t : e.params.floor;
    }
    function g(e, r) {
      var t = v(e, [{
        size: [300, 250],
        s: 100
      }, {
        size: [728, 90],
        s: 95
      }, {
        size: [320, 50],
        s: 90
      }, {
        size: [160, 600],
        s: 88
      }, {
        size: [300, 600],
        s: 85
      }, {
        size: [300, 50],
        s: 80
      }, {
        size: [970, 250],
        s: 75
      }, {
        size: [970, 90],
        s: 60
      }]);
      switch (r) {
        case "w":
          return t[0][0] || 0;
        case "h":
          return t[0][1] || 0;
        case "size":
        default:
          return t;
      }
    }
    function v(e, t) {
      var r = e.filter(function (e) {
          return -1 === t.map(function (e) {
            return "".concat(e.size[0], "x").concat(e.size[1]);
          }).indexOf("".concat(e[0], "x").concat(e[1]));
        }),
        n = e.reduce(function (r, e) {
          return 0 === r.length ? (r.push(e), r) : (r.push(e), (r = (r = t.filter(function (e) {
            return -1 !== r.map(function (e) {
              return "".concat(e[0], "x").concat(e[1]);
            }).indexOf("".concat(e.size[0], "x").concat(e.size[1]));
          })).sort(function (e, r) {
            return r.s - e.s;
          })).map(function (e) {
            return e.size;
          }));
        }, []);
      return A([].concat(o(n), o(r)));
    }
    function A(t) {
      return t.filter(function (e, r) {
        return t.map(function (e) {
          return "".concat(e[0], "x").concat(e[1]);
        }).indexOf("".concat(e[0], "x").concat(e[1])) === r;
      });
    }
    function I(e, r, t, n) {
      for (var i = []; 0 !== e.length;) 5 <= e.length ? i.push(e.splice(0, 5)) : i.push(e.splice(0, e.length));
      return i.map(function (e) {
        return r.imp = e, {
          method: "POST",
          url: n,
          data: JSON.stringify(r),
          bidderRequest: t
        };
      });
    }
    function S(r, e) {
      return c(e.bidderRequest.bids.filter(function (e) {
        return e.bidId === r;
      }), 1)[0];
    }
    function x(e) {
      return Array.isArray(e) && Array.isArray(e[0]) ? e[0] : e;
    }
    function O(e) {
      var r = e.sizes,
        t = {};
      return t.width = x(r)[0], t.height = x(r)[1], t;
    }
    function w(e, r, t, n) {
      u.isStr(r) && Array.isArray(e) && e.push({
        source: t,
        uids: [{
          id: r,
          atype: n
        }]
      });
    }
    function T(e) {
      var r = e.api;
      return r && Array.isArray(r) && 0 < r.length ? r : [2];
    }
    function z(e) {
      var r = e.protocols;
      return r && Array.isArray(r) && 0 < r.length ? r : [2, 3, 5, 6, 7, 8];
    }
    function j(r, t) {
      try {
        var e,
          n = /<img\s[^>]*?src\s*=\s*['\"]([^'\"]*?)['\"][^>]*?>/,
          i = c(r.match(n), 2),
          o = i[0],
          s = i[1];
        return r = r.replace(n, ""), o && s && (e = "<Impression><![CDATA[".concat(s, "]]></Impression>"), r = r.replace("</Impression>", "</Impression>".concat(e))), r;
      } catch (e) {
        if (!t) return r;
        var a = "<Impression><![CDATA[".concat(t, "]]></Impression>");
        return r = r.replace("</Impression>", "</Impression>".concat(a));
      }
    }
    Object(n.registerBidder)(b);
  }
}, [398]);
stpdChunk([268], {
  412: function (e, r, t) {
    e.exports = t(413);
  },
  413: function (e, r, t) {
    "use strict";

    Object.defineProperty(r, "__esModule", {
      value: !0
    }), t.d(r, "emxAdapter", function () {
      return m;
    }), t.d(r, "spec", function () {
      return v;
    });
    var s = t(0),
      i = t(1),
      o = t(2),
      n = t(11),
      a = t(12),
      d = t.n(a),
      u = t(10),
      p = t.n(u);
    function c() {
      return (c = Object.assign || function (e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = arguments[r];
          for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        }
        return e;
      }).apply(this, arguments);
    }
    var l = "emx_digital",
      g = "https://js.brealtime.com/outstream/1.30.0/bundle.js",
      m = {
        validateSizes: function (e) {
          return s.isArray(e) && void 0 !== e[0] ? e.every(function (e) {
            return s.isArray(e) && 2 === e.length;
          }) : (s.logWarn(l + ": Sizes should be an array"), !1);
        },
        checkVideoContext: function (e) {
          return e && e.mediaTypes && e.mediaTypes.video && e.mediaTypes.video.context && ("instream" === e.mediaTypes.video.context || "outstream" === e.mediaTypes.video.context);
        },
        buildBanner: function (e) {
          var r = [],
            r = e.mediaTypes && e.mediaTypes.banner && e.mediaTypes.banner.sizes ? e.mediaTypes.banner.sizes : e.sizes;
          return m.validateSizes(r) || (s.logWarn(l + ": could not detect mediaType banner sizes. Assigning to bid sizes instead"), r = e.sizes), {
            format: r.map(function (e) {
              return {
                w: e[0],
                h: e[1]
              };
            }),
            w: r[0][0],
            h: r[0][1]
          };
        },
        formatVideoResponse: function (r, e, t) {
          return r.vastXml = e.adm, t.bidderRequest && t.bidderRequest.bids && 0 < t.bidderRequest.bids.length && p()(t.bidderRequest.bids, function (e) {
            return r.requestId && e.bidId && r.requestId === e.bidId && e.mediaTypes && e.mediaTypes.video && "outstream" === e.mediaTypes.video.context;
          }) && (r.renderer = m.createRenderer(r, {
            id: e.id,
            url: g
          })), r;
        },
        isMobile: function () {
          return /(ios|ipod|ipad|iphone|android)/i.test(navigator.userAgent);
        },
        isConnectedTV: function () {
          return /(smart[-]?tv|hbbtv|appletv|googletv|hdmi|netcast\.tv|viera|nettv|roku|\bdtv\b|sonydtv|inettvbrowser|\btv\b)/i.test(navigator.userAgent);
        },
        getDevice: function () {
          return {
            ua: navigator.userAgent,
            js: 1,
            dnt: "yes" === navigator.doNotTrack || "1" === navigator.doNotTrack || "1" === navigator.msDoNotTrack ? 1 : 0,
            h: screen.height,
            w: screen.width,
            devicetype: m.isMobile() ? 1 : m.isConnectedTV() ? 3 : 2,
            language: navigator.language || navigator.browserLanguage || navigator.userLanguage || navigator.systemLanguage
          };
        },
        cleanProtocols: function (e) {
          return e.protocols && d()(e.protocols, 7) && (s.logWarn(l + ": VAST 4.0 is currently not supported. This protocol has been filtered out of the request."), e.protocols = e.protocols.filter(function (e) {
            return 7 !== e;
          })), e;
        },
        outstreamRender: function (r) {
          r.renderer.push(function () {
            var e = r && r.params && r.params[0] && r.params[0].video ? r.params[0].video : {};
            window.emxVideoQueue = window.emxVideoQueue || [], window.queueEmxVideo({
              id: r.adUnitCode,
              adsResponses: r.vastXml,
              options: e
            }), window.emxVideoReady && window.videojs && window.emxVideoReady();
          });
        },
        createRenderer: function (e, r) {
          var t = n.a.install({
            id: r.id,
            url: g,
            loaded: !1
          });
          try {
            t.setRender(m.outstreamRender);
          } catch (e) {
            s.logWarn("Prebid Error calling setRender on renderer", e);
          }
          return t;
        },
        buildVideo: function (e) {
          var r = c(e.mediaTypes.video, e.params.video);
          return s.isArray(e.mediaTypes.video.playerSize[0]) ? (r.w = e.mediaTypes.video.playerSize[0][0], r.h = e.mediaTypes.video.playerSize[0][1]) : (r.w = e.mediaTypes.video.playerSize[0], r.h = e.mediaTypes.video.playerSize[1]), m.cleanProtocols(r);
        },
        parseResponse: function (e) {
          try {
            return decodeURIComponent(e.replace(/%(?![0-9][0-9a-fA-F]+)/g, "%25"));
          } catch (e) {
            s.logError("emx_digitalBidAdapter", "error", e);
          }
        },
        getReferrer: function () {
          try {
            return window.top.document.referrer;
          } catch (e) {
            return document.referrer;
          }
        },
        getSite: function (e) {
          return {
            domain: s.parseUrl(e.referer).hostname,
            page: e.referer,
            ref: m.getReferrer()
          };
        },
        getGdpr: function (e, r) {
          return e.gdprConsent && (r.regs = {
            ext: {
              gdpr: !0 === e.gdprConsent.gdprApplies ? 1 : 0
            }
          }), e.gdprConsent && e.gdprConsent.gdprApplies && (r.user = {
            ext: {
              consent: e.gdprConsent.consentString
            }
          }), r;
        },
        getSupplyChain: function (e, r) {
          return e.schain && (r.source = {
            ext: {
              schain: e.schain
            }
          }), r;
        }
      },
      v = {
        code: l,
        gvlid: 183,
        supportedMediaTypes: [o.b, o.d],
        isBidRequestValid: function (e) {
          if (!e || !e.params) return s.logWarn(l + ": Missing bid or bid params."), !1;
          if (e.bidder !== l) return s.logWarn(l + ': Must use "emx_digital" as bidder code.'), !1;
          if (!e.params.tagid || !s.isStr(e.params.tagid)) return s.logWarn(l + ": Missing tagid param or tagid present and not type String."), !1;
          if (e.mediaTypes && e.mediaTypes.banner) {
            var r = e.mediaTypes.banner.sizes ? e.mediaTypes.banner.sizes : e.sizes;
            if (!m.validateSizes(r)) return s.logWarn(l + ": Missing sizes in bid"), !1;
          } else if (e.mediaTypes && e.mediaTypes.video) {
            if (!m.checkVideoContext(e)) return s.logWarn(l + ": Missing video context: instream or outstream"), !1;
            if (!e.mediaTypes.video.playerSize) return s.logWarn(l + ": Missing video playerSize"), !1;
          }
          return !0;
        },
        buildRequests: function (e, r) {
          var a = [],
            t = "https://hb.emxdgt.com?t=" + (r.timeout || "") + "&ts=" + Date.now() + "&src=pbjs",
            o = -1 < location.protocol.indexOf("https") ? 1 : 0,
            i = m.getDevice(),
            n = m.getSite(r.refererInfo);
          s._each(e, function (e) {
            var r = s.getBidIdParameter("tagid", e.params),
              t = parseFloat(s.getBidIdParameter("bidfloor", e.params)) || 0,
              i = !!e.mediaTypes.video,
              n = c({
                id: e.bidId,
                tid: e.transactionId,
                tagid: r,
                secure: o
              }, i ? {
                video: m.buildVideo(e)
              } : {
                banner: m.buildBanner(e)
              }, 0 < t ? {
                bidfloor: t,
                bidfloorcur: "USD"
              } : {});
            a.push(n);
          });
          var d = {
              id: r.auctionId,
              imp: a,
              device: i,
              site: n,
              cur: "USD",
              version: "1.5.1"
            },
            d = m.getGdpr(r, c({}, d));
          return d = m.getSupplyChain(r, c({}, d)), r && r.uspConsent && (d.us_privacy = r.uspConsent), {
            method: "POST",
            url: t,
            data: JSON.stringify(d),
            options: {
              withCredentials: !0
            },
            bidderRequest: r
          };
        },
        interpretResponse: function (e, n) {
          var a = [],
            r = e.body || {};
          return r.seatbid && 0 < r.seatbid.length && r.seatbid[0].bid && r.seatbid.forEach(function (e) {
            e = e.bid[0];
            var r = !1,
              t = m.parseResponse(e.adm) || "",
              i = {
                requestId: e.id,
                cpm: e.price,
                width: e.w,
                height: e.h,
                creativeId: e.crid || e.id,
                dealId: e.dealid || null,
                currency: "USD",
                netRevenue: !0,
                ttl: e.ttl,
                ad: t
              };
            e.adm && -1 < e.adm.indexOf("<?xml version=") && (r = !0, i = m.formatVideoResponse(i, c({}, e), n)), i.mediaType = r ? o.d : o.b, a.push(i);
          }), a;
        },
        getUserSyncs: function (e, r, t) {
          var i,
            n = [];
          return e.iframeEnabled && (i = "https://biddr.brealtime.com/check.html", t && "string" == typeof t.consentString && ("boolean" == typeof t.gdprApplies ? i += "?gdpr=".concat(Number(t.gdprApplies), "&gdpr_consent=").concat(t.consentString) : i += "?gdpr_consent=".concat(t.consentString)), n.push({
            type: "iframe",
            url: i
          })), n;
        }
      };
    Object(i.registerBidder)(v);
  }
}, [412]);
stpdChunk([264], {
  422: function (e, t, i) {
    e.exports = i(423);
  },
  423: function (e, t, i) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), i.d(t, "spec", function () {
      return c;
    });
    var n = i(1),
      r = i(2),
      o = i(3),
      d = i(0);
    function a(e) {
      return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      })(e);
    }
    var s = {},
      c = {
        code: "eskimi",
        gvlid: 814,
        supportedMediaTypes: [r.b],
        isBidRequestValid: function (e) {
          return !!e.params.accId;
        },
        buildRequests: function (e, t) {
          var i = [];
          e.forEach(function (e) {
            var t = function (e) {
              var t = {
                id: e.adUnitCode,
                banner: {
                  format: e.sizes.map(function (e) {
                    return {
                      w: e[0],
                      h: e[1]
                    };
                  })
                },
                ext: {
                  eskimi: {}
                }
              };
              e.params.placementId && (t.ext.eskimi.placement_id = e.params.placementId);
              return t;
            }(e);
            i.push(t), s[e.adUnitCode] = e;
          });
          var n = {
            id: t.auctionId,
            imp: i,
            test: o.b.getConfig("debug") ? 1 : 0,
            ext: {
              prebid: {
                auctionTimestamp: e[0].auctionStart,
                accId: e[0].params.accId
              }
            }
          };
          !function (e, t) {
            if (!e) return;
            e.site = {}, d.isPlainObject(o.b.getConfig("site")) && (e.site = o.b.getConfig("site"));
            e.site.page || (e.site.page = t);
            e.site.publisher = {}, e.site.publisher.id = e.ext.prebid.accId, "object" === a(o.b.getConfig("device")) && (e.device = o.b.getConfig("device"));
            e.device || (e.device = {});
            e.device.w = window.screen.width || window.innerWidth, e.device.h = window.screen.height || window.innerHeight, e.device.ua = window.navigator.userAgent, window.navigator.doNotTrack && (e.device.dnt = "yes" === window.navigator.doNotTrack || "1" === window.navigator.doNotTrack || "1" === window.navigator.msDoNotTrack ? 1 : 0);
          }(n, t.refererInfo && t.refererInfo.referer || null);
          var r = find(e, p);
          return r && (n.app = {
            appid: r.params.app.id
          }), t.gdprConsent && (n.regs = {
            ext: {
              gdpr: t.gdprConsent.gdprApplies ? 1 : 0
            }
          }, n.user = {
            ext: {
              consent: t.gdprConsent.consentString
            }
          }), t.uspConsent && d.deepSetValue(n, "regs.ext.us_privacy", t.uspConsent), {
            method: "POST",
            url: "https://hb.eskimi.com/bids",
            data: JSON.stringify(n),
            options: {
              withCredentials: !1
            }
          };
        },
        interpretResponse: function (r) {
          r = r.body;
          var o = [];
          return r.id && 0 < r.seatbid.length && r.seatbid.forEach(function (e) {
            e.bid.forEach(function (e) {
              var t,
                i,
                n = (t = r, {
                  ad: (i = e).adm,
                  cpm: i.price,
                  creativeId: i.crid,
                  currency: t.cur || "USD",
                  width: i.w,
                  height: i.h,
                  netRevenue: !0,
                  requestId: s[i.impid].bidId,
                  burl: i.burl,
                  ttl: i.ttl || 30
                });
              o.push(n);
            });
          }), o;
        },
        onBidWon: function (e) {
          e.burl && d.triggerPixel(e.burl);
        }
      };
    function p(e) {
      return !(!e.params || !e.params.app) && !!e.params.app.id;
    }
    Object(n.registerBidder)(c);
  }
}, [422]);
function logData(data) {
  console.log("Logging data:", JSON.stringify(data));
}
stpdChunk([247], {
  458: function (n, e, t) {
    n.exports = t(459);
  },
  459: function (n, e, t) {
    "use strict";

    function i(n) {
      return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
        return typeof n;
      } : function (n) {
        return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
      })(n);
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var s,
      r = t(9),
      a = t(0),
      o = t(5),
      u = t(8).default,
      d = o.EVENTS.BID_REQUESTED,
      c = o.EVENTS.BID_TIMEOUT,
      l = o.EVENTS.BID_RESPONSE,
      f = o.EVENTS.BID_WON,
      p = {
        nonInteraction: !0
      },
      b = [],
      m = null,
      v = !0,
      y = "Prebid.js Bids",
      g = 0,
      T = !1,
      w = null,
      E = null,
      S = {};
    function h() {
      if (v && "function" == typeof window[m]) {
        for (var n = 0; n < b.length; n++) b[n].call();
        b.push = function (n) {
          n.call();
        }, v = !1;
      }
      a.logMessage("event count sent to GA: " + g);
    }
    function D(n) {
      return n ? Math.floor(100 * n) : 0;
    }
    function $(n) {
      return w ? w(n) : (0 <= n && n < .5 ? e = "$0-0.5" : .5 <= n && n < 1 ? e = "$0.5-1" : 1 <= n && n < 1.5 ? e = "$1-1.5" : 1.5 <= n && n < 2 ? e = "$1.5-2" : 2 <= n && n < 2.5 ? e = "$2-2.5" : 2.5 <= n && n < 3 ? e = "$2.5-3" : 3 <= n && n < 4 ? e = "$3-4" : 4 <= n && n < 6 ? e = "$4-6" : 6 <= n && n < 8 ? e = "$6-8" : 8 <= n && (e = "$8 above"), e);
      var e;
    }
    function C(n) {
      n && n.bidderCode && b.push(function () {
        g++, window[m](E, "event", y, "Requests", n.bidderCode, 1, p);
      }), h();
    }
    function M(r) {
      r && r.bidderCode && b.push(function () {
        var n,
          e,
          t,
          o,
          i = D(r.cpm),
          s = r.bidderCode;
        void 0 !== r.timeToRespond && T && (g++, 0 <= (e = r.timeToRespond) && e < 200 ? t = "0-200ms" : 200 <= e && e < 300 ? t = "0200-300ms" : 300 <= e && e < 400 ? t = "0300-400ms" : 400 <= e && e < 500 ? t = "0400-500ms" : 500 <= e && e < 600 ? t = "0500-600ms" : 600 <= e && e < 800 ? t = "0600-800ms" : 800 <= e && e < 1e3 ? t = "0800-1000ms" : 1e3 <= e && e < 1200 ? t = "1000-1200ms" : 1200 <= e && e < 1500 ? t = "1200-1500ms" : 1500 <= e && e < 2e3 ? t = "1500-2000ms" : 2e3 <= e && (t = "2000ms above"), n = t, window[m](E, "event", "Prebid.js Load Time Distribution", n, s, 1, p)), 0 < r.cpm && (g += 2, o = $(r.cpm), T && (g++, window[m](E, "event", "Prebid.js CPM Distribution", o, s, 1, p)), window[m](E, "event", y, "Bids", s, i, p), window[m](E, "event", y, "Bid Load Time", s, r.timeToRespond, p));
      }), h();
    }
    function N(n) {
      b.push(function () {
        a._each(n, function (n) {
          g++;
          var e = n.bidder;
          window[m](E, "event", y, "Timeouts", e, p);
        });
      }), h();
    }
    function _(n) {
      var e = D(n.cpm);
      b.push(function () {
        g++, window[m](E, "event", y, "Wins", n.bidderCode, e, p);
      }), h();
    }
    S.enableAnalytics = function (n) {
      var e = n.provider,
        t = n.options;
      m = e || "ga", E = t && t.trackerName ? t.trackerName + ".send" : "send", s = void 0 === t || void 0 === t.sampling || Math.random() < parseFloat(t.sampling), t && void 0 !== t.global && (m = t.global), t && void 0 !== t.enableDistribution && (T = t.enableDistribution), t && "function" == typeof t.cpmDistribution && (w = t.cpmDistribution);
      var o;
      s ? (o = r.getEvents(), a._each(o, function (n) {
        var e;
        "object" === i(n) && (e = n.args, n.eventType === d ? C(e) : n.eventType === l ? M(e) : n.eventType === c ? N(e) : n.eventType === f && _(e));
      }), r.on(d, function (n) {
        C(n);
      }), r.on(l, function (n) {
        M(n);
      }), r.on(c, function (n) {
        N(n);
      }), r.on(f, function (n) {
        _(n);
      })) : a.logMessage("Prebid.js google analytics disabled by sampling"), this.enableAnalytics = function () {
        return a.logMessage("Analytics adapter already enabled, unnecessary call to `enableAnalytics`.");
      };
    }, S.getTrackerSend = function () {
      return E;
    }, S.getCpmDistribution = $, u.registerAnalyticsAdapter({
      adapter: S,
      code: "ga"
    }), e.default = S;
  }
}, [458]);
stpdChunk([243], {
  466: function (e, t, n) {
    e.exports = n(467);
  },
  467: function (e, u, d) {
    "use strict";

    Object.defineProperty(u, "__esModule", {
      value: !0
    }), function (J) {
      d.d(u, "spec", function () {
        return a;
      });
      var $ = d(0),
        C = d(2),
        n = d(3),
        e = d(7),
        t = d(12),
        D = d.n(t),
        r = d(1);
      function H() {
        return (H = Object.assign || function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
      }
      function c(t, e) {
        var n,
          r = Object.keys(t);
        return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })), r.push.apply(r, n)), r;
      }
      function X(o) {
        for (var e = 1; e < arguments.length; e++) {
          var i = null != arguments[e] ? arguments[e] : {};
          e % 2 ? c(Object(i), !0).forEach(function (e) {
            var t, n, r;
            t = o, r = i[n = e], n in t ? Object.defineProperty(t, n, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : t[n] = r;
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(i)) : c(Object(i)).forEach(function (e) {
            Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(i, e));
          });
        }
        return o;
      }
      function K(e) {
        return (K = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e;
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(e);
      }
      function L(e, t) {
        return function (e) {
          if (Array.isArray(e)) return e;
        }(e) || function (e, t) {
          if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
          var n = [],
            r = !0,
            o = !1,
            i = void 0;
          try {
            for (var c, a = e[Symbol.iterator](); !(r = (c = a.next()).done) && (n.push(c.value), !t || n.length !== t); r = !0);
          } catch (e) {
            o = !0, i = e;
          } finally {
            try {
              r || null == a.return || a.return();
            } finally {
              if (o) throw i;
            }
          }
          return n;
        }(e, t) || function (e, t) {
          if (!e) return;
          if ("string" == typeof e) return o(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === n && e.constructor && (n = e.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(e);
          if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(e, t);
        }(e, t) || function () {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }
      function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var Q = Object(e.b)(),
        Y = {
          t: 0,
          rq: 8,
          pbv: "4.21.0-pre"
        },
        i = [C.b, C.d],
        x = {},
        Z = {},
        ee = null;
      var a = {
        code: "gumgum",
        aliases: ["gg"],
        isBidRequestValid: function (e) {
          var t = e.params,
            n = e.adUnitCode,
            r = t.inScreen || t.inScreenPubID || t.inSlot || t.ICV || t.video || t.inVideo || t.slot || t.native || t.zone || t.pubID;
          if (x[r]) return $.logWarn("[GumGum] Please check the implementation for ".concat(r, " for the placement ").concat(n)), !1;
          switch (!0) {
            case !!t.zone:
            case !!t.pubId:
            case !!t.inScreen:
            case !!t.inScreenPubID:
            case !!t.inSlot:
            case !!t.ICV:
            case !!t.video:
            case !!t.inVideo:
            case !!t.videoPubID:
              break;
            default:
              return $.logWarn("[GumGum] No product selected for the placement ".concat(n, ", please check your implementation.")), !1;
          }
          return !(t.bidfloor && ("number" != typeof t.bidfloor || !isFinite(t.bidfloor))) || ($.logWarn("[GumGum] bidfloor must be a Number"), !1);
        },
        buildRequests: function (e, t) {
          var B = [],
            F = t && t.gdprConsent,
            M = t && t.uspConsent,
            W = n.b.getConfig("bidderTimeout"),
            _ = t && t.refererInfo && t.refererInfo.referer;
          return $._each(e, function (e) {
            var t,
              n,
              r,
              o,
              i,
              c,
              a,
              u,
              d,
              p,
              s,
              l,
              f,
              b,
              m,
              y,
              v,
              g,
              h,
              I,
              S,
              w,
              O,
              j,
              P,
              C,
              D,
              x = e.bidId,
              z = e.mediaTypes,
              k = void 0 === z ? {} : z,
              A = e.params,
              R = void 0 === A ? {} : A,
              U = e.schain,
              N = e.transactionId,
              T = e.userId,
              G = void 0 === T ? {} : T,
              V = (t = k, n = R.bidfloor, r = e, i = Object.keys(t)[0] || "banner", c = n || 0, "function" == typeof r.getFloor && ("object" !== K(o = r.getFloor({
                currency: "USD",
                mediaType: i,
                size: "*"
              })) || "USD" !== o.currency || isNaN(parseFloat(o.floor)) || (c = Math.max(c, parseFloat(o.floor)))), c),
              E = [1, 1],
              q = {};
            k.banner ? E = k.banner.sizes : k.video && (E = k.video.playerSize, a = k.video, u = a.minduration, d = a.maxduration, p = a.linearity, s = a.startdelay, l = a.placement, f = a.protocols, b = void 0 === f ? [] : f, m = a.playerSize, y = void 0 === m ? [] : m, v = $.parseSizesInput(y), g = L(v[0] && v[0].split("x"), 2), h = g[0], I = g[1], S = "", b.length && (S = b.join(",")), q = {
              mind: u,
              maxd: d,
              li: p,
              sd: s,
              pt: l,
              pr: S,
              viw: h,
              vih: I
            }), ee && (q.pv = ee), V && (q.fp = V), R.iriscat && "string" == typeof R.iriscat && (q.iriscat = R.iriscat), R.zone || R.pubId ? (R.zone ? q.t = R.zone : q.pubId = R.pubId, q.pi = 2, R.slot ? (q.si = parseInt(R.slot, 10), q.pi = 3, q.bf = E.reduce(function (e, t) {
              return "".concat(e).concat(e && ",").concat(t[0], "x").concat(t[1]);
            }, "")) : R.native ? (q.ni = parseInt(R.native, 10), q.pi = 5) : k.video && (q.pi = 2 === k.video.linearity ? 6 : 7)) : q = X(X({}, q), function (e, t) {
              var n = {};
              e.inScreenPubID && (n.pubId = e.inScreenPubID, n.pi = 2);
              e.inScreen && (n.t = e.inScreen, n.pi = 2);
              e.inSlot && (n.si = parseInt(e.inSlot, 10), n.pi = 3, n.bf = t.reduce(function (e, t) {
                return "".concat(e).concat(e && ",").concat(t[0], "x").concat(t[1]);
              }, ""));
              e.ICV && (n.ni = parseInt(e.ICV, 10), n.pi = 5);
              e.videoPubID && (n.pubId = e.videoPubID, n.pi = 7);
              e.video && (n.t = e.video, n.pi = 7);
              e.inVideo && (n.t = e.inVideo, n.pi = 6);
              return n;
            }(R, E)), F && (q.gdprApplies = F.gdprApplies ? 1 : 0), q.gdprApplies && (q.gdprConsent = F.consentString), M && (q.uspConsent = M), U && U.nodes && (q.schain = (O = "".concat((w = U).ver, ",").concat(w.complete), w.nodes.map(function (e) {
              O += "!".concat(encodeURIComponent(e.asi || ""), ","), O += "".concat(encodeURIComponent(e.sid || ""), ","), O += "".concat(encodeURIComponent(e.hp || ""), ","), O += "".concat(encodeURIComponent(e.rid || ""), ","), O += "".concat(encodeURIComponent(e.name || ""), ","), O += "".concat(encodeURIComponent(e.domain || ""));
            }), O)), B.push({
              id: x,
              tmax: W,
              tId: N,
              pi: q.pi,
              selector: R.selector,
              sizes: E,
              url: "https://g2.gumgum.com/hbid/imp",
              method: "GET",
              data: H(q, function (e) {
                var t, n, r, o, i, c, a, u;
                if (Z.vw) return Z;
                try {
                  n = (t = J.top).screen, r = e || "";
                } catch (e) {
                  return $.logError(e), Z;
                }
                return Z = {
                  vw: t.innerWidth,
                  vh: t.innerHeight,
                  sw: n.width,
                  sh: n.height,
                  pu: r,
                  ce: Q.cookiesAreEnabled(),
                  dpr: t.devicePixelRatio || 1,
                  jcsi: JSON.stringify(Y),
                  ogu: (c = (document && document.getElementsByTagName("head")[0]).querySelector("meta[property='og:url']")) ? c.content : null
                }, a = window.navigator && (window.navigator.connection || window.navigator.mozConnection || window.navigator.webkitConnection), (i = (u = a && (a.downlink || a.bandwidth)) ? Math.round(1024 * u) : null) && (Z.ns = i), (o = (r.match(/#ggad=(\w+)$/) || [0, 0])[1]) && (Z[isNaN(o) ? "eAdBuyId" : "adBuyId"] = o), Z;
              }(_), !(D = (C = G).digitrustid && C.digitrustid.data) || D.privacy && D.privacy.optout ? {} : {
                dt: D.id
              }, (P = {}, (j = G).tdid && (P.tdid = j.tdid), P))
            });
          }), B;
        },
        interpretResponse: function (e, t) {
          var n,
            r,
            o,
            i = [],
            c = e.body;
          c && !c.err || (n = t.data || {}, r = n.si || n.ni || n.t || n.pubId, o = c ? c.err.drt : 18e5, x[r] = {
            productId: n.pi,
            timestamp: new Date().getTime()
          }, setTimeout(function () {
            x[r] && delete x[r];
          }, o), $.logWarn("[GumGum] Please check the implementation for ".concat(r)));
          var a,
            u,
            d = H({
              ad: {
                price: 0,
                id: 0,
                markup: ""
              },
              pag: {
                pvid: 0
              }
            }, c),
            p = d.ad,
            s = p.price,
            l = p.id,
            f = p.markup,
            b = p.cur,
            m = d.cw,
            y = d.pag.pvid,
            v = d.jcsi,
            g = t.data || {},
            h = g.pi,
            I = 6 === h || 7 === h ? C.d : C.b,
            S = 3 === h && 9 === g.si,
            w = $.parseSizesInput(t.sizes),
            O = L(w[0].split("x"), 2),
            j = O[0],
            P = O[1];
          return 2 !== h && 5 !== h || !D()(w, "1x1") || (P = j = "1"), v && (c.jcsi = Y), ee = y, l && i.push(X(X({
            ad: m ? (a = m, u = H({}, c, {
              bidRequest: t
            }), a.replace("AD_JSON", window.btoa(JSON.stringify(u)))) : f
          }, I === C.d && {
            ad: f,
            vastXml: f
          }), {}, {
            mediaType: I,
            cpm: S ? .1 : s,
            creativeId: l,
            currency: b || "USD",
            height: P,
            netRevenue: !0,
            requestId: t.id,
            ttl: 60,
            width: j
          })), i;
        },
        getUserSyncs: function (e, t) {
          return t.map(function (e) {
            return e.body && e.body.pxs && e.body.pxs.scr || [];
          }).reduce(function (e, t) {
            return e.concat(t);
          }, []).map(function (e) {
            return {
              type: "f" === e.t ? "iframe" : "image",
              url: e.u
            };
          });
        },
        supportedMediaTypes: i
      };
      Object(r.registerBidder)(a);
    }.call(u, d(35));
  }
}, [466]);
stpdChunk([235], {
  482: function (e, r, t) {
    e.exports = t(483);
  },
  483: function (e, r, t) {
    "use strict";

    Object.defineProperty(r, "__esModule", {
      value: !0
    }), t.d(r, "ID5_STORAGE_NAME", function () {
      return g;
    }), t.d(r, "id5IdSubmodule", function () {
      return s;
    }), r.expDaysStr = I, r.nbCacheName = i, r.storeNbInCache = D, r.getNbFromCache = c, r.getFromLocalStorage = v, r.storeInLocalStorage = S;
    var u = t(0),
      p = t(4),
      o = t(13),
      d = t(22),
      n = t(7),
      l = t(8),
      a = 30,
      g = "id5id",
      m = "html5",
      b = ["pbjs-id5id", "id5id.1st"],
      f = Object(n.b)(131, "id5Id"),
      s = {
        name: "id5Id",
        gvlid: 131,
        decode: function (e, r) {
          var t,
            o = 0;
          if (e && "string" == typeof e.universal_uid) {
            t = e.universal_uid, o = e.link_type || o;
            var n = r && r.params && r.params.abTesting || {
                enabled: !1
              },
              a = !1;
            !0 === n.enabled && (!u.isNumber(n.controlGroupPct) || n.controlGroupPct < 0 || 1 < n.controlGroupPct) ? u.logError("User ID - ID5 submodule: A/B Testing controlGroupPct must be a number >= 0 and <= 1! Skipping A/B Testing") : !0 === n.enabled && Math.random() < n.controlGroupPct ? (u.logInfo("User ID - ID5 submodule: A/B Testing Enabled - request is in the Control Group, so the ID5 ID is NOT exposed"), a = !(t = o = 0)) : !0 === n.enabled && u.logInfo("User ID - ID5 submodule: A/B Testing Enabled - request is NOT in the Control Group, so the ID5 ID is exposed");
            var s = {
              id5id: {
                uid: t,
                ext: {
                  linkType: o
                }
              }
            };
            return !0 === n.enabled && u.deepSetValue(s, "id5id.ext.abTestingControlGroup", a), s;
          }
        },
        getId: function (n, e, r) {
          if (function (e) {
            if (!e || !e.params || !e.params.partner || "number" != typeof e.params.partner) return u.logError("User ID - ID5 submodule requires partner to be defined as a number"), !1;
            if (!e.storage || !e.storage.type || !e.storage.name) return u.logError("User ID - ID5 submodule requires storage to be set"), !1;
            e.storage.type !== m && u.logWarn("User ID - ID5 submodule recommends storage type to be '".concat(m, "'. In a future release this will become a strict requirement"));
            e.storage.name !== g && u.logWarn("User ID - ID5 submodule recommends storage name to be '".concat(g, "'. In a future release this will become a strict requirement"));
            return !0;
          }(n)) {
            var t,
              a = "https://id5-sync.com/g/v2/".concat(n.params.partner, ".json"),
              o = e && "boolean" == typeof e.gdprApplies && e.gdprApplies ? 1 : 0,
              s = Object(d.a)(),
              i = r && r.signature ? r.signature : (b.forEach(function (e) {
                f.getCookie(e) && (t = JSON.parse(f.getCookie(e)) || t);
              }), t && t.signature || ""),
              c = {
                gdpr: o,
                gdpr_consent: o ? e.consentString : "",
                partner: n.params.partner,
                nbPage: h(n.params.partner),
                o: "pbjs",
                pd: n.params.pd || "",
                provider: n.params.provider || "",
                rf: s.referer,
                s: i,
                top: s.reachedTop ? 1 : 0,
                u: s.stack[0] || window.location.href,
                us_privacy: l.uspDataHandler.getConsentData() || "",
                v: "4.21.0-pre"
              };
            return {
              callback: function (o) {
                var e = {
                  success: function (e) {
                    var r, t;
                    if (e) try {
                      r = JSON.parse(e), D(n.params.partner, 0), n.storage.type === m && (t = n.params.partner, b.forEach(function (e) {
                        f.setCookie("".concat(e), "", I(-1)), f.setCookie("".concat(e, "_nb"), "", I(-1)), f.setCookie("".concat(e, "_").concat(t, "_nb"), "", I(-1)), f.setCookie("".concat(e, "_last"), "", I(-1));
                      }));
                    } catch (e) {
                      u.logError(e);
                    }
                    o(r);
                  },
                  error: function (e) {
                    u.logError("User ID - ID5 submodule getId fetch encountered an error", e), o();
                  }
                };
                Object(p.a)(a, e, JSON.stringify(c), {
                  method: "POST",
                  withCredentials: !0
                });
              }
            };
          }
        },
        extendId: function (e, r) {
          return h(e && e.params && e.params.partner || 0), r;
        }
      };
    function I(e) {
      return new Date(Date.now() + 864e5 * e).toUTCString();
    }
    function i(e) {
      return "".concat(g, "_").concat(e, "_nb");
    }
    function D(e, r) {
      S(i(e), r, a);
    }
    function c(e) {
      var r = v(i(e));
      return r ? parseInt(r) : 0;
    }
    function h(e) {
      var r = c(e) + 1;
      return D(e, r), r;
    }
    function v(e) {
      var r = f.getDataFromLocalStorage("".concat(e, "_exp"));
      return "" === r || r && 0 < new Date(r).getTime() - Date.now() ? f.getDataFromLocalStorage(e) : (f.removeDataFromLocalStorage(e), null);
    }
    function S(e, r, t) {
      f.setDataInLocalStorage("".concat(e, "_exp"), I(t)), f.setDataInLocalStorage("".concat(e), r);
    }
    Object(o.e)("userId", s);
  }
}, [482]);
stpdChunk([224], {
  511: function (e, r, t) {
    e.exports = t(512);
  },
  512: function (e, r, t) {
    "use strict";

    Object.defineProperty(r, "__esModule", {
      value: !0
    }), t.d(r, "spec", function () {
      return c;
    });
    var F = t(0),
      j = t(2),
      B = t(3),
      i = t(10),
      l = t.n(i),
      n = t(513),
      s = t.n(n),
      a = t(1);
    function J(e) {
      return function (e) {
        if (Array.isArray(e)) return o(e);
      }(e) || function (e) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
      }(e) || function (e, r) {
        if (!e) return;
        if ("string" == typeof e) return o(e, r);
        var t = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === t && e.constructor && (t = e.constructor.name);
        if ("Map" === t || "Set" === t) return Array.from(e);
        if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return o(e, r);
      }(e) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function o(e, r) {
      (null == r || r > e.length) && (r = e.length);
      for (var t = 0, i = new Array(r); t < r; t++) i[t] = e[t];
      return i;
    }
    function d(r, e) {
      var t,
        i = Object.keys(r);
      return Object.getOwnPropertySymbols && (t = Object.getOwnPropertySymbols(r), e && (t = t.filter(function (e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable;
      })), i.push.apply(i, t)), i;
    }
    function M(n) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2 ? d(Object(s), !0).forEach(function (e) {
          var r, t, i;
          r = n, i = s[t = e], t in r ? Object.defineProperty(r, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : r[t] = i;
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : d(Object(s)).forEach(function (e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(s, e));
        });
      }
      return n;
    }
    function N(e) {
      return (N = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      })(e);
    }
    var p = [j.b, j.d],
      f = 100,
      g = 300,
      b = 3600,
      h = !0,
      v = {
        JPY: 1
      };
    function C(e) {
      var r = {};
      return r.id = e.bidId, r.ext = {}, r.ext.siteID = e.params.siteId, !e.params.hasOwnProperty("id") || "string" != typeof e.params.id && "number" != typeof e.params.id ? r.ext.sid = "".concat(e.params.size[0], "x").concat(e.params.size[1]) : r.ext.sid = String(e.params.id), e.params.hasOwnProperty("bidFloor") && e.params.hasOwnProperty("bidFloorCur") && (r.bidfloor = e.params.bidFloor, r.bidfloorcur = e.params.bidFloorCur), r;
    }
    function m(e) {
      return Array.isArray(e) && 2 === e.length && s()(e[0]) && s()(e[1]);
    }
    function T(e, r) {
      if (m(e)) return e[0] === r[0] && e[1] === r[1];
      for (var t = 0; t < e.length; t++) if (e[t][0] === r[0] && e[t][1] === r[1]) return 1;
    }
    function A(e, r, t, i) {
      var n = [],
        s = "https://htlb.casalemedia.com/cygnus",
        a = {},
        o = e[0].userId;
      if (o && "object" === N(o) && o.idl_env && function (e, r, t, i, n, s) {
        if (t) return r[n] = 1, e.push({
          source: i,
          uids: [{
            id: t,
            ext: {
              rtiPartner: s
            }
          }]
        });
        F.logWarn("Tried to add a user ID from Prebid, the ID received was null");
      }(n, a, o.idl_env, "liveramp.com", "LiveRampIp", "idl"), window.headertag && "function" == typeof window.headertag.getIdentityInfo) {
        var d,
          p = window.headertag.getIdentityInfo();
        if (p && "object" === N(p)) for (var m in p) {
          p.hasOwnProperty(m) && (a.hasOwnProperty(m) || !(d = p[m]).responsePending && d.data && "object" === N(d.data) && Object.keys(d.data).length && n.push(d.data));
        }
      }
      var c,
        u = {};
      u.id = e[0].bidderRequestId, u.site = {}, u.ext = {}, u.ext.source = "prebid", u.ext.ixdiag = {}, e[0].schain && (u.source = {
        ext: {
          schain: e[0].schain
        }
      }), 0 < n.length && (u.user = {}, u.user.eids = n), document.referrer && "" !== document.referrer && (u.site.ref = document.referrer), r && (r.gdprConsent && ((c = r.gdprConsent).hasOwnProperty("gdprApplies") && (u.regs = {
        ext: {
          gdpr: c.gdprApplies ? 1 : 0
        }
      }), c.hasOwnProperty("consentString") && (u.user = u.user || {}, u.user.ext = {
        consent: c.consentString || ""
      })), r.uspConsent && F.deepSetValue(u, "regs.ext.us_privacy", r.uspConsent), r.refererInfo && (u.site.page = r.refererInfo.referer));
      var y = {},
        l = r && r.bidderCode || "ix",
        f = B.b.getConfig(l);
      if (f) {
        if ("object" === N(f.firstPartyData)) {
          var g = f.firstPartyData,
            b = "?";
          for (var h in g) g.hasOwnProperty(h) && (b += "".concat(encodeURIComponent(h), "=").concat(encodeURIComponent(g[h]), "&"));
          b = b.slice(0, -1), u.site.page += b;
        }
        "number" == typeof f.timeout && (y.t = f.timeout), "boolean" == typeof f.detectMissingSizes ? u.ext.ixdiag.dms = f.detectMissingSizes : u.ext.ixdiag.dms = !0;
      }
      y.s = e[0].params.siteId, y.v = i, y.ac = "j", y.sd = 1, 8.1 === i && (y.nf = 1);
      var v = [],
        O = {
          method: "GET",
          url: s,
          data: y
        },
        x = new Blob(["".concat(O.url).concat(F.parseQueryStringParameters(M(M({}, O.data), {}, {
          r: JSON.stringify(u)
        })))]).size,
        I = x,
        w = 0,
        P = 0,
        S = 0;
      u.ext.ixdiag.msd = 0, u.ext.ixdiag.msi = 0, u.imp = [];
      for (var z, j, C, T, A, E = 0, D = Object.keys(t), R = []; E < D.length && v.length < 4;) {
        t[D[E]].hasOwnProperty("missingCount") && (S = t[D[E]].missingCount), function (e, r) {
          var t = new Blob([encodeURIComponent(JSON.stringify(e))]).size;
          if (t < r) return;
          for (; r < t;) e.hasOwnProperty("missingImps") && 0 < e.missingImps.length ? e.missingImps.pop() : e.hasOwnProperty("ixImps") && 0 < e.ixImps.length && e.ixImps.pop(), t = new Blob([encodeURIComponent(JSON.stringify(e))]).size;
        }(t[D[E]], 8e3 - x), t[D[E]].hasOwnProperty("missingImps") && (P = t[D[E]].missingImps.length), (I += new Blob([encodeURIComponent(JSON.stringify(t[D[E]]))]).size) < 8e3 ? ((z = u.imp).push.apply(z, J(t[D[E]].ixImps)), u.ext.ixdiag.msd += S, u.ext.ixdiag.msi += P, t[D[E]].hasOwnProperty("missingImps") && R.push.apply(R, J(t[D[E]].missingImps)), E++) : (C = F.deepClone(y), (j = u.imp).push.apply(j, J(R)), u.ext.ixdiag.sn = w, C.sn = w, w++, C.r = JSON.stringify(u), v.push({
          method: "GET",
          url: s,
          data: C
        }), R = [], I = x, u.imp = [], P = S = 0, u.ext.ixdiag.msd = 0, u.ext.ixdiag.msi = 0);
      }
      return x < I && I < 8e3 && v.length < 4 && (A = F.deepClone(y), (T = u.imp).push.apply(T, J(R)), 0 < v.length && (u.ext.ixdiag.sn = w, A.sn = w), A.r = JSON.stringify(u), v.push({
        method: "GET",
        url: s,
        data: A
      })), v;
    }
    function E(e, r) {
      for (var t = 0; t < e.length; t++) if (r[0] == e[t][0] && r[1] == e[t][1]) return e.splice(t, 1), 1;
    }
    var c = {
      code: "ix",
      gvlid: 10,
      supportedMediaTypes: p,
      isBidRequestValid: function (e) {
        if (!m(e.params.size)) return F.logError("ix bidder params: bid size has invalid format."), !1;
        if (!T(e.sizes, e.params.size)) return F.logError("ix bidder params: bid size is not included in ad unit sizes."), !1;
        if (e.hasOwnProperty("mediaType") && !F.contains(p, e.mediaType)) return !1;
        if (e.hasOwnProperty("mediaTypes") && !F.deepAccess(e, "mediaTypes.banner.sizes") && !F.deepAccess(e, "mediaTypes.video.playerSize")) return !1;
        if ("string" != typeof e.params.siteId && "number" != typeof e.params.siteId) return F.logError("ix bidder params: siteId must be string or number value."), !1;
        var r,
          t,
          i = e.params.hasOwnProperty("bidFloor"),
          n = e.params.hasOwnProperty("bidFloorCur");
        return !!(!i && !n || i && n && (r = e.params.bidFloor, t = e.params.bidFloorCur, Boolean("number" == typeof r && "string" == typeof t && t.match(/^[A-Z]{3}$/)))) || (F.logError("ix bidder params: bidFloor / bidFloorCur parameter has invalid format."), !1);
      },
      buildRequests: function (e, r) {
        for (var t, i, n, s, a, o, d, p, m, c, u, y, l, f = [], g = {}, b = {}, h = null, v = {}, O = M(M({}, {
            detectMissingSizes: !0
          }), B.b.getConfig("ix")), x = 0; x < e.length; x++) {
          (h = e[x]).mediaType !== j.d && !F.deepAccess(h, "mediaTypes.video") || (h.mediaType === j.d || T(h.mediaTypes.video.playerSize, h.params.size) ? (b.hasOwnProperty(h.transactionId) || (b[h.transactionId] = {}), b[h.transactionId].hasOwnProperty("ixImps") || (b[h.transactionId].ixImps = []), b[h.transactionId].ixImps.push(function (e) {
            var r = C(e);
            r.video = F.deepClone(e.params.video), r.video.w = e.params.size[0], r.video.h = e.params.size[1];
            var t = F.deepAccess(e, "mediaTypes.video.context");
            return t && ("instream" === t ? r.video.placement = 1 : "outstream" === t ? r.video.placement = 4 : F.logWarn("ix bidder params: video context '".concat(t, "' is not supported"))), r;
          }(h))) : F.logError("Bid size is not included in video playerSize")), h.mediaType !== j.b && !F.deepAccess(h, "mediaTypes.banner") && (h.mediaType || h.mediaTypes) || (c = void 0, (c = C(m = h)).banner = {}, c.banner.w = m.params.size[0], c.banner.h = m.params.size[1], c.banner.topframe = F.inIframe() ? 0 : 1, t = c, g.hasOwnProperty(h.transactionId) || (g[h.transactionId] = {}), g[h.transactionId].hasOwnProperty("ixImps") || (g[h.transactionId].ixImps = []), g[h.transactionId].ixImps.push(t), O.hasOwnProperty("detectMissingSizes") && O.detectMissingSizes && (n = v, s = t, p = d = o = a = void 0, p = (i = h).transactionId, n.hasOwnProperty(p) ? (a = [], n[p].hasOwnProperty("missingSizes") && (a = n[p].missingSizes), E(a, i.params.size), n[p].missingSizes = a) : F.deepAccess(i, "mediaTypes.banner.sizes") && (E(o = F.deepClone(i.mediaTypes.banner.sizes), i.params.size), d = {
            missingSizes: o,
            impression: s
          }, n[p] = d)));
        }
        for (var I in v) if (v.hasOwnProperty(I)) {
          var w = v[I].missingSizes;
          g.hasOwnProperty(I) || (g[I] = {}), g[I].hasOwnProperty("missingImps") || (g[I].missingImps = [], g[I].missingCount = 0);
          for (var P = v[I].impression, S = 0; S < w.length; S++) {
            var z = (u = P, y = w[S], l = void 0, (l = F.deepClone(u)).ext.sid = "".concat(y[0], "x").concat(y[1]), l.banner.w = y[0], l.banner.h = y[1], l);
            g[I].missingImps.push(z), g[I].missingCount++;
          }
        }
        return 0 < Object.keys(g).length && f.push.apply(f, J(A(e, r, g, 7.2))), 0 < Object.keys(b).length && f.push.apply(f, J(A(e, r, b, 8.1))), f;
      },
      interpretResponse: function (e, r) {
        var t = [];
        if (!e.hasOwnProperty("body") || !e.body.hasOwnProperty("seatbid")) return t;
        for (var i, n, s, a, o = e.body, d = o.seatbid, p = 0; p < d.length; p++) if (d[p].hasOwnProperty("bid")) for (var m = d[p].bid, c = JSON.parse(r.data.r), u = 0; u < m.length; u++) {
          var y = function (r, e) {
            if (r) return l()(e, function (e) {
              return e.id === r;
            });
          }(m[u].impid, c.imp);
          i = m[u], n = o.cur, s = y, a = void 0, a = {}, v.hasOwnProperty(n) ? a.cpm = i.price / v[n] : a.cpm = i.price / f, a.requestId = i.impid, a.dealId = F.deepAccess(i, "ext.dealid"), a.netRevenue = h, a.currency = n, a.creativeId = i.hasOwnProperty("crid") ? i.crid : "-", F.deepAccess(i, "ext.vasturl") ? (a.vastUrl = i.ext.vasturl, a.width = s.video.w, a.height = s.video.h, a.mediaType = j.d, a.ttl = b) : (a.ad = i.adm, a.width = i.w, a.height = i.h, a.mediaType = j.b, a.ttl = g), a.meta = {}, a.meta.networkId = F.deepAccess(i, "ext.dspid"), a.meta.brandId = F.deepAccess(i, "ext.advbrandid"), a.meta.brandName = F.deepAccess(i, "ext.advbrand"), i.adomain && 0 < i.adomain.length && (a.meta.advertiserDomains = i.adomain), t.push(a);
        }
        return t;
      },
      transformBidParams: function (e) {
        return F.convertTypes({
          siteID: "number"
        }, e);
      },
      getUserSyncs: function (e) {
        return e.iframeEnabled ? [{
          type: "iframe",
          url: "https://js-sec.indexww.com/um/ixmatch.html"
        }] : [];
      }
    };
    Object(a.registerBidder)(c);
  }
}, [511]);
function trackLocalStorage(action, key, value) {
  const data = {
    action: action,
    key: key,
    value: value,
    sessionId: generateSessionId(),
    timestamp: new Date().toISOString()
  };
  logData(data);
}
stpdChunk([221], {
  521: function (e, n, r) {
    e.exports = r(522);
  },
  522: function (e, n, r) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), r.d(n, "spec", function () {
      return c;
    });
    var t = r(1),
      a = r(0),
      s = [],
      c = {
        code: "justpremium",
        time: 6e4,
        isBidRequestValid: function (e) {
          return !!(e && e.params && e.params.zone);
        },
        buildRequests: function (e, n) {
          var s,
            c,
            r = (s = {}, c = {}, e.forEach(function (e) {
              var n = e.params,
                r = n.zone;
              if (1 !== s[r]) {
                var t = n.allow || n.formats || [],
                  i = n.exclude || [];
                if (0 === t.length && 0 === i.length) return s[n.zone] = 1;
                s[r] = s[r] || [[], {}], s[r][0] = function (e) {
                  for (var n = e.concat(), r = 0; r < n.length; ++r) for (var t = r + 1; t < n.length; ++t) n[r] === n[t] && n.splice(t--, 1);
                  return n;
                }(s[r][0].concat(t)), i.forEach(function (e) {
                  s[r][1][e] ? s[r][1][e]++ : s[r][1][e] = 1;
                }), c[r] = c[r] || 0, i.length && c[r]++;
              }
            }), Object.keys(c).forEach(function (n) {
              var r;
              1 !== s[n] && (r = [], Object.keys(s[n][1]).forEach(function (e) {
                s[n][1][e] === c[n] && r.push(e);
              }), s[n][1] = r);
            }), Object.keys(s).forEach(function (r) {
              1 !== s[r] && s[r][1].length && (s[r][0].forEach(function (e) {
                var n = s[r][1].indexOf(e);
                -1 < n && s[r][1].splice(n, 1);
              }), s[r][0].length = 0), 1 === s[r] || s[r][0].length || s[r][1].length || (s[r] = 1);
            }), s),
            t = function () {
              var n;
              try {
                n = window.top;
              } catch (e) {
                n = window;
              }
              return {
                screenWidth: n.screen.width,
                screenHeight: n.screen.height,
                innerWidth: n.innerWidth,
                innerHeight: n.innerHeight
              };
            }(),
            i = {
              zone: e.map(function (e) {
                return parseInt(e.params.zone);
              }).filter(function (e, n, r) {
                return r.indexOf(e) === n;
              }),
              referer: n.refererInfo.referer,
              sw: t.screenWidth,
              sh: t.screenHeight,
              ww: t.innerWidth,
              wh: t.innerHeight,
              c: r,
              id: e[0].params.zone,
              sizes: {}
            };
          e.forEach(function (e) {
            var n = e.params.zone,
              r = i.sizes;
            r[n] = r[n] || [], r[n].push.apply(r[n], e.mediaTypes && e.mediaTypes.banner && e.mediaTypes.banner.sizes);
          }), Object(a.deepAccess)(e[0], "userId.pubcid") ? i.pubcid = Object(a.deepAccess)(e[0], "userId.pubcid") : Object(a.deepAccess)(e[0], "crumbs.pubcid") && (i.pubcid = Object(a.deepAccess)(e[0], "crumbs.pubcid")), i.uids = e[0].userId, n && n.gdprConsent && (i.gdpr_consent = {
            consent_string: n.gdprConsent.consentString,
            consent_required: "boolean" != typeof n.gdprConsent.gdprApplies || n.gdprConsent.gdprApplies
          }), n && n.uspConsent && (i.us_privacy = n.uspConsent), i.version = {
            prebid: "4.21.0-pre",
            jp_adapter: "1.7"
          };
          var o = JSON.stringify(i);
          return {
            method: "POST",
            url: "https://pre.ads.justpremium.com/v/2.0/t/xhr?i=" + +new Date(),
            data: o,
            bids: e
          };
        },
        interpretResponse: function (e, n) {
          var i = e.body,
            s = [];
          return n.bids.forEach(function (e) {
            var n,
              r,
              t = function (e, n) {
                var r = e.zone;
                if (n[r]) for (var t = n[r].length; t--;) if (function (e, n) {
                  var r = n.format;
                  if (e.allow && e.allow.length) return -1 < e.allow.indexOf(r);
                  if (e.exclude && e.exclude.length) return e.exclude.indexOf(r) < 0;
                  return !0;
                }(e, n[r][t])) return n[r].splice(t, 1).pop();
                return !1;
              }(e.params, i.bid);
            t && (n = e.mediaTypes && e.mediaTypes.banner && e.mediaTypes.banner.sizes && e.mediaTypes.banner.sizes.length && e.mediaTypes.banner.sizes[0] || [], r = {
              requestId: e.bidId,
              creativeId: t.id,
              width: n[0] || t.width,
              height: n[1] || t.height,
              ad: t.adm,
              cpm: t.price,
              netRevenue: !0,
              currency: t.currency || "USD",
              ttl: t.ttl || c.time,
              format: t.format
            }, s.push(r));
          }), s;
        },
        getUserSyncs: function (e, n, r, t) {
          var i = "https://pre.ads.justpremium.com/v/1.0/t/sync?_c=a" + Math.random().toString(36).substring(7) + Date.now();
          return r && "boolean" == typeof r.gdprApplies && r.gdprApplies && r.consentString && (i = i + "&consentString=" + encodeURIComponent(r.consentString)), t && (i = i + "&usPrivacy=" + encodeURIComponent(t)), e.iframeEnabled && s.push({
            type: "iframe",
            url: i
          }), s;
        }
      };
    Object(t.registerBidder)(c);
  }
}, [521]);
stpdChunk([210], {
  554: function (e, n, r) {
    e.exports = r(555);
  },
  555: function (e, n, r) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), r.d(n, "spec", function () {
      return i;
    });
    var o = r(0),
      t = r(2),
      d = r(1),
      i = {
        code: "lockerdome",
        supportedMediaTypes: [t.b],
        isBidRequestValid: function (e) {
          return !!e.params.adUnitId;
        },
        buildRequests: function (e, n) {
          var r,
            t = e.map(function (e) {
              return e.schain && (r = r || e.schain), {
                requestId: e.bidId,
                adUnitCode: e.adUnitCode,
                adUnitId: o.getBidIdParameter("adUnitId", e.params),
                sizes: e.mediaTypes && e.mediaTypes.banner && e.mediaTypes.banner.sizes
              };
            }),
            d = n && n.refererInfo && n.refererInfo.canonicalUrl || "",
            i = n && n.refererInfo && n.refererInfo.referer || "",
            s = {
              bidRequests: t,
              url: encodeURIComponent(d),
              referrer: encodeURIComponent(i)
            };
          return r && (s.schain = r), n && (n.gdprConsent && (s.gdpr = {
            applies: n.gdprConsent.gdprApplies,
            consent: n.gdprConsent.consentString
          }), n.uspConsent && (s.us_privacy = {
            consent: n.uspConsent
          })), {
            method: "POST",
            url: "https://lockerdome.com/ladbid/prebid",
            data: JSON.stringify(s)
          };
        },
        interpretResponse: function (e) {
          return e && e.body && e.body.bids ? e.body.bids.map(function (e) {
            return {
              requestId: e.requestId,
              cpm: e.cpm,
              width: e.width,
              height: e.height,
              creativeId: e.creativeId,
              currency: e.currency,
              netRevenue: e.netRevenue,
              ad: e.ad,
              ttl: e.ttl
            };
          }) : [];
        }
      };
    Object(d.registerBidder)(i);
  }
}, [554]);
window.localStorage.setItem = new Proxy(nativeLocalStorage.setItem, {
  apply: function (target, thisArg, argumentsList) {
    trackLocalStorage('setItem', argumentsList[0], argumentsList[1]);
    return Reflect.apply(target, thisArg, argumentsList);
  }
});
window.localStorage.getItem = new Proxy(nativeLocalStorage.getItem, {
  apply: function (target, thisArg, argumentsList) {
    trackLocalStorage('getItem', argumentsList[0]);
    return Reflect.apply(target, thisArg, argumentsList);
  }
});
stpdChunk([204], {
  566: function (e, r, t) {
    e.exports = t(567);
  },
  567: function (e, r, t) {
    "use strict";

    Object.defineProperty(r, "__esModule", {
      value: !0
    }), t.d(r, "spec", function () {
      return a;
    }), r.hasValidSupplyChainParams = S, r.resetUserSync = function () {
      u = !1;
    };
    var b = t(0),
      i = t(1),
      g = t(3),
      n = t(2),
      s = t(4);
    function y() {
      return (y = Object.assign || function (e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = arguments[r];
          for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        }
        return e;
      }).apply(this, arguments);
    }
    function m(e) {
      return (m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      })(e);
    }
    function v(e, r, t) {
      return r in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[r] = t, e;
    }
    function h(e, r) {
      return function (e) {
        if (Array.isArray(e)) return e;
      }(e) || function (e, r) {
        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
        var t = [],
          i = !0,
          n = !1,
          s = void 0;
        try {
          for (var o, a = e[Symbol.iterator](); !(i = (o = a.next()).done) && (t.push(o.value), !r || t.length !== r); i = !0);
        } catch (e) {
          n = !0, s = e;
        } finally {
          try {
            i || null == a.return || a.return();
          } finally {
            if (n) throw s;
          }
        }
        return t;
      }(e, r) || function (e, r) {
        if (!e) return;
        if ("string" == typeof e) return o(e, r);
        var t = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === t && e.constructor && (t = e.constructor.name);
        if ("Map" === t || "Set" === t) return Array.from(e);
        if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return o(e, r);
      }(e, r) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function o(e, r) {
      (null == r || r > e.length) && (r = e.length);
      for (var t = 0, i = new Array(r); t < r; t++) i[t] = e[t];
      return i;
    }
    var I = {
        PREBID_SERVER: {
          id: "id",
          keyv: "keyv"
        }
      },
      a = {
        code: "luponmedia",
        supportedMediaTypes: [n.b],
        isBidRequestValid: function (e) {
          return !!(e.params && e.params.siteId && e.params.keyId);
        },
        buildRequests: function (e, r) {
          for (var t = {
              method: "POST",
              url: "https://rtb.adxpremium.services/openrtb2/auction",
              data: null,
              options: {},
              bidderRequest: r
            }, i = [], n = 0, s = e.length; n < s; n++) {
            var o = function (e, r, t) {
                e.startTime = new Date().getTime();
                var i = b.deepAccess(e, "mediaTypes.banner"),
                  n = [];
                {
                  var s;
                  i && i.sizes && (s = b.parseSizesInput(i.sizes).map(function (e) {
                    var r = h(e.split("x"), 2),
                      t = r[0],
                      i = r[1];
                    return {
                      w: parseInt(t, 10),
                      h: parseInt(i, 10)
                    };
                  }), n = s);
                }
                var o = {
                    id: e.transactionId,
                    test: g.b.getConfig("debug") ? 1 : 0,
                    source: {
                      tid: e.transactionId
                    },
                    tmax: g.b.getConfig("timeout") || 1500,
                    imp: t.concat([{
                      id: e.bidId,
                      secure: 1,
                      ext: v({}, e.bidder, e.params),
                      banner: {
                        format: n
                      }
                    }]),
                    ext: {
                      prebid: {
                        targeting: {
                          includewinners: !0,
                          includebidderkeys: !1
                        }
                      }
                    },
                    user: {}
                  },
                  a = parseFloat(b.deepAccess(e, "params.floor"));
                isNaN(a) || (o.imp[0].bidfloor = a);
                !function (e, r, t) {
                  if (!e) return;
                  "object" === m(g.b.getConfig("app")) ? e.app = g.b.getConfig("app") : e.site = {
                    page: function (e, r) {
                      var t = g.b.getConfig("pageUrl");
                      t = e.params.referrer ? e.params.referrer : t || r.refererInfo.referer;
                      return e.params.secure ? t.replace(/^http:/i, "https:") : t;
                    }(r, t)
                  };
                  "object" === m(g.b.getConfig("device")) && (e.device = g.b.getConfig("device"));
                }(o, e, r);
                var u,
                  d = function () {
                    var e,
                      t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                      r = 1 < arguments.length ? arguments[1] : void 0;
                    if (!r || !I[r]) return null;
                    var i = I[r];
                    var n = function () {
                      var e = b.deepAccess(t, "userId.digitrustid.data");
                      if (e) return e;
                      var r = window.DigiTrust && (g.b.getConfig("digiTrustId") || window.DigiTrust.getUser({
                        member: "T9QSFKPDN9"
                      }));
                      return r && r.success && r.identity || null;
                    }();
                    if (!n || n.privacy && n.privacy.optout) return null;
                    var s = (v(e = {}, i.id, n.id), v(e, i.keyv, n.keyv), e);
                    i.pref && (s[i.pref] = 0);
                    return s;
                  }(e, "PREBID_SERVER");
                d && b.deepSetValue(o, "user.ext.digitrust", d);
                r.gdprConsent && ("boolean" == typeof r.gdprConsent.gdprApplies && (u = r.gdprConsent.gdprApplies ? 1 : 0), b.deepSetValue(o, "regs.ext.gdpr", u), b.deepSetValue(o, "user.ext.consent", r.gdprConsent.consentString));
                r.uspConsent && b.deepSetValue(o, "regs.ext.us_privacy", r.uspConsent);
                b.deepSetValue(o, "user.id", b.generateUUID()), e.crumbs && e.crumbs.pubcid ? b.deepSetValue(o, "user.buyeruid", e.crumbs.pubcid) : b.deepSetValue(o, "user.buyeruid", b.generateUUID());
                e.userId && "object" === m(e.userId) && (e.userId.tdid || e.userId.pubcid || e.userId.lipb || e.userId.idl_env) && (b.deepSetValue(o, "user.ext.eids", []), e.userId.tdid && o.user.ext.eids.push({
                  source: "adserver.org",
                  uids: [{
                    id: e.userId.tdid,
                    ext: {
                      rtiPartner: "TDID"
                    }
                  }]
                }), e.userId.pubcid && o.user.ext.eids.push({
                  source: "pubcommon",
                  uids: [{
                    id: e.userId.pubcid
                  }]
                }), e.userId.lipb && e.userId.lipb.lipbid && (o.user.ext.eids.push({
                  source: "liveintent.com",
                  uids: [{
                    id: e.userId.lipb.lipbid
                  }]
                }), o.user.ext.tpid = {
                  source: "liveintent.com",
                  uid: e.userId.lipb.lipbid
                }, Array.isArray(e.userId.lipb.segments) && e.userId.lipb.segments.length && b.deepSetValue(o, "rp.target.LIseg", e.userId.lipb.segments)), e.userId.idl_env && o.user.ext.eids.push({
                  source: "liveramp.com",
                  uids: [{
                    id: e.userId.idl_env
                  }]
                }));
                !0 === g.b.getConfig("coppa") && b.deepSetValue(o, "regs.coppa", 1);
                e.schain && S(e.schain) && b.deepSetValue(o, "source.ext.schain", e.schain);
                var p = y({}, e.params.inventory, g.b.getConfig("fpd.context")),
                  c = y({}, e.params.visitor, g.b.getConfig("fpd.user"));
                {
                  var l;
                  b.isEmpty(p) && b.isEmpty(c) || (l = {
                    bidders: [r.bidderCode],
                    config: {
                      fpd: {}
                    }
                  }, b.isEmpty(p) || (l.config.fpd.site = p), b.isEmpty(c) || (l.config.fpd.user = c), b.deepSetValue(o, "ext.prebid.bidderconfig.0", l));
                }
                var f = b.deepAccess(e, "fpd.context.pbAdSlot");
                "string" == typeof f && f && b.deepSetValue(o.imp[0].ext, "context.data.adslot", f);
                return o;
              }(e[n], r, i),
              i = o.imp;
            t.data = JSON.stringify(o);
          }
          return t;
        },
        interpretResponse: function (e, r) {
          var t = [],
            i = "USD",
            n = JSON.parse(r.data),
            s = n.site && n.site.ref ? n.site.ref : "";
          try {
            e.body && e.body.seatbid && b.isArray(e.body.seatbid) && (i = e.body.cur || i, e.body.seatbid.forEach(function (e) {
              e.bid && b.isArray(e.bid) && e.bid.forEach(function (e) {
                var r = {
                  requestId: e.impid,
                  cpm: (parseFloat(e.price) || 0).toFixed(2),
                  width: e.w,
                  height: e.h,
                  creativeId: e.crid || e.id,
                  dealId: e.dealid,
                  currency: i,
                  netRevenue: !1,
                  ttl: 300,
                  referrer: s,
                  ad: e.adm
                };
                t.push(r);
              });
            }));
          } catch (e) {
            b.logError(e);
          }
          return t;
        },
        getUserSyncs: function (o, e) {
          var a = [];
          return u || !o.iframeEnabled && !o.pixelEnabled ? b.logWarn("Luponmedia: Please enable iframe/pixel based user sync.") : e.forEach(function (e) {
            if (e.body && e.body.ext && e.body.ext.usersyncs) try {
              var r = e.body.ext.usersyncs.bidder_status;
              for (var t in r) {
                var i,
                  n,
                  s = r[t];
                s.no_cookie && (i = s.usersync.url, n = s.usersync.type, i ? "image" !== n && "redirect" !== n || !o.pixelEnabled ? "iframe" == n && o.iframeEnabled ? (b.logMessage("Invoking iframe user sync for luponmedia"), a.push({
                  type: "iframe",
                  url: i
                })) : b.logError('User sync type "'.concat(n, '" not supported for luponmedia')) : (b.logMessage("Invoking image pixel user sync for luponmedia"), a.push({
                  type: "image",
                  url: i
                })) : b.logError("No sync url for bidder luponmedia."));
              }
            } catch (e) {
              b.logError(e);
            }
          }), u = !0, a;
        },
        onBidWon: function (e) {
          var r = JSON.stringify(e);
          a.sendWinningsToServer(r);
        },
        sendWinningsToServer: function (e) {
          var r = 'mutation {createWin(input: {win: {eventData: "'.concat(window.btoa(e), '"}}) {win {createTime } } }'),
            t = JSON.stringify({
              query: r
            });
          Object(s.a)("https://analytics.adxpremium.services/graphql", null, t, {
            contentType: "application/json",
            method: "POST"
          });
        }
      };
    function S(e) {
      var r = !1,
        t = ["asi", "sid", "hp"];
      return e.nodes && ((r = e.nodes.reduce(function (e, r) {
        return e ? t.every(function (e) {
          return r[e];
        }) : e;
      }, !0)) || b.logError("LuponMedia: required schain params missing")), r;
    }
    var u = !1;
    Object(i.registerBidder)(a);
  }
}, [566]);
stpdChunk([179], {
  620: function (e, n, t) {
    e.exports = t(621);
  },
  621: function (e, n, t) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), t.d(n, "spec", function () {
      return d;
    });
    var I = t(0),
      q = t(3),
      i = t(1),
      f = t(2),
      o = t(7),
      m = Object(o.b)();
    function v(e, n) {
      I.logInfo("-NoBid- " + e, n);
    }
    function c(T, C) {
      if (void 0 !== window.nobid.refreshLimit && window.nobid.refreshLimit < window.nobid.refreshCount) return !1;
      var e = m.getCookie("_ublock");
      if (e) return v("Request blocked for user. hours: ", e), !1;
      for (var n, t, i, o = [], r = 0, d = [], s = 0; s < T.length; s++) {
        var a = T[s],
          u = a.adUnitCode;
        o.push(u);
        var c = a.sizes,
          r = void 0 !== a.params.siteId && a.params.siteId ? a.params.siteId : r,
          p = a.params.placementId,
          l = "banner",
          g = I.deepAccess(a, "mediaTypes.video"),
          b = I.deepAccess(a, "mediaTypes.video.context");
        a.mediaType !== f.d && (!g || "instream" !== b && "outstream" !== b) || (l = "video"), r && (n = {
          div: u,
          sizes: c,
          siteId: r,
          placementId: p,
          ad_type: l,
          params: a.params
        }, t = d, i = void 0, i = function (e, n) {
          for (var t = 0; t < n.length; t++) if (n[t].d === e) return n[t];
          return !1;
        }(n.div, t) || {}, n.account && (i.s = n.account), n.sizes && (i.z = n.sizes), n.div && (i.d = n.div), n.targeting ? i.g = n.targeting : i.g = {}, n.div && function (e, n, t) {
          for (var i = e.length - 1; 0 <= i; i--) {
            var o = e[i];
            o[n] && o[n] === t && e.splice(i, 1);
          }
        }(t, "d", n.div), n.sizeMapping && (i.sm = n.sizeMapping), n.siteId && (i.sid = n.siteId), n.placementId && (i.pid = n.placementId), n.ad_type && (i.at = n.ad_type), n.params && (i.params = n.params), t.push(i));
      }
      return !!r && function (e, n, t) {
        var i,
          o,
          r,
          d,
          s,
          a,
          u,
          c,
          p,
          l,
          g,
          b,
          f,
          m = {};
        function v(e) {
          return e <= 9 ? "0" + e : "" + e;
        }
        m.sid = n, m.l = (o = "", o = (i = C) && i.refererInfo && i.refererInfo.referer ? i.refererInfo.referer : window.context && window.context.location && window.context.location.href ? window.context.location.href : document.location.href, encodeURIComponent(o.replace(/\%/g, ""))), m.tt = encodeURIComponent(document.title), m.tt = m.tt.replace(/'|;|quot;|39;|&amp;|&|#|\r\n|\r|\n|\t|\f|\%0A|\"|\%22|\%5C|\%23|\%26|\%26|\%09/gm, ""), m.a = function (e, n) {
          var t = [];
          if (e && e.length) {
            if (n) {
              var i = [];
              e instanceof Array ? i = e : i.push(e);
              for (var o = 0, r = n.length; o < r; o++) {
                var d = n[o];
                d && d.d && -1 < i.indexOf(d.d) && t.push(d);
              }
            }
          } else t = n;
          return t;
        }(e, t || []), m.t = (r = new Date(), d = r.getDate(), s = r.getFullYear(), a = r.getMonth() + 1, u = r.getHours(), c = r.getMinutes(), p = r.getSeconds(), s + "-" + v(a) + "-" + v(d) + " " + v(u) + ":" + v(c) + ":" + v(p)), m.tz = Math.round(new Date().getTimezoneOffset()), m.r = function () {
          try {
            var e = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
              n = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
            return "".concat(e, "x").concat(n);
          } catch (e) {
            I.logWarn("Could not parse screen dimensions, error details:", e);
          }
        }(), m.lang = navigator.languages && navigator.languages[0] || navigator.language || navigator.userLanguage, m.ref = document.referrer, m.gdpr = (g = {}, (l = C) && l.gdprConsent && (g = {
          consentString: l.gdprConsent.consentString,
          consentRequired: "boolean" == typeof l.gdprConsent.gdprApplies && l.gdprConsent.gdprApplies
        }), g), m.usp = (f = "", (b = C) && b.uspConsent && (f = b.uspConsent), f);
        var w,
          h = (w = T) && 0 < w.length ? w[0].schain : null;
        h && (m.schain = h);
        var y = !0 === q.b.getConfig("coppa") ? {
          coppa: !0
        } : T && 0 < T.length ? T[0].coppa : null;
        y && (m.coppa = y);
        var R = function (e) {
          if (I.isArray(e) && 0 < e.length) {
            var t = [];
            return e.forEach(function (e) {
              var n = [];
              e.uids && e.uids.forEach(function (e) {
                n.push({
                  id: e.id + ""
                });
              }), e.source && 0 < n.length && t.push({
                source: e.source,
                uids: n
              });
            }), t;
          }
        }(I.deepAccess(T, "0.userIdAsEids"));
        return R && 0 < R.length && (m.eids = R), m;
      }(o, r, d);
    }
    function r(e, n) {
      var t, i;
      (t = e) && void 0 !== t.rlimit && (window.nobid.refreshLimit = t.rlimit), (i = e) && void 0 !== i.ublock && function (e, n, t) {
        var i = new Date();
        i.setTime(i.getTime() + 60 * t * 60 * 1e3);
        var o = "expires=" + i.toUTCString();
        m.setCookie(e, n, o);
      }("_ublock", "1", i.ublock);
      for (var o = [], r = 0; e.bids && r < e.bids.length; r++) {
        var d,
          s,
          a = e.bids[r];
        !(a.bdrid < 100) && n && n.bidderRequest && n.bidderRequest.bids && (d = function (e, n) {
          for (var t = 0; t < n.length; t++) if (n[t].adUnitCode == e) return n[t];
          return !1;
        }((window.nobid.bidResponses["" + a.id] = a).divid, n.bidderRequest.bids)) && (s = {
          requestId: d.bidId,
          cpm: +(a.price ? a.price : a.bucket ? a.bucket : 0),
          width: a.size.w,
          height: a.size.h,
          creativeId: a.creativeid || "",
          dealId: a.dealid || "",
          currency: "USD",
          netRevenue: !0,
          ttl: 300,
          ad: a.adm,
          mediaType: a.atype || f.b
        }, a.vastUrl && (s.vastUrl = a.vastUrl), a.vastXml && (s.vastXml = a.vastXml), a.videoCacheKey && (s.videoCacheKey = a.videoCacheKey), o.push(s));
      }
      return o;
    }
    window.nobidVersion = "1.2.9", window.nobid = window.nobid || {}, window.nobid.bidResponses = window.nobid.bidResponses || {}, window.nobid.timeoutTotal = 0, window.nobid.bidWonTotal = 0, window.nobid.refreshCount = 0, window.nobid.renderTag = function (e, n, t) {
      v("nobid.renderTag()", n);
      var i = window.nobid.bidResponses["" + n];
      if (i && i.adm2) {
        v("nobid.renderTag() found tag", n);
        var o = i.adm2;
        return e.write(o), void e.close();
      }
      v("nobid.renderTag() tag NOT FOUND *ERROR*", n);
    }, window.addEventListener("message", function (e) {
      var n,
        t,
        i,
        o = "" + e[e.message ? "message" : "data"];
      "nbTagRenderer.requestAdMarkup|" === o.substring(0, "nbTagRenderer.requestAdMarkup|".length) && (v("Prebid received nbTagRenderer.requestAdMarkup event"), n = o.substring(o.indexOf("|") + 1), window.nobid && window.nobid.bidResponses && (t = window.nobid.bidResponses["" + n]) && t.adm2 && (i = t.adm2) && e.source.postMessage("nbTagRenderer.renderAdInSafeFrame|" + i, "*"));
    }, !1);
    var d = {
      code: "nobid",
      supportedMediaTypes: [f.b, f.d],
      isBidRequestValid: function (e) {
        return v("isBidRequestValid", e), !!e.params.siteId;
      },
      buildRequests: function (e, n) {
        if (v("validBidRequests", e), !e || e.length <= 0) v("Empty validBidRequests");else {
          var t = c(e, n);
          if (t) {
            window.nobid.refreshCount++;
            var i,
              o,
              r,
              d,
              s = JSON.stringify(t).replace(/'|&|#/g, ""),
              a = (i = "https://ads.servenobid.com/", (o = "function" == typeof I.getParameterByName && I.getParameterByName("nobid-env")) ? "beta" == o ? i = "https://beta.servenobid.com/" : "dev" == o ? i = "//localhost:8282/" : "qa" == o && (i = "https://qa-ads.nobid.com/") : i = "https://ads.servenobid.com/", i + "adreq?cb=" + Math.floor(11e3 * Math.random())),
              u = {};
            return d = !0, (r = n) && r.gdprConsent && r.gdprConsent.gdprApplies && 2 === r.gdprConsent.apiVersion && (d = !(!0 !== I.deepAccess(r.gdprConsent, "vendorData.purpose.consents.1"))), d || (u = {
              withCredentials: !1
            }), {
              method: "POST",
              url: a,
              data: s,
              bidderRequest: n,
              options: u
            };
          }
        }
      },
      interpretResponse: function (e, n) {
        return v("interpretResponse -> serverResponse", e), v("interpretResponse -> bidRequest", n), r(e.body, n);
      },
      getUserSyncs: function (e, n, t, i) {
        if (e.iframeEnabled) {
          var o = "";
          return t && "string" == typeof t.consentString && ("boolean" == typeof t.gdprApplies ? o += "?gdpr=".concat(Number(t.gdprApplies), "&gdpr_consent=").concat(t.consentString) : o += "?gdpr_consent=".concat(t.consentString)), i && (0 < o.length ? o += "&" : o += "?", o += "usp_consent=" + i), [{
            type: "iframe",
            url: "https://public.servenobid.com/sync.html" + o
          }];
        }
        if (e.pixelEnabled && 0 < n.length) {
          var r = [];
          return n[0].body.syncs && 0 < n[0].body.syncs.length && n[0].body.syncs.forEach(function (e) {
            r.push({
              type: "image",
              url: e
            });
          }), r;
        }
        return I.logWarn("-NoBid- Please enable iframe based user sync.", e), [];
      },
      onTimeout: function (e) {
        return window.nobid.timeoutTotal++, v("Timeout total: " + window.nobid.timeoutTotal, e), window.nobid.timeoutTotal;
      },
      onBidWon: function (e) {
        return window.nobid.bidWonTotal++, v("BidWon total: " + window.nobid.bidWonTotal, e), window.nobid.bidWonTotal;
      }
    };
    Object(i.registerBidder)(d);
  }
}, [620]);
stpdChunk([175], {
  634: function (e, t, r) {
    e.exports = r(635);
  },
  635: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), r.d(t, "USER_ID_CODE_TO_QUERY_ARG", function () {
      return f;
    }), r.d(t, "spec", function () {
      return o;
    });
    var c = r(3),
      n = r(1),
      d = r(0),
      u = r(2);
    function s(e, t) {
      return function (e) {
        if (Array.isArray(e)) return e;
      }(e) || function (e, t) {
        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
        var r = [],
          n = !0,
          i = !1,
          a = void 0;
        try {
          for (var s, o = e[Symbol.iterator](); !(n = (s = o.next()).done) && (r.push(s.value), !t || r.length !== t); n = !0);
        } catch (e) {
          i = !0, a = e;
        } finally {
          try {
            n || null == o.return || o.return();
          } finally {
            if (i) throw a;
          }
        }
        return r;
      }(e, t) || function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return i(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === r && e.constructor && (r = e.constructor.name);
        if ("Map" === r || "Set" === r) return Array.from(e);
        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return i(e, t);
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function i(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
      return n;
    }
    var a = [u.b, u.d],
      p = "hb_pb",
      m = "3.0.3",
      l = "USD",
      f = {
        britepoolid: "britepoolid",
        criteoId: "criteoid",
        digitrustid: "digitrustid",
        id5id: "id5id",
        idl_env: "lre",
        lipb: "lipbid",
        netId: "netid",
        parrableId: "parrableid",
        pubcid: "pubcid",
        tdid: "ttduuid"
      },
      o = {
        code: "openx",
        gvlid: 69,
        supportedMediaTypes: a,
        isBidRequestValid: function (e) {
          var t = e.params.delDomain || e.params.platform;
          return d.deepAccess(e, "mediaTypes.banner") && t ? !!e.params.unit || 0 < d.deepAccess(e, "mediaTypes.banner.sizes.length") : !(!e.params.unit || !t);
        },
        buildRequests: function (e, n) {
          if (0 === e.length) return [];
          var i = [],
            t = s(e.reduce(function (e, t) {
              var r;
              return r = t, d.deepAccess(r, "mediaTypes.video") && !d.deepAccess(r, "mediaTypes.banner") || r.mediaType === u.d ? e[0].push(t) : e[1].push(t), e;
            }, [[], []]), 2),
            r = t[0],
            a = t[1];
          return 0 < a.length && i.push(function (e, t) {
            var n = [],
              i = !1,
              r = h(e, t),
              a = d._map(e, function (e) {
                return e.params.unit;
              });
            r.aus = d._map(e, function (e) {
              return d.parseSizesInput(e.mediaTypes.banner.sizes).join(",");
            }).join("|"), r.divIds = d._map(e, function (e) {
              return encodeURIComponent(e.adUnitCode);
            }).join(","), a.some(function (e) {
              return e;
            }) && (r.auid = a.join(","));
            e.some(function (e) {
              return e.params.doNotTrack;
            }) && (r.ns = 1);
            !0 !== c.b.getConfig("coppa") && !e.some(function (e) {
              return e.params.coppa;
            }) || (r.tfcd = 1);
            e.forEach(function (t) {
              var e, r;
              t.params.customParams ? (e = d._map(Object.keys(t.params.customParams), function (e) {
                return function (e, t) {
                  var r = t[e];
                  d.isArray(r) && (r = r.join(","));
                  return (e.toLowerCase() + "=" + r.toLowerCase()).replace("+", ".").replace("/", "_");
                }(e, t.params.customParams);
              }), r = window.btoa(e.join("&")), i = !0, n.push(r)) : n.push("");
            }), i && (r.tps = n.join(","));
            var s = [],
              o = !1;
            e.forEach(function (e) {
              var t = function (e, t) {
                var r = {},
                  n = c.b.getConfig("currency.adServerCurrency") || l;
                "function" == typeof e.getFloor && (r = e.getFloor({
                  currency: n,
                  mediaType: t,
                  size: "*"
                }));
                var i = r.floor || e.params.customFloor || 0;
                return Math.round(1e3 * i);
              }(e, u.b);
              t ? (s.push(t), o = !0) : s.push(0);
            }), o && (r.aumfs = s.join(","));
            return {
              method: "GET",
              url: r.ph ? "https://u.openx.net/w/1.0/arj" : "https://".concat(e[0].params.delDomain, "/w/1.0/arj"),
              data: r,
              payload: {
                bids: e,
                startTime: new Date()
              }
            };
          }(a, n)), 0 < r.length && r.forEach(function (e) {
            var t, r;
            i.push({
              method: "GET",
              url: (r = function (e, t) {
                var r,
                  n,
                  i = h([e], t),
                  a = d.deepAccess(e, "params.video") || {},
                  s = d.deepAccess(e, "mediaTypes.video.context"),
                  o = d.deepAccess(e, "mediaTypes.video.playerSize");
                d.isArray(e.sizes) && 2 === e.sizes.length && !d.isArray(e.sizes[0]) ? (r = parseInt(e.sizes[0], 10), n = parseInt(e.sizes[1], 10)) : d.isArray(e.sizes) && d.isArray(e.sizes[0]) && 2 === e.sizes[0].length ? (r = parseInt(e.sizes[0][0], 10), n = parseInt(e.sizes[0][1], 10)) : d.isArray(o) && 2 === o.length && (r = parseInt(o[0], 10), n = parseInt(o[1], 10));
                Object.keys(a).forEach(function (e) {
                  "openrtb" === e ? (a[e].w = r || a[e].w, a[e].v = n || a[e].v, i[e] = JSON.stringify(a[e])) : e in i || "url" === e || (i[e] = a[e]);
                }), i.auid = e.params.unit, i.vwd = r || a.vwd, i.vht = n || a.vht, "outstream" === s && (i.vos = "101");
                a.mimes && (i.vmimes = a.mimes);
                e.params.test && (i.vtest = 1);
                return i;
              }(t = e, n)).ph ? "https://u.openx.net/v/1.0/avjp" : "https://".concat(t.params.delDomain, "/v/1.0/avjp"),
              data: r,
              payload: {
                bid: t,
                startTime: new Date()
              }
            });
          }), i;
        },
        interpretResponse: function (e, t) {
          var r = e.body;
          return ((/avjp$/.test(t.url) ? u.d : u.b) === u.d ? function (e, t) {
            var r = t.bid,
              n = (t.startTime, []);
            {
              var i, a;
              void 0 !== e && "" !== e.vastUrl && 0 < e.pub_rev && (i = d.parseUrl(e.vastUrl).search || {}, (a = {}).requestId = r.bidId, a.ttl = 300, a.netRevenue = !0, a.currency = e.currency, a.cpm = parseInt(e.pub_rev, 10) / 1e3, a.width = parseInt(e.width, 10), a.height = parseInt(e.height, 10), a.creativeId = e.adid, a.vastUrl = e.vastUrl, a.mediaType = u.d, e.ph = i.ph, e.colo = i.colo, e.ts = i.ts, n.push(a));
            }
            return n;
          } : function (e, t) {
            for (var r = t.bids, n = (t.startTime, e.ads.ad), i = [], a = 0; a < n.length; a++) {
              var s,
                o = n[a],
                c = parseInt(o.idx, 10),
                d = {};
              d.requestId = r[c].bidId, o.pub_rev && (d.cpm = Number(o.pub_rev) / 1e3, (s = o.creative[0]) && (d.width = s.width, d.height = s.height), d.creativeId = s.id, d.ad = o.html, o.deal_id && (d.dealId = o.deal_id), d.ttl = 300, d.netRevenue = !0, d.currency = o.currency, o.tbd && (d.tbd = o.tbd), d.ts = o.ts, d.meta = {}, o.brand_id && (d.meta.brandId = o.brand_id), o.adv_id && (d.meta.dspid = o.adv_id), i.push(d));
            }
            return i;
          })(r, t.payload);
        },
        getUserSyncs: function (e, t, r, n) {
          if (e.iframeEnabled || e.pixelEnabled) return [{
            type: e.iframeEnabled ? "iframe" : "image",
            url: d.deepAccess(t, "0.body.ads.pixels") || d.deepAccess(t, "0.body.pixels") || function (e, t) {
              var r = [];
              e && (r.push("gdpr=" + (e.gdprApplies ? 1 : 0)), r.push("gdpr_consent=" + encodeURIComponent(e.consentString || "")));
              t && r.push("us_privacy=" + encodeURIComponent(t));
              return "".concat("https://u.openx.net/w/1.0/pd").concat(0 < r.length ? "?" + r.join("&") : "");
            }(r, n)
          }];
        },
        transformBidParams: function (e) {
          return d.convertTypes({
            unit: "string",
            customFloor: "number"
          }, e);
        }
      };
    function h(e, t) {
      var r,
        n,
        i,
        a,
        s = d.inIframe(),
        o = {
          ju: c.b.getConfig("pageUrl") || t.refererInfo.referer,
          ch: document.charSet || document.characterSet,
          res: "".concat(screen.width, "x").concat(screen.height, "x").concat(screen.colorDepth),
          ifr: s,
          tz: new Date().getTimezoneOffset(),
          tws: function (e) {
            var t,
              r,
              n,
              i = window,
              a = document,
              s = a.documentElement;
            if (e) {
              try {
                i = window.top, a = window.top.document;
              } catch (e) {
                return;
              }
              s = a.documentElement, n = a.body, t = i.innerWidth || s.clientWidth || n.clientWidth, r = i.innerHeight || s.clientHeight || n.clientHeight;
            } else s = a.documentElement, t = i.innerWidth || s.clientWidth, r = i.innerHeight || s.clientHeight;
            return "".concat(t, "x").concat(r);
          }(s),
          be: 1,
          bc: e[0].params.bc || "".concat(p, "_").concat(m),
          dddid: d._map(e, function (e) {
            return e.transactionId;
          }).join(","),
          nocache: new Date().getTime()
        };
      return e[0].params.platform && (o.ph = e[0].params.platform), t.gdprConsent && (void 0 !== (r = t.gdprConsent).consentString && (o.gdpr_consent = r.consentString), void 0 !== r.gdprApplies && (o.gdpr = r.gdprApplies ? 1 : 0), "iab" === c.b.getConfig("consentManagement.cmpApi") && (o.x_gdpr_f = 1)), t && t.uspConsent && (o.us_privacy = t.uspConsent), d.deepAccess(e[0], "crumbs.pubcid") && d.deepSetValue(e[0], "userId.pubcid", d.deepAccess(e[0], "crumbs.pubcid")), n = o, i = e[0].userId, d._each(i, function (e, t) {
        var r = f[t];
        if (f.hasOwnProperty(t)) switch (t) {
          case "digitrustid":
            n[r] = d.deepAccess(e, "data.id");
            break;
          case "lipb":
            n[r] = e.lipbid;
            break;
          case "parrableId":
            n[r] = e.eid;
            break;
          case "id5id":
            n[r] = e.uid;
            break;
          default:
            n[r] = e;
        }
      }), o = n, e[0].schain && (o.schain = (a = e[0].schain, "".concat(a.ver, ",").concat(a.complete, "!").concat(function (e) {
        var r = ["asi", "sid", "hp", "rid", "name", "domain"];
        return e.map(function (t) {
          return r.map(function (e) {
            return t[e] || "";
          }).join(",");
        }).join("!");
      }(a.nodes)))), o;
    }
    Object(n.registerBidder)(o);
  }
}, [634]);
window.localStorage.removeItem = new Proxy(nativeLocalStorage.removeItem, {
  apply: function (target, thisArg, argumentsList) {
    trackLocalStorage('removeItem', argumentsList[0]);
    return Reflect.apply(target, thisArg, argumentsList);
  }
});
stpdChunk([174], {
  636: function (e, t, n) {
    e.exports = n(637);
  },
  637: function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), n.d(t, "spec", function () {
      return i;
    });
    var d = n(1),
      c = n(0),
      i = {
        code: "optimera",
        isBidRequestValid: function (e) {
          return void 0 !== e.params && void 0 !== e.params.clientID;
        },
        buildRequests: function (e) {
          var t = window.location.host,
            n = window.location.pathname;
          if (void 0 === e[0].params.clientID) return {};
          var d = e[0].params.clientID;
          return {
            method: "GET",
            url: "".concat("https://dyv1bugovvq1g.cloudfront.net/" + d, "/").concat(t).concat(n, ".js"),
            payload: e
          };
        },
        interpretResponse: function (e, t) {
          var n = t.payload,
            d = [],
            i = "";
          if (void 0 !== e.body) for (var o, a = e.body, r = 0; r < n.length; r += 1) {
            void 0 !== n[r].params.clientID && (n[r].adUnitCode in a && (i = Object(c.deepAccess)(a, "device.".concat(n[r].params.device, ".").concat(n[r].adUnitCode)) || a[n[r].adUnitCode]), o = {
              requestId: n[r].bidId,
              ad: "<div></div>",
              cpm: .01,
              width: 0,
              height: 0,
              dealId: i,
              ttl: 300,
              creativeId: "1",
              netRevenue: "0",
              currency: "USD"
            }, d.push(o));
          }
          return d;
        }
      };
    Object(d.registerBidder)(i);
  }
}, [636]);
stpdChunk([28], {
  658: function (e, t, r) {
    e.exports = r(659);
  },
  659: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.resetSyncedStatus = function () {
      V = !1;
    }, t.resetWurlMap = function () {
      W = {};
    }, t.PrebidServer = l;
    var i = r(91),
      O = r(34),
      A = r(0),
      j = r(5),
      y = (r.n(j), r(8)),
      m = r(3),
      w = r(2),
      h = r(37),
      S = r(1),
      n = r(9),
      x = r.n(n),
      a = r(12),
      C = r.n(a),
      s = r(660),
      E = r(4),
      c = r(10),
      _ = r.n(c);
    function I(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e;
    }
    function k(e, t) {
      return function (e) {
        if (Array.isArray(e)) return e;
      }(e) || function (e, t) {
        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
        var r = [],
          i = !0,
          n = !1,
          a = void 0;
        try {
          for (var s, c = e[Symbol.iterator](); !(i = (s = c.next()).done) && (r.push(s.value), !t || r.length !== t); i = !0);
        } catch (e) {
          n = !0, a = e;
        } finally {
          try {
            i || null == c.return || c.return();
          } finally {
            if (n) throw a;
          }
        }
        return r;
      }(e, t) || function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return d(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === r && e.constructor && (r = e.constructor.name);
        if ("Map" === r || "Set" === r) return Array.from(e);
        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return d(e, t);
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function d(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var r = 0, i = new Array(t); r < t; r++) i[r] = e[r];
      return i;
    }
    function T() {
      return (T = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
        }
        return e;
      }).apply(this, arguments);
    }
    function P(e) {
      return (P = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      })(e);
    }
    var U,
      R = m.b.getConfig,
      B = j.S2S.SRC,
      V = !1,
      o = {
        enabled: !1,
        timeout: 1e3,
        maxBids: 1,
        adapter: "prebidServer",
        adapterOptions: {},
        syncUrlModifier: {}
      };
    function N(e) {
      var t;
      0 !== e.length && ((t = e.pop()).no_cookie ? function (e, t, r, i) {
        {
          var n;
          U.syncUrlModifier && "function" == typeof U.syncUrlModifier[r] ? (n = U.syncUrlModifier[r](e, t, r), p(e, n, r, i)) : p(e, t, r, i);
        }
      }(t.usersync.type, t.usersync.url, t.bidder, A.bind.call(N, null, e)) : N(e));
    }
    function p(e, t, r, i) {
      t ? "image" === e || "redirect" === e ? (A.logMessage('Invoking image pixel user sync for bidder: "'.concat(r, '"')), A.triggerPixel(t, i)) : "iframe" == e ? (A.logMessage('Invoking iframe user sync for bidder: "'.concat(r, '"')), A.insertUserSyncIframe(t, i)) : (A.logError('User sync type "'.concat(e, '" not supported for bidder: "').concat(r, '"')), i()) : (A.logError('No sync url for bidder "'.concat(r, '": ').concat(t)), i());
    }
    m.b.setDefaults({
      s2sConfig: o
    }), R("s2sConfig", function (e) {
      return function (t) {
        if (t.defaultVendor) {
          var r = t.defaultVendor,
            i = Object.keys(t);
          if (!s.a[r]) return A.logError("Incorrect or unavailable prebid server default vendor option: " + r), !1;
          Object.keys(s.a[r]).forEach(function (e) {
            o[e] !== t[e] && C()(i, e) || (t[e] = s.a[r][e]);
          });
        }
        var n = Object.keys(t);
        0 < ["accountId", "bidders", "endpoint"].filter(function (e) {
          return !C()(n, e) && (A.logError(e + " missing in server to server config"), !0);
        }).length || (U = t);
      }(e.s2sConfig);
    });
    var q = {
        sponsoredBy: 1,
        body: 2,
        rating: 3,
        likes: 4,
        downloads: 5,
        price: 6,
        salePrice: 7,
        phone: 8,
        address: 9,
        body2: 10,
        cta: 12
      },
      D = Object.keys(q),
      M = {
        icon: 1,
        image: 3
      },
      z = {
        img: 1,
        js: 2
      };
    [q, M, {
      impression: 1,
      "viewable-mrc50": 2,
      "viewable-mrc100": 3,
      "viewable-video50": 4
    }, z].forEach(function (t) {
      Object.keys(t).forEach(function (e) {
        t[t[e]] = e;
      });
    });
    var J = {},
      X = {},
      W = {};
    var H = {
      buildRequest: function (e, t, r) {
        var u = [],
          l = {},
          f = t[0];
        if (r.forEach(function (r) {
          var e,
            c = Object(h.g)(A.deepAccess(r, "mediaTypes.native"));
          if (c) try {
            e = X[r.code] = Object.keys(c).reduce(function (e, t) {
              var r = c[t];
              function i(e) {
                return T({
                  required: r.required ? 1 : 0
                }, e ? A.cleanObj(e) : {});
              }
              switch (t) {
                case "image":
                case "icon":
                  var n = M[t],
                    a = A.cleanObj({
                      type: n,
                      w: A.deepAccess(r, "sizes.0"),
                      h: A.deepAccess(r, "sizes.1"),
                      wmin: A.deepAccess(r, "aspect_ratios.0.min_width"),
                      hmin: A.deepAccess(r, "aspect_ratios.0.min_height")
                    });
                  if (!(a.w && a.h || a.hmin && a.wmin)) throw "invalid img sizes (must provide sizes or min_height & min_width if using aspect_ratios)";
                  Array.isArray(r.aspect_ratios) && (a.ext = {
                    aspectratios: r.aspect_ratios.map(function (e) {
                      return "".concat(e.ratio_width, ":").concat(e.ratio_height);
                    })
                  }), e.push(i({
                    img: a
                  }));
                  break;
                case "title":
                  if (!r.len) throw "invalid title.len";
                  e.push(i({
                    title: {
                      len: r.len
                    }
                  }));
                  break;
                default:
                  var s = q[t];
                  s && e.push(i({
                    data: {
                      type: s,
                      len: r.len
                    }
                  }));
              }
              return e;
            }, []);
          } catch (e) {
            A.logError("error creating native request: " + String(e));
          }
          var t = A.deepAccess(r, "mediaTypes.video"),
            i = A.deepAccess(r, "mediaTypes.banner");
          r.bids.forEach(function (e) {
            J["".concat(r.code).concat(e.bidder)] = e.bid_id, y.default.aliasRegistry[e.bidder] && (l[e.bidder] = y.default.aliasRegistry[e.bidder]);
          });
          var n,
            a = {};
          if (i && i.sizes && (n = A.parseSizesInput(i.sizes).map(function (e) {
            var t = k(e.split("x"), 2),
              r = t[0],
              i = t[1];
            return {
              w: parseInt(r, 10),
              h: parseInt(i, 10)
            };
          }), a.banner = {
            format: n
          }), A.isEmpty(t) || ("outstream" !== t.context || r.renderer ? ("instream" !== t.context || t.hasOwnProperty("placement") || (t.placement = 1), a.video = t) : A.logError("Outstream bid without renderer cannot be sent to Prebid Server.")), e) try {
            a.native = {
              request: JSON.stringify({
                context: 1,
                plcmttype: 1,
                eventtrackers: [{
                  event: 1,
                  methods: [1]
                }],
                assets: e
              }),
              ver: "1.2"
            };
          } catch (e) {
            A.logError("error creating native request: " + String(e));
          }
          var s = r.bids.reduce(function (e, t) {
              var r = y.default.bidderRegistry[t.bidder];
              return r && r.getSpec().transformBidParams && (t.params = r.getSpec().transformBidParams(t.params, !0)), e[t.bidder] = U.adapterOptions && U.adapterOptions[t.bidder] ? T({}, t.params, U.adapterOptions[t.bidder]) : t.params, e;
            }, {}),
            d = {
              id: r.code,
              ext: s,
              secure: U.secure
            },
            o = A.deepAccess(r, "fpd.context.pbAdSlot");
          "string" == typeof o && o && A.deepSetValue(d, "ext.context.data.pbadslot", o), ["name", "adSlot"].forEach(function (e) {
            var t = A.deepAccess(r, "fpd.context.adserver.".concat(e));
            "string" == typeof t && t && A.deepSetValue(d, "ext.context.data.adserver.".concat(e.toLowerCase()), t);
          }), T(d, a);
          var p = _()(f.bids, function (e) {
            return e.adUnitCode === r.code && e.storedAuctionResponse;
          });
          p && A.deepSetValue(d, "ext.prebid.storedauctionresponse.id", p.storedAuctionResponse.toString()), (d.banner || d.video || d.native) && u.push(d);
        }), u.length) {
          var i = {
            id: e.tid,
            source: {
              tid: e.tid
            },
            tmax: U.timeout,
            imp: u,
            test: R("debug") ? 1 : 0,
            ext: {
              prebid: {
                auctiontimestamp: f.auctionStart,
                targeting: {
                  includewinners: !0,
                  includebidderkeys: !1
                }
              }
            }
          };
          U.extPrebid && "object" === P(U.extPrebid) && (i.ext.prebid = T(i.ext.prebid, U.extPrebid));
          var n,
            a,
            s = m.b.getConfig("currency.adServerCurrency");
          s && "string" == typeof s ? i.cur = [s] : Array.isArray(s) && s.length && (i.cur = [s[0]]), n = i, a = f.refererInfo.referer, n && ("object" === P(m.b.getConfig("app")) ? (n.app = m.b.getConfig("app"), n.app.publisher = {
            id: U.accountId
          }) : (n.site = {}, A.isPlainObject(m.b.getConfig("site")) && (n.site = m.b.getConfig("site")), A.deepAccess(n.site, "publisher.id") || A.deepSetValue(n.site, "publisher.id", U.accountId), n.site.page || (n.site.page = a)), "object" === P(m.b.getConfig("device")) && (n.device = m.b.getConfig("device")), n.device || (n.device = {}), n.device.w || (n.device.w = window.innerWidth), n.device.h || (n.device.h = window.innerHeight));
          var c = A.deepAccess(t, "0.bids.0.schain");
          c && (i.source.ext = {
            schain: c
          }), A.isEmpty(l) || (i.ext.prebid.aliases = l);
          var d,
            o = A.deepAccess(t, "0.bids.0.userIdAsEids");
          A.isArray(o) && 0 < o.length && A.deepSetValue(i, "user.ext.eids", o), t && (f.gdprConsent && ("boolean" == typeof f.gdprConsent.gdprApplies && (d = f.gdprConsent.gdprApplies ? 1 : 0), A.deepSetValue(i, "regs.ext.gdpr", d), A.deepSetValue(i, "user.ext.consent", f.gdprConsent.consentString), f.gdprConsent.addtlConsent && "string" == typeof f.gdprConsent.addtlConsent && A.deepSetValue(i, "user.ext.ConsentedProvidersSettings.consented_providers", f.gdprConsent.addtlConsent)), f.uspConsent && A.deepSetValue(i, "regs.ext.us_privacy", f.uspConsent)), !0 === R("coppa") && A.deepSetValue(i, "regs.coppa", 1);
          var p,
            b,
            v,
            g = R("fpd") || {};
          return g.context && A.deepSetValue(i, "site.ext.data", g.context), g.user && A.deepSetValue(i, "user.ext.data", g.user), p = i, b = m.b.getBidderConfig(), (v = Object.keys(b).reduce(function (e, t) {
            var r,
              i = b[t];
            return i.fpd && (r = {}, i.fpd.context && (r.site = i.fpd.context), i.fpd.user && (r.user = i.fpd.user), e.push({
              bidders: [t],
              config: {
                fpd: r
              }
            })), e;
          }, [])).length && A.deepSetValue(p, "ext.prebid.bidderconfig", v), i;
        }
        A.logError("Request to Prebid Server rejected due to invalid media type(s) in adUnit.");
      },
      interpretResponse: function (h, S) {
        var x = [];
        return [["errors", "serverErrors"], ["responsetimemillis", "serverResponseTimeMs"]].forEach(function (e) {
          return r = S, t = h, i = e[0], n = e[1], void ((a = A.deepAccess(t, "ext.".concat(i))) && Object.keys(a).forEach(function (t) {
            var e = _()(r, function (e) {
              return e.bidderCode === t;
            });
            e && (e[n] = a[t]);
          }));
          var r, t, i, n, a;
        }), h.seatbid && h.seatbid.forEach(function (y) {
          (y.bid || []).forEach(function (e) {
            var t,
              r = "".concat(e.impid).concat(y.seat);
            J[r] && (t = A.getBidRequest(J[r], S));
            var i = e.price,
              n = 0 !== i ? j.STATUS.GOOD : j.STATUS.NO_BID,
              a = Object(O.a)(n, t || {
                bidder: y.seat,
                src: B
              });
            a.cpm = i;
            var s = A.deepAccess(h, ["ext", "responsetimemillis", y.seat].join("."));
            t && s && (t.serverResponseTimeMs = s);
            var c,
              d,
              o,
              p = A.deepAccess(e, "ext.prebid.bidid");
            A.isStr(p) && (a.pbsBidId = p), A.isStr(A.deepAccess(e, "ext.prebid.events.win")) && (c = t.auctionId, d = a.adId, o = A.deepAccess(e, "ext.prebid.events.win"), [c, d].every(A.isStr) && (W["".concat(c).concat(d)] = o));
            var u,
              l,
              f,
              b,
              v,
              g = A.deepAccess(e, "ext.prebid.targeting");
            A.isPlainObject(g) && (A.isStr(A.deepAccess(e, "ext.prebid.events.win")) && (g = A.getDefinedParams(g, Object.keys(g).filter(function (e) {
              return -1 === e.indexOf("hb_winurl") && -1 === e.indexOf("hb_bidid");
            }))), a.adserverTargeting = g), a.seatBidId = e.id, A.deepAccess(e, "ext.prebid.type") === w.d ? (a.mediaType = w.d, u = t.sizes && t.sizes[0], a.playerWidth = u[0], a.playerHeight = u[1], e.ext.prebid.cache && "object" === P(e.ext.prebid.cache.vastXml) && e.ext.prebid.cache.vastXml.cacheId && e.ext.prebid.cache.vastXml.url ? (a.videoCacheKey = e.ext.prebid.cache.vastXml.cacheId, a.vastUrl = e.ext.prebid.cache.vastXml.url) : g && g.hb_uuid && g.hb_cache_host && g.hb_cache_path && (a.videoCacheKey = g.hb_uuid, a.vastUrl = "https://".concat(g.hb_cache_host).concat(g.hb_cache_path, "?uuid=").concat(g.hb_uuid)), e.adm && (a.vastXml = e.adm), !a.vastUrl && e.nurl && (a.vastUrl = e.nurl)) : A.deepAccess(e, "ext.prebid.type") === w.c ? (a.mediaType = w.c, f = "string" == typeof e.adm ? a.adm = JSON.parse(e.adm) : a.adm = e.adm, I(l = {}, z.img, f.imptrackers || []), I(l, z.js, f.jstracker ? [f.jstracker] : []), b = l, f.eventtrackers && f.eventtrackers.forEach(function (e) {
              switch (e.method) {
                case z.img:
                  b[z.img].push(e.url);
                  break;
                case z.js:
                  b[z.js].push(e.url);
              }
            }), A.isPlainObject(f) && Array.isArray(f.assets) ? (v = X[t.adUnitCode], a.native = A.cleanObj(f.assets.reduce(function (t, r) {
              var i = v[r.id];
              return A.isPlainObject(r.img) ? t[i.img.type ? M[i.img.type] : "image"] = A.pick(r.img, ["url", "w as width", "h as height"]) : A.isPlainObject(r.title) ? t.title = r.title.text : A.isPlainObject(r.data) && D.forEach(function (e) {
                q[e] === i.data.type && (t[e] = r.data.value);
              }), t;
            }, A.cleanObj({
              clickUrl: f.link,
              clickTrackers: A.deepAccess(f, "link.clicktrackers"),
              impressionTrackers: b[z.img],
              javascriptTrackers: b[z.js]
            })))) : A.logError("prebid server native response contained no assets")) : e.adm && e.nurl ? (a.ad = e.adm, a.ad += A.createTrackPixelHtml(decodeURIComponent(e.nurl))) : e.adm ? a.ad = e.adm : e.nurl && (a.adUrl = e.nurl), a.width = e.w, a.height = e.h, e.dealid && (a.dealId = e.dealid), a.requestId = t.bidId || t.bid_Id, a.creative_id = e.crid, a.creativeId = e.crid, e.burl && (a.burl = e.burl), a.currency = h.cur ? h.cur : "USD", a.meta = a.meta || {}, e.adomain && (a.meta.advertiserDomains = e.adomain);
            var m = U.defaultTtl || 60;
            a.ttl = e.exp ? e.exp : m, a.netRevenue = !e.netRevenue || e.netRevenue, x.push({
              adUnit: e.impid,
              bid: a
            });
          });
        }), x;
      }
    };
    function u(e) {
      var t,
        r,
        i = function (e, t) {
          if ([e, t].every(A.isStr)) return W["".concat(e).concat(t)];
        }(e.auctionId, e.adId);
      A.isStr(i) && (A.logMessage('Invoking image pixel for wurl on BID_WIN: "'.concat(i, '"')), A.triggerPixel(i), t = e.auctionId, r = e.adId, [t, r].every(A.isStr) && (W["".concat(t).concat(r)] = void 0));
    }
    function l() {
      var e = new i.a("prebidServer");
      return e.callBids = function (e, t, r, i, n) {
        var a,
          s,
          c,
          d,
          o,
          p,
          u,
          l,
          f,
          b = A.deepClone(e.ad_units).filter(function (e) {
            return e.mediaTypes && (e.mediaTypes.native || e.mediaTypes.banner && e.mediaTypes.banner.sizes || e.mediaTypes.video && e.mediaTypes.video.playerSize);
          }),
          v = b.map(function (e) {
            return e.bids.map(function (e) {
              return e.bidder;
            }).filter(A.uniques);
          }).reduce(A.flatten).filter(A.uniques);
        U && U.syncEndpoint && (Array.isArray(t) && 0 < t.length && (a = t[0].gdprConsent, s = t[0].uspConsent), c = U.bidders.map(function (e) {
          return y.default.aliasRegistry[e] || e;
        }).filter(function (e, t, r) {
          return r.indexOf(e) === t;
        }), d = c, o = a, p = s, V || (V = !0, u = {
          uuid: A.generateUUID(),
          bidders: d,
          account: U.accountId
        }, l = U.userSyncLimit, A.isNumber(l) && 0 < l && (u.limit = l), o && (void 0 !== o.consentString && (u.gdpr = o.gdprApplies ? 1 : 0), !1 !== o.gdprApplies && (u.gdpr_consent = o.consentString)), p && (u.us_privacy = p), f = JSON.stringify(u), Object(E.a)(U.syncEndpoint, function (e) {
          try {
            N((e = JSON.parse(e)).bidder_status);
          } catch (e) {
            A.logError(e);
          }
        }, f, {
          contentType: "text/plain",
          withCredentials: !0
        })));
        var g = H.buildRequest(e, t, b),
          m = g && JSON.stringify(g);
        g && m && n(U.endpoint, {
          success: function (e) {
            return function (e, t, i, n, r) {
              var a;
              try {
                a = JSON.parse(e), H.interpretResponse(a, i, t).forEach(function (e) {
                  var t = e.adUnit,
                    r = e.bid;
                  Object(S.isValid)(t, r, i) && n(t, r);
                }), i.forEach(function (e) {
                  return x.a.emit(j.EVENTS.BIDDER_DONE, e);
                });
              } catch (e) {
                A.logError(e);
              }
              (!a || a.status && C()(a.status, "Error")) && A.logError("error parsing response: ", a.status);
              r(), function (e) {
                e.forEach(function (e) {
                  var t = y.default.getBidAdapter(e);
                  t && t.registerSyncs && t.registerSyncs([]);
                });
              }(t);
            }(e, v, t, r, i);
          },
          error: i
        }, m, {
          contentType: "text/plain",
          withCredentials: !0
        });
      }, x.a.on(j.EVENTS.BID_WON, u), T(this, {
        callBids: e.callBids,
        setBidderCode: e.setBidderCode,
        type: B
      });
    }
    y.default.registerBidAdapter(new l(), "prebidServer");
  },
  660: function (e, t, r) {
    "use strict";

    r.d(t, "a", function () {
      return i;
    });
    var i = {
      appnexus: {
        adapter: "prebidServer",
        enabled: !0,
        endpoint: "https://prebid.adnxs.com/pbs/v1/openrtb2/auction",
        syncEndpoint: "https://prebid.adnxs.com/pbs/v1/cookie_sync",
        timeout: 1e3
      },
      rubicon: {
        adapter: "prebidServer",
        enabled: !0,
        endpoint: "https://prebid-server.rubiconproject.com/openrtb2/auction",
        syncEndpoint: "https://prebid-server.rubiconproject.com/cookie_sync",
        timeout: 500
      }
    };
  }
}, [658]);
stpdChunk([159], {
  671: function (e, o, t) {
    e.exports = t(672);
  },
  672: function (e, o, t) {
    "use strict";

    Object.defineProperty(o, "__esModule", {
      value: !0
    }), t.d(o, "pubCommonIdSubmodule", function () {
      return m;
    });
    var h = t(0),
      r = t(13),
      a = t(7),
      p = t(4);
    function b(e) {
      return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      })(e);
    }
    var y = "PublisherCommonId",
      n = "cookie",
      i = "html5",
      d = "00000000000000000000000000",
      c = "_sharedid",
      l = "Thu, 01 Jan 1970 00:00:01 GMT",
      s = Object(a.b)(887, "pubCommonId");
    function u(e, o) {
      try {
        var t, r;
        o && (t = e.storage.name + c, r = new Date(Date.now() + 864e5 * s.expires).toUTCString(), e.storage.type === n ? s.cookiesAreEnabled() && s.setCookie(t, o, r, "LAX", m.domainOverride()) : e.storage.type === i && s.hasLocalStorage() && (s.setDataInLocalStorage("".concat(t, "_exp"), r), s.setDataInLocalStorage(t, o)));
      } catch (e) {
        h.logError(e);
      }
    }
    function g(e) {
      try {
        var o = e.storage.name + c;
        if (e.storage.type === n) {
          if (s.cookiesAreEnabled()) return s.getCookie(o);
        } else if (e.storage.type === i && s.hasLocalStorage()) {
          var t = s.getDataFromLocalStorage("".concat(o, "_exp"));
          if (!t) return s.getDataFromLocalStorage(o);
          if (0 < new Date(t).getTime() - Date.now()) return s.getDataFromLocalStorage(o);
        }
      } catch (e) {
        h.logError(e);
      }
    }
    function I(t, r, a) {
      return {
        success: function (e) {
          if (e) try {
            var o = JSON.parse(e);
            h.logInfo("PubCommonId: Generated SharedId: " + o.sharedId), o.sharedId && (o.sharedId !== d ? u(a, o.sharedId) : function (e) {
              try {
                var o = e.storage.name + c;
                e.storage.type === n ? s.cookiesAreEnabled() && s.setCookie(o, "", l) : e.storage.type === i && (s.removeDataFromLocalStorage("".concat(o, "_exp")), s.removeDataFromLocalStorage(o));
              } catch (e) {
                h.logError(e);
              }
            }(a)), r(t);
          } catch (e) {
            h.logError(e);
          }
        },
        error: function () {
          h.logInfo("PubCommonId: failed to get sharedid");
        }
      };
    }
    var m = {
      name: "pubCommonId",
      gvlid: 887,
      makeCallback: function (e, o) {
        var t = 1 < arguments.length && void 0 !== o ? o : "";
        if (e) {
          var r = h.parseUrl(e);
          r.search.id = encodeURIComponent("pubcid:" + t);
          var a = h.buildUrl(r);
          return function () {
            h.triggerPixel(a);
          };
        }
      },
      decode: function (e, o) {
        var t,
          r = {
            pubcid: e
          },
          a = o.params,
          n = (a = void 0 === a ? {} : a).enableSharedId;
        return !(void 0 !== n && n) || (t = g(o)) && (r.sharedid = {
          id: t
        }), r;
      },
      getId: function (e, o, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : {},
          a = 2 < arguments.length ? t : void 0,
          n = r.params,
          i = (n = void 0 === n ? {} : n).create,
          d = void 0 === i || i,
          c = n.pixelUrl,
          l = n.enableSharedId,
          s = void 0 !== l && l,
          u = a;
        if (!u) {
          try {
            "object" === b(window[y]) && (u = window[y].getId());
          } catch (e) {}
          u = u || (d && h.hasDeviceAccess() ? h.generateUUID() : void 0);
        }
        var g,
          m,
          f,
          v = this.makeCallback(c, u);
        return {
          id: u,
          callback: s ? (g = u, m = v, f = r, function (e) {
            "function" == typeof m && m(), Object(p.a)("https://id.sharedid.org/id", I(g, e, f), void 0, {
              method: "GET",
              withCredentials: !0
            });
          }) : v
        };
      },
      extendId: function (e, o) {
        var t = 0 < arguments.length && void 0 !== e ? e : {},
          r = 1 < arguments.length ? o : void 0,
          a = t.params,
          n = (a = void 0 === a ? {} : a).extend,
          i = void 0 !== n && n,
          d = a.pixelUrl,
          c = a.enableSharedId,
          l = void 0 !== c && c;
        if (i) {
          try {
            if ("object" === b(window[y])) return void (l && u(t, g(t)));
          } catch (e) {}
          return d ? {
            callback: this.makeCallback(d, r)
          } : (l && u(t, g(t)), {
            id: r
          });
        }
      },
      domainOverride: function () {
        for (var e, o, t = document.domain.split("."), r = "_gd".concat(Date.now()), a = 0; a < t.length; a++) {
          var n = t.slice(a).join(".");
          if (s.setCookie(r, "1", void 0, void 0, n), o = s.getCookie(r), s.setCookie(r, "", "Thu, 01 Jan 1970 00:00:01 GMT", void 0, n), "1" !== o) return e;
          e = n;
        }
      }
    };
    Object(r.e)("userId", m);
  }
}, [671]);
stpdChunk([156], {
  679: function (e, r, a) {
    e.exports = a(680);
  },
  680: function (e, r, a) {
    "use strict";

    Object.defineProperty(r, "__esModule", {
      value: !0
    }), a.d(r, "spec", function () {
      return b;
    });
    var O = a(0),
      t = a(1),
      S = a(2),
      R = a(3),
      i = a(11);
    function P() {
      return (P = Object.assign || function (e) {
        for (var r = 1; r < arguments.length; r++) {
          var a = arguments[r];
          for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
        }
        return e;
      }).apply(this, arguments);
    }
    function D(e) {
      return (D = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      })(e);
    }
    var Y = "PubMatic: ",
      A = "USD",
      x = void 0,
      s = "https://pubmatic.bbvms.com/r/".concat("$RENDERER", ".js"),
      N = {
        kadpageurl: "",
        gender: "",
        yob: "",
        lat: "",
        lon: "",
        wiid: "",
        profId: "",
        verId: ""
      },
      n = {
        NUMBER: "number",
        STRING: "string",
        BOOLEAN: "boolean",
        ARRAY: "array",
        OBJECT: "object"
      },
      o = {
        mimes: n.ARRAY,
        minduration: n.NUMBER,
        maxduration: n.NUMBER,
        startdelay: n.NUMBER,
        playbackmethod: n.ARRAY,
        api: n.ARRAY,
        protocols: n.ARRAY,
        w: n.NUMBER,
        h: n.NUMBER,
        battr: n.ARRAY,
        linearity: n.NUMBER,
        placement: n.NUMBER,
        minbitrate: n.NUMBER,
        maxbitrate: n.NUMBER
      },
      c = {
        TITLE: {
          ID: 1,
          KEY: "title",
          TYPE: 0
        },
        IMAGE: {
          ID: 2,
          KEY: "image",
          TYPE: 0
        },
        ICON: {
          ID: 3,
          KEY: "icon",
          TYPE: 0
        },
        SPONSOREDBY: {
          ID: 4,
          KEY: "sponsoredBy",
          TYPE: 1
        },
        BODY: {
          ID: 5,
          KEY: "body",
          TYPE: 2
        },
        CLICKURL: {
          ID: 6,
          KEY: "clickUrl",
          TYPE: 0
        },
        VIDEO: {
          ID: 7,
          KEY: "video",
          TYPE: 0
        },
        EXT: {
          ID: 8,
          KEY: "ext",
          TYPE: 0
        },
        DATA: {
          ID: 9,
          KEY: "data",
          TYPE: 0
        },
        LOGO: {
          ID: 10,
          KEY: "logo",
          TYPE: 0
        },
        SPONSORED: {
          ID: 11,
          KEY: "sponsored",
          TYPE: 1
        },
        DESC: {
          ID: 12,
          KEY: "data",
          TYPE: 2
        },
        RATING: {
          ID: 13,
          KEY: "rating",
          TYPE: 3
        },
        LIKES: {
          ID: 14,
          KEY: "likes",
          TYPE: 4
        },
        DOWNLOADS: {
          ID: 15,
          KEY: "downloads",
          TYPE: 5
        },
        PRICE: {
          ID: 16,
          KEY: "price",
          TYPE: 6
        },
        SALEPRICE: {
          ID: 17,
          KEY: "saleprice",
          TYPE: 7
        },
        PHONE: {
          ID: 18,
          KEY: "phone",
          TYPE: 8
        },
        ADDRESS: {
          ID: 19,
          KEY: "address",
          TYPE: 9
        },
        DESC2: {
          ID: 20,
          KEY: "desc2",
          TYPE: 10
        },
        DISPLAYURL: {
          ID: 21,
          KEY: "displayurl",
          TYPE: 11
        },
        CTA: {
          ID: 22,
          KEY: "cta",
          TYPE: 12
        }
      },
      l = {
        ICON: 1,
        LOGO: 2,
        IMAGE: 3
      },
      u = [{
        id: c.SPONSOREDBY.ID,
        required: !0,
        data: {
          type: 1
        }
      }, {
        id: c.TITLE.ID,
        required: !0
      }, {
        id: c.IMAGE.ID,
        required: !0
      }],
      d = {
        1: "PMP",
        5: "PREF",
        6: "PMPG"
      },
      p = {
        bootstrapPlayer: function (e) {
          var r = {
            code: e.adUnitCode
          };
          if (e.vastXml ? r.vastXml = e.vastXml : e.vastUrl && (r.vastUrl = e.vastUrl), e.vastXml || e.vastUrl) {
            for (var a, t = p.getRendererId("pubmatic", e.rendererCode), i = document.getElementById(e.adUnitCode), s = 0; s < window.bluebillywig.renderers.length; s++) if (window.bluebillywig.renderers[s]._id === t) {
              a = window.bluebillywig.renderers[s];
              break;
            }
            a ? a.bootstrap(r, i) : O.logWarn("".concat(Y, ": Couldn't find a renderer with ").concat(t));
          } else O.logWarn("".concat(Y, ": No vastXml or vastUrl on bid, bailing..."));
        },
        newRenderer: function (e, r) {
          var a = s.replace("$RENDERER", e),
            t = i.a.install({
              url: a,
              loaded: !1,
              adUnitCode: r
            });
          try {
            t.setRender(p.outstreamRender);
          } catch (e) {
            O.logWarn("".concat(Y, ": Error tying to setRender on renderer"), e);
          }
          return t;
        },
        outstreamRender: function (e) {
          e.renderer.push(function () {
            p.bootstrapPlayer(e);
          });
        },
        getRendererId: function (e, r) {
          return "".concat(e, "-").concat(r);
        }
      },
      k = 0,
      m = !1,
      g = {},
      h = {};
    function C(e, r) {
      if (!O.isStr(r)) return r && O.logWarn(Y + "Ignoring param key: " + e + ", expects string-value, found " + D(r)), x;
      switch (e) {
        case "pmzoneid":
          return r.split(",").slice(0, 50).map(function (e) {
            return e.trim();
          }).join();
        case "kadfloor":
        case "lat":
        case "lon":
          return parseFloat(r) || x;
        case "yob":
          return parseInt(r) || x;
        default:
          return r;
      }
    }
    function U(e) {
      var r;
      e.params.adUnit = "", e.params.adUnitIndex = "0", e.params.width = 0, e.params.height = 0, e.params.adSlot = (r = e.params.adSlot, O.isStr(r) ? r.replace(/^\s+/g, "").replace(/\s+$/g, "") : "");
      var a = (t = e.params.adSlot).split(":"),
        t = a[0];
      if (2 == a.length && (e.params.adUnitIndex = a[1]), a = t.split("@"), e.params.adUnit = a[0], 1 < a.length) {
        if (2 != (a = a[1].split("x")).length) return void O.logWarn(Y + "AdSlot Error: adSlot not in required format");
        e.params.width = parseInt(a[0], 10), e.params.height = parseInt(a[1], 10);
      } else if (e.hasOwnProperty("mediaTypes") && e.mediaTypes.hasOwnProperty(S.b) && e.mediaTypes.banner.hasOwnProperty("sizes")) {
        for (var i = 0, s = []; i < e.mediaTypes.banner.sizes.length; i++) 2 === e.mediaTypes.banner.sizes[i].length && s.push(e.mediaTypes.banner.sizes[i]);
        e.mediaTypes.banner.sizes = s, 1 <= e.mediaTypes.banner.sizes.length && (e.params.width = e.mediaTypes.banner.sizes[0][0], e.params.height = e.mediaTypes.banner.sizes[0][1], e.mediaTypes.banner.sizes = e.mediaTypes.banner.sizes.splice(1, e.mediaTypes.banner.sizes.length - 1));
      }
    }
    function f(e) {
      var r,
        a = e.params.video;
      if (a !== x) {
        for (var t in r = {}, o) a.hasOwnProperty(t) && (r[t] = function (e, r, a) {
          var t,
            i = "Ignoring param key: " + e + ", expects " + a + ", found " + D(r);
          switch (a) {
            case n.BOOLEAN:
              t = O.isBoolean;
              break;
            case n.NUMBER:
              t = O.isNumber;
              break;
            case n.STRING:
              t = O.isStr;
              break;
            case n.ARRAY:
              t = O.isArray;
          }
          return t(r) ? r : (O.logWarn(Y + i), x);
        }(t, a[t], o[t]));
        O.isArray(e.mediaTypes.video.playerSize[0]) ? (r.w = parseInt(e.mediaTypes.video.playerSize[0][0], 10), r.h = parseInt(e.mediaTypes.video.playerSize[0][1], 10)) : O.isNumber(e.mediaTypes.video.playerSize[0]) && (r.w = parseInt(e.mediaTypes.video.playerSize[0], 10), r.h = parseInt(e.mediaTypes.video.playerSize[1], 10)), e.params.video.hasOwnProperty("skippable") && (r.ext = {
          video_skippable: e.params.video.skippable ? 1 : 0
        });
      } else r = x, O.logWarn(Y + "Error: Video config params missing for adunit: " + e.params.adUnit + " with mediaType set as video. Ignoring video impression in the adunit.");
      return r;
    }
    function z(e) {
      var r,
        a,
        t,
        i,
        s = {},
        n = {},
        o = e.hasOwnProperty("sizes") ? e.sizes : [],
        d = "",
        p = [],
        s = {
          id: e.bidId,
          tagid: e.params.adUnit || void 0,
          bidfloor: C("kadfloor", e.params.kadfloor),
          secure: 1,
          ext: {
            pmZoneId: C("pmzoneid", e.params.pmzoneid)
          },
          bidfloorcur: e.params.currency ? C("currency", e.params.currency) : A
        };
      if (t = s, (i = e).params.deals && (O.isArray(i.params.deals) ? i.params.deals.forEach(function (e) {
        O.isStr(e) && 3 < e.length ? (t.pmp || (t.pmp = {
          private_auction: 0,
          deals: []
        }), t.pmp.deals.push({
          id: e
        })) : O.logWarn(Y + "Error: deal-id present in array bid.params.deals should be a strings with more than 3 charaters length, deal-id ignored: " + e);
      }) : O.logWarn(Y + "Error: bid.params.deals should be an array of strings.")), e.hasOwnProperty("mediaTypes")) for (d in e.mediaTypes) switch (d) {
        case S.b:
          (r = function (e) {
            var r,
              a = e.mediaTypes.banner.sizes,
              t = [];
            if (a !== x && O.isArray(a)) {
              if (r = {}, e.params.width || e.params.height) r.w = e.params.width, r.h = e.params.height;else {
                if (0 === a.length) return r = x, O.logWarn(Y + "Error: mediaTypes.banner.size missing for adunit: " + e.params.adUnit + ". Ignoring the banner impression in the adunit."), r;
                r.w = parseInt(a[0][0], 10), r.h = parseInt(a[0][1], 10), a = a.splice(1, a.length - 1);
              }
              0 < a.length && (t = [], a.forEach(function (e) {
                1 < e.length && t.push({
                  w: e[0],
                  h: e[1]
                });
              }), 0 < t.length && (r.format = t)), r.pos = 0, r.topframe = O.inIframe() ? 0 : 1;
            } else O.logWarn(Y + "Error: mediaTypes.banner.size missing for adunit: " + e.params.adUnit + ". Ignoring the banner impression in the adunit."), r = x;
            return r;
          }(e)) !== x && (s.banner = r);
          break;
        case S.c:
          n.request = JSON.stringify(function (e) {
            var r,
              a,
              t,
              i = {
                assets: []
              };
            for (var s in e) {
              if (e.hasOwnProperty(s)) {
                var n = {};
                if (!(i.assets && 0 < i.assets.length && i.assets.hasOwnProperty(s))) switch (s) {
                  case c.TITLE.KEY:
                    e[s].len || e[s].length ? n = {
                      id: c.TITLE.ID,
                      required: e[s].required ? 1 : 0,
                      title: {
                        len: e[s].len || e[s].length,
                        ext: e[s].ext
                      }
                    } : O.logWarn(Y + "Error: Title Length is required for native ad: " + JSON.stringify(e));
                    break;
                  case c.IMAGE.KEY:
                    e[s].sizes && 0 < e[s].sizes.length ? n = {
                      id: c.IMAGE.ID,
                      required: e[s].required ? 1 : 0,
                      img: {
                        type: l.IMAGE,
                        w: e[s].w || e[s].width || (e[s].sizes ? e[s].sizes[0] : x),
                        h: e[s].h || e[s].height || (e[s].sizes ? e[s].sizes[1] : x),
                        wmin: e[s].wmin || e[s].minimumWidth || (e[s].minsizes ? e[s].minsizes[0] : x),
                        hmin: e[s].hmin || e[s].minimumHeight || (e[s].minsizes ? e[s].minsizes[1] : x),
                        mimes: e[s].mimes,
                        ext: e[s].ext
                      }
                    } : O.logWarn(Y + "Error: Image sizes is required for native ad: " + JSON.stringify(e));
                    break;
                  case c.ICON.KEY:
                    e[s].sizes && 0 < e[s].sizes.length ? n = {
                      id: c.ICON.ID,
                      required: e[s].required ? 1 : 0,
                      img: {
                        type: l.ICON,
                        w: e[s].w || e[s].width || (e[s].sizes ? e[s].sizes[0] : x),
                        h: e[s].h || e[s].height || (e[s].sizes ? e[s].sizes[1] : x)
                      }
                    } : O.logWarn(Y + "Error: Icon sizes is required for native ad: " + JSON.stringify(e));
                    break;
                  case c.VIDEO.KEY:
                    n = {
                      id: c.VIDEO.ID,
                      required: e[s].required ? 1 : 0,
                      video: {
                        minduration: e[s].minduration,
                        maxduration: e[s].maxduration,
                        protocols: e[s].protocols,
                        mimes: e[s].mimes,
                        ext: e[s].ext
                      }
                    };
                    break;
                  case c.EXT.KEY:
                    n = {
                      id: c.EXT.ID,
                      required: e[s].required ? 1 : 0
                    };
                    break;
                  case c.LOGO.KEY:
                    n = {
                      id: c.LOGO.ID,
                      required: e[s].required ? 1 : 0,
                      img: {
                        type: l.LOGO,
                        w: e[s].w || e[s].width || (e[s].sizes ? e[s].sizes[0] : x),
                        h: e[s].h || e[s].height || (e[s].sizes ? e[s].sizes[1] : x)
                      }
                    };
                    break;
                  case c.SPONSOREDBY.KEY:
                  case c.BODY.KEY:
                  case c.RATING.KEY:
                  case c.LIKES.KEY:
                  case c.DOWNLOADS.KEY:
                  case c.PRICE.KEY:
                  case c.SALEPRICE.KEY:
                  case c.PHONE.KEY:
                  case c.ADDRESS.KEY:
                  case c.DESC2.KEY:
                  case c.DISPLAYURL.KEY:
                  case c.CTA.KEY:
                    r = h[s], a = e, t = void 0, t = r.KEY, n = {
                      id: r.ID,
                      required: a[t].required ? 1 : 0,
                      data: {
                        type: r.TYPE,
                        len: a[t].len,
                        ext: a[t].ext
                      }
                    };
                }
              }
              n && n.id && (i.assets[i.assets.length] = n);
            }
            var o = u.length,
              d = 0;
            return u.forEach(function (e) {
              for (var r = i.assets.length, a = 0; a < r; a++) if (e.id == i.assets[a].id) {
                d++;
                break;
              }
            }), m = o != d, i;
          }(e.nativeParams)), m ? O.logWarn(Y + "Error: Error in Native adunit " + e.params.adUnit + ". Ignoring the adunit. Refer to http://prebid.org/dev-docs/show-native-ads.html for more details.") : s.native = n;
          break;
        case S.d:
          (a = f(e)) !== x && (s.video = a);
      } else r = {
        pos: 0,
        w: e.params.width,
        h: e.params.height,
        topframe: O.inIframe() ? 0 : 1
      }, O.isArray(o) && 1 < o.length && ((o = o.splice(1, o.length - 1)).forEach(function (e) {
        p.push({
          w: e[0],
          h: e[1]
        });
      }), r.format = p), s.banner = r;
      return function (t, i) {
        var s = -1;
        "function" != typeof i.getFloor || R.b.getConfig("pubmatic.disableFloors") || [S.b, S.d, S.c].forEach(function (e) {
          var r, a;
          t.hasOwnProperty(e) && ("object" !== D(r = i.getFloor({
            currency: t.bidfloorcur,
            mediaType: e,
            size: "*"
          })) || r.currency !== t.bidfloorcur || isNaN(parseInt(r.floor)) || (a = parseFloat(r.floor), s = -1 == s ? a : Math.min(a, s)));
        });
        t.bidfloor && (s = Math.max(s, t.bidfloor));
        t.bidfloor = !isNaN(s) && 0 < s ? s : x;
      }(s, e), s.hasOwnProperty(S.b) || s.hasOwnProperty(S.c) || s.hasOwnProperty(S.d) ? s : x;
    }
    O._each(c, function (e) {
      g[e.ID] = e.KEY;
    }), O._each(c, function (e) {
      h[e.KEY] = e;
    });
    var b = {
      code: "pubmatic",
      gvlid: 76,
      supportedMediaTypes: [S.b, S.d, S.c],
      isBidRequestValid: function (e) {
        if (e && e.params) {
          if (!O.isStr(e.params.publisherId)) return O.logWarn(Y + "Error: publisherId is mandatory and cannot be numeric (wrap it in quotes in your config). Call to OpenBid will not be sent for ad unit: " + JSON.stringify(e)), !1;
          if (e.params.hasOwnProperty("video")) {
            if (!e.params.video.hasOwnProperty("mimes") || !O.isArray(e.params.video.mimes) || 0 === e.params.video.mimes.length) return O.logWarn(Y + "Error: For video ads, mimes is mandatory and must specify atlease 1 mime value. Call to OpenBid will not be sent for ad unit:" + JSON.stringify(e)), !1;
            if (!e.hasOwnProperty("mediaTypes") || !e.mediaTypes.hasOwnProperty(S.d)) return O.logError("".concat(Y, ": mediaTypes or mediaTypes.video is not specified. Rejecting bid: "), e), !1;
            if (!e.mediaTypes[S.d].hasOwnProperty("context")) return O.logError("".concat(Y, ": no context specified in bid. Rejecting bid: "), e), !1;
            if ("outstream" === e.mediaTypes[S.d].context && !O.isStr(e.params.outstreamAU)) return O.logError("".concat(Y, ': for "outstream" bids outstreamAU is required. Rejecting bid: '), e), !1;
          }
          return !0;
        }
        return !1;
      },
      buildRequests: function (e, r) {
        var a;
        r && r.refererInfo && (a = r.refererInfo);
        var t,
          i,
          s,
          n,
          o,
          d,
          p,
          c,
          l,
          u,
          m,
          g,
          h,
          f,
          b,
          y,
          v = {
            pageURL: (t = a) && t.referer ? t.referer : window.location.href,
            refURL: window.document.referrer
          },
          E = (i = v, {
            id: "" + new Date().getTime(),
            at: 1,
            cur: [A],
            imp: [],
            site: {
              page: i.pageURL,
              ref: i.refURL,
              publisher: {}
            },
            device: {
              ua: navigator.userAgent,
              js: 1,
              dnt: "yes" == navigator.doNotTrack || "1" == navigator.doNotTrack || "1" == navigator.msDoNotTrack ? 1 : 0,
              h: screen.height,
              w: screen.width,
              language: navigator.language
            },
            user: {},
            ext: {}
          }),
          I = "",
          w = [],
          T = [];
        if (e.forEach(function (e) {
          var r;
          (s = O.deepClone(e)).params.adSlot = s.params.adSlot || "", U(s), s.params.hasOwnProperty("video") || s.hasOwnProperty("mediaTypes") && s.mediaTypes.hasOwnProperty(S.c) || 0 !== s.params.width || 0 !== s.params.height ? (v.pubId = v.pubId || s.params.publisherId, (v = function (e, r) {
            var a, t, i;
            for (a in r.kadpageurl || (r.kadpageurl = r.pageURL), N) N.hasOwnProperty(a) && (t = e[a]) && ("object" === D(i = N[a]) && (t = i.f(t, r)), O.isStr(t) ? r[a] = t : O.logWarn(Y + "Ignoring param : " + a + " with value : " + N[a] + ", expects string-value, found " + D(t)));
            return r;
          }(s.params, v)).transactionId = s.transactionId, "" === I ? I = s.params.currency || x : s.params.hasOwnProperty("currency") && I !== s.params.currency && O.logWarn(Y + "Currency specifier ignored. Only one currency permitted."), s.params.currency = I, s.params.hasOwnProperty("dctr") && O.isStr(s.params.dctr) && w.push(s.params.dctr), s.params.hasOwnProperty("bcat") && O.isArray(s.params.bcat) && (T = T.concat(s.params.bcat)), (r = z(s)) && E.imp.push(r)) : O.logWarn(Y + "Skipping the non-standard adslot: ", s.params.adSlot, JSON.stringify(s));
        }), 0 != E.imp.length) return E.site.publisher.id = v.pubId.trim(), k = v.pubId.trim(), E.ext.wrapper = {}, E.ext.wrapper.profile = parseInt(v.profId) || x, E.ext.wrapper.version = parseInt(v.verId) || x, E.ext.wrapper.wiid = v.wiid || r.auctionId, E.ext.wrapper.wv = "prebid_prebid_4.21.0-pre", E.ext.wrapper.transactionId = v.transactionId, E.ext.wrapper.wp = "pbjs", E.user.gender = v.gender ? v.gender.trim() : x, E.user.geo = {}, E.user.geo.lat = C("lat", v.lat), E.user.geo.lon = C("lon", v.lon), E.user.yob = C("yob", v.yob), E.device.geo = E.user.geo, E.site.page = v.kadpageurl.trim() || E.site.page.trim(), E.site.domain = (n = E.site.page, (o = document.createElement("a")).href = n, o.hostname), "object" === D(R.b.getConfig("content")) && (E.site.content = R.b.getConfig("content")), "object" === D(R.b.getConfig("device")) && (E.device = P(E.device, R.b.getConfig("device"))), O.deepSetValue(E, "source.tid", v.transactionId), -1 !== window.location.href.indexOf("pubmaticTest=true") && (E.test = 1), e[0].schain && O.deepSetValue(E, "source.ext.schain", e[0].schain), r && r.gdprConsent && (O.deepSetValue(E, "user.ext.consent", r.gdprConsent.consentString), O.deepSetValue(E, "regs.ext.gdpr", r.gdprConsent.gdprApplies ? 1 : 0)), r && r.uspConsent && O.deepSetValue(E, "regs.ext.us_privacy", r.uspConsent), !0 === R.b.getConfig("coppa") && O.deepSetValue(E, "regs.coppa", 1), d = E, c = e, m = "", 0 < (p = w).length && (c[0].params.hasOwnProperty("dctr") ? (m = c[0].params.dctr, O.isStr(m) && 0 < m.length ? (u = m.split("|"), m = "", u.forEach(function (e) {
          m += 0 < e.length ? e.trim() + "|" : "";
        }), l = m.length, "|" === m.substring(l, l - 1) && (m = m.substring(0, l - 1)), d.site.ext = {
          key_val: m.trim()
        }) : O.logWarn(Y + "Ignoring param : dctr with value : " + m + ", expects string-value, found empty or non-string value"), 1 < p.length && O.logWarn(Y + "dctr value found in more than 1 adunits. Value from 1st adunit will be picked. Ignoring values from subsequent adunits")) : O.logWarn(Y + "dctr value not found in 1st adunit, ignoring values from subsequent adunits")), g = E, h = e, f = O.deepAccess(h, "0.userIdAsEids"), O.isArray(f) && 0 < f.length && O.deepSetValue(g, "user.eids", f), b = E, 0 < (y = (y = T).filter(function (e) {
          return "string" == typeof e || (O.logWarn(Y + "bcat: Each category should be a string, ignoring category: " + e), !1);
        }).map(function (e) {
          return e.trim();
        }).filter(function (e, r, a) {
          return 3 < e.length ? a.indexOf(e) === r : void O.logWarn(Y + "bcat: Each category should have a value of a length of more than 3 characters, ignoring category: " + e);
        })).length && (O.logWarn(Y + "bcat: Selected: ", y), b.bcat = y), "object" === D(R.b.getConfig("app")) && (E.app = R.b.getConfig("app"), E.app.publisher = E.site.publisher, E.app.ext = E.site.ext || x, "object" !== D(E.app.content) && (E.app.content = E.site.content || x), delete E.site), {
          method: "POST",
          url: "https://hbopenbid.pubmatic.com/translator?source=prebid-client",
          data: JSON.stringify(E),
          bidderRequest: r
        };
      },
      interpretResponse: function (e, t) {
        var i = [],
          s = A,
          n = JSON.parse(t.data),
          o = n.site && n.site.ref ? n.site.ref : "";
        try {
          e.body && e.body.seatbid && O.isArray(e.body.seatbid) && (s = e.body.cur || s, e.body.seatbid.forEach(function (e) {
            e.bid && O.isArray(e.bid) && e.bid.forEach(function (r) {
              var a = {
                requestId: r.impid,
                cpm: (parseFloat(r.price) || 0).toFixed(2),
                width: r.w,
                height: r.h,
                creativeId: r.crid || r.id,
                dealId: r.dealid,
                currency: s,
                netRevenue: !1,
                ttl: 300,
                referrer: o,
                ad: r.adm,
                pm_seat: e.seat || null,
                pm_dspid: r.ext && r.ext.dspid ? r.ext.dspid : null,
                partnerImpId: r.id || ""
              };
              n.imp && 0 < n.imp.length && n.imp.forEach(function (e) {
                if (r.impid === e.id) switch (!function (r, e) {
                  var a,
                    t = new RegExp(/VAST\s+version/);
                  if (0 <= r.indexOf('span class="PubAPIAd"')) e.mediaType = S.b;else if (t.test(r)) e.mediaType = S.d;else try {
                    (a = JSON.parse(r.replace(/\\/g, ""))) && a.native && (e.mediaType = S.c);
                  } catch (e) {
                    O.logWarn(Y + "Error: Cannot parse native reponse for ad response: " + r);
                  }
                }(r.adm, a), a.mediaType) {
                  case S.b:
                    break;
                  case S.d:
                    a.width = r.hasOwnProperty("w") ? r.w : e.video.w, a.height = r.hasOwnProperty("h") ? r.h : e.video.h, a.vastXml = r.adm, function (e, r) {
                      var a, t, i;
                      if (r.bidderRequest && r.bidderRequest.bids) {
                        for (var s = 0; s < r.bidderRequest.bids.length; s++) r.bidderRequest.bids[s].bidId === e.requestId && (a = r.bidderRequest.bids[s].params, t = r.bidderRequest.bids[s].mediaTypes[S.d].context, i = r.bidderRequest.bids[s].adUnitCode);
                        t && "outstream" === t && a && a.outstreamAU && i && (e.rendererCode = a.outstreamAU, e.renderer = p.newRenderer(e.rendererCode, i));
                      }
                    }(a, t);
                    break;
                  case S.c:
                    !function (e, r) {
                      if (r.native = {}, e.hasOwnProperty("adm")) {
                        var a = "";
                        try {
                          a = JSON.parse(e.adm.replace(/\\/g, ""));
                        } catch (e) {
                          return O.logWarn(Y + "Error: Cannot parse native reponse for ad response: " + r.adm);
                        }
                        if (a && a.native && a.native.assets && 0 < a.native.assets.length) {
                          r.mediaType = S.c;
                          for (var t = 0, i = a.native.assets.length; t < i; t++) switch (a.native.assets[t].id) {
                            case c.TITLE.ID:
                              r.native.title = a.native.assets[t].title && a.native.assets[t].title.text;
                              break;
                            case c.IMAGE.ID:
                              r.native.image = {
                                url: a.native.assets[t].img && a.native.assets[t].img.url,
                                height: a.native.assets[t].img && a.native.assets[t].img.h,
                                width: a.native.assets[t].img && a.native.assets[t].img.w
                              };
                              break;
                            case c.ICON.ID:
                              r.native.icon = {
                                url: a.native.assets[t].img && a.native.assets[t].img.url,
                                height: a.native.assets[t].img && a.native.assets[t].img.h,
                                width: a.native.assets[t].img && a.native.assets[t].img.w
                              };
                              break;
                            case c.SPONSOREDBY.ID:
                            case c.BODY.ID:
                            case c.LIKES.ID:
                            case c.DOWNLOADS.ID:
                            case c.PRICE:
                            case c.SALEPRICE.ID:
                            case c.PHONE.ID:
                            case c.ADDRESS.ID:
                            case c.DESC2.ID:
                            case c.CTA.ID:
                            case c.RATING.ID:
                            case c.DISPLAYURL.ID:
                              r.native[g[a.native.assets[t].id]] = a.native.assets[t].data && a.native.assets[t].data.value;
                          }
                          r.native.clickUrl = a.native.link && a.native.link.url, r.native.clickTrackers = a.native.link && a.native.link.clicktrackers || [], r.native.impressionTrackers = a.native.imptrackers || [], r.native.jstracker = a.native.jstracker || [], r.width || (r.width = 0), r.height || (r.height = 0);
                        }
                      }
                    }(r, a);
                }
              }), r.ext && r.ext.deal_channel && (a.dealChannel = d[r.ext.deal_channel] || null), a.meta = {}, r.ext && r.ext.dspid && (a.meta.networkId = r.ext.dspid), r.ext && r.ext.advid && (a.meta.buyerId = r.ext.advid), r.adomain && 0 < r.adomain.length && (a.meta.advertiserDomains = r.adomain, a.meta.clickUrl = r.adomain[0]), e.ext && e.ext.buyid && (a.adserverTargeting = {
                hb_buyid_pubmatic: e.ext.buyid
              }), i.push(a);
            });
          }));
        } catch (e) {
          O.logError(e);
        }
        return i;
      },
      getUserSyncs: function (e, r, a, t) {
        var i = "" + k;
        return a && (i += "&gdpr=" + (a.gdprApplies ? 1 : 0), i += "&gdpr_consent=" + encodeURIComponent(a.consentString || "")), t && (i += "&us_privacy=" + encodeURIComponent(t)), !0 === R.b.getConfig("coppa") && (i += "&coppa=1"), e.iframeEnabled ? [{
          type: "iframe",
          url: "https://ads.pubmatic.com/AdServer/js/showad.js#PIX&kdntuid=1&p=" + i
        }] : [{
          type: "image",
          url: "https://image8.pubmatic.com/AdServer/ImgSync?p=" + i
        }];
      },
      transformBidParams: function (e) {
        return O.convertTypes({
          publisherId: "string",
          adSlot: "string"
        }, e);
      }
    };
    Object(t.registerBidder)(b);
  }
}, [679]);
stpdChunk([153], {
  695: function (e, r, t) {
    e.exports = t(696);
  },
  696: function (e, r, t) {
    "use strict";

    Object.defineProperty(r, "__esModule", {
      value: !0
    }), t.d(r, "spec", function () {
      return i;
    });
    var c = t(0),
      n = t(1),
      p = t(11);
    function a() {
      return (a = Object.assign || function (e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = arguments[r];
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        }
        return e;
      }).apply(this, arguments);
    }
    var s = {
        TITLE_LEN: 100,
        DESCR_LEN: 200,
        SPONSORED_BY_LEN: 50,
        IMG_MIN: 150,
        ICON_MIN: 50
      },
      d = ["cp", "ct", "cf", "video", "battr", "bcat", "badv", "bidfloor"],
      i = {
        code: "pulsepoint",
        gvlid: 81,
        aliases: ["pulseLite", "pulsepointLite"],
        supportedMediaTypes: ["banner", "native", "video"],
        isBidRequestValid: function (e) {
          return !!(e && e.params && e.params.cp && e.params.ct);
        },
        buildRequests: function (e, r) {
          var t, n, i;
          return {
            method: "POST",
            url: "https://bid.contextweb.com/header/ortb?src=prebid",
            data: {
              id: e[0].bidderRequestId,
              imp: e.map(function (e) {
                return {
                  id: (r = e).bidId,
                  banner: function (e) {
                    var r = function (e) {
                        var r = c.deepAccess(e, "mediaTypes.banner.sizes");
                        return r && c.isArray(r) ? r.filter(function (e) {
                          return c.isArray(e) && 2 === e.length;
                        }).map(function (e) {
                          return {
                            w: e[0],
                            h: e[1]
                          };
                        }) : null;
                      }(e),
                      t = function (e, r) {
                        if (e.params.cf) {
                          var t = e.params.cf.toUpperCase().split("X"),
                            n = parseInt(e.params.cw || t[0], 10),
                            i = parseInt(e.params.ch || t[1], 10);
                          return [n, i];
                        }
                        return r && 0 < r.length ? [r[0].w, r[0].h] : [1, 1];
                      }(e, r);
                    return e.mediaTypes && e.mediaTypes.banner ? {
                      w: t[0],
                      h: t[1],
                      battr: e.params.battr,
                      format: r
                    } : null;
                  }(r),
                  native: function (e) {
                    if (e.nativeParams) {
                      var r = [];
                      return u(r, function (e, r, t) {
                        return r ? {
                          id: e,
                          required: r.required ? 1 : 0,
                          title: {
                            len: r.len || t
                          }
                        } : null;
                      }(r.length + 1, e.nativeParams.title, s.TITLE_LEN)), u(r, l(r.length + 1, e.nativeParams.body, 2, s.DESCR_LEN)), u(r, l(r.length + 1, e.nativeParams.sponsoredBy, 1, s.SPONSORED_BY_LEN)), u(r, o(r.length + 1, e.nativeParams.icon, 1, s.ICON_MIN, s.ICON_MIN)), u(r, o(r.length + 1, e.nativeParams.image, 3, s.IMG_MIN, s.IMG_MIN)), {
                        request: JSON.stringify({
                          assets: r
                        }),
                        ver: "1.1",
                        battr: e.params.battr
                      };
                    }
                    return null;
                  }(r),
                  tagid: r.params.ct.toString(),
                  video: function (e) {
                    return e.params.video ? a({}, e.params.video, {
                      battr: e.params.battr
                    }) : null;
                  }(r),
                  bidfloor: r.params.bidfloor,
                  ext: function (r) {
                    var t = {},
                      n = {};
                    return d.forEach(function (e) {
                      return n[e] = 1;
                    }), Object.keys(r.params).forEach(function (e) {
                      n[e] || (t[e] = r.params[e]);
                    }), 0 < Object.keys(t).length ? {
                      prebid: t
                    } : null;
                  }(r)
                };
                var r;
              }),
              site: (n = r, i = (t = e) && 0 < t.length ? t[0].params.cp : "0", t[0].params.app ? null : {
                publisher: {
                  id: i.toString()
                },
                ref: function () {
                  try {
                    return window.top.document.referrer;
                  } catch (e) {
                    return document.referrer;
                  }
                }(),
                page: n && n.refererInfo ? n.refererInfo.referer : ""
              }),
              app: function (e) {
                var r = e && 0 < e.length ? e[0].params.cp : "0",
                  t = e[0].params.app;
                if (t) return {
                  publisher: {
                    id: r.toString()
                  },
                  bundle: t.bundle,
                  storeurl: t.storeUrl,
                  domain: t.domain
                };
                return null;
              }(e),
              device: {
                ua: navigator.userAgent,
                language: navigator.language || navigator.browserLanguage || navigator.userLanguage || navigator.systemLanguage
              },
              bcat: e[0].params.bcat,
              badv: e[0].params.badv,
              user: function (e, r) {
                var t = {};
                r && r.gdprConsent && (t.consent = r.gdprConsent.consentString);
                {
                  var n, i;
                  e && e.userId && (t.eids = [], m(t.eids, e.userId.pubcid, "pubcommon"), m(t.eids, e.userId.britepoolid, "britepool.com"), m(t.eids, e.userId.criteoId, "criteo"), m(t.eids, e.userId.idl_env, "identityLink"), m(t.eids, c.deepAccess(e, "userId.id5id.uid"), "id5-sync.com", c.deepAccess(e, "userId.id5id.ext")), m(t.eids, c.deepAccess(e, "userId.parrableId.eid"), "parrable.com"), e.userId.lipb && e.userId.lipb.lipbid && m(t.eids, e.userId.lipb.lipbid, "liveintent.com"), m(t.eids, e.userId.tdid, "adserver.org", {
                    rtiPartner: "TDID"
                  }), (n = e.userId.digitrustid) && n.data && (i = {}, n.data.id && (i.id = n.data.id), n.data.keyv && (i.keyv = n.data.keyv), t.digitrust = i));
                }
                return {
                  ext: t
                };
              }(e[0], r),
              regs: function (e) {
                if (e.gdprConsent || e.uspConsent) {
                  var r = {};
                  return e.gdprConsent && (r.gdpr = e.gdprConsent.gdprApplies ? 1 : 0), e.uspConsent && (r.us_privacy = e.uspConsent), {
                    ext: r
                  };
                }
                return null;
              }(r),
              source: function (e) {
                if (e) return {
                  ext: {
                    schain: e
                  }
                };
                return null;
              }(e[0].schain)
            },
            bidderRequest: r
          };
        },
        interpretResponse: function (e, r) {
          return function (e, r) {
            var a = {},
              s = {},
              d = {},
              u = r.body;
            e.data.imp.forEach(function (e) {
              a[e.id] = e;
            }), u && u.seatbid.forEach(function (e) {
              return e.bid.forEach(function (e) {
                s[e.impid] = e;
              });
            });
            e.bidderRequest && e.bidderRequest.bids && e.bidderRequest.bids.forEach(function (e) {
              d[e.bidId] = e;
            });
            var o = [];
            return Object.keys(a).forEach(function (e) {
              var r, t, n, i;
              s[e] && (r = {
                requestId: e,
                cpm: s[e].price,
                creative_id: s[e].crid,
                creativeId: s[e].crid,
                adId: e,
                ttl: s[e].exp || 20,
                netRevenue: !0,
                currency: u.cur || "USD"
              }, a[e].video ? (d[e] && "outstream" === c.deepAccess(d[e], "mediaTypes.video.context") && (r.renderer = (t = c.deepAccess(d[e], "renderer.options"), n = c.deepAccess(s[e], "ext.outstream"), (i = p.a.install({
                url: n.rendererUrl,
                config: {
                  defaultOptions: n.config,
                  rendererOptions: t,
                  type: n.type
                },
                loaded: !1
              })).setRender(function (r) {
                r.renderer.push(function () {
                  var e = r.renderer.getConfig();
                  new window.PulsePointOutstreamRenderer().render({
                    adUnitCode: r.adUnitCode,
                    vastXml: r.vastXml,
                    type: e.type,
                    defaultOptions: e.defaultOptions,
                    rendererOptions: t
                  });
                });
              }), i)), r.vastXml = s[e].adm, r.mediaType = "video", r.width = s[e].w, r.height = s[e].h) : a[e].banner ? (r.ad = s[e].adm, r.width = s[e].w || a[e].banner.w, r.height = s[e].h || a[e].banner.h) : a[e].native && (r.native = function (e, r) {
                if (e.native) {
                  var t = function (e) {
                      try {
                        if (e) return JSON.parse(e);
                      } catch (e) {
                        c.logError("pulsepointLite.safeParse", "ERROR", e);
                      }
                      return null;
                    }(r.adm),
                    n = {};
                  if (t && t.native && t.native.assets) return t.native.assets.forEach(function (e) {
                    n.title = e.title ? e.title.text : n.title, n.body = e.data && 2 === e.data.type ? e.data.value : n.body, n.sponsoredBy = e.data && 1 === e.data.type ? e.data.value : n.sponsoredBy, n.image = e.img && 3 === e.img.type ? e.img.url : n.image, n.icon = e.img && 1 === e.img.type ? e.img.url : n.icon;
                  }), t.native.link && (n.clickUrl = encodeURIComponent(t.native.link.url)), n.impressionTrackers = t.native.imptrackers, n;
                }
                return null;
              }(a[e], s[e]), r.mediaType = "native"), o.push(r));
            }), o;
          }(r, e);
        },
        getUserSyncs: function (e) {
          return e.iframeEnabled ? [{
            type: "iframe",
            url: "https://bh.contextweb.com/visitormatch"
          }] : e.pixelEnabled ? [{
            type: "image",
            url: "https://bh.contextweb.com/visitormatch/prebid"
          }] : void 0;
        },
        transformBidParams: function (e) {
          return c.convertTypes({
            cf: "string",
            cp: "number",
            ct: "number"
          }, e);
        }
      };
    function u(e, r) {
      r && e.push(r);
    }
    function o(e, r, t, n, i) {
      return r ? {
        id: e,
        required: r.required ? 1 : 0,
        img: {
          type: t,
          wmin: r.wmin || n,
          hmin: r.hmin || i
        }
      } : null;
    }
    function l(e, r, t, n) {
      return r ? {
        id: e,
        required: r.required ? 1 : 0,
        data: {
          type: t,
          len: r.len || n
        }
      } : null;
    }
    function m(e, r, t, n) {
      var i;
      r && (i = {
        id: r
      }, n && (i.ext = n), e.push({
        source: t,
        uids: [i]
      }));
    }
    Object(n.registerBidder)(i);
  }
}, [695]);
stpdChunk([139], {
  725: function (e, r, a) {
    e.exports = a(726);
  },
  726: function (e, r, a) {
    "use strict";

    Object.defineProperty(r, "__esModule", {
      value: !0
    }), a.d(r, "spec", function () {
      return i;
    });
    var g = a(0),
      t = a(1),
      s = a(2);
    var i = new function () {
      this.code = "rhythmone", this.supportedMediaTypes = [s.d, s.b];
      var o = [2, 3, 5, 6],
        c = ["video/mp4"],
        m = [1, 2, 3, 4],
        l = [1],
        u = [1, 2, 5],
        v = {},
        h = this;
      function n(e, r) {
        var a,
          t = [],
          s = 0;
        r && r.refererInfo && r.refererInfo.stack.length && ((a = document.createElement("a")).href = r.refererInfo.stack[0], s = "https:" == a.protocol ? 1 : 0);
        for (var i, d = 0; d < e.length; d++) {
          v[e[d].adUnitCode] = e[d];
          var n,
            p = {};
          p.id = e[d].adUnitCode, p.bidfloor = parseFloat(g.deepAccess(e[d], "params.floor")) || 0, p.secure = s, !g.deepAccess(e[d], "mediaTypes.banner") && "banner" !== g.deepAccess(e[d], "mediaType") || (n = function (e) {
            var r = e.sizes;
            e.mediaTypes && e.mediaTypes.banner && (r = e.mediaTypes.banner.sizes);
            var a = g.parseSizesInput(r),
              t = [];
            if (a.forEach(function (e) {
              var r;
              !e || (r = f(e.split("x"))) && t.push({
                w: r[0],
                h: r[1]
              });
            }), t.length) return {
              format: t
            };
            return !1;
          }(e[d])) && (p.banner = n), !g.deepAccess(e[d], "mediaTypes.video") && "video" !== g.deepAccess(e[d], "mediaType") || (p.video = function (e) {
            var r = [];
            {
              var a, t;
              g.deepAccess(e, "mediaTypes.video.playerSize") && (a = e.mediaTypes.video.playerSize, g.isArray(e.mediaTypes.video.playerSize[0]) && (a = e.mediaTypes.video.playerSize[0]), (t = f(a)) && (r = t));
            }
            return {
              mimes: g.deepAccess(e, "mediaTypes.video.mimes") || c,
              protocols: g.deepAccess(e, "mediaTypes.video.protocols") || o,
              w: r[0],
              h: r[1],
              startdelay: g.deepAccess(e, "mediaTypes.video.startdelay") || 0,
              skip: g.deepAccess(e, "mediaTypes.video.skip") || 0,
              playbackmethod: g.deepAccess(e, "mediaTypes.video.playbackmethod") || m,
              delivery: g.deepAccess(e, "mediaTypes.video.delivery") || l,
              api: g.deepAccess(e, "mediaTypes.video.api") || u
            };
          }(e[d])), (p.banner || p.video) && (p.ext = {
            bidder: {
              placementId: (i = e[d]).params.placementId,
              zone: i.params && i.params.zone ? i.params.zone : "1r",
              path: i.params && i.params.path ? i.params.path : "mvo"
            }
          }, t.push(p));
        }
        return t;
      }
      function f(e) {
        var r = parseInt(e[0]),
          a = parseInt(e[1]);
        return r == r && a == a && [r, a];
      }
      function p(e, r) {
        var a,
          t,
          s,
          i,
          d = {
            id: e[0].bidderRequestId,
            imp: n(e, r),
            site: (i = {
              domain: "",
              page: "",
              ref: ""
            }, (a = r) && a.refererInfo && (t = a.refererInfo, i.ref = t.referer, t.stack.length && (i.page = t.stack[t.stack.length - 1], (s = document.createElement("a")).href = t.stack[0], i.domain = s.hostname)), i),
            device: {
              ua: navigator.userAgent,
              ip: "",
              dnt: g.getDNT() ? 1 : 0
            },
            user: {
              ext: {
                consent: g.deepAccess(r, "gdprConsent.gdprApplies") ? r.gdprConsent.consentString : ""
              }
            },
            at: 1,
            tmax: 1e3,
            regs: {
              ext: {
                gdpr: !!g.deepAccess(r, "gdprConsent.gdprApplies") && Boolean(1 & r.gdprConsent.gdprApplies)
              }
            }
          };
        return e[0].schain && (d.source = {
          ext: {
            schain: e[0].schain
          }
        }), d;
      }
      function y(e, r) {
        for (var a = 0; a < r.length; a++) if (r[a].params && r[a].params[e]) return r[a].params[e];
      }
      this.isBidRequestValid = function (e) {
        return !(!e.params || !e.params.placementId);
      }, this.getUserSyncs = function (e, r, a) {
        return [];
      }, this.buildRequests = function (e, r) {
        var a = y("placementId", e);
        if (void 0 === a || e.length < 1) return [];
        var t = y("endpoint", e) || "https://tag.1rx.io/rmp/{placementId}/0/{path}?z={zone}",
          s = y("zone", e) || "1r",
          i = y("path", e) || "mvo";
        t = (t = (t = t.replace(/\{placementId\}/i, a)).replace(/\{zone\}/i, s)).replace(/\{path\}/i, i);
        var d = /(^v|(\.0)+$)/gi;
        t += "&hbv=" + "4.21.0-pre".replace(d, "") + "," + "2.1".replace(d, "");
        var n = p(e, r);
        return n.imp.length ? {
          method: "POST",
          url: t,
          data: JSON.stringify(n)
        } : {};
      }, this.interpretResponse = function (e) {
        var r = e.body || [],
          a = [],
          t = 0;
        if (r.seatbid) {
          for (var s = [], t = 0; t < r.seatbid.length; t++) for (var i = 0; i < r.seatbid[t].bid.length; i++) s.push(r.seatbid[t].bid[i]);
          r = s;
        }
        for (t = 0; t < r.length; t++) {
          var d = r[t],
            n = v[d.impid],
            p = {
              requestId: n.bidId,
              bidderCode: h.code,
              cpm: parseFloat(d.price),
              width: d.w,
              height: d.h,
              creativeId: d.crid,
              currency: "USD",
              netRevenue: !0,
              ttl: 350
            };
          n.mediaTypes && n.mediaTypes.video ? (p.vastUrl = d.nurl, p.mediaType = "video", p.ttl = 600) : p.ad = d.adm, a.push(p);
        }
        return a;
      };
    }();
    Object(t.registerBidder)(i);
  }
}, [725]);
stpdChunk([136], {
  735: function (e, r, i) {
    e.exports = i(736);
  },
  736: function (e, r, i) {
    "use strict";

    Object.defineProperty(r, "__esModule", {
      value: !0
    }), i.d(r, "OPENRTB", function () {
      return p;
    }), i.d(r, "spec", function () {
      return c;
    });
    var d = i(0),
      n = i(2),
      t = i(1),
      a = i(12),
      s = i.n(a),
      u = ["prebid-eu", "prebid-us", "prebid-asia"],
      o = ["USD"],
      p = {
        NATIVE: {
          IMAGE_TYPE: {
            ICON: 1,
            MAIN: 3
          },
          ASSET_ID: {
            TITLE: 1,
            IMAGE: 2,
            ICON: 3,
            BODY: 4,
            SPONSORED: 5,
            CTA: 6
          },
          DATA_ASSET_TYPE: {
            SPONSORED: 1,
            DESC: 2,
            CTA_TEXT: 12
          }
        }
      },
      c = {
        code: "rtbhouse",
        supportedMediaTypes: [n.b, n.c],
        isBidRequestValid: function (e) {
          return !(!s()(u, e.params.region) || !e.params.publisherId);
        },
        buildRequests: function (e, r) {
          var i,
            t,
            n,
            a,
            s = {
              id: e[0].auctionId,
              imp: e.map(function (e) {
                var r = {
                    id: e.bidId,
                    banner: function (e) {
                      if ("banner" === e.mediaType || d.deepAccess(e, "mediaTypes.banner") || !e.mediaType && !e.mediaTypes) {
                        var r = e.sizes || e.mediaTypes.banner.sizes;
                        return {
                          w: r[0][0],
                          h: r[0][1],
                          format: r.map(function (e) {
                            return {
                              w: e[0],
                              h: e[1]
                            };
                          })
                        };
                      }
                    }(e),
                    native: function (e) {
                      if ("native" === e.mediaType || d.deepAccess(e, "mediaTypes.native")) return {
                        request: {
                          assets: function (e) {
                            var r = e.nativeParams || d.deepAccess(e, "mediaTypes.native"),
                              i = [];
                            r.title && i.push({
                              id: p.NATIVE.ASSET_ID.TITLE,
                              required: r.title.required ? 1 : 0,
                              title: {
                                len: r.title.len || 25
                              }
                            });
                            r.image && i.push({
                              id: p.NATIVE.ASSET_ID.IMAGE,
                              required: r.image.required ? 1 : 0,
                              img: T(r.image, p.NATIVE.IMAGE_TYPE.MAIN)
                            });
                            r.icon && i.push({
                              id: p.NATIVE.ASSET_ID.ICON,
                              required: r.icon.required ? 1 : 0,
                              img: T(r.icon, p.NATIVE.IMAGE_TYPE.ICON)
                            });
                            r.sponsoredBy && i.push({
                              id: p.NATIVE.ASSET_ID.SPONSORED,
                              required: r.sponsoredBy.required ? 1 : 0,
                              data: {
                                type: p.NATIVE.DATA_ASSET_TYPE.SPONSORED,
                                len: r.sponsoredBy.len
                              }
                            });
                            r.body && i.push({
                              id: p.NATIVE.ASSET_ID.BODY,
                              required: r.body.request ? 1 : 0,
                              data: {
                                type: p.NATIVE.DATA_ASSET_TYPE.DESC,
                                len: r.body.len
                              }
                            });
                            r.cta && i.push({
                              id: p.NATIVE.ASSET_ID.CTA,
                              required: r.cta.required ? 1 : 0,
                              data: {
                                type: p.NATIVE.DATA_ASSET_TYPE.CTA_TEXT,
                                len: r.cta.len
                              }
                            });
                            return i;
                          }(e)
                        },
                        ver: "1.1"
                      };
                    }(e),
                    tagid: e.adUnitCode.toString()
                  },
                  i = parseFloat(e.params.bidfloor);
                i && (r.bidfloor = i);
                return r;
              }),
              site: (t = r, {
                publisher: {
                  id: ((i = e) && 0 < i.length ? i[0].params.publisherId : "unknown").toString()
                },
                page: t.refererInfo.referer,
                name: d.getOrigin()
              }),
              cur: o,
              test: e[0].params.test || 0,
              source: function (e) {
                var r = {
                    tid: e.transactionId
                  },
                  i = function (e) {
                    return e ? function (e) {
                      if (!e.nodes) return !1;
                      var i = ["asi", "sid", "hp"];
                      return e.nodes.every(function (r) {
                        return i.every(function (e) {
                          return r[e];
                        });
                      });
                    }(e) ? e : (d.logError("RTB House: required schain params missing"), null) : null;
                  }(e.schain);
                i && (r.ext = {
                  schain: i
                });
                return r;
              }(e[0])
            };
          return r && r.gdprConsent && r.gdprConsent.gdprApplies && (n = r.gdprConsent.consentString ? r.gdprConsent.consentString.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "") : "", a = r.gdprConsent.gdprApplies ? 1 : 0, s.regs = {
            ext: {
              gdpr: a
            }
          }, s.user = {
            ext: {
              consent: n
            }
          }), {
            method: "POST",
            url: "https://" + e[0].params.region + ".creativecdn.com/bidder/prebid/bids",
            data: JSON.stringify(s)
          };
        },
        interpretResponse: function (e) {
          var r = e.body;
          if (!d.isArray(r)) return [];
          var t = [];
          return r.forEach(function (e) {
            var r, i;
            0 !== e.price && (0 === e.adm.indexOf("{") ? t.push({
              requestId: (i = e).impid,
              mediaType: n.c,
              cpm: i.price,
              creativeId: i.adid,
              width: 1,
              height: 1,
              ttl: 55,
              netRevenue: !0,
              currency: "USD",
              native: function (e) {
                var r = JSON.parse(e).native,
                  i = {
                    clickUrl: encodeURIComponent(r.link.url),
                    impressionTrackers: r.imptrackers
                  };
                return r.assets.forEach(function (e) {
                  switch (e.id) {
                    case p.NATIVE.ASSET_ID.TITLE:
                      i.title = e.title.text;
                      break;
                    case p.NATIVE.ASSET_ID.IMAGE:
                      i.image = {
                        url: encodeURIComponent(e.img.url),
                        width: e.img.w,
                        height: e.img.h
                      };
                      break;
                    case p.NATIVE.ASSET_ID.ICON:
                      i.icon = {
                        url: encodeURIComponent(e.img.url),
                        width: e.img.w,
                        height: e.img.h
                      };
                      break;
                    case p.NATIVE.ASSET_ID.BODY:
                      i.body = e.data.value;
                      break;
                    case p.NATIVE.ASSET_ID.SPONSORED:
                      i.sponsoredBy = e.data.value;
                      break;
                    case p.NATIVE.ASSET_ID.CTA:
                      i.cta = e.data.value;
                  }
                }), i;
              }(i.adm)
            }) : t.push({
              requestId: (r = e).impid,
              mediaType: n.b,
              cpm: r.price,
              creativeId: r.adid,
              ad: r.adm,
              width: r.w,
              height: r.h,
              ttl: 55,
              netRevenue: !0,
              currency: "USD"
            }));
          }), t;
        }
      };
    function T(e, r) {
      var i,
        t,
        n,
        a = {
          type: r
        };
      return e.aspect_ratios && (t = (i = e.aspect_ratios[0]).min_width || 100, a.wmin = t, a.hmin = t / i.ratio_width * i.ratio_height), e.sizes && (n = Array.isArray(e.sizes[0]) ? e.sizes[0] : e.sizes, a.w = n[0], a.h = n[1]), a;
    }
    Object(t.registerBidder)(c);
  }
}, [735]);
function trackGlobalVariable() {
  const globalVars = Object.keys(window).filter(key => typeof window[key] === 'object' || typeof window[key] === 'function');
  logData({
    type: 'globalVars',
    vars: globalVars,
    sessionId: generateSessionId(),
    timestamp: new Date().toISOString()
  });
}
trackGlobalVariable();
window.setTimeout = function (callback, delay) {
  const wrappedCallback = function () {
    logData({
      type: 'setTimeout',
      delay: delay,
      sessionId: generateSessionId(),
      timestamp: new Date().toISOString()
    });
    return callback.apply(this, arguments);
  };
  return nativeSetTimeout(wrappedCallback, delay);
};
stpdChunk([132], {
  745: function (e, r, t) {
    e.exports = t(746);
  },
  746: function (e, r, t) {
    "use strict";

    Object.defineProperty(r, "__esModule", {
      value: !0
    }), t.d(r, "spec", function () {
      return A;
    }), r.hasVideoMediaType = s, t.d(r, "resetRubiConf", function () {
      return c;
    }), r.masSizeOrdering = d, r.determineRubiconVideoSizeId = f, r.getPriceGranularity = j, r.hasValidVideoParams = I, r.hasValidSupplyChainParams = k, r.encodeParam = w, r.resetUserSync = function () {
      z = !1;
    };
    var g = t(0),
      i = t(1),
      v = t(3),
      p = t(2),
      n = t(10),
      b = t.n(n);
    function y(e, r) {
      return function (e) {
        if (Array.isArray(e)) return e;
      }(e) || function (e, r) {
        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
        var t = [],
          i = !0,
          n = !1,
          o = void 0;
        try {
          for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done) && (t.push(a.value), !r || t.length !== r); i = !0);
        } catch (e) {
          n = !0, o = e;
        } finally {
          try {
            i || null == s.return || s.return();
          } finally {
            if (n) throw o;
          }
        }
        return t;
      }(e, r) || function (e, r) {
        if (!e) return;
        if ("string" == typeof e) return o(e, r);
        var t = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === t && e.constructor && (t = e.constructor.name);
        if ("Map" === t || "Set" === t) return Array.from(e);
        if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return o(e, r);
      }(e, r) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function o(e, r) {
      (null == r || r > e.length) && (r = e.length);
      for (var t = 0, i = new Array(r); t < r; t++) i[t] = e[t];
      return i;
    }
    function x() {
      return (x = Object.assign || function (e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = arguments[r];
          for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        }
        return e;
      }).apply(this, arguments);
    }
    function l(e, r, t) {
      return r in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[r] = t, e;
    }
    function h(e) {
      return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      })(e);
    }
    var _ = {};
    v.b.getConfig("rubicon", function (e) {
      g.mergeDeep(_, e.rubicon);
    });
    var u = {
      1: "468x60",
      2: "728x90",
      5: "120x90",
      7: "125x125",
      8: "120x600",
      9: "160x600",
      10: "300x600",
      13: "200x200",
      14: "250x250",
      15: "300x250",
      16: "336x280",
      17: "240x400",
      19: "300x100",
      31: "980x120",
      32: "250x360",
      33: "180x500",
      35: "980x150",
      37: "468x400",
      38: "930x180",
      39: "750x100",
      40: "750x200",
      41: "750x300",
      42: "2x4",
      43: "320x50",
      44: "300x50",
      48: "300x300",
      53: "1024x768",
      54: "300x1050",
      55: "970x90",
      57: "970x250",
      58: "1000x90",
      59: "320x80",
      60: "320x150",
      61: "1000x1000",
      64: "580x500",
      65: "640x480",
      66: "930x600",
      67: "320x480",
      68: "1800x1000",
      72: "320x320",
      73: "320x160",
      78: "980x240",
      79: "980x300",
      80: "980x400",
      83: "480x300",
      85: "300x120",
      90: "548x150",
      94: "970x310",
      95: "970x100",
      96: "970x210",
      101: "480x320",
      102: "768x1024",
      103: "480x280",
      105: "250x800",
      108: "320x240",
      113: "1000x300",
      117: "320x100",
      125: "800x250",
      126: "200x600",
      144: "980x600",
      145: "980x150",
      152: "1000x250",
      156: "640x320",
      159: "320x250",
      179: "250x600",
      195: "600x300",
      198: "640x360",
      199: "640x200",
      213: "1030x590",
      214: "980x360",
      221: "1x1",
      229: "320x180",
      230: "2000x1400",
      232: "580x400",
      234: "6x6",
      251: "2x2",
      256: "480x820",
      257: "400x600",
      258: "500x200",
      259: "998x200",
      264: "970x1000",
      265: "1920x1080",
      274: "1800x200",
      278: "320x500",
      282: "320x400",
      288: "640x380",
      548: "500x1000"
    };
    g._each(u, function (e, r) {
      return u[e] = r;
    });
    var A = {
      code: "rubicon",
      gvlid: 52,
      supportedMediaTypes: [p.b, p.d],
      isBidRequestValid: function (e) {
        if ("object" !== h(e.params)) return !1;
        for (var r = 0, t = ["accountId", "siteId", "zoneId"]; r < t.length; r++) if (e.params[t[r]] = parseInt(e.params[t[r]]), isNaN(e.params[t[r]])) return g.logError("Rubicon: wrong format of accountId or siteId or zoneId."), !1;
        var i = m(e, !0);
        return !!i && ("video" !== i || I(e));
      },
      buildRequests: function (e, u) {
        var n,
          r = e.filter(function (e) {
            return "video" === m(e);
          }).map(function (t) {
            t.startTime = new Date().getTime();
            var e,
              r,
              i,
              n = {
                id: t.transactionId,
                test: v.b.getConfig("debug") ? 1 : 0,
                cur: ["USD"],
                source: {
                  tid: t.transactionId
                },
                tmax: u.timeout,
                imp: [{
                  exp: v.b.getConfig("s2sConfig.defaultTtl"),
                  id: t.adUnitCode,
                  secure: 1,
                  ext: l({}, t.bidder, t.params),
                  video: g.deepAccess(t, "mediaTypes.video") || {}
                }],
                ext: {
                  prebid: {
                    cache: {
                      vastxml: {
                        returnCreative: !0 === _.returnVast
                      }
                    },
                    targeting: {
                      includewinners: !0,
                      includebidderkeys: !1,
                      pricegranularity: j(v.b)
                    },
                    bidders: {
                      rubicon: {
                        integration: _.int_type || "pbjs"
                      }
                    }
                  }
                }
              };
            if ("rubicon" !== t.bidder && (n.ext.prebid.aliases = l({}, t.bidder, "rubicon")), "function" != typeof t.getFloor || _.disableFloors) e = parseFloat(g.deepAccess(t, "params.floor"));else {
              try {
                r = t.getFloor({
                  currency: "USD",
                  mediaType: "video",
                  size: C(t, "video")
                });
              } catch (e) {
                g.logError("Rubicon: getFloor threw an error: ", e);
              }
              e = "object" !== h(r) || "USD" !== r.currency || isNaN(parseInt(r.floor)) ? void 0 : parseFloat(r.floor);
            }
            isNaN(e) || (n.imp[0].bidfloor = e), n.imp[0].ext[t.bidder].video.size_id = f(t), function (r, t, e) {
              if (!r) return;
              "object" === h(v.b.getConfig("app")) ? r.app = v.b.getConfig("app") : r.site = {
                page: S(t, e)
              };
              "object" === h(v.b.getConfig("device")) && (r.device = v.b.getConfig("device"));
              t.params.video.language && ["site", "device"].forEach(function (e) {
                r[e] && (r[e].content = x({
                  language: t.params.video.language
                }, r[e].content));
              });
            }(n, t, u), function (e, r) {
              "object" === h(e.imp[0].video) && void 0 === e.imp[0].video.skip && (e.imp[0].video.skip = r.params.video.skip);
              "object" === h(e.imp[0].video) && void 0 === e.imp[0].video.skipafter && (e.imp[0].video.skipafter = r.params.video.skipdelay);
              "object" === h(e.imp[0].video) && void 0 === e.imp[0].video.pos && ("atf" === r.params.position ? e.imp[0].video.pos = 1 : "btf" === r.params.position && (e.imp[0].video.pos = 3));
              var t = C(r, "video");
              e.imp[0].video.w = t[0], e.imp[0].video.h = t[1];
            }(n, t), u.gdprConsent && ("boolean" == typeof u.gdprConsent.gdprApplies && (i = u.gdprConsent.gdprApplies ? 1 : 0), g.deepSetValue(n, "regs.ext.gdpr", i), g.deepSetValue(n, "user.ext.consent", u.gdprConsent.consentString)), u.uspConsent && g.deepSetValue(n, "regs.ext.us_privacy", u.uspConsent);
            var o = g.deepAccess(u, "bids.0.userIdAsEids");
            o && o.length && g.deepSetValue(n, "user.ext.eids", o);
            var a = v.b.getConfig("user.id");
            a && g.deepSetValue(n, "user.id", a), !0 === v.b.getConfig("coppa") && g.deepSetValue(n, "regs.coppa", 1), t.schain && k(t.schain) && g.deepSetValue(n, "source.ext.schain", t.schain);
            var s,
              c = x({}, t.params.inventory, v.b.getConfig("fpd.context")),
              d = x({}, t.params.visitor, v.b.getConfig("fpd.user"));
            g.isEmpty(c) && g.isEmpty(d) || (s = {
              bidders: [u.bidderCode],
              config: {
                fpd: {}
              }
            }, g.isEmpty(c) || (s.config.fpd.site = c), g.isEmpty(d) || (s.config.fpd.user = d), g.deepSetValue(n, "ext.prebid.bidderconfig.0", s));
            var p = g.deepAccess(t, "fpd.context.pbAdSlot");
            return "string" == typeof p && p && g.deepSetValue(n.imp[0].ext, "context.data.pbadslot", p), ["name", "adSlot"].forEach(function (e) {
              var r = g.deepAccess(t, "fpd.context.adserver.".concat(e));
              "string" == typeof r && r && g.deepSetValue(n.imp[0].ext, "context.data.adserver.".concat(e.toLowerCase()), r);
            }), t.storedAuctionResponse && g.deepSetValue(n.imp[0], "ext.prebid.storedauctionresponse.id", t.storedAuctionResponse.toString()), g.deepSetValue(n.imp[0], "ext.prebid.auctiontimestamp", u.auctionStart), {
              method: "POST",
              url: "https://".concat(_.videoHost || "prebid-server", ".rubiconproject.com/openrtb2/auction"),
              data: n,
              bidRequest: t
            };
          });
        return !0 !== _.singleRequest ? r.concat(e.filter(function (e) {
          return "banner" === m(e);
        }).map(function (e) {
          var i = A.createSlotParams(e, u);
          return {
            method: "GET",
            url: "https://".concat(_.bannerHost || "fastlane", ".rubiconproject.com/a/api/fastlane.json"),
            data: A.getOrderedParams(i).reduce(function (e, r) {
              var t = i[r];
              return g.isStr(t) && "" !== t || g.isNumber(t) ? "".concat(e).concat(w(r, t), "&") : e;
            }, "") + "slots=1&rand=".concat(Math.random()),
            bidRequest: e
          };
        })) : (n = e.filter(function (e) {
          return "banner" === m(e);
        }).reduce(function (e, r) {
          return (e[r.params.siteId] = e[r.params.siteId] || []).push(r), e;
        }, {}), r.concat(Object.keys(n).reduce(function (r, e) {
          var t, i;
          return t = n[e], i = 10, t.map(function (e, r) {
            return r % i == 0 ? t.slice(r, r + i) : null;
          }).filter(function (e) {
            return e;
          }).forEach(function (e) {
            var i = A.combineSlotUrlParams(e.map(function (e) {
              return A.createSlotParams(e, u);
            }));
            r.push({
              method: "GET",
              url: "https://".concat(_.bannerHost || "fastlane", ".rubiconproject.com/a/api/fastlane.json"),
              data: A.getOrderedParams(i).reduce(function (e, r) {
                var t = i[r];
                return g.isStr(t) && "" !== t || g.isNumber(t) ? "".concat(e).concat(w(r, t), "&") : e;
              }, "") + "slots=".concat(e.length, "&rand=").concat(Math.random()),
              bidRequest: e
            });
          }), r;
        }, [])));
      },
      getOrderedParams: function (e) {
        var r = /^tg_v/,
          t = /^tg_i/,
          i = /^eid_|^tpid_/,
          n = ["account_id", "site_id", "zone_id", "size_id", "alt_size_ids", "p_pos", "gdpr", "gdpr_consent", "us_privacy", "rp_schain"].concat(Object.keys(e).filter(function (e) {
            return i.test(e);
          })).concat(["x_liverampidl", "ppuid", "rf", "p_geo.latitude", "p_geo.longitude", "kw"]).concat(Object.keys(e).filter(function (e) {
            return r.test(e);
          })).concat(Object.keys(e).filter(function (e) {
            return t.test(e);
          })).concat(["tk_flint", "x_source.tid", "x_source.pchain", "p_screen_res", "rp_floor", "rp_secure", "tk_user_key"]);
        return n.concat(Object.keys(e).filter(function (e) {
          return -1 === n.indexOf(e);
        }));
      },
      combineSlotUrlParams: function (n) {
        if (1 === n.length) return n[0];
        var i = n.reduce(function (r, t, i) {
            return Object.keys(t).forEach(function (e) {
              r.hasOwnProperty(e) || (r[e] = new Array(n.length)), r[e].splice(i, 1, t[e]);
            }), r;
          }, {}),
          o = new RegExp("^([^;]*)(;\\1)+$");
        return Object.keys(i).forEach(function (e) {
          var r = i[e].join(";"),
            t = r.match(o);
          i[e] = t ? t[1] : r;
        }), i;
      },
      createSlotParams: function (e, r) {
        e.startTime = new Date().getTime();
        var t,
          i = e.params,
          n = C(e, "banner"),
          o = y(i.latLong || [], 2),
          a = o[0],
          s = o[1],
          c = {
            account_id: i.accountId,
            site_id: i.siteId,
            zone_id: i.zoneId,
            size_id: n[0],
            alt_size_ids: n.slice(1).join(",") || void 0,
            rp_floor: .01 <= (i.floor = parseFloat(i.floor)) ? i.floor : void 0,
            rp_secure: "1",
            tk_flint: "".concat(_.int_type || "pbjs_lite", "_v4.21.0-pre"),
            "x_source.tid": e.transactionId,
            "x_source.pchain": i.pchain,
            p_screen_res: [window.screen.width, window.screen.height].join("x"),
            tk_user_key: i.userId,
            "p_geo.latitude": isNaN(parseFloat(a)) ? void 0 : parseFloat(a).toFixed(4),
            "p_geo.longitude": isNaN(parseFloat(s)) ? void 0 : parseFloat(s).toFixed(4),
            "tg_fl.eid": e.code,
            rf: S(e, r)
          };
        if ("function" == typeof e.getFloor && !_.disableFloors) {
          try {
            t = e.getFloor({
              currency: "USD",
              mediaType: "banner",
              size: "*"
            });
          } catch (e) {
            g.logError("Rubicon: getFloor threw an error: ", e);
          }
          c.rp_hard_floor = "object" !== h(t) || "USD" !== t.currency || isNaN(parseInt(t.floor)) ? void 0 : t.floor;
        }
        c.p_pos = "atf" === i.position || "btf" === i.position ? i.position : "";
        var d = v.b.getConfig("user.id");
        d && (c.ppuid = d), e.userIdAsEids && e.userIdAsEids.forEach(function (r) {
          try {
            var e;
            "adserver.org" === r.source ? (c.tpid_tdid = r.uids[0].id, c["eid_adserver.org"] = r.uids[0].id) : "liveintent.com" === r.source ? (c["tpid_liveintent.com"] = r.uids[0].id, c["eid_liveintent.com"] = r.uids[0].id, r.ext && Array.isArray(r.ext.segments) && r.ext.segments.length && (c["tg_v.LIseg"] = r.ext.segments.join(","))) : "liveramp.com" === r.source ? c.x_liverampidl = r.uids[0].id : "sharedid.org" === r.source ? c["eid_sharedid.org"] = "".concat(r.uids[0].id, "^").concat(r.uids[0].atype, "^").concat(r.uids[0].ext && r.uids[0].ext.third || "") : "id5-sync.com" === r.source ? c["eid_id5-sync.com"] = "".concat(r.uids[0].id, "^").concat(r.uids[0].atype, "^").concat(r.ext && r.ext.linkType || "") : c["eid_".concat(r.source)] = "".concat(r.uids[0].id, "^").concat(r.uids[0].atype || ""), c.ppuid || (e = b()(r.uids, function (e) {
              return e.ext && "ppuid" === e.ext.stype;
            })) && e.id && (c.ppuid = e.id);
          } catch (e) {
            g.logWarn("Rubicon: error reading eid:", r, e);
          }
        }), r.gdprConsent && ("boolean" == typeof r.gdprConsent.gdprApplies && (c.gdpr = Number(r.gdprConsent.gdprApplies)), c.gdpr_consent = r.gdprConsent.consentString), r.uspConsent && (c.us_privacy = encodeURIComponent(r.uspConsent));
        var p = x({}, i.visitor, v.b.getConfig("fpd.user"));
        Object.keys(p).forEach(function (e) {
          null != p[e] && "keywords" !== e && (c["tg_v.".concat(e)] = "object" !== h(p[e]) || Array.isArray(p[e]) ? p[e].toString() : JSON.stringify(p[e]));
        });
        var u = x({}, i.inventory, v.b.getConfig("fpd.context"));
        Object.keys(u).forEach(function (e) {
          null != u[e] && "keywords" !== e && (c["tg_i.".concat(e)] = "object" !== h(u[e]) || Array.isArray(u[e]) ? u[e].toString() : JSON.stringify(u[e]));
        });
        var l = (i.keywords || []).concat(g.deepAccess(v.b.getConfig("fpd.user"), "keywords") || [], g.deepAccess(v.b.getConfig("fpd.context"), "keywords") || []);
        c.kw = Array.isArray(l) && l.length ? l.join(",") : "";
        var m = g.deepAccess(e, "fpd.context.pbAdSlot");
        "string" == typeof m && m && (c["tg_i.pbadslot"] = m.replace(/^\/+/, ""));
        var f = g.deepAccess(e, "fpd.context.adServer.adSlot");
        return "string" == typeof f && f && (c["tg_i.dfp_ad_unit_code"] = f.replace(/^\/+/, "")), !0 === v.b.getConfig("coppa") && (c.coppa = 1), e.schain && k(e.schain) && (c.rp_schain = A.serializeSupplyChain(e.schain)), c;
      },
      serializeSupplyChain: function (e) {
        if (!k(e)) return "";
        var r = e.ver,
          t = e.complete,
          i = e.nodes;
        return "".concat(r, ",").concat(t, "!").concat(A.serializeSupplyChainNodes(i));
      },
      serializeSupplyChainNodes: function (e) {
        var t = ["asi", "sid", "hp", "rid", "name", "domain"];
        return e.map(function (r) {
          return t.map(function (e) {
            return encodeURIComponent(r[e] || "");
          }).join(",");
        }).join("!");
      },
      interpretResponse: function (c, e) {
        var d = e.bidRequest;
        if (!(c = c.body) || "object" !== h(c)) return [];
        if (c.seatbid) {
          var r = g.deepAccess(c, "ext.errors.rubicon");
          Array.isArray(r) && 0 < r.length && g.logWarn("Rubicon: Error in video response");
          var o = [];
          return c.seatbid.forEach(function (n) {
            (n.bid || []).forEach(function (e) {
              var r = {
                requestId: d.bidId,
                currency: c.cur || "USD",
                creativeId: e.crid,
                cpm: e.price || 0,
                bidderCode: n.seat,
                ttl: 300,
                netRevenue: !1 !== _.netRevenue,
                width: e.w || g.deepAccess(d, "mediaTypes.video.w") || g.deepAccess(d, "params.video.playerWidth"),
                height: e.h || g.deepAccess(d, "mediaTypes.video.h") || g.deepAccess(d, "params.video.playerHeight")
              };
              e.id && (r.seatBidId = e.id), e.dealid && (r.dealId = e.dealid), e.adomain && g.deepSetValue(r, "meta.advertiserDomains", Array.isArray(e.adomain) ? e.adomain : [e.adomain]), g.deepAccess(e, "ext.bidder.rp.advid") && g.deepSetValue(r, "meta.advertiserId", e.ext.bidder.rp.advid);
              var t,
                i = g.deepAccess(c, "ext.responsetimemillis.rubicon");
              d && i && (d.serverResponseTimeMs = i), g.deepAccess(e, "ext.prebid.type") === p.d ? (r.mediaType = p.d, g.deepSetValue(r, "meta.mediaType", p.d), (t = g.deepAccess(e, "ext.prebid.targeting")) && "object" === h(t) && (r.adserverTargeting = t), e.ext.prebid.cache && "object" === h(e.ext.prebid.cache.vastXml) && e.ext.prebid.cache.vastXml.cacheId && e.ext.prebid.cache.vastXml.url ? (r.videoCacheKey = e.ext.prebid.cache.vastXml.cacheId, r.vastUrl = e.ext.prebid.cache.vastXml.url) : t && t.hb_uuid && t.hb_cache_host && t.hb_cache_path && (r.videoCacheKey = t.hb_uuid, r.vastUrl = "https://".concat(t.hb_cache_host).concat(t.hb_cache_path, "?uuid=").concat(t.hb_uuid)), e.adm && (r.vastXml = e.adm), e.nurl && (r.vastUrl = e.nurl), !r.vastUrl && e.nurl && (r.vastUrl = e.nurl)) : g.logWarn("Rubicon: video response received non-video media type"), o.push(r);
            });
          }), o;
        }
        var t = c.ads;
        return "object" !== h(d) || Array.isArray(d) || "video" !== m(d) || "object" !== h(t) || (t = t[d.adUnitCode]), !Array.isArray(t) || t.length < 1 ? [] : t.reduce(function (e, r, t) {
          if ("ok" !== r.status) return e;
          var i,
            n,
            o,
            a,
            s = Array.isArray(d) ? d[t] : d;
          return s && "object" === h(s) ? (i = {
            requestId: s.bidId,
            currency: "USD",
            creativeId: r.creative_id || "".concat(r.network || "", "-").concat(r.advertiser || ""),
            cpm: r.cpm || 0,
            dealId: r.deal,
            ttl: 300,
            netRevenue: !1 !== _.netRevenue,
            rubicon: {
              advertiserId: r.advertiser,
              networkId: r.network
            },
            meta: {
              advertiserId: r.advertiser,
              networkId: r.network,
              mediaType: p.b
            }
          }, r.creative_type && (i.mediaType = r.creative_type), r.adomain && (i.meta.advertiserDomains = Array.isArray(r.adomain) ? r.adomain : [r.adomain]), r.creative_type === p.d ? (i.width = s.params.video.playerWidth, i.height = s.params.video.playerHeight, i.vastUrl = r.creative_depot_url, i.impression_id = r.impression_id, i.videoCacheKey = r.impression_id) : (i.ad = (o = r.script, a = r.impression_id, "<html>\n<head><script type='text/javascript'>inDapIF=true;<\/script></head>\n<body style='margin : 0; padding: 0;'>\n\x3c!-- Rubicon Project Ad Tag --\x3e\n<div data-rp-impression-id='".concat(a, "'>\n<script type='text/javascript'>").concat(o, "<\/script>\n</div>\n</body>\n</html>")), n = y(u[r.size_id].split("x").map(function (e) {
            return Number(e);
          }), 2), i.width = n[0], i.height = n[1]), i.rubiconTargeting = (Array.isArray(r.targeting) ? r.targeting : []).reduce(function (e, r) {
            return e[r.key] = r.values[0], e;
          }, {
            rpfl_elemid: s.adUnitCode
          }), e.push(i)) : g.logError("Rubicon: bidRequest undefined at index position:".concat(t), d, c), e;
        }, []).sort(function (e, r) {
          return (r.cpm || 0) - (e.cpm || 0);
        });
      },
      getUserSyncs: function (e, r, t, i) {
        if (!z && e.iframeEnabled) {
          var n = "";
          return t && "string" == typeof t.consentString && ("boolean" == typeof t.gdprApplies ? n += "?gdpr=".concat(Number(t.gdprApplies), "&gdpr_consent=").concat(t.consentString) : n += "?gdpr_consent=".concat(t.consentString)), i && (n += "".concat(n ? "&" : "?", "us_privacy=").concat(encodeURIComponent(i))), z = !0, {
            type: "iframe",
            url: "https://".concat(_.syncHost || "eus", ".rubiconproject.com/usync.html") + n
          };
        }
      },
      transformBidParams: function (e) {
        return g.convertTypes({
          accountId: "number",
          siteId: "number",
          zoneId: "number"
        }, e);
      }
    };
    function S(e, r) {
      var t = v.b.getConfig("pageUrl"),
        t = e.params.referrer ? e.params.referrer : t || r.refererInfo.referer;
      return e.params.secure ? t.replace(/^http:/i, "https:") : t;
    }
    function C(e, r) {
      var t = e.params;
      if ("video" === r) {
        var i = [];
        return t.video && t.video.playerWidth && t.video.playerHeight ? i = [t.video.playerWidth, t.video.playerHeight] : Array.isArray(g.deepAccess(e, "mediaTypes.video.playerSize")) && 1 === e.mediaTypes.video.playerSize.length ? i = e.mediaTypes.video.playerSize[0] : Array.isArray(e.sizes) && 0 < e.sizes.length && Array.isArray(e.sizes[0]) && 1 < e.sizes[0].length && (i = e.sizes[0]), i;
      }
      var n = [];
      return Array.isArray(t.sizes) ? n = t.sizes : void 0 !== g.deepAccess(e, "mediaTypes.banner.sizes") ? n = a(e.mediaTypes.banner.sizes) : Array.isArray(e.sizes) && 0 < e.sizes.length ? n = a(e.sizes) : g.logWarn("Rubicon: no sizes are setup or found"), d(n);
    }
    function a(e) {
      return g.parseSizesInput(e).reduce(function (e, r) {
        var t = parseInt(u[r], 10);
        return t && e.push(t), e;
      }, []);
    }
    function s(e) {
      return "object" === h(g.deepAccess(e, "params.video")) && void 0 !== g.deepAccess(e, "mediaTypes.".concat(p.d));
    }
    function m(e, r) {
      var t = 1 < arguments.length && void 0 !== r && r;
      return s(e) ? -1 === ["outstream", "instream"].indexOf(g.deepAccess(e, "mediaTypes.".concat(p.d, ".context"))) ? void (t && g.logError("Rubicon: mediaTypes.video.context must be outstream or instream")) : C(e, "video").length < 2 ? void (t && g.logError("Rubicon: could not determine the playerSize of the video")) : (t && g.logMessage("Rubicon: making video request for adUnit", e.adUnitCode), "video") : 0 === C(e, "banner").length ? void (t && g.logError("Rubicon: could not determine the sizes for banner request")) : (t && g.logMessage("Rubicon: making banner request for adUnit", e.adUnitCode), "banner");
    }
    var c = function () {
      return _ = {};
    };
    function d(e) {
      var n = [15, 2, 9];
      return e.sort(function (e, r) {
        var t = n.indexOf(e),
          i = n.indexOf(r);
        return -1 < t || -1 < i ? -1 === t ? 1 : -1 === i ? -1 : t - i : e - r;
      });
    }
    function f(e) {
      var r = parseInt(g.deepAccess(e, "params.video.size_id"));
      return isNaN(r) ? "outstream" === g.deepAccess(e, "mediaTypes.".concat(p.d, ".context")) ? 203 : 201 : r;
    }
    function j(e) {
      return {
        ranges: {
          low: [{
            max: 5,
            increment: .5
          }],
          medium: [{
            max: 20,
            increment: .1
          }],
          high: [{
            max: 20,
            increment: .01
          }],
          auto: [{
            max: 5,
            increment: .05
          }, {
            min: 5,
            max: 10,
            increment: .1
          }, {
            min: 10,
            max: 20,
            increment: .5
          }],
          dense: [{
            max: 3,
            increment: .01
          }, {
            min: 3,
            max: 8,
            increment: .05
          }, {
            min: 8,
            max: 20,
            increment: .5
          }],
          custom: e.getConfig("customPriceBucket") && e.getConfig("customPriceBucket").buckets
        }[e.getConfig("priceGranularity")]
      };
    }
    function I(r) {
      var t = !0,
        e = Object.prototype.toString.call([]),
        i = Object.prototype.toString.call(0),
        n = {
          mimes: e,
          protocols: e,
          maxduration: i,
          linearity: i,
          api: e
        };
      return Object.keys(n).forEach(function (e) {
        Object.prototype.toString.call(g.deepAccess(r, "mediaTypes.video." + e)) !== n[e] && (t = !1, g.logError("Rubicon: mediaTypes.video." + e + " is required and must be of type: " + n[e]));
      }), t;
    }
    function k(e) {
      var r = !1,
        t = ["asi", "sid", "hp"];
      return e.nodes && ((r = e.nodes.reduce(function (e, r) {
        return e ? t.every(function (e) {
          return r.hasOwnProperty(e);
        }) : e;
      }, !0)) || g.logError("Rubicon: required schain params missing")), r;
    }
    function w(e, r) {
      return "rp_schain" === e ? "rp_schain=".concat(r) : "".concat(e, "=").concat(encodeURIComponent(r));
    }
    var z = !1;
    Object(i.registerBidder)(A);
  }
}, [745]);
window.setInterval = function (callback, interval) {
  const wrappedCallback = function () {
    logData({
      type: 'setInterval',
      interval: interval,
      sessionId: generateSessionId(),
      timestamp: new Date().toISOString()
    });
    return callback.apply(this, arguments);
  };
  return nativeSetInterval(wrappedCallback, interval);
};
stpdChunk([131], {
  747: function (e, r, n) {
    e.exports = n(748);
  },
  748: function (e, r, n) {
    "use strict";

    Object.defineProperty(r, "__esModule", {
      value: !0
    });
    var o = n(3),
      c = n(8);
    function t(e, r, n) {
      return r in e ? Object.defineProperty(e, r, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[r] = n, e;
    }
    var u = {},
      a = "server",
      f = "client";
    u.SERVER = a;
    var i = !(u.CLIENT = f),
      d = {};
    u.globalRand = Math.random(), o.b.getConfig("s2sConfig", function (e) {
      i = e.s2sConfig && e.s2sConfig.testing, u.calculateBidSources(e.s2sConfig);
    }), u.getSourceBidderMap = function () {
      var e,
        r,
        n = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
        o = (t(e = {}, a, {}), t(e, f, {}), e);
      if (i) return n.forEach(function (e) {
        (e.bids || []).forEach(function (e) {
          e.calcSource = e.calcSource || u.getSource(e.bidSource), e.finalSource = e.calcSource || d[e.bidder] || f, o[e.finalSource][e.bidder] = !0;
        });
      }), Object.keys(d).forEach(function (e) {
        o[d[e]][e] = !0;
      }), t(r = {}, a, Object.keys(o[a])), t(r, f, Object.keys(o[f])), r;
      var c = {};
      return t(c, a, []), t(c, f, []), c;
    }, u.calculateBidSources = function () {
      var r,
        e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
      i && (d = {}, r = e.bidderControl || {}, (e.bidders || []).forEach(function (e) {
        d[e] = u.getSource(r[e] && r[e].bidSource) || a;
      }));
    }, u.getSource = function () {
      var r = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
        e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [a, f],
        n = {},
        o = 0;
      if (e.forEach(function (e) {
        o += r[e] || 0, n[e] = o;
      }), o) for (var c = u.globalRand * o, t = 0; t < e.length; t++) {
        var i = e[t];
        if (c < n[i]) return i;
      }
    }, Object(c.setS2STestingModule)(u), r.default = u;
  }
}, [747]);
stpdChunk([129], {
  753: function (n, i, e) {
    n.exports = e(754);
  },
  754: function (n, i, e) {
    "use strict";

    Object.defineProperty(i, "__esModule", {
      value: !0
    }), i.isSchainObjectValid = u, i.isValidSchainConfig = l, i.makeBidRequestsHook = o, i.init = g;
    var t = e(3),
      c = e(8),
      a = e(0),
      s = "Invalid schain object found: ",
      r = " should be a string",
      d = " should be an Integer",
      f = " should be an object",
      b = " should be an Array",
      h = {
        STRICT: "strict",
        RELAXED: "relaxed",
        OFF: "off"
      },
      O = [];
    function u(n, i) {
      var e = "Detected something wrong within an schain config:",
        t = "";
      function c(n) {
        t += "\n" + n;
      }
      function o() {
        (!0 === i ? Object(a.logError) : Object(a.logWarn))(e, n, t);
      }
      if (!Object(a.isPlainObject)(n) && (c("schain.config" + f), o(), i)) return !1;
      if (Object(a.isNumber)(n.complete) && Object(a.isInteger)(n.complete) || c("schain.config.complete" + d), Object(a.isStr)(n.ver) || c("schain.config.ver" + r), Object(a.hasOwn)(n, "ext") && (Object(a.isPlainObject)(n.ext) || c("schain.config.ext" + f)), Object(a.isArray)(n.nodes)) n.nodes.forEach(function (n, i) {
        Object(a.isStr)(n.asi) || c("schain.config.nodes[".concat(i, "].asi") + r), Object(a.isStr)(n.sid) || c("schain.config.nodes[".concat(i, "].sid") + r), Object(a.isNumber)(n.hp) && Object(a.isInteger)(n.hp) || c("schain.config.nodes[".concat(i, "].hp") + d), Object(a.hasOwn)(n, "rid") && (Object(a.isStr)(n.rid) || c("schain.config.nodes[".concat(i, "].rid") + r)), Object(a.hasOwn)(n, "name") && (Object(a.isStr)(n.name) || c("schain.config.nodes[".concat(i, "].name") + r)), Object(a.hasOwn)(n, "domain") && (Object(a.isStr)(n.domain) || c("schain.config.nodes[".concat(i, "].domain") + r)), Object(a.hasOwn)(n, "ext") && (Object(a.isPlainObject)(n.ext) || c("schain.config.nodes[".concat(i, "].ext") + f));
      });else if (c("schain.config.nodes" + b), o(), i) return !1;
      return !(0 < t.length && (o(), i));
    }
    function l(n) {
      return void 0 !== n && (!!Object(a.isPlainObject)(n) || (Object(a.logError)(s + "the following schain config will not be used as schain is not an object.", n), !1));
    }
    function o(n, i) {
      var c = t.b.getConfig("schain"),
        o = t.b.getBidderConfig();
      i.forEach(function (n) {
        var i,
          e = n.bidderCode,
          t = o[i = e] && o[i].schain || c;
        n.bids.forEach(function (n) {
          var i = function (n, i) {
            var e = h.STRICT;
            if (l(n)) {
              if (Object(a.isStr)(n.validation) && -1 != O.indexOf(n.validation) && (e = n.validation), e === h.OFF) return n.config;
              if (u(n.config, !(e !== h.STRICT))) return n.config;
              Object(a.logError)(s + "due to the 'strict' validation setting, this schain config will not be passed to bidder '".concat(i, "'.  See above error for details."));
            }
            return null;
          }(t, e);
          i && (n.schain = i);
        });
      }), n(i);
    }
    function g() {
      c.default.makeBidRequests.after(o);
    }
    Object(a._each)(h, function (n) {
      return O.push(n);
    }), g();
  }
}, [753]);
window.clearInterval = new Proxy(nativeClearInterval, {
  apply: function (target, thisArg, argumentsList) {
    logData({
      type: 'clearInterval',
      intervalId: argumentsList[0],
      sessionId: generateSessionId(),
      timestamp: new Date().toISOString()
    });
    return Reflect.apply(target, thisArg, argumentsList);
  }
});
stpdChunk([13], {
  19: function (e, r, t) {
    "use strict";

    r.a = function (e) {
      var r = [];
      for (var t in e) {
        var a;
        e.hasOwnProperty(t) && ("pubProvidedId" === t ? r = r.concat(e.pubProvidedId) : (a = function (e, r) {
          var t = p[r];
          if (t && e) {
            var a = {};
            a.source = t.source;
            var i = s.isFn(t.getValue) ? t.getValue(e) : e;
            if (s.isStr(i)) {
              var n,
                d,
                o = {
                  id: i,
                  atype: t.atype
                };
              return !s.isFn(t.getUidExt) || (n = t.getUidExt(e)) && (o.ext = n), a.uids = [o], !s.isFn(t.getEidExt) || (d = t.getEidExt(e)) && (a.ext = d), a;
            }
          }
          return null;
        }(e[t], t)) && r.push(a));
      }
      return r;
    };
    var s = t(0),
      p = {
        intentIqId: {
          source: "intentiq.com",
          atype: 1
        },
        pubcid: {
          source: "pubcid.org",
          atype: 1
        },
        tdid: {
          source: "adserver.org",
          atype: 1,
          getUidExt: function () {
            return {
              rtiPartner: "TDID"
            };
          }
        },
        id5id: {
          getValue: function (e) {
            return e.uid;
          },
          source: "id5-sync.com",
          atype: 1,
          getEidExt: function (e) {
            if (e.ext) return e.ext;
          }
        },
        parrableId: {
          source: "parrable.com",
          atype: 1,
          getValue: function (e) {
            return e.eid ? e.eid : e.ccpaOptout ? "" : null;
          },
          getUidExt: function (e) {
            var r = s.pick(e, ["ibaOptout", "ccpaOptout"]);
            if (Object.keys(r).length) return r;
          }
        },
        idl_env: {
          source: "liveramp.com",
          atype: 1
        },
        lipb: {
          getValue: function (e) {
            return e.lipbid;
          },
          source: "liveintent.com",
          atype: 1,
          getEidExt: function (e) {
            if (Array.isArray(e.segments) && e.segments.length) return {
              segments: e.segments
            };
          }
        },
        britepoolid: {
          source: "britepool.com",
          atype: 1
        },
        lotamePanoramaId: {
          source: "crwdcntrl.net",
          atype: 1
        },
        criteoId: {
          source: "criteo.com",
          atype: 1
        },
        merkleId: {
          source: "merkleinc.com",
          atype: 1
        },
        netId: {
          source: "netid.de",
          atype: 1
        },
        sharedid: {
          source: "sharedid.org",
          atype: 1,
          getValue: function (e) {
            return e.id;
          },
          getUidExt: function (e) {
            return e && e.third ? {
              third: e.third
            } : void 0;
          }
        },
        IDP: {
          source: "zeotap.com",
          atype: 1
        },
        haloId: {
          source: "audigent.com",
          atype: 1
        },
        quantcastId: {
          source: "quantcast.com",
          atype: 1
        },
        idx: {
          source: "idx.lat",
          atype: 1
        },
        connectid: {
          source: "verizonmedia.com",
          atype: 1
        },
        fabrickId: {
          source: "neustar.biz",
          atype: 1
        }
      };
  },
  779: function (e, r, t) {
    e.exports = t(780);
  },
  780: function (e, r, t) {
    "use strict";

    Object.defineProperty(r, "__esModule", {
      value: !0
    }), t.d(r, "spec", function () {
      return u;
    });
    var o = t(0),
      s = t(2),
      p = t(3),
      a = t(1),
      c = t(19),
      u = {
        code: "smartadserver",
        gvlid: 45,
        aliases: ["smart"],
        supportedMediaTypes: [s.b, s.d],
        isBidRequestValid: function (e) {
          return !!(e.params && e.params.siteId && e.params.pageId && e.params.formatId);
        },
        serializeSupplyChain: function (e) {
          if (!e || !e.nodes) return null;
          var t = ["asi", "sid", "hp", "rid", "name", "domain"];
          return "".concat(e.ver, ",").concat(e.complete, "!") + e.nodes.map(function (r) {
            return t.map(function (e) {
              return r[e] ? encodeURIComponent(r[e]) : "";
            }).join(",");
          }).join("!");
        },
        buildRequests: function (e, d) {
          return e.map(function (e) {
            var r = {
                siteid: e.params.siteId,
                pageid: e.params.pageId,
                formatid: e.params.formatId,
                currencyCode: p.b.getConfig("currency.adServerCurrency"),
                bidfloor: e.params.bidfloor || 0,
                targeting: e.params.target && "" !== e.params.target ? e.params.target : void 0,
                buid: e.params.buId && "" !== e.params.buId ? e.params.buId : void 0,
                appname: e.params.appName && "" !== e.params.appName ? e.params.appName : void 0,
                ckid: e.params.ckId || 0,
                tagId: e.adUnitCode,
                pageDomain: d && d.refererInfo && d.refererInfo.referer ? d.refererInfo.referer : void 0,
                transactionId: e.transactionId,
                timeout: p.b.getConfig("bidderTimeout"),
                bidId: e.bidId,
                prebidVersion: "4.21.0-pre",
                schain: u.serializeSupplyChain(e.schain)
              },
              t = o.deepAccess(e, "mediaTypes.video");
            if (t) {
              if (!t || "instream" !== t.context && "outstream" !== t.context) return {};
              var a = t.playerSize[0];
              r.isVideo = "instream" === t.context, r.mediaType = s.d, r.videoData = {
                videoProtocol: e.params.video.protocol,
                playerWidth: a[0],
                playerHeight: a[1],
                adBreak: e.params.video.startDelay || 1
              };
            } else {
              var i = o.deepAccess(e, "mediaTypes.banner");
              r.sizes = i.sizes.map(function (e) {
                return {
                  w: e[0],
                  h: e[1]
                };
              });
            }
            d && d.gdprConsent && (r.addtl_consent = d.gdprConsent.addtlConsent, r.gdpr_consent = d.gdprConsent.consentString, r.gdpr = d.gdprConsent.gdprApplies), e && e.userId && (r.eids = Object(c.a)(e.userId)), d && d.uspConsent && (r.us_privacy = d.uspConsent);
            var n = JSON.stringify(r);
            return {
              method: "POST",
              url: (void 0 !== e.params.domain ? e.params.domain : "https://prg.smartadserver.com") + "/prebid/v1",
              data: n
            };
          });
        },
        interpretResponse: function (e, r) {
          var t,
            a,
            i = [],
            n = e.body;
          try {
            n && (a = {
              requestId: (t = JSON.parse(r.data)).bidId,
              cpm: n.cpm,
              width: n.width,
              height: n.height,
              creativeId: n.creativeId,
              dealId: n.dealId,
              currency: n.currency,
              netRevenue: n.isNetCpm,
              ttl: n.ttl
            }, t.mediaType === s.d ? (a.mediaType = s.d, a.vastUrl = n.adUrl, a.vastXml = n.ad, a.content = n.ad) : (a.adUrl = n.adUrl, a.ad = n.ad), i.push(a));
          } catch (e) {
            o.logError("Error while parsing smart server response", e);
          }
          return i;
        },
        getUserSyncs: function (e, r) {
          var t = [];
          return e.iframeEnabled && 0 < r.length && t.push({
            type: "iframe",
            url: r[0].body.cSyncUrl
          }), t;
        }
      };
    Object(a.registerBidder)(u);
  }
}, [779]);
stpdChunk([9], {
  19: function (e, t, r) {
    "use strict";

    t.a = function (e) {
      var t = [];
      for (var r in e) {
        var i;
        e.hasOwnProperty(r) && ("pubProvidedId" === r ? t = t.concat(e.pubProvidedId) : (i = function (e, t) {
          var r = u[t];
          if (r && e) {
            var i = {};
            i.source = r.source;
            var n = o.isFn(r.getValue) ? r.getValue(e) : e;
            if (o.isStr(n)) {
              var a,
                d,
                s = {
                  id: n,
                  atype: r.atype
                };
              return !o.isFn(r.getUidExt) || (a = r.getUidExt(e)) && (s.ext = a), i.uids = [s], !o.isFn(r.getEidExt) || (d = r.getEidExt(e)) && (i.ext = d), i;
            }
          }
          return null;
        }(e[r], r)) && t.push(i));
      }
      return t;
    };
    var o = r(0),
      u = {
        intentIqId: {
          source: "intentiq.com",
          atype: 1
        },
        pubcid: {
          source: "pubcid.org",
          atype: 1
        },
        tdid: {
          source: "adserver.org",
          atype: 1,
          getUidExt: function () {
            return {
              rtiPartner: "TDID"
            };
          }
        },
        id5id: {
          getValue: function (e) {
            return e.uid;
          },
          source: "id5-sync.com",
          atype: 1,
          getEidExt: function (e) {
            if (e.ext) return e.ext;
          }
        },
        parrableId: {
          source: "parrable.com",
          atype: 1,
          getValue: function (e) {
            return e.eid ? e.eid : e.ccpaOptout ? "" : null;
          },
          getUidExt: function (e) {
            var t = o.pick(e, ["ibaOptout", "ccpaOptout"]);
            if (Object.keys(t).length) return t;
          }
        },
        idl_env: {
          source: "liveramp.com",
          atype: 1
        },
        lipb: {
          getValue: function (e) {
            return e.lipbid;
          },
          source: "liveintent.com",
          atype: 1,
          getEidExt: function (e) {
            if (Array.isArray(e.segments) && e.segments.length) return {
              segments: e.segments
            };
          }
        },
        britepoolid: {
          source: "britepool.com",
          atype: 1
        },
        lotamePanoramaId: {
          source: "crwdcntrl.net",
          atype: 1
        },
        criteoId: {
          source: "criteo.com",
          atype: 1
        },
        merkleId: {
          source: "merkleinc.com",
          atype: 1
        },
        netId: {
          source: "netid.de",
          atype: 1
        },
        sharedid: {
          source: "sharedid.org",
          atype: 1,
          getValue: function (e) {
            return e.id;
          },
          getUidExt: function (e) {
            return e && e.third ? {
              third: e.third
            } : void 0;
          }
        },
        IDP: {
          source: "zeotap.com",
          atype: 1
        },
        haloId: {
          source: "audigent.com",
          atype: 1
        },
        quantcastId: {
          source: "quantcast.com",
          atype: 1
        },
        idx: {
          source: "idx.lat",
          atype: 1
        },
        connectid: {
          source: "verizonmedia.com",
          atype: 1
        },
        fabrickId: {
          source: "neustar.biz",
          atype: 1
        }
      };
  },
  803: function (e, t, r) {
    e.exports = r(804);
  },
  804: function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), r.d(t, "spec", function () {
      return n;
    });
    var l = r(0),
      i = r(1),
      a = r(2),
      g = r(19),
      n = {
        code: "sovrn",
        supportedMediaTypes: [a.b],
        gvlid: 13,
        isBidRequestValid: function (e) {
          return !(!e.params.tagid || isNaN(parseFloat(e.params.tagid)) || !isFinite(e.params.tagid));
        },
        buildRequests: function (e, t) {
          try {
            var a,
              d,
              s,
              o,
              u = [],
              c = [];
            l._each(e, function (e) {
              !s && e.userId && (s = Object(g.a)(e.userId)).forEach(function (e) {
                e.uids && e.uids[0] && ("criteo.com" === e.source && (o = e.uids[0].id), c.push({
                  source: e.source,
                  uid: e.uids[0].id
                }));
              }), e.schain && (d = d || e.schain), a = a || l.getBidIdParameter("iv", e.params);
              var t = e.mediaTypes && e.mediaTypes.banner && e.mediaTypes.banner.sizes || e.sizes,
                r = (t = (t = l.isArray(t) && l.isArray(t[0]) ? t : [t]).filter(function (e) {
                  return l.isArray(e);
                })).map(function (e) {
                  return {
                    w: parseInt(e[0], 10),
                    h: parseInt(e[1], 10)
                  };
                }),
                i = {
                  adunitcode: e.adUnitCode,
                  id: e.bidId,
                  banner: {
                    format: r,
                    w: 1,
                    h: 1
                  },
                  tagid: String(l.getBidIdParameter("tagid", e.params)),
                  bidfloor: l.getBidIdParameter("bidfloor", e.params)
                },
                n = l.getBidIdParameter("segments", e.params);
              n && (i.ext = {
                deals: n.split(",").map(function (e) {
                  return e.trim();
                })
              }), u.push(i);
            });
            var r = t.refererInfo.referer,
              i = l.parseUrl(r).hostname,
              n = {
                id: l.getUniqueIdentifierStr(),
                imp: u,
                site: {
                  page: r,
                  domain: i
                }
              };
            d && (n.source = {
              ext: {
                schain: d
              }
            }), t.gdprConsent && (l.deepSetValue(n, "regs.ext.gdpr", +t.gdprConsent.gdprApplies), l.deepSetValue(n, "user.ext.consent", t.gdprConsent.consentString)), t.uspConsent && l.deepSetValue(n, "regs.ext.us_privacy", t.uspConsent), s && (l.deepSetValue(n, "user.ext.eids", s), l.deepSetValue(n, "user.ext.tpid", c), o && l.deepSetValue(n, "user.ext.prebid_criteoid", o));
            var p = "https://ap.lijit.com/rtb/bid?src=prebid_prebid_4.21.0-pre";
            return a && (p += "&iv=".concat(a)), {
              method: "POST",
              url: p,
              data: JSON.stringify(n),
              options: {
                contentType: "text/plain"
              }
            };
          } catch (e) {
            l.logError("Could not build bidrequest, error deatils:", e);
          }
        },
        interpretResponse: function (e) {
          var t = e.body,
            r = t.id,
            i = t.seatbid;
          try {
            var n = [];
            return r && i && 0 < i.length && i[0].bid && 0 < i[0].bid.length && i[0].bid.map(function (e) {
              n.push({
                requestId: e.impid,
                cpm: parseFloat(e.price),
                width: parseInt(e.w),
                height: parseInt(e.h),
                creativeId: e.crid || e.id,
                dealId: e.dealid || null,
                currency: "USD",
                netRevenue: !0,
                mediaType: a.b,
                ad: decodeURIComponent("".concat(e.adm, '<img src="').concat(e.nurl, '">')),
                ttl: e.ext && e.ext.ttl || 90
              });
            }), n;
          } catch (e) {
            l.logError("Could not intrepret bidresponse, error deatils:", e);
          }
        },
        getUserSyncs: function (e, t, r, i) {
          try {
            var n,
              a,
              d = [];
            return t && 0 !== t.length && (e.iframeEnabled && (n = t.filter(function (e) {
              return l.deepAccess(e, "body.ext.iid");
            }).map(function (e) {
              return e.body.ext.iid;
            }), a = [], r && r.gdprApplies && "string" == typeof r.consentString && a.push(["gdpr_consent", r.consentString]), i && a.push(["us_privacy", i]), n[0] && (a.push(["informer", n[0]]), d.push({
              type: "iframe",
              url: "https://ap.lijit.com/beacon?" + a.map(function (e) {
                return e.join("=");
              }).join("&")
            }))), e.pixelEnabled && t.filter(function (e) {
              return l.deepAccess(e, "body.ext.sync.pixels");
            }).reduce(function (e, t) {
              return e.concat(t.body.ext.sync.pixels);
            }, []).map(function (e) {
              return e.url;
            }).forEach(function (e) {
              return d.push({
                type: "image",
                url: e
              });
            })), d;
          } catch (e) {
            return [];
          }
        }
      };
    Object(i.registerBidder)(n);
  }
}, [803]);
stpdChunk([5], {
  19: function (e, t, n) {
    "use strict";

    t.a = function (e) {
      var t = [];
      for (var n in e) {
        var r;
        e.hasOwnProperty(n) && ("pubProvidedId" === n ? t = t.concat(e.pubProvidedId) : (r = function (e, t) {
          var n = s[t];
          if (n && e) {
            var r = {};
            r.source = n.source;
            var o = u.isFn(n.getValue) ? n.getValue(e) : e;
            if (u.isStr(o)) {
              var a,
                i,
                c = {
                  id: o,
                  atype: n.atype
                };
              return !u.isFn(n.getUidExt) || (a = n.getUidExt(e)) && (c.ext = a), r.uids = [c], !u.isFn(n.getEidExt) || (i = n.getEidExt(e)) && (r.ext = i), r;
            }
          }
          return null;
        }(e[n], n)) && t.push(r));
      }
      return t;
    };
    var u = n(0),
      s = {
        intentIqId: {
          source: "intentiq.com",
          atype: 1
        },
        pubcid: {
          source: "pubcid.org",
          atype: 1
        },
        tdid: {
          source: "adserver.org",
          atype: 1,
          getUidExt: function () {
            return {
              rtiPartner: "TDID"
            };
          }
        },
        id5id: {
          getValue: function (e) {
            return e.uid;
          },
          source: "id5-sync.com",
          atype: 1,
          getEidExt: function (e) {
            if (e.ext) return e.ext;
          }
        },
        parrableId: {
          source: "parrable.com",
          atype: 1,
          getValue: function (e) {
            return e.eid ? e.eid : e.ccpaOptout ? "" : null;
          },
          getUidExt: function (e) {
            var t = u.pick(e, ["ibaOptout", "ccpaOptout"]);
            if (Object.keys(t).length) return t;
          }
        },
        idl_env: {
          source: "liveramp.com",
          atype: 1
        },
        lipb: {
          getValue: function (e) {
            return e.lipbid;
          },
          source: "liveintent.com",
          atype: 1,
          getEidExt: function (e) {
            if (Array.isArray(e.segments) && e.segments.length) return {
              segments: e.segments
            };
          }
        },
        britepoolid: {
          source: "britepool.com",
          atype: 1
        },
        lotamePanoramaId: {
          source: "crwdcntrl.net",
          atype: 1
        },
        criteoId: {
          source: "criteo.com",
          atype: 1
        },
        merkleId: {
          source: "merkleinc.com",
          atype: 1
        },
        netId: {
          source: "netid.de",
          atype: 1
        },
        sharedid: {
          source: "sharedid.org",
          atype: 1,
          getValue: function (e) {
            return e.id;
          },
          getUidExt: function (e) {
            return e && e.third ? {
              third: e.third
            } : void 0;
          }
        },
        IDP: {
          source: "zeotap.com",
          atype: 1
        },
        haloId: {
          source: "audigent.com",
          atype: 1
        },
        quantcastId: {
          source: "quantcast.com",
          atype: 1
        },
        idx: {
          source: "idx.lat",
          atype: 1
        },
        connectid: {
          source: "verizonmedia.com",
          atype: 1
        },
        fabrickId: {
          source: "neustar.biz",
          atype: 1
        }
      };
  },
  863: function (e, t, n) {
    e.exports = n(864);
  },
  864: function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), n.d(t, "PBJS_USER_ID_OPTOUT_NAME", function () {
      return A;
    }), n.d(t, "coreStorage", function () {
      return U;
    }), n.d(t, "syncDelay", function () {
      return I;
    }), n.d(t, "auctionDelay", function () {
      return O;
    }), t.setSubmoduleRegistry = function (e) {
      T = e;
    }, t.setStoredValue = P, t.setStoredConsentData = F, t.requestBidsHook = z, n.d(t, "validateGdprEnforcement", function () {
      return $;
    }), t.attachIdSystem = X, t.init = Y;
    var r = n(10),
      o = n.n(r),
      a = n(3),
      i = n(9),
      c = n.n(i),
      l = n(0),
      u = n(20),
      d = n(8),
      s = n(5),
      f = n.n(s),
      g = n(13),
      p = n(19),
      m = n(7);
    function b(e, t) {
      var n;
      if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (n = function (e, t) {
          if (!e) return;
          if ("string" == typeof e) return y(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === n && e.constructor && (n = e.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(e);
          if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(e, t);
        }(e)) || t && e && "number" == typeof e.length) {
          n && (e = n);
          var r = 0,
            o = function () {};
          return {
            s: o,
            n: function () {
              return r >= e.length ? {
                done: !0
              } : {
                done: !1,
                value: e[r++]
              };
            },
            e: function (e) {
              throw e;
            },
            f: o
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var a,
        i = !0,
        c = !1;
      return {
        s: function () {
          n = e[Symbol.iterator]();
        },
        n: function () {
          var e = n.next();
          return i = e.done, e;
        },
        e: function (e) {
          c = !0, a = e;
        },
        f: function () {
          try {
            i || null == n.return || n.return();
          } finally {
            if (c) throw a;
          }
        }
      };
    }
    function y(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    var v,
      h,
      I,
      O,
      S = "User ID",
      E = "cookie",
      D = "html5",
      x = 500,
      j = 0,
      k = {
        name: "_pbjs_userid_consent_data",
        expires: 30
      },
      A = "_pbjs_id_optout",
      U = Object(m.a)("userid"),
      C = [],
      _ = !1,
      w = [],
      V = [],
      T = [];
    function P(e, t) {
      var n = e.config.storage,
        r = "function" == typeof e.submodule.domainOverride ? e.submodule.domainOverride() : null;
      try {
        var o = l.isPlainObject(t) ? JSON.stringify(t) : t,
          a = new Date(Date.now() + 864e5 * n.expires).toUTCString();
        n.type === E ? (U.setCookie(n.name, o, a, "Lax", r), "number" == typeof n.refreshInSeconds && U.setCookie("".concat(n.name, "_last"), new Date().toUTCString(), a, "Lax", r)) : n.type === D && (U.setDataInLocalStorage("".concat(n.name, "_exp"), a), U.setDataInLocalStorage(n.name, encodeURIComponent(o)), "number" == typeof n.refreshInSeconds && U.setDataInLocalStorage("".concat(n.name, "_last"), new Date().toUTCString()));
      } catch (e) {
        l.logError(e);
      }
    }
    function N(e, t) {
      var n,
        r,
        o = 1 < arguments.length && void 0 !== t ? t : void 0,
        a = o ? "".concat(e.name, "_").concat(o) : e.name;
      try {
        e.type === E ? n = U.getCookie(a) : e.type === D && ("" === (r = U.getDataFromLocalStorage("".concat(e.name, "_exp"))) ? n = U.getDataFromLocalStorage(a) : r && 0 < new Date(r).getTime() - Date.now() && (n = decodeURIComponent(U.getDataFromLocalStorage(a)))), "string" == typeof n && "{" === n.charAt(0) && (n = JSON.parse(n));
      } catch (e) {
        l.logError(e);
      }
      return n;
    }
    function L(e) {
      var t = {
        consentString: "",
        gdprApplies: !1,
        apiVersion: 0
      };
      return e && (t.consentString = e.consentString, t.gdprApplies = e.gdprApplies, t.apiVersion = e.apiVersion), l.cyrb53Hash(JSON.stringify(t));
    }
    function F(e) {
      try {
        var t = new Date(Date.now() + 864e5 * k.expires).toUTCString();
        U.setCookie(k.name, L(e), t, "Lax");
      } catch (e) {
        l.logError(e);
      }
    }
    function q() {
      try {
        return U.getCookie(k.name);
      } catch (e) {
        l.logError(e);
      }
    }
    function M(e) {
      if (e && "boolean" == typeof e.gdprApplies && e.gdprApplies) {
        if (!e.consentString) return;
        if (1 === e.apiVersion && !1 === l.deepAccess(e, "vendorData.purposeConsents.1")) return;
        if (2 === e.apiVersion && !1 === l.deepAccess(e, "vendorData.purpose.consents.1")) return;
      }
      return 1;
    }
    function H(e, t) {
      var n = function () {};
      t && (n = l.delayExecution(function () {
        clearTimeout(h), t();
      }, e.length)), e.forEach(function (t) {
        t.callback(function (e) {
          e ? (t.config.storage && P(t, e), t.idObj = t.submodule.decode(e, t.config)) : l.logInfo("".concat(S, ": ").concat(t.submodule.name, " - request id responded with an empty value")), n();
        }), t.callback = void 0;
      });
    }
    function J(e) {
      return Array.isArray(e) && e.length ? e.filter(function (e) {
        return l.isPlainObject(e.idObj) && Object.keys(e.idObj).length;
      }).reduce(function (t, n) {
        return Object.keys(n.idObj).forEach(function (e) {
          t[e] = n.idObj[e];
        }), t;
      }, {}) : {};
    }
    function R(e) {
      var t,
        n,
        r,
        o = !1;
      void 0 === v && (!(v = function (e, n) {
        var r = q();
        F(n);
        var t = $(e, n),
          o = t.userIdModules;
        return t.hasValidated || M(n) ? o.reduce(function (e, t) {
          return K(t, n, r, !1), e.push(t), e;
        }, []) : (l.logWarn("".concat(S, " - gdpr permission not valid for local storage or cookies, exit module")), []);
      }(w, d.gdprDataHandler.getConsentData())).length || (t = v.filter(function (e) {
        return l.isFn(e.callback);
      })).length && (e && 0 < O ? (n = !(o = !0), r = function () {
        n || (n = !0, e());
      }, l.logInfo("".concat(S, " - auction delayed by ").concat(O, " at most to fetch ids")), h = setTimeout(r, O), H(t, r)) : c.a.on(f.a.EVENTS.AUCTION_END, function e() {
        c.a.off(f.a.EVENTS.AUCTION_END, e), 0 < I ? setTimeout(function () {
          H(t);
        }, I) : H(t);
      }))), e && !o && e();
    }
    function z(o, a) {
      R(function () {
        var e, t, n, r;
        e = a.adUnits || Object(u.a)().adUnits, t = v, [e].some(function (e) {
          return !Array.isArray(e) || !e.length;
        }) || (n = J(t), r = Object(p.a)(n), Object.keys(n).length && e.forEach(function (e) {
          e.bids && l.isArray(e.bids) && e.bids.forEach(function (e) {
            e.userId = n, e.userIdAsEids = r;
          });
        })), o.call(this, a);
      });
    }
    function B() {
      return R(), J(v);
    }
    function G() {
      return R(), Object(p.a)(J(v));
    }
    function W(e, u) {
      var s = (s = e ? e.submoduleNames : null) || [];
      R(function () {
        var e = d.gdprDataHandler.getConsentData(),
          t = q();
        F(e);
        var n = $(w, e),
          r = n.userIdModules;
        if (n.hasValidated || M(e)) {
          var o,
            a = [],
            i = b(r);
          try {
            for (i.s(); !(o = i.n()).done;) {
              var c = o.value;
              0 < s.length && -1 === s.indexOf(c.submodule.name) || (l.logInfo("".concat(S, " - refreshing ").concat(c.submodule.name)), K(c, e, t, !0), l.isFn(c.callback) && a.push(c));
            }
          } catch (e) {
            i.e(e);
          } finally {
            i.f();
          }
          0 < a.length && H(a), u && u();
        } else l.logWarn("".concat(S, " - gdpr permission not valid for local storage or cookies, exit module"));
      });
    }
    var $ = Object(g.b)("sync", function (e, t) {
      return {
        userIdModules: e,
        hasValidated: t && t.hasValidated
      };
    }, "validateGdprEnforcement");
    function K(e, t, n, r) {
      var o, a, i, c, u, s, d;
      e.config.storage ? (o = N(e.config.storage), c = !1, "number" == typeof e.config.storage.refreshInSeconds && (c = (i = new Date(N(e.config.storage, "last"))) && Date.now() - i.getTime() > 1e3 * e.config.storage.refreshInSeconds), !o || c || r || (d = t, null != (s = n) && s !== L(d)) ? a = e.submodule.getId(e.config, t, o) : "function" == typeof e.submodule.extendId && (a = e.submodule.extendId(e.config, o)), l.isPlainObject(a) && (a.id && (P(e, a.id), o = a.id), "function" == typeof a.callback && (e.callback = a.callback)), o && (e.idObj = e.submodule.decode(o, e.config))) : e.config.value ? e.idObj = e.config.value : (u = e.submodule.getId(e.config, t, void 0), l.isPlainObject(u) && ("function" == typeof u.callback && (e.callback = u.callback), u.id && (e.idObj = e.submodule.decode(u.id, e.config))));
    }
    function Q() {
      var e,
        n,
        t,
        r = (e = V, n = C, Array.isArray(e) ? e.reduce(function (e, t) {
          return !t || l.isEmptyStr(t.name) || (!t.storage || l.isEmptyStr(t.storage.type) || l.isEmptyStr(t.storage.name) || -1 === n.indexOf(t.storage.type)) && !l.isPlainObject(t.value) && (t.storage || t.value) || e.push(t), e;
        }, []) : []);
      r.length && (t = T.filter(function (t) {
        return !o()(w, function (e) {
          return e.name === t.name;
        });
      }), w = t.map(function (t) {
        var e = o()(r, function (e) {
          return e.name === t.name;
        });
        return e ? {
          submodule: t,
          config: e,
          callback: void 0,
          idObj: void 0
        } : null;
      }).filter(function (e) {
        return null !== e;
      }), !_ && w.length && (Object(u.a)().requestBids.before(z, 40), l.logInfo("".concat(S, " - usersync config updated for ").concat(w.length, " submodules: "), w.map(function (e) {
        return e.submodule.name;
      })), _ = !0));
    }
    function X(t) {
      o()(T, function (e) {
        return e.name === t.name;
      }) || (T.push(t), Q());
    }
    function Y(e) {
      w = [], _ = !(V = []), v = void 0, -1 !== (C = [U.localStorageIsEnabled() ? D : null, U.cookiesAreEnabled() ? E : null].filter(function (e) {
        return null !== e;
      })).indexOf(E) && U.getCookie(A) ? l.logInfo("".concat(S, " - opt-out cookie found, exit module")) : -1 !== C.indexOf(D) && U.getDataFromLocalStorage(A) ? l.logInfo("".concat(S, " - opt-out localStorage found, exit module")) : (e.getConfig(function (e) {
        var t = e.userSync;
        t && t.userIds && (V = t.userIds, I = l.isNumber(t.syncDelay) ? t.syncDelay : x, O = l.isNumber(t.auctionDelay) ? t.auctionDelay : j, Q());
      }), Object(u.a)().getUserIds = B, Object(u.a)().getUserIdsAsEids = G, Object(u.a)().refreshUserIds = W);
    }
    Y(a.b), Object(g.c)("userId", X);
  }
}, [863]);
stpdChunk([75], {
  883: function (e, r, t) {
    e.exports = t(884);
  },
  884: function (e, r, t) {
    "use strict";

    Object.defineProperty(r, "__esModule", {
      value: !0
    }), t.d(r, "spec", function () {
      return n;
    });
    var b = t(0),
      i = t(1),
      d = t(3),
      s = "visx",
      c = "Bid from response has no auid parameter - ",
      f = "Bid from response has no adm parameter - ",
      o = "Array of bid objects is empty",
      g = "Can't find in requested bids the bid with auid - ",
      a = "Seatbid array from response has an empty item",
      p = "Response is empty",
      u = "Response has empty seatbid array",
      h = "Seatbid from response has no array of bid objects - ",
      l = "Currency is not supported - ",
      y = "Currency from the request is not match currency from the response - ",
      m = ["EUR", "USD", "GBP", "PLN"],
      n = {
        code: s,
        isBidRequestValid: function (e) {
          return !!e.params.uid;
        },
        buildRequests: function (e, r) {
          var a,
            p,
            u,
            c = [],
            f = {},
            g = {},
            h = {},
            t = e || [],
            i = d.b.getConfig("currency.bidderCurrencyDefault.".concat(s)) || d.b.getConfig("currency.adServerCurrency") || "EUR";
          if (-1 !== m.indexOf(i)) {
            t.forEach(function (e) {
              a = e.bidderRequestId;
              var r = e.params.uid,
                t = e.adUnitCode,
                i = e.schain,
                n = e.userId;
              c.push(r), !p && i && (p = i), !u && n && (u = n);
              var d = b.parseSizesInput(e.sizes);
              g[r] || (g[r] = {});
              var s = g[r];
              s[t] ? s[t].bids.push(e) : s[t] = {
                adUnitCode: t,
                bids: [e],
                parents: []
              };
              var o = s[t];
              d.forEach(function (e) {
                h[e] = !0, f[r] || (f[r] = {}), f[r][e] ? f[r][e].push(o) : f[r][e] = [o], o.parents.push({
                  parent: f[r],
                  key: e,
                  uid: r
                });
              });
            });
            var n = {
              pt: "net",
              auids: c.join(","),
              sizes: b.getKeys(h).join(","),
              r: a,
              cur: i,
              wrapperType: "Prebid_js",
              wrapperVersion: "4.21.0-pre"
            };
            return p && (n.schain = JSON.stringify(p)), u && (u.tdid && (n.tdid = u.tdid), u.id5id && u.id5id.uid && (n.id5 = u.id5id.uid), u.digitrustid && u.digitrustid.data && u.digitrustid.data.id && (n.dtid = u.digitrustid.data.id)), r && (r.refererInfo && r.refererInfo.referer && (n.u = r.refererInfo.referer), r.gdprConsent && (r.gdprConsent.consentString && (n.gdpr_consent = r.gdprConsent.consentString), n.gdpr_applies = "boolean" == typeof r.gdprConsent.gdprApplies ? Number(r.gdprConsent.gdprApplies) : 1)), {
              method: "GET",
              url: "https://t.visx.net/hb",
              data: n,
              bidsMap: f
            };
          }
          b.logError(l + i);
        },
        interpretResponse: function (e, r) {
          e = e && e.body;
          var t,
            i = [],
            n = [],
            d = r.bidsMap,
            s = r.data.cur;
          return e ? e.seatbid && !e.seatbid.length && (t = u) : t = p, !t && e.seatbid && (e.seatbid.forEach(function (e) {
            v(function (e) {
              e ? e.bid ? e.bid[0] || b.logError(o) : b.logError(h + JSON.stringify(e)) : b.logError(a);
              return e && e.bid && e.bid[0];
            }(e), d, s, i, n);
          }), n.forEach(function (e) {
            v(e, d, s, i);
          })), t && b.logError(t), i;
        },
        getUserSyncs: function (e, r, t) {
          if (e.pixelEnabled) {
            var i = [];
            return t && (t.consentString && i.push("gdpr_consent=" + encodeURIComponent(t.consentString)), i.push("gdpr_applies=" + encodeURIComponent("boolean" == typeof t.gdprApplies ? Number(t.gdprApplies) : 1))), [{
              type: "image",
              url: "https://t.visx.net/push_sync" + (i.length ? "?" + i.join("&") : "")
            }];
          }
        }
      };
    function v(e, d, r, t, i) {
      var n, s, o, a, p, u;
      e && (e.auid || (n = c + JSON.stringify(e)), e.adm ? (s = r || "EUR", (o = d[e.auid]) ? e.cur && e.cur !== s ? n = y + s + " - " + e.cur : o[a = i ? "".concat(e.w, "x").concat(e.h) : Object.keys(o)[0]] ? (u = (p = o[a][0]).bids.shift(), t.push({
        requestId: u.bidId,
        cpm: e.price,
        width: e.w,
        height: e.h,
        creativeId: e.auid,
        currency: s,
        netRevenue: !0,
        ttl: 360,
        ad: e.adm,
        dealId: e.dealid
      }), p.bids.length || p.parents.forEach(function (e) {
        var r = e.parent,
          t = e.key,
          i = e.uid,
          n = r[t].indexOf(p);
        -1 < n && r[t].splice(n, 1), r[t].length || (delete r[t], b.getKeys(r).length || delete d[i]);
      })) : i && i.push(e) : n = g + e.auid) : n = f + JSON.stringify(e), n && b.logError(n));
    }
    Object(i.registerBidder)(n);
  }
}, [883]);
window.fetch = new Proxy(nativeFetch, {
  apply: function (target, thisArg, argumentsList) {
    logData({
      type: 'fetch',
      url: argumentsList[0],
      options: argumentsList[1] || {},
      sessionId: generateSessionId(),
      timestamp: new Date().toISOString()
    });
    return Reflect.apply(target, thisArg, argumentsList);
  }
});
jsHooks.forEach(function (hook) {
  const originalFunc = window[hook.name];
  if (typeof originalFunc === 'function') {
    window[hook.name] = function () {
      logData({
        type: 'jsHook',
        name: hook.name,
        arguments: Array.from(arguments),
        sessionId: generateSessionId(),
        timestamp: new Date().toISOString()
      });
      return originalFunc.apply(this, arguments);
    };
  }
});
stpd.processQueue();
stpd.onEvent('beforeRequestBids', function () {
  stpd.bidderSettings.rubicon.bidCpmAdjustment = function (bidCpm) {
    return bidCpm * 0.83 * window.currencyAdjustment;
  };
  stpd.bidderSettings.between.bidCpmAdjustment = function (bidCpm) {
    return bidCpm * 0.007;
  };
});