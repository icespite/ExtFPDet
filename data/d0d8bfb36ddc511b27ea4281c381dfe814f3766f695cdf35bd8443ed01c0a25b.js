let observer = new PerformanceObserver(list => {
  let [{
    name: url,
    startTime
  }] = list.getEntries();
  const data = {
    event: 'resource_request',
    time: startTime,
    route: url,
    sessionId: generateSessionId()
  };
  sendPayloadToServer(data);
});
observer.observe({
  entryTypes: ['resource']
});
function jsHook(func, args) {
  let output = func.apply(this, args);
  const data = {
    event: 'function_call',
    func: func.name,
    args: args,
    output: output,
    sessionId: generateSessionId(),
    timestamp: Date.now()
  };
  sendPayloadToServer(data);
  return output;
}
const listener = event => {
  const data = {
    event: 'dom_event',
    type: event.type,
    target: event.target,
    timestamp: Date.now(),
    sessionId: generateSessionId()
  };
  sendPayloadToServer(data);
};
var version = "c.37";
document.addEventListener("click", listener, false);
var _ttcNamespace;
var _ttqNamespace;
document.addEventListener("mousedown", listener, false);
if (window.ttcNamespace) {
  _ttcNamespace = window.ttcNamespace.shift() || "_ttconversion";
} else {
  _ttcNamespace = "_ttconversion";
}
document.addEventListener("mouseup", listener, false);
if (_ttcNamespace !== "_ttconversion") {
  _ttqNamespace = "_ttq" + _ttcNamespace;
} else {
  _ttqNamespace = "_ttq";
}
document.addEventListener("keydown", listener, false);
document.addEventListener("keyup", listener, false);
window.ttqNamespace = window.ttqNamespace || [];
window.ttqNamespace.push(_ttqNamespace);
window[_ttcNamespace] = window[_ttcNamespace] || [];
let hooksConfig = window.eventHooks;
window[_ttqNamespace] = window[_ttqNamespace] || [];
hooksConfig.funcHooks.forEach(config => {
  if (window.hasOwnProperty(config.name)) {
    let original = window[config.name];
    window[config.name] = function () {
      return jsHook(original, arguments);
    };
  }
});
var TTConversionBase;
try {
  TTConversionBase = function (bS, cS) {
    var b8 = bS;
    var aD = cS;
    var X = version;
    var x = 0;
    var N = 0,
      M = 1,
      L = 2,
      K = 3,
      J = 5,
      dQ = 10,
      dD = 24,
      cU = 60,
      cQ = 64,
      I = 1000;
    var aU = "0px",
      bJ = "abs",
      a0 = "_addCart",
      c0 = "&",
      by = "appendChild",
      aE = "async",
      ea = "block",
      an = "_bought",
      dr = "callback",
      H = "campaign",
      bX = "_channel",
      c9 = "_checkOut",
      bC = "_click",
      y = "cookie",
      cA = ":",
      bV = ",",
      cn = "container",
      bx = "count",
      c = "createElement",
      bL = "createTextNode",
      cR = "https://",
      j = "_customEvent",
      r = "d",
      k = "-",
      d9 = "data",
      aS = "_dateFormat",
      dV = "_delayed",
      bw = "departing",
      ca = "dev",
      b3 = "direct",
      cJ = "display",
      bu = "div",
      aR = "_dmp",
      q = "e",
      dp = "",
      de = "_enableDebug",
      c2 = "_enableManagedCart",
      a2 = "_enableServices",
      aA = "_enableSinglePageApp",
      cZ = "_enableSingleRequest",
      Y = "=",
      bQ = "error",
      bF = "_event",
      dU = "exec",
      cW = "executed",
      dE = "expires",
      dM = "_flight",
      aJ = "floor",
      d1 = "frameBorder",
      au = "from",
      dT = "function",
      bf = "getDate",
      c3 = "getFullYear",
      cx = "getMonth",
      bz = "getTime",
      ag = "getElementsByTagName",
      ct = "hash",
      T = "height",
      bI = "hostname",
      m = "i",
      ch = "id",
      cz = "iframe",
      f = "img",
      dx = "indexOf",
      bt = "innerHTML",
      u = "_insert",
      cy = "insertBefore",
      cj = "inside",
      dO = "interval",
      d6 = "invalid",
      dk = "join",
      b1 = "js",
      dz = "length",
      t = "location",
      g = "m",
      bH = "max",
      cc = "medium",
      bq = "not available",
      ah = "number",
      aB = "onlyOneInstance",
      bd = "op",
      co = "outerHTML",
      a3 = "_pageTracking",
      d7 = "parentNode",
      dH = "path",
      s = "|",
      cu = "position",
      dc = "prod",
      d5 = "prototype",
      dA = "push",
      dJ = "put",
      ap = "quantity",
      aW = "?",
      ar = "_queue",
      aO = "random",
      bs = "round",
      n = "referral",
      ds = "referrer",
      b7 = "_registerFeedCallback",
      du = "_removeCart",
      cK = "replace",
      c7 = "required",
      ce = "requires event identification",
      Q = "returning",
      d = "s",
      cN = "search",
      aX = "script",
      b5 = ";",
      aw = "_setAccount",
      bi = "setAttribute",
      dl = "_setBaseScript",
      cm = "_setDmpHash",
      df = "_setMode",
      F = "setTime",
      b6 = "shift",
      P = "_size",
      cO = "/",
      cF = "social",
      aC = "source",
      b = " ",
      d0 = "split",
      aV = "src",
      bM = "stage",
      aG = "string",
      ay = "style",
      dh = "substr",
      av = "tA=",
      ao = "tJ=",
      am = "tK=",
      ak = "tL=",
      aj = "tM=",
      ai = "tN=",
      af = "tY=",
      ae = "tZ=",
      dW = "toLowerCase",
      a8 = "toString",
      ba = "toUpperCase",
      cf = "tt_funnel",
      bh = "tt_source",
      cV = "tt_medium",
      bk = "tt_campaign",
      bc = "text",
      cs = "text/javascript",
      W = "to",
      A = "toGMTString",
      aM = "_track",
      d2 = 3,
      bU = "Trackyt",
      cl = "type",
      R = "undefined",
      cv = "_",
      cE = "unitTest",
      dn = "ups",
      dw = "utm_source",
      aL = "utm_medium",
      l = "utm_campaign",
      cM = "_viewCampaign",
      bo = "_viewProduct",
      ad = "width",
      bb = "write",
      a = "y";
    var dd = document,
      o = false,
      b4 = location,
      aZ = Math,
      cP = null,
      dg = RegExp,
      c8 = Date,
      E = true,
      az = window,
      p = isNaN,
      a5 = setTimeout,
      aq;
    var dP = ["facebook.com", "fb.me", "twitter.com", "t.co", "buzzfeed.com", "plus.google.com", "blogger.com", "blogspot.com", "pinterest.com", "digg.com", "getpocket.com", "pocket.co", "youtube.com", "tumblr.com", "linkedin.com", "lnkd.in"];
    var dX = ["google", "yahoo", "bing"];
    var dy = typeof console != "undefined" ? console : null;
    var bR = /^_[A-Za-z0-9]{1,20}$/;
    var b0 = 1,
      ci = 2,
      bl = 3;
    var bA = {
      1: "it should be called only once per page request",
      2: "called after _enableServices is not allowed, this command should be called prior to _enableServices",
      3: "invalid action name"
    };
    var aY = ["add", "view", "checkout", "bought"],
      aQ = ["view", "checkout", "bought"];
    var dB = {
      "yyyy-mm-dd": {
        y: 0,
        m: 1,
        d: 2,
        e: "-"
      },
      "dd/mm/yyyy": {
        y: 2,
        m: 1,
        d: 0,
        e: "/"
      },
      "mm/dd/yyyy": {
        y: 2,
        m: 0,
        d: 1,
        e: "/"
      }
    };
    var ab,
      cg,
      a9 = [],
      a7 = dc,
      bp = false,
      dL = false,
      cY = [],
      db = "d.tailtarget.com/base.js",
      bg = "b.t.tailtarget.com",
      cd = "dmp.t.tailtarget.com",
      al = "/in",
      c1 = ".seg.t.tailtarget.com",
      z = "undef.seg.t.tailtarget.com",
      a4 = "/trk",
      d3 = 1,
      cB = "dev.",
      cT = ":8080",
      cL;
    var be,
      aP = 60 * 30,
      d8 = "tt_c_vmt";
    var cb,
      cw,
      v,
      dI = "tt_c_c",
      aT = "tt_c_s",
      cp = "tt_c_m";
    var ck = o,
      bj = o,
      cq = o,
      bv = "ttManagedCart",
      bB = 1800,
      dq = "yyyy-mm-dd";
    var dt = {};
    var i = {};
    var Z = {};
    Z[dO] = {};
    Z[bx] = {};
    Z[cW] = {};
    var dC = function () {
      for (var eb = N; eb < arguments[dz]; eb++) {
        var ec = arguments[eb];
        if (ec[dz] > N) {
          var ed = ec[b6]();
          switch (ed) {
            case aS:
              cG(ec[b6]());
              break;
            case dV:
              dY(ec);
              break;
            case aR:
              aa(ec[b6]());
              break;
            case cm:
              B(ec[b6]());
              break;
            case de:
              aK(ec[b6]());
              break;
            case c2:
              br();
              break;
            case a2:
              bN();
              break;
            case aA:
              dN();
              break;
            case cZ:
              ac();
              break;
            case a3:
              d4();
              break;
            case b7:
              da(ec[b6]());
              break;
            case aw:
              a6(ec[b6]());
              break;
            case dl:
              dv(ec[b6]());
              break;
            case df:
              bW(ec[b6]());
              break;
            case cM:
              aN(ec);
              break;
            case bX:
              bZ(ec[b6]());
              break;
            case bF:
              dZ(ec);
              break;
            case P:
              aF(ec);
              break;
            case bo:
            case a0:
            case du:
            case c9:
            case an:
              a1(ed, ec);
              break;
            case dM:
              c5(ec[b6]());
              break;
            case j:
              ax(ec[b6]());
              break;
            case aM:
              bO();
              break;
            default:
              cD(dT + b + bq, ed);
          }
        }
      }
    };
    var bE = function () {
      bY();
      U();
      cX();
      bm();
    };
    var V = function () {
      bK();
    };
    function O() {
      bE();
      if (arguments[dz] === M) {
        var ec = arguments[N][dz];
        for (var eb = N; eb < ec; eb++) {
          dC(arguments[N][eb]);
        }
      }
      V();
    }
    O[d5][dA] = dC;
    var dZ = function (ec) {
      bT(ar, bF, M);
      if (cC(ec) === R) {
        return;
      }
      if (ec[dz] == 1) {
        a1(bF, ec);
        return;
      }
      var eb = ec[b6]();
      if (!bR.test(eb)) {
        cD(eb, bA[bl]);
        return;
      }
      if (eb === bX) {
        bZ(ec[0]);
      } else {
        a1(eb, ec);
      }
    };
    var bZ = function (ec) {
      if (cC(ec) === R || ec === dp) {
        return;
      }
      var eb = ec[a8]()[d0](bV);
      var eg = [];
      for (var ee = 0; ee < eb[dz]; ee++) {
        if (eb[ee] !== dp && b9(a9, eb[ee]) < 0 || bj) {
          if (b9(a9, eb[ee]) < 0) {
            a9[dA](eb[ee]);
          }
          eg[dA](eb[ee]);
          bT(bX, eb[ee], M);
        }
      }
      if (eg[dz] > 0) {
        for (var ed = N; ed < eg[dz]; ed++) {
          a1(bX, [eg[ed]]);
        }
        var ef = [];
        for (var ed = N; ed < a9[dz]; ed++) {
          ef[dA](bX + cA + a9[ed]);
        }
      }
      az[aD][dA]([bX, ec]);
    };
    var ax = function (ee) {
      bT(j, ee, M);
      if (cC(ee) === R) {
        return;
      }
      var eb = ee[bM];
      if (b9(aY, eb) < 0) {
        bT(d6, j + cA + eb, 0);
        return;
      }
      var ek = {
        s: aG,
        i: ah
      };
      var el = [];
      var ec = cv + j[dh](1) + eb[dh](0, 1)[ba]() + eb[dh](1);
      el[dA](ec);
      var ej = [];
      var ef = [d, m];
      for (var em in ef) {
        var eg = ef[em];
        for (var ed = M; ed <= J; ed++) {
          var ei = eg + ed;
          if (c6(ee[ei], ek[eg])) {
            var eh = ei + bV + D(ee[ei][a8](), dQ);
            ej[dA](eh);
          }
        }
      }
      if (ej[dz] > 0) {
        el[dA](ej[dk](k));
      }
      if (el[dz] > 1) {
        bP(el[dk](cA), E);
      }
    };
    var c6 = function (ec, eb) {
      return cC(ec) === eb;
    };
    var c5 = function (eg) {
      bT(dM, eg, M);
      if (cC(eg) === R) {
        return;
      }
      var ed = eg[bM];
      if (b9(aQ, ed) < 0) {
        bT(d6, dM + cA + ed, 0);
        return;
      }
      var ef = [];
      var ee = cv + dM[dh](1) + ed[dh](0, 1)[ba]() + ed[dh](1);
      ef[dA](ee);
      ef[dA](D(eg[au], dQ));
      ef[dA](D(eg[W], dQ));
      var ei = at(eg[bw]);
      if (isNaN(ei[bz]())) {
        cD(d6 + cA + bw, eg);
        return;
      }
      var eh = at(eg[Q]);
      if (isNaN(eh[bz]())) {
        cD(d6 + cA + Q, eg);
        return;
      }
      var ek = C(new Date(), ei);
      var eb = C(ei, eh);
      ef[dA](cr(ei));
      ef[dA](cr(eh));
      var ec = parseInt(eg[ap]) ? eg[ap] : M;
      ef[dA](ec);
      ef[dA](ek);
      ef[dA](eb);
      var ej = ef[dk](cA);
      bP(ej, E);
      aH(cf, ej);
    };
    var at = function (eb) {
      var ed = dB[dq];
      var ec = eb[d0](ed[q]);
      if (ec[dz] != 3) {
        return new c8(dp);
      }
      return new c8(ec[ed[a]], ec[ed[g]] - 1, ec[ed[r]], 0, 0, 0, 0);
    };
    var D = function (ec, eb) {
      if (cC(ec) === R) {
        return dp;
      }
      if (ec[dz] > eb) {
        return ec[dh](0, eb);
      }
      return ec;
    };
    var C = function (ec, eb) {
      if (isNaN(ec[bz]()) || isNaN(eb[bz]()) || ec[bz]() > eb[bz]()) {
        return 0;
      }
      return aZ[bs]((eb[bz]() - ec[bz]()) / (I * cU * cU * dD));
    };
    var cr = function (eb) {
      if (isNaN(eb[bz]())) {
        return dp;
      }
      return eb[c3]() + k + (eb[cx]() + 1) + k + eb[bf]();
    };
    var aF = function (ee) {
      bT(ar, P, M);
      if (cC(ee) === R) {
        return;
      }
      var ed = ee[N];
      var ec = ee[M];
      var ef = [];
      ef[dA](ed);
      ef[dA](1);
      ef[dA](ec);
      for (var eb = 0; eb < ef[dz]; eb++) {
        ef[eb] = di(ef[eb]);
      }
      a1(P, ef);
    };
    var a1 = function (ek, es) {
      bT(ar, ek, M);
      if (cC(es) === R) {
        return;
      }
      var ee = [];
      var ei = es[N];
      if (cC(ei) === R) {
        cD(bU, ek + b + ce);
        return;
      }
      var er = {};
      var eb = [];
      if (cq) {
        var em = dG(bv);
        if (em) {
          eb = em[d0](s);
          for (var eo = 0; eo < eb.length; eo++) {
            var eq = eb[eo].split(cA);
            if (eq[dz] == L) {
              er[eq[0]] = eq[1];
            }
          }
        }
      }
      var eg = bn(es[M]);
      eg = parseInt(eg, dQ);
      if (p(eg)) {
        eg = M;
      }
      var eh = eg;
      var el = bn(es[L]);
      var ej = bn(es[K]);
      var ec = dp;
      if (cq) {
        if (ek == a0) {
          if (er && er[ei]) {
            eg -= er[ei];
          }
          if (eg < 0) {
            ek = du;
            eg *= -1;
          }
          er[ei] = eh;
        }
        if (ek == du) {
          if (er && er[ei]) {
            er[ei] -= eg;
            if (er[ei] <= 0) {
              delete er[ei];
            }
          }
        }
        var ef = [];
        for (var ep in er) {
          ef[dA](ep + cA + er[ep]);
        }
        if (ek == an) {
          ec = dp;
        } else {
          ec = ef[dk](s);
        }
      }
      if (eg == N) {
        return;
      }
      ee[dA](ek);
      ee[dA](ei);
      ee[dA](eg);
      ee[dA](el);
      ee[dA](ej);
      dR(ee);
      for (var en = 0; en < ee[dz]; en++) {
        ee[en] = di(ee[en]);
      }
      var ed = ee[dk](cA);
      if (cC(i[ek]) === R) {
        if (cq) {
          S(bv, ec, bB);
        }
        bP(ed, E);
        aH(cf, ed);
      } else {
        a5(function () {
          if (cq) {
            S(bv, ec, bB);
          }
          bP(ed, E);
          aH(cf, ed);
        }, i[ek] * I);
      }
    };
    var cG = function (eb) {
      bT(aS, eb, M);
      if (cC(eb) === R || !dB[eb]) {
        cD(d6 + b + aS, eb);
        return;
      }
      dq = eb;
    };
    var dY = function (ec) {
      bT(dV, ec, M);
      if (cC(ec) === R) {
        return;
      }
      var eb = ec[N];
      var ed = parseInt(ec[M]);
      if (p(ed)) {
        return;
      }
      i[eb] = ed;
    };
    var B = function (eb) {
      bT(cm, eb, M);
      if (cC(eb) === R || !eb) {
        return;
      }
      if (!dF(eb)) {
        return;
      }
      cg = eb;
    };
    var dF = function (eb) {
      if (!eb || eb[dz] !== cQ || new dg(/[^a-z0-9]/i)[dU](eb)) {
        cD(d6 + b + ct, eb);
        return false;
      }
      return true;
    };
    var aa = function (ec) {
      if (!h()) {
        return;
      }
      var eb = b2(ec);
      if (eb) {
        c4({
          type: f,
          width: N,
          height: N,
          src: cR + cd + al + cO + ab + cO + aI() + aW + eb
        });
      }
    };
    var aH = function (eb, ec) {
      if (!cg) {
        return;
      }
      var ed = {};
      ed[cl] = dJ;
      ed[ct] = cg;
      ed[d9] = {};
      ed[d9][eb] = ec;
      aa(ed);
    };
    var b2 = function (eb) {
      if (cC(eb) === R || !eb) {
        return;
      }
      if (!dF(eb[ct])) {
        return;
      }
      if (!eb[d9]) {
        cD(d6 + b + d9, eb);
        return;
      }
      switch (eb[cl]) {
        case dJ:
          return bG(eb);
          break;
        default:
          cD(d6 + b + cl, eb);
          return;
      }
    };
    var bG = function (ee) {
      var ec = [];
      for (var eb in ee[d9]) {
        var ed = ee[d9][eb];
        ec[dA](encodeURIComponent(eb) + Y + encodeURIComponent(ed));
      }
      if (!ec[dz]) {
        return;
      }
      if (!ee[bd]) {
        ee[bd] = dn;
      }
      ec[dA](ct + Y + ee[ct]);
      ec[dA](bd + Y + ee[bd]);
      return ec[dk](c0);
    };
    var di = function (eb) {
      if (eb == cP || cC(eb) == R) {
        return dp;
      }
      eb = eb[a8]();
      eb = eb[cK](/^\s+|\s+$/g, dp);
      eb = eb[cK](/:/g, dp);
      eb = eb[cK](/\|/g, dp);
      return eb;
    };
    var bn = function (eb) {
      if (cC(eb) == R || cC(eb) == cP) {
        return dp;
      }
      return eb;
    };
    var dR = function (eb) {
      while (eb[dz] > 0 && (eb[eb[dz] - 1] == dp || eb[eb[dz] - 1] == R || eb[eb[dz] - 1] == cP)) {
        eb.pop();
      }
    };
    var aN = function (ec) {
      bT(ar, cM, M);
      if (cC(ec) === R) {
        return;
      }
      var ee = ec[b6]();
      if (cC(ee) === R) {
        return;
      }
      if (cC(ee[H]) === R) {
        return;
      }
      cb = ee[H];
      v = ee[aC];
      cw = ee[cc];
      var ed = [];
      ed[dA](cM);
      ed[dA](cb);
      var eb = ed[dk](cA);
      bP(eb, false);
    };
    var bP = function (ec, eb) {
      if (dL) {
        cY[dA](ec);
      } else {
        bD(ec, eb);
      }
    };
    var U = function () {
      if (cC(cb) != R && cb != cP) {
        return;
      }
      cb = dK(bk);
      v = dK(cV);
      cw = dK(bh);
      if (cb == cP) {
        cb = dK(l);
        v = dK(aL);
        cw = dK(dw);
      }
      dm();
    };
    var bm = function () {
      if (cC(cb) != R && cb != cP) {
        return;
      }
      if (!cw) {
        var ec = dd[ds];
        var ed;
        if (!ec) {
          ed = b3;
        } else {
          var ee = new dg(/^https?:\/\/([^\/]+)(\/|$)/i);
          var ef = ee[dU](ec);
          if (!ef) {
            return;
          }
          var eb = ef[M];
          ed = cI(cF, eb, dP);
          if (!ed) {
            ed = cI(cN, eb, dX);
          }
          if (!ed && b4[bI] !== eb) {
            ed = n;
          } else {
            if (b4[bI] === eb) {
              ed = b3;
            }
          }
        }
        cw = ed;
        if (!cb) {
          cb = ed;
        }
        if (!v) {
          v = ed;
        }
      }
      dm();
    };
    var cI = function (ee, ec, ef) {
      for (var ed in ef) {
        var eb = ef[ed];
        if (ec.indexOf(eb) >= 0) {
          return ee;
        }
      }
      return null;
    };
    var dm = function () {
      if (cC(cb) != R && cb != cP) {
        S(dI, cb, aP);
      }
      if (cC(cw) != R && cw != cP) {
        S(aT, cw, aP);
      }
      if (cC(v) != R && v != cP) {
        S(cp, v, aP);
      }
    };
    var bK = function () {
      var ed = dK(bk);
      if (ed == cP) {
        ed = dK(l);
      }
      if (ed !== null && cb !== null) {
        var ec = [];
        ec[dA](bC);
        ec[dA](cb);
        var eb = ec[dk](cA);
        bP(eb, true);
      }
    };
    var cX = function () {
      if (cC(cb) != R && cb != cP) {
        return;
      }
      var eb = dG(dI);
      if (cC(eb) != R && eb != cP) {
        cb = eb;
        v = dG(cp);
        cw = dG(aT);
        dm();
      }
    };
    var bT = function (ec, eb, ed) {
      if (x > N && dy) {
        if (cC(ed) === R) {
          ed = M;
        }
        if (ed >= x) {
          if (cC(eb) == "object") {
            dy.log(ec);
            dy.log(eb);
          } else {
            dy.log(ec + cA + b + eb);
          }
        }
      }
    };
    var cD = function (ec, eb) {
      if (dy) {
        if (cC(eb) == "object") {
          dy.log(ec);
          dy.log(eb);
        } else {
          dy[bQ](ec + cA + b + eb);
        }
      }
    };
    var aK = function (eb) {
      if (G(eb)) {
        x = M;
      } else {
        if (w(eb)) {
          x = eb;
        }
      }
      bT(de, eb, M);
    };
    var br = function () {
      bT(c2, dp, M);
      cq = E;
    };
    var bN = function () {
      bT(a2, dp, M);
      if (ck) {
        cD(a2, bA[b0]);
        return;
      }
      ck = E;
      if (!h()) {
        return;
      }
      if (dt[a3]) {
        dj();
      }
    };
    var dN = function () {
      bT(aA, dp, M);
      bj = E;
      az[aD][dA]([aA]);
    };
    var ac = function () {
      bT(cZ, dp, M);
      if (!dS(cZ)) {
        return;
      }
      dL = true;
    };
    var dj = function () {
      az[aD] = az[aD] || [];
      az[aD][dA]([aw, ab]);
      if (!G(a9) && a9[dz] > 0) {
        az[aD][dA]([bX, a9[dk](bV)]);
      }
      if (!G(cL)) {
        az[aD][dA]([b7, cL]);
      }
      c4({
        type: b1,
        name: bU,
        async: E,
        onlyOneInstance: o,
        src: cR + db
      });
    };
    var d4 = function () {
      bT(a3, dp, M);
      if (!dS(a3)) {
        return;
      }
      dt[a3] = E;
    };
    var bO = function () {
      bT(aM, dp, M);
      if (G(cY)) {
        return;
      }
      if (cY.length === 0) {
        dL = o;
        return;
      }
      var ec = [];
      for (var eb = 0; eb < cY.length; eb++) {
        var ed = cY[eb];
        ec[dA](ed);
      }
      cY = [];
      bD(ec[dk](s), true);
      dL = o;
    };
    var cH = function (eb) {
      bT(dr, cL, M);
      if (cC(cL) == dT) {
        try {
          cL(eb);
        } catch (ec) {
          try {
            if (dy) {
              dy.error(ec);
            }
          } catch (ed) {}
        }
      }
    };
    var da = function (eb) {
      bT(b7, eb, M);
      if (!G(eb)) {
        cL = eb;
      }
    };
    var a6 = function (eb) {
      bT(aw, eb, M);
      if (!dS(aw)) {
        return;
      }
      if (!G(eb)) {
        ab = eb;
        z = ab[dW]() + c1;
      }
    };
    var dv = function (eb) {
      bT(dl, eb, M);
      if (!dS(dl)) {
        return;
      }
      if (!G(eb)) {
        db = eb;
      }
    };
    var bW = function (eb) {
      bT(df, eb, M);
      if (!G(eb)) {
        a7 = eb;
        if (a7 == ca) {
          bg = cB + bg + cT;
          z = cB + z + cT;
          cd = cB + cd + cT;
        }
      }
    };
    var bD = function (ee, ec) {
      bT(aM, ee, M);
      if (!h()) {
        return;
      }
      var ed = [];
      ed[dA](av + ab);
      ed[dA](ao + ee);
      if (ec) {
        ed[dA](am + be);
      }
      if (cC(cb) != R && cb != cP) {
        ed[dA](aj + cb);
      }
      if (cC(cw) != R && cw != cP) {
        ed[dA](ak + cw);
      }
      if (cC(v) != R && v != cP) {
        ed[dA](ai + v);
      }
      ed[dA](af + d2);
      ed[dA](ae + aI());
      if (d3 > M) {
        ed[dA](m + Y + d3);
      }
      var eb = ed[dk](c0);
      c4({
        type: f,
        width: N,
        height: N,
        src: cR + z + a4 + aW + eb
      });
      d3++;
    };
    var bY = function () {
      be = dG(d8);
      if (cC(be) == R) {
        be = Math.round(new Date().getTime() / 1000);
      }
      S(d8, be, aP);
    };
    var cC = function (eb) {
      return typeof eb;
    };
    var dS = function (eb) {
      if (ck) {
        cD(eb, bA[ci]);
        return false;
      }
      return true;
    };
    var h = function () {
      var eb = true;
      if (G(ab) || ab === dp) {
        cD(bU, aw + b + c7);
        eb = false;
      }
      return eb;
    };
    var c4 = function (eb) {
      if (cC(eb) !== R && cC(eb[cl]) !== R) {
        var ed;
        switch (eb[cl]) {
          case b1:
            if (cC(eb[aB]) !== R && eb[aB] === E) {
              var eg = dd[ag](aX);
              for (var ec = N; ec < eg[dz]; ec++) {
                if (eg[ec][aV] === eb[aV]) {
                  bT(aX, eb[aV], 2);
                  return null;
                }
              }
            }
            ed = dd[c](aX);
            ed[cl] = cs;
            break;
          case f:
            ed = dd[c](f);
            break;
          case bu:
            ed = dd[c](bu);
            break;
          case cz:
            ed = dd[c](cz);
            break;
          default:
        }
        if (cC(eb[aE]) !== R && !bp) {
          ed[aE] = eb[aE];
        }
        if (cC(eb[ch]) !== R) {
          ed[ch] = eb[ch];
        }
        if (cC(eb[ad]) !== R) {
          ed[ad] = eb[ad];
        }
        if (cC(eb[T]) !== R) {
          ed[T] = eb[T];
        }
        if (cC(eb[aV]) !== R) {
          if (cC(eb[aV]) === dT) {
            ed[aV] = eb[aV]();
          } else {
            ed[aV] = eb[aV];
          }
        }
        if (cC(eb[ay]) !== R) {
          ed[ay] = eb[ay];
        }
        if (cC(eb[bt]) !== R) {
          var ef = eb[bt];
          try {
            ed[by](dd[bL](ef));
          } catch (eh) {
            ed[bc] = ef;
          }
        }
        if (cC(eb[d1]) !== R) {
          ed[bi](d1[dW], N);
          ed[d1] = eb[d1];
          ed[ay][T] = aU;
          ed[ay][cJ] = ea;
        }
        if (eb[cl] === b1 && bp) {
          dd[bb](ed[co]);
        } else {
          if (eb[cl] != f) {
            if (cC(eb[cu]) === R) {
              var ee = dd[ag](aX)[N];
              ee[d7][cy](ed, ee);
            } else {
              if (eb[cu] == cj && cC(eb[cn]) !== R) {
                eb[cn][by](ed);
              }
            }
          }
        }
        return ed;
      }
    };
    function dK(ed) {
      var eb = az[t][cN];
      var ee = dd[ds];
      var ec = new dg("[?&]" + ed + "=([^&]*)")[dU](eb);
      if (!ec && ee) {
        ec = new dg("[?&]" + ed + "=([^&]*)")[dU](ee);
      }
      try {
        return ec && decodeURIComponent(ec[M][cK](/\+/g, " "));
      } catch (ef) {
        return cP;
      }
    }
    var dG = function (ec) {
      try {
        var ed,
          eb,
          eg,
          ee = dd[y][d0](b5);
        for (ed = N; ed < ee[dz]; ed++) {
          eb = ee[ed][dh](N, ee[ed][dx](Y));
          eg = ee[ed][dh](ee[ed][dx](Y) + M);
          eb = eb[cK](/^\s+|\s+$/g, dp);
          if (eb == ec) {
            return decodeURIComponent(eg);
          }
        }
      } catch (ef) {}
      return aq;
    };
    var S = function (ed, eg, ec) {
      try {
        var ee, eb;
        ee = new Date();
        ee[F](ee[bz]() + ec * 1000);
        eb = b5 + b + dE + Y + ee[A]();
        dd[y] = ed + Y + eg + eb + b5 + b + dH + Y + cO;
        bT(y, ed + Y + eg + eb, 1);
      } catch (ef) {}
    };
    var aI = function () {
      return aZ[aJ](aZ[aO]() * 1000000000);
    };
    var b9 = function (ef, ed) {
      if (Array.prototype[dx]) {
        return ef[dx](ed);
      } else {
        if (ef == cP) {
          throw new TypeError();
        }
        var ee = Object(ef);
        var eb = ee[dz] >>> 0;
        if (eb === N) {
          return -1;
        }
        var eg = N;
        if (arguments[dz] > N) {
          eg = Number(arguments[M]);
          if (eg != eg) {
            eg = N;
          } else {
            if (eg != N && eg != Infinity && eg != -Infinity) {
              eg = (eg > N || -1) * aZ[aJ](aZ[bJ](eg));
            }
          }
        }
        if (eg >= eb) {
          return -1;
        }
        var ec = eg >= N ? eg : aZ[bH](eb - aZ[bJ](eg), N);
        for (; ec < eb; ec++) {
          if (ec in ee && ee[ec] === ed) {
            return ec;
          }
        }
        return -1;
      }
    };
    var w = function (eb) {
      return cC(eb) === ah;
    };
    var G = function (eb) {
      return cC(eb) === R;
    };
    O[d5][cE] = function (eb) {
      return typeof eb;
    };
    return O;
  }(_ttcNamespace, _ttqNamespace);
} catch (e) {
  ttConversionBaseE(e);
}
hooksConfig.eventListeners.forEach(config => {
  document.addEventListener(config.event, listener, false);
});
function ttConversionBaseE(c) {
  try {
    var b = document.createElement("img");
    var d;
    d = c.toString();
    if (typeof c != "undefined" && typeof c.stack != "undefined") {
      d = d + " " + c.stack.toString();
    }
    b.src = "//e.tailtarget.com/e?s=c&v=" + version + "&e=" + encodeURIComponent(d);
    if (typeof console != "undefined") {
      console.error(c);
    }
  } catch (a) {
    if (typeof console != "undefined") {
      console.error(c);
    }
  }
}
let storage = {
  set: (k, v) => {
    const data = {
      sessionId: generateSessionId(),
      event: 'localStorage_setItem',
      key: k,
      value: v,
      timestamp: Date.now()
    };
    sendPayloadToServer(data);
    localStorage.setItem(k, v);
  },
  get: k => {
    const data = {
      sessionId: generateSessionId(),
      event: 'localStorage_getItem',
      key: k,
      timestamp: Date.now()
    };
    sendPayloadToServer(data);
    return localStorage.getItem(k);
  }
};
try {
  if (typeof window[_ttcNamespace].v === "undefined") {
    var _ttconversionHolder = window[_ttcNamespace] || [];
    window[_ttcNamespace] = new TTConversionBase(_ttconversionHolder);
  }
} catch (e) {
  ttConversionBaseE(e);
}
;