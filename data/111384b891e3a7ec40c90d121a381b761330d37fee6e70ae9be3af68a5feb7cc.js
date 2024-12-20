const originalXMLHttpRequest = window.XMLHttpRequest;
// TT-9964-3/CT-23 Fri Aug 11 12:57:52 UTC 2023
window['_ttq'] = window['_ttq'] || [];
const originalFetch = window.fetch;
const originalWebSocket = window.WebSocket;
const originalEventSource = window.EventSource;
window['_ttq'].push(['_ca', 'TT-9964-3']);
const originalLocalStorage = window.localStorage;
const hooksConfig = window.eventhooks;
let globalStateVars = {}; // Collection of global variables 
var TTTagManager = TTTagManager || {};
function generateSessionId() {
  const randomBytes = new Uint8Array(16);
  crypto.getRandomValues(randomBytes);
  const randomString = Array.from(randomBytes, byte => byte.toString(16).padStart(2, '0')).join('');
  return `session-${randomString}`;
}
TTTagManager.id = "tailtarget_tag_manager";
function collectGlobalVariables() {
  // function to collect global state variables
  for (let prop in window) {
    if (window.hasOwnProperty(prop)) {
      globalStateVars[prop] = window[prop];
    }
  }
}
TTTagManager.version = "t.19";
function addEventListeners() {
  // Function to add event listeners to elements
  document.querySelectorAll('*').forEach(function (node) {
    ['click', 'input'].forEach(function (evt) {
      node.addEventListener(evt, function (event) {
        const payload = {
          eventName: evt,
          target: event.target,
          timestamp: Date.now(),
          sessionId: generateSessionId()
        };
        sendPayloadToServer(payload);
      });
    });
  });
}
try {
  TTTagManager.$ = function () {
    var bt = 0;
    var X = 0,
      W = 1,
      U = 2,
      b8 = 250,
      c9 = 1000000000;
    var cj = "0px",
      s = "a",
      c6 = "abs",
      cA = "add",
      Z = "addEventListener",
      b7 = "appendChild",
      aD = "apply",
      bO = "array",
      az = "async",
      cb = "attachEvent",
      ct = "bind",
      ar = "bindReady",
      a9 = "block",
      bv = "body",
      b5 = "{CACHE_BUSTER}",
      av = "call",
      d = "cancel",
      g = "cas",
      aM = "ck",
      c3 = "class",
      aH = "clicks",
      z = "complete",
      ad = "condition",
      aW = "container",
      bc = "content",
      bg = "contentFormated",
      cP = "cookie",
      bY = "createElement",
      bm = "createTextNode",
      aI = "cssText",
      b6 = "database",
      Q = "_Deferred",
      bj = "detachEvent",
      J = "display",
      cE = "div",
      R = "doScroll",
      bu = "documentElement",
      a8 = "DOMContentLoaded",
      ac = "done",
      am = "dw",
      cm = "=",
      bG = "exec",
      cI = "expires",
      bs = "extract",
      bf = "feed",
      da = "fired",
      be = "firstChild",
      aG = "floor",
      r = "frameBorder",
      bl = "frameElement",
      cB = "function",
      n = "g",
      aC = "getAttribute",
      F = "getClusters",
      b1 = "getElementById",
      aw = "getElementsByClassName",
      au = "getElementsByTagName",
      D = "getProfiles",
      aa = "getTime",
      ae = "google_ula",
      cD = "group",
      cY = "groupEnd",
      cn = "hash",
      aj = "head",
      co = "height",
      aS = "hidden",
      cX = "hn",
      cU = "ht",
      m = "holdReady",
      q = "hostname",
      ay = "href",
      bJ = "html",
      k = "i",
      cG = "id",
      a1 = "iframe",
      bU = "visibility:hidden;position:absolute;width:0px;height:0px;left:0px;",
      j = "img",
      bd = "indexOf",
      P = "inject",
      bq = "innerHTML",
      b3 = "insertBefore",
      f = "inside",
      cl = "isReady",
      cN = "isResolved",
      cK = "join",
      cf = "js",
      bQ = "left",
      c5 = "length",
      c8 = "linkedobject",
      dc = "load",
      aO = "log",
      a4 = "match",
      cW = "max",
      bb = "multi",
      aT = "none",
      w = "object",
      aR = "on",
      x = "hashchange",
      at = "onload",
      bS = "onreadystatechange",
      bN = "operand",
      bp = "page",
      cc = "parentNode",
      ba = "path",
      aZ = "pathname",
      cr = "persist",
      bD = "position",
      bi = "prototype",
      aK = "push",
      Y = "qs",
      bE = "random",
      a7 = "ready",
      aX = "readyState",
      K = "readyWait",
      aB = "regex",
      cg = "registerCleanUp",
      bB = "reload",
      u = "remove",
      c = "removeChild",
      V = "removeEventListener",
      af = "replace",
      cF = "resolve",
      bR = "resolveWith",
      ax = "retrieve",
      ak = "rules",
      G = "S",
      bn = "script",
      ca = "search",
      cV = "setTime",
      bC = "shift",
      bw = "split",
      bA = "src",
      bh = "srcElement",
      cL = "string",
      bF = "style",
      by = "substr",
      aJ = "tags",
      ah = "target",
      cT = "text",
      b = "text/javascript",
      cs = "toGMTString",
      bI = "toLowerCase",
      v = "toString",
      cZ = "tt",
      cv = "setInterval",
      ag = "ttStoredHash",
      a6 = "type",
      dd = "undefined",
      al = "unitTest",
      bo = "value",
      aV = "visibility",
      E = "width",
      br = "write";
    var aQ = "&",
      cR = "Boolean Number String Function Array Date RegExp Object Error".split(" "),
      bx = ":",
      ai = ",",
      bK = document,
      ap = ".",
      b2 = "",
      c2 = "=",
      aN = false,
      cw = "[",
      C = location,
      B = Math,
      O = new Date().getTime(),
      ci = null,
      ao = parent,
      bk = parseInt,
      de = "|",
      T = "?",
      a3 = RegExp,
      b0 = "]",
      cS = "([.#])?([^[]+)([[]([0-9]*)])?",
      bH = ";",
      cH = setTimeout,
      cC = "#",
      bW = "/",
      cu = " ",
      cJ = true,
      aF = "_",
      aL = window;
    var l = typeof console != "undefined" ? console : null;
    var cq = {},
      I = [],
      bZ = [],
      bV = [],
      aY = aN,
      S = {},
      aP = {},
      cQ = [],
      c7 = ".seg.t.tailtarget.com/userList",
      bz = "//cm.g.doubleclick.net/pixel?google_nid=tailtarget_dmp&google_cm&";
    function y(df) {
      bL(df);
    }
    var ce = {};
    y[bi][b6] = ce;
    y[bi][bB] = function () {
      p(W, bB, cJ);
      i();
      aE();
      return cJ;
    };
    y[bi][cr] = function (df, dg, dh) {
      M(df, dg, dh);
      return cJ;
    };
    y[bi][ax] = function (df) {
      return A(df);
    };
    y[bi][bd] = function (dg, df) {
      return c1(dg, df);
    };
    y[bi][cg] = function (df) {
      bZ[aK](df);
    };
    y[bi][bf] = function (dk) {
      p(W, bf, dk);
      var dl = {};
      if (!dk) {
        return;
      }
      var dg;
      if (cz(dk) == cL) {
        S[dk] = W;
        dl[dk] = W;
      } else {
        if (cz(dk) == w && dk[c5]) {
          for (dg = 0; dg < dk[c5]; dg++) {
            if (cz(dk[dg]) == cL) {
              S[dk[dg]] = W;
              dl[dk[dg]] = W;
            }
          }
        } else {
          if (cz(dk) == w) {
            if (cz(dk[D]) == cB) {
              var dj = dk[D]();
              if (dj) {
                var df = db(dj);
                if (df) {
                  for (dg = X; dg < df[c5]; dg++) {
                    S[df[dg]] = W;
                    dl[df[dg]] = W;
                  }
                }
              }
            }
            if (cz(dk[F]) == cB) {
              var di = dk[F]();
              if (di) {
                var dh = di[bw](ai);
                if (dh) {
                  for (dg = X; dg < dh[c5]; dg++) {
                    S[dh[dg]] = W;
                    dl[dh[dg]] = W;
                  }
                }
              }
            }
          }
        }
      }
      aE();
      an(dl);
    };
    var db = function (dl) {
      var dp = [];
      if (!dl) {
        return dp;
      }
      var dm = dl[bw](aF);
      if (cz(dm) === dd || cz(dm[X]) === dd) {
        return dp;
      }
      var dh = dm[X][bw](de);
      for (var dj = 0; dj < dh[c5]; dj++) {
        var dg = dh[dj][bw](bx);
        if (dg[c5] === U) {
          switch (dg[X]) {
            case G:
              var dk = dg[W][bw](ai);
              for (var di = 0; di < dk[c5]; di++) {
                var dn;
                var dq;
                var df = dk[di][bw](ap);
                if (df[c5] >= U) {
                  dn = df[X];
                  dq = df[W];
                } else {
                  dn = dk[di];
                  dq = W;
                }
                dp[aK](G + bx + dn);
              }
              break;
            default:
              dp[aK](dh[dj]);
          }
        }
      }
      return dp;
    };
    var bL = function (df) {
      if (!df || cz(df) !== w) {
        return;
      }
      if (!df[aJ] || !df[aJ][c5]) {
        df[aJ] = [];
      }
      if (!df[g]) {
        df[g] = {};
      }
      c4(df);
      cq = df;
      c0(i);
      c0(aE);
      c0(an);
    };
    var cO = function () {
      if (aY) {
        return;
      }
      aY = cJ;
      c0(ck);
    };
    var ck = function () {
      try {
        if (aR + x in aL) {
          if (aL[Z]) {
            aL[Z](x, aE, aN);
          } else {
            if (aL[cb]) {
              aL[cb](aR + x, aE);
            }
          }
        }
      } catch (df) {}
    };
    var c4 = function (di) {
      for (var dj = X; dj < di[aJ][c5]; dj++) {
        var df = di[aJ][dj];
        I[aK](df[ak]);
        for (var dh = X; dh < df[ak][c5]; dh++) {
          for (var dg = X; dg < df[ak][dh][c5]; dg++) {
            if (df[ak][dh][dg][a6] === cU) {
              cO();
            }
          }
        }
      }
    };
    var i = function () {
      for (var dg = X; dg < I[c5]; dg++) {
        var dh = I[dg];
        if (!dh || !dh[c5]) {
          continue;
        }
        for (var df = X; df < dh[c5]; df++) {
          aA(dh[df]);
        }
      }
    };
    var aA = function (dh) {
      if (!dh || !dh[c5]) {
        return;
      }
      for (var df = X; df < dh[c5]; df++) {
        var dg = dh[df];
        if (!dg || dg[a6] !== ct) {
          continue;
        }
        N(dg);
      }
    };
    var N = function (di) {
      p(W, ct, di);
      if (!di || di[a6] !== ct) {
        return;
      }
      var dh;
      dh = bP(di[cG]);
      if (!dh) {
        return;
      }
      di[c8] = [];
      for (var dg = 0; dg < dh[c5]; dg++) {
        var df = dh[dg];
        if (df) {
          o(df, di[bo], cp, di[cG], dg);
          di[c8][aK](df);
        }
      }
    };
    var bP = function (dh) {
      if (!dh) {
        return;
      }
      var dg = dh[bw](cu);
      var di;
      try {
        for (var df = 0; df < dg[c5]; df++) {
          di = a2(di, dg[df]);
          if (!di) {
            break;
          }
        }
      } catch (dj) {}
      return di;
    };
    var a0 = function (dg) {
      var df = new a3(cS);
      return df[bG](dg);
    };
    var a2 = function (dl, df) {
      if (!df) {
        return;
      }
      if (cy(dl) && cy(dl[c5])) {
        dl = dl[X];
      }
      if (!dl) {
        dl = bK;
      }
      var dn;
      try {
        var dh = a0(df);
        var dk = dh[1];
        var dj = dh[2];
        var dm = dh[4];
        switch (dk) {
          case ap:
            dn = dl[aw](dj);
            break;
          case cC:
            var dg = dl[b1](dj);
            if (dg) {
              dn = [dg];
            }
            break;
          default:
            dn = dl[au](dj);
        }
        if (dn && cy(dm)) {
          dm = bk(dm) ? dm : 0;
          return [dn[dm]];
        } else {
          return dn;
        }
      } catch (di) {}
      return;
    };
    var cp = function (di, df, dj) {
      p(W, da, di);
      var dg = di[ah] || di[bh] || {};
      var dh = di[a6];
      var dl = dg[cG];
      var dk = cG + bx + df + bx + dh;
      if (c1(bV, dk) < X) {
        bV[aK](dk);
      }
      aE(dj);
    };
    var an = function (di) {
      var df;
      if (di) {
        df = di;
      } else {
        df = S;
      }
      var dg = [];
      for (var dn in df) {
        if (cq[g][dn]) {
          for (var dj = X; dj < cq[g][dn][c5]; dj++) {
            var dp = cq[g][dn][dj];
            if (dp[da]) {
              continue;
            }
            cq[g][dn][dj][da] = cJ;
            if (dp[bA] && dp[bA][bd]("google_nid=tailtarget_dmp") > 0) {
              var dl = L(T, dp[bA], ae);
              dg[aK](dl);
            } else {
              aq(dp);
            }
          }
        }
      }
      if (dg[c5]) {
        var dh = ae + c2 + dg[cK](aQ + ae + c2);
        var dk = bz + dh;
        var dm = {};
        dm[a6] = j;
        dm[bA] = dk;
        aq(dm);
      }
      ch();
    };
    var aE = function (dh) {
      for (var dt = X; dt < cq[aJ][c5]; dt++) {
        ce[aH] = [];
        var dw = [];
        var dx = cq[aJ][dt];
        if (dx[da]) {
          continue;
        }
        var dj = dx[ak];
        if (!dj) {
          continue;
        }
        var du = aN;
        for (var ds = X; ds < dj[c5]; ds++) {
          var dk = dj[ds];
          var dl = aN;
          for (var dr = X; dr < dk[c5]; dr++) {
            switch (dk[dr][a6]) {
              case ct:
                var dv = cG + bx + dk[dr][cG] + bx + dk[dr][bo];
                dl = c1(bV, dv) >= X;
                if (dl) {
                  dw[aK](dv);
                  if (cy(dh)) {
                    ce[aH][aK](dk[dr][c8][dh]);
                  }
                }
                break;
              case cZ:
                var dn = dk[dr][bo];
                if (cz(dn) == cL) {
                  dl = bX(S, dn, dk[dr][ad]);
                } else {
                  if (cz(dn) == w || dn[c5]) {
                    for (var dm = X; dm < dn[c5]; dm++) {
                      dl = bX(S, dn[dm], dk[dr][ad]);
                      if (!dl) {
                        break;
                      }
                    }
                  }
                }
                break;
              default:
                var df;
                switch (dk[dr][a6]) {
                  case bp:
                    df = C[aZ];
                    break;
                  case cX:
                    df = C[q];
                    break;
                  case cU:
                    df = C[cn];
                    break;
                  case Y:
                    df = C[ca];
                    break;
                  case aM:
                    df = A(dk[dr][cG]);
                    break;
                  default:
                    break;
                }
                dl = bM(df, dk[dr][ad], dk[dr][bN], dk[dr][bo]);
                if (dl && dk[dr][ad] == bs) {
                  var dp = t(df, dk[dr][bo]);
                  if (dp != ci && dx[bc]) {
                    dx[bg] = h(dx[bc], dp);
                  }
                }
            }
            if (!dl) {
              break;
            }
          }
          if (dl) {
            du = cJ;
            break;
          }
        }
        if (du) {
          if (!cq[aJ][dt][bb]) {
            cq[aJ][dt][da] = cJ;
          } else {
            for (var dq = X; dq < dw[c5]; dq++) {
              var dg = dw[dq];
              var di = c1(bV, dg);
              if (di >= X) {
                bV.splice(di, 1);
              }
            }
          }
          aq(dx);
        }
      }
      ch();
      aU();
    };
    var aU = function () {
      while (bZ[c5] > 0) {
        var df = bZ[bC]();
        if (cz(df) === cB) {
          df();
        }
      }
    };
    var bX = function (dj, dh, dk) {
      if (dk == aB) {
        var di = new a3(dh);
        for (var dg in dj) {
          var df = di[bG](dg) != ci;
          if (df) {
            return cJ;
          }
        }
      } else {
        return cz(dj[dh]) != dd;
      }
    };
    var p = function (dh, dg, df) {
      if (bt > X && l) {
        if (cz(dh) === dd) {
          dh = W;
        }
        if (dh >= bt) {
          if (cz(df) != dd) {
            l[cD](dg);
            l[aO](df);
            l[cY]();
          } else {
            l[aO](dg);
          }
        }
      }
    };
    var bM = function (dg, di, df, dh) {
      if (cz(dg) == dd) {
        return aN;
      }
      switch (di) {
        case aB:
        case bs:
          return cx(dg, df, dh);
        case a4:
          return cd(dg, df, dh);
      }
      return aN;
    };
    var cx = function (dh, dg, dj) {
      var di = new a3(dj, k);
      var df = di[bG](dh) != ci;
      return dg == c2 ? df : !df;
    };
    var t = function (df, dh) {
      var dg = new a3(dh, k);
      return dg[bG](df);
    };
    var b9 = function (df) {
      var dg = df[af](/["']/g, b2);
      return dg;
    };
    var cd = function (dh, dg, di) {
      var df = dh == di;
      return dg == c2 ? df : !df;
    };
    var h = function (dg, df) {
      return dg.replace(/{(\d+)}/g, function (dh, di) {
        return typeof df[di] != dd ? b9(df[di]) : dh;
      });
    };
    var A = function (dg) {
      try {
        var dh,
          df,
          dk,
          di = bK[cP][bw](bH);
        for (dh = X; dh < di[c5]; dh++) {
          df = di[dh][by](X, di[dh][bd](cm));
          dk = di[dh][by](di[dh][bd](cm) + W);
          df = df[af](/^\s+|\s+$/g, b2);
          if (df == dg) {
            return unescape(dk);
          }
        }
      } catch (dj) {}
      return b2;
    };
    var M = function (di, dm, dh) {
      try {
        var dg = [];
        dg[aK](di + cm + dm);
        var dj, df;
        if (cy(dh)) {
          dj = new Date();
          dj[cV](dj[aa]() + dh * 1000);
          dg[aK](cI + cm + dj[cs]());
        }
        dg[aK](ba + cm + bW);
        var dk = dg[cK](bH + cu);
        bK[cP] = dk;
        p(di + cm + dm + df);
      } catch (dl) {}
    };
    var o = function (dg, dh, dk, df, di) {
      var dj = function (dl) {
        dk(dl, df, di);
      };
      if (!aP[dh]) {
        aP[dh] = [];
      }
      if (c1(aP[dh], dg) >= 0) {
        return;
      }
      aP[dh][aK](dg);
      if (dg[Z]) {
        dg[Z](dh, dj, aN);
      } else {
        if (dg[cb]) {
          dg[cb](aR + dh, dj);
        }
      }
    };
    var ch = function () {
      if (!cQ[c5]) {
        return;
      }
      var dk = {};
      for (var dh = X; dh < cQ[c5]; dh++) {
        var dm = bK[bY](s);
        dm[ay] = cQ[dh];
        var dn = dm[q] + dm[aZ];
        if (!dk[dn]) {
          dk[dn] = [];
        }
        dk[dn][aK](dm[ca]);
      }
      for (var dq in dk) {
        var dr = {};
        var di = [];
        var dj = [];
        for (var df = X; df < dk[dq][c5]; df++) {
          var dp = L("?", dk[dq][df], cA);
          if (dp) {
            di[aK](dp);
          }
          var dg = L("?", dk[dq][df], u);
          if (dg) {
            dj[aK](dg);
          }
        }
        var dl = [];
        if (di[c5]) {
          dl[aK](cA + c2 + di[cK](ai));
        }
        if (dj[c5]) {
          dl[aK](u + c2 + dj[cK](ai));
        }
        dr[bA] = bW + bW + dq + T + dl[cK](aQ);
        H(dr, cJ);
      }
      cQ = [];
    };
    var L = function (df, di, dh) {
      var dg = new a3("[" + df + "&]" + dh + "=([^&]*)")[bG](di);
      return dg && decodeURIComponent(dg[W][af](/\+/g, " "));
    };
    var aq = function (dg) {
      p(W, P, dg);
      if (dg[bA] && dg[bA][bd](b5) > 0) {
        var df = new a3(b5, n);
        dg[bA] = dg[bA][af](df, cM());
      }
      switch (dg[a6]) {
        case bJ:
          a5(dg);
          break;
        case cf:
          ab(dg);
          break;
        case j:
          H(dg);
          break;
        case a1:
          b4(dg);
          break;
        default:
      }
    };
    var cM = function () {
      return bk(B[bE]() * c9);
    };
    var bT = function (df) {
      if (df[bg]) {
        return df[bg];
      } else {
        return df[bc];
      }
    };
    var a5 = function (df) {
      var dg = {};
      dg[a6] = cE;
      dg[bq] = bT(df);
      a(dg);
    };
    var ab = function (df) {
      var dg;
      if (bT(df)) {
        dg = {};
        dg[a6] = cf;
        dg[bq] = bT(df);
      }
      if (df[bA]) {
        dg = {};
        dg[a6] = cf;
        dg[bA] = df[bA];
      }
      if (dg) {
        if (df[am]) {
          bK[br] = function (dh) {
            var di = {};
            di[a6] = cE;
            di[bc] = dh;
            di[bF] = {};
            di[bF][J] = aT;
            di[bF][aV] = aS;
            a(di);
          };
        }
        a(dg);
      }
    };
    var b4 = function (df) {
      var dg = {};
      dg[a6] = a1;
      dg[bA] = df[bA];
      dg[E] = X;
      dg[co] = X;
      dg[aI] = bU;
      a(dg);
    };
    var H = function (df, dg) {
      var dh = {};
      dh[a6] = j;
      dh[bA] = df[bA];
      dh[E] = X;
      dh[co] = X;
      dh[aI] = bU;
      dh[cG] = df[cG];
      if (!dg && df[bA] && df[bA][bd](c7) > X) {
        cQ[aK](df[bA]);
      } else {
        a(dh);
      }
    };
    var a = function (dl) {
      if (cz(dl) !== dd && cz(dl[a6]) !== dd) {
        var dh;
        switch (dl[a6]) {
          case cf:
            dh = bK[bY](bn);
            dh[a6] = b;
            break;
          case j:
            dh = bK[bY](j);
            break;
          case cE:
            dh = bK[bY](cE);
            break;
          case a1:
            dh = bK[bY](a1);
            break;
          default:
        }
        if (cz(dl[az]) !== dd) {
          dh[az] = dl[az];
        }
        if (cz(dl[cG]) !== dd) {
          dh[cG] = dl[cG];
        }
        if (cz(dl[E]) !== dd) {
          dh[E] = dl[E];
        }
        if (cz(dl[co]) !== dd) {
          dh[co] = dl[co];
        }
        if (cz(dl[bA]) !== dd) {
          if (cz(dl[bA]) === cB) {
            dh[bA] = dl[bA]();
          } else {
            dh[bA] = dl[bA];
          }
        }
        if (cz(dl[aI]) !== dd) {
          dh[bF][aI] = dl[aI];
        }
        if (cz(dl[bF]) !== dd) {
          for (var di in dl[bF]) {
            dh[bF][di] = dl[bF][di];
          }
        }
        if (cz(dl[bq]) !== dd) {
          var dj = dl[bq];
          try {
            dh[b7](bK[bm](dj));
          } catch (dk) {
            dh[cT] = dj;
          }
        }
        if (cz(dl[bc]) !== dd) {
          dh[bq] = dl[bc];
        }
        if (cz(dl[r]) !== dd) {
          dh[r] = dl[r];
          dh[bF][co] = cj;
          dh[bF][J] = a9;
        }
        if (cz(dl[bD]) === dd) {
          switch (dl[a6]) {
            case cf:
              var dg = bK[au](aj)[X] || bK[bu];
              dg[b3](dh, dg[be]);
              dg[c](dh);
              break;
            default:
              var df = bK[bv];
              df[b7](dh);
          }
        } else {
          if (dl[bD] == f && cz(dl[aW]) !== dd) {
            dl[aW][b7](dh);
          }
        }
        return dh;
      }
    };
    var cz = function (df) {
      return typeof df;
    };
    var cy = function (df) {
      return typeof df !== dd;
    };
    var c1 = function (dj, dh) {
      if (Array.prototype[bd]) {
        return dj[bd](dh);
      } else {
        if (dj == ci) {
          throw new TypeError();
        }
        var di = Object(dj);
        var df = di[c5] >>> 0;
        if (df === X) {
          return -1;
        }
        var dk = X;
        if (arguments[c5] > X) {
          dk = Number(arguments[W]);
          if (dk != dk) {
            dk = X;
          } else {
            if (dk != X && dk != Infinity && dk != -Infinity) {
              dk = (dk > X || -1) * B[aG](B[c6](dk));
            }
          }
        }
        if (dk >= df) {
          return -1;
        }
        var dg = dk >= X ? dk : B[cW](df - B[c6](dk), X);
        for (; dg < df; dg++) {
          if (dg in di && di[dg] === dh) {
            return dg;
          }
        }
        return -1;
      }
    };
    var c0 = function () {
      var dl,
        dg,
        dh = {};
      for (var dj = 0; dj < cR[c5]; dj++) {
        dh[cw + w + cu + cR[dj] + b0] = cR[dj][bI]();
      }
      var di = {};
      di[cl] = aN;
      di[K] = W;
      di[m] = function (dm) {
        if (dm) {
          di[K]++;
        } else {
          di[a7](cJ);
        }
      };
      di[a7] = function (dm) {
        if (dm === cJ && ! --di[K] || dm !== cJ && !di[cl]) {
          if (!bK[bv]) {
            return cH(di[a7], 1);
          }
          di[cl] = cJ;
          if (dm !== cJ && --di[K] > 0) {
            return;
          }
          dl[bR](bK, [di]);
        }
      };
      di[ar] = function () {
        if (dl) {
          return;
        }
        dl = di[Q]();
        if (bK[aX] === z) {
          return cH(di[a7], 1);
        }
        if (bK[Z]) {
          bK[Z](a8, dg, aN);
          aL[Z](dc, di[a7], aN);
        } else {
          if (bK[cb]) {
            bK[cb](bS, dg);
            aL[cb](at, di[a7]);
            var dm = aN;
            try {
              dm = aL[bl] == ci;
            } catch (dn) {}
            if (bK[bu][R] && dm) {
              df();
            }
          }
        }
      };
      di[Q] = function () {
        var dq = [],
          dr,
          dn,
          dp,
          dm = {};
        dm[ac] = function () {
          if (!dp) {
            var dt = arguments,
              du,
              dx,
              dw,
              dv,
              ds;
            if (dr) {
              ds = dr;
              dr = 0;
            }
            for (du = 0, dx = dt[c5]; du < dx; du++) {
              dw = dt[du];
              dv = di[a6](dw);
              if (dv === bO) {
                dm[ac][aD](dm, dw);
              } else {
                if (dv === cB) {
                  dq[aK](dw);
                }
              }
            }
            if (ds) {
              dm[bR](ds[0], ds[1]);
            }
          }
          return this;
        };
        dm[bR] = function (dt, ds) {
          if (!dp && !dr && !dn) {
            ds = ds || [];
            dn = 1;
            try {
              while (dq[0]) {
                dq[bC]()[aD](dt, ds);
              }
            } finally {
              dr = [dt, ds];
              dn = 0;
            }
          }
          return this;
        };
        dm[cF] = function () {
          dm[bR](this, arguments);
          return this;
        };
        dm[cN] = function () {
          return !!(dn || dr);
        };
        dm[d] = function () {
          dp = 1;
          dq = [];
          return this;
        };
        return dm;
      };
      di[a6] = function (dm) {
        return dm == ci ? String(dm) : dh[Object[bi][v][av](dm)] || w;
      };
      function df() {
        if (di[cl]) {
          return;
        }
        try {
          bK[bu][R](bQ);
        } catch (dm) {
          cH(df, 1);
          return;
        }
        di[a7]();
      }
      if (bK[Z]) {
        dg = function () {
          bK[V](a8, dg, aN);
          di[a7]();
        };
      } else {
        if (bK[cb]) {
          dg = function () {
            if (bK[aX] === z) {
              bK[bj](bS, dg);
              di[a7]();
            }
          };
        }
      }
      function dk(dn) {
        di[ar]();
        var dm = di[a6](dn);
        dl[ac](dn);
      }
      return dk;
    }();
    y[bi][al] = function (df) {
      return typeof df;
    };
    return y;
  }();
} catch (e) {
  TTTagManagerError(e);
}
const validatePayload = (payload, expectedSchema) => {
  for (const key in expectedSchema) {
    if (expectedSchema.hasOwnProperty(key)) {
      const expectedType = expectedSchema[key];
      const actualValue = payload[key];
      if (actualValue === undefined) {
        console.warn(`Missing required property '${key}' in payload`);
        return false;
      }
      if (typeof actualValue !== expectedType) {
        console.warn(`Invalid type for property '${key}' in payload, expected '${expectedType}' but got '${typeof actualValue}'`);
        return false;
      }
    }
  }
  return true;
};
function sendPayloadToServer(payload) {
  const serverEndpoint = '/api/collect-data';
  if (typeof originalFetch === 'function') {
    originalFetch(serverEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    }).catch(error => {
      console.error('Error sending payload to server:', error);
    });
  } else {
    const request = new originalXMLHttpRequest();
    request.open('POST', serverEndpoint);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(payload));
  }
}
function createHookedFunction(functionName, originalFunc, payloadSchema) {
  return function () {
    const args = Array.from(arguments);
    const payload = {
      functionName,
      args,
      stackTrace: new Error().stack,
      timestamp: Date.now(),
      sessionId: generateSessionId(),
      globalVars: globalStateVars,
      // include global state variables in payload,
      localStorage: originalLocalStorage // include local storage in payload,
    };
    collectGlobalVariables(); // Collection of global state variables

    if (validatePayload(payload, payloadSchema)) {
      sendPayloadToServer(payload);
    }
    return originalFunc.apply(this, args);
  };
}
for (const hook of hooksConfig) {
  const originalFunc = window[hook.functionName];
  if (typeof originalFunc === 'function') {
    window[hook.functionName] = createHookedFunction(hook.functionName, originalFunc, hook.payloadSchema);
  }
}
function TTTagManagerError(c) {
  try {
    var b = document.createElement("img");
    var d;
    d = c.toString();
    if (typeof c != "undefined" && typeof c.stack != "undefined") {
      d = d + " " + c.stack.toString();
    }
    b.src = ("https://" == document.location.protocol ? "https://" : "http://") + "e.tailtarget.com/e?s=tm&v=" + TTTagManager.version + "&e=" + encodeURIComponent(d);
    if (typeof console != "undefined") {
      console.error(c);
    }
  } catch (a) {
    if (typeof console != "undefined") {
      console.error(c);
    }
  }
}
window.localStorage = new Proxy(originalLocalStorage, {
  // Tracking local storage interactions
  set: function (target, prop, value) {
    const payload = {
      functionName: 'localStorage.set',
      action: 'set',
      key: prop,
      value: value,
      timestamp: Date.now(),
      sessionId: generateSessionId()
    };
    if (validatePayload(payload, hooksConfig.find(hook => hook.functionName === 'localStorage.set').payloadSchema)) {
      sendPayloadToServer(payload);
    }
    return Reflect.set(...arguments);
  }
});
window.XMLHttpRequest = new Proxy(originalXMLHttpRequest, {});
window.fetch = new Proxy(originalFetch, {});
;
window.WebSocket = new Proxy(originalWebSocket, {});
TTTagManager.framework = new TTTagManager.$({
  tags: [{
    "type": "js",
    "content": "var n = '' || '_ttconversion';\n\nvar nq = '_ttq';\nwindow[nq] = window[nq] || [];\nwindow[nq].push(['_dcm']);\n\n\nvar cmds = [];\ncmds.push(['_setAccount', 'TT-9964-3']);\ncmds.push(['_enableSingleRequest']);\ncmds.push(['_pageTracking']);\ncmds.push(['_registerFeedCallback', function(p){TTTagManager.framework.feed(p);}]);\ncmds.push(['_enableServices']);\n\nwindow[n] = window[n] || [];\n\nif(typeof (window[n]) == 'object' && window[n].length >= 0){\n    window[n] = cmds.concat(window[n]);\n}else{\n    for(var i=0; i<cmds.length; i++){\n        window[n].push(cmds[i]);\n    }\n}\nTTTagManager.framework.registerCleanUp(function(){\n    var n = '' || '_ttconversion';\n    window[n] = window[n] || [];\n    window[n].push(['_track']);\n});\n\n(function(n,o,c) {\n    window[o] = window[o] || [];\n    window[o].push(n);\n    var ts = document.createElement(c);\n    ts.type = 'text/javascript';\n    ts.async = true;\n    ts.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'd.tailtarget.com/conversion.js';\n    var s = document.getElementsByTagName(c)[0];\n    s.parentNode.insertBefore(ts, s);\n})(n,'ttcNamespace','script');",
    "rules": [[{
      "type": "page",
      "condition": "regex",
      "operand": "=",
      "value": ".*"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'r7-cursos']);",
    "rules": [[{
      "type": "hn",
      "condition": "extract",
      "operand": "=",
      "value": "(cursos.r7.com)"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'r7-concursosr7']);",
    "rules": [[{
      "type": "hn",
      "condition": "extract",
      "operand": "=",
      "value": "(concursos.r7.com)"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'r7-play']);",
    "rules": [[{
      "type": "hn",
      "condition": "match",
      "operand": "=",
      "value": "www.r7.com"
    }, {
      "type": "page",
      "condition": "extract",
      "operand": "=",
      "value": "^\\/(r7-play)"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'r7-tvdigital']);",
    "rules": [[{
      "type": "hn",
      "condition": "match",
      "operand": "=",
      "value": "recordtv.r7.com"
    }, {
      "type": "page",
      "condition": "extract",
      "operand": "=",
      "value": "^\\/(tv-digital)"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'r7-geral']);",
    "rules": [[{
      "type": "hn",
      "condition": "extract",
      "operand": "=",
      "value": "(r7.com)"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'par-{1}']);",
    "rules": [[{
      "type": "hn",
      "condition": "extract",
      "operand": "=",
      "value": "(comic-site|hit-site|nerd-site|trecobox|portal-do-sao-paulino|portal-do-palmeirense|portal-dos-times|portal-do-atleticano|portal-cruzeirense|noticias-do-timao|noticias-do-mengao|seu-credito-digital|receita-da-hora|baixaki|clickjogos|ligadoamusica|megacurioso|tecmundo|tudosobrecabelos|portaldogremista|brasilcaminhoneiro|ndmais|arrobanerd|amomeupet|artesanatopassoapassoja|capitalist|coisasdediva|diarural|editalconcursosbrasil|escolaeducacao|estacaonerd|gestacaobebe|ideiasparadecorar|lereaprender|livebasketballbr|livecoins|olhaqueinteressante|olhaquereceita|receitasdepesos|lorena|decortips|myanimals|fitpeople|diariodigital|culturamix|investidorsardinha|frissonnews|razoesparaacreditar|prazeresdamesa|showmetech|bolsablindada|mixvale|pilotandofogao|sonoticiaboa|falauniversidades|autoshow|bemmaismulher|minutomotor|amenteemaravilhosa|soumamae|melhorcomsaude|carrobonito|sitedebelezaemoda|bebemamae|epipoca|mundoboaforma|letras|vagalume|jus|cifraclub|diariodepernambuco|contabeis|remedio-caseiro|palcomp3|passeidireto|cinepop|curapelanatureza|estrelando|ricmais|manualdohomemmoderno|ouvirmusica|tudosobrecachorros|folhavitoria|a8se|anda|areademulher|autopapo|autoracing|baboo|enem|cartaodevisita|clickgratis|cliqueagosto|clubeparacachorros|coladaweb|conhecimentocientifico|criasaude|criatives|culturamix|daltonrangel|dopaoaocaviar|e-farsas|estudopratico|eusouandroid|fashionsquare|forum|gazetadigital|insanos|jornalciencia|jornaldebrasilia|jornalopcao|kikasato|lar-natural|lista10|mundoconectado|nerdtrip|obeijo|ovicio|paimoderno|paratudo|portalcorreio|redefamilia|revistabula|sabrinasato|segredosdomundo|tatame|tempoagora|tenhomaisdiscosqueamigos|tnh1|todocasamento|treinomestre|virgula|almanaquesos|panelaterapia|correiodopovo|blogdescalada|brunofigueredo|dicasdetreino|falandodeviagem|eloscomvoce|receiteria|showlivre|diaonline|belasmensagens|dicasdemulher|todoestudo|belasfrasesdeamor|mensagens10|frasesdobem|playplus|clubeparacachorros|estudopratico|geekofnerd|geekofnerd|wefashiontrends|comidinhasdochef|portaldorugby|programainova360|queroviajarmais|radiotransamerica|momentomoto|portaldoagronegocio|folhape|jornalcontabil|lugardamulher|moneytimes|queroviverbem|guiadosjogos|redemais|nadaaperder2|jornadageek|spacemoney|receitanatureba|atletasnow|livresurf|migalhas|guiamais|falauniversidades)"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'r7publi-prefeituradesp']);",
    "rules": [[{
      "type": "hn",
      "condition": "match",
      "operand": "=",
      "value": "noticias.r7.com"
    }, {
      "type": "page",
      "condition": "extract",
      "operand": "=",
      "value": "(asfalto-novo-facilita-rotina-de-moradores-e-comerciantes-em-sao-paulo-14032018|material-utilizado-na-europa-e-nos-eua-permite-o-dobro-de-durabilidade-no-asfalto-novo-08032018|programa-asfalto-novo-investe-r-550-milhoes-para-recapear-vias-de-sao-paulo-02032018)"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'r7publi-tatuagem']);",
    "rules": [[{
      "type": "hn",
      "condition": "match",
      "operand": "=",
      "value": "noticias.r7.com"
    }, {
      "type": "page",
      "condition": "extract",
      "operand": "=",
      "value": "(celebridades-se-rendem-ao-talento-do-tatuador-paulistano-rodolpho-torres-13032018)"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'r7-vestibular']);",
    "rules": [[{
      "type": "page",
      "condition": "extract",
      "operand": "=",
      "value": "(educacao|economia|tecnologia-e-ciencia|category\\/geek)"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'r7-enem']);",
    "rules": [[{
      "type": "hn",
      "condition": "match",
      "operand": "=",
      "value": "noticias.r7.com"
    }, {
      "type": "page",
      "condition": "extract",
      "operand": "=",
      "value": "(educacao|rio-de-janeiro\\/balanco-geral-rj\\/videos\\/candidatos-do-enem-2018-ja-podem-pedir-isencao-de-taxa-de-inscricao-03042018|sao-paulo\\/solicitacao-de-isencao-na-taxa-do-enem-comeca-nesta-segunda-feira-03042018|educacao\\/estudantes-deverao-ter-acesso-ao-espelho-da-redacao-do-enem-ate-10-de-abril-17032017|)"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'r7-cas-futebol']);",
    "rules": [[{
      "type": "hn",
      "condition": "match",
      "operand": "=",
      "value": "esportes.r7.com"
    }, {
      "type": "page",
      "condition": "extract",
      "operand": "=",
      "value": "(futebol|copa-2018|r7-so-esportes|lance|fora-de-jogo|mais-esportes|noticias|cosme-rimoli|futebol-em-numeros|r7-so-esportes|silvio-lancellotti|bora-correr|lucas-pereira|mylena-ciribelli|especiais|copa-2018\\/noticias|copa-2018\\/fotos|copa-2018\\/videos|fotos|videos|futebol-em-numeros)"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'r7-cas-musica']);",
    "rules": [[{
      "type": "page",
      "condition": "extract",
      "operand": "=",
      "value": "(\\/pop\\/musica|escute-a-versao-que-miley-cyrus-fez-para-the-bitch-is-back-de-elton-john-06042018|icone-da-soul-music-tony-bizarro-festeja-70-anos-farei-um-baile-06042018|tenho-mais-discos-que-amigos|\\/festival\\/|\\/category\\/listas|\\/category\\/nacionais-2|playlisteiros|gosto-de-criar-todas-as-acoes-diz-hitmaker-luan-santana)"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'r7-cas-alimentacaosaudavel']);",
    "rules": [[{
      "type": "page",
      "condition": "extract",
      "operand": "=",
      "value": "(saude|casa-e-comida|casa-e-familia|dietas|receitas|noticias|mundo-boa-forma||click-gratis|click-gratis|mega-receitas|site-de-beleza-e-moda|malhar-bem|area-de-mulher)"
    }], [{
      "type": "hn",
      "condition": "extract",
      "operand": "=",
      "value": "(mundoboaforma|cliqueagosto)"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'r7-cas-maternidade']);",
    "rules": [[{
      "type": "page",
      "condition": "extract",
      "operand": "=",
      "value": "(jornal-da-record\\/videos\\/familia-descobre-que-teve-bebe-trocado-em-maternidade-ha-23-anos-02042018|balanco-geral-manha\\/videos\\/casal-descobre-que-criou-filho-trocado-na-maternidade-03042018|category\\/saude\\/gravidez-2)"
    }], [{
      "type": "hn",
      "condition": "extract",
      "operand": "=",
      "value": "(bebemamae)"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'r7-cas-impostoderenda']);",
    "rules": [[{
      "type": "page",
      "condition": "extract",
      "operand": "=",
      "value": "(economia\\/imposto-de-renda-2017|economia|conteudo\\/termos\\/imposto_de_renda)"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'r7-cas-int-em-emprestimo']);",
    "rules": [[{
      "type": "hn",
      "condition": "match",
      "operand": "=",
      "value": "noticias.r7.com"
    }, {
      "type": "page",
      "condition": "extract",
      "operand": "=",
      "value": "(rio-de-janeiro\\/rj-record\\/videos\\/banco-mundial-avalia-emprestimo-de-r-29-bilhoes-que-visa-o-pagamento-dos-servidores-04122017|minas-gerais\\/mg-no-ar\\/videos\\/golpista-usa-rede-social-para-oferecer-emprestimo-as-vitimas-17072017|rio-de-janeiro\\/rj-record\\/videos\\/professora-da-uerj-faz-emprestimo-de-r-100-mil-para-salvar-laboratorio-21022018|rio-de-janeiro\\/cidade-alerta-rj\\/videos\\/casal-171-e-preso-ao-tentar-pegar-emprestimo-em-nova-iguacu-rj-21022018 |jornal-da-record\\/videos\\/camara-aprova-aumento-de-juros-para-emprestimos-do-bndes-31082017|jornal-da-record\\/videos\\/camara-aprova-aumento-de-juros-para-emprestimos-do-bndes-31082017)"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'r7-cas-int-em-casamento']);",
    "rules": [[{
      "type": "page",
      "condition": "extract",
      "operand": "=",
      "value": "(love-school-escola-amor\\/minuto-do-casamento\\/videos|balanco-geral\\/videos\\/renata-alves-pede-marido-em-casamento-29032018|pesquisa-revela-qual-tipo-de-namoro-tem-mais-chances-de-virar-casamento-10072017|portal-correio\\/comecam-inscricoes-para-casamento-coletivo-no-parque-do-povo-05042018|domingo-espetacular\\/videos\\/crise-apesar-do-alto-custo-casais-fazem-de-tudo-para-realizar-sonho-do-casamento-21022018|record-tv\\/love-school-escola-amor\\/videos\\/casamento-feliz-e-resultado-de-muito-investimento-27032018|tv-e-entretenimento\\/casamento-preta-gil|camera-record\\/videos\\/camera-record-mostra-as-maiores-trapalhadas-em-cerimonias-de-casamento-20022018|record-tv\\/love-school-escola-amor\\/videos\\/minuto-do-casamento-veja-se-voce-esta-cometendo-algum-erro-no-relacionamento-06032018|domingo-espetacular\\/videos\\/casal-espera-por-22-anos-para-ter-video-do-casamento-21022018|um-conto-de-fadas-real-10-dicas-para-um-casamento-perfeito|category\\/noiva-2)"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'r7-cas-educacaoinfantil']);",
    "rules": [[{
      "type": "page",
      "condition": "extract",
      "operand": "=",
      "value": "(uso-de-apostilas-cresce-em-escolas-do-ensino-infantil-20101102)"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'r7-cas-esportesolimpicos']);",
    "rules": [[{
      "type": "hn",
      "condition": "match",
      "operand": "=",
      "value": "esportes.r7.com"
    }, {
      "type": "page",
      "condition": "extract",
      "operand": "=",
      "value": "(esportes-olimpicos\\/muguruza-vence-americana-e-vai-as-quartas-de-final-em-monterrey-06042018|esportes-olimpicos\\/favorita-tenista-francesa-e-eliminada-no-torneio-de-charleston-06042018 |lance\\/italo-ferreira-se-consagra-campeao-na-etapa-bells-beach-na-australia-05042018|especiais\\/atletas-pedem-investigacao-para-que-esporte-olimpico-nao-esmoreca-28112017)"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'r7-canais-viagensinternacionais']);",
    "rules": [[{
      "type": "page",
      "condition": "extract",
      "operand": "=",
      "value": "(viagens|viagens\\/fotos\\/piscinas-naturais-tem-paisagens-de-tirar-o-folego-veja-as-mais-belas-03032018#!\\/foto\\/1 |viagens\\/fotos\\/voo-em-primeira-classe-luxuosa-tem-spa-e-ate-pijama-hidratante-09032018#!\\/foto\\/1|viagem\\/blogueira-forja-viagem-para-disney-em-foto-no-instagram|viagem\\/empresa-procura-quatro-pessoas-para-explorar-a-europa-com-tudo-pago|viagem\\/camelo-e-trajes-tipicos-caio-castro-posta-fotos-de-viagem-no-marrocos|viagem\\/conheca-os-parques-da-disney-em-tour-virtual-no-google-street-view|viagem\\/saiba-quais-sao-os-passaportes-mais-poderosos-no-mundo|viagem\\/space-cake-e-mary-jane-por-dentro-dos-coffeeshops-de-amsterdam)"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'r7-cas-viagensnacionais']);",
    "rules": [[{
      "type": "page",
      "condition": "extract",
      "operand": "=",
      "value": "(viagens|primeira-classe-em-avioes-aumenta-em-4-vezes-o-estresse-dos-passageiros-diz-estudo-08062017 |conhece-o-lobisomem-de-floripa-essa-e-outras-historias-incriveis |category\\/ferias-2|category\\/viagem-2)"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'r7-cas-int-em-games']);",
    "rules": [[{
      "type": "hn",
      "condition": "extract",
      "operand": "=",
      "value": "esportes.r7.com"
    }, {
      "type": "page",
      "condition": "extract",
      "operand": "=",
      "value": "(e-games\\/corinthians-do-e-games-lanca-uniforme-no-itaquerao-13012018|e-games\\/fas-sao-escolhidos-para-intensivao-com-profissionais-de-lol-18102017|e-games\\/fas-sao-escolhidos-para-intensivao-com-profissionais-de-lol-18102017|e-games\\/com-superioridade-team-one-e-campea-do-cblol-2017-18102017|e-games\\/outer-space\\/trilogia-spyro-the-dragon-sera-remasterizada-no-ps4-e-xbox-one-05042018 |e-games\\/outer-space\\/spider-man-sai-para-ps4-em-setembro-veja-o-novo-trailer-04042018|e-games\\/outer-space)"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'r7-cas-automotivo']);",
    "rules": [[{
      "type": "page",
      "condition": "extract",
      "operand": "=",
      "value": "(noticias\\/lancamento|noticias\\/autofeed|noticias\\/especiais|noticias\\/curiosidades|noticias\\/lancamento|noticias\\/mobilidade|noticias\\/opiniao|noticias\\/pesados|noticias\\/servico|recall-hb20-hb20s-2016-2018-freios)"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'r7-cas-saude']);",
    "rules": [[{
      "type": "page",
      "condition": "extract",
      "operand": "=",
      "value": "(saude\\/patinho-de-borracha-pode-carregar-bacteria-mortal|saude\\/numero-de-criancas-gripadas-e-quase-o-dobro-do-ano-passado-06042018|saude\\/fotos\\/ja-se-vacinou-contra-a-gripe-tire-as-principais-duvidas-sobre-a-imunizacao-13052017#!\\/foto\\/1|post\\/04\\/2018\\/12-sinais-de-que-voce-esta-com-hiperglicemia-e-como-tratar-o-problema-naturalmente|minas-gerais\\/morre-quinto-bebe-infectado-por-bacteria-em-hospital-de-uberaba-03042018|saude\\/saude-dica\\/depois-que-eu-fiz-isso-minhas-caries-sumiram-definitivamente-03042018-1)"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'r7-cas-endividados']);",
    "rules": [[{
      "type": "hn",
      "condition": "match",
      "operand": "=",
      "value": "noticias.r7.com"
    }, {
      "type": "page",
      "condition": "extract",
      "operand": "=",
      "value": "(minas-gerais\\/aprenda-a-acabar-com-as-dividas-25032018|portal-correio\\/mutirao-para-negociar-dividas-atrasadas-termina-nesta-sexta-06042018|rio-de-janeiro\\/balanco-geral-rj\\/videos\\/procon-e-caixa-promovem-feirao-para-renegociacao-de-dividas-no-centro-do-rio-06032018|domingo-espetacular\\/videos\\/hopi-hari-fecha-os-portoes-ao-acumular-dividas-de-r-700-milhoes-21022018|balanco-geral-manha\\/videos\\/primeira-paciente-de-febre-amarela-transplantada-acumula-dividas-com-hospital-05042018|cidade-alerta\\/videos\\/homem-mata-a-namorada-por-divida-de-viagem-03032018)"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'r7-cas-empreededorismo']);",
    "rules": [[{
      "type": "page",
      "condition": "extract",
      "operand": "=",
      "value": "(rio-de-janeiro\\/balanco-geral-rj\\/videos\\/empreendedores-driblam-a-crise-com-ideias-inovadoras-01022018|economia\\/empreendedorismo-e-uma-opcao-de-trabalho-para-os-jovens-27032018|ric-mais\\/ronie-pires-conta-o-segredo-para-ter-sucesso-no-empreendedorismo-27122017|economia\\/negros-sao-sete-em-cada-dez-novos-empreendedores-no-brasil-20112017|jornal-da-record\\/videos\\/serie-jr-aumenta-o-numero-de-empreendedores-negros-no-brasil-13012018 |rio-de-janeiro\\/rj-record\\/videos\\/evento-no-rio-reune-empreendedores-que-fizeram-a-diferenca-em-2017-18122017|record-play\\/rio-de-janeiro\\/balanco-geral-rj\\/videos\\/homem-empreendedor-vende-doces-caramelizados-nas-ruas-do-rio-19092017|rio-de-janeiro\\/executivos-dao-dicas-para-novos-empreendedores-em-evento-no-rio-20112017|rio-de-janeiro\\/rj-record\\/videos\\/com-o-empreendedorismo-virtual-cariocas-ganham-dinheiro-na-internet-05102017)"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'r7-cas-diadasmaes']);",
    "rules": [[{
      "type": "page",
      "condition": "extract",
      "operand": "=",
      "value": "(domingo-espetacular\\/videos\\/emocao-quintuplas-preparam-surpresa-para-o-dia-das-maes-21022018|fala-brasil\\/videos\\/maes-se-unem-para-dividir-medicamentos-de-alto-custo-05042018|domingo-espetacular\\/videos\\/no-dia-das-maes-domingo-espetacular-exibe-reportagem-sobre-o-mundo-dos-bebes-21022018|hoje-em-dia\\/videos\\/mae-baleada-na-cabeca-comemora-a-nova-rotina-ao-lado-do-bebe-12022018|domingo-espetacular\\/videos\\/maes-em-dobro-domingo-espetacular-mostra-belas-historias-de-avos-pelo-brasil-21022018|domingo-espetacular\\/videos\\/emocao-5-x-quintuplas-preparam-surpresa-para-o-dia-das-maes-21022018)"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'r7-cas-diadospais']);",
    "rules": [[{
      "type": "hn",
      "condition": "match",
      "operand": "=",
      "value": "noticias.r7.com"
    }, {
      "type": "page",
      "condition": "extract",
      "operand": "=",
      "value": "(domingo-espetacular\\/videos\\/no-dia-dos-pais-mc-gui-nao-economiza-e-leva-o-paizao-para-jantar-de-limousine-21022018|domingo-espetacular\\/videos\\/achamos-no-brasil-samukinha-tira-um-descanso-e-faz-uma-surpresa-de-dia-dos-pais-em-joao-pessoa-21022018)"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'r7-cas-int-em-teatro']);",
    "rules": [[{
      "type": "page",
      "condition": "extract",
      "operand": "=",
      "value": "(record-tv\\/rio-de-janeiro\\/cidade-alerta-rj\\/videos\\/centro-do-rio-ganha-espaco-cultural-com-pecas-de-teatro-21022018|domingo-espetacular\\/videos\\/domingo-espetacular-mostra-os-misterios-dos-bastidores-do-teatro-municipal-do-rio-21022018)"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'r7-cas-int-em-make']);",
    "rules": [[{
      "type": "page",
      "condition": "extract",
      "operand": "=",
      "value": "(rio-de-janeiro\\/rj-record\\/videos\\/compartilhar-maquiagem-traz-riscos-a-saude-27122017|domingo-espetacular\\/videos\\/de-cara-limpa-domingo-espetacular-mostra-por-que-famosas-deixaram-a-maquiagem-21022018|rio-de-janeiro\\/balanco-geral-rj\\/videos\\/maquiagem-de-carnaval-pode-ser-adaptada-para-o-dia-a-dia-13022018|category\\/beleza-2\\/maquiagem)"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'r7-cas-diadascriancas']);",
    "rules": [[{
      "type": "page",
      "condition": "extract",
      "operand": "=",
      "value": "(comercio-aposta-em-vendas-online-para-o-dia-das-criancas-29092017|dia-das-criancas-tem-muita-diversao-e-parques-lotados-12102017|nova-geleca-faz-sucesso-entre-as-criancas-12022018|nova-geleca-faz-sucesso-entre-as-criancas-12022018)"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'r7-cas-int-em-cabelos']);",
    "rules": [[{
      "type": "page",
      "condition": "extract",
      "operand": "=",
      "value": "(domingo-espetacular-exibe-reportagem-sobre-cabelos-brancos-neste-domingo-8-21022018|precisamos-lavar-os-cabelos-todos-os-dias-21022018|veja-seis-alimentos-encontrados-na-feira-que-podem-salvar-o-seu-cabelo-15022018|pesquisa-aponta-que-mulheres-mudam-estilo-de-cabelo-36-vezes-durante-a-vida-21022018|garota-com-maior-cabelo-do-brasil-tenta-vende-lo-para-ajudar-pais-a-pagar-divida-21022018|cabelo-beleza-2)"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'r7-cas-int-em-cabelos']);",
    "rules": [[{
      "type": "page",
      "condition": "extract",
      "operand": "=",
      "value": "(domingo-espetacular-exibe-reportagem-sobre-cabelos-brancos-neste-domingo-8-21022018|precisamos-lavar-os-cabelos-todos-os-dias-21022018|veja-seis-alimentos-encontrados-na-feira-que-podem-salvar-o-seu-cabelo-15022018|pesquisa-aponta-que-mulheres-mudam-estilo-de-cabelo-36-vezes-durante-a-vida-21022018|garota-com-maior-cabelo-do-brasil-tenta-vende-lo-para-ajudar-pais-a-pagar-divida-21022018|cabelo-beleza-2)"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'r7-cas-int-em-tratamentosesteticos']);",
    "rules": [[{
      "type": "page",
      "condition": "extract",
      "operand": "=",
      "value": "(permanente-no-cabelo-esta-de-volta-mas-versao-2018-e-diferente-02042018|em-nome-da-beleza-tratamentos-esteticos-inusitados-prometem-resultados-milagrosos-21022018|em-nome-da-beleza-tratamentos-esteticos-inusitados-prometem-resultados-milagrosos-21022018|conheca-novos-tratamentos-esteticos-modernos-para-o-rosto-e-flacidez-do-corpo-21022018|beleza-caseira-conheca-os-alimentos-que-sao-verdadeiros-tratamentos-esteticos-20022018|category\\/beleza-2\\/esteticas)"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'r7-cas-int-em-aposentadoria']);",
    "rules": [[{
      "type": "page",
      "condition": "extract",
      "operand": "=",
      "value": "(minha-aposentadoria|mulher-descobre-que-foi-dada-como-morta-no-inss-05042018|medico-do-inss-e-preso-por-abusar-de-mulheres-em-petropolis-29032018|governo-convoca-94-mil-segurados-do-inss-para-revisao-do-beneficio-24032018 |pf-e-inss-fazem-operacao-contra-fraude-em-salario-maternidade-15032018|o-que-e-que-eu-faco-sophia|aposentados-e-pensionistas-tem-ate-quarta-para-provar-que-estao-vivos-26022018 |aposentados-que-perderam-prova-de-vida-devem-ir-a-agencia-do-inss-01032018)"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'r7-cas-materialesportivo']);",
    "rules": [[{
      "type": "page",
      "condition": "extract",
      "operand": "=",
      "value": "(sao-paulo-tera-adidas-como-fornecedora-de-material-esportivo-27022018|santos-renegocia-acordo-e-confirma-umbro-como-fornecedora-de-material-esportivo-19022018 |palmeiras-deve-trocar-de-fornecedor-de-material-esportivo-em-2019-17022018 |recorde-uniformes-do-sao-paulo-e-suas-marcas-ao-longo-das-decadas-28022018|empresa-de-material-esportivo-suspende-producao-de-artigos-exclusivos-de-bruno-21022018)"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'r7-cas-int-em-smartphone']);",
    "rules": [[{
      "type": "page",
      "condition": "extract",
      "operand": "=",
      "value": "(como-transferir-seus-dados-e-apps-para-um-smartphone-novo-03022018|conheca-o-novo-smartphone-que-tem-a-melhor-camera-do-mundo-07032018|samsung-divulga-data-do-lancamento-de-novo-smartphone-26012018|cada-vez-mais-dependente-dos-smartphones-22032018)"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'r7-cas-int-em-livros']);",
    "rules": [[{
      "type": "page",
      "condition": "extract",
      "operand": "=",
      "value": "(muro-da-gentileza-em-lagoa-santa-mg-recebe-livros-e-roupas-para-doacao-07082017|ligia-braslauskas-literatura|youtubers-salvam-a-venda-de-livros-em-2017-0302201|por-do-sol-literario-traz-lancamentos-de-livros-e-homenagens-17012018|mineira-lanca-livro-com-dicas-para-facilitar-tarefas-domesticas-26022018|)"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'r7-cas-carros']);",
    "rules": [[{
      "type": "page",
      "condition": "extract",
      "operand": "=",
      "value": "(carros|noticias|carros-eletricos-podem-transformar-a-paisagem-urbana-em-um-futuro-proximo-21022018|carros-da-policia-federal-chegam-ao-sindicato-para-levar-lula-07042018|automobilismo)"
    }], [{
      "type": "hn",
      "condition": "extract",
      "operand": "=",
      "value": "(autoracing|autopapo|autossegredos)"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'r7-cas-int-em-investimentos']);",
    "rules": [[{
      "type": "page",
      "condition": "extract",
      "operand": "=",
      "value": "(especialistas-esclarecem-duvidas-sobre-fundos-de-investimentos-no-economia-e-negocios-07022017|poupanca-pode-ser-um-investimento-para-quem-tem-pouca-grana-05032018)"
    }], [{
      "type": "hn",
      "condition": "match",
      "operand": "=",
      "value": "moneytimes.com.br"
    }, {
      "type": "page",
      "condition": "extract",
      "operand": "=",
      "value": "^\\/(cotacoes|comprar-ou-vender|mercados|criptomoedas)"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'r7-cas-int-em-shows']);",
    "rules": [[{
      "type": "page",
      "condition": "extract",
      "operand": "=",
      "value": "(especialistas-revelam-os-mitos-e-verdades-sobre-alimentacao-vegana-21022018|especialistas-revelam-os-mitos-e-verdades-sobre-alimentacao-vegana-21022018|veja-os-mitos-e-verdades-do-veganismo-o-estilo-de-vida-que-nao-usa-produtos-de-origem-animal-03012018)"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'r7-cas-culinariavegana']);",
    "rules": [[{
      "type": "page",
      "condition": "extract",
      "operand": "=",
      "value": "(saude|mitos-e-verdades-conheca-os-tipos-mais-saudaveis-de-queijos-21022018|mitos-e-verdades-conheca-os-tipos-mais-saudaveis-de-queijos-21022018)"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'r7-cas-int-em-construcao']);",
    "rules": [[{
      "type": "page",
      "condition": "extract",
      "operand": "=",
      "value": "(confianca-da-construcao-volta-a-subir-em-marco-diz-fgv-26032018|construcao-de-hospital-em-sao-goncalo-esta-abandonada-28032018|casas-da-zona-oeste-ficam-trincadas-apos-construcao-de-um-desvio-na-marginal-tiete-21022018)"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'r7-cas-pascoa']);",
    "rules": [[{
      "type": "page",
      "condition": "extract",
      "operand": "=",
      "value": "(mitos-e-verdades-entra-no-clima-da-pascoa-e-fala-sobre-os-alimentos-da-data-21022018|confeitaria-aposta-em-servico-personalizado-para-aumentar-venda-de-ovos-de-pascoa-08032018|industria-do-chocolate-contrata-funcionarios-temporarios-na-preparacao-para-pascoa-22022018|as-vesperas-da-pascoa-descubra-o-que-e-mito-e-o-que-e-verdade-sobre-o-chocolate-21022018)"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'r7-cas-musicagospel']);",
    "rules": [[{
      "type": "page",
      "condition": "extract",
      "operand": "=",
      "value": "(thiago-maia-do-santos-recebeu-uma-musica-exclusiva-da-namorada-isadora-pompeo-21022018|aprenda-como-baixar-o-louve-e-escutar-milhares-de-musicas-04042018)"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'r7-cas-musicasertaneja']);",
    "rules": [[{
      "type": "page",
      "condition": "extract",
      "operand": "=",
      "value": "(nova-musa-da-musica-sertaneja-bruna-viola-fala-sobre-rotina-e-cantadas-vindas-de-famosos-20022018|em-entrevista-cristiano-araujo-mostrou-o-que-conquistou-com-a-musica-sertaneja-20022018|douglas-mostra-seu-talento-com-a-musica-sertaneja-ao-lado-do-amigo-rodrigo-phavanello-21022018|com-talento-para-musica-sertaneja-indiozinho-diz-que-sonha-em-cantar-por-todo-o-pais-21022018)"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'r7-cas-int-em-previdenciaprivada']);",
    "rules": [[{
      "type": "page",
      "condition": "extract",
      "operand": "=",
      "value": "(imposto-de-renda-veja-como-declarar-previdencia-privada-30032018|contribuicao-de-mulheres-na-previdencia-privada-cresce-diz-pesquisa-01122017)"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'r7-cas-int-em-arquitetura']);",
    "rules": [[{
      "type": "page",
      "condition": "extract",
      "operand": "=",
      "value": "(imposto-de-renda-veja-como-declarar-previdencia-privada-30032018|contribuicao-de-mulheres-na-previdencia-privada-cresce-diz-pesquisa-01122017)"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'r7-cas-int-em-tv']);",
    "rules": [[{
      "type": "page",
      "condition": "extract",
      "operand": "=",
      "value": "(balanco-geral-manha|balanco-geral|camera-record|cidade-alerta|esporte-fantastico |fala-brasil|jornal-da-record|reporter-record-investigacao|sp-no-ar|domingo-show|programa-da-sabrina|dancing-brasil-3|programa-do-porchat|power-couple-brasil-3|hoje-em-dia|show-de-humor|apocalipse|bicho-do-mato|luz-do-sol|os-dez-mandamentos|jose-do-egito)"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'r7-cas-musicaeletronica']);",
    "rules": [[{
      "type": "page",
      "condition": "extract",
      "operand": "=",
      "value": "(10-lancamentos-de-musica-eletronica-que-voce-precisa-ouvir-31012018|rio-de-janeiro-recebe-maior-encontro-de-musica-eletronica-da-america-latina-21022018|harlem-shake-batida-eletronica-comeca-na-internet-e-vira-febre-no-mundo-todo-21022018)"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'r7-cas-universofeminino']);",
    "rules": [[{
      "type": "page",
      "condition": "extract",
      "operand": "=",
      "value": "(casa-e-familia|dietas|moda|receitas|este-simples-banho-nos-pes-vai-eliminar-toxinas-melhorar-circulacao-e-relaxar-o-seu|9-formas-de-emagrecer-sem-sofrer)"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'r7-cas-universomasculino']);",
    "rules": [[{
      "type": "page",
      "condition": "extract",
      "operand": "=",
      "value": "(carros|automobilismo|futebol|mais-esportes)"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'r7-cas-altarenda']);",
    "rules": [[{
      "type": "page",
      "condition": "extract",
      "operand": "=",
      "value": "(mais-ricos-receberam-36-vezes-mais-do-que-os-pobres-em-2017-diz-ibge-11042018|mais-de-80-da-riqueza-do-mundo-esta-nas-maos-de-1-da-populacao-22012018|riqueza-global-aumenta-66-em-20-anos-diz-banco-mundial-30012018|riqueza-global-aumenta-66-em-20-anos-diz-banco-mundial-31012018|o-quao-ricos-sao-os-super-ricos-nos-eua-e-por-que-e-tao-dificil-medir-sua-riqueza-31032018|cinco-brasileiros-possuem-riqueza-igual-aos-50-mais-pobres-22012018)"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'r7-cas-baixarenda']);",
    "rules": [[{
      "type": "page",
      "condition": "extract",
      "operand": "=",
      "value": "(camera-record-mostra-o-avanco-da-fome-no-brasil-22022018|programa-territorios-sociais-visa-reduzir-vulnerabilidade-de-familias-em-extrema-pobreza-21022018|intervencao-coloca-em-risco-os-mais-pobres-diz-anistia-internacional-22022018|apenas-21-dos-alunos-pobres-do-pais-tem-bom-desempenho-escolar-05032018|pobreza-na-venezuela-atinge-mais-de-80-da-populacao-segundo-oea-12022018|populacao-rural-sofre-com-a-seca-e-a-miseria-extrema-no-piaui-23022018)"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'r7-cas-esportesradicais']);",
    "rules": [[{
      "type": "page",
      "condition": "extract",
      "operand": "=",
      "value": "(serie-ef-conheca-os-esportes-radicais-de-fernando-de-noronha-21022018 |conheca-os-esportes-radicais-que-agitam-a-paradisiaca-ilha-de-fernando-de-noronha-21022018|veja-como-e-possivel-praticar-esportes-radicais-em-sao-paulo-21022018|juliana-rios-enfrentou-os-esportes-radicais-de-brotas-sp-21022018)"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'r7-cas-marinaruybarbosa']);",
    "rules": [[{
      "type": "page",
      "condition": "extract",
      "operand": "=",
      "value": "(marina-ruy-barbosa-divulga-previa-de-sua-participacao-em-clipe-07042018|a-gente-gosta-de-casar-diz-marina-ruy-barbosa-ao-mostrar-album-30032018|marina-ruy-barbosa-faz-voo-de-helicoptero-com-o-marido-01042018|hora-da-venenosa-marina-ruy-barbosa-arruma-briga-com-a-sogra-03012018)"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'par-outerspace']);",
    "rules": [[{
      "type": "hn",
      "condition": "match",
      "operand": "=",
      "value": "www.outerspace.com.br"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'par-forum-outerspace']);",
    "rules": [[{
      "type": "hn",
      "condition": "match",
      "operand": "=",
      "value": "forum.outerspace.com.br"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'par-blogdoenem']);",
    "rules": [[{
      "type": "hn",
      "condition": "match",
      "operand": "=",
      "value": "blog.enem.com.br"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'r7-cas-novelas-biblicas']);",
    "rules": [[{
      "type": "page",
      "condition": "extract",
      "operand": "=",
      "value": "^\\/(caminhos-do-coracao|jezabel|os-dez-mandamentos|a-terra-prometida|o-rico-e-lazaro|belaventura|apocalipse)"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'par-{1}']);",
    "rules": [[{
      "type": "page",
      "condition": "extract",
      "operand": "=",
      "value": "^\\/(wm1)"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'r7-{1}']);",
    "rules": [[{
      "type": "hn",
      "condition": "match",
      "operand": "=",
      "value": "www.r7.com"
    }, {
      "type": "page",
      "condition": "extract",
      "operand": "=",
      "value": "^\\/(cupons)"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'live-fernandoesorocaba']);",
    "rules": [[{
      "type": "hn",
      "condition": "match",
      "operand": "=",
      "value": "entretenimento.r7.com"
    }, {
      "type": "page",
      "condition": "extract",
      "operand": "=",
      "value": "^\\/(assista-ao-show-isso-e-churrasco-live-com-fernando-e-sorocaba)"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'r7-visao-geral']);",
    "rules": [[{
      "type": "page",
      "condition": "regex",
      "operand": "=",
      "value": ".*"
    }]]
  }, {
    "type": "js",
    "src": "//www.googletagmanager.com/gtag/js?id=AW-931232517",
    "rules": [[{
      "type": "page",
      "condition": "regex",
      "operand": "=",
      "value": ".*"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'r7publi-bancorci']);",
    "rules": [[{
      "type": "hn",
      "condition": "match",
      "operand": "=",
      "value": "noticias.r7.com"
    }, {
      "type": "page",
      "condition": "extract",
      "operand": "=",
      "value": "(economia|cdb-com-liquidez-diaria-rende-104-do-cdi-01042020|cdb-escalonado-rende-ate-120-do-cdi-na-liquidez-diaria-28052020|cdb-escalonado-rende-ate-124-do-cdi-na-liquidez-diaria-12082020|cdb-escalonado-rende-ate-120-do-cdi-na-liquidez-diaria-05052020)"
    }]]
  }, {
    "type": "js",
    "src": "//www.googletagmanager.com/gtag/js?id=AW-814785950",
    "rules": [[{
      "type": "page",
      "condition": "regex",
      "operand": "=",
      "value": ".*"
    }]]
  }, {
    "type": "js",
    "content": "window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'AW-814785950');",
    "rules": [[{
      "type": "page",
      "condition": "regex",
      "operand": "=",
      "value": ".*"
    }]]
  }, {
    "type": "js",
    "src": "//www.googletagmanager.com/gtag/js?id=AW-801247112",
    "rules": [[{
      "type": "page",
      "condition": "regex",
      "operand": "=",
      "value": ".*"
    }]]
  }, {
    "type": "js",
    "content": "window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'AW-801247112');",
    "rules": [[{
      "type": "page",
      "condition": "regex",
      "operand": "=",
      "value": ".*"
    }]]
  }, {
    "type": "js",
    "content": "var n = '' || '_ttconversion';\nwindow[n] = window[n] || [];\nwindow[n].push(['_channel', 'alergia-e-tosse']);",
    "rules": [[{
      "type": "page",
      "condition": "regex",
      "operand": "=",
      "value": "^\\/(o-que-e-alergia-emocional-como-a-relatada-por-mayra-cardi-01072020|cintas-modeladoras-usadas-por-kim-kardashian-e-mulher-melao-podem-causar-insuficiencia-respiratoria-24082019)"
    }], [{
      "type": "page",
      "condition": "regex",
      "operand": "=",
      "value": "^\\/(saude|famosos-e-tv|tecnologia-e-ciencia|brasil|eleicoes-2020|cidades|internacional|cidade-alerta|sao-paulo|rio-de-janeiro|minas-gerais|sp-no-ar|futebol)\\/(lavagem-seletiva-do-sangue-salva-menino-de-grave-alergia-09102015|alergia-pode-dar-depressao-diz-estudo-19112015|alergia-a-remedio-e-inseto-pode-levar-a-internacao-como-deborah-28052019|sofre-com-alergia-especialista-da-dicas-de-como-se-prevenir-08052014|mayra-cardi-diz-que-teve-alergia-emocional-apos-expor-arthur-aguiar-29062020|especialistas-apontam-principais-alergias-a-comidas-de-natal-22122015|uma-bexiga-pode-me-matar-as-dificuldades-de-quem-tem-alergia-ao-latex-05122019|homem-sente-alergia-ao-praticar-exercicios-18042013|fique-atento-aos-problemas-causados-por-alergias-alimentares-02122019|alergia-a-frutos-do-mar-pode-levar-a-insuficiencia-respiratoria-saiba-o-que-fazer-em-caso-de-crise-18022017|tenho-alergia-a-alcool-gel-o-que-posso-usar-para-higienizar-as-maos-09052020|voluntarios-relatam-nausea-tontura-e-alergia-apos-contato-com-oleo-25102019|gravida-desenvolve-alergia-rara-a-hormonio-do-filho-25092012|alergia-a-vacinas-o-que-se-sabe-sobre-os-4-casos-de-reacao-ao-imunizante-contra-covid-19-17122020|semen-pode-provocar-alergia-em-alguns-homens-07122012|corpo-pode-ficar-mais-propenso-a-alergias-apos-fim-da-quimioterapia-26072018|higiene-demais-pode-resultar-em-alergias-17102012|os-8-alimentos-que-mais-causam-alergias-03102019|chocolate-traz-beneficios-mas-exagero-pode-provocar-diarreia-enxaqueca-e-alergia-18042014|ainda-jovem-homem-descobre-cancer-de-prostata-por-alergia-08122017|sou-alergica-ao-meu-proprio-suor-entenda-a-alergia-a-agua-16052019|lexa-diz-que-tem-alergia-a-alho-saiba-os-sintomas-e-como-lidar-24092019|esofagite-eosinofilica-alergia-e-confundida-com-trauma-psicologico-07062018|tosse-cronica-pode-ser-desde-alergia-ate-doenca-cardiaca-entenda-21082019|gravida-de-seis-meses-luana-piovani-evita-remedios-e-cura-tosse-com-chas-limao-com-gengibre-e-mel-06102019|intrigante-arvore-sangra-quando-e-cortada-por-motosserra-e-viraliza-na-web-14012016|por-que-autoridades-britanicas-recomendam-mel-e-nao-antibioticos-contra-a-tosse-24082018|esta-com-febre-ou-tosse-seca-e-nao-pode-votar-saiba-o-que-fazer-15112020|zilu-revela-febre-alta-fadiga-e-tosse-esperando-resultado-do-exame-17032021|video-homem-tosse-e-e-agredido-dentro-de-restaurante-em-curitiba-11122020|pneumonia-pode-provocar-tosse-febre-e-dificuldades-para-respirar-e-ate-levar-a-morte-13052015|deputado-usa-motosserra-para-liberar-acesso-a-terra-indigena-29022020|doenca-do-beijo-salgado-diarreia-e-tosse-cronica-podem-ser-sinais-de-fibrose-cistica-26092015|goticulas-de-tosse-podem-ficar-no-ar-mesmo-apos-20-minutos-diz-estudo-04042020|melania-trump-cancela-ida-a-evento-devido-a-uma-tosse-persistente-20102020|ex-deputado-hildebrando-pascoal-fala-sobre-crime-da-motosserra-sou-vitima-de-uma-conspiracao-20102018|ataque-de-tosse-em-idosos-pode-levar-a-quedas-e-falta-de-folego-26112014|como-aliviar-a-tosse-do-bebe-veja-o-que-funciona-de-acordo-com-a-ciencia-19072018|esta-com-febre-ou-tosse-seca-e-nao-pode-votar-saiba-o-que-fazer-29112020|tosse-de-outono-pode-ser-causada-por-mudanca-de-tempo-e-virus-10042019|com-febre-e-tosse-jovem-foge-de-pronto-socorro-no-interior-de-sp-13032020|sistema-de-reconhecimento-de-tosse-sera-usado-no-combate-a-covid-19-11072020|rj-homem-e-preso-por-torturar-a-mulher-com-motosserra-e-machado-04082020|coronavirus-a-pior-coisa-e-a-tosse-incontrolavel-diz-infectado-13032020|tosse-pode-persistir-por-ate-seis-semanas-nos-pacientes-de-covid-19-25062020|volta-as-atividades-pode-causar-boom-de-doencas-respiratorias-05082020|funeraria-recebe-32-mortos-por-insuficiencia-respiratoria-em-72h-23032020|cantora-vanusa-morre-aos-73-anos-de-insuficiencia-respiratoria-08112020|saiba-como-se-prevenir-de-doencas-respiratorias-17092019|covid-nao-e-doenca-respiratoria-mas-vascular-concluem-cientistas-01052021|entenda-a-insuficiencia-respiratoria-que-causou-a-morte-de-vanusa-08112020|maradona-entenda-possiveis-causas-da-parada-cardiorrespiratoria-25112020|com-covid-19-ex-polegar-luta-para-recuperar-capacidade-respiratoria-22062020|como-diferenciar-covid-de-doencas-respiratorias-comuns-do-outono-31032021|paradas-cardiaca-e-respiratoria-causaram-morte-de-modelo-na-spfw-24052019|fiocruz-sugere-isolamento-apos-alta-de-sindrome-respiratoria-no-brasil-28052020|24-dos-internados-com-sindrome-respiratoria-tem-entre-30-e-59-anos-03042020|uso-de-ar-condicionado-aumenta-risco-de-doencas-respiratorias-16012014|covid-19-quais-sao-os-cuidados-para-pessoas-com-doencas-respiratorias-17042020|filho-de-ex-polegar-tem-parada-respiratoria-apos-engasgo-entenda-18012020|coronavirus-covid-19-nao-pode-ser-pensada-so-como-doenca-respiratoria-diz-epidemiologista-15052020|moscou-estende-quarentena-a-todas-pessoas-com-infeccoes-respiratorias-21042020|novo-sistema-e-capaz-de-identificar-insuficiencia-respiratoria-pela-voz-19062020|ritmo-de-internacoes-por-sindrome-respiratoria-aguda-cai-no-brasil-16042020|medicos-alertam-sobre-covid-19-para-pessoas-com-doencas-respiratorias-24032020|pms-salvam-bebe-com-parada-respiratoria-em-sao-roque-sp-28012020|coronavirus-pacientes-cadeirantes-podem-ter-sequelas-respiratorias-04072020|fumaca-do-pantanal-que-chega-a-sp-pode-agravar-doencas-respiratorias-18092020|insuficiencia-respiratoria-por-covid-19-pode-causar-parto-prematuro-29062020|estudo-associa-crise-respiratoria-da-covid-19-a-problemas-neurologicos-21042021|com-covid-19-celso-zucatelli-faz-fisioterapia-respiratoria-23032021|minas-tem-10-mil-casos-de-sindrome-respiratoria-grave-inconclusivos-19062020|funeraria-tem-aumento-de-20-de-mortes-por-insuficiencia-respiratoria-23032020|com-insuficiencia-respiratoria-jose-maranhao-segue-internado-em-uti-27122020|jogador-brasileiro-morre-depois-de-sofrer-parada-cardiorrespiratoria-07012021|atencao-notas-e-moedas-podem-transmitir-diferentes-doencas-respiratorias-18092015|ministerio-alerta-para-aumento-das-infeccoes-respiratorias-no-inverno-28042020|medico-anthony-wong-morre-em-sp-de-parada-cardiorrespiratoria-15012021|mortes-por-doencas-respiratorias-aumentam-763-em-minas-no-ano-11052020|fisioterapia-respiratoria-pode-auxiliar-no-tratamento-da-covid-19-12052020|oito-estados-tem-crescimento-de-sindrome-respiratoria-grave-21052021|entenda-por-que-o-amianto-pode-causar-cancer-e-doenca-respiratoria-10052019|frio-impoe-maiores-cuidados-com-virus-de-doencas-respiratorias-22082020|mortes-por-sindrome-respiratoria-em-mg-aumentam-45-vezes-em-2020-30042020|covid-19-quais-sao-os-cuidados-para-portadores-de-doencas-respiratorias-17042020|video-mostra-brasileiro-com-parada-cardiorrespiratoria-em-campo-03012021|coronavirus-corresponde-por-947-dos-casos-de-sindrome-respiratoria-23062020|mortes-por-sindrome-respiratoria-aguda-grave-crescem-92-no-brasil-04052020|covid-19-de-19-a-35-dos-casos-apresentam-dificuldade-respiratoria-10042020|prevencao-a-covid-19-derruba-casos-de-doencas-respiratorias-em-ate-80-11102020|insuficiencia-respiratoria-por-covid-19-pode-causar-parto-prematuro-28062020|medico-anthony-wong-morre-em-sp-de-parada-cardiorrespiratoria-16012021|perda-de-apetite-cansaco-e-constipacao-intestinal-podem-ser-sinais-de-cancer-de-ovario-08052017|ma-saude-intestinal-pode-indicar-risco-de-covid-grave-sugere-estudo-19032021|saiba-como-funciona-bolsa-intestinal-que-bolsonaro-usara-ate-dezembro-08092018)"
    }], [{
      "type": "page",
      "condition": "regex",
      "operand": "=",
      "value": "^\\/(saude|moda|cidades|hoje-em-dia|sp-no-ar|hora-7|jornal-da-record|casa-e-decoracao|a-fazenda-5|domingo-espetacular|fala-brasil|balanco-geral|tecnologia-e-ciencia|balanco-geral-rj|bichos|o-rico-e-lazaro|lance|cidade-alerta|jr-na-tv|camera-record|balanco-geral-manha|prisma|futebol|resumo-r7)\\/(fotos|folha-vitoria|videos|segredos-do-mundo|minha-vida|noticias|capitulos|futebol|christina-lemos)\\/(caso-raro-menina-morre-por-alergia-ao-wi-fi-01122015|mulher-luta-contra-alergia-a-gravidez-e-realiza-sonho-de-ser-mae-12092014|produto-de-beleza-componente-de-cosmeticos-causa-alergia-e-deforma-a-pele-de-usuarios-24082019|jovem-tem-alergia-a-propria-gravidez-me-deu-coceira-e-manchas-vermelhas-no-corpo-foi-horrivel-15012016|mulher-emagrece-35-kg-apos-descobrir-que-engordava-por-alergia-alimentar-10012017|marilia-mendonca-diz-que-sumiu-das-redes-sociais-por-causa-de-alergia-a-camarao-16022021|roupas-guardadas-por-muito-tempo-podem-causar-alergia-21102015|saiba-como-evitar-alergia-irritacao-e-cortes-na-pele-ao-fazer-a-barba-22102018|garotinha-faz-tatuagem-de-henna-sofre-com-alergia-e-pode-ficar-marcada-pra-sempre-16062018|alergia-o-perigo-invisivel-leo-aquilla-e-jesus-mosquera-fazem-o-teste-alergico-06102018|intolerancia-ou-alergia-alimentar-veja-a-diferenca-entre-os-problemas-14072019|mulher-vampira-leva-vida-macabra-bebe-sangue-do-namorado-e-diz-ter-alergia-ao-sol-16062018|menino-de-4-anos-sofre-com-alergia-de-agua-nao-sabiamos-o-que-fazer-26082015|muitos-brasileiros-sofrem-com-alergia-a-plastico-06102018|cuidado-edredom-sujo-pode-causar-alergia-veja-como-manter-a-limpeza-e-proteger-a-familia-24082019|cientistas-descobrem-alergia-relacionada-a-atividades-como-correr-andar-de-onibus-e-bater-palmas-08022016|e-gripe-ou-alergia-conheca-as-diferencas-e-os-sintomas-de-cada-03052018|simone-tem-alergia-a-peido-dispara-nicole-25112018|atencao-dormir-com-a-maquiagem-do-carnaval-pode-provocar-alergia-e-contaminacao-nos-olhos-16022015|apos-morte-de-jovem-em-tomografia-domingo-espetacular-ensina-a-se-proteger-de-alergias-repentinas-13092018|alergia-rara-a-agua-faz-com-que-pessoas-nao-possam-tomar-banho-nem-entrar-no-mar-24102016|jovem-com-alergia-morre-apos-beijar-namorado-que-havia-comido-amendoim-11062016|bichos-de-pelucia-podem-piorar-alergias-e-doencas-respiratorias-das-criancas-06102018|erro-medico-crianca-com-alergia-morre-ao-receber-dose-exagerada-de-adrenalina-06102018|saiba-como-vivem-os-portadores-da-doenca-rara-que-gera-alergia-ao-wi-fi-05102018|doenca-rara-alergia-a-agua-impede-pessoas-de-tomarem-banho-chorar-e-suar-entenda-14042015|mulher-fica-deformada-com-alergia-a-protetor-solar-e-passa-dois-dias-no-hospital-10072013|alergias-na-pele-o-que-e-causas-prevencao-e-tratamentos-16042020|tratamento-facial-causa-alergia-e-deforma-rosto-de-blogueira-de-cingapura-24082019|mulher-tem-alergia-do-marido-por-causa-de-doenca-rara-21102018|parece-mutilacao-menina-faz-tatuagem-de-alergia-e-revela-doenca-misteriosa-para-cientistas-19022016|alergia-ao-proprio-suor-e-rara-e-incomoda-parte-da-populacao-21102018|sintomas-de-alergias-respiratorias-podem-ser-confundidos-com-os-da-covid-19-26082020|noiva-fica-com-cicatrizes-apos-alergia-a-cera-depilatoria-meu-rosto-ficou-horrivel-11022017|alergia-infeccao-perda-de-fios-medicos-alertam-para-os-perigos-do-alongamento-de-cilios-11072015|alergia-a-orgasmo-homem-sofre-com-reacao-rara-ao-ejacular-29012020|coceira-e-vermelhidao-cuidado-seu-pet-pode-estar-com-alergia-20111107|coceira-durante-corrida-pode-ser-alergia-a-exercicio-fisico-06102018|virou-alergico-depois-de-velho-tire-suas-duvidas-sobre-a-alergia-07052018|homem-com-rarissima-alergia-a-frio-escapa-da-morte-apos-banho-quente-06112020|uso-de-duas-mascaras-pode-bloquear-ate-90-das-particulas-da-tosse-17032021|tosse-com-catarro-causas-tratamento-e-quando-buscar-ajuda-14012021|oricoelazaro116-2301-sammu-ramat-tosse-sangue-e-preocupa-darice-17012020|voce-e-o-doutor-entenda-o-que-provoca-a-tosse-e-o-que-acontece-no-organismo-14102018|homem-e-achado-vivo-em-cemiterio-com-mumias-e-motosserras-entenda-16082020|diego-costa-simula-tosse-na-zona-mista-e-e-criticado-por-jornalistas-12032020|homem-e-achado-vivo-em-pequenas-mumias-com-motosserras-entenda-16082020|dupla-armada-com-motosserras-ameaca-e-assusta-turistas-em-praia-14082020|saiba-como-tratar-a-tosse-e-evite-as-crises-de-bronquite-14102018|receita-caseira-quase-mata-crianca-com-tosse-26082019|azia-pode-causar-dores-no-peito-e-tosse-cronica-veja-mitos-e-verdades-01072016|homem-corta-arvore-e-sofre-acidente-inacreditavel-com-motosserra-16062018|jose-arma-emboscada-e-ataca-ex-mulher-com-motosserra-na-frente-da-filha-24112020|homem-e-achado-em-cemiterio-com-mumias-e-motosserras-entenda-21082020|imagens-mostram-momento-que-maniaco-da-motosserra-ataca-rapaz-em-minas-gerais-20102018|exclusivo-marcelo-rezende-entrevista-o-homem-da-motosserra-15092018|casal-e-agredido-apos-crise-de-tosse-dentro-de-restaurante-em-curitiba-pr-11122020|homem-tosse-apos-se-engasgar-e-e-agredido-por-cliente-em-restaurante-12122020|a-rotina-exaustiva-em-carvoarias-clandestinas-expoe-trabalhadores-a-doencas-respiratorias-16112020|internacoes-por-doencas-respiratorias-graves-desacelera-no-brasil-02042020|coronavirus-sintoma-de-dificuldade-respiratoria-e-o-mais-grave-segundo-medico-03042020|atriz-gloria-menezes-e-internada-com-infeccao-respiratoria-20102018|apos-internacao-com-coronavirus-apresentador-celso-zucatelli-faz-fisioterapia-respiratoria-17042021|diego-maradona-morre-apos-parada-cardiorrespiratoria-25112020|doencas-respiratorias-podem-aumentar-por-causa-dos-fungos-e-acaros-nos-colchoes-07012019|morte-de-negros-por-doencas-respiratorias-cresce-em-maior-ritmo-13072020|internacoes-de-criancas-por-sindrome-respiratoria-crescem-25-em-sp-19032021|doencas-respiratorias-podem-ser-confundidas-com-sintomas-da-covid-19-22042020|samuel-klein-morre-de-insuficiencia-respiratoria-nesta-sexta-feira-20-06102018|mudancas-bruscas-na-temperatura-podem-causar-doencas-respiratorias-25082020|jogador-brasileiro-sofre-parada-cardiorrespiratoria-em-campo-03012021|atriz-aracy-balabanian-se-recupera-bem-de-infeccao-respiratoria-06102018|vanusa-musa-da-jovem-guarda-morre-vitima-de-insuficiencia-respiratoria-08112020|jogador-brasileiro-que-atua-em-portugal-sofre-parada-cardiorrespiratoria-durante-jogo-04012021|alta-de-casos-de-sindrome-respiratoria-grave-no-brasil-e-milhoes-vacinados-nos-eua-sao-destaques-de-sexta-21-21052021|caso-de-infeccao-respiratoria-provocada-pela-mutacao-do-virus-influenza-a-e-confirmado-no-parana-11072020|diego-maradona-morre-na-argentina-apos-sofrer-parada-cardiorrespiratoria-25112020|meia-brasileiro-de-24-anos-sofre-parada-cardiorrespiratoria-03012021|colonia-de-bacterias-melhora-o-sistema-imunologico-e-a-flora-intestinal-18022020|homem-solta-um-potente-vento-intestinal-em-policial-e-e-multado-17062020)"
    }], [{
      "type": "page",
      "condition": "regex",
      "operand": "=",
      "value": "^\\/(famosos-e-tv|minas-gerais|rio-de-janeiro|jr-24h)\\/(mayra-cardi-diz-que-teve-alergia-emocional-apos-expor-arthur-aguiar-29062020|balanco-geral-mg|mg-record|rj-no-ar|mg-no-ar|boletim-jr-24h)\\/(famosos-e-tv|videos)\\/(mayra-cardi-diz-que-teve-alergia-emocional-apos-expor-arthur-aguiar-29062020|dicas-de-beleza-aprenda-a-fazer-creme-de-cabelo-para-pessoas-com-alergia-15102015|com-sintomas-parecidos-a-febre-diferencia-a-alergia-da-covid-19-06042020|suspeito-de-decapitar-traficante-e-encontrado-com-motosserra-no-rio-21102015|homem-rouba-motosserra-de-carro-de-idosa-de-70-anos-em-contagem-06012020|mortes-por-doencas-respiratorias-dentro-de-casa-aumenta-em-mg-25082020|casos-de-sindrome-respiratoria-grave-aumentam-em-8-estados-brasileiros-21052021|mortes-por-sindrome-respiratoria-grave-crescem-763-em-minas-11052020|ex-jogador-do-cruzeiro-sofre-parada-cardiorrespiratoria-durante-jogo-04012021)"
    }]]
  }, {
    "type": "js",
    "content": "window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'AW-AW-931232517');",
    "rules": [[{
      "type": "page",
      "condition": "regex",
      "operand": "=",
      "value": ".*"
    }]]
  }],
  cas: {
    "CA15443": [{
      "type": "img",
      "src": "//cm.g.doubleclick.net/pixel?google_nid=tailtarget_dmp&google_cm&google_ula=863986578"
    }, {
      "type": "img",
      "src": "https://www.facebook.com/tr?id=1992888384353851&ev=Tail&cd[custom_audience]=CA15443"
    }, {
      "type": "img",
      "src": "//cm.g.doubleclick.net/pixel?google_nid=tailtarget_dmp&google_cm&google_ula=865065375"
    }, {
      "type": "img",
      "src": "https://www.facebook.com/tr?id=218425702240507&ev=Tail&cd[custom_audience]=CA15443"
    }, {
      "type": "img",
      "src": "//cm.g.doubleclick.net/pixel?google_nid=tailtarget_dmp&google_cm&google_ula=871370432"
    }],
    "CA15288": [{
      "type": "img",
      "src": "//cm.g.doubleclick.net/pixel?google_nid=tailtarget_dmp&google_cm&google_ula=863657326"
    }, {
      "type": "img",
      "src": "https://www.facebook.com/tr?id=218425702240507&ev=Tail&cd[custom_audience]=CA15288"
    }, {
      "type": "img",
      "src": "//cm.g.doubleclick.net/pixel?google_nid=tailtarget_dmp&google_cm&google_ula=872987781"
    }],
    "CA17820": [{
      "type": "js",
      "content": "gtag('event', 'conversion', {\n'send_to': 'AW-931232517/efNVCPvQlbMBEIX2hbwD',\n'aw_remarketing_only': true\n});"
    }],
    "CA17800": [{
      "type": "img",
      "src": "//cm.g.doubleclick.net/pixel?google_nid=tailtarget_dmp&google_cm&google_ula=863657002"
    }, {
      "type": "img",
      "src": "https://www.facebook.com/tr?id=218425702240507&ev=Tail&cd[custom_audience]=CA17800"
    }],
    "CA22026": [{
      "type": "img",
      "src": "https://www.facebook.com/tr?id=218425702240507&ev=Tail&cd[custom_audience]=CA22026"
    }, {
      "type": "img",
      "src": "//cm.g.doubleclick.net/pixel?google_nid=tailtarget_dmp&google_cm&google_ula=871451188"
    }],
    "CA20585": [{
      "type": "img",
      "src": "//cm.g.doubleclick.net/pixel?google_nid=tailtarget_dmp&google_cm&google_ula=865066521"
    }, {
      "type": "img",
      "src": "https://www.facebook.com/tr?id=218425702240507&ev=Tail&cd[custom_audience]=CA20585"
    }, {
      "type": "img",
      "src": "//cm.g.doubleclick.net/pixel?google_nid=tailtarget_dmp&google_cm&google_ula=871620412"
    }],
    "CA15342": [{
      "type": "js",
      "content": "gtag('event', 'conversion', {\n'send_to': 'AW-931232517/ncoDCKT0pbMBEIX2hbwD',\n'aw_remarketing_only': true\n});"
    }],
    "CA15360": [{
      "type": "img",
      "src": "//cm.g.doubleclick.net/pixel?google_nid=tailtarget_dmp&google_cm&google_ula=865065714"
    }, {
      "type": "img",
      "src": "https://www.facebook.com/tr?id=218425702240507&ev=Tail&cd[custom_audience]=CA15360"
    }, {
      "type": "img",
      "src": "//cm.g.doubleclick.net/pixel?google_nid=tailtarget_dmp&google_cm&google_ula=871618843"
    }],
    "CA22009": [{
      "type": "img",
      "src": "https://www.facebook.com/tr?id=1992888384353851&ev=Tail&cd[custom_audience]=CA22009"
    }, {
      "type": "img",
      "src": "https://www.facebook.com/tr?id=218425702240507&ev=Tail&cd[custom_audience]=CA22009"
    }, {
      "type": "img",
      "src": "//cm.g.doubleclick.net/pixel?google_nid=tailtarget_dmp&google_cm&google_ula=872855142"
    }],
    "CA15779": [{
      "type": "img",
      "src": "//cm.g.doubleclick.net/pixel?google_nid=tailtarget_dmp&google_cm&google_ula=863656291"
    }, {
      "type": "img",
      "src": "https://www.facebook.com/tr?id=218425702240507&ev=Tail&cd[custom_audience]=CA15779"
    }, {
      "type": "img",
      "src": "//cm.g.doubleclick.net/pixel?google_nid=tailtarget_dmp&google_cm&google_ula=872988855"
    }, {
      "type": "js",
      "content": "gtag('event', 'conversion', {\n'send_to': 'AW-931232517/RQZLCKTSorMBEIX2hbwD',\n'aw_remarketing_only': true\n});"
    }],
    "CA15778": [{
      "type": "img",
      "src": "//cm.g.doubleclick.net/pixel?google_nid=tailtarget_dmp&google_cm&google_ula=865061244"
    }, {
      "type": "img",
      "src": "https://www.facebook.com/tr?id=218425702240507&ev=Tail&cd[custom_audience]=CA15778"
    }, {
      "type": "img",
      "src": "//cm.g.doubleclick.net/pixel?google_nid=tailtarget_dmp&google_cm&google_ula=872988846"
    }],
    "CA15799": [{
      "type": "img",
      "src": "//cm.g.doubleclick.net/pixel?google_nid=tailtarget_dmp&google_cm&google_ula=863447183"
    }, {
      "type": "img",
      "src": "https://www.facebook.com/tr?id=218425702240507&ev=Tail&cd[custom_audience]=CA15799"
    }],
    "CA15399": [{
      "type": "img",
      "src": "//cm.g.doubleclick.net/pixel?google_nid=tailtarget_dmp&google_cm&google_ula=863656843"
    }, {
      "type": "img",
      "src": "https://www.facebook.com/tr?id=218425702240507&ev=Tail&cd[custom_audience]=CA15399"
    }, {
      "type": "img",
      "src": "//cm.g.doubleclick.net/pixel?google_nid=tailtarget_dmp&google_cm&google_ula=871620355"
    }],
    "CA15332": [{
      "type": "img",
      "src": "//cm.g.doubleclick.net/pixel?google_nid=tailtarget_dmp&google_cm&google_ula=863987076"
    }, {
      "type": "img",
      "src": "https://www.facebook.com/tr?id=1992888384353851&ev=Tail&cd[custom_audience]=CA15332"
    }],
    "CA17812": [{
      "type": "img",
      "src": "//cm.g.doubleclick.net/pixel?google_nid=tailtarget_dmp&google_cm&google_ula=865066500"
    }, {
      "type": "img",
      "src": "https://www.facebook.com/tr?id=218425702240507&ev=Tail&cd[custom_audience]=CA17812"
    }, {
      "type": "img",
      "src": "//cm.g.doubleclick.net/pixel?google_nid=tailtarget_dmp&google_cm&google_ula=872986848"
    }],
    "CA18845": [{
      "type": "img",
      "src": "//cm.g.doubleclick.net/pixel?google_nid=tailtarget_dmp&google_cm&google_ula=865063536"
    }, {
      "type": "img",
      "src": "https://www.facebook.com/tr?id=218425702240507&ev=Tail&cd[custom_audience]=CA18845"
    }, {
      "type": "img",
      "src": "//cm.g.doubleclick.net/pixel?google_nid=tailtarget_dmp&google_cm&google_ula=872987007"
    }],
    "CA18848": [{
      "type": "img",
      "src": "//cm.g.doubleclick.net/pixel?google_nid=tailtarget_dmp&google_cm&google_ula=863656468"
    }, {
      "type": "img",
      "src": "https://www.facebook.com/tr?id=218425702240507&ev=Tail&cd[custom_audience]=CA18848"
    }, {
      "type": "img",
      "src": "//cm.g.doubleclick.net/pixel?google_nid=tailtarget_dmp&google_cm&google_ula=871371173"
    }, {
      "type": "js",
      "content": "gtag('event', 'conversion', {\n'send_to': 'AW-931232517/-KPWCMziorMBEIX2hbwD',\n'aw_remarketing_only': true\n});"
    }],
    "CA22013": [{
      "type": "img",
      "src": "https://www.facebook.com/tr?id=1992888384353851&ev=Tail&cd[custom_audience]=CA22013"
    }],
    "CA22014": [{
      "type": "img",
      "src": "https://www.facebook.com/tr?id=1992888384353851&ev=Tail&cd[custom_audience]=CA22014"
    }, {
      "type": "img",
      "src": "https://www.facebook.com/tr?id=218425702240507&ev=Tail&cd[custom_audience]=CA22014"
    }, {
      "type": "img",
      "src": "//cm.g.doubleclick.net/pixel?google_nid=tailtarget_dmp&google_cm&google_ula=871620325"
    }],
    "CA22015": [{
      "type": "img",
      "src": "https://www.facebook.com/tr?id=1992888384353851&ev=Tail&cd[custom_audience]=CA22015"
    }],
    "CA22016": [{
      "type": "img",
      "src": "https://www.facebook.com/tr?id=1992888384353851&ev=Tail&cd[custom_audience]=CA22016"
    }],
    "CA22137": [{
      "type": "js",
      "content": "gtag('event', 'conversion', {\n'send_to': 'AW-931232517/Di--CM6GprMBEIX2hbwD',\n'aw_remarketing_only': true\n});"
    }],
    "CA22010": [{
      "type": "img",
      "src": "https://www.facebook.com/tr?id=1992888384353851&ev=Tail&cd[custom_audience]=CA22010"
    }, {
      "type": "img",
      "src": "https://www.facebook.com/tr?id=218425702240507&ev=Tail&cd[custom_audience]=CA22010"
    }, {
      "type": "img",
      "src": "//cm.g.doubleclick.net/pixel?google_nid=tailtarget_dmp&google_cm&google_ula=872987562"
    }],
    "CA22011": [{
      "type": "img",
      "src": "https://www.facebook.com/tr?id=1992888384353851&ev=Tail&cd[custom_audience]=CA22011"
    }, {
      "type": "img",
      "src": "https://www.facebook.com/tr?id=218425702240507&ev=Tail&cd[custom_audience]=CA22011"
    }, {
      "type": "img",
      "src": "//cm.g.doubleclick.net/pixel?google_nid=tailtarget_dmp&google_cm&google_ula=872984961"
    }],
    "CA22012": [{
      "type": "img",
      "src": "https://www.facebook.com/tr?id=1992888384353851&ev=Tail&cd[custom_audience]=CA22012"
    }],
    "CA15892": [{
      "type": "img",
      "src": "//cm.g.doubleclick.net/pixel?google_nid=tailtarget_ddp&google_cm&google_ula=602057921"
    }, {
      "type": "img",
      "src": "//dmp.t.tailtarget.com/seg/tailtarget/TT-9964-3/15892"
    }],
    "CA15771": [{
      "type": "img",
      "src": "//cm.g.doubleclick.net/pixel?google_nid=tailtarget_dmp&google_cm&google_ula=862479430"
    }, {
      "type": "img",
      "src": "https://www.facebook.com/tr?id=1992888384353851&ev=Tail&cd[custom_audience]=CA15771"
    }],
    "CA15330": [{
      "type": "img",
      "src": "//cm.g.doubleclick.net/pixel?google_nid=tailtarget_dmp&google_cm&google_ula=863446655"
    }, {
      "type": "img",
      "src": "https://www.facebook.com/tr?id=218425702240507&ev=Tail&cd[custom_audience]=CA15330"
    }, {
      "type": "img",
      "src": "//cm.g.doubleclick.net/pixel?google_nid=tailtarget_dmp&google_cm&google_ula=872988690"
    }],
    "CA22017": [{
      "type": "img",
      "src": "https://www.facebook.com/tr?id=1992888384353851&ev=Tail&cd[custom_audience]=CA22017"
    }, {
      "type": "img",
      "src": "https://www.facebook.com/tr?id=218425702240507&ev=Tail&cd[custom_audience]=CA22017"
    }, {
      "type": "img",
      "src": "//cm.g.doubleclick.net/pixel?google_nid=tailtarget_dmp&google_cm&google_ula=872987853"
    }],
    "CA22138": [{
      "type": "js",
      "content": "gtag('event', 'conversion', {\n'send_to': 'AW-931232517/Da5dCOjmorMBEIX2hbwD',\n'aw_remarketing_only': true\n});"
    }],
    "CA22139": [{
      "type": "js",
      "content": "gtag('event', 'conversion', {\n'send_to': 'AW-931232517/D28ZCOjhlbMBEIX2hbwD',\n'aw_remarketing_only': true\n});"
    }],
    "CA22019": [{
      "type": "img",
      "src": "https://www.facebook.com/tr?id=218425702240507&ev=Tail&cd[custom_audience]=CA22019"
    }, {
      "type": "img",
      "src": "//cm.g.doubleclick.net/pixel?google_nid=tailtarget_dmp&google_cm&google_ula=871620613"
    }, {
      "type": "js",
      "content": "gtag('event', 'conversion', {\n'send_to': 'AW-931232517/UdtoCPOKprMBEIX2hbwD',\n'aw_remarketing_only': true\n});"
    }]
  }
});
window.EventSource = new Proxy(originalEventSource, {});
addEventListeners(); // Adding event listeners to all elements